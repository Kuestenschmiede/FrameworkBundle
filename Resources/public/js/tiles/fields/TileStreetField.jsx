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

export default class TileStreetField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.streetName]) {
      let streetNumber =  null;
      if (this.props.data[this.props.field.streetNumberName]) {
        streetNumber = <span className="streetNumber">
          {this.props.data[this.props.field.streetNumberName]}
          </span>;
      }
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class}>
              <span className="street">
                {this.props.data[this.props.field.streetName]}
              </span>" "
              {streetNumber}
            </span>
          </div>
      );
    }
    return ('')
  }

}