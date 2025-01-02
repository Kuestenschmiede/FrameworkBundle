"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormTimeField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormTimeField.jsx":
/*!***************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormTimeField.jsx ***!
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var FormTimeField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormTimeField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormTimeField);
    _this = _callSuper(this, FormTimeField, [props]);
    _this.regex = {
      fullPattern: '^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$',
      full: new RegExp('^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$')
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormTimeField, _Component);
  return (0, _createClass2["default"])(FormTimeField, [{
    key: "handleChange",
    value: function handleChange(event) {
      var dateString = event.target.value;
      if (this.regex.full.test(dateString) === true) {
        var values = dateString.split(':');
        var hours = parseInt(values[0]);
        var minutes = parseInt(values[1]);
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, hours * 3600 + minutes * 60), this.props.field);
      } else {
        if (dateString.length === 4) {
          var parts = dateString.split('');
          if (this.regex.full.test(parts[0] + parts[1] + ':' + parts[2] + parts[3]) === true) {
            var _hours = parseInt(parts[0] + parts[1]);
            var _minutes = parseInt(parts[2] + parts[3]);
            this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, _hours * 3600 + _minutes * 60), this.props.field);
          }
        } else if (dateString.length === 3) {
          var _parts = dateString.split('');
          if (this.regex.full.test(_parts[0] + ':' + _parts[1] + _parts[2]) === true) {
            var _hours2 = parseInt(_parts[0]);
            var _minutes2 = parseInt(_parts[1] + _parts[2]);
            this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, _hours2 * 3600 + _minutes2 * 60), this.props.field);
          }
        } else if (dateString === '') {
          // value deleted
          this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.name, null), this.props.field);
        }
      }
    }
  }, {
    key: "convertTimeToString",
    value: function convertTimeToString(time) {
      if (time === null || typeof time === 'undefined') {
        return '';
      }
      var hours = (time - time % 3600) / 3600;
      var minutes = time % 3600 / 60;
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      return hours + ':' + minutes;
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
      return /*#__PURE__*/_react["default"].createElement(Condition, {
        data: this.props.data,
        conditions: this.props.field.conditions,
        field: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-form-field form-group'
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: this.props.field.required ? 'c4g-required' : ''
      }, label), /*#__PURE__*/_react["default"].createElement("input", {
        type: 'time',
        className: className + " form-control",
        required: this.props.field.required,
        defaultValue: this.convertTimeToString(this.props.data[this.props.field.name]),
        pattern: this.regex.fullPattern,
        placeholder: 'HH:MM',
        onChange: this.handleChange,
        maxLength: 5
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: 'hidden',
        name: this.props.field.name,
        value: this.props.data[this.props.field.name] || ''
      }), /*#__PURE__*/_react["default"].createElement("small", {
        className: "field-description form-text text-muted"
      }, description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVRpbWVGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxN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QUFFQyxLQUFLLEVBQUs7TUFDakMsSUFBSTVCLEtBQUssQ0FBQ3VCLGNBQWMsQ0FBQ3RCLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsSUFBSTBCLE9BQU8sQ0FBQzdCLElBQUksS0FBS0UsS0FBSyxDQUFDdUIsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQzVDUSxjQUFjLEdBQUdKLE9BQU87UUFDMUI7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUlJLGNBQWMsS0FBSyxJQUFJLEVBQUU7TUFDM0IsSUFBSUMsd0JBQXdCLEdBQUcsSUFBSTtNQUNuQyxJQUFJVixhQUFhLENBQUNTLGNBQWMsQ0FBQyxFQUFFO1FBQ2pDQyx3QkFBd0IsR0FBR04sZUFBZSxDQUFDSyxjQUFjLEVBQUV4QixJQUFJLENBQUM7UUFDaEUsT0FBT3lCLHdCQUF3QixJQUFJTixlQUFlLENBQUMxQixLQUFLLEVBQUVPLElBQUksQ0FBQztNQUNqRSxDQUFDLE1BQU07UUFDTCxPQUFPbUIsZUFBZSxDQUFDMUIsS0FBSyxFQUFFTyxJQUFJLENBQUM7TUFDckM7SUFDRixDQUFDLE1BQU07TUFDTCxPQUFPbUIsZUFBZSxDQUFDMUIsS0FBSyxFQUFFTyxJQUFJLENBQUM7SUFDckM7RUFDRixDQUFDLE1BQU07SUFDTCxPQUFPLElBQUk7RUFDYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybVRpbWVGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdXRpbC9jb25kaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuY29uc3QgQ29uZGl0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb25kaXRpb24vQ29uZGl0aW9uLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1UaW1lRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnZXggPSB7XG4gICAgICBmdWxsUGF0dGVybjogJ14oKFswLTldKXwoWzAtMV1bMC05XSl8KDJbMC0zXSkpOihbMC01XVswLTldKSQnLFxuICAgICAgZnVsbDogbmV3IFJlZ0V4cCgnXigoWzAtOV0pfChbMC0xXVswLTldKXwoMlswLTNdKSk6KFswLTVdWzAtOV0pJCcpXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGxldCBkYXRlU3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHRoaXMucmVnZXguZnVsbC50ZXN0KGRhdGVTdHJpbmcpID09PSB0cnVlKSB7XG4gICAgICBsZXQgdmFsdWVzID0gZGF0ZVN0cmluZy5zcGxpdCgnOicpO1xuICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQodmFsdWVzWzBdKTtcbiAgICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQodmFsdWVzWzFdKTtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiAoKGhvdXJzICogMzYwMCkgKyAobWludXRlcyAqIDYwKSl9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGxldCBwYXJ0cyA9IGRhdGVTdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICBpZiAodGhpcy5yZWdleC5mdWxsLnRlc3QocGFydHNbMF0gKyBwYXJ0c1sxXSArICc6JyArIHBhcnRzWzJdICsgcGFydHNbM10pID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQocGFydHNbMF0gKyBwYXJ0c1sxXSk7XG4gICAgICAgICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludChwYXJ0c1syXSArIHBhcnRzWzNdKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIHtbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTogKChob3VycyAqIDM2MDApICsgKG1pbnV0ZXMgKiA2MCkpfSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgbGV0IHBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgIGlmICh0aGlzLnJlZ2V4LmZ1bGwudGVzdChwYXJ0c1swXSArICc6JyArIHBhcnRzWzFdICsgcGFydHNbMl0pID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQocGFydHNbMV0gKyBwYXJ0c1syXSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06ICgoaG91cnMgKiAzNjAwKSArIChtaW51dGVzICogNjApKX0sIHRoaXMucHJvcHMuZmllbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRhdGVTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgIC8vIHZhbHVlIGRlbGV0ZWRcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IG51bGx9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb252ZXJ0VGltZVRvU3RyaW5nKHRpbWUpIHtcbiAgICBpZiAodGltZSA9PT0gbnVsbCB8fCB0eXBlb2YgdGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGhvdXJzID0gKHRpbWUgLSAodGltZSAlIDM2MDApKSAvIDM2MDA7XG4gICAgbGV0IG1pbnV0ZXMgPSAodGltZSAlIDM2MDApIC8gNjA7XG4gICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgIGhvdXJzID0gJzAnICsgaG91cnM7XG4gICAgfVxuICAgIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSB0aGlzLnByb3BzLmZpZWxkLmxhYmVsO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJyAnICsgdGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZGl0aW9uIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gY29uZGl0aW9ucz17dGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25zfSBmaWVsZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjNGctZm9ybS1maWVsZCBmb3JtLWdyb3VwJ30+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCA/ICdjNGctcmVxdWlyZWQnIDogJyd9PntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPXsndGltZSd9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgXCIgZm9ybS1jb250cm9sXCJ9XG4gICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuY29udmVydFRpbWVUb1N0cmluZyh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSl9XG4gICAgICAgICAgICAgICAgIHBhdHRlcm49e3RoaXMucmVnZXguZnVsbFBhdHRlcm59XG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnSEg6TU0nfVxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgIG1heExlbmd0aD17NX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPXsnaGlkZGVuJ31cbiAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj57ZGVzY3JpcHRpb259PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbmRpdGlvbj5cbiAgICApO1xuICB9XG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uZGl0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkNvbmRpdGlvbiIsIlJlYWN0IiwibGF6eSIsIkZvcm1UaW1lRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwicmVnZXgiLCJmdWxsUGF0dGVybiIsImZ1bGwiLCJSZWdFeHAiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50IiwiZGF0ZVN0cmluZyIsInRhcmdldCIsInRlc3QiLCJ2YWx1ZXMiLCJzcGxpdCIsImhvdXJzIiwicGFyc2VJbnQiLCJtaW51dGVzIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwibmFtZSIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJmaWVsZCIsImxlbmd0aCIsInBhcnRzIiwiY29udmVydFRpbWVUb1N0cmluZyIsInRpbWUiLCJyZW5kZXIiLCJjaGVja0lmRmllbGRJc1JlbmRlcmVkIiwiZGF0YSIsImZpZWxkcyIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwiY29uZGl0aW9ucyIsInJlcXVpcmVkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsInBhdHRlcm4iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibWF4TGVuZ3RoIiwiQ29tcG9uZW50IiwiaGFzQ29uZGl0aW9ucyIsImNvbmRpdGlvbkZpZWxkIiwiY29uZGl0aW9uVmFsdWUiLCJmb3JFYWNoIiwiY2hlY2tDb25kaXRpb25zIiwiZWxlbWVudCIsImluZGV4IiwiU3RyaW5nIiwiY29uZFZhbHVlIiwiZGVwZW5kZW50RmllbGQiLCJpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQiXSwic291cmNlUm9vdCI6IiJ9