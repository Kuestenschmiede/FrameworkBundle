"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-router-controls_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-autocomplete-input.jsx":
/*!***********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AutocompleteInput = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var AutocompleteInput = exports.AutocompleteInput = /*#__PURE__*/function (_Component) {
  function AutocompleteInput(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AutocompleteInput);
    _this = _callSuper(this, AutocompleteInput, [props]);
    _this.listenerRegistered = false;
    _this.state = {
      arrAddresses: []
    };
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(AutocompleteInput, _Component);
  return (0, _createClass2["default"])(AutocompleteInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          arrAddresses: []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var submitFunction = function submitFunction() {
        var field = $("#" + scope.props.cssId);
        field.trigger('change');
        var performSearchCallback;
        var value;
        if (scope.props.cssId.indexOf("area") !== -1) {
          value = "areaValue";
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performArea();
          };
        } else {
          value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performViaRoute();
          };
        }
        scope.props.router.performSearch(field, value, performSearchCallback);
      };
      var enterListener = function enterListener(event, opt_this) {
        if (event.keyCode === 13) {
          submitFunction();
        } else {
          if ($(event.currentTarget).val().length === 0 && !event.keyCode) {
            //deleted
            if (typeof scope.props.objFunctions.deleteFunction === "function") {
              scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.id);
            } else {
              // over points
              scope.props.objFunctions[scope.props.index].deleteFunction(event.currentTarget, event.currentTarget.id);
            }
          } else {
            scope.counter = Math.floor(Date.now());
            setTimeout(function () {
              if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
                delete scope.counter;
                var value = scope.props.cssId.indexOf("area") !== -1 ? "areaValue" : scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
                var field = $("#" + scope.props.cssId);
                if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                  scope.props.router.performSearch(field, value);
                } else {
                  scope.props.router.performSearch(field, value, false);
                  scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
                }
              }
            }, 500);
          }
        }
      };
      var listAutocomplete = null;
      if (this.state.arrAddresses && this.state.arrAddresses.length > 0) {
        var listAdresses = [];
        var _loop = function _loop() {
          if (_this2.state.arrAddresses.hasOwnProperty(i)) {
            var elemAddress = _this2.state.arrAddresses[i];
            var clickEvent = function clickEvent(self) {
              jQuery("#" + self.props.cssId).val(elemAddress.name);
              var point = new _geom.Point([elemAddress.pos[1], elemAddress.pos[0]]);
              if (self.props.cssId.includes("From")) {
                self.props.router.setRouteFrom(elemAddress.pos[1], elemAddress.pos[0], true);
              } else if (self.props.cssId.includes("To")) {
                self.props.router.setRouteTo(elemAddress.pos[1], elemAddress.pos[0], true);
              } else if (self.props.cssId.includes("Over")) {
                self.props.router.addOverPoint(elemAddress.pos[1], elemAddress.pos[0], self.props.index, true);
              } else if (self.props.cssId.includes("area")) {
                self.props.router.setAreaPoint(elemAddress.pos[1], elemAddress.pos[0], true);
              }
              self.setState({
                arrAddresses: []
              });
            };
            var listItem = /*#__PURE__*/_react["default"].createElement("li", {
              key: i,
              className: "c4g-autocomplete-item",
              onMouseUp: function onMouseUp(event) {
                clickEvent(scope);
              }
            }, elemAddress.name);
            listAdresses.push(listItem);
          }
        };
        for (var i in this.state.arrAddresses) {
          _loop();
        }
        listAutocomplete = /*#__PURE__*/_react["default"].createElement("ul", {
          className: "c4g-autocomplete"
        }, listAdresses);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-autocomplete-wrapper',
        ref: this.wrapperRef
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: this.props.cssId,
        type: "search",
        defaultValue: this.props.value,
        onKeyDown: enterListener,
        autoComplete: "off"
      }), listAutocomplete);
    }
  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this.objSettings.center = center;
    }
  }, {
    key: "autocompleteAddress",
    value: function autocompleteAddress(input, cssClass) {
      var scope = this;
      var settings = scope.props.objSettings;
      var center;
      if (settings.center) {
        if (typeof settings.center === "function") {
          var objCenter = settings.center();
          center = objCenter[0] + "," + objCenter[1];
        } else {
          center = settings.center[0] + "," + settings.center[1];
        }
      } else if (settings.bBox) {
        center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
      }
      var url;
      if (center) {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input + "&center=" + center;
      } else {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
      }
      if (settings.geosearchParams) {
        for (var param in settings.geosearchParams) {
          if (settings.geosearchParams.hasOwnProperty(param)) {
            url += "&" + param + "=" + settings.geosearchParams[param];
          }
        }
      }
      if (settings.resultCount) {
        url += "&limit=" + settings.resultCount;
      }
      $.ajax({
        url: url
      }).done(function (data) {
        var _this3 = this;
        var center;
        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }
        if (data.length > 0) {
          var arrAddresses = [];
          if (settings.bBox && settings.bBox[0] && data[0] && data[0].display_name && center) {
            var _loop2 = function _loop2() {
              if (data.hasOwnProperty(i)) {
                if (_this3.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                  var distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                  var element = {
                    'dist': distance,
                    'pos': [data[i].lat, data[i].lon],
                    'name': data[i].display_name
                  };
                  var foundIndex = arrAddresses.findIndex(function (findElement) {
                    return findElement.name === element.name;
                  });
                  if (foundIndex === -1) {
                    arrAddresses.push(element);
                  }
                }
              }
            };
            // $(cssId).val(data[0].display_name);
            for (var i in data) {
              _loop2();
            }
            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });
          } else if (data[0] && data[0].display_name) {
            var _loop3 = function _loop3() {
              if (data.hasOwnProperty(_i)) {
                var element = {
                  'pos': [data[_i].lat, data[_i].lon],
                  'name': data[_i].display_name
                };
                var foundIndex = arrAddresses.findIndex(function (findElement) {
                  return findElement.name === element.name;
                });
                if (foundIndex === -1) {
                  arrAddresses.push(element);
                }
              }
            };
            for (var _i in data) {
              _loop3();
            }
          }
          scope.setState({
            arrAddresses: arrAddresses
          });
        }
      });
    }
  }, {
    key: "isInBoundingBox",
    value: function isInBoundingBox(longitude, latitude, bbox) {
      if (typeof longitude === "string") {
        longitude = parseFloat(longitude);
      }
      if (typeof latitude === "string") {
        latitude = parseFloat(latitude);
      }
      if (bbox[0] < longitude && longitude < bbox[2] && bbox[1] < latitude && latitude < bbox[3]) {
        return true;
      } else {
        return false;
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-horizontal-panel.jsx":
/*!*********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-horizontal-panel.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HorizontalPanel = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var HorizontalPanel = exports.HorizontalPanel = /*#__PURE__*/function (_Component) {
  function HorizontalPanel(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, HorizontalPanel);
    _this = _callSuper(this, HorizontalPanel, [props]);
    var scope = _this;
    // create control to toggle the panel
    _this.element = document.createElement('div');
    var button = document.createElement('button');
    if (props.title) {
      button.title = props.title;
    }
    _this.element.className = (props.className || "c4g-horizontal-panel") + "-button-" + (props.direction || "top") + " ol-control " + "ol-unselectable";
    _this.element.appendChild(button);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = props.title;
      button.appendChild(span);
    } else {
      button.title = props.title;
    }
    _this.clickControl = _this.clickControl.bind(_this);
    jQuery(button).on('click', _this.clickControl);
    var mapController = props.mapController;
    var control = new _control.Control({
      element: _this.element,
      target: props.target
    });
    _this.control = control;
    _this.state = {
      // either "top" or "bottom"
      direction: props.direction || "top",
      open: props.open || false,
      className: props.className || "c4g-horizontal-panel",
      childs: props.childs || [],
      control: control
    };
    return _this;
  }
  (0, _inherits2["default"])(HorizontalPanel, _Component);
  return (0, _createClass2["default"])(HorizontalPanel, [{
    key: "render",
    value: function render() {
      var className = this.state.className + "-" + this.state.direction;
      className += " " + (this.state.open ? "c4g-open" : "c4g-close");
      var scope = this;
      function createChilds() {
        var div = document.createElement('div');
        scope.state.childs.forEach(function (element) {
          div.appendChild(element);
        });
        return div;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      });
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.state.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.slideOutCollidingElements();
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
      this.slideInCollidingElements();
    }

    /**
     * Moves the buttons that would collide with the panel.
     */
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      var scope = this;
      if (this.state.direction === "top") {
        var elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "100px";
        });
        elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "100px";
        });
        // this.state.control.element.style.top = "100px";
      } else {
        var _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        });
        _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        });
        // let topValue = this.props.mapController.map.getSize()[1] - 100;
        // jQuery(this.state.control.element).style.top = topValue + "px";
        // jQuery(this.state.control.element).addClass("panel-slided-out").removeClass("panel-slided-in");
      }
    }

    /**
     * Undoes the previous button movement.
     */
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      var scope = this;
      if (this.state.direction === "top") {
        var elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "0px";
        });
        elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "0px";
        });
        // this.state.control.element.style.top = "0px";
      } else {
        var _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        });
        _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        });
        // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
        // jQuery(this.state.control.element).addClass("panel-slided-in").removeClass("panel-slided-out")
      }
    }

    /**
     * Adds the given HTML content to the panel.
     * @param content   Must be a HTML element.
     */
  }, {
    key: "addContent",
    value: function addContent(content) {
      this.state.childs.push(content);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-address-field.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-address-field.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterAddressField = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-autocomplete-input.jsx");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterAddressField = exports.RouterAddressField = /*#__PURE__*/function (_Component) {
  function RouterAddressField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterAddressField);
    _this = _callSuper(this, RouterAddressField, [props]);
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(_this.props.router.props.mapController.data);
    _this.getPosition = _this.getPosition.bind(_this);
    _this.removeContent = _this.removeContent.bind(_this);
    if (props.router.mapData.initialPosition && (props.name === "routingFrom" || props.name === "areaInput")) {
      _this.getPosition();
    } else if (props.router.mapData.initialDestination && props.name === "routingTo") {
      var setToCenter = function setToCenter(data) {
        var center = props.router.props.mapController.map.getView().getCenter();
        var coordinates = {};
        coordinates.coords = {};
        coordinates.coords.longitude = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326")[0];
        coordinates.coords.latitude = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326")[1];
        _this.handlePosition(coordinates);
      };
      window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
      window.c4gMapsHooks.layer_loaded.push(setToCenter);
    }
    return _this;
  }
  (0, _inherits2["default"])(RouterAddressField, _Component);
  return (0, _createClass2["default"])(RouterAddressField, [{
    key: "render",
    value: function render() {
      var positionButton = null;
      if (this.props.withPosition) {
        positionButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn-primary c4g-router-position",
          onMouseUp: this.getPosition,
          title: this.languageConstants.ROUTE_POSITION
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), positionButton, /*#__PURE__*/_react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
        type: "search",
        className: this.props["class"],
        name: this.props.name,
        cssId: this.props.cssId,
        objFunctions: this.props.objFunctions,
        objSettings: this.props.objSettings,
        popup: this.props.popup,
        containerAddresses: this.props.containerAddresses,
        router: this.props.router,
        value: this.props.value,
        index: this.props.index
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn-primary c4g-router-input-clear",
        onMouseUp: this.removeContent,
        title: this.languageConstants.REMOVE_ADDRESS
      }));
    }
  }, {
    key: "removeContent",
    value: function removeContent(event) {
      jQuery("#" + this.props.cssId).val('');
      this.props.clearInput(event);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var scope = this;
      var handleNewPosition = function handleNewPosition(pos) {
        scope.handlePosition(pos);
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleNewPosition);
      } else {
        console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
      }
    }

    /**
     * Takes the input coordinates and executes the reverse search. On success, the result location is inserted in the
     * given input field and the given property of this.
     * @param coordinates
     */
  }, {
    key: "handlePosition",
    value: function handlePosition(coordinates) {
      var coords = coordinates.coords;
      if (this.props.name === "routingFrom") {
        this.props.router.setRouteFrom(coords.longitude, coords.latitude);
      } else if (this.props.name === "overValue") {} else if (this.props.name === "routingTo") {
        this.props.router.setRouteTo(coords.longitude, coords.latitude);
      }
      if (this.props.name === "areaInput") {
        this.props.router.setAreaPoint(coords.longitude, coords.latitude);
      }
      this.props.router.recalculateRoute();
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-address-input.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-address-input.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterAddressInput = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gRouterAddressField = __webpack_require__(/*! ./c4g-router-address-field.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-address-field.jsx");
var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-profile-selection.jsx");
var _c4gRouterLayerSelection = __webpack_require__(/*! ./c4g-router-layer-selection.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-layer-selection.jsx");
var _c4gRouterDetourSlider = __webpack_require__(/*! ./c4g-router-detour-slider.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-detour-slider.jsx");
var _routingConstantI18nDe = __webpack_require__(/*! ../routing-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-de.js");
var _routingConstantI18nEn = __webpack_require__(/*! ../routing-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-en.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterAddressInput = exports.RouterAddressInput = /*#__PURE__*/function (_Component) {
  function RouterAddressInput(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterAddressInput);
    _this = _callSuper(this, RouterAddressInput, [props]);
    if (!props.router) {
      console.warn("The routing component needs a router, it won't work correctly since none was passed...");
    }
    _this.state = {
      router: props.router
    };
    if (typeof props.router.props.mapController.data !== 'undefined') {
      if (props.router.props.mapController.data.lang === "de") {
        _this.langConstants = _routingConstantI18nDe.routingConstantsGerman;
      } else {
        // fallback
        _this.langConstants = _routingConstantI18nEn.routingConstantsEnglish;
      }
    }
    return _this;
  }
  (0, _inherits2["default"])(RouterAddressInput, _Component);
  return (0, _createClass2["default"])(RouterAddressInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var input = null;
      var scope = this;
      var overForm = "";
      if (this.props.enableOverPoints && this.props.mode === "route") {
        overForm = Object.keys(this.props.overSettings.overPoints).map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
            className: "btn-primary c4g-router-input-over c4g-router-input-over-" + item,
            name: "overPoint-" + item,
            label: _this2.langConstants.ROUTER_Label_Interim,
            cssId: "routingOver-" + item,
            objFunctions: _this2.props.overSettings.objFunctions,
            objSettings: _this2.props.objSettings,
            containerAddresses: _this2.props.containerAddresses,
            value: _this2.props.overSettings.overAddresses[item],
            router: _this2.props.router,
            key: item,
            index: item,
            clearInput: function clearInput() {
              _this2.props.overSettings.objFunctions[item].deleteFunction();
            }
          });
        });
      }
      var fromClsAddition = "";
      var toClsAddition = "";
      var areaClsAddition = "";
      if (this.props.mode === "route") {
        areaClsAddition = " invisible";
      } else {
        fromClsAddition = " invisible";
        toClsAddition = " invisible";
      }
      var swapFunction = function swapFunction() {
        scope.props.overSettings.swapPoints();
        var tmpFrom = jQuery("#routingFrom").val();
        jQuery("#routingFrom").val(jQuery("#routingTo").val());
        jQuery("#routingTo").val(tmpFrom);
      };
      var swapButton = "";
      if (this.props.switchTargets && this.props.mode === "route") {
        swapButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-switch",
          onMouseUp: swapFunction
        });
      }
      var overButton = "";
      if (this.props.enableOverPoints && this.props.mode === "route") {
        overButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-over",
          onMouseUp: this.props.overSettings.overFunction
        });
      }
      var idx = this.props.overSettings.overPoints.length + 1;
      input = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-from" + fromClsAddition,
        name: "routingFrom",
        label: this.langConstants.ROUTER_FROM,
        key: idx,
        cssId: "routingFrom",
        objFunctions: this.props.objFunctions.fromFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.from,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.fromAddress,
        router: this.props.router
      }), overForm, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-to" + toClsAddition,
        name: "routingTo",
        label: this.langConstants.ROUTER_TO,
        key: idx + 1,
        cssId: "routingTo",
        objFunctions: this.props.objFunctions.toFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.to,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.toAddress,
        router: this.props.router
      }), /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-area" + areaClsAddition,
        name: "areaInput",
        label: this.langConstants.ROUTER_CENTER,
        key: idx + 2,
        cssId: "areaInput",
        objFunctions: this.props.objFunctions.areaFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.area,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.areaAddress,
        router: this.props.router
      }));
      var details = "";
      var featureSearchControls = "";
      if (this.props.router.props.mapController.data.showFeatures && this.props.layers) {
        featureSearchControls = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterLayerSelection.RouterLayerSelection, {
          layers: this.props.layers,
          router: this.props.router,
          activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea
        }), /*#__PURE__*/_react["default"].createElement(_c4gRouterDetourSlider.RouterDetourSlider, {
          min: this.props.sliderOptions.min,
          max: this.props.sliderOptions.max,
          value: this.props.sliderOptions.value,
          router: this.props.sliderOptions.router
        }));
      }
      if (this.props.mode === "route") {
        details = /*#__PURE__*/_react["default"].createElement("div", {
          className: "buttonbar"
        }, overButton, swapButton, featureSearchControls);
      } else if (this.props.mode === "area") {
        details = /*#__PURE__*/_react["default"].createElement("div", {
          className: "buttonbar"
        }, featureSearchControls);
      }
      var startButton = null;
      if (this.props.router.props.mapController.data.routeStartButton) {
        startButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-route-search-start",
          onMouseUp: this.props.router.recalculateRoute
        }, this.langConstants.START_ROUTE);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, input, startButton, details);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-controls.jsx":
