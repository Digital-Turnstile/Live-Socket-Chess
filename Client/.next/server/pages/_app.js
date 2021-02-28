module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/globalStyles */ \"./src/globalStyles.jsx\");\n/* harmony import */ var _src_Contexts_ChessContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Contexts/ChessContext */ \"./src/Contexts/ChessContext.jsx\");\n\n\nvar _jsxFileName = \"/home/caesar/Projects/Chess/Client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_globalStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_Contexts_ChessContext__WEBPACK_IMPORTED_MODULE_3__[\"ChessProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n        theme: _src_globalStyles__WEBPACK_IMPORTED_MODULE_2__[\"Theme\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHdFQUFEO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBZSxhQUFLLEVBQUVDLHVEQUF0QjtBQUFBLCtCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVVEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgR2xvYmFsU3R5bGUsIHsgVGhlbWUgfSBmcm9tICcuLi9zcmMvZ2xvYmFsU3R5bGVzJ1xuaW1wb3J0IHsgQ2hlc3NQcm92aWRlciB9IGZyb20gJy4uL3NyYy9Db250ZXh0cy9DaGVzc0NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Q2hlc3NQcm92aWRlcj5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e1RoZW1lfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvQ2hlc3NQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/Contexts/ChessContext.jsx":
/*!***************************************!*\
  !*** ./src/Contexts/ChessContext.jsx ***!
  \***************************************/
