"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"./node_modules/@web3modal/wagmi/dist/esm/exports/react.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isConnectHighlighted, setIsConnectHighlighted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { open, close } = (0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3Modal)();\n    const { disconnect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect)();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const closeAll = ()=>{\n        setIsNetworkSwitchHighlighted(false);\n        setIsConnectHighlighted(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WalletConnect | Next Starter Template\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create-wc-dapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Web3Modal Hooks\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"w3m-button\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>open(),\n                                    children: address ? address : \"Open/close\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"Disconnect\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Wagmi Hooks\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useAccount\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: address ? address : null\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useBalance\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useSignMessage\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useContractRead\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useContractReads\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 6\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>disconnect(),\n                                    children: \"useContractWrite\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 6\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ramiro\\\\Desktop\\\\DevelHope\\\\REPLICANDO PANCAKESWAP\\\\pancake-swap\\\\9-w3m-wagmi-hooks\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"oZ6t5qS7Cse3um2A7T21PJNPYW8=\", false, function() {\n    return [\n        _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_3__.useWeb3Modal,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFFaUI7QUFDYjtBQUNvQjtBQUNIO0FBRW5DLFNBQVNNOztJQUN2QixNQUFNLENBQUNDLDRCQUE0QkMsOEJBQThCLEdBQ2hFTiwrQ0FBUUEsQ0FBQztJQUNWLE1BQU0sQ0FBQ08sc0JBQXNCQyx3QkFBd0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakUsTUFBTSxFQUFFUyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHVCxvRUFBWUE7SUFDcEMsTUFBTSxFQUFFVSxVQUFVLEVBQUUsR0FBR1Qsb0RBQWFBO0lBQ3BDLE1BQU0sRUFBRVUsT0FBTyxFQUFFLEdBQUdULGlEQUFVQTtJQUU5QixNQUFNVSxXQUFXO1FBQ2hCUCw4QkFBOEI7UUFDOUJFLHdCQUF3QjtJQUN6QjtJQUNBLHFCQUNDOzswQkFDQyw4REFBQ1Ysa0RBQUlBOztrQ0FDSiw4REFBQ2dCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNBQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVQsOERBQUNGO3dCQUNBQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVQsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDQztnQkFBS0MsV0FBV3ZCLHFFQUFXOzBCQUMzQiw0RUFBQ3dCOztzQ0FDQSw4REFBQ0E7OzhDQUNBLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs7Ozs7OENBQ0QsOERBQUNDO29DQUFPQyxTQUFTLElBQU1sQjs4Q0FBU0csVUFBVUEsVUFBVTs7Ozs7OzhDQUNwRCw4REFBQ2M7b0NBQU9DLFNBQVMsSUFBTWhCOzhDQUFjOzs7Ozs7Ozs7Ozs7c0NBRXZDLDhEQUFDWTs7OENBQ0EsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNFO29DQUFPQyxTQUFTLElBQU1oQjs4Q0FBYzs7Ozs7OzhDQUNyQyw4REFBQ1k7OENBQUtYLFVBQVVBLFVBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNjO29DQUFPQyxTQUFTLElBQU1oQjs4Q0FBYzs7Ozs7OzhDQUNyQyw4REFBQ2U7b0NBQU9DLFNBQVMsSUFBTWhCOzhDQUFjOzs7Ozs7OENBQ3JDLDhEQUFDZTtvQ0FBT0MsU0FBUyxJQUFNaEI7OENBQWM7Ozs7Ozs4Q0FDckMsOERBQUNlO29DQUFPQyxTQUFTLElBQU1oQjs4Q0FBYzs7Ozs7OzhDQUNyQyw4REFBQ2U7b0NBQU9DLFNBQVMsSUFBTWhCOzhDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBbER3QlA7O1FBSUNILGdFQUFZQTtRQUNiQyxnREFBYUE7UUFDaEJDLDZDQUFVQTs7O0tBTlBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC93YWdtaS9yZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzY29ubmVjdCwgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRjb25zdCBbaXNOZXR3b3JrU3dpdGNoSGlnaGxpZ2h0ZWQsIHNldElzTmV0d29ya1N3aXRjaEhpZ2hsaWdodGVkXSA9XHJcblx0XHR1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2lzQ29ubmVjdEhpZ2hsaWdodGVkLCBzZXRJc0Nvbm5lY3RIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgeyBvcGVuLCBjbG9zZSB9ID0gdXNlV2ViM01vZGFsKClcclxuXHRjb25zdCB7IGRpc2Nvbm5lY3QgfSA9IHVzZURpc2Nvbm5lY3QoKVxyXG5cdGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpXHJcblxyXG5cdGNvbnN0IGNsb3NlQWxsID0gKCkgPT4ge1xyXG5cdFx0c2V0SXNOZXR3b3JrU3dpdGNoSGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG5cdFx0c2V0SXNDb25uZWN0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5XYWxsZXRDb25uZWN0IHwgTmV4dCBTdGFydGVyIFRlbXBsYXRlPC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlLXdjLWRhcHBcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXHJcblx0XHRcdFx0XHRjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHRcdFx0XHRcclxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoMT5XZWIzTW9kYWwgSG9va3M8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8dzNtLWJ1dHRvbiAvPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW4oKX0+e2FkZHJlc3MgPyBhZGRyZXNzIDogXCJPcGVuL2Nsb3NlXCJ9PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzY29ubmVjdCgpfT5EaXNjb25uZWN0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGgxPldhZ21pIEhvb2tzPC9oMT5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzY29ubmVjdCgpfT51c2VBY2NvdW50PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8ZGl2PnthZGRyZXNzID8gYWRkcmVzcyA6IG51bGx9PC9kaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc2Nvbm5lY3QoKX0+dXNlQmFsYW5jZTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0KCl9PnVzZVNpZ25NZXNzYWdlPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc2Nvbm5lY3QoKX0+dXNlQ29udHJhY3RSZWFkPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc2Nvbm5lY3QoKX0+dXNlQ29udHJhY3RSZWFkczwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0KCl9PnVzZUNvbnRyYWN0V3JpdGU8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvbWFpbj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVdlYjNNb2RhbCIsInVzZURpc2Nvbm5lY3QiLCJ1c2VBY2NvdW50IiwiSG9tZSIsImlzTmV0d29ya1N3aXRjaEhpZ2hsaWdodGVkIiwic2V0SXNOZXR3b3JrU3dpdGNoSGlnaGxpZ2h0ZWQiLCJpc0Nvbm5lY3RIaWdobGlnaHRlZCIsInNldElzQ29ubmVjdEhpZ2hsaWdodGVkIiwib3BlbiIsImNsb3NlIiwiZGlzY29ubmVjdCIsImFkZHJlc3MiLCJjbG9zZUFsbCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ3M20tYnV0dG9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});