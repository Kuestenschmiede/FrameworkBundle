/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class TileIconField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.field.conditional || this.props.data[this.props.field.name]) {
      let icon = null;
      if (this.props.field.iconClass) {
        icon = <i className={this.props.field.iconClass}></i>;
      }
      let label = null;
      if (this.props.field.label) {
        label = <span className="entry-label">{this.props.field.label}</span>;
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class}>{icon}</span>
          </div>
      );
    }
    return ('');
  }
}