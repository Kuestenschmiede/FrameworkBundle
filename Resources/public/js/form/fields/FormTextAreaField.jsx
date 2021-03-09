/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";

export default class FormTextAreaField extends Component {
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
        <label htmlFor={this.props.field.name}
               className={this.props.field.required ? 'c4g-required' : ''}>{this.props.field.label}</label>
      </React.Fragment>);
    }
    let description = null;
    if (this.props.field.label) {
      description = (<span className={"field-description"}>{this.props.field.description}</span>);
    }
    return (
      <React.Fragment>
        <div
          className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"}>
          {label}
          {this.props.errorText && <div className={"text-danger"}>{this.props.errorText}</div>}
          <textarea id={this.props.field.name}
                    name={this.props.field.name}
                    required={this.props.field.required}
                    defaultValue={this.props.data[this.props.field.name] || this.props.field.value}
                    onChange={this.handleChange}
                    maxLength={this.props.field.maxLength}
                    className={"form-control"}/>
          {description}
        </div>
      </React.Fragment>
    );
  }
}