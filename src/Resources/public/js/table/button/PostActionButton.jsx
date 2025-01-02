/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";

const Condition = React.lazy(() => import("../../condition/Condition.jsx"));
const Modal = React.lazy(() => import("../../modal/Modal.jsx"));
const ModalContentMessage = React.lazy(() => import("../../modal/content/ModalContentMessage.jsx"));
const ModalContentConfirmMessage = React.lazy(() => import("../../modal/content/ModalContentConfirmMessage.jsx"));
const ModalContentForm = React.lazy(() => import("../../modal/content/ModalContentForm.jsx"));
const NewFormMapperField = React.lazy(() => import("../../form/fields/new/NewFormMapperField.jsx"));

export class PostActionButton extends Component {

  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.resetModal = this.resetModal.bind(this);
    this.showDynamicModal = this.showDynamicModal.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.onRequestDone = this.onRequestDone.bind(this);
    this.onRequestFail = this.onRequestFail.bind(this);
    this.onFormInvalid = this.onFormInvalid.bind(this);

    this.state = {
      showModal: false,
      dynamicModal: false,
      dynamicTitle: '',
      dynamicMessage: '',
      dynamicConfirmButtonText: '',
      dynamicOnConfirm: this.resetModal
    };

    if (this.props.formFields) {
      let formData = {};
      this.props.formFields.forEach(function(field) {
        formData[field.name] = field.value || '';
      }, this);
      this.state.formData = formData;
      this.state.errorMessages = {};
    }
  }

  showModal() {
    this.setState({showModal: true});
  }

  closeModal() {
    if (this.props.formFields) {
      let formData = {};
      this.props.formFields.forEach(function(field) {
        formData[field.name] = field.value || '';
      }, this);
      this.setState({
        formData: formData,
        errorMessages: {},
        showModal: false
      });
    } else {
      this.setState({showModal: false});
    }
  }

  resetModal() {
    this.setState({
      showModal: false,
      dynamicModal: false,
      dynamicTitle: '',
      dynamicMessage: '',
      dynamicConfirmButtonText: '',
      dynamicOnConfirm: this.resetModal
    });
  }

  showDynamicModal(title, message, confirmButtonText, onConfirm) {
    this.setState({
      showModal: true,
      dynamicModal: true,
      dynamicTitle: title,
      dynamicMessage: message,
      dynamicConfirmButtonText: confirmButtonText,
      dynamicOnConfirm: onConfirm
    });
  }

  onFormUpdate(field, value) {
    let formData = this.state.formData;
    formData[field.name] = value;
    this.setState({formData: formData});
  }

  onFormInvalid(messages) {
    this.setState({errorMessages: messages});
  }

  sendRequest() {
    let data = {};
    this.props.fields.forEach(function(element, index) {
      data[element.name] = this.props.rowData[index];
    }, this);
    data.REQUEST_TOKEN = this.props.REQUEST_TOKEN;
    data.formData = this.state.formData;
    jQuery.post(this.props.url, data).done(this.onRequestDone).fail(this.onRequestFail);
    this.closeModal();
  }

  onRequestDone(json) {
    try {
        this.showDynamicModal(
          json.success.title,
          json.success.message,
          json.success.confirmButtonText,
          this.updateRow.bind(this, json.success.rowData)
        );
    } catch (e) {
      this.resetModal();
    }
  }

  onRequestFail(response) {
    let json = response.responseJSON;
    try {
      if (!!json.error.reload) {
        this.showDynamicModal(
          json.error.title,
          json.error.message,
          json.error.confirmButtonText,
          location.reload
        );
      }
      this.showDynamicModal(
        json.error.title,
        json.error.message,
        json.error.confirmButtonText,
        this.resetModal
      );
    } catch (e) {
      this.resetModal();
    }
  }

  updateRow(rowData) {
    this.props.setRowData(rowData, this.props.value);
    this.resetModal();
  }

  render() {
    let data = {};
    this.props.fields.forEach(function(element, index) {
      if (typeof this.props.rowData[index] !== 'undefined') {
        data[element.name] = this.props.rowData[index];
      }
    }, this);

    let confirmModal;
    if (this.props.formFields) {
      let fields = [];
      this.props.formFields.forEach(function(field) {
        let props = jQuery.extend(true, {}, field);
        props.value = this.state.formData[field.name];
        props.onChange = this.onFormUpdate.bind(this, field);
        props.error = this.state.errorMessages[field.name];
        fields.push(<NewFormMapperField key={field.name} {...props}/>);
      }, this);

      confirmModal = <ModalContentForm title={this.props.title}
                                       message={this.props.message}
                                       onConfirm={this.sendRequest}
                                       onInvalid={this.onFormInvalid}
                                       onCancel={this.closeModal}
                                       confirmButtonText={this.props.confirmText}
                                       cancelButtonText={this.props.cancelText}>
        {fields}
      </ModalContentForm>;
    } else {
      confirmModal = <ModalContentConfirmMessage title={this.props.title}
                                                 message={this.props.message}
                                                 onConfirm={this.sendRequest}
                                                 onCancel={this.closeModal}
                                                 confirmButtonText={this.props.confirmText}
                                                 cancelButtonText={this.props.cancelText} />;
    }

    return (
      <Condition data={data} conditions={this.props.conditions}>
        <button className={'c4g-btn ' + this.props.className} type={"button"}
                onClick={this.showModal}>
          <span className={'c4g-btn-text'}>
            {this.props.buttonText}
          </span>
        </button>
        <Modal show={this.state.showModal && !this.state.dynamicModal}>
          {confirmModal}
        </Modal>
        <Modal show={this.state.showModal && this.state.dynamicModal}>
          <ModalContentMessage title={this.state.dynamicTitle}
                               message={this.state.dynamicMessage}
                               onConfirm={this.state.dynamicOnConfirm}
                               confirmButtonText={this.state.dynamicConfirmButtonText}/>
        </Modal>
      </Condition>
    );
  }
}