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

/***/ "./attributes.js":
/*!***********************!*\
  !*** ./attributes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateAttributes: () => (/* binding */ updateAttributes)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./canvas.js\");\n/* harmony import */ var _canvasZoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasZoom */ \"./canvasZoom.js\");\n\r\n\r\n\r\nfunction updateAttributes() {\r\n    document.documentElement.setAttribute(\"style\", \r\n        \"--canvasLeft: \" + _canvas__WEBPACK_IMPORTED_MODULE_0__.canvasPosition.x + \"px; \" + \r\n        \"--canvasTop: \" + _canvas__WEBPACK_IMPORTED_MODULE_0__.canvasPosition.y + \"px; \" +\r\n        \"--canvasHeight: \" + _canvasZoom__WEBPACK_IMPORTED_MODULE_1__.zoomPercent + \"%; \" + \r\n        \"--canvasWidth: \" + _canvasZoom__WEBPACK_IMPORTED_MODULE_1__.zoomPercent + \"%; \");\r\n}\n\n//# sourceURL=webpack:///./attributes.js?");

/***/ }),

/***/ "./brushColor.js":
/*!***********************!*\
  !*** ./brushColor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   brushColor: () => (/* binding */ brushColor)\n/* harmony export */ });\nconst color = document.getElementById(\"color\");\r\nlet brushColor = color.value;\r\n\r\ncolor.onchange = changeColor;\r\n\r\nfunction changeColor() {\r\n    brushColor = this.value;\r\n}\n\n//# sourceURL=webpack:///./brushColor.js?");

/***/ }),

/***/ "./brushSize.js":
/*!**********************!*\
  !*** ./brushSize.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   brushSize: () => (/* binding */ brushSize)\n/* harmony export */ });\nconst size = document.getElementById(\"size\");\r\nlet brushSize = size.value;\r\n\r\nsize.onchange = changeSize;\r\n\r\nfunction changeSize() {\r\n    brushSize = this.value;\r\n}\n\n//# sourceURL=webpack:///./brushSize.js?");

/***/ }),

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   canvas: () => (/* binding */ canvas),\n/* harmony export */   canvasContainer: () => (/* binding */ canvasContainer),\n/* harmony export */   canvasPosition: () => (/* binding */ canvasPosition),\n/* harmony export */   canvasSize: () => (/* binding */ canvasSize),\n/* harmony export */   canvasWrapper: () => (/* binding */ canvasWrapper),\n/* harmony export */   context: () => (/* binding */ context),\n/* harmony export */   resizeCanvas: () => (/* binding */ resizeCanvas)\n/* harmony export */ });\n/* harmony import */ var _canvasZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasZoom */ \"./canvasZoom.js\");\n\r\n\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst canvasContainer = document.getElementById(\"canvas-container\");\r\nconst canvasWrapper = document.getElementById(\"canvas-wrapper\");\r\nconst context = canvas.getContext(\"2d\");\r\n\r\nlet canvasPosition = {x: 0, y: 0};\r\nlet canvasSize = {\r\n    width: window.innerWidth / _canvasZoom__WEBPACK_IMPORTED_MODULE_0__.zoom, \r\n    height: window.innerHeight / _canvasZoom__WEBPACK_IMPORTED_MODULE_0__.zoom\r\n};\r\n\r\nfunction resizeCanvas() {\r\n    canvas.width = canvasSize.width;\r\n    canvas.height = canvasSize.height;\r\n}\n\n//# sourceURL=webpack:///./canvas.js?");

/***/ }),

