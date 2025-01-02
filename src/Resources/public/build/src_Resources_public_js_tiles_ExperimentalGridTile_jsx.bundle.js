"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_ExperimentalGridTile_jsx"],{

/***/ "./src/Resources/public/js/tiles/ExperimentalGridTile.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/ExperimentalGridTile.jsx ***!
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
var TileMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./fields/TileMapperField.jsx */ "./src/Resources/public/js/tiles/fields/TileMapperField.jsx"));
});
var ExperimentalGridTile = exports["default"] = /*#__PURE__*/function (_Component) {
  function ExperimentalGridTile(props) {
    (0, _classCallCheck2["default"])(this, ExperimentalGridTile);
    return _callSuper(this, ExperimentalGridTile, [props]);
  }
  (0, _inherits2["default"])(ExperimentalGridTile, _Component);
  return (0, _createClass2["default"])(ExperimentalGridTile, [{
    key: "render",
    value: function render() {
      var _this = this;
      var wrappedFields = [];
      for (var i = 0; i < this.props.fields.length; i++) {
        if (this.props.fields[i].type) {
          if (this.props.fields[i].wrappedFields) {
            wrappedFields = wrappedFields.concat(this.props.fields[i].wrappedFields);
          }
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-list-element"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-list-element__inner"
      }, this.props.fields.map(function (item, id) {
        if (!wrappedFields.includes(item.name)) {
          return /*#__PURE__*/_react["default"].createElement(TileMapperField, {
            key: id,
            field: item,
            data: _this.props.dataEntry,
            list: _this.props.list,
            fields: _this.props.fields,
            languageRefs: _this.props.languageRefs
          });
        }
      })));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfRXhwZXJpbWVudGFsR3JpZFRpbGVfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUFpRCxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFB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TztZQUFDZSxZQUFZLEVBQUVqQixLQUFJLENBQUNQLEtBQUssQ0FBQ3dCO1VBQWEsQ0FBQyxDQUFDO1FBQ3RLO01BQ0YsQ0FBQyxDQUdBLENBQ0YsQ0FBQztJQUVWO0VBQUM7QUFBQSxFQWhDK0NDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvRXhwZXJpbWVudGFsR3JpZFRpbGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRpbGVNYXBwZXJGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9maWVsZHMvVGlsZU1hcHBlckZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaW1lbnRhbEdyaWRUaWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd3JhcHBlZEZpZWxkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tpXS50eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkc1tpXS53cmFwcGVkRmllbGRzKSB7XG4gICAgICAgICAgd3JhcHBlZEZpZWxkcyA9IHdyYXBwZWRGaWVsZHMuY29uY2F0KHRoaXMucHJvcHMuZmllbGRzW2ldLndyYXBwZWRGaWVsZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWxpc3QtZWxlbWVudFwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWxpc3QtZWxlbWVudF9faW5uZXJcIj5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmllbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF3cmFwcGVkRmllbGRzLmluY2x1ZGVzKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRpbGVNYXBwZXJGaWVsZCBrZXk9e2lkfSBmaWVsZD17aXRlbX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhRW50cnl9IGxpc3Q9e3RoaXMucHJvcHMubGlzdH0gZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc30gbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc30vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaWxlTWFwcGVyRmllbGQiLCJSZWFjdCIsImxhenkiLCJFeHBlcmltZW50YWxHcmlkVGlsZSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzIiwid3JhcHBlZEZpZWxkcyIsImZpZWxkcyIsImxlbmd0aCIsInR5cGUiLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImlkIiwiaW5jbHVkZXMiLCJuYW1lIiwiZmllbGQiLCJkYXRhIiwiZGF0YUVudHJ5IiwibGlzdCIsImxhbmd1YWdlUmVmcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=