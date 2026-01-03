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

export default class DetailDateField extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <span>{this.props.field.label}</span>;
      }
      let date = new Date(this.props.data[this.props.field.name] * 1000);
      let dateValue = String(date.getUTCDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getUTCFullYear());
      return (
          <div className={"detail-field-text" + (this.props.field.class ? " " + this.props.field.class : "")}>
            {label}
            <span>{dateValue}</span>
          </div>
      );
    } else {
      return ('');
    }
  }

}