/***/ "./canvasDraw.js":
/*!***********************!*\
  !*** ./canvasDraw.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   draw: () => (/* binding */ draw),\n/* harmony export */   startDraw: () => (/* binding */ startDraw),\n/* harmony export */   stopDraw: () => (/* binding */ stopDraw)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./canvas.js\");\n/* harmony import */ var _mouseHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouseHandle */ \"./mouseHandle.js\");\n/* harmony import */ var _brushColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushColor */ \"./brushColor.js\");\n/* harmony import */ var _brushSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushSize */ \"./brushSize.js\");\n\r\n\r\n\r\n\r\n\r\nlet isDrawDown = false;\r\n\r\nfunction startDraw(evt) {\r\n    if (evt.button !== 0) return;\r\n    isDrawDown = true;\r\n    let mousePos = (0,_mouseHandle__WEBPACK_IMPORTED_MODULE_1__.getMousePos)(evt);\r\n\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.lineWidth = _brushSize__WEBPACK_IMPORTED_MODULE_3__.brushSize;\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.strokeStyle = _brushColor__WEBPACK_IMPORTED_MODULE_2__.brushColor;\r\n\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.beginPath();\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.rect(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5, _brushSize__WEBPACK_IMPORTED_MODULE_3__.brushSize, _brushSize__WEBPACK_IMPORTED_MODULE_3__.brushSize);\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.stroke();\r\n}\r\n\r\nfunction draw(evt) {\r\n    if (!isDrawDown) return;\r\n    let mousePos = (0,_mouseHandle__WEBPACK_IMPORTED_MODULE_1__.getMousePos)(evt);\r\n\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.lineTo(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5);\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.stroke();\r\n}\r\n\r\nfunction stopDraw() {\r\n    isDrawDown = false;\r\n    _canvas__WEBPACK_IMPORTED_MODULE_0__.context.closePath();\r\n}\n\n//# sourceURL=webpack:///./canvasDraw.js?");

/***/ }),

/***/ "./canvasPan.js":
/*!**********************!*\
  !*** ./canvasPan.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pan: () => (/* binding */ pan),\n/* harmony export */   startPan: () => (/* binding */ startPan),\n/* harmony export */   stopPan: () => (/* binding */ stopPan)\n/* harmony export */ });\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ \"./attributes.js\");\n/* harmony import */ var _mouseHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouseHandle */ \"./mouseHandle.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./canvas.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet isPanning = false;\r\n\r\nfunction startPan(evt) {\r\n    if (evt.button !== 2) return;\r\n    isPanning = true;\r\n    (0,_mouseHandle__WEBPACK_IMPORTED_MODULE_1__.setLastMousePos)(evt.clientX, evt.clientY);\r\n}\r\n\r\nfunction pan(evt) {\r\n    if (!isPanning) return;\r\n    let mouseDelta = (0,_mouseHandle__WEBPACK_IMPORTED_MODULE_1__.getMouseDelta)(evt);\r\n    _canvas__WEBPACK_IMPORTED_MODULE_2__.canvasPosition.x += mouseDelta.x;\r\n    _canvas__WEBPACK_IMPORTED_MODULE_2__.canvasPosition.y += mouseDelta.y;\r\n    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.updateAttributes)();\r\n}\r\n\r\nfunction stopPan(evt) {\r\n    isPanning = false;\r\n    (0,_mouseHandle__WEBPACK_IMPORTED_MODULE_1__.setLastMousePos)(evt.clientX, evt.clientY);\r\n}\n\n//# sourceURL=webpack:///./canvasPan.js?");

/***/ }),

