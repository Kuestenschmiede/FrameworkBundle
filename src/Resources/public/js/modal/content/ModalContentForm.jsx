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

export default class ModalContentForm extends Component {

  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
  }

  onConfirm(event) {
    let form = event.target.parentNode.parentNode.children.item(2);
    if (form.checkValidity()) {
      this.props.onConfirm();
    } else {
      let index = 0;
      let messages = {};
      while (index < form.elements.length) {
        let item = form.elements.item(index);
        messages[item.name] = item.validationMessage;
        index += 1;
      }
      this.props.onInvalid(messages);
    }
  }

  render() {
    return (
      <div className={this.props.className || 'c4g-modal-content'}>
        <div>
          <span className={'title'}>{this.props.title}</span>
        </div>
        <div>
          <span className={'message'}>{this.props.message}</span>
        </div>
        <form>
          {this.props.children}
        </form>
        <div>
          <button className={'highlight'} type={'button'} onClick={this.onConfirm}>
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