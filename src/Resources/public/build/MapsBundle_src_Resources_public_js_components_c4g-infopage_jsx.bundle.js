"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-infopage_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-infopage.jsx":
/*!*************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-infopage.jsx ***!
  \*************************************************************************/
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
var Infopage = exports["default"] = /*#__PURE__*/function (_Component) {
  function Infopage(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Infopage);
    _this = _callSuper(this, Infopage, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_INFOAREA;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_INFOAREA;
    }
    element.className = "c4g-infopage-control ol-unselectable ol-control ";
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
      return element.name === "legend";
    });
    if (index && mapController.arrComponents[index]) {
      mapController.arrComponents[index].control = control;
      mapController.mapsControls.controls.infoPage = control;
    } else {
      mapController.map.addControl(control);
    }
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.state = {
      open: props.open || false,
      control: control
    };
    return _this;
  }
  (0, _inherits2["default"])(Infopage, _Component);
  return (0, _createClass2["default"])(Infopage, [{
    key: "render",
    value: function render() {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-infopage-header",
        headerClass: "c4g-infopage-headline",
        header: this.langConstants.INFOPAGE,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-content",
        dangerouslySetInnerHTML: {
          __html: this.props.infoContent
        }
      }));
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
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Infopage" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Infopage" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Infopage");
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1pbmZvcGFnZV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBRUEsSUFBQUMsWUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLFFBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxhQUFBLEdBQUFILG1CQUFBO0FBQXdDLFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTix3QkFBQU0sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFB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LENBQUM7UUFDL0IsQ0FBQyxNQUNJLElBQUlILFFBQVEsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDMUMsS0FBSyxDQUFDTCxJQUFJLEVBQUU7VUFDbkRnRCxtQkFBSyxDQUFDRSxVQUFVLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN2QztNQUNGO0lBQ0Y7RUFBQztBQUFBLEVBaEdtQ0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1pbmZvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9wYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0lORk9BUkVBO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0lORk9BUkVBO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctaW5mb3BhZ2UtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxlZ2VuZFwiKTtcbiAgICBpZiAoaW5kZXggJiYgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmluZm9QYWdlID0gY29udHJvbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY29udHJvbDogY29udHJvbFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWluZm9wYWdlLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWluZm9wYWdlLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWluZm9wYWdlLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1pbmZvcGFnZS1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWluZm9wYWdlLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLklORk9QQUdFfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1pbmZvcGFnZS1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLmluZm9Db250ZW50fX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiSW5mb3BhZ2VcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJJbmZvcGFnZVwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiSW5mb3BhZ2VcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwc0kxOG4iLCJfY29udHJvbCIsIl9jNGdNYXBzVXRpbHMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiSW5mb3BhZ2UiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfSU5GT0FSRUEiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImluZm9QYWdlIiwibWFwIiwiYWRkQ29udHJvbCIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsIklORk9QQUdFIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImluZm9Db250ZW50Iiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=