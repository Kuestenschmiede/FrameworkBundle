"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileTextField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileTextField.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileTextField.jsx ***!
  \****************************************************************/
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
var TileTextField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileTextField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileTextField);
    _this = _callSuper(this, TileTextField, [props]);
    _this.format = _this.format.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TileTextField, _Component);
  return (0, _createClass2["default"])(TileTextField, [{
    key: "format",
    value: function format(value) {
      return this.props.field.format.replace(/%s/g, value);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label), "\xA0");
        }
        var itemProp = null;
        if (this.props.field.itemProp) {
          itemProp = this.props.field.itemProp;
        }
        var value = this.props.data[this.props.field.name];
        if (typeof this.props.field.format === 'string' && this.props.field.format !== '') {
          value = this.format(value);
        }
        var additionalClass = '';
        if (value && this.props.field.generateValueClasses) {
          additionalClass = value.toLowerCase().toString().replace(/[ |\&\(\)=>]/g, '');
          additionalClass = additionalClass.toString().replace('ü', 'ue');
          additionalClass = additionalClass.toString().replace('ö', 'oe');
          additionalClass = additionalClass.toString().replace('ä', 'ae');
          additionalClass = additionalClass.toString().replace('ß', 'ss');
          additionalClass = ' ' + this.props.field["class"] + '--' + additionalClass;
        }
        return /*#__PURE__*/_react["default"].createElement(Condition, {
          data: this.props.data,
          conditions: this.props.field.conditions
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, /*#__PURE__*/_react["default"].createElement("span", {
          className: this.props.field["class"] + additionalClass,
          itemProp: itemProp
        }, value)));
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVUZXh0RmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFB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QUFBLFlBQUF3RCxhQUFBO1VBQUtFLFNBQVMsRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNTLEtBQUssQ0FBQ2U7UUFBYSxHQUN6Q1YsS0FBSyxlQUNSdkQsTUFBQSxZQUFBd0QsYUFBQTtVQUFNRSxTQUFTLEVBQUUsSUFBSSxDQUFDakIsS0FBSyxDQUFDUyxLQUFLLFNBQU0sR0FBQ1UsZUFBZ0I7VUFBQ0QsUUFBUSxFQUFFQTtRQUFTLEdBQ3pFVixLQUNHLENBQ0gsQ0FDSSxDQUFDO01BRWhCO01BQ0EsT0FBUSxFQUFFO0lBRVo7RUFBQztBQUFBLEVBcER3Q2lCLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvZmllbGRzL1RpbGVUZXh0RmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29uZGl0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb25kaXRpb24vQ29uZGl0aW9uLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVUZXh0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5mb3JtYXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGZvcm1hdCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmZpZWxkLmZvcm1hdC5yZXBsYWNlKC8lcy9nLCB2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSB7XG4gICAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImVudHJ5LWxhYmVsXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj4mbmJzcDtcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgICB9XG4gICAgICBsZXQgaXRlbVByb3AgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaXRlbVByb3ApIHtcbiAgICAgICAgaXRlbVByb3AgPSB0aGlzLnByb3BzLmZpZWxkLml0ZW1Qcm9wO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZmllbGQuZm9ybWF0ID09PSAnc3RyaW5nJyAmJiB0aGlzLnByb3BzLmZpZWxkLmZvcm1hdCAhPT0gJycpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhZGRpdGlvbmFsQ2xhc3MgPSAnJztcbiAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLnByb3BzLmZpZWxkLmdlbmVyYXRlVmFsdWVDbGFzc2VzKSB7XG4gICAgICAgIGFkZGl0aW9uYWxDbGFzcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkudG9TdHJpbmcoKS5yZXBsYWNlKC9bIHxcXCZcXChcXCk9Pl0vZywnJyk7XG4gICAgICAgIGFkZGl0aW9uYWxDbGFzcyA9IGFkZGl0aW9uYWxDbGFzcy50b1N0cmluZygpLnJlcGxhY2UoJ8O8JywndWUnKTtcbiAgICAgICAgYWRkaXRpb25hbENsYXNzID0gYWRkaXRpb25hbENsYXNzLnRvU3RyaW5nKCkucmVwbGFjZSgnw7YnLCdvZScpO1xuICAgICAgICBhZGRpdGlvbmFsQ2xhc3MgPSBhZGRpdGlvbmFsQ2xhc3MudG9TdHJpbmcoKS5yZXBsYWNlKCfDpCcsJ2FlJyk7XG4gICAgICAgIGFkZGl0aW9uYWxDbGFzcyA9IGFkZGl0aW9uYWxDbGFzcy50b1N0cmluZygpLnJlcGxhY2UoJ8OfJywnc3MnKTtcblxuICAgICAgICBhZGRpdGlvbmFsQ2xhc3MgPSAnICcrdGhpcy5wcm9wcy5maWVsZC5jbGFzcysnLS0nK2FkZGl0aW9uYWxDbGFzcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbmRpdGlvbiBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGNvbmRpdGlvbnM9e3RoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQud3JhcHBlckNsYXNzfT5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmNsYXNzK2FkZGl0aW9uYWxDbGFzc30gaXRlbVByb3A9e2l0ZW1Qcm9wfT5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbmRpdGlvbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoJycpXG5cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ29uZGl0aW9uIiwiUmVhY3QiLCJsYXp5IiwiVGlsZVRleHRGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJmb3JtYXQiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImZpZWxkIiwicmVwbGFjZSIsInJlbmRlciIsImRhdGEiLCJuYW1lIiwibGFiZWwiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJpdGVtUHJvcCIsImFkZGl0aW9uYWxDbGFzcyIsImdlbmVyYXRlVmFsdWVDbGFzc2VzIiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsImNvbmRpdGlvbnMiLCJ3cmFwcGVyQ2xhc3MiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9