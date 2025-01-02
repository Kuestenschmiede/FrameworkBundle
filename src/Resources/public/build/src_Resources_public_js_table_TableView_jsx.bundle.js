"use strict";
(self["webpackChunkframeworkbundle"] = self["webpackChunkframeworkbundle"] || []).push([["src_Resources_public_js_table_TableView_jsx"],{

/***/ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js":
/*!********************************************************************!*\
  !*** ../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../CoreBundle/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlertHandler = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../CoreBundle/node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../CoreBundle/node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../CoreBundle/node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../CoreBundle/node_modules/@babel/runtime/helpers/createClass.js"));
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js"));
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2025, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
/**
 * The "cssClass" parameter in the functions can either be a string or an object. If it's a string, it will be applied
 * as class for the popup. If an object is passed, the classes can be set more precise. The following properties are
 * possible in the object:
 * cssClass: {
 *   container: 'container-class',
 *   popup: 'popup-class',
 *   header: 'header-class',
 *   title: 'title-class',
 *   closeButton: 'close-button-class',
 *   icon: 'icon-class',
 *   image: 'image-class',
 *   content: 'content-class',
 *   input: 'input-class',
 *   actions: 'actions-class',
 *   confirmButton: 'confirm-button-class',
 *   cancelButton: 'cancel-button-class',
 *   footer: 'footer-class'
 * }
 */
var AlertHandler = exports.AlertHandler = /*#__PURE__*/function () {
  function AlertHandler() {
    (0, _classCallCheck2["default"])(this, AlertHandler);
  }
  return (0, _createClass2["default"])(AlertHandler, [{
    key: "showErrorDialog",
    value: function showErrorDialog(title, content, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "error",
        customClass: cssClass ? cssClass : ''
      });
    }
  }, {
    key: "showInfoDialog",
    value: function showInfoDialog(title, content, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        customClass: cssClass ? cssClass : ''
      });
      ;
    }
  }, {
    key: "showInfoActionDialog",
    value: function showInfoActionDialog(title, content, confirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        customClass: cssClass ? cssClass : ''
      }).then(function () {
        confirmCallback();
      });
    }
  }, {
    key: "showInfoActionDialog2",
    value: function showInfoActionDialog2(title, content, confirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: content,
        icon: "info",
        showLoaderOnConfirm: true,
        customClass: cssClass ? cssClass : '',
        preConfirm: function preConfirm(data) {
          confirmCallback();
        }
      });
    }
  }, {
    key: "showConfirmDialog",
    value: function showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        customClass: cssClass ? cssClass : ''
      }).then(function (willDelete) {
        if (willDelete.value) {
          confirmCallback();
        } else {
          cancelCallback();
        }
      });
    }
  }, {
    key: "showConfirmDialogHTML",
    value: function showConfirmDialogHTML(title, html, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        html: html,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        customClass: cssClass ? cssClass : ''
      }).then(function (willDelete) {
        if (willDelete.value) {
          confirmCallback();
        } else {
          cancelCallback();
        }
      });
    }
  }, {
    key: "showPreConfirmDialog",
    value: function showPreConfirmDialog(title, text, preConfirmCallback, confirmText, cancelText, cssClass, showLoading) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: confirmText ? confirmText : "Confirm",
        cancelButtonText: cancelText ? cancelText : "Cancel",
        showLoaderOnConfirm: showLoading ? showLoading : true,
        preConfirm: function preConfirm() {
          return new Promise(function (data) {
            preConfirmCallback();
          });
        },
        allowOutsideClick: function allowOutsideClick() {
          return !_sweetalert["default"].isLoading();
        },
        customClass: cssClass ? cssClass : ''
      });
    }
  }, {
    key: "showLoadingDialog",
    value: function showLoadingDialog(title, text, preConfirmCallback, cssClass) {
      _sweetalert["default"].fire({
        title: title,
        text: text,
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showLoaderOnConfirm: true,
        onBeforeOpen: function onBeforeOpen() {
          _sweetalert["default"].clickConfirm();
        },
        customClass: cssClass ? cssClass : '',
        preConfirm: function preConfirm() {
          return new Promise(function (data) {
            preConfirmCallback();
          });
        }
      });
    }
  }, {
    key: "showSelectDialog",
    value: function () {
      var _showSelectDialog = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(title, objOptions, confirmText, cancelText, cssClass) {
        var _yield$Swal$fire, selectedValue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _sweetalert["default"].fire({
                title: title,
                input: 'select',
                inputOptions: objOptions,
                inputPlaceholder: '-',
                showCancelButton: true,
                confirmButtonText: confirmText,
                cancelButtonText: cancelText,
                customClass: cssClass ? cssClass : ''
              });
            case 2:
              _yield$Swal$fire = _context.sent;
              selectedValue = _yield$Swal$fire.value;
              return _context.abrupt("return", selectedValue);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function showSelectDialog(_x, _x2, _x3, _x4, _x5) {
        return _showSelectDialog.apply(this, arguments);
      }
      return showSelectDialog;
    }()
  }]);
}();

/***/ }),

/***/ "./src/Resources/public/js/table/TableView.jsx":
/*!*****************************************************!*\
  !*** ./src/Resources/public/js/table/TableView.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _FormView = _interopRequireDefault(__webpack_require__(/*! ../form/FormView.jsx */ "./src/Resources/public/js/form/FormView.jsx"));
