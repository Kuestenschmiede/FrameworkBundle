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

export default class TileHeadlineField extends Component {
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
      if (this.props.field.itemProp) {
        itemProp = this.props.field.itemProp;
      }
      let headline = null;
      switch (this.props.field.level) {
        case 1:
          headline = <h1 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h1>;
          break;
        case 2:
          headline = <h2 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h2>;
          break;
        case 3:
          headline = <h3 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h3>;
          break;
        case 4:
          headline = <h4 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h4>;
          break;
        case 5:
          headline = <h5 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h5>;
          break;
        case 6:
          headline = <h6 className={this.props.field.class}>{this.props.data[this.props.field.name]}</h6>;
          break;
        default:
          console.warn("unsupported headline level.");
      }

      return (
        <div className={this.props.field.wrapperClass}>
          {label}
          {headline}
        </div>
      );
    }
    return ('')

  }

}