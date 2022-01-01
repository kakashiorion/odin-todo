/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --lightColor: #f6e8ea;\n    --primaryColor: #ef626c;\n    --darkColor: #22181c;\n    --secondaryColor: #84dccf;\n}\n\nbody {\n    margin: 0px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n#header {\n    background-color: var(--darkColor);\n    opacity: 0.8;\n    color: white;\n    height: 6vh;\n    font-weight: 600;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 10px;\n    width: 100%;\n}\n\n#content {\n    display: grid;\n    height: 94vh;\n    width: 100%;\n    grid-template-columns: 368px 3fr;\n}\n\n#projectPane {\n    background-color: white;\n    padding: 8px 16px 0px 16px;\n    font-weight: bold;\n    font-size: 20px;\n    overflow: scroll;\n    position: relative;\n    height: 85%;\n}\n\n#listPane {\n    background-color: var(--lightColor);\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 48px 480px 48px;\n    gap: 16px;\n}\n\n#listTitle {\n    height: 48px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    border-radius: 4px;\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    box-sizing: border-box;\n    border: none;\n}\n\n#listDueDate {\n    height: 48px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    border-radius: 4px;\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    box-sizing: border-box;\n    border: none;\n}\n\n#listContent {\n    height: 480px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    border-radius: 4px;\n    border: none;\n    display: flex;\n    align-items: flex-start;\n}\n\n#listAction {\n    height: 48px;\n    margin: 24px;\n    /* border: 1px solid var(--primaryColor); */\n    border: none;\n    border-radius: 4px;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    gap: 16px;\n    justify-content: start;\n    align-items: center;\n}\n\n#listParentProject {\n    height: 48px;\n    margin: 24px;\n    /* border: 1px solid var(--primaryColor); */\n    border-radius: 4px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 0px 0px 16px;\n    align-items: center;\n    background-color: white;\n}\n\n#listParentProjectDropdown {\n    width: 60%;\n    height: 100%;\n    background-color: var(--primaryColor);\n    border-radius: 4px;\n    border: none;\n    padding: 8px;\n    color: white;\n}\n\n#newProjectButton {\n    height: 48px;\n    width: 160px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    left: 16px;\n    bottom: 16px;\n    font-size: 14px;\n    background-color: var(--darkColor);\n    color: white;\n    border-radius: 32px;\n    border: none;\n}\n\n#newListButton {\n    height: 48px;\n    width: 160px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    left: 192px;\n    bottom: 16px;\n    font-size: 14px;\n    background-color: var(--primaryColor);\n    color: white;\n    border-radius: 32px;\n    border: none;\n}\n\n#modal {\n    display: none;\n    z-index: 1;\n    position: absolute;\n    margin: auto;\n    left: 0px;\n    right: 0px;\n    width: 400px;\n    background-color: var(--darkColor);\n    color: white;\n    padding: 24px;\n    grid-template-rows: 1fr 2fr 1fr;\n    gap: 8px;\n}\n\n#modalButton1,\n#modalButton2 {\n    border: none;\n    width: 64px;\n    height: 32px;\n    border-radius: 4px;\n    margin-left: 16px;\n    margin-right: 16px;\n}\n\n#saveListButton {\n    height: 48px;\n    width: 128px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    background-color: var(--secondaryColor);\n    color: white;\n    border-radius: 4px;\n    border: none;\n}\n\n#deleteListButton {\n    height: 48px;\n    width: 128px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    background-color: var(--primaryColor);\n    color: white;\n    border-radius: 4px;\n    border: none;\n}\n\n.projects {\n    display: block;\n    font-weight: 600;\n    font-size: 16px;\n    height: max(40px, auto);\n    width: auto;\n    padding: 8px 12px;\n    margin: 16px 0px;\n    align-items: center;\n    border-radius: 4px;\n    background-color: white;\n    border: 1px solid lightgrey;\n}\n\n.projectTitle {\n    display: grid;\n    grid-template-columns: 70% 2fr 1fr;\n    gap: 8px;\n    align-items: center;\n}\n\n.addListButton {\n    height: 24px;\n    width: 24px;\n    border-radius: 4px;\n    color: white;\n    background-color: var(--secondaryColor);\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.deleteProjectButton {\n    height: 24px;\n    width: 24px;\n    border-radius: 32px;\n    font-size: 20px;\n    color: white;\n    display: flex;\n    background-color: var(--primaryColor);\n    align-items: center;\n    justify-content: center;\n    border: none;\n}\n\n.titleSpan {\n    max-width: 50%;\n    overflow-x: hidden;\n}\n\n.dueDateSpan {\n    font-size: 14px;\n}\n\n.lists {\n    display: flex;\n    justify-content: space-between;\n    font-weight: 400;\n    font-size: 16px;\n    height: 24px;\n    width: auto;\n    padding: 4px 12px 4px 12px;\n    margin: 8px;\n    align-items: center;\n    border-radius: 4px;\n}\n\n.lists:hover {\n    background-color: var(--lightColor);\n}\n\n.addListButton:hover {\n    width: 48px;\n}\n\n.lists:enabled {\n    background-color: var(--secondaryColor);\n}\n\n::-webkit-scrollbar {\n    width: 0;\n    /* Remove scrollbar space */\n    background: transparent;\n    /* Optional: just make scrollbar invisible */\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --lightColor: #f6e8ea;\n    --primaryColor: #ef626c;\n    --darkColor: #22181c;\n    --secondaryColor: #84dccf;\n}\n\nbody {\n    margin: 0px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n#header {\n    background-color: var(--darkColor);\n    opacity: 0.8;\n    color: white;\n    height: 6vh;\n    font-weight: 600;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 10px;\n    width: 100%;\n}\n\n#content {\n    display: grid;\n    height: 94vh;\n    width: 100%;\n    grid-template-columns: 368px 3fr;\n}\n\n#projectPane {\n    background-color: white;\n    padding: 8px 16px 0px 16px;\n    font-weight: bold;\n    font-size: 20px;\n    overflow: scroll;\n    position: relative;\n    height: 85%;\n}\n\n#listPane {\n    background-color: var(--lightColor);\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 48px 480px 48px;\n    gap: 16px;\n}\n\n#listTitle {\n    height: 48px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    border-radius: 4px;\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    box-sizing: border-box;\n    border: none;\n}\n\n#listDueDate {\n    height: 48px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    border-radius: 4px;\n    display: flex;\n    padding: 8px;\n    align-items: center;\n    box-sizing: border-box;\n    border: none;\n}\n\n#listContent {\n    height: 480px;\n    margin: 24px;\n    background-color: white;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    border-radius: 4px;\n    border: none;\n    display: flex;\n    align-items: flex-start;\n}\n\n#listAction {\n    height: 48px;\n    margin: 24px;\n    /* border: 1px solid var(--primaryColor); */\n    border: none;\n    border-radius: 4px;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    display: flex;\n    gap: 16px;\n    justify-content: start;\n    align-items: center;\n}\n\n#listParentProject {\n    height: 48px;\n    margin: 24px;\n    /* border: 1px solid var(--primaryColor); */\n    border-radius: 4px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 0px 0px 16px;\n    align-items: center;\n    background-color: white;\n}\n\n#listParentProjectDropdown {\n    width: 60%;\n    height: 100%;\n    background-color: var(--primaryColor);\n    border-radius: 4px;\n    border: none;\n    padding: 8px;\n    color: white;\n}\n\n#newProjectButton {\n    height: 48px;\n    width: 160px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    left: 16px;\n    bottom: 16px;\n    font-size: 14px;\n    background-color: var(--darkColor);\n    color: white;\n    border-radius: 32px;\n    border: none;\n}\n\n#newListButton {\n    height: 48px;\n    width: 160px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    left: 192px;\n    bottom: 16px;\n    font-size: 14px;\n    background-color: var(--primaryColor);\n    color: white;\n    border-radius: 32px;\n    border: none;\n}\n\n#modal {\n    display: none;\n    z-index: 1;\n    position: absolute;\n    margin: auto;\n    left: 0px;\n    right: 0px;\n    width: 400px;\n    background-color: var(--darkColor);\n    color: white;\n    padding: 24px;\n    grid-template-rows: 1fr 2fr 1fr;\n    gap: 8px;\n}\n\n#modalButton1,\n#modalButton2 {\n    border: none;\n    width: 64px;\n    height: 32px;\n    border-radius: 4px;\n    margin-left: 16px;\n    margin-right: 16px;\n}\n\n#saveListButton {\n    height: 48px;\n    width: 128px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    background-color: var(--secondaryColor);\n    color: white;\n    border-radius: 4px;\n    border: none;\n}\n\n#deleteListButton {\n    height: 48px;\n    width: 128px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    background-color: var(--primaryColor);\n    color: white;\n    border-radius: 4px;\n    border: none;\n}\n\n.projects {\n    display: block;\n    font-weight: 600;\n    font-size: 16px;\n    height: max(40px, auto);\n    width: auto;\n    padding: 8px 12px;\n    margin: 16px 0px;\n    align-items: center;\n    border-radius: 4px;\n    background-color: white;\n    border: 1px solid lightgrey;\n}\n\n.projectTitle {\n    display: grid;\n    grid-template-columns: 70% 2fr 1fr;\n    gap: 8px;\n    align-items: center;\n}\n\n.addListButton {\n    height: 24px;\n    width: 24px;\n    border-radius: 4px;\n    color: white;\n    background-color: var(--secondaryColor);\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.deleteProjectButton {\n    height: 24px;\n    width: 24px;\n    border-radius: 32px;\n    font-size: 20px;\n    color: white;\n    display: flex;\n    background-color: var(--primaryColor);\n    align-items: center;\n    justify-content: center;\n    border: none;\n}\n\n.titleSpan {\n    max-width: 50%;\n    overflow-x: hidden;\n}\n\n.dueDateSpan {\n    font-size: 14px;\n}\n\n.lists {\n    display: flex;\n    justify-content: space-between;\n    font-weight: 400;\n    font-size: 16px;\n    height: 24px;\n    width: auto;\n    padding: 4px 12px 4px 12px;\n    margin: 8px;\n    align-items: center;\n    border-radius: 4px;\n}\n\n.lists:hover {\n    background-color: var(--lightColor);\n}\n\n.addListButton:hover {\n    width: 48px;\n}\n\n.lists:enabled {\n    background-color: var(--secondaryColor);\n}\n\n::-webkit-scrollbar {\n    width: 0;\n    /* Remove scrollbar space */\n    background: transparent;\n    /* Optional: just make scrollbar invisible */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
// import './project.js';