/***/ "./canvasZoom.js":
/*!***********************!*\
  !*** ./canvasZoom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zoom: () => (/* binding */ zoom),\n/* harmony export */   zoomCanvas: () => (/* binding */ zoomCanvas),\n/* harmony export */   zoomPercent: () => (/* binding */ zoomPercent)\n/* harmony export */ });\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ \"./attributes.js\");\n\r\n\r\nconst ZOOM_STEP = 10;\r\nconst MIN_ZOOM = 10;\r\nconst MAX_ZOOM = 500;\r\n\r\nlet zoom = 10;\r\nlet zoomPercent = 100;\r\n\r\nfunction zoomCanvas(evt) {\r\n    if (evt.deltaY > 0) {\r\n        zoomPercent = Math.max(MIN_ZOOM, zoomPercent - ZOOM_STEP);\r\n    }\r\n    else if (evt.deltaY < 0) {\r\n        zoomPercent = Math.min(MAX_ZOOM, zoomPercent + ZOOM_STEP);\r\n    }\r\n    (0,_attributes__WEBPACK_IMPORTED_MODULE_0__.updateAttributes)();\r\n}\n\n//# sourceURL=webpack:///./canvasZoom.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./canvas.js\");\n/* harmony import */ var _canvasZoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvasZoom */ \"./canvasZoom.js\");\n/* harmony import */ var _canvasPan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvasPan */ \"./canvasPan.js\");\n/* harmony import */ var _canvasDraw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvasDraw */ \"./canvasDraw.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_canvas__WEBPACK_IMPORTED_MODULE_0__.resizeCanvas)();\r\n\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.addEventListener(\"mousedown\", _canvasDraw__WEBPACK_IMPORTED_MODULE_3__.startDraw);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.addEventListener(\"mousemove\", _canvasDraw__WEBPACK_IMPORTED_MODULE_3__.draw);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.addEventListener(\"mouseup\", _canvasDraw__WEBPACK_IMPORTED_MODULE_3__.stopDraw);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvas.addEventListener(\"mouseleave\", _canvasDraw__WEBPACK_IMPORTED_MODULE_3__.stopDraw);\r\n\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"wheel\", _canvasZoom__WEBPACK_IMPORTED_MODULE_1__.zoomCanvas);\r\n\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"mousedown\", _canvasPan__WEBPACK_IMPORTED_MODULE_2__.startPan);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"mousemove\", _canvasPan__WEBPACK_IMPORTED_MODULE_2__.pan);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"mouseup\", _canvasPan__WEBPACK_IMPORTED_MODULE_2__.stopPan);\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"mouseleave\", _canvasPan__WEBPACK_IMPORTED_MODULE_2__.stopPan);\r\n\r\n_canvas__WEBPACK_IMPORTED_MODULE_0__.canvasContainer.addEventListener(\"resize\", _canvas__WEBPACK_IMPORTED_MODULE_0__.resizeCanvas);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mouseHandle.js":
/*!************************!*\
  !*** ./mouseHandle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLastMousePos: () => (/* binding */ getLastMousePos),\n/* harmony export */   getMouseDelta: () => (/* binding */ getMouseDelta),\n/* harmony export */   getMousePos: () => (/* binding */ getMousePos),\n/* harmony export */   setLastMousePos: () => (/* binding */ setLastMousePos)\n/* harmony export */ });\nlet lastX = 0;\r\nlet lastY = 0;\r\n\r\nfunction getLastMousePos() {\r\n    return lastmousePos = {x: lastX, y: lastY};\r\n}\r\n\r\nfunction setLastMousePos(newX, newY) {\r\n    lastX = newX;\r\n    lastY = newY;\r\n}\r\n\r\nfunction getMousePos(evt) {\r\n    const rect = canvas.getBoundingClientRect();\r\n    const scaleX = canvas.width / rect.width;\r\n    const scaleY = canvas.height / rect.height;\r\n    const mouseX = (evt.clientX - rect.left) * scaleX;\r\n    const mouseY = (evt.clientY - rect.top) * scaleY;  \r\n\r\n    let mousePos = {x: mouseX, y: mouseY};\r\n    return mousePos;\r\n}\r\n\r\nfunction getMouseDelta(evt) {\r\n    const currentX = evt.clientX;\r\n    const currentY = evt.clientY;\r\n\r\n    const deltaX = currentX - lastX;\r\n    const deltaY = currentY - lastY;\r\n\r\n    lastX = currentX;\r\n    lastY = currentY;\r\n\r\n    let mouseDelta = {x: deltaX, y: deltaY};\r\n    return mouseDelta;\r\n}\n\n//# sourceURL=webpack:///./mouseHandle.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;