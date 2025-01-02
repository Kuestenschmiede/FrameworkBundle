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

export default class SetDataButton extends Component {
  constructor(props) {
    super(props);

    this.clickButton = this.clickButton.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  clickButton() {
    this.props.form.activeButton = this;
  }

  submitCallback(form, event) {
    event.preventDefault();
    event.stopPropagation();

    let url = this.props.button.asyncUrl;
    let body = '';
    let keys = Object.keys(form.props.component.data);
    let formData = {};
    keys.forEach((element) => {
      if (body !== '') {
        body += '&';
      }
      body += element + '=' + form.props.component.data[element];
      formData[element] = form.props.component.data[element];
    });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body
    }).then(function(response) {
      return response.json();
    }).then(data => {
      form.props.setFunction(this.props.button.targetComponent, data, formData);
    });

    this.props.form.activeButton = null;
  }

  render() {
    return (
      <button className={this.props.button.className} type="submit" onClick={this.clickButton}>{this.props.button.caption}</button>
    );
  }

}