// Main Container
let container = document.getElementById("container");

// Header (Static app headline)
let header = document.createElement("div");
header.id = "header";
header.innerHTML = "To Do List";
container.append(header);

// Content UI (This will show all the dynamic content)
let content = document.createElement("div");
content.id = "content";

// Project Pane (which will show projects and lists list on the left)
let projectPane = document.createElement("div");
projectPane.id = "projectPane";
// projectPane.innerHTML = 'My Projects';

// List Pane (which will show the list details on the right)
let listPane = document.createElement("div");
listPane.id = "listPane";

content.append(projectPane);
content.append(listPane);
container.append(content);

//list title div
let listTitleDiv = document.createElement("input");
listTitleDiv.id = "listTitle";
listTitleDiv.type = "text";

//list DueDate Div
let listDueDateDiv = document.createElement("input");
listDueDateDiv.id = "listDueDate";
listDueDateDiv.type = "text";

//list Content Div
let listContentDiv = document.createElement("input");
listContentDiv.id = "listContent";
listContentDiv.type = "text";

//List action buttons Div
let listActionDiv = document.createElement("div");
listActionDiv.id = "listAction";

//Save list button
let saveListButton = document.createElement("button");
saveListButton.id = "saveListButton";
saveListButton.innerHTML = "SAVE";
listActionDiv.append(saveListButton);
saveListButton.onclick = () => {
    updateList();
    showExistingProjects();
};

//Function to update currently open list
function updateList() {
    _list_js__WEBPACK_IMPORTED_MODULE_0__.updateListDetails(
        listTitleDiv.value,
        listContentDiv.value,
        listDueDateDiv.value,
        currentList.listId,
        currentList.parentProjectId
    );
    if (
        listParentProjectDropdown.value !=
        _project_js__WEBPACK_IMPORTED_MODULE_1__.getSingleProject(currentList.parentProjectId).name
    ) {
        let projects = _project_js__WEBPACK_IMPORTED_MODULE_1__.getAllProjects();
        for (let p = 0; p < projects.length; p++) {
            if (projects[p].name == listParentProjectDropdown.value) {
                let newProjId = projects[p].projectId;
                let newId = _list_js__WEBPACK_IMPORTED_MODULE_0__.updateListParent(
                    currentList.listId,
                    currentList.parentProjectId,
                    newProjId
                );
                currentList = _list_js__WEBPACK_IMPORTED_MODULE_0__.getSingleList(newId, newProjId);
                break;
            }
        }
    }
}

//Delete list button
let deleteListButton = document.createElement("button");
deleteListButton.id = "deleteListButton";
deleteListButton.innerHTML = "DELETE";
listActionDiv.append(deleteListButton);
deleteListButton.onclick = () => {
    _list_js__WEBPACK_IMPORTED_MODULE_0__.removeList(currentList.listId, currentList.parentProjectId);
    currentList = null;
    showExistingProjects();
    clearCurrentListUI();
};

function clearCurrentListUI() {
    listTitleDiv.value = "";
    listDueDateDiv.value = "";
    listContentDiv.value = "";
    listParentProjectDropdown.value = "";
}

//list parent project bar
let listparentProjectDiv = document.createElement("div");
listparentProjectDiv.id = "listParentProject";
listparentProjectDiv.innerHTML = "Parent Project:";

function updateProjectDropdownValues() {
    let projectList = _project_js__WEBPACK_IMPORTED_MODULE_1__.getAllProjects();
    listParentProjectDropdown.innerHTML = "";
    for (let item of projectList) {
        let dropdownItem = document.createElement("option");
        dropdownItem.classList.add("projectDropdownValue");
        let title = item.name;
        dropdownItem.value = title;
        dropdownItem.innerHTML = title;
        listParentProjectDropdown.append(dropdownItem);
    }
}

//Parent project Dropdown
let listParentProjectDropdown = document.createElement("select");
listParentProjectDropdown.id = "listParentProjectDropdown";
listparentProjectDiv.append(listParentProjectDropdown);

listPane.append(listTitleDiv);
listPane.append(listDueDateDiv);
listPane.append(listContentDiv);
listPane.append(listActionDiv);
listPane.append(listparentProjectDiv);

// Button to add a new project
let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "NEW PROJECT";
newProjectButton.id = "newProjectButton";
content.append(newProjectButton);

//Ask for project name when a new project is being added
newProjectButton.addEventListener("click", () => {
    let newProjName = prompt("Enter Project Name");
    if (newProjName && newProjName.trim()) {
        let newProjectId = addProjectDivToPane(newProjName);
        _project_js__WEBPACK_IMPORTED_MODULE_1__.createAndStoreProject(newProjectId, newProjName);
        updateProjectDropdownValues();
    }
});

//Button to add a new To do List
let newListButton = document.createElement("button");
newListButton.innerHTML = "CREATE A LIST";
newListButton.id = "newListButton";
content.append(newListButton);

//Function to add a project Div
function addProjectDivToPane(projectTitle) {
    let newProject = document.createElement("div");
    let pCounter = _project_js__WEBPACK_IMPORTED_MODULE_1__.getProjectCounter();
    pCounter += 1;
    newProject.id = "projId" + pCounter;
    newProject.classList.add("projects");
    newProject.append(document.createElement("div"));
    newProject.firstChild.classList.add("projectTitle");
    newProject.firstChild.innerHTML = projectTitle;
    newProject.firstChild.append(...addProjectActionButtons(newProject.id));
    projectPane.append(newProject);
    _project_js__WEBPACK_IMPORTED_MODULE_1__.setProjectCounter(pCounter);
    return newProject.id;
}

//Function for project action buttons
function addProjectActionButtons(projId) {
    //Add list button
    let addListButton = document.createElement("button");
    addListButton.classList.add(projId);
    addListButton.classList.add("addListButton");
    addListButton.innerHTML = "+";
    addListButton.onclick = () => {
        let newListTitle = prompt("Adding a new list. Give it a title:");
        if (newListTitle && newListTitle.trim()) {
            let listId = addlistDivToProjectDiv(newListTitle, "", projId);
            _list_js__WEBPACK_IMPORTED_MODULE_0__.createAndStoreList(
                newListTitle,
                "",
                "",
                listId,
                projId
            );
            showListDetails(listId, projId);
        }
    };
    addListButton.onmouseenter = () => {
        addListButton.innerHTML = "+ List";
    };
    addListButton.onmouseleave = () => {
        addListButton.innerHTML = "+";
    };
    //Delete project button
    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add(projId);
    deleteProjectButton.classList.add("deleteProjectButton");
    deleteProjectButton.innerHTML = "-";
    deleteProjectButton.onclick = () => {
        if (
            Object.keys(_project_js__WEBPACK_IMPORTED_MODULE_1__.getSingleProject(projId).lists)
                .length == 1
        ) {
            _project_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject(projId);
            showExistingProjects();
        } else {
            showDeleteProjectModal(
                "Are you sure you want to delete this?",
                "This project contains some lists. You will lose your data if you delete this project.",
                "Delete",
                "No",
                projId
            );
        }
    };
    return [addListButton, deleteProjectButton];
}

//Modal to display when clicking an action
let modal = document.createElement("div");
modal.id = "modal";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalTitle";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalContent";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalButtons";
modal.lastChild.append(document.createElement("button"));
modal.lastChild.append(document.createElement("button"));
modal.lastChild.firstChild.id = "modalButton1";
modal.lastChild.lastChild.id = "modalButton2";
content.append(modal);

