"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailTextField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailTextField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailTextField.jsx ***!
  \*******************************************************************/
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
var DetailTextField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailTextField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DetailTextField);
    _this = _callSuper(this, DetailTextField, [props]);
    _this.format = _this.format.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(DetailTextField, _Component);
  return (0, _createClass2["default"])(DetailTextField, [{
    key: "format",
    value: function format(value) {
      return this.props.field.format.replace(/%s/g, value);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("div", {
            className: 'detail-field-text__label'
          }, this.props.field.label);
        }
        var value = this.props.data[this.props.field.name];
        if (typeof this.props.field.format === 'string' && this.props.field.format !== '') {
          value = this.format(value);
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-field-text" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
        }, label, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'detail-field-text__text'
        }, value));
      } else {
        return '';
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxUZXh0RmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEs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S0FBSyxTQUFNLEdBQUcsRUFBRTtRQUFFLEdBQ2hHSyxLQUFLLGVBQ05wRCxNQUFBLFlBQUFxRCxhQUFBO1VBQU1DLFNBQVMsRUFBRTtRQUEwQixHQUFFUixLQUFZLENBQ3RELENBQUM7TUFFWixDQUFDLE1BQU07UUFDTCxPQUFRLEVBQUU7TUFDWjtJQUNGO0VBQUM7QUFBQSxFQTlCMENTLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxUZXh0RmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsVGV4dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZm9ybWF0LmJpbmQodGhpcyk7XG4gIH1cblxuICBmb3JtYXQodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5maWVsZC5mb3JtYXQucmVwbGFjZSgvJXMvZywgdmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gPGRpdiBjbGFzc05hbWU9eydkZXRhaWwtZmllbGQtdGV4dF9fbGFiZWwnfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2Rpdj47XG4gICAgICB9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5maWVsZC5mb3JtYXQgPT09ICdzdHJpbmcnICYmIHRoaXMucHJvcHMuZmllbGQuZm9ybWF0ICE9PSAnJykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLXRleHRcIiArICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzID8gXCIgXCIgKyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogXCJcIil9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZGV0YWlsLWZpZWxkLXRleHRfX3RleHQnfT57dmFsdWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgnJyk7XG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxUZXh0RmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZm9ybWF0IiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJmaWVsZCIsInJlcGxhY2UiLCJyZW5kZXIiLCJkYXRhIiwibmFtZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=