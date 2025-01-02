"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileWrapperField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileWrapperField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileWrapperField.jsx ***!
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
var TileMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./TileMapperField.jsx */ "./src/Resources/public/js/tiles/fields/TileMapperField.jsx"));
});
var TileWrapperField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileWrapperField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileWrapperField);
    _this = _callSuper(this, TileWrapperField, [props]);
    _this.state = {
      fields: [],
      setup: false
    };
    return _this;
  }
  (0, _inherits2["default"])(TileWrapperField, _Component);
  return (0, _createClass2["default"])(TileWrapperField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var wrappedFields = [];
      var fields = this.props.fields;
      for (var i = 0; i < fields.length; i++) {
        if (this.props.field.wrappedFields.includes(fields[i].name)) {
          wrappedFields.push(fields[i]);
        }
      }
      var innerFields = [];
      wrappedFields.map(function (item, id) {
        innerFields.push(/*#__PURE__*/_react["default"].createElement(TileMapperField, {
          key: id,
          field: item,
          data: _this2.props.data,
          list: _this2.props.list,
          fields: _this2.props.fields,
          languageRefs: _this2.props.languageRefs
        }));
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field["class"]
      }, innerFields);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVXcmFwcGVyRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEs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RUYsb0JBQ0VsRSxNQUFBLFlBQUErRCxhQUFBO1FBQUtJLFNBQVMsRUFBRSxJQUFJLENBQUMxQixLQUFLLENBQUNjLEtBQUs7TUFBTyxHQUVuQ0ksV0FFQyxDQUFDO0lBRVY7RUFBQztBQUFBLEVBaEMyQ1MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90aWxlcy9maWVsZHMvVGlsZVdyYXBwZXJGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaWxlTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vVGlsZU1hcHBlckZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVXcmFwcGVyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpZWxkczogW10sXG4gICAgICBzZXR1cDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB3cmFwcGVkRmllbGRzID0gW107XG4gICAgbGV0IGZpZWxkcyA9IHRoaXMucHJvcHMuZmllbGRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC53cmFwcGVkRmllbGRzLmluY2x1ZGVzKGZpZWxkc1tpXS5uYW1lKSkge1xuICAgICAgICB3cmFwcGVkRmllbGRzLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaW5uZXJGaWVsZHMgPSBbXTtcbiAgICB3cmFwcGVkRmllbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgIGlubmVyRmllbGRzLnB1c2goPFRpbGVNYXBwZXJGaWVsZCBrZXk9e2lkfSBmaWVsZD17aXRlbX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBsaXN0PXt0aGlzLnByb3BzLmxpc3R9IGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9IGxhbmd1YWdlUmVmcz17dGhpcy5wcm9wcy5sYW5ndWFnZVJlZnN9Lz4pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9PlxuICAgICAgICB7XG4gICAgICAgICAgaW5uZXJGaWVsZHNcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpbGVNYXBwZXJGaWVsZCIsIlJlYWN0IiwibGF6eSIsIlRpbGVXcmFwcGVyRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic3RhdGUiLCJmaWVsZHMiLCJzZXR1cCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJ3cmFwcGVkRmllbGRzIiwibGVuZ3RoIiwiZmllbGQiLCJpbmNsdWRlcyIsIm5hbWUiLCJwdXNoIiwiaW5uZXJGaWVsZHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YSIsImxpc3QiLCJsYW5ndWFnZVJlZnMiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9