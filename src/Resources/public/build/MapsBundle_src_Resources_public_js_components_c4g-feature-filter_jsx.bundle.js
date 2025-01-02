"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["MapsBundle_src_Resources_public_js_components_c4g-feature-filter_jsx"],{

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-item.jsx":
/*!************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-item.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
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
var FeatureFilterItem = exports.FeatureFilterItem = /*#__PURE__*/function (_Component) {
  function FeatureFilterItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterItem);
    return _callSuper(this, FeatureFilterItem, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterItem, _Component);
  return (0, _createClass2["default"])(FeatureFilterItem, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        onChange: function onChange(evt) {
          _this.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value, scope.props.value.field);
        },
        checked: scope.props.checked.identifier === scope.props.feature.identifier,
        value: this.props.feature.identifier
      }), _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)));
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-list.jsx":
/*!************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-list.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterList = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-item.jsx");
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
var FeatureFilterList = exports.FeatureFilterList = /*#__PURE__*/function (_Component) {
  function FeatureFilterList(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterList);
    return _callSuper(this, FeatureFilterList, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterList, _Component);
  return (0, _createClass2["default"])(FeatureFilterList, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      var form = null;
      var className = "";
      var classNameText = "";
      if (this.props.feature.filters.length > 2) {
        if (this.props.open) {
          className = "c4g-open";
          form = /*#__PURE__*/_react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterItem.FeatureFilterItem, {
              feature: feature,
              parentId: _this.props.id,
              checked: _this.props.checkedItem,
              filterLayers: _this.props.filterLayers,
              key: index
            });
          }));
        } else {
          className = "c4g-close";
        }
        className += "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = this.props.checkedItem.identifier === "all c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) ? "" : "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);
            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), form);
      } else {
        className = "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        classNameText = "fi_text fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) + "_text";
        var _liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        _liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
        var img = null;
        var clickEvent = null;
        if (!this.props.feature.link) {
          clickEvent = function clickEvent(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].identifier : "all", _this.props.id, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].value : undefined, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].field : undefined);
            evt.stopPropagation();
            evt.preventDefault();
          };
        } else {
          clickEvent = function clickEvent(evt) {
            window.open(_this.props.feature.link, "_self");
          };
        }
        if (this.props.feature.image) {
          img = /*#__PURE__*/_react["default"].createElement("img", {
            src: this.props.feature.image,
            title: this.props.feature.name,
            width: this.props.feature.width,
            height: this.props.feature.height
          });
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: clickEvent
        }, img, /*#__PURE__*/_react["default"].createElement("span", {
          className: classNameText
        }, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name))));
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":
/*!*********************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterMultiCheckbox = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");
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
var FeatureFilterMultiCheckbox = exports.FeatureFilterMultiCheckbox = /*#__PURE__*/function (_Component) {
  function FeatureFilterMultiCheckbox(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckbox);
    return _callSuper(this, FeatureFilterMultiCheckbox, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterMultiCheckbox, _Component);
  return (0, _createClass2["default"])(FeatureFilterMultiCheckbox, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      var form = null;
      var className, classNameText;
      if (this.props.feature.filters.length > 2) {
        if (this.props.open) {
          className = "c4g-open";
          form = /*#__PURE__*/_react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            var checked = !!_this.props.checkedItems.find(function (element) {
              return element.identifier === feature.identifier && element.value === feature.value;
            });
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureMulticheckboxItem.FeatureFilterMultiCheckboxItem, {
              feature: feature,
              parentId: _this.props.id,
              checked: checked,
              filterLayers: _this.props.filterLayers,
              key: index
            });
          }));
        } else {
          className = "c4g-close";
        }
        var numberSpan = null;
        if (this.props.checkedItems.length > 0) {
          var number = this.props.checkedItems[0].identifier === "all" ? this.props.checkedItems.length - 1 : this.props.checkedItems.length;
          numberSpan = /*#__PURE__*/_react["default"].createElement("span", {
            className: "sum"
          }, " ", number, " ");
        }
        className += " fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);
            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), numberSpan, form);
      } else {
        className = "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        classNameText = "fi_text fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) + "_text";
        var _liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        _liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
        var clickEvent;
        if (!this.props.feature.link) {
          clickEvent = function clickEvent(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier, _this.props.id, true);
            evt.stopPropagation();
            evt.preventDefault();
          };
        } else {
          clickEvent = function clickEvent(evt) {
            window.open(_this.props.feature.link, '_self');
          };
        }
        var img = null;
        if (this.props.feature.image) {
          img = /*#__PURE__*/_react["default"].createElement("img", {
            src: this.props.feature.image,
            title: this.props.feature.name,
            width: this.props.feature.width,
            height: this.props.feature.height
          });
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: clickEvent
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: classNameText
        }, img, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name))));
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter.jsx":
/*!*******************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-feature-filter.jsx ***!
  \*******************************************************************************/
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
var _c4gFeatureFilterList = __webpack_require__(/*! ./c4g-feature-filter-list.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-list.jsx");
var _c4gFeatureFilterMulticheckbox = __webpack_require__(/*! ./c4g-feature-filter-multicheckbox.jsx */ "../MapsBundle/src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx");
var _style = __webpack_require__(/*! ol/style */ "../MapsBundle/node_modules/ol/style.js");
var _source = __webpack_require__(/*! ol/source */ "../MapsBundle/node_modules/ol/source.js");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "../MapsBundle/src/Resources/public/js/c4g-maps-i18n.js");
var _opening_hours = _interopRequireDefault(__webpack_require__(/*! opening_hours */ "../MapsBundle/node_modules/opening_hours/build/opening_hours.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
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
var FeatureFilter = exports["default"] = /*#__PURE__*/function (_Component) {
  function FeatureFilter(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FeatureFilter);
    _this = _callSuper(this, FeatureFilter, [props]);
    var scope = _this;
    _this.filterLayers = _this.filterLayers.bind(_this);
    _this.filterLayersMulti = _this.filterLayersMulti.bind(_this);
    _this.setOpen = _this.setOpen.bind(_this);
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.ulRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleClickInside = _this.handleClickInside.bind(_this);
    _this.filterLayer = _this.filterLayer.bind(_this);
    _this.filterLayerMulti = _this.filterLayerMulti.bind(_this);
    _this.hideFeature = _this.hideFeature.bind(_this);
    _this.hideFeatureMulti = _this.hideFeatureMulti.bind(_this);
    _this.callbackFunction = _this.callbackFunction.bind(_this);
    _this.callbackFunctionMulti = _this.callbackFunctionMulti.bind(_this);
    _this.loadFilters();
    if (props.mapController.data.caching) {
      window.onbeforeunload = function () {
        _c4gMapsUtils.utils.storeValue('filtersChecked', JSON.stringify(scope.state.arrChecked));
        var layers = scope.props.mapController.getCurrentLayerStates(scope.props.mapController.state.arrLayerStates);
        _c4gMapsUtils.utils.storeValue('layers', layers);
        _c4gMapsUtils.utils.storeValue('tstampc4g', Date.now());
      };
    }
    _this.state = {
      filters: [],
      open: true,
      arrChecked: [],
      openedList: -1
    };
    _this.features = [];
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.props.mapController.filter = _this;
    return _this;
  }
  (0, _inherits2["default"])(FeatureFilter, _Component);
  return (0, _createClass2["default"])(FeatureFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var filters = this.state.filters;
      var showButtons = false;
      var listDiv = document.querySelector(".c4g-feature-filter-list");
      if (listDiv) {
        showButtons = !(listDiv.scrollWidth <= listDiv.clientWidth);
      } else {
        showButtons = scope.props.target && !(scope.props.target.scrollWidth <= scope.props.target.clientWidth);
      }
      var resetButton = null;
      if (!!parseFloat(this.props.mapController.data.filterResetButton)) {
        var boolFilterReset = false;
        for (var i in this.state.arrChecked) {
          if (!boolFilterReset && this.state.arrChecked.hasOwnProperty(i)) {
            if (!parseFloat(this.props.mapController.data.filterHandling)) {
              boolFilterReset = this.state.arrChecked[i].identifier != 'all';
            } else {
              boolFilterReset = this.state.arrChecked[i] != [];
            }
          }
        }
        if (boolFilterReset) {
          resetButton = /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-feature-filter-reset",
            onMouseUp: function onMouseUp(evt) {
              return _this2.resetFilter();
            }
          }, this.langConstants.RESET_FILTER);
        }
      }
      if (!!parseFloat(this.props.mapController.data.filterHandling)) {
        if (filters && filters.length > 0) {
          var div = filters.map(function (feature, index) {
            var checkedItems = scope.state.arrChecked[index] || [];
            var openedList = scope.state.openedList === index;
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterMulticheckbox.FeatureFilterMultiCheckbox, {
              feature: feature,
              open: openedList,
              setOpen: _this2.setOpen,
              checkedItems: checkedItems,
              filterLayers: _this2.filterLayersMulti,
              id: index,
              key: index
            });
          });
          if (!showButtons) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, div), resetButton);
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, div), resetButton);
          }
        }
      } else {
        if (filters && filters.length > 0) {
          var _div = filters.map(function (feature, index) {
            var checkedItem = scope.state.arrChecked[index];
            var openedList = scope.state.openedList === index;
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterList.FeatureFilterList, {
              feature: feature,
              open: openedList,
              setOpen: _this2.setOpen,
              checkedItem: checkedItem,
              filterLayers: _this2.filterLayers,
              id: index,
              key: index
            });
          });
          if (!showButtons) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          }
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", null);
    }
  }, {
    key: "filterLayers",
    value: function filterLayers(property, listId, value) {
      var field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var newState = this.state.arrChecked;
      newState[listId] = {
        identifier: property,
        value: value,
        field: field
      };
      this.setState({
        arrChecked: newState
      }, this.callbackFunction);
    }
  }, {
    key: "callbackFunction",
    value: function callbackFunction() {
      var _this3 = this;
      var arrLayers = this.props.mapController.map.getLayers().getArray();
      arrLayers.map(function (feature, index) {
        _this3.filterLayer(feature);
      });
      for (var i = 0; i < this.features.length; i++) {
        if (this.features.hasOwnProperty(i)) {
          var added = this.showFeature(this.features[i], i);
          if (added) {
            i--;
          }
        }
      }
      this.props.mapController.map.getView().dispatchEvent('change:center');
    }
  }, {
    key: "filterLayersMulti",
    value: function filterLayersMulti(property, listId, value) {
      var newState = this.state.arrChecked;
      var changedEntry = newState[listId];
      var found = changedEntry.find(function (element) {
        return element.identifier === property && element.value === value;
      });
      if (!found) {
        if (property === "all") {
          changedEntry = JSON.parse(JSON.stringify(this.state.filters[listId].filters));
        } else {
          changedEntry.push({
            identifier: property,
            value: value
          });
        }
      } else {
        if (property === "all") {
          changedEntry = [];
        } else {
          var rmIndex = changedEntry.indexOf(found);
          if (rmIndex > -1) {
            changedEntry.splice(rmIndex, 1);
          }
        }
      }
      newState[listId] = changedEntry;
      this.setState({
        arrChecked: newState
      }, this.callbackFunctionMulti);
    }
  }, {
    key: "callbackFunctionMulti",
    value: function callbackFunctionMulti() {
      var _this4 = this;
      var arrLayers = this.props.mapController.map.getLayers().getArray();
      arrLayers.map(function (feature, index) {
        _this4.filterLayerMulti(feature);
      });
      for (var i = 0; i < this.features.length; i++) {
        if (this.features.hasOwnProperty(i)) {
          var added = this.showFeatureMulti(this.features[i], i);
          if (added) {
            i--;
          }
        }
      }
    }
  }, {
    key: "setOpen",
    value: function setOpen(openId) {
      if (this.state.openedList === openId) {
        this.setState({
          openedList: -1
        });
      } else {
        this.setState({
          openedList: openId
        });
      }
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var _this5 = this;
      var filter = [];
      for (var i in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(i)) {
          if (!parseFloat(this.props.mapController.data.filterHandling)) {
            filter.push({
              identifier: 'all'
            });
          } else {
            filter.push([]);
          }
        }
      }
      this.setState({
        arrChecked: filter
      }, function () {
        for (var _i = 0; _i < _this5.features.length; _i++) {
          if (_this5.features.hasOwnProperty(_i)) {
            var added = _this5.resetFeature(_this5.features[_i], _i);
            if (added) {
              _i--;
            }
          }
        }
      });
    }
  }, {
    key: "filterLayer",
    value: function filterLayer(layer) {
      var _this6 = this;
      if (layer.getLayers && typeof layer.getLayers === "function") {
        var arrLayers = layer.getLayers().getArray();
        arrLayers.map(function (feature, index) {
          _this6.filterLayer(feature);
        });
      } else if (layer.getStyle && typeof layer.getSource === "function") {
        var source = layer.getSource() instanceof _source.Cluster ? layer.getSource().getSource() : layer.getSource();
        source.forEachFeature(function (feature) {
          return _this6.hideFeature(feature, source);
        });
      }
    }
  }, {
    key: "filterLayerMulti",
    value: function filterLayerMulti(layer) {
      var _this7 = this;
      if (layer.getLayers && typeof layer.getLayers === "function") {
        var arrLayers = layer.getLayers().getArray();
        arrLayers.map(function (feature, index) {
          _this7.filterLayerMulti(feature);
        });
      } else if (layer.getStyle && typeof layer.getSource === "function") {
        var source = layer.getSource() instanceof _source.Cluster ? layer.getSource().getSource() : layer.getSource();
        source.forEachFeature(function (feature) {
          return _this7.hideFeatureMulti(feature, source);
        });
      }
    }
  }, {
    key: "checkFeature",
    value: function checkFeature(feature, objChecked) {
      var property = objChecked.identifier;
      if (objChecked.value === "opening_hours" && feature.get(objChecked.field || "opening_hours")) {
        try {
          var featureHours = new _opening_hours["default"](feature.get(objChecked.field || "opening_hours"), {
            address: {
              country_code: "de"
            }
          });
          return featureHours.getState();
        } catch (error) {
          //ToDo
          //console.warn(error);
          return false;
        }
      } else {
        if (!(property === "all" || feature.get(property) && !objChecked.value || objChecked.value == feature.get(property) && objChecked.value)) {
          return false;
        } else {
          return true;
        }
      }
    }
  }, {
    key: "checkFeatureMulti",
    value: function checkFeatureMulti(feature, objChecked) {}
  }, {
    key: "hideFeature",
    value: function hideFeature(feature, source) {
      var _this8 = this;
      if (feature.get('features')) {
        var features = feature.get('features');
        features.forEach(function (feature) {
          return _this8.hideFeature(feature, source);
        });
      } else {
        if (feature.get('noFilter')) {
          return;
        }
        var show = true;
        for (var key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key) && show) {
            show = this.checkFeature(feature, this.state.arrChecked[key]);
          }
        }
        if (!show) {
          feature.set('source', source);
          this.features.push(feature);
          source.removeFeature(feature);
        }
      }
    }
  }, {
    key: "hideFeatureMulti",
    value: function hideFeatureMulti(feature, source) {
      var _this9 = this;
      if (feature.get('features')) {
        var features = feature.get('features');
        features.forEach(function (feature) {
          return _this9.hideFeatureMulti(feature, source);
        });
      } else {
        if (feature.get('noFilter')) {
          return;
        }
        var show = false;
        var filterActive = false;
        for (var key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key)) {
            var arrChecked = this.state.arrChecked[key];
            for (var i in arrChecked) {
              if (arrChecked.hasOwnProperty(i)) {
                filterActive = true;
                var objChecked = arrChecked[i];
                var property = objChecked.identifier;
                if (feature.get(property)) {
                  var featureProperty = feature.get(property);
                  if (objChecked.value && objChecked.value === featureProperty || !objChecked.value) {
                    show = true;
                  }
                }
              }
            }
          }
        }
        if (!show && filterActive) {
          feature.set('source', source);
          this.features.push(feature);
          source.removeFeature(feature);
        }
      }
    }
  }, {
    key: "showFeature",
    value: function showFeature(feature, index) {
      var show = true;
      for (var key in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(key) && show) {
          show = this.checkFeature(feature, this.state.arrChecked[key]);
        }
      }
      if (show) {
        var source = feature.get('source');
        feature.set('source', false);
        source.addFeature(feature);
        this.features.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "resetFeature",
    value: function resetFeature(feature, index) {
      var source = feature.get('source');
      feature.set('source', false);
      source.addFeature(feature);
      this.features.splice(index, 1);
      return true;
    }
  }, {
    key: "showFeatureMulti",
    value: function showFeatureMulti(feature, index) {
      var show = false;
      var filterActive = false;
      for (var key in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(key)) {
          var arrChecked = this.state.arrChecked[key];
          for (var i in arrChecked) {
            if (arrChecked.hasOwnProperty(i)) {
              filterActive = true;
              var objChecked = arrChecked[i];
              var property = objChecked.identifier;
              if (feature.get(property)) {
                var featureProperty = feature.get(property);
                if (objChecked.value && objChecked.value === featureProperty || !objChecked.value) {
                  show = true;
                }
              }
            }
          }
        }
      }
      if (show || !filterActive) {
        var source = feature.get('source');
        feature.set('source', false);
        source.addFeature(feature);
        this.features.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "loadFilters",
    value: function loadFilters() {
      var scope = this;
      var url = this.props.mapController.data.api.filter + this.props.mapController.data.id + "/" + this.props.mapController.data.lang;
      fetch(url).then(function (response) {
        return response.json().then(function (jsonData) {
          var callbackFunc = function callbackFunc() {};
          var arrChecked = [];
          for (var i = 0; i < jsonData.length; i++) {
            if (!!parseFloat(scope.props.mapController.data.filterHandling)) {
              arrChecked.push([]);
            } else {
              arrChecked.push({
                identifier: "all"
              });
            }
          }
          if (scope.props.mapController.data.caching) {
            if (_c4gMapsUtils.utils.getValue('tstampc4g') && _c4gMapsUtils.utils.getValue('tstampc4g') + 604800 > Date.now()) {
              if (_c4gMapsUtils.utils.getValue('filtersChecked')) {
                var arrTemp = JSON.parse(_c4gMapsUtils.utils.getValue('filtersChecked'));
                if (arrTemp.length === jsonData.length) {
                  arrChecked = arrTemp;
                  if (scope.props.mapController.proxy.layers_loaded) {
                    callbackFunc = !parseFloat(scope.props.mapController.data.filterHandling) ? scope.callbackFunction : scope.callbackFunctionMulti;
                  } else {
                    var asyncCallback = !parseFloat(scope.props.mapController.data.filterHandling) ? scope.callbackFunction : scope.callbackFunctionMulti;
                    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
                    window.c4gMapsHooks.layer_loaded.push(function (lol) {
                      asyncCallback();
                    });
                  }
                }
              }
            }
          }
          scope.setState({
            filters: jsonData,
            arrChecked: arrChecked
          }, callbackFunc);
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * hide FilterFeatureList if clicked on outside of element
     */
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          openedList: -1
        });
      }
    }
  }, {
    key: "handleClickInside",
    value: function handleClickInside(event) {
      var path = event.nativeEvent.path;
      if (path[0] === event.currentTarget) {
        this.setState({
          openedList: -1
        });
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "../MapsBundle/src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx":
/*!*******************************************************************************************!*\
  !*** ../MapsBundle/src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../MapsBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../MapsBundle/node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterMultiCheckboxItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../MapsBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../MapsBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../MapsBundle/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../MapsBundle/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../MapsBundle/node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "../MapsBundle/node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "../MapsBundle/src/Resources/public/js/c4g-maps-utils.js");
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
var FeatureFilterMultiCheckboxItem = exports.FeatureFilterMultiCheckboxItem = /*#__PURE__*/function (_Component) {
  function FeatureFilterMultiCheckboxItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckboxItem);
    return _callSuper(this, FeatureFilterMultiCheckboxItem, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterMultiCheckboxItem, _Component);
  return (0, _createClass2["default"])(FeatureFilterMultiCheckboxItem, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: this.props.checked,
        onChange: function onChange(evt) {
          evt.stopPropagation();
        },
        onClick: function onClick(evt) {
          _this.props.filterLayers(_this.props.feature.identifier, _this.props.parentId, _this.props.feature.value);
        },
        value: this.props.feature.identifier
      }), _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0J1bmRsZV9zcmNfUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1mZWF0dXJlLWZpbHRlcl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRCxtQkFBQTtBQUF3QyxTQUFBRSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUosd0JBQUFJLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQ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QUFBO0lBQUFyRCxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxLQUFBO01BQ0wsb0JBQ0k5QyxNQUFBLFlBQUFnRCxhQUFBO1FBQUtDLFNBQVMsRUFBQztNQUF5QixnQkFDcENqRCxNQUFBLFlBQUFnRCxhQUFBLDZCQUNJaEQsTUFBQSxZQUFBZ0QsYUFBQTtRQUNJRSxJQUFJLEVBQUMsVUFBVTtRQUNmUSxPQUFPLEVBQUUsSUFBSSxDQUFDbkIsS0FBSyxDQUFDbUIsT0FBUTtRQUM1QlAsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEdBQUcsRUFBSztVQUFDQSxHQUFHLENBQUMyQixlQUFlLENBQUMsQ0FBQztRQUFBLENBQUU7UUFDM0M2SixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBR3hMLEdBQUcsRUFBSztVQUFDTixLQUFJLENBQUNQLEtBQUssQ0FBQ2MsWUFBWSxDQUFDUCxLQUFJLENBQUNQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDQyxVQUFVLEVBQUVULEtBQUksQ0FBQ1AsS0FBSyxDQUFDaUIsUUFBUSxFQUFFVixLQUFJLENBQUNQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDVixLQUFLLENBQUM7UUFBQyxDQUFFO1FBQzNIQSxLQUFLLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNlLE9BQU8sQ0FBQ0M7TUFBVyxDQUN4QyxDQUFDLEVBQ0RJLG1CQUFLLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNyQixLQUFLLENBQUNlLE9BQU8sQ0FBQ08sV0FBVyxDQUM3QyxDQUNOLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFuQitDQyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLW11bHRpY2hlY2tib3gtaXRlbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyhzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHNjb3BlLnByb3BzLnBhcmVudElkLCBzY29wZS5wcm9wcy5mZWF0dXJlLnZhbHVlLCBzY29wZS5wcm9wcy52YWx1ZS5maWVsZCk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Njb3BlLnByb3BzLmNoZWNrZWQuaWRlbnRpZmllciA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVySXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgbGV0IGNsYXNzTmFtZVRleHQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiZmlfd3JhcHBlciBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsIGM0Zy1pdGVtLVwiK3V0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpID8gXCJcIiA6IFwiYzRnLWl0ZW0tY2hlY2tlZCBjNGctaXRlbS1cIit1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiZmlfd3JhcHBlciBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgY2xhc3NOYW1lVGV4dCA9IFwiZmlfdGV4dCBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpICsgXCJfdGV4dFwiO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICBsZXQgaW1nID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjbGlja0V2ZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5mZWF0dXJlLmxpbmspIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyIDogXCJhbGxcIiwgdGhpcy5wcm9wcy5pZCwgdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0udmFsdWUgOnVuZGVmaW5lZCwgdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uZmllbGQgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZmVhdHVyZS5saW5rLCBcIl9zZWxmXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWcgPSA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfSB0aXRsZT17dGhpcy5wcm9wcy5mZWF0dXJlLm5hbWV9IHdpZHRoPXt0aGlzLnByb3BzLmZlYXR1cmUud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5mZWF0dXJlLmhlaWdodH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXtjbGlja0V2ZW50fT57aW1nfTxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lVGV4dH0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lLCBjbGFzc05hbWVUZXh0O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2VkID0gISEodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBmZWF0dXJlLmlkZW50aWZpZXIgJiYgZWxlbWVudC52YWx1ZSA9PT0gZmVhdHVyZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXtjaGVja2VkfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBudW1iZXJTcGFuID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zWzBdLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggLTEgOiB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbnVtYmVyU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17XCJzdW1cIn0+IHtudW1iZXJ9IDwvc3Bhbj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX3dyYXBwZXIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZCBjNGctaXRlbS1cIit1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7bnVtYmVyU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImZpX3dyYXBwZXIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZVRleHQgPSBcImZpX3RleHQgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKSArIFwiX3RleHRcIjtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZCBjNGctaXRlbS1cIit1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIGxldCBjbGlja0V2ZW50O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZlYXR1cmUubGluaykge1xuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIsIHRoaXMucHJvcHMuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZmVhdHVyZS5saW5rLCAnX3NlbGYnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW1nID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWcgPSA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfSB0aXRsZT17dGhpcy5wcm9wcy5mZWF0dXJlLm5hbWV9IHdpZHRoPXt0aGlzLnByb3BzLmZlYXR1cmUud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5mZWF0dXJlLmhlaWdodH0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXtjbGlja0V2ZW50fT48c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZVRleHR9PntpbWd9e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTGlzdH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3hcIjtcbmltcG9ydCB7RmlsbCwgU3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBvcGVuaW5nX2hvdXJzIGZyb20gXCJvcGVuaW5nX2hvdXJzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzID0gdGhpcy5maWx0ZXJMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyc011bHRpID0gdGhpcy5maWx0ZXJMYXllcnNNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0T3BlbiA9IHRoaXMuc2V0T3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMudWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja0luc2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyID0gdGhpcy5maWx0ZXJMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmUgPSB0aGlzLmhpZGVGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZU11bHRpID0gdGhpcy5oaWRlRmVhdHVyZU11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gdGhpcy5jYWxsYmFja0Z1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uTXVsdGkgPSB0aGlzLmNhbGxiYWNrRnVuY3Rpb25NdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2ZpbHRlcnNDaGVja2VkJywgSlNPTi5zdHJpbmdpZnkoc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZCkpO1xuICAgICAgICBsZXQgbGF5ZXJzID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZXRDdXJyZW50TGF5ZXJTdGF0ZXMoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcyk7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2xheWVycycsIGxheWVycyk7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3RzdGFtcGM0ZycsIERhdGUubm93KCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyczogW10sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYXJyQ2hlY2tlZDogW10sXG4gICAgICBvcGVuZWRMaXN0OiAtMVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmZpbHRlciA9IHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xuICAgIGxldCBzaG93QnV0dG9ucyA9IGZhbHNlO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZmVhdHVyZS1maWx0ZXItbGlzdFwiKTtcbiAgICBpZiAobGlzdERpdikge1xuICAgICAgc2hvd0J1dHRvbnMgPSAhKGxpc3REaXYuc2Nyb2xsV2lkdGggPD0gbGlzdERpdi5jbGllbnRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dCdXR0b25zID0gc2NvcGUucHJvcHMudGFyZ2V0ICYmICghKHNjb3BlLnByb3BzLnRhcmdldC5zY3JvbGxXaWR0aCA8PSBzY29wZS5wcm9wcy50YXJnZXQuY2xpZW50V2lkdGgpKTtcbiAgICB9XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbnVsbDtcblxuICAgIGlmICghIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVyUmVzZXRCdXR0b24pKSB7XG4gICAgICBsZXQgYm9vbEZpbHRlclJlc2V0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAoIWJvb2xGaWx0ZXJSZXNldCAmJiB0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBib29sRmlsdGVyUmVzZXQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRbaV0uaWRlbnRpZmllciAhPSAnYWxsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib29sRmlsdGVyUmVzZXQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRbaV0gIT0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYm9vbEZpbHRlclJlc2V0KSB7XG4gICAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSwgZmllbGQgPSBcIlwiKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCB0aGlzLmNhbGxiYWNrRnVuY3Rpb24pO1xuICB9XG4gIGNhbGxiYWNrRnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZGlzcGF0Y2hFdmVudCgnY2hhbmdlOmNlbnRlcicpO1xuICB9XG4gIGZpbHRlckxheWVyc011bHRpIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBsZXQgY2hhbmdlZEVudHJ5ID0gbmV3U3RhdGVbbGlzdElkXTtcblxuICAgIGxldCBmb3VuZCA9IGNoYW5nZWRFbnRyeS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IHByb3BlcnR5ICYmIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZpbHRlcnNbbGlzdElkXS5maWx0ZXJzKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5LnB1c2goe1xuICAgICAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJtSW5kZXggPSBjaGFuZ2VkRW50cnkuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGlmIChybUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkRW50cnkuc3BsaWNlKHJtSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IGNoYW5nZWRFbnRyeTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sIHRoaXMuY2FsbGJhY2tGdW5jdGlvbk11bHRpKTtcbiAgfVxuICBjYWxsYmFja0Z1bmN0aW9uTXVsdGkgKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmVNdWx0aSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldE9wZW4gKG9wZW5JZCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZExpc3QgPT09IG9wZW5JZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiBvcGVuSWR9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlciAoKSB7XG4gICAgbGV0IGZpbHRlciA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmICghcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICBmaWx0ZXIucHVzaCh7aWRlbnRpZmllcjogJ2FsbCd9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogZmlsdGVyfSwgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5yZXNldEZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJMYXllciAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckxheWVyTXVsdGkgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgIGlmIChvYmpDaGVja2VkLnZhbHVlID09PSBcIm9wZW5pbmdfaG91cnNcIiAmJiBmZWF0dXJlLmdldChvYmpDaGVja2VkLmZpZWxkIHx8IFwib3BlbmluZ19ob3Vyc1wiKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGZlYXR1cmVIb3VycyA9IG5ldyBvcGVuaW5nX2hvdXJzKGZlYXR1cmUuZ2V0KG9iakNoZWNrZWQuZmllbGQgfHwgXCJvcGVuaW5nX2hvdXJzXCIpLCB7YWRkcmVzczoge2NvdW50cnlfY29kZTogXCJkZVwifX0pO1xuICAgICAgICByZXR1cm4gZmVhdHVyZUhvdXJzLmdldFN0YXRlKCk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy9Ub0RvXG4gICAgICAgIC8vY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghKHByb3BlcnR5ID09PSBcImFsbFwiIHx8IChmZWF0dXJlLmdldChwcm9wZXJ0eSkgJiYgIW9iakNoZWNrZWQudmFsdWUpIHx8ICgob2JqQ2hlY2tlZC52YWx1ZSA9PSBmZWF0dXJlLmdldChwcm9wZXJ0eSkpICYmIG9iakNoZWNrZWQudmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuXG4gIH1cblxuICBoaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdyAmJiBmaWx0ZXJBY3RpdmUpe1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd0ZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXNldEZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzaG93RmVhdHVyZU11bHRpIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93IHx8ICFmaWx0ZXJBY3RpdmUpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxvYWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmZpbHRlciArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmlkICsgXCIvXCIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nO1xuICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICBsZXQgY2FsbGJhY2tGdW5jID0gKCk9PiB7fTtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCEhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiYWxsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgICAgICBpZiAodXRpbHMuZ2V0VmFsdWUoJ3RzdGFtcGM0ZycpICYmIHV0aWxzLmdldFZhbHVlKCd0c3RhbXBjNGcnKSArIDYwNDgwMCA+IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5nZXRWYWx1ZSgnZmlsdGVyc0NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICBsZXQgYXJyVGVtcCA9IEpTT04ucGFyc2UodXRpbHMuZ2V0VmFsdWUoJ2ZpbHRlcnNDaGVja2VkJykpO1xuICAgICAgICAgICAgICBpZiAoYXJyVGVtcC5sZW5ndGggPT09IGpzb25EYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyckNoZWNrZWQgPSBhcnJUZW1wO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyc19sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyA9ICFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykgPyBzY29wZS5jYWxsYmFja0Z1bmN0aW9uIDogc2NvcGUuY2FsbGJhY2tGdW5jdGlvbk11bHRpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxldCBhc3luY0NhbGxiYWNrID0gIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSA/IHNjb3BlLmNhbGxiYWNrRnVuY3Rpb24gOiBzY29wZS5jYWxsYmFja0Z1bmN0aW9uTXVsdGk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaCgobG9sKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmNDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2ZpbHRlcnM6IGpzb25EYXRhLCBhcnJDaGVja2VkOiBhcnJDaGVja2VkfSwgY2FsbGJhY2tGdW5jKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIEZpbHRlckZlYXR1cmVMaXN0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XG4gICAqL1xuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmIHRoaXMud3JhcHBlclJlZi5jdXJyZW50ICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja0luc2lkZShldmVudCkge1xuICAgIGxldCBwYXRoID0gZXZlbnQubmF0aXZlRXZlbnQucGF0aDtcbiAgICBpZiAocGF0aFswXSA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7ZXZ0LnN0b3BQcm9wYWdhdGlvbigpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllciwgdGhpcy5wcm9wcy5wYXJlbnRJZCwgdGhpcy5wcm9wcy5mZWF0dXJlLnZhbHVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jNGdNYXBzVXRpbHMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZlYXR1cmVGaWx0ZXJJdGVtIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMiLCJzY29wZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJldnQiLCJmaWx0ZXJMYXllcnMiLCJmZWF0dXJlIiwiaWRlbnRpZmllciIsInBhcmVudElkIiwiZmllbGQiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJfYzRnRmVhdHVyZUZpbHRlckl0ZW0iLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWVUZXh0IiwiZmlsdGVycyIsImxlbmd0aCIsIm9wZW4iLCJtYXAiLCJpbmRleCIsImlkIiwiY2hlY2tlZEl0ZW0iLCJyZW1vdmVVbWxhdXRzIiwibmFtZSIsImxpQ2xhc3MiLCJvbk1vdXNlVXAiLCJzZXRPcGVuIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJpbWciLCJjbGlja0V2ZW50IiwibGluayIsInVuZGVmaW5lZCIsIndpbmRvdyIsImltYWdlIiwic3JjIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIl9jNGdGZWF0dXJlTXVsdGljaGVja2JveEl0ZW0iLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIiwibnVtYmVyU3BhbiIsIm51bWJlciIsIl9jNGdGZWF0dXJlRmlsdGVyTGlzdCIsIl9jNGdGZWF0dXJlRmlsdGVyTXVsdGljaGVja2JveCIsIl9zdHlsZSIsIl9zb3VyY2UiLCJfYzRnTWFwc0kxOG4iLCJfb3BlbmluZ19ob3VycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJGZWF0dXJlRmlsdGVyIiwiYmluZCIsImZpbHRlckxheWVyc011bHRpIiwid3JhcHBlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJoYW5kbGVDbGlja0luc2lkZSIsImZpbHRlckxheWVyIiwiZmlsdGVyTGF5ZXJNdWx0aSIsImhpZGVGZWF0dXJlIiwiaGlkZUZlYXR1cmVNdWx0aSIsImNhbGxiYWNrRnVuY3Rpb24iLCJjYWxsYmFja0Z1bmN0aW9uTXVsdGkiLCJsb2FkRmlsdGVycyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY2FjaGluZyIsIm9uYmVmb3JldW5sb2FkIiwic3RvcmVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0ZSIsImFyckNoZWNrZWQiLCJsYXllcnMiLCJnZXRDdXJyZW50TGF5ZXJTdGF0ZXMiLCJhcnJMYXllclN0YXRlcyIsIkRhdGUiLCJub3ciLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJmaWx0ZXIiLCJfdGhpczIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJib29sRmlsdGVyUmVzZXQiLCJmaWx0ZXJIYW5kbGluZyIsInJlc2V0RmlsdGVyIiwiUkVTRVRfRklMVEVSIiwiZGl2IiwicmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsImFyZ3VtZW50cyIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJfdGhpczMiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJnZXRWaWV3IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZWRFbnRyeSIsImZvdW5kIiwicGFyc2UiLCJwdXNoIiwicm1JbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJfdGhpczQiLCJzaG93RmVhdHVyZU11bHRpIiwib3BlbklkIiwiX3RoaXM1IiwicmVzZXRGZWF0dXJlIiwibGF5ZXIiLCJfdGhpczYiLCJnZXRTdHlsZSIsImdldFNvdXJjZSIsInNvdXJjZSIsIkNsdXN0ZXIiLCJmb3JFYWNoRmVhdHVyZSIsIl90aGlzNyIsImNoZWNrRmVhdHVyZSIsIm9iakNoZWNrZWQiLCJmZWF0dXJlSG91cnMiLCJvcGVuaW5nX2hvdXJzIiwiYWRkcmVzcyIsImNvdW50cnlfY29kZSIsImdldFN0YXRlIiwiZXJyb3IiLCJjaGVja0ZlYXR1cmVNdWx0aSIsIl90aGlzOCIsImZvckVhY2giLCJzaG93IiwicmVtb3ZlRmVhdHVyZSIsIl90aGlzOSIsImZpbHRlckFjdGl2ZSIsImZlYXR1cmVQcm9wZXJ0eSIsImFkZEZlYXR1cmUiLCJ1cmwiLCJhcGkiLCJsYW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJjYWxsYmFja0Z1bmMiLCJnZXRWYWx1ZSIsImFyclRlbXAiLCJwcm94eSIsImxheWVyc19sb2FkZWQiLCJhc3luY0NhbGxiYWNrIiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwibG9sIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==