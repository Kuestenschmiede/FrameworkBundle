/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class ListTypeTileHeadlineField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data[this.props.field.name]) {
      let headline = null;
      switch (this.props.field.level) {
        case 1:
          headline = <h1 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h1>;
          break;
        case 2:
          headline = <h2 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h2>;
          break;
        case 3:
          headline = <h3 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h3>;
          break;
        case 4:
          headline = <h4 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h4>;
          break;
        case 5:
          headline = <h5 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h5>;
          break;
        case 6:
          headline = <h6 className={this.props.field.name}>{this.props.data[this.props.field.name]}</h6>;
          break;
        default:
          console.warn(this.props.languageRefs.UNSUPPORTED_HEADLINE_LEVEL);
      }

      return (
        <div className={"row"}>
          <div className={"col-md-12"}>
            {headline}
          </div>
        </div>
      );
    }
    return ('')

  }

}