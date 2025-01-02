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

const ModalContent = React.lazy(() => import("./ModalContent.jsx"));

export default class ModalContentConfirm extends Component {

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
          <button className={''} type={'button'} onClick={this.props.onCancel}>
            {this.props.cancelButtonText}
          </button>
        </div>
      </div>
    );
  }
}