/*! exports provided: ChessProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChessProvider\", function() { return ChessProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-local-storage-state */ \"use-local-storage-state\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_local_storage_state__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Services_StartGameService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/StartGameService */ \"./src/Services/StartGameService.jsx\");\n\nvar _jsxFileName = \"/home/caesar/Projects/Chess/Client/src/Contexts/ChessContext.jsx\";\n\n\n\nconst ChessContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nconst ChessProvider = props => {\n  const {\n    0: board,\n    1: setBoard\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: turn,\n    1: setTurn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: highlight,\n    1: setHighlight\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-1);\n  /* let square = {\n          tile: (i + 1) % 2, // black or white tile\n          piece: 'none', // [pawn, queen, king, rook, bishop, knight, none]\n          color: 'none', // who it belongs to\n          file: (i % 8) + 1, //up and down [columns]\n          rank: 8 - Math.floor(i / 8), //left and right [rows]\n          highlight: false //is it selected by the user (should it be highlighted)?\n      }\n  */\n  //Whenever you load the page\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    //make an array of 64 and initialize it all to zero (in js it initialized to undefined)\n    let arr = new Array(64);\n    arr.fill(0); //sends the new array to the \"makeCheckerBoard\" service which makes a checkerboard\n\n    const newCheckerBoard = _Services_StartGameService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].makeCheckerboard(arr);\n    const newChessBoard = _Services_StartGameService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].makeChessboard(newCheckerBoard);\n    setBoard(newChessBoard);\n  }, []); //set highlight of a piece\n\n  const select = index => {\n    var _board$index;\n\n    //set the highlight unless there is no piece there\n    if (((_board$index = board[index]) === null || _board$index === void 0 ? void 0 : _board$index.piece) != 'none' || index == -1) setHighlight(index);\n  }; //Moves the piece based upon its location, and the type of piece\n\n\n  const move = (index, type, row, file) => {\n    //make a shallow copy of board so that we can mutate the object properites directly\n    const newBoard = [...board]; //The old square we are currently at\n\n    const oldSquare = newBoard[highlight];\n    const {\n      color,\n      piece\n    } = oldSquare; //remove piece and color from oldSquare\n\n    oldSquare.piece = 'none';\n    oldSquare.piece = 'none'; //The new square where we are moving to\n\n    const newSquare = newBoard[index];\n    newSquare.piece = piece;\n    newSquare.color = color;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChessContext.Provider, {\n    value: {\n      //data members\n      board,\n      turn,\n      highlight,\n      //methods\n      select,\n      move\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChessContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29udGV4dHMvQ2hlc3NDb250ZXh0LmpzeD9lODY3Il0sIm5hbWVzIjpbIkNoZXNzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkNoZXNzUHJvdmlkZXIiLCJwcm9wcyIsImJvYXJkIiwic2V0Qm9hcmQiLCJ1c2VTdGF0ZSIsInR1cm4iLCJzZXRUdXJuIiwiaGlnaGxpZ2h0Iiwic2V0SGlnaGxpZ2h0IiwidXNlRWZmZWN0IiwiYXJyIiwiQXJyYXkiLCJmaWxsIiwibmV3Q2hlY2tlckJvYXJkIiwiU3RhcnRHYW1lU2VydmljZSIsIm1ha2VDaGVja2VyYm9hcmQiLCJuZXdDaGVzc0JvYXJkIiwibWFrZUNoZXNzYm9hcmQiLCJzZWxlY3QiLCJpbmRleCIsInBpZWNlIiwibW92ZSIsInR5cGUiLCJyb3ciLCJmaWxlIiwibmV3Qm9hcmQiLCJvbGRTcXVhcmUiLCJjb2xvciIsIm5ld1NxdWFyZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBckI7QUFFTyxNQUFNQyxhQUFhLEdBQUdDLEtBQUssSUFBSTtBQUNsQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxDQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSixzREFBUSxDQUFDLENBQUMsQ0FBRixDQUExQztBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdJOztBQUNBSyx5REFBUyxDQUFDLE1BQU07QUFDWjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixDQUFWO0FBQ0FELE9BQUcsQ0FBQ0UsSUFBSixDQUFTLENBQVQsRUFIWSxDQUlaOztBQUNBLFVBQU1DLGVBQWUsR0FBR0Msa0VBQWdCLENBQUNDLGdCQUFqQixDQUFrQ0wsR0FBbEMsQ0FBeEI7QUFDQSxVQUFNTSxhQUFhLEdBQUdGLGtFQUFnQixDQUFDRyxjQUFqQixDQUFnQ0osZUFBaEMsQ0FBdEI7QUFDQVYsWUFBUSxDQUFDYSxhQUFELENBQVI7QUFDSCxHQVJRLEVBUU4sRUFSTSxDQUFULENBakJrQyxDQTRCbEM7O0FBQ0EsUUFBTUUsTUFBTSxHQUFHQyxLQUFLLElBQUk7QUFBQTs7QUFDcEI7QUFDQSxRQUFJLGlCQUFBakIsS0FBSyxDQUFDaUIsS0FBRCxDQUFMLDhEQUFjQyxLQUFkLEtBQXVCLE1BQXZCLElBQWlDRCxLQUFLLElBQUksQ0FBQyxDQUEvQyxFQUNJWCxZQUFZLENBQUNXLEtBQUQsQ0FBWjtBQUNQLEdBSkQsQ0E3QmtDLENBb0NsQzs7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHLENBQUNGLEtBQUQsRUFBUUcsSUFBUixFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixLQUE0QjtBQUNyQztBQUNBLFVBQU1DLFFBQVEsR0FBRyxDQUFDLEdBQUd2QixLQUFKLENBQWpCLENBRnFDLENBR3JDOztBQUNBLFVBQU13QixTQUFTLEdBQUdELFFBQVEsQ0FBQ2xCLFNBQUQsQ0FBMUI7QUFDQSxVQUFNO0FBQUNvQixXQUFEO0FBQVFQO0FBQVIsUUFBaUJNLFNBQXZCLENBTHFDLENBT3JDOztBQUNBQSxhQUFTLENBQUNOLEtBQVYsR0FBa0IsTUFBbEI7QUFDQU0sYUFBUyxDQUFDTixLQUFWLEdBQWtCLE1BQWxCLENBVHFDLENBV3JDOztBQUNBLFVBQU1RLFNBQVMsR0FBR0gsUUFBUSxDQUFDTixLQUFELENBQTFCO0FBQ0FTLGFBQVMsQ0FBQ1IsS0FBVixHQUFrQkEsS0FBbEI7QUFDQVEsYUFBUyxDQUFDRCxLQUFWLEdBQWtCQSxLQUFsQjtBQUNILEdBZkQ7O0FBaUJBLHNCQUNJLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUMxQjtBQUNBekIsV0FGMEI7QUFFbkJHLFVBRm1CO0FBRWJFLGVBRmE7QUFHMUI7QUFDQVcsWUFKMEI7QUFJbEJHO0FBSmtCLEtBQTlCO0FBQUEsY0FNS3BCLEtBQUssQ0FBQzRCO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUgsQ0FoRU07QUFrRVFoQywyRUFBZiIsImZpbGUiOiIuL3NyYy9Db250ZXh0cy9DaGVzc0NvbnRleHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSAndXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUnXG5pbXBvcnQgU3RhcnRHYW1lU2VydmljZSBmcm9tICcuLi9TZXJ2aWNlcy9TdGFydEdhbWVTZXJ2aWNlJ1xuXG5jb25zdCBDaGVzc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBDaGVzc1Byb3ZpZGVyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0dXJuLCBzZXRUdXJuXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtoaWdobGlnaHQsIHNldEhpZ2hsaWdodF0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgICAvKiBsZXQgc3F1YXJlID0ge1xuICAgICAgICAgICAgdGlsZTogKGkgKyAxKSAlIDIsIC8vIGJsYWNrIG9yIHdoaXRlIHRpbGVcbiAgICAgICAgICAgIHBpZWNlOiAnbm9uZScsIC8vIFtwYXduLCBxdWVlbiwga2luZywgcm9vaywgYmlzaG9wLCBrbmlnaHQsIG5vbmVdXG4gICAgICAgICAgICBjb2xvcjogJ25vbmUnLCAvLyB3aG8gaXQgYmVsb25ncyB0b1xuICAgICAgICAgICAgZmlsZTogKGkgJSA4KSArIDEsIC8vdXAgYW5kIGRvd24gW2NvbHVtbnNdXG4gICAgICAgICAgICByYW5rOiA4IC0gTWF0aC5mbG9vcihpIC8gOCksIC8vbGVmdCBhbmQgcmlnaHQgW3Jvd3NdXG4gICAgICAgICAgICBoaWdobGlnaHQ6IGZhbHNlIC8vaXMgaXQgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgKHNob3VsZCBpdCBiZSBoaWdobGlnaHRlZCk/XG4gICAgICAgIH1cbiAgICAqL1xuXG5cbiAgICAvL1doZW5ldmVyIHlvdSBsb2FkIHRoZSBwYWdlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9tYWtlIGFuIGFycmF5IG9mIDY0IGFuZCBpbml0aWFsaXplIGl0IGFsbCB0byB6ZXJvIChpbiBqcyBpdCBpbml0aWFsaXplZCB0byB1bmRlZmluZWQpXG4gICAgICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoNjQpO1xuICAgICAgICBhcnIuZmlsbCgwKVxuICAgICAgICAvL3NlbmRzIHRoZSBuZXcgYXJyYXkgdG8gdGhlIFwibWFrZUNoZWNrZXJCb2FyZFwiIHNlcnZpY2Ugd2hpY2ggbWFrZXMgYSBjaGVja2VyYm9hcmRcbiAgICAgICAgY29uc3QgbmV3Q2hlY2tlckJvYXJkID0gU3RhcnRHYW1lU2VydmljZS5tYWtlQ2hlY2tlcmJvYXJkKGFycik7XG4gICAgICAgIGNvbnN0IG5ld0NoZXNzQm9hcmQgPSBTdGFydEdhbWVTZXJ2aWNlLm1ha2VDaGVzc2JvYXJkKG5ld0NoZWNrZXJCb2FyZCk7XG4gICAgICAgIHNldEJvYXJkKG5ld0NoZXNzQm9hcmQpXG4gICAgfSwgW10pXG5cblxuICAgIC8vc2V0IGhpZ2hsaWdodCBvZiBhIHBpZWNlXG4gICAgY29uc3Qgc2VsZWN0ID0gaW5kZXggPT4ge1xuICAgICAgICAvL3NldCB0aGUgaGlnaGxpZ2h0IHVubGVzcyB0aGVyZSBpcyBubyBwaWVjZSB0aGVyZVxuICAgICAgICBpZiAoYm9hcmRbaW5kZXhdPy5waWVjZSAhPSAnbm9uZScgfHwgaW5kZXggPT0gLTEpXG4gICAgICAgICAgICBzZXRIaWdobGlnaHQoaW5kZXgpOyAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvL01vdmVzIHRoZSBwaWVjZSBiYXNlZCB1cG9uIGl0cyBsb2NhdGlvbiwgYW5kIHRoZSB0eXBlIG9mIHBpZWNlXG4gICAgY29uc3QgbW92ZSA9IChpbmRleCwgdHlwZSwgcm93LCBmaWxlKSA9PiB7XG4gICAgICAgIC8vbWFrZSBhIHNoYWxsb3cgY29weSBvZiBib2FyZCBzbyB0aGF0IHdlIGNhbiBtdXRhdGUgdGhlIG9iamVjdCBwcm9wZXJpdGVzIGRpcmVjdGx5XG4gICAgICAgIGNvbnN0IG5ld0JvYXJkID0gWy4uLmJvYXJkXVxuICAgICAgICAvL1RoZSBvbGQgc3F1YXJlIHdlIGFyZSBjdXJyZW50bHkgYXRcbiAgICAgICAgY29uc3Qgb2xkU3F1YXJlID0gbmV3Qm9hcmRbaGlnaGxpZ2h0XVxuICAgICAgICBjb25zdCB7Y29sb3IsIHBpZWNlfSA9IG9sZFNxdWFyZTtcblxuICAgICAgICAvL3JlbW92ZSBwaWVjZSBhbmQgY29sb3IgZnJvbSBvbGRTcXVhcmVcbiAgICAgICAgb2xkU3F1YXJlLnBpZWNlID0gJ25vbmUnXG4gICAgICAgIG9sZFNxdWFyZS5waWVjZSA9ICdub25lJ1xuXG4gICAgICAgIC8vVGhlIG5ldyBzcXVhcmUgd2hlcmUgd2UgYXJlIG1vdmluZyB0b1xuICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBuZXdCb2FyZFtpbmRleF1cbiAgICAgICAgbmV3U3F1YXJlLnBpZWNlID0gcGllY2VcbiAgICAgICAgbmV3U3F1YXJlLmNvbG9yID0gY29sb3JcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxDaGVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIC8vZGF0YSBtZW1iZXJzXG4gICAgICAgICAgICBib2FyZCwgdHVybiwgaGlnaGxpZ2h0LFxuICAgICAgICAgICAgLy9tZXRob2RzXG4gICAgICAgICAgICBzZWxlY3QsIG1vdmVcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQ2hlc3NDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlc3NDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Contexts/ChessContext.jsx\n");

