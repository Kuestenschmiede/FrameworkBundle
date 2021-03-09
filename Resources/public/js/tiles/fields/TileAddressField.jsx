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

export default class TileAddressField extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.postalName] && this.props.data[this.props.field.cityName]) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let postalCity = null;
      if (this.props.data[this.props.field.postalName] && this.props.data[this.props.field.cityName]) {
        let itemPropPostalCode = null;
        let itemPropAddressLocality = null;
        if (this.props.field.showSchema) {
            itemPropPostalCode = 'postalCode';
            itemPropAddressLocality = 'addressLocality';
        }
        postalCity =
            <React.Fragment>
              <span className="postal" itemProp={itemPropPostalCode}>
                {this.props.data[this.props.field.postalName]}
              </span>
              <span className="city" itemProp={itemPropAddressLocality}>
                {this.props.data[this.props.field.cityName]}
              </span>
            </React.Fragment>;
      }
      let street = null;
      if (this.props.data[this.props.field.streetName] && this.props.data[this.props.field.streetNumberName]) {
        let itemProp = null;
        if (this.props.field.showSchema) {
          itemProp = 'streetAddress';
        }
        street =
            <span itemProp={itemProp}>
              <span className="street">
                {this.props.data[this.props.field.streetName]}
              </span>
              <span className="streetNumber">
                {this.props.data[this.props.field.streetNumberName]}
              </span>
            </span>;
      }
      let itemProp = null;
      let itemType = null;
      if (this.props.field.showSchema) {
        itemProp = 'address';
        itemType = 'https://schema.org/PostalAddress';
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <span className={this.props.field.class} itemProp={itemProp} itemType={itemType} itemScope={itemType}>
              {street}
              {postalCity}
            </span>
          </div>
      );
    }
    return ('')

  }

}