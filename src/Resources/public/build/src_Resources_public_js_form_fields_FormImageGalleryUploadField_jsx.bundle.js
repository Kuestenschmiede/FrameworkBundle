"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormImageGalleryUploadField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormImageGalleryUploadField.jsx":
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormImageGalleryUploadField.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
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
var FormCroppedFileUploadField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-926fd9"), __webpack_require__.e("vendors-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("vendors-node_modules_blueimp-load-image_js_index_js-node_modules_react-image-crop_dist_ReactC-8661c8"), __webpack_require__.e("src_Resources_public_js_form_fields_FormCroppedFileUploadField_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FormCroppedFileUploadField.jsx */ "./src/Resources/public/js/form/fields/FormCroppedFileUploadField.jsx"));
});
var FormImageGalleryUploadField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormImageGalleryUploadField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormImageGalleryUploadField);
    _this = _callSuper(this, FormImageGalleryUploadField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormImageGalleryUploadField, _Component);
  return (0, _createClass2["default"])(FormImageGalleryUploadField, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value), this.props.field);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          required: this.props.field.required
        }, this.props.field.label));
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "field-description"
        }, this.props.field.description);
      }
      var arrImages = [];
      for (var i = 0; i < this.props.field.maxImages; i++) {
        if (this.props.data[this.props.field.name + "_" + i]) {
          arrImages.push(this.props.data[this.props.field.name + "_" + i]);
        } else {
          arrImages.push({});
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"
      }, label, arrImages.map(function (value, index) {
        var field = JSON.parse(JSON.stringify(_this2.props.field));
        field.label = "";
        field.name = field.name + "_" + index;
        return /*#__PURE__*/_react["default"].createElement(FormCroppedFileUploadField, {
          key: index,
          data: _this2.props.data,
          field: field,
          form: _this2.props.form,
          languageRefs: _this2.props.languageRefs
        });
      }), description);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUltYWdlR2FsbGVyeVVwbG9hZEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBVnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU00QiwwQkFBMEIsZ0JBQUdDLGlCQUFLLENBQUNDLElBQUksQ0FBQztFQUFBLE9BQU0sOG1CQUEwQztBQUFBLEVBQUM7QUFBQyxJQUUzRUMsMkJBQTJCLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBQzlDLFNBQUFGLDRCQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFMLDJCQUFBO0lBQ2pCSSxLQUFBLEdBQUFuQixVQUFBLE9BQUFlLDJCQUFBLEdBQU1HLEtBQUs7SUFFWEMsS0FBQSxDQUFLRSxZQUFZLEdBQUdGLEtBQUEsQ0FBS0UsWUFBWSxDQUFDQyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDbkQ7RUFBQyxJQUFBSSxVQUFBLGFBQUFSLDJCQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBTyxhQUFBLGFBQUFULDJCQUFBO0lBQUFVLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLFlBQVlBLENBQUNNLEtBQUssRUFBRTtNQUNsQixJQUFJLENBQUNULEtBQUssQ0FBQ1UsSUFBSSxDQUFDVixLQUFLLENBQUNXLGNBQWMsQ0FBQyxJQUFJLENBQUNYLEtBQUssQ0FBQ1UsSUFBSSxDQUFDVixLQUFLLENBQUNZLElBQUksTUFBQUMsZ0JBQUEsaUJBQUksSUFBSSxDQUFDYixLQUFLLENBQUNjLEtBQUssQ0FBQ0YsSUFBSSxFQUFHSCxLQUFLLENBQUNNLE1BQU0sQ0FBQ1AsS0FBSyxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDYyxLQUFLLENBQUM7SUFDbkk7RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUSxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BRVAsSUFBSUMsS0FBSyxHQUFHLElBQUk7TUFDaEIsSUFBSSxJQUFJLENBQUNsQixLQUFLLENBQUNjLEtBQUssQ0FBQ0ksS0FBSyxFQUFFO1FBQzFCQSxLQUFLLGdCQUFJM0QsTUFBQSxZQUFBNEQsYUFBQSxDQUFDNUQsTUFBQSxXQUFLLENBQUM2RCxRQUFRLHFCQUN0QjdELE1BQUEsWUFBQTRELGFBQUE7VUFBT0UsT0FBTyxFQUFFLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDRixJQUFLO1VBQUNVLFFBQVEsRUFBRSxJQUFJLENBQUN0QixLQUFLLENBQUNjLEtBQUssQ0FBQ1E7UUFBUyxHQUFFLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDSSxLQUFhLENBQzdGLENBQUU7TUFDcEI7TUFDQSxJQUFJSyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDSSxLQUFLLEVBQUU7UUFDMUJLLFdBQVcsZ0JBQUloRSxNQUFBLFlBQUE0RCxhQUFBO1VBQU1LLFNBQVMsRUFBRTtRQUFvQixHQUFFLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDUyxXQUFrQixDQUFFO01BQzdGO01BQ0EsSUFBTUUsU0FBUyxHQUFHLEVBQUU7TUFDcEIsS0FBSyxJQUFJN0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ29CLEtBQUssQ0FBQ2MsS0FBSyxDQUFDWSxTQUFTLEVBQUU5QyxDQUFDLEVBQUUsRUFBRTtRQUNuRCxJQUFJLElBQUksQ0FBQ29CLEtBQUssQ0FBQzJCLElBQUksQ0FBQyxJQUFJLENBQUMzQixLQUFLLENBQUNjLEtBQUssQ0FBQ0YsSUFBSSxHQUFHLEdBQUcsR0FBR2hDLENBQUMsQ0FBQyxFQUFFO1VBQ3BENkMsU0FBUyxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDNUIsS0FBSyxDQUFDMkIsSUFBSSxDQUFDLElBQUksQ0FBQzNCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDRixJQUFJLEdBQUcsR0FBRyxHQUFHaEMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxNQUFNO1VBQ0w2QyxTQUFTLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQjtNQUNGO01BQ0Esb0JBQ0lyRSxNQUFBLFlBQUE0RCxhQUFBO1FBQUtLLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDVSxTQUFTLEdBQUcsSUFBSSxDQUFDeEIsS0FBSyxDQUFDYyxLQUFLLENBQUNVLFNBQVMsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJO01BQWlCLEdBQ3JHTixLQUFLLEVBQ0xPLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUNyQixLQUFLLEVBQUVzQixLQUFLLEVBQUs7UUFDL0IsSUFBSWhCLEtBQUssR0FBR2lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2hCLE1BQUksQ0FBQ2pCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDLENBQUM7UUFDeERBLEtBQUssQ0FBQ0ksS0FBSyxHQUFHLEVBQUU7UUFDaEJKLEtBQUssQ0FBQ0YsSUFBSSxHQUFHRSxLQUFLLENBQUNGLElBQUksR0FBRyxHQUFHLEdBQUdrQixLQUFLO1FBQ3JDLG9CQUFPdkUsTUFBQSxZQUFBNEQsYUFBQSxDQUFDekIsMEJBQTBCO1VBQUNhLEdBQUcsRUFBRXVCLEtBQU07VUFBQ0gsSUFBSSxFQUFFVixNQUFJLENBQUNqQixLQUFLLENBQUMyQixJQUFLO1VBQUNiLEtBQUssRUFBRUEsS0FBTTtVQUFDSixJQUFJLEVBQUVPLE1BQUksQ0FBQ2pCLEtBQUssQ0FBQ1UsSUFBSztVQUFDd0IsWUFBWSxFQUFFakIsTUFBSSxDQUFDakIsS0FBSyxDQUFDa0M7UUFBYSxDQUFDLENBQUM7TUFDckosQ0FBQyxDQUFDLEVBQ0RYLFdBQ0UsQ0FBQztJQUVaO0VBQUM7QUFBQSxFQTNDc0RZLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybUltYWdlR2FsbGVyeVVwbG9hZEZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0Zvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbWFnZUdhbGxlcnlVcGxvYWRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0sIHRoaXMucHJvcHMuZmllbGQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lfSByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNwYW4gY2xhc3NOYW1lPXtcImZpZWxkLWRlc2NyaXB0aW9uXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9ufTwvc3Bhbj4pO1xuICAgIH1cbiAgICBjb25zdCBhcnJJbWFnZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuZmllbGQubWF4SW1hZ2VzOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgXCJfXCIgKyBpXSkge1xuICAgICAgICBhcnJJbWFnZXMucHVzaCh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgXCJfXCIgKyBpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJJbWFnZXMucHVzaCh7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArIFwiIFwiIDogXCJcIikgKyBcImM0Zy1mb3JtLWZpZWxkXCJ9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7YXJySW1hZ2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmllbGQpKTtcbiAgICAgICAgICAgIGZpZWxkLmxhYmVsID0gXCJcIjtcbiAgICAgICAgICAgIGZpZWxkLm5hbWUgPSBmaWVsZC5uYW1lICsgXCJfXCIgKyBpbmRleDtcbiAgICAgICAgICAgIHJldHVybiA8Rm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGQga2V5PXtpbmRleH0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBmaWVsZD17ZmllbGR9IGZvcm09e3RoaXMucHJvcHMuZm9ybX0gbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc30vPlxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGQiLCJSZWFjdCIsImxhenkiLCJGb3JtSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJldmVudCIsImZvcm0iLCJ1cGRhdGVGdW5jdGlvbiIsIm5hbWUiLCJfZGVmaW5lUHJvcGVydHkyIiwiZmllbGQiLCJ0YXJnZXQiLCJyZW5kZXIiLCJfdGhpczIiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiYXJySW1hZ2VzIiwibWF4SW1hZ2VzIiwiZGF0YSIsInB1c2giLCJtYXAiLCJpbmRleCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImxhbmd1YWdlUmVmcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=