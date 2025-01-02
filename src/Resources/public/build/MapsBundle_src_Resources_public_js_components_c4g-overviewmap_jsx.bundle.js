"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-overviewmap_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-overviewmap.jsx":
/*!****************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-overviewmap.jsx ***!
  \****************************************************************************/
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
var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "../MapsBundle/src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _Group = _interopRequireDefault(__webpack_require__(/*! ol/layer/Group */ "../MapsBundle/node_modules/ol/layer/Group.js"));
var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "../MapsBundle/node_modules/ol/layer/Tile.js"));
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
var OverviewMap = exports["default"] = /*#__PURE__*/function (_Component) {
  function OverviewMap(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, OverviewMap);
    _this = _callSuper(this, OverviewMap, [props]);
    var element, trigger, triggerIcon;
    var scope = _this;
    _this.state = {
      open: !props.collapsed
    };
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.mapController = props.mapController;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.layer = new _Tile["default"]();
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OVERVIEWMAP + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + _c4gMapsConstant.cssConstants.CLOSE;
    } else {
      element.className += ' ' + _c4gMapsConstant.cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_OVERVIEWMAP;
      trigger.appendChild(span);
    } else {
      trigger.title = _this.langConstants.CTRL_OVERVIEWMAP;
    }
    element.appendChild(trigger);

    // triggerIcon = document.createElement('span');
    // triggerIcon.className = cssConstants.ICON;
    // trigger.appendChild(triggerIcon);

    jQuery(trigger).click(function () {
      if (!scope.state.open) {
        scope.open();
      } else {
        scope.close();
      }
    });
    _this.element = element;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    _this.baseLayerIds = [];
    var index = _this.mapController.arrComponents.findIndex(function (element) {
      return element.name === "overview";
    });
    _this.mapController.arrComponents[index].control = control;
    _this.mapController.mapsControls.controls.overviewMap = control;
    return _this;
  }
  (0, _inherits2["default"])(OverviewMap, _Component);
  return (0, _createClass2["default"])(OverviewMap, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "overview-map-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-overwiev-header",
        headerClass: "c4g-overview-headline",
        header: this.langConstants.OVERVIEWMAP,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "overview-map-target",
        className: "c4g-overview-content"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createOverviewMap();
    }
  }, {
    key: "createOverviewMap",
    value: function createOverviewMap() {
      var ovmTarget = document.querySelector("#overview-map-target");
      this.ovm = new _control.OverviewMap({
        collapsed: this.props.collapsed || true,
        collapsible: false,
        rotateWithView: true,
        className: 'ol-overviewmap ol-custom-overviewmap',
        target: ovmTarget,
        layers: [this.layer]
      });
      this.ovm.setMap(this.props.mapController.map);
    }
  }, {
    key: "removeFromMap",
    value: function removeFromMap() {
      this.element.parentNode.removeChild(this.element);
    }
  }, {
    key: "getOverviewMap",
    value: function getOverviewMap() {
      return this.ovm;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
        return true;
      } else {
        return false;
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
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.state.open && prevState.open) {
        jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      } else if (this.state.open) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      }
      if (prevProps.source !== this.props.source) {
        this.layer.setSource(this.props.source);
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1vdmVydmlld21hcF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsWUFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUwsbUJBQUE7QUFDQSxJQUFBTSxLQUFBLEdBQUFELHNCQUFBLENBQUFMLG1CQUFBO0FBQXNDLFNBQUFPLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBVCx3QkFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFB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O1FBQ2hGUSxNQUFNLENBQUMsSUFBSSxDQUFDbEMsS0FBSyxDQUFDK0QsU0FBUyxDQUFDLENBQUNzQixXQUFXLENBQUNoRSw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzJELFFBQVEsQ0FBQy9ELDZCQUFZLENBQUNLLElBQUksQ0FBQztNQUMxRjtNQUNBLElBQUl1RCxTQUFTLENBQUNLLE1BQU0sS0FBSyxJQUFJLENBQUN0RixLQUFLLENBQUNzRixNQUFNLEVBQUU7UUFDMUMsSUFBSSxDQUFDdEUsS0FBSyxDQUFDdUUsU0FBUyxDQUFDLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQ3NGLE1BQU0sQ0FBQztNQUN6QztJQUNGO0VBQUM7QUFBQSxFQWhJc0NFLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctb3ZlcnZpZXdtYXAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gXCJvbC9sYXllci9UaWxlXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxheWVyID0gbmV3IFRpbGVMYXllcigpO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfT1ZFUlZJRVdNQVA7XG4gICAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyaWdnZXIudGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUDtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0cmlnZ2VyKTtcblxuICAgIC8vIHRyaWdnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vIHRyaWdnZXJJY29uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OO1xuICAgIC8vIHRyaWdnZXIuYXBwZW5kQ2hpbGQodHJpZ2dlckljb24pO1xuXG4gICAgalF1ZXJ5KHRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIHRoaXMuYmFzZUxheWVySWRzID0gW107XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcIm92ZXJ2aWV3XCIpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm92ZXJ2aWV3TWFwID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW92ZXJ3aWV2LWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctb3ZlcnZpZXctaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk9WRVJWSUVXTUFQfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxkaXYgaWQ9e1wib3ZlcnZpZXctbWFwLXRhcmdldFwifSBjbGFzc05hbWU9e1wiYzRnLW92ZXJ2aWV3LWNvbnRlbnRcIn0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY3JlYXRlT3ZlcnZpZXdNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZU92ZXJ2aWV3TWFwKCkge1xuICAgIGxldCBvdm1UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJ2aWV3LW1hcC10YXJnZXRcIik7XG4gICAgdGhpcy5vdm0gPSBuZXcgT3ZNYXAoe1xuICAgICAgY29sbGFwc2VkOiB0aGlzLnByb3BzLmNvbGxhcHNlZCB8fCB0cnVlLFxuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgcm90YXRlV2l0aFZpZXc6IHRydWUsXG4gICAgICBjbGFzc05hbWU6ICdvbC1vdmVydmlld21hcCBvbC1jdXN0b20tb3ZlcnZpZXdtYXAnLFxuICAgICAgdGFyZ2V0OiBvdm1UYXJnZXQsXG4gICAgICBsYXllcnM6IFt0aGlzLmxheWVyXVxuICAgIH0pO1xuICAgIHRoaXMub3ZtLnNldE1hcCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21NYXAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldE92ZXJ2aWV3TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm92bTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuICYmIHByZXZTdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5zb3VyY2UgIT09IHRoaXMucHJvcHMuc291cmNlKSB7XG4gICAgICB0aGlzLmxheWVyLnNldFNvdXJjZSh0aGlzLnByb3BzLnNvdXJjZSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9Hcm91cCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfVGlsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJPdmVydmlld01hcCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImJpbmQiLCJjbG9zZSIsImxheWVyIiwiVGlsZUxheWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT1ZFUlZJRVdNQVAiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwiQ0xPU0UiLCJPUEVOIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX09WRVJWSUVXTUFQIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImpRdWVyeSIsImNsaWNrIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJiYXNlTGF5ZXJJZHMiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJvdmVydmlld01hcCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJpZCIsImNvbXBvbmVudERpZE1vdW50IiwiY3JlYXRlT3ZlcnZpZXdNYXAiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3IiwibGF5ZXJzIiwic2V0TWFwIiwibWFwIiwicmVtb3ZlRnJvbU1hcCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldE92ZXJ2aWV3TWFwIiwiaXNPcGVuIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzb3VyY2UiLCJzZXRTb3VyY2UiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9