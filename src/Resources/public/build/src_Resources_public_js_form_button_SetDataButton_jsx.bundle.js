"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_SetDataButton_jsx"],{

/***/ "./src/Resources/public/js/form/button/SetDataButton.jsx":
/*!***************************************************************!*\
  !*** ./src/Resources/public/js/form/button/SetDataButton.jsx ***!
  \***************************************************************/
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
var SetDataButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function SetDataButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, SetDataButton);
    _this = _callSuper(this, SetDataButton, [props]);
    _this.clickButton = _this.clickButton.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(SetDataButton, _Component);
  return (0, _createClass2["default"])(SetDataButton, [{
    key: "clickButton",
    value: function clickButton() {
      this.props.form.activeButton = this;
    }
  }, {
    key: "submitCallback",
    value: function submitCallback(form, event) {
      var _this2 = this;
      event.preventDefault();
      event.stopPropagation();
      var url = this.props.button.asyncUrl;
      var body = '';
      var keys = Object.keys(form.props.component.data);
      var formData = {};
      keys.forEach(function (element) {
        if (body !== '') {
          body += '&';
        }
        body += element + '=' + form.props.component.data[element];
        formData[element] = form.props.component.data[element];
      });
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        form.props.setFunction(_this2.props.button.targetComponent, data, formData);
      });
      this.props.form.activeButton = null;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.button.className,
        type: "submit",
        onClick: this.clickButton
      }, this.props.button.caption);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fU2V0RGF0YUJ1dHRvbl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFB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O1FBQ2RDLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRTtRQUNsQixDQUFDO1FBQ0RULElBQUksRUFBRUE7TUFDUixDQUFDLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLFVBQVNDLFFBQVEsRUFBRTtRQUN6QixPQUFPQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQ3hCLENBQUMsQ0FBQyxDQUFDRixJQUFJLENBQUMsVUFBQVAsSUFBSSxFQUFJO1FBQ2RaLElBQUksQ0FBQ1YsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDbkIsTUFBSSxDQUFDYixLQUFLLENBQUNpQixNQUFNLENBQUNnQixlQUFlLEVBQUVYLElBQUksRUFBRUMsUUFBUSxDQUFDO01BQzNFLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSTtJQUNyQztFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QixNQUFNQSxDQUFBLEVBQUc7TUFDUCxvQkFDRXhFLE1BQUEsWUFBQXlFLGFBQUE7UUFBUUMsU0FBUyxFQUFFLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQ21CLFNBQVU7UUFBQ0MsSUFBSSxFQUFDLFFBQVE7UUFBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ25DO01BQVksR0FBRSxJQUFJLENBQUNILEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQ3NCLE9BQWdCLENBQUM7SUFFakk7RUFBQztBQUFBLEVBOUN3Q0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2J1dHRvbi9TZXREYXRhQnV0dG9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldERhdGFCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2xpY2tCdXR0b24gPSB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRDYWxsYmFjayA9IHRoaXMuc3VibWl0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsaWNrQnV0dG9uKCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSB0aGlzO1xuICB9XG5cbiAgc3VibWl0Q2FsbGJhY2soZm9ybSwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMuYnV0dG9uLmFzeW5jVXJsO1xuICAgIGxldCBib2R5ID0gJyc7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhKTtcbiAgICBsZXQgZm9ybURhdGEgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChib2R5ICE9PSAnJykge1xuICAgICAgICBib2R5ICs9ICcmJztcbiAgICAgIH1cbiAgICAgIGJvZHkgKz0gZWxlbWVudCArICc9JyArIGZvcm0ucHJvcHMuY29tcG9uZW50LmRhdGFbZWxlbWVudF07XG4gICAgICBmb3JtRGF0YVtlbGVtZW50XSA9IGZvcm0ucHJvcHMuY29tcG9uZW50LmRhdGFbZWxlbWVudF07XG4gICAgfSk7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGJvZHlcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICBmb3JtLnByb3BzLnNldEZ1bmN0aW9uKHRoaXMucHJvcHMuYnV0dG9uLnRhcmdldENvbXBvbmVudCwgZGF0YSwgZm9ybURhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5mb3JtLmFjdGl2ZUJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJ1dHRvbi5jbGFzc05hbWV9IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmNsaWNrQnV0dG9ufT57dGhpcy5wcm9wcy5idXR0b24uY2FwdGlvbn08L2J1dHRvbj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJTZXREYXRhQnV0dG9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNsaWNrQnV0dG9uIiwiYmluZCIsInN1Ym1pdENhbGxiYWNrIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImZvcm0iLCJhY3RpdmVCdXR0b24iLCJldmVudCIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXJsIiwiYnV0dG9uIiwiYXN5bmNVcmwiLCJib2R5Iiwia2V5cyIsImNvbXBvbmVudCIsImRhdGEiLCJmb3JtRGF0YSIsImZvckVhY2giLCJlbGVtZW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldEZ1bmN0aW9uIiwidGFyZ2V0Q29tcG9uZW50IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiY2FwdGlvbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=