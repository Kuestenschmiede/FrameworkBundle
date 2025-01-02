"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileTagField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileTagField.jsx":
/*!***************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileTagField.jsx ***!
  \***************************************************************/
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
var TileImageField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileImageField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileImageField.jsx */ "./src/Resources/public/js/tiles/fields/TileImageField.jsx"));
});
var TileLinkField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_tiles_fields_TileLinkField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./TileLinkField.jsx */ "./src/Resources/public/js/tiles/fields/TileLinkField.jsx"));
});
var TileTagField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileTagField(props) {
    (0, _classCallCheck2["default"])(this, TileTagField);
    return _callSuper(this, TileTagField, [props]);
  }
  (0, _inherits2["default"])(TileTagField, _Component);
  return (0, _createClass2["default"])(TileTagField, [{
    key: "render",
    value: function render() {
      var _this = this;
      var tags = this.props.data[this.props.field.name];
      var tagElements = [];
      if (tags && tags.length > 0) {
        var index = -1;
        tags.map(function (item, id) {
          if (item.image) {
            var tagName = item.name;
            tagName = tagName.toLowerCase();
            tagName = tagName.replace(" ", "-");
            tagName = tagName.replace("ä", "ae");
            tagName = tagName.replace("Ä", "Ae");
            tagName = tagName.replace("ö", "oe");
            tagName = tagName.replace("Ö", "Oe");
            tagName = tagName.replace("ü", "ue");
            tagName = tagName.replace("Ü", "Ue");
            tagName = tagName.replace("ß", "ss");
            var tagField = {
              name: tagName,
              imageSource: item.image.src,
              imageAlt: item.image.alt,
              title: item.name,
              wrapperClass: _this.props.field["class"] + ' ' + tagName,
              "class": _this.props.field.innerClass + ' ' + tagName,
              height: item.image.height,
              width: item.image.width
            };
            index += 1;
            var linkField = _this.props.field.linkField;
            if (item[linkField]) {
              var link = item[linkField];
              if (link.indexOf('@') === -1) {
                // link is no email address
                if (link.indexOf("http://") === -1 && link.indexOf("https://") === -1) {
                  link = "https://" + link;
                }
              }
              tagElements.push(/*#__PURE__*/_react["default"].createElement("a", {
                key: id + index,
                href: link,
                target: "_blank",
                rel: "noreferrer noopener"
              }, /*#__PURE__*/_react["default"].createElement(TileImageField, {
                key: id + index,
                field: tagField,
                data: []
              })));
            } else {
              tagElements.push(/*#__PURE__*/_react["default"].createElement(TileImageField, {
                key: id + index,
                field: tagField,
                data: []
              }));
            }
          }
        });
      } else {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.wrapperClass
      }, tagElements);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVUYWdGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQXVDLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBVnZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU00QixjQUFjLGdCQUFHQyxpQkFBSyxDQUFDQyxJQUFJLENBQUM7RUFBQSxPQUFNLDZPQUE4QjtBQUFBLEVBQUM7QUFDdkUsSUFBTUMsYUFBYSxnQkFBR0YsaUJBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBQUEsT0FBTSwwT0FBNkI7QUFBQSxFQUFDO0FBQUMsSUFFakRFLFlBQVksR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFFL0IsU0FBQUYsYUFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFKLFlBQUE7SUFBQSxPQUFBaEIsVUFBQSxPQUFBZ0IsWUFBQSxHQUNYRyxLQUFLO0VBRWI7RUFBQyxJQUFBRSxVQUFBLGFBQUFMLFlBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFJLGFBQUEsYUFBQU4sWUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxLQUFBO01BRVAsSUFBSUMsSUFBSSxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO01BQ2pELElBQUlDLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUlKLElBQUksSUFBSUEsSUFBSSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLElBQUlDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZE4sSUFBSSxDQUFDTyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxFQUFFLEVBQUs7VUFDckIsSUFBSUQsSUFBSSxDQUFDRSxLQUFLLEVBQUU7WUFDZCxJQUFJQyxPQUFPLEdBQUdILElBQUksQ0FBQ0wsSUFBSTtZQUN2QlEsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDO1lBQy9CRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkNGLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNwQ0YsT0FBTyxHQUFHQSxPQUFPLENBQUNFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3BDRixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDcENGLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNwQ0YsT0FBTyxHQUFHQSxPQUFPLENBQUNFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3BDRixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDcENGLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNwQyxJQUFJQyxRQUFRLEdBQUc7Y0FDYlgsSUFBSSxFQUFFUSxPQUFPO2NBQ2JJLFdBQVcsRUFBRVAsSUFBSSxDQUFDRSxLQUFLLENBQUNNLEdBQUc7Y0FDM0JDLFFBQVEsRUFBRVQsSUFBSSxDQUFDRSxLQUFLLENBQUNRLEdBQUc7Y0FDeEJDLEtBQUssRUFBRVgsSUFBSSxDQUFDTCxJQUFJO2NBQ2hCaUIsWUFBWSxFQUFFckIsS0FBSSxDQUFDUCxLQUFLLENBQUNVLEtBQUssU0FBTSxHQUFHLEdBQUcsR0FBR1MsT0FBTztjQUNwRCxTQUFPWixLQUFJLENBQUNQLEtBQUssQ0FBQ1UsS0FBSyxDQUFDbUIsVUFBVSxHQUFHLEdBQUcsR0FBR1YsT0FBTztjQUNsRFcsTUFBTSxFQUFFZCxJQUFJLENBQUNFLEtBQUssQ0FBQ1ksTUFBTTtjQUN6QkMsS0FBSyxFQUFFZixJQUFJLENBQUNFLEtBQUssQ0FBQ2E7WUFDcEIsQ0FBQztZQUNEakIsS0FBSyxJQUFJLENBQUM7WUFDVixJQUFJa0IsU0FBUyxHQUFHekIsS0FBSSxDQUFDUCxLQUFLLENBQUNVLEtBQUssQ0FBQ3NCLFNBQVM7WUFDMUMsSUFBSWhCLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQyxFQUFFO2NBQ25CLElBQUlDLElBQUksR0FBR2pCLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQztjQUMxQixJQUFJQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDNUI7Z0JBQ0EsSUFBS0QsSUFBSSxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQU9ELElBQUksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBRSxFQUFFO2tCQUMxRUQsSUFBSSxHQUFHLFVBQVUsR0FBR0EsSUFBSTtnQkFDMUI7Y0FDRjtjQUNBckIsV0FBVyxDQUFDdUIsSUFBSSxjQUFDN0UsTUFBQSxZQUFBOEUsYUFBQTtnQkFBR2hDLEdBQUcsRUFBRWEsRUFBRSxHQUFHSCxLQUFNO2dCQUFDdUIsSUFBSSxFQUFFSixJQUFLO2dCQUFDSyxNQUFNLEVBQUMsUUFBUTtnQkFBQ0MsR0FBRyxFQUFFO2NBQXNCLGdCQUMxRmpGLE1BQUEsWUFBQThFLGFBQUEsQ0FBQzNDLGNBQWM7Z0JBQUNXLEdBQUcsRUFBRWEsRUFBRSxHQUFHSCxLQUFNO2dCQUFDSixLQUFLLEVBQUVZLFFBQVM7Z0JBQUNiLElBQUksRUFBRTtjQUFHLENBQUMsQ0FDM0QsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxNQUFNO2NBQ0xHLFdBQVcsQ0FBQ3VCLElBQUksY0FBQzdFLE1BQUEsWUFBQThFLGFBQUEsQ0FBQzNDLGNBQWM7Z0JBQUNXLEdBQUcsRUFBRWEsRUFBRSxHQUFHSCxLQUFNO2dCQUFDSixLQUFLLEVBQUVZLFFBQVM7Z0JBQUNiLElBQUksRUFBRTtjQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pGO1VBRUY7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTCxPQUFPLElBQUk7TUFDYjtNQUNBLG9CQUNFbkQsTUFBQSxZQUFBOEUsYUFBQTtRQUFLSSxTQUFTLEVBQUUsSUFBSSxDQUFDeEMsS0FBSyxDQUFDVSxLQUFLLENBQUNrQjtNQUFhLEdBQzNDaEIsV0FDRSxDQUFDO0lBRVY7RUFBQztBQUFBLEVBOUR1QzZCLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvZmllbGRzL1RpbGVUYWdGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaWxlSW1hZ2VGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlSW1hZ2VGaWVsZC5qc3hcIikpO1xuY29uc3QgVGlsZUxpbmtGaWVsZCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9UaWxlTGlua0ZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVUYWdGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB0YWdzID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgbGV0IHRhZ0VsZW1lbnRzID0gW107XG4gICAgaWYgKHRhZ3MgJiYgdGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgIHRhZ3MubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pbWFnZSkge1xuICAgICAgICAgIGxldCB0YWdOYW1lID0gaXRlbS5uYW1lO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZShcIiBcIiwgXCItXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDpFwiLCBcImFlXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDhFwiLCBcIkFlXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDtlwiLCBcIm9lXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDllwiLCBcIk9lXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDvFwiLCBcInVlXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDnFwiLCBcIlVlXCIpO1xuICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnJlcGxhY2UoXCLDn1wiLCBcInNzXCIpO1xuICAgICAgICAgIGxldCB0YWdGaWVsZCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogaXRlbS5pbWFnZS5zcmMsXG4gICAgICAgICAgICBpbWFnZUFsdDogaXRlbS5pbWFnZS5hbHQsXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiB0aGlzLnByb3BzLmZpZWxkLmNsYXNzICsgJyAnICsgdGFnTmFtZSxcbiAgICAgICAgICAgIGNsYXNzOiB0aGlzLnByb3BzLmZpZWxkLmlubmVyQ2xhc3MgKyAnICcgKyB0YWdOYW1lLFxuICAgICAgICAgICAgaGVpZ2h0OiBpdGVtLmltYWdlLmhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiBpdGVtLmltYWdlLndpZHRoXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIGxldCBsaW5rRmllbGQgPSB0aGlzLnByb3BzLmZpZWxkLmxpbmtGaWVsZDtcbiAgICAgICAgICBpZiAoaXRlbVtsaW5rRmllbGRdKSB7XG4gICAgICAgICAgICBsZXQgbGluayA9IGl0ZW1bbGlua0ZpZWxkXTtcbiAgICAgICAgICAgIGlmIChsaW5rLmluZGV4T2YoJ0AnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gbGluayBpcyBubyBlbWFpbCBhZGRyZXNzXG4gICAgICAgICAgICAgIGlmICgobGluay5pbmRleE9mKFwiaHR0cDovL1wiKSA9PT0gLTEpICAmJiAobGluay5pbmRleE9mKFwiaHR0cHM6Ly9cIikgPT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBcImh0dHBzOi8vXCIgKyBsaW5rO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWdFbGVtZW50cy5wdXNoKDxhIGtleT17aWQgKyBpbmRleH0gaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPXtcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIn0+XG4gICAgICAgICAgICAgIDxUaWxlSW1hZ2VGaWVsZCBrZXk9e2lkICsgaW5kZXh9IGZpZWxkPXt0YWdGaWVsZH0gZGF0YT17W119Lz5cbiAgICAgICAgICAgIDwvYT4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWdFbGVtZW50cy5wdXNoKDxUaWxlSW1hZ2VGaWVsZCBrZXk9e2lkICsgaW5kZXh9IGZpZWxkPXt0YWdGaWVsZH0gZGF0YT17W119Lz4pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC53cmFwcGVyQ2xhc3N9PlxuICAgICAgICB7dGFnRWxlbWVudHN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGlsZUltYWdlRmllbGQiLCJSZWFjdCIsImxhenkiLCJUaWxlTGlua0ZpZWxkIiwiVGlsZVRhZ0ZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMiLCJ0YWdzIiwiZGF0YSIsImZpZWxkIiwibmFtZSIsInRhZ0VsZW1lbnRzIiwibGVuZ3RoIiwiaW5kZXgiLCJtYXAiLCJpdGVtIiwiaWQiLCJpbWFnZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJ0YWdGaWVsZCIsImltYWdlU291cmNlIiwic3JjIiwiaW1hZ2VBbHQiLCJhbHQiLCJ0aXRsZSIsIndyYXBwZXJDbGFzcyIsImlubmVyQ2xhc3MiLCJoZWlnaHQiLCJ3aWR0aCIsImxpbmtGaWVsZCIsImxpbmsiLCJpbmRleE9mIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==