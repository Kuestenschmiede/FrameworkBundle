"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailMapperField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailMapperField.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailMapperField.jsx ***!
  \*********************************************************************/
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
var DetailTextField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailTextField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailTextField.jsx */ "./src/Resources/public/js/detail/fields/DetailTextField.jsx"));
});
var DetailDateField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailDateField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailDateField.jsx */ "./src/Resources/public/js/detail/fields/DetailDateField.jsx"));
});
var DetailImageField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailImageField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailImageField.jsx */ "./src/Resources/public/js/detail/fields/DetailImageField.jsx"));
});
var DetailHTMLField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailHTMLField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailHTMLField.jsx */ "./src/Resources/public/js/detail/fields/DetailHTMLField.jsx"));
});
var DetailImageGalleryField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_react-responsive-carousel_lib_styles_carousel_min_css"), __webpack_require__.e("vendors-node_modules_react-responsive-carousel_lib_js_index_js"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailImageGalleryField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailImageGalleryField.jsx */ "./src/Resources/public/js/detail/fields/DetailImageGalleryField.jsx"));
});
var DetailModalImageGalleryField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_react-responsive-carousel_lib_styles_carousel_min_css"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailModalImageGalleryField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailModalImageGalleryField.jsx */ "./src/Resources/public/js/detail/fields/DetailModalImageGalleryField.jsx"));
});
var DetailModalFormButtonField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailModalFormButtonField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailModalFormButtonField.jsx */ "./src/Resources/public/js/detail/fields/DetailModalFormButtonField.jsx"));
});
var DetailFancyboxImageGallery = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailFancyboxImageGallery_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailFancyboxImageGallery.jsx */ "./src/Resources/public/js/detail/fields/DetailFancyboxImageGallery.jsx"));
});
var DetailContactField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_opening_hours_build_opening_hours_js"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailOSMOpeningHoursField_jsx"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailContactField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailContactField.jsx */ "./src/Resources/public/js/detail/fields/DetailContactField.jsx"));
});
var DetailMapLocationField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailMapLocationField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailMapLocationField.jsx */ "./src/Resources/public/js/detail/fields/DetailMapLocationField.jsx"));
});
var DetailOSMOpeningHoursField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_opening_hours_build_opening_hours_js"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailOSMOpeningHoursField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailOSMOpeningHoursField.jsx */ "./src/Resources/public/js/detail/fields/DetailOSMOpeningHoursField.jsx"));
});
var DetailPDFField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailPDFField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailPDFField.jsx */ "./src/Resources/public/js/detail/fields/DetailPDFField.jsx"));
});
var DetailHeadlineField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailHeadlineField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailHeadlineField.jsx */ "./src/Resources/public/js/detail/fields/DetailHeadlineField.jsx"));
});
var DetailTagField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailTagField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailTagField.jsx */ "./src/Resources/public/js/detail/fields/DetailTagField.jsx"));
});
var DetailLinkField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailLinkField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailLinkField.jsx */ "./src/Resources/public/js/detail/fields/DetailLinkField.jsx"));
});
var DetailVideoPreviewField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_u-wave_react-vimeo_dist_react-vimeo_es_js-node_modules_react-youtube_dis-612af7"), __webpack_require__.e("src_Resources_public_js_detail_fields_DetailVideoPreviewField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailVideoPreviewField.jsx */ "./src/Resources/public/js/detail/fields/DetailVideoPreviewField.jsx"));
});
var DetailFooterField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailFooterField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailFooterField.jsx */ "./src/Resources/public/js/detail/fields/DetailFooterField.jsx"));
});
var DetailImageLinkField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailImageLinkField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailImageLinkField.jsx */ "./src/Resources/public/js/detail/fields/DetailImageLinkField.jsx"));
});
var DetailMapperField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailMapperField(props) {
    (0, _classCallCheck2["default"])(this, DetailMapperField);
    return _callSuper(this, DetailMapperField, [props]);
  }
  (0, _inherits2["default"])(DetailMapperField, _Component);
  return (0, _createClass2["default"])(DetailMapperField, [{
    key: "render",
    value: function render() {
      switch (this.props.field.type) {
        case "text":
          return /*#__PURE__*/_react["default"].createElement(DetailTextField, this.props);
        case "date":
          return /*#__PURE__*/_react["default"].createElement(DetailDateField, this.props);
        case "image":
          return /*#__PURE__*/_react["default"].createElement(DetailImageField, this.props);
        case "html":
          return /*#__PURE__*/_react["default"].createElement(DetailHTMLField, this.props);
        case "image-gallery":
          return /*#__PURE__*/_react["default"].createElement(DetailImageGalleryField, this.props);
        case "modal-image-gallery":
          return /*#__PURE__*/_react["default"].createElement(DetailModalImageGalleryField, this.props);
        case "fancybox-image-gallery":
          return /*#__PURE__*/_react["default"].createElement(DetailFancyboxImageGallery, this.props);
        case "modal-form-button":
          return /*#__PURE__*/_react["default"].createElement(DetailModalFormButtonField, this.props);
        case "contact":
          return /*#__PURE__*/_react["default"].createElement(DetailContactField, this.props);
        case "osm-opening-hours":
          return /*#__PURE__*/_react["default"].createElement(DetailOSMOpeningHoursField, this.props);
        case "pdf":
          return /*#__PURE__*/_react["default"].createElement(DetailPDFField, this.props);
        case "map-location":
          return /*#__PURE__*/_react["default"].createElement(DetailMapLocationField, this.props);
        case "headline":
          return /*#__PURE__*/_react["default"].createElement(DetailHeadlineField, this.props);
        case "tag":
          return /*#__PURE__*/_react["default"].createElement(DetailTagField, this.props);
        case "link":
          return /*#__PURE__*/_react["default"].createElement(DetailLinkField, this.props);
        case "image-link":
          return /*#__PURE__*/_react["default"].createElement(DetailImageLinkField, this.props);
        case "video-preview":
          return /*#__PURE__*/_react["default"].createElement(DetailVideoPreviewField, this.props);
        case "footer":
          return /*#__PURE__*/_react["default"].createElement(DetailFooterField, this.props);
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxNYXBwZXJGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FB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QUNiLG9CQUFvQixFQUFLLElBQUksQ0FBQ0ksS0FBTyxDQUFDO1FBQ2hELEtBQUssZUFBZTtVQUNsQixvQkFBTzFELE1BQUEsWUFBQW1FLGFBQUEsQ0FBQ2YsdUJBQXVCLEVBQUssSUFBSSxDQUFDTSxLQUFPLENBQUM7UUFDbkQsS0FBSyxRQUFRO1VBQ1gsb0JBQU8xRCxNQUFBLFlBQUFtRSxhQUFBLENBQUNkLGlCQUFpQixFQUFLLElBQUksQ0FBQ0ssS0FBTyxDQUFDO01BQy9DO0lBQ0Y7RUFBQztBQUFBLEVBN0M0Q1UsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbE1hcHBlckZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERldGFpbFRleHRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxUZXh0RmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbERhdGVGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxEYXRlRmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbEltYWdlRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsSW1hZ2VGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsSFRNTEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbEhUTUxGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsSW1hZ2VHYWxsZXJ5RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsSW1hZ2VHYWxsZXJ5RmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbE1vZGFsSW1hZ2VHYWxsZXJ5RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsTW9kYWxJbWFnZUdhbGxlcnlGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsTW9kYWxGb3JtQnV0dG9uRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsTW9kYWxGb3JtQnV0dG9uRmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbEZhbmN5Ym94SW1hZ2VHYWxsZXJ5ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbEZhbmN5Ym94SW1hZ2VHYWxsZXJ5LmpzeFwiKSk7XG5jb25zdCBEZXRhaWxDb250YWN0RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsQ29udGFjdEZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxNYXBMb2NhdGlvbkZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbE1hcExvY2F0aW9uRmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxQREZGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxQREZGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsSGVhZGxpbmVGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxIZWFkbGluZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxUYWdGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxUYWdGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsTGlua0ZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbExpbmtGaWVsZC5qc3hcIikpO1xuY29uc3QgRGV0YWlsVmlkZW9QcmV2aWV3RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsVmlkZW9QcmV2aWV3RmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbEZvb3RlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbEZvb3RlckZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxJbWFnZUxpbmtGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxJbWFnZUxpbmtGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNYXBwZXJGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgIHJldHVybiA8RGV0YWlsVGV4dEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxEYXRlRmllbGQgIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImltYWdlXCI6XG4gICAgICAgIHJldHVybiA8RGV0YWlsSW1hZ2VGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgIHJldHVybiA8RGV0YWlsSFRNTEZpZWxkICB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJpbWFnZS1nYWxsZXJ5XCI6XG4gICAgICAgIHJldHVybiA8RGV0YWlsSW1hZ2VHYWxsZXJ5RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwibW9kYWwtaW1hZ2UtZ2FsbGVyeVwiOlxuICAgICAgICByZXR1cm4gPERldGFpbE1vZGFsSW1hZ2VHYWxsZXJ5RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZmFuY3lib3gtaW1hZ2UtZ2FsbGVyeVwiOlxuICAgICAgICByZXR1cm4gPERldGFpbEZhbmN5Ym94SW1hZ2VHYWxsZXJ5IHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcIm1vZGFsLWZvcm0tYnV0dG9uXCI6XG4gICAgICAgIHJldHVybiA8RGV0YWlsTW9kYWxGb3JtQnV0dG9uRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICByZXR1cm4gPERldGFpbENvbnRhY3RGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJvc20tb3BlbmluZy1ob3Vyc1wiOlxuICAgICAgICByZXR1cm4gPERldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInBkZlwiOlxuICAgICAgICByZXR1cm4gPERldGFpbFBERkZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcIm1hcC1sb2NhdGlvblwiOlxuICAgICAgICByZXR1cm4gPERldGFpbE1hcExvY2F0aW9uRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiaGVhZGxpbmVcIjpcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxIZWFkbGluZUZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInRhZ1wiOlxuICAgICAgICByZXR1cm4gPERldGFpbFRhZ0ZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxMaW5rRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiaW1hZ2UtbGlua1wiOlxuICAgICAgICByZXR1cm4gPERldGFpbEltYWdlTGlua0ZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInZpZGVvLXByZXZpZXdcIjpcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxWaWRlb1ByZXZpZXdGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJmb290ZXJcIjpcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxGb290ZXJGaWVsZCB7Li4udGhpcy5wcm9wc30vPlxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRGV0YWlsVGV4dEZpZWxkIiwiUmVhY3QiLCJsYXp5IiwiRGV0YWlsRGF0ZUZpZWxkIiwiRGV0YWlsSW1hZ2VGaWVsZCIsIkRldGFpbEhUTUxGaWVsZCIsIkRldGFpbEltYWdlR2FsbGVyeUZpZWxkIiwiRGV0YWlsTW9kYWxJbWFnZUdhbGxlcnlGaWVsZCIsIkRldGFpbE1vZGFsRm9ybUJ1dHRvbkZpZWxkIiwiRGV0YWlsRmFuY3lib3hJbWFnZUdhbGxlcnkiLCJEZXRhaWxDb250YWN0RmllbGQiLCJEZXRhaWxNYXBMb2NhdGlvbkZpZWxkIiwiRGV0YWlsT1NNT3BlbmluZ0hvdXJzRmllbGQiLCJEZXRhaWxQREZGaWVsZCIsIkRldGFpbEhlYWRsaW5lRmllbGQiLCJEZXRhaWxUYWdGaWVsZCIsIkRldGFpbExpbmtGaWVsZCIsIkRldGFpbFZpZGVvUHJldmlld0ZpZWxkIiwiRGV0YWlsRm9vdGVyRmllbGQiLCJEZXRhaWxJbWFnZUxpbmtGaWVsZCIsIkRldGFpbE1hcHBlckZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiZmllbGQiLCJ0eXBlIiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=