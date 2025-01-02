"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormRadioGroupWithImageLabelField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormRadioGroupWithImageLabelField.jsx":
/*!***********************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormRadioGroupWithImageLabelField.jsx ***!
  \***********************************************************************************/
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
var FormRadioGroupWithImageLabelField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormRadioGroupWithImageLabelField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormRadioGroupWithImageLabelField);
    _this = _callSuper(this, FormRadioGroupWithImageLabelField, [props]);
    _this.checkRadioButton = _this.checkRadioButton.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormRadioGroupWithImageLabelField, _Component);
  return (0, _createClass2["default"])(FormRadioGroupWithImageLabelField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement("span", {
          key: 'label'
        }, this.props.field.label);
      }
      var options = [];
      if (this.props.field.options) {
        var keys = Object.keys(this.props.field.options);
        keys.forEach(function (element, index) {
          var defaultChecked = _this2.props.field.checked === element;
          options.push(/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
            key: index
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: _this2.props.field.name + "_" + element
          }, /*#__PURE__*/_react["default"].createElement("input", {
            type: "radio",
            id: _this2.props.field.name + '_' + index,
            name: _this2.props.field.name,
            defaultChecked: defaultChecked,
            value: element,
            required: _this2.props.field.required,
            onChange: _this2.checkRadioButton
          }), /*#__PURE__*/_react["default"].createElement("label", {
            htmlFor: _this2.props.field.name + '_' + index
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: _this2.props.field.options[element].src,
            alt: _this2.props.field.options[element].alt,
            title: _this2.props.field.options[element].alt
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
        className: "radio-group"
      }, label, options, description));
    }
  }, {
    key: "checkRadioButton",
    value: function checkRadioButton(event) {
      var value = event.target.value;
      this.props.data[this.props.field.name] = value;
      this.props.form.props.updateFunction(this.props.form.props.name, this.props.data, this.props.field);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      // set initial filter, if a filter is initially checked
      var keys = Object.keys(this.props.field.options);
      keys.forEach(function (element, index) {
        var defaultChecked = _this3.props.field.checked === element;
        if (defaultChecked) {
          var value = document.getElementById(_this3.props.field.name + '_' + index).value;
          _this3.props.data[_this3.props.field.name] = value;
          _this3.props.form.props.updateFunction(_this3.props.form.props.name, _this3.props.data, _this3.props.field);
        }
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVJhZGlvR3JvdXBXaXRoSW1hZ2VMYWJlbEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUos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QWMsQ0FBQ0YsTUFBSSxDQUFDeEMsS0FBSyxDQUFDWSxLQUFLLENBQUNZLElBQUksR0FBRyxHQUFHLEdBQUdOLEtBQUssQ0FBQyxDQUFDVixLQUFLO1VBQzlFZ0MsTUFBSSxDQUFDeEMsS0FBSyxDQUFDb0MsSUFBSSxDQUFDSSxNQUFJLENBQUN4QyxLQUFLLENBQUNZLEtBQUssQ0FBQ1ksSUFBSSxDQUFDLEdBQUdoQixLQUFLO1VBQzlDZ0MsTUFBSSxDQUFDeEMsS0FBSyxDQUFDcUMsSUFBSSxDQUFDckMsS0FBSyxDQUFDc0MsY0FBYyxDQUFDRSxNQUFJLENBQUN4QyxLQUFLLENBQUNxQyxJQUFJLENBQUNyQyxLQUFLLENBQUN3QixJQUFJLEVBQUVnQixNQUFJLENBQUN4QyxLQUFLLENBQUNvQyxJQUFJLEVBQUVJLE1BQUksQ0FBQ3hDLEtBQUssQ0FBQ1ksS0FBSyxDQUFDO1FBQ3JHO01BQ0YsQ0FBQyxDQUFDO0lBRUo7RUFBQztBQUFBLEVBcEU0RCtCLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybVJhZGlvR3JvdXBXaXRoSW1hZ2VMYWJlbEZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SYWRpb0dyb3VwV2l0aEltYWdlTGFiZWxGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGVja1JhZGlvQnV0dG9uID0gdGhpcy5jaGVja1JhZGlvQnV0dG9uLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9ICg8c3BhbiBrZXk9eydsYWJlbCd9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj4pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWVsZC5vcHRpb25zKTtcbiAgICAgIGtleXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGRlZmF1bHRDaGVja2VkID0gdGhpcy5wcm9wcy5maWVsZC5jaGVja2VkID09PSBlbGVtZW50O1xuICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZSArIFwiX1wiICsgZWxlbWVudH0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJ18nICsgaW5kZXh9IG5hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH0gdmFsdWU9e2VsZW1lbnR9IHJlcXVpcmVkPXt0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hlY2tSYWRpb0J1dHRvbn0vPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJ18nICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNbZWxlbWVudF0uc3JjfVxuICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmZpZWxkLm9wdGlvbnNbZWxlbWVudF0uYWx0fVxuICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuZmllbGQub3B0aW9uc1tlbGVtZW50XS5hbHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNwYW4gY2xhc3NOYW1lPXtcImZpZWxkLWRlc2NyaXB0aW9uXCJ9IGtleT17J2Rlc2NyaXB0aW9uJ30+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zcGFuPik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpby1ncm91cFwifT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBjaGVja1JhZGlvQnV0dG9uKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gc2V0IGluaXRpYWwgZmlsdGVyLCBpZiBhIGZpbHRlciBpcyBpbml0aWFsbHkgY2hlY2tlZFxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5maWVsZC5vcHRpb25zKTtcbiAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZGVmYXVsdENoZWNrZWQgPSB0aGlzLnByb3BzLmZpZWxkLmNoZWNrZWQgPT09IGVsZW1lbnQ7XG4gICAgICBpZiAoZGVmYXVsdENoZWNrZWQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5maWVsZC5uYW1lICsgJ18nICsgaW5kZXgpLnZhbHVlO1xuICAgICAgICB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1SYWRpb0dyb3VwV2l0aEltYWdlTGFiZWxGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJjaGVja1JhZGlvQnV0dG9uIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJsYWJlbCIsImZpZWxkIiwiY3JlYXRlRWxlbWVudCIsIm9wdGlvbnMiLCJrZXlzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsImRlZmF1bHRDaGVja2VkIiwiY2hlY2tlZCIsInB1c2giLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiaHRtbEZvciIsInNyYyIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJldmVudCIsInRhcmdldCIsImRhdGEiLCJmb3JtIiwidXBkYXRlRnVuY3Rpb24iLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzMyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9