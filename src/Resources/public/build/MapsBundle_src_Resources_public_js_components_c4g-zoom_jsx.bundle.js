"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-zoom_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-zoom.jsx":
/*!*********************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-zoom.jsx ***!
  \*********************************************************************/
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
var Zoom = exports["default"] = /*#__PURE__*/function (_Component) {
  function Zoom(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Zoom);
    _this = _callSuper(this, Zoom, [props]);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var control = new _control.Zoom({
      zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
      zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
      zoomInLabel: " ",
      zoomOutLabel: " ",
      target: _this.props.target
    });
    if (control && control.element && control.element.children) {
      if (control.element.children[0]) {
        var button = control.element.children[0];
        if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
          var span = document.createElement('span');
          button.title = "";
          span.innerText = langConstants.CTRL_ZOOM_IN;
          button.appendChild(span);
        } else {
          button.title = langConstants.CTRL_ZOOM_IN;
        }
      }
      if (control.element.children[1]) {
        var _button = control.element.children[1];
        if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
          var _span = document.createElement('span');
          _button.title = "";
          _span.innerText = langConstants.CTRL_ZOOM_OUT;
          _button.appendChild(_span);
        } else {
          _button.title = langConstants.CTRL_ZOOM_OUT;
        }
      }
    }
    var mapController = props.mapController;
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "zoom";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoom = control;
    return _this;
  }
  (0, _inherits2["default"])(Zoom, _Component);
  return (0, _createClass2["default"])(Zoom, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy16b29tX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsZ0JBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILG1CQUFBO0FBQTZDLFNBQUFJLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTix3QkFBQU0sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtB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QUM7UUFDeEMsSUFBSWpCLEtBQUssQ0FBQ0ssYUFBYSxDQUFDQyxJQUFJLENBQUNhLFNBQVMsSUFBSW5CLEtBQUssQ0FBQ0ssYUFBYSxDQUFDQyxJQUFJLENBQUNhLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFO1VBQzFGLElBQUlDLEtBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO1VBQ3pDTCxPQUFNLENBQUNNLEtBQUssR0FBRyxFQUFFO1VBQ2pCSCxLQUFJLENBQUNJLFNBQVMsR0FBR3RCLGFBQWEsQ0FBQ1MsYUFBYTtVQUM1Q00sT0FBTSxDQUFDUSxXQUFXLENBQUNMLEtBQUksQ0FBQztRQUMxQixDQUFDLE1BQ0k7VUFDSEgsT0FBTSxDQUFDTSxLQUFLLEdBQUdyQixhQUFhLENBQUNTLGFBQWE7UUFDNUM7TUFDRjtJQUNGO0lBQ0EsSUFBSVAsYUFBYSxHQUFHTCxLQUFLLENBQUNLLGFBQWE7SUFDdkMsSUFBSXNCLEtBQUssR0FBR3RCLGFBQWEsQ0FBQ3VCLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDLFVBQUFiLE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUNjLElBQUksS0FBSyxNQUFNO0lBQUEsRUFBQztJQUNyRnpCLGFBQWEsQ0FBQ3VCLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDLENBQUNwQixPQUFPLEdBQUdBLE9BQU87SUFDcERGLGFBQWEsQ0FBQzBCLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcxQixPQUFPO0lBQUMsT0FBQU4sS0FBQTtFQUNyRDtFQUFDLElBQUFpQyxVQUFBLGFBQUFyQyxJQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBb0MsYUFBQSxhQUFBdEMsSUFBQTtJQUFBdUMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBL0MrQkMsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1pvb20gYXMgT2xab29tfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBPbFpvb20oe1xuICAgICAgem9vbUluVGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0lOLFxuICAgICAgem9vbU91dFRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9PVVQsXG4gICAgICB6b29tSW5MYWJlbDogXCIgXCIsXG4gICAgICB6b29tT3V0TGFiZWw6IFwiIFwiLFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuZWxlbWVudCAmJiBjb250cm9sLmVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgIGlmIChjb250cm9sLmVsZW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGNvbnRyb2wuZWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgYnV0dG9uLnRpdGxlID0gXCJcIjtcbiAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX0lOO1xuICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9JTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbnRyb2wuZWxlbWVudC5jaGlsZHJlblsxXSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gY29udHJvbC5lbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBidXR0b24udGl0bGUgPSBcIlwiO1xuICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fT1VUO1xuICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBidXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9PVVQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiem9vbVwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb20gPSBjb250cm9sO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnRyb2wiLCJfYzRnTWFwc0NvbnN0YW50IiwiX2M0Z01hcHNJMThuIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJab29tIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY29udHJvbCIsIk9sWm9vbSIsInpvb21JblRpcExhYmVsIiwiQ1RSTF9aT09NX0lOIiwiem9vbU91dFRpcExhYmVsIiwiQ1RSTF9aT09NX09VVCIsInpvb21JbkxhYmVsIiwiem9vbU91dExhYmVsIiwidGFyZ2V0IiwiZWxlbWVudCIsImNoaWxkcmVuIiwiYnV0dG9uIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiem9vbSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9