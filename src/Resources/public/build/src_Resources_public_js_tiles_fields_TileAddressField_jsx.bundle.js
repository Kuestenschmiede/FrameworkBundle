"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileAddressField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileAddressField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileAddressField.jsx ***!
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var TileAddressField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileAddressField(props) {
    (0, _classCallCheck2["default"])(this, TileAddressField);
    return _callSuper(this, TileAddressField, [props]);
  }
  (0, _inherits2["default"])(TileAddressField, _Component);
  return (0, _createClass2["default"])(TileAddressField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.postalName] && this.props.data[this.props.field.cityName]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label);
        }
        var postalCity = null;
        if (this.props.data[this.props.field.postalName] && this.props.data[this.props.field.cityName]) {
          var itemPropPostalCode = null;
          var itemPropAddressLocality = null;
          if (this.props.field.showSchema) {
            itemPropPostalCode = 'postalCode';
            itemPropAddressLocality = 'addressLocality';
          }
          postalCity = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
            itemProp: itemProp,
            className: "postal-city"
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: "postal",
            itemProp: itemPropPostalCode
          }, this.props.data[this.props.field.postalName]), /*#__PURE__*/_react["default"].createElement("span", {
            className: "city",
            itemProp: itemPropAddressLocality
          }, this.props.data[this.props.field.cityName])));
        }
        var street = null;
        if (this.props.data[this.props.field.streetName] && this.props.data[this.props.field.streetNumberName]) {
          var _itemProp = null;
          if (this.props.field.showSchema) {
            _itemProp = 'streetAddress';
          }
          street = /*#__PURE__*/_react["default"].createElement("span", {
            itemProp: _itemProp,
            className: "street-address"
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: "street"
          }, this.props.data[this.props.field.streetName]), /*#__PURE__*/_react["default"].createElement("span", {
            className: "streetNumber"
          }, this.props.data[this.props.field.streetNumberName]));
        }
        var itemProp = null;
        var itemType = null;
        if (this.props.field.showSchema) {
          itemProp = 'address';
          itemType = 'https://schema.org/PostalAddress';
        }
        return /*#__PURE__*/_react["default"].createElement(Condition, {
          data: this.props.data,
          conditions: this.props.field.conditions
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, /*#__PURE__*/_react["default"].createElement("span", {
          className: this.props.field["class"],
          itemProp: itemProp,
          itemType: itemType,
          itemScope: itemType
        }, street, postalCity)));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVBZGRyZXNzRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEs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LENBQUNiLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNjLGdCQUFnQixDQUM5QyxDQUNGLENBQUM7UUFDYjtRQUNBLElBQUlILFFBQVEsR0FBRyxJQUFJO1FBQ25CLElBQUlJLFFBQVEsR0FBRyxJQUFJO1FBQ25CLElBQUksSUFBSSxDQUFDdkIsS0FBSyxDQUFDUSxLQUFLLENBQUNTLFVBQVUsRUFBRTtVQUMvQkUsUUFBUSxHQUFHLFNBQVM7VUFDcEJJLFFBQVEsR0FBRyxrQ0FBa0M7UUFDL0M7UUFDQSxvQkFDSWhFLE1BQUEsWUFBQXFELGFBQUEsQ0FBQ2xCLFNBQVM7VUFBQ2EsSUFBSSxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxJQUFLO1VBQUNpQixVQUFVLEVBQUUsSUFBSSxDQUFDeEIsS0FBSyxDQUFDUSxLQUFLLENBQUNnQjtRQUFXLGdCQUN4RWpFLE1BQUEsWUFBQXFELGFBQUE7VUFBS0MsU0FBUyxFQUFFLElBQUksQ0FBQ2IsS0FBSyxDQUFDUSxLQUFLLENBQUNpQjtRQUFhLEdBQzNDZCxLQUFLLGVBQ05wRCxNQUFBLFlBQUFxRCxhQUFBO1VBQU1DLFNBQVMsRUFBRSxJQUFJLENBQUNiLEtBQUssQ0FBQ1EsS0FBSyxTQUFPO1VBQUNXLFFBQVEsRUFBRUEsUUFBUztVQUFDSSxRQUFRLEVBQUVBLFFBQVM7VUFBQ0csU0FBUyxFQUFFSDtRQUFTLEdBQ2xHSCxNQUFNLEVBQ05OLFVBQ0csQ0FDSCxDQUNJLENBQUM7TUFFbEI7TUFDQSxPQUFRLEVBQUU7SUFFWjtFQUFDO0FBQUEsRUFwRTJDYSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RpbGVzL2ZpZWxkcy9UaWxlQWRkcmVzc0ZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbmRpdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29uZGl0aW9uL0NvbmRpdGlvbi5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQucG9zdGFsTmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuY2l0eU5hbWVdKSB7XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e1wiZW50cnktbGFiZWxcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9zcGFuPjtcbiAgICAgIH1cbiAgICAgIGxldCBwb3N0YWxDaXR5ID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5wb3N0YWxOYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5jaXR5TmFtZV0pIHtcbiAgICAgICAgbGV0IGl0ZW1Qcm9wUG9zdGFsQ29kZSA9IG51bGw7XG4gICAgICAgIGxldCBpdGVtUHJvcEFkZHJlc3NMb2NhbGl0eSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnNob3dTY2hlbWEpIHtcbiAgICAgICAgICAgIGl0ZW1Qcm9wUG9zdGFsQ29kZSA9ICdwb3N0YWxDb2RlJztcbiAgICAgICAgICAgIGl0ZW1Qcm9wQWRkcmVzc0xvY2FsaXR5ID0gJ2FkZHJlc3NMb2NhbGl0eSc7XG4gICAgICAgIH1cbiAgICAgICAgcG9zdGFsQ2l0eSA9XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxzcGFuIGl0ZW1Qcm9wPXtpdGVtUHJvcH0gY2xhc3NOYW1lPVwicG9zdGFsLWNpdHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0YWxcIiBpdGVtUHJvcD17aXRlbVByb3BQb3N0YWxDb2RlfT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5wb3N0YWxOYW1lXX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2l0eVwiIGl0ZW1Qcm9wPXtpdGVtUHJvcEFkZHJlc3NMb2NhbGl0eX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuY2l0eU5hbWVdfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgICB9XG4gICAgICBsZXQgc3RyZWV0ID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5zdHJlZXROYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5zdHJlZXROdW1iZXJOYW1lXSkge1xuICAgICAgICBsZXQgaXRlbVByb3AgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5zaG93U2NoZW1hKSB7XG4gICAgICAgICAgaXRlbVByb3AgPSAnc3RyZWV0QWRkcmVzcyc7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWV0ID1cbiAgICAgICAgICAgIDxzcGFuIGl0ZW1Qcm9wPXtpdGVtUHJvcH0gY2xhc3NOYW1lPVwic3RyZWV0LWFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RyZWV0XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLnN0cmVldE5hbWVdfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0cmVldE51bWJlclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5zdHJlZXROdW1iZXJOYW1lXX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgIH1cbiAgICAgIGxldCBpdGVtUHJvcCA9IG51bGw7XG4gICAgICBsZXQgaXRlbVR5cGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuc2hvd1NjaGVtYSkge1xuICAgICAgICBpdGVtUHJvcCA9ICdhZGRyZXNzJztcbiAgICAgICAgaXRlbVR5cGUgPSAnaHR0cHM6Ly9zY2hlbWEub3JnL1Bvc3RhbEFkZHJlc3MnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29uZGl0aW9uIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gY29uZGl0aW9ucz17dGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25zfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwZXJDbGFzc30+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmNsYXNzfSBpdGVtUHJvcD17aXRlbVByb3B9IGl0ZW1UeXBlPXtpdGVtVHlwZX0gaXRlbVNjb3BlPXtpdGVtVHlwZX0+XG4gICAgICAgICAgICAgICAge3N0cmVldH1cbiAgICAgICAgICAgICAgICB7cG9zdGFsQ2l0eX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db25kaXRpb24+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKCcnKVxuXG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkNvbmRpdGlvbiIsIlJlYWN0IiwibGF6eSIsIlRpbGVBZGRyZXNzRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJkYXRhIiwiZmllbGQiLCJwb3N0YWxOYW1lIiwiY2l0eU5hbWUiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwb3N0YWxDaXR5IiwiaXRlbVByb3BQb3N0YWxDb2RlIiwiaXRlbVByb3BBZGRyZXNzTG9jYWxpdHkiLCJzaG93U2NoZW1hIiwiRnJhZ21lbnQiLCJpdGVtUHJvcCIsInN0cmVldCIsInN0cmVldE5hbWUiLCJzdHJlZXROdW1iZXJOYW1lIiwiaXRlbVR5cGUiLCJjb25kaXRpb25zIiwid3JhcHBlckNsYXNzIiwiaXRlbVNjb3BlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==