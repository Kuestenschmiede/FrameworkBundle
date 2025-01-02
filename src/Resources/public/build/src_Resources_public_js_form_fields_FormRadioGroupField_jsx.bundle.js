"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormRadioGroupField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormRadioGroupField.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormRadioGroupField.jsx ***!
  \*********************************************************************/
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
var FormRadioGroupField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormRadioGroupField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormRadioGroupField);
    _this = _callSuper(this, FormRadioGroupField, [props]);
    _this.checkRadioButton = _this.checkRadioButton.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormRadioGroupField, _Component);
  return (0, _createClass2["default"])(FormRadioGroupField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement("span", {
          className: 'custom-label',
          key: 'label'
        }, this.props.field.label);
      }
      var options = [];
      if (this.props.field.cache && this.props.field.entryPoint) {
        var cachedData = localStorage.getItem('form-radiogroup-' + this.props.field.entryPoint + '-' + this.props.field.name);
        if (cachedData) {
          this.props.field.checked = cachedData;
        }
      }
      if (this.props.field.options) {
        var keys = Object.keys(this.props.field.options);
        keys.forEach(function (element, index) {
          var defaultChecked = _this2.props.field.checked === element;
          options.push(/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
            key: index
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: _this2.props.field.optionsClass
          }, /*#__PURE__*/_react["default"].createElement("input", {
            type: "radio",
            id: _this2.props.form.props.name + "_" + _this2.props.field.name + '_' + element,
            name: _this2.props.field.name,
            defaultChecked: defaultChecked,
            value: element,
            required: _this2.props.field.required,
            onChange: _this2.checkRadioButton,
            className: "form-check-input " + _this2.props.field.name + '_' + element
          }), /*#__PURE__*/_react["default"].createElement("label", {
            className: "form-check-label c4g-form-check-label " + _this2.props.field.name + '_' + element,
            htmlFor: _this2.props.form.props.name + "_" + _this2.props.field.name + '_' + element
          }, _this2.props.field.options[element]))));
        }, this);
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "field-description",
          key: 'description'
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.className
      }, label, options, description));
    }
  }, {
    key: "checkRadioButton",
    value: function checkRadioButton(event) {
      var value = event.target.value;
      this.props.data[this.props.field.name] = value;
      this.props.form.props.updateFunction(this.props.form.props.name, this.props.data, this.props.field);
      if (this.props.field.cache && this.props.field.entryPoint) {
        localStorage.setItem('form-radiogroup-' + this.props.field.entryPoint + '-' + this.props.field.name, this.props.data[this.props.field.name]);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      // set initial filter, if a filter is initially checked
      if (this.props.field.cache && this.props.field.entryPoint) {
        var cachedData = localStorage.getItem('form-radiogroup-' + this.props.field.entryPoint + '-' + this.props.field.name);
        if (cachedData) {
          this.props.field.checked = cachedData;
        }
      }
      var keys = Object.keys(this.props.field.options);
      keys.forEach(function (element, index) {
        var defaultChecked = _this3.props.field.checked === element;
        if (defaultChecked) {
          var value = document.getElementById(_this3.props.form.props.name + "_" + _this3.props.field.name + '_' + element).value;
          _this3.props.data[_this3.props.field.name] = value;
          _this3.props.form.props.updateFunction(_this3.props.form.props.name, _this3.props.data, _this3.props.field);
        }
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVJhZGlvR3JvdXBGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FB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SyxDQUFDWSxLQUFLLENBQUNHLE9BQU8sQ0FBQztNQUNoRFEsSUFBSSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7UUFDL0IsSUFBSUMsY0FBYyxHQUFHaUIsTUFBSSxDQUFDNUMsS0FBSyxDQUFDWSxLQUFLLENBQUNVLE9BQU8sS0FBS0csT0FBTztRQUN6RCxJQUFJRSxjQUFjLEVBQUU7VUFDbEIsSUFBSW5CLEtBQUssR0FBR3FDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDRixNQUFJLENBQUM1QyxLQUFLLENBQUNpQyxJQUFJLENBQUNqQyxLQUFLLENBQUNxQixJQUFJLEdBQUcsR0FBRyxHQUFHdUIsTUFBSSxDQUFDNUMsS0FBSyxDQUFDWSxLQUFLLENBQUNTLElBQUksR0FBRyxHQUFHLEdBQUdJLE9BQU8sQ0FBQyxDQUFDakIsS0FBSztVQUNuSG9DLE1BQUksQ0FBQzVDLEtBQUssQ0FBQ3dDLElBQUksQ0FBQ0ksTUFBSSxDQUFDNUMsS0FBSyxDQUFDWSxLQUFLLENBQUNTLElBQUksQ0FBQyxHQUFHYixLQUFLO1VBQzlDb0MsTUFBSSxDQUFDNUMsS0FBSyxDQUFDaUMsSUFBSSxDQUFDakMsS0FBSyxDQUFDeUMsY0FBYyxDQUFDRyxNQUFJLENBQUM1QyxLQUFLLENBQUNpQyxJQUFJLENBQUNqQyxLQUFLLENBQUNxQixJQUFJLEVBQUV1QixNQUFJLENBQUM1QyxLQUFLLENBQUN3QyxJQUFJLEVBQUVJLE1BQUksQ0FBQzVDLEtBQUssQ0FBQ1ksS0FBSyxDQUFDO1FBQ3JHO01BQ0YsQ0FBQyxDQUFDO0lBRUo7RUFBQztBQUFBLEVBcEY4Q21DLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybVJhZGlvR3JvdXBGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUmFkaW9Hcm91cEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoZWNrUmFkaW9CdXR0b24gPSB0aGlzLmNoZWNrUmFkaW9CdXR0b24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgIGxhYmVsID0gKDxzcGFuIGNsYXNzTmFtZT17J2N1c3RvbS1sYWJlbCd9IGtleT17J2xhYmVsJ30+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9zcGFuPik7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gW107XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5jYWNoZSAmJiB0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQpIHtcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybS1yYWRpb2dyb3VwLScgKyB0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQgKyAnLScgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWUpO1xuICAgICAgaWYgKGNhY2hlZERhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5maWVsZC5jaGVja2VkID0gY2FjaGVkRGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5vcHRpb25zKSB7XG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZmllbGQub3B0aW9ucyk7XG4gICAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBkZWZhdWx0Q2hlY2tlZCA9IHRoaXMucHJvcHMuZmllbGQuY2hlY2tlZCA9PT0gZWxlbWVudDtcbiAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNDbGFzc30+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD17dGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUgKyBcIl9cIiArIHRoaXMucHJvcHMuZmllbGQubmFtZSArICdfJyArIGVsZW1lbnR9IG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH0gdmFsdWU9e2VsZW1lbnR9IHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hlY2tSYWRpb0J1dHRvbn0gY2xhc3NOYW1lPXtcImZvcm0tY2hlY2staW5wdXQgXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyAnXycgKyBlbGVtZW50fS8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1wiZm9ybS1jaGVjay1sYWJlbCBjNGctZm9ybS1jaGVjay1sYWJlbCBcIiArIHRoaXMucHJvcHMuZmllbGQubmFtZSArICdfJyArIGVsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSArIFwiX1wiICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJ18nICsgZWxlbWVudH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XX1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNwYW4gY2xhc3NOYW1lPXtcImZpZWxkLWRlc2NyaXB0aW9uXCJ9IGtleT17J2Rlc2NyaXB0aW9uJ30+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zcGFuPik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWV9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGNoZWNrUmFkaW9CdXR0b24oZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybS1yYWRpb2dyb3VwLScrdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KyctJyt0aGlzLnByb3BzLmZpZWxkLm5hbWUsIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBzZXQgaW5pdGlhbCBmaWx0ZXIsIGlmIGEgZmlsdGVyIGlzIGluaXRpYWxseSBjaGVja2VkXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tcmFkaW9ncm91cC0nICsgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50ICsgJy0nICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lKTtcbiAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmllbGQuY2hlY2tlZCA9IGNhY2hlZERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnMpO1xuICAgIGtleXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBkZWZhdWx0Q2hlY2tlZCA9IHRoaXMucHJvcHMuZmllbGQuY2hlY2tlZCA9PT0gZWxlbWVudDtcbiAgICAgIGlmIChkZWZhdWx0Q2hlY2tlZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSArIFwiX1wiICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJ18nICsgZWxlbWVudCkudmFsdWU7XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5kYXRhLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRm9ybVJhZGlvR3JvdXBGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJjaGVja1JhZGlvQnV0dG9uIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJsYWJlbCIsImZpZWxkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJjYWNoZSIsImVudHJ5UG9pbnQiLCJjYWNoZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5hbWUiLCJjaGVja2VkIiwia2V5cyIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJkZWZhdWx0Q2hlY2tlZCIsInB1c2giLCJGcmFnbWVudCIsIm9wdGlvbnNDbGFzcyIsInR5cGUiLCJpZCIsImZvcm0iLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXRhIiwidXBkYXRlRnVuY3Rpb24iLCJzZXRJdGVtIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==