"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_modal_content_ModalContentForm_jsx"],{

/***/ "./src/Resources/public/js/modal/content/ModalContentForm.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/modal/content/ModalContentForm.jsx ***!
  \********************************************************************/
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
var ModalContentForm = exports["default"] = /*#__PURE__*/function (_Component) {
  function ModalContentForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalContentForm);
    _this = _callSuper(this, ModalContentForm, [props]);
    _this.onConfirm = _this.onConfirm.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ModalContentForm, _Component);
  return (0, _createClass2["default"])(ModalContentForm, [{
    key: "onConfirm",
    value: function onConfirm(event) {
      var form = event.target.parentNode.parentNode.children.item(2);
      if (form.checkValidity()) {
        this.props.onConfirm();
      } else {
        var index = 0;
        var messages = {};
        while (index < form.elements.length) {
          var item = form.elements.item(index);
          messages[item.name] = item.validationMessage;
          index += 1;
        }
        this.props.onInvalid(messages);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className || 'c4g-modal-content'
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'title'
      }, this.props.title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'message'
      }, this.props.message)), /*#__PURE__*/_react["default"].createElement("form", null, this.props.children), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        className: 'highlight',
        type: 'button',
        onClick: this.onConfirm
      }, this.props.confirmButtonText), /*#__PURE__*/_react["default"].createElement("button", {
        className: '',
        type: 'button',
        onClick: this.props.onCancel
      }, this.props.cancelButtonText)));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfbW9kYWxfY29udGVudF9Nb2RhbENvbnRlbnRGb3JtX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFB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QUE4RCxhQUFBO1FBQU1DLFNBQVMsRUFBRTtNQUFVLEdBQUUsSUFBSSxDQUFDekIsS0FBSyxDQUFDMkIsT0FBYyxDQUNuRCxDQUFDLGVBQ05qRSxNQUFBLFlBQUE4RCxhQUFBLGVBQ0csSUFBSSxDQUFDeEIsS0FBSyxDQUFDYSxRQUNSLENBQUMsZUFDUG5ELE1BQUEsWUFBQThELGFBQUEsMkJBQ0U5RCxNQUFBLFlBQUE4RCxhQUFBO1FBQVFDLFNBQVMsRUFBRSxXQUFZO1FBQUNHLElBQUksRUFBRSxRQUFTO1FBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUMxQjtNQUFVLEdBQ3JFLElBQUksQ0FBQ0gsS0FBSyxDQUFDOEIsaUJBQ04sQ0FBQyxlQUNUcEUsTUFBQSxZQUFBOEQsYUFBQTtRQUFRQyxTQUFTLEVBQUUsRUFBRztRQUFDRyxJQUFJLEVBQUUsUUFBUztRQUFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDN0IsS0FBSyxDQUFDK0I7TUFBUyxHQUNqRSxJQUFJLENBQUMvQixLQUFLLENBQUNnQyxnQkFDTixDQUNMLENBQ0YsQ0FBQztJQUVWO0VBQUM7QUFBQSxFQTlDMkNDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvbW9kYWwvY29udGVudC9Nb2RhbENvbnRlbnRGb3JtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29udGVudEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5vbkNvbmZpcm0gPSB0aGlzLm9uQ29uZmlybS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25Db25maXJtKGV2ZW50KSB7XG4gICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuLml0ZW0oMik7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgbGV0IG1lc3NhZ2VzID0ge307XG4gICAgICB3aGlsZSAoaW5kZXggPCBmb3JtLmVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBsZXQgaXRlbSA9IGZvcm0uZWxlbWVudHMuaXRlbShpbmRleCk7XG4gICAgICAgIG1lc3NhZ2VzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkludmFsaWQobWVzc2FnZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICdjNGctbW9kYWwtY29udGVudCd9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3RpdGxlJ30+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydtZXNzYWdlJ30+e3RoaXMucHJvcHMubWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnaGlnaGxpZ2h0J30gdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e3RoaXMub25Db25maXJtfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpcm1CdXR0b25UZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnJ30gdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DYW5jZWx9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2FuY2VsQnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiTW9kYWxDb250ZW50Rm9ybSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJvbkNvbmZpcm0iLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwiZm9ybSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsIml0ZW0iLCJjaGVja1ZhbGlkaXR5IiwiaW5kZXgiLCJtZXNzYWdlcyIsImVsZW1lbnRzIiwibGVuZ3RoIiwibmFtZSIsInZhbGlkYXRpb25NZXNzYWdlIiwib25JbnZhbGlkIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwibWVzc2FnZSIsInR5cGUiLCJvbkNsaWNrIiwiY29uZmlybUJ1dHRvblRleHQiLCJvbkNhbmNlbCIsImNhbmNlbEJ1dHRvblRleHQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9