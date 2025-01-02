"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_AsynchronousSubmitButton_jsx"],{

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

/***/ "./src/Resources/public/js/form/button/AsynchronousSubmitButton.jsx":
/*!**************************************************************************!*\
  !*** ./src/Resources/public/js/form/button/AsynchronousSubmitButton.jsx ***!
  \**************************************************************************/
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
var AsynchronousSubmitButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function AsynchronousSubmitButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AsynchronousSubmitButton);
    _this = _callSuper(this, AsynchronousSubmitButton, [props]);
    _this.clickButton = _this.clickButton.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(AsynchronousSubmitButton, _Component);
  return (0, _createClass2["default"])(AsynchronousSubmitButton, [{
    key: "clickButton",
    value: function clickButton() {
      this.props.form.activeButton = this;
    }
  }, {
    key: "submitCallback",
    value: function submitCallback(form, event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.form.activeButton = null;
      var data = {};
      var elements = event.target.elements;
      var index = 0;
      while (index < elements.length) {
        var element = elements.item(index);
        if (element.name) {
          data[element.name] = element.value || null;
        }
        index += 1;
      }
      jQuery.post(this.props.button.url, data).done(function (data) {
        if (data.error) {
          var ah = new _AlertHandler.AlertHandler();
          ah.showErrorDialog(data.error.title, data.error.message, '');
        } else if (data.actionRefresh) {
          var _ah = new _AlertHandler.AlertHandler();
          _ah.showInfoActionDialog(data.actionRefresh.title, data.actionRefresh.message, function () {
            window.location.reload();
          }, '');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("button", {
        className: this.props.button.className + " btn btn-primary",
        type: "submit",
        name: this.props.button.name,
        value: this.props.button.value,
        onClick: this.clickButton
      }, this.props.button.caption);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fQXN5bmNocm9ub3VzU3VibWl0QnV0dG9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxXQUFBLEdBQUFDLHNCQUFBLENBQUFDLG1CQUFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQSxJQW9CYUMsWUFBWSxHQUFBQyxvQkFBQTtFQUFBLFNBQUFELGFBQUE7SUFBQSxJQUFBRSxnQkFBQSxtQkFBQUYsWUFBQTtFQUFBO0VBQUEsV0FBQUcsYUFBQSxhQUFBSCxZQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUV2QixTQUFBQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hDQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsT0FBTztRQUNiQyxXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVUsY0FBY0EsQ0FBQ1IsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN2Q0Msc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ1JKLEtBQUssRUFBRUEsS0FBSztRQUNaSyxJQUFJLEVBQUVKLE9BQU87UUFDYkssSUFBSSxFQUFFLE1BQU07UUFDWkMsV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUM7TUFBQztJQUNMO0VBQUM7SUFB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LENBQUNxRyxLQUFLLENBQUNvQixNQUFNLENBQUN6SCxLQUFNO1FBQy9CdUksT0FBTyxFQUFFLElBQUksQ0FBQ2hDO01BQVksR0FDL0IsSUFBSSxDQUFDRixLQUFLLENBQUNvQixNQUFNLENBQUNlLE9BQ2IsQ0FBQztJQUViO0VBQUM7QUFBQSxFQXhEbURDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2J1dHRvbi9Bc3luY2hyb25vdXNTdWJtaXRCdXR0b24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vKipcbiAqIFRoZSBcImNzc0NsYXNzXCIgcGFyYW1ldGVyIGluIHRoZSBmdW5jdGlvbnMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QuIElmIGl0J3MgYSBzdHJpbmcsIGl0IHdpbGwgYmUgYXBwbGllZFxuICogYXMgY2xhc3MgZm9yIHRoZSBwb3B1cC4gSWYgYW4gb2JqZWN0IGlzIHBhc3NlZCwgdGhlIGNsYXNzZXMgY2FuIGJlIHNldCBtb3JlIHByZWNpc2UuIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmVcbiAqIHBvc3NpYmxlIGluIHRoZSBvYmplY3Q6XG4gKiBjc3NDbGFzczoge1xuICogICBjb250YWluZXI6ICdjb250YWluZXItY2xhc3MnLFxuICogICBwb3B1cDogJ3BvcHVwLWNsYXNzJyxcbiAqICAgaGVhZGVyOiAnaGVhZGVyLWNsYXNzJyxcbiAqICAgdGl0bGU6ICd0aXRsZS1jbGFzcycsXG4gKiAgIGNsb3NlQnV0dG9uOiAnY2xvc2UtYnV0dG9uLWNsYXNzJyxcbiAqICAgaWNvbjogJ2ljb24tY2xhc3MnLFxuICogICBpbWFnZTogJ2ltYWdlLWNsYXNzJyxcbiAqICAgY29udGVudDogJ2NvbnRlbnQtY2xhc3MnLFxuICogICBpbnB1dDogJ2lucHV0LWNsYXNzJyxcbiAqICAgYWN0aW9uczogJ2FjdGlvbnMtY2xhc3MnLFxuICogICBjb25maXJtQnV0dG9uOiAnY29uZmlybS1idXR0b24tY2xhc3MnLFxuICogICBjYW5jZWxCdXR0b246ICdjYW5jZWwtYnV0dG9uLWNsYXNzJyxcbiAqICAgZm9vdGVyOiAnZm9vdGVyLWNsYXNzJ1xuICogfVxuICovXG5leHBvcnQgY2xhc3MgQWxlcnRIYW5kbGVyIHtcblxuICBzaG93RXJyb3JEaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93SW5mb0RpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pOztcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nMih0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfX0pO1xuICB9XG5cblxuICBzaG93Q29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzaG93Q29uZmlybURpYWxvZ0hUTUwodGl0bGUsIGh0bWwsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBodG1sOiBodG1sLFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93UHJlQ29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MsIHNob3dMb2FkaW5nKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogc2hvd0xvYWRpbmcgPyBzaG93TG9hZGluZyA6IHRydWUsXG4gICAgICBwcmVDb25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBwcmVDb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhbGxvd091dHNpZGVDbGljazogKCkgPT4gIVN3YWwuaXNMb2FkaW5nKCksXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZ0RpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICBhbGxvd0VzY2FwZUtleTogZmFsc2UsXG4gICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgIFN3YWwuY2xpY2tDb25maXJtKCk7XG4gICAgICB9LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2hvd1NlbGVjdERpYWxvZyh0aXRsZSwgb2JqT3B0aW9ucywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgY29uc3Qge3ZhbHVlOiBzZWxlY3RlZFZhbHVlfSA9IGF3YWl0IFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbnB1dDogJ3NlbGVjdCcsXG4gICAgICBpbnB1dE9wdGlvbnM6IG9iak9wdGlvbnMsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnLScsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY2hyb25vdXNTdWJtaXRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2xpY2tCdXR0b24gPSB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRDYWxsYmFjayA9IHRoaXMuc3VibWl0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsaWNrQnV0dG9uKCkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSB0aGlzO1xuICB9XG5cbiAgc3VibWl0Q2FsbGJhY2soZm9ybSwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSBudWxsO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHMuaXRlbShpbmRleCk7XG4gICAgICBpZiAoZWxlbWVudC5uYW1lKSB7XG4gICAgICAgIGRhdGFbZWxlbWVudC5uYW1lXSA9IGVsZW1lbnQudmFsdWUgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxuXG4gICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy5idXR0b24udXJsLCBkYXRhKS5kb25lKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICBsZXQgYWggPSBuZXcgQWxlcnRIYW5kbGVyKCk7XG4gICAgICAgIGFoLnNob3dFcnJvckRpYWxvZyhkYXRhLmVycm9yLnRpdGxlLCBkYXRhLmVycm9yLm1lc3NhZ2UsICcnKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5hY3Rpb25SZWZyZXNoKSB7XG4gICAgICAgIGxldCBhaCA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgICAgYWguc2hvd0luZm9BY3Rpb25EaWFsb2coXG4gICAgICAgICAgZGF0YS5hY3Rpb25SZWZyZXNoLnRpdGxlLFxuICAgICAgICAgIGRhdGEuYWN0aW9uUmVmcmVzaC5tZXNzYWdlLFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYnV0dG9uLmNsYXNzTmFtZSArIFwiIGJ0biBidG4tcHJpbWFyeVwifVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5idXR0b24ubmFtZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYnV0dG9uLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsaWNrQnV0dG9ufT5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9uLmNhcHRpb259XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3N3ZWV0YWxlcnQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIkFsZXJ0SGFuZGxlciIsImV4cG9ydHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwic2hvd0Vycm9yRGlhbG9nIiwidGl0bGUiLCJjb250ZW50IiwiY3NzQ2xhc3MiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiY3VzdG9tQ2xhc3MiLCJzaG93SW5mb0RpYWxvZyIsInNob3dJbmZvQWN0aW9uRGlhbG9nIiwiY29uZmlybUNhbGxiYWNrIiwidGhlbiIsInNob3dJbmZvQWN0aW9uRGlhbG9nMiIsInNob3dMb2FkZXJPbkNvbmZpcm0iLCJwcmVDb25maXJtIiwiZGF0YSIsInNob3dDb25maXJtRGlhbG9nIiwiY2FuY2VsQ2FsbGJhY2siLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwid2lsbERlbGV0ZSIsInNob3dDb25maXJtRGlhbG9nSFRNTCIsImh0bWwiLCJzaG93UHJlQ29uZmlybURpYWxvZyIsInByZUNvbmZpcm1DYWxsYmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiaXNMb2FkaW5nIiwic2hvd0xvYWRpbmdEaWFsb2ciLCJhbGxvd0VzY2FwZUtleSIsIm9uQmVmb3JlT3BlbiIsImNsaWNrQ29uZmlybSIsIl9zaG93U2VsZWN0RGlhbG9nIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJvYmpPcHRpb25zIiwiX3lpZWxkJFN3YWwkZmlyZSIsInNlbGVjdGVkVmFsdWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiaW5wdXQiLCJpbnB1dE9wdGlvbnMiLCJpbnB1dFBsYWNlaG9sZGVyIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJzaG93U2VsZWN0RGlhbG9nIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJfeDUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX0FsZXJ0SGFuZGxlciIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkFzeW5jaHJvbm91c1N1Ym1pdEJ1dHRvbiIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiY2xpY2tCdXR0b24iLCJiaW5kIiwic3VibWl0Q2FsbGJhY2siLCJfaW5oZXJpdHMyIiwiZm9ybSIsImFjdGl2ZUJ1dHRvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbGVtZW50cyIsInRhcmdldCIsImluZGV4IiwibGVuZ3RoIiwiZWxlbWVudCIsIml0ZW0iLCJuYW1lIiwialF1ZXJ5IiwicG9zdCIsImJ1dHRvbiIsInVybCIsImRvbmUiLCJlcnJvciIsImFoIiwibWVzc2FnZSIsImFjdGlvblJlZnJlc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImNhcHRpb24iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9