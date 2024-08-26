/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ib.js":
/*!***************************!*\
  !*** ./src/scripts/ib.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var interBubble = document.querySelector('.interactive');\n  var curX = 0;\n  var curY = 0;\n  var tgX = 0;\n  var tgY = 0;\n  var _move = function move() {\n    curX += (tgX - curX) / 20;\n    curY += (tgY - curY) / 20;\n    interBubble.style.transform = \"translate(\".concat(Math.round(curX), \"px, \").concat(Math.round(curY), \"px)\");\n    requestAnimationFrame(_move);\n  };\n  window.addEventListener('mousemove', function (event) {\n    tgX = event.clientX;\n    tgY = event.clientY;\n  });\n  _move();\n});\n\n//# sourceURL=webpack://tariqve.github.io/./src/scripts/ib.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/ib.js"]();
/******/ 	
/******/ })()
;