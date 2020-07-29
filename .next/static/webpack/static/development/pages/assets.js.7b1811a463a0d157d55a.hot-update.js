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



















var useStyles1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    }
  };
});

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
    className: "btn",
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

_s(TablePaginationActions, "KqsuGf3FnFNq6eN80CYbjOwL8vo=", false, function () {
  return [useStyles1, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"]];
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
});
var useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  table: {
    minWidth: 500
  }
});
function index() {
  _s2();

  var _this = this;

  var classes = useStyles2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),
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
  }), __jsx("div", {
    className: "assets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Assets")), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__["default"],
    className: "assets-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "custom pagination table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 63
    }
  }, "Asset")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 63
    }
  }, "Asset ID")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx("strong", {
    className: "sum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 63
    }
  }, "Quantity")))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 37
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "th",
      scope: "row",
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 45
      }
    }, row.name)), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 45
      }
    }, row.calories)), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      align: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 41
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
      columnNumber: 37
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }))), __jsx(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    rowsPerPageOptions: [5, 10, 25, 50, 100],
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
      columnNumber: 37
    }
  }))))))));
}

_s2(index, "V+IVidJ0k2yKlfOM9YnALJb9ctk=", false, function () {
  return [useStyles2];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzMSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4U2hyaW5rIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJUYWJsZVBhZ2luYXRpb25BY3Rpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJjb3VudCIsInBhZ2UiLCJyb3dzUGVyUGFnZSIsIm9uQ2hhbmdlUGFnZSIsImhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJoYW5kbGVOZXh0QnV0dG9uQ2xpY2siLCJoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrIiwiTWF0aCIsIm1heCIsImNlaWwiLCJkaXJlY3Rpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJyb3dzIiwic29ydCIsImEiLCJiIiwidXNlU3R5bGVzMiIsInRhYmxlIiwibWluV2lkdGgiLCJpbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJlbXB0eVJvd3MiLCJtaW4iLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2VQYWdlIiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwic2xpY2UiLCJtYXAiLCJyb3ciLCJoZWlnaHQiLCJpbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LHNCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixHQUFoQixDQUR4QjtBQUVJLFdBQU8sRUFBRSxDQUZiO0FBR0ksU0FBSyxFQUFFWixJQUFJLENBQUNjLE1BSGhCO0FBSUksZUFBVyxFQUFFbEMsV0FKakI7QUFLSSxRQUFJLEVBQUVELElBTFY7QUFNSSxlQUFXLEVBQUU7QUFDVCtDLGdCQUFVLEVBQUU7QUFBRSxzQkFBYztBQUFoQixPQURIO0FBRVQsZ0JBQVE7QUFGQyxLQU5qQjtBQVVJLGdCQUFZLEVBQUVYLGdCQVZsQjtBQVdJLHVCQUFtQixFQUFFRSx1QkFYekI7QUFZSSxvQkFBZ0IsRUFBRTNDLHNCQVp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQWhDSixDQURKLENBSkosQ0FISixDQURKLENBREo7QUFrRUg7O0lBbEZ1QmlDLEs7VUFDSkgsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXNzZXRzLmpzLjdiMTgxMWE0NjNhMGQxNTdkNTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2J1xyXG5pbXBvcnQgJy4vYXNzZXRzLmxlc3MnXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUZvb3Rlcic7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBGaXJzdFBhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaXJzdFBhZ2UnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0JztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcclxuaW1wb3J0IExhc3RQYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFzdFBhZ2UnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjUpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQYWdpbmF0aW9uQWN0aW9ucyhwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczEoKTtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgY291bnQsIHBhZ2UsIHJvd3NQZXJQYWdlLCBvbkNoYW5nZVBhZ2UgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0J1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBNYXRoLm1heCgwLCBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZpcnN0IHBhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxMYXN0UGFnZUljb24gLz4gOiA8Rmlyc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9IGRpc2FibGVkPXtwYWdlID09PSAwfSBhcmlhLWxhYmVsPVwicHJldmlvdXMgcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+IDogPEtleWJvYXJkQXJyb3dMZWZ0IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHQgcGFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPEtleWJvYXJkQXJyb3dMZWZ0IC8+IDogPEtleWJvYXJkQXJyb3dSaWdodCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFzdCBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8Rmlyc3RQYWdlSWNvbiAvPiA6IDxMYXN0UGFnZUljb24gLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblRhYmxlUGFnaW5hdGlvbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHJvd3NQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQpIHtcclxuICAgIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICAgIGNyZWF0ZURhdGEoJ0N1cGNha2UnLCAzMDUsIDMuNyksXHJcbiAgICBjcmVhdGVEYXRhKCdEb251dCcsIDQ1MiwgMjUuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnRnJvemVuIHlvZ2h1cnQnLCAxNTksIDYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdIb25leWNvbWInLCA0MDgsIDMuMiksXHJcbiAgICBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdKZWxseSBCZWFuJywgMzc1LCAwLjApLFxyXG4gICAgY3JlYXRlRGF0YSgnS2l0S2F0JywgNTE4LCAyNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0xvbGxpcG9wJywgMzkyLCAwLjIpLFxyXG4gICAgY3JlYXRlRGF0YSgnTWFyc2htYWxsb3cnLCAzMTgsIDApLFxyXG4gICAgY3JlYXRlRGF0YSgnTm91Z2F0JywgMzYwLCAxOS4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ09yZW8nLCA0MzcsIDE4LjApLFxyXG5dLnNvcnQoKGEsIGIpID0+IChhLmNhbG9yaWVzIDwgYi5jYWxvcmllcyA/IC0xIDogMSkpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNTAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgICBjb25zdCBlbXB0eVJvd3MgPSByb3dzUGVyUGFnZSAtIE1hdGgubWluKHJvd3NQZXJQYWdlLCByb3dzLmxlbmd0aCAtIHBhZ2UgKiByb3dzUGVyUGFnZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGlhcic+XHJcbiAgICAgICAgICAgICAgICA8TmF2PjwvTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc3NldHMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Bc3NldHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBjbGFzc05hbWU9J2Fzc2V0cy10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY3VzdG9tIHBhZ2luYXRpb24gdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+PHN0cm9uZyBjbGFzc05hbWU9J3N1bSc+QXNzZXQ8L3N0cm9uZz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPjxzdHJvbmcgY2xhc3NOYW1lPSdzdW0nPkFzc2V0IElEPC9zdHJvbmc+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj48c3Ryb25nIGNsYXNzTmFtZT0nc3VtJz5RdWFudGl0eTwvc3Ryb25nPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyb3dzUGVyUGFnZSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByb3dzLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cm93Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jvdy5jYWxvcmllc308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmZhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlSb3dzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBzdHlsZT17eyBoZWlnaHQ6IDUzICogZW1wdHlSb3dzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNSwgNTAsIDEwMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3Jvd3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczogeyAnYXJpYS1sYWJlbCc6ICdyb3dzIHBlciBwYWdlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnNDb21wb25lbnQ9e1RhYmxlUGFnaW5hdGlvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9