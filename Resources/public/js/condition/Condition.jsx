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

export default class Condition extends Component {

  constructor(props) {
    super(props);

    this.isConditionMet = this.isConditionMet.bind(this);
  }

  isConditionMet(condition){
    if (condition.type === 'or' && condition.conditions.length > 1) {
      let met = false;
      condition.conditions.forEach(function(element) {
        if (this.isConditionMet(element)) {
          met = true;
        }
      }, this);
      return met;
    } else if (condition.field && condition.value) {
      if (String(this.props.data[condition.field]) !== String(condition.value)) {
        return false;
      }
    }

    return true;
  }

  render() {
    let render = true;

    try {
      this.props.conditions.forEach(function(condition) {
        if (this.isConditionMet(condition) === false) {
          render = false;
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