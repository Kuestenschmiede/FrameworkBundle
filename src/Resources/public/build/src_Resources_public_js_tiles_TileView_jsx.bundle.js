"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_TileView_jsx"],{

/***/ "./src/Resources/public/js/Geolocation.js":
/*!************************************************!*\
  !*** ./src/Resources/public/js/Geolocation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateDistance = calculateDistance;
exports.formatDistance = formatDistance;
exports.geolocationActive = geolocationActive;
exports.getGeolocation = getGeolocation;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

function getGeolocation(fnCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fnCallback);
  } else {
    return false;
  }
}
function calculateDistance(point1, point2) {
  var lon2 = parseFloat(point2[0]);
  var lon1 = parseFloat(point1[0]);
  var lat2 = parseFloat(point2[1]);
  var lat1 = parseFloat(point1[1]);

  // implement the haversine formula
  var R = 6371e3; // metres
  var phi1 = lat1 * Math.PI / 180; // phi, lambda in radians
  var phi2 = lat2 * Math.PI / 180;
  var deltaPhi = (lat2 - lat1) * Math.PI / 180;
  var deltaLambda = (lon2 - lon1) * Math.PI / 180;
  var a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // meters
}
function formatDistance(distanceInMeters) {
  if (!distanceInMeters) {
    return distanceInMeters;
  }
  var unit = "m";
  if (distanceInMeters > 1000) {
    distanceInMeters /= 1000;
    unit = "km";
  }
  distanceInMeters = distanceInMeters.toFixed(2);
  return distanceInMeters.toString() + unit;
}
function geolocationActive() {
  return !!navigator.geolocation;
}

/***/ }),

