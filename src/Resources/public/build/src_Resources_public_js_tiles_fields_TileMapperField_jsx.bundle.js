"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileMapperField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileMapperField.jsx":
/*!******************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileMapperField.jsx ***!
  \******************************************************************/
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
var TileTextField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileTextField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileTextField.jsx */ "./src/Resources/public/js/tiles/fields/TileTextField.jsx"));
});
var TileReferenceField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileReferenceField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileReferenceField.jsx */ "./src/Resources/public/js/tiles/fields/TileReferenceField.jsx"));
});
var TilePostalCityField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TilePostalCityField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TilePostalCityField.jsx */ "./src/Resources/public/js/tiles/fields/TilePostalCityField.jsx"));
});
var TileStreetField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileStreetField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileStreetField.jsx */ "./src/Resources/public/js/tiles/fields/TileStreetField.jsx"));
});
var TileHeadlineField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileHeadlineField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileHeadlineField.jsx */ "./src/Resources/public/js/tiles/fields/TileHeadlineField.jsx"));
});
var TileAddressField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileAddressField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileAddressField.jsx */ "./src/Resources/public/js/tiles/fields/TileAddressField.jsx"));
});
var TilePhoneField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TilePhoneField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TilePhoneField.jsx */ "./src/Resources/public/js/tiles/fields/TilePhoneField.jsx"));
});
var TileEmailField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileEmailField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileEmailField.jsx */ "./src/Resources/public/js/tiles/fields/TileEmailField.jsx"));
});
var TileHTMLField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileHTMLField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileHTMLField.jsx */ "./src/Resources/public/js/tiles/fields/TileHTMLField.jsx"));
});
var TileIconField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileIconField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileIconField.jsx */ "./src/Resources/public/js/tiles/fields/TileIconField.jsx"));
});
var TileImageField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileImageField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileImageField.jsx */ "./src/Resources/public/js/tiles/fields/TileImageField.jsx"));
});
var TileLinkField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileLinkField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileLinkField.jsx */ "./src/Resources/public/js/tiles/fields/TileLinkField.jsx"));
});
var TileLinkButtonField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileLinkButtonField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileLinkButtonField.jsx */ "./src/Resources/public/js/tiles/fields/TileLinkButtonField.jsx"));
});
var TileModalButtonField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileModalButtonField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileModalButtonField.jsx */ "./src/Resources/public/js/tiles/fields/TileModalButtonField.jsx"));
});
var TileDateField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileDateField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileDateField.jsx */ "./src/Resources/public/js/tiles/fields/TileDateField.jsx"));
});
var TileDistanceField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileDistanceField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileDistanceField.jsx */ "./src/Resources/public/js/tiles/fields/TileDistanceField.jsx"));
});
var TileTagField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileTagField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileTagField.jsx */ "./src/Resources/public/js/tiles/fields/TileTagField.jsx"));
});
var TileWrapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileWrapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileWrapperField.jsx */ "./src/Resources/public/js/tiles/fields/TileWrapperField.jsx"));
});
var TileOSMOpeningHoursField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_opening_hours_build_opening_hours_js"), __webpack_require__.e("src_Resources_public_js_tiles_fields_TileOSMOpeningHoursField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./TileOSMOpeningHoursField.jsx */ "./src/Resources/public/js/tiles/fields/TileOSMOpeningHoursField.jsx"));
});
var TileMapperField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileMapperField(props) {
    (0, _classCallCheck2["default"])(this, TileMapperField);
    return _callSuper(this, TileMapperField, [props]);
  }
  (0, _inherits2["default"])(TileMapperField, _Component);
  return (0, _createClass2["default"])(TileMapperField, [{
    key: "render",
    value: function render() {
      switch (this.props.field.type) {
        case "address":
          return /*#__PURE__*/_react["default"].createElement(TileAddressField, this.props);
        case "text":
          return /*#__PURE__*/_react["default"].createElement(TileTextField, this.props);
        case "reference":
          return /*#__PURE__*/_react["default"].createElement(TileReferenceField, this.props);
        case "postalCity":
          return /*#__PURE__*/_react["default"].createElement(TilePostalCityField, this.props);
        case "street":
          return /*#__PURE__*/_react["default"].createElement(TileStreetField, this.props);
        case "phone":
          return /*#__PURE__*/_react["default"].createElement(TilePhoneField, this.props);
        case "email":
          return /*#__PURE__*/_react["default"].createElement(TileEmailField, this.props);
        case "html":
          return /*#__PURE__*/_react["default"].createElement(TileHTMLField, this.props);
        case "icon":
          return /*#__PURE__*/_react["default"].createElement(TileIconField, this.props);
        case "image":
          return /*#__PURE__*/_react["default"].createElement(TileImageField, this.props);
        case "link":
          return /*#__PURE__*/_react["default"].createElement(TileLinkField, this.props);
        case "linkbutton":
          return /*#__PURE__*/_react["default"].createElement(TileLinkButtonField, this.props);
        case "modal-button":
          return /*#__PURE__*/_react["default"].createElement(TileModalButtonField, this.props);
        case "date":
          return /*#__PURE__*/_react["default"].createElement(TileDateField, this.props);
        case "distance":
          return /*#__PURE__*/_react["default"].createElement(TileDistanceField, this.props);
        case "headline":
          return /*#__PURE__*/_react["default"].createElement(TileHeadlineField, this.props);
        case "tag":
          return /*#__PURE__*/_react["default"].createElement(TileTagField, this.props);
        case "wrapper":
          return /*#__PURE__*/_react["default"].createElement(TileWrapperField, this.props);
        case "osm-opening-hours":
          return /*#__PURE__*/_react["default"].createElement(TileOSMOpeningHoursField, this.props);
        default:
          return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVNYXBwZXJGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxF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SyxVQUFVO1VBQ2Isb0JBQU8zRCxNQUFBLFlBQUFvRSxhQUFBLENBQUMzQixpQkFBaUIsRUFBSSxJQUFJLENBQUNrQixLQUFPLENBQUM7UUFDNUMsS0FBSyxLQUFLO1VBQ1Isb0JBQU8zRCxNQUFBLFlBQUFvRSxhQUFBLENBQUNmLFlBQVksRUFBSyxJQUFJLENBQUNNLEtBQU8sQ0FBQztRQUN4QyxLQUFLLFNBQVM7VUFDWixvQkFBTzNELE1BQUEsWUFBQW9FLGFBQUEsQ0FBQ2QsZ0JBQWdCLEVBQUssSUFBSSxDQUFDSyxLQUFPLENBQUM7UUFDNUMsS0FBSyxtQkFBbUI7VUFDdEIsb0JBQU8zRCxNQUFBLFlBQUFvRSxhQUFBLENBQUNiLHdCQUF3QixFQUFLLElBQUksQ0FBQ0ksS0FBTyxDQUFDO1FBQ3BEO1VBQ0UsT0FBTyxJQUFJO01BQ2Y7SUFDRjtFQUFDO0FBQUEsRUFsRDBDVSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RpbGVzL2ZpZWxkcy9UaWxlTWFwcGVyRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVGlsZVRleHRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlVGV4dEZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlUmVmZXJlbmNlRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZVJlZmVyZW5jZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlUG9zdGFsQ2l0eUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVQb3N0YWxDaXR5RmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVTdHJlZXRGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlU3RyZWV0RmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVIZWFkbGluZUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVIZWFkbGluZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlQWRkcmVzc0ZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVBZGRyZXNzRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVQaG9uZUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVQaG9uZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlRW1haWxGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlRW1haWxGaWVsZC5qc3hcIikpO1xuY29uc3QgVGlsZUhUTUxGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlSFRNTEZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlSWNvbkZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVJY29uRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVJbWFnZUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVJbWFnZUZpZWxkLmpzeFwiKSk7XG5jb25zdCBUaWxlTGlua0ZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVMaW5rRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVMaW5rQnV0dG9uRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZUxpbmtCdXR0b25GaWVsZC5qc3hcIikpO1xuY29uc3QgVGlsZU1vZGFsQnV0dG9uRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZU1vZGFsQnV0dG9uRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVEYXRlRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZURhdGVGaWVsZC5qc3hcIikpO1xuY29uc3QgVGlsZURpc3RhbmNlRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZURpc3RhbmNlRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVUYWdGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlVGFnRmllbGQuanN4XCIpKTtcbmNvbnN0IFRpbGVXcmFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZVdyYXBwZXJGaWVsZC5qc3hcIikpO1xuY29uc3QgVGlsZU9TTU9wZW5pbmdIb3Vyc0ZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL1RpbGVPU01PcGVuaW5nSG91cnNGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlTWFwcGVyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XG4gICAgICAgIHJldHVybiA8VGlsZUFkZHJlc3NGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgIHJldHVybiA8VGlsZVRleHRGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJyZWZlcmVuY2VcIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlUmVmZXJlbmNlRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwicG9zdGFsQ2l0eVwiOlxuICAgICAgICByZXR1cm4gPFRpbGVQb3N0YWxDaXR5RmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwic3RyZWV0XCI6XG4gICAgICAgIHJldHVybiA8VGlsZVN0cmVldEZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInBob25lXCI6XG4gICAgICAgIHJldHVybiA8VGlsZVBob25lRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlRW1haWxGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgIHJldHVybiA8VGlsZUhUTUxGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJpY29uXCI6XG4gICAgICAgIHJldHVybiA8VGlsZUljb25GaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJpbWFnZVwiOlxuICAgICAgICByZXR1cm4gPFRpbGVJbWFnZUZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlTGlua0ZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImxpbmtidXR0b25cIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlTGlua0J1dHRvbkZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcIm1vZGFsLWJ1dHRvblwiOlxuICAgICAgICByZXR1cm4gPFRpbGVNb2RhbEJ1dHRvbkZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlRGF0ZUZpZWxkIHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcImRpc3RhbmNlXCI6XG4gICAgICAgIHJldHVybiA8VGlsZURpc3RhbmNlRmllbGQgey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiaGVhZGxpbmVcIjpcbiAgICAgICAgcmV0dXJuIDxUaWxlSGVhZGxpbmVGaWVsZHsuLi50aGlzLnByb3BzfS8+O1xuICAgICAgY2FzZSBcInRhZ1wiOlxuICAgICAgICByZXR1cm4gPFRpbGVUYWdGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJ3cmFwcGVyXCI6XG4gICAgICAgIHJldHVybiA8VGlsZVdyYXBwZXJGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJvc20tb3BlbmluZy1ob3Vyc1wiOlxuICAgICAgICByZXR1cm4gPFRpbGVPU01PcGVuaW5nSG91cnNGaWVsZCB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGlsZVRleHRGaWVsZCIsIlJlYWN0IiwibGF6eSIsIlRpbGVSZWZlcmVuY2VGaWVsZCIsIlRpbGVQb3N0YWxDaXR5RmllbGQiLCJUaWxlU3RyZWV0RmllbGQiLCJUaWxlSGVhZGxpbmVGaWVsZCIsIlRpbGVBZGRyZXNzRmllbGQiLCJUaWxlUGhvbmVGaWVsZCIsIlRpbGVFbWFpbEZpZWxkIiwiVGlsZUhUTUxGaWVsZCIsIlRpbGVJY29uRmllbGQiLCJUaWxlSW1hZ2VGaWVsZCIsIlRpbGVMaW5rRmllbGQiLCJUaWxlTGlua0J1dHRvbkZpZWxkIiwiVGlsZU1vZGFsQnV0dG9uRmllbGQiLCJUaWxlRGF0ZUZpZWxkIiwiVGlsZURpc3RhbmNlRmllbGQiLCJUaWxlVGFnRmllbGQiLCJUaWxlV3JhcHBlckZpZWxkIiwiVGlsZU9TTU9wZW5pbmdIb3Vyc0ZpZWxkIiwiVGlsZU1hcHBlckZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiZmllbGQiLCJ0eXBlIiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=