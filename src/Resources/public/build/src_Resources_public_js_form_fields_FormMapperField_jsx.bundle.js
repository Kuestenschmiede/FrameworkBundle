"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormMapperField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormMapperField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormMapperField.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var FormTextAreaField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormTextAreaField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormTextAreaField.jsx */ "./src/Resources/public/js/form/fields/FormTextAreaField.jsx"));
});
var FormTextField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormTextField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormTextField.jsx */ "./src/Resources/public/js/form/fields/FormTextField.jsx"));
});
var FormPostalField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormPostalField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormPostalField.jsx */ "./src/Resources/public/js/form/fields/FormPostalField.jsx"));
});
var FormNumberField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormNumberField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormNumberField.jsx */ "./src/Resources/public/js/form/fields/FormNumberField.jsx"));
});
var FormNumberWithUnitField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_cache_dist_emotion-cache_browser_development_esm_js-node_modules-e2c8c8"), __webpack_require__.e("vendors-node_modules_react-is_index_js-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_Resources_public_js_form_fields_FormNumberWithUnitField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormNumberWithUnitField.jsx */ "./src/Resources/public/js/form/fields/FormNumberWithUnitField.jsx"));
});
var FormPDFUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("vendors-node_modules_react-pdf_dist_esm_entry_webpack_js"), __webpack_require__.e("src_Resources_public_js_form_fields_FormPDFUploadField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormPDFUploadField.jsx */ "./src/Resources/public/js/form/fields/FormPDFUploadField.jsx"));
});
var FormCheckboxField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormCheckboxField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormCheckboxField.jsx */ "./src/Resources/public/js/form/fields/FormCheckboxField.jsx"));
});
var FormCroppedFileUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("vendors-node_modules_blueimp-load-image_js_index_js-node_modules_react-image-crop_dist_ReactC-8661c8"), __webpack_require__.e("src_Resources_public_js_form_fields_FormCroppedFileUploadField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormCroppedFileUploadField.jsx */ "./src/Resources/public/js/form/fields/FormCroppedFileUploadField.jsx"));
});
var FormAsynchronousCroppedFileUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("vendors-node_modules_blueimp-load-image_js_index_js-node_modules_react-image-crop_dist_ReactC-8661c8"), __webpack_require__.e("src_Resources_public_js_form_fields_FormAsynchronousCroppedFileUploadField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormAsynchronousCroppedFileUploadField.jsx */ "./src/Resources/public/js/form/fields/FormAsynchronousCroppedFileUploadField.jsx"));
});
var FormDatepickerField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-datepic-0ae639"), __webpack_require__.e("src_Resources_public_js_form_fields_FormDatepickerField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormDatepickerField.jsx */ "./src/Resources/public/js/form/fields/FormDatepickerField.jsx"));
});
var FormImageGalleryUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormImageGalleryUploadField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormImageGalleryUploadField.jsx */ "./src/Resources/public/js/form/fields/FormImageGalleryUploadField.jsx"));
});
var FormAsynchronousImageGalleryUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("vendors-node_modules_blueimp-load-image_js_index_js-node_modules_react-image-crop_dist_ReactC-8661c8"), __webpack_require__.e("src_Resources_public_js_form_fields_FormAsynchronousCroppedFileUploadField_jsx"), __webpack_require__.e("src_Resources_public_js_form_fields_FormAsynchronousImageGalleryUploadField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormAsynchronousImageGalleryUploadField.jsx */ "./src/Resources/public/js/form/fields/FormAsynchronousImageGalleryUploadField.jsx"));
});
var FormHiddenField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormHiddenField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormHiddenField.jsx */ "./src/Resources/public/js/form/fields/FormHiddenField.jsx"));
});
var FormSelectField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_emotion_cache_dist_emotion-cache_browser_development_esm_js-node_modules-e2c8c8"), __webpack_require__.e("vendors-node_modules_react-is_index_js-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_Resources_public_js_form_fields_FormSelectField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormSelectField.jsx */ "./src/Resources/public/js/form/fields/FormSelectField.jsx"));
});
var FormGeopickerField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-MapsBundle_node_modules_proj4_lib_index_js-MapsBundle_node_modules_react-dom_index_js-7d41dc"), __webpack_require__.e("MapsBundle_src_Resources_public_js_components_c4g-maps_jsx"), __webpack_require__.e("src_Resources_public_js_form_fields_FormGeopickerField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormGeopickerField.jsx */ "./src/Resources/public/js/form/fields/FormGeopickerField.jsx"));
});
var FormRadioGroupField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormRadioGroupField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormRadioGroupField.jsx */ "./src/Resources/public/js/form/fields/FormRadioGroupField.jsx"));
});
var FormRadioGroupWithImageLabelField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormRadioGroupWithImageLabelField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormRadioGroupWithImageLabelField.jsx */ "./src/Resources/public/js/form/fields/FormRadioGroupWithImageLabelField.jsx"));
});
var FormCKEditorField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_ckeditor_ckeditor5-build-classic_build_ckeditor_js-node_modules_ckeditor-88d151"), __webpack_require__.e("src_Resources_public_js_form_fields_FormCKEditorField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormCKEditorField.jsx */ "./src/Resources/public/js/form/fields/FormCKEditorField.jsx"));
});
var FormWrapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormWrapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormWrapperField.jsx */ "./src/Resources/public/js/form/fields/FormWrapperField.jsx"));
});
var FormDateField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormDateField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormDateField.jsx */ "./src/Resources/public/js/form/fields/FormDateField.jsx"));
});
var FormDateRangeField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-datepic-0ae639"), __webpack_require__.e("src_Resources_public_js_form_fields_FormDatepickerField_jsx"), __webpack_require__.e("src_Resources_public_js_form_fields_FormDateRangeField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormDateRangeField.jsx */ "./src/Resources/public/js/form/fields/FormDateRangeField.jsx"));
});
var FormMultiCheckboxWithImageLabelField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormMultiCheckboxWithImageLabelField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormMultiCheckboxWithImageLabelField.jsx */ "./src/Resources/public/js/form/fields/FormMultiCheckboxWithImageLabelField.jsx"));
});
var FormTimeField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormTimeField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormTimeField.jsx */ "./src/Resources/public/js/form/fields/FormTimeField.jsx"));
});
var FormNumberRangeField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormNumberRangeField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FormNumberRangeField.jsx */ "./src/Resources/public/js/form/fields/FormNumberRangeField.jsx"));
});
var FormMultiDatepickerField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_react-multi-date-picker_build_index_js-node_modules_react-multi-date-pic-b6dcbe"), __webpack_require__.e("src_Resources_public_js_form_fields_FormMultiDatepickerField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormMultiDatepickerField.jsx */ "./src/Resources/public/js/form/fields/FormMultiDatepickerField.jsx"));
});
var FormMapperField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormMapperField(props) {
    (0, _classCallCheck2["default"])(this, FormMapperField);
    return _callSuper(this, FormMapperField, [props]);
  }
  (0, _inherits2["default"])(FormMapperField, _Component);
  return (0, _createClass2["default"])(FormMapperField, [{
    key: "render",
    value: function render() {
      switch (this.props.field.type) {
        case "textarea":
          return /*#__PURE__*/_react["default"].createElement(FormTextAreaField, this.props);
        case "text":
        case "search":
        case "tel":
          return /*#__PURE__*/_react["default"].createElement(FormTextField, this.props);
        case "number":
          return /*#__PURE__*/_react["default"].createElement(FormNumberField, this.props);
        case "number-unit":
          return /*#__PURE__*/_react["default"].createElement(FormNumberWithUnitField, this.props);
        case "pdf-upload":
          return /*#__PURE__*/_react["default"].createElement(FormPDFUploadField, this.props);
        case "checkbox":
          return /*#__PURE__*/_react["default"].createElement(FormCheckboxField, this.props);
        case "checkboximage":
          return /*#__PURE__*/_react["default"].createElement(FormMultiCheckboxWithImageLabelField, this.props);
        case "fileupload":
          return /*#__PURE__*/_react["default"].createElement(FormCroppedFileUploadField, this.props);
        case "asynchronous-fileupload":
          return /*#__PURE__*/_react["default"].createElement(FormAsynchronousCroppedFileUploadField, this.props);
        case "asynchronous-image-gallery":
          return /*#__PURE__*/_react["default"].createElement(FormAsynchronousImageGalleryUploadField, this.props);
        case "datepicker":
          return /*#__PURE__*/_react["default"].createElement(FormDatepickerField, this.props);
        case "date":
          return /*#__PURE__*/_react["default"].createElement(FormDateField, this.props);
        case "daterange":
          return /*#__PURE__*/_react["default"].createElement(FormDateRangeField, this.props);
        case "time":
          return /*#__PURE__*/_react["default"].createElement(FormTimeField, this.props);
        case "image-gallery":
          return /*#__PURE__*/_react["default"].createElement(FormImageGalleryUploadField, this.props);
        case "hidden":
          return /*#__PURE__*/_react["default"].createElement(FormHiddenField, this.props);
        case "select":
          return /*#__PURE__*/_react["default"].createElement(FormSelectField, this.props);
        case "geopicker":
          return /*#__PURE__*/_react["default"].createElement(FormGeopickerField, this.props);
        case "radio":
          return /*#__PURE__*/_react["default"].createElement(FormRadioGroupField, this.props);
        case "radioImage":
          return /*#__PURE__*/_react["default"].createElement(FormRadioGroupWithImageLabelField, this.props);
        case "postal":
          return /*#__PURE__*/_react["default"].createElement(FormPostalField, this.props);
        case "ckeditor":
          return /*#__PURE__*/_react["default"].createElement(FormCKEditorField, this.props);
        case "wrapper":
          return /*#__PURE__*/_react["default"].createElement(FormWrapperField, this.props);
        case "number-range":
          return /*#__PURE__*/_react["default"].createElement(FormNumberRangeField, this.props);
        case "multi-date-picker":
          return /*#__PURE__*/_react["default"].createElement(FormMultiDatepickerField, this.props);
        default:
          return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU1hcHBlckZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVB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QUFBLENBQUNyQixpQ0FBaUMsRUFBSyxJQUFJLENBQUNZLEtBQU8sQ0FBQztRQUM3RCxLQUFLLFFBQVE7VUFDWCxvQkFBT2pFLE1BQUEsWUFBQTBFLGFBQUEsQ0FBQ25DLGVBQWUsRUFBSyxJQUFJLENBQUMwQixLQUFPLENBQUM7UUFDM0MsS0FBSyxVQUFVO1VBQ2Isb0JBQU9qRSxNQUFBLFlBQUEwRSxhQUFBLENBQUNwQixpQkFBaUIsRUFBSyxJQUFJLENBQUNXLEtBQU8sQ0FBQztRQUM3QyxLQUFLLFNBQVM7VUFDWixvQkFBT2pFLE1BQUEsWUFBQTBFLGFBQUEsQ0FBQ25CLGdCQUFnQixFQUFNLElBQUksQ0FBQ1UsS0FBTyxDQUFDO1FBQzdDLEtBQUssY0FBYztVQUNqQixvQkFBT2pFLE1BQUEsWUFBQTBFLGFBQUEsQ0FBQ2Qsb0JBQW9CLEVBQU0sSUFBSSxDQUFDSyxLQUFPLENBQUM7UUFDakQsS0FBSyxtQkFBbUI7VUFDdEIsb0JBQU9qRSxNQUFBLFlBQUEwRSxhQUFBLENBQUNiLHdCQUF3QixFQUFNLElBQUksQ0FBQ0ksS0FBTyxDQUFDO1FBQ3JEO1VBQ0UsT0FBTyxJQUFJO01BQ2Y7SUFDRjtFQUFDO0FBQUEsRUFqRTBDVSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1NYXBwZXJGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb3JtVGV4dEFyZWFGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtVGV4dEFyZWFGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybVRleHRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtVGV4dEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtUG9zdGFsRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybVBvc3RhbEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtTnVtYmVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybU51bWJlckZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtTnVtYmVyV2l0aFVuaXRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtTnVtYmVyV2l0aFVuaXRGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybVBERlVwbG9hZEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1QREZVcGxvYWRGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybUNoZWNrYm94RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybUNoZWNrYm94RmllbGQuanN4XCIpKTtcbmNvbnN0IEZvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybURhdGVwaWNrZXJGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtRGF0ZXBpY2tlckZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybUltYWdlR2FsbGVyeVVwbG9hZEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtQXN5bmNocm9ub3VzSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybUFzeW5jaHJvbm91c0ltYWdlR2FsbGVyeVVwbG9hZEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtSGlkZGVuRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybUhpZGRlbkZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtU2VsZWN0RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybVNlbGVjdEZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtR2VvcGlja2VyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybUdlb3BpY2tlckZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtUmFkaW9Hcm91cEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1SYWRpb0dyb3VwRmllbGQuanN4XCIpKTtcbmNvbnN0IEZvcm1SYWRpb0dyb3VwV2l0aEltYWdlTGFiZWxGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtUmFkaW9Hcm91cFdpdGhJbWFnZUxhYmVsRmllbGQuanN4XCIpKTtcbmNvbnN0IEZvcm1DS0VkaXRvckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1DS0VkaXRvckZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtV3JhcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1XcmFwcGVyRmllbGQuanN4XCIpKTtcbmNvbnN0IEZvcm1EYXRlRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybURhdGVGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybURhdGVSYW5nZUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1EYXRlUmFuZ2VGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybU11bHRpQ2hlY2tib3hXaXRoSW1hZ2VMYWJlbEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1NdWx0aUNoZWNrYm94V2l0aEltYWdlTGFiZWxGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybVRpbWVGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtVGltZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBGb3JtTnVtYmVyUmFuZ2VGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Gb3JtTnVtYmVyUmFuZ2VGaWVsZC5qc3hcIikpO1xuY29uc3QgRm9ybU11bHRpRGF0ZXBpY2tlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1NdWx0aURhdGVwaWNrZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTWFwcGVyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmZpZWxkLnR5cGUpIHtcblxuICAgICAgY2FzZSBcInRleHRhcmVhXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybVRleHRBcmVhRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgY2FzZSBcInRlbFwiOlxuICAgICAgICByZXR1cm4gPEZvcm1UZXh0RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybU51bWJlckZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcIm51bWJlci11bml0XCI6XG4gICAgICAgIHJldHVybiA8Rm9ybU51bWJlcldpdGhVbml0RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwicGRmLXVwbG9hZFwiOlxuICAgICAgICByZXR1cm4gPEZvcm1QREZVcGxvYWRGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICByZXR1cm4gPEZvcm1DaGVja2JveEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImNoZWNrYm94aW1hZ2VcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtTXVsdGlDaGVja2JveFdpdGhJbWFnZUxhYmVsRmllbGQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICBjYXNlIFwiZmlsZXVwbG9hZFwiOlxuICAgICAgICByZXR1cm4gPEZvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImFzeW5jaHJvbm91cy1maWxldXBsb2FkXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybUFzeW5jaHJvbm91c0Nyb3BwZWRGaWxlVXBsb2FkRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiYXN5bmNocm9ub3VzLWltYWdlLWdhbGxlcnlcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtQXN5bmNocm9ub3VzSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZGF0ZXBpY2tlclwiOlxuICAgICAgICByZXR1cm4gPEZvcm1EYXRlcGlja2VyRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgICByZXR1cm4gPEZvcm1EYXRlRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZGF0ZXJhbmdlXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybURhdGVSYW5nZUZpZWxkIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybVRpbWVGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJpbWFnZS1nYWxsZXJ5XCI6XG4gICAgICAgIHJldHVybiA8Rm9ybUltYWdlR2FsbGVyeVVwbG9hZEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImhpZGRlblwiOlxuICAgICAgICByZXR1cm4gPEZvcm1IaWRkZW5GaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtU2VsZWN0RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZ2VvcGlja2VyXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybUdlb3BpY2tlckZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybVJhZGlvR3JvdXBGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJyYWRpb0ltYWdlXCI6XG4gICAgICAgIHJldHVybiA8Rm9ybVJhZGlvR3JvdXBXaXRoSW1hZ2VMYWJlbEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInBvc3RhbFwiOlxuICAgICAgICByZXR1cm4gPEZvcm1Qb3N0YWxGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJja2VkaXRvclwiOlxuICAgICAgICByZXR1cm4gPEZvcm1DS0VkaXRvckZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcIndyYXBwZXJcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtV3JhcHBlckZpZWxkICB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJudW1iZXItcmFuZ2VcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtTnVtYmVyUmFuZ2VGaWVsZCAgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwibXVsdGktZGF0ZS1waWNrZXJcIjpcbiAgICAgICAgcmV0dXJuIDxGb3JtTXVsdGlEYXRlcGlja2VyRmllbGQgIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtVGV4dEFyZWFGaWVsZCIsIlJlYWN0IiwibGF6eSIsIkZvcm1UZXh0RmllbGQiLCJGb3JtUG9zdGFsRmllbGQiLCJGb3JtTnVtYmVyRmllbGQiLCJGb3JtTnVtYmVyV2l0aFVuaXRGaWVsZCIsIkZvcm1QREZVcGxvYWRGaWVsZCIsIkZvcm1DaGVja2JveEZpZWxkIiwiRm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGQiLCJGb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZCIsIkZvcm1EYXRlcGlja2VyRmllbGQiLCJGb3JtSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQiLCJGb3JtQXN5bmNocm9ub3VzSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQiLCJGb3JtSGlkZGVuRmllbGQiLCJGb3JtU2VsZWN0RmllbGQiLCJGb3JtR2VvcGlja2VyRmllbGQiLCJGb3JtUmFkaW9Hcm91cEZpZWxkIiwiRm9ybVJhZGlvR3JvdXBXaXRoSW1hZ2VMYWJlbEZpZWxkIiwiRm9ybUNLRWRpdG9yRmllbGQiLCJGb3JtV3JhcHBlckZpZWxkIiwiRm9ybURhdGVGaWVsZCIsIkZvcm1EYXRlUmFuZ2VGaWVsZCIsIkZvcm1NdWx0aUNoZWNrYm94V2l0aEltYWdlTGFiZWxGaWVsZCIsIkZvcm1UaW1lRmllbGQiLCJGb3JtTnVtYmVyUmFuZ2VGaWVsZCIsIkZvcm1NdWx0aURhdGVwaWNrZXJGaWVsZCIsIkZvcm1NYXBwZXJGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImZpZWxkIiwidHlwZSIsImNyZWF0ZUVsZW1lbnQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9