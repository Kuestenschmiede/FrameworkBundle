"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormSelectField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormSelectField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormSelectField.jsx ***!
  \*****************************************************************/
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var FormSelectField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormSelectField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormSelectField);
    _this = _callSuper(this, FormSelectField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormSelectField, _Component);
  return (0, _createClass2["default"])(FormSelectField, [{
    key: "handleChange",
    value: function handleChange(data, action) {
      var _this2 = this;
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, data), this.props.field);
      if (this.props.field.cache && this.props.field.entryPoint) {
        localStorage.setItem('form-select-' + this.props.field.entryPoint + '-' + this.props.field.name, JSON.stringify(data));
      }
      if (this.props.field.instantRedirectUrl) {
        window.location = this.props.field.instantRedirectUrl.replace('{value}', data.value);
      }
      // check if form fields should be loaded
      if (this.props.field.dynamicFieldlist) {
        var postData = (0, _defineProperty2["default"])({}, this.props.field.name, data);
        if (this.props.field.dynamicFieldlistAdditionalFields && this.props.field.dynamicFieldlistAdditionalFields.length > 0) {
          var addFields = this.props.field.dynamicFieldlistAdditionalFields;
          for (var i = 0; i < addFields.length; i++) {
            postData[addFields[i]] = this.props.data[addFields[i]];
          }
        }
        jQuery.post(this.props.field.dynamicFieldlistUrl, postData).done(function (responseData) {
          if (responseData && responseData.matchingFields && responseData.nonMatchingFields) {
            _this2.props.form.props.setFieldsFunction(_this2.props.form.props.name, responseData);
          }
        });
      }
    }
  }, {
    key: "handleChangeDummy",
    value: function handleChangeDummy(data) {
      // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var label = null;
      var ariaLabel = null;
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }

      // check for hidden attribute
      if (this.props.field.hidden) {
        return null;
      }
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          className: this.props.field.required ? 'c4g-required' : ''
        }, this.props.field.label));
      } else {
        if (this.props.field.placeholder) {
          ariaLabel = this.props.field.placeholder;
        }
      }
      var description = null;
      if (this.props.field.description) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description);
      }
      var options = [];
      var defaultValue = null;
      var defaultValues = null;
      if (this.props.field.options) {
        if (this.props.field.cache && this.props.field.entryPoint) {
          var cachedData = localStorage.getItem('form-select-' + this.props.field.entryPoint + '-' + this.props.field.name);
          if (cachedData) {
            defaultValues = JSON.parse(cachedData);
            this.props.data[this.props.field.name] = defaultValues;
          }
        }
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
              value: _this3.props.field.options[element].value,
              label: _this3.props.field.options[element].label
            });
            if (defaultValues) {
              defaultValues.forEach(function (cachedElement, idx) {
                if (cachedElement.value === _this3.props.field.options[element].value) {
                  defaultValue = {
                    value: _this3.props.field.options[element].value,
                    label: _this3.props.field.options[element].label
                  };
                }
              });
            } else if (_this3.props.data[_this3.props.field.name] === _this3.props.field.options[element].value) {
              defaultValue = {
                value: _this3.props.field.options[element].value,
                label: _this3.props.field.options[element].label
              };
            }
          });
          if (!defaultValue && this.props.field.selected) {
            // set default value for when no value is saved yet
            var defaultOption = this.props.field.selected;
            this.props.field.options.forEach(function (element) {
              if (defaultOption === element.value) {
                defaultValue = {
                  value: element.value,
                  label: element.label
                };
              }
            }, this);
          }
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
          var optionValues = defaultValue ? defaultValue : optionValue;
          selectNode = /*#__PURE__*/_react["default"].createElement("select", {
            tabIndex: -1,
            autoComplete: "off",
            style: {
              opacity: 0,
              height: 0,
              pointerEvents: "none"
            },
            value: optionValues,
            required: this.props.field.required,
            onChange: this.handleChangeDummy,
            "aria-label": ariaLabel
          }, ";", /*#__PURE__*/_react["default"].createElement("option", {
            value: optionValues
          }, optionLabel));
        }
        var name = this.props.field.name;
        if (this.props.field.multiple && this.props.field.synchronous) {
          name += '[]';
        }
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Condition, {
          data: this.props.data,
          conditions: this.props.field.conditions,
          field: this.props.field.name
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"
        }, label, this.props.errorText && typeof this.props.errorText === "string" && /*#__PURE__*/_react["default"].createElement("div", {
          className: "text-danger"
        }, this.props.errorText), hint, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
          id: this.props.field.name,
          name: name,
          options: options,
          isMulti: this.props.field.multiple,
          required: this.props.field.required,
          onChange: this.handleChange,
          defaultValue: this.props.field.multiple ? this.props.data[this.props.field.name] : defaultValue,
          placeholder: this.props.field.placeholder,
          "aria-label": ariaLabel
        }), selectNode), description)));
      } else {
        return '';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var hasData = !!this.props.data[this.props.field.name];
      var defaultOption = this.props.field.selected;
      var hasDefaultValue = this.props.field.options[defaultOption] && !!this.props.field.options[defaultOption].value;
      if (!this.props.field.instantRedirectUrl && (hasData || hasDefaultValue)) {
        this.handleChange(this.props.data[this.props.field.name], "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVNlbGVjdEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxXQUFBLEdBQUFELHNCQUFBLENBQUFGLG1CQUFBO0FBQTJELFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTix3QkFBQU0sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxRQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENB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LElBQUlBLE1BQU0sRUFBRTtVQUNWO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7RUFHQSxPQUFPQSxNQUFNO0FBQ2Y7QUFFZSxTQUFTSSxzQkFBc0JBLENBQUM3QixLQUFLLEVBQUVQLElBQUksRUFBRXFDLE1BQU0sRUFBRTtFQUNsRSxJQUFJa0QsYUFBYSxDQUFDaEYsS0FBSyxDQUFDLEVBQUU7SUFDeEI7SUFDQSxJQUFJc0YsY0FBYyxHQUFHLElBQUk7SUFDekJ4RCxNQUFNLENBQUNtQixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7TUFDakMsSUFBSW5ELEtBQUssQ0FBQ2lGLGNBQWMsQ0FBQ25FLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsSUFBSW9DLE9BQU8sQ0FBQ3BELElBQUksS0FBS0UsS0FBSyxDQUFDaUYsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQzVDSyxjQUFjLEdBQUdwQyxPQUFPO1FBQzFCO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJb0MsY0FBYyxLQUFLLElBQUksRUFBRTtNQUMzQixJQUFJQyx3QkFBd0IsR0FBRyxJQUFJO01BQ25DLElBQUlQLGFBQWEsQ0FBQ00sY0FBYyxDQUFDLEVBQUU7UUFDakNDLHdCQUF3QixHQUFHSixlQUFlLENBQUNHLGNBQWMsRUFBRTdGLElBQUksQ0FBQztRQUNoRSxPQUFPOEYsd0JBQXdCLElBQUlKLGVBQWUsQ0FBQ25GLEtBQUssRUFBRVAsSUFBSSxDQUFDO01BQ2pFLENBQUMsTUFBTTtRQUNMLE9BQU8wRixlQUFlLENBQUNuRixLQUFLLEVBQUVQLElBQUksQ0FBQztNQUNyQztJQUNGLENBQUMsTUFBTTtNQUNMLE9BQU8wRixlQUFlLENBQUNuRixLQUFLLEVBQUVQLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtU2VsZWN0RmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuY29uc3QgQ29uZGl0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb25kaXRpb24vQ29uZGl0aW9uLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TZWxlY3RGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGRhdGEsIGFjdGlvbikge1xuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBkYXRhfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybS1zZWxlY3QtJyt0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQrJy0nK3RoaXMucHJvcHMuZmllbGQubmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5pbnN0YW50UmVkaXJlY3RVcmwpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuZmllbGQuaW5zdGFudFJlZGlyZWN0VXJsLnJlcGxhY2UoJ3t2YWx1ZX0nLCBkYXRhLnZhbHVlKTtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgZm9ybSBmaWVsZHMgc2hvdWxkIGJlIGxvYWRlZFxuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3QpIHtcbiAgICAgIGxldCBwb3N0RGF0YSA9IHtbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTogZGF0YX07XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5keW5hbWljRmllbGRsaXN0QWRkaXRpb25hbEZpZWxkc1xuICAgICAgICAgICYmIHRoaXMucHJvcHMuZmllbGQuZHluYW1pY0ZpZWxkbGlzdEFkZGl0aW9uYWxGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFkZEZpZWxkcyA9IHRoaXMucHJvcHMuZmllbGQuZHluYW1pY0ZpZWxkbGlzdEFkZGl0aW9uYWxGaWVsZHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcG9zdERhdGFbYWRkRmllbGRzW2ldXSA9IHRoaXMucHJvcHMuZGF0YVthZGRGaWVsZHNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBqUXVlcnkucG9zdCh0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3RVcmwsIHBvc3REYXRhKVxuICAgICAgICAgIC5kb25lKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEgJiYgcmVzcG9uc2VEYXRhLm1hdGNoaW5nRmllbGRzXG4gICAgICAgICAgICAgICAgJiYgcmVzcG9uc2VEYXRhLm5vbk1hdGNoaW5nRmllbGRzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnNldEZpZWxkc0Z1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUR1bW15KGRhdGEpIHtcbiAgICAvLyBTbyByZWFjdCB3b24ndCB0aHJvdyB3YXJuaW5ncywgZG8gbm90IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVhZE9ubHkgYXR0cmlidXRlIHNpbmNlIHRoYXQgd2lsbCBicmVhayB2YWxpZGF0aW9uXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBsZXQgYXJpYUxhYmVsID0gbnVsbDtcbiAgICAvLyBjaGVjayBjb25kaXRpb25cbiAgICBpZiAoIWNoZWNrSWZGaWVsZElzUmVuZGVyZWQodGhpcy5wcm9wcy5maWVsZCwgdGhpcy5wcm9wcy5kYXRhLCB0aGlzLnByb3BzLmZpZWxkcykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBoaWRkZW4gYXR0cmlidXRlXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSAoPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkID8gJ2M0Zy1yZXF1aXJlZCcgOiAnJ30+XG4gICAgICAgICAge3RoaXMucHJvcHMuZmllbGQubGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGFyaWFMYWJlbCA9IHRoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzbWFsbCBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWRcIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zbWFsbD4pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuICAgIGxldCBkZWZhdWx0VmFsdWVzID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5vcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5jYWNoZSAmJiB0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtLXNlbGVjdC0nK3RoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCsnLScrdGhpcy5wcm9wcy5maWVsZC5uYW1lKTtcbiAgICAgICAgaWYgKGNhY2hlZERhdGEpIHtcbiAgICAgICAgICBkZWZhdWx0VmFsdWVzID0gSlNPTi5wYXJzZShjYWNoZWREYXRhKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZ3JvdXBlZCkge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZW1wdHlPcHRpb25MYWJlbCAhPT0gJycpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goe3ZhbHVlOiBcIlwiLCBsYWJlbDogdGhpcy5wcm9wcy5maWVsZC5lbXB0eU9wdGlvbkxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnMpO1xuICAgICAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHt2YWx1ZTogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLnZhbHVlLCBsYWJlbDogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLmxhYmVsfSk7XG5cbiAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlcykge1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlcy5mb3JFYWNoKChjYWNoZWRFbGVtZW50LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhY2hlZEVsZW1lbnQudmFsdWUgPT09IHRoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHt2YWx1ZTogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLnZhbHVlLCBsYWJlbDogdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLmxhYmVsfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9PT0gdGhpcy5wcm9wcy5maWVsZC5vcHRpb25zW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB7dmFsdWU6IHRoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS52YWx1ZSwgbGFiZWw6IHRoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS5sYWJlbH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWRlZmF1bHRWYWx1ZSAmJiB0aGlzLnByb3BzLmZpZWxkLnNlbGVjdGVkKSB7XG4gICAgICAgICAgLy8gc2V0IGRlZmF1bHQgdmFsdWUgZm9yIHdoZW4gbm8gdmFsdWUgaXMgc2F2ZWQgeWV0XG4gICAgICAgICAgbGV0IGRlZmF1bHRPcHRpb24gPSB0aGlzLnByb3BzLmZpZWxkLnNlbGVjdGVkO1xuICAgICAgICAgIHRoaXMucHJvcHMuZmllbGQub3B0aW9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdE9wdGlvbiA9PT0gZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB7dmFsdWU6IGVsZW1lbnQudmFsdWUsIGxhYmVsOiBlbGVtZW50LmxhYmVsfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgaGludCA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5oaW50VGV4dCkge1xuICAgICAgICBoaW50ID0gPGRpdiBjbGFzc05hbWU9e1wiXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmhpbnRUZXh0fTwvZGl2PlxuICAgICAgfVxuXG4gICAgICBsZXQgc2VsZWN0Tm9kZSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCkge1xuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSAnJztcbiAgICAgICAgaWYgKCEhKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSkge1xuICAgICAgICAgIGlmICghISh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS52YWx1ZSkpIHtcbiAgICAgICAgICAgIG9wdGlvblZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0udmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25WYWx1ZSA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25WYWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0aW9uTGFiZWwgPSAnJztcbiAgICAgICAgaWYgKCEhKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSkge1xuICAgICAgICAgIGlmICghISh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS52YWx1ZSkpIHtcbiAgICAgICAgICAgIG9wdGlvbkxhYmVsID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0udmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25MYWJlbCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25MYWJlbCA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvcHRpb25WYWx1ZXMgPSBkZWZhdWx0VmFsdWUgPyBkZWZhdWx0VmFsdWUgOiBvcHRpb25WYWx1ZTtcbiAgICAgICAgc2VsZWN0Tm9kZSA9IDxzZWxlY3QgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e1wib2ZmXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCwgcG9pbnRlckV2ZW50czogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRHVtbXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH0+O1xuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvblZhbHVlc30+e29wdGlvbkxhYmVsfTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD47XG4gICAgICB9XG5cbiAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5maWVsZC5uYW1lO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubXVsdGlwbGUgJiYgdGhpcy5wcm9wcy5maWVsZC5zeW5jaHJvbm91cykge1xuICAgICAgICBuYW1lICs9ICdbXSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbmRpdGlvbiBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGNvbmRpdGlvbnM9e3RoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uc30gZmllbGQ9e3RoaXMucHJvcHMuZmllbGQubmFtZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArIFwiIFwiIDogXCJcIikgKyBcImM0Zy1mb3JtLWZpZWxkXCJ9PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvclRleHQgJiYgdHlwZW9mIHRoaXMucHJvcHMuZXJyb3JUZXh0ID09PSBcInN0cmluZ1wiICYmIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZGFuZ2VyXCJ9Pnt0aGlzLnByb3BzLmVycm9yVGV4dH08L2Rpdj59XG4gICAgICAgICAgICAgICAge2hpbnR9XG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdCBpZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfSBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfSBpc011bHRpPXt0aGlzLnByb3BzLmZpZWxkLm11bHRpcGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZmllbGQubXVsdGlwbGUgPyB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA6IGRlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH0+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIHtzZWxlY3ROb2RlfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29uZGl0aW9uPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoJycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBoYXNEYXRhID0gISF0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTtcbiAgICBsZXQgZGVmYXVsdE9wdGlvbiA9IHRoaXMucHJvcHMuZmllbGQuc2VsZWN0ZWQ7XG4gICAgbGV0IGhhc0RlZmF1bHRWYWx1ZSA9IHRoaXMucHJvcHMuZmllbGQub3B0aW9uc1tkZWZhdWx0T3B0aW9uXSAmJiAhISh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNbZGVmYXVsdE9wdGlvbl0udmFsdWUpO1xuICAgIGlmICghdGhpcy5wcm9wcy5maWVsZC5pbnN0YW50UmVkaXJlY3RVcmwgJiYgKGhhc0RhdGEgfHwgaGFzRGVmYXVsdFZhbHVlKSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0sIFwiXCIpO1xuICAgIH1cbiAgfVxuXG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3RTZWxlY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NvbmRpdGlvbnMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJDb25kaXRpb24iLCJSZWFjdCIsImxhenkiLCJGb3JtU2VsZWN0RmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJkYXRhIiwiYWN0aW9uIiwiX3RoaXMyIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwibmFtZSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJmaWVsZCIsImNhY2hlIiwiZW50cnlQb2ludCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdGFudFJlZGlyZWN0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZHluYW1pY0ZpZWxkbGlzdCIsInBvc3REYXRhIiwiZHluYW1pY0ZpZWxkbGlzdEFkZGl0aW9uYWxGaWVsZHMiLCJsZW5ndGgiLCJhZGRGaWVsZHMiLCJqUXVlcnkiLCJwb3N0IiwiZHluYW1pY0ZpZWxkbGlzdFVybCIsImRvbmUiLCJyZXNwb25zZURhdGEiLCJtYXRjaGluZ0ZpZWxkcyIsIm5vbk1hdGNoaW5nRmllbGRzIiwic2V0RmllbGRzRnVuY3Rpb24iLCJoYW5kbGVDaGFuZ2VEdW1teSIsInJlbmRlciIsIl90aGlzMyIsImxhYmVsIiwiYXJpYUxhYmVsIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsImZpZWxkcyIsImhpZGRlbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJjbGFzc05hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZhbHVlcyIsImNhY2hlZERhdGEiLCJnZXRJdGVtIiwicGFyc2UiLCJncm91cGVkIiwiZW1wdHlPcHRpb25MYWJlbCIsInB1c2giLCJrZXlzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImNhY2hlZEVsZW1lbnQiLCJpZHgiLCJzZWxlY3RlZCIsImRlZmF1bHRPcHRpb24iLCJoaW50IiwiaGludFRleHQiLCJzZWxlY3ROb2RlIiwib3B0aW9uVmFsdWUiLCJfdHlwZW9mMiIsIm9wdGlvbkxhYmVsIiwib3B0aW9uVmFsdWVzIiwidGFiSW5kZXgiLCJhdXRvQ29tcGxldGUiLCJzdHlsZSIsIm9wYWNpdHkiLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwib25DaGFuZ2UiLCJtdWx0aXBsZSIsInN5bmNocm9ub3VzIiwiY29uZGl0aW9ucyIsImVycm9yVGV4dCIsImlkIiwiaXNNdWx0aSIsImNvbXBvbmVudERpZE1vdW50IiwiaGFzRGF0YSIsImhhc0RlZmF1bHRWYWx1ZSIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiY2hlY2tDb25kaXRpb25zIiwiU3RyaW5nIiwiY29uZFZhbHVlIiwiZGVwZW5kZW50RmllbGQiLCJpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQiXSwic291cmNlUm9vdCI6IiJ9