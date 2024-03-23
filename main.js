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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Catboo.woff */ "./src/Catboo.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Catboo.woff2 */ "./src/Catboo.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./cream-DEMO.woff */ "./src/cream-DEMO.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./cream-DEMO.woff2 */ "./src/cream-DEMO.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./koi-fish_bkgd.gif */ "./src/koi-fish_bkgd.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --blossom: #e7fcd9;
    --koi-red: #d83b54;
    --koi-gray: #c6d1bf;
    --koi-red-hover: #b42447;
    --koi-yellow: #cdaa16;
    --lilypad: rgba(14, 109, 84, 0.37);
}

@font-face {
    font-family: "Catboo";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
    font-style: normal;
    font-weight: 400;
    font-stretch: 400;       
}

@font-face {
    font-family: "CreamDEMO";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"),
        url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
    font-weight: normal;
    font-style: normal;
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    display: grid;
    grid-template-rows: 1fr 8fr;
}

nav {
    margin: 0;
    padding: 10px;
    background-color: rgba(249, 253, 250, 0.6);
    padding-left: 1rem;
    padding-right: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    justify-items: center;
    align-items: center;
}

h1, h2, p, button, li {
    font-family: "CreamDEMO", "Trebuchet MS", sans-serif;
}

h3 {
    font-family: "Catboo", "Helvetica", sans-serif;
    font-size: 2rem;
    color: var(--koi-red);
}

a {
    width: fit-content;
    height: fit-content;
    margin: 5px;
}

p {
    color: var(--blossom);
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.content {
    display: grid;
    grid-template-rows: 2fr 1fr 2fr;
    overflow: scroll;
    justify-items: start;
    align-items: center;
}

.tab {
    width: 5rem;
    height: 2.25rem;
    margin: 5px;
    border: none;
    border-radius: 3rem;
    background-color: var(--koi-red);
    color: var(--blossom);
    font-size: 1rem;
}

.tab:hover {
    background-color: var(--koi-red-hover);
    cursor: pointer;
}

.icon {
    width: 2.5vw;
    height: auto;
    margin: 5px;
    cursor: pointer;
}

.hero, .reviews, .menu-instructions, .entree-menu, .side-menu {
    margin: 2vw;
    padding: 3.5vw;
    width: 95%;
    min-height: fit-content;
    background-color: var(--lilypad);
    color: var(--blossom);
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.note {
    margin-top: 1.5vw;
    font-size: 1.5rem;
}

.info {
    margin: 2vw;
    padding: 1.5vw;
    width: 95%;
    height: fit-content;
    background-color: var(--lilypad);
    border-radius: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

.modes h3, .location h3 {
    color: var(--koi-yellow);
}

.modes {
    width: 49%;
    padding: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.location {
    width: 49%;
    padding: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.entrees, .sides {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
}

.entrees {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.sides {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.example {
    width: 15vw;
    height: auto;
    align-self: center;
    justify-self: center;
}

.item {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    justify-items: center;
}

.section {
    height: 15vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3px;
}

.logomini {
    font-size: 2.5rem;
}

.headshot {
    margin: 0.5vw;
    padding: 0.75vw;
    width: 20vw;
    height: 50vh;
    background-color: var(--lilypad);
    border-radius: 3rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
}

.friend {
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    object-fit: cover;
    align-self: center;
    justify-self: center;
}

#logo-text {
    font-family: "Catboo", "Helvetica", sans-serif;
    font-size: 3.25rem;
    color: var(--koi-red);
}

#slogan {
    margin-top: 1.5vh;
}

#hours {
    margin-top: 1.5vw;
    font-size: 1rem;
}

#menuhead {
    font-family: "Catboo";
    color: var(--koi-red);
}

#directions {
    margin-top: 1.5vw;
}

#asterisk {
    font-size: 1rem;
    align-self: end;
}

#item-name {
    align-self: start;
}

#desc {
    text-align: start;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

#important {
    text-align: center;
}

#bios {
    margin: 2vw;
    padding: 3.5vw;
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --blossom: #e7fcd9;\n    --koi-red: #d83b54;\n    --koi-gray: #c6d1bf;\n    --koi-red-hover: #b42447;\n    --koi-yellow: #cdaa16;\n    --lilypad: rgba(14, 109, 84, 0.37);\n}\n\n@font-face {\n    font-family: \"Catboo\";\n    src: url(\"./Catboo.woff\") format(\"woff\"),\n        url(\"./Catboo.woff2\") format(\"woff2\");\n    font-style: normal;\n    font-weight: 400;\n    font-stretch: 400;       \n}\n\n@font-face {\n    font-family: \"CreamDEMO\";\n    src: url(\"./cream-DEMO.woff\") format(\"woff\"),\n        url(\"./cream-DEMO.woff2\") format(\"woff2\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(./koi-fish_bkgd.gif);\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\nnav {\n    margin: 0;\n    padding: 10px;\n    background-color: rgba(249, 253, 250, 0.6);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 5px;\n    justify-items: center;\n    align-items: center;\n}\n\nh1, h2, p, button, li {\n    font-family: \"CreamDEMO\", \"Trebuchet MS\", sans-serif;\n}\n\nh3 {\n    font-family: \"Catboo\", \"Helvetica\", sans-serif;\n    font-size: 2rem;\n    color: var(--koi-red);\n}\n\na {\n    width: fit-content;\n    height: fit-content;\n    margin: 5px;\n}\n\np {\n    color: var(--blossom);\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 2fr 1fr 2fr;\n    overflow: scroll;\n    justify-items: start;\n    align-items: center;\n}\n\n.tab {\n    width: 5rem;\n    height: 2.25rem;\n    margin: 5px;\n    border: none;\n    border-radius: 3rem;\n    background-color: var(--koi-red);\n    color: var(--blossom);\n    font-size: 1rem;\n}\n\n.tab:hover {\n    background-color: var(--koi-red-hover);\n    cursor: pointer;\n}\n\n.icon {\n    width: 2.5vw;\n    height: auto;\n    margin: 5px;\n    cursor: pointer;\n}\n\n.hero, .reviews, .menu-instructions, .entree-menu, .side-menu {\n    margin: 2vw;\n    padding: 3.5vw;\n    width: 95%;\n    min-height: fit-content;\n    background-color: var(--lilypad);\n    color: var(--blossom);\n    border-radius: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.note {\n    margin-top: 1.5vw;\n    font-size: 1.5rem;\n}\n\n.info {\n    margin: 2vw;\n    padding: 1.5vw;\n    width: 95%;\n    height: fit-content;\n    background-color: var(--lilypad);\n    border-radius: 3rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.modes h3, .location h3 {\n    color: var(--koi-yellow);\n}\n\n.modes {\n    width: 49%;\n    padding: 0.5vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.location {\n    width: 49%;\n    padding: 0.5vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.entrees, .sides {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n.entrees {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.sides {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.example {\n    width: 15vw;\n    height: auto;\n    align-self: center;\n    justify-self: center;\n}\n\n.item {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 3fr 1fr;\n    justify-items: center;\n}\n\n.section {\n    height: 15vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 3px;\n}\n\n.logomini {\n    font-size: 2.5rem;\n}\n\n.headshot {\n    margin: 0.5vw;\n    padding: 0.75vw;\n    width: 20vw;\n    height: 50vh;\n    background-color: var(--lilypad);\n    border-radius: 3rem;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n}\n\n.friend {\n    width: 15vw;\n    height: 15vw;\n    border-radius: 50%;\n    object-fit: cover;\n    align-self: center;\n    justify-self: center;\n}\n\n#logo-text {\n    font-family: \"Catboo\", \"Helvetica\", sans-serif;\n    font-size: 3.25rem;\n    color: var(--koi-red);\n}\n\n#slogan {\n    margin-top: 1.5vh;\n}\n\n#hours {\n    margin-top: 1.5vw;\n    font-size: 1rem;\n}\n\n#menuhead {\n    font-family: \"Catboo\";\n    color: var(--koi-red);\n}\n\n#directions {\n    margin-top: 1.5vw;\n}\n\n#asterisk {\n    font-size: 1rem;\n    align-self: end;\n}\n\n#item-name {\n    align-self: start;\n}\n\n#desc {\n    text-align: start;\n    height: 45vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n#important {\n    text-align: center;\n}\n\n#bios {\n    margin: 2vw;\n    padding: 3.5vw;\n    width: 95%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    justify-items: center;\n    align-content: center;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Catboo.woff":
/*!*************************!*\
  !*** ./src/Catboo.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c054336918059c0064c.woff";

/***/ }),

/***/ "./src/Catboo.woff2":
/*!**************************!*\
  !*** ./src/Catboo.woff2 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc5d4c28d63c030abb86.woff2";

/***/ }),

/***/ "./src/applecat.PNG":
/*!**************************!*\
  !*** ./src/applecat.PNG ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03f57c902551ad96e265.PNG";

/***/ }),

/***/ "./src/apples.png":
/*!************************!*\
  !*** ./src/apples.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14dcc03cd84cca4b7849.png";

/***/ }),

/***/ "./src/carrots.png":
/*!*************************!*\
  !*** ./src/carrots.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcff9d437f36ad31ed73.png";

/***/ }),

/***/ "./src/cheese-sticks.png":
/*!*******************************!*\
  !*** ./src/cheese-sticks.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7593ee1e0e454d1cca38.png";

/***/ }),

/***/ "./src/cream-DEMO.woff":
/*!*****************************!*\
  !*** ./src/cream-DEMO.woff ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7503b672cccea2010c31.woff";

/***/ }),

