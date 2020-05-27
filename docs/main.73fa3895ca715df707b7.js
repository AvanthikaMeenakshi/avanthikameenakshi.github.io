/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html,\\nbody {\\n  font-family: \\\"Roboto Mono\\\" !important;\\n  padding: 0;\\n  margin: 0;\\n  height: 100%;\\n  background: #151515;\\n  color: #FFF; }\\n\\n.main-content {\\n  padding: 35px 50px 50px 350px;\\n  position: relative;\\n  min-height: 100vh;\\n  z-index: 1; }\\n\\n.logo {\\n  user-select: none;\\n  color: #FFF;\\n  text-align: center;\\n  position: absolute;\\n  top: 0;\\n  margin: 50px auto;\\n  width: 100%; }\\n  .logo i {\\n    font-weight: bold;\\n    font-size: 50px;\\n    line-height: 50px;\\n    display: block; }\\n  .logo .logo-text {\\n    font-size: 44px; }\\n\\n.m-30 {\\n  margin: 30px 0 !important; }\\n\\n.heading {\\n  font-size: 3.2rem;\\n  line-height: 4.2rem;\\n  font-weight: 700;\\n  margin: 15px 0px; }\\n\\n.sub-heading {\\n  font-size: 30px;\\n  line-height: 35px;\\n  font-weight: 700;\\n  margin-bottom: 15px; }\\n\\n.desc-links {\\n  padding-bottom: 1px;\\n  border-bottom: 2px solid #FFF;\\n  transition: all 200ms ease;\\n  color: #FFF;\\n  text-decoration: none; }\\n  .desc-links:hover, .desc-links:active, .desc-links:focus {\\n    color: #FFF;\\n    text-decoration: none;\\n    padding-bottom: 4px;\\n    border-bottom-color: transparent; }\\n\\n.heading-link {\\n  font-size: 1.4rem; }\\n\\n@media only screen and (max-width: 1023px) {\\n  .heading-link {\\n    font-size: 1rem; }\\n  .heading {\\n    font-size: 2.2rem;\\n    line-height: 3.2rem; } }\\n\\n.timeline-container {\\n  width: 100%;\\n  position: relative;\\n  margin: -10px; }\\n  .timeline-container::after {\\n    content: '';\\n    position: absolute;\\n    border: 1px solid #f0f0f0;\\n    top: 0;\\n    bottom: 0;\\n    left: 50%;\\n    margin-left: -3px; }\\n  .timeline-container .timeline-item {\\n    padding: 10px;\\n    position: relative;\\n    width: 50%; }\\n    .timeline-container .timeline-item::after {\\n      content: '';\\n      position: absolute;\\n      width: 10px;\\n      height: 10px;\\n      right: -3px;\\n      border: 2px solid #1890ff;\\n      top: 17px;\\n      border-radius: 50%;\\n      z-index: 1; }\\n  .timeline-container .timeline-item-left {\\n    left: 0; }\\n  .timeline-container .timeline-item-right {\\n    left: 50%; }\\n    .timeline-container .timeline-item-right::after {\\n      left: -7px; }\\n\\n.sidebar {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  transform: translateX(0);\\n  height: 100vh;\\n  width: 300px;\\n  background: #202022;\\n  z-index: 10;\\n  -webkit-transition: all 0.4s ease-out;\\n  transition: all 0.4s ease-out; }\\n  .sidebar .sidebar-content {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    overflow: hidden;\\n    overflow-y: auto; }\\n    .sidebar .sidebar-content .sidebar-footer {\\n      position: absolute;\\n      bottom: 0;\\n      padding: 30px 15px;\\n      width: 100%; }\\n      .sidebar .sidebar-content .sidebar-footer a {\\n        font-size: 22px;\\n        color: #fff;\\n        opacity: 0.8;\\n        margin-left: 15px; }\\n        .sidebar .sidebar-content .sidebar-footer a:hover, .sidebar .sidebar-content .sidebar-footer a:active, .sidebar .sidebar-content .sidebar-footer a:focus {\\n          opacity: 1; }\\n      .sidebar .sidebar-content .sidebar-footer img {\\n        width: 48px;\\n        border-radius: 50%;\\n        filter: grayscale(1); }\\n\\n.sidebar-menu {\\n  padding: 0;\\n  list-style: none;\\n  margin: 0; }\\n  .sidebar-menu .menu {\\n    text-align: center;\\n    -webkit-transition: all 0.4s ease-out;\\n    transition: all 0.4s ease-out; }\\n    .sidebar-menu .menu a {\\n      letter-spacing: 2.2px;\\n      display: block;\\n      padding: 15px 0;\\n      color: #FFF;\\n      position: relative;\\n      overflow: hidden;\\n      z-index: 1;\\n      font-weight: 300;\\n      font-size: 16px;\\n      line-height: 28px;\\n      font-weight: 300; }\\n      .sidebar-menu .menu a:hover, .sidebar-menu .menu a:active, .sidebar-menu .menu a:focus {\\n        text-decoration: none; }\\n    .sidebar-menu .menu:hover, .sidebar-menu .menu:active, .sidebar-menu .menu:focus {\\n      opacity: 0.4;\\n      background: #353536f5; }\\n  .sidebar-menu .menu-active {\\n    opacity: 0.4;\\n    background: #353536f5; }\\n\\n.toggle-menu {\\n  display: none; }\\n\\n@media only screen and (max-width: 1023px) {\\n  .sidebar {\\n    display: none; }\\n  .main-content {\\n    padding: 25px; }\\n  .toggle-menu {\\n    display: block;\\n    position: relative;\\n    padding: 30px 30px 0; }\\n    .toggle-menu .toggler {\\n      background: transparent;\\n      box-shadow: none;\\n      font-size: 1.5rem;\\n      color: #FFF;\\n      border: 0px;\\n      padding: 0px; }\\n      .toggle-menu .toggler:hover, .toggle-menu .toggler:active, .toggle-menu .toggler:focus {\\n        outline: none;\\n        border: 0px; }\\n    .toggle-menu .collapse, .toggle-menu .collapsing {\\n      position: absolute;\\n      background: #202022;\\n      z-index: 2;\\n      top: 70px;\\n      left: 30px;\\n      right: 30px; }\\n      .toggle-menu .collapse .menu, .toggle-menu .collapsing .menu {\\n        text-align: left; }\\n        .toggle-menu .collapse .menu a, .toggle-menu .collapsing .menu a {\\n          padding: 15px; } }\\n\\n.home {\\n  max-width: 60%; }\\n  .home span {\\n    display: block; }\\n  .home__desc {\\n    font-size: 16px;\\n    line-height: 28px;\\n    font-weight: 300;\\n    color: rgba(255, 255, 255, 0.5);\\n    margin-bottom: 15px; }\\n  .home__about {\\n    margin-bottom: 20px;\\n    color: rgba(255, 255, 255, 0.8);\\n    font-size: 20px;\\n    font-weight: 300; }\\n\\nspan.wave {\\n  animation-name: wave-animation;\\n  animation-duration: 2.5s;\\n  animation-iteration-count: 1;\\n  transform-origin: 70% 70%;\\n  display: inline-block;\\n  font-size: 30px; }\\n\\n@keyframes wave-animation {\\n  0% {\\n    transform: rotate(0deg); }\\n  10% {\\n    transform: rotate(-10deg); }\\n  20% {\\n    transform: rotate(12deg); }\\n  30% {\\n    transform: rotate(-10deg); }\\n  40% {\\n    transform: rotate(9deg); }\\n  50% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(0deg); } }\\n\\n@media only screen and (max-width: 1023px) {\\n  .home {\\n    max-width: 100%; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-in\": \"./node_modules/moment/locale/en-in.js\",\n\t\"./en-in.js\": \"./node_modules/moment/locale/en-in.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-sg\": \"./node_modules/moment/locale/en-sg.js\",\n\t\"./en-sg.js\": \"./node_modules/moment/locale/en-sg.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fil\": \"./node_modules/moment/locale/fil.js\",\n\t\"./fil.js\": \"./node_modules/moment/locale/fil.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./ga\": \"./node_modules/moment/locale/ga.js\",\n\t\"./ga.js\": \"./node_modules/moment/locale/ga.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-deva\": \"./node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-deva.js\": \"./node_modules/moment/locale/gom-deva.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it-ch\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it-ch.js\": \"./node_modules/moment/locale/it-ch.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ku\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ku.js\": \"./node_modules/moment/locale/ku.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./oc-lnc\": \"./node_modules/moment/locale/oc-lnc.js\",\n\t\"./oc-lnc.js\": \"./node_modules/moment/locale/oc-lnc.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-mo\": \"./node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-mo.js\": \"./node_modules/moment/locale/zh-mo.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/avanthika.jpg":
/*!**********************************!*\
  !*** ./src/assets/avanthika.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1b30ab7d517a7a9ab65fe30d593b0ec7.jpg\");\n\n//# sourceURL=webpack:///./src/assets/avanthika.jpg?");

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_avanthika_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/avanthika.jpg */ \"./src/assets/avanthika.jpg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\n\n\n\nconst Footer = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sidebar-footer\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n  src: _assets_avanthika_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  alt: \"avanthika\"\n}), _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].github, _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].linkedInIcon, _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].twitterIcon, _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].facebookIcon, _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].mediumIcon, _utils__WEBPACK_IMPORTED_MODULE_2__[\"socialLinks\"].stackoverflowIcon);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/index.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst pages = [{\n  title: 'Home',\n  path: '/'\n}, {\n  title: 'Resume',\n  path: '/resume'\n}, {\n  title: 'Blog',\n  path: '/blog'\n}, {\n  title: 'Contact',\n  path: '/contact'\n}];\n\nconst Menu = ({\n  isActive,\n  pathname,\n  setIsToggleMenuExpanded\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n  className: \"sidebar-menu\"\n}, pages.map(page => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n  key: page.title,\n  className: `menu ${isActive && page.path === pathname ? 'menu-active' : ''}`,\n  onClick: () => {\n    setIsToggleMenuExpanded(false);\n  }\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n  to: page.path\n}, page.title))));\n\nconst ToggleMenu = ({\n  isActive,\n  pathname\n}) => {\n  const [isToggleMenuExpanded, setIsToggleMenuExpanded] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"toggle-menu\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => setIsToggleMenuExpanded(!isToggleMenuExpanded),\n    className: \"toggler\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-bars\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n    isOpen: isToggleMenuExpanded\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {\n    isActive: isActive,\n    pathname: pathname,\n    setIsToggleMenuExpanded: setIsToggleMenuExpanded\n  })));\n};\n\nconst SidebarWrapper = ({\n  isActive,\n  pathname\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sidebar\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"sidebar-content\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"logo\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n  className: \"fa fa-code\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"logo-text\"\n}, \"Ava\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {\n  isActive: isActive,\n  pathname: pathname\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n\nconst Header = props => {\n  const [isActive, setActiveTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('/');\n  const {\n    pathname\n  } = props.location;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setActiveTab(pathname);\n  }, [pathname]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleMenu, {\n    isActive: isActive,\n    pathname: pathname\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarWrapper, {\n    isActive: isActive,\n    pathname: pathname\n  }));\n};\n\nHeader.propTypes = {\n  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Header));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Layout = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n  className: \"main\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"main-content\"\n}, props.children));\n\nLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout/index.js?");

