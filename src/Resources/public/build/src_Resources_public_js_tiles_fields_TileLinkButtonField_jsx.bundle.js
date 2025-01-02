"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_tiles_fields_TileLinkButtonField_jsx"],{

/***/ "./src/Resources/public/js/tiles/fields/TileLinkButtonField.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/tiles/fields/TileLinkButtonField.jsx ***!
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
var TileLinkButtonField = exports["default"] = /*#__PURE__*/function (_Component) {
  function TileLinkButtonField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TileLinkButtonField);
    _this = _callSuper(this, TileLinkButtonField, [props]);
    _this.hasValidExternalLink = _this.hasValidExternalLink.bind(_this);
    _this.executeAsyncCall = _this.executeAsyncCall.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TileLinkButtonField, _Component);
  return (0, _createClass2["default"])(TileLinkButtonField, [{
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
      if (this.props.field.href && this.props.field.linkText) {
        var label = null;
        if (this.props.field.label) {
          label = /*#__PURE__*/_react["default"].createElement("span", {
            className: "entry-label"
          }, this.props.field.label);
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
        var condClasses = "";
        if (this.props.field.conditionalClasses) {
          for (var key in this.props.field.conditionalClasses) {
            if (this.props.field.conditionalClasses.hasOwnProperty(key)) {
              // "0" will be evaluated to true
              if (this.props.data[key] && this.props.data[key] !== "0") {
                condClasses += this.props.field.conditionalClasses[key] + " ";
              }
            }
          }
        }
        var anchor = null;
        var anchorClass = this.props.field["class"];
        if (this.props.field.asyncCall) {
          if (this.props.field.addDataAttributes) {
            var image = "";
            if (this.props.data['imageList']) {
              image = this.props.data['imageList'].src;
            } else if (this.props.data['image']) {
              image = this.props.data['image'].src;
            }
            anchor = /*#__PURE__*/_react["default"].createElement("button", {
              type: 'button',
              className: anchorClass,
              "data-image": image,
              "data-name": this.props.data['name'],
              "data-moreurl": href,
              onClick: function onClick(event) {
                event.preventDefault();
                _this2.executeAsyncCall(href);
              },
              rel: "noreferrer noopener"
            }, this.props.field.linkText);
          } else {
            anchor = /*#__PURE__*/_react["default"].createElement("button", {
              type: 'button',
              className: anchorClass,
              onClick: function onClick(event) {
                event.preventDefault();
                _this2.executeAsyncCall(href);
              },
              rel: "noreferrer noopener"
            }, this.props.field.linkText);
          }
        } else {
          anchor = /*#__PURE__*/_react["default"].createElement("a", {
            className: anchorClass,
            href: href,
            rel: "noreferrer noopener"
          }, this.props.field.linkText);
        }
        return /*#__PURE__*/_react["default"].createElement(Condition, {
          data: this.props.data,
          conditions: this.props.field.conditions
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field.wrapperClass
        }, label, anchor));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGlsZXNfZmllbGRzX1RpbGVMaW5rQnV0dG9uRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENB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QUNXLFFBQVEsQ0FBQyxJQUFJLENBQUM3RSxLQUFLLENBQUNVLEtBQUssQ0FBQ2tFLFFBQVEsQ0FBQyxDQUFDaEcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDb0IsS0FBSyxDQUFDVSxLQUFLLEVBQUUsSUFBSSxDQUFDVixLQUFLLENBQUNvQixJQUFJLENBQUM7WUFDbEY7VUFDRjtRQUNGO01BQ0Y7SUFDRjtFQUFDO0FBQUEsRUE3SjhDMEQsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90aWxlcy9maWVsZHMvVGlsZUxpbmtCdXR0b25GaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb25kaXRpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL2NvbmRpdGlvbi9Db25kaXRpb24uanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUxpbmtCdXR0b25GaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5oYXNWYWxpZEV4dGVybmFsTGluayA9IHRoaXMuaGFzVmFsaWRFeHRlcm5hbExpbmsuYmluZCh0aGlzKTtcbiAgICB0aGlzLmV4ZWN1dGVBc3luY0NhbGwgPSB0aGlzLmV4ZWN1dGVBc3luY0NhbGwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhc1ZhbGlkRXh0ZXJuYWxMaW5rKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5maWVsZC5leHRlcm5hbExpbmtGaWVsZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmV4dGVybmFsTGlua0ZpZWxkQ29uZGl0aW9uRmllbGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25GaWVsZC5sZW5ndGggPT09IHRoaXMucHJvcHMuZmllbGQuZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5maWVsZC5leHRlcm5hbExpbmtGaWVsZENvbmRpdGlvbkZpZWxkLmZvckVhY2goXG4gICAgICAgICAgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nKHRoaXMucHJvcHMuZGF0YVtlbGVtZW50XSkgPT09IFN0cmluZyh0aGlzLnByb3BzLmZpZWxkLmV4dGVybmFsTGlua0ZpZWxkQ29uZGl0aW9uVmFsdWVbaW5kZXhdKSkge1xuICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmhyZWYgJiYgdGhpcy5wcm9wcy5maWVsZC5saW5rVGV4dCkge1xuICAgICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBsYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17XCJlbnRyeS1sYWJlbFwifT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L3NwYW4+O1xuICAgICAgfVxuICAgICAgbGV0IGhyZWYgPSB0aGlzLnByb3BzLmZpZWxkLmhyZWY7XG5cbiAgICAgIGlmICh0aGlzLmhhc1ZhbGlkRXh0ZXJuYWxMaW5rKCkpIHtcbiAgICAgICAgaHJlZiA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLmV4dGVybmFsTGlua0ZpZWxkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmhyZWZGaWVsZHMpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmZpZWxkLmhyZWZGaWVsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZShpdGVtLCB0aGlzLnByb3BzLmRhdGFbaXRlbV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjb25kQ2xhc3NlcyA9IFwiXCI7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25hbENsYXNzZXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uYWxDbGFzc2VzKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuY29uZGl0aW9uYWxDbGFzc2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIFwiMFwiIHdpbGwgYmUgZXZhbHVhdGVkIHRvIHRydWVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFba2V5XSAmJiB0aGlzLnByb3BzLmRhdGFba2V5XSAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgY29uZENsYXNzZXMgKz0gdGhpcy5wcm9wcy5maWVsZC5jb25kaXRpb25hbENsYXNzZXNba2V5XSArIFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGFuY2hvciA9IG51bGw7XG4gICAgICBsZXQgYW5jaG9yQ2xhc3MgPSB0aGlzLnByb3BzLmZpZWxkLmNsYXNzO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQuYXN5bmNDYWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmFkZERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgbGV0IGltYWdlID0gXCJcIjtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhWydpbWFnZUxpc3QnXSkge1xuICAgICAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLmRhdGFbJ2ltYWdlTGlzdCddLnNyYztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YVsnaW1hZ2UnXSkge1xuICAgICAgICAgICAgaW1hZ2UgPSB0aGlzLnByb3BzLmRhdGFbJ2ltYWdlJ10uc3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbmNob3IgPSA8YnV0dG9uIHR5cGU9eydidXR0b24nfSBjbGFzc05hbWU9e2FuY2hvckNsYXNzfSBkYXRhLWltYWdlPXtpbWFnZX0gZGF0YS1uYW1lPXt0aGlzLnByb3BzLmRhdGFbJ25hbWUnXX0gZGF0YS1tb3JldXJsPXtocmVmfSBvbkNsaWNrPXsoZXZlbnQpID0+IHtldmVudC5wcmV2ZW50RGVmYXVsdCgpO3RoaXMuZXhlY3V0ZUFzeW5jQ2FsbChocmVmKTt9fSByZWw9e1wibm9yZWZlcnJlciBub29wZW5lclwifT57dGhpcy5wcm9wcy5maWVsZC5saW5rVGV4dH08L2J1dHRvbj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW5jaG9yID0gPGJ1dHRvbiB0eXBlPXsnYnV0dG9uJ30gY2xhc3NOYW1lPXthbmNob3JDbGFzc30gb25DbGljaz17KGV2ZW50KSA9PiB7ZXZlbnQucHJldmVudERlZmF1bHQoKTt0aGlzLmV4ZWN1dGVBc3luY0NhbGwoaHJlZik7fX0gcmVsPXtcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIn0+e3RoaXMucHJvcHMuZmllbGQubGlua1RleHR9PC9idXR0b24+O1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuY2hvciA9IDxhIGNsYXNzTmFtZT17YW5jaG9yQ2xhc3N9IGhyZWY9e2hyZWZ9IHJlbD17XCJub3JlZmVycmVyIG5vb3BlbmVyXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxpbmtUZXh0fTwvYT47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb25kaXRpb24gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBjb25kaXRpb25zPXt0aGlzLnByb3BzLmZpZWxkLmNvbmRpdGlvbnN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZpZWxkLndyYXBwZXJDbGFzc30+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAge2FuY2hvcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db25kaXRpb24+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKCcnKTtcblxuICB9XG5cbiAgZXhlY3V0ZUFzeW5jQ2FsbChocmVmKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmRhdGEpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBkYXRhLnNldChlbnRyeVswXSwgU3RyaW5nKGVudHJ5WzFdKSk7XG4gICAgfSk7XG5cbiAgICBmZXRjaChocmVmLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnIDogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgfSxcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGlmIChTdHJpbmcodGhpcy5wcm9wcy5maWVsZC5yZWRpcmVjdFBhZ2VPblN1Y2Nlc3MpICE9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gU3RyaW5nKHRoaXMucHJvcHMuZmllbGQucmVkaXJlY3RQYWdlT25TdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGpzb24udXBkYXRlZERhdGEpIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRhRW50cnkgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHRoaXMucHJvcHMubGlzdC5wcm9wcy5kYXRhO1xuICAgICAgICAgICAgaWYgKGpzb24udXBkYXRlVHlwZSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4ganNvbi51cGRhdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChqc29uLnVwZGF0ZWREYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0RhdGFFbnRyeVtrZXldID0ganNvbi51cGRhdGVkRGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YVtpXS5pZCA9PT0gbmV3RGF0YUVudHJ5LmlkKSB7XG4gICAgICAgICAgICAgICAgICBuZXdEYXRhW2ldID0gbmV3RGF0YUVudHJ5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb24udXBkYXRlVHlwZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgICBuZXdEYXRhID0ganNvbi51cGRhdGVkRGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgc2V0LCBmYWxsIGJhY2sgdG8gYWxsXG4gICAgICAgICAgICAgIG5ld0RhdGEgPSBqc29uLnVwZGF0ZWREYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2NvcGUucHJvcHMubGlzdC5wcm9wcy5zZXRGdW5jdGlvbihzY29wZS5wcm9wcy5saXN0LnByb3BzLm5hbWUsIG5ld0RhdGEsIFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrIGZvciBob29rIHRoYXQgbmVlZHMgdG8gYmUgZXhlY3V0ZWRcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5ob29rQWZ0ZXJDbGljayAmJiB0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lKSB7XG4gICAgICBpZiAod2luZG93LmM0Z0hvb2tzICYmIHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmM0Z0hvb2tzW3RoaXMucHJvcHMuZmllbGQuaG9va05hbWVdW2ldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jNGdIb29rc1t0aGlzLnByb3BzLmZpZWxkLmhvb2tOYW1lXVtpXSh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkNvbmRpdGlvbiIsIlJlYWN0IiwibGF6eSIsIlRpbGVMaW5rQnV0dG9uRmllbGQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiaGFzVmFsaWRFeHRlcm5hbExpbmsiLCJiaW5kIiwiZXhlY3V0ZUFzeW5jQ2FsbCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJmaWVsZCIsImV4dGVybmFsTGlua0ZpZWxkIiwidmFsaWQiLCJleHRlcm5hbExpbmtGaWVsZENvbmRpdGlvbkZpZWxkIiwibGVuZ3RoIiwiZXh0ZXJuYWxMaW5rRmllbGRDb25kaXRpb25WYWx1ZSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJTdHJpbmciLCJkYXRhIiwicmVuZGVyIiwiX3RoaXMyIiwiaHJlZiIsImxpbmtUZXh0IiwibGFiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZkZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpZCIsInJlcGxhY2UiLCJjb25kQ2xhc3NlcyIsImNvbmRpdGlvbmFsQ2xhc3NlcyIsImFuY2hvciIsImFuY2hvckNsYXNzIiwiYXN5bmNDYWxsIiwiYWRkRGF0YUF0dHJpYnV0ZXMiLCJpbWFnZSIsInNyYyIsInR5cGUiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbCIsImNvbmRpdGlvbnMiLCJ3cmFwcGVyQ2xhc3MiLCJfdGhpczMiLCJzY29wZSIsIkZvcm1EYXRhIiwiZW50cmllcyIsImVudHJ5IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZWRpcmVjdFBhZ2VPblN1Y2Nlc3MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVwZGF0ZWREYXRhIiwibmV3RGF0YUVudHJ5IiwibmV3RGF0YSIsImxpc3QiLCJ1cGRhdGVUeXBlIiwic2V0RnVuY3Rpb24iLCJuYW1lIiwiaG9va0FmdGVyQ2xpY2siLCJob29rTmFtZSIsImM0Z0hvb2tzIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==