/***/ "./src/cream-DEMO.woff2":
/*!******************************!*\
  !*** ./src/cream-DEMO.woff2 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5cd192ece7d62c7d4fc.woff2";

/***/ }),

/***/ "./src/fish-sticks.png":
/*!*****************************!*\
  !*** ./src/fish-sticks.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dad8dcf3bcefdd226926.png";

/***/ }),

/***/ "./src/fries.png":
/*!***********************!*\
  !*** ./src/fries.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc7fbe62babb2f82f87f.png";

/***/ }),

/***/ "./src/goodappleboy.jpg":
/*!******************************!*\
  !*** ./src/goodappleboy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "787b3d55ca39ec0ca403.jpg";

/***/ }),

/***/ "./src/greenbeans.png":
/*!****************************!*\
  !*** ./src/greenbeans.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e40bced21c029f379cf.png";

/***/ }),

/***/ "./src/instagram-icon.png":
/*!********************************!*\
  !*** ./src/instagram-icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edb90ecc706a7a25542b.png";

/***/ }),

/***/ "./src/koi-fish_bkgd.gif":
/*!*******************************!*\
  !*** ./src/koi-fish_bkgd.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19d0493c42c4880e63b2.gif";

/***/ }),

/***/ "./src/linkedin-icon.png":
/*!*******************************!*\
  !*** ./src/linkedin-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "032cf8a63be2f0f4d425.png";

/***/ }),

/***/ "./src/macncheese.png":
/*!****************************!*\
  !*** ./src/macncheese.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42107500cbaf7df1ac3f.png";

/***/ }),

/***/ "./src/nigel.png":
/*!***********************!*\
  !*** ./src/nigel.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2094314385d90a16ba67.png";

/***/ }),

/***/ "./src/nuggies.png":
/*!*************************!*\
  !*** ./src/nuggies.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fe7e3065406efd57b89.png";

/***/ }),

/***/ "./src/pickles.png":
/*!*************************!*\
  !*** ./src/pickles.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55f776b58b50e8b512b2.png";

/***/ }),

/***/ "./src/rdcnorth.jpg":
/*!**************************!*\
  !*** ./src/rdcnorth.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b9256f1a4a2f058d734.jpg";

/***/ }),

/***/ "./src/sammich.png":
/*!*************************!*\
  !*** ./src/sammich.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ed824c9438505219a95.png";

/***/ }),

/***/ "./src/twitch-icon.png":
/*!*****************************!*\
  !*** ./src/twitch-icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63540443eabb95bd0a42.png";

/***/ }),

/***/ "./src/youtube-icon.png":
/*!******************************!*\
  !*** ./src/youtube-icon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d252c6ec7a3c06ecc004.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _koi_fish_bkgd_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./koi-fish_bkgd.gif */ "./src/koi-fish_bkgd.gif");
/* harmony import */ var _instagram_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instagram-icon.png */ "./src/instagram-icon.png");
/* harmony import */ var _twitch_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitch-icon.png */ "./src/twitch-icon.png");
/* harmony import */ var _youtube_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-icon.png */ "./src/youtube-icon.png");
/* harmony import */ var _linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkedin-icon.png */ "./src/linkedin-icon.png");
/* harmony import */ var _nuggies_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuggies.png */ "./src/nuggies.png");
/* harmony import */ var _fish_sticks_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fish-sticks.png */ "./src/fish-sticks.png");
/* harmony import */ var _sammich_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sammich.png */ "./src/sammich.png");
/* harmony import */ var _macncheese_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./macncheese.png */ "./src/macncheese.png");
/* harmony import */ var _fries_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fries.png */ "./src/fries.png");
/* harmony import */ var _pickles_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pickles.png */ "./src/pickles.png");
/* harmony import */ var _cheese_sticks_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cheese-sticks.png */ "./src/cheese-sticks.png");
/* harmony import */ var _apples_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apples.png */ "./src/apples.png");
/* harmony import */ var _carrots_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./carrots.png */ "./src/carrots.png");
/* harmony import */ var _greenbeans_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./greenbeans.png */ "./src/greenbeans.png");
/* harmony import */ var _applecat_PNG__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./applecat.PNG */ "./src/applecat.PNG");
/* harmony import */ var _nigel_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nigel.png */ "./src/nigel.png");
/* harmony import */ var _goodappleboy_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goodappleboy.jpg */ "./src/goodappleboy.jpg");
/* harmony import */ var _rdcnorth_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rdcnorth.jpg */ "./src/rdcnorth.jpg");





















const Nav = document.querySelector("nav");
const Socials = document.createElement("div");
Socials.classList.add("socials");

const Insta = document.createElement("a");
Insta.href = "https://www.instagram.com/goodappleboy/";
Insta.classList.add("icon");
const instaLink = document.createElement("img");
instaLink.src = _instagram_icon_png__WEBPACK_IMPORTED_MODULE_2__;
instaLink.classList.add("icon");
Insta.appendChild(instaLink);
Socials.appendChild(Insta);

const Twitch = document.createElement("a");
Twitch.href = "https://www.twitch.tv/goodappleboy";
Twitch.classList.add("icon");
const twitchLink = document.createElement("img");
twitchLink.src = _twitch_icon_png__WEBPACK_IMPORTED_MODULE_3__;
twitchLink.classList.add("icon");
Twitch.appendChild(twitchLink);
Socials.appendChild(Twitch);

const Youtube = document.createElement("a");
Youtube.href = "https://www.youtube.com/@goodappleboy";
Youtube.classList.add("icon");
const youtubeLink = document.createElement("img");
youtubeLink.src = _youtube_icon_png__WEBPACK_IMPORTED_MODULE_4__;
youtubeLink.classList.add("icon");
Youtube.appendChild(youtubeLink);
Socials.appendChild(Youtube);

const Linkedin = document.createElement("a");
Linkedin.href = "https://www.linkedin.com/in/rdcnorth";
Linkedin.classList.add("icon");
const linkedinLink = document.createElement("img");
linkedinLink.src = _linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5__;
linkedinLink.classList.add("icon");
Linkedin.appendChild(linkedinLink);
Socials.appendChild(Linkedin);

Nav.appendChild(Socials);

const Content = document.getElementById("content");

const Hero = document.createElement("div");
Hero.classList.add("hero");
const heroHeadline = document.createElement("h1");
heroHeadline.textContent += "Enjoy your favorite safe foods in a sensory-friendly and judgment free environment with Nigel and Applecat!";
Hero.appendChild(heroHeadline);
const heroSlogan = document.createElement("h2");
heroSlogan.setAttribute("id", "slogan");
heroSlogan.textContent += "Affordable and accessible meals for all ages!";
Hero.appendChild(heroSlogan);

Content.appendChild(Hero);

const Yelp = document.createElement("div");
Yelp.classList.add("reviews");
const reviewsTitle = document.createElement("h3");
reviewsTitle.textContent += "Reviews";
Yelp.appendChild(reviewsTitle);
const reviewBody = document.createElement("p");
reviewBody.classList.add("note");
reviewBody.textContent += "All my favorite foods, off the kids menu! This is one restaurant that is an easy, safe space for me to eat, and I'll keep coming back. The dino nuggies are a personal favorite!";
Yelp.appendChild(reviewBody);
const reviewQuote = document.createElement("p");
reviewQuote.classList.add("note");
reviewQuote.textContent += "-kranor2";
Yelp.appendChild(reviewQuote);

Content.appendChild(Yelp);

const Info = document.createElement("div");
Info.classList.add("info");

const Modes = document.createElement("div");
Modes.classList.add("modes");
const modesTitle = document.createElement("h3");
modesTitle.textContent += "Hours";
Modes.appendChild(modesTitle);
const modesHours = document.createElement("p");
modesHours.setAttribute("id", "hours");
modesHours.textContent += "Monday-Sunday: 12pm-12am";
Modes.appendChild(modesHours);
const modesNote = document.createElement("p");
modesNote.classList.add("note");
modesNote.textContent += "We also offer drive-thru, carry-out, and delivery!"
Modes.appendChild(modesNote);

Info.appendChild(Modes);

const Location = document.createElement("div");
Location.classList.add("location");
const locationTitle = document.createElement("h3");
locationTitle.textContent += "Location";
Location.appendChild(locationTitle);
const Address = document.createElement("p");
Address.classList.add("note");
Address.textContent += "1107 OhWyrm Drive";
Location.appendChild(Address);
const CityState = document.createElement("p");
CityState.classList.add("note");
CityState.textContent += "Dinosaur, Colorado";
Location.appendChild(CityState);

Info.appendChild(Location);

Content.appendChild(Info);

const Home = document.getElementById("home");
Home.addEventListener("click", function() {
    Content.innerHTML = "";
    
    Content.appendChild(Hero);
    Content.appendChild(Yelp);
    Content.appendChild(Info);

});

