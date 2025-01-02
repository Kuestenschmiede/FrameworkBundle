"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileImageField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileImageField.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileImageField.jsx ***!
  \*****************************************************************/
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
var Condition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_condition_Condition_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../condition/Condition.jsx */ "./src/Resources/public/js/condition/Condition.jsx"));
});
var TileImageField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileImageField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileImageField);
    _this = _callSuper(this, TileImageField, [props]);
    _this.hasValidExternalLink = _this.hasValidExternalLink.bind(_this);
    _this.executeAsyncCall = _this.executeAsyncCall.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TileImageField, _Component);
  return (0, _createClass2["default"])(TileImageField, [{
    key: "hasValidExternalLink",
    value: function hasValidExternalLink() {
      if (!this.props.field.externalLinkField) {
        return false;
      }
      try {
        var valid = false;
        if (this.props.field.externalLinkFieldConditionField.length === 0) {
          return true;
        }
        if (this.props.field.externalLinkFieldConditionField.length === this.props.field.externalLinkFieldConditionValue.length) {
          this.props.field.externalLinkFieldConditionField.forEach(function (element, index) {
            if (String(this.props.data[element]) === String(this.props.field.externalLinkFieldConditionValue[index])) {
              valid = true;
            }
          }, this);
          return valid;
        }
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.data[this.props.field.name] || this.props.field.imageSource) {
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
        var height, width;
        if (this.props.data[this.props.field.name]) {
          if (this.props.data[this.props.field.name].height) {
            height = this.props.data[this.props.field.name].height;
          }
          if (this.props.data[this.props.field.name].width) {
            width = this.props.data[this.props.field.name].width;
          }
        }
        if (!height && this.props.field.height) {
          height = this.props.field.height;
        }
        if (!width && this.props.field.width) {
          width = this.props.field.width;
        }
        var href = this.props.field.href;
        if (this.hasValidExternalLink()) {
          href = this.props.data[this.props.field.externalLinkField];
        } else {
          if (this.props.field.hrefFields) {
            this.props.field.hrefFields.map(function (item, id) {
              href = href.replace(item, _this2.props.data[item]);
            });
          }
        }
        if (href) {
          return /*#__PURE__*/_react["default"].createElement(Condition, {
            data: this.props.data,
            conditions: this.props.field.conditions
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.field.wrapperClass
          }, label, /*#__PURE__*/_react["default"].createElement("a", {
            href: href,
            rel: "noreferrer noopener",
            "data-name": this.props.data['name'],
            "data-moreurl": href
          }, /*#__PURE__*/_react["default"].createElement("img", {
            className: this.props.field["class"],
            height: height,
            width: width,
            itemProp: itemProp,
            loading: "lazy",
            src: this.props.field.imageSource || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src,
            alt: this.props.field.imageAlt || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt,
            title: this.props.field.title || this.props.field.imageAlt || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt
          }))));
        } else {
          return /*#__PURE__*/_react["default"].createElement(Condition, {
            data: this.props.data,
            conditions: this.props.field.conditions
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.field.wrapperClass
          }, label, /*#__PURE__*/_react["default"].createElement("img", {
            className: this.props.field["class"],
            itemProp: itemProp,
            loading: "lazy",
            height: height,
            width: width,
            src: this.props.field.imageSource || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].src,
            alt: this.props.field.imageAlt || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt,
            title: this.props.field.title || this.props.field.imageAlt || this.props.data[this.props.field.name] && this.props.data[this.props.field.name].alt
          })));
        }
      }
      return '';
    }
  }, {
    key: "executeAsyncCall",
    value: function executeAsyncCall(href) {
      var _this3 = this;
      var scope = this;
      var data = new FormData();
      Object.entries(this.props.data).forEach(function (entry) {
        data.set(entry[0], String(entry[1]));
      });
      fetch(href, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: data
      }).then(function (response) {
        try {
          response.json().then(function (json) {
            if (String(_this3.props.field.redirectPageOnSuccess) !== '') {
              window.location = String(_this3.props.field.redirectPageOnSuccess);
            }
            if (json.updatedData) {
              var newDataEntry = _this3.props.data;
              var newData = _this3.props.list.props.data;
              if (json.updateType === "single") {
                for (var key in json.updatedData) {
                  if (json.updatedData.hasOwnProperty(key)) {
                    newDataEntry[key] = json.updatedData[key];
                  }
                }
                for (var i = 0; i < newData.length; i++) {
                  if (newData[i].id === newDataEntry.id) {
                    newData[i] = newDataEntry;
                    break;
                  }
                }
              } else if (json.updateType === "all") {
                newData = json.updatedData;
              } else {
                // if nothing set, fall back to all
                newData = json.updatedData;
              }
              scope.props.list.props.setFunction(scope.props.list.props.name, newData, []);
            }
          });
        } catch (e) {}
      });

      // check for hook that needs to be executed
      if (this.props.field.hookAfterClick && this.props.field.hookName) {
        if (window.c4gHooks && window.c4gHooks[this.props.field.hookName]) {
          for (var i = 0; i < window.c4gHooks[this.props.field.hookName].length; i++) {
            if (typeof window.c4gHooks[this.props.field.hookName][i] === "function") {
              window.c4gHooks[this.props.field.hookName][i](this.props.field, this.props.data);
            }
          }
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVJbWFnZUZpZWxkX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVB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QUMsQ0FBQyxPQUFPeEcsQ0FBQyxFQUFFLENBQUM7TUFDZixDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFJLElBQUksQ0FBQ3FDLEtBQUssQ0FBQ1UsS0FBSyxDQUFDNkQsY0FBYyxJQUFJLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQ1UsS0FBSyxDQUFDOEQsUUFBUSxFQUFFO1FBQ2hFLElBQUlULE1BQU0sQ0FBQ1UsUUFBUSxJQUFJVixNQUFNLENBQUNVLFFBQVEsQ0FBQyxJQUFJLENBQUN6RSxLQUFLLENBQUNVLEtBQUssQ0FBQzhELFFBQVEsQ0FBQyxFQUFFO1VBQ2pFLEtBQUssSUFBSTVGLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR21GLE1BQU0sQ0FBQ1UsUUFBUSxDQUFDLElBQUksQ0FBQ3pFLEtBQUssQ0FBQ1UsS0FBSyxDQUFDOEQsUUFBUSxDQUFDLENBQUMxRCxNQUFNLEVBQUVsQyxDQUFDLEVBQUUsRUFBRTtZQUMxRSxJQUFJLE9BQU9tRixNQUFNLENBQUNVLFFBQVEsQ0FBQyxJQUFJLENBQUN6RSxLQUFLLENBQUNVLEtBQUssQ0FBQzhELFFBQVEsQ0FBQyxDQUFDNUYsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO2NBQ3ZFbUYsTUFBTSxDQUFDVSxRQUFRLENBQUMsSUFBSSxDQUFDekUsS0FBSyxDQUFDVSxLQUFLLENBQUM4RCxRQUFRLENBQUMsQ0FBQzVGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ29CLEtBQUssQ0FBQ1UsS0FBSyxFQUFFLElBQUksQ0FBQ1YsS0FBSyxDQUFDb0IsSUFBSSxDQUFDO1lBQ2xGO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7RUFBQztBQUFBLEVBOUt5Q3NELGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGlsZXMvZmllbGRzL1RpbGVJbWFnZUZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbmRpdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29uZGl0aW9uL0NvbmRpdGlvbi5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlSW1hZ2VGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFzVmFsaWRFeHRlcm5hbExpbmsgPSB0aGlzLmhhc1ZhbGlkRXh0ZXJuYWxMaW5rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leGVjdXRlQXN5bmNDYWxsID0gdGhpcy5leGVjdXRlQXN5bmNDYWxsLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYXNWYWxpZEV4dGVybmFsTGluaygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZmllbGQuZXh0ZXJuYWxMaW5rRmllbGQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5leHRlcm5hbExpbmtGaWVsZENvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmV4dGVybmFsTGlua0ZpZWxkQ29uZGl0aW9uRmllbGQubGVuZ3RoID09PSB0aGlzLnByb3BzLmZpZWxkLmV4dGVybmFsTGlua0ZpZWxkQ29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmllbGQuZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25GaWVsZC5mb3JFYWNoKFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGlmIChTdHJpbmcodGhpcy5wcm9wcy5kYXRhW2VsZW1lbnRdKSA9PT0gU3RyaW5nKHRoaXMucHJvcHMuZmllbGQuZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25WYWx1ZVtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gfHwgdGhpcy5wcm9wcy5maWVsZC5pbWFnZVNvdXJjZSkge1xuICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtcImVudHJ5LWxhYmVsXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvc3Bhbj47XG4gICAgICB9XG4gICAgICBsZXQgaXRlbVByb3AgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuaXRlbVByb3ApIHtcbiAgICAgICAgaXRlbVByb3AgPSB0aGlzLnByb3BzLmZpZWxkLml0ZW1Qcm9wO1xuICAgICAgfVxuICAgICAgbGV0IGhlaWdodCwgd2lkdGg7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmhlaWdodCkge1xuICAgICAgICAgIGhlaWdodCA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0ud2lkdGgpIHtcbiAgICAgICAgICB3aWR0aCA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWhlaWdodCAmJiB0aGlzLnByb3BzLmZpZWxkLmhlaWdodCkge1xuICAgICAgICBoZWlnaHQgPSB0aGlzLnByb3BzLmZpZWxkLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmICghd2lkdGggJiYgdGhpcy5wcm9wcy5maWVsZC53aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHRoaXMucHJvcHMuZmllbGQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGxldCBocmVmID0gdGhpcy5wcm9wcy5maWVsZC5ocmVmO1xuXG4gICAgICBpZiAodGhpcy5oYXNWYWxpZEV4dGVybmFsTGluaygpKSB7XG4gICAgICAgIGhyZWYgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5leHRlcm5hbExpbmtGaWVsZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5ocmVmRmllbGRzKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5maWVsZC5ocmVmRmllbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoaXRlbSwgdGhpcy5wcm9wcy5kYXRhW2l0ZW1dKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaHJlZikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb25kaXRpb24gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBjb25kaXRpb25zPXt0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbnN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwZXJDbGFzc30+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8YSBocmVmPXtocmVmfSByZWw9e1wibm9yZWZlcnJlciBub29wZW5lclwifSBkYXRhLW5hbWU9e3RoaXMucHJvcHMuZGF0YVsnbmFtZSddfSBkYXRhLW1vcmV1cmw9e2hyZWZ9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQuY2xhc3N9XG4gICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPXtpdGVtUHJvcH0gbG9hZGluZz17XCJsYXp5XCJ9XG4gICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5maWVsZC5pbWFnZVNvdXJjZSB8fCAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0uc3JjKX1cbiAgICAgICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmZpZWxkLmltYWdlQWx0IHx8ICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5hbHQpfVxuICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5maWVsZC50aXRsZSB8fCB0aGlzLnByb3BzLmZpZWxkLmltYWdlQWx0IHx8ICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXS5hbHQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbmRpdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENvbmRpdGlvbiBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGNvbmRpdGlvbnM9e3RoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQud3JhcHBlckNsYXNzfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLmNsYXNzfVxuICAgICAgICAgICAgICAgICBpdGVtUHJvcD17aXRlbVByb3B9IGxvYWRpbmc9e1wibGF6eVwifVxuICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuZmllbGQuaW1hZ2VTb3VyY2UgfHwgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdICYmIHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnNyYyl9XG4gICAgICAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5maWVsZC5pbWFnZUFsdCB8fCAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0uYWx0KX1cbiAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuZmllbGQudGl0bGUgfHwgdGhpcy5wcm9wcy5maWVsZC5pbWFnZUFsdCB8fCAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gJiYgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0uYWx0KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db25kaXRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuICgnJylcblxuICB9XG5cbiAgZXhlY3V0ZUFzeW5jQ2FsbChocmVmKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmRhdGEpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBkYXRhLnNldChlbnRyeVswXSwgU3RyaW5nKGVudHJ5WzFdKSk7XG4gICAgfSk7XG5cbiAgICBmZXRjaChocmVmLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGlmIChTdHJpbmcodGhpcy5wcm9wcy5maWVsZC5yZWRpcmVjdFBhZ2VPblN1Y2Nlc3MpICE9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gU3RyaW5nKHRoaXMucHJvcHMuZmllbGQucmVkaXJlY3RQYWdlT25TdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGpzb24udXBkYXRlZERhdGEpIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRhRW50cnkgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHRoaXMucHJvcHMubGlzdC5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgaWYgKGpzb24udXBkYXRlVHlwZSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4ganNvbi51cGRhdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChqc29uLnVwZGF0ZWREYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0RhdGFFbnRyeVtrZXldID0ganNvbi51cGRhdGVkRGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YVtpXS5pZCA9PT0gbmV3RGF0YUVudHJ5LmlkKSB7XG4gICAgICAgICAgICAgICAgICBuZXdEYXRhW2ldID0gbmV3RGF0YUVudHJ5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb24udXBkYXRlVHlwZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICBuZXdEYXRhID0ganNvbi51cGRhdGVkRGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgc2V0LCBmYWxsIGJhY2sgdG8gYWxsXG4gICAgICAgICAgICAgIG5ld0RhdGEgPSBqc29uLnVwZGF0ZWREYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcGUucHJvcHMubGlzdC5wcm9wcy5zZXRGdW5jdGlvbihzY29wZS5wcm9wcy5saXN0LnByb3BzLm5hbWUsIG5ld0RhdGEsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrIGZvciBob29rIHRoYXQgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5ob29rQWZ0ZXJDbGljayAmJiB0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lKSB7XG4gICAgICBpZiAod2luZG93LmM0Z0hvb2tzICYmIHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmM0Z0hvb2tzW3RoaXMucHJvcHMuZmllbGQuaG9va05hbWVdW2ldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXVtpXSh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQ29uZGl0aW9uIiwiUmVhY3QiLCJsYXp5IiwiVGlsZUltYWdlRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiaGFzVmFsaWRFeHRlcm5hbExpbmsiLCJiaW5kIiwiZXhlY3V0ZUFzeW5jQ2FsbCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJmaWVsZCIsImV4dGVybmFsTGlua0ZpZWxkIiwidmFsaWQiLCJleHRlcm5hbExpbmtGaWVsZENvbmRpdGlvbkZpZWxkIiwibGVuZ3RoIiwiZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25WYWx1ZSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJTdHJpbmciLCJkYXRhIiwicmVuZGVyIiwiX3RoaXMyIiwibmFtZSIsImltYWdlU291cmNlIiwibGFiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaXRlbVByb3AiLCJoZWlnaHQiLCJ3aWR0aCIsImhyZWYiLCJocmVmRmllbGRzIiwibWFwIiwiaXRlbSIsImlkIiwicmVwbGFjZSIsImNvbmRpdGlvbnMiLCJ3cmFwcGVyQ2xhc3MiLCJyZWwiLCJsb2FkaW5nIiwic3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJ0aXRsZSIsIl90aGlzMyIsInNjb3BlIiwiRm9ybURhdGEiLCJlbnRyaWVzIiwiZW50cnkiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXJQb2xpY3kiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlZGlyZWN0UGFnZU9uU3VjY2VzcyIsIndpbmRvdyIsImxvY2F0aW9uIiwidXBkYXRlZERhdGEiLCJuZXdEYXRhRW50cnkiLCJuZXdEYXRhIiwibGlzdCIsInVwZGF0ZVR5cGUiLCJzZXRGdW5jdGlvbiIsImhvb2tBZnRlckNsaWNrIiwiaG9va05hbWUiLCJjNGdIb29rcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=