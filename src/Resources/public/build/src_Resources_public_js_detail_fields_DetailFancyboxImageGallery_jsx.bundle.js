"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailFancyboxImageGallery_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailFancyboxImageGallery.jsx":
/*!******************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailFancyboxImageGallery.jsx ***!
  \******************************************************************************/
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
var DetailFancyboxImageGallery = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailFancyboxImageGallery(props) {
    (0, _classCallCheck2["default"])(this, DetailFancyboxImageGallery);
    return _callSuper(this, DetailFancyboxImageGallery, [props]);
  }
  (0, _inherits2["default"])(DetailFancyboxImageGallery, _Component);
  return (0, _createClass2["default"])(DetailFancyboxImageGallery, [{
    key: "render",
    value: function render() {
      var _this = this;
      var imageData = this.createImageData();
      if (imageData.length === 0) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field["class"]
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-view__image-gallery-inner"
      }, imageData.map(function (value, index) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          key: index,
          "data-fancybox": "gallery_" + _this.props.field.name,
          href: value.src,
          className: _this.props.field.name + "-item" + (index === 0 ? " first" : "")
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "img-fluid",
          src: value.src,
          alt: value.alt,
          width: value.width,
          height: value.height
        }));
      })));
    }

    /**
     * Creates formatted data for display from the given input data.
     */
  }, {
    key: "createImageData",
    value: function createImageData() {
      var name = this.props.field.name;
      var data = this.props.data;
      var images = [];
      var index = 0;
      while (data[name + "_" + index]) {
        images.push(data[name + "_" + index]);
        index++;
      }
      return images;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxGYW5jeWJveEltYWdlR2FsbGVyeV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEs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QU1NLElBQUksR0FBRyxJQUFJLENBQUN0QixLQUFLLENBQUNzQixJQUFJO01BQzVCLElBQUlDLE1BQU0sR0FBRyxFQUFFO01BQ2YsSUFBSVIsS0FBSyxHQUFHLENBQUM7TUFDYixPQUFPTyxJQUFJLENBQUNOLElBQUksR0FBRyxHQUFHLEdBQUdELEtBQUssQ0FBQyxFQUFFO1FBQy9CUSxNQUFNLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDTixJQUFJLEdBQUcsR0FBRyxHQUFHRCxLQUFLLENBQUMsQ0FBQztRQUNyQ0EsS0FBSyxFQUFFO01BQ1Q7TUFFQSxPQUFPUSxNQUFNO0lBRWY7RUFBQztBQUFBLEVBekNxREUsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbEZhbmN5Ym94SW1hZ2VHYWxsZXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbEZhbmN5Ym94SW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGltYWdlRGF0YSA9IHRoaXMuY3JlYXRlSW1hZ2VEYXRhKCk7XG4gICAgaWYgKGltYWdlRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtdmlld19faW1hZ2UtZ2FsbGVyeS1pbm5lclwifT5cbiAgICAgICAgICB7aW1hZ2VEYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGEga2V5PXtpbmRleH0gZGF0YS1mYW5jeWJveD17XCJnYWxsZXJ5X1wiICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lfSBocmVmPXt2YWx1ZS5zcmN9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lICsgXCItaXRlbVwiICsgKGluZGV4ID09PSAwID8gXCIgZmlyc3RcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e1wiaW1nLWZsdWlkXCJ9IHNyYz17dmFsdWUuc3JjfSBhbHQ9e3ZhbHVlLmFsdH0gd2lkdGg9e3ZhbHVlLndpZHRofSBoZWlnaHQ9e3ZhbHVlLmhlaWdodH0gLz5cbiAgICAgICAgICAgIDwvYT47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGZvcm1hdHRlZCBkYXRhIGZvciBkaXNwbGF5IGZyb20gdGhlIGdpdmVuIGlucHV0IGRhdGEuXG4gICAqL1xuICBjcmVhdGVJbWFnZURhdGEoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucHJvcHMuZmllbGQubmFtZTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGxldCBpbWFnZXMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChkYXRhW25hbWUgKyBcIl9cIiArIGluZGV4XSkge1xuICAgICAgaW1hZ2VzLnB1c2goZGF0YVtuYW1lICsgXCJfXCIgKyBpbmRleF0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VzO1xuXG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxGYW5jeWJveEltYWdlR2FsbGVyeSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzIiwiaW1hZ2VEYXRhIiwiY3JlYXRlSW1hZ2VEYXRhIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImZpZWxkIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsImltYWdlcyIsInB1c2giLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9