/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Nav() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const currentPath = router.pathname;\n    const getLinkStyle = (path)=>({\n            textDecoration: 'none',\n            color: '#333',\n            fontWeight: currentPath === path ? '600' : '400',\n            borderBottom: currentPath === path ? '2px solid #0070f3' : 'none',\n            paddingBottom: '2px'\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            maxWidth: '800px',\n            margin: '0 auto',\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            padding: '24px 0',\n            boxShadow: 'none',\n            border: 'none',\n            backgroundColor: 'white'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: 'center',\n                    marginBottom: '40px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        style: {\n                            textDecoration: 'none',\n                            color: 'inherit'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            style: {\n                                margin: 0,\n                                fontSize: '1.8rem',\n                                fontWeight: '600',\n                                marginBottom: '4px',\n                                cursor: 'pointer'\n                            },\n                            children: \"Data Insights \\uD83D\\uDCCA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: '0.75rem',\n                            color: '#666',\n                            textTransform: 'uppercase',\n                            letterSpacing: '0.05em'\n                        },\n                        children: [\n                            \"Sponsored by \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://synq.io\",\n                                target: \"_blank\",\n                                style: {\n                                    textDecoration: 'none',\n                                    margin: 0,\n                                    padding: 0\n                                },\n                                children: \"SYNQ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                                lineNumber: 40,\n                                columnNumber: 24\n                            }, this),\n                            \", the data products observability platform\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    gap: '24px',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    flexWrap: 'wrap'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/team-size\",\n                        style: getLinkStyle('/team-size'),\n                        children: \"Data Team Size\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/team-composition\",\n                        style: getLinkStyle('/team-composition'),\n                        children: \"Team Composition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/data-engineer-ratio\",\n                        style: getLinkStyle('/data-engineer-ratio'),\n                        children: \"Data-to-Engineer Ratio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/salary-benchmark\",\n                        style: getLinkStyle('/salary-benchmark'),\n                        children: \"Salary Benchmark\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/components/Nav.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXpCLFNBQVNFO0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNRyxjQUFjRCxPQUFPRSxRQUFRO0lBRW5DLE1BQU1DLGVBQWUsQ0FBQ0MsT0FBVTtZQUM5QkMsZ0JBQWdCO1lBQ2hCQyxPQUFPO1lBQ1BDLFlBQVlOLGdCQUFnQkcsT0FBTyxRQUFRO1lBQzNDSSxjQUFjUCxnQkFBZ0JHLE9BQU8sc0JBQXNCO1lBQzNESyxlQUFlO1FBQ2pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU87WUFDVkMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxRQUFRO1lBQ1JDLGlCQUFpQjtRQUNuQjs7MEJBQ0UsOERBQUNDO2dCQUFJVixPQUFPO29CQUFFVyxXQUFXO29CQUFVQyxjQUFjO2dCQUFPOztrQ0FDdEQsOERBQUMxQixrREFBSUE7d0JBQUMyQixNQUFLO3dCQUFJYixPQUFPOzRCQUFFTixnQkFBZ0I7NEJBQVFDLE9BQU87d0JBQVU7a0NBQy9ELDRFQUFDbUI7NEJBQUdkLE9BQU87Z0NBQUVFLFFBQVE7Z0NBQUdhLFVBQVU7Z0NBQVVuQixZQUFZO2dDQUFPZ0IsY0FBYztnQ0FBT0ksUUFBUTs0QkFBVTtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBSTNHLDhEQUFDTjt3QkFBSVYsT0FBTzs0QkFDVmUsVUFBVTs0QkFDVnBCLE9BQU87NEJBQ1BzQixlQUFlOzRCQUNmQyxlQUFlO3dCQUNqQjs7NEJBQUc7MENBQ1ksOERBQUNDO2dDQUFFTixNQUFLO2dDQUFrQk8sUUFBTztnQ0FBU3BCLE9BQU87b0NBQUVOLGdCQUFnQjtvQ0FBUVEsUUFBUTtvQ0FBR0ksU0FBUztnQ0FBRTswQ0FBRzs7Ozs7OzRCQUFROzs7Ozs7Ozs7Ozs7OzBCQUc3SCw4REFBQ0k7Z0JBQUlWLE9BQU87b0JBQ1ZHLFNBQVM7b0JBQ1RrQixLQUFLO29CQUNMaEIsWUFBWTtvQkFDWmlCLGdCQUFnQjtvQkFDaEJDLFVBQVU7Z0JBQ1o7O2tDQUNFLDhEQUFDckMsa0RBQUlBO3dCQUFDMkIsTUFBSzt3QkFBYWIsT0FBT1IsYUFBYTtrQ0FBZTs7Ozs7O2tDQUMzRCw4REFBQ04sa0RBQUlBO3dCQUFDMkIsTUFBSzt3QkFBb0JiLE9BQU9SLGFBQWE7a0NBQXNCOzs7Ozs7a0NBQ3pFLDhEQUFDTixrREFBSUE7d0JBQUMyQixNQUFLO3dCQUF1QmIsT0FBT1IsYUFBYTtrQ0FBeUI7Ozs7OztrQ0FDL0UsOERBQUNOLGtEQUFJQTt3QkFBQzJCLE1BQUs7d0JBQW9CYixPQUFPUixhQUFhO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpGIiwic291cmNlcyI6WyIvVXNlcnMvbWlra2VsZGVuZ3NvZS9Eb3dubG9hZHMvZGF0YS10ZWFtLWFuYWx5dGljcy9jb21wb25lbnRzL05hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBjdXJyZW50UGF0aCA9IHJvdXRlci5wYXRobmFtZTtcblxuICBjb25zdCBnZXRMaW5rU3R5bGUgPSAocGF0aCkgPT4gKHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzMzMycsXG4gICAgZm9udFdlaWdodDogY3VycmVudFBhdGggPT09IHBhdGggPyAnNjAwJyA6ICc0MDAnLFxuICAgIGJvcmRlckJvdHRvbTogY3VycmVudFBhdGggPT09IHBhdGggPyAnMnB4IHNvbGlkICMwMDcwZjMnIDogJ25vbmUnLFxuICAgIHBhZGRpbmdCb3R0b206ICcycHgnXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBzdHlsZT17eyBcbiAgICAgIG1heFdpZHRoOiAnODAwcHgnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JywgXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzI0cHggMCcsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzQwcHgnIH19PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6ICcxLjhyZW0nLCBmb250V2VpZ2h0OiAnNjAwJywgbWFyZ2luQm90dG9tOiAnNHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICBEYXRhIEluc2lnaHRzIPCfk4pcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgXG4gICAgICAgICAgZm9udFNpemU6ICcwLjc1cmVtJywgXG4gICAgICAgICAgY29sb3I6ICcjNjY2JyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNWVtJ1xuICAgICAgICB9fT5cbiAgICAgICAgICBTcG9uc29yZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vc3lucS5pb1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIG1hcmdpbjogMCwgcGFkZGluZzogMCB9fT5TWU5RPC9hPiwgdGhlIGRhdGEgcHJvZHVjdHMgb2JzZXJ2YWJpbGl0eSBwbGF0Zm9ybVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBcbiAgICAgICAgZ2FwOiAnMjRweCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgICAgIH19PlxuICAgICAgICA8TGluayBocmVmPVwiL3RlYW0tc2l6ZVwiIHN0eWxlPXtnZXRMaW5rU3R5bGUoJy90ZWFtLXNpemUnKX0+RGF0YSBUZWFtIFNpemU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhbS1jb21wb3NpdGlvblwiIHN0eWxlPXtnZXRMaW5rU3R5bGUoJy90ZWFtLWNvbXBvc2l0aW9uJyl9PlRlYW0gQ29tcG9zaXRpb248L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGF0YS1lbmdpbmVlci1yYXRpb1wiIHN0eWxlPXtnZXRMaW5rU3R5bGUoJy9kYXRhLWVuZ2luZWVyLXJhdGlvJyl9PkRhdGEtdG8tRW5naW5lZXIgUmF0aW88L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2FsYXJ5LWJlbmNobWFya1wiIHN0eWxlPXtnZXRMaW5rU3R5bGUoJy9zYWxhcnktYmVuY2htYXJrJyl9PlNhbGFyeSBCZW5jaG1hcms8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJyb3V0ZXIiLCJjdXJyZW50UGF0aCIsInBhdGhuYW1lIiwiZ2V0TGlua1N0eWxlIiwicGF0aCIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYm9yZGVyQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsIm5hdiIsInN0eWxlIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiaHJlZiIsImgxIiwiZm9udFNpemUiLCJjdXJzb3IiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImEiLCJ0YXJnZXQiLCJnYXAiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: '800px',\n            margin: '0 auto',\n            padding: '20px',\n            backgroundColor: 'white'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mikkeldengsoe/Downloads/data-team-analytics/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDSztBQUVwQyxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1ZDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLGlCQUFpQjtRQUNuQjs7MEJBQ0UsOERBQUNULHVEQUFHQTs7Ozs7MEJBQ0osOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbWlra2VsZGVuZ3NvZS9Eb3dubG9hZHMvZGF0YS10ZWFtLWFuYWx5dGljcy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgbWF4V2lkdGg6ICc4MDBweCcsIFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJywgXG4gICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICB9fT5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTmF2IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJzdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();