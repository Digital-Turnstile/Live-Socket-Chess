webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/Components/Navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopNavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/dist/index.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_local_storage_state__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalStyles */ \"./src/globalStyles.js\");\n/* harmony import */ var _Navbar_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Navbar.elements */ \"./src/Components/Navbar/Navbar.elements.js\");\n\nvar _jsxFileName = \"/home/caesar/Projects/Chess/Client/src/Components/Navbar/Navbar.js\";\n\n\n\n\n\n\n\nfunction TopNavBar(_ref) {\n  var activeTab = _ref.activeTab;\n\n  function Tab(_ref2) {\n    var icon = _ref2.icon,\n        name = _ref2.name;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconContext\"].Provider, {\n      value: {\n        color: _globalStyles__WEBPACK_IMPORTED_MODULE_6__[\"Theme\"].darkPurple,\n        size: '36'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navbar_elements__WEBPACK_IMPORTED_MODULE_7__[\"NavLink\"], {\n        href: '/' + name,\n        active: activeTab ? activeTab == name : false,\n        children: icon\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navbar_elements__WEBPACK_IMPORTED_MODULE_7__[\"NavbarWrapper\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navbar_elements__WEBPACK_IMPORTED_MODULE_7__[\"TabWrapper\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tab, {\n        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__[\"IoTrophySharp\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 24\n        }, this),\n        name: \"goals\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tab, {\n        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__[\"IoCompassSharp\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 24\n        }, this),\n        name: \"dashboard\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tab, {\n        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__[\"GiWeightLiftingUp\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 24\n        }, this),\n        name: \"workouts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 12\n  }, this);\n}\n_c = TopNavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"TopNavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qcz81YjIyIl0sIm5hbWVzIjpbIlRvcE5hdkJhciIsImFjdGl2ZVRhYiIsIlRhYiIsImljb24iLCJuYW1lIiwiY29sb3IiLCJUaGVtZSIsImRhcmtQdXJwbGUiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9lLFNBQVNBLFNBQVQsT0FBZ0M7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0FBQzNDLFdBQVNDLEdBQVQsUUFBNkI7QUFBQSxRQUFkQyxJQUFjLFNBQWRBLElBQWM7QUFBQSxRQUFSQyxJQUFRLFNBQVJBLElBQVE7QUFDekIsd0JBQU8scUVBQUMsdURBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUVDLG1EQUFLLENBQUNDLFVBQWY7QUFBMkJDLFlBQUksRUFBRTtBQUFqQyxPQUE3QjtBQUFBLDZCQUNILHFFQUFDLHdEQUFEO0FBQVMsWUFBSSxFQUFFLE1BQU1KLElBQXJCO0FBQTJCLGNBQU0sRUFBRUgsU0FBUyxHQUFJQSxTQUFTLElBQUlHLElBQWpCLEdBQXdCLEtBQXBFO0FBQUEsa0JBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUtIOztBQUlELHNCQUFPLHFFQUFDLDhEQUFEO0FBQUEsMkJBQ0gscUVBQUMsMkRBQUQ7QUFBQSw4QkFDSSxxRUFBQyxHQUFEO0FBQUssWUFBSSxlQUFFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVg7QUFBOEIsWUFBSSxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLEdBQUQ7QUFBSyxZQUFJLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWDtBQUErQixZQUFJLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMsR0FBRDtBQUFLLFlBQUksZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFYO0FBQWtDLFlBQUksRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBT0g7S0FsQnVCSCxTIiwiZmlsZSI6Ii4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJb0NvbXBhc3NTaGFycCwgSW9Ucm9waHlTaGFycCB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcbmltcG9ydCB7IEdpV2VpZ2h0TGlmdGluZ1VwIH0gZnJvbSAncmVhY3QtaWNvbnMvZ2knXG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gXCJyZWFjdC1pY29uc1wiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZVN0YXRlIGZyb20gJ3VzZS1sb2NhbC1zdG9yYWdlLXN0YXRlJ1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL2dsb2JhbFN0eWxlcydcbmltcG9ydCB7XG4gICAgTmF2YmFyV3JhcHBlcixcbiAgICBUYWJXcmFwcGVyLFxuICAgIE5hdkxpbmtcbn0gZnJvbSAnLi9OYXZiYXIuZWxlbWVudHMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2QmFyKHthY3RpdmVUYWJ9KSB7XG4gICAgZnVuY3Rpb24gVGFiKHsgaWNvbiwgbmFtZSB9KSB7XG4gICAgICAgIHJldHVybiA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29sb3I6IFRoZW1lLmRhcmtQdXJwbGUsIHNpemU6ICczNicgfX0+XG4gICAgICAgICAgICA8TmF2TGluayBocmVmPXsnLycgKyBuYW1lfSBhY3RpdmU9e2FjdGl2ZVRhYiAgPyBhY3RpdmVUYWIgPT0gbmFtZSA6IGZhbHNlfT5cbiAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9JY29uQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIDxOYXZiYXJXcmFwcGVyPlxuICAgICAgICA8VGFiV3JhcHBlcj5cbiAgICAgICAgICAgIDxUYWIgaWNvbj17PElvVHJvcGh5U2hhcnAgLz59IG5hbWU9J2dvYWxzJy8+XG4gICAgICAgICAgICA8VGFiIGljb249ezxJb0NvbXBhc3NTaGFycCAvPn0gbmFtZT0nZGFzaGJvYXJkJy8+XG4gICAgICAgICAgICA8VGFiIGljb249ezxHaVdlaWdodExpZnRpbmdVcCAvPn0gbmFtZT0nd29ya291dHMnIC8+XG4gICAgICAgIDwvVGFiV3JhcHBlcj5cbiAgICA8L05hdmJhcldyYXBwZXI+XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Navbar/Navbar.js\n");

/***/ })

})