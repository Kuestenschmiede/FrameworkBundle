"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormDateRangeField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormDateRangeField.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormDateRangeField.jsx ***!
  \********************************************************************/
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
var _FormDatepickerField = _interopRequireDefault(__webpack_require__(/*! ./FormDatepickerField.jsx */ "./src/Resources/public/js/form/fields/FormDatepickerField.jsx"));
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
var FormDateRangeField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormDateRangeField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormDateRangeField);
    _this = _callSuper(this, FormDateRangeField, [props]);
    _this.cacheFromField = _this.cacheFromField.bind(_this);
    _this.cacheUntilField = _this.cacheUntilField.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormDateRangeField, _Component);
  return (0, _createClass2["default"])(FormDateRangeField, [{
    key: "render",
    value: function render() {
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var fromField = this.createFromField();
      var untilField = this.createUntilField();
      var description = null;
      var descriptionLink = null;
      if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
        descriptionLink = /*#__PURE__*/_react["default"].createElement("a", {
          className: "form-description-link btn btn-info btn-sm",
          href: this.props.field.descriptionLink,
          target: "_blank"
        }, " ", this.props.field.descriptionLinkLabel);
      }
      if (this.props.field.description) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "c4g-field-description c4g-form-text"
        }, this.props.field.description, " ", descriptionLink);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.className
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.headline.headlineClass
      }, this.props.field.headline), /*#__PURE__*/_react["default"].createElement(_FormDatepickerField["default"], {
        field: fromField,
        data: this.props.data,
        form: this.props.form,
        errorText: this.props.errorText
      }), /*#__PURE__*/_react["default"].createElement(_FormDatepickerField["default"], {
        field: untilField,
        data: this.props.data,
        form: this.props.form,
        errorText: this.props.errorText
      }), description);
    }
  }, {
    key: "createFromField",
    value: function createFromField() {
      var field = JSON.parse(JSON.stringify(this.props.field));
      field.name = this.props.field.fromFieldname;
      field.placeholderText = this.props.field.fromPlaceholderText;
      if (this.props.field.cache && this.props.field.entryPoint) {
        field.onChange = this.cacheFromField;
        var cachedData = localStorage.getItem('form-daterange-' + this.props.field.entryPoint + '-' + field.name);
        if (cachedData) {
          field.selected = new Date(cachedData * 1000);
          field.fromFieldname = cachedData;
        }
      }
      return this.transformField(field);
    }
  }, {
    key: "createUntilField",
    value: function createUntilField() {
      var field = JSON.parse(JSON.stringify(this.props.field));
      field.name = this.props.field.untilFieldname;
      field.placeholderText = this.props.field.untilPlaceholderText;
      if (this.props.field.cache && this.props.field.entryPoint) {
        field.onChange = this.cacheUntilField;
        var cachedData = localStorage.getItem('form-daterange-' + this.props.field.entryPoint + '-' + field.name);
        if (cachedData) {
          field.selected = new Date(cachedData * 1000);
          field.untilFieldname = cachedData;
        }
      }
      return this.transformField(field);
    }
  }, {
    key: "cacheFromField",
    value: function cacheFromField(date, event) {
      if (date !== null) {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.fromFieldname, date.getTime() / 1000), JSON.parse(JSON.stringify(this.props.field)));
      } else {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.fromFieldname, ''), JSON.parse(JSON.stringify(this.props.field)));
      }
      var cacheDate = '';
      if (this.props.field.cache && this.props.field.entryPoint) {
        if (date !== null) {
          cacheDate = date.getTime() / 1000;
        }
        localStorage.setItem('form-daterange-' + this.props.field.entryPoint + '-' + this.props.field.fromFieldname, cacheDate);
      }
      event.preventDefault(); // needed to close the picker
    }
  }, {
    key: "cacheUntilField",
    value: function cacheUntilField(date, event) {
      if (date !== null) {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.untilFieldname, date.getTime() / 1000), JSON.parse(JSON.stringify(this.props.field)));
      } else {
        this.props.form.props.updateFunction(this.props.form.props.name, (0, _defineProperty2["default"])({}, this.props.field.untilFieldname, ''), JSON.parse(JSON.stringify(this.props.field)));
      }
      var cacheDate = '';
      if (this.props.field.cache && this.props.field.entryPoint) {
        if (date !== null) {
          cacheDate = date.getTime() / 1000;
        }
        localStorage.setItem('form-daterange-' + this.props.field.entryPoint + '-' + this.props.field.untilFieldname, cacheDate);
      }
      event.preventDefault(); // needed to close the picker
    }
  }, {
    key: "transformField",
    value: function transformField(field) {
      // we do not want duplicated labels etc.
      field.label = "";
      field.description = "";
      return field;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybURhdGVSYW5nZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFHLG9CQUFBLEdBQUFELHNCQUFBLENBQUFGLG1CQUFBO0FBQTRELFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTix3QkFBQU0sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFB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QUMsSUFBSSxDQUFDdEMsS0FBSyxDQUFDWSxLQUFLLENBQUNrQyxjQUFjLEVBQUVPLFNBQVMsQ0FBQztNQUNwSDtNQUVBSixLQUFLLENBQUNNLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUEvQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0MsY0FBY0EsQ0FBQ2pDLEtBQUssRUFBRTtNQUNwQjtNQUNBQSxLQUFLLENBQUM0QyxLQUFLLEdBQUcsRUFBRTtNQUNoQjVDLEtBQUssQ0FBQ08sV0FBVyxHQUFHLEVBQUU7TUFFdEIsT0FBT1AsS0FBSztJQUNkO0VBQUM7QUFBQSxFQXBINkM2QyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1EYXRlUmFuZ2VGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoZWNrSWZGaWVsZElzUmVuZGVyZWQgZnJvbSBcIi4uLy4uL3V0aWwvY29uZGl0aW9uc1wiO1xuaW1wb3J0IEZvcm1EYXRlcGlja2VyRmllbGQgZnJvbSBcIi4vRm9ybURhdGVwaWNrZXJGaWVsZC5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybURhdGVSYW5nZUZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2FjaGVGcm9tRmllbGQgPSB0aGlzLmNhY2hlRnJvbUZpZWxkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWNoZVVudGlsRmllbGQgPSB0aGlzLmNhY2hlVW50aWxGaWVsZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGZyb21GaWVsZCA9IHRoaXMuY3JlYXRlRnJvbUZpZWxkKCk7XG4gICAgbGV0IHVudGlsRmllbGQgPSB0aGlzLmNyZWF0ZVVudGlsRmllbGQoKTtcblxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBsZXQgZGVzY3JpcHRpb25MaW5rID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbkxpbmsgJiYgdGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbkxpbmtMYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb25MaW5rID0gPGEgY2xhc3NOYW1lPXtcImZvcm0tZGVzY3JpcHRpb24tbGluayBidG4gYnRuLWluZm8gYnRuLXNtXCJ9IGhyZWY9e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb25MaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4ge3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb25MaW5rTGFiZWx9PC9hPjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZmllbGQtZGVzY3JpcHRpb24gYzRnLWZvcm0tdGV4dFwifT57dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbn0ge2Rlc2NyaXB0aW9uTGlua308L3NwYW4+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuaGVhZGxpbmUuaGVhZGxpbmVDbGFzc30+e3RoaXMucHJvcHMuZmllbGQuaGVhZGxpbmV9PC9kaXY+XG4gICAgICAgIDxGb3JtRGF0ZXBpY2tlckZpZWxkIGZpZWxkPXtmcm9tRmllbGR9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gZm9ybT17dGhpcy5wcm9wcy5mb3JtfSBlcnJvclRleHQ9e3RoaXMucHJvcHMuZXJyb3JUZXh0fS8+XG4gICAgICAgIDxGb3JtRGF0ZXBpY2tlckZpZWxkIGZpZWxkPXt1bnRpbEZpZWxkfSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGZvcm09e3RoaXMucHJvcHMuZm9ybX0gZXJyb3JUZXh0PXt0aGlzLnByb3BzLmVycm9yVGV4dH0vPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlRnJvbUZpZWxkKCkge1xuICAgIGxldCBmaWVsZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5maWVsZCkpO1xuICAgIGZpZWxkLm5hbWUgPSB0aGlzLnByb3BzLmZpZWxkLmZyb21GaWVsZG5hbWU7XG4gICAgZmllbGQucGxhY2Vob2xkZXJUZXh0ID0gdGhpcy5wcm9wcy5maWVsZC5mcm9tUGxhY2Vob2xkZXJUZXh0O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBmaWVsZC5vbkNoYW5nZSA9IHRoaXMuY2FjaGVGcm9tRmllbGQ7XG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tZGF0ZXJhbmdlLScrdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KyctJytmaWVsZC5uYW1lKTtcbiAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgIGZpZWxkLnNlbGVjdGVkID0gbmV3IERhdGUoY2FjaGVkRGF0YSAqIDEwMDApO1xuICAgICAgICBmaWVsZC5mcm9tRmllbGRuYW1lID0gY2FjaGVkRGF0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1GaWVsZChmaWVsZCk7XG4gIH1cblxuICBjcmVhdGVVbnRpbEZpZWxkKCkge1xuICAgIGxldCBmaWVsZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5maWVsZCkpO1xuICAgIGZpZWxkLm5hbWUgPSB0aGlzLnByb3BzLmZpZWxkLnVudGlsRmllbGRuYW1lO1xuICAgIGZpZWxkLnBsYWNlaG9sZGVyVGV4dCA9IHRoaXMucHJvcHMuZmllbGQudW50aWxQbGFjZWhvbGRlclRleHQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5jYWNoZSAmJiB0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQpIHtcbiAgICAgIGZpZWxkLm9uQ2hhbmdlID0gdGhpcy5jYWNoZVVudGlsRmllbGQ7XG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tZGF0ZXJhbmdlLScrdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KyctJytmaWVsZC5uYW1lKTtcbiAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgIGZpZWxkLnNlbGVjdGVkID0gbmV3IERhdGUoY2FjaGVkRGF0YSAqIDEwMDApO1xuICAgICAgICBmaWVsZC51bnRpbEZpZWxkbmFtZSA9IGNhY2hlZERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRmllbGQoZmllbGQpO1xuICB9XG5cbiAgY2FjaGVGcm9tRmllbGQoZGF0ZSwgZXZlbnQpIHtcbiAgICBpZiAoZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQuZnJvbUZpZWxkbmFtZV06IChkYXRlLmdldFRpbWUoKSAvIDEwMDApfSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmZpZWxkKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIHtbdGhpcy5wcm9wcy5maWVsZC5mcm9tRmllbGRuYW1lXTogJyd9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmllbGQpKSk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlRGF0ZSA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNhY2hlICYmIHRoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCkge1xuICAgICAgaWYgKGRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgY2FjaGVEYXRlID0gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybS1kYXRlcmFuZ2UtJyt0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQrJy0nK3RoaXMucHJvcHMuZmllbGQuZnJvbUZpZWxkbmFtZSwgY2FjaGVEYXRlKTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBuZWVkZWQgdG8gY2xvc2UgdGhlIHBpY2tlclxuICB9XG5cbiAgY2FjaGVVbnRpbEZpZWxkKGRhdGUsIGV2ZW50KSB7XG4gICAgaWYgKGRhdGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLnVudGlsRmllbGRuYW1lXTogKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCl9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmllbGQpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwge1t0aGlzLnByb3BzLmZpZWxkLnVudGlsRmllbGRuYW1lXTogJyd9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZmllbGQpKSk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlRGF0ZSA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNhY2hlICYmIHRoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCkge1xuICAgICAgaWYgKGRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgY2FjaGVEYXRlID0gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybS1kYXRlcmFuZ2UtJyt0aGlzLnByb3BzLmZpZWxkLmVudHJ5UG9pbnQrJy0nK3RoaXMucHJvcHMuZmllbGQudW50aWxGaWVsZG5hbWUsIGNhY2hlRGF0ZSk7XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gbmVlZGVkIHRvIGNsb3NlIHRoZSBwaWNrZXJcbiAgfVxuXG4gIHRyYW5zZm9ybUZpZWxkKGZpZWxkKSB7XG4gICAgLy8gd2UgZG8gbm90IHdhbnQgZHVwbGljYXRlZCBsYWJlbHMgZXRjLlxuICAgIGZpZWxkLmxhYmVsID0gXCJcIjtcbiAgICBmaWVsZC5kZXNjcmlwdGlvbiA9IFwiXCI7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbmRpdGlvbnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX0Zvcm1EYXRlcGlja2VyRmllbGQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1EYXRlUmFuZ2VGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJjYWNoZUZyb21GaWVsZCIsImJpbmQiLCJjYWNoZVVudGlsRmllbGQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsImZpZWxkIiwiZGF0YSIsImZpZWxkcyIsImZyb21GaWVsZCIsImNyZWF0ZUZyb21GaWVsZCIsInVudGlsRmllbGQiLCJjcmVhdGVVbnRpbEZpZWxkIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkxpbmsiLCJkZXNjcmlwdGlvbkxpbmtMYWJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidGFyZ2V0IiwiaGVhZGxpbmUiLCJoZWFkbGluZUNsYXNzIiwiZm9ybSIsImVycm9yVGV4dCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm5hbWUiLCJmcm9tRmllbGRuYW1lIiwicGxhY2Vob2xkZXJUZXh0IiwiZnJvbVBsYWNlaG9sZGVyVGV4dCIsImNhY2hlIiwiZW50cnlQb2ludCIsIm9uQ2hhbmdlIiwiY2FjaGVkRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWxlY3RlZCIsIkRhdGUiLCJ0cmFuc2Zvcm1GaWVsZCIsInVudGlsRmllbGRuYW1lIiwidW50aWxQbGFjZWhvbGRlclRleHQiLCJkYXRlIiwiZXZlbnQiLCJ1cGRhdGVGdW5jdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJnZXRUaW1lIiwiY2FjaGVEYXRlIiwic2V0SXRlbSIsInByZXZlbnREZWZhdWx0IiwibGFiZWwiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9