"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search/index.js":
/*!*******************************!*\
  !*** ./pages/search/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainScreen */ \"./components/MainScreen.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Content */ \"./components/Content.js\");\n/* harmony import */ var _components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Search/SearchBar */ \"./components/Search/SearchBar.js\");\n/* harmony import */ var _components_Search_SearchContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Search/SearchContent */ \"./components/Search/SearchContent.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchTap, setSearchTap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getData = async ()=>{\n        if (true) {\n            var searchReq = await fetch(\"https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'\".concat(searchTap, \"' || description~'\").concat(searchTap, \"')\"));\n            setData(await searchReq.json());\n        }\n    };\n    const setSearchTapx = (e)=>{\n        setSearchTap(e);\n        getData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Search : FireBlog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#111827\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Fire.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                select: \"Search\",\n                setSearchTap: setSearchTapx,\n                searchTap: searchTap,\n                searchAccess: true,\n                mod: \"search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setSearchTap: setSearchTapx,\n                        searchTap: searchTap\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        Data: data && data.items\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\search\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Search, \"GfGm5tuPsci3WS+n87+AmOW4XmA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBQ29CO0FBQ1I7QUFDRTtBQUNXO0FBQ1E7QUFDckM7QUFHNUIsTUFBTU8sU0FBUSxJQUFLOztJQUVmLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1ZLFVBQVMsVUFBUztRQUVwQixJQUFHLElBQUksRUFBQztZQUVKLElBQUlDLFlBQVksTUFBTUMsTUFBTSw0RkFBMEhKLE9BQTlCQSxXQUFVLHNCQUE4QixPQUFWQSxXQUFVO1lBQ2hLRCxRQUFRLE1BQU1JLFVBQVVFLElBQUk7UUFDaEMsQ0FBQztJQUVMO0lBRUEsTUFBTUMsZ0JBQWUsQ0FBQ0MsSUFBSTtRQUN0Qk4sYUFBYU07UUFDYkw7SUFDSjtJQUVBLHFCQUNJLDhEQUFDWCw4REFBVUE7OzBCQUNQLDhEQUFDSyxrREFBSUE7O2tDQUNELDhEQUFDWTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUN0QiwwREFBTUE7Z0JBQUN1QixRQUFPO2dCQUNQZCxjQUFjSztnQkFDZE4sV0FBV0E7Z0JBQ1hnQixjQUFjLElBQUk7Z0JBQ2xCQyxLQUFJOzs7Ozs7MEJBQ1osOERBQUN4QiwyREFBT0E7O2tDQUNKLDhEQUFDQyxvRUFBU0E7d0JBQ05PLGNBQWNLO3dCQUNkTixXQUFXQTs7Ozs7O2tDQUNmLDhEQUFDTCx3RUFBYUE7d0JBQUN1QixNQUFNcEIsUUFBUUEsS0FBS3FCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RDtHQXhDTXRCO0tBQUFBO0FBMENOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC9pbmRleC5qcz9jMWM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1haW5TY3JlZW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpblNjcmVlblwiXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2QmFyXCJcclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGVudFwiXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaEJhclwiXHJcbmltcG9ydCBTZWFyY2hDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hDb250ZW50XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5cclxuY29uc3QgU2VhcmNoID0oKT0+IHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3NlYXJjaFRhcCwgc2V0U2VhcmNoVGFwXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9YXN5bmMoKT0+e1xyXG5cclxuICAgICAgICBpZih0cnVlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hSZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zdGFsZS1jYW1lcmEucG9ja2V0aG9zdC5pby9hcGkvY29sbGVjdGlvbnMvZmlyZUJsb2dUb3BpY3MvcmVjb3Jkcz9maWx0ZXI9KHRpdGxlficke3NlYXJjaFRhcH0nIHx8IGRlc2NyaXB0aW9uficke3NlYXJjaFRhcH0nKWApXHJcbiAgICAgICAgICAgIHNldERhdGEoYXdhaXQgc2VhcmNoUmVxLmpzb24oKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFNlYXJjaFRhcHggPShlKT0+e1xyXG4gICAgICAgIHNldFNlYXJjaFRhcChlKVxyXG4gICAgICAgIGdldERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpblNjcmVlbj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2VhcmNoIDogRmlyZUJsb2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMxMTE4MjdcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29ucy9GaXJlLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdkJhciBzZWxlY3Q9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFRhcD17c2V0U2VhcmNoVGFweH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGFwPXtzZWFyY2hUYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQWNjZXNzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZD1cInNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhciBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hUYXA9e3NldFNlYXJjaFRhcHh9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRhcD17c2VhcmNoVGFwfS8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoQ29udGVudCBEYXRhPXtkYXRhICYmIGRhdGEuaXRlbXN9Lz5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvTWFpblNjcmVlbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTWFpblNjcmVlbiIsIk5hdkJhciIsIkNvbnRlbnQiLCJTZWFyY2hCYXIiLCJTZWFyY2hDb250ZW50IiwiSGVhZCIsIlNlYXJjaCIsImRhdGEiLCJzZXREYXRhIiwic2VhcmNoVGFwIiwic2V0U2VhcmNoVGFwIiwiZ2V0RGF0YSIsInNlYXJjaFJlcSIsImZldGNoIiwianNvbiIsInNldFNlYXJjaFRhcHgiLCJlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNlbGVjdCIsInNlYXJjaEFjY2VzcyIsIm1vZCIsIkRhdGEiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/index.js\n"));

/***/ })

});