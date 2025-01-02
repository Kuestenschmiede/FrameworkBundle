"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailLinkField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailLinkField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailLinkField.jsx ***!
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
var DetailLinkField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailLinkField(props) {
    (0, _classCallCheck2["default"])(this, DetailLinkField);
    return _callSuper(this, DetailLinkField, [props]);
  }
  (0, _inherits2["default"])(DetailLinkField, _Component);
  return (0, _createClass2["default"])(DetailLinkField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var icon = null;
        if (this.props.field.icon) {
          icon = /*#__PURE__*/_react["default"].createElement("i", {
            className: this.props.field.icon
          });
        }
        var className = "";
        if (this.props.field["class"]) {
          className = this.props.field["class"];
        }
        if (this.props.tagType) {
          className += " " + this.props.tagType;
        }
        var target = " ";
        if (this.props.targetBlank) {
          target = "_blank";
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, icon, /*#__PURE__*/_react["default"].createElement("a", {
          target: target,
          href: this.props.data[this.props.field.name]
        }, this.props.data[this.props.field.linkTextName] || this.props.field.linkText));
      } else {
        return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxMaW5rRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEs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QUMsTUFBTTtRQUNMLE9BQU8sSUFBSTtNQUNiO0lBQ0Y7RUFBQztBQUFBLEVBbkMwQ0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbExpbmtGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxMaW5rRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgIGxldCBpY29uID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmljb24pIHtcbiAgICAgICAgaWNvbiA9IDxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5pY29ufT48L2k+O1xuICAgICAgfVxuICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5jbGFzcykge1xuICAgICAgICBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmZpZWxkLmNsYXNzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMudGFnVHlwZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLnByb3BzLnRhZ1R5cGU7XG4gICAgICB9XG4gICAgICBsZXQgdGFyZ2V0ID0gXCIgXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy50YXJnZXRCbGFuaykge1xuICAgICAgICB0YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICA8YSB0YXJnZXQ9e3RhcmdldH0gaHJlZj17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV19Pnt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5saW5rVGV4dE5hbWVdIHx8IHRoaXMucHJvcHMuZmllbGQubGlua1RleHR9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRldGFpbExpbmtGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRhZ1R5cGUiLCJ0YXJnZXQiLCJ0YXJnZXRCbGFuayIsImhyZWYiLCJsaW5rVGV4dE5hbWUiLCJsaW5rVGV4dCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=