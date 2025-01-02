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
import {AlertHandler} from "../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js";

export default class AsynchronousSubmitButton extends Component {
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
    this.props.form.activeButton = null;
    let data = {};
    let elements = event.target.elements;

    let index = 0;
    while (index < elements.length) {
      let element = elements.item(index);
      if (element.name) {
        data[element.name] = element.value || null;
      }
      index += 1;
    }

    jQuery.post(this.props.button.url, data).done((data) => {
      if (data.error) {
        let ah = new AlertHandler();
        ah.showErrorDialog(data.error.title, data.error.message, '');
      } else if (data.actionRefresh) {
        let ah = new AlertHandler();
        ah.showInfoActionDialog(
          data.actionRefresh.title,
          data.actionRefresh.message,
          function() {
            window.location.reload();
          },
          ''
        );
      }
    });
  }

  render() {
    return (
      <button className={this.props.button.className + " btn btn-primary"}
              type="submit"
              name={this.props.button.name}
              value={this.props.button.value}
              onClick={this.clickButton}>
        {this.props.button.caption}
      </button>
    );
  }

}