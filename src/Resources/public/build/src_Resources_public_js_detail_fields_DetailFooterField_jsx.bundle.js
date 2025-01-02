"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailFooterField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailFooterField.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailFooterField.jsx ***!
  \*********************************************************************/
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
var DetailFooterField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailFooterField(props) {
    (0, _classCallCheck2["default"])(this, DetailFooterField);
    return _callSuper(this, DetailFooterField, [props]);
  }
  (0, _inherits2["default"])(DetailFooterField, _Component);
  return (0, _createClass2["default"])(DetailFooterField, [{
    key: "render",
    value: function render() {
      var _this = this;
      var footerButtons = [];
      this.props.field.footerButtons.forEach(function (item, id) {
        footerButtons.push(/*#__PURE__*/_react["default"].createElement("a", {
          className: "btn " + item["class"],
          href: _this.props.data[item.linkField]
        }, item.label));
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12 detail-footer-field-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12 text-center detail-footer-inner-info"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "mb-2 mt-2" + (this.props.field.footerTextClass ? " " + this.props.field.footerTextClass : "")
      }, this.props.field.footerText)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12 text-center detail-footer-buttons"
      }, footerButtons));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxGb290ZXJGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBVnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBWXFCNEIsaUJBQWlCLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBRXBDLFNBQUFGLGtCQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUosaUJBQUE7SUFBQSxPQUFBWixVQUFBLE9BQUFZLGlCQUFBLEdBQ1hHLEtBQUs7RUFFYjtFQUFDLElBQUFFLFVBQUEsYUFBQUwsaUJBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFJLGFBQUEsYUFBQU4saUJBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsS0FBQTtNQUNQLElBQUlDLGFBQWEsR0FBRyxFQUFFO01BQ3RCLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxLQUFLLENBQUNELGFBQWEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsRUFBRSxFQUFLO1FBQ2xESixhQUFhLENBQUNLLElBQUksY0FBQ25ELE1BQUEsWUFBQW9ELGFBQUE7VUFBR0MsU0FBUyxFQUFFLE1BQU0sR0FBR0osSUFBSSxTQUFPO1VBQzVDSyxJQUFJLEVBQUVULEtBQUksQ0FBQ1AsS0FBSyxDQUFDaUIsSUFBSSxDQUFDTixJQUFJLENBQUNPLFNBQVM7UUFBRSxHQUFFUCxJQUFJLENBQUNRLEtBQVMsQ0FBQyxDQUFDO01BQ3BFLENBQUMsQ0FBQztNQUNGLG9CQUNFekQsTUFBQSxZQUFBb0QsYUFBQTtRQUFLQyxTQUFTLEVBQUU7TUFBcUMsZ0JBQ25EckQsTUFBQSxZQUFBb0QsYUFBQTtRQUFLQyxTQUFTLEVBQUU7TUFBOEMsZ0JBQzVEckQsTUFBQSxZQUFBb0QsYUFBQTtRQUFHQyxTQUFTLEVBQUUsV0FBVyxJQUFJLElBQUksQ0FBQ2YsS0FBSyxDQUFDUyxLQUFLLENBQUNXLGVBQWUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDcEIsS0FBSyxDQUFDUyxLQUFLLENBQUNXLGVBQWUsR0FBRyxFQUFFO01BQUUsR0FDMUcsSUFBSSxDQUFDcEIsS0FBSyxDQUFDUyxLQUFLLENBQUNZLFVBQ2pCLENBQ0EsQ0FBQyxlQUNOM0QsTUFBQSxZQUFBb0QsYUFBQTtRQUFLQyxTQUFTLEVBQUU7TUFBMkMsR0FDeERQLGFBQ0UsQ0FDRixDQUFDO0lBRVY7RUFBQztBQUFBLEVBekI0Q2MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbEZvb3RlckZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbEZvb3RlckZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBmb290ZXJCdXR0b25zID0gW107XG4gICAgdGhpcy5wcm9wcy5maWVsZC5mb290ZXJCdXR0b25zLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgZm9vdGVyQnV0dG9ucy5wdXNoKDxhIGNsYXNzTmFtZT17XCJidG4gXCIgKyBpdGVtLmNsYXNzfVxuICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMucHJvcHMuZGF0YVtpdGVtLmxpbmtGaWVsZF19PntpdGVtLmxhYmVsfTwvYT4pO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2wtMTIgZGV0YWlsLWZvb3Rlci1maWVsZC13cmFwcGVyXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb2wtMTIgdGV4dC1jZW50ZXIgZGV0YWlsLWZvb3Rlci1pbm5lci1pbmZvXCJ9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJtYi0yIG10LTJcIiArICh0aGlzLnByb3BzLmZpZWxkLmZvb3RlclRleHRDbGFzcyA/IFwiIFwiICsgdGhpcy5wcm9wcy5maWVsZC5mb290ZXJUZXh0Q2xhc3MgOiBcIlwiKX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5maWVsZC5mb290ZXJUZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbC0xMiB0ZXh0LWNlbnRlciBkZXRhaWwtZm9vdGVyLWJ1dHRvbnNcIn0+XG4gICAgICAgICAge2Zvb3RlckJ1dHRvbnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRGV0YWlsRm9vdGVyRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsImZvb3RlckJ1dHRvbnMiLCJmaWVsZCIsImZvckVhY2giLCJpdGVtIiwiaWQiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJkYXRhIiwibGlua0ZpZWxkIiwibGFiZWwiLCJmb290ZXJUZXh0Q2xhc3MiLCJmb290ZXJUZXh0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==