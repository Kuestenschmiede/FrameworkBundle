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
import {AlertHandler} from "../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js";

export default class LinkButton extends Component {
  constructor(props) {
    super(props);

    this.showWarningDialog = this.showWarningDialog.bind(this);
  }

  render() {
    if (this.props.button.warnBeforeAction) {
      return (
        <a className={this.props.button.className + " btn btn-primary"}
           href={"#"} onClick={(event) => {
             event.preventDefault();
             this.showWarningDialog();
           }}>{this.props.button.caption}</a>
      );
    } else {
      return (
        <a className={this.props.button.className + " btn btn-primary"}
           href={this.props.button.href}>{this.props.button.caption}</a>
      );
    }
  }

  showWarningDialog() {
    const ah = new AlertHandler();

    const confirmCallback = () => {
      window.location = this.props.button.href;
    };

    const cancelCallback = () => {

    };

    ah.showConfirmDialog(
      this.props.button.warnTextHeadline,
      this.props.button.warnTextMessage,
      confirmCallback,
      cancelCallback,
      this.props.button.warnTextConfirm,
      this.props.button.warnTextCancel,
    );
  }

}