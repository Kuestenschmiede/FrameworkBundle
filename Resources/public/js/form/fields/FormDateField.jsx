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

export default class FormDateField extends Component {
  constructor(props) {
    super(props);

    let date = null;
    if (this.props.data[this.props.field.name]) {
      date = new Date(this.props.data[this.props.field.name] * 1000);
    }

    this.state = {
      date: date
    };

    this.regex = {
      fullPattern: '^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\.(([1-9])|(0[1-9])|(1[0-2]))\.[1-2]([0-9]{3})$',
      full: new RegExp('^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\.(([1-9])|(0[1-9])|(1[0-2]))\.[1-2]([0-9]{3})$')
    };

    this.handleChange = this.handleChange.bind(this);
    this.convertDateToString = this.convertDateToString.bind(this);
    this.convertCompleteStringToDate = this.convertCompleteStringToDate.bind(this);
  }

  handleChange(event) {
    let dateString = event.target.value;

    if (this.regex.full.test(dateString) === true) {
      let values = dateString.split('.');
      let day = parseInt(values[0]);
      let month = parseInt(values[1]) - 1;
      let year = parseInt(values[2]);
      let date = new Date(year, month, day);
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: date.valueOf() / 1000}, this.props.field);
      if (day !== date.getDate()) {
          event.target.value = this.convertDateToString(date);
      }
    } else if (dateString === '') {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: null}, this.props.field);
    }
  }

  convertDateToString(date) {
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    return day + '.' + month + '.' + date.getFullYear();
  }

  convertCompleteStringToDate(string) {
    let values = string.split('.');
    let day = parseInt(values[0]);
    let month = parseInt(values[1]) - 1;
    let year = parseInt(values[2]);
    return new Date(year, month, day);
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

    let defaultValue = null;
    if (this.state.date !== null) {
      defaultValue = this.convertDateToString(this.state.date);
    }

    return (
      <div className={'c4g-form-field form-group'}>
        <label className={this.props.field.required ? 'c4g-required' : ''}>{label}</label>
        <input type={'text'}
               className={className + " form-control"}
               required={this.props.field.required}
               defaultValue={defaultValue}
               pattern={this.regex.fullPattern}
               placeholder={'TT.MM.JJJJ'}
               onChange={this.handleChange}
               maxLength={10}
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