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

export default class FormHiddenField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <input type="hidden" className={"c4g-form-input"} id={this.props.field.name} name={this.props.field.name} value={this.props.data[this.props.field.name] || this.props.field.value}/>
    );
  }

}