"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_FilterButton_jsx"],{

/***/ "./src/Resources/public/js/form/button/FilterButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/form/button/FilterButton.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var FilterButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function FilterButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FilterButton);
    _this = _callSuper(this, FilterButton, [props]);
    _this.clickButton = _this.clickButton.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FilterButton, _Component);
  return (0, _createClass2["default"])(FilterButton, [{
    key: "clickButton",
    value: function clickButton() {
      this.props.form.activeButton = this;
    }
  }, {
    key: "submitCallback",
    value: function submitCallback(form, event) {
      event.preventDefault();
      event.stopPropagation();
      this.setFilter(form);
      if (form.props.component.toggleableLayout && form.state.toggled) {
        form.toggleForm();
      }
    }
  }, {
    key: "setFilter",
    value: function setFilter(form) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var keys = Object.keys(form.props.component.data);
      var formData = {};
      var data = form.props.component.data;
      keys.forEach(function (element) {
        if ((0, _typeof2["default"])(data[element]) === 'object' && data[element] !== null && typeof data[element].forEach !== 'function') {
          try {
            formData[element] = data[element].value;
          } catch (e) {
            console.error(e);
          }
        } else {
          formData[element] = data[element];
        }
      });
      form.props.setFilterDataFunction(this.props.button.targetComponent, formData, initial);
      this.props.form.activeButton = null;
    }
  }, {
    key: "checkFilter",
    value: function checkFilter() {
      var result = false;
      var fields = this.props.form.props.component.fields;
      fields.forEach(function (field) {
        if (field.name != 'moduleId') {
          if ((!result || result == null) && field.type == "checkboximage") {
            result = localStorage.getItem('form-multicheckbox-' + field.entryPoint + '-' + field.name);
          }
          if ((!result || result == null) && field.type == "daterange") {
            result = localStorage.getItem('form-daterange-' + field.entryPoint + '-' + field.name);
          }
          if ((!result || result == null) && field.type == "radio") {
            result = localStorage.getItem('form-radiogroup-' + field.entryPoint + '-' + field.name);
          }
          if ((!result || result == null) && field.type == "select") {
            result = localStorage.getItem('form-select-' + field.entryPoint + '-' + field.name);
          }
          if ((!result || result == null) && field.type == "text") {
            result = localStorage.getItem('form-text-' + field.entryPoint + '-' + field.name);
          }
        }
        ;
      });
      return result && result !== null ? true : false;
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var keys = Object.keys(this.props.form.props.component.data);
      var formData = {};
      var fields = this.props.form.props.component.fields;
      var data = this.props.form.props.component.data;
      fields.forEach(function (field) {
        if (field.name != 'moduleId') {
          formData[field.name] = '';
          if (field.type == "checkboximage") {
            localStorage.removeItem('form-multicheckbox-' + field.entryPoint + '-' + field.name);
          }
          if (field.type == "daterange") {
            localStorage.removeItem('form-form-daterange-' + field.entryPoint + '-' + field.name);
          }
          if (field.type == "radio") {
            localStorage.removeItem('form-radiogroup-' + field.entryPoint + '-' + field.name);
          }
          if (field.type == "select") {
            localStorage.removeItem('form-select-' + field.entryPoint + '-' + field.name);
          }
          if (field.type == "text") {
            localStorage.removeItem('form-text-' + field.entryPoint + '-' + field.name);
          }
        } else {
          formData[field] = data[field];
        }
      });
      this.props.form.props.setFilterDataFunction(this.props.button.targetComponent, formData, false);
      this.props.form.activeButton = null;
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.checkFilter() == true) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.button.outerClass || ""
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.button.className,
          type: "submit",
          onClick: this.clickButton
        }, this.props.button.caption), /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.button.className + '-reset c4g-btn-reset',
          type: "submit",
          onClick: function onClick() {
            _this2.resetFilter();
          }
        }, this.props.button.resetFilterCaption));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.button.outerClass || ""
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.button.className,
          type: "submit",
          onClick: this.clickButton
        }, this.props.button.caption));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      jQuery(document).ready(function () {
        _this3.setFilter(_this3.props.form, true);
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fRmlsdGVyQnV0dG9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxRQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFB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QUEsRUFBRztNQUFBLElBQUFDLE1BQUE7TUFDbEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFNO1FBQzNCSCxNQUFJLENBQUNyRCxTQUFTLENBQUNxRCxNQUFJLENBQUMzRCxLQUFLLENBQUNXLElBQUksRUFBRSxJQUFJLENBQUM7TUFDdkMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBLEVBakl1Q29ELGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9idXR0b24vRmlsdGVyQnV0dG9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbGlja0J1dHRvbiA9IHRoaXMuY2xpY2tCdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdENhbGxiYWNrID0gdGhpcy5zdWJtaXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RmlsdGVyID0gdGhpcy5zZXRGaWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsaWNrQnV0dG9uKCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSB0aGlzO1xuICB9XG5cbiAgc3VibWl0Q2FsbGJhY2soZm9ybSwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zZXRGaWx0ZXIoZm9ybSk7XG4gICAgaWYgKGZvcm0ucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVMYXlvdXQgJiYgZm9ybS5zdGF0ZS50b2dnbGVkKSB7XG4gICAgICBmb3JtLnRvZ2dsZUZvcm0oKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIoZm9ybSwgaW5pdGlhbCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhmb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhKTtcbiAgICBsZXQgZm9ybURhdGEgPSB7fTtcbiAgICBjb25zdCBkYXRhID0gZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YTtcbiAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ29iamVjdCcgJiYgZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgZGF0YVtlbGVtZW50XS5mb3JFYWNoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9ybURhdGFbZWxlbWVudF0gPSBkYXRhW2VsZW1lbnRdLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybURhdGFbZWxlbWVudF0gPSBkYXRhW2VsZW1lbnRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvcm0ucHJvcHMuc2V0RmlsdGVyRGF0YUZ1bmN0aW9uKHRoaXMucHJvcHMuYnV0dG9uLnRhcmdldENvbXBvbmVudCwgZm9ybURhdGEsIGluaXRpYWwpO1xuICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgY2hlY2tGaWx0ZXIoKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZmllbGRzO1xuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLm5hbWUgIT0gJ21vZHVsZUlkJykge1xuICAgICAgICBpZiAoKCFyZXN1bHQgfHwgcmVzdWx0ID09IG51bGwpICYmIChmaWVsZC50eXBlID09IFwiY2hlY2tib3hpbWFnZVwiKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtLW11bHRpY2hlY2tib3gtJyArIGZpZWxkLmVudHJ5UG9pbnQgKyAnLScgKyBmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKCFyZXN1bHQgfHwgcmVzdWx0ID09IG51bGwpICYmIChmaWVsZC50eXBlID09IFwiZGF0ZXJhbmdlXCIpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tZGF0ZXJhbmdlLScgKyBmaWVsZC5lbnRyeVBvaW50ICsgJy0nICsgZmllbGQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCghcmVzdWx0IHx8IHJlc3VsdCA9PSBudWxsKSAmJiAoZmllbGQudHlwZSA9PSBcInJhZGlvXCIpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tcmFkaW9ncm91cC0nICsgZmllbGQuZW50cnlQb2ludCArICctJyArIGZpZWxkLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoIXJlc3VsdCB8fCByZXN1bHQgPT0gbnVsbCkgJiYgKGZpZWxkLnR5cGUgPT0gXCJzZWxlY3RcIikpIHtcbiAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybS1zZWxlY3QtJyArIGZpZWxkLmVudHJ5UG9pbnQgKyAnLScgKyBmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKCFyZXN1bHQgfHwgcmVzdWx0ID09IG51bGwpICYmIChmaWVsZC50eXBlID09IFwidGV4dFwiKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtLXRleHQtJyArIGZpZWxkLmVudHJ5UG9pbnQgKyAnLScgKyBmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0ICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcmVzZXRGaWx0ZXIoKSB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZvcm0ucHJvcHMuY29tcG9uZW50LmRhdGEpO1xuXG4gICAgbGV0IGZvcm1EYXRhID0ge307XG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5maWVsZHM7XG4gICAgY29uc3QgZGF0YSA9ICB0aGlzLnByb3BzLmZvcm0ucHJvcHMuY29tcG9uZW50LmRhdGE7XG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQubmFtZSAhPSAnbW9kdWxlSWQnKSB7XG4gICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gJyc7XG5cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gXCJjaGVja2JveGltYWdlXCIpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybS1tdWx0aWNoZWNrYm94LScrZmllbGQuZW50cnlQb2ludCsnLScrZmllbGQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gXCJkYXRlcmFuZ2VcIikge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtLWZvcm0tZGF0ZXJhbmdlLScrZmllbGQuZW50cnlQb2ludCsnLScrZmllbGQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2Zvcm0tcmFkaW9ncm91cC0nK2ZpZWxkLmVudHJ5UG9pbnQrJy0nK2ZpZWxkLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybS1zZWxlY3QtJytmaWVsZC5lbnRyeVBvaW50KyctJytmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGQudHlwZSA9PSBcInRleHRcIikge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtLXRleHQtJytmaWVsZC5lbnRyeVBvaW50KyctJytmaWVsZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybURhdGFbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMuc2V0RmlsdGVyRGF0YUZ1bmN0aW9uKHRoaXMucHJvcHMuYnV0dG9uLnRhcmdldENvbXBvbmVudCwgZm9ybURhdGEsIGZhbHNlKTtcbiAgICB0aGlzLnByb3BzLmZvcm0uYWN0aXZlQnV0dG9uID0gbnVsbDtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tGaWx0ZXIoKSA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24ub3V0ZXJDbGFzcyB8fCBcIlwifT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24uY2xhc3NOYW1lfSB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tCdXR0b259Pnt0aGlzLnByb3BzLmJ1dHRvbi5jYXB0aW9ufTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJ1dHRvbi5jbGFzc05hbWUgKyAnLXJlc2V0IGM0Zy1idG4tcmVzZXQnfSB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpXG4gICAgICAgICAgfX0+e3RoaXMucHJvcHMuYnV0dG9uLnJlc2V0RmlsdGVyQ2FwdGlvbn08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24ub3V0ZXJDbGFzcyB8fCBcIlwifT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24uY2xhc3NOYW1lfSB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xpY2tCdXR0b259Pnt0aGlzLnByb3BzLmJ1dHRvbi5jYXB0aW9ufTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEZpbHRlcih0aGlzLnByb3BzLmZvcm0sIHRydWUpO1xuICAgIH0pO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mMyIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRmlsdGVyQnV0dG9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNsaWNrQnV0dG9uIiwiYmluZCIsInN1Ym1pdENhbGxiYWNrIiwic2V0RmlsdGVyIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImZvcm0iLCJhY3RpdmVCdXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29tcG9uZW50IiwidG9nZ2xlYWJsZUxheW91dCIsInN0YXRlIiwidG9nZ2xlZCIsInRvZ2dsZUZvcm0iLCJpbml0aWFsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwia2V5cyIsImRhdGEiLCJmb3JtRGF0YSIsImZvckVhY2giLCJlbGVtZW50IiwiX3R5cGVvZjIiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRGaWx0ZXJEYXRhRnVuY3Rpb24iLCJidXR0b24iLCJ0YXJnZXRDb21wb25lbnQiLCJjaGVja0ZpbHRlciIsInJlc3VsdCIsImZpZWxkcyIsImZpZWxkIiwibmFtZSIsInR5cGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW50cnlQb2ludCIsInJlc2V0RmlsdGVyIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm91dGVyQ2xhc3MiLCJvbkNsaWNrIiwiY2FwdGlvbiIsInJlc2V0RmlsdGVyQ2FwdGlvbiIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMzIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=