"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormNumberField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormNumberField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormNumberField.jsx ***!
  \*****************************************************************/
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var FormNumberField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormNumberField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormNumberField);
    _this = _callSuper(this, FormNumberField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormNumberField, _Component);
  return (0, _createClass2["default"])(FormNumberField, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value), this.props.field);
    }
  }, {
    key: "render",
    value: function render() {
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          className: this.props.field.required ? 'c4g-required' : ''
        }, this.props.field.label));
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Condition, {
        data: this.props.data,
        conditions: this.props.field.conditions,
        field: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"
      }, label, /*#__PURE__*/_react["default"].createElement("input", {
        type: "number",
        id: this.props.field.name,
        name: this.props.field.name,
        required: this.props.field.required,
        defaultValue: this.props.data[this.props.field.name] || this.props.field.value || null,
        onChange: this.handleChange,
        min: this.props.field.min,
        max: this.props.field.max,
        step: this.props.field.step,
        className: "form-control"
      }), description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU51bWJlckZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUEyRCxTQUFBRyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUwsd0JBQUFLLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQ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QUFFQyxLQUFLLEVBQUs7TUFDakMsSUFBSTNCLEtBQUssQ0FBQ3FCLGNBQWMsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQyxJQUFJRSxPQUFPLENBQUM1QixJQUFJLEtBQUtFLEtBQUssQ0FBQ3FCLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUM1Q1csY0FBYyxHQUFHTixPQUFPO1FBQzFCO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJTSxjQUFjLEtBQUssSUFBSSxFQUFFO01BQzNCLElBQUlDLHdCQUF3QixHQUFHLElBQUk7TUFDbkMsSUFBSWIsYUFBYSxDQUFDWSxjQUFjLENBQUMsRUFBRTtRQUNqQ0Msd0JBQXdCLEdBQUdSLGVBQWUsQ0FBQ08sY0FBYyxFQUFFdEIsSUFBSSxDQUFDO1FBQ2hFLE9BQU91Qix3QkFBd0IsSUFBSVIsZUFBZSxDQUFDekIsS0FBSyxFQUFFVSxJQUFJLENBQUM7TUFDakUsQ0FBQyxNQUFNO1FBQ0wsT0FBT2UsZUFBZSxDQUFDekIsS0FBSyxFQUFFVSxJQUFJLENBQUM7TUFDckM7SUFDRixDQUFDLE1BQU07TUFDTCxPQUFPZSxlQUFlLENBQUN6QixLQUFLLEVBQUVVLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtTnVtYmVyRmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5cbmNvbnN0IENvbmRpdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29uZGl0aW9uL0NvbmRpdGlvbi5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTnVtYmVyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9ICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCA/ICdjNGctcmVxdWlyZWQnIDogJyd9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50Pik7XG4gICAgfVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzbWFsbCBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWRcIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zbWFsbD4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Q29uZGl0aW9uIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gY29uZGl0aW9ucz17dGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25zfSBmaWVsZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgKyBcIiBcIiA6IFwiXCIpICsgXCJjNGctZm9ybS1maWVsZCBmb3JtLWdyb3VwXCJ9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC52YWx1ZSB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMuZmllbGQubWlufVxuICAgICAgICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5maWVsZC5tYXh9XG4gICAgICAgICAgICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5maWVsZC5zdGVwfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2xcIn0vPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbmRpdGlvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uZGl0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkNvbmRpdGlvbiIsIlJlYWN0IiwibGF6eSIsIkZvcm1OdW1iZXJGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwibmFtZSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJmaWVsZCIsInRhcmdldCIsInJlbmRlciIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiaHRtbEZvciIsImNsYXNzTmFtZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwiY29uZGl0aW9ucyIsInR5cGUiLCJpZCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImxlbmd0aCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImNoZWNrSWZGaWVsZElzUmVuZGVyZWQiLCJmaWVsZHMiLCJkZXBlbmRlbnRGaWVsZCIsImlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=