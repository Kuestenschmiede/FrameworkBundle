(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-maps_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/c4g-baselayer-controller.js":
/*!*************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-baselayer-controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OSM_REL_ATTRIBUTION = exports.C4gBaselayerController = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gBaselayer = __webpack_require__(/*! ./c4g-baselayer */ "../MapsBundle/src/Resources/public/js/c4g-baselayer.js");
var _c4gOverlay = __webpack_require__(/*! ./c4g-overlay */ "../MapsBundle/src/Resources/public/js/c4g-overlay.js");
var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "../MapsBundle/src/Resources/public/js/c4g-maps-config.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "../MapsBundle/node_modules/ol/layer/Tile.js"));
var _TileJSON = _interopRequireDefault(__webpack_require__(/*! ol/source/TileJSON */ "../MapsBundle/node_modules/ol/source/TileJSON.js"));
var _source2 = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _VectorTile = _interopRequireDefault(__webpack_require__(/*! ol/source/VectorTile */ "../MapsBundle/node_modules/ol/source/VectorTile.js"));
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _Collection = _interopRequireDefault(__webpack_require__(/*! ol/Collection */ "../MapsBundle/node_modules/ol/Collection.js"));
var _OLCesium = _interopRequireDefault(__webpack_require__(/*! olcs/OLCesium */ "../MapsBundle/node_modules/olcs/lib/olcs/OLCesium.js"));
var _VectorTile2 = _interopRequireDefault(__webpack_require__(/*! ol/layer/VectorTile.js */ "../MapsBundle/node_modules/ol/layer/VectorTile.js"));
var _GeoImage = _interopRequireDefault(__webpack_require__(/*! ol-ext/source/GeoImage */ "../MapsBundle/node_modules/ol-ext/source/GeoImage.js"));
var _GeoTIFF = _interopRequireDefault(__webpack_require__(/*! ol/source/GeoTIFF */ "../MapsBundle/node_modules/ol/source/GeoTIFF.js"));
var _WebGLTile = _interopRequireDefault(__webpack_require__(/*! ol/layer/WebGLTile.js */ "../MapsBundle/node_modules/ol/layer/WebGLTile.js"));
var _Projection = _interopRequireDefault(__webpack_require__(/*! ol/proj/Projection */ "../MapsBundle/node_modules/ol/proj/Projection.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

// import {applyStyle} from 'ol-mapbox-style';

//copy link to add noopener
var OSM_REL_ATTRIBUTION = exports.OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
var C4gBaselayerController = exports.C4gBaselayerController = /*#__PURE__*/function () {
  function C4gBaselayerController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gBaselayerController);
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrBaselayers = {};
    this.baselayerIds = [];
    this.baseKeys = this.mapController.data.base_keys;
  }
  return (0, _createClass2["default"])(C4gBaselayerController, [{
    key: "loadBaseLayers",
    value: function loadBaseLayers() {
      var self;
      self = this;
      jQuery.ajax(this.proxy.api_baselayer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"
      }).done(function (data) {
        if (data.baselayer) {
          self.addBaseLayers(data.baselayer);
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_baselayer_loaded);
        }
        return true;
      }).fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?');
        self.mapController.spinner.hide();
        return false;
      }).always(function () {
        //self.mapController.spinner.hide();
      });
    } // end of "loadBaseLayers()"
  }, {
    key: "addBaseLayers",
    value: function addBaseLayers(baselayers) {
      var baselayer, uid, i, j;

      // build baselayer-list
      if (baselayers.length > 0) {
        for (i = 0; i < baselayers.length; i += 1) {
          baselayer = baselayers[i];
          uid = baselayer.id || _c4gMapsUtils.utils.getUniqueId();
          this.baselayerIds.push(uid);
          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = new _c4gBaselayer.C4gBaselayer(baselayer, this);
          }

          // @TODO: check initial baselayer-handling
          if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
            // check default from content/module (overrides profile settings)
            this.showBaseLayer(uid);
          } else if (this.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.default_baselayer, 10)) {
            // check default from profile
            this.showBaseLayer(uid);
          }
        }
      }
      if (!this.mapController.state.activeBaselayerId) {
        // no baselayer was activated
        if (baselayers.length > 0 && baselayers[0].id) {
          // take first baselayer if possible
          uid = baselayers[0].id;
        } else {
          // otherwise build default baselayer
          uid = 0;
          this.baselayerIds.push(uid);
          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = {
              id: 0,
              name: 'c4g_default',
              provider: 'osm',
              style: 'Mapnik'
            };
          }
        }
        this.showBaseLayer(uid);
      }
      this.proxy.baselayers_loaded = true;
      _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_loaded, this.baselayerIds);
    } // end of "addBaseLayers()"
  }, {
    key: "createBaseLayer",
    value: function createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs) {
      var newBaselayer = {};
      var source;
      layerOptions = layerOptions || {};
      if (window.isSecureContext) {
        layerOptions.crossOrigin = 'anonymous';
      }
      var cookie = 1;
      var mapData = this.mapController.data;
      if (mapData.cookie) {
        cookie = 0;
        var arrCoookies = document.cookie.split(";");
        for (var i in arrCoookies) {
          if (arrCoookies.hasOwnProperty(i)) {
            if (arrCoookies[i].indexOf(mapData.cookie.name) > -1) {
              //the cookies exists
              if (!mapData.cookie.value || arrCoookies[i].indexOf(mapData.cookie.value) > -1) {
                //no value provided or matching value
                cookie = 2;
              }
            }
          }
        }
      }
      var dummyUrl = '../../../' + this.mapController.data.dummyBaselayer;
      var dummySource = null;
      if (dummyUrl) {
        dummySource = new _source2.XYZ({
          url: dummyUrl
        });
      }
      if (dummySource && cookie === 0) {
        newBaselayer = new _Tile["default"]();
        newBaselayer.setSource(dummySource);
      } else {
        switch (baseLayerConfig.provider) {
          case 'custom':
            // custom
            var noUrl = true;
            if (baseLayerConfig.url) {
              layerOptions.url = baseLayerConfig.url;
              noUrl = false;
            } else if (baseLayerConfig.urls) {
              layerOptions.urls = baseLayerConfig.urls;
              noUrl = false;
            }
            if (baseLayerConfig.attribution) {
              layerOptions.attributions = baseLayerConfig.attribution;
            }
            if (!noUrl) {
              newBaselayer = new _Tile["default"]({
                source: new _source2.XYZ(layerOptions),
                extent: baseLayerConfig.extend
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }
            break;
          case 'osm':
            if (sourceConfigs.osm[baseLayerConfig.style]) {
              newBaselayer = new _Tile["default"]({
                source: new _source2.OSM(jQuery.extend(sourceConfigs.osm[baseLayerConfig.style], layerOptions))
              });
            } else if (baseLayerConfig.style === 'osm_custom') {
              // custom
              var _noUrl = true;
              if (baseLayerConfig.url) {
                layerOptions.url = baseLayerConfig.url;
                _noUrl = false;
              } else if (baseLayerConfig.urls) {
                layerOptions.urls = baseLayerConfig.urls;
                _noUrl = false;
              }
              if (!_noUrl) {
                newBaselayer = new _Tile["default"]({
                  source: new _source2.XYZ(layerOptions)
                });
              } else {
                console.warn('custom url(s) missing -> switch to default');
              }
            } else {
              console.warn('unsupported osm-style -> switch to default');
            }
            break;
          case 'stadiaMaps':
            var source1, source2;
            if (sourceConfigs.stadiaMaps[baseLayerConfig.style]) {
              if (baseLayerConfig.style === 'Watercolor') {
                newBaselayer = new _layer.Group({
                  layers: [new _Tile["default"](), new _Tile["default"]()]
                });
                source1 = new _source2.StadiaMaps({
                  layer: 'stamen_watercolor'
                });
                source2 = new _source2.StadiaMaps({
                  layer: 'stamen_terrain_labels'
                });
              } else {
                newBaselayer = new _Tile["default"]();
                source1 = new _source2.StadiaMaps(jQuery.extend(sourceConfigs.stadiaMaps[baseLayerConfig.style]));
              }
              source1.apiKey = baseLayerConfig.api_key;
              if (newBaselayer instanceof _layer.Group) {
                var array = newBaselayer.getLayers().getArray();
                array[0].setSource(source1);
                array[1].setSource(source2);
              } else {
                newBaselayer.setSource(source1);
              }
            } else {
              console.warn('unsupported osm-style -> switch to default');
            }
            break;
          case 'con4gisIo':
            if (this.baseKeys[baseLayerConfig.id]) {
              var _config = this.baseKeys[baseLayerConfig.id];
              layerOptions.url = baseLayerConfig.url.replace('{key}', _config['key']);
              layerOptions.attributions = _config.attribution + ' ' + layerOptions.attributions;
              var _source = new _source2.XYZ(layerOptions);
              newBaselayer = new _Tile["default"]();
              newBaselayer.setSource(_source);
            }
            break;
          case 'mapbox':
            if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {
              newBaselayer = new _Tile["default"]();
              if (baseLayerConfig.mapbox_type === 'Mapbox') {
                layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;
                source = new _source2.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions));
              } else {
                layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;
                source = new _source2.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions));
              }
              newBaselayer.setSource(source);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source2.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions))
              });
            } else {
              console.warn('wrong mapbox configuration!');
            }
            break;
          case 'mapz':
            newBaselayer = new _Tile["default"]();
            source = new _source2.XYZ(jQuery.extend(sourceConfigs.mapz, layerOptions));
            newBaselayer.setSource(source);
            break;
          case 'otm':
            newBaselayer = new _Tile["default"]();
            source = new _source2.XYZ(jQuery.extend(sourceConfigs.otm, layerOptions));
            newBaselayer.setSource(source);
            break;
          //ToDo rework
          case 'klokan':
            // if (baseLayerConfig.api_key && baseLayerConfig.klokan_type) {
            //
            //     if (baseLayerConfig.url.charAt(baseLayerConfig.url.length - 1) != '/') {
            //       baseLayerConfig.url = baseLayerConfig.url + '/';
            //     }
            //
            //     if (baseLayerConfig.klokan_type === 'OpenMapTiles') {
            //       layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf';
            //       newBaselayer = new VectorTileLayer({
            //         declutter: true, source: new VectorTileSource(jQuery.extend(
            //             sourceConfigs.klokan[baseLayerConfig.klokan_type],
            //             layerOptions))
            //       });
            //
            //       fetch(baseLayerConfig.url + 'styles/basic/style.json').then(function (response) {
            //         response.json().then(function (glStyle) {
            //           applyStyle(newBaselayer, glStyle, 'openmaptiles');
            //         });
            //       });
            //     } else {
            //       //layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf?key='+baseLayerConfig.api_key;
            //       newBaselayer = new TileLayer();
            //       source = new TileJSON({
            //         url: baseLayerConfig.url + 'maps/' + baseLayerConfig.klokan_type + '/?key=' + baseLayerConfig.api_key
            //       })
            //
            //       newBaselayer.setSource(source);
            //     }
            //   } else {
            console.warn('wrong klokan configuration!');
            //   }
            break;
          case 'here':
            if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {
              if (baseLayerConfig.style === 'normal') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'transit') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'pedestrian') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'terrain') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'satellite') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'hybrid') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              }
              source = new _source2.XYZ(jQuery.extend(sourceConfigs.here[baseLayerConfig.here_type], layerOptions));
              newBaselayer = new _Tile["default"]({
                preload: Infinity
              });
              newBaselayer.setSource(source);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source2.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.here_type], layerOptions))
              });
            } else {
              console.warn('wrong HERE configuration!');
            }
            break;
          case 'thunder':
            if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {
              if (baseLayerConfig.style) {
                layerOptions.url = "https://tile.thunderforest.com/" + baseLayerConfig.style + "/{z}/{x}/{y}.png?apikey=" + baseLayerConfig.api_key;
              }
              newBaselayer = new _Tile["default"]();
              source = new _source2.XYZ(jQuery.extend(sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type], layerOptions));
              newBaselayer.setSource(source);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source2.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.thunderforest_type], layerOptions))
              });
            } else {
              console.warn('wrong Thunderforest configuration!');
            }
            break;
          case 'google':
            //@todo
            console.warn('google-maps are currently unsupported');
            break;
          case 'bing':
            if (baseLayerConfig.api_key && baseLayerConfig.style) {
              newBaselayer = new _Tile["default"]();
              source = new _source2.BingMaps({
                culture: navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
                key: baseLayerConfig.api_key,
                imagerySet: baseLayerConfig.style
              });
              newBaselayer.setSource(source);
            } else {
              console.warn('wrong bing-key or invalid imagery-set!');
            }
            break;
          case 'wms':
            if (baseLayerConfig.url.indexOf('https') !== -1) {
              newBaselayer = new _Tile["default"]({
                source: new _source2.TileWMS({
                  url: baseLayerConfig.url,
                  params: {
                    LAYERS: baseLayerConfig.params.layers,
                    VERSION: baseLayerConfig.params.version,
                    //FORMAT: baseLayerConfig.params.format,
                    TRANSPARENT: baseLayerConfig.params.transparent
                  },
                  gutter: baseLayerConfig.gutter,
                  attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION,
                  crossOrigin: 'anonymous'
                })
                //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
              });
            } else {
              newBaselayer = new _Tile["default"]({
                source: new _source2.TileWMS({
                  url: baseLayerConfig.url,
                  params: {
                    LAYERS: baseLayerConfig.params.layers,
                    VERSION: baseLayerConfig.params.version,
                    //FORMAT: baseLayerConfig.params.format,
                    TRANSPARENT: baseLayerConfig.params.transparent
                  },
                  gutter: baseLayerConfig.gutter,
                  attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
                })
                //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
              });
            }
            break;
          case 'image':
            var projection = new _Projection["default"]({
              code: 'image',
              units: 'pixels',
              extent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080]
            });
            newBaselayer = new _layer.Image({
              source: new _source2.ImageStatic({
                url: baseLayerConfig.imageSrc,
                imageExtent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080],
                projection: projection
              })
            });
            // const self = this;
            // setTimeout(function(){
            //   self.mapController.map.getView().setCenter(ol.extent.getCenter(baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 886, 435]));
            //   self.mapController.map.getView().setZoom(18);
            //   }, 3000);

            break;
          case 'geoimage':
            var imageSource = JSON.parse(baseLayerConfig.geoImageJson);
            imageSource.url = baseLayerConfig.imageSrc ? baseLayerConfig.imageSrc : arrSource.url;
            newBaselayer = new _layer.Image(jQuery.extend({
              source: new _GeoImage["default"](imageSource)
            }, layerOptions));
            break;
          case 'geotiff':
            // const tiffProjection = new Projection({
            //   code: 'EPSG:4326',
            //   units: 'm',
            // });

            var tiffSources = [{
              url: baseLayerConfig.imageSrc ? baseLayerConfig.imageSrc : '' /*,
                                                                            projection: tiffProjection*/
            }];
            newBaselayer = new _WebGLTile["default"](jQuery.extend({
              source: new _GeoTIFF["default"]({
                sources: tiffSources,
                nodata: 0 //without overviews
              })
            }, layerOptions));
            break;
          case 'owm':
            newBaselayer = new _Tile["default"]({
              source: new _source2.XYZ({
                url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
                attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
              })
              //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
            });
            break;
          case 'group':
            var baseLayerGroup = [];
            for (var index in baseLayerConfig['layerGroup']) {
              if (baseLayerConfig['layerGroup'].hasOwnProperty(index)) {
                var groupLayerOptions = {};
                groupLayerOptions = this.getAttributions(groupLayerOptions, baseLayerConfig['layerGroup'][index], sourceConfigs);
                var element = this.createBaseLayer(groupLayerOptions, baseLayerConfig['layerGroup'][index], sourceConfigs);
                var maxZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['minZoom']);
                var minZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['maxZoom']);
                element.setMinResolution(minZoom);
                element.setMaxResolution(maxZoom);
                baseLayerGroup.push(element);
              }
            }
            newBaselayer = new _layer.Group({
              layers: baseLayerGroup
            });
            break;
          default:
            console.warn('unsupported provider');
            break;
        }
      }
      if (baseLayerConfig['consentId']) {
        if (typeof klaro !== "undefined" && klaro.getManager && klaro.getManager()) {
          var manager = klaro.getManager();
          var watcher;
          if (newBaselayer instanceof _Tile["default"] || newBaselayer instanceof _WebGLTile["default"]) {
            source = newBaselayer.getSource();
            if (!manager.getConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setSource(dummySource);
            }
            watcher = {
              update: function update(watcher, action, consentStatus) {
                if (consentStatus[baseLayerConfig['consentId']]) {
                  newBaselayer.setSource(source);
                } else {
                  newBaselayer.setSource(dummySource);
                }
              }
            };
          } else if (newBaselayer instanceof _layer.Group) {
            var layers = newBaselayer.getLayers();
            if (!manager.getConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setLayers(new _Collection["default"]([new _Tile["default"]({
                source: dummySource
              })]));
            }
            watcher = {
              update: function update(watcher, action, consentStatus) {
                if (consentStatus[baseLayerConfig['consentId']]) {
                  newBaselayer.setLayers(layers);
                } else {
                  newBaselayer.setLayers(new _Collection["default"]([new _Tile["default"]({
                    source: dummySource
                  })]));
                }
              }
            };
          }
          manager.watch(watcher);
        } else if (typeof HofffConsentManager !== "undefined") {
          if (newBaselayer instanceof _Tile["default"] || newBaselayer instanceof _WebGLTile["default"]) {
            source = newBaselayer.getSource();
            HofffConsentManager.addEventListener('consent:accepted', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setSource(source);
              }
            });
            HofffConsentManager.addEventListener('consent:revoked', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setSource(dummySource);
              }
            });
            if (!HofffConsentManager.requiresConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setSource(dummySource);
            }
          } else if (newBaselayer instanceof _layer.Group) {
            var _layers = newBaselayer.getLayers();
            HofffConsentManager.addEventListener('consent:accepted', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setLayers(_layers);
              }
            });
            HofffConsentManager.addEventListener('consent:revoked', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setLayers(new _Collection["default"]());
              }
            });
            if (!HofffConsentManager.requiresConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setLayers(new _Collection["default"]());
            }
          }
        }
      }
      if (newBaselayer instanceof _Tile["default"] || newBaselayer instanceof _WebGLTile["default"]) {
        newBaselayer.setZIndex(-2);
      }
      return newBaselayer;
    }
  }, {
    key: "filterLayersForBaselayer",
    value: function filterLayersForBaselayer(baselayerId) {
      var arrLayers = this.proxy.layerController.arrLayers;
      for (var id in arrLayers) {
        if (arrLayers.hasOwnProperty(id)) {
          var layer = arrLayers[id];
          if (layer) {
            var showLayer = false;
            if (layer.activeForBaselayers === "all" || layer.renderSpecial) {
              continue;
            } else {
              if (layer.activeForBaselayers) {
                showLayer = !!layer.activeForBaselayers.includes(baselayerId);
              }
            }
            if (showLayer) {
              arrLayers[id].display = true;
              this.proxy.layerController ? this.proxy.layerController.show(id) : '';
            } else {
              arrLayers[id].display = false;
              this.proxy.layerController ? this.proxy.layerController.hide(id) : '';
            }
          }
        }
      }
      // let starboard = this.proxy.options.mapController.controls.starboard;
      // if (this.proxy.options.mapController.data.layerswitcher.enable) {
      //   if (starboard && starboard.initialized) {
      //     if (!starboard.plugins.layerswitcher) {
      //       starboard.plugins.layerswitcher = new Layerswitcher(starboard);
      //     }
      //     starboard.plugins.layerswitcher.loadContent();
      //     // starboard.plugins.layerswitcher.activate();
      //   }
      // }
    }
  }, {
    key: "getAttributions",
    value: function getAttributions(layerOptions, baseLayerConfig, sourceConfigs) {
      var i;
      if (baseLayerConfig.attribution) {
        if (layerOptions.attributions) {
          layerOptions.attributions = layerOptions.attributions + ' ' + baseLayerConfig.attribution;
        } else {
          layerOptions.attributions = OSM_REL_ATTRIBUTION + ' ' + baseLayerConfig.attribution;
        }
      } else if (!layerOptions.attributions) {
        switch (baseLayerConfig.provider) {
          case 'osm':
            if (sourceConfigs.osm[baseLayerConfig.style]) {
              layerOptions.attributions = sourceConfigs.osm[baseLayerConfig.style].attributions;
            } else {
              layerOptions.attributions = OSM_REL_ATTRIBUTION;
            }
            break;
          case 'stadiaMaps':
            layerOptions.attributions = sourceConfigs.stadiaMaps[baseLayerConfig.style].attributions;
            break;
          case 'mapbox':
            layerOptions.attributions = sourceConfigs.mapbox[baseLayerConfig.mapbox_type].attributions;
            break;
          case 'mapz':
            layerOptions.url = baseLayerConfig.url;
            layerOptions.attributions = sourceConfigs.mapz.attributions;
            break;
          case 'otm':
            layerOptions.url = baseLayerConfig.url;
            layerOptions.attributions = sourceConfigs.otm.attributions;
            break;
          case 'klokan':
            layerOptions.attributions = sourceConfigs.klokan[baseLayerConfig.klokan_type].attributions;
            break;
          case 'here':
            layerOptions.attributions = sourceConfigs.here[baseLayerConfig.here_type].attributions;
            break;
          case 'thunder':
            layerOptions.attributions = sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type].attributions;
            break;
          case 'geoimage':
            break;
          case 'geotiff':
            break;
          case 'con4gisIo':
            layerOptions.attributions = OSM_REL_ATTRIBUTION;
            break;
          default:
            layerOptions.attributions = OSM_REL_ATTRIBUTION;
            break;
        }
      }

      //ToDo helper class for attributions

      //additional attribution
      if (this.mapController.data && this.mapController.data.attribution && this.mapController.data.attribution.additional) {
        if (layerOptions.attributions) {
          var additionalAttribution = this.mapController.data.attribution.additional;
          exists = false;
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === additionalAttribution) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + additionalAttribution;
          }
        } else {
          layerOptions.attributions = this.mapController.data.attribution.additional;
        }
      }

      //ToDo type class for geosearch_engine
      //geosearch attribution
      if (this.mapController.data.geosearch) {
        if (this.mapController.data && this.mapController.data.attribution) {
          var geosearchAttribution = this.mapController.data.attribution.geosearch ? this.mapController.data.attribution.geosearch : "";
          var exists = false;
          if (!layerOptions.attributions) {
            layerOptions.attributions = [];
          }
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === geosearchAttribution) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + geosearchAttribution;
          } else {
            layerOptions.attributions = geosearchAttribution;
          }
          var routerAttribution = this.mapController.data.attribution.router ? " - " + this.mapController.data.attribution.router : "";
          var exists = false;
          if (!layerOptions.attributions) {
            layerOptions.attributions = [];
          }
          for (i = 0; i < layerOptions.attributions.length; i += 1) {
            if (layerOptions.attributions[i] === routerAttribution) {
              exists = true;
              break;
            }
          }
          if (!exists) {
            layerOptions.attributions = layerOptions.attributions + ' ' + routerAttribution;
          } else {
            layerOptions.attributions = routerAttribution;
          }
        }
      }
      return layerOptions;
    }
  }, {
    key: "showBaseLayer",
    value: function showBaseLayer(baseLayerUid) {
      var self = this,
        layers,
        baselayer,
        addBaselayer,
        baseLayers,
        sourceConfigs = [],
        newBaselayer,
        layerOptions,
        i,
        view;
      var baseLayerConfig = this.arrBaselayers[baseLayerUid];
      if (this.proxy.layers_loaded) {
        this.filterLayersForBaselayer(baseLayerUid);
      } else {
        this.proxy.hook_layer_loaded.push(function () {
          self.filterLayersForBaselayer(baseLayerUid);
        });
      }
      if (typeof baseLayerConfig !== "undefined" && !baseLayerConfig.layer) {
        // create layer
        sourceConfigs.osm = _c4gMapsConfig.config.osm;
        sourceConfigs.stadiaMaps = _c4gMapsConfig.config.stadiaMaps;
        sourceConfigs.otm = _c4gMapsConfig.config.otm;
        //mapQuestSourceConfigs = c4g.maps.config.mapquest;
        sourceConfigs.mapbox = _c4gMapsConfig.config.mapbox;
        sourceConfigs.mapz = _c4gMapsConfig.config.mapz;
        sourceConfigs.klokan = _c4gMapsConfig.config.klokan;
        sourceConfigs.here = _c4gMapsConfig.config.here;
        sourceConfigs.thunderforest = _c4gMapsConfig.config.thunderforest;

        //newBaselayer = new TileLayer({
        //  source: new OSM()
        //});

        layerOptions = {};
        layerOptions = this.getAttributions(layerOptions, baseLayerConfig, sourceConfigs);
        if (baseLayerConfig.sorting) {
          layerOptions.sort = baseLayerConfig.sorting;
        }
        if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
          layerOptions.minZoom = baseLayerConfig.minZoom;
        }
        if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
          layerOptions.maxZoom = baseLayerConfig.maxZoom;
        }
        newBaselayer = this.createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs);
        if (baseLayerConfig.hasOverlays) {
          for (i = 0; i < baseLayerConfig.overlays.length; i++) {
            if (!baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id]) {
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id] = new _c4gOverlay.C4gOverlay(baseLayerConfig.overlays[i], this.mapController);
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id].layer = baseLayerConfig.overlayController.showOverlayLayer(baseLayerConfig.overlays[i].id);
            }
          }
        }
        this.arrBaselayers[baseLayerUid].layer = newBaselayer;
      } else if (typeof baseLayerConfig === "undefined") {
        console.log("config " + baseLayerUid + " not found");
        return;
      }

      // // deactivate old overlays
      if (this.mapController.state.activeBaselayerId && this.mapController.state.activeBaselayerId !== baseLayerUid) {
        var oldBaselayer = this.arrBaselayers[this.mapController.state.activeBaselayerId];
        if (oldBaselayer.overlayController && oldBaselayer.overlayController.arrOverlays && oldBaselayer.overlayController.arrOverlays.length > 0) {
          for (var key in oldBaselayer.overlayController.arrOverlays) {
            if (oldBaselayer.overlayController.arrOverlays.hasOwnProperty(key) && key !== "length") {
              var overlay = oldBaselayer.overlayController.arrOverlays[key];
              overlay.changeOpacity(0);
            }
          }
        }
      }
      // activate current overlays
      baselayer = this.arrBaselayers[baseLayerUid];
      if (baselayer.overlayController && baselayer.overlayController.arrOverlays && baselayer.overlayController.arrOverlays.length > 0) {
        for (var _key in baselayer.overlayController.arrOverlays) {
          if (baselayer.overlayController.arrOverlays.hasOwnProperty(_key) && _key !== "length") {
            var _overlay = baselayer.overlayController.arrOverlays[_key];
            _overlay.changeOpacity(_overlay.opacity);
          }
        }
      }
      layers = this.mapController.map.getLayers();

      // secure
      if (layers.item(0).get('checkSum') === "baseMapsLayer") {
        baseLayers = layers.item(0).getLayers();
        if (typeof this.arrBaselayers[baseLayerUid] !== "undefined") {
          baselayer = this.arrBaselayers[baseLayerUid].layer;
          if (baselayer) {
            addBaselayer = true;
            baseLayers.forEach(function (element, index, array) {
              if (element && element === baselayer) {
                element.setVisible(true);
                addBaselayer = false;
              } else if (element) {
                element.setVisible(false);
              } else {
                addBaselayer = false;
              }
            }, this);
            if (addBaselayer) {
              baseLayers.push(baselayer);
            }
          }
          view = this.mapController.map.getView();
          var zoom = view.getZoom();
          var center = view.getCenter();
          if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0 || baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
            if (baseLayerConfig.minZoom && view.getZoom() < baseLayerConfig.minZoom) {
              view.setZoom(baseLayerConfig.minZoom);
            } else if (baseLayerConfig.maxZoom && view.getZoom() > baseLayerConfig.maxZoom) {
              view.setZoom(baseLayerConfig.maxZoom);
            }
            var mapData = this.mapController.data;
            // if (mapData.zoomlevel || mapData.mouseposition) {
            view.setMinZoom(parseInt(baseLayerConfig.minZoom, 10) || 0);
            view.setMaxZoom(parseInt(baseLayerConfig.maxZoom, 10) || 19);
            this.mapController.map.setView(view);
            // }
          }
        }
      }
      if (typeof baseLayerConfig !== "undefined") {
        this.mapController.setBaselayerId(baseLayerConfig.id);
        _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_visibility, baseLayerConfig);

        /**
         * Cesium integration
         */
        if (typeof baseLayerConfig !== "undefined") {
          var mapData = this.mapController.data;
          if (mapData.cesium && mapData.cesium.enable && (mapData.cesium.always || baseLayerConfig.cesium)) {
            if (!this.ol3d) {
              this.ol3d = new _OLCesium["default"]({
                map: this.mapController.map,
                createSynchronizers: false /*,
                                           time() {
                                           const val = timeElt.value;
                                           if (ol3d.getCesiumScene().globe.enableLighting && val) {
                                           const d = new Date();
                                           d.setUTCHours(val);
                                           return Cesium.JulianDate.fromDate(d);
                                           }
                                           return Cesium.JulianDate.now();
                                           }*/
              });
            }
            /*const scene = ol3d.getCesiumScene();
            const terrainProvider = new Cesium.CesiumTerrainProvider({
                url: '//assets.agi.com/stk-terrain/world',
                requestVertexNormals: true
            });
            scene.terrainProvider = terrainProvider;*/
            this.ol3d.setEnabled(true);
            /*window['toggleTime'] = function() {
                scene.globe.enableLighting = !scene.globe.enableLighting;
                if (timeElt.style.display == 'none') {
                    timeElt.style.display = 'inline-block';
                } else {
                    timeElt.style.display = 'none';
                }
            };*/

            if (!jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
              jQuery(".c4g-control-container-top-left").addClass("c4g-cesium-enabled");
            }
          } else {
            if (this.ol3d && this.ol3d.getEnabled()) {
              this.ol3d.setEnabled(false);
            }
            if (jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
              jQuery(".c4g-control-container-top-left").removeClass("c4g-cesium-enabled");
            }
          }
        }
      }
    } // end of "showBaseLayer()"
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-baselayer.js":
/*!**************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-baselayer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gBaselayer = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _c4gOverlayController = __webpack_require__(/*! ./c4g-overlay-controller */ "../MapsBundle/src/Resources/public/js/c4g-overlay-controller.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gBaselayer = exports.C4gBaselayer = /*#__PURE__*/(0, _createClass2["default"])(function C4gBaselayer(baselayerArr, controller) {
  (0, _classCallCheck2["default"])(this, C4gBaselayer);
  this.id = baselayerArr['id'];
  this.pid = baselayerArr['pid'];
  this.name = baselayerArr['name'];
  this.display_name = baselayerArr['display_name'];
  this.provider = baselayerArr['provider'];
  this.osm_style = baselayerArr['osm_style'];
  this.osm_style_url1 = baselayerArr['osm_style_url1'];
  this.osm_style_url2 = baselayerArr['osm_style_url2'];
  this.osm_style_url3 = baselayerArr['osm_style_url3'];
  this.osm_style_url4 = baselayerArr['osm_style_url4'];
  this.osm_keyname = baselayerArr['osm_keyname'];
  this.mapbox_type = baselayerArr['mapbox_type'];
  this.bing_style = baselayerArr['bing_style'];
  this.style = baselayerArr['style'];
  this.attribution = baselayerArr['attribution'];
  this.infopage = baselayerArr['infopage'];
  this.params = baselayerArr['params'];
  this.wms_gutter = baselayerArr['wms_gutter'];
  this.minZoom = baselayerArr['minZoom'];
  this.maxZoom = baselayerArr['maxZoom'];
  this.protect_baselayer = baselayerArr['protect_baselayer'];
  this.permitted_groups = baselayerArr['permitted_groups'];
  this.api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
  this.app_id = baselayerArr['app_id'];
  this.thunderforest_type = baselayerArr['thunderforest_type'];
  this.here_type = baselayerArr['here_type'];
  this.cesium = baselayerArr['cesium'];
  this.hide_in_be = baselayerArr['hide_in_be'];
  this.url = baselayerArr['url'];
  this.urls = baselayerArr['urls'];
  this.klokan_type = baselayerArr['klokan_type'];
  this.style_url = baselayerArr['style_url'];
  this.hasOverlays = baselayerArr['hasOverlays'];
  this.overlays = baselayerArr['overlays'];
  this.imageSrc = baselayerArr['image_src'];
  this.geoImageJson = baselayerArr['geoimage_json'];
  this.preview_image = baselayerArr['preview_image'];
  if (baselayerArr['layerGroup']) {
    var layerGroup = [];
    for (var index in baselayerArr['layerGroup']) {
      if (baselayerArr['layerGroup'].hasOwnProperty(index)) {
        layerGroup[index] = new C4gBaselayer(baselayerArr['layerGroup'][index]['entry']);
        layerGroup[index]['minZoom'] = baselayerArr['layerGroup'][index]['minZoom'];
        layerGroup[index]['maxZoom'] = baselayerArr['layerGroup'][index]['maxZoom'];
      }
    }
    this.layerGroup = layerGroup;
  }
  this.consentId = baselayerArr['consentId'] ? baselayerArr['consentId'] : false;
  this.overlayController = new _c4gOverlayController.C4gOverlayController(this);
  this.layer = false;
  this.controller = controller;
});

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-layer-controller.js":
/*!*********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-layer-controller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BetterLayerController = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _OSMXML = _interopRequireDefault(__webpack_require__(/*! ol/format/OSMXML */ "../MapsBundle/node_modules/ol/format/OSMXML.js"));
var _GML = _interopRequireDefault(__webpack_require__(/*! ol/format/GML3 */ "../MapsBundle/node_modules/ol/format/GML3.js"));
var _GML2 = _interopRequireDefault(__webpack_require__(/*! ol/format/GML32 */ "../MapsBundle/node_modules/ol/format/GML32.js"));
var _GML3 = _interopRequireDefault(__webpack_require__(/*! ol/format/GML2 */ "../MapsBundle/node_modules/ol/format/GML2.js"));
var _loadingstrategy = __webpack_require__(/*! ol/loadingstrategy */ "../MapsBundle/node_modules/ol/loadingstrategy.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var olFormats = _interopRequireWildcard(__webpack_require__(/*! ol/format */ "../MapsBundle/node_modules/ol/format.js"));
var _proj2 = _interopRequireDefault(__webpack_require__(/*! proj4 */ "../MapsBundle/node_modules/proj4/lib/index.js"));
var _proj3 = __webpack_require__(/*! ol/proj/proj4 */ "../MapsBundle/node_modules/ol/proj/proj4.js");
var _Projection = _interopRequireDefault(__webpack_require__(/*! ol/proj/Projection */ "../MapsBundle/node_modules/ol/proj/Projection.js"));
var _Collection = _interopRequireDefault(__webpack_require__(/*! ol/Collection */ "../MapsBundle/node_modules/ol/Collection.js"));
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "../MapsBundle/node_modules/ol/Feature.js"));
var olExtent = _interopRequireWildcard(__webpack_require__(/*! ol/extent */ "../MapsBundle/node_modules/ol/extent.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var olFormat = jQuery.extend({
  OSMXML: _OSMXML["default"],
  GML2: _GML3["default"],
  GML32: _GML2["default"],
  GML3: _GML["default"]
}, olFormats);
var BetterLayerController = exports.BetterLayerController = /*#__PURE__*/function () {
  function BetterLayerController(proxy) {
    (0, _classCallCheck2["default"])(this, BetterLayerController);
    this.handleZoom = this.handleZoom.bind(this);
    var scope = this;
    this.proxy = proxy;
    this.loaders = [];
    this.controllers = {};
    this.arrLocstyles = [];
    this.objIds = {};
    this.currentZoomLevel = 0;
    this.extent = {
      maxX: -Infinity,
      maxY: -Infinity,
      minX: Infinity,
      minY: Infinity
    };
    this.mapController = proxy.options.mapController;
    this.vectorCollection = new _Collection["default"]();
    this.loaderFunction = function (extent, resolution, projection) {
      var _loop = function _loop() {
        if (scope.loaders.hasOwnProperty(i)) {
          var requestData = scope.loaders[i];
          if (!requestData.preventLoading) {
            if (!requestData.params && !requestData.url) {
              var responseFunc = function responseFunc(data) {
                var features = [];
                var layer = scope.objLayers.find(function (element) {
                  return element.id == requestData.layerId;
                }) || {};
                for (var _i = 0; _i < data.length; _i++) {
                  var contentData = data[_i];
                  var feature = scope.parseOwnData(contentData, layer);
                  features.push(feature);
                }
                scope.addFeatures(features, requestData.chain);
                scope.mapController.setObjLayers(scope.arrLayers);
              };
              scope.performOwnData(requestData, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              }, responseFunc);
            } else {
              var layer = scope.objLayers.find(function (element) {
                return element.id == requestData.layerId;
              }) || {};
              scope.performOvp({
                "url": requestData.url,
                "params": requestData.params,
                "locstyleId": requestData.locstyle,
                "chain": requestData.chain,
                "layer": layer
              }, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              });
            }
          } else {
            requestData.arrExtents.push(extent);
          }
        }
      };
      for (var i in scope.loaders) {
        _loop();
      }
    };
    this.vectorSource = new _source.Vector({
      features: this.vectorCollection,
      loader: this.loaderFunction,
      strategy: _loadingstrategy.bbox
    });
    this.vectorSources = [];
    this.clusterStyleFunction = function (feature, resolution) {
      var size = false;
      var returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        var features = feature.get('features');
        size = features.length;
        feature = features[0];
      }
      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      } else if (feature && feature.get && feature.get('locstyle')) {
        var _locstyle = feature.get('locstyle');
        if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[_locstyle]) {
          if (!scope.proxy.locationStyleController.arrLocStyles[_locstyle].style) {
            scope.proxy.locationStyleController.arrLocStyles[_locstyle].style = scope.proxy.locationStyleController.arrLocStyles[_locstyle].getStyleFunction();
          }
          var style = scope.proxy.locationStyleController.arrLocStyles[_locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.proxy.locationStyleController.arrLocStyles[_locstyle].style;
          }
        }
      }
      if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
        var zIndex = 0;
        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          zIndex += feature.get('zindex');
        }
        if (returnStyle[0] && returnStyle[0].setZIndex) {
          var geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();
          zIndex += 100 - geometry[1];
          returnStyle[0].setZIndex(zIndex);
        }
        var iconOffset = [0, 0];
        var scale = 1;
        if (returnStyle[0]) {
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
            var radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
            if (radius) {
              iconOffset = [-radius, radius];
            }
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
            iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
          }
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getScale() && returnStyle[0].getImage().getScale() !== 1) {
            scale = returnStyle[0].getImage().getScale();
            iconOffset = [iconOffset[0] * scale, iconOffset[1] * scale];
          }
          if (scope.proxy.mapData.cluster_fillcolor) {
            var countFeatures = scope.vectorCollection.getLength();
            // let scaleForCount = (size/countFeatures - 1/countFeatures) * 2;
            var scaleForCount = (size - 1) / countFeatures;
            scale += scaleForCount;
          }
        }
        var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(scope.proxy.mapData.cluster_fillcolor, {
          unit: '%',
          value: 70
        });
        var fontcolor = scope.proxy.mapData.cluster_fontcolor;
        if (feature.get('cluster_fillcolor')) {
          fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(feature.get('cluster_fillcolor'), {
            unit: '%',
            value: 70
          });
        }
        if (feature.get('cluster_fontcolor')) {
          fontcolor = feature.get('cluster_fontcolor');
        }
        fontcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(fontcolor);
        returnStyle.push(new _style.Style({
          text: new _style.Text({
            text: "●",
            font: "60px sans-serif",
            offsetX: -1 * iconOffset[0],
            offsetY: -1 * iconOffset[1],
            scale: scale,
            fill: new _style.Fill({
              color: fillcolor
            })
          }),
          zIndex: zIndex
        }));
        returnStyle.push(new _style.Style({
          text: new _style.Text({
            text: size.toString(),
            offsetX: -1 * iconOffset[0],
            offsetY: -1 * iconOffset[1] + 3,
            scale: scale,
            fill: new _style.Fill({
              color: fontcolor
            })
          }),
          zIndex: zIndex
        }));
        if (feature && feature.get("markLocstyle")) {
          var color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;
          var markFill = new _style.Fill({
            color: color
          });
          var _radius;
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            _radius = parseInt(returnStyle[0].getImage().getRadius());
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            _radius = returnStyle[0].getImage().getIcon().getSize();
            _radius = _radius[0];
          } else {
            _radius = 25;
          }
          var markStyle = new _style.Style({
            image: new _style.Circle({
              fill: markFill,
              radius: _radius
            }),
            fill: markFill
          });
          returnStyle.push(markStyle);
        }
      } else if (returnStyle && Array.isArray(returnStyle)) {
        var _zIndex = 0;
        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          _zIndex += feature.get('zindex');
        }
        if (returnStyle[0] && returnStyle[0].setZIndex) {
          var _geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();
          _geometry = typeof _geometry[0] == "number" ? _geometry : _geometry[0];
          _geometry = typeof _geometry[0] == "number" ? _geometry : _geometry[0];
          _zIndex += 100 - _geometry[1];
          returnStyle[0].setZIndex(_zIndex);
        }
        if (feature && feature.get("markLocstyle")) {
          var _color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;
          var _markFill = new _style.Fill({
            color: _color
          });
          var _radius2;
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            _radius2 = parseInt(returnStyle[0].getImage().getRadius());
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            _radius2 = returnStyle[0].getImage().getIcon().getSize();
            _radius2 = _radius2[0];
          } else {
            _radius2 = 25;
          }
          var _markStyle = new _style.Style({
            image: new _style.Circle({
              fill: _markFill,
              radius: _radius2
            }),
            fill: _markFill
          });
          returnStyle.push(_markStyle);
        }
      }
      return returnStyle;
    };
    if (this.mapController.data.cluster_all) {
      this.vectorSource = new _source.Cluster({
        source: this.vectorSource,
        geometryFunction: this.geometryFunction,
        distance: this.mapController.data.cluster_distance || 20
      });
    }
    this.vectorLayer = new _layer.Vector({
      source: this.vectorSource,
      zIndex: 10
    });
    this.vectorLayers = [];
    this.layerRequests = {};
    this.ovpKey = this.mapController.data.ovp_key;
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(this.handleZoom);
  }
  return (0, _createClass2["default"])(BetterLayerController, [{
    key: "hide",
    value: function hide(id, hideElement, layerId, layerKey) {
      var features, vectorLayer;
      if (Array.isArray(hideElement)) {
        features = hideElement;
      } else if (hideElement instanceof _layer.Vector) {
        vectorLayer = hideElement;
      } else {
        features = this.objIds[layerId];
      }
      if (features) {
        this.mapController.map.getView().dispatchEvent({
          type: "change:resolution"
        });
        if (id >= 0) {
          var loader = this.loaders[id];
          if (loader) {
            this.loaders[id].preventLoading = true;
            if (loader.request) {
              loader.request.abort();
            }
          }
        }
        if (features.length > 0) {
          for (var featureId in features) {
            if (features.hasOwnProperty(featureId)) {
              this.vectorCollection.remove(features[featureId]);
            }
          }
        }
      } else if (vectorLayer) {
        this.mapController.map.removeLayer(vectorLayer);
      }
    }
  }, {
    key: "show",
    value: function show(id, showElement, layerId, layerKey) {
      var features, vectorLayer;
      if (Array.isArray(showElement)) {
        features = showElement;
        this.currentZoomLevel++;
        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            if (this.mapController.filter) {
              features[i].set('zindex', this.currentZoomLevel);
              if (!!parseFloat(this.mapController.data.filterHandling)) {
                this.mapController.filter.hideFeatureMulti(features[i]);
              } else {
                this.mapController.filter.hideFeature(features[i]);
              }
            }
          }
        }
      } else if (showElement instanceof _layer.Vector) {
        vectorLayer = showElement;
        if (this.mapController.filter) {
          if (!!parseFloat(this.mapController.data.filterHandling)) {
            this.mapController.filter.filterLayerMulti(vectorLayer);
          } else {
            this.mapController.filter.filterLayer(vectorLayer);
          }
        }
      } else {
        features = this.objIds[layerId];
      }
      if (id >= 0 && this.loaders[id] && this.loaders[id].preventLoading) {
        this.loaders[id].preventLoading = false;
        for (var extentId in this.loaders[id].arrExtents) {
          if (this.loaders[id].arrExtents.hasOwnProperty(extentId) && this.vectorSource) {
            var extent = this.loaders[id].arrExtents[extentId];
            this.vectorSource.removeLoadedExtent(extent);
          }
        }
        this.loaders[id].arrExtents = [];
      }
      if (features) {
        for (var _i2 in features) {
          if (features.hasOwnProperty(_i2)) {
            var mapArr = this.vectorCollection.getArray();
            var found = false;
            for (var j in mapArr) {
              if (mapArr[j].ol_uid == features[_i2].ol_uid) {
                found = true;
              }
            }
            if (!found) {
              this.vectorCollection.push(features[_i2]);
            }
          }
        }
      } else if (vectorLayer) {
        this.mapController.map.addLayer(vectorLayer);
      }
    }
  }, {
    key: "zoomTo",
    value: function zoomTo(layer) {
      var _this = this;
      var extent;
      var features;
      if (layer.childs && layer.childs.length) {
        for (var i in layer.childs) {
          if (layer.childs.hasOwnProperty(i)) {
            extent = this.getChildsExtent(extent, layer.childs[i]);
          }
        }
      }
      if (!layer.features || layer.features.length === 0) {
        features = this.objIds[layer.id];
      } else {
        features = layer.features;
      }
      for (var _i3 in features) {
        if (features.hasOwnProperty(_i3)) {
          if (!extent) {
            extent = features[_i3].getGeometry().clone().getExtent();
          } else {
            extent = olExtent.extend(extent, features[_i3].getGeometry().clone().getExtent());
          }
        }
      }
      if (!extent) {
        return false;
      }
      var width = jQuery(".c4g-starboard-container").css('width');
      if (width) {
        width = width.split(".");
        width = Array.isArray(width) ? width[0] : width;
        width = parseInt(width) + 50;
      } else {
        width = 50;
      }
      var maxZoom = parseInt(this.proxy.mapData.starboard.maxZoom) || 22;
      if (features && features.length === 1) {
        var fnCallback = function fnCallback(bool) {
          if (bool) {
            window.setTimeout(function () {
              var extent = features[0].getGeometry().clone().getExtent();
              var pixel = _this.mapController.map.getPixelFromCoordinate([(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2]);
              var featuresAtPixel = _this.mapController.map.getFeaturesAtPixel(pixel, {
                hitTolerance: 10
              });
              if (featuresAtPixel && featuresAtPixel[0] && featuresAtPixel[0].get('features') && featuresAtPixel[0].get('features').length > 1) {
                var coords = featuresAtPixel[0].getGeometry().getCoordinates();
                // pixel = this.mapController.map.getPixelFromCoordinate(coords);
                _this.mapController.map.dispatchEvent({
                  type: "click",
                  pixel: pixel
                });
              }
            }, 100);
          }
        };
        this.mapController.map.getView().fit(extent, {
          padding: [50, width, 50, 50],
          duration: 500,
          maxZoom: maxZoom,
          callback: fnCallback
        });
      } else {
        this.mapController.map.getView().fit(extent, {
          padding: [50, width, 50, 50],
          duration: 500,
          maxZoom: maxZoom
        });
      }
      return true;
    }
  }, {
    key: "getChildsExtent",
    value: function getChildsExtent(extent, child) {
      if (child.childs && child.childs.length) {
        for (var i in child.childs) {
          if (child.childs.hasOwnProperty(i)) {
            extent = this.getChildsExtent(extent, child.childs[i]);
          }
        }
      }
      if (child.features && child.features.length) {
        for (var _i4 in child.features) {
          if (child.features.hasOwnProperty(_i4)) {
            if (!extent) {
              extent = child.features[_i4].getGeometry().clone().getExtent();
            } else {
              extent = olExtent.extend(extent, child.features[_i4].getGeometry().clone().getExtent());
            }
          }
        }
      } else {
        extent = this.getExtentForLayer(extent, child.key);
      }
      return extent;
    }
  }, {
    key: "getExtentForLayer",
    value: function getExtentForLayer(extent, layerKey) {
      var features = this.objIds[layerId];
      if (features && features.length) {
        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            if (!extent) {
              extent = features[i].getGeometry().getExtent();
            } else {
              extent = olExtent.extend(extent, features[i].getGeometry().getExtent());
            }
          }
        }
      }
      return extent;
    }
  }, {
    key: "setChildFeatureFlag",
    value: function setChildFeatureFlag(child, flag, value) {
      if (child.childs && child.childs.length) {
        for (var i in child.childs) {
          if (child.childs.hasOwnProperty(i)) {
            this.setChildFeatureFlag(child.childs[i], flag, value);
          }
        }
      }
      if (child.features && child.features.length) {
        for (var _i5 in child.features) {
          if (child.features.hasOwnProperty(_i5)) {
            child.features[_i5].set(flag, value);
          }
        }
      }
    }
  }, {
    key: "loadLayers",
    value: function loadLayers() {
      var self = this;
      if (this.proxy.mapId === 0) {
        window.setTimeout(function () {
          self.mapController.setLayersInitial([], []);
        }, 50);
        return false;
      }
      jQuery.ajax(this.proxy.api_layer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"
      }).done(function (data) {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_layer, data);
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.loaded, self.proxy);
        self.objLayers = data.layer;
        var structure = [];
        var features = [];
        var tabStructures = [];
        for (var _layerId in data.layer) {
          if (data.layer.hasOwnProperty(_layerId)) {
            if (data.layer[_layerId].type === "startab") {
              var newTab = [self.getStructureFromLayer(data.layer[_layerId], tabStructures.length)];
              newTab.awesomeIcon = data.layer[_layerId].awesomeicon;
              tabStructures.push(newTab);
            } else {
              var newChild = self.getStructureFromLayer(data.layer[_layerId], structure.length);
              if (newChild.hide_in_starboard) {
                structure = newChild.childs ? structure.concat(newChild.childs) : structure;
                features = newChild.features ? features.concat(newChild.features) : features;
              } else {
                structure.push(newChild);
              }
            }
          }
        }
        var arrStates = [];
        for (var structId in structure) {
          if (structure.hasOwnProperty(structId)) {
            arrStates.push(self.getInitialStates(structure[structId]));
            if (features) {
              features = features.concat(self.getFeaturesFromStruct(structure[structId]));
            }
          }
        }
        var tabStates = [];
        for (var _structId in tabStructures) {
          if (tabStructures.hasOwnProperty(_structId)) {
            tabStates.push(self.getInitialStates(tabStructures[_structId][0]));
          }
        }
        self.arrLayers = structure;
        self.proxy.locationStyleController.loadLocationStyles(self.arrLocstyles, {
          "done": function done(styleData) {
            self.mapController.setLocStyles(styleData, function () {
              window.setTimeout(function () {
                var getZoom = self.mapController.map.getView().getZoom();
                self.mapController.map.getView().setZoom(getZoom + 0.265);
                // self.mapController.map.getView().setZoom(getZoom);
              }, 100);
              window.setTimeout(function () {
                var getZoom = self.mapController.map.getView().getZoom();
                self.mapController.map.getView().setZoom(getZoom - 0.265);
              }, 300);
            });
          }
        });
        self.vectorCollection.extend(features);
        self.mapController.map.addLayer(self.vectorLayer);
        self.mapController.setLayersInitial(self.arrLayers, arrStates);
        self.mapController.setTabLayers(tabStructures, tabStates);
        if (self.proxy.mapData.calc_extent === "LOCATIONS" || self.proxy.mapData.calc_extent === "CENTERLOCS") {
          if (self.extent && !(self.extent.maxX === Infinity || self.extent.maxX === -Infinity)) {
            var view = self.mapController.map.getView();
            var padding = [parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10)];
            var extent = [self.extent.minX, self.extent.minY, self.extent.maxX, self.extent.maxY];
            if (self.proxy.mapData.calc_extent === "CENTERLOCS") {
              // ssss
              view.fit(extent, {
                maxZoom: self.mapController.data.center.zoom
              });
            } else {
              view.fit(extent, {
                padding: padding
              });
            }
          }
        }
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.layer_loaded, self);
        self.proxy.layers_loaded = true;
        return true;
      }).fail(function () {
        console.warn('An error occured while trying to load the layers...');
        return false;
      }).always(function () {
        // this.proxy.starboard.spinner.hide();
      });
    } // end of "loadLayer()"
  }, {
    key: "getInitialStates",
    value: function getInitialStates(layer) {
      var childStates = [];
      if (layer.childs && layer.childs.length > 0) {
        for (var childId in layer.childs) {
          if (layer.childs.hasOwnProperty(childId)) {
            childStates.push(this.getInitialStates(layer.childs[childId]));
          }
        }
      }
      var zoom = this.mapController.map.getView().getZoom();
      return {
        active: !layer.hide,
        collapsed: !parseFloat(layer.initial_opened),
        greyed: layer.zoom && !this.compareZoom(layer.zoom),
        id: layer.id,
        childStates: childStates,
        cssClass: layer.cssClass
      };
    }
  }, {
    key: "getFeaturesFromStruct",
    value: function getFeaturesFromStruct(structure) {
      var features = [];
      var zoom = this.mapController.map.getView().getZoom();
      var greyed = structure.zoom && !this.compareZoom(structure.zoom);
      if (structure.childs && structure.childs.length > 0) {
        for (var structId in structure.childs) {
          if (structure.childs.hasOwnProperty(structId)) {
            features = features.concat(this.getFeaturesFromStruct(structure.childs[structId]));
          }
        }
      }
      if (structure.features && !greyed && !structure.hide) {
        features = features.concat(structure.features);
      }
      return features;
    }
  }, {
    key: "getStructureFromLayer",
    value: function getStructureFromLayer(layer, idChain) {
      var _this2 = this;
      var scope = this;
      var popup = false;
      var features = [];
      var childs = [];
      var hide = !!layer.hide;
      if (scope.mapController.data.layers && scope.mapController.data.layers.length > 0) {
        //hide or show according to permalink - overwrites layerService
        var arrLayerIds = scope.mapController.data.layers.split(',');
        var funcLayerIds = function funcLayerIds(value) {
          return value == layer.id;
        };
        if (arrLayerIds.find(funcLayerIds)) {
          //in permalink
          hide = false;
        } else {
          //not in permalink
          hide = true;
        }
      }
      if (layer.activeForBaselayers && layer.activeForBaselayers !== "all") {
        //initial handling for activate with baselayer
        var found = layer.activeForBaselayers.includes(scope.mapController.state.activeBaselayerId || scope.mapController.data.default_baselayer);
        hide = !found;
      }
      var vectorLayer = false;
      var loaderId = -1;
      var possibleLocstyle = layer.locstyle;
      if (layer.content && layer.content.length > 0) {
        features = this.getFeaturesForLayer(layer);
        possibleLocstyle = layer.locstyle || layer.content[0].locationStyle;
      }
      var checkLocstyle = this.arrLocstyles.findIndex(function (element) {
        return element === possibleLocstyle;
      });
      if (checkLocstyle === -1 && possibleLocstyle) {
        this.arrLocstyles.push(possibleLocstyle);
      }
      if (layer.async_content && layer.async_content != 0 && !layer.excludeFromSingleLayer) {
        var url = "";
        var locstyleId = 0;
        var params = "";
        var hoverLocation;
        var hoverStyle;
        var forceNodes = false;
        var showAddGeoms = false;
        var _layerId2 = layer.id;
        if (layer.content && layer.content[0] && layer.content[0].data) {
          var data = layer.content[0].data;
          url = data.url;
          popup = data.popup;
          hoverLocation = data.hover_location;
          hoverStyle = data.hover_style;
          params = data.params;
          locstyleId = layer.locstyle;
        }
        if (layer.content && layer.content[0] && layer.content[0].settings) {
          forceNodes = layer.content[0].settings.forceNodes;
          showAddGeoms = !!layer.content[0].settings.showAdditionalGeometries;
        }
        checkLocstyle = this.arrLocstyles.findIndex(function (element) {
          return element === locstyleId;
        });
        if (checkLocstyle === -1 && locstyleId) {
          this.arrLocstyles.push(locstyleId);
        }
        loaderId = this.loaders.length;
        this.loaders.push({
          chain: idChain,
          url: url,
          preventLoading: hide,
          forceNodes: forceNodes,
          arrExtents: [],
          popup: popup,
          showAddGeoms: showAddGeoms,
          locstyleId: locstyleId,
          hover_location: hoverLocation,
          hover_style: hoverStyle,
          params: params,
          layerId: _layerId2
        });
      }
      if (layer.childs && layer.childs.length > 0) {
        for (var _layerId3 in layer.childs) {
          if (layer.childs.hasOwnProperty(_layerId3)) {
            var childChain = idChain + "," + childs.length;
            var newChild = this.getStructureFromLayer(layer.childs[_layerId3], childChain);
            if (newChild.hide_in_starboard) {
              childs = newChild.childs ? childs.concat(newChild.childs) : childs;
              features = newChild.features ? features.concat(newChild.features) : features;
              if (this.mapController.filter) {
                if (!!parseFloat(this.mapController.data.filterHandling)) {
                  this.mapController.filter.filterLayerMulti(vectorLayer);
                } else {
                  this.mapController.filter.filterLayer(vectorLayer);
                }
              }
            } else {
              childs.push(newChild);
            }
          }
        }
        childs.filter(function (elem, index) {
          var index2 = childs.findIndex(function (elem2) {
            return elem['id'] === elem2['id'];
          });
          return index === index2;
        });
      } else if (layer.split_geojson) {
        var nameField = layer.geojson_attributes.split(',')[0];
        var zoomTo = !!layer.geojson_zoom;
        for (var featureId in features) {
          if (features.hasOwnProperty(featureId)) {
            childs.push({
              "features": [features[featureId]],
              "vectorLayer": false,
              "zoom": layer.zoom,
              "initial_opened": layer.initial_opened,
              "locstyle": possibleLocstyle,
              "zoomTo": zoomTo,
              "activeForBaselayers": layer.activeForBaselayers,
              "id": features[featureId].ol_uid,
              "key": layer.key,
              "name": features[featureId].get(nameField),
              "hide": hide,
              "childs": [],
              "cssClass": layer.cssClass
            });
          }
        }
        features = [];
      }
      if (layer.excludeFromSingleLayer) {
        var customStyleFunc = false;
        var vectorSource = new _source.Vector();
        if (layer.async_content && layer.async_content !== "0") {
          var strategy = layer.type === "table" || layer.content && layer.content[0].settings.boundingBox ? _loadingstrategy.bbox : _loadingstrategy.all;
          vectorSource = new _source.Vector({
            "strategy": strategy
          });
          var _scope = this;
          var loaderFunc = function loaderFunc(extent, resolution, projection) {
            if (layer.content && layer.content[0].settings.boundingBox && (extent[0] === Infinity || extent[0] === -Infinity)) {
              vectorSource.removeLoadedExtent();
            } else if (layer.type === "overpass") {
              var content = layer.content[0];
              var _data = content.data;
              _scope.performOvp({
                "url": _data.url,
                "layerId": layer.id,
                "layer": layer,
                "vectorSource": vectorSource,
                "params": _data.params,
                "locstyleId": layer.locstyle
              }, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              });
            } else if (layer.type === "table") {
              var responseFunc = function responseFunc(data) {
                var features = [];
                for (var i = 0; i < data.length; i++) {
                  var contentData = data[i];
                  var feature = _scope.parseOwnData(contentData, layer);
                  features.push(feature);
                }
                if (vectorSource instanceof _source.Cluster) {
                  vectorSource.getSource().addFeatures(features);
                } else {
                  vectorSource.addFeatures(features);
                }
              };
              _scope.performOwnData({
                "layerId": layer.id,
                "locstyleId": layer.locstyle
              }, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              }, responseFunc);
            } else {
              if (layer.content && layer.content['0'] && layer.content['0'].data) {
                var _content = layer.content['0'];
                var _responseFunc = function _responseFunc(response) {
                  response.json().then(function (json) {
                    vectorSource.clear();
                    if (olFormat[_content.format]) {
                      var format = new olFormat[_content.format]({
                        dataProjection: "EPSG:4326",
                        featureProjection: "EPSG:3857"
                      });
                      var _features = format.readFeatures(json);
                      if (layer.split_geojson) {
                        var _nameField = layer.geojson_attributes.split(',')[0];
                        layer.childs = [];
                        var searchFunction = function searchFunction(element) {
                          return element.id === layer.id;
                        };
                        var arrLayers = _scope.arrLayers;
                        var arrLayerStates = _scope.mapController.state.arrLayerStates;
                        var index = arrLayers.findIndex(searchFunction);
                        arrLayerStates[index].childStates = [];
                        arrLayers[index].childs = [];
                        for (var _featureId in _features) {
                          if (_features.hasOwnProperty(_featureId)) {
                            var _possibleLocstyle = layer.locationStyle || _content.locationStyle;
                            if (!_features[_featureId].get('locstyle')) {
                              _features[_featureId].set('locstyle', layer.locationStyle || _content.locationStyle);
                            } else {
                              _possibleLocstyle = _features[_featureId].get('locstyle');
                            }
                            arrLayers[index].childs.push({
                              "features": [_features[_featureId]],
                              "vectorLayer": false,
                              "zoom": layer.zoom,
                              "initial_opened": layer.initial_opened,
                              "locstyle": _possibleLocstyle,
                              "zoomTo": true,
                              "activateWithBl": false,
                              "id": _features[_featureId].get("positionId"),
                              "key": layer.key,
                              "name": _features[_featureId].get(_nameField),
                              "childs": [],
                              "cssClass": layer.cssClass
                            });
                            arrLayers[index].ignoreChilds = true;
                            arrLayerStates[index].childStates.push({
                              "active": true,
                              "childStates": [],
                              "collapsed": false,
                              "greyed": undefined,
                              "id": _features[_featureId].get("positionId")
                            });
                          }
                        }
                        _scope.mapController.setLayersInitial(arrLayers, arrLayerStates);
                      } else {
                        for (var i in _features) {
                          if (_features.hasOwnProperty(i)) {
                            if (!_features[i].get('locstyle')) {
                              _features[i].set('locstyle', layer.locationStyle || _content.locationStyle);
                            }
                          }
                        }
                      }
                      if (vectorSource instanceof _source.Cluster) {
                        vectorSource.getSource().addFeatures(_features);
                      } else {
                        vectorSource.addFeatures(_features);
                      }
                    }
                  });
                };
                _scope.performOtherData(_content, _responseFunc);
              }
            }
          };
          vectorSource.setLoader(loaderFunc);
          if (layer.content && layer.content[0] && layer.content[0].settings && layer.content[0].settings.refresh) {
            var interval = layer.content[0].settings.interval || 10000;
            window.setInterval(function () {
              loaderFunc();
            }, interval);
          }
        } else if (features && features.length) {
          vectorSource.addFeatures(features);
        } else {
          var content = layer.content[0];
          var featureProjection = "EPSG:3857";
          var dataProjection = "EPSG:4326";
          customStyleFunc = function customStyleFunc(feature, resolution) {
            var size = false;
            var returnStyle = [];
            if (feature && feature.get && feature.get('features')) {
              var _features2 = feature.get('features');
              size = _features2.length;
              feature = _features2[0];
            }
            if (layer && layer.locstyle && layer.locstyle !== "0") {
              if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle] && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle]) {
                if (!scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style) {
                  scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].getStyleFunction();
                }
                var style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style;
                if (typeof style === "function") {
                  returnStyle = style(feature, resolution, false);
                } else {
                  returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
                }
              }
            }
            if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
              var iconOffset = [0, 0];
              if (returnStyle[0]) {
                if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
                  var radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
                  if (radius) {
                    iconOffset = [-radius, radius];
                  }
                } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
                  iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
                }
              }
              var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                unit: '%',
                value: 70
              });
              var fontcolor = '#FFFFFF';
              returnStyle.push(new _style.Style({
                text: new _style.Text({
                  text: "●",
                  font: "60px sans-serif",
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1],
                  fill: new _style.Fill({
                    color: fillcolor
                  })
                })
              }));
              returnStyle.push(new _style.Style({
                text: new _style.Text({
                  text: size.toString(),
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1] + 3,
                  fill: new _style.Fill({
                    color: fontcolor
                  })
                })
              }));
            }
            return returnStyle;
          };
          if (content) {
            if (content.data && content.data.properties && content.data.properties.projection && content.data.properties.projCode) {
              // if (!proj4(contentData.data.properties.projection)) {
              _proj2["default"].defs(content.data.properties.projection, content.data.properties.projCode);
              (0, _proj3.register)(_proj2["default"]);
              // }
              dataProjection = new _Projection["default"]({
                code: content.data.properties.projection
              });
            }
            var format = new olFormat[content['format']]({
              featureProjection: featureProjection,
              dataProjection: dataProjection
            });
            if (layer.type === "wfs") {
              if (content.locstyleWfs) {
                var _loop2 = function _loop2() {
                  if (content.locstyleWfs.hasOwnProperty(i)) {
                    var _locstyle2 = content.locstyleWfs[i].locstyle;
                    var _checkLocstyle = _this2.arrLocstyles.findIndex(function (element) {
                      return element === _locstyle2;
                    });
                    if (_checkLocstyle === -1 && _locstyle2) {
                      _this2.arrLocstyles.push(_locstyle2);
                    }
                  }
                };
                for (var i in content.locstyleWfs) {
                  _loop2();
                }
              }
              vectorSource = new _source.Vector({
                format: new olFormat['WFS']({
                  version: content.data.version,
                  gmlFormat: format
                }),
                loader: function loader(extent, resolution, projection, success, failure) {
                  var proj = projection.getCode();
                  var newExt = (0, _proj.transformExtent)(extent, projection, "EPSG:4326");
                  newExt = [newExt[1], newExt[0], newExt[3], newExt[2]];
                  var url = content.data.url + newExt.join(',');
                  fetch(url, {
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then(function (response) {
                    response.json().then(function (data) {
                      var features = format.readFeatures(data);
                      for (var _i6 in features) {
                        if (features.hasOwnProperty(_i6)) {
                          var feature = features[_i6];
                          var _locstyle3 = scope.getWfsStyle(feature, content);
                          feature.set('locstyle', _locstyle3);
                          var id = feature.getId();
                          if (!vectorSource.getFeatureById(id)) {
                            vectorSource.addFeature(feature);
                          }
                        }
                      }
                      success(features);
                    });
                  })["catch"](function () {
                    vectorSource.removeLoadedExtent(extent);
                    failure();
                  });
                },
                strategy: _loadingstrategy.bbox
              });
              customStyleFunc = false;
              popup = content.data && content.data.popup ? content.data.popup : false;
            } else {
              vectorSource = new _source.Vector({
                format: format,
                url: content.data.url
              });
              popup = content.data && content.data.popup ? content.data.popup : false;
            }
          }
        }
        this.vectorSources.push(vectorSource);
        if (layer.cluster) {
          vectorSource = new _source.Cluster({
            source: vectorSource,
            geometryFunction: this.geometryFunction,
            distance: parseInt(layer.cluster.distance, 10)
          });
        }
        vectorLayer = new _layer.Vector({
          source: vectorSource,
          style: customStyleFunc || this.clusterStyleFunction,
          zIndex: parseInt(layer.zIndex || "0")
        });
        this.vectorLayers.push(vectorLayer);
        vectorLayer.popup = popup;
        scope.proxy.hook_locstyles_loaded.push(function (lostyleController) {
          vectorLayer.changed();
        });
        var greyed = layer.zoom && !this.compareZoom(layer.zoom);
        if (!hide && !greyed) {
          // vectorLayer.setZIndex(1);
          this.mapController.map.addLayer(vectorLayer);
        }
        features = false;
      }
      if (layer.hideInStarboard) {
        return {
          childs: childs,
          features: features,
          hide_in_starboard: true
        };
      } else {
        return {
          "features": features,
          "vectorLayer": vectorLayer,
          "loader": loaderId,
          "zoom": layer.zoom,
          "initial_opened": layer.initial_opened,
          "locstyle": possibleLocstyle,
          "activeForBaselayers": layer.activeForBaselayers,
          "popup": popup || layer.popup,
          "id": layer.id,
          "key": layer.key,
          "name": layer.name,
          "tags": layer.tags,
          "hide": hide,
          "childs": childs,
          "zoomTo": layer.zoomTo,
          "cssClass": layer.cssClass
        };
      }
    }
  }, {
    key: "getFeaturesForLayer",
    value: function getFeaturesForLayer(layer) {
      var _this3 = this;
      var features = [];
      var featureProjection = "EPSG:3857";
      var _loop3 = function _loop3() {
          if (layer.content.hasOwnProperty(contentId)) {
            var content = layer.content[contentId];
            var contentData = content.data;
            if (contentData) {
              var dataProjection = "EPSG:4326";
              if (contentData.properties && contentData.properties.projection && contentData.properties.projCode) {
                // if (!proj4(contentData.data.properties.projection)) {
                _proj2["default"].defs(contentData.properties.projection, contentData.properties.projCode);
                (0, _proj3.register)(_proj2["default"]);
                // }
                dataProjection = new _Projection["default"]({
                  code: contentData.properties.projection
                });
              }
              var format;
              if (layer.content[contentId].type === "urlData") {
                if (layer.type === "kml") {
                  return {
                    v: false
                  };
                } else if (layer.type === "gpx") {
                  return {
                    v: false
                  };
                }
              } else if (contentData.properties) {
                format = new olFormat[layer.content[contentId].type]({
                  featureProjection: featureProjection,
                  dataProjection: contentData.properties.projection
                });
              }
              var _locstyle4 = content.locationStyle || layer.locstyle;
              var checkLocstyle = _this3.arrLocstyles.findIndex(function (element) {
                return element === _locstyle4;
              });
              if (checkLocstyle === -1 && _locstyle4) {
                _this3.arrLocstyles.push(_locstyle4);
              }
              if (layer.content[contentId].type === "GeoJSON") {
                if (contentData.type === "FeatureCollection") {
                  var _loop4 = function _loop4() {
                    if (contentData.features.hasOwnProperty(_i7)) {
                      var singleFeature = format.readFeature(contentData.features[_i7]);
                      if (!singleFeature.get('locstyle')) {
                        singleFeature.set('locstyle', _locstyle4);
                      } else {
                        checkLocstyle = _this3.arrLocstyles.findIndex(function (element) {
                          return element === singleFeature.get('locstyle');
                        });
                        if (checkLocstyle === -1 && singleFeature.get('locstyle')) {
                          _this3.arrLocstyles.push(singleFeature.get('locstyle'));
                        }
                      }
                      if (content.hover_location) {
                        singleFeature.set('hover_style', content.hover_style);
                        singleFeature.set('hover_location', content.hover_location);
                      }
                      if (content.loc_linkurl) {
                        singleFeature.set('loc_linkurl', content.loc_linkurl);
                      }
                      if (contentData.properties) {
                        if (!singleFeature.get('tooltip')) {
                          singleFeature.set('tooltip', contentData.properties.tooltip);
                        }
                        if (!singleFeature.get('label')) {
                          singleFeature.set('label', contentData.properties.label);
                        }
                        if (!singleFeature.get('popup')) {
                          singleFeature.set('popup', contentData.properties.popup);
                        }
                      }
                      features.push(singleFeature);
                    }
                  };
                  for (var _i7 in contentData.features) {
                    _loop4();
                  }
                } else if (contentData && contentData.type) {
                  var feature = format.readFeature(contentData);
                  feature.set('locstyle', _locstyle4);
                  feature.set('noFilter', layer.noRealFilter);
                  if (content.hover_location) {
                    feature.set('hover_style', content.hover_style);
                    feature.set('hover_location', content.hover_location);
                  }
                  if (contentData.loc_linkurl) {
                    feature.set('loc_linkurl', contentData.loc_linkurl);
                  }
                  features.push(feature);
                }
              } else if (format) {
                fetch(contentData.url).then(function (response) {
                  response.text().then(function (text) {
                    var parser = new DOMParser();
                    var data = parser.parseFromString(text, "text/xml");
                    var tempFeatures = format.readFeature(data.childNodes[0].outerHTML);
                    for (var featId in tempFeatures) {
                      if (tempFeatures.hasOwnProperty(featId)) {
                        var _feature = tempFeatures[featId];
                        _feature.set('locstyle', _locstyle4);
                        if (contentData.hover_location) {
                          _feature.set('hover_style', contentData.hover_style);
                          _feature.set('hover_location', contentData.hover_location);
                        }
                        if (contentData.loc_linkurl) {
                          _feature.set('loc_linkurl', contentData.loc_linkurl);
                        }
                        features.push(_feature);
                      }
                    }
                  });
                });
              }
            }
          }
        },
        _ret;
      for (var contentId in layer.content) {
        _ret = _loop3();
        if (_ret) return _ret.v;
      }
      if (this.proxy.mapData.calc_extent === "LOCATIONS" || this.proxy.mapData.calc_extent === "CENTERLOCS") {
        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            var extent = features[i].getGeometry().getExtent();
            if (this.extent.maxX < extent[2]) {
              this.extent.maxX = extent[2];
            }
            if (this.extent.maxY < extent[3]) {
              this.extent.maxY = extent[3];
            }
            if (this.extent.minX > extent[0]) {
              this.extent.minX = extent[0];
            }
            if (this.extent.minY > extent[1]) {
              this.extent.minY = extent[1];
            }
          }
        }
      }
      if (!this.objIds.hasOwnProperty(layer.id)) {
        if (!layer.split_geojson) {
          this.objIds[layer.id] = features;
        }
        return features;
      } else {
        return [];
      }
    }
  }, {
    key: "geometryFunction",
    value: function geometryFunction(feature) {
      var geometry = feature.getGeometry();
      if (geometry instanceof _geom.Point) {
        return geometry;
      } else {
        return null;
      }
    }
  }, {
    key: "performOvp",
    value: function performOvp(requestData, mapConf) {
      if (this.controllers[requestData.layerId]) {
        //abort request, if new exists
        this.controllers[requestData.layerId].abort();
        delete this.controllers[requestData.layerId];
      }
      var scope = this;
      this.controllers[requestData.layerId] = new AbortController();
      var signal = this.controllers[requestData.layerId].signal;
      var boundingArray = (0, _proj.transformExtent)(mapConf.extent, mapConf.projection, 'EPSG:4326');
      var strBoundingBox = "";
      var url = requestData.url;
      var params = decodeURIComponent(requestData.params);
      if (url) {
        if (url.indexOf('{key}') > -1) {
          url = url.replace('{key}', scope.ovpKey);
        }
        var bboxTag = params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g;
        url += url.includes("?") ? "&" : "?";
        if (params && params.substr(0, 1).trim() === "<") {
          strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
          url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
          url = url.replace('output=json', 'output=xml');
          fetch(url, {
            signal: signal
          }).then(function (response) {
            response.text().then(function (resp) {
              scope.parseOvpData(resp, requestData);
            })["catch"](function (error) {
              console.log(error.message);
            });
          })["catch"](function (error) {
            if (error.code && error.code !== 20) {
              console.log('Fetch Error :-S', error.message);
            }
          });
        } else {
          strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
          url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox).replace('out:json', 'out:xml'));
          fetch(url, {
            signal: signal
          }).then(function (response) {
            response.text().then(function (resp) {
              scope.parseOvpData(resp, requestData);
            })["catch"](function (error) {
              console.log(error.message);
            });
          })["catch"](function (error) {
            if (error.code && error.code !== 20) {
              console.log('Fetch Error :-S', error.message);
            }
          });
        }
      }
    }
  }, {
    key: "parseOvpData",
    value: function parseOvpData(response, requestData) {
      var layer = requestData.layer;
      var content = layer.content[0];
      var data = content.data;
      var features;
      if (typeof response === "string") {
        var text = response;
        if (!!!content.settings.showAdditionalGeometries) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(response, "text/xml");
          var featuresDoc = xmlDoc.getElementsByTagName('way');
          for (var i = 0; i < featuresDoc.length; i++) {
            var singleFeature = featuresDoc[i];
            for (var j = 0; j < singleFeature.children.length; j++) {
              var nodeId = singleFeature.children[j].getAttribute('ref');
              var nodeElement = xmlDoc.getElementById(nodeId);
              while (nodeElement && nodeElement.children.length > 0) {
                nodeElement.removeChild(nodeElement.children[0]);
              }
            }
          }
          var serializer = new XMLSerializer();
          text = serializer.serializeToString(xmlDoc);
        }
        var format = new _OSMXML["default"]();
        try {
          features = format.readFeatures(text, {
            featureProjection: "EPSG:3857"
          });
        } catch (e) {
          console.warn('Can not read feature.');
        }
      } else {
        return false;
      }
      // set popups for features
      if (data.popup) {
        for (var _i8 = 0; _i8 < features.length; _i8++) {
          var popup = {};
          for (var _j in data.popup) {
            if (data.popup.hasOwnProperty(_j)) {
              popup[_j] = data.popup[_j];
            }
          }
          features[_i8].set('popup', popup);
          features[_i8].set('noFilter', layer.noRealFilter);
        }
      }
      var requestDatas = layer.content && layer.content[0].settings ? layer.content[0].settings : {};
      for (var featureId in features) {
        if (features.hasOwnProperty(featureId)) {
          if (features[featureId].getGeometry().getType() === "Polygon") {
            if (requestDatas.forceNodes) {
              features[featureId].setGeometry(features[featureId].getGeometry().getInteriorPoint());
            }
            if (!features[featureId].getId().includes('way')) {
              features[featureId].set('osm_type', 'way');
            }
          } else if (features[featureId].getGeometry().getType() === "MultiPolygon") {
            if (requestDatas.forceNodes) {
              features[featureId].setGeometry(features[featureId].getGeometry()[0].getInteriorPoint());
            }
            if (!features[featureId].getId().includes('relation')) {
              features[featureId].set('osm_type', 'relation');
            }
          } else if (features[featureId].getGeometry().getType() === "Point") {
            if (!features[featureId].getId().includes('node')) {
              features[featureId].set('osm_type', 'node');
            }
          }
          if (this.mapController.filter) {
            if (!!parseFloat(this.mapController.data.filterHandling)) {
              this.mapController.filter.hideFeatureMulti(features[featureId]);
            } else {
              this.mapController.filter.hideFeature(features[featureId]);
            }
          }
          features[featureId].set('locstyle', layer.locstyle);
          if (content.hover_location) {
            features[featureId].set('hover_style', content.hover_style);
            features[featureId].set('hover_location', content.hover_location);
          }
          if (content.loc_linkurl) {
            features[featureId].set('loc_linkurl', content.loc_linkurl);
          }
          if (content.cluster_fillcolor && content.cluster_fontcolor) {
            features[featureId].set('cluster_fillcolor', content.cluster_fillcolor);
            features[featureId].set('cluster_fontcolor', content.cluster_fontcolor);
          }
        }
      }
      if (requestData.chain || requestData.chain > -1) {
        this.addFeatures(features, requestData.chain);
        this.mapController.setObjLayers(this.arrLayers);
      } else {
        if (requestData.vectorSource instanceof _source.Cluster) {
          requestData.vectorSource.getSource().addFeatures(features);
        } else {
          requestData.vectorSource.addFeatures(features);
        }
      }
    }
  }, {
    key: "performOwnData",
    value: function performOwnData(requestData, mapConf, responseFunc) {
      var scope = this;
      if (this.controllers[requestData.layerId]) {
        //abort request, if new exists
        this.controllers[requestData.layerId].abort();
        delete this.controllers[requestData.layerId];
      }
      if (mapConf.extent[0] === Infinity || mapConf.extent[0] === -Infinity || mapConf.extent[1] === Infinity || mapConf.extent[1] === -Infinity || mapConf.extent[2] === Infinity || mapConf.extent[2] === -Infinity || mapConf.extent[3] === Infinity || mapConf.extent[3] === -Infinity) {
        return false;
      }
      // @Todelü implement handling for other projections
      var boundingArray = (0, _proj.transformExtent)(mapConf.extent, mapConf.projection, 'EPSG:4326');
      var strBoundingBox = boundingArray[0] + ',' + boundingArray[1] + ';' + boundingArray[2] + ',' + boundingArray[3];
      var url = scope.proxy.api_layercontentdata_url + '/' + requestData.layerId + '/' + strBoundingBox;
      this.controllers[requestData.layerId] = new AbortController();
      var signal = this.controllers[requestData.layerId].signal;
      fetch(url, {
        signal: signal
      }).then(function (response) {
        response.json().then(responseFunc)["catch"](function (error) {
          console.log(error.message);
        });
      })["catch"](function (error) {
        if (error.code && error.code !== 20) {
          console.log('Fetch Error :-S', error.message);
        }
      });
    }
  }, {
    key: "performOtherData",
    value: function performOtherData(content, responseFunc) {
      var data = content.data;
      var settings = content.settings;
      fetch(data.url).then(function (response) {
        responseFunc(response);
      })["catch"](function () {
        console.log("Tell me why");
      });
    }
  }, {
    key: "parseOwnData",
    value: function parseOwnData(contentData, layer) {
      var resultCoordinate = (0, _proj.transform)([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857');
      var point = new _geom.Point(resultCoordinate);
      var contentFeature = new _Feature["default"](point);
      contentFeature.setId(contentData.id);
      contentFeature.set('noFilter', layer.noRealFilter);
      contentFeature.set('hover_location', layer.hover_location);
      contentFeature.set('hover_style', layer.hover_style);
      var popup = contentData['popup'] ? contentData['popup'] : jQuery.extend({}, layer.popup);
      if (popup && popup.content && popup.content.search && popup.content.search('itemId')) {
        popup.content = popup.content.replace('itemId', contentData['id']);
      }
      if (contentData['label']) {
        contentFeature.set('label', contentData['label']);
      }
      if (contentData['tooltip']) {
        contentFeature.set('tooltip', contentData['tooltip']);
      }
      if (contentData.loc_linkurl) {
        contentFeature.set('loc_linkurl', contentData.loc_linkurl);
      }
      contentFeature.set('popup', popup);
      contentFeature.set('zoom_onclick', layer.zoom_onclick);
      contentFeature.set('tid', contentData['id']);
      var locstyle = contentData['locstyle'] || layer.locstyle;
      contentFeature.set('locstyle', locstyle);
      if (this.mapController.filter) {
        if (!!parseFloat(this.mapController.data.filterHandling)) {
          this.mapController.filter.hideFeatureMulti(contentFeature);
        } else {
          this.mapController.filter.hideFeature(contentFeature);
        }
      }
      return contentFeature;
    }
  }, {
    key: "addFeatures",
    value: function addFeatures(features, chain) {
      var scope = this;
      var addedFeatures;
      var layer;
      var oldLength = scope.vectorCollection.getLength(); //necesarry to distinct redundant features

      scope.vectorCollection.extend(features);
      addedFeatures = scope.vectorCollection.getArray().slice(oldLength);
      if (typeof chain === "string") {
        var arrChain = chain.split(',');
        var i = 1;
        layer = scope.arrLayers[arrChain[0]];
        while (chain[i]) {
          layer = layer.childs[arrChain[i]];
          i++;
        }
      } else {
        layer = scope.arrLayers[chain];
      }
      if (layer.features) {
        layer.features = layer.features.concat(addedFeatures);
      } else if (layer.vectorLayer) {
        var source = layer.vectorLayer.getSource().getSource();
        source.addFeatures(features);
      }
    }
  }, {
    key: "handleZoom",
    value: function handleZoom(proxy) {
      var mapController = proxy.options.mapController;
      var childStates = mapController.state.arrLayerStates;
      var objLayers = mapController.state.objLayers;
      var zoom = mapController.map.getView().getZoom();
      for (var id in childStates) {
        if (childStates.hasOwnProperty(id) && objLayers[id]) {
          childStates[id] = this.handleZoomChilds(zoom, childStates[id], objLayers[id]);
        }
      }
      this.mapController ? this.mapController.setLayerStates(childStates) : '';
    }
  }, {
    key: "handleZoomChilds",
    value: function handleZoomChilds(zoom, childState, child) {
      for (var id in childState.childStates) {
        if (childState.childStates.hasOwnProperty(id)) {
          childState.childStates[id] = this.handleZoomChilds(zoom, childState.childStates[id], child.childs[id]);
        }
      }
      var greyed = child.zoom && !this.compareZoom(child.zoom);
      if (childState['greyed'] !== greyed) {
        if (greyed || !!child.hide) {
          this.hide(child.loader, child.features || child.vectorLayer);
        } else {
          this.show(child.loader, child.features || child.vectorLayer);
        }
      }
      childState['greyed'] = greyed;
      return childState;
    }
  }, {
    key: "compareZoom",
    value: function compareZoom(layerZoom) {
      var zoom = this.mapController.map.getView().getZoom();
      return parseInt(layerZoom.min, 10) < zoom && parseInt(layerZoom.max, 10) > zoom;
    }
  }, {
    key: "getWfsStyle",
    value: function getWfsStyle(feature, content) {
      var locstyleWfs = content.locstyleWfs;
      for (var i in locstyleWfs) {
        if (locstyleWfs.hasOwnProperty(i)) {
          var element = locstyleWfs[i];
          var value = feature.get(element.key);
          switch (element.compare) {
            case "==":
              if (value == element.value) {
                return element.locstyle;
              }
              break;
            case ">":
              if (value > element.value) {
                return element.locstyle;
              }
              break;
            case "<":
              if (value < element.value) {
                return element.locstyle;
              }
              break;
          }
        }
      }
      return content.locationStyle;
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-locationstyle-controller.js":
/*!*****************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-locationstyle-controller.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gLocationStyleController = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gLocationstyle = __webpack_require__(/*! ./c4g-locationstyle */ "../MapsBundle/src/Resources/public/js/c4g-locationstyle.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gLocationStyleController = exports.C4gLocationStyleController = /*#__PURE__*/function () {
  function C4gLocationStyleController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gLocationStyleController);
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLocStyles = {};
    this.resizeOnZoom = proxy.options.mapController.data.resizeLocstyles;
  }
  return (0, _createClass2["default"])(C4gLocationStyleController, [{
    key: "loadLocationStyles",
    value: function loadLocationStyles(arrIds, opt_options) {
      var options,
        complete = {},
        success = {},
        self = this,
        count = 1,
        makeAjax;
      if (opt_options && (0, _typeof2["default"])(opt_options) === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      // this.proxy.options.mapController.spinner.show();

      makeAjax = function makeAjax(styleIds, index) {
        if (index) {
          complete[index] = false;
          success[index] = false;
        }
        // get locationstyles over API
        jQuery.ajax({
          dataType: self.proxy.options.mapController.data.jsonp ? "jsonp" : "json",
          url: self.proxy.api_locstyle_url,
          data: {
            ids: styleIds
          }
        }).done(function (data) {
          var i,
            styleData,
            successful = true;
          if (data.length > 0) {
            for (i = 0; i < data.length; i += 1) {
              styleData = data[i];
              var style = new _c4gLocationstyle.C4gLocationStyle(styleData, self);
              self.arrLocStyles[styleData.id] = style;
            }
            self.proxy.layerController.vectorLayer.setStyle(self.proxy.layerController.clusterStyleFunction);
          }
          if (index) {
            success[index] = true;
            for (var key in success) {
              if (success.hasOwnProperty(key)) {
                if (!success[key]) {
                  successful = false;
                  break;
                }
              }
            }
          }
          if (options.done && typeof options.done === "function" && (index ? successful : true)) {
            options.done(self);
            // call hooks
            _c4gMapsUtils.utils.callHookFunctions(self.proxy.hook_locstyles_loaded, {
              locstyleController: self
            });
          }
          self.proxy.layerController.vectorLayer.changed();
        }).always(function (jXhr, strStatus) {
          var completed = true;
          if (index) {
            complete[index] = true;
            for (var key in complete) {
              if (complete.hasOwnProperty(key)) {
                if (!complete[key]) {
                  completed = false;
                  break;
                }
              }
            }
          }
          if (options.always && typeof options.always === "function" && (index ? completed : true)) {
            options.always();
          }
          // if (!jQuery(self.proxy.options.mapController.mapsControls.spinner.element).hasClass(cssConstants.HIDE)) {
          //   self.proxy.options.mapController.spinner.hide();
          // }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.warn(errorThrown);
        });
      };

      // split arrIds if it's too long
      if (arrIds.length > 100) {
        var n = 100;
        while (arrIds.length > 0) {
          makeAjax(arrIds.splice(0, n), count);
          count++;
        }
      } else if (arrIds.length > 0) {
        makeAjax(arrIds);
      }
      //});
    } // end of "loadLocationStyles()"
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-locationstyle.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-locationstyle.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gLocationStyle = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _Circle = _interopRequireDefault(__webpack_require__(/*! ol/style/Circle */ "../MapsBundle/node_modules/ol/style/Circle.js"));
var _Photo = _interopRequireDefault(__webpack_require__(/*! ol-ext/style/Photo */ "../MapsBundle/node_modules/ol-ext/style/Photo.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gLocationStyle = exports.C4gLocationStyle = /*#__PURE__*/function () {
  function C4gLocationStyle(locStyleArr, controller) {
    (0, _classCallCheck2["default"])(this, C4gLocationStyle);
    this.id = locStyleArr['id'];
    // this.style     = this.getStyleFunction(locStyleArr);
    this.editor = this.getStyleEditorConfig(locStyleArr);
    this.name = locStyleArr['name'];
    this.tooltip = locStyleArr['tooltip'];
    this.label = locStyleArr['label'];
    this.minzoom = locStyleArr['minzoom'];
    this.maxzoom = locStyleArr['maxzoom'];
    this.fnStyleFunction = locStyleArr['style_function_js'];
    if (this.fnStyleFunction && typeof this.fnStyleFunction === "string") {
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Style./gi, "window.olStyle.");
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Geom./gi, "window.olStyle.");
      if (!window.olStyle) {
        window.olStyle = {
          Stroke: _style.Stroke,
          Style: _style.Style,
          Icon: _style.Icon,
          Fill: _style.Fill,
          Point: _geom.Point,
          CircleStyle: _Circle["default"],
          Circle: _geom.Circle,
          Text: _style.Text
        };
      }
    }
    this.controller = controller;
    this.locStyleArr = locStyleArr;
  }
  return (0, _createClass2["default"])(C4gLocationStyle, [{
    key: "getStyleFunction",
    value: function getStyleFunction() {
      var styleData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var self, styleFunction, imageStyle, strokeStyle, fillStyle, textStyle, textStyleOutline, backgroundFill, backgroundStroke;
      self = this;
      if (!styleData) {
        styleData = this.locStyleArr;
      }
      // general
      strokeStyle = new _style.Stroke({
        color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]),
        width: parseInt(styleData.strokewidth.value ? styleData.strokewidth.value : 2, 10)
      });
      fillStyle = new _style.Fill({
        color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1])
      });
      imageStyle = this.createImageStyle(styleData, strokeStyle, fillStyle);

      // build function
      styleFunction = function styleFunction(feature, projection, getId) {
        // if (self.fnStyleFunction) {
        //   return Function("feature","data","map",self.fnStyleFunction)(feature);
        // }
        var stylesArray, label;
        var mapZoom = self.controller.mapController.map.getView().getZoom();
        if (parseInt(self.locStyleArr.maxzoom, 10) && parseInt(self.locStyleArr.maxzoom, 10) < mapZoom) {
          return null;
        }
        if (parseInt(self.locStyleArr.minzoom, 10) && parseInt(self.locStyleArr.minzoom, 10) > mapZoom) {
          return null;
        }
        if (getId) {
          return styleData.id;
        }

        // check if this is a feature.styleFunction
        if (!feature) {
          projection = feature;
          feature = this;
        }
        stylesArray = [];
        if (feature && typeof feature.get === 'function' && feature.get('label')) {
          label = feature.get('label');
        } else if (styleData.label) {
          label = styleData.label;
        } else {
          label = false;
        }
        var defaultColor = self.controller.mapController.data.default_label_color;
        // label
        var newScale = self.getScaleFactor(styleData);
        if (label) {
          if (styleData.label_outl_color && styleData.label_outl_width.value) {
            textStyleOutline = new _style.Stroke({
              color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                unit: '%',
                value: 100
              }),
              width: parseInt(styleData.label_outl_width.value, 10)
            });
            if (styleData.label_outl_box === "1") {
              backgroundFill = new _style.Fill({
                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                  unit: '%',
                  value: 100
                })
              });
            }
          }
          if (!styleData.label_offset) {
            styleData.label_offset = [0, 0, "px"];
          }
          var fontSize = styleData.font_size && (0, _typeof2["default"])(styleData.font_size) === "object" && styleData.font_size !== null ? styleData.font_size.value : styleData.font_size ? styleData.font_size : '13';
          var textOptions = {
            text: label,
            font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + fontSize + 'px ' + (styleData.font_family || 'sans-serif'),
            // scale: parseInt(styleData.font_size || 0, 10) || undefined,
            offsetX: parseInt(styleData.label_offset[0] || 0, 10),
            offsetY: parseInt(styleData.label_offset[1] || 0, 10),
            textAlign: styleData.label_align_hor,
            textBaseline: styleData.label_align_ver,
            scale: newScale,
            fill: new _style.Fill({
              color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.font_color[0] || defaultColor, styleData.font_color[1])
            }),
            stroke: textStyleOutline
          };
          if (styleData.label_outl_box === "1") {
            textOptions.backgroundFill = backgroundFill;
            textOptions.backgroundStroke = textStyleOutline;
          }
          textStyle = new _style.Text(textOptions);
        }

        // check if image has to be resized
        if (imageStyle && newScale !== 0.0 && imageStyle.setScale) {
          imageStyle.setScale(newScale);
        }
        // check if label should be displayed
        var showLabelForZoom = false;
        var labelMinZoom = parseInt(self.locStyleArr.label_minzoom, 10);
        var labelMaxZoom = parseInt(self.locStyleArr.label_maxzoom, 10);
        if (mapZoom >= labelMinZoom && (labelMaxZoom >= mapZoom || labelMaxZoom === 0)) {
          showLabelForZoom = true;
        }

        // create style-object
        if (label && showLabelForZoom) {
          var zIndex;
          if (feature && feature.get && typeof feature.get === "function" && feature.get('zIndex')) {
            zIndex = feature.get('zIndex');
          }
          stylesArray.push(new _style.Style({
            image: imageStyle,
            text: textStyle,
            stroke: strokeStyle,
            fill: fillStyle,
            zIndex: zIndex
          }));
        } else {
          stylesArray.push(new _style.Style({
            image: imageStyle,
            stroke: strokeStyle,
            fill: fillStyle
          }));
        }

        // add line-arrows
        if (styleData.line_arrows && feature && typeof feature.getGeometry === 'function' && !(feature.getGeometry().getType() === 'Point') && typeof feature.getGeometry().forEachSegment === 'function') {
          var arrowStyles = self.createLineArrowStyles(styleData, feature, strokeStyle, fillStyle);
          stylesArray = stylesArray.concat(arrowStyles);
        }
        return stylesArray;
      };
      if (this.fnStyleFunction) {
        styleFunction = Function("feature", "data", "map", this.fnStyleFunction);
      }
      return styleFunction;
    } // end of "getStyleFunction()"

    /**
     * Determines the current scaling factor according to the current zoomlevel and the profile/locstyle settings.
     * @param styleData
     */
  }, {
    key: "getScaleFactor",
    value: function getScaleFactor(styleData) {
      var newScale = 0.0;
      var initialZoom, scaleFactor, factor, minScale, maxScale;
      var currentZoom = this.controller.mapController.map.getView().getZoom();
      var initialScale = "cust_icon_svgphoto".includes(styleData.styletype) ? parseFloat(styleData.icon_scale) : 1;
      // locstyle setting overwrites profile setting
      if (styleData.icon_resize_zoom) {
        initialZoom = parseInt(styleData.icon_resize_src_zoom, 10);
        scaleFactor = parseFloat(styleData.icon_resize_scale_factor);
        minScale = parseFloat(styleData.icon_resize_min_scale);
        maxScale = parseFloat(styleData.icon_resize_max_scale);
      } else if (this.controller.resizeOnZoom) {
        initialZoom = parseInt(this.controller.resizeOnZoom.srcZoom, 10);
        scaleFactor = parseFloat(this.controller.resizeOnZoom.scaleFactor);
        minScale = parseFloat(this.controller.resizeOnZoom.minScale);
        maxScale = parseFloat(this.controller.resizeOnZoom.maxScale);
      }
      if (currentZoom > initialZoom) {
        // resize image bigger
        factor = currentZoom - initialZoom;
        var scaleSummand = scaleFactor * factor;
        newScale = initialScale + scaleSummand;
        if (newScale > maxScale) {
          newScale = maxScale;
        }
      } else if (currentZoom < initialZoom) {
        // resize image smaller
        factor = initialZoom - currentZoom;
        var _scaleSummand = scaleFactor * factor;
        newScale = initialScale - _scaleSummand;
        if (newScale <= minScale) {
          newScale = minScale;
        }
      } else {
        // resize to initial size
        newScale = initialScale;
      }
      return newScale;
    }
  }, {
    key: "createImageStyle",
    value: function createImageStyle(styleData, strokeStyle, fillStyle) {
      var imageStyle;
      // image

      switch (styleData.styletype) {
        case 'square':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            angle: Math.PI / 4
          });
          break;
        case 'star':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 10,
            radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
            points: 5,
            angle: 0
          });
          break;
        case 'x':
          imageStyle = new _style.RegularShape({
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: Math.PI / 4
          });
          break;
        case 'cross':
          imageStyle = new _style.RegularShape({
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: 0
          });
          break;
        case 'triangle':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 3,
            radius: styleData.radius.value || 10,
            rotation: Math.PI / 4,
            angle: 0
          });
          break;
        case 'ol_icon': // fallthrough
        case 'cust_icon':
          if (styleData.icon_src) {
            var width, height, offsetX, offsetY;
            width = styleData.icon_size[0] * styleData.icon_scale;
            height = styleData.icon_size[1] * styleData.icon_scale;
            offsetX = styleData.icon_offset[0] * styleData.icon_scale;
            offsetY = styleData.icon_offset[1] * styleData.icon_scale;
            var anchorX = 1 / (parseInt(width) / (parseInt(offsetX) * -1));
            var anchorY = 1 / (parseInt(height) / (parseInt(offsetY) * -1));
            imageStyle = new _style.Icon({
              anchor: [anchorX, anchorY],
              opacity: parseFloat(styleData.icon_opacity.value) / 100,
              src: styleData.icon_src,
              scale: parseFloat(styleData.icon_scale),
              size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)]
            });
          }
          break;
        case 'cust_icon_svg':
          if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
            var _width, _height, _offsetX, _offsetY;
            _width = styleData.icon_size[0];
            _height = styleData.icon_size[1];
            _offsetX = parseFloat(styleData.icon_offset[0]);
            _offsetY = parseFloat(styleData.icon_offset[1]);
            var _anchorX = 1 / (parseInt(_width) / (parseInt(_offsetX) * -1));
            var _anchorY = 1 / (parseInt(_height) / (parseInt(_offsetY) * -1));

            // size was deprecated with new ol version and is no longer needed
            imageStyle = new _style.Icon({
              anchor: [_anchorX, _anchorY],
              src: styleData.svgSrc,
              crossOrigin: 'anonymous'
            });
          }
          break;
        case 'photo':
          imageStyle = new _Photo["default"]({
            kind: styleData.photoKind,
            crop: true,
            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
            radius: parseFloat(styleData.radius.value, 10),
            shadow: true,
            stroke: strokeStyle,
            src: styleData.icon_src
          });
          break;
        case 'point':
          imageStyle = new _Circle["default"]({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
          break;
        default:
          imageStyle = new _Circle["default"]({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
      }
      return imageStyle;
    }
  }, {
    key: "createLineArrowStyles",
    value: function createLineArrowStyles(styleData, feature, strokeStyle, fillStyle) {
      var scope = this;
      var stylesArray = [];
      var arrowSize = styleData.line_arrows_radius ? parseInt(styleData.line_arrows_radius.value, 10) * 2 : 0;
      var arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
      feature.getGeometry().forEachSegment(function (start, end) {
        //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
        var arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
        var start_pixel = scope.controller.mapController.map.getPixelFromCoordinate(start);
        var end_pixel = scope.controller.mapController.map.getPixelFromCoordinate(end);
        // euclid-distance between start and end
        var segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));
        if (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength || arrows_minzoom >= 0 && scope.controller.mapController.map.getView().getZoom() >= arrows_minzoom) {
          // forward arrows
          stylesArray.push(new _style.Style({
            geometry: new _geom.Point(end),
            text: new _style.Text({
              text: "ᐳ",
              font: arrowSizeUnit + " sans-serif",
              offsetX: 0,
              offsetY: 1,
              fill: fillStyle,
              stroke: strokeStyle,
              textAlign: 'right',
              rotateWithView: true,
              rotation: -Math.atan2(end[1] - start[1], end[0] - start[0])
            })
          }));
          // backward arrows (if wanted)
          if (styleData.line_arrows_back) {
            stylesArray.push(new _style.Style({
              geometry: new _geom.Point(start),
              text: new _style.Text({
                text: "ᐳ",
                font: arrowSizeUnit + " sans-serif",
                offsetX: 0,
                offsetY: -1,
                fill: fillStyle,
                stroke: strokeStyle,
                textAlign: 'right',
                rotateWithView: true,
                rotation: -Math.atan2(start[1] - end[1], start[0] - end[0])
              })
            }));
          }
        }
      });
      return stylesArray;
    }
  }, {
    key: "getStyleEditorConfig",
    value: function getStyleEditorConfig(styleData) {
      var editorConfig;

      // create editor-config
      editorConfig = {};
      editorConfig.collect = styleData.editor_collect || undefined;
      editorConfig.iconSrc = styleData.editor_icon || undefined;
      editorConfig.vars = styleData.editor_vars || undefined;
      editorConfig.sort = styleData.editor_sort || false;
      if (editorConfig.sort) {
        editorConfig.sort = parseInt(editorConfig.sort, 10) || false;
      }
      return editorConfig;
    } // end of "getStyleEditorConfig()"
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-config.js":
/*!****************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-config.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.config = exports.OSM_REL_ATTRIBUTION = void 0;
var _format = __webpack_require__(/*! ol/format */ "../MapsBundle/node_modules/ol/format.js");
var _tilegrid = __webpack_require__(/*! ol/tilegrid */ "../MapsBundle/node_modules/ol/tilegrid.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

//copy link to add noopener
var OSM_REL_ATTRIBUTION = exports.OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
var config = exports.config = {
  osm: {
    CycleMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },
    German: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
    },
    LandscapeMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },
    Mapnik: {
      attributions: OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous'
    },
    NONE: '' // last line
  },
  stadiaMaps: {
    alidade_smooth: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'alidade_smooth',
      minZoom: 0,
      maxZoom: 20,
      retina: true,
      crossOrigin: 'anonymous'
    },
    alidade_smooth_dark: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'alidade_smooth_dark',
      minZoom: 0,
      maxZoom: 20,
      retina: true,
      crossOrigin: 'anonymous'
    },
    alidade_satellite: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'alidade_satellite',
      minZoom: 0,
      maxZoom: 20,
      retina: true,
      crossOrigin: 'anonymous'
    },
    outdoors: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'outdoors',
      minZoom: 0,
      maxZoom: 20,
      retina: true,
      crossOrigin: 'anonymous'
    },
    stamen_toner: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://stamen.com/" target="_blank">Stamen Design</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'stamen_toner',
      minZoom: 0,
      maxZoom: 16,
      retina: true,
      crossOrigin: 'anonymous'
    },
    stamen_terrain: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://stamen.com/" target="_blank">Stamen Design</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'stamen_terrain',
      minZoom: 0,
      retina: true,
      crossOrigin: 'anonymous'
    },
    stamen_watercolor: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://stamen.com/" target="_blank">Stamen Design</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'stamen_watercolor',
      minZoom: 0,
      maxZoom: 16,
      crossOrigin: 'anonymous'
    },
    osm_bright: {
      attributions: ['<a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>', '<a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>', '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'],
      layer: 'osm_bright',
      minZoom: 0,
      maxZoom: 20,
      tilePixelRatio: 2,
      crossOrigin: 'anonymous'
    },
    NONE: ''
  },
  mapquest: {
    MapQuestOpen: {
      layer: 'osm'
    },
    MapQuestHyb: {
      layer: 'hyb'
    },
    MapQuestSat: {
      layer: 'sat'
    },
    NONE: ''
  },
  mapbox: {
    Mapbox: {
      tileSize: [512, 512],
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },
    MapboxClassic: {
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  otm: {
    attributions: 'Kartendaten: ' + OSM_REL_ATTRIBUTION + ', SRTN | Kartendarstellung © <a target="_blank" rel="noopener" href="https://opentopomap.org/">OpenTopoMap</a> (<a target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  },
  mapz: {
    attributions: '© 2021 <a target=\"_blank\" href=\"http://www.mapz.com\">mapz.com </a>' + ' ' + OSM_REL_ATTRIBUTION,
    minZoom: 0,
    maxZoom: 22,
    tilePixelRatio: 2
  },
  klokan: {
    OpenMapTiles: {
      format: new _format.MVT(),
      tileGrid: (0, _tilegrid.createXYZ)({
        tileSize: 512,
        maxZoom: 22
      }),
      //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },
    TileHosting: {
      format: new _format.MVT(),
      tileGrid: (0, _tilegrid.createXYZ)({
        tileSize: 512,
        maxZoom: 22
      }),
      //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://tilehosting.com/">TileHosting</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  here: {
    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles &copy; ' + new Date().getFullYear() + ' ' + '<a target="_blank" rel="noopener" href="https://developer.here.com">HERE</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  thunderforest: {
    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" rel="noopener" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous'
    }
  }
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */



/**
 * Language constants (en)
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsGerman = void 0;
var langConstantsGerman = exports.langConstantsGerman = {
  LANG: 'de',
  NAME: 'Name',
  HIDE: 'Zuklappen',
  CLOSE: 'Schließen',
  POINT: 'POI',
  FREEHAND: 'Freihand',
  LINE: 'Linie',
  POLYGON: 'Fläche',
  CIRCLE: 'Kreis',
  PERIMETER: 'Umfang',
  LENGTH: 'Länge',
  SURFACEAREA: 'Flächeninhalt',
  RADIUS: 'Radius',
  REFRESH: 'Aktualisieren',
  ACCEPT: 'Akzeptieren',
  CANCEL: 'Abbrechen',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',
  CTRL_ZOOM_IN: 'Vergrößern',
  CTRL_ZOOM_OUT: 'Verkleinern',
  CTRL_ZOOM_EXT: 'Maximal verkleinern',
  CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
  CTRL_ZOOM_POS: 'Zum aktuellen Standort',
  CTRL_ZOOM_SLIDER: 'Zoom Slider',
  CTRL_RESET_ROTATION: 'Rotation (touch, ctrl+shift+mouse) zurücksetzen',
  CTRL_PORTSIDE: 'Portside ein-/ausblenden',
  CTRL_ROUTER: 'Router ein-/ausblenden',
  CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
  CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
  CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
  CTRL_ACCOUNT: 'Account ein-/ausblenden',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
  CTRL_START_SEARCH: 'Suche starten',
  CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
  CTRL_SIDEBOARD: 'Element ein-/ausblenden',
  CTRL_STARBOARD: 'Elementauswahl ein-/ausblenden',
  CTRL_ATTRIBUTION: 'Attribution anzeigen',
  CTRL_GRID: 'Gitter ein-/ausblenden',
  CTRL_PERMALINK: 'Permalink generieren',
  CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
  CTRL_PRINT: 'Karte exportieren',
  CTRL_BASELAYER: 'Basiskartenwechsler ein-/ausschalten',
  CTRL_INFOAREA: 'Infobereich öffnen/schließen',
  STARBOARD: 'Kartenelemente',
  STARBOARD_BASELAYER: 'Basiskarten',
  STARBOARD_LAYER: 'Ebenen',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',
  STARBOARD_ELEMENT_ZOOM: 'Auf Element zoomen',
  STARBOARD_ELEMENT_TRIGGER: 'Element in Karte schalten',
  STARBOARD_ELEMENT_TRIGGER_1: 'Element ',
  STARBOARD_ELEMENT_TRIGGER_2: ' in Karte schalten',
  STARBOARD_ELEMENT_CHILDS: 'Kindelemente anzeigen',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zu ',
  STARBOARD_ELEMENT_ZOOM_AFTER: ' zoomen',
  LAYERSWITCHER_TOGGLE_ALL: "Alle Elemente",
  SIDEBOARD: 'Sideboard',
  RESET_FILTER: 'Filter zurücksetzen',
  GEOSEARCH: 'Suche',
  OVERVIEWMAP: 'Übersichtskarte',
  TOOLTIP_POSITION: 'Eigener Standort',
  MEASURETOOLS: 'Messwerkzeuge',
  MEASURETOOLS_INFO: 'Wählen Sie einen Messtyp overviewaus und starten Sie die Messung durch das Klicken in die Karte.',
  MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',
  ELEMENTS_SCOPE: 'Elemente im Kartenausschnitt',
  INFOPAGE: 'Informationen',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',
  SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',
  DIST: 'Entfernung',
  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-en.js":
/*!**************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-en.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsEnglish = void 0;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Language constants (en)
 */
var langConstantsEnglish = exports.langConstantsEnglish = {
  LANG: 'en',
  NAME: 'Name',
  HIDE: 'Hide',
  CLOSE: 'Close',
  POINT: 'POI',
  FREEHAND: 'freehand',
  LINE: 'Line',
  POLYGON: 'Area',
  CIRCLE: 'Circle',
  PERIMETER: 'Perimeter',
  LENGTH: 'Length',
  SURFACEAREA: 'Surface area',
  RADIUS: 'Radius',
  REFRESH: 'Refresh',
  ACCEPT: 'Accept',
  CANCEL: 'Cancel',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',
  CTRL_ZOOM_IN: 'Zoom in',
  CTRL_ZOOM_OUT: 'Zoom out',
  CTRL_ZOOM_EXT: 'Fit to extent',
  CTRL_ZOOM_HOME: 'jump to initial position',
  CTRL_ZOOM_POS: 'jump to browser/device position',
  CTRL_ZOOM_SLIDER: 'Zoom slider',
  CTRL_RESET_ROTATION: 'Reset rotation (touch, ctrl+shift+mouse)',
  CTRL_PORTSIDE: 'Toggle portside',
  CTRL_EDITOR: 'Toggle editor',
  CTRL_MEASURETOOLS: 'Toggle measuretools',
  CTRL_INFOPAGE: 'Toggle infopage',
  CTRL_ADDITIONALPANEL: 'Toggle panel',
  CTRL_ACCOUNT: 'Toggle account',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Toggle geosearch',
  CTRL_START_SEARCH: 'start search',
  CTRL_OVERVIEWMAP: 'Toggle overviewmap',
  CTRL_SIDEBOARD: 'Toggle element',
  CTRL_STARBOARD: 'Toggle element selection',
  CTRL_ATTRIBUTION: 'Show attribution',
  CTRL_GRID: 'Toggle grid',
  CTRL_PERMALINK: 'Generate Permalink',
  CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
  CTRL_PRINT: 'Export map',
  CTRL_BASELAYER: 'Switch base map changer on/off',
  CTRL_INFOAREA: 'Open/close info area',
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
  EDITOR_FEATURE_APPLY: 'End modification',
  EDITOR_FEATURE_DELETE: 'Delete active feature',
  EDITOR_FEATURE_MODIFY: 'Modify feature',
  EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
  EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',
  STARBOARD: 'Layerswitcher',
  STARBOARD_BASELAYER: 'Baselayer',
  STARBOARD_LAYER: 'Layer',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Map elements',
  STARBOARD_ELEMENT_ZOOM: 'Zoom to element',
  STARBOARD_ELEMENT_TRIGGER: 'Trigger element in map',
  STARBOARD_ELEMENT_TRIGGER_1: 'Trigger ',
  STARBOARD_ELEMENT_TRIGGER_2: ' in map',
  STARBOARD_ELEMENT_CHILDS: 'Show child elements',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zoom to element ',
  STARBOARD_ELEMENT_ZOOM_AFTER: '',
  LAYERSWITCHER_TOGGLE_ALL: "All elements",
  RESET_FILTER: 'Reset filter',
  MEASURETOOLS: 'Measuretools',
  MEASURETOOLS_INFO: 'Select a measuretype and start measuring by clicking on the map.',
  MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',
  GEOSEARCH: 'Search',
  OVERVIEWMAP: 'Overview map',
  TOOLTIP_POSITION: 'own position',
  ELEMENTS_SCOPE: 'Elements in current scope',
  INFOPAGE: 'Infopage',
  INFOPAGE_VIEW_TRIGGER: 'Show informations',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Show account',
  SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',
  DIST: 'Distance',
  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-constant.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cssConstants = void 0;
var cssConstants = exports.cssConstants = {
  OPEN: 'c4g-open',
  CLOSE: 'c4g-close',
  CLOSEABLE: 'c4g-closeable',
  ENABLED: 'c4g-enabled',
  DISABLED: 'c4g-disabled',
  HIDE: 'c4g-hide',
  ICON: 'c4g-icon',
  CONTROL: 'c4g-control',
  COPY: 'c4g-copy',
  REFRESH: 'c4g-refresh',
  ACTIVE: 'c4g-active',
  INACTIVE: 'c4g-inactive',
  LOADING: 'c4g-loading',
  ANIMATION_SPIN: 'c4g-animation-spin',
  LARGE: 'c4g-large',
  SMALL: 'c4g-small',
  HORIZONTAL: 'c4g-horizontal',
  VERTICAL: 'c4g-vertical',
  ATTRIBUTION_LOGO: 'c4g-attribution-logo',
  CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
  CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
  CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
  CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
  CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
  GEOSEARCH: 'c4g-geosearch',
  GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
  GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
  GEOSEARCH_START: 'c4g-geosearch-start',
  GRATICULE: 'c4g-graticule',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
  PRINT: 'c4g-print',
  INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
  INFOPAGE: 'c4g-infopage',
  ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
  ADDITIONALPANEL: 'c4g-additionalpanel',
  OVERVIEWMAP: 'c4g-overviewmap',
  OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
  PERMALINK: 'c4g-permalink',
  PERMALINK_POPUP: 'c4g-permalink-popup',
  POPUP_CLOSE: 'c4g-popup-close',
  POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
  POPUP_ROUTE_FROM: 'c4g-popup-route-from',
  POPUP_ROUTE_TO: 'c4g-popup-route-to',
  PORTSIDE: 'c4g-portside',
  PORTSIDE_CONTAINER: 'c4g-portside-container',
  PORTSIDE_CONTROL: 'c4g-portside-control',
  PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
  PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
  PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
  PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
  PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
  PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
  PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
  PORTSIDE_HEADLINE: 'c4g-portside-headline',
  PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
  PORTSIDE_BUTTON: 'c4g-portside-button',
  PORTSIDE_HIDE: 'c4g-portside-hide',
  PORTSIDE_CLOSE: 'c4g-portside-close',
  SPINNER: 'c4g-spinner',
  STARBOARD: 'c4g-starboard',
  STARBOARD_CONTAINER: 'c4g-starboard-container',
  STARBOARD_CONTROL: 'c4g-starboard-control',
  STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
  STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
  STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
  STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
  STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
  STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
  STARBOARD_HEADLINE: 'c4g-starboard-headline',
  STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
  STARBOARD_BUTTON: 'c4g-starboard-button',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
  STARBOARD_CLOSE: 'c4g-starboard-close',
  STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
  STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
  STARBOARD_LAYERTREE: 'c4g-layertree',
  STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
  STARBOARD_LOCSTYLE: 'c4g-starboard-locstyle',
  STARBOARD_LOCSTYLE_POINT: 'c4g-starboard-locstyle-point',
  STARBOARD_LOCSTYLE_SQUARE: 'c4g-starboard-locstyle-square',
  STARBOARD_LOCSTYLE_STAR: 'c4g-starboard-locstyle-star',
  STARBOARD_LOCSTYLE_X: 'c4g-starboard-locstyle-x',
  STARBOARD_LOCSTYLE_CROSS: 'c4g-starboard-locstyle-cross',
  STARBOARD_LOCSTYLE_TRIANGLE: 'c4g-starboard-locstyle-triangle',
  TOOLTIP_POPUP: 'c4g-tooltip-popup',
  ZOOM_LEVEL: 'c4g-zoom-level',
  OL_CONTROL: 'ol-control',
  OL_UNSELECTABLE: 'ol-unselectable',
  OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
  OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
  OL_VIEWPORT: 'ol-viewport',
  OL_ZOOM: 'ol-zoom',
  OL_ZOOM_IN: 'ol-zoom-in',
  OL_ZOOM_EXT: 'ol-zoom-extent',
  OL_ZOOM_HOME: 'ol-zoom-home',
  OL_ZOOM_POS: 'ol-zoom-position',
  OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
  OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
  OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
  OL_ZOOM_SLIDER: 'ol-zoom-slider',
  OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',
  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Zoomlevel = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../MapsBundle/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
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
'use strict';
var Zoomlevel = exports.Zoomlevel = /*#__PURE__*/function (_Control) {
  function Zoomlevel(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, Zoomlevel);
    _this = _callSuper(this, Zoomlevel, [options]);
    var self, element, updateZoomlevel;
    self = (0, _assertThisInitialized2["default"])(_this);
    if (!options || !options.mapController) {
      console.warn('Zoomlevel control needs to know the map.');
      return (0, _possibleConstructorReturn2["default"])(_this, false);
    }

    // default options
    options = jQuery.extend({
      className: _c4gMapsConstant.cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);
    var mapView = options.mapController.map.getView();
    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = parseInt(mapView.getZoom());
    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(mapView.getZoom());
    };
    options.mapController.map.getView().on('change:resolution', function () {
      updateZoomlevel();
    });
    _this.view = mapView;

    // inheritance-stuff
    return _this = _callSuper(this, Zoomlevel, [{
      element: element,
      target: options.target
    }]);
  }
  (0, _inherits2["default"])(Zoomlevel, _Control);
  return (0, _createClass2["default"])(Zoomlevel);
}(_control.Control);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-controls.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-controls.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapsControls = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsControlZoomlevel = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "../MapsBundle/src/Resources/public/js/c4g-maps-control-zoomlevel.js");
var _c4gMapsInteractionGeopicker = __webpack_require__(/*! ./c4g-maps-interaction-geopicker */ "../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker.js");
var _c4gMapsInteractionGeopickerGeojson = __webpack_require__(/*! ./c4g-maps-interaction-geopicker-geojson */ "../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker-geojson.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _coordinate = __webpack_require__(/*! ol/coordinate */ "../MapsBundle/node_modules/ol/coordinate.js");
var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var langConstants = {};
'use strict';
var MapsControls = exports.MapsControls = /*#__PURE__*/function () {
  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  function MapsControls(mapController) {
    (0, _classCallCheck2["default"])(this, MapsControls);
    this.mapController = mapController;
    this.controls = {};
    this.leftSlideElements = [];
    this.rightSlideElements = [];
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapController.data);
  }
  return (0, _createClass2["default"])(MapsControls, [{
    key: "init",
    value: function init() {
      var map = this.mapController.map;
      var proxy = this.mapController.proxy;
      var mapData = this.mapController.data;

      // add control-containers ===
      //
      // top-left
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      this.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
      this.controlContainerTopLeft = controlContainerTopLeft;
      // bottom-left
      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerTopLeft).after(controlContainerBottomLeft);
      // element needs to be moved when Portside will be opened
      this.leftSlideElements.push(controlContainerBottomLeft);
      // top-right
      var controlContainerTopRight = document.createElement('div');
      controlContainerTopRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerBottomLeft).after(controlContainerTopRight);
      // element needs to be moved when Starboard will be opened
      this.rightSlideElements.push(controlContainerTopRight);
      // bottom-right
      var controlContainerBottomRight = document.createElement('div');
      controlContainerBottomRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerTopRight).after(controlContainerBottomRight);
      // element needs to be moved when Starboard will be opened
      this.rightSlideElements.push(controlContainerBottomRight);
      var buttons = [{
        name: 'layerswitcher',
        sort: mapData.layerswitcher.enable
      }, {
        name: 'baselayerswitcher',
        sort: mapData.baselayerswitcher.enable
      }, {
        name: 'geosearch',
        sort: mapData.geosearch.enable
      }, {
        name: 'legend',
        sort: mapData.legend.enable
      }, {
        name: 'measure',
        sort: mapData.measuretools.enable
      }, {
        name: 'permalink',
        sort: mapData.permalink.enable
      }];
      var sortBy = function sortBy(key) {
        return function (a, b) {
          return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
        };
      };
      buttons.sort(sortBy('sort'));
      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (parseInt(button.sort) <= 0) {
          continue;
        }
        switch (button.name) {
          case 'overview':
            var ovmTarget = document.createElement("div");
            ovmTarget.className = "c4g-sideboard c4g-overviewmap-container c4g-close";
            this.mapController.$overlaycontainer_stopevent.append(ovmTarget);

            // const scope = this;
            // const addOverviewMap = function() {
            //     var overviewMapOptions = {
            //         target: controlContainerTopLeft,
            //         mapController: scope.mapController,
            //         ovmTarget: ovmTarget,
            //         layers: [proxy.baselayerController.arrBaselayers[proxy.activeBaselayerId].layer]
            //     };
            //
            //     if (scope.overviewMap) {
            //         // we are reloading the overview map, so keep the collapsed-property
            //         overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
            //     }
            //
            //     scope.overviewMap = new OverviewMap(overviewMapOptions);
            //     scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
            //     map.addControl(scope.controls.overviewmap);
            // };
            //
            // if (proxy.baselayers_loaded) {
            //     addOverviewMap();
            // } else {
            //     proxy.hook_baselayer_loaded.push(addOverviewMap);
            // }
            //
            // // add hook to synchronize overviewmap with baselayer
            // window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
            // window.c4gMapsHooks.baselayer_changed.push(function(baselayerId) {
            //     map.removeControl(scope.controls.overviewmap);
            //     scope.overviewMap.removeFromMap();
            //     addOverviewMap();
            // });
            break;
          default:
        }
      }

      // backend-geopicker
      if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
        this.controls.geopicker = new _c4gMapsInteractionGeopicker.GeoPicker({
          mapContainer: this.mapController
        });
        this.mapController.map.addInteraction(this.controls.geopicker);
        if (mapData.geopicker.type === "frontend") {
          // substring is needed here for taking out the #
          if (mapData.geopicker.input_geo_x && mapData.geopicker.input_geo_x) {
            var geoxField = document.getElementById(mapData.geopicker.input_geo_x.substring(1));
            var geoyField = document.getElementById(mapData.geopicker.input_geo_y.substring(1));
            if (geoxField && geoyField) {
              var locGeox = geoxField.value;
              var locGeoy = geoyField.value;
              if (locGeox && locGeoy) {
                var numerized = [parseFloat(locGeox, 10), parseFloat(locGeoy, 10)];
                var transformed = (0, _proj.transform)(numerized, (0, _proj.get)('EPSG:4326'), (0, _proj.get)('EPSG:3857'));
                this.mapController.map.getView().setCenter(transformed);
              }
            }
          }
        }
      } else if (mapData.geopicker && mapData.geopicker.type) {
        this.controls.geopicker = new _c4gMapsInteractionGeopickerGeojson.GeoPickerGeoJSON({
          mapContainer: this.mapController
        });
        this.mapController.map.addInteraction(this.controls.geopicker);
      }

      //con4gis logo
      if (mapData.attribution.cfg_logo) {
        var logoLink = document.createElement('a');
        logoLink.href = 'https://con4gis.org';
        logoLink.title = 'built with con4gis';
        logoLink.target = '_blank';
        logoLink.rel = 'noopener noreferrer';
        logoLink.className = _c4gMapsConstant.cssConstants.ATTRIBUTION_LOGO;
        var logoGraphic = document.createElement('img');
        logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
        logoGraphic.alt = 'con4gis logo';
        logoGraphic.height = '24px';
        logoGraphic.width = '67px';
        logoLink.appendChild(logoGraphic);
        controlContainerBottomLeft.appendChild(logoLink);
      }

      // scaleline
      if (mapData.scaleline) {
        this.controls.scaleline = new _control.ScaleLine({
          target: controlContainerBottomLeft
        });
        map.addControl(this.controls.scaleline);
      }

      // zoom-level & mouse-position
      if (mapData.zoomlevel || mapData.mouseposition) {
        // wrapper for zoom-level and mouse-position
        var controlContainerBottomLeftSub = document.createElement('div');
        controlContainerBottomLeftSub.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL_SUB + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
        jQuery(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
        // display zoom-level
        if (mapData.zoomlevel) {
          this.controls.zoomlevel = new _c4gMapsControlZoomlevel.Zoomlevel({
            mapController: this.mapController,
            target: controlContainerBottomLeftSub,
            undefinedHTML: 'N/A'
          });
          map.addControl(this.controls.zoomlevel);
        }
        // display mouse-position
        if (mapData.mouseposition) {
          this.controls.mouseposition = new _control.MousePosition({
            projection: 'EPSG:4326',
            coordinateFormat: _coordinate.toStringHDMS,
            target: controlContainerBottomLeftSub,
            undefinedHTML: 'N/A'
          });
          map.addControl(this.controls.mouseposition);
        }
      }
      // show attribution
      if (mapData.attribution.enable) {
        var attrOptions = {
          label: ' ',
          tipLabel: langConstants.CTRL_ATTRIBUTION,
          collapseLabel: ' ',
          target: mapData.attribution.div ? mapData.attribution.div : controlContainerBottomLeft,
          collapsible: !mapData.attribution.div && !mapData.attribution.always_show
        };
        if (mapData.attribution.div) {
          attrOptions["className"] = "ol-attribution ol-attribution-ext-div";
        }
        this.controls.attribution = new _control.Attribution(attrOptions);
        if (!mapData.attribution.always_show) {
          this.controls.attribution.setCollapsed(mapData.attribution.div ? false : mapData.attribution.collapsed === '1');
        }
        map.addControl(this.controls.attribution);
      }
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js":
/*!**************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;
var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-de.js");
var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-en.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */

function getLanguage(mapData) {
  if (mapData && mapData.lang === "de") {
    return _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData && mapData.lang === "en") {
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  }
}

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker-geojson.js":
/*!***************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker-geojson.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoPickerGeoJSON = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _format = __webpack_require__(/*! ol/format */ "../MapsBundle/node_modules/ol/format.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
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
'use strict';
var GeoPickerGeoJSON = exports.GeoPickerGeoJSON = /*#__PURE__*/function (_Draw) {
  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  function GeoPickerGeoJSON(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, GeoPickerGeoJSON);
    var mapData = options.mapContainer.data;
    var vectorSource = new _source.Vector({});
    var vectorLayer = new _layer.Vector({
      source: vectorSource
    });
    options.mapContainer.map.addLayer(vectorLayer);
    _this = _callSuper(this, GeoPickerGeoJSON, [{
      type: mapData.geopicker.type,
      freehand: true,
      // style: this.geoPickerStyleFunction,
      source: vectorSource
    }]);
    _this.vectorSource = vectorSource;
    _this.$fieldGeoJSON = jQuery(mapData.geopicker.input_geojson);
    if (_this.$fieldGeoJSON.val()) {
      try {
        var geojson = new _format.GeoJSON({
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857"
        });
        var feature = geojson.readFeature(_this.$fieldGeoJSON.val());
        _this.vectorSource.addFeature(feature);
      } catch (e) {
        console.log(e);
      }
    }
    _this.on('drawstart', function (event) {
      _this.vectorSource.clear();
    });
    _this.on('drawend', function (event) {
      var geojson = new _format.GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      var strFeature = geojson.writeFeature(event.feature);
      _this.$fieldGeoJSON.val(strFeature);
    });
    return _this;
  }
  (0, _inherits2["default"])(GeoPickerGeoJSON, _Draw);
  return (0, _createClass2["default"])(GeoPickerGeoJSON);
}(_interaction.Draw);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker.js":
/*!*******************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-interaction-geopicker.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoPicker = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _extent = __webpack_require__(/*! ol/extent */ "../MapsBundle/node_modules/ol/extent.js");
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
'use strict';
var GeoPicker = exports.GeoPicker = /*#__PURE__*/function (_Interaction) {
  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  function GeoPicker(options) {
    var _this;
    (0, _classCallCheck2["default"])(this, GeoPicker);
    var mapData, mapContainer, lat, lon, latIdx, lonIdx, latRnd, lonRnd;
    _this = _callSuper(this, GeoPicker, [{
      handleEvent: options.handleEvent
    }]);
    _this.options = options || {};
    if (!_this.options.mapContainer || !_this.options.mapContainer.data) {
      console.warn('The GeoPicker needs a "mapContainer" in order to work.');
      return (0, _possibleConstructorReturn2["default"])(_this, false);
    }
    mapData = _this.options.mapContainer.data;
    mapContainer = _this.options.mapContainer;
    // configurate geopicker
    _this.$fieldGeoX = jQuery(mapData.geopicker.input_geo_x);
    _this.$fieldGeoY = jQuery(mapData.geopicker.input_geo_y);
    _this.opticLayerSource = new _source.Vector({});
    _this.opticLayerVector = new _layer.Vector({
      source: _this.opticLayerSource,
      style: _this.geoPickerStyleFunction
    });
    _this.opticLayerFeature = null;
    if (_this.$fieldGeoX.val() && _this.$fieldGeoY.val()) {
      lat = _this.$fieldGeoY.val();
      lon = _this.$fieldGeoX.val();
      if (mapData.geopicker.anonymous) {
        _this.$fieldGeoY.remove();
        _this.$fieldGeoX.remove();
        latIdx = lat.indexOf('.');
        lonIdx = lon.indexOf('.');
        lat = lat.replace(/\D/g, "");
        lon = lon.replace(/\D/g, "");
        latRnd = Math.round(Math.random() * (9999999999 - 1) + 1);
        lonRnd = Math.round(Math.random() * (9999999999 - 1) + 1);
        if (latRnd > 4999999999) {
          lat = parseInt(lat) - latRnd;
        } else {
          lat = parseInt(lat) + latRnd;
        }
        if (lonRnd < 5000000000) {
          lon = parseInt(lon) - lonRnd;
        } else {
          lon = parseInt(lon) + lonRnd;
        }
        lat = lat + "";
        lon = lon + "";
        lat = lat.substr(0, latIdx) + '.' + lat.substr(latIdx, lat.length - latIdx);
        lon = lon.substr(0, lonIdx) + '.' + lon.substr(lonIdx, lon.length - lonIdx);
      }
      _this.opticLayerFeature = new _ol.Feature({
        geometry: new _geom.Point((0, _proj.fromLonLat)([parseFloat(lon), parseFloat(lat)])),
        pickerColor: [0, 180, 100, 1],
        anonymous: mapData.geopicker.anonymous
      });
      _this.opticLayerSource.addFeature(_this.opticLayerFeature);
      if (!(0, _extent.isEmpty)(_this.opticLayerSource.getExtent())) {
        mapContainer.map.getView().fit(_this.opticLayerSource.getExtent(), mapContainer.map.getSize());
      }

      // set zoom so we can see some tiles without error
      mapContainer.map.getView().setZoom(15);
    } else if (mapData.geoLocation && typeof mapData.geoLocation.setTracking === 'function') {
      mapData.geoLocation.setTracking(true);
    }
    mapContainer.map.addLayer(_this.opticLayerVector);

    //TODO wenn geopicker.clickDisabled (oder so) gesetzt ist, this.options.handleEvent = function(){}
    return _this;
  }
  (0, _inherits2["default"])(GeoPicker, _Interaction);
  return (0, _createClass2["default"])(GeoPicker, [{
    key: "geoPickerStyleFunction",
    value: function geoPickerStyleFunction(feature, projection, getId) {
      var color, white, result;
      if (getId) {
        return -1;
      }
      white = [255, 255, 255, 1];
      if (feature && typeof feature.get === 'function' && feature.get('pickerColor')) {
        color = feature.get('pickerColor');
      } else {
        color = [200, 0, 0, 0.7];
      }
      result = [];
      if (feature && typeof feature.get === 'function' && !feature.get('anonymous')) {
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 2,
            fill: new _style.Fill({
              color: color
            }),
            stroke: new _style.Stroke({
              color: white,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 20,
            stroke: new _style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 20,
            stroke: new _style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 40,
            stroke: new _style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 40,
            stroke: new _style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      }
      result.push(new _style.Style({
        image: new _style.Circle({
          radius: 60,
          stroke: new _style.Stroke({
            color: white,
            width: 4
          })
        }),
        zIndex: Infinity
      }));
      result.push(new _style.Style({
        image: new _style.Circle({
          radius: 60,
          stroke: new _style.Stroke({
            color: color,
            width: 2
          })
        }),
        zIndex: Infinity
      }));
      return result;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(mapBrowserEvent) {
      if (mapBrowserEvent.type === "singleclick") {
        if (!this.options.disableClickEvent && !this.options.mapContainer.data.geopicker.disabled) {
          return !this.pick(mapBrowserEvent.coordinate);
        }
      }
      return true;
    }
  }, {
    key: "pick",
    value: function pick(coordinate) {
      var arrLatLon;
      arrLatLon = (0, _proj.toLonLat)(coordinate);
      this.opticLayerFeature = new _ol.Feature({
        geometry: new _geom.Point(coordinate)
      });
      this.opticLayerSource.clear();
      this.opticLayerSource.addFeature(this.opticLayerFeature);
      this.$fieldGeoX.val(arrLatLon[0]);
      this.$fieldGeoY.val(arrLatLon[1]);
      this.$fieldGeoX.change();
      this.$fieldGeoY.change();
      return true;
    }
  }]);
}(_interaction.Interaction);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-maphover.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-misc-maphover.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapHover = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ./c4g-maps-misc-tooltippopup */ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-tooltippopup.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _Observable = __webpack_require__(/*! ol/Observable */ "../MapsBundle/node_modules/ol/Observable.js");
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

'use strict';
var MapHover = exports.MapHover = /*#__PURE__*/function () {
  /**
   * @TODO
   * [MapHover description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function MapHover(options) {
    (0, _classCallCheck2["default"])(this, MapHover);
    this.options = options || {};

    // default options
    this.options = jQuery.extend({
      // mapController: undefined,
      activate: true
    }, this.options);
    if (!this.options.mapController) {
      console.warn('MapHover needs a mapController');
      return false;
    }

    // set needed vars
    this.listenerKey = false;
    this.map = this.options.mapController.map;
    this.lastFeatureStyle = null;
    this.lastHoveredFeature = null;
    // create tooltip
    this.hoverTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
      map: this.map,
      offset: [10, 10],
      orientation: this.options.mapController.data.tooltipOrientation || "bottom-left",
      horizontal: true,
      closeable: false
    });
    this.hoverTooltip.hide();
    if (this.options.activate) {
      this.activate();
    }
  }

  /**
   * @TODO: [activate description]
   *
   * @return  {[type]}  [description]
   */
  return (0, _createClass2["default"])(MapHover, [{
    key: "activate",
    value: function activate() {
      if (!this.listenerKey) {
        this.listenerKey = this.map.on('pointermove', this.getHoverFunction(), this);
        //this.map.on('pointermove', this.changeFeatureStyles(), this);
      }
    } // end of "activate()"

    /**
     * @TODO: [deactivate description]
     *
     * @return  {[type]}  [description]
     */
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.listenerKey) {
        (0, _Observable.unByKey)(this.listenerKey);
        this.listenerKey = false;
      }
    } // end of "deactivate()"

    /**
     * @TODO: [isActive description]
     *
     * @return  {[type]}  [description]
     */
  }, {
    key: "isActive",
    value: function isActive() {
      if (this.listenerKey) {
        return true;
      }
      return false;
    } // end of "getState()"

    /**
     * @TODO: [getHoverFunction description]
     *
     * @return  {[type]}  [description]
     */
  }, {
    key: "getHoverFunction",
    value: function getHoverFunction() {
      var self = this;
      return function (event) {
        var hovered,
          clustered,
          tooltipContent,
          tooltipHelper,
          features,
          tooltipLength,
          resolution,
          canvas,
          mapData = self.options.mapController.data,
          proxy = self.options.mapController.proxy;
        clustered = false;
        hovered = self.map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
          return {
            feature: feature,
            layer: layer
          };
        });
        resolution = self.map.getView().getResolution();
        if (!hovered) {
          self.hoverTooltip.hide();
          canvas = document.querySelector(".ol-viewport");
          jQuery(canvas).css('cursor', 'default');
          if (mapData.hover_popups === '1' && mapData.hover_popups_stay != '1') {
            self.options.mapController.proxy.popupController.removePopup();
          }
          if (self.lastHoveredFeature && self.lastFeatureStyle) {
            self.lastHoveredFeature.setStyle(false);
            self.lastHoveredFeature = null;
          }
          return false;
        }
        canvas = document.querySelector(".ol-viewport");
        if (!hovered.feature.get('noCursor')) {
          jQuery(canvas).css('cursor', 'pointer');
        }
        if (hovered.feature && typeof hovered.feature.get === 'function' && hovered.feature.get('features')) {
          if (hovered.feature.get('features')[1]) {
            clustered = true;
          } else {
            hovered.feature = hovered.feature.get('features')[0];
          }
        }
        if (hovered.feature.get("hover_location") || self.lastHoveredFeature && self.lastHoveredFeature.get("hover_location")) {
          if (self.lastHoveredFeature && hovered.feature === self.lastHoveredFeature) {
            return false;
          }

          //set back styles when the features are not hovered anymore
          if (self.lastFeatureStyle) {
            if (self.lastHoveredFeature) {
              if (hovered.feature !== self.lastHoveredFeature) {
                if (self.lastFeatureStyle) {
                  self.lastHoveredFeature.setStyle(self.lastFeatureStyle);
                  //console.log("Changed back feature style");
                } else if (self.lastLayerStyle) {
                  self.lastHoveredFeature.setStyle(self.lastLayerStyle);
                  //console.log("Changed back layer-feature style");
                }
              }
            }
          }
          if (hovered.feature && (0, _typeof2["default"])(hovered.feature.getStyleFunction) && typeof hovered.feature.getStyleFunction === 'function' && typeof hovered.feature.getStyleFunction() === 'function') {
            self.lastHoveredFeature = hovered.feature;
            if (!(self.lastFeatureStyle = hovered.feature.getStyle())) {
              self.lastLayerStyle = hovered.layer.getStyle();
              self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
            }

            //TODO get onhover style from db (vllt schon in proxy drin?)
            if (hovered.feature.get('hover_style') && proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                var style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);
                hovered.feature.setStyle(style);
              }
            }
          } else if (hovered.layer && (0, _typeof2["default"])(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function') {
            if (hovered.feature) {
              self.lastHoveredFeature = hovered.feature;
            } else {
              self.lastHoveredFeature = hovered.layer.getSource().getFeatures()[0];
              self.lastHoveredFeature = self.lastHoveredFeature.get('features')[0];
            }
            self.lastLayerStyle = hovered.layer.getStyle();
            self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
            if (hovered.feature.get('hover_style')) {
              if (!proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
                var arrIds = [];
                arrIds.push(hovered.feature.get("hover_style"));
                proxy.locationStyleController.loadLocationStyles(arrIds);
                self.lastHoveredFeature = null;
                return null;
              }
              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                if (!proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style) {
                  proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].getStyleFunction();
                }
                var _style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);
                hovered.feature.setStyle(_style);
              }
            }
          }
        }
        if (hovered && hovered.feature && hovered.feature.get('styleUrl')) {
          //if this property is set, we have a feature that has none of our styles => no tooltip
          return false;
        }
        // catch the case the layer is a baselayer (vector tiles)
        if (hovered && hovered.layer && hovered.layer.type === "VECTOR_TILE") {
          return false;
        }

        // set hover tooltips
        tooltipContent = false;
        if (!clustered && hovered.feature && typeof hovered.feature.get === 'function' && (hovered.feature.get('tooltip') || hovered.feature.get('graphicTitle'))) {
          tooltipContent = hovered.feature.get('tooltip');
          if (!tooltipContent) {
            tooltipContent = hovered.feature.get('graphicTitle');
          } else if ((0, _typeof2["default"])(tooltipContent) === 'object' && tooltipContent.element && tooltipContent.element.childNodes[1]) {
            tooltipContent = tooltipContent.element.childNodes[1].innerHTML;
          }
          // @TODO: Check & fix
        } else if (hovered.feature && (0, _typeof2["default"])(hovered.feature.getStyleFunction) && hovered.feature.get('locstyle') && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')] && proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip;
          // @TODO: Check
        } else if (hovered.layer && (0, _typeof2["default"])(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip;
        } else if (hovered.layer && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip;
        } else if (hovered.layer && hovered.layer.tooltip) {
          tooltipContent = hovered.layer.tooltip;
        }
        if (clustered && hovered.feature.get('features')) {
          features = hovered.feature.get('features');
          if (features[0].get('tooltip') && features[0].get('tooltip_length')) {
            tooltipContent = features[0].get('tooltip');
            tooltipLength = parseInt(features[0].get('tooltip_length'));
            for (var i = 1; i < features.length; i++) {
              if (features[i].get('tooltip') && features[i].get('tooltip') != '') {
                tooltipContent = tooltipContent + ', ' + features[i].get('tooltip');
              }
            }
            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          } else if (hovered.layer.tooltip && hovered.layer.tooltip_length) {
            tooltipHelper = tooltipContent;
            tooltipContent = '';
            tooltipLength = parseInt(hovered.layer.tooltip_length);
            for (i = 0; i < features.length; i++) {
              var singleTooltip = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipHelper, features[i], hovered.layer, mapData.lang);
              if (singleTooltip != '') {
                if (tooltipContent == '') tooltipContent = singleTooltip;else tooltipContent = tooltipContent + ', ' + singleTooltip;
              }
            }
            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          }
        }
        if (tooltipContent) {
          tooltipContent = _c4gMapsUtils.utils.decodeGeoJsonProperty(tooltipContent);

          // replace placeholders if possible
          if (hovered.feature.get('features')) {}
          tooltipContent = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipContent, hovered.feature, hovered.layer, mapData.lang);
          if (tooltipContent.trim()) {
            // popup config
            self.hoverTooltip.setPosition(event.coordinate);
            self.hoverTooltip.setContent(tooltipContent);
            self.hoverTooltip.show();
          } else {
            self.hoverTooltip.hide();
          }
        } else {
          self.hoverTooltip.hide();
        }
        if (mapData.hover_popups === '1' && !clustered && hovered.feature) {
          var popupInfos = {};
          if (hovered.feature.get('popup')) {
            popupInfos = hovered.feature.get('popup');
          } else if (hovered.feature.get('loc_linkurl')) {
            return;
          } else if (hovered.layer && hovered.layer.popup) {
            popupInfos = hovered.layer.popup;
          } else {
            return;
          }
          var coord = hovered.feature.getGeometry().getCoordinates();
          if (!coord || coord && coord[0] && coord[0].length) {
            var extent = hovered.feature.getGeometry().getExtent();
            coord = self.map.getCoordinateFromPixel(event.pixel);
            coord = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
          }
          self.options.mapController.proxy.handlePopup(hovered.feature, hovered.layer);
        }
      };
    } // end of "getHoverFunction()"
  }, {
    key: "changeFeatureStyles",
    value: function changeFeatureStyles() {
      //TODO: change style of features which are hovered and have the option to change style on hover enabled
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-spinner.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-misc-spinner.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Spinner = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

'use strict';
var Spinner = exports.Spinner = /*#__PURE__*/function () {
  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function Spinner(opt_options) {
    (0, _classCallCheck2["default"])(this, Spinner);
    var options, target, spinnerSpan;
    options = opt_options || {};

    // default options
    options = jQuery.extend({
      className: '',
      target: '.' + _c4gMapsConstant.cssConstants.OL_VIEWPORT
    }, options);
    if (options.className) {
      options.className = ' ' + options.className;
    }
    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.SPINNER + options.className + ' ' + _c4gMapsConstant.cssConstants.HIDE;
    jQuery(options.target).append(this.element);
    spinnerSpan = document.createElement('span');
    spinnerSpan.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);
    this.additionalActivationCounter = 0;
  }
  return (0, _createClass2["default"])(Spinner, [{
    key: "show",
    value: function show() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TooltipPopUp = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

'use strict';
var TooltipPopUp = exports.TooltipPopUp = /*#__PURE__*/function () {
  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function TooltipPopUp(opt_options) {
    (0, _classCallCheck2["default"])(this, TooltipPopUp);
    var self, addClassName, closeButton;
    self = this;
    this.options = opt_options || {};

    // default options
    this.options = jQuery.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options);

    // prepare additional classes
    addClassName = '';
    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }
    if (this.options.horizontal) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.CLOSEABLE;
    }
    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.TOOLTIP_POPUP + addClassName;
    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);
      jQuery(closeButton).click(function () {
        self.close();
      });
    }
    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);
    this.overlay = new _ol.Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: this.options.orientation
    });
    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }
    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }
  return (0, _createClass2["default"])(TooltipPopUp, [{
    key: "close",
    value: function close() {
      if (typeof this.options.closeFunction === 'function') {
        this.options.closeFunction();
      }
      if (this.options.map) {
        this.options.map.removeOverlay(this.overlay);
      }
    }

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
  }, {
    key: "show",
    value: function show() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
  }, {
    key: "hide",
    value: function hide() {
      if (!jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [getContent description]
     *
     */
  }, {
    key: "getContent",
    value: function getContent() {
      return this.contentContainer.innerHTML;
    }

    /**
     * @TODO
     * [getPosition description]
     *
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.overlay.getPosition();
    }

    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.contentContainer.innerHTML = content;
    }

    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */
  }, {
    key: "setPosition",
    value: function setPosition(coordinates) {
      this.overlay.setPosition(coordinates);
    }
  }]);
}(); // End of "add methods to TooltipPopUp"

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fnTestInfoPopup = exports.fnStandardInfoPopup = exports.fnReducedInfoPopup = exports.fnMessstation = exports.fnContentTourism = exports.fnContentStreetsTraffic = exports.fnContentStorage = exports.fnContentSports = exports.fnContentShipping = exports.fnContentRoute = exports.fnContentProtectedArea = exports.fnContentPetrol = exports.fnContentNatural = exports.fnContentLanduse = exports.fnContentInformationCity = exports.fnContentHydrants = exports.fnContentHistoric = exports.fnContentHealthcare = exports.fnContentGeneralInformations = exports.fnContentEmergency = exports.fnContentCuisine = exports.fnContentBarriers = exports.fnContentAmenity = exports.fnContentAerodrome = exports.fnContent = void 0;
function trim(zeichenkette) {
  return zeichenkette.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}
function translate(value) {
  var val = trim(value);
  if (val === "yes") return "Ja";
  if (val === "Yes") return "Ja";
  if (val === "no") return "Nein";
  if (val === "No") return "nein";
  if (val === "limited") return "Eingeschränkt";
  if (val === "designated") return "Ja";
  if (val === "wood") return "Holz";
  if (val === "metal") return "Metall";
  if (val === "concrete") return "Beton";
  if (val === "plastic") return "Plastik";
  if (val === "stone") return "Stein";
  if (val === "steel") return "Stahl";
  if (val === "brick") return "Ziegel";
  if (val === "reinforced_concrete") return "Stahlbeton";
  if (val === "masonry") return "Mauerwerk";
  return value;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(feature, imageSrc) {
  var attr = feature.getProperties();
  var result = "";
  result += fnHeader(attr, imageSrc);
  result += fnContent(attr);
  var id = feature.get("osm_type") ? feature.get("osm_type") + "/" + feature.getId() : feature.getId();
  result += fnFooter(attr, id);
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
};
var fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(feature, style) {
  var attr = feature.getProperties();
  var result = "";
  var reduce = false;
  var imageSrc;
  if (typeof style === "function") {
    imageSrc = style.call(feature)[0].getImage().getSrc();
  } else {
    imageSrc = style.getImage().getSrc();
  }
  if (attr.amenity === "restaurant" || attr.amenity === "pub" || attr.amenity === "biergarten") var reduce = true;
  if (attr.tourism === "hotel") var reduce = true;
  if (attr.tourism === "guest_house") var reduce = true;
  if (attr.tourism === "chalet") var reduce = true;
  if (attr.tourism === "hostel") var reduce = true;
  if (attr.tourism === "alpine_hut") var reduce = true;
  if (attr.tourism === "artwork" || attr.amenity === "artwork") var reduce = true;
  if (attr.tourism === "museum" || attr.amenity === "museum") var reduce = true;
  if (attr.amenity === "cinema") var reduce = true;
  if (attr.amenity === "theatre") var reduce = true;
  if (attr.amenity === "attraction" || attr.amenity === "fountain" || attr.historic === "monument" || attr.historic === "city_gate" || attr.historic === "ruins" || attr.historic === "castle" || attr.tourism === "attraction") var reduce = true;
  if (attr.leisure === "playground") var reduce = true;
  if (attr.aerialway) var reduce = true;
  if (attr.amenity === "swimming_pool" || attr.leisure === "swimming_pool" || attr.sport === "swimming") var reduce = true;
  if (attr.railway === "station") var reduce = true;
  if (attr.sport === "swimming") var reduce = true;
  if (attr.leisure === "swimming_pool") var reduce = true;
  if (attr.amenity === "swimming_pool") var reduce = true;
  if (attr.leisure === "waterpark") var reduce = true;
  if (attr.water_park) var reduce = true;
  if (attr.leisure === "sports_centre") var reduce = true;
  switch (reduce) {
    case false:
      result += fnHeader(attr, imageSrc);
      result += fnContent(attr);
      var id = feature.get("osm_type") ? feature.get("osm_type") + "/" + feature.getId() : feature.getId();
      result += fnFooter(attr, id);
      break;
    case true:
      result += fnHeader(attr, imageSrc);
      break;
  }
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
};
function fnHeader(attr, icon) {
  var header = "";
  var icon_width = "32px";
  if (attr.name || attr["piste:name"] || attr["xmas:name"] || attr["xmas:location"]) {
    if (attr.name) var featurename = attr.name;
    if (attr["piste:name"]) var featurename = attr["piste:name"];
    if (attr["xmas:name"]) var featurename = attr["xmas:name"];
    if (attr["xmas:location"]) var featurename = attr["xmas:location"];
    if (icon) {
      featurename = '<img src="' + icon + '" width="' + icon_width + '" name="' + featurename + '" alt="' + featurename + '"><div class="c4g_popup_header_featurename">' + featurename + "</div>";
    } else {
      featurename = '<name="' + featurename + '" alt="' + featurename + '"><div class="c4g_popup_header_featurename">' + featurename + "</div>";
    }
    header += featurename;
  } else {
    if (icon) header += '<img src="' + icon + '" width="' + icon_width + '" name="' + icon + '" alt="' + icon + '">';
  }
  header += fnGetTranslate_Type(attr);
  header = '<div class="c4g_popup_header">' + header + "</div>";
  return header;
}
function fnFooter(attr, id) {
  var footer = "";
  var plz = "";
  var umbruch = false;
  if (attr["addr:housename"]) {
    footer += "Gebäudename: " + attr["addr:housename"] + "<br/>";
    umbruch = true;
  }
  if (attr["addr:floor"]) {
    footer += "Etage: " + attr["addr:floor"] + "<br/>";
    umbruch = true;
  } else if (attr["addr:level"]) {
    footer += "Etage: " + attr["addr:level"] + "<br/>";
    umbruch = true;
  }
  if (attr["addr:street"]) {
    footer += attr["addr:street"];
    if (attr["addr:housenumber"]) {
      footer += " " + attr["addr:housenumber"] + "<br/>";
    } else {
      footer += "<br/>";
    }
    umbruch = true;
  }
  if (attr["addr:postcode"]) {
    footer += attr["addr:postcode"] + " ";
  }
  if (attr["addr:city"]) {
    footer += attr["addr:city"] + "<br/>";
    umbruch = true;
  }
  if (attr.sqkm) {
    attr.sqkm = "" + attr.sqkm;
    if (attr.sqkm.length > 3) {
      var mod = attr.sqkm.length % 3;
      var output = mod > 0 ? attr.sqkm.substring(0, mod) : "";
      for (i = 0; i < Math.floor(attr.sqkm.length / 3); i++) {
        if (mod === 0 && i === 0) output += attr.sqkm.substring(mod + 3 * i, mod + 3 * i + 3);else output += "." + attr.sqkm.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      footer += "Fläche: " + output + " Km²" + "<br/>";
    } else footer += "Fläche " + attr["sqkm"] + "<br/>";
  }
  if (attr["contact:phone"]) {
    if (isMobile()) {
      footer += "Telefon: " + '<a href="tel:' + attr["contact:phone"] + '">' + attr["contact:phone"] + "</a><br/>";
      umbruch = true;
    } else {
      footer += "Telefon: " + '<a href="callto:' + attr["contact:phone"] + '">' + attr["contact:phone"] + "</a><br/>";
      umbruch = true;
    }
  }
  if (attr.phone) {
    if (isMobile()) {
      footer += "Telefon: " + '<a href="tel:' + attr.phone + '">' + attr.phone + "</a><br/>";
      umbruch = true;
    } else {
      footer += "Telefon: " + '<a href="callto:' + attr.phone + '">' + attr.phone + "</a><br/>";
      umbruch = true;
    }
  }
  if (attr["contact:fax"]) {
    footer += "Telefax: " + attr["contact:fax"] + "<br/>";
    umbruch = true;
  } else if (attr.fax) {
    footer += "Telefax: " + attr.fax + "<br/>";
    umbruch = true;
  }
  if (attr["contact:email"]) {
    footer += "E-Mail-Adresse: " + '<a href="mailto:' + attr["contact:email"] + '">' + attr["contact:email"] + "</a><br/>";
    umbruch = true;
  } else if (attr.email) {
    footer += "E-Mail-Adresse: " + '<a href="mailto:' + attr.email + '">' + attr.email + "</a><br/>";
    umbruch = true;
  }
  if (umbruch) footer += "<br/>";
  if (attr.opening_hours) {
    var open = attr.opening_hours;
    var open_idx = 0;
    while (open_idx === 0 || open.indexOf(";") > 0) {
      open = open.replace("PH", "FT");
      open = open.replace("Tu", "Di");
      open = open.replace("We", "Mi");
      open = open.replace("Th", "Do");
      open = open.replace("Su", "So");
      open = open.replace("Mar", "Mär");
      open = open.replace("May", "Mai");
      open = open.replace("Oct", "Okt");
      open = open.replace("Dec", "Dez");
      open = open.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"');
      open = open.replace("off", "ausgenommen");
      if (open_idx > 0) {
        open = open.replace(";", "<br/>");
      }
      open_idx++;
    }
    footer += "Öffnungszeiten: " + '<br/><div class="c4g_open_text">' + open + "</div>";
    if (open.indexOf("FT") > 0) {
      footer += "(FT = Feiertag)<br/>";
    } else {
      footer += "<br/>";
    }
  }
  if (attr["xmas:opening_hours"]) {
    var open = attr["xmas:opening_hours"];
    var open_idx = 0;
    while (open_idx === 0 || open.indexOf(";") > 0) {
      open = open.replace("PH", "FT");
      open = open.replace("Tu", "Di");
      open = open.replace("We", "Mi");
      open = open.replace("Th", "Do");
      open = open.replace("Su", "So");
      open = open.replace("Mar", "Mär");
      open = open.replace("May", "Mai");
      open = open.replace("Oct", "Okt");
      open = open.replace("Dec", "Dez");
      if (open_idx > 0) {
        open = open.replace(";", "<br/>");
      }
      open_idx++;
    }
    footer += "Öffnungszeiten: " + '<br/><div class="c4g_open_text">' + open + "</div>";
    if (open.indexOf("FT") > 0) {
      footer += "(FT = Feiertag)<br/>";
    } else {
      footer += "<br/>";
    }
  }
  if (attr["xmas:url"]) {
    var str = "";
    str = attr["xmas:url"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'Website: <a href="' + str + '" target="_blank">Link zur Website</a><br/>';
  }
  if (attr["contact:website"]) {
    var str = "";
    str = attr["contact:website"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'Website: <a href="' + str + '" target="_blank">Link zur Website</a><br/>';
  } else if (attr.website) {
    var str = "";
    str = attr.website;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'Website: <a href="' + str + '" target="_blank">Link zur Website</a><br/>';
  }
  if (attr.wikipedia) {
    var str = "";
    str = attr.wikipedia;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "https://wikipedia.org/wiki/" + str;
    }
    footer += 'Wikipedia: <a href="' + str + '" target="_blank">Link zu Wikipedia</a><br/>';
  }
  if (attr.wikimedia_commons) {
    var str = "";
    str = attr.wikimedia_commons;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "https://commons.wikimedia.org/wiki/" + str;
    }
    footer += 'Wikimedia: <a href="' + str + '" target="_blank">Link zu Wikimedia</a><br/>';
  }
  if (attr["contact:webcam"]) {
    var str = "";
    str = attr["contact:webcam"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'Webcam: <a href="' + str + '" target="_blank">Link zur Webcam</a><br/>';
  }
  if (attr.image) footer += '<img src="' + attr.image + '" width="200px" name="' + attr.name + '" alt="' + attr.name + '"><br/>';
  var internet_access = "";
  if (attr.internet_access) {
    internet_access += "Internetzugriff: " + translate(attr.internet_access) + "<br/>";
  }
  if (attr["internet_access:fee"]) {
    internet_access += "Internet Gebühr: " + translate(attr["internet_access:fee"]) + "<br/>";
  }
  if (attr["wifi_access:operator"]) {
    internet_access += "wifi Betreiber: " + attr["wifi_access:operator"] + "<br/>";
  }
  if (attr["wifi_access:technology"]) {
    internet_access += "wifi Technologie: " + attr["wifi_access:technology"] + "<br/>";
  }
  if (attr["wifi_access:ssid"]) {
    internet_access += "wifi ssid: " + attr["wifi_access:ssid"] + "<br/>";
  }
  if (internet_access !== "") {
    footer += "Internetzugang vorhanden" + '<br/><div class="c4g_shop_internet_access">' + internet_access + "</div><br/>";
  }
  if (attr.wheelchair) footer += "rollstuhlgeeignet: " + translate(attr.wheelchair) + "<br/>";
  if (attr["wheelchair:description"]) footer += "Beschreibung: " + attr["wheelchair:description"] + "<br/>";
  if (attr["wheelchair:entrance_width"]) footer += "Breite des Eingangs in CM: " + attr["wheelchair:entrance_width"] + "<br/>";
  if (attr["wheelchair:step_height"]) footer += "Höhe der Stufe am Eingang in CM: " + attr["wheelchair:step_height"] + "<br/>";
  if (attr["wheelchair:rooms"]) footer += "Anzahl rollstuhlgerechter Räume: " + attr["wheelchair:rooms"] + "<br/>";
  if (attr["wheelchair:places"]) footer += "Anzahl der Rollstuhlplätze: " + attr["wheelchair:places"] + "<br/>";
  if (attr["cent:places"]) footer += "Anzahl der Rollstuhlplätze: " + attr["wheelchair:places"] + "<br/>";
  if (attr["ramp:wheelchair"]) footer += "Rampe für Rollstuhlfahrer: " + attr["ramp:wheelchair"] + "<br/>";
  if (attr["capacity:disabled"]) footer += "Behindertenparkplätze: " + translate(attr["capacity:disabled"]) + "<br/>";
  if (attr["toilets:wheelchair"]) footer += "Behinderdengerechte Toilette: " + translate(attr["toilets:wheelchair"]) + "<br/>";
  if (attr.centralkey) footer += "Zentralschlüssel: " + attr.centralkey + "<br/>";
  if (attr.note) footer += attr.note + "<br/>";
  if (attr.description) footer += attr.description + "<br/>";
  if (attr.operator) footer += "Betreiber: " + attr.operator + "<br/>";
  if (attr.ref) footer += "Referenz: " + attr.ref + "<br/>";
  if (attr.lit === "yes") footer += "Dieses Objekt ist beleuchtet." + "<br/>";
  if (attr.shop) {
    var shopstr = "";
    if (attr.brand) shopstr += "Markenzeichen: " + attr.brand + "<br/>";
    if (attr.sells) shopstr += "Verkaufs: " + attr.sells + "<br/>";
    if (attr.origin) shopstr += "Herkunftsländer: " + attr.origin + "<br/>";
    if (attr.wholesale === "yes") shopstr += "Großhändler: Ja" + "<br/>";
    if (shopstr !== "") footer += "Weitere Angaben zum Shop: " + '<br/><div class="c4g_shop_text">' + shopstr + "</div><br/>";
  }
  if (id) {
    var str = id;
    trim(str);
    str = str.replace(/\./, "/");
    str = "http://www.openstreetmap.org/" + str;
    footer += "<br/>";
    footer += 'OSM:    <a href="' + str + '" target="_blank">Link zur OpenStreetMap</a><br/>';
  }
  footer = '<div class="c4g_popup_footer">' + footer + "</div>";
  return footer;
}
function fnGetTranslate_Type(attr) {
  var type = "";
  if (attr.amenity === "doctors" || attr.healthcare === "doctor") type += "Arzt<br/>";
  if (attr.amenity === "hospital" || attr.amenity === "clinic" || attr.healthcare === "hospital" || attr.healthcare === "clinic") {
    if (attr.emergency === "yes") type += "Krankenhaus mit Notaufnahme" + "<br/>";else type += "Krankenhaus" + "<br/>";
  }
  if (attr.amenity === "dentist") type += "Zahnarzt" + "<br/>";
  if (attr.amenity === "pharmacy" || attr["health_facility:type"] === "pharmacy") type += "Apotheke" + "<br/>";
  if (attr.healthcare === "physiotherapist" || attr["health_speciality:physiotherapy"] === "yes") type += "Physiotherapeut" + "<br/>";
  if (attr.healthcare === "occupational_therapist" || attr["health_speciality:occupational_therapy"] === "yes" || attr["health_specialty:occupational_therapy"] === "yes") type += "Ergotherapeut" + "<br/>";
  if (attr.healthcare === "psychotherapist" || attr["health_speciality:psychotherapy"] === "yes") type += "Psychotherapeut" + "<br/>";
  if (attr.healthcare === "alternative") type += "Alternativ- und Komplementärmediziner" + "<br/>";
  if (attr.healthcare === "midwife") type += "Hebamme" + "<br/>";
  if (attr.healthcare === "speech_therapist" || attr["health_speciality:speech_therapy"] === "yes") type += "Logopäde" + "<br/>";
  if (attr["health_speciality:music_therapy"] === "yes") type += "Musiktherapeut" + "<br/>";
  if (attr.amenity === "veterinary") type += "Tierarzt" + "<br/>";
  if (attr.amenity === "fire_station") type += "Feuerwehrhaus" + "<br/>";
  if (attr.emergency === "fire_extinguisher") type += "Feuerlöscher" + "<br/>";
  if (attr.emergency === "aed") type += "Mobiler Defibrilator" + "<br/>";
  if (attr.emergency === "defibrillator") type += "Mobiler Defibrilator" + "<br/>";
  if (attr.emergency === "phone") type += "Notrufsäule" + "<br/>";
  if (attr.amenity === "police") type += "Polizeiwache" + "<br/>";
  if (attr.emergency === "ambulance_station") type += "Rettungswache" + "<br/>";
  if (attr.emergency_service === "technical") type += "Technisches Hilfswerk" + "<br/>";
  if (attr.emergency_service === "water") type += "Wasserrettungsstation" + "<br/>";
  if (attr.waterway === "baywatch") type += "Wasserwacht" + "<br/>";
  if (attr.emergency_service === "air") type += "Rettungshubschrauber" + "<br/>";
  if (attr.highway === "emergency_access_point") type += "Notfallpunkt" + "<br/>";
  if (attr.amenity === "lifeboat_station" || attr.emergency === "lifeboat_station") type += "Rettungsbootstation" + "<br/>";
  if (attr.emergency === "life_ring") type += "Rettungsring" + "<br/>";
  if (attr.emergency === "siren") type += "Sirene" + "<br/>";
  if (attr.amenity === "life_ring") type += "Rettungsring" + "<br/>";
  if (attr.amenity === "rescue_station") type += "Rettungsstation" + "<br/>";
  if (attr.emergency === "fire_hydrant") {
    if (attr["fire_hydrant:type"] === "underground") type += "Unterflurhydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "pillar") type += "Überflurhydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "wall") type += "Wandhydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "pond") type += "Saugstelle" + "<br/>";
  }
  if (attr.emergency === "suction_point") type += "Saugstelle" + "<br/>";
  if (attr.emergency === "fire_water_pond") type += "Löschteich" + "<br/>";
  if (attr.emergency_service === "mountain") type += "Bergrettungsstation" + "<br/>";
  if (attr.emergency === "water_tank") type += "Löschwassertank" + "<br/>";
  if (attr.recycling_type === "container") type += "Recycling Container" + "<br/>";
  if (attr.amenity === "recycling" && attr["recycling:excrement"] === "yes" || attr["seamark:small_craft_facility:category"] === "pump-out") type += "Absaugstation" + "<br/>";else if (attr.amenity === "recycling") type += "Wertstoffhof" + "<br/>";
  if (attr["diet:pescetarian"] === "yes") type += "pescetarische Gerichte vorhanden" + "<br/>";else if (attr["diet:pescetarian"] === "only") type += "nur pescetarische Gerichte" + "<br/>";
  if (attr["diet:vegetarian"] === "yes") type += "vegetarische Gerichte vorhanden" + "<br/>";else if (attr["diet:vegetarian"] === "only") type += "nur vegetarische Gerichte" + "<br/>";
  if (attr["diet:lacto_vegetarian"] === "yes") type += "lacto-vegetarische Gerichte vorhanden" + "<br/>";else if (attr["diet:lacto_vegetarian"] === "only") type += "nur lacto-vegetarische Gerichte" + "<br/>";
  if (attr["diet:ovo_vegetarian"] === "yes") type += "ovo-vegetarische Gerichte vorhanden" + "<br/>";else if (attr["diet:ovo_vegetarian"] === "only") type += "nur ovo-vegetarische Gerichte" + "<br/>";
  if (attr["diet:vegan"] === "yes") type += "vegane Gerichte vorhanden" + "<br/>";else if (attr["diet:vegan"] === "only") type += "nur vegane Gerichte" + "<br/>";
  if (attr["diet:fruitarian"] === "yes") type += "frutarische Gerichte vorhanden" + "<br/>";else if (attr["diet:fruitarian"] === "only") type += "nur frutarische Gerichte" + "<br/>";
  if (attr["diet:raw"] === "yes") type += "rohköstliche Gerichte vorhanden" + "<br/>";else if (attr["diet:raw"] === "only") type += "nur rohköstliche Gerichte" + "<br/>";
  if (attr["diet:gluten_free"] === "yes") type += "glutenfreie Gerichte vorhanden" + "<br/>";else if (attr["diet:gluten_free"] === "only") type += "nur glutenfreie Gerichte" + "<br/>";
  if (attr["diet:dairy_free"] === "yes") type += "milchfreie Gerichte vorhanden" + "<br/>";else if (attr["diet:dairy_free"] === "only") type += "nur milchfreie Gerichte" + "<br/>";
  if (attr["diet:lactose_free"] === "yes") type += "laktosefreie Gerichte vorhanden" + "<br/>";else if (attr["diet:lactose_free"] === "only") type += "nur laktosefreie Gerichte" + "<br/>";
  if (attr["diet:halal"] === "yes") type += "Halāl Gerichte vorhanden" + "<br/>";else if (attr["diet:halal"] === "only") type += "nur Halāl Gerichte" + "<br/>";
  if (attr["diet:kosher"] === "yes") type += "koschere Gerichte vorhanden" + "<br/>";else if (attr["diet:kosher"] === "only") type += "nur koschere Gerichte" + "<br/>";
  if (attr.amenity === "pub") type += "Gaststätte" + "<br/>";
  if (attr.amenity === "bar") type += "Bar" + "<br/>";
  if (attr.frozen_yogurt === "yes") type += "Frozen Yogurt im Angebot" + "<br/>";
  if (attr.slush_ice === "yes") type += "Slush Ice im Angebot" + "<br/>";
  if (attr.cake === "yes") type += "Kuchenteilchen, Gebäck etc. im Angebot" + "<br/>";
  if (attr.coffee === "yes") type += "Kaffeegetränke im Angebot" + "<br/>";
  if (attr.drinks === "yes") type += "Getränke im Angebot" + "<br/>";
  if (attr.amenity === "biergarten") type += "Biergarten" + "<br/>";
  if (attr.amenity === "restaurant") type += "Restaurant" + "<br/>";
  if (attr.amenity === "fast_food") type += "Fast Food Restaurant" + "<br/>";
  if ((attr.amenity === "cafe" || attr.amenity === "coffee_shop") && attr.cuisine !== "ice_cream") type += "Café, Bistro" + "<br/>";
  if (attr.amenity === "cafe" && attr.cuisine === "ice_cream" || attr.amenity === "ice_cream") type += "Eiscafe" + "<br/>";
  if (attr.tourism === "alpine_hut") type += "Berghütte" + "<br/>";
  if (attr.tourism === "aquarium") type += "Aquarium" + "<br/>";
  if (attr.tourism === "apartment") type += "Ferienwohnung" + "<br/>";
  if (attr.tourism === "attraction") type += "Sehenswürdigkeit" + "<br/>";
  if (attr.tourism === "artwork") type += "Skulptur" + "<br/>";
  if (attr.tourism === "camp_site") type += "Campingplatz" + "<br/>";
  if (attr.tourism === "caravan_site") type += "Wohnmobilstellplatz" + "<br/>";
  if (attr.tourism === "chalet") type += "Ferienwohnung /-haus" + "<br/>";
  if (attr.tourism === "gallery") type += "Kunstgalerie" + "<br/>";
  if (attr.tourism === "guest_house") type += "Pension, Gasthaus, Bed & Breakfast" + "<br/>";
  if (attr.tourism === "hostel") type += "Jugendherberge, Hostel" + "<br/>";
  if (attr.tourism === "hotel") type += "Hotel" + "<br/>";
  if (attr.tourism === "motel") type += "Motel" + "<br/>";
  if (attr.tourism === "museum") type += "Museum" + "<br/>";
  if (attr.tourism === "picnic_site") type += "Rast- und Picknickplatz" + "<br/>";
  if (attr.tourism === "theme_park") type += "Freizeit- oder Themenpark" + "<br/>";
  if (attr.tourism === "viewpoint") type += "Aussichtspunkt" + "<br/>";
  if (attr.tourism === "wilderness_hut") type += "Schutzhütte" + "<br/>";
  if (attr.tourism === "wine_cellar") type += "Weinkeller" + "<br/>";
  if (attr.tourism === "zoo") {
    type += "Zoo / Tierpark" + "<br/>";
    if (attr.zoo === "enclosure") {
      type += "mit Wildgehege" + "<br/>";
    }
    if (attr.zoo === "petting_zoo") {
      type += "mit Streichelzoo" + "<br/>";
    }
    if (attr.zoo === "falconry") {
      type += "mit Falknerei" + "<br/>";
    }
  }
  if (attr.tourism === "trail_riding_station") type += "Wanderreitstation" + "<br/>";
  if (attr.club === "fishing") type += "Angelverein" + "<br/>";
  if (attr.club === "sport" && attr.sport === "fishing") type += "fishing club" + "<br/>";
  if (attr.club === "amateur_radio") type += "Amateurfunker" + "<br/>";
  if (attr.club === "art") type += "Kunstverein" + "<br/>";
  if (attr.club === "astronomy") type += "Astronomieverein" + "<br/>";
  if (attr.club === "automobile") type += "Automobilverein" + "<br/>";
  if (attr.club === "board_games") type += "Brettspielverein" + "<br/>";
  if (attr.club === "card_games") type += "Kartenspielverein" + "<br/>";
  if (attr.club === "charity") type += "Charity-Verein" + "<br/>";
  if (attr.club === "chess") type += "Schachverein" + "<br/>";
  if (attr.club === "cinema") type += "Kinoverein" + "<br/>";
  if (attr.club === "cooking") type += "Kochverein" + "<br/>";
  if (attr.club === "culture") type += "Kulturverein" + "<br/>";
  if (attr.club === "doityourself") type += "doityourself-Verein" + "<br/>";
  if (attr.club === "equestrian") type += "Reitverein" + "<br/>";
  if (attr.club === "ethnic") type += "Ethnischer Verein" + "<br/>";
  if (attr.club === "fan") type += "Fanverein" + "<br/>";
  if (attr.club === "freemasonry") type += "Freimaurer-Verein" + "<br/>";
  if (attr.club === "game") type += "Spieleverein" + "<br/>";
  if (attr.club === "history") type += "Historischer-Verein / Verein für Geschichte" + "<br/>";
  if (attr.club === "hunting") type += "Jagdverein" + "<br/>";
  if (attr.club === "linux") type += "Linux-Verein" + "<br/>";
  if (attr.club === "motorcycle") type += "Motorradverein" + "<br/>";
  if (attr.club === "music") type += "Musikverein" + "<br/>";
  if (attr.club === "nature") type += "Naturverein" + "<br/>";
  if (attr.club === "nudism") type += "Nudisten-Verein / FKK-Verein" + "<br/>";
  if (attr.club === "photography") type += "Fotografieverein" + "<br/>";
  if (attr.club === "politics") type += "Verein für Politik" + "<br/>";
  if (attr.club === "relegion") type += "Politischer-Verein" + "<br/>";
  if (attr.club === "scout") type += "Pfadfinderin/Pfadfinder" + "<br/>";
  if (attr.club === "smoke") type += "Raucherverein" + "<br/>";
  if (attr.club === "sport") type += "Sportverein" + "<br/>";
  if (attr.club === "theatre") type += "Theaterverein" + "<br/>";
  if (attr.club === "veterans") type += "Veteranen" + "<br/>";
  if (attr.leisure === "amusement_arcade") type += "Spielhalle" + "<br/>";
  if (attr.leisure === "beach_resort") type += "Standbad" + "<br/>";
  if (attr.leisure === "bird_hide") type += "Vogelbeobachtungspunkt" + "<br/>";
  if (attr.leisure === "common") type += "Öffentliche Grünflächen" + "<br/>";
  if (attr.leisure === "club") type += "Club/Verein" + "<br/>";
  if (attr.leisure === "dance") type += "Tanzen" + "<br/>";
  if (attr.leisure === "dog_park") type += "Hundepark" + "<br/>";
  if (attr.leisure === "firepit") type += "Feuerstelle" + "<br/>";
  if (attr.leisure === "fishing") type += "Angelstelle" + "<br/>";
  if (attr.leisure === "garden") type += "Garten" + "<br/>";
  if (attr.leisure === "golf_course") type += "Golfplatz" + "<br/>";
  if (attr.leisure === "hackerspace") type += "Ort für Hackertreffen" + "<br/>";
  if (attr.leisure === "horse_riding") type += "Reitstall / Reiterhof" + "<br/>";
  if (attr.leisure === "ice_rink") type += "Eislaufbahn" + "<br/>";
  if (attr.leisure === "nature_reserve") type += "Naturschutzgebiet (NSG)" + "<br/>";
  if (attr.leisure === "park") type += "Grünanlage" + "<br/>";
  if (attr.leisure === "miniature_golf") type += "Minigolf" + "<br/>";
  if (attr.leisure === "pitch") type += "Spielfeld" + "<br/>";
  if (attr.leisure === "pitch" && attr.building === "yes") type += "Sporthalle" + "<br/>";
  if (attr.leisure === "playground" && attr.building === "yes") type += "Spielscheune" + "<br/>";else if (attr.leisure === "playground") type += "Spielplatz" + "<br/>";
  if (attr.leisure === "social_club") type += "Treffpunkt für Freizeitgruppen" + "<br/>";
  if (attr.leisure === "spa") type += "Heilbad / Spa" + "<br/>";
  if (attr.leisure === "sports_centre") type += "Sportzentrum" + "<br/>";
  if (attr.sport === "climbing_adventure") type += "Seilgarten" + "<br/>";
  if (attr.leisure === "stadium") type += "Stadion" + "<br/>";
  if (attr.leisure === "swimming_pool") type += "Schwimmbecken" + "<br/>";
  if (attr.leisure === "track") type += "Rennbahn" + "<br/>";
  if (attr.leisure === "water_park") type += "Wasserpark" + "<br/>";
  if (attr.leisure === "wildlife_hide") type += "Wildbeobachtungspunkt" + "<br/>";
  if (attr.leisure === "adult_gaming_centre") type += "Spielothek" + "<br/>";
  if (attr.leisure === "bowling_alley" && attr.sport === "10pin") type += "Bowlingcenter" + "<br/>";
  if (attr.leisure === "bowling_alley" && attr.sport === "9pin") type += "Kegelbahn" + "<br/>";
  if (attr.sport === "karting" || attr.sport === "motor") type += "Kart-/Motorsport" + "<br/>";
  if (attr.sport === "darts" || attr.sport === "dart") type += "Darts" + "<br/>";
  if (attr["piste:type"]) {
    switch (attr["piste:type"]) {
      case "skitour":
        type += "Piste für Skitouren" + "<br/>";
        break;
      case "downhill":
        type += "Skiabfahrt" + "<br/>";
        break;
      case "sled":
        type += "Rodelberg / Rodelstrecke" + "<br/>";
        break;
      case "nordic":
        type += "Langlauf Piste" + "<br/>";
        break;
      case "hike":
        type += "Schneeschuh- und Winterwanderweg" + "<br/>";
        break;
      case "snow_park":
        type += "Snow-Park" + "<br/>";
        break;
    }
  }
  if (attr["sport"]) {
    switch (attr["sport"]) {
      case "surfing":
        type += "Surfen" + "<br/>";
        break;
      case "kitesurfing":
        type += "Kitesurfen" + "<br/>";
        break;
      case "water_ski":
        type += "Wasserski" + "<br/>";
        break;
    }
  }
  if (attr.aerialway) {
    switch (attr.aerialway) {
      case "cable_bar":
        type += "Lift mit Gondeln" + "<br/>";
        break;
      case "gondola":
        type += "Lift mit Gondeln" + "<br/>";
        break;
      case "chair_lift":
        type += "Sessellift" + "<br/>";
        break;
      case "mixed_lift":
        type += "Lift mit Sesseln und Gondeln" + "<br/>";
        break;
      case "drag_lift":
        type += "Skilift" + "<br/>";
        break;
      case "t-bar":
        type += "T-Lift" + "<br/>";
        break;
      case "t-bar":
        type += "T-Lift (einseitig)" + "<br/>";
        break;
      case "platter":
        type += "Lift mit Sitzscheibe" + "<br/>";
        break;
      case "rope_tow":
        type += "Bügellift" + "<br/>";
        break;
      case "magic_carpet":
        type += "Beförderungsband" + "<br/>";
        break;
      default:
        type += "unbekannt";
    }
  }
  if (attr.building === "mosque") type += "Moschee" + "<br/>";
  if (attr.building === "synagogue") type += "Synagoge" + "<br/>";
  if (attr.building === "apartments") type += "Wohnung" + "<br/>";
  if (attr.building === "farm") type += "Farm" + "<br/>";
  if (attr.building === "hotel") type += "Hotel" + "<br/>";
  if (attr.building === "house") type += "Haus" + "<br/>";
  if (attr.building === "detached") type += "Freistehend" + "<br/>";
  if (attr.building === "residential") type += "Residenz" + "<br/>";
  if (attr.building === "domitory" || attr.building === "residential plus") type += "Wohnheim" + "<br/>";
  if (attr.building === "terrace") type += "Terrasse" + "<br/>";
  if (attr.building === "houseboat") type += "Hausboot" + "<br/>";
  if (attr.building === "bungalow") type += "Bungalow" + "<br/>";
  if (attr.building === "static_caravan") type += "Stehender Wohnwagen" + "<br/>";
  if (attr.building === "commercial") type += "Kommerziell" + "<br/>";
  if (attr.building === "retail") type += "Verkauf" + "<br/>";
  if (attr.building === "warehouse") type += "Lagerhaus" + "<br/>";
  if (attr.building === "bakehouse") type += "Backstube" + "<br/>";
  if (attr.building === "temple") type += "Tempel" + "<br/>";
  if (attr.building === "shrine") type += "Schrein" + "<br/>";
  if (attr.building === "civic") type += "Bürgerlich" + "<br/>";
  if (attr.building === "stadium") type += "Stadium" + "<br/>";
  if (attr.building === "train_station") type += "Bahnhof" + "<br/>";
  if (attr.building === "university") type += "Universität" + "<br/>";
  if (attr.building === "public") type += "Öffentliches Gebäude" + "<br/>";
  if (attr.building === "bridge") type += "Brücke" + "<br/>";
  if (attr.building === "bunker") type += "Bunker" + "<br/>";
  if (attr.building === "cabin") type += "Hütte" + "<br/>";
  if (attr.building === "conservatory") type += "Wintergarten" + "<br/>";
  if (attr.building === "construction") type += "Im Bau" + "<br/>";
  if (attr.building === "garage") type += "Garage" + "<br/>";
  if (attr.building === "garages") type += "Garagen" + "<br/>";
  if (attr.building === "greenhouse") type += "Gewächshaus" + "<br/>";
  if (attr.building === "hangar") type += "Hangar" + "<br/>";
  if (attr.building === "hut") type += "Hütte" + "<br/>";
  if (attr.building === "pavillion") type += "Pavillion" + "<br/>";
  if (attr.building === "roof") type += "Überdacht" + "<br/>";
  if (attr.building === "shed") type += "Gartenhäuschen" + "<br/>";
  if (attr.building === "transformer_tower") type += "Transformator Turm" + "<br/>";
  if (attr.building === "service") type += "Service-Stelle" + "<br/>";
  if (attr.building === "kiosk") type += "Kiosk" + "<br/>";
  if (attr.building === "carport") type += "Carport" + "<br/>";
  if (attr.building === "ruins") type += "Ruinen" + "<br/>";
  if (attr.amenity === "gambling") type += "Spielhalle" + "<br/>";
  if (attr.amenity === "library") type += "Bücherei" + "<br/>";
  if (attr.amenity === "fountain") type += "Brunnen" + "<br/>";
  if (attr.amenity === "attraction") type += "Sehenswürdigkeit" + "<br/>";
  if (attr.amenity === "social_centre" || attr.amenity === "club") type += "Verein / Club" + "<br/>";
  if (attr.amenity === "townhall") type += "Rathaus / Bürgerhaus" + "<br/>";
  if (attr.amenity === "bench") type += "Parkbank" + "<br/>";
  if (attr.amenity === "grave_yard" || attr.landuse === "cemetery") type += "Friedhof" + "<br/>";
  if (attr.amenity === "post_box") type += "Briefkasten" + "<br/>";
  if (attr.amenity === "post_office") type += "Postamt" + "<br/>";
  if (attr.amenity === "telephone") type += "Telefon" + "<br/>";
  if (attr.amenity === "atm") type += "Geldautomat" + "<br/>";
  if (attr.amenity === "bank") type += "Bankfiliale" + "<br/>";
  if (attr.amenity === "toilets" && attr.diaper === "yes") {
    type += "Öffentliche Toilette mit Wickeltisch" + "<br/>";
  } else if (attr.amenity === "toilets") {
    type += "Öffentliche Toilette" + "<br/>";
  }
  if (attr.amenity === "school" && attr["isced:level"] === "1") {
    type += "Grundschule" + "<br/>";
  } else if (attr.amenity === "school" && attr["isced:level"] === "2") {
    type += "Sekundarstufe I" + "<br/>";
  } else if (attr.amenity === "school" && attr["isced:level"] === "3") {
    type += "Sekundarstufe II" + "<br/>";
  } else if (attr.amenity === "school") {
    type += "Schule" + "<br/>";
  }
  if (attr.amenity === "kindergarten") type += "Kindergarten" + "<br/>";
  if (attr.amenity === "internet_cafe") type += "Internetcafé" + "<br/>";
  if (attr.amenity === "daycare") type += "Kinder- und Jugendtagesstätte" + "<br/>";
  if (attr.amenity === "childcare") type += "Kinder- und Jugendtagesstätte" + "<br/>";
  if (attr.amenity === "university") type += "Universität/Hochschule" + "<br/>";
  if (attr.amenity === "college") type += "Universität/Hochschule" + "<br/>";
  if (attr.amenity === "shelter") type += "Unterstand" + "<br/>";
  if (attr.amenity === "bbq") type += "Grillplatz" + "<br/>";
  if (attr.amenity === "nightclub") type += "Diskothek / Nachtklub" + "<br/>";
  if (attr.amenity === "bicycle_parking") type += "Fahrradparkplatz" + "<br/>";
  if (attr.amenity === "bicycle_rental") type += "Fahrradverleih" + "<br/>";
  if (attr.amenity === "boat_sharing") type += "Bootsverleih" + "<br/>";
  if (attr.amenity === "car_sharing") type += "Car-Sharing" + "<br/>";
  if (attr.amenity === "cinema") type += "Kino" + "<br/>";
  if (attr.amenity === "swimming_pool") type += "Schwimmbad" + "<br/>";
  if (attr.amenity === "embassy" || attr.diplomatic === "embassy") type += "Botschaft" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "consulate") type += "Konsulate" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "consulate_general") type += "Generalkonsulate" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "honorary_consulate") type += "Honorarkonsulate" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "permanent_mission") type += "Ständige Vertretung" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "delegation") type += "Delegation" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "high_commission") type += "Hochkommissariat" + "<br/>";
  if (attr.amenity === "Barfusspfad") type += "Barfußpfad" + "<br/>";
  if (attr.amenity === "casino") type += "Casino" + "<br/>";
  if (attr.amenity === "spa") type += "Heilbad / Spa" + "<br/>";
  if (attr.amenity === "stables") type += "Reitstall / Reiterhof" + "<br/>";
  if (attr.amenity === "watering_place") type += "Wasserstelle / Tränke" + "<br/>";
  if (attr.watering_place === "yes") type += "Wasserstelle / Tränke" + "<br/>";
  if (attr.amenity === "water_point") type += "große Trinkwasserstelle" + "<br/>";
  if (attr.amenity === "taxi") type += "Taxi" + "<br/>";
  if (attr.amenity === "car_wash") type += "Autowaschanlage" + "<br/>";
  if (attr.amenity === "brothel") type += "Bordell, Freudenhaus" + "<br/>";
  if (attr.amenity === "stripclub") type += "Stripclub" + "<br/>";
  if (attr.amenity === "swingerclub") type += "Swingerclub" + "<br/>";
  if (attr.amenity === "planetarium") type += "Planetarium" + "<br/>";
  if (attr.amenity === "courthouse") type += "Gericht" + "<br/>";
  if (attr.amenity === "crematorium") type += "Krematorium" + "<br/>";
  if (attr.amenity === "crypt" || attr.building === "crypt") type += "Krypta" + "<br/>";
  if (attr.amenity === "hunting_stand") type += "Hochsitz" + "<br/>";
  if (attr.amenity === "photo_booth") type += "Fotoautomat" + "<br/>";
  if (attr.amenity === "prison") type += "Gefängnis" + "<br/>";
  if (attr.amenity === "ranger_station") type += "National Park Ranger Station" + "<br/>";
  if (attr.amenity === "register_office") type += "Standesamt" + "<br/>";
  if (attr.amenity === "marketplace") type += "Marktplatz / Wochenmarkt" + "<br/>";
  if (attr.amenity === "solarium") type += "Solarium" + "<br/>";
  if (attr.amenity === "sauna") type += "Sauna" + "<br/>";
  if (attr.amenity === "shower") type += "öffentliche Dusche" + "<br/>";
  if (attr.amenity === "waste_disposal") {
    type += "Müllentsorgung auf öffentlichen Plätzen" + "<br/>";
    if (attr.waste) {
      type += "Art: ";
      switch (attr.waste) {
        case "trash":
          type += "Allgemeiner Müll" + "<br/>";
          break;
        case "oil":
          type += "Oil" + "<br/>";
          break;
        case "drugs":
          type += "Pharmazeutisch" + "<br/>";
          break;
        case "organic":
          type += "Kompost" + "<br/>";
          break;
        case "plastic":
          type += "Plastik" + "<br/>";
          break;
        case "rubble":
          type += "Schutt" + "<br/>";
          break;
        case "cigarettes":
          type += "Zigaretten" + "<br/>";
          break;
        default:
          type += "Allgemeiner Müll" + "<br/>";
      }
    }
  }
  if (attr.amenity === "waste_basket" || attr.waste === "dog_excrement") type += "Hunde-Code Müllcontainer" + "<br/>";
  if (attr.amenity === "scout_camp" || attr.amenity === "scout_hut" || attr.amenity === "scout_hall") type += "Pfadfinderheim" + "<br/>";
  if (attr.amenity === "ferry_terminal") type += "Fährhafen" + "<br/>";
  if (attr.amenity === "bureau_de_change") type += "Geldwechselstube" + "<br/>";
  if (attr.amenity === "youth_club") type += "Jugendzentrum" + "<br/>";
  if (attr.amenity === "festival_grounds") type += "Festivalgelände" + "<br/>";
  if (attr.openfire === "yes" || attr.fireplace === "yes") type += "Offene Feuerstelle" + "<br/>";
  if (attr.amenity === "vending_machine") {
    if (attr.vending) {
      switch (attr.vending) {
        case "admission_tickets":
          type += "Eintrittskartenautomat" + "<br/>";
          break;
        case "animal_feed":
          type += "Tierfutterautomat" + "<br/>";
          break;
        case "bicycle_tube":
          type += "Fahrradschlauchautomat" + "<br/>";
          break;
        case "books":
          type += "Bücherautomat" + "<br/>";
          break;
        case "candles":
          type += "Kerzenautomat" + "<br/>";
          break;
        case "cigarettes":
          type += "Zigarettenautomat" + "<br/>";
          break;
        case "chemist":
          type += "Apotheken/Drogerie Automat" + "<br/>";
          break;
        case "condoms":
          type += "Kondomautomat" + "<br/>";
          break;
        case "drinks":
          type += "Getränkeautomat" + "<br/>";
          break;
        case "electronics":
          type += "Automat für Elektro-Zubehör" + "<br/>";
          break;
        case "elongated_coin":
          type += "Münzprägungsautomat" + "<br/>";
          break;
        case "excrement_bags":
          type += "Hundetütenspender" + "<br/>";
          break;
        case "feminine_hygiene":
          type += "Automat für Damenhygieneprodukte" + "<br/>";
          break;
        case "first_aid":
          type += "Erste-Hilfe-Automat" + "<br/>";
          break;
        case "fishing_tackle":
          type += "Automat für Angelzubehör" + "<br/>";
          break;
        case "fishing_bait":
          type += "Angelköderautomat" + "<br/>";
          break;
        case "flowers":
          type += "Blumenautomat" + "<br/>";
          break;
        case "food":
          type += "Lebensmittel-Automat" + "<br/>";
          break;
        case "ice_cubes":
          type += "Eiswürfelautomat" + "<br/>";
          break;
        case "ice_cream":
          type += "Automat für Speiseeis" + "<br/>";
          break;
        case "ink_cartridges":
          type += "Druckerpatronen Automat" + "<br/>";
          break;
        case "laundry_detergent":
          type += "Waschmittelautomat" + "<br/>";
          break;
        case "public_transport_tickets":
          type += "Fahrkartenautomat" + "<br/>";
          break;
        case "newspaper":
          type += "Zeitungsautomat" + "<br/>";
          break;
        case "parcel_pickup":
          type += "Packstation" + "<br/>";
          break;
        case "parcel_mail_in":
          type += "Paketstation" + "<br/>";
          break;
        case "parking_tickets":
          type += "Parkscheinautomat" + "<br/>";
          break;
        case "photos":
          type += "Fotoautomat" + "<br/>";
          break;
        case "sex_toys":
          type += "Automat für Sexspielzeug" + "<br/>";
          break;
        case "SIM_cards":
          type += "Automat für SIM Karten" + "<br/>";
          break;
        case "stamps":
          type += "Briefmarkenautomat" + "<br/>";
          break;
        case "sweets":
          type += "Süßigkeitenautomat" + "<br/>";
          break;
        case "syringes":
          type += "Spritzenautomat" + "<br/>";
          break;
        case "toll":
          type += "Maut-Automat" + "<br/>";
          break;
        case "toys":
          type += "Spielzeugautomat" + "<br/>";
          break;
        case "umbrellas":
          type += "Regenschirmautomat" + "<br/>";
          break;
        default:
          type += "Verkaufsautomat" + "<br/>";
      }
    } else type += "Verkaufsautomat" + "<br/>";
  }
  if (attr.amenity === "arts_centre") type += "Kulturzentrum" + "<br/>";
  if (attr.amenity === "artwork") type += "Kunstwerk / Kunstobjekt" + "<br/>";
  if (attr.amenity === "museum") type += "Museum" + "<br/>";
  if (attr.amenity === "theatre") type += "Theater" + "<br/>";
  if (attr.building === "cathedral") type += "Kathedrale" + "<br/>";
  if (attr.building === "church") type += "Kirche" + "<br/>";
  if (attr.building === "chapel") type += "Kapelle" + "<br/>";
  if (attr.amenity === "place_of_worship") type += "Kirche / Kultstätte" + "<br/>";
  if (attr.abandoned === "village") type += "Verlassene Stadt" + "<br/>";
  if (attr["abandoned:tourism"] === "theme_park") type += "Verlassener Vergnügungspark" + "<br/>";
  if (attr["abandoned:amenity"] === "prison_camp" && ["concentration_camp"] === "concentration_camp") {}
  if (attr.abandoned === "yes" && attr.military === "bunker") type += "Verlassene Bunkeranlage" + "<br/>";
  if (attr.abandoned === "yes" && attr.military === "barracks") type += "Verlassene Militärbaracken" + "<br/>";
  if (attr.abandoned === "yes" && attr.military === "airfield") type += "Verlassene Militärflugplatz" + "<br/>";
  if (attr.historic === "monastery") type += "Historisches Kloster" + "<br/>";
  if (attr.amenity === "monastery") type += "Kloster" + "<br/>";
  if (attr.building === "monastery") type += "Kloster" + "<br/>";
  if (attr.historic === "manor") type += "Gutshaus / Herrenhaus" + "<br/>";
  if (attr.historic === "boundary_stone") type += "Historischer Grenzstein" + "<br/>";
  if (attr.historic === "milestone") type += "Historischer Meilenstein" + "<br/>";
  if (attr.historic === "monument") type += "Monument" + "<br/>";
  if (attr.historic === "palace") type += "Palast" + "<br/>";
  if (attr.historic === "mine") type += "Verlassene Mine" + "<br/>";
  if (attr.historic === "ruins") type += "Ruine" + "<br/>";
  if (attr.historic_usage === "harbour") type += "historischer Hafen" + "<br/>";
  if (attr.historic === "rune_stone") type += "Runenstein" + "<br/>";
  if (attr.historic === "battlefield") type += "Schlachtfeld" + "<br/>";
  if (attr.historic === "blacksmith") type += "Historische Schmiede" + "<br/>";
  if (attr.historic === "tree_shrine" || attr.historic === "wayside_shrine") type += "Schrein / Bildstock" + "<br/>";
  if (attr.historic === "city_gate") type += "Stadttor" + "<br/>";
  if (attr.historic === "wayside_cross") type += "Wegkreuz" + "<br/>";
  if (attr.amenity === "monument") type += "Denkmal" + "<br/>";
  if (attr.historic === "memorial") type += "Denkmal" + "<br/>";
  if (attr.historic === "optical_telegraph") type += "Optischer Telegraph" + "<br/>";
  if (attr.historic === "castle") {
    if (attr.castle_type) {
      switch (attr.castle_type) {
        case "defensive":
          type += "Burg" + "<br/>";
          break;
        case "palace":
          type += "Palast" + "<br/>";
          break;
        case "stately":
          type += "Schloss" + "<br/>";
          break;
        case "manor":
          type += "Herrenhaus" + "<br/>";
          break;
        case "fortress":
          type += "Festung" + "<br/>";
          break;
        case "castrum":
          type += "Römisches Militärlager" + "<br/>";
          break;
        case "shiro":
          type += "Shiro" + "<br/>";
          break;
        case "kremlin":
          type += "Kreml" + "<br/>";
          break;
        default:
          type += "Schloss / Burg" + "<br/>";
      }
    } else type += "Schloss / Burg" + "<br/>";
  }
  if (attr.historic === "archaeological_site") type += "Archäologische Fundstätte" + "<br/>";
  if (attr.historic === "tomb") {
    if (attr.tomb) {
      switch (attr.tomb) {
        case "tumulus":
          type += "Hügelgrab" + "<br/>";
          break;
        case "rock-cut":
          type += "Felsgrab" + "<br/>";
          break;
        case "hypogeum":
          type += "Hypogäum" + "<br/>";
          break;
        case "war_grave":
          type += "Soldatenfriedhof" + "<br/>";
          break;
        case "mausoleum":
          type += "Mausoleum" + "<br/>";
          break;
        case "columbarium":
          type += "Kolumbarium" + "<br/>";
          break;
        case "crypt":
          type += "Krypta" + "<br/>";
          break;
        case "pyramid":
          type += "Pyramide" + "<br/>";
          break;
        case "sarcophagus":
          type += "Sarkophag" + "<br/>";
          break;
        case "vault":
          type += "Gruft" + "<br/>";
          break;
        case "tombstone":
          type += "Grabstein" + "<br/>";
          break;
        default:
          type += "Historische Grabstätte" + "<br/>";
      }
    } else type += "Historische Grabstätte" + "<br/>";
  }
  if (attr.office === "accountant") type += "Buchhalter / Wirtschaftprüfer" + "<br/>";
  if (attr.office === "administrative") type += "Kreis- bzw. Gemeindebehörde" + "<br/>";
  if (attr.office === "architect") type += "Architekturbüro" + "<br/>";
  if (attr.office === "association") type += "Verein, Vereinigung bzw. Interessengemeinschaft" + "<br/>";
  if (attr.office === "physician") type += "Arzt" + "<br/>";
  if (attr.office === "camping") type += "Rezeption Campingplatz oder Büro Freizeitpark" + "<br/>";
  if (attr.office === "company") type += "Sitz einer privaten Firma" + "<br/>";
  if (attr.office === "educational_institution") type += "Bildungseinrichtung" + "<br/>";
  if (attr.office === "employment_agency") type += "Job-Center / Arbeitsvermittlung" + "<br/>";
  if (attr.office === "estate_agent") type += "Immobilienmakler / Wohnungsbaugenossenschaft" + "<br/>";
  if (attr.office === "forestry") type += "Forstamt" + "<br/>";
  if (attr.office === "foundation") type += "Geschäftsstelle einer Stiftung" + "<br/>";
  if (attr.office === "government") type += "Behörde / Regierungseinrichtung" + "<br/>";
  if (attr.office === "guide") type += "Büro für Touristenführungen" + "<br/>";
  if (attr.office === "insurance") type += "Versicherungsbüro" + "<br/>";
  if (attr.office === "it") type += "IT-Unternehmen" + "<br/>";
  if (attr.office === "lawyer") type += "Rechtsanwaltskanzlei" + "<br/>";
  if (attr.office === "newspaper") type += "Zeitungsredaktion" + "<br/>";
  if (attr.office === "ngo") type += "Büro einer Nichtregierungsorganisation" + "<br/>";
  if (attr.office === "notary") type += "Notar" + "<br/>";
  if (attr.office === "political_party") type += "Büro einer politischen Partei" + "<br/>";
  if (attr.office === "quango") type += "Büro einer halbstaatlichen Organisation" + "<br/>";
  if (attr.office === "realtor") type += "Immobilienmakler / Wohnungsbaugenossenschaft" + "<br/>";
  if (attr.office === "real_estate_agent") type += "Immobilienmakler / Wohnungsbaugenossenschaft" + "<br/>";
  if (attr.office === "register") type += "Standesamt" + "<br/>";
  if (attr.office === "religion") type += "Büro einer religiösen Instanz" + "<br/>";
  if (attr.office === "research") type += "Forschungsunternehmen oder -institut" + "<br/>";
  if (attr.office === "tax") type += "Finanzamt" + "<br/>";
  if (attr.office === "telecommunication") type += "Telekommunikationsfirma" + "<br/>";
  if (attr.office === "travel_agent") type += "Sitz eines Reiseunternehmens" + "<br/>";
  if (attr.office === "water_utility") type += "Wasserwirtschaftsamt" + "<br/>";
  if (attr.office === "therapist") type += "Therapeut" + "<br/>";
  if (attr.place === "city") type += "Großstadt" + "<br/>";
  if (attr.place === "town") type += "Stadt/Kleinstadt" + "<br/>";
  if (attr.place === "village") type += "Dorf" + "<br/>";
  if (attr.place === "continent") type += "Kontinent" + "<br/>";
  if (attr.place === "ocean") type += "Ozean" + "</br>";
  if (attr.highway === "track") type += "Forst-, Wald und Feldweg" + "<br/>";
  if (attr.highway === "raceway") type += "Motorsportbahn" + "<br/>";
  if (attr.bicycle === "designated") type += "Radweg" + "<br/>";
  if (attr.highway === "path") type += "Fußweg" + "<br/>";
  if (attr.amenity === "parking") type += "Parkplatz" + "<br/>";
  if (attr.highway === "services") type += "Raststätte" + "<br/>";
  if (attr.highway === "rest_area") type += "Rastplatz" + "<br/>";
  if (attr.highway === "turning_circle") type += "Wendeplatz/Wendehammer" + "<br/>";
  if (attr.highway === "service") type += "Zufahrtsstraße / Erschließungsweg" + "<br/>";
  if (attr.highway === "motorway") type += "Autobahn" + "<br/>";
  if (attr.highway === "motorway_junction") type += "Autobahnauffahrt" + "<br/>";
  if (attr.highway === "bridleway") type += "Reitweg" + "<br/>";
  if (attr.oneway === "yes") type += "Einbahnstraße" + "<br/>";
  if (attr.park_ride === "yes") type += "Park and Ride" + "<br/>";
  if (attr.park_ride === "unknown") type += "Park and Ride" + "<br/>";
  if (attr.park_ride === "bus") type += "Park and Ride" + "<br/>";
  if (attr.park_ride === "tram") type += "Park and Ride" + "<br/>";
  if (attr.highway === "bus_stop") type += "Bushaltestelle" + "<br/>";
  if (attr.highway === "pedestrian") type += "Fußgängerzone" + "<br/>";
  if (attr.highway === "street_lamp") type += "Strassenlaterne" + "<br/>";
  if (attr.highway === "traffic_signals") type += "Ampel" + "<br/>";
  if (attr.crossing === "traffic_signals") type += "Fußgängerampel" + "<br/>";
  if (attr.highway === "speed_camera") type += "Blitzer" + "<br/>";
  if (attr.traffic_calming === "yes") ret += "Verkehrsberuhigter Bereich" + "</br>";
  if (attr.traffic_calming === "bump") type += "Kurze Bodenwelle" + "</br>";
  if (attr.traffic_calming === "chicane") type += "Zu umfahrendenes Hinderniss" + "</br>";
  if (attr.traffic_calming === "choker") type += "Fahrbahnverengung, zu umfahrende Hindernisse möglich" + "</br>";
  if (attr.traffic_calming === "cushion") type += "Bodenwelle mit Lücken aus mehreren rechteckigen Huckeln" + "</br>";
  if (attr.traffic_calming === "hump") type += "vergleichbare Bodenwelle mit etwar einer Länge von 2-4M" + "</br>";
  if (attr.traffic_calming === "island") type += "Eine Verkehrsinsel" + "</br>";
  if (attr.traffic_calming === "rumble_strip") type += "Holperstreifen" + "</br>";
  if (attr.traffic_calming === "table") type += "lange Bodenwellen mit flachen Mittelstück" + "</br>";
  if (attr["seamark:type"] === "buoy_cardinal") type += "Kardinalstonne" + "<br/>";
  if (attr["seamark:type"] === "buoy_lateral") type += "Lateraltonne" + "<br/>";
  if (attr["seamark:type"] === "buoy_isolated_danger") type += "Gefahrentonne" + "<br/>";
  if (attr["seamark:beacon_lateral:shape"] === "perch") type += "Pricke" + "<br/>";
  if (attr.amenity === "fuel" && attr["seamark:small_craft_facility:category"] === "fuel_station") type += "Schiffstankstelle" + "<br/>";else if (attr.amenity === "fuel") type += "Tankstelle" + "<br/>";
  if (attr.amenity === "charging_station") {
    type += "Ladestation / Stromtankstelle" + "<br/>";
    var volt = attr.voltage;
    var linebreak = "<br/>";
    if (attr.car) {
      switch (attr.car) {
        case "yes":
          type += "Für Autos: Ja";
          break;
        case "no":
          type += "Für Autos: Nein";
          break;
        default:
          type += "Für Autos: Unbekannt";
      }
      type += linebreak;
    } else {
      type += "Für Autos: Unbekannt" + linebreak;
    }
    if (attr.bicycle) {
      switch (attr.bicycle) {
        case "yes":
          type += "Für E-Bike: Ja";
          break;
        case "no":
          type += "Für E-Bike: Nein";
          break;
        default:
          type += "Für E-Bike: Unbekannt";
      }
      type += linebreak;
    } else {
      type += "Für E-Bike: Unbekannt" + linebreak;
    }
    if (attr["socket:schuko"] === "no") {
      type += "Stecker Schuko: Nein" + linebreak;
    }
    if (attr["socket:schuko"] === "yes") {
      type += "Stecker Schuko: Ja" + linebreak;
    }
    if (attr["socket:cee_blue"] === "no") {
      type += "Stecker CEE Blau: Nein" + linebreak;
    }
    if (attr["socket:cee_blue"] === "yes") {
      type += "Stecker CEE Blau: Ja" + linebreak;
    }
    if (attr["socket:cee_red_16a"] === "no") {
      type += "Stecker CEE Rot 16a: Nein" + linebreak;
    }
    if (attr["socket:cee_red_16a"] === "yes") {
      type += "Stecker CEE Rot 16a: Ja" + linebreak;
    }
    if (attr["socket:cee_red_32a"] === "no") {
      type += "Stecker CEE Rot 32a: Nein" + linebreak;
    }
    if (attr["socket:cee_red_32a"] === "yes") {
      type += "Stecker CEE Rot 32a: Ja" + linebreak;
    }
    if (attr["socket:cee_red_64a"] === "no") {
      type += "Stecker CEE Rot 64a: Nein" + linebreak;
    }
    if (attr["socket:cee_red_64a"] === "yes") {
      type += "Stecker CEE Rot 64a: Ja" + linebreak;
    }
    if (attr["socket:cee_red_125a"] === "no") {
      type += "Stecker CEE Rot 125a: Nein" + linebreak;
    }
    if (attr["socket:cee_red_125a"] === "yes") {
      type += "Stecker CEE Rot 125a: Ja" + linebreak;
    }
    if (attr["socket:nema_5_15"] === "no") {
      type += "Stecker Nema 5 15: Nein" + linebreak;
    }
    if (attr["socket:nema_5_15"] === "yes") {
      type += "Stecker Nema 5 15: Ja" + linebreak;
    }
    if (attr["socket:nema_5_20"] === "no") {
      type += "Stecker Nema 5 20: Nein" + linebreak;
    }
    if (attr["socket:nema_5_20"] === "yes") {
      type += "Stecker Nema 5 20: Ja" + linebreak;
    }
    if (attr["socket:nema_14_30"] === "no") {
      type += "Stecker Nema 14 30: Nein" + linebreak;
    }
    if (attr["socket:nema_14_30"] === "yes") {
      type += "Stecker Nema 14 30: Ja" + linebreak;
    }
    if (attr["socket:nema_14_50"] === "Nein") {
      type += "Stecker Nema 14  50: Nein" + linebreak;
    }
    if (attr["socket:nema_14_50"] === "yes") {
      type += "Stecker Nema 14 50: Ja" + linebreak;
    }
    if (attr["socket:bs1363"] === "nein") {
      type += "Stecker BS 1363: Nein" + linebreak;
    }
    if (attr["socket:bs1363"] === "yes") {
      type += "Stecker BS 1363: Ja" + linebreak;
    }
    if (attr["socket:type1"] === "no") {
      type += "Stecker Typ 1:Nein" + linebreak;
    }
    if (attr["socket:type1"] === "yes") {
      type += "Stecker Typ 1: Ja" + linebreak;
    }
    if (attr["socket:type1_combo"] === "no") {
      type += "Stecker Typ 1 Kombo: Nein" + linebreak;
    }
    if (attr["socket:type1_combo"] === "yes") {
      type += "Stecker Typ 1 Kombo: Ja" + linebreak;
    }
    if (attr["socket:type2"] === "Nein") {
      type += "Stecker Typ 2: Nein" + linebreak;
    }
    if (attr["socket:type2"] === "yes") {
      type += "Stecker Typ 2: Ja" + linebreak;
    }
    if (attr["socket:type2_combo"] === "no") {
      type += "Stecker Typ 2 Kombo: Nein" + linebreak;
    }
    if (attr["socket:type2_combo"] === "yes") {
      type += "Stecker Typ 2 Kombo: Ja" + linebreak;
    }
    if (attr["socket:type3"] === "no") {
      type += "Stecker Typ: Nein" + linebreak;
    }
    if (attr["socket:type3"] === "yes") {
      type += "Stecker Typ 3: Ja" + linebreak;
    }
    if (attr["socket:chademo"] === "no") {
      type += "Stecker CHAdeMO: Nein" + linebreak;
    }
    if (attr["socket:chademo"] === "yes") {
      type += "Stecker CHAdeMO: Ja" + linebreak;
    }
    if (attr["socket:magne_charge"] === "no") {
      type += "Stecker Magne : Nein" + linebreak;
    }
    if (attr["socket:magne_charge"] === "yes") {
      type += "Stecker Magne : Ja" + linebreak;
    }
    if (attr["socket:tesla_standard"] === "no") {
      type += "Stecker Tesla Standard: Nein" + linebreak;
    }
    if (attr["socket:tesla_standard"] === "yes") {
      type += "Stecker Tesla Standard: Nein" + linebreak;
    }
    if (attr["socket:tesla_supercharge"] === "no") {
      type += "Stecker Tesla Schnellladestation: Nein" + linebreak;
    }
    if (attr["socket:tesla_supercharge"] === "yes") {
      type += "Stecker Tesla Schnellladestation: Ja" + linebreak;
    }
    if (attr["socket:tesla_roadster"] === "no") {
      type += "Stecker Tesla Roadster: Nein" + linebreak;
    }
    if (attr["socket:tesla_roadster"] === "yes") {
      type += "Stecker Tesla Roadster: Ja" + linebreak;
    }
    if (attr["socket:schuko"]) {
      type += "Stecker Schuko: " + attr["socket:schuko"] + linebreak;
    }
    if (attr["socket:cee_blue"]) {
      type += "Stecker CEE Blau: " + attr["socket:cee_blue"] + linebreak;
    }
    if (attr["socket:cee_red_16a"]) {
      type += "Stecker CEE Rot 16a: " + attr["socket:cee_red_16a"] + linebreak;
    }
    if (attr["socket:cee_red_32a"]) {
      type += "Stecker CEE Rot 32a: " + attr["socket:cee_red_32a"] + linebreak;
    }
    if (attr["socket:cee_red_64a"]) {
      type += "Stecker CEE Rot 64a: " + attr["socket:cee_red_64a"] + linebreak;
    }
    if (attr["socket:cee_red_125a"]) {
      type += "Stecker CEE Rot 125a: " + attr["socket:cee_red_125a"] + linebreak;
    }
    if (attr["socket:nema_5_15"]) {
      type += "Stecker Nema 5 15: " + attr["socket:nema_5_15"] + linebreak;
    }
    if (attr["socket:nema_5_20"]) {
      type += "Stecker Nema 5 20: " + attr["socket:nema_5_20"] + linebreak;
    }
    if (attr["socket:nema_14_30"]) {
      type += "Stecker Nema 14 30: " + attr["socket:nema_14_30"] + linebreak;
    }
    if (attr["socket:nema_14_50"]) {
      type += "Stecker Nema 14 50: " + attr["socket:nema_14_50"] + linebreak;
    }
    if (attr["socket:bs1363"]) {
      type += "Stecker BS 1363: " + attr["socket:bs1363"] + linebreak;
    }
    if (attr["socket:type1"]) {
      type += "Stecker Typ 1: " + attr["socket:type1"] + linebreak;
    }
    if (attr["socket:type1_combo"]) {
      type += "Stecker Typ 1 Kombo: " + attr["socket:schuko"] + linebreak;
    }
    if (attr["socket:type2"]) {
      type += "Stecker Typ 2: " + attr["socket:type2"] + linebreak;
    }
    if (attr["socket:type2_combo"]) {
      type += "Stecker Typ 2 Kombo: " + attr["socket:type2_combo"] + linebreak;
    }
    if (attr["socket:type3"]) {
      type += "Stecker Typ 3: " + attr["socket:type3"] + linebreak;
    }
    if (attr["socket:chademo"]) {
      type += "Stecker CHAdeMO: " + attr["socket:chademo"] + linebreak;
    }
    if (attr["socket:magne_charge"]) {
      type += "Stecker Magne : " + attr["socket:magne_charge"] + linebreak;
    }
    if (attr["socket:tesla_standard"]) {
      type += "Stecker Tesla Standard: " + attr["socket:tesla_standard"] + linebreak;
    }
    if (attr["socket:tesla_supercharge"]) {
      type += "Stecker Tesla Schnellladestation: " + attr["socket:tesla_supercharge"] + linebreak;
    }
    if (attr["socket:tesla_roadster"]) {
      type += "Stecker Tesla Roadster: " + attr["socket:tesla_roadster"] + linebreak;
    }
    type += linebreak;
    if (attr.voltage) type += "Volt: " + volt + linebreak;
  }
  if (attr.tunnel === "yes") type += "Tunnel" + "<br/>";
  if (attr.bridge) {
    type += "Brücken-Typ: ";
    switch (attr.bridge) {
      case "swing":
        type += "Drehbrücke";
        break;
      case "aqueduct":
        type += "Historische Wasserpipeline";
        break;
      case "bascule":
        type += "Klapp bzw. Wippbrücke";
        break;
      case "boardwalk":
        type += "Bohlenweg";
        break;
      case "cantilever":
        type += "Auslegerbrücke";
        break;
      case "covered":
        type += "gedeckte Brücke";
        break;
      case "drawbridge":
        type += "Klappbrücke";
        break;
      case "humpback":
        type += "Drehbrücke";
        break;
      case "lift":
        type += "Hubbrücke";
        break;
      case "low_water_crossing":
        type += "Irische Brücke";
        break;
      case "moveable":
        type += "Bewegliche Brücken";
        break;
      case "pontoon":
        type += "Schwimmbrücke";
        break;
      case "suspension":
        type += "Hängebrücke";
        break;
      case "trestle":
        type += "Trestle-Brücke";
        break;
      case "viaduct":
        type += "Viadukt";
        break;
    }
  }
  if (attr["bridge:movable"]) {
    switch (attr["bridge:movable"]) {
      case "swing":
        type += "Drehbrücke";
        break;
      case "bascule":
        type += "Klapp bzw. Wippbrücke";
        break;
      case "drawbridge":
        type += "Klappbrücke";
        break;
      case "lift":
        type += "Hubbrücke";
        break;
      case "submersible":
        type += "Senkbrücke";
        break;
      case "transporter":
        type += "Schwebefähre";
        break;
      case "retractable":
        type += "Schubbrücke";
        break;
    }
  }
  if (attr.amenity === "nursing_home" || attr.amenity === "retirement_home") type += "Seniorenheim / Pflegeheim" + "<br/>";
  if (attr.amenity === "social_facility") type += "Allg. soziale Einrichtung" + "<br/>";
  if (attr.social_facility) {
    if (attr.social_facility === "group_home" && attr["social_facility:for"] === "senior") type += "Seniorenheim" + "<br/>";
    if (attr.social_facility === "assisted_living") type += "Betreutes Wohnen" + "<br/>";
    if (attr.social_facility === "outreach") type += "Beratungsstelle" + "<br/>";
    if (attr.social_facility === "workshop") type += "soziale Werkstatt" + "<br/>";
    if (attr.social_facility === "ambulatory_care" || attr.social_facility === "healthcare") type += "Ambulanter Pflegedienst" + "<br/>";
    if (attr.social_facility === "shelter" && attr["social_facility:for"] === "senior") type += "Tages- u. Kurzzeitpflege" + "<br/>";
    if (attr.social_facility === "shelter" && attr["social_facility:for"] === "abused") type += "Notunterkunft" + "<br/>";
    if (attr.social_facility === "food_bank") type += "Lebensmittelhilfe" + "<br/>";
    if (attr.social_facility === "hospice") type += "Hospiz" + "<br/>";
  }
  if (attr.brewery) type += "Ausgeschenkte Biersorten: " + attr["brewery"] + "<br/>";
  if (attr.shop === "alcohol") type += "Spirituosenladen" + "<br/>";
  if (attr.shop === "bakery") type += "Bäckerei" + "<br/>";
  if (attr.shop === "beverages") type += "Getränkehandel" + "<br/>";
  if (attr.shop === "butcher") type += "Fleischerei" + "<br/>";
  if (attr.shop === "cheese") type += "Käsefachgeschäft" + "<br/>";
  if (attr.shop === "chocolate") type += "Schokoladenfachgeschäft" + "<br/>";
  if (attr.shop === "coffee") type += "Kaffeefachgeschäft" + "<br/>";
  if (attr.shop === "confectionery") type += "Süßwarenladen" + "<br/>";
  if (attr.shop === "convenience") type += "Lebensmittelgeschäft" + "<br/>";
  if (attr.shop === "deli") type += "Feinkostladen" + "<br/>";
  if (attr.shop === "dairy") type += "Milchladen" + "<br/>";
  if (attr.shop === "farm") type += "Hofladen" + "<br/>";
  if (attr.shop === "greengrocer") type += "Gemüsehändler" + "<br/>";
  if (attr.shop === "grocery") type += "Lebensmittelgeschäft" + "<br/>";
  if (attr.shop === "organic") type += "Bio-Laden, Reformhaus" + "<br/>";
  if (attr.shop === "pasta") type += "Pastageschäft" + "<br/>";
  if (attr.shop === "seafood") type += "Fischfachgeschäft" + "<br/>";
  if (attr.shop === "tea") type += "Teefachgeschäft" + "<br/>";
  if (attr.shop === "wine") type += "Weinhandlung" + "<br/>";
  if (attr.shop === "department_store") type += "Kaufhaus" + "<br/>";
  if (attr.shop === "general") type += "Gemischtwarenhandlung" + "<br/>";
  if (attr.shop === "kiosk") type += "Kiosk" + "<br/>";
  if (attr.shop === "mall") type += "Einkaufszentrum" + "<br/>";
  if (attr.shop === "supermarket") type += "Supermarkt" + "<br/>";
  if (attr.shop === "baby_goods") type += "Babyfachmarkt" + "<br/>";
  if (attr.shop === "bag") type += "Taschen und Koffer" + "<br/>";
  if (attr.shop === "boutique") type += "Boutique" + "<br/>";
  if (attr.shop === "clothes") type += "Bekleidung" + "<br/>";
  if (attr.shop === "fabric") type += "Textilgeschäft" + "<br/>";
  if (attr.shop === "fashion") type += "Fashion" + "<br/>";
  if (attr.shop === "jewelry") type += "Juwelier" + "<br/>";
  if (attr.shop === "leather") type += "Lederwaren" + "<br/>";
  if (attr.shop === "shoes") type += "Schuhfachgeschäft" + "<br/>";
  if (attr.shop === "variety_store") type += "Ein-Euro-Laden" + "<br/>";
  if (attr.shop === "chemist") type += "Drogerie" + "<br/>";
  if (attr.shop === "cosmetics") type += "Kosmetikfachgeschäft" + "<br/>";
  if (attr.shop === "drugstore") type += "Drogerie oder Apotheke (veraltet)" + "<br/>";
  if (attr.shop === "perfumery") type += "Parfümerie" + "<br/>";
  if (attr.shop === "erotic") type += "Erotikhandel" + "<br/>";
  if (attr.shop === "hairdresser") type += "Friseur" + "<br/>";
  if (attr.shop === "hearing_aids") type += "Hörgeräte" + "<br/>";
  if (attr.shop === "herbalist") type += "Kräuterhandel" + "<br/>";
  if (attr.shop === "massage") type += "Massagesalon" + "<br/>";
  if (attr.shop === "medical_supply") type += "Sanitätshaus" + "<br/>";
  if (attr.shop === "optician") type += "Optiker" + "<br/>";
  if (attr.shop === "tattoo") type += "Tätowierer" + "<br/>";
  if (attr.shop === "bathroom_furnishing") type += "Badmöbel und -accessoires" + "<br/>";
  if (attr.shop === "doityourself") type += "Baumarkt/Baustoffhandel" + "<br/>";
  if (attr.shop === "energy") type += "Energiehandel" + "<br/>";
  if (attr.shop === "florist") type += "Blumengeschäft" + "<br/>";
  if (attr.shop === "furnace") type += "Ofenfachgeschäft" + "<br/>";
  if (attr.shop === "garden_centre") type += "Gartencenter" + "<br/>";
  if (attr.shop === "gas") type += "Fachgeschäft für technische Gase" + "<br/>";
  if (attr.shop === "glaziery") type += "Glaserei" + "<br/>";
  if (attr.shop === "hardware") type += "Eisenwaren" + "<br/>";
  if (attr.shop === "houseware") type += "Haushaltswaren und Inneneinrichtung" + "<br/>";
  if (attr.shop === "locksmith") type += "Schlüsseldienst" + "<br/>";
  if (attr.shop === "paint") type += "Farbenfachgeschäft" + "<br/>";
  if (attr.shop === "trade") type += "Baustoffhandel" + "<br/>";
  if (attr.shop === "antiques") type += "Antiquitäten" + "<br/>";
  if (attr.shop === "bed") type += "Betten- und Matratzengeschäft" + "<br/>";
  if (attr.shop === "candles") type += "Kerzengeschäft" + "<br/>";
  if (attr.shop === "carpet") type += "Teppichfachhandel" + "<br/>";
  if (attr.shop === "curtain") type += "Gardinenfachgeschäft" + "<br/>";
  if (attr.shop === "furniture") type += "Möbel- und Einrichtungshaus" + "<br/>";
  if (attr.shop === "interior_decoration") type += "Innendekoration / Raumausstattung" + "<br/>";
  if (attr.shop === "kitchen") type += "Küchen" + "<br/>";
  if (attr.shop === "window_blind") type += "Jalousien und Rolläden" + "<br/>";
  if (attr.shop === "computer") type += "Computer-Fachhändler" + "<br/>";
  if (attr.shop === "electronics") type += "Elektronikmarkt" + "<br/>";
  if (attr.shop === "hifi") type += "Hifi-Fachhändler" + "<br/>";
  if (attr.shop === "mobile_phone") type += "Handy-Shop" + "<br/>";
  if (attr.shop === "radiotechnics") type += "Radio- und Fernsehtechnik" + "<br/>";
  if (attr.shop === "vacuum_cleaner") type += "Staubsaugerfachgeschäft" + "<br/>";
  if (attr.shop === "bicycle") type += "Fahrradfachgeschäft" + "<br/>";
  if (attr.shop === "car") type += "Autohaus" + "<br/>";
  if (attr.shop === "car_repair") type += "Autowerkstatt" + "<br/>";
  if (attr.shop === "car_parts") type += "Autoteilefachgeschäft" + "<br/>";
  if (attr.shop === "dive" || attr.shop === "scuba_diving") type += "Tauchausrüstung" + "<br/>";
  if (attr.shop === "fishing") type += "Angelfachgeschäft" + "<br/>";
  if (attr.shop === "free_flying") type += "Fallschirmausrüstung" + "<br/>";
  if (attr.shop === "hunting") type += "Jagdausrüstung" + "<br/>";
  if (attr.shop === "motorcycle") type += "Motorradgeschäft" + "<br/>";
  if (attr.shop === "outdoor") type += "Trekking-/Outdoorladen" + "<br/>";
  if (attr.shop === "sports") type += "Sportgeschäft" + "<br/>";
  if (attr.shop === "tyres") type += "Reifenfachhandel" + "<br/>";
  if (attr.shop === "water_sports") type += "Wassersportbedarf" + "<br/>";
  if (attr.shop === "art") type += "Kunstladen" + "<br/>";
  if (attr.shop === "craft") type += "Kunsthandwerk" + "<br/>";
  if (attr.shop === "frame") type += "Bilderrahmengeschäft" + "<br/>";
  if (attr.shop === "music") type += "Musikgeschäft" + "<br/>";
  if (attr.shop === "music_instrument") type += "Musikhaus" + "<br/>";
  if (attr.shop === "photo") type += "Fotofachgeschäft" + "<br/>";
  if (attr.shop === "video") type += "Videothek" + "<br/>";
  if (attr.shop === "video_games") type += "Videospiele" + "<br/>";
  if (attr.shop === "anime") type += "Anime" + "<br/>";
  if (attr.shop === "books") type += "Buchhandlung" + "<br/>";
  if (attr.shop === "gift") type += "Andenken, Reisemitbringsel, Souveniershop" + "<br/>";
  if (attr.shop === "newsagent") type += "Zeitungshändler" + "<br/>";
  if (attr.shop === "stationery") type += "Schreibwaren" + "<br/>";
  if (attr.shop === "ticket") type += "Ticketshop" + "<br/>";
  if (attr.shop === "copyshop") type += "Kopierladen" + "<br/>";
  if (attr.shop === "funeral_directors") type += "Bestattungsunternehmen" + "<br/>";
  if (attr.shop === "laundry") type += "Waschsalon / Wäscherei" + "<br/>";
  if (attr.shop === "dry_cleaning") type += "chemische Reinigung" + "<br/>";
  if (attr.shop === "money_lender") type += "Geldverleiher" + "<br/>";
  if (attr.shop === "pawnbroker") type += "Pfandhaus / Pfandleiher" + "<br/>";
  if (attr.shop === "pet") type += "Zoo- und Tierhandlung" + "<br/>";
  if (attr.shop === "pyrotechnics") type += "Feuerwerk" + "<br/>";
  if (attr.shop === "religion") type += "Religiöse Artikel" + "<br/>";
  if (attr.shop === "beauty") type += "Schönheitssalon" + "<br/>";
  if (attr.shop === "solarium") type += "Solarium" + "<br/>";
  if (attr.shop === "tobacco") type += "Tabakwaren" + "<br/>";
  if (attr.shop === "toys") type += "Spielwaren" + "<br/>";
  if (attr.shop === "travel_agency") type += "Reisebüro" + "<br/>";
  if (attr.shop === "market_hall") type += "Markthalle" + "<br/>";
  if (attr.shop === "vacant") type += "leerstehendes Ladenlokal" + "<br/>";
  if (attr.shop === "weapons") type += "Waffenladen" + "<br/>";
  if (attr.gambling === "lottery") type += "Lottoannahmestelle" + "<br/>";
  if (attr.pet === "fish") type += "Aquaristik" + "<br/>";
  if (attr.craft === "agriucultural_engines") type += "Landmaschinenbau" + "<br/>";
  if (attr.craft === "basket_maker") type += "Korbmacher" + "<br/>";
  if (attr.craft === "beekeeper") type += "Imker" + "<br/>";
  if (attr.craft === "blacksmith") type += "Schmied" + "<br/>";
  if (attr.craft === "brewery") type += "Brauerei" + "<br/>";
  if (attr.microbrewery === "yes") type += "Hausbrauerei" + "<br/>";
  if (attr.craft === "boatbuilder") type += "Bootsbauer" + "<br/>";
  if (attr.craft === "bookbinder") type += "Buchbinder" + "<br/>";
  if (attr.craft === "builder") type += "Hausbau" + "<br/>";
  if (attr.craft === "carpenter") type += "Tischler/Schreiner, Zimmermann" + "<br/>";
  if (attr.craft === "carpet_layer") type += "Teppichleger" + "<br/>";
  if (attr.craft === "caterer") type += "Catering" + "<br/>";
  if (attr.craft === "clockmaker") type += "Uhrmacher" + "<br/>";
  if (attr.craft === "confectionery") type += "Konditorei" + "<br/>";
  if (attr.craft === "dressmaker") type += "Schneider" + "<br/>";
  if (attr.craft === "electrician") type += "Elektriker" + "<br/>";
  if (attr.craft === "gardener") type += "Garten- und Landschaftsbauer" + "<br/>";
  if (attr.craft === "glaziery") type += "Glaserei" + "<br/>";
  if (attr.craft === "handicraft") type += "Handwerkskunst" + "<br/>";
  if (attr.craft === "hvac") type += "Kälteanlagenbauer für Lüftungs-, Heizungs- und Klimatechnik" + "<br/>";
  if (attr.craft === "insulation") type += "Wärmedämmung von Gebäuden" + "<br/>";
  if (attr.craft === "jeweller") type += "Juwelier, Gold-/Silber-Schmied" + "<br/>";
  if (attr.craft === "key_cutter") type += "Schlüsselmacher" + "<br/>";
  if (attr.craft === "locksmith") type += "Schlüsseldienst" + "<br/>";
  if (attr.craft === "metal_construction") type += "Metallbauer" + "<br/>";
  if (attr.craft === "optician") type += "Optiker" + "<br/>";
  if (attr.craft === "painter") type += "Maler" + "<br/>";
  if (attr.craft === "parquet_layer") type += "Parkettverleger" + "<br/>";
  if (attr.craft === "photographer") type += "Fotograf" + "<br/>";
  if (attr.craft === "photographic_laboratory") type += "Fotolabor" + "<br/>";
  if (attr.craft === "plasterer") type += "Gipser, Verputzer, Stuckateur" + "<br/>";
  if (attr.craft === "plumber") type += "Anlagenmechaniker Sanitär-, Heizungs- und Klimatechnik." + "<br/>";
  if (attr.craft === "pottery") type += "Töpferei" + "<br/>";
  if (attr.craft === "rigger") type += "Riggemacher (Takelage für Segelschiffe)" + "<br/>";
  if (attr.craft === "roofer") type += "Dachdecker" + "<br/>";
  if (attr.craft === "saddler") type += "Sattler" + "<br/>";
  if (attr.craft === "sailmaker") type += "Segelmacher" + "<br/>";
  if (attr.craft === "sawmill") type += "Holzverarbeitungsbetrieb" + "<br/>";
  if (attr.craft === "scaffolder") type += "Gerüstbauer" + "<br/>";
  if (attr.craft === "sculptor") type += "Bildhauer" + "<br/>";
  if (attr.craft === "shoemaker") type += "Schuhmacher" + "<br/>";
  if (attr.craft === "stand_builder") type += "Messe- / Standbauer" + "<br/>";
  if (attr.craft === "stonemason") type += "Steinmetz" + "<br/>";
  if (attr.craft === "sun_protection") type += "Rolladen- und Jalousiebauer" + "<br/>";
  if (attr.craft === "sweep") type += "Schornsteinfeger" + "<br/>";
  if (attr.craft === "tailor") type += "Schneider" + "<br/>";
  if (attr.craft === "tiler") type += "Fliesen-, Platten- und Mosaikleger" + "<br/>";
  if (attr.craft === "tinsmith") type += "Spengler, Klempner" + "<br/>";
  if (attr.craft === "upholsterer") type += "Polsterer" + "<br/>";
  if (attr.craft === "watchmaker") type += "Uhrmacher" + "<br/>";
  if (attr.craft === "window_construction") type += "Fensterbauer" + "<br/>";
  if (attr.rental === "machines") type += "Maschinenverleih" + "<br/>";
  if (attr.amenity === "car_rental") type += "Autoverleih" + "<br/>";
  if (attr.landuse === "allotments") type += "Schrebergarten" + "<br/>";
  if (attr.landuse === "basin") type += "Regenwasserrückhaltebecken" + "<br/>";
  if (attr.landuse === "brownfield") type += "Vorher bebautes Land" + "<br/>";
  if (attr.landuse === "commercial") type += "Industriegebiet" + "<br/>";
  if (attr.landuse === "construction") type += "Baugebiet" + "<br/>";
  if (attr.landuse === "farmland") type += "Ackerfläche" + "<br/>";
  if (attr.landuse === "farmyard") type += "landwirtschaftlicher Betrieb" + "<br/>";
  if (attr.landuse === "forest") type += "Forst" + "<br/>";
  if (attr.landuse === "garages") type += "Garagenkomplex" + "<br/>";
  if (attr.landuse === "grass") type += "Rasenflächen" + "<br/>";
  if (attr.landuse === "greenfield") type += "Bauerwartungsland" + "<br/>";
  if (attr.landuse === "greenhouse_horticulture") type += "Gewächshaus-Fläche" + "<br/>";
  if (attr.landuse === "industrial") type += "Gewerbe-/Industriegebiet" + "<br/>";
  if (attr.landuse === "landfill") type += "Mülldeponie" + "<br/>";
  if (attr.landuse === "meadow") type += "Grünfläche" + "<br/>";
  if (attr.landuse === "orchard") type += "Obstplantage" + "<br/>";
  if (attr.landuse === "plant_nursery") type += "Baumschule" + "<br/>";
  if (attr.landuse === "quarry") type += "Sand- und Kiesgrube" + "<br/>";
  if (attr.landuse === "railway") type += "Gebiet für Eisenbahnnutzung" + "<br/>";
  if (attr.landuse === "recreation_ground") type += "Erholungsgebiet" + "<br/>";
  if (attr.landuse === "reservoir") type += "Wasserreservoir" + "<br/>";
  if (attr.landuse === "residential") type += "Wohngebiet" + "<br/>";
  if (attr.landuse === "retail") type += "Einkaufszentrum" + "<br/>";
  if (attr.landuse === "salt_pond") type += "Saline" + "<br/>";
  if (attr.landuse === "village_green") type += "Grünfläche" + "<br/>";
  if (attr.landuse === "vineyard") type += "Weinberg" + "<br/>";
  if (attr.landuse === "pond") type += "kleiner Teich" + "<br/>";
  if (attr.landuse === "salt_pond") type += "Saline" + "<br/>";
  if (attr.landuse === "animal_keeping") type += "Weide, Paddock für Tierhaltung" + "<br/>";
  if (attr.entrance === "yes") type += "Eingang zum Gebäude" + "<br/>";
  if (attr.entrance === "main") type += "Haupteingang" + "<br/>";
  if (attr.entrance === "service") type += "Hinterausgang für Angestellte oder Zulieferer" + "<br/>";
  if (attr.entrance === "exit") type += "Ausgang des Gebäudes" + "<br/>";
  if (attr.entrance === "emergency") type += "Notausgang" + "<br/>";
  if (attr.natural === "bay") type += "Bucht" + "<br/>";
  if (attr.natural === "beach") type += "Strand" + "<br/>";
  if (attr.natural === "wood") type += "natürlicher Wald" + "<br/>";
  if (attr.natural === "glacier") type += "Gletscher" + "<br/>";
  if (attr.natural === "cave_entrance") type += "Höhle" + "<br/>";
  if (attr.natural === "spring") type += "natürliche Quelle" + "<br/>";
  if (attr.natural === "waterfall") type += "Wasserfall" + "<br/>";
  if (attr.natural === "scrub") type += "unkultiviertes Buschland" + "<br/>";
  if (attr.natural === "grassland") type += "unkultiviertes Grasland" + "<br/>";
  if (attr.natural === "wetland") type += "Feuchtgebiet" + "<br/>";
  if (attr.natural === "tree") type += "Baum";
  if (attr.natural === "peak" && attr["summit:cross"] === "yes") type += "Gipfelkreuz" + "<br/>";
  if (attr.natural === "tree_row") type += "Baumreihe / Allee" + "<br/>";
  if (attr.natural === "heath") type += "Heide" + "<br/>";
  if (attr.natural === "moor") type += "Hochmoor" + "<br/>";
  if (attr.natural === "grassland") type += "unkultiviertes Grasland" + "<br/>";
  if (attr.natural === "fell") type += "Grasland oberhalb der Baumgrenze" + "<br/>";
  if (attr.natural === "bare_rock") type += "Nackter Fels" + "<br/>";
  if (attr.natural === "scree") type += "Schutt (Hangschutt)" + "<br/>";
  if (attr.natural === "volcano") type += "Vulkan" + "<br/>";
  if (attr.natural === "valley") type += "Tal" + "<br/>";
  if (attr.natural === "stone") type += "Findling" + "<br/>";
  if (attr.natural === "sea") type += "Meer" + "<br/>";
  if (attr.boundary === "national_park") type += "Nationalpark" + "<br/>";
  if (attr.boundary === "protected_area") type += "Schutzgebiet" + "<br/>";
  if (attr.mountain_pass === "yes") type += "Gebirgspass" + "<br/>";
  if (attr.waterway === "waterfall") type += "Wasserfall" + "<br/>";
  if (attr.waterway === "canal") type += "Kanal" + "<br/>";
  if (attr.water === "canal") type += "Kanal" + "<br/>";
  if (attr.waterway === "river") type += "Fluss" + "<br/>";
  if (attr.water === "river") type += "Fluss" + "<br/>";
  if (attr.waterway === "riverbank") type += "Fluss" + "<br/>";
  if (attr.waterway === "ditch") type += "Entwässerungsgraben" + "<br/>";
  if (attr.waterway === "stream") type += "Bach" + "<br/>";
  if (attr.route === "ferry") type += "Fährverbindung" + "<br/>";
  if (attr.waterway === "turning_point") type += "Wendestelle" + "<br/>";
  if (attr.water === "lake" || attr.natural === "water") type += "See" + "<br/>";
  if (attr.water === "cove") type += "kleine Bucht" + "<br/>";
  if (attr.water === "lagoon") type += "Lagune" + "<br/>";
  if (attr.water === "pond") type += "Teich" + "<br/>";
  if (attr.water === "reservoir") type += "Wasserreservoir" + "<br/>";
  if (attr.water === "oxbow") type += "Altwassersee" + "<br/>";
  if (attr.water === "lock") type += "Schleusenkammer" + "<br/>";
  if (attr.water === "moat") type += "Burggraben" + "<br/>";
  if (attr.water === "wastewater") type += "Kläranlage" + "<br/>";
  if (attr.mooring === "guest" && attr.man_made === "pier" || attr["seamark:small_craft_facility:category"] === "visitor_berth") type += "Gastliegeplatz" + "<br/>";else if (attr.man_made === "pier") type += "Anlegestelle" + "<br/>";
  if (attr.waterway === "boatyard") type += "Schiffswerft" + "<br/>";
  if (attr["seamark:type"] === "mooring" && attr["seamark:mooring:category"] === "dolphin") type += "Dalben" + "<br/>";
  if (attr.route === "foot") type += "Wanderweg" + "<br/>";
  if (attr.route === "hiking") type += "Wanderweg" + "<br/>";
  if (attr.hiking === "yes" && attr.tourism === "information") type += "Wegweiser" + "<br/>";else if (attr.tourism === "information") if (attr.tourism === "information") {
    if (attr.information) {
      switch (attr.information) {
        case "board":
          type += "Informationstafel" + "<br/>";
          break;
        case "map":
          type += "Informationstafel mit Karte" + "<br/>";
          break;
        case "office":
          type += "Touristeninformation" + "<br/>";
          break;
        case "terminal":
          type += "Informationsterminal" + "<br/>";
          break;
        case "audioguide":
          type += "Audioguide" + "<br/>";
          break;
        case "guidepost":
          type += "Wegweiser" + "<br/>";
          break;
        case "tactile_map":
          type += "Blindenkarte 2D" + "<br/>";
          break;
        case "tactile_model":
          type += "Blindenkarte 3D" + "<br/>";
          break;
        case "route_marker":
          type += "Wegerkennungsmarker" + "<br/>";
          break;
        default:
          type += "Informationstafel" + "<br/>";
      }
    } else type += "Informationstafel" + "<br/>";
  }
  if (attr.route === "bicycle") type += "Radwanderweg" + "<br/>";
  if (attr.route === "mtb") type += "Mountainbikeroute" + "<br/>";
  if (attr.route === "horse") type += "Reitwanderweg" + "<br/>";
  if (attr.natural === "coastline") type += "Küstenlinie" + "<br/>";
  if (attr.natural === "cliff") type += "Klippe" + "<br/>";
  if (attr.waterway === "dam") type += "Staudamm" + "<br/>";
  if (attr.waterway === "weir") type += "Wehr" + "<br/>";
  if (attr.waterway === "lock_gate") type += "Schleusentor" + "<br/>";
  if (attr.lock === "yes") type += "Schleuse" + "<br/>";
  if (attr.waterway === "sluice_gate") type += "Siel" + "<br/>";
  if (attr.man_made === "pumping_station") type += "Schöpfwerk" + "<br/>";
  if (attr.man_made === "groyne") type += "Buhne" + "<br/>";
  if (attr.man_made === "dyke") type += "Deich" + "<br/>";
  if (attr.man_made === "levee") type += "Deich" + "<br/>";
  if (attr.man_made === "watermill") type += "Wassermühle" + "<br/>";
  if (attr.military === "airfield") type += "Militärflugplatz" + "<br/>";
  if (attr.military === "naval_base") type += "Marinestützpunkt" + "<br/>";
  if (attr.military === "range") type += "Waffenübungsplatz" + "<br/>";
  if (attr.landuse === "military") type += "militärisch genutztes Gebiet" + "<br/>";
  if (attr.military === "training_area") type += "Truppenübungsplatz" + "<br/>";
  if (attr.military === "exclusion_zone") type += "militärisch genutztes Gebiet" + "<br/>";
  if (attr.military === "danger_area") type += "militärische Gefahrenzone" + "<br/>";
  if (attr.military === "barracks") type += "Kaserne" + "<br/>";
  if (attr.military === "nuclear_explosion_site") type += "Atomwaffentestgelände" + "<br/>";
  if (attr.construction === "yes") type += "Baustelle" + "<br/>";else {
    if (attr.highway === "construction") type += "Baustelle" + "<br/>";
  }
  if (attr.man_made === "petroleum_well") type += "Erdölpumpe" + "<br/>";
  if (attr.man_made === "storage_tank") type += "Speichertank" + "<br/>";
  if (attr.man_made === "wastewater_plant") type += "Kläranlage" + "<br/>";
  if (attr.man_made === "silo") type += "Silo" + "<br/>";
  if (attr.man_made === "water_tower") type += "Wasserturm" + "<br/>";
  if (attr.man_made === "windmill") type += "Windmühle" + "<br/>";
  if (attr.man_made === "monitoring_station") type += "Messstation";
  if (attr.man_made === "crane") type += "Kran";
  if (attr.man_made === "lighthouse") type += "Leuchtturm";
  if (attr.man_made === "beacon") type += "Leuchtfeuer";
  if (attr.man_made === "breakwater") type += "Wellenbrecher";
  if (attr.man_made === "lamp" && attr["lamp:type"] === "street_lamp") type += "Strassenlaterne" + "<br/>";
  if (attr.light_source === "lantern") type += "Strassenlaterne" + "<br/>";
  if (attr.light_source === "floodlight") type += "Flutlicht" + "<br/>";
  if (attr.light_source === "signal_lamp") type += "Signallicht" + "<br/>";
  if (attr.light_source === "aviation") type += "Befeuerung" + "<br/>";
  if (attr.light_source === "warning") type += "Warnlicht" + "<br/>";
  if (attr.light_source) {
    if (attr["light:method"]) {
      type += "Licht Art: ";
      switch (attr["light:method"]) {
        case "gas":
          type += "Gas";
          break;
        case "electric":
          type += "Elektrisch";
          break;
        case "incandescent":
          type += "strahlend";
          break;
        case "halogen":
          type += "Halogen";
          break;
        case "discharge":
          type += "Entladungslicht";
          break;
        case "metal-halide":
          type += "Halogen-Metalldampflampe";
          break;
        case "neon":
          type += "Neon";
          break;
        case "sodium":
          type += "Natriumdampflampe";
          break;
        case "high_pressure_sodium":
          type += "Hochdruck Natriumdampflampe";
          break;
        case "low_pressure_sodium":
          type += "Niedrigdruck Natriumdampflampe";
          break;
        case "fluorescent":
          type += "Fluoreszenzlampe";
          break;
        case "mercury":
          type += "Quecksilberlampe";
          break;
        case "LED":
          type += "LED";
          break;
        case "laser":
          type += "Laser";
          break;
        case "arc":
          type += "Lichtbogen";
          break;
        default:
          type += "Unbekannt";
      }
    }
  }
  if (attr.amenity === "drinking_water") type += "Trinkwasser" + "<br/>";
  if (attr.drinking_water === "yes") type += "Trinkwasser" + "<br/>";
  if (attr.man_made === "works") type += "Industriegebäude" + "<br/>";else if (attr.building === "industrial") type += "Industriegebäude" + "<br/>";else if (attr.landuse === "industrial") type += "Industriegebiet" + "<br/>";else if (attr.abutters === "industrial") type += "Industriegebiet" + "<br/>";else if (attr.abutters === "commercial") type += "Gewerbegebiet" + "<br/>";
  if (attr["generator:source"]) {
    type += "Anlagen-Typ: ";
    switch (attr["generator:source"]) {
      case "biomass":
        type += "Biogasanlage";
        break;
      case "biofuel":
        type += "Biogasanlage";
        break;
      case "biogas":
        type += "Biogasanlage";
        break;
      case "coal":
        type += "Kohlekraftwerk";
        break;
      case "oil":
        type += "Ölraffinerie";
        break;
      case "waste":
        type += "Müllverbrennungsanlage";
        break;
      case "wind":
        type += "Windkraftwerk";
        break;
      case "solar":
        type += "Solarkraftwerk";
        break;
      case "hydro":
        type += "Wasserkraftwerk";
        break;
      case "tidal":
        type += "Gezeitenkraftwerk";
        break;
      case "wave":
        type += "Wellenkraftwerk";
        break;
      case "geothermal":
        type += "Geothermie";
        break;
      case "osmotic":
        type += "Osmosekraftwerk";
        break;
      case "nuclear":
        type += "Atomkraftwerk";
        break;
      default:
        type += "unbekannt" + "<br/>";
    }
  }
  if (attr.power_source === "photovoltaic") type += "Solarkraftwerk";
  if (attr.power === "line") type += "Hochspannungs-Übertragungsleitung" + "<br/>";
  if (attr.power === "cable") type += "Untergrundkabel" + "<br/>";
  if (attr.power === "cable_distribution_cabinet") type += "Kabelverteilerschrank" + "<br/>";
  if (attr.power === "plant") type += "Elektrizitätskraftwerk" + "<br/>";
  if (attr.power === "station") type += "Elektrizitätskraftwerk" + "<br/>";
  if (attr.power === "sub_station") type += "Elektrizitätskraftwerk" + "<br/>";
  if (attr.power === "compensator") type += "Kompensator" + "<br/>";
  if (attr.power === "converter") type += "Konverter" + "<br/>";
  if (attr.power === "generator") type += "Generator" + "<br/>";
  if (attr.power === "heliostat") type += "Heliostat" + "<br/>";
  if (attr.power === "insulator") type += "Isulator" + "<br/>";
  if (attr.line === "busbar") type += "Sammelschiene" + "<br/>";
  if (attr.line === "bay") type += "Verbindung Schaltung und Sammelschiene" + "<br/>";
  if (attr.power === "minor_line") type += "Nebenlinie" + "<br/>";
  if (attr.power === "pole") type += "Pfahl" + "<br/>";
  if (attr.power === "portal") type += "H-förmiger Mast" + "<br/>";
  if (attr.power === "catenary_mast") type += "Fahrleitungsmast" + "<br/>";
  if (attr.power === "substation") type += "Umspannwerk" + "<br/>";
  if (attr.power === "switch") type += "Lastschalter" + "<br/>";
  if (attr.power === "terminal") type += "Terminal / Anschluss" + "<br/>";
  if (attr.power === "tower") type += "Hochspannungsleitungs" + "<br/>";
  if (attr.power === "transformer") type += "Nebenlinie" + "<br/>";
  if (attr.barrier) {
    switch (attr.barrier) {
      case "bollard":
        type += "Poller, Pfosten" + "<br/>";
        break;
      case "cycle_barrier":
        type += "Umlaufsperre, Drängelgitter" + "<br/>";
        break;
      case "gate":
        type += "Tor, Schranke" + "<br/>";
        break;
      case "chain":
        type += "Kette" + "<br/>";
        break;
      case "lift_gate":
        type += "Schlagbaum" + "<br/>";
        break;
      case "wall":
        type += "Lärmschutzwand" + "<br/>";
        break;
      case "toll_booth":
        type += "Mautstelle" + "<br/>";
        break;
      case "fence":
        switch (attr.fence_type) {
          case "barbed_wire":
            type += "Stacheldrahtzaun" + "<br/>";
            break;
          case "wood":
            type += "Holzzaun" + "<br/>";
            break;
          case "chain_link":
            type += "Maschendrahtzaun" + "<br/>";
            break;
          case "electric":
            type += "Weidezaun" + "<br/>";
            break;
          case "railing":
            type += "Geländer" + "<br/>";
            break;
          case "wire":
            type += "einfacher Drahtzaun" + "<br/>";
            break;
          case "metal":
            type += "Metallzaun" + "<br/>";
            break;
          case "pole":
            type += "Holzpfähle" + "<br/>";
            break;
          default:
            type += "Zaun" + "<br/>";
        }
        break;
      case "block":
        type += "Block" + "<br/>";
        break;
      case "ditch":
        type += "Graben" + "<br/>";
        break;
      case "border_control":
        type += "Grenzkontrolle" + "<br/>";
        break;
      case "hedge":
        type += "Hecke" + "<br/>";
        break;
      case "retaining_wall":
        type += "Stützmauer" + "<br/>";
        break;
      case "cattle_grid":
        type += "Weiderost" + "<br/>";
        break;
      case "horse_stile":
        type += "Zaunübertritt" + "<br/>";
        break;
      default:
        type += "unbekannt" + "<br/>";
    }
  }
  if (attr.wall === "noise_barrier") type += "Lärmschutzwand" + "<br/>";
  if (attr.designation === "retaining_wall") type += "Lärmschutzwand" + "<br/>";
  if (attr.designation === "noise_barrier") type += "Lärmschutzwand" + "<br/>";
  if (attr.man_made === "surveillance") type += "Überwachter Bereich" + "<br/>";
  if (attr.aeroway) {
    type += "Flughafen: ";
    switch (attr.aeroway) {
      case "aerodrome":
        type += "Flugplatz";
        break;
      case "apron":
        type += "Vorfeld";
        break;
      case "gate":
        type += "gate";
        break;
      case "helipad":
        type += "Hubschrauberlandeplatz";
        break;
      case "hangar":
        type += "Hangar";
        break;
      case "runway":
        type += "Start-/Landebahn";
        break;
      case "taxiway":
        type += "Rollweg";
        break;
      case "terminal":
        type += "Flughafengebäude";
        break;
      default:
        type += "unbekannt" + "<br/>";
    }
  }
  if (attr.railway === "halt") type += "Bahn-Haltepunkt" + "<br/>";
  if (attr.railway === "crossing") type += "Bahnübergang" + "<br/>";
  if (attr.railway === "level_crossing") type += "Bahnübergang" + "<br/>";
  if (attr.railway === "station") type += "Bahnhof" + "<br/>";
  if (attr.amenity === "bus_station") type += "Busbahnhof" + "<br/>";
  if (!attr.amenity === "bus_station" && attr.public_transport === "station" && attr.bus === "yes") type += "Busbahnhof" + "<br/>";
  if (attr.railway === "rail") {
    type += "Bahnlinie" + "<br/>";
    if (attr.electrified === "contact_line") type += "elektrifizierte Bahntrasse mit Oberleitung" + "<br/>";
  }
  if (attr.railway === "tram") type += "Straßenbahnlinie" + "<br/>";
  if (attr["seamark:small_craft_facility:category"] === "slipway" || attr.harbour === "slipway" || attr.leisure === "slipway") type += "Slipanlage" + "<br/>";
  if (attr["seamark:type"] === "harbour") {
    if (attr["seamark:harbour:category"]) {
      switch (attr["seamark:harbour:category"]) {
        case "ferry":
          type += "Fährhafen" + "<br/>";
          break;
        case "container":
          type += "Containerhafen" + "<br/>";
          break;
        case "marina":
          if (attr.leisure !== "marina") {
            type += "Jachthafen" + "<br/>";
          }
          break;
        case "navel_base":
          type += "Marine-Hafen" + "<br/>";
          break;
        case "tanker":
          type += "Hafen für Öltanker" + "<br/>";
          break;
        case "passenger":
          type += "Personenschifffahrt" + "<br/>";
          break;
        case "bulk":
          type += "Schüttgut-Hafen" + "<br/>";
          break;
        default:
          type += "Hafen" + "<br/>";
      }
    } else type += "Hafen" + "<br/>";
  }
  if (attr.leisure === "marina") type += "Jachthafen" + "<br/>";
  if (attr.historic === "wreck") type += "Wrack" + "<br/>";
  if (attr.amenity === "animal_shelter") type += "Tierheim" + "<br/>";
  if (attr.animal === "shelter") type += "Tierheim" + "<br/>";
  if (attr.animal === "horse_walker") type += "Pferdelauftrainer" + "<br/>";
  if (attr.animal_shelter === "yes") type += "Tierheim" + "<br/>";
  if (attr.animal_shelter === "dog") type += "Tierheim" + "<br/>";
  if (attr.animal_shelter === "cat") type += "Tierheim" + "<br/>";
  if (attr.amenity === "animal_boarding") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "yes") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "dog") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "horse") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "cat") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "dog;cat") type += "Tierpension" + "<br/>";
  if (attr.animal_boarding === "cat;dog") type += "Tierpension" + "<br/>";
  if (attr.animal === "school" || attr.animal === "sport" || attr.amenity === "animal_training") type += "Tiertraining" + "<br/>";
  if (attr.animal === "swimming") type += "Badestelle für Hunde" + "<br/>";
  if (attr.amenity === "feeding_place" || attr.man_made === "animal_feeding" || attr.amenity === "animal_feeding") type += "Fütterungsstelle" + "<br/>";
  if (attr.amenity === "wildlife_feeding" || attr.amenity === "deer_feeding" || attr.amenity === "game_feeding") type += "Wildfütterung" + "<br/>";
  if (attr.amenity === "cratch" || attr.man_made === "cratch" || attr.amenity === "feeding_rack") type += "Futterraufe" + "<br/>";
  if (attr.amenity === "manger") type += "Krippe" + "<br/>";
  if (attr.man_made === "birdhouse") type += "Vogelhaus" + "<br/>";
  if (attr.birds_nest === "stork") type += "Storchennest" + "<br/>";
  if (attr.amenity === "nest_box") type += "Nistkasten" + "<br/>";
  if (attr.animal === "wellness") type += "Hundesalon" + "<br/>";
  if (attr.animal === "cemetery") type += "Kleintierfriedhof" + "<br/>";
  if (attr.building === "stable" || attr["building:use"] === "stable") type += "Pferdestall" + "<br/>";
  if (attr.building === "cowshed") type += "Kuhstall" + "<br/>";
  if (attr.building === "sty") type += "Schweinestall" + "<br/>";
  if (attr.building === "barn") type += "Scheune / landwirtsch. Lagerhalle" + "<br/>";
  if (attr.building === "farm_auxiliary") type += "landwirtschaftl. Nebengebäude" + "<br/>";
  if (attr["river:waterway_distance"] || attr.waterway === "milestone") type += "Flusskilometer" + "<br/>";
  if (attr.highway === "milestone") type += "Strassenkilometer" + "<br/>";
  if (attr["xmas:feature"] === "market") type += "Weihnachtsmarkt" + "<br/>";
  if (attr["xmas:feature"] === "tree") type += "Weihnachtsbaumverkauf" + "<br/>";
  if (attr["xmas:feature"] === "event") type += "Weihnachtsevent" + "<br/>";
  if (attr["xmas:feature"] === "pyramid") type += "Weihnachtspyramide" + "<br/>";
  type = '<div class="c4g_popup_header_featuretype">' + type + "<br/> </div>";
  return type;
}
var fnContent = exports.fnContent = function fnContent(attr) {
  var content = "";
  content += fnContentGeneralInformations(attr);
  content += fnContentHealthcare(attr);
  content += fnContentAerodrome(attr);
  content += fnContentCuisine(attr);
  content += fnContentShipping(attr);
  content += fnContentHydrants(attr);
  content += fnContentSports(attr);
  content += fnContentStreetsTraffic(attr);
  content += fnContentInformationCity(attr);
  content += fnContentEmergency(attr);
  content += fnContentStorage(attr);
  content += fnContentAmenity(attr);
  content += fnContentTourism(attr);
  content += fnContentRoute(attr);
  content += fnContentPetrol(attr);
  content += fnContentBarriers(attr);
  content += fnContentLanduse(attr);
  content += fnContentNatural(attr);
  content += fnKlosterAdditional(attr);
  content += fnSicherheitAdditional(attr);
  content += fnAdditionalBuildingInfos(attr);
  content += fnKraftwerkInfo(attr);
  content += fnMessstation(attr);
  content += fnWertstoffinfo(attr);
  content += fnContentProtectedArea(attr);
  if (content) {
    content = "<br/>" + content;
  }
  content = '<div class="c4g_popup_content">' + content + "</div>";
  return content;
};
var fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(attr) {
  var ret = "";
  if (attr.aerodrome) {
    if (attr.aerodrome === "international") ret += "Flughafentype: internationaler Flugplatz" + "<br/>";
    if (attr.aerodrome === "regional") ret += "Flughafentype: regionaler Flugplatz" + "<br/>";
    if (attr.aerodrome === "gliding") ret += "Flughafentype: Segelflugplatz" + "<br/>";
    if (attr.aerodrome === "private") ret += "Flughafentype: Privatflugplatz" + "<br/>";
  }
  if (attr.iata) ret += "IATA-Code: " + attr.iata + "<br/>";
  if (attr.icao) ret += "ICAO-Code: " + attr.icao + "<br/>";
  return ret;
};
var fnContentNatural = exports.fnContentNatural = function fnContentNatural(attr) {
  var ret = "";
  if (attr.forest || attr.wood) {
    if (attr.leaf_type === "broadleaved" || attr.wood === "deciduous") ret += "Laubwald" + "<br/>";
    if (attr.leaf_type === "needleleaved" || attr.wood === "coniferous") ret += "Nadelwald" + "<br/>";
    if (attr.leaf_type === "mixed" || attr.wood === "mixed") ret += "Mischwald" + "<br/>";
    if (attr.leaf_type === "leafless") ret += "Blattlose Vegetation" + "<br/>";
    if (attr.wood === "evergreen") ret += "immergrün" + "<br/>";
    if (attr.wood === "palm") ret += "Palmen" + "<br/>";
    if (attr.wood === "nipa_palm") ret += "Nipapalmen" + "<br/>";
    if (attr.wood === "eucalypt") ret += "Eukalypten" + "<br/>";
    if (attr.wood === "filao" || attr.wood === "casuarina") ret += "Kasuarinengewächse" + "<br/>";
  }
  if (attr.natural === "tree") {
    if (!attr["genus:de"] && !attr["species:de"]) {
      if (attr.leaf_type) if (attr.leaf_type === "broadleaved" || attr.leaf_type === "deciduous" || attr.leaf_type === "broadleafed") ret += "Laubbaum" + "<br/>";else ret += "Nadelbaum" + "<br/>";
    }
    if (attr.genus) ret += attr.genus + "<br/>";
    if (attr["genus:de"]) ret += attr["genus:de"] + "<br/>";
    if (attr.species) ret += attr.species + "<br/>";
    if (attr["species:de"]) ret += attr["species:de"] + "<br/>";
    if (attr.denotation === "landmark") ret += "durch Größe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum." + "<br/>";
    if (attr.denotation === "natural_monument" || attr.monument === "yes") ret += "alter, unter besonderem Schutz stehender Baum." + "<br/>";
  }
  if (attr["feeding:type"] === "manger") ret += "Futterbehälter: " + "Futterraufe" + "<br/>";
  if (attr["feeding:type"] === "automated") ret += "Automat" + "<br/>";
  if (attr["feeding:for"]) {
    switch (attr["feeding:for"]) {
      case "sheep":
        ret += "Tier: Schaaf" + "<br/>";
        break;
      case "horse":
        ret += "Tier: Pferd" + "<br/>";
        break;
      case "cow":
        ret += "Tier: Kuh" + "<br/>";
        break;
      case "rabbit":
        ret += "Tier: Kaninchen" + "<br/>";
        break;
      case "bunny":
        ret += "Tier: Hase" + "<br/>";
        break;
      case "cat":
        ret += "Tier: Katze " + "</br>";
        break;
      case "swan":
        ret += "Tier: Schwan " + "</br>";
        break;
      case "guinea pig":
        ret += "Tier: Meerschweinchen " + "</br>";
        break;
      case "donkey":
        ret += "Tier: Esel " + "</br>";
        break;
      case "squirrel":
        ret += "Tier: Eichhörnchen " + "</br>";
        break;
      case "pig":
        ret += "Tier: Schwein " + "</br>";
        break;
      case "deer":
        ret += "Tier: Reh " + "</br>";
        break;
      case "guinea pig":
        ret += "Tier: Meerschweinchen " + "</br>";
        break;
      case "monkey":
        ret += "Tier: Affe " + "</br>";
        break;
      case "camel":
        ret += "Tier: Kamel " + "</br>";
        break;
      case "goat":
        ret += "Tier: Ziege " + "</br>";
        break;
      case "hamster":
        ret += "Tier: Hamster " + "</br>";
        break;
      case "alpaca":
        ret += "Tier: Alpaka " + "</br>";
        break;
      default:
        ret += "Tiere: nicht bekannt" + "<br/>";
    }
  }
  if (attr["feeding:fodder"]) {
    switch (attr["feeding:fodder"]) {
      case "hay":
        ret += "Füttern mit: Heu" + "</br>";
        break;
      case "grain":
        ret += "Füttern mit: Getreide" + "</br>";
        break;
      case "corn":
        ret += "Füttern mit: Korn" + "</*br>";
        break;
      default:
        ret += "Füttern mit: nicht bekannt" + "</br>";
    }
  }
  if (attr.natural === "volcano" && attr.status === "active") ret += "Aktiver Vulkan" + "<br/>";
  if (attr.natural === "volcano" && attr.status === "dormant") ret += "Ruhender Vulkan" + "<br/>";
  if (attr.natural === "volcano" && attr.status === "extinct") ret += "Erloschener Vulkan" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "stratovolcano") ret += "Vulkantyp:" + "Schichtvulkan" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "shield") ret += "Vulkantyp:" + "Schildvulkan" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "scoria") ret += "Vulkantyp:" + "Schlacken- und Aschenkegel" + "<br/>";
  return ret;
};
var fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(attr) {
  var ret = "";
  var id = "";
  if (attr.boundary === "protected_area") {
    if (attr.protect_class) id = attr.protect_class;
    if (attr.protect_id) id = attr.protect_id;
    if (id === "1") ret = "Beschreibung: " + "Strenges Naturreservat, Wildnisgebiet" + "<br/>";
    if (id === "2") ret = "Beschreibung: " + "Nationalpark" + "<br/>";
    if (id === "3") ret = "Beschreibung: " + "Naturmonument" + "<br/>";
    if (id === "4") ret = "Beschreibung: " + "Biotop/Artenschutzgebiet mit Management" + "<br/>";
    if (id === "5") ret = "Beschreibung: " + "Geschützte Landschaft/Geschütztes marines Gebiet" + "<br/>";
    if (id === "6") ret = "Beschreibung: " + "Ressourcenschutzgebiet mit Management" + "<br/>";
    if (id === "7") ret = "Beschreibung: " + "Lokal geschützte Bereiche" + "<br/>";
    if (id === "97") ret = "Beschreibung: " + "Geschützt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene" + "<br/>";
    if (id === "98") ret = "Beschreibung: " + "Geschützt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen" + "<br/>";
    if (id === "99") ret = "andere " + "<br/>";
    if (id === "21") ret = "Beschreibung: " + "Gemeindebefinden (heilige Orte, assoziatice Orte)" + "<br/>";
    if (id === "22") ret = "Beschreibung: " + "Kulturelle Werte (Kulturgüter, historisches Erbe, Denkmalschutz)" + "<br/>";
    if (id === "23") ret = "Beschreibung: " + "Schutz zu Gundsten der Wirtschaft" + "<br/>";
    if (id === "24") ret = "Beschreibung: " + "Politische Schutzgebiete" + "<br/>";
    if (id === "25") ret = "Beschreibung: " + "Militärische Schutzgebiete" + "<br/>";
    if (id === "26") ret = "Beschreibung: " + "Historische Schutzgebiete" + "<br/>";
    if (id === "29") ret = "Beschreibung: " + "Weitere gesellschaftliche Schutzgebiete" + "<br/>";
    if (id === "11") ret = "Beschreibung: " + "Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)" + "<br/>";
    if (id === "12") ret = "Beschreibung: " + "Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)" + "<br/>";
    if (id === "13") ret = "Beschreibung: " + "Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)" + "<br/>";
    if (id === "14") ret = "Beschreibung: " + "Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)" + "<br/>";
    if (id === "15") ret = "Beschreibung: " + '"Standortausstattung": Retentionsraum (gesetzlich geschütztes Überschwemmungsgebiet) ' + "<br/>";
    if (id === "16") ret = "Beschreibung: " + "Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)" + "<br/>";
    if (id === "19") ret = "Beschreibung: " + "Weitere nationale Gebiete" + "<br/>";
  }
  return ret;
};
var fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(attr) {
  var ret = "";
  if (attr.landuse === "quarry") {
    if (attr.resource) ret += "Resource: " + attr["resource"] + "<br/>";
  }
  if (attr["animal_keeping:type"] === "open_stable") ret += "Offenstall" + "<br/>";
  if (attr["animal_keeping:type"] === "field_shelter") ret += "Weide mit Unterstand" + "<br/>";
  if (attr["animal_keeping:type"] === "paddock") ret += "Paddock" + "<br/>";
  if (attr.animal_keeping) ret += "Tiere: " + "Perde" + "<br/>";
  return ret;
};
var fnMessstation = exports.fnMessstation = function fnMessstation(attr) {
  var ret = "";
  if (attr["monitoring:water_level"] === "yes") ret += "Pegelstand" + "<br/>";
  if (attr["monitoring:seismic_activity"] === "yes") ret += "seismische Aktivitäten" + "<br/>";
  if (attr["monitoring:tide_gauge"] === "yes") ret += "Tidestand" + "<br/>";
  if (attr["monitoring:weather"] === "yes") ret += "Wetterdaten" + "<br/>";
  if (attr["monitoring:air_quality"] === "yes") ret += "Luftqualität" + "<br/>";
  return ret;
};
var fnContentRoute = exports.fnContentRoute = function fnContentRoute(attr) {
  var ret = "";
  if (attr.route) {
    if (attr.roundtrip === "yes") ret += "Rundweg" + "<br/>";
    if (attr.length) ret += "Länge/Distanz: " + attr.length + "<br/>";
    if (attr.distance) ret += "Länge/Distanz: " + attr.distance + "<br/>";
    if (attr.symbol) ret += "Symbol: " + attr.symbol + "<br/>";
  }
  return ret;
};
var fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(attr) {
  var ret = "";
  if (attr.amenity === "fuel") {
    if (attr["fuel:biodiesel"] === "yes") ret += "Biodiesel" + "<br/>";
    if (attr["fuel:e85"] === "yes") ret += "Ethanol" + "<br/>";
    if (attr["fuel:e10"] === "yes") ret += "E10" + "<br/>";
    if (attr["fuel:lpg"] === "yes") ret += "Autogas" + "<br/>";
    if (attr["fuel:cng"] === "yes") ret += "Erdgas" + "<br/>";
    if (attr.fuel === "diesel") ret += "Diesel" + "<br/>";
    if (attr.fuel === "lpg") ret += "Autogas" + "<br/>";
    if (attr["fuel:octane_95"] === "yes") ret += "Super Bleifrei" + "<br/>";
    if (attr["fuel:octane_98"] === "yes") ret += "Super Plus" + "<br/>";
    if (attr["fuel:octane_100"] === "yes") ret += "V-Power Racing" + "<br/>";
    if (attr["fuel:octane_102"] === "yes") ret += "Ultimate" + "<br/>";
    if (attr["fuel:diesel"] === "yes") ret += "Diesel" + "<br/>";
    if (attr["fuel:electricity"] === "yes") ret += "Ladestation / Stromtankstelle" + "<br/>";
  }
  return ret;
};
var fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(attr) {
  var ret = "";
  if (attr.historic === "archaeological_site") {
    if (attr.site_type) {
      switch (attr.site_type) {
        case "megalith":
          ret += "Megalith" + "<br/>";
          break;
        case "bigstone":
          ret += "Findling" + "<br/>";
          break;
        case "tumulus":
          ret += "Hügelgrab" + "<br/>";
          break;
        case "fortification":
          ret += "historischer Graben / Wall" + "<br/>";
          break;
        default:
          ret += "unbekannt" + "<br/>";
      }
    }
  }
  return ret;
};
var fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(attr, content) {
  var ret = "";
  if (attr.barrier === "wall" || attr.barrier === "bollard") {
    if (attr.material) ret += "Material: " + translate(attr["material"]) + "<br/>";
  }
  return ret;
};
var fnContentTourism = exports.fnContentTourism = function fnContentTourism(attr) {
  var ret = "";
  if (attr.tourism === "camp_site") {
    if (attr.dog === "yes") {
      ret += "Hunde erlaubt" + "<br/>";
    }
    if (attr.dog === "no") {
      ret += "Hunde nicht erlaubt" + "<br/>";
    }
    if (attr.stars) {
      var stars = attr.stars;
      ret += stars + "Sterne" + "<br/>";
    }
    if (attr.caravans) {
      ret += "Wohnmobilstellplätze" + "<br/>";
    }
    if (attr.openfire === "yes" || attr.fireplace === "yes") {
      ret += "Feuerstellen vorhanden" + "<br/>";
    }
    if (attr.washing_machine === "yes") {
      ret += "Waschmaschinen" + "<br/>";
    }
    if (attr.dryer === "yes") {
      ret += "Trockner" + "<br/>";
    }
    if (attr.group_only === "yes") {
      ret += "Nutzung nur durch Gruppen" + "<br/>";
    }
    if (attr.camp_site === "reception") {
      ret += "Reception vorhanden" + "<br/>";
    }
  }
  if (attr.tourism === "information" && attr.information === "map") {
    if (attr.map_type === "topo") ret += "Topografische Karte" + "</br>";
    if (attr.map_type === "street") ret += "Straßenkarte" + "</br>";
    if (attr.map_type === "scheme") ret += "Schematische Karte" + "</br>";
    if (attr.map_type === "toposcope") ret += "Schematische Karte" + "</br>";
  }
  if (attr.tourism === "information" && attr.information === "map") {
    if (attr.map_size === "site") ret += "Karte einer Anlage" + "</br>";
    if (attr.map_size === "city") ret += "Stadtplan" + "</br>";
    if (attr.map_size === "region") ret += "Karte der Region" + "</br>";
  }
  if (attr.board_type === "geology") ret += "Geologische Informationen" + "<br/>";
  if (attr.board_type === "history") ret += "Historische Informationen" + "<br/>";
  if (attr.board_type === "nature") ret += "Informationen über Natur" + "<br/>";
  if (attr.board_type === "notice") ret += "Allgemeine Information" + "<br/>";
  if (attr.board_type === "plants") ret += "Informationen über Pflanzen" + "<br/>";
  if (attr.board_type === "wildlife") ret += "Informationen über Wild" + "<br/>";
  return ret;
};
var fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(attr) {
  var ret = "";
  if (attr.amenity === "boat_sharing") ret += attr.boattype + "<br/>";
  if (attr.amenity === "embassy") ret += attr.country + "<br/>";
  if (attr.vending) {
    switch (attr.vending) {
      case "admission_tickets":
        ret += "Tickets" + "<br/>";
        break;
      case "animal_feed":
        ret += "Tierfutter" + "<br/>";
        break;
      case "books":
        ret += "Bücher" + "<br/>";
        break;
      case "candles":
        ret += "Kerzen" + "<br/>";
        break;
      case "cigarettes":
        ret += "Zigaretten" + "<br/>";
        break;
      case "condoms":
        ret += "Kondome" + "<br/>";
        break;
      case "drinks":
        ret += "Getränke" + "<br/>";
        break;
      case "first_aid":
        ret += "Erste Hilfe Artikel" + "<br/>";
        break;
      case "fishing_tackle":
        ret += "Angelequipment" + "<br/>";
        break;
      case "flowers":
        ret += "Blumen" + "<br/>";
        break;
      case "ice_cream":
        ret += "Eis" + "<br/>";
        break;
      case "laundry_detergent":
        ret += "Waschmittel" + "<br/>";
        break;
      case "newspapers":
        ret += "Zeitung" + "<br/>";
        break;
      case "SIM_cards":
        ret += "SIM-Karten" + "<br/>";
        break;
      case "sweets":
        ret += "Süßigkeiten" + "<br/>";
        break;
      case "parcel_pickup":
        ret += "Paketstation" + "<br/>";
        break;
      case "ice_cubes":
        ret += "Eiswürfel" + "<br/>";
        break;
      case "public_transport_tickets":
        ret += "Tickets für öffentliche Verkehrsmittel" + "<br/>";
        break;
      case "parking_ticket":
        ret += "Parkticket" + "<br/>";
        break;
      case "sex_toys":
        ret += "Sexspielzeug" + "<br/>";
        break;
      case "stamps":
        ret += "Briefmarken" + "<br/>";
        break;
      case "toll":
        ret += "Mauttickets" + "<br/>";
        break;
      case "umbrellas":
        ret += "Regenschirme" + "<br/>";
        break;
      default:
        ret += "Inhalt unbekannt" + "<br/>";
    }
  }
  if (attr.amenity === "post_box") {
    if (attr.collection_times) ret += "Leerungszeiten: " + attr.collection_times + "<br/>";
    if (attr.drive_through === "yes") ret += "Vom Auto aus erreichbar. <br/>";
  }
  return ret;
};
var fnContentStorage = exports.fnContentStorage = function fnContentStorage(attr) {
  var ret = "";
  if (attr.man_made === "storage_tank") {
    if (attr["content"]) {
      var contGerman = attr["content"];
      switch (contGerman) {
        case "fuel":
          contGerman = "Diesel";
          break;
        case "oil":
          contGerman = "Öl";
          break;
        case "gas":
          contGerman = "Gas";
          break;
        case "slurry":
          contGerman = "Gülle";
          break;
        case "cement":
          contGerman = "Zement";
          break;
        case "water":
          contGerman = "Wasser";
          break;
        case "manure":
          contGerman = "Dünger";
          break;
        case "silage":
          contGerman = "Silage";
          break;
      }
      ret += "Inhalt: " + contGerman + "<br/>";
    }
    if (attr["contents"]) {
      var contGerman = attr["contents"];
      switch (contGerman) {
        case "fuel":
          contGerman = "Diesel";
          break;
        case "oil":
          contGerman = "Öl";
          break;
        case "gas":
          contGerman = "Gas";
          break;
        case "slurry":
          contGerman = "Gülle";
          break;
        case "cement":
          contGerman = "Zement";
          break;
        case "water":
          contGerman = "Wasser";
          break;
        case "manure":
          contGerman = "Dünger";
          break;
        case "silage":
          contGerman = "Silage";
          break;
      }
      ret += "Inhalt: " + contGerman + "<br/>";
    }
  }
  if (attr.storage) {
    if (attr.storage === "gas") {
      ret += "Inhalt: Gas" + "<br/>";
    }
    if (attr.storage === "oil") {
      ret += "Inhalt: Öl" + "<br/>";
    }
  }
  return ret;
};
var fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(attr) {
  var ret = "";
  if (attr["name:de"]) {
    ret += "deutscher Name: " + attr["name:de"] + "<br/>";
  }
  if (attr.population >= 1e4) {
    attr.population = "" + attr.population;
    if (attr.population.length > 3) {
      var mod = attr.population.length % 3;
      var output = mod > 0 ? attr.population.substring(0, mod) : "";
      for (i = 0; i < Math.floor(attr.population.length / 3); i++) {
        if (mod === 0 && i === 0) output += attr.population.substring(mod + 3 * i, mod + 3 * i + 3);else output += "." + attr.population.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      ret += "Einwohnerzahl: " + output + "<br/>";
    } else ret += "Einwohnerzahl " + attr["population"] + "<br/>";
  }
  if (attr.population <= 1e4) {
    ret += "Einwohnerzahl: " + attr["population"] + "<br/>";
  }
  return ret;
};
var fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(attr) {
  var ret = "";
  if (attr.lifeboat) {
    if (attr.lifeboat === "inshore") ret += "Einsatzgebiet: Inshore (Binnen)" + "<br/>";else if (attr.lifeboat === "offshore") ret += "Einsatzgebiet: Offshore (Buten)" + "<br/>";
  }
  if (attr["lifeboat:class"]) ret += "Bootstyp: " + attr["lifeboat:class"] + "<br/>";
  if (attr["siren:type"]) {
    var contGerman = attr["siren:type"];
    switch (contGerman) {
      case "mechanical":
        contGerman = "mechanisch";
        break;
      case "electronic":
        contGerman = "elektronisch";
        break;
      case "pneumatic":
        contGerman = "pneumatisch";
        break;
      case "electromechanic":
        contGerman = "elektromechanisch";
        break;
    }
    ret += "Typ: " + contGerman + "<br/>";
  }
  if (attr["siren:purpose"]) {
    var contGerman = attr["siren:purpose"];
    switch (contGerman) {
      case "air_raid":
        contGerman = "Luftschutz";
        break;
      case "tornado":
        contGerman = "Tornado";
        break;
      case "storm":
        contGerman = "Sturm";
        break;
      case "civil_defense":
        contGerman = "Bevölkerungsschutz";
        break;
      case "fire":
        contGerman = "Feuer";
        break;
    }
    ret += "Nutzung: " + contGerman + "<br/>";
  }
  if (attr["siren:model"]) ret += "Model: " + attr["siren:model"] + "<br/>";
  if (attr["siren:range"]) ret += "Hörweite: " + attr["siren:range"] + "<br/>";
  return ret;
};
var fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(attr) {
  var ret = "";
  if (attr.cuisine) {
    var cuisine = "";
    if ((attr.shop === "supermarket" || attr.shop === "convenience" || attr.shop === "deli" || attr.shop === "organic") && attr.amenity !== "restaurant") ret += "Spezialitäten: ";else ret += "Küche: ";
    if (attr.cuisine === "arabic") cuisine += "arabisch" + "<br/>";
    if (attr.cuisine === "italian") cuisine += " italienisch" + "<br/>";
    if (attr.cuisine === "international") cuisine += " international" + "<br/>";
    if (attr.cuisine === "regional") cuisine += " regional" + "<br/>";
    if (attr.cuisine === "chinese") cuisine += " chinesisch" + "<br/>";
    if (attr.cuisine === "greek") cuisine += " griechisch" + "<br/>";
    if (attr.cuisine === "african") cuisine += " afrikanisch" + "<br/>";
    if (attr.cuisine === "german") cuisine += " deutsch" + "<br/>";
    if (attr.cuisine === "mexican") cuisine += " mexikanisch" + "<br/>";
    if (attr.cuisine === "french") cuisine += " französisch" + "<br/>";
    if (attr.cuisine === "indian") cuisine += " indisch" + "<br/>";
    if (attr.cuisine === "iranian") cuisine += " iranisch" + "<br/>";
    if (attr.cuisine === "lebanese") cuisine += " libanesisch" + "<br/>";
    if (attr.cuisine === "thai") cuisine += " thailändisch" + "<br/>";
    if (attr.cuisine === "balkan") cuisine += " balkan" + "<br/>";
    if (attr.cuisine === "turkish") cuisine += " türkisch" + "<br/>";
    if (attr.cuisine === "bavarian") cuisine += " bayrisch" + "<br/>";
    if (attr.cuisine === "czech") cuisine += " tschechisch" + "<br/>";
    if (attr.cuisine === "portuguese") cuisine += " portugiesisch" + "<br/>";
    if (attr.cuisine === "spanish") cuisine += " spanisch" + "<br/>";
    if (attr.cuisine === "japanese") cuisine += " japanisch" + "<br/>";
    if (attr.cuisine === "fish") cuisine += " Fisch" + "<br/>";
    if (attr.cuisine === "brazilian") cuisine += " brasilianisch" + "<br/>";
    if (attr.cuisine === "asian") cuisine += " asiatisch" + "<br/>";
    if (attr.cuisine === "mediterranean") cuisine += " mediterran" + "<br/>";
    if (attr.cuisine === "seafood") cuisine += " Meeresfrüchte" + "<br/>";
    if (attr.cuisine === "ice_cream") cuisine += " Eiscrem" + "<br/>";
    if (attr.cuisine === "burger") cuisine += " Fast Food" + "<br/>";
    if (attr.cuisine === "frozen_yogurt") cuisine += " Frozen Yogurt" + "<br/>";
    if (cuisine === "") cuisine = attr.cuisine + "<br/>";
    ret += cuisine;
  }
  return ret;
};
var fnContentShipping = exports.fnContentShipping = function fnContentShipping(attr) {
  var ret = "";
  if (attr.harbour = "yes") {
    if (attr["access:tide"] === "yes") ret += "Zufahrtsbeschränkung durch Tide" + "</br>";
    if (attr["access:swell"] === "yes") ret += "Zufahrtsbeschränkung durch Schwell" + "</br>";
    if (attr["access:ice"] === "yes") ret += "Zufahrtsbeschränkung durch Eis" + "</br>";
    if (attr.vhf_channel) ret += "UKW-Kanal: " + attr.vhf_channel + "</br>";
    if (attr.mmsi) ret += "MMSI-Nummer: " + attr.mmsi + "</br>";
    if (attr["harbour:information"]) ret += "Information :" + attr["harbour:information"] + "</br>";
  }
  if (attr.motorboat === "yes") ret += "Fahren mit Motor erlaubt" + "</br>";
  if (attr.motorboat === "no") ret += "Fahren mit Motor nicht erlaubt" + "</br>";
  if (attr.CEMT) ret += "CEMT: " + attr.CEMT + "</br>";
  if (attr.intermittent === "yes") ret += "Fluss zeitweise ausgetrocknet" + "</br>";
  if (attr.tidal === "yes") ret += "Gezeiten beeinflussen die Strömung" + "</br>";
  if (attr.draft) ret += "Fahrwassertiefe: " + attr.draft + " m</br>";
  if (attr.leisure === "slipway" || attr.harbour === "slipway") {
    if (attr.operating === "hand") ret += "Funktionsweise: Handbetrieb, Slipwagen" + "<br/>";
    if (attr.operating === "car") ret += "Funktionsweise: mit Auto, Bootsanhänger" + "<br/>";
    if (attr.operating === "cable_winch") ret += "Funktionsweise: Seilwinde" + "<br/>";
    if (attr.operating === "travellift") ret += "Funktionsweise: Travellift" + "<br/>";
    if (attr.man_made === "crane") {
      ret += "mit Kran" + "<br/>";
      if (attr["crane:maxload"]) ret += "Maximale Last: " + attr["crane:maxload"] + "<br/>";
      if (attr["ship:maxdraft"]) ret += "Maximaler Tiefgang: " + attr["ship:maxdraft"] + "<br/>";
      if (attr["ship:maxlength"]) ret += "Maximale Bootslänge: " + attr["ship:maxlength"] + "<br/>";
    }
    if (attr.vehicle === "yes") ret += "Mit Fahrzeug erreichbar" + "<br/>";
  }
  ret += fnWreckInfo(attr);
  if (attr.route === "ferry" || attr.amenity === "ferry_terminal" || attr.ferry === "yes") {
    var fahrzeit = attr.duration;
    if (fahrzeit !== "" && fahrzeit !== "undefined" && fahrzeit != null) ret += "Fahrtzeit in Std. : " + fahrzeit + "<br/>";
    if (attr.motorcar === "yes") ret += "Autos erlaubt " + "<br/>";
    if (attr.motorcar === "no") ret += "Autos nicht erlaubt " + "<br/>";
    if (attr.motor_vehicle === "no") ret += "Fahrzeuge nicht erlaubt " + "<br/>";
    if (attr.motor_vehicle === "yes") ret += "Fahrzeuge erlaubt " + "<br/>";
    if (attr.vehicle === "yes") ret += "Fahrzeuge erlaubt " + "<br/>";
    if (attr.vehicle === "no") ret += "Keine Fahrzeuge" + "<br/>";
    if (attr.bicycle === "no") ret += "Keine Fahrräder" + "<br/>";
    if (attr.bicycle === "no") ret += "Fahrräder erlaubt" + "<br/>";
    if (attr.hgv === "yes") ret += "LKW erlaubt " + "<br/>";
    if (attr.hgv === "no") ret += "LKW nicht erlaubt " + "<br/>";
    if (attr.foot === "yes") ret += "Fussgänger erlaubt " + "<br/>";
    if (attr.foot === "no") ret += "Fussgänger nicht erlaubt " + "<br/>";
    if (attr.bicycle === "yes") ret += "Fahrradfahrer erlaubt " + "<br/>";
    if (attr.bicycle === "no") ret += "Fahrradfahrer nicht erlaubt " + "<br/>";
    if (attr["ferry:cable"] === "yes") ret += "Seilfähre" + "<br/>";
  }
  if (attr["seamark:light:1:colour"]) {
    var contGerman = attr["seamark:light:1:colour"];
    switch (contGerman) {
      case "white":
        contGerman = "Weiß";
        break;
      case "red":
        contGerman = "Rot";
        break;
      case "green":
        contGerman = "Grün";
        break;
      case "blue":
        contGerman = "Blau";
        break;
      case "yellow":
        contGerman = "Gelb";
        break;
      case "amber":
        contGerman = "Bernsteinfarben";
        break;
    }
    ret += "Farbe des Lichts: " + contGerman + "<br/>";
  }
  if (attr.man_made === "lighthouse") {
    if (attr["seamark:light:1:character"]) ret += "Rhytmus des Lichtes: " + attr["seamark:light:1:character"] + "<br/>";
    if (attr["seamark:light:1:period"]) ret += "Periode: " + attr["seamark:light:1:period"] + "<br/>";
    if (attr["seamark:light:1:height"]) ret += "Höhe: " + attr["seamark:light:1:height"] + " m" + "<br/>";
    if (attr["seamark:light:1:range"]) ret += "Reichweite: " + attr["seamark:light:1:range"] + " sm" + "<br/>";
  }
  if (attr["seamark:light:colour"]) {
    var contGerman = attr["seamark:light:colour"];
    switch (contGerman) {
      case "white":
        contGerman = "Weiß";
        break;
      case "red":
        contGerman = "Rot";
        break;
      case "green":
        contGerman = "Grün";
        break;
      case "blue":
        contGerman = "Blau";
        break;
      case "yellow":
        contGerman = "Gelb";
        break;
      case "amber":
        contGerman = "Bernsteinfarben";
        break;
    }
    ret += "Farbe des Lichts: " + contGerman + "<br/>";
  }
  if (attr.man_made === "lighthouse") {
    if (attr["seamark:light:character"]) ret += "Rhytmus des Lichtes: " + attr["seamark:light:character"] + "<br/>";
    if (attr["seamark:light:height"]) ret += "Höhe: " + attr["seamark:light:height"] + " m" + "<br/>";
    if (attr["seamark:light:range"]) ret += "Reichweite: " + attr["seamark:light:range"] + " sm" + "<br/>";
    if (attr["seamark:light:period"]) ret += "Periode: " + attr["seamark:light:period"] + "<br/>";
  }
  return ret;
};
var fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(attr) {
  var ret = "";
  if (attr.emergency === "fire_hydrant") {
    var count = attr["fire_hydrant:count"];
    if (count !== "undefined" && count != null && count !== "") ret += "Anzahl: " + count + "<br/>";
    var diameter = attr["fire_hydrant:diameter"];
    if (diameter !== "undefined" && diameter != null && diameter !== "") ret += "Rohrdurchmesser: " + diameter + " mm" + "<br/>";
    var pressure = attr["fire_hydrant:pressure"];
    if (pressure !== "undefined" && pressure != null && pressure !== "") if (pressure === "suction") ret += "Druck in bar / Saugleitung: " + "Saugleitung" + "<br/>";else ret += "Druck in bar / Saugleitung: " + pressure + "<br/>";
    var position = attr["fire_hydrant:position"];
    if (position !== "undefined" && position != null && position !== "") {
      if (position === "lane") ret += "Position: " + "Fahrbahn" + "<br/>";else if (position === "parking_lot") ret += "Position: " + "Parkbucht" + "<br/>";else if (position === "sidewalk") ret += "Position: " + "Bürgersteig" + "<br/>";else if (position === "green") ret += "Position: " + "Wiese" + "<br/>";
    }
    var reservoire = attr["water_volume"];
    if (reservoire !== "undefined" && reservoire != null && reservoire !== "") ret += "Volumen: " + reservoire + "<br/>";
    var awwa_class = attr["fire_hydrant:awwa_class"];
    if (awwa_class !== "undefined" && awwa_class != null && awwa_class !== "") {
      ret += "AWWA Klasse: " + awwa_class + "<br/>";
    } else {
      var flow_rate = attr["flow_rate"];
      if (flow_rate !== "undefined" && flow_rate != null && flow_rate !== "") ret += "Durchfluss: " + flow_rate + "<br/>";
    }
    var water_source = attr["water_source"];
    if (water_source !== "undefined" && water_source != null && water_source !== "" && water_source !== "main") ret += "Wasserquelle: " + water_source + "<br/>";
    var couplings_type = attr["couplings:type"];
    if (couplings_type !== "undefined" && couplings_type != null && couplings_type !== "") ret += "Kopplungstyp: " + couplings_type + "<br/>";
    var couplings_diameter = attr["couplings:diameter"];
    if (couplings_diameter !== "undefined" && couplings_diameter != null && couplings_diameter !== "") ret += "Kopplungsdurchmesser: " + couplings_diameter + "<br/>";
    var pillar_type = attr["pillar:type"];
    if (pillar_type === "dry_barrel") ret += "Typ Überflurhydrant: " + pillar_type + "<br/>";
    var disused = attr["disused:emergency"];
    if (disused === "fire_hydrant") ret += "Aktuell unbrauchbar.";
    if (ret === "") ret = "Keine Details vorhanden.";
  }
  return ret;
};
var fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(attr) {
  var ret = "";
  if (attr["red_turn:right"] === "yes") ret += "Ampel mit Grünpfeil" + "<br/>";
  if (attr["red_turn:right"] === "no") ret += "Ampel ohne Grünpfeil" + "<br/>";
  if (attr.bridge) {
    if (attr.height) ret += "Höhe über dem Grund: " + attr.height + " m<br/>";
    if (attr.length) ret += "Länge der Brücke: " + attr.length + " m<br/>";
    if (attr.bridge_ref) ret += "Bauwerksnummer: " + attr.bridge_ref + "<br/>";
    if (attr.start_date) ret += "Baujahr: " + attr.start_date + "</br>;";
    if (attr.maxweight) ret += "Tragfähigkeit: " + attr.maxweight + " t</br>";
  }
  if (attr.highway) {
    if (attr.toll === "yes") ret += "Mautpflichtige Straße" + "<br/>";
  }
  if (attr["toll:hgv"] === "yes") ret += "Mautpflichtige Straße für LKWs" + "<br/>";
  if (attr.surface) {
    var oberflaeche = attr.surface;
    ret += "Oberfläche: ";
    switch (oberflaeche) {
      case "grass":
        ret += "Gras" + "<br/>";
        break;
      case "paved":
        ret += "versiegelt" + "<br/>";
        break;
      case "asphalt":
        ret += "Asphalt" + "<br/>";
        break;
      case "cobblestone":
        ret += "Naturstein unbehauen" + "<br/>";
        break;
      case "sett":
        ret += "behauenes Steinpflaster" + "<br/>";
        break;
      case "concrete":
        ret += "Beton" + "<br/>";
        break;
      case "unpaved":
        ret += "ohne Straßenbelag" + "<br/>";
        break;
      case "paving_stones":
        ret += "Pflastersteine" + "<br/>";
        break;
      case "compacted":
        ret += "verdichtete Deckschicht aus Natursteinmaterial" + "<br/>";
        break;
      case "dirt":
        ret += "unbefestigt" + "<br/>";
        break;
      case "fine_gravel":
        ret += "Splitt/Kies" + "<br/>";
        break;
      case "grass_paver":
        ret += "Rasengittersteine" + "<br/>";
        break;
      case "gravel":
        ret += "Schotter" + "<br/>";
        break;
      case "earth":
        ret += "naturbelassene Oberfläche" + "<br/>";
        break;
      case "ground":
        ret += "naturbelassene Oberfläche" + "<br/>";
        break;
      case "metal":
        ret += "Metall" + "<br/>";
        break;
      case "mud":
        ret += "Matsch, Morast" + "<br/>";
        break;
      case "sand":
        ret += "Sand" + "<br/>";
        break;
      case "wood":
        ret += "Holz" + "<br/>";
        break;
      case "tartan":
        ret += "Tartan- oder Kunststoffbelag" + "<br/>";
        break;
      case "artificial_turf":
        ret += "Kunstrasen" + "<br/>";
        break;
      case "clay":
        ret += "Ascheplatz" + "<br/>";
        break;
      default:
        ret += "unbekannt" + "<br/>";
    }
  }
  if (attr.tracktype === "grade1") ret += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)" + "<br/>";
  if (attr.tracktype === "grade2") ret += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)" + "<br/>";
  if (attr.tracktype === "grade3") ret += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enthält (z. B. Feinschotter-, Sand- oder Erdweg)" + "<br/>";
  if (attr.tracktype === "grade4") ret += "Wegbeschaffenheit: Unbefestigter Weg, hauptsächlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)" + "<br/>";
  if (attr.tracktype === "grade5") ret += "Wegbeschaffenheit: Unbefestigter Weg, Oberfläche besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gelände unterscheidbar" + "<br/>";
  if (attr.motorcycle === "yes") ret += "<br/>" + "mit dem Auto befahrbar." + "<br/>";
  if (attr.motorcycle === "no") ret += "<br/>" + "keine motorisierten Fahrzeuge zugelassen." + "<br/>";
  if (attr.trail_visibility === "excellent") ret += "Wegerkennbarkeit: Gut ausgewiesener Weg" + "<br/>";
  if (attr.trail_visibility === "good") ret += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden" + "<br/>";
  if (attr.trail_visibility === "intermediate") ret += "Wegerkennbarkeit: Weg nicht durchgegend sichbar" + "<br/>";
  if (attr.trail_visibility === "bad") ret += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen" + "<br/>";
  if (attr.trail_visibility === "horrible") ret += "Wegerkennbarkeit: Oft kein Weg vorhanden" + "<br/>";
  if (attr.trail_visibility === "no") ret += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen" + "<br/>";
  if (attr.sac_scale === "hiking") ret += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)" + "</br>";
  if (attr.sac_scale === "mountain_hiking") ret += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)" + "</br>";
  if (attr.sac_scale === "demanding_mountain_hiking") ret += "Weg: Heikle Stellen können mit Seilen oder Ketten gesichert sein. Leitern sind möglich. Eventuell sind die Hände fürs Gleichgewicht nötig. (Schwierigskeitstyp: 3)" + "</br>";
  if (attr.sac_scale === "alphine_hiking") ret += "Weg: Wegspur kaum vorhanden. An gewissen Stellen benötigt man die Hände zum weiterkommen (Schwierigskeitstyp: 4)" + "</br>";
  if (attr.sac_scale === "demanding_alphine_hiking") ret += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)" + "</br>";
  if (attr.sac_scale === "difficult_alpine_hiking") ret += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6" + "</br>";
  if (attr["mtb:name"]) ret += "Fahrradstrecke :" + attr["mtb:name"] + "</br>";
  if (attr["mtb:scale"] === "0") ret += "Mountainbikestrecke: Keine besondere Schwierigkeiten." + "</br>" + "Wegbeschaffenheit: fester und griffiger Untergrund." + "</br>" + "Hindernisse: Keine Hindernisse" + "</br>" + "Gefälle: Leicht bis mäßig" + "</br>" + "Kurven: weit" + "</br>" + "Fahrtechnik: keine besonderes fahrtechnisches Können nötig" + "</br>";
  if (attr["mtb:scale"] === "1") ret += "Mountainbikestrecke: Der Weg enthält flache Wurzeln und kleinere Steine. Häufig auch vereizelte Wasserrinnen und Erosionsschäden" + "</br>" + "Wegbeschaffenheit: loserer Untergrund möglich, kleine Wurzeln und Steine" + "</br>" + "Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionsschäden" + "</br>" + "Gefälle: bis zu 40%" + "</br>" + "Kurven: eng" + "</br>" + "Fahrtechnik: Fahrtechnische Grundkentnisse nötig. Hindernisse können überrollt werden" + "</br>";
  if (attr["mtb:scale"] === "2") ret += "Mountainbikestrecke: Der Weg enthält größere Wurzeln und Steine. Häufig auch vereizelte Wasserrinnen und Erosionsschäden" + "</br>" + "Wegbeschaffenheit: Untergrund meist nicht verfestigt, größere Wurzeln und Steine" + "</br>" + "Hindernisse:  flache Absätze und Treppen" + "</br>" + "Gefälle: bis zu 70%" + "</br>" + "Kurven: leichte Spitzkehren" + "</br>" + "Fahrtechnik: Fortgeschrittene Fahrtechnik nötig." + "</br>";
  if (attr["mtb:scale"] === "3") ret += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen größeren Felsbrocken und/oder Wurzelpassagen" + "</br>" + "Wegbeschaffenheit: verblockt, viele große Wurzeln/Felsen - rutschiger Untergrund, loses Geröll" + "</br>" + "Hindernisse:  hohe Absätze" + "</br>" + "Gefälle: 70% oder mehr" + "</br>" + "Kurven: enge Spitzkehren" + "</br>" + "Fahrtechnik: Sehr gute Bike-Beherrschung nötig." + "</br>";
  if (attr["mtb:scale"] === "4") ret += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit großen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen häufig loses Geröll und extreme Steilrampen" + "</br>" + "Wegbeschaffenheit: verblockt, viele große Wurzeln/Felsen - rutschiger Untergrund, loses Geröll" + "</br>" + "Hindernisse:  Steilrampen, kaum fahrbare Absätze" + "</br>" + "Gefälle: 70% oder mehr" + "</br>" + "Kurven:  Ösenartige Spitzkehren" + "</br>" + "Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken nötig." + "</br>";
  if (attr["mtb:scale"] === "5") ret += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gelände mit Gegenanstiegen, Geröllfeldern und Erdrutschen, ösenartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Absätzen und Hindernissen wie umgefallenen Bäumen" + "</br>" + "Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Geröll / der Weg ist eher ein Wandersteig" + "</br>" + "Hindernisse:  Steilrampen, kaum fahrbare Absätze" + "</br>" + "Gefälle: 70% oder mehr" + "</br>" + "Kurven:  Ösenartige Spitzkehren mit Hindernissen" + "</br>" + "Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken nötig." + "</br>";
  if (attr["mtb:scale"] === "6") ret += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst für Profis und Trial-Fahrer nicht passierbar" + "</br>" + "Wegbeschaffenheit:  Großteils nur noch kletterbar" + "</br>" + "Hindernisse: Absätze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide Hände braucht." + "</br>" + "Gefälle: 100% oder mehr" + "</br>" + "Kurven: - " + "</br>" + "Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr" + "</br>";
  if (attr["maxspeed"] === "10") ret += "Vekehrsberühigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links." + "</br>";
  if (attr["maxspeed"] === "30") ret += "Vekehrsberühigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h" + "</br>";
  if (attr["maxspeed"] === "50") ret += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht überschritten werden " + "</br>";
  if (attr["maxspeed"] === "70") ret += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht überschritten werden " + "</br>";
  if (attr["maxspeed"] === "80") ret += "Maximale Geschwindigkeit von 80 Km/h darf nicht überschritten werden." + "</br>";
  if (attr["maxspeed"] === "100") ret += "Maximale Geschwindigkeit von 100 Km/h darf nicht überschritten werden." + "</br>";
  if (attr["overtaking"] === "no") ret += "Überholverbot, Fahrzeuge dürfen nicht überholen !" + "</br>";
  if (attr["noexit"] === "yes") ret += "Die Straße endet hier, es handelt sich um eine Sackgasse" + "</br>";
  if (attr["oneway"] === "yes") ret += "Es handelt sich hier um eine Einbahnstraße, sie dürfen diese Straße nur in eine Richtung befahren" + "</br>";
  if (attr["priority_road"] === "designated") ret += "Es handelt sich hierbei um eine Vorfahrtsstraße, derjenige, der sich auf dieser befindet, hat gegenüber anderen Fahrzeugen die Vorfahrt!" + "</br>";
  if (attr["priority_road"] === "end") ret += "Die Vorfahrtsstraße endet hier und die Regelung wird aufgehoben" + "</br>";
  if (attr["highway"] === "emergency_bay") ret += "Hier befindet sich eine Bucht die nur in Notfällen zur Benuzung zur Verfügung steht" + "</br>";
  if (attr.traffic_calming === "yes") ret += "Verkehrsberuhigter Bereich" + "</br>";
  if (attr.traffic_calming === "bump") ret += "Kurze Bodenwelle" + "</br>";
  if (attr.traffic_calming === "chicane") ret += "Zu umfahrendenes Hinderniss" + "</br>";
  if (attr.traffic_calming === "choker") ret += "Fahrbahnverengung, zu umfahrende Hindernisse möglich" + "</br>";
  if (attr.traffic_calming === "cushion") ret += "Bodenwelle mit Lücken aus mehreren rechteckigen Huckeln" + "</br>";
  if (attr.traffic_calming === "hump") ret += "vergleichbare Bodenwelle mit etwar einer Länge von 2-4M" + "</br>";
  if (attr.traffic_calming === "island") ret += "Eine Verkehrsinsel" + "</br>";
  if (attr.traffic_calming === "rumble_strip") ret += "Holperstreifen" + "</br>";
  if (attr.traffic_calming === "table") ret += "lange Bodenwellen mit flachen Mittelstück" + "</br>";
  if (attr.amenity === "parking") {
    if (attr.fee === "yes") ret += "kostenpflichtig" + "<br/>";
    var women = attr["capacity:women"];
    if (women !== "" && women !== "no" && women != null) {
      var anzahl = "unbekannt";
      if (women !== "yes") anzahl = women;
      ret += "Frauenparkplätze" + " (Anzahl: " + anzahl + ") <br/>";
    }
  }
  if (attr.park_ride) {
    if (attr.park_ride === "bus") {
      ret += "Busanbindung" + "<br/>";
    }
    if (attr.park_ride === "tram") {
      ret += "Bahnanbindung" + "<br/>";
    }
    if (attr.park_ride === "unknown") {
      ret += "Verkehrsmittel unbekannt" + "<br/>";
    }
  }
  if (attr["railway:position"]) ret += "Streckenkilometer<br/>Position: " + attr["railway:position"] + "<br/>";
  if (attr.uic_ref) ret += "UIC: " + attr.uic_ref + "<br/>";
  return ret;
};
var fnContentSports = exports.fnContentSports = function fnContentSports(attr) {
  var ret = "";
  if (attr.sport === "9pin") ret += "Mögliche Sportart: Kegeln" + "<br/>";
  if (attr.sport === "10pin") ret += "Mögliche Sportart: Bowling" + "<br/>";
  if (attr.sport === "american_football") ret += "Mögliche Sportart: American Football" + "<br/>";
  if (attr.sport === "aikido") ret += "Mögliche Sportart: Aikido" + "<br/>";
  if (attr.sport === "archery") ret += "Mögliche Sportart: Bogenschießen" + "<br/>";
  if (attr.sport === "athletics") ret += "Mögliche Sportart: Leichtathletik" + "<br/>";
  if (attr.sport === "australian_football") ret += "Mögliche Sportart: Australian Football" + "<br/>";
  if (attr.sport === "base") ret += "Mögliche Sportart: Objektspringen" + "<br/>";
  if (attr.sport === "badminton") ret += "Mögliche Sportart: Badminton" + "<br/>";
  if (attr.sport === "baseball") ret += "Mögliche Sportart: Baseball" + "<br/>";
  if (attr.sport === "basketball") ret += "Mögliche Sportart: Basketball" + "<br/>";
  if (attr.sport === "beachvolleyball") ret += "Mögliche Sportart: Beachvolleyball" + "<br/>";
  if (attr.sport === "bmx") ret += "Mögliche Sportart: BMX" + "<br/>";
  if (attr.sport === "boules") ret += "Mögliche Sportart: Boccia" + "<br/>";
  if (attr.sport === "boule") ret += "Mögliche Sportart: Boccia" + "<br/>";
  if (attr.sport === "bowls") ret += "Mögliche Sportart: Bowls" + "<br/>";
  if (attr.sport === "boxing") ret += "Mögliche Sportart: Boxen" + "<br/>";
  if (attr.sport === "canadian_football") ret += "Mögliche Sportart: Canadian Football" + "<br/>";
  if (attr.sport === "canoe") ret += "Mögliche Sportart: Paddeln" + "<br/>";
  if (attr.sport === "chess") ret += "Mögliche Sportart: Schach" + "<br/>";
  if (attr.sport === "cliff_diving") ret += "Mögliche Sportart: Klippenspringen" + "<br/>";
  if (attr.sport === "climbing") ret += "Mögliche Sportart: Klettern" + "<br/>";
  if (attr.sport === "climbing_adventure") ret += "Mögliche Sportart: Klettern" + "<br/>";
  if (attr.sport === "cricket") ret += "Mögliche Sportart: Cricket" + "<br/>";
  if (attr.sport === "cricket_nets") ret += "Mögliche Sportart: Cricket Netz" + "<br/>";
  if (attr.sport === "croquet") ret += "Mögliche Sportart: Croquet" + "<br/>";
  if (attr.sport === "curling") ret += "Mögliche Sportart: Curling" + "<br/>";
  if (attr.sport === "cycling") ret += "Mögliche Sportart: Radrennen, Radsport" + "<br/>";
  if (attr.sport === "dog_racing") ret += "Mögliche Sportart: Hunderennen" + "<br/>";
  if (attr.sport === "darts" || attr.sport === "dart") ret += "Darts" + "<br/>";
  if (attr.sport === "fencing") ret += "Mögliche Sportart: Fechten" + "<br/>";
  if (attr.sport === "equestrian") ret += "Mögliche Sportart: Reiten" + "<br/>";
  if (attr.sport === "football") ret += "Mögliche Sportart: American Football" + "<br/>";
  if (attr.sport === "free_flying") ret += "Mögliche Sportart: Freeflying" + "<br/>";
  if (attr.sport === "gaelic_games") ret += "Mögliche Sportart: Gaelic games" + "<br/>";
  if (attr.sport === "golf") ret += "Mögliche Sportart: Golf" + "<br/>";
  if (attr.sport === "gymnastics") ret += "Mögliche Sportart: Gymnastik" + "<br/>";
  if (attr.sport === "hockey") ret += "Mögliche Sportart: Hockey" + "<br/>";
  if (attr.sport === "horseshoes") ret += "Mögliche Sportart: Hufeisenwerfen" + "<br/>";
  if (attr.sport === "horse_racing") ret += "Mögliche Sportart: Pferderennen" + "<br/>";
  if (attr.sport === "ice_stock") ret += "Mögliche Sportart: Eisstockschießen" + "<br/>";
  if (attr.sport === "judo") ret += "Mögliche Sportart: Judo" + "<br/>";
  if (attr.sport === "karting") ret += "Mögliche Sportart: Kartfahren" + "<br/>";
  if (attr.sport === "kitesurfing") ret += "Mögliche Sportart: Kitesurfing" + "<br/>";
  if (attr.sport === "korfball") ret += "Mögliche Sportart: Korfball" + "<br/>";
  if (attr.sport === "motor") ret += "Mögliche Sportart: Motorsport" + "<br/>";
  if (attr.sport === "multi") ret += "Mögliche Sportart: Mehrfachsport" + "<br/>";
  if (attr.sport === "obstacle_course") ret += "Mögliche Sportart: Hindernislauf" + "<br/>";
  if (attr.sport === "orienteering") ret += "Mögliche Sportart: Orientierungslauf" + "<br/>";
  if (attr.sport === "paddle_tennis") ret += "Mögliche Sportart: Paddle-Tennis" + "<br/>";
  if (attr.sport === "paragliding") ret += "Mögliche Sportart: Gleitschirmfliegen" + "<br/>";
  if (attr.sport === "Pelota") ret += "Mögliche Sportart: Pelota" + "<br/>";
  if (attr.sport === "rasquet") ret += "Mögliche Sportart: Racquetball" + "<br/>";
  if (attr.sport === "rowing") ret += "Mögliche Sportart: Rudern" + "<br/>";
  if (attr.sport === "rugby_league") ret += "Mögliche Sportart: Rugby League" + "<br/>";
  if (attr.sport === "rugby_union") ret += "Mögliche Sportart: Rugby Union" + "<br/>";
  if (attr.sport === "running") ret += "Mögliche Sportart: Laufsport" + "<br/>";
  if (attr.sport === "scuba_diving") ret += "Mögliche Sportart: Sporttauchen" + "<br/>";
  if (attr.sport === "shooting") ret += "Mögliche Sportart: Sportschießen" + "<br/>";
  if (attr.sport === "skating") ret += "Mögliche Sportart: Eislaufsport" + "<br/>";
  if (attr.sport === "skateboard") ret += "Mögliche Sportart: Skateboard" + "<br/>";
  if (attr.sport === "skiing") ret += "Mögliche Sportart: Skifahren" + "<br/>";
  if (attr.sport === "soccer") ret += "Mögliche Sportart: Fußball" + "<br/>";
  if (attr.sport === "surfing") ret += "Mögliche Sportart: Surfen" + "<br/>";
  if (attr.sport === "swimming") ret += "Mögliche Sportart: Schwimmen" + "<br/>";
  if (attr.sport === "table_tennis") ret += "Mögliche Sportart: Tischtennis" + "<br/>";
  if (attr.sport === "taekwondo") ret += "Mögliche Sportart: Taekwondo" + "<br/>";
  if (attr.sport === "team_handball") ret += "Mögliche Sportart: Handball" + "<br/>";
  if (attr.sport === "tennis") ret += "Mögliche Sportart: Tennis" + "<br/>";
  if (attr.sport === "toboggan") ret += "Mögliche Sportart: Rodeln" + "<br/>";
  if (attr.sport === "volleyball") ret += "Mögliche Sportart: Volleyball" + "<br/>";
  if (attr.sport === "water_ski") ret += "Mögliche Sportart: Wasserski" + "<br/>";
  if (attr.sport === "weightlifting") ret += "Mögliche Sportart: Gewichtheben" + "<br/>";
  if (attr.sport === "wrestling") ret += "Mögliche Sportart: Ringen" + "<br/>";
  return ret;
};
function fnArztInfo(attr) {
  var result = "";
  var subject = "";
  var spec = attr["healthcare:speciality"];
  if (spec !== "") {
    if (spec === "general") subject += "Allgemeinmedizin" + "<br/>";
    if (spec === "allergology") subject += "Allergologie" + "<br/>";
    if (spec === "anaesthetics") subject += "Anästhesiologie" + "<br/>";
    if (spec === "biochemistry") subject += "Medizinische und chemische Labordiagnostik" + "<br/>";
    if (spec === "biological_haematology") subject += "Biologische Hämatologie" + "<br/>";
    if (spec === "biology") subject += "Medizinische Biologie" + "<br/>";
    if (spec === "cardiology") subject += "Kardiologie" + "<br/>";
    if (spec === "cardiac_surgery") subject += "Kardiovaskularchirurgie" + "<br/>";
    if (spec === "child_psychiatry") subject += "Kinder- u. Jugendpsychatrie" + "<br/>";
    if (spec === "dental_oral_maxillo_facial_surgery") subject += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie" + "<br/>";
    if (spec === "dermatology") subject += "Hautkrankheiten" + "<br/>";
    if (spec === "dermatovenereology") subject += "Haut- und Geschlechtskrankheiten" + "<br/>";
    if (spec === "diagnostic_radiology") subject += "Diagnostische Radiologie" + "<br/>";
    if (spec === "emergency") subject += "Unfall- und Notfallmedizin" + "<br/>";
    if (spec === "endocrinology") subject += "Endokrinologie" + "<br/>";
    if (spec === "gastroenterological_surgery") subject += "Gastroenterologische Chirurgie" + "<br/>";
    if (spec === "gastroenterology") subject += "Gastroenterologie" + "<br/>";
    if (spec === "geriatrics") subject += "Geriatrie" + "<br/>";
    if (spec === "gynaecology") subject += "Geburtshilfe und Frauenheilkunde" + "<br/>";
    if (spec === "haematology") subject += "Allgemeine Hämatologie" + "<br/>";
    if (spec === "hepatology") subject += "Hepatologie" + "<br/>";
    if (spec === "immunology") subject += "Immunologie" + "<br/>";
    if (spec === "infectious_diseases") subject += "Ansteckende Krankheiten" + "<br/>";
    if (spec === "intensive") subject += "Intensivmedizin" + "<br/>";
    if (spec === "internal") subject += "Allgemeine (innere) Medizin" + "<br/>";
    if (spec === "maxillofacial_surgery") subject += "Mund-Kiefer-Gesichtschirurgie" + "<br/>";
    if (spec === "nephrology") subject += "Nierenkrankheiten" + "<br/>";
    if (spec === "neurology") subject += "Neurologie" + "<br/>";
    if (spec === "neurophysiology") subject += "Klinische Neurophysiologie" + "<br/>";
    if (spec === "neuropsychiatry") subject += "Neuropsychiatrie(Neurologie und Psychiatrie)" + "<br/>";
    if (spec === "neurosurgery") subject += "Neurochirurgie" + "<br/>";
    if (spec === "nuclear") subject += "Nuklearmedizin" + "<br/>";
    if (spec === "occupational") subject += "Arbeitsmedizin " + "<br/>";
    if (spec === "oncology") subject += "Onkologie" + "<br/>";
    if (spec === "ophthalmology") subject += "Augenheilkunde" + "<br/>";
    if (spec === "orthopaedics") subject += "Orthopädie" + "<br/>";
    if (spec === "otolaryngology") subject += "Hals-Nasen-Ohren-Heilkunde" + "<br/>";
    if (spec === "paediatric_surgery") subject += "Kinderchirurgie" + "<br/>";
    if (spec === "paediatrics") subject += "Kinderheilkunde" + "<br/>";
    if (spec === "palliative") subject += "Palliativmedizin" + "<br/>";
    if (spec === "physiatry") subject += "Physikalischeund Rehabilitative Medizin" + "<br/>";
    if (spec === "plastic_surgery") subject += "Plastische Chirurgie" + "<br/>";
    if (spec === "proctology") subject += "Proktologie" + "<br/>";
    if (spec === "psychiatry") subject += "Psychiatrie" + "<br/>";
    if (spec === "pulmonology") subject += "Lungen- und Bronchialheilkunde" + "<br/>";
    if (spec === "radiology") subject += "Radiologie" + "<br/>";
    if (spec === "radiotherapy") subject += "Strahlentherapie" + "<br/>";
    if (spec === "rheumatology") subject += "Rheumatologie" + "<br/>";
    if (spec === "stomatology") subject += "Stomatologie" + "<br/>";
    if (spec === "surgery") subject += "Chirurgie" + "<br/>";
    if (spec === "surgical_oncology") subject += "Krebschirurgie" + "<br/>";
    if (spec === "thoracic_surgery") subject += "Thoraxchirurgie" + "<br/>";
    if (spec === "transplant") subject += "Transplantationsmedizin" + "<br/>";
    if (spec === "trauma") subject += "Unfallchirurgie" + "<br/>";
    if (spec === "tropical") subject += "Tropenmedizin" + "<br/>";
    if (spec === "urology") subject += "Urologie" + "<br/>";
    if (spec === "vascular_surgery") subject += "Gefäßchirurgie" + "<br/>";
    if (spec === "venereology") subject += "Geschlechtskrankheiten" + "<br/>";
    if (spec === "acupuncture") subject += "Akupunktur" + "<br/>";
    if (spec === "naturopathy") subject += "Naturheilkunde" + "<br/>";
    if (spec === "chiropractic") subject += "Chiropraktik " + "<br/>";
    if (spec === "homeopathy") subject += "Homöopathie" + "<br/>";
    if (spec === "osteopathy") subject += "Osteopathie" + "<br/>";
  }
  var spec2 = attr["health_specialty"];
  if (spec2 !== "") {
    if (attr["health_specialty:family_medicine"] === "yes") subject += "Allgemeinmedizin" + "<br/>";
    if (attr["health_specialty:emergency_medicine"] === "yes") subject += "Notfallmedizin" + "<br/>";
    if (attr["health_specialty:anaesthesiology"] === "yes") subject += "Anästhesie" + "<br/>";
    if (attr["health_specialty:dermatology"] === "yes") subject += "Dermatologie" + "<br/>";
    if (attr["health_specialty:ear_nose_throat"] === "yes") subject += "Hals, Nasen, Ohren (HNO)" + "<br/>";
    if (attr["health_specialty:occupational_medicine"] === "yes") subject += "Arbeitsnmedizin" + "<br/>";
    if (attr["health_specialty:internal_medicine"] === "yes") subject += "innere Medizin" + "<br/>";
    if (attr["health_specialty:neurology"] === "yes") subject += "Neurologie" + "<br/>";
    if (attr["health_specialty:ophthalmology"] === "yes") subject += "Augenheilkunde" + "<br/>";
    if (attr["health_specialty:palliative_medicine"] === "yes") subject += "Palliativmedizin" + "<br/>";
    if (attr["health_specialty:psychiatry"] === "yes") subject += "Psychatrie" + "<br/>";
    if (attr["health_specialty:gynaecology"] === "yes") subject += "Gynäkologie" + "<br/>";
    if (attr["health_specialty:urology"] === "yes") subject += "Urologie" + "<br/>";
    if (attr["health_specialty:pain_medicine"] === "yes") subject += "Schmerzmedizin" + "<br/>";
    if (attr["health_specialty:environmental_medicine"] === "yes") subject += "Umweltmedizin" + "<br/>";
    if (attr["health_specialty:intensive_care_medicin"] === "yes") subject += "Intensivmedizin" + "<br/>";
    if (attr["health_specialty:paediatrics"] === "yes") subject += "Kinder- u. Jugendmedizin" + "<br/>";
    if (attr["health_specialty:physiatry"] === "yes") subject += "Physikalische und Rehabilitative Medizin" + "<br/>";
    if (attr["health_specialty:radiology"] === "yes") subject += "Radiologie" + "<br/>";
    if (attr["health_specialty:general"] === "yes") subject += "Allgemeinmedizin" + "<br/>";
    if (attr["health_specialty:occupational_therapy"] === "yes") subject += "Ergotherapie" + "<br/>";
    if (attr["health_specialty:pulmonology"] === "yes") subject += "Pneumologie" + "<br/>";
    if (attr["health_specialty:acupuncture"] === "yes") subject += "Akupunktur" + "<br/>";
    if (attr["health_specialty:orthopaedics"] === "yes") subject += "Orthopädie" + "<br/>";
    if (attr["health_specialty:chiropractic"] === "yes") subject += "Chiropraktik" + "<br/>";
    if (attr["health_specialty:sports_medicine"] === "yes") subject += "Sportmedizin" + "<br/>";
  }
  if (subject !== "") {
    result += "Fachgebiete: ";
    result += '<div class="c4g_open_text">' + subject + "</div>";
  }
  return result;
}
function fnKraftwerkInfo(attr) {
  var ret = "";
  if (attr["generator:method"]) {
    ret += "Erzeugungsart: ";
    switch (attr["generator:method"]) {
      case "combustion":
        ret += "Verbrennung";
        break;
      case "thermal":
        ret += "thermische Nutzung (z.B. Solarthermie)";
        break;
      case "pumping":
        ret += "durch Pumpen (z.B. die Nutzung von Geothermie)";
        break;
      case "photovoltaic":
        ret += "Photovoltaik";
        break;
      case "gasification":
        ret += "Vergasung, danach Verbrennung";
        break;
      case "anaerobic_digestion":
        ret += "Erzeugung von Biogas durch Vergärung";
        break;
      case "pyrolysis":
        ret += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
        break;
      case "fission":
        ret += "Kernspaltung";
        break;
      case "fusion":
        ret += "Kernfusion";
        break;
      default:
        ret += "unbekannt" + "<br/>";
    }
    ret += "<br/>";
  }
  if (attr["power_source"]) {
    ret += "Erzeugungsart: ";
    switch (attr["power_source"]) {
      case "photovoltaic":
        ret += "Photovoltaik";
        break;
      default:
        ret += "unbekannt" + "<br/>";
    }
    ret += "<br/>";
  }
  if (attr["generator:output:electricity"]) ret += "elekt. Energieerzeugung: " + attr["generator:output:electricity"] + "<br/>";
  if (attr["generator:output:heat"]) ret += "therm. Energieerzeugung: " + attr["generator:output:heat"] + "<br/>";
  if (attr["generator:output:cold"]) ret += "therm. Energieerzeugung: " + attr["generator:output:cold"] + "<br/>";
  if (attr["generator:output"]) ret += "Nennleistung: " + attr["generator:output"] + "<br/>";
  if (attr["generator:output:hot_air"]) ret += "Art des Transportmediums: " + attr["generator:output:hot_air"] + "<br/>";
  if (attr["generator:output:cold_water"]) ret += "Art des Transportmediums: " + attr["generator:output:cold_water"] + "<br/>";
  if (attr["generator:output:cold_air"]) ret += "Art des Transportmediums: " + attr["generator:output:cold_air"] + "<br/>";
  if (attr["generator:output:compressed_air"]) ret += "Art des Transportmediums: " + attr["generator:output:compressed_air"] + "<br/>";
  if (attr["generator:output:steam"]) ret += "Art des Transportmediums: " + attr["generator:output:steam"] + "<br/>";
  if (attr["generator:output:vacuum"]) ret += "Art des Transportmediums: " + attr["generator:output:vacuum"] + "<br/>";
  if (attr["generator:output:battery_charging"]) ret += "Art des Transportmediums: " + attr["generator:output:battery_charging"] + "<br/>";
  if (attr["generator:type"] === "PWR") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-1") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-2") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-3") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-4") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-5") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-6") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "PHWR") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "GCR") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "FBR") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "RBMK-1000") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "RBMK-1500") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "VVER") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "CANDU") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "CPR-1000") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "EPR") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "tokamak") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "stellarator") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "ICF") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "cold-fusion") ret += "Generatortyp: " + attr["generator:type"] + "<br/>";
  if (attr["generator:method"] === "wind_turbine" && attr["generator:type"] === "horizontal_axis") ret += "Generatortyp: " + "Horizontal-Achsen Windenergieanlage" + "<br/>";
  if (attr["generator:method"] === "wind_turbine" && attr["generator:type"] === "vertical_turbine") ret += "Generatortyp: " + "Vertikalrotor" + "<br/>";
  if (attr["generator:type"] === "francis_turbine") ret += "Generatortyp: " + "Francis-Turbine" + "<br/>";
  if (attr["generator:type"] === "kaplan_turbine") ret += "Generatortyp: " + "Kaplan-Turbine" + "<br/>";
  if (attr["generator:type"] === "pelton_turbine") ret += "Generatortyp: " + "Pelton-Turbine" + "<br/>";
  if (attr["generator:method"] === "stream" && attr["generator:type"] === "horizontal_axis") ret += "Generatortyp: " + "Gezeitenstromgenerator mit horizontaler Achse" + "<br/>";
  if (attr["generator:method"] === "stream" && attr["generator:type"] === "vertical_axis") ret += "Generatortyp: " + "Gezeitenstromgenerator mit vertikaler Achse" + "<br/>";
  if (attr["generator:type"] === "steam_turbine") ret += "Generatortyp: " + "Dampfturbine" + "<br/>";
  if (attr["generator:type"] === "heat_pump") ret += "Generatortyp: " + "Wärmepumpe" + "<br/>";
  if (attr["generator:type"] === "solar_thermal_collector") ret += "Generatortyp: " + "Sonnenkollektor" + "<br/>";
  if (attr["generator:type"] === "solar_photovoltaic_panel") ret += "Generatortyp: " + "Photovoltaic-System" + "<br/>";
  if (attr["generator:type"] === "steam_generator") ret += "Generatortyp: " + "Dampfgenerator" + "<br/>";
  if (attr["generator:type"] === "gas_turbine") ret += "Generatortyp: " + "Gasturbine" + "<br/>";
  if (attr["generator:type"] === "combined_cycle") ret += "Generatortyp: " + "Dampfgenerator" + "<br/>";
  if (attr["generator:type"] === "reciprocating_engine") ret += "Generatortyp: " + "Verbrennungsmotor/Blockheizkraftwerk" + "<br/>";
  return ret;
}
function fnWertstoffinfo(attr) {
  var ret = "";
  if (attr.recycling_type === "container" || attr.recycling_type === "centre" || attr.amenity === "recycling") {
    if (attr["recycling:glass"] === "yes") ret += "Altglascontainer" + "</br>";
    if (attr["recycling:shoes"] === "yes") ret += "Schuhentsorgung" + "</br>";
    if (attr["recycling:cooking_oil"] === "yes") ret += "Speise-Öl-Entsorgung" + "</br>";
    if (attr["recycling:paper"] === "yes") ret += "Papierentsorgung" + "</br>";
    if (attr["recycling:engine_oil"] === "yes") ret += "Öl-Entsorgung (Maschinen-, Alt-und Motoröl)" + "</br>";
    if (attr["recycling:clothes"] === "yes") ret += "Altkleidercontainer" + "</br>";
    if (attr["recycling:car_batteries"] === "yes") ret += "Auto-Batterien-Entsorgung" + "</br>";
    if (attr["recycling:cans"] === "yes") ret += "Blechdosenentsorgung" + "</br>";
    if (attr["recycling:scrap_metal"] === "yes") ret += "Altmetallentsorgung" + "</br>";
    if (attr["recycling:plastic"] === "yes") ret += "Plastikentsorgung" + "</br>";
    if (attr["recycling:batterries"] === "yes") ret += "Batterieentsorgung" + "</br>";
    if (attr["recycling:plastic_bottles"] === "yes") ret += "Plastikflaschenentsorgung" + "</br>";
    if (attr["recycling:green_waste"] === "yes") ret += "Grünabfälle" + "</br>";
    if (attr["recycling:hardcore"] === "yes") ret += "Bauschutt und Straßenmaterial Entsorgung" + "</br>";
  }
  return ret;
}
var fnContentGeneralInformations = exports.fnContentGeneralInformations = function fnContentGeneralInformations(attr) {
  var ret = "";
  if (attr.width) ret += "Breite: " + attr.width + " m<br/>";
  if (attr.height) ret += "Höhe: " + attr.height + " m<br/>";
  if (attr.maxwidth) ret += "Maximalbreite: " + attr.maxwidth + " m<br/>";
  if (attr.maxheight) ret += "Maximalhöhe: " + attr.maxheight + " m<br/>";
  if (attr.maxweight) ret += "Maximalgewicht: " + attr.maxweight + " t<br/>";
  if (attr.maxspeed) ret += "Höchstgeschwindigkeit: " + attr.maxspeed + " km/h<br/>";
  if (attr.min_age) ret += "Mindestalter: " + attr.min_age + "<br/>";
  if (attr.max_age) ret += "Maximalalter: " + attr.max_age + "<br/>";
  if (attr.nudism === "yes") {
    ret += "Freikörperkultur" + "<br/>";
  }
  if (attr.ruins === "yes") ret += "Ruine" + "<br/>";
  if (attr.ele) ret += "Höhe über NN: " + attr.ele + " m" + "<br/>";
  if (attr["xmas:day_date"]) ret += "Dauer von - bis: " + attr["xmas:day_date"] + "<br/>";
  if (attr["rotor:diameter"]) ret += "Rotordurchmesser: " + attr["rotor:diameter"] + " m<br/>";
  if (attr["xmas:note"]) ret += "Hinweis: " + attr["xmas:note"] + "<br/>";
  if (attr["seamark:beacon_lateral:category"] === "port") ret += "Backbord" + "<br/>";
  if (attr["seamark:beacon_lateral:category"] === "starboard") ret += "Steuerbord" + "<br/>";
  if (attr["service:bicycle:retail"] === "yes") ret += "Fahrradverkauf" + "<br/>";
  if (attr["service:bicycle:repair"] === "yes") ret += "Fahrradreparatur" + "<br/>";
  if (attr["service:bicycle:rental"] === "yes") ret += "Fahrradverleih" + "<br/>";
  if (attr["service:bicycle:pump"] === "yes") ret += "Benutzung einer Luftpumpe möglich" + "<br/>";
  if (attr["service:bicycle:diy"] === "yes") ret += "Benutzung von Werkzeug möglich" + "<br/>";
  if (attr["service:bicycle:cleaning"] === "yes") ret += "Fahrräder werden gewaschen" + "<br/>";
  if (attr["service:bicycle:second_hand"] === "yes") ret += "Verkauf von gebrauchten Fahrrädern" + "<br/>";
  if (attr["service:bicycle:charging"] === "yes") ret += "Elektro-Fahrräder können geladen werden" + "<br/>";
  if (attr.cafe === "yes") ret += "Kleine Café-Ecke" + "<br/>";
  if (attr.breakfast === "yes") ret += "Besonderes Frühstücksangebot" + "<br/>";
  if (attr.snack === "yes") ret += "Back-Snacks warm oder kalt" + "<br/>";
  if (attr.indoor_seating === "yes") ret += "Sitzmöglichkeiten im Innenbereich" + "<br/>";
  if (attr.outdoor_seating === "yes") ret += "Sitzmöglichkeiten im Außenbereich" + "<br/>";
  if (attr.self_service === "yes") ret += "Selbstbedienungsbäckerei" + "<br/>";
  if (attr.bakehouse === "yes") ret += "Backstube" + "<br/>";
  if (attr.pastry_shop === "yes") ret += "Gebäck aus der Konditorei" + "<br/>";
  if (attr.fair_trade === "yes") ret += "einige Fair-Trade-Produkte im Sortiment" + "<br/>";
  if (attr.fair_trade === "only") ret += "fast ausschließlich Fair-Trade-Produkte im Sortiment" + "<br/>";
  if (attr.fair_trade === "no") ret += "keine Fair-Trade-Produkte im Sortiment" + "<br/>";
  return ret;
};
var fnContentHealthcare = exports.fnContentHealthcare = function fnContentHealthcare(attr) {
  var ret = "";
  if (attr.amenity === "doctors" || attr.office === "physician" || attr.healthcare === "doctor") {
    ret += fnArztInfo(attr);
    if (attr.medical_area) ret += attr.medical_area + "<br/>";
    if (attr.type) ret += attr.type + "<br/>";
    if (attr["doctors:de"]) ret += attr["doctors:de"] + "<br/>";
    if (attr["note:de"]) ret += attr["note:de"] + "<br/>";
  }
  if (attr.dispensing === "yes") ret += "Apotheke mit Rezepteinlösung" + "<br/>";
  if (attr["social_facility:for"] === "abused") ret += "Einrichtung für: " + "Menschen die Misshandlung erlitten haben" + "<br/>";
  if (attr["social_facility:for"] === "child") ret += "Einrichtung für: " + "Kinder" + "<br/>";
  if (attr["social_facility:for"] === "disabled") ret += "Einrichtung für: " + "Menschen mit körperlicher oder geistiger Behinderung" + "<br/>";
  if (attr["social_facility:for"] === "diseased") ret += "Einrichtung für: " + "Erkrankte Menschen" + "<br/>";
  if (attr["social_facility:for"] === "drug_addicted") ret += "Einrichtung für: " + "Drogensüchtige" + "<br/>";
  if (attr["social_facility:for"] === "homeless") ret += "Einrichtung für: " + "Obdachlose" + "<br/>";
  if (attr["social_facility:for"] === "juvenile") ret += "Einrichtung für: " + "Jugendliche und Teenager" + "<br/>";
  if (attr["social_facility:for"] === "mental_health") ret += "Einrichtung für: " + "Menschen mit psychischen Problemen" + "<br/>";
  if (attr["social_facility:for"] === "migrant") ret += "Einrichtung für: " + "Menschen mit Migrationshintergrund" + "<br/>";
  if (attr["social_facility:for"] === "orphan") ret += "Einrichtung für: " + "Waisen" + "<br/>";
  if (attr["social_facility:for"] === "senior") ret += "Einrichtung für: " + "Senioren" + "<br/>";
  if (attr["social_facility:for"] === "underprivileged") ret += "Einrichtung für: " + "Arme oder benachteiligte Menschen" + "<br/>";
  if (attr["social_facility:for"] === "unemployed") ret += "Einrichtung für: " + "Arbeitslose" + "<br/>";
  if (attr["social_facility:for"] === "victim") ret += "Einrichtung für: " + "Opfer eines Verbrechens" + "<br/>";
  return ret;
};
function fnAdditionalBuildingInfos(attr) {
  var ret = "";
  if (attr["building:color"]) ret += "Gebäudenfarbe: " + attr["building:color"] + "</br>";
  if (attr["building:height"]) ret += "Gebäudenhöhe: " + attr["building:height"] + " m</br>";
  if (attr["building:level"]) ret += "Etage: " + attr["building:level"] + "</br>";
  if (attr["building:part"]) {
    var type;
    switch (attr["building:part"]) {
      case "roof":
        type = "Dach";
        break;
      case "retail":
        type = "Einzelhandel";
        break;
      case "tower":
        type = "Turm";
        break;
      default:
        type = attr["building:part"];
    }
    ret += "Gebäudeteile: " + attr["building:part"] + "</br>";
  }
  if (attr["roof:color"]) ret += "Dachfarbe: " + attr["roof:colour"] + "</br>";
  if (attr["roof:shape"]) {
    var type;
    switch (attr["roof:shape"]) {
      case "gabled":
        type = "Satteldach";
        break;
      case "flat":
        type = "Flachdach";
        break;
      case "skillion":
        type = "Schrägdach";
        break;
      case "half-hipped":
        type = "Schopf- oder Krüppelwalmdach";
        break;
      case "hipped":
        type = "Walmdach";
        break;
      case "pyramidal":
        type = "Zeltdach";
        break;
      case "gambrel":
        type = "Mansard-Giebeldach";
        break;
      case "mansard":
        type = "Mansard-Walmdach";
        break;
      case "dome":
        type = "Kuppeldach";
        break;
      case "onion":
        type = "Zwiebelhelm";
        break;
      case "round":
        type = "Tonnendach";
        break;
      case "saltbox":
        type = "Berliner Dach";
        break;
      default:
        type = attr["roof:shape"];
    }
    ret += "Dachform: " + attr["roof:shape"] + "</br>";
  }
  if (attr["roof:height"]) ret += "Dachhöhe: " + attr["roof:height"] + " m</br>";
  if (attr["roof:material"]) {
    var type;
    switch (attr["roof:material"]) {
      case "concrete":
        type = "Beton";
        break;
      case "copper":
        type = "Kupfer";
        break;
      case "eternit":
        type = "gewellt";
        break;
      case "plastic":
        type = "Kunststoff";
        break;
      case "asphalt":
        type = "Asphalt";
        break;
      case "glass":
        type = "Glas";
        break;
      case "grass":
        type = "Gras";
        break;
      case "gravel":
        type = "Kies";
        break;
      case "metal":
        type = "Metall";
        break;
      case "plants":
        type = "Pflanzen";
        break;
      case "roof_tiles":
        type = "Dachziegel";
        break;
      case "shadecloth":
        type = "Schattenstoff";
        break;
      case "slate":
        type = "Schiefer";
        break;
      case "tar_paper":
        type = "Teerpapier";
        break;
      case "stone":
        type = "Stein";
        break;
      case "thatch":
        type = "Strohdach";
        break;
      case "wood":
        type = "Holz";
        break;
      case "palm_leaves":
        type = "Palmblätter";
        break;
      case "bamboo":
        type = "Bambus";
        break;
      case "solar":
        type = "Solaranlage";
        break;
      default:
        type = attr["roof:material"];
    }
    ret += "Dachmaterial: " + attr["roof:material"] + " </br>";
  }
  if (attr["roof:orientation"]) {
    var type;
    switch (attr["roof:orientation"]) {
      case "north":
        type = "Norden";
        break;
      case "north_east":
        type = "Nordosten";
        break;
      case "east":
        type = "Osten";
        break;
      case "south_east":
        type = "Südosten";
        break;
      case "south":
        type = "Süden";
        break;
      case "south_west":
        type = "Südwesten";
        break;
      case "west":
        type = "Westen";
        break;
      case "north_west":
        type = "Nordwesten";
        break;
      default:
        type = attr["roof:orientation"];
    }
    ret += "Dachausrichtung: " + attr["roof:orientation"] + " </br>";
  }
  if (attr["roof:direction"]) ret += "Dachausrichtung: " + attr["roof:direction"] + " </br>";
  if (attr["building:type"]) {
    var type;
    switch (attr["building:type"]) {
      case "apartments":
        type = "Apartments";
        break;
      case "bungalow":
        type = "Bungalow";
        break;
      case "cabin":
        type = "Hütte";
        break;
      case "detached":
        type = "Einfamilienhaus";
        break;
      case "dormitory":
        type = "Studentenwohnheim";
        break;
      case "hotel":
        type = "Hotel";
        break;
      case "house":
        type = "Haus";
        break;
      case "houseboat":
        type = "Hausboot";
        break;
      case "static_caravan":
        type = "Wohnwagen";
        break;
      case "terrace":
        type = "Terrasse";
        break;
      case "commercial":
        type = "kommerziell";
        break;
      case "kiosk":
        type = "Kiosk";
        break;
      case "office":
        type = "Büro";
        break;
      case "retail":
        type = "Einzelhandel";
        break;
      case "supermarket":
        type = "Supermarkt";
        break;
      case "warehouse":
        type = "Lager";
        break;
      case "cathedral":
        type = "Kathedrale";
        break;
      case "chapel":
        type = "Kapelle";
        break;
      case "church":
        type = "Kirche";
        break;
      case "mosque":
        type = "Moschee";
        break;
      case "religious":
        type = "religiös";
        break;
      case "shrine":
        type = "Schrein";
        break;
      case "synagogue":
        type = "Synagoge";
        break;
      case "temple":
        type = "Tempel";
        break;
      case "bakehouse":
        type = "Bäckerei";
        break;
      case "civic":
        type = "zivil";
        break;
      case "hospital":
        type = "Krankenhaus";
        break;
      case "kindergarten":
        type = "Kindergarten";
        break;
      case "public":
        type = "Öffentlichkeit";
        break;
      case "school":
        type = "Schule";
        break;
      case "toilets":
        type = "Toiletten";
        break;
      case "train_station":
        type = "Bahnhof";
        break;
      case "transportation":
        type = "Lieferung";
        break;
      case "university":
        type = "Universität";
        break;
      case "barn":
        type = "Scheune";
        break;
      case "conservatory":
        type = "Konservatorium";
        break;
      case "cowshed":
        type = "Kuhstall";
        break;
      case "farm_auxiliary":
        type = "landwirtschaftliche Hilfskräfte";
        break;
      case "greenhouse":
        type = "Treibhaus";
        break;
      case "stable":
        type = "Stall";
        break;
      case "sty":
        type = "Schweinestall";
        break;
      case "grandstand":
        type = "Tribüne";
        break;
      case "pavilion":
        type = "Pavillon";
        break;
      case "riding_hall":
        type = "Reithalle";
        break;
      case "sports_hall":
        type = "Sporthalle";
        break;
      case "stadium":
        type = "Stadion";
        break;
      case "hangar":
        type = "Hangar";
        break;
      case "hut":
        type = "Hütte";
        break;
      case "shed":
        type = "Schuppen";
        break;
      case "carport":
        type = "Carport";
        break;
      case "garage":
        type = "Garage";
        break;
      case "garages":
        type = "Werkstätten";
        break;
      case "parking":
        type = "Parken";
        break;
      case "digester":
        type = "Faulbehälter";
        break;
      case "service":
        type = "Service";
        break;
      case "transformer_tower":
        type = "Transformatorturm";
        break;
      case "water_tower":
        type = "Wasserturm";
        break;
      case "bunker":
        type = "Bunker";
        break;
      case "bridge":
        type = "Brücke";
        break;
      case "construction":
        type = "Konstruktion";
        break;
      case "roof":
        type = "Dach";
        break;
      case "ruins":
        type = "Ruinen";
        break;
      default:
        type = attr["building:type"];
    }
    ret += "Gebäudentyp: " + type + "</br>";
  }
  return ret;
}
function fnSicherheitAdditional(attr) {
  var ret = "";
  if (attr.man_made === "surveillance") {
    if (attr.surveillance === "indoor") ret += "Innenbereich wird überwacht";
    if (attr.surveillance === "outdoor") ret += "Außenbereich wird überwacht";
    if (attr.surveillance === "public") ret += "Öffentliche Überwachung";
    if (attr["surveillance:type"] === "camera") ret += "Überwachungstyp: Kamera";
    if (attr["surveillance:type"] === "guard") ret += "Überwachungstyp: Wächter";
    if (attr["surveillance:type"] === "ALPR") ret += "Überwachungstyp: ALPR";
    if (attr["surveillance:zone"] === "town") ret += "Überwachungsbereich: Ort";
    if (attr["surveillance:zone"] === "parking") ret += "Überwachungsbereich: Parkplatz";
    if (attr["surveillance:zone"] === "traffic") ret += "Überwachungsbereich: Verkehr";
    if (attr["surveillance:zone"] === "shop") ret += "Überwachungsbereich: Shops";
    if (attr["surveillance:zone"] === "bank") ret += "Überwachungsbereich: Bank";
    if (attr["surveillance:zone"] === "building") ret += "Überwachungsbereich: Gebäude";
  }
  return ret;
}
function fnWreckInfo(attr) {
  var result = "";
  if (attr.historic === "wreck") {
    if (attr["wreck:date_sunk"]) result += "Gesunken am: " + attr["wreck:date_sunk"] + "<br/>";
    if (attr["wreck:depth"]) result += "Tiefe: " + attr["wreck:depth"] + "<br/>";
    if (attr["wreck:clearance"]) result += "Freiraum: " + attr["wreck:clearance"] + "<br/>";
    if (attr["wreck:date_commissioned"]) result += "Anerkannt seit: " + attr["wreck:date_commissioned"] + "<br/>";
    if (attr["wreck:gross_tonnage"]) result += "Gewicht: " + attr["wreck:gross_tonnage"] + "<br/>";
    if (attr["wreck:length"]) result += "Länge: " + attr["wreck:length"] + "<br/>";
    if (attr["wreck:width"]) result += "Breite: " + attr["wreck:width"] + "<br/>";
    if (attr["wreck:cargo"]) {
      if (attr["wreck:cargo"] === "timber") result += "Ladung: Holz" + "<br/>";else if (attr["wreck:cargo"] === "coal") result += "Ladung: Kohle" + "<br/>";else result += "Ladung: " + attr["wreck:cargo"] + "<br/>";
    }
    if (attr["wreck:visible_at_low_tide"] === "yes") result += "Sichtbar bei Niedrigwasser: Ja" + "<br/>";
    if (attr["wreck:visible_at_low_tide"] === "no") result += "Sichtbar bei Niedrigwasser: Nein" + "<br/>";
    if (attr["wreck:visible_at_high_tide"] === "yes") result += "Sichtbar bei Hochwasser: Ja" + "<br/>";
    if (attr["wreck:visible_at_high_tide"] === "no") result += "Sichtbar bei Hochwasser: Nein" + "<br/>";
    if (attr["access"] === "yes") result += "Zutritt möglich" + "<br/>";
    if (attr["access"] === "no") result += "Zutritt nicht möglich" + "<br/>";
    if (attr["access"] === "permit_required") result += "Zutritt nur mit Genehmigung" + "<br/>";
  }
  return result;
}
function fnKlosterAdditional(attr) {
  var ret = "";
  if (attr["monastery:type"]) {
    switch (attr["monastery:type"]) {
      case "monastery":
        ret += "Typ: Klösterliche Gemeinschaft (monastery)" + "<br/>";
        break;
      case "convent":
        ret += "Typ: Bettelmönch Gemeinschaft (convent)" + "<br/>";
        break;
      case "canonry":
        ret += "Typ: Kanonikat (canonry)" + "<br/>";
        break;
      case "commandry":
        ret += "Typ: Militär geführt (commandry)" + "<br/>";
        break;
      case "hermitage":
        ret += "Typ: Einsiedelei (hermitage)" + "<br/>";
        break;
      default:
        ret += "Typ: unbekannt" + "<br/>";
    }
  }
  if (attr["community:gender"]) {
    if (attr["community:gender"] === "male") ret += "Geschlecht: Männergemeinschaft" + "<br/>";
    if (attr["community:gender"] === "female") ret += "Geschlecht: Frauengemeinschaft" + "<br/>";
  }
  if (attr.religious_rank) {
    if (attr.religious_rank === "abbey") ret += "Religiöser Rang: Abtei" + "<br/>";else if (attr.religious_rank === "abbey") ret += "Religiöser Rang: Erzabtei" + "<br/>";
  }
  if (attr.shrine === "yes") ret += "Besonderheit: Heiligengrab / Reliquienschrein" + "<br/>";
  if (attr.sanctuary === "yes") ret += "Besonderheit: Heiligtum / Altarraum (Sanktuar)" + "<br/>";
  if (attr.religion) {
    switch (attr.religion) {
      case "animist":
        ret += "Religion: animistisch" + "<br/>" + "<br/>";
        break;
      case "bahai":
        ret += "Religion: bahai" + "<br/>";
        break;
      case "buddhist":
        ret += "Religion: buddhistisch" + "<br/>";
        break;
      case "christian":
        ret += "Religion: christlich" + "<br/>";
        break;
      case "hindu":
        ret += "Religion: hinduistisch" + "<br/>";
        break;
      case "IglesiaNiCristo":
        ret += "Religion: IglesiaNiCristo" + "<br/>";
        break;
      case "jain":
        ret += "Religion: jain" + "<br/>";
        break;
      case "jewish":
        ret += "Religion: jüdisch" + "<br/>";
        break;
      case "multifaith":
        ret += "Religion: pluralistisch" + "<br/>";
        break;
      case "muslim":
        ret += "Religion: muslimisch" + "<br/>";
        type += "Moschee" + "<br/>";
        break;
      case "pagan":
        ret += "Religion: heidnisch" + "<br/>";
        break;
      case "pastafarian":
        ret += "Religion: pastafarisch" + "<br/>";
        break;
      case "scientologist":
        ret += "Religion: scientologisch" + "<br/>";
        break;
      case "shinto":
        ret += "Religion: schintoistisch" + "<br/>";
        break;
      case "sikh":
        ret += "Religion: sikh" + "<br/>";
        break;
      case "spiritualist":
        ret += "Religion: spiritistisch" + "<br/>";
        break;
      case "taoist":
        ret += "Religion: taoistisch" + "<br/>";
        break;
      case "unitarian":
        ret += "Religion: unitarian" + "<br/>";
        break;
      case "yazidi":
        ret += "Religion: yazidi" + "<br/>";
        break;
      case "zoroastrian":
        ret += "Religion: zoroastrisch" + "<br/>";
        break;
      default:
        ret += "Religion: unbekannt" + "<br/>";
    }
  }
  if (attr.denomination) {
    switch (attr.denomination) {
      case "anglican":
        ret += "Konfession: Anglikanische Gemeinschaft" + "<br/>" + "<br/>";
        break;
      case "baptist":
        ret += "Konfession: Baptisten" + "<br/>";
        break;
      case "catholic":
        ret += "Konfession: Katholische Kirche, ohne genauere Spezifizierung" + "<br/>";
        break;
      case "roman_catholic":
        ret += "Konfession: Römisch-Katholische Kirche" + "<br/>";
        break;
      case "old_catholic":
        ret += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)" + "<br/>";
        break;
      case "greek_catholic":
        ret += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung für die mit Rom unierten Ostkirchen des byzantinischen Ritus" + "<br/>";
        break;
      case "evangelical":
        ret += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche" + "<br/>";
        break;
      case "jehovahs_witness":
        ret += "Konfession: Zeugen Jehovas" + "<br/>";
        break;
      case "lutheran":
        ret += "Konfession: Lutheraner, evangelisch-lutherisch" + "<br/>";
        break;
      case "mennonite":
        ret += "Konfession: Mennoniten" + "<br/>";
        break;
      case "messianic_jewish":
        ret += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe." + "<br/>";
        break;
      case "methodist":
        ret += "Konfession: Methodist Church (engl. Methodism)" + "<br/>";
        break;
      case "mormon":
        ret += "Konfession: Mormonen" + "<br/>";
        break;
      case "new_apostolic":
        ret += "Konfession: Neuapostolische Kirche" + "<br/>";
        break;
      case "orthodox":
        ret += "Konfession: Orthodox, ohne genauere Spezifizierung" + "<br/>";
        break;
      case "greek_orthodox":
        ret += "Konfession: Griechisch-Orthodox" + "<br/>";
        break;
      case "coptic_orthodox":
        ret += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche Ägyptens." + "<br/>";
        break;
      case "pentecostal":
        ret += "Konfession: Pfingstbewegung" + "<br/>";
        break;
      case "presbyterian":
        ret += "Konfession: Presbyterianische Kirchen" + "<br/>";
        break;
      case "protestant":
        ret += "Konfession: Evangelische Kirchen" + "<br/>";
        break;
      case "quaker":
        ret += "Konfession: Quäker" + "<br/>";
        break;
      case "reformed":
        ret += "Konfession: Evangelisch-reformierte" + "<br/>";
        break;
      case "russian_orthodox":
        ret += "Konfession: Russisch-Orthodox" + "<br/>";
        break;
      case "seventh_day_adventist":
        ret += "Konfession: Siebenten-Tags-Adventisten" + "<br/>";
        break;
      case "christian_community":
        ret += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbständige Kultusgemeinschaft versteht." + "<br/>";
        break;
      case "adventist":
        ret += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten." + "<br/>";
        break;
      case "alliance":
        ret += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity." + "<br/>";
        break;
      case "assemblies_of_god":
        ret += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination." + "<br/>";
        break;
      case "apostolic":
        ret += "Konfession: Apostolische Kirche" + "<br/>";
        break;
      case "armenian_apostolic":
        ret += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche." + "<br/>";
        break;
      case "assyrian":
        ret += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und völlig eigenständige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon." + "<br/>";
        break;
      case "christ_scientist":
        ret += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor." + "<br/>";
        break;
      case "church_of_scotland":
        ret += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch „the Kirk“ genannt." + "<br/>";
        break;
      case "czechoslovak_hussite":
        ret += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der Römisch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei" + "<br/>";
        break;
      case "dutch_reformed":
        ret += "Konfession: Niederländisch-reformierte Kirche, (einschließlich NGK und ähnliche Kirchen in Südafrika)" + "<br/>";
        break;
      case "exclusive_brethren":
        ret += "Konfession: Exclusive Brethren" + "<br/>";
        break;
      case "foursquare":
        ret += "Konfession: International Church of the Foursquare Gospel" + "<br/>";
        break;
      case "kimbanguist":
        ret += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabhängige, christliche Kirche." + "<br/>";
        break;
      case "living_waters_church":
        ret += "Konfession: Living Waters Christian Church" + "<br/>";
        break;
      case "mariavite":
        ret += "Konfession: Mariavitismus" + "<br/>";
        break;
      case "maronite":
        ret += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den römischen Papst als Oberhaupt anerkennt." + "<br/>";
        break;
      case "moravian":
        ret += "Konfession: Herrnhuter Brüdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Brüder-Unität, engl. Moravian Church) ist eine aus der böhmischen Reformation herkommende überkonfessionell-christliche Glaubensbewegung." + "<br/>";
        break;
      case "nazarene":
        ret += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition." + "<br/>";
        break;
      case "nondenominational":
        ret += "Konfession: Nondenominational Christianity" + "<br/>";
        break;
      case "old_believers":
        ret += "Konfession: Altorthodoxe, (häufiger Altgläubige) ist eine Sammelbezeichnung für religiöse Strömungen und Gruppen innerhalb der russisch-orthodoxen Tradition." + "<br/>";
        break;
      case "polish_catholic":
        ret += "Konfession: Polnisch-Katholische Kirche" + "<br/>";
        break;
      case "salvation_army":
        ret += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgeprägter sozialer Tätigkeit." + "<br/>";
        break;
      case "santo_daime":
        ret += "Konfession: Santo Daime, ist einer synkretistischen religiöse Bewegung aus Brasilien." + "<br/>";
        break;
      case "serbian_orthodox":
        ret += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen." + "<br/>";
        break;
      case "spiritism":
        ret += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec" + "<br/>";
        break;
      case "united":
        ret += "Konfession: United Church of Canada, ist die zweitgrößte Kirche in Kanada." + "<br/>";
        break;
      case "united_church_of_christ":
        ret += "Konfession: United Church of Christ, ist eine Kirche in den USA." + "<br/>";
        break;
      case "united_free_church_of_scotland":
        ret += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland." + "<br/>";
        break;
      case "united_methodist":
        ret += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition." + "<br/>";
        break;
      case "united_reformed":
        ret += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Großbritannien." + "<br/>";
        break;
      case "uniting":
        ret += "Konfession: Uniting Church in Australia (UCA) ist die drittgrößte christliche Denomination in Australien." + "<br/>";
        break;
      case "church_of_sweden":
        ret += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens." + "<br/>";
        break;
      case "mission_covenant_church_of_sweden":
        ret += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden." + "<br/>";
        break;
      case "alternative":
        ret += "Konfession: alternative" + "<br/>";
        break;
      case "ashkenazi":
        ret += "Konfession: ashkenazi" + "<br/>";
        break;
      case "buchari":
        ret += "Konfession: buchari" + "<br/>";
        break;
      case "conservative":
        ret += "Konfession: conservative" + "<br/>";
        break;
      case "egalitarian":
        ret += "Konfession: egalitarian" + "<br/>";
        break;
      case "hasidic":
        ret += "Konfession: hasidic" + "<br/>";
        break;
      case "humanistic":
        ret += "Konfession: humanistic" + "<br/>";
        break;
      case "kabbalah":
        ret += "Konfession: kabbalah" + "<br/>";
        break;
      case "kabbalistic":
        ret += "Konfession: kabbalistic" + "<br/>";
        break;
      case "karaite":
        ret += "Konfession: karaite" + "<br/>";
        break;
      case "liberal":
        ret += "Konfession: liberal" + "<br/>";
        break;
      case "lubavitch":
        ret += "Konfession: lubavitch" + "<br/>";
        break;
      case "lubavitch_messianic":
        ret += "Konfession: lubavitch_messianic" + "<br/>";
        break;
      case "mizrachi_baghdadi":
        ret += "Konfession: mizrachi_baghdadi" + "<br/>";
        break;
      case "mizrachi_chida":
        ret += "Konfession: mizrachi_chida" + "<br/>";
        break;
      case "mizrachi_jerusalemite":
        ret += "Konfession: mizrachi_jerusalemite" + "<br/>";
        break;
      case "mizrachi_livorno":
        ret += "Konfession: mizrachi_livorno" + "<br/>";
        break;
      case "mizrachi_moroccan":
        ret += "Konfession: mizrachi_moroccan" + "<br/>";
        break;
      case "modern_orthodox":
        ret += "Konfession: modern_orthodox" + "<br/>";
        break;
      case "neo_orthodox":
        ret += "Konfession: neo_orthodox" + "<br/>";
        break;
      case "nondenominational":
        ret += "Konfession: nondenominational" + "<br/>";
        break;
      case "orthodox":
        ret += "Konfession: orthodox" + "<br/>";
        break;
      case "orthodox_ashkenaz":
        ret += "Konfession: orthodox_ashkenaz" + "<br/>";
        break;
      case "orthodox_sefard":
        ret += "Konfession: orthodox_sefard" + "<br/>";
        break;
      case "progressive":
        ret += "Konfession: progressive" + "<br/>";
        break;
      case "reconstructionist":
        ret += "Konfession: reconstructionist" + "<br/>";
        break;
      case "reform":
        ret += "Konfession: reform" + "<br/>";
        break;
      case "renewal":
        ret += "Konfession: renewal" + "<br/>";
        break;
      case "samaritan":
        ret += "Konfession: samaritan" + "<br/>";
        break;
      case "sefardi":
        ret += "Konfession: sefardi" + "<br/>";
        break;
      case "sefardi_amsterdam":
        ret += "Konfession: sefardi_amsterdam" + "<br/>";
        break;
      case "sefardi_london":
        ret += "Konfession: sefardi_london" + "<br/>";
        break;
      case "traditional":
        ret += "Konfession: traditional" + "<br/>";
        break;
      case "ultra_orthodox":
        ret += "Konfession: ultra_orthodox" + "<br/>";
        break;
      case "unaffiliated":
        ret += "Konfession: unaffiliated" + "<br/>";
        break;
      case "yemenite":
        ret += "Konfession: yemenite" + "<br/>";
        break;
      case "yemenite_baladi":
        ret += "Konfession: yemenite_baladi" + "<br/>";
        break;
      case "yemenite_shami":
        ret += "Konfession: yemenite_shami" + "<br/>";
        break;
      case "ahmadiya":
        ret += "Konfession: ahmadiya" + "<br/>";
        break;
      case "alaouite":
        ret += "Konfession: alaouite" + "<br/>";
        break;
      case "druze":
        ret += "Konfession: druze" + "<br/>";
        break;
      case "ibadi":
        ret += "Konfession: ibadi" + "<br/>";
        break;
      case "ismaili":
        ret += "Konfession: ismaili" + "<br/>";
        break;
      case "shia":
        ret += "Konfession: shia" + "<br/>";
        break;
      case "sunni":
        ret += "Konfession: sunni" + "<br/>";
        break;
      case "nichiren":
        ret += "Konfession: nichiren" + "<br/>";
        break;
      case "jodo_shinshu":
        ret += "Konfession: jodo_shinshu" + "<br/>";
        break;
      case "jodo_shu":
        ret += "Konfession: jodo_shu" + "<br/>";
        break;
      case "vajrayana":
        ret += "Konfession: vajrayana" + "<br/>";
        break;
      case "shingon_shu":
        ret += "Konfession: shingon_shu" + "<br/>";
        break;
      case "zen":
        ret += "Konfession: zen" + "<br/>";
        break;
      case "thai_mahanikaya":
        ret += "Konfession: thai_mahanikaya" + "<br/>";
        break;
      case "thai_thammayut":
        ret += "Konfession: thai_thammayut" + "<br/>";
        break;
      case "asatru":
        ret += "Konfession: asatru" + "<br/>";
        break;
      case "celtic":
        ret += "Konfession: celtic" + "<br/>";
        break;
      case "greco-roman":
        ret += "Konfession: greco-roman" + "<br/>";
        break;
      case "wicca":
        ret += "Konfession: wicca" + "<br/>";
        break;
      case "irani":
        ret += "Konfession: irani" + "<br/>";
        break;
      case "parsi":
        ret += "Konfession: parsi" + "<br/>";
        break;
      default:
        ret += "unbekannt" + "<br/>";
    }
  }
  if (attr.community) {
    switch (attr.community) {
      case "AA":
        ret += "Ordensgemeinschaft (AA): Augustinians of the Assumption " + "<br/>";
        break;
      case "BSCM":
        ret += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre " + "<br/>";
        break;
      case "CBMV":
        ret += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V." + "<br/>";
        break;
      case "CO":
        ret += "Ordensgemeinschaft (CO): Oratorians" + "<br/>";
        break;
      case "CMC":
        ret += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix" + "<br/>";
        break;
      case "CRSP":
        ret += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)" + "<br/>";
        break;
      case "CSJ":
        ret += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph" + "<br/>";
        break;
      case "CSSP":
        ret += "Ordensgemeinschaft (CSSP): Congrégation du Saint-Esprit" + "<br/>";
        break;
      case "CSSR":
        ret += "Ordensgemeinschaft (CSSR): Congrégation du Très Saint Rédempteur" + "<br/>";
        break;
      case "FCJM":
        ret += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary" + "<br/>";
        break;
      case "FMGB":
        ret += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Gesù Bambino" + "<br/>";
        break;
      case "FMH":
        ret += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto" + "<br/>";
        break;
      case "FMM":
        ret += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie" + "<br/>";
        break;
      case "FSC":
        ret += "Ordensgemeinschaft (FSC): Frères des Écoles chrétiennes" + "<br/>";
        break;
      case "MCCI":
        ret += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacré-Cœur" + "<br/>";
        break;
      case "MSFS":
        ret += "Ordensgemeinschaft (MSFS): Missionnaires de Saint François de Sales" + "<br/>";
        break;
      case "OCart":
        ret += "Ordensgemeinschaft (OCart): Order of the Carthusians" + "<br/>";
        break;
      case "OCC":
        ret += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel" + "<br/>";
        break;
      case "OCD":
        ret += "Ordensgemeinschaft (OCD): Ordre des Carmes déchaux" + "<br/>";
        break;
      case "OCSO":
        ret += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)" + "<br/>";
        break;
      case "OFM":
        ret += "Ordensgemeinschaft (OFM): Ordre des Frères Mineurs (Franziskaner)" + "<br/>";
        break;
      case "OFMCap":
        ret += "Ordensgemeinschaft (OFMCap): Ordre des Frères Mineurs Capucins" + "<br/>";
        break;
      case "OFMConv":
        ret += "Ordensgemeinschaft (OFMConv): Ordre des Frères Mineurs Conventuels" + "<br/>";
        break;
      case "OFS":
        ret += "Ordensgemeinschaft (OFS): Franciscans secular Third Order" + "<br/>";
        break;
      case "OMI":
        ret += "Ordensgemeinschaft (OMI): Oblats de Marie" + "<br/>";
        break;
      case "OP":
        ret += "Ordensgemeinschaft (OP): Ordre des Frères Prêcheurs" + "<br/>";
        break;
      case "OPraem":
        ret += "Ordensgemeinschaft (OPraem): Ordre des chanoines réguliers de Prémontré" + "<br/>";
        break;
      case "OSB":
        ret += "Ordensgemeinschaft (OSB): Order of Saint Benedict" + "<br/>";
        break;
      case "OSC":
        ret += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames" + "<br/>";
        break;
      case "OSSS":
        ret += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte" + "<br/>";
        break;
      case "OVM":
        ret += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)" + "<br/>";
        break;
      case "PSDP":
        ret += "Ordensgemeinschaft (PSDP): Petites sœurs des pauvres (Kleinen Schwestern der Armen)" + "<br/>";
        break;
      case "PFJ":
        ret += "Ordensgemeinschaft (PFJ): Petits Frères de Jésus" + "<br/>";
        break;
      case "SDB":
        ret += "Ordensgemeinschaft (SDB): Société de Saint François de Sales" + "<br/>";
        break;
      case "SJ":
        ret += "Ordensgemeinschaft (SJ): Compagnie de Jésus" + "<br/>";
        break;
      case "SOC":
        ret += "Ordensgemeinschaft (SOC): Order of Cistercians" + "<br/>";
        break;
      case "SSCC":
        ret += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary" + "<br/>";
        break;
      case "SSF":
        ret += "Ordensgemeinschaft (SSF): Society of St Francis" + "<br/>";
        break;
      case "SSJE":
        ret += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist" + "<br/>";
        break;
      case "SSpS":
        ret += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern" + "<br/>";
        break;
      case "TOR":
        ret += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco" + "<br/>";
        break;
      default:
        ret += "unbekannt" + "<br/>";
    }
  }
  return ret;
}
var fnTestInfoPopup = exports.fnTestInfoPopup = function fnTestInfoPopup(feature) {
  var attr = feature.getProperties();
  var r = "";
  for (var key in attr) {
    var value = attr[key];
    r = r + key + "=" + value + "<br/>";
  }
  r = '<div class="c4g_popup_text" style="width:300px;">' + r + "</div>";
  return r;
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fnTestInfoPopup = exports.fnStandardInfoPopup = exports.fnReducedInfoPopup = exports.fnMessstation = exports.fnContentTourism = exports.fnContentStreetsTraffic = exports.fnContentStorage = exports.fnContentSports = exports.fnContentShipping = exports.fnContentRoute = exports.fnContentProtectedArea = exports.fnContentPetrol = exports.fnContentNatural = exports.fnContentLanduse = exports.fnContentInformationCity = exports.fnContentHydrants = exports.fnContentHistoric = exports.fnContentHealthcare = exports.fnContentGeneralInformations = exports.fnContentEmergency = exports.fnContentCuisine = exports.fnContentBarriers = exports.fnContentAmenity = exports.fnContentAerodrome = exports.fnContent = void 0;
function trim(zeichenkette) {
  return zeichenkette.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}
function translate(value) {
  var val = trim(value);
  if (val === "yes") return "yes";
  if (val === "Yes") return "yes";
  if (val === "no") return "no";
  if (val === "No") return "no";
  if (val === "limited") return "limited";
  if (val === "designated") return "designated";
  if (val === "wood") return "wood";
  if (val === "metal") return "metal";
  if (val === "concrete") return "concrete";
  if (val === "plastic") return "plastic";
  if (val === "stone") return "stone";
  if (val === "steel") return "steel";
  if (val === "brick") return "brick";
  if (val === "reinforced_concrete") return "reinforced_concrete";
  if (val === "masonry") return "masonry";
  return value;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(feature, imageSrc) {
  var attr = feature.getProperties();
  var result = "";
  result += fnHeader(attr, imageSrc);
  result += fnContent(attr);
  var id = feature.get("osm_type") ? feature.get("osm_type") + "/" + feature.getId() : feature.getId();
  result += fnFooter(attr, id);
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
};
var fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(feature, style) {
  var attr = feature.getProperties();
  var icon;
  var result = "";
  var reduce = false;
  var imageSrc;
  if (typeof style === "function") {
    imageSrc = style.call(feature)[0].getImage().getSrc();
  } else {
    imageSrc = style.getImage().getSrc();
  }
  if (attr.amenity === "restaurant" || attr.amenity === "pub" || attr.amenity === "biergarten") var reduce = true;
  if (attr.tourism === "hotel") var reduce = true;
  if (attr.tourism === "guest_house") var reduce = true;
  if (attr.tourism === "chalet") var reduce = true;
  if (attr.tourism === "hostel") var reduce = true;
  if (attr.tourism === "alpine_hut") var reduce = true;
  if (attr.tourism === "artwork" || attr.amenity === "artwork") var reduce = true;
  if (attr.tourism === "museum" || attr.amenity === "museum") var reduce = true;
  if (attr.amenity === "cinema") var reduce = true;
  if (attr.amenity === "theatre") var reduce = true;
  if (attr.amenity === "attraction" || attr.amenity === "fountain" || attr.historic === "monument" || attr.historic === "city_gate" || attr.historic === "ruins" || attr.historic === "castle" || attr.tourism === "attraction") var reduce = true;
  if (attr.leisure === "playground") var reduce = true;
  if (attr.aerialway) var reduce = true;
  if (attr.amenity === "swimming_pool" || attr.leisure === "swimming_pool" || attr.sport === "swimming") var reduce = true;
  if (attr.railway === "station") var reduce = true;
  if (attr.sport === "swimming") var reduce = true;
  if (attr.leisure === "swimming_pool") var reduce = true;
  if (attr.amenity === "swimming_pool") var reduce = true;
  if (attr.leisure === "waterpark") var reduce = true;
  if (attr.water_park) var reduce = true;
  if (attr.leisure === "sports_centre") var reduce = true;
  switch (reduce) {
    case false:
      result += fnHeader(attr, imageSrc);
      result += fnContent(attr);
      var id = feature.get("osm_type") ? feature.get("osm_type") + "/" + feature.getId() : feature.getId();
      result += fnFooter(attr, id);
      break;
    case true:
      result += fnHeader(attr, imageSrc);
      break;
  }
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
};
function fnHeader(attr, icon) {
  var header = "";
  var icon_width = "32px";
  if (attr.name || attr["piste:name"] || attr["xmas:name"] || attr["xmas:location"]) {
    if (attr.name) var featurename = attr.name;
    if (attr["piste:name"]) var featurename = attr["piste:name"];
    if (attr["xmas:name"]) var featurename = attr["xmas:name"];
    if (attr["xmas:location"]) var featurename = attr["xmas:location"];
    if (icon) {
      featurename = '<img src="' + icon + '" width="' + icon_width + '" name="' + featurename + '" alt="' + featurename + '"><div class="c4g_popup_header_featurename">' + featurename + "</div>";
    } else {
      featurename = '<name="' + featurename + '" alt="' + featurename + '"><div class="c4g_popup_header_featurename">' + featurename + "</div>";
    }
    header += featurename;
  } else {
    if (icon) header += '<img src="' + icon + '" width="' + icon_width + '" name="' + icon + '" alt="' + icon + '">';
  }
  header += fnGetTranslate_Type(attr);
  header = '<div class="c4g_popup_header">' + header + "</div>";
  return header;
}
function fnFooter(attr, id) {
  var footer = "";
  var plz = "";
  var umbruch = false;
  if (attr["addr:housename"]) {
    footer += "housename: " + attr["addr:housename"] + "<br/>";
    umbruch = true;
  }
  if (attr["addr:floor"]) {
    footer += "floor: " + attr["addr:floor"] + "<br/>";
    umbruch = true;
  } else if (attr["addr:level"]) {
    footer += "level: " + attr["addr:level"] + "<br/>";
    umbruch = true;
  }
  if (attr["addr:street"]) {
    footer += attr["addr:street"];
    if (attr["addr:housenumber"]) {
      footer += " " + attr["addr:housenumber"] + "<br/>";
    } else {
      footer += "<br/>";
    }
    umbruch = true;
  }
  if (attr["addr:postcode"]) {
    footer += attr["addr:postcode"] + " ";
  }
  if (attr["addr:city"]) {
    footer += attr["addr:city"] + "<br/>";
    umbruch = true;
  }
  if (attr.sqkm) {
    attr.sqkm = "" + attr.sqkm;
    if (attr.sqkm.length > 3) {
      var mod = attr.sqkm.length % 3;
      var output = mod > 0 ? attr.sqkm.substring(0, mod) : "";
      for (i = 0; i < Math.floor(attr.sqkm.length / 3); i++) {
        if (mod === 0 && i === 0) output += attr.sqkm.substring(mod + 3 * i, mod + 3 * i + 3);else output += "." + attr.sqkm.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      footer += "area: " + output + " Km²" + "<br/>";
    } else footer += "area " + attr["sqkm"] + "<br/>";
  }
  if (attr["contact:phone"]) {
    if (isMobile()) {
      footer += "phone: " + '<a href="tel:' + attr["contact:phone"] + '">' + attr["contact:phone"] + "</a><br/>";
      umbruch = true;
    } else {
      footer += "phone: " + '<a href="callto:' + attr["contact:phone"] + '">' + attr["contact:phone"] + "</a><br/>";
      umbruch = true;
    }
  }
  if (attr.phone) {
    if (isMobile()) {
      footer += "phone: " + '<a href="tel:' + attr.phone + '">' + attr.phone + "</a><br/>";
      umbruch = true;
    } else {
      footer += "phone: " + '<a href="callto:' + attr.phone + '">' + attr.phone + "</a><br/>";
      umbruch = true;
    }
  }
  if (attr["contact:fax"]) {
    footer += "fax: " + attr["contact:fax"] + "<br/>";
    umbruch = true;
  } else if (attr.fax) {
    footer += "fax: " + attr.fax + "<br/>";
    umbruch = true;
  }
  if (attr["contact:email"]) {
    footer += "email: " + '<a href="mailto:' + attr["contact:email"] + '">' + attr["contact:email"] + "</a><br/>";
    umbruch = true;
  } else if (attr.email) {
    footer += "email: " + '<a href="mailto:' + attr.email + '">' + attr.email + "</a><br/>";
    umbruch = true;
  }
  if (umbruch) footer += "<br/>";
  if (attr.opening_hours) {
    var open = attr.opening_hours;
    var open_idx = 0;
    while (open_idx === 0 || open.indexOf(";") > 0) {
      if (open_idx > 0) {
        open = open.replace(";", "<br/>");
      }
      open_idx++;
    }
    footer += "opening hours: " + '<br/><div class="c4g_open_text">' + open + "</div>";
    if (open.indexOf("PH") > 0) {
      footer += "(PH = public holiday)<br/>";
    } else {
      footer += "<br/>";
    }
  }
  if (attr["xmas:opening_hours"]) {
    var open = attr["xmas:opening_hours"];
    var open_idx = 0;
    while (open_idx === 0 || open.indexOf(";") > 0) {
      if (open_idx > 0) {
        open = open.replace(";", "<br/>");
      }
      open_idx++;
    }
    footer += "opening hours: " + '<br/><div class="c4g_open_text">' + open + "</div>";
    if (open.indexOf("PH") > 0) {
      footer += "(PH = public holiday)<br/>";
    } else {
      footer += "<br/>";
    }
  }
  if (attr["xmas:url"]) {
    var str = "";
    str = attr["xmas:url"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'website: <a href="' + str + '" target="_blank">website link</a><br/>';
  }
  if (attr["contact:website"]) {
    var str = "";
    str = attr["contact:website"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'website: <a href="' + str + '" target="_blank">website link</a><br/>';
  } else if (attr.website) {
    var str = "";
    str = attr.website;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'website: <a href="' + str + '" target="_blank">website link</a><br/>';
  }
  if (attr.wikipedia) {
    var str = "";
    str = attr.wikipedia;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "https://wikipedia.org/wiki/" + str;
    }
    footer += 'Wikipedia: <a href="' + str + '" target="_blank">Wikipedia link</a><br/>';
  }
  if (attr.wikimedia_commons) {
    var str = "";
    str = attr.wikimedia_commons;
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "https://commons.wikimedia.org/wiki/" + str;
    }
    footer += 'Wikimedia: <a href="' + str + '" target="_blank">Wikimedia link</a><br/>';
  }
  if (attr["contact:webcam"]) {
    var str = "";
    str = attr["contact:webcam"];
    trim(str);
    if (str.indexOf("https://", 0) === -1) {
      if (str.indexOf("http://", 0) === -1) str = "http://" + str;
    }
    footer += 'webcam: <a href="' + str + '" target="_blank">webcam link</a><br/>';
  }
  if (attr.image) footer += '<img src="' + attr.image + '" width="200px" name="' + attr.name + '" alt="' + attr.name + '"><br/>';
  var internet_access = "";
  if (attr.internet_access) {
    internet_access += "internet access: " + translate(attr.internet_access) + "<br/>";
  }
  if (attr["internet_access:fee"]) {
    internet_access += "fee: " + translate(attr["internet_access:fee"]) + "<br/>";
  }
  if (attr["wifi_access:operator"]) {
    internet_access += "wifi operator: " + attr["wifi_access:operator"] + "<br/>";
  }
  if (attr["wifi_access:technology"]) {
    internet_access += "wifi technology: " + attr["wifi_access:technology"] + "<br/>";
  }
  if (attr["wifi_access:ssid"]) {
    internet_access += "wifi ssid: " + attr["wifi_access:ssid"] + "<br/>";
  }
  if (internet_access !== "") {
    footer += "internet access available" + '<br/><div class="c4g_shop_internet_access">' + internet_access + "</div><br/>";
  }
  if (attr.wheelchair) footer += "wheelchair: " + translate(attr.wheelchair) + "<br/>";
  if (attr["wheelchair:description"]) footer += "description: " + attr["wheelchair:description"] + "<br/>";
  if (attr["wheelchair:entrance_width"]) footer += "entrance width (cm): " + attr["wheelchair:entrance_width"] + "<br/>";
  if (attr["wheelchair:step_height"]) footer += "step height (cm): " + attr["wheelchair:step_height"] + "<br/>";
  if (attr["wheelchair:rooms"]) footer += "rooms: " + attr["wheelchair:rooms"] + "<br/>";
  if (attr["wheelchair:places"]) footer += "places: " + attr["wheelchair:places"] + "<br/>";
  if (attr["cent:places"]) footer += "places: " + attr["wheelchair:places"] + "<br/>";
  if (attr["ramp:wheelchair"]) footer += "ramp: " + attr["ramp:wheelchair"] + "<br/>";
  if (attr["capacity:disabled"]) footer += "capacity parking: " + translate(attr["capacity:disabled"]) + "<br/>";
  if (attr["toilets:wheelchair"]) footer += "toilets: " + translate(attr["toilets:wheelchair"]) + "<br/>";
  if (attr.centralkey) footer += "centralkey: " + attr.centralkey + "<br/>";
  if (attr.note) footer += attr.note + "<br/>";
  if (attr.description) footer += attr.description + "<br/>";
  if (attr.operator) footer += "operator: " + attr.operator + "<br/>";
  if (attr.ref) footer += "reference: " + attr.ref + "<br/>";
  if (attr.lit === "yes") footer += "This object is illuimanted." + "<br/>";
  if (attr.shop) {
    var shopstr = "";
    if (attr.brand) shopstr += "brand: " + attr.brand + "<br/>";
    if (attr.sells) shopstr += "sells: " + attr.sells + "<br/>";
    if (attr.origin) shopstr += "source market: " + attr.origin + "<br/>";
    if (attr.wholesale === "yes") shopstr += "distributor: yes" + "<br/>";
    if (shopstr !== "") footer += "further particulars: " + '<br/><div class="c4g_shop_text">' + shopstr + "</div><br/>";
  }
  if (id) {
    var str = id;
    trim(str);
    str = str.replace(/\./, "/");
    str = "http://www.openstreetmap.org/" + str;
    footer += "<br/>";
    footer += 'OSM:    <a href="' + str + '" target="_blank">OpenStreetMap link</a><br/>';
  }
  footer = '<div class="c4g_popup_footer">' + footer + "</div>";
  return footer;
}
function fnGetTranslate_Type(attr) {
  var type = "";
  if (attr.amenity === "doctors" || attr.healthcare === "doctor") type += "doctor<br/>";
  if (attr.amenity === "hospital" || attr.amenity === "clinic" || attr.healthcare === "hospital" || attr.healthcare === "clinic") {
    if (attr.emergency === "yes") type += "hospital with emergency facilities" + "<br/>";else type += "hospital" + "<br/>";
  }
  if (attr.amenity === "dentist") type += "dentist" + "<br/>";
  if (attr.amenity === "pharmacy" || attr["health_facility:type"] === "pharmacy") type += "pharmacy" + "<br/>";
  if (attr.healthcare === "physiotherapist" || attr["health_speciality:physiotherapy"] === "yes") type += "physiotherapist" + "<br/>";
  if (attr.healthcare === "occupational_therapist" || attr["health_speciality:occupational_therapy"] === "yes" || attr["health_specialty:occupational_therapy"] === "yes") type += "occupational_therapist" + "<br/>";
  if (attr.healthcare === "psychotherapist" || attr["health_speciality:psychotherapy"] === "yes") type += "psychotherapist" + "<br/>";
  if (attr.healthcare === "alternative") type += "alternative" + "<br/>";
  if (attr.healthcare === "midwife") type += "midwife" + "<br/>";
  if (attr.healthcare === "speech_therapist" || attr["health_speciality:speech_therapy"] === "yes") type += "speech_therapist" + "<br/>";
  if (attr["health_speciality:music_therapy"] === "yes") type += "music_therapy" + "<br/>";
  if (attr.amenity === "veterinary") type += "veterinary" + "<br/>";
  if (attr.amenity === "fire_station") type += "fire station" + "<br/>";
  if (attr.emergency === "fire_extinguisher") type += "fire extinguisher" + "<br/>";
  if (attr.emergency === "aed") type += "aed" + "<br/>";
  if (attr.emergency === "defibrillator") type += "defibrillator" + "<br/>";
  if (attr.emergency === "phone") type += "call box" + "<br/>";
  if (attr.amenity === "police") type += "police" + "<br/>";
  if (attr.emergency === "ambulance_station") type += "ambulance station" + "<br/>";
  if (attr.emergency_service === "technical") type += "technical" + "<br/>";
  if (attr.emergency_service === "water") type += "water" + "<br/>";
  if (attr.waterway === "baywatch") type += "baywatch" + "<br/>";
  if (attr.emergency_service === "air") type += "rescue helicopter" + "<br/>";
  if (attr.highway === "emergency_access_point") type += "emergency access point" + "<br/>";
  if (attr.amenity === "lifeboat_station" || attr.emergency === "lifeboat_station") type += "lifeboat station" + "<br/>";
  if (attr.emergency === "life_ring") type += "life ring" + "<br/>";
  if (attr.emergency === "siren") type += "siren" + "<br/>";
  if (attr.amenity === "life_ring") type += "life ring" + "<br/>";
  if (attr.amenity === "rescue_station") type += "rescue station" + "<br/>";
  if (attr.emergency === "fire_hydrant") {
    if (attr["fire_hydrant:type"] === "underground") type += "underground hydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "pillar") type += "pillar hydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "wall") type += "wall hydrant" + "<br/>";else if (attr["fire_hydrant:type"] === "pond") type += "suction point" + "<br/>";
  }
  if (attr.emergency === "suction_point") type += "suction point" + "<br/>";
  if (attr.emergency === "fire_water_pond") type += "fire protection pond" + "<br/>";
  if (attr.emergency_service === "mountain") type += "mountain rescue service" + "<br/>";
  if (attr.emergency === "water_tank") type += "fire water tank" + "<br/>";
  if (attr.recycling_type === "container") type += "Recycling container" + "<br/>";
  if (attr.amenity === "recycling" && attr["recycling:excrement"] === "yes" || attr["seamark:small_craft_facility:category"] === "pump-out") type += "suction station" + "<br/>";else if (attr.amenity === "recycling") type += " buyback centre" + "<br/>";
  if (attr["diet:pescetarian"] === "yes") type += "pescetarian available" + "<br/>";else if (attr["diet:pescetarian"] === "only") type += "just pescetarian" + "<br/>";
  if (attr["diet:vegetarian"] === "yes") type += "vegetarian vorhanden" + "<br/>";else if (attr["diet:vegetarian"] === "only") type += "just vegetarian" + "<br/>";
  if (attr["diet:lacto_vegetarian"] === "yes") type += "lacto_vegetarian available" + "<br/>";else if (attr["diet:lacto_vegetarian"] === "only") type += "just lacto vegetarian" + "<br/>";
  if (attr["diet:ovo_vegetarian"] === "yes") type += "ovo vegetarian available" + "<br/>";else if (attr["diet:ovo_vegetarian"] === "only") type += "just ovo_vegetarian" + "<br/>";
  if (attr["diet:vegan"] === "yes") type += "vegan available" + "<br/>";else if (attr["diet:vegan"] === "only") type += "just vegan" + "<br/>";
  if (attr["diet:fruitarian"] === "yes") type += "fruitarian available" + "<br/>";else if (attr["diet:fruitarian"] === "only") type += "hust fruitarian" + "<br/>";
  if (attr["diet:raw"] === "yes") type += "raw availaibe" + "<br/>";else if (attr["diet:raw"] === "only") type += "just raw" + "<br/>";
  if (attr["diet:gluten_free"] === "yes") type += "gluten free available" + "<br/>";else if (attr["diet:gluten_free"] === "only") type += "just gluten free" + "<br/>";
  if (attr["diet:dairy_free"] === "yes") type += "dairy free available" + "<br/>";else if (attr["diet:dairy_free"] === "only") type += "just dairy free" + "<br/>";
  if (attr["diet:lactose_free"] === "yes") type += "lactose free available" + "<br/>";else if (attr["diet:lactose_free"] === "only") type += "just lactose free" + "<br/>";
  if (attr["diet:halal"] === "yes") type += "halal available" + "<br/>";else if (attr["diet:halal"] === "only") type += "just halal" + "<br/>";
  if (attr["diet:kosher"] === "yes") type += "kosher available" + "<br/>";else if (attr["diet:kosher"] === "only") type += "just kosher" + "<br/>";
  if (attr.amenity === "pub") type += "pub" + "<br/>";
  if (attr.amenity === "bar") type += "bar" + "<br/>";
  if (attr.frozen_yogurt === "yes") type += "frozen yogurt" + "<br/>";
  if (attr.slush_ice === "yes") type += "slush ice" + "<br/>";
  if (attr.cake === "yes") type += "cake" + "<br/>";
  if (attr.coffee === "yes") type += "coffee" + "<br/>";
  if (attr.drinks === "yes") type += "drinks" + "<br/>";
  if (attr.amenity === "biergarten") type += "biergarten" + "<br/>";
  if (attr.amenity === "restaurant") type += "restaurant" + "<br/>";
  if (attr.amenity === "fast_food") type += "fast food" + "<br/>";
  if ((attr.amenity === "cafe" || attr.amenity === "coffee_shop") && attr.cuisine !== "ice_cream") type += "cafe" + "<br/>";
  if (attr.amenity === "cafe" && attr.cuisine === "ice_cream" || attr.amenity === "ice_cream") type += "ice cream" + "<br/>";
  if (attr.tourism === "alpine_hut") type += "alpine hut" + "<br/>";
  if (attr.tourism === "aquarium") type += "aquarium" + "<br/>";
  if (attr.tourism === "apartment") type += "apartment" + "<br/>";
  if (attr.tourism === "attraction") type += "attraction" + "<br/>";
  if (attr.tourism === "artwork") type += "artwork" + "<br/>";
  if (attr.tourism === "camp_site") type += "camp site" + "<br/>";
  if (attr.tourism === "caravan_site") type += "caravan site" + "<br/>";
  if (attr.tourism === "chalet") type += "chalet" + "<br/>";
  if (attr.tourism === "gallery") type += "gallery" + "<br/>";
  if (attr.tourism === "guest_house") type += "guest house" + "<br/>";
  if (attr.tourism === "hostel") type += "hostel" + "<br/>";
  if (attr.tourism === "hotel") type += "hotel" + "<br/>";
  if (attr.tourism === "motel") type += "motel" + "<br/>";
  if (attr.tourism === "museum") type += "museum" + "<br/>";
  if (attr.tourism === "picnic_site") type += "picnic site" + "<br/>";
  if (attr.tourism === "theme_park") type += "theme park" + "<br/>";
  if (attr.tourism === "viewpoint") type += "viewpoint" + "<br/>";
  if (attr.tourism === "wilderness_hut") type += "wilderness_hut" + "<br/>";
  if (attr.tourism === "wine_cellar") type += "wine cellar" + "<br/>";
  if (attr.tourism === "zoo") {
    type += "zoo" + "<br/>";
    if (attr.zoo === "enclosure") {
      type += "enclosure" + "<br/>";
    }
    if (attr.zoo === "petting_zoo") {
      type += "petting zoo" + "<br/>";
    }
    if (attr.zoo === "falconry") {
      type += "falconry" + "<br/>";
    }
  }
  if (attr.tourism === "trail_riding_station") type += "trail riding station" + "<br/>";
  if (attr.club === "fishing") type += "fishing club" + "<br/>";
  if (attr.club === "sport" && attr.sport === "fishing") type += "fishing club" + "<br/>";
  if (attr.club === "amateur_radio") type += "amateur radio club" + "<br/>";
  if (attr.club === "art") type += "art club" + "<br/>";
  if (attr.club === "astronomy") type += "astronomy club" + "<br/>";
  if (attr.club === "automobile") type += "automobile club" + "<br/>";
  if (attr.club === "board_games") type += "board games club" + "<br/>";
  if (attr.club === "card_games") type += "card games club" + "<br/>";
  if (attr.club === "charity") type += "charity club" + "<br/>";
  if (attr.club === "chess") type += "chess club" + "<br/>";
  if (attr.club === "cinema") type += "cinema club" + "<br/>";
  if (attr.club === "cooking") type += "cooking club" + "<br/>";
  if (attr.club === "culture") type += "culture club" + "<br/>";
  if (attr.club === "doityourself") type += "doityourself club" + "<br/>";
  if (attr.club === "equestrian") type += "equestrian club" + "<br/>";
  if (attr.club === "ethnic") type += "ethnic club" + "<br/>";
  if (attr.club === "fan") type += "fan club" + "<br/>";
  if (attr.club === "freemasonry") type += "freemasonry club" + "<br/>";
  if (attr.club === "game") type += "game club" + "<br/>";
  if (attr.club === "history") type += "history club" + "<br/>";
  if (attr.club === "hunting") type += "hunting club" + "<br/>";
  if (attr.club === "linux") type += "linux club" + "<br/>";
  if (attr.club === "motorcycle") type += "motorcycle club" + "<br/>";
  if (attr.club === "music") type += "music club" + "<br/>";
  if (attr.club === "nature") type += "nature club" + "<br/>";
  if (attr.club === "nudism") type += "nudism club" + "<br/>";
  if (attr.club === "photography") type += "photography club" + "<br/>";
  if (attr.club === "politics") type += "politics club" + "<br/>";
  if (attr.club === "religion") type += "religion club" + "<br/>";
  if (attr.club === "scout") type += "scout club" + "<br/>";
  if (attr.club === "smoke") type += "smoke club" + "<br/>";
  if (attr.club === "sport") type += "sport club" + "<br/>";
  if (attr.club === "theatre") type += "theatre club" + "<br/>";
  if (attr.club === "veterans") type += "veterans club" + "<br/>";
  if (attr.leisure === "amusement_arcade") type += "penny arcade / gambling hall" + "<br/>";
  if (attr.leisure === "beach_resort") type += "beach resort" + "<br/>";
  if (attr.leisure === "bird_hide") type += "bird hide" + "<br/>";
  if (attr.leisure === "common") type += "common" + "<br/>";
  if (attr.leisure === "club") type += "club" + "<br/>";
  if (attr.leisure === "dance") type += "dance" + "<br/>";
  if (attr.leisure === "dog_park") type += "dog_park" + "<br/>";
  if (attr.leisure === "firepit") type += "firepit" + "<br/>";
  if (attr.leisure === "fishing") type += "fishing" + "<br/>";
  if (attr.leisure === "garden") type += "garden" + "<br/>";
  if (attr.leisure === "golf_course") type += "golf course" + "<br/>";
  if (attr.leisure === "hackerspace") type += "hackerspace" + "<br/>";
  if (attr.leisure === "horse_riding") type += "horse riding" + "<br/>";
  if (attr.leisure === "ice_rink") type += "ice rink" + "<br/>";
  if (attr.leisure === "nature_reserve") type += "nature reserve" + "<br/>";
  if (attr.leisure === "park") type += "park" + "<br/>";
  if (attr.leisure === "miniature_golf") type += "miniature golf" + "<br/>";
  if (attr.leisure === "pitch") type += "pitch" + "<br/>";
  if (attr.leisure === "pitch" && attr.building === "yes") type += "gym" + "<br/>";
  if (attr.leisure === "playground" && attr.building === "yes") type += "playground" + "<br/>";else if (attr.leisure === "playground") type += "playground" + "<br/>";
  if (attr.leisure === "social_club") type += "social club" + "<br/>";
  if (attr.leisure === "spa") type += "spa" + "<br/>";
  if (attr.leisure === "sports_centre") type += "sports centre" + "<br/>";
  if (attr.sport === "climbing_adventure") type += "climbing adventure" + "<br/>";
  if (attr.leisure === "stadium") type += "stadium" + "<br/>";
  if (attr.leisure === "swimming_pool") type += "swimming pool" + "<br/>";
  if (attr.leisure === "track") type += "track" + "<br/>";
  if (attr.leisure === "water_park") type += "water park" + "<br/>";
  if (attr.leisure === "wildlife_hide") type += "wildlife hide" + "<br/>";
  if (attr.leisure === "adult_gaming_centre") type += "adult gaming_centre" + "<br/>";
  if (attr.leisure === "bowling_alley" && attr.sport === "10pin") type += "10pin bowling_alley" + "<br/>";
  if (attr.leisure === "bowling_alley" && attr.sport === "9pin") type += "9pin bowling_alley" + "<br/>";
  if (attr.sport === "karting" || attr.sport === "motor") type += "karting" + "<br/>";
  if (attr.sport === "darts" || attr.sport === "dart") type += "Darts" + "<br/>";
  if (attr["piste:type"]) {
    switch (attr["piste:type"]) {
      case "skitour":
        type += "skitour" + "<br/>";
        break;
      case "downhill":
        type += "downhill" + "<br/>";
        break;
      case "sled":
        type += "sled" + "<br/>";
        break;
      case "nordic":
        type += "nordic" + "<br/>";
        break;
      case "hike":
        type += "hike" + "<br/>";
        break;
      case "snow_park":
        type += "snow park" + "<br/>";
        break;
    }
  }
  if (attr["sport"]) {
    switch (attr["sport"]) {
      case "surfing":
        type += "surfing" + "<br/>";
        break;
      case "kitesurfing":
        type += "kitesurfing" + "<br/>";
        break;
      case "water_ski":
        type += "water ski" + "<br/>";
        break;
    }
  }
  if (attr.aerialway) {
    switch (attr.aerialway) {
      case "cable_bar":
        type += "cable bar" + "<br/>";
        break;
      case "gondola":
        type += "gondola" + "<br/>";
        break;
      case "chair_lift":
        type += "chair lift" + "<br/>";
        break;
      case "mixed_lift":
        type += "mixed lift" + "<br/>";
        break;
      case "drag_lift":
        type += "drag lift" + "<br/>";
        break;
      case "t-bar":
        type += "t-bar" + "<br/>";
        break;
      case "t-bar":
        type += "t-bar" + "<br/>";
        break;
      case "platter":
        type += "platter" + "<br/>";
        break;
      case "rope_tow":
        type += "rope tow" + "<br/>";
        break;
      case "magic_carpet":
        type += "magic carpet" + "<br/>";
        break;
      default:
        type += "unknown";
    }
  }
  if (attr.building === "mosque") type += "mosque" + "<br/>";
  if (attr.building === "synagogue") type += "synagogue" + "<br/>";
  if (attr.building === "temple") type += "temple" + "<br/>";
  if (attr.building === "apartments") type += "apartments" + "<br/>";
  if (attr.building === "farm") type += "farm" + "<br/>";
  if (attr.building === "hotel") type += "hotel" + "<br/>";
  if (attr.building === "house") type += "house" + "<br/>";
  if (attr.building === "detached") type += "detached" + "<br/>";
  if (attr.building === "residential") type += "residential" + "<br/>";
  if (attr.building === "domitory" || attr.building === "residential plus") type += "domitory" + "<br/>";
  if (attr.building === "terrace") type += "terrace" + "<br/>";
  if (attr.building === "houseboat") type += "houseboat" + "<br/>";
  if (attr.building === "bungalow") type += "bungalow" + "<br/>";
  if (attr.building === "static_caravan") type += "static caravan" + "<br/>";
  if (attr.building === "commercial") type += "commercial" + "<br/>";
  if (attr.building === "retail") type += "retail" + "<br/>";
  if (attr.building === "warehouse") type += "warehouse" + "<br/>";
  if (attr.building === "bakehouse") type += "bakehouse" + "<br/>";
  if (attr.building === "shrine") type += "shrine" + "<br/>";
  if (attr.building === "civic") type += "civic" + "<br/>";
  if (attr.building === "stadium") type += "stadium" + "<br/>";
  if (attr.building === "train_station") type += "train station" + "<br/>";
  if (attr.building === "university") type += "university" + "<br/>";
  if (attr.building === "public") type += "public" + "<br/>";
  if (attr.building === "bridge") type += "bridge" + "<br/>";
  if (attr.building === "bunker") type += "bunker" + "<br/>";
  if (attr.building === "cabin") type += "cabin" + "<br/>";
  if (attr.building === "conservatory") type += "conservatory" + "<br/>";
  if (attr.building === "construction") type += "construction" + "<br/>";
  if (attr.building === "garage") type += "garage" + "<br/>";
  if (attr.building === "garages") type += "garages" + "<br/>";
  if (attr.building === "greenhouse") type += "greenhouse" + "<br/>";
  if (attr.building === "hangar") type += "hangar" + "<br/>";
  if (attr.building === "hut") type += "hut" + "<br/>";
  if (attr.building === "pavillion") type += "pavillion" + "<br/>";
  if (attr.building === "roof") type += "roof" + "<br/>";
  if (attr.building === "shed") type += "shed" + "<br/>";
  if (attr.building === "transformer_tower") type += "transformer tower" + "<br/>";
  if (attr.building === "service") type += "service" + "<br/>";
  if (attr.building === "kiosk") type += "kiosk" + "<br/>";
  if (attr.building === "carport") type += "carport" + "<br/>";
  if (attr.building === "ruins") type += "ruins" + "<br/>";
  if (attr.amenity === "gambling") type += "penny arcade" + "<br/>";
  if (attr.amenity === "library") type += "library" + "<br/>";
  if (attr.amenity === "fountain") type += "fountain" + "<br/>";
  if (attr.amenity === "attraction") type += "attraction" + "<br/>";
  if (attr.amenity === "social_centre" || attr.amenity === "club") type += "social centre" + "<br/>";
  if (attr.amenity === "townhall") type += "townhall" + "<br/>";
  if (attr.amenity === "bench") type += "bench" + "<br/>";
  if (attr.amenity === "grave_yard" || attr.landuse === "cemetery") type += "grave yard" + "<br/>";
  if (attr.amenity === "post_box") type += "post box" + "<br/>";
  if (attr.amenity === "post_office") type += "post office" + "<br/>";
  if (attr.amenity === "telephone") type += "telephone" + "<br/>";
  if (attr.amenity === "atm") type += "atm" + "<br/>";
  if (attr.amenity === "bank") type += "bank" + "<br/>";
  if (attr.amenity === "toilets" && attr.diaper === "yes") {
    type += "toilets with diaper changing table" + "<br/>";
  } else if (attr.amenity === "toilets") {
    type += "toilets" + "<br/>";
  }
  if (attr.amenity === "school" && attr["isced:level"] === "1") {
    type += "primary school" + "<br/>";
  } else if (attr.amenity === "school" && attr["isced:level"] === "2") {
    type += "secondary school" + "<br/>";
  } else if (attr.amenity === "school" && attr["isced:level"] === "3") {
    type += "secondary schools" + "<br/>";
  } else if (attr.amenity === "school") {
    type += "school" + "<br/>";
  }
  if (attr.amenity === "kindergarten") type += "kindergarten" + "<br/>";
  if (attr.amenity === "internet_cafe") type += "internet cafe" + "<br/>";
  if (attr.amenity === "daycare") type += "daycare" + "<br/>";
  if (attr.amenity === "childcare") type += "childcare" + "<br/>";
  if (attr.amenity === "university") type += "university" + "<br/>";
  if (attr.amenity === "college") type += "college" + "<br/>";
  if (attr.amenity === "shelter") type += "shelter" + "<br/>";
  if (attr.amenity === "bbq") type += "bbq" + "<br/>";
  if (attr.amenity === "nightclub") type += "nightclub" + "<br/>";
  if (attr.amenity === "bicycle_parking") type += "bicycle parking" + "<br/>";
  if (attr.amenity === "bicycle_rental") type += "bicycle rental" + "<br/>";
  if (attr.amenity === "boat_sharing") type += "boat sharing" + "<br/>";
  if (attr.amenity === "car_sharing") type += "car sharing" + "<br/>";
  if (attr.amenity === "cinema") type += "cinema" + "<br/>";
  if (attr.amenity === "swimming_pool") type += "swimming pool" + "<br/>";
  if (attr.amenity === "embassy" || attr.diplomatic === "embassy") type += "embassy" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "consulate") type += "consulate" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "consulate_general") type += "consulate general" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "honorary_consulate") type += "honorary consulate" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "permanent_mission") type += "permanent mission" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "delegation") type += "delegation" + "<br/>";
  if (attr.amenity === "embassy" && attr.diplomatic === "high_commission") type += "high commission" + "<br/>";
  if (attr.amenity === "Barfusspfad") type += "barefoodpath" + "<br/>";
  if (attr.amenity === "casino") type += "casino" + "<br/>";
  if (attr.amenity === "spa") type += "spa" + "<br/>";
  if (attr.amenity === "stables") type += "stables" + "<br/>";
  if (attr.amenity === "watering_place") type += "watering place" + "<br/>";
  if (attr.watering_place === "yes") type += "watering place" + "<br/>";
  if (attr.amenity === "water_point") type += "water point" + "<br/>";
  if (attr.amenity === "taxi") type += "taxi" + "<br/>";
  if (attr.amenity === "car_wash") type += "car wash" + "<br/>";
  if (attr.amenity === "brothel") type += "brothel" + "<br/>";
  if (attr.amenity === "stripclub") type += "stripclub" + "<br/>";
  if (attr.amenity === "swingerclub") type += "swingerclub" + "<br/>";
  if (attr.amenity === "planetarium") type += "planetarium" + "<br/>";
  if (attr.amenity === "courthouse") type += "court house" + "<br/>";
  if (attr.amenity === "crematorium") type += "crematorium" + "<br/>";
  if (attr.amenity === "crypt" || attr.building === "crypt") type += "crypt" + "<br/>";
  if (attr.amenity === "hunting_stand") type += "hunting stand" + "<br/>";
  if (attr.amenity === "photo_booth") type += "photo booth" + "<br/>";
  if (attr.amenity === "prison") type += "prison" + "<br/>";
  if (attr.amenity === "ranger_station") type += "ranger station" + "<br/>";
  if (attr.amenity === "register_office") type += "register office" + "<br/>";
  if (attr.amenity === "marketplace") type += "marketplace" + "<br/>";
  if (attr.amenity === "solarium") type += "solarium" + "<br/>";
  if (attr.amenity === "sauna") type += "sauna" + "<br/>";
  if (attr.amenity === "shower") type += "shower" + "<br/>";
  if (attr.amenity === "waste_disposal") {
    type += "waste disposal" + "<br/>";
    if (attr.waste) {
      type += "Typ: ";
      switch (attr.waste) {
        case "trash":
          type += "General" + "<br/>";
          break;
        case "oil":
          type += "Oil" + "<br/>";
          break;
        case "drugs":
          type += "Pharmaceutical" + "<br/>";
          break;
        case "organic":
          type += "Organic" + "<br/>";
          break;
        case "plastic":
          type += "Plastic" + "<br/>";
          break;
        case "rubble":
          type += "Rubble" + "<br/>";
          break;
        case "cigarettes":
          type += "Cigarettes" + "<br/>";
          break;
        default:
          type += "General" + "<br/>";
      }
    }
  }
  if (attr.amenity === "waste_basket" || attr.waste === "dog_excrement") type += "dog waste station" + "<br/>";
  if (attr.amenity === "scout_camp" || attr.amenity === "scout_hut" || attr.amenity === "scout_hall") type += "scout camp" + "<br/>";
  if (attr.amenity === "ferry_terminal") type += "ferry terminal" + "<br/>";
  if (attr.amenity === "bureau_de_change") type += "bureau de change" + "<br/>";
  if (attr.amenity === "youth_club") type += "youth club" + "<br/>";
  if (attr.amenity === "festival_grounds") type += "festival grounds" + "<br/>";
  if (attr.openfire === "yes" || attr.fireplace === "yes") type += "fireplace" + "<br/>";
  if (attr.amenity === "vending_machine") {
    if (attr.vending) {
      switch (attr.vending) {
        case "admission_tickets":
          type += "vending machine admission tickets" + "<br/>";
          break;
        case "animal_feed":
          type += "vending machine animal feed" + "<br/>";
          break;
        case "bicycle_tube":
          type += "vending machine bicycle tube" + "<br/>";
          break;
        case "books":
          type += "vending machine books" + "<br/>";
          break;
        case "candles":
          type += "vending machine candles" + "<br/>";
          break;
        case "cigarettes":
          type += "vending machine cigarettes" + "<br/>";
          break;
        case "chemist":
          type += "vending machine chemist" + "<br/>";
          break;
        case "condoms":
          type += "vending machine condoms" + "<br/>";
          break;
        case "drinks":
          type += "vending machine drinks" + "<br/>";
          break;
        case "electronics":
          type += "vending machine electronics" + "<br/>";
          break;
        case "elongated_coin":
          type += "vending machine elongated_coin" + "<br/>";
          break;
        case "excrement_bags":
          type += "vending machine excrement_bags" + "<br/>";
          break;
        case "feminine_hygiene":
          type += "vending machine feminine_hygiene" + "<br/>";
          break;
        case "first_aid":
          type += "vending machine first_aid" + "<br/>";
          break;
        case "fishing_tackle":
          type += "vending machine fishing tackle" + "<br/>";
          break;
        case "fishing_bait":
          type += "vending machine fishing bait" + "<br/>";
          break;
        case "flowers":
          type += "vending machine flowers" + "<br/>";
          break;
        case "food":
          type += "vending machine food" + "<br/>";
          break;
        case "ice_cubes":
          type += "vending machine ice cubes" + "<br/>";
          break;
        case "ice_cream":
          type += "vending machine ice cream" + "<br/>";
          break;
        case "ink_cartridges":
          type += "vending machine ink cartridges" + "<br/>";
          break;
        case "laundry_detergent":
          type += "vending machine laundry detergent" + "<br/>";
          break;
        case "public_transport_tickets":
          type += "vending machine public transport tickets" + "<br/>";
          break;
        case "newspaper":
          type += "vending machine newspaper" + "<br/>";
          break;
        case "parcel_pickup":
          type += "vending machine parcel pickup" + "<br/>";
          break;
        case "parcel_mail_in":
          type += "Packege station" + "<br/>";
          break;
        case "parking_tickets":
          type += "vending machine parking tickets" + "<br/>";
          break;
        case "photos":
          type += "vending machine photos" + "<br/>";
          break;
        case "sex_toys":
          type += "vending machine sex_toys" + "<br/>";
          break;
        case "SIM_cards":
          type += "vending machine SIM_cards" + "<br/>";
          break;
        case "stamps":
          type += "vending machine stamps" + "<br/>";
          break;
        case "sweets":
          type += "vending machine sweets" + "<br/>";
          break;
        case "syringes":
          type += "vending machine syringes" + "<br/>";
          break;
        case "toll":
          type += "vending machine toll" + "<br/>";
          break;
        case "toys":
          type += "vending machine toys" + "<br/>";
          break;
        case "umbrellas":
          type += "vending machine umbrellas" + "<br/>";
          break;
        default:
          type += "vending machine" + "<br/>";
      }
    } else type += "vending machine" + "<br/>";
  }
  if (attr.amenity === "arts_centre") type += "arts centre" + "<br/>";
  if (attr.amenity === "artwork") type += "artwork" + "<br/>";
  if (attr.amenity === "museum") type += "museum" + "<br/>";
  if (attr.amenity === "theatre") type += "theatre" + "<br/>";
  if (attr.building === "cathedral") type += "cathedral" + "<br/>";
  if (attr.building === "church") type += "church" + "<br/>";
  if (attr.building === "chapel") type += "chapel" + "<br/>";
  if (attr.amenity === "place_of_worship") type += "place of worship" + "<br/>";
  if (attr.abandoned === "village") type += "abandoned village" + "<br/>";
  if (attr["abandoned:tourism"] === "theme_park") type += "abandoned theme park" + "<br/>";
  if (attr["abandoned:amenity"] === "prison_camp" && ["concentration_camp"] === "concentration_camp") {}
  if (attr.abandoned === "yes" && attr.military === "bunker") type += "abandoned bunker" + "<br/>";
  if (attr.abandoned === "yes" && attr.military === "barracks") type += "abandoned barracks" + "<br/>";
  if (attr.abandoned === "yes" && attr.military === "airfield") type += "abandoned airfield" + "<br/>";
  if (attr.historic === "monastery") type += "historic monastery" + "<br/>";
  if (attr.amenity === "monastery") type += "monastery" + "<br/>";
  if (attr.building === "monastery") type += "monastery" + "<br/>";
  if (attr.historic === "manor") type += "historic manor" + "<br/>";
  if (attr.historic === "boundary_stone") type += "historic boundary stone" + "<br/>";
  if (attr.historic === "milestone") type += "historic milestone" + "<br/>";
  if (attr.historic === "monument") type += "monument" + "<br/>";
  if (attr.historic === "palace") type += "historic palace" + "<br/>";
  if (attr.historic === "mine") type += "historic mine" + "<br/>";
  if (attr.historic === "ruins") type += "ruins" + "<br/>";
  if (attr.historic_usage === "harbour") type += "historic harbour" + "<br/>";
  if (attr.historic === "rune stone") type += "rune stone" + "<br/>";
  if (attr.historic === "battlefield") type += "historic battlefield" + "<br/>";
  if (attr.historic === "blacksmith") type += "historic blacksmith" + "<br/>";
  if (attr.historic === "tree_shrine" || attr.historic === "wayside_shrine") type += "shrine" + "<br/>";
  if (attr.historic === "city_gate") type += "historic city gate" + "<br/>";
  if (attr.historic === "wayside_cross") type += "historic wayside cross" + "<br/>";
  if (attr.amenity === "monument") type += "monument" + "<br/>";
  if (attr.historic === "memorial") type += "memorial" + "<br/>";
  if (attr.historic === "optical_telegraph") type += "historic optical telegraph" + "<br/>";
  if (attr.historic === "castle") {
    if (attr.castle_type) {
      switch (attr.castle_type) {
        case "defensive":
          type += "defensive castle" + "<br/>";
          break;
        case "palace":
          type += "palace" + "<br/>";
          break;
        case "stately":
          type += "stately castle" + "<br/>";
          break;
        case "manor":
          type += "manor" + "<br/>";
          break;
        case "fortress":
          type += "fortress" + "<br/>";
          break;
        case "castrum":
          type += "castrum" + "<br/>";
          break;
        case "shiro":
          type += "shiro" + "<br/>";
          break;
        case "kremlin":
          type += "kremlin" + "<br/>";
          break;
        default:
          type += "castle" + "<br/>";
      }
    } else type += "castle" + "<br/>";
  }
  if (attr.historic === "archaeological_site") type += "archaeological site" + "<br/>";
  if (attr.historic === "tomb") {
    if (attr.tomb) {
      switch (attr.tomb) {
        case "tumulus":
          type += "tumulus" + "<br/>";
          break;
        case "rock-cut":
          type += "rock" + "<br/>";
          break;
        case "hypogeum":
          type += "hypogeum" + "<br/>";
          break;
        case "war_grave":
          type += "war grave" + "<br/>";
          break;
        case "mausoleum":
          type += "mausoleum" + "<br/>";
          break;
        case "columbarium":
          type += "columbarium" + "<br/>";
          break;
        case "crypt":
          type += "crypt" + "<br/>";
          break;
        case "pyramid":
          type += "pyramid" + "<br/>";
          break;
        case "sarcophagus":
          type += "sarcophagus" + "<br/>";
          break;
        case "vault":
          type += "vault" + "<br/>";
          break;
        case "tombstone":
          type += "tombstone" + "<br/>";
          break;
        default:
          type += "historic tomb" + "<br/>";
      }
    } else type += "historic tomb" + "<br/>";
  }
  if (attr.office === "accountant") type += "accountant" + "<br/>";
  if (attr.office === "administrative") type += "administrative" + "<br/>";
  if (attr.office === "architect") type += "architect" + "<br/>";
  if (attr.office === "association") type += "association" + "<br/>";
  if (attr.office === "physician") type += "physician" + "<br/>";
  if (attr.office === "camping") type += "camping office" + "<br/>";
  if (attr.office === "company") type += "company" + "<br/>";
  if (attr.office === "educational_institution") type += "educational institution" + "<br/>";
  if (attr.office === "employment_agency") type += "employment agency" + "<br/>";
  if (attr.office === "estate_agent") type += "estate agent" + "<br/>";
  if (attr.office === "forestry") type += "forestry" + "<br/>";
  if (attr.office === "foundation") type += "foundation" + "<br/>";
  if (attr.office === "government") type += "government" + "<br/>";
  if (attr.office === "guide") type += "guide office" + "<br/>";
  if (attr.office === "insurance") type += "insurance" + "<br/>";
  if (attr.office === "it") type += "it office" + "<br/>";
  if (attr.office === "lawyer") type += "lawyer" + "<br/>";
  if (attr.office === "newspaper") type += "newspaper" + "<br/>";
  if (attr.office === "ngo") type += "ngo office" + "<br/>";
  if (attr.office === "notary") type += "notary" + "<br/>";
  if (attr.office === "political_party") type += "political party" + "<br/>";
  if (attr.office === "quango") type += "quango office" + "<br/>";
  if (attr.office === "realtor") type += "realtor" + "<br/>";
  if (attr.office === "real_estate_agent") type += "real estate agent" + "<br/>";
  if (attr.office === "register") type += "register" + "<br/>";
  if (attr.office === "religion") type += "religious office" + "<br/>";
  if (attr.office === "research") type += "research office" + "<br/>";
  if (attr.office === "tax") type += "tax office" + "<br/>";
  if (attr.office === "telecommunication") type += "telecommunication office" + "<br/>";
  if (attr.office === "travel_agent") type += "travel agent" + "<br/>";
  if (attr.office === "water_utility") type += "water utility office" + "<br/>";
  if (attr.office === "therapist") type += "therapist" + "<br/>";
  if (attr.place === "city") type += "city" + "<br/>";
  if (attr.place === "town") type += "town" + "<br/>";
  if (attr.place === "village") type += "village" + "<br/>";
  if (attr.place === "continent") type += "continent" + "<br/>";
  if (attr.place === "ocean") type += "ocean" + "</br>";
  if (attr.highway === "track") type += "track" + "<br/>";
  if (attr.highway === "raceway") type += "raceway" + "<br/>";
  if (attr.bicycle === "designated") type += "cycle path" + "<br/>";
  if (attr.highway === "path") type += "food path" + "<br/>";
  if (attr.amenity === "parking") type += "parking" + "<br/>";
  if (attr.highway === "services") type += "services" + "<br/>";
  if (attr.highway === "rest_area") type += "rest area" + "<br/>";
  if (attr.highway === "turning_circle") type += "turning circle" + "<br/>";
  if (attr.highway === "service") type += "service road" + "<br/>";
  if (attr.highway === "motorway") type += "motorway" + "<br/>";
  if (attr.highway === "motorway_junction") type += "motorway junction" + "<br/>";
  if (attr.highway === "bridleway") type += "bridleway" + "<br/>";
  if (attr.oneway === "yes") type += "oneway" + "<br/>";
  if (attr.park_ride === "yes") type += "park and ride" + "<br/>";
  if (attr.park_ride === "unknown") type += "park and ride" + "<br/>";
  if (attr.park_ride === "bus") type += "park and ride" + "<br/>";
  if (attr.park_ride === "tram") type += "park and ride" + "<br/>";
  if (attr.highway === "bus_stop") type += "bus stop" + "<br/>";
  if (attr.highway === "pedestrian") type += "pedestrian" + "<br/>";
  if (attr.highway === "street_lamp") type += "street lamp" + "<br/>";
  if (attr.highway === "traffic_signals") type += "traffic signals" + "<br/>";
  if (attr.crossing === "traffic_signals") type += "traffic signals" + "<br/>";
  if (attr.highway === "speed_camera") type += "speed camera" + "<br/>";
  if (attr.traffic_calming === "yes") ret += "traffic calming" + "</br>";
  if (attr.traffic_calming === "bump") type += "bump" + "</br>";
  if (attr.traffic_calming === "chicane") type += "chicane" + "</br>";
  if (attr.traffic_calming === "choker") type += "choker" + "</br>";
  if (attr.traffic_calming === "cushion") type += "cushion" + "</br>";
  if (attr.traffic_calming === "hump") type += "hump" + "</br>";
  if (attr.traffic_calming === "island") type += "island" + "</br>";
  if (attr.traffic_calming === "rumble_strip") type += "rumble_strip" + "</br>";
  if (attr.traffic_calming === "table") type += "table" + "</br>";
  if (attr["seamark:type"] === "buoy_cardinal") type += "buoy cardinal" + "<br/>";
  if (attr["seamark:type"] === "buoy_lateral") type += "buoy lateral" + "<br/>";
  if (attr["seamark:type"] === "buoy_isolated_danger") type += "buoy isolated_danger" + "<br/>";
  if (attr["seamark:beacon_lateral:shape"] === "perch") type += "perch" + "<br/>";
  if (attr.amenity === "fuel" && attr["seamark:small_craft_facility:category"] === "fuel_station") type += "fuel station" + "<br/>";else if (attr.amenity === "fuel") type += "fuel" + "<br/>";
  if (attr.amenity === "charging_station") {
    type += "charging station" + "<br/>";
    var volt = attr.voltage;
    var linebreak = "<br/>";
    if (attr.car) {
      switch (attr.car) {
        case "yes":
          type += "Car: yes";
          break;
        case "no":
          type += "Car: No";
          break;
        default:
          type += "Cars: unkown";
      }
      type += linebreak;
    } else {
      type += "Cars: unkown" + linebreak;
    }
    if (attr.bicycle) {
      switch (attr.bicycle) {
        case "yes":
          type += "E-Bike: yes";
          break;
        case "no":
          type += "E-Bike: no";
          break;
        default:
          type += "E-Bike: unkown";
      }
      type += linebreak;
    } else {
      type += "E-Bike: unkown" + linebreak;
    }
    if (attr["socket:schuko"]) {
      type += "Schuko socket: " + attr["socket:schuko"] + linebreak;
    }
    if (attr["socket:cee_blue"]) {
      type += "Cee blue socket " + attr["socket:cee_blue"] + linebreak;
    }
    if (attr["socket:cee_red_16a"]) {
      type += "Cee red 16a socket " + attr["socket:cee_red_16a"] + linebreak;
    }
    if (attr["socket:cee_red_32a"]) {
      type += "Cee red 32a socket " + attr["socket:cee_red_32a"] + linebreak;
    }
    if (attr["socket:cee_red_64a"]) {
      type += "Cee red 64a socket " + attr["socket:cee_red_64a"] + linebreak;
    }
    if (attr["socket:cee_red_125a"]) {
      type += "Cee red 125a socket " + attr["socket:cee_red_125a"] + linebreak;
    }
    if (attr["socket:nema_5_15"]) {
      type += "Nema 5 15 socket " + attr["socket:nema_5_15"] + linebreak;
    }
    if (attr["socket:nema_5_20"]) {
      type += "Nema 5 20 socket " + attr["socket:nema_5_20"] + linebreak;
    }
    if (attr["socket:nema_14_30"]) {
      type += "Nema 14 30 socket " + attr["socket:nema_14_30"] + linebreak;
    }
    if (attr["socket:nema_14_50"]) {
      type += "Nema 14 50 socket " + attr["socket:nema_14_50"] + linebreak;
    }
    if (attr["socket:bs1363"]) {
      type += "Bs1363 socket " + attr["socket:bs1363"] + linebreak;
    }
    if (attr["socket:type1"]) {
      type += "Type 1 socket " + attr["socket:type1"] + linebreak;
    }
    if (attr["socket:type1_combo"]) {
      type += "Type 1 combo socket " + attr["socket:schuko"] + linebreak;
    }
    if (attr["socket:type2"]) {
      type += "Type 2 socket " + attr["socket:type2"] + linebreak;
    }
    if (attr["socket:type2_combo"]) {
      type += "Type 2 combo socket " + attr["socket:type2_combo"] + linebreak;
    }
    if (attr["socket:type3"]) {
      type += "Type 3 socket " + attr["socket:type3"] + linebreak;
    }
    if (attr["socket:chademo"]) {
      type += "Chademo socket " + attr["socket:chademo"] + linebreak;
    }
    if (attr["socket:magne_charge"]) {
      type += "Magne charge socket " + attr["socket:magne_charge"] + linebreak;
    }
    if (attr["socket:tesla_standard"]) {
      type += "Tesla standard socket " + attr["socket:tesla_standard"] + linebreak;
    }
    if (attr["socket:tesla_supercharge"]) {
      type += "Tesla supercharge: " + attr["socket:tesla_supercharge"] + linebreak;
    }
    if (attr["socket:tesla_roadster"]) {
      type += "Tesla_roadster socket " + attr["socket:tesla_roadster"] + linebreak;
    }
    type += linebreak;
    if (attr.voltage) type += "Volt: " + volt + linebreak;
  }
  if (attr.tunnel === "yes") type += "tunnel" + "<br/>";
  if (attr.bridge) {
    type += "bridge: ";
    switch (attr.bridge) {
      case "swing":
        type += "swing";
        break;
      case "aqueduct":
        type += "aqueduct";
        break;
      case "bascule":
        type += "flap bridge";
        break;
      case "boardwalk":
        type += "boardwalk";
        break;
      case "cantilever":
        type += "cantilever";
        break;
      case "covered":
        type += "covered";
        break;
      case "drawbridge":
        type += "drawbridge";
        break;
      case "humpback":
        type += "humpback";
        break;
      case "lift":
        type += "lift";
        break;
      case "low_water_crossing":
        type += "low water crossing";
        break;
      case "moveable":
        type += "moveable";
        break;
      case "pontoon":
        type += "pontoon";
        break;
      case "suspension":
        type += "suspension";
        break;
      case "trestle":
        type += "trestle";
        break;
      case "viaduct":
        type += "viaduct";
        break;
    }
  }
  if (attr["bridge:movable"]) {
    switch (attr["bridge:movable"]) {
      case "swing":
        type += "swing";
        break;
      case "bascule":
        type += "bascule";
        break;
      case "drawbridge":
        type += "drawbridge";
        break;
      case "lift":
        type += "lift";
        break;
      case "submersible":
        type += "submersible";
        break;
      case "transporter":
        type += "transporter";
        break;
      case "retractable":
        type += "retractable";
        break;
    }
  }
  if (attr.amenity === "nursing_home" || attr.amenity === "retirement_home") type += "nursing home / retirement home" + "<br/>";
  if (attr.amenity === "social_facility") type += "social facility" + "<br/>";
  if (attr.social_facility) {
    if (attr.social_facility === "group_home" && attr["social_facility:for"] === "senior") type += "senior group home" + "<br/>";
    if (attr.social_facility === "assisted_living") type += "assisted living" + "<br/>";
    if (attr.social_facility === "outreach") type += "outreach" + "<br/>";
    if (attr.social_facility === "workshop") type += "workshop" + "<br/>";
    if (attr.social_facility === "ambulatory_care" || attr.social_facility === "healthcare") type += "ambulatory care" + "<br/>";
    if (attr.social_facility === "shelter" && attr["social_facility:for"] === "senior") type += "senior shelter" + "<br/>";
    if (attr.social_facility === "shelter" && attr["social_facility:for"] === "abused") type += "abused shelter" + "<br/>";
    if (attr.social_facility === "food_bank") type += "food bank" + "<br/>";
    if (attr.social_facility === "hospice") type += "hospice" + "<br/>";
  }
  if (attr.brewery) type += "brand of beer: " + attr["brewery"] + "<br/>";
  if (attr.shop === "alcohol") type += "alcohol shop" + "<br/>";
  if (attr.shop === "bakery") type += "bakery shop" + "<br/>";
  if (attr.shop === "beverages") type += "beverages shop" + "<br/>";
  if (attr.shop === "butcher") type += "butcher shop" + "<br/>";
  if (attr.shop === "cheese") type += "cheese shop" + "<br/>";
  if (attr.shop === "chocolate") type += "chocolate shop" + "<br/>";
  if (attr.shop === "coffee") type += "coffee shop" + "<br/>";
  if (attr.shop === "confectionery") type += "confectionery shop" + "<br/>";
  if (attr.shop === "convenience") type += "convenience shop" + "<br/>";
  if (attr.shop === "deli") type += "deli shop" + "<br/>";
  if (attr.shop === "dairy") type += "dairy shop" + "<br/>";
  if (attr.shop === "farm") type += "farm shop" + "<br/>";
  if (attr.shop === "greengrocer") type += "greengrocer shop" + "<br/>";
  if (attr.shop === "grocery") type += "grocery shop" + "<br/>";
  if (attr.shop === "organic") type += "organic shop" + "<br/>";
  if (attr.shop === "pasta") type += "pasta shop" + "<br/>";
  if (attr.shop === "seafood") type += "seafood shop" + "<br/>";
  if (attr.shop === "tea") type += "tea shop" + "<br/>";
  if (attr.shop === "wine") type += "wine shop" + "<br/>";
  if (attr.shop === "department_store") type += "department store" + "<br/>";
  if (attr.shop === "general") type += "general shop" + "<br/>";
  if (attr.shop === "kiosk") type += "kiosk" + "<br/>";
  if (attr.shop === "mall") type += "mall" + "<br/>";
  if (attr.shop === "supermarket") type += "supermarket" + "<br/>";
  if (attr.shop === "baby_goods") type += "baby goods shop" + "<br/>";
  if (attr.shop === "bag") type += "bag shop" + "<br/>";
  if (attr.shop === "boutique") type += "boutique" + "<br/>";
  if (attr.shop === "clothes") type += "clothes shop" + "<br/>";
  if (attr.shop === "fabric") type += "fabric shop" + "<br/>";
  if (attr.shop === "fashion") type += "fashion shop" + "<br/>";
  if (attr.shop === "jewelry") type += "jewelry shop" + "<br/>";
  if (attr.shop === "leather") type += "leather shop" + "<br/>";
  if (attr.shop === "shoes") type += "shoes shop" + "<br/>";
  if (attr.shop === "variety_store") type += "variety store" + "<br/>";
  if (attr.shop === "chemist") type += "chemist" + "<br/>";
  if (attr.shop === "cosmetics") type += "cosmetics shop" + "<br/>";
  if (attr.shop === "drugstore") type += "drugstore" + "<br/>";
  if (attr.shop === "perfumery") type += "perfumery" + "<br/>";
  if (attr.shop === "erotic") type += "erotic shop" + "<br/>";
  if (attr.shop === "hairdresser") type += "hairdresser" + "<br/>";
  if (attr.shop === "hearing_aids") type += "hearing aids" + "<br/>";
  if (attr.shop === "herbalist") type += "herbalist" + "<br/>";
  if (attr.shop === "massage") type += "massage" + "<br/>";
  if (attr.shop === "medical_supply") type += "medical supply shop" + "<br/>";
  if (attr.shop === "optician") type += "optician" + "<br/>";
  if (attr.shop === "tattoo") type += "tattoo" + "<br/>";
  if (attr.shop === "bathroom_furnishing") type += "bathroom furnishing" + "<br/>";
  if (attr.shop === "doityourself") type += "doityourself" + "<br/>";
  if (attr.shop === "energy") type += "energy" + "<br/>";
  if (attr.shop === "florist") type += "florist" + "<br/>";
  if (attr.shop === "furnace") type += "furnace shop" + "<br/>";
  if (attr.shop === "garden_centre") type += "garden centre" + "<br/>";
  if (attr.shop === "gas") type += "gas" + "<br/>";
  if (attr.shop === "glaziery") type += "glaziery" + "<br/>";
  if (attr.shop === "hardware") type += "hardware shop" + "<br/>";
  if (attr.shop === "houseware") type += "houseware shop" + "<br/>";
  if (attr.shop === "locksmith") type += "locksmith" + "<br/>";
  if (attr.shop === "paint") type += "paint shop" + "<br/>";
  if (attr.shop === "trade") type += "trade" + "<br/>";
  if (attr.shop === "antiques") type += "antiques shop" + "<br/>";
  if (attr.shop === "bed") type += "bed shop" + "<br/>";
  if (attr.shop === "candles") type += "candles shop" + "<br/>";
  if (attr.shop === "carpet") type += "carpet shop" + "<br/>";
  if (attr.shop === "curtain") type += "curtain shop" + "<br/>";
  if (attr.shop === "furniture") type += "furniture store" + "<br/>";
  if (attr.shop === "interior_decoration") type += "interior decoration company" + "<br/>";
  if (attr.shop === "kitchen") type += "kitchen shop" + "<br/>";
  if (attr.shop === "window_blind") type += "window blind shop" + "<br/>";
  if (attr.shop === "computer") type += "computer shop" + "<br/>";
  if (attr.shop === "electronics") type += "electronics shop" + "<br/>";
  if (attr.shop === "hifi") type += "hifi shop" + "<br/>";
  if (attr.shop === "mobile_phone") type += "mobile phone shop" + "<br/>";
  if (attr.shop === "radiotechnics") type += "radiotechnics shop" + "<br/>";
  if (attr.shop === "vacuum_cleaner") type += "vacuum cleaner shop" + "<br/>";
  if (attr.shop === "bicycle") type += "bicycle shop" + "<br/>";
  if (attr.shop === "car") type += "car shop" + "<br/>";
  if (attr.shop === "car repair") type += "car repair" + "<br/>";
  if (attr.shop === "car_parts") type += "car parts shop" + "<br/>";
  if (attr.shop === "dive" || attr.shop === "scuba_diving") type += "scuba diving shop" + "<br/>";
  if (attr.shop === "fishing") type += "fishing shop" + "<br/>";
  if (attr.shop === "free_flying") type += "free flying shop" + "<br/>";
  if (attr.shop === "hunting") type += "hunting shop" + "<br/>";
  if (attr.shop === "motorcycle") type += "motorcycle shop" + "<br/>";
  if (attr.shop === "outdoor") type += "outdoor shop" + "<br/>";
  if (attr.shop === "sports") type += "sports shop" + "<br/>";
  if (attr.shop === "tyres") type += "tyres" + "<br/>";
  if (attr.shop === "water_sports") type += "water sports shop" + "<br/>";
  if (attr.shop === "art") type += "art" + "<br/>";
  if (attr.shop === "craft") type += "craft" + "<br/>";
  if (attr.shop === "frame") type += "frame shop" + "<br/>";
  if (attr.shop === "music") type += "music shop" + "<br/>";
  if (attr.shop === "music_instrument") type += "music instruments shop" + "<br/>";
  if (attr.shop === "photo") type += "photo shop" + "<br/>";
  if (attr.shop === "video") type += "video" + "<br/>";
  if (attr.shop === "video_games") type += "video games" + "<br/>";
  if (attr.shop === "anime") type += "anime" + "<br/>";
  if (attr.shop === "books") type += "books shop" + "<br/>";
  if (attr.shop === "gift") type += "gift shop" + "<br/>";
  if (attr.shop === "newsagent") type += "newsagent" + "<br/>";
  if (attr.shop === "stationery") type += "stationery" + "<br/>";
  if (attr.shop === "ticket") type += "ticket shop" + "<br/>";
  if (attr.shop === "copyshop") type += "copyshop" + "<br/>";
  if (attr.shop === "funeral_directors") type += "funeral directors" + "<br/>";
  if (attr.shop === "laundry") type += "laundry" + "<br/>";
  if (attr.shop === "dry_cleaning") type += "dry cleaning" + "<br/>";
  if (attr.shop === "money_lender") type += "money lender" + "<br/>";
  if (attr.shop === "pawnbroker") type += "pawnbroker" + "<br/>";
  if (attr.shop === "pet") type += "pet shop" + "<br/>";
  if (attr.shop === "pyrotechnics") type += "pyrotechnics shop" + "<br/>";
  if (attr.shop === "religion") type += "religion" + "<br/>";
  if (attr.shop === "beauty") type += "beauty" + "<br/>";
  if (attr.shop === "solarium") type += "solarium" + "<br/>";
  if (attr.shop === "tobacco") type += "tobacco shop" + "<br/>";
  if (attr.shop === "toys") type += "toys shop" + "<br/>";
  if (attr.shop === "travel_agency") type += "travel agency" + "<br/>";
  if (attr.shop === "market_hall") type += "market hall" + "<br/>";
  if (attr.shop === "vacant") type += "vacant" + "<br/>";
  if (attr.shop === "weapons") type += "weapons shop" + "<br/>";
  if (attr.gambling === "lottery") type += "lottery" + "<br/>";
  if (attr.pet === "fish") type += "fishkeeping" + "<br/>";
  if (attr.craft === "agriucultural_engines") type += "agriucultural engines" + "<br/>";
  if (attr.craft === "basket_maker") type += "basket maker" + "<br/>";
  if (attr.craft === "beekeeper") type += "beekeeper" + "<br/>";
  if (attr.craft === "blacksmith") type += "blacksmith" + "<br/>";
  if (attr.craft === "brewery") type += "brewery" + "<br/>";
  if (attr.microbrewery === "yes") type += "micro-brewery" + "<br/>";
  if (attr.craft === "boatbuilder") type += "boatbuilder" + "<br/>";
  if (attr.craft === "bookbinder") type += "bookbinder" + "<br/>";
  if (attr.craft === "builder") type += "housebuilding" + "<br/>";
  if (attr.craft === "carpenter") type += "carpenter, woodworker, joiner" + "<br/>";
  if (attr.craft === "carpet_layer") type += "carpet layer" + "<br/>";
  if (attr.craft === "caterer") type += "caterer" + "<br/>";
  if (attr.craft === "clockmaker") type += "clockmaker" + "<br/>";
  if (attr.craft === "confectionery") type += "confectionery" + "<br/>";
  if (attr.craft === "dressmaker") type += "dressmaker" + "<br/>";
  if (attr.craft === "electrician") type += "electrician" + "<br/>";
  if (attr.craft === "gardener") type += "gardener, landscaper" + "<br/>";
  if (attr.craft === "glaziery") type += "glaziery" + "<br/>";
  if (attr.craft === "handicraft") type += "handicraft" + "<br/>";
  if (attr.craft === "hvac") type += "heating, ventilation and air-conditioning technology (HVAC)" + "<br/>";
  if (attr.craft === "insulation") type += "thermal insulation" + "<br/>";
  if (attr.craft === "jeweller") type += "jeweller, gold-/silversmiths" + "<br/>";
  if (attr.craft === "key_cutter") type += "key cutter" + "<br/>";
  if (attr.craft === "locksmith") type += "locksmith" + "<br/>";
  if (attr.craft === "metal_construction") type += "metalworker" + "<br/>";
  if (attr.craft === "optician") type += "optician" + "<br/>";
  if (attr.craft === "painter") type += "painter" + "<br/>";
  if (attr.craft === "parquet_layer") type += "parquet layer" + "<br/>";
  if (attr.craft === "photographer") type += "photographer" + "<br/>";
  if (attr.craft === "photographic_laboratory") type += "photographic laboratory" + "<br/>";
  if (attr.craft === "plasterer") type += "plasterer" + "<br/>";
  if (attr.craft === "plumber") type += "plumber" + "<br/>";
  if (attr.craft === "pottery") type += "pottery" + "<br/>";
  if (attr.craft === "rigger") type += "ship rigger" + "<br/>";
  if (attr.craft === "roofer") type += "roofer" + "<br/>";
  if (attr.craft === "saddler") type += "saddler" + "<br/>";
  if (attr.craft === "sailmaker") type += "sailmaker" + "<br/>";
  if (attr.craft === "sawmill") type += "sawmill" + "<br/>";
  if (attr.craft === "scaffolder") type += "scaffolder" + "<br/>";
  if (attr.craft === "sculptor") type += "sculptor" + "<br/>";
  if (attr.craft === "shoemaker") type += "shoemaker" + "<br/>";
  if (attr.craft === "stand_builder") type += "exhibition stand builder" + "<br/>";
  if (attr.craft === "stonemason") type += "stonemason" + "<br/>";
  if (attr.craft === "sun_protection") type += "constructor for sun protection, venetian blind, shutter" + "<br/>";
  if (attr.craft === "sweep") type += "chimney sweep" + "<br/>";
  if (attr.craft === "tailor") type += "tailor" + "<br/>";
  if (attr.craft === "tiler") type += "tiler" + "<br/>";
  if (attr.craft === "tinsmith") type += "tinsmith, metalworker" + "<br/>";
  if (attr.craft === "upholsterer") type += "upholsterer" + "<br/>";
  if (attr.craft === "watchmaker") type += "watchmaker" + "<br/>";
  if (attr.craft === "window_construction") type += "window constructor" + "<br/>";
  if (attr.rental === "machines") type += "rental park for machines" + "<br/>";
  if (attr.amenity === "car_rental") type += "car rental company" + "<br/>";
  if (attr.landuse === "allotments") type += "allotment garden" + "<br/>";
  if (attr.landuse === "basin") type += "holding reservoir" + "<br/>";
  if (attr.landuse === "brownfield") type += "brownfield" + "<br/>";
  if (attr.landuse === "commercial") type += "commercial area" + "<br/>";
  if (attr.landuse === "construction") type += "construction area" + "<br/>";
  if (attr.landuse === "farmland") type += "farmland" + "<br/>";
  if (attr.landuse === "farmyard") type += "farmyard" + "<br/>";
  if (attr.landuse === "forest") type += "forest" + "<br/>";
  if (attr.landuse === "garages") type += "garages" + "<br/>";
  if (attr.landuse === "grass") type += "grass" + "<br/>";
  if (attr.landuse === "greenfield") type += "greenfield" + "<br/>";
  if (attr.landuse === "greenhouse_horticulture") type += "greenhouse horticulture" + "<br/>";
  if (attr.landuse === "industrial") type += "industry area" + "<br/>";
  if (attr.landuse === "landfill") type += "landfill" + "<br/>";
  if (attr.landuse === "meadow") type += "meadow" + "<br/>";
  if (attr.landuse === "orchard") type += "orchard" + "<br/>";
  if (attr.landuse === "plant_nursery") type += "plant nursery" + "<br/>";
  if (attr.landuse === "quarry") type += "quarry" + "<br/>";
  if (attr.landuse === "railway") type += "railway" + "<br/>";
  if (attr.landuse === "recreation_ground") type += "recreation ground" + "<br/>";
  if (attr.landuse === "reservoir") type += "reservoir" + "<br/>";
  if (attr.landuse === "residential") type += "residential" + "<br/>";
  if (attr.landuse === "retail") type += "retrail" + "<br/>";
  if (attr.landuse === "salt_pond") type += "salt pond" + "<br/>";
  if (attr.landuse === "village_green") type += "village green" + "<br/>";
  if (attr.landuse === "vineyard") type += "vineyard" + "<br/>";
  if (attr.landuse === "pond") type += "pond" + "<br/>";
  if (attr.landuse === "salt_pond") type += "salt pond" + "<br/>";
  if (attr.landuse === "animal_keeping") type += "animal keeping" + "<br/>";
  if (attr.entrance === "yes") type += "entrance" + "<br/>";
  if (attr.entrance === "main") type += "main-entrance" + "<br/>";
  if (attr.entrance === "service") type += "rear exit for staffing and suppliers" + "<br/>";
  if (attr.entrance === "exit") type += "exit" + "<br/>";
  if (attr.entrance === "emergency") type += "emergency" + "<br/>";
  if (attr.natural === "bay") type += "bay" + "<br/>";
  if (attr.natural === "beach") type += "beach" + "<br/>";
  if (attr.natural === "wood") type += "wood" + "<br/>";
  if (attr.natural === "glacier") type += "glacier" + "<br/>";
  if (attr.natural === "cave_entrance") type += "cave entrance" + "<br/>";
  if (attr.natural === "spring") type += "spring" + "<br/>";
  if (attr.natural === "waterfall") type += "waterfall" + "<br/>";
  if (attr.natural === "scrub") type += "scrub" + "<br/>";
  if (attr.natural === "grassland") type += "grassland" + "<br/>";
  if (attr.natural === "wetland") type += "wetland" + "<br/>";
  if (attr.natural === "tree") type += "tree";
  if (attr.natural === "peak" && attr["summit:cross"] === "yes") type += "cross on the summit of a mountain" + "<br/>";
  if (attr.natural === "tree_row") type += "tree row, alley of trees" + "<br/>";
  if (attr.natural === "heath") type += "heath" + "<br/>";
  if (attr.natural === "moor") type += "moor" + "<br/>";
  if (attr.natural === "grassland") type += "grassland" + "<br/>";
  if (attr.natural === "fell") type += "grasland above the tree land" + "<br/>";
  if (attr.natural === "bare_rock") type += "bare rock" + "<br/>";
  if (attr.natural === "scree") type += "scree" + "<br/>";
  if (attr.natural === "volcano") type += "volcano" + "<br/>";
  if (attr.natural === "valley") type += "valley" + "<br/>";
  if (attr.natural === "stone") type += "stone" + "<br/>";
  if (attr.natural === "sea") type += "sea" + "<br/>";
  if (attr.boundary === "national_park") type += "national park" + "<br/>";
  if (attr.boundary === "protected_area") type += "protected area" + "<br/>";
  if (attr.mountain_pass === "yes") type += "mountain pass" + "<br/>";
  if (attr.waterway === "waterfall") type += "waterfall" + "<br/>";
  if (attr.waterway === "canal") type += "canal" + "<br/>";
  if (attr.water === "canal") type += "canal" + "<br/>";
  if (attr.waterway === "river") type += "river" + "<br/>";
  if (attr.water === "river") type += "river" + "<br/>";
  if (attr.waterway === "riverbank") type += "river" + "<br/>";
  if (attr.waterway === "ditch") type += "ditch" + "<br/>";
  if (attr.waterway === "stream") type += "stream" + "<br/>";
  if (attr.route === "ferry") type += "ferry" + "<br/>";
  if (attr.waterway === "turning_point") type += "turning point" + "<br/>";
  if (attr.water === "lake" || attr.natural === "water") type += "lake" + "<br/>";
  if (attr.water === "cove") type += "cove" + "<br/>";
  if (attr.water === "lagoon") type += "lagoon" + "<br/>";
  if (attr.water === "pond") type += "pond" + "<br/>";
  if (attr.water === "reservoir") type += "waterreservoir" + "<br/>";
  if (attr.water === "oxbow") type += "oxbow lake" + "<br/>";
  if (attr.water === "lock") type += "lock chamber" + "<br/>";
  if (attr.water === "moat") type += "castle moat" + "<br/>";
  if (attr.water === "wastewater") type += "wastewater treatment plant" + "<br/>";
  if (attr.mooring === "guest" && attr.man_made === "pier" || attr["seamark:small_craft_facility:category"] === "visitor_berth") type += "gastrointestinal" + "<br/>";else if (attr.man_made === "pier") type += "pier" + "<br/>";
  if (attr.waterway === "boatyard") type += "boatyard" + "<br/>";
  if (attr["seamark:type"] === "mooring" && attr["seamark:mooring:category"] === "dolphin") type += "dolphin" + "<br/>";
  if (attr.route === "foot") type += "footpath" + "<br/>";
  if (attr.route === "hiking") type += "hiking trail" + "<br/>";
  if (attr.hiking === "yes" && attr.tourism === "information") type += "direction board" + "<br/>";else if (attr.tourism === "information") if (attr.tourism === "information") {
    if (attr.information) {
      switch (attr.information) {
        case "board":
          type += "direction board" + "<br/>";
          break;
        case "map":
          type += "direction board with a map" + "<br/>";
          break;
        case "office":
          type += "tourist information office" + "<br/>";
          break;
        case "terminal":
          type += "tourist information terminal" + "<br/>";
          break;
        case "audioguide":
          type += "audioguide" + "<br/>";
          break;
        case "guidepost":
          type += "guidepost" + "<br/>";
          break;
        case "tactile_map":
          type += "tactile map" + "<br/>";
          break;
        case "tactile_model":
          type += "tactile model" + "<br/>";
          break;
        case "route_marker":
          type += "route marker" + "<br/>";
          break;
        default:
          type += "direction board" + "<br/>";
      }
    } else type += "direction board" + "<br/>";
  }
  if (attr.route === "bicycle") type += "cycle track" + "<br/>";
  if (attr.route === "mtb") type += "mountain bike route" + "<br/>";
  if (attr.route === "horse") type += "bridleway" + "<br/>";
  if (attr.natural === "coastline") type += "coastline" + "<br/>";
  if (attr.natural === "cliff") type += "cliff" + "<br/>";
  if (attr.waterway === "dam") type += "dam" + "<br/>";
  if (attr.waterway === "weir") type += "weir" + "<br/>";
  if (attr.waterway === "lock_gate") type += "lock gate" + "<br/>";
  if (attr.lock === "yes") type += "lock" + "<br/>";
  if (attr.waterway === "sluice_gate") type += "sluice gate" + "<br/>";
  if (attr.man_made === "pumping_station") type += "pumping station" + "<br/>";
  if (attr.man_made === "groyne") type += "groyne" + "<br/>";
  if (attr.man_made === "dyke") type += "dyke" + "<br/>";
  if (attr.man_made === "levee") type += "levee" + "<br/>";
  if (attr.man_made === "watermill") type += "watermill" + "<br/>";
  if (attr.military === "airfield") type += "military airfield" + "<br/>";
  if (attr.military === "naval_base") type += "naval base" + "<br/>";
  if (attr.military === "range") type += "military range" + "<br/>";
  if (attr.landuse === "military") type += "military land use" + "<br/>";
  if (attr.military === "training_area") type += "military training area" + "<br/>";
  if (attr.military === "exclusion_zone") type += "military exclusion zone" + "<br/>";
  if (attr.military === "danger_area") type += "military danger area" + "<br/>";
  if (attr.military === "barracks") type += "barracks" + "<br/>";
  if (attr.military === "nuclear_explosion_site") type += "military nuclear explosion site" + "<br/>";
  if (attr.construction === "yes") type += "construction" + "<br/>";else {
    if (attr.highway === "construction") type += "construction" + "<br/>";
  }
  if (attr.man_made === "petroleum_well") type += "petroleum well" + "<br/>";
  if (attr.man_made === "storage_tank") type += "storage tank" + "<br/>";
  if (attr.man_made === "wastewater_plant") type += "wastewater plant" + "<br/>";
  if (attr.man_made === "silo") type += "silo" + "<br/>";
  if (attr.man_made === "water_tower") type += "water tower" + "<br/>";
  if (attr.man_made === "windmill") type += "windmill" + "<br/>";
  if (attr.man_made === "monitoring_station") type += "monitoring station";
  if (attr.man_made === "crane") type += "crane";
  if (attr.man_made === "lighthouse") type += "lighthouse";
  if (attr.man_made === "beacon") type += "beacon";
  if (attr.man_made === "breakwater") type += "breakwater";
  if (attr.man_made === "lamp" && attr["lamp:type"] === "street_lamp") type += "street lamp" + "<br/>";
  if (attr.light_source === "lantern") type += "street lamp";
  if (attr.light_source === "floodlight") type += "floodlight" + "<br/>";
  if (attr.light_source === "signal_lamp") type += "signal lamp" + "<br/>";
  if (attr.light_source === "aviation") type += "aviation" + "<br/>";
  if (attr.light_source === "warning") type += "warning" + "<br/>";
  if (attr.light_source) {
    if (attr["light:method"]) {
      type += "Light Typ: ";
      switch (attr["light:method"]) {
        case "gas":
          type += "Gas";
          break;
        case "electric":
          type += "electric";
          break;
        case "incandescent":
          type += "incandescent";
          break;
        case "halogen":
          type += "halogen";
          break;
        case "discharge":
          type += "discharge";
          break;
        case "metal-halide":
          type += "metal-halide";
          break;
        case "neon":
          type += "neon";
          break;
        case "sodium":
          type += "Natriumdampflampe";
          break;
        case "high_pressure_sodium":
          type += "high pressure sodium";
          break;
        case "low_pressure_sodium":
          type += "low pressure sodium";
          break;
        case "fluorescent":
          type += "Fluorescent";
          break;
        case "mercury":
          type += "Mercury";
          break;
        case "LED":
          type += "LED";
          break;
        case "laser":
          type += "Laser";
          break;
        case "arc":
          type += "Arc";
          break;
        default:
          type += "Unkown";
      }
    }
  }
  if (attr.amenity === "drinking_water") type += "drinking water" + "<br/>";
  if (attr.drinking_water === "yes") type += "drinking water" + "<br/>";
  if (attr.man_made === "works") type += "industrial building" + "<br/>";else if (attr.building === "industrial") type += "industrial building" + "<br/>";else if (attr.landuse === "industrial") type += "industrial area" + "<br/>";else if (attr.abutters === "industrial") type += "industrial area" + "<br/>";else if (attr.abutters === "commercial") type += "commercial" + "<br/>";
  if (attr["generator:source"]) {
    type += "installation: ";
    switch (attr["generator:source"]) {
      case "biomass":
        type += "biomass";
        break;
      case "biofuel":
        type += "biofuel";
        break;
      case "biogas":
        type += "biogas";
        break;
      case "coal":
        type += "coal";
        break;
      case "oil":
        type += "oil";
        break;
      case "waste":
        type += "waste";
        break;
      case "wind":
        type += "wind";
        break;
      case "solar":
        type += "solar";
        break;
      case "hydro":
        type += "hydro";
        break;
      case "tidal":
        type += "tidal";
        break;
      case "wave":
        type += "wave";
        break;
      case "geothermal":
        type += "geothermal";
        break;
      case "osmotic":
        type += "osmotic";
        break;
      case "nuclear":
        type += "nuclear";
        break;
      default:
        type += "unknown" + "<br/>";
    }
  }
  if (attr.power_source === "photovoltaic") type += "photovoltaic";
  if (attr.power === "line") type += "power line" + "<br/>";
  if (attr.power === "cable") type += "cable" + "<br/>";
  if (attr.power === "cable_distribution_cabinet") type += "cable distribution cabinet" + "<br/>";
  if (attr.power === "plant") type += "plant" + "<br/>";
  if (attr.power === "station") type += "station" + "<br/>";
  if (attr.power === "sub_station") type += "substation" + "<br/>";
  if (attr.power === "compensator") type += "compensator" + "<br/>";
  if (attr.power === "converter") type += "converter" + "<br/>";
  if (attr.power === "generator") type += "generator" + "<br/>";
  if (attr.power === "heliostat") type += "heliostat" + "<br/>";
  if (attr.power === "insulator") type += "insulator" + "<br/>";
  if (attr.line === "busbar") type += "busbar" + "<br/>";
  if (attr.line === "bay") type += "bay" + "<br/>";
  if (attr.power === "minor_line") type += "minor line" + "<br/>";
  if (attr.power === "pole") type += "pole" + "<br/>";
  if (attr.power === "portal") type += "portal" + "<br/>";
  if (attr.power === "catenary_mast") type += "catenary mast" + "<br/>";
  if (attr.power === "substation") type += "substation" + "<br/>";
  if (attr.power === "switch") type += "switch" + "<br/>";
  if (attr.power === "terminal") type += "terminal" + "<br/>";
  if (attr.power === "tower") type += "tower" + "<br/>";
  if (attr.power === "transformer") type += "transformer" + "<br/>";
  if (attr.barrier) {
    switch (attr.barrier) {
      case "bollard":
        type += "bollard" + "<br/>";
        break;
      case "cycle_barrier":
        type += "cycle barrier" + "<br/>";
        break;
      case "gate":
        type += "gate" + "<br/>";
        break;
      case "chain":
        type += "chain" + "<br/>";
        break;
      case "lift_gate":
        type += "lift gate" + "<br/>";
        break;
      case "wall":
        type += "wall" + "<br/>";
        break;
      case "toll_booth":
        type += "toll booth" + "<br/>";
        break;
      case "fence":
        switch (attr.fence_type) {
          case "barbed_wire":
            type += "barbed wire" + "<br/>";
            break;
          case "wood":
            type += "wood" + "<br/>";
            break;
          case "chain_link":
            type += "chain link" + "<br/>";
            break;
          case "electric":
            type += "electric" + "<br/>";
            break;
          case "railing":
            type += "railing" + "<br/>";
            break;
          case "wire":
            type += "wire" + "<br/>";
            break;
          case "metal":
            type += "metal" + "<br/>";
            break;
          case "pole":
            type += "pole" + "<br/>";
            break;
          default:
            type += "fence" + "<br/>";
        }
        break;
      case "block":
        type += "block" + "<br/>";
        break;
      case "ditch":
        type += "ditch" + "<br/>";
        break;
      case "border_control":
        type += "border control" + "<br/>";
        break;
      case "hedge":
        type += "hedge" + "<br/>";
        break;
      case "retaining_wall":
        type += "retaining wall" + "<br/>";
        break;
      case "cattle_grid":
        type += "cattle grid" + "<br/>";
        break;
      case "horse_stile":
        type += "horse stile" + "<br/>";
        break;
      default:
        type += "unknown" + "<br/>";
    }
  }
  if (attr.wall === "noise_barrier") type += "noise barrier" + "<br/>";
  if (attr.designation === "retaining_wall") type += "noise barrier" + "<br/>";
  if (attr.designation === "noise_barrier") type += "noise barrier" + "<br/>";
  if (attr.man_made === "surveillance") type += "surveillance" + "<br/>";
  if (attr.aeroway) {
    type += "airport: ";
    switch (attr.aeroway) {
      case "aerodrome":
        type += "airport";
        break;
      case "apron":
        type += "apron";
        break;
      case "gate":
        type += "gate";
        break;
      case "helipad":
        type += "helipad";
        break;
      case "hangar":
        type += "hangar";
        break;
      case "runway":
        type += "runway";
        break;
      case "taxiway":
        type += "taxiway";
        break;
      case "terminal":
        type += "terminal";
        break;
      default:
        type += "unknown" + "<br/>";
    }
  }
  if (attr.railway === "stop") type += "railway stop" + "<br/>";
  if (attr.railway === "crossing") type += "crossing" + "<br/>";
  if (attr.railway === "level_crossing") type += "lvel crossing" + "<br/>";
  if (attr.railway === "station") type += "station" + "<br/>";
  if (attr.amenity === "bus_station") type += "bus station" + "<br/>";
  if (!attr.amenity === "bus_station" && attr.public_transport === "station" && attr.bus === "yes") type += "bus station" + "<br/>";
  if (attr.railway === "rail") {
    type += "railway" + "<br/>";
    if (attr.electrified === "contact_line") type += "overhead contact line" + "<br/>";
  }
  if (attr.railway === "tram") type += "tram" + "<br/>";
  if (attr["seamark:small_craft_facility:category"] === "slipway" || attr.harbour === "slipway" || attr.leisure === "slipway") type += "slipway" + "<br/>";
  if (attr["seamark:type"] === "harbour") {
    if (attr["seamark:harbour:category"]) {
      switch (attr["seamark:harbour:category"]) {
        case "ferry":
          type += "ferry" + "<br/>";
          break;
        case "container":
          type += "container" + "<br/>";
          break;
        case "marina":
          if (attr.leisure !== "marina") {
            type += "marina" + "<br/>";
          }
          break;
        case "navel_base":
          type += "navel base" + "<br/>";
          break;
        case "tanker":
          type += "tanker" + "<br/>";
          break;
        case "passenger":
          type += "passenger" + "<br/>";
          break;
        case "bulk":
          type += "bulk" + "<br/>";
          break;
        default:
          type += "habour" + "<br/>";
      }
    } else type += "habour" + "<br/>";
  }
  if (attr.leisure === "marina") type += "marina" + "<br/>";
  if (attr.historic === "wreck") type += "wreck" + "<br/>";
  if (attr.amenity === "animal_shelter") type += "animal shelter" + "<br/>";
  if (attr.animal === "shelter") type += "shelter" + "<br/>";
  if (attr.animal === "horse_walker") type += "horse walker" + "<br/>";
  if (attr.animal_shelter === "yes") type += "animal shelter" + "<br/>";
  if (attr.animal_shelter === "dog") type += "animal shelter" + "<br/>";
  if (attr.animal_shelter === "cat") type += "animal shelter" + "<br/>";
  if (attr.amenity === "animal_boarding") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "yes") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "dog") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "horse") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "cat") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "dog;cat") type += "animal boarding" + "<br/>";
  if (attr.animal_boarding === "cat;dog") type += "animal boarding" + "<br/>";
  if (attr.animal === "school" || attr.animal === "sport" || attr.amenity === "animal_training") type += "animal training" + "<br/>";
  if (attr.animal === "swimming") type += "swimming for dogs" + "<br/>";
  if (attr.amenity === "feeding_place" || attr.man_made === "animal_feeding" || attr.amenity === "animal_feeding") type += "animal feeding" + "<br/>";
  if (attr.amenity === "wildlife_feeding" || attr.amenity === "deer_feeding" || attr.amenity === "game_feeding") type += "wildlife feeding" + "<br/>";
  if (attr.amenity === "cratch" || attr.man_made === "cratch" || attr.amenity === "feeding_rack") type += "feeding rack" + "<br/>";
  if (attr.amenity === "manger") type += "manger" + "<br/>";
  if (attr.man_made === "birdhouse") type += "birdhouse" + "<br/>";
  if (attr.birds_nest === "stork") type += "storck" + "<br/>";
  if (attr.amenity === "nest_box") type += "nest box" + "<br/>";
  if (attr.animal === "wellness") type += "dog parlour" + "<br/>";
  if (attr.animal === "cemetery") type += "small animal cemetery" + "<br/>";
  if (attr.building === "stable" || attr["building:use"] === "stable") type += "stable" + "<br/>";
  if (attr.building === "cowshed") type += "cowshed" + "<br/>";
  if (attr.building === "sty") type += "sty" + "<br/>";
  if (attr.building === "barn") type += "barn" + "<br/>";
  if (attr.building === "farm_auxiliary") type += "farm auxiliary" + "<br/>";
  if (attr["river:waterway_distance"] || attr.waterway === "milestone") type += "milestone of waterway distance" + "<br/>";
  if (attr.highway === "milestone") type += "milestone" + "<br/>";
  if (attr["xmas:feature"] === "market") type += "Christmas fair" + "<br/>";
  if (attr["xmas:feature"] === "tree") type += "sale of Chrismas trees" + "<br/>";
  if (attr["xmas:feature"] === "event") type += "Chrismas event" + "<br/>";
  if (attr["xmas:feature"] === "pyramid") type += "Chrismas pyramid" + "<br/>";
  type = '<div class="c4g_popup_header_featuretype">' + type + "<br/> </div>";
  return type;
}
var fnContent = exports.fnContent = function fnContent(attr) {
  var content = "";
  content += fnContentGeneralInformations(attr);
  content += fnContentHealthcare(attr);
  content += fnContentAerodrome(attr);
  content += fnContentCuisine(attr);
  content += fnContentShipping(attr);
  content += fnContentHydrants(attr);
  content += fnContentSports(attr);
  content += fnContentStreetsTraffic(attr);
  content += fnContentInformationCity(attr);
  content += fnContentEmergency(attr);
  content += fnContentStorage(attr);
  content += fnContentAmenity(attr);
  content += fnContentTourism(attr);
  content += fnContentRoute(attr);
  content += fnContentPetrol(attr);
  content += fnContentBarriers(attr);
  content += fnContentLanduse(attr);
  content += fnContentNatural(attr);
  content += fnKlosterAdditional(attr);
  content += fnSicherheitAdditional(attr);
  content += fnAdditionalBuildingInfos(attr);
  content += fnKraftwerkInfo(attr);
  content += fnMessstation(attr);
  content += fnWertstoffinfo(attr);
  content += fnContentProtectedArea(attr);
  if (content) {
    content = "<br/>" + content;
  }
  content = '<div class="c4g_popup_content">' + content + "</div>";
  return content;
};
var fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(attr) {
  var ret = "";
  if (attr.aerodrome) {
    if (attr.aerodrome === "international") ret += "type of airport: international" + "<br/>";
    if (attr.aerodrome === "regional") ret += "type of airport: regional" + "<br/>";
    if (attr.aerodrome === "gliding") ret += "type of airport: gliding" + "<br/>";
    if (attr.aerodrome === "private") ret += "type of airport: private" + "<br/>";
  }
  if (attr.iata) ret += "IATA-Code: " + attr.iata + "<br/>";
  if (attr.icao) ret += "ICAO-Code: " + attr.icao + "<br/>";
  return ret;
};
var fnContentNatural = exports.fnContentNatural = function fnContentNatural(attr) {
  var ret = "";
  if (attr.forest || attr.wood) {
    if (attr.leaf_type === "broadleaved" || attr.wood === "deciduous") ret += "broadleaved" + "<br/>";
    if (attr.leaf_type === "needleleaved" || attr.wood === "coniferous") ret += "needleleaved" + "<br/>";
    if (attr.leaf_type === "mixed" || attr.wood === "mixed") ret += "mixed" + "<br/>";
    if (attr.leaf_type === "leafless") ret += "leafless" + "<br/>";
    if (attr.wood === "evergreen") ret += "evergreen" + "<br/>";
    if (attr.wood === "palm") ret += "palm" + "<br/>";
    if (attr.wood === "nipa_palm") ret += "nipa palm" + "<br/>";
    if (attr.wood === "eucalypt") ret += "eucalypt" + "<br/>";
    if (attr.wood === "filao" || attr.wood === "casuarina") ret += "casuarina" + "<br/>";
  }
  if (attr.natural === "tree") {
    if (!attr["genus:de"] && !attr["species:de"]) {
      if (attr.leaf_type) if (attr.leaf_type === "broadleaved" || attr.leaf_type === "deciduous" || attr.leaf_type === "broadleafed") ret += "broad-leaved" + "<br/>";else ret += "conifer" + "<br/>";
    }
    if (attr.genus) ret += attr.genus + "<br/>";
    if (attr["genus:de"]) ret += attr["genus:de"] + "<br/>";
    if (attr.species) ret += attr.species + "<br/>";
    if (attr["species:de"]) ret += attr["species:de"] + "<br/>";
    if (attr.denotation === "landmark") ret += "landmark" + "<br/>";
    if (attr.denotation === "natural_monument" || attr.monument === "yes") ret += "natural monument" + "<br/>";
  }
  if (attr["feeding:type"] === "manger") ret += "manger:" + "rack for fodder" + "<br/>";
  if (attr["feeding:type"] === "automated") ret += "automated" + "<br/>";
  if (attr["feeding:for"]) {
    switch (attr["feeding:for"]) {
      case "sheep":
        ret += "animal: sheep" + "<br/>";
        break;
      case "horse":
        ret += "animal: horse" + "<br/>";
        break;
      case "cow":
        ret += "animal: cow" + "<br/>";
        break;
      case "rabbit":
        ret += "animal: rabbit" + "<br/>";
        break;
      case "bunny":
        ret += "animal: bunny" + "<br/>";
        break;
      case "cat":
        ret += "animal: cat " + "</br>";
        break;
      case "swan":
        ret += "animal: swan " + "</br>";
        break;
      case "guinea pig":
        ret += "animal: guinea pig " + "</br>";
        break;
      case "donkey":
        ret += "animal: donkey " + "</br>";
        break;
      case "squirrel":
        ret += "animal: squirrel " + "</br>";
        break;
      case "pig":
        ret += "animal: pig " + "</br>";
        break;
      case "deer":
        ret += "animal: deer " + "</br>";
        break;
      case "guinea pig":
        ret += "animal: guinea pig " + "</br>";
        break;
      case "monkey":
        ret += "animal: monkey " + "</br>";
        break;
      case "camel":
        ret += "animal: camel " + "</br>";
        break;
      case "goat":
        ret += "animal: goat " + "</br>";
        break;
      case "hamster":
        ret += "animal: hamster " + "</br>";
        break;
      case "alpaca":
        ret += "animal: alpaca " + "</br>";
        break;
      default:
        ret += "animal: unknown" + "<br/>";
    }
  }
  if (attr["feeding:fodder"]) {
    switch (attr["feeding:fodder"]) {
      case "hay":
        ret += "feed with: hay" + "</br>";
        break;
      case "grain":
        ret += "feed with: grain" + "</br>";
        break;
      case "corn":
        ret += "feed with: corn" + "</*br>";
        break;
      default:
        ret += "feed with: unknown" + "</br>";
    }
  }
  if (attr.natural === "volcano" && attr.status === "active") ret += "active volcano" + "<br/>";
  if (attr.natural === "volcano" && attr.status === "dormant") ret += "dormant volcano" + "<br/>";
  if (attr.natural === "volcano" && attr.status === "extinct") ret += "extinct volcano" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "stratovolcano") ret += "type of volcanism:" + "stratovolcano" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "shield") ret += "type of volcanism:" + "shield" + "<br/>";
  if (attr.natural === "volcano" && attr.type === "scoria") ret += "type of volcanism:" + "scoria" + "<br/>";
  return ret;
};
var fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(attr) {
  var ret = "";
  var id = "";
  if (attr.boundary === "protected_area") {
    if (attr.protect_class) id = attr.protect_class;
    if (attr.protect_id) id = attr.protect_id;
    if (id === "1") ret = "description: " + "Strict Nature Reserve, Wilderness Area" + "<br/>";
    if (id === "2") ret = "description: " + "National Park" + "<br/>";
    if (id === "3") ret = "description: " + "Natural Monument or Feature" + "<br/>";
    if (id === "4") ret = "description: " + "Habitat/Species Management Area" + "<br/>";
    if (id === "5") ret = "description: " + "Protected Landscape/ Seascape" + "<br/>";
    if (id === "6") ret = "description: " + "Protected area with sustainable use of natural resources" + "<br/>";
    if (id === "7") ret = "description: " + "nature-feature area" + "<br/>";
    if (id === "97") ret = "description: " + "protected by continental agreements" + "<br/>";
    if (id === "98") ret = "description: " + "protected by interstate- or international conventions" + "<br/>";
    if (id === "99") ret = "other continental or international national protected areas " + "<br/>";
    if (id === "21") ret = "description: " + "Community life: religious, sacred areas, associative locations, recreation" + "<br/>";
    if (id === "22") ret = "description: " + "Cultural assets (cultural assets and - efforts, districts historical heritage, monument conservation)" + "<br/>";
    if (id === "23") ret = "description: " + "Protection in favor of economics" + "<br/>";
    if (id === "24") ret = "description: " + "Political protection" + "<br/>";
    if (id === "25") ret = "description: " + "Military areas (military refuges, test area)" + "<br/>";
    if (id === "26") ret = "description: " + "Historic: for colonial-stuff and protectorates." + "<br/>";
    if (id === "29") ret = "description: " + "other social protected areas" + "<br/>";
    if (id === "11") ret = "description: " + "soil: crop yield, erosion protection, ..." + "<br/>";
    if (id === "12") ret = "description: " + "water: water protection area, fresh water, drinking water, springs, ..." + "<br/>";
    if (id === "13") ret = "description: " + 'climate and -air: gasper supply/cold air, ...for emission-, immission control in OSM existent, see "Low Emission Zone" (LEZ)' + "<br/>";
    if (id === "14") ret = "description: " + "species: no fishing, protected for fishery, protected for hunting, plants, ..." + "<br/>";
    if (id === "15") ret = "description: " + "location condition: floodwater retention area, protection forest, grazing land, ..." + "<br/>";
    if (id === "16") ret = "description: " + 'longtime hazard area: contamination, earth-moving area, "problem sites" ...' + "<br/>";
    if (id === "19") ret = "description: " + "other national resources protected areas" + "<br/>";
  }
  return ret;
};
var fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(attr) {
  var ret = "";
  if (attr.landuse === "quarry") {
    if (attr.resource) ret += "Resource: " + attr["resource"] + "<br/>";
  }
  if (attr["animal_keeping:type"] === "open_stable") ret += "open stable" + "<br/>";
  if (attr["animal_keeping:type"] === "field_shelter") ret += "field shelter" + "<br/>";
  if (attr["animal_keeping:type"] === "paddock") ret += "paddock" + "<br/>";
  if (attr.animal_keeping) ret += "animals: " + "horses" + "<br/>";
  return ret;
};
var fnMessstation = exports.fnMessstation = function fnMessstation(attr) {
  var ret = "";
  if (attr["monitoring:water_level"] === "yes") ret += "water level" + "<br/>";
  if (attr["monitoring:seismic_activity"] === "yes") ret += "seismic activity" + "<br/>";
  if (attr["monitoring:tide_gauge"] === "yes") ret += "tide gauge" + "<br/>";
  if (attr["monitoring:weather"] === "yes") ret += "weather" + "<br/>";
  if (attr["monitoring:air_quality"] === "yes") ret += "air quality" + "<br/>";
  return ret;
};
var fnContentRoute = exports.fnContentRoute = function fnContentRoute(attr) {
  var ret = "";
  if (attr.route) {
    if (attr.roundtrip === "yes") ret += "roundtrip" + "<br/>";
    if (attr.length) ret += "length: " + attr.length + "<br/>";
    if (attr.distance) ret += "distance: " + attr.distance + "<br/>";
    if (attr.symbol) ret += "symbol: " + attr.symbol + "<br/>";
  }
  return ret;
};
var fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(attr) {
  var ret = "";
  if (attr.amenity === "fuel") {
    if (attr["fuel:biodiesel"] === "yes") ret += "biodiesel" + "<br/>";
    if (attr["fuel:e85"] === "yes") ret += "e85" + "<br/>";
    if (attr["fuel:e10"] === "yes") ret += "e10" + "<br/>";
    if (attr["fuel:lpg"] === "yes") ret += "lpg" + "<br/>";
    if (attr["fuel:cng"] === "yes") ret += "cng" + "<br/>";
    if (attr.fuel === "diesel") ret += "diesel" + "<br/>";
    if (attr.fuel === "lpg") ret += "lpg" + "<br/>";
    if (attr["fuel:octane_95"] === "yes") ret += "octane 95" + "<br/>";
    if (attr["fuel:octane_98"] === "yes") ret += "octane 98" + "<br/>";
    if (attr["fuel:octane_100"] === "yes") ret += "octane 100" + "<br/>";
    if (attr["fuel:octane_102"] === "yes") ret += "octane 102" + "<br/>";
    if (attr["fuel:diesel"] === "yes") ret += "diesel" + "<br/>";
    if (attr["fuel:electricity"] === "yes") ret += "charging station / loading station" + "<br/>";
  }
  return ret;
};
var fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(attr) {
  var ret = "";
  if (attr.historic === "archaeological_site") {
    if (attr.site_type) {
      switch (attr.site_type) {
        case "megalith":
          ret += "megalith" + "<br/>";
          break;
        case "bigstone":
          ret += "bigstone" + "<br/>";
          break;
        case "tumulus":
          ret += "tumulus" + "<br/>";
          break;
        case "fortification":
          ret += "fortification" + "<br/>";
          break;
        default:
          ret += "unknown" + "<br/>";
      }
    }
  }
  return ret;
};
var fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(attr, content) {
  var ret = "";
  if (attr.barrier === "wall" || attr.barrier === "bollard") {
    if (attr.material) ret += "material: " + translate(attr["material"]) + "<br/>";
  }
  return ret;
};
var fnContentTourism = exports.fnContentTourism = function fnContentTourism(attr) {
  var ret = "";
  if (attr.tourism === "camp_site") {
    if (attr.dog === "yes") {
      ret += "dogs allowed" + "<br/>";
    }
    if (attr.dog === "no") {
      ret += "dogs forbidden" + "<br/>";
    }
    if (attr.stars) {
      var stars = attr.stars;
      ret += stars + "stars" + "<br/>";
    }
    if (attr.caravans) {
      ret += "caravan sites" + "<br/>";
    }
    if (attr.openfire === "yes" || attr.fireplace === "yes") {
      ret += "Thers is an openfire. " + "<br/>";
    }
    if (attr.washing_machine === "yes") {
      ret += "washing machine" + "<br/>";
    }
    if (attr.dryer === "yes") {
      ret += "dryer" + "<br/>";
    }
    if (attr.group_only === "yes") {
      ret += "use for groups only" + "<br/>";
    }
    if (attr.camp_site === "reception") {
      ret += "reception available" + "<br/>";
    }
  }
  if (attr.tourism === "information" && attr.information === "map") {
    if (attr.map_type === "topo") ret += "topo" + "</br>";
    if (attr.map_type === "street") ret += "street" + "</br>";
    if (attr.map_type === "scheme") ret += "scheme" + "</br>";
    if (attr.map_type === "toposcope") ret += "toposcope" + "</br>";
  }
  if (attr.tourism === "information" && attr.information === "map") {
    if (attr.map_size === "site") ret += "map of site" + "</br>";
    if (attr.map_size === "city") ret += "city map" + "</br>";
    if (attr.map_size === "region") ret += "map of region" + "</br>";
  }
  if (attr.board_type === "geology") ret += "geologic information" + "<br/>";
  if (attr.board_type === "history") ret += "historic information" + "<br/>";
  if (attr.board_type === "nature") ret += "information about nature" + "<br/>";
  if (attr.board_type === "notice") ret += "general information" + "<br/>";
  if (attr.board_type === "plants") ret += "information about plants" + "<br/>";
  if (attr.board_type === "wildlife") ret += "information about wildlife" + "<br/>";
  return ret;
};
var fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(attr) {
  var ret = "";
  if (attr.amenity === "boat_sharing") ret += attr.boattype + "<br/>";
  if (attr.amenity === "embassy") ret += attr.country + "<br/>";
  if (attr.vending) {
    switch (attr.vending) {
      case "admission_tickets":
        ret += "tickets" + "<br/>";
        break;
      case "animal_feed":
        ret += "animal feed" + "<br/>";
        break;
      case "books":
        ret += "books" + "<br/>";
        break;
      case "candles":
        ret += "candles" + "<br/>";
        break;
      case "cigarettes":
        ret += "cigarettes" + "<br/>";
        break;
      case "condoms":
        ret += "condoms" + "<br/>";
        break;
      case "drinks":
        ret += "drinks" + "<br/>";
        break;
      case "first_aid":
        ret += "first aid articles" + "<br/>";
        break;
      case "fishing_tackle":
        ret += "fishing tackle" + "<br/>";
        break;
      case "flowers":
        ret += "flowers" + "<br/>";
        break;
      case "ice_cream":
        ret += "ice cream" + "<br/>";
        break;
      case "laundry_detergent":
        ret += "laundry detergent" + "<br/>";
        break;
      case "newspapers":
        ret += "newspapers" + "<br/>";
        break;
      case "SIM_cards":
        ret += "sIM-cards" + "<br/>";
        break;
      case "sweets":
        ret += "sweets" + "<br/>";
        break;
      case "parcel_pickup":
        ret += "parcel pickup" + "<br/>";
        break;
      case "ice_cubes":
        ret += "ice cubes" + "<br/>";
        break;
      case "public_transport_tickets":
        ret += "public transport tickets" + "<br/>";
        break;
      case "parking_ticket":
        ret += "parking tickets" + "<br/>";
        break;
      case "sex_toys":
        ret += "sex toys" + "<br/>";
        break;
      case "stamps":
        ret += "stamps" + "<br/>";
        break;
      case "toll":
        ret += "toll" + "<br/>";
        break;
      case "umbrellas":
        ret += "umbrellas" + "<br/>";
        break;
      default:
        ret += "content unknown" + "<br/>";
    }
  }
  if (attr.amenity === "post_box") {
    if (attr.collection_times) ret += "collection times: " + attr.collection_times + "<br/>";
    if (attr.drive_through === "yes") ret += "accessible by car. <br/>";
  }
  return ret;
};
var fnContentStorage = exports.fnContentStorage = function fnContentStorage(attr) {
  var ret = "";
  if (attr.man_made === "storage_tank") {
    if (attr["content"]) {
      var contGerman = attr["content"];
      switch (contGerman) {
        case "fuel":
          contGerman = "fuel";
          break;
        case "oil":
          contGerman = "oil";
          break;
        case "gas":
          contGerman = "gas";
          break;
        case "slurry":
          contGerman = "slurry";
          break;
        case "cement":
          contGerman = "cement";
          break;
        case "water":
          contGerman = "water";
          break;
        case "manure":
          contGerman = "manure";
          break;
        case "silage":
          contGerman = "silage";
          break;
      }
      ret += "content: " + contGerman + "<br/>";
    }
    if (attr["contents"]) {
      var contGerman = attr["contents"];
      switch (contGerman) {
        case "fuel":
          contGerman = "fuel";
          break;
        case "oil":
          contGerman = "oil";
          break;
        case "gas":
          contGerman = "gas";
          break;
        case "slurry":
          contGerman = "slurry";
          break;
        case "cement":
          contGerman = "cement";
          break;
        case "water":
          contGerman = "water";
          break;
        case "manure":
          contGerman = "manure";
          break;
        case "silage":
          contGerman = "silage";
          break;
      }
      ret += "content: " + contGerman + "<br/>";
    }
  }
  if (attr.storage) {
    if (attr.storage === "gas") {
      ret += "content: gas" + "<br/>";
    }
    if (attr.storage === "oil") {
      ret += "content: oil" + "<br/>";
    }
  }
  return ret;
};
var fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(attr) {
  var ret = "";
  if (attr["name:de"]) {
    ret += "german name: " + attr["name:de"] + "<br/>";
  }
  if (attr.population >= 1e4) {
    attr.population = "" + attr.population;
    if (attr.population.length > 3) {
      var mod = attr.population.length % 3;
      var output = mod > 0 ? attr.population.substring(0, mod) : "";
      for (i = 0; i < Math.floor(attr.population.length / 3); i++) {
        if (mod === 0 && i === 0) output += attr.population.substring(mod + 3 * i, mod + 3 * i + 3);else output += "." + attr.population.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      ret += "population: " + output + "<br/>";
    } else ret += "population " + attr["population"] + "<br/>";
  }
  if (attr.population <= 1e4) {
    ret += "population: " + attr["population"] + "<br/>";
  }
  return ret;
};
var fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(attr) {
  var ret = "";
  if (attr.lifeboat) {
    if (attr.lifeboat === "inshore") ret += "application: inshore" + "<br/>";else if (attr.lifeboat === "offshore") ret += "application: offshore" + "<br/>";
  }
  if (attr["lifeboat:class"]) ret += "type of boat: " + attr["lifeboat:class"] + "<br/>";
  if (attr["siren:type"]) {
    var contGerman = attr["siren:type"];
    switch (contGerman) {
      case "mechanical":
        contGerman = "mechanical";
        break;
      case "electronic":
        contGerman = "electronic";
        break;
      case "pneumatic":
        contGerman = "pneumatic";
        break;
      case "electromechanic":
        contGerman = "electromechanic";
        break;
    }
    ret += "Typ: " + contGerman + "<br/>";
  }
  if (attr["siren:purpose"]) {
    var contGerman = attr["siren:purpose"];
    switch (contGerman) {
      case "air_raid":
        contGerman = "air raid";
        break;
      case "tornado":
        contGerman = "tornado";
        break;
      case "storm":
        contGerman = "storm";
        break;
      case "civil_defense":
        contGerman = "civil defence";
        break;
      case "fire":
        contGerman = "fire";
        break;
    }
    ret += "use: " + contGerman + "<br/>";
  }
  if (attr["siren:model"]) ret += "model: " + attr["siren:model"] + "<br/>";
  if (attr["siren:range"]) ret += "range of siren: " + attr["siren:range"] + "<br/>";
  return ret;
};
var fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(attr) {
  var ret = "";
  if (attr.cuisine) {
    var cuisine = "";
    if ((attr.shop === "supermarket" || attr.shop === "convenience" || attr.shop === "deli" || attr.shop === "organic") && attr.amenity !== "restaurant") ret += "specialties: ";else ret += "cuisine: ";
    if (attr.cuisine === "arabic") cuisine += "arabic" + "<br/>";
    if (attr.cuisine === "italian") cuisine += " italian" + "<br/>";
    if (attr.cuisine === "international") cuisine += " international" + "<br/>";
    if (attr.cuisine === "regional") cuisine += " regional" + "<br/>";
    if (attr.cuisine === "chinese") cuisine += " chinese" + "<br/>";
    if (attr.cuisine === "greek") cuisine += " greek" + "<br/>";
    if (attr.cuisine === "african") cuisine += " african" + "<br/>";
    if (attr.cuisine === "german") cuisine += " german" + "<br/>";
    if (attr.cuisine === "mexican") cuisine += " mexican" + "<br/>";
    if (attr.cuisine === "french") cuisine += " french" + "<br/>";
    if (attr.cuisine === "indian") cuisine += " indian" + "<br/>";
    if (attr.cuisine === "iranian") cuisine += " iranian" + "<br/>";
    if (attr.cuisine === "lebanese") cuisine += " lebanese" + "<br/>";
    if (attr.cuisine === "thai") cuisine += " thai" + "<br/>";
    if (attr.cuisine === "balkan") cuisine += " balkan" + "<br/>";
    if (attr.cuisine === "turkish") cuisine += " turkish" + "<br/>";
    if (attr.cuisine === "bavarian") cuisine += " bavarian" + "<br/>";
    if (attr.cuisine === "czech") cuisine += " czech" + "<br/>";
    if (attr.cuisine === "portuguese") cuisine += " portuguese" + "<br/>";
    if (attr.cuisine === "spanish") cuisine += " spanish" + "<br/>";
    if (attr.cuisine === "japanese") cuisine += " japanese" + "<br/>";
    if (attr.cuisine === "fish") cuisine += " fish" + "<br/>";
    if (attr.cuisine === "brazilian") cuisine += " brazilian" + "<br/>";
    if (attr.cuisine === "asian") cuisine += " asian" + "<br/>";
    if (attr.cuisine === "mediterranean") cuisine += "mediterranean" + "<br/>";
    if (attr.cuisine === "seafood") cuisine += " seafood" + "<br/>";
    if (attr.cuisine === "ice_cream") cuisine += " ice cream" + "<br/>";
    if (attr.cuisine === "burger") cuisine += " burger" + "<br/>";
    if (attr.cuisine === "frozen_yogurt") cuisine += " frozen yogurt" + "<br/>";
    if (cuisine === "") cuisine = attr.cuisine + "<br/>";
    ret += cuisine;
  }
  return ret;
};
var fnContentShipping = exports.fnContentShipping = function fnContentShipping(attr) {
  var ret = "";
  if (attr.harbour = "yes") {
    if (attr["access:tide"] === "yes") ret += "Access restricted by tide" + "</br>";
    if (attr["access:swell"] === "yes") ret += "access restricted by swell" + "</br>";
    if (attr["access:ice"] === "yes") ret += "access restricted by ice" + "</br>";
    if (attr.vhf_channel) ret += "UKW-Channel: " + attr.vhf_channel + "</br>";
    if (attr.mmsi) ret += "MMSI-Number: " + attr.mmsi + "</br>";
    if (attr["harbour:information"]) ret += "information :" + attr["harbour:information"] + "</br>";
  }
  if (attr.motorboat === "yes") ret += "motorboat allowed" + "</br>";
  if (attr.motorboat === "no") ret += "motorboat prohibited " + "</br>";
  if (attr.CEMT) ret += "CEMT: " + attr.CEMT + "</br>";
  if (attr.intermittent === "yes") ret += "river intermittent dried out" + "</br>";
  if (attr.tidal === "yes") ret += "tidal influence the flow" + "</br>";
  if (attr.draft) ret += " driving depth of water: " + attr.draft + " m</br>";
  if (attr.leisure === "slipway" || attr.harbour === "slipway") {
    if (attr.operating === "hand") ret += "operating: by hand" + "<br/>";
    if (attr.operating === "car") ret += "operating: by car, boat trailer" + "<br/>";
    if (attr.operating === "cable_winch") ret += "operating: with cable winch" + "<br/>";
    if (attr.operating === "travellift") ret += "operating: by travellift" + "<br/>";
    if (attr.man_made === "crane") {
      ret += "by crane" + "<br/>";
      if (attr["crane:maxload"]) ret += "maxload: " + attr["crane:maxload"] + "<br/>";
      if (attr["ship:maxdraft"]) ret += "maximum permissible draught: " + attr["ship:maxdraft"] + "<br/>";
      if (attr["ship:maxlength"]) ret += "maximum permissible length of a ship: " + attr["ship:maxlength"] + "<br/>";
    }
    if (attr.vehicle === "yes") ret += "accessible by vehicle" + "<br/>";
  }
  ret += fnWreckInfo(attr);
  if (attr.route === "ferry" || attr.amenity === "ferry_terminal" || attr.ferry === "yes") {
    var duration;
    fahrzeit = attr.duration;
    if (fahrzeit !== "" && fahrzeit !== "undefined" && fahrzeit != null) ret += "duration in hours : " + fahrzeit + "<br/>";
    if (attr.motorcar === "yes") ret += "motorcars allowed" + "<br/>";
    if (attr.motorcar === "no") ret += "motorcars prohibited" + "<br/>";
    if (attr.motor_vehicle === "no") ret += "motor vehicles prohibited" + "<br/>";
    if (attr.motor_vehicle === "yes") ret += "motor vehicles allowed" + "<br/>";
    if (attr.vehicle === "yes") ret += "vehicles allowed" + "<br/>";
    if (attr.vehicle === "no") ret += "no vehicles" + "<br/>";
    if (attr.bicycle === "no") ret += "no bicycles" + "<br/>";
    if (attr.bicycle === "no") ret += "bicycles allowed" + "<br/>";
    if (attr.hgv === "yes") ret += "hgv allowed" + "<br/>";
    if (attr.hgv === "no") ret += "hgv prohibited" + "<br/>";
    if (attr.foot === "yes") ret += "pedestrian allowed" + "<br/>";
    if (attr.foot === "no") ret += "pedestrian prohibited " + "<br/>";
    if (attr.bicycle === "yes") ret += "cyclist allowed " + "<br/>";
    if (attr.bicycle === "no") ret += "cyclist prohibited " + "<br/>";
    if (attr["ferry:cable"] === "yes") ret += "cable ferry" + "<br/>";
  }
  if (attr["seamark:light:1:colour"]) {
    var contGerman = attr["seamark:light:1:colour"];
    switch (contGerman) {
      case "white":
        contGerman = "white";
        break;
      case "red":
        contGerman = "red";
        break;
      case "green":
        contGerman = "green";
        break;
      case "blue":
        contGerman = "blue";
        break;
      case "yellow":
        contGerman = "yellow";
        break;
      case "amber":
        contGerman = "amber";
        break;
    }
    ret += "colour of light: " + contGerman + "<br/>";
  }
  if (attr.man_made === "lighthouse") {
    if (attr["seamark:light:1:character"]) ret += "light character: " + attr["seamark:light:1:character"] + "<br/>";
    if (attr["seamark:light:1:period"]) ret += "period: " + attr["seamark:light:1:period"] + "<br/>";
    if (attr["seamark:light:1:height"]) ret += "height: " + attr["seamark:light:1:height"] + " m" + "<br/>";
    if (attr["seamark:light:1:range"]) ret += "range: " + attr["seamark:light:1:range"] + " sm" + "<br/>";
  }
  if (attr["seamark:light:colour"]) {
    var contGerman = attr["seamark:light:colour"];
    switch (contGerman) {
      case "white":
        contGerman = "white";
        break;
      case "red":
        contGerman = "red";
        break;
      case "green":
        contGerman = "green";
        break;
      case "blue":
        contGerman = "blue";
        break;
      case "yellow":
        contGerman = "yellow";
        break;
      case "amber":
        contGerman = "amber";
        break;
    }
    ret += "colour of light: " + contGerman + "<br/>";
  }
  if (attr.man_made === "lighthouse") {
    if (attr["seamark:light:character"]) ret += "light character: " + attr["seamark:light:character"] + "<br/>";
    if (attr["seamark:light:height"]) ret += "height: " + attr["seamark:light:height"] + " m" + "<br/>";
    if (attr["seamark:light:range"]) ret += "range: " + attr["seamark:light:range"] + " sm" + "<br/>";
    if (attr["seamark:light:period"]) ret += "period: " + attr["seamark:light:period"] + "<br/>";
  }
  return ret;
};
var fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(attr) {
  var ret = "";
  if (attr.emergency === "fire_hydrant") {
    var count = attr["fire_hydrant:count"];
    if (count !== "undefined" && count != null && count !== "") ret += "Number: " + count + "<br/>";
    var diameter = attr["fire_hydrant:diameter"];
    if (diameter !== "undefined" && diameter != null && diameter !== "") ret += "Pipe diameter: " + diameter + " mm" + "<br/>";
    var pressure = attr["fire_hydrant:pressure"];
    if (pressure !== "undefined" && pressure != null && pressure !== "") if (pressure === "suction") ret += "Pressure in bar / Suction: " + "Suction" + "<br/>";else ret += "Pressure in bar / Suction: " + pressure + "<br/>";
    var position = attr["fire_hydrant:position"];
    if (position !== "undefined" && position != null && position !== "") {
      if (position === "lane") ret += "Position: " + "Lane" + "<br/>";else if (position === "parking_lot") ret += "Position: " + "Parking Lot" + "<br/>";else if (position === "sidewalk") ret += "Position: " + "Sidewalk" + "<br/>";else if (position === "green") ret += "Position: " + "Green" + "<br/>";
    }
    var reservoire = attr["water_volume"];
    if (reservoire !== "undefined" && reservoire != null && reservoire !== "") ret += "Volume: " + reservoire + "<br/>";
    var awwa_class = attr["fire_hydrant:awwa_class"];
    if (awwa_class !== "undefined" && awwa_class != null && awwa_class !== "") {
      ret += "AWWA Class: " + awwa_class + "<br/>";
    } else {
      var flow_rate = attr["flow_rate"];
      if (flow_rate !== "undefined" && flow_rate != null && flow_rate !== "") ret += "Flow rate: " + flow_rate + "<br/>";
    }
    var water_source = attr["water_source"];
    if (water_source !== "undefined" && water_source != null && water_source !== "" && water_source !== "main") ret += "Water source: " + water_source + "<br/>";
    var couplings_type = attr["couplings:type"];
    if (couplings_type !== "undefined" && couplings_type != null && couplings_type !== "") ret += "Couplings type: " + couplings_type + "<br/>";
    var couplings_diameter = attr["couplings:diameter"];
    if (couplings_diameter !== "undefined" && couplings_diameter != null && couplings_diameter !== "") ret += "Couplings diameter: " + couplings_diameter + "<br/>";
    var pillar_type = attr["pillar:type"];
    if (pillar_type === "dry_barrel") ret += "Pillar type: " + pillar_type + "<br/>";
    var disused = attr["disused:emergency"];
    if (disused === "fire_hydrant") ret += "Currently disused";
    if (ret === "") ret = "No details available.";
  }
  return ret;
};
var fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(attr) {
  var ret = "";
  if (attr["red_turn:right"] === "yes") ret += "red turn: allowed to turn to the right" + "<br/>";
  if (attr["red_turn:right"] === "no") ret += "red turn: prohibited to turn to the right" + "<br/>";
  if (attr.bridge) {
    if (attr.height) ret += "height: " + attr.height + " m<br/>";
    if (attr.length) ret += "length: " + attr.length + " m<br/>";
    if (attr.bridge_ref) ret += "bridge ref: " + attr.bridge_ref + "<br/>";
    if (attr.start_date) ret += "start date: " + attr.start_date + "</br>;";
    if (attr.maxweight) ret += "maxweight: " + attr.maxweight + " t</br>";
  }
  if (attr.highway) {
    if (attr.toll === "yes") ret += "toll highway" + "<br/>";
  }
  if (attr["toll:hgv"] === "yes") ret += "HGV toll" + "<br/>";
  if (attr.surface) {
    var oberflaeche = attr.surface;
    ret += "surface: ";
    switch (oberflaeche) {
      case "grass":
        ret += "grass" + "<br/>";
        break;
      case "paved":
        ret += "paved" + "<br/>";
        break;
      case "asphalt":
        ret += "asphalt" + "<br/>";
        break;
      case "cobblestone":
        ret += "cobblestone" + "<br/>";
        break;
      case "sett":
        ret += "sett" + "<br/>";
        break;
      case "concrete":
        ret += "concrete" + "<br/>";
        break;
      case "unpaved":
        ret += "unpaved" + "<br/>";
        break;
      case "paving_stones":
        ret += "paving stones" + "<br/>";
        break;
      case "compacted":
        ret += "compacted" + "<br/>";
        break;
      case "dirt":
        ret += "dirt" + "<br/>";
        break;
      case "fine_gravel":
        ret += "fine gravel" + "<br/>";
        break;
      case "grass_paver":
        ret += "grass paver" + "<br/>";
        break;
      case "gravel":
        ret += "gravel" + "<br/>";
        break;
      case "earth":
        ret += "earth" + "<br/>";
        break;
      case "ground":
        ret += "ground" + "<br/>";
        break;
      case "metal":
        ret += "metal" + "<br/>";
        break;
      case "mud":
        ret += "mud" + "<br/>";
        break;
      case "sand":
        ret += "sand" + "<br/>";
        break;
      case "wood":
        ret += "wood" + "<br/>";
        break;
      case "tartan":
        ret += "tartan" + "<br/>";
        break;
      case "artificial_turf":
        ret += "artificial turf" + "<br/>";
        break;
      case "clay":
        ret += "clay" + "<br/>";
        break;
      default:
        ret += "unknown" + "<br/>";
    }
  }
  if (attr.tracktype === "grade1") ret += "path surface: Solid. Usually a paved or heavily compacted hardcore surface." + "<br/>";
  if (attr.tracktype === "grade2") ret += "path surface: Mostly solid. Usually an unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay." + "<br/>";
  if (attr.tracktype === "grade3") ret += "path surface: Even mixture of hard and soft materials. Almost always an unpaved track." + "<br/>";
  if (attr.tracktype === "grade4") ret += "path surface: Mostly soft. Almost always an unpaved track prominently with soil/sand/grass, but with some hard materials, or compressed materials mixed in." + "<br/>";
  if (attr.tracktype === "grade5") ret += "path surface: Soft. Almost always an unpaved track lacking hard materials, uncompacted, with surface of soil/sand/grass." + "<br/>";
  if (attr.motorcycle === "yes") ret += "<br/>" + "motorcyle allowed." + "<br/>";
  if (attr.motorcycle === "no") ret += "<br/>" + "motorcycles prohibited." + "<br/>";
  if (attr.trail_visibility === "excellent") ret += "trail visibility: Unambiguous path or markers everywhere" + "<br/>";
  if (attr.trail_visibility === "good") ret += "trail visibility: Next marker always visible, but sometimes has to be searched for." + "<br/>";
  if (attr.trail_visibility === "intermediate") ret += "trail visibility: Track mostly visible" + "<br/>";
  if (attr.trail_visibility === "bad") ret += "trail visibility: Path sometimes invisible, route partly pathless" + "<br/>";
  if (attr.trail_visibility === "horrible") ret += "trail visibility: Often pathless" + "<br/>";
  if (attr.trail_visibility === "no") ret += "trail visibility: Mostly pathless" + "<br/>";
  if (attr.sac_scale === "hiking") ret += "trail: Trail well cleared. (SAC Scale: T1 (yellow))" + "</br>";
  if (attr.sac_scale === "mountain_hiking") ret += "trail: Trail with continuous line and balanced ascent (SAC Scale: T2 (red))" + "</br>";
  if (attr.sac_scale === "demanding_mountain_hiking") ret += "trail: exposed sites may be secured with ropes or chains, possible need to use hands for balance (SAC Scale: T3 (red))" + "</br>";
  if (attr.sac_scale === "alphine_hiking") ret += "trail: sometimes need for hand use to get ahead (SAC Scale: T4 (blue))" + "</br>";
  if (attr.sac_scale === "demanding_alphine_hiking") ret += "trail: single plainly climbing up to second grade (SAC Scale: T5 (blue))" + "</br>";
  if (attr.sac_scale === "difficult_alpine_hiking") ret += "trail: climbing up to second grade (SAC Scale: T6 (blue))" + "</br>";
  if (attr["mtb:name"]) ret += "cycleway :" + attr["mtb:name"] + "</br>";
  if (attr["mtb:scale"] === "0") ret += "Mountainbikeroute: Very easy way - Gravel or packed earth. No particular difficulties. Mostly forest and meadow paths (highway=path). Sections with steps, rocks, or roots are not expected. Wide curves, easy to moderate slope. No special skills are needed to ride this. Easy to ride uphill." + "</br>" + "Surface: solid and handy" + "</br>" + "Obstacles: no obstacles" + "</br>" + "Gradient: mild to moderate" + "</br>" + "Bends: wide" + "</br>" + "Driving skills: no special driving skills required" + "</br>";
  if (attr["mtb:scale"] === "1") ret += "Mountainbikeroute: Smaller obstacles like roots and small stones. Erosion damage may increase difficulty. Soil may be loose in places. Tight turns, but no hairpin turns. Riding requires care and attention, but no special skill. Obstacles can be ridden over. Difficult to ride uphill." + "</br>" + "Surface: loose surface possible, small roots and stones" + "</br>" + "Obstacles: small obstacles, water gutter, erosion damage" + "</br>" + "Gradient: < 40%" + "</br>" + "Bends: wide" + "</br>" + "Driving skills: basic driving skills required, obstacles can be passed over" + "</br>";
  if (attr["mtb:scale"] === "2") ret += "Mountainbikeroute: Obstacles such as large rocks and stones. Soil is often loose.  Steps are expected. Wider hairpin turns, steepness of up to 70%. Requires some advanced riding skills. Only very skilled riders can go uphill on this." + "</br>" + "Surface: surface usually not compacted, larger roots and stones." + "</br>" + "Obstacles: plain steps and stairs" + "</br>" + "Gradient: < 70%" + "</br>" + "Bends: easy hairpins" + "</br>" + "Driving skills: advanced driving skills required" + "</br>";
  if (attr["mtb:scale"] === "3") ret += "Mountainbikeroute: Many sections with large obstacles such as boulders and large roots. Many hairpin and off-balance turns. Slippery surface and talus sections may be found. The surface may be very slippery. Constant concentration and very good skills needed. Nearly impossible to ride uphill." + "</br>" + "Surface: many large roots / rocks or slippery ground, loose scree" + "</br>" + "Obstacles: drags, hardly driveable steps" + "</br>" + "Gradient: >70%" + "</br>" + "Bends: bail like hairpins" + "</br>" + "Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins" + "</br>";
  if (attr["mtb:scale"] === "4") ret += "Mountainbikeroute: Very steep and difficult, with sections having large boulders and roots. Frequent loose debris. Very steep sections with very tight hairpin turns and high steps that will cause the chainring to hit the ground. Some trials techniques will be necessary. Nearly impossible to ride uphill." + "</br>" + "Surface: many large roots / rocks or slippery ground, loose scree" + "</br>" + "Obstacles: drags, hardly driveable steps" + "</br>" + "Gradient: >70%" + "</br>" + "Bends: bail like hairpins" + "</br>" + "Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins" + "</br>";
  if (attr["mtb:scale"] === "5") ret += "Mountainbikeroute: Very steep and difficult with big boulder fields and debris, and landslides. Speed must be carried for counter-ascents. If at all only short passages are available for accelerating and braking. Fallen trees may make very steep passages even more difficult. Very few Mountainbikers can actually ride at this level. Most will have to push." + "</br>" + "Surface: counter-ascents / rocks or slippery ground, loose scree / path is rather a Alpine hiking (>T4) path" + "</br>" + "Obstacles: drags, combinations of hardly driveable steps" + "</br>" + "Gradient: >70%" + "</br>" + "Bends: bail like hairpins with obstacles" + "</br>" + "Driving skills: excellent bike control with special trial skills required, moving the front and rear wheel is limited" + "</br>";
  if (attr["mtb:scale"] === "6") ret += "Mountainbikeroute: Classify ways with 6 that are not rideable at all for a mtbiker. E.g. Chains or stemples (metal rungs) on a via ferrata or simply unsecured alpine pathes that are not even partly rideable for the very best mtbikers (using trial techniques). Steepness is often >45°. If used for single points, then this highlights exceptionally difficult spots. Often spotting is impossible and falling may be lethal." + "</br>" + "Surface: Path is rather a Alpine hiking (T5 or T6) path or bare rock without visible path." + "</br>" + "Obstacles: Steps over 2m, rock faces,..." + "</br>" + "Gradient: >100%" + "</br>" + "Bends: no bends can be distinguished as such." + "</br>" + "Driving skills: only the very best trial specialists or vertriders will try to ride these spots. Walking the place first to find a way to clear is needed." + "</br>";
  if (attr["maxspeed"] === "10") ret += 'traffic-calmed sector: maxspeed 10 Km/h and "right over left"' + "</br>";
  if (attr["maxspeed"] === "30") ret += 'traffic-calmed sector: "right over left" and maxspeed 30 Km/h' + "</br>";
  if (attr["maxspeed"] === "50") ret += "maxspeed 50 Km/h" + "</br>";
  if (attr["maxspeed"] === "70") ret += "maxspeed 50 Km/h" + "</br>";
  if (attr["maxspeed"] === "80") ret += "maxspeed 80 Km/h" + "</br>";
  if (attr["maxspeed"] === "100") ret += "maxspeed  100 Km/h" + "</br>";
  if (attr["overtaking"] === "no") ret += "No overtaking!" + "</br>";
  if (attr["noexit"] === "yes") ret += "noexit" + "</br>";
  if (attr["oneway"] === "yes") ret += "oneway" + "</br>";
  if (attr["priority_road"] === "designated") ret += "priority road designated" + "</br>";
  if (attr["priority_road"] === "end") ret += "priority road ends" + "</br>";
  if (attr["highway"] === "emergency_bay") ret += "emergency bay" + "</br>";
  if (attr.traffic_calming === "yes") ret += "traffic calming" + "</br>";
  if (attr.traffic_calming === "bump") ret += "bump" + "</br>";
  if (attr.traffic_calming === "chicane") ret += "chicane" + "</br>";
  if (attr.traffic_calming === "choker") ret += "choker" + "</br>";
  if (attr.traffic_calming === "cushion") ret += "cushion" + "</br>";
  if (attr.traffic_calming === "hump") ret += "hump" + "</br>";
  if (attr.traffic_calming === "island") ret += "island" + "</br>";
  if (attr.traffic_calming === "rumble_strip") ret += "rumble strip" + "</br>";
  if (attr.traffic_calming === "table") ret += "table" + "</br>";
  if (attr.amenity === "parking") {
    if (attr.fee === "yes") ret += "fee required" + "<br/>";
    var women = attr["capacity:women"];
    if (women !== "" && women !== "no" && women != null) {
      var anzahl = "unkown";
      if (women !== "yes") anzahl = women;
      ret += "ladies parking spaces" + " (numbers: " + anzahl + ") <br/>";
    }
  }
  if (attr.park_ride) {
    if (attr.park_ride === "bus") {
      ret += "bus connection" + "<br/>";
    }
    if (attr.park_ride === "tram") {
      ret += "tram connection" + "<br/>";
    }
    if (attr.park_ride === "unknown") {
      ret += "park ride unkown" + "<br/>";
    }
  }
  if (attr["railway:position"]) ret += "railway<br/>position: " + attr["railway:position"] + "<br/>";
  if (attr.uic_ref) ret += "UIC: " + attr.uic_ref + "<br/>";
  return ret;
};
var fnContentSports = exports.fnContentSports = function fnContentSports(attr) {
  var ret = "";
  if (attr.sport === "9pin") ret += "possible sport : 9pin" + "<br/>";
  if (attr.sport === "10pin") ret += "possible sport : 10pin" + "<br/>";
  if (attr.sport === "american_football") ret += "possible sport : american football" + "<br/>";
  if (attr.sport === "aikido") ret += "possible sport : aikido" + "<br/>";
  if (attr.sport === "archery") ret += "possible sport : archery" + "<br/>";
  if (attr.sport === "athletics") ret += "possible sport : athletics" + "<br/>";
  if (attr.sport === "australian_football") ret += "possible sport : australian football" + "<br/>";
  if (attr.sport === "base") ret += "possible sport : base" + "<br/>";
  if (attr.sport === "badminton") ret += "possible sport : badminton" + "<br/>";
  if (attr.sport === "baseball") ret += "possible sport : baseball" + "<br/>";
  if (attr.sport === "basketball") ret += "possible sport : basketball" + "<br/>";
  if (attr.sport === "beachvolleyball") ret += "possible sport : beachvolleyball" + "<br/>";
  if (attr.sport === "bmx") ret += "possible sport : bmx" + "<br/>";
  if (attr.sport === "boules") ret += "possible sport : boules" + "<br/>";
  if (attr.sport === "boule") ret += "possible sport : boule" + "<br/>";
  if (attr.sport === "bowls") ret += "possible sport : bowls" + "<br/>";
  if (attr.sport === "boxing") ret += "possible sport : boxing" + "<br/>";
  if (attr.sport === "canadian_football") ret += "possible sport : canadian football" + "<br/>";
  if (attr.sport === "canoe") ret += "possible sport : canoe" + "<br/>";
  if (attr.sport === "chess") ret += "possible sport : chess" + "<br/>";
  if (attr.sport === "cliff_diving") ret += "possible sport : cliff diving" + "<br/>";
  if (attr.sport === "climbing") ret += "possible sport : climbing" + "<br/>";
  if (attr.sport === "climbing_adventure") ret += "possible sport : adventure climbing" + "<br/>";
  if (attr.sport === "cricket") ret += "possible sport : cricket" + "<br/>";
  if (attr.sport === "cricket_nets") ret += "possible sport : cricket nets" + "<br/>";
  if (attr.sport === "croquet") ret += "possible sport : croquet" + "<br/>";
  if (attr.sport === "curling") ret += "possible sport : curling" + "<br/>";
  if (attr.sport === "cycling") ret += "possible sport : cycling" + "<br/>";
  if (attr.sport === "darts" || attr.sport === "dart") ret += "Darts" + "<br/>";
  if (attr.sport === "dog_racing") ret += "possible sport : dog racing" + "<br/>";
  if (attr.sport === "fencing") ret += "possible sport : fencing" + "<br/>";
  if (attr.sport === "equestrian") ret += "possible sport : equestrian" + "<br/>";
  if (attr.sport === "football") ret += "possible sport: american football" + "<br/>";
  if (attr.sport === "free_flying") ret += "possible sport: free flying" + "<br/>";
  if (attr.sport === "gaelic_games") ret += "possible sport: gaelic games" + "<br/>";
  if (attr.sport === "golf") ret += "possible sport: golf" + "<br/>";
  if (attr.sport === "gymnastics") ret += "possible sport: gymnastik" + "<br/>";
  if (attr.sport === "hockey") ret += "possible sport: hockey" + "<br/>";
  if (attr.sport === "horseshoes") ret += "possible sport: horseshoes" + "<br/>";
  if (attr.sport === "horse_racing") ret += "possible sport: horse racing" + "<br/>";
  if (attr.sport === "ice_stock") ret += "possible sport: ice stock" + "<br/>";
  if (attr.sport === "judo") ret += "possible sport: judo" + "<br/>";
  if (attr.sport === "karting") ret += "possible sport: karting" + "<br/>";
  if (attr.sport === "kitesurfing") ret += "possible sport: kitesurfing" + "<br/>";
  if (attr.sport === "korfball") ret += "possible sport: korfball" + "<br/>";
  if (attr.sport === "motor") ret += "possible sport: motor" + "<br/>";
  if (attr.sport === "multi") ret += "possible sport: multi" + "<br/>";
  if (attr.sport === "obstacle_course") ret += "possible sport: obstacle course" + "<br/>";
  if (attr.sport === "orienteering") ret += "possible sport: orienteering" + "<br/>";
  if (attr.sport === "paddle_tennis") ret += "possible sport: paddle-tennis" + "<br/>";
  if (attr.sport === "paragliding") ret += "possible sport: paragliding" + "<br/>";
  if (attr.sport === "Pelota") ret += "possible sport: Pelota" + "<br/>";
  if (attr.sport === "rasquet") ret += "possible sport: racquet" + "<br/>";
  if (attr.sport === "rowing") ret += "possible sport: rowing" + "<br/>";
  if (attr.sport === "rugby_league") ret += "possible sport: rugby league" + "<br/>";
  if (attr.sport === "rugby_union") ret += "possible sport: rugby union" + "<br/>";
  if (attr.sport === "running") ret += "possible sport: running" + "<br/>";
  if (attr.sport === "scuba_diving") ret += "possible sport: scuba diving" + "<br/>";
  if (attr.sport === "shooting") ret += "possible sport: shooting" + "<br/>";
  if (attr.sport === "skating") ret += "possible sport: skating" + "<br/>";
  if (attr.sport === "skateboard") ret += "possible sport: skateboard" + "<br/>";
  if (attr.sport === "skiing") ret += "possible sport: skiing" + "<br/>";
  if (attr.sport === "soccer") ret += "possible sport: soccer" + "<br/>";
  if (attr.sport === "surfing") ret += "possible sport: surfing" + "<br/>";
  if (attr.sport === "swimming") ret += "possible sport: swimming" + "<br/>";
  if (attr.sport === "table_tennis") ret += "possible sport: table tennis" + "<br/>";
  if (attr.sport === "taekwondo") ret += "possible sport: taekwondo" + "<br/>";
  if (attr.sport === "team_handball") ret += "possible sport: team handball" + "<br/>";
  if (attr.sport === "tennis") ret += "possible sport: tennis" + "<br/>";
  if (attr.sport === "toboggan") ret += "possible sport: toboggan" + "<br/>";
  if (attr.sport === "volleyball") ret += "possible sport: volleyball" + "<br/>";
  if (attr.sport === "water_ski") ret += "possible sport: water ski" + "<br/>";
  if (attr.sport === "weightlifting") ret += "possible sport: weightlifting" + "<br/>";
  if (attr.sport === "wrestling") ret += "possible sport: wrestling" + "<br/>";
  return ret;
};
function fnArztInfo(attr) {
  var result = "";
  var subject = "";
  var spec = attr["healthcare:speciality"];
  if (spec !== "") {
    if (spec === "general") subject += "general" + "<br/>";
    if (spec === "allergology") subject += "allergology" + "<br/>";
    if (spec === "anaesthetics") subject += "anaesthetics" + "<br/>";
    if (spec === "biochemistry") subject += "biochemistry" + "<br/>";
    if (spec === "biological_haematology") subject += "biological haematology" + "<br/>";
    if (spec === "biology") subject += "biology" + "<br/>";
    if (spec === "cardiology") subject += "cardiology" + "<br/>";
    if (spec === "cardiac_surgery") subject += "cardiac surgery" + "<br/>";
    if (spec === "child_psychiatry") subject += "child psychiatry" + "<br/>";
    if (spec === "dental_oral_maxillo_facial_surgery") subject += "dental-, oral-, maxillo- and facial-surgery" + "<br/>";
    if (spec === "dermatology") subject += "dermatology" + "<br/>";
    if (spec === "dermatovenereology") subject += "dermatovenereology" + "<br/>";
    if (spec === "diagnostic_radiology") subject += "diagnostic radiology" + "<br/>";
    if (spec === "emergency") subject += "emergency" + "<br/>";
    if (spec === "endocrinology") subject += "endocrinology" + "<br/>";
    if (spec === "gastroenterological_surgery") subject += "gastroenterological surgery" + "<br/>";
    if (spec === "gastroenterology") subject += "gastroenterology" + "<br/>";
    if (spec === "geriatrics") subject += "geriatrics" + "<br/>";
    if (spec === "gynaecology") subject += "gynaecology" + "<br/>";
    if (spec === "haematology") subject += "haematology" + "<br/>";
    if (spec === "hepatology") subject += "hepatology" + "<br/>";
    if (spec === "immunology") subject += "immunology" + "<br/>";
    if (spec === "infectious_diseases") subject += "infectious diseases" + "<br/>";
    if (spec === "intensive") subject += "intensive" + "<br/>";
    if (spec === "internal") subject += "internal" + "<br/>";
    if (spec === "maxillofacial_surgery") subject += "maxillofacial surgery" + "<br/>";
    if (spec === "nephrology") subject += "nephrology" + "<br/>";
    if (spec === "neurology") subject += "neurology" + "<br/>";
    if (spec === "neurophysiology") subject += "neurophysiology" + "<br/>";
    if (spec === "neuropsychiatry") subject += "neuropsychiatry" + "<br/>";
    if (spec === "neurosurgery") subject += "neurosurgery" + "<br/>";
    if (spec === "nuclear") subject += "nuclear" + "<br/>";
    if (spec === "occupational") subject += "occupational " + "<br/>";
    if (spec === "oncology") subject += "oncology" + "<br/>";
    if (spec === "ophthalmology") subject += "ophthalmology" + "<br/>";
    if (spec === "orthopaedics") subject += "orthopaedics" + "<br/>";
    if (spec === "otolaryngology") subject += "otolaryngology" + "<br/>";
    if (spec === "paediatric_surgery") subject += "paediatric surgery" + "<br/>";
    if (spec === "paediatrics") subject += "paediatrics" + "<br/>";
    if (spec === "palliative") subject += "palliative" + "<br/>";
    if (spec === "physiatry") subject += "physiatry" + "<br/>";
    if (spec === "plastic_surgery") subject += "plastic surgery" + "<br/>";
    if (spec === "proctology") subject += "proctology" + "<br/>";
    if (spec === "psychiatry") subject += "psychiatry" + "<br/>";
    if (spec === "pulmonology") subject += "pulmonology" + "<br/>";
    if (spec === "radiology") subject += "radiology" + "<br/>";
    if (spec === "radiotherapy") subject += "radiotherapy" + "<br/>";
    if (spec === "rheumatology") subject += "rheumatology" + "<br/>";
    if (spec === "stomatology") subject += "stomatology" + "<br/>";
    if (spec === "surgery") subject += "surgery" + "<br/>";
    if (spec === "surgical_oncology") subject += "surgical oncology" + "<br/>";
    if (spec === "thoracic_surgery") subject += "thoracic surgery" + "<br/>";
    if (spec === "transplant") subject += "transplant" + "<br/>";
    if (spec === "trauma") subject += "trauma" + "<br/>";
    if (spec === "tropical") subject += "tropical" + "<br/>";
    if (spec === "urology") subject += "urology" + "<br/>";
    if (spec === "vascular_surgery") subject += "vascular surgery" + "<br/>";
    if (spec === "venereology") subject += "venereology" + "<br/>";
    if (spec === "acupuncture") subject += "acupuncture" + "<br/>";
    if (spec === "naturopathy") subject += "naturopathy" + "<br/>";
    if (spec === "chiropractic") subject += "chiropractic " + "<br/>";
    if (spec === "homeopathy") subject += "homeopathy" + "<br/>";
    if (spec === "osteopathy") subject += "osteopathy" + "<br/>";
  }
  var spec2 = attr["health_specialty"];
  if (spec2 !== "") {
    if (attr["health_specialty:family_medicine"] === "yes") subject += "family medicine" + "<br/>";
    if (attr["health_specialty:emergency_medicine"] === "yes") subject += "emergency medicine" + "<br/>";
    if (attr["health_specialty:anaesthesiology"] === "yes") subject += "anaesthesiology" + "<br/>";
    if (attr["health_specialty:dermatology"] === "yes") subject += "dermatology" + "<br/>";
    if (attr["health_specialty:ear_nose_throat"] === "yes") subject += "ear, nose, throat (ENT specialist)" + "<br/>";
    if (attr["health_specialty:occupational_medicine"] === "yes") subject += "occupational medicine" + "<br/>";
    if (attr["health_specialty:internal_medicine"] === "yes") subject += "internal medicine" + "<br/>";
    if (attr["health_specialty:neurology"] === "yes") subject += "neurology" + "<br/>";
    if (attr["health_specialty:ophthalmology"] === "yes") subject += "ophthalmology" + "<br/>";
    if (attr["health_specialty:palliative_medicine"] === "yes") subject += "palliative medicine" + "<br/>";
    if (attr["health_specialty:psychiatry"] === "yes") subject += "psychiatry" + "<br/>";
    if (attr["health_specialty:gynaecology"] === "yes") subject += "gynaecology" + "<br/>";
    if (attr["health_specialty:urology"] === "yes") subject += "urology" + "<br/>";
    if (attr["health_specialty:pain_medicine"] === "yes") subject += "pain medicine" + "<br/>";
    if (attr["health_specialty:environmental_medicine"] === "yes") subject += "environmental medicine" + "<br/>";
    if (attr["health_specialty:intensive_care_medicin"] === "yes") subject += "intensive care medicin" + "<br/>";
    if (attr["health_specialty:paediatrics"] === "yes") subject += "paediatrics" + "<br/>";
    if (attr["health_specialty:physiatry"] === "yes") subject += "physiatry" + "<br/>";
    if (attr["health_specialty:radiology"] === "yes") subject += "radiology" + "<br/>";
    if (attr["health_specialty:general"] === "yes") subject += "general" + "<br/>";
    if (attr["health_specialty:occupational_therapy"] === "yes") subject += "occupational therapy" + "<br/>";
    if (attr["health_specialty:pulmonology"] === "yes") subject += "pulmonology" + "<br/>";
    if (attr["health_specialty:acupuncture"] === "yes") subject += "acupuncture" + "<br/>";
    if (attr["health_specialty:orthopaedics"] === "yes") subject += "orthopaedics" + "<br/>";
    if (attr["health_specialty:chiropractic"] === "yes") subject += "chiropractic" + "<br/>";
    if (attr["health_specialty:sports_medicine"] === "yes") subject += "sports medicine" + "<br/>";
  }
  if (subject !== "") {
    result += "subjects: ";
    result += '<div class="c4g_open_text">' + subject + "</div>";
  }
  return result;
}
function fnKraftwerkInfo(attr) {
  var ret = "";
  if (attr["generator:method"]) {
    ret += "method of generation: ";
    switch (attr["generator:method"]) {
      case "combustion":
        ret += "combustion";
        break;
      case "thermal":
        ret += "thermal";
        break;
      case "pumping":
        ret += "pumping";
        break;
      case "photovoltaic":
        ret += "photovoltaic";
        break;
      case "gasification":
        ret += "gasification";
        break;
      case "anaerobic_digestion":
        ret += "anaerobic digestion";
        break;
      case "pyrolysis":
        ret += "pyrolysis";
        break;
      case "fission":
        ret += "fission";
        break;
      case "fusion":
        ret += "fusion";
        break;
      default:
        ret += "unknown" + "<br/>";
    }
    ret += "<br/>";
  }
  if (attr["power_source"]) {
    ret += "power source: ";
    switch (attr["power_source"]) {
      case "photovoltaic":
        ret += "photovoltaic";
        break;
      default:
        ret += "unknown" + "<br/>";
    }
    ret += "<br/>";
  }
  if (attr["generator:output:electricity"]) ret += "electricity generation: " + attr["generator:output:electricity"] + "<br/>";
  if (attr["generator:output:heat"]) ret += "heat generation: " + attr["generator:output:heat"] + "<br/>";
  if (attr["generator:output:cold"]) ret += "cold generation: " + attr["generator:output:cold"] + "<br/>";
  if (attr["generator:output"]) ret += "output: " + attr["generator:output"] + "<br/>";
  if (attr["generator:output:hot_air"]) ret += "hot-air generation: " + attr["generator:output:hot_air"] + "<br/>";
  if (attr["generator:output:cold_water"]) ret += "cold water generation: " + attr["generator:output:cold_water"] + "<br/>";
  if (attr["generator:output:cold_air"]) ret += "cold air generation: " + attr["generator:output:cold_air"] + "<br/>";
  if (attr["generator:output:compressed_air"]) ret += "compressed air generation: " + attr["generator:output:compressed_air"] + "<br/>";
  if (attr["generator:output:steam"]) ret += "steam generation: " + attr["generator:output:steam"] + "<br/>";
  if (attr["generator:output:vacuum"]) ret += "vacuum generation: " + attr["generator:output:vacuum"] + "<br/>";
  if (attr["generator:output:battery_charging"]) ret += "battery charging: " + attr["generator:output:battery_charging"] + "<br/>";
  if (attr["generator:type"] === "PWR") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-1") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-2") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-3") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-4") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-5") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "BWR-6") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "PHWR") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "GCR") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "FBR") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "RBMK-1000") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "RBMK-1500") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "VVER") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "CANDU") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "CPR-1000") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "EPR") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "tokamak") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "stellarator") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "ICF") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:type"] === "cold-fusion") ret += "generator type: " + attr["generator:type"] + "<br/>";
  if (attr["generator:method"] === "wind_turbine" && attr["generator:type"] === "horizontal_axis") ret += "generator method: " + "horizontal axis wind turbine" + "<br/>";
  if (attr["generator:method"] === "wind_turbine" && attr["generator:type"] === "vertical_axis") ret += "generator method: " + "vertical axis wind turbine" + "<br/>";
  if (attr["generator:type"] === "francis_turbine") ret += "generator type: " + "francis-turbine" + "<br/>";
  if (attr["generator:type"] === "kaplan_turbine") ret += "generator type: " + "kaplan-turbine" + "<br/>";
  if (attr["generator:type"] === "pelton_turbine") ret += "generator type: " + "pelton-turbine" + "<br/>";
  if (attr["generator:method"] === "stream" && attr["generator:type"] === "horizontal_axis") ret += "generator method: " + "horizontal axis sea current power station" + "<br/>";
  if (attr["generator:method"] === "stream" && attr["generator:type"] === "vertical_axis") ret += "generator type: " + "vertical axis sea current power station" + "<br/>";
  if (attr["generator:type"] === "steam_turbine") ret += "generator type: " + "steam turbine" + "<br/>";
  if (attr["generator:type"] === "heat_pump") ret += "generator type: " + "heat pump" + "<br/>";
  if (attr["generator:type"] === "solar_thermal_collector") ret += "generator type: " + "solar thermal collector" + "<br/>";
  if (attr["generator:type"] === "solar_photovoltaic_panel") ret += "generator type: " + "solar photovoltaic panel" + "<br/>";
  if (attr["generator:type"] === "steam_generator") ret += "generator type: " + "steam generator" + "<br/>";
  if (attr["generator:type"] === "gas_turbine") ret += "generator type: " + "gas turbine" + "<br/>";
  if (attr["generator:type"] === "combined_cycle") ret += "generator type: " + "combined cycle" + "<br/>";
  if (attr["generator:type"] === "reciprocating_engine") ret += "generator type: " + "reciprocating engine" + "<br/>";
  return ret;
}
function fnWertstoffinfo(attr) {
  var ret = "";
  if (attr.recycling_type === "container" || attr.recycling_type === "centre" || attr.amenity === "recycling") {
    if (attr["recycling:glass"] === "yes") ret += "glass container" + "</br>";
    if (attr["recycling:shoes"] === "yes") ret += "shoe container" + "</br>";
    if (attr["recycling:cooking_oil"] === "yes") ret += "recycling of cooking oil" + "</br>";
    if (attr["recycling:paper"] === "yes") ret += "recycling of paper" + "</br>";
    if (attr["recycling:engine_oil"] === "yes") ret += "recycling of engine oil" + "</br>";
    if (attr["recycling:clothes"] === "yes") ret += "recycling of clothes" + "</br>";
    if (attr["recycling:car_batteries"] === "yes") ret += "recycling of car batteries" + "</br>";
    if (attr["recycling:cans"] === "yes") ret += "recycling of cans" + "</br>";
    if (attr["recycling:scrap_metal"] === "yes") ret += "recycling of scrap metal" + "</br>";
    if (attr["recycling:plastic"] === "yes") ret += "recycling of plastic" + "</br>";
    if (attr["recycling:batterries"] === "yes") ret += "recycling of batterries" + "</br>";
    if (attr["recycling:plastic_bottles"] === "yes") ret += "recycling of plastic bottles" + "</br>";
    if (attr["recycling:green_waste"] === "yes") ret += "recycling of green waste" + "</br>";
    if (attr["recycling:hardcore"] === "yes") ret += "recycling of hardcore" + "</br>";
  }
  return ret;
}
var fnContentGeneralInformations = exports.fnContentGeneralInformations = function fnContentGeneralInformations(attr) {
  var ret = "";
  if (attr.width) ret += "width: " + attr.width + " m<br/>";
  if (attr.height) ret += "height: " + attr.height + " m<br/>";
  if (attr.maxwidth) ret += "maxwidth: " + attr.maxwidth + " m<br/>";
  if (attr.maxheight) ret += "maxheight: " + attr.maxheight + " m<br/>";
  if (attr.maxweight) ret += "maxweight: " + attr.maxweight + " t<br/>";
  if (attr.maxspeed) ret += "maxspeed: " + attr.maxspeed + " km/h<br/>";
  if (attr.min_age) ret += "minimum age: " + attr.min_age + "<br/>";
  if (attr.max_age) ret += "maximum age: " + attr.max_age + "<br/>";
  if (attr.nudism === "yes") {
    ret += "nudism" + "<br/>";
  }
  if (attr.ruins === "yes") ret += "ruins" + "<br/>";
  if (attr.ele) ret += "height above sea level: " + attr.ele + " m" + "<br/>";
  if (attr["xmas:day_date"]) ret += "period from - till: " + attr["xmas:day_date"] + "<br/>";
  if (attr["rotor:diameter"]) ret += "diameter of rotor: " + attr["rotor:diameter"] + " m<br/>";
  if (attr["xmas:note"]) ret += "information: " + attr["xmas:note"] + "<br/>";
  if (attr["seamark:beacon_lateral:category"] === "port") ret += "port" + "<br/>";
  if (attr["seamark:beacon_lateral:category"] === "starboard") ret += "starboard" + "<br/>";
  if (attr["service:bicycle:retail"] === "yes") ret += "retail bicycles" + "<br/>";
  if (attr["service:bicycle:repair"] === "yes") ret += "repair bicycles" + "<br/>";
  if (attr["service:bicycle:rental"] === "yes") ret += "rental bicycles" + "<br/>";
  if (attr["service:bicycle:pump"] === "yes") ret += "use of a pump is possible" + "<br/>";
  if (attr["service:bicycle:diy"] === "yes") ret += "diy is possible" + "<br/>";
  if (attr["service:bicycle:cleaning"] === "yes") ret += "cleaning bicycles" + "<br/>";
  if (attr["service:bicycle:second_hand"] === "yes") ret += "sale of second hand bicycles" + "<br/>";
  if (attr["service:bicycle:charging"] === "yes") ret += "charging electric bikes is possible" + "<br/>";
  if (attr.cafe === "yes") ret += "cafe" + "<br/>";
  if (attr.breakfast === "yes") ret += "breakfast" + "<br/>";
  if (attr.snack === "yes") ret += "snack" + "<br/>";
  if (attr.indoor_seating === "yes") ret += "indoor seating" + "<br/>";
  if (attr.outdoor_seating === "yes") ret += "outdoor seating" + "<br/>";
  if (attr.self_service === "yes") ret += "self service" + "<br/>";
  if (attr.bakehouse === "yes") ret += "bakehouse" + "<br/>";
  if (attr.pastry_shop === "yes") ret += "pastry shop" + "<br/>";
  if (attr.fair_trade === "yes") ret += "fair trade" + "<br/>";
  if (attr.fair_trade === "only") ret += "only fair trade" + "<br/>";
  if (attr.fair_trade === "no") ret += "no fair trade" + "<br/>";
  return ret;
};
var fnContentHealthcare = exports.fnContentHealthcare = function fnContentHealthcare(attr) {
  var ret = "";
  if (attr.amenity === "doctors" || attr.office === "physician" || attr.healthcare === "doctor") {
    ret += fnArztInfo(attr);
    if (attr.medical_area) ret += attr.medical_area + "<br/>";
    if (attr.type) ret += attr.type + "<br/>";
    if (attr["doctors:de"]) ret += attr["doctors:de"] + "<br/>";
    if (attr["note:de"]) ret += attr["note:de"] + "<br/>";
  }
  if (attr.dispensing === "yes") ret += "pharmacy with dispensing" + "<br/>";
  if (attr["social_facility:for"] === "abused") ret += "social facility for: " + "abused people" + "<br/>";
  if (attr["social_facility:for"] === "child") ret += "social facility for: " + "children" + "<br/>";
  if (attr["social_facility:for"] === "disabled") ret += "social facility for: " + "disabled people" + "<br/>";
  if (attr["social_facility:for"] === "diseased") ret += "social facility for: " + "diseased people" + "<br/>";
  if (attr["social_facility:for"] === "drug_addicted") ret += "social facility for: " + "drug addicted people" + "<br/>";
  if (attr["social_facility:for"] === "homeless") ret += "social facility for: " + "homeless" + "<br/>";
  if (attr["social_facility:for"] === "juvenile") ret += "social facility for: " + "juvenile and teenager" + "<br/>";
  if (attr["social_facility:for"] === "mental_health") ret += "social facility for: " + "people with mental health problems" + "<br/>";
  if (attr["social_facility:for"] === "migrant") ret += "social facility for: " + "migrants" + "<br/>";
  if (attr["social_facility:for"] === "orphan") ret += "social facility for: " + "orphans" + "<br/>";
  if (attr["social_facility:for"] === "senior") ret += "social facility for: " + "seniors" + "<br/>";
  if (attr["social_facility:for"] === "underprivileged") ret += "social facility for: " + "underprivileged people" + "<br/>";
  if (attr["social_facility:for"] === "unemployed") ret += "social facility for: " + "unemployed" + "<br/>";
  if (attr["social_facility:for"] === "victim") ret += "social facility for: " + "victims" + "<br/>";
  return ret;
};
function fnAdditionalBuildingInfos(attr) {
  var ret = "";
  if (attr["building:color"]) ret += "building color: " + attr["building:color"] + "</br>";
  if (attr["building:height"]) ret += "building height: " + attr["building:height"] + " m</br>";
  if (attr["building:level"]) ret += "level: " + attr["building:level"] + "</br>";
  if (attr["building:part"]) ret += "building part: " + attr["building:part"] + "</br>";
  if (attr["roof:color"]) ret += "roof color: " + attr["roof:colour"] + "</br>";
  if (attr["roof:shape"]) ret += "roof shape: " + attr["roof:shape"] + "</br>";
  if (attr["roof:height"]) ret += "roof height: " + attr["roof:height"] + " m</br>";
  if (attr["roof:material"]) ret += "roof material: " + attr["roof:material"] + " </br>";
  if (attr["roof:orientation"]) ret += "roof orientation: " + attr["roof:orientation"] + " </br>";
  if (attr["roof:direction"]) ret += "roof direction: " + attr["roof:direction"] + " </br>";
  if (attr["building:type"]) ret += "building type: " + attr["building:type"] + "</br>";
  return ret;
}
function fnSicherheitAdditional(attr) {
  var ret = "";
  if (attr.man_made === "surveillance") {
    if (attr.surveillance === "indoor") ret += "indoor surveillance";
    if (attr.surveillance === "outdoor") ret += "outdoor surveillance";
    if (attr.surveillance === "public") ret += "public surveillance";
    if (attr["surveillance:type"] === "camera") ret += "type of surveillance: camera";
    if (attr["surveillance:type"] === "guard") ret += "type of surveillance: guard";
    if (attr["surveillance:type"] === "ALPR") ret += "type of surveillance: ALPR";
    if (attr["surveillance:zone"] === "town") ret += "zone of surveillance: town";
    if (attr["surveillance:zone"] === "parking") ret += "zone of surveillance: parking";
    if (attr["surveillance:zone"] === "traffic") ret += "zone of surveillance: traffic";
    if (attr["surveillance:zone"] === "shop") ret += "zone of surveillance: shop";
    if (attr["surveillance:zone"] === "bank") ret += "zone of surveillance: bank";
    if (attr["surveillance:zone"] === "building") ret += "zone of surveillance: building";
  }
  return ret;
}
function fnWreckInfo(attr) {
  var result = "";
  if (attr.historic === "wreck") {
    if (attr["wreck:date_sunk"]) result += "sunk: " + attr["wreck:date_sunk"] + "<br/>";
    if (attr["wreck:depth"]) result += "depth: " + attr["wreck:depth"] + "<br/>";
    if (attr["wreck:clearance"]) result += "clearance: " + attr["wreck:clearance"] + "<br/>";
    if (attr["wreck:date_commissioned"]) result += "commissioned: " + attr["wreck:date_commissioned"] + "<br/>";
    if (attr["wreck:gross_tonnage"]) result += "gross tonnage: " + attr["wreck:gross_tonnage"] + "<br/>";
    if (attr["wreck:length"]) result += "length: " + attr["wreck:length"] + "<br/>";
    if (attr["wreck:width"]) result += "width: " + attr["wreck:width"] + "<br/>";
    if (attr["wreck:cargo"]) {
      if (attr["wreck:cargo"] === "timber") result += "cargo: timber" + "<br/>";else if (attr["wreck:cargo"] === "coal") result += "cargo: coal" + "<br/>";else result += "cargo: " + attr["wreck:cargo"] + "<br/>";
    }
    if (attr["wreck:visible_at_low_tide"] === "yes") result += "visible at low tide: yes" + "<br/>";
    if (attr["wreck:visible_at_low_tide"] === "no") result += "visible at low tide: no" + "<br/>";
    if (attr["wreck:visible_at_high_tide"] === "yes") result += "visible at high tide: yes" + "<br/>";
    if (attr["wreck:visible_at_high_tide"] === "no") result += "visible at high tide: no" + "<br/>";
    if (attr["access"] === "yes") result += "accessible" + "<br/>";
    if (attr["access"] === "no") result += "no access possible" + "<br/>";
    if (attr["access"] === "permit_required") result += "permit required for acces" + "<br/>";
  }
  return result;
}
function fnKlosterAdditional(attr) {
  var ret = "";
  if (attr["monastery:type"]) {
    switch (attr["monastery:type"]) {
      case "monastery":
        ret += "type: monastery" + "<br/>";
        break;
      case "convent":
        ret += "type: convent" + "<br/>";
        break;
      case "canonry":
        ret += "type: canonry" + "<br/>";
        break;
      case "commandry":
        ret += "type: commandry" + "<br/>";
        break;
      case "hermitage":
        ret += "type: hermitage" + "<br/>";
        break;
      default:
        ret += "type: unknown" + "<br/>";
    }
  }
  if (attr["community:gender"]) {
    if (attr["community:gender"] === "male") ret += "gender: male" + "<br/>";
    if (attr["community:gender"] === "female") ret += "gender: female" + "<br/>";
  }
  if (attr.religious_rank) {
    if (attr.religious_rank === "abbey") ret += "religious rank: abbey" + "<br/>";else if (attr.religious_rank === "abbey") ret += "religious rank: abbey" + "<br/>";
  }
  if (attr.shrine === "yes") ret += "feature: shrine" + "<br/>";
  if (attr.sanctuary === "yes") ret += "feature: sanctuary" + "<br/>";
  if (attr.religion) {
    switch (attr.religion) {
      case "animist":
        ret += "religion: animist" + "<br/>" + "<br/>";
        break;
      case "bahai":
        ret += "religion: bahai" + "<br/>";
        break;
      case "buddhist":
        ret += "religion: buddhist" + "<br/>";
        break;
      case "christian":
        ret += "religion: christian" + "<br/>";
        break;
      case "hindu":
        ret += "religion: hindu" + "<br/>";
        break;
      case "IglesiaNiCristo":
        ret += "religion: IglesiaNiCristo" + "<br/>";
        break;
      case "jain":
        ret += "religion: jain" + "<br/>";
        break;
      case "jewish":
        ret += "religion: jewish" + "<br/>";
        break;
      case "multifaith":
        ret += "religion: multifaith" + "<br/>";
        break;
      case "muslim":
        ret += "religion: muslim" + "<br/>";
        type += "Mosque" + "<br/>";
        break;
      case "pagan":
        ret += "religion: pagan" + "<br/>";
        break;
      case "pastafarian":
        ret += "religion: pastafarian" + "<br/>";
        break;
      case "scientologist":
        ret += "religion: scientologist" + "<br/>";
        break;
      case "shinto":
        ret += "religion: shinto" + "<br/>";
        break;
      case "sikh":
        ret += "religion: sikh" + "<br/>";
        break;
      case "spiritualist":
        ret += "religion: spiritualist" + "<br/>";
        break;
      case "taoist":
        ret += "religion: taoist" + "<br/>";
        break;
      case "unitarian":
        ret += "religion: unitarian" + "<br/>";
        break;
      case "yazidi":
        ret += "religion: yazidi" + "<br/>";
        break;
      case "zoroastrian":
        ret += "eligion: zoroastrian" + "<br/>";
        break;
      default:
        ret += "religion: unknown" + "<br/>";
    }
  }
  if (attr.denomination) {
    switch (attr.denomination) {
      case "anglican":
        ret += "denomination: Anglican" + "<br/>" + "<br/>";
        break;
      case "baptist":
        ret += "denomination: Baptist" + "<br/>";
        break;
      case "catholic":
        ret += "denomination: Catholic" + "<br/>";
        break;
      case "roman_catholic":
        ret += "denomination: Roman Catholic" + "<br/>";
        break;
      case "old_catholic":
        ret += "denomination: Old Catholic" + "<br/>";
        break;
      case "greek_catholic":
        ret += "denomination: Greek Catholic" + "<br/>";
        break;
      case "evangelical":
        ret += "denomination: Evangelical";
      case "jehovahs_witness":
        ret += "denomination: Jehovahs Witness" + "<br/>";
        break;
      case "lutheran":
        ret += "denomination: Lutheran" + "<br/>";
        break;
      case "mennonite":
        ret += "denomination: Mennonite" + "<br/>";
        break;
      case "messianic_jewish":
        ret += "denomination: Messianic Jewish" + "<br/>";
        break;
      case "methodist":
        ret += "denomination: Methodist" + "<br/>";
        break;
      case "mormon":
        ret += "denomination: Mormon" + "<br/>";
        break;
      case "new_apostolic":
        ret += "denomination: New Apostolic" + "<br/>";
        break;
      case "orthodox":
        ret += "denomination: Orthodox" + "<br/>";
        break;
      case "greek_orthodox":
        ret += "denomination: Greek Orthodox" + "<br/>";
        break;
      case "coptic_orthodox":
        ret += "denomination: coptic orthodox" + "<br/>";
        break;
      case "pentecostal":
        ret += "denomination: pentecostal" + "<br/>";
        break;
      case "presbyterian":
        ret += "denomination: Presbyterian" + "<br/>";
        break;
      case "protestant":
        ret += "denomination: Protestant" + "<br/>";
        break;
      case "quaker":
        ret += "denomination: Quaker" + "<br/>";
        break;
      case "reformed":
        ret += "denomination: Reformed" + "<br/>";
        break;
      case "russian_orthodox":
        ret += "denomination: Russian-Orthodox" + "<br/>";
        break;
      case "seventh_day_adventist":
        ret += "denomination: Seventh Day Adventist" + "<br/>";
        break;
      case "christian_community":
        ret += "denomination: Christian Community" + "<br/>";
        break;
      case "adventist":
        ret += "denomination: Adventist" + "<br/>";
        break;
      case "alliance":
        ret += "denomination: Alliance" + "<br/>";
        break;
      case "assemblies_of_god":
        ret += "denomination: Assemblies of God" + "<br/>";
        break;
      case "apostolic":
        ret += "denomination: Apostolic" + "<br/>";
        break;
      case "armenian_apostolic":
        ret += "denomination: Armenian Apostolic" + "<br/>";
        break;
      case "assyrian":
        ret += "denomination: Assyrian" + "<br/>";
        break;
      case "christ_scientist":
        ret += "denomination: Christ Scientist" + "<br/>";
        break;
      case "church_of_scotland":
        ret += "denomination: Church of Scotland" + "<br/>";
        break;
      case "czechoslovak_hussite":
        ret += "denomination: Czechoslovak Hussite" + "<br/>";
        break;
      case "dutch_reformed":
        ret += "denomination: Dutch Reformed" + "<br/>";
        break;
      case "exclusive_brethren":
        ret += "denomination: Exclusive Brethren" + "<br/>";
        break;
      case "foursquare":
        ret += "denomination: Foursquare" + "<br/>";
        break;
      case "kimbanguist":
        ret += "denomination: Kimbanguist" + "<br/>";
        break;
      case "living_waters_church":
        ret += "denomination: Living Waters Church" + "<br/>";
        break;
      case "mariavite":
        ret += "denomination: Mariavite" + "<br/>";
        break;
      case "maronite":
        ret += "denomination: Maronite" + "<br/>";
        break;
      case "moravian":
        ret += "denomination: Moravian" + "<br/>";
        break;
      case "nazarene":
        ret += "denomination: Nazarene" + "<br/>";
        break;
      case "nondenominational":
        ret += "denomination: Nondenominational" + "<br/>";
        break;
      case "old_believers":
        ret += "denomination: Old Believers" + "<br/>";
        break;
      case "polish_catholic":
        ret += "denomination: Polish-Catholic" + "<br/>";
        break;
      case "salvation_army":
        ret += "denomination: Salvation Army" + "<br/>";
        break;
      case "santo_daime":
        ret += "denomination: Santo Daime" + "<br/>";
        break;
      case "serbian_orthodox":
        ret += "denomination: Serbisch-Orthodox" + "<br/>";
        break;
      case "spiritism":
        ret += "denomination: Spiritism" + "<br/>";
        break;
      case "united":
        ret += "denomination: United" + "<br/>";
        break;
      case "united_church_of_christ":
        ret += "denomination: United Church of Christ" + "<br/>";
        break;
      case "united_free_church_of_scotland":
        ret += "denomination: United Free Church of Scotland" + "<br/>";
        break;
      case "united_methodist":
        ret += "denomination: United Methodist" + "<br/>";
        break;
      case "united_reformed":
        ret += "denomination: United Reformed" + "<br/>";
        break;
      case "uniting":
        ret += "denomination: Uniting" + "<br/>";
        break;
      case "church_of_sweden":
        ret += "denomination: Church of Sweden" + "<br/>";
        break;
      case "mission_covenant_church_of_sweden":
        ret += "denomination: Mission Covenant Church Of Sweden" + "<br/>";
        break;
      case "alternative":
        ret += "denomination: alternative" + "<br/>";
        break;
      case "ashkenazi":
        ret += "denomination: ashkenazi" + "<br/>";
        break;
      case "buchari":
        ret += "denomination: buchari" + "<br/>";
        break;
      case "conservative":
        ret += "denomination: conservative" + "<br/>";
        break;
      case "egalitarian":
        ret += "denomination: egalitarian" + "<br/>";
        break;
      case "hasidic":
        ret += "denomination: hasidic" + "<br/>";
        break;
      case "humanistic":
        ret += "denomination: humanistic" + "<br/>";
        break;
      case "kabbalah":
        ret += "denomination: kabbalah" + "<br/>";
        break;
      case "kabbalistic":
        ret += "denomination: kabbalistic" + "<br/>";
        break;
      case "karaite":
        ret += "denomination: karaite" + "<br/>";
        break;
      case "liberal":
        ret += "denomination: liberal" + "<br/>";
        break;
      case "lubavitch":
        ret += "denomination: lubavitch" + "<br/>";
        break;
      case "lubavitch_messianic":
        ret += "denomination: lubavitch messianic" + "<br/>";
        break;
      case "mizrachi_baghdadi":
        ret += "denomination: mizrachi baghdadi" + "<br/>";
        break;
      case "mizrachi_chida":
        ret += "denomination: mizrachi chida" + "<br/>";
        break;
      case "mizrachi_jerusalemite":
        ret += "denomination: mizrachi jerusalemite" + "<br/>";
        break;
      case "mizrachi_livorno":
        ret += "denomination: mizrachi livorno" + "<br/>";
        break;
      case "mizrachi_moroccan":
        ret += "denomination: mizrachi moroccan" + "<br/>";
        break;
      case "modern_orthodox":
        ret += "denomination: modern orthodox" + "<br/>";
        break;
      case "neo_orthodox":
        ret += "denomination: neo orthodox" + "<br/>";
        break;
      case "nondenominational":
        ret += "denomination: nondenominational" + "<br/>";
        break;
      case "orthodox":
        ret += "denomination: orthodox" + "<br/>";
        break;
      case "orthodox_ashkenaz":
        ret += "denomination: orthodox ashkenaz" + "<br/>";
        break;
      case "orthodox_sefard":
        ret += "denomination: orthodox sefard" + "<br/>";
        break;
      case "progressive":
        ret += "denomination: progressive" + "<br/>";
        break;
      case "reconstructionist":
        ret += "denomination: reconstructionist" + "<br/>";
        break;
      case "reform":
        ret += "denomination: reform" + "<br/>";
        break;
      case "renewal":
        ret += "denomination: renewal" + "<br/>";
        break;
      case "samaritan":
        ret += "denomination: samaritan" + "<br/>";
        break;
      case "sefardi":
        ret += "denomination: sefardi" + "<br/>";
        break;
      case "sefardi_amsterdam":
        ret += "denomination: sefardi amsterdam" + "<br/>";
        break;
      case "sefardi_london":
        ret += "denomination: sefardi london" + "<br/>";
        break;
      case "traditional":
        ret += "denomination: traditional" + "<br/>";
        break;
      case "ultra_orthodox":
        ret += "denomination: ultra orthodox" + "<br/>";
        break;
      case "unaffiliated":
        ret += "denomination: unaffiliated" + "<br/>";
        break;
      case "yemenite":
        ret += "denomination: yemenite" + "<br/>";
        break;
      case "yemenite_baladi":
        ret += "denomination: yemenite baladi" + "<br/>";
        break;
      case "yemenite_shami":
        ret += "denomination: yemenite shami" + "<br/>";
        break;
      case "ahmadiya":
        ret += "denomination: ahmadiya" + "<br/>";
        break;
      case "alaouite":
        ret += "denomination: alaouite" + "<br/>";
        break;
      case "druze":
        ret += "denomination: druze" + "<br/>";
        break;
      case "ibadi":
        ret += "denomination: ibadi" + "<br/>";
        break;
      case "ismaili":
        ret += "denomination: ismaili" + "<br/>";
        break;
      case "shia":
        ret += "denomination: shia" + "<br/>";
        break;
      case "sunni":
        ret += "denomination: sunni" + "<br/>";
        break;
      case "nichiren":
        ret += "denomination: nichiren" + "<br/>";
        break;
      case "jodo_shinshu":
        ret += "denomination: jodo shinshu" + "<br/>";
        break;
      case "jodo_shu":
        ret += "denomination: jodo shu" + "<br/>";
        break;
      case "vajrayana":
        ret += "denomination: vajrayana" + "<br/>";
        break;
      case "shingon_shu":
        ret += "denomination: shingon shu" + "<br/>";
        break;
      case "zen":
        ret += "denomination: zen" + "<br/>";
        break;
      case "thai_mahanikaya":
        ret += "denomination: thai mahanikaya" + "<br/>";
        break;
      case "thai_thammayut":
        ret += "denomination: thai thammayut" + "<br/>";
        break;
      case "asatru":
        ret += "denomination: asatru" + "<br/>";
        break;
      case "celtic":
        ret += "denomination: celtic" + "<br/>";
        break;
      case "greco_roman":
        ret += "denomination: greco roman" + "<br/>";
        break;
      case "wicca":
        ret += "denomination: wicca" + "<br/>";
        break;
      case "irani":
        ret += "denomination: irani" + "<br/>";
        break;
      case "parsi":
        ret += "denomination: parsi" + "<br/>";
        break;
      default:
        ret += "unknown" + "<br/>";
    }
  }
  if (attr.community) {
    switch (attr.community) {
      case "AA":
        ret += "community (AA): Augustinians of the Assumption " + "<br/>";
        break;
      case "BSCM":
        ret += "community (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre " + "<br/>";
        break;
      case "CBMV":
        ret += "community (CBMV): Augustiner-Chorfrauen B.M.V." + "<br/>";
        break;
      case "CO":
        ret += "community (CO): Oratorians" + "<br/>";
        break;
      case "CMC":
        ret += "community (CMC): Congregation of the Mother Co-Redemptrix" + "<br/>";
        break;
      case "CRSP":
        ret += "community (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)" + "<br/>";
        break;
      case "CSJ":
        ret += "community (CSJ): Carmel Saint-Joseph" + "<br/>";
        break;
      case "CSSP":
        ret += "community (CSSP): Congrégation du Saint-Esprit" + "<br/>";
        break;
      case "CSSR":
        ret += "community (CSSR): Congrégation du Très Saint Rédempteur" + "<br/>";
        break;
      case "FCJM":
        ret += "community (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary" + "<br/>";
        break;
      case "FMGB":
        ret += "community (FMGB): Suore Francescane Missionarie di Gesù Bambino" + "<br/>";
        break;
      case "FMH":
        ret += "community(FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto" + "<br/>";
        break;
      case "FMM":
        ret += "community (FMM): Franciscaines missionnaires de Marie" + "<br/>";
        break;
      case "FSC":
        ret += "community (FSC): Frères des Écoles chrétiennes" + "<br/>";
        break;
      case "MCCI":
        ret += "community (MCCI): Missionnaires comboniens du Sacré-Cœur" + "<br/>";
        break;
      case "MSFS":
        ret += "community (MSFS): Missionnaires de Saint François de Sales" + "<br/>";
        break;
      case "OCart":
        ret += "community (OCart): Order of the Carthusians" + "<br/>";
        break;
      case "OCC":
        ret += "community (OCC): Ordre de Notre Dame du Mont-Carmel" + "<br/>";
        break;
      case "OCD":
        ret += "community (OCD): Ordre des Carmes déchaux" + "<br/>";
        break;
      case "OCSO":
        ret += "community (OCSO): Trappists (lat. Ordo Cisterciensis Strictioris Observantiae)" + "<br/>";
        break;
      case "OFM":
        ret += "community (OFM): Ordre des Frères Mineurs (Franziskaner)" + "<br/>";
        break;
      case "OFMCap":
        ret += "community (OFMCap): Ordre des Frères Mineurs Capucins" + "<br/>";
        break;
      case "OFMConv":
        ret += "community (OFMConv): Ordre des Frères Mineurs Conventuels" + "<br/>";
        break;
      case "OFS":
        ret += "community (OFS): Franciscans secular Third Order" + "<br/>";
        break;
      case "OMI":
        ret += "community (OMI): Oblats de Marie" + "<br/>";
        break;
      case "OP":
        ret += "community (OP): Ordre des Frères Prêcheurs" + "<br/>";
        break;
      case "OPraem":
        ret += "community (OPraem): Ordre des chanoines réguliers de Prémontré" + "<br/>";
        break;
      case "OSB":
        ret += "community (OSB): Order of Saint Benedict" + "<br/>";
        break;
      case "OSC":
        ret += "community (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames" + "<br/>";
        break;
      case "OSSS":
        ret += "community (OSSS): Ordre de Sainte-Brigitte" + "<br/>";
        break;
      case "OVM":
        ret += "community (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)" + "<br/>";
        break;
      case "PSDP":
        ret += "community (PSDP): Petites sœurs des pauvres (Kleinen Schwestern der Armen)" + "<br/>";
        break;
      case "PFJ":
        ret += "community (PFJ): Petits Frères de Jésus" + "<br/>";
        break;
      case "SDB":
        ret += "community (SDB): Société de Saint François de Sales" + "<br/>";
        break;
      case "SJ":
        ret += "community (SJ): Compagnie de Jésus" + "<br/>";
        break;
      case "SOC":
        ret += "community (SOC): Order of Cistercians" + "<br/>";
        break;
      case "SSCC":
        ret += "community (SSCC): Congregation of the Sacred Hearts of Jesus and Mary" + "<br/>";
        break;
      case "SSF":
        ret += "community (SSF): Society of St Francis" + "<br/>";
        break;
      case "SSJE":
        ret += "community (SSJE): Society of St John the Evangelist" + "<br/>";
        break;
      case "SSpS":
        ret += "community (SSpS): Steyler Missionsschwestern" + "<br/>";
        break;
      case "TOR":
        ret += "community (TOR): Terzo Ordine Regolare di San Francesco" + "<br/>";
        break;
      default:
        ret += "unknown" + "<br/>";
    }
  }
  return ret;
}
var fnTestInfoPopup = exports.fnTestInfoPopup = function fnTestInfoPopup(feature) {
  var attr = feature.getProperties();
  var r = "";
  for (var key in attr) {
    var value = attr[key];
    r = r + key + "=" + value + "<br/>";
  }
  r = '<div class="c4g_popup_text" style="width:300px;">' + r + "</div>";
  return r;
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-proxy.js":
/*!***************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-proxy.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapProxy = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gBaselayerController = __webpack_require__(/*! ./c4g-baselayer-controller */ "../MapsBundle/src/Resources/public/js/c4g-baselayer-controller.js");
var _c4gLayerController = __webpack_require__(/*! ./c4g-layer-controller */ "../MapsBundle/src/Resources/public/js/c4g-layer-controller.js");
var _c4gLocationstyleController = __webpack_require__(/*! ./c4g-locationstyle-controller */ "../MapsBundle/src/Resources/public/js/c4g-locationstyle-controller.js");
var _c4gPopupController = __webpack_require__(/*! ./c4g-popup-controller */ "../MapsBundle/src/Resources/public/js/c4g-popup-controller.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var langConstants = {};
var MapProxy = exports.MapProxy = /*#__PURE__*/function () {
  function MapProxy(options) {
    (0, _classCallCheck2["default"])(this, MapProxy);
    var mapData;
    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    // c4g.maps.editorStyles = c4g.maps.editorStyles || {};

    //window.c4gMapsHooks.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];
    this.hook_locstyles_loaded = [];

    // add global hook for accessibility when there is no proxy reference
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
    window.c4gMapsHooks.proxy_layer_drawn = window.c4gMapsHooks.proxy_layer_drawn || [];
    window.c4gMapsHooks.proxy_baselayer_loaded = window.c4gMapsHooks.proxy_baselayer_loaded || [];
    this.baselayerIds = [];
    this.layerIds = [];
    this.activeLayerIds = {};
    this.requestFunctions = {};
    this.request = {};
    this.baselayers_loaded = false;
    this.layers_loaded = false;
    mapData = this.options.mapController.data;
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    this.mapData = mapData;
    this.mapId = mapData.id;
    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile + '/' + this.mapData.lang;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId + '/' + this.mapData.lang;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;
    this.clickObserverActive = true;

    // this.initialize();
  }
  return (0, _createClass2["default"])(MapProxy, [{
    key: "initialize",
    value: function initialize() {
      var self, map;
      self = this;
      map = this.options.mapController.map;
      this.baselayerController = new _c4gBaselayerController.C4gBaselayerController(this);
      this.baselayerController.loadBaseLayers();
      this.layerController = new _c4gLayerController.BetterLayerController(this);
      this.layerController.loadLayers();
      this.locationStyleController = new _c4gLocationstyleController.C4gLocationStyleController(this);
      this.popupController = new _c4gPopupController.C4gPopupController(this);

      //TODO check this, nearly the same as below
      map.on('change:view', function () {
        // zoom-observer
        //
        map.getView().on('change:resolution', function () {
          var layerId, layer;

          // check layer zoom-bounds
          // @TODO: Use "self.activeLayerIds = false" ?
          for (layerId in self.activeLayerIds) {
            if (self.activeLayerIds.hasOwnProperty(layerId)) {
              layer = self.layerController.arrLayers[layerId];
              // if (self.checkLayerIsActiveForZoom(layerId)) {
              //   if (layer.isInactive) {
              //     self.layerController.showLayer(layerId);
              //   }
              // } else {
              //   self.layerController.hideLayer(layerId, true);
              // }
            }
          }

          // hooks
          _c4gMapsUtils.utils.callHookFunctions(self.hook_map_zoom, self);
          if (self.options.mapController.data.caching && map.getView().getZoom()) {
            _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
          }
        }); // end of "zoom-observer"
      }); // end of "zoom-observer"

      // zoom-observer
      //
      map.getView().on('change:resolution', function () {
        var layerId, layer;

        // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?
        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = self.layerController.arrLayers[layerId];
            // if (self.checkLayerIsActiveForZoom(layerId)) {
            //   if (layer.isInactive) {
            //     self.layerController.showLayer(layerId);
            //   }
            // } else {
            //   self.layerController.hideLayer(layerId, true);
            // }
          }
        }

        // hooks
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_zoom, self);
        if (self.options.mapController.data.caching && map.getView().getZoom()) {
          _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
        }
      }); // end of "zoom-observer"

      map.getView().on('change:center', function (evt) {
        if (self.options.mapController.data.caching) {
          var coordinate = (0, _proj.toLonLat)(map.getView().getCenter());
          if (coordinate) {
            _c4gMapsUtils.utils.storeValue('lon', coordinate[0]);
            _c4gMapsUtils.utils.storeValue('lat', coordinate[1]);
          }
        }
        window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.map_center_changed, map.getView().getCenter());
      }); // end of "center-observer"

      // click-observer
      //
      map.on('click', function (clickEvent) {
        var feature, fFeatures, layer, currentZoom, minZoom, newCenter, coord, setPopup, styleFunc, styleCluster;
        if (!self.clickObserverActive) {
          return false;
        }
        feature = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return feature;
        }, {
          hitTolerance: 5
        });
        layer = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return layer;
        }, {
          hitTolerance: 5
        });
        if (feature && feature.get('closeCluster')) {
          map.getView().dispatchEvent({
            type: "change:resolution"
          });
          return;
        }
        if (layer && layer.getStyle()) {
          styleFunc = layer.getStyle();
          if (typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']) {
            styleCluster = styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0'] ? styleFunc(feature, currentZoom)['0'] : false;
            if (styleCluster && styleCluster.getImage()) {
              styleCluster.getImage().setScale(styleCluster.getImage().getScale() * 0.7);
            }
          }
        }
        fFeatures = feature ? feature.get('features') : false;
        if (!(fFeatures && fFeatures.length === 1)) {
          // cluster multiple POI
          if (fFeatures) {
            if (fFeatures[0].get('cluster_popup') == 1) {
              map.getView().setCenter(clickEvent.coordinate);
              currentZoom = map.getView().getZoom();
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');
              if (currentZoom >= minZoom) {
                setPopup = [];
                setPopup.content = '';
                setPopup.async = false;
                for (var i = 0; i < fFeatures.length; i++) {
                  if (fFeatures[i].get && fFeatures[i].get('popup') && fFeatures[i].get('popup').content) {
                    setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
                  }
                }
                feature = fFeatures[0].clone();
                feature.set('popup', setPopup);
              } else {
                map.getView().setZoom(currentZoom + 1);
              }
            } else {
              layer.getSource().removeFeature(feature);
              currentZoom = map.getView().getZoom();
              newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
              minZoom = fFeatures['0'].get('cluster_zoom') || self.options.mapController.data.cluster_zoom;
              if (currentZoom >= minZoom) {
                //open the cluster after zooming
                var pix = map.getView().getResolution();
                var max = fFeatures.length;
                var clustDistance = self.options.mapController.data.cluster_dist_spider ? self.options.mapController.data.cluster_dist_spider : 20;
                var arrLinestring = [];
                var r = pix * clustDistance * (0.5 + max / 4);
                var stringSource = new _source.Vector();
                for (var i = 0; i < max; i++) {
                  var a = 2 * Math.PI * i / max;
                  if (max == 2 || max == 4) a += Math.PI / 4;
                  var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                  var coordinate = (0, _proj.toLonLat)(p);
                  var featureLinestring = new _ol.Feature(new _geom.LineString([newCenter, p]));
                  featureLinestring.set('closeCluster', true);
                  stringSource.addFeature(featureLinestring);
                  var tempFeature = fFeatures[i].clone();
                  tempFeature.setGeometry(new _geom.Point(p));
                  layer.getSource().getSource().removeFeature(fFeatures[i]);
                  stringSource.addFeature(tempFeature);
                }
                var layerStyleFunction = layer.getStyle();
                var styleFunction = function styleFunction(feature, resolution) {
                  if (feature && feature.getGeometry().getType() === "LineString") {
                    return new _style.Style({
                      stroke: new _style.Stroke({
                        width: 0.3,
                        color: "#000070"
                      })
                    });
                  } else {
                    return layerStyleFunction(feature, resolution);
                  }
                };
                var stringLayer = new _layer.Vector({
                  zIndex: 9000001,
                  source: stringSource,
                  style: styleFunction
                });
                map.getView().once('change:resolution', function (evt) {
                  layer.getSource().getSource().addFeatures(fFeatures);
                  map.removeLayer(stringLayer);
                });
                map.addLayer(stringLayer);
              } else {
                currentZoom += 1;
                map.getView().animate({
                  center: newCenter,
                  zoom: currentZoom,
                  duration: 500
                });
              }
            }
          }
        } else if (fFeatures && fFeatures.length === 1) {
          feature = fFeatures[0];
        }
        if (self.options.mapController.mapsControls.controls.editor && self.options.mapController.mapsControls.controls.editor.isOpen()) {
          // do not show popup when editor is open
          if (feature && feature.get('projectId')) {
            // but call click hooks
            var result = _c4gMapsUtils.utils.callHookFunctions(self.hook_map_click, clickEvent);
            return false;
          }
        }
        if (feature && feature.get('loc_linkurl')) {
          var link = feature.get('loc_linkurl');
          while (link.lastIndexOf("[") != -1) {
            var subStr = link.substring(link.lastIndexOf('[') + 1, link.lastIndexOf(']'));
            var featureElement = "";
            if (feature.get(subStr)) {
              featureElement = feature.get(subStr).toLowerCase();
              featureElement.replace(" ", "-");
              featureElement = encodeURIComponent(featureElement);
            }
            link = link.substring(0, link.lastIndexOf('[')) + featureElement + link.substring(link.lastIndexOf(']') + 1);
          }
          if (self.options.mapController.data.link_newwindow === '1') {
            window.open(link);
          } else {
            window.open(link, "_self");
          }
        } else {
          if (feature && feature.get('zoom_onclick') && feature.get('zoom_onclick') != 0) {
            map.getView().setZoom(feature.get('zoom_onclick'));
            map.getView().setCenter(feature.getGeometry().getCoordinates());
          } else if (layer && layer.zoom_onclick && layer.zoom_onclick != 0) {
            map.getView().setZoom(layer.zoom_onclick);
            map.getView().setCenter(clickEvent.coordinate);
          }
          self.handlePopup(feature, layer);

          // hooks
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
        }
      }); // end of "click-observer"
    } // end of "initial"*
  }, {
    key: "handlePopup",
    value: function handlePopup(feature, layer) {
      var popupInfos = {};
      var scope = this;
      if (feature && feature.get('popup')) {
        // single POI
        popupInfos = feature.get('popup');
        if (popupInfos && popupInfos.content === "${FNfnStandardInfoPopup}") {
          var popupContent = "${FNfnStandardInfoPopup}";
          popupContent = _c4gMapsUtils.utils.replaceFunctionPlaceholders(popupContent, feature, layer, this.options.mapController.data.lang, this);
          popupInfos = popupInfos || {};
          popupInfos.content = popupContent;
          popupInfos.async = false;
        }
      } else if (layer && layer.popup) {
        popupInfos = layer.popup;
      } else {
        if (!this.mapData.popupMultiple) {
          this.popupController.removePopup();
        }
        return;
      }
      if (this.mapData.caching && parseInt(this.mapData.popupHandling, 10)) {
        _c4gMapsUtils.utils.storeValue('popupInfos', JSON.stringify(popupInfos));
      }
      if (popupInfos.async === false || popupInfos.async == '0') {
        var objPopup = {};
        objPopup.popup = popupInfos;
        objPopup.feature = feature;
        objPopup.layer = layer;
        // Call the popup hook for plugin specific popup content
        if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
            popup: objPopup,
            mapController: this.options.mapController
          });
        }
        if (this.mapData.popupMultiple) {
          this.popupController.addPopup(objPopup);
        } else {
          this.popupController.setPopup(objPopup);
        }
      } else {
        jQuery.ajax({
          dataType: "json",
          url: this.api_infowindow_url + '/' + popupInfos.content
        }).done(function (data) {
          var popupInfo = {
            async: popupInfos.async,
            content: data.content,
            popup: popupInfos.popup,
            routing_link: popupInfos.routing_link
          };
          var objPopup = {};
          objPopup.popup = popupInfo;
          objPopup.feature = feature;
          objPopup.layer = layer;

          // Call the popup hook for plugin specific popup content
          if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
            _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
              popup: objPopup,
              mapController: scope.options.mapController
            });
          }
          if (scope.mapData.popupMultiple) {
            scope.popupController.addPopup(objPopup);
          } else {
            scope.popupController.setPopup(objPopup);
          }
        });
      }
    }
  }, {
    key: "activateClickObserver",
    value: function activateClickObserver() {
      this.clickObserverActive = true;
    }
  }, {
    key: "deactivateClickObserver",
    value: function deactivateClickObserver() {
      this.clickObserverActive = false;
    }

    /**
     * @TODO: [checkLocationStyles description]
     *
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */
    // checkLocationStyles(opt_options) {
    //
    //   var options,
    //     neededLayerStyles,
    //     getLayerStyles,
    //     self = this;
    //
    //   if (opt_options && typeof opt_options === "object") {
    //     options = opt_options;
    //   } else {
    //     options = {};
    //   }
    //
    //   this.locationStyleController.arrLocStyles= this.locationStyleController.arrLocStyles || {};
    //
    //   neededLayerStyles = [];
    //   getLayerStyles = function (layers) {
    //     var i,
    //       element,
    //       index;
    //
    //     // ToDo: Rekursion integrieren (test mit forum)
    //     for (index in layers) {
    //       if (layers.hasOwnProperty(index)) {
    //         element = layers[index];
    //
    //         if (element.content) {
    //           for (i = 0; i < element.content.length; i += 1) {
    //
    //             if (element.content[i]) {
    //               if (
    //                 element.content[i].locationStyle
    //                 && element.content[i].locationStyle !== "0"
    //                 && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1
    //                 && (
    //                   !self.locationStyleController.arrLocStyles[element.content[i].locationStyle]
    //                   || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined
    //                 )
    //               ) {
    //                 neededLayerStyles.push(element.content[i].locationStyle);
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   getLayerStyles(this.layerController.arrLayers);
    //
    //   if (neededLayerStyles.length > 0) {
    //     this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
    //   } else {
    //     if (options.done && typeof options.done === "function") {
    //       options.done();
    //     }
    //   }
    // } // end of "checkLocationStyles()"
  }, {
    key: "checkLayerIsActiveForZoom",
    value: function checkLayerIsActiveForZoom(layerId, opt_zoom) {
      var layer, zoom, layerContent, locstyle;
      if (!this.layerController.arrLayers[layerId]) {
        return false;
      }
      layer = this.layerController.arrLayers[layerId];
      if (opt_zoom) {
        zoom = opt_zoom;
      } else if (this.options.mapController.map.getView().getZoom() > -1) {
        zoom = this.options.mapController.map.getView().getZoom();
      } else {
        zoom = false;
      }
      if (layer.zoom === undefined) {
        if (layer.content && layer.content.length > 0) {
          for (var i = 0; i < layer.content.length; i++) {
            layerContent = layer.content[i];
            if (layerContent.locationStyle) {
              locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle];
              // TODO check all locstyles and take the most constraining zoom value
              if (locstyle) {
                layer.zoom = {};
                if (locstyle.maxzoom) {
                  layer.zoom.max = locstyle.maxzoom;
                }
                if (locstyle.minzoom) {
                  layer.zoom.min = locstyle.minzoom;
                }
                if (layer.zoom.max || layer.zoom.min) {
                  break;
                }
              }
            }
          }
        }
      }
      if (typeof zoom === "number" && layer.zoom && (layer.zoom.min > zoom || layer.zoom.max > 0 && layer.zoom.max < zoom)) {
        return false;
      }
      return true;
    } // end of "checkLayerIsActive()"
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js":
/*!***************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-maps-utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.utils = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./c4g-maps-popup-info-de */ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de.js"));
var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./c4g-maps-popup-info-en */ "../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en.js"));
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _Circle = _interopRequireDefault(__webpack_require__(/*! ol/geom/Circle */ "../MapsBundle/node_modules/ol/geom/Circle.js"));
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _sphere = __webpack_require__(/*! ol/sphere */ "../MapsBundle/node_modules/ol/sphere.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _extent = __webpack_require__(/*! ol/extent */ "../MapsBundle/node_modules/ol/extent.js");
var _jsbi = _interopRequireDefault(__webpack_require__(/*! jsbi/dist/jsbi.mjs */ "../MapsBundle/node_modules/jsbi/dist/jsbi.mjs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var popupFunctions = popupFunctionsDE;
if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = popupFunctionsDE;
  } else if (mapData.lang === "en") {
    popupFunctions = popupFunctionsEN;
  } else {
    // fallback
    popupFunctions = popupFunctionsEN;
  }
} else {
  popupFunctions = popupFunctionsEN;
}
var utils = exports.utils = {
  /**
   *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
   *
   *  @param    {string}    the string to capitalize
   *
   *  @return   {string}    the capitalized string
   */
  capitalizeFirstLetter: function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  /**
   * Generate an unique id.
   *
   * The id is 9 characters long and prefixed with an underscore.
   *
   * @return  {string}  The generated id.
   */
  getUniqueId: function getUniqueId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  /**
   * Encode input strings for GeoJSON-Objects properly,
   * so they will not break the Code.
   * Transforms:
   *   \ -> \\;
   *   " -> '';
   *   Ä -> &Auml;
   *   ä -> &auml;
   *   Ö -> &Ouml;
   *   ö -> &ouml;
   *   Ü -> &Uuml;
   *   ü -> &uuml;
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
    var output;
    if (!input) {
      return '';
    }
    output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');
    return output;
  },
  // end of encodeGeoJsonProperty()
  removeUmlauts: function removeUmlauts(input) {
    if (!input) {
      return '';
    }
    return input.toLowerCase().replace(/\s/g, "").replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  },
  /**
   * Decode input strings for GeoJSON-Objects properly,
   * so they will be displayed correctly.
   * Transforms:
   *   \\     -> \;
   *   ''     -> ";
   *   &Auml; -> Ä
   *   &auml; -> ä
   *   &Ouml; -> Ö
   *   &ouml; -> ö
   *   &Uuml; -> Ü
   *   &uuml; -> ü
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
    var output;
    if (!input) {
      return '';
    }
    if (typeof input !== "string") {
      input = input + "";
    }
    output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');
    return output;
  },
  // end of decodeGeoJsonProperty()

  /**
   * Create or replace an URL-parameter.
   *
   * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
   * will be applied as "hash-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps#param
   * Note, that already existing "hash-parameters" will be overriden,
   * whereas existing "GET-parameters" stay untouched.
   *
   * If `opt_getKey` is set, it will be applied as "GET-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps?opt_getKey=param
   * If the key described by `opt_getKey` is already existing, its value will be overriden,
   * otherwise the key-value-pair will be appended appropriatly.
   * Already existing "hash-parameters" will stay untouched.
   *
   * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
   * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
   *
   * @param  {string}                    param        [description]
   * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
   * @param  {undefined|boolean}         opt_execute  Default: `undefined`
   */
  setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
    var link, searchParam, paramReplaced, i;
    if ((0, _typeof2["default"])(param) === undefined) {
      return false;
    }
    link = location.origin + location.pathname;
    if (!opt_getKey) {
      // use hash-parameter
      if (opt_execute) {
        location.hash = param;
        return true;
      }
      link += location.search + '#' + param;
    } else {
      // use GET-parameter
      if (location.search) {
        // there are already search-parameters
        paramReplaced = false;
        opt_getKey = opt_getKey.toLowerCase();
        // replace parameter if already existent
        searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
          if (key === opt_getKey) {
            paramReplaced = true;
            return key + '=' + param;
          }
          return match;
        });
        // otherwise append as new parameter
        if (!paramReplaced) {
          searchParam += '&' + opt_getKey + '=' + param;
        }
      } else {
        // this will be the only search-parameter in the URL
        searchParam = '?' + opt_getKey + '=' + param;
      }
      if (opt_execute) {
        location.search = searchParam;
        return true;
      }
      link += searchParam + location.hash;
    }
    return link;
  },
  // end of setUrlParam()

  /**
   * Get search or hash URL-parameter as string.
   *
   * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
   * otherwise it will search for a GET-parameter and return its value.
   *
   * If a parameter is not existent, or empty, an empty string will be returned.
   *
   * @param   {undefined|string}  opt_getKey  Default: `undefined`
   *
   * @return  {string}                        The found parameter.
   */
  getUrlParam: function getUrlParam(opt_getKey) {
    var param, regEx;
    if (!opt_getKey) {
      param = location.hash.substring(1);
    } else {
      if (!location.search) {
        param = '';
      } else {
        regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
        param = regEx.exec(location.search);
        param = param ? param[1] : '';
      }
    }
    return param;
  },
  // end of getUrlParam()

  /**
   * Delta-encode an array of numbers.
   * Note that the array will be sorted (lowest to highest)
   * before encoding.
   *
   * So after the encoding the first value of the output contains
   * the smallest number of the set and each following number just
   * represents the offset to its previous neighbor.
   *
   * This is mostly efficient for high numbers, that are "close to each other".
   *
   * Example:
   *   [1337, 11, 101, 123, 96, 69, 42, 42]
   *   will be sorted
   *   [11, 42, 42, 69, 96, 101, 123, 1337]
   *   and encoded to
   *   [11, 31, 0, 27, 27, 5, 22, 1214]
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaEncode: function deltaEncode(arrInput) {
    var arrOutput, i;
    if (!arrInput) {
      return [];
    }
    if (arrInput.length === 1) {
      return arrInput;
    }
    arrInput.sort(function (a, b) {
      return _jsbi["default"].toNumber(_jsbi["default"].subtract(_jsbi["default"].BigInt(a), _jsbi["default"].BigInt(b)));
    });
    arrOutput = [];
    arrOutput[0] = arrInput[0].toString();
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = _jsbi["default"].subtract(_jsbi["default"].BigInt(arrInput[i]), _jsbi["default"].BigInt(arrInput[i - 1])).toString();
    }
    return arrOutput;
  },
  // end of deltaEncode()

  /**
   * Decode a delta-encoded array.
   * See `deltaEncode` function for more detailed information.
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaDecode: function deltaDecode(arrInput) {
    var arrOutput;
    if (!arrInput) {
      return [];
    }
    if (arrInput[0].indexOf("{") !== -1) {
      // cannot delta decode uuids
      return arrInput;
    }
    arrOutput = [];
    arrOutput[0] = _jsbi["default"].BigInt(arrInput[0]);
    // if (isNaN(arrInput[0])) {
    //   return [];
    // }
    for (var i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = _jsbi["default"].add(_jsbi["default"].BigInt(arrInput[i]), arrOutput[i - 1]);
    }
    for (var _i = 0; _i < arrOutput.length; _i++) {
      arrOutput[_i] = arrOutput[_i].toString();
    }
    return arrOutput;
  },
  // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
    var j,
      arrResult = [];
    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          var tmpResult = arrHookFunctions[j](parameters);
          if (tmpResult) {
            arrResult.push(tmpResult);
          }
        }
      }
    }
    return arrResult;
  },
  // end of "callHookFunctions()"

  /**
   * Convert a hex-formated color value into rgba()-format.
   *
   * @param   {string|number}  hex          [description]
   * @param   {string|number}  opt_opacity  [description]
   *
   * @return  {string}                      [description]
   */
  getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {
    var bigint, r, g, b, a;
    bigint = parseInt(hex, 16);
    if (opt_opacity && opt_opacity.value) {
      opt_opacity.value = parseInt(opt_opacity.value);
    }
    if (opt_opacity && typeof opt_opacity !== 'number') {
      if ((0, _typeof2["default"])(opt_opacity) === 'object' && opt_opacity.value) {
        opt_opacity = opt_opacity.value;
      } else if (!opt_opacity) {
        opt_opacity = 100;
      }
    }
    r = bigint >> 16 & 255;
    g = bigint >> 8 & 255;
    b = bigint & 255;
    a = opt_opacity ? opt_opacity / 100 : 1;
    if (opt_array) {
      return [r, g, b, a];
    }
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  },
  getSingleCoordinateForGeom: function getSingleCoordinateForGeom(geometry) {
    var coordinate, x, y;
    var type = geometry.getType();
    switch (type) {
      case "Point":
        coordinate = geometry.getCoordinates();
        break;
      case "LineString":
      case "LinearRing":
        x = (geometry.getFirstCoordinate()[0] + geometry.getLastCoordinate()[0]) / 2;
        y = (geometry.getFirstCoordinate()[1] + geometry.getLastCoordinate()[1]) / 2;
        coordinate = [x, y];
        break;
      case "Polygon":
      case "MultiPoint":
        var coordinates = geometry.getCoordinates();
        var i;
        for (i = 0; i < coordinates.length; i++) {
          x += coordinates[i][0];
          y += coordinates[i][1];
        }
        coordinate = [x / i, y / i];
        break;
      default:
        coordinate = [0, 0];
        break;
    }
    return coordinate;
  },
  /**
   * Measure the dimensions of the given geometry.
   *
   * If the geometry is a `LineString` the function will measure its length,
   * is it a `Polygon` it will measure the acreage,
   * otherwise it will return `0`.
   *
   * If the optional `opt_forceLineMeasure` parameter is `true`
   * and the geometry is a `Polygon` it will measure its perimeter instead
   * of its acreage.
   *
   * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
   * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
   *
   * @return  {array<string>|number}                                       [description]
   */
  measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
    var value, sphere, coordinates, coord1, coord2, result, i;
    if (!geometry) {
      return false;
    }

    //sphere = new ol.Sphere(6378137);
    result = {};
    if (geometry.getType() === 'LineString' || geometry.getType() === 'Polygon' && opt_forceLineMeasure) {
      coordinates = geometry.getCoordinates();
      if (geometry.getType() === 'Polygon') {
        coordinates = coordinates[0];
      }
      value = 0;
      for (i = 0; i < coordinates.length - 1; i += 1) {
        coord1 = (0, _proj.transform)(coordinates[i], 'EPSG:3857', 'EPSG:4326');
        coord2 = (0, _proj.transform)(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
        value += (0, _sphere.getDistance)(coord1, coord2, 6378137);
      }
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 1000) {
        result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else if (geometry.getType() === 'Polygon') {
      //geometry = /** @type {Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
      //coordinates = geometry.getLinearRing(0).getCoordinates();
      value = Math.abs((0, _sphere.getArea)(geometry));
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry.getType() === 'Circle' && opt_forceSurfaceMeasure) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = (0, _sphere.getDistance)((0, _proj.transform)(center, 'EPSG:3857', 'EPSG:4326'), (0, _proj.transform)(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);
      value = Math.PI * Math.pow(value, 2);
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry.getType() === 'Circle') {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = (0, _sphere.getDistance)((0, _proj.transform)(center, 'EPSG:3857', 'EPSG:4326'), (0, _proj.transform)(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (result.rawValue > 10000) {
        result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else {
      result = 0;
    }
    return result;
  },
  /**
   * Calculate extent for an array of geometries.
   *
   * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
   *
   * @return  {ol.Extent}                                      [description]
   */
  getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
    var extentSource;
    if (!arrGeometries) {
      console.warn('Geometries missing for extent calculation');
      return false;
    }
    extentSource = new _source.Vector();
    extentSource.addFeatures(arrGeometries);
    return extentSource.getExtent() || (0, _interaction.Extent)([0, 0, 0, 0]);
  },
  // end of getExtentForGeometries()

  /**
   * Fit view of `map` to a given array of `extents`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {object}     extents                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {integer}    opt_animationDuration  [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
    var view, padding, extent, key;
    if (!extents || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }
    //extent = ol.extent.createEmpty();

    for (key in extents) {
      if (extents.hasOwnProperty(key)) {
        if (typeof extent === "undefined") {
          extent = extents[key];
        } else {
          (0, _extent.extend)(extent, extents[key]);
        }
      }
    }
    this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
  },
  // end of fitToExtents

  /**
   * Fit view of `map` to a given `extent`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {ol.Extent}  extent                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {array}      opt_padding            [description]
   * @param   {integer}    opt_animationDuration  [description]
   * @param   {integer}    opt_minZoom            [description]
   * @param   {integer}    opt_maxZoom            [description]
   * @param   {integer}    opt_minResolution      [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
    var view, padding, fitOptions;
    if (!extent || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }
    view = map.getView();
    fitOptions = {
      'padding': opt_padding || [25, 25, 25, 25]
    };
    if (opt_minResolution && opt_minResolution > 0) {
      fitOptions.minResolution = opt_minResolution;
    }
    if (opt_minZoom && opt_minZoom >= 0) {
      fitOptions.minZoom = opt_minZoom;
    }
    if (opt_maxZoom && opt_maxZoom >= 0) {
      fitOptions.maxZoom = opt_maxZoom;
    }

    // animate the "fitting" when a duration is given and its greater than 0
    if (opt_animationDuration && opt_animationDuration > 0) {
      view.animate({
        start: +new Date(),
        duration: opt_animationDuration,
        resolution: view.getResolution(),
        center: [0, 0]
      });
    }
    try {
      view.fit(extent, map.getSize(), {
        padding: [25, 25, 25, 25]
      });
      //view.fit(extent, map.getSize());
      //view.setZoom(view.getZoom()-1);
      return true;
    } catch (e) {
      return false;
    }
  },
  // end of fitToExtent()

  /**
   * Convenience function to run all placeholder functions at once.
   *
   * @param   {string}                      strInput   [description]
   * @param   {ol.Feature}                  feature    [description]
   * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
   * @param   {string}                      language   [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer, language) {
    var strOutput;

    // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance
    if (!strInput || !feature) {
      return strInput;
    }
    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer, language);
    strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
    strOutput = this.replaceAttributePlaceholders(strOutput, feature);
    return strOutput;
  },
  // end of replaceAllPlaceholders()

  /**
   * Replace every occurance of `${FNfunctionName}`, in `strInput`,
   * with the result of `window.functionName(feature, style)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   * Style will be taken either from the feature, or the layer.
   *
   * @param   {string}          strInput  [description]
   * @param   {ol.Feature}      feature   [description]
   * @param   {ol.layer.Layer}  layer     [description]
   * @param   {string}          language  [description]
   *
   * @return  {string}                    [description]
   */
  replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer, language) {
    var proxy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var strOutput;
    if (!strInput || !feature || !layer) {
      return strInput;
    }
    popupFunctions = language === 'de' || language === 'de-DE' ? popupFunctionsDE : popupFunctionsEN;
    strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
      // check if function exists
      if (typeof popupFunctions[functionName] === 'function') {
        // search style
        var styleSrc = "";
        if (proxy && feature.get('locstyle')) {
          var locstyleArr = proxy.locationStyleController.arrLocStyles[feature.get('locstyle')].locStyleArr;
          styleSrc = locstyleArr.icon_src ? locstyleArr.icon_src : locstyleArr.svgSrc ? locstyleArr.svgSrc : "";
        }
        return popupFunctions[functionName](feature, styleSrc);
      }
      return '';
    }); // end of replace()

    return strOutput;
  },
  // end of replaceFunctionPlaceholders()

  /**
   * Replace placeholders, in `strInput`, for variables set by the geoEditor.
   * Valid placeholders are: ([key] represents the stringname of the variables key)
   *   `${EL[key]}`   =>  Label for the variable
   *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
   *   `${EV[key]}`   =>  Value of the variable
   *   `${EVV[key]}`  =>  Same as `${EV[key]}`
   *
   * If no appropriate value can be found for a placeholder
   * it will simply be removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
    var strOutput;
    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }
    strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
      var editorVars, i;

      // check if feature has editorVars
      if (feature.get('editorVars')) {
        editorVars = feature.get('editorVars');
        // search for editorVar with key == evKey
        for (i = 0; i < editorVars.length; i += 1) {
          if (editorVars[i].key === evKey) {
            // if type is 'EVL' display label only if a value is set too
            if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
              return editorVars[i].label;
            } else {
              return editorVars[i].value;
            }
          }
        }
      }
      return '';
    }); // end of replace()

    return strOutput;
  },
  // end of replaceEditorVarsPlaceholders()

  /**
   * Replace every occurance of `${attr}`, in `strInput`,
   * with the result of `feature.get(attr)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
    var strOutput;
    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }
    strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
      return feature.get(attr) || '';
    }); // end of replace()

    return strOutput;
  },
  // end of replaceAttributePlaceholders()

  objectToArray: function objectToArray(object) {
    if (object && (0, _typeof2["default"])(object) === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }
    return object;
  },
  // end of objectToArray()
  getVectorLayer: function getVectorLayer(source, style, zIndex) {
    var fnStyle;

    // make sure that the style is a function
    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function fnStyle() {
        return style;
      };
    }
    return new _layer.Vector({
      source: source,
      style: fnStyle,
      zIndex: zIndex
    });
  },
  // end of "getVectorLayer()"
  /**
   * Extracts the subdomain from the current request host and returns it.
   * @returns {string | *}
   */
  getCurrentSubdomain: function getCurrentSubdomain() {
    return window.location.href;
  },
  /**
   * Returns the current domain (without the subdomain)
   */
  getCurrentDomain: function getCurrentDomain() {
    var domain = window.location.hostname;
    var arrDomain = domain.split('.');
    if (arrDomain.length > 2) {
      // there is a subdomain
      return arrDomain[arrDomain.length - 2];
    } else {
      return arrDomain[0];
    }
  },
  getValue: function getValue(key) {
    return localStorage[key] || '';
  },
  storeValue: function storeValue(key, value) {
    localStorage[key] = value; // only strings
  },
  decodeHTML: function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
};

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-overlay-controller.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-overlay-controller.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OSM_REL_ATTRIBUTION = exports.C4gOverlayController = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "../MapsBundle/src/Resources/public/js/c4g-maps-config.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _GeoImage = _interopRequireDefault(__webpack_require__(/*! ol-ext/source/GeoImage */ "../MapsBundle/node_modules/ol-ext/source/GeoImage.js"));
var _GeoTIFF = _interopRequireDefault(__webpack_require__(/*! ol/source/GeoTIFF */ "../MapsBundle/node_modules/ol/source/GeoTIFF.js"));
var _WebGLTile = _interopRequireDefault(__webpack_require__(/*! ol/layer/WebGLTile.js */ "../MapsBundle/node_modules/ol/layer/WebGLTile.js"));
var _Projection = _interopRequireDefault(__webpack_require__(/*! ol/proj/Projection */ "../MapsBundle/node_modules/ol/proj/Projection.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

//copy link to add noopener
var OSM_REL_ATTRIBUTION = exports.OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
var C4gOverlayController = exports.C4gOverlayController = /*#__PURE__*/function () {
  function C4gOverlayController(baselayer) {
    (0, _classCallCheck2["default"])(this, C4gOverlayController);
    this.baselayer = baselayer;
    this.arrOverlays = [];
  }
  return (0, _createClass2["default"])(C4gOverlayController, [{
    key: "showOverlayLayer",
    value: function showOverlayLayer(overlayId) {
      var self = this,
        overlayLayerConfig,
        osmSourceConfigs = _c4gMapsConfig.config.osm,
        stamenSourceConfigs = _c4gMapsConfig.config.stamen,
        stadiaMapsSourceConfigs = _c4gMapsConfig.config.stadiaMaps,
        layerOptions,
        overlayLayer,
        noUrl;
      layerOptions = {};
      overlayLayer = new _layer.Tile({
        source: new _source.OSM()
      });
      overlayLayerConfig = this.arrOverlays[overlayId];
      var isSecure = window.isSecureContext;
      if (isSecure) {
        layerOptions.crossOrigin = 'anonymous';
      }
      switch (overlayLayerConfig.provider) {
        case 'osm':
          if (osmSourceConfigs[overlayLayerConfig.style]) {
            overlayLayer = new _layer.Tile({
              source: new _source.OSM(jQuery.extend(osmSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
          } else if (stadiaMapsSourceConfigs[overlayLayerConfig.style]) {
            // Stadia maps
            overlayLayer = new _layer.Tile({
              source: new _source.StadiaMaps(jQuery.extend(stadiaMapsSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
          } else if (overlayLayerConfig.style === 'osm_custom') {
            // custom
            noUrl = true;
            if (overlayLayerConfig.attribution) {
              layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
            }
            if (overlayLayerConfig.url) {
              layerOptions.url = overlayLayerConfig.url;
              noUrl = false;
            } else if (overlayLayerConfig.urls && overlayLayerConfig.urls.length > 0) {
              layerOptions.urls = overlayLayerConfig.urls;
              noUrl = false;
            }
            if (!noUrl) {
              overlayLayer = new _layer.Tile({
                source: new _source.XYZ(layerOptions)
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }
          } else {
            console.warn('unsupported osm-style -> switch to default');
          }
          break;
        case 'sea':
          // custom
          noUrl = true;
          if (overlayLayerConfig.attribution) {
            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
          }
          if (overlayLayerConfig.urls) {
            layerOptions.urls = overlayLayerConfig.urls;
            noUrl = false;
          }
          if (!noUrl) {
            overlayLayer = new _layer.Tile({
              source: new _source.XYZ(layerOptions)
            });
          }
          break;
        case 'wms':
          overlayLayer = new _layer.Tile({
            source: new _source.TileWMS({
              url: overlayLayerConfig.url,
              params: {
                LAYERS: overlayLayerConfig.params.layers,
                VERSION: overlayLayerConfig.params.version,
                //FORMAT: overlayLayerConfig.params.format,
                TRANSPARENT: overlayLayerConfig.params.transparent
              },
              gutter: overlayLayerConfig.gutter,
              attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
            })
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
          break;
        case 'owm':
          overlayLayer = new _layer.Tile({
            source: new _source.XYZ({
              url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
              attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
            })
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
          break;
        case 'geoimage':
          var imageSource = JSON.parse(overlayLayerConfig.geoImageJson);
          imageSource.url = overlayLayerConfig.imageSrc ? overlayLayerConfig.imageSrc : imageSource.url;
          imageSource.attributions = overlayLayerConfig.attribution;
          overlayLayer = new _layer.Image({
            source: new _GeoImage["default"](imageSource)
          });
          break;
        case 'geotiff':
          // const tiffProjection = new Projection({
          //   code: 'EPSG:4326',
          //   units: 'm',
          // });

          var tiffSources = [{
            url: overlayLayerConfig.imageSrc ? overlayLayerConfig.imageSrc : '' /*
                                                                                projection: tiffProjection*/
          }];
          overlayLayer = new _WebGLTile["default"]({
            source: new _GeoTIFF["default"]({
              sources: tiffSources,
              nodata: 0 //without overviews
            }),
            zIndex: 10000
          });
          break;
        default:
          console.warn('unsupported provider');
          break;
      }
      overlayLayer.setZIndex(-1);
      this.arrOverlays[overlayId].layer = overlayLayer;
      // this.arrOverlays[overlayId].changeOpacity(parseInt(overlayLayerConfig.opacity)/100);
      this.arrOverlays[overlayId].changeOpacity(overlayLayerConfig.opacity);
      return this.arrOverlays[overlayId].layer;
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-overlay.js":
/*!************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-overlay.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gOverlay = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gOverlay = exports.C4gOverlay = /*#__PURE__*/function () {
  function C4gOverlay(overlayArr, mapController) {
    (0, _classCallCheck2["default"])(this, C4gOverlay);
    this.id = overlayArr['id'];
    this.pid = overlayArr['pid'];
    this.name = overlayArr['name'];
    this.provider = overlayArr['provider'];
    this.style = overlayArr['style'];
    this.url = overlayArr['url'];
    this.urls = overlayArr['urls'];
    this.opacity = overlayArr['opacity'];
    this.attribution = overlayArr['attribution'];
    this.infopage = overlayArr['infopage'];
    this.gutter = overlayArr['gutter'];
    this.params = overlayArr['params'];
    this.imageSrc = overlayArr['image_src'];
    this.geoImageJson = overlayArr['geoimage_json'];
    this.layer = false;
    this.overlayArr = overlayArr;
    this.mapController = mapController;
  }
  return (0, _createClass2["default"])(C4gOverlay, [{
    key: "changeOpacity",
    value: function changeOpacity(value) {
      var layer;
      layer = this.layer;
      if (layer) {
        this.mapController.map.removeLayer(layer);
        layer.setOpacity(value / 100);
        this.mapController.map.addLayer(layer);
      }
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-popup-controller.js":
/*!*********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-popup-controller.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gPopupController = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gPopup = __webpack_require__(/*! ./c4g-popup */ "../MapsBundle/src/Resources/public/js/c4g-popup.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gPopupController = exports.C4gPopupController = /*#__PURE__*/function () {
  function C4gPopupController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gPopupController);
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);
    this.external = !!this.mapData.popupDiv;
    this.popups = [];
  }
  return (0, _createClass2["default"])(C4gPopupController, [{
    key: "addPopup",
    value: function addPopup() {
      var popupConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.popups.push(new _c4gPopup.C4gPopup(this));
      if (popupConfig) {
        this.popups[this.popups.length - 1].setContent(popupConfig);
      }
      if (this.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
    } // end of "addPopUp()"
  }, {
    key: "setPopup",
    value: function setPopup(popupConfig) {
      if (!this.popups[0]) {
        this.popups.push(new _c4gPopup.C4gPopup(this));
      }
      this.popups[0].setContent(popupConfig);
    } // end of "setPopup()"
  }, {
    key: "removePopup",
    value: function removePopup() {
      if (this.popups[0] && this.popups[0].popup && this.popups[0].popup.getMap()) {
        this.mapData.map.removeOverlay(this.popups[0].popup);
      } else if (this.popups[0] && this.popups[0].popupComponent) {
        this.popups[0].popupComponent.close(true);
      }
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-popup.js":
/*!**********************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-popup.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gPopup = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../MapsBundle/node_modules/react-dom/index.js"));
var _c4gPopupContainer = __webpack_require__(/*! ./components/c4g-popup-container */ "../MapsBundle/src/Resources/public/js/components/c4g-popup-container.jsx");
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var C4gPopup = exports.C4gPopup = /*#__PURE__*/function () {
  function C4gPopup(popupController) {
    (0, _classCallCheck2["default"])(this, C4gPopup);
    var scope = this;
    this.popupController = popupController;
    var popUpElement = document.createElement('div');
    popUpElement.setAttribute('id', 'c4g_popup_' + popupController.mapData.mapId);
    popUpElement.className = 'c4g-popup-wrapper c4g-active';
    var popUpCloseElement = document.createElement('button');
    popUpCloseElement.className = 'c4g-popup-close c4g-icon';
    jQuery(popUpCloseElement).click(function (event) {
      event.preventDefault();
      popupController.mapController.map.removeOverlay(scope.popup);
    });
    var popUpContent = document.createElement('div');
    popUpContent.className = 'c4g-popup-content';
    popUpElement.appendChild(popUpCloseElement);
    popUpElement.appendChild(popUpContent);
    this.popupContent = popUpContent;
    if (popupController.popupHandling === 1 || popupController.popupHandling === 0) {
      var autoPan = popupController.popupHandling === 1;
      this.popup = new _ol.Overlay({
        element: popUpElement,
        positioning: 'center-center',
        //'bottom-left',
        offset: [-50, 50],
        //-50, 0
        insertFirst: false,
        autoPan: autoPan,
        autoPanAnimation: {
          duration: 250
        },
        autoPanMargin: 200
      });
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 2) {
      jQuery(popUpElement).addClass('c4g-popup-wrapper-nonose');
      var center = popupController.mapController.map.getView().getCenter();
      this.popup = new _ol.Overlay({
        position: center,
        positioning: 'center-center',
        element: popUpElement,
        offset: [-50, 0],
        autoPan: false
      });
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 3) {
      var popupOptions = {
        open: true,
        alwaysExtended: false,
        //this.mapData.openDirectly,
        hideOther: popupController.mapController.hideOtherComponents,
        activeComps: popupController.mapController.getActiveComponents(),
        mapData: popupController.mapData,
        mapController: popupController.mapController
      };
      if (this.popupContainer) {
        _reactDom["default"].unmountComponentAtNode(this.popupContainer);
        delete popupController.mapController.components.popup;
        if (!popupController.external) {
          this.popupContainer.parentNode.removeChild(this.popupContainer);
        }
      }
      popupOptions.external = popupController.external;
      this.popupContainer = popupController.external ? document.querySelector("." + popupController.mapData.popupDiv) : document.createElement('div');
      if (!this.popupContainer) {
        this.popupContainer = document.createElement('div');
        popupOptions.external = false;
      }
      this.popupComponent = _reactDom["default"].render(/*#__PURE__*/React.createElement(_c4gPopupContainer.PopupContainer, popupOptions), this.popupContainer);
      if (!popupOptions.external) {
        popupController.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
        popupController.mapController.hideOtherComponents(this.currentPopup);
      }
      this.currentPopup = this.popupComponent;
      // close open sideboards
      popupController.mapController.components.popup = this.popupComponent;
    }
  }
  return (0, _createClass2["default"])(C4gPopup, [{
    key: "setContent",
    value: function setContent(popupConfig) {
      var feature = popupConfig.feature;
      var layer = popupConfig.layer;
      var popupContent;
      var divPopup;
      if (feature.get('features')) {
        var features = feature.get('features');
        for (var i = 0; i < features.length; i++) {
          popupContent += _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.popupController.mapController.data.lang);
        }
      } else {
        popupContent = _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.popupController.mapController.data.lang);
      }
      divPopup = document.createElement('div');
      if (this.popupController.popupHandling < 3) {
        if (!this.popup.getMap()) {
          //popup not already in the map
          this.popupController.mapController.map.addOverlay(this.popup);
        }
        divPopup.innerHTML = popupContent;
        this.popupContent.innerHTML = '';
        this.popupContent.appendChild(divPopup);
        if (this.popupController.popupHandling < 2) {
          if (feature.getGeometry()) {
            var geometry = feature.getGeometry();
            this.setPosition(geometry);
          } else {
            //ToDO load feature coordinates for geometry
          }
        } else if (this.popupController.popupHandling == 2) {
          var center = this.popupController.mapController.map.getView().getCenter();
          var _geometry = new _geom.Point(center);
          this.setPosition(center);
        }
      } else {
        if (this.popupComponent) {
          var activeComps = this.popupController.mapController.getActiveComponents();
          if (!this.popupComponent.state.open) {
            this.popupComponent.open(activeComps);
          }
          this.popupComponent.setContent(popupContent);
        }
      }
      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_appendPopup) === 'object') {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, {
          popup: popupConfig,
          content: popupContent,
          mapController: this.popupController.mapController,
          comp: this.popupComponent || null,
          div: divPopup
        });
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(geometry) {
      var map = this.popupController.mapController.map;
      var element = this.popup.getElement();
      var coordinates = null;
      if (geometry && geometry.getType() === 'Point') {
        coordinates = geometry.getCoordinates();
      } else if (geometry) {
        var extent = geometry.getExtent();
        coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
      } else {
        coordinates = map.getView().getCenter();
      }
      var center = map.getView().getCenter();
      var positioning = "";
      var offset = [0, 0];
      if (center[1] >= coordinates[1]) {
        positioning += "bottom";
      } else {
        offset[1] = 10;
        positioning += "top";
      }
      if (center[0] >= coordinates[0]) {
        offset[0] = -50;
        positioning += "-left";
      } else {
        offset[0] = 100;
        positioning += "-right";
      }
      jQuery(element).removeClass("nose-top-left").removeClass("nose-top-right").removeClass("nose-bottom-left").removeClass("nose-bottom-right");
      jQuery(element).addClass("nose-" + positioning);
      this.popup.setPositioning(positioning);
      this.popup.setOffset(offset);
      this.popup.setPosition(coordinates);
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js":
/*!****************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toHumanDistance = toHumanDistance;
exports.toHumanTime = toHumanTime;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters  The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {
  var distance, humanDistance;
  distance = parseInt(distanceInMeters, 10);
  distance = distance / 1000;
  if (distance >= 100) {
    humanDistance = distance.toFixed(0) + " " + 'km';
  } else if (distance >= 10) {
    humanDistance = distance.toFixed(1) + " " + 'km';
  } else if (distance >= 0.1) {
    humanDistance = distance.toFixed(2) + " " + 'km';
  } else {
    humanDistance = (distance * 1000).toFixed(0) + " " + 'm';
  }
  return humanDistance;
}

/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */
function toHumanTime(timeInSeconds) {
  var seconds, minutes, hours, humanTime;
  seconds = parseInt(timeInSeconds, 10);
  minutes = parseInt(seconds / 60, 10);
  seconds = seconds % 60;
  hours = parseInt(minutes / 60, 10);
  minutes = minutes % 60;
  if (hours === 0 && minutes === 0) {
    humanTime = seconds + " " + 's';
  } else if (hours === 0) {
    humanTime = minutes + " " + 'min';
  } else {
    humanTime = hours + " " + 'h' + " " + minutes + " " + 'min';
  }
  return humanTime;
}

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-routing-permalink.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-routing-permalink.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RoutingPermalink = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../MapsBundle/node_modules/@babel/runtime/regenerator/index.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../MapsBundle/node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../MapsBundle/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../MapsBundle/node_modules/@babel/runtime/helpers/defineProperty.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RoutingPermalink = exports.RoutingPermalink = /*#__PURE__*/function () {
  function RoutingPermalink(router) {
    (0, _classCallCheck2["default"])(this, RoutingPermalink);
    (0, _defineProperty2["default"])(this, "_router", void 0);
    this._router = router;
    this.linkFragments = {};
    this.rawFragments = {};
  }
  return (0, _createClass2["default"])(RoutingPermalink, [{
    key: "router",
    get: function get() {
      return this._router;
    },
    set: function set(value) {
      this._router = value;
    }

    /**
     * Sets one key of this.linkFragments to the given value.
     * @param key
     * @param value
     */
  }, {
    key: "updateLinkFragments",
    value: function updateLinkFragments(key, value) {
      if (!this.linkFragments) {
        this.linkFragments = {};
      }
      this.linkFragments[key] = value;
      this.updateUrl();
    }

    /**
     * Checks the current values in this.linkFragments and updates the browser URL.
     */
  }, {
    key: "updateUrl",
    value: function updateUrl() {
      var url = "?mapsParams=";
      var fragments = this.linkFragments;
      if (fragments.mode && fragments.mode === "area") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.addressArea ? "a:" + fragments.addressArea[0] + "," + fragments.addressArea[1] + "/" : "";
        url += fragments.detourArea ? "d:" + fragments.detourArea + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";
        var completeUrl = window.location.pathname + url;
        history.pushState({}, null, completeUrl);
      } else if (fragments.mode && fragments.mode === "route") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.fromAddress ? "af:" + fragments.fromAddress[0] + "," + fragments.fromAddress[1] + "/" : "";
        url += fragments.toAddress ? "at:" + fragments.toAddress[0] + "," + fragments.toAddress[1] + "/" : "";
        url += fragments.detourRoute ? "d:" + fragments.detourRoute + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";
        var _completeUrl = window.location.pathname + url;
        history.pushState({}, null, _completeUrl);
      }
    }

    /**
     * Checks if there are GET params loaded into the mapData and triggers the search accordingly.
     * The first param is expected to be either "route" or "area" to indicate the type of search.
     * After that, the next param (or the next two, in case of "route") should be an address string.
     * The following parameters are detour/searchtype/forceStart.
     */
  }, {
    key: "handleInitialParams",
    value: (function () {
      var _handleInitialParams = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var scope, arrParams, objParams, routerLayers, desiredButton, key, obj, innerKey, singleEntry, cmpValue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.rawFragments = this.router.props.mapController.data.initialParams;
              scope = this;
              if (!this.rawFragments) {
                _context.next = 30;
                break;
              }
              _context.next = 5;
              return this.checkForOldParams();
            case 5:
              arrParams = this.rawFragments.split("/").map(function (pair) {
                return pair.split(":");
              });
              objParams = {};
              arrParams.forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return objParams[key] = value;
              });
              routerLayers = this.router.props.mapController.data.routerLayers;
              desiredButton = "";
              _context.t0 = _regenerator["default"].keys(routerLayers);
            case 11:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 28;
                break;
              }
              key = _context.t1.value;
              if (!routerLayers.hasOwnProperty(key)) {
                _context.next = 26;
                break;
              }
              obj = routerLayers[key];
              _context.t2 = _regenerator["default"].keys(obj);
            case 16:
              if ((_context.t3 = _context.t2()).done) {
                _context.next = 26;
                break;
              }
              innerKey = _context.t3.value;
              if (!obj.hasOwnProperty(innerKey)) {
                _context.next = 24;
                break;
              }
              singleEntry = obj[innerKey];
              cmpValue = objParams.s;
              if (!(singleEntry.mapLabel === cmpValue)) {
                _context.next = 24;
                break;
              }
              desiredButton = innerKey;
              return _context.abrupt("break", 28);
            case 24:
              _context.next = 16;
              break;
            case 26:
              _context.next = 11;
              break;
            case 28:
              // iterate buttons later on when the UI is built
              this.desiredButtonRouting = desiredButton;
              if (objParams.m === "area") {
                this.handleInitialAreaSearch(objParams);
              } else if (objParams.m === "route") {
                this.handleInitialRouteSearch(objParams);
              }
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handleInitialParams() {
        return _handleInitialParams.apply(this, arguments);
      }
      return handleInitialParams;
    }()
    /**
     * Checks the URL for the deprecated URL structure and converts it to the current structure.
     */
    )
  }, {
    key: "checkForOldParams",
    value: (function () {
      var _checkForOldParams = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var strParams, params, arrFragments, fromCoords, toCoords, coords;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              strParams = "";
              params = this.router.props.mapController.data.initialParams;
              if (!(params.indexOf("m:") !== -1)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return");
            case 4:
              arrFragments = params.split("/");
              strParams += "m:" + arrFragments[0] + "/";
              if (!(arrFragments[0] === "route")) {
                _context2.next = 20;
                break;
              }
              _context2.next = 9;
              return this.router.performGeoSearch(arrFragments[1]);
            case 9:
              fromCoords = _context2.sent;
              _context2.next = 12;
              return this.router.performGeoSearch(arrFragments[2]);
            case 12:
              toCoords = _context2.sent;
              strParams += "af:" + fromCoords.join() + "/";
              strParams += "at:" + toCoords.join() + "/";
              strParams += "d:" + arrFragments[3] + "/";
              strParams += "s:" + arrFragments[4] + "/";
              strParams += "f:" + arrFragments[5] + "/";
              _context2.next = 27;
              break;
            case 20:
              _context2.next = 22;
              return this.router.performGeoSearch(arrFragments[1]);
            case 22:
              coords = _context2.sent;
              strParams += "a:" + coords.join() + "/";
              strParams += "d:" + arrFragments[2] + "/";
              strParams += "s:" + arrFragments[3] + "/";
              strParams += "f:" + arrFragments[4] + "/";
            case 27:
              this.rawFragments = strParams;
            case 28:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function checkForOldParams() {
        return _checkForOldParams.apply(this, arguments);
      }
      return checkForOldParams;
    }())
  }, {
    key: "handleInitialAreaSearch",
    value: function handleInitialAreaSearch(objParams) {
      var detour = objParams.d || this.router.props.detourRoute.initial;
      this.router.setState({
        mode: "area",
        detourArea: parseFloat(detour)
      });
      var center = objParams.a;
      if (center) {
        center = center.split(",");
      }
      detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;
      if (detour || detour > 1) {
        this.updateLinkFragments("detourArea", detour);
        // jQuery(this.toggleDetourArea).val(detour);
        // jQuery(this.toggleDetourArea).trigger('input');
      }
      if (center && center.length === 2) {
        this.updateLinkFragments("addressArea", center);
        this.router.setAreaPoint(parseFloat(center[0]), parseFloat(center[1]));
      }
      if (searchtype) {
        var routerLayers = this.router.mapData.routerLayers;
        loopLayers: for (var i in routerLayers) {
          if (routerLayers.hasOwnProperty(i)) {
            for (var j in routerLayers[i]) {
              if (routerLayers[i].hasOwnProperty(j)) {
                if (routerLayers[i][j].keys.includes(searchtype) || routerLayers[i][j].labels.includes(searchtype)) {
                  this.router.setState({
                    layerArea: i,
                    layerValueArea: j
                  });
                  break loopLayers;
                }
              }
            }
          }
        }
        this.updateLinkFragments("searchType", searchtype);
      }
      if (forceStart) {
        this.updateLinkFragments("forceStart", forceStart);
      }
      // activate area view
      jQuery(".c4g-portside-viewtriggerbar .c4g-area-search").click();
    }
  }, {
    key: "handleInitialRouteSearch",
    value: function handleInitialRouteSearch(objParams) {
      var detour = objParams.d || this.router.props.detourRoute.initial;
      this.router.setState({
        mode: "route",
        detourRoute: parseFloat(detour)
      });
      var fromAddress = objParams.af ? objParams.af.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      var toAddress = objParams.at ? objParams.at.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;
      if (detour) {
        jQuery(this.router.toggleDetourRoute).val(detour);
        jQuery(this.router.toggleDetourRoute).trigger('input');
        this.updateLinkFragments("detourRoute", objParams.d);
      }
      if (fromAddress) {
        this.updateLinkFragments("fromAddress", fromAddress);
      }
      if (toAddress) {
        this.updateLinkFragments("toAddress", toAddress);
      }
      if (searchtype) {
        var routerLayers = this.router.mapData.routerLayers;
        loopLayers: for (var i in routerLayers) {
          if (routerLayers.hasOwnProperty(i)) {
            for (var j in routerLayers[i]) {
              if (routerLayers[i].hasOwnProperty(j)) {
                if (routerLayers[i][j].keys.includes(searchtype) || routerLayers[i][j].labels.includes(searchtype)) {
                  this.router.setState({
                    layerRoute: i,
                    layerValueRoute: j
                  });
                  break loopLayers;
                }
              }
            }
          }
        }
        this.updateLinkFragments("searchType", searchtype);
      }
      if (forceStart) {
        this.updateLinkFragments("forceStart", objParams.f);
      }
      if (fromAddress && toAddress) {
        this.router.setRouteFrom(fromAddress[0], fromAddress[1]);
        this.router.setRouteTo(toAddress[0], toAddress[1]);
      }
      this.router.recalculateRoute();
      // activate router view
      jQuery(".c4g-portside-viewtriggerbar .c4g-route-search").click();
    }
  }]);
}();

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/c4g-user-position.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/c4g-user-position.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserPosition = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _Geolocation = _interopRequireDefault(__webpack_require__(/*! ol/Geolocation */ "../MapsBundle/node_modules/ol/Geolocation.js"));
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "../MapsBundle/node_modules/ol/Feature.js"));
var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var UserPosition = exports.UserPosition = /*#__PURE__*/(0, _createClass2["default"])(function UserPosition(mapController) {
  (0, _classCallCheck2["default"])(this, UserPosition);
  var scope = this;
  this.mapController = mapController;
  var lang = (0, _c4gMapsI18n.getLanguage)(mapController.data);
  this.feature = new _Feature["default"]();
  this.feature.set('tooltip', lang.TOOLTIP_POSITION);
  this.feature.set('noCursor', true);
  var layer = new _layer.Vector({
    source: new _source.Vector({
      features: [this.feature]
    })
  });
  this.mapController.map.addLayer(layer);
  if (this.mapController.data && this.mapController.data.userLocationStyle) {
    this.mapController.proxy.locationStyleController.loadLocationStyles([this.mapController.data.userLocationStyle], {
      "done": function done() {
        if (scope.mapController.proxy.locationStyleController.arrLocStyles[scope.mapController.data.userLocationStyle].style) {
          var style = scope.mapController.proxy.locationStyleController.arrLocStyles[scope.mapController.data.userLocationStyle].style;
          scope.feature.setStyle(style);
        } else {
          var _style = scope.mapController.proxy.locationStyleController.arrLocStyles[scope.mapController.data.userLocationStyle].getStyleFunction();
          scope.mapController.proxy.locationStyleController.arrLocStyles[scope.mapController.data.userLocationStyle].style = _style;
          scope.feature.setStyle(_style);
        }
      }
    });
  }
  var funcLocation = function funcLocation(evt) {
    var coords = scope.mapController.geolocation.getPosition();
    if (!coords) {
      window.setTimeout(function () {
        scope.mapController.geolocation.dispatchEvent('change');
      }, 200);
      return;
    }
    var point = new _geom.Point(coords);
    scope.feature.setGeometry(point);
  };
  this.mapController.geolocation.on('change', funcLocation);
  if (this.mapController.geolocation.getTracking()) {
    this.mapController.geolocation.dispatchEvent('change');
  } /*
    else {
       this.mapController.geolocation.setTracking(true)
    }*/
});

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx":
/*!*********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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
var _c4gMapsProxy = __webpack_require__(/*! ../c4g-maps-proxy */ "../MapsBundle/src/Resources/public/js/c4g-maps-proxy.js");
var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsMiscSpinner = __webpack_require__(/*! ../c4g-maps-misc-spinner */ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-spinner.js");
var _c4gMapsMiscMaphover = __webpack_require__(/*! ../c4g-maps-misc-maphover */ "../MapsBundle/src/Resources/public/js/c4g-maps-misc-maphover.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _Control = _interopRequireDefault(__webpack_require__(/*! ol/control/Control */ "../MapsBundle/node_modules/ol/control/Control.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsControls = __webpack_require__(/*! ../c4g-maps-controls */ "../MapsBundle/src/Resources/public/js/c4g-maps-controls.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "../MapsBundle/node_modules/ol/Feature.js"));
var _extent2 = __webpack_require__(/*! ol/extent */ "../MapsBundle/node_modules/ol/extent.js");
var _condition = __webpack_require__(/*! ol/events/condition */ "../MapsBundle/node_modules/ol/events/condition.js");
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../MapsBundle/node_modules/react-dom/index.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "../MapsBundle/node_modules/ol/layer/Tile.js"));
var _routingConstantI18nEn = __webpack_require__(/*! ./../routing-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-en.js");
var _routingConstantI18nDe = __webpack_require__(/*! ./../routing-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-de.js");
var _c4gUserPosition = __webpack_require__(/*! ./../c4g-user-position */ "../MapsBundle/src/Resources/public/js/c4g-user-position.js");
var _c4gRouterView = __webpack_require__(/*! ./c4g-router-view.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-view.jsx");
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
var GeoSearch = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-geosearch_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-geosearch.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-geosearch.jsx"));
});
// import GeoSearch from "./c4g-geosearch.jsx";
var FeatureFilter = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-MapsBundle_node_modules_opening_hours_build_opening_hours_js"), __webpack_require__.e("MapsBundle_src_Resources_public_js_components_c4g-feature-filter_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-feature-filter.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter.jsx"));
});
var BaselayerSwitcher = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-baselayerswitcher_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-baselayerswitcher.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-baselayerswitcher.jsx"));
});
var StarboardPanel = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-starboard-panel_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-starboard-panel.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-starboard-panel.jsx"));
});
var StarboardScope = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-starboard-scope_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-starboard-scope.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-starboard-scope.jsx"));
});
var Infopage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-infopage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-infopage.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-infopage.jsx"));
});
var Measuretools = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-measuretools_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-measuretools.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-measuretools.jsx"));
});
var Permalink = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-permalink_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-permalink.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-permalink.jsx"));
});
var Zoom = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-zoom_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-zoom.jsx"));
});
var ZoomExtent = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-zoom-extent_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-extent.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-zoom-extent.jsx"));
});
var ZoomHome = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-zoom-home_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-home.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-zoom-home.jsx"));
});
var ZoomPosition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-zoom-position_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-position.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-zoom-position.jsx"));
});
var Grid = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-grid_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-grid.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-grid.jsx"));
});
var Rotate = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-rotate_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-rotate.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-rotate.jsx"));
});
var Fullscreen = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-fullscreen_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-fullscreen.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-fullscreen.jsx"));
});
var Print = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-print_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-print.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-print.jsx"));
});
var OverviewMap = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-overviewmap_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-overviewmap.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-overviewmap.jsx"));
});
//const RouterView = React.lazy(() => import("./c4g-router-view.jsx"));
var EditorComponent = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-editor-component_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-component.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-editor-component.jsx"));
});
// import {EditorComponent} from "./c4g-editor-component.jsx";

var langRouteConstants = {};
var containerAddresses = {
  arrFromPositions: [],
  arrFromNames: [],
  arrToPositions: [],
  arrToNames: [],
  arrOverPositions: {},
  arrOverNames: {}
};
var langConstants = {};
'use strict';
var MapController = exports["default"] = /*#__PURE__*/function (_Component) {
  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  function MapController(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MapController);
    _this = _callSuper(this, MapController, [props]);
    //---
    var mapData = props.mapData;
    _this.state = {
      objLayers: [],
      arrLayerStates: [],
      openComponent: null,
      objTabLayers: [],
      styleData: {},
      arrTabLayerStates: [],
      activeBaselayerId: null
    };
    _this.setObjLayers = _this.setObjLayers.bind(_this);
    _this.setBaselayerId = _this.setBaselayerId.bind(_this);
    _this.setLayerStates = _this.setLayerStates.bind(_this);
    _this.changeActiveLayers = _this.changeActiveLayers.bind(_this);
    _this.setTabStates = _this.setTabStates.bind(_this);
    _this.setLocStyles = _this.setLocStyles.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.map = null;
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    var self = _this,
      permalink = false,
      minZoom,
      maxZoom,
      view,
      geoLocation,
      controls = [],
      interactions = [],
      displayAllLocations,
      domMapDiv,
      kinetic,
      starboard_label,
      enableStarboard = true;

    //--

    mapData = jQuery.extend({
      api: {},
      addIdToDiv: false,
      mapId: 1,
      mapDiv: 'c4g_map',
      center: {},
      calc_extent: 'CENTERZOOM',
      attribution: {},
      editor: {},
      measuretools: {},
      infopage: {},
      account: '',
      starboard: {},
      layerswitcher: {},
      baselayerswitcher: {},
      geosearch: {}
    }, mapData);
    if (mapData.calc_extent === 'LOCATIONS' || mapData.calc_extent === 'CENTERLOCS') {
      mapData = jQuery.extend({
        min_gap: 25
      }, mapData);
    }

    // center
    mapData.center = jQuery.extend({
      lat: 52.22,
      lon: 9.43,
      rotation: 0,
      zoom: 6
    }, mapData.center);
    // attribution
    mapData.attribution = jQuery.extend({
      enable: true,
      collapsed: false,
      collapsible: true
    }, mapData.attribution);
    // geosearch
    mapData.geosearch = jQuery.extend({
      enable: false,
      div: false
    }, mapData.geosearch);
    // permalink
    mapData.permalink = jQuery.extend({
      enable: false,
      get_parameter: false
    }, mapData.permalink);
    _this.data = mapData;
    if (mapData.addIdToDiv) {
      mapData.mapDiv += '_' + mapData.mapId;
    }
    if (mapData.caching) {
      window.onbeforeunload = function () {
        var layers = self.getCurrentLayerStates(self.state.arrLayerStates);
        _c4gMapsUtils.utils.storeValue('layers', layers);
        _c4gMapsUtils.utils.storeValue('tstampc4g', Date.now());
      };
    }
    // PHPStorm marks this as error, but it is none
    // This is needed for preventing an error with the OSM-Overpass API
    // which occurs when MooTools is loaded
    if (window.MooTools && Browser.Document) {
      Document = Browser.Document;
    }
    // check permalink
    if (mapData.permalink.enable) {
      permalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);
      if (permalink) {
        permalink = permalink.split('/');
        switch (permalink.length) {
          case 6:
            permalink[0] = parseFloat(permalink[0]);
            mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
            permalink[1] = parseFloat(permalink[1]);
            mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
            permalink[2] = parseInt(permalink[2], 10);
            mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
            permalink[3] = parseFloat(permalink[3]);
            mapData.center.rotation = !isNaN(permalink[3]) ? permalink[3] : mapData.center.rotation;
            permalink[4] = parseInt(permalink[4], 10);
            mapData.baselayer = !isNaN(permalink[4]) ? permalink[4] : mapData.baselayer;
            mapData.layers = permalink[5].split(':');
            // decode deltaEncoding
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;
          case 3:
            permalink[0] = parseFloat(permalink[0]);
            mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
            permalink[1] = parseFloat(permalink[1]);
            mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
            permalink[2] = parseInt(permalink[2], 10);
            mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
            // disable zooming to all locations
            mapData.calc_extent = "CENTERZOOM";
            break;
          case 2:
            // baselayer and layers only
            permalink[0] = parseInt(permalink[0], 10);
            mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
            mapData.layers = permalink[1].split(':');
            // decode deltaEncoding
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;
          case 1:
            // layers only
            mapData.layers = permalink[0].split(':');
            // decode deltaEncoding
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;
          default:
            // invalid count of permalink parameters
            permalink = false;
            mapData.layers = false;
        }
      } else {
        // just to make sure this var is really "false"
        permalink = false;
      }
    } else {
      permalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);
      if (permalink) {
        permalink = permalink.split('/');
        if (permalink.length === 3) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
          // disable zooming to all locations
          mapData.calc_extent = "CENTERZOOM";
        } else if (permalink.length === 4) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
          permalink[3] = parseInt(permalink[3], 10);
          mapData.default_baselayer = permalink[3];
          // disable zooming to all locations
          mapData.calc_extent = "CENTERZOOM";
        }
        permalink = false;
      }
    }
    _this.proxy = new _c4gMapsProxy.MapProxy({
      mapController: _this
    });
    _this.components = _this.components || {};
    _this.hideOtherComponents = _this.hideOtherComponents.bind(_this);
    _this.hideOtherBottomComponents = _this.hideOtherBottomComponents.bind(_this);
    _this.getActiveComponents = _this.getActiveComponents.bind(_this);

    // add view observer to update permalink on center change, if a permalink exists
    // use other permalink variable to avoid interference with the actual permalink mechanism
    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    window.c4gMapsHooks.map_center_changed.push(function (center) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);
      if (currentPermalink) {
        if (currentPermalink) {
          currentPermalink = currentPermalink.split('/');
          if (currentPermalink.length >= 3) {
            center = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326");
            currentPermalink[0] = center[0];
            currentPermalink[1] = center[1];
            _c4gMapsUtils.utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true);
          }
        }
      }
    });
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(function (proxy) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);
      if (currentPermalink) {
        if (currentPermalink) {
          currentPermalink = currentPermalink.split('/');
          if (currentPermalink.length >= 3) {
            currentPermalink[2] = parseInt(view.getZoom(), 10) || currentPermalink[2];
            _c4gMapsUtils.utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true);
          }
        }
      }
    });
    if (mapData.permalink.withoutGenerator) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);
      if (!currentPermalink && mapData.center) {
        var _permalink = [];
        _permalink.push(mapData.center.lon);
        _permalink.push(mapData.center.lat);
        _permalink.push(mapData.center.zoom);
        _c4gMapsUtils.utils.setUrlParam(_permalink.join('/'), mapData.permalink.get_parameter, true);
      }
    }
    if (mapData.minZoom && mapData.minZoom > 0) {
      minZoom = mapData.minZoom;
    } else {
      minZoom = 0;
    }
    if (mapData.maxZoom && mapData.maxZoom > 0) {
      maxZoom = mapData.maxZoom;
    } else {
      maxZoom = 19;
    }
    if (mapData.caching) {
      if (_c4gMapsUtils.utils.getValue('tstampc4g') && _c4gMapsUtils.utils.getValue('tstampc4g') + 604800 > Date.now()) {
        if (_c4gMapsUtils.utils.getValue('lon') && _c4gMapsUtils.utils.getValue('lat')) {
          mapData.center.lon = _c4gMapsUtils.utils.getValue('lon');
          mapData.center.lat = _c4gMapsUtils.utils.getValue('lat');
        }
        if (_c4gMapsUtils.utils.getValue('zoom')) {
          mapData.center.zoom = _c4gMapsUtils.utils.getValue('zoom');
        }
        if (_c4gMapsUtils.utils.getValue('layers')) {
          mapData.layers = _c4gMapsUtils.utils.getValue('layers');
        }
      }
    }
    if (mapData.restr_bottomleft_lon && mapData.restr_bottomleft_lat && mapData.restr_topright_lon && mapData.restr_topright_lat) {
      var extent = [parseFloat(mapData.restr_bottomleft_lon), parseFloat(mapData.restr_bottomleft_lat), parseFloat(mapData.restr_topright_lon), parseFloat(mapData.restr_topright_lat)];
      extent = (0, _proj.transformExtent)(extent, "EPSG:4326", "EPSG:3857");
      view = new _ol.View({
        extent: extent,
        center: (0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    } else {
      view = new _ol.View({
        center: (0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    }
    _this.geolocation = new _ol.Geolocation({
      tracking: false,
      projection: view.getProjection()
    });
    _this.geolocation.on('change', function (evt) {
      for (var i in _this.geolocation.arrFuncs) {
        if (_this.geolocation.arrFuncs.hasOwnProperty(i)) {
          _this.geolocation.arrFuncs[i](evt, i);
        }
      }
    });
    // check userposition
    if (mapData.geolocation && !permalink) {
      var funcLocation = function funcLocation(evt) {
        var position = this.getPosition();
        if (mapData.geolocation_extent && mapData.geolocation_extent[0]) {
          var bottomLeft = (0, _proj.fromLonLat)([mapData.geolocation_extent[0], mapData.geolocation_extent[1]]);
          var topRight = (0, _proj.fromLonLat)([mapData.geolocation_extent[2], mapData.geolocation_extent[3]]);
          var _extent = (0, _extent2.boundingExtent)([bottomLeft, topRight]);
          if (!position || !(0, _extent2.containsCoordinate)(_extent, position)) {
            return;
          }
        }
        if (position) {
          view.setCenter(position);
        }
        if (mapData.geolocation_zoom) {
          view.setZoom(parseInt(mapData.geolocation_zoom, 10));
        }
        if (self.map) {
          self.map.setView(view);
          if (self.$overlaycontainer_stopevent) {
            // utils.redrawMapView(self);
          }
        }
      };
      _this.geolocation.once('change', funcLocation);
      if (_this.geolocation.getTracking()) {
        _this.geolocation.dispatchEvent('change');
      }
      // else {
      //   this.geolocation.setTracking(true);
      // }
    }

    // enable default Controls/Interactions if there is no profile
    // [note]: maybe change this in the future? -> "no default"-option?
    if (!mapData.profile) {
      controls = (0, _control.defaults)();
      interactions = (0, _interaction.defaults)();
    }

    // set default base layer when backend geopicker is enabled
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      if (mapData.default_baselayer) {
        _this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (self.proxy.baselayerController.arrBaselayers.hasOwnProperty(mapData.default_baselayer)) {
            self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
          }
        });
      } // end inner if
      _this.map = new _ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new _layer.Group({
          title: 'Base maps',
          layers: [],
          checkSum: 'baseMapsLayer'
        })],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    } else {
      // initialize Map
      //

      if (mapData.default_baselayer) {
        _this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (mapData.baselayer && baselayerIds.indexOf(mapData.baselayer.toString()) > -1) {
            mapData.default_baselayer = mapData.baselayer;
          }
          if (mapData.caching) {
            if (_c4gMapsUtils.utils.getValue('baselayer')) {
              mapData.default_baselayer = _c4gMapsUtils.utils.getValue('baselayer');
            }
          }
          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
        });
      }
      _this.map = new _ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new _layer.Group({
          title: 'Base maps',
          layers: [],
          checkSum: 'baseMapsLayer'
        })],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    }
    if (window.c4gMapsHooks && window.c4gMapsHooks.changeInitialView) {
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.changeInitialView, {
        mapData: mapData,
        view: view
      });
    }
    mapData.map = _this.map;

    // set map-size and -margin
    domMapDiv = document.getElementById(mapData.mapDiv);
    if (!domMapDiv) {
      domMapDiv = document.getElementById("#" + mapData.mapDiv);
      if (!domMapDiv) {
        domMapDiv = document.getElementById("." + mapData.mapDiv);
      }
    }
    if (domMapDiv && domMapDiv.style) {
      if (mapData.width) {
        if (mapData.margin) {
          var arrMargins = mapData.margin.split(" ");
          var rightMargin = 0;
          var leftMargin = 0;
          switch (arrMargins.length) {
            case 4:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[3];
              break;
            case 2:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[1];
              break;
            case 1:
              rightMargin = arrMargins[0];
              leftMargin = arrMargins[0];
              break;
          }
          // "==" is correct here since we want to check number and string
          if (leftMargin == 0) {
            leftMargin += "px";
          }
          if (rightMargin == 0) {
            rightMargin += "px";
          }
          domMapDiv.style.width = "calc(" + mapData.width + " - " + leftMargin + " - " + rightMargin + ")";
        } else {
          domMapDiv.style.width = mapData.width;
        }
      }
      if (mapData.height) {
        domMapDiv.style.height = mapData.height;
      } else {
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
          var fieldsetHeight = domMapDiv.parentElement.parentElement.offsetHeight;
          domMapDiv.style.height = 'calc(100vh - ' + fieldsetHeight + 'px)';
          domMapDiv.style.minHeight = '480px';
          domMapDiv.style.maxWidth = '100vw';
        } else {
          if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement && !domMapDiv.parentElement.parentElement.offsetHeight) {
            domMapDiv.style.height = '100vh';
          } else if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement) {
            var height = domMapDiv.parentElement.parentElement.offsetHeight;
            if (height < 320) {
              height = 320; //minimal default value if not set in map configuration
            }
            domMapDiv.style.height = height + 'px';
          }
        }
      }
      if (mapData.margin) {
        domMapDiv.style.padding = mapData.margin;
      }
    } else {
      console.warn('can not get element by id mapData.mapDiv');
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    // save overlaycontainer
    _this.$overlaycontainer_stopevent = jQuery('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_OVERLAYCONTAINER_SE);
    _this.map.updateSize();
    _this.proxy.initialize();
    // this.proxy.loadBaseLayers();
    // this.proxy.loadLayers();
    // ---

    // add Spinner
    _this.spinner = new _c4gMapsMiscSpinner.Spinner({
      className: _c4gMapsConstant.cssConstants.LARGE
    });
    // add mapHover
    _this.mapHover = new _c4gMapsMiscMaphover.MapHover({
      mapController: _this
    });

    // add interactions ===
    //

    // mouse navigation
    if (mapData.mouse_nav) {
      // drag pan and kinetic scrolling
      if (mapData.mouse_nav.drag_pan) {
        kinetic = mapData.mouse_nav.kinetic ? new _ol.Kinetic(-0.005, 0.05, 100) : null;
        _this.map.addInteraction(new _interaction.DragPan({
          kinetic: kinetic,
          condition: function condition(event) {
            if (mapData.touch_nav.twoFingers) {
              var origEvent = event.originalEvent;
              if (origEvent.pointerType !== 'mouse') {
                if (event.activePointers && event.activePointers.length === 1) {
                  return false;
                }
              }
            }
            return true;
          }
        }));
      }
      // mousewheel zoom
      if (mapData.mouse_nav.wheel_zoom) {
        _this.map.addInteraction(new _interaction.MouseWheelZoom());
      }
      // doubleclick zoom
      if (mapData.mouse_nav.doubleclick_zoom) {
        _this.map.addInteraction(new _interaction.DoubleClickZoom());
      }
      // box zoom
      if (mapData.mouse_nav.drag_zoom) {
        _this.map.addInteraction(new _interaction.DragZoom({
          condition: _condition.shiftKeyOnly
        }));
      }
      // drag rotate & zoom
      if (mapData.rotate) {
        var customCondition = function customCondition(mapBrowserEvent) {
          var browserEvent = mapBrowserEvent.originalEvent;
          return browserEvent.ctrlKey && browserEvent.shiftKey;
        };
        _this.map.addInteraction(new _interaction.DragRotateAndZoom({
          condition: customCondition
        }));
      }
    }
    // touch navigation
    if (mapData.touch_nav) {
      // rotate (pinch)
      if (mapData.touch_nav.rotate) {
        _this.map.addInteraction(new _interaction.PinchRotate());
      }
      // zoom (pinch)
      if (mapData.touch_nav.zoom) {
        _this.map.addInteraction(new _interaction.PinchZoom({
          constrainResolution: true
        }));
      }
    }
    // keyboard navigation
    if (mapData.keyboard_nav) {
      // pan (arrow keys)
      if (mapData.keyboard_nav.pan) {
        _this.map.addInteraction(new _interaction.KeyboardPan());
      }
      // zoom ("+" and "-" key)
      if (mapData.keyboard_nav.zoom) {
        _this.map.addInteraction(new _interaction.KeyboardZoom());
      }
    }

    // ===
    // add controls ===
    _this.mapsControls = new _c4gMapsControls.MapsControls(_this);
    _this.mapsControls.init();

    // add container for react components
    if (mapData.layerswitcher.enable) {
      if (mapData.starboard.div) {
        _this.reactContainer = document.querySelector("." + mapData.starboard.div);
        if (!_this.reactContainer) {
          _this.reactContainer = document.createElement('div');
          _this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";
          _this.$overlaycontainer_stopevent.append(_this.reactContainer);
        } else {
          _this.reactContainer.className += " c4g-external ol-unselectable";
        }
      } else {
        _this.reactContainer = document.createElement('div');
        _this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";
        _this.$overlaycontainer_stopevent.append(_this.reactContainer);
      }
      if (mapData.starboard.open) {
        _this.reactContainer.className += " c4g-open";
      } else {
        _this.reactContainer.className += " c4g-close";
      }
    }
    if (mapData.baselayerswitcher.enable) {
      if (mapData.baselayerswitcher.div) {
        _this.baselayerContainer = document.querySelector("." + mapData.baselayerswitcher.div);
        if (!_this.baselayerContainer) {
          _this.baselayerContainer = document.createElement('div');
          _this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";
          _this.$overlaycontainer_stopevent.append(_this.baselayerContainer);
        } else {
          _this.baselayerContainer.className += " c4g-external c4g-baselayer-container ol-unselectable";
        }
      } else {
        _this.baselayerContainer = document.createElement('div');
        _this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";
        _this.$overlaycontainer_stopevent.append(_this.baselayerContainer);
      }
      if (mapData.starboard.open) {
        _this.baselayerContainer.className += " c4g-open";
      } else {
        _this.baselayerContainer.className += " c4g-close";
      }
    }
    if (mapData.starboardscope.enable) {
      if (mapData.starboardscope.div) {
        _this.starboardscopeContainer = document.querySelector("." + mapData.starboardscope.div);
        if (!_this.starboardscopeContainer) {
          _this.starboardscopeContainer = document.createElement('div');
          _this.starboardscopeContainer.className = "c4g-sideboard c4g-starboardscope-container ol-unselectable";
          _this.$overlaycontainer_stopevent.append(_this.starboardscopeContainer);
        } else {
          _this.starboardscopeContainer.className += " c4g-external c4g-starboardscope-container ol-unselectable";
        }
      } else {
        _this.starboardscopeContainer = document.createElement('div');
        _this.starboardscopeContainer.className = "c4g-sideboard c4g-starboardscope-container ol-unselectable";
        _this.$overlaycontainer_stopevent.append(_this.starboardscopeContainer);
      }
      if (mapData.starboardscope.open) {
        _this.starboardscopeContainer.className += " c4g-open";
      } else {
        _this.starboardscopeContainer.className += " c4g-close";
      }
    }

    // feature filter
    if (mapData.filterDiv) {
      mapData.filterDiv = mapData.filterDiv[0] === "." || mapData.filterDiv[0] === "#" ? mapData.filterDiv : "." + mapData.filterDiv;
      _this.filterContainerParent = document.querySelector(mapData.filterDiv);
      if (_this.filterContainerParent) {
        _this.filterContainerParent.className += ' c4g-external';
        _this.filterContainer = document.createElement("div");
        _reactDom["default"].render(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(FeatureFilter, {
          target: document.querySelector(mapData.filterDiv),
          mapController: _this,
          direction: "top",
          className: "c4g-feature-filter"
        })), _this.filterContainer);
        _this.filterContainerParent.append(_this.filterContainer);
      }
    }

    // infopage container
    if (mapData.legend.enable) {
      if (mapData.legend.div) {
        _this.infoPageContainer = document.querySelector("." + mapData.legend.div);
        if (!_this.infoPageContainer) {
          _this.infoPageContainer = document.createElement('div');
          _this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";
          _this.$overlaycontainer_stopevent.append(_this.infoPageContainer);
        } else {
          _this.infoPageContainer.className += " c4g-external c4g-infopage-container ol-unselectable";
        }
      } else {
        _this.infoPageContainer = document.createElement('div');
        _this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";
        _this.$overlaycontainer_stopevent.append(_this.infoPageContainer);
      }
    }

    // measuretools container
    if (mapData.measuretools.enable) {
      var open = mapData.initial_open_comp === "measuretools" ? "c4g-open" : "c4g-close";
      if (mapData.measuretools.div) {
        _this.measuretoolsContainer = document.querySelector("." + mapData.measuretools.div);
        if (!_this.measuretoolsContainer) {
          _this.measuretoolsContainer = document.createElement('div');
          _this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable " + open;
          _this.$overlaycontainer_stopevent.append(_this.measuretoolsContainer);
        } else {
          _this.measuretoolsContainer.className += " c4g-external c4g-measuretools-container ol-unselectable";
        }
      } else {
        _this.measuretoolsContainer = document.createElement('div');
        _this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable " + open;
        _this.$overlaycontainer_stopevent.append(_this.measuretoolsContainer);
      }
    }

    // permalink container
    if (mapData.permalink.enable) {
      if (mapData.permalink.div) {
        _this.permalinkContainer = document.querySelector(".c4g-external-permalink-container");
        if (!_this.permalinkContainer) {
          _this.permalinkContainer = document.createElement('div');
          _this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";
          _this.$overlaycontainer_stopevent.append(_this.permalinkContainer);
        } else {
          _this.permalinkContainer.className += " c4g-external";
        }
      } else {
        _this.permalinkContainer = document.createElement('div');
        _this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";
        _this.$overlaycontainer_stopevent.append(_this.permalinkContainer);
      }
    }
    if (mapData.overviewmap) {
      _this.overviewContainer = document.createElement("div");
      _this.overviewContainer.className = "c4g-sideboard c4g-overviewmap-container c4g-close";
      _this.$overlaycontainer_stopevent.append(_this.overviewContainer);
    }

    // @ToDo mapData.additionalPanel is always true, because it is set as an new object in the beginning. Therefore the second parameter of the boolean is requested, which throws an error
    // additionalPanel is furthermore not found anywhere in Maps and should be loaded over a hook

    // starboard
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      enableStarboard = false;
    }

    // popup margin
    //this.leftSlideElements.push('.ol-overlay-container');
    //this.rightSlideElements.push('.ol-overlay-container');

    // if (typeof Starboard === 'function' && enableStarboard && !this.controls.starboard) {
    //   // this.initializeStarboard();
    // }
    //themeData
    if (mapData.themeData) {
      domMapDiv = document.getElementById(mapData.mapDiv);
      if (mapData.themeData['useglobal']) {
        domMapDiv = document.getElementById('wrapper');
      }
      var mapWidth = "100%";
      var mapHeight = "100%";
      if (mapData.width) {
        mapWidth = mapData.width;
      }
      if (mapData.height) {
        mapHeight = mapData.height;
      } else {
        var divHeight = domMapDiv && domMapDiv.offsetHeight ? domMapDiv.offsetHeight : false;
        if (!divHeight) {
          mapHeight = "100vh";
        } else {
          mapHeight = '100%';
        }
      }
      if (domMapDiv && domMapDiv.style) {
        domMapDiv.style.setProperty('--map-height', mapHeight);
        domMapDiv.style.setProperty('--map-width', mapWidth);
      }
      if (mapData.themeData['maincolor']) {
        var mainColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
        var fontColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
        var shadowColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);
        var popupMainColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['popupMaincolor'], mapData.themeData['popupMainopacity']);
        var popupFontColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['popupFontcolor'], mapData.themeData['popupFontopacity']);
        if (domMapDiv && domMapDiv.style) {
          domMapDiv.style.setProperty('--main-color', mainColor);
          domMapDiv.style.setProperty('--font-color', fontColor);
          domMapDiv.style.setProperty('--pu-main-color', popupMainColor);
          domMapDiv.style.setProperty('--pu-font-color', popupFontColor);
          domMapDiv.style.setProperty('--shadow-color', shadowColor);
        }
      }
      if (domMapDiv && mapData.themeData['buttonradius']) {
        domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
        domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
      }
      if (domMapDiv && mapData.themeData['buttonsize']) {
        domMapDiv.style.setProperty('--button-size-pixel', mapData.themeData['buttonsize'] + 'px');
      }
      if (domMapDiv && mapData.themeData['fontsize']) {
        domMapDiv.style.setProperty('--button-fontsize-pixel', mapData.themeData['fontsize'] + 'px');
      }
      if (domMapDiv && mapData.themeData['popupMaxWidth']) {
        domMapDiv.style.setProperty('--popup-max-width', mapData.themeData['popupMaxWidth'] + '%');
      }
    }
    if (mapData.caching) {
      var strPopupInfos = _c4gMapsUtils.utils.getValue('popupInfos');
      if (strPopupInfos && parseInt(mapData.popupHandling, 10)) {
        _this.data.initial_open_comp = "";
        var popupInfos = JSON.parse(strPopupInfos);
        var feature = new _Feature["default"]();
        feature.set('popup', popupInfos);
        var layer = new _layer.Vector();
        window.setTimeout(function () {
          _this.proxy.handlePopup(feature, layer);
        }, 100);
      }
    }
    var scope = _this;
    _this.map.on("change:size", function () {
      scope.setState({});
      if (scope.map && scope.map.getSize() && domMapDiv && domMapDiv.style) {
        domMapDiv.style.setProperty('--map-height', scope.map.getSize()[1] + "px");
      }
    });
    if (mapData.userLocation) {
      var geolocation = new _c4gUserPosition.UserPosition(_this);
    }
    if (window.c4gMapsHooks.addControls) {
      var arrResult = [];
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.addControls, arrResult);
      for (var i in arrResult) {
        if (arrResult.hasOwnProperty(i)) {
          _this.map.addControl(new _Control["default"](arrResult[i]));
        }
      }
    }
    return _this;
  }
  (0, _inherits2["default"])(MapController, _Component);
  return (0, _createClass2["default"])(MapController, [{
    key: "setLayersInitial",
    value: function setLayersInitial(objLayers, arrLayers) {
      this.setState({
        objLayers: objLayers,
        arrLayerStates: arrLayers
      });
    }
  }, {
    key: "setBaselayerId",
    value: function setBaselayerId(id) {
      this.setState({
        activeBaselayerId: id
      });
    }
  }, {
    key: "setObjLayers",
    value: function setObjLayers(objLayers) {
      this.setState({
        objLayers: objLayers
      });
    }
  }, {
    key: "setLocStyles",
    value: function setLocStyles(styleData) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (callback) {
        this.setState({
          styleData: styleData
        }, callback());
      } else {
        this.setState({
          styleData: styleData
        });
      }
    }
  }, {
    key: "setLayerStates",
    value: function setLayerStates(arrLayerStates) {
      if (this._isMounted && arrLayerStates && arrLayerStates.length > 0) {
        var changed = false;
        for (var i in arrLayerStates) {
          if (arrLayerStates.hasOwnProperty(i)) {
            if (arrLayerStates[i] !== this.state.arrLayerStates) {
              changed = true;
            }
          }
        }
        if (changed) {
          this.setState({
            arrLayerStates: arrLayerStates
          });
        }
      }
    }
  }, {
    key: "getCurrentLayerStates",
    value: function getCurrentLayerStates(arrLayerStates) {
      var ids = [];
      for (var elemId in arrLayerStates) {
        if (arrLayerStates.hasOwnProperty(elemId)) {
          if (arrLayerStates[elemId].active) {
            ids.push(arrLayerStates[elemId].id);
          }
          if (arrLayerStates[elemId].childStates) {
            ids = ids.concat(this.getCurrentLayerStates(arrLayerStates[elemId].childStates));
          }
        }
      }
      return ids;
    }
  }, {
    key: "setLayerStateWithId",
    value: function setLayerStateWithId(id, active) {
      var arrLayerStates = this.state.arrLayerStates;
      for (var i in arrLayerStates) {
        if (arrLayerStates.hasOwnProperty(i)) {
          arrLayerStates[i] = this.getLayerStateWithId(arrLayerStates[i], id, active);
        }
      }
      this.setState({
        arrLayerStates: arrLayerStates
      });
    }
  }, {
    key: "getLayerStateWithId",
    value: function getLayerStateWithId(layerState, id, active) {
      if (layerState.id === id) {
        layerState.active = active;
      }
      for (var i in layerState.childStates) {
        if (layerState.childStates.hasOwnProperty(i)) {
          layerState.childStates[i] = this.getLayerStateWithId(layerState.childStates[i], id, active);
        }
      }
      return layerState;
    }
  }, {
    key: "changeActiveLayers",
    value: function changeActiveLayers(baseLayerId) {
      var newLayerState = this.state.arrLayerStates;
      for (var stateId in newLayerState) {
        if (newLayerState.hasOwnProperty(stateId)) {
          if (this.state.objLayers[stateId].activeForBaselayers !== "all") {
            var oldState = newLayerState[stateId].active;
            newLayerState[stateId].active = !!this.state.objLayers[stateId].activeForBaselayers.find(function (element) {
              return element === baseLayerId;
            });
            if (oldState !== newLayerState[stateId].active) {
              if (newLayerState[stateId].active) {
                this.proxy.layerController.show(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer);
              } else {
                this.proxy.layerController.hide(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer);
              }
            }
          }
          for (var childId in newLayerState[stateId].childStates) {
            if (newLayerState[stateId].childStates.hasOwnProperty(childId)) {
              newLayerState[stateId].childStates[childId] = this.changeActiveLayerChilds(newLayerState[stateId].childStates[childId], this.state.objLayers[stateId].childs[childId], baseLayerId);
            }
          }
        }
      }
      this.setState({
        arrLayerStates: newLayerState
      });
    }
  }, {
    key: "changeActiveLayerChilds",
    value: function changeActiveLayerChilds(childState, child, baseLayerId) {
      if (child.activeForBaselayers !== "all") {
        var oldState = childState.active;
        childState.active = !!child.activeForBaselayers.find(function (element) {
          return element === baseLayerId;
        });
        if (oldState !== childState.active) {
          if (childState.active) {
            this.proxy.layerController.show(child.id, child.features || child.vectorLayer);
          } else {
            this.proxy.layerController.hide(child.id, child.features || child.vectorLayer);
          }
        }
      }
      for (var stateId in childState.childStates) {
        if (childState.childStates.hasOwnProperty(stateId)) {
          childState.childStates[stateId] = this.changeActiveLayerChilds(childState.childStates[stateId], child.childs[stateId], baseLayerId);
        }
      }
      return childState;
    }
  }, {
    key: "setTabLayers",
    value: function setTabLayers(layers, states) {
      this.setState({
        objTabLayers: layers,
        arrTabLayerStates: states
      });
    }
  }, {
    key: "setTabStates",
    value: function setTabStates(states) {
      this.setState({
        arrTabLayerStates: states
      });
    }
  }, {
    key: "hideOtherComponents",
    value: function hideOtherComponents(objComponent) {
      var components = this.components;
      for (var key in components) {
        if (components.hasOwnProperty(key)) {
          if (components[key] && components[key] !== objComponent) {
            if (components[key].close) {
              components[key].close();
            } else {
              components[key].setState({
                open: false
              });
            }
          }
        }
      }
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {
      var newState = this.state.arrLayerStates;
      newState[id] = state;
      this.setState({
        arrLayerStates: newState
      });
    }
  }, {
    key: "hideOtherBottomComponents",
    value: function hideOtherBottomComponents(objComponent) {
      var components = this.components;
      for (var key in components) {
        if (components.hasOwnProperty(key)) {
          if (components[key] && components[key] !== objComponent) {
            components[key].setState({
              openResults: false
            });
          }
        }
      }
    }
  }, {
    key: "getActiveComponents",
    value: function getActiveComponents() {
      var components = this.components;
      var activeComps = [];
      for (var key in components) {
        if (components.hasOwnProperty(key) && components[key] && components[key].state.open) {
          activeComps.push(components[key]);
        }
      }
      return activeComps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var mapData = this.data;
      var target = document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left');
      this.arrComponents = this.arrComponents || [{
        name: "layerswitcher",
        sort: mapData.layerswitcher.enable
      }, {
        name: "geosearch",
        sort: mapData.geosearch.enable
      }, {
        name: "legend",
        sort: mapData.legend.enable
      }, {
        name: "baselayerswitcher",
        sort: mapData.baselayerswitcher.enable
      }, {
        name: "starboardscope",
        sort: mapData.starboardscope.enable
      }, {
        name: "measuretools",
        sort: mapData.measuretools.enable
      }, {
        name: "permalink",
        sort: mapData.permalink.enable
      }, {
        name: "zoom",
        sort: mapData.zoom
      }, {
        name: "zoomPosition",
        sort: mapData.zoomPosition
      }, {
        name: "zoomHome",
        sort: mapData.zoomHome
      }, {
        name: "zoomExtent",
        sort: mapData.zoomExtent
      }, {
        name: "fullscreen",
        sort: mapData.fullscreen
      }, {
        name: "print",
        sort: mapData.print
      }, {
        name: "rotate",
        sort: mapData.rotate
      }, {
        name: "graticule",
        sort: mapData.graticule
      }, {
        name: "overview",
        sort: mapData.overviewmap
      }, {
        name: "router",
        sort: mapData.router_enable
      }, {
        name: "editor",
        sort: mapData.editor.enable
      }];
      var sbPortal = "";
      var storedPanel = this.data.caching ? _c4gMapsUtils.utils.getValue('panel') : "";
      if (storedPanel) {
        mapData.initial_open_comp = "";
      }
      if (mapData.layerswitcher.enable) {
        sbPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(StarboardPanel, {
          ref: function ref(node) {
            _this2.components.starboard = node;
          },
          target: target,
          mapController: this,
          objLayers: this.state.objLayers,
          styleData: this.state.styleData,
          tabLayers: this.state.objTabLayers,
          tabStates: this.state.arrTabLayerStates,
          layerStates: this.state.arrLayerStates,
          parentCallback: this.setLayerStates,
          tabCallback: this.setTabStates,
          direction: "right",
          open: mapData.initial_open_comp === "starboard" || storedPanel === "StarboardPanel",
          changeCollapseState: this.changeCollapseState,
          external: this.reactContainer.className.indexOf("c4g-external") !== -1
        })), this.reactContainer);
      }
      var searchPortal = "";
      if (mapData.geosearch.enable) {
        var geoSearchOptions = this.createGeosearchOptions();
        geoSearchOptions.ref = function (node) {
          _this2.components.geosearch = node;
        };
        searchPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(GeoSearch, geoSearchOptions)), this.searchContainer);
      }
      var infoPortal = "";
      var baselayer = undefined;
      var overlay = undefined;
      if (this.proxy.baselayers_loaded) {
        baselayer = this.proxy.baselayerController.arrBaselayers[this.state.activeBaselayerId];
        if (baselayer && baselayer.hasOverlays) {
          overlay = baselayer.overlays[0];
        }
      }
      var infopage = mapData.infopage;
      if (infopage && baselayer && baselayer.infopage) {
        infopage = infopage + "<br/>" + baselayer.infopage;
      } else if (baselayer && baselayer.infopage) {
        infopage = baselayer.infopage;
      }
      if (infopage && overlay && overlay.infopage) {
        infopage = infopage + "<br/>" + overlay.infopage;
      } else if (overlay && overlay.infopage) {
        infopage = overlay.infopage;
      }
      if (infopage && mapData.legend.enable) {
        infoPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(Infopage, {
          ref: function ref(node) {
            _this2.components.infopage = node;
          },
          target: target,
          external: this.infoPageContainer.className.indexOf("c4g-external") !== -1,
          infoContent: infopage,
          mapController: this,
          open: mapData.initial_open_comp === "legend" || storedPanel === "Infopage"
        })), this.infoPageContainer);
      }
      var blsPortal = "";
      if (mapData.baselayerswitcher.enable) {
        blsPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(BaselayerSwitcher, {
          ref: function ref(node) {
            _this2.components.baselayerSwitcher = node;
          },
          target: target,
          open: mapData.initial_open_comp === "baselayers" || storedPanel === "BaselayerSwitcher",
          changeActiveLayers: this.changeActiveLayers,
          external: this.baselayerContainer.className.indexOf("c4g-external") !== -1,
          mapController: this,
          baselayerController: this.proxy.baselayerController
        })), this.baselayerContainer);
      }
      var scpPortal = "";
      if (mapData.starboardscope.enable) {
        scpPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(StarboardScope, {
          ref: function ref(node) {
            _this2.components.starboardScope = node;
          },
          target: target,
          open: mapData.initial_open_comp === "starboardscope" || storedPanel === "StarboardScope",
          mapController: this
        })), this.starboardscopeContainer);
      }
      var measurePortal = "";
      if (mapData.measuretools.enable) {
        measurePortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(Measuretools, {
          ref: function ref(node) {
            _this2.components.measuretools = node;
          },
          target: target,
          open: mapData.initial_open_comp === "measuretools" || storedPanel === "MeasureTools",
          mapController: this
        })), this.measuretoolsContainer);
      }
      var permaPortal = "";
      if (mapData.permalink.enable) {
        permaPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(Permalink, {
          ref: function ref(node) {
            _this2.components.permalink = node;
          },
          saveIds: mapData.permalink.saveIds,
          mapController: this,
          target: target,
          external: this.permalinkContainer.className.indexOf("c4g-external") !== -1
        })), this.permalinkContainer);
      }
      var overviewPortal = "";
      if (mapData.overviewmap) {
        var source;
        if (this.proxy.baselayers_loaded) {
          var layer = this.proxy.baselayerController.arrBaselayers[this.state.activeBaselayerId].layer;
          source = layer instanceof _layer.Group ? layer.getLayers().getArray()[0].getSource() : layer.getSource();
        }
        overviewPortal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
        }, /*#__PURE__*/_react["default"].createElement(OverviewMap, {
          ref: function ref(node) {
            _this2.components.overviewMap = node;
          },
          mapController: this,
          target: target,
          source: source,
          ovmTarget: this.overviewContainer,
          collapsed: true,
          key: 23
        })), this.overviewContainer);
      }
      var result = [];
      this.arrComponents.sort(function (a, b) {
        return a.sort > b.sort ? 1 : -1;
      });
      this.arrComponents = this.arrComponents.filter(function (element) {
        return element.sort && element.sort > 0;
      });
      for (var i = 0; i < this.arrComponents.length; i++) {
        switch (this.arrComponents[i].name) {
          case "measuretools":
            result.push(measurePortal);
            break;
          case "baselayerswitcher":
            result.push(blsPortal);
            break;
          case "geosearch":
            result.push(searchPortal);
            break;
          case "layerswitcher":
            result.push(sbPortal);
            break;
          case "starboardscope":
            result.push(scpPortal);
            break;
          case "legend":
            result.push(infoPortal);
            break;
          case "permalink":
            result.push(permaPortal);
            break;
          case 'zoom':
            if (mapData.zoom) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Zoom, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'zoomExtent':
            if (mapData.zoomExtent) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomExtent, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'zoomHome':
            if (mapData.zoomHome) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomHome, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'zoomPosition':
            if (mapData.zoomPosition) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomPosition, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'fullscreen':
            if (mapData.fullscreen) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Fullscreen, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'print':
            if (mapData.print) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Print, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'rotate':
            if (mapData.rotate) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Rotate, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'graticule':
            if (mapData.graticule) {
              result.push(/*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Grid, {
                mapController: this,
                target: target,
                key: i
              })));
            }
            break;
          case 'overview':
            if (mapData.overviewmap) {
              result.push(overviewPortal);
            }
            break;
          case 'router':
            // if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
            //   utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
            //     mapController: this,
            //     Container: this.mapsControls.controlContainerTopLeft,
            //     component: "router",
            //     arrComps: result
            //   });
            // }
            /**
             * test
             */
            // const params = {
            //   mapController: this,
            //   Container: this.mapsControls.controlContainerTopLeft,
            //   component: "router",
            //   arrComps: result
            // };
            if (this.data.router_enable) {
              if (typeof this.data !== 'undefined') {
                if (this.data.lang === "de") {
                  langRouteConstants = _routingConstantI18nDe.routingConstantsGerman;
                } else if (this.data.lang === "en") {
                  langRouteConstants = _routingConstantI18nEn.routingConstantsEnglish;
                } else {
                  // fallback
                  langRouteConstants = _routingConstantI18nEn.routingConstantsEnglish;
                }
              }
              var routerControlProps = {
                target: document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                mapController: this,
                direction: "top",
                withPosition: false,
                detourRoute: this.data.detourRoute,
                detourArea: this.data.detourArea,
                containerAddresses: containerAddresses,
                langConstants: langRouteConstants,
                ref: function ref(node) {
                  _this2.components.router = node;
                },
                key: 22,
                open: mapData.initial_open_comp === "routing" || storedPanel === "RouterView"
              };
              var openRouter = mapData.initial_open_comp === "routing" || storedPanel === "RouterView";
              if (!this.routerContainer) {
                if (this.data.router_div) {
                  this.routerContainer = document.querySelector("." + this.data.router_div);
                  if (!this.routerContainer) {
                    this.routerContainer = document.createElement('div');
                    this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                    jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                  } else {
                    this.routerContainer.className += " c4g-external";
                  }
                } else {
                  this.routerContainer = document.createElement('div');
                  this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                  jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                }
              }
              if (_c4gRouterView.RouterView && routerControlProps) {
                var view = /*#__PURE__*/_react["default"].createElement(_c4gRouterView.RouterView, routerControlProps);
                if (view && this && this.routerContainer) {
                  var portal = /*#__PURE__*/_reactDom["default"].createPortal(view, this.routerContainer);
                  if (portal) {
                    result.push(portal);
                  }
                }
              }
            }
            /**
             * end test
             */
            break;
          case 'editor':
            if (mapData.feEditorProfile && mapData.feEditorProfile !== "0") {
              if (!this.editorContainer) {
                if (this.data.editor_div) {
                  this.editorContainer = document.querySelector("." + this.data.editor_div);
                  var openEditor = mapData.initial_open_comp === "editor" || storedPanel === "EditorView";
                  if (!this.editorContainer) {
                    this.editorContainer = document.createElement('div');
                    this.editorContainer.className = "c4g-sideboard c4g-editor-container-right " + (openEditor ? "c4g-open" : "c4g-close");
                    jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                  } else {
                    this.editorContainer.className += " c4g-external";
                  }
                } else {
                  var _openEditor = mapData.initial_open_comp === "editor" || storedPanel === "EditorView";
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right " + (_openEditor ? "c4g-open" : "c4g-close");
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                }
              }
              var editorProps = {
                tipLabel: langConstants.CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                inputField: mapData.editor.inputField || false,
                target: mapData.editor.target || document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                initOpen: mapData.editor.open || false,
                config: mapData.editor.config || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                ref: function ref(node) {
                  _this2.components.editor = node;
                },
                mapController: this,
                open: mapData.initial_open_comp === "editor" || storedPanel === "EditorView"
              };
              result.push(/*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(EditorComponent, editorProps), this.editorContainer));
            } else if (mapData.editor.type == "backend") {
              if (!this.editorContainer) {
                if (this.data.editor_div) {
                  this.editorContainer = document.querySelector("." + this.data.editor_div);
                  if (!this.editorContainer) {
                    this.editorContainer = document.createElement('div');
                    this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                    jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                  } else {
                    this.editorContainer.className += " c4g-external";
                  }
                } else {
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-open";
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                }
              }
              var _editorProps = {
                tipLabel: langConstants.CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                inputField: mapData.editor.inputField || "#c4gGeoEditorGeoData",
                target: mapData.editor.target || document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                initOpen: mapData.editor.open || false,
                config: mapData.editor.config || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                mapController: this,
                open: true
              };
              result.push(/*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement(EditorComponent, _editorProps), this.editorContainer));
            }
            break;
        }
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, result);
    }
  }, {
    key: "setOpenComponent",
    value: function setOpenComponent(component) {
      var _this3 = this;
      var scope = this;
      this.setState({
        openComponent: component
      }, function () {
        for (var key in _this3.components) {
          if (_this3.components.hasOwnProperty(key)) {
            var currentComp = _this3.components[key];
            if (currentComp && currentComp !== component) {
              if (currentComp.close) {
                currentComp.close();
              } else {
                currentComp.setState({
                  open: false
                });
              }
            }
          }
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this4 = this;
      var controls = this.map.getControls().getArray();
      var _loop = function _loop(i) {
        if (_this4.arrComponents.hasOwnProperty(i)) {
          if (_this4.arrComponents[i].control) {
            var found = controls.find(function (elem) {
              var element = elem.element;
              var control = _this4.arrComponents[i].control.element;
              return element.className == control.className;
            });
            if (!found) {
              _this4.map.addControl(_this4.arrComponents[i].control);
            }
          }
        }
      };
      for (var i in this.arrComponents) {
        _loop(i);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "createGeosearchOptions",
    value: function createGeosearchOptions() {
      var mapData = this.data;
      // geosearch
      var geosearchOptions = {};
      if (mapData.geosearch && mapData.geosearch.enable) {
        if (!this.searchContainer) {
          if (mapData.geosearch.div) {
            this.searchContainer = document.querySelector("." + mapData.geosearch.div);
            this.searchContainer.className += " c4g-external";
            if (!this.searchContainer) {
              this.searchContainer = document.createElement('div');
              this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
              this.searchContainer.className += "c4g-close";
              this.$overlaycontainer_stopevent.append(this.searchContainer);
            }
          } else {
            this.searchContainer = document.createElement('div');
            this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
            this.searchContainer.className += "c4g-close";
          }
          if (!mapData.geosearch.div) {
            this.$overlaycontainer_stopevent.append(this.searchContainer);
          }
        }
        geosearchOptions = {
          mapController: this,
          target: document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left'),
          extDiv: mapData.geosearch.div || false,
          extResultsDiv: mapData.geosearch.div_results || false,
          collapsible: true,
          collapsed: mapData.initial_open_comp !== "search",
          label: ' ',
          collapsedLabel: '',
          // engineUrl: mapData.geosearch.engine,
          searchZoom: mapData.geosearch.searchzoom,
          zoomBounds: mapData.geosearch.zoombounds,
          quicksearch: true,
          animate: mapData.geosearch.animate,
          animateDuration: mapData.geosearch.animate_duration,
          markResult: mapData.geosearch.markresult,
          resultDuration: mapData.geosearch.result_duration,
          popup: mapData.geosearch.popup,
          autopick: mapData.geopicker,
          caching: mapData.caching,
          results: mapData.geosearch.results,
          resultCount: mapData.geosearch.result_count,
          resultsHeadline: mapData.geosearch.results_headline,
          headline: mapData.geosearch.headline,
          resultStyle: mapData.geosearch.result_locstyle,
          placeholder: mapData.geosearch.placeholder,
          external: this.searchContainer.className.indexOf("c4g-external") !== -1
        };
      }
      return geosearchOptions;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-popup-container.jsx":
/*!********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-popup-container.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PopupContainer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
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
var PopupContainer = exports.PopupContainer = /*#__PURE__*/function (_Component) {
  function PopupContainer(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PopupContainer);
    _this = _callSuper(this, PopupContainer, [props]);
    _this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      activeComps: props.activeComps,
      conststr: false
    };
    props.hideOther(_this);
    _this.routeButtons = "";
    _this.language = (0, _c4gMapsI18n.getLanguage)(_this.props.mapData);
    _this.close = _this.close.bind(_this);
    _this.toggleDetails = _this.toggleDetails.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(PopupContainer, _Component);
  return (0, _createClass2["default"])(PopupContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var detailBtnClass = "";
      var detailBtnCb = "";
      var className = this.props.external ? "c4g-popup-container " : "c4g-sideboard c4g-popup-container ";
      if (this.state.open) {
        className += "c4g-open ";
      } else {
        className += "c4g-close";
      }
      if (this.props.alwaysExtended) {
        className += " c4g-details-open";
      } else {
        if (this.state.detailsOpen) {
          className += " c4g-details-open";
        } else {
          className += " c4g-details-closed";
        }
      }
      var headerClass = "c4g-popup-header";
      var addButtons = /*#__PURE__*/_react["default"].createElement("div", null);
      if (this.state.conststr) {
        headerClass += " c4g-routing";
        addButtons = /*#__PURE__*/_react["default"].createElement(this.state.conststr, {
          config: this.state.config
        });
      }
      if (this.state.content) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-wrapper"
        }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
        }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
          wrapperClass: headerClass,
          headerClass: "c4g-popup-header-headline",
          header: this.props.mapData.popupHeadline || "",
          closeBtnClass: "c4g-titlebar-close",
          closeBtnCb: function closeBtnCb() {
            _this2.close(true);
          },
          closeBtnTitle: this.language.CLOSE,
          detailBtnClass: "",
          detailBtnCb: ""
        }, addButtons)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-content",
          dangerouslySetInnerHTML: {
            __html: this.state.content
          }
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "setAddButtons",
    value: function setAddButtons(conststr, config) {
      this.setState({
        config: config,
        conststr: conststr
      });
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.setState({
        content: content
      });
    }
  }, {
    key: "open",
    value: function open(activeComps) {
      if (!this.props.external) {
        this.props.hideOther();
      }
      this.setState({
        open: true,
        activeComps: activeComps
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _boolean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.props.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
      if (_boolean && this.state.activeComps) {
        for (var i in this.state.activeComps) {
          if (this.state.activeComps.hasOwnProperty(i)) {
            var comp = this.state.activeComps[i];
            comp.setState({
              open: true
            });
          }
        }
      }
      var newState = {
        open: false,
        content: this.props.external ? "" : this.state.content
      };
      this.setState(newState);
    }
  }, {
    key: "toggleDetails",
    value: function toggleDetails() {
      this.setState({
        detailsOpen: !this.state.detailsOpen
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open && !this.state.open && this.props.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-popup-buttons.jsx":
/*!*************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-popup-buttons.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterPopupButtons = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _GPX = _interopRequireDefault(__webpack_require__(/*! ol/format/GPX */ "../MapsBundle/node_modules/ol/format/GPX.js"));
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
var RouterPopupButtons = exports.RouterPopupButtons = /*#__PURE__*/function (_Component) {
  function RouterPopupButtons(props) {
    (0, _classCallCheck2["default"])(this, RouterPopupButtons);
    return _callSuper(this, RouterPopupButtons, [props]);
  }
  (0, _inherits2["default"])(RouterPopupButtons, _Component);
  return (0, _createClass2["default"])(RouterPopupButtons, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      var geometry = this.props.config.feature.getGeometry();
      if (geometry) {
        if (geometry instanceof _geom.LineString) {
          var editRoute = function editRoute() {
            var coordinates = geometry.getCoordinates();
            var i = 1;
            while (coordinates.length > 15) {
              geometry = geometry.simplify(i);
              coordinates = geometry.getCoordinates();
              i += 2;
              if (i > 42) {
                //prevent endless loop & magic number is magic
                Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                  var alertHandler = new module.AlertHandler();
                  alertHandler.showInfoDialog(scope.props.config.router.languageConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.config.router.languageConstants.ROUTER_ERROR_LINESTRING);
                });
                return;
              }
            }
            ;
            _this.props.config.router.openControls(true);
            _this.props.config.router.setMode("route");
            var fromCoordinate = (0, _proj.toLonLat)(coordinates[0], "EPSG:3857");
            _this.props.config.router.setRouteFrom(fromCoordinate[0], fromCoordinate[1]);
            var overCoordinates = coordinates.slice(1, coordinates.length - 2);
            _this.props.config.router.addOverPoints(overCoordinates);
            var toCoordinate = (0, _proj.toLonLat)(coordinates[coordinates.length - 1], "EPSG:3857");
            _this.props.config.router.setRouteTo(toCoordinate[0], toCoordinate[1]);
          };
          var exportRoute = function exportRoute() {
            var feature = scope.props.config.feature;
            var format = new _GPX["default"]();
            var strExport = format.writeFeatures([feature], {
              featureProjection: "EPSG:3857",
              dataProjection: "EPSG:4326",
              decimals: 3
            });
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
            var name = feature.get('name') || "route";
            element.setAttribute('download', name + ".gpx");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          };
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-icon c4g-popup-route-download",
            title: this.props.config.router.languageConstants.ROUTER_DOWNLOAD,
            onMouseUp: function onMouseUp() {
              exportRoute();
            }
          }), /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-icon c4g-popup-route-edit",
            title: this.props.config.router.languageConstants.POPUP_ROUTE_EDIT,
            onMouseUp: function onMouseUp() {
              editRoute();
            }
          }));
        } else {
          var coordinates;
          if (geometry instanceof _geom.Polygon) {
            var extent = geometry.getExtent();
            coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
          } else {
            coordinates = geometry.getCoordinates();
          }
          var routeFrom = function routeFrom() {
            _this.props.config.router.openControls(true);
            _this.props.config.router.setMode("route");
            // from address
            var fromCoords = (0, _proj.toLonLat)(coordinates, "EPSG:3857");
            _this.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
          };
          var routeTo = function routeTo() {
            _this.props.config.router.openControls(true);
            _this.props.config.router.setMode("route");
            // to address
            var toCoords = (0, _proj.toLonLat)(coordinates, "EPSG:3857");
            _this.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
          };
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-icon c4g-popup-route-from",
            title: this.props.config.router.languageConstants.POPUP_ROUTE_FROM,
            onMouseUp: function onMouseUp() {
              routeFrom();
            }
          }), /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-icon c4g-popup-route-to",
            title: this.props.config.router.languageConstants.POPUP_ROUTE_TO,
            onMouseUp: function onMouseUp() {
              routeTo();
            }
          }));
        }
      } else {
        return null;
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-result-container.jsx":
/*!****************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-result-container.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterResultContainer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _GPX = _interopRequireDefault(__webpack_require__(/*! ol/format/GPX */ "../MapsBundle/node_modules/ol/format/GPX.js"));
var _GeoJSON = _interopRequireDefault(__webpack_require__(/*! ol/format/GeoJSON */ "../MapsBundle/node_modules/ol/format/GeoJSON.js"));
var _c4gRouterTimeConversions = __webpack_require__(/*! ../c4g-router-time-conversions */ "../MapsBundle/src/Resources/public/js/c4g-router-time-conversions.js");
var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx");
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "../MapsBundle/node_modules/react-dom/index.js"));
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
var RouterInstructionsContainer = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-router-instructions-container_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-instructions-container.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-instructions-container.jsx"));
});
var RouterFeatureList = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-router-feature-list_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-feature-list.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-feature-list.jsx"));
});
var RouterResultContainer = exports.RouterResultContainer = /*#__PURE__*/function (_Component) {
  function RouterResultContainer(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterResultContainer);
    _this = _callSuper(this, RouterResultContainer, [props]);
    _this.clickControl = _this.clickControl.bind(_this);
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
    window.c4gMapsHooks.hook_map_click = window.c4gMapsHooks.hook_map_click || [];
    var scrolltoElement = function scrolltoElement(clickEvent) {
      var feature = _this.props.mapController.map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
        return feature;
      });
      if (feature && feature.get('tid')) {
        var zoomToId = feature.get('tid');
        _this.props.setResultFeat(clickEvent);
        _this.props.setActiveId(zoomToId);
      }
    };
    window.c4gMapsHooks.hook_map_click.push(scrolltoElement);
    return _this;
  }
  (0, _inherits2["default"])(RouterResultContainer, _Component);
  return (0, _createClass2["default"])(RouterResultContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var result = "";
      var time = "";
      var distance = "";
      var detour = "";
      var featureCount = "";
      if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
        time = (0, _c4gRouterTimeConversions.toHumanTime)(this.props.routerInstructions.time);
        distance = (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.routerInstructions.distance);
      } else if (this.props.featureList && this.props.mode === "area") {
        detour = this.props.detour;
        featureCount = this.props.featureList.features.length;
      }
      var routerHeaderContent = "";
      var printFunction = function printFunction() {
        var querySelector = _this2.props.resultMode === "instr" ? '.c4g-route-instructions-wrapper' : '.c4g-route-feature-wrapper';
        var prtContent = document.querySelector(querySelector).cloneNode(true);
        if (_this2.props.resultMode === "instr") {
          var fromAddress = _this2.props.router.state.fromAddress;
          var divFromAddress = document.createElement('div');
          var labelFromAddress = document.createElement('label');
          labelFromAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emFromAddress = document.createElement('em');
          emFromAddress.innerHTML = fromAddress;
          divFromAddress.appendChild(labelFromAddress);
          divFromAddress.appendChild(emFromAddress);
          divFromAddress.appendChild(document.createElement('em'));
          var toAddress = _this2.props.router.state.toAddress;
          var divToAddress = document.createElement('div');
          var labelToAddress = document.createElement('label');
          labelToAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emToAddress = document.createElement('em');
          emToAddress.innerHTML = toAddress;
          divToAddress.appendChild(labelToAddress);
          divToAddress.appendChild(emToAddress);
          divToAddress.appendChild(document.createElement('em'));
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divFromAddress);
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divToAddress);
        }
        prtContent.querySelector('.c4g-router-print').remove();
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      };
      if (time && distance && this.props.mode === "route") {
        var buttonExportEditor = null;
        if (this.props.mapController.data.editor && this.props.mapController.data.editor.config && this.props.mapController.data.editor.config.drawStyles && this.props.mapController.data.editor.config.drawStyles.LineString && this.props.mapController.data.editor.config.drawStyles.LineString.elements && this.props.mapController.data.editor.config.drawStyles.LineString.elements.length > 0) {
          buttonExportEditor = /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-router-editor",
            title: this.props.lang.ROUTER_EDITOR,
            onMouseUp: function onMouseUp() {
              _this2.exportEditor();
            }
          });
        }
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-time"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_TIME), /*#__PURE__*/_react["default"].createElement("em", null, time)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-distance"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_DISTANCE), /*#__PURE__*/_react["default"].createElement("em", null, distance)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-download",
          title: this.props.lang.ROUTER_DOWNLOAD,
          onMouseUp: function onMouseUp() {
            _this2.exportGpx();
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          title: this.props.lang.ROUTER_PRINT,
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }), buttonExportEditor);
      } else if (detour && featureCount && this.props.mode === "area") {
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-detour"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_DETOUR, ":"), /*#__PURE__*/_react["default"].createElement("em", null, detour, " km")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-featurecount"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_FEATURECOUNT, ":"), /*#__PURE__*/_react["default"].createElement("em", null, featureCount)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }));
      }
      if (this.props.resultMode === "instr" && this.props.routerInstructions && this.props.mode === "route") {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterInstructionsContainer, {
          className: "c4g-route-instructions-wrapper",
          mapController: this.props.mapController,
          routerInstructions: this.props.routerInstructions,
          routerWaySource: this.props.routerWaySource,
          routerHintSource: this.props.routerHintSource,
          open: this.props.open,
          header: routerHeaderContent
        }));
      } else if (this.props.resultMode === "feat" || this.props.mode === "area" || !this.props.routerInstructions && this.props.featureList) {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterFeatureList, {
          className: "c4g-route-feature-wrapper",
          activeId: this.props.activeId,
          setActiveId: this.props.setActiveId,
          routeMode: this.props.mode,
          layerRoute: this.props.layerRoute,
          layerArea: this.props.layerArea,
          featureList: this.props.featureList,
          mapController: this.props.mapController,
          featureSource: this.props.featureSource,
          layerValueRoute: this.props.layerValueRoute,
          layerValueArea: this.props.layerValueArea,
          header: routerHeaderContent
        }));
      }
      if (this.props.open) {
        var element = this.props.mapController.data.routerResultDiv ? document.querySelector("." + this.props.mapController.data.routerResultDiv) : null;
        if (element) {
          var portal = /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.className + (this.props.open ? " c4g-open" : " c4g-close") + (this.props.open ? " c4g-details-open" : "")
          }, result), element);
          return portal;
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.className + (this.props.open ? " c4g-open" : " c4g-close") + (this.props.open ? " c4g-details-open" : "")
          }, result);
        }
      } else {
        return null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.open && this.props.open) {
        var element = document.querySelector("." + this.props.mapController.data.routerResultDiv);
        if (element) {
          element.parentElement.className = element.parentElement.className.replace("c4g-close", "") + " c4g-open";
          this.props.mapController.map.updateSize();
        }
      } else if (prevProps.open && !this.props.open) {
        if (!prevProps.open && this.props.open) {
          var _element = document.querySelector("." + this.props.mapController.data.routerResultDiv);
          if (_element) {
            _element.parentElement.className = _element.parentElement.className.replace("c4g-open", "") + " c4g-close";
            this.props.mapController.map.updateSize();
          }
        }
      }
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var container = document.getElementsByClassName(className)[0];
      var controlContainer = document.querySelector(".c4g-router-panel.c4g-open");
      if (controlContainer) {
        controlContainer = controlContainer[0];
      }
      var mapContainer = document.querySelector(".c4g_map") ? document.querySelector(".c4g_map")[0] : false;
      if (mapContainer && container) {
        if (controlContainer) {
          if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
            container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
          }
        }
      }
      if (this.props.mode === "area" && this.props.resultMode !== "feat") {
        this.props.router.setState({
          resultMode: "feat"
        });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.props.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "exportGpx",
    value: function exportGpx() {
      var source = this.props.router.routerWaySource;
      var format = new _GPX["default"]();
      if (source && source.getFeatures && source.getFeatures()) {
        var strExport = format.writeFeatures(source.getFeatures(), {
          featureProjection: "EPSG:3857",
          dataProjection: "EPSG:4326",
          decimals: 3
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
        element.setAttribute('download', "route.gpx");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        console.log(strExport);
      }
    }
  }, {
    key: "exportEditor",
    value: function exportEditor() {
      var scope = this;
      var source = this.props.router.routerWaySource;
      var format = new _GeoJSON["default"]();
      if (source && source.getFeatures && source.getFeatures()) {
        var feature = source.getFeatures()[0];
        var objInput = {};
        var elements = this.props.mapController.data.editor.config.drawStyles.LineString.elements;
        for (var i in elements) {
          if (elements.hasOwnProperty(i)) {
            objInput[i] = elements[i].name;
          }
        }
        Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
          var alertHandler = new module.AlertHandler();
          var promise = alertHandler.showSelectDialog(scope.props.lang.ROUTER_EDITOR_ELEMENT, objInput, scope.props.lang.ACCEPT, scope.props.lang.CANCEL);
          promise.then(function (value) {
            var locstyle = elements[value].styleId;
            feature.set('editorId', value);
            feature.setId();
            feature.set('locstyle', locstyle);
            var format = new _GeoJSON["default"]();
            var strFeature = format.writeFeatureObject(feature, {
              featureProjection: "EPSG:3857",
              dataProjection: "EPSG:4326",
              decimals: 6
            });
            scope.props.router.openControls(false);
            scope.props.mapController.editor.open();
            scope.props.mapController.editor.addFeature(strFeature);
            scope.props.mapController.editor.reRender();
          });
        });
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      // override parent method
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      // override parent method
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-router-view.jsx":
/*!****************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-router-view.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterView = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../MapsBundle/node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../MapsBundle/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gRouterResultContainer = __webpack_require__(/*! ./c4g-router-result-container.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-result-container.jsx");
var _routingConstants = __webpack_require__(/*! ./../routing-constants */ "../MapsBundle/src/Resources/public/js/routing-constants.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "../MapsBundle/node_modules/ol/geom.js");
var _format = __webpack_require__(/*! ol/format */ "../MapsBundle/node_modules/ol/format.js");
var _extent2 = __webpack_require__(/*! ol/extent */ "../MapsBundle/node_modules/ol/extent.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _style2 = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _layer = __webpack_require__(/*! ol/layer */ "../MapsBundle/node_modules/ol/layer.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _Polygon = __webpack_require__(/*! ol/geom/Polygon */ "../MapsBundle/node_modules/ol/geom/Polygon.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "../MapsBundle/node_modules/ol/interaction.js");
var _OSMXML = _interopRequireDefault(__webpack_require__(/*! ol/format/OSMXML */ "../MapsBundle/node_modules/ol/format/OSMXML.js"));
var _c4gRoutingPermalink = __webpack_require__(/*! ./../c4g-routing-permalink */ "../MapsBundle/src/Resources/public/js/c4g-routing-permalink.js");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gRouterPopupButtons = __webpack_require__(/*! ./c4g-router-popup-buttons.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-popup-buttons.jsx");
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
 */ //const RouterResultContainer = React.lazy(() => import('./c4g-router-result-container.jsx'));
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx"));
});
//const RouterPopupButtons = React.lazy(() => import('./c4g-router-popup-buttons.jsx'));
var RouterControls = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "MapsBundle_src_Resources_public_js_components_c4g-router-controls_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-controls.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-router-controls.jsx"));
});

/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */
var RouterView = exports.RouterView = /*#__PURE__*/function (_Component) {
  function RouterView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterView);
    _this = _callSuper(this, RouterView, [props]);
    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.setOpen = _this.setOpen.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.openControls = _this.openControls.bind(_this);
    _this.resetFromPoint = _this.resetFromPoint.bind(_this);
    _this.resetToPoint = _this.resetToPoint.bind(_this);
    _this.resetAreaPoint = _this.resetAreaPoint.bind(_this);
    _this.toggleResultDetails = _this.toggleResultDetails.bind(_this);
    _this.setResultInstr = _this.setResultInstr.bind(_this);
    _this.setResultFeat = _this.setResultFeat.bind(_this);
    _this.recalculateRoute = _this.recalculateRoute.bind(_this);
    var mapController = _this.props.mapController;
    var arrProfiles = [];
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(mapController.data);
    for (var key in mapController.data.router_profiles) {
      if (mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: mapController.data.router_profiles[key]
        });
      }
    }
    var layerRoute = null;
    var layerArea = null;
    var layerValueRoute = null;
    var layerValueArea = null;
    if (mapController.data.showFeatures) {
      var routerLayers = mapController.data.routerLayers;
      for (var _key in routerLayers) {
        if (routerLayers.hasOwnProperty(_key)) {
          layerRoute = layerRoute || _key;
          layerValueRoute = Object.keys(routerLayers[layerRoute])[0] || layerValueRoute;
          layerArea = layerArea || _key;
          layerValueArea = Object.keys(routerLayers[layerArea])[0] || layerValueArea;
        }
      }
    }
    _this.state = {
      router: props.router,
      objSettings: {
        "proxyUrl": mapController && mapController.data ? mapController.data.proxyUrl : '',
        "keyAutocomplete": mapController && mapController.data ? mapController.data.autocomplete : '',
        "center": function center() {
          var center = mapController.map.getView().getCenter();
          center = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326");
          return center;
        },
        "resultCount": mapController.data.geosearch.result_count,
        "geosearchParams": mapController.data.geosearch.params
      },
      activeId: null,
      openResults: false,
      containerAddresses: {
        arrFromPositions: [],
        arrFromNames: [],
        arrToPositions: [],
        arrToNames: [],
        arrAreaPositions: [],
        arrAreaNames: [],
        arrOverPositions: {},
        arrOverNames: {}
      },
      fromAddress: "",
      toAddress: "",
      areaAddress: "",
      layerRoute: layerRoute,
      layerArea: layerArea,
      layerValueRoute: layerValueRoute,
      layerValueArea: layerValueArea,
      detourRoute: props.detourRoute.initial,
      detourArea: props.detourArea.initial,
      featureList: {
        features: [],
        type: ""
      },
      mode: mapController.data.initialMode,
      overPtCtr: 0,
      overAddresses: [],
      featureSource: undefined,
      routerWaySource: undefined,
      areaCircleSource: undefined,
      routerHintSource: undefined,
      areaPoint: null,
      fromPoint: null,
      toPoint: null,
      overPoints: [],
      profiles: arrProfiles ? arrProfiles : [],
      currentProfile: arrProfiles && arrProfiles[0] && arrProfiles[0].id ? arrProfiles[0].id : 0,
      open: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      openSettings: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      routerInstructions: {},
      resultMode: props.mapController.data.initialResultMode || "instr"
    };
    _this.popupRouteButtonWrapper = ""; // this is needed because of the different popup handlings
    _this.swapPoints = _this.swapPoints.bind(_this);
    if (mapController.data.usePermalink) {
      _this.permalink = new _c4gRoutingPermalink.RoutingPermalink(_this);
    }
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
    _this.init();
    return _this;
  }
  (0, _inherits2["default"])(RouterView, _Component);
  return (0, _createClass2["default"])(RouterView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var mapData = this.props.mapController.data;
      var sources = {
        waySource: this.state.routerWaySource,
        hintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource
      };
      var sliderOptions = {};
      if (this.state.mode === "route") {
        sliderOptions = {
          min: mapData.detourRoute.min,
          max: mapData.detourRoute.max,
          value: this.state.detourRoute,
          router: this
        };
      } else if (this.state.mode === "area") {
        sliderOptions = {
          min: mapData.detourArea.min,
          max: mapData.detourArea.max,
          value: this.state.detourArea,
          router: this
        };
      }
      var resetFunctions = {
        from: this.resetFromPoint,
        to: this.resetToPoint,
        area: this.resetAreaPoint
      };
      var overSettings = this.createOverSettings();
      var headline = "";
      if (this.state.mode === "route") {
        headline = this.props.mapController.data.routerHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_ROUTE;
      } else if (this.state.mode === "area") {
        headline = this.props.mapController.data.areaHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_AREA;
      }
      var modeSwitcher;
      if (this.props.mapController.data.areaSearch && !this.props.mapController.data.areaSearchOnly) {
        modeSwitcher = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-mode-switcher"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-route",
          className: this.state.mode === "route" ? "c4g-active" : "c4g-inactive",
          onMouseUp: function onMouseUp() {
            _this2.setMode("route");
          },
          title: this.languageConstants.ROUTER_FIND_ROUTE
        }), /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-area",
          className: this.state.mode === "area" ? "c4g-active" : "c4g-inactive",
          onMouseUp: function onMouseUp() {
            _this2.setMode("area");
          },
          title: this.languageConstants.AREA_NAME
        }));
      }
      var instructions = this.state.routerInstructions.instructions;
      var resultSwitcher = "";
      var switcherButtons = [];
      if (this.state.featureList.features.length > 0 && (this.state.fromAddress && this.state.toAddress && this.state.mode === "route" || this.state.areaAddress && this.state.mode === "area")) {
        switcherButtons.push(/*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-feature",
          className: this.state.resultMode === "feat" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultFeat,
          key: 1,
          title: "Ergebnisliste anzeigen"
        }));
      }
      if (instructions && instructions.length > 0 && this.state.mode === "route") {
        switcherButtons.push(/*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-instructions",
          className: this.state.resultMode === "instr" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultInstr,
          key: 2,
          title: "Routenhinweise anzeigen"
        }));
      }
      if (!this.props.mapController.data.routerResultDiv) {
        switcherButtons.unshift(/*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-hide-form-button " + (this.state.openSettings ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.setState({
              openSettings: !_this2.state.openSettings
            });
          },
          key: 3,
          title: this.languageConstants.ROUTER_SETTINGS
        }));
      }
      if (switcherButtons.length > 1) {
        resultSwitcher = /*#__PURE__*/_react["default"].createElement("div", null, switcherButtons);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        key: 0,
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-router-header",
        header: headline,
        headerClass: "c4g-router-headline",
        detailBtnClass: "c4g-router-extended-options",
        hideContainer: ".c4g-router-container-right",
        detailBtnCb: this.toggleDetails,
        closeBtnClass: "c4g-router-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.languageConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, modeSwitcher, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-switcher"
      }, resultSwitcher)), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        key: 1,
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterControls, {
        router: this,
        open: this.props.mapController.data.routerResultDiv || this.state.open && this.state.openSettings,
        setOpen: this.openControls,
        profiles: this.state.profiles,
        className: "c4g-router-panel",
        objSettings: this.state.objSettings,
        objFunctions: this.objFunctions,
        overSettings: overSettings,
        enableOverPoints: this.props.mapController.data.enableOverPoints,
        sources: sources,
        layers: this.props.mapController.data.routerLayers,
        containerAddresses: this.state.containerAddresses,
        resetFunctions: resetFunctions,
        mapController: this.props.mapController,
        currentProfile: this.state.currentProfile,
        fromAddress: this.state.fromAddress,
        switchTargets: this.props.mapController.data.enableTargetSwitch,
        toAddress: this.state.toAddress,
        areaAddress: this.state.areaAddress,
        mode: this.state.mode,
        sliderOptions: sliderOptions,
        title: this.languageConstants.CTRL_ROUTER,
        target: this.props.target
      })), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        key: 2,
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(_c4gRouterResultContainer.RouterResultContainer, {
        visible: this.state.open,
        open: this.state.open && this.state.openResults,
        setOpen: this.setOpen,
        direction: "bottom",
        className: "c4g-router-result-container",
        mapController: this.props.mapController,
        mode: this.state.mode,
        setResultFeat: this.setResultFeat,
        routerInstructions: this.state.routerInstructions,
        featureList: this.state.featureList,
        routerWaySource: this.state.routerWaySource,
        detour: this.state.detourArea,
        layerRoute: this.state.layerRoute,
        layerValueRoute: this.state.layerValueRoute,
        layerArea: this.state.layerArea,
        resultMode: this.state.resultMode,
        router: this,
        layerValueArea: this.state.layerValueArea,
        routerHintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource,
        profile: this.state.currentProfile,
        activeId: this.state.activeId,
        setActiveId: this.setActiveId,
        detailOpen: this.state.resultDetailOpen,
        toggleDetailOpen: this.toggleResultDetails,
        headline: "Router Ergebnisse",
        lang: this.languageConstants
      })));
    }
  }, {
    key: "setResultInstr",
    value: function setResultInstr(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "instr",
        openResults: true
      });
    }
  }, {
    key: "setResultFeat",
    value: function setResultFeat(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "feat",
        openResults: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "getProfileById",
    value: function getProfileById(id) {
      for (var i = 0; i < this.state.profiles.length; i++) {
        if (parseInt(this.state.profiles[i].id, 10) === parseInt(id, 10)) {
          return this.state.profiles[i];
        }
      }
      return null;
    }
  }, {
    key: "toggleResultDetails",
    value: function toggleResultDetails() {
      if (this.state.resultDetailOpen) {
        this.setState({
          resultDetailOpen: false
        });
      } else {
        this.setState({
          resultDetailOpen: true
        });
      }
    }
  }, {
    key: "openControls",
    value: function openControls(open) {
      if (open) {
        this.props.mapController.setOpenComponent(this);
        this.setState({
          open: true,
          openSettings: true
        });
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
      } else {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mapController.data.usePermalink) {
        this.permalink.handleInitialParams();
      }
      if (this.props.mapController.data.router_div) {
        this.setState({
          open: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.usePermalink) {
        var fragments = this.permalink.linkFragments;
        if (this.state.fromPoint && fragments.fromAddress && fragments.fromAddress[0] !== this.state.fromPoint.getCoordinates()[0] && fragments.fromAddress[1] !== this.state.fromPoint.getCoordinates()[1]) {
          this.permalink.updateLinkFragments("fromAddress", this.state.fromPoint.getCoordinates());
        }
        if (this.state.toPoint && fragments.toAddress && fragments.toAddress[0] !== this.state.toPoint.getCoordinates()[0] && fragments.toAddress[1] !== this.state.toPoint.getCoordinates()[1]) {
          this.permalink.updateLinkFragments("toAddress", this.state.toPoint.getCoordinates());
        }
        if (this.state.areaPoint && fragments.addressArea && fragments.addressArea[0] !== this.state.areaPoint.getCoordinates()[0] && fragments.addressArea[1] !== this.state.areaPoint.getCoordinates()[1]) {
          this.permalink.updateLinkFragments("addressArea", this.state.areaPoint.getCoordinates());
        }
        if (fragments.mode !== this.state.mode) {
          this.permalink.updateLinkFragments("mode", this.state.mode);
        }
        if (fragments.detourArea !== this.state.detourArea) {
          this.permalink.updateLinkFragments("detourArea", this.state.detourArea);
        }
        if (fragments.detourRoute !== this.state.detourRoute) {
          this.permalink.updateLinkFragments("detourRoute", this.state.detourRoute);
        }
      }
      if (prevState.open === true && this.state.open === false) {
        this.routerLayerGroup.setVisible(false);
        this.modWayInteraction.setActive(false);
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
      }
      if (this.state.open && !prevState.open) {
        this.props.mapController.hideOtherComponents(this);
        this.routerLayerGroup.setVisible(true);
        this.modWayInteraction.setActive(true);
        jQuery(this.props.mapController.routerContainer).addClass("c4g-open").removeClass("c4g-close");
        if (!this.state.openSettings && !this.state.openResults) {
          this.setState({
            openSettings: true
          });
        }
      }
      if (this.state.openSettings && !prevState.openSettings) {
        this.setState({
          openResults: false
        });
      }
      if (this.state.openResults && !prevState.openResults) {
        this.setState({
          openSettings: false
        });
      }
      if (!this.state.openResults && !this.state.openSettings && prevState.openSettings) {
        this.setState({
          openSettings: true
        });
      }
      if (!this.state.openSettings && !this.state.openResults && prevState.openResults) {
        this.setState({
          openResults: true
        });
      }
      if (this.state.mode === "route" && (!this.state.fromAddress || !this.state.toAddress) && this.state.openResults && prevState.mode === "area") {
        this.setState({
          openResults: false
        });
      }
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "RouterView" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "RouterView" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "RouterView");
        }
      }
      if (prevState.activeId !== this.state.activeId) {
        if (prevState.activeId) {
          var oldFeature = this.routerFeaturesSource.getFeatureById(prevState.activeId);
          if (oldFeature) {
            var style = oldFeature.get('oldStyle');
            oldFeature.setStyle(style);
          }
        }
        var activeFeature = this.routerFeaturesSource.getFeatureById(this.state.activeId);
        if (this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle] && !this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle].style) {
          this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle].style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle].getStyleFunction();
        }
        if (activeFeature) {
          // only attempt style update when click style is set
          if (this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle]) {
            activeFeature.set('oldStyle', activeFeature.getStyle());
            var _style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.clickLocstyle].style;
            activeFeature.setStyle(_style);
          }
        }
      }
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      this.setState({
        currentProfile: profile
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "setLayer",
    value: function setLayer(layer) {
      var routerLayers = this.props.mapController.data.routerLayers;
      var layerValues = routerLayers[layer];
      var newDefaultLayerValue = Object.keys(layerValues)[0];
      if (this.state.mode === "route") {
        this.setState({
          layerRoute: layer,
          layerValueRoute: newDefaultLayerValue
        }, this.recalculateRoute);
      } else {
        this.setState({
          layerArea: layer,
          layerValueArea: newDefaultLayerValue
        }, this.performArea);
      }
    }
  }, {
    key: "setLayerValue",
    value: function setLayerValue(layerValue) {
      var scope = this;
      if (this.state.mode === "route") {
        this.setState({
          layerValueRoute: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "router", false);
        });
      } else if (this.state.mode === "area") {
        this.setState({
          layerValueArea: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "area", false);
        });
      }
    }
  }, {
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "setOpen",
    value: function setOpen(bool) {
      this.setState({
        "openResults": bool
      });
    }
  }, {
    key: "setAreaPoint",
    value: function setAreaPoint(longitude, latitude) {
      var dontSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var scope = this;
      if (!dontSearch) {
        this.performReverseSearch("areaAddress", [longitude, latitude]);
      }
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        areaPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteFrom",
    value: function setRouteFrom(longitude, latitude) {
      var dontSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var scope = this;
      if (!dontSearch) {
        this.performReverseSearch("fromAddress", [longitude, latitude]);
      }
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        fromPoint: point
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteTo",
    value: function setRouteTo(longitude, latitude) {
      var dontSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var scope = this;
      if (!dontSearch) {
        this.performReverseSearch("toAddress", [longitude, latitude]);
      }
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        toPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "addOverPoint",
    value: function addOverPoint(longitude, latitude, index) {
      var dontSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var scope = this;
      var overAddresses = this.state.overAddresses;
      var ctr = this.state.overPtCtr;
      ctr++;
      if (!dontSearch) {
        this.performReverseSearch("overAddress", [longitude, latitude], index);
      } else {
        //display coordinates instead of
        overAddresses.splice(index, 1, longitude + ", " + latitude);
      }
      var point = new _geom.Point([longitude, latitude]);
      var overPoints = this.state.overPoints;
      overPoints.splice(index, 1, point);
      // overPoints[index] = point;
      this.setState({
        overPoints: overPoints,
        overAddresses: overAddresses,
        overPtCtr: ctr
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "addOverPoints",
    value: function addOverPoints(arrCoordinates) {
      var scope = this;
      var overAddresses = this.state.overAddresses;
      var overPoints = this.state.overPoints;
      var ctr = this.state.overPtCtr;
      for (var i = 0; i < arrCoordinates.length; i++) {
        var coordinates = (0, _proj.toLonLat)(arrCoordinates[i], "EPSG:3857");
        var point = new _geom.Point([coordinates[0], coordinates[1]]);
        overPoints.push(point);
        overAddresses.push(coordinates[0] + ", " + coordinates[1]);
        ctr++;
      }
      // overPoints[index] = point;
      this.setState({
        overPoints: overPoints,
        overAddresses: overAddresses,
        overPtCtr: ctr
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setMode",
    value: function setMode(mode) {
      var _this3 = this;
      if (this.state.mode !== mode) {
        var sources = {
          waySource: this.routerWaySource,
          altWaySource: this.routingAltWaySource,
          hintSource: this.state.routerHintSource,
          featureSource: this.state.featureSource,
          locationSource: this.locationsSource
        };
        this.setState({
          mode: mode,
          openResults: false,
          openSettings: true
        }, function () {
          for (var key in sources) {
            if (sources.hasOwnProperty(key) && sources[key]) {
              sources[key].clear();
            }
          }
          _this3.updateRouteLayersAndPoints();
        });
      }
    }
  }, {
    key: "swapPoints",
    value: function swapPoints() {
      var newFromPoint = this.state.toPoint;
      var newFromAddress = this.state.toAddress;
      var newToPoint = this.state.fromPoint;
      var newToAddress = this.state.fromAddress;
      var containerAddresses = this.state.containerAddresses;
      var tmpNames = containerAddresses.arrFromNames;
      var tmpPos = containerAddresses.arrFromPositions;
      containerAddresses.arrFromNames = containerAddresses.arrToNames;
      containerAddresses.arrFromPositions = containerAddresses.arrToPositions;
      containerAddresses.arrToNames = tmpNames;
      containerAddresses.arrToPositions = tmpPos;
      this.setState({
        fromPoint: newFromPoint,
        fromAddress: newFromAddress,
        toPoint: newToPoint,
        toAddress: newToAddress,
        containerAddresses: containerAddresses
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "createOverSettings",
    value: function createOverSettings() {
      var scope = this;
      var objSettings = {};
      objSettings.overAddresses = this.state.overAddresses;
      objSettings.overPoints = this.state.overPoints;
      objSettings.overPtCtr = this.state.overPtCtr;
      // increments the overPtCtr so the popup can render additional overFields
      objSettings.overFunction = function () {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverNames[scope.state.overPtCtr] = [];
        containerAddresses.arrOverPositions[scope.state.overPtCtr] = [];
        scope.setState({
          overPtCtr: scope.state.overPtCtr + 1,
          containerAddresses: containerAddresses
        });
      };
      objSettings.swapPoints = this.swapPoints;
      objSettings.objFunctions = {};
      for (var i = 0; i < this.state.overPtCtr; i++) {
        objSettings.objFunctions[i] = this.createAutocompleteFunctionsForOverField(i);
        if (!objSettings.overAddresses[i]) {
          objSettings.overAddresses[i] = "";
        }
        if (!objSettings.overPoints[i]) {
          objSettings.overPoints[i] = null;
        }
      }
      return objSettings;
    }
  }, {
    key: "createAutocompleteFunctionsForOverField",
    value: function createAutocompleteFunctionsForOverField(fieldId) {
      var scope = this;
      // set listener for the autocomplete from field
      var deleteOverListener = function deleteOverListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverPositions[fieldId] = [];
        containerAddresses.arrOverNames[fieldId] = [];
        var overPoints = scope.state.overPoints;
        overPoints.splice(fieldId, 1);
        // delete overPoints[fieldId];
        var overAddresses = scope.state.overAddresses;
        overAddresses.splice(fieldId, 1);
        // delete overAddresses[fieldId];
        scope.setState({
          overPoints: overPoints,
          containerAddresses: containerAddresses,
          overAddresses: overAddresses,
          overPtCtr: scope.state.overPtCtr - 1
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };
      var selectOverListener = function selectOverListener(event, ui) {
        var overAddresses, overPoints, overValue;
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrOverNames[fieldId].findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrOverPositions[fieldId][index];
        overAddresses = scope.state.overAddresses;
        overAddresses[fieldId] = scope.state.containerAddresses.arrOverNames[fieldId][index];
        overValue = new _geom.Point([coord[1], coord[0]]);
        overPoints = scope.state.overPoints;
        overPoints[fieldId] = overValue;
        scope.setState({
          overPoints: overPoints,
          overAddresses: overAddresses
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };
      var changeOverListener = function changeOverListener() {
        // self.fromValue = null;
      };
      return {
        "selectListener": selectOverListener,
        "deleteFunction": deleteOverListener,
        "changeListener": changeOverListener
      };
    }
  }, {
    key: "updateRouteLayersAndPoints",
    value: function updateRouteLayersAndPoints() {
      var _this4 = this;
      var scope = this;
      this.locationsSource.clear();
      this.areaSource.clear();
      if (this.state.mode === "route") {
        if (this.state.fromPoint) {
          var tmpFeature = new _ol.Feature({
            geometry: this.state.fromPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });
          if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
            if (!this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style) {
              this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].getStyleFunction();
            }
            tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
          } else {
            var doneFunction = function doneFunction() {
              if (!_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].style) {
                _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].style = _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].getStyleFunction();
              }
              tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].style);
            };
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_from_locstyle], {
              "done": doneFunction
            });
          }
          this.locationsSource.addFeature(tmpFeature);
        }
        if (this.state.toPoint) {
          var _tmpFeature = new _ol.Feature({
            geometry: this.state.toPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });
          if (this.props.mapController.data.router_to_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle]) {
            if (!this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style) {
              this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].getStyleFunction();
            }
            _tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style);
          } else {
            var _doneFunction = function _doneFunction() {
              if (!_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].style) {
                _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].style = _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].getStyleFunction();
              }
              _tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].style);
            };
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_to_locstyle], {
              "done": _doneFunction
            });
          }
          this.locationsSource.addFeature(_tmpFeature);
        }
        if (!(this.state.fromPoint && this.state.toPoint)) {
          this.routerWaySource.clear();
        }
        if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
          for (var key in this.state.overPoints) {
            if (this.state.overPoints.hasOwnProperty(key) && this.state.overPoints[key] !== null) {
              var _tmpFeature2 = new _ol.Feature({
                geometry: this.state.overPoints[key].clone().transform('EPSG:4326', 'EPSG:3857')
              });
              if (this.props.mapController.data.router_interim_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle]) {
                if (!this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style) {
                  this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].getStyleFunction();
                }
                _tmpFeature2.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style);
              }
              this.locationsSource.addFeature(_tmpFeature2);
            }
          }
        }
        if (!this.props.mapController.data.routeStartButton) {
          this.recalculateRoute();
        }
      } else if (this.state.mode === "area") {
        if (this.state.areaPoint) {
          var _tmpFeature3 = new _ol.Feature({
            geometry: this.state.areaPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });
          if (this.props.mapController.data.areaCenterLocstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.areaCenterLocstyle]) {
            if (!this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.areaCenterLocstyle].style) {
              this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.areaCenterLocstyle].style = this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.areaCenterLocstyle].getStyleFunction();
            }
            _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.areaCenterLocstyle].style);
          } else {
            var _doneFunction2 = function _doneFunction2() {
              if (!_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.areaCenterLocstyle].style) {
                _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.areaCenterLocstyle].style = _this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.areaCenterLocstyle].getStyleFunction();
              }
              _tmpFeature3.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.areaCenterLocstyle].style);
            };
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.areaCenterLocstyle], {
              done: _doneFunction2
            });
          }
          this.areaSource.addFeature(_tmpFeature3);
        }
        this.performArea();
      }
    }
  }, {
    key: "resetFromPoint",
    value: function resetFromPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrFromPositions = [];
      containerAddresses.arrFromNames = [];
      this.setState({
        fromPoint: null,
        containerAddresses: containerAddresses,
        fromAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetToPoint",
    value: function resetToPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrToPositions = [];
      containerAddresses.arrToNames = [];
      this.setState({
        toPoint: null,
        containerAddresses: containerAddresses,
        toAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetAreaPoint",
    value: function resetAreaPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrAreaPositions = [];
      containerAddresses.arrAreaNames = [];
      this.setState({
        areaPoint: null,
        containerAddresses: containerAddresses,
        areaAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "createAutocompleteFunctions",
    value: function createAutocompleteFunctions() {
      var objFunctions = {};
      var scope = this;
      // set listener for the autocomplete from field
      var deleteFromListener = function deleteFromListener(event) {
        scope.resetFromPoint();
      };
      var selectFromListener = function selectFromListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrFromNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrFromPositions[index];
        var fromValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          fromPoint: fromValue,
          fromAddress: scope.state.containerAddresses.arrFromNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };
      var changeFromListener = function changeFromListener() {
        // self.fromValue = null;
      };
      objFunctions.fromFunctions = {
        "selectListener": selectFromListener,
        "deleteFunction": deleteFromListener,
        "changeListener": changeFromListener
      };

      // set listener for the autocomplete to field
      var deleteToListener = function deleteToListener(event) {
        scope.resetToPoint();
      };
      var selectToListener = function selectToListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrToNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrToPositions[index];
        var toValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          toPoint: toValue,
          toAddress: scope.state.containerAddresses.arrToNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };
      var changeToListener = function changeToListener() {
        // self.fromValue = null;
      };
      objFunctions.toFunctions = {
        "selectListener": selectToListener,
        "deleteFunction": deleteToListener,
        "changeListener": changeToListener
      };

      // set listener for the autocomplete to field
      var deleteAreaListener = function deleteAreaListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrAreaPositions = [];
        containerAddresses.arrAreaNames = [];
        scope.setState({
          areaPoint: null,
          containerAddresses: containerAddresses,
          areaAddress: ""
        }, function () {});
      };
      var selectAreaListener = function selectAreaListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrAreaNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrAreaPositions[index];
        var areaValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          areaPoint: areaValue,
          areaAddress: scope.state.containerAddresses.arrAreaNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.performArea();
        });
      };
      var changeAreaListener = function changeAreaListener() {
        // self.fromValue = null;
      };
      objFunctions.areaFunctions = {
        "selectListener": selectAreaListener,
        "deleteFunction": deleteAreaListener,
        "changeListener": changeAreaListener
      };
      return objFunctions;
    }
  }, {
    key: "addPopupHook",
    value: function addPopupHook() {
      var scope = this;
      var createPopupWrapper = function createPopupWrapper(objPopup) {
        var feature = objPopup.feature;
        var router = scope;
        var routingHandler = function routingHandler(event) {
          router.openControls(true);
          router.setMode("route");
          if (jQuery(event.currentTarget).hasClass(_c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM)) {
            // from address
            var fromCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteFrom(fromCoords[0], fromCoords[1]);
          } else {
            // to address
            var toCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteTo(toCoords[0], toCoords[1]);
          }
        }; // end of "routingHandler()"

        var routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = _c4gMapsConstant.cssConstants.POPUP_ROUTE_WRAPPER;
        var routeFromButton = document.createElement('button');
        routeFromButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);
        var routeFromButtonSpan = document.createElement('span');
        // routeFromButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_FROM;
        routeFromButton.appendChild(routeFromButtonSpan);
        var routeToButton = document.createElement('button');
        routeToButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);
        var routeToButtonSpan = document.createElement('span');
        // routeToButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_TO;
        routeToButton.appendChild(routeToButtonSpan);
        return routeButtonWrapper;
      };
      window.c4gMapsHooks.proxy_appendPopup = window.c4gMapsHooks.proxy_appendPopup || [];
      window.c4gMapsHooks.proxy_appendPopup.push(function (params) {
        var mapController = params.mapController;
        var objPopup = params.popup;
        if (mapController.components.router && objPopup.popup.routing_link) {
          if (parseInt(mapController.data.popupHandling, 10) !== 3) {
            var routeButtonWrapper = createPopupWrapper(objPopup);
            $(params.div).append(routeButtonWrapper);
          } else if (params.comp) {
            var config = {
              feature: objPopup.feature,
              router: scope
            };
            params.comp.setAddButtons(_c4gRouterPopupButtons.RouterPopupButtons, config);
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      this.mapData = this.props.mapController.data;
      var styles = [this.props.mapController.data.router_from_locstyle, this.props.mapController.data.router_to_locstyle, this.props.mapController.data.router_point_locstyle, this.props.mapController.data.areaCenterLocstyle, this.props.mapController.data.clickLocstyle];
      if (this.props.mapController.data.priorityFeatures) {
        if (this.props.mapController.data.priorityLocstyle) {
          styles.push(this.props.mapController.data.priorityLocstyle);
        }
        if (this.props.mapController.data.negativePriorityLocstyle) {
          styles.push(this.props.mapController.data.negativePriorityLocstyle);
        }
      }
      // check and load location styles via map-proxy
      this.props.mapController.proxy.locationStyleController.loadLocationStyles(styles);
      var mapData = this.props.mapController.data;

      // create router layer object
      this.objLayers = {};
      for (var key in mapData.routerLayers) {
        if (mapData.routerLayers.hasOwnProperty(key)) {
          this.objLayers[key] = mapData.routerLayers[key][Object.keys(mapData.routerLayers[key])[0]];
        }
      }

      // Add router layer(s)
      this.routingAltWaySource = new _source.Vector();
      this.routerWaySource = new _source.Vector();
      this.areaCircleSource = new _source.Vector();
      var color = this.mapData.areaCircleColor;
      var opacity = parseInt(this.mapData.areaCircleOpacity) || parseInt(this.mapData.areaCircleOpacity) === 0 ? this.mapData.areaCircleOpacity : 50;
      var style = new _style2.Style({
        fill: new _style2.Fill({
          color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(color, opacity)
        })
      });
      this.areaCircleLayer = new _layer.Vector({
        source: this.areaCircleSource,
        zIndex: -1,
        style: [style, new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          }),
          zIndex: -1
        })]
      });
      this.routerWayLayer = new _layer.Vector({
        source: this.routerWaySource,
        zIndex: 1,
        style: [new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })]
      });
      this.routerAltWayLayer = new _layer.Vector({
        source: this.routingAltWaySource,
        zIndex: 0,
        style: [new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })]
      });
      var selectInteraction = new _interaction.Select({
        style: [new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      selectInteraction.on('select', function (event) {
        var feature = event.selected[0];
        if (feature) {
          var geometry = feature.getGeometry();
          if (geometry && geometry.getType() === 'LineString') {
            self.showAltRoute(self.response, feature.getId());
          } else {
            if (feature) {
              self.clickFeatureEntryForFeature(feature);
            }
          }
        }
      });
      this.mapSelectInteraction = selectInteraction;
      this.modWayInteraction = new _interaction.Modify({
        source: this.routerWaySource,
        style: [new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style2.Style({
          stroke: new _style2.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      this.modWayInteraction.on('modifystart', function (event) {
        if (self.state.open !== true) {
          return;
        }
        self.modifyStartPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
      });
      this.modWayInteraction.on('modifyend', function (event) {
        if (self.state.open !== true) {
          return;
        }
        var overPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
        var minDistance = Infinity;
        var insertId;
        var arrKeys = Object.keys(self.state.overPoints);
        if (arrKeys.length > 0) {
          for (var id in self.state.overPoints) {
            if (self.state.overPoints.hasOwnProperty(id)) {
              var dist = self.calcDistance(self.modifyStartPoint.getCoordinates(), self.state.overPoints[id].getCoordinates());
              if (dist < minDistance) {
                minDistance = dist;
                insertId = id;
              }
            }
          }
          var distStart = self.calcDistance(self.state.fromPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distEnd = self.calcDistance(self.state.toPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distStartOld = self.calcDistance(self.state.fromPoint.getCoordinates(), self.state.overPoints[0].getCoordinates());
          var overEndIndex = arrKeys[arrKeys.length - 1];
          var distEndOld = self.calcDistance(self.state.toPoint.getCoordinates(), self.state.overPoints[overEndIndex].getCoordinates());
          if (distStart < distStartOld) {
            insertId = 0;
          } else if (distEnd < distEndOld) {
            insertId++;
          }
        } else {
          insertId = 0;
        }
        self.performReverseSearch("overAddress", overPoint.getCoordinates(), insertId);
        self.addOverPoint(overPoint.getCoordinates()[0], overPoint.getCoordinates()[1], insertId);
      });
      self.props.mapController.map.addInteraction(selectInteraction);
      if (this.props.mapController.data.enableOverPoints) {
        self.props.mapController.map.addInteraction(this.modWayInteraction);
      }
      selectInteraction.setActive(false);
      this.routerHintSource = new _source.Vector();
      this.routerHintLayer = new _layer.Vector({
        source: this.routerHintSource,
        style: function style(feature, resolution) {
          return !self.props.mapController.proxy || self.props.mapController.proxy.locationStyleController.arrLocStyles[self.props.mapController.data.router_point_locstyle].style(feature, resolution);
        }
      });
      this.locationsSource = new _source.Vector();
      this.locationsLayer = new _layer.Vector({
        source: this.locationsSource,
        zIndex: 2
      });
      this.areaSource = new _source.Vector();
      this.areaLayer = new _layer.Vector({
        source: this.areaSource,
        zIndex: 2
      });
      this.routerFeaturesSource = new _source.Vector();
      this.routerFeaturesLayer = new _layer.Vector({
        source: this.routerFeaturesSource,
        zIndex: 20
        // declutter: true
      });
      this.routerLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.routerWayLayer, this.areaCircleLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer, this.routerFeaturesLayer, this.locationsLayer, this.areaLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.routerLayerGroup);
      // this.viewRouter = this.addRouterInterface();
      if (this.props.mapController.data.initialMode === "route" || !this.viewArea) {
        // this.viewRouter.activate();
      }

      // id => array of instructions, for each route one entry
      this.routeInstructions = {};

      // store some vars for ajax-requests
      var profileId = this.props.mapController.data.profile;
      this.geoSearchApi = this.props.mapController.data.api.geosearch + '/' + profileId;
      this.geoReverseSearchApi = this.props.mapController.data.api.geosearch_reverse + '/' + profileId;
      this.routingApi = this.props.mapController.data.api.routing + '/' + profileId;
      if (this.usePermalink) {
        this.permalinkHandler.handleInitialParams();
      }
      this.objFunctions = this.createAutocompleteFunctions();
      this.addPopupHook();
      this.addMapInputInteraction();
    }

    /**
     * Calculates the euclidean distance between two points.
     * @param point1
     * @param point2
     */
  }, {
    key: "calcDistance",
    value: function calcDistance(point1, point2) {
      var square1, square2;
      square1 = Math.pow(point1[0] - point2[0], 2);
      square2 = Math.pow(point1[1] - point2[1], 2);
      return Math.sqrt(square1 + square2);
    }

    /**
     * Displays the route instructions in the portside router.
     * @param routeResponse
     * @param routeNumber
     */
  }, {
    key: "showRouteInstructions",
    value: function showRouteInstructions(routeResponse, routeNumber, routerWaySource, routerHintSource) {
      var scope,
        routerInstruction,
        routerInstructionsHeader,
        routerInstructionsHtml,
        instr,
        strType,
        strMod,
        rowstyle,
        routeNumber = routeNumber || 0,
        i,
        j,
        route_name_0 = "",
        route_name_1 = "",
        total_distance = "",
        total_time = "";
      scope = this;
      if (!this.props.mapController.data.showInstructions) {
        return;
      }
      routerInstructionsHeader = document.createElement('div');
      routerInstructionsHeader.className = _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_HEADER;
      if (routeResponse) {
        if (!(routeResponse.features && routeResponse.features.length > 0) || !this.props.mapController.data.showFeatures) {
          jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
        }
        if (this.props.mapController.data.router_api_selection == '1' || routeResponse.routeType == '1') {
          //OSRM-API:5.x
          if (routeResponse.routes[routeNumber].legs[0].summary) {
            route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
            route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
            if (routeResponse.routes[routeNumber].legs[1]) {
              route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
            }
          }
          total_distance = routeResponse.routes[routeNumber].distance;
          total_time = routeResponse.routes[routeNumber].duration;
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          if (routeResponse.route_name) {
            route_name_0 = routeResponse.route_name[0];
            route_name_1 = routeResponse.route_name[1];
          }
          if (routeResponse.route_summary) {
            total_distance = routeResponse.route_summary.total_distance;
            total_time = routeResponse.route_summary.total_time;
          }
        } else if (this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '2') {
          //ORS-API
          total_time = routeResponse.routes[routeNumber].summary.duration;
          total_distance = routeResponse.routes[routeNumber].summary.distance;
          var instructions = [];
          var segments = routeResponse.routes[routeNumber].segments;
          for (var _i = 0; _i < segments.length; _i++) {
            var currentSegment = segments[_i];
            for (var _j = 0; _j < currentSegment.steps.length; _j++) {
              var currentStep = currentSegment.steps[_j];
              currentStep.length = currentStep.distance / 1000;
              instructions.push(currentStep);
            }
          }
          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '3' || routeResponse.routeType == '3') {
          //Graphhopper
          total_distance = routeResponse.paths[routeNumber].distance;
          total_time = routeResponse.paths[routeNumber].time / 1000;
          var _instructions = [];
          var _segments = routeResponse.paths[routeNumber].instructions;
          for (var _i2 = 0; _i2 < _segments.length; _i2++) {
            var currentInstruction = _segments[_i2];
            currentInstruction.length = currentInstruction.distance / 1000;
            currentInstruction.instruction = currentInstruction.text;
            currentInstruction.type = currentInstruction.sign;
            _instructions.push(currentInstruction);
          }
          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: _instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '4' || routeResponse.routeType == '4' || this.props.mapController.data.router_api_selection == '6' || routeResponse.routeType == '6') {
          //Valhalla
          total_distance = routeResponse.trip.summary.length * 1000;
          total_time = routeResponse.trip.summary.time;
          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: routeResponse.trip.legs[routeNumber].maneuvers
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        }
        if (route_name_0 && route_name_1) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        } else if (this.routeProfile && this.routeProfile.active && Array.isArray(this.routeProfile.active)) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.props.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        }
        routerInstruction = document.createElement('div');
        routerInstructionsHtml = '<table class="' + _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';
        if (this.props.mapController.data.router_api_selection === '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
        } else if (this.props.mapController.data.router_api_selection === '0' || routeResponse.routeType == '0') {//OSRM-API:<5
        } else if (this.props.mapController.data.router_api_selection === '2' || routeResponse.routeType == '2') {//OpenRouteService
        } else if (this.props.mapController.data.router_api_selection === '3' || routeResponse.routeType == '3') {// Graphhopper
        } else if (this.props.mapController.data.router_api_selection === '4' || routeResponse.routeType == '4') {// Valhalla
        }
        routerInstructionsHtml += '</table>';
        routerInstruction.innerHTML = routerInstructionsHtml;
        this.adjustInstructionMapInteraction();
      }
    }

    /**
     * Asynchronous implementation of the forward geosearch.
     */
  }, {
    key: "performGeoSearch",
    value: (function () {
      var _performGeoSearch = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(address) {
        var scope, url, map, bounds, viewbox, param;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              scope = this;
              url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI(address);
              map = scope.props.mapController.map;
              bounds = map.getView().calculateExtent(map.getSize());
              bounds = (0, _proj.transformExtent)(bounds, map.getView().getProjection(), 'EPSG:4326');
              viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];
              if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
                url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI(address) + viewbox;
              }
              if (this.mapData.geosearch.params) {
                for (param in this.mapData.geosearch.params) {
                  if (this.mapData.geosearch.params.hasOwnProperty(param)) {
                    url += "&" + param + "=" + this.mapData.geosearch.params[param];
                  }
                }
              }
              _context.next = 10;
              return fetch(url).then(function (response) {
                if (response) {
                  return response.json().then(function (data) {
                    return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
                  });
                  // return [parseFloat(response[0].lon), parseFloat(response[0].lat)];
                } else {
                  // show error hint
                  Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                    var alertHandler = new module.AlertHandler();
                    alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                  });
                }
              })["catch"](function () {
                Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                  var alertHandler = new module.AlertHandler();
                  alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                });
              });
            case 10:
              return _context.abrupt("return", _context.sent);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function performGeoSearch(_x) {
        return _performGeoSearch.apply(this, arguments);
      }
      return performGeoSearch;
    }()
    /**
     * Searches the geo-coordinates for a given location.
     * @param $input        The input field containing the location.
     * @param value         The property in which the resulting coordinate should be stored.
     * @param opt_callback  Optional callback. Is executed after successful search.
     * @returns {string}
     */
    )
  }, {
    key: "performSearch",
    value: function performSearch($input, value, opt_callback) {
      var map, bounds, viewbox, scope, url;
      scope = this;
      if ($input.val() === "") {
        delete scope[value];
        return "";
      }
      map = scope.props.mapController.map;
      bounds = map.getView().calculateExtent(map.getSize());
      bounds = (0, _proj.transformExtent)(bounds, map.getView().getProjection(), 'EPSG:4326');
      viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];
      url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
      }
      if (this.mapData.geosearch.params) {
        for (var param in this.mapData.geosearch.params) {
          if (this.mapData.geosearch.params.hasOwnProperty(param)) {
            url += "&" + param + "=" + this.mapData.geosearch.params[param];
          }
        }
      }
      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response.length > 0) {
          if (value === "overValue") {
            if (!scope.overValue) {
              scope.overValue = [];
            }
            var overPoint = new _geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
            var deleteButton = $input.next()[0];
            // traverse the dom level until the delete button is found
            while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
              deleteButton = jQuery(deleteButton).next()[0];
            }
            deleteButton.id = overPoint['ol_uid'];
            scope.overValue.push(overPoint);
            scope.$buttonOver.prop("disabled", false);
          } else {
            var coords = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
            var point = new _geom.Point(coords);
            if (value === "fromValue") {
              scope.setState({
                fromPoint: point,
                fromAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } else if (value === "toValue") {
              scope.setState({
                toPoint: point,
                toAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } else if (value === "areaValue") {
              scope.setState({
                areaPoint: point,
                areaAddress: $input.val()
              });
            }

            // TODO wieder einbauen
            // switch(value) {
            //   case "fromValue":
            //     scope.updateLinkFragments("addressFrom", coords);
            //     break;
            //   case "toValue":
            //     scope.updateLinkFragments("addressTo", coords);
            //     break;
            //   case "areaValue":
            //     scope.updateLinkFragments("addressArea", coords);
            //     break;
            //   default:
            //     break;
            // }
          }
        } else {
          // show error hint
          Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
            var alertHandler = new module.AlertHandler();
            alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
          });
        }
        if (opt_callback && typeof opt_callback === "function") {
          opt_callback();
        }
      }).fail(function () {
        Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
          var alertHandler = new module.AlertHandler();
          alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
        });
      });
      return "";
    }

    /**
     * Converts a given coordinate into the corresponding location.
     * @param stateProp     The state property of this where the address should be stored.
     * @param value         The property that contains the coordinates.
     * @param opt_index     The index for the overAddress (over points only)
     */
  }, {
    key: "performReverseSearch",
    value: function performReverseSearch(stateProp, value, opt_index) {
      var self = this,
        url;
      url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.reverseKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "reverse.php?key=" + this.mapData.geosearch.reverseKey + '&format=json&lat=' + value[1] + '&lon=' + value[0];
      }
      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response) {
          var value = "";
          if (response.address) {
            if (response.address.road || response.address.path || response.address.pedestrian) {
              value += response.address.road || response.address.path || response.address.pedestrian;
              if (response.address.house_number) {
                value += " " + response.address.house_number;
              }
            }
            if (response.address.city || response.address.town) {
              value += value ? ", " : "";
              value += response.address.city || response.address.town;
            }
          }
          if (value === "") {
            value = response.display_name;
          }
          // TODO update router permalink
          switch (stateProp) {
            case "areaAddress":
              self.setState({
                areaAddress: value
              }, function () {
                if (jQuery("#areaInput").val() === "") {
                  jQuery("#areaInput").val(value);
                }
              });
              // self.updateLinkFragments("addressArea", value);
              break;
            case "fromAddress":
              self.setState({
                fromAddress: value
              }, function () {
                if (jQuery("#routingFrom").val() === "") {
                  jQuery("#routingFrom").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressFrom", value);
              break;
            case "toAddress":
              self.setState({
                toAddress: value
              }, function () {
                if (jQuery("#routingTo").val() === "") {
                  jQuery("#routingTo").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressTo", value);
              break;
            case "overAddress":
              var overAddresses = self.state.overAddresses;
              overAddresses.splice(opt_index, 1, value);
              self.setState({
                overAddresses: overAddresses
              });
              break;
          }
        }
      });
    }

    /**
     * Executes an area search with the given point as center. If there are any, the features in the perimeter will be
     * drawn onto the map and displayed in the feature container.
     */
  }, {
    key: "performArea",
    value: function performArea() {
      var self = this;
      var fromPoint = this.state.areaPoint;
      if (!fromPoint) {
        return;
      }
      var drawCircle = this.mapData.drawCircle;
      if (drawCircle) {
        var tmpCoords = (0, _proj.transform)(fromPoint.getCoordinates(), 'EPSG:4326', 'EPSG:3857');
        // let circle = new Circle(tmpCoords, this.state.detourArea * 1000);

        var circle = (0, _Polygon.circular)(fromPoint.getCoordinates(), this.state.detourArea * 1000, 128).transform('EPSG:4326', 'EPSG:3857');
        var feature = new _ol.Feature(circle);
        this.areaCircleSource.clear();
        this.areaCircleSource.addFeature(feature);
      }
      var fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      var profileId = this.props.mapController.data.profile;
      var url = 'con4gis/areaService/' + profileId + '/' + this.state.layerArea + '/' + this.state.detourArea + '/' + fromCoord;
      url += '?profile=' + this.state.currentProfile;
      if (self.areaAjax) {
        self.areaAjax.abort();
      }

      // this.spinner.show();
      self.areaAjax = jQuery.ajax({
        'url': url
      }).done(function (response) {
        self.response = response;
        if (response) {
          // const routerLayers = self.options.mapController.data.routerLayers;
          // const chosenOption = self.activeLayerValueArea;
          // this should be changed soon, as it totally messes up the logic of the structure
          var sortedFeatures = self.showFeatures(response[0], response[1], "area", false);
          self.setState({
            "featureList": {
              "features": sortedFeatures,
              "type": response[1]
            },
            "featureSource": self.routerFeaturesSource,
            "openResults": true
          }, function () {
            self.showFeatures(response[0], response[1], "area", false);
          });
        }
      });
    }

    /**
     * Executes a route search with the given from and to points. Displays features and feature entries on success. Uses
     * overpoints, if any are given.
     * @param fromPoint
     * @param toPoint
     * @param overPoint
     * @returns {string}
     */
  }, {
    key: "performViaRoute",
    value: function performViaRoute(fromPoint, toPoint, overPoint) {
      var url, scope, fromCoord, toCoord, overCoord;
      scope = this;
      if (this.state.featureSource) {
        this.state.featureSource.clear();
      }
      // this.areaSource.clear();
      this.mapSelectInteraction.getFeatures().clear();
      if (!fromPoint) {
        fromPoint = this.fromPoint;
        if (!fromPoint) {
          return;
        }
      }
      if (!toPoint) {
        if (!toPoint) {
          return;
        }
        toPoint = this.toPoint;
      }
      if (!overPoint) {
        if (this.overPoints) {
          overPoint = this.overPoints;
        }
      }
      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
      if (overPoint && Object.keys(overPoint).length > 0) {
        overCoord = [];
        for (var propt in overPoint) {
          if (overPoint.hasOwnProperty(propt) && overPoint[propt]) {
            overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
          }
        }
      }
      if (this.props.mapController.data.router_api_selection >= '1') {
        //OSRM-API:5.x or ORS- API
        var _profileId = this.props.mapController.data.profile;
        url = 'con4gis/routeService/' + this.props.mapController.data.lang + '/' + _profileId + '/' + this.state.layerRoute + '/' + this.state.detourRoute + '/' + fromCoord;
        if (overPoint) {
          for (var i = 0; i < overCoord.length; i++) url += ';' + overCoord[i];
        }
        url += ';' + toCoord;
        // if (this.state.currentProfile) {
        url += '?profile=' + this.state.currentProfile;
        // }

        if (scope.routeAjax) {
          scope.routeAjax.abort();
        }
        scope.routeAjax = jQuery.ajax({
          'url': url
        }).done(function (response) {
          scope.response = response;
          if (response) {
            if (response.error) {
              Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js-CoreBundle_node_modules_b-d64df3"), __webpack_require__.e("CoreBundle_src_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                var alertHandler = new module.AlertHandler();
                alertHandler.showInfoDialog(scope.props.langConstants[response.error]);
              });
            } else {
              scope.showRouteLayer(response);
              scope.showRouteInstructions(response, 0, scope.routerWaySource, scope.routerHintSource);
              if (response.features && (response.features.elements || response.features.length > 0)) {
                var sortedFeatures = scope.showFeatures(response.features, response.type, "router");
                scope.setState({
                  "featureList": {
                    "features": sortedFeatures,
                    "type": response.type
                  },
                  "featureSource": scope.routerFeaturesSource,
                  "openResults": true
                });
              } else {
                scope.setState({
                  "openResults": true
                });
              }
            }
          }
        }).always(function () {
          scope.routeAjax = undefined;
          if (scope.props.mapController.data.closeAfterSearch) {}
        });
        return '';
      } else {
        //OSRM-API:<5
        try {
          url = 'con4gis/routeService/' + profileId + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
          jQuery.ajax({
            'url': url
          }).done(function (response) {
            if (response) {
              scope.showRoute(response);
            }
          });
          return '';
        } catch (Exception) {
          console.log("Please use a more modern API-Version for the Routeservice");
        }
      }
    }

    /**
     * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
     */
  }, {
    key: "recalculateRoute",
    value: function recalculateRoute() {
      if (this.state.mode === "route") {
        if (this.state.fromPoint && this.state.toPoint) {
          if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
            this.performViaRoute(this.state.fromPoint, this.state.toPoint, this.state.overPoints);
          } else {
            this.performViaRoute(this.state.fromPoint, this.state.toPoint);
          }
        }
      } else {
        this.performArea();
      }
    }
  }, {
    key: "getActiveLayer",
    value: function getActiveLayer(layerId) {
      return this.objLayers[layerId];
    }

    /**
     * Clears the current features from the map and displays the given new features. The features are sorted by the configured
     * property. The function takes the backend configuration according to prioritized features into account.
     * @param features
     * @param type
     * @param mode
     * @param noClear
     * @returns {*}
     */
  }, {
    key: "showFeatures",
    value: function showFeatures(features) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "table";
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "router";
      var noClear = arguments.length > 3 ? arguments[3] : undefined;
      var self = this;
      var varReturn;
      if (!noClear) {
        this.routerFeaturesSource.clear();
      }
      features = features.elements;
      // interim clear of feature selection
      if (!features || features.length === 0) {
        var _extent;
        if (this.mapData.drawCircle) {
          var tempFeature = this.areaCircleSource.getFeatures()[0];
          if (tempFeature && tempFeature.getGeometry() && tempFeature.getGeometry().getExtent()) {
            _extent = tempFeature.getGeometry().getExtent();
          }
          if (_extent && (0, _extent2.getArea)(_extent) > 0) {
            var width = jQuery(".c4g-sideboard.c4g-open").css('width');
            if (width) {
              width = width.split(".");
              width = Array.isArray(width) ? width[0] : width;
              width = parseInt(width) + 50;
            } else {
              width = 50;
            }
            var padding = [50, width, 50, 50];
            this.props.mapController.map.getView().fit(_extent, {
              padding: padding
            });
          }
        }
        return [];
      }
      var mapData = this.mapData;
      var layerId = this.state.mode === "route" ? this.state.layerRoute : this.state.layerArea;
      var activeLayer = this.state.mode === "route" ? this.state.layerValueRoute : this.state.layerValueArea;
      var layer = this.getActiveLayer(layerId).layerData;
      var unstyledFeatures = [];
      var contentFeatures = [];
      var missingStyles = [];
      var priceSortedFeatures = features.length ? features.slice() : features.elements.slice();
      var bestFeatures = [];
      var worstFeatures = [];
      this.bestFeatureIds = [];
      this.worstFeatureIds = [];
      if (mapData.priorityFeatures && mapData.priorityLocstyle && features.length > 0) {
        // sort by selected value for the map label ascending
        priceSortedFeatures.sort(function (a, b) {
          return parseFloat(a[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) - parseFloat(b[mapData.routerLayers[layerId][activeLayer]['mapLabel']]);
        });
        var featureCount = parseInt(mapData.priorityFeatures, 10);
        var upperBound = featureCount > priceSortedFeatures.length ? priceSortedFeatures.length : featureCount;
        var lowerBound = featureCount + upperBound > priceSortedFeatures.length ? priceSortedFeatures.length - upperBound : featureCount;
        for (var i = 0; i < upperBound; i++) {
          bestFeatures[i] = priceSortedFeatures[i];
          this.bestFeatureIds.push(priceSortedFeatures[i]['id']);
        }
        for (var j = priceSortedFeatures.length - 1; j > priceSortedFeatures.length - 1 - lowerBound; j--) {
          worstFeatures[j] = priceSortedFeatures[j];
          this.worstFeatureIds.push(priceSortedFeatures[j]['id']);
        }
      }
      varReturn = priceSortedFeatures;
      if (type === "petrols" && mode !== "area") {
        features = features.elements;
      }
      var extent = (0, _extent2.createEmpty)();
      if (type !== "overpass") {
        featureLoop: for (var _i3 = 0; features && _i3 < features.length; _i3++) {
          if (!features[_i3].id) {
            continue;
          }
          var label = "";
          var feature = features[_i3];
          var resultCoordinate = void 0;
          var contentFeature = void 0;
          resultCoordinate = (0, _proj.transform)([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
          var point = new _geom.Point(resultCoordinate);
          contentFeature = new _ol.Feature(point);
          contentFeature.setId(feature.id);
          contentFeature.set('loc_linkurl', layer.loc_linkurl);
          contentFeature.set('locstyle', layer.locstyle);
          contentFeature.set('hover_location', layer.hover_location);
          contentFeature.set('hover_style', layer.hover_style);
          contentFeature.set('zoom_onclick', layer.zoom_onclick);
          contentFeature.set('tid', feature.id);
          if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          } else if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature.tags && feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          }
          var locstyle = feature['locstyle'] || layer.locstyle;
          if (mapData.priorityFeatures && mapData.priorityLocstyle) {
            if (bestFeatures.includes(feature)) {
              locstyle = mapData.priorityLocstyle;
            } else if (mapData.negativePriorityLocstyle && worstFeatures.includes(feature)) {
              locstyle = mapData.negativePriorityLocstyle;
            }
          }
          contentFeature.set('locationStyle', locstyle);
          contentFeature.set('locstyle', locstyle);
          contentFeature.set('zIndex', _i3);
          contentFeature.set('label', label);
          if (locstyle && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle]) {
            if (!self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
              self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style = self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].getStyleFunction();
            }
            contentFeature.setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                contentFeatures.push(contentFeature);
              }
            } else {
              contentFeatures.push(contentFeature);
            }
          } else {
            contentFeature.set('styleId', locstyle);
            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                contentFeatures.push(contentFeature);
                missingStyles[locstyle] = locstyle;
              }
            } else {
              contentFeatures.push(contentFeature);
              missingStyles[locstyle] = locstyle;
            }
          }
          for (var tag in feature.tags) {
            if (feature.tags.hasOwnProperty(tag)) {
              contentFeature.set(tag, feature.tags[tag]);
            }
          }
          if (contentFeature && contentFeature.getGeometry() && contentFeature.getGeometry().getExtent()) {
            extent = (0, _extent2.extend)(extent, contentFeature.getGeometry().getExtent());
          }
        }
      } else {
        var mapProj = self.props.mapController.map.getView().getProjection();
        var useOvpXmlFormat = false; // ToDo check actual format of data
        if (useOvpXmlFormat) {
          var format = new _OSMXML["default"]();
          contentFeatures = format.readFeatures(features, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapProj
          });
        } else {
          // convert features to ol.Features
          for (var _i4 = 0; _i4 < features.length; _i4++) {
            var _feature = new _ol.Feature();
            _feature.set('tid', features[_i4].id);
            _feature.set('id', "" + features[_i4].id);
            _feature.setGeometry(new _geom.Point((0, _proj.fromLonLat)([features[_i4].lon, features[_i4].lat])));
            _feature.set('tags', features[_i4].tags);
            _feature.setId("" + features[_i4].id);
            if (features[_i4].distance) {
              _feature.set('distance', features[_i4].distance);
            }
            contentFeatures.push(_feature);
          }
        }
        var labelKey = mapData.routerLayers[layerId][activeLayer]['mapLabel'];
        var arrOvp = [];
        for (var id in contentFeatures) {
          if (contentFeatures.hasOwnProperty(id)) {
            contentFeatures[id].set('loc_linkurl', layer.loc_linkurl);
            contentFeatures[id].set('locstyle', layer.locstyle);
            contentFeatures[id].set('hover_location', layer.hover_location);
            contentFeatures[id].set('hover_style', layer.hover_style);
            contentFeatures[id].set('zoom_onclick', layer.zoom_onclick);
            // check if id is in array format
            if (contentFeatures[id].get('id') && Array.isArray(contentFeatures[id].get('id')) && contentFeatures[id].get('id').includes('/')) {
              //id from out:json is not transformed correctly
              contentFeatures[id].set('tid', parseInt(contentFeatures[id].get('id').split('/')[1]));
            } else {
              contentFeatures[id].set('tid', contentFeatures[id].getId());
            }
            var ovpObj = {
              id: contentFeatures[id].get('tid'),
              tags: contentFeatures[id].get('tags')
            };
            if (contentFeatures[id].get('distance')) {
              ovpObj.distance = contentFeatures[id].get('distance');
            }
            arrOvp.push(ovpObj);
            contentFeatures[id].set('label', contentFeatures[id].get(labelKey));
            if (self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle]) {
              if (!self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style) {
                self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style = self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].getStyleFunction();
              }
              contentFeatures[id].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
            }
            if (contentFeatures[id] && contentFeatures[id].getGeometry().getExtent()) {
              extent = (0, _extent2.extend)(extent, contentFeatures[id].getGeometry().getExtent());
            }
          }
        }
        varReturn = arrOvp;
      }
      if (missingStyles && missingStyles.length > 0) {
        self.props.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
          done: function done() {
            for (var _i5 = 0; _i5 < contentFeatures.length; _i5++) {
              var styleId = contentFeatures[_i5].get('locstyle');
              if (!self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style) {
                self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style = self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].getStyleFunction();
              }
              contentFeatures[_i5].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);
            }
            self.setState({
              featureSource: self.routerFeaturesSource
            });
            missingStyles = undefined;
          }
        });
      }
      if (contentFeatures && contentFeatures.length > 0) {
        this.routerFeaturesSource.addFeatures(contentFeatures);
      }
      if (this.mapData.drawCircle) {
        var _tempFeature = this.areaCircleSource.getFeatures()[0];
        if (_tempFeature && _tempFeature.getGeometry() && _tempFeature.getGeometry().getExtent()) {
          extent = (0, _extent2.extend)(extent, _tempFeature.getGeometry().getExtent());
        }
      }
      if ((0, _extent2.getArea)(extent) > 0) {
        var _width = jQuery(".c4g-sideboard.c4g-open").css('width');
        if (_width) {
          _width = _width.split(".");
          _width = Array.isArray(_width) ? _width[0] : _width;
          _width = parseInt(_width) + 50;
        } else {
          _width = 50;
        }
        var _padding = [50, _width, 50, 50];
        this.props.mapController.map.getView().fit(extent, {
          padding: _padding
        });
      }
      return varReturn;
    }

    /**
     * Displays the main route.
     * @param routeResponse
     */
  }, {
    key: "showRoute",
    value: function showRoute(routeResponse) {
      this.showRouteLayer(routeResponse, 0);
      this.showRouteInstructions(routeResponse, 0);
    }

    /**
     * Show an alternate route.
     * @param routeResponse
     * @param routeNumber
     */
  }, {
    key: "showAltRoute",
    value: function showAltRoute(routeResponse, routeNumber) {
      this.showRouteLayer(routeResponse, routeNumber);
      this.showRouteInstructions(routeResponse, routeNumber);
    }

    /**
     * Displays a route on the map.
     * @param routeResponse
     * @param routeNumber
     */
  }, {
    key: "showRouteLayer",
    value: function showRouteLayer(routeResponse, routeNumber) {
      var mapView,
        wayPolyline,
        routeFeatures,
        altRouteFeatures,
        rightPadding,
        leftPadding,
        routeNumber = routeNumber || 0;
      if (routeResponse) {
        this.routerWaySource.clear();
        this.routingAltWaySource.clear();
        mapView = this.props.mapController.map.getView();
        if (this.props.mapController.data.router_api_selection == '1' || this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '1' || routeResponse.routeType == '2') {
          //OSRM-API:5.x
          wayPolyline = new _format.Polyline();

          // add route

          if (routeResponse.routes) {
            //check for alternative route
            if (routeResponse.routes[1]) {
              if (routeNumber === 1) {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(0);
              } else {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(1);
              }
            }
            routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            routeFeatures[0].setId(routeNumber);
          }
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          wayPolyline = new _format.Polyline({
            'factor': this.props.mapController.data.router_viaroute_precision || 1e6
          });

          // add route
          routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
        } else if (this.props.mapController.data.router_api_selection == '3') {
          wayPolyline = new _format.Polyline();
          if (routeResponse.paths && routeResponse.paths[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[0].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[1].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }
          routeFeatures = wayPolyline.readFeatures(routeResponse.paths[routeNumber].points, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        } else if (this.props.mapController.data.router_api_selection == "4" || routeResponse.routeType == '4') {
          wayPolyline = new _format.Polyline({
            'factor': 1e6
          });
          if (routeResponse.trip && routeResponse.trip.legs && routeResponse.trip.legs[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }
          routeFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[routeNumber].shape, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        }
        if (this.props.mapController.data.router_alternative == '1') {
          if (routeResponse.routes && routeResponse.routes.length > 1 && routeResponse.routes[1] || routeResponse.paths && routeResponse.paths.length > 1 && routeResponse.paths[1]) {
            this.routingAltWaySource.addFeatures(altRouteFeatures);
          }
        }
        if (routeFeatures) {
          this.routerWaySource.addFeatures(routeFeatures);
          // render view
          // so the route gets drawn before the animation starts
          this.props.mapController.map.renderSync();

          // animation
          mapView.animate({
            start: +new Date(),
            duration: 2000,
            resolution: mapView.getResolution(),
            center: [0, 0]
            //rotation: Math.PI
          });

          // calculate padding

          var width = jQuery(".c4g-starboard-container").css('width');
          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          }
          // center on route
          mapView.fit(routeFeatures[0].getGeometry(), {
            size: this.props.mapController.map.getSize(),
            padding: [50, width, 50, 50]
          });
        }
      }
    }

    /**
     * Creates an interaction for routing instructions. When hovering the instructions in the portside container, the
     * location of the instruction is highlighted on the route.
     * @param routerInstruction
     */
  }, {
    key: "adjustInstructionMapInteraction",
    value: function adjustInstructionMapInteraction(routerInstruction) {
      var self = this,
        fnItemClick,
        fnItemOver,
        fnItemOut;
      fnItemClick = function fnItemClick(element) {
        self.routerHintSource.clear();
        var feature = self.routerWaySource.getFeatures()[0];
        var coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = element.data('pos');
        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = (0, _proj.fromLonLat)(stringlonlat);
          var currentHintFeature = new _ol.Feature({
            geometry: new _geom.Point(newCoord)
          });
          self.routerHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().setCenter(newCoord);
        }
        if (coordinates) {
          var start = element.data('start');
          var end = element.data('end');
          if (start, end) {
            var geom = new _geom.LineString(coordinates.slice(start, end));
            var currentHintFeature = new _ol.Feature({
              geometry: geom
            });
            currentHintFeature.setStyle(new _style2.Style({
              stroke: new _style2.Stroke({
                color: 'rgba(255, 0, 0, 1)',
                width: 20
              })
            }));
            var currentZoom = self.options.mapController.map.getView().getZoom();
            self.routerHintSource.addFeature(currentHintFeature);
            self.options.mapController.map.getView().fit(geom);
            var afterZoom = self.options.mapController.map.getView().getZoom();
            var endZoom = Math.round((currentZoom + afterZoom) / 2);
            endZoom = endZoom > afterZoom ? afterZoom : endZoom;
            self.options.mapController.map.getView().setZoom(endZoom);
          }
        }
      };
      fnItemOver = function fnItemOver(element) {
        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
          var feature = self.routerWaySource.getFeatures()[0];
          if (feature) {
            self.routerHintSource.clear();
            var currentHintFeature = new _ol.Feature({
              geometry: new _geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
            });
            self.routerHintSource.addFeature(currentHintFeature);
          }
        }
        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
          var feature = self.routerWaySource.getFeatures()[0];
          if (feature) {
            self.routerHintSource.clear();
            var coordLonLat = element.data('pos');
            if (coordLonLat) {
              var stringlonlat = coordLonLat.split(",");
              stringlonlat[0] = parseFloat(stringlonlat[0]);
              stringlonlat[1] = parseFloat(stringlonlat[1]);
              var newCoord = (0, _proj.fromLonLat)(stringlonlat);
              var currentHintFeature = new _ol.Feature({
                geometry: new _geom.Point(newCoord)
              });
              self.routerHintSource.addFeature(currentHintFeature);
            }
            feature = self.routerWaySource.getFeatures()[0];
            var coordinates = feature.getGeometry().getCoordinates();
            if (coordinates) {
              var start = element.data('start');
              var end = element.data('end');
              if (start, end) {
                var currentHintFeature = new _ol.Feature({
                  geometry: new _geom.LineString(coordinates.slice(start, end))
                });
                currentHintFeature.setStyle(new _style2.Style({
                  stroke: new _style2.Stroke({
                    color: 'rgba(255, 0, 0, 1)',
                    width: 15
                  })
                }));
                self.routerHintSource.addFeature(currentHintFeature);
              }
            }
          }
        }
      };
      fnItemOut = function fnItemOut() {
        self.routerHintSource.clear();
      };
      jQuery('[data-start]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
      jQuery('[data-pos]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
    }

    /**
     * Adds a click interaction for the router. Upon map click, the clicked points are converted to locations and the
     * route search is started, as long as all mandatory properties are set.
     */
  }, {
    key: "addMapInputInteraction",
    value: function addMapInputInteraction() {
      var self = this,
        coordinate;
      self.fnMapRouterInteraction = function (evt) {
        if (self.state.open !== true) {
          return;
        }
        var feature = self.props.mapController.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
          return feature;
        });
        if (feature && feature.getId()) {
          var activeId = feature.getId().search && feature.getId().search('/') ? parseFloat(feature.getId().substring(feature.getId().search('/') + 1)) : feature.getId();
          self.setState({
            activeId: activeId,
            openResults: true
          }, function () {
            // TODO behaves differently for route or area search
            if (document.querySelector(".c4g-route-feature-wrapper")) {
              var featureWrapper = document.querySelector(".c4g-route-feature-wrapper");
              var activeFeature = document.querySelector("li.route-features-list-element.c4g-active");
              if (featureWrapper && activeFeature) {
                featureWrapper.scrollTo(0, activeFeature.offsetTop);
              }
            }
          });
        } else {
          coordinate = (0, _proj.toLonLat)(evt.coordinate);
          // clear old features
          self.areaSource.clear();
          if (self.state.mode === "route") {
            // TODO router permalink wieder aktualisieren
            if (self.state.fromAddress === "") {
              self.setRouteFrom(coordinate[0], coordinate[1]);
              // self.updateLinkFragments("addressFrom", coordinate);
              self.recalculateRoute();
            } else if (self.state.toAddress === "") {
              self.setRouteTo(coordinate[0], coordinate[1]);
              // self.updateLinkFragments("addressTo", coordinate);
              self.recalculateRoute();
            } else if (self.state.overPtCtr > 0) {
              for (var i = 0; i < self.state.overPtCtr; i++) {
                if (!self.state.overPoints[i]) {
                  self.addOverPoint(coordinate[0], coordinate[1], i);
                  break;
                }
              }
            }
          } else if (self.state.mode === "area" && self.state.areaAddress === "") {
            self.setAreaPoint(coordinate[0], coordinate[1]);
          }
        }
      };
      this.props.mapController.map.on('click', self.fnMapRouterInteraction);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx":
/*!*************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-titlebar.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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
var Titlebar = exports["default"] = /*#__PURE__*/function (_Component) {
  function Titlebar(props) {
    (0, _classCallCheck2["default"])(this, Titlebar);
    return _callSuper(this, Titlebar, [props]);
  }
  (0, _inherits2["default"])(Titlebar, _Component);
  return (0, _createClass2["default"])(Titlebar, [{
    key: "render",
    value: function render() {
      var _this = this;
      var detailButton = "";
      if (this.props.detailBtnClass && this.props.detailBtnCb) {
        detailButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.detailBtnClass,
          onMouseUp: this.props.detailBtnCb
        });
      }
      var closeButton = "";
      if (this.props.closeBtnClass && this.props.closeBtnCb) {
        closeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.closeBtnClass,
          onMouseUp: this.props.closeBtnCb,
          title: this.props.closeBtnTitle
        });
      }
      var minimizeButton = "";
      if (this.props.hideContainer) {
        var minimize = function minimize() {
          // this.props.removeComponent();
          jQuery(_this.props.hideContainer).removeClass("c4g-open").addClass("c4g-close");
        };
        minimizeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-sideboard-hide',
          onMouseUp: function onMouseUp() {
            return minimize();
          }
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.wrapperClass
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.headerClass
      }, this.props.header), minimizeButton, closeButton, detailButton, this.props.children);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-de.js":
/*!*************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/routing-constant-i18n-de.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


/**
 *  constants
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstantsGerman = void 0;
var routingConstantsGerman = exports.routingConstantsGerman = {
  CTRL_ROUTER: 'Router öffnen/schließen',
  ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_OVER_LABEL: 'Zwischenziel',
  ROUTER_TO_LABEL: 'Ziel',
  ROUTER_CLEAR_TITLE: 'Löschen',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Zwischenziel',
  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Umkreissuche',
  ROUTER_SWITCH: 'Wechsel von Start und Ziel',
  ROUTER_OVER: 'Zwischenziel hinzufügen',
  ROUTER_PRINT: 'Routenbeschreibung drucken',
  ROUTER_DOWNLOAD: 'Route als GPX herunterladen',
  ROUTER_EDITOR: 'Route in den Editor exportieren',
  ROUTER_EDITOR_ELEMENT: 'Element im Editor.',
  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
  ROUTER_VIEW_LABEL_TIME: 'Zeit:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profil:',
  ROUTER_VIEW_ALERT_ERROR: 'Fehler',
  ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
  ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',
  ROUTER_ERROR_POLYLINE: 'Route konnte nicht berechnet werden.',
  ROUTER_ERROR_LINESTRING: 'Strecke lässt sich nicht im Router.',
  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',
  POPUP_ROUTE_EDIT: 'Strecke im Router öffnen',
  ROUTER: 'Router',
  ROUTER_N: 'Norden',
  ROUTER_E: 'Ost',
  ROUTER_S: 'Süden',
  ROUTER_W: 'Westen',
  ROUTER_NE: 'Nordost',
  ROUTER_SE: 'Südost',
  ROUTER_SW: 'Südwest',
  ROUTER_NW: 'Nordwest',
  ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
  ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
  ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
  ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
  ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
  ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',
  'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
  'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
  'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
  'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
  'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',
  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'Scharf rechts',
  'ROUTER_5.X_MOD_2': 'Rechts',
  'ROUTER_5.X_MOD_3': 'Leicht rechts',
  'ROUTER_5.X_MOD_4': 'Geradeaus',
  'ROUTER_5.X_MOD_5': 'Leicht links',
  'ROUTER_5.X_MOD_6': 'Links',
  'ROUTER_5.X_MOD_7': 'Scharf links',
  'ROUTER_5.X_MOD_8': 'in der Nähe',
  ROUTER_FROM: 'Start',
  ROUTER_TO: 'Ziel',
  ROUTER_CENTER: 'Zentrum',
  ROUTER_FIND_ROUTE: 'Route finden',
  ROUTER_LOC_ROUTE_TO: 'Route hierhin',
  ROUTER_ROUTEDESC: 'Routenbeschreibung',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distanz',
  ROUTER_TIME: 'Zeit',
  ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
  ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
  ROUTER_SEARCHING: 'Suche Adresse...',
  ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
  ROUTER_CALC_ROUTE: 'Berechne Route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',
  ROUTER_SETTINGS: 'Routeneinstellungen',
  //new Router
  AREA_NAME: 'Umkreissuche',
  AREA_PROFILE: 'Profil',
  AREA_FEATURECOUNT: 'Gefundene Elemente',
  ROUTE_DETOUR: 'Umweg',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Routenbeschreibung',
  FEATURES_HEADLINE: 'Lokationen',
  ROUTE_POSITION: 'Position ermitteln',
  START_ROUTE: 'Suche starten',
  REMOVE_ADDRESS: 'Adresse löschen',
  CAR: 'Auto',
  BIKE: 'Fahrrad',
  ROADBIKE: 'Rennrad',
  MOUNTAINBIKE: 'Mountainbike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Lastkraftwagen',
  WALK: 'FußgängerIn',
  WANDER: 'WandererIn',
  WHEEL: 'Rollstuhl',
  SCOOT: 'Roller',
  MOTORBIKE: 'Motorrad',
  CLOSE: 'Schließen',
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-en.js":
/*!*************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/routing-constant-i18n-en.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


/**
 *  constants
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstantsEnglish = void 0;
var routingConstantsEnglish = exports.routingConstantsEnglish = {
  ROUTER_VIEW_ADDRESS_INPUT: 'Find route',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_TO_LABEL: 'End',
  ROUTER_CLEAR_TITLE: 'Delete',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Interim Goal',
  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Area search',
  ROUTER_SWITCH: 'Switch between Start and End',
  ROUTER_OVER: 'Add interim goal',
  ROUTER_PRINT: 'Print route description',
  ROUTER_DOWNLOAD: 'Download route as GPX',
  ROUTER_EDITOR: 'Export route into the editor',
  ROUTER_EDITOR_ELEMENT: 'Element in the editor',
  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',
  POPUP_ROUTE_EDIT: 'Open line in router',
  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Distance:',
  ROUTER_VIEW_LABEL_TIME: 'Time:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profile',
  ROUTER_VIEW_ALERT_Error: 'Error',
  ROUTER_VIEW_ALERT_ADDRESS: 'Address not found.',
  ROUTER_VIEW_ALERT_GOCODING: 'No access to geocoding.',
  ROUTER_ERROR_POLYLINE: 'Could not calculate route.',
  ROUTER_ERROR_LINESTRING: 'Could not open line in router.',
  ROUTER: 'Router',
  ROUTER_N: 'Head north',
  ROUTER_E: 'Head east',
  ROUTER_S: 'Head south',
  ROUTER_W: 'Head west',
  ROUTER_NE: 'Head northeast',
  ROUTER_SE: 'Head southeast',
  ROUTER_SW: 'Head southwest',
  ROUTER_NW: 'Head northwest',
  ROUTER_DIRECTION_0: 'unknown direction[ onto <b>%s</b>]',
  ROUTER_DIRECTION_1: 'straight ahead[ onto <b>%s</b>]',
  ROUTER_DIRECTION_2: 'slight right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_3: 'right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_4: 'sharp right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_5: 'turn[ onto <b>%s</b>]',
  ROUTER_DIRECTION_6: 'sharp turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_7: 'turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_8: 'light turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_10: 'drive in direction of <b>%d</b>[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'Take the first exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-2': 'Take the 2nd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-3': 'Take the 3rd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-4': 'Take the 4th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-5': 'Take the 5th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-6': 'Take the 6th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-7': 'Take the 7th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-8': 'Take the 8th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-9': 'Take the 9th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-x': 'Take one of the exits in the roundabout[ onto <b>%s</b>]',
  ROUTER_DIRECTION_15: 'Destination reached',
  'ROUTER_5.X_TYPE_0': ' Turn %m on[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' Follow the course of the road %m[ as <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Depart[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_3': ' Arrive <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Continue driving[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' Take the ramp %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_6': ' Take the ramp %m[ to exit on<b>%s</b>]',
  'ROUTER_5.X_TYPE_7': ' Take the %m site of the fork to[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Take the lane %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' Turn %m to stay on the road',
  'ROUTER_5.X_TYPE_11': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' Follow the road %m',
  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'sharp right',
  'ROUTER_5.X_MOD_2': 'right',
  'ROUTER_5.X_MOD_3': 'slight right',
  'ROUTER_5.X_MOD_4': 'straight',
  'ROUTER_5.X_MOD_5': 'slight left',
  'ROUTER_5.X_MOD_6': 'left',
  'ROUTER_5.X_MOD_7': 'sharp left',
  'ROUTER_5.X_MOD_8': 'somehow',
  ROUTER_FROM: 'Start',
  ROUTER_TO: 'End',
  ROUTER_CENTER: 'Center',
  ROUTER_FIND_ROUTE: 'Find route',
  ROUTER_LOC_ROUTE_TO: 'Route to here',
  ROUTER_ROUTEDESC: 'Description',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distance',
  ROUTER_TIME: 'Time',
  ROUTER_REV_GEOCODING: 'Identified address...',
  ROUTER_ERROR_REV_GEOCODING: 'Fault! Can not identifiy address',
  ROUTER_SEARCHING: 'Search address...',
  ROUTER_ERROR_SEARCHING: 'Fault! Can not find address',
  ROUTER_CALC_ROUTE: 'Calc route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fault! Can not calc address',
  ROUTER_SETTINGS: 'Routing settings',
  CTRL_ROUTER: 'Toggle router',
  //new Router
  AREA_NAME: 'Search perimeter',
  AREA_PROFILE: 'Profile',
  AREA_FEATURECOUNT: 'Found features',
  ROUTE_DETOUR: 'Detour',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Route Instructions',
  FEATURES_HEADLINE: 'Locations',
  ROUTE_POSITION: 'Get user position',
  START_ROUTE: 'Start search',
  CAR: 'Car',
  BIKE: 'Bike',
  ROADBIKE: 'Road bike',
  MOUNTAINBIKE: 'Mountain bike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Truck',
  WALK: 'Pedestrian',
  WANDER: 'Wanderer',
  WHEEL: 'Wheelchair',
  SCOOT: 'Router',
  MOTORBIKE: 'Motorbike',
  CLOSE: 'Close',
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/routing-constant-i18n.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/routing-constant-i18n.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;
var _routingConstantI18nDe = __webpack_require__(/*! ./routing-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-de.js");
var _routingConstantI18nEn = __webpack_require__(/*! ./routing-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/routing-constant-i18n-en.js");
var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-de.js");
var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant-i18n-en.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

function getLanguage(mapData) {
  if (typeof mapData !== 'undefined') {
    switch (mapData.lang) {
      case "de":
        return jQuery.extend(_routingConstantI18nDe.routingConstantsGerman, _c4gMapsConstantI18nDe.langConstantsGerman);
      case "en":
      default:
        return jQuery.extend(_routingConstantI18nEn.routingConstantsEnglish, _c4gMapsConstantI18nEn.langConstantsEnglish);
    }
  }
}

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/routing-constants.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/routing-constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */



/**
 *  constants
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstants = void 0;
var routingConstants = exports.routingConstants = {
  ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
  ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
  ROUTER_INPUT_FROM: 'c4g-router-input-from',
  ROUTER_INPUT_TO: 'c4g-router-input-to',
  ROUTER_INPUT_OVER: 'c4g-router-input-over',
  ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
  ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
  ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
  ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
  ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',
  ROUTER_SWITCH: 'c4g-router-switch',
  ROUTER_OVER: 'c4g-router-over',
  ROUTER_PRINT: 'c4g-router-print',
  ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
  ROUTER_PROFILE_TRUCK: 'c4g-router-profile-hgv',
  ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
  ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
  ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',
  ROUTER_PROFILE_SCOOTER: 'c4g-router-profile-scooter',
  ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
  ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
  ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
  ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',
  ROUTE_LAYER_VALUES: 'c4g-routing-layer-values',
  ROUTE_LAYERS_SELECT: 'c4g-routing-layers-select',
  ROUTE_TOGGLE: 'c4g-routing-toggle',
  OUTPUT_DETOUR: 'c4g-routing-output',
  ROUTE_START_BUTTON: 'c4g-route-search-start',
  ROUTER_SEARCH: 'c4g-router-search',
  ROUTE_POSITION: 'c4g-router-position',
  ROUTE_ERROR: 'c4g-routing-error',
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "?ec93":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?bfb9":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a632":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9e10":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);