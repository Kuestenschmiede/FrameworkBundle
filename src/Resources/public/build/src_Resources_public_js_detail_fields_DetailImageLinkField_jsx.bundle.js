"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailImageLinkField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailImageLinkField.jsx":
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailImageLinkField.jsx ***!
  \************************************************************************/
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
var DetailImageField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailImageField(props) {
    (0, _classCallCheck2["default"])(this, DetailImageField);
    return _callSuper(this, DetailImageField, [props]);
  }
  (0, _inherits2["default"])(DetailImageField, _Component);
  return (0, _createClass2["default"])(DetailImageField, [{
    key: "render",
    value: function render() {
      var _this = this;
      var data = this.props.data[this.props.field.name];
      if (data) {
        var content;
        if (Array.isArray(data)) {
          content = data.map(function (item, index) {
            return /*#__PURE__*/_react["default"].createElement("a", {
              href: item.href,
              className: _this.props.field["class"],
              key: index
            }, /*#__PURE__*/_react["default"].createElement("img", {
              src: item.src,
              alt: item.alt,
              className: _this.props.field.innerClass
            }));
          });
        } else {
          content = /*#__PURE__*/_react["default"].createElement("a", {
            href: data.href,
            className: this.props.field["class"]
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: data.src,
            alt: data.alt,
            className: this.props.field.innerClass
          }));
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, content);
      } else {
        return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxJbWFnZUxpbmtGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0s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QUssQ0FBQ1MsS0FBSyxDQUFDYztRQUFhLEdBQzNDWixPQUNFLENBQUM7TUFFVixDQUFDLE1BQU07UUFDTCxPQUFPLElBQUk7TUFDYjtJQUNGO0VBQUM7QUFBQSxFQS9CMkNhLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxJbWFnZUxpbmtGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxJbWFnZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGxldCBjb250ZW50O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgY29udGVudCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YSBocmVmPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHR9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5pbm5lckNsYXNzfS8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSA8YSBocmVmPXtkYXRhLmhyZWZ9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+XG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEuc3JjfSBhbHQ9e2RhdGEuYWx0fSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuaW5uZXJDbGFzc30vPlxuICAgICAgICA8L2E+O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC53cmFwcGVyQ2xhc3N9PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRldGFpbEltYWdlRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJjb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJpbm5lckNsYXNzIiwid3JhcHBlckNsYXNzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==