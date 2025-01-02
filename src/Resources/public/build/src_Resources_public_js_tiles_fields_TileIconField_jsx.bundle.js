"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileIconField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileIconField.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileIconField.jsx ***!
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
var TileIconField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileIconField(props) {
    (0, _classCallCheck2["default"])(this, TileIconField);
    return _callSuper(this, TileIconField, [props]);
  }
  (0, _inherits2["default"])(TileIconField, _Component);
  return (0, _createClass2["default"])(TileIconField, [{
    key: "render",
    value: function render() {
      if (!this.props.field.conditional || this.props.data[this.props.field.name]) {
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
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, /*#__PURE__*/_react["default"].createElement("span", {
          className: this.props.field["class"]
        }, icon));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVJY29uRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQVZ2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQVlxQjRCLGFBQWEsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFFaEMsU0FBQUYsY0FBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFKLGFBQUE7SUFBQSxPQUFBWixVQUFBLE9BQUFZLGFBQUEsR0FDWEcsS0FBSztFQUNiO0VBQUMsSUFBQUUsVUFBQSxhQUFBTCxhQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBSSxhQUFBLGFBQUFOLGFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNDLFdBQVcsSUFBSSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ1QsS0FBSyxDQUFDTyxLQUFLLENBQUNHLElBQUksQ0FBQyxFQUFFO1FBQzNFLElBQUlDLElBQUksR0FBRyxJQUFJO1FBQ2YsSUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ08sS0FBSyxDQUFDSyxTQUFTLEVBQUU7VUFDOUJELElBQUksZ0JBQUdqRCxNQUFBLFlBQUFtRCxhQUFBO1lBQUdDLFNBQVMsRUFBRSxJQUFJLENBQUNkLEtBQUssQ0FBQ08sS0FBSyxDQUFDSztVQUFVLENBQUksQ0FBQztRQUN2RDtRQUNBLElBQUlHLEtBQUssR0FBRyxJQUFJO1FBQ2hCLElBQUksSUFBSSxDQUFDZixLQUFLLENBQUNPLEtBQUssQ0FBQ1EsS0FBSyxFQUFFO1VBQzFCQSxLQUFLLGdCQUFHckQsTUFBQSxZQUFBbUQsYUFBQTtZQUFNQyxTQUFTLEVBQUM7VUFBYSxHQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDTyxLQUFLLENBQUNRLEtBQVksQ0FBQztRQUN2RTtRQUNBLG9CQUNJckQsTUFBQSxZQUFBbUQsYUFBQTtVQUFLQyxTQUFTLEVBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUNPLEtBQUssQ0FBQ1M7UUFBYSxHQUMzQ0QsS0FBSyxlQUNOckQsTUFBQSxZQUFBbUQsYUFBQTtVQUFNQyxTQUFTLEVBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUNPLEtBQUs7UUFBTyxHQUFFSSxJQUFXLENBQ2xELENBQUM7TUFFWjtNQUNBLE9BQVEsRUFBRTtJQUNaO0VBQUM7QUFBQSxFQXhCd0NNLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvZmllbGRzL1RpbGVJY29uRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUljb25GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbmFsIHx8IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSB7XG4gICAgICBsZXQgaWNvbiA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5pY29uQ2xhc3MpIHtcbiAgICAgICAgaWNvbiA9IDxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5pY29uQ2xhc3N9PjwvaT47XG4gICAgICB9XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9XCJlbnRyeS1sYWJlbFwiPnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj47XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwZXJDbGFzc30+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9PntpY29ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoJycpO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGlsZUljb25GaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImZpZWxkIiwiY29uZGl0aW9uYWwiLCJkYXRhIiwibmFtZSIsImljb24iLCJpY29uQ2xhc3MiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ3cmFwcGVyQ2xhc3MiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9