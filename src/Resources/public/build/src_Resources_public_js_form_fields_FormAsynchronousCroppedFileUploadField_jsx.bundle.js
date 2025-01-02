"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormAsynchronousCroppedFileUploadField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormAsynchronousCroppedFileUploadField.jsx":
/*!****************************************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormAsynchronousCroppedFileUploadField.jsx ***!
  \****************************************************************************************/
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
var FormAsynchronousCroppedFileUploadField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormAsynchronousCroppedFileUploadField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormAsynchronousCroppedFileUploadField);
    _this = _callSuper(this, FormAsynchronousCroppedFileUploadField, [props]);
    (0, _defineProperty2["default"])(_this, "onSelectFile", function (e) {
      if (e.target.files && e.target.files.length > 0) {
        var imageName = e.target.files[0].name;
        if (_this.checkFileSize(e.target.files[0])) {
          if (_this.allowedFileTypes.includes(e.target.files[0].type)) {
            var _imageName = e.target.files[0].name;
            var imageType = e.target.files[0].type;
            (0, _js["default"])(e.target.files[0], function (img) {
              var base64data = img.toDataURL(imageType);
              _this.setState({
                src: base64data,
                imageName: _imageName
              });
            }, {
              orientation: true,
              canvas: true
            });
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
      if (_this.props.data[_this.props.field.name]) {
        var importantPart = _this.props.data[_this.props.field.name].importantPart;
        if (!importantPart) {
          importantPart = {
            x: 0.05,
            y: 0.05,
            height: 0.9,
            width: 0.9
          };
        }
        newCrop.x = importantPart.x * _this.imageRef.width;
        newCrop.y = importantPart.y * _this.imageRef.height;
        newCrop.width = importantPart.width * _this.imageRef.width;
        newCrop.height = importantPart.height * _this.imageRef.height;
        newCrop.unit = "px";
        _this.setState({
          crop: newCrop
        }, function () {
          return _this.onCropComplete(newCrop);
        });
        return false;
      }
    });
    (0, _defineProperty2["default"])(_this, "onCropChange", function (crop, percentCrop) {
      // You could also use percentCrop:
      // this.setState({ crop: percentCrop });
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
    _this.inputRef = null;
    _this.allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    return _this;
  }
  (0, _inherits2["default"])(FormAsynchronousCroppedFileUploadField, _Component);
  return (0, _createClass2["default"])(FormAsynchronousCroppedFileUploadField, [{
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
              // Ajax upload here
              jQuery.post(this.props.field.uploadUrl, {
                'image': imageData,
                'childId': data.uuid
              }).done(function (data) {});
            case 7:
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
    key: "render",
    value: function render() {
      var _this2 = this;
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
      var value = null;
      if (src) {
        value = src.split('/');
        value = value[value.length - 1];
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, label, /*#__PURE__*/_react["default"].createElement("input", {
        type: "file",
        accept: ".jpg, .png, .jpeg",
        onChange: this.onSelectFile,
        id: fieldName,
        className: "form-control-file",
        ref: function ref(node) {
          _this2.inputRef = node;
        },
        required: this.props.field.required && !croppedImageUrl
      }), value && /*#__PURE__*/_react["default"].createElement("input", {
        type: 'hidden',
        name: fieldName,
        value: value
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
      if (this.inputRef) {
        this.inputRef.value = "";
      }
      this.props.form.props.updateFunction(this.props.form.props.name, data, this.props.field);
      var requestData = {
        uuid: data.uuid,
        fieldName: this.props.field.name
      };
      jQuery.post(this.props.field.removeImageUrl, requestData).done(function (data) {});
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUFzeW5jaHJvbm91c0Nyb3BwZWRGaWxlVXBsb2FkRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGVBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFDQUEsbUJBQUE7QUFDQSxJQUFBRyxXQUFBLEdBQUFELHNCQUFBLENBQUFGLG1CQUFBO0FBQ0EsSUFBQUksR0FBQSxHQUFBRixzQkFBQSxDQUFBRixtQkFBQTtBQUE4QyxTQUFBSyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVAsd0JBQUFPLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWQ5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWdCcUI0QixzQ0FBc0MsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFDekQsU0FBQUYsdUNBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUwsc0NBQUE7SUFDakJJLEtBQUEsR0FBQWhCLFVBQUEsT0FBQVksc0NBQUEsR0FBTUcsS0FBSztJQUFFLElBQUFHLGdCQUFBLGFBQUFGLEtBQUEsa0JBb0NBLFVBQUFuQyxDQUFDLEVBQUk7TUFDbEIsSUFBSUEsQ0FBQyxDQUFDc0MsTUFBTSxDQUFDQyxLQUFLLElBQUl2QyxDQUFDLENBQUNzQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQyxJQUFNQyxTQUFTLEdBQUd6QyxDQUFDLENBQUNzQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0csSUFBSTtRQUN4QyxJQUFJUCxLQUFBLENBQUtRLGFBQWEsQ0FBQzNDLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDekMsSUFBSUosS0FBQSxDQUFLUyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDN0MsQ0FBQyxDQUFDc0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksQ0FBQyxFQUFFO1lBQzFELElBQU1MLFVBQVMsR0FBR3pDLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJO1lBQ3hDLElBQU1LLFNBQVMsR0FBRy9DLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDTyxJQUFJO1lBQ3hDLElBQUFFLGNBQVMsRUFDTGhELENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNqQixVQUFBVSxHQUFHLEVBQUk7Y0FDTCxJQUFJQyxVQUFVLEdBQUdELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDSixTQUFTLENBQUM7Y0FDekNaLEtBQUEsQ0FBS2lCLFFBQVEsQ0FBQztnQkFBQ0MsR0FBRyxFQUFFSCxVQUFVO2dCQUFFVCxTQUFTLEVBQUVBO2NBQVMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFDRDtjQUFDYSxXQUFXLEVBQUUsSUFBSTtjQUFFQyxNQUFNLEVBQUU7WUFBSSxDQUNwQyxDQUFDO1VBQ0g7UUFDRixDQUFDLE1BQU07VUFDTEMsc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1lBQ1JDLElBQUksRUFBRSxPQUFPO1lBQ2JDLEtBQUssRUFBRXhCLEtBQUEsQ0FBS0QsS0FBSyxDQUFDMEIsS0FBSyxDQUFDQyxlQUFlO1lBQ3ZDQyxJQUFJLEVBQUUzQixLQUFBLENBQUtELEtBQUssQ0FBQzBCLEtBQUssQ0FBQ0c7VUFDekIsQ0FBQyxDQUFDO1VBQ0YvRCxDQUFDLENBQUNzQyxNQUFNLENBQUMwQixLQUFLLEdBQUcsRUFBRTtRQUNyQjtNQUVGO0lBQ0YsQ0FBQztJQWlCRDtJQUFBLElBQUEzQixnQkFBQSxhQUFBRixLQUFBLG1CQUNnQixVQUFBOEIsS0FBSyxFQUFJO01BQ3ZCOUIsS0FBQSxDQUFLK0IsUUFBUSxHQUFHRCxLQUFLO01BQ3JCLElBQUlFLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDbkMsS0FBQSxDQUFLb0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUN6RCxJQUFJckMsS0FBQSxDQUFLRCxLQUFLLENBQUN1QyxJQUFJLENBQUN0QyxLQUFBLENBQUtELEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2xCLElBQUksQ0FBQyxFQUFFO1FBQzFDLElBQUlnQyxhQUFhLEdBQUd2QyxLQUFBLENBQUtELEtBQUssQ0FBQ3VDLElBQUksQ0FBQ3RDLEtBQUEsQ0FBS0QsS0FBSyxDQUFDMEIsS0FBSyxDQUFDbEIsSUFBSSxDQUFDLENBQUNnQyxhQUFhO1FBQ3hFLElBQUksQ0FBQ0EsYUFBYSxFQUFFO1VBQ2xCQSxhQUFhLEdBQUc7WUFDZEMsQ0FBQyxFQUFFLElBQUk7WUFDUEMsQ0FBQyxFQUFFLElBQUk7WUFDUEMsTUFBTSxFQUFFLEdBQUc7WUFDWEMsS0FBSyxFQUFFO1VBQ1QsQ0FBQztRQUNIO1FBQ0FYLE9BQU8sQ0FBQ1EsQ0FBQyxHQUFHRCxhQUFhLENBQUNDLENBQUMsR0FBR3hDLEtBQUEsQ0FBSytCLFFBQVEsQ0FBQ1ksS0FBSztRQUNqRFgsT0FBTyxDQUFDUyxDQUFDLEdBQUdGLGFBQWEsQ0FBQ0UsQ0FBQyxHQUFHekMsS0FBQSxDQUFLK0IsUUFBUSxDQUFDVyxNQUFNO1FBQ2xEVixPQUFPLENBQUNXLEtBQUssR0FBR0osYUFBYSxDQUFDSSxLQUFLLEdBQUczQyxLQUFBLENBQUsrQixRQUFRLENBQUNZLEtBQUs7UUFDekRYLE9BQU8sQ0FBQ1UsTUFBTSxHQUFHSCxhQUFhLENBQUNHLE1BQU0sR0FBRzFDLEtBQUEsQ0FBSytCLFFBQVEsQ0FBQ1csTUFBTTtRQUM1RFYsT0FBTyxDQUFDWSxJQUFJLEdBQUcsSUFBSTtRQUNuQjVDLEtBQUEsQ0FBS2lCLFFBQVEsQ0FBQztVQUFDb0IsSUFBSSxFQUFFTDtRQUFPLENBQUMsRUFBRTtVQUFBLE9BQU1oQyxLQUFBLENBQUs2QyxjQUFjLENBQUNiLE9BQU8sQ0FBQztRQUFBLEVBQUM7UUFDbEUsT0FBTyxLQUFLO01BQ2Q7SUFDRixDQUFDO0lBQUEsSUFBQTlCLGdCQUFBLGFBQUFGLEtBQUEsa0JBcUJjLFVBQUNxQyxJQUFJLEVBQUVTLFdBQVcsRUFBSztNQUNwQztNQUNBO01BQ0E5QyxLQUFBLENBQUtpQixRQUFRLENBQUM7UUFBRW9CLElBQUksRUFBRVM7TUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVIQzlDLEtBQUEsQ0FBSytDLGFBQWEsR0FBRy9DLEtBQUEsQ0FBSytDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFBaEQsS0FBSyxDQUFDO0lBQ2xEQSxLQUFBLENBQUtpRCxZQUFZLEdBQUdqRCxLQUFBLENBQUtpRCxZQUFZLENBQUNELElBQUksQ0FBQWhELEtBQUssQ0FBQztJQUNoREEsS0FBQSxDQUFLa0QsYUFBYSxHQUFHbEQsS0FBQSxDQUFLa0QsYUFBYSxDQUFDRixJQUFJLENBQUFoRCxLQUFLLENBQUM7SUFDbERBLEtBQUEsQ0FBSzZDLGNBQWMsR0FBRzdDLEtBQUEsQ0FBSzZDLGNBQWMsQ0FBQ0csSUFBSSxDQUFBaEQsS0FBSyxDQUFDO0lBQ3BEQSxLQUFBLENBQUttRCxjQUFjLEdBQUduRCxLQUFBLENBQUttRCxjQUFjLENBQUNILElBQUksQ0FBQWhELEtBQUssQ0FBQztJQUNwREEsS0FBQSxDQUFLb0QsWUFBWSxHQUFHcEQsS0FBQSxDQUFLb0QsWUFBWSxDQUFDSixJQUFJLENBQUFoRCxLQUFLLENBQUM7SUFDaERBLEtBQUEsQ0FBS3FELFVBQVUsR0FBR3JELEtBQUEsQ0FBS3FELFVBQVUsQ0FBQ0wsSUFBSSxDQUFBaEQsS0FBSyxDQUFDO0lBRTVDQSxLQUFBLENBQUtvQyxLQUFLLEdBQUc7TUFDWGxCLEdBQUcsRUFBRSxJQUFJO01BQ1RaLFNBQVMsRUFBRSxFQUFFO01BQ2IrQixJQUFJLEVBQUU7UUFDSk8sSUFBSSxFQUFFLEdBQUc7UUFDVEQsS0FBSyxFQUFFLEVBQUU7UUFDVEQsTUFBTSxFQUFFLEVBQUU7UUFDVkYsQ0FBQyxFQUFFLENBQUM7UUFDSkMsQ0FBQyxFQUFFO01BQ0wsQ0FBQztNQUNEYSxlQUFlLEVBQUU7SUFDbkIsQ0FBQztJQUVELElBQUl0RCxLQUFBLENBQUtELEtBQUssQ0FBQ3VDLElBQUksQ0FBQ3RDLEtBQUEsQ0FBS0QsS0FBSyxDQUFDMEIsS0FBSyxDQUFDbEIsSUFBSSxDQUFDLEVBQUU7TUFDMUNQLEtBQUEsQ0FBS29DLEtBQUssQ0FBQ2xCLEdBQUcsR0FBR2xCLEtBQUEsQ0FBS0QsS0FBSyxDQUFDdUMsSUFBSSxDQUFDdEMsS0FBQSxDQUFLRCxLQUFLLENBQUMwQixLQUFLLENBQUNsQixJQUFJLENBQUMsQ0FBQ2dELElBQUk7TUFDNUR2RCxLQUFBLENBQUtvQyxLQUFLLENBQUM5QixTQUFTLEdBQUdOLEtBQUEsQ0FBS0QsS0FBSyxDQUFDdUMsSUFBSSxDQUFDdEMsS0FBQSxDQUFLRCxLQUFLLENBQUMwQixLQUFLLENBQUNsQixJQUFJLENBQUMsQ0FBQ0EsSUFBSTtJQUNwRTtJQUVBUCxLQUFBLENBQUt3RCxRQUFRLEdBQUcsSUFBSTtJQUNwQnhELEtBQUEsQ0FBS1MsZ0JBQWdCLEdBQUcsQ0FDdEIsV0FBVyxFQUNYLFlBQVksRUFDWixXQUFXLENBQ1o7SUFBQyxPQUFBVCxLQUFBO0VBQ0o7RUFBQyxJQUFBeUQsVUFBQSxhQUFBN0Qsc0NBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUE0RCxhQUFBLGFBQUE5RCxzQ0FBQTtJQUFBK0QsR0FBQTtJQUFBOUIsS0FBQSxFQThCRCxTQUFBckIsYUFBYUEsQ0FBQ29ELElBQUksRUFBRTtNQUNsQixJQUFJQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsSUFBSTtNQUN4QixJQUFJQyxRQUFRLEVBQUVDLFFBQVE7TUFDdEIsSUFBSUgsUUFBUSxHQUFHLElBQUksRUFBRTtRQUNuQkUsUUFBUSxHQUFHRixRQUFRLEdBQUcsSUFBSTtRQUMxQixJQUFJRSxRQUFRLEdBQUcsSUFBSSxFQUFFO1VBQ25CQyxRQUFRLEdBQUdELFFBQVEsR0FBRyxJQUFJO1VBQzFCLElBQUlDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxLQUFLO1VBQ2Q7UUFDRjtNQUNGO01BQ0EsT0FBTyxJQUFJO0lBQ2I7RUFBQztJQUFBTCxHQUFBO0lBQUE5QixLQUFBO01BQUEsSUFBQW9DLGVBQUEsT0FBQUMsa0JBQUEsMEJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQTBCRCxTQUFBQyxRQUFzQmhDLElBQUk7UUFBQSxJQUFBaUMsU0FBQSxFQUFBaEMsSUFBQTtRQUFBLE9BQUE2QixZQUFBLFlBQUFJLElBQUEsVUFBQUMsU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDbEIsSUFBSSxDQUFDeEIsY0FBYyxDQUFDZCxJQUFJLENBQUM7WUFBQTtjQUMzQmlDLFNBQVMsR0FBRztnQkFDZEEsU0FBUyxFQUFFLElBQUksQ0FBQ2xDLEtBQUssQ0FBQ2xCLEdBQUc7Z0JBQ3pCcUIsYUFBYSxFQUFFO2tCQUNiQyxDQUFDLEVBQUVILElBQUksQ0FBQ0csQ0FBQyxHQUFHLElBQUksQ0FBQ1QsUUFBUSxDQUFDWSxLQUFLO2tCQUMvQkYsQ0FBQyxFQUFFSixJQUFJLENBQUNJLENBQUMsR0FBRyxJQUFJLENBQUNWLFFBQVEsQ0FBQ1csTUFBTTtrQkFDaENDLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFLLEdBQUcsSUFBSSxDQUFDWixRQUFRLENBQUNZLEtBQUs7a0JBQ3ZDRCxNQUFNLEVBQUVMLElBQUksQ0FBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQ1gsUUFBUSxDQUFDVztnQkFDdEMsQ0FBQztnQkFDRHBDLFNBQVMsRUFBRSxJQUFJLENBQUM4QixLQUFLLENBQUM5QjtjQUN4QixDQUFDO2NBQ0dnQyxJQUFJLEdBQUcsSUFBSSxDQUFDdkMsS0FBSyxDQUFDdUMsSUFBSTtjQUMxQkEsSUFBSSxDQUFDLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2xCLElBQUksQ0FBQyxHQUFHK0QsU0FBUztjQUN2QyxJQUFJLENBQUN2RSxLQUFLLENBQUM2RSxJQUFJLENBQUM3RSxLQUFLLENBQUM4RSxjQUFjLENBQUMsSUFBSSxDQUFDOUUsS0FBSyxDQUFDNkUsSUFBSSxDQUFDN0UsS0FBSyxDQUFDUSxJQUFJLEVBQUUrQixJQUFJLEVBQUUsSUFBSSxDQUFDdkMsS0FBSyxDQUFDMEIsS0FBSyxDQUFDO2NBQ3hGO2NBQ0FxRCxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNoRixLQUFLLENBQUMwQixLQUFLLENBQUN1RCxTQUFTLEVBQUU7Z0JBQUMsT0FBTyxFQUFFVixTQUFTO2dCQUFFLFNBQVMsRUFBRWhDLElBQUksQ0FBQzJDO2NBQUksQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDNUMsSUFBSSxFQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUFtQyxRQUFBLENBQUFVLElBQUE7VUFBQTtRQUFBLEdBQUFkLE9BQUE7TUFBQSxDQUN4RztNQUFBLFNBakJLeEIsY0FBY0EsQ0FBQXVDLEVBQUE7UUFBQSxPQUFBbkIsZUFBQSxDQUFBekUsS0FBQSxPQUFBNkYsU0FBQTtNQUFBO01BQUEsT0FBZHhDLGNBQWM7SUFBQTtFQUFBO0lBQUFjLEdBQUE7SUFBQTlCLEtBQUE7TUFBQSxJQUFBeUQsZUFBQSxPQUFBcEIsa0JBQUEsMEJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQXlCcEIsU0FBQW1CLFNBQXFCbEQsSUFBSTtRQUFBLElBQUFpQixlQUFBO1FBQUEsT0FBQWEsWUFBQSxZQUFBSSxJQUFBLFVBQUFpQixVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQWYsSUFBQSxHQUFBZSxTQUFBLENBQUFkLElBQUE7WUFBQTtjQUFBLE1BQ25CLElBQUksQ0FBQzVDLFFBQVEsSUFBSU0sSUFBSSxDQUFDTSxLQUFLLElBQUlOLElBQUksQ0FBQ0ssTUFBTTtnQkFBQStDLFNBQUEsQ0FBQWQsSUFBQTtnQkFBQTtjQUFBO2NBQUFjLFNBQUEsQ0FBQWQsSUFBQTtjQUFBLE9BQ2QsSUFBSSxDQUFDNUIsYUFBYSxDQUM5QyxJQUFJLENBQUNoQixRQUFRLEVBQ2JNLElBQUksRUFDSixjQUNGLENBQUM7WUFBQTtjQUpLaUIsZUFBZSxHQUFBbUMsU0FBQSxDQUFBQyxJQUFBO2NBS3JCLElBQUksQ0FBQ3pFLFFBQVEsQ0FBQztnQkFBRXFDLGVBQWUsRUFBRUE7Y0FBZ0IsQ0FBQyxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUFtQyxTQUFBLENBQUFOLElBQUE7VUFBQTtRQUFBLEdBQUFJLFFBQUE7TUFBQSxDQUV2RDtNQUFBLFNBVEtwQyxjQUFjQSxDQUFBd0MsR0FBQTtRQUFBLE9BQUFMLGVBQUEsQ0FBQTlGLEtBQUEsT0FBQTZGLFNBQUE7TUFBQTtNQUFBLE9BQWRsQyxjQUFjO0lBQUE7RUFBQTtJQUFBUSxHQUFBO0lBQUE5QixLQUFBLEVBV3BCLFNBQUFrQixhQUFhQSxDQUFDakIsS0FBSyxFQUFFTyxJQUFJLEVBQUV1RCxRQUFRLEVBQUU7TUFDbkMsSUFBTXhFLE1BQU0sR0FBR3lFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQyxJQUFNQyxNQUFNLEdBQUdqRSxLQUFLLENBQUNrRSxZQUFZLEdBQUdsRSxLQUFLLENBQUNhLEtBQUs7TUFDL0MsSUFBTXNELE1BQU0sR0FBR25FLEtBQUssQ0FBQ29FLGFBQWEsR0FBR3BFLEtBQUssQ0FBQ1ksTUFBTTtNQUNqRHRCLE1BQU0sQ0FBQ3VCLEtBQUssR0FBR04sSUFBSSxDQUFDTSxLQUFLO01BQ3pCdkIsTUFBTSxDQUFDc0IsTUFBTSxHQUFHTCxJQUFJLENBQUNLLE1BQU07TUFDM0IsSUFBTXlELEdBQUcsR0FBRy9FLE1BQU0sQ0FBQ2dGLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFFbkNELEdBQUcsQ0FBQ0UsU0FBUyxDQUNYdkUsS0FBSyxFQUNMTyxJQUFJLENBQUNHLENBQUMsR0FBR3VELE1BQU0sRUFDZjFELElBQUksQ0FBQ0ksQ0FBQyxHQUFHd0QsTUFBTSxFQUNmNUQsSUFBSSxDQUFDTSxLQUFLLEdBQUdvRCxNQUFNLEVBQ25CMUQsSUFBSSxDQUFDSyxNQUFNLEdBQUd1RCxNQUFNLEVBQ3BCLENBQUMsRUFDRCxDQUFDLEVBQ0Q1RCxJQUFJLENBQUNNLEtBQUssRUFDVk4sSUFBSSxDQUFDSyxNQUNQLENBQUM7TUFFRCxPQUFPdEIsTUFBTSxDQUFDSixTQUFTLENBQUMsWUFBWSxDQUFDO0lBQ3ZDO0VBQUM7SUFBQTJDLEdBQUE7SUFBQTlCLEtBQUEsRUFFRCxTQUFBeUUsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUVQLElBQUlDLEtBQUssR0FBRyxJQUFJO01BQ2hCLElBQUksSUFBSSxDQUFDekcsS0FBSyxDQUFDMEIsS0FBSyxDQUFDK0UsS0FBSyxFQUFFO1FBQzFCLElBQUksSUFBSSxDQUFDekcsS0FBSyxDQUFDMEIsS0FBSyxDQUFDZ0YsUUFBUSxFQUFFO1VBQzdCRCxLQUFLLGdCQUFHbkosTUFBQSxZQUFBeUksYUFBQTtZQUFPWSxTQUFTLEVBQUU7VUFBMEIsR0FBRSxJQUFJLENBQUMzRyxLQUFLLENBQUMwQixLQUFLLENBQUMrRSxLQUFhLENBQUM7UUFDdkYsQ0FBQyxNQUFNO1VBQ0xBLEtBQUssZ0JBQUduSixNQUFBLFlBQUF5SSxhQUFBO1lBQU9ZLFNBQVMsRUFBRTtVQUFhLEdBQUUsSUFBSSxDQUFDM0csS0FBSyxDQUFDMEIsS0FBSyxDQUFDK0UsS0FBYSxDQUFDO1FBQzFFO01BQ0Y7TUFFQSxJQUFBRyxXQUFBLEdBQXVDLElBQUksQ0FBQ3ZFLEtBQUs7UUFBekNDLElBQUksR0FBQXNFLFdBQUEsQ0FBSnRFLElBQUk7UUFBRWlCLGVBQWUsR0FBQXFELFdBQUEsQ0FBZnJELGVBQWU7UUFBRXBDLEdBQUcsR0FBQXlGLFdBQUEsQ0FBSHpGLEdBQUc7TUFDbEMsSUFBTTBGLFNBQVMsR0FBRyxJQUFJLENBQUM3RyxLQUFLLENBQUMwQixLQUFLLENBQUNsQixJQUFJO01BRXZDLElBQUlzRyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ29GLFdBQVcsRUFBRTtRQUNoQ0EsV0FBVyxnQkFBSXhKLE1BQUEsWUFBQXlJLGFBQUE7VUFBT1ksU0FBUyxFQUFFO1FBQXlDLEdBQUUsSUFBSSxDQUFDM0csS0FBSyxDQUFDMEIsS0FBSyxDQUFDb0YsV0FBbUIsQ0FBRTtNQUNwSDtNQUdBLElBQUloRixLQUFLLEdBQUcsSUFBSTtNQUNoQixJQUFJWCxHQUFHLEVBQUU7UUFDUFcsS0FBSyxHQUFHWCxHQUFHLENBQUM0RixLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RCakYsS0FBSyxHQUFHQSxLQUFLLENBQUNBLEtBQUssQ0FBQ3hCLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDakM7TUFFQSxvQkFDRWhELE1BQUEsWUFBQXlJLGFBQUEsQ0FBQ3pJLE1BQUEsV0FBSyxDQUFDMEosUUFBUSxxQkFDYjFKLE1BQUEsWUFBQXlJLGFBQUE7UUFBS1ksU0FBUyxFQUFFO01BQWEsR0FDMUJGLEtBQUssZUFDTm5KLE1BQUEsWUFBQXlJLGFBQUE7UUFBT25GLElBQUksRUFBRSxNQUFPO1FBQUNxRyxNQUFNLEVBQUMsbUJBQW1CO1FBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNoRSxZQUFhO1FBQUNpRSxFQUFFLEVBQUVOLFNBQVU7UUFDcEZGLFNBQVMsRUFBRSxtQkFBb0I7UUFBQ1MsR0FBRyxFQUFFLFNBQUxBLEdBQUdBLENBQUdDLElBQUksRUFBSztVQUFDYixNQUFJLENBQUMvQyxRQUFRLEdBQUc0RCxJQUFJO1FBQUMsQ0FBRTtRQUN2RVgsUUFBUSxFQUFFLElBQUksQ0FBQzFHLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2dGLFFBQVEsSUFBSSxDQUFDbkQ7TUFBZ0IsQ0FDOUQsQ0FBQyxFQUNEekIsS0FBSyxpQkFDSnhFLE1BQUEsWUFBQXlJLGFBQUE7UUFBT25GLElBQUksRUFBRSxRQUFTO1FBQ3BCSixJQUFJLEVBQUVxRyxTQUFVO1FBQ2hCL0UsS0FBSyxFQUFFQTtNQUFNLENBQ2QsQ0FDRixFQUNBZ0YsV0FDRSxDQUFDLEVBQ0wzRixHQUFHLGlCQUNGN0QsTUFBQSxZQUFBeUksYUFBQSxDQUFDdEksZUFBQSxXQUFTO1FBQ1IwRCxHQUFHLEVBQUVBLEdBQUk7UUFDVG1CLElBQUksRUFBRUEsSUFBSztRQUNYZ0YsWUFBWTtRQUNabkUsYUFBYSxFQUFFLElBQUksQ0FBQ0EsYUFBYztRQUNsQ29FLFVBQVUsRUFBRSxJQUFJLENBQUN6RSxjQUFlO1FBQ2hDb0UsUUFBUSxFQUFFLElBQUksQ0FBQzdEO01BQWEsQ0FDN0IsQ0FDRixFQUNBRSxlQUFlLGlCQUNkakcsTUFBQSxZQUFBeUksYUFBQTtRQUFLeUIsR0FBRyxFQUFDLE1BQU07UUFBQ0MsS0FBSyxFQUFFO1VBQUVDLFFBQVEsRUFBRTtRQUFPLENBQUU7UUFBQ3ZHLEdBQUcsRUFBRW9DO01BQWdCLENBQUUsQ0FDckUsRUFDQXBDLEdBQUcsaUJBQ0Y3RCxNQUFBLFlBQUF5SSxhQUFBO1FBQVE0QixPQUFPLEVBQUUsSUFBSSxDQUFDckUsVUFBVztRQUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQ3pCLEtBQUssQ0FBQzRILFlBQVksQ0FBQ0MscUJBQXNCO1FBQy9FbEIsU0FBUyxFQUFFLDBDQUEwQyxHQUFHLElBQUksQ0FBQzNHLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ2xCO01BQUssR0FBRSxJQUFJLENBQUNSLEtBQUssQ0FBQzRILFlBQVksQ0FBQ0UsWUFBcUIsQ0FFekgsQ0FBQztJQUVyQjtFQUFDO0lBQUFsRSxHQUFBO0lBQUE5QixLQUFBLEVBRUQsU0FBQXdCLFVBQVVBLENBQUEsRUFBRztNQUNYLElBQUlmLElBQUksR0FBRyxJQUFJLENBQUN2QyxLQUFLLENBQUN1QyxJQUFJO01BQzFCQSxJQUFJLENBQUMsSUFBSSxDQUFDdkMsS0FBSyxDQUFDMEIsS0FBSyxDQUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSTtNQUNsQyxJQUFJLENBQUNVLFFBQVEsQ0FBQztRQUNaQyxHQUFHLEVBQUUsSUFBSTtRQUNUWixTQUFTLEVBQUUsSUFBSTtRQUNmK0IsSUFBSSxFQUFFLElBQUk7UUFDVmlCLGVBQWUsRUFBRTtNQUNuQixDQUFDLENBQUM7TUFDRixJQUFJLElBQUksQ0FBQ0UsUUFBUSxFQUFFO1FBQ2pCLElBQUksQ0FBQ0EsUUFBUSxDQUFDM0IsS0FBSyxHQUFHLEVBQUU7TUFDMUI7TUFDQSxJQUFJLENBQUM5QixLQUFLLENBQUM2RSxJQUFJLENBQUM3RSxLQUFLLENBQUM4RSxjQUFjLENBQUMsSUFBSSxDQUFDOUUsS0FBSyxDQUFDNkUsSUFBSSxDQUFDN0UsS0FBSyxDQUFDUSxJQUFJLEVBQUUrQixJQUFJLEVBQUUsSUFBSSxDQUFDdkMsS0FBSyxDQUFDMEIsS0FBSyxDQUFDO01BQ3hGLElBQUlxRyxXQUFXLEdBQUc7UUFBQzdDLElBQUksRUFBRTNDLElBQUksQ0FBQzJDLElBQUk7UUFBRTJCLFNBQVMsRUFBRSxJQUFJLENBQUM3RyxLQUFLLENBQUMwQixLQUFLLENBQUNsQjtNQUFJLENBQUM7TUFDckV1RSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNoRixLQUFLLENBQUMwQixLQUFLLENBQUNzRyxjQUFjLEVBQUVELFdBQVcsQ0FBQyxDQUN0RDVDLElBQUksQ0FBQyxVQUFDNUMsSUFBSSxFQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCO0VBQUM7QUFBQSxFQW5QaUUwRixnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2Zvcm0vZmllbGRzL0Zvcm1Bc3luY2hyb25vdXNDcm9wcGVkRmlsZVVwbG9hZEZpZWxkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gJ3JlYWN0LWltYWdlLWNyb3AnO1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzcyc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgbG9hZEltYWdlIGZyb20gXCJibHVlaW1wLWxvYWQtaW1hZ2UvanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUFzeW5jaHJvbm91c0Nyb3BwZWRGaWxlVXBsb2FkRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZ2V0Q3JvcHBlZEltZyA9IHRoaXMuZ2V0Q3JvcHBlZEltZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWxlY3RGaWxlID0gdGhpcy5vblNlbGVjdEZpbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW1hZ2VMb2FkZWQgPSB0aGlzLm9uSW1hZ2VMb2FkZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ3JvcENvbXBsZXRlID0gdGhpcy5vbkNyb3BDb21wbGV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWFrZUNsaWVudENyb3AgPSB0aGlzLm1ha2VDbGllbnRDcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNyb3BDaGFuZ2UgPSB0aGlzLm9uQ3JvcENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZXRJbWFnZSA9IHRoaXMudW5zZXRJbWFnZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNyYzogbnVsbCxcbiAgICAgIGltYWdlTmFtZTogXCJcIixcbiAgICAgIGNyb3A6IHtcbiAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDVcbiAgICAgIH0sXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdKSB7XG4gICAgICB0aGlzLnN0YXRlLnNyYyA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLnBhdGg7XG4gICAgICB0aGlzLnN0YXRlLmltYWdlTmFtZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmZpZWxkLm5hbWVdLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFJlZiA9IG51bGw7XG4gICAgdGhpcy5hbGxvd2VkRmlsZVR5cGVzID0gW1xuICAgICAgXCJpbWFnZS9wbmdcIixcbiAgICAgIFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgXCJpbWFnZS9qcGdcIlxuICAgIF07XG4gIH1cblxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaW1hZ2VOYW1lID0gZS50YXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgIGlmICh0aGlzLmNoZWNrRmlsZVNpemUoZS50YXJnZXQuZmlsZXNbMF0pKSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRGaWxlVHlwZXMuaW5jbHVkZXMoZS50YXJnZXQuZmlsZXNbMF0udHlwZSkpIHtcbiAgICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBlLnRhcmdldC5maWxlc1swXS5uYW1lO1xuICAgICAgICAgIGNvbnN0IGltYWdlVHlwZSA9IGUudGFyZ2V0LmZpbGVzWzBdLnR5cGU7XG4gICAgICAgICAgbG9hZEltYWdlKFxuICAgICAgICAgICAgICBlLnRhcmdldC5maWxlc1swXSxcbiAgICAgICAgICAgICAgaW1nID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoaW1hZ2VUeXBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzcmM6IGJhc2U2NGRhdGEsIGltYWdlTmFtZTogaW1hZ2VOYW1lfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtvcmllbnRhdGlvbjogdHJ1ZSwgY2FudmFzOiB0cnVlfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLmZpZWxkLnRpdGxlRmlsZVRvb0JpZyxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnByb3BzLmZpZWxkLnRleHRGaWxlVG9vQmlnXG4gICAgICAgIH0pO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICB9XG4gIH07XG5cbiAgY2hlY2tGaWxlU2l6ZShmaWxlKSB7XG4gICAgbGV0IGZpbGVzaXplID0gZmlsZS5zaXplO1xuICAgIGxldCBzaXplSW5LYiwgc2l6ZUluTWI7XG4gICAgaWYgKGZpbGVzaXplID4gMTAwMCkge1xuICAgICAgc2l6ZUluS2IgPSBmaWxlc2l6ZSAvIDEwMDA7XG4gICAgICBpZiAoc2l6ZUluS2IgPiAxMDAwKSB7XG4gICAgICAgIHNpemVJbk1iID0gc2l6ZUluS2IgLyAxMDAwO1xuICAgICAgICBpZiAoc2l6ZUluTWIgPiA2KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSWYgeW91IHNldFN0YXRlIHRoZSBjcm9wIGluIGhlcmUgeW91IHNob3VsZCByZXR1cm4gZmFsc2UuXG4gIG9uSW1hZ2VMb2FkZWQgPSBpbWFnZSA9PiB7XG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xuICAgIGxldCBuZXdDcm9wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmNyb3ApKTtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0pIHtcbiAgICAgIGxldCBpbXBvcnRhbnRQYXJ0ID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0uaW1wb3J0YW50UGFydDtcbiAgICAgIGlmICghaW1wb3J0YW50UGFydCkge1xuICAgICAgICBpbXBvcnRhbnRQYXJ0ID0ge1xuICAgICAgICAgIHg6IDAuMDUsXG4gICAgICAgICAgeTogMC4wNSxcbiAgICAgICAgICBoZWlnaHQ6IDAuOSxcbiAgICAgICAgICB3aWR0aDogMC45XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5ld0Nyb3AueCA9IGltcG9ydGFudFBhcnQueCAqIHRoaXMuaW1hZ2VSZWYud2lkdGg7XG4gICAgICBuZXdDcm9wLnkgPSBpbXBvcnRhbnRQYXJ0LnkgKiB0aGlzLmltYWdlUmVmLmhlaWdodDtcbiAgICAgIG5ld0Nyb3Aud2lkdGggPSBpbXBvcnRhbnRQYXJ0LndpZHRoICogdGhpcy5pbWFnZVJlZi53aWR0aDtcbiAgICAgIG5ld0Nyb3AuaGVpZ2h0ID0gaW1wb3J0YW50UGFydC5oZWlnaHQgKiB0aGlzLmltYWdlUmVmLmhlaWdodDtcbiAgICAgIG5ld0Nyb3AudW5pdCA9IFwicHhcIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Nyb3A6IG5ld0Nyb3B9LCAoKSA9PiB0aGlzLm9uQ3JvcENvbXBsZXRlKG5ld0Nyb3ApKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgYXN5bmMgb25Dcm9wQ29tcGxldGUgKGNyb3ApIHtcbiAgICBhd2FpdCB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xuICAgIGxldCBpbWFnZURhdGEgPSB7XG4gICAgICBpbWFnZURhdGE6IHRoaXMuc3RhdGUuc3JjLFxuICAgICAgaW1wb3J0YW50UGFydDoge1xuICAgICAgICB4OiBjcm9wLnggLyB0aGlzLmltYWdlUmVmLndpZHRoLFxuICAgICAgICB5OiBjcm9wLnkgLyB0aGlzLmltYWdlUmVmLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IGNyb3Aud2lkdGggLyB0aGlzLmltYWdlUmVmLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNyb3AuaGVpZ2h0IC8gdGhpcy5pbWFnZVJlZi5oZWlnaHRcbiAgICAgIH0sXG4gICAgICBpbWFnZU5hbWU6IHRoaXMuc3RhdGUuaW1hZ2VOYW1lXG4gICAgfTtcbiAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBkYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV0gPSBpbWFnZURhdGE7XG4gICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCBkYXRhLCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAvLyBBamF4IHVwbG9hZCBoZXJlXG4gICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy5maWVsZC51cGxvYWRVcmwsIHsnaW1hZ2UnOiBpbWFnZURhdGEsICdjaGlsZElkJzogZGF0YS51dWlkfSkuZG9uZSgoZGF0YSkgPT4ge30pO1xuICB9O1xuXG4gIG9uQ3JvcENoYW5nZSA9IChjcm9wLCBwZXJjZW50Q3JvcCkgPT4ge1xuICAgIC8vIFlvdSBjb3VsZCBhbHNvIHVzZSBwZXJjZW50Q3JvcDpcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgY3JvcDogcGVyY2VudENyb3AgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3A6IHBlcmNlbnRDcm9wIH0pO1xuICB9O1xuXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXG4gICAgICAgIGNyb3AsXG4gICAgICAgICduZXdGaWxlLmpwZWcnXG4gICAgICApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybDogY3JvcHBlZEltYWdlVXJsIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBpbWFnZSxcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY3JvcC53aWR0aCxcbiAgICAgIGNyb3AuaGVpZ2h0XG4gICAgKTtcblxuICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmxhYmVsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZCkge1xuICAgICAgICBsYWJlbCA9IDxsYWJlbCBjbGFzc05hbWU9e1wibGFiZWwtZmlsZSBjNGctcmVxdWlyZWRcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IDxsYWJlbCBjbGFzc05hbWU9e1wibGFiZWwtZmlsZVwifT57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPlxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmllbGROYW1lID0gdGhpcy5wcm9wcy5maWVsZC5uYW1lO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoPHNtYWxsIGNsYXNzTmFtZT17XCJmaWVsZC1kZXNjcmlwdGlvbiBmb3JtLXRleHQgdGV4dC1tdXRlZFwifT57dGhpcy5wcm9wcy5maWVsZC5kZXNjcmlwdGlvbn08L3NtYWxsPik7XG4gICAgfVxuXG5cbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgIGlmIChzcmMpIHtcbiAgICAgIHZhbHVlID0gc3JjLnNwbGl0KCcvJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZvcm0tZ3JvdXBcIn0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDxpbnB1dCB0eXBlPXtcImZpbGVcIn0gYWNjZXB0PVwiLmpwZywgLnBuZywgLmpwZWdcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IGlkPXtmaWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wtZmlsZVwifSByZWY9eyhub2RlKSA9PiB7dGhpcy5pbnB1dFJlZiA9IG5vZGU7fX1cbiAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMuZmllbGQucmVxdWlyZWQgJiYgIWNyb3BwZWRJbWFnZVVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt2YWx1ZSAmJiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT17J2hpZGRlbid9XG4gICAgICAgICAgICAgIG5hbWU9e2ZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzcmMgJiYgKFxuICAgICAgICAgIDxSZWFjdENyb3BcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgY3JvcD17Y3JvcH1cbiAgICAgICAgICAgIHJ1bGVPZlRoaXJkc1xuICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxuICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y3JvcHBlZEltYWdlVXJsICYmIChcbiAgICAgICAgICA8aW1nIGFsdD1cIkNyb3BcIiBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnIH19IHNyYz17Y3JvcHBlZEltYWdlVXJsfSAvPlxuICAgICAgICApfVxuICAgICAgICB7c3JjICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudW5zZXRJbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNMSUNLX1RPX1JFTU9WRV9JTUFHRX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidG4gYnRuLXByaW1hcnkgYnRuLXJlbW92ZSByZW1vdmUtaW1hZ2UgXCIgKyB0aGlzLnByb3BzLmZpZWxkLm5hbWV9Pnt0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5SRU1PVkVfSU1BR0V9PC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICB1bnNldEltYWdlKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXSA9IG51bGw7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzcmM6IG51bGwsXG4gICAgICBpbWFnZU5hbWU6IG51bGwsXG4gICAgICBjcm9wOiBudWxsLFxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmZvcm0ucHJvcHMudXBkYXRlRnVuY3Rpb24odGhpcy5wcm9wcy5mb3JtLnByb3BzLm5hbWUsIGRhdGEsIHRoaXMucHJvcHMuZmllbGQpO1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IHt1dWlkOiBkYXRhLnV1aWQsIGZpZWxkTmFtZTogdGhpcy5wcm9wcy5maWVsZC5uYW1lfTtcbiAgICBqUXVlcnkucG9zdCh0aGlzLnByb3BzLmZpZWxkLnJlbW92ZUltYWdlVXJsLCByZXF1ZXN0RGF0YSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7fSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0SW1hZ2VDcm9wIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9zd2VldGFsZXJ0IiwiX2pzIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtQXN5bmNocm9ub3VzQ3JvcHBlZEZpbGVVcGxvYWRGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfZGVmaW5lUHJvcGVydHkyIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJpbWFnZU5hbWUiLCJuYW1lIiwiY2hlY2tGaWxlU2l6ZSIsImFsbG93ZWRGaWxlVHlwZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJpbWFnZVR5cGUiLCJsb2FkSW1hZ2UiLCJpbWciLCJiYXNlNjRkYXRhIiwidG9EYXRhVVJMIiwic2V0U3RhdGUiLCJzcmMiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZmllbGQiLCJ0aXRsZUZpbGVUb29CaWciLCJ0ZXh0IiwidGV4dEZpbGVUb29CaWciLCJ2YWx1ZSIsImltYWdlIiwiaW1hZ2VSZWYiLCJuZXdDcm9wIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdGUiLCJjcm9wIiwiZGF0YSIsImltcG9ydGFudFBhcnQiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwidW5pdCIsIm9uQ3JvcENvbXBsZXRlIiwicGVyY2VudENyb3AiLCJnZXRDcm9wcGVkSW1nIiwiYmluZCIsIm9uU2VsZWN0RmlsZSIsIm9uSW1hZ2VMb2FkZWQiLCJtYWtlQ2xpZW50Q3JvcCIsIm9uQ3JvcENoYW5nZSIsInVuc2V0SW1hZ2UiLCJjcm9wcGVkSW1hZ2VVcmwiLCJwYXRoIiwiaW5wdXRSZWYiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsImZpbGUiLCJmaWxlc2l6ZSIsInNpemUiLCJzaXplSW5LYiIsInNpemVJbk1iIiwiX29uQ3JvcENvbXBsZXRlIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJpbWFnZURhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwialF1ZXJ5IiwicG9zdCIsInVwbG9hZFVybCIsInV1aWQiLCJkb25lIiwic3RvcCIsIl94IiwiYXJndW1lbnRzIiwiX21ha2VDbGllbnRDcm9wIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzZW50IiwiX3gyIiwiZmlsZU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInJlbmRlciIsIl90aGlzMiIsImxhYmVsIiwicmVxdWlyZWQiLCJjbGFzc05hbWUiLCJfdGhpcyRzdGF0ZSIsImZpZWxkTmFtZSIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJGcmFnbWVudCIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiaWQiLCJyZWYiLCJub2RlIiwicnVsZU9mVGhpcmRzIiwib25Db21wbGV0ZSIsImFsdCIsInN0eWxlIiwibWF4V2lkdGgiLCJvbkNsaWNrIiwibGFuZ3VhZ2VSZWZzIiwiQ0xJQ0tfVE9fUkVNT1ZFX0lNQUdFIiwiUkVNT1ZFX0lNQUdFIiwicmVxdWVzdERhdGEiLCJyZW1vdmVJbWFnZVVybCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=