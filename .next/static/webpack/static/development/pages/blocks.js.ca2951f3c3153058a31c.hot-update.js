webpackHotUpdate("static/development/pages/blocks.js",{

/***/ "./pages/blocks/index.js":
/*!*******************************!*\
  !*** ./pages/blocks/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blocks; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/esm/TablePagination/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _blocks_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks.less */ \"./pages/blocks/blocks.less\");\n/* harmony import */ var _blocks_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_less__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_blocks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/blocks.js */ \"./api/blocks.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs/locale/zh-cn */ \"./node_modules/dayjs/locale/zh-cn.js\");\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ \"./node_modules/dayjs/plugin/relativeTime.js\");\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\nvar _jsxFileName = \"/Users/fantaofan/Desktop/studio/fsn365/pages/blocks/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n // 处理时间\n\n // 实时动态转换（简体中文）\n\n // 加载插件\n\ndayjs__WEBPACK_IMPORTED_MODULE_15___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17___default.a); // 使用插件\n\nvar columns = [{\n  id: \"height\",\n  label: \"Block\",\n  minWidth: 100\n}, {\n  id: \"timestamp\",\n  label: \"Age\",\n  minWidth: 100\n}, {\n  id: \"miner\",\n  label: \"Miner\",\n  minWidth: 170\n}, {\n  id: \"txns\",\n  label: \"Txn\",\n  minWidth: 100\n}, {\n  id: \"reward\",\n  label: \"Reward\",\n  minWidth: 170\n}];\n\nfunction createData(block, age, miner, txn, reward) {\n  return {\n    block: block,\n    age: age,\n    miner: miner,\n    txn: txn,\n    reward: reward\n  };\n}\n\nfunction Blocks() {\n  _s();\n\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(10),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      rowsPerPage = _React$useState4[0],\n      setRowsPerPage = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      rows = _React$useState6[0],\n      setRows = _React$useState6[1];\n\n  var handleChangePage = function handleChangePage(event, newPage) {\n    setPage(newPage);\n  };\n\n  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {\n    setRowsPerPage(+event.target.value);\n    setPage(0);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // 获取数据\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api_blocks_js__WEBPACK_IMPORTED_MODULE_14__[\"blocksList\"])();\n\n              case 2:\n                result = _context.sent;\n                setRows(result.data.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  console.log(rows);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"main\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"table-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      padding: \"10px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Blocks\"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"root\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    stickyHeader: true,\n    \"aria-label\": \"sticky table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 19\n    }\n  }, columns.map(function (column) {\n    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      key: column.id,\n      align: \"center\",\n      style: {\n        minWidth: column.minWidth\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 23\n      }\n    }, column.label);\n  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      hover: true,\n      role: \"checkbox\",\n      tabIndex: -1,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 25\n      }\n    }, columns.map(function (column) {\n      var value;\n\n      if (column.id == \"timestamp\") {\n        value = dayjs__WEBPACK_IMPORTED_MODULE_15___default()(pubDate).format(\"YYYY-MM-DD HH:mm\");\n      } else if (column.id == \"reward\") {\n        value = \"\".concat(row[column.id], \" FSN\");\n      } else {\n        value = row[column.id];\n      }\n\n      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        key: column.id,\n        align: \"center\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 31\n        }\n      }, column.format && typeof value === \"number\" ? column.format(value) : value);\n    }));\n  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    rowsPerPageOptions: [10, 25, 100],\n    component: \"div\",\n    count: rows.length,\n    rowsPerPage: rowsPerPage,\n    page: page,\n    onChangePage: handleChangePage,\n    onChangeRowsPerPage: handleChangeRowsPerPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Blocks, \"t2XkE3P8wleiBkJVOTnlLlWyc/I=\");\n\n_c = Blocks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blocks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ja3MvaW5kZXguanM/ZjVlZCJdLCJuYW1lcyI6WyJkYXlqcyIsImV4dGVuZCIsInJlbGF0aXZlVGltZSIsImNvbHVtbnMiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJjcmVhdGVEYXRhIiwiYmxvY2siLCJhZ2UiLCJtaW5lciIsInR4biIsInJld2FyZCIsIkJsb2NrcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJyb3dzIiwic2V0Um93cyIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYmxvY2tzTGlzdCIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIm1hcCIsImNvbHVtbiIsInNsaWNlIiwicm93IiwiaW5kZXgiLCJwdWJEYXRlIiwiZm9ybWF0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQzJCOztDQUNFOztDQUN5Qjs7QUFFdERBLDZDQUFLLENBQUNDLE1BQU4sQ0FBYUMsaUVBQWIsRSxDQUE0Qjs7QUFFNUIsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsSUFBRSxFQUFFLFFBQU47QUFBZ0JDLE9BQUssRUFBRSxPQUF2QjtBQUFnQ0MsVUFBUSxFQUFFO0FBQTFDLENBRGMsRUFFZDtBQUFFRixJQUFFLEVBQUUsV0FBTjtBQUFtQkMsT0FBSyxFQUFFLEtBQTFCO0FBQWlDQyxVQUFRLEVBQUU7QUFBM0MsQ0FGYyxFQUdkO0FBQUVGLElBQUUsRUFBRSxPQUFOO0FBQWVDLE9BQUssRUFBRSxP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TUFBTSxDQUFDakMsRUFBUCxJQUFhLFFBQWpCLEVBQTJCO0FBQ2hDdUIsYUFBSyxhQUFNWSxHQUFHLENBQUNGLE1BQU0sQ0FBQ2pDLEVBQVIsQ0FBVCxTQUFMO0FBQ0QsT0FGTSxNQUVBO0FBQ0x1QixhQUFLLEdBQUdZLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDakMsRUFBUixDQUFYO0FBQ0Q7O0FBQ0QsYUFDRSxNQUFDLG1FQUFEO0FBQVcsV0FBRyxFQUFFaUMsTUFBTSxDQUFDakMsRUFBdkI7QUFBMkIsYUFBSyxFQUFDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR2lDLE1BQU0sQ0FBQ0ssTUFBUCxJQUFpQixPQUFPZixLQUFQLEtBQWlCLFFBQWxDLEdBQ0dVLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjZixLQUFkLENBREgsR0FFR0EsS0FITixDQURGO0FBUUQsS0FqQkEsQ0FOSCxDQURGO0FBMkJELEdBOUJGLENBREgsQ0FkRixDQURGLENBREYsRUFtREUsTUFBQywwRUFBRDtBQUNFLHNCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBRHRCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUVQLElBQUksQ0FBQ3VCLE1BSGQ7QUFJRSxlQUFXLEVBQUV6QixXQUpmO0FBS0UsUUFBSSxFQUFFRixJQUxSO0FBTUUsZ0JBQVksRUFBRU0sZ0JBTmhCO0FBT0UsdUJBQW1CLEVBQUVHLHVCQVB2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRGLENBRkYsQ0FERixDQUZGLENBREY7QUF1RUQ7O0dBL0Z1QlosTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2Nrcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL25hdlwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uXCI7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy5sZXNzXCI7XG5pbXBvcnQgeyBibG9ja3NMaXN0IH0gZnJvbSBcIi4uLy4uL2FwaS9ibG9ja3MuanNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjsgLy8g5aSE55CG5pe26Ze0XG5pbXBvcnQgXCJkYXlqcy9sb2NhbGUvemgtY25cIjsgLy8g5a6e5pe25Yqo5oCB6L2s5o2i77yI566A5L2T5Lit5paH77yJXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7IC8vIOWKoOi9veaPkuS7tlxuXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTsgLy8g5L2/55So5o+S5Lu2XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHsgaWQ6IFwiaGVpZ2h0XCIsIGxhYmVsOiBcIkJsb2NrXCIsIG1pbldpZHRoOiAxMDAgfSxcbiAgeyBpZDogXCJ0aW1lc3RhbXBcIiwgbGFiZWw6IFwiQWdlXCIsIG1pbldpZHRoOiAxMDAgfSxcbiAgeyBpZDogXCJtaW5lclwiLCBsYWJlbDogXCJNaW5lclwiLCBtaW5XaWR0aDogMTcwIH0sXG4gIHsgaWQ6IFwidHhuc1wiLCBsYWJlbDogXCJUeG5cIiwgbWluV2lkdGg6IDEwMCB9LFxuICB7IGlkOiBcInJld2FyZFwiLCBsYWJlbDogXCJSZXdhcmRcIiwgbWluV2lkdGg6IDE3MCB9LFxuXTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0YShibG9jaywgYWdlLCBtaW5lciwgdHhuLCByZXdhcmQpIHtcbiAgcmV0dXJuIHsgYmxvY2ssIGFnZSwgbWluZXIsIHR4biwgcmV3YXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrcygpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6I635Y+W5pWw5o2uXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYmxvY2tzTGlzdCgpO1xuICAgICAgc2V0Um93cyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHJvd3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWJveFwiPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5CbG9ja3M8L2gzPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7cm93c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmlkID09IFwidGltZXN0YW1wXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGF5anMocHViRGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5pZCA9PSBcInJld2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke3Jvd1tjb2x1bW4uaWRdfSBGU05gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvd1tjb2x1bW4uaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2NvbHVtbi5pZH0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5mb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cbiAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blocks/index.js\n");

/***/ })

})