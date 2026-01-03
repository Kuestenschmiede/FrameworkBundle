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

const FormTextAreaField = React.lazy(() => import("./FormTextAreaField.jsx"));
const FormTextField = React.lazy(() => import("./FormTextField.jsx"));
const FormPostalField = React.lazy(() => import("./FormPostalField.jsx"));
const FormNumberField = React.lazy(() => import("./FormNumberField.jsx"));
const FormNumberWithUnitField = React.lazy(() => import("./FormNumberWithUnitField.jsx"));
const FormPDFUploadField = React.lazy(() => import("./FormPDFUploadField.jsx"));
const FormCheckboxField = React.lazy(() => import("./FormCheckboxField.jsx"));
const FormCroppedFileUploadField = React.lazy(() => import("./FormCroppedFileUploadField.jsx"));
const FormAsynchronousCroppedFileUploadField = React.lazy(() => import("./FormAsynchronousCroppedFileUploadField.jsx"));
const FormDatepickerField = React.lazy(() => import("./FormDatepickerField.jsx"));
const FormImageGalleryUploadField = React.lazy(() => import("./FormImageGalleryUploadField.jsx"));
const FormAsynchronousImageGalleryUploadField = React.lazy(() => import("./FormAsynchronousImageGalleryUploadField.jsx"));
const FormHiddenField = React.lazy(() => import("./FormHiddenField.jsx"));
const FormSelectField = React.lazy(() => import("./FormSelectField.jsx"));
const FormGeopickerField = React.lazy(() => import("./FormGeopickerField.jsx"));
const FormRadioGroupField = React.lazy(() => import("./FormRadioGroupField.jsx"));
const FormRadioGroupWithImageLabelField = React.lazy(() => import("./FormRadioGroupWithImageLabelField.jsx"));
const FormCKEditorField = React.lazy(() => import("./FormCKEditorField.jsx"));
const FormWrapperField = React.lazy(() => import("./FormWrapperField.jsx"));
const FormDateField = React.lazy(() => import("./FormDateField.jsx"));
const FormDateRangeField = React.lazy(() => import("./FormDateRangeField.jsx"));
const FormMultiCheckboxWithImageLabelField = React.lazy(() => import("./FormMultiCheckboxWithImageLabelField.jsx"));
const FormTimeField = React.lazy(() => import("./FormTimeField.jsx"));
const FormNumberRangeField = React.lazy(() => import("./FormNumberRangeField.jsx"));
const FormMultiDatepickerField = React.lazy(() => import("./FormMultiDatepickerField.jsx"));

export default class FormMapperField extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    switch (this.props.field.type) {

      case "textarea":
        return <FormTextAreaField {...this.props}/>;
      case "text":
      case "search":
      case "tel":
        return <FormTextField {...this.props}/>;
      case "number":
        return <FormNumberField {...this.props}/>;
      case "number-unit":
        return <FormNumberWithUnitField {...this.props}/>;
      case "pdf-upload":
        return <FormPDFUploadField {...this.props}/>;
      case "checkbox":
        return <FormCheckboxField {...this.props}/>;
      case "checkboximage":
        return <FormMultiCheckboxWithImageLabelField {...this.props} />
      case "fileupload":
        return <FormCroppedFileUploadField {...this.props}/>;
      case "asynchronous-fileupload":
        return <FormAsynchronousCroppedFileUploadField {...this.props}/>;
      case "asynchronous-image-gallery":
        return <FormAsynchronousImageGalleryUploadField {...this.props}/>;
      case "datepicker":
        return <FormDatepickerField {...this.props}/>;
      case "date":
        return <FormDateField {...this.props}/>;
      case "daterange":
        return <FormDateRangeField {...this.props} />;
      case "time":
        return <FormTimeField {...this.props}/>;
      case "image-gallery":
        return <FormImageGalleryUploadField {...this.props}/>;
      case "hidden":
        return <FormHiddenField {...this.props}/>;
      case "select":
        return <FormSelectField {...this.props}/>;
      case "geopicker":
        return <FormGeopickerField {...this.props}/>;
      case "radio":
        return <FormRadioGroupField {...this.props}/>;
      case "radioImage":
        return <FormRadioGroupWithImageLabelField {...this.props}/>;
      case "postal":
        return <FormPostalField {...this.props}/>;
      case "ckeditor":
        return <FormCKEditorField {...this.props}/>;
      case "wrapper":
        return <FormWrapperField  {...this.props}/>;
      case "number-range":
        return <FormNumberRangeField  {...this.props}/>;
      case "multi-date-picker":
        return <FormMultiDatepickerField  {...this.props}/>;
      default:
        return null;
    }
  }

}