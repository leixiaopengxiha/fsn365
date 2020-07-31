webpackHotUpdate("static\\development\\pages\\assets.js",{

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getStats, getLatest, getBlocks, addressList, transactionsList, getAssets, getTx, getBlocksHeight, getAssetsList */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetsList", function() { return getAssetsList; });
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
}; // 获取Assets list数据

var getAssetsList = function getAssetsList(name) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    url: "/assets/".concat(name)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsInJlcyIsImRhdGEiLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0IiwiZ2V0U3RhdHMiLCJtZXRob2QiLCJoZWFkZXJzIiwidXJsIiwiZ2V0TGF0ZXN0IiwiZ2V0QmxvY2tzIiwiYWRkcmVzc0xpc3QiLCJ0cmFuc2FjdGlvbnNMaXN0IiwiZ2V0QXNzZXRzIiwiZ2V0VHgiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmxvY2tzSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0QXNzZXRzTGlzdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsd0JBQXpCLEMsQ0FFQTs7QUFDQUYsNENBQUssQ0FBQ0csWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJDLEdBQTVCLENBQ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1AsU0FBT0EsR0FBRyxDQUFDQyxJQUFYO0FBQ0QsQ0FISCxFQUlFLFVBQUNDLEdBQUQsRUFBUztBQUNQQyxTQUFPLENBQUNDLE1BQVIsQ0FBZUYsR0FBZjtBQUNELENBTkgsRSxDQVNBOztBQUNPLElBQUlHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDMUIsU0FBT1gsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsRUFBRTtBQUxNLEdBQUQsQ0FBWjtBQU9ELENBUk0sQyxDQVVQOztBQUNPLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDM0IsU0FBT2YsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsRUFBRTtBQUxNLEdBQUQsQ0FBWjtBQU9ELENBUk0sQyxDQVVQOztBQUNPLElBQUlFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDM0IsU0FBT2hCLDRDQUFLLENBQUM7QUFDWFksVUFBTSxFQUFFLEtBREc7QUFFWEMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGRTtBQUtYQyxPQUFHLEVBQUU7QUFMTSxHQUFELENBQVo7QUFPRCxDQVJNLEMsQ0FVUDs7QUFDTyxJQUFJRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQzdCLFNBQU9qQiw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxFQUFFO0FBTE0sR0FBRCxDQUFaO0FBT0QsQ0FSTSxDLENBVVA7O0FBQ08sSUFBSUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ2xDLFNBQU9sQiw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxFQUFFO0FBTE0sR0FBRCxDQUFaO0FBT0QsQ0FSTSxDLENBVVA7O0FBQ08sSUFBSUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUMzQixTQUFPbkIsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsRUFBRTtBQUxNLEdBQUQsQ0FBWjtBQU9ELENBUk0sQyxDQVVQOztBQUNPLElBQUlNLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNiLElBQUQsRUFBVTtBQUMzQmMsU0FBTyxDQUFDQyxHQUFSLENBQVlmLElBQVo7QUFDQSxTQUFPUCw0Q0FBSyxDQUFDO0FBQ1hZLFVBQU0sRUFBRSxLQURHO0FBRVhDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRkU7QUFLWEMsT0FBRyxpQkFBVVAsSUFBVjtBQUxRLEdBQUQsQ0FBWjtBQU9ELENBVE0sQyxDQVdQOztBQUNPLElBQUlnQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE1BQUQsRUFBWTtBQUN2QyxTQUFPeEIsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsb0JBQWFVLE1BQWI7QUFMUSxHQUFELENBQVo7QUFPRCxDQVJNLEMsQ0FVUDs7QUFDTyxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFPMUIsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZFO0FBS1hDLE9BQUcsb0JBQWFZLElBQWI7QUFMUSxHQUFELENBQVo7QUFPRCxDQVJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhc3NldHMuanMuYzczNjAyNzlkZTYxMjhkNjRlMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOivt+axguaOpeWPo1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyDorr7nva7pu5jorqTorr/pl67ot6/lvoRcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkuZnNuMzY1LmNvbVwiO1xyXG5cclxuLy8g6K+35rGC5oum5oiqIOWTjeW6lOaLpuaIqiBJbnRlcmNlcHRvcnMg5oum5oiq5ZmoXHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH0sXHJcbiAgKGVycikgPT4ge1xyXG4gICAgUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICB9XHJcbik7XHJcblxyXG4vLyDojrflj5bmnIDmlrDnmoTkuqTmmJPlkozljLrlnZfkv6Hmga/mlbDmja5cclxuZXhwb3J0IGxldCBnZXRTdGF0cyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9zdGF0c1wiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+W57uf6K6h5L+h5oGvXHJcbmV4cG9ydCBsZXQgZ2V0TGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL2xhdGVzdFwiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+WQmxvY2tzIOaVsOaNrlxyXG5leHBvcnQgbGV0IGdldEJsb2NrcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9ibG9ja3NcIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGFkZHJlc3NMaXN0XHJcbmV4cG9ydCBsZXQgYWRkcmVzc0xpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgfSxcclxuICAgIHVybDogXCIvYXNzZXRzXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyB0cmFuc2FjdGlvbnNMaXN0XHJcbmV4cG9ydCBsZXQgdHJhbnNhY3Rpb25zTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi90eG5cIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEFzc2V0c1xyXG5leHBvcnQgbGV0IGdldEFzc2V0cyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9hc3NldHNcIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHR4XHJcbmV4cG9ydCBsZXQgZ2V0VHggPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IGAvdHhuLyR7ZGF0YX1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+WQmxvY2tzIGhlaWdodOaVsOaNrlxyXG5leHBvcnQgbGV0IGdldEJsb2Nrc0hlaWdodCA9IChoZWlnaHQpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBgL2Jsb2Nrcy8ke2hlaWdodH1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+WQXNzZXRzIGxpc3TmlbDmja5cclxuZXhwb3J0IGxldCBnZXRBc3NldHNMaXN0ID0gKG5hbWUpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBgL2Fzc2V0cy8ke25hbWV9YCxcclxuICB9KTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9