/***/ "./src/Resources/public/js/tiles/TileView.jsx":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/tiles/TileView.jsx ***!
  \****************************************************/
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
var _Geolocation = __webpack_require__(/*! ../Geolocation */ "./src/Resources/public/js/Geolocation.js");
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
var CarouselTile = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_CarouselTile_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./CarouselTile.jsx */ "./src/Resources/public/js/tiles/CarouselTile.jsx"));
});
var ExperimentalGridTile = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_ExperimentalGridTile_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ExperimentalGridTile.jsx */ "./src/Resources/public/js/tiles/ExperimentalGridTile.jsx"));
});
var InfiniteScroll = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-infinite-scroll-component_dist_index_es_js").then(__webpack_require__.bind(__webpack_require__, /*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js"));
});
var TileMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./fields/TileMapperField.jsx */ "./src/Resources/public/js/tiles/fields/TileMapperField.jsx"));
});
var TileView = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileView);
    _this = _callSuper(this, TileView, [props]);
    _this.state = {
      asyncLoading: props.component.asyncUrl !== '',
      filterWasReset: false,
      textFilterContent: ""
    };
    _this.asyncUrl = _this.props.component.asyncUrl;
    _this.positionActive = false;
    _this.geoPermissionDenied = true; // default

    _this.position = [];

    // if (props.data && props.data.length > 0) {
    //   this.checkPosition();
    //   if (this.positionActive) {
    //     this.addDistances(props.data);
    //   }
    // }

    _this.fetchMoreData = _this.fetchMoreData.bind(_this);
    _this.applyTextFilter = _this.applyTextFilter.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TileView, _Component);
  return (0, _createClass2["default"])(TileView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var headline = null;
      if (this.props.component.headline) {
        if (this.props.component.headlineLevel) {
          switch (this.props.component.headlineLevel) {
            case 1:
              headline = /*#__PURE__*/_react["default"].createElement("h1", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
            case 2:
              headline = /*#__PURE__*/_react["default"].createElement("h2", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
            case 3:
              headline = /*#__PURE__*/_react["default"].createElement("h3", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
            case 4:
              headline = /*#__PURE__*/_react["default"].createElement("h4", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
            case 5:
              headline = /*#__PURE__*/_react["default"].createElement("h5", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
            case 6:
              headline = /*#__PURE__*/_react["default"].createElement("h6", {
                className: "c4g-tile-headline"
              }, this.props.component.headline);
              break;
          }
        }
      }
      var textFilter = null;
      if (this.props.component.withTextFilter) {
        textFilter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-view__list-filter-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "detail-view__list-filter-input",
          type: "text",
          placeholder: "Suchbegriff eingeben",
          onInput: this.applyTextFilter,
          defaultValue: this.state.textFilterContent
        }));
      }
      if (this.props.data.length === 0) {
        if (!this.props.updated && this.props.textBeforeUpdate) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "row"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-md-12"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "alert alert-dark",
            role: "alert"
          }, this.props.textBeforeUpdate))));
        } else if (this.props.updated && this.props.textAfterUpdate) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "row"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-md-12"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "alert alert-dark",
            role: "alert"
          }, this.props.textAfterUpdate))));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "container"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "row"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-md-12"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "alert alert-dark",
            role: "alert"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              textAlign: "center",
              margin: "auto"
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: "bundles/con4gisframework/img/preloader-image.svg",
            className: "preloader-image",
            alt: ""
          }))))));
        }
      }
      var className = this.props.component.className;
      if (this.props.filterChanged && this.props.component.classAfterFilter) {
        className = this.props.component.classAfterFilter;
      }
      if (this.state.filterWasReset) {
        className = this.props.component.className;
      }
      var scrollProps = {
        dataLength: this.props.data.length,
        next: this.fetchMoreData,
        hasMore: this.state.asyncLoading,
        loader: this.props.showSpinner ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "preloader-image-wrapper",
          style: {
            textAlign: "center",
            margin: "auto"
          }
        }, this.props.component.loadingText || /*#__PURE__*/_react["default"].createElement("img", {
          src: "bundles/con4gisframework/img/preloader-image.svg",
          className: "preloader-image",
          alt: ""
        })) : null,
        className: className,
        scrollThreshold: this.props.component.scrollThreshold
      };
      if (this.props.component.layoutType === "carousel") {
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
          }))
        }, /*#__PURE__*/_react["default"].createElement(InfiniteScroll, scrollProps, /*#__PURE__*/_react["default"].createElement("div", {
          className: "container c4g-container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "slider explorer owl-wrapper c4g-carousel-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "owl-carousel owl-theme c4g-carousel-theme"
        }, this.props.data.map(function (item, id) {
          var className = _this2.props.component.tileClass;
          if (_this2.props.component.conditionalTileClassName && _this2.props.component.conditionalTileClassField) {
            if (typeof item[_this2.props.component.conditionalTileClassField] !== "undefined") {
              if (item[_this2.props.component.conditionalTileClassField] === _this2.props.component.conditionalTileClassValue) {
                className += ' ' + _this2.props.component.conditionalTileClassName;
              }
            }
          }
          return /*#__PURE__*/_react["default"].createElement(CarouselTile, {
            className: className,
            dataEntry: item,
            key: id,
            fields: _this2.props.fields,
            conditionalClasses: _this2.props.component.conditionalClasses,
            languageRefs: _this2.props.languageRefs
          });
        }))))));
      } else {
        var list = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-tile-headline-wrapper"
        }, headline), textFilter, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
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
        }, /*#__PURE__*/_react["default"].createElement(InfiniteScroll, scrollProps, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-list-elements"
        }, this.props.data.map(function (item, id) {
          var className = _this2.props.component.tileClass;
          if (_this2.props.component.conditionalTileClassName && _this2.props.component.conditionalTileClassField) {
            if (typeof item[_this2.props.component.conditionalTileClassField] !== "undefined") {
              if (item[_this2.props.component.conditionalTileClassField] === _this2.props.component.conditionalTileClassValue) {
                className += ' ' + _this2.props.component.conditionalTileClassName;
              }
            }
          }
          return /*#__PURE__*/_react["default"].createElement(ExperimentalGridTile, {
            className: className,
            dataEntry: item,
            key: id,
            fields: _this2.props.fields,
            conditionalClasses: _this2.props.component.conditionalClasses,
            list: _this2,
            languageRefs: _this2.props.languageRefs
          });
        })))));
        if (this.props.component.listWrapper) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            id: this.props.component.wrapperId,
            className: this.props.component.wrapperClass
          }, list);
        } else {
          return list;
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var delta = false;
      var currentFilterData = this.props.component.filterData;
      var prevFilterData = prevProps.component.filterData;
      var filterWasReset = this.checkIfFilterWasReset(prevFilterData, currentFilterData);
      var keys = [];
      if (typeof prevFilterData === 'undefined' && typeof currentFilterData !== 'undefined') {
        delta = true;
      } else {
        if ((0, _typeof2["default"])(currentFilterData) === 'object' && currentFilterData !== null) {
          keys = Object.keys(currentFilterData);
          keys.forEach(function (key, index) {
            if (delta === false) {
              if (typeof key !== 'undefined') {
                if (currentFilterData[key] !== prevFilterData[key]) {
                  if (Array.isArray(currentFilterData[key]) && currentFilterData[key].length === 0 && Array.isArray(prevFilterData[key]) && prevFilterData[key].length === 0) {
                    // nothing
                  } else {
                    if (Array.isArray(currentFilterData[key]) && Array.isArray(prevFilterData[key])) {
                      // check for length
                      // when equals, iterate and check each entry
                      if (currentFilterData[key].length === prevFilterData[key].length) {
                        for (var i = 0; i < currentFilterData[key].length; i++) {
                          if (currentFilterData[key][i] !== prevFilterData[key][i]) {
                            delta = true;
                            break;
                          } else {
                            delta = true; //hotfix
                          }
                        }
                      } else {
                        // not equal length
                        delta = true;
                      }
                    } else {
                      delta = true;
                    }
                  }
                }
              }
            }
          }, this);
        } else {
          if ((0, _typeof2["default"])(prevFilterData) === 'object' && prevFilterData !== null) {
            keys = Object.keys(prevFilterData);
            keys.forEach(function (key, index) {
              if (delta === false) {
                if (typeof key !== 'undefined') {
                  if (currentFilterData[key] !== prevFilterData[key]) {
                    delta = true;
                  }
                }
              }
            }, this);
          }
        }
      }
      if (this.props.component.checkAsyncWhileUpdate) {
        if (typeof this.props.component.asyncLoading !== 'undefined' && this.props.component.asyncLoading !== null) {
          if (this.props.component.asyncLoading !== this.state.asyncLoading) {
            this.setState({
              asyncLoading: this.props.component.asyncLoading,
              filterWasReset: filterWasReset
            });
          }
        }
      }
      if (delta === true && this.state.asyncLoading === true) {
        this.fetchMoreData();
      }
    }
  }, {
    key: "checkIfFilterWasReset",
    value: function checkIfFilterWasReset(prevFilterData, currentFilterData) {
      if (prevFilterData && !currentFilterData) {
        return true;
      }
      if (!prevFilterData) {
        return false;
      }
      var excludedFields = ['moduleId', 'randKey'];
      var filterSetBefore = false;
      for (var key in prevFilterData) {
        if (prevFilterData.hasOwnProperty(key)) {
          if (Array.isArray(prevFilterData[key])) {
            if (prevFilterData[key].length > 0) {
              filterSetBefore = true;
            }
          } else {
            if (prevFilterData[key]) {
              filterSetBefore = true;
            }
          }
        }
      }
      var filterFieldsEmpty = {};
      var filterEmpty = true;
      // check if filter is cleared now
      for (var _key in currentFilterData) {
        if (currentFilterData.hasOwnProperty(_key)) {
          if (_key === "sorting" && currentFilterData[_key] === "random") {
            continue;
          }
          if (excludedFields.includes(_key)) {
            continue;
          }
          if (Array.isArray(currentFilterData[_key])) {
            filterFieldsEmpty[_key] = currentFilterData[_key].length === 0;
          } else {
            filterFieldsEmpty[_key] = !currentFilterData[_key];
          }
        }
      }
      for (var _key2 in filterFieldsEmpty) {
        if (filterFieldsEmpty.hasOwnProperty(_key2)) {
          if (!filterFieldsEmpty[_key2]) {
            filterEmpty = false;
            break;
          }
        }
      }
      return filterEmpty && filterSetBefore;
    }

    /**
     * Checks if a distance field exists and if the geolocation is active.
     */
  }, {
    key: "checkPosition",
    value: function checkPosition() {
      var fields = this.props.fields;
      var getPos = false;
      for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
          if (fields[key].type === "distance") {
            getPos = true;
            this.geoxFieldname = fields[key].geox;
            this.geoyFieldname = fields[key].geoy;
            this.distanceFieldname = fields[key].name;
            break;
          }
        }
      }
      this.positionActive = getPos && (0, _Geolocation.geolocationActive)();
    }
  }, {
    key: "fetchMoreData",
    value: function fetchMoreData() {
      var _this3 = this;
      var loadData;
      if (this.props.component.onlySearchWithParam) {
        var param = this.props.component.filterData[this.props.component.onlySearchWithParam];
        loadData = param && param !== "";
      } else {
        loadData = true;
      }
      if (loadData) {
        this.setState({
          asyncLoading: false
        });
        var url = this.asyncUrl.replace("{offset}", this.props.data.length);
        url = new URL(url, window.location.protocol + window.location.hostname);
        if (typeof this.props.component.filterData !== 'undefined' && Object.keys(this.props.component.filterData).length !== 0) {
          var filterParams = this.props.component.filterData;
          filterParams = this.transformSelectOptions(filterParams);
          if (filterParams.sorting === "distance") {
            if (this.positionActive && this.position) {
              filterParams.pos = this.position;
            } else {
              this.checkPosition();
              if (this.positionActive) {
                var setPosition = function setPosition(position) {
                  if (position === false) {
                    _this3.geoPermissionDenied = true;
                    _this3.position = [];
                  }
                  _this3.geoPermissionDenied = false;
                  _this3.position = [position.coords.longitude, position.coords.latitude];
                  _this3.fetchMoreData();
                };
                (0, _Geolocation.getGeolocation)(setPosition);
                return;
              }
            }
            url.search = new URLSearchParams(filterParams).toString();
          } else {
            url.search = new URLSearchParams(filterParams).toString();
          }
        }
        if (this.props.component.filterData.sorting === "distance" && this.position.length === 0 && !this.geoPermissionDenied) {
          return;
        }
        fetch(url.href).then(function (response) {
          return response.json();
        }).then(function (responseData) {
          if (responseData.length === 0) {
            _this3.props.component.asyncLoading = false;
            // no new data
            _this3.setState({
              asyncLoading: false
            });
            // set updated to true
            _this3.props.setFunction(_this3.props.name, _this3.props.component.data, _this3.props.component.filterData);
          } else {
            // check for duplicates
            if (_this3.props.component.uniqueField) {
              responseData = _this3.removeDuplicates(_this3.props.component.data, responseData);
            }
            var data = _this3.props.data.concat(responseData);
            if (!_this3.state.asyncLoading) {
              var maxData = parseInt(_this3.props.component.maxData, 10);
              var loadStep = parseInt(_this3.props.component.loadStep, 10);
              var async = false;
              var maxDataReached = maxData > 0 && data.length === maxData;
              var expectedCountMatched = loadStep === responseData.length;
              if (maxDataReached) {
                async = false;
              } else if (expectedCountMatched) {
                async = true;
              }
              _this3.setState({
                asyncLoading: async
              });
            }
            _this3.props.updateFunction(_this3.props.name, data);
          }
        });
      }
    }
  }, {
    key: "transformSelectOptions",
    value: function transformSelectOptions(data) {
      var result = {};
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var entry = data[key];
          if (entry && entry.length && entry.length > 0 && entry[0].value) {
            var tmpEntry = [];
            for (var i = 0; i < entry.length; i++) {
              tmpEntry.push(entry[i].value);
            }
            entry = tmpEntry;
          }
          result[key] = entry;
        }
      }
      return result;
    }
  }, {
    key: "addDistances",
    value: function addDistances(data) {
      var _this4 = this;
      var setPosition = function setPosition(position) {
        _this4.position = [position.coords.longitude, position.coords.latitude];
        data.forEach(function (element, index) {
          element[_this4.distanceFieldname] = (0, _Geolocation.formatDistance)((0, _Geolocation.calculateDistance)(_this4.position, [element[_this4.geoxFieldname], element[_this4.geoyFieldname]]));
        });
        _this4.props.updateFunction(_this4.props.name, data);
      };
      (0, _Geolocation.getGeolocation)(setPosition);
    }
  }, {
    key: "removeDuplicates",
    value: function removeDuplicates(currentData, newData) {
      var fieldName = this.props.component.uniqueField;
      var currentUniques = currentData.map(function (item, id) {
        return item[fieldName];
      });
      var resultData = [];
      if (newData && Array.isArray(newData) && newData.length > 0) {
        newData.forEach(function (item, id) {
          var notContained = !currentUniques.includes(item[fieldName]);
          if (notContained) {
            resultData.push(item);
          }
        });
      } else if (newData && (0, _typeof2["default"])(newData) === 'object') {
        for (var newDataElement in newData) {
          var notContained = !currentUniques.includes(newData[newDataElement][fieldName]);
          if (notContained) {
            resultData.push(newData[newDataElement]);
          }
        }
      }
      return resultData;
    }
  }, {
    key: "applyTextFilter",
    value: function applyTextFilter(event) {
      var searchString = event.target.value;
      var currentData = this.initialData;
      var filterFields = this.props.component.textFilterFields;
      var filteredData = [];
      currentData.forEach(function (value, index, array) {
        for (var key in filterFields) {
          if (filterFields.hasOwnProperty(key)) {
            var field = filterFields[key];
            if (value[field].toUpperCase().indexOf(searchString.toUpperCase()) !== -1) {
              if (!filteredData.includes(value)) {
                filteredData.push(value);
              }
              // exit loop
              break;
            }
          }
        }
      });
      this.setState({
        textFilterContent: searchString
      });
      this.props.setFunction(this.props.name, filteredData, []);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.component.withTextFilter) {
        this.initialData = JSON.parse(JSON.stringify(this.props.data));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfVGlsZVZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU0EsY0FBY0EsQ0FBQ0MsVUFBVSxFQUFFO0VBQ3pDLElBQUlDLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3pCRCxTQUFTLENBQUNDLFdBQVcsQ0FBQ0Msa0JBQWtCLENBQUNILFVBQVUsQ0FBQztFQUN0RCxDQUFDLE1BQU07SUFDTCxPQUFPLEtBQUs7RUFDZDtBQUNGO0FBRU8sU0FBU0ksaUJBQWlCQSxDQUFDQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtFQUNoRCxJQUFJQyxJQUFJLEdBQUdDLFVBQVUsQ0FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2hDLElBQUlHLElBQUksR0FBR0QsVUFBVSxDQUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEMsSUFBSUssSUFBSSxHQUFHRixVQUFVLENBQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQyxJQUFJSyxJQUFJLEdBQUdILFVBQVUsQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUVoQztFQUNBLElBQU1PLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztFQUNsQixJQUFNQyxJQUFJLEdBQUdGLElBQUksR0FBR0csSUFBSSxDQUFDQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7RUFDakMsSUFBTUMsSUFBSSxHQUFHTixJQUFJLEdBQUdJLElBQUksQ0FBQ0MsRUFBRSxHQUFDLEdBQUc7RUFDL0IsSUFBTUUsUUFBUSxHQUFHLENBQUNQLElBQUksR0FBQ0MsSUFBSSxJQUFJRyxJQUFJLENBQUNDLEVBQUUsR0FBQyxHQUFHO0VBQzFDLElBQU1HLFdBQVcsR0FBRyxDQUFDWCxJQUFJLEdBQUNFLElBQUksSUFBSUssSUFBSSxDQUFD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QUFRLENBQUMxRSxLQUFLLENBQUMsRUFBRTtnQkFDakM2SSxZQUFZLENBQUNqQixJQUFJLENBQUM1SCxLQUFLLENBQUM7Y0FDMUI7Y0FDQTtjQUNBO1lBQ0Y7VUFDRjtRQUNGO01BQ0YsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDcUUsUUFBUSxDQUFDO1FBQUMvRSxpQkFBaUIsRUFBRWtKO01BQVksQ0FBQyxDQUFDO01BQ2hELElBQUksQ0FBQzFKLEtBQUssQ0FBQ2dJLFdBQVcsQ0FBQyxJQUFJLENBQUNoSSxLQUFLLENBQUNvRyxJQUFJLEVBQUUyRCxZQUFZLEVBQUUsRUFBRSxDQUFDO0lBQzNEO0VBQUM7SUFBQTlJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrSixpQkFBaUJBLENBQUEsRUFBRztNQUNsQixJQUFJLElBQUksQ0FBQ3BLLEtBQUssQ0FBQ0ssU0FBUyxDQUFDcUIsY0FBYyxFQUFFO1FBQ3ZDLElBQUksQ0FBQ2tJLFdBQVcsR0FBR1MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQ3ZLLEtBQUssQ0FBQytCLElBQUksQ0FBQyxDQUFDO01BQ2hFO0lBQ0Y7RUFBQztBQUFBLEVBM2ZtQ3lJLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvR2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvVGlsZVZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdlb2xvY2F0aW9uKGZuQ2FsbGJhY2spIHtcbiAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZm5DYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xuICBsZXQgbG9uMiA9IHBhcnNlRmxvYXQocG9pbnQyWzBdKTtcbiAgbGV0IGxvbjEgPSBwYXJzZUZsb2F0KHBvaW50MVswXSk7XG4gIGxldCBsYXQyID0gcGFyc2VGbG9hdChwb2ludDJbMV0pO1xuICBsZXQgbGF0MSA9IHBhcnNlRmxvYXQocG9pbnQxWzFdKTtcblxuICAvLyBpbXBsZW1lbnQgdGhlIGhhdmVyc2luZSBmb3JtdWxhXG4gIGNvbnN0IFIgPSA2MzcxZTM7IC8vIG1ldHJlc1xuICBjb25zdCBwaGkxID0gbGF0MSAqIE1hdGguUEkvMTgwOyAvLyBwaGksIGxhbWJkYSBpbiByYWRpYW5zXG4gIGNvbnN0IHBoaTIgPSBsYXQyICogTWF0aC5QSS8xODA7XG4gIGNvbnN0IGRlbHRhUGhpID0gKGxhdDItbGF0MSkgKiBNYXRoLlBJLzE4MDtcbiAgY29uc3QgZGVsdGFMYW1iZGEgPSAobG9uMi1sb24xKSAqIE1hdGguUEkvMTgwO1xuXG4gIGNvbnN0IGEgPSBNYXRoLnNpbihkZWx0YVBoaS8yKSAqIE1hdGguc2luKGRlbHRhUGhpLzIpICtcbiAgICBNYXRoLmNvcyhwaGkxKSAqIE1hdGguY29zKHBoaTIpICpcbiAgICBNYXRoLnNpbihkZWx0YUxhbWJkYS8yKSAqIE1hdGguc2luKGRlbHRhTGFtYmRhLzIpO1xuICBjb25zdCBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMS1hKSk7XG5cbiAgcmV0dXJuIFIgKiBjOyAvLyBtZXRlcnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpc3RhbmNlSW5NZXRlcnMpIHtcbiAgaWYgKCFkaXN0YW5jZUluTWV0ZXJzKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlSW5NZXRlcnM7XG4gIH1cbiAgbGV0IHVuaXQgPSBcIm1cIjtcbiAgaWYgKGRpc3RhbmNlSW5NZXRlcnMgPiAxMDAwKSB7XG4gICAgZGlzdGFuY2VJbk1ldGVycyAvPSAxMDAwO1xuICAgIHVuaXQgPSBcImttXCI7XG4gIH1cbiAgZGlzdGFuY2VJbk1ldGVycyA9IGRpc3RhbmNlSW5NZXRlcnMudG9GaXhlZCgyKTtcbiAgcmV0dXJuIGRpc3RhbmNlSW5NZXRlcnMudG9TdHJpbmcoKSArIHVuaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW9sb2NhdGlvbkFjdGl2ZSgpIHtcbiAgcmV0dXJuICEhKG5hdmlnYXRvci5nZW9sb2NhdGlvbik7XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGdldEdlb2xvY2F0aW9uLFxuICBjYWxjdWxhdGVEaXN0YW5jZSxcbiAgZ2VvbG9jYXRpb25BY3RpdmUsXG4gIGZvcm1hdERpc3RhbmNlXG59IGZyb20gXCIuLi9HZW9sb2NhdGlvblwiO1xuXG5jb25zdCBDYXJvdXNlbFRpbGUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vQ2Fyb3VzZWxUaWxlLmpzeFwiKSk7XG5jb25zdCBFeHBlcmltZW50YWxHcmlkVGlsZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9FeHBlcmltZW50YWxHcmlkVGlsZS5qc3hcIikpO1xuY29uc3QgSW5maW5pdGVTY3JvbGwgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIikpO1xuXG5jb25zdCBUaWxlTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vZmllbGRzL1RpbGVNYXBwZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXN5bmNMb2FkaW5nOiBwcm9wcy5jb21wb25lbnQuYXN5bmNVcmwgIT09ICcnLFxuICAgICAgZmlsdGVyV2FzUmVzZXQ6IGZhbHNlLFxuICAgICAgdGV4dEZpbHRlckNvbnRlbnQ6IFwiXCJcbiAgICB9O1xuXG4gICAgdGhpcy5hc3luY1VybCA9IHRoaXMucHJvcHMuY29tcG9uZW50LmFzeW5jVXJsO1xuXG4gICAgdGhpcy5wb3NpdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZ2VvUGVybWlzc2lvbkRlbmllZCA9IHRydWU7IC8vIGRlZmF1bHRcblxuICAgIHRoaXMucG9zaXRpb24gPSBbXTtcblxuICAgIC8vIGlmIChwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgIC8vICAgdGhpcy5jaGVja1Bvc2l0aW9uKCk7XG4gICAgLy8gICBpZiAodGhpcy5wb3NpdGlvbkFjdGl2ZSkge1xuICAgIC8vICAgICB0aGlzLmFkZERpc3RhbmNlcyhwcm9wcy5kYXRhKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgdGhpcy5mZXRjaE1vcmVEYXRhID0gdGhpcy5mZXRjaE1vcmVEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcHBseVRleHRGaWx0ZXIgPSB0aGlzLmFwcGx5VGV4dEZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBoZWFkbGluZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuaGVhZGxpbmVMZXZlbCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lTGV2ZWwpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoMSBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDE+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoMiBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDI+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoMyBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDM+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoNCBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDQ+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoNSBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDU+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBoZWFkbGluZSA9IDxoNiBjbGFzc05hbWU9e1wiYzRnLXRpbGUtaGVhZGxpbmVcIn0+e3RoaXMucHJvcHMuY29tcG9uZW50LmhlYWRsaW5lfTwvaDY+XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0ZXh0RmlsdGVyID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQud2l0aFRleHRGaWx0ZXIpIHtcbiAgICAgIHRleHRGaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtdmlld19fbGlzdC1maWx0ZXItd3JhcHBlclwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJkZXRhaWwtdmlld19fbGlzdC1maWx0ZXItaW5wdXRcIn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17XCJTdWNoYmVncmlmZiBlaW5nZWJlblwifSBvbklucHV0PXt0aGlzLmFwcGx5VGV4dEZpbHRlcn0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnRleHRGaWx0ZXJDb250ZW50fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnVwZGF0ZWQgJiYgdGhpcy5wcm9wcy50ZXh0QmVmb3JlVXBkYXRlKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhcmtcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0QmVmb3JlVXBkYXRlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudXBkYXRlZCAmJiB0aGlzLnByb3BzLnRleHRBZnRlclVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYXJrXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dEFmdGVyVXBkYXRlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYXJrXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcImF1dG9cIn19PjxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiYnVuZGxlcy9jb240Z2lzZnJhbWV3b3JrL2ltZy9wcmVsb2FkZXItaW1hZ2Uuc3ZnXCIgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWltYWdlXCIgYWx0PVwiXCIvPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jb21wb25lbnQuY2xhc3NOYW1lO1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlckNoYW5nZWQgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQuY2xhc3NBZnRlckZpbHRlcikge1xuICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jb21wb25lbnQuY2xhc3NBZnRlckZpbHRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyV2FzUmVzZXQpIHtcbiAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY29tcG9uZW50LmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsUHJvcHMgPSB7XG4gICAgICBkYXRhTGVuZ3RoOiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoLFxuICAgICAgbmV4dDogdGhpcy5mZXRjaE1vcmVEYXRhLFxuICAgICAgaGFzTW9yZTogdGhpcy5zdGF0ZS5hc3luY0xvYWRpbmcsXG4gICAgICBsb2FkZXI6IHRoaXMucHJvcHMuc2hvd1NwaW5uZXIgPyA8ZGl2IGNsYXNzTmFtZT17XCJwcmVsb2FkZXItaW1hZ2Utd3JhcHBlclwifVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiYXV0b1wifX0+e3RoaXMucHJvcHMuY29tcG9uZW50LmxvYWRpbmdUZXh0IHx8XG4gICAgICA8aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz59PC9kaXY+IDogbnVsbCxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc2Nyb2xsVGhyZXNob2xkOiB0aGlzLnByb3BzLmNvbXBvbmVudC5zY3JvbGxUaHJlc2hvbGRcbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5sYXlvdXRUeXBlID09PSBcImNhcm91c2VsXCIpIHtcbiAgICAgIHJldHVybiA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT48aW1nXG4gICAgICAgIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj59PlxuICAgICAgICA8SW5maW5pdGVTY3JvbGwgey4uLnNjcm9sbFByb3BzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjNGctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlciBleHBsb3JlciBvd2wtd3JhcHBlciBjNGctY2Fyb3VzZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1jYXJvdXNlbCBvd2wtdGhlbWUgYzRnLWNhcm91c2VsLXRoZW1lXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY29tcG9uZW50LnRpbGVDbGFzcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsVGlsZUNsYXNzTmFtZSAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC5jb25kaXRpb25hbFRpbGVDbGFzc0ZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtW3RoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsVGlsZUNsYXNzRmllbGRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVt0aGlzLnByb3BzLmNvbXBvbmVudC5jb25kaXRpb25hbFRpbGVDbGFzc0ZpZWxkXSA9PT0gdGhpcy5wcm9wcy5jb21wb25lbnQuY29uZGl0aW9uYWxUaWxlQ2xhc3NWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5jb21wb25lbnQuY29uZGl0aW9uYWxUaWxlQ2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcm91c2VsVGlsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUVudHJ5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25hbENsYXNzZXM9e3RoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgPC9TdXNwZW5zZT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxpc3QgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy10aWxlLWhlYWRsaW5lLXdyYXBwZXJcIn0+e2hlYWRsaW5lfTwvZGl2PlxuICAgICAgICB7dGV4dEZpbHRlcn1cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiYXV0b1wifX0+PGltZ1xuICAgICAgICAgIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj59PlxuICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbCB7Li4uc2Nyb2xsUHJvcHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctbGlzdC1lbGVtZW50c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNvbXBvbmVudC50aWxlQ2xhc3M7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuY29uZGl0aW9uYWxUaWxlQ2xhc3NOYW1lICYmIHRoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsVGlsZUNsYXNzRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtW3RoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsVGlsZUNsYXNzRmllbGRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bdGhpcy5wcm9wcy5jb21wb25lbnQuY29uZGl0aW9uYWxUaWxlQ2xhc3NGaWVsZF0gPT09IHRoaXMucHJvcHMuY29tcG9uZW50LmNvbmRpdGlvbmFsVGlsZUNsYXNzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmNvbXBvbmVudC5jb25kaXRpb25hbFRpbGVDbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEV4cGVyaW1lbnRhbEdyaWRUaWxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRW50cnk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsQ2xhc3Nlcz17dGhpcy5wcm9wcy5jb21wb25lbnQuY29uZGl0aW9uYWxDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQubGlzdFdyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e3RoaXMucHJvcHMuY29tcG9uZW50LndyYXBwZXJJZH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbXBvbmVudC53cmFwcGVyQ2xhc3N9PlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L2Rpdj47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgbGV0IGRlbHRhID0gZmFsc2U7XG4gICAgY29uc3QgY3VycmVudEZpbHRlckRhdGEgPSB0aGlzLnByb3BzLmNvbXBvbmVudC5maWx0ZXJEYXRhO1xuICAgIGNvbnN0IHByZXZGaWx0ZXJEYXRhID0gcHJldlByb3BzLmNvbXBvbmVudC5maWx0ZXJEYXRhO1xuICAgIGxldCBmaWx0ZXJXYXNSZXNldCA9IHRoaXMuY2hlY2tJZkZpbHRlcldhc1Jlc2V0KHByZXZGaWx0ZXJEYXRhLCBjdXJyZW50RmlsdGVyRGF0YSk7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAodHlwZW9mIHByZXZGaWx0ZXJEYXRhID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3VycmVudEZpbHRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZWx0YSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudEZpbHRlckRhdGEgPT09ICdvYmplY3QnICYmIGN1cnJlbnRGaWx0ZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhjdXJyZW50RmlsdGVyRGF0YSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGRlbHRhID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGlmICgoY3VycmVudEZpbHRlckRhdGFba2V5XSAhPT0gcHJldkZpbHRlckRhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKEFycmF5LmlzQXJyYXkoY3VycmVudEZpbHRlckRhdGFba2V5XSkgJiYgY3VycmVudEZpbHRlckRhdGFba2V5XS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKEFycmF5LmlzQXJyYXkocHJldkZpbHRlckRhdGFba2V5XSkgJiYgcHJldkZpbHRlckRhdGFba2V5XS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRGaWx0ZXJEYXRhW2tleV0pICYmIEFycmF5LmlzQXJyYXkocHJldkZpbHRlckRhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGVxdWFscywgaXRlcmF0ZSBhbmQgY2hlY2sgZWFjaCBlbnRyeVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpbHRlckRhdGFba2V5XS5sZW5ndGggPT09IHByZXZGaWx0ZXJEYXRhW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RmlsdGVyRGF0YVtrZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpbHRlckRhdGFba2V5XVtpXSAhPT0gcHJldkZpbHRlckRhdGFba2V5XVtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSB0cnVlOyAvL2hvdGZpeFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgZXF1YWwgbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJldkZpbHRlckRhdGEgPT09ICdvYmplY3QnICYmIHByZXZGaWx0ZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHByZXZGaWx0ZXJEYXRhKTtcbiAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGRlbHRhID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpbHRlckRhdGFba2V5XSAhPT0gcHJldkZpbHRlckRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgZGVsdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5jaGVja0FzeW5jV2hpbGVVcGRhdGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jb21wb25lbnQuYXN5bmNMb2FkaW5nICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC5hc3luY0xvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmFzeW5jTG9hZGluZyAhPT0gdGhpcy5zdGF0ZS5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFzeW5jTG9hZGluZzogdGhpcy5wcm9wcy5jb21wb25lbnQuYXN5bmNMb2FkaW5nLFxuICAgICAgICAgICAgZmlsdGVyV2FzUmVzZXQ6IGZpbHRlcldhc1Jlc2V0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgPT09IHRydWUgJiYgdGhpcy5zdGF0ZS5hc3luY0xvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZmV0Y2hNb3JlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZGaWx0ZXJXYXNSZXNldChwcmV2RmlsdGVyRGF0YSwgY3VycmVudEZpbHRlckRhdGEpIHtcbiAgICBpZiAocHJldkZpbHRlckRhdGEgJiYgIWN1cnJlbnRGaWx0ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwcmV2RmlsdGVyRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBleGNsdWRlZEZpZWxkcyA9IFtcbiAgICAgICdtb2R1bGVJZCcsXG4gICAgICAncmFuZEtleSdcbiAgICBdO1xuICAgIGxldCBmaWx0ZXJTZXRCZWZvcmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJldkZpbHRlckRhdGEpIHtcbiAgICAgIGlmIChwcmV2RmlsdGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByZXZGaWx0ZXJEYXRhW2tleV0pKSB7XG4gICAgICAgICAgaWYgKHByZXZGaWx0ZXJEYXRhW2tleV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVyU2V0QmVmb3JlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZGaWx0ZXJEYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZpbHRlclNldEJlZm9yZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGZpbHRlckZpZWxkc0VtcHR5ID0ge307XG4gICAgbGV0IGZpbHRlckVtcHR5ID0gdHJ1ZTtcbiAgICAvLyBjaGVjayBpZiBmaWx0ZXIgaXMgY2xlYXJlZCBub3dcbiAgICBmb3IgKGxldCBrZXkgaW4gY3VycmVudEZpbHRlckRhdGEpIHtcbiAgICAgIGlmIChjdXJyZW50RmlsdGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IFwic29ydGluZ1wiICYmIGN1cnJlbnRGaWx0ZXJEYXRhW2tleV0gPT09IFwicmFuZG9tXCIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhjbHVkZWRGaWVsZHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRGaWx0ZXJEYXRhW2tleV0pKSB7XG4gICAgICAgICAgZmlsdGVyRmllbGRzRW1wdHlba2V5XSA9IGN1cnJlbnRGaWx0ZXJEYXRhW2tleV0ubGVuZ3RoID09PSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlckZpZWxkc0VtcHR5W2tleV0gPSAhY3VycmVudEZpbHRlckRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGtleSBpbiBmaWx0ZXJGaWVsZHNFbXB0eSkge1xuICAgICAgaWYgKGZpbHRlckZpZWxkc0VtcHR5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXJGaWVsZHNFbXB0eVtrZXldKSB7XG4gICAgICAgICAgZmlsdGVyRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJFbXB0eSAmJiBmaWx0ZXJTZXRCZWZvcmU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZGlzdGFuY2UgZmllbGQgZXhpc3RzIGFuZCBpZiB0aGUgZ2VvbG9jYXRpb24gaXMgYWN0aXZlLlxuICAgKi9cbiAgY2hlY2tQb3NpdGlvbigpIHtcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkcztcbiAgICBsZXQgZ2V0UG9zID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkcykge1xuICAgICAgaWYgKGZpZWxkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChmaWVsZHNba2V5XS50eXBlID09PSBcImRpc3RhbmNlXCIpIHtcbiAgICAgICAgICBnZXRQb3MgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZ2VveEZpZWxkbmFtZSA9IGZpZWxkc1trZXldLmdlb3g7XG4gICAgICAgICAgdGhpcy5nZW95RmllbGRuYW1lID0gZmllbGRzW2tleV0uZ2VveTtcbiAgICAgICAgICB0aGlzLmRpc3RhbmNlRmllbGRuYW1lID0gZmllbGRzW2tleV0ubmFtZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uQWN0aXZlID0gZ2V0UG9zICYmIGdlb2xvY2F0aW9uQWN0aXZlKCk7XG4gIH1cblxuICBmZXRjaE1vcmVEYXRhKCkge1xuICAgIGxldCBsb2FkRGF0YTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQub25seVNlYXJjaFdpdGhQYXJhbSkge1xuICAgICAgbGV0IHBhcmFtID0gdGhpcy5wcm9wcy5jb21wb25lbnQuZmlsdGVyRGF0YVt0aGlzLnByb3BzLmNvbXBvbmVudC5vbmx5U2VhcmNoV2l0aFBhcmFtXTtcbiAgICAgIGxvYWREYXRhID0gcGFyYW0gJiYgKHBhcmFtICE9PSBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZERhdGEgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb2FkRGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YXN5bmNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgbGV0IHVybCA9IHRoaXMuYXN5bmNVcmwucmVwbGFjZShcIntvZmZzZXR9XCIsIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpO1xuICAgICAgdXJsID0gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY29tcG9uZW50LmZpbHRlckRhdGEgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY29tcG9uZW50LmZpbHRlckRhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZXQgZmlsdGVyUGFyYW1zID0gdGhpcy5wcm9wcy5jb21wb25lbnQuZmlsdGVyRGF0YTtcbiAgICAgICAgZmlsdGVyUGFyYW1zID0gdGhpcy50cmFuc2Zvcm1TZWxlY3RPcHRpb25zKGZpbHRlclBhcmFtcyk7XG4gICAgICAgIGlmIChmaWx0ZXJQYXJhbXMuc29ydGluZyA9PT0gXCJkaXN0YW5jZVwiKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25BY3RpdmUgJiYgdGhpcy5wb3NpdGlvbikge1xuICAgICAgICAgICAgZmlsdGVyUGFyYW1zLnBvcyA9IHRoaXMucG9zaXRpb247XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25BY3RpdmUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2V0UG9zaXRpb24gPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdlb1Blcm1pc3Npb25EZW5pZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdlb1Blcm1pc3Npb25EZW5pZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gW3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZV07XG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaE1vcmVEYXRhKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2V0R2VvbG9jYXRpb24oc2V0UG9zaXRpb24pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybC5zZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGZpbHRlclBhcmFtcykudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cmwuc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmaWx0ZXJQYXJhbXMpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmZpbHRlckRhdGEuc29ydGluZyA9PT0gXCJkaXN0YW5jZVwiICYmICh0aGlzLnBvc2l0aW9uLmxlbmd0aCA9PT0gMCkgJiYgIXRoaXMuZ2VvUGVybWlzc2lvbkRlbmllZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmZXRjaCh1cmwuaHJlZilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZURhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wb25lbnQuYXN5bmNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIG5vIG5ldyBkYXRhXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FzeW5jTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgLy8gc2V0IHVwZGF0ZWQgdG8gdHJ1ZVxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZ1bmN0aW9uKHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5jb21wb25lbnQuZGF0YSwgdGhpcy5wcm9wcy5jb21wb25lbnQuZmlsdGVyRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgZHVwbGljYXRlc1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQudW5pcXVlRmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZXModGhpcy5wcm9wcy5jb21wb25lbnQuZGF0YSwgcmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YS5jb25jYXQocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFzeW5jTG9hZGluZykge1xuICAgICAgICAgICAgICAgIGxldCBtYXhEYXRhID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jb21wb25lbnQubWF4RGF0YSwgMTApO1xuICAgICAgICAgICAgICAgIGxldCBsb2FkU3RlcCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY29tcG9uZW50LmxvYWRTdGVwLCAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGFzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IG1heERhdGFSZWFjaGVkID0gbWF4RGF0YSA+IDAgJiYgZGF0YS5sZW5ndGggPT09IG1heERhdGE7XG4gICAgICAgICAgICAgICAgbGV0IGV4cGVjdGVkQ291bnRNYXRjaGVkID0gbG9hZFN0ZXAgPT09IHJlc3BvbnNlRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKG1heERhdGFSZWFjaGVkKSB7XG4gICAgICAgICAgICAgICAgICBhc3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRDb3VudE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgIGFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXN5bmNMb2FkaW5nOiBhc3luY30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5uYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtU2VsZWN0T3B0aW9ucyhkYXRhKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRhdGFba2V5XTtcbiAgICAgICAgaWYgKGVudHJ5ICYmIGVudHJ5Lmxlbmd0aCAmJiBlbnRyeS5sZW5ndGggPiAwICYmIGVudHJ5WzBdLnZhbHVlKSB7XG4gICAgICAgICAgbGV0IHRtcEVudHJ5ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG1wRW50cnkucHVzaChlbnRyeVtpXS52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVudHJ5ID0gdG1wRW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSBlbnRyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYWRkRGlzdGFuY2VzKGRhdGEpIHtcbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IFtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGVdO1xuXG4gICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGVsZW1lbnRbdGhpcy5kaXN0YW5jZUZpZWxkbmFtZV0gPVxuICAgICAgICAgIGZvcm1hdERpc3RhbmNlKGNhbGN1bGF0ZURpc3RhbmNlKHRoaXMucG9zaXRpb24sIFtlbGVtZW50W3RoaXMuZ2VveEZpZWxkbmFtZV0sIGVsZW1lbnRbdGhpcy5nZW95RmllbGRuYW1lXV0pKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVGdW5jdGlvbih0aGlzLnByb3BzLm5hbWUsIGRhdGEpO1xuICAgIH1cbiAgICBnZXRHZW9sb2NhdGlvbihzZXRQb3NpdGlvbik7XG4gIH1cblxuICByZW1vdmVEdXBsaWNhdGVzKGN1cnJlbnREYXRhLCBuZXdEYXRhKSB7XG4gICAgbGV0IGZpZWxkTmFtZSA9IHRoaXMucHJvcHMuY29tcG9uZW50LnVuaXF1ZUZpZWxkO1xuXG4gICAgY29uc3QgY3VycmVudFVuaXF1ZXMgPSBjdXJyZW50RGF0YS5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbVtmaWVsZE5hbWVdO1xuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdERhdGEgPSBbXTtcblxuICAgIGlmIChuZXdEYXRhICYmIEFycmF5LmlzQXJyYXkobmV3RGF0YSkgJiYgKG5ld0RhdGEubGVuZ3RoID4gMCkpICB7XG4gICAgICBuZXdEYXRhLmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgIGxldCBub3RDb250YWluZWQgPSAhY3VycmVudFVuaXF1ZXMuaW5jbHVkZXMoaXRlbVtmaWVsZE5hbWVdKTtcbiAgICAgICAgaWYgKG5vdENvbnRhaW5lZCkge1xuICAgICAgICAgIHJlc3VsdERhdGEucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXdEYXRhICYmIHR5cGVvZiBuZXdEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIgbmV3RGF0YUVsZW1lbnQgaW4gbmV3RGF0YSkge1xuICAgICAgICBsZXQgbm90Q29udGFpbmVkID0gIWN1cnJlbnRVbmlxdWVzLmluY2x1ZGVzKG5ld0RhdGFbbmV3RGF0YUVsZW1lbnRdW2ZpZWxkTmFtZV0pO1xuICAgICAgICBpZiAobm90Q29udGFpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0RGF0YS5wdXNoKG5ld0RhdGFbbmV3RGF0YUVsZW1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHREYXRhO1xuICB9XG5cbiAgYXBwbHlUZXh0RmlsdGVyKGV2ZW50KSB7XG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuaW5pdGlhbERhdGE7XG4gICAgY29uc3QgZmlsdGVyRmllbGRzID0gdGhpcy5wcm9wcy5jb21wb25lbnQudGV4dEZpbHRlckZpZWxkcztcbiAgICBsZXQgZmlsdGVyZWREYXRhID0gW107XG4gICAgY3VycmVudERhdGEuZm9yRWFjaCgodmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGZpbHRlckZpZWxkcykge1xuICAgICAgICBpZiAoZmlsdGVyRmllbGRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgZmllbGQgPSBmaWx0ZXJGaWVsZHNba2V5XTtcbiAgICAgICAgICBpZiAodmFsdWVbZmllbGRdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hTdHJpbmcudG9VcHBlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcmVkRGF0YS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyZWREYXRhLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhpdCBsb29wXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3RleHRGaWx0ZXJDb250ZW50OiBzZWFyY2hTdHJpbmd9KTtcbiAgICB0aGlzLnByb3BzLnNldEZ1bmN0aW9uKHRoaXMucHJvcHMubmFtZSwgZmlsdGVyZWREYXRhLCBbXSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQud2l0aFRleHRGaWx0ZXIpIHtcbiAgICAgIHRoaXMuaW5pdGlhbERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJnZXRHZW9sb2NhdGlvbiIsImZuQ2FsbGJhY2siLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNhbGN1bGF0ZURpc3RhbmNlIiwicG9pbnQxIiwicG9pbnQyIiwibG9uMiIsInBhcnNlRmxvYXQiLCJsb24xIiwibGF0MiIsImxhdDEiLCJSIiwicGhpMSIsIk1hdGgiLCJQSSIsInBoaTIiLCJkZWx0YVBoaSIsImRlbHRhTGFtYmRhIiwiYSIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiLCJmb3JtYXREaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJ1bml0IiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZ2VvbG9jYXRpb25BY3RpdmUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfR2VvbG9jYXRpb24iLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkNhcm91c2VsVGlsZSIsIlJlYWN0IiwibGF6eSIsIkV4cGVyaW1lbnRhbEdyaWRUaWxlIiwiSW5maW5pdGVTY3JvbGwiLCJUaWxlTWFwcGVyRmllbGQiLCJUaWxlVmlldyIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzdGF0ZSIsImFzeW5jTG9hZGluZyIsImNvbXBvbmVudCIsImFzeW5jVXJsIiwiZmlsdGVyV2FzUmVzZXQiLCJ0ZXh0RmlsdGVyQ29udGVudCIsInBvc2l0aW9uQWN0aXZlIiwiZ2VvUGVybWlzc2lvbkRlbmllZCIsInBvc2l0aW9uIiwiZmV0Y2hNb3JlRGF0YSIsImJpbmQiLCJhcHBseVRleHRGaWx0ZXIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiaGVhZGxpbmUiLCJoZWFkbGluZUxldmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRGaWx0ZXIiLCJ3aXRoVGV4dEZpbHRlciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJkYXRhIiwibGVuZ3RoIiwidXBkYXRlZCIsInRleHRCZWZvcmVVcGRhdGUiLCJyb2xlIiwidGV4dEFmdGVyVXBkYXRlIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJzcmMiLCJhbHQiLCJmaWx0ZXJDaGFuZ2VkIiwiY2xhc3NBZnRlckZpbHRlciIsInNjcm9sbFByb3BzIiwiZGF0YUxlbmd0aCIsIm5leHQiLCJoYXNNb3JlIiwibG9hZGVyIiwic2hvd1NwaW5uZXIiLCJsb2FkaW5nVGV4dCIsInNjcm9sbFRocmVzaG9sZCIsImxheW91dFR5cGUiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwibWFwIiwiaXRlbSIsImlkIiwidGlsZUNsYXNzIiwiY29uZGl0aW9uYWxUaWxlQ2xhc3NOYW1lIiwiY29uZGl0aW9uYWxUaWxlQ2xhc3NGaWVsZCIsImNvbmRpdGlvbmFsVGlsZUNsYXNzVmFsdWUiLCJkYXRhRW50cnkiLCJmaWVsZHMiLCJjb25kaXRpb25hbENsYXNzZXMiLCJsYW5ndWFnZVJlZnMiLCJsaXN0IiwiRnJhZ21lbnQiLCJsaXN0V3JhcHBlciIsIndyYXBwZXJJZCIsIndyYXBwZXJDbGFzcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiZGVsdGEiLCJjdXJyZW50RmlsdGVyRGF0YSIsImZpbHRlckRhdGEiLCJwcmV2RmlsdGVyRGF0YSIsImNoZWNrSWZGaWx0ZXJXYXNSZXNldCIsImtleXMiLCJfdHlwZW9mMiIsImZvckVhY2giLCJpbmRleCIsIkFycmF5IiwiaXNBcnJheSIsImNoZWNrQXN5bmNXaGlsZVVwZGF0ZSIsInNldFN0YXRlIiwiZXhjbHVkZWRGaWVsZHMiLCJmaWx0ZXJTZXRCZWZvcmUiLCJmaWx0ZXJGaWVsZHNFbXB0eSIsImZpbHRlckVtcHR5IiwiaW5jbHVkZXMiLCJjaGVja1Bvc2l0aW9uIiwiZ2V0UG9zIiwiZ2VveEZpZWxkbmFtZSIsImdlb3giLCJnZW95RmllbGRuYW1lIiwiZ2VveSIsImRpc3RhbmNlRmllbGRuYW1lIiwibmFtZSIsIl90aGlzMyIsImxvYWREYXRhIiwib25seVNlYXJjaFdpdGhQYXJhbSIsInBhcmFtIiwidXJsIiwicmVwbGFjZSIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImZpbHRlclBhcmFtcyIsInRyYW5zZm9ybVNlbGVjdE9wdGlvbnMiLCJzb3J0aW5nIiwicG9zIiwic2V0UG9zaXRpb24iLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoIiwiaHJlZiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXNwb25zZURhdGEiLCJzZXRGdW5jdGlvbiIsInVuaXF1ZUZpZWxkIiwicmVtb3ZlRHVwbGljYXRlcyIsImNvbmNhdCIsIm1heERhdGEiLCJwYXJzZUludCIsImxvYWRTdGVwIiwiYXN5bmMiLCJtYXhEYXRhUmVhY2hlZCIsImV4cGVjdGVkQ291bnRNYXRjaGVkIiwidXBkYXRlRnVuY3Rpb24iLCJyZXN1bHQiLCJlbnRyeSIsInRtcEVudHJ5IiwicHVzaCIsImFkZERpc3RhbmNlcyIsIl90aGlzNCIsImVsZW1lbnQiLCJjdXJyZW50RGF0YSIsIm5ld0RhdGEiLCJmaWVsZE5hbWUiLCJjdXJyZW50VW5pcXVlcyIsInJlc3VsdERhdGEiLCJub3RDb250YWluZWQiLCJuZXdEYXRhRWxlbWVudCIsImV2ZW50Iiwic2VhcmNoU3RyaW5nIiwidGFyZ2V0IiwiaW5pdGlhbERhdGEiLCJmaWx0ZXJGaWVsZHMiLCJ0ZXh0RmlsdGVyRmllbGRzIiwiZmlsdGVyZWREYXRhIiwiYXJyYXkiLCJmaWVsZCIsInRvVXBwZXJDYXNlIiwiaW5kZXhPZiIsImNvbXBvbmVudERpZE1vdW50IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==