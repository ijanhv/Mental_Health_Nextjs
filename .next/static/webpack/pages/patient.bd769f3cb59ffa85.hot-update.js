"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/patient",{

/***/ "./pages/patient.js":
/*!**************************!*\
  !*** ./pages/patient.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainScreen */ \"./components/MainScreen.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ \"./components/Content.js\");\n/* harmony import */ var _components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search/SearchBar */ \"./components/Search/SearchBar.js\");\n/* harmony import */ var _components_Search_SearchContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Search/SearchContent */ \"./components/Search/SearchContent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchTap, setSearchTap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getData = async ()=>{\n        if (true) {\n            var searchReq = await fetch(\"https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'\".concat(searchTap, \"' || description~'\").concat(searchTap, \"')\"));\n            setData(await searchReq.json());\n        }\n    };\n    const setSearchTapx = (e)=>{\n        setSearchTap(e);\n        getData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Search : FireBlog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#111827\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Fire.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                select: \"Search\",\n                setSearchTap: setSearchTapx,\n                searchTap: searchTap,\n                searchAccess: true,\n                mod: \"search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    setSearchTap: setSearchTapx,\n                    searchTap: searchTap\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Search, \"GfGm5tuPsci3WS+n87+AmOW4XmA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXRpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUVKO0FBQ3FCO0FBQ1I7QUFDRTtBQUNXO0FBQ1E7QUFHOUQsTUFBTU8sU0FBUSxJQUFLOztJQUVmLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1ZLFVBQVMsVUFBUztRQUVwQixJQUFHLElBQUksRUFBQztZQUVKLElBQUlDLFlBQVksTUFBTUMsTUFBTSw0RkFBMEhKLE9BQTlCQSxXQUFVLHNCQUE4QixPQUFWQSxXQUFVO1lBQ2hLRCxRQUFRLE1BQU1JLFVBQVVFLElBQUk7UUFDaEMsQ0FBQztJQUVMO0lBRUEsTUFBTUMsZ0JBQWUsQ0FBQ0MsSUFBSTtRQUN0Qk4sYUFBYU07UUFDYkw7SUFDSjtJQUVBLHFCQUNJLDhEQUFDViw4REFBVUE7OzBCQUNQLDhEQUFDRCxrREFBSUE7O2tDQUNELDhEQUFDaUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDckIsMERBQU1BO2dCQUFDc0IsUUFBTztnQkFDUGQsY0FBY0s7Z0JBQ2ROLFdBQVdBO2dCQUNYZ0IsY0FBYyxJQUFJO2dCQUNsQkMsS0FBSTs7Ozs7OzBCQUNaLDhEQUFDdkIsMkRBQU9BOzBCQUNKLDRFQUFDQyxvRUFBU0E7b0JBQ05NLGNBQWNLO29CQUNkTixXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7R0F6Q01IO0tBQUFBO0FBMkNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhdGllbnQuanM/ZWEzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IE1haW5TY3JlZW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblNjcmVlblwiXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCJcclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGVudFwiXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaEJhclwiXHJcbmltcG9ydCBTZWFyY2hDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hDb250ZW50XCJcclxuXHJcblxyXG5jb25zdCBTZWFyY2ggPSgpPT4ge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbc2VhcmNoVGFwLCBzZXRTZWFyY2hUYXBdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID1hc3luYygpPT57XHJcblxyXG4gICAgICAgIGlmKHRydWUpe1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlYXJjaFJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL3N0YWxlLWNhbWVyYS5wb2NrZXRob3N0LmlvL2FwaS9jb2xsZWN0aW9ucy9maXJlQmxvZ1RvcGljcy9yZWNvcmRzP2ZpbHRlcj0odGl0bGV+JyR7c2VhcmNoVGFwfScgfHwgZGVzY3JpcHRpb25+JyR7c2VhcmNoVGFwfScpYClcclxuICAgICAgICAgICAgc2V0RGF0YShhd2FpdCBzZWFyY2hSZXEuanNvbigpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0U2VhcmNoVGFweCA9KGUpPT57XHJcbiAgICAgICAgc2V0U2VhcmNoVGFwKGUpXHJcbiAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNYWluU2NyZWVuPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TZWFyY2ggOiBGaXJlQmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzExMTgyN1wiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb25zL0ZpcmUuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2QmFyIHNlbGVjdD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoVGFwPXtzZXRTZWFyY2hUYXB4fSBcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUYXA9e3NlYXJjaFRhcH1cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hBY2Nlc3M9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kPVwic2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFRhcD17c2V0U2VhcmNoVGFweH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGFwPXtzZWFyY2hUYXB9Lz5cclxuICAgICAgICAgICAgICAgIHsvKiA8U2VhcmNoQ29udGVudCBEYXRhPXtkYXRhICYmIGRhdGEuaXRlbXN9Lz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFNlYXJjaENvbnRlbnQgRGF0YT17ZGF0YSAmJiBkYXRhLn0vPiAqL31cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvTWFpblNjcmVlbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIk1haW5TY3JlZW4iLCJOYXZCYXIiLCJDb250ZW50IiwiU2VhcmNoQmFyIiwiU2VhcmNoQ29udGVudCIsIlNlYXJjaCIsImRhdGEiLCJzZXREYXRhIiwic2VhcmNoVGFwIiwic2V0U2VhcmNoVGFwIiwiZ2V0RGF0YSIsInNlYXJjaFJlcSIsImZldGNoIiwianNvbiIsInNldFNlYXJjaFRhcHgiLCJlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNlbGVjdCIsInNlYXJjaEFjY2VzcyIsIm1vZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/patient.js\n"));

/***/ })

});