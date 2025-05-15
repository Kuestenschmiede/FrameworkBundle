/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";

export default class DetailFooterField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let footerButtons = [];
    this.props.field.footerButtons.forEach((item, id) => {
       footerButtons.push(<a className={"btn " + item.class}
                href={this.props.data[item.linkField]}>{item.label}</a>);
    });
    return (
      <div className={"col-12 detail-footer-field-wrapper"}>
        <div className={"col-12 text-center detail-footer-inner-info"}>
          <p className={"mb-2 mt-2" + (this.props.field.footerTextClass ? " " + this.props.field.footerTextClass : "")}>
            {this.props.field.footerText}
          </p>
        </div>
        <div className={"col-12 text-center detail-footer-buttons"}>
          {footerButtons}
        </div>
      </div>
    );
  }

}