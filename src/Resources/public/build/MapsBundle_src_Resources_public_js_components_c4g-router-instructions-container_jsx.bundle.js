"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-router-instructions-container_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-instruction.jsx":
/*!***********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-instruction.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterInstruction = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../MapsBundle/node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
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
var RouterInstruction = exports.RouterInstruction = /*#__PURE__*/function (_Component) {
  function RouterInstruction(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterInstruction);
    _this = _callSuper(this, RouterInstruction, [props]);
    (0, _defineProperty2["default"])(_this, "fnItemClick", function () {
      if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
        this.props.routerHintSource.clear();
        var feature = this.props.routerWaySource.getFeatures()[0];
        var coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = this.props.dataPos;
        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = (0, _proj.fromLonLat)(stringlonlat);
          var currentHintFeature = new _ol.Feature({
            geometry: new _geom.Point(newCoord)
          });
          this.props.routerHintSource.addFeature(currentHintFeature);
          this.props.options.mapController.map.getView().setCenter(newCoord);
        } else if (coordinates && (this.props.dataStart || this.props.dataStart === 0) && this.props.dataEnd) {
          var geom;
          if (this.props.dataStart === this.props.dataEnd) {
            geom = new _geom.Point(coordinates[this.props.dataStart]);
          } else {
            var newCoordinates = coordinates.slice(this.props.dataStart, this.props.dataEnd);
            geom = new _geom.LineString(newCoordinates);
          }
          var _currentHintFeature = new _ol.Feature({
            geometry: geom
          });
          _currentHintFeature.setStyle(new _style.Style({
            stroke: new _style.Stroke({
              color: 'rgba(255, 0, 0, 1)',
              width: 20
            })
          }));
          // let currentZoom = this.props.mapController.map.getView().getZoom();
          this.props.routerHintSource.addFeature(_currentHintFeature);
          var width = jQuery(".c4g-router-container-right").css('width');
          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          }
          var maxZoom = parseInt(this.props.mapController.data.starboard.maxZoom) || 22;
          this.props.mapController.map.getView().fit(geom, {
            padding: [50, width, 50, 50],
            duration: 500,
            maxZoom: maxZoom
          });
        }
      }
    });
    (0, _defineProperty2["default"])(_this, "fnItemOver", function () {
      if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
        var feature = this.props.routerWaySource.getFeatures()[0];
        if (feature) {
          this.props.routerHintSource.clear();
          var coordLonLat = this.props.dataPos;
          if (coordLonLat) {
            var stringlonlat = coordLonLat.split(",");
            stringlonlat[0] = parseFloat(stringlonlat[0]);
            stringlonlat[1] = parseFloat(stringlonlat[1]);
            var newCoord = (0, _proj.fromLonLat)(stringlonlat);
            var currentHintFeature = new _ol.Feature({
              geometry: new _geom.Point(newCoord)
            });
            this.props.routerHintSource.addFeature(currentHintFeature);
          } else if ((this.props.dataStart || this.props.dataStart === 0) && this.props.dataEnd) {
            var coordinates = feature.getGeometry().getCoordinates();
            if (coordinates) {
              var newCoordinates = coordinates.slice(this.props.dataStart, this.props.dataEnd);
              var _currentHintFeature2;
              if (newCoordinates.length === 1) {
                _currentHintFeature2 = new _ol.Feature({
                  geometry: new _geom.Point(newCoordinates)
                });
              } else {
                _currentHintFeature2 = new _ol.Feature({
                  geometry: new _geom.LineString(newCoordinates)
                });
              }
              _currentHintFeature2.setStyle(new _style.Style({
                stroke: new _style.Stroke({
                  color: 'rgba(255, 0, 0, 1)',
                  width: 15
                })
              }));
              this.props.routerHintSource.addFeature(_currentHintFeature2);
            }
          }
        }
      }
    });
    (0, _defineProperty2["default"])(_this, "fnItemOut", function () {
      this.props.routerHintSource.clear();
    });
    _this.fnItemOver = _this.fnItemOver.bind(_this);
    _this.fnItemClick = _this.fnItemClick.bind(_this);
    _this.fnItemOut = _this.fnItemOut.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(RouterInstruction, _Component);
  return (0, _createClass2["default"])(RouterInstruction, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction",
        onMouseUp: this.fnItemClick,
        onMouseLeave: this.fnItemOut,
        onMouseEnter: this.fnItemOver,
        key: this.props.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-image"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.getInstructionIcon(this.props.imgPath),
        alt: ""
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-text"
      }, this.props.instrText), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-distance"
      }, (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.instrDist * 1000)));
    }
  }, {
    key: "getInstructionIcon",
    value: function getInstructionIcon(intType) {
      var routerEngine = this.props.mapController.data.router_api_selection;
      switch (routerEngine) {
        case '6':
        case '5':
        case '4':
          return this.getInstructionIconValhalla(intType);
        case '3':
          return this.getInstructionIconGraphhopper(intType);
        case '2':
          return this.getInstructionIconORS(intType);
      }
    }

    /**
     * Translates an integer number into the correct instruction icon (Graphhopper icons).
     * @param intType
     * @returns {string}
     */
  }, {
    key: "getInstructionIconValhalla",
    value: function getInstructionIconValhalla(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "default.png";
          break;
        case 1:
          image = "head.png";
          break;
        case 2:
          image = "head.png";
          break;
        case 3:
          image = "head.png";
          break;
        case 4:
          image = "target.png";
          break;
        case 5:
          image = "target.png";
          break;
        case 6:
          image = "target.png";
          break;
        case 7:
          image = "continue.png";
          break;
        case 8:
          image = "continue.png";
          break;
        case 9:
          image = "slight-right.png";
          break;
        case 10:
          image = "turn-right.png";
          break;
        case 11:
          image = "sharp-right.png";
          break;
        case 12:
          image = "u-turn.png";
          break;
        case 13:
          image = "u-turn.png";
          break;
        case 14:
          image = "sharp-left.png";
          break;
        case 15:
          image = "turn-left.png";
          break;
        case 16:
          image = "slight-left.png";
          break;
        case 17:
          image = "continue.png";
          break;
        case 18:
          image = "slight-right.png";
          break;
        case 19:
          image = "slight-left.png";
          break;
        case 20:
          image = "slight-right.png";
          break;
        case 21:
          image = "slight-left.png";
          break;
        case 22:
          image = "continue.png";
          break;
        case 23:
          image = "slight-right.png";
          break;
        case 24:
          image = "slight-left.png";
          break;
        case 25:
          image = "continue.png";
          break;
        case 26:
          image = "round-about.png";
          break;
        case 27:
          image = "round-about.png";
          break;
        default:
          image = "default.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }, {
    key: "getInstructionIconGraphhopper",
    value: function getInstructionIconGraphhopper(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "continue.png";
          break;
        case -2:
          image = "turn-left.png";
          break;
        case 2:
          image = "turn-right.png";
          break;
        case -1:
          image = "turn-left.png";
          break;
        case 1:
          image = "turn-right.png";
          break;
        case -3:
          image = "sharp-left.png";
          break;
        case 3:
          image = "sharp-right.png";
          break;
        case -7:
          image = "slight-left.png";
          break;
        case 7:
          image = "slight-right.png";
          break;
        case 6:
          image = "round-about.png";
          break;
        case 4:
          image = "target.png";
          break;
        case 5:
          image = "target.png";
          break;
        case -98:
          image = "u-turn.png";
          break;
        case 99:
          image = "head.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }, {
    key: "getInstructionIconORS",
    value: function getInstructionIconORS(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "turn-left.png";
          break;
        case 1:
          image = "turn-right.png";
          break;
        case 2:
          image = "sharp-left.png";
          break;
        case 3:
          image = "sharp-right.png";
          break;
        case 4:
          image = "slight-left.png";
          break;
        case 5:
          image = "slight-right.png";
          break;
        case 6:
          image = "continue.png";
          break;
        case 7:
          image = "round-about.png";
          break;
        case 8:
          image = "round-about.png";
          break;
        case 9:
          image = "u-turn.png";
          break;
        case 10:
          image = "target.png";
          break;
        case 11:
          image = "head.png";
          break;
        case 12:
          image = "slight-left.png";
          break;
        case 13:
          image = "slight-right.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-instructions-container.jsx":
/*!**********************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \**********************************************************************************************/
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
var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-instruction.jsx");
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js");
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
var RouterInstructionsContainer = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterInstructionsContainer(props) {
    (0, _classCallCheck2["default"])(this, RouterInstructionsContainer);
    return _callSuper(this, RouterInstructionsContainer, [props]);
  }
  (0, _inherits2["default"])(RouterInstructionsContainer, _Component);
  return (0, _createClass2["default"])(RouterInstructionsContainer, [{
    key: "render",
    value: function render() {
      var _this = this;
      var instructions = [];
      var time = "";
      var distance = "";
      var profile = "";
      if (this.props.routerInstructions && this.props.routerInstructions.instructions) {
        instructions = this.props.routerInstructions.instructions;
      }
      if (instructions.length === 0) {
        return "";
      } else {
        // instructions present, container open
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className
        }, this.props.header, this.props.switcher, instructions.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterInstruction.RouterInstruction, {
            imgPath: item.type,
            instrText: item.instruction,
            instrDist: item.length,
            key: index,
            id: index,
            mapController: _this.props.mapController,
            dataStart: item.begin_shape_index,
            dataEnd: item.end_shape_index,
            routerWaySource: _this.props.routerWaySource,
            routerHintSource: _this.props.routerHintSource
          });
        }));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lcl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLHlCQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsR0FBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLEtBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssTUFBQSxHQUFBTCxtQkFBQTtBQUF1QyxTQUFBTSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVIsd0JBQUFRLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWZ2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWlCYTRCLGlCQUFpQixHQUFBQyx5QkFBQSwwQkFBQUMsVUFBQTtFQUU1QixTQUFBRixrQkFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxpQkFBQTtJQUNqQkksS0FBQSxHQUFBaEIsVUFBQSxPQUFBWSxpQkFBQSxHQUFNRyxLQUFLO0lBQUUsSUFBQUcsZ0JBQUEsYUFBQUYsS0FBQSxpQkFnQkQsWUFBWTtNQUN4QixJQUFJLElBQUksQ0FBQ0QsS0FBSyxDQUFDSSxlQUFlLElBQUksSUFBSSxDQUFDSixLQUFLLENBQUNJLGVBQWUsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFBRTtRQUMxRSxJQUFJLENBQUNMLEtBQUssQ0FBQ00sZ0JBQWdCLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUlDLE9BQU8sR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ0ksZUFBZSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJSSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDeEQsSUFBSUMsV0FBVyxHQUFHLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxPQUFPO1FBQ3BDLElBQUlELFdBQVcsRUFBRTtVQUNmLElBQUlFLFlBQVksR0FBR0YsV0FBVyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO1VBQ3pDRCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUdFLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzdDQSxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUdFLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzdDLElBQUlHLFFBQVEsR0FBRyxJQUFBQyxnQkFBVSxFQUFDSixZQUFZLENBQUM7VUFDdkMsSUFBSUssa0JBQWtCLEdBQUcsSUFBSUMsV0FBTyxDQUFDO1lBQ25DQyxRQUFRLEVBQUUsSUFBSUMsV0FBSyxDQUFDTCxRQUFRO1VBQzlCLENBQUMsQ0FBQztVQUNGLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ00sZ0JBQWdCLENBQUNpQixVQUFVLENBQUNKLGtCQUFrQixDQUFDO1VBQzFELElBQUksQ0FBQ25CLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ1gsUUFBUSxDQUFDO1FBQ3BFLENBQUMsTUFDSSxJQUFJUixXQUFXLEtBQUssSUFBSSxDQUFDVCxLQUFLLENBQUM2QixTQUFTLElBQUksSUFBSSxDQUFDN0IsS0FBSyxDQUFDNkIsU0FBUyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQzdCLEtBQUssQ0FBQzhCLE9BQU8sRUFBRTtVQUNsRyxJQUFJQyxJQUFJO1VBQ1IsSUFBSSxJQUFJLENBQUMvQixLQUFLLENBQUM2QixTQUFTLEtBQUssSUFBSSxDQUFDN0IsS0FBSyxDQUFDOEIsT0FBTyxFQUFFO1lBQy9DQyxJQUFJLEdBQUcsSUFBSVQsV0FBSyxDQUFDYixXQUFXLENBQUMsSUFBSSxDQUFDVCxLQUFLLENBQUM2QixTQUFTLENBQUMsQ0FBQztVQUNyRCxDQUFDLE1BQ0k7WUFDSCxJQUFJRyxjQUFjLEdBQUd2QixXQUFXLENBQUN3QixLQUFLLENBQUMsSUFBSSxDQUFDakMsS0FBSyxDQUFDNkIsU0FBUyxFQUFFLElBQUksQ0FBQzdCLEtBQUssQ0FBQzhCLE9BQU8sQ0FBQztZQUNoRkMsSUFBSSxHQUFHLElBQUlHLGdCQUFVLENBQUNGLGNBQWMsQ0FBQztVQUN2QztVQUNBLElBQUliLG1CQUFrQixHQUFHLElBQUlDLFdBQU8sQ0FBQztZQUNuQ0MsUUFBUSxFQUFFVTtVQUNaLENBQUMsQ0FBQztVQUNGWixtQkFBa0IsQ0FBQ2dCLFFBQVEsQ0FDdkIsSUFBSUMsWUFBSyxDQUFDO1lBQ1JDLE1BQU0sRUFBRSxJQUFJQyxhQUFNLENBQUM7Y0FDakJDLEtBQUssRUFBRSxvQkFBb0I7Y0FDM0JDLEtBQUssRUFBRTtZQUNULENBQUM7VUFDSCxDQUFDLENBQ0wsQ0FBQztVQUNEO1VBQ0EsSUFBSSxDQUFDeEMsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQ2lCLFVBQVUsQ0FBQ0osbUJBQWtCLENBQUM7VUFDMUQsSUFBSXFCLEtBQUssR0FBR0MsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7VUFDOUQsSUFBSUYsS0FBSyxFQUFFO1lBQ1RBLEtBQUssR0FBR0EsS0FBSyxDQUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN4QnlCLEtBQUssR0FBR0csS0FBSyxDQUFDQyxPQUFPLENBQUNKLEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUs7WUFDL0NBLEtBQUssR0FBR0ssUUFBUSxDQUFDTCxLQUFLLENBQUMsR0FBSSxFQUFFO1VBQy9CLENBQUMsTUFDSTtZQUNIQSxLQUFLLEdBQUcsRUFBRTtVQUNaO1VBQ0EsSUFBSU0sT0FBTyxHQUFHRCxRQUFRLENBQUMsSUFBSSxDQUFDN0MsS0FBSyxDQUFDeUIsYUFBYSxDQUFDc0IsSUFBSSxDQUFDQyxTQUFTLENBQUNGLE9BQU8sQ0FBQyxJQUFJLEVBQUU7VUFDN0UsSUFBSSxDQUFDOUMsS0FBSyxDQUFDeUIsYUFBYSxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUNzQixHQUFHLENBQUNsQixJQUFJLEVBQUU7WUFDL0NtQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUNWLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1lBQ3pCVyxRQUFRLEVBQUUsR0FBRztZQUNiTCxPQUFPLEVBQUVBO1VBQ1gsQ0FBQyxDQUFDO1FBQ0o7TUFDRjtJQUNGLENBQUM7SUFBQSxJQUFBM0MsZ0JBQUEsYUFBQUYsS0FBQSxnQkFFWSxZQUFZO01BQ3ZCLElBQUksSUFBSSxDQUFDRCxLQUFLLENBQUNJLGVBQWUsSUFBSSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksZUFBZSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1FBQzFFLElBQUlHLE9BQU8sR0FBRyxJQUFJLENBQUNSLEtBQUssQ0FBQ0ksZUFBZSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJRyxPQUFPLEVBQUU7VUFDWCxJQUFJLENBQUNSLEtBQUssQ0FBQ00sZ0JBQWdCLENBQUNDLEtBQUssQ0FBQyxDQUFDO1VBQ25DLElBQUlLLFdBQVcsR0FBRyxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsT0FBTztVQUNwQyxJQUFJRCxXQUFXLEVBQUU7WUFDZixJQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN6Q0QsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHRSxVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3Q0EsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHRSxVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJRyxRQUFRLEdBQUcsSUFBQUMsZ0JBQVUsRUFBQ0osWUFBWSxDQUFDO1lBQ3ZDLElBQUlLLGtCQUFrQixHQUFHLElBQUlDLFdBQU8sQ0FBQztjQUNuQ0MsUUFBUSxFQUFFLElBQUlDLFdBQUssQ0FBQ0wsUUFBUTtZQUM5QixDQUFDLENBQUM7WUFDRixJQUFJLENBQUNqQixLQUFLLENBQUNNLGdCQUFnQixDQUFDaUIsVUFBVSxDQUFDSixrQkFBa0IsQ0FBQztVQUM1RCxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ25CLEtBQUssQ0FBQzZCLFNBQVMsSUFBSSxJQUFJLENBQUM3QixLQUFLLENBQUM2QixTQUFTLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQzdCLEtBQUssQ0FBQzhCLE9BQU8sRUFBRTtZQUNyRixJQUFJckIsV0FBVyxHQUFHRCxPQUFPLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hELElBQUlGLFdBQVcsRUFBRTtjQUNmLElBQUl1QixjQUFjLEdBQUd2QixXQUFXLENBQUN3QixLQUFLLENBQUMsSUFBSSxDQUFDakMsS0FBSyxDQUFDNkIsU0FBUyxFQUFFLElBQUksQ0FBQzdCLEtBQUssQ0FBQzhCLE9BQU8sQ0FBQztjQUNoRixJQUFJWCxvQkFBa0I7Y0FDdEIsSUFBSWEsY0FBYyxDQUFDb0IsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0JqQyxvQkFBa0IsR0FBRyxJQUFJQyxXQUFPLENBQUM7a0JBQy9CQyxRQUFRLEVBQUUsSUFBSUMsV0FBSyxDQUFDVSxjQUFjO2dCQUNwQyxDQUFDLENBQUM7Y0FDSixDQUFDLE1BQ0k7Z0JBQ0hiLG9CQUFrQixHQUFHLElBQUlDLFdBQU8sQ0FBQztrQkFDL0JDLFFBQVEsRUFBRSxJQUFJYSxnQkFBVSxDQUFDRixjQUFjO2dCQUN6QyxDQUFDLENBQUM7Y0FDSjtjQUNBYixvQkFBa0IsQ0FBQ2dCLFFBQVEsQ0FDdkIsSUFBSUMsWUFBSyxDQUFDO2dCQUNSQyxNQUFNLEVBQUUsSUFBSUMsYUFBTSxDQUFDO2tCQUNqQkMsS0FBSyxFQUFFLG9CQUFvQjtrQkFDM0JDLEtBQUssRUFBRTtnQkFDVCxDQUFDO2NBQ0gsQ0FBQyxDQUNMLENBQUM7Y0FDRCxJQUFJLENBQUN4QyxLQUFLLENBQUNNLGdCQUFnQixDQUFDaUIsVUFBVSxDQUFDSixvQkFBa0IsQ0FBQztZQUM1RDtVQUNGO1FBQ0Y7TUFDRjtJQUNGLENBQUM7SUFBQSxJQUFBaEIsZ0JBQUEsYUFBQUYsS0FBQSxlQUVXLFlBQVk7TUFDdEIsSUFBSSxDQUFDRCxLQUFLLENBQUNNLGdCQUFnQixDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBeEhDTixLQUFBLENBQUtvRCxVQUFVLEdBQUdwRCxLQUFBLENBQUtvRCxVQUFVLENBQUNDLElBQUksQ0FBQXJELEtBQUssQ0FBQztJQUM1Q0EsS0FBQSxDQUFLc0QsV0FBVyxHQUFHdEQsS0FBQSxDQUFLc0QsV0FBVyxDQUFDRCxJQUFJLENBQUFyRCxLQUFLLENBQUM7SUFDOUNBLEtBQUEsQ0FBS3VELFNBQVMsR0FBR3ZELEtBQUEsQ0FBS3VELFNBQVMsQ0FBQ0YsSUFBSSxDQUFBckQsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDLElBQUF3RCxVQUFBLGFBQUE1RCxpQkFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQTJELGFBQUEsYUFBQTdELGlCQUFBO0lBQUE4RCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxvQkFDRXhHLE1BQUEsWUFBQXlHLGFBQUE7UUFBS0MsU0FBUyxFQUFFLHdCQUF5QjtRQUFDQyxTQUFTLEVBQUUsSUFBSSxDQUFDVCxXQUFZO1FBQUNVLFlBQVksRUFBRSxJQUFJLENBQUNULFNBQVU7UUFBQ1UsWUFBWSxFQUFFLElBQUksQ0FBQ2IsVUFBVztRQUFDTSxHQUFHLEVBQUUsSUFBSSxDQUFDM0QsS0FBSyxDQUFDbUU7TUFBRyxnQkFDcko5RyxNQUFBLFlBQUF5RyxhQUFBO1FBQUtDLFNBQVMsRUFBRTtNQUErQixnQkFBQzFHLE1BQUEsWUFBQXlHLGFBQUE7UUFBS00sR0FBRyxFQUFFLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDckUsS0FBSyxDQUFDc0UsT0FBTyxDQUFFO1FBQUNDLEdBQUcsRUFBQztNQUFFLENBQUMsQ0FBTSxDQUFDLGVBQ3JIbEgsTUFBQSxZQUFBeUcsYUFBQTtRQUFLQyxTQUFTLEVBQUU7TUFBOEIsR0FBRSxJQUFJLENBQUMvRCxLQUFLLENBQUN3RSxTQUFlLENBQUMsZUFDM0VuSCxNQUFBLFlBQUF5RyxhQUFBO1FBQUtDLFNBQVMsRUFBRTtNQUFrQyxHQUFFLElBQUFVLHlDQUFlLEVBQUMsSUFBSSxDQUFDekUsS0FBSyxDQUFDMEUsU0FBUyxHQUFHLElBQUksQ0FBTyxDQUNuRyxDQUFDO0lBRVY7RUFBQztJQUFBZixHQUFBO0lBQUFDLEtBQUEsRUE2R0QsU0FBQVMsa0JBQWtCQSxDQUFDTSxPQUFPLEVBQUU7TUFDMUIsSUFBSUMsWUFBWSxHQUFHLElBQUksQ0FBQzVFLEtBQUssQ0FBQ3lCLGFBQWEsQ0FBQ3NCLElBQUksQ0FBQzhCLG9CQUFvQjtNQUNyRSxRQUFRRCxZQUFZO1FBQ2xCLEtBQUssR0FBRztRQUNSLEtBQUssR0FBRztRQUNSLEtBQUssR0FBRztVQUNOLE9BQU8sSUFBSSxDQUFDRSwwQkFBMEIsQ0FBQ0gsT0FBTyxDQUFDO1FBQ2pELEtBQUssR0FBRztVQUNOLE9BQU8sSUFBSSxDQUFDSSw2QkFBNkIsQ0FBQ0osT0FBTyxDQUFDO1FBQ3BELEtBQUssR0FBRztVQUNOLE9BQU8sSUFBSSxDQUFDSyxxQkFBcUIsQ0FBQ0wsT0FBTyxDQUFDO01BQzlDO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUFoQixHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBa0IsMEJBQTBCQSxDQUFDSCxPQUFPLEVBQUU7TUFDbEMsSUFBSU0sS0FBSztNQUNULFFBQVFOLE9BQU87UUFDYixLQUFLLENBQUM7VUFDSk0sS0FBSyxHQUFHLGFBQWE7VUFDckI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFVBQVU7VUFDbEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFVBQVU7VUFDbEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFVBQVU7VUFDbEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGNBQWM7VUFDdEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGNBQWM7VUFDdEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGtCQUFrQjtVQUMxQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsZ0JBQWdCO1VBQ3hCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLGdCQUFnQjtVQUN4QjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsZUFBZTtVQUN2QjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsaUJBQWlCO1VBQ3pCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxjQUFjO1VBQ3RCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxrQkFBa0I7VUFDMUI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsa0JBQWtCO1VBQzFCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLGNBQWM7VUFDdEI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLGtCQUFrQjtVQUMxQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsaUJBQWlCO1VBQ3pCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxjQUFjO1VBQ3RCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLEVBQUU7VUFDTEEsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNGO1VBQ0VBLEtBQUssR0FBRyxhQUFhO1VBQ3JCO01BRUo7TUFDQSxPQUFPLHlDQUF5QyxHQUFHQSxLQUFLO0lBQzFEO0VBQUM7SUFBQXRCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtQiw2QkFBNkJBLENBQUNKLE9BQU8sRUFBRTtNQUNyQyxJQUFJTSxLQUFLO01BQ1QsUUFBUU4sT0FBTztRQUNiLEtBQUssQ0FBQztVQUNKTSxLQUFLLEdBQUcsY0FBYztVQUN0QjtRQUNGLEtBQUssQ0FBQyxDQUFDO1VBQ0xBLEtBQUssR0FBRyxlQUFlO1VBQ3ZCO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBRyxnQkFBZ0I7VUFDeEI7UUFDRixLQUFLLENBQUMsQ0FBQztVQUNMQSxLQUFLLEdBQUcsZUFBZTtVQUN2QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsZ0JBQWdCO1VBQ3hCO1FBQ0YsS0FBSyxDQUFDLENBQUM7VUFDTEEsS0FBSyxHQUFHLGdCQUFnQjtVQUN4QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsaUJBQWlCO1VBQ3pCO1FBQ0YsS0FBSyxDQUFDLENBQUM7VUFDTEEsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsa0JBQWtCO1VBQzFCO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLFlBQVk7VUFDcEI7UUFDRixLQUFLLENBQUMsRUFBRTtVQUNOQSxLQUFLLEdBQUcsWUFBWTtVQUNwQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsVUFBVTtVQUNsQjtNQUNKO01BQ0EsT0FBTyx5Q0FBeUMsR0FBR0EsS0FBSztJQUMxRDtFQUFDO0lBQUF0QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0IscUJBQXFCQSxDQUFDTCxPQUFPLEVBQUU7TUFDN0IsSUFBSU0sS0FBSztNQUNULFFBQVFOLE9BQU87UUFDYixLQUFLLENBQUM7VUFDSk0sS0FBSyxHQUFHLGVBQWU7VUFDdkI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGdCQUFnQjtVQUN4QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsZ0JBQWdCO1VBQ3hCO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsa0JBQWtCO1VBQzFCO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBRyxjQUFjO1VBQ3RCO1FBQ0YsS0FBSyxDQUFDO1VBQ0pBLEtBQUssR0FBRyxpQkFBaUI7VUFDekI7UUFDRixLQUFLLENBQUM7VUFDSkEsS0FBSyxHQUFHLGlCQUFpQjtVQUN6QjtRQUNGLEtBQUssQ0FBQztVQUNKQSxLQUFLLEdBQUcsWUFBWTtVQUNwQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsWUFBWTtVQUNwQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsVUFBVTtVQUNsQjtRQUNGLEtBQUssRUFBRTtVQUNMQSxLQUFLLEdBQUcsaUJBQWlCO1VBQ3pCO1FBQ0YsS0FBSyxFQUFFO1VBQ0xBLEtBQUssR0FBRyxrQkFBa0I7VUFDMUI7TUFFSjtNQUNBLE9BQU8seUNBQXlDLEdBQUdBLEtBQUs7SUFDMUQ7RUFBQztBQUFBLEVBalZvQ0MsZ0JBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGhELElBQUE3SCxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQTRILHFCQUFBLEdBQUE1SCxtQkFBQTtBQUNBLElBQUFDLHlCQUFBLEdBQUFELG1CQUFBO0FBQThFLFNBQUFNLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBUix3QkFBQVEsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBWjlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBY3FCbUgsMkJBQTJCLEdBQUF0RixrQkFBQSwwQkFBQUMsVUFBQTtFQUU5QyxTQUFBcUYsNEJBQVlwRixLQUFLLEVBQUU7SUFBQSxJQUFBRSxnQkFBQSxtQkFBQWtGLDJCQUFBO0lBQUEsT0FBQW5HLFVBQUEsT0FBQW1HLDJCQUFBLEdBQ1hwRixLQUFLO0VBQ2I7RUFBQyxJQUFBeUQsVUFBQSxhQUFBMkIsMkJBQUEsRUFBQXJGLFVBQUE7RUFBQSxXQUFBMkQsYUFBQSxhQUFBMEIsMkJBQUE7SUFBQXpCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUFBLElBQUE1RCxLQUFBO01BQ1AsSUFBSW9GLFlBQVksR0FBRyxFQUFFO01BQ3JCLElBQUlDLElBQUksR0FBRyxFQUFFO01BQ2IsSUFBSUMsUUFBUSxHQUFHLEVBQUU7TUFDakIsSUFBSUMsT0FBTyxHQUFHLEVBQUU7TUFFaEIsSUFBSSxJQUFJLENBQUN4RixLQUFLLENBQUN5RixrQkFBa0IsSUFBSSxJQUFJLENBQUN6RixLQUFLLENBQUN5RixrQkFBa0IsQ0FBQ0osWUFBWSxFQUFFO1FBQy9FQSxZQUFZLEdBQUcsSUFBSSxDQUFDckYsS0FBSyxDQUFDeUYsa0JBQWtCLENBQUNKLFlBQVk7TUFDM0Q7TUFFQSxJQUFJQSxZQUFZLENBQUNqQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQVEsRUFBRTtNQUNaLENBQUMsTUFBTTtRQUNMO1FBQ0Esb0JBQ0UvRixNQUFBLFlBQUF5RyxhQUFBO1VBQUtDLFNBQVMsRUFBRSxJQUFJLENBQUMvRCxLQUFLLENBQUMrRDtRQUFVLEdBQ2xDLElBQUksQ0FBQy9ELEtBQUssQ0FBQzBGLE1BQU0sRUFDakIsSUFBSSxDQUFDMUYsS0FBSyxDQUFDMkYsUUFBUSxFQUNuQk4sWUFBWSxDQUFDM0QsR0FBRyxDQUFDLFVBQUNrRSxJQUFJLEVBQUVDLEtBQUssRUFBSztVQUNqQyxvQkFBT3hJLE1BQUEsWUFBQXlHLGFBQUEsQ0FBQ3FCLHFCQUFBLENBQUF0RixpQkFBaUI7WUFBQ3lFLE9BQU8sRUFBRXNCLElBQUksQ0FBQ0UsSUFBSztZQUFDdEIsU0FBUyxFQUFFb0IsSUFBSSxDQUFDRyxXQUFZO1lBQUNyQixTQUFTLEVBQUVrQixJQUFJLENBQUN4QyxNQUFPO1lBQUNPLEdBQUcsRUFBRWtDLEtBQU07WUFBQzFCLEVBQUUsRUFBRTBCLEtBQU07WUFBQ3BFLGFBQWEsRUFBRXhCLEtBQUksQ0FBQ0QsS0FBSyxDQUFDeUIsYUFBYztZQUFDSSxTQUFTLEVBQUUrRCxJQUFJLENBQUNJLGlCQUFrQjtZQUFDbEUsT0FBTyxFQUFFOEQsSUFBSSxDQUFDSyxlQUFnQjtZQUFDN0YsZUFBZSxFQUFFSCxLQUFJLENBQUNELEtBQUssQ0FBQ0ksZUFBZ0I7WUFBQ0UsZ0JBQWdCLEVBQUVMLEtBQUksQ0FBQ0QsS0FBSyxDQUFDTTtVQUFpQixDQUFDLENBQUM7UUFDcFUsQ0FBQyxDQUNFLENBQUM7TUFFVjtJQUNGO0VBQUM7QUFBQSxFQTlCc0Q0RSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtMaW5lU3RyaW5nLCBQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7ZnJvbUxvbkxhdH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7U3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mbkl0ZW1PdmVyID0gdGhpcy5mbkl0ZW1PdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1DbGljayA9IHRoaXMuZm5JdGVtQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbU91dCA9IHRoaXMuZm5JdGVtT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvblwifSBvbk1vdXNlVXA9e3RoaXMuZm5JdGVtQ2xpY2t9IG9uTW91c2VMZWF2ZT17dGhpcy5mbkl0ZW1PdXR9IG9uTW91c2VFbnRlcj17dGhpcy5mbkl0ZW1PdmVyfSBrZXk9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWltYWdlXCJ9PjxpbWcgc3JjPXt0aGlzLmdldEluc3RydWN0aW9uSWNvbih0aGlzLnByb3BzLmltZ1BhdGgpfSBhbHQ9XCJcIi8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGV4dFwifT57dGhpcy5wcm9wcy5pbnN0clRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tZGlzdGFuY2VcIn0+e3RvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLmluc3RyRGlzdCAqIDEwMDApfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBmbkl0ZW1DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHZhciBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjb29yZGluYXRlcyAmJiAodGhpcy5wcm9wcy5kYXRhU3RhcnQgfHwgdGhpcy5wcm9wcy5kYXRhU3RhcnQgPT09IDApICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICBsZXQgZ2VvbTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXJ0ID09PSB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBnZW9tID0gbmV3IFBvaW50KGNvb3JkaW5hdGVzW3RoaXMucHJvcHMuZGF0YVN0YXJ0XSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICBnZW9tID0gbmV3IExpbmVTdHJpbmcobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGdlb21cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIC8vIGxldCBjdXJyZW50Wm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgbGV0IHdpZHRoID0galF1ZXJ5KFwiLmM0Zy1yb3V0ZXItY29udGFpbmVyLXJpZ2h0XCIpLmNzcygnd2lkdGgnKTtcbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgd2lkdGggPSB3aWR0aC5zcGxpdChcIi5cIik7XG4gICAgICAgICAgd2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdIDogd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyAgNTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSA1MDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4Wm9vbSA9IHBhcnNlSW50KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5tYXhab29tKSB8fCAyMjtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20sIHtcbiAgICAgICAgICBwYWRkaW5nOiBbNTAsd2lkdGgsNTAsNTBdLFxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgbWF4Wm9vbTogbWF4Wm9vbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgIGxldCBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnByb3BzLmRhdGFTdGFydCB8fCB0aGlzLnByb3BzLmRhdGFTdGFydCA9PT0gMCkgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmU7XG4gICAgICAgICAgICBpZiAobmV3Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICB9O1xuXG4gIGdldEluc3RydWN0aW9uSWNvbihpbnRUeXBlKSB7XG4gICAgbGV0IHJvdXRlckVuZ2luZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uO1xuICAgIHN3aXRjaCAocm91dGVyRW5naW5lKSB7XG4gICAgICBjYXNlICc2JzpcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbiBpbnRlZ2VyIG51bWJlciBpbnRvIHRoZSBjb3JyZWN0IGluc3RydWN0aW9uIGljb24gKEdyYXBoaG9wcGVyIGljb25zKS5cbiAgICogQHBhcmFtIGludFR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjE6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIyOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0zOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC03OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtOTg6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVySW5zdHJ1Y3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZSwgdG9IdW1hblRpbWV9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgbGV0IGRpc3RhbmNlID0gXCJcIjtcbiAgICBsZXQgcHJvZmlsZSA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMgPSB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGluc3RydWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluc3RydWN0aW9ucyBwcmVzZW50LCBjb250YWluZXIgb3BlblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgICAge2luc3RydWN0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckluc3RydWN0aW9uIGltZ1BhdGg9e2l0ZW0udHlwZX0gaW5zdHJUZXh0PXtpdGVtLmluc3RydWN0aW9ufSBpbnN0ckRpc3Q9e2l0ZW0ubGVuZ3RofSBrZXk9e2luZGV4fSBpZD17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZGF0YVN0YXJ0PXtpdGVtLmJlZ2luX3NoYXBlX2luZGV4fSBkYXRhRW5kPXtpdGVtLmVuZF9zaGFwZV9pbmRleH0gcm91dGVyV2F5U291cmNlPXt0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZX0gcm91dGVySGludFNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z1JvdXRlclRpbWVDb252ZXJzaW9ucyIsIl9vbCIsIl9nZW9tIiwiX3Byb2oiLCJfc3R5bGUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlJvdXRlckluc3RydWN0aW9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJyb3V0ZXJXYXlTb3VyY2UiLCJnZXRGZWF0dXJlcyIsInJvdXRlckhpbnRTb3VyY2UiLCJjbGVhciIsImZlYXR1cmUiLCJjb29yZGluYXRlcyIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZExvbkxhdCIsImRhdGFQb3MiLCJzdHJpbmdsb25sYXQiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJuZXdDb29yZCIsImZyb21Mb25MYXQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIm5ld0Nvb3JkaW5hdGVzIiwic2xpY2UiLCJMaW5lU3RyaW5nIiwic2V0U3R5bGUiLCJTdHlsZSIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJqUXVlcnkiLCJjc3MiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsIm1heFpvb20iLCJkYXRhIiwic3RhcmJvYXJkIiwiZml0IiwicGFkZGluZyIsImR1cmF0aW9uIiwibGVuZ3RoIiwiZm5JdGVtT3ZlciIsImJpbmQiLCJmbkl0ZW1DbGljayIsImZuSXRlbU91dCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZUVudGVyIiwiaWQiLCJzcmMiLCJnZXRJbnN0cnVjdGlvbkljb24iLCJpbWdQYXRoIiwiYWx0IiwiaW5zdHJUZXh0IiwidG9IdW1hbkRpc3RhbmNlIiwiaW5zdHJEaXN0IiwiaW50VHlwZSIsInJvdXRlckVuZ2luZSIsInJvdXRlcl9hcGlfc2VsZWN0aW9uIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEiLCJnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlciIsImdldEluc3RydWN0aW9uSWNvbk9SUyIsImltYWdlIiwiQ29tcG9uZW50IiwiX2M0Z1JvdXRlckluc3RydWN0aW9uIiwiUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIiwiaW5zdHJ1Y3Rpb25zIiwidGltZSIsImRpc3RhbmNlIiwicHJvZmlsZSIsInJvdXRlckluc3RydWN0aW9ucyIsImhlYWRlciIsInN3aXRjaGVyIiwiaXRlbSIsImluZGV4IiwidHlwZSIsImluc3RydWN0aW9uIiwiYmVnaW5fc2hhcGVfaW5kZXgiLCJlbmRfc2hhcGVfaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9