//Function to display delete project modal
function showDeleteProjectModal(title, content, buttonYes, buttonNo, projId) {
    modal.style.display = "grid";
    modal.firstChild.innerText = title;
    modal.childNodes[1].innerText = content;
    modal.lastChild.firstChild.innerText = buttonYes;
    modal.lastChild.firstChild.style.backgroundColor = "#EF626C";
    modal.lastChild.lastChild.innerText = buttonNo;
    modal.lastChild.lastChild.style.backgroundColor = "white";

    modal.lastChild.firstChild.onclick = () => {
        modal.style.display = "none";
        _project_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject(projId);
        showExistingProjects();
    };
    modal.lastChild.lastChild.onclick = () => {
        modal.style.display = "none";
    };
}

//Function to add a list Div
function addlistDivToProjectDiv(listTitle, listDueDate, projectDivId) {
    let newlist = document.createElement("div");
    newlist.classList.add("lists");
    newlist.classList.add(projectDivId.toString());
    let lCounter = _list_js__WEBPACK_IMPORTED_MODULE_0__.getListCounter(projectDivId);
    lCounter += 1;
    newlist.id = "listId" + lCounter.toString() + projectDivId;
    _list_js__WEBPACK_IMPORTED_MODULE_0__.setListCounter(projectDivId, lCounter);

    let titleSpan = document.createElement("span");
    titleSpan.classList.add("titleSpan");
    titleSpan.innerHTML = listTitle;

    let dueSpan = document.createElement("span");
    dueSpan.innerHTML = listDueDate;
    dueSpan.classList.add("dueDateSpan");

    newlist.addEventListener("click", () => {
        showListDetails(newlist.id, projectDivId);
    });

    newlist.append(titleSpan);
    newlist.append(dueSpan);
    document.getElementById(projectDivId).append(newlist);
    return newlist.id;
}
let currentList = null;
//Function to show selected list's details
function showListDetails(listId, projId) {
    currentList = _list_js__WEBPACK_IMPORTED_MODULE_0__.getSingleList(listId, projId);
    listTitleDiv.value = currentList.title;
    listDueDateDiv.value = currentList.dueDate;
    listContentDiv.value = currentList.desc;
    let projects = document.getElementsByClassName("projects");
    for (let p = 0; p < projects.length; p++) {
        if (projects[p].id == projId) {
            listParentProjectDropdown.selectedIndex = p;
            break;
        }
    }
    let allLists = document.getElementsByClassName("lists");
    for (let item of allLists) {
        item.style.backgroundColor = "white";
    }
    let thisList = document.getElementById(listId);
    thisList.style.backgroundColor = "#84dccf";
}

//Function to load all existing projects from storage
function showExistingProjects() {
    projectPane.innerHTML = "";
    let allProjects = _project_js__WEBPACK_IMPORTED_MODULE_1__.getAllProjects();
    for (let item of allProjects) {
        showProjectDiv(item);
    }
}

//Function to show a project from storage on UI
function showProjectDiv(projectObject) {
    let newProject = document.createElement("div");
    newProject.id = projectObject.projectId;
    newProject.classList.add("projects");
    newProject.append(document.createElement("div"));
    newProject.firstChild.classList.add("projectTitle");
    newProject.firstChild.innerHTML = projectObject.name;
    newProject.firstChild.append(...addProjectActionButtons(newProject.id));
    projectPane.append(newProject);
    let lists = _list_js__WEBPACK_IMPORTED_MODULE_0__.getAllLists(projectObject.projectId);
    for (let child of lists) {
        showListDiv(child);
    }
}

//Function to show a list from storage on UI
function showListDiv(listObject) {
    let newlist = document.createElement("div");
    newlist.classList.add("lists");
    newlist.classList.add(listObject.parentProjectId);
    newlist.id = listObject.listId;

    let titleSpan = document.createElement("span");
    titleSpan.classList.add("titleSpan");
    titleSpan.innerHTML = listObject.title;

    let dueSpan = document.createElement("span");
    dueSpan.innerHTML = listObject.dueDate;
    dueSpan.classList.add("dueDateSpan");

    if (currentList && listObject.listId == currentList.listId) {
        newlist.style.backgroundColor = "#84dccf";
    }

    newlist.addEventListener("click", () => {
        showListDetails(newlist.id, listObject.parentProjectId);
    });

    newlist.append(titleSpan);
    newlist.append(dueSpan);
    document.getElementById(listObject.parentProjectId).append(newlist);
    return newlist.id;
}

//Execute on page load
if (localStorage.length == 0) {
    _project_js__WEBPACK_IMPORTED_MODULE_1__.setProjectCounter(0);
}
showExistingProjects();
updateProjectDropdownValues();


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAndStoreList": () => (/* binding */ createAndStoreList),
/* harmony export */   "getAllLists": () => (/* binding */ getAllLists),
/* harmony export */   "getSingleList": () => (/* binding */ getSingleList),
/* harmony export */   "getListCounter": () => (/* binding */ getListCounter),
/* harmony export */   "setListCounter": () => (/* binding */ setListCounter),
/* harmony export */   "updateListDetails": () => (/* binding */ updateListDetails),
/* harmony export */   "updateListParent": () => (/* binding */ updateListParent),
/* harmony export */   "removeList": () => (/* binding */ removeList)
/* harmony export */ });
function List(title, desc, dueDate, listId, parentProjectId) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.listId = listId;
    this.parentProjectId = parentProjectId;
}

function createAndStoreList(
    listTitle,
    listDesc,
    listDueDate,
    listId,
    parentProjectId
) {
    let newList = new List(
        listTitle,
        listDesc,
        listDueDate,
        listId,
        parentProjectId
    );
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    parentProject.lists[listId] = newList;
    localStorage.setItem(
        parentProjectId.toString(),
        JSON.stringify(parentProject)
    );
}

function getAllLists(parentProjectId) {
    let newProject = JSON.parse(
        localStorage.getItem(parentProjectId.toString())
    );
    let allLists = [];
    for (let item in newProject.lists) {
        if (item != "lCounter") {
            allLists.push(newProject.lists[item]);
        }
    }
    return allLists;
}

function getSingleList(listId, parentProjectId) {
    let newProject = JSON.parse(
        localStorage.getItem(parentProjectId.toString())
    );
    return newProject.lists[listId];
}

function getListCounter(parentProjectId) {
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    return parseInt(parentProject.lists["lCounter"]);
}

function setListCounter(parentProjectId, value) {
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    parentProject.lists["lCounter"] = value.toString();
    localStorage.setItem(
        parentProjectId.toString(),
        JSON.stringify(parentProject)
    );
}

function updateListDetails(
    title,
    desc,
    dueDate,
    listId,
    parentProjectId
) {
    let newProject = JSON.parse(
        localStorage.getItem(parentProjectId.toString())
    );
    let newList = newProject.lists[listId];
    newList.title = title;
    newList.desc = desc;
    newList.dueDate = dueDate;
    newProject.lists[listId] = newList;
    localStorage.setItem(
        parentProjectId.toString(),
        JSON.stringify(newProject)
    );
}

function updateListParent(
    listId,
    oldParentProjectId,
    newParentProjectId
) {
    let oldProject = JSON.parse(
        localStorage.getItem(oldParentProjectId.toString())
    );
    let newList = Object.assign({}, oldProject.lists[listId]);
    delete oldProject.lists[listId];
    localStorage.setItem(
        oldParentProjectId.toString(),
        JSON.stringify(oldProject)
    );
    let newProject = JSON.parse(
        localStorage.getItem(newParentProjectId.toString())
    );
    let lc = parseInt(newProject.lists["lCounter"]);
    lc += 1;
    let newListId = "listId" + lc.toString() + newParentProjectId.toString();
    newProject.lists["lCounter"] = lc.toString();
    newList.listId = newListId;
    newList.parentProjectId = newParentProjectId;
    newProject.lists[newListId] = newList;
    localStorage.setItem(
        newParentProjectId.toString(),
        JSON.stringify(newProject)
    );
    return newListId;
}

function removeList(listId, parentProjectId) {
    let oldProject = JSON.parse(
        localStorage.getItem(parentProjectId.toString())
    );
    delete oldProject.lists[listId];
    localStorage.setItem(
        parentProjectId.toString(),
        JSON.stringify(oldProject)
    );
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAndStoreProject": () => (/* binding */ createAndStoreProject),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getProjectIndex": () => (/* binding */ getProjectIndex),
/* harmony export */   "getSingleProject": () => (/* binding */ getSingleProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "addListToProject": () => (/* binding */ addListToProject),
/* harmony export */   "getProjectCounter": () => (/* binding */ getProjectCounter),
/* harmony export */   "setProjectCounter": () => (/* binding */ setProjectCounter)
/* harmony export */ });
function Project(name, lists, projectId) {
    this.name = name;
    this.lists = lists;
    this.projectId = projectId;
}


function createAndStoreProject(projId, projName) {
    let newProject = new Project(projName, { 'lCounter': '0' }, projId);
    localStorage.setItem(projId.toString(), JSON.stringify(newProject));
}

function getAllProjects() {
    let allProjects = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != 'pCounter') {
            let newProject = JSON.parse(localStorage.getItem(localStorage.key(i)));
            allProjects.push(newProject);
        }
    }
    return allProjects;
}

