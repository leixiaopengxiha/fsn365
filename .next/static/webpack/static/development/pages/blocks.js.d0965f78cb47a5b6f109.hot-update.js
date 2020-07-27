webpackHotUpdate("static/development/pages/blocks.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/blocks/index.js":
/*!*******************************!*\
  !*** ./pages/blocks/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\nvar _jsxFileName = \"/Users/fantaofan/Desktop/studio/fsn365/pages/blocks/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  table: {\n    minWidth: 650\n  }\n});\n\nfunction createData(name, calories, fat, carbs, protein) {\n  return {\n    name: name,\n    calories: calories,\n    fat: fat,\n    carbs: carbs,\n    protein: protein\n  };\n}\n\nvar rows = [createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0), createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3), createData(\"Eclair\", 262, 16.0, 24, 6.0), createData(\"Cupcake\", 305, 3.7, 67, 4.3), createData(\"Gingerbread\", 356, 16.0, 49, 3.9)];\nfunction SimpleTable() {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.table,\n    \"aria-label\": \"simple table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Dessert (100g serving)\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Calories\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Fat\\xA0(g)\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Carbs\\xA0(g)\"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Protein\\xA0(g)\"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, rows.map(function (row) {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: row.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      component: \"th\",\n      scope: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, row.calories), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    }, row.fat), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    }, row.carbs), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      align: \"right\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }\n    }, row.protein));\n  }))));\n}\n\n_s(SimpleTable, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SimpleTable;\n\nvar _c;\n\n$RefreshReg$(_c, \"SimpleTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ja3MvaW5kZXguanM/ZjVlZCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtaW5XaWR0aCIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwiU2ltcGxlVGFibGUiLCJjbGFzc2VzIiwiUGFwZXIiLCJtYXAiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUU7QUFETDtBQURvQixDQUFELENBQTVCOztBQU1BLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxRQUExQixFQUFvQ0MsR0FBcEMsRUFBeUNDLEtBQXpDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUN2RCxTQUFPO0FBQUVKLFFBQUksRUFBSkEsSUFBRjtBQUFRQyxZQUFRLEVBQVJBLFFBQVI7QUFBa0JDLE9BQUcsRUFBSEEsR0FBbEI7QUFBdUJDLFNBQUssRUFBTEEsS0FBdkI7QUFBOEJDLFdBQU8sRUFBUEE7QUFBOUIsR0FBUDtBQUNEOztBQUVELElBQU1DLElBQUksR0FBRyxDQUNYTixVQUFVLENBQUMsZ0JBQUQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsRUFBN0IsRUFBaUMsR0FBakMsQ0FEQyxFQUVYQSxVQUFVLENBQUMsb0JBQUQsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBakMsRUFBcUMsR0FBckMsQ0FGQyxFQUdYQSxVQUFVLENBQUMsUUFBRCxFQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0IsRUFBdEIsRUFBMEIsR0FBMUIsQ0FIQyxFQUlYQSxVQUFVLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsRUFBdEIsRUFBMEIsR0FBMUIsQ0FKQyxFQUtYQSxVQUFVLENBQUMsYUFBRCxFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixFQUEzQixFQUErQixHQUEvQixDQUxDLENBQWI7QUFRZSxTQUFTTyxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQ3BDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLFNBQ0UsTUFBQyx3RUFBRDtBQUFnQixhQUFTLEVBQUVhLCtEQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFPLGFBQVMsRUFBRUQsT0FBTyxDQUFDVixLQUExQjtBQUFpQyxrQkFBVyxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUUsTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0UsTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBSUUsTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLEVBS0UsTUFBQyxtRUFBRDtBQUFXLFNBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGLENBREYsQ0FERixFQVVFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsV0FDUixNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFHLENBQUNWLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1FQUFEO0FBQVcsZUFBUyxFQUFDLElBQXJCO0FBQTBCLFdBQUssRUFBQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dVLEdBQUcsQ0FBQ1YsSUFEUCxDQURGLEVBSUUsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCVSxHQUFHLENBQUNULFFBQTlCLENBSkYsRUFLRSxNQUFDLG1FQUFEO0FBQVcsV0FBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJTLEdBQUcsQ0FBQ1IsR0FBOUIsQ0FMRixFQU1FLE1BQUMsbUVBQUQ7QUFBVyxXQUFLLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQlEsR0FBRyxDQUFDUCxLQUE5QixDQU5GLEVBT0UsTUFBQyxtRUFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCTyxHQUFHLENBQUNOLE9BQTlCLENBUEYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQVZGLENBREYsQ0FERjtBQTRCRDs7R0EvQnVCRSxXO1VBQ05YLFM7OztLQURNVyxXIiwiZmlsZSI6Ii4vcGFnZXMvYmxvY2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRhYmxlOiB7XG4gICAgbWluV2lkdGg6IDY1MCxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluKSB7XG4gIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluIH07XG59XG5cbmNvbnN0IHJvd3MgPSBbXG4gIGNyZWF0ZURhdGEoXCJGcm96ZW4geW9naHVydFwiLCAxNTksIDYuMCwgMjQsIDQuMCksXG4gIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICBjcmVhdGVEYXRhKFwiRWNsYWlyXCIsIDI2MiwgMTYuMCwgMjQsIDYuMCksXG4gIGNyZWF0ZURhdGEoXCJDdXBjYWtlXCIsIDMwNSwgMy43LCA2NywgNC4zKSxcbiAgY3JlYXRlRGF0YShcIkdpbmdlcmJyZWFkXCIsIDM1NiwgMTYuMCwgNDksIDMuOSksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVUYWJsZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2Fsb3JpZXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlByb3RlaW4mbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blocks/index.js\n");

/***/ }),

/***/ "./pages/nav/index.js":
false

})