/***/ }),

/***/ "./src/Services/StartGameService.jsx":
/*!*******************************************!*\
  !*** ./src/Services/StartGameService.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  //converts empty array into a checkerboard\n  makeCheckerboard: board => {\n    let checkerBoard = [];\n    board.map((s, i) => {\n      let square = {\n        tile: (i + 1) % 2,\n        piece: 'none',\n        color: 'none',\n        //up and down [columns]\n        file: i % 8 + 1,\n        //left and right [rows]\n        rank: 8 - Math.floor(i / 8)\n      };\n      if (Math.floor(i / 8) % 2) square.tile = (i + 0) % 2;\n      checkerBoard[i] = square;\n    });\n    return checkerBoard;\n  },\n  //converts checkerboard into a chessboard with pieces in start position\n  makeChessboard: board => {\n    board.map(piece => {\n      //sets pawns\n      if (piece.rank == 2) {\n        piece.piece = 'pawn';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 7) {\n        piece.piece = 'pawn';\n        piece.color = 'dark';\n      }\n\n      if (piece.rank == 1 && (piece.file == 1 || piece.file == 8)) {\n        piece.piece = 'rook';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 8 && (piece.file == 1 || piece.file == 8)) {\n        piece.piece = 'rook';\n        piece.color = 'dark';\n      }\n\n      if (piece.rank == 1 && (piece.file == 2 || piece.file == 7)) {\n        piece.piece = 'night';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 8 && (piece.file == 2 || piece.file == 7)) {\n        piece.piece = 'night';\n        piece.color = 'dark';\n      }\n\n      if (piece.rank == 1 && (piece.file == 3 || piece.file == 6)) {\n        piece.piece = 'bishop';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 8 && (piece.file == 3 || piece.file == 6)) {\n        piece.piece = 'bishop';\n        piece.color = 'dark';\n      }\n\n      if (piece.rank == 1 && piece.file == 4) {\n        piece.piece = 'queen';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 8 && piece.file == 4) {\n        piece.piece = 'queen';\n        piece.color = 'dark';\n      }\n\n      if (piece.rank == 1 && piece.file == 5) {\n        piece.piece = 'king';\n        piece.color = 'light';\n      }\n\n      if (piece.rank == 8 && piece.file == 5) {\n        piece.piece = 'king';\n        piece.color = 'dark';\n      }\n    });\n    return board;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvU3RhcnRHYW1lU2VydmljZS5qc3g/OWNmNSJdLCJuYW1lcyI6WyJtYWtlQ2hlY2tlcmJvYXJkIiwiYm9hcmQiLCJjaGVja2VyQm9hcmQiLCJtYXAiLCJzIiwiaSIsInNxdWFyZSIsInRpbGUiLCJwaWVjZSIsImNvbG9yIiwiZmlsZSIsInJhbmsiLCJNYXRoIiwiZmxvb3IiLCJtYWtlQ2hlc3Nib2FyZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNYO0FBQ0FBLGtCQUFnQixFQUFFQyxLQUFLLElBQUk7QUFDdkIsUUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0FELFNBQUssQ0FBQ0UsR0FBTixDQUFVLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ2hCLFVBQUlDLE1BQU0sR0FBRztBQUNUQyxZQUFJLEVBQUUsQ0FBQ0YsQ0FBQyxHQUFHLENBQUwsSUFBVSxDQURQO0FBRVRHLGFBQUssRUFBRSxNQUZFO0FBR1RDLGFBQUssRUFBRSxNQUhFO0FBSVQ7QUFDQUMsWUFBSSxFQUFHTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBTFA7QUFNVDtBQUNBTSxZQUFJLEVBQUUsSUFBSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdSLENBQUMsR0FBRyxDQUFmO0FBUEQsT0FBYjtBQVNBLFVBQUlPLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUcsQ0FBZixJQUFvQixDQUF4QixFQUNJQyxNQUFNLENBQUNDLElBQVAsR0FBYyxDQUFDRixDQUFDLEdBQUcsQ0FBTCxJQUFVLENBQXhCO0FBQ0pILGtCQUFZLENBQUNHLENBQUQsQ0FBWixHQUFrQkMsTUFBbEI7QUFDSCxLQWJEO0FBY0EsV0FBT0osWUFBUDtBQUNILEdBbkJVO0FBb0JYO0FBQ0FZLGdCQUFjLEVBQUViLEtBQUssSUFBSTtBQUNyQkEsU0FBSyxDQUFDRSxHQUFOLENBQVVLLEtBQUssSUFBSTtBQUNmO0FBQ0EsVUFBSUEsS0FBSyxDQUFDRyxJQUFOLElBQWMs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SCxLQUFLLENBQUNFLElBQU4sSUFBYyxDQUFyQyxFQUF3QztBQUNwQ0YsYUFBSyxDQUFDQSxLQUFOLEdBQWMsTUFBZDtBQUNBQSxhQUFLLENBQUNDLEtBQU4sR0FBYyxNQUFkO0FBQ0g7QUFDSixLQTdERDtBQThEQSxXQUFPUixLQUFQO0FBQ0g7QUFyRlUsQ0FBZiIsImZpbGUiOiIuL3NyYy9TZXJ2aWNlcy9TdGFydEdhbWVTZXJ2aWNlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAvL2NvbnZlcnRzIGVtcHR5IGFycmF5IGludG8gYSBjaGVja2VyYm9hcmRcbiAgICBtYWtlQ2hlY2tlcmJvYXJkOiBib2FyZCA9PiB7XG4gICAgICAgIGxldCBjaGVja2VyQm9hcmQgPSBbXTtcbiAgICAgICAgYm9hcmQubWFwKChzLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0ge1xuICAgICAgICAgICAgICAgIHRpbGU6IChpICsgMSkgJSAyLFxuICAgICAgICAgICAgICAgIHBpZWNlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdub25lJyxcbiAgICAgICAgICAgICAgICAvL3VwIGFuZCBkb3duIFtjb2x1bW5zXVxuICAgICAgICAgICAgICAgIGZpbGU6IChpICUgOCkgKyAxLFxuICAgICAgICAgICAgICAgIC8vbGVmdCBhbmQgcmlnaHQgW3Jvd3NdXG4gICAgICAgICAgICAgICAgcmFuazogOCAtIE1hdGguZmxvb3IoaSAvIDgpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoaSAvIDgpICUgMilcbiAgICAgICAgICAgICAgICBzcXVhcmUudGlsZSA9IChpICsgMCkgJSAyXG4gICAgICAgICAgICBjaGVja2VyQm9hcmRbaV0gPSBzcXVhcmVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNoZWNrZXJCb2FyZFxuICAgIH0sXG4gICAgLy9jb252ZXJ0cyBjaGVja2VyYm9hcmQgaW50byBhIGNoZXNzYm9hcmQgd2l0aCBwaWVjZXMgaW4gc3RhcnQgcG9zaXRpb25cbiAgICBtYWtlQ2hlc3Nib2FyZDogYm9hcmQgPT4ge1xuICAgICAgICBib2FyZC5tYXAocGllY2UgPT4ge1xuICAgICAgICAgICAgLy9zZXRzIHBhd25zXG4gICAgICAgICAgICBpZiAocGllY2UucmFuayA9PSAyKSB7XG4gICAgICAgICAgICAgICAgcGllY2UucGllY2UgPSAncGF3bidcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdsaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gNykge1xuICAgICAgICAgICAgICAgIHBpZWNlLnBpZWNlID0gJ3Bhd24nXG4gICAgICAgICAgICAgICAgcGllY2UuY29sb3IgPSAnZGFyaydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gMSAmJiAocGllY2UuZmlsZSA9PSAxIHx8IHBpZWNlLmZpbGUgPT0gOCkpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICdyb29rJ1xuICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yID0gJ2xpZ2h0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGllY2UucmFuayA9PSA4ICYmIChwaWVjZS5maWxlID09IDEgfHwgcGllY2UuZmlsZSA9PSA4KSkge1xuICAgICAgICAgICAgICAgIHBpZWNlLnBpZWNlID0gJ3Jvb2snXG4gICAgICAgICAgICAgICAgcGllY2UuY29sb3IgPSAnZGFyaydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gMSAmJiAocGllY2UuZmlsZSA9PSAyIHx8IHBpZWNlLmZpbGUgPT0gNykpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICduaWdodCdcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdsaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gOCAmJiAocGllY2UuZmlsZSA9PSAyIHx8IHBpZWNlLmZpbGUgPT0gNykpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICduaWdodCdcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdkYXJrJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGllY2UucmFuayA9PSAxICYmIChwaWVjZS5maWxlID09IDMgfHwgcGllY2UuZmlsZSA9PSA2KSkge1xuICAgICAgICAgICAgICAgIHBpZWNlLnBpZWNlID0gJ2Jpc2hvcCdcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdsaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gOCAmJiAocGllY2UuZmlsZSA9PSAzIHx8IHBpZWNlLmZpbGUgPT0gNikpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICdiaXNob3AnXG4gICAgICAgICAgICAgICAgcGllY2UuY29sb3IgPSAnZGFyaydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gMSAmJiBwaWVjZS5maWxlID09IDQpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICdxdWVlbidcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdsaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBpZWNlLnJhbmsgPT0gOCAmJiBwaWVjZS5maWxlID09IDQpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5waWVjZSA9ICdxdWVlbidcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdkYXJrJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGllY2UucmFuayA9PSAxICYmIHBpZWNlLmZpbGUgPT0gNSkge1xuICAgICAgICAgICAgICAgIHBpZWNlLnBpZWNlID0gJ2tpbmcnXG4gICAgICAgICAgICAgICAgcGllY2UuY29sb3IgPSAnbGlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwaWVjZS5yYW5rID09IDggJiYgcGllY2UuZmlsZSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgcGllY2UucGllY2UgPSAna2luZydcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciA9ICdkYXJrJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/StartGameService.jsx\n");

/***/ }),