/*!********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-controls.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gHorizontalPanel = __webpack_require__(/*! ./c4g-horizontal-panel.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-horizontal-panel.jsx");
var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-address-input.jsx");
var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterProfileSelection = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-profile-selection.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-profile-selection.jsx"));
});
var RouterControls = exports["default"] = /*#__PURE__*/function (_HorizontalPanel) {
  function RouterControls(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterControls);
    _this = _callSuper(this, RouterControls, [props]);
    _this.state.router = _this.props.router;
    _this.state.showForm = true;
    _this.setRouteMode = _this.setRouteMode.bind(_this);
    _this.setAreaMode = _this.setAreaMode.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _routingConstantI18n.getLanguage)(props.mapController.data);
    var index = props.mapController.arrComponents.findIndex(function (element) {
      return element.name === "router";
    });
    props.mapController.arrComponents[index].control = _this.control;
    if (props.mapController.data.router_div && _this.element && _this.element.className) {
      _this.element.className += " c4g-external";
    }
    return _this;
  }
  (0, _inherits2["default"])(RouterControls, _HorizontalPanel);
  return (0, _createClass2["default"])(RouterControls, [{
    key: "setRouteMode",
    value: function setRouteMode(event) {
      event.stopPropagation();
      this.props.router.setMode("route");
    }
  }, {
    key: "setAreaMode",
    value: function setAreaMode(event) {
      event.stopPropagation();
      this.props.router.setMode("area");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.slideOutCollidingElements();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var className = "c4g-router-content" + (this.props.open ? " c4g-open " : " c4g-close ") + this.props.mode;
      // propagate open state down to child components
      var open = this.props.open;
      var modeSwitcher = "";
      if (this.state.showForm) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterProfileSelection, {
          profiles: this.props.router.state.profiles,
          router: this.props.router,
          currentProfile: this.props.router.state.currentProfile
        })), /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
          className: "c4g-router-input-content",
          router: this.props.router,
          withPosition: true,
          switchTargets: this.props.switchTargets,
          objFunctions: this.props.objFunctions,
          objSettings: this.props.objSettings,
          currentProfile: this.props.currentProfile,
          enableOverPoints: this.props.enableOverPoints,
          containerAddresses: this.props.containerAddresses,
          mode: this.props.mode,
          open: open,
          layers: this.props.layers,
          resetFunctions: this.props.resetFunctions,
          fromAddress: this.props.fromAddress,
          toAddress: this.props.toAddress,
          areaAddress: this.props.areaAddress,
          sliderOptions: this.props.sliderOptions,
          profiles: this.props.profiles,
          overSettings: this.props.overSettings
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
          wrapperClass: "c4g-router-header",
          header: headline,
          headerClass: "c4g-router-headline",
          detailBtnClass: "c4g-router-extended-options",
          detailBtnCb: this.toggleDetails,
          closeBtnClass: "c4g-router-close",
          closeBtnCb: this.close
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-hide-form-button",
          onMouseUp: function onMouseUp() {
            _this2.setState({
              showForm: !_this2.state.showForm
            });
          }
        }));
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      // jQuery(this.state.control.element).css("top", 0 + "px");
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      // override parent method
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var topValue = 0;
      var container = document.getElementsByClassName(className)[0];
      if (container) {
        topValue = container.offsetHeight;
      }
      // jQuery(this.state.control.element).css("top", topValue + "px");
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
      this.slideOutCollidingElements();
      jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
      this.slideOutCollidingElements();
      jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
    }
  }, {
    key: "clickControl",
    value: function clickControl(evt) {
      var hidden = this.props.router.props.mapController.routerContainer.className.includes('c4g-close');
      if (this.props.open) {
        if (!hidden) {
          this.close();
        } else {
          jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
        }
      } else if (!this.props.open) {
        this.open();
      }
    }
  }]);
}(_c4gHorizontalPanel.HorizontalPanel);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-detour-slider.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-detour-slider.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterDetourSlider = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _routingConstants = __webpack_require__(/*! ../routing-constants */ "../MapsBundle/src/Resources/public/js/routing-constants.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterDetourSlider = exports.RouterDetourSlider = /*#__PURE__*/function (_Component) {
  function RouterDetourSlider(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterDetourSlider);
    _this = _callSuper(this, RouterDetourSlider, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.updated = false;
    return _this;
  }
  (0, _inherits2["default"])(RouterDetourSlider, _Component);
  return (0, _createClass2["default"])(RouterDetourSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scope = this;
      var element = jQuery("." + _routingConstants.routingConstants.ROUTE_TOGGLE);
      element.on('input', function () {
        var control = jQuery(this);
        var range = control.attr('max') - control.attr('min');
        var pos = (control.val() - control.attr('min')) / range * 100;
        var posOffset = Math.round(50 * pos / 100) - 25;
        var output = control.next('output');
        output.css('left', 'calc(' + pos + '% - ' + posOffset + 'px)').text(control.val() + " km");
        if (scope.props.router.props.mapController.data.usePermalink) {
          scope.props.router.permalink.updateLinkFragments("detour", control.val());
        }
      });
      element.on('change', function () {
        if (scope.props.router.state.mode === "route") {
          scope.props.router.setState({
            detourRoute: element.val()
          }, scope.props.router.recalculateRoute);
        } else {
          scope.props.router.setState({
            detourArea: element.val()
          }, function () {
            scope.props.router.performArea(scope.props.router.state.areaValue);
          });
        }
      });
      element.trigger('input');
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var detourElement = null;
      if (!this.props.router.props.mapController.data.detourElement) {
        detourElement = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-detour-range"
        }, /*#__PURE__*/_react["default"].createElement("p", null, _routingConstants.routingConstants.ROUTE_DETOUR), /*#__PURE__*/_react["default"].createElement("input", {
          type: "range",
          className: _routingConstants.routingConstants.ROUTE_TOGGLE,
          min: this.props.min,
          max: this.props.max,
          defaultValue: this.props.value,
          step: 0.5
        }), /*#__PURE__*/_react["default"].createElement("output", {
          className: _routingConstants.routingConstants.OUTPUT_DETOUR
        }, this.props.value + " km"));
      } else {
        var arrOptions = scope.props.router.state.mode === "route" ? this.props.router.props.mapController.data.arrDetourOptionsRoute : this.props.router.props.mapController.data.arrDetourOptionsArea;
        var options = arrOptions.map(function (elem) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: elem,
            value: elem
          }, elem, " km");
        });
        detourElement = /*#__PURE__*/_react["default"].createElement("select", {
          className: "c4g-detour-selection",
          onChange: this.handleChange,
          value: this.props.value
        }, options);
      }
      return detourElement;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var element = document.querySelector("." + _routingConstants.routingConstants.ROUTE_TOGGLE);
      var scope = this;
      if (!this.updated) {
        jQuery(element).on('input', function () {
          var control = jQuery(this);
          var range = control.attr('max') - control.attr('min');
          var pos = (control.val() - control.attr('min')) / range * 100;
          var posOffset = Math.round(50 * pos / 100) - 25;
          var output = control.next('output');
          output.css('left', 'calc(' + pos + '% - ' + posOffset + 'px)').text(control.val() + " km");
          if (scope.props.router.props.mapController.data.usePermalink) {
            scope.props.router.permalink.updateLinkFragments("detour", control.val());
          }
        });
        jQuery(element).on('change', function () {
          if (scope.props.router.state.mode === "route") {
            scope.props.router.setState({
              detourRoute: jQuery(element).val()
            }, scope.props.router.recalculateRoute);
          } else {
            scope.props.router.setState({
              detourArea: jQuery(element).val()
            }, function () {
              scope.props.router.performArea(scope.props.router.state.areaValue);
            });
          }
        });
        jQuery(element).trigger('input');
        this.updated = true;
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;
      var value = event.target.value;
      if (this.props.router.state.mode === "route") {
        this.props.router.setState({
          detourRoute: value
        }, this.props.router.recalculateRoute);
      } else {
        this.props.router.setState({
          detourArea: value
        }, function () {
          _this2.props.router.performArea(_this2.props.router.state.areaValue);
        });
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-layer-selection.jsx":
/*!***************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-layer-selection.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterLayerSelection = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterLayerSelection = exports.RouterLayerSelection = /*#__PURE__*/function (_Component) {
  function RouterLayerSelection(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterLayerSelection);
    _this = _callSuper(this, RouterLayerSelection, [props]);
    _this.setLayer = _this.setLayer.bind(_this);
    _this.setLayerValue = _this.setLayerValue.bind(_this);
    _this.setLayerOrValue = _this.setLayerOrValue.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(RouterLayerSelection, _Component);
  return (0, _createClass2["default"])(RouterLayerSelection, [{
    key: "setLayer",
    value: function setLayer(event) {
      var layer = event.target.value;
      this.props.router.setLayer(parseInt(layer, 10));
    }
  }, {
    key: "setLayerValue",
    value: function setLayerValue(event) {
      var value = event.target.value;
      this.props.router.setLayerValue(value);
    }
  }, {
    key: "setLayerOrValue",
    value: function setLayerOrValue(event) {
      var value = JSON.parse(event.target.value);
      var currentLayer = this.props.router.state.mode === "route" ? this.props.router.state.layerRoute : this.props.router.state.layerArea;
      if (parseInt(value.id) !== parseInt(currentLayer)) {
        this.props.router.setLayer(parseInt(value.id, 10));
      }
      this.props.router.setLayerValue(value.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var defaultLayer = 0;
      var arrLayers = scope.props.router.objLayers;
      var layerValueSelection = "";
      if (!this.props.router.props.mapController.data.layerChanger) {
        if (this.props.router.state.mode === "route") {
          defaultLayer = this.props.router.state.layerRoute;
        } else if (this.props.router.state.mode === "area") {
          defaultLayer = this.props.router.state.layerArea;
        }
        if (this.props.layers && Object.keys(this.props.layers[defaultLayer]).length > 1) {
          layerValueSelection = /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-layer-value-selection"
          }, Object.keys(this.props.layers[defaultLayer]).map(function (name) {
            return /*#__PURE__*/_react["default"].createElement("button", {
              className: _this2.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive",
              onMouseUp: _this2.setLayerValue,
              key: _this2.props.layers[defaultLayer][name].mapLabel,
              value: name,
              title: name
            }, name);
          }));
        }
        if (this.props.layers && Object.keys(this.props.layers).length > 1) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("select", {
            className: "c4g-router-layer-selection",
            onChange: this.setLayer,
            value: defaultLayer
          }, Object.keys(this.props.layers).map(function (id) {
            var layer = arrLayers[id].layerData;
            return /*#__PURE__*/_react["default"].createElement("option", {
              key: id,
              value: id
            }, layer.name);
          })), layerValueSelection);
        } else {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, layerValueSelection);
        }
      } else {
        if (this.props.router.state.mode === "route") {
          defaultLayer = JSON.stringify({
            id: this.props.router.state.layerRoute,
            name: this.props.router.state.layerValueRoute
          });
        } else if (this.props.router.state.mode === "area") {
          defaultLayer = JSON.stringify({
            id: this.props.router.state.layerArea,
            name: this.props.router.state.layerValueArea
          });
        }
        var options = [];
        if (Object.keys(this.props.layers).length > 1) {
          options = Object.keys(this.props.layers).map(function (id) {
            var layer = arrLayers[id].layerData;
            if (Object.keys(_this2.props.layers[id]).length > 1) {
              return /*#__PURE__*/_react["default"].createElement("optgroup", {
                key: id,
                style: {
                  color: "var(--main-color)"
                },
                label: layer.name
              }, Object.keys(_this2.props.layers[id]).map(function (name) {
                var option = _this2.props.layers[id][name];
                return /*#__PURE__*/_react["default"].createElement("option", {
                  key: name,
                  style: {
                    color: "var(--main-color)"
                  },
                  value: JSON.stringify({
                    id: id,
                    name: name
                  })
                }, name);
              }));
            } else {
              return Object.keys(_this2.props.layers[id]).map(function (name) {
                var option = _this2.props.layers[id][name];
                return /*#__PURE__*/_react["default"].createElement("option", {
                  key: name,
                  style: {
                    color: "var(--main-color)"
                  },
                  value: JSON.stringify({
                    id: id,
                    name: name
                  })
                }, name);
              });
            }
          });
        } else {
          options = Object.keys(this.props.layers).map(function (id) {
            var layer = arrLayers[id].layerData;
            return Object.keys(_this2.props.layers[id]).map(function (name) {
              var option = _this2.props.layers[id][name];
              return /*#__PURE__*/_react["default"].createElement("option", {
                key: name,
                style: {
                  color: "var(--main-color)"
                },
                value: JSON.stringify({
                  id: id,
                  name: name
                })
              }, name);
            });
          });
        }
        return /*#__PURE__*/_react["default"].createElement("select", {
          className: "c4g-router-layer-selection",
          onChange: this.setLayerOrValue,
          value: defaultLayer
        }, options);
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*****************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterProfileSelection = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterProfileSelection(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterProfileSelection);
    _this = _callSuper(this, RouterProfileSelection, [props]);
    _this.setProfile = _this.setProfile.bind(_this);
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "roadbike",
      4: "bike",
      5: "mountainbike",
      6: "bike",
      7: "electricbike",
      8: "foot",
      9: "wander",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "motorbike"
    };
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(props.router.props.mapController.data);
    _this.profileLang = {
      "car": _this.languageConstants.CAR,
      "hgv": _this.languageConstants.TRUCK,
      "bike": _this.languageConstants.BIKE,
      "roadbike": _this.languageConstants.ROADBIKE,
      "mountainbike": _this.languageConstants.MOUNTAINBIKE,
      "electricbike": _this.languageConstants.ELECTRICBIKE,
      "foot": _this.languageConstants.WALK,
      "wander": _this.languageConstants.WANDER,
      "wheelchair": _this.languageConstants.WHEEL,
      "scooter": _this.languageConstants.SCOOT,
      "motorbike": _this.languageConstants.MOTORBIKE
    };
    _this.state = {
      showPopup: !!props.router.mapData.router_profiles_initial
    };
    return _this;
  }
  (0, _inherits2["default"])(RouterProfileSelection, _Component);
  return (0, _createClass2["default"])(RouterProfileSelection, [{
    key: "setProfile",
    value: function setProfile(profile) {
      this.props.router.setProfile(parseInt(profile.id, 10));
      if (!this.props.router.mapData.router_profiles_initial) {
        this.setState({
          showPopup: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.profiles.length === 1) {
        return null;
      } else {
        if (this.state.showPopup) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return /*#__PURE__*/_react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === parseInt(_this2.props.currentProfile, 10) ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: true
              });
            },
            className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
            key: this.props.currentProfile,
            title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
          }));
        }
      }
    }
  }, {
    key: "showProfileSelection",
    value: function showProfileSelection() {
      this.setState({
        showPopup: true
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItY29udHJvbHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLEtBQUEsR0FBQUQsbUJBQUE7QUFBOEIsU0FBQUUseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFKLHdCQUFBSSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFB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LGtCQUFrQixDQUFDMUksSUFBSSxDQUFDckssRUFBRSxDQUFDO1lBQUUsQ0FBQyxDQUFDO1VBQzNGLENBQUMsQ0FDRSxDQUFDO1FBRVYsQ0FBQyxNQUFNO1VBQ0wsb0JBQVF0RixNQUFBLFlBQUFtSCxhQUFBO1lBQUtDLFNBQVMsRUFBQztVQUE0QixnQkFDakRwSCxNQUFBLFlBQUFtSCxhQUFBO1lBQVFFLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBO2NBQUEsT0FBUXBELE1BQUksQ0FBQ0YsUUFBUSxDQUFDO2dCQUFDbVYsU0FBUyxFQUFFO2NBQUksQ0FBQyxDQUFDO1lBQUEsQ0FBQztZQUFDOVIsU0FBUyxFQUFFLHFCQUFxQixHQUFHLElBQUksQ0FBQ2lSLGtCQUFrQixDQUFDLElBQUksQ0FBQzlWLEtBQUssQ0FBQ3FSLGNBQWMsQ0FBQyxHQUFHLGFBQWM7WUFDekp4USxHQUFHLEVBQUUsSUFBSSxDQUFDYixLQUFLLENBQUNxUixjQUFlO1lBQUN6SixLQUFLLEVBQUUsSUFBSSxDQUFDbU8sV0FBVyxDQUFDLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDOVYsS0FBSyxDQUFDcVIsY0FBYyxDQUFDO1VBQUUsQ0FBQyxDQUNsSCxDQUFDO1FBQ1I7TUFFRjtJQUNGO0VBQUM7SUFBQXhRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnVyxvQkFBb0JBLENBQUEsRUFBRztNQUNyQixJQUFJLENBQUN0VixRQUFRLENBQUM7UUFBQ21WLFNBQVMsRUFBRTtNQUFJLENBQUMsQ0FBQztJQUNsQztFQUFDO0FBQUEsRUEvRWlEcFAsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1hdXRvY29tcGxldGUtaW5wdXQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZGV0b3VyLXNsaWRlci5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWxheWVyLXNlbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGVydCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgIGZpZWxkLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgbGV0IHBlcmZvcm1TZWFyY2hDYWxsYmFjaztcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKFwiYXJlYVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiYXJlYVZhbHVlXCI7XG4gICAgICAgICAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKCdGcm9tJykgIT09IC0xKSA/IFwiZnJvbVZhbHVlXCIgOiBcInRvVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBwZXJmb3JtU2VhcmNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtVmlhUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIHBlcmZvcm1TZWFyY2hDYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGVudGVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdF90aGlzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS5sZW5ndGggPT09IDAgJiYgIWV2ZW50LmtleUNvZGUpIHsgLy9kZWxldGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zLmRlbGV0ZUZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXIgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLmRlbGV0ZUZ1bmN0aW9uKGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY291bnRlciA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDQwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGUuY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSA/IFwiYXJlYVZhbHVlXCIgOiAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZignRnJvbScpICE9PSAtMSkgPyBcImZyb21WYWx1ZVwiIDogXCJ0b1ZhbHVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm9ialNldHRpbmdzLnByb3h5VXJsIHx8ICFzY29wZS5wcm9wcy5vYmpTZXR0aW5ncy5rZXlBdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlQWRkcmVzcygkKFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpLnZhbCgpLCBcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgbGlzdEF1dG9jb21wbGV0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckFkZHJlc3NlcyAmJiB0aGlzLnN0YXRlLmFyckFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEFkcmVzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtQWRkcmVzcyA9IHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpY2tFdmVudCA9IChzZWxmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjXCIgKyBzZWxmLnByb3BzLmNzc0lkKS52YWwoZWxlbUFkZHJlc3MubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2VsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIkZyb21cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnByb3BzLmNzc0lkLmluY2x1ZGVzKFwiVG9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIk92ZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5hZGRPdmVyUG9pbnQoZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHNlbGYucHJvcHMuaW5kZXgsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYucHJvcHMuY3NzSWQuaW5jbHVkZXMoXCJhcmVhXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3NlczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtcImM0Zy1hdXRvY29tcGxldGUtaXRlbVwifSBvbk1vdXNlVXA9eyhldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50KHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICB9KX0+e2VsZW1BZGRyZXNzLm5hbWV9PC9saT47XG4gICAgICAgICAgICAgICAgICAgIGxpc3RBZHJlc3Nlcy5wdXNoKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0QXV0b2NvbXBsZXRlID0gPHVsIGNsYXNzTmFtZT17XCJjNGctYXV0b2NvbXBsZXRlXCJ9PntsaXN0QWRyZXNzZXN9PC91bD5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjNGctYXV0b2NvbXBsZXRlLXdyYXBwZXInfSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXt0aGlzLnByb3BzLmNzc0lkfSB0eXBlPVwic2VhcmNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbktleURvd249e2VudGVyTGlzdGVuZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICB7bGlzdEF1dG9jb21wbGV0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldENlbnRlcihjZW50ZXIpIHtcbiAgICAgICAgdGhpcy5vYmpTZXR0aW5ncy5jZW50ZXIgPSBjZW50ZXI7XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlQWRkcmVzcyhpbnB1dCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHNjb3BlLnByb3BzLm9ialNldHRpbmdzO1xuICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNlbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iakNlbnRlciA9IHNldHRpbmdzLmNlbnRlcigpO1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IG9iakNlbnRlclswXSArIFwiLFwiICsgb2JqQ2VudGVyWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXJbMF0gKyBcIixcIiArIHNldHRpbmdzLmNlbnRlclsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5iQm94KSB7XG4gICAgICAgICAgICBjZW50ZXIgPSAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiArIFwiLFwiICsgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0ICsgXCImY2VudGVyPVwiICsgY2VudGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtIGluIHNldHRpbmdzLmdlb3NlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MucmVzdWx0Q291bnQpIHtcbiAgICAgICAgICAgIHVybCArPSBcIiZsaW1pdD1cIiArIHNldHRpbmdzLnJlc3VsdENvdW50O1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IHNldHRpbmdzLmNlbnRlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYkJveCkge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IFsocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiwgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuYkJveCAmJiBzZXR0aW5ncy5iQm94WzBdICYmIGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUgJiYgY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luQm91bmRpbmdCb3goZGF0YVtpXS5sb24sIGRhdGFbaV0ubGF0LCBzZXR0aW5ncy5iQm94KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGNlbnRlclswXSAtIGRhdGFbaV0ubG9uKSAqIChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKyAoY2VudGVyWzFdIC0gZGF0YVtpXS5sYXQpICogKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3QnOiBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogZGF0YVtpXS5kaXNwbGF5X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5zb3J0KChhLCBiKSA9PiBhLmRpc3QgLSBiLmRpc3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBkYXRhW2ldLmRpc3BsYXlfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IGFyckFkZHJlc3Nlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0luQm91bmRpbmdCb3gobG9uZ2l0dWRlLCBsYXRpdHVkZSwgYmJveCkge1xuICAgICAgICBpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChsb25naXR1ZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGF0aXR1ZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGxhdGl0dWRlID0gcGFyc2VGbG9hdChsYXRpdHVkZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJib3hbMF0gPCBsb25naXR1ZGUgJiZcbiAgICAgICAgICAgIGxvbmdpdHVkZSA8IGJib3hbMl0gJiZcbiAgICAgICAgICAgIGJib3hbMV0gPCBsYXRpdHVkZSAmJlxuICAgICAgICAgICAgbGF0aXR1ZGUgPCBiYm94WzNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gKHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIpICsgXCItYnV0dG9uLVwiICsgKHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiKSArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHByb3BzLnRpdGxlO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgdGhpcy5jbGlja0NvbnRyb2wpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiB0aGlzLmVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRvY29tcGxldGVJbnB1dH0gZnJvbSBcIi4vYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3hcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNvbnRlbnQgPSB0aGlzLnJlbW92ZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbFBvc2l0aW9uICYmIChwcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIgfHwgcHJvcHMubmFtZSA9PT0gXCJhcmVhSW5wdXRcIikpIHtcbiAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbERlc3RpbmF0aW9uICYmIHByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIGxldCBzZXRUb0NlbnRlciA9IChkYXRhKT0+IHtcbiAgICAgICAgbGV0IGNlbnRlciA9IHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxvbmdpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzBdO1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubGF0aXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVsxXTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaChzZXRUb0NlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwb3NpdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMud2l0aFBvc2l0aW9uKSB7XG4gICAgICBwb3NpdGlvbkJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYzRnLXJvdXRlci1wb3NpdGlvblwiIG9uTW91c2VVcD17dGhpcy5nZXRQb3NpdGlvbn0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVfUE9TSVRJT059Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICB7cG9zaXRpb25CdXR0b259XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0bi1wcmltYXJ5IGM0Zy1yb3V0ZXItaW5wdXQtY2xlYXJcIn0gb25Nb3VzZVVwPXt0aGlzLnJlbW92ZUNvbnRlbnR9IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJFTU9WRV9BRERSRVNTfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlQ29udGVudChldmVudCkge1xuICAgIGpRdWVyeShcIiNcIiArIHRoaXMucHJvcHMuY3NzSWQpLnZhbCgnJyk7XG4gICAgdGhpcy5wcm9wcy5jbGVhcklucHV0KGV2ZW50KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaGFuZGxlTmV3UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBzY29wZS5oYW5kbGVQb3NpdGlvbihwb3MpO1xuICAgIH07XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVOZXdQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgaW5wdXQgY29vcmRpbmF0ZXMgYW5kIGV4ZWN1dGVzIHRoZSByZXZlcnNlIHNlYXJjaC4gT24gc3VjY2VzcywgdGhlIHJlc3VsdCBsb2NhdGlvbiBpcyBpbnNlcnRlZCBpbiB0aGVcbiAgICogZ2l2ZW4gaW5wdXQgZmllbGQgYW5kIHRoZSBnaXZlbiBwcm9wZXJ0eSBvZiB0aGlzLlxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcbiAgICovXG4gIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGNvb3JkcyA9IGNvb3JkaW5hdGVzLmNvb3JkcztcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlRnJvbShjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwib3ZlclZhbHVlXCIpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlVG8oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJhcmVhSW5wdXRcIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuXG5cbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImJ0bi1wcmltYXJ5IGM0Zy1yb3V0ZXItaW5wdXQtb3ZlciBjNGctcm91dGVyLWlucHV0LW92ZXItXCIgKyBpdGVtfSBuYW1lPXtcIm92ZXJQb2ludC1cIiArIGl0ZW19IGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9e1wicm91dGluZ092ZXItXCIgKyBpdGVtfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gdmFsdWU9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0ga2V5PXtpdGVtfSBpbmRleD17aXRlbX0gY2xlYXJJbnB1dD17KCkgPT4ge3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc1tpdGVtXS5kZWxldGVGdW5jdGlvbigpO319Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGZyb21DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IHRvQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCBhcmVhQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgYXJlYUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgICAgdG9DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUucHJvcHMub3ZlclNldHRpbmdzLnN3YXBQb2ludHMoKTtcbiAgICAgIGNvbnN0IHRtcEZyb20gPSBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKCk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwodG1wRnJvbSk7XG4gICAgfTtcbiAgICBsZXQgc3dhcEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuc3dpdGNoVGFyZ2V0cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dhcEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1zd2l0Y2hcIiBvbk1vdXNlVXA9e3N3YXBGdW5jdGlvbn0gLz47XG4gICAgfVxuICAgIGxldCBvdmVyQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW92ZXJcIiBvbk1vdXNlVXA9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJGdW5jdGlvbn0gLz47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMubGVuZ3RoICsgMTtcblxuICAgIGlucHV0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1mcm9tXCIgKyBmcm9tQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZST019IGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdGcm9tXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5mcm9tRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAge292ZXJGb3JtfVxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC10b1wiICsgdG9DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdUb1wiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX1RPfSBrZXk9e2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ1RvXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy50b0Z1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1hcmVhXCIgKyBhcmVhQ2xzQWRkaXRpb259IG5hbWU9XCJhcmVhSW5wdXRcIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9DRU5URVJ9IGtleT17aWR4ICsgMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJhcmVhSW5wdXRcIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmFyZWFGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD47XG5cbiAgICBsZXQgZGV0YWlscyA9IFwiXCI7XG4gICAgbGV0IGZlYXR1cmVTZWFyY2hDb250cm9scyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93RmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllcnMpIHtcbiAgICAgIGZlYXR1cmVTZWFyY2hDb250cm9scyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFJvdXRlckxheWVyU2VsZWN0aW9uIGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFjdGl2ZUxheWVyVmFsdWU9e3RoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgIDxSb3V0ZXJEZXRvdXJTbGlkZXIgbWluPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWlufSBtYXg9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5tYXh9IHZhbHVlPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMudmFsdWV9IHJvdXRlcj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnJvdXRlcn0vPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge292ZXJCdXR0b259XG4gICAgICAgIHtzd2FwQnV0dG9ufVxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGxldCBzdGFydEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZVN0YXJ0QnV0dG9uKSB7XG4gICAgICBzdGFydEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZS1zZWFyY2gtc3RhcnRcIn0gb25Nb3VzZVVwPXt0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlfT57dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJUX1JPVVRFfTwvYnV0dG9uPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHtzdGFydEJ1dHRvbn1cbiAgICAgICAgey8qe2RldGFpbEJ1dHRvbn0qL31cbiAgICAgICAge2RldGFpbHN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiXG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmNvbnN0IFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCcpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyQ29udHJvbHMgZXh0ZW5kcyBIb3Jpem9udGFsUGFuZWwge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZS5yb3V0ZXIgPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICB0aGlzLnN0YXRlLnNob3dGb3JtID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0Um91dGVNb2RlID0gdGhpcy5zZXRSb3V0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEFyZWFNb2RlID0gdGhpcy5zZXRBcmVhTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwicm91dGVyXCIpO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYgJiYgdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0Um91dGVNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcInJvdXRlXCIpO1xuICB9XG5cbiAgc2V0QXJlYU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwiYXJlYVwiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiYzRnLXJvdXRlci1jb250ZW50XCIgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW4gXCIgOiBcIiBjNGctY2xvc2UgXCIpICsgdGhpcy5wcm9wcy5tb2RlO1xuICAgIC8vIHByb3BhZ2F0ZSBvcGVuIHN0YXRlIGRvd24gdG8gY2hpbGQgY29tcG9uZW50c1xuICAgIGxldCBvcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuICAgIGxldCBtb2RlU3dpdGNoZXIgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Zvcm0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgICA8Um91dGVyUHJvZmlsZVNlbGVjdGlvbiBwcm9maWxlcz17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUucHJvZmlsZXN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5jdXJyZW50UHJvZmlsZX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPFJvdXRlckFkZHJlc3NJbnB1dCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWlucHV0LWNvbnRlbnRcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB3aXRoUG9zaXRpb249e3RydWV9IHN3aXRjaFRhcmdldHM9e3RoaXMucHJvcHMuc3dpdGNoVGFyZ2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjdXJyZW50UHJvZmlsZT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gZW5hYmxlT3ZlclBvaW50cz17dGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gbW9kZT17dGhpcy5wcm9wcy5tb2RlfSBvcGVuPXtvcGVufSBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByZXNldEZ1bmN0aW9ucz17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSB0b0FkZHJlc3M9e3RoaXMucHJvcHMudG9BZGRyZXNzfSBhcmVhQWRkcmVzcz17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gc2xpZGVyT3B0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9IG92ZXJTZXR0aW5ncz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGVyXCJ9IGhlYWRlcj17aGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1leHRlbmRlZC1vcHRpb25zXCJ9IGRldGFpbEJ0bkNiPXt0aGlzLnRvZ2dsZURldGFpbHN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uXCJ9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgMCArIFwicHhcIik7XG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKTtcbiAgICBsZXQgdG9wVmFsdWUgPSAwO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdG9wVmFsdWUgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCB0b3BWYWx1ZSArIFwicHhcIik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbChldnQpIHtcbiAgICBsZXQgaGlkZGVuID0gdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLm9wZW4pe1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c30gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnRzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEZXRvdXJTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGVsZW1lbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgIG91dHB1dFxuICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGVsZW1lbnQudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGVsZW1lbnQudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnRyaWdnZXIoJ2lucHV0Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBkZXRvdXJFbGVtZW50ID0gbnVsbFxuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmRldG91ckVsZW1lbnQpIHtcbiAgICAgIGRldG91ckVsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWRldG91ci1yYW5nZVwifT5cbiAgICAgICAgPHA+e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfREVUT1VSfTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEV9XG4gICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IHN0ZXA9ezAuNX0vPlxuICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5PVVRQVVRfREVUT1VSfT57dGhpcy5wcm9wcy52YWx1ZSArIFwiIGttXCJ9PC9vdXRwdXQ+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGFyck9wdGlvbnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiPyB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJyRGV0b3VyT3B0aW9uc1JvdXRlIDogdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyckRldG91ck9wdGlvbnNBcmVhO1xuICAgICAgbGV0IG9wdGlvbnMgPSBhcnJPcHRpb25zLm1hcCgoZWxlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2VsZW19IHZhbHVlPXtlbGVtfT57ZWxlbX0ga208L29wdGlvbj5cbiAgICAgIH0pO1xuICAgICAgZGV0b3VyRWxlbWVudCA9IDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLWRldG91ci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfT57b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PjtcbiAgICB9XG4gICAgcmV0dXJuIGRldG91ckVsZW1lbnQ7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAoIXRoaXMudXBkYXRlZCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgICBvdXRwdXRcbiAgICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiB2YWx1ZX0sIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogdmFsdWV9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyTGF5ZXJTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMYXllciA9IHRoaXMuc2V0TGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyVmFsdWUgPSB0aGlzLnNldExheWVyVmFsdWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyT3JWYWx1ZSA9IHRoaXMuc2V0TGF5ZXJPclZhbHVlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRMYXllcihldmVudCkge1xuICAgIGxldCBsYXllciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludChsYXllciwgMTApKTtcbiAgfVxuXG4gIHNldExheWVyVmFsdWUoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgc2V0TGF5ZXJPclZhbHVlIChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgY3VycmVudExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZSA6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICBpZiAocGFyc2VJbnQodmFsdWUuaWQpICE9PSBwYXJzZUludChjdXJyZW50TGF5ZXIpKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludCh2YWx1ZS5pZCwgMTApKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZS5uYW1lKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRMYXllciA9IDA7XG5cbiAgICBjb25zdCBhcnJMYXllcnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIub2JqTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlU2VsZWN0aW9uID0gXCJcIjtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllckNoYW5nZXIpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJBcmVhO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5sZW5ndGggPiAxKSkge1xuICAgICAgICBsYXllclZhbHVlU2VsZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1sYXllci12YWx1ZS1zZWxlY3Rpb25cIn0+XG4gICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyVmFsdWUgPT09IG5hbWUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5zZXRMYXllclZhbHVlfSBrZXk9e3RoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl1bbmFtZV0ubWFwTGFiZWx9IHZhbHVlPXtuYW1lfSB0aXRsZT17bmFtZX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWxheWVyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNldExheWVyfSB2YWx1ZT17ZGVmYXVsdExheWVyfT5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17aWR9PntsYXllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAge2xheWVyVmFsdWVTZWxlY3Rpb259XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+e2xheWVyVmFsdWVTZWxlY3Rpb259PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gSlNPTi5zdHJpbmdpZnkoe2lkOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclJvdXRlLCBuYW1lOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGV9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgICBkZWZhdWx0TGF5ZXIgPSBKU09OLnN0cmluZ2lmeSh7aWQ6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYSwgbmFtZTogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9KVxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaWRdLmxheWVyRGF0YTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbaWRdKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gPG9wdGdyb3VwIGtleT17aWR9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IGxhYmVsPXtsYXllci5uYW1lfT5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2lkXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMucHJvcHMubGF5ZXJzW2lkXVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e25hbWV9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IHZhbHVlPXtKU09OLnN0cmluZ2lmeSh7aWQ6IGlkLCBuYW1lOiBuYW1lfSl9PntuYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvb3B0Z3JvdXA+O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tpZF0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5wcm9wcy5sYXllcnNbaWRdW25hbWVdO1xuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e25hbWV9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IHZhbHVlPXtKU09OLnN0cmluZ2lmeSh7aWQ6IGlkLCBuYW1lOiBuYW1lfSl9PntuYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2lkXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5wcm9wcy5sYXllcnNbaWRdW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtuYW1lfSBzdHlsZT17e2NvbG9yOiBcInZhcigtLW1haW4tY29sb3IpXCJ9fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoe2lkOiBpZCwgbmFtZTogbmFtZX0pfT57bmFtZX08L29wdGlvbj5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllck9yVmFsdWV9IHZhbHVlPXtkZWZhdWx0TGF5ZXJ9PlxuICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2VvbSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQXV0b2NvbXBsZXRlSW5wdXQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwibGlzdGVuZXJSZWdpc3RlcmVkIiwic3RhdGUiLCJhcnJBZGRyZXNzZXMiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIl90aGlzMiIsInNjb3BlIiwic3VibWl0RnVuY3Rpb24iLCJmaWVsZCIsIiQiLCJjc3NJZCIsInRyaWdnZXIiLCJwZXJmb3JtU2VhcmNoQ2FsbGJhY2siLCJpbmRleE9mIiwicm91dGVyIiwicGVyZm9ybUFyZWEiLCJwZXJmb3JtVmlhUm91dGUiLCJwZXJmb3JtU2VhcmNoIiwiZW50ZXJMaXN0ZW5lciIsIm9wdF90aGlzIiwia2V5Q29kZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWwiLCJsZW5ndGgiLCJvYmpGdW5jdGlvbnMiLCJkZWxldGVGdW5jdGlvbiIsImlkIiwiaW5kZXgiLCJjb3VudGVyIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJvYmpTZXR0aW5ncyIsInByb3h5VXJsIiwia2V5QXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQWRkcmVzcyIsImxpc3RBdXRvY29tcGxldGUiLCJsaXN0QWRyZXNzZXMiLCJfbG9vcCIsImVsZW1BZGRyZXNzIiwiY2xpY2tFdmVudCIsInNlbGYiLCJqUXVlcnkiLCJuYW1lIiwicG9pbnQiLCJQb2ludCIsInBvcyIsImluY2x1ZGVzIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsImFkZE92ZXJQb2ludCIsInNldEFyZWFQb2ludCIsImxpc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VVcCIsInB1c2giLCJyZWYiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwib25LZXlEb3duIiwiYXV0b0NvbXBsZXRlIiwic2V0Q2VudGVyIiwiY2VudGVyIiwiaW5wdXQiLCJjc3NDbGFzcyIsInNldHRpbmdzIiwib2JqQ2VudGVyIiwiYkJveCIsInBhcnNlRmxvYXQiLCJ1cmwiLCJnZW9zZWFyY2hQYXJhbXMiLCJwYXJhbSIsInJlc3VsdENvdW50IiwiYWpheCIsImRvbmUiLCJkYXRhIiwiX3RoaXMzIiwiZGlzcGxheV9uYW1lIiwiX2xvb3AyIiwiaXNJbkJvdW5kaW5nQm94IiwibG9uIiwibGF0IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZWxlbWVudCIsImZvdW5kSW5kZXgiLCJmaW5kSW5kZXgiLCJmaW5kRWxlbWVudCIsInNvcnQiLCJiIiwiZGlzdCIsIl9sb29wMyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiYmJveCIsIkNvbXBvbmVudCIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIkhvcml6b250YWxQYW5lbCIsImJ1dHRvbiIsInRpdGxlIiwiZGlyZWN0aW9uIiwiYXBwZW5kQ2hpbGQiLCJtYXBDb250cm9sbGVyIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJjbGlja0NvbnRyb2wiLCJvbiIsImNvbnRyb2wiLCJDb250cm9sIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjc3NDb25zdGFudHMiLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIk9MX1VOU0VMRUNUQUJMRSIsInN0eWxlIiwidG9wIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsImJvdHRvbSIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiYWRkQ29udGVudCIsImNvbnRlbnQiLCJfYzRnQXV0b2NvbXBsZXRlSW5wdXQiLCJfcm91dGluZ0NvbnN0YW50STE4biIsIl9wcm9qIiwiUm91dGVyQWRkcmVzc0ZpZWxkIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJpbml0aWFsRGVzdGluYXRpb24iLCJzZXRUb0NlbnRlciIsIm1hcCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJjb29yZGluYXRlcyIsImNvb3JkcyIsInRyYW5zZm9ybSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImh0bWxGb3IiLCJsYWJlbCIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwiUkVNT1ZFX0FERFJFU1MiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVjYWxjdWxhdGVSb3V0ZSIsIl9jNGdSb3V0ZXJBZGRyZXNzRmllbGQiLCJfYzRnUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsIl9jNGdSb3V0ZXJMYXllclNlbGVjdGlvbiIsIl9jNGdSb3V0ZXJEZXRvdXJTbGlkZXIiLCJfcm91dGluZ0NvbnN0YW50STE4bkRlIiwiX3JvdXRpbmdDb25zdGFudEkxOG5FbiIsIlJvdXRlckFkZHJlc3NJbnB1dCIsImxhbmciLCJsYW5nQ29uc3RhbnRzIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImZyb21DbHNBZGRpdGlvbiIsInRvQ2xzQWRkaXRpb24iLCJhcmVhQ2xzQWRkaXRpb24iLCJzd2FwRnVuY3Rpb24iLCJzd2FwUG9pbnRzIiwidG1wRnJvbSIsInN3YXBCdXR0b24iLCJzd2l0Y2hUYXJnZXRzIiwib3ZlckJ1dHRvbiIsIm92ZXJGdW5jdGlvbiIsImlkeCIsIkZyYWdtZW50IiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwiUm91dGVyTGF5ZXJTZWxlY3Rpb24iLCJhY3RpdmVMYXllclZhbHVlIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJtaW4iLCJzbGlkZXJPcHRpb25zIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJfYzRnSG9yaXpvbnRhbFBhbmVsIiwiX2M0Z1JvdXRlckFkZHJlc3NJbnB1dCIsIl9jNGdUaXRsZWJhciIsIlJvdXRlclByb2ZpbGVTZWxlY3Rpb24iLCJsYXp5IiwiUm91dGVyQ29udHJvbHMiLCJfSG9yaXpvbnRhbFBhbmVsIiwic2hvd0Zvcm0iLCJzZXRSb3V0ZU1vZGUiLCJzZXRBcmVhTW9kZSIsImFyckNvbXBvbmVudHMiLCJyb3V0ZXJfZGl2Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0TW9kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibW9kZVN3aXRjaGVyIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsInByb2ZpbGVzIiwiY3VycmVudFByb2ZpbGUiLCJUaXRsZWJhciIsIndyYXBwZXJDbGFzcyIsImhlYWRlciIsImhlYWRsaW5lIiwiaGVhZGVyQ2xhc3MiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwidG9nZ2xlRGV0YWlscyIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwidG9wVmFsdWUiLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0SGVpZ2h0Iiwic2V0T3BlbiIsInJvdXRlckNvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJldnQiLCJoaWRkZW4iLCJfcm91dGluZ0NvbnN0YW50cyIsIl9jNGdNYXBzVXRpbHMiLCJoYW5kbGVDaGFuZ2UiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsInJvdW5kIiwib3V0cHV0IiwibmV4dCIsImNzcyIsInRleHQiLCJ1c2VQZXJtYWxpbmsiLCJwZXJtYWxpbmsiLCJ1cGRhdGVMaW5rRnJhZ21lbnRzIiwiZGV0b3VyUm91dGUiLCJkZXRvdXJBcmVhIiwiYXJlYVZhbHVlIiwiZGV0b3VyRWxlbWVudCIsIlJPVVRFX0RFVE9VUiIsInN0ZXAiLCJPVVRQVVRfREVUT1VSIiwiYXJyT3B0aW9ucyIsImFyckRldG91ck9wdGlvbnNSb3V0ZSIsImFyckRldG91ck9wdGlvbnNBcmVhIiwib3B0aW9ucyIsImVsZW0iLCJvbkNoYW5nZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRMYXllciIsInNldExheWVyVmFsdWUiLCJzZXRMYXllck9yVmFsdWUiLCJsYXllciIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiY3VycmVudExheWVyIiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsImRlZmF1bHRMYXllciIsImFyckxheWVycyIsIm9iakxheWVycyIsImxheWVyVmFsdWVTZWxlY3Rpb24iLCJsYXllckNoYW5nZXIiLCJtYXBMYWJlbCIsImxheWVyRGF0YSIsInN0cmluZ2lmeSIsImNvbG9yIiwib3B0aW9uIiwic2V0UHJvZmlsZSIsInByb2ZpbGVUcmFuc2xhdGlvbiIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInNob3dQb3B1cCIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInNob3dQcm9maWxlU2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==