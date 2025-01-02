"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailHTMLField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailHTMLField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailHTMLField.jsx ***!
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
var DetailHTMLField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailHTMLField(props) {
    (0, _classCallCheck2["default"])(this, DetailHTMLField);
    return _callSuper(this, DetailHTMLField, [props]);
  }
  (0, _inherits2["default"])(DetailHTMLField, _Component);
  return (0, _createClass2["default"])(DetailHTMLField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var icon = null;
        if (this.props.field.iconClass) {
          icon = /*#__PURE__*/_react["default"].createElement("i", {
            className: this.props.field.iconClass
          });
        }
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label);
        }
        var itemProp = null;
        if (this.props.field.itemProp) {
          itemProp = this.props.field.itemProp;
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "item " + this.props.field.name + (this.props.field["class"] ? ' ' + this.props.field["class"] : '')
        }, icon, label, /*#__PURE__*/_react["default"].createElement("span", {
          className: "entry-content",
          itemProp: itemProp,
          dangerouslySetInnerHTML: {
            __html: this.props.data[this.props.field.name]
          }
        }));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxIVE1MRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEs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LElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJO1VBQUM7UUFBRSxDQUN0SCxDQUNMLENBQUM7TUFFVjtNQUNBLE9BQVEsRUFBRTtJQUVaO0VBQUM7QUFBQSxFQTlCMENTLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxIVE1MRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsSFRNTEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSB7XG4gICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5pY29uQ2xhc3MpIHtcbiAgICAgICAgaWNvbiA9IDxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5pY29uQ2xhc3N9PjwvaT47XG4gICAgICB9XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e1wiZW50cnktbGFiZWxcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9zcGFuPjtcbiAgICAgIH1cbiAgICAgIGxldCBpdGVtUHJvcCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5pdGVtUHJvcCkge1xuICAgICAgICBpdGVtUHJvcCA9IHRoaXMucHJvcHMuZmllbGQuaXRlbVByb3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpdGVtIFwiICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgKHRoaXMucHJvcHMuZmllbGQuY2xhc3MgPyAnICcgKyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogJycpfT5cbiAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW50cnktY29udGVudFwiIGl0ZW1Qcm9wPXtpdGVtUHJvcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfX0+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICgnJylcblxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxIVE1MRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJkYXRhIiwiZmllbGQiLCJuYW1lIiwiaWNvbiIsImljb25DbGFzcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJsYWJlbCIsIml0ZW1Qcm9wIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9