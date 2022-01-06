/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormTextField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: event.target.value}, this.props.field);
    if (this.props.field.dynamicFieldlist) {
      let postData = {[this.props.field.name]: event.target.value};
      if (this.props.field.dynamicFieldlistAdditionalFields
        && this.props.field.dynamicFieldlistAdditionalFields.length > 0
      ) {
        const addFields = this.props.field.dynamicFieldlistAdditionalFields;
        for (let i = 0; i < addFields.length; i++) {
          postData[addFields[i]] = this.props.data[addFields[i]];
        }
      }
      jQuery.post(this.props.field.dynamicFieldlistUrl, postData)
        .done((responseData) => {
          if (responseData && responseData.matchingFields
            && responseData.nonMatchingFields
          ) {
            this.props.form.props.setFieldsFunction(this.props.form.props.name, responseData);
          }
        });
    }
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data, this.props.fields)) {
      return null;
    }

    let label = null;
    let ariaLabel = null;
    if (this.props.field.label) {
      let labelClass = "";
      if (this.props.field.required) {
        labelClass = "c4g-required";
        label = <label className={labelClass} htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      } else {
        label = <label htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      }
    } else {
      if (this.props.field.placeholder) {
        ariaLabel = this.props.field.placeholder;
      }
    }
    let description = null;

    let descriptionLink = null;
    if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
      descriptionLink = <a className={"form-description-link btn btn-info btn-sm"} href={this.props.field.descriptionLink} target="_blank"><i
          className="fas fa-info-circle"></i> {this.props.field.descriptionLinkLabel}</a>;
    }

    if (this.props.field.label) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description} {descriptionLink}</small>);
    }

    let content = <React.Fragment>
      <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"}>
        {label}
        {this.props.errorText && typeof this.props.errorText === "string" && <div className={"text-danger"}>{this.props.errorText}</div>}
        <input type={this.props.field.type}
               id={this.props.field.name}
               name={this.props.field.name}
               required={this.props.field.required}
               defaultValue={this.props.data[this.props.field.name] || this.props.field.value}
               pattern={this.props.field.pattern}
               onChange={this.handleChange}
               placeholder={this.props.field.placeholder}
               className={"c4g-form-control c4g-form-input" + ((this.props.errorText && typeof this.props.errorText === "string") ? " is-invalid" : "")}
               maxLength={this.props.field.maxLength}
               aria-label={ariaLabel}/>
        {description}
      </div>
    </React.Fragment>;

    if (this.props.field.wrappingDiv) {
      return (
        <div className={this.props.field.wrappingDivClass || ""}>
          {content}
        </div>
      );
    } else {
      return (content);
    }
  }

}