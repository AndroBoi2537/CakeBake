/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/products/files/cakeData.js":
/*!****************************************!*\
  !*** ./src/products/files/cakeData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet cakes;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cakes = [{\n  id: 1,\n  name: \"Blackberry cake\",\n  img: \"../../../Images/cakesAssets/Blackberry-cake.jpg\"\n}, {\n  id: 2,\n  name: \"Red velvet cake\",\n  img: \"../../../Images/cakesAssets/red-velvet-cake.jpg\"\n}, {\n  id: 3,\n  name: \"Chocolate cake\",\n  img: \"../../../Images/cakesAssets/Chocolate-cake.jpg\"\n}, {\n  id: 4,\n  name: \"Banana cake\",\n  img: \"../../../Images/cakesAssets/Banana-cake.jpg\"\n}, {\n  id: 5,\n  name: \"Fruit cake\",\n  img: \"../../../Images/cakesAssets/Fruit-cake.jpg\"\n}, {\n  id: 6,\n  name: \"Carrot cake\",\n  img: \"../../../Images/cakesAssets/carrot-cake.jpg\"\n}, {\n  id: 7,\n  name: \"Choco-dry-fruit cake\",\n  img: \"../../../Images/cakesAssets/chocolate-cake-with-dried-fruit.jpg\"\n}, {\n  id: 8,\n  name: \"Peanut cake\",\n  img: \"../../../Images/cakesAssets/peanuts-cake.jpg\"\n}, {\n  id: 9,\n  name: \"Choco Truffle cake\",\n  img: \"../../../Images/cakesAssets/chocolate-truffle-cake.jpg\"\n}, {\n  id: 10,\n  name: \"Vanilla cake\",\n  img: \"../../../Images/cakesAssets/vanilla-cake.jpg\"\n}, {\n  id: 11,\n  name: \"Ferrero rocher cake\",\n  img: \"../../../Images/cakesAssets/ferrero-rocher-cake.jpg\"\n}, {\n  id: 12,\n  name: \"Cherry cake\",\n  img: \"../../../Images/cakesAssets/cherry-cake.jpg\"\n}, {\n  id: 13,\n  name: \"Dark chocolate cake\",\n  img: \"../../../Images/cakesAssets/Dark-chocolate-cake.jpg\"\n}, {\n  id: 14,\n  name: \"Strawberry cake\",\n  img: \"../../../Images/cakesAssets/strawberry-cake.jpg\"\n}, {\n  id: 15,\n  name: \"Pineapple cake\",\n  img: \"../../../Images/cakesAssets/pineapple-cake.jpg\"\n}]);\n\n//# sourceURL=webpack://cakebake/./src/products/files/cakeData.js?");

/***/ }),

/***/ "./src/products/files/products.js":
/*!****************************************!*\
  !*** ./src/products/files/products.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cakeData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cakeData.js */ \"./src/products/files/cakeData.js\");\n\n\nfunction Cards() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"grid sm:grid-cols-3 grid-cols-2 grid-flow-row sm:gap-10 gap-5 \"\n  }, _cakeData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map(cake => {\n    const {\n      id,\n      name,\n      img\n    } = cake;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"sm:w-full flex flex-col items-center shadow-xl\",\n      key: id\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      className: \"w-full px-3 pt-3  \",\n      src: img,\n      alt: name\n    }), /*#__PURE__*/React.createElement(\"h2\", {\n      className: \" p-3\"\n    }, name));\n  }));\n}\n\nconst root = document.getElementById(\"root\");\nReactDOM.render( /*#__PURE__*/React.createElement(Cards, null), root);\n\n//# sourceURL=webpack://cakebake/./src/products/files/products.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/products/files/products.js");
/******/ 	
/******/ })()
;