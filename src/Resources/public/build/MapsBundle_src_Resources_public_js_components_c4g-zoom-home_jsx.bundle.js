"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-zoom-home_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-zoom-home.jsx":
/*!**************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-zoom-home.jsx ***!
  \**************************************************************************/
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
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _ol = __webpack_require__(/*! ol */ "../MapsBundle/node_modules/ol/index.js");
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
var ZoomHome = exports["default"] = /*#__PURE__*/function (_Component) {
  function ZoomHome(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ZoomHome);
    _this = _callSuper(this, ZoomHome, [props]);
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapController.data);
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (mapData.calc_extent === "LOCATIONS" || mapData.calc_extent === "CENTERLOCS") {
        var extent = mapController.proxy.layerController.extent;
        if (extent && !(extent.maxX === Infinity || extent.maxX === -Infinity)) {
          var _view = mapController.map.getView();
          var padding = [parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10), parseInt(mapData.min_gap, 10)];
          var realExtent = [extent.minX, extent.minY, extent.maxX, extent.maxY];
          if (mapData.calc_extent === "CENTERLOCS") {
            // ssss
            _view.fit(realExtent, {
              maxZoom: mapData.center.zoom
            });
          } else {
            _view.fit(realExtent, {
              padding: padding
            });
          }
        }
      } else {
        view.setCenter((0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
        view.setZoom(parseInt(mapData.center.zoom, 10));
        view.setRotation(parseFloat(mapData.center.rotation));
      }

      // check userposition
      var geoLocation;
      if (mapData.geolocation) {
        var funcLocation = function funcLocation(evt) {
          view.setCenter(scope.props.mapController.geolocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
        };
        scope.props.mapController.geolocation.once('change', funcLocation);
        if (this.props.mapController.geolocation.getTracking()) {
          this.props.mapController.geolocation.dispatchEvent('change');
        } else {
          this.props.mapController.geolocation.setTracking(true);
        }
      }
      mapController.map.setView(view);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_ZOOM_HOME;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_ZOOM_HOME;
    }
    element.appendChild(button);

    // set onClick to the toggle-function
    button.addEventListener('click', toggle, {
      useCapture: false,
      passive: true
    });
    button.addEventListener('touchstart', toggle, {
      useCapture: false,
      passive: true
    });

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

    var control = new _control.Control({
      element: element,
      target: _this.props.target
    });
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "zoomHome";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomHome = control;
    return _this;
  }
  (0, _inherits2["default"])(ZoomHome, _Component);
  return (0, _createClass2["default"])(ZoomHome, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy16b29tLWhvbWVfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxLQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssR0FBQSxHQUFBTCxtQkFBQTtBQUErQixTQUFBTSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVIsd0JBQUFRLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENB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UUFBQTtJQUFBc0YsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBekdtQ0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLWhvbWUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbUhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgYnV0dG9uO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCB2aWV3ID0gbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIGxldCBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJMT0NBVElPTlNcIiB8fCBtYXBEYXRhLmNhbGNfZXh0ZW50ID09PSBcIkNFTlRFUkxPQ1NcIikge1xuICAgICAgICBsZXQgZXh0ZW50ID0gbWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuZXh0ZW50O1xuICAgICAgICBpZiAoZXh0ZW50ICYmICEoZXh0ZW50Lm1heFggPT09IEluZmluaXR5IHx8IGV4dGVudC5tYXhYID09PSAtSW5maW5pdHkpKSB7XG4gICAgICAgICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgICAgICAgbGV0IHBhZGRpbmcgPSBbXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1hcERhdGEubWluX2dhcCwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWFwRGF0YS5taW5fZ2FwLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXBEYXRhLm1pbl9nYXAsIDEwKVxuICAgICAgICAgIF07XG4gICAgICAgICAgbGV0IHJlYWxFeHRlbnQgPSBbXG4gICAgICAgICAgICBleHRlbnQubWluWCxcbiAgICAgICAgICAgIGV4dGVudC5taW5ZLFxuICAgICAgICAgICAgZXh0ZW50Lm1heFgsXG4gICAgICAgICAgICBleHRlbnQubWF4WVxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAobWFwRGF0YS5jYWxjX2V4dGVudCA9PT0gXCJDRU5URVJMT0NTXCIpIHtcbiAgICAgICAgICAgIC8vIHNzc3NcbiAgICAgICAgICAgIHZpZXcuZml0KHJlYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgbWF4Wm9vbTptYXBEYXRhLmNlbnRlci56b29tXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmZpdChyZWFsRXh0ZW50LCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZpZXcuc2V0Q2VudGVyKHRyYW5zZm9ybShbcGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5sb24pLCBwYXJzZUZsb2F0KG1hcERhdGEuY2VudGVyLmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpKTtcbiAgICAgICAgdmlldy5zZXRab29tKHBhcnNlSW50KG1hcERhdGEuY2VudGVyLnpvb20sIDEwKSk7XG4gICAgICAgIHZpZXcuc2V0Um90YXRpb24ocGFyc2VGbG9hdChtYXBEYXRhLmNlbnRlci5yb3RhdGlvbikpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayB1c2VycG9zaXRpb25cbiAgICAgIGxldCBnZW9Mb2NhdGlvbjtcbiAgICAgIGlmIChtYXBEYXRhLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIGxldCBmdW5jTG9jYXRpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgdmlldy5zZXRDZW50ZXIoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICBpZiAobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tKSB7XG4gICAgICAgICAgICB2aWV3LnNldFpvb20ocGFyc2VJbnQobWFwRGF0YS5nZW9sb2NhdGlvbl96b29tLCAxMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLm9uY2UoJ2NoYW5nZScsIGZ1bmNMb2NhdGlvbik7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0VHJhY2tpbmcoKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uc2V0VHJhY2tpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWFwQ29udHJvbGxlci5tYXAuc2V0Vmlldyh2aWV3KTtcbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT0xfWk9PTV9IT01FKycgJytjc3NDb25zdGFudHMuT0xfQ09OVFJPTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgLy8gYnV0dG9uXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSE9NRTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9IT01FO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiem9vbUhvbWVcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy56b29tSG9tZSA9IGNvbnRyb2w7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnTWFwc0kxOG4iLCJfcHJvaiIsIl9vbCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiWm9vbUhvbWUiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiZWxlbWVudCIsImJ1dHRvbiIsIm1hcENvbnRyb2xsZXIiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsIm1hcERhdGEiLCJkYXRhIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwidG9nZ2xlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiY2FsY19leHRlbnQiLCJleHRlbnQiLCJwcm94eSIsImxheWVyQ29udHJvbGxlciIsIm1heFgiLCJJbmZpbml0eSIsInBhZGRpbmciLCJwYXJzZUludCIsIm1pbl9nYXAiLCJyZWFsRXh0ZW50IiwibWluWCIsIm1pblkiLCJtYXhZIiwiZml0IiwibWF4Wm9vbSIsImNlbnRlciIsInpvb20iLCJzZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0Iiwic2V0Wm9vbSIsInNldFJvdGF0aW9uIiwicm90YXRpb24iLCJnZW9Mb2NhdGlvbiIsImdlb2xvY2F0aW9uIiwiZnVuY0xvY2F0aW9uIiwiZXZ0Iiwic2NvcGUiLCJnZXRQb3NpdGlvbiIsImdlb2xvY2F0aW9uX3pvb20iLCJvbmNlIiwiZ2V0VHJhY2tpbmciLCJkaXNwYXRjaEV2ZW50Iiwic2V0VHJhY2tpbmciLCJzZXRWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT0xfWk9PTV9IT01FIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9aT09NX0hPTUUiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tSG9tZSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9