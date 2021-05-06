/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import deLang from '@ckeditor/ckeditor5-build-classic/build/translations/de.js'

export default class FormCKEditorField extends Component {

  constructor(props) {
    super(props);

    // ckeditor reference
    this.editor = null;
  }

  handleChangeDummy(data) {
    // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
  }

  render() {
    let label = null;
    if (this.props.field.label) {
      if (this.props.field.required) {
        label = <label className={"c4g-required"}>{this.props.field.label}</label>;
      } else {
        label = <label>{this.props.field.label}</label>;
      }
    }

    let description = null;
    if (this.props.field.description) {
      description = (<small className={"field-description form-text text-muted"}>{this.props.field.description}</small>);
    }

    return (
      <div className={this.props.field.name}>
        {label}
        <div id={this.props.field.name}>
          <CKEditor
            editor={ ClassicEditor }
            data={this.props.data[this.props.field.name]}
            onReady={ editor => {
              this.editor = editor;
            } }
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              this.props.form.props.updateFunction(this.props.form.props.name, {[this.props.field.name]: data});
            } }
            onBlur={ ( event, editor ) => {

            } }
            onFocus={ ( event, editor ) => {

            } }
            config={{
              placeholder: this.props.field.placeholder,
              toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList'],
              heading: {
                options: [
                  { model: 'paragraph', title: this.props.field.paragraphLabel, class: 'ck-heading_paragraph' },
                  { model: 'heading2', view: 'h2', title: this.props.field.headingLabel[0], class: 'ck-heading_heading2' },
                  { model: 'heading3', view: 'h3', title: this.props.field.headingLabel[1], class: 'ck-heading_heading3' },
                  { model: 'bulletedList', view: 'ul', title: this.props.field.bulletedListLabel, class: 'ck-bulletedList' },
                  { model: 'numberedList', view: 'ol', title: this.props.field.numberedListLabel, class: 'ck-numberedList' }
                ]
              },
              language: this.props.field.language || "de"
            }}
          />
          <textarea tabIndex={-1}
                    autoComplete={"off"}
                    style={{ opacity: 0, height: 0, pointerEvents: "none"}}
                    value={this.props.data[this.props.field.name]}
                    name={this.props.field.name}
                    required={this.props.field.required}
                    onChange={this.handleChangeDummy}>
          </textarea>
        </div>
        {description}
      </div>
    );
  }
}