webpackHotUpdate("static\\development\\pages\\assets.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getStats, getLatest, getBlocks, addressList, transactionsList, getAssets, getTx, getBlocksHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStats", function() { return getStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatest", function() { return getLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocks", function() { return getBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressList", function() { return addressList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsList", function() { return transactionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssets", function() { return getAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTx", function() { return getTx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlocksHeight", function() { return getBlocksHeight; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/_axios@0.19.2@axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// 请求接口
 // 设置默认访问路径

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "https://api.fsn365.com"; // 请求拦截 响应拦截 Interceptors 拦截器

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (res) {
  return res.data;
}, function (err) {
  Promise.reject(err);
}); // 获取最新的交易和区块信息数据

var getStats = function getStats() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/stats"
  });
}; // 获取统计信息

var getLatest = function getLatest() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/latest"
  });
}; // 获取Blocks 数据

var getBlocks = function getBlocks() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/blocks"
  });
}; // addressList

var addressList = function addressList() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/assets"
  });
}; // transactionsList

var transactionsList = function transactionsList() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/txn"
  });
}; // Assets

var getAssets = function getAssets() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/assets"
  });
}; // tx

var getTx = function getTx(data) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/txn/".concat(data)
  });
}; // 获取Blocks height数据

var getBlocksHeight = function getBlocksHeight(height) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/blocks/".concat(height)
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsInJlcyIsImRhdGEiLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0IiwiZ2V0U3RhdHMiLCJtZXRob2QiLCJoZWFkZXJzIiwidXJsIiwiZ2V0TGF0ZXN0IiwiZ2V0QmxvY2tzIiwiYWRkcmVzc0xpc3QiLCJ0cmFuc2FjdGlvbnNMaXN0IiwiZ2V0QXNzZXRzIiwiZ2V0VHgiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmxvY2tzSGVpZ2h0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5Qix3QkFBekIsQyxDQUVBOztBQUNBRiw0Q0FBSyxDQUFDRyxZQUFOLENBQW1CQyxRQUFuQixDQUE0QkMsR0FBNUIsQ0FDRSxVQUFDQyxHQUFELEVBQVM7QUFDUCxTQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDRCxDQUhILEVBSUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ1BDLFNBQU8sQ0FBQ0MsTUFBUixDQUFlRixHQUFmO0FBQ0QsQ0FOSCxFLENBU0E7O0FBQ08sSUFBSUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUMxQixTQUFPWCw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxFQUFFO0FBTE0sR0FBRCxDQUFaO0FBT0QsQ0FSTSxDLENBVVA7O0FBQ08sSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUMzQixTQUFPZiw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxFQUFFO0FBTE0sR0FBRCxDQUFaO0FBT0QsQ0FSTSxDLENBVVA7O0FBQ08sSUFBSUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUMzQixTQUFPaEIsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsRUFBRTtBQUxNLEdBQUQsQ0FBWjtBQU9ELENBUk0sQyxDQVVQOztBQUNPLElBQUlHLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDN0IsU0FBT2pCLDRDQUFLLENBQUM7QUFDWFksVUFBTSxFQUFFLEtBREc7QUFFWEMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGRTtBQUtYQyxPQUFHLEVBQUU7QUFMTSxHQUFELENBQVo7QUFPRCxDQVJNLEMsQ0FVUDs7QUFDTyxJQUFJSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDbEMsU0FBT2xCLDRDQUFLLENBQUM7QUFDWFksVUFBTSxFQUFFLEtBREc7QUFFWEMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGRTtBQUtYQyxPQUFHLEVBQUU7QUFMTSxHQUFELENBQVo7QUFPRCxDQVJNLEMsQ0FVUDs7QUFDTyxJQUFJSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzNCLFNBQU9uQiw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxFQUFFO0FBTE0sR0FBRCxDQUFaO0FBT0QsQ0FSTSxDLENBVVA7O0FBQ08sSUFBSU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ2IsSUFBRCxFQUFVO0FBQzNCYyxTQUFPLENBQUNDLEdBQVIsQ0FBWWYsSUFBWjtBQUNBLFNBQU9QLDRDQUFLLENBQUM7QUFDWFksVUFBTSxFQUFFLEtBREc7QUFFWEMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGRTtBQUtYQyxPQUFHLGlCQUFVUCxJQUFWO0FBTFEsR0FBRCxDQUFaO0FBT0QsQ0FUTSxDLENBV1A7O0FBQ08sSUFBSWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3ZDLFNBQU94Qiw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxvQkFBYVUsTUFBYjtBQUxRLEdBQUQsQ0FBWjtBQU9ELENBUk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0cy5qcy5lNjViNTMzYzY5MDYzMGJlZjEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6K+35rGC5o6l5Y+jXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIOiuvue9rum7mOiupOiuv+mXrui3r+W+hFxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwczovL2FwaS5mc24zNjUuY29tXCI7XHJcblxyXG4vLyDor7fmsYLmi6bmiKog5ZON5bqU5oum5oiqIEludGVyY2VwdG9ycyDmi6bmiKrlmahcclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSxcclxuICAoZXJyKSA9PiB7XHJcbiAgICBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gIH1cclxuKTtcclxuXHJcbi8vIOiOt+WPluacgOaWsOeahOS6pOaYk+WSjOWMuuWdl+S/oeaBr+aVsOaNrlxyXG5leHBvcnQgbGV0IGdldFN0YXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL3N0YXRzXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDojrflj5bnu5/orqHkv6Hmga9cclxuZXhwb3J0IGxldCBnZXRMYXRlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgfSxcclxuICAgIHVybDogXCIvbGF0ZXN0XCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDojrflj5ZCbG9ja3Mg5pWw5o2uXHJcbmV4cG9ydCBsZXQgZ2V0QmxvY2tzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL2Jsb2Nrc1wiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gYWRkcmVzc0xpc3RcclxuZXhwb3J0IGxldCBhZGRyZXNzTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9hc3NldHNcIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHRyYW5zYWN0aW9uc0xpc3RcclxuZXhwb3J0IGxldCB0cmFuc2FjdGlvbnNMaXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL3R4blwiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQXNzZXRzXHJcbmV4cG9ydCBsZXQgZ2V0QXNzZXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL2Fzc2V0c1wiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gdHhcclxuZXhwb3J0IGxldCBnZXRUeCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgfSxcclxuICAgIHVybDogYC90eG4vJHtkYXRhfWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDojrflj5ZCbG9ja3MgaGVpZ2h05pWw5o2uXHJcbmV4cG9ydCBsZXQgZ2V0QmxvY2tzSGVpZ2h0ID0gKGhlaWdodCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IGAvYmxvY2tzLyR7aGVpZ2h0fWAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9