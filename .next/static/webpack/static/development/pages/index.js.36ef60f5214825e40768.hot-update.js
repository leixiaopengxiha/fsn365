webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getStats, getLatest, getBlocks, addressList, transactionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStats\", function() { return getStats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLatest\", function() { return getLatest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBlocks\", function() { return getBlocks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addressList\", function() { return addressList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transactionsList\", function() { return transactionsList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// 请求接口\n // 设置默认访问路径\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = \"https://api.fsn365.com\"; // 请求拦截 响应拦截 Interceptors 拦截器\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (res) {\n  return res.data;\n}, function (err) {\n  Promise.reject(err);\n}); // 获取最新的交易和区块信息数据\n\nvar getStats = function getStats() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'\n    },\n    url: '/stats'\n  });\n}; // 获取统计信息\n\nvar getLatest = function getLatest() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'\n    },\n    url: '/latest'\n  });\n}; // 获取Blocks 数据\n\nvar getBlocks = function getBlocks() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'\n    },\n    url: '/blocks'\n  });\n}; // \n\nvar addressList = function addressList() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'\n    },\n    url: '/address'\n  });\n}; // transactionsList\n\nvar transactionsList = function transactionsList() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'\n    },\n    url: '/txn'\n  });\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanM/NmNjYyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwicmVzIiwiZGF0YSIsImVyciIsIlByb21pc2UiLCJyZWplY3QiLCJnZXRTdGF0cyIsIm1ldGhvZCIsImhlYWRlcnMiLCJ1cmwiLCJnZXRMYXRlc3QiLCJnZXRCbG9ja3MiLCJhZGRyZXNzTGlzdCIsInRyYW5zYWN0aW9uc0xpc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsd0JBQXpCLEMsQ0FFQTs7QUFDQUYsNENBQUssQ0FBQ0csWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJDLEdBQTVCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUNyQyxTQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDSCxDQUZELEVBRUcsVUFBQ0MsR0FBRCxFQUFTO0FBQ1JDLFNBQU8sQ0FBQ0MsTUFBUixDQUFlRixHQUFmO0FBQ0gsQ0FKRCxFLENBTUE7O0FBQ08sSUFBSUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUN4QixTQUFPWCw0Q0FBSyxDQUFDO0FBQ1RZLFVBQU0sRUFBRSxLQURDO0FBRVRDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYLEtBRkE7QUFLVEMsT0FBRyxFQUFFO0FBTEksR0FBRCxDQUFaO0FBUUgsQ0FUTSxDLENBWVA7O0FBQ08sSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN6QixTQUFPZiw0Q0FBSyxDQUFDO0FBQ1RZLFVBQU0sRUFBRSxLQURDO0FBRVRDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYLEtBRkE7QUFLVEMsT0FBRyxFQUFFO0FBTEksR0FBRCxDQUFaO0FBUUgsQ0FUTSxDLENBV1A7O0FBQ08sSUFBSUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN6QixTQUFPaEIsNENBQUssQ0FBQztBQUNUWSxVQUFNLEVBQUUsS0FEQztBQUVUQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWCxLQUZBO0FBS1RDLE9BQUcsRUFBRTtBQUxJLEdBQUQsQ0FBWjtBQVFILENBVE0sQyxDQVdQOztBQUdPLElBQUlHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDM0IsU0FBT2pCLDRDQUFLLENBQUM7QUFDVFksVUFBTSxFQUFFLEtBREM7QUFFVEMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCO0FBRFgsS0FGQTtBQUtUQyxPQUFHLEVBQUU7QUFMSSxHQUFELENBQVo7QUFRSCxDQVRNLEMsQ0FXUDs7QUFHTyxJQUFJSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDaEMsU0FBT2xCLDRDQUFLLENBQUM7QUFDVFksVUFBTSxFQUFFLEtBREM7QUFFVEMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCO0FBRFgsS0FGQTtBQUtUQyxPQUFHLEVBQUU7QUFMSSxHQUFELENBQVo7QUFRSCxDQVRNIiwiZmlsZSI6Ii4vYXBpL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6K+35rGC5o6l5Y+jXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIOiuvue9rum7mOiupOiuv+mXrui3r+W+hFxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkuZnNuMzY1LmNvbVwiXG5cbi8vIOivt+axguaLpuaIqiDlk43lupTmi6bmiKogSW50ZXJjZXB0b3JzIOaLpuaIquWZqFxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5kYXRhXG59LCAoZXJyKSA9PiB7XG4gICAgUHJvbWlzZS5yZWplY3QoZXJyKVxufSlcblxuLy8g6I635Y+W5pyA5paw55qE5Lqk5piT5ZKM5Yy65Z2X5L+h5oGv5pWw5o2uXG5leHBvcnQgbGV0IGdldFN0YXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH0sXG4gICAgICAgIHVybDogJy9zdGF0cycsXG4gICAgfSlcblxufVxuXG5cbi8vIOiOt+WPlue7n+iuoeS/oeaBr1xuZXhwb3J0IGxldCBnZXRMYXRlc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCdcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiAnL2xhdGVzdCcsXG4gICAgfSlcblxufVxuXG4vLyDojrflj5ZCbG9ja3Mg5pWw5o2uXG5leHBvcnQgbGV0IGdldEJsb2NrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04J1xuICAgICAgICB9LFxuICAgICAgICB1cmw6ICcvYmxvY2tzJyxcbiAgICB9KVxuXG59XG5cbi8vIFxuXG5cbmV4cG9ydCBsZXQgYWRkcmVzc0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCdcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiAnL2FkZHJlc3MnLFxuICAgIH0pXG5cbn1cblxuLy8gdHJhbnNhY3Rpb25zTGlzdFxuXG5cbmV4cG9ydCBsZXQgdHJhbnNhY3Rpb25zTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04J1xuICAgICAgICB9LFxuICAgICAgICB1cmw6ICcvdHhuJyxcbiAgICB9KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

})