"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormDatepickerField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormDatepickerField.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormDatepickerField.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactDatepicker = _interopRequireDefault(__webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js"));
__webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../util/conditions */ "./src/Resources/public/js/util/conditions.js"));
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
var FormDatepickerField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormDatepickerField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormDatepickerField);
    _this = _callSuper(this, FormDatepickerField, [props]);
    _this.pickerRef = null;
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleChangeRaw = _this.handleChangeRaw.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormDatepickerField, _Component);
  return (0, _createClass2["default"])(FormDatepickerField, [{
    key: "handleChange",
    value: function handleChange(date, event) {
      if (date !== null) {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, date.getTime() / 1000), this.props.field);
      } else {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, ''), this.props.field);
      }
      event.preventDefault(); // needed to close the picker
    }
  }, {
    key: "handleChangeRaw",
    value: function handleChangeRaw(event) {
      event.preventDefault(); // prevents user input
    }
  }, {
    key: "render",
    value: function render() {
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var label = null;
      if (this.props.field.label) {
        label = this.props.field.label;
      }
      var description = null;
      if (this.props.field.description) {
        description = this.props.field.description;
      }
      var className = '';
      if (this.props.field.className) {
        className = this.props.field.className + (this.props.errorText && typeof this.props.errorText === "string" ? " is-invalid" : "");
      }
      var startDate;
      if (this.props.data[this.props.field.name] === '') {
        startDate = null;
      } else if (this.props.data[this.props.field.name]) {
        startDate = new Date(this.props.data[this.props.field.name] * 1000);
      } else if (this.props.field.value) {
        startDate = new Date(this.props.field.value * 1000);
      } else {
        startDate = null;
      }
      if (startDate === "Invalid Date") {
        startDate = null;
      }

      // set locale
      var locale = this.props.field.locale;
      if (locale === "de") {
        locale = this.createDeLocale();
      }
      var customElement = /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: this.props.field.name,
        placeholder: this.props.field.placeholderText,
        autoComplete: "off",
        className: className + " react-datepicker-ignore-onclickoutside",
        value: "",
        "aria-label": this.props.field.placeholderText,
        id: this.props.field.name
      });
      return /*#__PURE__*/_react["default"].createElement(Condition, {
        data: this.props.data,
        conditions: this.props.field.conditions,
        field: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-form-field form-group " + this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: this.props.field.required ? "c4g-required" : null
      }, label), /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
        customInput: customElement,
        selected: this.props.field.selected ? this.props.field.selected : startDate,
        onChange: this.props.field.onChange ? this.props.field.onChange : this.handleChange,
        onChangeRaw: this.handleChangeRaw,
        name: this.props.field.name,
        isClearable: true,
        placeholderText: this.props.field.placeholderText,
        required: this.props.field.required
        // className={className}
        ,
        dateFormat: this.props.field.dateFormat,
        showTimeSelect: this.props.field.showTimeSelect,
        showMonthDropdown: !this.props.field.showTimeSelectOnly,
        showYearDropdown: !this.props.field.showTimeSelectOnly,
        scrollableYearDropdown: !this.props.field.showTimeSelectOnly,
        timeCaption: this.props.field.timeCaption,
        allowSameDay: true,
        locale: locale,
        popperPlacement: "bottom-end",
        customInputRef: "ref",
        ref: this.pickerRef,
        customRef: this.pickerRef,
        autoComplete: "off",
        shouldCloseOnSelect: true,
        dropdownMode: "scroll",
        id: this.props.field.name
      }), /*#__PURE__*/_react["default"].createElement("small", {
        className: "field-description form-text text-muted"
      }, description)));
    }
  }, {
    key: "createDeLocale",
    value: function createDeLocale() {
      var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
      var days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
      var locale = {
        localize: {
          month: function month(n) {
            return months[n];
          },
          day: function day(n) {
            return days[n];
          }
        },
        formatLong: {},
        options: {
          weekStartsOn: 1
        },
        match: function match(arg) {
          return true;
        }
      };
      return locale;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.pickerRef !== null) {
        jQuery(this.pickerRef).trigger('change');
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/util/conditions.js":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/util/conditions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkConditions = checkConditions;
exports["default"] = checkIfFieldIsRendered;
exports.hasConditions = hasConditions;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

function hasConditions(field) {
  if (field.conditionField && field.conditionValue) {
    if (typeof field.conditionField.forEach === 'function' && typeof field.conditionValue.forEach === 'function') {
      if (field.conditionField.length > 0) {
        if (field.conditionField.length === field.conditionValue.length) {
          return true;
        } else if (field.conditionValue.length > 1 && field.conditionField.length === 1) {
          // multiple values for one condition field (or condition)
          return true;
        }
      }
    }
  }
  return false;
}
function checkConditions(field, data) {
  var render = true;
  if (field.conditionField.length === field.conditionValue.length) {
    field.conditionField.forEach(function (element, index) {
      if (typeof data[element] === 'undefined') {
        render = false;
      } else if (data[element] !== null && !data[element].value && String(data[element]) !== String(field.conditionValue[index])) {
        render = false;
      } else if (data[element] && data[element].value && String(data[element].value) !== String(field.conditionValue[index])) {
        render = false;
      } else if (data[element] === null && field.conditionValue[index] !== null) {
        render = false;
      }
    }, this);
  } else if (field.conditionValue.length > 1 && field.conditionField.length === 1) {
    var element = field.conditionField[0];
    render = false;
    for (var key in field.conditionValue) {
      if (field.conditionValue.hasOwnProperty(key)) {
        var condValue = field.conditionValue[key];
        if (!!data[element] && data[element].value) {
          // data[element] is a select field
          if (data[element].value === condValue) {
            render = true;
          }
        } else if (data[element] === condValue) {
          render = true;
        }
        if (render) {
          break;
        }
      }
    }
  }
  return render;
}
function checkIfFieldIsRendered(field, data, fields) {
  if (hasConditions(field)) {
    // get field this field depends upon
    var dependentField = null;
    fields.forEach(function (element, index) {
      if (field.conditionField.length === 1) {
        if (element.name === field.conditionField[0]) {
          dependentField = element;
        }
      }
    });
    if (dependentField !== null) {
      var isDependentFieldRendered = true;
      if (hasConditions(dependentField)) {
        isDependentFieldRendered = checkConditions(dependentField, data);
        return isDependentFieldRendered && checkConditions(field, data);
      } else {
        return checkConditions(field, data);
      }
    } else {
      return checkConditions(field, data);
    }
  } else {
    return true;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybURhdGVwaWNrZXJGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQ0FBLG1CQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBRCxzQkFBQSxDQUFBRixtQkFBQTtBQUEyRCxTQUFBSSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQU4sd0JBQUFNLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFB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Q0YsSUFBSUksY0FBYyxLQUFLLElBQUksRUFBRTtNQUMzQixJQUFJQyx3QkFBd0IsR0FBRyxJQUFJO01BQ25DLElBQUlYLGFBQWEsQ0FBQ1UsY0FBYyxDQUFDLEVBQUU7UUFDakNDLHdCQUF3QixHQUFHTixlQUFlLENBQUNLLGNBQWMsRUFBRTlELElBQUksQ0FBQztRQUNoRSxPQUFPK0Qsd0JBQXdCLElBQUlOLGVBQWUsQ0FBQzlELEtBQUssRUFBRUssSUFBSSxDQUFDO01BQ2pFLENBQUMsTUFBTTtRQUNMLE9BQU95RCxlQUFlLENBQUM5RCxLQUFLLEVBQUVLLElBQUksQ0FBQztNQUNyQztJQUNGLENBQUMsTUFBTTtNQUNMLE9BQU95RCxlQUFlLENBQUM5RCxLQUFLLEVBQUVLLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtRGF0ZXBpY2tlckZpZWxkLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy91dGlsL2NvbmRpdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xuaW1wb3J0IGNoZWNrSWZGaWVsZElzUmVuZGVyZWQgZnJvbSBcIi4uLy4uL3V0aWwvY29uZGl0aW9uc1wiO1xuXG5jb25zdCBDb25kaXRpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL2NvbmRpdGlvbi9Db25kaXRpb24uanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGVwaWNrZXJGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5waWNrZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVJhdyA9IHRoaXMuaGFuZGxlQ2hhbmdlUmF3LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZGF0ZSwgZXZlbnQpIHtcbiAgICBpZiAoZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IChkYXRlLmdldFRpbWUoKSAvIDEwMDApfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiAnJ30sIHRoaXMucHJvcHMuZmllbGQpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBuZWVkZWQgdG8gY2xvc2UgdGhlIHBpY2tlclxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUmF3KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudHMgdXNlciBpbnB1dFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSB0aGlzLnByb3BzLmZpZWxkLmxhYmVsO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArXG4gICAgICAoKHRoaXMucHJvcHMuZXJyb3JUZXh0ICYmIHR5cGVvZiB0aGlzLnByb3BzLmVycm9yVGV4dCA9PT0gXCJzdHJpbmdcIikgPyBcIiBpcy1pbnZhbGlkXCIgOiBcIlwiKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhcnREYXRlO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9PT0gJycpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgc3RhcnREYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gKiAxMDAwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZmllbGQudmFsdWUpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZmllbGQudmFsdWUgKiAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnREYXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnREYXRlID09PSBcIkludmFsaWQgRGF0ZVwiKSB7XG4gICAgICBzdGFydERhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHNldCBsb2NhbGVcbiAgICBsZXQgbG9jYWxlID0gdGhpcy5wcm9wcy5maWVsZC5sb2NhbGU7XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJkZVwiKSB7XG4gICAgICBsb2NhbGUgPSB0aGlzLmNyZWF0ZURlTG9jYWxlKCk7XG4gICAgfVxuXG4gICAgbGV0IGN1c3RvbUVsZW1lbnQgPSAoPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5maWVsZC5wbGFjZWhvbGRlclRleHR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgXCIgcmVhY3QtZGF0ZXBpY2tlci1pZ25vcmUtb25jbGlja291dHNpZGVcIn0gdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmZpZWxkLnBsYWNlaG9sZGVyVGV4dH0gaWQ9e3RoaXMucHJvcHMuZmllbGQubmFtZX0vPik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmRpdGlvbiBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGNvbmRpdGlvbnM9e3RoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uc30gZmllbGQ9e3RoaXMucHJvcHMuZmllbGQubmFtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mb3JtLWZpZWxkIGZvcm0tZ3JvdXAgXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWV9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWQgPyBcImM0Zy1yZXF1aXJlZFwiIDogbnVsbH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8RGF0ZVBpY2tlciBjdXN0b21JbnB1dD17Y3VzdG9tRWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5maWVsZC5zZWxlY3RlZCA/IHRoaXMucHJvcHMuZmllbGQuc2VsZWN0ZWQgOiBzdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuZmllbGQub25DaGFuZ2UgPyB0aGlzLnByb3BzLmZpZWxkLm9uQ2hhbmdlIDogdGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSYXc9e3RoaXMuaGFuZGxlQ2hhbmdlUmF3fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD17dGhpcy5wcm9wcy5maWVsZC5wbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWR9XG4gICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PXt0aGlzLnByb3BzLmZpZWxkLmRhdGVGb3JtYXR9XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3Q9e3RoaXMucHJvcHMuZmllbGQuc2hvd1RpbWVTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd01vbnRoRHJvcGRvd249eyF0aGlzLnByb3BzLmZpZWxkLnNob3dUaW1lU2VsZWN0T25seX1cbiAgICAgICAgICAgICAgICAgICAgICBzaG93WWVhckRyb3Bkb3duPXshdGhpcy5wcm9wcy5maWVsZC5zaG93VGltZVNlbGVjdE9ubHl9XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVllYXJEcm9wZG93bj17IXRoaXMucHJvcHMuZmllbGQuc2hvd1RpbWVTZWxlY3RPbmx5fVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPXt0aGlzLnByb3BzLmZpZWxkLnRpbWVDYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGFsbG93U2FtZURheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwb3BwZXJQbGFjZW1lbnQ9e1wiYm90dG9tLWVuZFwifVxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUlucHV0UmVmPXtcInJlZlwifVxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5waWNrZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmVmPXt0aGlzLnBpY2tlclJlZn1cbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e1wib2ZmXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkQ2xvc2VPblNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTW9kZT17XCJzY3JvbGxcIn1cbiAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17XCJmaWVsZC1kZXNjcmlwdGlvbiBmb3JtLXRleHQgdGV4dC1tdXRlZFwifT57ZGVzY3JpcHRpb259PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbmRpdGlvbj5cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlRGVMb2NhbGUoKSB7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgXCJKYW51YXJcIixcbiAgICAgIFwiRmVicnVhclwiLFxuICAgICAgXCJNw6RyelwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYWlcIixcbiAgICAgIFwiSnVuaVwiLFxuICAgICAgXCJKdWxpXCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2t0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZXplbWJlclwiLFxuICAgIF07XG4gICAgY29uc3QgZGF5cyA9IFtcbiAgICAgICdTbycsXG4gICAgICAnTW8nLFxuICAgICAgJ0RpJyxcbiAgICAgICdNaScsXG4gICAgICAnRG8nLFxuICAgICAgJ0ZyJyxcbiAgICAgICdTYSdcbiAgICBdO1xuXG4gICAgY29uc3QgbG9jYWxlID0ge1xuICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgbW9udGg6IG4gPT4gbW9udGhzW25dLFxuICAgICAgICBkYXk6IG4gPT4gZGF5c1tuXVxuICAgICAgfSxcbiAgICAgIGZvcm1hdExvbmc6IHt9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB3ZWVrU3RhcnRzT246IDFcbiAgICAgIH0sXG4gICAgICBtYXRjaDogKGFyZykgPT4ge3JldHVybiB0cnVlO31cbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucGlja2VyUmVmICE9PSBudWxsKSB7XG4gICAgICBqUXVlcnkodGhpcy5waWNrZXJSZWYpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfVxufSIsIlxuXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25kaXRpb25zKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZmllbGQuY29uZGl0aW9uVmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgZm9yIG9uZSBjb25kaXRpb24gZmllbGQgKG9yIGNvbmRpdGlvbilcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpIHtcbiAgbGV0IHJlbmRlciA9IHRydWU7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gIT09IG51bGwgJiYgIWRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdLnZhbHVlKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBudWxsICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBlbGVtZW50ID0gZmllbGQuY29uZGl0aW9uRmllbGRbMF07XG4gICAgcmVuZGVyID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgY29uZFZhbHVlID0gZmllbGQuY29uZGl0aW9uVmFsdWVba2V5XTtcbiAgICAgICAgaWYgKCEhZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgLy8gZGF0YVtlbGVtZW50XSBpcyBhIHNlbGVjdCBmaWVsZFxuICAgICAgICAgIGlmIChkYXRhW2VsZW1lbnRdLnZhbHVlID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRmllbGRJc1JlbmRlcmVkKGZpZWxkLCBkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKGhhc0NvbmRpdGlvbnMoZmllbGQpKSB7XG4gICAgLy8gZ2V0IGZpZWxkIHRoaXMgZmllbGQgZGVwZW5kcyB1cG9uXG4gICAgbGV0IGRlcGVuZGVudEZpZWxkID0gbnVsbDtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gZmllbGQuY29uZGl0aW9uRmllbGRbMF0pIHtcbiAgICAgICAgICBkZXBlbmRlbnRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwZW5kZW50RmllbGQgIT09IG51bGwpIHtcbiAgICAgIGxldCBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgaWYgKGhhc0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQpKSB7XG4gICAgICAgIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IGNoZWNrQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgJiYgY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0RGF0ZXBpY2tlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfY29uZGl0aW9ucyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ29uZGl0aW9uIiwiUmVhY3QiLCJsYXp5IiwiRm9ybURhdGVwaWNrZXJGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJwaWNrZXJSZWYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlUmF3IiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImRhdGUiLCJldmVudCIsImZvcm0iLCJ1cGRhdGVGdW5jdGlvbiIsIm5hbWUiLCJfZGVmaW5lUHJvcGVydHkyIiwiZmllbGQiLCJnZXRUaW1lIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiLCJjaGVja0lmRmllbGRJc1JlbmRlcmVkIiwiZGF0YSIsImZpZWxkcyIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJlcnJvclRleHQiLCJzdGFydERhdGUiLCJEYXRlIiwibG9jYWxlIiwiY3JlYXRlRGVMb2NhbGUiLCJjdXN0b21FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyVGV4dCIsImF1dG9Db21wbGV0ZSIsImlkIiwiY29uZGl0aW9ucyIsInJlcXVpcmVkIiwiY3VzdG9tSW5wdXQiLCJzZWxlY3RlZCIsIm9uQ2hhbmdlIiwib25DaGFuZ2VSYXciLCJpc0NsZWFyYWJsZSIsImRhdGVGb3JtYXQiLCJzaG93VGltZVNlbGVjdCIsInNob3dNb250aERyb3Bkb3duIiwic2hvd1RpbWVTZWxlY3RPbmx5Iiwic2hvd1llYXJEcm9wZG93biIsInNjcm9sbGFibGVZZWFyRHJvcGRvd24iLCJ0aW1lQ2FwdGlvbiIsImFsbG93U2FtZURheSIsInBvcHBlclBsYWNlbWVudCIsImN1c3RvbUlucHV0UmVmIiwicmVmIiwiY3VzdG9tUmVmIiwic2hvdWxkQ2xvc2VPblNlbGVjdCIsImRyb3Bkb3duTW9kZSIsIm1vbnRocyIsImRheXMiLCJsb2NhbGl6ZSIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0TG9uZyIsIm9wdGlvbnMiLCJ3ZWVrU3RhcnRzT24iLCJtYXRjaCIsImFyZyIsImNvbXBvbmVudERpZE1vdW50IiwialF1ZXJ5IiwidHJpZ2dlciIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImxlbmd0aCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImRlcGVuZGVudEZpZWxkIiwiaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==