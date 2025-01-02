"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailContactField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailContactField.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailContactField.jsx ***!
  \**********************************************************************/
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
var _DetailOSMOpeningHoursField = _interopRequireDefault(__webpack_require__(/*! ./DetailOSMOpeningHoursField.jsx */ "./src/Resources/public/js/detail/fields/DetailOSMOpeningHoursField.jsx"));
var _DetailLinkField = _interopRequireDefault(__webpack_require__(/*! ./DetailLinkField.jsx */ "./src/Resources/public/js/detail/fields/DetailLinkField.jsx"));
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
var DetailContactField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailContactField(props) {
    (0, _classCallCheck2["default"])(this, DetailContactField);
    return _callSuper(this, DetailContactField, [props]);
  }
  (0, _inherits2["default"])(DetailContactField, _Component);
  return (0, _createClass2["default"])(DetailContactField, [{
    key: "render",
    value: function render() {
      var _this = this;
      var label = null;
      var email = null;
      var phone = null;
      var website = null;
      var openingTimes = null;
      var address = null;
      var socialMedia = null;
      if (this.props.data[this.props.field.emailFieldName] || this.props.data[this.props.field.phoneFieldName] || this.props.data[this.props.field.websiteFieldName] || this.props.data[this.props.field.openingTimesFieldName] || this.props.field.addressFieldnamePrefix || this.props.field.withSocialMedia) {
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("h2", null, this.props.field.label);
        }
      }
      if (this.props.data[this.props.field.emailFieldName]) {
        var emailAddress = this.props.data[this.props.field.emailFieldName];
        var href = "mailto:" + emailAddress;
        email = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "entry-content email",
          itemProp: "email"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: href
        }, emailAddress)));
      }
      if (this.props.data[this.props.field.phoneFieldName]) {
        var phoneNumber = this.props.data[this.props.field.phoneFieldName];
        var _href = "tel:" + phoneNumber;
        phone = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "entry-content phone",
          itemProp: "phone"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: _href
        }, phoneNumber)));
      }
      if (this.props.data[this.props.field.websiteFieldName]) {
        var _href2 = this.props.data[this.props.field.websiteFieldName];
        website = /*#__PURE__*/_react["default"].createElement("span", {
          className: "entry-content website"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: _href2
        }, this.props.languageRefs.WEBSITE));
      }
      if (this.props.data[this.props.field.openingTimesFieldName]) {
        var field = this.props.field;
        field.name = this.props.field.openingTimesFieldName;
        openingTimes = /*#__PURE__*/_react["default"].createElement(_DetailOSMOpeningHoursField["default"], {
          data: this.props.data,
          field: field,
          languageRefs: this.props.languageRefs
        });
      }
      if (this.props.field.addressFieldnamePrefix) {
        var addressData = this.createAddressData();
        address = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
          className: "entry-content name"
        }, addressData.name), /*#__PURE__*/_react["default"].createElement("span", {
          className: "entry-content additionalName"
        }, addressData.additionalName), /*#__PURE__*/_react["default"].createElement("div", {
          className: "street"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "street"
        }, addressData.street), "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
          className: "streetNumber"
        }, addressData.streetNumber)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "entry-content"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "zip"
        }, addressData.zip), "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
          className: "city"
        }, addressData.city)));
      }
      if (this.props.field.withSocialMedia) {
        socialMedia = this.props.field.socialMediaFields.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_DetailLinkField["default"], {
            key: index,
            field: item,
            data: _this.props.data,
            languageRefs: _this.props.languageRefs
          });
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "detail-field-contact" + (this.props.field["class"] ? " " + this.props.field["class"] : "")
      }, label, address, phone, email, website, openingTimes, socialMedia);
    }
  }, {
    key: "createAddressData",
    value: function createAddressData() {
      var prefix = this.props.field.addressFieldnamePrefix;
      var fallback = this.props.field.addressFieldnameFallbackPrefix;
      var data = this.props.data;
      var addressData = {};
      // name
      if (data[prefix + "Name"]) {
        addressData.name = data[prefix + "Name"];
      } else if (data[fallback + "Name"]) {
        addressData.name = data[fallback + "Name"];
      }
      // additional name
      if (data[prefix + "AdditionalName"]) {
        addressData.additionalName = data[prefix + "AdditionalName"];
      } else if (data[fallback + "AdditionalName"]) {
        addressData.additionalName = data[fallback + "AdditionalName"];
      }
      // street
      if (data[prefix + "Street"]) {
        addressData.street = data[prefix + "Street"];
      } else if (data[fallback + "Street"]) {
        addressData.street = data[fallback + "Street"];
      }
      // streetnumber
      if (data[prefix + "StreetNumber"]) {
        addressData.streetNumber = data[prefix + "StreetNumber"];
      } else if (data[fallback + "StreetNumber"]) {
        addressData.streetNumber = data[fallback + "StreetNumber"];
      }
      if (addressData.streetNumber === 0 || addressData.streetNumber === '0') {
        addressData.streetNumber = '';
      }

      // zip
      if (data[prefix + "Zip"]) {
        addressData.zip = data[prefix + "Zip"];
      } else if (data[fallback + "Zip"]) {
        addressData.zip = data[fallback + "Zip"];
      }
      // city
      if (data[prefix + "City"]) {
        addressData.city = data[prefix + "City"];
      } else if (data[fallback + "City"]) {
        addressData.city = data[fallback + "City"];
      }
      return addressData;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/detail/fields/DetailLinkField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailLinkField.jsx ***!
  \*******************************************************************/
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
var DetailLinkField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailLinkField(props) {
    (0, _classCallCheck2["default"])(this, DetailLinkField);
    return _callSuper(this, DetailLinkField, [props]);
  }
  (0, _inherits2["default"])(DetailLinkField, _Component);
  return (0, _createClass2["default"])(DetailLinkField, [{
    key: "render",
    value: function render() {
      if (this.props.data[this.props.field.name]) {
        var icon = null;
        if (this.props.field.icon) {
          icon = /*#__PURE__*/_react["default"].createElement("i", {
            className: this.props.field.icon
          });
        }
        var className = "";
        if (this.props.field["class"]) {
          className = this.props.field["class"];
        }
        if (this.props.tagType) {
          className += " " + this.props.tagType;
        }
        var target = " ";
        if (this.props.targetBlank) {
          target = "_blank";
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, icon, /*#__PURE__*/_react["default"].createElement("a", {
          target: target,
          href: this.props.data[this.props.field.name]
        }, this.props.data[this.props.field.linkTextName] || this.props.field.linkText));
      } else {
        return null;
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxDb250YWN0RmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLDJCQUFBLEdBQUFDLHNCQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsZ0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBb0QsU0FBQUkseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFOLHdCQUFBTSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FB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RSxhQUFBO1VBQUc0QixNQUFNLEVBQUVBLE1BQU87VUFBQzFCLElBQUksRUFBRSxJQUFJLENBQUN6QixLQUFLLENBQUNlLElBQUksQ0FBQyxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ2dCLElBQUk7UUFBRSxHQUFFLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDcUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDckQsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDc0MsUUFBWSxDQUM5SSxDQUFDO01BRVYsQ0FBQyxNQUFNO1FBQ0wsT0FBTyxJQUFJO01BQ2I7SUFDRjtFQUFDO0FBQUEsRUFuQzBDUCxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2RldGFpbC9maWVsZHMvRGV0YWlsQ29udGFjdEZpZWxkLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9kZXRhaWwvZmllbGRzL0RldGFpbExpbmtGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkIGZyb20gXCIuL0RldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkLmpzeFwiO1xuaW1wb3J0IERldGFpbExpbmtGaWVsZCBmcm9tIFwiLi9EZXRhaWxMaW5rRmllbGQuanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbENvbnRhY3RGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGxldCBlbWFpbCA9IG51bGw7XG4gICAgbGV0IHBob25lID0gbnVsbDtcbiAgICBsZXQgd2Vic2l0ZSA9IG51bGw7XG4gICAgbGV0IG9wZW5pbmdUaW1lcyA9IG51bGw7XG4gICAgbGV0IGFkZHJlc3MgPSBudWxsO1xuICAgIGxldCBzb2NpYWxNZWRpYSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQuZW1haWxGaWVsZE5hbWVdIHx8XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLnBob25lRmllbGROYW1lXSB8fFxuICAgICAgICB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC53ZWJzaXRlRmllbGROYW1lXSB8fFxuICAgICAgICB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5vcGVuaW5nVGltZXNGaWVsZE5hbWVdIHx8XG4gICAgICAgIHRoaXMucHJvcHMuZmllbGQuYWRkcmVzc0ZpZWxkbmFtZVByZWZpeCB8fFxuICAgICAgICB0aGlzLnByb3BzLmZpZWxkLndpdGhTb2NpYWxNZWRpYVxuICAgICkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSA8aDI+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9oMj47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLmVtYWlsRmllbGROYW1lXSkge1xuICAgICAgbGV0IGVtYWlsQWRkcmVzcyA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLmVtYWlsRmllbGROYW1lXTtcbiAgICAgIGxldCBocmVmID0gXCJtYWlsdG86XCIgKyBlbWFpbEFkZHJlc3M7XG4gICAgICBlbWFpbCA9ICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbnRyeS1jb250ZW50IGVtYWlsXCJ9IGl0ZW1Qcm9wPXtcImVtYWlsXCJ9PlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2VtYWlsQWRkcmVzc308L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQucGhvbmVGaWVsZE5hbWVdKSB7XG4gICAgICBsZXQgcGhvbmVOdW1iZXIgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5waG9uZUZpZWxkTmFtZV07XG4gICAgICBsZXQgaHJlZiA9IFwidGVsOlwiICsgcGhvbmVOdW1iZXI7XG4gICAgICBwaG9uZSA9ICg8UmVhY3QuRnJhZ21lbnQ+PHNwYW4gY2xhc3NOYW1lPXtcImVudHJ5LWNvbnRlbnQgcGhvbmVcIn0gaXRlbVByb3A9e1wicGhvbmVcIn0+XG4gICAgICAgICAgICA8YSBocmVmPXtocmVmfT57cGhvbmVOdW1iZXJ9PC9hPlxuICAgICAgPC9zcGFuPjwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLndlYnNpdGVGaWVsZE5hbWVdKSB7XG4gICAgICBsZXQgaHJlZiA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLndlYnNpdGVGaWVsZE5hbWVdO1xuICAgICAgd2Vic2l0ZSA9ICg8c3BhbiBjbGFzc05hbWU9e1wiZW50cnktY29udGVudCB3ZWJzaXRlXCJ9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9Pnt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5XRUJTSVRFfTwvYT5cbiAgICAgICAgPC9zcGFuPik7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5vcGVuaW5nVGltZXNGaWVsZE5hbWVdKSB7XG4gICAgICBsZXQgZmllbGQgPSB0aGlzLnByb3BzLmZpZWxkO1xuICAgICAgZmllbGQubmFtZSA9IHRoaXMucHJvcHMuZmllbGQub3BlbmluZ1RpbWVzRmllbGROYW1lO1xuICAgICAgb3BlbmluZ1RpbWVzID0gPERldGFpbE9TTU9wZW5pbmdIb3Vyc0ZpZWxkIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gZmllbGQ9e2ZpZWxkfSBsYW5ndWFnZVJlZnM9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzfS8+XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuYWRkcmVzc0ZpZWxkbmFtZVByZWZpeCkge1xuICAgICAgbGV0IGFkZHJlc3NEYXRhID0gdGhpcy5jcmVhdGVBZGRyZXNzRGF0YSgpO1xuICAgICAgYWRkcmVzcyA9IDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e1wiZW50cnktY29udGVudCBuYW1lXCJ9PnthZGRyZXNzRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJlbnRyeS1jb250ZW50IGFkZGl0aW9uYWxOYW1lXCJ9PnthZGRyZXNzRGF0YS5hZGRpdGlvbmFsTmFtZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN0cmVldFwifT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wic3RyZWV0XCJ9PnthZGRyZXNzRGF0YS5zdHJlZXR9PC9zcGFuPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJzdHJlZXROdW1iZXJcIn0+e2FkZHJlc3NEYXRhLnN0cmVldE51bWJlcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlbnRyeS1jb250ZW50XCJ9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ6aXBcIn0+e2FkZHJlc3NEYXRhLnppcH08L3NwYW4+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImNpdHlcIn0+e2FkZHJlc3NEYXRhLmNpdHl9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLndpdGhTb2NpYWxNZWRpYSkge1xuICAgICAgc29jaWFsTWVkaWEgPSB0aGlzLnByb3BzLmZpZWxkLnNvY2lhbE1lZGlhRmllbGRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxMaW5rRmllbGQga2V5PXtpbmRleH0gZmllbGQ9e2l0ZW19IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc30vPlxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZXRhaWwtZmllbGQtY29udGFjdFwiICsgKHRoaXMucHJvcHMuZmllbGQuY2xhc3MgPyBcIiBcIiArIHRoaXMucHJvcHMuZmllbGQuY2xhc3MgOiBcIlwiKX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAge2FkZHJlc3N9XG4gICAgICAgIHtwaG9uZX1cbiAgICAgICAge2VtYWlsfVxuICAgICAgICB7d2Vic2l0ZX1cbiAgICAgICAge29wZW5pbmdUaW1lc31cbiAgICAgICAge3NvY2lhbE1lZGlhfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZUFkZHJlc3NEYXRhKCkge1xuICAgIGxldCBwcmVmaXggPSB0aGlzLnByb3BzLmZpZWxkLmFkZHJlc3NGaWVsZG5hbWVQcmVmaXg7XG4gICAgbGV0IGZhbGxiYWNrID0gdGhpcy5wcm9wcy5maWVsZC5hZGRyZXNzRmllbGRuYW1lRmFsbGJhY2tQcmVmaXg7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBsZXQgYWRkcmVzc0RhdGEgPSB7fTtcbiAgICAvLyBuYW1lXG4gICAgaWYgKGRhdGFbcHJlZml4ICsgXCJOYW1lXCJdKSB7XG4gICAgICBhZGRyZXNzRGF0YS5uYW1lID0gZGF0YVtwcmVmaXggKyBcIk5hbWVcIl07XG4gICAgfSBlbHNlIGlmIChkYXRhW2ZhbGxiYWNrICsgXCJOYW1lXCJdKSB7XG4gICAgICBhZGRyZXNzRGF0YS5uYW1lID0gZGF0YVtmYWxsYmFjayArIFwiTmFtZVwiXTtcbiAgICB9XG4gICAgLy8gYWRkaXRpb25hbCBuYW1lXG4gICAgaWYgKGRhdGFbcHJlZml4ICsgXCJBZGRpdGlvbmFsTmFtZVwiXSkge1xuICAgICAgYWRkcmVzc0RhdGEuYWRkaXRpb25hbE5hbWUgPSBkYXRhW3ByZWZpeCArIFwiQWRkaXRpb25hbE5hbWVcIl07XG4gICAgfSBlbHNlIGlmIChkYXRhW2ZhbGxiYWNrICsgXCJBZGRpdGlvbmFsTmFtZVwiXSkge1xuICAgICAgYWRkcmVzc0RhdGEuYWRkaXRpb25hbE5hbWUgPSBkYXRhW2ZhbGxiYWNrICsgXCJBZGRpdGlvbmFsTmFtZVwiXTtcbiAgICB9XG4gICAgLy8gc3RyZWV0XG4gICAgaWYgKGRhdGFbcHJlZml4ICsgXCJTdHJlZXRcIl0pIHtcbiAgICAgIGFkZHJlc3NEYXRhLnN0cmVldCA9IGRhdGFbcHJlZml4ICsgXCJTdHJlZXRcIl07XG4gICAgfSBlbHNlIGlmIChkYXRhW2ZhbGxiYWNrICsgXCJTdHJlZXRcIl0pIHtcbiAgICAgIGFkZHJlc3NEYXRhLnN0cmVldCA9IGRhdGFbZmFsbGJhY2sgKyBcIlN0cmVldFwiXTtcbiAgICB9XG4gICAgLy8gc3RyZWV0bnVtYmVyXG4gICAgaWYgKGRhdGFbcHJlZml4ICsgXCJTdHJlZXROdW1iZXJcIl0pIHtcbiAgICAgIGFkZHJlc3NEYXRhLnN0cmVldE51bWJlciA9IGRhdGFbcHJlZml4ICsgXCJTdHJlZXROdW1iZXJcIl07XG4gICAgfSBlbHNlIGlmIChkYXRhW2ZhbGxiYWNrICsgXCJTdHJlZXROdW1iZXJcIl0pIHtcbiAgICAgIGFkZHJlc3NEYXRhLnN0cmVldE51bWJlciA9IGRhdGFbZmFsbGJhY2sgKyBcIlN0cmVldE51bWJlclwiXTtcbiAgICB9XG5cbiAgICBpZiAoYWRkcmVzc0RhdGEuc3RyZWV0TnVtYmVyID09PSAwIHx8IGFkZHJlc3NEYXRhLnN0cmVldE51bWJlciA9PT0gJzAnKSB7XG4gICAgICBhZGRyZXNzRGF0YS5zdHJlZXROdW1iZXIgPSAnJztcbiAgICB9XG5cbiAgICAvLyB6aXBcbiAgICBpZiAoZGF0YVtwcmVmaXggKyBcIlppcFwiXSkge1xuICAgICAgYWRkcmVzc0RhdGEuemlwID0gZGF0YVtwcmVmaXggKyBcIlppcFwiXTtcbiAgICB9IGVsc2UgaWYgKGRhdGFbZmFsbGJhY2sgKyBcIlppcFwiXSkge1xuICAgICAgYWRkcmVzc0RhdGEuemlwID0gZGF0YVtmYWxsYmFjayArIFwiWmlwXCJdO1xuICAgIH1cbiAgICAvLyBjaXR5XG4gICAgaWYgKGRhdGFbcHJlZml4ICsgXCJDaXR5XCJdKSB7XG4gICAgICBhZGRyZXNzRGF0YS5jaXR5ID0gZGF0YVtwcmVmaXggKyBcIkNpdHlcIl07XG4gICAgfSBlbHNlIGlmIChkYXRhW2ZhbGxiYWNrICsgXCJDaXR5XCJdKSB7XG4gICAgICBhZGRyZXNzRGF0YS5jaXR5ID0gZGF0YVtmYWxsYmFjayArIFwiQ2l0eVwiXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkcmVzc0RhdGE7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbExpbmtGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSkge1xuICAgICAgbGV0IGljb24gPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaWNvbikge1xuICAgICAgICBpY29uID0gPGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmljb259PjwvaT47XG4gICAgICB9XG4gICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmNsYXNzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZmllbGQuY2xhc3M7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy50YWdUeXBlKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMucHJvcHMudGFnVHlwZTtcbiAgICAgIH1cbiAgICAgIGxldCB0YXJnZXQgPSBcIiBcIjtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRhcmdldEJsYW5rKSB7XG4gICAgICAgIHRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICAgIDxhIHRhcmdldD17dGFyZ2V0fSBocmVmPXt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXX0+e3RoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLmxpbmtUZXh0TmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC5saW5rVGV4dH08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9EZXRhaWxPU01PcGVuaW5nSG91cnNGaWVsZCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfRGV0YWlsTGlua0ZpZWxkIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJEZXRhaWxDb250YWN0RmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsImxhYmVsIiwiZW1haWwiLCJwaG9uZSIsIndlYnNpdGUiLCJvcGVuaW5nVGltZXMiLCJhZGRyZXNzIiwic29jaWFsTWVkaWEiLCJkYXRhIiwiZmllbGQiLCJlbWFpbEZpZWxkTmFtZSIsInBob25lRmllbGROYW1lIiwid2Vic2l0ZUZpZWxkTmFtZSIsIm9wZW5pbmdUaW1lc0ZpZWxkTmFtZSIsImFkZHJlc3NGaWVsZG5hbWVQcmVmaXgiLCJ3aXRoU29jaWFsTWVkaWEiLCJjcmVhdGVFbGVtZW50IiwiZW1haWxBZGRyZXNzIiwiaHJlZiIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaXRlbVByb3AiLCJwaG9uZU51bWJlciIsImxhbmd1YWdlUmVmcyIsIldFQlNJVEUiLCJuYW1lIiwiYWRkcmVzc0RhdGEiLCJjcmVhdGVBZGRyZXNzRGF0YSIsImFkZGl0aW9uYWxOYW1lIiwic3RyZWV0Iiwic3RyZWV0TnVtYmVyIiwiemlwIiwiY2l0eSIsInNvY2lhbE1lZGlhRmllbGRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHJlZml4IiwiZmFsbGJhY2siLCJhZGRyZXNzRmllbGRuYW1lRmFsbGJhY2tQcmVmaXgiLCJDb21wb25lbnQiLCJEZXRhaWxMaW5rRmllbGQiLCJpY29uIiwidGFnVHlwZSIsInRhcmdldCIsInRhcmdldEJsYW5rIiwibGlua1RleHROYW1lIiwibGlua1RleHQiXSwic291cmNlUm9vdCI6IiJ9