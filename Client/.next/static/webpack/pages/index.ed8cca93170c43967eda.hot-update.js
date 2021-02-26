webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/Navbar/Navbar.elements.js":
/*!**************************************************!*\
  !*** ./src/Components/Navbar/Navbar.elements.js ***!
  \**************************************************/
/*! exports provided: NavbarWrapper, TabWrapper, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavbarWrapper\", function() { return NavbarWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TabWrapper\", function() { return TabWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLink\", function() { return NavLink; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalStyles */ \"./src/globalStyles.js\");\n\n\nvar _jsxFileName = \"/home/caesar/Projects/Chess/Client/src/Components/Navbar/Navbar.elements.js\",\n    _this = undefined;\n\n\n\n\n\nvar StyledLink = function StyledLink(_ref) {\n  var as = _ref.as,\n      children = _ref.children,\n      className = _ref.className,\n      href = _ref.href;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: href,\n    as: as,\n    passHref: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: className,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = StyledLink;\nvar NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Navbarelements__NavbarWrapper\",\n  componentId: \"sc-1mgbdqc-0\"\n})([\"background-color:#fff;position:fixed;top:0;height:75px;width:100%;padding:0% 0% 10% 0%;z-index:999;\"]);\nvar TabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Navbarelements__TabWrapper\",\n  componentId: \"sc-1mgbdqc-1\"\n})([\"position:fixed;top:0;display:flex;justify-content:space-around;width:100%;padding-bottom:10px;\"]);\nvar NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(StyledLink).withConfig({\n  displayName: \"Navbarelements__NavLink\",\n  componentId: \"sc-1mgbdqc-2\"\n})([\"\", \"\"], function (_ref2) {\n  var active = _ref2.active;\n  return active && \"\\n        border-bottom: 6px solid \".concat(_globalStyles__WEBPACK_IMPORTED_MODULE_3__[\"Theme\"].purple, \";\\n        border-bottom-left-radius: 10%;\\n        border-bottom-right-radius: 10%;\\n    \");\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"StyledLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5lbGVtZW50cy5qcz8yMWU2Il0sIm5hbWVzIjpbIlN0eWxlZExpbmsiLCJhcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIk5hdmJhcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJUYWJXcmFwcGVyIiwiTmF2TGluayIsImFjdGl2ZSIsIlRoZW1lIiwicHVycGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxRQUFQLFFBQU9BLFFBQVA7QUFBQSxNQUFpQkMsU0FBakIsUUFBaUJBLFNBQWpCO0FBQUEsTUFBNEJDLElBQTVCLFFBQTRCQSxJQUE1QjtBQUFBLHNCQUNmLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFaO0FBQWtCLE1BQUUsRUFBRUgsRUFBdEI7QUFBMEIsWUFBUSxNQUFsQztBQUFBLDJCQUNJO0FBQUcsZUFBUyxFQUFFRSxTQUFkO0FBQUEsZ0JBQTBCRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBbkI7O0tBQU1GLFU7QUFPQyxJQUFNSyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkdBQW5CO0FBVUEsSUFBTUMsVUFBVSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNHQUFoQjtBQVlBLElBQU1FLE9BQU8sR0FBR0gsaUVBQU0sQ0FBQ04sVUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGFBQ2Q7QUFBQSxNQUFHVSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBTSxpREFDT0MsbURBQUssQ0FBQ0MsTUFEYiwrRkFBdEI7QUFBQSxDQURjLENBQWIiLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmVsZW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBUaGVtZSwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZ2xvYmFsU3R5bGVzJ1xuXG5jb25zdCBTdHlsZWRMaW5rID0gKHsgYXMsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWYgfSkgPT4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXthc30gcGFzc0hyZWY+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTGluaz5cbilcblxuXG5leHBvcnQgY29uc3QgTmF2YmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwJSAwJSAxMCUgMCU7XG4gICAgei1pbmRleDogOTk5O1xuYFxuXG5leHBvcnQgY29uc3QgVGFiV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuYFxuXG5cblxuXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHN0eWxlZChTdHlsZWRMaW5rKWBcbiAgICAkeyh7IGFjdGl2ZSB9KSA9PiBhY3RpdmUgJiYgYFxuICAgICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgJHtUaGVtZS5wdXJwbGV9O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMCU7XG4gICAgYH1cblxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Navbar/Navbar.elements.js\n");

/***/ })

})