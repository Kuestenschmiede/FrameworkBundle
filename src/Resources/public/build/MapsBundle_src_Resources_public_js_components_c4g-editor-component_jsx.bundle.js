"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-editor-component_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/c4g-editor-i18n-de.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-editor-i18n-de.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.projectEditorLang = void 0;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var projectEditorLang = exports.projectEditorLang = {
  LANG: 'de',
  METADATA_EDIT: "Metadaten bearbeiten",
  DUPLICATE_ELEMENT: "Element duplizieren",
  DISPLACE_ELEMENT: "Element in anderes Projekt verschieben",
  DUPLICATE_AND_DELETE: "Element duplizieren & in anderes Projekt verschieben",
  CHOOSE_PROJECT: "Wähle ein Projekt ...",
  EDITOR_FEATURE_DELETE_HEADLINE: "Element löschen",
  EDITOR_FEATURE_DELETE_QUESTION: "Wollen Sie das Element wirklich löschen?",
  ROTATE_ELEMENT: "Element rotieren",
  DESELECT_ELEMENT: "Element-Auswahl aufheben",
  REVERT_ELEMENT: "Letzte Version wiederherstellen",
  CONFIRM_DELETE_ALL: "Wollen Sie die ausgewählten Elemente wirklich löschen?",
  BUTTON_DESELECT_ALL: "Auswahl für alle aufheben",
  BUTTON_DELETE_ALL: "Ausgewählte Elemente löschen",
  BUTTON_DISPLACE_ALL: "Ausgewählte Elemente in anderes Projekt verschieben",
  BUTTON_CONFIRM: "Bestätigen",
  BUTTON_CANCEL: "Abbrechen",
  BUTTON_COPY_DISPLACE_ALL: "Ausgewählte Elemente kopieren und in anderes Projekt verschieben",
  BUTTON_TRANSLATE_ALL: "Ausgewählte Elemente auf der Karte verschieben",
  BUTTON_APPLY_TRANSLATE: "Änderungen übernehmen",
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
  EDITOR_FEATURE_APPLY: 'Editieren beenden',
  EDITOR_FEATURE_DELETE: 'Aktives Element löschen',
  EDITOR_FEATURE_MODIFY: 'Elemente editieren',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Punktwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand zeichnen',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',
  CTRL_EDITOR: 'Editor ein-/ausblenden',
  EDITOR_API_ERROR_TITLE: 'Es ist ein Fehler aufgetreten',
  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-editor-i18n.js":
