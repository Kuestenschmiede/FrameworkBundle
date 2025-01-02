"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormTextAreaField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormTextAreaField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormTextAreaField.jsx ***!
  \*******************************************************************/
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
var FormTextAreaField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormTextAreaField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormTextAreaField);
    _this = _callSuper(this, FormTextAreaField, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormTextAreaField, _Component);
  return (0, _createClass2["default"])(FormTextAreaField, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value), this.props.field);
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
        label = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: this.props.field.name,
          className: this.props.field.required ? 'c4g-required' : ''
        }, this.props.field.label));
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "field-description"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field form-group"
      }, label, this.props.errorText && /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-danger"
      }, this.props.errorText), /*#__PURE__*/_react["default"].createElement("textarea", {
        id: this.props.field.name,
        name: this.props.field.name,
        required: this.props.field.required,
        defaultValue: this.props.data[this.props.field.name] || this.props.field.value,
        onChange: this.handleChange,
        maxLength: this.props.field.maxLength,
        className: "form-control"
      }), description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVRleHRBcmVhRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxXQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQTJELFNBQUFHLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTCx3QkFBQUssQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFB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QUMsQ0FBQyxDQUFDLEVBQUU7VUFDNUNTLGNBQWMsR0FBR0osT0FBTztRQUMxQjtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSUksY0FBYyxLQUFLLElBQUksRUFBRTtNQUMzQixJQUFJQyx3QkFBd0IsR0FBRyxJQUFJO01BQ25DLElBQUlYLGFBQWEsQ0FBQ1UsY0FBYyxDQUFDLEVBQUU7UUFDakNDLHdCQUF3QixHQUFHTixlQUFlLENBQUNLLGNBQWMsRUFBRXpCLElBQUksQ0FBQztRQUNoRSxPQUFPMEIsd0JBQXdCLElBQUlOLGVBQWUsQ0FBQ3hCLEtBQUssRUFBRUksSUFBSSxDQUFDO01BQ2pFLENBQUMsTUFBTTtRQUNMLE9BQU9vQixlQUFlLENBQUN4QixLQUFLLEVBQUVJLElBQUksQ0FBQztNQUNyQztJQUNGLENBQUMsTUFBTTtNQUNMLE9BQU9vQixlQUFlLENBQUN4QixLQUFLLEVBQUVJLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtVGV4dEFyZWFGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdXRpbC9jb25kaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVRleHRBcmVhRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjaGVjayBjb25kaXRpb25cbiAgICBpZiAoIWNoZWNrSWZGaWVsZElzUmVuZGVyZWQodGhpcy5wcm9wcy5maWVsZCwgdGhpcy5wcm9wcy5kYXRhLCB0aGlzLnByb3BzLmZpZWxkcykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9ICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWQgPyAnYzRnLXJlcXVpcmVkJyA6ICcnfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9ICg8c3BhbiBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb25cIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zcGFuPik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lICsgXCIgXCIgOiBcIlwiKSArIFwiYzRnLWZvcm0tZmllbGQgZm9ybS1ncm91cFwifT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge3RoaXMucHJvcHMuZXJyb3JUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPXtcInRleHQtZGFuZ2VyXCJ9Pnt0aGlzLnByb3BzLmVycm9yVGV4dH08L2Rpdj59XG4gICAgICAgICAgPHRleHRhcmVhIGlkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e3RoaXMucHJvcHMuZmllbGQubWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sXCJ9Lz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uZGl0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1UZXh0QXJlYUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJmb3JtIiwidXBkYXRlRnVuY3Rpb24iLCJuYW1lIiwiX2RlZmluZVByb3BlcnR5MiIsImZpZWxkIiwidGFyZ2V0IiwicmVuZGVyIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsImRhdGEiLCJmaWVsZHMiLCJsYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImh0bWxGb3IiLCJjbGFzc05hbWUiLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZXJyb3JUZXh0IiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsIm1heExlbmd0aCIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImxlbmd0aCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImRlcGVuZGVudEZpZWxkIiwiaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==