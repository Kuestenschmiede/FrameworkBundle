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

const ModalContentConfirm = React.lazy(() => import("./ModalContentConfirm.jsx"));

export default class ModalContentMessage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalContentConfirm className={this.props.className}
                    title={this.props.title}
                    onConfirm={this.props.onConfirm}
                    onCancel={this.props.onCancel}
                    confirmButtonText={this.props.confirmButtonText}
                    cancelButtonText={this.props.cancelButtonText}>
        <span className={'message'}>{this.props.message}</span>
      </ModalContentConfirm>
    );
  }
}