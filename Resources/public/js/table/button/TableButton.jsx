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
import {AlertHandler} from "../../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler.js";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormMapperField = React.lazy(() => import("../../form/fields/FormMapperField.jsx"));
const MySwal = withReactContent(Swal);

export class TableButton extends Component {

  constructor(props) {
    super(props);

    this.showPopupForm = this.showPopupForm.bind(this);
  }

  showPopupForm(event, data) {
    let formProps = {};
    formProps.updateFunction = function() {};
    let div = null;
    if (this.props.formHeadlineFieldIndex > -1) {
      div = <div id={"swal-popup-div"}>{this.props.rowData[this.props.formHeadlineFieldIndex]}</div>;
    }
    let form = <Suspense fallback={<div style={{textAlign: "center", margin: "auto"}}><img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/></div>}>
      <form key={1} className={"form-view"} method={"POST"} id={"swal-popup-form"}>
        {
          this.props.formFields.map((item, id) => {
            return <FormMapperField form={{props: formProps, fields: this.props.formFields}}
                                    field={item}
                                    data={data}
                                    key={id + 1}/>
          })
        }
      </form>
    </Suspense>;

    MySwal.fire({
      title: <p>{this.props.text}</p>,
      html: <React.Fragment>{div}{form}</React.Fragment>,
      confirmButtonText: this.props.submitButtonLabel || this.props.languageRefs.CONFIRM,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: this.props.cancelButtonLabel || this.props.languageRefs.CANCEL,
      customClass: {
        content: "zIndex-9",
        actions: "zIndex-8"
      }
    }).then((value) => {
      if (value.isConfirmed) {
        let formElements = document.getElementById("swal-popup-form").elements;
        let data = {value: this.props.value};
        let index = 0;
        while (index < formElements.length) {
          let element = formElements.item(index);
          if (element.name) {
            data[element.name] = element.value;
          }
          index += 1;
        }
        jQuery.post(this.props.url, data).done((responseData) => {
          let ah = new AlertHandler();
          ah.showInfoDialog(
            responseData.success.title,
            responseData.success.message,
            ''
          );
        }).fail((responseData) => {
          let ah = new AlertHandler();
          if (responseData.responseJSON.error) {
            ah.showInfoActionDialog(
              responseData.responseJSON.error.title,
              responseData.responseJSON.error.message,
              () => this.showPopupForm(event, responseData.responseJSON.formData),
              ''
            );
          } else if (responseData.responseJSON.actionRefresh) {
            ah.showInfoActionDialog(
              responseData.responseJSON.actionRefresh.title,
              responseData.responseJSON.actionRefresh.message,
              () => location.reload(),
              ''
            );
          }

        });
      } else {

      }
    })
  }

  render() {
    if (this.props.href && this.props.href !== 'undefined' && this.props.href !== this.props.value) {
      return (
        <a href={this.props.href} className={"btn btn-outline-secondary"}>{this.props.text}</a>
      );
    } else if (this.props.formFields.length > 0) {
      return (
        <button type={"button"}
                className={"btn btn-outline-secondary"}
                onClick={() => this.showPopupForm(event, {})}>
          {this.props.text}
        </button>
      );
    }
  }
}