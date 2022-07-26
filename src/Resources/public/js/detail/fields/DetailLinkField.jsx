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

export default class DetailLinkField extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    if (this.props.data[this.props.field.name]) {
      let icon = null;
      if (this.props.field.icon) {
        icon = <i className={this.props.field.icon}></i>;
      }
      let className = "";
      if (this.props.field.class) {
        className = this.props.field.class;
      }
      if (this.props.tagType) {
        className += " " + this.props.tagType;
      }
      let target = " ";
      if (this.props.targetBlank) {
        target = "_blank";
      }

      return (
        <div className={className}>
          {icon}
          <a target={target} href={this.props.data[this.props.field.name]}>{this.props.data[this.props.field.linkTextName] || this.props.field.linkText}</a>
        </div>
      );
    } else {
      return null;
    }
  }
}