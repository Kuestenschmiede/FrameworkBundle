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

export default class FormNumberRangeField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.data[this.props.field.name] || this.props.field.value
    };

    this.onChange = this.onChange.bind(this);

    FormNumberRangeField.instances = (FormNumberRangeField.instances || 0) + 1;
  }

  onChange(event) {
    let value = event.target.value;
    this.setState({value: value});
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: value}, this.props.field);
  }

  format(value) {
    if (this.props.field.format) {
      return this.props.field.format.replace(/%s/g, value);
    } else {
      return value;
    }
  }

  render() {
    let id = 'c4g-range-' + this.props.field.name + '-' + FormNumberRangeField.instances;
    let left = parseFloat(this.props.field.styleLeft);
    left = (100.00 - (2 * left)) / (this.props.field.max - this.props.field.min) * (this.state.value - this.props.field.min) + left;

    return (
      <div className={(this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field c4g-range-field"}>
        <label className={this.props.field.required ? 'c4g-required' : ''}
               htmlFor={id}>{this.props.field.label}</label>
        <div className={'c4g-range-field-inner'}>
          <div className={'c4g-range-field-value-wrapper'}
               style={{left: String(left) + '%'}}>
            <span className={'c4g-range-field-value'}>
              {this.format(this.state.value)}
            </span>
          </div>
          <span className={'c4g-range-field-min'}>{this.format(this.props.field.min)}</span>
          <input id={id}
                 type={'range'}
                 min={this.props.field.min}
                 max={this.props.field.max}
                 step={this.props.field.step}
                 value={this.state.value}
                 onChange={this.onChange}
                 className={'c4g-form-control c4g-form-input'}
                 name={this.props.field.name}/>
          <span className={'c4g-range-field-max'}>{this.format(this.props.field.max)}</span>
        </div>
      </div>
    );
  }
}