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

_s2(index, "N7xAgYYZoaGkWr+XDiFUaQf3IRk=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsiVGFibGVQYWdpbmF0aW9uQWN0aW9ucyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlczEiLCJ0aGVtZSIsInVzZVRoZW1lIiwiY291bnQiLCJwYWdlIiwicm93c1BlclBhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGljayIsImV2ZW50IiwiaGFuZGxlQmFja0J1dHRvbkNsaWNrIiwiaGFuZGxlTmV4dEJ1dHRvbkNsaWNrIiwiaGFuZGxlTGFzdFBhZ2VCdXR0b25DbGljayIsIk1hdGgiLCJtYXgiLCJjZWlsIiwicm9vdCIsImRpcmVjdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsInJvd3MiLCJzb3J0IiwiYSIsImIiLCJpbmRleCIsInVzZVN0eWxlczIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0UGFnZSIsInNldFJvd3NQZXJQYWdlIiwiZW1wdHlSb3dzIiwibWluIiwibGVuZ3RoIiwiaGFuZGxlQ2hhbmdlUGFnZSIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJQYXBlciIsInRhYmxlIiwic2xpY2UiLCJtYXAiLCJyb3ciLCJoZWlnaHQiLCJsYWJlbCIsImlucHV0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esc0JBQVQsQ0FBZ0ND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QWpGdUJpQyxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhc3NldHMuanMuZDYxZWEzOGRmZTEyZTkyNmFlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9uYXYnXHJcbmltcG9ydCAnLi9hc3NldHMubGVzcydcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlRm9vdGVyJztcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb24nO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEZpcnN0UGFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpcnN0UGFnZSc7XHJcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0xlZnQnO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHQnO1xyXG5pbXBvcnQgTGFzdFBhZ2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MYXN0UGFnZSc7XHJcblxyXG4vLyBjb25zdCB1c2VTdHlsZXMxID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbi8vICAgICByb290OiB7XHJcbi8vICAgICAgICAgZmxleFNocmluazogMCxcclxuLy8gICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIuNSksXHJcbi8vICAgICB9LFxyXG4vLyB9KSk7XHJcblxyXG5mdW5jdGlvbiBUYWJsZVBhZ2luYXRpb25BY3Rpb25zKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMSgpO1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyBjb3VudCwgcGFnZSwgcm93c1BlclBhZ2UsIG9uQ2hhbmdlUGFnZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRmlyc3RQYWdlQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIHBhZ2UgLSAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dEJ1dHRvbkNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxhc3RQYWdlQnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIE1hdGgubWF4KDAsIE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDEpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDB9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZmlyc3QgcGFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPExhc3RQYWdlSWNvbiAvPiA6IDxGaXJzdFBhZ2VJY29uIC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2tCdXR0b25DbGlja30gZGlzYWJsZWQ9e3BhZ2UgPT09IDB9IGFyaWEtbGFiZWw9XCJwcmV2aW91cyBwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxLZXlib2FyZEFycm93UmlnaHQgLz4gOiA8S2V5Ym9hcmRBcnJvd0xlZnQgLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8S2V5Ym9hcmRBcnJvd0xlZnQgLz4gOiA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IHBhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxGaXJzdFBhZ2VJY29uIC8+IDogPExhc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuVGFibGVQYWdpbmF0aW9uQWN0aW9ucy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcm93c1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY2Fsb3JpZXMsIGZhdCkge1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gICAgY3JlYXRlRGF0YSgnQ3VwY2FrZScsIDMwNSwgMy43KSxcclxuICAgIGNyZWF0ZURhdGEoJ0RvbnV0JywgNDUyLCAyNS4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0VjbGFpcicsIDI2MiwgMTYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdGcm96ZW4geW9naHVydCcsIDE1OSwgNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0hvbmV5Y29tYicsIDQwOCwgMy4yKSxcclxuICAgIGNyZWF0ZURhdGEoJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIDIzNywgOS4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0plbGx5IEJlYW4nLCAzNzUsIDAuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdLaXRLYXQnLCA1MTgsIDI2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnTG9sbGlwb3AnLCAzOTIsIDAuMiksXHJcbiAgICBjcmVhdGVEYXRhKCdNYXJzaG1hbGxvdycsIDMxOCwgMCksXHJcbiAgICBjcmVhdGVEYXRhKCdOb3VnYXQnLCAzNjAsIDE5LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnT3JlbycsIDQzNywgMTguMCksXHJcbl0uc29ydCgoYSwgYikgPT4gKGEuY2Fsb3JpZXMgPCBiLmNhbG9yaWVzID8gLTEgOiAxKSk7XHJcblxyXG4vLyBjb25zdCB1c2VTdHlsZXMyID0gbWFrZVN0eWxlcyh7XHJcbi8vICAgICB0YWJsZToge1xyXG4vLyAgICAgICAgIG1pbldpZHRoOiA1MDAsXHJcbi8vICAgICB9LFxyXG4vLyB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMyKCk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoNSk7XHJcblxyXG4gICAgY29uc3QgZW1wdHlSb3dzID0gcm93c1BlclBhZ2UgLSBNYXRoLm1pbihyb3dzUGVyUGFnZSwgcm93cy5sZW5ndGggLSBwYWdlICogcm93c1BlclBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFJvd3NQZXJQYWdlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcclxuICAgICAgICBzZXRQYWdlKDApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRpYXInPlxyXG4gICAgICAgICAgICAgICAgPE5hdj48L05hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhc3NldHMnPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QXNzZXRzPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IGNsYXNzTmFtZT0nYXNzZXRzLXRhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9tIHBhZ2luYXRpb24gdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxzdHJvbmcgY2xhc3NOYW1lPSdzdW0nPkFzc2V0PC9zdHJvbmc+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48c3Ryb25nIGNsYXNzTmFtZT0nc3VtJz5Bc3NldCBJRDwvc3Ryb25nPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+PHN0cm9uZyBjbGFzc05hbWU9J3N1bSc+UXVhbnRpdHk8L3N0cm9uZz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyb3dzUGVyUGFnZSA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJvd3Muc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY2Fsb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5mYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlSb3dzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IHN0eWxlPXt7IGhlaWdodDogNTMgKiBlbXB0eVJvd3MgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNSwgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAtMSB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3Jvd3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7ICdhcmlhLWxhYmVsJzogJ3Jvd3MgcGVyIHBhZ2UnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnNDb21wb25lbnQ9e1RhYmxlUGFnaW5hdGlvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=