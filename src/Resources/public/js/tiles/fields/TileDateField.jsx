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

export default class TileDateField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let date = new Date(this.props.data[this.props.field.name] * 1000);
      let dateValue = String(date.getUTCDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getUTCFullYear());
      let label = null;
      if (this.props.field.label) {
        label = <span className="entry-label">{this.props.field.label}</span>;
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class}>{dateValue}</span>
          </div>
      );
    }
    return ('');
  }
}