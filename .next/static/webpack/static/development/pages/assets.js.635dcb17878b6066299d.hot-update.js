webpackHotUpdate("static\\development\\pages\\assets.js",{

/***/ "./pages/assets/index.js":
/*!*******************************!*\
  !*** ./pages/assets/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav */ "./pages/nav/index.js");
/* harmony import */ var _assets_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets.less */ "./pages/assets/assets.less");
/* harmony import */ var _assets_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "./node_modules/@material-ui/core/esm/TableFooter/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "./node_modules/@material-ui/icons/FirstPage.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "./node_modules/@material-ui/icons/LastPage.js");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_19__);


var _jsxFileName = "D:\\\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\assets\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















 // const useStyles1 = makeStyles((theme) => ({
//     root: {
//         flexShrink: 0,
//         marginLeft: theme.spacing(2.5),
//     },
// }));

function TablePaginationActions(props) {
  _s();

  var classes = useStyles1();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var count = props.count,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      onChangePage = props.onChangePage;

  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  };

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "first page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 65
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "previous page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 71
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 70
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 66
    }
  })));
}

_s(TablePaginationActions, "KqsuGf3FnFNq6eN80CYbjOwL8vo=", true, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"]];
});

_c = TablePaginationActions;
TablePaginationActions.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  rowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};

function createData(name, calories, fat) {
  return {
    name: name,
    calories: calories,
    fat: fat
  };
}

var rows = [createData('Cupcake', 305, 3.7), createData('Donut', 452, 25.0), createData('Eclair', 262, 16.0), createData('Frozen yoghurt', 159, 6.0), createData('Gingerbread', 356, 16.0), createData('Honeycomb', 408, 3.2), createData('Ice cream sandwich', 237, 9.0), createData('Jelly Bean', 375, 0.0), createData('KitKat', 518, 26.0), createData('Lollipop', 392, 0.2), createData('Marshmallow', 318, 0), createData('Nougat', 360, 19.0), createData('Oreo', 437, 18.0)].sort(function (a, b) {
  return a.calories < b.calories ? -1 : 1;
}); // const useStyles2 = makeStyles({
//     table: {
//         minWidth: 500,
//     },
// });

function index() {
  _s2();

  var _this = this;

  // const classes = useStyles2();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "home-contiar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "assets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, "Assets")), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__["default"],
    className: "assets-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.table,
    "aria-label": "custom pagination table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 44
    }
  }, "Asset")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 44
    }
  }, "Asset ID")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 44
    }
  }, "Quantity")))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 37
      }
    }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, row.calories), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 37
      }
    }, row.fat));
  }), emptyRows > 0 && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      height: 53 * emptyRows
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    rowsPerPageOptions: [5, 10, 25, {
      label: 'All',
      value: -1
    }],
    colSpan: 3,
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    SelectProps: {
      inputProps: {
        'aria-label': 'rows per page'
      },
      "native": true
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    ActionsComponent: TablePaginationActions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  })))))));
}

_s2(index, "OeamEqfqYGafDj9X5k7ZYjy/zXo=");

var _c;

