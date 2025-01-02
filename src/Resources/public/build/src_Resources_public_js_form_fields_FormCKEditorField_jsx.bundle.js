"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_form_fields_FormCKEditorField_jsx"],{

/***/ "./src/Resources/public/js/form/fields/FormCKEditorField.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/form/fields/FormCKEditorField.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _ckeditor5React = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
var _ckeditor5BuildClassic = _interopRequireDefault(__webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"));
var _de = _interopRequireDefault(__webpack_require__(/*! @ckeditor/ckeditor5-build-classic/build/translations/de.js */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/translations/de.js"));
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
var FormCKEditorField = exports["default"] = /*#__PURE__*/function (_Component) {
  function FormCKEditorField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FormCKEditorField);
    _this = _callSuper(this, FormCKEditorField, [props]);

    // ckeditor reference
    _this.editor = null;
    return _this;
  }
  (0, _inherits2["default"])(FormCKEditorField, _Component);
  return (0, _createClass2["default"])(FormCKEditorField, [{
    key: "handleChangeDummy",
    value: function handleChangeDummy(data) {
      // So react won't throw warnings, do not replace this with a readOnly attribute since that will break validation
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var label = null;
      if (this.props.field.label) {
        if (this.props.field.required) {
          label = /*#__PURE__*/_react["default"].createElement("label", {
            className: "c4g-required"
          }, this.props.field.label);
        } else {
          label = /*#__PURE__*/_react["default"].createElement("label", null, this.props.field.label);
        }
      }
      var description = null;
      if (this.props.field.description) {
        description = /*#__PURE__*/_react["default"].createElement("small", {
          className: "field-description form-text text-muted"
        }, this.props.field.description);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.field.name
      }, label, /*#__PURE__*/_react["default"].createElement("div", {
        id: this.props.field.name
      }, /*#__PURE__*/_react["default"].createElement(_ckeditor5React.CKEditor, {
        editor: _ckeditor5BuildClassic["default"],
        data: this.props.data[this.props.field.name],
        onReady: function onReady(editor) {
          _this2.editor = editor;
        },
        onChange: function onChange(event, editor) {
          var data = editor.getData();
          _this2.props.form.props.updateFunction(_this2.props.form.props.name, (0, _defineProperty2["default"])({}, _this2.props.field.name, data), _this2.props.field);
        },
        onBlur: function onBlur(event, editor) {},
        onFocus: function onFocus(event, editor) {},
        config: {
          placeholder: this.props.field.placeholder,
          toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList'],
          heading: {
            options: [{
              model: 'paragraph',
              title: this.props.field.paragraphLabel,
              "class": 'ck-heading_paragraph'
            }, {
              model: 'heading2',
              view: 'h2',
              title: this.props.field.headingLabel[0],
              "class": 'ck-heading_heading2'
            }, {
              model: 'heading3',
              view: 'h3',
              title: this.props.field.headingLabel[1],
              "class": 'ck-heading_heading3'
            }, {
              model: 'bulletedList',
              view: 'ul',
              title: this.props.field.bulletedListLabel,
              "class": 'ck-bulletedList'
            }, {
              model: 'numberedList',
              view: 'ol',
              title: this.props.field.numberedListLabel,
              "class": 'ck-numberedList'
            }]
          },
          language: this.props.field.language || "de"
        }
      }), /*#__PURE__*/_react["default"].createElement("textarea", {
        tabIndex: -1,
        autoComplete: "off",
        style: {
          opacity: 0,
          height: 0,
          pointerEvents: "none"
        },
        value: this.props.data[this.props.field.name],
        name: this.props.field.name,
        required: this.props.field.required,
        onChange: this.handleChangeDummy
      })), description);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfZm9ybV9maWVsZHNfRm9ybUNLRWRpdG9yRmllbGRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxlQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQUUsc0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxHQUFBLEdBQUFELHNCQUFBLENBQUFILG1CQUFBO0FBQStFLFNBQUFLLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBUCx3QkFBQU8sQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFKLENBQUEsRUFBQU0sQ0FBQSxFQUFBRyxDQUFBLElBQUFULENBQUEsQ0FBQU0sQ0FBQSxJQUFBZCxDQUFBLENBQUFjLENBQUEsWUFBQU4sQ0FBQSxjQUFBUixDQUFBLEVBQUFHLENBQUEsSUFBQUEsQ0FBQSxDQUFBZSxHQUFBLENBQUFsQixDQUFBLEVBQUFRLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFXLFdBQUFoQixDQUFBLEVBQUFpQixDQUFBLEVBQUFwQixDQUFBLFdBQUFvQixDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQW5CLENBQUEsRUFBQW9CLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFwQixDQUFBLFlBQUFxQixnQkFBQSxhQUFBbEIsQ0FBQSxFQUFBdUIsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQXhCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBcEIsQ0FBQSxJQUFBeUIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQXpCLENBQUEsYUFBQW9CLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFwQixDQUFBLFVBYi9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBZXFCNEIsaUJBQWlCLEdBQUFDLGtCQUFBLDBCQUFBQyxVQUFBO0VBRXBDLFNBQUFGLGtCQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFMLGlCQUFBO0lBQ2pCSSxLQUFBLEdBQUFoQixVQUFBLE9BQUFZLGlCQUFBLEdBQU1HLEtBQUs7O0lBRVg7SUFDQUMsS0FBQSxDQUFLRSxNQUFNLEdBQUcsSUFBSTtJQUFDLE9BQUFGLEtBQUE7RUFDckI7RUFBQyxJQUFBRyxVQUFBLGFBQUFQLGlCQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBTSxhQUFBLGFBQUFSLGlCQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLGlCQUFpQkEsQ0FBQ0MsSUFBSSxFQUFFO01BQ3RCO0lBQUE7RUFDRDtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBRyxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ1AsSUFBSUMsS0FBSyxHQUFHLElBQUk7TUFDaEIsSUFBSSxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsS0FBSyxDQUFDRCxLQUFLLEVBQUU7UUFDMUIsSUFBSSxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsS0FBSyxDQUFDQyxRQUFRLEVBQUU7VUFDN0JGLEtBQUssZ0JBQUd0RCxNQUFBLFlBQUF5RCxhQUFBO1lBQU9DLFNBQVMsRUFBRTtVQUFlLEdBQUUsSUFBSSxDQUFDaEIsS0FBSyxDQUFDYSxLQUFLLENBQUNELEtBQWEsQ0FBQztRQUM1RSxDQUFDLE1BQU07VUFDTEEsS0FBSyxnQkFBR3RELE1BQUEsWUFBQXlELGFBQUEsZ0JBQVEsSUFBSSxDQUFDZixLQUFLLENBQUNhLEtBQUssQ0FBQ0QsS0FBYSxDQUFDO1FBQ2pEO01BQ0Y7TUFFQSxJQUFJSyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2EsS0FBSyxDQUFDSSxXQUFXLEVBQUU7UUFDaENBLFdBQVcsZ0JBQUkzRCxNQUFBLFlBQUF5RCxhQUFBO1VBQU9DLFNBQVMsRUFBRTtRQUF5QyxHQUFFLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2EsS0FBSyxDQUFDSSxXQUFtQixDQUFFO01BQ3BIO01BRUEsb0JBQ0UzRCxNQUFBLFlBQUF5RCxhQUFBO1FBQUtDLFNBQVMsRUFBRSxJQUFJLENBQUNoQixLQUFLLENBQUNhLEtBQUssQ0FBQ0s7TUFBSyxHQUNuQ04sS0FBSyxlQUNOdEQsTUFBQSxZQUFBeUQsYUFBQTtRQUFLSSxFQUFFLEVBQUUsSUFBSSxDQUFDbkIsS0FBSyxDQUFDYSxLQUFLLENBQUNLO01BQUssZ0JBQzdCNUQsTUFBQSxZQUFBeUQsYUFBQSxDQUFDdEQsZUFBQSxDQUFBMkQsUUFBUTtRQUNQakIsTUFBTSxFQUFHa0IsaUNBQWU7UUFDeEJaLElBQUksRUFBRSxJQUFJLENBQUNULEtBQUssQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ1QsS0FBSyxDQUFDYSxLQUFLLENBQUNLLElBQUksQ0FBRTtRQUM3Q0ksT0FBTyxFQUFHLFNBQVZBLE9BQU9BLENBQUduQixNQUFNLEVBQUk7VUFDbEJRLE1BQUksQ0FBQ1IsTUFBTSxHQUFHQSxNQUFNO1FBQ3RCLENBQUc7UUFDSG9CLFFBQVEsRUFBRyxTQUFYQSxRQUFRQSxDQUFLQyxLQUFLLEVBQUVyQixNQUFNLEVBQU07VUFDOUIsSUFBTU0sSUFBSSxHQUFHTixNQUFNLENBQUNzQixPQUFPLENBQUMsQ0FBQztVQUM3QmQsTUFBSSxDQUFDWCxLQUFLLENBQUMwQixJQUFJLENBQUMxQixLQUFLLENBQUMyQixjQUFjLENBQUNoQixNQUFJLENBQUNYLEtBQUssQ0FBQzBCLElBQUksQ0FBQzFCLEtBQUssQ0FBQ2tCLElBQUksTUFBQVUsZ0JBQUEsaUJBQUlqQixNQUFJLENBQUNYLEtBQUssQ0FBQ2EsS0FBSyxDQUFDSyxJQUFJLEVBQUdULElBQUksR0FBR0UsTUFBSSxDQUFDWCxLQUFLLENBQUNhLEtBQUssQ0FBQztRQUNySCxDQUFHO1FBQ0hnQixNQUFNLEVBQUcsU0FBVEEsTUFBTUEsQ0FBS0wsS0FBSyxFQUFFckIsTUFBTSxFQUFNLENBRTlCLENBQUc7UUFDSDJCLE9BQU8sRUFBRyxTQUFWQSxPQUFPQSxDQUFLTixLQUFLLEVBQUVyQixNQUFNLEVBQU0sQ0FFL0IsQ0FBRztRQUNINEIsTUFBTSxFQUFFO1VBQ05DLFdBQVcsRUFBRSxJQUFJLENBQUNoQyxLQUFLLENBQUNhLEtBQUssQ0FBQ21CLFdBQVc7VUFDekNDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO1VBQzNFQyxPQUFPLEVBQUU7WUFDUEMsT0FBTyxFQUFFLENBQ1A7Y0FBRUMsS0FBSyxFQUFFLFdBQVc7Y0FBRUMsS0FBSyxFQUFFLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ2EsS0FBSyxDQUFDeUIsY0FBYztjQUFFLFNBQU87WUFBdUIsQ0FBQyxFQUM3RjtjQUFFRixLQUFLLEVBQUUsVUFBVTtjQUFFRyxJQUFJLEVBQUUsSUFBSTtjQUFFRixLQUFLLEVBQUUsSUFBSSxDQUFDckMsS0FBSyxDQUFDYSxLQUFLLENBQUMyQixZQUFZLENBQUMsQ0FBQyxDQUFDO2NBQUUsU0FBTztZQUFzQixDQUFDLEVBQ3hHO2NBQUVKLEtBQUssRUFBRSxVQUFVO2NBQUVHLElBQUksRUFBRSxJQUFJO2NBQUVGLEtBQUssRUFBRSxJQUFJLENBQUNyQyxLQUFLLENBQUNhLEtBQUssQ0FBQzJCLFlBQVksQ0FBQyxDQUFDLENBQUM7Y0FBRSxTQUFPO1lBQXNCLENBQUMsRUFDeEc7Y0FBRUosS0FBSyxFQUFFLGNBQWM7Y0FBRUcsSUFBSSxFQUFFLElBQUk7Y0FBRUYsS0FBSyxFQUFFLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ2EsS0FBSyxDQUFDNEIsaUJBQWlCO2NBQUUsU0FBTztZQUFrQixDQUFDLEVBQzFHO2NBQUVMLEtBQUssRUFBRSxjQUFjO2NBQUVHLElBQUksRUFBRSxJQUFJO2NBQUVGLEtBQUssRUFBRSxJQUFJLENBQUNyQyxLQUFLLENBQUNhLEtBQUssQ0FBQzZCLGlCQUFpQjtjQUFFLFNBQU87WUFBa0IsQ0FBQztVQUU5RyxDQUFDO1VBQ0RDLFFBQVEsRUFBRSxJQUFJLENBQUMzQyxLQUFLLENBQUNhLEtBQUssQ0FBQzhCLFFBQVEsSUFBSTtRQUN6QztNQUFFLENBQ0gsQ0FBQyxlQUNGckYsTUFBQSxZQUFBeUQsYUFBQTtRQUFVNkIsUUFBUSxFQUFFLENBQUMsQ0FBRTtRQUNiQyxZQUFZLEVBQUUsS0FBTTtRQUNwQkMsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBRSxDQUFDO1VBQUVDLE1BQU0sRUFBRSxDQUFDO1VBQUVDLGFBQWEsRUFBRTtRQUFNLENBQUU7UUFDdkQxQyxLQUFLLEVBQUUsSUFBSSxDQUFDUCxLQUFLLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNULEtBQUssQ0FBQ2EsS0FBSyxDQUFDSyxJQUFJLENBQUU7UUFDOUNBLElBQUksRUFBRSxJQUFJLENBQUNsQixLQUFLLENBQUNhLEtBQUssQ0FBQ0ssSUFBSztRQUM1QkosUUFBUSxFQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDYSxLQUFLLENBQUNDLFFBQVM7UUFDcENTLFFBQVEsRUFBRSxJQUFJLENBQUNmO01BQWtCLENBQ2pDLENBQ1AsQ0FBQyxFQUNMUyxXQUNFLENBQUM7SUFFVjtFQUFDO0FBQUEsRUEzRTRDaUMsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9mb3JtL2ZpZWxkcy9Gb3JtQ0tFZGl0b3JGaWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDS0VkaXRvcn0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdCc7XG5pbXBvcnQgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xuaW1wb3J0IGRlTGFuZyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMvYnVpbGQvdHJhbnNsYXRpb25zL2RlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ0tFZGl0b3JGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBja2VkaXRvciByZWZlcmVuY2VcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VEdW1teShkYXRhKSB7XG4gICAgLy8gU28gcmVhY3Qgd29uJ3QgdGhyb3cgd2FybmluZ3MsIGRvIG5vdCByZXBsYWNlIHRoaXMgd2l0aCBhIHJlYWRPbmx5IGF0dHJpYnV0ZSBzaW5jZSB0aGF0IHdpbGwgYnJlYWsgdmFsaWRhdGlvblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmllbGQubGFiZWwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLnJlcXVpcmVkKSB7XG4gICAgICAgIGxhYmVsID0gPGxhYmVsIGNsYXNzTmFtZT17XCJjNGctcmVxdWlyZWRcIn0+e3RoaXMucHJvcHMuZmllbGQubGFiZWx9PC9sYWJlbD47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IDxsYWJlbD57dGhpcy5wcm9wcy5maWVsZC5sYWJlbH08L2xhYmVsPjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9ICg8c21hbGwgY2xhc3NOYW1lPXtcImZpZWxkLWRlc2NyaXB0aW9uIGZvcm0tdGV4dCB0ZXh0LW11dGVkXCJ9Pnt0aGlzLnByb3BzLmZpZWxkLmRlc2NyaXB0aW9ufTwvc21hbGw+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZmllbGQubmFtZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5maWVsZC5uYW1lfT5cbiAgICAgICAgICA8Q0tFZGl0b3JcbiAgICAgICAgICAgIGVkaXRvcj17IENsYXNzaWNFZGl0b3IgfVxuICAgICAgICAgICAgZGF0YT17dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZmllbGQubmFtZV19XG4gICAgICAgICAgICBvblJlYWR5PXsgZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnByb3BzLnVwZGF0ZUZ1bmN0aW9uKHRoaXMucHJvcHMuZm9ybS5wcm9wcy5uYW1lLCB7W3RoaXMucHJvcHMuZmllbGQubmFtZV06IGRhdGF9LCB0aGlzLnByb3BzLmZpZWxkKTtcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25CbHVyPXsgKCBldmVudCwgZWRpdG9yICkgPT4ge1xuXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRm9jdXM9eyAoIGV2ZW50LCBlZGl0b3IgKSA9PiB7XG5cbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLmZpZWxkLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICB0b29sYmFyOiBbJ2hlYWRpbmcnLCAnfCcsICdib2xkJywgJ2l0YWxpYycsICdidWxsZXRlZExpc3QnLCAnbnVtYmVyZWRMaXN0J10sXG4gICAgICAgICAgICAgIGhlYWRpbmc6IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICB7IG1vZGVsOiAncGFyYWdyYXBoJywgdGl0bGU6IHRoaXMucHJvcHMuZmllbGQucGFyYWdyYXBoTGFiZWwsIGNsYXNzOiAnY2staGVhZGluZ19wYXJhZ3JhcGgnIH0sXG4gICAgICAgICAgICAgICAgICB7IG1vZGVsOiAnaGVhZGluZzInLCB2aWV3OiAnaDInLCB0aXRsZTogdGhpcy5wcm9wcy5maWVsZC5oZWFkaW5nTGFiZWxbMF0sIGNsYXNzOiAnY2staGVhZGluZ19oZWFkaW5nMicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbW9kZWw6ICdoZWFkaW5nMycsIHZpZXc6ICdoMycsIHRpdGxlOiB0aGlzLnByb3BzLmZpZWxkLmhlYWRpbmdMYWJlbFsxXSwgY2xhc3M6ICdjay1oZWFkaW5nX2hlYWRpbmczJyB9LFxuICAgICAgICAgICAgICAgICAgeyBtb2RlbDogJ2J1bGxldGVkTGlzdCcsIHZpZXc6ICd1bCcsIHRpdGxlOiB0aGlzLnByb3BzLmZpZWxkLmJ1bGxldGVkTGlzdExhYmVsLCBjbGFzczogJ2NrLWJ1bGxldGVkTGlzdCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbW9kZWw6ICdudW1iZXJlZExpc3QnLCB2aWV3OiAnb2wnLCB0aXRsZTogdGhpcy5wcm9wcy5maWVsZC5udW1iZXJlZExpc3RMYWJlbCwgY2xhc3M6ICdjay1udW1iZXJlZExpc3QnIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLnByb3BzLmZpZWxkLmxhbmd1YWdlIHx8IFwiZGVcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0YXJlYSB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17XCJvZmZcIn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAwLCBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5maWVsZC5uYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5maWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5maWVsZC5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRHVtbXl9PlxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9ja2VkaXRvcjVSZWFjdCIsIl9ja2VkaXRvcjVCdWlsZENsYXNzaWMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2RlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJGb3JtQ0tFZGl0b3JGaWVsZCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJlZGl0b3IiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlRHVtbXkiLCJkYXRhIiwicmVuZGVyIiwiX3RoaXMyIiwibGFiZWwiLCJmaWVsZCIsInJlcXVpcmVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwibmFtZSIsImlkIiwiQ0tFZGl0b3IiLCJDbGFzc2ljRWRpdG9yIiwib25SZWFkeSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJnZXREYXRhIiwiZm9ybSIsInVwZGF0ZUZ1bmN0aW9uIiwiX2RlZmluZVByb3BlcnR5MiIsIm9uQmx1ciIsIm9uRm9jdXMiLCJjb25maWciLCJwbGFjZWhvbGRlciIsInRvb2xiYXIiLCJoZWFkaW5nIiwib3B0aW9ucyIsIm1vZGVsIiwidGl0bGUiLCJwYXJhZ3JhcGhMYWJlbCIsInZpZXciLCJoZWFkaW5nTGFiZWwiLCJidWxsZXRlZExpc3RMYWJlbCIsIm51bWJlcmVkTGlzdExhYmVsIiwibGFuZ3VhZ2UiLCJ0YWJJbmRleCIsImF1dG9Db21wbGV0ZSIsInN0eWxlIiwib3BhY2l0eSIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9