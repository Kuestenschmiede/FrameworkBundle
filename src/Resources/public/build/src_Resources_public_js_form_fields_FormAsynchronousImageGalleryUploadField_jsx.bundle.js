"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormAsynchronousImageGalleryUploadField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormAsynchronousImageGalleryUploadField.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormAsynchronousImageGalleryUploadField.jsx ***!
  \*****************************************************************************************/
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
var _FormAsynchronousCroppedFileUploadField = _interopRequireDefault(__webpack_require__(/*! ./FormAsynchronousCroppedFileUploadField.jsx */ "./src/Resources/public/js/form/fields/FormAsynchronousCroppedFileUploadField.jsx"));
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
var FormAsynchronousImageGalleryUploadField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormAsynchronousImageGalleryUploadField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormAsynchronousImageGalleryUploadField);
    _this = _callSuper(this, FormAsynchronousImageGalleryUploadField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormAsynchronousImageGalleryUploadField, _Component);
  return (0, _createClass2["default"])(FormAsynchronousImageGalleryUploadField, [{
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
        return /*#__PURE__*/_react["default"].createElement(_FormAsynchronousCroppedFileUploadField["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUFzeW5jaHJvbm91c0ltYWdlR2FsbGVyeVVwbG9hZEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsdUNBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBa0csU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElB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QUFDSSxLQUFLLEdBQUcsRUFBRTtRQUNoQkosS0FBSyxDQUFDRixJQUFJLEdBQUdFLEtBQUssQ0FBQ0YsSUFBSSxHQUFHLEdBQUcsR0FBR2tCLEtBQUs7UUFDckMsb0JBQU90RSxNQUFBLFlBQUEyRCxhQUFBLENBQUN4RCx1Q0FBQSxXQUFzQztVQUFDNEMsR0FBRyxFQUFFdUIsS0FBTTtVQUFDSCxJQUFJLEVBQUVWLE1BQUksQ0FBQ2pCLEtBQUssQ0FBQzJCLElBQUs7VUFBQ2IsS0FBSyxFQUFFQSxLQUFNO1VBQUNKLElBQUksRUFBRU8sTUFBSSxDQUFDakIsS0FBSyxDQUFDVSxJQUFLO1VBQUN3QixZQUFZLEVBQUVqQixNQUFJLENBQUNqQixLQUFLLENBQUNrQztRQUFhLENBQUMsQ0FBQztNQUNqSyxDQUFDLENBQUMsRUFDRFgsV0FDRSxDQUFDO0lBRVo7RUFBQztBQUFBLEVBNUNrRVksZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtQXN5bmNocm9ub3VzSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZCBmcm9tIFwiLi9Gb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZC5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUFzeW5jaHJvbm91c0ltYWdlR2FsbGVyeVVwbG9hZEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIHtbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9ICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9IHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9ICg8c3BhbiBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb25cIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zcGFuPik7XG4gICAgfVxuICAgIGNvbnN0IGFyckltYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5maWVsZC5tYXhJbWFnZXM7IGkrKykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyBcIl9cIiArIGldKSB7XG4gICAgICAgIGFyckltYWdlcy5wdXNoKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyBcIl9cIiArIGldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyckltYWdlcy5wdXNoKHt9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgKyBcIiBcIiA6IFwiXCIpICsgXCJjNGctZm9ybS1maWVsZFwifT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2FyckltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmZpZWxkKSk7XG4gICAgICAgICAgICBmaWVsZC5sYWJlbCA9IFwiXCI7XG4gICAgICAgICAgICBmaWVsZC5uYW1lID0gZmllbGQubmFtZSArIFwiX1wiICsgaW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gPEZvcm1Bc3luY2hyb25vdXNDcm9wcGVkRmlsZVVwbG9hZEZpZWxkIGtleT17aW5kZXh9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gZmllbGQ9e2ZpZWxkfSBmb3JtPXt0aGlzLnByb3BzLmZvcm19IGxhbmd1YWdlUmVmcz17dGhpcy5wcm9wcy5sYW5ndWFnZVJlZnN9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfRm9ybUFzeW5jaHJvbm91c0Nyb3BwZWRGaWxlVXBsb2FkRmllbGQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtQXN5bmNocm9ub3VzSW1hZ2VHYWxsZXJ5VXBsb2FkRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJldmVudCIsImZvcm0iLCJ1cGRhdGVGdW5jdGlvbiIsIm5hbWUiLCJfZGVmaW5lUHJvcGVydHkyIiwiZmllbGQiLCJ0YXJnZXQiLCJyZW5kZXIiLCJfdGhpczIiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiYXJySW1hZ2VzIiwibWF4SW1hZ2VzIiwiZGF0YSIsInB1c2giLCJtYXAiLCJpbmRleCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImxhbmd1YWdlUmVmcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=