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

export default class ListTypeTileTextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {

      let icon = null;
      if (this.props.field.iconClass) {
        icon = <i className={this.props.field.iconClass}></i>;
      }

      return (
        <div className={"row"}>
          <div className={"col-md-12"}>
            {icon}
            {this.props.data[this.props.field.name]}
          </div>
        </div>
      );
    }
    return ('')

  }

}