"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_SubmitButton_jsx"],{

/***/ "./src/Resources/public/js/form/button/SubmitButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/form/button/SubmitButton.jsx ***!
  \**************************************************************/
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
var SubmitButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function SubmitButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SubmitButton);
    _this = _callSuper(this, SubmitButton, [props]);
    _this.clickButton = _this.clickButton.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(SubmitButton, _Component);
  return (0, _createClass2["default"])(SubmitButton, [{
    key: "clickButton",
    value: function clickButton() {
      this.props.form.activeButton = this;
    }
  }, {
    key: "submitCallback",
    value: function submitCallback(form, event) {
      this.props.form.activeButton = null;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.button.className + " btn btn-primary",
        type: "submit",
        name: this.props.button.name,
        value: this.props.button.value,
        onClick: this.clickButton
      }, this.props.button.caption);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fU3VibWl0QnV0dG9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFWdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFZcUI0QixZQUFZLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBQy9CLFNBQUFGLGFBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUwsWUFBQTtJQUNqQkksS0FBQSxHQUFBaEIsVUFBQSxPQUFBWSxZQUFBLEdBQU1HLEtBQUs7SUFFWEMsS0FBQSxDQUFLRSxXQUFXLEdBQUdGLEtBQUEsQ0FBS0UsV0FBVyxDQUFDQyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUM5Q0EsS0FBQSxDQUFLSSxjQUFjLEdBQUdKLEtBQUEsQ0FBS0ksY0FBYyxDQUFDRCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDdkQ7RUFBQyxJQUFBSyxVQUFBLGFBQUFULFlBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFRLGFBQUEsYUFBQVYsWUFBQTtJQUFBVyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTixXQUFXQSxDQUFBLEVBQUc7TUFDWixJQUFJLENBQUNILEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSTtJQUNyQztFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLGNBQWNBLENBQUNLLElBQUksRUFBRUUsS0FBSyxFQUFFO01BQzFCLElBQUksQ0FBQ1osS0FBSyxDQUFDVSxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJO0lBQ3JDO0VBQUM7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUksTUFBTUEsQ0FBQSxFQUFHO01BQ1Asb0JBQ0VuRCxNQUFBLFlBQUFvRCxhQUFBO1FBQVFDLFNBQVMsRUFBRSxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQ0QsU0FBUyxHQUFHLGtCQUFtQjtRQUM1REUsSUFBSSxFQUFDLFFBQVE7UUFDYkMsSUFBSSxFQUFFLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQ0UsSUFBSztRQUM3QlQsS0FBSyxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDZ0IsTUFBTSxDQUFDUCxLQUFNO1FBQy9CVSxPQUFPLEVBQUUsSUFBSSxDQUFDaEI7TUFBWSxHQUMvQixJQUFJLENBQUNILEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQ0ksT0FDYixDQUFDO0lBRWI7RUFBQztBQUFBLEVBMUJ1Q0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2J1dHRvbi9TdWJtaXRCdXR0b24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VibWl0QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNsaWNrQnV0dG9uID0gdGhpcy5jbGlja0J1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3VibWl0Q2FsbGJhY2sgPSB0aGlzLnN1Ym1pdENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGlja0J1dHRvbigpIHtcbiAgICB0aGlzLnByb3BzLmZvcm0uYWN0aXZlQnV0dG9uID0gdGhpcztcbiAgfVxuXG4gIHN1Ym1pdENhbGxiYWNrKGZvcm0sIGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5mb3JtLmFjdGl2ZUJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJ1dHRvbi5jbGFzc05hbWUgKyBcIiBidG4gYnRuLXByaW1hcnlcIn1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuYnV0dG9uLm5hbWV9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmJ1dHRvbi52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0J1dHRvbn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbi5jYXB0aW9ufVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiU3VibWl0QnV0dG9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNsaWNrQnV0dG9uIiwiYmluZCIsInN1Ym1pdENhbGxiYWNrIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImZvcm0iLCJhY3RpdmVCdXR0b24iLCJldmVudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwibmFtZSIsIm9uQ2xpY2siLCJjYXB0aW9uIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==