/***/ }),

/***/ "./src/components/Timeline/index.js":
/*!******************************************!*\
  !*** ./src/components/Timeline/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Timeline = ({\n  children\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"timeline-container\"\n  }, children);\n};\n\nconst TimelineItem = ({\n  side,\n  content\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: `timeline-item timeline-item-${side}`\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"timeline-content\"\n}));\n\nTimelineItem.propTypes = {\n  side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nTimelineItem.defaultProps = {\n  side: 'left'\n};\nTimeline.Item = TimelineItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\n//# sourceURL=webpack:///./src/components/Timeline/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _pages_HelloPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/HelloPage */ \"./src/pages/HelloPage/index.js\");\n/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Profile */ \"./src/pages/Profile/index.js\");\n/* harmony import */ var _pages_Blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Blog */ \"./src/pages/Blog/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst App = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n  exact: true,\n  path: \"/\",\n  component: _pages_HelloPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n  exact: true,\n  path: \"/resume\",\n  component: _pages_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n  exact: true,\n  path: \"/blog\",\n  component: _pages_Blog__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}))));\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Blog/index.js":
/*!*********************************!*\
  !*** ./src/pages/Blog/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Blog = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"My blog\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\n//# sourceURL=webpack:///./src/pages/Blog/index.js?");

/***/ }),

