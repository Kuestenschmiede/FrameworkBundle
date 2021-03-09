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

export default class TileImageField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name] || this.props.field.imageSource) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let itemProp = null;
      if (this.props.field.itemProp) {
        itemProp = this.props.field.itemProp;
      }
      if (this.props.link) {
        return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <a href={this.props.field.linkClass}>
              <img className={this.props.field.class}
                   itemProp={itemProp} loading={"lazy"}
                   src={this.props.field.imageSource || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src)}
                   alt={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
                   title={this.props.field.title || this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
              />
            </a>
          </div>
        );
      } else {
        return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <img className={this.props.field.class}
                 itemProp={itemProp} loading={"lazy"}
                 src={this.props.field.imageSource || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src)}
                 alt={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
                 title={this.props.field.title || this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
            />
          </div>
        );
      }

    }
    return ('')

  }

}