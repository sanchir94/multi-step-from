"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/StepTwo.jsx":
/*!****************************************!*\
  !*** ./src/app/components/StepTwo.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StepTwo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction StepTwo(param) {\n    let { onNext, onBack } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Email: \"\",\n        PhoneNumber: \"\",\n        Password: \"\",\n        ConfirmPassword: \"\"\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const validate = ()=>{\n        const newErrors = {};\n        if (!formData.Email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {\n            newErrors.Email = \"Please provide a valid Email address.\";\n        }\n        if (!formData.PhoneNumber.match(/^\\d{8,8}$/)) {\n            newErrors.PhoneNumber = \"Please enter a valid Phone number.\";\n        }\n        if (!formData.Password.match(/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/)) {}\n        if (formData.ConfirmPassword !== formData.Password) {\n            newErrors.Password = \"Password must include letters and numbers.\";\n            newErrors.ConfirmPassword = \"Passwords do not match. Please try again.\";\n        }\n        setErrors(newErrors);\n        return Object.keys(newErrors).length === 0;\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleNext = ()=>{\n        if (validate()) {\n            onNext(formData);\n        }\n    };\n    const handlePrevious = ()=>{\n        if (validate()) {\n            onBack(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[480px] h-[655px] bg-white p-6 rounded-[8px] shadow-lg text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"Logo3.png\",\n                className: \"w-[60px] h-[60px]\"\n            }, void 0, false, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl mb-4 font-semibold\",\n                children: \"Join Us! \\uD83D\\uDE0E\"\n            }, void 0, false, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-6 text-gray-600\",\n                children: \"Please provide all current information accurately.\"\n            }, void 0, false, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-1\",\n                        children: [\n                            \"Email \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-500\",\n                                children: \"*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"Email\",\n                        value: formData.Email,\n                        onChange: handleChange,\n                        className: \"w-full border p-2 rounded\",\n                        placeholder: \"Placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    errors.Email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm\",\n                        children: errors.Email\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-1\",\n                        children: [\n                            \"Phone number \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-500\",\n                                children: \"*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 24\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"PhoneNumber\",\n                        value: formData.PhoneNumber,\n                        onChange: handleChange,\n                        className: \"w-full border p-2 rounded\",\n                        placeholder: \"Placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    errors.PhoneNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm\",\n                        children: errors.PhoneNumber\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-1\",\n                        children: [\n                            \"Password \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-500\",\n                                children: \"*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 20\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"Password\",\n                        value: formData.Password,\n                        onChange: handleChange,\n                        className: \"w-full border p-2 rounded\",\n                        placeholder: \"Placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    errors.Password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm\",\n                        children: errors.Password\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-1\",\n                        children: [\n                            \"Confirm password \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-red-500\",\n                                children: \"*\"\n                            }, void 0, false, {\n                                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"ConfirmPassword\",\n                        value: formData.ConfirmPassword,\n                        onChange: handleChange,\n                        className: \"w-full border p-2 rounded\",\n                        placeholder: \"Placeholder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    errors.ConfirmPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-sm\",\n                        children: errors.ConfirmPassword\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrevious,\n                        className: \"bg-slate-600 w-[128px] h-[44px]  py-2 rounded disabled:opacity-50 text-black \",\n                        children: \"<back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        className: \"w-[280px] h-[44px] bg-black text-white py-2 rounded disabled:opacity-50\",\n                        children: \"Submit 2/3 >\"\n                    }, void 0, false, {\n                        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/24LP8466/Desktop/multi step from/src/app/components/StepTwo.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(StepTwo, \"moOlJ6VOSAFsMwGIJZaNotlK8GE=\");\n_c = StepTwo;\nvar _c;\n$RefreshReg$(_c, \"StepTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TdGVwVHdvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0UsUUFBUSxLQUFrQjtRQUFsQixFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFsQjs7SUFDOUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3ZDTSxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUV0QyxNQUFNWSxXQUFXO1FBQ2YsTUFBTUMsWUFBWSxDQUFDO1FBRW5CLElBQUksQ0FBQ1QsU0FBU0UsS0FBSyxDQUFDUSxLQUFLLENBQUMsK0JBQStCO1lBQ3ZERCxVQUFVUCxLQUFLLEdBQUc7UUFDcEI7UUFFQSxJQUFJLENBQUNGLFNBQVNHLFdBQVcsQ0FBQ08sS0FBSyxDQUFDLGNBQWM7WUFDNUNELFVBQVVOLFdBQVcsR0FBRztRQUMxQjtRQUVBLElBQUksQ0FBQ0gsU0FBU0ksUUFBUSxDQUFDTSxLQUFLLENBQUMsMkNBQTJDLENBQ3hFO1FBRUEsSUFBSVYsU0FBU0ssZUFBZSxLQUFLTCxTQUFTSSxRQUFRLEVBQUU7WUFDbERLLFVBQVVMLFFBQVEsR0FBRztZQUNyQkssVUFBVUosZUFBZSxHQUFHO1FBQzlCO1FBRUFFLFVBQVVFO1FBQ1YsT0FBT0UsT0FBT0MsSUFBSSxDQUFDSCxXQUFXSSxNQUFNLEtBQUs7SUFDM0M7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2pCLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ2dCLEtBQUssRUFBRUM7UUFBTTtJQUMzQztJQUVBLE1BQU1FLGFBQWE7UUFDakIsSUFBSVgsWUFBWTtZQUNkVixPQUFPRTtRQUNUO0lBQ0Y7SUFDQSxNQUFNb0IsaUJBQWlCO1FBQ3JCLElBQUlaLFlBQVk7WUFDZFQsT0FBT0M7UUFDVDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNxQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlDLEtBQUk7Z0JBQVlGLFdBQVU7Ozs7OzswQkFDL0IsOERBQUNHO2dCQUFHSCxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUM1Qyw4REFBQ0k7Z0JBQUVKLFdBQVU7MEJBQXFCOzs7Ozs7MEJBR2xDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUFNTCxXQUFVOzs0QkFBYTswQ0FDdEIsOERBQUNNO2dDQUFLTixXQUFVOzBDQUFlOzs7Ozs7Ozs7Ozs7a0NBRXZDLDhEQUFDTzt3QkFDQ0MsTUFBSzt3QkFDTGQsTUFBSzt3QkFDTEMsT0FBT2pCLFNBQVNFLEtBQUs7d0JBQ3JCNkIsVUFBVWpCO3dCQUNWUSxXQUFVO3dCQUNWVSxhQUFZOzs7Ozs7b0JBRWIxQixPQUFPSixLQUFLLGtCQUFJLDhEQUFDd0I7d0JBQUVKLFdBQVU7a0NBQXdCaEIsT0FBT0osS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVwRSw4REFBQ21CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQU1MLFdBQVU7OzRCQUFhOzBDQUNmLDhEQUFDTTtnQ0FBS04sV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUU5Qyw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xkLE1BQUs7d0JBQ0xDLE9BQU9qQixTQUFTRyxXQUFXO3dCQUMzQjRCLFVBQVVqQjt3QkFDVlEsV0FBVTt3QkFDVlUsYUFBWTs7Ozs7O29CQUViMUIsT0FBT0gsV0FBVyxrQkFDakIsOERBQUN1Qjt3QkFBRUosV0FBVTtrQ0FBd0JoQixPQUFPSCxXQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNELDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBTUwsV0FBVTs7NEJBQWE7MENBQ25CLDhEQUFDTTtnQ0FBS04sV0FBVTswQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUUxQyw4REFBQ087d0JBQ0NDLE1BQUs7d0JBQ0xkLE1BQUs7d0JBQ0xDLE9BQU9qQixTQUFTSSxRQUFRO3dCQUN4QjJCLFVBQVVqQjt3QkFDVlEsV0FBVTt3QkFDVlUsYUFBWTs7Ozs7O29CQUViMUIsT0FBT0YsUUFBUSxrQkFDZCw4REFBQ3NCO3dCQUFFSixXQUFVO2tDQUF3QmhCLE9BQU9GLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEQsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUFNTCxXQUFVOzs0QkFBYTswQ0FDWCw4REFBQ007Z0NBQUtOLFdBQVU7MENBQWU7Ozs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNPO3dCQUNDQyxNQUFLO3dCQUNMZCxNQUFLO3dCQUNMQyxPQUFPakIsU0FBU0ssZUFBZTt3QkFDL0IwQixVQUFVakI7d0JBQ1ZRLFdBQVU7d0JBQ1ZVLGFBQVk7Ozs7OztvQkFFYjFCLE9BQU9ELGVBQWUsa0JBQ3JCLDhEQUFDcUI7d0JBQUVKLFdBQVU7a0NBQXdCaEIsT0FBT0QsZUFBZTs7Ozs7Ozs7Ozs7OzBCQUcvRCw4REFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1c7d0JBQ0NDLFNBQVNkO3dCQUNURSxXQUFVO2tDQUVUOzs7Ozs7a0NBRUgsOERBQUNXO3dCQUNDQyxTQUFTZjt3QkFDVEcsV0FBVTtrQ0FFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FwSXdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy8yNExQODQ2Ni9EZXNrdG9wL211bHRpIHN0ZXAgZnJvbS9zcmMvYXBwL2NvbXBvbmVudHMvU3RlcFR3by5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXBUd28oeyBvbk5leHQsIG9uQmFjayB9KSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIEVtYWlsOiBcIlwiLFxuICAgIFBob25lTnVtYmVyOiBcIlwiLFxuICAgIFBhc3N3b3JkOiBcIlwiLFxuICAgIENvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge307XG5cbiAgICBpZiAoIWZvcm1EYXRhLkVtYWlsLm1hdGNoKC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvKSkge1xuICAgICAgbmV3RXJyb3JzLkVtYWlsID0gXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIEVtYWlsIGFkZHJlc3MuXCI7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5QaG9uZU51bWJlci5tYXRjaCgvXlxcZHs4LDh9JC8pKSB7XG4gICAgICBuZXdFcnJvcnMuUGhvbmVOdW1iZXIgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFBob25lIG51bWJlci5cIjtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLlBhc3N3b3JkLm1hdGNoKC9eKD89LipbQS1aYS16XSkoPz0uKlxcZClbQS1aYS16XFxkXXs4LH0kLykpIHtcbiAgICB9XG5cbiAgICBpZiAoZm9ybURhdGEuQ29uZmlybVBhc3N3b3JkICE9PSBmb3JtRGF0YS5QYXNzd29yZCkge1xuICAgICAgbmV3RXJyb3JzLlBhc3N3b3JkID0gXCJQYXNzd29yZCBtdXN0IGluY2x1ZGUgbGV0dGVycyBhbmQgbnVtYmVycy5cIjtcbiAgICAgIG5ld0Vycm9ycy5Db25maXJtUGFzc3dvcmQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgfVxuXG4gICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld0Vycm9ycykubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmICh2YWxpZGF0ZSgpKSB7XG4gICAgICBvbk5leHQoZm9ybURhdGEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRlKCkpIHtcbiAgICAgIG9uQmFjayhmb3JtRGF0YSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNDgwcHhdIGgtWzY1NXB4XSBiZy13aGl0ZSBwLTYgcm91bmRlZC1bOHB4XSBzaGFkb3ctbGcgdGV4dC1ibGFja1wiPlxuICAgICAgPGltZyBzcmM9XCJMb2dvMy5wbmdcIiBjbGFzc05hbWU9XCJ3LVs2MHB4XSBoLVs2MHB4XVwiIC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCBmb250LXNlbWlib2xkXCI+Sm9pbiBVcyEg8J+YjjwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi02IHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgUGxlYXNlIHByb3ZpZGUgYWxsIGN1cnJlbnQgaW5mb3JtYXRpb24gYWNjdXJhdGVseS5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMVwiPlxuICAgICAgICAgIEVtYWlsIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiRW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5FbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JzLkVtYWlsICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtXCI+e2Vycm9ycy5FbWFpbH08L3A+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTFcIj5cbiAgICAgICAgICBQaG9uZSBudW1iZXIgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJQaG9uZU51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLlBob25lTnVtYmVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBwLTIgcm91bmRlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvcnMuUGhvbmVOdW1iZXIgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtXCI+e2Vycm9ycy5QaG9uZU51bWJlcn08L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMVwiPlxuICAgICAgICAgIFBhc3N3b3JkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5QYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgcC0yIHJvdW5kZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIlxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JzLlBhc3N3b3JkICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntlcnJvcnMuUGFzc3dvcmR9PC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTFcIj5cbiAgICAgICAgICBDb25maXJtIHBhc3N3b3JkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiQ29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuQ29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBwLTIgcm91bmRlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvcnMuQ29uZmlybVBhc3N3b3JkICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbVwiPntlcnJvcnMuQ29uZmlybVBhc3N3b3JkfTwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS02MDAgdy1bMTI4cHhdIGgtWzQ0cHhdICBweS0yIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCB0ZXh0LWJsYWNrIFwiXG4gICAgICAgID5cbiAgICAgICAgICB7XCI8YmFja1wifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjgwcHhdIGgtWzQ0cHhdIGJnLWJsYWNrIHRleHQtd2hpdGUgcHktMiByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICA+XG4gICAgICAgICAge1wiU3VibWl0IDIvMyA+XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0ZXBUd28iLCJvbk5leHQiLCJvbkJhY2siLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiRW1haWwiLCJQaG9uZU51bWJlciIsIlBhc3N3b3JkIiwiQ29uZmlybVBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidmFsaWRhdGUiLCJuZXdFcnJvcnMiLCJtYXRjaCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXZpb3VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDIiLCJwIiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/StepTwo.jsx\n"));

/***/ })

});