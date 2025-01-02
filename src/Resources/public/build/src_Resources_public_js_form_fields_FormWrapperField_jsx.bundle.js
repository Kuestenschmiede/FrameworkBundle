"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormWrapperField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormWrapperField.jsx":
/*!******************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormWrapperField.jsx ***!
  \******************************************************************/
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
var FormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./FormMapperField.jsx */ "./src/Resources/public/js/form/fields/FormMapperField.jsx"));
});
var FormWrapperField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormWrapperField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormWrapperField);
    _this = _callSuper(this, FormWrapperField, [props]);
    _this.state = {
      altDescription: false
    };
    _this.setAltDescription = _this.setAltDescription.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormWrapperField, _Component);
  return (0, _createClass2["default"])(FormWrapperField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var wrappedFields = [];
      var fields = this.props.fields;
      for (var i = 0; i < fields.length; i++) {
        if (this.props.field.wrappedFields.includes(fields[i].name)) {
          fields[i].wrapperName = this.props.field.cssId;
          wrappedFields.push(fields[i]);
        }
      }
      var hr = null;
      if (this.props.fields.label || this.props.field.description) {
        hr = /*#__PURE__*/_react["default"].createElement("hr", {
          className: "panel-hr"
        });
      }
      if (this.props.parentNode === this.props.form && this.props.field.innerWrapper) {
        return null;
      }
      var description = this.state.altDescription || this.props.field.description;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.className,
        id: this.props.field.cssId
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        className: "panel-title"
      }, this.props.field.label), /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel-description"
      }, description), hr, wrappedFields.map(function (item, id) {
        return /*#__PURE__*/_react["default"].createElement(FormMapperField, {
          key: id,
          field: item,
          data: _this2.props.data,
          form: _this2.props.form,
          errorText: _this2.props.errorTexts ? _this2.props.errorTexts[item.name] : null,
          parentNode: _this2,
          fields: _this2.props.fields,
          languageRefs: _this2.props.languageRefs
        });
      }));
    }
  }, {
    key: "setAltDescription",
    value: function setAltDescription(description) {
      this.setState({
        altDescription: description
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVdyYXBwZXJGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxF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WixLQUFLLENBQUNjLE1BQU87VUFBQ3NCLFlBQVksRUFBRXhCLE1BQUksQ0FBQ1osS0FBSyxDQUFDb0M7UUFBYSxDQUFDLENBQUM7TUFDL0csQ0FBQyxDQUVBLENBQUM7SUFFVjtFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBTCxpQkFBaUJBLENBQUNtQixXQUFXLEVBQUU7TUFDN0IsSUFBSSxDQUFDYSxRQUFRLENBQUM7UUFDWmpDLGNBQWMsRUFBRW9CO01BQ2xCLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQSxFQS9DMkNjLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybVdyYXBwZXJGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGb3JtTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRm9ybU1hcHBlckZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1XcmFwcGVyRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbHREZXNjcmlwdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuc2V0QWx0RGVzY3JpcHRpb24gPSB0aGlzLnNldEFsdERlc2NyaXB0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHdyYXBwZWRGaWVsZHMgPSBbXTtcbiAgICBsZXQgZmllbGRzID0gdGhpcy5wcm9wcy5maWVsZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLndyYXBwZWRGaWVsZHMuaW5jbHVkZXMoZmllbGRzW2ldLm5hbWUpKSB7XG4gICAgICAgIGZpZWxkc1tpXS53cmFwcGVyTmFtZSA9IHRoaXMucHJvcHMuZmllbGQuY3NzSWQ7XG4gICAgICAgIHdyYXBwZWRGaWVsZHMucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaHIgPSBudWxsO1xuICAgIGlmKHRoaXMucHJvcHMuZmllbGRzLmxhYmVsIHx8IHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGhyID0gPGhyIGNsYXNzTmFtZT17XCJwYW5lbC1oclwifS8+O1xuICAgIH1cblxuICAgIGlmICgodGhpcy5wcm9wcy5wYXJlbnROb2RlID09PSB0aGlzLnByb3BzLmZvcm0pICYmIHRoaXMucHJvcHMuZmllbGQuaW5uZXJXcmFwcGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5hbHREZXNjcmlwdGlvbiB8fCB0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmZpZWxkLmNzc0lkfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17XCJwYW5lbC10aXRsZVwifT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwYW5lbC1kZXNjcmlwdGlvblwifT57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIHtocn1cbiAgICAgICAge1xuICAgICAgICAgIHdyYXBwZWRGaWVsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxGb3JtTWFwcGVyRmllbGQga2V5PXtpZH0gZmllbGQ9e2l0ZW19IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gZm9ybT17dGhpcy5wcm9wcy5mb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0PXt0aGlzLnByb3BzLmVycm9yVGV4dHMgPyB0aGlzLnByb3BzLmVycm9yVGV4dHNbaXRlbS5uYW1lXSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlPXt0aGlzfSBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBzZXRBbHREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWx0RGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtTWFwcGVyRmllbGQiLCJSZWFjdCIsImxhenkiLCJGb3JtV3JhcHBlckZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInN0YXRlIiwiYWx0RGVzY3JpcHRpb24iLCJzZXRBbHREZXNjcmlwdGlvbiIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwid3JhcHBlZEZpZWxkcyIsImZpZWxkcyIsImxlbmd0aCIsImZpZWxkIiwiaW5jbHVkZXMiLCJuYW1lIiwid3JhcHBlck5hbWUiLCJjc3NJZCIsInB1c2giLCJociIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImZvcm0iLCJpbm5lcldyYXBwZXIiLCJpZCIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiZXJyb3JUZXh0IiwiZXJyb3JUZXh0cyIsImxhbmd1YWdlUmVmcyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==