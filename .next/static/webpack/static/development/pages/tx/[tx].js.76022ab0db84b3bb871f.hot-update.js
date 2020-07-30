webpackHotUpdate("static/development/pages/tx/[tx].js",{

/***/ "./pages/tx/[tx].js":
/*!**************************!*\
  !*** ./pages/tx/[tx].js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ \"./api/index.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav */ \"./pages/nav/index.js\");\n/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bottom */ \"./pages/bottom/index.js\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tx.less */ \"./pages/tx/tx.less\");\n/* harmony import */ var _tx_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tx_less__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/leixiaopeng/Desktop/fsn365/pages/tx/[tx].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nfunction index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      txDatas = _useState[0],\n      setTxDatas = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      datetime = _React$useState2[0],\n      setDatetime = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var a = window.location.pathname;\n    var reg = /(?=\\/)/g;\n    var utld = null;\n    a.replace(reg, function ($, $1) {\n      utld = a.slice($1 + 1);\n    });\n    var times = new Date().getTime();\n    setDatetime(times);\n\n    var txfn = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api__WEBPACK_IMPORTED_MODULE_5__[\"getTx\"])(utld);\n\n              case 2:\n                result = _context.sent;\n                console.log(result.data);\n                setTxDatas(result.data);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function txfn() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    txfn();\n  }, []);\n\n  var aa = function aa(date) {\n    var d = new Date(date);\n    var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);\n    var re = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();\n    var youWant = d.getFullYear() + '.' + yue + '.' + re;\n    return youWant;\n  };\n\n  return __jsx(\"div\", {\n    className: \"tx-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"tx-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"tx-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, \"Tx\"), __jsx(\"h4\", {\n    className: \"sss\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, \"# TimeLock\")), __jsx(\"div\", {\n    className: \"tx-con\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, txDatas === null ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 44\n    }\n  }) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 58\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  }, \" Hash\\uFF1A\"), __jsx(\"a\", {\n    href: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 33\n    }\n  }, \"\".concat(txDatas.hash))), txDatas.info.lockType != undefined ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 67\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 33\n    }\n  }, \"  Lock Type\\uFF1A\"), \"\".concat(txDatas.info.lockType)) : '', __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 33\n    }\n  }, \" Value\\uFF1A\"), \"\".concat(txDatas.info.value, \" \"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/asset/\".concat(txDatas.info.assetID),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 33\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 37\n    }\n  }, \" \".concat(txDatas.info.symbol)))), txDatas.info.duration != undefined ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 70\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 37\n    }\n  }, \" Duration\\uFF1A\"), \"\".concat(aa(txDatas.info.duration.startTime), \" ~ \").concat(aa(txDatas.info.duration.endTime * 1000))) : '', __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 33\n    }\n  }, \" Tx Status\\uFF1A\"), __jsx(\"span\", {\n    className: txDatas.status === 1 ? 'success' : 'errer',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 33\n    }\n  }, txDatas.status === 1 ? 'success' : 'errer')), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 33\n    }\n  }, \" Block\\uFF1A\"), \"\".concat(txDatas.bk)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 33\n    }\n  }, \" From\\uFF1A\"), \"\".concat(txDatas.from)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 33\n    }\n  }, \" To\\uFF1A\"), \"\".concat(txDatas.to)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 33\n    }\n  }, \" Time\\uFF1A\"), \"\".concat(aa(txDatas.timestamp * 1000)), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 33\n    }\n  }, \"\".concat(Math.round((datetime - txDatas.timestamp * 1000) / (60 * 60 * 24 * 1000))), \" day ago\"))))), __jsx(_bottom__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }));\n}\n\n_s(index, \"zXnYA7iEJ9eaaoVX+CAbSvTkfDM=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90eC9bdHhdLmpzP2QxMGMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsInR4RGF0YXMiLCJzZXRUeERhdGFzIiwiUmVhY3QiLCJkYXRldGltZSIsInNldERhdGV0aW1lIiwidXNlRWZmZWN0IiwiYSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZWciLCJ1dGxkIiwicmVwbGFjZSIsIiQiLCIkMSIsInNsaWNlIiwidGltZXMiLCJEYXRlIiwiZ2V0VGltZSIsInR4Zm4iLCJnZXRUeCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWEiLCJkYXRlIiwiZCIsInl1ZSIsImdldE1vbnRoIiwicmUiLCJnZXREYXRlIiwieW91V2FudCIsImdldEZ1bGxZZWFyIiwiaGFzaCIsImluZm8iLCJsb2NrVHlwZSIsInVuZGVmaW5lZCIsInZhbHVlIiwiYXNzZXRJRCIsInN5bWJvbCIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInN0YXR1cyIsImJrIiwiZnJvbSIsInRvIiwidGltZXN0YW1wIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDaUJDLHNEQUFRLENBQUMsSUFBRCxDQUR6QjtBQUFBLE1BQ05DLE9BRE07QUFBQSxNQUNHQyxVQURIOztBQUFBLHdCQUVtQkMsNENBQUssQ0FBQ0gsUUFBTixDQUFlLElBQWYsQ0FGbkI7QUFBQTtBQUFBLE1BRU5JLFFBRk07QUFBQSxNQUVJQyxXQUZKOztBQUdiQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBMUI7QUFDQSxRQUFJQyxHQUFHLEdBQUcsU0FBVjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FB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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZ2V0VHggfSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdidcbmltcG9ydCBCb3R0b20gZnJvbSAnLi4vYm90dG9tJ1xuaW1wb3J0ICcuL3R4Lmxlc3MnXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICAgIGNvbnN0IFt0eERhdGFzLCBzZXRUeERhdGFzXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2RhdGV0aW1lLCBzZXREYXRldGltZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIHZhciByZWcgPSAvKD89XFwvKS9nO1xuICAgICAgICB2YXIgdXRsZCA9IG51bGxcbiAgICAgICAgYS5yZXBsYWNlKHJlZywgKCQsICQxKSA9PiB7XG4gICAgICAgICAgICB1dGxkID0gYS5zbGljZSgkMSArIDEpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHRpbWVzID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgc2V0RGF0ZXRpbWUodGltZXMpXG4gICAgICAgIGNvbnN0IHR4Zm4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUeCh1dGxkKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgc2V0VHhEYXRhcyhyZXN1bHQuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICB0eGZuKClcbiAgICB9LCBbXSlcbiAgICBjb25zdCBhYSA9IChkYXRlKSA9PiB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHZhciB5dWUgPSAoZC5nZXRNb250aCgpICsgMSkgPiA5ID8gKGQuZ2V0TW9udGgoKSArIDEpIDogJzAnICsgKGQuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICB2YXIgcmUgPSBkLmdldERhdGUoKSA+IDkgPyBkLmdldERhdGUoKSA6ICcwJyArIGQuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgeW91V2FudCA9IGQuZ2V0RnVsbFllYXIoKSArICcuJyArIHl1ZSArICcuJyArIHJlO1xuICAgICAgICByZXR1cm4geW91V2FudFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtYm94Jz5cbiAgICAgICAgICAgIDxOYXY+PC9OYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlR4PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nc3NzJz4jIFRpbWVMb2NrPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHgtY29uJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHhEYXRhcyA9PT0gbnVsbCA/IDxkaXY+PC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSGFzaO+8mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3R4RGF0YXMuaGFzaH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R4RGF0YXMuaW5mby5sb2NrVHlwZSAhPSB1bmRlZmluZWQgPyA8IGRpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgTG9jayBUeXBl77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5pbmZvLmxvY2tUeXBlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFZhbHVl77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5pbmZvLnZhbHVlfSBgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXNzZXQvJHt0eERhdGFzLmluZm8uYXNzZXRJRH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57YCAke3R4RGF0YXMuaW5mby5zeW1ib2x9YH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4RGF0YXMuaW5mby5kdXJhdGlvbiAhPSB1bmRlZmluZWQgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IER1cmF0aW9u77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2FhKHR4RGF0YXMuaW5mby5kdXJhdGlvbi5zdGFydFRpbWUpfSB+ICR7YWEodHhEYXRhcy5pbmZvLmR1cmF0aW9uLmVuZFRpbWUgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gVHggU3RhdHVz77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R4RGF0YXMuc3RhdHVzID09PSAxID8gJ3N1Y2Nlc3MnIDogJ2VycmVyJ30+e3R4RGF0YXMuc3RhdHVzID09PSAxID8gJ3N1Y2Nlc3MnIDogJ2VycmVyJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEJsb2Nr77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5ia31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBGcm9t77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy5mcm9tfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFRv77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dHhEYXRhcy50b31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBUaW1l77yaPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7YWEodHhEYXRhcy50aW1lc3RhbXAgKiAxMDAwKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7TWF0aC5yb3VuZCgoZGF0ZXRpbWUgLSAodHhEYXRhcy50aW1lc3RhbXAgKiAxMDAwKSkgLyAoNjAgKiA2MCAqIDI0ICogMTAwMCkpfWB9IGRheSBhZ288L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJvdHRvbT48L0JvdHRvbT5cbiAgICAgICAgPC9kaXYgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tx/[tx].js\n");

/***/ })

})