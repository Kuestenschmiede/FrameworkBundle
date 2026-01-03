/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


import React, {Component, Suspense, lazy} from "react";
import {getLanguage} from "./i18n";

const TableView = React.lazy(() => import("./table/TableView.jsx"));
const TileView = React.lazy(() => import("./tiles/TileView.jsx"));
const FormView = React.lazy(() => import("./form/FormView.jsx"));
const DetailView = React.lazy(() => import("./detail/DetailView.jsx"));

export class C4gUiManager extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headline: props.headline,
      components: props.components,
      filterChanged: false
    };

    this.nodeRefs = {};
    this.languageRefs = getLanguage(props.language);
    this.updateData = this.updateData.bind(this);
    this.setData = this.setData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.setFilterData = this.setFilterData.bind(this);
    this.addData = this.addData.bind(this);
    this.setFields = this.setFields.bind(this);
  }

  render() {
    let content = [];
    if (this.state.headline) {
      // TODO : Do not set fixed header sizes in the source code
      content.push(<div key={"0"}><h2>{this.state.headline}</h2></div>);
    }

    let keys = Object.keys(this.state.components);
    keys.forEach(function(key, index) {
      let component = this.state.components[key];
      switch (component.type) {
        case "table":
          content.push(this.createTableContent(component, index, key));
          break;
        case "tile":
          content.push(this.createTileContent(component, index, key));
          break;
        case "form":
          content.push(this.createFormContent(component, index, key));
          break;
        case "detail":
          content.push(this.createDetailContent(component, index, key));
          break;
      }
    }, this);

    return <React.Fragment>{content}</React.Fragment>;
  }

  setFields(component, fields) {
    // check if fields are duplicated
    let comps = this.state.components;
    let matchingFields = fields.matchingFields;
    let nonMatchingFields = fields.nonMatchingFields;
    let fieldsToAdd = [];
    let addCurrentField = true;
    // add matching fields, if they need to be added
    for (let i = 0; i < matchingFields.length; i++) {
      addCurrentField = true;
      for (let j = 0; j < comps[component].fields.length; j++) {
        if (comps[component].fields[j].name === matchingFields[i].name) {
          // field already exists
          addCurrentField = false;
          // update current field
          comps[component].fields[j] = matchingFields[i];
          break;
        }
      }
      if (addCurrentField) {
        // field was not found
        fieldsToAdd.push(matchingFields[i]);
      }
    }
    let tmpFieldList = comps[component].fields.concat(fieldsToAdd);
    let newFieldList = [];
    let showField = true;
    for (let i = 0; i < tmpFieldList.length; i++) {
      showField = true;
      for (let j = 0; j < nonMatchingFields.length; j++) {
        if (nonMatchingFields[j].name === tmpFieldList[i].name) {
          showField = false;
          break;
        }
      }
      if (showField) {
        newFieldList.push(tmpFieldList[i]);
      }
    }
    comps[component].fields = newFieldList;
    this.setState({components: comps});
  }

  updateData(component, data, field) {
    let components = this.state.components;
    if (typeof data.forEach === 'function') {
      data.forEach(function(value, index) {
        let keys = Object.keys(value);
        keys.forEach(function(key) {
          if (typeof components[component].data[index] !== 'undefined') {
            components[component].data[index][key] = value[key];
          } else {
            components[component].data.push({[key]: value[key]});
          }
        }, this);
      }, this);
    } else {
      let keys = Object.keys(data);
      keys.forEach(function(key) {
        components[component].data[key] = data[key];
      }, this);
    }

    this.setState({components: components}, () => {
      if (window.c4gHooks && window.c4gHooks.fieldChanged) {
        for (let i = 0; i < window.c4gHooks.fieldChanged.length; i++) {
          if (typeof window.c4gHooks.fieldChanged[i] === "function") {
            window.c4gHooks.fieldChanged[i](field, data);
          }
        }
      }
    });

  }

  setData(component, data, filterData, opt_asyncLoading) {
    let components = this.state.components;
    components[component].data = data;
    components[component].filterData = filterData;
    components[component].updated = true;
    if (typeof opt_asyncLoading !== "undefined") {
      components[component].asyncLoading = opt_asyncLoading;
    }
    this.setState({components: components});
  }

  deleteData(component, key, index) {
    let components = this.state.components;
    let data = components[component].data;
    if (typeof index === "number") {
      data[key].splice(index, 1);
    } else {
      delete data[key];
    }
    components[component].data = data;
    this.setState({components: components});
  }

  addData(component, newData, key) {
    let components = this.state.components;
    if (!this.state.components[component].data[key]) {
      this.state.components[component].data[key] = [];
    }
    if (typeof this.state.components[component].data[key].push === "function") {
      components[component].data[key].push(newData);
    }
    this.setState({components: components});
  }

  setFilterData(component, formData, initial) {
    let components = this.state.components;
    // check if formData and current filterData are different
    let diff = false;
    if (!components[component].filterData || !formData) {
      diff = true;
    }
    // iterate both objects to determine all differences correctly
    for (let key in components[component].filterData) {
      if (components[component].filterData.hasOwnProperty(key)) {
        if (formData[key] !== components[component].filterData[key]) {
          diff = true;
          break;
        }
      }
    }
    for (let key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (!components[component].filterData
          || (formData[key] !== components[component].filterData[key])) {
          diff = true;
          break;
        }
      }
    }
    // only reset data if differences were found
    if (diff) {
      components[component].data = [];
      if (!initial) {
        this.state.filterChanged = true;
      }
    }
    components[component].filterData = formData;
    if (components[component].setAsyncAfterFilter) {
      components[component].asyncLoading = true;
    }
    this.setState({components: components});
  }

  setRowData(component, rowData, id) {
    let components = this.state.components;
    components[component].data.rows.forEach(function (element, index) {
      if (element.id === id) {
        if (rowData == null || Object.keys(rowData).length === 0) {
          components[component].data.rows.splice(index, 1);
        } else {
          components[component].data.rows[index] = rowData;
        }
      }
    }, this);
    this.setState({components: components});
  }

  createTableContent(component, index, key) {
    return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={key}>
      <TableView key={index + 1} data={this.state.components[key].data.rows}
                 fields={this.state.components[key].data.columns}
                 component={this.state.components[key]} languageRefs={this.languageRefs}
                 setRowData={this.setRowData.bind(this, key)}/>
    </Suspense>;
  }

  createTileContent(component, index, key) {
    return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={key}>
      <TileView key={index + 1}
                name={key}
                component={JSON.parse(JSON.stringify(this.state.components[key]))}
                updateFunction={this.updateData}
                data={this.state.components[key].data}
                fields={this.state.components[key].fields}
                updated={this.state.components[key].updated}
                textBeforeUpdate={this.state.components[key].textBeforeUpdate}
                textAfterUpdate={this.state.components[key].textAfterUpdate}
                setFunction={this.setData}
                filterChanged={this.state.filterChanged}
                ref={(node) => {this.nodeRefs[this.state.components[key].name] = node;}}
                languageRefs={this.languageRefs}
      />
    </Suspense>;
  }

  createFormContent(component, index, key) {
    return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={key}>
      <FormView key={index + 1}
                name={key}
                component={this.state.components[key]}
                updateFunction={this.updateData}
                setFunction={this.setData}
                deleteDataFunction={this.deleteData}
                addDataFunction={this.addData}
                setFilterDataFunction={this.setFilterData}
                setFieldsFunction={this.setFields}
                languageRefs={this.languageRefs}
      />
    </Suspense>
  }

  createDetailContent(component, index, key) {
    return <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>} key={key}>
      <DetailView key={index + 1} data={component.data}
                  fields={component.fields}
                  component={this.state.components[key]}
                  languageRefs={this.languageRefs}
      />
    </Suspense>
  }

  componentDidMount() {
    let url = window.location.href;
    let id = url.split('#')[1];
    if (typeof id !== 'undefined') {
      window.setTimeout(() =>
      {
        try {
          $([document.documentElement, document.body]).animate({
            scrollTop: $('#' + id).offset().top
          }, 200);
          document.getElementById(id).focus();
        } catch (error) {}
      }, 200);
    }

    if (typeof reactRenderReady === "function") {
      window.setTimeout(function() {
        reactRenderReady();
      }, 750);
    }

    if (typeof reactRenderReadySecond === "function") {
      window.setTimeout(function() {
        reactRenderReadySecond();
      }, 750);
    }
  }

  componentWillUnmount() {
    this.setState({components: {}});
  }
}