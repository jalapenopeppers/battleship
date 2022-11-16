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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'IBM Plex Mono', monospace;\\n}\\n\\nhtml {\\n  box-sizing: content-box;\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.game-container {\\n  display: grid;\\n  grid-template-rows: 2fr 1fr 4fr 1fr 1fr;\\n  justify-items: center;\\n  align-content: space-between;\\n}\\n\\n.player-data-container {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 10%;\\n}\\n\\n.p1-container {\\n  justify-self: end;\\n}\\n.p2-container {\\n  justify-self: start;\\n}\\n\\n.p1-grid-container,\\n.p2-grid-container {\\n  width: 300px;\\n  height: 300px;\\n  display: grid;\\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\\n}\\n\\n.grid-square {\\n  border: 1px solid black;\\n}\\n\\n.grid-square.ship-spot {\\n  background-color: green;\\n}\\n\\n.grid-square.hit {\\n  background-color: red;\\n}\\n\\n.grid-square.miss {\\n  background-color: gray;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dominteraction.js":
/*!*******************************!*\
  !*** ./src/dominteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMInteraction\": () => (/* binding */ DOMInteraction)\n/* harmony export */ });\n/* harmony import */ var _gameloop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop.js */ \"./src/gameloop.js\");\n\n\nfunction GridSquare (coord) {\n  \n  return {\n    get coord() {return coord},\n    set coord(newCoord) {coord = newCoord},\n  }\n}\n\nconst DOMInteraction = (() => {\n  let acceptGridinput = true;\n  let p1Obj = {};\n  let p2Obj = {};\n  // let currentPlayer = '';\n\n  function setUp(newp1Obj, newp2Obj) {\n    p1Obj = newp1Obj;\n    p2Obj = newp2Obj;\n    // currentPlayer = newCurrentPlayer;\n  }\n  function changeInstructionsTo(str) {\n    let instructionsText = document.querySelector('.instructions-display-container');\n    instructionsText.textContent = str;\n  }\n  function createGrids() {\n    const p1Container = document.querySelector('.p1-grid-container');\n    for(let i = 1; i <= 10; i++) {\n      for(let j = 1; j <= 10; j++) {\n        let gridSquareObj = GridSquare([j, i]);\n        let gridSquare = document.createElement('div');\n        gridSquare.className = 'grid-square';\n        let isShipAtSpot = p1Obj.gameboard.isShipAtCoord(gridSquareObj.coord);\n        if (isShipAtSpot) {\n          gridSquare.classList.add('ship-spot');\n        }\n        if (p2Obj.isBot === false) {\n          // if p2 is a human, make p1's board clickable\n          gridSquare.addEventListener('click', (e) => {\n            if (acceptGridinput && _gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.currentPlayer === 'p2') {\n              let result = p1Obj.receiveMove(gridSquareObj.coord);\n              if (result === true) {\n                //its a hit\n                e.currentTarget.classList.add('hit');\n                _gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.checkWinner();\n              } else if (result === false) {\n                //its a miss\n                e.currentTarget.classList.add('miss');\n              } else {\n                //coord was invalid\n                \n              }\n              console.log(gridSquareObj.coord);\n            }\n          });\n        }\n        p1Container.appendChild(gridSquare);\n      }\n    }\n    const p2Container = document.querySelector('.p2-grid-container');\n    for(let i = 1; i <= 10; i++) {\n      for(let j = 1; j <= 10; j++) {\n        let gridSquareObj = GridSquare([j, i]);\n        let gridSquare = document.createElement('div');\n        gridSquare.className = 'grid-square';\n        gridSquare.addEventListener('click', (e) => {\n          console.log(`currentPlayer = ${_gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.currentPlayer}`);\n          if (acceptGridinput && _gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.currentPlayer === 'p1') {\n            let result = p2Obj.receiveMove(gridSquareObj.coord);\n            if (result === true) {\n              //its a hit\n              e.currentTarget.classList.add('hit');\n              _gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.checkWinner();\n            } else if (result === false) {\n              //its a miss\n              e.currentTarget.classList.add('miss');\n              _gameloop_js__WEBPACK_IMPORTED_MODULE_0__.Gameloop.checkWinner();\n            } else {\n              //coord was invalid\n              console.log('You alreayd clicked that stupid');\n            }\n            console.log(gridSquareObj.coord);\n          }\n        });\n        p2Container.appendChild(gridSquare);\n      }\n    }\n  }\n  // Refreshes grid after a bot has moved, can only be called after createGrids has been called\n  function refreshGrid(gridContainerSelector, playerObj) {\n    let gridSquaresArr = document.querySelectorAll(`${gridContainerSelector} .grid-square`);\n    let indexCounter = 0; // used to access gridSquaresArr\n    console.log(playerObj.gameboard.hitShots);\n    console.log(playerObj.gameboard.missedShots);\n    for (let i = 1; i <= 10; i++) {\n      for (let j = 1; j <= 10; j++) {\n        let coord = [j, i];\n        if (playerObj.gameboard.isCoordInArray(coord, playerObj.gameboard.hitShots)) {\n          gridSquaresArr[indexCounter].classList.add('hit');\n        } else if (playerObj.gameboard.isCoordInArray(coord, playerObj.gameboard.missedShots)) {\n          gridSquaresArr[indexCounter].classList.add('miss');\n        }\n        indexCounter++;\n      }\n    }\n  }\n  return {\n    setUp,\n    changeInstructionsTo,\n    createGrids,\n    refreshGrid,\n  }\n})();\n\n\n\n//# sourceURL=webpack://battleship/./src/dominteraction.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Gameboard() {\n  let shipList = [];\n  let missedShots = [];\n  let allShots = [];\n  let hitShots = [];\n  function getShip(coord) {\n    let returnVal = null;\n    shipList.forEach(shipObj => {\n      shipObj.shipCoords.forEach(shipCoord => {\n        if (shipCoord[0] === coord[0] &&\n          shipCoord[1] === coord[1]) {\n          returnVal = shipObj;\n        }\n      });\n    });\n    return returnVal;\n  }\n\n  function placeShip(coord, length, orientation = 'horizontal') {\n    if (coord[0] + length <= 10 && coord[1] + length <= 10) {\n      // ship is in valid location, place it\n      let shipCoords = [];\n      if (orientation === 'horizontal') {\n        for (let i = 0; i < length; i++) {\n          shipCoords.push([coord[0] + i, coord[1]]);\n        }\n      } else if (orientation === 'vertical') {\n        for (let i = 0; i < length; i++) {\n          shipCoords.push([coord[0], coord[1] + i]);\n          // console.log([coord[0], coord[1] + i]);\n        }\n      }\n      shipList.push({\n        shipCoords,\n        'shipObj': Ship(length),\n      });\n    } else {\n      console.log('Ship location is invalid');\n    }\n  }\n  function isShipAtCoord(coord) {\n    let ship = getShip(coord);\n    return ((ship !== null) ? true : false);\n  }\n  function isAttackValid(coord) {\n    for (let i = 0; i < allShots.length; i++) {\n      let item = allShots[i];\n      if (item[0] === coord[0] && item[1] === coord[1]) {\n        // coordinate was already shot so it is invalid\n        return false;\n      }\n    }\n    if (coord[0] < 1 || coord[0] > 10 ||\n      coord[1] < 1 || coord[1] > 10) {\n        // coordinate is out of bounds so its invalid\n        return false;\n    } else {\n      return true;\n    }\n  }\n  function receiveAttack(coord) {\n    // loop through each shipObj in ship list\n    // compare given coord to each ship coord\n    // if coords match, call hit() on that ship obj and return true\n    // if no coords match, add the coord to missedShots list\n    // return false if shot was missed\n    // returns null if coordinate is invalid\n    if (!isAttackValid(coord)) return null;\n\n    allShots.push(coord);\n    for (let i = 0; i < shipList.length; i++) {\n      let shipDataEntry = shipList[i];\n      for (let j = 0; j < shipDataEntry.shipCoords.length; j++) {\n        let shipCoord = shipDataEntry.shipCoords[j];\n        if (coord[0] === shipCoord[0] &&\n          coord[1] === shipCoord[1]) {\n          shipDataEntry.shipObj.hit();\n          hitShots.push(coord);\n          return true;\n        }\n      }\n    }\n    missedShots.push(coord);\n    return false;\n  }\n  function areAllShipsSunk() {\n    for (let i = 0; i < shipList.length; i++) {\n      let shipDataEntry = shipList[i];\n      if (shipDataEntry.shipObj.isSunk() === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n  // A helper function for searching for a coord within an array of coords\n  function isCoordInArray(coord, arr) {\n    for (let i = 0; i < arr.length; i++) {\n      let testCoord = arr[i];\n      if (testCoord[0] === coord[0] &&\n        testCoord[1] === coord[1]) {\n        return true;\n      }\n    }\n    return false;\n  }\n  \n  return {\n    placeShip,\n    isShipAtCoord,\n    receiveAttack,\n    isAttackValid,\n    areAllShipsSunk,\n    isCoordInArray,\n    shipList,\n    hitShots,\n    missedShots,\n  }\n}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameloop\": () => (/* binding */ Gameloop)\n/* harmony export */ });\n/* harmony import */ var _dominteraction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dominteraction.js */ \"./src/dominteraction.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\nconst Gameloop = (() => {\n  const p1 = Player('P1', false);\n  const p2 = Player('Computer', true);\n  let currentPlayer = 'p1';\n\n  function checkWinner() {\n    // returns true if someone has one, returns false if not\n    if (p1.hasWon === false) {\n      p2.hasWon = true;\n      // show winner visually in DOM\n      console.log('p2 has won!');\n      return true;\n    }\n    else if (p2.hasWon === false) {\n      p1.hasWon = true;\n      // show winner visually in DOM\n      console.log('p1 has won!');\n      return true;\n    }\n    else {\n      // no one has won, next turn\n      if (this.currentPlayer === 'p1') {\n        this.currentPlayer = 'p2';\n        if (p2.isBot) {\n          console.log('p2 is a bot, make an attack automatically');\n          // make attack\n          p1.receiveMove();\n          // refresh squares manually\n          _dominteraction_js__WEBPACK_IMPORTED_MODULE_0__.DOMInteraction.refreshGrid('.p1-grid-container', p1);\n          this.checkWinner(); // checks for winner and switches back to p1 if no one has won\n        }\n      } else {\n        this.currentPlayer = 'p1';\n      }\n    }\n    console.log(`currentPlayer shoudl now be ${this.currentPlayer}`);\n    return false;\n  }\n\n  // Give player obj references to DOMInteraction module\n  _dominteraction_js__WEBPACK_IMPORTED_MODULE_0__.DOMInteraction.setUp(p1, p2);\n\n  // place ships\n  _dominteraction_js__WEBPACK_IMPORTED_MODULE_0__.DOMInteraction.changeInstructionsTo('Place your ships on the left board below.');\n  p1.placeShip([1, 1], 3, 'vertical');\n  p1.placeShip([2, 1], 2, 'horizontal');\n  p2.placeShip([1, 1], 3, 'vertical');\n  p2.placeShip([2, 1], 2, 'horizontal');\n\n  _dominteraction_js__WEBPACK_IMPORTED_MODULE_0__.DOMInteraction.createGrids();\n\n  // while (!checkWinner()) {\n  //   // get player 1 input and send to player 2 board\n  //   DOMInteraction.changeInstructionsTo('Fire a shot Player 1!');\n    \n\n  //   // get player 2 input and send to player 1 board\n  // }\n\n  return {\n    currentPlayer,\n    checkWinner,\n  }\n})();\n\n\n\n//# sourceURL=webpack://battleship/./src/gameloop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameloop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop.js */ \"./src/gameloop.js\");\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\nfunction Player(_name, isBot = false) {\n  // should know if he won\n  // should know which gameboard hes using\n  // should be able to make moves on gameboard\n  // should alter behavior if he is a bot\n  let hasWon = null;\n  let gameboard = Gameboard();\n\n  function placeShip(coord, length, orientation = 'horizontal') {\n    gameboard.placeShip(coord, length, orientation);\n  }\n  function receiveMove(coord = null) {\n    // this function can be called with no args if\n    //   the opposing player is a bot\n    if (coord === null) {\n      /* \n        Quick and dirty way to make bot pick a valid coord.\n        Refactor so it randomly picks one of the available coords from\n          an array pf available coords, reducing computations.\n      */\n      do {\n        coord = [Math.floor(Math.random() * 10 + 1),\n          Math.floor(Math.random() * 10 + 1)];\n      } while (this.gameboard.receiveAttack(coord) === null);\n    }\n    let returnVal = gameboard.receiveAttack(coord);\n    if (gameboard.areAllShipsSunk()) {\n      // other player wins\n      this.hasWon = false;\n    }\n    return returnVal;\n  }\n  function reset() {\n    this.hasWon = null;\n    this.gameboard = Gameboard();\n  }\n  \n  const returnedObj = {\n    hasWon,\n    gameboard,\n    isBot,\n    placeShip,\n    receiveMove,\n    reset,\n    get name() { return _name },\n    set name(newName) {\n      if ([...newName].length <= 20) {\n        _name = newName;\n      } else {\n        console.log('Name is too long, reduce to 20 characters or less.');\n      }\n    },\n  }\n\n  return returnedObj;\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function Ship(length) {\n  let shipLength = length;\n  let hits = 0;\n  let hasSunk = false;\n\n  function hit() {\n    hits++;\n    isSunk();\n    return hits;\n  }\n  function isSunk() {\n    hasSunk = (hits >= shipLength) ? true : false;\n    return hasSunk;\n  }\n\n  return {\n    hit,\n    isSunk,\n  }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;