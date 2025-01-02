/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class FormPostalField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validPostal: this.validatePostal(this.props.data[this.props.field.name])
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.validatePostal(event.target.value)) {
      this.setState({validPostal: true});
      let newState = {[this.props.field.name]: event.target.value};
      if (this.props.field.createValidationProperty) {
        newState[this.props.field.name + "_valid"] = "1";
      }
      this.props.form.props.updateFunction(this.props.form.props.name, newState, this.props.field);
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
    } else {
      this.setState({validPostal: false});
      if (this.props.field.createValidationProperty) {
        let newState = {};
        newState[this.props.field.name + "_valid"] = false;
        this.props.form.props.updateFunction(this.props.form.props.name, newState, this.props.field);
      }
    }
  }

  validatePostal(postal) {
    return postal && postal.length === 5 && postal.match("[0-9]{5}");
  }

  render() {

    let label = null;
    if (this.props.field.label) {
      let labelClass = "";
      if (this.props.field.required) {
        labelClass = "c4g-required";
        label = <label className={labelClass} htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      } else {
        label = <label htmlFor={this.props.field.name}>{this.props.field.label}</label>;
      }
    }
    let description = null;
    if (this.props.field.label) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }

    return (
      <React.Fragment>
        <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"}>
          {label}
          <input type={"text"}
                 id={this.props.field.name}
                 name={this.props.field.name}
                 required={this.props.field.required}
                 defaultValue={this.props.data[this.props.field.name] || this.props.field.value}
                 pattern={"[0-9]{5}"}
                 onChange={this.handleChange}
                  className={this.state.validPostal ? "" : "invalid-postal"}/>
          {description}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    if (this.props.field.createValidationProperty) {
      let valid = this.validatePostal(this.props.data[this.props.field.name]);
      let newState = {};
      newState[this.props.field.name + "_valid"] = valid ? "1" : false;
      this.props.form.props.updateFunction(this.props.form.props.name, newState, this.props.field);
    }
  }

}