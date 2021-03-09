/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";

const FormCroppedFileUploadField = React.lazy(() => import("./FormCroppedFileUploadField.jsx"));

export default class FormImageGalleryUploadField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: event.target.value});
  }

  render() {

    let label = null;
    if (this.props.field.label) {
      label = (<React.Fragment>
        <label htmlFor={this.props.field.name} required={this.props.field.required}>{this.props.field.label}</label>
      </React.Fragment>);
    }
    let description = null;
    if (this.props.field.label) {
      description = (<span className={"field-description"}>{this.props.field.description}</span>);
    }
    const arrImages = [];
    for (let i = 0; i < this.props.field.maxImages; i++) {
      if (this.props.data[this.props.field.name + "_" + i]) {
        arrImages.push(this.props.data[this.props.field.name + "_" + i]);
      } else {
        arrImages.push({});
      }
    }

    return (
        <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"}>
          {label}
          {arrImages.map((value, index) => {
            let field = JSON.parse(JSON.stringify(this.props.field));
            field.label = "";
            field.name = field.name + "_" + index;
            return <FormCroppedFileUploadField key={index} data={this.props.data} field={field} form={this.props.form}/>
          })}
          {description}
        </div>
    );
  }

}