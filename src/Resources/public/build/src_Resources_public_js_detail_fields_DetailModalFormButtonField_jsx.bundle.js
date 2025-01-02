"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailModalFormButtonField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailModalFormButtonField.jsx":
/*!******************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailModalFormButtonField.jsx ***!
  \******************************************************************************/
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
var Modal = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_Modal_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/Modal.jsx */ "./src/Resources/public/js/modal/Modal.jsx"));
});
var ModalContentMessage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContentMessage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContentMessage.jsx */ "./src/Resources/public/js/modal/content/ModalContentMessage.jsx"));
});
var ModalContent = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContent_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContent.jsx */ "./src/Resources/public/js/modal/content/ModalContent.jsx"));
});
var FormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../form/fields/FormMapperField.jsx */ "./src/Resources/public/js/form/fields/FormMapperField.jsx"));
});
var DetailMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailMapperField.jsx */ "./src/Resources/public/js/detail/fields/DetailMapperField.jsx"));
});
var DetailModalFormButtonField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailModalFormButtonField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DetailModalFormButtonField);
    _this = _callSuper(this, DetailModalFormButtonField, [props]);
    _this.renderDefaultContent = _this.renderDefaultContent.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.closeAndClearModal = _this.closeAndClearModal.bind(_this);
    _this.onAjaxDone = _this.onAjaxDone.bind(_this);
    _this.onAjaxFail = _this.onAjaxFail.bind(_this);
    _this.showForm = _this.showForm.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    _this.onFormSubmitDone = _this.onFormSubmitDone.bind(_this);
    _this.onFormSubmitFail = _this.onFormSubmitFail.bind(_this);
    _this.state = {
      showModal: false,
      modalContent: _this.renderDefaultContent()
    };
    return _this;
  }
  (0, _inherits2["default"])(DetailModalFormButtonField, _Component);
  return (0, _createClass2["default"])(DetailModalFormButtonField, [{
    key: "renderDefaultContent",
    value: function renderDefaultContent() {
      return /*#__PURE__*/_react["default"].createElement(ModalContent, {
        title: this.props.field.label,
        onConfirm: this.closeModal,
        confirmButtonText: this.props.field.closeButtonText
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          textAlign: "center",
          margin: "auto"
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "bundles/con4gisframework/img/preloader-image.svg",
        className: "preloader-image",
        alt: ""
      })));
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var url = this.props.field.url;
      if (this.props.field.urlField) {
        url = url.replace(this.props.field.urlField, this.props.data[this.props.field.urlField]);
      }
      jQuery.get(url).done(this.onAjaxDone).fail(this.onAjaxFail);
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "closeAndClearModal",
    value: function closeAndClearModal() {
      this.setState({
        showModal: false,
        modalContent: this.renderDefaultContent()
      });
    }
  }, {
    key: "onAjaxDone",
    value: function onAjaxDone(json) {
      try {
        this.showForm(json);
      } catch (e) {
        console.error(e);
        this.closeModal();
      }
    }
  }, {
    key: "onAjaxFail",
    value: function onAjaxFail(response) {
      var json = response.responseJSON;
      if (json.error) {
        this.setState({
          modalContent: /*#__PURE__*/_react["default"].createElement(ModalContentMessage, {
            title: json.error.title,
            message: json.error.message,
            onConfirm: this.closeModal,
            confirmButtonText: json.error.confirmButtonText
          })
        });
      } else {
        this.closeModal();
      }
    }
  }, {
    key: "showForm",
    value: function showForm(json) {
      var _this2 = this;
      try {
        var fields;
        if (typeof this.props.field.innerFields !== 'undefined' && this.props.field.innerFields.length > 0) {
          fields = this.props.fields.filter(function (field) {
            return _this2.props.field.innerFields.includes(field.name);
          });
        } else {
          fields = this.props.fields.filter(function (field) {
            return field.type !== _this2.props.field.type;
          });
        }
        var formProps = {};
        formProps.updateFunction = function () {};
        var content = /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className || 'c4g-modal-content'
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-btn c4g-btn-top-close',
          type: 'button',
          onClick: this.closeModal
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'c4g-btn-text'
        }, this.props.field.closeButtonText)), /*#__PURE__*/_react["default"].createElement("div", {
          className: 'c4g-modal__title-wrapper'
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'c4g-modal__title'
        }, this.props.field.label)), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              textAlign: "center",
              margin: "auto"
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: "bundles/con4gisframework/img/preloader-image.svg",
            className: "preloader-image",
            alt: ""
          }))
        }, /*#__PURE__*/_react["default"].createElement("div", null, fields.map(function (item, id) {
          return /*#__PURE__*/_react["default"].createElement(DetailMapperField, {
            data: _this2.props.data,
            field: item,
            fields: fields,
            key: id,
            detail: _this2.props.detail,
            languageRefs: _this2.props.languageRefs
          });
        })), json.formFields.map(function (item, id) {
          return /*#__PURE__*/_react["default"].createElement(FormMapperField, {
            form: {
              props: formProps,
              fields: json.formFields
            },
            field: item,
            data: json.formData || [],
            key: id + 1,
            languageRefs: _this2.props.languageRefs
          });
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: 'c4g-panel-buttons'
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-btn c4g-btn-submit',
          type: 'button',
          onClick: this.submitForm
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'c4g-btn-text'
        }, this.props.field.confirmButtonText)), /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-btn c4g-btn-close',
          type: 'button',
          onClick: this.closeModal
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: 'c4g-btn-text'
        }, this.props.field.closeButtonText)))));
        this.setState({
          modalContent: content
        });
      } catch (e) {
        console.error(e);
        this.closeModal();
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(event) {
      var formElements = event.target.parentNode.form.elements;
      var data = {};
      var index = 0;
      while (index < formElements.length) {
        var element = formElements.item(index);
        if (element.name) {
          data[element.name] = element.value;
        }
        index += 1;
      }
      jQuery.post(this.props.field.submitUrl, data).done(this.onFormSubmitDone).fail(this.onFormSubmitFail);
    }
  }, {
    key: "onFormSubmitDone",
    value: function onFormSubmitDone(json) {
      if (json && json.success) {
        this.setState({
          modalContent: /*#__PURE__*/_react["default"].createElement(ModalContentMessage, {
            title: json.success.title,
            message: json.success.message,
            onConfirm: this.closeAndClearModal,
            confirmButtonText: this.props.field.closeButtonText
          })
        });
      } else {
        this.closeModal();
      }
    }
  }, {
    key: "onFormSubmitFail",
    value: function onFormSubmitFail(response) {
      var json = response.responseJSON;
      if (json && json.error) {
        this.setState({
          modalContent: /*#__PURE__*/_react["default"].createElement(ModalContentMessage, {
            title: json.error.title,
            message: json.error.message,
            onConfirm: this.showForm.bind(this, json),
            confirmButtonText: this.props.field.closeButtonText
          })
        });
      } else {
        this.closeModal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-text" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.field.name,
        onClick: this.openModal
      }, this.props.field.label), /*#__PURE__*/_react["default"].createElement(Modal, {
        show: this.state.showModal
      }, this.state.modalContent));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxNb2RhbEZvcm1CdXR0b25GaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUEyRCxTQUFBRyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUwsd0JBQUFLLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFB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QUFLLENBQUM4RCxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDNUNNLGNBQWMsR0FBR2YsT0FBTztRQUMxQjtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSWUsY0FBYyxLQUFLLElBQUksRUFBRTtNQUMzQixJQUFJQyx3QkFBd0IsR0FBRyxJQUFJO01BQ25DLElBQUlSLGFBQWEsQ0FBQ08sY0FBYyxDQUFDLEVBQUU7UUFDakNDLHdCQUF3QixHQUFHSixlQUFlLENBQUNHLGNBQWMsRUFBRXRELElBQUksQ0FBQztRQUNoRSxPQUFPdUQsd0JBQXdCLElBQUlKLGVBQWUsQ0FBQ2pFLEtBQUssRUFBRWMsSUFBSSxDQUFDO01BQ2pFLENBQUMsTUFBTTtRQUNMLE9BQU9tRCxlQUFlLENBQUNqRSxLQUFLLEVBQUVjLElBQUksQ0FBQztNQUNyQztJQUNGLENBQUMsTUFBTTtNQUNMLE9BQU9tRCxlQUFlLENBQUNqRSxLQUFLLEVBQUVjLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbE1vZGFsRm9ybUJ1dHRvbkZpZWxkLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy91dGlsL2NvbmRpdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuY29uc3QgTW9kYWwgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL01vZGFsLmpzeFwiKSk7XG5jb25zdCBNb2RhbENvbnRlbnRNZXNzYWdlID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RhbC9jb250ZW50L01vZGFsQ29udGVudE1lc3NhZ2UuanN4XCIpKTtcbmNvbnN0IE1vZGFsQ29udGVudCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kYWwvY29udGVudC9Nb2RhbENvbnRlbnQuanN4XCIpKTtcbmNvbnN0IEZvcm1NYXBwZXJGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vZm9ybS9maWVsZHMvRm9ybU1hcHBlckZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxNYXBwZXJGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9EZXRhaWxNYXBwZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNb2RhbEZvcm1CdXR0b25GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZW5kZXJEZWZhdWx0Q29udGVudCA9IHRoaXMucmVuZGVyRGVmYXVsdENvbnRlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFuZENsZWFyTW9kYWwgPSB0aGlzLmNsb3NlQW5kQ2xlYXJNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BamF4RG9uZSA9IHRoaXMub25BamF4RG9uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BamF4RmFpbCA9IHRoaXMub25BamF4RmFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvd0Zvcm0gPSB0aGlzLnNob3dGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvcm1TdWJtaXREb25lID0gdGhpcy5vbkZvcm1TdWJtaXREb25lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvcm1TdWJtaXRGYWlsID0gdGhpcy5vbkZvcm1TdWJtaXRGYWlsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIG1vZGFsQ29udGVudDogdGhpcy5yZW5kZXJEZWZhdWx0Q29udGVudCgpXG4gICAgfTtcbiAgfVxuXG5cblxuICByZW5kZXJEZWZhdWx0Q29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsQ29udGVudCB0aXRsZT17dGhpcy5wcm9wcy5maWVsZC5sYWJlbH0gb25Db25maXJtPXt0aGlzLmNsb3NlTW9kYWx9IGNvbmZpcm1CdXR0b25UZXh0PXt0aGlzLnByb3BzLmZpZWxkLmNsb3NlQnV0dG9uVGV4dH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT5cbiAgICAgICAgICA8aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsQ29udGVudD5cbiAgICApO1xuICB9XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLmZpZWxkLnVybDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC51cmxGaWVsZCkge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UodGhpcy5wcm9wcy5maWVsZC51cmxGaWVsZCwgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQudXJsRmllbGRdKTtcbiAgICB9XG5cbiAgICBqUXVlcnkuZ2V0KHVybCkuZG9uZSh0aGlzLm9uQWpheERvbmUpLmZhaWwodGhpcy5vbkFqYXhGYWlsKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogdHJ1ZX0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSk7XG4gIH1cblxuICBjbG9zZUFuZENsZWFyTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZSwgbW9kYWxDb250ZW50OiB0aGlzLnJlbmRlckRlZmF1bHRDb250ZW50KCl9KTtcbiAgfVxuXG4gIG9uQWpheERvbmUoanNvbikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNob3dGb3JtKGpzb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvbkFqYXhGYWlsKHJlc3BvbnNlKSB7XG4gICAgbGV0IGpzb24gPSByZXNwb25zZS5yZXNwb25zZUpTT047XG4gICAgaWYgKGpzb24uZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQ29udGVudDogKFxuICAgICAgICAgIDxNb2RhbENvbnRlbnRNZXNzYWdlIHRpdGxlPXtqc29uLmVycm9yLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2pzb24uZXJyb3IubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dD17anNvbi5lcnJvci5jb25maXJtQnV0dG9uVGV4dH0gLz5cbiAgICAgICAgKX1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dGb3JtKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGZpZWxkcztcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5maWVsZC5pbm5lckZpZWxkcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5maWVsZC5pbm5lckZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZpZWxkcyA9IHRoaXMucHJvcHMuZmllbGRzLmZpbHRlcihmaWVsZCA9PiB0aGlzLnByb3BzLmZpZWxkLmlubmVyRmllbGRzLmluY2x1ZGVzKGZpZWxkLm5hbWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkcyA9IHRoaXMucHJvcHMuZmllbGRzLmZpbHRlcihmaWVsZCA9PiBmaWVsZC50eXBlICE9PSB0aGlzLnByb3BzLmZpZWxkLnR5cGUpO1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1Qcm9wcyA9IHt9O1xuICAgICAgZm9ybVByb3BzLnVwZGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge307XG4gICAgICBsZXQgY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnYzRnLW1vZGFsLWNvbnRlbnQnfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydjNGctYnRuIGM0Zy1idG4tdG9wLWNsb3NlJ30gdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLWJ0bi10ZXh0J30+e3RoaXMucHJvcHMuZmllbGQuY2xvc2VCdXR0b25UZXh0fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYzRnLW1vZGFsX190aXRsZS13cmFwcGVyJ30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLW1vZGFsX190aXRsZSd9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e1xuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiYXV0b1wifX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJidW5kbGVzL2NvbjRnaXNmcmFtZXdvcmsvaW1nL3ByZWxvYWRlci1pbWFnZS5zdmdcIiBjbGFzc05hbWU9XCJwcmVsb2FkZXItaW1hZ2VcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgIDwvZGl2Pn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZmllbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEZXRhaWxNYXBwZXJGaWVsZCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw9e3RoaXMucHJvcHMuZGV0YWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlUmVmcz17dGhpcy5wcm9wcy5sYW5ndWFnZVJlZnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBqc29uLmZvcm1GaWVsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtTWFwcGVyRmllbGQgZm9ybT17e3Byb3BzOiBmb3JtUHJvcHMsIGZpZWxkczoganNvbi5mb3JtRmllbGRzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17anNvbi5mb3JtRGF0YSB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2M0Zy1wYW5lbC1idXR0b25zJ30+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1idG4gYzRnLWJ0bi1zdWJtaXQnfSB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLWJ0bi10ZXh0J30+e3RoaXMucHJvcHMuZmllbGQuY29uZmlybUJ1dHRvblRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1idG4gYzRnLWJ0bi1jbG9zZSd9IHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydjNGctYnRuLXRleHQnfT57dGhpcy5wcm9wcy5maWVsZC5jbG9zZUJ1dHRvblRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQ29udGVudDogY29udGVudH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gICAgbGV0IGZvcm1FbGVtZW50cyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZvcm0uZWxlbWVudHM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChpbmRleCA8IGZvcm1FbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZm9ybUVsZW1lbnRzLml0ZW0oaW5kZXgpO1xuICAgICAgaWYgKGVsZW1lbnQubmFtZSkge1xuICAgICAgICBkYXRhW2VsZW1lbnQubmFtZV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG4gICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy5maWVsZC5zdWJtaXRVcmwsIGRhdGEpLmRvbmUodGhpcy5vbkZvcm1TdWJtaXREb25lKS5mYWlsKHRoaXMub25Gb3JtU3VibWl0RmFpbCk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXREb25lKGpzb24pIHtcbiAgICBpZiAoanNvbiAmJiBqc29uLnN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQ29udGVudDogPE1vZGFsQ29udGVudE1lc3NhZ2UgdGl0bGU9e2pzb24uc3VjY2Vzcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17anNvbi5zdWNjZXNzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5jbG9zZUFuZENsZWFyTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0PXt0aGlzLnByb3BzLmZpZWxkLmNsb3NlQnV0dG9uVGV4dH0vPlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdEZhaWwocmVzcG9uc2UpIHtcbiAgICBsZXQganNvbiA9IHJlc3BvbnNlLnJlc3BvbnNlSlNPTjtcbiAgICBpZiAoanNvbiAmJiBqc29uLmVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb2RhbENvbnRlbnQ6IDxNb2RhbENvbnRlbnRNZXNzYWdlIHRpdGxlPXtqc29uLmVycm9yLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtqc29uLmVycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5zaG93Rm9ybS5iaW5kKHRoaXMsIGpzb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dD17dGhpcy5wcm9wcy5maWVsZC5jbG9zZUJ1dHRvblRleHR9Lz5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY2hlY2sgY29uZGl0aW9uXG4gICAgaWYgKCFjaGVja0lmRmllbGRJc1JlbmRlcmVkKHRoaXMucHJvcHMuZmllbGQsIHRoaXMucHJvcHMuZGF0YSwgdGhpcy5wcm9wcy5maWVsZHMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLXRleHRcIiArICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzID8gXCIgXCIgKyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogXCJcIil9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfSBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuZmllbGQubGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vZGFsQ29udGVudH1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSIsIlxuXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25kaXRpb25zKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZmllbGQuY29uZGl0aW9uVmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgZm9yIG9uZSBjb25kaXRpb24gZmllbGQgKG9yIGNvbmRpdGlvbilcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpIHtcbiAgbGV0IHJlbmRlciA9IHRydWU7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gIT09IG51bGwgJiYgIWRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdLnZhbHVlKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBudWxsICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBlbGVtZW50ID0gZmllbGQuY29uZGl0aW9uRmllbGRbMF07XG4gICAgcmVuZGVyID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgY29uZFZhbHVlID0gZmllbGQuY29uZGl0aW9uVmFsdWVba2V5XTtcbiAgICAgICAgaWYgKCEhZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgLy8gZGF0YVtlbGVtZW50XSBpcyBhIHNlbGVjdCBmaWVsZFxuICAgICAgICAgIGlmIChkYXRhW2VsZW1lbnRdLnZhbHVlID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRmllbGRJc1JlbmRlcmVkKGZpZWxkLCBkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKGhhc0NvbmRpdGlvbnMoZmllbGQpKSB7XG4gICAgLy8gZ2V0IGZpZWxkIHRoaXMgZmllbGQgZGVwZW5kcyB1cG9uXG4gICAgbGV0IGRlcGVuZGVudEZpZWxkID0gbnVsbDtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gZmllbGQuY29uZGl0aW9uRmllbGRbMF0pIHtcbiAgICAgICAgICBkZXBlbmRlbnRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwZW5kZW50RmllbGQgIT09IG51bGwpIHtcbiAgICAgIGxldCBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgaWYgKGhhc0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQpKSB7XG4gICAgICAgIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IGNoZWNrQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgJiYgY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbmRpdGlvbnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJNb2RhbCIsIlJlYWN0IiwibGF6eSIsIk1vZGFsQ29udGVudE1lc3NhZ2UiLCJNb2RhbENvbnRlbnQiLCJGb3JtTWFwcGVyRmllbGQiLCJEZXRhaWxNYXBwZXJGaWVsZCIsIkRldGFpbE1vZGFsRm9ybUJ1dHRvbkZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInJlbmRlckRlZmF1bHRDb250ZW50IiwiYmluZCIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJjbG9zZUFuZENsZWFyTW9kYWwiLCJvbkFqYXhEb25lIiwib25BamF4RmFpbCIsInNob3dGb3JtIiwic3VibWl0Rm9ybSIsIm9uRm9ybVN1Ym1pdERvbmUiLCJvbkZvcm1TdWJtaXRGYWlsIiwic3RhdGUiLCJzaG93TW9kYWwiLCJtb2RhbENvbnRlbnQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiZmllbGQiLCJsYWJlbCIsIm9uQ29uZmlybSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2xvc2VCdXR0b25UZXh0Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJzcmMiLCJjbGFzc05hbWUiLCJhbHQiLCJ1cmwiLCJ1cmxGaWVsZCIsInJlcGxhY2UiLCJkYXRhIiwialF1ZXJ5IiwiZG9uZSIsImZhaWwiLCJzZXRTdGF0ZSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJfdGhpczIiLCJmaWVsZHMiLCJpbm5lckZpZWxkcyIsImxlbmd0aCIsImZpbHRlciIsImluY2x1ZGVzIiwibmFtZSIsInR5cGUiLCJmb3JtUHJvcHMiLCJ1cGRhdGVGdW5jdGlvbiIsImNvbnRlbnQiLCJvbkNsaWNrIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIm1hcCIsIml0ZW0iLCJpZCIsImRldGFpbCIsImxhbmd1YWdlUmVmcyIsImZvcm1GaWVsZHMiLCJmb3JtIiwiZm9ybURhdGEiLCJldmVudCIsImZvcm1FbGVtZW50cyIsInRhcmdldCIsInBhcmVudE5vZGUiLCJlbGVtZW50cyIsImluZGV4IiwiZWxlbWVudCIsInBvc3QiLCJzdWJtaXRVcmwiLCJzdWNjZXNzIiwicmVuZGVyIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsInNob3ciLCJDb21wb25lbnQiLCJoYXNDb25kaXRpb25zIiwiY29uZGl0aW9uRmllbGQiLCJjb25kaXRpb25WYWx1ZSIsImZvckVhY2giLCJjaGVja0NvbmRpdGlvbnMiLCJTdHJpbmciLCJjb25kVmFsdWUiLCJkZXBlbmRlbnRGaWVsZCIsImlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=