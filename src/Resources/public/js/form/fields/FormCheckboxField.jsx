/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import checkIfFieldIsRendered from "../../util/conditions";

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class FormCheckboxField extends Component {
  constructor(props) {
    super(props);

    this.clickCheckbox = this.clickCheckbox.bind(this);
  }

  render() {
    let label = null;
    if (this.props.field.label) {
      label = (<label htmlFor={this.props.field.name} className={"form-check-label c4g-form-check-label "}>{this.props.field.label}</label>);
    }
    let description = null;
    if (this.props.field.label) {
      description = (<small className={"field-description text-muted"}>{this.props.field.description}</small>);
    }
    return (
        <React.Fragment>
          <Condition data={this.props.data} conditions={this.props.field.conditions} field={this.props.field.name}>
            <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group form-check"}>

              <input type="checkbox" id={this.props.field.name} name={this.props.field.name}
                     defaultChecked={this.props.data[this.props.field.name] || this.props.field.checked}
                     required={this.props.field.required} onClick={this.clickCheckbox}
              className={"form-check-input"}/>
              {label} {description}
            </div>
          </Condition>
        </React.Fragment>
    );
  }

  clickCheckbox(event) {
    event.stopPropagation();
    let data = this.props.data;
    data[this.props.field.name] = event.target.checked ? "1" : "";
    this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
  }

  componentDidMount() {
    if (!this.props.data[this.props.field.name] && this.props.field.checked) {
      let data = this.props.data;
      data[this.props.field.name] = "1";
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
    }
  }
}