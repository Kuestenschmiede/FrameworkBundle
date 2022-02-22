/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import FormView from "../form/FormView.jsx";
import {TableButton} from "./button/TableButton.jsx";
import {ModalDetailTableButton} from "./button/ModalDetailTableButton.jsx";
import {PostActionButton} from "./button/PostActionButton.jsx";
import {createTheme, ThemeProvider} from '@mui/material';
import {AlertHandler} from "../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const MUIDataTable = React.lazy(() => import("mui-datatables"));
const FormMapperField = React.lazy(() => import("./../form/fields/FormMapperField.jsx"));

export default class TableView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
      activeForm: false, // will be set to true when a selection button is clicked,
      activeButton: null, // will be set when a selection button is clicked,
      data: JSON.parse(JSON.stringify(this.props.data))
    };

    this.formData = [];
    this.selectedItems = [];
    this.datatable = null;
    this.addSelectedItem = this.addSelectedItem.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.setFormData = this.setFormData.bind(this);
    this.fireRequest = this.fireRequest.bind(this);
  }

  getMuiTheme = () => createTheme({
    overrides: {
      MuiPaper: {
        elevation4: {
          boxShadow: "none"
        }
      },
      MuiToolbar: {
        gutters: {
          backgroundColor: "#f8f9fa",
          borderRadius: "0.25rem",
          paddingTop: "10px",
          paddingBottom: "10px"
        }
      }
    }
  })

  render() {
    let buttons = null;
    let regularButtons = null;
    // selection buttons
    if (this.state.selectedItems.length > 0 && this.props.component.selectionButtons
      && this.props.component.selectionButtons.length > 0) {
      buttons = <div className={"action-button-container"}>
        {this.props.component.selectionButtons.map((item, index) => {
          return <button className={"btn"} key={index}
                         onClick={() => this.handleButtonClick(item, index)}>{item.label}</button>
        })}
      </div>;
    }
    // regular buttons
    if (this.props.component.tableButtons && this.props.component.tableButtons.length > 0) {
      regularButtons = <div className={"action-button-container"}>
        {
          this.props.component.tableButtons.map((item, index) => {
            return <TableButton key={index} text={item.label} href={item.href} languageRefs={this.props.languageRefs}/>
          })
        }
      </div>;
    }
    let options = {
      textLabels: {
        body: {
          noMatch: this.props.languageRefs.TABLE_NO_MATCH,
          toolTip: this.props.languageRefs.TABLE_TOOLTIP,
          columnHeaderTooltip: column => `Sortierung für ${column.label}`
        },
        pagination: {
          next: this.props.languageRefs.TABLE_NEXT_PAGE,
          previous: this.props.languageRefs.TABLE_PREVIOUS_PAGE,
          rowsPerPage: this.props.languageRefs.TABLE_ROWS_PER_PAGE,
          displayRows: this.props.languageRefs.TABLE_DISPLAY_ROWS,
        },
        toolbar: {
          search: this.props.languageRefs.TABLE_SEARCH,
          downloadCsv: this.props.languageRefs.TABLE_DOWNLOAD_CSV,
          print: this.props.languageRefs.TABLE_PRINT,
          viewColumns: this.props.languageRefs.TABLE_VIEW_COLUMNS,
          filterTable: this.props.languageRefs.TABLE_FILTER_TABLE,
        },
        filter: {
          all: this.props.languageRefs.TABLE_FILTER_ALL,
          title: this.props.languageRefs.TABLE_FILTER_TITLE,
          reset: this.props.languageRefs.TABLE_FILTER_RESET,
        },
        viewColumns: {
          title: this.props.languageRefs.TABLE_TITLE,
          titleAria: this.props.languageRefs.TABLE_TITLE_ARIA,
        },
        selectedRows: {
          text: this.props.languageRefs.TABLE_SELECTED_TEXT,
          delete: this.props.languageRefs.TABLE_SELECTED_DELETE,
          deleteAria: this.props.languageRefs.TABLE_SELECTED_DELETE_ARIA,
        },
      }
    };


    if (this.props.component.tableButtons && this.props.component.tableButtons.length > 0) {
      options["customToolbar"] = function () {
        return <React.Fragment>
          {regularButtons}
        </React.Fragment>;
      }

    }
    if (this.props.component.checkbox) {
      options["onRowSelectionChange"] = (currentRowsSelected, allRowsSelected, rowsSelected) => {
        this.addSelectedItem(currentRowsSelected, allRowsSelected, rowsSelected);
      };
    }
    if (this.props.component.selectionButtons && this.props.component.selectionButtons.length > 0) {
      options["customToolbarSelect"] = function () {
        return <React.Fragment>
          {buttons}
        </React.Fragment>;
      };
    }

    let columns = this.createColumns(this.props.fields);
    if (this.props.component.checkbox) {
      options["selectableRows"] = "single";
    } else {
      options["selectableRows"] = "none";
    }
    options["rowsSelected"] = this.state.selectedItems;
    options["onTableChange"] = (action, tableState) => {
      this.persistParamsIntoStorage(tableState);
    };
    options["searchOpen"] = !!this.searchOpen;
    options["searchAlwaysOpen"] = true;

    return (
      <div className={""}>
        <ThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable data={this.state.data.filter(element => element != null)} columns={columns}
                        options={options} key={0} ref={(node) => this.datatable = node}
                        title={this.props.component.headline}
                        responsive
          >
          </MUIDataTable>
        </ThemeProvider>
      </div>
    );
  }

  setFormData(name, objData) {
    this.formData = {
      ...this.formData,
      ...objData
    };
  }

  addSelectedItem(currentRowsSelected, allRowsSelected, rowsSelected) {
    this.setState({selectedItems: rowsSelected});
  }

  handleButtonClick(buttonConf, index) {
    // set props object to make form fields work
    buttonConf.form.props = {};
    buttonConf.form.props.updateFunction = this.setFormData;
    let form = <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>}>
      <form key={1} className={"form-view"} method={"POST"}>
        {
          buttonConf.form.fields.map((item, id) => {
            return <FormMapperField form={buttonConf.form} field={item} data={[]} key={id + 1}/>
          })
        }
      </form>
    </Suspense>;

    // show modal
    MySwal.fire({
      title: <p>{buttonConf.label}</p>,
      html: form,
      confirmButtonText: buttonConf.submitButtonLabel || this.props.languageRefs.CONFIRM,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: buttonConf.cancelButtonLabel || this.props.languageRefs.CANCEL,
      customClass: {
        content: "zIndex-9",
        actions: "zIndex-8"
      }
    }).then((value) => {
      if (value.isConfirmed) {
        this.submitForm(buttonConf);
      } else {
        this.cancelForm();
      }
    })
  }

  submitForm(activeButton) {
    // event.preventDefault();
    // get id of selected dataset
    let selectedId = this.state.selectedItems[0];
    let selectedData = this.state.data[selectedId];
    let url = activeButton.form.url;
    this.formData.id = selectedData.id;
    jQuery.post(url, this.formData).done((responseData) => {
      // this.resetSelection();
      location.reload();
    });
  }

  cancelForm() {
    this.resetSelection();
  }

  format(value, format) {
    return format.replace(/%s/g, value);
  }

  resetSelection() {
    // delete selected row
    this.datatable.selectRowDelete();
    // set state, while rerendering the deleted row will be added again
    // this is used to clear the selection
    // since the used component has no API method to do so otherwise
    this.setState({selectedItems: []});
    this.selectedItems = [];
  }

  createColumns(fields) {
    let columns = [];
    for (let i = 0; i < fields.length; i++) {
      let column;
      switch (fields[i].type) {
        case "text":
          column = fields[i];
          if (fields[i].format !== '') {
            column.options.customBodyRender = (value, tableMeta, updateValue) => {
              return this.format(value, fields[i].format);
            };
          }
          columns.push(column);
          break;
        case "reference":
          column = fields[i];
          column.options.customBodyRender = (value, tableMeta, updateValue) => {
            return column.references[value];
          };
          columns.push(column);
          break;
        case "modal-detail-button":
          column = fields[i];
          column.options.customBodyRender = (value, tableMeta, updateValue) => {
            if (!!value) {
              return <ModalDetailTableButton buttonLabel={column.buttonLabel}
                                             title={column.label}
                                             message={value}
                                             confirmButtonText={column.confirmButtonText}
                                             className={column.className}/>
            } else {
              return '';
            }
          };
          columns.push(column);
          break;
        case "datetime":
          column = fields[i];
          column.options.customBodyRender = (value, tableMeta, updateValue) => {
            if (value === null) {
              return "";
            }
            let date = new Date(value * 1000);
            let day = date.getDate();
            if (day < 10) {
              day = '0' + day;
            }
            let month = date.getMonth() + 1;
            if (month < 10) {
              month = '0' + month;
            }
            let hours = date.getHours();
            if (hours < 10) {
              hours = '0' + hours;
            }
            let minutes = date.getMinutes();
            if (minutes < 10) {
              minutes = '0' + minutes;
            }
            let timeString = hours + ':' + minutes;
            let dateString = day + '.' + month + '.' + date.getFullYear() + ' ';
            if (timeString !== "00:00") {
              dateString += timeString;
            }
            return dateString;
          };
          columns.push(column);
          break;
        case "action-button":
          column = fields[i];
          column.options.customBodyRender = (value, tableMeta, updateValue) => {
            let buttons = [];
            for (let i = 0; i < column.actions.length; i++) {
              let props = column.actions[i];
              props['rowData'] = tableMeta.rowData;
              props['fields'] = fields;
              props['setRowData'] = this.props.setRowData
              props['value'] = value
              buttons.push(
                <PostActionButton key={i} {...props} />
              );
            }
            return <React.Fragment>{buttons}</React.Fragment>;
          };
          columns.push(column);
          break;
        case "button":
          let buttonCol = {
            name: fields[i].name,
            label: fields[i].label,
            options: {
              sort: false,
              viewColumns: false,
              filter: false,
              customBodyRender: (value, tableMeta, updateValue) => {
                if (fields[i].method === "POST") {
                  const callback = (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.fireRequest(fields[i].href.replace(fields[i].hrefField, value));
                  }
                  return (<a onMouseUp={callback}
                             className={"btn btn-secondary"}>{fields[i].buttonText}</a>);
                } else {
                  return (<TableButton href={fields[i].href.replace(fields[i].hrefField, value)}
                                       text={fields[i].buttonText}
                                       formFields={fields[i].formFields}
                                       submitButtonLabel={fields[i].submitButtonLabel}
                                       cancelButtonLabel={fields[i].cancelButtonLabel}
                                       url={fields[i].url}
                                       formHeadlineFieldIndex={fields[i].formHeadlineFieldIndex}
                                       value={value}
                                       rowData={tableMeta.rowData}/>);
                }

              }
            }
          }
          columns.push(buttonCol);
          break;
        case "conditional-marker":
          let objMarkers = fields[i].markers;
          let markerCol = {
            name: fields[i].name,
            label: fields[i].label,
            options: {
              sort: false,
              customBodyRender: (value) => {
                let markerData = objMarkers[value];
                return <span className={markerData.class} data-state={markerData.dataState}
                        data-toggle={markerData.dataToggle} data-placement={markerData.dataPlacement}
                        title={markerData.title}/>
              }
            }
          }
          columns.push(markerCol);
          break;
        default:
          columns.push(fields[i]);
      }
    }

    return columns;
  }

  fireRequest(url) {
    // sanity check
    let ah = new AlertHandler();
    let confirmCallback = () => {
      jQuery.post(url).done((data) => {
        if (data.success) {
          location.reload();
        }
      });
    };
    let cancelCallback = () => {

    };
    ah.showConfirmDialog(
      this.props.component.confirmationHeadline,
      this.props.component.confirmationMessage,
      confirmCallback,
      cancelCallback,
      this.props.component.confirmationYes,
      this.props.component.confirmationNo,
    );
  }

  componentDidMount() {
    if (this.props.component.loadDataAsync) {
      this.loadData();
    }
    if (!this.props.component.loadDataAsync) {
      this.applyParamsFromStorage();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.component.loadDataAsync) {
      if (prevState.data.length < this.state.data.length) {
        this.loadData();
      } else {
        this.finishedLoading = true;
      }
    } else {
      this.finishedLoading = true;
    }

    if (this.props.component.loadDataAsync && this.finishedLoading && !this.paramsRestored) {
      this.applyParamsFromStorage();
    }
  }

  applyParamsFromStorage() {
    let storageKey = this.props.component.storageKey;
    let url = new URL(window.location);
    let params = new URLSearchParams(url.search);
    if (params.has("groupId")) {
      let groupId = params.get("groupId");
      storageKey += "-" + groupId;
    }
    const filters = JSON.parse(window.localStorage.getItem(storageKey + '-filters'));
    const page = parseInt(window.localStorage.getItem(storageKey + '-page'), 10);
    const searchText = window.localStorage.getItem(storageKey + '-search');
    if (filters !== null && page !== null) {
      this.searchOpen = searchText !== "";
      window.setTimeout(() => {
        this.datatable.setState({
          filterList: filters,
          page: page,
          searchText: searchText
        }, () => {this.resetSelection(); this.paramsRestored = true;});
      }, 1000);
    }
  }

  persistParamsIntoStorage(tableState) {
    if (this.finishedLoading) {
      let storageKey = this.props.component.storageKey;
      let url = new URL(window.location);
      let params = new URLSearchParams(url.search);
      if (params.has("groupId")) {
        let groupId = params.get("groupId");
        storageKey += "-" + groupId;
      }
      window.localStorage.setItem(storageKey + "-filters", JSON.stringify(tableState.filterList));
      window.localStorage.setItem(storageKey + "-page", tableState.page);
      window.localStorage.setItem(storageKey + "-search", tableState.searchText === null ? "" : tableState.searchText);
    }
  }

  loadData() {
    let url = this.props.component.asyncDataUrl;
    url += "/" + this.state.data.length;
    jQuery.get(url).done((responseData) => {
      let data = this.state.data.concat(responseData);
      this.setState({data: data});
    });
  }
}