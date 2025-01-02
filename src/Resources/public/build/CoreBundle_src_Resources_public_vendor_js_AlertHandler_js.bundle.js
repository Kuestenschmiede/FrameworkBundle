"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["CoreBundle_src_Resources_public_vendor_js_AlertHandler_js"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZUJ1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY192ZW5kb3JfanNfQWxlcnRIYW5kbGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLFdBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsbUJBQUE7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBLElBb0JhQyxZQUFZLEdBQUFDLG9CQUFBO0VBQUEsU0FBQUQsYUFBQTtJQUFBLElBQUFFLGdCQUFBLG1CQUFBRixZQUFBO0VBQUE7RUFBQSxXQUFBRyxhQUFBLGFBQUFILFlBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBRXZCLFNBQUFDLGVBQWVBLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7TUFDeENDLHNCQUFJLENBQUNDLElBQUksQ0FBQztRQUNSSixLQUFLLEVBQUVBLEtBQUs7UUFDWkssSUFBSSxFQUFFSixPQUFPO1FBQ2JLLElBQUksRUFBRSxPQUFPO1FBQ2JDLFdBQVcsRUFBRUwsUUFBUSxHQUFHQSxRQUFRLEdBQUc7TUFDckMsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBTCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVSxjQUFjQSxDQUFDUixLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3ZDQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQztNQUFDO0lBQ0w7RUFBQztJQUFBTCxHQUFB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QSxPQUFBZ0QsUUFBQSxDQUFBTyxNQUFBLFdBVUxWLGFBQWE7WUFBQTtZQUFBO2NBQUEsT0FBQUcsUUFBQSxDQUFBUSxJQUFBO1VBQUE7UUFBQSxHQUFBZCxPQUFBO01BQUEsQ0FDckI7TUFBQSxTQVpLZSxnQkFBZ0JBLENBQUFDLEVBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQTtRQUFBLE9BQUF4QixpQkFBQSxDQUFBeUIsS0FBQSxPQUFBQyxTQUFBO01BQUE7TUFBQSxPQUFoQlAsZ0JBQWdCO0lBQUE7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjUsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLyoqXG4gKiBUaGUgXCJjc3NDbGFzc1wiIHBhcmFtZXRlciBpbiB0aGUgZnVuY3Rpb25zIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LiBJZiBpdCdzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGFwcGxpZWRcbiAqIGFzIGNsYXNzIGZvciB0aGUgcG9wdXAuIElmIGFuIG9iamVjdCBpcyBwYXNzZWQsIHRoZSBjbGFzc2VzIGNhbiBiZSBzZXQgbW9yZSBwcmVjaXNlLiBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlXG4gKiBwb3NzaWJsZSBpbiB0aGUgb2JqZWN0OlxuICogY3NzQ2xhc3M6IHtcbiAqICAgY29udGFpbmVyOiAnY29udGFpbmVyLWNsYXNzJyxcbiAqICAgcG9wdXA6ICdwb3B1cC1jbGFzcycsXG4gKiAgIGhlYWRlcjogJ2hlYWRlci1jbGFzcycsXG4gKiAgIHRpdGxlOiAndGl0bGUtY2xhc3MnLFxuICogICBjbG9zZUJ1dHRvbjogJ2Nsb3NlLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGljb246ICdpY29uLWNsYXNzJyxcbiAqICAgaW1hZ2U6ICdpbWFnZS1jbGFzcycsXG4gKiAgIGNvbnRlbnQ6ICdjb250ZW50LWNsYXNzJyxcbiAqICAgaW5wdXQ6ICdpbnB1dC1jbGFzcycsXG4gKiAgIGFjdGlvbnM6ICdhY3Rpb25zLWNsYXNzJyxcbiAqICAgY29uZmlybUJ1dHRvbjogJ2NvbmZpcm0tYnV0dG9uLWNsYXNzJyxcbiAqICAgY2FuY2VsQnV0dG9uOiAnY2FuY2VsLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGZvb3RlcjogJ2Zvb3Rlci1jbGFzcydcbiAqIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFsZXJ0SGFuZGxlciB7XG5cbiAgc2hvd0Vycm9yRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0luZm9EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTs7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZyh0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZzIodGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH19KTtcbiAgfVxuXG5cbiAgc2hvd0NvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0NvbmZpcm1EaWFsb2dIVE1MKHRpdGxlLCBodG1sLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZUNvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzLCBzaG93TG9hZGluZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHNob3dMb2FkaW5nID8gc2hvd0xvYWRpbmcgOiB0cnVlLFxuICAgICAgcHJlQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6ICgpID0+ICFTd2FsLmlzTG9hZGluZygpLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xvYWRpbmdEaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgYWxsb3dFc2NhcGVLZXk6IGZhbHNlLFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICBTd2FsLmNsaWNrQ29uZmlybSgpO1xuICAgICAgfSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBwcmVDb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dTZWxlY3REaWFsb2codGl0bGUsIG9iak9wdGlvbnMsIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIGNvbnN0IHt2YWx1ZTogc2VsZWN0ZWRWYWx1ZX0gPSBhd2FpdCBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW5wdXQ6ICdzZWxlY3QnLFxuICAgICAgaW5wdXRPcHRpb25zOiBvYmpPcHRpb25zLFxuICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJy0nLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9zd2VldGFsZXJ0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJBbGVydEhhbmRsZXIiLCJleHBvcnRzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInNob3dFcnJvckRpYWxvZyIsInRpdGxlIiwiY29udGVudCIsImNzc0NsYXNzIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImN1c3RvbUNsYXNzIiwic2hvd0luZm9EaWFsb2ciLCJzaG93SW5mb0FjdGlvbkRpYWxvZyIsImNvbmZpcm1DYWxsYmFjayIsInRoZW4iLCJzaG93SW5mb0FjdGlvbkRpYWxvZzIiLCJzaG93TG9hZGVyT25Db25maXJtIiwicHJlQ29uZmlybSIsImRhdGEiLCJzaG93Q29uZmlybURpYWxvZyIsImNhbmNlbENhbGxiYWNrIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsIndpbGxEZWxldGUiLCJzaG93Q29uZmlybURpYWxvZ0hUTUwiLCJodG1sIiwic2hvd1ByZUNvbmZpcm1EaWFsb2ciLCJwcmVDb25maXJtQ2FsbGJhY2siLCJzaG93TG9hZGluZyIsIlByb21pc2UiLCJhbGxvd091dHNpZGVDbGljayIsImlzTG9hZGluZyIsInNob3dMb2FkaW5nRGlhbG9nIiwiYWxsb3dFc2NhcGVLZXkiLCJvbkJlZm9yZU9wZW4iLCJjbGlja0NvbmZpcm0iLCJfc2hvd1NlbGVjdERpYWxvZyIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwib2JqT3B0aW9ucyIsIl95aWVsZCRTd2FsJGZpcmUiLCJzZWxlY3RlZFZhbHVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImlucHV0IiwiaW5wdXRPcHRpb25zIiwiaW5wdXRQbGFjZWhvbGRlciIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwic2hvd1NlbGVjdERpYWxvZyIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiX3g1IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9