const Menu = document.getElementById("menu");
Menu.addEventListener("click", function() {
    Content.innerHTML = "";

    const MenuInstructions = document.createElement("div");
    MenuInstructions.classList.add("menu-instructions");
    const Menuhead = document.createElement("h1");
    Menuhead.setAttribute("id", "menuhead");
    Menuhead.textContent += "Menu";
    MenuInstructions.appendChild(Menuhead);
    const Directions = document.createElement("h2");
    Directions.setAttribute("id", "directions");
    Directions.textContent += "Pick one entree and three sides, two entrees and two sides, or three entrees and one side.";
    MenuInstructions.appendChild(Directions);

    Content.appendChild(MenuInstructions);

    const menuEntrees = document.createElement("div");
    menuEntrees.classList.add("entree-menu");
    const entreeHead = document.createElement("h3");
    entreeHead.textContent += "Entrees";
    menuEntrees.appendChild(entreeHead);
    const Entrees = document.createElement("div");
    Entrees.classList.add("entrees");

    const nuggies = document.createElement("div");
    nuggies.classList.add("item");
    const nugTitle = document.createElement("p");
    nugTitle.classList.add("note");
    nugTitle.setAttribute("id", "item-name");
    nugTitle.textContent += "Dino nuggies";
    nuggies.appendChild(nugTitle);
    const nugImg = document.createElement("img");
    nugImg.classList.add("example");
    nugImg.src = _nuggies_png__WEBPACK_IMPORTED_MODULE_6__;
    nuggies.appendChild(nugImg);
    Entrees.appendChild(nuggies);

    const fishies = document.createElement("div");
    fishies.classList.add("item");
    const fishTitle = document.createElement("p");
    fishTitle.classList.add("note");
    fishTitle.setAttribute("id", "item-name");
    fishTitle.textContent += "Fish sticks";
    fishies.appendChild(fishTitle);
    const fishImg = document.createElement("img");
    fishImg.classList.add("example");
    fishImg.src = _fish_sticks_png__WEBPACK_IMPORTED_MODULE_7__;
    fishies.appendChild(fishImg);
    Entrees.appendChild(fishies);

    const sammich = document.createElement("div");
    sammich.classList.add("item");
    const samTitle = document.createElement("p");
    samTitle.classList.add("note");
    samTitle.setAttribute("id", "item-name");
    samTitle.textContent += "Chicken or Fish sandwich";
    sammich.appendChild(samTitle);
    const samImg = document.createElement("img");
    samImg.classList.add("example");
    samImg.src = _sammich_png__WEBPACK_IMPORTED_MODULE_8__;
    sammich.appendChild(samImg);
    Entrees.appendChild(sammich);

    const cheesyMac = document.createElement("div");
    cheesyMac.classList.add("item");
    const cheesyTitle = document.createElement("p");
    cheesyTitle.classList.add("note");
    cheesyTitle.setAttribute("id", "item-name");
    cheesyTitle.textContent += "Mac and cheese";
    cheesyMac.appendChild(cheesyTitle);
    const cheesyImg = document.createElement("img");
    cheesyImg.classList.add("example");
    cheesyImg.src = _macncheese_png__WEBPACK_IMPORTED_MODULE_9__;
    cheesyMac.appendChild(cheesyImg);
    const cheesyAst = document.createElement("p");
    cheesyAst.setAttribute("id", "asterisk");
    cheesyAst.textContent += "*Optional, with chicken";
    cheesyMac.appendChild(cheesyAst);
    Entrees.appendChild(cheesyMac);

    menuEntrees.appendChild(Entrees);
    Content.appendChild(menuEntrees);

    const menuSides = document.createElement("div");
    menuSides.classList.add("side-menu");
    const sideHead = document.createElement("h3");
    sideHead.textContent += "Sides";
    menuSides.appendChild(sideHead);
    const Sides = document.createElement("div");
    Sides.classList.add("sides");

    const fries = document.createElement("div");
    fries.classList.add("item");
    const friesTitle = document.createElement("p");
    friesTitle.classList.add("note");
    friesTitle.setAttribute("id", "item-name");
    friesTitle.textContent += "Fries";
    fries.appendChild(friesTitle);
    const friesImg = document.createElement("img");
    friesImg.classList.add("example");
    friesImg.src = _fries_png__WEBPACK_IMPORTED_MODULE_10__;
    fries.appendChild(friesImg);
    const friesAst = document.createElement("p");
    friesAst.setAttribute("id", "asterisk");
    friesAst.textContent += "Regular or sweet potato";
    fries.appendChild(friesAst);
    Sides.appendChild(fries);

    const pickles = document.createElement("div");
    pickles.classList.add("item");
    const picklesTitle = document.createElement("p");
    picklesTitle.classList.add("note");
    picklesTitle.setAttribute("id", "item-name");
    picklesTitle.textContent += "Fried pickles";
    pickles.appendChild(picklesTitle);
    const picklesImg = document.createElement("img");
    picklesImg.classList.add("example");
    picklesImg.src = _pickles_png__WEBPACK_IMPORTED_MODULE_11__;
    pickles.appendChild(picklesImg);
    Sides.appendChild(pickles);

    const mozz = document.createElement("div");
    mozz.classList.add("item");
    const mozzTitle = document.createElement("p");
    mozzTitle.classList.add("note");
    mozzTitle.setAttribute("id", "item-name");
    mozzTitle.textContent += "Mozzarella sticks";
    mozz.appendChild(mozzTitle);
    const mozzImg = document.createElement("img");
    mozzImg.classList.add("example");
    mozzImg.src = _cheese_sticks_png__WEBPACK_IMPORTED_MODULE_12__;
    mozz.appendChild(mozzImg);
    const mozzAst = document.createElement("p");
    mozzAst.setAttribute("id", "asterisk");
    mozzAst.textContent += "*Fried, or string cheese";
    mozz.appendChild(mozzAst);
    Sides.appendChild(mozz);

    const apples = document.createElement("div");
    apples.classList.add("item");
    const applesTitle = document.createElement("p");
    applesTitle.classList.add("note");
    applesTitle.setAttribute("id", "item-name");
    applesTitle.textContent += "Apple Slices";
    apples.appendChild(applesTitle);
    const applesImg = document.createElement("img");
    applesImg.classList.add("example");
    applesImg.src = _apples_png__WEBPACK_IMPORTED_MODULE_13__;
    apples.appendChild(applesImg);
    const applesAst = document.createElement("p");
    applesAst.setAttribute("id", "asterisk");
    applesAst.textContent += "*Optional, with peanut butter or caramel sauce";
    apples.appendChild(applesAst);
    Sides.appendChild(apples);

    const carrots = document.createElement("div");
    carrots.classList.add("item");
    const carrotsTitle = document.createElement("p");
    carrotsTitle.classList.add("note");
    carrotsTitle.setAttribute("id", "item-name");
    carrotsTitle.textContent += "Carrot sticks";
    carrots.appendChild(carrotsTitle);
    const carrotsImg = document.createElement("img");
    carrotsImg.classList.add("example");
    carrotsImg.src = _carrots_png__WEBPACK_IMPORTED_MODULE_14__;
    carrots.appendChild(carrotsImg);
    const carrotsAst = document.createElement("p");
    carrotsAst.setAttribute("id", "asterisk");
    carrotsAst.textContent += "*Optional, with ranch dressing";
    carrots.appendChild(carrotsAst);
    Sides.appendChild(carrots);

    const beans = document.createElement("div");
    beans.classList.add("item");
    const beansTitle = document.createElement("p");
    beansTitle.classList.add("note");
    beansTitle.setAttribute("id", "item-name");
    beansTitle.textContent += "Green beans";
    beans.appendChild(beansTitle);
    const beansImg = document.createElement("img");
    beansImg.classList.add("example");
    beansImg.src = _greenbeans_png__WEBPACK_IMPORTED_MODULE_15__;
    beans.appendChild(beansImg);
    Sides.appendChild(beans);

    menuSides.appendChild(Sides);
    Content.appendChild(menuSides);
});

