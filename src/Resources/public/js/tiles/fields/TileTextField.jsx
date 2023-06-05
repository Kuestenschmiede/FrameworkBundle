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

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));

export default class TileTextField extends Component {
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
        label = <React.Fragment>
          <span className={"entry-label"}>{this.props.field.label}</span>&nbsp;
        </React.Fragment>;
      }
      let itemProp = null;
      if (this.props.field.itemProp) {
        itemProp = this.props.field.itemProp;
      }
      let value = this.props.data[this.props.field.name];
      if (typeof this.props.field.format === 'string' && this.props.field.format !== '') {
        value = this.format(value);
      }

      let additionalClass = '';
      if (value && this.props.field.generateValueClasses) {
        additionalClass = value.toLowerCase().toString().replace(/[ |\&\(\)=>]/g,'');
        additionalClass = additionalClass.toString().replace('ü','ue');
        additionalClass = additionalClass.toString().replace('ö','oe');
        additionalClass = additionalClass.toString().replace('ä','ae');
        additionalClass = additionalClass.toString().replace('ß','ss');

        additionalClass = ' '+this.props.field.class+'--'+additionalClass;
      }

      return (
        <Condition data={this.props.data} conditions={this.props.field.conditions}>
          <div className={this.props.field.wrapperClass}>
              {label}
            <span className={this.props.field.class+additionalClass} itemProp={itemProp}>
              {value}
            </span>
          </div>
        </Condition>
      );
    }
    return ('')

  }

}