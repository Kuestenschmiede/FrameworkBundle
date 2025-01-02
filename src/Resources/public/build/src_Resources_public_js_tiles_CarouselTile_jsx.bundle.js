"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_CarouselTile_jsx"],{

/***/ "./src/Resources/public/js/tiles/CarouselTile.jsx":
/*!********************************************************!*\
  !*** ./src/Resources/public/js/tiles/CarouselTile.jsx ***!
  \********************************************************/
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
var CarouselTile = exports["default"] = /*#__PURE__*/function (_Component) {
  function CarouselTile(props) {
    (0, _classCallCheck2["default"])(this, CarouselTile);
    return _callSuper(this, CarouselTile, [props]);
  }
  (0, _inherits2["default"])(CarouselTile, _Component);
  return (0, _createClass2["default"])(CarouselTile, [{
    key: "render",
    value: function render() {
      var _this = this;
      var itemType = null;
      if (this.props.dataEntry.itemType) {
        itemType = this.props.dataEntry.itemType;
      }
      return /*#__PURE__*/_react["default"].createElement("a", {
        className: this.props.className || "",
        href: this.props.dataEntry.href,
        itemScope: itemType,
        itemType: itemType
      }, this.props.fields.map(function (item, id) {
        return /*#__PURE__*/_react["default"].createElement(TileMapperField, {
          key: id,
          field: item,
          data: _this.props.dataEntry,
          languageRefs: _this.props.languageRefs
        });
      }));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfQ2Fyb3VzZWxUaWxlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBaUQsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFWakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTTRCLGVBQWUsZ0JBQUdDLGlCQUFLLENBQUNDLElBQUksQ0FBQztFQUFBLE9BQU0sdVBBQXNDO0FBQUEsRUFBQztBQUFDLElBRTVEQyxZQUFZLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBRS9CLFNBQUFGLGFBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixZQUFBO0lBQUEsT0FBQWYsVUFBQSxPQUFBZSxZQUFBLEdBQ1hHLEtBQUs7RUFDYjtFQUFDLElBQUFFLFVBQUEsYUFBQUwsWUFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQUksYUFBQSxhQUFBTixZQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUFBLElBQUFDLEtBQUE7TUFDUCxJQUFJQyxRQUFRLEdBQUcsSUFBSTtNQUNuQixJQUFJLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxTQUFTLENBQUNELFFBQVEsRUFBRTtRQUNqQ0EsUUFBUSxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxTQUFTLENBQUNELFFBQVE7TUFDMUM7TUFFQSxvQkFDRWpELE1BQUEsWUFBQW1ELGFBQUE7UUFBR0MsU0FBUyxFQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDVyxTQUFTLElBQUksRUFBRztRQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUNTLFNBQVMsQ0FBQ0csSUFBSztRQUFDQyxTQUFTLEVBQUVMLFFBQVM7UUFBQ0EsUUFBUSxFQUFFQTtNQUFTLEdBRS9HLElBQUksQ0FBQ1IsS0FBSyxDQUFDYyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEVBQUUsRUFBSztRQUNsQyxvQkFBTzFELE1BQUEsWUFBQW1ELGFBQUEsQ0FBQ2hCLGVBQWU7VUFBQ1UsR0FBRyxFQUFFYSxFQUFHO1VBQUNDLEtBQUssRUFBRUYsSUFBSztVQUFDRyxJQUFJLEVBQUVaLEtBQUksQ0FBQ1AsS0FBSyxDQUFDUyxTQUFVO1VBQUNXLFlBQVksRUFBRWIsS0FBSSxDQUFDUCxLQUFLLENBQUNvQjtRQUFhLENBQUMsQ0FBQztNQUNwSCxDQUFDLENBRUYsQ0FBQztJQUVSO0VBQUM7QUFBQSxFQXJCdUNDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvQ2Fyb3VzZWxUaWxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVGlsZU1hcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2ZpZWxkcy9UaWxlTWFwcGVyRmllbGQuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxUaWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaXRlbVR5cGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFFbnRyeS5pdGVtVHlwZSkge1xuICAgICAgaXRlbVR5cGUgPSB0aGlzLnByb3BzLmRhdGFFbnRyeS5pdGVtVHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwifSBocmVmPXt0aGlzLnByb3BzLmRhdGFFbnRyeS5ocmVmfSBpdGVtU2NvcGU9e2l0ZW1UeXBlfSBpdGVtVHlwZT17aXRlbVR5cGV9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5maWVsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxUaWxlTWFwcGVyRmllbGQga2V5PXtpZH0gZmllbGQ9e2l0ZW19IGRhdGE9e3RoaXMucHJvcHMuZGF0YUVudHJ5fSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+O1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaWxlTWFwcGVyRmllbGQiLCJSZWFjdCIsImxhenkiLCJDYXJvdXNlbFRpbGUiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsIml0ZW1UeXBlIiwiZGF0YUVudHJ5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJpdGVtU2NvcGUiLCJmaWVsZHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJmaWVsZCIsImRhdGEiLCJsYW5ndWFnZVJlZnMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9