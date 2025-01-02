"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_button_CustomSubmitButton_jsx"],{

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

/***/ "./src/Resources/public/js/form/button/CustomSubmitButton.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/form/button/CustomSubmitButton.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../util/conditions */ "./src/Resources/public/js/util/conditions.js"));
var _AlertHandler = __webpack_require__(/*! ../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var CustomSubmitButton = exports["default"] = /*#__PURE__*/function (_Component) {
  function CustomSubmitButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CustomSubmitButton);
    _this = _callSuper(this, CustomSubmitButton, [props]);
    _this.clickButton = _this.clickButton.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    _this.state = {
      active: true
    };
    return _this;
  }
  (0, _inherits2["default"])(CustomSubmitButton, _Component);
  return (0, _createClass2["default"])(CustomSubmitButton, [{
    key: "clickButton",
    value: function clickButton(event) {
      var _this2 = this;
      this.setState({
        active: false
      }, function () {
        if (_this2.props.form.props.component.renderAsForm) {
          _this2.props.form.activeButton = _this2;
        } else {
          _this2.submitCallback(_this2.props.form, event);
        }
      });
    }
  }, {
    key: "submitCallback",
    value: function submitCallback(form, event) {
      event.preventDefault();
      event.stopPropagation();
      var data = this.props.form.props.component.data;
      if (this.geopickerFieldExists()) {
        data = this.setGeoData(data);
      }
      if (data) {
        if (this.validateData(data)) {
          this.submitData(data);
        }
      }
    }
  }, {
    key: "submitData",
    value: function submitData(requestData) {
      var _this3 = this;
      this.props.form.setLoading(true);
      jQuery.post(this.props.button.url, requestData).done(function (data) {
        _this3.props.form.setLoading(false);
        if (_this3.props.button.redirectUrl) {
          if (data.success) {
            // catch newly created dataset
            var redirectUrl = _this3.props.button.redirectUrl;
            if (_this3.props.button.redirectUrl.endsWith("/")) {
              if (data.alias) {
                redirectUrl += data.alias;
              }
            }
            _this3.props.form.storePosition();
            window.location = redirectUrl;
          } else {
            _this3.props.form.setErrorTexts(data.fields);
            // call hook function for failed submit
            _this3.callSubmitFailed(requestData, data.fields);
          }
        }
        _this3.setState({
          active: true
        });
      });
    }
  }, {
    key: "setGeoData",
    value: function setGeoData(data) {
      var mapController = this.props.form.mapControllerRef;
      var geopicker = mapController.mapsControls.controls.geopicker;
      var editor = mapController.mapsControls.controls.editor;
      if (geopicker && geopicker.$fieldGeoX && geopicker.$fieldGeoY) {
        var geox = geopicker.$fieldGeoX.val();
        var geoy = geopicker.$fieldGeoY.val();
        data.geox = geox;
        data.geoy = geoy;
        if (!data.geox && !data.geoy && data.locationCity && data.locationStreet) {
          this.addPosition(data, mapController);
          return false;
        } else if (data.geox && data.geoy && (!data.locationCity || !data.locationStreet || !data.locationStreetNumber)) {
          this.addAddress(data, mapController);
          return false;
        }
      } else if (editor && mapController.data.editor && mapController.data.editor.inputField) {
        var geojson = $(mapController.data.editor.inputField).val();
        data.geojson = geojson;
      }
      return data;
    }
  }, {
    key: "validateData",
    value: function validateData(data) {
      var _this4 = this;
      if (data.published) {
        var fields = this.props.form.props.component.fields;
        var _loop = function _loop() {
            if (fields.hasOwnProperty(fieldId)) {
              var field = fields[fieldId];
              if (field.name) {
                var fieldNode = $("#" + field.name);
                if (field.required && fieldNode.length && (0, _conditions["default"])(field, data, _this4.props.form.props.component.fields)) {
                  var invalid = false;
                  if (field.type === "number") {
                    if (data[field.name] === null || typeof data[field.name] === "undefined" || data[field.name] === "") {
                      invalid = true;
                    }
                  } else if (field.type === "select") {
                    if (!data[field.name] || typeof data[field.name] === 'string' && !data[field.name] || typeof data[field.name].forEach === 'function' && data[field.name].length === 0 || (0, _typeof2["default"])(data[field.name]) === 'object' && typeof data[field.name].forEach !== 'function' && !data[field.name].value) {
                      //console.log(typeof data[field.name] === 'string' && !data[field.name]);
                      //console.log(typeof data[field.name].forEach === 'function' && data[field.name].length === 0);
                      //console.log(typeof data[field.name] === 'object' && typeof data[field.name].forEach !== 'function' && !data[field.name].value);
                      //console.log(data[field.name]);
                      invalid = true;
                    }
                  } else {
                    if (!data[field.name]) {
                      invalid = true;
                    }
                  }
                  if (invalid) {
                    if (field.type === "select") {
                      fieldNode = fieldNode.children()[1];
                      fieldNode.style.borderColor = '#dc3545';
                      fieldNode.style.boxShadow = 'none';
                      fieldNode.parentNode.nextSibling.addEventListener('select', function () {
                        fieldNode.style.removeProperty('borderColor');
                        fieldNode.style.removeProperty('boxShadow');
                      });
                    } else {
                      fieldNode = fieldNode[0];
                      $(fieldNode).keyup(function () {
                        $(this).removeClass("is-invalid");
                        $(this).off("keyup");
                      });
                      fieldNode.classList.add("is-invalid");
                      if (!fieldNode.classList.contains('form-control')) {
                        fieldNode.classList.add('form-control');
                      }
                    }
                    fieldNode.focus();
                    fieldNode.scrollIntoView({
                      behavior: 'smooth'
                    });
                    _this4.callSubmitFailed(data, [field]);
                    return {
                      v: false
                    };
                  } else {
                    if (field.type === "select") {
                      fieldNode = fieldNode.children()[1];
                      fieldNode.style.removeProperty('borderColor');
                      fieldNode.style.removeProperty('boxShadow');
                    }
                  }
                }
              }
            }
          },
          _ret;
        for (var fieldId in fields) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
        if (!this.checkZipcode(data)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "callSubmitFailed",
    value: function callSubmitFailed(data, fields) {
      if (window.c4gHooks && window.c4gHooks.submitFailed) {
        for (var i = 0; i < window.c4gHooks.submitFailed.length; i++) {
          if (typeof window.c4gHooks.submitFailed[i] === "function") {
            window.c4gHooks.submitFailed[i](fields, data);
          }
        }
      }
      this.setState({
        active: true
      });
    }
  }, {
    key: "checkZipcode",
    value: function checkZipcode(data) {
      var _this5 = this;
      try {
        if (data.geox && data.geoy && data.locationZip) {
          var mapController = this.props.form.mapControllerRef;
          var url = mapController.data.geosearch.url + "reverse.php?key=";
          url += mapController.data.geosearch.reverseKey;
          url += "&lon=" + data.geox;
          url += "&lat=" + data.geoy;
          url += "&format=json";
          jQuery.ajax({
            dataType: "json",
            url: url
          }).done(function (response) {
            if (response && response.address && response.address.postcode) {
              if (response.address.postcode === data.locationZip) {
                _this5.submitData(data);
              } else {
                var fieldNode = $("#locationZip");
                fieldNode.focus();
                fieldNode.keyup(function () {
                  $(this).removeClass("is-invalid");
                  $(this).off("keyup");
                });
                fieldNode.addClass("is-invalid");
                var ah = new _AlertHandler.AlertHandler();
                var title = _this5.props.languageRefs.CHECK_POSITION;
                var content = _this5.props.languageRefs.POSITION_OUT_OF_RANGE;
                ah.showConfirmDialog(title, content, function () {
                  _this5.submitData(data);
                }, function () {}, _this5.props.languageRefs.POSITION_OUT_OF_RANGE_CONFIRM, _this5.props.languageRefs.POSITION_OUT_OF_RANGe_CANCEL);
              }
            } else {
              // show error hint
              _this5.submitData(data);
            }
          }).fail(function () {
            _this5.submitData(data);
          });
          return false;
        } else {
          return true;
        }
      } catch (e) {
        return true;
      }
    }
  }, {
    key: "addPosition",
    value: function addPosition(data, mapController) {
      var _this6 = this;
      // add a position when none is provided but address is
      var city = data.locationCity;
      var street = data.locationStreet;
      var streetnumber = data.locationStreetNumber;
      var url = mapController.data.geosearch.url + "search.php?format=json&limit=1";
      var key = mapController.data.geosearch.searchKey;
      url += city ? "&city=" + encodeURIComponent(city) : "";
      url += street ? "&street=" + encodeURIComponent(streetnumber + " " + street) : "";
      url += "&key=" + key;
      jQuery.ajax({
        dataType: "json",
        url: url
      }).done(function (response) {
        if (response[0] && response[0].lon && response[0].lat) {
          var result = response[0];
          var ah = new _AlertHandler.AlertHandler();
          var alertText = "<b>Breite:</b> " + result.lat + " <br><b>Länge:</b> " + result.lon;
          var alertHeadline = _this6.props.languageRefs.ADD_GEOLOCATION;
          var textConfirm = _this6.props.languageRefs.SAVE_WITH_POSITION;
          var textCancel = _this6.props.languageRefs.SAVE_WITHOUT_POSITION;
          var confirmCallback = function confirmCallback() {
            var data = _this6.props.form.props.component.data;
            data.geoy = result.lat;
            data.geox = result.lon;
            if (_this6.validateData(data)) {
              _this6.submitData(data);
            }
          };
          var cancelCallback = function cancelCallback() {
            var data = _this6.props.form.props.component.data;
            if (_this6.validateData(data)) {
              _this6.submitData(data);
            }
          };
          ah.showConfirmDialogHTML(alertHeadline, alertText, confirmCallback, cancelCallback, textConfirm, textCancel);
        } else {
          if (_this6.validateData(data)) {
            _this6.submitData(data);
          }
        }
      }).fail(function () {
        if (_this6.validateData(data)) {
          _this6.submitData(data);
        }
      });
    }
  }, {
    key: "addAddress",
    value: function addAddress(data, mapController) {
      var _this7 = this;
      //add an address when none is provided but position is
      var url = mapController.data.geosearch.url + "reverse.php?key=";
      url += mapController.data.geosearch.reverseKey;
      url += "&lon=" + data.geox;
      url += "&lat=" + data.geoy;
      url += "&format=json";
      jQuery.ajax({
        dataType: "json",
        url: url
      }).done(function (response) {
        var ah = new _AlertHandler.AlertHandler();
        var city = data.locationCity;
        var street = data.locationStreet;
        var streetnumber = data.locationStreetNumber;
        var alertText = "";
        if (!city && response.address) {
          city = response.address.city || response.address.town || response.address.village;
          alertText += "<b>Ort:</b> " + city + "<br>";
        }
        if (!street && response.address) {
          street = response.address.road || response.address.street;
          alertText += "<b>Straße:</b> " + street + "<br>";
        }
        if (!streetnumber && response.address && response.address.house_number) {
          streetnumber = response.address.house_number;
          alertText += "<b>Hausnummer:</b> " + streetnumber + "<br>";
        }
        var alertHeadline = _this7.props.languageRefs.ADD_ADDRESS;
        var textConfirm = _this7.props.languageRefs.SAVE_WITH_ADDRESS;
        var textCancel = _this7.props.languageRefs.SAVE_WITHOUT_ADDRESS;
        var confirmCallback = function confirmCallback() {
          var data = _this7.props.form.props.component.data;
          data.locationCity = city;
          data.locationStreet = street;
          data.locationStreetNumber = streetnumber;
          if (_this7.validateData(data)) {
            _this7.submitData(data);
          }
        };
        var cancelCallback = function cancelCallback() {
          var data = _this7.props.form.props.component.data;
          if (_this7.validateData(data)) {
            _this7.submitData(data);
          }
        };
        if (alertText) {
          ah.showConfirmDialogHTML(alertHeadline, alertText, confirmCallback, cancelCallback, textConfirm, textCancel);
        } else {
          if (_this7.validateData(data)) {
            _this7.submitData(data);
          }
        }
      }).fail(function () {
        if (_this7.validateData(data)) {
          _this7.submitData(data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.active) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.button.className + " btn btn-primary mr-3",
          type: "submit",
          onClick: this.clickButton
        }, this.props.button.caption);
      } else {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.button.className + " btn btn-primary mr-3",
          type: "submit",
          onClick: this.clickButton,
          disabled: true
        }, this.props.button.caption);
      }
    }
  }, {
    key: "geopickerFieldExists",
    value: function geopickerFieldExists() {
      var fields = this.props.form.props.component.fields;
      for (var i = 0; i < fields.length; i++) {
        if (fields[i].type === "geopicker") {
          return true;
        }
      }
      return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9idXR0b25fQ3VzdG9tU3VibWl0QnV0dG9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxXQUFBLEdBQUFDLHNCQUFBLENBQUFDLG1CQUFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQSxJQW9CYUMsWUFBWSxHQUFBQyxvQkFBQTtFQUFBLFNBQUFELGFBQUE7SUFBQSxJQUFBRSxnQkFBQSxtQkFBQUYsWUFBQTtFQUFBO0VBQUEsV0FBQUcsYUFBQSxhQUFBSCxZQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUV2QixTQUFBQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hDQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsT0FBTztRQUNiQyxXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVUsY0FBY0EsQ0FBQ1IsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN2Q0Msc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ1JKLEtBQUssRUFBRUEsS0FBSztRQUNaSyxJQUFJLEVBQUVKLE9BQU87UUFDYkssSUFBSSxFQUFFLE1BQU07UUFDWkMsV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUM7TUFBQztJQUNMO0VBQUM7SUFBQUwsR0FB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O01BQ0wsT0FBT3FPLGVBQWUsQ0FBQ2xGLEtBQUssRUFBRW5KLElBQUksQ0FBQztJQUNyQztFQUNGLENBQUMsTUFBTTtJQUNMLE9BQU8sSUFBSTtFQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vQ29yZUJ1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy92ZW5kb3IvanMvQWxlcnRIYW5kbGVyLmpzIiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vYnV0dG9uL0N1c3RvbVN1Ym1pdEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdXRpbC9jb25kaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vKipcbiAqIFRoZSBcImNzc0NsYXNzXCIgcGFyYW1ldGVyIGluIHRoZSBmdW5jdGlvbnMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QuIElmIGl0J3MgYSBzdHJpbmcsIGl0IHdpbGwgYmUgYXBwbGllZFxuICogYXMgY2xhc3MgZm9yIHRoZSBwb3B1cC4gSWYgYW4gb2JqZWN0IGlzIHBhc3NlZCwgdGhlIGNsYXNzZXMgY2FuIGJlIHNldCBtb3JlIHByZWNpc2UuIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmVcbiAqIHBvc3NpYmxlIGluIHRoZSBvYmplY3Q6XG4gKiBjc3NDbGFzczoge1xuICogICBjb250YWluZXI6ICdjb250YWluZXItY2xhc3MnLFxuICogICBwb3B1cDogJ3BvcHVwLWNsYXNzJyxcbiAqICAgaGVhZGVyOiAnaGVhZGVyLWNsYXNzJyxcbiAqICAgdGl0bGU6ICd0aXRsZS1jbGFzcycsXG4gKiAgIGNsb3NlQnV0dG9uOiAnY2xvc2UtYnV0dG9uLWNsYXNzJyxcbiAqICAgaWNvbjogJ2ljb24tY2xhc3MnLFxuICogICBpbWFnZTogJ2ltYWdlLWNsYXNzJyxcbiAqICAgY29udGVudDogJ2NvbnRlbnQtY2xhc3MnLFxuICogICBpbnB1dDogJ2lucHV0LWNsYXNzJyxcbiAqICAgYWN0aW9uczogJ2FjdGlvbnMtY2xhc3MnLFxuICogICBjb25maXJtQnV0dG9uOiAnY29uZmlybS1idXR0b24tY2xhc3MnLFxuICogICBjYW5jZWxCdXR0b246ICdjYW5jZWwtYnV0dG9uLWNsYXNzJyxcbiAqICAgZm9vdGVyOiAnZm9vdGVyLWNsYXNzJ1xuICogfVxuICovXG5leHBvcnQgY2xhc3MgQWxlcnRIYW5kbGVyIHtcblxuICBzaG93RXJyb3JEaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93SW5mb0RpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pOztcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nMih0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfX0pO1xuICB9XG5cblxuICBzaG93Q29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzaG93Q29uZmlybURpYWxvZ0hUTUwodGl0bGUsIGh0bWwsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBodG1sOiBodG1sLFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93UHJlQ29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MsIHNob3dMb2FkaW5nKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogc2hvd0xvYWRpbmcgPyBzaG93TG9hZGluZyA6IHRydWUsXG4gICAgICBwcmVDb25maXJtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBwcmVDb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhbGxvd091dHNpZGVDbGljazogKCkgPT4gIVN3YWwuaXNMb2FkaW5nKCksXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZ0RpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICBhbGxvd0VzY2FwZUtleTogZmFsc2UsXG4gICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgIFN3YWwuY2xpY2tDb25maXJtKCk7XG4gICAgICB9LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2hvd1NlbGVjdERpYWxvZyh0aXRsZSwgb2JqT3B0aW9ucywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgY29uc3Qge3ZhbHVlOiBzZWxlY3RlZFZhbHVlfSA9IGF3YWl0IFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbnB1dDogJ3NlbGVjdCcsXG4gICAgICBpbnB1dE9wdGlvbnM6IG9iak9wdGlvbnMsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnLScsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KVxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaGFzQ29uZGl0aW9ucyBmcm9tIFwiLi4vLi4vdXRpbC9jb25kaXRpb25zXCI7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21TdWJtaXRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2xpY2tCdXR0b24gPSB0aGlzLmNsaWNrQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRDYWxsYmFjayA9IHRoaXMuc3VibWl0Q2FsbGJhY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgY2xpY2tCdXR0b24oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IGZhbHNlfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQucmVuZGVyQXNGb3JtKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybS5hY3RpdmVCdXR0b24gPSB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdWJtaXRDYWxsYmFjayh0aGlzLnByb3BzLmZvcm0sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdENhbGxiYWNrKGZvcm0sIGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YTtcbiAgICBpZiAodGhpcy5nZW9waWNrZXJGaWVsZEV4aXN0cygpKSB7XG4gICAgICBkYXRhID0gdGhpcy5zZXRHZW9EYXRhKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpKSB7XG4gICAgICAgIHRoaXMuc3VibWl0RGF0YShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3VibWl0RGF0YShyZXF1ZXN0RGF0YSkge1xuICAgIHRoaXMucHJvcHMuZm9ybS5zZXRMb2FkaW5nKHRydWUpO1xuICAgIGpRdWVyeS5wb3N0KHRoaXMucHJvcHMuYnV0dG9uLnVybCwgcmVxdWVzdERhdGEpLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybS5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmJ1dHRvbi5yZWRpcmVjdFVybCkge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY2F0Y2ggbmV3bHkgY3JlYXRlZCBkYXRhc2V0XG4gICAgICAgICAgbGV0IHJlZGlyZWN0VXJsID0gdGhpcy5wcm9wcy5idXR0b24ucmVkaXJlY3RVcmw7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnV0dG9uLnJlZGlyZWN0VXJsLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuYWxpYXMpIHtcbiAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgKz0gZGF0YS5hbGlhcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnN0b3JlUG9zaXRpb24oKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByZWRpcmVjdFVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm0uc2V0RXJyb3JUZXh0cyhkYXRhLmZpZWxkcyk7XG4gICAgICAgICAgLy8gY2FsbCBob29rIGZ1bmN0aW9uIGZvciBmYWlsZWQgc3VibWl0XG4gICAgICAgICAgdGhpcy5jYWxsU3VibWl0RmFpbGVkKHJlcXVlc3REYXRhLCBkYXRhLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogdHJ1ZX0pO1xuICAgIH0pO1xuXG4gIH1cbiAgc2V0R2VvRGF0YShkYXRhKSB7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLmZvcm0ubWFwQ29udHJvbGxlclJlZjtcbiAgICBsZXQgZ2VvcGlja2VyID0gbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZ2VvcGlja2VyO1xuICAgIGxldCBlZGl0b3IgPSBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5lZGl0b3I7XG4gICAgaWYgKGdlb3BpY2tlciAmJiBnZW9waWNrZXIuJGZpZWxkR2VvWCAmJiBnZW9waWNrZXIuJGZpZWxkR2VvWSkge1xuICAgICAgbGV0IGdlb3ggPSBnZW9waWNrZXIuJGZpZWxkR2VvWC52YWwoKTtcbiAgICAgIGxldCBnZW95ID0gZ2VvcGlja2VyLiRmaWVsZEdlb1kudmFsKCk7XG4gICAgICBkYXRhLmdlb3ggPSBnZW94O1xuICAgICAgZGF0YS5nZW95ID0gZ2VveTtcbiAgICAgIGlmICghZGF0YS5nZW94ICYmICFkYXRhLmdlb3kgJiYgZGF0YS5sb2NhdGlvbkNpdHkgJiYgZGF0YS5sb2NhdGlvblN0cmVldCkge1xuICAgICAgICB0aGlzLmFkZFBvc2l0aW9uKGRhdGEsIG1hcENvbnRyb2xsZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkYXRhLmdlb3ggJiYgZGF0YS5nZW95ICYmICghZGF0YS5sb2NhdGlvbkNpdHkgfHwgIWRhdGEubG9jYXRpb25TdHJlZXQgfHwgIWRhdGEubG9jYXRpb25TdHJlZXROdW1iZXIpKSB7XG4gICAgICAgIHRoaXMuYWRkQWRkcmVzcyhkYXRhLCBtYXBDb250cm9sbGVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlZGl0b3IgJiYgbWFwQ29udHJvbGxlci5kYXRhLmVkaXRvciAmJiBtYXBDb250cm9sbGVyLmRhdGEuZWRpdG9yLmlucHV0RmllbGQpIHtcbiAgICAgIGxldCBnZW9qc29uID0gJChtYXBDb250cm9sbGVyLmRhdGEuZWRpdG9yLmlucHV0RmllbGQpLnZhbCgpO1xuICAgICAgZGF0YS5nZW9qc29uID0gZ2VvanNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhbGlkYXRlRGF0YShkYXRhKSB7XG4gICAgaWYgKGRhdGEucHVibGlzaGVkKSB7XG4gICAgICBsZXQgZmllbGRzID0gdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5maWVsZHM7XG4gICAgICBmb3IgKGxldCBmaWVsZElkIGluIGZpZWxkcykge1xuICAgICAgICBpZiAoZmllbGRzLmhhc093blByb3BlcnR5KGZpZWxkSWQpKSB7XG4gICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGRJZF07XG4gICAgICAgICAgaWYgKGZpZWxkLm5hbWUpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZE5vZGUgPSAkKFwiI1wiICsgZmllbGQubmFtZSk7XG4gICAgICAgICAgICBpZiAoZmllbGQucmVxdWlyZWQgJiYgZmllbGROb2RlLmxlbmd0aCAmJiBoYXNDb25kaXRpb25zKGZpZWxkLCBkYXRhLCB0aGlzLnByb3BzLmZvcm0ucHJvcHMuY29tcG9uZW50LmZpZWxkcykpIHtcbiAgICAgICAgICAgICAgbGV0IGludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtmaWVsZC5uYW1lXSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgfHwgdHlwZW9mIGRhdGFbZmllbGQubmFtZV0gPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHx8IGRhdGFbZmllbGQubmFtZV0gPT09IFwiXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgIWRhdGFbZmllbGQubmFtZV0gfHxcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgZGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3N0cmluZycgJiYgIWRhdGFbZmllbGQubmFtZV0pIHx8XG4gICAgICAgICAgICAgICAgICAodHlwZW9mIGRhdGFbZmllbGQubmFtZV0uZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhW2ZpZWxkLm5hbWVdLmxlbmd0aCA9PT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgZGF0YVtmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRhdGFbZmllbGQubmFtZV0uZm9yRWFjaCAhPT0gJ2Z1bmN0aW9uJyAmJiAhZGF0YVtmaWVsZC5uYW1lXS52YWx1ZSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIGRhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnICYmICFkYXRhW2ZpZWxkLm5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIGRhdGFbZmllbGQubmFtZV0uZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhW2ZpZWxkLm5hbWVdLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiBkYXRhW2ZpZWxkLm5hbWVdID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGF0YVtmaWVsZC5uYW1lXS5mb3JFYWNoICE9PSAnZnVuY3Rpb24nICYmICFkYXRhW2ZpZWxkLm5hbWVdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtmaWVsZC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhW2ZpZWxkLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAgICAgICAgICAgZmllbGROb2RlID0gZmllbGROb2RlLmNoaWxkcmVuKClbMV07XG4gICAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2RjMzU0NSc7XG4gICAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgZmllbGROb2RlLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlckNvbG9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm94U2hhZG93Jyk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZmllbGROb2RlID0gZmllbGROb2RlWzBdO1xuICAgICAgICAgICAgICAgICAgJChmaWVsZE5vZGUpLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImlzLWludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykub2ZmKFwia2V5dXBcIik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGZpZWxkTm9kZS5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgIGlmICghZmllbGROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1jb250cm9sJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROb2RlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaWVsZE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsU3VibWl0RmFpbGVkKGRhdGEsIFtmaWVsZF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAgICAgICAgICAgZmllbGROb2RlID0gZmllbGROb2RlLmNoaWxkcmVuKClbMV07XG4gICAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvcmRlckNvbG9yJyk7XG4gICAgICAgICAgICAgICAgICBmaWVsZE5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveFNoYWRvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNoZWNrWmlwY29kZShkYXRhKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjYWxsU3VibWl0RmFpbGVkKGRhdGEsIGZpZWxkcykge1xuICAgIGlmICh3aW5kb3cuYzRnSG9va3MgJiYgd2luZG93LmM0Z0hvb2tzLnN1Ym1pdEZhaWxlZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cuYzRnSG9va3Muc3VibWl0RmFpbGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmM0Z0hvb2tzLnN1Ym1pdEZhaWxlZFtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgd2luZG93LmM0Z0hvb2tzLnN1Ym1pdEZhaWxlZFtpXShmaWVsZHMsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogdHJ1ZX0pO1xuICB9XG5cbiAgY2hlY2taaXBjb2RlIChkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkYXRhLmdlb3ggJiYgZGF0YS5nZW95ICYmIGRhdGEubG9jYXRpb25aaXApIHtcbiAgICAgICAgY29uc3QgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMuZm9ybS5tYXBDb250cm9sbGVyUmVmO1xuICAgICAgICBsZXQgdXJsID0gbWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC51cmwgKyBcInJldmVyc2UucGhwP2tleT1cIjtcbiAgICAgICAgdXJsICs9IG1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucmV2ZXJzZUtleTtcbiAgICAgICAgdXJsICs9IFwiJmxvbj1cIiArIGRhdGEuZ2VveDtcbiAgICAgICAgdXJsICs9IFwiJmxhdD1cIiArIGRhdGEuZ2VveTtcbiAgICAgICAgdXJsICs9IFwiJmZvcm1hdD1qc29uXCI7XG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuYWRkcmVzcyAmJiByZXNwb25zZS5hZGRyZXNzLnBvc3Rjb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5wb3N0Y29kZSA9PT0gZGF0YS5sb2NhdGlvblppcCkge1xuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZE5vZGUgPSAkKFwiI2xvY2F0aW9uWmlwXCIpO1xuICAgICAgICAgICAgICBmaWVsZE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgZmllbGROb2RlLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm9mZihcImtleXVwXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZmllbGROb2RlLmFkZENsYXNzKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgY29uc3QgYWggPSBuZXcgQWxlcnRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNIRUNLX1BPU0lUSU9OO1xuICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlBPU0lUSU9OX09VVF9PRl9SQU5HRTtcbiAgICAgICAgICAgICAgYWguc2hvd0NvbmZpcm1EaWFsb2codGl0bGUsIGNvbnRlbnQsICgpPT4ge3RoaXMuc3VibWl0RGF0YShkYXRhKX0sICgpPT4ge30sIHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlBPU0lUSU9OX09VVF9PRl9SQU5HRV9DT05GSVJNLCB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5QT1NJVElPTl9PVVRfT0ZfUkFOR2VfQ0FOQ0VMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdyBlcnJvciBoaW50XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pLmZhaWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3VibWl0RGF0YShkYXRhKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgYWRkUG9zaXRpb24oZGF0YSwgbWFwQ29udHJvbGxlcikgeyAvLyBhZGQgYSBwb3NpdGlvbiB3aGVuIG5vbmUgaXMgcHJvdmlkZWQgYnV0IGFkZHJlc3MgaXNcbiAgICBsZXQgY2l0eSA9IGRhdGEubG9jYXRpb25DaXR5O1xuICAgIGxldCBzdHJlZXQgPSBkYXRhLmxvY2F0aW9uU3RyZWV0O1xuICAgIGxldCBzdHJlZXRudW1iZXIgPSBkYXRhLmxvY2F0aW9uU3RyZWV0TnVtYmVyO1xuICAgIGxldCB1cmwgPSBtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZsaW1pdD0xXCI7XG4gICAgbGV0IGtleSA9IG1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5O1xuICAgIHVybCArPSBjaXR5ID8gXCImY2l0eT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjaXR5KSA6IFwiXCI7XG4gICAgdXJsICs9IHN0cmVldCA/IFwiJnN0cmVldD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzdHJlZXRudW1iZXIgKyBcIiBcIiArIHN0cmVldCkgOiBcIlwiO1xuICAgIHVybCArPSBcIiZrZXk9XCIgKyBrZXk7XG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlWzBdICYmIHJlc3BvbnNlWzBdLmxvbiAmJiByZXNwb25zZVswXS5sYXQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlWzBdO1xuICAgICAgICBjb25zdCBhaCA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgICAgbGV0IGFsZXJ0VGV4dCA9IFwiPGI+QnJlaXRlOjwvYj4gXCIgKyByZXN1bHQubGF0ICsgXCIgPGJyPjxiPkzDpG5nZTo8L2I+IFwiICsgcmVzdWx0LmxvbjtcbiAgICAgICAgbGV0IGFsZXJ0SGVhZGxpbmUgPSB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5BRERfR0VPTE9DQVRJT047XG4gICAgICAgIGxldCB0ZXh0Q29uZmlybSA9IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlNBVkVfV0lUSF9QT1NJVElPTjtcbiAgICAgICAgbGV0IHRleHRDYW5jZWwgPSB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5TQVZFX1dJVEhPVVRfUE9TSVRJT047XG4gICAgICAgIGNvbnN0IGNvbmZpcm1DYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YTtcbiAgICAgICAgICBkYXRhLmdlb3kgPSByZXN1bHQubGF0O1xuICAgICAgICAgIGRhdGEuZ2VveCA9IHJlc3VsdC5sb247XG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjYW5jZWxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YTtcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0RGF0YShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFoLnNob3dDb25maXJtRGlhbG9nSFRNTChhbGVydEhlYWRsaW5lLCBhbGVydFRleHQsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIHRleHRDb25maXJtLCB0ZXh0Q2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURhdGEoZGF0YSkpIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5mYWlsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YShkYXRhKSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRBZGRyZXNzIChkYXRhLCBtYXBDb250cm9sbGVyKSB7IC8vYWRkIGFuIGFkZHJlc3Mgd2hlbiBub25lIGlzIHByb3ZpZGVkIGJ1dCBwb3NpdGlvbiBpc1xuICAgIGxldCB1cmwgPSBtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnVybCArIFwicmV2ZXJzZS5waHA/a2V5PVwiO1xuICAgIHVybCArPSBtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnJldmVyc2VLZXk7XG4gICAgdXJsICs9IFwiJmxvbj1cIiArIGRhdGEuZ2VveDtcbiAgICB1cmwgKz0gXCImbGF0PVwiICsgZGF0YS5nZW95O1xuICAgIHVybCArPSBcIiZmb3JtYXQ9anNvblwiO1xuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIHVybDogdXJsXG4gICAgfSlcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGFoID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgbGV0IGNpdHkgPSBkYXRhLmxvY2F0aW9uQ2l0eTtcbiAgICAgIGxldCBzdHJlZXQgPSBkYXRhLmxvY2F0aW9uU3RyZWV0O1xuICAgICAgbGV0IHN0cmVldG51bWJlciA9IGRhdGEubG9jYXRpb25TdHJlZXROdW1iZXI7XG4gICAgICBsZXQgYWxlcnRUZXh0ID0gXCJcIjtcbiAgICAgIGlmICghY2l0eSAmJiByZXNwb25zZS5hZGRyZXNzKSB7XG4gICAgICAgIGNpdHkgPSByZXNwb25zZS5hZGRyZXNzLmNpdHkgfHwgcmVzcG9uc2UuYWRkcmVzcy50b3duIHx8IHJlc3BvbnNlLmFkZHJlc3MudmlsbGFnZTtcbiAgICAgICAgYWxlcnRUZXh0ICs9IFwiPGI+T3J0OjwvYj4gXCIgKyBjaXR5ICsgXCI8YnI+XCI7XG4gICAgICB9XG4gICAgICBpZiAoIXN0cmVldCAmJiByZXNwb25zZS5hZGRyZXNzKSB7XG4gICAgICAgIHN0cmVldCA9IHJlc3BvbnNlLmFkZHJlc3Mucm9hZCB8fCByZXNwb25zZS5hZGRyZXNzLnN0cmVldDtcbiAgICAgICAgYWxlcnRUZXh0ICs9IFwiPGI+U3RyYcOfZTo8L2I+IFwiICsgc3RyZWV0ICsgXCI8YnI+XCI7XG4gICAgICB9XG4gICAgICBpZiAoIXN0cmVldG51bWJlciAmJiByZXNwb25zZS5hZGRyZXNzICYmIHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgIHN0cmVldG51bWJlciA9IHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICBhbGVydFRleHQgKz0gXCI8Yj5IYXVzbnVtbWVyOjwvYj4gXCIgKyBzdHJlZXRudW1iZXIgKyBcIjxicj5cIjtcbiAgICAgIH1cblxuXG4gICAgICBsZXQgYWxlcnRIZWFkbGluZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkFERF9BRERSRVNTO1xuICAgICAgbGV0IHRleHRDb25maXJtID0gdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuU0FWRV9XSVRIX0FERFJFU1M7XG4gICAgICBsZXQgdGV4dENhbmNlbCA9IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlNBVkVfV0lUSE9VVF9BRERSRVNTO1xuICAgICAgY29uc3QgY29uZmlybUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZGF0YVxuICAgICAgICBkYXRhLmxvY2F0aW9uQ2l0eSA9IGNpdHk7XG4gICAgICAgIGRhdGEubG9jYXRpb25TdHJlZXQgPSBzdHJlZXQ7XG4gICAgICAgIGRhdGEubG9jYXRpb25TdHJlZXROdW1iZXIgPSBzdHJlZXRudW1iZXI7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YShkYXRhKSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgY2FuY2VsQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5mb3JtLnByb3BzLmNvbXBvbmVudC5kYXRhXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YShkYXRhKSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKGFsZXJ0VGV4dCkge1xuICAgICAgICBhaC5zaG93Q29uZmlybURpYWxvZ0hUTUwoYWxlcnRIZWFkbGluZSwgYWxlcnRUZXh0LCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCB0ZXh0Q29uZmlybSwgdGV4dENhbmNlbCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpKSB7XG4gICAgICAgIHRoaXMuc3VibWl0RGF0YShkYXRhKTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5mYWlsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0YShkYXRhKSkge1xuICAgICAgICB0aGlzLnN1Ym1pdERhdGEoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5idXR0b24uY2xhc3NOYW1lICsgXCIgYnRuIGJ0bi1wcmltYXJ5IG1yLTNcIn0gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tCdXR0b259Pnt0aGlzLnByb3BzLmJ1dHRvbi5jYXB0aW9ufTwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYnV0dG9uLmNsYXNzTmFtZSArIFwiIGJ0biBidG4tcHJpbWFyeSBtci0zXCJ9IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmNsaWNrQnV0dG9ufSBkaXNhYmxlZD17dHJ1ZX0+e3RoaXMucHJvcHMuYnV0dG9uLmNhcHRpb259PC9idXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbiAgZ2VvcGlja2VyRmllbGRFeGlzdHMoKSB7XG4gICAgbGV0IGZpZWxkcyA9IHRoaXMucHJvcHMuZm9ybS5wcm9wcy5jb21wb25lbnQuZmllbGRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmllbGRzW2ldLnR5cGUgPT09IFwiZ2VvcGlja2VyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59IiwiXG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbmRpdGlvbnMoZmllbGQpIHtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZC5jb25kaXRpb25GaWVsZC5mb3JFYWNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBmaWVsZC5jb25kaXRpb25WYWx1ZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSBmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHZhbHVlcyBmb3Igb25lIGNvbmRpdGlvbiBmaWVsZCAob3IgY29uZGl0aW9uKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSkge1xuICBsZXQgcmVuZGVyID0gdHJ1ZTtcbiAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2VsZW1lbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSAhPT0gbnVsbCAmJiAhZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0pICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gJiYgZGF0YVtlbGVtZW50XS52YWx1ZSAmJlxuICAgICAgICAoU3RyaW5nKGRhdGFbZWxlbWVudF0udmFsdWUpICE9PSBTdHJpbmcoZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdKSkpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IG51bGwgJiYgZmllbGQuY29uZGl0aW9uVmFsdWVbaW5kZXhdICE9PSBudWxsKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9IGVsc2UgaWYgKGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCA+IDEgJiYgZmllbGQuY29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBmaWVsZC5jb25kaXRpb25GaWVsZFswXTtcbiAgICByZW5kZXIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gZmllbGQuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBjb25kVmFsdWUgPSBmaWVsZC5jb25kaXRpb25WYWx1ZVtrZXldO1xuICAgICAgICBpZiAoISFkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUpIHtcbiAgICAgICAgICAvLyBkYXRhW2VsZW1lbnRdIGlzIGEgc2VsZWN0IGZpZWxkXG4gICAgICAgICAgaWYgKGRhdGFbZWxlbWVudF0udmFsdWUgPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtlbGVtZW50XSA9PT0gY29uZFZhbHVlKSB7XG4gICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiByZW5kZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrSWZGaWVsZElzUmVuZGVyZWQoZmllbGQsIGRhdGEsIGZpZWxkcykge1xuICBpZiAoaGFzQ29uZGl0aW9ucyhmaWVsZCkpIHtcbiAgICAvLyBnZXQgZmllbGQgdGhpcyBmaWVsZCBkZXBlbmRzIHVwb25cbiAgICBsZXQgZGVwZW5kZW50RmllbGQgPSBudWxsO1xuICAgIGZpZWxkcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09PSBmaWVsZC5jb25kaXRpb25GaWVsZFswXSkge1xuICAgICAgICAgIGRlcGVuZGVudEZpZWxkID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChkZXBlbmRlbnRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IHRydWU7XG4gICAgICBpZiAoaGFzQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCkpIHtcbiAgICAgICAgaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkID0gY2hlY2tDb25kaXRpb25zKGRlcGVuZGVudEZpZWxkLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCAmJiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrQ29uZGl0aW9ucyhmaWVsZCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfc3dlZXRhbGVydCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiQWxlcnRIYW5kbGVyIiwiZXhwb3J0cyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJzaG93RXJyb3JEaWFsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJjc3NDbGFzcyIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJjdXN0b21DbGFzcyIsInNob3dJbmZvRGlhbG9nIiwic2hvd0luZm9BY3Rpb25EaWFsb2ciLCJjb25maXJtQ2FsbGJhY2siLCJ0aGVuIiwic2hvd0luZm9BY3Rpb25EaWFsb2cyIiwic2hvd0xvYWRlck9uQ29uZmlybSIsInByZUNvbmZpcm0iLCJkYXRhIiwic2hvd0NvbmZpcm1EaWFsb2ciLCJjYW5jZWxDYWxsYmFjayIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ3aWxsRGVsZXRlIiwic2hvd0NvbmZpcm1EaWFsb2dIVE1MIiwiaHRtbCIsInNob3dQcmVDb25maXJtRGlhbG9nIiwicHJlQ29uZmlybUNhbGxiYWNrIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZ0RpYWxvZyIsImFsbG93RXNjYXBlS2V5Iiwib25CZWZvcmVPcGVuIiwiY2xpY2tDb25maXJtIiwiX3Nob3dTZWxlY3REaWFsb2ciLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsIm9iak9wdGlvbnMiLCJfeWllbGQkU3dhbCRmaXJlIiwic2VsZWN0ZWRWYWx1ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJpbnB1dCIsImlucHV0T3B0aW9ucyIsImlucHV0UGxhY2Vob2xkZXIiLCJzZW50IiwiYWJydXB0Iiwic3RvcCIsInNob3dTZWxlY3REaWFsb2ciLCJfeCIsIl94MiIsIl94MyIsIl94NCIsIl94NSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfY29uZGl0aW9ucyIsIl9BbGVydEhhbmRsZXIiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ3VzdG9tU3VibWl0QnV0dG9uIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJjbGlja0J1dHRvbiIsImJpbmQiLCJzdWJtaXRDYWxsYmFjayIsInN0YXRlIiwiYWN0aXZlIiwiX2luaGVyaXRzMiIsImV2ZW50IiwiX3RoaXMyIiwic2V0U3RhdGUiLCJmb3JtIiwiY29tcG9uZW50IiwicmVuZGVyQXNGb3JtIiwiYWN0aXZlQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZW9waWNrZXJGaWVsZEV4aXN0cyIsInNldEdlb0RhdGEiLCJ2YWxpZGF0ZURhdGEiLCJzdWJtaXREYXRhIiwicmVxdWVzdERhdGEiLCJfdGhpczMiLCJzZXRMb2FkaW5nIiwialF1ZXJ5IiwicG9zdCIsImJ1dHRvbiIsInVybCIsImRvbmUiLCJyZWRpcmVjdFVybCIsInN1Y2Nlc3MiLCJlbmRzV2l0aCIsImFsaWFzIiwic3RvcmVQb3NpdGlvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwic2V0RXJyb3JUZXh0cyIsImZpZWxkcyIsImNhbGxTdWJtaXRGYWlsZWQiLCJtYXBDb250cm9sbGVyIiwibWFwQ29udHJvbGxlclJlZiIsImdlb3BpY2tlciIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiZWRpdG9yIiwiJGZpZWxkR2VvWCIsIiRmaWVsZEdlb1kiLCJnZW94IiwidmFsIiwiZ2VveSIsImxvY2F0aW9uQ2l0eSIsImxvY2F0aW9uU3RyZWV0IiwiYWRkUG9zaXRpb24iLCJsb2NhdGlvblN0cmVldE51bWJlciIsImFkZEFkZHJlc3MiLCJpbnB1dEZpZWxkIiwiZ2VvanNvbiIsIiQiLCJfdGhpczQiLCJwdWJsaXNoZWQiLCJfbG9vcCIsImZpZWxkSWQiLCJmaWVsZCIsIm5hbWUiLCJmaWVsZE5vZGUiLCJyZXF1aXJlZCIsImxlbmd0aCIsImhhc0NvbmRpdGlvbnMiLCJpbnZhbGlkIiwidHlwZSIsImZvckVhY2giLCJfdHlwZW9mMiIsImNoaWxkcmVuIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImJveFNoYWRvdyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVQcm9wZXJ0eSIsImtleXVwIiwicmVtb3ZlQ2xhc3MiLCJvZmYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsImZvY3VzIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInYiLCJfcmV0IiwiY2hlY2taaXBjb2RlIiwiYzRnSG9va3MiLCJzdWJtaXRGYWlsZWQiLCJfdGhpczUiLCJsb2NhdGlvblppcCIsImdlb3NlYXJjaCIsInJldmVyc2VLZXkiLCJhamF4IiwiZGF0YVR5cGUiLCJyZXNwb25zZSIsImFkZHJlc3MiLCJwb3N0Y29kZSIsImFkZENsYXNzIiwiYWgiLCJsYW5ndWFnZVJlZnMiLCJDSEVDS19QT1NJVElPTiIsIlBPU0lUSU9OX09VVF9PRl9SQU5HRSIsIlBPU0lUSU9OX09VVF9PRl9SQU5HRV9DT05GSVJNIiwiUE9TSVRJT05fT1VUX09GX1JBTkdlX0NBTkNFTCIsImZhaWwiLCJfdGhpczYiLCJjaXR5Iiwic3RyZWV0Iiwic3RyZWV0bnVtYmVyIiwic2VhcmNoS2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9uIiwibGF0IiwicmVzdWx0IiwiYWxlcnRUZXh0IiwiYWxlcnRIZWFkbGluZSIsIkFERF9HRU9MT0NBVElPTiIsInRleHRDb25maXJtIiwiU0FWRV9XSVRIX1BPU0lUSU9OIiwidGV4dENhbmNlbCIsIlNBVkVfV0lUSE9VVF9QT1NJVElPTiIsIl90aGlzNyIsInRvd24iLCJ2aWxsYWdlIiwicm9hZCIsImhvdXNlX251bWJlciIsIkFERF9BRERSRVNTIiwiU0FWRV9XSVRIX0FERFJFU1MiLCJTQVZFX1dJVEhPVVRfQUREUkVTUyIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2FwdGlvbiIsImRpc2FibGVkIiwiQ29tcG9uZW50IiwiY29uZGl0aW9uRmllbGQiLCJjb25kaXRpb25WYWx1ZSIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImNoZWNrSWZGaWVsZElzUmVuZGVyZWQiLCJkZXBlbmRlbnRGaWVsZCIsImlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=