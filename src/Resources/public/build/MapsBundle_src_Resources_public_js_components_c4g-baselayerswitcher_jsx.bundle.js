"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-baselayerswitcher_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-baselayerswitcher.jsx":
/*!**********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \**********************************************************************************/
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
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-overlay-controls.jsx");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
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
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var BaselayerSwitcher = exports["default"] = /*#__PURE__*/function (_Component) {
  function BaselayerSwitcher(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BaselayerSwitcher);
    _this = _callSuper(this, BaselayerSwitcher, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_BASELAYER;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_BASELAYER;
    }
    element.className = "c4g-baselayer-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "baselayerswitcher";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.baselayerSwitcher = control;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    var baselayerLoaded = false;
    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function () {
        scope.setState({
          baselayerLoaded: true,
          currentBaselayer: props.mapController.state.activeBaselayerId
        });
      });
    }
    // state variables (every property that has influence on this component)
    _this.state = {
      open: props.open || false,
      className: props.className || "c4g-baselayerswitcher-panel",
      control: control,
      baselayerLoaded: baselayerLoaded,
      currentBaselayer: 0,
      baselayerFilter: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(BaselayerSwitcher, _Component);
  return (0, _createClass2["default"])(BaselayerSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getFilteredBaselayerIds",
    value: function getFilteredBaselayerIds() {
      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var ids = this.props.baselayerController.baselayerIds;
      var returnIds = [];
      if (this.state.baselayerFilter === "") {
        returnIds = ids;
      } else {
        for (var i = 0; i < ids.length; i++) {
          var baselayer = arrBaselayers[ids[i]];
          if (baselayer.name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
            returnIds.push(ids[i]);
          } else {
            // check if an overlay matches
            var overlays = baselayer.overlayController.arrOverlays;
            var overlayKeys = Object.keys(overlays);
            if (overlayKeys.length > 0) {
              for (var j = 0; j < overlayKeys.length; j++) {
                if (overlays[overlayKeys[j]].name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
                  returnIds.push(ids[i]);
                  break;
                }
              }
            }
          }
        }
      }
      return returnIds;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var baseLayerIds = this.getFilteredBaselayerIds();
      var filter = '';
      if (this.props.mapController.data.baselayerswitcher.filter) {
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-baselayer-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "c4g-baselayer-filter-field",
          type: "text",
          placeholder: "\uF002",
          onInput: function onInput() {
            _this2.filterBaselayers(_this2.value);
          }
        }));
      }
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-baselayer-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-baselayer-container").removeClass("c4g-open").addClass("c4g-close");
      }
      var scope = this;
      var headline = this.props.mapController.data.baselayerswitcher.label ? this.props.mapController.data.baselayerswitcher.label : "Basiskarten";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayer-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-baselayer-header",
        headerClass: "c4g-baselayer-headline",
        header: headline,
        closeBtnClass: "c4g-baselayer-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), filter, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayertree-content"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, baseLayerIds.map(function (element, index) {
        var baselayer = arrBaselayers[element];
        var currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
        var preview = "";
        if (baselayer.preview_image) {
          preview = /*#__PURE__*/_react["default"].createElement("img", {
            className: "c4g-baselayer-preview",
            src: baselayer.preview_image,
            alt: ""
          });
        }
        var overlays = "";
        if (baselayer.overlayController.arrOverlays.length > 0 && scope.state.currentBaselayer === element) {
          overlays = /*#__PURE__*/_react["default"].createElement(_c4gOverlayControls.OverlayControls, {
            overlayController: baselayer.overlayController
          });
        }
        var nameNode = baselayer.name;
        if (preview) {
          nameNode = /*#__PURE__*/_react["default"].createElement("span", null, baselayer.name);
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          className: preview ? "with-image" : "without-image"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          onMouseUp: function onMouseUp(event) {
            event.preventDefault();
            event.stopPropagation();
            scope.entryClick(element);
          },
          className: currentCls
        }, nameNode, preview), overlays);
      }))));
    }
  }, {
    key: "filterBaselayers",
    value: function filterBaselayers(fieldValue) {
      var filterValue = jQuery(".c4g-baselayer-filter-field").val();
      this.setState({
        baselayerFilter: filterValue
      });
    }
  }, {
    key: "entryClick",
    value: function entryClick(id) {
      this.props.baselayerController.showBaseLayer(id);
      this.props.changeActiveLayers(id);
      this.setState({
        currentBaselayer: id
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "BaselayerSwitcher" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "BaselayerSwitcher" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "BaselayerSwitcher");
        }
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-overlay-controls.jsx":
/*!*********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-overlay-controls.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OverlayControls = void 0;
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
var OverlayControls = exports.OverlayControls = /*#__PURE__*/function (_Component) {
  function OverlayControls(props) {
    (0, _classCallCheck2["default"])(this, OverlayControls);
    return _callSuper(this, OverlayControls, [props]);
  }
  (0, _inherits2["default"])(OverlayControls, _Component);
  return (0, _createClass2["default"])(OverlayControls, [{
    key: "render",
    value: function render() {
      var scope = this;
      var overlays = this.props.overlayController.arrOverlays;
      var callback = function callback(idx) {
        var value = jQuery("#c4g-overlay-toggle_" + idx).val();
        scope.props.overlayController.arrOverlays[idx].changeOpacity(value);
      };
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "c4g-overlays"
      }, overlays.map(function (element, index) {
        var entry = /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("span", null, element.name), /*#__PURE__*/_react["default"].createElement("input", {
          id: "c4g-overlay-toggle_" + index,
          className: "c4g-overlay-toggle",
          type: "range",
          onInput: function onInput() {
            return callback(index);
          },
          min: 0,
          max: 100,
          step: 10,
          defaultValue: element.opacity
        })));
        return entry;
      }));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlcl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUVBLElBQUFFLFlBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxtQkFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLGFBQUEsR0FBQUosbUJBQUE7QUFBd0MsU0FBQUsseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFQLHdCQUFBTyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUs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LGdCQUFHdEssTUFBQSxZQUFBbUQsYUFBQTtVQUFJMEMsR0FBRyxFQUFFbEI7UUFBTSxnQkFDekIzRSxNQUFBLFlBQUFtRCxhQUFBLHlCQUNFbkQsTUFBQSxZQUFBbUQsYUFBQSxlQUFPRixPQUFPLENBQUM2QixJQUFXLENBQUMsZUFDM0I5RSxNQUFBLFlBQUFtRCxhQUFBO1VBQU9rRyxFQUFFLEVBQUcscUJBQXFCLEdBQUUxRSxLQUFNO1VBQUNYLFNBQVMsRUFBRSxvQkFBcUI7VUFBQ3FELElBQUksRUFBQyxPQUFPO1VBQUNFLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBUTRDLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQztVQUFBLENBQUM7VUFDaEg0RixHQUFHLEVBQUUsQ0FBRTtVQUFDQyxHQUFHLEVBQUUsR0FBSTtVQUFDQyxJQUFJLEVBQUUsRUFBRztVQUFDQyxZQUFZLEVBQUV6SCxPQUFPLENBQUMwSDtRQUFRLENBQUMsQ0FDakUsQ0FDRCxDQUFDO1FBQ0wsT0FBT0wsS0FBSztNQUNkLENBQUMsQ0FDQyxDQUFDO0lBRVQ7RUFBQztBQUFBLEVBNUJrQ0osZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctb3ZlcmxheS1jb250cm9scy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge092ZXJsYXlDb250cm9sc30gZnJvbSBcIi4vYzRnLW92ZXJsYXktY29udHJvbHMuanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZWxheWVyU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0JBU0VMQVlFUjtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9CQVNFTEFZRVI7XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1iYXNlbGF5ZXItY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImJhc2VsYXllcnN3aXRjaGVyXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgbGV0IGJhc2VsYXllckxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmJhc2VsYXllckxvYWRlZCkge1xuICAgICAgYmFzZWxheWVyTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtiYXNlbGF5ZXJMb2FkZWQ6IHRydWUsIGN1cnJlbnRCYXNlbGF5ZXI6IHByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWR9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWJhc2VsYXllcnN3aXRjaGVyLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYmFzZWxheWVyTG9hZGVkOiBiYXNlbGF5ZXJMb2FkZWQsXG4gICAgICBjdXJyZW50QmFzZWxheWVyOiAwLFxuICAgICAgYmFzZWxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBnZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBpZHMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYmFzZWxheWVySWRzO1xuICAgIGxldCByZXR1cm5JZHMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybklkcyA9IGlkcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbaWRzW2ldXTtcbiAgICAgICAgaWYgKGJhc2VsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIG92ZXJsYXkgbWF0Y2hlc1xuICAgICAgICAgIGxldCBvdmVybGF5cyA9IGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICAgICAgICBsZXQgb3ZlcmxheUtleXMgPSBPYmplY3Qua2V5cyhvdmVybGF5cyk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3ZlcmxheUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG92ZXJsYXlzW292ZXJsYXlLZXlzW2pdXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JZHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgYmFzZUxheWVySWRzID0gdGhpcy5nZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpO1xuICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn1cbiAgICAgICAgICAgICAgIG9uSW5wdXQ9eygpID0+IHt0aGlzLmZpbHRlckJhc2VsYXllcnModGhpcy52YWx1ZSl9fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgPyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA6IFwiQmFzaXNrYXJ0ZW5cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGxpbmV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2ZpbHRlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllcnRyZWUtY29udGVudFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YmFzZUxheWVySWRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDbHMgPSBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50ID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgICBsZXQgcHJldmlldyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIucHJldmlld19pbWFnZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSA8aW1nIGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXByZXZpZXdcIn0gc3JjPXtiYXNlbGF5ZXIucHJldmlld19pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBvdmVybGF5cyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMubGVuZ3RoID4gMCAmJiBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXMgPSA8T3ZlcmxheUNvbnRyb2xzIG92ZXJsYXlDb250cm9sbGVyPXtiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXJ9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG5hbWVOb2RlID0gYmFzZWxheWVyLm5hbWU7XG4gICAgICAgICAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmFtZU5vZGUgPSA8c3Bhbj57YmFzZWxheWVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cHJldmlldyA/IFwid2l0aC1pbWFnZVwiIDogXCJ3aXRob3V0LWltYWdlXCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uTW91c2VVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5lbnRyeUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPXtjdXJyZW50Q2xzfT57bmFtZU5vZGV9XG4gICAgICAgICAgICAgICAge3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtvdmVybGF5c31cbiAgICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmaWx0ZXJCYXNlbGF5ZXJzKGZpZWxkVmFsdWUpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIikudmFsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmFzZWxheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZW50cnlDbGljayhpZCkge1xuICAgIHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5zaG93QmFzZUxheWVyKGlkKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUFjdGl2ZUxheWVycyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEJhc2VsYXllcjogaWR9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiQmFzZWxheWVyU3dpdGNoZXJcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJCYXNlbGF5ZXJTd2l0Y2hlclwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiQmFzZWxheWVyU3dpdGNoZXJcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3Qgb3ZlcmxheXMgPSB0aGlzLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICBsZXQgdmFsdWUgPSBqUXVlcnkoXCIjYzRnLW92ZXJsYXktdG9nZ2xlX1wiICsgaWR4KS52YWwoKTtcbiAgICAgIHNjb3BlLnByb3BzLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2lkeF0uY2hhbmdlT3BhY2l0eSh2YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheXNcIn0+XG4gICAgICAgIHtvdmVybGF5cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgZW50cnkgPSA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPHNwYW4+e2VsZW1lbnQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZCA9e1wiYzRnLW92ZXJsYXktdG9nZ2xlX1wiKyBpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5LXRvZ2dsZVwifSB0eXBlPVwicmFuZ2VcIiBvbklucHV0PXsoKSA9PiBjYWxsYmFjayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICBtaW49ezB9IG1heD17MTAwfSBzdGVwPXsxMH0gZGVmYXVsdFZhbHVlPXtlbGVtZW50Lm9wYWNpdHl9Lz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPjtcbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnRyb2wiLCJfYzRnTWFwc0kxOG4iLCJfYzRnT3ZlcmxheUNvbnRyb2xzIiwiX2M0Z01hcHNVdGlscyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJCYXNlbGF5ZXJTd2l0Y2hlciIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9CQVNFTEFZRVIiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImJhc2VsYXllclN3aXRjaGVyIiwiYmluZCIsImJhc2VsYXllckxvYWRlZCIsInByb3h5IiwiaG9va19iYXNlbGF5ZXJfbG9hZGVkIiwicHVzaCIsInNldFN0YXRlIiwiY3VycmVudEJhc2VsYXllciIsImFjdGl2ZUJhc2VsYXllcklkIiwiYmFzZWxheWVyRmlsdGVyIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJhcnJCYXNlbGF5ZXJzIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImlkcyIsImJhc2VsYXllcklkcyIsInJldHVybklkcyIsImxlbmd0aCIsImJhc2VsYXllciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm92ZXJsYXlzIiwib3ZlcmxheUNvbnRyb2xsZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlLZXlzIiwia2V5cyIsImoiLCJyZW5kZXIiLCJfdGhpczIiLCJiYXNlTGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJmaWx0ZXJCYXNlbGF5ZXJzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhlYWRsaW5lIiwibGFiZWwiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsIm1hcCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsInNyYyIsImFsdCIsIk92ZXJsYXlDb250cm9scyIsIm5hbWVOb2RlIiwib25Nb3VzZVVwIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiLCJjYWxsYmFjayIsImlkeCIsImNoYW5nZU9wYWNpdHkiLCJlbnRyeSIsIm1pbiIsIm1heCIsInN0ZXAiLCJkZWZhdWx0VmFsdWUiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==