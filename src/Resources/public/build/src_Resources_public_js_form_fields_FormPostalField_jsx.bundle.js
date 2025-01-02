"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormPostalField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormPostalField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormPostalField.jsx ***!
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
var FormPostalField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormPostalField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormPostalField);
    _this = _callSuper(this, FormPostalField, [props]);
    _this.state = {
      validPostal: _this.validatePostal(_this.props.data[_this.props.field.name])
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormPostalField, _Component);
  return (0, _createClass2["default"])(FormPostalField, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;
      if (this.validatePostal(event.target.value)) {
        this.setState({
          validPostal: true
        });
        var newState = (0, _defineProperty2["default"])({}, this.props.field.name, event.target.value);
        if (this.props.field.createValidationProperty) {
          newState[this.props.field.name + "_valid"] = "1";
        }
        this.props.form.props.updateFunction(this.props.form.props.name, newState, this.props.field);
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
      } else {
        this.setState({
          validPostal: false
        });
        if (this.props.field.createValidationProperty) {
          var _newState2 = {};
          _newState2[this.props.field.name + "_valid"] = false;
          this.props.form.props.updateFunction(this.props.form.props.name, _newState2, this.props.field);
        }
      }
    }
  }, {
    key: "validatePostal",
    value: function validatePostal(postal) {
      return postal && postal.length === 5 && postal.match("[0-9]{5}");
    }
  }, {
    key: "render",
    value: function render() {
      var label = null;
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
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (this.props.field.className ? this.props.field.className + " " : "") + "c4g-form-field"
      }, label, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        id: this.props.field.name,
        name: this.props.field.name,
        required: this.props.field.required,
        defaultValue: this.props.data[this.props.field.name] || this.props.field.value,
        pattern: "[0-9]{5}",
        onChange: this.handleChange,
        className: this.state.validPostal ? "" : "invalid-postal"
      }), description));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.field.createValidationProperty) {
        var valid = this.validatePostal(this.props.data[this.props.field.name]);
        var newState = {};
        newState[this.props.field.name + "_valid"] = valid ? "1" : false;
        this.props.form.props.updateFunction(this.props.form.props.name, newState, this.props.field);
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVBvc3RhbEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxF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QUksQ0FBQ1IsS0FBSyxDQUFDTyxLQUFLLENBQUNPLEtBQU07UUFDL0VxQyxPQUFPLEVBQUUsVUFBVztRQUNwQkMsUUFBUSxFQUFFLElBQUksQ0FBQzNDLFlBQWE7UUFDM0JtQyxTQUFTLEVBQUUsSUFBSSxDQUFDekMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsRUFBRSxHQUFHO01BQWlCLENBQUMsQ0FBQyxFQUNuRTBDLFdBQ0UsQ0FDUyxDQUFDO0lBRXJCO0VBQUM7SUFBQWpDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1QyxpQkFBaUJBLENBQUEsRUFBRztNQUNsQixJQUFJLElBQUksQ0FBQ3JELEtBQUssQ0FBQ08sS0FBSyxDQUFDYyx3QkFBd0IsRUFBRTtRQUM3QyxJQUFJaUMsS0FBSyxHQUFHLElBQUksQ0FBQ2pELGNBQWMsQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUlXLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakJBLFFBQVEsQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNPLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHOEMsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLO1FBQ2hFLElBQUksQ0FBQ3RELEtBQUssQ0FBQ3NCLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLGNBQWMsQ0FBQyxJQUFJLENBQUN2QixLQUFLLENBQUNzQixJQUFJLENBQUN0QixLQUFLLENBQUNRLElBQUksRUFBRVcsUUFBUSxFQUFFLElBQUksQ0FBQ25CLEtBQUssQ0FBQ08sS0FBSyxDQUFDO01BQzlGO0lBQ0Y7RUFBQztBQUFBLEVBN0YwQ2dELGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybVBvc3RhbEZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Qb3N0YWxGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbGlkUG9zdGFsOiB0aGlzLnZhbGlkYXRlUG9zdGFsKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZVBvc3RhbChldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFBvc3RhbDogdHJ1ZX0pO1xuICAgICAgbGV0IG5ld1N0YXRlID0ge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9O1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY3JlYXRlVmFsaWRhdGlvblByb3BlcnR5KSB7XG4gICAgICAgIG5ld1N0YXRlW3RoaXMucHJvcHMuZmllbGQubmFtZSArIFwiX3ZhbGlkXCJdID0gXCIxXCI7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIG5ld1N0YXRlLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3QpIHtcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1t0aGlzLnByb3BzLmZpZWxkLm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5keW5hbWljRmllbGRsaXN0QWRkaXRpb25hbEZpZWxkc1xuICAgICAgICAgICYmIHRoaXMucHJvcHMuZmllbGQuZHluYW1pY0ZpZWxkbGlzdEFkZGl0aW9uYWxGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhZGRGaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkLmR5bmFtaWNGaWVsZGxpc3RBZGRpdGlvbmFsRmllbGRzO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3N0RGF0YVthZGRGaWVsZHNbaV1dID0gdGhpcy5wcm9wcy5kYXRhW2FkZEZpZWxkc1tpXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGpRdWVyeS5wb3N0KHRoaXMucHJvcHMuZmllbGQuZHluYW1pY0ZpZWxkbGlzdFVybCwgcG9zdERhdGEpXG4gICAgICAgICAgLmRvbmUoKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiByZXNwb25zZURhdGEubWF0Y2hpbmdGaWVsZHNcbiAgICAgICAgICAgICAgJiYgcmVzcG9uc2VEYXRhLm5vbk1hdGNoaW5nRmllbGRzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnNldEZpZWxkc0Z1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFBvc3RhbDogZmFsc2V9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNyZWF0ZVZhbGlkYXRpb25Qcm9wZXJ0eSkge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcbiAgICAgICAgbmV3U3RhdGVbdGhpcy5wcm9wcy5maWVsZC5uYW1lICsgXCJfdmFsaWRcIl0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBuZXdTdGF0ZSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVQb3N0YWwocG9zdGFsKSB7XG4gICAgcmV0dXJuIHBvc3RhbCAmJiBwb3N0YWwubGVuZ3RoID09PSA1ICYmIHBvc3RhbC5tYXRjaChcIlswLTldezV9XCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGV0IGxhYmVsQ2xhc3MgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgbGFiZWxDbGFzcyA9IFwiYzRnLXJlcXVpcmVkXCI7XG4gICAgICAgIGxhYmVsID0gPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc30gaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuZmllbGQubmFtZX0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD47XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzbWFsbCBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWRcIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zbWFsbD4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArIFwiIFwiIDogXCJcIikgKyBcImM0Zy1mb3JtLWZpZWxkXCJ9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgcGF0dGVybj17XCJbMC05XXs1fVwifVxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmFsaWRQb3N0YWwgPyBcIlwiIDogXCJpbnZhbGlkLXBvc3RhbFwifS8+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNyZWF0ZVZhbGlkYXRpb25Qcm9wZXJ0eSkge1xuICAgICAgbGV0IHZhbGlkID0gdGhpcy52YWxpZGF0ZVBvc3RhbCh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSk7XG4gICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcbiAgICAgIG5ld1N0YXRlW3RoaXMucHJvcHMuZmllbGQubmFtZSArIFwiX3ZhbGlkXCJdID0gdmFsaWQgPyBcIjFcIiA6IGZhbHNlO1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBuZXdTdGF0ZSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtUG9zdGFsRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic3RhdGUiLCJ2YWxpZFBvc3RhbCIsInZhbGlkYXRlUG9zdGFsIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJfdGhpczIiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm5ld1N0YXRlIiwiX2RlZmluZVByb3BlcnR5MiIsImNyZWF0ZVZhbGlkYXRpb25Qcm9wZXJ0eSIsImZvcm0iLCJ1cGRhdGVGdW5jdGlvbiIsImR5bmFtaWNGaWVsZGxpc3QiLCJwb3N0RGF0YSIsImR5bmFtaWNGaWVsZGxpc3RBZGRpdGlvbmFsRmllbGRzIiwibGVuZ3RoIiwiYWRkRmllbGRzIiwialF1ZXJ5IiwicG9zdCIsImR5bmFtaWNGaWVsZGxpc3RVcmwiLCJkb25lIiwicmVzcG9uc2VEYXRhIiwibWF0Y2hpbmdGaWVsZHMiLCJub25NYXRjaGluZ0ZpZWxkcyIsInNldEZpZWxkc0Z1bmN0aW9uIiwicG9zdGFsIiwibWF0Y2giLCJyZW5kZXIiLCJsYWJlbCIsImxhYmVsQ2xhc3MiLCJyZXF1aXJlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiZGVzY3JpcHRpb24iLCJGcmFnbWVudCIsInR5cGUiLCJpZCIsImRlZmF1bHRWYWx1ZSIsInBhdHRlcm4iLCJvbkNoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwidmFsaWQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9