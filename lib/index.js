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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: buel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buel\", function() { return buel; });\n/* jshint esversion:6 */\n\n\nfunction buel(type, ...opt) {\n  var el = document.createElement(type);\n  var item;\n  opt.forEach(o => {\n    /**\n     * Object part buel(\"div\",{Object})\n     */\n    if (isObject(o)) {\n      Object.keys(o).forEach(a => {\n        item = o[a];\n        if (\n          a == 'on' &&\n          isArray(item) &&\n          isString(item[0]) &&\n          isFunction(item[1])\n        ) {\n          el.addEventListener(item[0], item[1]);\n        } else if (a == 'on' && isObject(item)) {\n          Object.keys(item).forEach(i => {\n            if (isFunction(item[i])) {\n              el.addEventListener(i, item[i]);\n            }\n          });\n        } else if (a == 'innerText' && isString(item)) {\n          el.innerText = item;\n        } else if ((a == 'dataset' || a == 'style') && isObject(item)) {\n          Object.keys(item).forEach(i => {\n            el[a][i] = item[i];\n          });\n        } else if (a == 'class' && isArray(item)) {\n          item.forEach(c => el.classList.add(c));\n        } else {\n          el.setAttribute(a, o[a]);\n        }\n      });\n    }\n    /**\n     * Array part buel(\"div\",[Array])\n     */\n    if (isArray(o)) {\n      o.forEach(elChildren => {\n        if (isElement(elChildren)) {\n          el.appendChild(elChildren);\n        }\n      });\n    }\n    /**\n     * Element part buel(\"div\",>Element>)\n     */\n    if (isElement(o)) {\n      el.appendChild(o);\n    }\n    /**\n     * HTML part buel(\"div\",>Element>)\n     */\n    if (isHTML(o)) {\n      el.innerHTML = o;\n    } else if (isStringRange(o)) {\n      el.innerText = o;\n    }\n  });\n\n  return el;\n}\n\n/**\n * Test if entry is an aray\n * @param {Array} item\n */\nfunction isObject(item) {\n  return !!item && typeof item === 'object' && !Array.isArray(item);\n}\n\n/**\n * Test if entry is an aray\n * @param {Array} item array\n */\nfunction isArray(item) {\n  return !!item && typeof item === 'object' && Array.isArray(item);\n}\n\n/**\n * Test if entry is JSON\n * @param {String} String to test\n */\nfunction isJson(str) {\n  try {\n    JSON.parse(str);\n  } catch (e) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * Test if entry is numeric\n * @param {String|Number} n string or number to test\n */\nfunction isNumeric(n) {\n  return !isNaN(parseFloat(n)) && isFinite(n);\n}\n\n/**\n * Test if string contain HTML\n * @param {String} n string to test\n * @note https://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not#answer-36773193\n */\nfunction isHTML(str) {\n  var test = RegExp.prototype.test.bind(/(<([^>]+)>)/i);\n  return test(str);\n}\n\n/**\n * Test if entry is string\n * @param {String} str string to test\n */\nfunction isString(str) {\n  return typeof str === 'string';\n}\n/**\n * Test if entry is function\n * @param {Function} fun Function to test\n */\nfunction isFunction(fun) {\n  return fun instanceof Function;\n}\n\n/**\n * Check if an object is a html element\n * @param {Object} obj object to test\n */\nfunction isElement(obj) {\n  return obj instanceof Element;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });