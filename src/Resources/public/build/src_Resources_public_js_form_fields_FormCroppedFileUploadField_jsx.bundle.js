"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormCroppedFileUploadField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormCroppedFileUploadField.jsx":
/*!****************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormCroppedFileUploadField.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactImageCrop = _interopRequireDefault(__webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js"));
__webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"));
var _js = _interopRequireDefault(__webpack_require__(/*! blueimp-load-image/js */ "./node_modules/blueimp-load-image/js/index.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../util/conditions */ "./src/Resources/public/js/util/conditions.js"));
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
var FormCroppedFileUploadField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormCroppedFileUploadField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormCroppedFileUploadField);
    _this = _callSuper(this, FormCroppedFileUploadField, [props]);
    (0, _defineProperty2["default"])(_this, "onSelectFile", function (e) {
      if (e.target.files && e.target.files.length > 0) {
        if (_this.checkFileSize(e.target.files[0])) {
          if (_this.allowedFileTypes.includes(e.target.files[0].type)) {
            var imageName = e.target.files[0].name;
            var imageType = e.target.files[0].type;
            (0, _js["default"])(e.target.files[0], function (img) {
              var base64data = img.toDataURL(imageType);
              _this.setState({
                src: base64data,
                imageName: imageName
              });
            }, {
              orientation: true,
              canvas: true
            });
          } else {
            _sweetalert["default"].fire({
              icon: "error",
              title: _this.props.field.titleFileTooBig,
              text: _this.props.field.textFileTooBig
            });
            e.target.value = "";
          }
        } else {
          _sweetalert["default"].fire({
            icon: "error",
            title: _this.props.field.titleFileTooBig,
            text: _this.props.field.textFileTooBig
          });
          e.target.value = "";
        }
      }
    });
    // If you setState the crop in here you should return false.
    (0, _defineProperty2["default"])(_this, "onImageLoaded", function (image) {
      _this.imageRef = image;
      var newCrop = JSON.parse(JSON.stringify(_this.state.crop));
      if (_this.props.data[_this.props.field.name] && _this.props.data[_this.props.field.name] !== '00000000-0000-0000-0000-000000000000') {
        var importantPart = _this.props.data[_this.props.field.name].importantPart;
        if (importantPart) {
          newCrop.x = importantPart.x * _this.imageRef.width;
          newCrop.y = importantPart.y * _this.imageRef.height;
          newCrop.width = importantPart.width * _this.imageRef.width;
          newCrop.height = importantPart.height * _this.imageRef.height;
          newCrop.unit = "px";
        }
        _this.setState({
          crop: newCrop
        }, function () {
          return _this.onCropComplete(newCrop);
        });
        return false;
      }
    });
    (0, _defineProperty2["default"])(_this, "onCropChange", function (crop, percentCrop) {
      _this.setState({
        crop: percentCrop
      });
    });
    _this.getCroppedImg = _this.getCroppedImg.bind(_this);
    _this.onSelectFile = _this.onSelectFile.bind(_this);
    _this.onImageLoaded = _this.onImageLoaded.bind(_this);
    _this.onCropComplete = _this.onCropComplete.bind(_this);
    _this.makeClientCrop = _this.makeClientCrop.bind(_this);
    _this.onCropChange = _this.onCropChange.bind(_this);
    _this.unsetImage = _this.unsetImage.bind(_this);
    _this.state = {
      src: null,
      imageName: "",
      crop: {
        unit: '%',
        width: 90,
        height: 90,
        x: 5,
        y: 5
      },
      croppedImageUrl: null
    };
    if (_this.props.data[_this.props.field.name]) {
      _this.state.src = _this.props.data[_this.props.field.name].path;
      _this.state.imageName = _this.props.data[_this.props.field.name].name;
    }
    _this.allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    _this.inputRef = null;
    return _this;
  }
  (0, _inherits2["default"])(FormCroppedFileUploadField, _Component);
  return (0, _createClass2["default"])(FormCroppedFileUploadField, [{
    key: "onCropComplete",
    value: function () {
      var _onCropComplete = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(crop) {
        var imageData, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.makeClientCrop(crop);
            case 2:
              imageData = {
                imageData: this.state.src,
                importantPart: {
                  x: crop.x / this.imageRef.width,
                  y: crop.y / this.imageRef.height,
                  width: crop.width / this.imageRef.width,
                  height: crop.height / this.imageRef.height
                },
                imageName: this.state.imageName
              };
              data = this.props.data;
              data[this.props.field.name] = imageData;
              this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onCropComplete(_x) {
        return _onCropComplete.apply(this, arguments);
      }
      return onCropComplete;
    }()
  }, {
    key: "makeClientCrop",
    value: function () {
      var _makeClientCrop = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(crop) {
        var croppedImageUrl;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.imageRef && crop.width && crop.height)) {
                _context2.next = 5;
                break;
              }
              _context2.next = 3;
              return this.getCroppedImg(this.imageRef, crop, 'newFile.jpeg');
            case 3:
              croppedImageUrl = _context2.sent;
              this.setState({
                croppedImageUrl: croppedImageUrl
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function makeClientCrop(_x2) {
        return _makeClientCrop.apply(this, arguments);
      }
      return makeClientCrop;
    }()
  }, {
    key: "getCroppedImg",
    value: function getCroppedImg(image, crop, fileName) {
      var canvas = document.createElement('canvas');
      var scaleX = image.naturalWidth / image.width;
      var scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
      return canvas.toDataURL('image/jpeg');
    }
  }, {
    key: "checkFileSize",
    value: function checkFileSize(file) {
      var filesize = file.size;
      var sizeInKb, sizeInMb;
      if (filesize > 1000) {
        sizeInKb = filesize / 1000;
        if (sizeInKb > 1000) {
          sizeInMb = sizeInKb / 1000;
          if (sizeInMb > 6) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // check condition
      if (!(0, _conditions["default"])(this.props.field, this.props.data, this.props.fields)) {
        return null;
      }
      var label = null;
      if (this.props.field.label) {
        if (this.props.field.required) {
          label = /*#__PURE__*/_react["default"].createElement("label", {
            className: "label-file c4g-required"
          }, this.props.field.label);
        } else {
          label = /*#__PURE__*/_react["default"].createElement("label", {
            className: "label-file"
          }, this.props.field.label);
        }
      }
      var _this$state = this.state,
        crop = _this$state.crop,
        croppedImageUrl = _this$state.croppedImageUrl,
        src = _this$state.src;
      var fieldName = this.props.field.name;
      var description = null;
      if (this.props.field.description) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, label, /*#__PURE__*/_react["default"].createElement("input", {
        type: "file",
        accept: ".jpg, .png, .jpeg",
        onChange: this.onSelectFile,
        id: fieldName,
        ref: function ref(node) {
          _this2.inputRef = node;
        },
        name: fieldName + (this.props.field.max > 1 ? "[]" : ""),
        className: "form-control-file"
      }), description), src && /*#__PURE__*/_react["default"].createElement(_reactImageCrop["default"], {
        src: src,
        crop: crop,
        ruleOfThirds: true,
        onImageLoaded: this.onImageLoaded,
        onComplete: this.onCropComplete,
        onChange: this.onCropChange
      }), croppedImageUrl && /*#__PURE__*/_react["default"].createElement("img", {
        alt: "Crop",
        style: {
          maxWidth: '100%'
        },
        src: croppedImageUrl
      }), src && /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.unsetImage,
        title: this.props.languageRefs.CLICK_TO_REMOVE_IMAGE,
        className: "btn btn-primary btn-remove remove-image " + this.props.field.name
      }, this.props.languageRefs.REMOVE_IMAGE));
    }
  }, {
    key: "unsetImage",
    value: function unsetImage() {
      var data = this.props.data;
      data[this.props.field.name] = null;
      this.setState({
        src: null,
        imageName: null,
        crop: null,
        croppedImageUrl: null
      });
      if (this.inputRef !== null) {
        // clear file selection
        this.inputRef.value = "";
      }
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/util/conditions.js":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/util/conditions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkConditions = checkConditions;
exports["default"] = checkIfFieldIsRendered;
exports.hasConditions = hasConditions;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

function hasConditions(field) {
  if (field.conditionField && field.conditionValue) {
    if (typeof field.conditionField.forEach === 'function' && typeof field.conditionValue.forEach === 'function') {
      if (field.conditionField.length > 0) {
        if (field.conditionField.length === field.conditionValue.length) {
          return true;
        } else if (field.conditionValue.length > 1 && field.conditionField.length === 1) {
          // multiple values for one condition field (or condition)
          return true;
        }
      }
    }
  }
  return false;
}
function checkConditions(field, data) {
  var render = true;
  if (field.conditionField.length === field.conditionValue.length) {
    field.conditionField.forEach(function (element, index) {
      if (typeof data[element] === 'undefined') {
        render = false;
      } else if (data[element] !== null && !data[element].value && String(data[element]) !== String(field.conditionValue[index])) {
        render = false;
      } else if (data[element] && data[element].value && String(data[element].value) !== String(field.conditionValue[index])) {
        render = false;
      } else if (data[element] === null && field.conditionValue[index] !== null) {
        render = false;
      }
    }, this);
  } else if (field.conditionValue.length > 1 && field.conditionField.length === 1) {
    var element = field.conditionField[0];
    render = false;
    for (var key in field.conditionValue) {
      if (field.conditionValue.hasOwnProperty(key)) {
        var condValue = field.conditionValue[key];
        if (!!data[element] && data[element].value) {
          // data[element] is a select field
          if (data[element].value === condValue) {
            render = true;
          }
        } else if (data[element] === condValue) {
          render = true;
        }
        if (render) {
          break;
        }
      }
    }
  }
  return render;
}
function checkIfFieldIsRendered(field, data, fields) {
  if (hasConditions(field)) {
    // get field this field depends upon
    var dependentField = null;
    fields.forEach(function (element, index) {
      if (field.conditionField.length === 1) {
        if (element.name === field.conditionField[0]) {
          dependentField = element;
        }
      }
    });
    if (dependentField !== null) {
      var isDependentFieldRendered = true;
      if (hasConditions(dependentField)) {
        isDependentFieldRendered = checkConditions(dependentField, data);
        return isDependentFieldRendered && checkConditions(field, data);
      } else {
        return checkConditions(field, data);
      }
    } else {
      return checkConditions(field, data);
    }
  } else {
    return true;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGVBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFDQUEsbUJBQUE7QUFDQSxJQUFBRyxXQUFBLEdBQUFELHNCQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUksR0FBQSxHQUFBRixzQkFBQSxDQUFBRixtQkFBQTtBQUNBLElBQUFLLFdBQUEsR0FBQUgsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBMkQsU0FBQU0seUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFSLHdCQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFo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RUFBRTtVQUNWO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7RUFHQSxPQUFPQSxNQUFNO0FBQ2Y7QUFFZSxTQUFTRSxzQkFBc0JBLENBQUMxRSxLQUFLLEVBQUVhLElBQUksRUFBRThELE1BQU0sRUFBRTtFQUNsRSxJQUFJd0IsYUFBYSxDQUFDbkcsS0FBSyxDQUFDLEVBQUU7SUFDeEI7SUFDQSxJQUFJNEcsY0FBYyxHQUFHLElBQUk7SUFDekJqQyxNQUFNLENBQUMyQixPQUFPLENBQUMsVUFBQ0UsT0FBTyxFQUFFQyxLQUFLLEVBQUs7TUFDakMsSUFBSXpHLEtBQUssQ0FBQ29HLGNBQWMsQ0FBQ3hILE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckMsSUFBSTRILE9BQU8sQ0FBQ3RILElBQUksS0FBS2MsS0FBSyxDQUFDb0csY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQzVDUSxjQUFjLEdBQUdKLE9BQU87UUFDMUI7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUlJLGNBQWMsS0FBSyxJQUFJLEVBQUU7TUFDM0IsSUFBSUMsd0JBQXdCLEdBQUcsSUFBSTtNQUNuQyxJQUFJVixhQUFhLENBQUNTLGNBQWMsQ0FBQyxFQUFFO1FBQ2pDQyx3QkFBd0IsR0FBR04sZUFBZSxDQUFDSyxjQUFjLEVBQUUvRixJQUFJLENBQUM7UUFDaEUsT0FBT2dHLHdCQUF3QixJQUFJTixlQUFlLENBQUN2RyxLQUFLLEVBQUVhLElBQUksQ0FBQztNQUNqRSxDQUFDLE1BQU07UUFDTCxPQUFPMEYsZUFBZSxDQUFDdkcsS0FBSyxFQUFFYSxJQUFJLENBQUM7TUFDckM7SUFDRixDQUFDLE1BQU07TUFDTCxPQUFPMEYsZUFBZSxDQUFDdkcsS0FBSyxFQUFFYSxJQUFJLENBQUM7SUFDckM7RUFDRixDQUFDLE1BQU07SUFDTCxPQUFPLElBQUk7RUFDYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvZm9ybS9maWVsZHMvRm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGQuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3V0aWwvY29uZGl0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gJ3JlYWN0LWltYWdlLWNyb3AnO1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzcyc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgbG9hZEltYWdlIGZyb20gXCJibHVlaW1wLWxvYWQtaW1hZ2UvanNcIjtcbmltcG9ydCBjaGVja0lmRmllbGRJc1JlbmRlcmVkIGZyb20gXCIuLi8uLi91dGlsL2NvbmRpdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNyb3BwZWRGaWxlVXBsb2FkRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZ2V0Q3JvcHBlZEltZyA9IHRoaXMuZ2V0Q3JvcHBlZEltZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWxlY3RGaWxlID0gdGhpcy5vblNlbGVjdEZpbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW1hZ2VMb2FkZWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ3JvcENvbXBsZXRlID0gdGhpcy5vbkNyb3BDb21wbGV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWFrZUNsaWVudENyb3AgPSB0aGlzLm1ha2VDbGllbnRDcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNyb3BDaGFuZ2UgPSB0aGlzLm9uQ3JvcENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZXRJbWFnZSA9IHRoaXMudW5zZXRJbWFnZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNyYzogbnVsbCxcbiAgICAgIGltYWdlTmFtZTogXCJcIixcbiAgICAgIGNyb3A6IHtcbiAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDVcbiAgICAgIH0sXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSB7XG4gICAgICB0aGlzLnN0YXRlLnNyYyA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnBhdGg7XG4gICAgICB0aGlzLnN0YXRlLmltYWdlTmFtZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5hbGxvd2VkRmlsZVR5cGVzID0gW1xuICAgICAgXCJpbWFnZS9wbmdcIixcbiAgICAgIFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgXCJpbWFnZS9qcGdcIlxuICAgIF07XG4gICAgdGhpcy5pbnB1dFJlZiA9IG51bGw7XG4gIH1cblxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tGaWxlU2l6ZShlLnRhcmdldC5maWxlc1swXSkpIHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZEZpbGVUeXBlcy5pbmNsdWRlcyhlLnRhcmdldC5maWxlc1swXS50eXBlKSkge1xuICAgICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGUudGFyZ2V0LmZpbGVzWzBdLm5hbWU7XG4gICAgICAgICAgY29uc3QgaW1hZ2VUeXBlID0gZS50YXJnZXQuZmlsZXNbMF0udHlwZTtcbiAgICAgICAgICBsb2FkSW1hZ2UoXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmZpbGVzWzBdLFxuICAgICAgICAgICAgICBpbWcgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChpbWFnZVR5cGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IGJhc2U2NGRhdGEsIGltYWdlTmFtZTogaW1hZ2VOYW1lIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgIHRpdGxlOiAgdGhpcy5wcm9wcy5maWVsZC50aXRsZUZpbGVUb29CaWcsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpZWxkLnRleHRGaWxlVG9vQmlnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy5maWVsZC50aXRsZUZpbGVUb29CaWcsXG4gICAgICAgICAgdGV4dDogdGhpcy5wcm9wcy5maWVsZC50ZXh0RmlsZVRvb0JpZ1xuICAgICAgICB9KTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBJZiB5b3Ugc2V0U3RhdGUgdGhlIGNyb3AgaW4gaGVyZSB5b3Ugc2hvdWxkIHJldHVybiBmYWxzZS5cbiAgb25JbWFnZUxvYWRlZCA9IGltYWdlID0+IHtcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XG4gICAgbGV0IG5ld0Nyb3AgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuY3JvcCkpO1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAmJiB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSAhPT0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCcpIHtcbiAgICAgIGxldCBpbXBvcnRhbnRQYXJ0ID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0uaW1wb3J0YW50UGFydDtcbiAgICAgIGlmIChpbXBvcnRhbnRQYXJ0KSB7XG4gICAgICAgIG5ld0Nyb3AueCA9IGltcG9ydGFudFBhcnQueCAqIHRoaXMuaW1hZ2VSZWYud2lkdGg7XG4gICAgICAgIG5ld0Nyb3AueSA9IGltcG9ydGFudFBhcnQueSAqIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0O1xuICAgICAgICBuZXdDcm9wLndpZHRoID0gaW1wb3J0YW50UGFydC53aWR0aCAqIHRoaXMuaW1hZ2VSZWYud2lkdGg7XG4gICAgICAgIG5ld0Nyb3AuaGVpZ2h0ID0gaW1wb3J0YW50UGFydC5oZWlnaHQgKiB0aGlzLmltYWdlUmVmLmhlaWdodDtcbiAgICAgICAgbmV3Q3JvcC51bml0ID0gXCJweFwiO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3JvcDogbmV3Q3JvcH0sICgpID0+IHRoaXMub25Dcm9wQ29tcGxldGUobmV3Q3JvcCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBvbkNyb3BDb21wbGV0ZSAoY3JvcCkge1xuICAgIGF3YWl0IHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XG4gICAgbGV0IGltYWdlRGF0YSA9IHtcbiAgICAgIGltYWdlRGF0YTogdGhpcy5zdGF0ZS5zcmMsXG4gICAgICBpbXBvcnRhbnRQYXJ0OiB7XG4gICAgICAgIHg6IGNyb3AueCAvIHRoaXMuaW1hZ2VSZWYud2lkdGgsXG4gICAgICAgIHk6IGNyb3AueSAvIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogY3JvcC53aWR0aCAvIHRoaXMuaW1hZ2VSZWYud2lkdGgsXG4gICAgICAgIGhlaWdodDogY3JvcC5oZWlnaHQgLyB0aGlzLmltYWdlUmVmLmhlaWdodFxuICAgICAgfSxcbiAgICAgIGltYWdlTmFtZTogdGhpcy5zdGF0ZS5pbWFnZU5hbWVcbiAgICB9O1xuICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IGltYWdlRGF0YTtcbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIGRhdGEsIHRoaXMucHJvcHMuZmllbGQpO1xuICB9O1xuXG4gIG9uQ3JvcENoYW5nZSA9IChjcm9wLCBwZXJjZW50Q3JvcCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wOiBwZXJjZW50Q3JvcCB9KTtcbiAgfTtcblxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxuICAgICAgICB0aGlzLmltYWdlUmVmLFxuICAgICAgICBjcm9wLFxuICAgICAgICAnbmV3RmlsZS5qcGVnJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmw6IGNyb3BwZWRJbWFnZVVybCB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgaW1hZ2UsXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGNyb3Aud2lkdGgsXG4gICAgICBjcm9wLmhlaWdodFxuICAgICk7XG5cbiAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xuICB9XG5cbiAgY2hlY2tGaWxlU2l6ZShmaWxlKSB7XG4gICAgbGV0IGZpbGVzaXplID0gZmlsZS5zaXplO1xuICAgIGxldCBzaXplSW5LYiwgc2l6ZUluTWI7XG4gICAgaWYgKGZpbGVzaXplID4gMTAwMCkge1xuICAgICAgc2l6ZUluS2IgPSBmaWxlc2l6ZSAvIDEwMDA7XG4gICAgICBpZiAoc2l6ZUluS2IgPiAxMDAwKSB7XG4gICAgICAgIHNpemVJbk1iID0gc2l6ZUluS2IgLyAxMDAwO1xuICAgICAgICBpZiAoc2l6ZUluTWIgPiA2KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNoZWNrIGNvbmRpdGlvblxuICAgIGlmICghY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCh0aGlzLnByb3BzLmZpZWxkLCB0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmllbGRzKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5sYWJlbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQucmVxdWlyZWQpIHtcbiAgICAgICAgbGFiZWwgPSA8bGFiZWwgY2xhc3NOYW1lPXtcImxhYmVsLWZpbGUgYzRnLXJlcXVpcmVkXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmxhYmVsfTwvbGFiZWw+O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSA8bGFiZWwgY2xhc3NOYW1lPXtcImxhYmVsLWZpbGVcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGNyb3AsIGNyb3BwZWRJbWFnZVVybCwgc3JjIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMucHJvcHMuZmllbGQubmFtZTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKDxzbWFsbCBjbGFzc05hbWU9e1wiZmllbGQtZGVzY3JpcHRpb24gZm9ybS10ZXh0IHRleHQtbXV0ZWRcIn0+e3RoaXMucHJvcHMuZmllbGQuZGVzY3JpcHRpb259PC9zbWFsbD4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmb3JtLWdyb3VwXCJ9PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT17XCJmaWxlXCJ9IGFjY2VwdD1cIi5qcGcsIC5wbmcsIC5qcGVnXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSBpZD17ZmllbGROYW1lfSByZWY9eyhub2RlKSA9PiB7dGhpcy5pbnB1dFJlZiA9IG5vZGU7fX1cbiAgICAgICAgICAgICAgICAgbmFtZT17ZmllbGROYW1lICsgKHRoaXMucHJvcHMuZmllbGQubWF4ID4gMSA/IFwiW11cIiA6IFwiXCIpfSBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sLWZpbGVcIn0vPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzcmMgJiYgKFxuICAgICAgICAgIDxSZWFjdENyb3BcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgY3JvcD17Y3JvcH1cbiAgICAgICAgICAgIHJ1bGVPZlRoaXJkc1xuICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxuICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y3JvcHBlZEltYWdlVXJsICYmIChcbiAgICAgICAgICA8aW1nIGFsdD1cIkNyb3BcIiBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnIH19IHNyYz17Y3JvcHBlZEltYWdlVXJsfSAvPlxuICAgICAgICApfVxuICAgICAgICB7c3JjICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudW5zZXRJbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNMSUNLX1RPX1JFTU9WRV9JTUFHRX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidG4gYnRuLXByaW1hcnkgYnRuLXJlbW92ZSByZW1vdmUtaW1hZ2UgXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWV9Pnt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5SRU1PVkVfSU1BR0V9PC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICB1bnNldEltYWdlKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IG51bGw7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzcmM6IG51bGwsXG4gICAgICBpbWFnZU5hbWU6IG51bGwsXG4gICAgICBjcm9wOiBudWxsLFxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYgIT09IG51bGwpIHtcbiAgICAgIC8vIGNsZWFyIGZpbGUgc2VsZWN0aW9uXG4gICAgICB0aGlzLmlucHV0UmVmLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBkYXRhLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgfVxufSIsIlxuXG4vKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25kaXRpb25zKGZpZWxkKSB7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZCAmJiBmaWVsZC5jb25kaXRpb25WYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZmllbGQuY29uZGl0aW9uRmllbGQuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZmllbGQuY29uZGl0aW9uVmFsdWUuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUubGVuZ3RoID4gMSAmJiBmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSB2YWx1ZXMgZm9yIG9uZSBjb25kaXRpb24gZmllbGQgKG9yIGNvbmRpdGlvbilcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpIHtcbiAgbGV0IHJlbmRlciA9IHRydWU7XG4gIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IGZpZWxkLmNvbmRpdGlvblZhbHVlLmxlbmd0aCkge1xuICAgIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtlbGVtZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVuZGVyID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gIT09IG51bGwgJiYgIWRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdICYmIGRhdGFbZWxlbWVudF0udmFsdWUgJiZcbiAgICAgICAgKFN0cmluZyhkYXRhW2VsZW1lbnRdLnZhbHVlKSAhPT0gU3RyaW5nKGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSkpKSB7XG4gICAgICAgIHJlbmRlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChkYXRhW2VsZW1lbnRdID09PSBudWxsICYmIGZpZWxkLmNvbmRpdGlvblZhbHVlW2luZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICByZW5kZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSBlbHNlIGlmIChmaWVsZC5jb25kaXRpb25WYWx1ZS5sZW5ndGggPiAxICYmIGZpZWxkLmNvbmRpdGlvbkZpZWxkLmxlbmd0aCA9PT0gMSkge1xuICAgIGxldCBlbGVtZW50ID0gZmllbGQuY29uZGl0aW9uRmllbGRbMF07XG4gICAgcmVuZGVyID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIGZpZWxkLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgY29uZFZhbHVlID0gZmllbGQuY29uZGl0aW9uVmFsdWVba2V5XTtcbiAgICAgICAgaWYgKCEhZGF0YVtlbGVtZW50XSAmJiBkYXRhW2VsZW1lbnRdLnZhbHVlKSB7XG4gICAgICAgICAgLy8gZGF0YVtlbGVtZW50XSBpcyBhIHNlbGVjdCBmaWVsZFxuICAgICAgICAgIGlmIChkYXRhW2VsZW1lbnRdLnZhbHVlID09PSBjb25kVmFsdWUpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbZWxlbWVudF0gPT09IGNvbmRWYWx1ZSkge1xuICAgICAgICAgIHJlbmRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRmllbGRJc1JlbmRlcmVkKGZpZWxkLCBkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKGhhc0NvbmRpdGlvbnMoZmllbGQpKSB7XG4gICAgLy8gZ2V0IGZpZWxkIHRoaXMgZmllbGQgZGVwZW5kcyB1cG9uXG4gICAgbGV0IGRlcGVuZGVudEZpZWxkID0gbnVsbDtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmaWVsZC5jb25kaXRpb25GaWVsZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gZmllbGQuY29uZGl0aW9uRmllbGRbMF0pIHtcbiAgICAgICAgICBkZXBlbmRlbnRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGVwZW5kZW50RmllbGQgIT09IG51bGwpIHtcbiAgICAgIGxldCBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgPSB0cnVlO1xuICAgICAgaWYgKGhhc0NvbmRpdGlvbnMoZGVwZW5kZW50RmllbGQpKSB7XG4gICAgICAgIGlzRGVwZW5kZW50RmllbGRSZW5kZXJlZCA9IGNoZWNrQ29uZGl0aW9ucyhkZXBlbmRlbnRGaWVsZCwgZGF0YSk7XG4gICAgICAgIHJldHVybiBpc0RlcGVuZGVudEZpZWxkUmVuZGVyZWQgJiYgY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja0NvbmRpdGlvbnMoZmllbGQsIGRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hlY2tDb25kaXRpb25zKGZpZWxkLCBkYXRhKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0SW1hZ2VDcm9wIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9zd2VldGFsZXJ0IiwiX2pzIiwiX2NvbmRpdGlvbnMiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZvcm1Dcm9wcGVkRmlsZVVwbG9hZEZpZWxkIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsImNoZWNrRmlsZVNpemUiLCJhbGxvd2VkRmlsZVR5cGVzIiwiaW5jbHVkZXMiLCJ0eXBlIiwiaW1hZ2VOYW1lIiwibmFtZSIsImltYWdlVHlwZSIsImxvYWRJbWFnZSIsImltZyIsImJhc2U2NGRhdGEiLCJ0b0RhdGFVUkwiLCJzZXRTdGF0ZSIsInNyYyIsIm9yaWVudGF0aW9uIiwiY2FudmFzIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmaWVsZCIsInRpdGxlRmlsZVRvb0JpZyIsInRleHQiLCJ0ZXh0RmlsZVRvb0JpZyIsInZhbHVlIiwiaW1hZ2UiLCJpbWFnZVJlZiIsIm5ld0Nyb3AiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0ZSIsImNyb3AiLCJkYXRhIiwiaW1wb3J0YW50UGFydCIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJ1bml0Iiwib25Dcm9wQ29tcGxldGUiLCJwZXJjZW50Q3JvcCIsImdldENyb3BwZWRJbWciLCJiaW5kIiwib25TZWxlY3RGaWxlIiwib25JbWFnZUxvYWRlZCIsIm1ha2VDbGllbnRDcm9wIiwib25Dcm9wQ2hhbmdlIiwidW5zZXRJbWFnZSIsImNyb3BwZWRJbWFnZVVybCIsInBhdGgiLCJpbnB1dFJlZiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwiX29uQ3JvcENvbXBsZXRlIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJpbWFnZURhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwic3RvcCIsIl94IiwiYXJndW1lbnRzIiwiX21ha2VDbGllbnRDcm9wIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzZW50IiwiX3gyIiwiZmlsZU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImZpbGUiLCJmaWxlc2l6ZSIsInNpemUiLCJzaXplSW5LYiIsInNpemVJbk1iIiwicmVuZGVyIiwiX3RoaXMyIiwiY2hlY2tJZkZpZWxkSXNSZW5kZXJlZCIsImZpZWxkcyIsImxhYmVsIiwicmVxdWlyZWQiLCJjbGFzc05hbWUiLCJfdGhpcyRzdGF0ZSIsImZpZWxkTmFtZSIsImRlc2NyaXB0aW9uIiwiRnJhZ21lbnQiLCJhY2NlcHQiLCJvbkNoYW5nZSIsImlkIiwicmVmIiwibm9kZSIsIm1heCIsInJ1bGVPZlRoaXJkcyIsIm9uQ29tcGxldGUiLCJhbHQiLCJzdHlsZSIsIm1heFdpZHRoIiwib25DbGljayIsImxhbmd1YWdlUmVmcyIsIkNMSUNLX1RPX1JFTU9WRV9JTUFHRSIsIlJFTU9WRV9JTUFHRSIsIkNvbXBvbmVudCIsImhhc0NvbmRpdGlvbnMiLCJjb25kaXRpb25GaWVsZCIsImNvbmRpdGlvblZhbHVlIiwiZm9yRWFjaCIsImNoZWNrQ29uZGl0aW9ucyIsImVsZW1lbnQiLCJpbmRleCIsIlN0cmluZyIsImNvbmRWYWx1ZSIsImRlcGVuZGVudEZpZWxkIiwiaXNEZXBlbmRlbnRGaWVsZFJlbmRlcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==