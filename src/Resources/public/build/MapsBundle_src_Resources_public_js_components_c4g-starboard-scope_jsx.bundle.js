"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-starboard-scope_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope-item.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope-item.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StarboardScopeItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js");
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
var StarboardScopeItem = exports.StarboardScopeItem = /*#__PURE__*/function (_Component) {
  function StarboardScopeItem(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardScopeItem);
    _this = _callSuper(this, StarboardScopeItem, [props]);
    var scope = _this;
    _this.state = {
      html: "<div>Loading...</div>"
    };
    _this.highlightFeature = _this.highlightFeature.bind(_this);
    _this.ref = /*#__PURE__*/_react["default"].createRef();
    _this.loadPopup = _this.loadPopup.bind(_this);
    _this.observerFunction = _this.observerFunction.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(StarboardScopeItem, _Component);
  return (0, _createClass2["default"])(StarboardScopeItem, [{
    key: "observerFunction",
    value: function observerFunction(entries, observer) {
      var _this2 = this;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (_this2.props.lastElement && _this2.props.loadMore) {
            _this2.props.loadMore();
          }
          _this2.loadPopup();
          if (_this2.ref && _this2.ref.current) {
            observer.unobserve(_this2.ref.current);
          }
        }
      });
    }
  }, {
    key: "loadPopup",
    value: function loadPopup() {
      var _this3 = this;
      var popup = this.props.feature.get('popup');
      if (!popup.contentStarboard && popup.async) {
        var url = this.props.mapController.proxy.api_infowindow_url + '/' + popup.content;
        url += url.includes("?") ? "&" : "?";
        url += "scope=starboardscope";
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data) {
            if (data.content) {
              popup.contentStarboard = data.content;
              _this3.setState({
                'html': popup.contentStarboard
              }, function () {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                  popup: popup,
                  mapController: _this3.props.mapController
                });
              });
            }
          }
          // this.props.setSingleFeature(this.props.feature, this.props.index);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.setState({
          'html': popup.contentStarboard || popup.content
        });
      }
    }
  }, {
    key: "highlightFeature",
    value: function highlightFeature() {
      var _this4 = this;
      this.props.feature.set("markLocstyle", true);
      window.setTimeout(function () {
        _this4.props.feature.set("markLocstyle", false);
      }, 3000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.feature.ol_uid !== prevProps.feature.ol_uid) {
        this.loadPopup();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current && !this.observer) {
        this.observer = new IntersectionObserver(this.observerFunction, {
          root: document,
          threshold: 0.1
        });
        this.observer.observe(this.ref.current);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer = null;
    }
  }, {
    key: "render",
    value: function render() {
      var distance = null;
      if (this.props.feature.get('distance')) {
        distance = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-element-distance"
        }, this.props.langConstants.DIST, ": ", (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.feature.get('distanceMatrix') || this.props.feature.get('distance')));
      }
      if (this.state.html) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          ref: this.ref,
          onMouseUp: this.highlightFeature
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-wrapper",
          dangerouslySetInnerHTML: {
            __html: this.state.html
          }
        }), distance);
      }
      return null;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope.jsx":