/***/ "./src/pages/HelloPage/index.js":
/*!**************************************!*\
  !*** ./src/pages/HelloPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\n\n\nconst IntroSection = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"home\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n  className: \"wave\"\n}, \"\\uD83D\\uDC4B\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n  className: \"heading\"\n}, \"Hi, I am Avanthika\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  className: \"home__about\"\n}, \"Fullstack javascript developer\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"home__desc\"\n}, _utils__WEBPACK_IMPORTED_MODULE_1__[\"staticContent\"].map(content => content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"m-30 heading\"\n}, \"Let's work together on your next project\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n  className: \"desc-links heading-link\",\n  href: \"mailto:hello@avanthikameenakshi.com\"\n}, \"hello@avanthikameenakshi.com\"));\n\nconst ProfileInfo = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroSection, null));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileInfo);\n\n//# sourceURL=webpack:///./src/pages/HelloPage/index.js?");

/***/ }),

/***/ "./src/pages/Profile/index.js":
/*!************************************!*\
  !*** ./src/pages/Profile/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typed */ \"./node_modules/react-typed/dist/react-typed.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Timeline */ \"./src/components/Timeline/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n\n\n\n\n\nconst IntroSection = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"container\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"row\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"col-md-12\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n  className: \"heading\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  strings: ['Avanthika_'],\n  typeSpeed: 70\n})))));\n\nconst WorkTimeLine = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"container\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"row timeline\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"col-md-12\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  className: \"sub-heading\"\n}, \"Work Experience\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Timeline__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Timeline__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n  title: \"Work Title\",\n  subtitle: \"Subtitle\",\n  content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"dksjkd\")\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Timeline__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, {\n  side: \"right\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Timeline__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Item, null)))));\n\nconst ProfileInfo = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroSection, null));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileInfo);\n\n//# sourceURL=webpack:///./src/pages/Profile/index.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: socialLinks, staticContent, workExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socialLinks\", function() { return socialLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticContent\", function() { return staticContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workExp\", function() { return workExp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst socialLinks = {\n  email: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"desc-links\",\n    href: \"mailto:hello@avanthikameenakshi.com\"\n  }, \"email\"),\n  facebook: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    className: \"desc-links\",\n    rel: \"noopener noreferrer\",\n    href: \"https://www.facebook.com/avanthika.meenakshi\"\n  }, \"facebook\"),\n  goodreads: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    className: \"desc-links\",\n    rel: \"noopener noreferrer\",\n    href: \"https://www.goodreads.com/user/show/26453047-avanthika\"\n  }, \"online\"),\n  github: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://github.com/AvanthikaMeenakshi\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-github\"\n  })),\n  twitterIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://github.com/AvanthikaMeenakshi\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-twitter\"\n  })),\n  linkedInIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.linkedin.com/in/avanthika-meenakshi-41b105b2/\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-linkedin\"\n  })),\n  facebookIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.facebook.com/avanthika.meenakshi\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-facebook-square\"\n  })),\n  mediumIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.facebook.com/avanthika.meenakshi\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-medium-m\"\n  })),\n  stackoverflowIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.facebook.com/avanthika.meenakshi\",\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fab fa-stack-overflow\"\n  }))\n};\nconst staticContent = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  key: \"info-1\"\n}, \"I'm a programmer and a learner. I was that kid who was ridiculed for asking questions. Years down the lane, I aspire to architect solutions. I'm obsessed with coding, but I believe in thinking and planning before writing the code. I go mad when code isn't aligned. I like keeping the code DRY. The amount of code I punch in is directly proportional to the tea I consume. I cannot survive without stackoverflow.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  key: \"info-2\"\n}, \"While I'm not coding or doing stuff related to tech, you can find me reviewing a book \", socialLinks.goodreads, \" or in a library. Or spending time with my cat, Anjali. She's a\", ' ', moment__WEBPACK_IMPORTED_MODULE_1___default()().diff('2012-10-02', 'years', false), \" year old white cat with beautiful yellow eyes.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n  key: \"info-3\"\n}, \"If you wish to connect with me, drop me an \", socialLinks.email, \" - I'm quick when it comes to responding to emails. Or leave a message for me on\", ' ', socialLinks.facebook, \". I'm rare species of millennial that doesn't like using the tiny QWERTY touch-pad in my smart-phone, but I will get back.\")];\nconst workExp = {\n  headforwards: {\n    companyName: 'Headforwards',\n    client: 'NTT Japan',\n    role: 'Frontend Javascript Developer',\n    workDetails: ['Worked predominantly in front-end to build micro-frontend apps using react.', 'Worked with react, redux, react hooks, context API and HOCs to create standalone apps.', 'Worked with micro service architecture to deploy apps individually.', 'Converted acceptance criteria into functionalities - coded test driven components.', 'Used cypress to write integration test cases and achieved 85% test coverage.', 'Refactored and maintained code standards. Helped keeping the code DRY. Actively reviewed code.']\n  }\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });