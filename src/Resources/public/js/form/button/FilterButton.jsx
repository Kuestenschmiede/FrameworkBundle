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

export default class FilterButton extends Component {
  constructor(props) {
    super(props);

    this.clickButton = this.clickButton.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  clickButton() {
    this.props.form.activeButton = this;
  }

  submitCallback(form, event) {
    event.preventDefault();
    event.stopPropagation();

    this.setFilter(form);
    if (form.props.component.toggleableLayout && form.state.toggled) {
      form.toggleForm();
    }
  }

  setFilter(form, initial = false) {
    let keys = Object.keys(form.props.component.data);
    let formData = {};
    const data = form.props.component.data;
    keys.forEach((element) => {
      if (typeof data[element] === 'object' && data[element] !== null &&
        typeof data[element].forEach !== 'function') {
        try {
          formData[element] = data[element].value;
        } catch (e) {
          console.error(e);
        }
      } else {
        formData[element] = data[element];
      }
    });
    form.props.setFilterDataFunction(this.props.button.targetComponent, formData, initial);
    this.props.form.activeButton = null;
  }

  checkFilter() {
    var result = false;
    const fields = this.props.form.props.component.fields;
    fields.forEach((field) => {
      if (field.name != 'moduleId') {
        if ((!result || result == null) && (field.type == "checkboximage")) {
          result = localStorage.getItem('form-multicheckbox-' + field.entryPoint + '-' + field.name);
        }
        if ((!result || result == null) && (field.type == "daterange")) {
          result = localStorage.getItem('form-form-daterange-' + field.entryPoint + '-' + field.name);
        }
        if ((!result || result == null) && (field.type == "radio")) {
          result = localStorage.getItem('form-radiogroup-' + field.entryPoint + '-' + field.name);
        }
        if ((!result || result == null) && (field.type == "select")) {
          result = localStorage.getItem('form-select-' + field.entryPoint + '-' + field.name);
        }
        if ((!result || result == null) && (field.type == "text")) {
          result = localStorage.getItem('form-text-' + field.entryPoint + '-' + field.name);
        }
      };
    });

    return result && result !== null ? true : false;
  }

  resetFilter() {
    let keys = Object.keys(this.props.form.props.component.data);

    let formData = {};
    const fields = this.props.form.props.component.fields;
    const data =  this.props.form.props.component.data;
    fields.forEach((field) => {
      if (field.name != 'moduleId') {
        formData[field.name] = '';

        if (field.type == "checkboximage") {
          localStorage.removeItem('form-multicheckbox-'+field.entryPoint+'-'+field.name);
        }
        if (field.type == "daterange") {
          localStorage.removeItem('form-form-daterange-'+field.entryPoint+'-'+field.name);
        }
        if (field.type == "radio") {
          localStorage.removeItem('form-radiogroup-'+field.entryPoint+'-'+field.name);
        }
        if (field.type == "select") {
          localStorage.removeItem('form-select-'+field.entryPoint+'-'+field.name);
        }
        if (field.type == "text") {
          localStorage.removeItem('form-text-'+field.entryPoint+'-'+field.name);
        }
      } else {
        formData[field] = data[field];
      }
    });
    this.props.form.props.setFilterDataFunction(this.props.button.targetComponent, formData, false);
    this.props.form.activeButton = null;
  }

  render() {
    if (this.checkFilter() == true) {
      return (
        <div className={this.props.button.outerClass || ""}>
          <button className={this.props.button.className} type="submit"
                  onClick={this.clickButton}>{this.props.button.caption}</button>
          <button className={this.props.button.className + '-reset c4g-btn-reset'} type="submit" onClick={() => {
            this.resetFilter()
          }}>{this.props.button.resetFilterCaption}</button>
        </div>
      );
    } else {
      return (
        <div className={this.props.button.outerClass || ""}>
          <button className={this.props.button.className} type="submit"
                  onClick={this.clickButton}>{this.props.button.caption}</button>
        </div>
      );
    }
  }

  componentDidMount() {
    jQuery(document).ready(() => {
      this.setFilter(this.props.form, true);
    });
  }

}