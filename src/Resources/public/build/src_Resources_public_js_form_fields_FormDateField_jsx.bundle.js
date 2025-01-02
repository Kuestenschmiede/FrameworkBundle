"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormDateField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormDateField.jsx":
/*!***************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormDateField.jsx ***!
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
var FormDateField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormDateField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormDateField);
    _this = _callSuper(this, FormDateField, [props]);
    var date = null;
    if (_this.props.data[_this.props.field.name]) {
      date = new Date(_this.props.data[_this.props.field.name] * 1000);
    }
    _this.state = {
      date: date
    };
    _this.regex = {
      fullPattern: '^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\.(([1-9])|(0[1-9])|(1[0-2]))\.[1-2]([0-9]{3})$',
      full: new RegExp('^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\.(([1-9])|(0[1-9])|(1[0-2]))\.[1-2]([0-9]{3})$')
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.convertDateToString = _this.convertDateToString.bind(_this);
    _this.convertCompleteStringToDate = _this.convertCompleteStringToDate.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormDateField, _Component);
  return (0, _createClass2["default"])(FormDateField, [{
    key: "handleChange",
    value: function handleChange(event) {
      var dateString = event.target.value;
      if (this.regex.full.test(dateString) === true) {
        var values = dateString.split('.');
        var day = parseInt(values[0]);
        var month = parseInt(values[1]) - 1;
        var year = parseInt(values[2]);
        var date = new Date(year, month, day);
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, date.valueOf() / 1000), this.props.field);
        if (day !== date.getDate()) {
          event.target.value = this.convertDateToString(date);
        }
      } else if (dateString === '') {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, null), this.props.field);
      }
    }
  }, {
    key: "convertDateToString",
    value: function convertDateToString(date) {
      var day = date.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      return day + '.' + month + '.' + date.getFullYear();
    }
  }, {
    key: "convertCompleteStringToDate",
    value: function convertCompleteStringToDate(string) {
      var values = string.split('.');
      var day = parseInt(values[0]);
      var month = parseInt(values[1]) - 1;
      var year = parseInt(values[2]);
      return new Date(year, month, day);
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
      var className;
      if (this.props.field.className) {
        className = this.props.field.name + ' ' + this.props.field.className;
      } else {
        className = this.props.field.className;
      }
      var defaultValue = null;
      if (this.state.date !== null) {
        defaultValue = this.convertDateToString(this.state.date);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-form-field form-group'
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: this.props.field.required ? 'c4g-required' : ''
      }, label), /*#__PURE__*/_react["default"].createElement("input", {
        type: 'text',
        className: className + " form-control",
        required: this.props.field.required,
        defaultValue: defaultValue,
        pattern: this.regex.fullPattern,
        placeholder: 'TT.MM.JJJJ',
        onChange: this.handleChange,
        maxLength: 10
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: 'hidden',
        name: this.props.field.name,
        value: this.props.data[this.props.field.name] || ''
      }), /*#__PURE__*/_react["default"].createElement("small", {
        className: "field-description form-text text-muted"
      }, description));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybURhdGVGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxN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QUFPLElBQUk7RUFDYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybURhdGVGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdXRpbC9jb25kaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGVGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGRhdGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdICogMTAwMCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGU6IGRhdGVcbiAgICB9O1xuXG4gICAgdGhpcy5yZWdleCA9IHtcbiAgICAgIGZ1bGxQYXR0ZXJuOiAnXigoWzEtOV0pfCgwWzEtOV0pfCgxWzAtOV0pfCgyWzAtOV0pfCgzWzAtMV0pKVxcLigoWzEtOV0pfCgwWzEtOV0pfCgxWzAtMl0pKVxcLlsxLTJdKFswLTldezN9KSQnLFxuICAgICAgZnVsbDogbmV3IFJlZ0V4cCgnXigoWzEtOV0pfCgwWzEtOV0pfCgxWzAtOV0pfCgyWzAtOV0pfCgzWzAtMV0pKVxcLigoWzEtOV0pfCgwWzEtOV0pfCgxWzAtMl0pKVxcLlsxLTJdKFswLTldezN9KSQnKVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb252ZXJ0RGF0ZVRvU3RyaW5nID0gdGhpcy5jb252ZXJ0RGF0ZVRvU3RyaW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb252ZXJ0Q29tcGxldGVTdHJpbmdUb0RhdGUgPSB0aGlzLmNvbnZlcnRDb21wbGV0ZVN0cmluZ1RvRGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IGRhdGVTdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGhpcy5yZWdleC5mdWxsLnRlc3QoZGF0ZVN0cmluZykgPT09IHRydWUpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBkYXRlU3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgICBsZXQgZGF5ID0gcGFyc2VJbnQodmFsdWVzWzBdKTtcbiAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KHZhbHVlc1sxXSkgLSAxO1xuICAgICAgbGV0IHllYXIgPSBwYXJzZUludCh2YWx1ZXNbMl0pO1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBkYXRlLnZhbHVlT2YoKSAvIDEwMDB9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAgIGlmIChkYXkgIT09IGRhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5jb252ZXJ0RGF0ZVRvU3RyaW5nKGRhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZVN0cmluZyA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBudWxsfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgfVxuICB9XG5cbiAgY29udmVydERhdGVUb1N0cmluZyhkYXRlKSB7XG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGlmIChkYXkgPCAxMCkge1xuICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgfVxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcbiAgICB9XG4gICAgcmV0dXJuIGRheSArICcuJyArIG1vbnRoICsgJy4nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgY29udmVydENvbXBsZXRlU3RyaW5nVG9EYXRlKHN0cmluZykge1xuICAgIGxldCB2YWx1ZXMgPSBzdHJpbmcuc3BsaXQoJy4nKTtcbiAgICBsZXQgZGF5ID0gcGFyc2VJbnQodmFsdWVzWzBdKTtcbiAgICBsZXQgbW9udGggPSBwYXJzZUludCh2YWx1ZXNbMV0pIC0gMTtcbiAgICBsZXQgeWVhciA9IHBhcnNlSW50KHZhbHVlc1syXSk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSB0aGlzLnByb3BzLmZpZWxkLmxhYmVsO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJyAnICsgdGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLmRhdGUgIT09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuY29udmVydERhdGVUb1N0cmluZyh0aGlzLnN0YXRlLmRhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2M0Zy1mb3JtLWZpZWxkIGZvcm0tZ3JvdXAnfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCA/ICdjNGctcmVxdWlyZWQnIDogJyd9PntsYWJlbH08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT17J3RleHQnfVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyBcIiBmb3JtLWNvbnRyb2xcIn1cbiAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICBwYXR0ZXJuPXt0aGlzLnJlZ2V4LmZ1bGxQYXR0ZXJufVxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUVC5NTS5KSkpKJ31cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPXsnaGlkZGVuJ31cbiAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSB8fCAnJ31cbiAgICAgICAgLz5cbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZpZWxkLWRlc2NyaXB0aW9uIGZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+e2Rlc2NyaXB0aW9ufTwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uZGl0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1EYXRlRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZGF0ZSIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJEYXRlIiwic3RhdGUiLCJyZWdleCIsImZ1bGxQYXR0ZXJuIiwiZnVsbCIsIlJlZ0V4cCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJjb252ZXJ0RGF0ZVRvU3RyaW5nIiwiY29udmVydENvbXBsZXRlU3RyaW5nVG9EYXRlIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwiZGF0ZVN0cmluZyIsInRhcmdldCIsInRlc3QiLCJ2YWx1ZXMiLCJzcGxpdCIsImRheSIsInBhcnNlSW50IiwibW9udGgiLCJ5ZWFyIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwiX2RlZmluZVByb3BlcnR5MiIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwic3RyaW5nIiwicmVuZGVyIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsImZpZWxkcyIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJjcmVhdGVFbGVtZW50IiwicmVxdWlyZWQiLCJ0eXBlIiwicGF0dGVybiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJtYXhMZW5ndGgiLCJDb21wb25lbnQiLCJoYXNDb25kaXRpb25zIiwiY29uZGl0aW9uRmllbGQiLCJjb25kaXRpb25WYWx1ZSIsImZvckVhY2giLCJsZW5ndGgiLCJjaGVja0NvbmRpdGlvbnMiLCJlbGVtZW50IiwiaW5kZXgiLCJTdHJpbmciLCJjb25kVmFsdWUiLCJkZXBlbmRlbnRGaWVsZCIsImlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=