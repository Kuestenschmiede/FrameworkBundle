"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailModalImageGalleryField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailModalImageGalleryField.jsx":
/*!********************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailModalImageGalleryField.jsx ***!
  \********************************************************************************/
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
var DetailModalImageGalleryField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailModalImageGalleryField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DetailModalImageGalleryField);
    _this = _callSuper(this, DetailModalImageGalleryField, [props]);
    _this.state = {
      'src': _this.props.data[_this.props.field.name][0].src,
      'alt': _this.props.data[_this.props.field.name][0].alt,
      'showModal': false
    };
    return _this;
  }
  (0, _inherits2["default"])(DetailModalImageGalleryField, _Component);
  return (0, _createClass2["default"])(DetailModalImageGalleryField, [{
    key: "toggleModal",
    value: function toggleModal(state) {
      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var modalClass = 'modal';
      if (this.state.showModal) {
        modalClass += ' modal-show';
      }
      if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].length > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-field-simple-image-gallery" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: modalClass
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "modal-close",
          onClick: this.toggleModal.bind(this, {
            'showModal': false
          })
        }, "\xD7"), /*#__PURE__*/_react["default"].createElement("img", {
          className: "modal-content",
          src: this.state.src,
          alt: this.state.alt
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-gallery-images"
        }, this.props.data[this.props.field.name].map(function (value, index) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "modal-gallery-image",
            key: index
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: value.src,
            alt: value.alt,
            onClick: _this2.toggleModal.bind(_this2, {
              'src': value.src,
              'alt': value.alt,
              'showModal': true
            })
          }));
        })));
      } else {
        return '';
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxNb2RhbEltYWdlR2FsbGVyeUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQUEsbUJBQUE7QUFBK0QsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNB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RUFBQztBQUFBLEVBM0N1RGtCLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxNb2RhbEltYWdlR2FsbGVyeUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNb2RhbEltYWdlR2FsbGVyeUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAnc3JjJzogdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV1bMF0uc3JjLFxuICAgICAgICAnYWx0JzogdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV1bMF0uYWx0LFxuICAgICAgICAnc2hvd01vZGFsJzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb2RhbENsYXNzID0gJ21vZGFsJztcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93TW9kYWwpIHtcbiAgICAgICAgbW9kYWxDbGFzcyArPSAnIG1vZGFsLXNob3cnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLXNpbXBsZS1pbWFnZS1nYWxsZXJ5XCIgKyAodGhpcy5wcm9wcy5maWVsZC5jbGFzcyA/IFwiIFwiICsgdGhpcy5wcm9wcy5maWVsZC5jbGFzcyA6IFwiXCIpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kYWxDbGFzc30+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJtb2RhbC1jbG9zZVwifSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcywgeydzaG93TW9kYWwnOiBmYWxzZX0pfT4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17XCJtb2RhbC1jb250ZW50XCJ9IHNyYz17dGhpcy5zdGF0ZS5zcmN9IGFsdD17dGhpcy5zdGF0ZS5hbHR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibW9kYWwtZ2FsbGVyeS1pbWFnZXNcIn0+XG4gICAgICAgICAge3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wibW9kYWwtZ2FsbGVyeS1pbWFnZVwifSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLnNyY30gYWx0PXt2YWx1ZS5hbHR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAnc3JjJzogdmFsdWUuc3JjLFxuICAgICAgICAgICAgICAgICAgJ2FsdCc6IHZhbHVlLmFsdCxcbiAgICAgICAgICAgICAgICAgICdzaG93TW9kYWwnOiB0cnVlXG4gICAgICAgICAgICAgIH0pfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCcnKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxNb2RhbEltYWdlR2FsbGVyeUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInN0YXRlIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsInNyYyIsImFsdCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJ0b2dnbGVNb2RhbCIsInNldFN0YXRlIiwicmVuZGVyIiwiX3RoaXMyIiwibW9kYWxDbGFzcyIsInNob3dNb2RhbCIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYmluZCIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==