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

  render() {
    return (
      <div className={this.props.button.outerClass || ""}>
        <button className={this.props.button.className} type="submit" onClick={this.clickButton}>{this.props.button.caption}</button>
      </div>
    );
  }

  componentDidMount() {
    jQuery(document).ready(() => {
      this.setFilter(this.props.form, true);
    });
  }

}