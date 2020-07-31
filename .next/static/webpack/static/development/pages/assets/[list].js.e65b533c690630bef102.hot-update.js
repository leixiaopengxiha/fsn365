webpackHotUpdate("static\\development\\pages\\assets\\[list].js",{

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

/***/ }),

/***/ "./pages/assets/[list].js":
/*!********************************!*\
  !*** ./pages/assets/[list].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assetsList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./api/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav */ "./pages/nav/index.js");



var _jsxFileName = "D:\\\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\assets\\[list].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function assetsList() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var query = window.location.pathname.substring(8);

    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getAssets(query);

              case 2:
                result = _context.sent;
                setData(result.data.data);
                console.log(result.data.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), data && __jsx("div", {
    className: "page-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Assets ", __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 36
    }
  }, "#".concat(data.name))))));
}

_s(assetsList, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXNzZXRzL1tsaXN0XS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwicmVzIiwiZGF0YSIsImVyciIsIlByb21pc2UiLCJyZWplY3QiLCJnZXRTdGF0cyIsIm1ldGhvZCIsImhlYWRlcnMiLCJ1cmwiLCJnZXRMYXRlc3QiLCJnZXRCbG9ja3MiLCJhZGRyZXNzTGlzdCIsInRyYW5zYWN0aW9uc0xpc3QiLCJnZXRBc3NldHMiLCJnZXRUeCIsImNvbnNvbGUiLCJsb2ciLCJnZXRCbG9ja3NIZWlnaHQiLCJoZWlnaHQiLCJhc3NldHNMaXN0IiwidXNlU3RhdGUiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwicXVlcnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3Vic3RyaW5nIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsd0JBQXpCLEMsQ0FFQTs7QUFDQUYsNENBQUssQ0FBQ0csWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJDLEdBQTVCLENBQ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1AsU0FBT0EsR0FBRyxDQUFDQyxJQUFYO0FBQ0QsQ0FISCxFQUlFLFVBQUNDLEdBQUQsRUFBUztBQUNQQyxTQUFPLENBQUNDLE1BQVIsQ0FBZUYsR0FBZjtBQUNELENBTkgsRSxDQVNBOztBQUNPLElBQUlHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDMUIsU0FBT1gsNENBQUssQ0FBQztBQUNYWSxVQUFNLEVBQUUsS0FERztBQUVYQyxXQUFPLEVBQUU7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QUNDLEdBQVIsQ0FBWWEsTUFBTSxDQUFDNUIsSUFBUCxDQUFZQSxJQUF4Qjs7QUFIYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUMkIsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUtBQSxhQUFTO0FBQ1osR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUszQixJQUFJLElBQ0Q7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWUEsSUFBSSxDQUFDNkIsSUFBakIsRUFEWCxDQURKLENBREosQ0FIUixDQURKO0FBY0g7O0dBekJ1QlgsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXNzZXRzXFxbbGlzdF0uanMuZTY1YjUzM2M2OTA2MzBiZWYxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOivt+axguaOpeWPo1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyDorr7nva7pu5jorqTorr/pl67ot6/lvoRcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkuZnNuMzY1LmNvbVwiO1xyXG5cclxuLy8g6K+35rGC5oum5oiqIOWTjeW6lOaLpuaIqiBJbnRlcmNlcHRvcnMg5oum5oiq5ZmoXHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH0sXHJcbiAgKGVycikgPT4ge1xyXG4gICAgUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICB9XHJcbik7XHJcblxyXG4vLyDojrflj5bmnIDmlrDnmoTkuqTmmJPlkozljLrlnZfkv6Hmga/mlbDmja5cclxuZXhwb3J0IGxldCBnZXRTdGF0cyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9zdGF0c1wiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+W57uf6K6h5L+h5oGvXHJcbmV4cG9ydCBsZXQgZ2V0TGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IFwiL2xhdGVzdFwiLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+WQmxvY2tzIOaVsOaNrlxyXG5leHBvcnQgbGV0IGdldEJsb2NrcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9ibG9ja3NcIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGFkZHJlc3NMaXN0XHJcbmV4cG9ydCBsZXQgYWRkcmVzc0xpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgfSxcclxuICAgIHVybDogXCIvYXNzZXRzXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyB0cmFuc2FjdGlvbnNMaXN0XHJcbmV4cG9ydCBsZXQgdHJhbnNhY3Rpb25zTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi90eG5cIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEFzc2V0c1xyXG5leHBvcnQgbGV0IGdldEFzc2V0cyA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBcIi9hc3NldHNcIixcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHR4XHJcbmV4cG9ydCBsZXQgZ2V0VHggPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLThcIixcclxuICAgIH0sXHJcbiAgICB1cmw6IGAvdHhuLyR7ZGF0YX1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g6I635Y+WQmxvY2tzIGhlaWdodOaVsOaNrlxyXG5leHBvcnQgbGV0IGdldEJsb2Nrc0hlaWdodCA9IChoZWlnaHQpID0+IHtcclxuICByZXR1cm4gYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIsXHJcbiAgICB9LFxyXG4gICAgdXJsOiBgL2Jsb2Nrcy8ke2hlaWdodH1gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0QXNzZXRzTGlzdCB9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vbmF2XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NldHNMaXN0KCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZyg4KTtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEFzc2V0cygocXVlcnkpKVxyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzc2V0cyA8c21hbGw+e2AjJHtkYXRhLm5hbWV9YH08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==