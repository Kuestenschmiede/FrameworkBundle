"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormTextField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormTextField.jsx":
/*!***************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormTextField.jsx ***!
  \***************************************************************/
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
var FormTextField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormTextField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormTextField);
    _this = _callSuper(this, FormTextField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormTextField, _Component);
  return (0, _createClass2["default"])(FormTextField, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value), this.props.field);
      if (this.props.field.cache && this.props.field.entryPoint) {
        localStorage.setItem('form-text-' + this.props.field.entryPoint + '-' + this.props.field.name, event.target.value);
      }
      if (this.props.field.dynamicFieldlist) {
        var postData = (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value);
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
    key: "render",
    value: function render() {
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var label = null;
      var ariaLabel = null;
      if (this.props.field.label) {
        var labelClass = "";
        if (this.props.field.required) {
          labelClass = "c4g-required";
          label = /*#__PURE__*/_react["default"].createElement("label", {
            className: labelClass,
            htmlFor: this.props.field.name
          }, this.props.field.label);
        } else {
          label = /*#__PURE__*/_react["default"].createElement("label", {
            htmlFor: this.props.field.name
          }, this.props.field.label);
        }
      } else {
        if (this.props.field.placeholder) {
          ariaLabel = this.props.field.placeholder;
        }
      }
      var description = null;
      var descriptionLink = null;
      if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
        descriptionLink = /*#__PURE__*/_react["default"].createElement("a", {
          className: "form-description-link btn btn-info btn-sm",
          href: this.props.field.descriptionLink,
          target: "_blank"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fas fa-info-circle"
        }), " ", this.props.field.descriptionLinkLabel);
      }
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description, " ", descriptionLink);
      }
      if (this.props.field.cache && this.props.field.entryPoint) {
        var cachedData = localStorage.getItem('form-text-' + this.props.field.entryPoint + '-' + this.props.field.name);
        if (cachedData) {
          this.props.data[this.props.field.name] = cachedData;
        }
      }
      var content = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"
      }, label, this.props.errorText && typeof this.props.errorText === "string" && /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-danger"
      }, this.props.errorText), /*#__PURE__*/_react["default"].createElement("input", {
        type: this.props.field.type,
        id: this.props.field.name,
        name: this.props.field.name,
        required: this.props.field.required,
        defaultValue: this.props.data[this.props.field.name] || this.props.field.value,
        pattern: this.props.field.pattern,
        onChange: this.handleChange,
        onFocus: this.handleChange,
        placeholder: this.props.field.placeholder,
        className: "c4g-form-control c4g-form-input" + (this.props.errorText && typeof this.props.errorText === "string" ? " is-invalid" : ""),
        maxLength: this.props.field.maxLength,
        "aria-label": ariaLabel
      }), description));
      if (this.props.field.wrappingDiv) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrappingDivClass || ""
        }, content);
      } else {
        return content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVRleHRGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxN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LEtBQUssQ0FBQyxFQUFFO0lBQ3hCO0lBQ0EsSUFBSTJELGNBQWMsR0FBRyxJQUFJO0lBQ3pCckMsTUFBTSxDQUFDK0IsT0FBTyxDQUFDLFVBQUNFLE9BQU8sRUFBRUMsS0FBSyxFQUFLO01BQ2pDLElBQUl4RCxLQUFLLENBQUNtRCxjQUFjLENBQUMxQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3JDLElBQUk4QyxPQUFPLENBQUN6RCxJQUFJLEtBQUtFLEtBQUssQ0FBQ21ELGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUM1Q1EsY0FBYyxHQUFHSixPQUFPO1FBQzFCO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJSSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLElBQUlDLHdCQUF3QixHQUFHLElBQUk7TUFDbkMsSUFBSVYsYUFBYSxDQUFDUyxjQUFjLENBQUMsRUFBRTtRQUNqQ0Msd0JBQXdCLEdBQUdOLGVBQWUsQ0FBQ0ssY0FBYyxFQUFFaEQsSUFBSSxDQUFDO1FBQ2hFLE9BQU9pRCx3QkFBd0IsSUFBSU4sZUFBZSxDQUFDdEQsS0FBSyxFQUFFVyxJQUFJLENBQUM7TUFDakUsQ0FBQyxNQUFNO1FBQ0wsT0FBTzJDLGVBQWUsQ0FBQ3RELEtBQUssRUFBRVcsSUFBSSxDQUFDO01BQ3JDO0lBQ0YsQ0FBQyxNQUFNO01BQ0wsT0FBTzJDLGVBQWUsQ0FBQ3RELEtBQUssRUFBRVcsSUFBSSxDQUFDO0lBQ3JDO0VBQ0YsQ0FBQyxNQUFNO0lBQ0wsT0FBTyxJQUFJO0VBQ2I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1UZXh0RmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UZXh0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9LCB0aGlzLnByb3BzLmZpZWxkKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNhY2hlICYmIHRoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm0tdGV4dC0nK3RoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCsnLScrdGhpcy5wcm9wcy5maWVsZC5uYW1lLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5keW5hbWljRmllbGRsaXN0KSB7XG4gICAgICBsZXQgcG9zdERhdGEgPSB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX07XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5keW5hbWljRmllbGRsaXN0QWRkaXRpb25hbEZpZWxkc1xuICAgICAgICAmJiB0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3RBZGRpdGlvbmFsRmllbGRzLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICBjb25zdCBhZGRGaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3RBZGRpdGlvbmFsRmllbGRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBvc3REYXRhW2FkZEZpZWxkc1tpXV0gPSB0aGlzLnByb3BzLmRhdGFbYWRkRmllbGRzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBqUXVlcnkucG9zdCh0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3RVcmwsIHBvc3REYXRhKVxuICAgICAgICAuZG9uZSgocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiByZXNwb25zZURhdGEubWF0Y2hpbmdGaWVsZHNcbiAgICAgICAgICAgICYmIHJlc3BvbnNlRGF0YS5ub25NYXRjaGluZ0ZpZWxkc1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnNldEZpZWxkc0Z1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBsZXQgYXJpYUxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGV0IGxhYmVsQ2xhc3MgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgbGFiZWxDbGFzcyA9IFwiYzRnLXJlcXVpcmVkXCI7XG4gICAgICAgIGxhYmVsID0gPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc30gaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuZmllbGQubmFtZX0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGFyaWFMYWJlbCA9IHRoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25MaW5rID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbkxpbmsgJiYgdGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbkxpbmtMYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb25MaW5rID0gPGEgY2xhc3NOYW1lPXtcImZvcm0tZGVzY3JpcHRpb24tbGluayBidG4gYnRuLWluZm8gYnRuLXNtXCJ9IGhyZWY9e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb25MaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj48aVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT4ge3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb25MaW5rTGFiZWx9PC9hPjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNtYWxsIGNsYXNzTmFtZT17XCJmaWVsZC1kZXNjcmlwdGlvbiBmb3JtLXRleHQgdGV4dC1tdXRlZFwifT57dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbn0ge2Rlc2NyaXB0aW9uTGlua308L3NtYWxsPik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tdGV4dC0nK3RoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCsnLScrdGhpcy5wcm9wcy5maWVsZC5uYW1lKTtcbiAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdID0gY2FjaGVkRGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArIFwiIFwiIDogXCJcIikgKyBcImM0Zy1mb3JtLWZpZWxkXCJ9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHt0aGlzLnByb3BzLmVycm9yVGV4dCAmJiB0eXBlb2YgdGhpcy5wcm9wcy5lcnJvclRleHQgPT09IFwic3RyaW5nXCIgJiYgPGRpdiBjbGFzc05hbWU9e1widGV4dC1kYW5nZXJcIn0+e3RoaXMucHJvcHMuZXJyb3JUZXh0fTwvZGl2Pn1cbiAgICAgICAgPGlucHV0IHR5cGU9e3RoaXMucHJvcHMuZmllbGQudHlwZX1cbiAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgIHBhdHRlcm49e3RoaXMucHJvcHMuZmllbGQucGF0dGVybn1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLWZvcm0tY29udHJvbCBjNGctZm9ybS1pbnB1dFwiICsgKCh0aGlzLnByb3BzLmVycm9yVGV4dCAmJiB0eXBlb2YgdGhpcy5wcm9wcy5lcnJvclRleHQgPT09IFwic3RyaW5nXCIpID8gXCIgaXMtaW52YWxpZFwiIDogXCJcIil9XG4gICAgICAgICAgICAgICBtYXhMZW5ndGg9e3RoaXMucHJvcHMuZmllbGQubWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfS8+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQud3JhcHBpbmdEaXYpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwaW5nRGl2Q2xhc3MgfHwgXCJcIn0+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChjb250ZW50KTtcbiAgICB9XG4gIH1cblxufSIsIlxuXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25kaXRpb25zKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZmllbGQuY29uZGl0aW9uVmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgZm9yIG9uZSBjb25kaXRpb24gZmllbGQgKG9yIGNvbmRpdGlvbilcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpIHtcbiAgbGV0IHJlbmRlciA9IHRydWU7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gIT09IG51bGwgJiYgIWRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdLnZhbHVlKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBudWxsICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBlbGVtZW50ID0gZmllbGQuY29uZGl0aW9uRmllbGRbMF07XG4gICAgcmVuZGVyID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgY29uZFZhbHVlID0gZmllbGQuY29uZGl0aW9uVmFsdWVba2V5XTtcbiAgICAgICAgaWYgKCEhZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgLy8gZGF0YVtlbGVtZW50XSBpcyBhIHNlbGVjdCBmaWVsZFxuICAgICAgICAgIGlmIChkYXRhW2VsZW1lbnRdLnZhbHVlID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRmllbGRJc1JlbmRlcmVkKGZpZWxkLCBkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKGhhc0NvbmRpdGlvbnMoZmllbGQpKSB7XG4gICAgLy8gZ2V0IGZpZWxkIHRoaXMgZmllbGQgZGVwZW5kcyB1cG9uXG4gICAgbGV0IGRlcGVuZGVudEZpZWxkID0gbnVsbDtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gZmllbGQuY29uZGl0aW9uRmllbGRbMF0pIHtcbiAgICAgICAgICBkZXBlbmRlbnRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwZW5kZW50RmllbGQgIT09IG51bGwpIHtcbiAgICAgIGxldCBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgaWYgKGhhc0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQpKSB7XG4gICAgICAgIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IGNoZWNrQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgJiYgY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbmRpdGlvbnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtVGV4dEZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJfdGhpczIiLCJmb3JtIiwidXBkYXRlRnVuY3Rpb24iLCJuYW1lIiwiX2RlZmluZVByb3BlcnR5MiIsImZpZWxkIiwidGFyZ2V0IiwiY2FjaGUiLCJlbnRyeVBvaW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImR5bmFtaWNGaWVsZGxpc3QiLCJwb3N0RGF0YSIsImR5bmFtaWNGaWVsZGxpc3RBZGRpdGlvbmFsRmllbGRzIiwibGVuZ3RoIiwiYWRkRmllbGRzIiwiZGF0YSIsImpRdWVyeSIsInBvc3QiLCJkeW5hbWljRmllbGRsaXN0VXJsIiwiZG9uZSIsInJlc3BvbnNlRGF0YSIsIm1hdGNoaW5nRmllbGRzIiwibm9uTWF0Y2hpbmdGaWVsZHMiLCJzZXRGaWVsZHNGdW5jdGlvbiIsInJlbmRlciIsImNoZWNrSWZGaWVsZElzUmVuZGVyZWQiLCJmaWVsZHMiLCJsYWJlbCIsImFyaWFMYWJlbCIsImxhYmVsQ2xhc3MiLCJyZXF1aXJlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uTGluayIsImRlc2NyaXB0aW9uTGlua0xhYmVsIiwiaHJlZiIsImNhY2hlZERhdGEiLCJnZXRJdGVtIiwiY29udGVudCIsIkZyYWdtZW50IiwiZXJyb3JUZXh0IiwidHlwZSIsImlkIiwiZGVmYXVsdFZhbHVlIiwicGF0dGVybiIsIm9uQ2hhbmdlIiwib25Gb2N1cyIsIm1heExlbmd0aCIsIndyYXBwaW5nRGl2Iiwid3JhcHBpbmdEaXZDbGFzcyIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImRlcGVuZGVudEZpZWxkIiwiaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==