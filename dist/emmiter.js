/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/emmiter/emmiter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emmiter/Store.js":
/*!******************************!*\
  !*** ./src/emmiter/Store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* eslint-disable no-console */\nclass Store {\n\tconstructor() {\n\t\tthis._events = {};\n\t}\n\n\tsubscribe(event, handler) {\n\t\tif (!this._events.hasOwnProperty(event)) {\n\t\t\tthis._events[event] = handler;\n\t\t\tconsole.log(`подписка на событие ${event}`);\n\t\t} else {\n\t\t\tconsole.log(`событие ${event} уже подписано`);\n\t\t}\n\t}\n\n\tunsubscribe(event, handler) {\n\t\tif (this._events.hasOwnProperty(event)) {\n\t\t\tdelete this._events[event];\n\t\t\tconsole.log(`отписка от события ${event}`);\n\t\t\thandler();\n\t\t} else {\n\t\t\tconsole.log(`событие ${event} не было подписано или уже отписано`);\n\t\t}\n\t}\n\n\temit(event) {\n\t\tif (this._events.hasOwnProperty(event)) {\n\t\t\tconsole.log(`выполнить функцию события ${event}`);\n\t\t\tthis._events[event]();\n\t\t} else {\n\t\t\tconsole.log(`не найдено события ${event}`);\n\t\t}\n\t}\n} \n\n//# sourceURL=webpack:///./src/emmiter/Store.js?");

/***/ }),

/***/ "./src/emmiter/emmiter.js":
/*!********************************!*\
  !*** ./src/emmiter/emmiter.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ \"./src/emmiter/Store.js\");\n/* eslint-disable no-console */\n\n\n\nconst store = new _Store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst emitter = {\n\ton: function(event, handler) {\n\t\t// TODO: подписать\n\t\tstore.subscribe(event, handler);\n\t},\n\n\toff: function(event, handler) {\n\t\t// TODO: отписать\n\t\tstore.unsubscribe(event, handler);\n\t},\n\n\temit: function(event) {\n\t\t// TODO: обработка события\n\t\tstore.emit(event);\n\t}\n};\n\nconst handlerOn = function () {\n\t// что-то делаем\n\tconsole.log('что то делаем');\n};\n\nconst handlerOff = function () {\n\t// что-то делаем\n\tconsole.log('off callback');\n};\n\n// подписали\nemitter.on('one', handlerOn);\nemitter.on('two', handlerOn);\nemitter.on('three', handlerOn);\n\nconsole.log('---');\n\n// обработали событие\nemitter.emit('one');\nemitter.emit('two');\nemitter.emit('one');\n\nemitter.off('three', handlerOff);\n\nemitter.emit('three');\n\n// отписали\nemitter.off('one', handlerOff);\n\n\n//# sourceURL=webpack:///./src/emmiter/emmiter.js?");

/***/ })

/******/ });