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

    let ok = true;
    let conditions = [];

    if (this.props.conditions && typeof this.props.conditions.forEach === 'function') {
      try {
        this.props.conditions.forEach(function(condition) {
          if (this.isConditionMet(condition) === false) {
            ok = false;
            condition.ok = false;
          } else {
            condition.ok = true;
          }
          conditions.push(condition);
        }, this);
      } catch (e) {
        console.error(e);
      }
    }

    this.state = {
      conditions: conditions,
      ok: ok
    };
  }

  isConditionMet(condition){
    let fieldValue, conditionValue;
    if (typeof this.props.data[condition.field] === 'object') {
      if (this.props.data[condition.field] !== null && typeof this.props.data[condition.field].value !== 'undefined') {
        fieldValue = String(this.props.data[condition.field].value);
      } else {
        fieldValue = null;
      }
    } else {
      fieldValue = String(this.props.data[condition.field]);
    }
    conditionValue = String(condition.value);
    if (condition.type === 'or' && condition.conditions.length > 1) {
      let met = false;
      condition.conditions.forEach(function(element) {
        if (this.isConditionMet(element)) {
          met = true;
        }
      }, this);
      return met;
    } else if (typeof condition.field !== 'undefined' && typeof condition.value !== 'undefined') {
      if (condition.not !== true) {
        if (fieldValue !== conditionValue) {
          return false;
        }
      } else {
        if (fieldValue === conditionValue) {
          return false;
        }
      }
    }

    return true;
  }

  render() {
    if (this.state.ok) {
      return this.props.children;
    } else {
      return null;
    }
  }
}