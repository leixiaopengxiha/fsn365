webpackHotUpdate("static/development/pages/blocks.js",{

/***/ "./pages/blocks/index.js":
/*!*******************************!*\
  !*** ./pages/blocks/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blocks; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/esm/TablePagination/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _blocks_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks.less */ \"./pages/blocks/blocks.less\");\n/* harmony import */ var _blocks_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_less__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_blocks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../api/blocks.js */ \"./api/blocks.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs/locale/zh-cn */ \"./node_modules/dayjs/locale/zh-cn.js\");\n/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ \"./node_modules/dayjs/plugin/relativeTime.js\");\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\nvar _jsxFileName = \"/Users/fantaofan/Desktop/studio/fsn365/pages/blocks/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n // 处理时间\n\n // 实时动态转换（简体中文）\n\n // 加载插件\n\ndayjs__WEBPACK_IMPORTED_MODULE_15___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_17___default.a); // 使用插件\n\nvar columns = [{\n  id: \"height\",\n  label: \"Block\",\n  minWidth: 100\n}, {\n  id: \"timestamp\",\n  label: \"Age\",\n  minWidth: 100\n}, {\n  id: \"miner\",\n  label: \"Miner\",\n  minWidth: 170\n}, {\n  id: \"txns\",\n  label: \"Txn\",\n  minWidth: 100\n}, {\n  id: \"reward\",\n  label: \"Reward\",\n  minWidth: 170\n}];\n\nfunction createData(block, age, miner, txn, reward) {\n  return {\n    block: block,\n    age: age,\n    miner: miner,\n    txn: txn,\n    reward: reward\n  };\n}\n\nfunction Blocks() {\n  _s();\n\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      page = _React$useState2[0],\n      setPage = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(10),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      rowsPerPage = _React$useState4[0],\n      setRowsPerPage = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState5, 2),\n      rows = _React$useState6[0],\n      setRows = _React$useState6[1];\n\n  var handleChangePage = function handleChangePage(event, newPage) {\n    setPage(newPage);\n  };\n\n  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {\n    setRowsPerPage(+event.target.value);\n    setPage(0);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // 获取数据\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api_blocks_js__WEBPACK_IMPORTED_MODULE_14__[\"blocksList\"])();\n\n              case 2:\n                result = _context.sent;\n                setRows(result.data.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  console.log(rows);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"main\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"table-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    style: {\n      padding: \"10px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Blocks\"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"root\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    stickyHeader: true,\n    \"aria-label\": \"sticky table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 19\n    }\n  }, columns.map(function (column) {\n    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      key: column.id,\n      align: \"center\",\n      style: {\n        minWidth: column.minWidth\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 23\n      }\n    }, column.label);\n  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      hover: true,\n      role: \"checkbox\",\n      tabIndex: -1,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 25\n      }\n    }, columns.map(function (column) {\n      var value = row[column.id];\n      console.log(value);\n      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        key: column.id,\n        align: \"center\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 31\n        }\n      }, column.format && typeof value === \"number\" ? column.format(value) : value);\n    }));\n  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    rowsPerPageOptions: [10, 25, 100],\n    component: \"div\",\n    count: rows.length,\n    rowsPerPage: rowsPerPage,\n    page: page,\n    onChangePage: handleChangePage,\n    onChangeRowsPerPage: handleChangeRowsPerPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Blocks, \"t2XkE3P8wleiBkJVOTnlLlWyc/I=\");\n\n_c = Blocks;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blocks\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ja3MvaW5kZXguanM/ZjVlZCJdLCJuYW1lcyI6WyJkYXlqcyIsImV4dGVuZCIsInJlbGF0aXZlVGltZSIsImNvbHVtbnMiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJjcmVhdGVEYXRhIiwiYmxvY2siLCJhZ2UiLCJtaW5lciIsInR4biIsInJld2FyZCIsIkJsb2NrcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJyb3dzIiwic2V0Um93cyIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInZhbHVlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYmxvY2tzTGlzdCIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIm1hcCIsImNvbHVtbiIsInNsaWNlIiwicm93IiwiaW5kZXgiLCJmb3JtYXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDMkI7O0NBQ0U7O0NBQ3lCOztBQUV0REEsNkNBQUssQ0FBQ0MsTUFBTixDQUFhQyxpRUFBYixFLENBQTRCOztBQUU1QixJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsUUFBTjtBQUFnQkMsT0FBSyxFQUFFLE9BQXZCO0FBQWdDQyxVQUFRLEVBQUU7QUFBMUMsQ0FEYyxFQUVkO0FBQUVGLElBQUUsRUFBRSxXQUFOO0FBQW1CQyxPQUFLLEVBQUUsS0FBMUI7QUFBaUNDLFVBQVEsRUFBRTtBQUEzQyxDQUZjLEVBR2Q7QUFBRUYsSUFBRSxFQUFFLE9BQU47QUFBZUMsT0FBSyxFQUFFLE9BQXRCO0FBQStC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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dpQyxNQUFNLENBQUNJLE1BQVAsSUFBaUIsT0FBT2QsS0FBUCxLQUFpQixRQUFsQyxHQUNHVSxNQUFNLENBQUNJLE1BQVAsQ0FBY2QsS0FBZCxDQURILEdBRUdBLEtBSE4sQ0FERjtBQVFELEtBWEEsQ0FOSCxDQURGO0FBcUJELEdBeEJGLENBREgsQ0FkRixDQURGLENBREYsRUE2Q0UsTUFBQywwRUFBRDtBQUNFLHNCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBRHRCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUVQLElBQUksQ0FBQ3NCLE1BSGQ7QUFJRSxlQUFXLEVBQUV4QixXQUpmO0FBS0UsUUFBSSxFQUFFRixJQUxSO0FBTUUsZ0JBQVksRUFBRU0sZ0JBTmhCO0FBT0UsdUJBQW1CLEVBQUVHLHVCQVB2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0NGLENBRkYsQ0FERixDQUZGLENBREY7QUFpRUQ7O0dBekZ1QlosTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2Nrcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL25hdlwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uXCI7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy5sZXNzXCI7XG5pbXBvcnQgeyBibG9ja3NMaXN0IH0gZnJvbSBcIi4uLy4uL2FwaS9ibG9ja3MuanNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjsgLy8g5aSE55CG5pe26Ze0XG5pbXBvcnQgXCJkYXlqcy9sb2NhbGUvemgtY25cIjsgLy8g5a6e5pe25Yqo5oCB6L2s5o2i77yI566A5L2T5Lit5paH77yJXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCJkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lXCI7IC8vIOWKoOi9veaPkuS7tlxuXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTsgLy8g5L2/55So5o+S5Lu2XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHsgaWQ6IFwiaGVpZ2h0XCIsIGxhYmVsOiBcIkJsb2NrXCIsIG1pbldpZHRoOiAxMDAgfSxcbiAgeyBpZDogXCJ0aW1lc3RhbXBcIiwgbGFiZWw6IFwiQWdlXCIsIG1pbldpZHRoOiAxMDAgfSxcbiAgeyBpZDogXCJtaW5lclwiLCBsYWJlbDogXCJNaW5lclwiLCBtaW5XaWR0aDogMTcwIH0sXG4gIHsgaWQ6IFwidHhuc1wiLCBsYWJlbDogXCJUeG5cIiwgbWluV2lkdGg6IDEwMCB9LFxuICB7IGlkOiBcInJld2FyZFwiLCBsYWJlbDogXCJSZXdhcmRcIiwgbWluV2lkdGg6IDE3MCB9LFxuXTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0YShibG9jaywgYWdlLCBtaW5lciwgdHhuLCByZXdhcmQpIHtcbiAgcmV0dXJuIHsgYmxvY2ssIGFnZSwgbWluZXIsIHR4biwgcmV3YXJkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrcygpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6I635Y+W5pWw5o2uXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYmxvY2tzTGlzdCgpO1xuICAgICAgc2V0Um93cyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHJvd3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWJveFwiPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5CbG9ja3M8L2gzPlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7cm93c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcm93W2NvbHVtbi5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17Y29sdW1uLmlkfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmZvcm1hdCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5mb3JtYXQodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgY291bnQ9e3Jvd3MubGVuZ3RofVxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blocks/index.js\n");

/***/ })

})