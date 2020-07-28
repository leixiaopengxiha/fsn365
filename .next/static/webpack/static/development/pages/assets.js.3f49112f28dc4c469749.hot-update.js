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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldHMvaW5kZXguanMiXSwibmFtZXMiOlsiVGFibGVQYWdpbmF0aW9uQWN0aW9ucyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlczEiLCJ0aGVtZSIsInVzZVRoZW1lIiwiY291bnQiLCJwYWdlIiwicm93c1BlclBhZ2UiLCJvbkNoYW5nZVBhZ2UiLCJoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGljayIsImV2ZW50IiwiaGFuZGxlQmFja0J1dHRvbkNsaWNrIiwiaGFuZGxlTmV4dEJ1dHRvbkNsaWNrIiwiaGFuZGxlTGFzdFBhZ2VCdXR0b25DbGljayIsIk1hdGgiLCJtYXgiLCJjZWlsIiwicm9vdCIsImRpcmVjdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsInJvd3MiLCJzb3J0IiwiYSIsImIiLCJ1c2VTdHlsZXMyIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJpbmRleCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJlbXB0eVJvd3MiLCJtaW4iLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2VQYWdlIiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlBhcGVyIiwic2xpY2UiLCJtYXAiLCJyb3ciLCJoZWlnaHQiLCJsYWJlbCIsImlucHV0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQWhDSixDQURKLENBSkosQ0FKSixDQURKO0FBaUVIOztJQWpGdUJxQyxLO1VBQ0pKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0cy5qcy4zZjQ5MTEyZjI4ZGM0YzQ2OTc0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdidcclxuaW1wb3J0ICcuL2Fzc2V0cy5sZXNzJ1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVGb290ZXInO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgRmlyc3RQYWdlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmlyc3RQYWdlJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdCc7XHJcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodCc7XHJcbmltcG9ydCBMYXN0UGFnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhc3RQYWdlJztcclxuXHJcbi8vIGNvbnN0IHVzZVN0eWxlczEgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuLy8gICAgIHJvb3Q6IHtcclxuLy8gICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4vLyAgICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMi41KSxcclxuLy8gICAgIH0sXHJcbi8vIH0pKTtcclxuXHJcbmZ1bmN0aW9uIFRhYmxlUGFnaW5hdGlvbkFjdGlvbnMocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMxKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IGNvdW50LCBwYWdlLCByb3dzUGVyUGFnZSwgb25DaGFuZ2VQYWdlIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSAtIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIHBhZ2UgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTGFzdFBhZ2VCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlUGFnZShldmVudCwgTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmlyc3RQYWdlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmaXJzdCBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyA8TGFzdFBhZ2VJY29uIC8+IDogPEZpcnN0UGFnZUljb24gLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQmFja0J1dHRvbkNsaWNrfSBkaXNhYmxlZD17cGFnZSA9PT0gMH0gYXJpYS1sYWJlbD1cInByZXZpb3VzIHBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPEtleWJvYXJkQXJyb3dSaWdodCAvPiA6IDxLZXlib2FyZEFycm93TGVmdCAvPn1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJuZXh0IHBhZ2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxLZXlib2FyZEFycm93TGVmdCAvPiA6IDxLZXlib2FyZEFycm93UmlnaHQgLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxhc3RQYWdlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSBNYXRoLmNlaWwoY291bnQgLyByb3dzUGVyUGFnZSkgLSAxfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhc3QgcGFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPEZpcnN0UGFnZUljb24gLz4gOiA8TGFzdFBhZ2VJY29uIC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5UYWJsZVBhZ2luYXRpb25BY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZVBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICByb3dzUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCBjYWxvcmllcywgZmF0KSB7XHJcbiAgICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgICBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcpLFxyXG4gICAgY3JlYXRlRGF0YSgnRG9udXQnLCA0NTIsIDI1LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0Zyb3plbiB5b2dodXJ0JywgMTU5LCA2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnR2luZ2VyYnJlYWQnLCAzNTYsIDE2LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnSG9uZXljb21iJywgNDA4LCAzLjIpLFxyXG4gICAgY3JlYXRlRGF0YSgnSWNlIGNyZWFtIHNhbmR3aWNoJywgMjM3LCA5LjApLFxyXG4gICAgY3JlYXRlRGF0YSgnSmVsbHkgQmVhbicsIDM3NSwgMC4wKSxcclxuICAgIGNyZWF0ZURhdGEoJ0tpdEthdCcsIDUxOCwgMjYuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdMb2xsaXBvcCcsIDM5MiwgMC4yKSxcclxuICAgIGNyZWF0ZURhdGEoJ01hcnNobWFsbG93JywgMzE4LCAwKSxcclxuICAgIGNyZWF0ZURhdGEoJ05vdWdhdCcsIDM2MCwgMTkuMCksXHJcbiAgICBjcmVhdGVEYXRhKCdPcmVvJywgNDM3LCAxOC4wKSxcclxuXS5zb3J0KChhLCBiKSA9PiAoYS5jYWxvcmllcyA8IGIuY2Fsb3JpZXMgPyAtMSA6IDEpKTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlczIgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRhYmxlOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDUwMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSg1KTtcclxuXHJcbiAgICBjb25zdCBlbXB0eVJvd3MgPSByb3dzUGVyUGFnZSAtIE1hdGgubWluKHJvd3NQZXJQYWdlLCByb3dzLmxlbmd0aCAtIHBhZ2UgKiByb3dzUGVyUGFnZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtY29udGlhcic+XHJcbiAgICAgICAgICAgICAgICA8TmF2PjwvTmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fzc2V0cyc+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Bc3NldHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gY2xhc3NOYW1lPSdhc3NldHMtdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b20gcGFnaW5hdGlvbiB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+PHN0cm9uZyBjbGFzc05hbWU9J3N1bSc+QXNzZXQ8L3N0cm9uZz48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjxzdHJvbmcgY2xhc3NOYW1lPSdzdW0nPkFzc2V0IElEPC9zdHJvbmc+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD48c3Ryb25nIGNsYXNzTmFtZT0nc3VtJz5RdWFudGl0eTwvc3Ryb25nPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJvd3NQZXJQYWdlID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcm93cy5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5jYWxvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmZhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbXB0eVJvd3MgPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgc3R5bGU9e3sgaGVpZ2h0OiA1MyAqIGVtcHR5Um93cyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1LCB7IGxhYmVsOiAnQWxsJywgdmFsdWU6IC0xIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHsgJ2FyaWEtbGFiZWwnOiAncm93cyBwZXIgcGFnZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc0NvbXBvbmVudD17VGFibGVQYWdpbmF0aW9uQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==