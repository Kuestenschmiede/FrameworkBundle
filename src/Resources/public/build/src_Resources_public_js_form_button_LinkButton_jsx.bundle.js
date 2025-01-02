"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_LinkButton_jsx"],{

/***/ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js":
/*!********************************************************************!*\
  !*** ../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../CoreBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlertHandler = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../CoreBundle/node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../CoreBundle/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../CoreBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../CoreBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
/**
 * The "cssClass" parameter in the functions can either be a string or an object. If it's a string, it will be applied
 * as class for the popup. If an object is passed, the classes can be set more precise. The following properties are
 * possible in the object:
 * cssClass: {
 *   container: 'container-class',
 *   popup: 'popup-class',
 *   header: 'header-class',
 *   title: 'title-class',
 *   closeButton: 'close-button-class',
 *   icon: 'icon-class',
 *   image: 'image-class',
 *   content: 'content-class',
 *   input: 'input-class',
 *   actions: 'actions-class',
 *   confirmButton: 'confirm-button-class',
 *   cancelButton: 'cancel-button-class',
 *   footer: 'footer-class'
 * }
 */
var AlertHandler = exports.AlertHandler = /*#__PURE__*/function () {
  function AlertHandler() {
    (0, _classCallCheck2["default"])(this, AlertHandler);
  }
  return (0, _createClass2["default"])(AlertHandler, [{
    key: "showErrorDialog",
    value: function showErrorDialog(title, content, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "error",
        customClass: cssClass ? cssClass : ''
      });
    }
  }, {
    key: "showInfoDialog",
    value: function showInfoDialog(title, content, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        customClass: cssClass ? cssClass : ''
      });
      ;
    }
  }, {
    key: "showInfoActionDialog",
    value: function showInfoActionDialog(title, content, confirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        customClass: cssClass ? cssClass : ''
      }).then(function () {
        confirmCallback();
      });
    }
  }, {
    key: "showInfoActionDialog2",
    value: function showInfoActionDialog2(title, content, confirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        showLoaderOnConfirm: true,
        customClass: cssClass ? cssClass : '',
        preConfirm: function preConfirm(data) {
          confirmCallback();
        }
      });
    }
  }, {
    key: "showConfirmDialog",
    value: function showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        customClass: cssClass ? cssClass : ''
      }).then(function (willDelete) {
        if (willDelete.value) {
          confirmCallback();
        } else {
          cancelCallback();
        }
      });
    }
  }, {
    key: "showConfirmDialogHTML",
    value: function showConfirmDialogHTML(title, html, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        html: html,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        customClass: cssClass ? cssClass : ''
      }).then(function (willDelete) {
        if (willDelete.value) {
          confirmCallback();
        } else {
          cancelCallback();
        }
      });
    }
  }, {
    key: "showPreConfirmDialog",
    value: function showPreConfirmDialog(title, text, preConfirmCallback, confirmText, cancelText, cssClass, showLoading) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        showLoaderOnConfirm: showLoading ? showLoading : true,
        preConfirm: function preConfirm() {
          return new Promise(function (data) {
            preConfirmCallback();
          });
        },
        allowOutsideClick: function allowOutsideClick() {
          return !_sweetalert["default"].isLoading();
        },
        customClass: cssClass ? cssClass : ''
      });
    }
  }, {
    key: "showLoadingDialog",
    value: function showLoadingDialog(title, text, preConfirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
        onBeforeOpen: function onBeforeOpen() {
          _sweetalert["default"].clickConfirm();
        },
        customClass: cssClass ? cssClass : '',
        preConfirm: function preConfirm() {
          return new Promise(function (data) {
            preConfirmCallback();
          });
        }
      });
    }
  }, {
    key: "showSelectDialog",
    value: function () {
      var _showSelectDialog = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(title, objOptions, confirmText, cancelText, cssClass) {
        var _yield$Swal$fire, selectedValue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _sweetalert["default"].fire({
                title: title,
                input: 'select',
                inputOptions: objOptions,
                inputPlaceholder: '-',
                showCancelButton: true,
                confirmButtonText: confirmText,
                cancelButtonText: cancelText,
                customClass: cssClass ? cssClass : ''
              });
            case 2:
              _yield$Swal$fire = _context.sent;
              selectedValue = _yield$Swal$fire.value;
              return _context.abrupt("return", selectedValue);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function showSelectDialog(_x, _x2, _x3, _x4, _x5) {
        return _showSelectDialog.apply(this, arguments);
      }
      return showSelectDialog;
    }()
  }]);
}();

