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

export default class Condition extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let render = true;

    try {
      this.props.conditions.forEach(function(condition) {
        if (condition.field && condition.value) {
          if (String(this.props.data[condition.field]) !== String(condition.value)) {
            render = false;
          }
        }
      }, this);
    } catch (e) {}
    
    if (render) {
      return this.props.children;
    } else {
      return null;
    }
  }
}