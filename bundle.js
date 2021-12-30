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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --lightColor: #F6E8EA;\\n    --primaryColor: #EF626C;\\n    --darkColor: #22181C;\\n    --secondaryColor: #84DCCF;\\n}\\n\\nbody {\\n    margin: 0px;\\n    overflow-x: hidden;\\n    overflow-y: hidden;\\n}\\n\\n#header {\\n    background-color: var(--darkColor);\\n    opacity: 0.8;\\n    color: white;\\n    height: 6vh;\\n    font-weight: 600;\\n    font-size: 24px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 2px 10px;\\n    width: 100%;\\n}\\n\\n#content {\\n    display: grid;\\n    height: 94vh;\\n    width: 100%;\\n    grid-template-columns: 368px 3fr;\\n}\\n\\n#projectPane {\\n    background-color: white;\\n    padding: 8px 16px 0px 16px;\\n    font-weight: bold;\\n    font-size: 20px;\\n    overflow: scroll;\\n    position: relative;\\n    height: 85%;\\n    border-bottom: 1px solid lightgray;\\n    /* overflow: hidden; */\\n}\\n\\n#listPane {\\n    background-color: var(--lightColor);\\n    display: grid;\\n    grid-template-columns: 2fr 1fr;\\n    grid-template-rows: 48px 480px 48px;\\n    gap: 16px;\\n}\\n\\n#listTitle {\\n    height: 48px;\\n    margin: 24px;\\n    background-color: white;\\n    grid-column-start: 1;\\n    grid-column-end: 2;\\n    /* border: 1px solid lightgrey; */\\n    border-radius: 4px;\\n    display: flex;\\n    padding: 8px;\\n    align-items: center;\\n    box-sizing: border-box;\\n\\n}\\n\\n#listDueDate {\\n    height: 48px;\\n    margin: 24px;\\n    background-color: white;\\n    grid-column-start: 2;\\n    grid-column-end: 3;\\n    /* border: 1px solid lightgrey; */\\n    border-radius: 4px;\\n    display: flex;\\n    padding: 8px;\\n    align-items: center;\\n    box-sizing: border-box;\\n}\\n\\n#listContent {\\n    height: 480px;\\n    margin: 24px;\\n    background-color: white;\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n    /* border: 1px solid lightgrey; */\\n    border-radius: 4px;\\n}\\n\\n#listAction {\\n    height: 48px;\\n    margin: 24px;\\n    border: 1px solid var(--primaryColor);\\n    border-radius: 4px;\\n    grid-column-start: 1;\\n    grid-column-end: 2;\\n    display: flex;\\n}\\n\\n#listParentProject {\\n    height: 48px;\\n    margin: 24px;\\n    /* border: 1px solid var(--primaryColor); */\\n    border-radius: 4px;\\n    grid-column-start: 2;\\n    grid-column-end: 3;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0px 0px 0px 16px;\\n    align-items: center;\\n    background-color: white;\\n}\\n\\n#listParentProjectDropdown {\\n    width: 60%;\\n    height: 100%;\\n    background-color: var(--primaryColor);\\n    border-radius: 4px;\\n    border: none;\\n    padding: 8px;\\n    color: white;\\n}\\n\\n#newProjectButton {\\n    height: 48px;\\n    width: 160px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    position: fixed;\\n    left: 16px;\\n    bottom: 16px;\\n    font-size: 14px;\\n    background-color: var(--darkColor);\\n    color: white;\\n    border-radius: 32px;\\n    border: none;\\n    box-shadow: 1px 1px var(--lightColor);\\n}\\n\\n#newListButton {\\n    height: 48px;\\n    width: 160px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    position: fixed;\\n    left: 192px;\\n    bottom: 16px;\\n    font-size: 14px;\\n    background-color: var(--primaryColor);\\n    color: white;\\n    border-radius: 32px;\\n    border: none;\\n    box-shadow: 1px 1px var(--darkColor);\\n}\\n\\n.projects {\\n    display: block;\\n    font-weight: 600;\\n    font-size: 16px;\\n    height: max(40px, auto);\\n    width: auto;\\n    padding: 8px 12px;\\n    margin: 16px 0px;\\n    align-items: center;\\n    border-radius: 4px;\\n    background-color: white;\\n    border: 1px solid lightgrey;\\n}\\n\\n.titleSpan {\\n    max-width: 60%;\\n    overflow-x: hidden;\\n}\\n\\n.dueDateSpan {\\n    font-size: 12px;\\n}\\n\\n.lists {\\n    display: flex;\\n    justify-content: space-between;\\n    font-weight: 400;\\n    font-size: 16px;\\n    height: 24px;\\n    width: auto;\\n    padding: 4px 12px 4px 12px;\\n    margin: 8px;\\n    align-items: center;\\n    border-radius: 4px;\\n}\\n\\n.lists:hover {\\n    background-color: var(--lightColor);\\n}\\n\\n.lists:focus {\\n    background-color: var(--secondaryColor);\\n}\\n\\n::-webkit-scrollbar {\\n    width: 0;\\n    /* Remove scrollbar space */\\n    background: transparent;\\n    /* Optional: just make scrollbar invisible */\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ \"./src/layout.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_list_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_list_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Main Container\nlet container = document.getElementById(\"container\");\n\n// Header (Static app headline)\nlet header = document.createElement(\"div\");\nheader.id = 'header';\nheader.innerHTML = 'To Do List';\ncontainer.append(header);\n\n// Content UI (This will show all the dynamic content)\nlet content = document.createElement(\"div\");\ncontent.id = 'content';\n\n// Project Pane (which will show projects and lists list on the left)\nlet projectPane = document.createElement(\"div\");\nprojectPane.id = 'projectPane';\n// projectPane.innerHTML = 'My Projects';\n\n// list Pane (which will show the list details on the right)\nlet listPane = document.createElement(\"div\");\nlistPane.id = 'listPane';\n\ncontent.append(projectPane);\ncontent.append(listPane);\ncontainer.append(content);\n\n//list title div\nlet listTitleDiv = document.createElement(\"div\");\nlistTitleDiv.id = \"listTitle\";\n\n//list DueDate Div\nlet listDueDateDiv = document.createElement(\"div\");\nlistDueDateDiv.id = \"listDueDate\";\n\n//list Content Div\nlet listContentDiv = document.createElement(\"div\");\nlistContentDiv.id = \"listContent\";\n\n//list Action buttons\nlet listActionDiv = document.createElement(\"div\");\nlistActionDiv.id = \"listAction\";\n\n//list parent project\nlet listparentProjectDiv = document.createElement(\"div\");\nlistparentProjectDiv.id = \"listParentProject\";\nlistparentProjectDiv.innerHTML = \"Parent Project:\";\n\nfunction updateProjectDropdownValues() {\n    let projectList = document.getElementById('projectPane').getElementsByClassName('projects');\n    listParentProjectDropdown.innerHTML = \"\";\n    for (let item of projectList) {\n        console.log(item);\n        let dropdownItem = document.createElement(\"option\");\n        dropdownItem.classList.add(\"projectDropdownValue\");\n        dropdownItem.value = item.firstChild.innerText;\n        dropdownItem.innerHTML = item.firstChild.innerText;\n        listParentProjectDropdown.append(dropdownItem);\n    }\n}\n\n//Dropdown\nlet listParentProjectDropdown = document.createElement(\"select\");\nlistParentProjectDropdown.id = \"listParentProjectDropdown\";\nlistparentProjectDiv.append(listParentProjectDropdown);\n\nlistPane.append(listTitleDiv);\nlistPane.append(listDueDateDiv);\nlistPane.append(listContentDiv);\nlistPane.append(listActionDiv);\nlistPane.append(listparentProjectDiv);\n\n// Button to add a new project\nlet newProjectButton = document.createElement('button');\nnewProjectButton.innerHTML = 'NEW PROJECT';\nnewProjectButton.id = 'newProjectButton';\ncontent.append(newProjectButton);\n\n//Button to add a new To do List\nlet newListButton = document.createElement('button');\nnewListButton.innerHTML = 'CREATE A LIST';\nnewListButton.id = 'newListButton';\ncontent.append(newListButton);\n\n//Ask for project name when a new project is being added\nnewProjectButton.addEventListener(\"click\", () => {\n    let newProjName = prompt('Enter Project Name');\n    if (newProjName != '' && newProjName != null) {\n        addProjectDivToPane(newProjName);\n    }\n});\n\n//Function to add a project Div\nfunction addProjectDivToPane(projectTitle) {\n    let newProject = document.createElement('div');\n    newProject.id = 'projId' + (projectPane.childNodes.length + 1);\n    newProject.classList.add('projects');\n    newProject.append(document.createElement('p'));\n    newProject.firstChild.innerHTML = projectTitle;\n    projectPane.append(newProject);\n    return newProject.id;\n}\n\n//Function to add a list Div\nfunction addlistDivToProjectDiv(listTitle, listDueDate, projectDivId) {\n    let newlist = document.createElement('div');\n    newlist.classList.add('lists');\n    newlist.classList.add(projectDivId.toString());\n    newlist.id = 'listId' + (document.getElementById(projectDivId).childNodes.length).toString() + projectDivId;\n\n    let titleSpan = document.createElement('span');\n    titleSpan.classList.add('titleSpan');\n    titleSpan.innerHTML = listTitle;\n\n    let dueSpan = document.createElement('span');\n    dueSpan.innerHTML = listDueDate;\n    dueSpan.classList.add('dueDateSpan');\n\n    newlist.addEventListener(\"click\", () => {\n        showListDetails(newlist.id);\n    });\n\n    newlist.append(titleSpan);\n    newlist.append(dueSpan);\n    document.getElementById(projectDivId).append(newlist);\n    return newlist.id;\n}\n\nfunction showListDetails(listId) {\n    const list = document.getElementById(listId);\n    listTitleDiv.innerHTML = list.firstChild.innerHTML;\n    listDueDateDiv.innerHTML = list.children[1].innerHTML;\n    console.log(list.parentNode.firstChild.innerHTML);\n    listParentProjectDropdown.selectedIndex = parseInt(list.parentNode.id.toString().substring(6,)) - 1;\n\n}\n\n\n\n\n//TESTING\nlet projId = addProjectDivToPane('ABCD');\naddlistDivToProjectDiv('pqwe', '23 Dec', projId);\naddlistDivToProjectDiv('wer', '25 Dec', projId);\naddlistDivToProjectDiv('wesdfdsfgr', '25 Dec', projId);\naddlistDivToProjectDiv('wer', '25 Dec', projId);\naddlistDivToProjectDiv('wer', '25 Dec', projId);\naddlistDivToProjectDiv('wersdgdggggghhsdfdg', '25 Dec', projId);\n\nlet projId2 = addProjectDivToPane('EFGH');\naddlistDivToProjectDiv('wer', '25 Dec', projId2);\naddlistDivToProjectDiv('wer', '25 Dec', projId2);\naddlistDivToProjectDiv('wer', '25 Dec', projId2);\n\naddProjectDivToPane('PQRS');\naddProjectDivToPane('WXYZ');\nupdateProjectDropdownValues();\n\n\n\n//# sourceURL=webpack://odin-todo/./src/layout.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ (() => {

