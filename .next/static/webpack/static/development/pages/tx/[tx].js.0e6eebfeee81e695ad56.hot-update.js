webpackHotUpdate("static/development/pages/tx/[tx].js",{

/***/ "./pages/tx/[tx].js":
/*!**************************!*\
  !*** ./pages/tx/[tx].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bottom */ \"./pages/bottom/index.js\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tx.less */ \"./pages/tx/tx.less\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tx_less__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/leixiaopeng/Desktop/fsn365/pages/tx/[tx].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      txDatas = _useState[0],\n      setTxDatas = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var a = window.location.pathname;\n    var reg = /(?=\\/)/g;\n    var utld = null;\n    a.replace(reg, function ($, $1) {\n      utld = a.slice($1 + 1);\n    });\n\n    var txfn = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_4__[\"getTx\"])(utld);\n\n              case 2:\n                result = _context.sent;\n                console.log(result.data);\n                setTxDatas(result.data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function txfn() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    txfn();\n  }, []);\n\n  var aa = function aa(date) {\n    var d = new Date(date);\n    var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);\n    var re = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();\n    var youWant = d.getFullYear() + '.' + yue + '.' + re;\n    return youWant;\n  };\n\n  return __jsx(\"div\", {\n    className: \"tx-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"tx-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"tx-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, \"Tx\"), __jsx(\"h4\", {\n    className: \"sss\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, \"# TimeLock\")), __jsx(\"div\", {\n    className: \"tx-con\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, txDatas === null ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 44\n    }\n  }) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 58\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 33\n    }\n  }, \" Hash\\uFF1A\"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 33\n    }\n  }, \"\".concat(txDatas.hash))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 33\n    }\n  }, \"  Lock Type\\uFF1A\"), \"\".concat(txDatas.type)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 33\n    }\n  }, \" Value\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/asset/\".concat(txDatas.info.assetID),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 33\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 37\n    }\n  }, \" \".concat(txDatas.info.symbol)))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 33\n    }\n  }, \" Duration\\uFF1A\"), \"\".concat(aa(txDatas.info.duration.startTime), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 33\n    }\n  }, \" Tx Status\\uFF1A\"), \"\".concat(aa(0), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 33\n    }\n  }, \" Block\\uFF1A\"), \"\".concat(aa(0), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 33\n    }\n  }, \" From\\uFF1A\"), \"\".concat(aa(0), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 33\n    }\n  }, \" To\\uFF1A\"), \"\".concat(aa(0), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 33\n    }\n  }, \" Time\\uFF1A\"), \"\".concat(aa(txDatas.info.duration.endTime * 1000)))))), __jsx(_bottom__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(index, \"CH8MNh+iOmlFIvPngJagXrexFko=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90eC9bdHhdLmpzP2QxMGMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsInR4RGF0YXMiLCJzZXRUeERhdGFzIiwidXNlRWZmZWN0IiwiYSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWciLCJ1dGxkIiwicmVwbGFjZSIsIiQiLCIkMSIsInNsaWNlIiwidHhmbiIsImdldFR4IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhYSIsImRhdGUiLCJkIiwiRGF0ZSIsInl1ZSIsImdldE1vbnRoIiwicmUiLCJnZXREYXRlIiwieW91V2FudCIsImdldEZ1bGxZZWFyIiwiaGFzaCIsInR5cGUiLCJpbmZvIiwidmFsdWUiLCJhc3NldElEIiwic3ltYm9sIiwiZHVyYXRpb24iLCJzdGFydFRpbWUiLCJlbmRUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLElBQUQsQ0FEekI7QUFBQSxNQUNOQyxPQURNO0FBQUEsTUFDR0MsVUFESDs7QUFFYkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQTFCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLFNBQVY7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBTCxLQUFDLENBQUNNLE9BQUYsQ0FBVUYsR0FBVixFQUFlLFVBQUNHLENBQUQsRUFBSUMsRUFBSixFQUFXO0FBQ3RCSCxVQUFJLEdBQUdMLENBQUMsQ0FBQ1MsS0FBRixDQUFRRCxFQUFFLEdBQUcsQ0FBYixDQUFQO0FBQ0gsS0FGRDs7QUFHQSxRQUFNRSxJQUFJO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDWUMsa0RB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixZQUVRbEIsRUFBRSxDQUFDLENBQUQsQ0FGVixnQkFFbUJBLEVBQUUsQ0FBQ25CLE9BQU8sQ0FBQytCLElBQVIsQ0FBYUksUUFBYixDQUFzQkUsT0FBdEIsR0FBZ0MsSUFBakMsQ0FGckIsRUFuQzZCLEVBdUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixZQUVRbEIsRUFBRSxDQUFDbkIsT0FBTyxDQUFDK0IsSUFBUixDQUFhSSxRQUFiLENBQXNCRSxPQUF0QixHQUFnQyxJQUFqQyxDQUZWLEVBdkM2QixDQUZ6QyxDQUxKLENBRkosRUEwREksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMURKLENBREo7QUE4REg7O0dBckZRdkMsSzs7QUF1Rk1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdHgvW3R4XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBnZXRUeCB9IGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2J1xuaW1wb3J0IEJvdHRvbSBmcm9tICcuLi9ib3R0b20nXG5pbXBvcnQgJy4vdHgubGVzcydcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gICAgY29uc3QgW3R4RGF0YXMsIHNldFR4RGF0YXNdID0gdXNlU3RhdGUobnVsbClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIHZhciByZWcgPSAvKD89XFwvKS9nO1xuICAgICAgICB2YXIgdXRsZCA9IG51bGxcbiAgICAgICAgYS5yZXBsYWNlKHJlZywgKCQsICQxKSA9PiB7XG4gICAgICAgICAgICB1dGxkID0gYS5zbGljZSgkMSArIDEpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHR4Zm4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUeCh1dGxkKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgc2V0VHhEYXRhcyhyZXN1bHQuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICB0eGZuKClcbiAgICB9LCBbXSlcbiAgICBjb25zdCBhYSA9IChkYXRlKSA9PiB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHZhciB5dWUgPSAoZC5nZXRNb250aCgpICsgMSkgPiA5ID8gKGQuZ2V0TW9udGgoKSArIDEpIDogJzAnICsgKGQuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICB2YXIgcmUgPSBkLmdldERhdGUoKSA+IDkgPyBkLmdldERhdGUoKSA6ICcwJyArIGQuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgeW91V2FudCA9IGQuZ2V0RnVsbFllYXIoKSArICcuJyArIHl1ZSArICcuJyArIHJlO1xuICAgICAgICByZXR1cm4geW91V2FudFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtYm94Jz5cbiAgICAgICAgICAgIDxOYXY+PC9OYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlR4PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nc3NzJz4jIFRpbWVMb2NrPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtY29uJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHhEYXRhcyA9PT0gbnVsbCA/IDxkaXY+PC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzaO+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMuaGFzaH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICBMb2NrIFR5cGXvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0eERhdGFzLnR5cGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gVmFsdWXvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0eERhdGFzLmluZm8udmFsdWV9IGB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hc3NldC8ke3R4RGF0YXMuaW5mby5hc3NldElEfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPntgICR7dHhEYXRhcy5pbmZvLnN5bWJvbH1gfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBEdXJhdGlvbu+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2FhKHR4RGF0YXMuaW5mby5kdXJhdGlvbi5zdGFydFRpbWUpfSB+ICR7YWEodHhEYXRhcy5pbmZvLmR1cmF0aW9uLmVuZFRpbWUgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBUeCBTdGF0dXPvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthYSgwKX0gfiAke2FhKHR4RGF0YXMuaW5mby5kdXJhdGlvbi5lbmRUaW1lICogMTAwMCl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQmxvY2vvvJo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHthYSgwKX0gfiAke2FhKHR4RGF0YXMuaW5mby5kdXJhdGlvbi5lbmRUaW1lICogMTAwMCl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gRnJvbe+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2FhKDApfSB+ICR7YWEodHhEYXRhcy5pbmZvLmR1cmF0aW9uLmVuZFRpbWUgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBUb++8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2FhKDApfSB+ICR7YWEodHhEYXRhcy5pbmZvLmR1cmF0aW9uLmVuZFRpbWUgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBUaW1l77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7YWEodHhEYXRhcy5pbmZvLmR1cmF0aW9uLmVuZFRpbWUgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCb3R0b20+PC9Cb3R0b20+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tx/[tx].js\n");

/***/ })

})