"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_condition_Condition_jsx"],{

/***/ "./src/Resources/public/js/condition/Condition.jsx":
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/condition/Condition.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
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
var Condition = exports["default"] = /*#__PURE__*/function (_Component) {
  function Condition(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Condition);
    _this = _callSuper(this, Condition, [props]);
    _this.state = {};
    return _this;
  }
  (0, _inherits2["default"])(Condition, _Component);
  return (0, _createClass2["default"])(Condition, [{
    key: "render",
    value: function render() {
      if (this.state.ok) {
        return this.props.children;
      } else {
        return null;
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var ok = true;
      var conditions = [];
      if (props.conditions && typeof props.conditions.forEach === 'function') {
        try {
          props.conditions.forEach(function (condition) {
            if (Condition.isConditionMet(condition, props) === false) {
              ok = false;
              condition.ok = false;
            } else {
              condition.ok = true;
            }
            conditions.push(condition);
          }, this);
        } catch (e) {
          console.error(e);
        }
      }
      return {
        conditions: conditions,
        ok: ok
      };
    }
  }, {
    key: "isConditionMet",
    value: function isConditionMet(condition, props) {
      var fieldValue, conditionValue;
      if ((0, _typeof2["default"])(props.data[condition.field]) === 'object') {
        if (props.data[condition.field] !== null && typeof props.data[condition.field].value !== 'undefined') {
          fieldValue = String(props.data[condition.field].value);
        } else {
          fieldValue = null;
        }
      } else {
        fieldValue = String(props.data[condition.field]);
      }
      conditionValue = String(condition.value);
      if (condition.type === 'or' && condition.conditions.length > 1) {
        var met = false;
        condition.conditions.forEach(function (element) {
          if (Condition.isConditionMet(element, props)) {
            met = true;
          }
        }, this);
        return met;
      } else if (typeof condition.field !== 'undefined' && typeof condition.value !== 'undefined') {
        if (condition.not !== true) {
          if (fieldValue !== conditionValue) {
            return false;
          }
        } else {
          if (fieldValue === conditionValue) {
            return false;
          }
        }
      }
      return true;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29uZGl0aW9uX0NvbmRpdGlvbl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssUUFBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FB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QUFXLEVBQUU7UUFDM0YsSUFBSU8sU0FBUyxDQUFDZSxHQUFHLEtBQUssSUFBSSxFQUFFO1VBQzFCLElBQUlWLFVBQVUsS0FBS0MsY0FBYyxFQUFFO1lBQ2pDLE9BQU8sS0FBSztVQUNkO1FBQ0YsQ0FBQyxNQUFNO1VBQ0wsSUFBSUQsVUFBVSxLQUFLQyxjQUFjLEVBQUU7WUFDakMsT0FBTyxLQUFLO1VBQ2Q7UUFDRjtNQUNGO01BRUEsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBbkVvQ1UsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb25kaXRpb24vQ29uZGl0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzKSB7XG4gICAgbGV0IG9rID0gdHJ1ZTtcbiAgICBsZXQgY29uZGl0aW9ucyA9IFtdO1xuXG4gICAgaWYgKHByb3BzLmNvbmRpdGlvbnMgJiYgdHlwZW9mIHByb3BzLmNvbmRpdGlvbnMuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvcHMuY29uZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICAgIGlmIChDb25kaXRpb24uaXNDb25kaXRpb25NZXQoY29uZGl0aW9uLCBwcm9wcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgY29uZGl0aW9uLm9rID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbi5vayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaChjb25kaXRpb24pO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29uZGl0aW9uczogY29uZGl0aW9ucyxcbiAgICAgIG9rOiBva1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgaXNDb25kaXRpb25NZXQoY29uZGl0aW9uLCBwcm9wcyl7XG4gICAgbGV0IGZpZWxkVmFsdWUsIGNvbmRpdGlvblZhbHVlO1xuICAgIGlmICh0eXBlb2YgcHJvcHMuZGF0YVtjb25kaXRpb24uZmllbGRdID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BzLmRhdGFbY29uZGl0aW9uLmZpZWxkXSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvcHMuZGF0YVtjb25kaXRpb24uZmllbGRdLnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmaWVsZFZhbHVlID0gU3RyaW5nKHByb3BzLmRhdGFbY29uZGl0aW9uLmZpZWxkXS52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZFZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGRWYWx1ZSA9IFN0cmluZyhwcm9wcy5kYXRhW2NvbmRpdGlvbi5maWVsZF0pO1xuICAgIH1cbiAgICBjb25kaXRpb25WYWx1ZSA9IFN0cmluZyhjb25kaXRpb24udmFsdWUpO1xuICAgIGlmIChjb25kaXRpb24udHlwZSA9PT0gJ29yJyAmJiBjb25kaXRpb24uY29uZGl0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgbWV0ID0gZmFsc2U7XG4gICAgICBjb25kaXRpb24uY29uZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKENvbmRpdGlvbi5pc0NvbmRpdGlvbk1ldChlbGVtZW50LCBwcm9wcykpIHtcbiAgICAgICAgICBtZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHJldHVybiBtZXQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZGl0aW9uLmZpZWxkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uZGl0aW9uLnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGNvbmRpdGlvbi5ub3QgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IGNvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PT0gY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vaykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJDb25kaXRpb24iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic3RhdGUiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwib2siLCJjaGlsZHJlbiIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbmRpdGlvbnMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaXNDb25kaXRpb25NZXQiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwiZmllbGRWYWx1ZSIsImNvbmRpdGlvblZhbHVlIiwiX3R5cGVvZjIiLCJkYXRhIiwiZmllbGQiLCJTdHJpbmciLCJ0eXBlIiwibGVuZ3RoIiwibWV0IiwiZWxlbWVudCIsIm5vdCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=