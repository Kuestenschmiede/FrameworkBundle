"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_DetailView_jsx"],{

/***/ "./src/Resources/public/js/detail/DetailAnchorMenu.jsx":
/*!*************************************************************!*\
  !*** ./src/Resources/public/js/detail/DetailAnchorMenu.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DetailAnchorMenu = void 0;
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
var DetailAnchorMenu = exports.DetailAnchorMenu = /*#__PURE__*/function (_Component) {
  function DetailAnchorMenu(props) {
    (0, _classCallCheck2["default"])(this, DetailAnchorMenu);
    return _callSuper(this, DetailAnchorMenu, [props]);
  }
  (0, _inherits2["default"])(DetailAnchorMenu, _Component);
  return (0, _createClass2["default"])(DetailAnchorMenu, [{
    key: "render",
    value: function render() {
      var sections = this.props.sections;
      var result = [];
      Object.keys(sections).forEach(function (element, index) {
        var currentSection = sections[element];
        if (currentSection.showInSectionMenu) {
          var href = window.location.href;
          if (href.indexOf('#') !== -1) {
            // contains a hash
            href = href.substr(0, href.indexOf('#'));
          }
          href += "#detail-section-" + element;
          result.push(/*#__PURE__*/_react["default"].createElement("li", {
            key: element
          }, /*#__PURE__*/_react["default"].createElement("a", {
            href: href
          }, currentSection.name)));
        }
      });
      if (this.props.page.additionalLinks && this.props.page.additionalLinks.length > 0) {
        this.props.page.additionalLinks.map(function (item, id) {
          var href = window.location.href;
          if (href.indexOf('#') !== -1) {
            // contains a hash
            href = href.substr(0, href.indexOf('#'));
          }
          href += item.href;
          result.push(/*#__PURE__*/_react["default"].createElement("li", {
            key: result.length + id
          }, /*#__PURE__*/_react["default"].createElement("a", {
            href: href
          }, item.label)));
        });
      }
      if (this.props.menuSection.container) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: "anchor-menu"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "anchor-menu__inner"
        }, /*#__PURE__*/_react["default"].createElement("ul", {
          className: "anchor-menu__list"
        }, result), /*#__PURE__*/_react["default"].createElement("div", {
          className: "anchor-menu__share"
        })));
      } else {
        return /*#__PURE__*/_react["default"].createElement("ul", {
          id: "anchor-menu",
          className: "anchor-menu__list"
        }, result);
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/detail/DetailView.jsx":
/*!*******************************************************!*\
  !*** ./src/Resources/public/js/detail/DetailView.jsx ***!
  \*******************************************************/
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
var _DetailAnchorMenu = __webpack_require__(/*! ./DetailAnchorMenu.jsx */ "./src/Resources/public/js/detail/DetailAnchorMenu.jsx");
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
var DetailMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_detail_fields_DetailMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./fields/DetailMapperField.jsx */ "./src/Resources/public/js/detail/fields/DetailMapperField.jsx"));
});
var DetailView = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailView(props) {
    (0, _classCallCheck2["default"])(this, DetailView);
    return _callSuper(this, DetailView, [props]);
  }
  (0, _inherits2["default"])(DetailView, _Component);
  return (0, _createClass2["default"])(DetailView, [{
    key: "render",
    value: function render() {
      var _this = this;
      var sections = [];
      var compSections = this.props.component.sections;
      if (Object.keys(compSections).length > 0) {
        // reorder fields
        var contentFields = {};
        this.props.fields.forEach(function (elem, index) {
          var idx = elem.section;
          if (!contentFields[idx]) {
            contentFields[idx] = [];
          }
          contentFields[idx].push(elem);
        });
        var sectionCtr = Object.keys(compSections).length;
        var fieldKey = 0;
        var rowKey = 0;
        for (var i = 1; i <= sectionCtr; i++) {
          var section = null;
          if (this.props.component.showAnchorMenu && this.props.component.menuSectionIndex === i) {
            section = /*#__PURE__*/_react["default"].createElement(_DetailAnchorMenu.DetailAnchorMenu, {
              key: i,
              sections: compSections,
              menuSection: compSections[i],
              page: this.props.component
            });
          } else {
            if (!contentFields[i]) {
              // no content for this index
              continue;
            }
            var className = "";
            if (compSections[i].className) {
              className = compSections[i].className;
            }
            var sectionContent = null;
            if (compSections[i].rowForEachField) {
              sectionContent = contentFields[i].map(function (item, id) {
                return /*#__PURE__*/_react["default"].createElement("div", {
                  key: id,
                  className: "c4g-row"
                }, /*#__PURE__*/_react["default"].createElement(DetailMapperField, {
                  data: _this.props.data,
                  field: item,
                  fields: _this.props.fields,
                  key: id,
                  detail: _this,
                  languageRefs: _this.props.languageRefs
                }));
              });
            } else {
              sectionContent = contentFields[i].map(function (item, id) {
                return /*#__PURE__*/_react["default"].createElement(DetailMapperField, {
                  data: _this.props.data,
                  field: item,
                  fields: _this.props.fields,
                  key: fieldKey++,
                  detail: _this,
                  languageRefs: _this.props.languageRefs
                });
              });
            }
            if (!sectionContent) {
              continue;
            }
            if (compSections[i].container) {
              if (compSections[i].rowForEachField) {
                section = /*#__PURE__*/_react["default"].createElement("div", {
                  key: i,
                  className: className,
                  id: "detail-section-" + i
                }, /*#__PURE__*/_react["default"].createElement("div", {
                  className: "c4g-container"
                }, sectionContent));
              } else {
                section = /*#__PURE__*/_react["default"].createElement("div", {
                  key: i,
                  className: className,
                  id: "detail-section-" + i
                }, /*#__PURE__*/_react["default"].createElement("div", {
                  className: "c4g-container"
                }, /*#__PURE__*/_react["default"].createElement("div", {
                  className: "c4g-row"
                }, sectionContent)));
              }
            } else {
              section = /*#__PURE__*/_react["default"].createElement("div", {
                key: i,
                className: className,
                id: "detail-section-" + i
              }, sectionContent);
            }
          }
          sections.push(section);
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-view"
        }, sections);
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "detail-view"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-row"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-col"
        }, this.props.fields.map(function (item, id) {
          return /*#__PURE__*/_react["default"].createElement(DetailMapperField, {
            data: _this.props.data,
            field: item,
            fields: _this.props.fields,
            key: id,
            detail: _this,
            languageRefs: _this.languageRefs
          });
        })))));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX0RldGFpbFZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJ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QUFHLEVBQUVyQixDQUFFO2dCQUFDaUQsU0FBUyxFQUFFQSxTQUFVO2dCQUFDSixFQUFFLEVBQUUsaUJBQWlCLEdBQUc3QztjQUFFLEdBQ3BFcUUsY0FDRSxDQUFDO1lBQ1I7VUFDRjtVQUVBN0MsUUFBUSxDQUFDYSxJQUFJLENBQUMwQixPQUFPLENBQUM7UUFDeEI7UUFDQSxvQkFBT3BGLE1BQUEsWUFBQTJELGFBQUE7VUFBS1csU0FBUyxFQUFFO1FBQWMsR0FBRXpCLFFBQWMsQ0FBQztNQUN4RCxDQUFDLE1BQU07UUFDTCxvQkFDRTdDLE1BQUEsWUFBQTJELGFBQUE7VUFBS1csU0FBUyxFQUFFO1FBQWMsZ0JBQzVCdEUsTUFBQSxZQUFBMkQsYUFBQTtVQUFLVyxTQUFTLEVBQUU7UUFBZ0IsZ0JBQzlCdEUsTUFBQSxZQUFBMkQsYUFBQTtVQUFLVyxTQUFTLEVBQUU7UUFBVSxnQkFDeEJ0RSxNQUFBLFlBQUEyRCxhQUFBO1VBQUtXLFNBQVMsRUFBRTtRQUFVLEdBRXRCLElBQUksQ0FBQ2hDLEtBQUssQ0FBQzJDLE1BQU0sQ0FBQ2pCLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEVBQUUsRUFBSztVQUNsQyxvQkFBT2xFLE1BQUEsWUFBQTJELGFBQUEsQ0FBQ2MsaUJBQWlCO1lBQUNtQixJQUFJLEVBQUVmLEtBQUksQ0FBQ3ZDLEtBQUssQ0FBQ3NELElBQUs7WUFBQ0MsS0FBSyxFQUFFNUIsSUFBSztZQUFDZ0IsTUFBTSxFQUFFSixLQUFJLENBQUN2QyxLQUFLLENBQUMyQyxNQUFPO1lBQUN2QyxHQUFHLEVBQUV3QixFQUFHO1lBQUM0QixNQUFNLEVBQUVqQixLQUFLO1lBQUNrQixZQUFZLEVBQUVsQixLQUFJLENBQUNrQjtVQUFhLENBQUMsQ0FBQztRQUNwSixDQUFDLENBRUEsQ0FDRixDQUNGLENBQ0YsQ0FBQztNQUVWO0lBQ0Y7RUFBQztBQUFBLEVBakdxQ3hCLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL0RldGFpbEFuY2hvck1lbnUuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2RldGFpbC9EZXRhaWxWaWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxBbmNob3JNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5wcm9wcy5zZWN0aW9ucztcblxuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhzZWN0aW9ucykuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25zW2VsZW1lbnRdO1xuICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uLnNob3dJblNlY3Rpb25NZW51KSB7XG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2YoJyMnKSAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBjb250YWlucyBhIGhhc2hcbiAgICAgICAgICBocmVmID0gaHJlZi5zdWJzdHIoMCwgaHJlZi5pbmRleE9mKCcjJykpO1xuICAgICAgICB9XG4gICAgICAgIGhyZWYgKz0gXCIjZGV0YWlsLXNlY3Rpb24tXCIgKyBlbGVtZW50O1xuICAgICAgICByZXN1bHQucHVzaChcbiAgICAgICAgICA8bGkga2V5PXtlbGVtZW50fT48YSBocmVmPXtocmVmfT57Y3VycmVudFNlY3Rpb24ubmFtZX08L2E+PC9saT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdlLmFkZGl0aW9uYWxMaW5rcyAmJiB0aGlzLnByb3BzLnBhZ2UuYWRkaXRpb25hbExpbmtzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMucGFnZS5hZGRpdGlvbmFsTGlua3MubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCcjJykgIT09IC0xKSB7XG4gICAgICAgICAgLy8gY29udGFpbnMgYSBoYXNoXG4gICAgICAgICAgaHJlZiA9IGhyZWYuc3Vic3RyKDAsIGhyZWYuaW5kZXhPZignIycpKTtcbiAgICAgICAgfVxuICAgICAgICBocmVmICs9IGl0ZW0uaHJlZjtcbiAgICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgICAgPGxpIGtleT17cmVzdWx0Lmxlbmd0aCArIGlkfT48YSBocmVmPXtocmVmfT57aXRlbS5sYWJlbH08L2E+PC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm1lbnVTZWN0aW9uLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17XCJhbmNob3ItbWVudVwifT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJhbmNob3ItbWVudV9faW5uZXJcIn0+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImFuY2hvci1tZW51X19saXN0XCJ9PlxuICAgICAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFuY2hvci1tZW51X19zaGFyZVwifT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dWwgaWQ9e1wiYW5jaG9yLW1lbnVcIn0gY2xhc3NOYW1lPXtcImFuY2hvci1tZW51X19saXN0XCJ9PlxuICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgIDwvdWw+XG4gICAgICApO1xuICAgIH1cblxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0RldGFpbEFuY2hvck1lbnV9IGZyb20gXCIuL0RldGFpbEFuY2hvck1lbnUuanN4XCI7XG5cbmNvbnN0IERldGFpbE1hcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2ZpZWxkcy9EZXRhaWxNYXBwZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWN0aW9ucyA9IFtdO1xuICAgIGxldCBjb21wU2VjdGlvbnMgPSB0aGlzLnByb3BzLmNvbXBvbmVudC5zZWN0aW9ucztcbiAgICBpZiAoT2JqZWN0LmtleXMoY29tcFNlY3Rpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyByZW9yZGVyIGZpZWxkc1xuICAgICAgbGV0IGNvbnRlbnRGaWVsZHMgPSB7fTtcbiAgICAgIHRoaXMucHJvcHMuZmllbGRzLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBlbGVtLnNlY3Rpb247XG4gICAgICAgIGlmICghY29udGVudEZpZWxkc1tpZHhdKSB7XG4gICAgICAgICAgY29udGVudEZpZWxkc1tpZHhdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudEZpZWxkc1tpZHhdLnB1c2goZWxlbSk7XG4gICAgICB9KTtcbiAgICAgIGxldCBzZWN0aW9uQ3RyID0gT2JqZWN0LmtleXMoY29tcFNlY3Rpb25zKS5sZW5ndGg7XG4gICAgICBsZXQgZmllbGRLZXkgPSAwO1xuICAgICAgbGV0IHJvd0tleSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaTw9IHNlY3Rpb25DdHI7IGkrKykge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5zaG93QW5jaG9yTWVudSAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC5tZW51U2VjdGlvbkluZGV4ID09PSBpKSB7XG4gICAgICAgICAgc2VjdGlvbiA9IDxEZXRhaWxBbmNob3JNZW51IGtleT17aX0gc2VjdGlvbnM9e2NvbXBTZWN0aW9uc30gbWVudVNlY3Rpb249e2NvbXBTZWN0aW9uc1tpXX0gcGFnZT17dGhpcy5wcm9wcy5jb21wb25lbnR9Lz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWNvbnRlbnRGaWVsZHNbaV0pIHtcbiAgICAgICAgICAgIC8vIG5vIGNvbnRlbnQgZm9yIHRoaXMgaW5kZXhcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICBpZiAoY29tcFNlY3Rpb25zW2ldLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29tcFNlY3Rpb25zW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgc2VjdGlvbkNvbnRlbnQgPSBudWxsO1xuICAgICAgICAgIGlmIChjb21wU2VjdGlvbnNbaV0ucm93Rm9yRWFjaEZpZWxkKSB7XG4gICAgICAgICAgICBzZWN0aW9uQ29udGVudCA9IGNvbnRlbnRGaWVsZHNbaV0ubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXtcImM0Zy1yb3dcIn0+XG4gICAgICAgICAgICAgICAgPERldGFpbE1hcHBlckZpZWxkIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gZmllbGQ9e2l0ZW19IGZpZWxkcz17dGhpcy5wcm9wcy5maWVsZHN9IGtleT17aWR9IGRldGFpbD17dGhpc30gbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc30vPlxuICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlY3Rpb25Db250ZW50ID0gY29udGVudEZpZWxkc1tpXS5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8RGV0YWlsTWFwcGVyRmllbGQgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBmaWVsZD17aXRlbX0gZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc30ga2V5PXtmaWVsZEtleSsrfSBkZXRhaWw9e3RoaXN9IGxhbmd1YWdlUmVmcz17dGhpcy5wcm9wcy5sYW5ndWFnZVJlZnN9Lz5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VjdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wU2VjdGlvbnNbaV0uY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAoY29tcFNlY3Rpb25zW2ldLnJvd0ZvckVhY2hGaWVsZCkge1xuICAgICAgICAgICAgICBzZWN0aW9uID0gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17XCJkZXRhaWwtc2VjdGlvbi1cIiArIGl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1jb250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uQ29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VjdGlvbiA9IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e1wiZGV0YWlsLXNlY3Rpb24tXCIgKyBpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvd1wifT5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb25Db250ZW50fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VjdGlvbiA9IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e1wiZGV0YWlsLXNlY3Rpb24tXCIgKyBpfT5cbiAgICAgICAgICAgICAge3NlY3Rpb25Db250ZW50fVxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiZGV0YWlsLXZpZXdcIn0+e3NlY3Rpb25zfTwvZGl2PlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtdmlld1wifT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvd1wifT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbFwifT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RGV0YWlsTWFwcGVyRmllbGQgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBmaWVsZD17aXRlbX0gZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc30ga2V5PXtpZH0gZGV0YWlsPXt0aGlzfSBsYW5ndWFnZVJlZnM9e3RoaXMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRldGFpbEFuY2hvck1lbnUiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJzZWN0aW9ucyIsInJlc3VsdCIsImtleXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiY3VycmVudFNlY3Rpb24iLCJzaG93SW5TZWN0aW9uTWVudSIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImluZGV4T2YiLCJzdWJzdHIiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJwYWdlIiwiYWRkaXRpb25hbExpbmtzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImlkIiwibGFiZWwiLCJtZW51U2VjdGlvbiIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIl9EZXRhaWxBbmNob3JNZW51IiwiRGV0YWlsTWFwcGVyRmllbGQiLCJSZWFjdCIsImxhenkiLCJEZXRhaWxWaWV3IiwiX3RoaXMiLCJjb21wU2VjdGlvbnMiLCJjb21wb25lbnQiLCJjb250ZW50RmllbGRzIiwiZmllbGRzIiwiZWxlbSIsImlkeCIsInNlY3Rpb24iLCJzZWN0aW9uQ3RyIiwiZmllbGRLZXkiLCJyb3dLZXkiLCJzaG93QW5jaG9yTWVudSIsIm1lbnVTZWN0aW9uSW5kZXgiLCJzZWN0aW9uQ29udGVudCIsInJvd0ZvckVhY2hGaWVsZCIsImRhdGEiLCJmaWVsZCIsImRldGFpbCIsImxhbmd1YWdlUmVmcyJdLCJzb3VyY2VSb290IjoiIn0=