/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class DetailPDFField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.name]) {
      return (
        <div className={"detail-field-pdf" + (this.props.field.class ? " " + this.props.field.class : "")}>
          <a className={"btn btn-primary"} href={this.props.data[this.props.field.name].path} title={this.props.field.title}>{this.props.field.label}</a>
        </div>
      );
    } else {
      return ('');
    }
  }
}