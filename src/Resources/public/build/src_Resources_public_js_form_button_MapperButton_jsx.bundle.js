"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_MapperButton_jsx"],{

/***/ "./src/Resources/public/js/form/button/MapperButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/form/button/MapperButton.jsx ***!
  \**************************************************************/
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
var SubmitButton = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_button_SubmitButton_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./SubmitButton.jsx */ "./src/Resources/public/js/form/button/SubmitButton.jsx"));
});
var AsynchronousSubmitButton = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("src_Resources_public_js_form_button_AsynchronousSubmitButton_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AsynchronousSubmitButton.jsx */ "./src/Resources/public/js/form/button/AsynchronousSubmitButton.jsx"));
});
var CustomSubmitButton = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("src_Resources_public_js_form_button_CustomSubmitButton_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./CustomSubmitButton.jsx */ "./src/Resources/public/js/form/button/CustomSubmitButton.jsx"));
});
var SetDataButton = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_button_SetDataButton_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./SetDataButton.jsx */ "./src/Resources/public/js/form/button/SetDataButton.jsx"));
});
var FilterButton = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_button_FilterButton_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FilterButton.jsx */ "./src/Resources/public/js/form/button/FilterButton.jsx"));
});
var LinkButton = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("src_Resources_public_js_form_button_LinkButton_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./LinkButton.jsx */ "./src/Resources/public/js/form/button/LinkButton.jsx"));
});
var MapperButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function MapperButton(props) {
    (0, _classCallCheck2["default"])(this, MapperButton);
    return _callSuper(this, MapperButton, [props]);
  }
  (0, _inherits2["default"])(MapperButton, _Component);
  return (0, _createClass2["default"])(MapperButton, [{
    key: "render",
    value: function render() {
      switch (this.props.button.type) {
        case "submit":
          return /*#__PURE__*/_react["default"].createElement(SubmitButton, this.props);
        case "asynchronous-submit":
          return /*#__PURE__*/_react["default"].createElement(AsynchronousSubmitButton, this.props);
        case "setData":
          return /*#__PURE__*/_react["default"].createElement(SetDataButton, this.props);
        case "filter":
          return /*#__PURE__*/_react["default"].createElement(FilterButton, this.props);
        case "custom-submit":
          return /*#__PURE__*/_react["default"].createElement(CustomSubmitButton, this.props);
        case "link":
          return /*#__PURE__*/_react["default"].createElement(LinkButton, this.props);
        default:
          return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fTWFwcGVyQnV0dG9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFH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dUQsYUFBQSxDQUFDYixVQUFVLEVBQUssSUFBSSxDQUFDSSxLQUFPLENBQUM7UUFDdEM7VUFDRSxPQUFPLElBQUk7TUFDZjtJQUNGO0VBQUM7QUFBQSxFQXhCdUNVLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9idXR0b24vTWFwcGVyQnV0dG9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9TdWJtaXRCdXR0b24uanN4XCIpKTtcbmNvbnN0IEFzeW5jaHJvbm91c1N1Ym1pdEJ1dHRvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9Bc3luY2hyb25vdXNTdWJtaXRCdXR0b24uanN4XCIpKTtcbmNvbnN0IEN1c3RvbVN1Ym1pdEJ1dHRvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9DdXN0b21TdWJtaXRCdXR0b24uanN4XCIpKTtcbmNvbnN0IFNldERhdGFCdXR0b24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vU2V0RGF0YUJ1dHRvbi5qc3hcIikpO1xuY29uc3QgRmlsdGVyQnV0dG9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0ZpbHRlckJ1dHRvbi5qc3hcIikpO1xuY29uc3QgTGlua0J1dHRvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9MaW5rQnV0dG9uLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHBlckJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYnV0dG9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzdWJtaXRcIjpcbiAgICAgICAgcmV0dXJuIDxTdWJtaXRCdXR0b24gey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiYXN5bmNocm9ub3VzLXN1Ym1pdFwiOlxuICAgICAgICByZXR1cm4gPEFzeW5jaHJvbm91c1N1Ym1pdEJ1dHRvbiB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJzZXREYXRhXCI6XG4gICAgICAgIHJldHVybiA8U2V0RGF0YUJ1dHRvbiB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJmaWx0ZXJcIjpcbiAgICAgICAgcmV0dXJuIDxGaWx0ZXJCdXR0b24gey4uLnRoaXMucHJvcHN9Lz47XG4gICAgICBjYXNlIFwiY3VzdG9tLXN1Ym1pdFwiOlxuICAgICAgICByZXR1cm4gPEN1c3RvbVN1Ym1pdEJ1dHRvbiB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIHJldHVybiA8TGlua0J1dHRvbiB7Li4udGhpcy5wcm9wc30vPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiU3VibWl0QnV0dG9uIiwiUmVhY3QiLCJsYXp5IiwiQXN5bmNocm9ub3VzU3VibWl0QnV0dG9uIiwiQ3VzdG9tU3VibWl0QnV0dG9uIiwiU2V0RGF0YUJ1dHRvbiIsIkZpbHRlckJ1dHRvbiIsIkxpbmtCdXR0b24iLCJNYXBwZXJCdXR0b24iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJidXR0b24iLCJ0eXBlIiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=