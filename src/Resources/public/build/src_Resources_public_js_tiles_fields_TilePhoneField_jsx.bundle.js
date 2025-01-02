"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TilePhoneField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TilePhoneField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TilePhoneField.jsx ***!
  \*****************************************************************/
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var TilePhoneField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TilePhoneField(props) {
    (0, _classCallCheck2["default"])(this, TilePhoneField);
    return _callSuper(this, TilePhoneField, [props]);
  }
  (0, _inherits2["default"])(TilePhoneField, _Component);
  return (0, _createClass2["default"])(TilePhoneField, [{
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
        if (this.props.field.showSchema) {
          itemProp = 'telephone';
        }
        var href = "tel:";
        var phoneNumber = this.props.data[this.props.field.name];
        href += phoneNumber;
        return /*#__PURE__*/_react["default"].createElement(Condition, {
          data: this.props.data,
          conditions: this.props.field.conditions
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, /*#__PURE__*/_react["default"].createElement("a", {
          className: this.props.field["class"],
          itemProp: itemProp,
          href: href
        }, phoneNumber)));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVQaG9uZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFWdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTTRCLFNBQVMsZ0JBQUdDLGlCQUFLLENBQUNDLElBQUksQ0FBQztFQUFBLE9BQU0sc09BQXVDO0FBQUEsRUFBQztBQUFDLElBRXZEQyxjQUFjLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBRWpDLFNBQUFGLGVBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixjQUFBO0lBQUEsT0FBQWYsVUFBQSxPQUFBZSxjQUFBLEdBQ1hHLEtBQUs7RUFDYjtFQUFDLElBQUFFLFVBQUEsYUFBQUwsY0FBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQUksYUFBQSxhQUFBTixjQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUksSUFBSSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxJQUFJQyxLQUFLLEdBQUcsSUFBSTtRQUNoQixJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDUSxLQUFLLENBQUNFLEtBQUssRUFBRTtVQUMxQkEsS0FBSyxnQkFBR25ELE1BQUEsWUFBQW9ELGFBQUE7WUFBTUMsU0FBUyxFQUFFO1VBQWMsR0FBRSxJQUFJLENBQUNaLEtBQUssQ0FBQ1EsS0FBSyxDQUFDRSxLQUFZLENBQUM7UUFDekU7UUFDQSxJQUFJRyxRQUFRLEdBQUcsSUFBSTtRQUNuQixJQUFJLElBQUksQ0FBQ2IsS0FBSyxDQUFDUSxLQUFLLENBQUNNLFVBQVUsRUFBRTtVQUMvQkQsUUFBUSxHQUFHLFdBQVc7UUFDeEI7UUFDQSxJQUFJRSxJQUFJLEdBQUcsTUFBTTtRQUNqQixJQUFJQyxXQUFXLEdBQUcsSUFBSSxDQUFDaEIsS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQ3hETSxJQUFJLElBQUlDLFdBQVc7UUFDbkIsb0JBQ0l6RCxNQUFBLFlBQUFvRCxhQUFBLENBQUNqQixTQUFTO1VBQUNhLElBQUksRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ08sSUFBSztVQUFDVSxVQUFVLEVBQUUsSUFBSSxDQUFDakIsS0FBSyxDQUFDUSxLQUFLLENBQUNTO1FBQVcsZ0JBQ3hFMUQsTUFBQSxZQUFBb0QsYUFBQTtVQUFLQyxTQUFTLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUNRLEtBQUssQ0FBQ1U7UUFBYSxHQUMzQ1IsS0FBSyxlQUNObkQsTUFBQSxZQUFBb0QsYUFBQTtVQUFHQyxTQUFTLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUNRLEtBQUssU0FBTztVQUFDSyxRQUFRLEVBQUVBLFFBQVM7VUFBQ0UsSUFBSSxFQUFFQTtRQUFLLEdBQUVDLFdBQWUsQ0FDbkYsQ0FDSSxDQUFDO01BRWxCO01BQ0EsT0FBUSxFQUFFO0lBQ1o7RUFBQztBQUFBLEVBN0J5Q0csZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90aWxlcy9maWVsZHMvVGlsZVBob25lRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29uZGl0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb25kaXRpb24vQ29uZGl0aW9uLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVQaG9uZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17XCJlbnRyeS1sYWJlbFwifT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+O1xuICAgICAgfVxuICAgICAgbGV0IGl0ZW1Qcm9wID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnNob3dTY2hlbWEpIHtcbiAgICAgICAgaXRlbVByb3AgPSAndGVsZXBob25lJztcbiAgICAgIH1cbiAgICAgIGxldCBocmVmID0gXCJ0ZWw6XCI7XG4gICAgICBsZXQgcGhvbmVOdW1iZXIgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTtcbiAgICAgIGhyZWYgKz0gcGhvbmVOdW1iZXI7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb25kaXRpb24gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBjb25kaXRpb25zPXt0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbnN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQud3JhcHBlckNsYXNzfT5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9IGl0ZW1Qcm9wPXtpdGVtUHJvcH0gaHJlZj17aHJlZn0+e3Bob25lTnVtYmVyfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29uZGl0aW9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICgnJyk7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJDb25kaXRpb24iLCJSZWFjdCIsImxhenkiLCJUaWxlUGhvbmVGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpdGVtUHJvcCIsInNob3dTY2hlbWEiLCJocmVmIiwicGhvbmVOdW1iZXIiLCJjb25kaXRpb25zIiwid3JhcHBlckNsYXNzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==