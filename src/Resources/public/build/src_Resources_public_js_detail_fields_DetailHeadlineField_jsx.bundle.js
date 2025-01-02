"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailHeadlineField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailHeadlineField.jsx":
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailHeadlineField.jsx ***!
  \***********************************************************************/
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
var DetailHeadlineField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailHeadlineField(props) {
    (0, _classCallCheck2["default"])(this, DetailHeadlineField);
    return _callSuper(this, DetailHeadlineField, [props]);
  }
  (0, _inherits2["default"])(DetailHeadlineField, _Component);
  return (0, _createClass2["default"])(DetailHeadlineField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var icon = null;
        if (this.props.field.iconClass) {
          icon = /*#__PURE__*/_react["default"].createElement("i", {
            className: this.props.field.iconClass
          });
        }
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label);
        }
        var itemProp = null;
        if (this.props.field.itemProp) {
          itemProp = this.props.field.itemProp;
        }
        var headline = null;
        switch (this.props.field.level) {
          case 1:
            headline = /*#__PURE__*/_react["default"].createElement("h1", null, this.props.data[this.props.field.name]);
            break;
          case 2:
            headline = /*#__PURE__*/_react["default"].createElement("h2", null, this.props.data[this.props.field.name]);
            break;
          case 3:
            headline = /*#__PURE__*/_react["default"].createElement("h3", null, this.props.data[this.props.field.name]);
            break;
          case 4:
            headline = /*#__PURE__*/_react["default"].createElement("h4", null, this.props.data[this.props.field.name]);
            break;
          case 5:
            headline = /*#__PURE__*/_react["default"].createElement("h5", null, this.props.data[this.props.field.name]);
            break;
          case 6:
            headline = /*#__PURE__*/_react["default"].createElement("h6", null, this.props.data[this.props.field.name]);
            break;
          default:
            console.warn(this.props.languageRefs.UNSUPPORTED_HEADLINE_LEVEL);
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "item " + this.props.field.name + (this.props.field["class"] ? ' ' + this.props.field["class"] : '')
        }, icon, label, headline);
      }
      return '';
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxIZWFkbGluZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFWdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFZcUI0QixtQkFBbUIsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFDdEMsU0FBQUYsb0JBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBSixtQkFBQTtJQUFBLE9BQUFaLFVBQUEsT0FBQVksbUJBQUEsR0FDWEcsS0FBSztFQUNiO0VBQUMsSUFBQUUsVUFBQSxhQUFBTCxtQkFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQUksYUFBQSxhQUFBTixtQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7UUFDMUMsSUFBSUMsSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDUSxLQUFLLENBQUNHLFNBQVMsRUFBRTtVQUM5QkQsSUFBSSxnQkFBR2hELE1BQUEsWUFBQWtELGFBQUE7WUFBR0MsU0FBUyxFQUFFLElBQUksQ0FBQ2IsS0FBSyxDQUFDUSxLQUFLLENBQUNHO1VBQVUsQ0FBSSxDQUFDO1FBQ3ZEO1FBQ0EsSUFBSUcsS0FBSyxHQUFHLElBQUk7UUFDaEIsSUFBSSxJQUFJLENBQUNkLEtBQUssQ0FBQ1EsS0FBSyxDQUFDTSxLQUFLLEVBQUU7VUFDMUJBLEtBQUssZ0JBQUdwRCxNQUFBLFlBQUFrRCxhQUFBO1lBQU1DLFNBQVMsRUFBRTtVQUFjLEdBQUUsSUFBSSxDQUFDYixLQUFLLENBQUNRLEtBQUssQ0FBQ00sS0FBWSxDQUFDO1FBQ3pFO1FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQUk7UUFDbkIsSUFBSSxJQUFJLENBQUNmLEtBQUssQ0FBQ1EsS0FBSyxDQUFDTyxRQUFRLEVBQUU7VUFDN0JBLFFBQVEsR0FBRyxJQUFJLENBQUNmLEtBQUssQ0FBQ1EsS0FBSyxDQUFDTyxRQUFRO1FBQ3RDO1FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQUk7UUFDbkIsUUFBUSxJQUFJLENBQUNoQixLQUFLLENBQUNRLEtBQUssQ0FBQ1MsS0FBSztVQUM1QixLQUFLLENBQUM7WUFDSkQsUUFBUSxnQkFBR3RELE1BQUEsWUFBQWtELGFBQUEsYUFBSyxJQUFJLENBQUNaLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNDLElBQUksQ0FBTSxDQUFDO1lBQzVEO1VBQ0YsS0FBSyxDQUFDO1lBQ0pPLFFBQVEsZ0JBQUd0RCxNQUFBLFlBQUFrRCxhQUFBLGFBQUssSUFBSSxDQUFDWixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJLENBQU0sQ0FBQztZQUM1RDtVQUNGLEtBQUssQ0FBQztZQUNKTyxRQUFRLGdCQUFHdEQsTUFBQSxZQUFBa0QsYUFBQSxhQUFLLElBQUksQ0FBQ1osS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFNLENBQUM7WUFDNUQ7VUFDRixLQUFLLENBQUM7WUFDSk8sUUFBUSxnQkFBR3RELE1BQUEsWUFBQWtELGFBQUEsYUFBSyxJQUFJLENBQUNaLEtBQUssQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxLQUFLLENBQUNDLElBQUksQ0FBTSxDQUFDO1lBQzVEO1VBQ0YsS0FBSyxDQUFDO1lBQ0pPLFFBQVEsZ0JBQUd0RCxNQUFBLFlBQUFrRCxhQUFBLGFBQUssSUFBSSxDQUFDWixLQUFLLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxDQUFDQyxJQUFJLENBQU0sQ0FBQztZQUM1RDtVQUNGLEtBQUssQ0FBQztZQUNKTyxRQUFRLGdCQUFHdEQsTUFBQSxZQUFBa0QsYUFBQSxhQUFLLElBQUksQ0FBQ1osS0FBSyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxDQUFNLENBQUM7WUFDNUQ7VUFDRjtZQUNFUyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNvQixZQUFZLENBQUNDLDBCQUEwQixDQUFDO1FBQ3BFO1FBRUEsb0JBQ0UzRCxNQUFBLFlBQUFrRCxhQUFBO1VBQUtDLFNBQVMsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDYixLQUFLLENBQUNRLEtBQUssQ0FBQ0MsSUFBSSxJQUFJLElBQUksQ0FBQ1QsS0FBSyxDQUFDUSxLQUFLLFNBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNRLEtBQUssU0FBTSxHQUFHLEVBQUU7UUFBRSxHQUM1R0UsSUFBSSxFQUNKSSxLQUFLLEVBQ0xFLFFBQ0UsQ0FBQztNQUVWO01BQ0EsT0FBUSxFQUFFO0lBRVo7RUFBQztBQUFBLEVBckQ4Q00sZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbEhlYWRsaW5lRmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsSGVhZGxpbmVGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgbGV0IGljb24gPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaWNvbkNsYXNzKSB7XG4gICAgICAgIGljb24gPSA8aSBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuaWNvbkNsYXNzfT48L2k+O1xuICAgICAgfVxuICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtcImVudHJ5LWxhYmVsXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj47XG4gICAgICB9XG4gICAgICBsZXQgaXRlbVByb3AgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaXRlbVByb3ApIHtcbiAgICAgICAgaXRlbVByb3AgPSB0aGlzLnByb3BzLmZpZWxkLml0ZW1Qcm9wO1xuICAgICAgfVxuICAgICAgbGV0IGhlYWRsaW5lID0gbnVsbDtcbiAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5maWVsZC5sZXZlbCkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDE+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDE+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDI+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDI+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDM+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDM+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDQ+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDQ+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDU+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDU+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaGVhZGxpbmUgPSA8aDY+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdfTwvaDY+O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5VTlNVUFBPUlRFRF9IRUFETElORV9MRVZFTCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIml0ZW0gXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWUgKyAodGhpcy5wcm9wcy5maWVsZC5jbGFzcyA/ICcgJyArIHRoaXMucHJvcHMuZmllbGQuY2xhc3MgOiAnJyl9PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICB7aGVhZGxpbmV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICgnJylcblxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxIZWFkbGluZUZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsImljb24iLCJpY29uQ2xhc3MiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpdGVtUHJvcCIsImhlYWRsaW5lIiwibGV2ZWwiLCJjb25zb2xlIiwid2FybiIsImxhbmd1YWdlUmVmcyIsIlVOU1VQUE9SVEVEX0hFQURMSU5FX0xFVkVMIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==