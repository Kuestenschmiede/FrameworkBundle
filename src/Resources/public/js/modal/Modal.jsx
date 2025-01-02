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

export default class Modal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'c4g-modal-outer';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    if (this.props.show !== true) {
      className += ' c4g-modal-hide';
    }

    return (
      <div id={this.props.id} className={className}>
        <div className={'c4g-modal-inner'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}