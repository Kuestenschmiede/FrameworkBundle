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

import React, {Component, Suspense} from "react";
import checkIfFieldIsRendered from "../../util/conditions";

const Modal = React.lazy(() => import("../../modal/Modal.jsx"));
const ModalContentMessage = React.lazy(() => import("../../modal/content/ModalContentMessage.jsx"));
const ModalContent = React.lazy(() => import("../../modal/content/ModalContent.jsx"));
const FormMapperField = React.lazy(() => import("../../form/fields/FormMapperField.jsx"));
const DetailMapperField = React.lazy(() => import("./DetailMapperField.jsx"));

export default class DetailModalFormButtonField extends Component {
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
      let fields = this.props.fields.filter(field => field.type !== this.props.field.type);
      let formProps = {};
      formProps.updateFunction = function () {
      };
      let content = <div className={this.props.className || 'c4g-modal-content'}>
        <div>
          <span className={'title'}>{this.props.field.label}</span>
        </div>
        <form>
          <div>
            <Suspense fallback={
              <div style={{textAlign: "center", margin: "auto"}}>
                <img src="bundles/con4gisframework/img/preloader-image.svg" className="preloader-image" alt=""/>
              </div>}>
              <div>
                {
                  fields.map((item, id) => {
                    return <DetailMapperField data={this.props.data}
                                              field={item}
                                              fields={fields}
                                              key={id}
                                              detail={this.props.detail}
                                              languageRefs={this.props.languageRefs}
                    />
                  })
                }
              </div>
              {
                json.formFields.map((item, id) => {
                  return <FormMapperField form={{props: formProps, fields: json.formFields}}
                                          field={item}
                                          data={json.formData || []}
                                          key={id + 1}
                                          languageRefs={this.props.languageRefs}
                  />
                })
              }
            </Suspense>
          </div>
          <div>
            <button className={'highlight'} type={'button'} onClick={this.submitForm}>
              {this.props.field.confirmButtonText}
            </button>
            <button type={'button'} onClick={this.closeModal}>
              {this.props.field.closeButtonText}
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
    let formElements = event.target.form.elements;
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
    // check condition
    if (!checkIfFieldIsRendered(this.props.field, this.props.data)) {
      return null;
    }

    return (
      <div className={"detail-field-text" + (this.props.field.class ? " " + this.props.field.class : "")}>
        <button className={this.props.field.name} onClick={this.openModal}>
          {this.props.field.label}
        </button>
        <Modal show={this.state.showModal}>
          {this.state.modalContent}
        </Modal>
      </div>
    );
  }

}