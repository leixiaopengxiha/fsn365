webpackHotUpdate("static/development/pages/tx/[tx].js",{

/***/ "./pages/tx/[tx].js":
/*!**************************!*\
  !*** ./pages/tx/[tx].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bottom */ \"./pages/bottom/index.js\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tx.less */ \"./pages/tx/tx.less\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tx_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/leixiaopeng/Desktop/fsn365/pages/tx/[tx].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      txDatas = _useState[0],\n      setTxDatas = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var a = window.location.pathname;\n    var reg = /(?=\\/)/g;\n    var utld = null;\n    a.replace(reg, function ($, $1) {\n      utld = a.slice($1 + 1);\n    });\n    console.log(new Date(0).getTime());\n\n    var aa = function aa(date) {\n      var d = new Date(date);\n      var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);\n      var re = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();\n      var youWant = d.getFullYear() + '-' + yue + '-' + re; // arr.date = youWant;\n\n      console.log(youWant);\n    };\n\n    aa;\n\n    var txfn = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_3__[\"getTx\"])(utld);\n\n              case 2:\n                result = _context.sent;\n                console.log(result.data);\n                setTxDatas(result.data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function txfn() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    txfn();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"tx-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"tx-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"tx-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }, \"Tx\"), __jsx(\"h4\", {\n    className: \"sss\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, \"# TimeLock\")), __jsx(\"div\", {\n    className: \"tx-con\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, txDatas === null ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 44\n    }\n  }) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 58\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 33\n    }\n  }, \" Hash\\uFF1A\"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  }, \"\".concat(txDatas.hash))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 33\n    }\n  }, \"  Lock Type\\uFF1A\"), \"\".concat(txDatas.type)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 33\n    }\n  }, \" Value\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 33\n    }\n  }, \" Duration\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 33\n    }\n  }, \" \".concat(txDatas.info.symbol)))))), __jsx(_bottom__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(index, \"CH8MNh+iOmlFIvPngJagXrexFko=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90eC9bdHhdLmpzP2QxMGMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsInR4RGF0YXMiLCJzZXRUeERhdGFzIiwidXNlRWZmZWN0IiwiYSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWciLCJ1dGxkIiwicmVwbGFjZSIsIiQiLCIkMSIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRUaW1lIiwiYWEiLCJkYXRlIiwiZCIsInl1ZSIsImdldE1vbnRoIiwicmUiLCJnZXREYXRlIiwieW91V2FudCIsImdldEZ1bGxZZWFyIiwidHhmbiIsImdldFR4IiwicmVzdWx0IiwiZGF0YSIsImhhc2giLCJ0eXBlIiwiaW5mbyIsInZhbHVlIiwic3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsSUFBRCxDQUR6QjtBQUFBLE1BQ05DLE9BRE07QUFBQSxNQUNHQyxVQURIOztBQUViQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBMUI7QUFDQSxRQUFJQyxHQUFHLEdBQUcsU0FBVjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FMLEtBQUMsQ0FBQ00sT0FBRixDQUFVRixHQUFWLEVBQWUsVUFBQ0csQ0FBRCxFQUFJQyxFQUFKLEVBQVc7QUFDdEJILFVBQUksR0FBR0wsQ0FBQyxDQUFDUyxLQUFGLENBQVFELEVBQUUsR0FBRyxDQUFiLENBQVA7QUFDSCxLQUZEO0FBR0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQUlDLElBQUosQ0FBUyxDQUFULEVBQVlDLE9BQVosRUFBWjs7QUFDQSxRQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFDQyxJQUFELEVBQVU7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Q0FBQ2dDLElBQVIsQ0FBYUUsTUFBN0IsRUFISixDQVg2QixFQWdCN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosWUFFUWxDLE9BQU8sQ0FBQ2dDLElBQVIsQ0FBYUMsS0FGckIsUUFHSTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCakMsT0FBTyxDQUFDZ0MsSUFBUixDQUFhRSxNQUE3QixFQUhKLENBaEI2QixDQUZ6QyxDQUxKLENBRkosRUFxQ0ksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNKLENBREo7QUF5Q0g7O0dBbkVRcEMsSzs7QUFxRU1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdHgvW3R4XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRUeCB9IGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2J1xuaW1wb3J0IEJvdHRvbSBmcm9tICcuLi9ib3R0b20nXG5pbXBvcnQgJy4vdHgubGVzcydcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gICAgY29uc3QgW3R4RGF0YXMsIHNldFR4RGF0YXNdID0gdXNlU3RhdGUobnVsbClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIHZhciByZWcgPSAvKD89XFwvKS9nO1xuICAgICAgICB2YXIgdXRsZCA9IG51bGxcbiAgICAgICAgYS5yZXBsYWNlKHJlZywgKCQsICQxKSA9PiB7XG4gICAgICAgICAgICB1dGxkID0gYS5zbGljZSgkMSArIDEpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKDApLmdldFRpbWUoKSk7XG4gICAgICAgIGNvbnN0IGFhID0gKGRhdGUpID0+IHtcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB2YXIgeXVlID0gKGQuZ2V0TW9udGgoKSArIDEpID4gOSA/IChkLmdldE1vbnRoKCkgKyAxKSA6ICcwJyArIChkLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIHZhciByZSA9IGQuZ2V0RGF0ZSgpID4gOSA/IGQuZ2V0RGF0ZSgpIDogJzAnICsgZC5nZXREYXRlKCk7XG4gICAgICAgICAgICB2YXIgeW91V2FudCA9IGQuZ2V0RnVsbFllYXIoKSArICctJyArIHl1ZSArICctJyArIHJlO1xuICAgICAgICAgICAgLy8gYXJyLmRhdGUgPSB5b3VXYW50O1xuICAgICAgICAgICAgY29uc29sZS5sb2coeW91V2FudCk7XG4gICAgICAgIH1cbiAgICAgICAgYWFcbiAgICAgICAgY29uc3QgdHhmbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFR4KHV0bGQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBzZXRUeERhdGFzKHJlc3VsdC5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIHR4Zm4oKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1ib3gnPlxuICAgICAgICAgICAgPE5hdj48L05hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+VHg8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdzc3MnPiMgVGltZUxvY2s8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eC1jb24nPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eERhdGFzID09PSBudWxsID8gPGRpdj48L2Rpdj4gOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBIYXNo77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5oYXNofWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gIExvY2sgVHlwZe+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMudHlwZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBWYWx1Ze+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMuaW5mby52YWx1ZX0gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPntgICR7dHhEYXRhcy5pbmZvLnN5bWJvbH1gfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gRHVyYXRpb27vvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0eERhdGFzLmluZm8udmFsdWV9IGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj57YCAke3R4RGF0YXMuaW5mby5zeW1ib2x9YH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Qm90dG9tPjwvQm90dG9tPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tx/[tx].js\n");

/***/ })

})