function getProjectIndex(projectId) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    for (let i = 1; i < localStorage.length; i++) {
        if (localStorage.key(i) == newProject.name) {
            return i - 1;
        }
    }
}

function getSingleProject(projectId) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    return newProject;
}

function deleteProject(projectId) {
    localStorage.removeItem(projectId);
}

function addListToProject(projectId, list) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    newProject.lists[list.listId] = list;
    localStorage.setItem(projId.toString(), JSON.stringify(newProject));
}

function getProjectCounter() {
    return parseInt(localStorage.getItem('pCounter'));
}

function setProjectCounter(value) {
    localStorage.setItem('pCounter', value.toString());
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsNEJBQTRCLDhCQUE4QiwyQkFBMkIsZ0NBQWdDLEdBQUcsVUFBVSxrQkFBa0IseUJBQXlCLHlCQUF5QixHQUFHLGFBQWEseUNBQXlDLG1CQUFtQixtQkFBbUIsa0JBQWtCLHVCQUF1QixzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsd0JBQXdCLGtCQUFrQixHQUFHLGNBQWMsb0JBQW9CLG1CQUFtQixrQkFBa0IsdUNBQXVDLEdBQUcsa0JBQWtCLDhCQUE4QixpQ0FBaUMsd0JBQXdCLHNCQUFzQix1QkFBdUIseUJBQXlCLGtCQUFrQixHQUFHLGVBQWUsMENBQTBDLG9CQUFvQixxQ0FBcUMsMENBQTBDLGdCQUFnQixHQUFHLGdCQUFnQixtQkFBbUIsbUJBQW1CLDhCQUE4QiwyQkFBMkIseUJBQXlCLHlCQUF5QixvQkFBb0IsbUJBQW1CLDBCQUEwQiw2QkFBNkIsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQixtQkFBbUIsOEJBQThCLDJCQUEyQix5QkFBeUIseUJBQXlCLG9CQUFvQixtQkFBbUIsMEJBQTBCLDZCQUE2QixtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLG1CQUFtQiw4QkFBOEIsMkJBQTJCLHlCQUF5Qix5QkFBeUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsR0FBRyxpQkFBaUIsbUJBQW1CLG1CQUFtQixnREFBZ0QscUJBQXFCLHlCQUF5QiwyQkFBMkIseUJBQXlCLG9CQUFvQixnQkFBZ0IsNkJBQTZCLDBCQUEwQixHQUFHLHdCQUF3QixtQkFBbUIsbUJBQW1CLGdEQUFnRCwyQkFBMkIsMkJBQTJCLHlCQUF5QixvQkFBb0IscUNBQXFDLGdDQUFnQywwQkFBMEIsOEJBQThCLEdBQUcsZ0NBQWdDLGlCQUFpQixtQkFBbUIsNENBQTRDLHlCQUF5QixtQkFBbUIsbUJBQW1CLG1CQUFtQixHQUFHLHVCQUF1QixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixpQkFBaUIsbUJBQW1CLHNCQUFzQix5Q0FBeUMsbUJBQW1CLDBCQUEwQixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsNENBQTRDLG1CQUFtQiwwQkFBMEIsbUJBQW1CLEdBQUcsWUFBWSxvQkFBb0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIseUNBQXlDLG1CQUFtQixvQkFBb0Isc0NBQXNDLGVBQWUsR0FBRyxtQ0FBbUMsbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsR0FBRyxxQkFBcUIsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsOENBQThDLG1CQUFtQix5QkFBeUIsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLDRDQUE0QyxtQkFBbUIseUJBQXlCLG1CQUFtQixHQUFHLGVBQWUscUJBQXFCLHVCQUF1QixzQkFBc0IsOEJBQThCLGtCQUFrQix3QkFBd0IsdUJBQXVCLDBCQUEwQix5QkFBeUIsOEJBQThCLGtDQUFrQyxHQUFHLG1CQUFtQixvQkFBb0IseUNBQXlDLGVBQWUsMEJBQTBCLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0IseUJBQXlCLG1CQUFtQiw4Q0FBOEMsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRywwQkFBMEIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsc0JBQXNCLG1CQUFtQixvQkFBb0IsNENBQTRDLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEdBQUcsZ0JBQWdCLHFCQUFxQix5QkFBeUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsWUFBWSxvQkFBb0IscUNBQXFDLHVCQUF1QixzQkFBc0IsbUJBQW1CLGtCQUFrQixpQ0FBaUMsa0JBQWtCLDBCQUEwQix5QkFBeUIsR0FBRyxrQkFBa0IsMENBQTBDLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLG9CQUFvQiw4Q0FBOEMsR0FBRyx5QkFBeUIsZUFBZSxnRUFBZ0Usc0RBQXNELFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGlDQUFpQyw0QkFBNEIsOEJBQThCLDJCQUEyQixnQ0FBZ0MsR0FBRyxVQUFVLGtCQUFrQix5QkFBeUIseUJBQXlCLEdBQUcsYUFBYSx5Q0FBeUMsbUJBQW1CLG1CQUFtQixrQkFBa0IsdUJBQXVCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDhCQUE4Qix3QkFBd0Isa0JBQWtCLEdBQUcsY0FBYyxvQkFBb0IsbUJBQW1CLGtCQUFrQix1Q0FBdUMsR0FBRyxrQkFBa0IsOEJBQThCLGlDQUFpQyx3QkFBd0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEdBQUcsZUFBZSwwQ0FBMEMsb0JBQW9CLHFDQUFxQywwQ0FBMEMsZ0JBQWdCLEdBQUcsZ0JBQWdCLG1CQUFtQixtQkFBbUIsOEJBQThCLDJCQUEyQix5QkFBeUIseUJBQXlCLG9CQUFvQixtQkFBbUIsMEJBQTBCLDZCQUE2QixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLG1CQUFtQiw4QkFBOEIsMkJBQTJCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsNkJBQTZCLG1CQUFtQixHQUFHLGtCQUFrQixvQkFBb0IsbUJBQW1CLDhCQUE4QiwyQkFBMkIseUJBQXlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDhCQUE4QixHQUFHLGlCQUFpQixtQkFBbUIsbUJBQW1CLGdEQUFnRCxxQkFBcUIseUJBQXlCLDJCQUEyQix5QkFBeUIsb0JBQW9CLGdCQUFnQiw2QkFBNkIsMEJBQTBCLEdBQUcsd0JBQXdCLG1CQUFtQixtQkFBbUIsZ0RBQWdELDJCQUEyQiwyQkFBMkIseUJBQXlCLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLDBCQUEwQiw4QkFBOEIsR0FBRyxnQ0FBZ0MsaUJBQWlCLG1CQUFtQiw0Q0FBNEMseUJBQXlCLG1CQUFtQixtQkFBbUIsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLGlCQUFpQixtQkFBbUIsc0JBQXNCLHlDQUF5QyxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHNCQUFzQiw0Q0FBNEMsbUJBQW1CLDBCQUEwQixtQkFBbUIsR0FBRyxZQUFZLG9CQUFvQixpQkFBaUIseUJBQXlCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLG1CQUFtQix5Q0FBeUMsbUJBQW1CLG9CQUFvQixzQ0FBc0MsZUFBZSxHQUFHLG1DQUFtQyxtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQiw4Q0FBOEMsbUJBQW1CLHlCQUF5QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0IsNENBQTRDLG1CQUFtQix5QkFBeUIsbUJBQW1CLEdBQUcsZUFBZSxxQkFBcUIsdUJBQXVCLHNCQUFzQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsa0NBQWtDLEdBQUcsbUJBQW1CLG9CQUFvQix5Q0FBeUMsZUFBZSwwQkFBMEIsR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsbUJBQW1CLDhDQUE4QyxtQkFBbUIsMEJBQTBCLHVCQUF1QixHQUFHLDBCQUEwQixtQkFBbUIsa0JBQWtCLDBCQUEwQixzQkFBc0IsbUJBQW1CLG9CQUFvQiw0Q0FBNEMsMEJBQTBCLDhCQUE4QixtQkFBbUIsR0FBRyxnQkFBZ0IscUJBQXFCLHlCQUF5QixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxZQUFZLG9CQUFvQixxQ0FBcUMsdUJBQXVCLHNCQUFzQixtQkFBbUIsa0JBQWtCLGlDQUFpQyxrQkFBa0IsMEJBQTBCLHlCQUF5QixHQUFHLGtCQUFrQiwwQ0FBMEMsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsb0JBQW9CLDhDQUE4QyxHQUFHLHlCQUF5QixlQUFlLGdFQUFnRSxzREFBc0QscUJBQXFCO0FBQzd2YztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFDMkM7QUFDTTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQStCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFpQztBQUN6QztBQUNBLHVCQUF1Qix1REFBK0I7QUFDdEQsd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0EsNEJBQTRCLHNEQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsdURBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBc0M7QUFDOUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFrQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFnQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBaUM7QUFDekQ7QUFDQTtBQUNBLFlBQVksc0RBQThCO0FBQzFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsc0RBQThCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUE0QjtBQUMvQztBQUNBO0FBQ0EsSUFBSSxvREFBNEI7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwREFBa0M7QUFDdEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ0M7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbGlnaHRDb2xvcjogI2Y2ZThlYTtcXG4gICAgLS1wcmltYXJ5Q29sb3I6ICNlZjYyNmM7XFxuICAgIC0tZGFya0NvbG9yOiAjMjIxODFjO1xcbiAgICAtLXNlY29uZGFyeUNvbG9yOiAjODRkY2NmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiA5NHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNjhweCAzZnI7XFxufVxcblxcbiNwcm9qZWN0UGFuZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweCAwcHggMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG59XFxuXFxuI2xpc3RQYW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4MHB4IDQ4cHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2xpc3REdWVEYXRlIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbGlzdENvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNsaXN0QWN0aW9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0UGFyZW50UHJvamVjdCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNuZXdQcm9qZWN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDE2cHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25ld0xpc3RCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMTkycHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI21vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jbW9kYWxCdXR0b24xLFxcbiNtb2RhbEJ1dHRvbjIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuI3NhdmVMaXN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2RlbGV0ZUxpc3RCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiAxMjhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiBtYXgoNDBweCwgYXV0byk7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgbWFyZ2luOiAxNnB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMmZyIDFmcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGVTcGFuIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmR1ZURhdGVTcGFuIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5saXN0czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbn1cXG5cXG4ubGlzdHM6ZW5hYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsUUFBUTtBQUNaOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLDRDQUE0QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbGlnaHRDb2xvcjogI2Y2ZThlYTtcXG4gICAgLS1wcmltYXJ5Q29sb3I6ICNlZjYyNmM7XFxuICAgIC0tZGFya0NvbG9yOiAjMjIxODFjO1xcbiAgICAtLXNlY29uZGFyeUNvbG9yOiAjODRkY2NmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiA5NHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNjhweCAzZnI7XFxufVxcblxcbiNwcm9qZWN0UGFuZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweCAwcHggMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG59XFxuXFxuI2xpc3RQYW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IDQ4MHB4IDQ4cHg7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuI2xpc3RUaXRsZSB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2xpc3REdWVEYXRlIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbGlzdENvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDQ4MHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNsaXN0QWN0aW9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0UGFyZW50UHJvamVjdCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNuZXdQcm9qZWN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDE2cHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25ld0xpc3RCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMTkycHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI21vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4jbW9kYWxCdXR0b24xLFxcbiNtb2RhbEJ1dHRvbjIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuI3NhdmVMaXN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogMTI4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2RlbGV0ZUxpc3RCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiAxMjhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiBtYXgoNDBweCwgYXV0byk7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgbWFyZ2luOiAxNnB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMmZyIDFmcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRMaXN0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGl0bGVTcGFuIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmR1ZURhdGVTcGFuIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubGlzdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogNHB4IDEycHggNHB4IDEycHg7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5saXN0czpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIHdpZHRoOiA0OHB4O1xcbn1cXG5cXG4ubGlzdHM6ZW5hYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgKiBhcyBsaXN0RnVuY3Rpb25zIGZyb20gXCIuL2xpc3QuanNcIjtcbmltcG9ydCAqIGFzIHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG4vLyBNYWluIENvbnRhaW5lclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBIZWFkZXIgKFN0YXRpYyBhcHAgaGVhZGxpbmUpXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5oZWFkZXIuaW5uZXJIVE1MID0gXCJUbyBEbyBMaXN0XCI7XG5jb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG5cbi8vIENvbnRlbnQgVUkgKFRoaXMgd2lsbCBzaG93IGFsbCB0aGUgZHluYW1pYyBjb250ZW50KVxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4vLyBQcm9qZWN0IFBhbmUgKHdoaWNoIHdpbGwgc2hvdyBwcm9qZWN0cyBhbmQgbGlzdHMgbGlzdCBvbiB0aGUgbGVmdClcbmxldCBwcm9qZWN0UGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0UGFuZS5pZCA9IFwicHJvamVjdFBhbmVcIjtcbi8vIHByb2plY3RQYW5lLmlubmVySFRNTCA9ICdNeSBQcm9qZWN0cyc7XG5cbi8vIExpc3QgUGFuZSAod2hpY2ggd2lsbCBzaG93IHRoZSBsaXN0IGRldGFpbHMgb24gdGhlIHJpZ2h0KVxubGV0IGxpc3RQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxpc3RQYW5lLmlkID0gXCJsaXN0UGFuZVwiO1xuXG5jb250ZW50LmFwcGVuZChwcm9qZWN0UGFuZSk7XG5jb250ZW50LmFwcGVuZChsaXN0UGFuZSk7XG5jb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXG4vL2xpc3QgdGl0bGUgZGl2XG5sZXQgbGlzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubGlzdFRpdGxlRGl2LmlkID0gXCJsaXN0VGl0bGVcIjtcbmxpc3RUaXRsZURpdi50eXBlID0gXCJ0ZXh0XCI7XG5cbi8vbGlzdCBEdWVEYXRlIERpdlxubGV0IGxpc3REdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubGlzdER1ZURhdGVEaXYuaWQgPSBcImxpc3REdWVEYXRlXCI7XG5saXN0RHVlRGF0ZURpdi50eXBlID0gXCJ0ZXh0XCI7XG5cbi8vbGlzdCBDb250ZW50IERpdlxubGV0IGxpc3RDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubGlzdENvbnRlbnREaXYuaWQgPSBcImxpc3RDb250ZW50XCI7XG5saXN0Q29udGVudERpdi50eXBlID0gXCJ0ZXh0XCI7XG5cbi8vTGlzdCBhY3Rpb24gYnV0dG9ucyBEaXZcbmxldCBsaXN0QWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxpc3RBY3Rpb25EaXYuaWQgPSBcImxpc3RBY3Rpb25cIjtcblxuLy9TYXZlIGxpc3QgYnV0dG9uXG5sZXQgc2F2ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2F2ZUxpc3RCdXR0b24uaWQgPSBcInNhdmVMaXN0QnV0dG9uXCI7XG5zYXZlTGlzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNBVkVcIjtcbmxpc3RBY3Rpb25EaXYuYXBwZW5kKHNhdmVMaXN0QnV0dG9uKTtcbnNhdmVMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgdXBkYXRlTGlzdCgpO1xuICAgIHNob3dFeGlzdGluZ1Byb2plY3RzKCk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIHVwZGF0ZSBjdXJyZW50bHkgb3BlbiBsaXN0XG5mdW5jdGlvbiB1cGRhdGVMaXN0KCkge1xuICAgIGxpc3RGdW5jdGlvbnMudXBkYXRlTGlzdERldGFpbHMoXG4gICAgICAgIGxpc3RUaXRsZURpdi52YWx1ZSxcbiAgICAgICAgbGlzdENvbnRlbnREaXYudmFsdWUsXG4gICAgICAgIGxpc3REdWVEYXRlRGl2LnZhbHVlLFxuICAgICAgICBjdXJyZW50TGlzdC5saXN0SWQsXG4gICAgICAgIGN1cnJlbnRMaXN0LnBhcmVudFByb2plY3RJZFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgICBsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duLnZhbHVlICE9XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0U2luZ2xlUHJvamVjdChjdXJyZW50TGlzdC5wYXJlbnRQcm9qZWN0SWQpLm5hbWVcbiAgICApIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbcF0ubmFtZSA9PSBsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Byb2pJZCA9IHByb2plY3RzW3BdLnByb2plY3RJZDtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SWQgPSBsaXN0RnVuY3Rpb25zLnVwZGF0ZUxpc3RQYXJlbnQoXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0Lmxpc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpc3QucGFyZW50UHJvamVjdElkLFxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qSWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZ1bmN0aW9ucy5nZXRTaW5nbGVMaXN0KG5ld0lkLCBuZXdQcm9qSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL0RlbGV0ZSBsaXN0IGJ1dHRvblxubGV0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGVsZXRlTGlzdEJ1dHRvbi5pZCA9IFwiZGVsZXRlTGlzdEJ1dHRvblwiO1xuZGVsZXRlTGlzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkRFTEVURVwiO1xubGlzdEFjdGlvbkRpdi5hcHBlbmQoZGVsZXRlTGlzdEJ1dHRvbik7XG5kZWxldGVMaXN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGlzdEZ1bmN0aW9ucy5yZW1vdmVMaXN0KGN1cnJlbnRMaXN0Lmxpc3RJZCwgY3VycmVudExpc3QucGFyZW50UHJvamVjdElkKTtcbiAgICBjdXJyZW50TGlzdCA9IG51bGw7XG4gICAgc2hvd0V4aXN0aW5nUHJvamVjdHMoKTtcbiAgICBjbGVhckN1cnJlbnRMaXN0VUkoKTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudExpc3RVSSgpIHtcbiAgICBsaXN0VGl0bGVEaXYudmFsdWUgPSBcIlwiO1xuICAgIGxpc3REdWVEYXRlRGl2LnZhbHVlID0gXCJcIjtcbiAgICBsaXN0Q29udGVudERpdi52YWx1ZSA9IFwiXCI7XG4gICAgbGlzdFBhcmVudFByb2plY3REcm9wZG93bi52YWx1ZSA9IFwiXCI7XG59XG5cbi8vbGlzdCBwYXJlbnQgcHJvamVjdCBiYXJcbmxldCBsaXN0cGFyZW50UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5saXN0cGFyZW50UHJvamVjdERpdi5pZCA9IFwibGlzdFBhcmVudFByb2plY3RcIjtcbmxpc3RwYXJlbnRQcm9qZWN0RGl2LmlubmVySFRNTCA9IFwiUGFyZW50IFByb2plY3Q6XCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3REcm9wZG93blZhbHVlcygpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCk7XG4gICAgbGlzdFBhcmVudFByb2plY3REcm9wZG93bi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgcHJvamVjdExpc3QpIHtcbiAgICAgICAgbGV0IGRyb3Bkb3duSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGRyb3Bkb3duSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERyb3Bkb3duVmFsdWVcIik7XG4gICAgICAgIGxldCB0aXRsZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgZHJvcGRvd25JdGVtLnZhbHVlID0gdGl0bGU7XG4gICAgICAgIGRyb3Bkb3duSXRlbS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgbGlzdFBhcmVudFByb2plY3REcm9wZG93bi5hcHBlbmQoZHJvcGRvd25JdGVtKTtcbiAgICB9XG59XG5cbi8vUGFyZW50IHByb2plY3QgRHJvcGRvd25cbmxldCBsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbmxpc3RQYXJlbnRQcm9qZWN0RHJvcGRvd24uaWQgPSBcImxpc3RQYXJlbnRQcm9qZWN0RHJvcGRvd25cIjtcbmxpc3RwYXJlbnRQcm9qZWN0RGl2LmFwcGVuZChsaXN0UGFyZW50UHJvamVjdERyb3Bkb3duKTtcblxubGlzdFBhbmUuYXBwZW5kKGxpc3RUaXRsZURpdik7XG5saXN0UGFuZS5hcHBlbmQobGlzdER1ZURhdGVEaXYpO1xubGlzdFBhbmUuYXBwZW5kKGxpc3RDb250ZW50RGl2KTtcbmxpc3RQYW5lLmFwcGVuZChsaXN0QWN0aW9uRGl2KTtcbmxpc3RQYW5lLmFwcGVuZChsaXN0cGFyZW50UHJvamVjdERpdik7XG5cbi8vIEJ1dHRvbiB0byBhZGQgYSBuZXcgcHJvamVjdFxubGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubmV3UHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIk5FVyBQUk9KRUNUXCI7XG5uZXdQcm9qZWN0QnV0dG9uLmlkID0gXCJuZXdQcm9qZWN0QnV0dG9uXCI7XG5jb250ZW50LmFwcGVuZChuZXdQcm9qZWN0QnV0dG9uKTtcblxuLy9Bc2sgZm9yIHByb2plY3QgbmFtZSB3aGVuIGEgbmV3IHByb2plY3QgaXMgYmVpbmcgYWRkZWRcbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbmV3UHJvak5hbWUgPSBwcm9tcHQoXCJFbnRlciBQcm9qZWN0IE5hbWVcIik7XG4gICAgaWYgKG5ld1Byb2pOYW1lICYmIG5ld1Byb2pOYW1lLnRyaW0oKSkge1xuICAgICAgICBsZXQgbmV3UHJvamVjdElkID0gYWRkUHJvamVjdERpdlRvUGFuZShuZXdQcm9qTmFtZSk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuY3JlYXRlQW5kU3RvcmVQcm9qZWN0KG5ld1Byb2plY3RJZCwgbmV3UHJvak5hbWUpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0RHJvcGRvd25WYWx1ZXMoKTtcbiAgICB9XG59KTtcblxuLy9CdXR0b24gdG8gYWRkIGEgbmV3IFRvIGRvIExpc3RcbmxldCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5ld0xpc3RCdXR0b24uaW5uZXJIVE1MID0gXCJDUkVBVEUgQSBMSVNUXCI7XG5uZXdMaXN0QnV0dG9uLmlkID0gXCJuZXdMaXN0QnV0dG9uXCI7XG5jb250ZW50LmFwcGVuZChuZXdMaXN0QnV0dG9uKTtcblxuLy9GdW5jdGlvbiB0byBhZGQgYSBwcm9qZWN0IERpdlxuZnVuY3Rpb24gYWRkUHJvamVjdERpdlRvUGFuZShwcm9qZWN0VGl0bGUpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHBDb3VudGVyID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRQcm9qZWN0Q291bnRlcigpO1xuICAgIHBDb3VudGVyICs9IDE7XG4gICAgbmV3UHJvamVjdC5pZCA9IFwicHJvaklkXCIgKyBwQ291bnRlcjtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBuZXdQcm9qZWN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICBuZXdQcm9qZWN0LmZpcnN0Q2hpbGQuaW5uZXJIVE1MID0gcHJvamVjdFRpdGxlO1xuICAgIG5ld1Byb2plY3QuZmlyc3RDaGlsZC5hcHBlbmQoLi4uYWRkUHJvamVjdEFjdGlvbkJ1dHRvbnMobmV3UHJvamVjdC5pZCkpO1xuICAgIHByb2plY3RQYW5lLmFwcGVuZChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0RnVuY3Rpb25zLnNldFByb2plY3RDb3VudGVyKHBDb3VudGVyKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdC5pZDtcbn1cblxuLy9GdW5jdGlvbiBmb3IgcHJvamVjdCBhY3Rpb24gYnV0dG9uc1xuZnVuY3Rpb24gYWRkUHJvamVjdEFjdGlvbkJ1dHRvbnMocHJvaklkKSB7XG4gICAgLy9BZGQgbGlzdCBidXR0b25cbiAgICBsZXQgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByb2pJZCk7XG4gICAgYWRkTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkTGlzdEJ1dHRvblwiKTtcbiAgICBhZGRMaXN0QnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgIGFkZExpc3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld0xpc3RUaXRsZSA9IHByb21wdChcIkFkZGluZyBhIG5ldyBsaXN0LiBHaXZlIGl0IGEgdGl0bGU6XCIpO1xuICAgICAgICBpZiAobmV3TGlzdFRpdGxlICYmIG5ld0xpc3RUaXRsZS50cmltKCkpIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBhZGRsaXN0RGl2VG9Qcm9qZWN0RGl2KG5ld0xpc3RUaXRsZSwgXCJcIiwgcHJvaklkKTtcbiAgICAgICAgICAgIGxpc3RGdW5jdGlvbnMuY3JlYXRlQW5kU3RvcmVMaXN0KFxuICAgICAgICAgICAgICAgIG5ld0xpc3RUaXRsZSxcbiAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgbGlzdElkLFxuICAgICAgICAgICAgICAgIHByb2pJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNob3dMaXN0RGV0YWlscyhsaXN0SWQsIHByb2pJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFkZExpc3RCdXR0b24ub25tb3VzZWVudGVyID0gKCkgPT4ge1xuICAgICAgICBhZGRMaXN0QnV0dG9uLmlubmVySFRNTCA9IFwiKyBMaXN0XCI7XG4gICAgfTtcbiAgICBhZGRMaXN0QnV0dG9uLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgYWRkTGlzdEJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICB9O1xuICAgIC8vRGVsZXRlIHByb2plY3QgYnV0dG9uXG4gICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qSWQpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVByb2plY3RCdXR0b25cIik7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIi1cIjtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2plY3RGdW5jdGlvbnMuZ2V0U2luZ2xlUHJvamVjdChwcm9qSWQpLmxpc3RzKVxuICAgICAgICAgICAgICAgIC5sZW5ndGggPT0gMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHByb2plY3RGdW5jdGlvbnMuZGVsZXRlUHJvamVjdChwcm9qSWQpO1xuICAgICAgICAgICAgc2hvd0V4aXN0aW5nUHJvamVjdHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dEZWxldGVQcm9qZWN0TW9kYWwoXG4gICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXM/XCIsXG4gICAgICAgICAgICAgICAgXCJUaGlzIHByb2plY3QgY29udGFpbnMgc29tZSBsaXN0cy4gWW91IHdpbGwgbG9zZSB5b3VyIGRhdGEgaWYgeW91IGRlbGV0ZSB0aGlzIHByb2plY3QuXCIsXG4gICAgICAgICAgICAgICAgXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICBcIk5vXCIsXG4gICAgICAgICAgICAgICAgcHJvaklkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gW2FkZExpc3RCdXR0b24sIGRlbGV0ZVByb2plY3RCdXR0b25dO1xufVxuXG4vL01vZGFsIHRvIGRpc3BsYXkgd2hlbiBjbGlja2luZyBhbiBhY3Rpb25cbmxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tb2RhbC5pZCA9IFwibW9kYWxcIjtcbm1vZGFsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbm1vZGFsLmxhc3RDaGlsZC5pZCA9IFwibW9kYWxUaXRsZVwiO1xubW9kYWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xubW9kYWwubGFzdENoaWxkLmlkID0gXCJtb2RhbENvbnRlbnRcIjtcbm1vZGFsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbm1vZGFsLmxhc3RDaGlsZC5pZCA9IFwibW9kYWxCdXR0b25zXCI7XG5tb2RhbC5sYXN0Q2hpbGQuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xubW9kYWwubGFzdENoaWxkLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKTtcbm1vZGFsLmxhc3RDaGlsZC5maXJzdENoaWxkLmlkID0gXCJtb2RhbEJ1dHRvbjFcIjtcbm1vZGFsLmxhc3RDaGlsZC5sYXN0Q2hpbGQuaWQgPSBcIm1vZGFsQnV0dG9uMlwiO1xuY29udGVudC5hcHBlbmQobW9kYWwpO1xuXG4vL0Z1bmN0aW9uIHRvIGRpc3BsYXkgZGVsZXRlIHByb2plY3QgbW9kYWxcbmZ1bmN0aW9uIHNob3dEZWxldGVQcm9qZWN0TW9kYWwodGl0bGUsIGNvbnRlbnQsIGJ1dHRvblllcywgYnV0dG9uTm8sIHByb2pJZCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBtb2RhbC5maXJzdENoaWxkLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIG1vZGFsLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0ID0gY29udGVudDtcbiAgICBtb2RhbC5sYXN0Q2hpbGQuZmlyc3RDaGlsZC5pbm5lclRleHQgPSBidXR0b25ZZXM7XG4gICAgbW9kYWwubGFzdENoaWxkLmZpcnN0Q2hpbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRUY2MjZDXCI7XG4gICAgbW9kYWwubGFzdENoaWxkLmxhc3RDaGlsZC5pbm5lclRleHQgPSBidXR0b25ObztcbiAgICBtb2RhbC5sYXN0Q2hpbGQubGFzdENoaWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgIG1vZGFsLmxhc3RDaGlsZC5maXJzdENoaWxkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5kZWxldGVQcm9qZWN0KHByb2pJZCk7XG4gICAgICAgIHNob3dFeGlzdGluZ1Byb2plY3RzKCk7XG4gICAgfTtcbiAgICBtb2RhbC5sYXN0Q2hpbGQubGFzdENoaWxkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xufVxuXG4vL0Z1bmN0aW9uIHRvIGFkZCBhIGxpc3QgRGl2XG5mdW5jdGlvbiBhZGRsaXN0RGl2VG9Qcm9qZWN0RGl2KGxpc3RUaXRsZSwgbGlzdER1ZURhdGUsIHByb2plY3REaXZJZCkge1xuICAgIGxldCBuZXdsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0c1wiKTtcbiAgICBuZXdsaXN0LmNsYXNzTGlzdC5hZGQocHJvamVjdERpdklkLnRvU3RyaW5nKCkpO1xuICAgIGxldCBsQ291bnRlciA9IGxpc3RGdW5jdGlvbnMuZ2V0TGlzdENvdW50ZXIocHJvamVjdERpdklkKTtcbiAgICBsQ291bnRlciArPSAxO1xuICAgIG5ld2xpc3QuaWQgPSBcImxpc3RJZFwiICsgbENvdW50ZXIudG9TdHJpbmcoKSArIHByb2plY3REaXZJZDtcbiAgICBsaXN0RnVuY3Rpb25zLnNldExpc3RDb3VudGVyKHByb2plY3REaXZJZCwgbENvdW50ZXIpO1xuXG4gICAgbGV0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpdGxlU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGl0bGVTcGFuXCIpO1xuICAgIHRpdGxlU3Bhbi5pbm5lckhUTUwgPSBsaXN0VGl0bGU7XG5cbiAgICBsZXQgZHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZVNwYW4uaW5uZXJIVE1MID0gbGlzdER1ZURhdGU7XG4gICAgZHVlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVNwYW5cIik7XG5cbiAgICBuZXdsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNob3dMaXN0RGV0YWlscyhuZXdsaXN0LmlkLCBwcm9qZWN0RGl2SWQpO1xuICAgIH0pO1xuXG4gICAgbmV3bGlzdC5hcHBlbmQodGl0bGVTcGFuKTtcbiAgICBuZXdsaXN0LmFwcGVuZChkdWVTcGFuKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0RGl2SWQpLmFwcGVuZChuZXdsaXN0KTtcbiAgICByZXR1cm4gbmV3bGlzdC5pZDtcbn1cbmxldCBjdXJyZW50TGlzdCA9IG51bGw7XG4vL0Z1bmN0aW9uIHRvIHNob3cgc2VsZWN0ZWQgbGlzdCdzIGRldGFpbHNcbmZ1bmN0aW9uIHNob3dMaXN0RGV0YWlscyhsaXN0SWQsIHByb2pJZCkge1xuICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZ1bmN0aW9ucy5nZXRTaW5nbGVMaXN0KGxpc3RJZCwgcHJvaklkKTtcbiAgICBsaXN0VGl0bGVEaXYudmFsdWUgPSBjdXJyZW50TGlzdC50aXRsZTtcbiAgICBsaXN0RHVlRGF0ZURpdi52YWx1ZSA9IGN1cnJlbnRMaXN0LmR1ZURhdGU7XG4gICAgbGlzdENvbnRlbnREaXYudmFsdWUgPSBjdXJyZW50TGlzdC5kZXNjO1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0c1wiKTtcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IHByb2plY3RzLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twXS5pZCA9PSBwcm9qSWQpIHtcbiAgICAgICAgICAgIGxpc3RQYXJlbnRQcm9qZWN0RHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IHA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWxsTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdHNcIik7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhbGxMaXN0cykge1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICB9XG4gICAgbGV0IHRoaXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElkKTtcbiAgICB0aGlzTGlzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4NGRjY2ZcIjtcbn1cblxuLy9GdW5jdGlvbiB0byBsb2FkIGFsbCBleGlzdGluZyBwcm9qZWN0cyBmcm9tIHN0b3JhZ2VcbmZ1bmN0aW9uIHNob3dFeGlzdGluZ1Byb2plY3RzKCkge1xuICAgIHByb2plY3RQYW5lLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGFsbFByb2plY3RzID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsUHJvamVjdHMpIHtcbiAgICAgICAgc2hvd1Byb2plY3REaXYoaXRlbSk7XG4gICAgfVxufVxuXG4vL0Z1bmN0aW9uIHRvIHNob3cgYSBwcm9qZWN0IGZyb20gc3RvcmFnZSBvbiBVSVxuZnVuY3Rpb24gc2hvd1Byb2plY3REaXYocHJvamVjdE9iamVjdCkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmlkID0gcHJvamVjdE9iamVjdC5wcm9qZWN0SWQ7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgbmV3UHJvamVjdC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgbmV3UHJvamVjdC5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgbmV3UHJvamVjdC5maXJzdENoaWxkLmlubmVySFRNTCA9IHByb2plY3RPYmplY3QubmFtZTtcbiAgICBuZXdQcm9qZWN0LmZpcnN0Q2hpbGQuYXBwZW5kKC4uLmFkZFByb2plY3RBY3Rpb25CdXR0b25zKG5ld1Byb2plY3QuaWQpKTtcbiAgICBwcm9qZWN0UGFuZS5hcHBlbmQobmV3UHJvamVjdCk7XG4gICAgbGV0IGxpc3RzID0gbGlzdEZ1bmN0aW9ucy5nZXRBbGxMaXN0cyhwcm9qZWN0T2JqZWN0LnByb2plY3RJZCk7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgbGlzdHMpIHtcbiAgICAgICAgc2hvd0xpc3REaXYoY2hpbGQpO1xuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB0byBzaG93IGEgbGlzdCBmcm9tIHN0b3JhZ2Ugb24gVUlcbmZ1bmN0aW9uIHNob3dMaXN0RGl2KGxpc3RPYmplY3QpIHtcbiAgICBsZXQgbmV3bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3bGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdHNcIik7XG4gICAgbmV3bGlzdC5jbGFzc0xpc3QuYWRkKGxpc3RPYmplY3QucGFyZW50UHJvamVjdElkKTtcbiAgICBuZXdsaXN0LmlkID0gbGlzdE9iamVjdC5saXN0SWQ7XG5cbiAgICBsZXQgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVNwYW5cIik7XG4gICAgdGl0bGVTcGFuLmlubmVySFRNTCA9IGxpc3RPYmplY3QudGl0bGU7XG5cbiAgICBsZXQgZHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZVNwYW4uaW5uZXJIVE1MID0gbGlzdE9iamVjdC5kdWVEYXRlO1xuICAgIGR1ZVNwYW4uY2xhc3NMaXN0LmFkZChcImR1ZURhdGVTcGFuXCIpO1xuXG4gICAgaWYgKGN1cnJlbnRMaXN0ICYmIGxpc3RPYmplY3QubGlzdElkID09IGN1cnJlbnRMaXN0Lmxpc3RJZCkge1xuICAgICAgICBuZXdsaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg0ZGNjZlwiO1xuICAgIH1cblxuICAgIG5ld2xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2hvd0xpc3REZXRhaWxzKG5ld2xpc3QuaWQsIGxpc3RPYmplY3QucGFyZW50UHJvamVjdElkKTtcbiAgICB9KTtcblxuICAgIG5ld2xpc3QuYXBwZW5kKHRpdGxlU3Bhbik7XG4gICAgbmV3bGlzdC5hcHBlbmQoZHVlU3Bhbik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdE9iamVjdC5wYXJlbnRQcm9qZWN0SWQpLmFwcGVuZChuZXdsaXN0KTtcbiAgICByZXR1cm4gbmV3bGlzdC5pZDtcbn1cblxuLy9FeGVjdXRlIG9uIHBhZ2UgbG9hZFxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuICAgIHByb2plY3RGdW5jdGlvbnMuc2V0UHJvamVjdENvdW50ZXIoMCk7XG59XG5zaG93RXhpc3RpbmdQcm9qZWN0cygpO1xudXBkYXRlUHJvamVjdERyb3Bkb3duVmFsdWVzKCk7XG4iLCJmdW5jdGlvbiBMaXN0KHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBsaXN0SWQsIHBhcmVudFByb2plY3RJZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5saXN0SWQgPSBsaXN0SWQ7XG4gICAgdGhpcy5wYXJlbnRQcm9qZWN0SWQgPSBwYXJlbnRQcm9qZWN0SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmRTdG9yZUxpc3QoXG4gICAgbGlzdFRpdGxlLFxuICAgIGxpc3REZXNjLFxuICAgIGxpc3REdWVEYXRlLFxuICAgIGxpc3RJZCxcbiAgICBwYXJlbnRQcm9qZWN0SWRcbikge1xuICAgIGxldCBuZXdMaXN0ID0gbmV3IExpc3QoXG4gICAgICAgIGxpc3RUaXRsZSxcbiAgICAgICAgbGlzdERlc2MsXG4gICAgICAgIGxpc3REdWVEYXRlLFxuICAgICAgICBsaXN0SWQsXG4gICAgICAgIHBhcmVudFByb2plY3RJZFxuICAgICk7XG4gICAgbGV0IHBhcmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmVudFByb2plY3RJZCkpO1xuICAgIHBhcmVudFByb2plY3QubGlzdHNbbGlzdElkXSA9IG5ld0xpc3Q7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIHBhcmVudFByb2plY3RJZC50b1N0cmluZygpLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShwYXJlbnRQcm9qZWN0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMaXN0cyhwYXJlbnRQcm9qZWN0SWQpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmVudFByb2plY3RJZC50b1N0cmluZygpKVxuICAgICk7XG4gICAgbGV0IGFsbExpc3RzID0gW107XG4gICAgZm9yIChsZXQgaXRlbSBpbiBuZXdQcm9qZWN0Lmxpc3RzKSB7XG4gICAgICAgIGlmIChpdGVtICE9IFwibENvdW50ZXJcIikge1xuICAgICAgICAgICAgYWxsTGlzdHMucHVzaChuZXdQcm9qZWN0Lmxpc3RzW2l0ZW1dKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsTGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaW5nbGVMaXN0KGxpc3RJZCwgcGFyZW50UHJvamVjdElkKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBKU09OLnBhcnNlKFxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJlbnRQcm9qZWN0SWQudG9TdHJpbmcoKSlcbiAgICApO1xuICAgIHJldHVybiBuZXdQcm9qZWN0Lmxpc3RzW2xpc3RJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0Q291bnRlcihwYXJlbnRQcm9qZWN0SWQpIHtcbiAgICBsZXQgcGFyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyZW50UHJvamVjdElkKSk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcmVudFByb2plY3QubGlzdHNbXCJsQ291bnRlclwiXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0Q291bnRlcihwYXJlbnRQcm9qZWN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IHBhcmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmVudFByb2plY3RJZCkpO1xuICAgIHBhcmVudFByb2plY3QubGlzdHNbXCJsQ291bnRlclwiXSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIHBhcmVudFByb2plY3RJZC50b1N0cmluZygpLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShwYXJlbnRQcm9qZWN0KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaXN0RGV0YWlscyhcbiAgICB0aXRsZSxcbiAgICBkZXNjLFxuICAgIGR1ZURhdGUsXG4gICAgbGlzdElkLFxuICAgIHBhcmVudFByb2plY3RJZFxuKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBKU09OLnBhcnNlKFxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJlbnRQcm9qZWN0SWQudG9TdHJpbmcoKSlcbiAgICApO1xuICAgIGxldCBuZXdMaXN0ID0gbmV3UHJvamVjdC5saXN0c1tsaXN0SWRdO1xuICAgIG5ld0xpc3QudGl0bGUgPSB0aXRsZTtcbiAgICBuZXdMaXN0LmRlc2MgPSBkZXNjO1xuICAgIG5ld0xpc3QuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbmV3UHJvamVjdC5saXN0c1tsaXN0SWRdID0gbmV3TGlzdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgcGFyZW50UHJvamVjdElkLnRvU3RyaW5nKCksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpc3RQYXJlbnQoXG4gICAgbGlzdElkLFxuICAgIG9sZFBhcmVudFByb2plY3RJZCxcbiAgICBuZXdQYXJlbnRQcm9qZWN0SWRcbikge1xuICAgIGxldCBvbGRQcm9qZWN0ID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2xkUGFyZW50UHJvamVjdElkLnRvU3RyaW5nKCkpXG4gICAgKTtcbiAgICBsZXQgbmV3TGlzdCA9IE9iamVjdC5hc3NpZ24oe30sIG9sZFByb2plY3QubGlzdHNbbGlzdElkXSk7XG4gICAgZGVsZXRlIG9sZFByb2plY3QubGlzdHNbbGlzdElkXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgb2xkUGFyZW50UHJvamVjdElkLnRvU3RyaW5nKCksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG9sZFByb2plY3QpXG4gICAgKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5ld1BhcmVudFByb2plY3RJZC50b1N0cmluZygpKVxuICAgICk7XG4gICAgbGV0IGxjID0gcGFyc2VJbnQobmV3UHJvamVjdC5saXN0c1tcImxDb3VudGVyXCJdKTtcbiAgICBsYyArPSAxO1xuICAgIGxldCBuZXdMaXN0SWQgPSBcImxpc3RJZFwiICsgbGMudG9TdHJpbmcoKSArIG5ld1BhcmVudFByb2plY3RJZC50b1N0cmluZygpO1xuICAgIG5ld1Byb2plY3QubGlzdHNbXCJsQ291bnRlclwiXSA9IGxjLnRvU3RyaW5nKCk7XG4gICAgbmV3TGlzdC5saXN0SWQgPSBuZXdMaXN0SWQ7XG4gICAgbmV3TGlzdC5wYXJlbnRQcm9qZWN0SWQgPSBuZXdQYXJlbnRQcm9qZWN0SWQ7XG4gICAgbmV3UHJvamVjdC5saXN0c1tuZXdMaXN0SWRdID0gbmV3TGlzdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgbmV3UGFyZW50UHJvamVjdElkLnRvU3RyaW5nKCksXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpXG4gICAgKTtcbiAgICByZXR1cm4gbmV3TGlzdElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGlzdChsaXN0SWQsIHBhcmVudFByb2plY3RJZCkge1xuICAgIGxldCBvbGRQcm9qZWN0ID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyZW50UHJvamVjdElkLnRvU3RyaW5nKCkpXG4gICAgKTtcbiAgICBkZWxldGUgb2xkUHJvamVjdC5saXN0c1tsaXN0SWRdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBwYXJlbnRQcm9qZWN0SWQudG9TdHJpbmcoKSxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkob2xkUHJvamVjdClcbiAgICApO1xufVxuIiwiZnVuY3Rpb24gUHJvamVjdChuYW1lLCBsaXN0cywgcHJvamVjdElkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gbGlzdHM7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuZFN0b3JlUHJvamVjdChwcm9qSWQsIHByb2pOYW1lKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qTmFtZSwgeyAnbENvdW50ZXInOiAnMCcgfSwgcHJvaklkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qSWQudG9TdHJpbmcoKSwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgbGV0IGFsbFByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5rZXkoaSkgIT0gJ3BDb3VudGVyJykge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KHByb2plY3RJZCkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWQudG9TdHJpbmcoKSkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpID09IG5ld1Byb2plY3QubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2luZ2xlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdElkLnRvU3RyaW5nKCkpKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RUb1Byb2plY3QocHJvamVjdElkLCBsaXN0KSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RJZC50b1N0cmluZygpKSk7XG4gICAgbmV3UHJvamVjdC5saXN0c1tsaXN0Lmxpc3RJZF0gPSBsaXN0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2pJZC50b1N0cmluZygpLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0Q291bnRlcigpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BDb3VudGVyJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdENvdW50ZXIodmFsdWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncENvdW50ZXInLCB2YWx1ZS50b1N0cmluZygpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xheW91dC5qcyc7XG5pbXBvcnQgJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgJy4vbGlzdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=