/*!****************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-editor-i18n.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEditorLanguage = getEditorLanguage;
exports.langConstants = void 0;
var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-de.js");
var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-en.js");
var _c4gEditorI18nDe = __webpack_require__(/*! ./c4g-editor-i18n-de */ "../MapsBundle/src/Resources/public/js/c4g-editor-i18n-de.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var mapsLang = {};
if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  }
}
function getEditorLanguage(mapData) {
  if (mapData.lang === "de") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else if (mapData.lang === "en") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else {
    // fallback
    return _c4gEditorI18nDe.projectEditorLang;
  }
}
var langConstants = exports.langConstants = jQuery.extend(mapsLang, _c4gEditorI18nDe.projectEditorLang);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-editor-component.jsx":
/*!*********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-editor-component.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../MapsBundle/node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gEditorI18n = __webpack_require__(/*! ./../c4g-editor-i18n */ "../MapsBundle/src/Resources/public/js/c4g-editor-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _format = __webpack_require__(/*! ol/format */ "../MapsBundle/node_modules/ol/format.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _coordinate = __webpack_require__(/*! ol/coordinate */ "../MapsBundle/node_modules/ol/coordinate.js");
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
//import {EditorView} from "./c4g-editor-view.jsx";
var EditorView = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-editor-view_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-view.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-editor-view.jsx"));
});
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var EditorComponent = exports["default"] = /*#__PURE__*/function (_Component) {
  function EditorComponent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, EditorComponent);
    _this = _callSuper(this, EditorComponent, [props]);
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.countEditorId = _this.countEditorId.bind(_this);
    _this.addFeature = _this.addFeature.bind(_this);
    _this.removeFeature = _this.removeFeature.bind(_this);
    _this.modifyFeature = _this.modifyFeature.bind(_this);
    _this.changeJSON = _this.changeJSON.bind(_this);
    _this.props.mapController.editor = _this;
    var scope = _this;
    var element = document.createElement('div');
    var button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = "Editor";
      button.appendChild(span);
    } else {
      button.title = "Editor";
    }
    element.className = "c4g-editor-control ol-unselectable ol-control c4g-close";
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      var hidden = scope.props.mapController.editorContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.editorContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    _this.config = {};
    _this.arrLocstyles = [];
    var mapController = props.mapController;
    if (props.config) {
      _this.handleConfig(props.config);
    } else {
      _this.getConfiguration(mapController.data.feEditorProfile || mapController.data.beEditorProfile, !!mapController.data.feEditorProfile);
    }
    _this.langConstants = (0, _c4gEditorI18n.getEditorLanguage)(mapController.data);
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    control.isOpen = function () {
      return false;
    };
    if (!mapController.mapsControls.controls.editor) {
      mapController.mapsControls.controls.editor = control;
    }
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "editor";
    });
    mapController.arrComponents[index].control = control;
    _this.modes = ["select", "Point", "LineString", "Polygon", "Circle"];
    var features;
    if (_this.props.inputField && $(_this.props.inputField).val() && $(_this.props.inputField).val().length > 50) {
      features = $(_this.props.inputField).val();
      setTimeout(function () {
        _this.reRender();
      }, 200);
    } else {
      features = '{"type": "FeatureCollection", "features": []}';
    }
    _this.state = {
      open: props.open || false,
      currentMode: "select",
      styleData: {},
      control: control,
      range: 0,
      features: features,
      editorId: 0,
      addComponents: []
    };
    _this.styleFunction = function (feature, resolution) {
      var size = false;
      var returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        var _features = feature.get('features');
        size = _features.length;
        feature = _features[0];
      }
      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      } else if (feature && feature.get && feature.get('locstyle')) {
        var locstyle = feature.get('locstyle');
        if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle]) {
          if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].getStyleFunction();
          }
          var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }
      if (returnStyle[0] && feature && feature.get('zIndex')) {
        returnStyle[0].setZIndex(feature.get('zIndex'));
      }
      return returnStyle;
    };
    _this.features = new _ol.Collection();
    _this.editorLayer = new _layer.Vector({
      source: new _source.Vector({
        format: new _format.GeoJSON()
      }),
      style: _this.styleFunction
    });
    if (_this.props.open) {
      _this.props.mapController.map.addLayer(_this.editorLayer);
    }
    return _this;
  }
  (0, _inherits2["default"])(EditorComponent, _Component);
  return (0, _createClass2["default"])(EditorComponent, [{
    key: "open",
    value: function open() {
      var _this2 = this;
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
      var layers = this.props.mapController.map.getLayers();
      var addLayer = true;
      layers.forEach(function (element, index, array) {
        if (element === _this2.editorLayer) {
          addLayer = false;
        }
      });
      if (addLayer) {
        this.props.mapController.map.addLayer(this.editorLayer);
      }
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
      //    this.props.mapController.map.removeLayer(this.editorLayer);
      this.setState({
        open: false
      });
    }
  }, {
    key: "countEditorId",
    value: function countEditorId() {
      var newCount = this.state.editorId + 1;
      this.setState({
        editorId: newCount
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(id) {
      var _this3 = this;
      var frontend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var url;
      if (frontend) {
        url = "con4gis/editorService/" + id;
      } else {
        url = "con4gis/editorServiceBackend/" + id;
      }
      fetch(url).then(function (response) {
        response.json().then(function (json) {
          _this3.handleConfig(json);
        });
      });
    }
  }, {
    key: "handleConfig",
    value: function handleConfig(json) {
      var _this4 = this;
      for (var i in json.drawStyles) {
        if (json.drawStyles.hasOwnProperty(i)) {
          this.config[i] = [];
          var drawStyle = json.drawStyles[i];
          var _loop = function _loop() {
            if (drawStyle.elements.hasOwnProperty(j)) {
              var element = drawStyle.elements[j];
              _this4.config[i].push(element);
              var checkLocstyle = _this4.arrLocstyles.findIndex(function (locstyle) {
                return locstyle === element.styleId;
              });
              if (checkLocstyle === -1 && element.styleId) {
                _this4.arrLocstyles.push(element.styleId);
              }
            }
          };
          for (var j in drawStyle.elements) {
            _loop();
          }
        }
      }
      this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
        "done": function done(styleData) {
          _this4.setState({
            styleData: styleData
          });
        }
      });
    }
  }, {
    key: "reRender",
    value: function reRender() {
      try {
        if (this.state.features.length > 50) {
          // replace html special chars in geojson string
          this.state.features = this.state.features.replaceAll('&#34;', '"');
          this.linkInput();
          var geojson = JSON.parse(this.state.features);
          var features = new _format.GeoJSON({
            featureProjection: "EPSG:3857"
          }).readFeatures(geojson);
          var source = this.editorLayer.getSource();
          source.forEachFeature(function (feature) {
            source.removeFeature(feature);
          });
          for (var i in features) {
            if (features.hasOwnProperty(i)) {
              var jsonFeature = features[i];
              if (jsonFeature.get('radius')) {
                jsonFeature.setGeometry(new _geom.Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
              }
              source.addFeature(jsonFeature);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
      if (this.state.range) {
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var startContainer = range.startContainer.childNodes[0] || range.startContainer;
        range.setStart(startContainer, this.state.range);
        range.setEnd(startContainer, this.state.range);
        selection.removeRange(range);
        selection.addRange(range);
      }
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      var _this5 = this;
      var range = window.getSelection().getRangeAt(0).startOffset;
      this.setState({
        features: event.target.innerText,
        range: range
      }, function () {
        _this5.reRender();
      });
    }
  }, {
    key: "addFeature",
    value: function addFeature(feature) {
      var _this6 = this;
      var arrFeatures = JSON.parse(this.state.features);
      arrFeatures.features.push(feature);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this6.linkInput();
      });
    }
  }, {
    key: "removeFeature",
    value: function removeFeature(geojson) {
      var _this7 = this;
      var editorId = geojson.properties.editorId;
      var arrFeatures = JSON.parse(this.state.features);
      var featureId = arrFeatures.features.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      arrFeatures.features.splice(featureId, 1);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this7.linkInput();
      });
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_remove, geojson);
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(geojson) {
      var _this8 = this;
      var editorId = geojson.properties.editorId;
      var objGeojson = JSON.parse(this.state.features);
      var arrFeatures = objGeojson.features;
      var featureId = arrFeatures.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      objGeojson.features[featureId] = geojson;
      var features = JSON.stringify(objGeojson, null, 2);
      this.setState({
        features: features
      }, function () {
        _this8.linkInput();
      });
    }
  }, {
    key: "linkInput",
    value: function linkInput() {
      if (this.props.inputField && this.state.features.length > 50) {
        $(this.props.inputField).val(this.state.features); //link to inputField
      }
    }
  }, {
    key: "setAddComps",
    value: function setAddComps(conststr, config) {
      this.setState({
        config: config,
        conststr: conststr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var addComps;
      if (this.state.conststr) {
        addComps = /*#__PURE__*/_react["default"].createElement(this.state.conststr, {
          config: this.state.config,
          get: _proj.get,
          transform: _proj.transform,
          toStringHDMS: _coordinate.toStringHDMS,
          source: this.editorLayer.getSource(),
          format: new _format.GeoJSON()
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, (0, _defineProperty2["default"])({
        wrapperClass: "c4g-editor-header",
        headerClass: "c4g-editor-headline",
        hideContainer: ".c4g-editor-container-right",
        header: this.langConstants.EDITOR,
        closeBtnTitle: this.langConstants.CTRL_EDITOR,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close
      }, "closeBtnTitle", this.langConstants.CLOSE))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-mode-switcher"
      }, this.modes.map(function (element, index) {
        if (element === "select" || scope.config[element] && scope.config[element].length > 0) {
          var title = scope.langConstants["EDITOR_VIEW_TRIGGER_DRAW_" + element.toUpperCase()];
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            className: "c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
            title: title,
            onMouseUp: function onMouseUp() {
              return scope.setState({
                currentMode: element
              });
            }
          });
        } else {
          return null;
        }
      })), /*#__PURE__*/_react["default"].createElement(EditorView, {
        className: "c4g-editor-view",
        styleFunction: this.styleFunction,
        mode: this.state.currentMode,
        styleData: this.state.styleData,
        elements: this.config[this.state.currentMode] ? this.config[this.state.currentMode] : [],
        active: this.state.open,
        features: this.features,
        editorVars: this.props.config.editorVars,
        removeFeature: this.removeFeature,
        modifyFeature: this.modifyFeature,
        addFeature: this.addFeature,
        editorLayer: this.editorLayer,
        editorId: this.state.editorId,
        countEditorId: this.countEditorId,
        updateFeatures: this.updateFeatures,
        mapController: this.props.mapController,
        editor: this,
        lang: this.langConstants
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-content",
        style: {
          display: "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("pre", {
        contentEditable: true,
        style: {
          overflowY: "scroll",
          overflowX: "none"
        },
        suppressContentEditableWarning: true,
        onInput: this.changeJSON
      }, this.state.features)), addComps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.open && !this.props.open || prevState.open && !this.state.open) {
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
        //      this.props.mapController.map.removeLayer(this.editorLayer);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.c4gMapsHooks.hook_editor_components && window.c4gMapsHooks.hook_editor_components.length > 0) {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_components, {
          comp: this,
          container: "#c4g-editor-portal"
        });
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1lZGl0b3ItY29tcG9uZW50X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBSUEsaUJBQWlCLEdBQUFDLHlCQUFBLEdBQUc7RUFDN0JDLElBQUksRUFBRSxJQUFJO0VBRVZDLGFBQWEsRUFBRSxzQkFBc0I7RUFDckNDLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN4Q0MsZ0JBQWdCLEVBQUUsd0NBQXdDO0VBQzFEQyxvQkFBb0IsRUFBRSxzREFBc0Q7RUFDNUVDLGNBQWMsRUFBRSx1QkFBdUI7RUFDdkNDLDhCQUE4QixFQUFFLGlCQUFpQjtFQUNqREMsOEJBQThCLEVBQUUsMENBQTBDO0VBQzFFQyxjQUFjLEVBQUUsa0JBQWtCO0VBQ2xDQyxnQkFBZ0IsRUFBRSwwQkFBMEI7RUFDNUNDLGNBQWMsRUFBRSxpQ0FBaUM7RUFDakRDLGtCQUFrQixFQUFFLHdEQUF3RDtFQUM1RUMsbUJBQW1CLEVBQUUsMkJBQTJCO0VBQ2hEQyxpQkFBaUIsRUFBRSw4QkFBOEI7RUFDakRDLG1CQUFtQixFQUFFLHFEQUFxRDtFQUMxRUMsY0FBYyxFQUFFLFlBQVk7RUFDNUJDLGFBQWEsRUFBRSxXQUFXO0VBQzFCQyx3QkFBd0IsRUFBRSxrRUFBa0U7RUFDNUZDLG9CQUFvQixFQUFFLGdEQUFnRDtFQUN0RUMsc0JBQXNCLEVBQUUsdUJBQXVCO0VBRS9DQyxNQUFNLEVBQUUsUUFBUTtFQUNoQkMsNkJBQTZCLEVBQUUsOEJBQThCO0VBQzdEQywyQkFBMkIsRUFBRSxtQkFBbUI7RUFDaERDLG9CQUFvQixFQUFFLG1CQUFtQjtFQUN6Q0MscUJBQXFCLEVBQUUseUJBQXlCO0VBQ2hEQyxxQkFBcUIsRUFBRSxvQkFBb0I7RUFDM0NDLGtCQUFrQixFQUFFLGtEQUFrRDtFQUN0RUMsNkJBQTZCLEVBQUUsd0VBQXdFO0VBQ3ZHQywwQkFBMEIsRUFBRSxlQUFlO0VBQzNDQyw4QkFBOEIsRUFBRSxnQkFBZ0I7RUFDaERDLGlDQUFpQyxFQUFFLG1CQUFtQjtFQUN0REMsbUNBQW1DLEVBQUUsbUJBQW1CO0VBQ3hEQyxnQ0FBZ0MsRUFBRSxrQkFBa0I7RUFDcERDLCtCQUErQixFQUFFLGdCQUFnQjtFQUNqREMsV0FBVyxFQUFFLHdCQUF3QjtFQUVyQ0Msc0JBQXNCLEVBQUUsK0JBQStCO0VBRXZEQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsSUFBQUMsc0JBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxzQkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQUlHLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFFakIsSUFBSSxPQUFPQyxPQUFPLEtBQUssV0FBVyxFQUFFO0VBQ2xDLElBQUlBLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtJQUN6QkYsUUFBUSxHQUFHRywwQ0FBbUI7RUFDaEMsQ0FBQyxNQUFNLElBQUlGLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtJQUNoQ0YsUUFBUSxHQUFHSSwyQ0FBb0I7RUFDakMsQ0FBQyxNQUFNO0lBQ0w7SUFDQUosUUFBUSxHQUFHRywwQ0FBbUI7RUFDaEM7QUFDRjtBQUVPLFNBQVNFLGlCQUFpQkEsQ0FBQ0osT0FBTyxFQUFFO0VBQ3pDLElBQUlBLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtJQUN6QixPQUFPN0Msa0NBQWlCO0VBQzFCLENBQUMsTUFBTSxJQUFJNEMsT0FBTyxDQUFDQyxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ2hDLE9BQU83QyxrQ0FBaUI7RUFDMUIsQ0FBQyxNQUFNO0lBQ0w7SUFDQSxPQUFPQSxrQ0FBaUI7RUFDMUI7QUFDRjtBQUNPLElBQUlpRCxhQUFhLEdBQUFoRCxxQkFBQSxHQUFHaUQsTUFBTSxDQUFDQyxNQUFNLENBQUNSLFFBQVEsRUFBRTNDLGtDQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnJFLElBQUFvRCxNQUFBLEdBQUFDLHVCQUFBLENBQUFiLG1CQUFBO0FBR0EsSUFBQWMsY0FBQSxHQUFBZCxtQkFBQTtBQUNBLElBQUFlLFFBQUEsR0FBQWYsbUJBQUE7QUFDQSxJQUFBZ0IsTUFBQSxHQUFBaEIsbUJBQUE7QUFDQSxJQUFBaUIsT0FBQSxHQUFBakIsbUJBQUE7QUFDQSxJQUFBa0IsWUFBQSxHQUFBbEIsbUJBQUE7QUFDQSxJQUFBbUIsT0FBQSxHQUFBbkIsbUJBQUE7QUFDQSxJQUFBb0IsR0FBQSxHQUFBcEIsbUJBQUE7QUFDQSxJQUFBcUIsS0FBQSxHQUFBckIsbUJBQUE7QUFDQSxJQUFBc0IsYUFBQSxHQUFBdEIsbUJBQUE7QUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsbUJBQUE7QUFDQSxJQUFBd0IsS0FBQSxHQUFBeEIsbUJBQUE7QUFDQSxJQUFBeUIsV0FBQSxHQUFBekIsbUJBQUE7QUFBMkMsU0FBQTBCLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBZCx3QkFBQWMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBdkIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU00QixVQUFVLGdCQUFHQyxpQkFBSyxDQUFDQyxJQUFJLENBQUM7RUFBQSxPQUFNLG1RQUErQjtBQUFBLEVBQUM7QUFhcEUsSUFBTUMsUUFBUSxnQkFBR0YsaUJBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBQUEsT0FBTSxtTEFBNEI7QUFBQSxFQUFDO0FBQUMsSUFHM0NFLGVBQWUsR0FBQXJHLGtCQUFBLDBCQUFBc0csVUFBQTtFQUNsQyxTQUFBRCxnQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixlQUFBO0lBQ2pCRyxLQUFBLEdBQUFuQixVQUFBLE9BQUFnQixlQUFBLEdBQU1FLEtBQUs7SUFFWEMsS0FBQSxDQUFLRSxLQUFLLEdBQUdGLEtBQUEsQ0FBS0UsS0FBSyxDQUFDQyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsQ0EsS0FBQSxDQUFLSSxJQUFJLEdBQUdKLEtBQUEsQ0FBS0ksSUFBSSxDQUFDRCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUNoQ0EsS0FBQSxDQUFLSyxhQUFhLEdBQUdMLEtBQUEsQ0FBS0ssYUFBYSxDQUFDRixJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsREEsS0FBQSxDQUFLTSxVQUFVLEdBQUdOLEtBQUEsQ0FBS00sVUFBVSxDQUFDSCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUM1Q0EsS0FBQSxDQUFLTyxhQUFhLEdBQUdQLEtBQUEsQ0FBS08sYUFBYSxDQUFDSixJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsREEsS0FBQSxDQUFLUSxhQUFhLEdBQUdSLEtBQUEsQ0FBS1EsYUFBYSxDQUFDTCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsREEsS0FBQSxDQUFLUyxVQUFVLEdBQUdULEtBQUEsQ0FBS1MsVUFBVSxDQUFDTixJQUFJLENBQUFILEtBQUssQ0FBQztJQUM1Q0EsS0FBQSxDQUFLRCxLQUFLLENBQUNXLGFBQWEsQ0FBQ0MsTUFBTSxHQUFBWCxLQUFPO0lBRXRDLElBQU1ZLEtBQUssR0FBQVosS0FBTztJQUNsQixJQUFJYSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQyxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUU3QyxJQUFJaEIsS0FBSyxDQUFDVyxhQUFhLENBQUNPLElBQUksQ0FBQ0MsU0FBUyxJQUFJbkIsS0FBSyxDQUFDVyxhQUFhLENBQUNPLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxhQUFhLEVBQUU7TUFDMUYsSUFBSUMsSUFBSSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDekNLLElBQUksQ0FBQ0MsU0FBUyxHQUFHLFFBQVE7TUFDekJMLE1BQU0sQ0FBQ00sV0FBVyxDQUFDRixJQUFJLENBQUM7SUFDMUIsQ0FBQyxNQUNJO01BQ0hKLE1BQU0sQ0FBQ08sS0FBSyxHQUFHLFFBQVE7SUFDekI7SUFFQVYsT0FBTyxDQUFDVyxTQUFTLEdBQUcseURBQXlEO0lBQzdFWCxPQUFPLENBQUNTLFdBQVcsQ0FBQ04sTUFBTSxDQUFDO0lBQzNCdkUsTUFBTSxDQUFDb0UsT0FBTyxDQUFDLENBQUNZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3JDLElBQUlDLE1BQU0sR0FBR2YsS0FBSyxDQUFDYixLQUFLLENBQUNXLGFBQWEsQ0FBQ2tCLGVBQWUsQ0FBQ0osU0FBUyxDQUFDSyxRQUFRLENBQUMsV0FBVyxDQUFDO01BQ3RGLElBQUlqQixLQUFLLENBQUNrQixLQUFLLENBQUMxQixJQUFJLEVBQUU7UUFDcEIsSUFBSSxDQUFDdUIsTUFBTSxFQUFFO1VBQ1hmLEtBQUssQ0FBQ1YsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDLE1BQ0k7VUFDSHpELE1BQU0sQ0FBQ21FLEtBQUssQ0FBQ2IsS0FBSyxDQUFDVyxhQUFhLENBQUNrQixlQUFlLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2pHO01BQ0YsQ0FBQyxNQUNJO1FBQ0hwQixLQUFLLENBQUNSLElBQUksQ0FBQyxDQUFDO01BQ2Q7SUFDRixDQUFDLENBQUM7SUFDRkosS0FBQSxDQUFLaUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQmpDLEtBQUEsQ0FBS2tDLFlBQVksR0FBRyxFQUFFO0lBQ3RCLElBQUl4QixhQUFhLEdBQUdYLEtBQUssQ0FBQ1csYUFBYTtJQUV2QyxJQUFJWCxLQUFLLENBQUNrQyxNQUFNLEVBQUU7TUFDaEJqQyxLQUFBLENBQUttQyxZQUFZLENBQUNwQyxLQUFLLENBQUNrQyxNQUFNLENBQUM7SUFDakMsQ0FBQyxNQUNJO01BQ0hqQyxLQUFBLENBQUtvQyxnQkFBZ0IsQ0FBQzFCLGFBQWEsQ0FBQ08sSUFBSSxDQUFDb0IsZUFBZSxJQUFJM0IsYUFBYSxDQUFDTyxJQUFJLENBQUNxQixlQUFlLEVBQUUsQ0FBQyxDQUFDNUIsYUFBYSxDQUFDTyxJQUFJLENBQUNvQixlQUFlLENBQUM7SUFDdkk7SUFFQXJDLEtBQUEsQ0FBS3hELGFBQWEsR0FBRyxJQUFBRCxnQ0FBaUIsRUFBQ21FLGFBQWEsQ0FBQ08sSUFBSSxDQUFDO0lBQzFELElBQUlzQixPQUFPLEdBQUcsSUFBSUMsZ0JBQU8sQ0FBQztNQUFDM0IsT0FBTyxFQUFFQSxPQUFPO01BQUU0QixNQUFNLEVBQUUxQyxLQUFLLENBQUMwQztJQUFNLENBQUMsQ0FBQztJQUNuRUYsT0FBTyxDQUFDRyxNQUFNLEdBQUcsWUFBTTtNQUNyQixPQUFPLEtBQUs7SUFDZCxDQUFDO0lBQ0QsSUFBSSxDQUFDaEMsYUFBYSxDQUFDaUMsWUFBWSxDQUFDQyxRQUFRLENBQUNqQyxNQUFNLEVBQUU7TUFDL0NELGFBQWEsQ0FBQ2lDLFlBQVksQ0FBQ0MsUUFBUSxDQUFDakMsTUFBTSxHQUFHNEIsT0FBTztJQUN0RDtJQUNBLElBQUlNLEtBQUssR0FBR25DLGFBQWEsQ0FBQ29DLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDLFVBQUFsQyxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDbUMsSUFBSSxLQUFLLFFBQVE7SUFBQSxFQUFDO0lBQ3ZGdEMsYUFBYSxDQUFDb0MsYUFBYSxDQUFDRCxLQUFLLENBQUMsQ0FBQ04sT0FBTyxHQUFHQSxPQUFPO0lBQ3BEdkMsS0FBQSxDQUFLaUQsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUNuRSxJQUFJQyxRQUFRO0lBQ1osSUFBSWxELEtBQUEsQ0FBS0QsS0FBSyxDQUFDb0QsVUFBVSxJQUFJQyxDQUFDLENBQUNwRCxLQUFBLENBQUtELEtBQUssQ0FBQ29ELFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFJRCxDQUFDLENBQUNwRCxLQUFBLENBQUtELEtBQUssQ0FBQ29ELFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxFQUFFO01BQ3pHSixRQUFRLEdBQUdFLENBQUMsQ0FBQ3BELEtBQUEsQ0FBS0QsS0FBSyxDQUFDb0QsVUFBVSxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUFDO01BQ3pDRSxVQUFVLENBQUMsWUFBSztRQUNkdkQsS0FBQSxDQUFLd0QsUUFBUSxDQUFDLENBQUM7TUFDakIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNULENBQUMsTUFDSTtNQUNITixRQUFRLEdBQUcsK0NBQStDO0lBQzVEO0lBQ0FsRCxLQUFBLENBQUs4QixLQUFLLEdBQUc7TUFDWDFCLElBQUksRUFBRUwsS0FBSyxDQUFDSyxJQUFJLElBQUksS0FBSztNQUN6QnFELFdBQVcsRUFBRSxRQUFRO01BQ3JCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO01BQ2JuQixPQUFPLEVBQUVBLE9BQU87TUFDaEJvQixLQUFLLEVBQUUsQ0FBQztNQUNSVCxRQUFRLEVBQUVBLFFBQVE7TUFDbEJVLFFBQVEsRUFBRSxDQUFDO01BQ1hDLGFBQWEsRUFBRTtJQUNqQixDQUFDO0lBQ0Q3RCxLQUFBLENBQUs4RCxhQUFhLEdBQUcsVUFBU0MsT0FBTyxFQUFFQyxVQUFVLEVBQUU7TUFDakQsSUFBSUMsSUFBSSxHQUFHLEtBQUs7TUFDaEIsSUFBSUMsV0FBVyxHQUFHLEVBQUU7TUFDcEIsSUFBSUgsT0FBTyxJQUFJQSxPQUFPLENBQUM5RixHQUFHLElBQUk4RixPQUFPLENBQUM5RixHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDckQsSUFBSWlGLFNBQVEsR0FBR2EsT0FBTyxDQUFDOUYsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUN0Q2dHLElBQUksR0FBR2YsU0FBUSxDQUFDSSxNQUFNO1FBQ3RCUyxPQUFPLEdBQUdiLFNBQVEsQ0FBQyxDQUFDLENBQUM7TUFDdkI7TUFDQSxJQUFJYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLENBQUMsRUFBRTtRQUNqQ0QsV0FBVyxHQUFHSCxPQUFPLENBQUNJLFFBQVEsQ0FBQyxDQUFDO01BQ2xDLENBQUMsTUFDSSxJQUFJSixPQUFPLElBQUlBLE9BQU8sQ0FBQzlGLEdBQUcsSUFBSThGLE9BQU8sQ0FBQzlGLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMxRCxJQUFJbUcsUUFBUSxHQUFHTCxPQUFPLENBQUM5RixHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUkyQyxLQUFLLENBQUNiLEtBQUssQ0FBQ1csYUFBYSxDQUFDMkQsS0FBSyxDQUFDQyx1QkFBdUIsQ0FBQ0MsWUFBWSxJQUFJM0QsS0FBSyxDQUFDYixLQUFLLENBQUNXLGFBQWEsQ0FBQzJELEtBQUssQ0FBQ0MsdUJBQXVCLENBQUNDLFlBQVksQ0FBQ0gsUUFBUSxDQUFDLEVBQUU7VUFDMUosSUFBSSxDQUFDeEQsS0FBSyxDQUFDYixLQUFLLENBQUNXLGFBQWEsQ0FBQzJELEtBQUssQ0FBQ0MsdUJBQXVCLENBQUNDLFlBQVksQ0FBQ0gsUUFBUSxDQUFDLENBQUNJLEtBQUssRUFBRTtZQUN6RjVELEtBQUssQ0FBQ2IsS0FBSyxDQUFDVyxhQUFhLENBQUMyRCxLQUFLLENBQUNDLHVCQUF1QixDQUFDQyxZQUFZLENBQUNILFFBQVEsQ0FBQyxDQUFDSSxLQUFLLEdBQUc1RCxLQUFLLENBQUNiLEtBQUssQ0FBQ1csYUFBYSxDQUFDMkQsS0FBSyxDQUFDQyx1QkFBdUIsQ0FBQ0MsWUFBWSxDQUFDSCxRQUFRLENBQUMsQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBQztVQUMxTDtVQUNBLElBQUlELEtBQUssR0FBRzVELEtBQUssQ0FBQ2IsS0FBSyxDQUFDVyxhQUFhLENBQUMyRCxLQUFLLENBQUNDLHVCQUF1QixDQUFDQyxZQUFZLENBQUNILFFBQVEsQ0FBQyxDQUFDSSxLQUFLO1VBQ2hHLElBQUksT0FBT0EsS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUMvQk4sV0FBVyxHQUFHTSxLQUFLLENBQUNULE9BQU8sRUFBRUMsVUFBVSxFQUFFLEtBQUssQ0FBQztVQUNqRCxDQUFDLE1BQ0k7WUFDSEUsV0FBVyxHQUFHdEQsS0FBSyxDQUFDYixLQUFLLENBQUNXLGFBQWEsQ0FBQzJELEtBQUssQ0FBQ0MsdUJBQXVCLENBQUNDLFlBQVksQ0FBQ0gsUUFBUSxDQUFDLENBQUNJLEtBQUs7VUFDcEc7UUFDRjtNQUNGO01BQ0EsSUFBSU4sV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJSCxPQUFPLElBQUlBLE9BQU8sQ0FBQzlGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN0RGlHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsU0FBUyxDQUFDWCxPQUFPLENBQUM5RixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7TUFDakQ7TUFDQSxPQUFPaUcsV0FBVztJQUNwQixDQUFDO0lBQ0RsRSxLQUFBLENBQUtrRCxRQUFRLEdBQUcsSUFBSXlCLGNBQVUsQ0FBQyxDQUFDO0lBQ2hDM0UsS0FBQSxDQUFLNEUsV0FBVyxHQUFHLElBQUlDLGFBQU0sQ0FBQztNQUM1QkMsTUFBTSxFQUFFLElBQUlDLGNBQVksQ0FBQztRQUFDQyxNQUFNLEVBQUUsSUFBSUMsZUFBTyxDQUFDO01BQUMsQ0FBQyxDQUFDO01BQ2pEVCxLQUFLLEVBQUV4RSxLQUFBLENBQUs4RDtJQUNkLENBQUMsQ0FBQztJQUNGLElBQUk5RCxLQUFBLENBQUtELEtBQUssQ0FBQ0ssSUFBSSxFQUFFO01BQ25CSixLQUFBLENBQUtELEtBQUssQ0FBQ1csYUFBYSxDQUFDd0UsR0FBRyxDQUFDQyxRQUFRLENBQUNuRixLQUFBLENBQUs0RSxXQUFXLENBQUM7SUFDekQ7SUFBQyxPQUFBNUUsS0FBQTtFQUNIO0VBQUMsSUFBQW9GLFVBQUEsYUFBQXZGLGVBQUEsRUFBQUMsVUFBQTtFQUFBLFdBQUF1RixhQUFBLGFBQUF4RixlQUFBO0lBQUF5RixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbkYsSUFBSUEsQ0FBQSxFQUFHO01BQUEsSUFBQW9GLE1BQUE7TUFDTC9JLE1BQU0sQ0FBQyxJQUFJLENBQUNzRCxLQUFLLENBQUNXLGFBQWEsQ0FBQ2tCLGVBQWUsQ0FBQyxDQUFDRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDOUYsSUFBSXlELE1BQU0sR0FBRyxJQUFJLENBQUMxRixLQUFLLENBQUNXLGFBQWEsQ0FBQ3dFLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLENBQUM7TUFDckQsSUFBSVAsUUFBUSxHQUFHLElBQUk7TUFDbkJNLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLFVBQUM5RSxPQUFPLEVBQUVnQyxLQUFLLEVBQUUrQyxLQUFLLEVBQUs7UUFDeEMsSUFBSS9FLE9BQU8sS0FBSzJFLE1BQUksQ0FBQ1osV0FBVyxFQUFFO1VBQ2hDTyxRQUFRLEdBQUcsS0FBSztRQUNsQjtNQUNGLENBQUMsQ0FBQztNQUNGLElBQUlBLFFBQVEsRUFBRTtRQUNaLElBQUksQ0FBQ3BGLEtBQUssQ0FBQ1csYUFBYSxDQUFDd0UsR0FBRyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDUCxXQUFXLENBQUM7TUFDekQ7TUFDQSxJQUFJLENBQUNpQixRQUFRLENBQUM7UUFDWnpGLElBQUksRUFBRTtNQUNSLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0wsS0FBSyxDQUFDVyxhQUFhLENBQUNvRixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUFDakQ7RUFBQztJQUFBUixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBckYsS0FBS0EsQ0FBQSxFQUFHO01BQ056RCxNQUFNLENBQUMsSUFBSSxDQUFDc0QsS0FBSyxDQUFDVyxhQUFhLENBQUNrQixlQUFlLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDO01BQ2xHO01BQ0ksSUFBSSxDQUFDNkQsUUFBUSxDQUFDO1FBQ1p6RixJQUFJLEVBQUU7TUFDUixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFrRixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbEYsYUFBYUEsQ0FBQSxFQUFJO01BQ2YsSUFBSTBGLFFBQVEsR0FBRyxJQUFJLENBQUNqRSxLQUFLLENBQUM4QixRQUFRLEdBQUcsQ0FBQztNQUN0QyxJQUFJLENBQUNpQyxRQUFRLENBQUM7UUFDWmpDLFFBQVEsRUFBRW1DO01BQ1osQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBVCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbkQsZ0JBQWdCQSxDQUFFNEQsRUFBRSxFQUFtQjtNQUFBLElBQUFDLE1BQUE7TUFBQSxJQUFqQkMsUUFBUSxHQUFBQyxTQUFBLENBQUE3QyxNQUFBLFFBQUE2QyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLElBQUk7TUFDbkMsSUFBSUUsR0FBRztNQUNQLElBQUlILFFBQVEsRUFBRTtRQUNaRyxHQUFHLEdBQUcsd0JBQXdCLEdBQUdMLEVBQUU7TUFDckMsQ0FBQyxNQUNJO1FBQ0hLLEdBQUcsR0FBRywrQkFBK0IsR0FBR0wsRUFBRTtNQUM1QztNQUVBTSxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQ2IsVUFBQ0MsUUFBUSxFQUFLO1FBQ1pBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ0YsSUFBSSxDQUNsQixVQUFDRSxJQUFJLEVBQUs7VUFDUlIsTUFBSSxDQUFDOUQsWUFBWSxDQUFDc0UsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQW5CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFwRCxZQUFZQSxDQUFFc0UsSUFBSSxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUNsQixLQUFLLElBQUkvSCxDQUFDLElBQUk4SCxJQUFJLENBQUNFLFVBQVUsRUFBRTtRQUM3QixJQUFJRixJQUFJLENBQUNFLFVBQVUsQ0FBQ2xJLGNBQWMsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUU7VUFDckMsSUFBSSxDQUFDc0QsTUFBTSxDQUFDdEQsQ0FBQyxDQUFDLEdBQUcsRUFBRTtVQUNuQixJQUFJaUksU0FBUyxHQUFHSCxJQUFJLENBQUNFLFVBQVUsQ0FBQ2hJLENBQUMsQ0FBQztVQUFDLElBQUFrSSxLQUFBLFlBQUFBLE1BQUEsRUFDRDtZQUNoQyxJQUFJRCxTQUFTLENBQUNFLFFBQVEsQ0FBQ3JJLGNBQWMsQ0FBQ3NJLENBQUMsQ0FBQyxFQUFFO2NBQ3hDLElBQUlsRyxPQUFPLEdBQUcrRixTQUFTLENBQUNFLFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDO2NBQ25DTCxNQUFJLENBQUN6RSxNQUFNLENBQUN0RCxDQUFDLENBQUMsQ0FBQ3FJLElBQUksQ0FBQ25HLE9BQU8sQ0FBQztjQUM1QixJQUFJb0csYUFBYSxHQUFHUCxNQUFJLENBQUN4RSxZQUFZLENBQUNhLFNBQVMsQ0FBQyxVQUFDcUIsUUFBUTtnQkFBQSxPQUFLQSxRQUFRLEtBQUt2RCxPQUFPLENBQUNxRyxPQUFPO2NBQUEsRUFBQztjQUMzRixJQUFJRCxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQUlwRyxPQUFPLENBQUNxRyxPQUFPLEVBQUU7Z0JBQzNDUixNQUFJLENBQUN4RSxZQUFZLENBQUM4RSxJQUFJLENBQUNuRyxPQUFPLENBQUNxRyxPQUFPLENBQUM7Y0FDekM7WUFDRjtVQUNGLENBQUM7VUFURCxLQUFLLElBQUlILENBQUMsSUFBSUgsU0FBUyxDQUFDRSxRQUFRO1lBQUFELEtBQUE7VUFBQTtRQVVsQztNQUNGO01BQ0EsSUFBSSxDQUFDOUcsS0FBSyxDQUFDVyxhQUFhLENBQUMyRCxLQUFLLENBQUNDLHVCQUF1QixDQUFDNkMsa0JBQWtCLENBQUMsSUFBSSxDQUFDakYsWUFBWSxFQUFFO1FBQzNGLE1BQU0sRUFBRSxTQUFSa0YsSUFBTUEsQ0FBRzFELFNBQVMsRUFBSztVQUNyQmdELE1BQUksQ0FBQ2IsUUFBUSxDQUFDO1lBQ1puQyxTQUFTLEVBQUVBO1VBQ2IsQ0FBQyxDQUFDO1FBQ0o7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE0QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBL0IsUUFBUUEsQ0FBQSxFQUFFO01BQ1IsSUFBRztRQUNELElBQUksSUFBSSxDQUFDMUIsS0FBSyxDQUFDb0IsUUFBUSxDQUFDSSxNQUFNLEdBQUcsRUFBRSxFQUFFO1VBQ25DO1VBQ0EsSUFBSSxDQUFDeEIsS0FBSyxDQUFDb0IsUUFBUSxHQUFHLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ29CLFFBQVEsQ0FBQ21FLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO1VBRWxFLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7VUFDaEIsSUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMzRixLQUFLLENBQUNvQixRQUFRLENBQUM7VUFDN0MsSUFBSUEsUUFBUSxHQUFHLElBQUkrQixlQUFPLENBQUM7WUFDekJ5QyxpQkFBaUIsRUFBRTtVQUNyQixDQUFDLENBQUMsQ0FBQ0MsWUFBWSxDQUFDSixPQUFPLENBQUM7VUFDeEIsSUFBSXpDLE1BQU0sR0FBRyxJQUFJLENBQUNGLFdBQVcsQ0FBQ2dELFNBQVMsQ0FBQyxDQUFDO1VBQ3pDOUMsTUFBTSxDQUFDK0MsY0FBYyxDQUFDLFVBQUM5RCxPQUFPLEVBQUs7WUFDakNlLE1BQU0sQ0FBQ3ZFLGFBQWEsQ0FBQ3dELE9BQU8sQ0FBQztVQUMvQixDQUFDLENBQUM7VUFDRixLQUFLLElBQUlwRixDQUFDLElBQUl1RSxRQUFRLEVBQUU7WUFDdEIsSUFBSUEsUUFBUSxDQUFDekUsY0FBYyxDQUFDRSxDQUFDLENBQUMsRUFBRTtjQUM5QixJQUFJbUosV0FBVyxHQUFHNUUsUUFBUSxDQUFDdkUsQ0FBQyxDQUFDO2NBQzdCLElBQUltSixXQUFXLENBQUM3SixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCNkosV0FBVyxDQUFDQyxXQUFXLENBQUMsSUFBSUMsWUFBTSxDQUFDRixXQUFXLENBQUNHLFdBQVcsQ0FBQyxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDLEVBQUVKLFdBQVcsQ0FBQzdKLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2NBQzVHO2NBQ0E2RyxNQUFNLENBQUN4RSxVQUFVLENBQUN3SCxXQUFXLENBQUM7WUFDaEM7VUFDRjtRQUNGO01BQ0YsQ0FBQyxDQUNELE9BQU1LLEtBQUssRUFBRTtRQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQ3BCO01BQ0EsSUFBSSxJQUFJLENBQUNyRyxLQUFLLENBQUM2QixLQUFLLEVBQUU7UUFDcEIsSUFBSTJFLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxJQUFJN0UsS0FBSyxHQUFHMkUsU0FBUyxDQUFDRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUlDLGNBQWMsR0FBRy9FLEtBQUssQ0FBQytFLGNBQWMsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJaEYsS0FBSyxDQUFDK0UsY0FBYztRQUMvRS9FLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQ0YsY0FBYyxFQUFFLElBQUksQ0FBQzVHLEtBQUssQ0FBQzZCLEtBQUssQ0FBQztRQUNoREEsS0FBSyxDQUFDa0YsTUFBTSxDQUFDSCxjQUFjLEVBQUUsSUFBSSxDQUFDNUcsS0FBSyxDQUFDNkIsS0FBSyxDQUFDO1FBQzlDMkUsU0FBUyxDQUFDUSxXQUFXLENBQUNuRixLQUFLLENBQUM7UUFDNUIyRSxTQUFTLENBQUNTLFFBQVEsQ0FBQ3BGLEtBQUssQ0FBQztNQUMzQjtJQUNGO0VBQUM7SUFBQTJCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE5RSxVQUFVQSxDQUFDaUIsS0FBSyxFQUFFO01BQUEsSUFBQXNILE1BQUE7TUFDaEIsSUFBSXJGLEtBQUssR0FBRzRFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxXQUFXO01BQzNELElBQUksQ0FBQ3BELFFBQVEsQ0FBQztRQUFDM0MsUUFBUSxFQUFFeEIsS0FBSyxDQUFDZSxNQUFNLENBQUNwQixTQUFTO1FBQUVzQyxLQUFLLEVBQUVBO01BQUssQ0FBQyxFQUFFLFlBQU07UUFDcEVxRixNQUFJLENBQUN4RixRQUFRLENBQUMsQ0FBQztNQUNqQixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE4QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBakYsVUFBVUEsQ0FBRXlELE9BQU8sRUFBRTtNQUFBLElBQUFtRixNQUFBO01BQ25CLElBQUlDLFdBQVcsR0FBRzNCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQzNGLEtBQUssQ0FBQ29CLFFBQVEsQ0FBQztNQUVqRGlHLFdBQVcsQ0FBQ2pHLFFBQVEsQ0FBQzhELElBQUksQ0FBQ2pELE9BQU8sQ0FBQztNQUNsQyxJQUFJYixRQUFRLEdBQUdzRSxJQUFJLENBQUM0QixTQUFTLENBQUNELFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ25ELElBQUksQ0FBQ3RELFFBQVEsQ0FBQztRQUNaM0MsUUFBUSxFQUFFQTtNQUNaLENBQUMsRUFBRSxZQUFNO1FBQUNnRyxNQUFJLENBQUM1QixTQUFTLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUM5QjtFQUFDO0lBQUFoQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaEYsYUFBYUEsQ0FBRWdILE9BQU8sRUFBRTtNQUFBLElBQUE4QixNQUFBO01BQ3RCLElBQUl6RixRQUFRLEdBQUcyRCxPQUFPLENBQUMrQixVQUFVLENBQUMxRixRQUFRO01BQzFDLElBQUl1RixXQUFXLEdBQUczQixJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMzRixLQUFLLENBQUNvQixRQUFRLENBQUM7TUFDakQsSUFBSXFHLFNBQVMsR0FBR0osV0FBVyxDQUFDakcsUUFBUSxDQUFDSCxTQUFTLENBQUMsVUFBQ2xDLE9BQU8sRUFBSztRQUMxRCxPQUFPQSxPQUFPLENBQUN5SSxVQUFVLENBQUMxRixRQUFRLEtBQUtBLFFBQVE7TUFDakQsQ0FBQyxDQUFDO01BQ0Z1RixXQUFXLENBQUNqRyxRQUFRLENBQUNzRyxNQUFNLENBQUNELFNBQVMsRUFBRSxDQUFDLENBQUM7TUFDekMsSUFBSXJHLFFBQVEsR0FBR3NFLElBQUksQ0FBQzRCLFNBQVMsQ0FBQ0QsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7TUFDbkQsSUFBSSxDQUFDdEQsUUFBUSxDQUFDO1FBQ1ozQyxRQUFRLEVBQUVBO01BQ1osQ0FBQyxFQUFFLFlBQU07UUFBQ21HLE1BQUksQ0FBQy9CLFNBQVMsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDO01BQzVCbUMsbUJBQUssQ0FBQ0MsaUJBQWlCLENBQUNuQixNQUFNLENBQUNvQixZQUFZLENBQUNDLGtCQUFrQixFQUFFckMsT0FBTyxDQUFDO0lBQzFFO0VBQUM7SUFBQWpDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEvRSxhQUFhQSxDQUFFK0csT0FBTyxFQUFFO01BQUEsSUFBQXNDLE1BQUE7TUFDdEIsSUFBSWpHLFFBQVEsR0FBRzJELE9BQU8sQ0FBQytCLFVBQVUsQ0FBQzFGLFFBQVE7TUFDMUMsSUFBSWtHLFVBQVUsR0FBR3RDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQzNGLEtBQUssQ0FBQ29CLFFBQVEsQ0FBQztNQUNoRCxJQUFJaUcsV0FBVyxHQUFHVyxVQUFVLENBQUM1RyxRQUFRO01BQ3JDLElBQUlxRyxTQUFTLEdBQUdKLFdBQVcsQ0FBQ3BHLFNBQVMsQ0FBQyxVQUFDbEMsT0FBTyxFQUFLO1FBQ2pELE9BQU9BLE9BQU8sQ0FBQ3lJLFVBQVUsQ0FBQzFGLFFBQVEsS0FBS0EsUUFBUTtNQUNqRCxDQUFDLENBQUM7TUFDRmtHLFVBQVUsQ0FBQzVHLFFBQVEsQ0FBQ3FHLFNBQVMsQ0FBQyxHQUFHaEMsT0FBTztNQUN4QyxJQUFJckUsUUFBUSxHQUFHc0UsSUFBSSxDQUFDNEIsU0FBUyxDQUFDVSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztNQUNsRCxJQUFJLENBQUNqRSxRQUFRLENBQUM7UUFDWjNDLFFBQVEsRUFBRUE7TUFDWixDQUFDLEVBQUUsWUFBTTtRQUFDMkcsTUFBSSxDQUFDdkMsU0FBUyxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUM7SUFDOUI7RUFBQztJQUFBaEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStCLFNBQVNBLENBQUEsRUFBSTtNQUNYLElBQUksSUFBSSxDQUFDdkgsS0FBSyxDQUFDb0QsVUFBVSxJQUFJLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ29CLFFBQVEsQ0FBQ0ksTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUM1REYsQ0FBQyxDQUFDLElBQUksQ0FBQ3JELEtBQUssQ0FBQ29ELFVBQVUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDdkIsS0FBSyxDQUFDb0IsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUNyRDtJQUNGO0VBQUM7SUFBQW9DLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RSxXQUFXQSxDQUFDQyxRQUFRLEVBQUUvSCxNQUFNLEVBQUU7TUFDNUIsSUFBSSxDQUFDNEQsUUFBUSxDQUFDO1FBQ1o1RCxNQUFNLEVBQUVBLE1BQU07UUFDZCtILFFBQVEsRUFBRUE7TUFDWixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUExRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMEUsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsSUFBTXJKLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUlzSixRQUFRO01BQ1osSUFBSSxJQUFJLENBQUNwSSxLQUFLLENBQUNrSSxRQUFRLEVBQUU7UUFDdkJFLFFBQVEsZ0JBQUd2TixNQUFBLFlBQUFvRSxhQUFBLE1BQU1lLEtBQUssQ0FBQ2tJLFFBQVE7VUFBQy9ILE1BQU0sRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTztVQUFDaEUsR0FBRyxFQUFFQSxTQUFJO1VBQUNrTSxTQUFTLEVBQUVBLGVBQVU7VUFBQ0MsWUFBWSxFQUFFQSx3QkFBYTtVQUFDdEYsTUFBTSxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDZ0QsU0FBUyxDQUFDLENBQUU7VUFBQzVDLE1BQU0sRUFBRSxJQUFJQyxlQUFPLENBQUM7UUFBRSxDQUFDLENBQUM7TUFDdkw7TUFDQSxvQkFDRXRJLE1BQUEsWUFBQW9FLGFBQUE7UUFBS1MsU0FBUyxFQUFFO01BQXFCLGdCQUNuQzdFLE1BQUEsWUFBQW9FLGFBQUEsQ0FBQ3BFLE1BQUEsQ0FBQTBOLFFBQVE7UUFBQ0MsUUFBUSxlQUFFM04sTUFBQSxZQUFBb0UsYUFBQSxjQUFLLFlBQWU7TUFBRSxnQkFDeENwRSxNQUFBLFlBQUFvRSxhQUFBLENBQUNuQixRQUFRLE1BQUEySyxnQkFBQTtRQUFDQyxZQUFZLEVBQUUsbUJBQW9CO1FBQUNDLFdBQVcsRUFBRSxxQkFBc0I7UUFBQ0MsYUFBYSxFQUFFLDZCQUE4QjtRQUNwSEMsTUFBTSxFQUFFLElBQUksQ0FBQ25PLGFBQWEsQ0FBQzNCLE1BQU87UUFBQytQLGFBQWEsRUFBRSxJQUFJLENBQUNwTyxhQUFhLENBQUNiLFdBQVk7UUFBQ2tQLGFBQWEsRUFBRSxvQkFBcUI7UUFBQ0MsVUFBVSxFQUFFLElBQUksQ0FBQzVLO01BQU0sb0JBQWdCLElBQUksQ0FBQzFELGFBQWEsQ0FBQ3VPLEtBQUssQ0FDdEwsQ0FDRixDQUFDLGVBQ1hwTyxNQUFBLFlBQUFvRSxhQUFBO1FBQUtTLFNBQVMsRUFBRTtNQUEyQixHQUN4QyxJQUFJLENBQUN5QixLQUFLLENBQUNpQyxHQUFHLENBQUMsVUFBU3JFLE9BQU8sRUFBRWdDLEtBQUssRUFBRTtRQUN2QyxJQUFJaEMsT0FBTyxLQUFLLFFBQVEsSUFBS0QsS0FBSyxDQUFDcUIsTUFBTSxDQUFDcEIsT0FBTyxDQUFDLElBQUlELEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQ3BCLE9BQU8sQ0FBQyxDQUFDeUMsTUFBTSxHQUFHLENBQUUsRUFBRTtVQUN2RixJQUFJL0IsS0FBSyxHQUFHWCxLQUFLLENBQUNwRSxhQUFhLENBQUMsMkJBQTJCLEdBQUdxRSxPQUFPLENBQUNtSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1VBQ3BGLG9CQUFPck8sTUFBQSxZQUFBb0UsYUFBQTtZQUFRdUUsR0FBRyxFQUFFekMsS0FBTTtZQUFDckIsU0FBUyxFQUFFLGFBQWEsR0FBR1gsT0FBTyxHQUFHLElBQUksSUFBSUEsT0FBTyxLQUFLRCxLQUFLLENBQUNrQixLQUFLLENBQUMyQixXQUFXLEdBQUcsWUFBWSxHQUFHLGNBQWMsQ0FBRTtZQUM5SGxDLEtBQUssRUFBRUEsS0FBTTtZQUFDMEosU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUE7Y0FBQSxPQUFRckssS0FBSyxDQUFDaUYsUUFBUSxDQUFDO2dCQUFDcEMsV0FBVyxFQUFFNUM7Y0FBTyxDQUFDLENBQUM7WUFBQTtVQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDLE1BQ0k7VUFDSCxPQUFPLElBQUk7UUFDYjtNQUNGLENBQUMsQ0FDRSxDQUFDLGVBQ05sRSxNQUFBLFlBQUFvRSxhQUFBLENBQUN0QixVQUFVO1FBQUMrQixTQUFTLEVBQUUsaUJBQWtCO1FBQUNzQyxhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFjO1FBQUNvSCxJQUFJLEVBQUUsSUFBSSxDQUFDcEosS0FBSyxDQUFDMkIsV0FBWTtRQUFDQyxTQUFTLEVBQUUsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBVTtRQUMvSG9ELFFBQVEsRUFBRSxJQUFJLENBQUM3RSxNQUFNLENBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUMyQixXQUFXLENBQUMsR0FBRyxJQUFJLENBQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUMyQixXQUFXLENBQUMsR0FBRSxFQUFHO1FBQUMwSCxNQUFNLEVBQUUsSUFBSSxDQUFDckosS0FBSyxDQUFDMUIsSUFBSztRQUNqSDhDLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVM7UUFBQ2tJLFVBQVUsRUFBRSxJQUFJLENBQUNyTCxLQUFLLENBQUNrQyxNQUFNLENBQUNtSixVQUFXO1FBQUM3SyxhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFjO1FBQUNDLGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWM7UUFDeElGLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVc7UUFBQ3NFLFdBQVcsRUFBRSxJQUFJLENBQUNBLFdBQVk7UUFBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUM5QixLQUFLLENBQUM4QixRQUFTO1FBQUN2RCxhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFjO1FBQzdIZ0wsY0FBYyxFQUFFLElBQUksQ0FBQ0EsY0FBZTtRQUFDM0ssYUFBYSxFQUFFLElBQUksQ0FBQ1gsS0FBSyxDQUFDVyxhQUFjO1FBQUNDLE1BQU0sRUFBRSxJQUFLO1FBQUN2RSxJQUFJLEVBQUUsSUFBSSxDQUFDSTtNQUFjLENBQUMsQ0FBQyxlQUNuSUcsTUFBQSxZQUFBb0UsYUFBQTtRQUFLUyxTQUFTLEVBQUUsb0JBQXFCO1FBQUNnRCxLQUFLLEVBQUU7VUFBQzhHLE9BQU8sRUFBRTtRQUFNO01BQUUsZ0JBQzdEM08sTUFBQSxZQUFBb0UsYUFBQTtRQUFLd0ssZUFBZSxFQUFFLElBQUs7UUFBQy9HLEtBQUssRUFBRTtVQUFDZ0gsU0FBUyxFQUFFLFFBQVE7VUFBRUMsU0FBUyxFQUFFO1FBQU0sQ0FBRTtRQUFDQyw4QkFBOEIsRUFBRSxJQUFLO1FBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUNsTDtNQUFXLEdBQUUsSUFBSSxDQUFDcUIsS0FBSyxDQUFDb0IsUUFBYyxDQUNwSyxDQUFDLEVBQ0xnSCxRQUNFLENBQUM7SUFFVjtFQUFDO0lBQUE1RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUcsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO01BQ2pELElBQUtGLFNBQVMsQ0FBQ3pMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxJQUFJLElBQU0wTCxTQUFTLENBQUMxTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMwQixLQUFLLENBQUMxQixJQUFLLEVBQUU7UUFDaEYzRCxNQUFNLENBQUMsSUFBSSxDQUFDc0QsS0FBSyxDQUFDVyxhQUFhLENBQUNrQixlQUFlLENBQUMsQ0FBQ0csV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3BHO01BQ0k7SUFDRjtFQUFDO0lBQUFzRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUcsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBSXpELE1BQU0sQ0FBQ29CLFlBQVksQ0FBQ3NDLHNCQUFzQixJQUFJMUQsTUFBTSxDQUFDb0IsWUFBWSxDQUFDc0Msc0JBQXNCLENBQUMzSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZHbUcsbUJBQUssQ0FBQ0MsaUJBQWlCLENBQUNuQixNQUFNLENBQUNvQixZQUFZLENBQUNzQyxzQkFBc0IsRUFBRTtVQUFDQyxJQUFJLEVBQUUsSUFBSTtVQUFFQyxTQUFTLEVBQUU7UUFBb0IsQ0FBQyxDQUFDO01BQ3BIO0lBQ0Y7RUFBQztBQUFBLEVBN1YwQ0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctZWRpdG9yLWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci1jb21wb25lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuZXhwb3J0IHZhciBwcm9qZWN0RWRpdG9yTGFuZyA9IHtcbiAgTEFORzogJ2RlJyxcblxuICBNRVRBREFUQV9FRElUOiBcIk1ldGFkYXRlbiBiZWFyYmVpdGVuXCIsXG4gIERVUExJQ0FURV9FTEVNRU5UOiBcIkVsZW1lbnQgZHVwbGl6aWVyZW5cIixcbiAgRElTUExBQ0VfRUxFTUVOVDogXCJFbGVtZW50IGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBEVVBMSUNBVEVfQU5EX0RFTEVURTogXCJFbGVtZW50IGR1cGxpemllcmVuICYgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIENIT09TRV9QUk9KRUNUOiBcIlfDpGhsZSBlaW4gUHJvamVrdCAuLi5cIixcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFX0hFQURMSU5FOiBcIkVsZW1lbnQgbMO2c2NoZW5cIixcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFX1FVRVNUSU9OOiBcIldvbGxlbiBTaWUgZGFzIEVsZW1lbnQgd2lya2xpY2ggbMO2c2NoZW4/XCIsXG4gIFJPVEFURV9FTEVNRU5UOiBcIkVsZW1lbnQgcm90aWVyZW5cIixcbiAgREVTRUxFQ1RfRUxFTUVOVDogXCJFbGVtZW50LUF1c3dhaGwgYXVmaGViZW5cIixcbiAgUkVWRVJUX0VMRU1FTlQ6IFwiTGV0enRlIFZlcnNpb24gd2llZGVyaGVyc3RlbGxlblwiLFxuICBDT05GSVJNX0RFTEVURV9BTEw6IFwiV29sbGVuIFNpZSBkaWUgYXVzZ2V3w6RobHRlbiBFbGVtZW50ZSB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgQlVUVE9OX0RFU0VMRUNUX0FMTDogXCJBdXN3YWhsIGbDvHIgYWxsZSBhdWZoZWJlblwiLFxuICBCVVRUT05fREVMRVRFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgbMO2c2NoZW5cIixcbiAgQlVUVE9OX0RJU1BMQUNFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9DT05GSVJNOiBcIkJlc3TDpHRpZ2VuXCIsXG4gIEJVVFRPTl9DQU5DRUw6IFwiQWJicmVjaGVuXCIsXG4gIEJVVFRPTl9DT1BZX0RJU1BMQUNFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUga29waWVyZW4gdW5kIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fVFJBTlNMQVRFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgYXVmIGRlciBLYXJ0ZSB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fQVBQTFlfVFJBTlNMQVRFOiBcIsOEbmRlcnVuZ2VuIMO8YmVybmVobWVuXCIsXG5cbiAgRURJVE9SOiAnRWRpdG9yJyxcbiAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZXNzZW4gd8OkaHJlbmQgZGVzIFplaWNobmVucycsXG4gIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ0FrdGl2ZXMgRWxlbWVudCBsw7ZzY2hlbicsXG4gIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnRlIGVkaXRpZXJlbicsXG4gIEVESVRPUl9TRUxFQ1RfSU5GTzogJ1p1ciBBdXN3YWhsIGVpbiBFbGVtZW50IGF1ZiBkZXIgS2FydGUgYW5rbGlja2VuLicsXG4gIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnUHVua3R3ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcbiAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcblxuICBFRElUT1JfQVBJX0VSUk9SX1RJVExFOiAnRXMgaXN0IGVpbiBGZWhsZXIgYXVmZ2V0cmV0ZW4nLFxuXG4gIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCB7bGFuZ0NvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHtwcm9qZWN0RWRpdG9yTGFuZ30gZnJvbSBcIi4vYzRnLWVkaXRvci1pMThuLWRlXCI7XG5sZXQgbWFwc0xhbmcgPSB7fTtcblxuaWYgKHR5cGVvZiBtYXBEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIG1hcHNMYW5nID0gbGFuZ0NvbnN0YW50c0dlcm1hbjtcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIG1hcHNMYW5nID0gbGFuZ0NvbnN0YW50c0VuZ2xpc2g7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmFsbGJhY2tcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRvckxhbmd1YWdlKG1hcERhdGEpIHtcbiAgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9IGVsc2UgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJlblwiKSB7XG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9XG59XG5leHBvcnQgdmFyIGxhbmdDb25zdGFudHMgPSBqUXVlcnkuZXh0ZW5kKG1hcHNMYW5nLCBwcm9qZWN0RWRpdG9yTGFuZyk7IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7RWRpdG9yVmlld30gZnJvbSBcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiO1xuY29uc3QgRWRpdG9yVmlldyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctZWRpdG9yLXZpZXcuanN4XCIpKTtcbmltcG9ydCB7Z2V0RWRpdG9yTGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1lZGl0b3ItaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7RmlsbCwgU3R5bGUsIFRleHR9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtnZXQsIHRyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dG9TdHJpbmdIRE1TfSBmcm9tIFwib2wvY29vcmRpbmF0ZVwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY291bnRFZGl0b3JJZCA9IHRoaXMuY291bnRFZGl0b3JJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRmVhdHVyZSA9IHRoaXMuYWRkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRmVhdHVyZSA9IHRoaXMucmVtb3ZlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlSlNPTiA9IHRoaXMuY2hhbmdlSlNPTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3IgPSB0aGlzO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJFZGl0b3JcIjtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBcIkVkaXRvclwiO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZWRpdG9yLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgYzRnLWNsb3NlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBoaWRkZW4gPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGpRdWVyeShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2M0Zy1jbG9zZScpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5hcnJMb2NzdHlsZXMgPSBbXTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICBpZiAocHJvcHMuY29uZmlnKSB7XG4gICAgICB0aGlzLmhhbmRsZUNvbmZpZyhwcm9wcy5jb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbihtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlIHx8IG1hcENvbnRyb2xsZXIuZGF0YS5iZUVkaXRvclByb2ZpbGUsICEhbWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0RWRpdG9yTGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGNvbnRyb2wuaXNPcGVuID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvcikge1xuICAgICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yID0gY29udHJvbDtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJlZGl0b3JcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwiUG9pbnRcIiwgXCJMaW5lU3RyaW5nXCIsIFwiUG9seWdvblwiLCBcIkNpcmNsZVwiXTtcbiAgICBsZXQgZmVhdHVyZXM7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpLmxlbmd0aCA+IDUwKSB7XG4gICAgICBmZWF0dXJlcyA9ICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICAgIH0sIDIwMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9ICd7XCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiwgXCJmZWF0dXJlc1wiOiBbXX0nXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBzdHlsZURhdGE6IHt9LFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIHJhbmdlOiAwLFxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgZWRpdG9ySWQ6IDAsXG4gICAgICBhZGRDb21wb25lbnRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5zdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24oZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgbGV0IHNpemUgPSBmYWxzZTtcbiAgICAgIGxldCByZXR1cm5TdHlsZSA9IFtdO1xuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgIHNpemUgPSBmZWF0dXJlcy5sZW5ndGg7XG4gICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlc1swXTtcbiAgICAgIH1cbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSkge1xuICAgICAgICByZXR1cm5TdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlcyAmJiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0pIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLmdldFN0eWxlRnVuY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuU3R5bGVbMF0gJiYgZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgnekluZGV4JykpIHtcbiAgICAgICAgcmV0dXJuU3R5bGVbMF0uc2V0WkluZGV4KGZlYXR1cmUuZ2V0KCd6SW5kZXgnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuU3R5bGVcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgIHRoaXMuZWRpdG9yTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogbmV3IFZlY3RvclNvdXJjZSh7Zm9ybWF0OiBuZXcgR2VvSlNPTigpfSksXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZUZ1bmN0aW9uXG4gICAgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpO1xuICAgIGxldCBhZGRMYXllciA9IHRydWU7XG4gICAgbGF5ZXJzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWRpdG9yTGF5ZXIpIHtcbiAgICAgICAgYWRkTGF5ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChhZGRMYXllcikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbi8vICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgY291bnRFZGl0b3JJZCAoKSB7XG4gICAgbGV0IG5ld0NvdW50ID0gdGhpcy5zdGF0ZS5lZGl0b3JJZCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0b3JJZDogbmV3Q291bnRcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q29uZmlndXJhdGlvbiAoaWQsIGZyb250ZW5kID0gdHJ1ZSkge1xuICAgIGxldCB1cmw7XG4gICAgaWYgKGZyb250ZW5kKSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZS9cIiArIGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVybCA9IFwiY29uNGdpcy9lZGl0b3JTZXJ2aWNlQmFja2VuZC9cIiArIGlkO1xuICAgIH1cblxuICAgIGZldGNoKHVybCkudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAoanNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25maWcoanNvbik7XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVDb25maWcgKGpzb24pIHtcbiAgICBmb3IgKGxldCBpIGluIGpzb24uZHJhd1N0eWxlcykge1xuICAgICAgaWYgKGpzb24uZHJhd1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tpXSA9IFtdO1xuICAgICAgICBsZXQgZHJhd1N0eWxlID0ganNvbi5kcmF3U3R5bGVzW2ldO1xuICAgICAgICBmb3IgKGxldCBqIGluIGRyYXdTdHlsZS5lbGVtZW50cykge1xuICAgICAgICAgIGlmIChkcmF3U3R5bGUuZWxlbWVudHMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZHJhd1N0eWxlLmVsZW1lbnRzW2pdO1xuICAgICAgICAgICAgdGhpcy5jb25maWdbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBjaGVja0xvY3N0eWxlID0gdGhpcy5hcnJMb2NzdHlsZXMuZmluZEluZGV4KChsb2NzdHlsZSkgPT4gbG9jc3R5bGUgPT09IGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tMb2NzdHlsZSA9PT0gLTEgJiYgZWxlbWVudC5zdHlsZUlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXJyTG9jc3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyh0aGlzLmFyckxvY3N0eWxlcywge1xuICAgICAgXCJkb25lXCI6IChzdHlsZURhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3R5bGVEYXRhOiBzdHlsZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVSZW5kZXIoKXtcbiAgICB0cnl7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlcy5sZW5ndGggPiA1MCkge1xuICAgICAgICAvLyByZXBsYWNlIGh0bWwgc3BlY2lhbCBjaGFycyBpbiBnZW9qc29uIHN0cmluZ1xuICAgICAgICB0aGlzLnN0YXRlLmZlYXR1cmVzID0gdGhpcy5zdGF0ZS5mZWF0dXJlcy5yZXBsYWNlQWxsKCcmIzM0OycsICdcIicpO1xuXG4gICAgICAgIHRoaXMubGlua0lucHV0KCk7XG4gICAgICAgIGxldCBnZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gbmV3IEdlb0pTT04oe1xuICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgIH0pLnJlYWRGZWF0dXJlcyhnZW9qc29uKTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGlmIChmZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgbGV0IGpzb25GZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgICBpZiAoanNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkge1xuICAgICAgICAgICAgICBqc29uRmVhdHVyZS5zZXRHZW9tZXRyeShuZXcgQ2lyY2xlKGpzb25GZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwganNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc291cmNlLmFkZEZlYXR1cmUoanNvbkZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yYW5nZSkge1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIGxldCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgICAgbGV0IHN0YXJ0Q29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuY2hpbGROb2Rlc1swXSB8fCByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0Q29udGFpbmVyLCB0aGlzLnN0YXRlLnJhbmdlKTtcbiAgICAgIHJhbmdlLnNldEVuZChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VKU09OKGV2ZW50KSB7XG4gICAgbGV0IHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuc3RhcnRPZmZzZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZXM6IGV2ZW50LnRhcmdldC5pbm5lclRleHQsIHJhbmdlOiByYW5nZX0sICgpID0+IHtcbiAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgYWRkRmVhdHVyZSAoZmVhdHVyZSkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG5cbiAgICBhcnJGZWF0dXJlcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0sICgpID0+IHt0aGlzLmxpbmtJbnB1dCgpfSk7XG4gIH1cblxuICByZW1vdmVGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGZlYXR1cmVJZCA9IGFyckZlYXR1cmVzLmZlYXR1cmVzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucHJvcGVydGllcy5lZGl0b3JJZCA9PT0gZWRpdG9ySWQ7XG4gICAgfSk7XG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmVJZCwgMSk7XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkoYXJyRmVhdHVyZXMsIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX3JlbW92ZSwgZ2VvanNvbik7XG4gIH1cblxuICBtb2RpZnlGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBvYmpHZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBvYmpHZW9qc29uLmZlYXR1cmVzO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIG9iakdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUlkXSA9IGdlb2pzb247XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkob2JqR2VvanNvbiwgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG5cbiAgbGlua0lucHV0ICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmIHRoaXMuc3RhdGUuZmVhdHVyZXMubGVuZ3RoID4gNTApIHtcbiAgICAgICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwodGhpcy5zdGF0ZS5mZWF0dXJlcyk7IC8vbGluayB0byBpbnB1dEZpZWxkXG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQ29tcHMoY29uc3RzdHIsIGNvbmZpZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICBjb25zdHN0cjogY29uc3RzdHJcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFkZENvbXBzO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnN0c3RyKSB7XG4gICAgICBhZGRDb21wcyA9IDx0aGlzLnN0YXRlLmNvbnN0c3RyIGNvbmZpZz17dGhpcy5zdGF0ZS5jb25maWd9IGdldD17Z2V0fSB0cmFuc2Zvcm09e3RyYW5zZm9ybX0gdG9TdHJpbmdIRE1TPXt0b1N0cmluZ0hETVN9IHNvdXJjZT17dGhpcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKX0gZm9ybWF0PXtuZXcgR2VvSlNPTigpfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1lZGl0b3ItY29udGFpbmVyLXJpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVESVRPUn0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfRURJVE9SfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBcInNlbGVjdFwiIHx8IChzY29wZS5jb25maWdbZWxlbWVudF0gJiYgc2NvcGUuY29uZmlnW2VsZW1lbnRdLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgIGxldCB0aXRsZSA9IHNjb3BlLmxhbmdDb25zdGFudHNbXCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfXCIgKyBlbGVtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1cIiArIGVsZW1lbnQgKyBcIiAgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RWRpdG9yVmlldyBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12aWV3XCJ9IHN0eWxlRnVuY3Rpb249e3RoaXMuc3R5bGVGdW5jdGlvbn0gbW9kZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZX0gc3R5bGVEYXRhPXt0aGlzLnN0YXRlLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM9e3RoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdID8gdGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV06IFtdfSBhY3RpdmU9e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM9e3RoaXMuZmVhdHVyZXN9IGVkaXRvclZhcnM9e3RoaXMucHJvcHMuY29uZmlnLmVkaXRvclZhcnN9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlRmVhdHVyZX0gbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlGZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICBhZGRGZWF0dXJlPXt0aGlzLmFkZEZlYXR1cmV9IGVkaXRvckxheWVyPXt0aGlzLmVkaXRvckxheWVyfSBlZGl0b3JJZD17dGhpcy5zdGF0ZS5lZGl0b3JJZH0gY291bnRFZGl0b3JJZD17dGhpcy5jb3VudEVkaXRvcklkfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWF0dXJlcz17dGhpcy51cGRhdGVGZWF0dXJlc30gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBlZGl0b3I9e3RoaXN9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWNvbnRlbnRcIn0gc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgIDxwcmUgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzdHlsZT17e292ZXJmbG93WTogXCJzY3JvbGxcIiwgb3ZlcmZsb3dYOiBcIm5vbmVcIn19IHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17dHJ1ZX0gb25JbnB1dD17dGhpcy5jaGFuZ2VKU09OfT57dGhpcy5zdGF0ZS5mZWF0dXJlc308L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthZGRDb21wc31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZQcm9wcy5vcGVuICYmICF0aGlzLnByb3BzLm9wZW4pIHx8IChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSkge1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4vLyAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfY29tcG9uZW50cyAmJiB3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2NvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9jb21wb25lbnRzLCB7Y29tcDogdGhpcywgY29udGFpbmVyOiBcIiNjNGctZWRpdG9yLXBvcnRhbFwifSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInByb2plY3RFZGl0b3JMYW5nIiwiZXhwb3J0cyIsIkxBTkciLCJNRVRBREFUQV9FRElUIiwiRFVQTElDQVRFX0VMRU1FTlQiLCJESVNQTEFDRV9FTEVNRU5UIiwiRFVQTElDQVRFX0FORF9ERUxFVEUiLCJDSE9PU0VfUFJPSkVDVCIsIkVESVRPUl9GRUFUVVJFX0RFTEVURV9IRUFETElORSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURV9RVUVTVElPTiIsIlJPVEFURV9FTEVNRU5UIiwiREVTRUxFQ1RfRUxFTUVOVCIsIlJFVkVSVF9FTEVNRU5UIiwiQ09ORklSTV9ERUxFVEVfQUxMIiwiQlVUVE9OX0RFU0VMRUNUX0FMTCIsIkJVVFRPTl9ERUxFVEVfQUxMIiwiQlVUVE9OX0RJU1BMQUNFX0FMTCIsIkJVVFRPTl9DT05GSVJNIiwiQlVUVE9OX0NBTkNFTCIsIkJVVFRPTl9DT1BZX0RJU1BMQUNFX0FMTCIsIkJVVFRPTl9UUkFOU0xBVEVfQUxMIiwiQlVUVE9OX0FQUExZX1RSQU5TTEFURSIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJDVFJMX0VESVRPUiIsIkVESVRPUl9BUElfRVJST1JfVElUTEUiLCJOT05FIiwiX2M0Z01hcHNDb25zdGFudEkxOG5EZSIsInJlcXVpcmUiLCJfYzRnTWFwc0NvbnN0YW50STE4bkVuIiwiX2M0Z0VkaXRvckkxOG5EZSIsIm1hcHNMYW5nIiwibWFwRGF0YSIsImxhbmciLCJsYW5nQ29uc3RhbnRzR2VybWFuIiwibGFuZ0NvbnN0YW50c0VuZ2xpc2giLCJnZXRFZGl0b3JMYW5ndWFnZSIsImxhbmdDb25zdGFudHMiLCJqUXVlcnkiLCJleHRlbmQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9jNGdFZGl0b3JJMThuIiwiX2NvbnRyb2wiLCJfbGF5ZXIiLCJfZm9ybWF0IiwiX2ludGVyYWN0aW9uIiwiX3NvdXJjZSIsIl9vbCIsIl9nZW9tIiwiX2M0Z01hcHNVdGlscyIsIl9zdHlsZSIsIl9wcm9qIiwiX2Nvb3JkaW5hdGUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkVkaXRvclZpZXciLCJSZWFjdCIsImxhenkiLCJUaXRsZWJhciIsIkVkaXRvckNvbXBvbmVudCIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNsb3NlIiwiYmluZCIsIm9wZW4iLCJjb3VudEVkaXRvcklkIiwiYWRkRmVhdHVyZSIsInJlbW92ZUZlYXR1cmUiLCJtb2RpZnlGZWF0dXJlIiwiY2hhbmdlSlNPTiIsIm1hcENvbnRyb2xsZXIiLCJlZGl0b3IiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJkYXRhIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib24iLCJldmVudCIsImhpZGRlbiIsImVkaXRvckNvbnRhaW5lciIsImluY2x1ZGVzIiwic3RhdGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29uZmlnIiwiYXJyTG9jc3R5bGVzIiwiaGFuZGxlQ29uZmlnIiwiZ2V0Q29uZmlndXJhdGlvbiIsImZlRWRpdG9yUHJvZmlsZSIsImJlRWRpdG9yUHJvZmlsZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaXNPcGVuIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibW9kZXMiLCJmZWF0dXJlcyIsImlucHV0RmllbGQiLCIkIiwidmFsIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInJlUmVuZGVyIiwiY3VycmVudE1vZGUiLCJzdHlsZURhdGEiLCJyYW5nZSIsImVkaXRvcklkIiwiYWRkQ29tcG9uZW50cyIsInN0eWxlRnVuY3Rpb24iLCJmZWF0dXJlIiwicmVzb2x1dGlvbiIsInNpemUiLCJyZXR1cm5TdHlsZSIsImdldFN0eWxlIiwibG9jc3R5bGUiLCJwcm94eSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwic3R5bGUiLCJnZXRTdHlsZUZ1bmN0aW9uIiwic2V0WkluZGV4IiwiQ29sbGVjdGlvbiIsImVkaXRvckxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiVmVjdG9yU291cmNlIiwiZm9ybWF0IiwiR2VvSlNPTiIsIm1hcCIsImFkZExheWVyIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsImxheWVycyIsImdldExheWVycyIsImZvckVhY2giLCJhcnJheSIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsIm5ld0NvdW50IiwiaWQiLCJfdGhpczMiLCJmcm9udGVuZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIl90aGlzNCIsImRyYXdTdHlsZXMiLCJkcmF3U3R5bGUiLCJfbG9vcCIsImVsZW1lbnRzIiwiaiIsInB1c2giLCJjaGVja0xvY3N0eWxlIiwic3R5bGVJZCIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJyZXBsYWNlQWxsIiwibGlua0lucHV0IiwiZ2VvanNvbiIsIkpTT04iLCJwYXJzZSIsImZlYXR1cmVQcm9qZWN0aW9uIiwicmVhZEZlYXR1cmVzIiwiZ2V0U291cmNlIiwiZm9yRWFjaEZlYXR1cmUiLCJqc29uRmVhdHVyZSIsInNldEdlb21ldHJ5IiwiQ2lyY2xlIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydENvbnRhaW5lciIsImNoaWxkTm9kZXMiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZVJhbmdlIiwiYWRkUmFuZ2UiLCJfdGhpczUiLCJzdGFydE9mZnNldCIsIl90aGlzNiIsImFyckZlYXR1cmVzIiwic3RyaW5naWZ5IiwiX3RoaXM3IiwicHJvcGVydGllcyIsImZlYXR1cmVJZCIsInNwbGljZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJjNGdNYXBzSG9va3MiLCJob29rX2VkaXRvcl9yZW1vdmUiLCJfdGhpczgiLCJvYmpHZW9qc29uIiwic2V0QWRkQ29tcHMiLCJjb25zdHN0ciIsInJlbmRlciIsImFkZENvbXBzIiwidHJhbnNmb3JtIiwidG9TdHJpbmdIRE1TIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhpZGVDb250YWluZXIiLCJoZWFkZXIiLCJjbG9zZUJ0blRpdGxlIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJDTE9TRSIsInRvVXBwZXJDYXNlIiwib25Nb3VzZVVwIiwibW9kZSIsImFjdGl2ZSIsImVkaXRvclZhcnMiLCJ1cGRhdGVGZWF0dXJlcyIsImRpc3BsYXkiLCJjb250ZW50RWRpdGFibGUiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvbklucHV0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjb21wb25lbnREaWRNb3VudCIsImhvb2tfZWRpdG9yX2NvbXBvbmVudHMiLCJjb21wIiwiY29udGFpbmVyIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==