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

const ModalContent = React.lazy(() => import("./ModalContent.jsx"));

export default class ModalContentMessage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalContent className={this.props.className}
                    title={this.props.title}
                    onConfirm={this.props.onConfirm}
                    confirmButtonText={this.props.confirmButtonText}>
        <span className={'message'}>{this.props.message}</span>
      </ModalContent>
    );
  }
}