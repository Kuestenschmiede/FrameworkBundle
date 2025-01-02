"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailDateField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailDateField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailDateField.jsx ***!
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
var DetailDateField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailDateField(props) {
    (0, _classCallCheck2["default"])(this, DetailDateField);
    return _callSuper(this, DetailDateField, [props]);
  }
  (0, _inherits2["default"])(DetailDateField, _Component);
  return (0, _createClass2["default"])(DetailDateField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", null, this.props.field.label);
        }
        var date = new Date(this.props.data[this.props.field.name] * 1000);
        var dateValue = String(date.getUTCDate()) + '.' + String(date.getMonth() + 1) + '.' + String(date.getUTCFullYear());
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-field-text" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
        }, label, /*#__PURE__*/_react["default"].createElement("span", null, dateValue));
      } else {
        return '';
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxEYXRlRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQVZ2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQVlxQjRCLGVBQWUsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFDbEMsU0FBQUYsZ0JBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixlQUFBO0lBQUEsT0FBQVosVUFBQSxPQUFBWSxlQUFBLEdBQ1hHLEtBQUs7RUFFYjtFQUFDLElBQUFFLFVBQUEsYUFBQUwsZUFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQUksYUFBQSxhQUFBTixlQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUksSUFBSSxDQUFDTixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxJQUFJQyxLQUFLLEdBQUcsSUFBSTtRQUNoQixJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDUSxLQUFLLENBQUNFLEtBQUssRUFBRTtVQUMxQkEsS0FBSyxnQkFBR2hELE1BQUEsWUFBQWlELGFBQUEsZUFBTyxJQUFJLENBQUNYLEtBQUssQ0FBQ1EsS0FBSyxDQUFDRSxLQUFZLENBQUM7UUFDL0M7UUFDQSxJQUFJRSxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLElBQUksQ0FBQ2IsS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xFLElBQUlLLFNBQVMsR0FBR0MsTUFBTSxDQUFDSCxJQUFJLENBQUNJLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0gsSUFBSSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0YsTUFBTSxDQUFDSCxJQUFJLENBQUNNLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDbkgsb0JBQ0l4RCxNQUFBLFlBQUFpRCxhQUFBO1VBQUtRLFNBQVMsRUFBRSxtQkFBbUIsSUFBSSxJQUFJLENBQUNuQixLQUFLLENBQUNRLEtBQUssU0FBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ1EsS0FBSyxTQUFNLEdBQUcsRUFBRTtRQUFFLEdBQ2hHRSxLQUFLLGVBQ05oRCxNQUFBLFlBQUFpRCxhQUFBLGVBQU9HLFNBQWdCLENBQ3BCLENBQUM7TUFFWixDQUFDLE1BQU07UUFDTCxPQUFRLEVBQUU7TUFDWjtJQUNGO0VBQUM7QUFBQSxFQXZCMENNLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxEYXRlRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsRGF0ZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IDxzcGFuPnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj47XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdICogMTAwMCk7XG4gICAgICBsZXQgZGF0ZVZhbHVlID0gU3RyaW5nKGRhdGUuZ2V0VVRDRGF0ZSgpKSArICcuJyArIFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKSArICcuJyArIFN0cmluZyhkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtZmllbGQtdGV4dFwiICsgKHRoaXMucHJvcHMuZmllbGQuY2xhc3MgPyBcIiBcIiArIHRoaXMucHJvcHMuZmllbGQuY2xhc3MgOiBcIlwiKX0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8c3Bhbj57ZGF0ZVZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoJycpO1xuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRGV0YWlsRGF0ZUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJEYXRlIiwiZGF0ZVZhbHVlIiwiU3RyaW5nIiwiZ2V0VVRDRGF0ZSIsImdldE1vbnRoIiwiZ2V0VVRDRnVsbFllYXIiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9