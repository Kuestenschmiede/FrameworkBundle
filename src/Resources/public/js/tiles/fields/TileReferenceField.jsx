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

export default class TileReferenceField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <React.Fragment>
          <span className={"entry-label"}>{this.props.field.label}</span>&nbsp;
        </React.Fragment>;
      }
      let value = this.props.field.references[this.props.data[this.props.field.name]] || this.props.data[this.props.field.name];

      return (
          <div className={this.props.field.wrapperClass}>
              {label}
            <span className={this.props.field.class}>
              {value}
            </span>
          </div>
      );
    }
    return ('')

  }

}