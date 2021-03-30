/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

import React, {Component} from "react";

const Modal = React.lazy(() => import("../../modal/Modal.jsx"));
const ModalContentMessage = React.lazy(() => import("../../modal/content/ModalContentMessage.jsx"));

export class ModalDetailTableButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <React.Fragment>
        <button className={'c4g-btn ' + this.props.className} type={"button"}
                onClick={this.showModal}>
          {this.props.buttonLabel}
        </button>
        <Modal show={this.state.showModal}>
          <ModalContentMessage title={this.props.title}
                               message={this.props.message}
                               onConfirm={this.closeModal}
                               confirmButtonText={this.props.confirmButtonText} />
        </Modal>
      </React.Fragment>
    );
  }
}