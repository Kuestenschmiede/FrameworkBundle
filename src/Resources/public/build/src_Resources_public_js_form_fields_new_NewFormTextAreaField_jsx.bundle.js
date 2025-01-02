"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_new_NewFormTextAreaField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/new/NewFormTextAreaField.jsx":
/*!**************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/new/NewFormTextAreaField.jsx ***!
  \**************************************************************************/
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
var NewFormTextAreaField = exports["default"] = /*#__PURE__*/function (_Component) {
  function NewFormTextAreaField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, NewFormTextAreaField);
    _this = _callSuper(this, NewFormTextAreaField, [props]);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(NewFormTextAreaField, _Component);
  return (0, _createClass2["default"])(NewFormTextAreaField, [{
    key: "onChange",
    value: function onChange(event) {
      this.props.onChange(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = [];
      classes.push('c4g-form-field c4g-form-group');
      classes.push(this.props.className ? ' ' + this.props.className : '');
      classes.push(this.props.error ? ' c4g-invalid' : '');
      classes.push(this.props.required ? ' c4g-required' : '');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.join('')
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: 'c4g-label-outer'
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-label-inner'
      }, this.props.label), /*#__PURE__*/_react["default"].createElement("textarea", {
        name: this.props.name,
        value: this.props.value,
        maxLength: this.props.maxLength,
        className: 'c4g-form-control c4g-textarea',
        onChange: this.onChange,
        required: this.props.required
      })), this.props.description && /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-description'
      }, this.props.description), this.props.error && /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-error'
      }, this.props.error));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfbmV3X05ld0Zvcm1UZXh0QXJlYUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFB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Q0FBQ3JCLEtBQUssQ0FBQ3FCLFNBQVU7UUFDaENQLFNBQVMsRUFBRSwrQkFBZ0M7UUFDM0NYLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVM7UUFDeEJhLFFBQVEsRUFBRSxJQUFJLENBQUNoQixLQUFLLENBQUNnQjtNQUFTLENBQzdCLENBQ04sQ0FBQyxFQUNQLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ3NCLFdBQVcsaUJBQUk1RCxNQUFBLFlBQUF1RCxhQUFBO1FBQU1ILFNBQVMsRUFBRTtNQUFrQixHQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDc0IsV0FBa0IsQ0FBQyxFQUM3RixJQUFJLENBQUN0QixLQUFLLENBQUNlLEtBQUssaUJBQUlyRCxNQUFBLFlBQUF1RCxhQUFBO1FBQU1ILFNBQVMsRUFBRTtNQUFZLEdBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUNlLEtBQVksQ0FDeEUsQ0FBQztJQUVSO0VBQUM7QUFBQSxFQWxDK0NRLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvbmV3L05ld0Zvcm1UZXh0QXJlYUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0Zvcm1UZXh0QXJlYUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbXTtcbiAgICBjbGFzc2VzLnB1c2goJ2M0Zy1mb3JtLWZpZWxkIGM0Zy1mb3JtLWdyb3VwJyk7XG4gICAgY2xhc3Nlcy5wdXNoKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJyk7XG4gICAgY2xhc3Nlcy5wdXNoKHRoaXMucHJvcHMuZXJyb3IgPyAnIGM0Zy1pbnZhbGlkJyA6ICcnKTtcbiAgICBjbGFzc2VzLnB1c2godGhpcy5wcm9wcy5yZXF1aXJlZCA/ICcgYzRnLXJlcXVpcmVkJyA6ICcnKTtcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignJyl9PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17J2M0Zy1sYWJlbC1vdXRlcid9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydjNGctbGFiZWwtaW5uZXInfT57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17dGhpcy5wcm9wcy5tYXhMZW5ndGh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjNGctZm9ybS1jb250cm9sIGM0Zy10ZXh0YXJlYSd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbiAmJiA8c3BhbiBjbGFzc05hbWU9eydjNGctZGVzY3JpcHRpb24nfT57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L3NwYW4+fVxuICAgICAge3RoaXMucHJvcHMuZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLWVycm9yJ30+e3RoaXMucHJvcHMuZXJyb3J9PC9zcGFuPn1cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiTmV3Rm9ybVRleHRBcmVhRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwib25DaGFuZ2UiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwicmVuZGVyIiwiY2xhc3NlcyIsInB1c2giLCJjbGFzc05hbWUiLCJlcnJvciIsInJlcXVpcmVkIiwiY3JlYXRlRWxlbWVudCIsImpvaW4iLCJsYWJlbCIsIm5hbWUiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=