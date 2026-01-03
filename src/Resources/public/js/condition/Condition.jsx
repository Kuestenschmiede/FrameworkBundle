/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class Condition extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    let ok = true;
    let conditions = [];

    if (props.conditions && typeof props.conditions.forEach === 'function') {
      try {
        props.conditions.forEach(function(condition) {
          if (Condition.isConditionMet(condition, props) === false) {
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

    return {
      conditions: conditions,
      ok: ok
    };
  }

  static isConditionMet(condition, props){
    let fieldValue, conditionValue;
    if (typeof props.data[condition.field] === 'object') {
      if (props.data[condition.field] !== null && typeof props.data[condition.field].value !== 'undefined') {
        fieldValue = String(props.data[condition.field].value);
      } else {
        fieldValue = null;
      }
    } else {
      fieldValue = String(props.data[condition.field]);
    }
    conditionValue = String(condition.value);
    if (condition.type === 'or' && condition.conditions.length > 1) {
      let met = false;
      condition.conditions.forEach(function(element) {
        if (Condition.isConditionMet(element, props)) {
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