/***/ }),

/***/ "./src/Resources/public/js/form/button/LinkButton.jsx":
/*!************************************************************!*\
  !*** ./src/Resources/public/js/form/button/LinkButton.jsx ***!
  \************************************************************/
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
var _AlertHandler = __webpack_require__(/*! ../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js");
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
var LinkButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function LinkButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LinkButton);
    _this = _callSuper(this, LinkButton, [props]);
    _this.showWarningDialog = _this.showWarningDialog.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(LinkButton, _Component);
  return (0, _createClass2["default"])(LinkButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.button.warnBeforeAction) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          className: this.props.button.className + " btn btn-primary",
          href: "#",
          onClick: function onClick(event) {
            event.preventDefault();
            _this2.showWarningDialog();
          }
        }, this.props.button.caption);
      } else {
        return /*#__PURE__*/_react["default"].createElement("a", {
          className: this.props.button.className + " btn btn-primary",
          href: this.props.button.href
        }, this.props.button.caption);
      }
    }
  }, {
    key: "showWarningDialog",
    value: function showWarningDialog() {
      var _this3 = this;
      var ah = new _AlertHandler.AlertHandler();
      var confirmCallback = function confirmCallback() {
        window.location = _this3.props.button.href;
      };
      var cancelCallback = function cancelCallback() {};
      ah.showConfirmDialog(this.props.button.warnTextHeadline, this.props.button.warnTextMessage, confirmCallback, cancelCallback, this.props.button.warnTextConfirm, this.props.button.warnTextCancel);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fTGlua0J1dHRvbl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsV0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxtQkFBQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkEsSUFvQmFDLFlBQVksR0FBQUMsb0JBQUE7RUFBQSxTQUFBRCxhQUFBO0lBQUEsSUFBQUUsZ0JBQUEsbUJBQUFGLFlBQUE7RUFBQTtFQUFBLFdBQUFHLGFBQUEsYUFBQUgsWUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFdkIsU0FBQUMsZUFBZUEsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN4Q0Msc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ1JKLEtBQUssRUFBRUEsS0FBSztRQUNaSyxJQUFJLEVBQUVKLE9BQU87UUFDYkssSUFBSSxFQUFFLE9BQU87UUFDYkMsV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFVLGNBQWNBLENBQUNSLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7TUFDdkNDLHNCQUFJLENBQUNDLElBQUksQ0FBQztRQUNSSixLQUFLLEVBQUVBLEtBQUs7UUFDWkssSUFBSSxFQUFFSixPQUFPO1FBQ2JLLElBQUksRUFBRSxNQUFNO1FBQ1pDLFdBQVcsRUFBRUwsUUFBUSxHQUFHQSxRQUFRLEdBQUc7TUFDckMsQ0FBQyxDQUFDO01BQUM7SUFDTDtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFXLG9CQUFvQkEsQ0FBQ1QsS0FBSyxFQUFFQyxPQUFPLEVBQUVTLGVBQWUsRUFBRVIsUUFBUSxFQUFFO01BQzlEQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQ0gsWUFBWTtRQUNWRCxlQUFlLENBQUMsQ0FBQztNQUNuQixDQUNKLENBQUM7SUFDSDtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFjLHFCQUFxQkEsQ0FBQ1osS0FBSyxFQUFFQyxPQUFPLEVBQUVTLGVBQWUsRUFBRVIsUUFBUSxFQUFFO01BQy9EQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsTUFBTTtRQUNaTyxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCTixXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQUU7UUFDckNZLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFHQyxJQUFJLEVBQUs7VUFDcEJMLGVBQWUsQ0FBQyxDQUFDO1FBQ25CO01BQUMsQ0FBQyxDQUFDO0lBQ1A7RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFHRCxTQUFBa0IsaUJBQWlCQSxDQUFDaEIsS0FBSyxFQUFFSyxJQUFJLEVBQUVLLGVBQWUsRUFBRU8sY0FBYyxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRWpCLFFBQVEsRUFBRTtNQUNqR0Msc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ1JKLEtBQUssRUFBRUEsS0FBSztRQUNaSyxJQUFJLEVBQUVBLElBQUk7UUFDVkMsSUFBSSxFQUFFLFNBQVM7UUFDZmMsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QkMsaUJBQWlCLEVBQUVILFdBQVcsR0FBR0EsV0FBVyxHQUFHLFNBQVM7UUFDeERJLGdCQUFnQixFQUFFSCxVQUFVLEdBQUdBLFVBQVUsR0FBRyxRQUFRO1FBQ3BEWixXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBQ1ksVUFBVSxFQUFLO1FBQ3RCLElBQUlBLFVBQVUsQ0FBQ3pCLEtBQUssRUFBRTtVQUNwQlksZUFBZSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxNQUFNO1VBQ0xPLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBcEIsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQTBCLHFCQUFxQkEsQ0FBQ3hCLEtBQUssRUFBRXlCLElBQUksRUFBRWYsZUFBZSxFQUFFTyxjQUFjLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFFakIsUUFBUSxFQUFFO01BQ3JHQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1p5QixJQUFJLEVBQUVBLElBQUk7UUFDVm5CLElBQUksRUFBRSxTQUFTO1FBQ2ZjLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLGlCQUFpQixFQUFFSCxXQUFXLEdBQUdBLFdBQVcsR0FBRyxTQUFTO1FBQ3hESSxnQkFBZ0IsRUFBRUgsVUFBVSxHQUFHQSxVQUFVLEdBQUcsUUFBUTtRQUNwRFosV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLFVBQUNZLFVBQVUsRUFBSztRQUN0QixJQUFJQSxVQUFVLENBQUN6QixLQUFLLEVBQUU7VUFDcEJZLGVBQWUsQ0FBQyxDQUFDO1FBQ25CLENBQUMsTUFBTTtVQUNMTyxjQUFjLENBQUMsQ0FBQztRQUNsQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXBCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE0QixvQkFBb0JBLENBQUMxQixLQUFLLEVBQUVLLElBQUksRUFBRXNCLGtCQUFrQixFQUFFVCxXQUFXLEVBQUVDLFVBQVUsRUFBRWpCLFFBQVEsRUFBRTBCLFdBQVcsRUFBRTtNQUNwR3pCLHNCQUFJLENBQUNDLElBQUksQ0FBQztRQUNSSixLQUFLLEVBQUVBLEtBQUs7UUFDWkssSUFBSSxFQUFFQSxJQUFJO1FBQ1ZDLElBQUksRUFBRSxTQUFTO1FBQ2ZjLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLGlCQUFpQixFQUFFSCxXQUFXLEdBQUdBLFdBQVcsR0FBRyxTQUFTO1FBQ3hESSxnQkFBZ0IsRUFBRUgsVUFBVSxHQUFHQSxVQUFVLEdBQUcsUUFBUTtRQUNwRE4sbUJBQW1CLEVBQUVlLFdBQVcsR0FBR0EsV0FBVyxHQUFHLElBQUk7UUFDckRkLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFBLEVBQWM7VUFDdEIsT0FBTyxJQUFJZSxPQUFPLENBQUUsVUFBVWQsSUFBSSxFQUFFO1lBQ2xDWSxrQkFBa0IsQ0FBQyxDQUFDO1VBQ3RCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFDREcsaUJBQWlCLEVBQUUsU0FBbkJBLGlCQUFpQkEsQ0FBQTtVQUFBLE9BQVEsQ0FBQzNCLHNCQUFJLENBQUM0QixTQUFTLENBQUMsQ0FBQztRQUFBO1FBQzFDeEIsV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrQyxpQkFBaUJBLENBQUNoQyxLQUFLLEVBQUVLLElBQUksRUFBRXNCLGtCQUFrQixFQUFFekIsUUFBUSxFQUFFO01BQzNEQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUEsSUFBSTtRQUNWZSxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCYSxjQUFjLEVBQUUsS0FBSztRQUNyQkgsaUJBQWlCLEVBQUUsS0FBSztRQUN4QmpCLG1CQUFtQixFQUFFLElBQUk7UUFDekJxQixZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBQSxFQUFRO1VBQ2xCL0Isc0JBQUksQ0FBQ2dDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRDVCLFdBQVcsRUFBRUwsUUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBRTtRQUNyQ1ksVUFBVSxFQUFFLFNBQVpBLFVBQVVBLENBQUEsRUFBUTtVQUNoQixPQUFPLElBQUllLE9BQU8sQ0FBRSxVQUFVZCxJQUFJLEVBQUU7WUFDbENZLGtCQUFrQixDQUFDLENBQUM7VUFDdEIsQ0FBQyxDQUFDO1FBQ0o7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBc0MsaUJBQUEsT0FBQUMsa0JBQUEsMEJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUVELFNBQUFDLFFBQXVCeEMsS0FBSyxFQUFFeUMsVUFBVSxFQUFFdkIsV0FBVyxFQUFFQyxVQUFVLEVBQUVqQixRQUFRO1FBQUEsSUFBQXdDLGdCQUFBLEVBQUFDLGFBQUE7UUFBQSxPQUFBTCxZQUFBLFlBQUFNLElBQUEsVUFBQUMsU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDcEM3QyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7Z0JBQzdDSixLQUFLLEVBQUVBLEtBQUs7Z0JBQ1ppRCxLQUFLLEVBQUUsUUFBUTtnQkFDZkMsWUFBWSxFQUFFVCxVQUFVO2dCQUN4QlUsZ0JBQWdCLEVBQUUsR0FBRztnQkFDckIvQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsaUJBQWlCLEVBQUVILFdBQVc7Z0JBQzlCSSxnQkFBZ0IsRUFBRUgsVUFBVTtnQkFDNUJaLFdBQVcsRUFBRUwsUUFBUSxHQUFHQSxRQUFRLEdBQUc7Y0FDckMsQ0FBQyxDQUFDO1lBQUE7Y0FBQXdDLGdCQUFBLEdBQUFJLFFBQUEsQ0FBQU0sSUFBQTtjQVRZVCxhQUFhLEdBQUFELGdCQUFBLENBQXBCNUMsS0FBSztjQUFBLE9BQUFnRCxRQUFBLENBQUFPLE1BQUEsV0FVTFYsYUFBYTtZQUFBO1lBQUE7Y0FBQSxPQUFBRyxRQUFBLENBQUFRLElBQUE7VUFBQTtRQUFBLEdBQUFkLE9BQUE7TUFBQSxDQUNyQjtNQUFBLFNBWktlLGdCQUFnQkEsQ0FBQUMsRUFBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQXhCLGlCQUFBLENBQUF5QixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQWhCUCxnQkFBZ0I7SUFBQTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUl4QixJQUFBUSxNQUFBLEdBQUFDLHVCQUFBLENBQUF4RSxtQkFBQTtBQUNBLElBQUF5RSxhQUFBLEdBQUF6RSxtQkFBQTtBQUE0RyxTQUFBMEUseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQTFCLEtBQUEsQ0FBQVMsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF3QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBYixJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRSxPQUFBLGlDQUFBeEIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFYNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFhcUIyQixVQUFVLEdBQUF2RyxrQkFBQSwwQkFBQXdHLFVBQUE7RUFDN0IsU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUF6RyxnQkFBQSxtQkFBQXNHLFVBQUE7SUFDakJHLEtBQUEsR0FBQWQsVUFBQSxPQUFBVyxVQUFBLEdBQU1FLEtBQUs7SUFFWEMsS0FBQSxDQUFLQyxpQkFBaUIsR0FBR0QsS0FBQSxDQUFLQyxpQkFBaUIsQ0FBQ0MsSUFBSSxDQUFBRixLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQzdEO0VBQUMsSUFBQUcsVUFBQSxhQUFBTixVQUFBLEVBQUFDLFVBQUE7RUFBQSxXQUFBdEcsYUFBQSxhQUFBcUcsVUFBQTtJQUFBcEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBHLE1BQU1BLENBQUEsRUFBRztNQUFBLElBQUFDLE1BQUE7TUFDUCxJQUFJLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLENBQUNDLGdCQUFnQixFQUFFO1FBQ3RDLG9CQUNFNUMsTUFBQSxZQUFBNkMsYUFBQTtVQUFHQyxTQUFTLEVBQUUsSUFBSSxDQUFDVixLQUFLLENBQUNPLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLGtCQUFtQjtVQUM1REMsSUFBSSxFQUFFLEdBQUk7VUFBQ0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdDLEtBQUssRUFBSztZQUM3QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUN0QlIsTUFBSSxDQUFDSixpQkFBaUIsQ0FBQyxDQUFDO1VBQzFCO1FBQUUsR0FBRSxJQUFJLENBQUNGLEtBQUssQ0FBQ08sTUFBTSxDQUFDUSxPQUFXLENBQUM7TUFFekMsQ0FBQyxNQUFNO1FBQ0wsb0JBQ0VuRCxNQUFBLFlBQUE2QyxhQUFBO1VBQUdDLFNBQVMsRUFBRSxJQUFJLENBQUNWLEtBQUssQ0FBQ08sTUFBTSxDQUFDRyxTQUFTLEdBQUcsa0JBQW1CO1VBQzVEQyxJQUFJLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNPLE1BQU0sQ0FBQ0k7UUFBSyxHQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDTyxNQUFNLENBQUNRLE9BQVcsQ0FBQztNQUVwRTtJQUNGO0VBQUM7SUFBQXJILEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1RyxpQkFBaUJBLENBQUEsRUFBRztNQUFBLElBQUFjLE1BQUE7TUFDbEIsSUFBTUMsRUFBRSxHQUFHLElBQUkzSCwwQkFBWSxDQUFDLENBQUM7TUFFN0IsSUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO1FBQzVCMkcsTUFBTSxDQUFDQyxRQUFRLEdBQUdILE1BQUksQ0FBQ2hCLEtBQUssQ0FBQ08sTUFBTSxDQUFDSSxJQUFJO01BQzFDLENBQUM7TUFFRCxJQUFNN0YsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVMsQ0FFN0IsQ0FBQztNQUVEbUcsRUFBRSxDQUFDcEcsaUJBQWlCLENBQ2xCLElBQUksQ0FBQ21GLEtBQUssQ0FBQ08sTUFBTSxDQUFDYSxnQkFBZ0IsRUFDbEMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDTyxNQUFNLENBQUNjLGVBQWUsRUFDakM5RyxlQUFlLEVBQ2ZPLGNBQWMsRUFDZCxJQUFJLENBQUNrRixLQUFLLENBQUNPLE1BQU0sQ0FBQ2UsZUFBZSxFQUNqQyxJQUFJLENBQUN0QixLQUFLLENBQUNPLE1BQU0sQ0FBQ2dCLGNBQ3BCLENBQUM7SUFDSDtFQUFDO0FBQUEsRUEzQ3FDQyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9Db3JlQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL3ZlbmRvci9qcy9BbGVydEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9idXR0b24vTGlua0J1dHRvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI1LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8qKlxuICogVGhlIFwiY3NzQ2xhc3NcIiBwYXJhbWV0ZXIgaW4gdGhlIGZ1bmN0aW9ucyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdC4gSWYgaXQncyBhIHN0cmluZywgaXQgd2lsbCBiZSBhcHBsaWVkXG4gKiBhcyBjbGFzcyBmb3IgdGhlIHBvcHVwLiBJZiBhbiBvYmplY3QgaXMgcGFzc2VkLCB0aGUgY2xhc3NlcyBjYW4gYmUgc2V0IG1vcmUgcHJlY2lzZS4gVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZVxuICogcG9zc2libGUgaW4gdGhlIG9iamVjdDpcbiAqIGNzc0NsYXNzOiB7XG4gKiAgIGNvbnRhaW5lcjogJ2NvbnRhaW5lci1jbGFzcycsXG4gKiAgIHBvcHVwOiAncG9wdXAtY2xhc3MnLFxuICogICBoZWFkZXI6ICdoZWFkZXItY2xhc3MnLFxuICogICB0aXRsZTogJ3RpdGxlLWNsYXNzJyxcbiAqICAgY2xvc2VCdXR0b246ICdjbG9zZS1idXR0b24tY2xhc3MnLFxuICogICBpY29uOiAnaWNvbi1jbGFzcycsXG4gKiAgIGltYWdlOiAnaW1hZ2UtY2xhc3MnLFxuICogICBjb250ZW50OiAnY29udGVudC1jbGFzcycsXG4gKiAgIGlucHV0OiAnaW5wdXQtY2xhc3MnLFxuICogICBhY3Rpb25zOiAnYWN0aW9ucy1jbGFzcycsXG4gKiAgIGNvbmZpcm1CdXR0b246ICdjb25maXJtLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGNhbmNlbEJ1dHRvbjogJ2NhbmNlbC1idXR0b24tY2xhc3MnLFxuICogICBmb290ZXI6ICdmb290ZXItY2xhc3MnXG4gKiB9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbGVydEhhbmRsZXIge1xuXG4gIHNob3dFcnJvckRpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dJbmZvRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7O1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2cyKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9fSk7XG4gIH1cblxuXG4gIHNob3dDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHNob3dDb25maXJtRGlhbG9nSFRNTCh0aXRsZSwgaHRtbCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGh0bWw6IGh0bWwsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmVDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcywgc2hvd0xvYWRpbmcpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiBzaG93TG9hZGluZyA/IHNob3dMb2FkaW5nIDogdHJ1ZSxcbiAgICAgIHByZUNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiAoKSA9PiAhU3dhbC5pc0xvYWRpbmcoKSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dMb2FkaW5nRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICAgIGFsbG93RXNjYXBlS2V5OiBmYWxzZSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgU3dhbC5jbGlja0NvbmZpcm0oKTtcbiAgICAgIH0sXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93U2VsZWN0RGlhbG9nKHRpdGxlLCBvYmpPcHRpb25zLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBjb25zdCB7dmFsdWU6IHNlbGVjdGVkVmFsdWV9ID0gYXdhaXQgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGlucHV0OiAnc2VsZWN0JyxcbiAgICAgIGlucHV0T3B0aW9uczogb2JqT3B0aW9ucyxcbiAgICAgIGlucHV0UGxhY2Vob2xkZXI6ICctJyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pXG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QWxlcnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQ29yZUJ1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy92ZW5kb3IvanMvQWxlcnRIYW5kbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2hvd1dhcm5pbmdEaWFsb2cgPSB0aGlzLnNob3dXYXJuaW5nRGlhbG9nLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYnV0dG9uLndhcm5CZWZvcmVBY3Rpb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24uY2xhc3NOYW1lICsgXCIgYnRuIGJ0bi1wcmltYXJ5XCJ9XG4gICAgICAgICAgIGhyZWY9e1wiI1wifSBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIHRoaXMuc2hvd1dhcm5pbmdEaWFsb2coKTtcbiAgICAgICAgICAgfX0+e3RoaXMucHJvcHMuYnV0dG9uLmNhcHRpb259PC9hPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJ1dHRvbi5jbGFzc05hbWUgKyBcIiBidG4gYnRuLXByaW1hcnlcIn1cbiAgICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy5idXR0b24uaHJlZn0+e3RoaXMucHJvcHMuYnV0dG9uLmNhcHRpb259PC9hPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzaG93V2FybmluZ0RpYWxvZygpIHtcbiAgICBjb25zdCBhaCA9IG5ldyBBbGVydEhhbmRsZXIoKTtcblxuICAgIGNvbnN0IGNvbmZpcm1DYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucHJvcHMuYnV0dG9uLmhyZWY7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbmNlbENhbGxiYWNrID0gKCkgPT4ge1xuXG4gICAgfTtcblxuICAgIGFoLnNob3dDb25maXJtRGlhbG9nKFxuICAgICAgdGhpcy5wcm9wcy5idXR0b24ud2FyblRleHRIZWFkbGluZSxcbiAgICAgIHRoaXMucHJvcHMuYnV0dG9uLndhcm5UZXh0TWVzc2FnZSxcbiAgICAgIGNvbmZpcm1DYWxsYmFjayxcbiAgICAgIGNhbmNlbENhbGxiYWNrLFxuICAgICAgdGhpcy5wcm9wcy5idXR0b24ud2FyblRleHRDb25maXJtLFxuICAgICAgdGhpcy5wcm9wcy5idXR0b24ud2FyblRleHRDYW5jZWwsXG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9zd2VldGFsZXJ0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJBbGVydEhhbmRsZXIiLCJleHBvcnRzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInNob3dFcnJvckRpYWxvZyIsInRpdGxlIiwiY29udGVudCIsImNzc0NsYXNzIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImN1c3RvbUNsYXNzIiwic2hvd0luZm9EaWFsb2ciLCJzaG93SW5mb0FjdGlvbkRpYWxvZyIsImNvbmZpcm1DYWxsYmFjayIsInRoZW4iLCJzaG93SW5mb0FjdGlvbkRpYWxvZzIiLCJzaG93TG9hZGVyT25Db25maXJtIiwicHJlQ29uZmlybSIsImRhdGEiLCJzaG93Q29uZmlybURpYWxvZyIsImNhbmNlbENhbGxiYWNrIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsIndpbGxEZWxldGUiLCJzaG93Q29uZmlybURpYWxvZ0hUTUwiLCJodG1sIiwic2hvd1ByZUNvbmZpcm1EaWFsb2ciLCJwcmVDb25maXJtQ2FsbGJhY2siLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJhbGxvd091dHNpZGVDbGljayIsImlzTG9hZGluZyIsInNob3dMb2FkaW5nRGlhbG9nIiwiYWxsb3dFc2NhcGVLZXkiLCJvbkJlZm9yZU9wZW4iLCJjbGlja0NvbmZpcm0iLCJfc2hvd1NlbGVjdERpYWxvZyIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwib2JqT3B0aW9ucyIsIl95aWVsZCRTd2FsJGZpcmUiLCJzZWxlY3RlZFZhbHVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImlucHV0IiwiaW5wdXRPcHRpb25zIiwiaW5wdXRQbGFjZWhvbGRlciIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwic2hvd1NlbGVjdERpYWxvZyIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiX3g1IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9BbGVydEhhbmRsZXIiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJMaW5rQnV0dG9uIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJzaG93V2FybmluZ0RpYWxvZyIsImJpbmQiLCJfaW5oZXJpdHMyIiwicmVuZGVyIiwiX3RoaXMyIiwiYnV0dG9uIiwid2FybkJlZm9yZUFjdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXB0aW9uIiwiX3RoaXMzIiwiYWgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIndhcm5UZXh0SGVhZGxpbmUiLCJ3YXJuVGV4dE1lc3NhZ2UiLCJ3YXJuVGV4dENvbmZpcm0iLCJ3YXJuVGV4dENhbmNlbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=