$RefreshReg$(_c, "TablePaginationActions");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsiVGFibGVQYWdpbmF0aW9uQWN0aW9ucyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlczEiLCJ0aGVtZSIsInVzZVRoZW1lIiwiY291bnQiLCJwYWdlIiwicm93c1BlclBhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGljayIsImV2ZW50IiwiaGFuZGxlQmFja0J1dHRvbkNsaWNrIiwiaGFuZGxlTmV4dEJ1dHRvbkNsaWNrIiwiaGFuZGxlTGFzdFBhZ2VCdXR0b25DbGljayIsIk1hdGgiLCJtYXgiLCJjZWlsIiwicm9vdCIsImRpcmVjdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsInJvd3MiLCJzb3J0IiwiYSIsImIiLCJpbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJlbXB0eVJvd3MiLCJtaW4iLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2VQYWdlIiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwidGFibGUiLCJzbGljZSIsIm1hcCIsInJvdyIsImhlaWdodCIsImxhYmVsIiwiaW5wdXRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxzQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUM7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dmVsb3BtZW50XFxwYWdlc1xcYXNzZXRzLmpzLjYzNWRjYjE3ODc4YjYwNjYyOTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2J1xyXG5pbXBvcnQgJy4vYXNzZXRzLmxlc3MnXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUZvb3Rlcic7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBGaXJzdFBhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaXJzdFBhZ2UnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0JztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcclxuaW1wb3J0IExhc3RQYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFzdFBhZ2UnO1xyXG5cclxuLy8gY29uc3QgdXNlU3R5bGVzMSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4vLyAgICAgcm9vdDoge1xyXG4vLyAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbi8vICAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjUpLFxyXG4vLyAgICAgfSxcclxuLy8gfSkpO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQYWdpbmF0aW9uQWN0aW9ucyhwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczEoKTtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgY291bnQsIHBhZ2UsIHJvd3NQZXJQYWdlLCBvbkNoYW5nZVBhZ2UgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0J1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBNYXRoLm1heCgwLCBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZpcnN0IHBhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxMYXN0UGFnZUljb24gLz4gOiA8Rmlyc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9IGRpc2FibGVkPXtwYWdlID09PSAwfSBhcmlhLWxhYmVsPVwicHJldmlvdXMgcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+IDogPEtleWJvYXJkQXJyb3dMZWZ0IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHQgcGFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPEtleWJvYXJkQXJyb3dMZWZ0IC8+IDogPEtleWJvYXJkQXJyb3dSaWdodCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFzdCBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8Rmlyc3RQYWdlSWNvbiAvPiA6IDxMYXN0UGFnZUljb24gLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblRhYmxlUGFnaW5hdGlvbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHJvd3NQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQpIHtcclxuICAgIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICAgIGNyZWF0ZURhdGEoJ0N1cGNha2UnLCAzMDUsIDMuNyksXHJcbiAgICBjcmVhdGVEYXRhKCdEb251dCcsIDQ1MiwgMjUuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnRnJvemVuIHlvZ2h1cnQnLCAxNTksIDYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdIb25leWNvbWInLCA0MDgsIDMuMiksXHJcbiAgICBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdKZWxseSBCZWFuJywgMzc1LCAwLjApLFxyXG4gICAgY3JlYXRlRGF0YSgnS2l0S2F0JywgNTE4LCAyNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0xvbGxpcG9wJywgMzkyLCAwLjIpLFxyXG4gICAgY3JlYXRlRGF0YSgnTWFyc2htYWxsb3cnLCAzMTgsIDApLFxyXG4gICAgY3JlYXRlRGF0YSgnTm91Z2F0JywgMzYwLCAxOS4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ09yZW8nLCA0MzcsIDE4LjApLFxyXG5dLnNvcnQoKGEsIGIpID0+IChhLmNhbG9yaWVzIDwgYi5jYWxvcmllcyA/IC0xIDogMSkpO1xyXG5cclxuLy8gY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoe1xyXG4vLyAgICAgdGFibGU6IHtcclxuLy8gICAgICAgICBtaW5XaWR0aDogNTAwLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5Um93cyA9IHJvd3NQZXJQYWdlIC0gTWF0aC5taW4ocm93c1BlclBhZ2UsIHJvd3MubGVuZ3RoIC0gcGFnZSAqIHJvd3NQZXJQYWdlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRSb3dzUGVyUGFnZShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XHJcbiAgICAgICAgc2V0UGFnZSgwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250aWFyJz5cclxuICAgICAgICAgICAgICAgIDxOYXY+PC9OYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNzZXRzJz5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkFzc2V0czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBjbGFzc05hbWU9J2Fzc2V0cy10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbSBwYWdpbmF0aW9uIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48c3Ryb25nIGNsYXNzTmFtZT0nc3VtJz5Bc3NldDwvc3Ryb25nPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+PHN0cm9uZyBjbGFzc05hbWU9J3N1bSc+QXNzZXQgSUQ8L3N0cm9uZz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxzdHJvbmcgY2xhc3NOYW1lPSdzdW0nPlF1YW50aXR5PC9zdHJvbmc+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocm93c1BlclBhZ2UgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByb3dzLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmNhbG9yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZmF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VtcHR5Um93cyA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBzdHlsZT17eyBoZWlnaHQ6IDUzICogZW1wdHlSb3dzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjUsIHsgbGFiZWw6ICdBbGwnLCB2YWx1ZTogLTEgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczogeyAnYXJpYS1sYWJlbCc6ICdyb3dzIHBlciBwYWdlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25zQ29tcG9uZW50PXtUYWJsZVBhZ2luYXRpb25BY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9