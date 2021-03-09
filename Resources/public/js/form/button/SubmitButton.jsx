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

export default class SubmitButton extends Component {
  constructor(props) {
    super(props);

    this.clickButton = this.clickButton.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  clickButton() {
    this.props.form.activeButton = this;
  }

  submitCallback(form, event) {
    this.props.form.activeButton = null;
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