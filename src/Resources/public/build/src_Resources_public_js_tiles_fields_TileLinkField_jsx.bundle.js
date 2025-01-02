"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileLinkField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileLinkField.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileLinkField.jsx ***!
  \****************************************************************/
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
var TileLinkField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileLinkField(props) {
    (0, _classCallCheck2["default"])(this, TileLinkField);
    return _callSuper(this, TileLinkField, [props]);
  }
  (0, _inherits2["default"])(TileLinkField, _Component);
  return (0, _createClass2["default"])(TileLinkField, [{
    key: "render",
    value: function render() {
      if (this.props.field.href || this.props.data[this.props.field.hrefName]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label);
        }
        var href = this.props.field.href;
        if (this.props.field.hrefName && this.props.data[this.props.field.hrefName]) {
          href = href.replace(this.props.field.hrefName, this.props.data[this.props.field.hrefName]);
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, /*#__PURE__*/_react["default"].createElement("a", {
          className: this.props.field["class"],
          href: href,
          rel: "noreferrer noopener",
          target: this.props.field.newTab ? '_blank' : null
        }, this.props.data[this.props.field.linkTextName] || this.props.field.linkText || href));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVMaW5rRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFB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QUFNLEdBQUcsUUFBUSxHQUFHO1FBQUssR0FDbEQsSUFBSSxDQUFDbEIsS0FBSyxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDVCxLQUFLLENBQUNPLEtBQUssQ0FBQ1ksWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDbkIsS0FBSyxDQUFDTyxLQUFLLENBQUNhLFFBQVEsSUFBSVosSUFDL0UsQ0FDQSxDQUFDO01BRVo7TUFDQSxPQUFRLEVBQUU7SUFDWjtFQUFDO0FBQUEsRUE3QndDYSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RpbGVzL2ZpZWxkcy9UaWxlTGlua0ZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVMaW5rRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmhyZWYgfHwgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuaHJlZk5hbWVdKSB7XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e1wiZW50cnktbGFiZWxcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9zcGFuPjtcbiAgICAgIH1cbiAgICAgIGxldCBocmVmID0gdGhpcy5wcm9wcy5maWVsZC5ocmVmO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaHJlZk5hbWUgJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuaHJlZk5hbWVdKSB7XG4gICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UodGhpcy5wcm9wcy5maWVsZC5ocmVmTmFtZSwgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuaHJlZk5hbWVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQud3JhcHBlckNsYXNzfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc31cbiAgICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICAgICByZWw9e1wibm9yZWZlcnJlciBub29wZW5lclwifVxuICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLnByb3BzLmZpZWxkLm5ld1RhYiA/ICdfYmxhbmsnIDogbnVsbH0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5saW5rVGV4dE5hbWVdIHx8IHRoaXMucHJvcHMuZmllbGQubGlua1RleHQgfHwgaHJlZn1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoJycpO1xuICB9XG5cbn1cblxuIl0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGlsZUxpbmtGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImZpZWxkIiwiaHJlZiIsImRhdGEiLCJocmVmTmFtZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJ3cmFwcGVyQ2xhc3MiLCJyZWwiLCJ0YXJnZXQiLCJuZXdUYWIiLCJsaW5rVGV4dE5hbWUiLCJsaW5rVGV4dCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=