var _TableButton = __webpack_require__(/*! ./button/TableButton.jsx */ "./src/Resources/public/js/table/button/TableButton.jsx");
var _ModalDetailTableButton = __webpack_require__(/*! ./button/ModalDetailTableButton.jsx */ "./src/Resources/public/js/table/button/ModalDetailTableButton.jsx");
var _PostActionButton = __webpack_require__(/*! ./button/PostActionButton.jsx */ "./src/Resources/public/js/table/button/PostActionButton.jsx");
var _material = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _AlertHandler = __webpack_require__(/*! ../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js");
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"));
var _sweetalert2ReactContent = _interopRequireDefault(__webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var MySwal = (0, _sweetalert2ReactContent["default"])(_sweetalert["default"]);
var MUIDataTable = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_mui-datatables_dist_index_js").then(__webpack_require__.bind(__webpack_require__, /*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js"));
});
var FormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./../form/fields/FormMapperField.jsx */ "./src/Resources/public/js/form/fields/FormMapperField.jsx"));
});
var TableView = exports["default"] = /*#__PURE__*/function (_Component) {
  function TableView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TableView);
    _this = _callSuper(this, TableView, [props]);
    (0, _defineProperty2["default"])(_this, "getMuiTheme", function () {
      return (0, _material.createTheme)({
        overrides: {
          MuiPaper: {
            elevation4: {
              boxShadow: "none"
            }
          },
          MuiToolbar: {
            gutters: {
              backgroundColor: "#f8f9fa",
              borderRadius: "0.25rem",
              paddingTop: "10px",
              paddingBottom: "10px"
            }
          }
        }
      });
    });
    _this.state = {
      selectedItems: [],
      activeForm: false,
      // will be set to true when a selection button is clicked,
      activeButton: null,
      // will be set when a selection button is clicked,
      data: JSON.parse(JSON.stringify(_this.props.data))
    };
    _this.formData = [];
    _this.selectedItems = [];
    _this.datatable = null;
    _this.addSelectedItem = _this.addSelectedItem.bind(_this);
    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    _this.cancelForm = _this.cancelForm.bind(_this);
    _this.setFormData = _this.setFormData.bind(_this);
    _this.fireRequest = _this.fireRequest.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TableView, _Component);
  return (0, _createClass2["default"])(TableView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var buttons = null;
      var regularButtons = null;
      // selection buttons
      if (this.state.selectedItems.length > 0 && this.props.component.selectionButtons && this.props.component.selectionButtons.length > 0) {
        buttons = /*#__PURE__*/_react["default"].createElement("div", {
          className: "action-button-container"
        }, this.props.component.selectionButtons.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            className: "btn",
            key: index,
            onClick: function onClick() {
              return _this2.handleButtonClick(item, index);
            }
          }, item.label);
        }));
      }
      // regular buttons
      if (this.props.component.tableButtons && this.props.component.tableButtons.length > 0) {
        regularButtons = /*#__PURE__*/_react["default"].createElement("div", {
          className: "action-button-container"
        }, this.props.component.tableButtons.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_TableButton.TableButton, {
            key: index,
            text: item.label,
            href: item.href,
            languageRefs: _this2.props.languageRefs
          });
        }));
      }
      var options = {
        textLabels: {
          body: {
            noMatch: this.props.languageRefs.TABLE_NO_MATCH,
            toolTip: this.props.languageRefs.TABLE_TOOLTIP,
            columnHeaderTooltip: function columnHeaderTooltip(column) {
              return "Sortierung f\xFCr ".concat(column.label);
            }
          },
          pagination: {
            next: this.props.languageRefs.TABLE_NEXT_PAGE,
            previous: this.props.languageRefs.TABLE_PREVIOUS_PAGE,
            rowsPerPage: this.props.languageRefs.TABLE_ROWS_PER_PAGE,
            displayRows: this.props.languageRefs.TABLE_DISPLAY_ROWS
          },
          toolbar: {
            search: this.props.languageRefs.TABLE_SEARCH,
            downloadCsv: this.props.languageRefs.TABLE_DOWNLOAD_CSV,
            print: this.props.languageRefs.TABLE_PRINT,
            viewColumns: this.props.languageRefs.TABLE_VIEW_COLUMNS,
            filterTable: this.props.languageRefs.TABLE_FILTER_TABLE
          },
          filter: {
            all: this.props.languageRefs.TABLE_FILTER_ALL,
            title: this.props.languageRefs.TABLE_FILTER_TITLE,
            reset: this.props.languageRefs.TABLE_FILTER_RESET
          },
          viewColumns: {
            title: this.props.languageRefs.TABLE_TITLE,
            titleAria: this.props.languageRefs.TABLE_TITLE_ARIA
          },
          selectedRows: {
            text: this.props.languageRefs.TABLE_SELECTED_TEXT,
            "delete": this.props.languageRefs.TABLE_SELECTED_DELETE,
            deleteAria: this.props.languageRefs.TABLE_SELECTED_DELETE_ARIA
          }
        }
      };
      if (this.props.component.tableButtons && this.props.component.tableButtons.length > 0) {
        options["customToolbar"] = function () {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, regularButtons);
        };
      }
      if (this.props.component.checkbox) {
        options["onRowSelectionChange"] = function (currentRowsSelected, allRowsSelected, rowsSelected) {
          _this2.addSelectedItem(currentRowsSelected, allRowsSelected, rowsSelected);
        };
      }
      if (this.props.component.selectionButtons && this.props.component.selectionButtons.length > 0) {
        options["customToolbarSelect"] = function () {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, buttons);
        };
      }
      var columns = this.createColumns(this.props.fields);
      if (this.props.component.checkbox) {
        options["selectableRows"] = "single";
      } else {
        options["selectableRows"] = "none";
      }
      options["rowsSelected"] = this.state.selectedItems;
      options["onTableChange"] = function (action, tableState) {
        _this2.persistParamsIntoStorage(tableState);
      };
      options["searchOpen"] = !!this.searchOpen;
      options["searchAlwaysOpen"] = true;
      options["responsive"] = "simple";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: ""
      }, /*#__PURE__*/_react["default"].createElement(_material.ThemeProvider, {
        theme: this.getMuiTheme()
      }, /*#__PURE__*/_react["default"].createElement(MUIDataTable, {
        data: this.state.data.filter(function (element) {
          return element != null;
        }),
        columns: columns,
        options: options,
        key: 0,
        ref: function ref(node) {
          return _this2.datatable = node;
        },
        title: this.props.component.headline,
        responsive: true
      })));
    }
  }, {
    key: "setFormData",
    value: function setFormData(name, objData) {
      this.formData = _objectSpread(_objectSpread({}, this.formData), objData);
    }
  }, {
    key: "addSelectedItem",
    value: function addSelectedItem(currentRowsSelected, allRowsSelected, rowsSelected) {
      this.setState({
        selectedItems: rowsSelected
      });
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(buttonConf, index) {
      var _this3 = this;
      // set props object to make form fields work
      buttonConf.form.props = {};
      buttonConf.form.props.updateFunction = this.setFormData;
      var form = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            textAlign: "center",
            margin: "auto"
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "bundles/con4gisframework/img/preloader-image.svg",
          className: "preloader-image",
          alt: ""
        }))
      }, /*#__PURE__*/_react["default"].createElement("form", {
        key: 1,
        className: "form-view",
        method: "POST"
      }, buttonConf.form.fields.map(function (item, id) {
        return /*#__PURE__*/_react["default"].createElement(FormMapperField, {
          form: buttonConf.form,
          field: item,
          data: [],
          key: id + 1
        });
      })));

      // show modal
      MySwal.fire({
        title: /*#__PURE__*/_react["default"].createElement("p", null, buttonConf.label),
        html: form,
        confirmButtonText: buttonConf.submitButtonLabel || this.props.languageRefs.CONFIRM,
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: buttonConf.cancelButtonLabel || this.props.languageRefs.CANCEL,
        customClass: {
          content: "zIndex-9",
          actions: "zIndex-8"
        }
      }).then(function (value) {
        if (value.isConfirmed) {
          _this3.submitForm(buttonConf);
        } else {
          _this3.cancelForm();
        }
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm(activeButton) {
      // event.preventDefault();
      // get id of selected dataset
      var selectedId = this.state.selectedItems[0];
      var selectedData = this.state.data[selectedId];
      var url = activeButton.form.url;
      this.formData.id = selectedData.id;
      jQuery.post(url, this.formData).done(function (responseData) {
        // this.resetSelection();
        location.reload();
      });
    }
  }, {
    key: "cancelForm",
    value: function cancelForm() {
      this.resetSelection();
    }
  }, {
    key: "format",
    value: function format(value, _format) {
      return _format.replace(/%s/g, value);
    }
  }, {
    key: "resetSelection",
    value: function resetSelection() {
      // delete selected row
      this.datatable.selectRowDelete();
      // set state, while rerendering the deleted row will be added again
      // this is used to clear the selection
      // since the used component has no API method to do so otherwise
      this.setState({
        selectedItems: []
      });
      this.selectedItems = [];
    }
  }, {
    key: "createColumns",
    value: function createColumns(fields) {
      var _this4 = this;
      var columns = [];
      var _loop = function _loop(i) {
        var column;
        switch (fields[i].type) {
          case "text":
            column = fields[i];
            if (fields[i].format !== '') {
              column.options.customBodyRender = function (value, tableMeta, updateValue) {
                return _this4.format(value, fields[i].format);
              };
            }
            columns.push(column);
            break;
          case "reference":
            column = fields[i];
            column.options.customBodyRender = function (value, tableMeta, updateValue) {
              return column.references[value];
            };
            columns.push(column);
            break;
          case "modal-detail-button":
            column = fields[i];
            column.options.customBodyRender = function (value, tableMeta, updateValue) {
              if (!!value) {
                return /*#__PURE__*/_react["default"].createElement(_ModalDetailTableButton.ModalDetailTableButton, {
                  buttonLabel: column.buttonLabel,
                  title: column.label,
                  message: value,
                  confirmButtonText: column.confirmButtonText,
                  className: column.className
                });
              } else {
                return '';
              }
            };
            columns.push(column);
            break;
          case "datetime":
            column = fields[i];
            column.options.customBodyRender = function (value, tableMeta, updateValue) {
              if (value === null) {
                return "";
              }
              var date = new Date(value * 1000);
              var day = date.getDate();
              if (day < 10) {
                day = '0' + day;
              }
              var month = date.getMonth() + 1;
              if (month < 10) {
                month = '0' + month;
              }
              var hours = date.getHours();
              if (hours < 10) {
                hours = '0' + hours;
              }
              var minutes = date.getMinutes();
              if (minutes < 10) {
                minutes = '0' + minutes;
              }
              var timeString = hours + ':' + minutes;
              var dateString = day + '.' + month + '.' + date.getFullYear() + ' ';
              if (timeString !== "00:00") {
                dateString += timeString;
              }
              return dateString;
            };
            columns.push(column);
            break;
          case "action-button":
            column = fields[i];
            column.options.customBodyRender = function (value, tableMeta, updateValue) {
              var buttons = [];
              for (var _i = 0; _i < column.actions.length; _i++) {
                var props = column.actions[_i];
                props['rowData'] = tableMeta.rowData;
                props['fields'] = fields;
                props['setRowData'] = _this4.props.setRowData;
                props['value'] = value;
                buttons.push(/*#__PURE__*/_react["default"].createElement(_PostActionButton.PostActionButton, (0, _extends2["default"])({
                  key: _i
                }, props)));
              }
              return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, buttons);
            };
            columns.push(column);
            break;
          case "button":
            var buttonCol = {
              name: fields[i].name,
              label: fields[i].label,
              options: {
                sort: false,
                viewColumns: false,
                filter: false,
                customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
                  if (fields[i].method === "POST") {
                    var callback = function callback(event) {
                      event.preventDefault();
                      event.stopPropagation();
                      _this4.fireRequest(fields[i].href.replace(fields[i].hrefField, value));
                    };
                    return /*#__PURE__*/_react["default"].createElement("a", {
                      onMouseUp: callback,
                      className: "btn btn-secondary"
                    }, fields[i].buttonText);
                  } else {
                    return /*#__PURE__*/_react["default"].createElement(_TableButton.TableButton, {
                      href: fields[i].href.replace(fields[i].hrefField, value),
                      text: fields[i].buttonText,
                      formFields: fields[i].formFields,
                      submitButtonLabel: fields[i].submitButtonLabel,
                      cancelButtonLabel: fields[i].cancelButtonLabel,
                      url: fields[i].url,
                      formHeadlineFieldIndex: fields[i].formHeadlineFieldIndex,
                      value: value,
                      rowData: tableMeta.rowData
                    });
                  }
                }
              }
            };
            columns.push(buttonCol);
            break;
          case "conditional-marker":
            var objMarkers = fields[i].markers;
            var markerCol = {
              name: fields[i].name,
              label: fields[i].label,
              options: {
                sort: false,
                customBodyRender: function customBodyRender(value) {
                  var markerData = objMarkers[value];
                  return /*#__PURE__*/_react["default"].createElement("span", {
                    className: markerData["class"],
                    "data-state": markerData.dataState,
                    "data-toggle": markerData.dataToggle,
                    "data-placement": markerData.dataPlacement,
                    title: markerData.title
                  });
                }
              }
            };
            columns.push(markerCol);
            break;
          default:
            columns.push(fields[i]);
        }
      };
      for (var i = 0; i < fields.length; i++) {
        _loop(i);
      }
      return columns;
    }
  }, {
    key: "fireRequest",
    value: function fireRequest(url) {
      // sanity check
      var ah = new _AlertHandler.AlertHandler();
      var confirmCallback = function confirmCallback() {
        jQuery.post(url).done(function (data) {
          if (data.success) {
            location.reload();
          }
        });
      };
      var cancelCallback = function cancelCallback() {};
      ah.showConfirmDialog(this.props.component.confirmationHeadline, this.props.component.confirmationMessage, confirmCallback, cancelCallback, this.props.component.confirmationYes, this.props.component.confirmationNo);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.component.loadDataAsync) {
        this.loadData();
      }
      if (!this.props.component.loadDataAsync) {
        this.applyParamsFromStorage();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.component.loadDataAsync) {
        if (prevState.data.length < this.state.data.length) {
          this.loadData();
        } else {
          this.finishedLoading = true;
        }
      } else {
        this.finishedLoading = true;
      }
      if (this.props.component.loadDataAsync && this.finishedLoading && !this.paramsRestored) {
        this.applyParamsFromStorage();
      }
    }
  }, {
    key: "applyParamsFromStorage",
    value: function applyParamsFromStorage() {
      var _this5 = this;
      var storageKey = this.props.component.storageKey;
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      if (params.has("groupId")) {
        var groupId = params.get("groupId");
        storageKey += "-" + groupId;
      }
      var filters = JSON.parse(window.localStorage.getItem(storageKey + '-filters'));
      var page = parseInt(window.localStorage.getItem(storageKey + '-page'), 10);
      var searchText = window.localStorage.getItem(storageKey + '-search');
      if (filters !== null && page !== null) {
        this.searchOpen = searchText !== "";
        window.setTimeout(function () {
          _this5.datatable.setState({
            filterList: filters,
            page: page,
            searchText: searchText
          }, function () {
            _this5.resetSelection();
            _this5.paramsRestored = true;
          });
        }, 1000);
      }
    }
  }, {
    key: "persistParamsIntoStorage",
    value: function persistParamsIntoStorage(tableState) {
      if (this.finishedLoading) {
        var storageKey = this.props.component.storageKey;
        var url = new URL(window.location);
        var params = new URLSearchParams(url.search);
        if (params.has("groupId")) {
          var groupId = params.get("groupId");
          storageKey += "-" + groupId;
        }
        window.localStorage.setItem(storageKey + "-filters", JSON.stringify(tableState.filterList));
        window.localStorage.setItem(storageKey + "-page", tableState.page);
        window.localStorage.setItem(storageKey + "-search", tableState.searchText === null ? "" : tableState.searchText);
      }
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this6 = this;
      var url = this.props.component.asyncDataUrl;
      url += "/" + this.state.data.length;
      jQuery.get(url).done(function (responseData) {
        var data = _this6.state.data.concat(responseData);
        _this6.setState({
          data: data
        });
      });
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/table/button/ModalDetailTableButton.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/table/button/ModalDetailTableButton.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ModalDetailTableButton = void 0;
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
var Modal = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_Modal_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/Modal.jsx */ "./src/Resources/public/js/modal/Modal.jsx"));
});
var ModalContentMessage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContentMessage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContentMessage.jsx */ "./src/Resources/public/js/modal/content/ModalContentMessage.jsx"));
});
var ModalDetailTableButton = exports.ModalDetailTableButton = /*#__PURE__*/function (_Component) {
  function ModalDetailTableButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalDetailTableButton);
    _this = _callSuper(this, ModalDetailTableButton, [props]);
    _this.state = {
      showModal: false
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ModalDetailTableButton, _Component);
  return (0, _createClass2["default"])(ModalDetailTableButton, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        className: 'c4g-btn ' + this.props.className,
        type: "button",
        onClick: this.showModal
      }, this.props.buttonLabel), /*#__PURE__*/_react["default"].createElement(Modal, {
        show: this.state.showModal
      }, /*#__PURE__*/_react["default"].createElement(ModalContentMessage, {
        title: this.props.title,
        message: this.props.message,
        onConfirm: this.closeModal,
        confirmButtonText: this.props.confirmButtonText
      })));
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/table/button/PostActionButton.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/table/button/PostActionButton.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PostActionButton = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
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
var Modal = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_Modal_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/Modal.jsx */ "./src/Resources/public/js/modal/Modal.jsx"));
});
var ModalContentMessage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContentMessage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContentMessage.jsx */ "./src/Resources/public/js/modal/content/ModalContentMessage.jsx"));
});
var ModalContentConfirmMessage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContentConfirmMessage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContentConfirmMessage.jsx */ "./src/Resources/public/js/modal/content/ModalContentConfirmMessage.jsx"));
});
var ModalContentForm = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_modal_content_ModalContentForm_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../modal/content/ModalContentForm.jsx */ "./src/Resources/public/js/modal/content/ModalContentForm.jsx"));
});
var NewFormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_new_NewFormMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../form/fields/new/NewFormMapperField.jsx */ "./src/Resources/public/js/form/fields/new/NewFormMapperField.jsx"));
});
var PostActionButton = exports.PostActionButton = /*#__PURE__*/function (_Component) {
  function PostActionButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PostActionButton);
    _this = _callSuper(this, PostActionButton, [props]);
    _this.showModal = _this.showModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.resetModal = _this.resetModal.bind(_this);
    _this.showDynamicModal = _this.showDynamicModal.bind(_this);
    _this.sendRequest = _this.sendRequest.bind(_this);
    _this.onRequestDone = _this.onRequestDone.bind(_this);
    _this.onRequestFail = _this.onRequestFail.bind(_this);
    _this.onFormInvalid = _this.onFormInvalid.bind(_this);
    _this.state = {
      showModal: false,
      dynamicModal: false,
      dynamicTitle: '',
      dynamicMessage: '',
      dynamicConfirmButtonText: '',
      dynamicOnConfirm: _this.resetModal
    };
    if (_this.props.formFields) {
      var formData = {};
      _this.props.formFields.forEach(function (field) {
        formData[field.name] = field.value || '';
      }, _this);
      _this.state.formData = formData;
      _this.state.errorMessages = {};
    }
    return _this;
  }
  (0, _inherits2["default"])(PostActionButton, _Component);
  return (0, _createClass2["default"])(PostActionButton, [{
    key: "showModal",
    value: function showModal() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      if (this.props.formFields) {
        var formData = {};
        this.props.formFields.forEach(function (field) {
          formData[field.name] = field.value || '';
        }, this);
        this.setState({
          formData: formData,
          errorMessages: {},
          showModal: false
        });
      } else {
        this.setState({
          showModal: false
        });
      }
    }
  }, {
    key: "resetModal",
    value: function resetModal() {
      this.setState({
        showModal: false,
        dynamicModal: false,
        dynamicTitle: '',
        dynamicMessage: '',
        dynamicConfirmButtonText: '',
        dynamicOnConfirm: this.resetModal
      });
    }
  }, {
    key: "showDynamicModal",
    value: function showDynamicModal(title, message, confirmButtonText, onConfirm) {
      this.setState({
        showModal: true,
        dynamicModal: true,
        dynamicTitle: title,
        dynamicMessage: message,
        dynamicConfirmButtonText: confirmButtonText,
        dynamicOnConfirm: onConfirm
      });
    }
  }, {
    key: "onFormUpdate",
    value: function onFormUpdate(field, value) {
      var formData = this.state.formData;
      formData[field.name] = value;
      this.setState({
        formData: formData
      });
    }
  }, {
    key: "onFormInvalid",
    value: function onFormInvalid(messages) {
      this.setState({
        errorMessages: messages
      });
    }
  }, {
    key: "sendRequest",
    value: function sendRequest() {
      var data = {};
      this.props.fields.forEach(function (element, index) {
        data[element.name] = this.props.rowData[index];
      }, this);
      data.REQUEST_TOKEN = this.props.REQUEST_TOKEN;
      data.formData = this.state.formData;
      jQuery.post(this.props.url, data).done(this.onRequestDone).fail(this.onRequestFail);
      this.closeModal();
    }
  }, {
    key: "onRequestDone",
    value: function onRequestDone(json) {
      try {
        this.showDynamicModal(json.success.title, json.success.message, json.success.confirmButtonText, this.updateRow.bind(this, json.success.rowData));
      } catch (e) {
        this.resetModal();
      }
    }
  }, {
    key: "onRequestFail",
    value: function onRequestFail(response) {
      var json = response.responseJSON;
      try {
        if (!!json.error.reload) {
          this.showDynamicModal(json.error.title, json.error.message, json.error.confirmButtonText, location.reload);
        }
        this.showDynamicModal(json.error.title, json.error.message, json.error.confirmButtonText, this.resetModal);
      } catch (e) {
        this.resetModal();
      }
    }
  }, {
    key: "updateRow",
    value: function updateRow(rowData) {
      this.props.setRowData(rowData, this.props.value);
      this.resetModal();
    }
  }, {
    key: "render",
    value: function render() {
      var data = {};
      this.props.fields.forEach(function (element, index) {
        if (typeof this.props.rowData[index] !== 'undefined') {
          data[element.name] = this.props.rowData[index];
        }
      }, this);
      var confirmModal;
      if (this.props.formFields) {
        var fields = [];
        this.props.formFields.forEach(function (field) {
          var props = jQuery.extend(true, {}, field);
          props.value = this.state.formData[field.name];
          props.onChange = this.onFormUpdate.bind(this, field);
          props.error = this.state.errorMessages[field.name];
          fields.push(/*#__PURE__*/_react["default"].createElement(NewFormMapperField, (0, _extends2["default"])({
            key: field.name
          }, props)));
        }, this);
        confirmModal = /*#__PURE__*/_react["default"].createElement(ModalContentForm, {
          title: this.props.title,
          message: this.props.message,
          onConfirm: this.sendRequest,
          onInvalid: this.onFormInvalid,
          onCancel: this.closeModal,
          confirmButtonText: this.props.confirmText,
          cancelButtonText: this.props.cancelText
        }, fields);
      } else {
        confirmModal = /*#__PURE__*/_react["default"].createElement(ModalContentConfirmMessage, {
          title: this.props.title,
          message: this.props.message,
          onConfirm: this.sendRequest,
          onCancel: this.closeModal,
          confirmButtonText: this.props.confirmText,
          cancelButtonText: this.props.cancelText
        });
      }
      return /*#__PURE__*/_react["default"].createElement(Condition, {
        data: data,
        conditions: this.props.conditions
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: 'c4g-btn ' + this.props.className,
        type: "button",
        onClick: this.showModal
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'c4g-btn-text'
      }, this.props.buttonText)), /*#__PURE__*/_react["default"].createElement(Modal, {
        show: this.state.showModal && !this.state.dynamicModal
      }, confirmModal), /*#__PURE__*/_react["default"].createElement(Modal, {
        show: this.state.showModal && this.state.dynamicModal
      }, /*#__PURE__*/_react["default"].createElement(ModalContentMessage, {
        title: this.state.dynamicTitle,
        message: this.state.dynamicMessage,
        onConfirm: this.state.dynamicOnConfirm,
        confirmButtonText: this.state.dynamicConfirmButtonText
      })));
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/table/button/TableButton.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/table/button/TableButton.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TableButton = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _AlertHandler = __webpack_require__(/*! ../../../../../../../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js */ "../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js");
var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"));
var _sweetalert2ReactContent = _interopRequireDefault(__webpack_require__(/*! sweetalert2-react-content */ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js"));
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
var FormMapperField = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_form_fields_FormMapperField_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../form/fields/FormMapperField.jsx */ "./src/Resources/public/js/form/fields/FormMapperField.jsx"));
});
var MySwal = (0, _sweetalert2ReactContent["default"])(_sweetalert["default"]);
var TableButton = exports.TableButton = /*#__PURE__*/function (_Component) {
  function TableButton(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, TableButton);
    _this = _callSuper(this, TableButton, [props]);
    _this.showPopupForm = _this.showPopupForm.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TableButton, _Component);
  return (0, _createClass2["default"])(TableButton, [{
    key: "showPopupForm",
    value: function showPopupForm(event, data) {
      var _this2 = this;
      var formProps = {};
      formProps.updateFunction = function () {};
      var div = null;
      if (this.props.formHeadlineFieldIndex > -1) {
        div = /*#__PURE__*/_react["default"].createElement("div", {
          id: "swal-popup-div"
        }, this.props.rowData[this.props.formHeadlineFieldIndex]);
      }
      var form = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            textAlign: "center",
            margin: "auto"
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "bundles/con4gisframework/img/preloader-image.svg",
          className: "preloader-image",
          alt: ""
        }))
      }, /*#__PURE__*/_react["default"].createElement("form", {
        key: 1,
        className: "form-view",
        method: "POST",
        id: "swal-popup-form"
      }, this.props.formFields.map(function (item, id) {
        return /*#__PURE__*/_react["default"].createElement(FormMapperField, {
          form: {
            props: formProps,
            fields: _this2.props.formFields
          },
          field: item,
          data: data,
          key: id + 1
        });
      })));
      MySwal.fire({
        title: /*#__PURE__*/_react["default"].createElement("p", null, this.props.text),
        html: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, div, form),
        confirmButtonText: this.props.submitButtonLabel || this.props.languageRefs.CONFIRM,
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: this.props.cancelButtonLabel || this.props.languageRefs.CANCEL,
        customClass: {
          content: "zIndex-9",
          actions: "zIndex-8"
        }
      }).then(function (value) {
        if (value.isConfirmed) {
          var formElements = document.getElementById("swal-popup-form").elements;
          var _data = {
            value: _this2.props.value
          };
          var index = 0;
          while (index < formElements.length) {
            var element = formElements.item(index);
            if (element.name) {
              _data[element.name] = element.value;
            }
            index += 1;
          }
          jQuery.post(_this2.props.url, _data).done(function (responseData) {
            var ah = new _AlertHandler.AlertHandler();
            ah.showInfoDialog(responseData.success.title, responseData.success.message, '');
          }).fail(function (responseData) {
            var ah = new _AlertHandler.AlertHandler();
            if (responseData.responseJSON.error) {
              ah.showInfoActionDialog(responseData.responseJSON.error.title, responseData.responseJSON.error.message, function () {
                return _this2.showPopupForm(event, responseData.responseJSON.formData);
              }, '');
            } else if (responseData.responseJSON.actionRefresh) {
              ah.showInfoActionDialog(responseData.responseJSON.actionRefresh.title, responseData.responseJSON.actionRefresh.message, function () {
                return location.reload();
              }, '');
            }
          });
        } else {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (this.props.href && this.props.href !== 'undefined' && this.props.href !== this.props.value) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          href: this.props.href,
          className: "btn btn-outline-secondary"
        }, this.props.text);
      } else if (this.props.formFields.length > 0) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "btn btn-outline-secondary",
          onClick: function onClick() {
            return _this3.showPopupForm(event, {});
          }
        }, this.props.text);
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfdGFibGVfVGFibGVWaWV3X2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxXQUFBLEdBQUFDLHNCQUFBLENBQUFDLG1CQUFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQSxJQW9CYUMsWUFBWSxHQUFBQyxvQkFBQTtFQUFBLFNBQUFELGFBQUE7SUFBQSxJQUFBRSxnQkFBQSxtQkFBQUYsWUFBQTtFQUFBO0VBQUEsV0FBQUcsYUFBQSxhQUFBSCxZQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUV2QixTQUFBQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hDQyxzQkFBSSxDQUFDQyxJQUFJLENBQUM7UUFDUkosS0FBSyxFQUFFQSxLQUFLO1FBQ1pLLElBQUksRUFBRUosT0FBTztRQUNiSyxJQUFJLEVBQUUsT0FBTztRQUNiQyxXQUFXLEVBQUVMLFFBQVEsR0FBR0EsUUFBUSxHQUFHO01BQ3JDLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVUsY0FBY0EsQ0FBQ1IsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN2Q0Msc0JBQUksQ0FBQ0MsSUFBSSxDQUFDO1FBQ1JKLEtBQUssRUFBRUEsS0FBSztRQUNaSyxJQUFJLEVBQUVKLE9BQU87UUFDYkssSUFBSSxFQUFFLE1BQU07UUFDWkMsV0FBVyxFQUFFTCxRQUFRLEdBQUdBLFFBQVEsR0FBRztNQUNyQyxDQUFDLENBQUM7TUFBQztJQUNMO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVB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QVcsSUFBSSxJQUFJLENBQUM3QyxLQUFLLENBQUM2QyxJQUFJLEtBQUssSUFBSSxDQUFDN0MsS0FBSyxDQUFDN0gsS0FBSyxFQUFFO1FBQzlGLG9CQUNFaUUsTUFBQSxZQUFBZ0csYUFBQTtVQUFHUyxJQUFJLEVBQUUsSUFBSSxDQUFDN0MsS0FBSyxDQUFDNkMsSUFBSztVQUFDUixTQUFTLEVBQUU7UUFBNEIsR0FBRSxJQUFJLENBQUNyQyxLQUFLLENBQUN0SCxJQUFRLENBQUM7TUFFM0YsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDc0gsS0FBSyxDQUFDc0wsVUFBVSxDQUFDN00sTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMzQyxvQkFDRXJDLE1BQUEsWUFBQWdHLGFBQUE7VUFBUWdILElBQUksRUFBRSxRQUFTO1VBQ2YvRyxTQUFTLEVBQUUsMkJBQTRCO1VBQ3ZDSSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtZQUFBLE9BQVF3RSxNQUFJLENBQUNzSixhQUFhLENBQUN2RixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFBQTtRQUFDLEdBQ2xELElBQUksQ0FBQ2hMLEtBQUssQ0FBQ3RILElBQ04sQ0FBQztNQUViO0lBQ0Y7RUFBQztBQUFBLEVBakc4QnVWLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90YWJsZS9UYWJsZVZpZXcuanN4Iiwid2VicGFjazovL2ZyYW1ld29ya2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RhYmxlL2J1dHRvbi9Nb2RhbERldGFpbFRhYmxlQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mcmFtZXdvcmtidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90YWJsZS9idXR0b24vUG9zdEFjdGlvbkJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vZnJhbWV3b3JrYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvdGFibGUvYnV0dG9uL1RhYmxlQnV0dG9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiAxMFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjUsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLyoqXG4gKiBUaGUgXCJjc3NDbGFzc1wiIHBhcmFtZXRlciBpbiB0aGUgZnVuY3Rpb25zIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LiBJZiBpdCdzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGFwcGxpZWRcbiAqIGFzIGNsYXNzIGZvciB0aGUgcG9wdXAuIElmIGFuIG9iamVjdCBpcyBwYXNzZWQsIHRoZSBjbGFzc2VzIGNhbiBiZSBzZXQgbW9yZSBwcmVjaXNlLiBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlXG4gKiBwb3NzaWJsZSBpbiB0aGUgb2JqZWN0OlxuICogY3NzQ2xhc3M6IHtcbiAqICAgY29udGFpbmVyOiAnY29udGFpbmVyLWNsYXNzJyxcbiAqICAgcG9wdXA6ICdwb3B1cC1jbGFzcycsXG4gKiAgIGhlYWRlcjogJ2hlYWRlci1jbGFzcycsXG4gKiAgIHRpdGxlOiAndGl0bGUtY2xhc3MnLFxuICogICBjbG9zZUJ1dHRvbjogJ2Nsb3NlLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGljb246ICdpY29uLWNsYXNzJyxcbiAqICAgaW1hZ2U6ICdpbWFnZS1jbGFzcycsXG4gKiAgIGNvbnRlbnQ6ICdjb250ZW50LWNsYXNzJyxcbiAqICAgaW5wdXQ6ICdpbnB1dC1jbGFzcycsXG4gKiAgIGFjdGlvbnM6ICdhY3Rpb25zLWNsYXNzJyxcbiAqICAgY29uZmlybUJ1dHRvbjogJ2NvbmZpcm0tYnV0dG9uLWNsYXNzJyxcbiAqICAgY2FuY2VsQnV0dG9uOiAnY2FuY2VsLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGZvb3RlcjogJ2Zvb3Rlci1jbGFzcydcbiAqIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFsZXJ0SGFuZGxlciB7XG5cbiAgc2hvd0Vycm9yRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0luZm9EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICBpY29uOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTs7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZyh0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgaWNvbjogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzaG93SW5mb0FjdGlvbkRpYWxvZzIodGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIGljb246IFwiaW5mb1wiLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH19KTtcbiAgfVxuXG5cbiAgc2hvd0NvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0NvbmZpcm1EaWFsb2dIVE1MKHRpdGxlLCBodG1sLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZUNvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzLCBzaG93TG9hZGluZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHNob3dMb2FkaW5nID8gc2hvd0xvYWRpbmcgOiB0cnVlLFxuICAgICAgcHJlQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6ICgpID0+ICFTd2FsLmlzTG9hZGluZygpLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xvYWRpbmdEaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgYWxsb3dFc2NhcGVLZXk6IGZhbHNlLFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgc2hvd0xvYWRlck9uQ29uZmlybTogdHJ1ZSxcbiAgICAgIG9uQmVmb3JlT3BlbjogKCkgPT4ge1xuICAgICAgICBTd2FsLmNsaWNrQ29uZmlybSgpO1xuICAgICAgfSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJycsXG4gICAgICBwcmVDb25maXJtOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBwcmVDb25maXJtQ2FsbGJhY2soKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dTZWxlY3REaWFsb2codGl0bGUsIG9iak9wdGlvbnMsIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIGNvbnN0IHt2YWx1ZTogc2VsZWN0ZWRWYWx1ZX0gPSBhd2FpdCBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW5wdXQ6ICdzZWxlY3QnLFxuICAgICAgaW5wdXRPcHRpb25zOiBvYmpPcHRpb25zLFxuICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJy0nLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSlcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtVmlldyBmcm9tIFwiLi4vZm9ybS9Gb3JtVmlldy5qc3hcIjtcbmltcG9ydCB7VGFibGVCdXR0b259IGZyb20gXCIuL2J1dHRvbi9UYWJsZUJ1dHRvbi5qc3hcIjtcbmltcG9ydCB7TW9kYWxEZXRhaWxUYWJsZUJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9uL01vZGFsRGV0YWlsVGFibGVCdXR0b24uanN4XCI7XG5pbXBvcnQge1Bvc3RBY3Rpb25CdXR0b259IGZyb20gXCIuL2J1dHRvbi9Qb3N0QWN0aW9uQnV0dG9uLmpzeFwiO1xuaW1wb3J0IHtjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlcn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qc1wiO1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50JztcbmNvbnN0IE15U3dhbCA9IHdpdGhSZWFjdENvbnRlbnQoU3dhbCk7XG5cbmNvbnN0IE1VSURhdGFUYWJsZSA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwibXVpLWRhdGF0YWJsZXNcIikpO1xuY29uc3QgRm9ybU1hcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLy4uL2Zvcm0vZmllbGRzL0Zvcm1NYXBwZXJGaWVsZC5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgICAgYWN0aXZlRm9ybTogZmFsc2UsIC8vIHdpbGwgYmUgc2V0IHRvIHRydWUgd2hlbiBhIHNlbGVjdGlvbiBidXR0b24gaXMgY2xpY2tlZCxcbiAgICAgIGFjdGl2ZUJ1dHRvbjogbnVsbCwgLy8gd2lsbCBiZSBzZXQgd2hlbiBhIHNlbGVjdGlvbiBidXR0b24gaXMgY2xpY2tlZCxcbiAgICAgIGRhdGE6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSlcbiAgICB9O1xuXG4gICAgdGhpcy5mb3JtRGF0YSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZGF0YXRhYmxlID0gbnVsbDtcbiAgICB0aGlzLmFkZFNlbGVjdGVkSXRlbSA9IHRoaXMuYWRkU2VsZWN0ZWRJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNhbmNlbEZvcm0gPSB0aGlzLmNhbmNlbEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEZvcm1EYXRhID0gdGhpcy5zZXRGb3JtRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlyZVJlcXVlc3QgPSB0aGlzLmZpcmVSZXF1ZXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRNdWlUaGVtZSA9ICgpID0+IGNyZWF0ZVRoZW1lKHtcbiAgICBvdmVycmlkZXM6IHtcbiAgICAgIE11aVBhcGVyOiB7XG4gICAgICAgIGVsZXZhdGlvbjQ6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBNdWlUb29sYmFyOiB7XG4gICAgICAgIGd1dHRlcnM6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y4ZjlmYVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjI1cmVtXCIsXG4gICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBudWxsO1xuICAgIGxldCByZWd1bGFyQnV0dG9ucyA9IG51bGw7XG4gICAgLy8gc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQuc2VsZWN0aW9uQnV0dG9uc1xuICAgICAgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQuc2VsZWN0aW9uQnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBidXR0b25zID0gPGRpdiBjbGFzc05hbWU9e1wiYWN0aW9uLWJ1dHRvbi1jb250YWluZXJcIn0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbXBvbmVudC5zZWxlY3Rpb25CdXR0b25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuXCJ9IGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayhpdGVtLCBpbmRleCl9PntpdGVtLmxhYmVsfTwvYnV0dG9uPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgLy8gcmVndWxhciBidXR0b25zXG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnRhYmxlQnV0dG9ucyAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC50YWJsZUJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVndWxhckJ1dHRvbnMgPSA8ZGl2IGNsYXNzTmFtZT17XCJhY3Rpb24tYnV0dG9uLWNvbnRhaW5lclwifT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY29tcG9uZW50LnRhYmxlQnV0dG9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFRhYmxlQnV0dG9uIGtleT17aW5kZXh9IHRleHQ9e2l0ZW0ubGFiZWx9IGhyZWY9e2l0ZW0uaHJlZn0gbGFuZ3VhZ2VSZWZzPXt0aGlzLnByb3BzLmxhbmd1YWdlUmVmc30vPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0ZXh0TGFiZWxzOiB7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBub01hdGNoOiB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5UQUJMRV9OT19NQVRDSCxcbiAgICAgICAgICB0b29sVGlwOiB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5UQUJMRV9UT09MVElQLFxuICAgICAgICAgIGNvbHVtbkhlYWRlclRvb2x0aXA6IGNvbHVtbiA9PiBgU29ydGllcnVuZyBmw7xyICR7Y29sdW1uLmxhYmVsfWBcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIG5leHQ6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX05FWFRfUEFHRSxcbiAgICAgICAgICBwcmV2aW91czogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfUFJFVklPVVNfUEFHRSxcbiAgICAgICAgICByb3dzUGVyUGFnZTogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfUk9XU19QRVJfUEFHRSxcbiAgICAgICAgICBkaXNwbGF5Um93czogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfRElTUExBWV9ST1dTLFxuICAgICAgICB9LFxuICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgc2VhcmNoOiB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5UQUJMRV9TRUFSQ0gsXG4gICAgICAgICAgZG93bmxvYWRDc3Y6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX0RPV05MT0FEX0NTVixcbiAgICAgICAgICBwcmludDogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfUFJJTlQsXG4gICAgICAgICAgdmlld0NvbHVtbnM6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX1ZJRVdfQ09MVU1OUyxcbiAgICAgICAgICBmaWx0ZXJUYWJsZTogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfRklMVEVSX1RBQkxFLFxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICBhbGw6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX0ZJTFRFUl9BTEwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX0ZJTFRFUl9USVRMRSxcbiAgICAgICAgICByZXNldDogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfRklMVEVSX1JFU0VULFxuICAgICAgICB9LFxuICAgICAgICB2aWV3Q29sdW1uczoge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5UQUJMRV9USVRMRSxcbiAgICAgICAgICB0aXRsZUFyaWE6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX1RJVExFX0FSSUEsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUm93czoge1xuICAgICAgICAgIHRleHQ6IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLlRBQkxFX1NFTEVDVEVEX1RFWFQsXG4gICAgICAgICAgZGVsZXRlOiB0aGlzLnByb3BzLmxhbmd1YWdlUmVmcy5UQUJMRV9TRUxFQ1RFRF9ERUxFVEUsXG4gICAgICAgICAgZGVsZXRlQXJpYTogdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuVEFCTEVfU0VMRUNURURfREVMRVRFX0FSSUEsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LnRhYmxlQnV0dG9ucyAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC50YWJsZUJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgb3B0aW9uc1tcImN1c3RvbVRvb2xiYXJcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge3JlZ3VsYXJCdXR0b25zfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICAgIH1cblxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuY2hlY2tib3gpIHtcbiAgICAgIG9wdGlvbnNbXCJvblJvd1NlbGVjdGlvbkNoYW5nZVwiXSA9IChjdXJyZW50Um93c1NlbGVjdGVkLCBhbGxSb3dzU2VsZWN0ZWQsIHJvd3NTZWxlY3RlZCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGVkSXRlbShjdXJyZW50Um93c1NlbGVjdGVkLCBhbGxSb3dzU2VsZWN0ZWQsIHJvd3NTZWxlY3RlZCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jb21wb25lbnQuc2VsZWN0aW9uQnV0dG9ucyAmJiB0aGlzLnByb3BzLmNvbXBvbmVudC5zZWxlY3Rpb25CdXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgIG9wdGlvbnNbXCJjdXN0b21Ub29sYmFyU2VsZWN0XCJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IGNvbHVtbnMgPSB0aGlzLmNyZWF0ZUNvbHVtbnModGhpcy5wcm9wcy5maWVsZHMpO1xuICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5jaGVja2JveCkge1xuICAgICAgb3B0aW9uc1tcInNlbGVjdGFibGVSb3dzXCJdID0gXCJzaW5nbGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc1tcInNlbGVjdGFibGVSb3dzXCJdID0gXCJub25lXCI7XG4gICAgfVxuICAgIG9wdGlvbnNbXCJyb3dzU2VsZWN0ZWRcIl0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXM7XG4gICAgb3B0aW9uc1tcIm9uVGFibGVDaGFuZ2VcIl0gPSAoYWN0aW9uLCB0YWJsZVN0YXRlKSA9PiB7XG4gICAgICB0aGlzLnBlcnNpc3RQYXJhbXNJbnRvU3RvcmFnZSh0YWJsZVN0YXRlKTtcbiAgICB9O1xuICAgIG9wdGlvbnNbXCJzZWFyY2hPcGVuXCJdID0gISF0aGlzLnNlYXJjaE9wZW47XG4gICAgb3B0aW9uc1tcInNlYXJjaEFsd2F5c09wZW5cIl0gPSB0cnVlO1xuICAgIG9wdGlvbnNbXCJyZXNwb25zaXZlXCJdID0gXCJzaW1wbGVcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJcIn0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGlzLmdldE11aVRoZW1lKCl9PlxuICAgICAgICAgIDxNVUlEYXRhVGFibGUgZGF0YT17dGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT0gbnVsbCl9IGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfSBrZXk9ezB9IHJlZj17KG5vZGUpID0+IHRoaXMuZGF0YXRhYmxlID0gbm9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmNvbXBvbmVudC5oZWFkbGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9NVUlEYXRhVGFibGU+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzZXRGb3JtRGF0YShuYW1lLCBvYmpEYXRhKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuZm9ybURhdGEsXG4gICAgICAuLi5vYmpEYXRhXG4gICAgfTtcbiAgfVxuXG4gIGFkZFNlbGVjdGVkSXRlbShjdXJyZW50Um93c1NlbGVjdGVkLCBhbGxSb3dzU2VsZWN0ZWQsIHJvd3NTZWxlY3RlZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbXM6IHJvd3NTZWxlY3RlZH0pO1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soYnV0dG9uQ29uZiwgaW5kZXgpIHtcbiAgICAvLyBzZXQgcHJvcHMgb2JqZWN0IHRvIG1ha2UgZm9ybSBmaWVsZHMgd29ya1xuICAgIGJ1dHRvbkNvbmYuZm9ybS5wcm9wcyA9IHt9O1xuICAgIGJ1dHRvbkNvbmYuZm9ybS5wcm9wcy51cGRhdGVGdW5jdGlvbiA9IHRoaXMuc2V0Rm9ybURhdGE7XG4gICAgbGV0IGZvcm0gPSA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCJhdXRvXCJ9fT48aW1nIHNyYz1cImJ1bmRsZXMvY29uNGdpc2ZyYW1ld29yay9pbWcvcHJlbG9hZGVyLWltYWdlLnN2Z1wiIGNsYXNzTmFtZT1cInByZWxvYWRlci1pbWFnZVwiIGFsdD1cIlwiLz48L2Rpdj59PlxuICAgICAgPGZvcm0ga2V5PXsxfSBjbGFzc05hbWU9e1wiZm9ybS12aWV3XCJ9IG1ldGhvZD17XCJQT1NUXCJ9PlxuICAgICAgICB7XG4gICAgICAgICAgYnV0dG9uQ29uZi5mb3JtLmZpZWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEZvcm1NYXBwZXJGaWVsZCBmb3JtPXtidXR0b25Db25mLmZvcm19IGZpZWxkPXtpdGVtfSBkYXRhPXtbXX0ga2V5PXtpZCArIDF9Lz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9TdXNwZW5zZT47XG5cbiAgICAvLyBzaG93IG1vZGFsXG4gICAgTXlTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IDxwPntidXR0b25Db25mLmxhYmVsfTwvcD4sXG4gICAgICBodG1sOiBmb3JtLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGJ1dHRvbkNvbmYuc3VibWl0QnV0dG9uTGFiZWwgfHwgdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuQ09ORklSTSxcbiAgICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGJ1dHRvbkNvbmYuY2FuY2VsQnV0dG9uTGFiZWwgfHwgdGhpcy5wcm9wcy5sYW5ndWFnZVJlZnMuQ0FOQ0VMLFxuICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgY29udGVudDogXCJ6SW5kZXgtOVwiLFxuICAgICAgICBhY3Rpb25zOiBcInpJbmRleC04XCJcbiAgICAgIH1cbiAgICB9KS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmlzQ29uZmlybWVkKSB7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybShidXR0b25Db25mKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRm9ybSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdWJtaXRGb3JtKGFjdGl2ZUJ1dHRvbikge1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZ2V0IGlkIG9mIHNlbGVjdGVkIGRhdGFzZXRcbiAgICBsZXQgc2VsZWN0ZWRJZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtc1swXTtcbiAgICBsZXQgc2VsZWN0ZWREYXRhID0gdGhpcy5zdGF0ZS5kYXRhW3NlbGVjdGVkSWRdO1xuICAgIGxldCB1cmwgPSBhY3RpdmVCdXR0b24uZm9ybS51cmw7XG4gICAgdGhpcy5mb3JtRGF0YS5pZCA9IHNlbGVjdGVkRGF0YS5pZDtcbiAgICBqUXVlcnkucG9zdCh1cmwsIHRoaXMuZm9ybURhdGEpLmRvbmUoKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgLy8gdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWxGb3JtKCkge1xuICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIGZvcm1hdCh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCB2YWx1ZSk7XG4gIH1cblxuICByZXNldFNlbGVjdGlvbigpIHtcbiAgICAvLyBkZWxldGUgc2VsZWN0ZWQgcm93XG4gICAgdGhpcy5kYXRhdGFibGUuc2VsZWN0Um93RGVsZXRlKCk7XG4gICAgLy8gc2V0IHN0YXRlLCB3aGlsZSByZXJlbmRlcmluZyB0aGUgZGVsZXRlZCByb3cgd2lsbCBiZSBhZGRlZCBhZ2FpblxuICAgIC8vIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgc2VsZWN0aW9uXG4gICAgLy8gc2luY2UgdGhlIHVzZWQgY29tcG9uZW50IGhhcyBubyBBUEkgbWV0aG9kIHRvIGRvIHNvIG90aGVyd2lzZVxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkSXRlbXM6IFtdfSk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVDb2x1bW5zKGZpZWxkcykge1xuICAgIGxldCBjb2x1bW5zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb2x1bW47XG4gICAgICBzd2l0Y2ggKGZpZWxkc1tpXS50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgY29sdW1uID0gZmllbGRzW2ldO1xuICAgICAgICAgIGlmIChmaWVsZHNbaV0uZm9ybWF0ICE9PSAnJykge1xuICAgICAgICAgICAgY29sdW1uLm9wdGlvbnMuY3VzdG9tQm9keVJlbmRlciA9ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQodmFsdWUsIGZpZWxkc1tpXS5mb3JtYXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWZlcmVuY2VcIjpcbiAgICAgICAgICBjb2x1bW4gPSBmaWVsZHNbaV07XG4gICAgICAgICAgY29sdW1uLm9wdGlvbnMuY3VzdG9tQm9keVJlbmRlciA9ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5yZWZlcmVuY2VzW3ZhbHVlXTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibW9kYWwtZGV0YWlsLWJ1dHRvblwiOlxuICAgICAgICAgIGNvbHVtbiA9IGZpZWxkc1tpXTtcbiAgICAgICAgICBjb2x1bW4ub3B0aW9ucy5jdXN0b21Cb2R5UmVuZGVyID0gKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoISF2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gPE1vZGFsRGV0YWlsVGFibGVCdXR0b24gYnV0dG9uTGFiZWw9e2NvbHVtbi5idXR0b25MYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb2x1bW4ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0PXtjb2x1bW4uY29uZmlybUJ1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbHVtbi5jbGFzc05hbWV9Lz5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICBjb2x1bW4gPSBmaWVsZHNbaV07XG4gICAgICAgICAgY29sdW1uLm9wdGlvbnMuY3VzdG9tQm9keVJlbmRlciA9ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSAqIDEwMDApO1xuICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGRheSA8IDEwKSB7XG4gICAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICAgICAgICAgICAgaG91cnMgPSAnMCcgKyBob3VycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICAgICAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRpbWVTdHJpbmcgPSBob3VycyArICc6JyArIG1pbnV0ZXM7XG4gICAgICAgICAgICBsZXQgZGF0ZVN0cmluZyA9IGRheSArICcuJyArIG1vbnRoICsgJy4nICsgZGF0ZS5nZXRGdWxsWWVhcigpICsgJyAnO1xuICAgICAgICAgICAgaWYgKHRpbWVTdHJpbmcgIT09IFwiMDA6MDBcIikge1xuICAgICAgICAgICAgICBkYXRlU3RyaW5nICs9IHRpbWVTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0ZVN0cmluZztcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWN0aW9uLWJ1dHRvblwiOlxuICAgICAgICAgIGNvbHVtbiA9IGZpZWxkc1tpXTtcbiAgICAgICAgICBjb2x1bW4ub3B0aW9ucy5jdXN0b21Cb2R5UmVuZGVyID0gKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4uYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBjb2x1bW4uYWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgcHJvcHNbJ3Jvd0RhdGEnXSA9IHRhYmxlTWV0YS5yb3dEYXRhO1xuICAgICAgICAgICAgICBwcm9wc1snZmllbGRzJ10gPSBmaWVsZHM7XG4gICAgICAgICAgICAgIHByb3BzWydzZXRSb3dEYXRhJ10gPSB0aGlzLnByb3BzLnNldFJvd0RhdGFcbiAgICAgICAgICAgICAgcHJvcHNbJ3ZhbHVlJ10gPSB2YWx1ZVxuICAgICAgICAgICAgICBidXR0b25zLnB1c2goXG4gICAgICAgICAgICAgICAgPFBvc3RBY3Rpb25CdXR0b24ga2V5PXtpfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntidXR0b25zfTwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJidXR0b25cIjpcbiAgICAgICAgICBsZXQgYnV0dG9uQ29sID0ge1xuICAgICAgICAgICAgbmFtZTogZmllbGRzW2ldLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogZmllbGRzW2ldLmxhYmVsLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBzb3J0OiBmYWxzZSxcbiAgICAgICAgICAgICAgdmlld0NvbHVtbnM6IGZhbHNlLFxuICAgICAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzW2ldLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVSZXF1ZXN0KGZpZWxkc1tpXS5ocmVmLnJlcGxhY2UoZmllbGRzW2ldLmhyZWZGaWVsZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoPGEgb25Nb3VzZVVwPXtjYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ0biBidG4tc2Vjb25kYXJ5XCJ9PntmaWVsZHNbaV0uYnV0dG9uVGV4dH08L2E+KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICg8VGFibGVCdXR0b24gaHJlZj17ZmllbGRzW2ldLmhyZWYucmVwbGFjZShmaWVsZHNbaV0uaHJlZkZpZWxkLCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtmaWVsZHNbaV0uYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1GaWVsZHM9e2ZpZWxkc1tpXS5mb3JtRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uTGFiZWw9e2ZpZWxkc1tpXS5zdWJtaXRCdXR0b25MYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkxhYmVsPXtmaWVsZHNbaV0uY2FuY2VsQnV0dG9uTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2ZpZWxkc1tpXS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSGVhZGxpbmVGaWVsZEluZGV4PXtmaWVsZHNbaV0uZm9ybUhlYWRsaW5lRmllbGRJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGE9e3RhYmxlTWV0YS5yb3dEYXRhfS8+KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2x1bW5zLnB1c2goYnV0dG9uQ29sKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNvbmRpdGlvbmFsLW1hcmtlclwiOlxuICAgICAgICAgIGxldCBvYmpNYXJrZXJzID0gZmllbGRzW2ldLm1hcmtlcnM7XG4gICAgICAgICAgbGV0IG1hcmtlckNvbCA9IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkc1tpXS5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkc1tpXS5sYWJlbCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgc29ydDogZmFsc2UsXG4gICAgICAgICAgICAgIGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXJrZXJEYXRhID0gb2JqTWFya2Vyc1t2YWx1ZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17bWFya2VyRGF0YS5jbGFzc30gZGF0YS1zdGF0ZT17bWFya2VyRGF0YS5kYXRhU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT17bWFya2VyRGF0YS5kYXRhVG9nZ2xlfSBkYXRhLXBsYWNlbWVudD17bWFya2VyRGF0YS5kYXRhUGxhY2VtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e21hcmtlckRhdGEudGl0bGV9Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb2x1bW5zLnB1c2gobWFya2VyQ29sKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2x1bW5zLnB1c2goZmllbGRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIGZpcmVSZXF1ZXN0KHVybCkge1xuICAgIC8vIHNhbml0eSBjaGVja1xuICAgIGxldCBhaCA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICBsZXQgY29uZmlybUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgalF1ZXJ5LnBvc3QodXJsKS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBsZXQgY2FuY2VsQ2FsbGJhY2sgPSAoKSA9PiB7XG5cbiAgICB9O1xuICAgIGFoLnNob3dDb25maXJtRGlhbG9nKFxuICAgICAgdGhpcy5wcm9wcy5jb21wb25lbnQuY29uZmlybWF0aW9uSGVhZGxpbmUsXG4gICAgICB0aGlzLnByb3BzLmNvbXBvbmVudC5jb25maXJtYXRpb25NZXNzYWdlLFxuICAgICAgY29uZmlybUNhbGxiYWNrLFxuICAgICAgY2FuY2VsQ2FsbGJhY2ssXG4gICAgICB0aGlzLnByb3BzLmNvbXBvbmVudC5jb25maXJtYXRpb25ZZXMsXG4gICAgICB0aGlzLnByb3BzLmNvbXBvbmVudC5jb25maXJtYXRpb25ObyxcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmxvYWREYXRhQXN5bmMpIHtcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmNvbXBvbmVudC5sb2FkRGF0YUFzeW5jKSB7XG4gICAgICB0aGlzLmFwcGx5UGFyYW1zRnJvbVN0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29tcG9uZW50LmxvYWREYXRhQXN5bmMpIHtcbiAgICAgIGlmIChwcmV2U3RhdGUuZGF0YS5sZW5ndGggPCB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNvbXBvbmVudC5sb2FkRGF0YUFzeW5jICYmIHRoaXMuZmluaXNoZWRMb2FkaW5nICYmICF0aGlzLnBhcmFtc1Jlc3RvcmVkKSB7XG4gICAgICB0aGlzLmFwcGx5UGFyYW1zRnJvbVN0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseVBhcmFtc0Zyb21TdG9yYWdlKCkge1xuICAgIGxldCBzdG9yYWdlS2V5ID0gdGhpcy5wcm9wcy5jb21wb25lbnQuc3RvcmFnZUtleTtcbiAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zZWFyY2gpO1xuICAgIGlmIChwYXJhbXMuaGFzKFwiZ3JvdXBJZFwiKSkge1xuICAgICAgbGV0IGdyb3VwSWQgPSBwYXJhbXMuZ2V0KFwiZ3JvdXBJZFwiKTtcbiAgICAgIHN0b3JhZ2VLZXkgKz0gXCItXCIgKyBncm91cElkO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSArICctZmlsdGVycycpKTtcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkgKyAnLXBhZ2UnKSwgMTApO1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSArICctc2VhcmNoJyk7XG4gICAgaWYgKGZpbHRlcnMgIT09IG51bGwgJiYgcGFnZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWFyY2hPcGVuID0gc2VhcmNoVGV4dCAhPT0gXCJcIjtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhdGFibGUuc2V0U3RhdGUoe1xuICAgICAgICAgIGZpbHRlckxpc3Q6IGZpbHRlcnMsXG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICBzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gICAgICAgIH0sICgpID0+IHt0aGlzLnJlc2V0U2VsZWN0aW9uKCk7IHRoaXMucGFyYW1zUmVzdG9yZWQgPSB0cnVlO30pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgcGVyc2lzdFBhcmFtc0ludG9TdG9yYWdlKHRhYmxlU3RhdGUpIHtcbiAgICBpZiAodGhpcy5maW5pc2hlZExvYWRpbmcpIHtcbiAgICAgIGxldCBzdG9yYWdlS2V5ID0gdGhpcy5wcm9wcy5jb21wb25lbnQuc3RvcmFnZUtleTtcbiAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoKTtcbiAgICAgIGlmIChwYXJhbXMuaGFzKFwiZ3JvdXBJZFwiKSkge1xuICAgICAgICBsZXQgZ3JvdXBJZCA9IHBhcmFtcy5nZXQoXCJncm91cElkXCIpO1xuICAgICAgICBzdG9yYWdlS2V5ICs9IFwiLVwiICsgZ3JvdXBJZDtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5ICsgXCItZmlsdGVyc1wiLCBKU09OLnN0cmluZ2lmeSh0YWJsZVN0YXRlLmZpbHRlckxpc3QpKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5ICsgXCItcGFnZVwiLCB0YWJsZVN0YXRlLnBhZ2UpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgKyBcIi1zZWFyY2hcIiwgdGFibGVTdGF0ZS5zZWFyY2hUZXh0ID09PSBudWxsID8gXCJcIiA6IHRhYmxlU3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZERhdGEoKSB7XG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29tcG9uZW50LmFzeW5jRGF0YVVybDtcbiAgICB1cmwgKz0gXCIvXCIgKyB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoO1xuICAgIGpRdWVyeS5nZXQodXJsKS5kb25lKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmNvbmNhdChyZXNwb25zZURhdGEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuICAgIH0pO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNb2RhbCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kYWwvTW9kYWwuanN4XCIpKTtcbmNvbnN0IE1vZGFsQ29udGVudE1lc3NhZ2UgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL2NvbnRlbnQvTW9kYWxDb250ZW50TWVzc2FnZS5qc3hcIikpO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxEZXRhaWxUYWJsZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd01vZGFsOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLnNob3dNb2RhbCA9IHRoaXMuc2hvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1idG4gJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lfSB0eXBlPXtcImJ1dHRvblwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25MYWJlbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0+XG4gICAgICAgICAgPE1vZGFsQ29udGVudE1lc3NhZ2UgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0PXt0aGlzLnByb3BzLmNvbmZpcm1CdXR0b25UZXh0fSAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gMTBcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29uZGl0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb25kaXRpb24vQ29uZGl0aW9uLmpzeFwiKSk7XG5jb25zdCBNb2RhbCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kYWwvTW9kYWwuanN4XCIpKTtcbmNvbnN0IE1vZGFsQ29udGVudE1lc3NhZ2UgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL2NvbnRlbnQvTW9kYWxDb250ZW50TWVzc2FnZS5qc3hcIikpO1xuY29uc3QgTW9kYWxDb250ZW50Q29uZmlybU1lc3NhZ2UgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL2NvbnRlbnQvTW9kYWxDb250ZW50Q29uZmlybU1lc3NhZ2UuanN4XCIpKTtcbmNvbnN0IE1vZGFsQ29udGVudEZvcm0gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGFsL2NvbnRlbnQvTW9kYWxDb250ZW50Rm9ybS5qc3hcIikpO1xuY29uc3QgTmV3Rm9ybU1hcHBlckZpZWxkID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9mb3JtL2ZpZWxkcy9uZXcvTmV3Rm9ybU1hcHBlckZpZWxkLmpzeFwiKSk7XG5cbmV4cG9ydCBjbGFzcyBQb3N0QWN0aW9uQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0TW9kYWwgPSB0aGlzLnJlc2V0TW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dEeW5hbWljTW9kYWwgPSB0aGlzLnNob3dEeW5hbWljTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRSZXF1ZXN0ID0gdGhpcy5zZW5kUmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXF1ZXN0RG9uZSA9IHRoaXMub25SZXF1ZXN0RG9uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXF1ZXN0RmFpbCA9IHRoaXMub25SZXF1ZXN0RmFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb3JtSW52YWxpZCA9IHRoaXMub25Gb3JtSW52YWxpZC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICBkeW5hbWljTW9kYWw6IGZhbHNlLFxuICAgICAgZHluYW1pY1RpdGxlOiAnJyxcbiAgICAgIGR5bmFtaWNNZXNzYWdlOiAnJyxcbiAgICAgIGR5bmFtaWNDb25maXJtQnV0dG9uVGV4dDogJycsXG4gICAgICBkeW5hbWljT25Db25maXJtOiB0aGlzLnJlc2V0TW9kYWxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybUZpZWxkcykge1xuICAgICAgbGV0IGZvcm1EYXRhID0ge307XG4gICAgICB0aGlzLnByb3BzLmZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlIHx8ICcnO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLnN0YXRlLmZvcm1EYXRhID0gZm9ybURhdGE7XG4gICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICBzaG93TW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZvcm1GaWVsZHMpIHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHt9O1xuICAgICAgdGhpcy5wcm9wcy5mb3JtRmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZSB8fCAnJztcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgZXJyb3JNZXNzYWdlczoge30sXG4gICAgICAgIHNob3dNb2RhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICBkeW5hbWljTW9kYWw6IGZhbHNlLFxuICAgICAgZHluYW1pY1RpdGxlOiAnJyxcbiAgICAgIGR5bmFtaWNNZXNzYWdlOiAnJyxcbiAgICAgIGR5bmFtaWNDb25maXJtQnV0dG9uVGV4dDogJycsXG4gICAgICBkeW5hbWljT25Db25maXJtOiB0aGlzLnJlc2V0TW9kYWxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dEeW5hbWljTW9kYWwodGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm1CdXR0b25UZXh0LCBvbkNvbmZpcm0pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dNb2RhbDogdHJ1ZSxcbiAgICAgIGR5bmFtaWNNb2RhbDogdHJ1ZSxcbiAgICAgIGR5bmFtaWNUaXRsZTogdGl0bGUsXG4gICAgICBkeW5hbWljTWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIGR5bmFtaWNDb25maXJtQnV0dG9uVGV4dDogY29uZmlybUJ1dHRvblRleHQsXG4gICAgICBkeW5hbWljT25Db25maXJtOiBvbkNvbmZpcm1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRm9ybVVwZGF0ZShmaWVsZCwgdmFsdWUpIHtcbiAgICBsZXQgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhO1xuICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybURhdGE6IGZvcm1EYXRhfSk7XG4gIH1cblxuICBvbkZvcm1JbnZhbGlkKG1lc3NhZ2VzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlczogbWVzc2FnZXN9KTtcbiAgfVxuXG4gIHNlbmRSZXF1ZXN0KCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgZGF0YVtlbGVtZW50Lm5hbWVdID0gdGhpcy5wcm9wcy5yb3dEYXRhW2luZGV4XTtcbiAgICB9LCB0aGlzKTtcbiAgICBkYXRhLlJFUVVFU1RfVE9LRU4gPSB0aGlzLnByb3BzLlJFUVVFU1RfVE9LRU47XG4gICAgZGF0YS5mb3JtRGF0YSA9IHRoaXMuc3RhdGUuZm9ybURhdGE7XG4gICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy51cmwsIGRhdGEpLmRvbmUodGhpcy5vblJlcXVlc3REb25lKS5mYWlsKHRoaXMub25SZXF1ZXN0RmFpbCk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gIH1cblxuICBvblJlcXVlc3REb25lKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnNob3dEeW5hbWljTW9kYWwoXG4gICAgICAgICAganNvbi5zdWNjZXNzLnRpdGxlLFxuICAgICAgICAgIGpzb24uc3VjY2Vzcy5tZXNzYWdlLFxuICAgICAgICAgIGpzb24uc3VjY2Vzcy5jb25maXJtQnV0dG9uVGV4dCxcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdy5iaW5kKHRoaXMsIGpzb24uc3VjY2Vzcy5yb3dEYXRhKVxuICAgICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucmVzZXRNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVxdWVzdEZhaWwocmVzcG9uc2UpIHtcbiAgICBsZXQganNvbiA9IHJlc3BvbnNlLnJlc3BvbnNlSlNPTjtcbiAgICB0cnkge1xuICAgICAgaWYgKCEhanNvbi5lcnJvci5yZWxvYWQpIHtcbiAgICAgICAgdGhpcy5zaG93RHluYW1pY01vZGFsKFxuICAgICAgICAgIGpzb24uZXJyb3IudGl0bGUsXG4gICAgICAgICAganNvbi5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGpzb24uZXJyb3IuY29uZmlybUJ1dHRvblRleHQsXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3dEeW5hbWljTW9kYWwoXG4gICAgICAgIGpzb24uZXJyb3IudGl0bGUsXG4gICAgICAgIGpzb24uZXJyb3IubWVzc2FnZSxcbiAgICAgICAganNvbi5lcnJvci5jb25maXJtQnV0dG9uVGV4dCxcbiAgICAgICAgdGhpcy5yZXNldE1vZGFsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMucmVzZXRNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVJvdyhyb3dEYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRSb3dEYXRhKHJvd0RhdGEsIHRoaXMucHJvcHMudmFsdWUpO1xuICAgIHRoaXMucmVzZXRNb2RhbCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgdGhpcy5wcm9wcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnJvd0RhdGFbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkYXRhW2VsZW1lbnQubmFtZV0gPSB0aGlzLnByb3BzLnJvd0RhdGFbaW5kZXhdO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IGNvbmZpcm1Nb2RhbDtcbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtRmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gW107XG4gICAgICB0aGlzLnByb3BzLmZvcm1GaWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICBsZXQgcHJvcHMgPSBqUXVlcnkuZXh0ZW5kKHRydWUsIHt9LCBmaWVsZCk7XG4gICAgICAgIHByb3BzLnZhbHVlID0gdGhpcy5zdGF0ZS5mb3JtRGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UgPSB0aGlzLm9uRm9ybVVwZGF0ZS5iaW5kKHRoaXMsIGZpZWxkKTtcbiAgICAgICAgcHJvcHMuZXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXNbZmllbGQubmFtZV07XG4gICAgICAgIGZpZWxkcy5wdXNoKDxOZXdGb3JtTWFwcGVyRmllbGQga2V5PXtmaWVsZC5uYW1lfSB7Li4ucHJvcHN9Lz4pO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGNvbmZpcm1Nb2RhbCA9IDxNb2RhbENvbnRlbnRGb3JtIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLnNlbmRSZXF1ZXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnZhbGlkPXt0aGlzLm9uRm9ybUludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ9e3RoaXMucHJvcHMuY29uZmlybVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0PXt0aGlzLnByb3BzLmNhbmNlbFRleHR9PlxuICAgICAgICB7ZmllbGRzfVxuICAgICAgPC9Nb2RhbENvbnRlbnRGb3JtPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybU1vZGFsID0gPE1vZGFsQ29udGVudENvbmZpcm1NZXNzYWdlIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuc2VuZFJlcXVlc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dD17dGhpcy5wcm9wcy5jb25maXJtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0PXt0aGlzLnByb3BzLmNhbmNlbFRleHR9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZGl0aW9uIGRhdGE9e2RhdGF9IGNvbmRpdGlvbnM9e3RoaXMucHJvcHMuY29uZGl0aW9uc30+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYzRnLWJ0biAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWV9IHR5cGU9e1wiYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWx9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2M0Zy1idG4tdGV4dCd9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgIXRoaXMuc3RhdGUuZHluYW1pY01vZGFsfT5cbiAgICAgICAgICB7Y29uZmlybU1vZGFsfVxuICAgICAgICA8L01vZGFsPlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgdGhpcy5zdGF0ZS5keW5hbWljTW9kYWx9PlxuICAgICAgICAgIDxNb2RhbENvbnRlbnRNZXNzYWdlIHRpdGxlPXt0aGlzLnN0YXRlLmR5bmFtaWNUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnN0YXRlLmR5bmFtaWNNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5zdGF0ZS5keW5hbWljT25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0PXt0aGlzLnN0YXRlLmR5bmFtaWNDb25maXJtQnV0dG9uVGV4dH0vPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9Db25kaXRpb24+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDEwXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvcmVCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvdmVuZG9yL2pzL0FsZXJ0SGFuZGxlci5qc1wiO1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xuXG5jb25zdCBGb3JtTWFwcGVyRmllbGQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL2Zvcm0vZmllbGRzL0Zvcm1NYXBwZXJGaWVsZC5qc3hcIikpO1xuY29uc3QgTXlTd2FsID0gd2l0aFJlYWN0Q29udGVudChTd2FsKTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2hvd1BvcHVwRm9ybSA9IHRoaXMuc2hvd1BvcHVwRm9ybS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvd1BvcHVwRm9ybShldmVudCwgZGF0YSkge1xuICAgIGxldCBmb3JtUHJvcHMgPSB7fTtcbiAgICBmb3JtUHJvcHMudXBkYXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpIHt9O1xuICAgIGxldCBkaXYgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZvcm1IZWFkbGluZUZpZWxkSW5kZXggPiAtMSkge1xuICAgICAgZGl2ID0gPGRpdiBpZD17XCJzd2FsLXBvcHVwLWRpdlwifT57dGhpcy5wcm9wcy5yb3dEYXRhW3RoaXMucHJvcHMuZm9ybUhlYWRsaW5lRmllbGRJbmRleF19PC9kaXY+O1xuICAgIH1cbiAgICBsZXQgZm9ybSA9IDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcImF1dG9cIn19PjxpbWcgc3JjPVwiYnVuZGxlcy9jb240Z2lzZnJhbWV3b3JrL2ltZy9wcmVsb2FkZXItaW1hZ2Uuc3ZnXCIgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWltYWdlXCIgYWx0PVwiXCIvPjwvZGl2Pn0+XG4gICAgICA8Zm9ybSBrZXk9ezF9IGNsYXNzTmFtZT17XCJmb3JtLXZpZXdcIn0gbWV0aG9kPXtcIlBPU1RcIn0gaWQ9e1wic3dhbC1wb3B1cC1mb3JtXCJ9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5mb3JtRmllbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Rm9ybU1hcHBlckZpZWxkIGZvcm09e3twcm9wczogZm9ybVByb3BzLCBmaWVsZHM6IHRoaXMucHJvcHMuZm9ybUZpZWxkc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkICsgMX0vPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZm9ybT5cbiAgICA8L1N1c3BlbnNlPjtcblxuICAgIE15U3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiA8cD57dGhpcy5wcm9wcy50ZXh0fTwvcD4sXG4gICAgICBodG1sOiA8UmVhY3QuRnJhZ21lbnQ+e2Rpdn17Zm9ybX08L1JlYWN0LkZyYWdtZW50PixcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLnByb3BzLnN1Ym1pdEJ1dHRvbkxhYmVsIHx8IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNPTkZJUk0sXG4gICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiB0aGlzLnByb3BzLmNhbmNlbEJ1dHRvbkxhYmVsIHx8IHRoaXMucHJvcHMubGFuZ3VhZ2VSZWZzLkNBTkNFTCxcbiAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiekluZGV4LTlcIixcbiAgICAgICAgYWN0aW9uczogXCJ6SW5kZXgtOFwiXG4gICAgICB9XG4gICAgfSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5pc0NvbmZpcm1lZCkge1xuICAgICAgICBsZXQgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2FsLXBvcHVwLWZvcm1cIikuZWxlbWVudHM7XG4gICAgICAgIGxldCBkYXRhID0ge3ZhbHVlOiB0aGlzLnByb3BzLnZhbHVlfTtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgZm9ybUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGxldCBlbGVtZW50ID0gZm9ybUVsZW1lbnRzLml0ZW0oaW5kZXgpO1xuICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGRhdGFbZWxlbWVudC5uYW1lXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5LnBvc3QodGhpcy5wcm9wcy51cmwsIGRhdGEpLmRvbmUoKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBhaCA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgICAgICBhaC5zaG93SW5mb0RpYWxvZyhcbiAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5zdWNjZXNzLnRpdGxlLFxuICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnN1Y2Nlc3MubWVzc2FnZSxcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSkuZmFpbCgocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IGFoID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICAgIGlmIChyZXNwb25zZURhdGEucmVzcG9uc2VKU09OLmVycm9yKSB7XG4gICAgICAgICAgICBhaC5zaG93SW5mb0FjdGlvbkRpYWxvZyhcbiAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnJlc3BvbnNlSlNPTi5lcnJvci50aXRsZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnJlc3BvbnNlSlNPTi5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAoKSA9PiB0aGlzLnNob3dQb3B1cEZvcm0oZXZlbnQsIHJlc3BvbnNlRGF0YS5yZXNwb25zZUpTT04uZm9ybURhdGEpLFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlRGF0YS5yZXNwb25zZUpTT04uYWN0aW9uUmVmcmVzaCkge1xuICAgICAgICAgICAgYWguc2hvd0luZm9BY3Rpb25EaWFsb2coXG4gICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5yZXNwb25zZUpTT04uYWN0aW9uUmVmcmVzaC50aXRsZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnJlc3BvbnNlSlNPTi5hY3Rpb25SZWZyZXNoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmICYmIHRoaXMucHJvcHMuaHJlZiAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5ocmVmICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLmhyZWZ9IGNsYXNzTmFtZT17XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJ9Pnt0aGlzLnByb3BzLnRleHR9PC9hPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZm9ybUZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dQb3B1cEZvcm0oZXZlbnQsIHt9KX0+XG4gICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfc3dlZXRhbGVydCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiQWxlcnRIYW5kbGVyIiwiZXhwb3J0cyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJzaG93RXJyb3JEaWFsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJjc3NDbGFzcyIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJjdXN0b21DbGFzcyIsInNob3dJbmZvRGlhbG9nIiwic2hvd0luZm9BY3Rpb25EaWFsb2ciLCJjb25maXJtQ2FsbGJhY2siLCJ0aGVuIiwic2hvd0luZm9BY3Rpb25EaWFsb2cyIiwic2hvd0xvYWRlck9uQ29uZmlybSIsInByZUNvbmZpcm0iLCJkYXRhIiwic2hvd0NvbmZpcm1EaWFsb2ciLCJjYW5jZWxDYWxsYmFjayIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ3aWxsRGVsZXRlIiwic2hvd0NvbmZpcm1EaWFsb2dIVE1MIiwiaHRtbCIsInNob3dQcmVDb25maXJtRGlhbG9nIiwicHJlQ29uZmlybUNhbGxiYWNrIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZ0RpYWxvZyIsImFsbG93RXNjYXBlS2V5Iiwib25CZWZvcmVPcGVuIiwiY2xpY2tDb25maXJtIiwiX3Nob3dTZWxlY3REaWFsb2ciLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsIm9iak9wdGlvbnMiLCJfeWllbGQkU3dhbCRmaXJlIiwic2VsZWN0ZWRWYWx1ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJpbnB1dCIsImlucHV0T3B0aW9ucyIsImlucHV0UGxhY2Vob2xkZXIiLCJzZW50IiwiYWJydXB0Iiwic3RvcCIsInNob3dTZWxlY3REaWFsb2ciLCJfeCIsIl94MiIsIl94MyIsIl94NCIsIl94NSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfRm9ybVZpZXciLCJfVGFibGVCdXR0b24iLCJfTW9kYWxEZXRhaWxUYWJsZUJ1dHRvbiIsIl9Qb3N0QWN0aW9uQnV0dG9uIiwiX21hdGVyaWFsIiwiX0FsZXJ0SGFuZGxlciIsIl9zd2VldGFsZXJ0MlJlYWN0Q29udGVudCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImVudW1lcmFibGUiLCJwdXNoIiwiX29iamVjdFNwcmVhZCIsImxlbmd0aCIsImZvckVhY2giLCJfZGVmaW5lUHJvcGVydHkyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIk15U3dhbCIsIndpdGhSZWFjdENvbnRlbnQiLCJNVUlEYXRhVGFibGUiLCJSZWFjdCIsImxhenkiLCJGb3JtTWFwcGVyRmllbGQiLCJUYWJsZVZpZXciLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsImNyZWF0ZVRoZW1lIiwib3ZlcnJpZGVzIiwiTXVpUGFwZXIiLCJlbGV2YXRpb240IiwiYm94U2hhZG93IiwiTXVpVG9vbGJhciIsImd1dHRlcnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInN0YXRlIiwic2VsZWN0ZWRJdGVtcyIsImFjdGl2ZUZvcm0iLCJhY3RpdmVCdXR0b24iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmb3JtRGF0YSIsImRhdGF0YWJsZSIsImFkZFNlbGVjdGVkSXRlbSIsImJpbmQiLCJoYW5kbGVCdXR0b25DbGljayIsInN1Ym1pdEZvcm0iLCJjYW5jZWxGb3JtIiwic2V0Rm9ybURhdGEiLCJmaXJlUmVxdWVzdCIsIl9pbmhlcml0czIiLCJyZW5kZXIiLCJfdGhpczIiLCJidXR0b25zIiwicmVndWxhckJ1dHRvbnMiLCJjb21wb25lbnQiLCJzZWxlY3Rpb25CdXR0b25zIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm9uQ2xpY2siLCJsYWJlbCIsInRhYmxlQnV0dG9ucyIsIlRhYmxlQnV0dG9uIiwiaHJlZiIsImxhbmd1YWdlUmVmcyIsIm9wdGlvbnMiLCJ0ZXh0TGFiZWxzIiwiYm9keSIsIm5vTWF0Y2giLCJUQUJMRV9OT19NQVRDSCIsInRvb2xUaXAiLCJUQUJMRV9UT09MVElQIiwiY29sdW1uSGVhZGVyVG9vbHRpcCIsImNvbHVtbiIsImNvbmNhdCIsInBhZ2luYXRpb24iLCJUQUJMRV9ORVhUX1BBR0UiLCJwcmV2aW91cyIsIlRBQkxFX1BSRVZJT1VTX1BBR0UiLCJyb3dzUGVyUGFnZSIsIlRBQkxFX1JPV1NfUEVSX1BBR0UiLCJkaXNwbGF5Um93cyIsIlRBQkxFX0RJU1BMQVlfUk9XUyIsInRvb2xiYXIiLCJzZWFyY2giLCJUQUJMRV9TRUFSQ0giLCJkb3dubG9hZENzdiIsIlRBQkxFX0RPV05MT0FEX0NTViIsInByaW50IiwiVEFCTEVfUFJJTlQiLCJ2aWV3Q29sdW1ucyIsIlRBQkxFX1ZJRVdfQ09MVU1OUyIsImZpbHRlclRhYmxlIiwiVEFCTEVfRklMVEVSX1RBQkxFIiwiYWxsIiwiVEFCTEVfRklMVEVSX0FMTCIsIlRBQkxFX0ZJTFRFUl9USVRMRSIsInJlc2V0IiwiVEFCTEVfRklMVEVSX1JFU0VUIiwiVEFCTEVfVElUTEUiLCJ0aXRsZUFyaWEiLCJUQUJMRV9USVRMRV9BUklBIiwic2VsZWN0ZWRSb3dzIiwiVEFCTEVfU0VMRUNURURfVEVYVCIsIlRBQkxFX1NFTEVDVEVEX0RFTEVURSIsImRlbGV0ZUFyaWEiLCJUQUJMRV9TRUxFQ1RFRF9ERUxFVEVfQVJJQSIsIkZyYWdtZW50IiwiY2hlY2tib3giLCJjdXJyZW50Um93c1NlbGVjdGVkIiwiYWxsUm93c1NlbGVjdGVkIiwicm93c1NlbGVjdGVkIiwiY29sdW1ucyIsImNyZWF0ZUNvbHVtbnMiLCJmaWVsZHMiLCJhY3Rpb24iLCJ0YWJsZVN0YXRlIiwicGVyc2lzdFBhcmFtc0ludG9TdG9yYWdlIiwic2VhcmNoT3BlbiIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsImdldE11aVRoZW1lIiwiZWxlbWVudCIsInJlZiIsIm5vZGUiLCJoZWFkbGluZSIsInJlc3BvbnNpdmUiLCJuYW1lIiwib2JqRGF0YSIsInNldFN0YXRlIiwiYnV0dG9uQ29uZiIsIl90aGlzMyIsImZvcm0iLCJ1cGRhdGVGdW5jdGlvbiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJzdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsInNyYyIsImFsdCIsIm1ldGhvZCIsImlkIiwiZmllbGQiLCJzdWJtaXRCdXR0b25MYWJlbCIsIkNPTkZJUk0iLCJzaG93Q29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbkxhYmVsIiwiQ0FOQ0VMIiwiYWN0aW9ucyIsImlzQ29uZmlybWVkIiwic2VsZWN0ZWRJZCIsInNlbGVjdGVkRGF0YSIsInVybCIsImpRdWVyeSIsInBvc3QiLCJkb25lIiwicmVzcG9uc2VEYXRhIiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZXNldFNlbGVjdGlvbiIsImZvcm1hdCIsInJlcGxhY2UiLCJzZWxlY3RSb3dEZWxldGUiLCJfdGhpczQiLCJfbG9vcCIsInR5cGUiLCJjdXN0b21Cb2R5UmVuZGVyIiwidGFibGVNZXRhIiwidXBkYXRlVmFsdWUiLCJyZWZlcmVuY2VzIiwiTW9kYWxEZXRhaWxUYWJsZUJ1dHRvbiIsImJ1dHRvbkxhYmVsIiwibWVzc2FnZSIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lU3RyaW5nIiwiZGF0ZVN0cmluZyIsImdldEZ1bGxZZWFyIiwicm93RGF0YSIsInNldFJvd0RhdGEiLCJQb3N0QWN0aW9uQnV0dG9uIiwiX2V4dGVuZHMyIiwiYnV0dG9uQ29sIiwic29ydCIsImNhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhyZWZGaWVsZCIsIm9uTW91c2VVcCIsImJ1dHRvblRleHQiLCJmb3JtRmllbGRzIiwiZm9ybUhlYWRsaW5lRmllbGRJbmRleCIsIm9iak1hcmtlcnMiLCJtYXJrZXJzIiwibWFya2VyQ29sIiwibWFya2VyRGF0YSIsImRhdGFTdGF0ZSIsImRhdGFUb2dnbGUiLCJkYXRhUGxhY2VtZW50IiwiYWgiLCJzdWNjZXNzIiwiY29uZmlybWF0aW9uSGVhZGxpbmUiLCJjb25maXJtYXRpb25NZXNzYWdlIiwiY29uZmlybWF0aW9uWWVzIiwiY29uZmlybWF0aW9uTm8iLCJjb21wb25lbnREaWRNb3VudCIsImxvYWREYXRhQXN5bmMiLCJsb2FkRGF0YSIsImFwcGx5UGFyYW1zRnJvbVN0b3JhZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImZpbmlzaGVkTG9hZGluZyIsInBhcmFtc1Jlc3RvcmVkIiwiX3RoaXM1Iiwic3RvcmFnZUtleSIsIlVSTCIsIndpbmRvdyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdyb3VwSWQiLCJmaWx0ZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhZ2UiLCJwYXJzZUludCIsInNlYXJjaFRleHQiLCJzZXRUaW1lb3V0IiwiZmlsdGVyTGlzdCIsInNldEl0ZW0iLCJfdGhpczYiLCJhc3luY0RhdGFVcmwiLCJDb21wb25lbnQiLCJNb2RhbCIsIk1vZGFsQ29udGVudE1lc3NhZ2UiLCJzaG93TW9kYWwiLCJjbG9zZU1vZGFsIiwic2hvdyIsIm9uQ29uZmlybSIsIkNvbmRpdGlvbiIsIk1vZGFsQ29udGVudENvbmZpcm1NZXNzYWdlIiwiTW9kYWxDb250ZW50Rm9ybSIsIk5ld0Zvcm1NYXBwZXJGaWVsZCIsInJlc2V0TW9kYWwiLCJzaG93RHluYW1pY01vZGFsIiwic2VuZFJlcXVlc3QiLCJvblJlcXVlc3REb25lIiwib25SZXF1ZXN0RmFpbCIsIm9uRm9ybUludmFsaWQiLCJkeW5hbWljTW9kYWwiLCJkeW5hbWljVGl0bGUiLCJkeW5hbWljTWVzc2FnZSIsImR5bmFtaWNDb25maXJtQnV0dG9uVGV4dCIsImR5bmFtaWNPbkNvbmZpcm0iLCJlcnJvck1lc3NhZ2VzIiwib25Gb3JtVXBkYXRlIiwibWVzc2FnZXMiLCJSRVFVRVNUX1RPS0VOIiwiZmFpbCIsImpzb24iLCJ1cGRhdGVSb3ciLCJyZXNwb25zZSIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiY29uZmlybU1vZGFsIiwiZXh0ZW5kIiwib25DaGFuZ2UiLCJvbkludmFsaWQiLCJvbkNhbmNlbCIsImNvbmRpdGlvbnMiLCJzaG93UG9wdXBGb3JtIiwiZm9ybVByb3BzIiwiZGl2IiwiZm9ybUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnRzIiwiYWN0aW9uUmVmcmVzaCJdLCJzb3VyY2VSb290IjoiIn0=