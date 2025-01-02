"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailImageField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailImageField.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailImageField.jsx ***!
  \********************************************************************/
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
var DetailImageField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailImageField(props) {
    (0, _classCallCheck2["default"])(this, DetailImageField);
    return _callSuper(this, DetailImageField, [props]);
  }
  (0, _inherits2["default"])(DetailImageField, _Component);
  return (0, _createClass2["default"])(DetailImageField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", null, this.props.field.label);
        }
        var src = this.props.data[this.props.field.name].src;
        var altName = this.props.data[this.props.field.name].alt;
        var width = this.props.data[this.props.field.name].width;
        var height = this.props.data[this.props.field.name].height;
        var imageNode = null;
        if (this.props.field.withPopover && this.props.field.popoverField && this.props.data[this.props.field.popoverField]) {
          imageNode = /*#__PURE__*/_react["default"].createElement("img", {
            className: "img-fluid",
            src: src,
            alt: altName,
            "data-toggle": "tooltip",
            width: width,
            height: height,
            "data-content": this.props.data[this.props.field.popoverField],
            title: this.props.data[this.props.field.popoverField]
          });
        } else {
          imageNode = /*#__PURE__*/_react["default"].createElement("img", {
            className: "img-fluid",
            src: src,
            alt: altName,
            title: altName,
            width: width,
            height: height
          });
        }
        if (this.props.field.addWrappingDiv) {
          var wrapperClass = "";
          if (this.props.field.wrappingDivClass) {
            wrapperClass = this.props.field.wrappingDivClass;
          }
          var image = null;
          if (this.props.field.renderAsFigure) {
            image = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, imageNode, /*#__PURE__*/_react["default"].createElement("figcaption", null, altName));
          } else {
            image = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, label, imageNode);
          }
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: wrapperClass
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.field["class"] ? this.props.field["class"] : "detail-field-image"
          }, image));
        } else {
          if (this.props.field.renderAsFigure) {
            return /*#__PURE__*/_react["default"].createElement("figure", null, imageNode, /*#__PURE__*/_react["default"].createElement("figcaption", null, altName));
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: this.props.field["class"] ? this.props.field["class"] : "detail-field-image"
            }, label, imageNode);
          }
        }
      } else {
        return '';
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxJbWFnZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFWdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFZcUI0QixnQkFBZ0IsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFDbkMsU0FBQUYsaUJBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixnQkFBQTtJQUFBLE9BQUFaLFVBQUEsT0FBQVksZ0JBQUEsR0FDWEcsS0FBSztFQUViO0VBQUMsSUFBQUUsVUFBQSxhQUFBTCxnQkFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQUksYUFBQSxhQUFBTixnQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7UUFDMUMsSUFBSUMsS0FBSyxHQUFHLElBQUk7UUFDaEIsSUFBSSxJQUFJLENBQUNWLEtBQUssQ0FBQ1EsS0FBSyxDQUFDRSxLQUFLLEVBQUU7VUFDMUJBLEtBQUssZ0JBQUdoRCxNQUFBLFlBQUFpRCxhQUFBLGVBQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNRLEtBQUssQ0FBQ0UsS0FBWSxDQUFDO1FBQy9DO1FBQ0EsSUFBSUUsR0FBRyxHQUFHLElBQUksQ0FBQ1osS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNHLEdBQUc7UUFDcEQsSUFBSUMsT0FBTyxHQUFHLElBQUksQ0FBQ2IsS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNLLEdBQUc7UUFDeEQsSUFBSUMsS0FBSyxHQUFHLElBQUksQ0FBQ2YsS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLEtBQUs7UUFDeEQsSUFBSUMsTUFBTSxHQUFHLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDTyxNQUFNO1FBQzFELElBQUlDLFNBQVMsR0FBRyxJQUFJO1FBQ3BCLElBQUksSUFBSSxDQUFDakIsS0FBSyxDQUFDUSxLQUFLLENBQUNVLFdBQVcsSUFBSSxJQUFJLENBQUNsQixLQUFLLENBQUNRLEtBQUssQ0FBQ1csWUFBWSxJQUFJLElBQUksQ0FBQ25CLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNXLFlBQVksQ0FBQyxFQUFFO1VBQ25IRixTQUFTLGdCQUFHdkQsTUFBQSxZQUFBaUQsYUFBQTtZQUFLUyxTQUFTLEVBQUUsV0FBWTtZQUFDUixHQUFHLEVBQUVBLEdBQUk7WUFBQ0UsR0FBRyxFQUFFRCxPQUFRO1lBQUMsZUFBYSxTQUFVO1lBQUNFLEtBQUssRUFBRUEsS0FBTTtZQUFDQyxNQUFNLEVBQUVBLE1BQU87WUFBQyxnQkFBYyxJQUFJLENBQUNoQixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDVyxZQUFZLENBQUU7WUFBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNXLFlBQVk7VUFBRSxDQUFDLENBQUM7UUFDL08sQ0FBQyxNQUFNO1VBQ0xGLFNBQVMsZ0JBQUd2RCxNQUFBLFlBQUFpRCxhQUFBO1lBQUtTLFNBQVMsRUFBRSxXQUFZO1lBQUNSLEdBQUcsRUFBRUEsR0FBSTtZQUFDRSxHQUFHLEVBQUVELE9BQVE7WUFBQ1EsS0FBSyxFQUFFUixPQUFRO1lBQUNFLEtBQUssRUFBRUEsS0FBTTtZQUFDQyxNQUFNLEVBQUVBO1VBQU8sQ0FBQyxDQUFDO1FBQ2xIO1FBRUEsSUFBSSxJQUFJLENBQUNoQixLQUFLLENBQUNRLEtBQUssQ0FBQ2MsY0FBYyxFQUFFO1VBRW5DLElBQUlDLFlBQVksR0FBRyxFQUFFO1VBQ3JCLElBQUksSUFBSSxDQUFDdkIsS0FBSyxDQUFDUSxLQUFLLENBQUNnQixnQkFBZ0IsRUFBRTtZQUNyQ0QsWUFBWSxHQUFHLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ1EsS0FBSyxDQUFDZ0IsZ0JBQWdCO1VBQ2xEO1VBQ0EsSUFBSUMsS0FBSyxHQUFHLElBQUk7VUFDaEIsSUFBSSxJQUFJLENBQUN6QixLQUFLLENBQUNRLEtBQUssQ0FBQ2tCLGNBQWMsRUFBRTtZQUNuQ0QsS0FBSyxnQkFBRy9ELE1BQUEsWUFBQWlELGFBQUEsQ0FBQ2pELE1BQUEsV0FBSyxDQUFDaUUsUUFBUSxRQUNwQlYsU0FBUyxlQUNWdkQsTUFBQSxZQUFBaUQsYUFBQSxxQkFBYUUsT0FBb0IsQ0FDbkIsQ0FBQztVQUNuQixDQUFDLE1BQU07WUFDTFksS0FBSyxnQkFBRy9ELE1BQUEsWUFBQWlELGFBQUEsQ0FBQ2pELE1BQUEsV0FBSyxDQUFDaUUsUUFBUSxRQUNwQmpCLEtBQUssRUFDTE8sU0FDYSxDQUFDO1VBQ25CO1VBQ0Esb0JBQ0V2RCxNQUFBLFlBQUFpRCxhQUFBO1lBQUtTLFNBQVMsRUFBRUc7VUFBYSxnQkFDM0I3RCxNQUFBLFlBQUFpRCxhQUFBO1lBQUtTLFNBQVMsRUFBRSxJQUFJLENBQUNwQixLQUFLLENBQUNRLEtBQUssU0FBTSxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUSxLQUFLLFNBQU0sR0FBRztVQUFxQixHQUNwRmlCLEtBQ0UsQ0FDRixDQUFDO1FBRVYsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxJQUFJLENBQUN6QixLQUFLLENBQUNRLEtBQUssQ0FBQ2tCLGNBQWMsRUFBRTtZQUNuQyxvQkFDRWhFLE1BQUEsWUFBQWlELGFBQUEsaUJBQ0dNLFNBQVMsZUFDVnZELE1BQUEsWUFBQWlELGFBQUEscUJBQWFFLE9BQW9CLENBQzNCLENBQUM7VUFFYixDQUFDLE1BQU07WUFDTCxvQkFDRW5ELE1BQUEsWUFBQWlELGFBQUE7Y0FBS1MsU0FBUyxFQUFFLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ1EsS0FBSyxTQUFNLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNRLEtBQUssU0FBTSxHQUFHO1lBQXFCLEdBQ3BGRSxLQUFLLEVBQ0xPLFNBQ0UsQ0FBQztVQUVWO1FBRUY7TUFDRixDQUFDLE1BQU07UUFDTCxPQUFRLEVBQUU7TUFDWjtJQUNGO0VBQUM7QUFBQSxFQXJFMkNXLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxJbWFnZUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbEltYWdlRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gPHNwYW4+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9zcGFuPjtcbiAgICAgIH1cbiAgICAgIGxldCBzcmMgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5zcmM7XG4gICAgICBsZXQgYWx0TmFtZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmFsdDtcbiAgICAgIGxldCB3aWR0aCA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLndpZHRoO1xuICAgICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmhlaWdodDtcbiAgICAgIGxldCBpbWFnZU5vZGUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQud2l0aFBvcG92ZXIgJiYgdGhpcy5wcm9wcy5maWVsZC5wb3BvdmVyRmllbGQgJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQucG9wb3ZlckZpZWxkXSkge1xuICAgICAgICBpbWFnZU5vZGUgPSA8aW1nIGNsYXNzTmFtZT17XCJpbWctZmx1aWRcIn0gc3JjPXtzcmN9IGFsdD17YWx0TmFtZX0gZGF0YS10b2dnbGU9e1widG9vbHRpcFwifSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkYXRhLWNvbnRlbnQ9e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLnBvcG92ZXJGaWVsZF19IHRpdGxlPXt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5wb3BvdmVyRmllbGRdfS8+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gPGltZyBjbGFzc05hbWU9e1wiaW1nLWZsdWlkXCJ9IHNyYz17c3JjfSBhbHQ9e2FsdE5hbWV9IHRpdGxlPXthbHROYW1lfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fS8+O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5hZGRXcmFwcGluZ0Rpdikge1xuXG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC53cmFwcGluZ0RpdkNsYXNzKSB7XG4gICAgICAgICAgd3JhcHBlckNsYXNzID0gdGhpcy5wcm9wcy5maWVsZC53cmFwcGluZ0RpdkNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbWFnZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnJlbmRlckFzRmlndXJlKSB7XG4gICAgICAgICAgaW1hZ2UgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7aW1hZ2VOb2RlfVxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e2FsdE5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltYWdlID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge2ltYWdlTm9kZX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3MgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogXCJkZXRhaWwtZmllbGQtaW1hZ2VcIn0+XG4gICAgICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQucmVuZGVyQXNGaWd1cmUpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAge2ltYWdlTm9kZX1cbiAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+e2FsdE5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3MgPyB0aGlzLnByb3BzLmZpZWxkLmNsYXNzIDogXCJkZXRhaWwtZmllbGQtaW1hZ2VcIn0+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAge2ltYWdlTm9kZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCcnKTtcbiAgICB9XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRldGFpbEltYWdlRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJkYXRhIiwiZmllbGQiLCJuYW1lIiwibGFiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYWx0TmFtZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VOb2RlIiwid2l0aFBvcG92ZXIiLCJwb3BvdmVyRmllbGQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImFkZFdyYXBwaW5nRGl2Iiwid3JhcHBlckNsYXNzIiwid3JhcHBpbmdEaXZDbGFzcyIsImltYWdlIiwicmVuZGVyQXNGaWd1cmUiLCJGcmFnbWVudCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=