(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormPDFUploadField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormPDFUploadField.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormPDFUploadField.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../util/conditions */ "./src/Resources/public/js/util/conditions.js"));
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"));
var _entry = __webpack_require__(/*! react-pdf/dist/esm/entry.webpack */ "./node_modules/react-pdf/dist/esm/entry.webpack.js");
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
var FormPDFUploadField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormPDFUploadField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormPDFUploadField);
    _this = _callSuper(this, FormPDFUploadField, [props]);
    _this.inputRef = null;
    _this.allowedFileTypes = ["application/pdf"];
    _this.onSelectFile = _this.onSelectFile.bind(_this);
    _this.checkFileSize = _this.checkFileSize.bind(_this);
    _this.processPdf = _this.processPdf.bind(_this);
    _this.unsetFile = _this.unsetFile.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormPDFUploadField, _Component);
  return (0, _createClass2["default"])(FormPDFUploadField, [{
    key: "onSelectFile",
    value: function onSelectFile(e) {
      if (e.target.files && e.target.files.length > 0) {
        if (this.checkFileSize(e.target.files[0])) {
          if (this.allowedFileTypes.includes(e.target.files[0].type)) {
            var fileName = e.target.files[0].name;
            var fileType = e.target.files[0].type;
            this.processPdf(e.target.files[0], fileName, fileType);
          } else {
            _sweetalert["default"].fire({
              icon: "error",
              title: this.props.field.titleFileTooBig,
              text: this.props.field.textFileTooBig
            });
            e.target.value = "";
          }
        } else {
          _sweetalert["default"].fire({
            icon: "error",
            title: this.props.field.titleFileTooBig,
            text: this.props.field.textFileTooBig
          });
          e.target.value = "";
        }
      }
    }
  }, {
    key: "checkFileSize",
    value: function checkFileSize(file) {
      if (this.props.field.maxFileSize === -1) {
        return true;
      }
      return file.size <= this.props.field.maxFileSize;
    }
  }, {
    key: "processPdf",
    value: function processPdf(file, fileName, fileType) {
      var _this2 = this;
      var reader = new FileReader();
      reader.onload = function () {
        var data = reader.result;
        var base64 = data.replace(/^[^,]*,/, '');
        var fileInfo = {
          name: fileName,
          data: base64,
          raw: data
        };
        if (_this2.props.field.setChangedFlag) {
          fileInfo.changed = true;
        }
        var formData = _this2.props.form.props.component.data;
        formData[_this2.props.field.name] = fileInfo;
        _this2.props.form.props.updateFunction(_this2.props.form.props.name, formData, _this2.props.field);
      };
      reader.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var label = null;
      var ariaLabel = null;
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
      } else {
        if (this.props.field.placeholder) {
          ariaLabel = this.props.field.placeholder;
        }
      }
      var description = null;
      var descriptionLink = null;
      if (this.props.field.descriptionLink && this.props.field.descriptionLinkLabel) {
        descriptionLink = /*#__PURE__*/_react["default"].createElement("a", {
          className: "form-description-link btn btn-info btn-sm",
          href: this.props.field.descriptionLink,
          target: "_blank"
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fas fa-info-circle"
        }), " ", this.props.field.descriptionLinkLabel);
      }
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description, " ", descriptionLink);
      }
      var className = "";
      if (this.props.field.className) {
        className = this.props.field.className + " " + this.props.field.name;
      }
      var fieldName = this.props.field.name;
      var fileLabel = this.props.field.noFileSelectedLabel || this.props.languageRefs.NO_FILE_SELECTED;
      if (this.props.data[fieldName] && this.props.data[fieldName].name) {
        fileLabel = this.props.data[fieldName].name;
      }
      var filePreview = null;
      if (this.props.form.props.component.data[fieldName] && this.props.form.props.component.data[fieldName].raw) {
        filePreview = /*#__PURE__*/_react["default"].createElement(_entry.Document, {
          className: "c4g-pdf-preview",
          file: this.props.form.props.component.data[fieldName].raw
        }, /*#__PURE__*/_react["default"].createElement(_entry.Page, {
          pageNumber: 1
        }), /*#__PURE__*/_react["default"].createElement("button", {
          onClick: this.unsetFile,
          title: this.props.languageRefs.CLICK_TO_REMOVE_FILE,
          className: "btn btn-remove-rounded remove-file " + this.props.field.name
        }, this.props.languageRefs.REMOVE_PDF));
      } else if (this.props.form.props.component.data[fieldName] && this.props.form.props.component.data[fieldName].path) {
        var path = this.props.form.props.component.data[fieldName].path;
        path = "/" + path;
        filePreview = /*#__PURE__*/_react["default"].createElement(_entry.Document, {
          className: "c4g-pdf-preview",
          file: path
        }, /*#__PURE__*/_react["default"].createElement(_entry.Page, {
          pageNumber: 1
        }), /*#__PURE__*/_react["default"].createElement("button", {
          onClick: this.unsetFile,
          title: this.props.languageRefs.CLICK_TO_REMOVE_FILE,
          className: "btn btn-remove-rounded remove-file " + this.props.field.name
        }, this.props.languageRefs.REMOVE_PDF));
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-form-field"
      }, label, /*#__PURE__*/_react["default"].createElement("div", {
        className: className + " file-label"
      }, fileLabel), /*#__PURE__*/_react["default"].createElement("input", {
        className: "form-control-file",
        ref: function ref(input) {
          return _this3.inputElement = input;
        },
        type: "file",
        accept: ".pdf",
        onChange: this.onSelectFile,
        id: fieldName,
        name: fieldName + (this.props.field.max > 1 ? "[]" : ""),
        style: {
          display: "none"
        }
      }), filePreview, /*#__PURE__*/_react["default"].createElement("input", {
        type: "button",
        value: this.props.languageRefs.CHOOSE_FILE,
        onClick: function onClick(e) {
          e.preventDefault();
          _this3.inputElement.click();
        },
        className: className + "btn btn-outline-primary",
        ref: function ref(node) {
          _this3.inputRef = node;
        }
      }), description);
    }
  }, {
    key: "unsetFile",
    value: function unsetFile() {
      var data = this.props.data;
      data[this.props.field.name] = null;
      if (this.inputRef !== null) {
        // clear file selection
        this.inputRef.value = "";
      }
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/util/conditions.js":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/util/conditions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


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

/***/ }),

