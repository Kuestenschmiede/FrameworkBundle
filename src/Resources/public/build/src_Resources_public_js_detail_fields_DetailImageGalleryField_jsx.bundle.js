"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailImageGalleryField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailImageGalleryField.jsx":
/*!***************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailImageGalleryField.jsx ***!
  \***************************************************************************/
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
var _reactResponsiveCarousel = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
__webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
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
var DetailImageGalleryField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailImageGalleryField(props) {
    (0, _classCallCheck2["default"])(this, DetailImageGalleryField);
    return _callSuper(this, DetailImageGalleryField, [props]);
  }
  (0, _inherits2["default"])(DetailImageGalleryField, _Component);
  return (0, _createClass2["default"])(DetailImageGalleryField, [{
    key: "render",
    value: function render() {
      // is there at least one picture?
      if (this.props.data[this.props.field.name + "_0"]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", null, this.props.field.label);
        }
        var images = [];
        for (var i = 0; i < Object.keys(this.props.data).length; i++) {
          if (this.props.data[this.props.field.name + "_" + i]) {
            var value = this.props.data[this.props.field.name + "_" + i];
            var currentImage = /*#__PURE__*/_react["default"].createElement("div", {
              key: i
            }, /*#__PURE__*/_react["default"].createElement("img", {
              src: value.src,
              alt: value.alt
            }), /*#__PURE__*/_react["default"].createElement("p", {
              className: "legend"
            }, value.alt));
            images.push(currentImage);
          } else {
            // exit loop
            break;
          }
        }
        return /*#__PURE__*/_react["default"].createElement(_reactResponsiveCarousel.Carousel, {
          renderThumbs: function renderThumbs() {
            return [];
          },
          className: "detail-field-image-gallery" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
        }, images);
      } else {
        return '';
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxJbWFnZUdhbGxlcnlGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsd0JBQUEsR0FBQUQsbUJBQUE7QUFDQUEsbUJBQUE7QUFBK0QsU0FBQUUseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFKLHdCQUFBSSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMs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QUFLLENBQUNZLEdBQU8sQ0FDbkMsQ0FBQztZQUNOTCxNQUFNLENBQUNPLElBQUksQ0FBQ0osWUFBWSxDQUFDO1VBQzNCLENBQUMsTUFBTTtZQUNMO1lBQ0E7VUFDRjtRQUNGO1FBQ0Esb0JBQ0V0RCxNQUFBLFlBQUFrRCxhQUFBLENBQUMvQyx3QkFBQSxDQUFBd0QsUUFBUTtVQUFDQyxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBQSxFQUFRO1lBQzVCLE9BQU8sRUFBRTtVQUNYLENBQUU7VUFBQ0gsU0FBUyxFQUFFLDRCQUE0QixJQUFJLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ1EsS0FBSyxTQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUSxLQUFLLFNBQU0sR0FBRyxFQUFFO1FBQUUsR0FDdkdJLE1BQ08sQ0FBQztNQUVmLENBQUMsTUFBTTtRQUNMLE9BQVEsRUFBRTtNQUNaO0lBQ0Y7RUFBQztBQUFBLEVBdENrRFUsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbEltYWdlR2FsbGVyeUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsSW1hZ2VHYWxsZXJ5RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gaXMgdGhlcmUgYXQgbGVhc3Qgb25lIHBpY3R1cmU/XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyBcIl8wXCJdKSB7XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8c3Bhbj57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+O1xuICAgICAgfVxuICAgICAgbGV0IGltYWdlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgXCJfXCIgKyBpXSkge1xuICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyBcIl9cIiArIGldO1xuICAgICAgICAgIGxldCBjdXJyZW50SW1hZ2UgPSA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUuc3JjfSBhbHQ9e3ZhbHVlLmFsdH0vPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcImxlZ2VuZFwifT57dmFsdWUuYWx0fTwvcD5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgaW1hZ2VzLnB1c2goY3VycmVudEltYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBleGl0IGxvb3BcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcm91c2VsIHJlbmRlclRodW1icz17KCkgPT4ge1xuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9fSBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLWltYWdlLWdhbGxlcnlcIiArICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzID8gXCIgXCIgKyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogXCJcIil9PlxuICAgICAgICAgIHtpbWFnZXN9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCcnKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0UmVzcG9uc2l2ZUNhcm91c2VsIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxJbWFnZUdhbGxlcnlGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbWFnZXMiLCJrZXlzIiwibGVuZ3RoIiwiY3VycmVudEltYWdlIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwicHVzaCIsIkNhcm91c2VsIiwicmVuZGVyVGh1bWJzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==