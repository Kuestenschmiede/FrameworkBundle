"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-zoom-position_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-zoom-position.jsx":
/*!******************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-zoom-position.jsx ***!
  \******************************************************************************/
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
var ZoomPosition = exports["default"] = /*#__PURE__*/function (_Component) {
  function ZoomPosition(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ZoomPosition);
    _this = _callSuper(this, ZoomPosition, [props]);
    var scope = _this;
    var element, button;
    var mapController = props.mapController;
    var view = mapController.map.getView();
    var mapData = mapController.data;
    var langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      var funcLocation = function funcLocation(evt) {
        var pos = scope.props.mapController.geolocation.getPosition();
        if (pos) {
          view.setCenter(pos);
          view.setZoom(18);
          mapController.map.setView(view);
        }
      };
      scope.props.mapController.geolocation.once('change', funcLocation);
      if (scope.props.mapController.geolocation.getTracking()) {
        scope.props.mapController.geolocation.dispatchEvent('change');
      } else {
        scope.props.mapController.geolocation.setTracking(true);
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OL_ZOOM_POS + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;

    // button
    button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = langConstants.CTRL_ZOOM_POS;
      button.appendChild(span);
    } else {
      button.title = langConstants.CTRL_ZOOM_POS;
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
      return element.name === "zoomPosition";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.zoomPosition = control;
    return _this;
  }
  (0, _inherits2["default"])(ZoomPosition, _Component);
  return (0, _createClass2["default"])(ZoomPosition, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy16b29tLXBvc2l0aW9uX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsZ0JBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxZQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksR0FBQSxHQUFBSixtQkFBQTtBQUErQixTQUFBSyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVAsd0JBQUFPLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFB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QUFJQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQU8sQ0FBQztNQUN4QjVDLE9BQU8sRUFBRUEsT0FBTztNQUNoQjZDLE1BQU0sRUFBRWhELEtBQUEsQ0FBS0QsS0FBSyxDQUFDaUQ7SUFDckIsQ0FBQyxDQUFDO0lBQ0YsSUFBSUMsS0FBSyxHQUFHNUMsYUFBYSxDQUFDNkMsYUFBYSxDQUFDQyxTQUFTLENBQUMsVUFBQWhELE9BQU87TUFBQSxPQUFJQSxPQUFPLENBQUNpRCxJQUFJLEtBQUssY0FBYztJQUFBLEVBQUM7SUFDN0YvQyxhQUFhLENBQUM2QyxhQUFhLENBQUNELEtBQUssQ0FBQyxDQUFDSCxPQUFPLEdBQUdBLE9BQU87SUFDcER6QyxhQUFhLENBQUNnRCxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsWUFBWSxHQUFHVCxPQUFPO0lBQUMsT0FBQTlDLEtBQUE7RUFDN0Q7RUFBQyxJQUFBd0QsVUFBQSxhQUFBNUQsWUFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQTJELGFBQUEsYUFBQTdELFlBQUE7SUFBQThELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU8sSUFBSTtJQUNiO0VBQUM7QUFBQSxFQW5FdUNDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctem9vbS1wb3NpdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVBvc2l0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICBidXR0b247XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IHZpZXcgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShtYXBEYXRhKTtcblxuICAgIGxldCB0b2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gbG9vc2UgZm9jdXMsIG90aGVyd2lzZSBpdCBsb29rcyBtZXNzeVxuICAgICAgdGhpcy5ibHVyKCk7XG5cbiAgICAgIGxldCBmdW5jTG9jYXRpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGxldCBwb3MgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKClcbiAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgIHZpZXcuc2V0Q2VudGVyKHBvcyk7XG4gICAgICAgICAgdmlldy5zZXRab29tKDE4KTtcbiAgICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5zZXRWaWV3KHZpZXcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLm9uY2UoJ2NoYW5nZScsIGZ1bmNMb2NhdGlvbik7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRUcmFja2luZygpKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZGlzcGF0Y2hFdmVudCgnY2hhbmdlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gd3JhcHBlciBkaXZcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT0xfWk9PTV9QT1MgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAvLyBidXR0b25cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9QT1M7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fUE9TO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAvLyBzZXQgb25DbGljayB0byB0aGUgdG9nZ2xlLWZ1bmN0aW9uXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCB7dXNlQ2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWV9KTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwge3VzZUNhcHR1cmU6IGZhbHNlLCBwYXNzaXZlOiB0cnVlfSk7XG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInpvb21Qb3NpdGlvblwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21Qb3NpdGlvbiA9IGNvbnRyb2w7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlpvb21Qb3NpdGlvbiIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJidXR0b24iLCJtYXBDb250cm9sbGVyIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJtYXBEYXRhIiwiZGF0YSIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImZ1bmNMb2NhdGlvbiIsImV2dCIsInBvcyIsImdlb2xvY2F0aW9uIiwiZ2V0UG9zaXRpb24iLCJzZXRDZW50ZXIiLCJzZXRab29tIiwic2V0VmlldyIsIm9uY2UiLCJnZXRUcmFja2luZyIsImRpc3BhdGNoRXZlbnQiLCJzZXRUcmFja2luZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNzc0NvbnN0YW50cyIsIk9MX1pPT01fUE9TIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9aT09NX1BPUyIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInpvb21Qb3NpdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9