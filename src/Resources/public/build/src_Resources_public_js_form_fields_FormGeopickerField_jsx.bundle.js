"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormGeopickerField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormGeopickerField.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormGeopickerField.jsx ***!
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
var _c4gMaps = _interopRequireDefault(__webpack_require__(/*! ../../../../../../../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx"));
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
// const MapController = React.lazy(() => import("../../../../../../../MapsBundle/src/Resources/public/js/components/c4g-maps.jsx"));
var FormGeopickerField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormGeopickerField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormGeopickerField);
    _this = _callSuper(this, FormGeopickerField, [props]);
    _this.mapData = _this.props.field.mapData || _this.props.form.props.component.mapData;
    _this.geoxName = _this.props.field.geoxName || _this.props.field.geoxName;
    _this.geoyName = _this.props.field.geoyName || _this.props.field.geoyName;
    _this.geoJsonName = _this.props.field.geoJsonName || _this.props.field.geoJsonName;
    _this.state = {
      initial: true
    };
    if (_this.props.parentNode.setAltDescription) {
      _this.props.parentNode.setAltDescription(_this.props.field.description);
    }
    return _this;
  }
  (0, _inherits2["default"])(FormGeopickerField, _Component);
  return (0, _createClass2["default"])(FormGeopickerField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      this.mapData.mapDiv = "c4g_map";
      var map = null;
      if (!this.state.initial) {
        map = /*#__PURE__*/_react["default"].createElement(_c4gMaps["default"], {
          ref: function ref(node) {
            _this2.props.form.mapControllerRef = node;
          },
          mapData: this.mapData
        });
      }
      var description = null;
      if (this.props.field.label) {
        description = /*#__PURE__*/_react["default"].createElement("span", {
          className: "field-description"
        }, this.props.field.description);
      }
      var inputField = null;
      if (this.mapData.geopicker && this.mapData.geopicker.type === "frontend") {
        inputField = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          id: this.geoxName,
          name: this.geoxName,
          defaultValue: this.props.data[this.geoxName],
          disabled: true
        }), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          id: this.geoyName,
          name: this.geoyName,
          defaultValue: this.props.data[this.geoyName],
          disabled: true
        }));
      } else if (this.mapData.editor) {
        inputField = /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          id: this.geoJsonName,
          name: this.geoJsonName,
          defaultValue: this.props.data[this.geoJsonName]
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        id: "c4g_map_" + this.mapData.mapId
      }), map, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: ""
      }, this.props.field.label), inputField, description);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.initial) {
        this.setState({
          initial: false
        });
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUdlb3BpY2tlckZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQTRHLFNBQUFHLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBTCx3QkFBQUssQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFB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bGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtR2VvcGlja2VyRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBsYXp5fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXBDb250cm9sbGVyIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1hcHMuanN4XCI7XG4vLyBjb25zdCBNYXBDb250cm9sbGVyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1hcHMuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUdlb3BpY2tlckZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubWFwRGF0YSA9IHRoaXMucHJvcHMuZmllbGQubWFwRGF0YSB8fCB0aGlzLnByb3BzLmZvcm0ucHJvcHMuY29tcG9uZW50Lm1hcERhdGE7XG4gICAgdGhpcy5nZW94TmFtZSA9IHRoaXMucHJvcHMuZmllbGQuZ2VveE5hbWUgfHwgdGhpcy5wcm9wcy5maWVsZC5nZW94TmFtZTtcbiAgICB0aGlzLmdlb3lOYW1lID0gdGhpcy5wcm9wcy5maWVsZC5nZW95TmFtZSB8fCB0aGlzLnByb3BzLmZpZWxkLmdlb3lOYW1lO1xuICAgIHRoaXMuZ2VvSnNvbk5hbWUgPSB0aGlzLnByb3BzLmZpZWxkLmdlb0pzb25OYW1lIHx8IHRoaXMucHJvcHMuZmllbGQuZ2VvSnNvbk5hbWU7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbDogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMucHJvcHMucGFyZW50Tm9kZS5zZXRBbHREZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5wYXJlbnROb2RlLnNldEFsdERlc2NyaXB0aW9uKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLm1hcERhdGEubWFwRGl2ID0gXCJjNGdfbWFwXCI7XG4gICAgbGV0IG1hcCA9IG51bGw7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWwpIHtcbiAgICAgIG1hcCA9IDxNYXBDb250cm9sbGVyIHJlZj17KG5vZGUpID0+IHt0aGlzLnByb3BzLmZvcm0ubWFwQ29udHJvbGxlclJlZiA9IG5vZGU7fX0gbWFwRGF0YT17dGhpcy5tYXBEYXRhfSAvPjtcbiAgICB9XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNwYW4gY2xhc3NOYW1lPXtcImZpZWxkLWRlc2NyaXB0aW9uXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9ufTwvc3Bhbj4pO1xuICAgIH1cbiAgICBsZXQgaW5wdXRGaWVsZCA9IG51bGw7XG4gICAgaWYgKHRoaXMubWFwRGF0YS5nZW9waWNrZXIgJiYgdGhpcy5tYXBEYXRhLmdlb3BpY2tlci50eXBlID09PSBcImZyb250ZW5kXCIpIHtcbiAgICAgIGlucHV0RmllbGQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPXt0aGlzLmdlb3hOYW1lfSBuYW1lPXt0aGlzLmdlb3hOYW1lfSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGF0YVt0aGlzLmdlb3hOYW1lXX0gZGlzYWJsZWQ9e3RydWV9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9e3RoaXMuZ2VveU5hbWV9IG5hbWU9e3RoaXMuZ2VveU5hbWV9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kYXRhW3RoaXMuZ2VveU5hbWVdfSBkaXNhYmxlZD17dHJ1ZX0vPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubWFwRGF0YS5lZGl0b3IpIHtcbiAgICAgIGlucHV0RmllbGQgPSA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD17dGhpcy5nZW9Kc29uTmFtZX0gbmFtZT17dGhpcy5nZW9Kc29uTmFtZX0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRhdGFbdGhpcy5nZW9Kc29uTmFtZV19Lz5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBpZD17XCJjNGdfbWFwX1wiICsgdGhpcy5tYXBEYXRhLm1hcElkfT48L2Rpdj5cbiAgICAgICAge21hcH1cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPlxuICAgICAgICB7aW5wdXRGaWVsZH1cbiAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5pdGlhbDogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1HZW9waWNrZXJGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJtYXBEYXRhIiwiZmllbGQiLCJmb3JtIiwiY29tcG9uZW50IiwiZ2VveE5hbWUiLCJnZW95TmFtZSIsImdlb0pzb25OYW1lIiwic3RhdGUiLCJpbml0aWFsIiwicGFyZW50Tm9kZSIsInNldEFsdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwibWFwRGl2IiwibWFwIiwiY3JlYXRlRWxlbWVudCIsInJlZiIsIm5vZGUiLCJtYXBDb250cm9sbGVyUmVmIiwibGFiZWwiLCJjbGFzc05hbWUiLCJpbnB1dEZpZWxkIiwiZ2VvcGlja2VyIiwidHlwZSIsIkZyYWdtZW50IiwiaWQiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiZGF0YSIsImRpc2FibGVkIiwiZWRpdG9yIiwibWFwSWQiLCJodG1sRm9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=