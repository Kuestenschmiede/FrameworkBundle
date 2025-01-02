(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-router-feature-list_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list-item.jsx":
/*!*****************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterFeatureListItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _geom = _interopRequireDefault(__webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de */ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de.js"));
var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en */ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en.js"));
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
var RouterFeatureListItem = exports.RouterFeatureListItem = /*#__PURE__*/function (_Component) {
  function RouterFeatureListItem(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterFeatureListItem);
    _this = _callSuper(this, RouterFeatureListItem, [props]);
    var scope = _this;
    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind(_this);
    var element = null;
    if (props.layerValueRoute || props.layerValueArea) {
      element = _this.getElement();
    }
    _this.state = {
      element: element
    };
    return _this;
  }
  (0, _inherits2["default"])(RouterFeatureListItem, _Component);
  return (0, _createClass2["default"])(RouterFeatureListItem, [{
    key: "clickFeature",
    value: function clickFeature(event) {
      var scope = this;
      scope.props.setActiveId(scope.props.feature.id);
      var feature = scope.props.featureSource.getFeatureById(scope.props.feature.id);
      if (feature) {
        var extent = feature.getGeometry().getExtent();
        var width = jQuery(".c4g-sideboard.c4g-open").css('width');
        if (width) {
          width = width.split(".");
          width = Array.isArray(width) ? width[0] : width;
          width = parseInt(width) + 50;
        } else {
          width = 50;
        }
        var padding = [50, width, 50, 50];
        if (!scope.props.mapController.proxy.mapData.preventZoomResults) {
          // do not attempt to fit empty extents (Infinity also means empty in this context)
          if (extent && extent.length > 0 && extent[0] !== Infinity) {
            scope.props.mapController.map.getView().fit(extent, {
              padding: padding,
              maxZoom: scope.props.mapController.map.getView().getZoom() || 16
            });
          }
        } else {
          scope.props.mapController.map.getView().setCenter([extent[0], extent[1]]);
        }
      }
      // refresh css classes
      // console.log(jQuery(this));
      // this.props.setActiveId()
      // jQuery(this).parent().children('li').each(function (index, element) {
      //   jQuery(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
      // });
      // jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
      // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.state.element || this.props.layerValueRoute !== prevProps.layerValueRoute || this.props.layerValueArea !== prevProps.layerValueArea || this.props.feature !== prevProps.feature) {
        //only get popup if not already set or layer changes
        var element = this.getElement();
        if (element) {
          this.setState({
            element: this.getElement()
          });
        }
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      var scope = this;
      var currentFeature = null;
      if (this.props.featureSource && this.props.featureSource.forEachFeature) {
        this.props.featureSource.forEachFeature(function (feature) {
          if (feature.get('tid') === scope.props.feature.id) {
            currentFeature = feature;
          }
        });
      }
      var featureEntryContent = "";
      var objHook = null;
      if (currentFeature) {
        if (this.props.type === "overpass") {
          if (currentFeature.get('locstyle')) {
            var styleId = currentFeature.get('locstyle');
            var styleSrc = '';
            var locstyle = this.props.mapController.proxy.locationStyleController.arrLocStyles[styleId];
            if (locstyle && locstyle.locStyleArr) {
              styleSrc = locstyle.locStyleArr.styletype === "cust_icon" ? locstyle.locStyleArr.icon_src : locstyle.locStyleArr.styletype === "cust_icon_svg" ? locstyle.locStyleArr.svgSrc : "";
            }
            featureEntryContent = this.popupFunctions.fnStandardInfoPopup(currentFeature, styleSrc);
          }
        } else if (this.props.type === "notOverpass") {
          if (this.props.feature && this.props.feature.popup) {
            featureEntryContent = this.props.feature.popup;
          }
        } else {
          var layerValue = this.props.routeMode === "route" ? this.props.layerValueRoute : this.props.layerValueArea;
          objHook = {
            entry: "",
            id: this.props.counter,
            feature: this.props.feature,
            // values: values,
            labels: ['name'],
            activeLayerValue: layerValue
          };
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);
          featureEntryContent = objHook.entry;
        }
        var element = {
          __html: featureEntryContent + "<br>"
        };
        return element;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.element) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, this.props.feature.id), /*#__PURE__*/_react["default"].createElement("li", {
          ref: this.props.refProp,
          dangerouslySetInnerHTML: this.state.element,
          className: this.props.active ? "route-features-list-element c4g-active" : "route-features-list-element c4g-inactive",
          onMouseDown: this.clickFeature
        }));
      }
      return null;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list.jsx":
/*!************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../MapsBundle/node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list-item.jsx");
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
var RouterFeatureList = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterFeatureList(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterFeatureList);
    _this = _callSuper(this, RouterFeatureList, [props]);
    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.features = {};
    return _this;
  }
  (0, _inherits2["default"])(RouterFeatureList, _Component);
  return (0, _createClass2["default"])(RouterFeatureList, [{
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var sortedFeatures = this.sortFeatures();
      if (!sortedFeatures) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, this.props.header, this.props.switcher, /*#__PURE__*/_react["default"].createElement("ul", null, sortedFeatures.map(function (feature, index) {
        _this2.features[feature.id] = /*#__PURE__*/_react["default"].createRef();
        return /*#__PURE__*/_react["default"].createElement(_c4gRouterFeatureListItem.RouterFeatureListItem, {
          feature: feature,
          refProp: _this2.features[feature.id],
          type: _this2.props.featureList.type,
          active: _this2.props.activeId === feature.id,
          setActiveId: _this2.props.setActiveId,
          routeMode: _this2.props.routeMode,
          mapController: _this2.props.mapController,
          layerRoute: _this2.props.layerRoute,
          layerArea: _this2.props.layerArea,
          featureSource: _this2.props.featureSource,
          counter: index,
          key: index,
          layerValueRoute: _this2.props.layerValueRoute,
          layerValueArea: _this2.props.layerValueArea
        });
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.activeId !== this.props.activeId) {
        if (this.props.activeId) {
          var ref = this.features[this.props.activeId];
          // ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
          var scrollElement = document.querySelector(".c4g-router-result-container");
          scrollElement.scrollTo(0, ref.current.offsetTop - 100);
        }
      }
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures() {
      var routerLayers = this.props.mapController.data.routerLayers;
      var currentLayer = this.props.routeMode === "area" ? this.props.layerArea : this.props.layerRoute;
      var currentLayerValue = this.props.routeMode === "area" ? this.props.layerValueArea : this.props.layerValueRoute;
      if (!routerLayers) {
        return;
      }
      var currentLabelProp = routerLayers[currentLayer][currentLayerValue]['mapLabel'];
      var features = (0, _toConsumableArray2["default"])(this.props.featureList.features);
      return features.sort(function (a, b) {
        var aValues = a,
          bValues = b;
        if (a.tags && b.tags) {
          aValues = a.tags;
          bValues = b.tags;
        }
        if (isNaN(aValues[currentLabelProp])) {
          // string values
          return aValues[currentLabelProp] < bValues[currentLabelProp] ? -1 : 1;
        } else {
          // numeric values
          return aValues[currentLabelProp] - bValues[currentLabelProp];
        }
      });
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ../MapsBundle/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../MapsBundle/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../MapsBundle/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ../MapsBundle/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************************/
/***/ ((module) => {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../MapsBundle/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ../MapsBundle/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../MapsBundle/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ../MapsBundle/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../MapsBundle/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "../MapsBundle/node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../MapsBundle/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "../MapsBundle/node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBRUEsSUFBQUcsZ0JBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssZ0JBQUEsR0FBQU4sdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBTSxnQkFBQSxHQUFBUCx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFPLGFBQUEsR0FBQVAsbUJBQUE7QUFBNEYsU0FBQVEseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFWLHdCQUFBVSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEs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aUM7QUFDMUUsd0JBQXdCLG1CQUFPLENBQUMsc0dBQXdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5QkFBeUIsU0FBUyx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCBQb2ludCBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7dHJhbnNmb3JtLCB0b0xvbkxhdCwgZnJvbUxvbkxhdCwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNERSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZGVcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zRU4gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1wb3B1cC1pbmZvLWVuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMucG9wdXBGdW5jdGlvbnMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiID8gcG9wdXBGdW5jdGlvbnNERSA6IHBvcHVwRnVuY3Rpb25zRU47XG4gICAgdGhpcy5jbGlja0ZlYXR1cmUgPSB0aGlzLmNsaWNrRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgICBpZiAocHJvcHMubGF5ZXJWYWx1ZVJvdXRlIHx8IHByb3BzLmxheWVyVmFsdWVBcmVhKSB7XG4gICAgICBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgfTtcbiAgfVxuXG4gIGNsaWNrRmVhdHVyZSAoZXZlbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgc2NvcGUucHJvcHMuc2V0QWN0aXZlSWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZCk7XG4gICAgbGV0IGZlYXR1cmUgPSBzY29wZS5wcm9wcy5mZWF0dXJlU291cmNlLmdldEZlYXR1cmVCeUlkKHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGxldCBleHRlbnQgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICBsZXQgd2lkdGggPSBqUXVlcnkoXCIuYzRnLXNpZGVib2FyZC5jNGctb3BlblwiKS5jc3MoJ3dpZHRoJyk7XG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aC5zcGxpdChcIi5cIik7XG4gICAgICAgIHdpZHRoID0gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aFswXSA6IHdpZHRoO1xuICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArICA1MDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aWR0aCA9IDUwO1xuICAgICAgfVxuICAgICAgbGV0IHBhZGRpbmcgPSBbNTAsIHdpZHRoLCA1MCwgNTBdO1xuICAgICAgaWYgKCFzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lm1hcERhdGEucHJldmVudFpvb21SZXN1bHRzKSB7XG4gICAgICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIGZpdCBlbXB0eSBleHRlbnRzIChJbmZpbml0eSBhbHNvIG1lYW5zIGVtcHR5IGluIHRoaXMgY29udGV4dClcbiAgICAgICAgaWYgKGV4dGVudCAmJiBleHRlbnQubGVuZ3RoID4gMCAmJiBleHRlbnRbMF0gIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdChleHRlbnQsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICAgICAgICBtYXhab29tOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpIHx8IDE2XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKFtleHRlbnRbMF0sIGV4dGVudFsxXV0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlZnJlc2ggY3NzIGNsYXNzZXNcbiAgICAvLyBjb25zb2xlLmxvZyhqUXVlcnkodGhpcykpO1xuICAgIC8vIHRoaXMucHJvcHMuc2V0QWN0aXZlSWQoKVxuICAgIC8vIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignbGknKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgIC8vICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgLy8gfSk7XG4gICAgLy8galF1ZXJ5KHRoaXMpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgLy8galF1ZXJ5KFwiZGl2LmM0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lclwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IGVudHJ5Lm9mZnNldFRvcCAtIDMwMH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5lbGVtZW50IHx8XG4gICAgICAgIHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlICE9PSBwcmV2UHJvcHMubGF5ZXJWYWx1ZVJvdXRlIHx8XG4gICAgICAgIHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWEgIT09IHByZXZQcm9wcy5sYXllclZhbHVlQXJlYSB8fFxuICAgICAgICB0aGlzLnByb3BzLmZlYXR1cmUgIT09IHByZXZQcm9wcy5mZWF0dXJlXG4gICAgKSB7IC8vb25seSBnZXQgcG9wdXAgaWYgbm90IGFscmVhZHkgc2V0IG9yIGxheWVyIGNoYW5nZXNcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnQgKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY3VycmVudEZlYXR1cmUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UgJiYgdGhpcy5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKSB7XG4gICAgICB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICAgIGN1cnJlbnRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBmZWF0dXJlRW50cnlDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgb2JqSG9vayA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgIGxldCBzdHlsZUlkID0gY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgIGxldCBzdHlsZVNyYyA9ICcnO1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF07XG4gICAgICAgICAgaWYgKGxvY3N0eWxlICYmIGxvY3N0eWxlLmxvY1N0eWxlQXJyKSB7XG4gICAgICAgICAgICBzdHlsZVNyYyA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25cIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLmljb25fc3JjIDogbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN2Z1NyYyA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnBvcHVwRnVuY3Rpb25zLmZuU3RhbmRhcmRJbmZvUG9wdXAoY3VycmVudEZlYXR1cmUsIHN0eWxlU3JjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwibm90T3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlICYmIHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cCkge1xuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYTtcbiAgICAgICAgb2JqSG9vayA9ICB7XG4gICAgICAgICAgZW50cnk6IFwiXCIsXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuY291bnRlcixcbiAgICAgICAgICBmZWF0dXJlOiB0aGlzLnByb3BzLmZlYXR1cmUsXG4gICAgICAgICAgLy8gdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgbGFiZWxzOiBbJ25hbWUnXSxcbiAgICAgICAgICBhY3RpdmVMYXllclZhbHVlOiBsYXllclZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3Mucm91dGVQbHVnaW5FbnRyeSwgb2JqSG9vayk7XG4gICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBvYmpIb29rLmVudHJ5O1xuICAgICAgfVxuICAgICAgbGV0IGVsZW1lbnQgPSB7X19odG1sOiBmZWF0dXJlRW50cnlDb250ZW50ICsgXCI8YnI+XCJ9O1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZmVhdHVyZS5pZH08L3NwYW4+XG4gICAgICAgICAgICA8bGkgcmVmPXt0aGlzLnByb3BzLnJlZlByb3B9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLnN0YXRlLmVsZW1lbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZSA/IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1hY3RpdmVcIiA6IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1pbmFjdGl2ZVwifVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmNsaWNrRmVhdHVyZX0vPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckZlYXR1cmVMaXN0SXRlbX0gZnJvbSBcIi4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1wiYWN0aXZlSWRcIjogYWN0aXZlSWR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHRoaXMuc29ydEZlYXR1cmVzKCk7XG4gICAgaWYgKCFzb3J0ZWRGZWF0dXJlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzb3J0ZWRGZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckZlYXR1cmVMaXN0SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSByZWZQcm9wPXt0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdfSB0eXBlPXt0aGlzLnByb3BzLmZlYXR1cmVMaXN0LnR5cGV9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gZmVhdHVyZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUlkPXt0aGlzLnByb3BzLnNldEFjdGl2ZUlkfSByb3V0ZU1vZGU9e3RoaXMucHJvcHMucm91dGVNb2RlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclJvdXRlPXt0aGlzLnByb3BzLmxheWVyUm91dGV9IGxheWVyQXJlYT17dGhpcy5wcm9wcy5sYXllckFyZWF9IGZlYXR1cmVTb3VyY2U9e3RoaXMucHJvcHMuZmVhdHVyZVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI9e2luZGV4fSBrZXk9e2luZGV4fSBsYXllclZhbHVlUm91dGU9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlfSBsYXllclZhbHVlQXJlYT17dGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmVJZCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5mZWF0dXJlc1t0aGlzLnByb3BzLmFjdGl2ZUlkXTtcbiAgICAgICAgLy8gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCd9KTtcbiAgICAgICAgbGV0IHNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgc2Nyb2xsRWxlbWVudC5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3AgLSAxMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRGZWF0dXJlcygpIHtcbiAgICBjb25zdCByb3V0ZXJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgY29uc3QgY3VycmVudExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllckFyZWEgOiB0aGlzLnByb3BzLmxheWVyUm91dGU7XG4gICAgY29uc3QgY3VycmVudExheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhIDogdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGU7XG5cbiAgICBpZiAoIXJvdXRlckxheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRMYWJlbFByb3AgPSByb3V0ZXJMYXllcnNbY3VycmVudExheWVyXVtjdXJyZW50TGF5ZXJWYWx1ZV1bJ21hcExhYmVsJ107XG4gICAgbGV0IGZlYXR1cmVzID0gWy4uLnRoaXMucHJvcHMuZmVhdHVyZUxpc3QuZmVhdHVyZXNdO1xuICAgIHJldHVybiBmZWF0dXJlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBsZXQgYVZhbHVlcyA9IGEsIGJWYWx1ZXMgPSBiO1xuICAgICAgaWYgKGEudGFncyAmJiBiLnRhZ3MpIHtcbiAgICAgICAgYVZhbHVlcyA9IGEudGFncztcbiAgICAgICAgYlZhbHVlcyA9IGIudGFncztcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdKSkge1xuICAgICAgICAvLyBzdHJpbmcgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIDwgYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA/IC0xIDogMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG51bWVyaWMgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIC0gYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheShyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dlb20iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2M0Z01hcHNDb25zdGFudCIsIl9wcm9qIiwicG9wdXBGdW5jdGlvbnNERSIsInBvcHVwRnVuY3Rpb25zRU4iLCJfYzRnTWFwc1V0aWxzIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJwb3B1cEZ1bmN0aW9ucyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibGFuZyIsImNsaWNrRmVhdHVyZSIsImJpbmQiLCJlbGVtZW50IiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJnZXRFbGVtZW50Iiwic3RhdGUiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZXZlbnQiLCJzZXRBY3RpdmVJZCIsImZlYXR1cmUiLCJpZCIsImZlYXR1cmVTb3VyY2UiLCJnZXRGZWF0dXJlQnlJZCIsImV4dGVudCIsImdldEdlb21ldHJ5IiwiZ2V0RXh0ZW50Iiwid2lkdGgiLCJqUXVlcnkiLCJjc3MiLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwicGFkZGluZyIsInByb3h5IiwibWFwRGF0YSIsInByZXZlbnRab29tUmVzdWx0cyIsImxlbmd0aCIsIkluZmluaXR5IiwibWFwIiwiZ2V0VmlldyIsImZpdCIsIm1heFpvb20iLCJnZXRab29tIiwic2V0Q2VudGVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJzZXRTdGF0ZSIsImN1cnJlbnRGZWF0dXJlIiwiZm9yRWFjaEZlYXR1cmUiLCJmZWF0dXJlRW50cnlDb250ZW50Iiwib2JqSG9vayIsInR5cGUiLCJzdHlsZUlkIiwic3R5bGVTcmMiLCJsb2NzdHlsZSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwibG9jU3R5bGVBcnIiLCJzdHlsZXR5cGUiLCJpY29uX3NyYyIsInN2Z1NyYyIsImZuU3RhbmRhcmRJbmZvUG9wdXAiLCJwb3B1cCIsImxheWVyVmFsdWUiLCJyb3V0ZU1vZGUiLCJlbnRyeSIsImNvdW50ZXIiLCJsYWJlbHMiLCJhY3RpdmVMYXllclZhbHVlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInJvdXRlUGx1Z2luRW50cnkiLCJfX2h0bWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJyZWYiLCJyZWZQcm9wIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJvbk1vdXNlRG93biIsIkNvbXBvbmVudCIsIl9jNGdSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0iLCJSb3V0ZXJGZWF0dXJlTGlzdCIsImZlYXR1cmVzIiwiYWN0aXZlSWQiLCJfdGhpczIiLCJzb3J0ZWRGZWF0dXJlcyIsInNvcnRGZWF0dXJlcyIsImhlYWRlciIsInN3aXRjaGVyIiwiaW5kZXgiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImZlYXR1cmVMaXN0IiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsInNjcm9sbEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJyb3V0ZXJMYXllcnMiLCJjdXJyZW50TGF5ZXIiLCJjdXJyZW50TGF5ZXJWYWx1ZSIsImN1cnJlbnRMYWJlbFByb3AiLCJfdG9Db25zdW1hYmxlQXJyYXkyIiwic29ydCIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=