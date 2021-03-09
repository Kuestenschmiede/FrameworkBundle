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

export default class ListTypeTileImageField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name] || this.props.field.imageSource) {
      return (
          <img className={this.props.field.class}
               src={this.props.field.imageSource || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src)}
               alt={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
               title={this.props.field.imageAlt || (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt)}
          />
      );
    }
    return ('');

  }

}