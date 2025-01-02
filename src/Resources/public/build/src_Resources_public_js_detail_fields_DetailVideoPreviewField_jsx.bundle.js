"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_detail_fields_DetailVideoPreviewField_jsx"],{

/***/ "./src/Resources/public/js/detail/fields/DetailVideoPreviewField.jsx":
/*!***************************************************************************!*\
  !*** ./src/Resources/public/js/detail/fields/DetailVideoPreviewField.jsx ***!
  \***************************************************************************/
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
var _reactVimeo = _interopRequireDefault(__webpack_require__(/*! @u-wave/react-vimeo */ "./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js"));
var _reactYoutube = _interopRequireDefault(__webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/YouTube.esm.js"));
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
var DetailVideoPreviewField = exports["default"] = /*#__PURE__*/function (_Component) {
  function DetailVideoPreviewField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DetailVideoPreviewField);
    _this = _callSuper(this, DetailVideoPreviewField, [props]);
    var data = props.data[props.field.name];
    var initialHasPreviewImage = typeof data.videoPreviewImage !== "undefined" && data.videoPreviewImage !== null;
    _this.state = {
      hasPreviewImage: initialHasPreviewImage,
      reloading: false
    };
    return _this;
  }
  (0, _inherits2["default"])(DetailVideoPreviewField, _Component);
  return (0, _createClass2["default"])(DetailVideoPreviewField, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var data = this.props.data[this.props.field.name];
      // data.video can be an ID or an URL
      if (!(data && data.videoType && data.video)) {
        // not enough data
        return null;
      }
      var content = null;
      if (data.videoType === "youtube") {
        // let videoId = data.video.replace("https://www.youtube.com/watch?v=", "");
        var videoId = this.parseVideoId(data.video);
        content = /*#__PURE__*/_react["default"].createElement(_reactYoutube["default"], {
          videoId: videoId,
          opts: {
            origin: window.location.href,
            host: 'https://www.youtube-nocookie.com',
            height: '100%',
            width: '100%'
          },
          className: "video-preview-youtube"
        });
      } else if (data.videoType === "vimeo") {
        content = /*#__PURE__*/_react["default"].createElement(_reactVimeo["default"], {
          video: data.video
        });
      } else {
        // no valid data
        content = null;
      }
      if (this.state.hasPreviewImage) {
        var altName = this.props.data[this.props.field.name].alt;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field["class"]
        }, /*#__PURE__*/_react["default"].createElement("a", {
          onClick: function onClick() {
            return _this2.setState({
              hasPreviewImage: false
            });
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: data.videoPreviewImage.src,
          alt: altName,
          title: altName,
          style: {
            width: "100%",
            height: "100%"
          }
        })));
      }
      if (window.klaroConfig && klaro) {
        var manager = klaro.getManager();
        if (data.videoType === "youtube" && manager.getConsent('youtubeVideo') || data.videoType === "vimeo" && manager.getConsent('vimeoVideo')) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: this.props.field["class"]
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "embed-responsive embed-responsive-16by9"
          }, content));
        } else {
          // no consent given, display nothing
          return null;
        }
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.field["class"]
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "embed-responsive embed-responsive-16by9"
        }, content));
      }
    }
  }, {
    key: "parseVideoId",
    value: function parseVideoId(videoUrl) {
      if (videoUrl.startsWith("https://www.youtube.com/watch?v=")) {
        return videoUrl.replace("https://www.youtube.com/watch?v=", "");
      }
      if (videoUrl.startsWith("https://youtu.be/")) {
        return videoUrl.replace("https://youtu.be/", "");
      }
      if (videoUrl.startsWith("https://www.youtube.com/embed/")) {
        return videoUrl.replace("https://www.youtube.com/embed/", "");
      }
      if (videoUrl.startsWith("https://www.youtube-nocookie.com/embed/")) {
        return videoUrl.replace("https://www.youtube-nocookie.com/embed/", "");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      if (window.klaroConfig && klaro) {
        var manager = klaro.getManager();
        manager.watch({
          update: function update(objManager, name, data) {
            _this3.setState({
              reloading: !_this3.state.reloading
            });
          }
        });
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZGV0YWlsX2ZpZWxkc19EZXRhaWxWaWRlb1ByZXZpZXdGaWVsZF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFHLGFBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBb0MsU0FBQUkseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFOLHdCQUFBTSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEs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RSxDQUFDO01BQy9EO01BQ0EsSUFBSUYsUUFBUSxDQUFDQyxVQUFVLENBQUMseUNBQXlDLENBQUMsRUFBRTtRQUNsRSxPQUFPRCxRQUFRLENBQUNFLE9BQU8sQ0FBQyx5Q0FBeUMsRUFBRSxFQUFFLENBQUM7TUFDeEU7SUFDRjtFQUFDO0lBQUFqQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUMsaUJBQWlCQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ2xCLElBQUl2QixNQUFNLENBQUNjLFdBQVcsSUFBSUMsS0FBSyxFQUFFO1FBQy9CLElBQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxVQUFVLENBQUMsQ0FBQztRQUNoQ0QsT0FBTyxDQUFDUSxLQUFLLENBQUM7VUFBQ0MsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUdDLFVBQVUsRUFBRTlDLElBQUksRUFBRUYsSUFBSSxFQUFLO1lBQy9DNkMsTUFBSSxDQUFDYixRQUFRLENBQUM7Y0FBQ3pCLFNBQVMsRUFBRSxDQUFDc0MsTUFBSSxDQUFDeEMsS0FBSyxDQUFDRTtZQUFTLENBQUMsQ0FBQztVQUNuRDtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQ0Y7RUFBQztBQUFBLEVBbEdrRDBDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZGV0YWlsL2ZpZWxkcy9EZXRhaWxWaWRlb1ByZXZpZXdGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFZpbWVvIGZyb20gJ0B1LXdhdmUvcmVhY3QtdmltZW8nO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbFZpZGVvUHJldmlld0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhW3Byb3BzLmZpZWxkLm5hbWVdO1xuXG4gICAgbGV0IGluaXRpYWxIYXNQcmV2aWV3SW1hZ2UgPSAodHlwZW9mIGRhdGEudmlkZW9QcmV2aWV3SW1hZ2UgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAmJiAoZGF0YS52aWRlb1ByZXZpZXdJbWFnZSAhPT0gbnVsbCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUHJldmlld0ltYWdlOiBpbml0aWFsSGFzUHJldmlld0ltYWdlLFxuICAgICAgcmVsb2FkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV07XG4gICAgLy8gZGF0YS52aWRlbyBjYW4gYmUgYW4gSUQgb3IgYW4gVVJMXG4gICAgaWYgKCEoZGF0YSAmJiBkYXRhLnZpZGVvVHlwZSAmJiBkYXRhLnZpZGVvKSkge1xuICAgICAgLy8gbm90IGVub3VnaCBkYXRhXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuICAgIGlmIChkYXRhLnZpZGVvVHlwZSA9PT0gXCJ5b3V0dWJlXCIpIHtcbiAgICAgIC8vIGxldCB2aWRlb0lkID0gZGF0YS52aWRlby5yZXBsYWNlKFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1cIiwgXCJcIik7XG4gICAgICBsZXQgdmlkZW9JZCA9IHRoaXMucGFyc2VWaWRlb0lkKGRhdGEudmlkZW8pO1xuICAgICAgY29udGVudCA9IDxZb3VUdWJlIHZpZGVvSWQ9e3ZpZGVvSWR9IG9wdHM9e3tcbiAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgaG9zdDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgIH19IGNsYXNzTmFtZT17XCJ2aWRlby1wcmV2aWV3LXlvdXR1YmVcIn0vPlxuICAgIH0gZWxzZSBpZiAoZGF0YS52aWRlb1R5cGUgPT09IFwidmltZW9cIikge1xuICAgICAgY29udGVudCA9IDxWaW1lbyB2aWRlbz17ZGF0YS52aWRlb30gLz5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gdmFsaWQgZGF0YVxuICAgICAgY29udGVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzUHJldmlld0ltYWdlKSB7XG4gICAgICBsZXQgYWx0TmFtZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLmFsdDtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+XG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aGFzUHJldmlld0ltYWdlOiBmYWxzZX0pfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnZpZGVvUHJldmlld0ltYWdlLnNyY30gYWx0PXthbHROYW1lfSB0aXRsZT17YWx0TmFtZX0gc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fS8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5rbGFyb0NvbmZpZyAmJiBrbGFybykge1xuICAgICAgbGV0IG1hbmFnZXIgPSBrbGFyby5nZXRNYW5hZ2VyKCk7XG4gICAgICBpZiAoKGRhdGEudmlkZW9UeXBlID09PSBcInlvdXR1YmVcIiAmJiBtYW5hZ2VyLmdldENvbnNlbnQoJ3lvdXR1YmVWaWRlbycpKVxuICAgICAgICB8fCAoZGF0YS52aWRlb1R5cGUgPT09IFwidmltZW9cIiAmJiBtYW5hZ2VyLmdldENvbnNlbnQoJ3ZpbWVvVmlkZW8nKSkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gY29uc2VudCBnaXZlbiwgZGlzcGxheSBub3RoaW5nXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5maWVsZC5jbGFzc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VWaWRlb0lkKHZpZGVvVXJsKSB7XG4gICAgaWYgKHZpZGVvVXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVwiKSkge1xuICAgICAgcmV0dXJuIHZpZGVvVXJsLnJlcGxhY2UoXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVwiLCBcIlwiKTtcbiAgICB9XG4gICAgaWYgKHZpZGVvVXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3lvdXR1LmJlL1wiKSkge1xuICAgICAgcmV0dXJuIHZpZGVvVXJsLnJlcGxhY2UoXCJodHRwczovL3lvdXR1LmJlL1wiLCBcIlwiKTtcbiAgICB9XG4gICAgaWYgKHZpZGVvVXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIikpIHtcbiAgICAgIHJldHVybiB2aWRlb1VybC5yZXBsYWNlKFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIsIFwiXCIpO1xuICAgIH1cbiAgICBpZiAodmlkZW9Vcmwuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1wiKSkge1xuICAgICAgcmV0dXJuIHZpZGVvVXJsLnJlcGxhY2UoXCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9cIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHdpbmRvdy5rbGFyb0NvbmZpZyAmJiBrbGFybykge1xuICAgICAgbGV0IG1hbmFnZXIgPSBrbGFyby5nZXRNYW5hZ2VyKCk7XG4gICAgICBtYW5hZ2VyLndhdGNoKHt1cGRhdGU6IChvYmpNYW5hZ2VyLCBuYW1lLCBkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkaW5nOiAhdGhpcy5zdGF0ZS5yZWxvYWRpbmd9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9yZWFjdFZpbWVvIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yZWFjdFlvdXR1YmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkRldGFpbFZpZGVvUHJldmlld0ZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImRhdGEiLCJmaWVsZCIsIm5hbWUiLCJpbml0aWFsSGFzUHJldmlld0ltYWdlIiwidmlkZW9QcmV2aWV3SW1hZ2UiLCJzdGF0ZSIsImhhc1ByZXZpZXdJbWFnZSIsInJlbG9hZGluZyIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJ2aWRlb1R5cGUiLCJ2aWRlbyIsImNvbnRlbnQiLCJ2aWRlb0lkIiwicGFyc2VWaWRlb0lkIiwiY3JlYXRlRWxlbWVudCIsIm9wdHMiLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJob3N0IiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJhbHROYW1lIiwiYWx0Iiwib25DbGljayIsInNldFN0YXRlIiwic3JjIiwidGl0bGUiLCJzdHlsZSIsImtsYXJvQ29uZmlnIiwia2xhcm8iLCJtYW5hZ2VyIiwiZ2V0TWFuYWdlciIsImdldENvbnNlbnQiLCJ2aWRlb1VybCIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczMiLCJ3YXRjaCIsInVwZGF0ZSIsIm9iak1hbmFnZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9