/***/ "?5d76":
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f9d":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?239a":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c0f2":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7812":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6bdd":
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybVBERlVwbG9hZEZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxXQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBRCxzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFJLE1BQUEsR0FBQUosbUJBQUE7QUFBZ0UsU0FBQUsseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFQLHdCQUFBTyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxF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Yy9qcy9mb3JtL2ZpZWxkcy9Gb3JtUERGVXBsb2FkRmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvaWdub3JlZHwvaG9tZS9za2lwcGVyL0RldmVsb3AvY29uNGdpcy9idW5kbGVzL0ZyYW1ld29ya0J1bmRsZS9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9sZWdhY3kvYnVpbGR8Y2FudmFzIiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS9pZ25vcmVkfC9ob21lL3NraXBwZXIvRGV2ZWxvcC9jb240Z2lzL2J1bmRsZXMvRnJhbWV3b3JrQnVuZGxlL25vZGVfbW9kdWxlcy9wZGZqcy1kaXN0L2xlZ2FjeS9idWlsZHxmcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvaWdub3JlZHwvaG9tZS9za2lwcGVyL0RldmVsb3AvY29uNGdpcy9idW5kbGVzL0ZyYW1ld29ya0J1bmRsZS9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9sZWdhY3kvYnVpbGR8aHR0cCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvaWdub3JlZHwvaG9tZS9za2lwcGVyL0RldmVsb3AvY29uNGdpcy9idW5kbGVzL0ZyYW1ld29ya0J1bmRsZS9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9sZWdhY3kvYnVpbGR8aHR0cHMiLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlL2lnbm9yZWR8L2hvbWUvc2tpcHBlci9EZXZlbG9wL2NvbjRnaXMvYnVuZGxlcy9GcmFtZXdvcmtCdW5kbGUvbm9kZV9tb2R1bGVzL3BkZmpzLWRpc3QvbGVnYWN5L2J1aWxkfHVybCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvaWdub3JlZHwvaG9tZS9za2lwcGVyL0RldmVsb3AvY29uNGdpcy9idW5kbGVzL0ZyYW1ld29ya0J1bmRsZS9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9sZWdhY3kvYnVpbGR8emxpYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbmltcG9ydCB7RG9jdW1lbnQsIFBhZ2V9IGZyb20gXCJyZWFjdC1wZGYvZGlzdC9lc20vZW50cnkud2VicGFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUERGVXBsb2FkRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5pbnB1dFJlZiA9IG51bGw7XG5cbiAgICB0aGlzLmFsbG93ZWRGaWxlVHlwZXMgPSBbXCJhcHBsaWNhdGlvbi9wZGZcIl07XG4gICAgdGhpcy5vblNlbGVjdEZpbGUgPSB0aGlzLm9uU2VsZWN0RmlsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tGaWxlU2l6ZSA9IHRoaXMuY2hlY2tGaWxlU2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJvY2Vzc1BkZiA9IHRoaXMucHJvY2Vzc1BkZi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZXRGaWxlID0gdGhpcy51bnNldEZpbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU2VsZWN0RmlsZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrRmlsZVNpemUoZS50YXJnZXQuZmlsZXNbMF0pKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRGaWxlVHlwZXMuaW5jbHVkZXMoZS50YXJnZXQuZmlsZXNbMF0udHlwZSkpIHtcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGUudGFyZ2V0LmZpbGVzWzBdLm5hbWU7XG4gICAgICAgICAgY29uc3QgZmlsZVR5cGUgPSBlLnRhcmdldC5maWxlc1swXS50eXBlO1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1BkZihlLnRhcmdldC5maWxlc1swXSwgZmlsZU5hbWUsIGZpbGVUeXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgdGl0bGU6ICB0aGlzLnByb3BzLmZpZWxkLnRpdGxlRmlsZVRvb0JpZyxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMucHJvcHMuZmllbGQudGV4dEZpbGVUb29CaWdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLmZpZWxkLnRpdGxlRmlsZVRvb0JpZyxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpZWxkLnRleHRGaWxlVG9vQmlnXG4gICAgICAgIH0pO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGaWxlU2l6ZShmaWxlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubWF4RmlsZVNpemUgPT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGUuc2l6ZSA8PSB0aGlzLnByb3BzLmZpZWxkLm1heEZpbGVTaXplO1xuICB9XG5cbiAgcHJvY2Vzc1BkZihmaWxlLCBmaWxlTmFtZSwgZmlsZVR5cGUpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgIGNvbnN0IGJhc2U2NCA9IGRhdGEucmVwbGFjZSgvXlteLF0qLC8sICcnKTtcbiAgICAgIGNvbnN0IGZpbGVJbmZvID0ge1xuICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgZGF0YTogYmFzZTY0LFxuICAgICAgICByYXc6IGRhdGFcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnNldENoYW5nZWRGbGFnKSB7XG4gICAgICAgIGZpbGVJbmZvLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhO1xuICAgICAgZm9ybURhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IGZpbGVJbmZvO1xuICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBmb3JtRGF0YSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gICAgfVxuXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY2hlY2sgY29uZGl0aW9uXG4gICAgaWYgKCFjaGVja0lmRmllbGRJc1JlbmRlcmVkKHRoaXMucHJvcHMuZmllbGQsIHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5maWVsZHMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGxldCBhcmlhTGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsZXQgbGFiZWxDbGFzcyA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCkge1xuICAgICAgICBsYWJlbENsYXNzID0gXCJjNGctcmVxdWlyZWRcIjtcbiAgICAgICAgbGFiZWwgPSA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzfSBodG1sRm9yPXt0aGlzLnByb3BzLmZpZWxkLm5hbWV9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgYXJpYUxhYmVsID0gdGhpcy5wcm9wcy5maWVsZC5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcblxuICAgIGxldCBkZXNjcmlwdGlvbkxpbmsgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9uTGluayAmJiB0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9uTGlua0xhYmVsKSB7XG4gICAgICBkZXNjcmlwdGlvbkxpbmsgPSA8YSBjbGFzc05hbWU9e1wiZm9ybS1kZXNjcmlwdGlvbi1saW5rIGJ0biBidG4taW5mbyBidG4tc21cIn0gaHJlZj17dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbkxpbmt9IHRhcmdldD1cIl9ibGFua1wiPjxpXG4gICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1pbmZvLWNpcmNsZVwiPjwvaT4ge3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb25MaW5rTGFiZWx9PC9hPjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNtYWxsIGNsYXNzTmFtZT17XCJmaWVsZC1kZXNjcmlwdGlvbiBmb3JtLXRleHQgdGV4dC1tdXRlZFwifT57dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbn0ge2Rlc2NyaXB0aW9uTGlua308L3NtYWxsPik7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmZpZWxkLmNsYXNzTmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5maWVsZC5uYW1lO1xuICAgIH1cbiAgICBsZXQgZmllbGROYW1lID0gdGhpcy5wcm9wcy5maWVsZC5uYW1lO1xuICAgIGxldCBmaWxlTGFiZWwgPSB0aGlzLnByb3BzLmZpZWxkLm5vRmlsZVNlbGVjdGVkTGFiZWwgfHwgdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuTk9fRklMRV9TRUxFQ1RFRDtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW2ZpZWxkTmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW2ZpZWxkTmFtZV0ubmFtZSkge1xuICAgICAgZmlsZUxhYmVsID0gdGhpcy5wcm9wcy5kYXRhW2ZpZWxkTmFtZV0ubmFtZTtcbiAgICB9XG4gICAgbGV0IGZpbGVQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhW2ZpZWxkTmFtZV0gJiYgdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhW2ZpZWxkTmFtZV0ucmF3KSB7XG4gICAgICBmaWxlUHJldmlldyA9IDxEb2N1bWVudCBjbGFzc05hbWU9e1wiYzRnLXBkZi1wcmV2aWV3XCJ9IGZpbGU9e3RoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YVtmaWVsZE5hbWVdLnJhd30+XG4gICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9ezF9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51bnNldEZpbGV9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5DTElDS19UT19SRU1PVkVfRklMRX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYnRuIGJ0bi1yZW1vdmUtcm91bmRlZCByZW1vdmUtZmlsZSBcIiArIHRoaXMucHJvcHMuZmllbGQubmFtZX0+e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlJFTU9WRV9QREZ9PC9idXR0b24+XG4gICAgICA8L0RvY3VtZW50PlxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhW2ZpZWxkTmFtZV0gJiYgdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhW2ZpZWxkTmFtZV0ucGF0aCkge1xuICAgICAgbGV0IHBhdGggPSB0aGlzLnByb3BzLmZvcm0ucHJvcHMuY29tcG9uZW50LmRhdGFbZmllbGROYW1lXS5wYXRoO1xuICAgICAgcGF0aCA9IFwiL1wiICsgcGF0aDtcbiAgICAgIGZpbGVQcmV2aWV3ID0gPERvY3VtZW50IGNsYXNzTmFtZT17XCJjNGctcGRmLXByZXZpZXdcIn0gZmlsZT17cGF0aH0+XG4gICAgICAgIDxQYWdlIHBhZ2VOdW1iZXI9ezF9IC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy51bnNldEZpbGV9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5DTElDS19UT19SRU1PVkVfRklMRX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ0biBidG4tcmVtb3ZlLXJvdW5kZWQgcmVtb3ZlLWZpbGUgXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWV9Pnt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5SRU1PVkVfUERGfTwvYnV0dG9uPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZvcm0tZmllbGRcIn0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSArIFwiIGZpbGUtbGFiZWxcIn0+e2ZpbGVMYWJlbH08L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wtZmlsZVwifSByZWY9e2lucHV0ID0+IHRoaXMuaW5wdXRFbGVtZW50ID0gaW5wdXR9IHR5cGU9e1wiZmlsZVwifSBhY2NlcHQ9XCIucGRmXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSBpZD17ZmllbGROYW1lfVxuICAgICAgICAgICAgICAgbmFtZT17ZmllbGROYW1lICsgKHRoaXMucHJvcHMuZmllbGQubWF4ID4gMSA/IFwiW11cIiA6IFwiXCIpfSBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0vPlxuICAgICAgICB7ZmlsZVByZXZpZXd9XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNIT09TRV9GSUxFfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5jbGljaygpO1xuICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzTmFtZSArIFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIn0gcmVmPXsobm9kZSkgPT4ge3RoaXMuaW5wdXRSZWYgPSBub2RlO319Lz5cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHVuc2V0RmlsZSgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBkYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gPSBudWxsO1xuICAgIGlmICh0aGlzLmlucHV0UmVmICE9PSBudWxsKSB7XG4gICAgICAvLyBjbGVhciBmaWxlIHNlbGVjdGlvblxuICAgICAgdGhpcy5pbnB1dFJlZi52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMucHJvcHMuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLmZvcm0ucHJvcHMubmFtZSwgZGF0YSwgdGhpcy5wcm9wcy5maWVsZCk7XG4gIH1cblxufSIsIlxuXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25kaXRpb25zKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZmllbGQuY29uZGl0aW9uVmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgZm9yIG9uZSBjb25kaXRpb24gZmllbGQgKG9yIGNvbmRpdGlvbilcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpIHtcbiAgbGV0IHJlbmRlciA9IHRydWU7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gIT09IG51bGwgJiYgIWRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdLnZhbHVlKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBudWxsICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBlbGVtZW50ID0gZmllbGQuY29uZGl0aW9uRmllbGRbMF07XG4gICAgcmVuZGVyID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgY29uZFZhbHVlID0gZmllbGQuY29uZGl0aW9uVmFsdWVba2V5XTtcbiAgICAgICAgaWYgKCEhZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgLy8gZGF0YVtlbGVtZW50XSBpcyBhIHNlbGVjdCBmaWVsZFxuICAgICAgICAgIGlmIChkYXRhW2VsZW1lbnRdLnZhbHVlID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRmllbGRJc1JlbmRlcmVkKGZpZWxkLCBkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKGhhc0NvbmRpdGlvbnMoZmllbGQpKSB7XG4gICAgLy8gZ2V0IGZpZWxkIHRoaXMgZmllbGQgZGVwZW5kcyB1cG9uXG4gICAgbGV0IGRlcGVuZGVudEZpZWxkID0gbnVsbDtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gZmllbGQuY29uZGl0aW9uRmllbGRbMF0pIHtcbiAgICAgICAgICBkZXBlbmRlbnRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwZW5kZW50RmllbGQgIT09IG51bGwpIHtcbiAgICAgIGxldCBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgaWYgKGhhc0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQpKSB7XG4gICAgICAgIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IGNoZWNrQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgJiYgY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbmRpdGlvbnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3N3ZWV0YWxlcnQiLCJfZW50cnkiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1QREZVcGxvYWRGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJpbnB1dFJlZiIsImFsbG93ZWRGaWxlVHlwZXMiLCJvblNlbGVjdEZpbGUiLCJiaW5kIiwiY2hlY2tGaWxlU2l6ZSIsInByb2Nlc3NQZGYiLCJ1bnNldEZpbGUiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInR5cGUiLCJmaWxlTmFtZSIsIm5hbWUiLCJmaWxlVHlwZSIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZmllbGQiLCJ0aXRsZUZpbGVUb29CaWciLCJ0ZXh0IiwidGV4dEZpbGVUb29CaWciLCJmaWxlIiwibWF4RmlsZVNpemUiLCJzaXplIiwiX3RoaXMyIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImRhdGEiLCJyZXN1bHQiLCJiYXNlNjQiLCJyZXBsYWNlIiwiZmlsZUluZm8iLCJyYXciLCJzZXRDaGFuZ2VkRmxhZyIsImNoYW5nZWQiLCJmb3JtRGF0YSIsImZvcm0iLCJjb21wb25lbnQiLCJ1cGRhdGVGdW5jdGlvbiIsInJlYWRBc0RhdGFVUkwiLCJyZW5kZXIiLCJfdGhpczMiLCJjaGVja0lmRmllbGRJc1JlbmRlcmVkIiwiZmllbGRzIiwibGFiZWwiLCJhcmlhTGFiZWwiLCJsYWJlbENsYXNzIiwicmVxdWlyZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkxpbmsiLCJkZXNjcmlwdGlvbkxpbmtMYWJlbCIsImhyZWYiLCJmaWVsZE5hbWUiLCJmaWxlTGFiZWwiLCJub0ZpbGVTZWxlY3RlZExhYmVsIiwibGFuZ3VhZ2VSZWZzIiwiTk9fRklMRV9TRUxFQ1RFRCIsImZpbGVQcmV2aWV3IiwiRG9jdW1lbnQiLCJQYWdlIiwicGFnZU51bWJlciIsIm9uQ2xpY2siLCJDTElDS19UT19SRU1PVkVfRklMRSIsIlJFTU9WRV9QREYiLCJwYXRoIiwicmVmIiwiaW5wdXQiLCJpbnB1dEVsZW1lbnQiLCJhY2NlcHQiLCJvbkNoYW5nZSIsImlkIiwibWF4Iiwic3R5bGUiLCJkaXNwbGF5IiwiQ0hPT1NFX0ZJTEUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwibm9kZSIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImRlcGVuZGVudEZpZWxkIiwiaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==