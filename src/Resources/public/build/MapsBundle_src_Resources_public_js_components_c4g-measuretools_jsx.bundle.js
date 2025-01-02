"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-measuretools_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools-feature.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-measuretools-feature.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuredFeature = void 0;
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
var MeasuredFeature = exports.MeasuredFeature = /*#__PURE__*/function (_Component) {
  function MeasuredFeature(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MeasuredFeature);
    _this = _callSuper(this, MeasuredFeature, [props]);
    _this.changeFeatureLabel = _this.changeFeatureLabel.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MeasuredFeature, _Component);
  return (0, _createClass2["default"])(MeasuredFeature, [{
    key: "render",
    value: function render() {
      var scope = this;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "measureElement_" + this.props.idx
      }, "Name: "), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "measureElement_" + this.props.idx,
        defaultValue: this.props.label,
        onInput: this.changeFeatureLabel
      })), Object.keys(this.props.measuredValues).map(function (element, index) {
        var obj = scope.props.measuredValues[element];
        var hrValue = 0.0;
        switch (element) {
          case "line":
          case "radius":
            hrValue = scope.convertMetersToKm(obj.value);
            break;
          case "area":
            hrValue = scope.convertSquareMetersToSquareKm(obj.value);
            break;
        }
        return /*#__PURE__*/_react["default"].createElement("p", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("strong", null, obj.description), /*#__PURE__*/_react["default"].createElement("span", {
          className: "c4g-measure-value-" + scope.props.idx
        }, hrValue));
      }));
    }
  }, {
    key: "changeFeatureLabel",
    value: function changeFeatureLabel() {
      var feature = this.props.feature;
      feature.label = document.querySelector('input[name="measureElement_' + this.props.idx + '"]').value;
      this.props.modifyFeature(feature, feature.id);
    }
  }, {
    key: "convertMetersToKm",
    value: function convertMetersToKm(distance) {
      var kmValue = distance / 1000;
      if (kmValue > 0) {
        return kmValue + " km";
      } else {
        return distance + " m";
      }
    }
  }, {
    key: "convertSquareMetersToSquareKm",
    value: function convertSquareMetersToSquareKm(area) {
      var kmValue = area / 1000000;
      if (kmValue > 0) {
        return kmValue + " km²";
      } else {
        return area + " m²";
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools-view.jsx":
/*!**********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-measuretools-view.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuretoolsView = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-tooltippopup.js");
var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools-feature.jsx");
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
var MeasuretoolsView = exports.MeasuretoolsView = /*#__PURE__*/function (_Component) {
  function MeasuretoolsView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MeasuretoolsView);
    _this = _callSuper(this, MeasuretoolsView, [props]);
    var langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.headlines = {
      "select": langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
      "line": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
      "polygon": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
      "circle": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
      "freehand": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
    };
    _this.featureIdCtr = _this.props.featureId;
    _this.updateFunctions = _this.createMeasureFunctions();
    _this.modifyFeature = _this.modifyFeature.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MeasuretoolsView, _Component);
  return (0, _createClass2["default"])(MeasuretoolsView, [{
    key: "render",
    value: function render() {
      var scope = this;
      if (this.props.active) {
        if (this.props.mode === "select") {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.lang.MEASURETOOLS_INFO), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("sub", null, this.props.lang.MEASURETOOLS_INFO_ADDITIONAL));
        } else {
          // measure view
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "contentHeadline"
          }, this.headlines[this.props.mode]), /*#__PURE__*/_react["default"].createElement("div", null, Object.keys(this.props.features).map(function (element, index) {
            var feat = scope.props.features[element];
            return /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsFeature.MeasuredFeature, {
              key: index,
              idx: index,
              label: feat.label,
              feature: feat,
              measuredValues: feat.measuredValues,
              modifyFeature: scope.modifyFeature
            });
          })));
        }
      } else {
        // not active
        return null;
      }
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(feature, id) {
      var arrFeatures = this.props.features;
      for (var i = 0; i < arrFeatures.length; i++) {
        if (arrFeatures[i].id === id) {
          arrFeatures[i].olFeature.set('featureLabel', feature.label);
          this.updateMeasureFeature(arrFeatures[i].olFeature);
          break;
        }
      }
      this.props.modifyFeature(feature, id);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mode !== "select") {
        this.updateFunctions.initFunction();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mode !== "select") {
        if (!prevProps.active && this.props.active) {
          this.updateFunctions.activateFunction();
        }
        if (prevProps.active && !this.props.active) {
          this.updateFunctions.deactivateFunction();
        }
        this.props.mapController.mapHover.deactivate();
      }
      if (this.props.mode === "select" || !this.props.measureTools.state.open) {
        this.props.mapController.mapHover.activate();
      }
      this.featureIdCtr = this.props.featureId;
    }
  }, {
    key: "createMeasureFunctions",
    value: function createMeasureFunctions() {
      var source, features, olType, interaction;
      var scope = this;
      return {
        initFunction: function initFunction() {
          var featureIdCount, activeSketch, activeTooltip, addMeasureFeature, updateMeasureFeature, getValueOfGeometry, getLengthOfMeasure, removeMeasureFeature;
          featureIdCount = scope.featureIdCtr;
          if (scope.props.mode.toLowerCase() === 'freehand') {
            source = scope.props.measureTools.measureFreehandLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'circle') {
            source = scope.props.measureTools.measureCircleLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'polygon') {
            source = scope.props.measureTools.measurePolygonLayer.getSource();
          } else {
            source = scope.props.measureTools.measureLineLayer.getSource();
          }
          features = new _ol.Collection();
          if (scope.props.mode.toLowerCase() === "select") {
            return;
          }
          switch (scope.props.mode) {
            case "line":
              olType = "LineString";
              break;
            case "polygon":
              olType = "Polygon";
              break;
            case "circle":
              olType = "Circle";
              break;
            case "freehand":
              olType = "LineString";
              break;
          }
          interaction = new _interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: scope.props.mode === 'freehand'
            // @TODO: use custom style? (BE-option)
            // style: use default style
          });
          addMeasureFeature = function addMeasureFeature(feature) {
            var inputElement, strLabel, strType, measureArea, measureRadius, measureLine;
            if (!feature) {
              return false;
            }

            // check feature-type
            if (feature.getGeometry().getType() === 'LineString') {
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.LINE;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            } else if (feature.getGeometry().getType() === 'Polygon') {
              strLabel = scope.props.lang.PERIMETER;
              strType = scope.props.lang.POLYGON;
              measureArea = true;
              measureRadius = false;
              measureLine = false;
            } else if (feature.getGeometry().getType() === 'Circle') {
              strLabel = scope.props.lang.RADIUS;
              strType = scope.props.lang.CIRCLE;
              measureArea = true;
              measureRadius = true;
              measureLine = false;
            } else {
              //freehand is LineString too
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.FREEHAND;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            }

            // feature.set('listElementValueName', inputElement);
            featureIdCount = scope.featureIdCtr;
            feature.set('featureId', featureIdCount);
            var measuredFeature = {};
            measuredFeature.id = featureIdCount;
            measuredFeature.label = strType + " " + featureIdCount;
            feature.set('featureLabel', measuredFeature.label);
            measuredFeature.measuredValues = {};
            if (measureLine) {
              measuredFeature.measuredValues['line'] = {
                description: "Länge: ",
                value: 0
              };
            }
            if (measureRadius) {
              measuredFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
            }
            if (measureArea) {
              measuredFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
            }
            measuredFeature.olFeature = feature;
            scope.props.addFeature(measuredFeature);
            // increase the id-counter
            scope.props.incrFeatId();
            // scope.update();
          }; // end of "addMeasureFeature()"

          updateMeasureFeature = function updateMeasureFeature(feature) {
            var featureTooltip, newContent, name, length, area, radius;
            featureTooltip = feature.get('tooltip');
            name = feature.get('featureLabel');
            length = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            feature.set('measuredLength', length.rawValue);
            featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + length.htmlValue);
            var featureId = feature.get('featureId');
            var newFeature = {};
            newFeature.label = name;
            newFeature.id = featureId;
            newFeature.measuredValues = {};
            newFeature.olFeature = feature;
            if (length && feature.get('geometryType') !== 'circle' && feature.get('geometryType') !== 'polygon') {
              newFeature.measuredValues.line = {};
              newFeature.measuredValues['line'].description = "Länge: ";
              newFeature.measuredValues['line'].value = length.rawValue;
            }
            if (feature.get('geometryType') === 'circle') {
              radius = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry());
              newFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
              newFeature.measuredValues['radius'].value = radius.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['radius'].description + radius.htmlValue);
            }
            if (feature.get('geometryType') === 'polygon' || feature.get('geometryType') === 'circle') {
              area = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), false, true);
              newFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
              newFeature.measuredValues['area'].value = area.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['area'].description + area.htmlValue);
            }
            feature.set('tooltip', featureTooltip);
            scope.props.modifyFeature(newFeature, newFeature.id);
          }; // end of "updateMeasureFeature()"

          scope.updateMeasureFeature = updateMeasureFeature;
          removeMeasureFeature = function removeMeasureFeature(feature) {
            scope.props.removeFeature(feature.get('featureId'));
          }; // end of "removeMeasureFeature()"

          //Start Workaround
          getValueOfGeometry = function getValueOfGeometry(feature) {
            var leng = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            // feature.set('measuredLength', length);
            var val = leng.htmlValue;
            var valuenumb = val.match(/\d/g);
            valuenumb = valuenumb.join("");
            return valuenumb;
          };
          getLengthOfMeasure = function getLengthOfMeasure() {
            var length = '0.00 m';
            var lengthnumb = length.match(/\d/g);
            lengthnumb = lengthnumb.join("");
            lengthnumb = +8;
            return lengthnumb;
          }; // End Workaround

          interaction.on('drawstart', function (event) {
            activeSketch = event.feature;
            // create tooltip
            activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
              map: scope.props.mapController.map,
              position: event.coordinate,
              offset: [2, -2],
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();
                if (val !== leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  if (source.hasFeature(event.feature)) {
                    source.removeFeature(event.feature);
                  }
                } else {
                  removeMeasureFeature(event.feature);
                }
              }
            });
            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', scope.props.mode.toLowerCase());
            addMeasureFeature(activeSketch);
          }, scope);
          scope.props.mapController.map.on('pointermove', function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, scope);
          interaction.on('drawend', function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, scope);
          return true;
        },
        activateFunction: function activateFunction() {
          features.clear();
          // Enable interaction
          scope.props.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {
          if (scope.props.mode.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {
              // 0_o
            }
          }
          // Remove from map
          scope.props.mapController.map.removeInteraction(interaction);
        }
      };
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools.jsx":
/*!*****************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-measuretools.jsx ***!
  \*****************************************************************************/
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
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools-view.jsx");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
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
var Measuretools = exports["default"] = /*#__PURE__*/function (_Component) {
  function Measuretools(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Measuretools);
    _this = _callSuper(this, Measuretools, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_MEASURETOOLS;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_MEASURETOOLS;
    }
    element.className = "c4g-measuretools-control ol-unselectable ol-control ";
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
      var hidden = scope.props.mapController.measuretoolsContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.measuretoolsContainer).removeClass('c4g-close').addClass('c4g-open');
        }
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
      return element.name === "measuretools";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.measuretools = control;
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.addMeasuredFeature = _this.addMeasuredFeature.bind(_this);
    _this.modifyMeasuredFeature = _this.modifyMeasuredFeature.bind(_this);
    _this.removeMeasuredFeature = _this.removeMeasuredFeature.bind(_this);
    _this.incrementFeatureId = _this.incrementFeatureId.bind(_this);
    _this.modes = ["select", "line", "polygon", "circle", "freehand"];
    _this.state = {
      open: props.open || false,
      currentMode: "select",
      control: control,
      measuredFeatures: [],
      featureIdCtr: 0
    };
    _this.init();
    return _this;
  }
  (0, _inherits2["default"])(Measuretools, _Component);
  return (0, _createClass2["default"])(Measuretools, [{
    key: "render",
    value: function render() {
      var scope = this;
      var arrTooltips = {
        "select": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
        "line": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
        "polygon": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
        "circle": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
        "freehand": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-measuretools-header",
        headerClass: "c4g-measuretools-headline",
        hideContainer: ".c4g-measuretools-container",
        header: this.langConstants.MEASURETOOLS,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-mode-switcher"
      }, this.modes.map(function (element, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          className: "c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            return scope.setState({
              currentMode: element
            });
          },
          title: arrTooltips[element]
        });
      })), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "select",
        measureTools: this,
        active: this.state.currentMode === "select" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "line",
        measureTools: this,
        active: this.state.currentMode === "line" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "polygon",
        measureTools: this,
        active: this.state.currentMode === "polygon" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "circle",
        measureTools: this,
        active: this.state.currentMode === "circle" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "freehand",
        measureTools: this,
        active: this.state.currentMode === "freehand" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }));
    }
  }, {
    key: "incrementFeatureId",
    value: function incrementFeatureId() {
      this.setState({
        featureIdCtr: this.state.featureIdCtr + 1
      });
    }
  }, {
    key: "addMeasuredFeature",
    value: function addMeasuredFeature(feature) {
      var features = this.state.measuredFeatures;
      features.push(feature);
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "modifyMeasuredFeature",
    value: function modifyMeasuredFeature(newFeature, id) {
      var features = this.state.measuredFeatures;
      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features[i] = newFeature;
        }
      }
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "removeMeasuredFeature",
    value: function removeMeasuredFeature(id) {
      var features = this.state.measuredFeatures;
      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features.splice(i, 1);
          break;
        }
      }
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "setCurrentMode",
    value: function setCurrentMode(newMode) {
      if (this.modes.includes(newMode)) {
        this.setState({
          currentMode: newMode
        });
      } else {
        console.warn("The specified mode is not available");
      }
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

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
  }, {
    key: "init",
    value: function init() {
      // Add measure layers
      this.measureLineLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measurePolygonLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureCircleLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureFreehandLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.measureFreehandLayer, this.measureCircleLayer, this.measurePolygonLayer, this.measureLineLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.measureLayerGroup);

      // this.spinner.hide();
      return true;
    } // end of "init()"
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open && !this.state.open) {
        // measuretools were closed
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close");
        this.props.mapController.map.removeLayer(this.measureLayerGroup);
        this.removeTooltips();
        this.removedOnce = true;
      } else if (!prevState.open && this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close");
        if (this.removedOnce) {
          try {
            this.props.mapController.map.addLayer(this.measureLayerGroup);
          } catch (e) {
            console.warn(e);
          }
        }
        this.addTooltips();
      }
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Measuretools" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Measuretools" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Measuretools");
        }
      }
    }
  }, {
    key: "removeTooltips",
    value: function removeTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();
      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();
        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').hide();
          }
        }
      }
    }
  }, {
    key: "addTooltips",
    value: function addTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();
      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();
        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').show();
          }
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1tZWFzdXJldG9vbHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQVR2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQVdhNEIsZUFBZSxHQUFBQyx1QkFBQSwwQkFBQUMsVUFBQTtFQUUxQixTQUFBRixnQkFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxlQUFBO0lBQ2pCSSxLQUFBLEdBQUFoQixVQUFBLE9BQUFZLGVBQUEsR0FBTUcsS0FBSztJQUVYQyxLQUFBLENBQUtFLGtCQUFrQixHQUFHRixLQUFBLENBQUtFLGtCQUFrQixDQUFDQyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDL0Q7RUFBQyxJQUFBSSxVQUFBLGFBQUFSLGVBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFPLGFBQUEsYUFBQVQsZUFBQTtJQUFBVSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSTtNQUNsQixvQkFDRWhELE1BQUEsWUFBQWlELGFBQUEsMkJBQ0VqRCxNQUFBLFlBQUFpRCxhQUFBLDJCQUNFakQsTUFBQSxZQUFBaUQsYUFBQTtRQUFPQyxPQUFPLEVBQUUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDWixLQUFLLENBQUNhO01BQUksR0FBQyxRQUFhLENBQUMsZUFDbEVuRCxNQUFBLFlBQUFpRCxhQUFBO1FBQU9HLElBQUksRUFBQyxNQUFNO1FBQUNDLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLENBQUNmLEtBQUssQ0FBQ2EsR0FBSTtRQUFDRyxZQUFZLEVBQUUsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsS0FBTTtRQUNwRkMsT0FBTyxFQUFFLElBQUksQ0FBQ2Y7TUFBbUIsQ0FBQyxDQUN2QyxDQUFDLEVBQ0wxQixNQUFNLENBQUMwQyxJQUFJLENBQUMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsY0FBYyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtRQUNuRSxJQUFJQyxHQUFHLEdBQUdkLEtBQUssQ0FBQ1YsS0FBSyxDQUFDb0IsY0FBYyxDQUFDRSxPQUFPLENBQUM7UUFDN0MsSUFBSUcsT0FBTyxHQUFHLEdBQUc7UUFDakIsUUFBUUgsT0FBTztVQUNiLEtBQUssTUFBTTtVQUNYLEtBQUssUUFBUTtZQUNYRyxPQUFPLEdBQUdmLEtBQUssQ0FBQ2dCLGlCQUFpQixDQUFDRixHQUFHLENBQUNoQixLQUFLLENBQUM7WUFDNUM7VUFDRixLQUFLLE1BQU07WUFDVGlCLE9BQU8sR0FBR2YsS0FBSyxDQUFDaUIsNkJBQTZCLENBQUNILEdBQUcsQ0FBQ2hCLEtBQUssQ0FBQztZQUN4RDtRQUNKO1FBQ0Esb0JBQVE5QyxNQUFBLFlBQUFpRCxhQUFBO1VBQUdKLEdBQUcsRUFBRWdCO1FBQU0sZ0JBQ3BCN0QsTUFBQSxZQUFBaUQsYUFBQSxpQkFBU2EsR0FBRyxDQUFDSSxXQUFvQixDQUFDLGVBQ2xDbEUsTUFBQSxZQUFBaUQsYUFBQTtVQUFNa0IsU0FBUyxFQUFFLG9CQUFvQixHQUFHbkIsS0FBSyxDQUFDVixLQUFLLENBQUNhO1FBQUksR0FBRVksT0FBYyxDQUN2RSxDQUFDO01BQ04sQ0FBQyxDQUNFLENBQUM7SUFFVjtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxrQkFBa0JBLENBQUEsRUFBRztNQUNuQixJQUFJMkIsT0FBTyxHQUFHLElBQUksQ0FBQzlCLEtBQUssQ0FBQzhCLE9BQU87TUFDaENBLE9BQU8sQ0FBQ2IsS0FBSyxHQUFHYyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUNoQyxLQUFLLENBQUNhLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQ0wsS0FBSztNQUNuRyxJQUFJLENBQUNSLEtBQUssQ0FBQ2lDLGFBQWEsQ0FBQ0gsT0FBTyxFQUFFQSxPQUFPLENBQUNJLEVBQUUsQ0FBQztJQUMvQztFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0IsaUJBQWlCQSxDQUFDUyxRQUFRLEVBQUU7TUFDMUIsSUFBSUMsT0FBTyxHQUFHRCxRQUFRLEdBQUcsSUFBSTtNQUM3QixJQUFJQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsT0FBT0EsT0FBTyxHQUFHLEtBQUs7TUFDeEIsQ0FBQyxNQUFNO1FBQ0wsT0FBT0QsUUFBUSxHQUFHLElBQUk7TUFDeEI7SUFDRjtFQUFDO0lBQUE1QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUIsNkJBQTZCQSxDQUFDVSxJQUFJLEVBQUU7TUFDbEMsSUFBSUQsT0FBTyxHQUFHQyxJQUFJLEdBQUcsT0FBTztNQUM1QixJQUFJRCxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsT0FBT0EsT0FBTyxHQUFHLE1BQU07TUFDekIsQ0FBQyxNQUFNO1FBQ0wsT0FBT0MsSUFBSSxHQUFHLEtBQUs7TUFDckI7SUFDRjtFQUFDO0FBQUEsRUE1RGtDQyxnQkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGOUMsSUFBQTVFLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBMkUsWUFBQSxHQUFBM0UsbUJBQUE7QUFDQSxJQUFBNEUsR0FBQSxHQUFBNUUsbUJBQUE7QUFDQSxJQUFBNkUsWUFBQSxHQUFBN0UsbUJBQUE7QUFDQSxJQUFBOEUsYUFBQSxHQUFBOUUsbUJBQUE7QUFDQSxJQUFBK0Usd0JBQUEsR0FBQS9FLG1CQUFBO0FBQ0EsSUFBQWdGLHVCQUFBLEdBQUFoRixtQkFBQTtBQUErRCxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWYvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWlCYTRFLGdCQUFnQixHQUFBL0Msd0JBQUEsMEJBQUFDLFVBQUE7RUFFM0IsU0FBQThDLGlCQUFZN0MsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBMkMsZ0JBQUE7SUFDakI1QyxLQUFBLEdBQUFoQixVQUFBLE9BQUE0RCxnQkFBQSxHQUFNN0MsS0FBSztJQUVYLElBQUk4QyxhQUFhLEdBQUcsSUFBQUMsd0JBQVcsRUFBQzlDLEtBQUEsQ0FBS0QsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDQyxJQUFJLENBQUM7SUFFOURoRCxLQUFBLENBQUtpRCxTQUFTLEdBQUc7TUFDZixRQUFRLEVBQUVKLGFBQWEsQ0FBQ0ssZ0NBQWdDO01BQ3hELE1BQU0sRUFBRUwsYUFBYSxDQUFDTSx5Q0FBeUM7TUFDL0QsU0FBUyxFQUFFTixhQUFhLENBQUNPLHNDQUFzQztNQUMvRCxRQUFRLEVBQUVQLGFBQWEsQ0FBQ1EscUNBQXFDO01BQzdELFVBQVUsRUFBRVIsYUFBYSxDQUFDUztJQUM1QixDQUFDO0lBQ0R0RCxLQUFBLENBQUt1RCxZQUFZLEdBQUd2RCxLQUFBLENBQUtELEtBQUssQ0FBQ3lELFNBQVM7SUFDeEN4RCxLQUFBLENBQUt5RCxlQUFlLEdBQUd6RCxLQUFBLENBQUswRCxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BEMUQsS0FBQSxDQUFLZ0MsYUFBYSxHQUFHaEMsS0FBQSxDQUFLZ0MsYUFBYSxDQUFDN0IsSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQ3JEO0VBQUMsSUFBQUksVUFBQSxhQUFBd0MsZ0JBQUEsRUFBQTlDLFVBQUE7RUFBQSxXQUFBTyxhQUFBLGFBQUF1QyxnQkFBQTtJQUFBdEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsSUFBTUMsS0FBSyxHQUFHLElBQUk7TUFDbEIsSUFBSSxJQUFJLENBQUNWLEtBQUssQ0FBQzRELE1BQU0sRUFBRTtRQUNyQixJQUFJLElBQUksQ0FBQzVELEtBQUssQ0FBQzZELElBQUksS0FBSyxRQUFRLEVBQUU7VUFDaEMsb0JBQ0VuRyxNQUFBLFlBQUFpRCxhQUFBO1lBQUtrQixTQUFTLEVBQUU7VUFBMkIsZ0JBQ3pDbkUsTUFBQSxZQUFBaUQsYUFBQSxZQUFJLElBQUksQ0FBQ1gsS0FBSyxDQUFDOEQsSUFBSSxDQUFDQyxpQkFBcUIsQ0FBQyxlQUMxQ3JHLE1BQUEsWUFBQWlELGFBQUEsV0FBSSxDQUFDLGVBQUFqRCxNQUFBLFlBQUFpRCxhQUFBLFdBQUksQ0FBQyxlQUNWakQsTUFBQSxZQUFBaUQsYUFBQSxjQUFNLElBQUksQ0FBQ1gsS0FBSyxDQUFDOEQsSUFBSSxDQUFDRSw0QkFBa0MsQ0FDckQsQ0FBQztRQUVWLENBQUMsTUFBTTtVQUNMO1VBQ0Esb0JBQ0V0RyxNQUFBLFlBQUFpRCxhQUFBO1lBQUtrQixTQUFTLEVBQUU7VUFBMkIsZ0JBQ3pDbkUsTUFBQSxZQUFBaUQsYUFBQTtZQUFLa0IsU0FBUyxFQUFFO1VBQWtCLEdBQUUsSUFBSSxDQUFDcUIsU0FBUyxDQUFDLElBQUksQ0FBQ2xELEtBQUssQ0FBQzZELElBQUksQ0FBTyxDQUFDLGVBQzFFbkcsTUFBQSxZQUFBaUQsYUFBQSxjQUNHbEMsTUFBTSxDQUFDMEMsSUFBSSxDQUFDLElBQUksQ0FBQ25CLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQyxDQUFDNUMsR0FBRyxDQUFDLFVBQVNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzdELElBQUkyQyxJQUFJLEdBQUd4RCxLQUFLLENBQUNWLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQzNDLE9BQU8sQ0FBQztZQUN4QyxvQkFBUTVELE1BQUEsWUFBQWlELGFBQUEsQ0FBQ2lDLHVCQUFBLENBQUEvQyxlQUFlO2NBQUNVLEdBQUcsRUFBRWdCLEtBQU07Y0FBQ1YsR0FBRyxFQUFFVSxLQUFNO2NBQUNOLEtBQUssRUFBRWlELElBQUksQ0FBQ2pELEtBQU07Y0FBQ2EsT0FBTyxFQUFFb0MsSUFBSztjQUN6RDlDLGNBQWMsRUFBRThDLElBQUksQ0FBQzlDLGNBQWU7Y0FBQ2EsYUFBYSxFQUFFdkIsS0FBSyxDQUFDdUI7WUFBYyxDQUFDLENBQUM7VUFDckcsQ0FBQyxDQUNFLENBQ0YsQ0FBQztRQUVWO01BQ0YsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxPQUFPLElBQUk7TUFDYjtJQUVGO0VBQUM7SUFBQTFCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QixhQUFhQSxDQUFDSCxPQUFPLEVBQUVJLEVBQUUsRUFBRTtNQUN6QixJQUFJaUMsV0FBVyxHQUFHLElBQUksQ0FBQ25FLEtBQUssQ0FBQ2lFLFFBQVE7TUFDckMsS0FBSyxJQUFJbEYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb0YsV0FBVyxDQUFDQyxNQUFNLEVBQUVyRixDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJb0YsV0FBVyxDQUFDcEYsQ0FBQyxDQUFDLENBQUNtRCxFQUFFLEtBQUtBLEVBQUUsRUFBRTtVQUM1QmlDLFdBQVcsQ0FBQ3BGLENBQUMsQ0FBQyxDQUFDc0YsU0FBUyxDQUFDckYsR0FBRyxDQUFDLGNBQWMsRUFBRThDLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDO1VBQzNELElBQUksQ0FBQ3FELG9CQUFvQixDQUFDSCxXQUFXLENBQUNwRixDQUFDLENBQUMsQ0FBQ3NGLFNBQVMsQ0FBQztVQUNuRDtRQUNGO01BQ0Y7TUFDQSxJQUFJLENBQUNyRSxLQUFLLENBQUNpQyxhQUFhLENBQUNILE9BQU8sRUFBRUksRUFBRSxDQUFDO0lBQ3ZDO0VBQUM7SUFBQTNCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErRCxpQkFBaUJBLENBQUEsRUFBRztNQUNsQixJQUFJLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQzZELElBQUksS0FBSyxRQUFRLEVBQUU7UUFDaEMsSUFBSSxDQUFDSCxlQUFlLENBQUNjLFlBQVksQ0FBQyxDQUFDO01BQ3JDO0lBQ0Y7RUFBQztJQUFBakUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlFLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJLElBQUksQ0FBQzVFLEtBQUssQ0FBQzZELElBQUksS0FBSyxRQUFRLEVBQUU7UUFDaEMsSUFBSSxDQUFDYSxTQUFTLENBQUNkLE1BQU0sSUFBSSxJQUFJLENBQUM1RCxLQUFLLENBQUM0RCxNQUFNLEVBQUU7VUFDMUMsSUFBSSxDQUFDRixlQUFlLENBQUNtQixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDO1FBQ0EsSUFBSUgsU0FBUyxDQUFDZCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUM1RCxLQUFLLENBQUM0RCxNQUFNLEVBQUU7VUFDMUMsSUFBSSxDQUFDRixlQUFlLENBQUNvQixrQkFBa0IsQ0FBQyxDQUFDO1FBQzNDO1FBQ0EsSUFBSSxDQUFDOUUsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDK0IsUUFBUSxDQUFDQyxVQUFVLENBQUMsQ0FBQztNQUNoRDtNQUNBLElBQUksSUFBSSxDQUFDaEYsS0FBSyxDQUFDNkQsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQzdELEtBQUssQ0FBQ2lGLFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDdkUsSUFBSSxDQUFDbkYsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDK0IsUUFBUSxDQUFDSyxRQUFRLENBQUMsQ0FBQztNQUM5QztNQUNBLElBQUksQ0FBQzVCLFlBQVksR0FBRyxJQUFJLENBQUN4RCxLQUFLLENBQUN5RCxTQUFTO0lBQzFDO0VBQUM7SUFBQWxELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtRCxzQkFBc0JBLENBQUEsRUFBRztNQUN2QixJQUFJMEIsTUFBTSxFQUFFcEIsUUFBUSxFQUFFcUIsTUFBTSxFQUFFQyxXQUFXO01BQ3pDLElBQU03RSxLQUFLLEdBQUcsSUFBSTtNQUNsQixPQUFPO1FBQ0w4RCxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBQSxFQUFjO1VBQzFCLElBQUlnQixjQUFjLEVBQ2hCQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsaUJBQWlCLEVBQ2pCckIsb0JBQW9CLEVBQ3BCc0Isa0JBQWtCLEVBQ2xCQyxrQkFBa0IsRUFDbEJDLG9CQUFvQjtVQUV0Qk4sY0FBYyxHQUFHOUUsS0FBSyxDQUFDOEMsWUFBWTtVQUVuQyxJQUFJOUMsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLENBQUNrQyxXQUFXLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNqRFYsTUFBTSxHQUFHM0UsS0FBSyxDQUFDVixLQUFLLENBQUNpRixZQUFZLENBQUNlLG9CQUFvQixDQUFDQyxTQUFTLENBQUMsQ0FBQztVQUNwRSxDQUFDLE1BQU0sSUFBSXZGLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSSxDQUFDa0MsV0FBVyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdERWLE1BQU0sR0FBRzNFLEtBQUssQ0FBQ1YsS0FBSyxDQUFDaUYsWUFBWSxDQUFDaUIsa0JBQWtCLENBQUNELFNBQVMsQ0FBQyxDQUFDO1VBQ2xFLENBQUMsTUFBTSxJQUFJdkYsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLENBQUNrQyxXQUFXLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN2RFYsTUFBTSxHQUFHM0UsS0FBSyxDQUFDVixLQUFLLENBQUNpRixZQUFZLENBQUNrQixtQkFBbUIsQ0FBQ0YsU0FBUyxDQUFDLENBQUM7VUFDbkUsQ0FBQyxNQUFNO1lBQ0xaLE1BQU0sR0FBRzNFLEtBQUssQ0FBQ1YsS0FBSyxDQUFDaUYsWUFBWSxDQUFDbUIsZ0JBQWdCLENBQUNILFNBQVMsQ0FBQyxDQUFDO1VBQ2hFO1VBRUFoQyxRQUFRLEdBQUcsSUFBSW9DLGNBQVUsQ0FBQyxDQUFDO1VBQzNCLElBQUkzRixLQUFLLENBQUNWLEtBQUssQ0FBQzZELElBQUksQ0FBQ2tDLFdBQVcsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQy9DO1VBQ0Y7VUFFQSxRQUFRckYsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJO1lBQ3RCLEtBQUssTUFBTTtjQUNUeUIsTUFBTSxHQUFHLFlBQVk7Y0FDckI7WUFDRixLQUFLLFNBQVM7Y0FDWkEsTUFBTSxHQUFHLFNBQVM7Y0FDbEI7WUFDRixLQUFLLFFBQVE7Y0FDWEEsTUFBTSxHQUFHLFFBQVE7Y0FDakI7WUFDRixLQUFLLFVBQVU7Y0FDYkEsTUFBTSxHQUFHLFlBQVk7Y0FDckI7VUFDSjtVQUVBQyxXQUFXLEdBQUcsSUFBSWUsaUJBQUksQ0FBQztZQUNyQnJDLFFBQVEsRUFBRUEsUUFBUTtZQUNsQm9CLE1BQU0sRUFBRUEsTUFBTTtZQUNkdkUsSUFBSSxFQUFFd0UsTUFBTTtZQUNaaUIsUUFBUSxFQUFFN0YsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLEtBQUs7WUFDL0I7WUFDQTtVQUNGLENBQUMsQ0FBQztVQUVGOEIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBYTdELE9BQU8sRUFBRTtZQUNyQyxJQUFJMEUsWUFBWSxFQUNkQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsV0FBVyxFQUNYQyxhQUFhLEVBQ2JDLFdBQVc7WUFFYixJQUFJLENBQUMvRSxPQUFPLEVBQUU7Y0FDWixPQUFPLEtBQUs7WUFDZDs7WUFFQTtZQUNBLElBQUlBLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEtBQUssWUFBWSxFQUFFO2NBQ3BETixRQUFRLEdBQUcvRixLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ2tELE1BQU07Y0FDbENOLE9BQU8sR0FBR2hHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDOEQsSUFBSSxDQUFDbUQsSUFBSTtjQUMvQk4sV0FBVyxHQUFHLEtBQUs7Y0FDbkJDLGFBQWEsR0FBRyxLQUFLO2NBQ3JCQyxXQUFXLEdBQUcsSUFBSTtZQUNwQixDQUFDLE1BQU0sSUFBSS9FLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO2NBQ3hETixRQUFRLEdBQUcvRixLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ29ELFNBQVM7Y0FDckNSLE9BQU8sR0FBR2hHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDOEQsSUFBSSxDQUFDcUQsT0FBTztjQUNsQ1IsV0FBVyxHQUFHLElBQUk7Y0FDbEJDLGFBQWEsR0FBRyxLQUFLO2NBQ3JCQyxXQUFXLEdBQUcsS0FBSztZQUNyQixDQUFDLE1BQU0sSUFBSS9FLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO2NBQ3ZETixRQUFRLEdBQUcvRixLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ3NELE1BQU07Y0FDbENWLE9BQU8sR0FBR2hHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDOEQsSUFBSSxDQUFDdUQsTUFBTTtjQUNqQ1YsV0FBVyxHQUFHLElBQUk7Y0FDbEJDLGFBQWEsR0FBRyxJQUFJO2NBQ3BCQyxXQUFXLEdBQUcsS0FBSztZQUNyQixDQUFDLE1BQU07Y0FDTDtjQUNBSixRQUFRLEdBQUcvRixLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ2tELE1BQU07Y0FDbENOLE9BQU8sR0FBR2hHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDOEQsSUFBSSxDQUFDd0QsUUFBUTtjQUNuQ1gsV0FBVyxHQUFHLEtBQUs7Y0FDbkJDLGFBQWEsR0FBRyxLQUFLO2NBQ3JCQyxXQUFXLEdBQUcsSUFBSTtZQUNwQjs7WUFFQTtZQUNBckIsY0FBYyxHQUFHOUUsS0FBSyxDQUFDOEMsWUFBWTtZQUNuQzFCLE9BQU8sQ0FBQzlDLEdBQUcsQ0FBQyxXQUFXLEVBQUV3RyxjQUFjLENBQUM7WUFDeEMsSUFBSStCLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDeEJBLGVBQWUsQ0FBQ3JGLEVBQUUsR0FBR3NELGNBQWM7WUFDbkMrQixlQUFlLENBQUN0RyxLQUFLLEdBQUd5RixPQUFPLEdBQUcsR0FBRyxHQUFHbEIsY0FBYztZQUN0RDFELE9BQU8sQ0FBQzlDLEdBQUcsQ0FBQyxjQUFjLEVBQUV1SSxlQUFlLENBQUN0RyxLQUFLLENBQUM7WUFDbERzRyxlQUFlLENBQUNuRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUl5RixXQUFXLEVBQUU7Y0FDZlUsZUFBZSxDQUFDbkcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2dCQUN2Q1EsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCcEIsS0FBSyxFQUFFO2NBQ1QsQ0FBQztZQUNIO1lBQ0EsSUFBSW9HLGFBQWEsRUFBRTtjQUNqQlcsZUFBZSxDQUFDbkcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN6Q1EsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCcEIsS0FBSyxFQUFFO2NBQ1QsQ0FBQztZQUNIO1lBQ0EsSUFBSW1HLFdBQVcsRUFBRTtjQUNmWSxlQUFlLENBQUNuRyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ3ZDUSxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QnBCLEtBQUssRUFBRTtjQUNULENBQUM7WUFDSDtZQUNBK0csZUFBZSxDQUFDbEQsU0FBUyxHQUFHdkMsT0FBTztZQUNuQ3BCLEtBQUssQ0FBQ1YsS0FBSyxDQUFDd0gsVUFBVSxDQUFDRCxlQUFlLENBQUM7WUFDdkM7WUFDQTdHLEtBQUssQ0FBQ1YsS0FBSyxDQUFDeUgsVUFBVSxDQUFDLENBQUM7WUFDeEI7VUFDRixDQUFDLENBQUMsQ0FBQzs7VUFFSG5ELG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQWF4QyxPQUFPLEVBQUU7WUFDeEMsSUFBSTRGLGNBQWMsRUFDaEJDLFVBQVUsRUFDVjVHLElBQUksRUFDSnFELE1BQU0sRUFDTi9CLElBQUksRUFDSnVGLE1BQU07WUFFUkYsY0FBYyxHQUFHNUYsT0FBTyxDQUFDekQsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUN2QzBDLElBQUksR0FBR2UsT0FBTyxDQUFDekQsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNsQytGLE1BQU0sR0FBR3lELG1CQUFLLENBQUNDLGVBQWUsQ0FBQ2hHLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzNEaEYsT0FBTyxDQUFDOUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFb0YsTUFBTSxDQUFDMkQsUUFBUSxDQUFDO1lBQzlDTCxjQUFjLENBQUNNLFVBQVUsQ0FBQyxVQUFVLEdBQUdqSCxJQUFJLEdBQUcsV0FBVyxHQUFHLE1BQU0sR0FBR3FELE1BQU0sQ0FBQzZELFNBQVMsQ0FBQztZQUN0RixJQUFJeEUsU0FBUyxHQUFHM0IsT0FBTyxDQUFDekQsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxJQUFJNkosVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQkEsVUFBVSxDQUFDakgsS0FBSyxHQUFHRixJQUFJO1lBQ3ZCbUgsVUFBVSxDQUFDaEcsRUFBRSxHQUFHdUIsU0FBUztZQUN6QnlFLFVBQVUsQ0FBQzlHLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDOUI4RyxVQUFVLENBQUM3RCxTQUFTLEdBQUd2QyxPQUFPO1lBQzlCLElBQUlzQyxNQUFNLElBQUl0QyxPQUFPLENBQUN6RCxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxJQUNqRHlELE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxTQUFTLEVBQUU7Y0FDOUM2SixVQUFVLENBQUM5RyxjQUFjLENBQUMrRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2NBQ25DRCxVQUFVLENBQUM5RyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNRLFdBQVcsR0FBRyxTQUFTO2NBQ3pEc0csVUFBVSxDQUFDOUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDWixLQUFLLEdBQUc0RCxNQUFNLENBQUMyRCxRQUFRO1lBQzNEO1lBRUEsSUFBSWpHLE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLEVBQUU7Y0FDNUN1SixNQUFNLEdBQUdDLG1CQUFLLENBQUNDLGVBQWUsQ0FBQ2hHLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLENBQUM7Y0FDckRvQixVQUFVLENBQUM5RyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUc7Z0JBQ3BDUSxXQUFXLEVBQUUsVUFBVTtnQkFDdkJwQixLQUFLLEVBQUU7Y0FDVCxDQUFDO2NBQ0QwSCxVQUFVLENBQUM5RyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNaLEtBQUssR0FBR29ILE1BQU0sQ0FBQ0csUUFBUTtjQUMzREwsY0FBYyxDQUFDTSxVQUFVLENBQUMsVUFBVSxHQUFHakgsSUFBSSxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQzlEbUgsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDUSxXQUFXLEdBQUdnRyxNQUFNLENBQUNLLFNBQVMsQ0FBQztZQUN6RTtZQUNBLElBQUluRyxPQUFPLENBQUN6RCxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxJQUN4Q3lELE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxRQUFRLEVBQUU7Y0FDN0NnRSxJQUFJLEdBQUd3RixtQkFBSyxDQUFDQyxlQUFlLENBQUNoRyxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Y0FDaEVvQixVQUFVLENBQUM5RyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ2xDUSxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QnBCLEtBQUssRUFBRTtjQUNULENBQUM7Y0FDRDBILFVBQVUsQ0FBQzlHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1osS0FBSyxHQUFHNkIsSUFBSSxDQUFDMEYsUUFBUTtjQUN2REwsY0FBYyxDQUFDTSxVQUFVLENBQUMsVUFBVSxHQUFHakgsSUFBSSxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQzlEbUgsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxXQUFXLEdBQUdTLElBQUksQ0FBQzRGLFNBQVMsQ0FBQztZQUNyRTtZQUNBbkcsT0FBTyxDQUFDOUMsR0FBRyxDQUFDLFNBQVMsRUFBRTBJLGNBQWMsQ0FBQztZQUN0Q2hILEtBQUssQ0FBQ1YsS0FBSyxDQUFDaUMsYUFBYSxDQUFDaUcsVUFBVSxFQUFFQSxVQUFVLENBQUNoRyxFQUFFLENBQUM7VUFDdEQsQ0FBQyxDQUFDLENBQUM7O1VBRUh4QixLQUFLLENBQUM0RCxvQkFBb0IsR0FBR0Esb0JBQW9CO1VBRWpEd0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBYWhFLE9BQU8sRUFBRTtZQUN4Q3BCLEtBQUssQ0FBQ1YsS0FBSyxDQUFDb0ksYUFBYSxDQUFDdEcsT0FBTyxDQUFDekQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1VBQ3JELENBQUMsQ0FBQyxDQUFDOztVQUVIO1VBQ0F1SCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFhOUQsT0FBTyxFQUFFO1lBQ3RDLElBQUl1RyxJQUFJLEdBQUdSLG1CQUFLLENBQUNDLGVBQWUsQ0FBQ2hHLE9BQU8sQ0FBQ2dGLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzdEO1lBQ0EsSUFBSXdCLEdBQUcsR0FBR0QsSUFBSSxDQUFDSixTQUFTO1lBQ3hCLElBQUlNLFNBQVMsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2hDRCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixPQUFPRixTQUFTO1VBQ2xCLENBQUM7VUFFRDFDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBZTtZQUMvQixJQUFJekIsTUFBTSxHQUFHLFFBQVE7WUFDckIsSUFBSXNFLFVBQVUsR0FBR3RFLE1BQU0sQ0FBQ29FLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcENFLFVBQVUsR0FBR0EsVUFBVSxDQUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hDQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsT0FBT0EsVUFBVTtVQUNuQixDQUFDLENBQUM7O1VBRUZuRCxXQUFXLENBQUNvRCxFQUFFLENBQUMsV0FBVyxFQUN4QixVQUFVQyxLQUFLLEVBQUU7WUFDZm5ELFlBQVksR0FBR21ELEtBQUssQ0FBQzlHLE9BQU87WUFDNUI7WUFDQTRELGFBQWEsR0FBRyxJQUFJbUQscUNBQVksQ0FBQztjQUMvQnhILEdBQUcsRUFBRVgsS0FBSyxDQUFDVixLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHO2NBQ2xDeUgsUUFBUSxFQUFFRixLQUFLLENBQUNHLFVBQVU7Y0FDMUJDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUNmQyxVQUFVLEVBQUUsSUFBSTtjQUNoQkMsU0FBUyxFQUFFLElBQUk7Y0FDZkMsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBYztnQkFDekI7Z0JBQ0EsSUFBSWIsR0FBRyxHQUFHMUMsa0JBQWtCLENBQUNnRCxLQUFLLENBQUM5RyxPQUFPLENBQUM7Z0JBQzNDLElBQUl1RyxJQUFJLEdBQUd4QyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMvQixJQUFJeUMsR0FBRyxLQUFLRCxJQUFJLElBQUlDLEdBQUcsR0FBR0QsSUFBSSxFQUFFO2tCQUM5QnZDLG9CQUFvQixDQUFDOEMsS0FBSyxDQUFDOUcsT0FBTyxDQUFDO2tCQUNuQyxJQUFJdUQsTUFBTSxDQUFDK0QsVUFBVSxDQUFFUixLQUFLLENBQUM5RyxPQUFPLENBQUMsRUFBRTtvQkFDckN1RCxNQUFNLENBQUMrQyxhQUFhLENBQUNRLEtBQUssQ0FBQzlHLE9BQU8sQ0FBQztrQkFDckM7Z0JBQ0YsQ0FBQyxNQUNJO2tCQUNIZ0Usb0JBQW9CLENBQUM4QyxLQUFLLENBQUM5RyxPQUFPLENBQUM7Z0JBQ3JDO2NBQ0Y7WUFDRixDQUFDLENBQUM7WUFFRjJELFlBQVksQ0FBQ3pHLEdBQUcsQ0FBQyxTQUFTLEVBQUUwRyxhQUFhLENBQUM7WUFDMUNELFlBQVksQ0FBQ3pHLEdBQUcsQ0FBQyxjQUFjLEVBQUUwQixLQUFLLENBQUNWLEtBQUssQ0FBQzZELElBQUksQ0FBQ2tDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEVKLGlCQUFpQixDQUFDRixZQUFZLENBQUM7VUFDakMsQ0FBQyxFQUFFL0UsS0FBSyxDQUFDO1VBRVhBLEtBQUssQ0FBQ1YsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDM0IsR0FBRyxDQUFDc0gsRUFBRSxDQUFDLGFBQWEsRUFDNUMsVUFBVUMsS0FBSyxFQUFFO1lBQ2YsSUFBSW5ELFlBQVksSUFBSUMsYUFBYSxFQUFFO2NBQ2pDQSxhQUFhLENBQUMyRCxXQUFXLENBQUNULEtBQUssQ0FBQ0csVUFBVSxDQUFDO2NBQzNDekUsb0JBQW9CLENBQUNtQixZQUFZLENBQUM7WUFDcEM7VUFDRixDQUFDLEVBQUUvRSxLQUFLLENBQUM7VUFFWDZFLFdBQVcsQ0FBQ29ELEVBQUUsQ0FBQyxTQUFTLEVBQ3RCLFVBQVVDLEtBQUssRUFBRTtZQUNmLElBQUluRCxZQUFZLElBQUlDLGFBQWEsRUFBRTtjQUNqQ3BCLG9CQUFvQixDQUFDbUIsWUFBWSxDQUFDO2NBQ2xDQSxZQUFZLEdBQUcsSUFBSTtjQUNuQkMsYUFBYSxHQUFHLElBQUk7WUFDdEI7VUFDRixDQUFDLEVBQUVoRixLQUFLLENBQUM7VUFFWCxPQUFPLElBQUk7UUFDYixDQUFDO1FBQ0NtRSxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFBLEVBQWM7VUFDNUJaLFFBQVEsQ0FBQ3FGLEtBQUssQ0FBQyxDQUFDO1VBQ2hCO1VBQ0E1SSxLQUFLLENBQUNWLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQzNCLEdBQUcsQ0FBQ2tJLGNBQWMsQ0FBQ2hFLFdBQVcsQ0FBQztRQUMzRCxDQUFDO1FBQ0RULGtCQUFrQixFQUFFLFNBQXBCQSxrQkFBa0JBLENBQUEsRUFBYztVQUM5QixJQUFJcEUsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLENBQUNrQyxXQUFXLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUM5QyxJQUFJO2NBQ0ZSLFdBQVcsQ0FBQ2lFLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxPQUFPQyxNQUFNLEVBQUU7Y0FDZjtZQUFBO1VBRUo7VUFDQTtVQUNBL0ksS0FBSyxDQUFDVixLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHLENBQUNxSSxpQkFBaUIsQ0FBQ25FLFdBQVcsQ0FBQztRQUM5RDtNQUNGLENBQUM7SUFDSDtFQUFDO0FBQUEsRUFwV21DakQsZ0JBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUC9DLElBQUE1RSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBRUEsSUFBQTJFLFlBQUEsR0FBQTNFLG1CQUFBO0FBQ0EsSUFBQStMLFFBQUEsR0FBQS9MLG1CQUFBO0FBQ0EsSUFBQWdNLG9CQUFBLEdBQUFoTSxtQkFBQTtBQUNBLElBQUFpTSxNQUFBLEdBQUFqTSxtQkFBQTtBQUNBLElBQUFrTSxPQUFBLEdBQUFsTSxtQkFBQTtBQUNBLElBQUE0RSxHQUFBLEdBQUE1RSxtQkFBQTtBQUNBLElBQUE4RSxhQUFBLEdBQUE5RSxtQkFBQTtBQUF3QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWxCeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTThMLFFBQVEsZ0JBQUdDLGlCQUFLLENBQUNDLElBQUksQ0FBQztFQUFBLE9BQU0sbUxBQTRCO0FBQUEsRUFBQztBQUFDLElBUzNDQyxZQUFZLEdBQUFwSyxrQkFBQSwwQkFBQUMsVUFBQTtFQUUvQixTQUFBbUssYUFBWWxLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQWdLLFlBQUE7SUFDakJqSyxLQUFBLEdBQUFoQixVQUFBLE9BQUFpTCxZQUFBLEdBQU1sSyxLQUFLO0lBRVgsSUFBTVUsS0FBSyxHQUFBVCxLQUFPO0lBQ2xCO0lBQ0EsSUFBSXFCLE9BQU8sR0FBR1MsUUFBUSxDQUFDcEIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQyxJQUFJd0osTUFBTSxHQUFHcEksUUFBUSxDQUFDcEIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q1YsS0FBQSxDQUFLNkMsYUFBYSxHQUFHLElBQUFDLHdCQUFXLEVBQUMvQyxLQUFLLENBQUNnRCxhQUFhLENBQUNDLElBQUksQ0FBQztJQUMxRCxJQUFJakQsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDQyxJQUFJLENBQUNtSCxTQUFTLElBQUlwSyxLQUFLLENBQUNnRCxhQUFhLENBQUNDLElBQUksQ0FBQ21ILFNBQVMsQ0FBQ0MsYUFBYSxFQUFFO01BQzFGLElBQUlDLElBQUksR0FBR3ZJLFFBQVEsQ0FBQ3BCLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDekMySixJQUFJLENBQUNDLFNBQVMsR0FBR3RLLEtBQUEsQ0FBSzZDLGFBQWEsQ0FBQzBILGlCQUFpQjtNQUNyREwsTUFBTSxDQUFDTSxXQUFXLENBQUNILElBQUksQ0FBQztJQUMxQixDQUFDLE1BQ0k7TUFDSEgsTUFBTSxDQUFDTyxLQUFLLEdBQUd6SyxLQUFBLENBQUs2QyxhQUFhLENBQUMwSCxpQkFBaUI7SUFDckQ7SUFDQWxKLE9BQU8sQ0FBQ08sU0FBUyxHQUFHLHNEQUFzRDtJQUMxRSxJQUFJN0IsS0FBSyxDQUFDbUYsSUFBSSxFQUFFO01BQ2Q3RCxPQUFPLENBQUNPLFNBQVMsSUFBSSxVQUFVO0lBQ2pDLENBQUMsTUFBTTtNQUNMUCxPQUFPLENBQUNPLFNBQVMsSUFBSSxXQUFXO0lBQ2xDO0lBQ0EsSUFBSTdCLEtBQUssQ0FBQzJLLFFBQVEsRUFBRTtNQUNsQnJKLE9BQU8sQ0FBQ08sU0FBUyxJQUFJLGVBQWU7SUFDdEM7SUFDQVAsT0FBTyxDQUFDbUosV0FBVyxDQUFDTixNQUFNLENBQUM7SUFDM0JTLE1BQU0sQ0FBQ3RKLE9BQU8sQ0FBQyxDQUFDcUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVQyxLQUFLLEVBQUU7TUFDM0MsSUFBSWlDLE1BQU0sR0FBR25LLEtBQUssQ0FBQ1YsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDOEgscUJBQXFCLENBQUNqSixTQUFTLENBQUNrSixRQUFRLENBQUMsV0FBVyxDQUFDO01BQzVGLElBQUlySyxLQUFLLENBQUN3RSxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNwQixJQUFJLENBQUMwRixNQUFNLEVBQUU7VUFDWG5LLEtBQUssQ0FBQ3NLLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxNQUNJO1VBQ0hKLE1BQU0sQ0FBQ2xLLEtBQUssQ0FBQ1YsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDOEgscUJBQXFCLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3ZHO01BQ0YsQ0FBQyxNQUFNO1FBQ0x4SyxLQUFLLENBQUN5RSxJQUFJLENBQUMsQ0FBQztNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSW5DLGFBQWEsR0FBR2hELEtBQUssQ0FBQ2dELGFBQWE7SUFDdkMsSUFBSW1JLE9BQU8sR0FBRyxJQUFJQyxnQkFBTyxDQUFDO01BQUM5SixPQUFPLEVBQUVBLE9BQU87TUFBRStKLE1BQU0sRUFBRXJMLEtBQUssQ0FBQ3FMO0lBQU0sQ0FBQyxDQUFDO0lBQ25FLElBQUk5SixLQUFLLEdBQUd5QixhQUFhLENBQUNzSSxhQUFhLENBQUNDLFNBQVMsQ0FBQyxVQUFBakssT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ1AsSUFBSSxLQUFLLGNBQWM7SUFBQSxFQUFDO0lBQzdGaUMsYUFBYSxDQUFDc0ksYUFBYSxDQUFDL0osS0FBSyxDQUFDLENBQUM0SixPQUFPLEdBQUdBLE9BQU87SUFDcERuSSxhQUFhLENBQUN3SSxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsWUFBWSxHQUFHUCxPQUFPO0lBQzFEbEwsS0FBQSxDQUFLK0ssS0FBSyxHQUFHL0ssS0FBQSxDQUFLK0ssS0FBSyxDQUFDNUssSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFDbENBLEtBQUEsQ0FBS2tGLElBQUksR0FBR2xGLEtBQUEsQ0FBS2tGLElBQUksQ0FBQy9FLElBQUksQ0FBQUgsS0FBSyxDQUFDO0lBQ2hDQSxLQUFBLENBQUswTCxrQkFBa0IsR0FBRzFMLEtBQUEsQ0FBSzBMLGtCQUFrQixDQUFDdkwsSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFDNURBLEtBQUEsQ0FBSzJMLHFCQUFxQixHQUFHM0wsS0FBQSxDQUFLMkwscUJBQXFCLENBQUN4TCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsRUEsS0FBQSxDQUFLNEwscUJBQXFCLEdBQUc1TCxLQUFBLENBQUs0TCxxQkFBcUIsQ0FBQ3pMLElBQUksQ0FBQUgsS0FBSyxDQUFDO0lBQ2xFQSxLQUFBLENBQUs2TCxrQkFBa0IsR0FBRzdMLEtBQUEsQ0FBSzZMLGtCQUFrQixDQUFDMUwsSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFDNURBLEtBQUEsQ0FBSzhMLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFFaEU5TCxLQUFBLENBQUtpRixLQUFLLEdBQUc7TUFDWEMsSUFBSSxFQUFFbkYsS0FBSyxDQUFDbUYsSUFBSSxJQUFJLEtBQUs7TUFDekI2RyxXQUFXLEVBQUUsUUFBUTtNQUNyQmIsT0FBTyxFQUFFQSxPQUFPO01BQ2hCYyxnQkFBZ0IsRUFBRSxFQUFFO01BQ3BCekksWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFDRHZELEtBQUEsQ0FBS2lNLElBQUksQ0FBQyxDQUFDO0lBQUMsT0FBQWpNLEtBQUE7RUFDZDtFQUFDLElBQUFJLFVBQUEsYUFBQTZKLFlBQUEsRUFBQW5LLFVBQUE7RUFBQSxXQUFBTyxhQUFBLGFBQUE0SixZQUFBO0lBQUEzSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSTtNQUNsQixJQUFJeUwsV0FBVyxHQUFHO1FBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUNySixhQUFhLENBQUNLLGdDQUFnQztRQUM3RCxNQUFNLEVBQUUsSUFBSSxDQUFDTCxhQUFhLENBQUNNLHlDQUF5QztRQUNwRSxTQUFTLEVBQUUsSUFBSSxDQUFDTixhQUFhLENBQUNPLHNDQUFzQztRQUNwRSxRQUFRLEVBQUUsSUFBSSxDQUFDUCxhQUFhLENBQUNRLHFDQUFxQztRQUNsRSxVQUFVLEVBQUUsSUFBSSxDQUFDUixhQUFhLENBQUNTO01BQ2pDLENBQUM7TUFFRCxvQkFDRTdGLE1BQUEsWUFBQWlELGFBQUE7UUFBS2tCLFNBQVMsRUFBRTtNQUEyQixnQkFDekNuRSxNQUFBLFlBQUFpRCxhQUFBLENBQUNqRCxNQUFBLENBQUEwTyxRQUFRO1FBQUNDLFFBQVEsZUFBRTNPLE1BQUEsWUFBQWlELGFBQUEsY0FBSyxZQUFlO01BQUUsZ0JBQ3hDakQsTUFBQSxZQUFBaUQsYUFBQSxDQUFDb0osUUFBUTtRQUFDdUMsWUFBWSxFQUFFLHlCQUEwQjtRQUFDQyxXQUFXLEVBQUUsMkJBQTRCO1FBQUNDLGFBQWEsRUFBRSw2QkFBOEI7UUFDaElDLE1BQU0sRUFBRSxJQUFJLENBQUMzSixhQUFhLENBQUM0SixZQUFhO1FBQUNDLGFBQWEsRUFBRSxvQkFBcUI7UUFBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQzVCLEtBQU07UUFBQzZCLGFBQWEsRUFBRSxJQUFJLENBQUMvSixhQUFhLENBQUNnSztNQUFNLENBQzlJLENBQ0YsQ0FBQyxlQUNYcFAsTUFBQSxZQUFBaUQsYUFBQTtRQUFLa0IsU0FBUyxFQUFFO01BQWlDLEdBQzlDLElBQUksQ0FBQ2tLLEtBQUssQ0FBQzFLLEdBQUcsQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtRQUN2QyxvQkFBTzdELE1BQUEsWUFBQWlELGFBQUE7VUFBUUosR0FBRyxFQUFFZ0IsS0FBTTtVQUFDTSxTQUFTLEVBQUUsY0FBYyxHQUFHUCxPQUFPLEdBQUcsR0FBRyxJQUFJQSxPQUFPLEtBQUtaLEtBQUssQ0FBQ3dFLEtBQUssQ0FBQzhHLFdBQVcsR0FBRyxZQUFZLEdBQUcsY0FBYyxDQUFFO1VBQzlIZSxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQTtZQUFBLE9BQVFyTSxLQUFLLENBQUNzTSxRQUFRLENBQUM7Y0FBQ2hCLFdBQVcsRUFBRTFLO1lBQU8sQ0FBQyxDQUFDO1VBQUEsQ0FBQztVQUFDb0osS0FBSyxFQUFFeUIsV0FBVyxDQUFDN0ssT0FBTztRQUFFLENBQUMsQ0FBQztNQUN4RyxDQUFDLENBQ0UsQ0FBQyxlQUNONUQsTUFBQSxZQUFBaUQsYUFBQSxDQUFDaUosb0JBQUEsQ0FBQS9HLGdCQUFnQjtRQUFDZ0IsSUFBSSxFQUFFLFFBQVM7UUFBQ29CLFlBQVksRUFBRSxJQUFLO1FBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDc0IsS0FBSyxDQUFDOEcsV0FBVyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUM5RyxLQUFLLENBQUNDLElBQUs7UUFBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUMxQixZQUFhO1FBQ3ZJTSxJQUFJLEVBQUUsSUFBSSxDQUFDaEIsYUFBYztRQUFDMEUsVUFBVSxFQUFFLElBQUksQ0FBQ21FLGtCQUFtQjtRQUFDMUgsUUFBUSxFQUFFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFpQjtRQUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQ3FFLGtCQUFtQjtRQUMxSTdKLGFBQWEsRUFBRSxJQUFJLENBQUMySixxQkFBc0I7UUFBQzVJLGFBQWEsRUFBRSxJQUFJLENBQUNoRCxLQUFLLENBQUNnRCxhQUFjO1FBQUNvRixhQUFhLEVBQUUsSUFBSSxDQUFDeUQ7TUFBc0IsQ0FBQyxDQUFDLGVBQ2xKbk8sTUFBQSxZQUFBaUQsYUFBQSxDQUFDaUosb0JBQUEsQ0FBQS9HLGdCQUFnQjtRQUFDZ0IsSUFBSSxFQUFFLE1BQU87UUFBQ29CLFlBQVksRUFBRSxJQUFLO1FBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDc0IsS0FBSyxDQUFDOEcsV0FBVyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM5RyxLQUFLLENBQUNDLElBQUs7UUFBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUMxQixZQUFhO1FBQ25JTSxJQUFJLEVBQUUsSUFBSSxDQUFDaEIsYUFBYztRQUFDMEUsVUFBVSxFQUFFLElBQUksQ0FBQ21FLGtCQUFtQjtRQUFDMUgsUUFBUSxFQUFFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFpQjtRQUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQ3FFLGtCQUFtQjtRQUMxSTdKLGFBQWEsRUFBRSxJQUFJLENBQUMySixxQkFBc0I7UUFBQzVJLGFBQWEsRUFBRSxJQUFJLENBQUNoRCxLQUFLLENBQUNnRCxhQUFjO1FBQUNvRixhQUFhLEVBQUUsSUFBSSxDQUFDeUQ7TUFBc0IsQ0FBQyxDQUFDLGVBQ2xKbk8sTUFBQSxZQUFBaUQsYUFBQSxDQUFDaUosb0JBQUEsQ0FBQS9HLGdCQUFnQjtRQUFDZ0IsSUFBSSxFQUFFLFNBQVU7UUFBQ29CLFlBQVksRUFBRSxJQUFLO1FBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDc0IsS0FBSyxDQUFDOEcsV0FBVyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUM5RyxLQUFLLENBQUNDLElBQUs7UUFBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUMxQixZQUFhO1FBQ3pJTSxJQUFJLEVBQUUsSUFBSSxDQUFDaEIsYUFBYztRQUFDMEUsVUFBVSxFQUFFLElBQUksQ0FBQ21FLGtCQUFtQjtRQUFDMUgsUUFBUSxFQUFFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFpQjtRQUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQ3FFLGtCQUFtQjtRQUMxSTdKLGFBQWEsRUFBRSxJQUFJLENBQUMySixxQkFBc0I7UUFBQzVJLGFBQWEsRUFBRSxJQUFJLENBQUNoRCxLQUFLLENBQUNnRCxhQUFjO1FBQUNvRixhQUFhLEVBQUUsSUFBSSxDQUFDeUQ7TUFBc0IsQ0FBQyxDQUFDLGVBQ2xKbk8sTUFBQSxZQUFBaUQsYUFBQSxDQUFDaUosb0JBQUEsQ0FBQS9HLGdCQUFnQjtRQUFDZ0IsSUFBSSxFQUFFLFFBQVM7UUFBQ29CLFlBQVksRUFBRSxJQUFLO1FBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDc0IsS0FBSyxDQUFDOEcsV0FBVyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUM5RyxLQUFLLENBQUNDLElBQUs7UUFBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUMxQixZQUFhO1FBQ3ZJTSxJQUFJLEVBQUUsSUFBSSxDQUFDaEIsYUFBYztRQUFDMEUsVUFBVSxFQUFFLElBQUksQ0FBQ21FLGtCQUFtQjtRQUFDMUgsUUFBUSxFQUFFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFpQjtRQUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQ3FFLGtCQUFtQjtRQUMxSTdKLGFBQWEsRUFBRSxJQUFJLENBQUMySixxQkFBc0I7UUFBQzVJLGFBQWEsRUFBRSxJQUFJLENBQUNoRCxLQUFLLENBQUNnRCxhQUFjO1FBQUNvRixhQUFhLEVBQUUsSUFBSSxDQUFDeUQ7TUFBc0IsQ0FBQyxDQUFDLGVBQ2xKbk8sTUFBQSxZQUFBaUQsYUFBQSxDQUFDaUosb0JBQUEsQ0FBQS9HLGdCQUFnQjtRQUFDZ0IsSUFBSSxFQUFFLFVBQVc7UUFBQ29CLFlBQVksRUFBRSxJQUFLO1FBQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDc0IsS0FBSyxDQUFDOEcsV0FBVyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUM5RyxLQUFLLENBQUNDLElBQUs7UUFBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUMxQixZQUFhO1FBQzNJTSxJQUFJLEVBQUUsSUFBSSxDQUFDaEIsYUFBYztRQUFDMEUsVUFBVSxFQUFFLElBQUksQ0FBQ21FLGtCQUFtQjtRQUFDMUgsUUFBUSxFQUFFLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFpQjtRQUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQ3FFLGtCQUFtQjtRQUMxSTdKLGFBQWEsRUFBRSxJQUFJLENBQUMySixxQkFBc0I7UUFBQzVJLGFBQWEsRUFBRSxJQUFJLENBQUNoRCxLQUFLLENBQUNnRCxhQUFjO1FBQUNvRixhQUFhLEVBQUUsSUFBSSxDQUFDeUQ7TUFBc0IsQ0FBQyxDQUM5SSxDQUFDO0lBRVY7RUFBQztJQUFBdEwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNMLGtCQUFrQkEsQ0FBQSxFQUFHO01BQ25CLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQztRQUFDeEosWUFBWSxFQUFFLElBQUksQ0FBQzBCLEtBQUssQ0FBQzFCLFlBQVksR0FBRztNQUFDLENBQUMsQ0FBQztJQUM1RDtFQUFDO0lBQUFqRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUwsa0JBQWtCQSxDQUFDN0osT0FBTyxFQUFFO01BQzFCLElBQUltQyxRQUFRLEdBQUcsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWdCO01BQzFDaEksUUFBUSxDQUFDZ0osSUFBSSxDQUFDbkwsT0FBTyxDQUFDO01BQ3RCLElBQUksQ0FBQ2tMLFFBQVEsQ0FBQztRQUFDZixnQkFBZ0IsRUFBRWhJO01BQVEsQ0FBQyxDQUFDO0lBQzdDO0VBQUM7SUFBQTFELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvTCxxQkFBcUJBLENBQUMxRCxVQUFVLEVBQUVoRyxFQUFFLEVBQUU7TUFDcEMsSUFBSStCLFFBQVEsR0FBRyxJQUFJLENBQUNpQixLQUFLLENBQUMrRyxnQkFBZ0I7TUFDMUMsS0FBSyxJQUFJbE4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa0YsUUFBUSxDQUFDRyxNQUFNLEVBQUVyRixDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJa0YsUUFBUSxDQUFDbEYsQ0FBQyxDQUFDLENBQUNtRCxFQUFFLEtBQUtBLEVBQUUsRUFBRTtVQUN6QitCLFFBQVEsQ0FBQ2xGLENBQUMsQ0FBQyxHQUFHbUosVUFBVTtRQUMxQjtNQUNGO01BQ0EsSUFBSSxDQUFDOEUsUUFBUSxDQUFDO1FBQUNmLGdCQUFnQixFQUFFaEk7TUFBUSxDQUFDLENBQUM7SUFDN0M7RUFBQztJQUFBMUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFMLHFCQUFxQkEsQ0FBQzNKLEVBQUUsRUFBRTtNQUN4QixJQUFJK0IsUUFBUSxHQUFHLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFnQjtNQUMxQyxLQUFLLElBQUlsTixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrRixRQUFRLENBQUNHLE1BQU0sRUFBRXJGLENBQUMsRUFBRSxFQUFFO1FBQ3hDLElBQUlrRixRQUFRLENBQUNsRixDQUFDLENBQUMsQ0FBQ21ELEVBQUUsS0FBS0EsRUFBRSxFQUFFO1VBQ3pCK0IsUUFBUSxDQUFDaUosTUFBTSxDQUFDbk8sQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNyQjtRQUNGO01BQ0Y7TUFDQSxJQUFJLENBQUNpTyxRQUFRLENBQUM7UUFBQ2YsZ0JBQWdCLEVBQUVoSTtNQUFRLENBQUMsQ0FBQztJQUM3QztFQUFDO0lBQUExRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMk0sY0FBY0EsQ0FBQ0MsT0FBTyxFQUFFO01BQ3RCLElBQUksSUFBSSxDQUFDckIsS0FBSyxDQUFDaEIsUUFBUSxDQUFDcUMsT0FBTyxDQUFDLEVBQUU7UUFDaEMsSUFBSSxDQUFDSixRQUFRLENBQUM7VUFBQ2hCLFdBQVcsRUFBRW9CO1FBQU8sQ0FBQyxDQUFDO01BQ3ZDLENBQUMsTUFBTTtRQUNMQyxPQUFPLENBQUNDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztNQUNyRDtJQUNGO0VBQUM7SUFBQS9NLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyRSxJQUFJQSxDQUFBLEVBQUc7TUFDTCxJQUFJLENBQUM2SCxRQUFRLENBQUM7UUFBQzdILElBQUksRUFBRTtNQUFJLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNuRixLQUFLLENBQUNnRCxhQUFhLENBQUN1SyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFDakQ7RUFBQztJQUFBaE4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdLLEtBQUtBLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ2dDLFFBQVEsQ0FBQztRQUFDN0gsSUFBSSxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQzlCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUE1RSxHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBMEwsSUFBSUEsQ0FBQSxFQUFHO01BQ0w7TUFDQSxJQUFJLENBQUM5RixnQkFBZ0IsR0FBRyxJQUFJb0gsYUFBTSxDQUFDO1FBQUNuSSxNQUFNLEVBQUUsSUFBSW9JLGNBQVksQ0FBQztNQUFDLENBQUMsQ0FBQztNQUNoRSxJQUFJLENBQUN0SCxtQkFBbUIsR0FBRyxJQUFJcUgsYUFBTSxDQUFDO1FBQUNuSSxNQUFNLEVBQUUsSUFBSW9JLGNBQVksQ0FBQztNQUFDLENBQUMsQ0FBQztNQUNuRSxJQUFJLENBQUN2SCxrQkFBa0IsR0FBRyxJQUFJc0gsYUFBTSxDQUFDO1FBQUNuSSxNQUFNLEVBQUUsSUFBSW9JLGNBQVksQ0FBQztNQUFDLENBQUMsQ0FBQztNQUNsRSxJQUFJLENBQUN6SCxvQkFBb0IsR0FBRyxJQUFJd0gsYUFBTSxDQUFDO1FBQUNuSSxNQUFNLEVBQUUsSUFBSW9JLGNBQVksQ0FBQztNQUFDLENBQUMsQ0FBQztNQUVwRSxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUlDLFlBQUssQ0FBQztRQUNqQ0MsTUFBTSxFQUFFLElBQUl2SCxjQUFVLENBQUMsQ0FDckIsSUFBSSxDQUFDTCxvQkFBb0IsRUFDekIsSUFBSSxDQUFDRSxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FDdEIsQ0FBQztRQUNGeUgsT0FBTyxFQUFFO01BQ1gsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDN04sS0FBSyxDQUFDZ0QsYUFBYSxDQUFDM0IsR0FBRyxDQUFDeU0sUUFBUSxDQUFDLElBQUksQ0FBQ0osaUJBQWlCLENBQUM7O01BRTdEO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0VBQUE7SUFBQW5OLEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFpRSxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFDakQsSUFBSUQsU0FBUyxDQUFDUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ3RDO1FBQ0F5RixNQUFNLENBQUMsSUFBSSxDQUFDMUYsS0FBSyxDQUFDaUcsT0FBTyxDQUFDN0osT0FBTyxDQUFDLENBQUMySixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDaEZOLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDSyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDbkYsSUFBSSxDQUFDbEwsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDM0IsR0FBRyxDQUFDME0sV0FBVyxDQUFDLElBQUksQ0FBQ0wsaUJBQWlCLENBQUM7UUFDaEUsSUFBSSxDQUFDTSxjQUFjLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO01BQ3pCLENBQUMsTUFBTSxJQUFJLENBQUN0SixTQUFTLENBQUNRLElBQUksSUFBSSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQzdDeUYsTUFBTSxDQUFDLElBQUksQ0FBQzFGLEtBQUssQ0FBQ2lHLE9BQU8sQ0FBQzdKLE9BQU8sQ0FBQyxDQUFDNEosUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ2hGTCxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQ00sUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRCxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ25GLElBQUksSUFBSSxDQUFDZ0QsV0FBVyxFQUFFO1VBQ3BCLElBQUk7WUFDRixJQUFJLENBQUNqTyxLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHLENBQUN5TSxRQUFRLENBQUMsSUFBSSxDQUFDSixpQkFBaUIsQ0FBQztVQUMvRCxDQUFDLENBQUMsT0FBTTVQLENBQUMsRUFBRTtZQUNUdVAsT0FBTyxDQUFDQyxJQUFJLENBQUN4UCxDQUFDLENBQUM7VUFDakI7UUFDRjtRQUNBLElBQUksQ0FBQ29RLFdBQVcsQ0FBQyxDQUFDO01BQ3BCO01BQ0EsSUFBSSxJQUFJLENBQUNsTyxLQUFLLENBQUNnRCxhQUFhLENBQUNDLElBQUksQ0FBQ2tMLE9BQU8sRUFBRTtRQUN6QyxJQUFJQyxRQUFRLEdBQUd2RyxtQkFBSyxDQUFDd0csUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJRCxRQUFRLEtBQUssY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDbEosS0FBSyxDQUFDQyxJQUFJLEVBQUU7VUFDbkQwQyxtQkFBSyxDQUFDeUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxNQUNJLElBQUlGLFFBQVEsS0FBSyxjQUFjLElBQUksSUFBSSxDQUFDbEosS0FBSyxDQUFDQyxJQUFJLEVBQUU7VUFDdkQwQyxtQkFBSyxDQUFDeUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7UUFDM0M7TUFDRjtJQUNGO0VBQUM7SUFBQS9OLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3TixjQUFjQSxDQUFBLEVBQUc7TUFDZixJQUFJTyxTQUFTLEdBQUcsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ2MsY0FBYyxDQUFDLENBQUM7TUFDdkQsS0FBSyxJQUFJelAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHd1AsU0FBUyxDQUFDbkssTUFBTSxFQUFFckYsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSTBQLEtBQUssR0FBR0YsU0FBUyxDQUFDeFAsQ0FBQyxDQUFDO1FBQ3hCLElBQUlvRixXQUFXLEdBQUdzSyxLQUFLLENBQUN4SSxTQUFTLENBQUMsQ0FBQyxDQUFDeUksV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSXZLLFdBQVcsRUFBRTtVQUNmLEtBQUssSUFBSXdLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3hLLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFdUssQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSTdNLE9BQU8sR0FBR3FDLFdBQVcsQ0FBQ3dLLENBQUMsQ0FBQztZQUM1QjdNLE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQ3VRLElBQUksQ0FBQyxDQUFDO1VBQy9CO1FBQ0Y7TUFDRjtJQUNGO0VBQUM7SUFBQXJPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwTixXQUFXQSxDQUFBLEVBQUc7TUFDWixJQUFJSyxTQUFTLEdBQUcsSUFBSSxDQUFDYixpQkFBaUIsQ0FBQ2MsY0FBYyxDQUFDLENBQUM7TUFDdkQsS0FBSyxJQUFJelAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHd1AsU0FBUyxDQUFDbkssTUFBTSxFQUFFckYsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSTBQLEtBQUssR0FBR0YsU0FBUyxDQUFDeFAsQ0FBQyxDQUFDO1FBQ3hCLElBQUlvRixXQUFXLEdBQUdzSyxLQUFLLENBQUN4SSxTQUFTLENBQUMsQ0FBQyxDQUFDeUksV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSXZLLFdBQVcsRUFBRTtVQUNmLEtBQUssSUFBSXdLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3hLLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFdUssQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSTdNLE9BQU8sR0FBR3FDLFdBQVcsQ0FBQ3dLLENBQUMsQ0FBQztZQUM1QjdNLE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQ3dRLElBQUksQ0FBQyxDQUFDO1VBQy9CO1FBQ0Y7TUFDRjtJQUNGO0VBQUM7QUFBQSxFQS9PdUN2TSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJlZEZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwgPSB0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJtZWFzdXJlRWxlbWVudF9cIiArIHRoaXMucHJvcHMuaWR4fT5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm1lYXN1cmVkVmFsdWVzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgb2JqID0gc2NvcGUucHJvcHMubWVhc3VyZWRWYWx1ZXNbZWxlbWVudF07XG4gICAgICAgICAgbGV0IGhyVmFsdWUgPSAwLjA7XG4gICAgICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgY2FzZSBcInJhZGl1c1wiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydE1ldGVyc1RvS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYXJlYVwiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoPHAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c3Ryb25nPntvYmouZGVzY3JpcHRpb259PC9zdHJvbmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtdmFsdWUtXCIgKyBzY29wZS5wcm9wcy5pZHh9PntoclZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+KVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VGZWF0dXJlTGFiZWwoKSB7XG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLmZlYXR1cmU7XG4gICAgZmVhdHVyZS5sYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJtZWFzdXJlRWxlbWVudF8nICsgdGhpcy5wcm9wcy5pZHggKyAnXCJdJykudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGZlYXR1cmUuaWQpO1xuICB9XG5cbiAgY29udmVydE1ldGVyc1RvS20oZGlzdGFuY2UpIHtcbiAgICBsZXQga21WYWx1ZSA9IGRpc3RhbmNlIC8gMTAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga21cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRpc3RhbmNlICsgXCIgbVwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKGFyZWEpIHtcbiAgICBsZXQga21WYWx1ZSA9IGFyZWEgLyAxMDAwMDAwO1xuICAgIGlmIChrbVZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIGttVmFsdWUgKyBcIiBrbcKyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcmVhICsgXCIgbcKyXCI7XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7VG9vbHRpcFBvcFVwfSBmcm9tIFwiLi4vYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXBcIjtcbmltcG9ydCB7TWVhc3VyZWRGZWF0dXJlfSBmcm9tIFwiLi9jNGctbWVhc3VyZXRvb2xzLWZlYXR1cmUuanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJldG9vbHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5oZWFkbGluZXMgPSB7XG4gICAgICBcInNlbGVjdFwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkcsXG4gICAgICBcInBvbHlnb25cIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQsXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVJZEN0ciA9IHRoaXMucHJvcHMuZmVhdHVyZUlkO1xuICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zID0gdGhpcy5jcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCk7XG4gICAgdGhpcy5tb2RpZnlGZWF0dXJlID0gdGhpcy5tb2RpZnlGZWF0dXJlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtY29udGVudFwifT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmxhbmcuTUVBU1VSRVRPT0xTX0lORk99PC9wPlxuICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgPHN1Yj57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUx9PC9zdWI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtZWFzdXJlIHZpZXdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250ZW50SGVhZGxpbmVcIn0+e3RoaXMuaGVhZGxpbmVzW3RoaXMucHJvcHMubW9kZV19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5mZWF0dXJlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXQgPSBzY29wZS5wcm9wcy5mZWF0dXJlc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxNZWFzdXJlZEZlYXR1cmUga2V5PXtpbmRleH0gaWR4PXtpbmRleH0gbGFiZWw9e2ZlYXQubGFiZWx9IGZlYXR1cmU9e2ZlYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVkVmFsdWVzPXtmZWF0Lm1lYXN1cmVkVmFsdWVzfSBtb2RpZnlGZWF0dXJlPXtzY29wZS5tb2RpZnlGZWF0dXJlfS8+KTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm90IGFjdGl2ZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICBtb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gdGhpcy5wcm9wcy5mZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyRmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZS5zZXQoJ2ZlYXR1cmVMYWJlbCcsIGZlYXR1cmUubGFiZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgaWQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIikge1xuICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuaW5pdEZ1bmN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGlmICghcHJldlByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5hY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAocHJldlByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuZGVhY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiIHx8ICF0aGlzLnByb3BzLm1lYXN1cmVUb29scy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgfVxuXG4gIGNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMoKSB7XG4gICAgbGV0IHNvdXJjZSwgZmVhdHVyZXMsIG9sVHlwZSwgaW50ZXJhY3Rpb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBpbml0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmZWF0dXJlSWRDb3VudCxcbiAgICAgICAgYWN0aXZlU2tldGNoLFxuICAgICAgICBhY3RpdmVUb29sdGlwLFxuICAgICAgICBhZGRNZWFzdXJlRmVhdHVyZSxcbiAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIGdldFZhbHVlT2ZHZW9tZXRyeSxcbiAgICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlLFxuICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG5cbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdmcmVlaGFuZCcpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlQ2lyY2xlTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlUG9seWdvbkxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVMaW5lTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVzID0gbmV3IENvbGxlY3Rpb24oKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNjb3BlLnByb3BzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIlBvbHlnb25cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiQ2lyY2xlXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmcmVlaGFuZFwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiTGluZVN0cmluZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbnRlcmFjdGlvbiA9IG5ldyBEcmF3KHtcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgdHlwZTogb2xUeXBlLFxuICAgICAgICBmcmVlaGFuZDogc2NvcGUucHJvcHMubW9kZSA9PT0gJ2ZyZWVoYW5kJyxcbiAgICAgICAgLy8gQFRPRE86IHVzZSBjdXN0b20gc3R5bGU/IChCRS1vcHRpb24pXG4gICAgICAgIC8vIHN0eWxlOiB1c2UgZGVmYXVsdCBzdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIGFkZE1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGlucHV0RWxlbWVudCxcbiAgICAgICAgICBzdHJMYWJlbCxcbiAgICAgICAgICBzdHJUeXBlLFxuICAgICAgICAgIG1lYXN1cmVBcmVhLFxuICAgICAgICAgIG1lYXN1cmVSYWRpdXMsXG4gICAgICAgICAgbWVhc3VyZUxpbmU7XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZmVhdHVyZS10eXBlXG4gICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnTGluZVN0cmluZycpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuTEVOR1RIO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkxJTkU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdQb2x5Z29uJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5QRVJJTUVURVI7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuUE9MWUdPTjtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0NpcmNsZScpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUkFESVVTO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkNJUkNMRTtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2ZyZWVoYW5kIGlzIExpbmVTdHJpbmcgdG9vXG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5GUkVFSEFORDtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbGlzdEVsZW1lbnRWYWx1ZU5hbWUnLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICBmZWF0dXJlSWRDb3VudCA9IHNjb3BlLmZlYXR1cmVJZEN0cjtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ2ZlYXR1cmVJZCcsIGZlYXR1cmVJZENvdW50KTtcbiAgICAgICAgbGV0IG1lYXN1cmVkRmVhdHVyZSA9IHt9O1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUuaWQgPSBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmxhYmVsID0gc3RyVHlwZSArIFwiIFwiICsgZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBtZWFzdXJlZEZlYXR1cmUubGFiZWwpO1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKG1lYXN1cmVMaW5lKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMw6RuZ2U6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlUmFkaXVzKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhZGl1czogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lYXN1cmVBcmVhKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIHNjb3BlLnByb3BzLmFkZEZlYXR1cmUobWVhc3VyZWRGZWF0dXJlKTtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGlkLWNvdW50ZXJcbiAgICAgICAgc2NvcGUucHJvcHMuaW5jckZlYXRJZCgpO1xuICAgICAgICAvLyBzY29wZS51cGRhdGUoKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcImFkZE1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBmZWF0dXJlVG9vbHRpcCxcbiAgICAgICAgICBuZXdDb250ZW50LFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIGFyZWEsXG4gICAgICAgICAgcmFkaXVzO1xuXG4gICAgICAgIGZlYXR1cmVUb29sdGlwID0gZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKTtcbiAgICAgICAgbmFtZSA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlTGFiZWwnKTtcbiAgICAgICAgbGVuZ3RoID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdtZWFzdXJlZExlbmd0aCcsIGxlbmd0aC5yYXdWYWx1ZSk7XG4gICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIiArIGxlbmd0aC5odG1sVmFsdWUpO1xuICAgICAgICBsZXQgZmVhdHVyZUlkID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVJZCcpO1xuICAgICAgICBsZXQgbmV3RmVhdHVyZSA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLmxhYmVsID0gbmFtZTtcbiAgICAgICAgbmV3RmVhdHVyZS5pZCA9IGZlYXR1cmVJZDtcbiAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcyA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIGlmIChsZW5ndGggJiYgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpICE9PSAnY2lyY2xlJ1xuICAgICAgICAgICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcy5saW5lID0ge307XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddLmRlc2NyaXB0aW9uID0gXCJMw6RuZ2U6IFwiO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS52YWx1ZSA9IGxlbmd0aC5yYXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgcmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddLnZhbHVlID0gcmFkaXVzLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS5kZXNjcmlwdGlvbiArIHJhZGl1cy5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdwb2x5Z29uJ1xuICAgICAgICAgIHx8IGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBhcmVhID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsw6RjaGVuaW5oYWx0OiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10udmFsdWUgPSBhcmVhLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10uZGVzY3JpcHRpb24gKyBhcmVhLmh0bWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5zZXQoJ3Rvb2x0aXAnLCBmZWF0dXJlVG9vbHRpcCk7XG4gICAgICAgIHNjb3BlLnByb3BzLm1vZGlmeUZlYXR1cmUobmV3RmVhdHVyZSwgbmV3RmVhdHVyZS5pZCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgc2NvcGUudXBkYXRlTWVhc3VyZUZlYXR1cmUgPSB1cGRhdGVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBzY29wZS5wcm9wcy5yZW1vdmVGZWF0dXJlKGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKSk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJyZW1vdmVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgLy9TdGFydCBXb3JrYXJvdW5kXG4gICAgICBnZXRWYWx1ZU9mR2VvbWV0cnkgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgbGVuZyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB2YXIgdmFsID0gbGVuZy5odG1sVmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZW51bWIgPSB2YWwubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgdmFsdWVudW1iID0gdmFsdWVudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiB2YWx1ZW51bWI7XG4gICAgICB9O1xuXG4gICAgICBnZXRMZW5ndGhPZk1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSAnMC4wMCBtJztcbiAgICAgICAgdmFyIGxlbmd0aG51bWIgPSBsZW5ndGgubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9IGxlbmd0aG51bWIuam9pbihcIlwiKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9ICs4O1xuICAgICAgICByZXR1cm4gbGVuZ3RobnVtYjtcbiAgICAgIH07Ly8gRW5kIFdvcmthcm91bmRcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdzdGFydCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IGV2ZW50LmZlYXR1cmU7XG4gICAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXBcbiAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbmV3IFRvb2x0aXBQb3BVcCh7XG4gICAgICAgICAgICBtYXA6IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IGV2ZW50LmNvb3JkaW5hdGUsXG4gICAgICAgICAgICBvZmZzZXQ6IFsyLCAtMl0sXG4gICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvL1dvcmthcm91bmQsIGZvciBzbWFsbCBvciB6ZXJvIHZhbHVlcyBvZiBGcmVlaGFuZFxuICAgICAgICAgICAgICB2YXIgdmFsID0gZ2V0VmFsdWVPZkdlb21ldHJ5KGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICB2YXIgbGVuZyA9IGdldExlbmd0aE9mTWVhc3VyZSgpO1xuICAgICAgICAgICAgICBpZiAodmFsICE9PSBsZW5nICYmIHZhbCA+IGxlbmcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlLmhhc0ZlYXR1cmUgKGV2ZW50LmZlYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfTUVBU1VSRVRPT0xTO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLW1lYXN1cmV0b29scy1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibWVhc3VyZXRvb2xzXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMubWVhc3VyZXRvb2xzID0gY29udHJvbDtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5hZGRNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZSA9IHRoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkID0gdGhpcy5pbmNyZW1lbnRGZWF0dXJlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwibGluZVwiLCBcInBvbHlnb25cIiwgXCJjaXJjbGVcIiwgXCJmcmVlaGFuZFwiXTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgbWVhc3VyZWRGZWF0dXJlczogW10sXG4gICAgICBmZWF0dXJlSWRDdHI6IDBcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyVG9vbHRpcHMgPSB7XG4gICAgICBcInNlbGVjdFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU30gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtXCIgKyBlbGVtZW50ICsgXCIgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0gdGl0bGU9e2FyclRvb2x0aXBzW2VsZW1lbnRdfS8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJzZWxlY3RcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwic2VsZWN0XCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJsaW5lXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImxpbmVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInBvbHlnb25cIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwicG9seWdvblwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiY2lyY2xlXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImNpcmNsZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiZnJlZWhhbmRcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiZnJlZWhhbmRcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGluY3JlbWVudEZlYXR1cmVJZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlSWRDdHI6IHRoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyICsgMX0pO1xuICB9XG5cbiAgYWRkTWVhc3VyZWRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgbW9kaWZ5TWVhc3VyZWRGZWF0dXJlKG5ld0ZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXNbaV0gPSBuZXdGZWF0dXJlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgcmVtb3ZlTWVhc3VyZWRGZWF0dXJlKGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHNldEN1cnJlbnRNb2RlKG5ld01vZGUpIHtcbiAgICBpZiAodGhpcy5tb2Rlcy5pbmNsdWRlcyhuZXdNb2RlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IG5ld01vZGV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHNwZWNpZmllZCBtb2RlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIHdoZW4gdGhlIHBhbmVsIHdpbGwgYmUgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICogW2luaXQgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzc1xuICAgKi9cbiAgaW5pdCgpIHtcbiAgICAvLyBBZGQgbWVhc3VyZSBsYXllcnNcbiAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuXG4gICAgdGhpcy5tZWFzdXJlTGF5ZXJHcm91cCA9IG5ldyBHcm91cCh7XG4gICAgICBsYXllcnM6IG5ldyBDb2xsZWN0aW9uKFtcbiAgICAgICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlTGluZUxheWVyLFxuICAgICAgXSksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcblxuICAgIC8vIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZW5kIG9mIFwiaW5pdCgpXCJcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIC8vIG1lYXN1cmV0b29scyB3ZXJlIGNsb3NlZFxuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwcygpO1xuICAgICAgdGhpcy5yZW1vdmVkT25jZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGlmICh0aGlzLnJlbW92ZWRPbmNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFRvb2x0aXBzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJNZWFzdXJldG9vbHNcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJNZWFzdXJldG9vbHNcIiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIk1lYXN1cmV0b29sc1wiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJNZWFzdXJlZEZlYXR1cmUiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiY2hhbmdlRmVhdHVyZUxhYmVsIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJzY29wZSIsImNyZWF0ZUVsZW1lbnQiLCJodG1sRm9yIiwiaWR4IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJsYWJlbCIsIm9uSW5wdXQiLCJrZXlzIiwibWVhc3VyZWRWYWx1ZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJvYmoiLCJoclZhbHVlIiwiY29udmVydE1ldGVyc1RvS20iLCJjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbSIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiZmVhdHVyZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZGlmeUZlYXR1cmUiLCJpZCIsImRpc3RhbmNlIiwia21WYWx1ZSIsImFyZWEiLCJDb21wb25lbnQiLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJfaW50ZXJhY3Rpb24iLCJfYzRnTWFwc1V0aWxzIiwiX2M0Z01hcHNNaXNjVG9vbHRpcHBvcHVwIiwiX2M0Z01lYXN1cmV0b29sc0ZlYXR1cmUiLCJNZWFzdXJldG9vbHNWaWV3IiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJoZWFkbGluZXMiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiZmVhdHVyZUlkQ3RyIiwiZmVhdHVyZUlkIiwidXBkYXRlRnVuY3Rpb25zIiwiY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucyIsImFjdGl2ZSIsIm1vZGUiLCJsYW5nIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiZmVhdHVyZXMiLCJmZWF0IiwiYXJyRmVhdHVyZXMiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImNvbXBvbmVudERpZE1vdW50IiwiaW5pdEZ1bmN0aW9uIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJhY3RpdmF0ZUZ1bmN0aW9uIiwiZGVhY3RpdmF0ZUZ1bmN0aW9uIiwibWFwSG92ZXIiLCJkZWFjdGl2YXRlIiwibWVhc3VyZVRvb2xzIiwic3RhdGUiLCJvcGVuIiwiYWN0aXZhdGUiLCJzb3VyY2UiLCJvbFR5cGUiLCJpbnRlcmFjdGlvbiIsImZlYXR1cmVJZENvdW50IiwiYWN0aXZlU2tldGNoIiwiYWN0aXZlVG9vbHRpcCIsImFkZE1lYXN1cmVGZWF0dXJlIiwiZ2V0VmFsdWVPZkdlb21ldHJ5IiwiZ2V0TGVuZ3RoT2ZNZWFzdXJlIiwicmVtb3ZlTWVhc3VyZUZlYXR1cmUiLCJ0b0xvd2VyQ2FzZSIsIm1lYXN1cmVGcmVlaGFuZExheWVyIiwiZ2V0U291cmNlIiwibWVhc3VyZUNpcmNsZUxheWVyIiwibWVhc3VyZVBvbHlnb25MYXllciIsIm1lYXN1cmVMaW5lTGF5ZXIiLCJDb2xsZWN0aW9uIiwiRHJhdyIsImZyZWVoYW5kIiwiaW5wdXRFbGVtZW50Iiwic3RyTGFiZWwiLCJzdHJUeXBlIiwibWVhc3VyZUFyZWEiLCJtZWFzdXJlUmFkaXVzIiwibWVhc3VyZUxpbmUiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJMRU5HVEgiLCJMSU5FIiwiUEVSSU1FVEVSIiwiUE9MWUdPTiIsIlJBRElVUyIsIkNJUkNMRSIsIkZSRUVIQU5EIiwibWVhc3VyZWRGZWF0dXJlIiwiYWRkRmVhdHVyZSIsImluY3JGZWF0SWQiLCJmZWF0dXJlVG9vbHRpcCIsIm5ld0NvbnRlbnQiLCJyYWRpdXMiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsIm9mZnNldCIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwiaGFzRmVhdHVyZSIsInNldFBvc2l0aW9uIiwiY2xlYXIiLCJhZGRJbnRlcmFjdGlvbiIsImZpbmlzaERyYXdpbmciLCJpZ25vcmUiLCJyZW1vdmVJbnRlcmFjdGlvbiIsIl9jb250cm9sIiwiX2M0Z01lYXN1cmV0b29sc1ZpZXciLCJfbGF5ZXIiLCJfc291cmNlIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJNZWFzdXJldG9vbHMiLCJidXR0b24iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImV4dGVybmFsIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsIm1lYXN1cmV0b29scyIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiaGlkZUNvbnRhaW5lciIsImhlYWRlciIsIk1FQVNVUkVUT09MUyIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwib25Nb3VzZVVwIiwic2V0U3RhdGUiLCJwdXNoIiwic3BsaWNlIiwic2V0Q3VycmVudE1vZGUiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImFkZFRvb2x0aXBzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==