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
import "../../../css/custom-multi-date-picker.css";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class FormMultiDatepickerField extends Component {
  constructor(props) {
    super(props);

    this.pickerRef = null;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(dateObjects) {
    let newValue = [];
    dateObjects.forEach(function (dateObject) {
      let date = dateObject.toDate();
      if (date !== null) {
        let value = Math.floor(date.getTime() / 1000);
        newValue.push(value);
      } else {
        newValue.push('');
      }
    }, this);
    this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: newValue}, this.props.field);
  }

  render() {
    let dates = this.props.data[this.props.field.name];
    if (typeof dates !== 'object' || typeof dates.forEach !== 'function') {
      dates = [];
    } else {
      dates.forEach(function(date, index) {
        date = parseInt(date, 10);
        if (isNaN(date)) {
          date = 0;
        }
        dates[index] = date * 1000;
      }, this);
    }

    return (
      <Condition data={this.props.data} conditions={this.props.field.conditions} field={this.props.field.name}>
        <div className={'multi-date-picker'}>
          <div className={'' + (this.props.field.errorText ? 'c4g-error' : '')}>
            <label htmlFor={this.props.field.name}>
              {this.props.field.label}
            </label>
          </div>
          <div className={'c4g-form-field form-group' + (this.props.field.className ? ' ' + this.props.field.className : '') + (this.props.field.errorText ? ' c4g-error' : '')}>
            <DatePicker
              multiple={true}
              value={this.props.data[this.props.field.name]}
              onChange={this.handleChange}
              render={<CustomInput id={this.props.field.name} error={!!this.props.field.errorText} />}
              format={'DD.MM.YYYY HH:mm:ss'}
              plugins={[
                <TimePicker position="bottom" />,
                <DatePanel markFocused />
              ]}
            />
          </div>
          <div className={this.props.field.errorText ? 'c4g-error' : ''}>
            <span>
              {this.props.field.description + (this.props.field.errorText ? ' ' + this.props.field.errorText : '')}
            </span>
          </div>
        </div>
      </Condition>
    );

  }
}

function CustomInput({openCalendar, value, handleValueChange, id, error}) {
  return (
    <input
      id={id}
      onFocus={openCalendar}
      value={value}
      onChange={handleValueChange}
      type="text"
      className={"form-control" + (error ? " c4g-error" : "")}
      autoComplete="off"
      inputMode="none"
    />
  )
}