/*!********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope.jsx ***!
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
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _c4gStarboardScopeItem = __webpack_require__(/*! ./c4g-starboard-scope-item.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope-item.jsx");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _sphere = __webpack_require__(/*! ol/sphere */ "../MapsBundle/node_modules/ol/sphere.js");
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
var StarboardScope = exports["default"] = /*#__PURE__*/function (_Component) {
  function StarboardScope(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardScope);
    _this = _callSuper(this, StarboardScope, [props]);
    var scope = _this;
    _this.lastTime = -Infinity;
    _this.preventAddReqs = false;
    //specific code for the control
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.ELEMENTS_SCOPE;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.ELEMENTS_SCOPE;
    }
    element.className = "c4g-starboardscope-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
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
    var control = null;
    var open = props.open || false;
    if (mapController.data.starboardscope.div) {
      _this.close = function () {};
      open = true;
    } else {
      control = new _control.Control({
        element: element,
        target: props.target
      });
      var index = mapController.arrComponents.findIndex(function (element) {
        return element.name === "starboardscope";
      });
      mapController.arrComponents[index].control = control;
    }
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.loadMore = _this.loadMore.bind(_this);
    _this.getFeaturesInScope = _this.getFeaturesInScope.bind(_this);
    _this.view = props.mapController.map.getView();
    var layerController = props.mapController.proxy.layerController;
    _this.vectorSource = layerController.vectorSource instanceof _source.Cluster ? layerController.vectorSource.getSource() : layerController.vectorSource;
    _this.view.on('change:center', function (evt) {
      _this.getFeaturesInScope();
    });
    _this.view.on('change:resolution', function (evt) {
      if (props.mapController.data.minZoomStarboardScope && _this.view.getZoom() < props.mapController.data.minZoomStarboardScope) {
        _this.setState({
          disable: true
        });
      } else if (props.mapController.data.minZoomStarboardScope && _this.state.disable) {
        _this.setState({
          disable: false
        });
      }
      _this.getFeaturesInScope();
    });
    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
    window.c4gMapsHooks.layer_loaded.push(function (element) {
      _this.getFeaturesInScope();
    });
    _this.state = {
      open: open,
      disable: false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: [],
      maxElements: 20
    };
    return _this;
  }
  (0, _inherits2["default"])(StarboardScope, _Component);
  return (0, _createClass2["default"])(StarboardScope, [{
    key: "getFeaturesInScope",
    value: function getFeaturesInScope() {
      var _this2 = this;
      var timestamp = Date.now(); //get timestamp to trigger event only every fourth of a second
      var mapController = this.props.mapController;
      var layerController = mapController.proxy.layerController;
      if (this.state.open && !this.state.disable && this._isMounted && timestamp > this.lastTime + 250) {
        if (mapController.data.minZoomStarboardScope && this.view.getZoom() < mapController.data.minZoomStarboardScope) {
          this.setState({
            features: []
          });
        }
        this.lastTime = timestamp;
        var extent = this.view.calculateExtent();
        var features = this.vectorSource.getFeaturesInExtent(extent);
        for (var i in layerController.vectorSources) {
          if (layerController.vectorSources.hasOwnProperty(i)) {
            var singleSource = layerController.vectorSources[i] instanceof _source.Cluster ? layerController.vectorSources[i].getSource() : layerController.vectorSources[i];
            var singleFeatures = singleSource.getFeaturesInExtent(extent);
            features = features.concat(singleFeatures);
          }
        }
        var featuresSorted = this.sortFeatures(features);
        if (!featuresSorted) {
          this.lastTime = -Infinity;
          window.setTimeout(function () {
            _this2.getFeaturesInScope();
          }, 200);
        }
        this.setState({
          features: features
        });
      }
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures(features) {
      if (this.props.mapController.geolocation) {
        var position = this.props.mapController.geolocation.getPosition();
        if (!position) {
          return false;
        }
        var maxDistance = 0;
        features.sort(function (a, b) {
          var lineStringA = new _geom.LineString([position, a.getGeometry().getCoordinates()]);
          var distanceA = (0, _sphere.getLength)(lineStringA);
          a.set('distance', distanceA);
          var lineStringB = new _geom.LineString([position, b.getGeometry().getCoordinates()]);
          var distanceB = (0, _sphere.getLength)(lineStringB);
          maxDistance = distanceA > maxDistance ? distanceA : maxDistance;
          maxDistance = distanceB > maxDistance ? distanceB : maxDistance;
          return distanceA - distanceB;
        });
        if (maxDistance < 30 && this.props.mapController.data.matrixKey) {
          var objMissDist = [];
          var arrLocations = [];
          arrLocations.push((0, _proj.toLonLat)(position));
          for (var i in features) {
            if (features.hasOwnProperty(i) && !features[i].get('distanceMatrix')) {
              objMissDist.push(features[i]);
              arrLocations.push((0, _proj.toLonLat)(features[i].getGeometry().getCoordinates()));
            }
          }
          if (arrLocations.length > 2 && !this.preventAddReqs) {
            var url = this.props.mapController.data.proxyUrl + 'matrix.php?language=de&profile=auto&key=' + this.props.mapController.data.matrixKey;
            var body = JSON.stringify({
              locations: arrLocations
            });
            var scope = this;
            scope.preventAddReqs = true;
            fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'text/plain'
              },
              body: body
            }).then(function (response) {
              scope.preventAddReqs = false;
              return response.json().then(function (jsonData) {
                var distances = jsonData && jsonData.sources_to_targets ? jsonData.sources_to_targets[0] : [];
                for (var _i in distances) {
                  if (distances.hasOwnProperty(_i) && objMissDist.hasOwnProperty(_i)) {
                    objMissDist[_i].set('distanceMatrix', distances[_i].distance * 1000);
                  }
                }
                scope.sortFeatures(scope.state.features);
                scope.forceUpdate();
              });
            });
          }
        }
      }
      return features;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (this.state.control) {
        if (this.state.open) {
          jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
          jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
        } else {
          jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
          jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
        }
      }
      var list = null;
      if (!this.state.disable) {
        list = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboardscope-content-container"
        }, /*#__PURE__*/_react["default"].createElement("ul", null, this.state.features.map(function (feature, index) {
          if (index < _this3.state.maxElements) {
            return /*#__PURE__*/_react["default"].createElement(_c4gStarboardScopeItem.StarboardScopeItem, {
              mapController: _this3.props.mapController,
              langConstants: _this3.langConstants,
              index: index,
              key: index,
              feature: feature,
              lastElement: index === _this3.state.maxElements - 1,
              loadMore: _this3.loadMore
            });
          }
        })));
      }
      var externalHeadline = document.querySelector(".c4g-external-headline");
      if (externalHeadline) {
        this.langConstants.ELEMENTS_SCOPE = externalHeadline.textContent.trim();
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-starboardscope-header",
        headerClass: "c4g-starboardscope-headline",
        header: this.langConstants.ELEMENTS_SCOPE,
        closeBtnClass: "c4g-starboardscope-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), list);
    }
  }, {
    key: "open",
    value: function open() {
      var _this4 = this;
      this.setState({
        open: true
      }, function () {
        var evt = {};
        evt.target = _this4.view;
        _this4.getFeaturesInScope();
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
    key: "loadMore",
    value: function loadMore() {
      this.setState({
        maxElements: this.state.maxElements + 20
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      // if (!this.props.mapController.geolocation.getTracking()) {
      //   this.props.mapController.geolocation.setTracking(true);
      // }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.props.mapController.data.starboardscope.div) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "StarboardScope" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "StarboardScope" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "StarboardScope");
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1zdGFyYm9hcmQtc2NvcGVfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGdCQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUseUJBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxhQUFBLEdBQUFILG1CQUFBO0FBQXdDLFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTix3QkFBQU0sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxV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O0lBQ0Y7RUFBQztBQUFBLEVBM1B5Q3pILGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXNjb3BlLWl0ZW0uanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZFNjb3BlSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBodG1sOiBcIjxkaXY+TG9hZGluZy4uLjwvZGl2PlwiXG4gICAgfTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmUgPSB0aGlzLmhpZ2hsaWdodEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMubG9hZFBvcHVwID0gdGhpcy5sb2FkUG9wdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9ic2VydmVyRnVuY3Rpb24gPSB0aGlzLm9ic2VydmVyRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuICBvYnNlcnZlckZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXN0RWxlbWVudCAmJiB0aGlzLnByb3BzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTW9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFBvcHVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVmICYmIHRoaXMucmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGxvYWRQb3B1cCgpIHtcbiAgICBsZXQgcG9wdXAgPSB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgIGlmICghcG9wdXAuY29udGVudFN0YXJib2FyZCAmJiBwb3B1cC5hc3luYykge1xuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cC5jb250ZW50O1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgdXJsICs9IFwic2NvcGU9c3RhcmJvYXJkc2NvcGVcIjtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY29udGVudFN0YXJib2FyZCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwge3BvcHVwOiBwb3B1cCwgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICdodG1sJzogcG9wdXAuY29udGVudFN0YXJib2FyZCB8fCBwb3B1cC5jb250ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaGlnaGxpZ2h0RmVhdHVyZSAoKSB7XG4gICAgdGhpcy5wcm9wcy5mZWF0dXJlLnNldChcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5vbF91aWQgIT09IHByZXZQcm9wcy5mZWF0dXJlLm9sX3VpZCkge1xuICAgICAgdGhpcy5sb2FkUG9wdXAoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWYuY3VycmVudCAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLm9ic2VydmVyRnVuY3Rpb24sIHtyb290OmRvY3VtZW50LCB0aHJlc2hvbGQ6IDAuMX0pO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMucmVmLmN1cnJlbnQpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRpc3RhbmNlID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2UnKSkge1xuICAgICAgZGlzdGFuY2UgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWxlbWVudC1kaXN0YW5jZVwifT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYW5nQ29uc3RhbnRzLkRJU1R9OiB7dG9IdW1hbkRpc3RhbmNlKHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ2Rpc3RhbmNlTWF0cml4JykgfHwgdGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2UnKSl9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaHRtbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgcmVmPXt0aGlzLnJlZn0gb25Nb3VzZVVwPXt0aGlzLmhpZ2hsaWdodEZlYXR1cmV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMuc3RhdGUuaHRtbH19Lz5cbiAgICAgICAgICAgIHtkaXN0YW5jZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtTdGFyYm9hcmRTY29wZUl0ZW19IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZ30gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dG9Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtnZXRMZW5ndGh9IGZyb20gXCJvbC9zcGhlcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuRUxFTUVOVFNfU0NPUEU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkc2NvcGUtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBvcGVuID0gcHJvcHMub3BlbiB8fCBmYWxzZVxuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICB0aGlzLmNsb3NlID0gKCkgPT4ge307XG4gICAgICBvcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInN0YXJib2FyZHNjb3BlXCIpO1xuICAgICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUgPSB0aGlzLmdldEZlYXR1cmVzSW5TY29wZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmlldyA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgdGhpcy52ZWN0b3JTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UuZ2V0U291cmNlKCk6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2U7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2U6Y2VudGVyJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlICYmIHRoaXMuc3RhdGUuZGlzYWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKClcbiAgICB9KTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goKGVsZW1lbnQpPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbjogb3BlbixcbiAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkc2NvcGUtcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBmZWF0dXJlczogW10sXG4gICAgICBtYXhFbGVtZW50czogMjBcbiAgICB9O1xuICB9XG5cbiAgZ2V0RmVhdHVyZXNJblNjb3BlICgpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTsgLy9nZXQgdGltZXN0YW1wIHRvIHRyaWdnZXIgZXZlbnQgb25seSBldmVyeSBmb3VydGggb2YgYSBzZWNvbmRcbiAgICBjb25zdCBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGNvbnN0IGxheWVyQ29udHJvbGxlciA9IG1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5kaXNhYmxlICYmIHRoaXMuX2lzTW91bnRlZCAmJiB0aW1lc3RhbXAgPiB0aGlzLmxhc3RUaW1lICsgMjUwKSB7XG4gICAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgbWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlczogW11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgbGV0IGV4dGVudCA9IHRoaXMudmlldy5jYWxjdWxhdGVFeHRlbnQoKTtcbiAgICAgIGxldCBmZWF0dXJlcyA9IHRoaXMudmVjdG9yU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgIGZvciAobGV0IGkgaW4gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXMpIHtcbiAgICAgICAgaWYgKGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IHNpbmdsZVNvdXJjZSA9IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldLmdldFNvdXJjZSgpIDogbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV07XG4gICAgICAgICAgbGV0IHNpbmdsZUZlYXR1cmVzID0gc2luZ2xlU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChzaW5nbGVGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlc1NvcnRlZCA9IHRoaXMuc29ydEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgIGlmICghZmVhdHVyZXNTb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IC1JbmZpbml0eTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9Pnt0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpfSwgMjAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgc29ydEZlYXR1cmVzIChmZWF0dXJlcykge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24pIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgbWF4RGlzdGFuY2UgPSAwO1xuICAgICAgZmVhdHVyZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgbGluZVN0cmluZ0EgPSBuZXcgTGluZVN0cmluZyhbcG9zaXRpb24sIGEuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpXSlcbiAgICAgICAgbGV0IGRpc3RhbmNlQSA9IGdldExlbmd0aChsaW5lU3RyaW5nQSk7XG4gICAgICAgIGEuc2V0KCdkaXN0YW5jZScsIGRpc3RhbmNlQSk7XG5cbiAgICAgICAgbGV0IGxpbmVTdHJpbmdCID0gbmV3IExpbmVTdHJpbmcoW3Bvc2l0aW9uLCBiLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKV0pXG4gICAgICAgIGxldCBkaXN0YW5jZUIgPSBnZXRMZW5ndGgobGluZVN0cmluZ0IpO1xuXG4gICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2VBID4gbWF4RGlzdGFuY2UgPyBkaXN0YW5jZUEgOiBtYXhEaXN0YW5jZTtcbiAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZUIgPiBtYXhEaXN0YW5jZSA/IGRpc3RhbmNlQiA6IG1heERpc3RhbmNlO1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VBIC0gZGlzdGFuY2VCO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF4RGlzdGFuY2UgPCAzMCAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXkpIHtcbiAgICAgICAgbGV0IG9iak1pc3NEaXN0ID0gW107XG4gICAgICAgIGxldCBhcnJMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgYXJyTG9jYXRpb25zLnB1c2godG9Mb25MYXQocG9zaXRpb24pKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGlmIChmZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiAhZmVhdHVyZXNbaV0uZ2V0KCdkaXN0YW5jZU1hdHJpeCcpKSB7XG4gICAgICAgICAgICBvYmpNaXNzRGlzdC5wdXNoKGZlYXR1cmVzW2ldKTtcbiAgICAgICAgICAgIGFyckxvY2F0aW9ucy5wdXNoKHRvTG9uTGF0KGZlYXR1cmVzW2ldLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyTG9jYXRpb25zLmxlbmd0aCA+IDIgJiYgIXRoaXMucHJldmVudEFkZFJlcXMpIHtcbiAgICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucHJveHlVcmwgKyAnbWF0cml4LnBocD9sYW5ndWFnZT1kZSZwcm9maWxlPWF1dG8ma2V5PScgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXk7XG4gICAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bG9jYXRpb25zOiBhcnJMb2NhdGlvbnN9KTtcbiAgICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgICAgc2NvcGUucHJldmVudEFkZFJlcXMgPSB0cnVlO1xuICAgICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNjb3BlLnByZXZlbnRBZGRSZXFzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlcyA9IGpzb25EYXRhICYmIGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0cyA/IGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0c1swXSA6IFtdO1xuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gZGlzdGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBvYmpNaXNzRGlzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgb2JqTWlzc0Rpc3RbaV0uc2V0KCdkaXN0YW5jZU1hdHJpeCcsIGRpc3RhbmNlc1tpXS5kaXN0YW5jZSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY29wZS5zb3J0RmVhdHVyZXMoc2NvcGUuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICBzY29wZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRyb2wpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbGlzdCA9ICBudWxsO1xuICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlKSB7XG4gICAgICBsaXN0ID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRlbnQtY29udGFpbmVyXCJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5zdGF0ZS5tYXhFbGVtZW50cykge1xuICAgICAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZFNjb3BlSXRlbSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmdDb25zdGFudHM9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSBmZWF0dXJlPXtmZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWxlbWVudD17aW5kZXggPT09IHRoaXMuc3RhdGUubWF4RWxlbWVudHMgLSAxfSBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZX0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHZhciBleHRlcm5hbEhlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZXh0ZXJuYWwtaGVhZGxpbmVcIik7XG4gICAgaWYgKGV4dGVybmFsSGVhZGxpbmUpIHtcbiAgICAgIHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRSA9IGV4dGVybmFsSGVhZGxpbmUudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtY2xvc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgbGV0IGV2dCA9IHt9O1xuICAgICAgZXZ0LnRhcmdldCA9IHRoaXMudmlldztcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG4gIGxvYWRNb3JlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe21heEVsZW1lbnRzOiB0aGlzLnN0YXRlLm1heEVsZW1lbnRzICsgMjB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIC8vIGlmICghdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAvLyAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAvLyB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZHNjb3BlLmRpdikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiU3RhcmJvYXJkU2NvcGVcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJTdGFyYm9hcmRTY29wZVwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiU3RhcmJvYXJkU2NvcGVcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdSb3V0ZXJUaW1lQ29udmVyc2lvbnMiLCJfYzRnTWFwc1V0aWxzIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJTdGFyYm9hcmRTY29wZUl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJzdGF0ZSIsImh0bWwiLCJoaWdobGlnaHRGZWF0dXJlIiwiYmluZCIsInJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibG9hZFBvcHVwIiwib2JzZXJ2ZXJGdW5jdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJfdGhpczIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImxhc3RFbGVtZW50IiwibG9hZE1vcmUiLCJjdXJyZW50IiwidW5vYnNlcnZlIiwiX3RoaXMzIiwicG9wdXAiLCJmZWF0dXJlIiwiY29udGVudFN0YXJib2FyZCIsImFzeW5jIiwidXJsIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwiYXBpX2luZm93aW5kb3dfdXJsIiwiY29udGVudCIsImluY2x1ZGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInByb3h5X2ZpbGxQb3B1cCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJfdGhpczQiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJvbF91aWQiLCJjb21wb25lbnREaWRNb3VudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImRvY3VtZW50IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZGlzdGFuY2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFuZ0NvbnN0YW50cyIsIkRJU1QiLCJ0b0h1bWFuRGlzdGFuY2UiLCJvbk1vdXNlVXAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbXBvbmVudCIsIl9jb250cm9sIiwiX3NvdXJjZSIsIl9jNGdTdGFyYm9hcmRTY29wZUl0ZW0iLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJfZ2VvbSIsIl9wcm9qIiwiX3NwaGVyZSIsIlRpdGxlYmFyIiwibGF6eSIsIlN0YXJib2FyZFNjb3BlIiwibGFzdFRpbWUiLCJJbmZpbml0eSIsInByZXZlbnRBZGRSZXFzIiwiZWxlbWVudCIsImJ1dHRvbiIsImdldExhbmd1YWdlIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJFTEVNRU5UU19TQ09QRSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJvcGVuIiwialF1ZXJ5Iiwib24iLCJldmVudCIsImNsb3NlIiwiY29udHJvbCIsInN0YXJib2FyZHNjb3BlIiwiZGl2IiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJnZXRGZWF0dXJlc0luU2NvcGUiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsImxheWVyQ29udHJvbGxlciIsInZlY3RvclNvdXJjZSIsIkNsdXN0ZXIiLCJnZXRTb3VyY2UiLCJldnQiLCJtaW5ab29tU3RhcmJvYXJkU2NvcGUiLCJnZXRab29tIiwiZGlzYWJsZSIsImxheWVyX2xvYWRlZCIsInB1c2giLCJmZWF0dXJlcyIsIm1heEVsZW1lbnRzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIl9pc01vdW50ZWQiLCJleHRlbnQiLCJjYWxjdWxhdGVFeHRlbnQiLCJnZXRGZWF0dXJlc0luRXh0ZW50IiwidmVjdG9yU291cmNlcyIsInNpbmdsZVNvdXJjZSIsInNpbmdsZUZlYXR1cmVzIiwiY29uY2F0IiwiZmVhdHVyZXNTb3J0ZWQiLCJzb3J0RmVhdHVyZXMiLCJnZW9sb2NhdGlvbiIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJtYXhEaXN0YW5jZSIsInNvcnQiLCJiIiwibGluZVN0cmluZ0EiLCJMaW5lU3RyaW5nIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImRpc3RhbmNlQSIsImdldExlbmd0aCIsImxpbmVTdHJpbmdCIiwiZGlzdGFuY2VCIiwibWF0cml4S2V5Iiwib2JqTWlzc0Rpc3QiLCJhcnJMb2NhdGlvbnMiLCJ0b0xvbkxhdCIsImxlbmd0aCIsInByb3h5VXJsIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImpzb25EYXRhIiwiZGlzdGFuY2VzIiwic291cmNlc190b190YXJnZXRzIiwiZm9yY2VVcGRhdGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGlzdCIsImV4dGVybmFsSGVhZGxpbmUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiY3NzQ29uc3RhbnRzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsInNldE9wZW5Db21wb25lbnQiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9