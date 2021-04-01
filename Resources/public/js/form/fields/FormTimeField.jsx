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
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormTimeField extends Component {
  constructor(props) {
    super(props);

    this.regex = {
      fullPattern: '^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$',
      full: new RegExp('^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$')
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let dateString = event.target.value;

    if (this.regex.full.test(dateString) === true) {
      let values = dateString.split(':');
      let hours = parseInt(values[0]);
      let minutes = parseInt(values[1]);
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: ((hours * 3600) + (minutes * 60))});
    } else {
      if (dateString.length === 4) {
        let parts = dateString.split('');
        if (this.regex.full.test(parts[0] + parts[1] + ':' + parts[2] + parts[3]) === true) {
          let hours = parseInt(parts[0] + parts[1]);
          let minutes = parseInt(parts[2] + parts[3]);
          this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: ((hours * 3600) + (minutes * 60))});
        }
      } else if (dateString.length === 3) {
        let parts = dateString.split('');
        if (this.regex.full.test(parts[0] + ':' + parts[1] + parts[2]) === true) {
          let hours = parseInt(parts[0]);
          let minutes = parseInt(parts[1] + parts[2]);
          this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: ((hours * 3600) + (minutes * 60))});
        }
      }
    }
  }

  convertTimeToString(time) {
    if (time === null || typeof time === 'undefined') {
      return '';
    }
    let hours = (time - (time % 3600)) / 3600;
    let minutes = (time % 3600) / 60;
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return hours + ':' + minutes;
  }

  render() {
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data)) {
      return null;
    }

    let label = null;
    if (this.props.field.label) {
      label = this.props.field.label;
    }

    let description = null;
    if (this.props.field.description) {
      description = this.props.field.description;
    }

    let className;
    if (this.props.field.className) {
      className = this.props.field.name + ' ' + this.props.field.className;
    } else {
      className = this.props.field.className;
    }

    return (
      <div className={'c4g-form-field form-group'}>
        <label className={this.props.field.required ? 'c4g-required' : ''}>{label}</label>
        <input type={'time'}
               className={className + " form-control"}
               required={this.props.field.required}
               defaultValue={this.convertTimeToString(this.props.data[this.props.field.name])}
               pattern={this.regex.fullPattern}
               placeholder={'HH:MM'}
               onChange={this.handleChange}
               maxLength={5}
        />
        <input type={'hidden'}
               name={this.props.field.name}
               value={this.props.data[this.props.field.name] || ''}
        />
        <small className="field-description form-text text-muted">{description}</small>
      </div>
    );
  }
}