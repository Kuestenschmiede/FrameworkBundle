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

export default class TileEmailField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let itemProp = null;
      if (this.props.field.showSchema) {
        itemProp = 'email';
      }
      let href = "mailto:";
      let emailAddress = this.props.data[this.props.field.name];
      href += emailAddress;
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class} itemProp={itemProp}>
              <a href={href}>{emailAddress}</a>
            </span>
          </div>
      );
    }
    return ('');
  }
}