"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormCheckboxField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormCheckboxField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormCheckboxField.jsx ***!
  \*******************************************************************/
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
var FormCheckboxField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormCheckboxField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormCheckboxField);
    _this = _callSuper(this, FormCheckboxField, [props]);
    _this.clickCheckbox = _this.clickCheckbox.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormCheckboxField, _Component);
  return (0, _createClass2["default"])(FormCheckboxField, [{
    key: "render",
    value: function render() {
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          className: "form-check-label c4g-form-check-label "
        }, this.props.field.label);
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description text-muted"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Condition, {
        data: this.props.data,
        conditions: this.props.field.conditions,
        field: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group form-check"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        id: this.props.field.name,
        name: this.props.field.name,
        defaultChecked: this.props.data[this.props.field.name] || this.props.field.checked,
        required: this.props.field.required,
        onClick: this.clickCheckbox,
        className: "form-check-input"
      }), label, " ", description)));
    }
  }, {
    key: "clickCheckbox",
    value: function clickCheckbox(event) {
      event.stopPropagation();
      var data = this.props.data;
      data[this.props.field.name] = event.target.checked ? "1" : "";
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.data[this.props.field.name] && this.props.field.checked) {
        var data = this.props.data;
        data[this.props.field.name] = "1";
        this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUNoZWNrYm94RmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFB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QUk7RUFDYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybUNoZWNrYm94RmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5cbmNvbnN0IENvbmRpdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29uZGl0aW9uL0NvbmRpdGlvbi5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ2hlY2tib3hGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbGlja0NoZWNrYm94ID0gdGhpcy5jbGlja0NoZWNrYm94LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSAoPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuZmllbGQubmFtZX0gY2xhc3NOYW1lPXtcImZvcm0tY2hlY2stbGFiZWwgYzRnLWZvcm0tY2hlY2stbGFiZWwgXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+KTtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNtYWxsIGNsYXNzTmFtZT17XCJmaWVsZC1kZXNjcmlwdGlvbiB0ZXh0LW11dGVkXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9ufTwvc21hbGw+KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxDb25kaXRpb24gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBjb25kaXRpb25zPXt0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbnN9IGZpZWxkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lICsgXCIgXCIgOiBcIlwiKSArIFwiYzRnLWZvcm0tZmllbGQgZm9ybS1ncm91cCBmb3JtLWNoZWNrXCJ9PlxuXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfSBuYW1lPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWR9IG9uQ2xpY2s9e3RoaXMuY2xpY2tDaGVja2JveH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY2hlY2staW5wdXRcIn0vPlxuICAgICAgICAgICAgICB7bGFiZWx9IHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29uZGl0aW9uPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBjbGlja0NoZWNrYm94KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQgPyBcIjFcIiA6IFwiXCI7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBkYXRhLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5maWVsZC5jaGVja2VkKSB7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IFwiMVwiO1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBkYXRhLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICB9XG4gIH1cbn0iLCJcblxuLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzQ29uZGl0aW9ucyhmaWVsZCkge1xuICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQgJiYgZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGZpZWxkLmNvbmRpdGlvblZhbHVlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGUgdmFsdWVzIGZvciBvbmUgY29uZGl0aW9uIGZpZWxkIChvciBjb25kaXRpb24pXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKSB7XG4gIGxldCByZW5kZXIgPSB0cnVlO1xuICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbZWxlbWVudF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICE9PSBudWxsICYmICFkYXRhW2VsZW1lbnRdLnZhbHVlICYmXG4gICAgICAgIChTdHJpbmcoZGF0YVtlbGVtZW50XSkgIT09IFN0cmluZyhmaWVsZC5jb25kaXRpb25WYWx1ZVtpbmRleF0pKSkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlICYmXG4gICAgICAgIChTdHJpbmcoZGF0YVtlbGVtZW50XS52YWx1ZSkgIT09IFN0cmluZyhmaWVsZC5jb25kaXRpb25WYWx1ZVtpbmRleF0pKSkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gbnVsbCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZVtpbmRleF0gIT09IG51bGwpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICBsZXQgZWxlbWVudCA9IGZpZWxkLmNvbmRpdGlvbkZpZWxkWzBdO1xuICAgIHJlbmRlciA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGNvbmRWYWx1ZSA9IGZpZWxkLmNvbmRpdGlvblZhbHVlW2tleV07XG4gICAgICAgIGlmICghIWRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSkge1xuICAgICAgICAgIC8vIGRhdGFbZWxlbWVudF0gaXMgYSBzZWxlY3QgZmllbGRcbiAgICAgICAgICBpZiAoZGF0YVtlbGVtZW50XS52YWx1ZSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgICByZW5kZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICByZW5kZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHJlbmRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tJZkZpZWxkSXNSZW5kZXJlZChmaWVsZCwgZGF0YSwgZmllbGRzKSB7XG4gIGlmIChoYXNDb25kaXRpb25zKGZpZWxkKSkge1xuICAgIC8vIGdldCBmaWVsZCB0aGlzIGZpZWxkIGRlcGVuZHMgdXBvblxuICAgIGxldCBkZXBlbmRlbnRGaWVsZCA9IG51bGw7XG4gICAgZmllbGRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IGZpZWxkLmNvbmRpdGlvbkZpZWxkWzBdKSB7XG4gICAgICAgICAgZGVwZW5kZW50RmllbGQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGRlcGVuZGVudEZpZWxkICE9PSBudWxsKSB7XG4gICAgICBsZXQgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgIGlmIChoYXNDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkKSkge1xuICAgICAgICBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSBjaGVja0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkICYmIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb25kaXRpb25zIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ29uZGl0aW9uIiwiUmVhY3QiLCJsYXp5IiwiRm9ybUNoZWNrYm94RmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiY2xpY2tDaGVja2JveCIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwibGFiZWwiLCJmaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJodG1sRm9yIiwibmFtZSIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiRnJhZ21lbnQiLCJkYXRhIiwiY29uZGl0aW9ucyIsInR5cGUiLCJpZCIsImRlZmF1bHRDaGVja2VkIiwiY2hlY2tlZCIsInJlcXVpcmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJDb21wb25lbnQiLCJoYXNDb25kaXRpb25zIiwiY29uZGl0aW9uRmllbGQiLCJjb25kaXRpb25WYWx1ZSIsImZvckVhY2giLCJsZW5ndGgiLCJjaGVja0NvbmRpdGlvbnMiLCJlbGVtZW50IiwiaW5kZXgiLCJTdHJpbmciLCJjb25kVmFsdWUiLCJjaGVja0lmRmllbGRJc1JlbmRlcmVkIiwiZmllbGRzIiwiZGVwZW5kZW50RmllbGQiLCJpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQiXSwic291cmNlUm9vdCI6IiJ9