"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileHeadlineField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileHeadlineField.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileHeadlineField.jsx ***!
  \********************************************************************/
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
var TileHeadlineField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileHeadlineField(props) {
    (0, _classCallCheck2["default"])(this, TileHeadlineField);
    return _callSuper(this, TileHeadlineField, [props]);
  }
  (0, _inherits2["default"])(TileHeadlineField, _Component);
  return (0, _createClass2["default"])(TileHeadlineField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
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
        var headline = null;
        switch (this.props.field.level) {
          case 1:
            headline = /*#__PURE__*/_react["default"].createElement("h1", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          case 2:
            headline = /*#__PURE__*/_react["default"].createElement("h2", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          case 3:
            headline = /*#__PURE__*/_react["default"].createElement("h3", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          case 4:
            headline = /*#__PURE__*/_react["default"].createElement("h4", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          case 5:
            headline = /*#__PURE__*/_react["default"].createElement("h5", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          case 6:
            headline = /*#__PURE__*/_react["default"].createElement("h6", {
              className: this.props.field["class"]
            }, this.props.data[this.props.field.name]);
            break;
          default:
            console.warn("unsupported headline level.");
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, headline);
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVIZWFkbGluZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFB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Q0ssZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90aWxlcy9maWVsZHMvVGlsZUhlYWRsaW5lRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUhlYWRsaW5lRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17XCJlbnRyeS1sYWJlbFwifT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+O1xuICAgICAgfVxuICAgICAgbGV0IGl0ZW1Qcm9wID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLml0ZW1Qcm9wKSB7XG4gICAgICAgIGl0ZW1Qcm9wID0gdGhpcy5wcm9wcy5maWVsZC5pdGVtUHJvcDtcbiAgICAgIH1cbiAgICAgIGxldCBoZWFkbGluZSA9IG51bGw7XG4gICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuZmllbGQubGV2ZWwpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGhlYWRsaW5lID0gPGgxIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDE+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmNsYXNzfT57dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV19PC9oMj47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBoZWFkbGluZSA9IDxoMyBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9Pnt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXX08L2gzPjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGhlYWRsaW5lID0gPGg0IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDQ+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDUgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmNsYXNzfT57dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV19PC9oNT47XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBoZWFkbGluZSA9IDxoNiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9Pnt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXX08L2g2PjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJ1bnN1cHBvcnRlZCBoZWFkbGluZSBsZXZlbC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwZXJDbGFzc30+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIHtoZWFkbGluZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKCcnKVxuXG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpbGVIZWFkbGluZUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIml0ZW1Qcm9wIiwiaGVhZGxpbmUiLCJsZXZlbCIsImNvbnNvbGUiLCJ3YXJuIiwid3JhcHBlckNsYXNzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==