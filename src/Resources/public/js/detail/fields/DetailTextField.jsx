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

export default class DetailTextField extends Component {
  constructor(props) {
    super(props);

    this.format = this.format.bind(this);
  }

  format(value) {
    return this.props.field.format.replace(/%s/g, value);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let label = null;
      if (this.props.field.label) {
        label = <div className={'detail-field-text__label'}>{this.props.field.label}</div>;
      }
      let value = this.props.data[this.props.field.name];
      if (typeof this.props.field.format === 'string' && this.props.field.format !== '') {
        value = this.format(value);
      }
      return (
          <div className={"detail-field-text" + (this.props.field.class ? " " + this.props.field.class : "")}>
            {label}
            <span className={'detail-field-text__text'}>{value}</span>
          </div>
      );
    } else {
      return ('');
    }
  }

}