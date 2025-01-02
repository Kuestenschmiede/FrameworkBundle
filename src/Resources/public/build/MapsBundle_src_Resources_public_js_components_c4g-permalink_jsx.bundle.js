"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-permalink_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-permalink.jsx":
/*!**************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-permalink.jsx ***!
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
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _proj = __webpack_require__(/*! ol/proj */ "../MapsBundle/node_modules/ol/proj.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "../MapsBundle/node_modules/ol/control.js");
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
var Permalink = exports["default"] = /*#__PURE__*/function (_Component) {
  function Permalink(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Permalink);
    _this = _callSuper(this, Permalink, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_PERMALINK;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_PERMALINK;
    }
    element.className = "c4g-permalink-control ol-unselectable ol-control ";
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
      return element.name === "permalink";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.horizontalPanel = control;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.state = {
      open: false,
      link: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(Permalink, _Component);
  return (0, _createClass2["default"])(Permalink, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-permalink-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-permalink-header",
        headerClass: "c4g-permalink-header-headline",
        header: "Permalink",
        closeBtnClass: "c4g-permalink-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-permalink-content"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        cols: "50",
        rows: "2",
        id: "permalink-text",
        value: this.state.link,
        readOnly: true
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON,
        title: this.langConstants.COPY_TO_CLIPBOARD,
        "data-clipboard-target": "#permalink-text"
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.REFRESH + ' ' + _c4gMapsConstant.cssConstants.ICON,
        title: this.langConstants.REFRESH,
        onMouseUp: function onMouseUp() {
          return _this2.generateLinkFromCurrentState({
            target: _this2.textfield
          });
        }
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open !== this.state.open || prevState.link !== this.state.link) {
        this.generateLinkFromCurrentState({
          target: this.textfield
        });
      }
      if (prevState.open && !this.state.open) {
        jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      }
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Permalink" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Permalink" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Permalink");
        }
      }
      if (this.state.open) {
        jQuery(".c4g-permalink-container").addClass(_c4gMapsConstant.cssConstants.OPEN).removeClass(_c4gMapsConstant.cssConstants.CLOSE);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.textField = document.querySelector("#permalink-text");
      var copyButton = document.querySelector("." + _c4gMapsConstant.cssConstants.COPY + "." + _c4gMapsConstant.cssConstants.ICON);
      try {
        new ClipboardJS(copyButton);
      } catch (error) {
        // clipboard script is not loaded
        console.warn('Permalink is currently not supported in backend mode..');
      }
    }
  }, {
    key: "open",
    value: function open() {
      jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      jQuery(".c4g-permalink-container").removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      this.setState({
        open: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (jQuery(this.popup).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "generateLinkFromCurrentState",
    value: function generateLinkFromCurrentState(opt_options) {
      var options, proxy, mapView, parameters, link, center, baseLayerIdx, layerIdx;
      options = opt_options || {};
      if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
        options.paramCount = 6;
      }
      parameters = [];
      mapView = this.props.mapController.map.getView();
      proxy = this.props.mapController.proxy;
      center = mapView.getCenter();
      center = (0, _proj.transform)([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');
      parameters.push(+center[0].toFixed(6));
      parameters.push(+center[1].toFixed(5));
      parameters.push(parseInt(mapView.getZoom()));
      if (this.props.saveIds) {
        parameters.push(+mapView.getRotation().toFixed(2));

        // find active baselayer
        if (this.props.mapController.state.activeBaselayerId) {
          parameters.push(this.props.mapController.state.activeBaselayerId);
        } else {
          parameters.push(0);
        }

        // find active layers
        var layers = [];
        var arrLayerStates = this.props.mapController.state.arrLayerStates;
        for (var layerId in arrLayerStates) {
          if (arrLayerStates.hasOwnProperty(layerId)) {
            layers = layers.concat(this.getActiveLayerIds(arrLayerStates[layerId]));
          }
        }

        // delta-decode if there are more than one layer
        if (layers.length > 1) {
          // do not delta encode uuids
          if (layers[0].indexOf("{") === -1) {
            layers = _c4gMapsUtils.utils.deltaEncode(layers);
          }
          layers = layers.join(':');
        } else {
          layers = layers[0] || '0';
        }
        parameters.push(layers);
      }
      parameters = parameters.join('/');
      // build link
      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.props.mapController.data.permalink.getParameter);

      // if (options.target) {
      //   options.target.value = link;
      // } else {
      //   return link;
      // }
      this.setState({
        link: link
      });
    } // end of generateLinkFromCurrentState
  }, {
    key: "generateLink",
    value: function generateLink(parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      }

      // build and return link
      return _c4gMapsUtils.utils.setUrlParam(parameters.join('/'), this.props.mapController.data.permalink.getParameter);
    } // end of generateLink
  }, {
    key: "getActiveLayerIds",
    value: function getActiveLayerIds(arrLayerState) {
      var ids = [];
      if (arrLayerState.active) {
        ids.push(arrLayerState.id);
      }
      for (var childId in arrLayerState.childStates) {
        if (arrLayerState.childStates.hasOwnProperty(childId)) {
          ids = ids.concat(this.getActiveLayerIds(arrLayerState.childStates[childId]));
        }
      }
      return ids;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1wZXJtYWxpbmtfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGdCQUFBLEdBQUFELG1CQUFBO0FBRUEsSUFBQUUsS0FBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLGFBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxZQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssUUFBQSxHQUFBTCxtQkFBQTtBQUFtQyxTQUFBTSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVIsd0JBQUFRLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENB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T0FBTyxJQUFJSCxhQUFhLENBQUNJLFdBQVcsRUFBRTtRQUM3QyxJQUFJSixhQUFhLENBQUNJLFdBQVcsQ0FBQ3RKLGNBQWMsQ0FBQ3FKLE9BQU8sQ0FBQyxFQUFFO1VBQ3JERixHQUFHLEdBQUdBLEdBQUcsQ0FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNTLGFBQWEsQ0FBQ0ksV0FBVyxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlFO01BQ0Y7TUFDQSxPQUFPRixHQUFHO0lBQ1o7RUFBQztBQUFBLEVBbE5vQ0ksZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wZXJtYWxpbmsuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJtYWxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1BFUk1BTElOSztcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfUEVSTUFMSU5LO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBlcm1hbGluay1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJwZXJtYWxpbmtcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGluazogXCJcIlxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wZXJtYWxpbmstd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLXBlcm1hbGluay1oZWFkZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcIlBlcm1hbGlua1wifSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1wZXJtYWxpbmstY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcGVybWFsaW5rLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCIyXCIgaWQ9e1wicGVybWFsaW5rLXRleHRcIn0gdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkNPUFkgKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DT1BZX1RPX0NMSVBCT0FSRH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17XCIjcGVybWFsaW5rLXRleHRcIn0gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlJFRlJFU0ggKyAnICcgKyBjc3NDb25zdGFudHMuSUNPTn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5SRUZSRVNIfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2U3RhdGUub3BlbiAhPT0gdGhpcy5zdGF0ZS5vcGVuKSB8fCBwcmV2U3RhdGUubGluayAhPT0gdGhpcy5zdGF0ZS5saW5rKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTGlua0Zyb21DdXJyZW50U3RhdGUoe3RhcmdldDogdGhpcy50ZXh0ZmllbGR9KTtcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSBcIlBlcm1hbGlua1wiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIlBlcm1hbGlua1wiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiUGVybWFsaW5rXCIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVybWFsaW5rLXRleHRcIik7XG4gICAgbGV0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY3NzQ29uc3RhbnRzLkNPUFkgKyBcIi5cIiArIGNzc0NvbnN0YW50cy5JQ09OKTtcbiAgICB0cnkge1xuICAgICAgbmV3IENsaXBib2FyZEpTKGNvcHlCdXR0b24pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGNsaXBib2FyZCBzY3JpcHQgaXMgbm90IGxvYWRlZFxuICAgICAgY29uc29sZS53YXJuKCdQZXJtYWxpbmsgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgaW4gYmFja2VuZCBtb2RlLi4nKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICBqUXVlcnkoXCIuYzRnLXBlcm1hbGluay1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIGpRdWVyeShcIi5jNGctcGVybWFsaW5rLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5wb3B1cCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICBwcm94eSxcbiAgICAgIG1hcFZpZXcsXG4gICAgICBwYXJhbWV0ZXJzLFxuICAgICAgbGluayxcbiAgICAgIGNlbnRlcixcbiAgICAgIGJhc2VMYXllcklkeCxcbiAgICAgIGxheWVySWR4O1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5wYXJhbUNvdW50IHx8ICEob3B0aW9ucy5wYXJhbUNvdW50ID09PSA2IHx8IG9wdGlvbnMucGFyYW1Db3VudCA9PT0gMiB8fCBvcHRpb25zLnBhcmFtQ291bnQgPT09IDEpKSB7XG4gICAgICBvcHRpb25zLnBhcmFtQ291bnQgPSA2O1xuICAgIH1cblxuICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICBtYXBWaWV3ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgcHJveHkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICBjZW50ZXIgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgIGNlbnRlciA9IHRyYW5zZm9ybShbY2VudGVyWzBdLCBjZW50ZXJbMV1dLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMF0udG9GaXhlZCg2KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKCtjZW50ZXJbMV0udG9GaXhlZCg1KSk7XG4gICAgcGFyYW1ldGVycy5wdXNoKHBhcnNlSW50KG1hcFZpZXcuZ2V0Wm9vbSgpKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zYXZlSWRzKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goK21hcFZpZXcuZ2V0Um90YXRpb24oKS50b0ZpeGVkKDIpKTtcblxuICAgICAgLy8gZmluZCBhY3RpdmUgYmFzZWxheWVyXG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkKSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICAvLyBmaW5kIGFjdGl2ZSBsYXllcnNcbiAgICAgIGxldCBsYXllcnMgPSBbXTtcbiAgICAgIGNvbnN0IGFyckxheWVyU3RhdGVzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFyckxheWVyU3RhdGVzO1xuICAgICAgZm9yIChsZXQgbGF5ZXJJZCBpbiBhcnJMYXllclN0YXRlcykge1xuICAgICAgICBpZiAoYXJyTGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkobGF5ZXJJZCkpIHtcbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZXNbbGF5ZXJJZF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWx0YS1kZWNvZGUgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgbGF5ZXJcbiAgICAgIGlmIChsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBkbyBub3QgZGVsdGEgZW5jb2RlIHV1aWRzXG4gICAgICAgIGlmIChsYXllcnNbMF0uaW5kZXhPZihcIntcIikgPT09IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzID0gdXRpbHMuZGVsdGFFbmNvZGUobGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBsYXllcnMgPSBsYXllcnMuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXJzID0gbGF5ZXJzWzBdIHx8ICcwJztcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlcnMucHVzaChsYXllcnMpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5qb2luKCcvJyk7XG4gICAgLy8gYnVpbGQgbGlua1xuICAgIGxpbmsgPSB1dGlscy5zZXRVcmxQYXJhbShwYXJhbWV0ZXJzLCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wZXJtYWxpbmsuZ2V0UGFyYW1ldGVyKTtcblxuICAgIC8vIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIC8vICAgb3B0aW9ucy50YXJnZXQudmFsdWUgPSBsaW5rO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gbGluaztcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluazogbGlua30pO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtGcm9tQ3VycmVudFN0YXRlXG5cbiAgZ2VuZXJhdGVMaW5rKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoIXBhcmFtZXRlcnMgfHwgIShwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gNiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMiB8fCBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhbmQgcmV0dXJuIGxpbmtcbiAgICByZXR1cm4gdXRpbHMuc2V0VXJsUGFyYW0ocGFyYW1ldGVycy5qb2luKCcvJyksIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnBlcm1hbGluay5nZXRQYXJhbWV0ZXIpO1xuICB9IC8vIGVuZCBvZiBnZW5lcmF0ZUxpbmtcbiAgZ2V0QWN0aXZlTGF5ZXJJZHMgKGFyckxheWVyU3RhdGUpIHtcbiAgICBsZXQgaWRzID0gW107XG4gICAgaWYgKGFyckxheWVyU3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZHMucHVzaChhcnJMYXllclN0YXRlLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY2hpbGRJZCBpbiBhcnJMYXllclN0YXRlLmNoaWxkU3RhdGVzKSB7XG4gICAgICBpZiAoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICBpZHMgPSBpZHMuY29uY2F0KHRoaXMuZ2V0QWN0aXZlTGF5ZXJJZHMoYXJyTGF5ZXJTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWRzO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfcHJvaiIsIl9jNGdNYXBzVXRpbHMiLCJfYzRnTWFwc0kxOG4iLCJfY29udHJvbCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJQZXJtYWxpbmsiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfUEVSTUFMSU5LIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJzdGF0ZSIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJiaW5kIiwibGluayIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImNvbHMiLCJyb3dzIiwiaWQiLCJyZWFkT25seSIsImNzc0NvbnN0YW50cyIsIkNPUFkiLCJJQ09OIiwiQ09QWV9UT19DTElQQk9BUkQiLCJSRUZSRVNIIiwib25Nb3VzZVVwIiwiZ2VuZXJhdGVMaW5rRnJvbUN1cnJlbnRTdGF0ZSIsInRleHRmaWVsZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVtb3ZlQ2xhc3MiLCJPUEVOIiwiYWRkQ2xhc3MiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwidGV4dEZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNvcHlCdXR0b24iLCJDbGlwYm9hcmRKUyIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJ0b2dnbGUiLCJwb3B1cCIsImhhc0NsYXNzIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwicHJveHkiLCJtYXBWaWV3IiwicGFyYW1ldGVycyIsImNlbnRlciIsImJhc2VMYXllcklkeCIsImxheWVySWR4IiwicGFyYW1Db3VudCIsIm1hcCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwdXNoIiwidG9GaXhlZCIsInBhcnNlSW50IiwiZ2V0Wm9vbSIsInNhdmVJZHMiLCJnZXRSb3RhdGlvbiIsImFjdGl2ZUJhc2VsYXllcklkIiwibGF5ZXJzIiwiYXJyTGF5ZXJTdGF0ZXMiLCJsYXllcklkIiwiY29uY2F0IiwiZ2V0QWN0aXZlTGF5ZXJJZHMiLCJsZW5ndGgiLCJpbmRleE9mIiwiZGVsdGFFbmNvZGUiLCJqb2luIiwic2V0VXJsUGFyYW0iLCJwZXJtYWxpbmsiLCJnZXRQYXJhbWV0ZXIiLCJnZW5lcmF0ZUxpbmsiLCJhcnJMYXllclN0YXRlIiwiaWRzIiwiYWN0aXZlIiwiY2hpbGRJZCIsImNoaWxkU3RhdGVzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==