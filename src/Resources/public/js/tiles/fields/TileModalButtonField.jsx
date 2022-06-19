/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";

const Modal = React.lazy(() => import("../../modal/Modal.jsx"));
const ModalContentMessage = React.lazy(() => import("../../modal/content/ModalContentMessage.jsx"));
const ModalContent = React.lazy(() => import("../../modal/content/ModalContent.jsx"));
const FormMapperField = React.lazy(() => import("../../form/fields/FormMapperField.jsx"));
const ExperimentalGridTile = React.lazy(() => import("../../tiles/ExperimentalGridTile.jsx"));

export default class TileModalButtonField extends Component {
  constructor(props) {
    super(props);

    this.renderDefaultContent = this.renderDefaultContent.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeAndClearModal = this.closeAndClearModal.bind(this);
    this.onAjaxDone = this.onAjaxDone.bind(this);
    this.onAjaxFail = this.onAjaxFail.bind(this);
    this.showForm = this.showForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onFormSubmitDone = this.onFormSubmitDone.bind(this);
    this.onFormSubmitFail = this.onFormSubmitFail.bind(this);

    this.state = {
      showModal: false,
      modalContent: this.renderDefaultContent()
    };
  }

  renderDefaultContent() {
    return (
      <ModalContent title={this.props.field.label} onConfirm={this.closeModal} confirmButtonText={this.props.field.closeButtonText}>
        <div style={{textAlign: "center", margin: "auto"}}>
          <img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/>
        </div>
      </ModalContent>
    );
  }

  openModal() {
    let url = this.props.field.url;
    if (this.props.field.urlField) {
      url = url.replace(this.props.field.urlField, this.props.data[this.props.field.urlField]);
    }

    jQuery.get(url).done(this.onAjaxDone).fail(this.onAjaxFail);

    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  closeAndClearModal() {
    this.setState({showModal: false, modalContent: this.renderDefaultContent()});
  }

  onAjaxDone(json) {
    try {
      this.showForm(json);
    } catch (e) {
      console.error(e);
      this.closeModal();
    }
  }

  onAjaxFail(response) {
    let json = response.responseJSON;
    if (json.error) {
      this.setState({modalContent: (
          <ModalContentMessage title={json.error.title}
                               message={json.error.message}
                               onConfirm={this.closeModal}
                               confirmButtonText={json.error.confirmButtonText} />
        )}
      );
    } else {
      this.closeModal();
    }
  }

  showForm(json) {
    try {
      let fields;
      if (typeof this.props.field.innerFields !== 'undefined' && this.props.field.innerFields.length > 0) {
        fields = this.props.fields.filter(field => this.props.field.innerFields.includes(field.name));
      } else {
        fields = this.props.fields.filter(field => field.type !== this.props.field.type);
      }
      let formProps = {};
      formProps.updateFunction = function () {};
      let content = <div className={this.props.className || 'c4g-modal-content'}>
        <button className={'c4g-btn c4g-btn-top-close'} type={'button'} onClick={this.closeModal}>
          <span className={'c4g-btn-text'}>{this.props.field.closeButtonText}</span>
        </button>
        <div className={'c4g-modal__title-wrapper'}>
          <span className={'c4g-modal__title'}>{this.props.field.label}</span>
        </div>
        <form>
          <div>
            <Suspense fallback={
              <div style={{textAlign: "center", margin: "auto"}}>
                <img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/>
              </div>}>
              <ExperimentalGridTile dataEntry={this.props.data}
                            fields={fields}
                            list={this.props.list} languageRefs={this.props.languageRefs}/>
              {
                json.formFields.map((item, id) => {
                  return <FormMapperField form={{props: formProps, fields: json.formFields}}
                                          field={item}
                                          data={json.formData || []}
                                          key={id + 1} languageRefs={this.props.languageRefs}/>
                })
              }
            </Suspense>
          </div>
          <div className={'c4g-panel-buttons'}>
            <button className={'c4g-btn c4g-btn-submit'} type={'button'} onClick={this.submitForm}>
              <span className={'c4g-btn-text'}>{this.props.field.confirmButtonText}</span>
            </button>
            <button className={'c4g-btn c4g-btn-close'} type={'button'} onClick={this.closeModal}>
              <span className={'c4g-btn-text'}>{this.props.field.closeButtonText}</span>
            </button>
          </div>
        </form>
      </div>;
      this.setState({modalContent: content});
    } catch (e) {
      console.error(e);
      this.closeModal();
    }
  }

  submitForm(event) {
    let formElements = event.target.parentNode.form.elements;
    let data = {};
    let index = 0;
    while (index < formElements.length) {
      let element = formElements.item(index);
      if (element.name) {
        data[element.name] = element.value;
      }
      index += 1;
    }
    jQuery.post(this.props.field.submitUrl, data).done(this.onFormSubmitDone).fail(this.onFormSubmitFail);
  }

  onFormSubmitDone(json) {
    if (json && json.success) {
      this.setState({modalContent: <ModalContentMessage title={json.success.title}
                                                        message={json.success.message}
                                                        onConfirm={this.closeAndClearModal}
                                                        confirmButtonText={this.props.field.closeButtonText}/>
      });
    } else {
      this.closeModal();
    }
  }

  onFormSubmitFail(response) {
    let json = response.responseJSON;
    if (json && json.error) {
      this.setState({modalContent: <ModalContentMessage title={json.error.title}
                                                        message={json.error.message}
                                                        onConfirm={this.showForm.bind(this, json)}
                                                        confirmButtonText={this.props.field.closeButtonText}/>
      });
    } else {
      this.closeModal();
    }
  }

  render() {
    if (!(this.props.field.label)) {
      return null;
    }

    if (this.props.field.conditions && typeof this.props.field.conditions.forEach === 'function') {
      let render = true;
      this.props.field.conditions.forEach(function (element) {
        let data = this.props.data;
        if (element.not) {
          if (String(data[element.field]) === String(element.value)) {
            render = false;
          }
        } else {
          if (String(data[element.field]) !== String(element.value)) {
            render = false;
          }
        }
      }, this);

      if (render === false) {
        return null;
      }
    }

    return (
      <div className={this.props.field.wrapperClass}>
        <button className={this.props.field.class} onClick={this.openModal}>
          {this.props.field.label}
        </button>
        <Modal show={this.state.showModal} onClose={this.closeModal}>
          {this.state.modalContent}
        </Modal>
      </div>
    );

  }
}