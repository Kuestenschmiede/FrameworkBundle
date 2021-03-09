/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";

export default class TilePhoneField extends Component {

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
        itemProp = 'telephone';
      }
      let href = "tel:";
      let phoneNumber = this.props.data[this.props.field.name];
      href += phoneNumber;
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <a className={this.props.field.class} itemProp={itemProp} href={href}>{phoneNumber}</a>
          </div>
      );
    }
    return ('');
  }
}