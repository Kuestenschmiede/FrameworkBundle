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

export default class TileLinkField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.field.href || this.props.data[this.props.field.hrefName]) {
      let label = null;
      if (this.props.field.label) {
        label = <span className={"entry-label"}>{this.props.field.label}</span>;
      }
      let href = this.props.field.href;
      if (this.props.field.hrefName && this.props.data[this.props.field.hrefName]) {
        href = href.replace(this.props.field.hrefName, this.props.data[this.props.field.hrefName]);
      }
      return (
          <div className={this.props.field.wrapperClass}>
            {label}
            <a className={this.props.field.class} href={href} rel={"noreferrer noopener"}>{this.props.data[this.props.field.linkTextName] || this.props.field.linkText || href}</a>
          </div>
      );
    }
    return ('');
  }

}

