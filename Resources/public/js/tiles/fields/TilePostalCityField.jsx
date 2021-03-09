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

export default class TilePostalCityField extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.postalName] && this.props.data[this.props.field.cityName]) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class}>
              <span className="postal">
                {this.props.data[this.props.field.postalName]}
              </span>
              <span className="city">
                {this.props.data[this.props.field.cityName]}
              </span>
            </span>
          </div>
      );
    }
    return ('')

  }

}