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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainScreen */ \"./components/MainScreen.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ \"./components/Content.js\");\n/* harmony import */ var _components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Search/SearchBar */ \"./components/Search/SearchBar.js\");\n/* harmony import */ var _components_Search_SearchContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Search/SearchContent */ \"./components/Search/SearchContent.js\");\n/* harmony import */ var _components_Search_PatientInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Search/PatientInfo */ \"./components/Search/PatientInfo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchTap, setSearchTap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getData = async ()=>{\n        if (true) {\n            var searchReq = await fetch(\"https://stale-camera.pockethost.io/api/collections/fireBlogTopics/records?filter=(title~'\".concat(searchTap, \"' || description~'\").concat(searchTap, \"')\"));\n            setData(await searchReq.json());\n        }\n    };\n    const setSearchTapx = (e)=>{\n        setSearchTap(e);\n        getData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainScreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Search : FireBlog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#111827\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Fire.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                select: \"Search\",\n                setSearchTap: setSearchTapx,\n                searchTap: searchTap,\n                searchAccess: true,\n                mod: \"search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Content__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        setSearchTap: setSearchTapx,\n                        searchTap: searchTap\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        Data: data && data.items\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\New folder\\\\fireblog\\\\pages\\\\patient.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Search, \"GfGm5tuPsci3WS+n87+AmOW4XmA=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXRpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFFSjtBQUNxQjtBQUNSO0FBQ0U7QUFDVztBQUNRO0FBQ0o7QUFHMUQsTUFBTVEsU0FBUSxJQUFLOztJQUVmLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1hLFVBQVMsVUFBUztRQUVwQixJQUFHLElBQUksRUFBQztZQUVKLElBQUlDLFlBQVksTUFBTUMsTUFBTSw0RkFBMEhKLE9BQTlCQSxXQUFVLHNCQUE4QixPQUFWQSxXQUFVO1lBQ2hLRCxRQUFRLE1BQU1JLFVBQVVFLElBQUk7UUFDaEMsQ0FBQztJQUVMO0lBRUEsTUFBTUMsZ0JBQWUsQ0FBQ0MsSUFBSTtRQUN0Qk4sYUFBYU07UUFDYkw7SUFDSjtJQUVBLHFCQUNJLDhEQUFDWCw4REFBVUE7OzBCQUNQLDhEQUFDRCxrREFBSUE7O2tDQUNELDhEQUFDa0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDdEIsMERBQU1BO2dCQUFDdUIsUUFBTztnQkFDUGQsY0FBY0s7Z0JBQ2ROLFdBQVdBO2dCQUNYZ0IsY0FBYyxJQUFJO2dCQUNsQkMsS0FBSTs7Ozs7OzBCQUNaLDhEQUFDeEIsMkRBQU9BOztrQ0FDSiw4REFBQ0Msb0VBQVNBO3dCQUNOTyxjQUFjSzt3QkFDZE4sV0FBV0E7Ozs7OztrQ0FDZiw4REFBQ0wsd0VBQWFBO3dCQUFDdUIsTUFBTXBCLFFBQVFBLEtBQUtxQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7R0F6Q010QjtLQUFBQTtBQTJDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYXRpZW50LmpzP2VhM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBNYWluU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5TY3JlZW5cIlxyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiXHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRcIlxyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hCYXJcIlxyXG5pbXBvcnQgU2VhcmNoQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoQ29udGVudFwiXHJcbmltcG9ydCBQYXRpZW50SW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvUGF0aWVudEluZm9cIlxyXG5cclxuXHJcbmNvbnN0IFNlYXJjaCA9KCk9PiB7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtzZWFyY2hUYXAsIHNldFNlYXJjaFRhcF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPWFzeW5jKCk9PntcclxuXHJcbiAgICAgICAgaWYodHJ1ZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VhcmNoUmVxID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3RhbGUtY2FtZXJhLnBvY2tldGhvc3QuaW8vYXBpL2NvbGxlY3Rpb25zL2ZpcmVCbG9nVG9waWNzL3JlY29yZHM/ZmlsdGVyPSh0aXRsZX4nJHtzZWFyY2hUYXB9JyB8fCBkZXNjcmlwdGlvbn4nJHtzZWFyY2hUYXB9JylgKVxyXG4gICAgICAgICAgICBzZXREYXRhKGF3YWl0IHNlYXJjaFJlcS5qc29uKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRTZWFyY2hUYXB4ID0oZSk9PntcclxuICAgICAgICBzZXRTZWFyY2hUYXAoZSlcclxuICAgICAgICBnZXREYXRhKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1haW5TY3JlZW4+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNlYXJjaCA6IEZpcmVCbG9nPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMTExODI3XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbnMvRmlyZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgc2VsZWN0PVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hUYXA9e3NldFNlYXJjaFRhcHh9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRhcD17c2VhcmNoVGFwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEFjY2Vzcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2Q9XCJzZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoVGFwPXtzZXRTZWFyY2hUYXB4fSBcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUYXA9e3NlYXJjaFRhcH0vPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaENvbnRlbnQgRGF0YT17ZGF0YSAmJiBkYXRhLml0ZW1zfS8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFBhdGllbnRJbmZvIC8+ICovfVxyXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9NYWluU2NyZWVuPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiTWFpblNjcmVlbiIsIk5hdkJhciIsIkNvbnRlbnQiLCJTZWFyY2hCYXIiLCJTZWFyY2hDb250ZW50IiwiUGF0aWVudEluZm8iLCJTZWFyY2giLCJkYXRhIiwic2V0RGF0YSIsInNlYXJjaFRhcCIsInNldFNlYXJjaFRhcCIsImdldERhdGEiLCJzZWFyY2hSZXEiLCJmZXRjaCIsImpzb24iLCJzZXRTZWFyY2hUYXB4IiwiZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzZWxlY3QiLCJzZWFyY2hBY2Nlc3MiLCJtb2QiLCJEYXRhIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/patient.js\n"));

/***/ })

});