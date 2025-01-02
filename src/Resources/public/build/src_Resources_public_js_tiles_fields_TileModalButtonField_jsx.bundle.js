"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileModalButtonField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileModalButtonField.jsx":
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileModalButtonField.jsx ***!
  \***********************************************************************/
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
var ExperimentalGridTile = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_ExperimentalGridTile_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../tiles/ExperimentalGridTile.jsx */ "./src/Resources/public/js/tiles/ExperimentalGridTile.jsx"));
});
var TileModalButtonField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileModalButtonField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileModalButtonField);
    _this = _callSuper(this, TileModalButtonField, [props]);
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
  (0, _inherits2["default"])(TileModalButtonField, _Component);
  return (0, _createClass2["default"])(TileModalButtonField, [{
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
        }, /*#__PURE__*/_react["default"].createElement(ExperimentalGridTile, {
          dataEntry: this.props.data,
          fields: fields,
          list: this.props.list,
          languageRefs: this.props.languageRefs
        }), json.formFields.map(function (item, id) {
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
      if (!this.props.field.label) {
        return null;
      }
      if (this.props.field.conditions && typeof this.props.field.conditions.forEach === 'function') {
        var _render = true;
        this.props.field.conditions.forEach(function (element) {
          var data = this.props.data;
          if (element.not) {
            if (String(data[element.field]) === String(element.value)) {
              _render = false;
            }
          } else {
            if (String(data[element.field]) !== String(element.value)) {
              _render = false;
            }
          }
        }, this);
        if (_render === false) {
          return null;
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.wrapperClass
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.field["class"],
        onClick: this.openModal
      }, this.props.field.label), /*#__PURE__*/_react["default"].createElement(Modal, {
        show: this.state.showModal,
        onClose: this.closeModal
      }, this.state.modalContent));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVNb2RhbEJ1dHRvbkZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBaUQsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxD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O2NBQ3pENkQsT0FBTSxHQUFHLEtBQUs7WUFDaEI7VUFDRjtRQUNGLENBQUMsRUFBRSxJQUFJLENBQUM7UUFFUixJQUFJQSxPQUFNLEtBQUssS0FBSyxFQUFFO1VBQ3BCLE9BQU8sSUFBSTtRQUNiO01BQ0Y7TUFFQSxvQkFDRTlILE1BQUEsWUFBQWtFLGFBQUE7UUFBS1csU0FBUyxFQUFFLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQytEO01BQWEsZ0JBQzVDbkksTUFBQSxZQUFBa0UsYUFBQTtRQUFRVyxTQUFTLEVBQUUsSUFBSSxDQUFDaEMsS0FBSyxDQUFDdUIsS0FBSyxTQUFPO1FBQUNvQyxPQUFPLEVBQUUsSUFBSSxDQUFDdEQ7TUFBVSxHQUNoRSxJQUFJLENBQUNMLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQ0MsS0FDWixDQUFDLGVBQ1RyRSxNQUFBLFlBQUFrRSxhQUFBLENBQUMvQixLQUFLO1FBQUNpRyxJQUFJLEVBQUUsSUFBSSxDQUFDekUsS0FBSyxDQUFDQyxTQUFVO1FBQUN5RSxPQUFPLEVBQUUsSUFBSSxDQUFDbEY7TUFBVyxHQUN6RCxJQUFJLENBQUNRLEtBQUssQ0FBQ0UsWUFDUCxDQUNKLENBQUM7SUFHVjtFQUFDO0FBQUEsRUExTStDeUUsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90aWxlcy9maWVsZHMvVGlsZU1vZGFsQnV0dG9uRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1vZGFsID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RhbC9Nb2RhbC5qc3hcIikpO1xuY29uc3QgTW9kYWxDb250ZW50TWVzc2FnZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kYWwvY29udGVudC9Nb2RhbENvbnRlbnRNZXNzYWdlLmpzeFwiKSk7XG5jb25zdCBNb2RhbENvbnRlbnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL2NvbnRlbnQvTW9kYWxDb250ZW50LmpzeFwiKSk7XG5jb25zdCBGb3JtTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL2Zvcm0vZmllbGRzL0Zvcm1NYXBwZXJGaWVsZC5qc3hcIikpO1xuY29uc3QgRXhwZXJpbWVudGFsR3JpZFRpbGUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL3RpbGVzL0V4cGVyaW1lbnRhbEdyaWRUaWxlLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVNb2RhbEJ1dHRvbkZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlbmRlckRlZmF1bHRDb250ZW50ID0gdGhpcy5yZW5kZXJEZWZhdWx0Q29udGVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQW5kQ2xlYXJNb2RhbCA9IHRoaXMuY2xvc2VBbmRDbGVhck1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkFqYXhEb25lID0gdGhpcy5vbkFqYXhEb25lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkFqYXhGYWlsID0gdGhpcy5vbkFqYXhGYWlsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93Rm9ybSA9IHRoaXMuc2hvd0Zvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9ybVN1Ym1pdERvbmUgPSB0aGlzLm9uRm9ybVN1Ym1pdERvbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9ybVN1Ym1pdEZhaWwgPSB0aGlzLm9uRm9ybVN1Ym1pdEZhaWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgbW9kYWxDb250ZW50OiB0aGlzLnJlbmRlckRlZmF1bHRDb250ZW50KClcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyRGVmYXVsdENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbENvbnRlbnQgdGl0bGU9e3RoaXMucHJvcHMuZmllbGQubGFiZWx9IG9uQ29uZmlybT17dGhpcy5jbG9zZU1vZGFsfSBjb25maXJtQnV0dG9uVGV4dD17dGhpcy5wcm9wcy5maWVsZC5jbG9zZUJ1dHRvblRleHR9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiYXV0b1wifX0+XG4gICAgICAgICAgPGltZyBzcmM9XCJidW5kbGVzL2NvbjRnaXNmcmFtZXdvcmsvaW1nL3ByZWxvYWRlci1pbWFnZS5zdmdcIiBjbGFzc05hbWU9XCJwcmVsb2FkZXItaW1hZ2VcIiBhbHQ9XCJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5maWVsZC51cmw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQudXJsRmllbGQpIHtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKHRoaXMucHJvcHMuZmllbGQudXJsRmllbGQsIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLnVybEZpZWxkXSk7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmdldCh1cmwpLmRvbmUodGhpcy5vbkFqYXhEb25lKS5mYWlsKHRoaXMub25BamF4RmFpbCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IHRydWV9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZX0pO1xuICB9XG5cbiAgY2xvc2VBbmRDbGVhck1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2UsIG1vZGFsQ29udGVudDogdGhpcy5yZW5kZXJEZWZhdWx0Q29udGVudCgpfSk7XG4gIH1cblxuICBvbkFqYXhEb25lKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zaG93Rm9ybShqc29uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgb25BamF4RmFpbChyZXNwb25zZSkge1xuICAgIGxldCBqc29uID0gcmVzcG9uc2UucmVzcG9uc2VKU09OO1xuICAgIGlmIChqc29uLmVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb2RhbENvbnRlbnQ6IChcbiAgICAgICAgICA8TW9kYWxDb250ZW50TWVzc2FnZSB0aXRsZT17anNvbi5lcnJvci50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtqc29uLmVycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ9e2pzb24uZXJyb3IuY29uZmlybUJ1dHRvblRleHR9IC8+XG4gICAgICAgICl9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Rm9ybShqc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmaWVsZHM7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZmllbGQuaW5uZXJGaWVsZHMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuZmllbGQuaW5uZXJGaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkcy5maWx0ZXIoZmllbGQgPT4gdGhpcy5wcm9wcy5maWVsZC5pbm5lckZpZWxkcy5pbmNsdWRlcyhmaWVsZC5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQudHlwZSAhPT0gdGhpcy5wcm9wcy5maWVsZC50eXBlKTtcbiAgICAgIH1cbiAgICAgIGxldCBmb3JtUHJvcHMgPSB7fTtcbiAgICAgIGZvcm1Qcm9wcy51cGRhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgbGV0IGNvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJ2M0Zy1tb2RhbC1jb250ZW50J30+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYzRnLWJ0biBjNGctYnRuLXRvcC1jbG9zZSd9IHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2M0Zy1idG4tdGV4dCd9Pnt0aGlzLnByb3BzLmZpZWxkLmNsb3NlQnV0dG9uVGV4dH08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2M0Zy1tb2RhbF9fdGl0bGUtd3JhcHBlcid9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2M0Zy1tb2RhbF9fdGl0bGUnfT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcImF1dG9cIn19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYnVuZGxlcy9jb240Z2lzZnJhbWV3b3JrL2ltZy9wcmVsb2FkZXItaW1hZ2Uuc3ZnXCIgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWltYWdlXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj59PlxuICAgICAgICAgICAgICA8RXhwZXJpbWVudGFsR3JpZFRpbGUgZGF0YUVudHJ5PXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy5saXN0fSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBqc29uLmZvcm1GaWVsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtTWFwcGVyRmllbGQgZm9ybT17e3Byb3BzOiBmb3JtUHJvcHMsIGZpZWxkczoganNvbi5mb3JtRmllbGRzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17anNvbi5mb3JtRGF0YSB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQgKyAxfSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2M0Zy1wYW5lbC1idXR0b25zJ30+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1idG4gYzRnLWJ0bi1zdWJtaXQnfSB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYzRnLWJ0bi10ZXh0J30+e3RoaXMucHJvcHMuZmllbGQuY29uZmlybUJ1dHRvblRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1idG4gYzRnLWJ0bi1jbG9zZSd9IHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydjNGctYnRuLXRleHQnfT57dGhpcy5wcm9wcy5maWVsZC5jbG9zZUJ1dHRvblRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQ29udGVudDogY29udGVudH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gICAgbGV0IGZvcm1FbGVtZW50cyA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmZvcm0uZWxlbWVudHM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHdoaWxlIChpbmRleCA8IGZvcm1FbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZm9ybUVsZW1lbnRzLml0ZW0oaW5kZXgpO1xuICAgICAgaWYgKGVsZW1lbnQubmFtZSkge1xuICAgICAgICBkYXRhW2VsZW1lbnQubmFtZV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG4gICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy5maWVsZC5zdWJtaXRVcmwsIGRhdGEpLmRvbmUodGhpcy5vbkZvcm1TdWJtaXREb25lKS5mYWlsKHRoaXMub25Gb3JtU3VibWl0RmFpbCk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXREb25lKGpzb24pIHtcbiAgICBpZiAoanNvbiAmJiBqc29uLnN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsQ29udGVudDogPE1vZGFsQ29udGVudE1lc3NhZ2UgdGl0bGU9e2pzb24uc3VjY2Vzcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17anNvbi5zdWNjZXNzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5jbG9zZUFuZENsZWFyTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0PXt0aGlzLnByb3BzLmZpZWxkLmNsb3NlQnV0dG9uVGV4dH0vPlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdEZhaWwocmVzcG9uc2UpIHtcbiAgICBsZXQganNvbiA9IHJlc3BvbnNlLnJlc3BvbnNlSlNPTjtcbiAgICBpZiAoanNvbiAmJiBqc29uLmVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb2RhbENvbnRlbnQ6IDxNb2RhbENvbnRlbnRNZXNzYWdlIHRpdGxlPXtqc29uLmVycm9yLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtqc29uLmVycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5zaG93Rm9ybS5iaW5kKHRoaXMsIGpzb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dD17dGhpcy5wcm9wcy5maWVsZC5jbG9zZUJ1dHRvblRleHR9Lz5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCEodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbnMgJiYgdHlwZW9mIHRoaXMucHJvcHMuZmllbGQuY29uZGl0aW9ucy5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMuZmllbGQuY29uZGl0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZiAoZWxlbWVudC5ub3QpIHtcbiAgICAgICAgICBpZiAoU3RyaW5nKGRhdGFbZWxlbWVudC5maWVsZF0pID09PSBTdHJpbmcoZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoU3RyaW5nKGRhdGFbZWxlbWVudC5maWVsZF0pICE9PSBTdHJpbmcoZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmIChyZW5kZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC53cmFwcGVyQ2xhc3N9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30gb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSBvbkNsb3NlPXt0aGlzLmNsb3NlTW9kYWx9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vZGFsQ29udGVudH1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIk1vZGFsIiwiUmVhY3QiLCJsYXp5IiwiTW9kYWxDb250ZW50TWVzc2FnZSIsIk1vZGFsQ29udGVudCIsIkZvcm1NYXBwZXJGaWVsZCIsIkV4cGVyaW1lbnRhbEdyaWRUaWxlIiwiVGlsZU1vZGFsQnV0dG9uRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwicmVuZGVyRGVmYXVsdENvbnRlbnQiLCJiaW5kIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImNsb3NlQW5kQ2xlYXJNb2RhbCIsIm9uQWpheERvbmUiLCJvbkFqYXhGYWlsIiwic2hvd0Zvcm0iLCJzdWJtaXRGb3JtIiwib25Gb3JtU3VibWl0RG9uZSIsIm9uRm9ybVN1Ym1pdEZhaWwiLCJzdGF0ZSIsInNob3dNb2RhbCIsIm1vZGFsQ29udGVudCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJmaWVsZCIsImxhYmVsIiwib25Db25maXJtIiwiY29uZmlybUJ1dHRvblRleHQiLCJjbG9zZUJ1dHRvblRleHQiLCJzdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsInNyYyIsImNsYXNzTmFtZSIsImFsdCIsInVybCIsInVybEZpZWxkIiwicmVwbGFjZSIsImRhdGEiLCJqUXVlcnkiLCJkb25lIiwiZmFpbCIsInNldFN0YXRlIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsIl90aGlzMiIsImZpZWxkcyIsImlubmVyRmllbGRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJuYW1lIiwidHlwZSIsImZvcm1Qcm9wcyIsInVwZGF0ZUZ1bmN0aW9uIiwiY29udGVudCIsIm9uQ2xpY2siLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiZGF0YUVudHJ5IiwibGlzdCIsImxhbmd1YWdlUmVmcyIsImZvcm1GaWVsZHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJmb3JtIiwiZm9ybURhdGEiLCJldmVudCIsImZvcm1FbGVtZW50cyIsInRhcmdldCIsInBhcmVudE5vZGUiLCJlbGVtZW50cyIsImluZGV4IiwiZWxlbWVudCIsInBvc3QiLCJzdWJtaXRVcmwiLCJzdWNjZXNzIiwicmVuZGVyIiwiY29uZGl0aW9ucyIsImZvckVhY2giLCJub3QiLCJTdHJpbmciLCJ3cmFwcGVyQ2xhc3MiLCJzaG93Iiwib25DbG9zZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=