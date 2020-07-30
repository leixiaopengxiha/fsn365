webpackHotUpdate("static/development/pages/blocks/[height].js",{

/***/ "./pages/blocks/[height].js":
/*!**********************************!*\
  !*** ./pages/blocks/[height].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlockPage; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/fantaofan/Desktop/studio/fsn365/pages/blocks/[height].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction BlockPage() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var query = window.location.pathname.substring(8);\n\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var res;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_4__[\"getBlocksHeight\"])(query);\n\n              case 2:\n                res = _context.sent;\n                console.log(res);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []); // const [parameter, setParameter] = useState(null);\n  // var { query } = useRouter();\n  // if (Object.keys(query).length == 0) {\n  // }\n  // useEffect(() => {\n  // setParameter(query.height);\n  // }, []);\n  // console.log(parameter);\n  // useEffect(() => {\n  //   const fetchData = async () => {\n  //     const res = await getBlocksHeight(query);\n  //     console.log(res);\n  //   };\n  //   fetchData();\n  // }, []);\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 10\n    }\n  }, \"hash\");\n}\n\n_s(BlockPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = BlockPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlockPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ja3MvW2hlaWdodF0uanM/YmRiMiJdLCJuYW1lcyI6WyJCbG9ja1BhZ2UiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJmZXRjaERhdGEiLCJnZXRCbG9ja3NIZWlnaHQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsU0FBekIsQ0FBbUMsQ0FBbkMsQ0FBZDs7QUFDQSxRQUFNQyxTQUFTO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDRUMsNERBQWUsQ0FBQ04sS0FBRCxDQURqQjs7QUFBQTtBQUNWTyxtQkFEVTtBQUVoQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBSUFBLGFBQVM7QUFDVixHQVBRLEVBT04sRUFQTSxDQUFULENBRGtDLENBVWxDO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztHQS9CdUJQLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9ibG9ja3MvW2hlaWdodF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBnZXRCbG9ja3NIZWlnaHQgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrUGFnZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoOCk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0QmxvY2tzSGVpZ2h0KHF1ZXJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGNvbnN0IFtwYXJhbWV0ZXIsIHNldFBhcmFtZXRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgLy8gdmFyIHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoID09IDApIHtcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vIHNldFBhcmFtZXRlcihxdWVyeS5oZWlnaHQpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gY29uc29sZS5sb2cocGFyYW1ldGVyKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEJsb2Nrc0hlaWdodChxdWVyeSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAvLyAgIH07XG4gIC8vICAgZmV0Y2hEYXRhKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj5oYXNoPC9kaXY+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blocks/[height].js\n");

/***/ })

})