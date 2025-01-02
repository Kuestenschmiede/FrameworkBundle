"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormMultiCheckboxWithImageLabelField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormMultiCheckboxWithImageLabelField.jsx":
/*!**************************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormMultiCheckboxWithImageLabelField.jsx ***!
  \**************************************************************************************/
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
var FormMultiCheckboxWithImageLabelField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormMultiCheckboxWithImageLabelField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormMultiCheckboxWithImageLabelField);
    _this = _callSuper(this, FormMultiCheckboxWithImageLabelField, [props]);
    _this.checkCheckbox = _this.checkCheckbox.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormMultiCheckboxWithImageLabelField, _Component);
  return (0, _createClass2["default"])(FormMultiCheckboxWithImageLabelField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement("span", {
          className: 'custom-label',
          key: 'label'
        }, this.props.field.label);
      }
      var options = [];
      var defaultValues = null;
      if (this.props.field.cache && this.props.field.entryPoint) {
        var cachedData = localStorage.getItem('form-multicheckbox-' + this.props.field.entryPoint + '-' + this.props.field.name);
        if (cachedData) {
          defaultValues = JSON.parse(cachedData);
          this.props.data[this.props.field.name] = defaultValues;
        }
      }
      if (this.props.field.options) {
        var keys = Object.keys(this.props.field.options);
        keys.forEach(function (element, index) {
          var defaultChecked = false;
          var additionalClassname = '';
          if (defaultValues) {
            defaultValues.forEach(function (cachedElement, idx) {
              if (element && cachedElement === element) {
                defaultChecked = true;
                additionalClassname = ' checked-mcb';
              }
            });
          }
          options.push(/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
            key: index
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: _this2.props.field.optionClass + additionalClassname
          }, /*#__PURE__*/_react["default"].createElement("label", {
            title: _this2.props.field.options[element].alt,
            className: "c4g-form-label" + additionalClassname
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: _this2.props.field.options[element].src,
            alt: _this2.props.field.options[element].alt,
            title: _this2.props.field.options[element].alt,
            className: "c4g-img-fluid" + additionalClassname,
            width: "100%",
            height: "100%"
          }), /*#__PURE__*/_react["default"].createElement("input", {
            type: "checkbox",
            name: _this2.props.field.name,
            value: element,
            required: _this2.props.field.required,
            className: "c4g-form-input" + additionalClassname,
            onChange: _this2.checkCheckbox,
            defaultChecked: defaultChecked
          })))));
        }, this);
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "field-description",
          key: 'description'
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.className
      }, label, options, description));
    }
  }, {
    key: "checkCheckbox",
    value: function checkCheckbox(event) {
      var value = event.target.value;
      var data;
      if (this.props.data) {
        data = JSON.parse(JSON.stringify(this.props.data));
      } else {
        data = [];
      }
      if (!data[this.props.field.name] || !data[this.props.field.name].length) {
        data[this.props.field.name] = [];
      }
      if (event.target.checked) {
        // checkbox checked
        data[this.props.field.name].push(value);
      } else {
        // checkbox unchecked
        if (data[this.props.field.name].includes(value)) {
          for (var i = 0; i < data[this.props.field.name].length; i++) {
            if (data[this.props.field.name][i] === value) {
              var tmpData = data[this.props.field.name].splice(i, 1);
              break;
            }
          }
        }
      }
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
      if (this.props.field.cache && this.props.field.entryPoint) {
        localStorage.setItem('form-multicheckbox-' + this.props.field.entryPoint + '-' + this.props.field.name, JSON.stringify(data[this.props.field.name]));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybU11bHRpQ2hlY2tib3hXaXRoSW1hZ2VMYWJlbEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FB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cm0vZmllbGRzL0Zvcm1NdWx0aUNoZWNrYm94V2l0aEltYWdlTGFiZWxGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTXVsdGlDaGVja2JveFdpdGhJbWFnZUxhYmVsRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hlY2tDaGVja2JveCA9IHRoaXMuY2hlY2tDaGVja2JveC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgbGFiZWwgPSAoPHNwYW4gY2xhc3NOYW1lPXsnY3VzdG9tLWxhYmVsJ30ga2V5PXsnbGFiZWwnfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+KTtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlcyA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2FjaGUgJiYgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50KSB7XG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm0tbXVsdGljaGVja2JveC0nICsgdGhpcy5wcm9wcy5maWVsZC5lbnRyeVBvaW50ICsgJy0nICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lKTtcbiAgICAgIGlmIChjYWNoZWREYXRhKSB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZXMgPSBKU09OLnBhcnNlKGNhY2hlZERhdGEpO1xuICAgICAgICB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQub3B0aW9ucykge1xuICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnMpO1xuICAgICAga2V5cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgZGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxDbGFzc25hbWUgPSAnJztcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICBkZWZhdWx0VmFsdWVzLmZvckVhY2goKGNhY2hlZEVsZW1lbnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgKGNhY2hlZEVsZW1lbnQgPT09IGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYWRkaXRpb25hbENsYXNzbmFtZSA9ICcgY2hlY2tlZC1tY2InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbkNsYXNzK2FkZGl0aW9uYWxDbGFzc25hbWV9PlxuICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9e3RoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS5hbHR9IGNsYXNzTmFtZT17XCJjNGctZm9ybS1sYWJlbFwiK2FkZGl0aW9uYWxDbGFzc25hbWV9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNbZWxlbWVudF0uc3JjfVxuICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNbZWxlbWVudF0uYWx0fVxuICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS5hbHR9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLWltZy1mbHVpZFwiK2FkZGl0aW9uYWxDbGFzc25hbWV9XG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWxlbWVudH0gcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctZm9ybS1pbnB1dFwiK2FkZGl0aW9uYWxDbGFzc25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrQ2hlY2tib3h9XG4gICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH0vPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9ICg8c3BhbiBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb25cIn0ga2V5PXsnZGVzY3JpcHRpb24nfT57dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbn08L3NwYW4+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBjaGVja0NoZWNrYm94KGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBkYXRhO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG4gICAgaWYgKCFkYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgIWRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IFtdO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIC8vIGNoZWNrYm94IGNoZWNrZWRcbiAgICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2tib3ggdW5jaGVja2VkXG4gICAgICBpZiAoZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV1baV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdG1wRGF0YSA9IGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIGRhdGEsIHRoaXMucHJvcHMuZmllbGQpO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNhY2hlICYmIHRoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm0tbXVsdGljaGVja2JveC0nK3RoaXMucHJvcHMuZmllbGQuZW50cnlQb2ludCsnLScrdGhpcy5wcm9wcy5maWVsZC5uYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtTXVsdGlDaGVja2JveFdpdGhJbWFnZUxhYmVsRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwibGFiZWwiLCJmaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwiZGVmYXVsdFZhbHVlcyIsImNhY2hlIiwiZW50cnlQb2ludCIsImNhY2hlZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJrZXlzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImRlZmF1bHRDaGVja2VkIiwiYWRkaXRpb25hbENsYXNzbmFtZSIsImNhY2hlZEVsZW1lbnQiLCJpZHgiLCJwdXNoIiwiRnJhZ21lbnQiLCJvcHRpb25DbGFzcyIsInRpdGxlIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImRlc2NyaXB0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJjaGVja2VkIiwiaW5jbHVkZXMiLCJ0bXBEYXRhIiwic3BsaWNlIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwic2V0SXRlbSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=