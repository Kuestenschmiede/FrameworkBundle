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

export default class DetailTextField extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <div className={'detail-field-text__label'}>{this.props.field.label}</div>;
      }
      return (
          <div className={"detail-field-text" + (this.props.field.class ? " " + this.props.field.class : "")}>
            {label}
            <span className={'detail-field-text__text'}>{this.props.data[this.props.field.name]}</span>
          </div>
      );
    } else {
      return ('');
    }
  }

}