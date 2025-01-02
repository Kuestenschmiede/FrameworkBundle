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
import Select from "react-select";
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormNumberWithUnitField extends Component {
  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValueChange(event) {
    let data = {};
    data.unit = null;
    if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].unit) {
      data.unit = this.props.data[this.props.field.name].unit;
    }
    data.value = event.target.value;
    this.handleChange(data);
  }

  handleUnitChange(unit) {
    let data = {};
    data.unit = unit;
    if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].value) {
      data.value = this.props.data[this.props.field.name].value;
    } else {
      data.value = this.props.field.value;
    }
    this.handleChange(data);
  }

  handleChange(data) {
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: data}, this.props.field);
  }

  handleChangeDummy(data) {
    // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data, this.props.fields)) {
      return null;
    }

    let label = null;
    let ariaLabel = null;
    if (this.props.field.label) {
      let className = "col-12";
      label = (<React.Fragment>
        <label htmlFor={this.props.field.name} className={(this.props.field.required ? 'c4g-required ' : '') + className}>{this.props.field.label}</label>
      </React.Fragment>);
    } else {
      if (this.props.field.placeholder) {
        ariaLabel = this.props.field.placeholder;
      }
    }
    let description = null;
    if (this.props.field.label) {
      description = (<small className={"field-description form-text text-muted col-12"}>{this.props.field.description}</small>);
    }

    let options = [];

    if (this.props.field.options) {
      if (this.props.field.grouped) {
        options = this.props.field.options;
      } else {
        if (this.props.field.emptyOptionLabel !== '') {
          options.push({value: "", label: this.props.field.emptyOptionLabel});
        }
        let keys = Object.keys(this.props.field.options);
        keys.forEach((element, index) => {
          options.push({value: this.props.field.options[element].value, label: this.props.field.options[element].label});
        });
      }

      let hint = "";
      if (this.props.field.hintText) {
        hint = <div className={""}>{this.props.field.hintText}</div>
      }


      let selectNode = null;
      if (this.props.field.required) {
        let optionValue = '';
        if (!!(this.props.data[this.props.field.name])) {
          if (!!(this.props.data[this.props.field.name].value)) {
            optionValue = this.props.data[this.props.field.name].value;
          } else if (typeof this.props.data[this.props.field.name] === 'object') {
            optionValue = '';
          } else {
            optionValue = this.props.data[this.props.field.name];
          }
        }
        let optionLabel = '';
        if (!!(this.props.data[this.props.field.name])) {
          if (!!(this.props.data[this.props.field.name].value)) {
            optionLabel = this.props.data[this.props.field.name].value;
          } else if (typeof this.props.data[this.props.field.name] === 'object') {
            optionLabel = '';
          } else {
            optionLabel = this.props.data[this.props.field.name];
          }
        }
        selectNode = <select tabIndex={-1}
                             autoComplete={"off"}
                             style={{ opacity: 0, height: 0, pointerEvents: "none"}}
                             value={optionValue}
                             required={this.props.field.required}
                             onChange={this.handleChangeDummy}
                             aria-label={ariaLabel}
                             className={"form-control"}>
          <option value={optionValue}>
            {optionLabel}
          </option>
        </select>;
      }

      let defaultValue = null;
      if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].value) {
        defaultValue = this.props.data[this.props.field.name].value;
      } else {
        defaultValue = this.props.field.value;
      }

      let defaultUnit = null;
      if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].unit) {
        defaultUnit = this.props.data[this.props.field.name].unit;
      }

      return (
        <React.Fragment>
          <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-row"}>
            {label}
            {hint}
            <input type="number"
                   name={this.props.field.name + "[value]"}
                   required={this.props.field.required}
                   defaultValue={defaultValue}
                   min={this.props.field.min}
                   max={this.props.field.max}
                   step={this.props.field.step}
                   onChange={this.handleValueChange}
                   className={"form-control col-3 col-sm-2"}
            />
            <Select id={this.props.field.name}
                    name={this.props.field.name + "[unit]"}
                    options={options}
                    required={this.props.field.required}
                    onChange={this.handleUnitChange}
                    defaultValue={defaultUnit}
                    placeholder={this.props.field.placeholder}
                    aria-label={ariaLabel}
                    className={"col-9 col-sm-5"}>
            </Select>
            {selectNode}
            {description}
          </div>
        </React.Fragment>
      );
    } else {
      return ('');
    }
  }
}