webpackHotUpdate("static/development/pages/tx/[tx].js",{

/***/ "./pages/tx/[tx].js":
/*!**************************!*\
  !*** ./pages/tx/[tx].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bottom */ \"./pages/bottom/index.js\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tx.less */ \"./pages/tx/tx.less\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tx_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/leixiaopeng/Desktop/fsn365/pages/tx/[tx].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      txDatas = _useState[0],\n      setTxDatas = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var a = window.location.pathname;\n    var reg = /(?=\\/)/g;\n    var utld = null;\n    a.replace(reg, function ($, $1) {\n      utld = a.slice($1 + 1);\n    }); // console.log(utld);\n\n    var txfn = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getTx\"])(utld);\n\n              case 2:\n                result = _context.sent;\n                console.log(result.data);\n                setTxDatas(result.data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function txfn() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    txfn();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"tx-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"tx-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"tx-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, \"Tx\"), __jsx(\"h4\", {\n    className: \"sss\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, \"# TimeLock\")), __jsx(\"div\", {\n    className: \"tx-con\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, txDatas === null ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 44\n    }\n  }) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 58\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 33\n    }\n  }, \" Hash\\uFF1A\"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 33\n    }\n  }, \"\".concat(txDatas.hash))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 33\n    }\n  }, \"  Lock Type\\uFF1A\"), \"\".concat(txDatas.type)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  }, \" Value\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 33\n    }\n  }, \" Duration\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol)))))), __jsx(_bottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(index, \"CH8MNh+iOmlFIvPngJagXrexFko=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90eC9bdHhdLmpzP2QxMGMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsInR4RGF0YXMiLCJzZXRUeERhdGFzIiwidXNlRWZmZWN0IiwiYSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWciLCJ1dGxkIiwicmVwbGFjZSIsIiQiLCIkMSIsInNsaWNlIiwidHhmbiIsImdldFR4IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJoYXNoIiwidHlwZSIsImluZm8iLCJ2YWx1ZSIsInN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLElBQUQsQ0FEekI7QUFBQSxNQUNOQyxPQURNO0FBQUEsTUFDR0MsVUFESDs7QUFFYkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQTFCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLFNBQVY7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBTCxLQUFDLENBQUNNLE9BQUYsQ0FBVUYsR0FBVixFQUFlLFVBQUNHLENBQUQsRUFBSUMsRUFBSixFQUFXO0FBQ3RCSCxVQUFJLEdBQUdMLENBQUMsQ0FBQ1MsS0FBRixDQUFRRCxFQUFFLEdBQUcsQ0FBYixDQUFQO0FBQ0gsS0FGRCxFQUpZLENBT1o7O0FBQ0EsUUFBTUUsSUFBSTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1lDLGtEQUFLLENBQUNOLElBQUQsQ0FEakI7O0FBQUE7QUFDSE8sc0JBREc7QUFFVEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLElBQW5CO0FBQ0FqQiwwQkFBVSxDQUFDYyxNQUFNLENBQUNHLElBQVIsQ0FBVjs7QUFIUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFKTCxJQUFJO0FBQUE7QUFBQTtBQUFBLE9BQVY7O0FBS0FBLFFBQUk7QUFDUCxHQWRRLEVBY04sRUFkTSxDQUFUO0FBZUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUksYUFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFiLE9BQU8sS0FBSyxJQUFaLEdBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkIsR0FBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVJO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNRQSxPQUFPLENBQUNtQixJQURoQixFQUZKLENBRDZCLEVBTzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLFlBRVFuQixPQUFPLENBQUNvQixJQUZoQixFQVA2QixFQVc3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixZQUVRcEIsT0FBTyxDQUFDcUIsSUFBUixDQUFhQyxLQUZyQixRQUdJO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0J0QixPQUFPLENBQUNxQixJQUFSLENBQWFFLE1BQTdCLEVBSEosQ0FYNkIsRUFnQjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLFlBRVF2QixPQUFPLENBQUNxQixJQUFSLENBQWFDLEtBRnJCLFFBR0k7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQnRCLE9BQU8sQ0FBQ3FCLElBQVIsQ0FBYUUsTUFBN0IsRUFISixDQWhCNkIsQ0FGekMsQ0FMSixDQUZKLEVBcUNJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDSixDQURKO0FBeUNIOztHQTFEUXpCLEs7O0FBNERNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3R4L1t0eF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0VHggfSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdidcbmltcG9ydCBCb3R0b20gZnJvbSAnLi4vYm90dG9tJ1xuaW1wb3J0ICcuL3R4Lmxlc3MnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICAgIGNvbnN0IFt0eERhdGFzLCBzZXRUeERhdGFzXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB2YXIgcmVnID0gLyg/PVxcLykvZztcbiAgICAgICAgdmFyIHV0bGQgPSBudWxsXG4gICAgICAgIGEucmVwbGFjZShyZWcsICgkLCAkMSkgPT4ge1xuICAgICAgICAgICAgdXRsZCA9IGEuc2xpY2UoJDEgKyAxKVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1dGxkKTtcbiAgICAgICAgY29uc3QgdHhmbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFR4KHV0bGQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBzZXRUeERhdGFzKHJlc3VsdC5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIHR4Zm4oKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1ib3gnPlxuICAgICAgICAgICAgPE5hdj48L05hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+VHg8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdzc3MnPiMgVGltZUxvY2s8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1jb24nPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eERhdGFzID09PSBudWxsID8gPGRpdj48L2Rpdj4gOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXNo77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5oYXNofWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gIExvY2sgVHlwZe+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMudHlwZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBWYWx1Ze+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMuaW5mby52YWx1ZX0gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPntgICR7dHhEYXRhcy5pbmZvLnN5bWJvbH1gfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gRHVyYXRpb27vvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0eERhdGFzLmluZm8udmFsdWV9IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj57YCAke3R4RGF0YXMuaW5mby5zeW1ib2x9YH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Qm90dG9tPjwvQm90dG9tPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tx/[tx].js\n");

/***/ })

})