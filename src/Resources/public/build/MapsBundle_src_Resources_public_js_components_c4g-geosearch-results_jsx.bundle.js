"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-geosearch-results_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-geosearch-results.jsx":
/*!**********************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-geosearch-results.jsx ***!
  \**********************************************************************************/
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
var GeoSearchResults = exports["default"] = /*#__PURE__*/function (_Component) {
  function GeoSearchResults(props) {
    (0, _classCallCheck2["default"])(this, GeoSearchResults);
    return _callSuper(this, GeoSearchResults, [props]);
  }
  (0, _inherits2["default"])(GeoSearchResults, _Component);
  return (0, _createClass2["default"])(GeoSearchResults, [{
    key: "render",
    value: function render() {
      var scope = this;
      var resultContainer = "";
      var firstResult = "";
      var detailBtnClass = "";
      var detailBtnCb = "";
      var closeBtnClass = "c4g-titlebar-close";
      var closeBtnCb = this.props.closeCb;
      resultContainer = /*#__PURE__*/_react["default"].createElement("ul", {
        id: "resultcontainer"
      }, this.props.results.map(function (element, index) {
        var buttonClass = "searchResultButton";
        if (element === scope.props.currentResult) {
          buttonClass += " c4g-active";
        }
        var func = element.href ? function () {
          window.open(element.href);
        } : function () {
          scope.props.zoomFunc(index);
        };
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          id: index,
          className: buttonClass,
          name: element.display_name,
          onMouseUp: function onMouseUp() {
            return func();
          }
        }, element.display_name));
      }));
      if (this.props.extDiv && document.querySelector("." + this.props.extDiv)) {
        var extDiv = document.querySelector("." + this.props.extDiv);
        return /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content c4g-external " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer)), extDiv);
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1nZW9zZWFyY2gtcmVzdWx0c19qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsU0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUFpQyxTQUFBRyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUwsd0JBQUFLLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQVhqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWFxQjRCLGdCQUFnQixHQUFBQyxrQkFBQSwwQkFBQUMsVUFBQTtFQUNuQyxTQUFBRixpQkFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFKLGdCQUFBO0lBQUEsT0FBQVosVUFBQSxPQUFBWSxnQkFBQSxHQUNYRyxLQUFLO0VBRWI7RUFBQyxJQUFBRSxVQUFBLGFBQUFMLGdCQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBSSxhQUFBLGFBQUFOLGdCQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUlDLGVBQWUsR0FBRyxFQUFFO01BQ3hCLElBQUlDLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUlDLGNBQWMsR0FBRyxFQUFFO01BQ3ZCLElBQUlDLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUlDLGFBQWEsR0FBRyxvQkFBb0I7TUFDeEMsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxPQUFPO01BRW5DTixlQUFlLGdCQUFHaEQsTUFBQSxZQUFBdUQsYUFBQTtRQUFJQyxFQUFFLEVBQUU7TUFBa0IsR0FDekMsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBU0MsT0FBTyxFQUFFQyxLQUFLLEVBQUU7UUFDL0MsSUFBSUMsV0FBVyxHQUFHLG9CQUFvQjtRQUN0QyxJQUFJRixPQUFPLEtBQUtaLEtBQUssQ0FBQ1AsS0FBSyxDQUFDc0IsYUFBYSxFQUFFO1VBQ3pDRCxXQUFXLElBQUksYUFBYTtRQUM5QjtRQUNBLElBQUlFLElBQUksR0FBR0osT0FBTyxDQUFDSyxJQUFJLEdBQUcsWUFBTTtVQUM5QkMsTUFBTSxDQUFDQyxJQUFJLENBQUNQLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO1FBQzNCLENBQUMsR0FBRyxZQUFNO1VBQ1JqQixLQUFLLENBQUNQLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFDRCxvQkFBUTVELE1BQUEsWUFBQXVELGFBQUE7VUFBSVgsR0FBRyxFQUFFZ0I7UUFBTSxnQkFBQzVELE1BQUEsWUFBQXVELGFBQUE7VUFBUVgsR0FBRyxFQUFFZ0IsS0FBTTtVQUFDSixFQUFFLEVBQUVJLEtBQU07VUFBQ1EsU0FBUyxFQUFFUCxXQUFZO1VBQUNRLElBQUksRUFBRVYsT0FBTyxDQUFDVyxZQUFhO1VBQUNDLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBO1lBQUEsT0FBUVIsSUFBSSxDQUFDLENBQUM7VUFBQTtRQUFDLEdBQUVKLE9BQU8sQ0FBQ1csWUFBcUIsQ0FBSyxDQUFDO01BQzFLLENBQUMsQ0FDQyxDQUFDO01BRUwsSUFBSSxJQUFJLENBQUM5QixLQUFLLENBQUNnQyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUNsQyxLQUFLLENBQUNnQyxNQUFNLENBQUMsRUFBRTtRQUN4RSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUNsQyxLQUFLLENBQUNnQyxNQUFNLENBQUM7UUFDNUQsb0JBQU9HLG9CQUFRLENBQUNDLFlBQVksY0FFeEI1RSxNQUFBLFlBQUF1RCxhQUFBO1VBQUthLFNBQVMsRUFBRSw2Q0FBNkMsR0FBRyxJQUFJLENBQUM1QixLQUFLLENBQUM0QixTQUFTLEdBQUc7UUFBYSxnQkFHbEdwRSxNQUFBLFlBQUF1RCxhQUFBO1VBQUthLFNBQVMsRUFBRTtRQUFvQixHQUNqQ3BCLGVBQ0UsQ0FDRixDQUFDLEVBRVJ3QixNQUNGLENBQUM7TUFDSCxDQUFDLE1BQU07UUFDTCxvQkFDRXhFLE1BQUEsWUFBQXVELGFBQUE7VUFBS2EsU0FBUyxFQUFFLGdDQUFnQyxHQUFHLElBQUksQ0FBQzVCLEtBQUssQ0FBQzRCLFNBQVMsR0FBRztRQUFhLGdCQUdyRnBFLE1BQUEsWUFBQXVELGFBQUE7VUFBS2EsU0FBUyxFQUFFO1FBQW9CLEdBQ2pDcEIsZUFDRSxDQUNGLENBQUM7TUFFVjtJQUVGO0VBQUM7QUFBQSxFQXhEMkM2QixnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb1NlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgcmVzdWx0Q29udGFpbmVyID0gXCJcIjtcbiAgICBsZXQgZmlyc3RSZXN1bHQgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DbGFzcyA9IFwiYzRnLXRpdGxlYmFyLWNsb3NlXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2IgPSB0aGlzLnByb3BzLmNsb3NlQ2I7XG5cbiAgICByZXN1bHRDb250YWluZXIgPSA8dWwgaWQ9e1wicmVzdWx0Y29udGFpbmVyXCJ9PlxuICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzID0gXCJzZWFyY2hSZXN1bHRCdXR0b25cIjtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHNjb3BlLnByb3BzLmN1cnJlbnRSZXN1bHQpIHtcbiAgICAgICAgICBidXR0b25DbGFzcyArPSBcIiBjNGctYWN0aXZlXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZ1bmMgPSBlbGVtZW50LmhyZWYgPyAoKSA9PiB7XG4gICAgICAgICAgd2luZG93Lm9wZW4oZWxlbWVudC5ocmVmKVxuICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnpvb21GdW5jKGluZGV4KVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fT48YnV0dG9uIGtleT17aW5kZXh9IGlkPXtpbmRleH0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gbmFtZT17ZWxlbWVudC5kaXNwbGF5X25hbWV9IG9uTW91c2VVcD17KCkgPT4gZnVuYygpfT57ZWxlbWVudC5kaXNwbGF5X25hbWV9PC9idXR0b24+PC9saT4pXG4gICAgICB9KX1cbiAgICA8L3VsPjtcblxuICAgIGlmICh0aGlzLnByb3BzLmV4dERpdiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5wcm9wcy5leHREaXYpKSB7XG4gICAgICBsZXQgZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMucHJvcHMuZXh0RGl2KTtcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBjNGctZXh0ZXJuYWwgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgZXh0RGl2XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9yZWFjdERvbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkdlb1NlYXJjaFJlc3VsdHMiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJzY29wZSIsInJlc3VsdENvbnRhaW5lciIsImZpcnN0UmVzdWx0IiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VDYiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInJlc3VsdHMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJidXR0b25DbGFzcyIsImN1cnJlbnRSZXN1bHQiLCJmdW5jIiwiaHJlZiIsIndpbmRvdyIsIm9wZW4iLCJ6b29tRnVuYyIsImNsYXNzTmFtZSIsIm5hbWUiLCJkaXNwbGF5X25hbWUiLCJvbk1vdXNlVXAiLCJleHREaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=