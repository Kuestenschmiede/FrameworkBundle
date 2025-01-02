"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailTagField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailTagField.jsx":
/*!******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailTagField.jsx ***!
  \******************************************************************/
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
var DetailTextField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailTextField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailTextField.jsx */ "./src/Resources/public/js/detail/fields/DetailTextField.jsx"));
});
var DetailImageField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailImageField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./DetailImageField.jsx */ "./src/Resources/public/js/detail/fields/DetailImageField.jsx"));
});
var DetailMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./DetailMapperField.jsx */ "./src/Resources/public/js/detail/fields/DetailMapperField.jsx"));
});
var DetailTagField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailTagField(props) {
    (0, _classCallCheck2["default"])(this, DetailTagField);
    return _callSuper(this, DetailTagField, [props]);
  }
  (0, _inherits2["default"])(DetailTagField, _Component);
  return (0, _createClass2["default"])(DetailTagField, [{
    key: "render",
    value: function render() {
      var _this = this;
      var tags = [];
      var tagData = this.props.data[this.props.field.name];
      if (!tagData || !tagData.length || tagData.length === 0) {
        return null;
      }
      var label = null;
      if (this.props.field.label) {
        label = /*#__PURE__*/_react["default"].createElement("h4", null, this.props.field.label);
      }
      var tagFields = [];
      var _loop = function _loop(i) {
        var image = null;
        if (tagData[i].image) {
          image = /*#__PURE__*/_react["default"].createElement(DetailImageField, {
            field: {
              name: "image",
              withPopover: true,
              popoverField: "name"
            },
            data: tagData[i]
          });
        }
        if (tagData[i].fields) {
          tagFields.push(tagData[i].fields.map(function (item, index) {
            item["class"] = item["class"] || tagData[i].technicalKey || "";
            return /*#__PURE__*/_react["default"].createElement(DetailMapperField, {
              key: index,
              field: item,
              data: _this.props.data,
              "class": item["class"] || tagData[i].technicalKey || "",
              tagType: tagData[i].technicalKey
            });
          }));
        }
        var tag = /*#__PURE__*/_react["default"].createElement("div", {
          className: "tag-entry " + tagData[i].technicalKey,
          key: i
        }, image, /*#__PURE__*/_react["default"].createElement(DetailTextField, {
          field: {
            name: "name",
            "class": tagData[i].technicalKey || ""
          },
          data: tagData[i]
        }));
        tags.push(tag);
      };
      for (var i = 0; i < tagData.length; i++) {
        _loop(i);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-wrapper"
      }, label, /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-wrapper__tags"
      }, tags), /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-wrapper__tag-fields"
      }, tagFields));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxUYWdGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxF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LENBQUNjLElBQUksQ0FBQ00sR0FBRyxDQUFDO01BQ2hCLENBQUM7TUFsQkQsS0FBSyxJQUFJbEQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0IsT0FBTyxDQUFDSSxNQUFNLEVBQUVuQyxDQUFDLEVBQUU7UUFBQXVDLEtBQUEsQ0FBQXZDLENBQUE7TUFBQTtNQW9CdkMsb0JBQ0lyQixNQUFBLFlBQUEwRCxhQUFBO1FBQUtjLFNBQVMsRUFBRTtNQUF1QixHQUNwQ2YsS0FBSyxlQUNOekQsTUFBQSxZQUFBMEQsYUFBQTtRQUFLYyxTQUFTLEVBQUU7TUFBNkIsR0FDMUNyQixJQUNFLENBQUMsZUFDTm5ELE1BQUEsWUFBQTBELGFBQUE7UUFBS2MsU0FBUyxFQUFFO01BQW1DLEdBQ2hEYixTQUNFLENBQ0YsQ0FBQztJQUVaO0VBQUM7QUFBQSxFQWpEeUNjLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxUYWdGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEZXRhaWxUZXh0RmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vRGV0YWlsVGV4dEZpZWxkLmpzeFwiKSk7XG5jb25zdCBEZXRhaWxJbWFnZUZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbEltYWdlRmllbGQuanN4XCIpKTtcbmNvbnN0IERldGFpbE1hcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL0RldGFpbE1hcHBlckZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbFRhZ0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGFncyA9IFtdO1xuXG4gICAgbGV0IHRhZ0RhdGEgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXTtcbiAgICBpZiAoIXRhZ0RhdGEgfHwgIXRhZ0RhdGEubGVuZ3RoIHx8ICh0YWdEYXRhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9IDxoND57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2g0PlxuICAgIH1cbiAgICBsZXQgdGFnRmllbGRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW1hZ2UgPSBudWxsO1xuICAgICAgaWYgKHRhZ0RhdGFbaV0uaW1hZ2UpIHtcbiAgICAgICAgaW1hZ2UgPSA8RGV0YWlsSW1hZ2VGaWVsZCBmaWVsZD17e25hbWU6IFwiaW1hZ2VcIiwgd2l0aFBvcG92ZXI6IHRydWUsIHBvcG92ZXJGaWVsZDogXCJuYW1lXCJ9fSBkYXRhPXt0YWdEYXRhW2ldfS8+O1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnRGF0YVtpXS5maWVsZHMpIHtcbiAgICAgICAgdGFnRmllbGRzLnB1c2godGFnRGF0YVtpXS5maWVsZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3MgPSBpdGVtLmNsYXNzIHx8IHRhZ0RhdGFbaV0udGVjaG5pY2FsS2V5IHx8IFwiXCI7XG4gICAgICAgICAgcmV0dXJuIDxEZXRhaWxNYXBwZXJGaWVsZCBrZXk9e2luZGV4fSBmaWVsZD17aXRlbX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgY2xhc3M9e2l0ZW0uY2xhc3MgfHwgdGFnRGF0YVtpXS50ZWNobmljYWxLZXkgfHwgXCJcIn0gdGFnVHlwZT17dGFnRGF0YVtpXS50ZWNobmljYWxLZXl9Lz5cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgbGV0IHRhZyA9IDxkaXYgY2xhc3NOYW1lPXtcInRhZy1lbnRyeSBcIiArIHRhZ0RhdGFbaV0udGVjaG5pY2FsS2V5fSBrZXk9e2l9PlxuICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8RGV0YWlsVGV4dEZpZWxkIGZpZWxkPXt7bmFtZTogXCJuYW1lXCIsIGNsYXNzOiB0YWdEYXRhW2ldLnRlY2huaWNhbEtleSB8fCBcIlwifX0gZGF0YT17dGFnRGF0YVtpXX0vPlxuICAgICAgPC9kaXY+O1xuICAgICAgdGFncy5wdXNoKHRhZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLXdyYXBwZXJcIn0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRldGFpbC1maWVsZC13cmFwcGVyX190YWdzXCJ9PlxuICAgICAgICAgICAge3RhZ3N9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLWZpZWxkLXdyYXBwZXJfX3RhZy1maWVsZHNcIn0+XG4gICAgICAgICAgICB7dGFnRmllbGRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxUZXh0RmllbGQiLCJSZWFjdCIsImxhenkiLCJEZXRhaWxJbWFnZUZpZWxkIiwiRGV0YWlsTWFwcGVyRmllbGQiLCJEZXRhaWxUYWdGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzIiwidGFncyIsInRhZ0RhdGEiLCJkYXRhIiwiZmllbGQiLCJuYW1lIiwibGVuZ3RoIiwibGFiZWwiLCJjcmVhdGVFbGVtZW50IiwidGFnRmllbGRzIiwiX2xvb3AiLCJpbWFnZSIsIndpdGhQb3BvdmVyIiwicG9wb3ZlckZpZWxkIiwiZmllbGRzIiwicHVzaCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRlY2huaWNhbEtleSIsInRhZ1R5cGUiLCJ0YWciLCJjbGFzc05hbWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9