"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormNumberRangeField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormNumberRangeField.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormNumberRangeField.jsx ***!
  \**********************************************************************/
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
var FormNumberRangeField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormNumberRangeField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormNumberRangeField);
    _this = _callSuper(this, FormNumberRangeField, [props]);
    _this.state = {
      value: _this.props.data[_this.props.field.name] || _this.props.field.value
    };
    _this.onChange = _this.onChange.bind(_this);
    FormNumberRangeField.instances = (FormNumberRangeField.instances || 0) + 1;
    return _this;
  }
  (0, _inherits2["default"])(FormNumberRangeField, _Component);
  return (0, _createClass2["default"])(FormNumberRangeField, [{
    key: "onChange",
    value: function onChange(event) {
      var value = event.target.value;
      this.setState({
        value: value
      });
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, value), this.props.field);
    }
  }, {
    key: "format",
    value: function format(value) {
      if (this.props.field.format) {
        return this.props.field.format.replace(/%s/g, value);
      } else {
        return value;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var id = 'c4g-range-' + this.props.field.name + '-' + FormNumberRangeField.instances;
      var left = parseFloat(this.props.field.styleLeft);
      left = (100.00 - 2 * left) / (this.props.field.max - this.props.field.min) * (this.state.value - this.props.field.min) + left;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field c4g-range-field"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: this.props.field.required ? 'c4g-required' : '',
        htmlFor: id
      }, this.props.field.label), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-range-field-inner'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-range-field-value-wrapper',
        style: {
          left: String(left) + '%'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-range-field-value'
      }, this.format(this.state.value))), /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-range-field-min'
      }, this.format(this.props.field.min)), /*#__PURE__*/_react["default"].createElement("input", {
        id: id,
        type: 'range',
        min: this.props.field.min,
        max: this.props.field.max,
        step: this.props.field.step,
        value: this.state.value,
        onChange: this.onChange,
        className: 'c4g-form-control c4g-form-input',
        name: this.props.field.name
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-range-field-max'
      }, this.format(this.props.field.max))));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU51bWJlclJhbmdlRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxD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dXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1OdW1iZXJSYW5nZUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1OdW1iZXJSYW5nZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdIHx8IHRoaXMucHJvcHMuZmllbGQudmFsdWVcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgIEZvcm1OdW1iZXJSYW5nZUZpZWxkLmluc3RhbmNlcyA9IChGb3JtTnVtYmVyUmFuZ2VGaWVsZC5pbnN0YW5jZXMgfHwgMCkgKyAxO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSk7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IHZhbHVlfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gIH1cblxuICBmb3JtYXQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5mb3JtYXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZpZWxkLmZvcm1hdC5yZXBsYWNlKC8lcy9nLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlkID0gJ2M0Zy1yYW5nZS0nICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJy0nICsgRm9ybU51bWJlclJhbmdlRmllbGQuaW5zdGFuY2VzO1xuICAgIGxldCBsZWZ0ID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmZpZWxkLnN0eWxlTGVmdCk7XG4gICAgbGVmdCA9ICgxMDAuMDAgLSAoMiAqIGxlZnQpKSAvICh0aGlzLnByb3BzLmZpZWxkLm1heCAtIHRoaXMucHJvcHMuZmllbGQubWluKSAqICh0aGlzLnN0YXRlLnZhbHVlIC0gdGhpcy5wcm9wcy5maWVsZC5taW4pICsgbGVmdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgKyBcIiBcIiA6IFwiXCIpICsgXCJjNGctZm9ybS1maWVsZCBjNGctcmFuZ2UtZmllbGRcIn0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWQgPyAnYzRnLXJlcXVpcmVkJyA6ICcnfVxuICAgICAgICAgICAgICAgaHRtbEZvcj17aWR9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYzRnLXJhbmdlLWZpZWxkLWlubmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjNGctcmFuZ2UtZmllbGQtdmFsdWUtd3JhcHBlcid9XG4gICAgICAgICAgICAgICBzdHlsZT17e2xlZnQ6IFN0cmluZyhsZWZ0KSArICclJ319PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLXJhbmdlLWZpZWxkLXZhbHVlJ30+XG4gICAgICAgICAgICAgIHt0aGlzLmZvcm1hdCh0aGlzLnN0YXRlLnZhbHVlKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydjNGctcmFuZ2UtZmllbGQtbWluJ30+e3RoaXMuZm9ybWF0KHRoaXMucHJvcHMuZmllbGQubWluKX08L3NwYW4+XG4gICAgICAgICAgPGlucHV0IGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgdHlwZT17J3JhbmdlJ31cbiAgICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLmZpZWxkLm1pbn1cbiAgICAgICAgICAgICAgICAgbWF4PXt0aGlzLnByb3BzLmZpZWxkLm1heH1cbiAgICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5maWVsZC5zdGVwfVxuICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2M0Zy1mb3JtLWNvbnRyb2wgYzRnLWZvcm0taW5wdXQnfVxuICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9Lz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydjNGctcmFuZ2UtZmllbGQtbWF4J30+e3RoaXMuZm9ybWF0KHRoaXMucHJvcHMuZmllbGQubWF4KX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1OdW1iZXJSYW5nZUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInN0YXRlIiwidmFsdWUiLCJkYXRhIiwiZmllbGQiLCJuYW1lIiwib25DaGFuZ2UiLCJiaW5kIiwiaW5zdGFuY2VzIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJldmVudCIsInRhcmdldCIsInNldFN0YXRlIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwiX2RlZmluZVByb3BlcnR5MiIsImZvcm1hdCIsInJlcGxhY2UiLCJyZW5kZXIiLCJpZCIsImxlZnQiLCJwYXJzZUZsb2F0Iiwic3R5bGVMZWZ0IiwibWF4IiwibWluIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJlcXVpcmVkIiwiaHRtbEZvciIsImxhYmVsIiwic3R5bGUiLCJTdHJpbmciLCJ0eXBlIiwic3RlcCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=