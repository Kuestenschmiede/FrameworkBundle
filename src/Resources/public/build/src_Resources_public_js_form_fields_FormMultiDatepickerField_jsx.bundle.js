"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormMultiDatepickerField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormMultiDatepickerField.jsx":
/*!**************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormMultiDatepickerField.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ../../../css/custom-multi-date-picker.css */ "./src/Resources/public/css/custom-multi-date-picker.css");
var _reactMultiDatePicker = _interopRequireDefault(__webpack_require__(/*! react-multi-date-picker */ "./node_modules/react-multi-date-picker/build/index.js"));
var _time_picker = _interopRequireDefault(__webpack_require__(/*! react-multi-date-picker/plugins/time_picker */ "./node_modules/react-multi-date-picker/plugins/time_picker.js"));
var _date_panel = _interopRequireDefault(__webpack_require__(/*! react-multi-date-picker/plugins/date_panel */ "./node_modules/react-multi-date-picker/plugins/date_panel.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var FormMultiDatepickerField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormMultiDatepickerField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormMultiDatepickerField);
    _this = _callSuper(this, FormMultiDatepickerField, [props]);
    _this.pickerRef = null;
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormMultiDatepickerField, _Component);
  return (0, _createClass2["default"])(FormMultiDatepickerField, [{
    key: "handleChange",
    value: function handleChange(dateObjects) {
      var newValue = [];
      dateObjects.forEach(function (dateObject) {
        var date = dateObject.toDate();
        if (date !== null) {
          var value = Math.floor(date.getTime());
          newValue.push(value);
        }
      }, this);
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, newValue), this.props.field);
    }
  }, {
    key: "render",
    value: function render() {
      var dates = this.props.data[this.props.field.name];
      if ((0, _typeof2["default"])(dates) !== 'object' || typeof dates.forEach !== 'function') {
        dates = [];
      } else {
        dates.forEach(function (date, index) {
          date = parseInt(date, 10);
          if (isNaN(date)) {
            date = 0;
          }
          dates[index] = date;
        }, this);
      }
      return /*#__PURE__*/_react["default"].createElement(Condition, {
        data: this.props.data,
        conditions: this.props.field.conditions,
        field: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'multi-date-picker'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: '' + (this.props.errorText ? 'c4g-error' : '')
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: this.props.field.name
      }, this.props.field.label)), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-form-field form-group' + (this.props.field.className ? ' ' + this.props.field.className : '') + (this.props.errorText ? ' c4g-error' : '')
      }, /*#__PURE__*/_react["default"].createElement(_reactMultiDatePicker["default"], {
        multiple: true,
        value: this.props.data[this.props.field.name],
        onChange: this.handleChange,
        render: /*#__PURE__*/_react["default"].createElement(CustomInput, {
          id: this.props.field.name,
          error: !!this.props.errorText,
          required: this.props.field.required
        }),
        format: 'DD.MM.YYYY HH:mm:ss',
        plugins: [/*#__PURE__*/_react["default"].createElement(_time_picker["default"], {
          position: "bottom"
        }), /*#__PURE__*/_react["default"].createElement(_date_panel["default"], {
          markFocused: true
        })]
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.errorText ? 'c4g-error' : ''
      }, /*#__PURE__*/_react["default"].createElement("span", null, this.props.errorText ? this.props.errorText : this.props.field.description))));
    }
  }]);
}(_react.Component);
function CustomInput(_ref) {
  var openCalendar = _ref.openCalendar,
    value = _ref.value,
    handleValueChange = _ref.handleValueChange,
    id = _ref.id,
    error = _ref.error,
    required = _ref.required;
  return /*#__PURE__*/_react["default"].createElement("input", {
    id: id,
    required: required,
    onFocus: openCalendar,
    value: value,
    onChange: handleValueChange,
    type: "text",
    className: "form-control" + (error ? " c4g-error" : ""),
    autoComplete: "off",
    inputMode: "none"
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Resources/public/css/custom-multi-date-picker.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Resources/public/css/custom-multi-date-picker.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".multi-date-picker .rmdp-focused {\n    background-color: darkblue !important;\n}\n\n.multi-date-picker .rmdp-container {\n    display: block !important;\n}\n\n.multi-date-picker .c4g-error {\n    color: darkred;\n}", "",{"version":3,"sources":["webpack://./src/Resources/public/css/custom-multi-date-picker.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB","sourcesContent":[".multi-date-picker .rmdp-focused {\n    background-color: darkblue !important;\n}\n\n.multi-date-picker .rmdp-container {\n    display: block !important;\n}\n\n.multi-date-picker .c4g-error {\n    color: darkred;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Resources/public/css/custom-multi-date-picker.css":
/*!***************************************************************!*\
  !*** ./src/Resources/public/css/custom-multi-date-picker.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_multi_date_picker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./custom-multi-date-picker.css */ "./node_modules/css-loader/dist/cjs.js!./src/Resources/public/css/custom-multi-date-picker.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_custom_multi_date_picker_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_custom_multi_date_picker_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU11bHRpRGF0ZXBpY2tlckZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBQSxtQkFBQTtBQUNBLElBQUFDLHFCQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBRCxzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFJLFdBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBbUUsU0FBQUsseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFQLHdCQUFBTyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLFFBQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdB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NEVBQTRFLDRDQUE0QyxHQUFHLHdDQUF3QyxnQ0FBZ0MsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsT0FBTyx3SEFBd0gsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSw0REFBNEQsNENBQTRDLEdBQUcsd0NBQXdDLGdDQUFnQyxHQUFHLG1DQUFtQyxxQkFBcUIsR0FBRyxtQkFBbUI7QUFDOXJCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AyRDtBQUNsRyxZQUFtSDs7QUFFbkg7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMseUdBQU87Ozs7QUFJeEIsaUVBQWUseUdBQU8sYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1NdWx0aURhdGVwaWNrZXJGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvY3NzL2N1c3RvbS1tdWx0aS1kYXRlLXBpY2tlci5jc3MiLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvY3NzL2N1c3RvbS1tdWx0aS1kYXRlLXBpY2tlci5jc3M/NmFmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jc3MvY3VzdG9tLW11bHRpLWRhdGUtcGlja2VyLmNzc1wiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LW11bHRpLWRhdGUtcGlja2VyXCI7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tIFwicmVhY3QtbXVsdGktZGF0ZS1waWNrZXIvcGx1Z2lucy90aW1lX3BpY2tlclwiO1xuaW1wb3J0IERhdGVQYW5lbCBmcm9tIFwicmVhY3QtbXVsdGktZGF0ZS1waWNrZXIvcGx1Z2lucy9kYXRlX3BhbmVsXCI7XG5cbmNvbnN0IENvbmRpdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29uZGl0aW9uL0NvbmRpdGlvbi5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTXVsdGlEYXRlcGlja2VyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucGlja2VyUmVmID0gbnVsbDtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZGF0ZU9iamVjdHMpIHtcbiAgICBsZXQgbmV3VmFsdWUgPSBbXTtcbiAgICBkYXRlT2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRlT2JqZWN0KSB7XG4gICAgICBsZXQgZGF0ZSA9IGRhdGVPYmplY3QudG9EYXRlKCk7XG4gICAgICBpZiAoZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgbmV3VmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IG5ld1ZhbHVlfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRhdGVzID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgaWYgKHR5cGVvZiBkYXRlcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIGRhdGVzLmZvckVhY2ggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRhdGVzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVzLmZvckVhY2goZnVuY3Rpb24oZGF0ZSwgaW5kZXgpIHtcbiAgICAgICAgZGF0ZSA9IHBhcnNlSW50KGRhdGUsIDEwKTtcbiAgICAgICAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgICAgICAgZGF0ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGF0ZXNbaW5kZXhdID0gZGF0ZTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZGl0aW9uIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gY29uZGl0aW9ucz17dGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25zfSBmaWVsZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtdWx0aS1kYXRlLXBpY2tlcid9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnJyArICh0aGlzLnByb3BzLmVycm9yVGV4dCA/ICdjNGctZXJyb3InIDogJycpfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5maWVsZC5sYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjNGctZm9ybS1maWVsZCBmb3JtLWdyb3VwJyArICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSA/ICcgJyArIHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lIDogJycpICsgKHRoaXMucHJvcHMuZXJyb3JUZXh0ID8gJyBjNGctZXJyb3InIDogJycpfT5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVuZGVyPXs8Q3VzdG9tSW5wdXQgaWQ9e3RoaXMucHJvcHMuZmllbGQubmFtZX0gZXJyb3I9eyEhdGhpcy5wcm9wcy5lcnJvclRleHR9IHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfS8+fVxuICAgICAgICAgICAgICBmb3JtYXQ9eydERC5NTS5ZWVlZIEhIOm1tOnNzJ31cbiAgICAgICAgICAgICAgcGx1Z2lucz17W1xuICAgICAgICAgICAgICAgIDxUaW1lUGlja2VyIHBvc2l0aW9uPVwiYm90dG9tXCIgLz4sXG4gICAgICAgICAgICAgICAgPERhdGVQYW5lbCBtYXJrRm9jdXNlZCAvPlxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5lcnJvclRleHQgPyAnYzRnLWVycm9yJyA6ICcnfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvclRleHQgPyB0aGlzLnByb3BzLmVycm9yVGV4dCA6IHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db25kaXRpb24+XG4gICAgKTtcblxuICB9XG59XG5cbmZ1bmN0aW9uIEN1c3RvbUlucHV0KHtvcGVuQ2FsZW5kYXIsIHZhbHVlLCBoYW5kbGVWYWx1ZUNoYW5nZSwgaWQsIGVycm9yLCByZXF1aXJlZH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIGlkPXtpZH1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIG9uRm9jdXM9e29wZW5DYWxlbmRhcn1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVWYWx1ZUNoYW5nZX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIiArIChlcnJvciA/IFwiIGM0Zy1lcnJvclwiIDogXCJcIil9XG4gICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgaW5wdXRNb2RlPVwibm9uZVwiXG4gICAgLz5cbiAgKVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm11bHRpLWRhdGUtcGlja2VyIC5ybWRwLWZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXVsdGktZGF0ZS1waWNrZXIgLnJtZHAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLm11bHRpLWRhdGUtcGlja2VyIC5jNGctZXJyb3Ige1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvY3NzL2N1c3RvbS1tdWx0aS1kYXRlLXBpY2tlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tdWx0aS1kYXRlLXBpY2tlciAucm1kcC1mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWUgIWltcG9ydGFudDtcXG59XFxuXFxuLm11bHRpLWRhdGUtcGlja2VyIC5ybWRwLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdWx0aS1kYXRlLXBpY2tlciAuYzRnLWVycm9yIHtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2N1c3RvbS1tdWx0aS1kYXRlLXBpY2tlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0TXVsdGlEYXRlUGlja2VyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl90aW1lX3BpY2tlciIsIl9kYXRlX3BhbmVsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mMyIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ29uZGl0aW9uIiwiUmVhY3QiLCJsYXp5IiwiRm9ybU11bHRpRGF0ZXBpY2tlckZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInBpY2tlclJlZiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZGF0ZU9iamVjdHMiLCJuZXdWYWx1ZSIsImZvckVhY2giLCJkYXRlT2JqZWN0IiwiZGF0ZSIsInRvRGF0ZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJwdXNoIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwibmFtZSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJmaWVsZCIsInJlbmRlciIsImRhdGVzIiwiZGF0YSIsIl90eXBlb2YyIiwiaW5kZXgiLCJwYXJzZUludCIsImlzTmFOIiwiY3JlYXRlRWxlbWVudCIsImNvbmRpdGlvbnMiLCJjbGFzc05hbWUiLCJlcnJvclRleHQiLCJodG1sRm9yIiwibGFiZWwiLCJtdWx0aXBsZSIsIm9uQ2hhbmdlIiwiQ3VzdG9tSW5wdXQiLCJpZCIsImVycm9yIiwicmVxdWlyZWQiLCJmb3JtYXQiLCJwbHVnaW5zIiwicG9zaXRpb24iLCJtYXJrRm9jdXNlZCIsImRlc2NyaXB0aW9uIiwiQ29tcG9uZW50IiwiX3JlZiIsIm9wZW5DYWxlbmRhciIsImhhbmRsZVZhbHVlQ2hhbmdlIiwib25Gb2N1cyIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJpbnB1dE1vZGUiXSwic291cmNlUm9vdCI6IiJ9