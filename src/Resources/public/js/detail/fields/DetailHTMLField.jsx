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

export default class DetailHTMLField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let icon = null;
      if (this.props.field.iconClass) {
        icon = <i className={this.props.field.iconClass}></i>;
      }
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let itemProp = null;
      if (this.props.field.itemProp) {
        itemProp = this.props.field.itemProp;
      }
      return (
        <div className={"item " + this.props.field.name + (this.props.field.class ? ' ' + this.props.field.class : '')}>
          {icon}
          {label}
          <span className="entry-content" itemProp={itemProp} dangerouslySetInnerHTML={{__html: this.props.data[this.props.field.name]}}>
            </span>
        </div>
      );
    }
    return ('')

  }

}