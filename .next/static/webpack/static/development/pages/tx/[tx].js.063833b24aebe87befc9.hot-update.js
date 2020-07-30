webpackHotUpdate("static/development/pages/tx/[tx].js",{

/***/ "./pages/tx/[tx].js":
/*!**************************!*\
  !*** ./pages/tx/[tx].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bottom */ \"./pages/bottom/index.js\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tx.less */ \"./pages/tx/tx.less\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tx_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/leixiaopeng/Desktop/fsn365/pages/tx/[tx].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      txDatas = _useState[0],\n      setTxDatas = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var a = window.location.pathname;\n    var reg = /(?=\\/)/g;\n    var utld = null;\n    a.replace(reg, function ($, $1) {\n      utld = a.slice($1 + 1);\n    });\n    console.log();\n\n    var txfn = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getTx\"])(utld);\n\n              case 2:\n                result = _context.sent;\n                console.log(result.data);\n                setTxDatas(result.data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function txfn() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    txfn();\n  }, []);\n\n  var aa = function aa(date) {\n    var d = new Date(date);\n    var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);\n    var re = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();\n    var youWant = d.getFullYear() + '.' + yue + '.' + re; // arr.date = youWant;\n\n    return youWant;\n  };\n\n  return __jsx(\"div\", {\n    className: \"tx-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"tx-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"tx-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, \"Tx\"), __jsx(\"h4\", {\n    className: \"sss\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"# TimeLock\")), __jsx(\"div\", {\n    className: \"tx-con\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, txDatas === null ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 44\n    }\n  }) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 58\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  }, \" Hash\\uFF1A\"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 33\n    }\n  }, \"\".concat(txDatas.hash))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 33\n    }\n  }, \"  Lock Type\\uFF1A\"), \"\".concat(txDatas.type)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 33\n    }\n  }, \" Value\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 33\n    }\n  }, \" Duration\\uFF1A\"), \"\".concat(aa(0)), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol)))))), __jsx(_bottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(index, \"CH8MNh+iOmlFIvPngJagXrexFko=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90eC9bdHhdLmpzP2QxMGMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsInR4RGF0YXMiLCJzZXRUeERhdGFzIiwidXNlRWZmZWN0IiwiYSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWciLCJ1dGxkIiwicmVwbGFjZSIsIiQiLCIkMSIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInR4Zm4iLCJnZXRUeCIsInJlc3VsdCIsImRhdGEiLCJhYSIsImRhdGUiLCJkIiwiRGF0ZSIsInl1ZSIsImdldE1vbnRoIiwicmUiLCJnZXREYXRlIiwieW91V2FudCIsImdldEZ1bGxZZWFyIiwiaGFzaCIsInR5cGUiLCJpbmZvIiwidmFsdWUiLCJzeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxJQUFELENBRHpCO0FBQUEsTUFDTkMsT0FETTtBQUFBLE1BQ0dDLFVBREg7O0FBRWJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUExQjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxTQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUwsS0FBQyxDQUFDTSxPQUFGLENBQVVGLEdBQVYsRUFBZSxVQUFDRyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUN0QkgsVUFBSSxHQUFHTCxDQUFDLENBQUNTLEtBQUYsQ0FBUUQsRUFBRSxHQUFHLENBQWIsQ0FBUDtBQUNILEtBRkQ7QUFHQUUsV0FBTyxDQUFDQyxHQUFSOztBQUdBLFFBQU1DLElBQUk7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNZQyxrREFBSyxDQUFDUixJQUFELENBRGpCOztBQUFBO0FBQ0hTLHNCQURHO0FBRVRKLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBTSxDQUFDQyxJQUFuQjtBQUNBakIsMEJBQVUsQ0FBQ2dCLE1BQU0sQ0FBQ0MsSUFBUixDQUFWOztBQUhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUpILElBQUk7QUFBQTtBQUFBO0FBQUEsT0FBVjs7QUFLQUEsUUFBSTtBQUNQLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7O0FBaUJBLE1BQU1JLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQUNDLElBQUQsRUFBVTtBQUNqQixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQVI7QUFDQSxRQUFJRyxHQUFHLEdBQUlGLENBQUMsQ0FBQ0csUUFBRixLQUFlLENBQWhCLEdBQXFCLENBQXJCLEdBQTBCSCxDQUFDLENBQUNHLFFBQUYsS0FBZSxDQUF6QyxHQUE4QyxPQUFPSCxDQUFDLENBQUNHLFFBQUYsS0FBZSxDQUF0QixDQUF4RDtBQUNBLFFBQUlDLEVBQUUsR0FBR0osQ0FBQyxDQUFDSyxPQUFGLEtBQWMsQ0FBZCxHQUFrQkwsQ0FBQyxDQUFDSyxPQUFGLEVBQWxCLEdBQWdDLE1BQU1MLENBQUMsQ0FBQ0ssT0FBRixFQUEvQztBQUNBLFFBQUlDLE9BQU8sR0FBR04sQ0FBQyxDQUFDTyxXQUFGLEtBQWtCLEdBQWxCLEdBQXdCTCxHQUF4QixHQUE4QixHQUE5QixHQUFvQ0UsRUFBbEQsQ0FKaUIsQ0FLakI7O0FBQ0EsV0FBT0UsT0FBUDtBQUNILEdBUEQ7O0FBUUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUksYUFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVEzQixPQUFPLEtBQUssSUFBWixHQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5CLEdBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDUUEsT0FBTyxDQUFDNkIsSUFEaEIsRUFGSixDQUQ2QixFQU83QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixZQUVRN0IsT0FBTyxDQUFDOEIsSUFGaEIsRUFQNkIsRUFXN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosWUFFUTlCLE9BQU8sQ0FBQytCLElBQVIsQ0FBYUMsS0FGckIsUUFHSTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCaEMsT0FBTyxDQUFDK0IsSUFBUixDQUFhRSxNQUE3QixFQUhKLENBWDZCLEVBZ0I3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixZQUVRZCxFQUFFLENBQUMsQ0FBRCxDQUZWLEdBSUk7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQm5CLE9BQU8sQ0FBQytCLElBQVIsQ0FBYUUsTUFBN0IsRUFKSixDQWhCNkIsQ0FGekMsQ0FMSixDQUZKLEVBc0NJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDSixDQURKO0FBMENIOztHQXJFUW5DLEs7O0FBdUVNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3R4L1t0eF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0VHggfSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdidcbmltcG9ydCBCb3R0b20gZnJvbSAnLi4vYm90dG9tJ1xuaW1wb3J0ICcuL3R4Lmxlc3MnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICAgIGNvbnN0IFt0eERhdGFzLCBzZXRUeERhdGFzXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB2YXIgcmVnID0gLyg/PVxcLykvZztcbiAgICAgICAgdmFyIHV0bGQgPSBudWxsXG4gICAgICAgIGEucmVwbGFjZShyZWcsICgkLCAkMSkgPT4ge1xuICAgICAgICAgICAgdXRsZCA9IGEuc2xpY2UoJDEgKyAxKVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygpO1xuXG5cbiAgICAgICAgY29uc3QgdHhmbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFR4KHV0bGQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBzZXRUeERhdGFzKHJlc3VsdC5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIHR4Zm4oKVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IGFhID0gKGRhdGUpID0+IHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgdmFyIHl1ZSA9IChkLmdldE1vbnRoKCkgKyAxKSA+IDkgPyAoZC5nZXRNb250aCgpICsgMSkgOiAnMCcgKyAoZC5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIHZhciByZSA9IGQuZ2V0RGF0ZSgpID4gOSA/IGQuZ2V0RGF0ZSgpIDogJzAnICsgZC5nZXREYXRlKCk7XG4gICAgICAgIHZhciB5b3VXYW50ID0gZC5nZXRGdWxsWWVhcigpICsgJy4nICsgeXVlICsgJy4nICsgcmU7XG4gICAgICAgIC8vIGFyci5kYXRlID0geW91V2FudDtcbiAgICAgICAgcmV0dXJuIHlvdVdhbnRcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4LWJveCc+XG4gICAgICAgICAgICA8TmF2PjwvTmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4LWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxoND5UeDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3Nzcyc+IyBUaW1lTG9jazwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4LWNvbic+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4RGF0YXMgPT09IG51bGwgPyA8ZGl2PjwvZGl2PiA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEhhc2jvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0eERhdGFzLmhhc2h9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgTG9jayBUeXBl77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy50eXBlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFZhbHVl77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5pbmZvLnZhbHVlfSBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+e2AgJHt0eERhdGFzLmluZm8uc3ltYm9sfWB9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBEdXJhdGlvbu+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2FhKDApfWB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPntgICR7dHhEYXRhcy5pbmZvLnN5bWJvbH1gfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCb3R0b20+PC9Cb3R0b20+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tx/[tx].js\n");

/***/ })

})