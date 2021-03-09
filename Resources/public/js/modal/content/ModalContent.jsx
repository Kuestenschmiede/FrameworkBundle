/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";

export default class ModalContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className || 'c4g-modal-content'}>
        <div>
          <span className={'title'}>{this.props.title}</span>
        </div>
        <div>
          {this.props.children}
        </div>
        <div>
          <button className={'highlight'} type={'button'} onClick={this.props.onConfirm}>
            {this.props.confirmButtonText}
          </button>
        </div>
      </div>
    );
  }
}