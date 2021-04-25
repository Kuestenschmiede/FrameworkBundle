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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import checkIfFieldIsRendered from "../../util/conditions";

export default class FormDatepickerField extends Component {
  constructor(props) {
    super(props);

    this.pickerRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRaw = this.handleChangeRaw.bind(this);
  }

  handleChange(date, event) {
    if (date !== null) {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: (date.getTime() / 1000)});
    } else {
      this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: ''});
    }
    event.preventDefault(); // needed to close the picker
  }

  handleChangeRaw(event) {
    event.preventDefault(); // prevents user input
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

    let className = '';
    if (this.props.field.className) {
      className = this.props.field.className +
      ((this.props.errorText && typeof this.props.errorText === "string") ? " is-invalid" : "");
    }

    let startDate;
    if (this.props.data[this.props.field.name] === '') {
      startDate = null;
    } else if (this.props.data[this.props.field.name]) {
      startDate = new Date(this.props.data[this.props.field.name] * 1000);
    } else if (this.props.field.value) {
      startDate = new Date(this.props.field.value * 1000);
    } else {
      startDate = null;
    }

    if (startDate === "Invalid Date") {
      startDate = null;
    }

    // set locale
    let locale = this.props.field.locale;
    if (locale === "de") {
      locale = this.createDeLocale();
    }

    let customElement = (<input type="text" name={this.props.field.name} placeholder={this.props.field.placeholderText} autoComplete="off"
                                className={className + " react-datepicker-ignore-onclickoutside"} value=""
                                aria-label={this.props.field.placeholderText} />);

    return (
      <label>
        {label}
        <DatePicker customInput={customElement}
                    selected={startDate}
                    onChange={this.handleChange}
                    onChangeRaw={this.handleChangeRaw}
                    name={this.props.field.name}
                    isClearable
                    placeholderText={this.props.field.placeholderText}
                    required={this.props.field.required}
                    className={className}
                    dateFormat={this.props.field.dateFormat}
                    showTimeSelect={this.props.field.showTimeSelect}
                    showMonthDropdown={!this.props.field.showTimeSelectOnly}
                    timeCaption={this.props.field.timeCaption}
                    allowSameDay={true}
                    locale={locale}
                    popperPlacement={"bottom-end"}
                    customInputRef={"ref"}
                    ref={this.pickerRef}
                    customRef={this.pickerRef}
                    autoComplete={"off"}
                    shouldCloseOnSelect
                    dropdownMode={"scroll"}
        />
      {description}
      </label>
    );
  }

  createDeLocale() {
    const months = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ]
    const days = [
      'Mo',
      'Di',
      'Mi',
      'Do',
      'Fr',
      'Sa',
      'So'
    ]

    const locale = {
      localize: {
        month: n => months[n],
        day: n => days[n]
      },
      formatLong: {},
      options: {
        weekStartsOn: 1
      },
      match: (arg) => {return true;}
    }

    return locale;
  }

  componentDidMount() {
    if (this.pickerRef !== null) {
      jQuery(this.pickerRef).trigger('change');
    }
  }
}