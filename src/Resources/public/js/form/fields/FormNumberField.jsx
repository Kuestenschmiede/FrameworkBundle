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

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class FormNumberField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: event.target.value}, this.props.field);
  }

  render() {
    let label = null;
    if (this.props.field.label) {
      label = (<React.Fragment>
        <label htmlFor={this.props.field.name} className={this.props.field.required ? 'c4g-required' : ''}>{this.props.field.label}</label>
      </React.Fragment>);
    }
    let description = null;
    if (this.props.field.label) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }
    return (
      <React.Fragment>
        <Condition data={this.props.data} conditions={this.props.field.conditions} field={this.props.field.name}>
          <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"}>
            {label}
            <input type="number"
                   id={this.props.field.name}
                   name={this.props.field.name}
                   required={this.props.field.required}
                   defaultValue={this.props.data[this.props.field.name] || this.props.field.value}
                   onChange={this.handleChange}
                   min={this.props.field.min}
                   max={this.props.field.max}
                   step={this.props.field.step}
                   className={"form-control"}/>
            {description}
          </div>
        </Condition>
      </React.Fragment>
    );
  }

}