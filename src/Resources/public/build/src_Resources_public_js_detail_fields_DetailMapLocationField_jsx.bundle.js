"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailMapLocationField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailMapLocationField.jsx":
/*!**************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailMapLocationField.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var MapController = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-MapsBundle_node_modules_proj4_lib_index_js-MapsBundle_node_modules_react-dom_index_js-7d41dc"), __webpack_require__.e("MapsBundle_src_Resources_public_js_components_c4g-maps_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../../../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx"));
});
var DetailMapLocationField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailMapLocationField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DetailMapLocationField);
    _this = _callSuper(this, DetailMapLocationField, [props]);
    _this.state = {
      initial: true,
      showMap: false
    };
    _this.myRef = /*#__PURE__*/_react["default"].createRef();
    _this.mapData = _this.props.field.asyncMapData ? null : _this.props.detail.props.component.mapData;
    return _this;
  }
  (0, _inherits2["default"])(DetailMapLocationField, _Component);
  return (0, _createClass2["default"])(DetailMapLocationField, [{
    key: "render",
    value: function render() {
      var map = null;
      var mapData = this.mapData;
      if (mapData !== null) {
        mapData.mapDiv = "c4g_map";
        var geoxField = this.props.field.geoxField;
        var geoyField = this.props.field.geoyField;
        if (!this.state.initial) {
          var geox = this.props.data[geoxField];
          var geoy = this.props.data[geoyField];
          if (this.state.showMap) {
            map = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
              fallback: /*#__PURE__*/_react["default"].createElement("div", null, "loading...")
            }, /*#__PURE__*/_react["default"].createElement(MapController, {
              mapData: mapData
            }));
          }
          var anotherHookFunction = function anotherHookFunction(layerController) {
            var map = layerController.mapController.map;
            setTimeout(function () {
              map.updateSize();
              map.render();
            }, 1000);
          };
          window.c4gMapsHooks = window.c4gMapsHooks || {};
          window.c4gMapsHooks.hook_layer = window.c4gMapsHooks.hook_layer || [];
          window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
          window.c4gMapsHooks.layer_loaded.push(anotherHookFunction);
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-map" + (this.props.field["class"] ? " " + this.props.field["class"] : ""),
        ref: this.myRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "c4g_map_" + (mapData !== null ? mapData.mapId : 0),
        className: "c4g_map"
      }), map);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.state.initial) {
        if (this.props.field.asyncMapData) {
          fetch(this.props.field.asyncMapDataUrl).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this2.mapData = data;
            _this2.setState({
              initial: false
            });
          });
        } else {
          this.setState({
            initial: false
          });
        }
      }
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            _this2.observer.unobserve(_this2.myRef.current);
            _this2.setState({
              showMap: true
            });
          }
        });
      });
      this.observer.observe(this.myRef.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.unobserve(this.myRef.current);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxNYXBMb2NhdGlvbkZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxTQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQWlDLFNBQUFHLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTCx3QkFBQUssQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdB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SSxDQUFDTSxRQUFRLENBQUM7Y0FDWjVDLE9BQU8sRUFBRTtZQUNYLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDNkMsUUFBUSxDQUFDUSxPQUFPLENBQUMsSUFBSSxDQUFDcEQsS0FBSyxDQUFDbUQsT0FBTyxDQUFDO0lBQzNDO0VBQUM7SUFBQTFDLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUEyQyxvQkFBb0JBLENBQUEsRUFBRztNQUNyQixJQUFJLENBQUNULFFBQVEsQ0FBQ00sU0FBUyxDQUFDLElBQUksQ0FBQ2xELEtBQUssQ0FBQ21ELE9BQU8sQ0FBQztJQUM3QztFQUFDO0FBQUEsRUE1RWlERyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2RldGFpbC9maWVsZHMvRGV0YWlsTWFwTG9jYXRpb25GaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNvbnN0IE1hcENvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWFwcy5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxNYXBMb2NhdGlvbkZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICBzaG93TWFwOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5teVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMubWFwRGF0YSA9IHRoaXMucHJvcHMuZmllbGQuYXN5bmNNYXBEYXRhID8gbnVsbCA6IHRoaXMucHJvcHMuZGV0YWlsLnByb3BzLmNvbXBvbmVudC5tYXBEYXRhO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1hcCA9IG51bGw7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLm1hcERhdGE7XG4gICAgaWYgKG1hcERhdGEgIT09IG51bGwpIHtcbiAgICAgIG1hcERhdGEubWFwRGl2ID0gXCJjNGdfbWFwXCI7XG4gICAgICBsZXQgZ2VveEZpZWxkID0gdGhpcy5wcm9wcy5maWVsZC5nZW94RmllbGQ7XG4gICAgICBsZXQgZ2VveUZpZWxkID0gdGhpcy5wcm9wcy5maWVsZC5nZW95RmllbGQ7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdGlhbCkge1xuICAgICAgICBsZXQgZ2VveCA9IHRoaXMucHJvcHMuZGF0YVtnZW94RmllbGRdO1xuICAgICAgICBsZXQgZ2VveSA9IHRoaXMucHJvcHMuZGF0YVtnZW95RmllbGRdO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dNYXApIHtcbiAgICAgICAgICBtYXAgPSA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+bG9hZGluZy4uLjwvZGl2Pn0+PE1hcENvbnRyb2xsZXIgbWFwRGF0YT17bWFwRGF0YX0vPjwvU3VzcGVuc2U+O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFub3RoZXJIb29rRnVuY3Rpb24gPSBmdW5jdGlvbihsYXllckNvbnRyb2xsZXIpIHtcbiAgICAgICAgICBsZXQgbWFwID0gbGF5ZXJDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtYXAudXBkYXRlU2l6ZSgpO1xuICAgICAgICAgICAgbWFwLnJlbmRlcigpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzID0gd2luZG93LmM0Z01hcHNIb29rcyB8fCB7fTtcbiAgICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX2xheWVyID0gd2luZG93LmM0Z01hcHNIb29rcy5ob29rX2xheWVyIHx8IFtdO1xuICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKGFub3RoZXJIb29rRnVuY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtZmllbGQtbWFwXCIgKyAodGhpcy5wcm9wcy5maWVsZC5jbGFzcyA/IFwiIFwiICsgdGhpcy5wcm9wcy5maWVsZC5jbGFzcyA6IFwiXCIpfSByZWY9e3RoaXMubXlSZWZ9PlxuICAgICAgICA8ZGl2IGlkPXtcImM0Z19tYXBfXCIgKyAobWFwRGF0YSAhPT0gbnVsbCA/IG1hcERhdGEubWFwSWQgOiAwKX0gY2xhc3NOYW1lPXtcImM0Z19tYXBcIn0+PC9kaXY+XG4gICAgICAgIHttYXB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuYXN5bmNNYXBEYXRhKSB7XG4gICAgICAgIGZldGNoKHRoaXMucHJvcHMuZmllbGQuYXN5bmNNYXBEYXRhVXJsKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFwRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbml0aWFsOiBmYWxzZX0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5pdGlhbDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLm15UmVmLmN1cnJlbnQpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd01hcDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5teVJlZi5jdXJyZW50KTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLm15UmVmLmN1cnJlbnQpO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0RG9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiTWFwQ29udHJvbGxlciIsIlJlYWN0IiwibGF6eSIsIkRldGFpbE1hcExvY2F0aW9uRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic3RhdGUiLCJpbml0aWFsIiwic2hvd01hcCIsIm15UmVmIiwiY3JlYXRlUmVmIiwibWFwRGF0YSIsImZpZWxkIiwiYXN5bmNNYXBEYXRhIiwiZGV0YWlsIiwiY29tcG9uZW50IiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIm1hcCIsIm1hcERpdiIsImdlb3hGaWVsZCIsImdlb3lGaWVsZCIsImdlb3giLCJkYXRhIiwiZ2VveSIsImNyZWF0ZUVsZW1lbnQiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiYW5vdGhlckhvb2tGdW5jdGlvbiIsImxheWVyQ29udHJvbGxlciIsIm1hcENvbnRyb2xsZXIiLCJzZXRUaW1lb3V0IiwidXBkYXRlU2l6ZSIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsImhvb2tfbGF5ZXIiLCJsYXllcl9sb2FkZWQiLCJwdXNoIiwiY2xhc3NOYW1lIiwicmVmIiwiaWQiLCJtYXBJZCIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwiZmV0Y2giLCJhc3luY01hcERhdGFVcmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiY3VycmVudCIsIm9ic2VydmUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=