eval("function List(title, desc, dueDate, priority, noteId, parentProjectId) {\n    this.title = title;\n    this.desc = desc;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.listId = listId;\n    this.parentProjectId = parentProjectId;\n\n    setTitle = (newTitle) => {\n        this.title = newTitle;\n    }\n    getTitle = () => {\n        return this.title;\n    }\n    setDesc = (newDesc) => {\n        this.desc = newDesc;\n    }\n    getDesc = () => {\n        return this.desc;\n    }\n    setPriority = (newPriority) => {\n        this.priority = newPriority;\n    }\n    getPriority = () => {\n        return this.priority;\n    }\n    setDueDate = (newDueDate) => {\n        this.dueDate = newDueDate;\n    }\n    getDueDate = () => {\n        return this.dueDate;\n    }\n    setParentProjectId = (newParentProjectId) => {\n        this.parentProjectId = newParentProjectId;\n    }\n    getParentProjectId = () => {\n        return this.parentProjectId;\n    }\n    setListId = (newListId) => {\n        this.listId = newListId;\n    }\n    getListId = () => {\n        return this.listId;\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ (() => {

eval("function Project(name, lists, projectId) {\n    this.name = name;\n    this.lists = lists;\n    this.projectId = projectId;\n\n    setName = (newName) => {\n        this.name = newName;\n    }\n    getName = () => {\n        return this.name;\n    }\n    setLists = (newLists) => {\n        this.notes = newLists;\n    }\n    getLists = () => {\n        return this.lists;\n    }\n    setProjectId = (newProjectId) => {\n        this.projectId = newProjectId;\n    }\n    getProjectId = () => {\n        return this.projectId;\n    }\n\n\n    this.removeLists = function () {\n        this.lists = [];\n    }\n}\n\n//# sourceURL=webpack://odin-todo/./src/project.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;