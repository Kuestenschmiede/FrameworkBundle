"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormNumberWithUnitField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormNumberWithUnitField.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormNumberWithUnitField.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactSelect = _interopRequireDefault(__webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../util/conditions */ "./src/Resources/public/js/util/conditions.js"));
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
var FormNumberWithUnitField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormNumberWithUnitField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormNumberWithUnitField);
    _this = _callSuper(this, FormNumberWithUnitField, [props]);
    _this.handleValueChange = _this.handleValueChange.bind(_this);
    _this.handleUnitChange = _this.handleUnitChange.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormNumberWithUnitField, _Component);
  return (0, _createClass2["default"])(FormNumberWithUnitField, [{
    key: "handleValueChange",
    value: function handleValueChange(event) {
      var data = {};
      data.unit = null;
      if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].unit) {
        data.unit = this.props.data[this.props.field.name].unit;
      }
      data.value = event.target.value;
      this.handleChange(data);
    }
  }, {
    key: "handleUnitChange",
    value: function handleUnitChange(unit) {
      var data = {};
      data.unit = unit;
      if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].value) {
        data.value = this.props.data[this.props.field.name].value;
      } else {
        data.value = this.props.field.value;
      }
      this.handleChange(data);
    }
  }, {
    key: "handleChange",
    value: function handleChange(data) {
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, data), this.props.field);
    }
  }, {
    key: "handleChangeDummy",
    value: function handleChangeDummy(data) {
      // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var label = null;
      var ariaLabel = null;
      if (this.props.field.label) {
        var className = "col-12";
        label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          className: (this.props.field.required ? 'c4g-required ' : '') + className
        }, this.props.field.label));
      } else {
        if (this.props.field.placeholder) {
          ariaLabel = this.props.field.placeholder;
        }
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted col-12"
        }, this.props.field.description);
      }
      var options = [];
      if (this.props.field.options) {
        if (this.props.field.grouped) {
          options = this.props.field.options;
        } else {
          if (this.props.field.emptyOptionLabel !== '') {
            options.push({
              value: "",
              label: this.props.field.emptyOptionLabel
            });
          }
          var keys = Object.keys(this.props.field.options);
          keys.forEach(function (element, index) {
            options.push({
              value: _this2.props.field.options[element].value,
              label: _this2.props.field.options[element].label
            });
          });
        }
        var hint = "";
        if (this.props.field.hintText) {
          hint = /*#__PURE__*/_react["default"].createElement("div", {
            className: ""
          }, this.props.field.hintText);
        }
        var selectNode = null;
        if (this.props.field.required) {
          var optionValue = '';
          if (!!this.props.data[this.props.field.name]) {
            if (!!this.props.data[this.props.field.name].value) {
              optionValue = this.props.data[this.props.field.name].value;
            } else if ((0, _typeof2["default"])(this.props.data[this.props.field.name]) === 'object') {
              optionValue = '';
            } else {
              optionValue = this.props.data[this.props.field.name];
            }
          }
          var optionLabel = '';
          if (!!this.props.data[this.props.field.name]) {
            if (!!this.props.data[this.props.field.name].value) {
              optionLabel = this.props.data[this.props.field.name].value;
            } else if ((0, _typeof2["default"])(this.props.data[this.props.field.name]) === 'object') {
              optionLabel = '';
            } else {
              optionLabel = this.props.data[this.props.field.name];
            }
          }
          selectNode = /*#__PURE__*/_react["default"].createElement("select", {
            tabIndex: -1,
            autoComplete: "off",
            style: {
              opacity: 0,
              height: 0,
              pointerEvents: "none"
            },
            value: optionValue,
            required: this.props.field.required,
            onChange: this.handleChangeDummy,
            "aria-label": ariaLabel,
            className: "form-control"
          }, /*#__PURE__*/_react["default"].createElement("option", {
            value: optionValue
          }, optionLabel));
        }
        var defaultValue = null;
        if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].value) {
          defaultValue = this.props.data[this.props.field.name].value;
        } else {
          defaultValue = this.props.field.value;
        }
        var defaultUnit = null;
        if (this.props.data[this.props.field.name] && this.props.data[this.props.field.name].unit) {
          defaultUnit = this.props.data[this.props.field.name].unit;
        }
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-row"
        }, label, hint, /*#__PURE__*/_react["default"].createElement("input", {
          type: "number",
          name: this.props.field.name + "[value]",
          required: this.props.field.required,
          defaultValue: defaultValue,
          min: this.props.field.min,
          max: this.props.field.max,
          step: this.props.field.step,
          onChange: this.handleValueChange,
          className: "form-control col-3 col-sm-2"
        }), /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
          id: this.props.field.name,
          name: this.props.field.name + "[unit]",
          options: options,
          required: this.props.field.required,
          onChange: this.handleUnitChange,
          defaultValue: defaultUnit,
          placeholder: this.props.field.placeholder,
          "aria-label": ariaLabel,
          className: "col-9 col-sm-5"
        }), selectNode, description));
      } else {
        return '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU51bWJlcldpdGhVbml0RmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsWUFBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFHLFdBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQUkseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFOLHdCQUFBTSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLFFBQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEs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QUFFO01BQzNCLElBQUlDLHdCQUF3QixHQUFHLElBQUk7TUFDbkMsSUFBSVIsYUFBYSxDQUFDTyxjQUFjLENBQUMsRUFBRTtRQUNqQ0Msd0JBQXdCLEdBQUdKLGVBQWUsQ0FBQ0csY0FBYyxFQUFFMUQsSUFBSSxDQUFDO1FBQ2hFLE9BQU8yRCx3QkFBd0IsSUFBSUosZUFBZSxDQUFDckQsS0FBSyxFQUFFRixJQUFJLENBQUM7TUFDakUsQ0FBQyxNQUFNO1FBQ0wsT0FBT3VELGVBQWUsQ0FBQ3JELEtBQUssRUFBRUYsSUFBSSxDQUFDO01BQ3JDO0lBQ0YsQ0FBQyxNQUFNO01BQ0wsT0FBT3VELGVBQWUsQ0FBQ3JELEtBQUssRUFBRUYsSUFBSSxDQUFDO0lBQ3JDO0VBQ0YsQ0FBQyxNQUFNO0lBQ0wsT0FBTyxJQUFJO0VBQ2I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1OdW1iZXJXaXRoVW5pdEZpZWxkLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy91dGlsL2NvbmRpdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1OdW1iZXJXaXRoVW5pdEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVW5pdENoYW5nZSA9IHRoaXMuaGFuZGxlVW5pdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBkYXRhLnVuaXQgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS51bml0KSB7XG4gICAgICBkYXRhLnVuaXQgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS51bml0O1xuICAgIH1cbiAgICBkYXRhLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEpO1xuICB9XG5cbiAgaGFuZGxlVW5pdENoYW5nZSh1bml0KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBkYXRhLnVuaXQgPSB1bml0O1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS52YWx1ZSkge1xuICAgICAgZGF0YS52YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnZhbHVlID0gdGhpcy5wcm9wcy5maWVsZC52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZGF0YSkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBkYXRhfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VEdW1teShkYXRhKSB7XG4gICAgLy8gU28gcmVhY3Qgd29uJ3QgdGhyb3cgd2FybmluZ3MsIGRvIG5vdCByZXBsYWNlIHRoaXMgd2l0aCBhIHJlYWRPbmx5IGF0dHJpYnV0ZSBzaW5jZSB0aGF0IHdpbGwgYnJlYWsgdmFsaWRhdGlvblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBsZXQgYXJpYUxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiY29sLTEyXCI7XG4gICAgICBsYWJlbCA9ICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuZmllbGQucmVxdWlyZWQgPyAnYzRnLXJlcXVpcmVkICcgOiAnJykgKyBjbGFzc05hbWV9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGFyaWFMYWJlbCA9IHRoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzbWFsbCBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWQgY29sLTEyXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9ufTwvc21hbGw+KTtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQub3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZ3JvdXBlZCkge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZW1wdHlPcHRpb25MYWJlbCAhPT0gJycpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goe3ZhbHVlOiBcIlwiLCBsYWJlbDogdGhpcy5wcm9wcy5maWVsZC5lbXB0eU9wdGlvbkxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnMpO1xuICAgICAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHt2YWx1ZTogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLnZhbHVlLCBsYWJlbDogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLmxhYmVsfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGludCA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5oaW50VGV4dCkge1xuICAgICAgICBoaW50ID0gPGRpdiBjbGFzc05hbWU9e1wiXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmhpbnRUZXh0fTwvZGl2PlxuICAgICAgfVxuXG5cbiAgICAgIGxldCBzZWxlY3ROb2RlID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkKSB7XG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9ICcnO1xuICAgICAgICBpZiAoISEodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pKSB7XG4gICAgICAgICAgaWYgKCEhKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnZhbHVlKSkge1xuICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS52YWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdGlvblZhbHVlID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvblZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRpb25MYWJlbCA9ICcnO1xuICAgICAgICBpZiAoISEodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pKSB7XG4gICAgICAgICAgaWYgKCEhKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnZhbHVlKSkge1xuICAgICAgICAgICAgb3B0aW9uTGFiZWwgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS52YWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdGlvbkxhYmVsID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbkxhYmVsID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGVjdE5vZGUgPSA8c2VsZWN0IHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtcIm9mZlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvblZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRHVtbXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbFwifT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb25WYWx1ZX0+XG4gICAgICAgICAgICB7b3B0aW9uTGFiZWx9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PjtcbiAgICAgIH1cblxuICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0udmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnByb3BzLmZpZWxkLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGVmYXVsdFVuaXQgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdICYmIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnVuaXQpIHtcbiAgICAgICAgZGVmYXVsdFVuaXQgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS51bml0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lICsgXCIgXCIgOiBcIlwiKSArIFwiYzRnLWZvcm0tZmllbGQgZm9ybS1yb3dcIn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7aGludH1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyBcIlt2YWx1ZV1cIn1cbiAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMuZmllbGQubWlufVxuICAgICAgICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5maWVsZC5tYXh9XG4gICAgICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5maWVsZC5zdGVwfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgY29sLTMgY29sLXNtLTJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2VsZWN0IGlkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZSArIFwiW3VuaXRdXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVbml0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRVbml0fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5maWVsZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sLTkgY29sLXNtLTVcIn0+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIHtzZWxlY3ROb2RlfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgnJyk7XG4gICAgfVxuICB9XG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3RTZWxlY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NvbmRpdGlvbnMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtTnVtYmVyV2l0aFVuaXRGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVVbml0Q2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwiZGF0YSIsInVuaXQiLCJmaWVsZCIsIm5hbWUiLCJ0YXJnZXQiLCJmb3JtIiwidXBkYXRlRnVuY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkyIiwiaGFuZGxlQ2hhbmdlRHVtbXkiLCJyZW5kZXIiLCJfdGhpczIiLCJjaGVja0lmRmllbGRJc1JlbmRlcmVkIiwiZmllbGRzIiwibGFiZWwiLCJhcmlhTGFiZWwiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJodG1sRm9yIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwib3B0aW9ucyIsImdyb3VwZWQiLCJlbXB0eU9wdGlvbkxhYmVsIiwicHVzaCIsImtleXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaGludCIsImhpbnRUZXh0Iiwic2VsZWN0Tm9kZSIsIm9wdGlvblZhbHVlIiwiX3R5cGVvZjIiLCJvcHRpb25MYWJlbCIsInRhYkluZGV4IiwiYXV0b0NvbXBsZXRlIiwic3R5bGUiLCJvcGFjaXR5IiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFVuaXQiLCJ0eXBlIiwibWluIiwibWF4Iiwic3RlcCIsImlkIiwiQ29tcG9uZW50IiwiaGFzQ29uZGl0aW9ucyIsImNvbmRpdGlvbkZpZWxkIiwiY29uZGl0aW9uVmFsdWUiLCJsZW5ndGgiLCJjaGVja0NvbmRpdGlvbnMiLCJTdHJpbmciLCJjb25kVmFsdWUiLCJkZXBlbmRlbnRGaWVsZCIsImlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=