/***/ "./src/globalStyles.jsx":
/*!******************************!*\
  !*** ./src/globalStyles.jsx ***!
  \******************************/
/*! exports provided: Container, Button, Theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Theme\", function() { return Theme; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  user-select: none;\n  -moz-user-select: none;\n  \n  body {\n    background: #f1f1f1\n  } \n   \n  body::-webkit-scrollbar {\n    width: 8px;\n  }\n  \n  body::-webkit-scrollbar-track {\n    background: #1c1e32;\n  }\n  \n  body::-webkit-scrollbar-thumb {\n    background: #696fff;\n    border-radius: 10px;\n  }\n  body\n{\n  overscroll-behavior-y: contain;\n}\n } \n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"globalStyles__Container\",\n  componentId: \"sc-160h1zp-0\"\n})([\"z-index:1;width:100%;margin-right:auto;margin-left:auto;\"]);\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"globalStyles__Button\",\n  componentId: \"sc-160h1zp-1\"\n})([\"border-radius:4px;background:#767ED9;white-space:nowrap;padding:\", \";color:#fff;font-size:\", \";outline:none;border:none;cursor:pointer;box-shadow:2px 5px 5px 0px  #767ED990;&:hover{transition:all 0.01s ease-out;box-shadow:inset 0 0 5px #1c1e32;}\"], ({\n  big\n}) => big ? '12px 64px' : '10px 20px', ({\n  fontBig\n}) => fontBig ? '20px' : '16px');\nconst Theme = {\n  purple: '#767ED9',\n  darkPurple: '#1c1e32'\n  /*   background: '#1c1e32',\n    success: '#38D86A',\n    error: '#e6565e' */\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsU3R5bGVzLmpzP2JkZTciXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkJ1dHRvbiIsImJ1dHRvbiIsImJpZyIsImZvbnRCaWciLCJUaGVtZSIsInB1cnBsZSIsImRhcmtQdXJwbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUJBO0FBaUNPLE1BQU1DLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnRUFBZjtBQU9BLE1BQU1DLE1BQU0sR0FBR0Ysd0RBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSw4UEFJTixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjQSxHQUFHLEdBQUcsV0FBSCxHQUFpQixXQUo1QixFQU1KLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCQSxPQUFPLEdBQUcsTUFBSCxHQUFZLE1BTmpDLENBQVo7QUFvQkEsTUFBTUMsS0FBSyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUsU0FEVztBQUVuQkMsWUFBVSxFQUFFO0FBRVo7QUFDRjtBQUNBOztBQU5xQixDQUFkO0FBVVFYLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2dsb2JhbFN0eWxlcy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjFcbiAgfSBcbiAgIFxuICBib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDtcbiAgfVxuICBcbiAgYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMxYzFlMzI7XG4gIH1cbiAgXG4gIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjk2ZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgYm9keVxue1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IGNvbnRhaW47XG59XG4gfSBcbmA7XG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzc2N0VEOTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogJHsoeyBiaWcgfSkgPT4gKGJpZyA/ICcxMnB4IDY0cHgnIDogJzEwcHggMjBweCcpfTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogJHsoeyBmb250QmlnIH0pID0+IChmb250QmlnID8gJzIwcHgnIDogJzE2cHgnKX07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAycHggNXB4IDVweCAwcHggICM3NjdFRDk5MDtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wMXMgZWFzZS1vdXQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjMWMxZTMyO1xuICB9XG5cblxuYDtcblxuZXhwb3J0IGNvbnN0IFRoZW1lID0ge1xuICBwdXJwbGU6ICcjNzY3RUQ5JyxcbiAgZGFya1B1cnBsZTogJyMxYzFlMzInXG5cbiAgLyogICBiYWNrZ3JvdW5kOiAnIzFjMWUzMicsXG4gICAgc3VjY2VzczogJyMzOEQ4NkEnLFxuICAgIGVycm9yOiAnI2U2NTY1ZScgKi9cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/globalStyles.jsx\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "use-local-storage-state":
/*!******************************************!*\
  !*** external "use-local-storage-state" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-local-storage-state\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZVwiPzQwNzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2UtbG9jYWwtc3RvcmFnZS1zdGF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///use-local-storage-state\n");

/***/ })

/******/ });