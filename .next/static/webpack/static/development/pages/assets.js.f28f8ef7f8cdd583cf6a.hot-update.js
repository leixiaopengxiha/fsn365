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
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "./node_modules/@material-ui/core/esm/TableFooter/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "./node_modules/@material-ui/icons/FirstPage.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "./node_modules/@material-ui/icons/LastPage.js");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_18__);


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
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "first page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 65
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "previous page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 71
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 70
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 46
    }
  }) : __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "home-contiar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "assets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "Assets")), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"],
    className: "staking-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.table,
    "aria-label": "custom pagination table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 37
      }
    }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        width: 160
      },
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 37
      }
    }, row.calories), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        width: 160
      },
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }, row.fat));
  }), emptyRows > 0 && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      height: 53 * emptyRows
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 37
    }
  }))), __jsx(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      lineNumber: 166,
      columnNumber: 33
    }
  })))))));
}

_s2(index, "N7xAgYYZoaGkWr+XDiFUaQf3IRk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzMSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4U2hyaW5rIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJUYWJsZVBhZ2luYXRpb25BY3Rpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJjb3VudCIsInBhZ2UiLCJyb3dzUGVyUGFnZSIsIm9uQ2hhbmdlUGFnZSIsImhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJoYW5kbGVOZXh0QnV0dG9uQ2xpY2siLCJoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrIiwiTWF0aCIsIm1heCIsImNlaWwiLCJkaXJlY3Rpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJyb3dzIiwic29ydCIsImEiLCJiIiwidXNlU3R5bGVzMiIsInRhYmxlIiwibWluV2lkdGgiLCJpbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJlbXB0eVJvd3MiLCJtaW4iLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2VQYWdlIiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwic2xpY2UiLCJtYXAiLCJyb3ciLCJ3aWR0aCIsImhlaWdodCIsImxhYmVsIiwiaW5wdXRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dHMuanMuZjI4ZjhlZjdmOGNkZDU4M2NmNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9uYXYnXHJcbmltcG9ydCAnLi9hc3NldHMubGVzcydcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUZvb3Rlcic7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBGaXJzdFBhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaXJzdFBhZ2UnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0JztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dSaWdodCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcclxuaW1wb3J0IExhc3RQYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFzdFBhZ2UnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjUpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQYWdpbmF0aW9uQWN0aW9ucyhwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczEoKTtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgY291bnQsIHBhZ2UsIHJvd3NQZXJQYWdlLCBvbkNoYW5nZVBhZ2UgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0J1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5leHRCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBNYXRoLm1heCgwLCBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZpcnN0IHBhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxMYXN0UGFnZUljb24gLz4gOiA8Rmlyc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9IGRpc2FibGVkPXtwYWdlID09PSAwfSBhcmlhLWxhYmVsPVwicHJldmlvdXMgcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+IDogPEtleWJvYXJkQXJyb3dMZWZ0IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHQgcGFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPEtleWJvYXJkQXJyb3dMZWZ0IC8+IDogPEtleWJvYXJkQXJyb3dSaWdodCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFzdFBhZ2VCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFzdCBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8Rmlyc3RQYWdlSWNvbiAvPiA6IDxMYXN0UGFnZUljb24gLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblRhYmxlUGFnaW5hdGlvbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlUGFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHJvd3NQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQpIHtcclxuICAgIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICAgIGNyZWF0ZURhdGEoJ0N1cGNha2UnLCAzMDUsIDMuNyksXHJcbiAgICBjcmVhdGVEYXRhKCdEb251dCcsIDQ1MiwgMjUuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnRnJvemVuIHlvZ2h1cnQnLCAxNTksIDYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdIb25leWNvbWInLCA0MDgsIDMuMiksXHJcbiAgICBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdKZWxseSBCZWFuJywgMzc1LCAwLjApLFxyXG4gICAgY3JlYXRlRGF0YSgnS2l0S2F0JywgNTE4LCAyNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0xvbGxpcG9wJywgMzkyLCAwLjIpLFxyXG4gICAgY3JlYXRlRGF0YSgnTWFyc2htYWxsb3cnLCAzMTgsIDApLFxyXG4gICAgY3JlYXRlRGF0YSgnTm91Z2F0JywgMzYwLCAxOS4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ09yZW8nLCA0MzcsIDE4LjApLFxyXG5dLnNvcnQoKGEsIGIpID0+IChhLmNhbG9yaWVzIDwgYi5jYWxvcmllcyA/IC0xIDogMSkpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNTAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMigpO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5Um93cyA9IHJvd3NQZXJQYWdlIC0gTWF0aC5taW4ocm93c1BlclBhZ2UsIHJvd3MubGVuZ3RoIC0gcGFnZSAqIHJvd3NQZXJQYWdlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRSb3dzUGVyUGFnZShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XHJcbiAgICAgICAgc2V0UGFnZSgwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250aWFyJz5cclxuICAgICAgICAgICAgICAgIDxOYXY+PC9OYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNzZXRzJz5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkFzc2V0czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfSBjbGFzc05hbWU9J3N0YWtpbmctdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b20gcGFnaW5hdGlvbiB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyb3dzUGVyUGFnZSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJvd3Muc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyB3aWR0aDogMTYwIH19IGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY2Fsb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IHdpZHRoOiAxNjAgfX0gYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5mYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlSb3dzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IHN0eWxlPXt7IGhlaWdodDogNTMgKiBlbXB0eVJvd3MgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNSwgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAtMSB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3Jvd3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7ICdhcmlhLWxhYmVsJzogJ3Jvd3MgcGVyIHBhZ2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnNDb21wb25lbnQ9e1RhYmxlUGFnaW5hdGlvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=