const About = document.getElementById("about");
About.addEventListener("click", function(){
    Content.innerHTML = "";

    const aboutHero = document.createElement("div");
    aboutHero.classList.add("hero");
    const heroSection = document.createElement("div");
    heroSection.classList.add("section");
    const welcome = document.createElement("h2");
    welcome.textContent += "Welcome to";
    heroSection.appendChild(welcome);
    const miniLogo = document.createElement("h1");
    miniLogo.classList.add("logomini");
    miniLogo.setAttribute("id", "menuhead");
    miniLogo.textContent += "Comfy Munchies";
    heroSection.appendChild(miniLogo);
    const author = document.createElement("h2");
    author.textContent += "a restaurant by Nigel & Applecat";
    heroSection.appendChild(author);
    aboutHero.appendChild(heroSection);

    const heroDesc = document.createElement("div");
    heroDesc.setAttribute("id", "desc");
    const descPara1 = document.createElement("p");
    descPara1.textContent += "Our humans are very good at making our homes comfy, cozy, low-demand, and safe for themselves and for us, and they take good care of us and give us good foods! But they often spend lots of time at home, and like many neurospicy humans, they don’t get many opportunities to go out for food that don’t require lots of rest, recovery, and healing afterward. Humans need spaces where they feel safe to enjoy safe and yummy foods! So we decided to give our humans a safe space to eat all of their favorite safe foods!";
    heroDesc.appendChild(descPara1);
    const descPara2 = document.createElement("p");
    descPara2.textContent += "Comfy Munchies provides a menu filled with common favorites among sensory-friendly safe foods for neurospicy people of all ages! We are a safe space free of judgment, infantilization, and discrimination. This is your space, your food, and your experience, and we hope you love every minute of it!";
    heroDesc.appendChild(descPara2);
    const descImportant = document.createElement("p");
    descImportant.setAttribute("id", "important");
    descImportant.textContent += "In addition to a menu that is full of common safe neurospicy safe foods, you can customize the sensory space at your table! Each table is enclosed in a sheltered, soundproof booth, with multiple options for: ";
    heroDesc.appendChild(descImportant);
    const descList = document.createElement("ul");
    descList.setAttribute("id", "important");
    const descItem1 = document.createElement("li");
    descItem1.textContet += "Seating";
    descList.appendChild(descItem1);
    const descItem2 = document.createElement("li");
    descItem2.textContent += "Lighting";
    descList.appendChild(descItem2);
    const descItem3 = document.createElement("li");
    descItem3.textContent += "Music/Ambient Sound";
    descList.appendChild(descItem3);
    const descItem4 = document.createElement("li");
    descItem4.textContent += "Flatware & dishes";
    descList.appendChild(descItem4);
    const descItem5 = document.createElement("li");
    descItem5.textContent = "Heating and air conditioning settings";
    descList.appendChild(descItem5);
    heroDesc.appendChild(descList);
    const descPara3 = document.createElement("p");
    descPara3.textContent += "In your reservation, please let us know if you have any food allergies, texture or flavor sensitivities, or other sensory concerns. We’ll do our best to accommodate your needs as completely as possible, ensuring you as safe and positive experience as we can!";
    heroDesc.appendChild(descPara3);
    const descPara4 = document.createElement("p");
    descPara4.textContent += "P.S. Check us out (and our humans) down below!";
    heroDesc.appendChild(descPara4);
    aboutHero.appendChild(heroDesc);
    Content.appendChild(aboutHero);

    const Bios = document.createElement("div");
    Bios.setAttribute("id", "bios");
    const cat = document.createElement("div");
    cat.classList.add("headshot");
    const catName = document.createElement("p");
    catName.classList.add("note");
    catName.setAttribute("id", "item-name");
    catName.textContent += "Applecat";
    cat.appendChild(catName);
    const catPic = document.createElement("img");
    catPic.classList.add("friend");
    catPic.src = _applecat_PNG__WEBPACK_IMPORTED_MODULE_16__;
    cat.appendChild(catPic);
    const catPronouns = document.createElement("p");
    catPronouns.setAttribute("id", "asterisk");
    catPronouns.textContent += "Pronouns: any!";
    cat.appendChild(catPronouns);
    Bios.appendChild(cat);

    const dog = document.createElement("div");
    dog.classList.add("headshot");
    const dogName = document.createElement("p");
    dogName.classList.add("note");
    dogName.setAttribute("id", "item-name");
    dogName.textContent += "Nigel";
    dog.appendChild(dogName);
    const dogPic = document.createElement("img");
    dogPic.classList.add("friend");
    dogPic.src = _nigel_png__WEBPACK_IMPORTED_MODULE_17__;
    dog.appendChild(dogPic);
    const dogPronouns = document.createElement("p");
    dogPronouns.setAttribute("id", "asterisk");
    dogPronouns.textContent += "Pronouns: he/him/his";
    dog.appendChild(dogPronouns);
    Bios.appendChild(dog);

    const gab = document.createElement("div");
    gab.classList.add("headshot");
    const gabName = document.createElement("p");
    gabName.classList.add("note");
    gabName.setAttribute("id", "item-name");
    gabName.textContent += "goodappleboy";
    gab.appendChild(gabName);
    const gabPic = document.createElement("img");
    gabPic.classList.add("friend");
    gabPic.src = _goodappleboy_jpg__WEBPACK_IMPORTED_MODULE_18__;
    gab.appendChild(gabPic);
    const gabPronouns = document.createElement("p");
    gabPronouns.setAttribute("id", "asterisk");
    gabPronouns.textContent += "Pronouns: they/them/theirs";
    gab.appendChild(gabPronouns);
    Bios.appendChild(gab);

    const rdc = document.createElement("div");
    rdc.classList.add("headshot");
    const rdcName = document.createElement("p");
    rdcName.classList.add("note");
    rdcName.setAttribute("id", "item-name");
    rdcName.textContent += "Rhett North";
    rdc.appendChild(rdcName);
    const rdcPic = document.createElement("img");
    rdcPic.classList.add("friend");
    rdcPic.src = _rdcnorth_jpg__WEBPACK_IMPORTED_MODULE_19__;
    rdc.appendChild(rdcPic);
    const rdcPronouns = document.createElement("p");
    rdcPronouns.setAttribute("id", "asterisk");
    rdcPronouns.textContent += "Pronouns: he/him/his";
    rdc.appendChild(rdcPronouns);
    Bios.appendChild(rdc);

    Content.appendChild(Bios);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLGlIQUFxQztBQUNqRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUss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Q0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQVE7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQU87QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJDQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0NBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJDQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0NhdGJvby53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9DYXRib28ud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2NyZWFtLURFTU8ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vY3JlYW0tREVNTy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4va29pLWZpc2hfYmtnZC5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ibG9zc29tOiAjZTdmY2Q5O1xuICAgIC0ta29pLXJlZDogI2Q4M2I1NDtcbiAgICAtLWtvaS1ncmF5OiAjYzZkMWJmO1xuICAgIC0ta29pLXJlZC1ob3ZlcjogI2I0MjQ0NztcbiAgICAtLWtvaS15ZWxsb3c6ICNjZGFhMTY7XG4gICAgLS1saWx5cGFkOiByZ2JhKDE0LCAxMDksIDg0LCAwLjM3KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2F0Ym9vXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3RyZXRjaDogNDAwOyAgICAgICBcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3JlYW1ERU1PXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbn1cblxubmF2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjUzLCAyNTAsIDAuNik7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSwgaDIsIHAsIGJ1dHRvbiwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNyZWFtREVNT1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2F0Ym9vXCIsIFwiSGVsdmV0aWNhXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1rb2ktcmVkKTtcbn1cblxuYSB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbnAge1xuICAgIGNvbG9yOiB2YXIoLS1ibG9zc29tKTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDJmcjtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWIge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2ktcmVkKTtcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFiOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2ktcmVkLWhvdmVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMi41dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlcm8sIC5yZXZpZXdzLCAubWVudS1pbnN0cnVjdGlvbnMsIC5lbnRyZWUtbWVudSwgLnNpZGUtbWVudSB7XG4gICAgbWFyZ2luOiAydnc7XG4gICAgcGFkZGluZzogMy41dnc7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjV2dztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmluZm8ge1xuICAgIG1hcmdpbjogMnZ3O1xuICAgIHBhZGRpbmc6IDEuNXZ3O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kZXMgaDMsIC5sb2NhdGlvbiBoMyB7XG4gICAgY29sb3I6IHZhcigtLWtvaS15ZWxsb3cpO1xufVxuXG4ubW9kZXMge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgcGFkZGluZzogMC41dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgcGFkZGluZzogMC41dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZW50cmVlcywgLnNpZGVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVudHJlZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xufVxuXG4uc2lkZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cbi5leGFtcGxlIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogM3B4O1xufVxuXG4ubG9nb21pbmkge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaGVhZHNob3Qge1xuICAgIG1hcmdpbjogMC41dnc7XG4gICAgcGFkZGluZzogMC43NXZ3O1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mcmllbmQge1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIGhlaWdodDogMTV2dztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4jbG9nby10ZXh0IHtcbiAgICBmb250LWZhbWlseTogXCJDYXRib29cIiwgXCJIZWx2ZXRpY2FcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMuMjVyZW07XG4gICAgY29sb3I6IHZhcigtLWtvaS1yZWQpO1xufVxuXG4jc2xvZ2FuIHtcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcbn1cblxuI2hvdXJzIHtcbiAgICBtYXJnaW4tdG9wOiAxLjV2dztcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbiNtZW51aGVhZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ2F0Ym9vXCI7XG4gICAgY29sb3I6IHZhcigtLWtvaS1yZWQpO1xufVxuXG4jZGlyZWN0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMS41dnc7XG59XG5cbiNhc3RlcmlzayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuI2l0ZW0tbmFtZSB7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbiNkZXNjIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jaW1wb3J0YW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNiaW9zIHtcbiAgICBtYXJnaW46IDJ2dztcbiAgICBwYWRkaW5nOiAzLjV2dztcbiAgICB3aWR0aDogOTUlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjsrREFDeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7K0RBQzZDO0lBQzdDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUEwQztJQUMxQyxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmxvc3NvbTogI2U3ZmNkOTtcXG4gICAgLS1rb2ktcmVkOiAjZDgzYjU0O1xcbiAgICAtLWtvaS1ncmF5OiAjYzZkMWJmO1xcbiAgICAtLWtvaS1yZWQtaG92ZXI6ICNiNDI0NDc7XFxuICAgIC0ta29pLXllbGxvdzogI2NkYWExNjtcXG4gICAgLS1saWx5cGFkOiByZ2JhKDE0LCAxMDksIDg0LCAwLjM3KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2F0Ym9vXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vQ2F0Ym9vLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgICAgIHVybChcXFwiLi9DYXRib28ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHJldGNoOiA0MDA7ICAgICAgIFxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmVhbURFTU9cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9jcmVhbS1ERU1PLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgICAgIHVybChcXFwiLi9jcmVhbS1ERU1PLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2tvaS1maXNoX2JrZ2QuZ2lmKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbn1cXG5cXG5uYXYge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNTMsIDI1MCwgMC42KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSwgaDIsIHAsIGJ1dHRvbiwgbGkge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNyZWFtREVNT1xcXCIsIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2F0Ym9vXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWtvaS1yZWQpO1xcbn1cXG5cXG5hIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxucCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibG9zc29tKTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMmZyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDIuMjVyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtvaS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWtvaS1yZWQtaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDIuNXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZXJvLCAucmV2aWV3cywgLm1lbnUtaW5zdHJ1Y3Rpb25zLCAuZW50cmVlLW1lbnUsIC5zaWRlLW1lbnUge1xcbiAgICBtYXJnaW46IDJ2dztcXG4gICAgcGFkZGluZzogMy41dnc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcXG4gICAgY29sb3I6IHZhcigtLWJsb3Nzb20pO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXZ3O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW46IDJ2dztcXG4gICAgcGFkZGluZzogMS41dnc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbHlwYWQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGVzIGgzLCAubG9jYXRpb24gaDMge1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXllbGxvdyk7XFxufVxcblxcbi5tb2RlcyB7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIHBhZGRpbmc6IDAuNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBwYWRkaW5nOiAwLjV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVudHJlZXMsIC5zaWRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVudHJlZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnNpZGVzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLmV4YW1wbGUge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5sb2dvbWluaSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaGVhZHNob3Qge1xcbiAgICBtYXJnaW46IDAuNXZ3O1xcbiAgICBwYWRkaW5nOiAwLjc1dnc7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbHlwYWQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcmllbmQge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiAxNXZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbG9nby10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXRib29cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XFxufVxcblxcbiNzbG9nYW4ge1xcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcXG59XFxuXFxuI2hvdXJzIHtcXG4gICAgbWFyZ2luLXRvcDogMS41dnc7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI21lbnVoZWFkIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXRib29cXFwiO1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XFxufVxcblxcbiNkaXJlY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMS41dnc7XFxufVxcblxcbiNhc3RlcmlzayB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4jaXRlbS1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbiNkZXNjIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGhlaWdodDogNDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNpbXBvcnRhbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNiaW9zIHtcXG4gICAgbWFyZ2luOiAydnc7XFxuICAgIHBhZGRpbmc6IDMuNXZ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9rb2ktZmlzaF9ia2dkLmdpZlwiO1xuaW1wb3J0IEluc3RhSWNvbiBmcm9tIFwiLi9pbnN0YWdyYW0taWNvbi5wbmdcIjtcbmltcG9ydCBUd2l0Y2hJY29uIGZyb20gXCIuL3R3aXRjaC1pY29uLnBuZ1wiO1xuaW1wb3J0IFlvdXR1YmVJY29uIGZyb20gXCIuL3lvdXR1YmUtaWNvbi5wbmdcIjtcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSBcIi4vbGlua2VkaW4taWNvbi5wbmdcIjtcbmltcG9ydCBOdWdnaWVzIGZyb20gXCIuL251Z2dpZXMucG5nXCI7XG5pbXBvcnQgRmlzaFN0aWNrcyBmcm9tIFwiLi9maXNoLXN0aWNrcy5wbmdcIjtcbmltcG9ydCBTYW5kd2ljaCBmcm9tIFwiLi9zYW1taWNoLnBuZ1wiO1xuaW1wb3J0IE1hY0NoZWVzZSBmcm9tIFwiLi9tYWNuY2hlZXNlLnBuZ1wiO1xuaW1wb3J0IEZyaWVzIGZyb20gXCIuL2ZyaWVzLnBuZ1wiO1xuaW1wb3J0IFBpY2tsZXMgZnJvbSBcIi4vcGlja2xlcy5wbmdcIjtcbmltcG9ydCBDaGVlc2VTdGlja3MgZnJvbSBcIi4vY2hlZXNlLXN0aWNrcy5wbmdcIjtcbmltcG9ydCBBcHBsZXMgZnJvbSBcIi4vYXBwbGVzLnBuZ1wiO1xuaW1wb3J0IENhcnJvdHMgZnJvbSBcIi4vY2Fycm90cy5wbmdcIjtcbmltcG9ydCBHcmVlbkJlYW5zIGZyb20gXCIuL2dyZWVuYmVhbnMucG5nXCI7XG5pbXBvcnQgQXBwbGVjYXQgZnJvbSBcIi4vYXBwbGVjYXQuUE5HXCI7XG5pbXBvcnQgTmlnZWwgZnJvbSBcIi4vbmlnZWwucG5nXCJcbmltcG9ydCBBcHBsZUJveSBmcm9tIFwiLi9nb29kYXBwbGVib3kuanBnXCI7XG5pbXBvcnQgTm9ydGggZnJvbSBcIi4vcmRjbm9ydGguanBnXCI7XG5cbmNvbnN0IE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5jb25zdCBTb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblNvY2lhbHMuY2xhc3NMaXN0LmFkZChcInNvY2lhbHNcIik7XG5cbmNvbnN0IEluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5JbnN0YS5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dvb2RhcHBsZWJveS9cIjtcbkluc3RhLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuY29uc3QgaW5zdGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmluc3RhTGluay5zcmMgPSBJbnN0YUljb247XG5pbnN0YUxpbmsuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5JbnN0YS5hcHBlbmRDaGlsZChpbnN0YUxpbmspO1xuU29jaWFscy5hcHBlbmRDaGlsZChJbnN0YSk7XG5cbmNvbnN0IFR3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuVHdpdGNoLmhyZWYgPSBcImh0dHBzOi8vd3d3LnR3aXRjaC50di9nb29kYXBwbGVib3lcIjtcblR3aXRjaC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbmNvbnN0IHR3aXRjaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xudHdpdGNoTGluay5zcmMgPSBUd2l0Y2hJY29uO1xudHdpdGNoTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblR3aXRjaC5hcHBlbmRDaGlsZCh0d2l0Y2hMaW5rKTtcblNvY2lhbHMuYXBwZW5kQ2hpbGQoVHdpdGNoKTtcblxuY29uc3QgWW91dHViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuWW91dHViZS5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AZ29vZGFwcGxlYm95XCI7XG5Zb3V0dWJlLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuY29uc3QgeW91dHViZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xueW91dHViZUxpbmsuc3JjID0gWW91dHViZUljb247XG55b3V0dWJlTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbllvdXR1YmUuYXBwZW5kQ2hpbGQoeW91dHViZUxpbmspO1xuU29jaWFscy5hcHBlbmRDaGlsZChZb3V0dWJlKTtcblxuY29uc3QgTGlua2VkaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbkxpbmtlZGluLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yZGNub3J0aFwiO1xuTGlua2VkaW4uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5jb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubGlua2VkaW5MaW5rLnNyYyA9IExpbmtlZGluSWNvbjtcbmxpbmtlZGluTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbkxpbmtlZGluLmFwcGVuZENoaWxkKGxpbmtlZGluTGluayk7XG5Tb2NpYWxzLmFwcGVuZENoaWxkKExpbmtlZGluKTtcblxuTmF2LmFwcGVuZENoaWxkKFNvY2lhbHMpO1xuXG5jb25zdCBDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbkhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5jb25zdCBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oZXJvSGVhZGxpbmUudGV4dENvbnRlbnQgKz0gXCJFbmpveSB5b3VyIGZhdm9yaXRlIHNhZmUgZm9vZHMgaW4gYSBzZW5zb3J5LWZyaWVuZGx5IGFuZCBqdWRnbWVudCBmcmVlIGVudmlyb25tZW50IHdpdGggTmlnZWwgYW5kIEFwcGxlY2F0IVwiO1xuSGVyby5hcHBlbmRDaGlsZChoZXJvSGVhZGxpbmUpO1xuY29uc3QgaGVyb1Nsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmhlcm9TbG9nYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbG9nYW5cIik7XG5oZXJvU2xvZ2FuLnRleHRDb250ZW50ICs9IFwiQWZmb3JkYWJsZSBhbmQgYWNjZXNzaWJsZSBtZWFscyBmb3IgYWxsIGFnZXMhXCI7XG5IZXJvLmFwcGVuZENoaWxkKGhlcm9TbG9nYW4pO1xuXG5Db250ZW50LmFwcGVuZENoaWxkKEhlcm8pO1xuXG5jb25zdCBZZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblllbHAuY2xhc3NMaXN0LmFkZChcInJldmlld3NcIik7XG5jb25zdCByZXZpZXdzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5yZXZpZXdzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJSZXZpZXdzXCI7XG5ZZWxwLmFwcGVuZENoaWxkKHJldmlld3NUaXRsZSk7XG5jb25zdCByZXZpZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5yZXZpZXdCb2R5LmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xucmV2aWV3Qm9keS50ZXh0Q29udGVudCArPSBcIkFsbCBteSBmYXZvcml0ZSBmb29kcywgb2ZmIHRoZSBraWRzIG1lbnUhIFRoaXMgaXMgb25lIHJlc3RhdXJhbnQgdGhhdCBpcyBhbiBlYXN5LCBzYWZlIHNwYWNlIGZvciBtZSB0byBlYXQsIGFuZCBJJ2xsIGtlZXAgY29taW5nIGJhY2suIFRoZSBkaW5vIG51Z2dpZXMgYXJlIGEgcGVyc29uYWwgZmF2b3JpdGUhXCI7XG5ZZWxwLmFwcGVuZENoaWxkKHJldmlld0JvZHkpO1xuY29uc3QgcmV2aWV3UXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnJldmlld1F1b3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xucmV2aWV3UXVvdGUudGV4dENvbnRlbnQgKz0gXCIta3Jhbm9yMlwiO1xuWWVscC5hcHBlbmRDaGlsZChyZXZpZXdRdW90ZSk7XG5cbkNvbnRlbnQuYXBwZW5kQ2hpbGQoWWVscCk7XG5cbmNvbnN0IEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuY29uc3QgTW9kZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuTW9kZXMuY2xhc3NMaXN0LmFkZChcIm1vZGVzXCIpO1xuY29uc3QgbW9kZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbm1vZGVzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJIb3Vyc1wiO1xuTW9kZXMuYXBwZW5kQ2hpbGQobW9kZXNUaXRsZSk7XG5jb25zdCBtb2Rlc0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5tb2Rlc0hvdXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cnNcIik7XG5tb2Rlc0hvdXJzLnRleHRDb250ZW50ICs9IFwiTW9uZGF5LVN1bmRheTogMTJwbS0xMmFtXCI7XG5Nb2Rlcy5hcHBlbmRDaGlsZChtb2Rlc0hvdXJzKTtcbmNvbnN0IG1vZGVzTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubW9kZXNOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xubW9kZXNOb3RlLnRleHRDb250ZW50ICs9IFwiV2UgYWxzbyBvZmZlciBkcml2ZS10aHJ1LCBjYXJyeS1vdXQsIGFuZCBkZWxpdmVyeSFcIlxuTW9kZXMuYXBwZW5kQ2hpbGQobW9kZXNOb3RlKTtcblxuSW5mby5hcHBlbmRDaGlsZChNb2Rlcyk7XG5cbmNvbnN0IExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbkxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5sb2NhdGlvblRpdGxlLnRleHRDb250ZW50ICs9IFwiTG9jYXRpb25cIjtcbkxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuY29uc3QgQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuQWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbkFkZHJlc3MudGV4dENvbnRlbnQgKz0gXCIxMTA3IE9oV3lybSBEcml2ZVwiO1xuTG9jYXRpb24uYXBwZW5kQ2hpbGQoQWRkcmVzcyk7XG5jb25zdCBDaXR5U3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbkNpdHlTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbkNpdHlTdGF0ZS50ZXh0Q29udGVudCArPSBcIkRpbm9zYXVyLCBDb2xvcmFkb1wiO1xuTG9jYXRpb24uYXBwZW5kQ2hpbGQoQ2l0eVN0YXRlKTtcblxuSW5mby5hcHBlbmRDaGlsZChMb2NhdGlvbik7XG5cbkNvbnRlbnQuYXBwZW5kQ2hpbGQoSW5mbyk7XG5cbmNvbnN0IEhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChIZXJvKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKFllbHApO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSW5mbyk7XG5cbn0pO1xuXG5jb25zdCBNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgTWVudUluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgTWVudUluc3RydWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbnN0cnVjdGlvbnNcIik7XG4gICAgY29uc3QgTWVudWhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgTWVudWhlYWQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51aGVhZFwiKTtcbiAgICBNZW51aGVhZC50ZXh0Q29udGVudCArPSBcIk1lbnVcIjtcbiAgICBNZW51SW5zdHJ1Y3Rpb25zLmFwcGVuZENoaWxkKE1lbnVoZWFkKTtcbiAgICBjb25zdCBEaXJlY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIERpcmVjdGlvbnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXJlY3Rpb25zXCIpO1xuICAgIERpcmVjdGlvbnMudGV4dENvbnRlbnQgKz0gXCJQaWNrIG9uZSBlbnRyZWUgYW5kIHRocmVlIHNpZGVzLCB0d28gZW50cmVlcyBhbmQgdHdvIHNpZGVzLCBvciB0aHJlZSBlbnRyZWVzIGFuZCBvbmUgc2lkZS5cIjtcbiAgICBNZW51SW5zdHJ1Y3Rpb25zLmFwcGVuZENoaWxkKERpcmVjdGlvbnMpO1xuXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChNZW51SW5zdHJ1Y3Rpb25zKTtcblxuICAgIGNvbnN0IG1lbnVFbnRyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RW50cmVlcy5jbGFzc0xpc3QuYWRkKFwiZW50cmVlLW1lbnVcIik7XG4gICAgY29uc3QgZW50cmVlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBlbnRyZWVIZWFkLnRleHRDb250ZW50ICs9IFwiRW50cmVlc1wiO1xuICAgIG1lbnVFbnRyZWVzLmFwcGVuZENoaWxkKGVudHJlZUhlYWQpO1xuICAgIGNvbnN0IEVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIEVudHJlZXMuY2xhc3NMaXN0LmFkZChcImVudHJlZXNcIik7XG5cbiAgICBjb25zdCBudWdnaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBudWdnaWVzLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IG51Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbnVnVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgbnVnVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgbnVnVGl0bGUudGV4dENvbnRlbnQgKz0gXCJEaW5vIG51Z2dpZXNcIjtcbiAgICBudWdnaWVzLmFwcGVuZENoaWxkKG51Z1RpdGxlKTtcbiAgICBjb25zdCBudWdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG51Z0ltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBudWdJbWcuc3JjID0gTnVnZ2llcztcbiAgICBudWdnaWVzLmFwcGVuZENoaWxkKG51Z0ltZyk7XG4gICAgRW50cmVlcy5hcHBlbmRDaGlsZChudWdnaWVzKTtcblxuICAgIGNvbnN0IGZpc2hpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpc2hpZXMuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgZmlzaFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlzaFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIGZpc2hUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBmaXNoVGl0bGUudGV4dENvbnRlbnQgKz0gXCJGaXNoIHN0aWNrc1wiO1xuICAgIGZpc2hpZXMuYXBwZW5kQ2hpbGQoZmlzaFRpdGxlKTtcbiAgICBjb25zdCBmaXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmaXNoSW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIGZpc2hJbWcuc3JjID0gRmlzaFN0aWNrcztcbiAgICBmaXNoaWVzLmFwcGVuZENoaWxkKGZpc2hJbWcpO1xuICAgIEVudHJlZXMuYXBwZW5kQ2hpbGQoZmlzaGllcyk7XG5cbiAgICBjb25zdCBzYW1taWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYW1taWNoLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IHNhbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2FtVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgc2FtVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgc2FtVGl0bGUudGV4dENvbnRlbnQgKz0gXCJDaGlja2VuIG9yIEZpc2ggc2FuZHdpY2hcIjtcbiAgICBzYW1taWNoLmFwcGVuZENoaWxkKHNhbVRpdGxlKTtcbiAgICBjb25zdCBzYW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNhbUltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBzYW1JbWcuc3JjID0gU2FuZHdpY2g7XG4gICAgc2FtbWljaC5hcHBlbmRDaGlsZChzYW1JbWcpO1xuICAgIEVudHJlZXMuYXBwZW5kQ2hpbGQoc2FtbWljaCk7XG5cbiAgICBjb25zdCBjaGVlc3lNYWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWVzeU1hYy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBjaGVlc3lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNoZWVzeVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIGNoZWVzeVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIGNoZWVzeVRpdGxlLnRleHRDb250ZW50ICs9IFwiTWFjIGFuZCBjaGVlc2VcIjtcbiAgICBjaGVlc3lNYWMuYXBwZW5kQ2hpbGQoY2hlZXN5VGl0bGUpO1xuICAgIGNvbnN0IGNoZWVzeUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2hlZXN5SW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIGNoZWVzeUltZy5zcmMgPSBNYWNDaGVlc2U7XG4gICAgY2hlZXN5TWFjLmFwcGVuZENoaWxkKGNoZWVzeUltZyk7XG4gICAgY29uc3QgY2hlZXN5QXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2hlZXN5QXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgY2hlZXN5QXN0LnRleHRDb250ZW50ICs9IFwiKk9wdGlvbmFsLCB3aXRoIGNoaWNrZW5cIjtcbiAgICBjaGVlc3lNYWMuYXBwZW5kQ2hpbGQoY2hlZXN5QXN0KTtcbiAgICBFbnRyZWVzLmFwcGVuZENoaWxkKGNoZWVzeU1hYyk7XG5cbiAgICBtZW51RW50cmVlcy5hcHBlbmRDaGlsZChFbnRyZWVzKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKG1lbnVFbnRyZWVzKTtcblxuICAgIGNvbnN0IG1lbnVTaWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVNpZGVzLmNsYXNzTGlzdC5hZGQoXCJzaWRlLW1lbnVcIik7XG4gICAgY29uc3Qgc2lkZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgc2lkZUhlYWQudGV4dENvbnRlbnQgKz0gXCJTaWRlc1wiO1xuICAgIG1lbnVTaWRlcy5hcHBlbmRDaGlsZChzaWRlSGVhZCk7XG4gICAgY29uc3QgU2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFNpZGVzLmNsYXNzTGlzdC5hZGQoXCJzaWRlc1wiKTtcblxuICAgIGNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllcy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBmcmllc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZnJpZXNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBmcmllc1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIGZyaWVzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJGcmllc1wiO1xuICAgIGZyaWVzLmFwcGVuZENoaWxkKGZyaWVzVGl0bGUpO1xuICAgIGNvbnN0IGZyaWVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmcmllc0ltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBmcmllc0ltZy5zcmMgPSBGcmllcztcbiAgICBmcmllcy5hcHBlbmRDaGlsZChmcmllc0ltZyk7XG4gICAgY29uc3QgZnJpZXNBc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmcmllc0FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFzdGVyaXNrXCIpO1xuICAgIGZyaWVzQXN0LnRleHRDb250ZW50ICs9IFwiUmVndWxhciBvciBzd2VldCBwb3RhdG9cIjtcbiAgICBmcmllcy5hcHBlbmRDaGlsZChmcmllc0FzdCk7XG4gICAgU2lkZXMuYXBwZW5kQ2hpbGQoZnJpZXMpO1xuXG4gICAgY29uc3QgcGlja2xlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGlja2xlcy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBwaWNrbGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaWNrbGVzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgcGlja2xlc1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIHBpY2tsZXNUaXRsZS50ZXh0Q29udGVudCArPSBcIkZyaWVkIHBpY2tsZXNcIjtcbiAgICBwaWNrbGVzLmFwcGVuZENoaWxkKHBpY2tsZXNUaXRsZSk7XG4gICAgY29uc3QgcGlja2xlc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGlja2xlc0ltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBwaWNrbGVzSW1nLnNyYyA9IFBpY2tsZXM7XG4gICAgcGlja2xlcy5hcHBlbmRDaGlsZChwaWNrbGVzSW1nKTtcbiAgICBTaWRlcy5hcHBlbmRDaGlsZChwaWNrbGVzKTtcblxuICAgIGNvbnN0IG1venogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1venouY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgbW96elRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbW96elRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIG1venpUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBtb3p6VGl0bGUudGV4dENvbnRlbnQgKz0gXCJNb3p6YXJlbGxhIHN0aWNrc1wiO1xuICAgIG1venouYXBwZW5kQ2hpbGQobW96elRpdGxlKTtcbiAgICBjb25zdCBtb3p6SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtb3p6SW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIG1venpJbWcuc3JjID0gQ2hlZXNlU3RpY2tzO1xuICAgIG1venouYXBwZW5kQ2hpbGQobW96ekltZyk7XG4gICAgY29uc3QgbW96ekFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1venpBc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhc3Rlcmlza1wiKTtcbiAgICBtb3p6QXN0LnRleHRDb250ZW50ICs9IFwiKkZyaWVkLCBvciBzdHJpbmcgY2hlZXNlXCI7XG4gICAgbW96ei5hcHBlbmRDaGlsZChtb3p6QXN0KTtcbiAgICBTaWRlcy5hcHBlbmRDaGlsZChtb3p6KTtcblxuICAgIGNvbnN0IGFwcGxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwbGVzLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IGFwcGxlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXBwbGVzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgYXBwbGVzVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgYXBwbGVzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJBcHBsZSBTbGljZXNcIjtcbiAgICBhcHBsZXMuYXBwZW5kQ2hpbGQoYXBwbGVzVGl0bGUpO1xuICAgIGNvbnN0IGFwcGxlc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYXBwbGVzSW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIGFwcGxlc0ltZy5zcmMgPSBBcHBsZXM7XG4gICAgYXBwbGVzLmFwcGVuZENoaWxkKGFwcGxlc0ltZyk7XG4gICAgY29uc3QgYXBwbGVzQXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXBwbGVzQXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgYXBwbGVzQXN0LnRleHRDb250ZW50ICs9IFwiKk9wdGlvbmFsLCB3aXRoIHBlYW51dCBidXR0ZXIgb3IgY2FyYW1lbCBzYXVjZVwiO1xuICAgIGFwcGxlcy5hcHBlbmRDaGlsZChhcHBsZXNBc3QpO1xuICAgIFNpZGVzLmFwcGVuZENoaWxkKGFwcGxlcyk7XG5cbiAgICBjb25zdCBjYXJyb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJyb3RzLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IGNhcnJvdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhcnJvdHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBjYXJyb3RzVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgY2Fycm90c1RpdGxlLnRleHRDb250ZW50ICs9IFwiQ2Fycm90IHN0aWNrc1wiO1xuICAgIGNhcnJvdHMuYXBwZW5kQ2hpbGQoY2Fycm90c1RpdGxlKTtcbiAgICBjb25zdCBjYXJyb3RzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjYXJyb3RzSW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIGNhcnJvdHNJbWcuc3JjID0gQ2Fycm90cztcbiAgICBjYXJyb3RzLmFwcGVuZENoaWxkKGNhcnJvdHNJbWcpO1xuICAgIGNvbnN0IGNhcnJvdHNBc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXJyb3RzQXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgY2Fycm90c0FzdC50ZXh0Q29udGVudCArPSBcIipPcHRpb25hbCwgd2l0aCByYW5jaCBkcmVzc2luZ1wiO1xuICAgIGNhcnJvdHMuYXBwZW5kQ2hpbGQoY2Fycm90c0FzdCk7XG4gICAgU2lkZXMuYXBwZW5kQ2hpbGQoY2Fycm90cyk7XG5cbiAgICBjb25zdCBiZWFucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmVhbnMuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgYmVhbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJlYW5zVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgYmVhbnNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBiZWFuc1RpdGxlLnRleHRDb250ZW50ICs9IFwiR3JlZW4gYmVhbnNcIjtcbiAgICBiZWFucy5hcHBlbmRDaGlsZChiZWFuc1RpdGxlKTtcbiAgICBjb25zdCBiZWFuc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYmVhbnNJbWcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVcIik7XG4gICAgYmVhbnNJbWcuc3JjID0gR3JlZW5CZWFucztcbiAgICBiZWFucy5hcHBlbmRDaGlsZChiZWFuc0ltZyk7XG4gICAgU2lkZXMuYXBwZW5kQ2hpbGQoYmVhbnMpO1xuXG4gICAgbWVudVNpZGVzLmFwcGVuZENoaWxkKFNpZGVzKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKG1lbnVTaWRlcyk7XG59KTtcblxuY29uc3QgQWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuQWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgYWJvdXRIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dEhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgd2VsY29tZS50ZXh0Q29udGVudCArPSBcIldlbGNvbWUgdG9cIjtcbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBjb25zdCBtaW5pTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtaW5pTG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb21pbmlcIik7XG4gICAgbWluaUxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51aGVhZFwiKTtcbiAgICBtaW5pTG9nby50ZXh0Q29udGVudCArPSBcIkNvbWZ5IE11bmNoaWVzXCI7XG4gICAgaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQobWluaUxvZ28pO1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgKz0gXCJhIHJlc3RhdXJhbnQgYnkgTmlnZWwgJiBBcHBsZWNhdFwiO1xuICAgIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGF1dGhvcik7XG4gICAgYWJvdXRIZXJvLmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKTtcblxuICAgIGNvbnN0IGhlcm9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZXJvRGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NcIik7XG4gICAgY29uc3QgZGVzY1BhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY1BhcmExLnRleHRDb250ZW50ICs9IFwiT3VyIGh1bWFucyBhcmUgdmVyeSBnb29kIGF0IG1ha2luZyBvdXIgaG9tZXMgY29tZnksIGNvenksIGxvdy1kZW1hbmQsIGFuZCBzYWZlIGZvciB0aGVtc2VsdmVzIGFuZCBmb3IgdXMsIGFuZCB0aGV5IHRha2UgZ29vZCBjYXJlIG9mIHVzIGFuZCBnaXZlIHVzIGdvb2QgZm9vZHMhIEJ1dCB0aGV5IG9mdGVuIHNwZW5kIGxvdHMgb2YgdGltZSBhdCBob21lLCBhbmQgbGlrZSBtYW55IG5ldXJvc3BpY3kgaHVtYW5zLCB0aGV5IGRvbuKAmXQgZ2V0IG1hbnkgb3Bwb3J0dW5pdGllcyB0byBnbyBvdXQgZm9yIGZvb2QgdGhhdCBkb27igJl0IHJlcXVpcmUgbG90cyBvZiByZXN0LCByZWNvdmVyeSwgYW5kIGhlYWxpbmcgYWZ0ZXJ3YXJkLiBIdW1hbnMgbmVlZCBzcGFjZXMgd2hlcmUgdGhleSBmZWVsIHNhZmUgdG8gZW5qb3kgc2FmZSBhbmQgeXVtbXkgZm9vZHMhIFNvIHdlIGRlY2lkZWQgdG8gZ2l2ZSBvdXIgaHVtYW5zIGEgc2FmZSBzcGFjZSB0byBlYXQgYWxsIG9mIHRoZWlyIGZhdm9yaXRlIHNhZmUgZm9vZHMhXCI7XG4gICAgaGVyb0Rlc2MuYXBwZW5kQ2hpbGQoZGVzY1BhcmExKTtcbiAgICBjb25zdCBkZXNjUGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjUGFyYTIudGV4dENvbnRlbnQgKz0gXCJDb21meSBNdW5jaGllcyBwcm92aWRlcyBhIG1lbnUgZmlsbGVkIHdpdGggY29tbW9uIGZhdm9yaXRlcyBhbW9uZyBzZW5zb3J5LWZyaWVuZGx5IHNhZmUgZm9vZHMgZm9yIG5ldXJvc3BpY3kgcGVvcGxlIG9mIGFsbCBhZ2VzISBXZSBhcmUgYSBzYWZlIHNwYWNlIGZyZWUgb2YganVkZ21lbnQsIGluZmFudGlsaXphdGlvbiwgYW5kIGRpc2NyaW1pbmF0aW9uLiBUaGlzIGlzIHlvdXIgc3BhY2UsIHlvdXIgZm9vZCwgYW5kIHlvdXIgZXhwZXJpZW5jZSwgYW5kIHdlIGhvcGUgeW91IGxvdmUgZXZlcnkgbWludXRlIG9mIGl0IVwiO1xuICAgIGhlcm9EZXNjLmFwcGVuZENoaWxkKGRlc2NQYXJhMik7XG4gICAgY29uc3QgZGVzY0ltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NJbXBvcnRhbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgZGVzY0ltcG9ydGFudC50ZXh0Q29udGVudCArPSBcIkluIGFkZGl0aW9uIHRvIGEgbWVudSB0aGF0IGlzIGZ1bGwgb2YgY29tbW9uIHNhZmUgbmV1cm9zcGljeSBzYWZlIGZvb2RzLCB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgc2Vuc29yeSBzcGFjZSBhdCB5b3VyIHRhYmxlISBFYWNoIHRhYmxlIGlzIGVuY2xvc2VkIGluIGEgc2hlbHRlcmVkLCBzb3VuZHByb29mIGJvb3RoLCB3aXRoIG11bHRpcGxlIG9wdGlvbnMgZm9yOiBcIjtcbiAgICBoZXJvRGVzYy5hcHBlbmRDaGlsZChkZXNjSW1wb3J0YW50KTtcbiAgICBjb25zdCBkZXNjTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBkZXNjTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltcG9ydGFudFwiKTtcbiAgICBjb25zdCBkZXNjSXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGVzY0l0ZW0xLnRleHRDb250ZXQgKz0gXCJTZWF0aW5nXCI7XG4gICAgZGVzY0xpc3QuYXBwZW5kQ2hpbGQoZGVzY0l0ZW0xKTtcbiAgICBjb25zdCBkZXNjSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGVzY0l0ZW0yLnRleHRDb250ZW50ICs9IFwiTGlnaHRpbmdcIjtcbiAgICBkZXNjTGlzdC5hcHBlbmRDaGlsZChkZXNjSXRlbTIpO1xuICAgIGNvbnN0IGRlc2NJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkZXNjSXRlbTMudGV4dENvbnRlbnQgKz0gXCJNdXNpYy9BbWJpZW50IFNvdW5kXCI7XG4gICAgZGVzY0xpc3QuYXBwZW5kQ2hpbGQoZGVzY0l0ZW0zKTtcbiAgICBjb25zdCBkZXNjSXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZGVzY0l0ZW00LnRleHRDb250ZW50ICs9IFwiRmxhdHdhcmUgJiBkaXNoZXNcIjtcbiAgICBkZXNjTGlzdC5hcHBlbmRDaGlsZChkZXNjSXRlbTQpO1xuICAgIGNvbnN0IGRlc2NJdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkZXNjSXRlbTUudGV4dENvbnRlbnQgPSBcIkhlYXRpbmcgYW5kIGFpciBjb25kaXRpb25pbmcgc2V0dGluZ3NcIjtcbiAgICBkZXNjTGlzdC5hcHBlbmRDaGlsZChkZXNjSXRlbTUpO1xuICAgIGhlcm9EZXNjLmFwcGVuZENoaWxkKGRlc2NMaXN0KTtcbiAgICBjb25zdCBkZXNjUGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjUGFyYTMudGV4dENvbnRlbnQgKz0gXCJJbiB5b3VyIHJlc2VydmF0aW9uLCBwbGVhc2UgbGV0IHVzIGtub3cgaWYgeW91IGhhdmUgYW55IGZvb2QgYWxsZXJnaWVzLCB0ZXh0dXJlIG9yIGZsYXZvciBzZW5zaXRpdml0aWVzLCBvciBvdGhlciBzZW5zb3J5IGNvbmNlcm5zLiBXZeKAmWxsIGRvIG91ciBiZXN0IHRvIGFjY29tbW9kYXRlIHlvdXIgbmVlZHMgYXMgY29tcGxldGVseSBhcyBwb3NzaWJsZSwgZW5zdXJpbmcgeW91IGFzIHNhZmUgYW5kIHBvc2l0aXZlIGV4cGVyaWVuY2UgYXMgd2UgY2FuIVwiO1xuICAgIGhlcm9EZXNjLmFwcGVuZENoaWxkKGRlc2NQYXJhMyk7XG4gICAgY29uc3QgZGVzY1BhcmE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY1BhcmE0LnRleHRDb250ZW50ICs9IFwiUC5TLiBDaGVjayB1cyBvdXQgKGFuZCBvdXIgaHVtYW5zKSBkb3duIGJlbG93IVwiO1xuICAgIGhlcm9EZXNjLmFwcGVuZENoaWxkKGRlc2NQYXJhNCk7XG4gICAgYWJvdXRIZXJvLmFwcGVuZENoaWxkKGhlcm9EZXNjKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKGFib3V0SGVybyk7XG5cbiAgICBjb25zdCBCaW9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBCaW9zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmlvc1wiKTtcbiAgICBjb25zdCBjYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdC5jbGFzc0xpc3QuYWRkKFwiaGVhZHNob3RcIik7XG4gICAgY29uc3QgY2F0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhdE5hbWUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgY2F0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBjYXROYW1lLnRleHRDb250ZW50ICs9IFwiQXBwbGVjYXRcIjtcbiAgICBjYXQuYXBwZW5kQ2hpbGQoY2F0TmFtZSk7XG4gICAgY29uc3QgY2F0UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjYXRQaWMuY2xhc3NMaXN0LmFkZChcImZyaWVuZFwiKTtcbiAgICBjYXRQaWMuc3JjID0gQXBwbGVjYXQ7XG4gICAgY2F0LmFwcGVuZENoaWxkKGNhdFBpYyk7XG4gICAgY29uc3QgY2F0UHJvbm91bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXRQcm9ub3Vucy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFzdGVyaXNrXCIpO1xuICAgIGNhdFByb25vdW5zLnRleHRDb250ZW50ICs9IFwiUHJvbm91bnM6IGFueSFcIjtcbiAgICBjYXQuYXBwZW5kQ2hpbGQoY2F0UHJvbm91bnMpO1xuICAgIEJpb3MuYXBwZW5kQ2hpbGQoY2F0KTtcblxuICAgIGNvbnN0IGRvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9nLmNsYXNzTGlzdC5hZGQoXCJoZWFkc2hvdFwiKTtcbiAgICBjb25zdCBkb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZG9nTmFtZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBkb2dOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIGRvZ05hbWUudGV4dENvbnRlbnQgKz0gXCJOaWdlbFwiO1xuICAgIGRvZy5hcHBlbmRDaGlsZChkb2dOYW1lKTtcbiAgICBjb25zdCBkb2dQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRvZ1BpYy5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kXCIpO1xuICAgIGRvZ1BpYy5zcmMgPSBOaWdlbDtcbiAgICBkb2cuYXBwZW5kQ2hpbGQoZG9nUGljKTtcbiAgICBjb25zdCBkb2dQcm9ub3VucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRvZ1Byb25vdW5zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgZG9nUHJvbm91bnMudGV4dENvbnRlbnQgKz0gXCJQcm9ub3VuczogaGUvaGltL2hpc1wiO1xuICAgIGRvZy5hcHBlbmRDaGlsZChkb2dQcm9ub3Vucyk7XG4gICAgQmlvcy5hcHBlbmRDaGlsZChkb2cpO1xuXG4gICAgY29uc3QgZ2FiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYWIuY2xhc3NMaXN0LmFkZChcImhlYWRzaG90XCIpO1xuICAgIGNvbnN0IGdhYk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBnYWJOYW1lLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIGdhYk5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgZ2FiTmFtZS50ZXh0Q29udGVudCArPSBcImdvb2RhcHBsZWJveVwiO1xuICAgIGdhYi5hcHBlbmRDaGlsZChnYWJOYW1lKTtcbiAgICBjb25zdCBnYWJQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGdhYlBpYy5jbGFzc0xpc3QuYWRkKFwiZnJpZW5kXCIpO1xuICAgIGdhYlBpYy5zcmMgPSBBcHBsZUJveTtcbiAgICBnYWIuYXBwZW5kQ2hpbGQoZ2FiUGljKTtcbiAgICBjb25zdCBnYWJQcm9ub3VucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGdhYlByb25vdW5zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgZ2FiUHJvbm91bnMudGV4dENvbnRlbnQgKz0gXCJQcm9ub3VuczogdGhleS90aGVtL3RoZWlyc1wiO1xuICAgIGdhYi5hcHBlbmRDaGlsZChnYWJQcm9ub3Vucyk7XG4gICAgQmlvcy5hcHBlbmRDaGlsZChnYWIpO1xuXG4gICAgY29uc3QgcmRjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZGMuY2xhc3NMaXN0LmFkZChcImhlYWRzaG90XCIpO1xuICAgIGNvbnN0IHJkY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByZGNOYW1lLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIHJkY05hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgcmRjTmFtZS50ZXh0Q29udGVudCArPSBcIlJoZXR0IE5vcnRoXCI7XG4gICAgcmRjLmFwcGVuZENoaWxkKHJkY05hbWUpO1xuICAgIGNvbnN0IHJkY1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmRjUGljLmNsYXNzTGlzdC5hZGQoXCJmcmllbmRcIik7XG4gICAgcmRjUGljLnNyYyA9IE5vcnRoO1xuICAgIHJkYy5hcHBlbmRDaGlsZChyZGNQaWMpO1xuICAgIGNvbnN0IHJkY1Byb25vdW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcmRjUHJvbm91bnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhc3Rlcmlza1wiKTtcbiAgICByZGNQcm9ub3Vucy50ZXh0Q29udGVudCArPSBcIlByb25vdW5zOiBoZS9oaW0vaGlzXCI7XG4gICAgcmRjLmFwcGVuZENoaWxkKHJkY1Byb25vdW5zKTtcbiAgICBCaW9zLmFwcGVuZENoaWxkKHJkYyk7XG5cbiAgICBDb250ZW50LmFwcGVuZENoaWxkKEJpb3MpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=