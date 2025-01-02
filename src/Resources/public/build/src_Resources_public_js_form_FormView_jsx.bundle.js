"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_FormView_jsx"],{

/***/ "./src/Resources/public/js/form/FormView.jsx":
/*!***************************************************!*\
  !*** ./src/Resources/public/js/form/FormView.jsx ***!
  \***************************************************/
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
var MapperButton = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_button_MapperButton_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./button/MapperButton.jsx */ "./src/Resources/public/js/form/button/MapperButton.jsx"));
});
var FormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./fields/FormMapperField.jsx */ "./src/Resources/public/js/form/fields/FormMapperField.jsx"));
});
var FormView = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormView);
    _this = _callSuper(this, FormView, [props]);
    _this.activeButton = null;
    _this.state = {
      errorTexts: {},
      loading: false
    };
    if (props.component.toggleableLayout) {
      _this.state.toggled = false;
    }
    _this.submitForm = _this.submitForm.bind(_this);
    _this.toggleForm = _this.toggleForm.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FormView, _Component);
  return (0, _createClass2["default"])(FormView, [{
    key: "toggleForm",
    value: function toggleForm() {
      this.setState({
        toggled: !this.state.toggled
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var buttons = [];
      var wrappedFields = [];
      this.props.component.buttons.forEach(function (button, index) {
        buttons.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              textAlign: "center",
              margin: "auto"
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: "bundles/con4gisframework/img/preloader-image.svg",
            className: "preloader-image",
            alt: ""
          })),
          key: index
        }, /*#__PURE__*/_react["default"].createElement(MapperButton, {
          key: index,
          form: this,
          button: button,
          languageRefs: this.props.languageRefs
        })));
      }, this);
      var loadingAnimation = null;
      if (this.state.loading) {
        loadingAnimation = /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            textAlign: "center",
            margin: "auto"
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "bundles/con4gisframework/img/preloader-image.svg",
          className: "preloader-image",
          alt: ""
        }));
      }
      var headline = null;
      if (this.props.component.headline) {
        headline = /*#__PURE__*/_react["default"].createElement("span", {
          className: "form-headline"
        }, this.props.component.headline);
      }
      var fieldContent = this.props.component.fields.map(function (item, id) {
        if (item.type === "wrapper") {
          wrappedFields = wrappedFields.concat(item.wrappedFields);
          return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
            fallback: /*#__PURE__*/_react["default"].createElement("div", {
              style: {
                textAlign: "center",
                margin: "auto"
              }
            }, /*#__PURE__*/_react["default"].createElement("img", {
              src: "bundles/con4gisframework/img/preloader-image.svg",
              className: "preloader-image",
              alt: ""
            }), "."),
            key: id
          }, /*#__PURE__*/_react["default"].createElement(FormMapperField, {
            key: id,
            field: item,
            data: _this2.props.component.data,
            parentNode: _this2,
            fields: _this2.props.component.fields,
            form: _this2,
            errorTexts: _this2.state.errorTexts || {},
            languageRefs: _this2.props.languageRefs
          }));
        } else {
          if (!wrappedFields.includes(item.name)) {
            // only render non-wrapped fields
            // since the wrapped fields will be rendered by the wrapper
            return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
              fallback: /*#__PURE__*/_react["default"].createElement("div", {
                style: {
                  textAlign: "center",
                  margin: "auto"
                }
              }, /*#__PURE__*/_react["default"].createElement("img", {
                src: "bundles/con4gisframework/img/preloader-image.svg",
                className: "preloader-image",
                alt: ""
              })),
              key: id
            }, /*#__PURE__*/_react["default"].createElement(FormMapperField, {
              key: id,
              field: item,
              data: _this2.props.component.data,
              parentNode: _this2,
              form: _this2,
              errorText: _this2.state.errorTexts ? _this2.state.errorTexts[item.name] : {},
              languageRefs: _this2.props.languageRefs
            }));
          }
        }
      });
      var className = "form-view";
      if (this.props.component["class"]) {
        className = this.props.component["class"];
      }
      var formContent = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headline, fieldContent, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.component.buttonWrapperClass
      }, loadingAnimation, buttons));
      if (this.props.component.toggleableLayout) {
        var formClass = this.props.component.toggleableBaseClass + '-form';
        if (this.props.component["class"]) {
          formClass += ' ' + this.props.component["class"];
        }
        var buttonLabel = this.props.component.toggleableOffLabel;
        var toggledClass = '';
        if (this.state.toggled) {
          buttonLabel = this.props.component.toggleableOnLabel;
          toggledClass = ' ' + this.props.component.toggleableOnClass;
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.component.toggleableBaseClass + '-outer' + toggledClass,
          hidden: this.props.component.hidden
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.component.toggleableBaseClass + '-inner'
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.component.toggleableBaseClass + '-button-wrapper' + toggledClass
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.component.toggleableBaseClass + '-button' + toggledClass,
          onClick: this.toggleForm
        }, buttonLabel)), /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.component.toggleableBaseClass + '-form-wrapper' + toggledClass
        }, /*#__PURE__*/_react["default"].createElement("form", {
          className: formClass,
          onSubmit: function onSubmit(event) {
            return _this2.submitForm(event);
          },
          method: this.props.component.method
        }, formContent))));
      } else if (this.props.component.containerRow) {
        if (this.props.component.renderAsForm) {
          return /*#__PURE__*/_react["default"].createElement("form", {
            className: className,
            onSubmit: function onSubmit(event) {
              return _this2.submitForm(event);
            },
            method: this.props.component.method
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "row"
          }, formContent)));
        } else {
          if (this.props.component.scrollSpy) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: className,
              method: this.props.component.method,
              "data-spy": "scroll",
              "data-target": this.props.component.scrollSpyTarget,
              "data-offset": "0"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "container"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "row"
            }, formContent)));
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: className,
              method: this.props.component.method
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "container"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "row"
            }, formContent)));
          }
        }
      } else {
        if (this.props.component.renderAsForm) {
          var form = /*#__PURE__*/_react["default"].createElement("form", {
            className: className,
            onSubmit: function onSubmit(event) {
              return _this2.submitForm(event);
            },
            method: this.props.component.method
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "row"
          }, formContent)));
          if (this.props.component.wrapper) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              id: this.props.component.wrapperId,
              className: this.props.component.wrapperClass
            }, form);
          } else {
            return form;
          }
        } else {
          if (this.props.component.scrollSpy) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: className,
              method: this.props.component.method,
              "data-spy": "scroll",
              "data-target": this.props.component.scrollSpyTarget,
              "data-offset": "0"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "container"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "row"
            }, formContent)));
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: className,
              method: this.props.component.method
            }, formContent);
          }
        }
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(event) {
      this.activeButton.submitCallback(this, event);
    }
  }, {
    key: "storePosition",
    value: function storePosition() {
      if (this.props.component.preservePosition) {
        var storage = window.localStorage;
        storage.setItem("formPosition", document.documentElement.scrollTop + "");
      }
    }
  }, {
    key: "setErrorTexts",
    value: function setErrorTexts(errorTexts) {
      this.setState({
        errorTexts: errorTexts
      });
    }
  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this.setState({
        loading: loading
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.component.preservePosition) {
        var storage = window.localStorage;
        var scrollValue = storage.getItem("formPosition");
        if (scrollValue) {
          window.setTimeout(function () {
            document.documentElement.scrollTop = parseInt(scrollValue);
          }, 1000);
        }
        // clear entry to avoid errors
        storage.removeItem("formPosition");
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9Gb3JtVmlld19qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQWlELFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFU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RCxTQUFBc0UsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBSSxJQUFJLENBQUN0RixLQUFLLENBQUNPLFNBQVMsQ0FBQ3FFLGdCQUFnQixFQUFFO1FBQ3pDLElBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxZQUFZO1FBQ25DLElBQUlRLFdBQVcsR0FBR1YsT0FBTyxDQUFDVyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUlELFdBQVcsRUFBRTtVQUNmVCxNQUFNLENBQUNXLFVBQVUsQ0FBQyxZQUFNO1lBQ3RCUixRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxHQUFHTyxRQUFRLENBQUNILFdBQVcsQ0FBQztVQUM1RCxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ1Y7UUFDQTtRQUNBVixPQUFPLENBQUNjLFVBQVUsQ0FBQyxjQUFjLENBQUM7TUFDcEM7SUFDRjtFQUFDO0FBQUEsRUFwT21DQyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vRm9ybVZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1hcHBlckJ1dHRvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9idXR0b24vTWFwcGVyQnV0dG9uLmpzeFwiKSk7XG5jb25zdCBGb3JtTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vZmllbGRzL0Zvcm1NYXBwZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmFjdGl2ZUJ1dHRvbiA9IG51bGw7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JUZXh0czoge30sXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAocHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVMYXlvdXQpIHtcbiAgICAgIHRoaXMuc3RhdGUudG9nZ2xlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRm9ybSA9IHRoaXMudG9nZ2xlRm9ybS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZ2dsZWQ6ICF0aGlzLnN0YXRlLnRvZ2dsZWRcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgbGV0IHdyYXBwZWRGaWVsZHMgPSBbXTtcbiAgICB0aGlzLnByb3BzLmNvbXBvbmVudC5idXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICAgIGJ1dHRvbnMucHVzaCg8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT48aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj59IGtleT17aW5kZXh9PlxuICAgICAgICA8TWFwcGVyQnV0dG9uIGtleT17aW5kZXh9IGZvcm09e3RoaXN9IGJ1dHRvbj17YnV0dG9ufSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICA8L1N1c3BlbnNlPik7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBsZXQgbG9hZGluZ0FuaW1hdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgbG9hZGluZ0FuaW1hdGlvbiA9IDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT48aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuaGVhZGxpbmUpIHtcbiAgICAgIGhlYWRsaW5lID0gPHNwYW4gY2xhc3NOYW1lPXtcImZvcm0taGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvc3Bhbj47XG4gICAgfVxuXG4gICAgbGV0IGZpZWxkQ29udGVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50LmZpZWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcIndyYXBwZXJcIikge1xuICAgICAgICB3cmFwcGVkRmllbGRzID0gd3JhcHBlZEZpZWxkcy5jb25jYXQoaXRlbS53cmFwcGVkRmllbGRzKTtcbiAgICAgICAgcmV0dXJuIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcImF1dG9cIn19PjxpbWcgc3JjPVwiYnVuZGxlcy9jb240Z2lzZnJhbWV3b3JrL2ltZy9wcmVsb2FkZXItaW1hZ2Uuc3ZnXCIgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWltYWdlXCIgYWx0PVwiXCIvPi48L2Rpdj59IGtleT17aWR9PlxuICAgICAgICAgIDxGb3JtTWFwcGVyRmllbGQga2V5PXtpZH0gZmllbGQ9e2l0ZW19IGRhdGE9e3RoaXMucHJvcHMuY29tcG9uZW50LmRhdGF9IHBhcmVudE5vZGU9e3RoaXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuY29tcG9uZW50LmZpZWxkc30gZm9ybT17dGhpc30gZXJyb3JUZXh0cz17dGhpcy5zdGF0ZS5lcnJvclRleHRzIHx8IHt9fSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgIDwvU3VzcGVuc2U+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF3cmFwcGVkRmllbGRzLmluY2x1ZGVzKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgICAvLyBvbmx5IHJlbmRlciBub24td3JhcHBlZCBmaWVsZHNcbiAgICAgICAgICAvLyBzaW5jZSB0aGUgd3JhcHBlZCBmaWVsZHMgd2lsbCBiZSByZW5kZXJlZCBieSB0aGUgd3JhcHBlclxuICAgICAgICAgIHJldHVybiA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT48aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj59IGtleT17aWR9PlxuICAgICAgICAgICAgPEZvcm1NYXBwZXJGaWVsZCBrZXk9e2lkfSBmaWVsZD17aXRlbX0gZGF0YT17dGhpcy5wcm9wcy5jb21wb25lbnQuZGF0YX0gcGFyZW50Tm9kZT17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT17dGhpc30gZXJyb3JUZXh0PXt0aGlzLnN0YXRlLmVycm9yVGV4dHMgPyB0aGlzLnN0YXRlLmVycm9yVGV4dHNbaXRlbS5uYW1lXSA6IHt9fSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgICAgPC9TdXNwZW5zZT47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBcImZvcm0tdmlld1wiO1xuICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5jbGFzcykge1xuICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jb21wb25lbnQuY2xhc3M7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUNvbnRlbnQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmllbGRDb250ZW50fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9uZW50LmJ1dHRvbldyYXBwZXJDbGFzc30+XG4gICAgICAgIHtsb2FkaW5nQW5pbWF0aW9ufVxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVMYXlvdXQpIHtcbiAgICAgIGxldCBmb3JtQ2xhc3MgPSB0aGlzLnByb3BzLmNvbXBvbmVudC50b2dnbGVhYmxlQmFzZUNsYXNzICsgJy1mb3JtJztcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5jbGFzcykge1xuICAgICAgICBmb3JtQ2xhc3MgKz0gJyAnICsgdGhpcy5wcm9wcy5jb21wb25lbnQuY2xhc3NcbiAgICAgIH1cbiAgICAgIGxldCBidXR0b25MYWJlbCA9IHRoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVPZmZMYWJlbDtcbiAgICAgIGxldCB0b2dnbGVkQ2xhc3MgPSAnJztcbiAgICAgIGlmICh0aGlzLnN0YXRlLnRvZ2dsZWQpIHtcbiAgICAgICAgYnV0dG9uTGFiZWwgPSB0aGlzLnByb3BzLmNvbXBvbmVudC50b2dnbGVhYmxlT25MYWJlbDtcbiAgICAgICAgdG9nZ2xlZENsYXNzID0gJyAnICsgdGhpcy5wcm9wcy5jb21wb25lbnQudG9nZ2xlYWJsZU9uQ2xhc3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVCYXNlQ2xhc3MgKyAnLW91dGVyJyArIHRvZ2dsZWRDbGFzc31cbiAgICAgICAgICAgICAgICAgIGhpZGRlbj17dGhpcy5wcm9wcy5jb21wb25lbnQuaGlkZGVufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVCYXNlQ2xhc3MgKyAnLWlubmVyJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVCYXNlQ2xhc3MgKyAnLWJ1dHRvbi13cmFwcGVyJyArIHRvZ2dsZWRDbGFzc30+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jb21wb25lbnQudG9nZ2xlYWJsZUJhc2VDbGFzcyArICctYnV0dG9uJyArIHRvZ2dsZWRDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVGb3JtfT5cbiAgICAgICAgICAgICAge2J1dHRvbkxhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29tcG9uZW50LnRvZ2dsZWFibGVCYXNlQ2xhc3MgKyAnLWZvcm0td3JhcHBlcicgKyB0b2dnbGVkQ2xhc3N9PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtmb3JtQ2xhc3N9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEZvcm0oZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgbWV0aG9kPXt0aGlzLnByb3BzLmNvbXBvbmVudC5tZXRob2R9PlxuICAgICAgICAgICAgICB7Zm9ybUNvbnRlbnR9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuY29udGFpbmVyUm93KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQucmVuZGVyQXNGb3JtKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4gdGhpcy5zdWJtaXRGb3JtKGV2ZW50KX1cbiAgICAgICAgICAgICAgICBtZXRob2Q9e3RoaXMucHJvcHMuY29tcG9uZW50Lm1ldGhvZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvd1wifT5cbiAgICAgICAgICAgICAgICB7Zm9ybUNvbnRlbnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnNjcm9sbFNweSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICBtZXRob2Q9e3RoaXMucHJvcHMuY29tcG9uZW50Lm1ldGhvZH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtc3B5PXtcInNjcm9sbFwifVxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e3RoaXMucHJvcHMuY29tcG9uZW50LnNjcm9sbFNweVRhcmdldH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtb2Zmc2V0PXtcIjBcIn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRhaW5lclwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyb3dcIn0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgbWV0aG9kPXt0aGlzLnByb3BzLmNvbXBvbmVudC5tZXRob2R9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93XCJ9PlxuICAgICAgICAgICAgICAgICAge2Zvcm1Db250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnJlbmRlckFzRm9ybSkge1xuICAgICAgICBsZXQgZm9ybSA9IDxmb3JtIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHRoaXMuc3VibWl0Rm9ybShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kPXt0aGlzLnByb3BzLmNvbXBvbmVudC5tZXRob2R9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvd1wifT5cbiAgICAgICAgICAgICAge2Zvcm1Db250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT47XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC53cmFwcGVyKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuY29tcG9uZW50LndyYXBwZXJJZH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbXBvbmVudC53cmFwcGVyQ2xhc3N9PlxuICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5zY3JvbGxTcHkpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgbWV0aG9kPXt0aGlzLnByb3BzLmNvbXBvbmVudC5tZXRob2R9XG4gICAgICAgICAgICAgICAgIGRhdGEtc3B5PXtcInNjcm9sbFwifVxuICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17dGhpcy5wcm9wcy5jb21wb25lbnQuc2Nyb2xsU3B5VGFyZ2V0fVxuICAgICAgICAgICAgICAgICBkYXRhLW9mZnNldD17XCIwXCJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm93XCJ9PlxuICAgICAgICAgICAgICAgICAge2Zvcm1Db250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgIG1ldGhvZD17dGhpcy5wcm9wcy5jb21wb25lbnQubWV0aG9kfT5cbiAgICAgICAgICAgICAge2Zvcm1Db250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0oZXZlbnQpIHtcblxuICAgIHRoaXMuYWN0aXZlQnV0dG9uLnN1Ym1pdENhbGxiYWNrKHRoaXMsIGV2ZW50KTtcbiAgfVxuXG4gIHN0b3JlUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnByZXNlcnZlUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKFwiZm9ybVBvc2l0aW9uXCIsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvclRleHRzKGVycm9yVGV4dHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvclRleHRzOiBlcnJvclRleHRzfSk7XG4gIH1cblxuICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBsb2FkaW5nfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQucHJlc2VydmVQb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICBsZXQgc2Nyb2xsVmFsdWUgPSBzdG9yYWdlLmdldEl0ZW0oXCJmb3JtUG9zaXRpb25cIik7XG4gICAgICBpZiAoc2Nyb2xsVmFsdWUpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBwYXJzZUludChzY3JvbGxWYWx1ZSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgICAgLy8gY2xlYXIgZW50cnkgdG8gYXZvaWQgZXJyb3JzXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oXCJmb3JtUG9zaXRpb25cIik7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiTWFwcGVyQnV0dG9uIiwiUmVhY3QiLCJsYXp5IiwiRm9ybU1hcHBlckZpZWxkIiwiRm9ybVZpZXciLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiYWN0aXZlQnV0dG9uIiwic3RhdGUiLCJlcnJvclRleHRzIiwibG9hZGluZyIsImNvbXBvbmVudCIsInRvZ2dsZWFibGVMYXlvdXQiLCJ0b2dnbGVkIiwic3VibWl0Rm9ybSIsImJpbmQiLCJ0b2dnbGVGb3JtIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiX3RoaXMyIiwiYnV0dG9ucyIsIndyYXBwZWRGaWVsZHMiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW5kZXgiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJzdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsInNyYyIsImNsYXNzTmFtZSIsImFsdCIsImZvcm0iLCJsYW5ndWFnZVJlZnMiLCJsb2FkaW5nQW5pbWF0aW9uIiwiaGVhZGxpbmUiLCJmaWVsZENvbnRlbnQiLCJmaWVsZHMiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0eXBlIiwiY29uY2F0IiwiZmllbGQiLCJkYXRhIiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwibmFtZSIsImVycm9yVGV4dCIsImZvcm1Db250ZW50IiwiRnJhZ21lbnQiLCJidXR0b25XcmFwcGVyQ2xhc3MiLCJmb3JtQ2xhc3MiLCJ0b2dnbGVhYmxlQmFzZUNsYXNzIiwiYnV0dG9uTGFiZWwiLCJ0b2dnbGVhYmxlT2ZmTGFiZWwiLCJ0b2dnbGVkQ2xhc3MiLCJ0b2dnbGVhYmxlT25MYWJlbCIsInRvZ2dsZWFibGVPbkNsYXNzIiwiaGlkZGVuIiwib25DbGljayIsIm9uU3VibWl0IiwiZXZlbnQiLCJtZXRob2QiLCJjb250YWluZXJSb3ciLCJyZW5kZXJBc0Zvcm0iLCJzY3JvbGxTcHkiLCJzY3JvbGxTcHlUYXJnZXQiLCJ3cmFwcGVyIiwid3JhcHBlcklkIiwid3JhcHBlckNsYXNzIiwic3VibWl0Q2FsbGJhY2siLCJzdG9yZVBvc2l0aW9uIiwicHJlc2VydmVQb3NpdGlvbiIsInN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJzZXRFcnJvclRleHRzIiwic2V0TG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwic2Nyb2xsVmFsdWUiLCJnZXRJdGVtIiwic2V0VGltZW91dCIsInBhcnNlSW50IiwicmVtb3ZlSXRlbSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=