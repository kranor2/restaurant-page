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

h1, h2, p, button {
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
    height: fit-content;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,qBAAqB;IACrB,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;IACrB;+DACyC;IACzC,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB;+DAC6C;IAC7C,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yDAA0C;IAC1C,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,aAAa;IACb,0CAA0C;IAC1C,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,oDAAoD;AACxD;;AAEA;IACI,8CAA8C;IAC9C,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,gCAAgC;IAChC,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,UAAU;IACV,mBAAmB;IACnB,gCAAgC;IAChC,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,UAAU;IACV,mBAAmB;IACnB,gCAAgC;IAChC,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,8CAA8C;IAC9C,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    --blossom: #e7fcd9;\n    --koi-red: #d83b54;\n    --koi-gray: #c6d1bf;\n    --koi-red-hover: #b42447;\n    --koi-yellow: #cdaa16;\n    --lilypad: rgba(14, 109, 84, 0.37);\n}\n\n@font-face {\n    font-family: \"Catboo\";\n    src: url(\"./Catboo.woff\") format(\"woff\"),\n        url(\"./Catboo.woff2\") format(\"woff2\");\n    font-style: normal;\n    font-weight: 400;\n    font-stretch: 400;       \n}\n\n@font-face {\n    font-family: \"CreamDEMO\";\n    src: url(\"./cream-DEMO.woff\") format(\"woff\"),\n        url(\"./cream-DEMO.woff2\") format(\"woff2\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(./koi-fish_bkgd.gif);\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\nnav {\n    margin: 0;\n    padding: 10px;\n    background-color: rgba(249, 253, 250, 0.6);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column-gap: 5px;\n    justify-items: center;\n    align-items: center;\n}\n\nh1, h2, p, button {\n    font-family: \"CreamDEMO\", \"Trebuchet MS\", sans-serif;\n}\n\nh3 {\n    font-family: \"Catboo\", \"Helvetica\", sans-serif;\n    font-size: 2rem;\n    color: var(--koi-red);\n}\n\na {\n    width: fit-content;\n    height: fit-content;\n    margin: 5px;\n}\n\np {\n    color: var(--blossom);\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 2fr 1fr 2fr;\n    overflow: scroll;\n    justify-items: start;\n    align-items: center;\n}\n\n.tab {\n    width: 5rem;\n    height: 2.25rem;\n    margin: 5px;\n    border: none;\n    border-radius: 3rem;\n    background-color: var(--koi-red);\n    color: var(--blossom);\n    font-size: 1rem;\n}\n\n.tab:hover {\n    background-color: var(--koi-red-hover);\n    cursor: pointer;\n}\n\n.icon {\n    width: 2.5vw;\n    height: auto;\n    margin: 5px;\n    cursor: pointer;\n}\n\n.hero, .reviews, .menu-instructions, .entree-menu, .side-menu {\n    margin: 2vw;\n    padding: 3.5vw;\n    width: 95%;\n    height: fit-content;\n    background-color: var(--lilypad);\n    color: var(--blossom);\n    border-radius: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.note {\n    margin-top: 1.5vw;\n    font-size: 1.5rem;\n}\n\n.info {\n    margin: 2vw;\n    padding: 1.5vw;\n    width: 95%;\n    height: fit-content;\n    background-color: var(--lilypad);\n    border-radius: 3rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.modes h3, .location h3 {\n    color: var(--koi-yellow);\n}\n\n.modes {\n    width: 49%;\n    padding: 0.5vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.location {\n    width: 49%;\n    padding: 0.5vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.entrees, .sides {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    text-align: center;\n}\n\n.entrees {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.sides {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.example {\n    width: 15vw;\n    height: auto;\n    align-self: center;\n    justify-self: center;\n}\n\n.item {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 3fr 1fr;\n    justify-items: center;\n}\n\n#logo-text {\n    font-family: \"Catboo\", \"Helvetica\", sans-serif;\n    font-size: 3.25rem;\n    color: var(--koi-red);\n}\n\n#slogan {\n    margin-top: 1.5vh;\n}\n\n#hours {\n    margin-top: 1.5vw;\n    font-size: 1rem;\n}\n\n#menuhead {\n    font-family: \"Catboo\";\n    color: var(--koi-red);\n}\n\n#directions {\n    margin-top: 1.5vw;\n}\n\n#asterisk {\n    font-size: 1rem;\n    align-self: end;\n}\n\n#item-name {\n    align-self: start;\n}"],"sourceRoot":""}]);
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

console.log("webpack did the thing");

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
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLGlIQUFxQztBQUNqRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVU7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQVE7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQU87QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2F0Ym9vLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0NhdGJvby53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY3JlYW0tREVNTy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jcmVhbS1ERU1PLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9rb2ktZmlzaF9ia2dkLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJsb3Nzb206ICNlN2ZjZDk7XG4gICAgLS1rb2ktcmVkOiAjZDgzYjU0O1xuICAgIC0ta29pLWdyYXk6ICNjNmQxYmY7XG4gICAgLS1rb2ktcmVkLWhvdmVyOiAjYjQyNDQ3O1xuICAgIC0ta29pLXllbGxvdzogI2NkYWExNjtcbiAgICAtLWxpbHlwYWQ6IHJnYmEoMTQsIDEwOSwgODQsIDAuMzcpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDYXRib29cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHJldGNoOiA0MDA7ICAgICAgIFxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDcmVhbURFTU9cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xufVxuXG5uYXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNTMsIDI1MCwgMC42KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxLCBoMiwgcCwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJDcmVhbURFTU9cIiwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhdGJvb1wiLCBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XG59XG5cbmEge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAyZnI7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFiIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDIuMjVyZW07XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29pLXJlZCk7XG4gICAgY29sb3I6IHZhcigtLWJsb3Nzb20pO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29pLXJlZC1ob3Zlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDIuNXZ3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZXJvLCAucmV2aWV3cywgLm1lbnUtaW5zdHJ1Y3Rpb25zLCAuZW50cmVlLW1lbnUsIC5zaWRlLW1lbnUge1xuICAgIG1hcmdpbjogMnZ3O1xuICAgIHBhZGRpbmc6IDMuNXZ3O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjV2dztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmluZm8ge1xuICAgIG1hcmdpbjogMnZ3O1xuICAgIHBhZGRpbmc6IDEuNXZ3O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kZXMgaDMsIC5sb2NhdGlvbiBoMyB7XG4gICAgY29sb3I6IHZhcigtLWtvaS15ZWxsb3cpO1xufVxuXG4ubW9kZXMge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgcGFkZGluZzogMC41dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgcGFkZGluZzogMC41dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZW50cmVlcywgLnNpZGVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVudHJlZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xufVxuXG4uc2lkZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cbi5leGFtcGxlIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2dvLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhdGJvb1wiLCBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMy4yNXJlbTtcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XG59XG5cbiNzbG9nYW4ge1xuICAgIG1hcmdpbi10b3A6IDEuNXZoO1xufVxuXG4jaG91cnMge1xuICAgIG1hcmdpbi10b3A6IDEuNXZ3O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI21lbnVoZWFkIHtcbiAgICBmb250LWZhbWlseTogXCJDYXRib29cIjtcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XG59XG5cbiNkaXJlY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAxLjV2dztcbn1cblxuI2FzdGVyaXNrIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4jaXRlbS1uYW1lIHtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQjsrREFDeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7K0RBQzZDO0lBQzdDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUEwQztJQUMxQyxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibG9zc29tOiAjZTdmY2Q5O1xcbiAgICAtLWtvaS1yZWQ6ICNkODNiNTQ7XFxuICAgIC0ta29pLWdyYXk6ICNjNmQxYmY7XFxuICAgIC0ta29pLXJlZC1ob3ZlcjogI2I0MjQ0NztcXG4gICAgLS1rb2kteWVsbG93OiAjY2RhYTE2O1xcbiAgICAtLWxpbHlwYWQ6IHJnYmEoMTQsIDEwOSwgODQsIDAuMzcpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXRib29cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9DYXRib28ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICAgICAgdXJsKFxcXCIuL0NhdGJvby53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0cmV0Y2g6IDQwMDsgICAgICAgXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNyZWFtREVNT1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL2NyZWFtLURFTU8ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICAgICAgdXJsKFxcXCIuL2NyZWFtLURFTU8ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4va29pLWZpc2hfYmtnZC5naWYpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxufVxcblxcbm5hdiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI1MywgMjUwLCAwLjYpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLCBoMiwgcCwgYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDcmVhbURFTU9cXFwiLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhdGJvb1xcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1rb2ktcmVkKTtcXG59XFxuXFxuYSB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbnAge1xcbiAgICBjb2xvcjogdmFyKC0tYmxvc3NvbSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDJmcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2ktcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLWJsb3Nzb20pO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2ktcmVkLWhvdmVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAyLjV2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVybywgLnJldmlld3MsIC5tZW51LWluc3RydWN0aW9ucywgLmVudHJlZS1tZW51LCAuc2lkZS1tZW51IHtcXG4gICAgbWFyZ2luOiAydnc7XFxuICAgIHBhZGRpbmc6IDMuNXZ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWx5cGFkKTtcXG4gICAgY29sb3I6IHZhcigtLWJsb3Nzb20pO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZSB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXZ3O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW46IDJ2dztcXG4gICAgcGFkZGluZzogMS41dnc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbHlwYWQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGVzIGgzLCAubG9jYXRpb24gaDMge1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXllbGxvdyk7XFxufVxcblxcbi5tb2RlcyB7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIHBhZGRpbmc6IDAuNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBwYWRkaW5nOiAwLjV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVudHJlZXMsIC5zaWRlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVudHJlZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLnNpZGVzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLmV4YW1wbGUge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nby10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXRib29cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XFxufVxcblxcbiNzbG9nYW4ge1xcbiAgICBtYXJnaW4tdG9wOiAxLjV2aDtcXG59XFxuXFxuI2hvdXJzIHtcXG4gICAgbWFyZ2luLXRvcDogMS41dnc7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI21lbnVoZWFkIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXRib29cXFwiO1xcbiAgICBjb2xvcjogdmFyKC0ta29pLXJlZCk7XFxufVxcblxcbiNkaXJlY3Rpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMS41dnc7XFxufVxcblxcbiNhc3RlcmlzayB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4jaXRlbS1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9rb2ktZmlzaF9ia2dkLmdpZlwiO1xuaW1wb3J0IEluc3RhSWNvbiBmcm9tIFwiLi9pbnN0YWdyYW0taWNvbi5wbmdcIjtcbmltcG9ydCBUd2l0Y2hJY29uIGZyb20gXCIuL3R3aXRjaC1pY29uLnBuZ1wiO1xuaW1wb3J0IFlvdXR1YmVJY29uIGZyb20gXCIuL3lvdXR1YmUtaWNvbi5wbmdcIjtcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSBcIi4vbGlua2VkaW4taWNvbi5wbmdcIjtcbmltcG9ydCBOdWdnaWVzIGZyb20gXCIuL251Z2dpZXMucG5nXCI7XG5pbXBvcnQgRmlzaFN0aWNrcyBmcm9tIFwiLi9maXNoLXN0aWNrcy5wbmdcIjtcbmltcG9ydCBTYW5kd2ljaCBmcm9tIFwiLi9zYW1taWNoLnBuZ1wiO1xuaW1wb3J0IE1hY0NoZWVzZSBmcm9tIFwiLi9tYWNuY2hlZXNlLnBuZ1wiO1xuaW1wb3J0IEZyaWVzIGZyb20gXCIuL2ZyaWVzLnBuZ1wiO1xuaW1wb3J0IFBpY2tsZXMgZnJvbSBcIi4vcGlja2xlcy5wbmdcIjtcbmltcG9ydCBDaGVlc2VTdGlja3MgZnJvbSBcIi4vY2hlZXNlLXN0aWNrcy5wbmdcIjtcbmltcG9ydCBBcHBsZXMgZnJvbSBcIi4vYXBwbGVzLnBuZ1wiO1xuaW1wb3J0IENhcnJvdHMgZnJvbSBcIi4vY2Fycm90cy5wbmdcIjtcbmltcG9ydCBHcmVlbkJlYW5zIGZyb20gXCIuL2dyZWVuYmVhbnMucG5nXCI7XG5cbmNvbnN0IE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5jb25zdCBTb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblNvY2lhbHMuY2xhc3NMaXN0LmFkZChcInNvY2lhbHNcIik7XG5cbmNvbnN0IEluc3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5JbnN0YS5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2dvb2RhcHBsZWJveS9cIjtcbkluc3RhLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuY29uc3QgaW5zdGFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmluc3RhTGluay5zcmMgPSBJbnN0YUljb247XG5pbnN0YUxpbmsuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5JbnN0YS5hcHBlbmRDaGlsZChpbnN0YUxpbmspO1xuU29jaWFscy5hcHBlbmRDaGlsZChJbnN0YSk7XG5cbmNvbnN0IFR3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuVHdpdGNoLmhyZWYgPSBcImh0dHBzOi8vd3d3LnR3aXRjaC50di9nb29kYXBwbGVib3lcIjtcblR3aXRjaC5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbmNvbnN0IHR3aXRjaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xudHdpdGNoTGluay5zcmMgPSBUd2l0Y2hJY29uO1xudHdpdGNoTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblR3aXRjaC5hcHBlbmRDaGlsZCh0d2l0Y2hMaW5rKTtcblNvY2lhbHMuYXBwZW5kQ2hpbGQoVHdpdGNoKTtcblxuY29uc3QgWW91dHViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuWW91dHViZS5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AZ29vZGFwcGxlYm95XCI7XG5Zb3V0dWJlLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuY29uc3QgeW91dHViZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xueW91dHViZUxpbmsuc3JjID0gWW91dHViZUljb247XG55b3V0dWJlTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbllvdXR1YmUuYXBwZW5kQ2hpbGQoeW91dHViZUxpbmspO1xuU29jaWFscy5hcHBlbmRDaGlsZChZb3V0dWJlKTtcblxuY29uc3QgTGlua2VkaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbkxpbmtlZGluLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yZGNub3J0aFwiO1xuTGlua2VkaW4uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5jb25zdCBsaW5rZWRpbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubGlua2VkaW5MaW5rLnNyYyA9IExpbmtlZGluSWNvbjtcbmxpbmtlZGluTGluay5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbkxpbmtlZGluLmFwcGVuZENoaWxkKGxpbmtlZGluTGluayk7XG5Tb2NpYWxzLmFwcGVuZENoaWxkKExpbmtlZGluKTtcblxuTmF2LmFwcGVuZENoaWxkKFNvY2lhbHMpO1xuXG5jb25zdCBDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbkhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5jb25zdCBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oZXJvSGVhZGxpbmUudGV4dENvbnRlbnQgKz0gXCJFbmpveSB5b3VyIGZhdm9yaXRlIHNhZmUgZm9vZHMgaW4gYSBzZW5zb3J5LWZyaWVuZGx5IGFuZCBqdWRnbWVudCBmcmVlIGVudmlyb25tZW50IHdpdGggTmlnZWwgYW5kIEFwcGxlY2F0IVwiO1xuSGVyby5hcHBlbmRDaGlsZChoZXJvSGVhZGxpbmUpO1xuY29uc3QgaGVyb1Nsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmhlcm9TbG9nYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbG9nYW5cIik7XG5oZXJvU2xvZ2FuLnRleHRDb250ZW50ICs9IFwiQWZmb3JkYWJsZSBhbmQgYWNjZXNzaWJsZSBtZWFscyBmb3IgYWxsIGFnZXMhXCI7XG5IZXJvLmFwcGVuZENoaWxkKGhlcm9TbG9nYW4pO1xuXG5Db250ZW50LmFwcGVuZENoaWxkKEhlcm8pO1xuXG5jb25zdCBZZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblllbHAuY2xhc3NMaXN0LmFkZChcInJldmlld3NcIik7XG5jb25zdCByZXZpZXdzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5yZXZpZXdzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJSZXZpZXdzXCI7XG5ZZWxwLmFwcGVuZENoaWxkKHJldmlld3NUaXRsZSk7XG5jb25zdCByZXZpZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5yZXZpZXdCb2R5LmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xucmV2aWV3Qm9keS50ZXh0Q29udGVudCArPSBcIkFsbCBteSBmYXZvcml0ZSBmb29kcywgb2ZmIHRoZSBraWRzIG1lbnUhIFRoaXMgaXMgb25lIHJlc3RhdXJhbnQgdGhhdCBpcyBhbiBlYXN5LCBzYWZlIHNwYWNlIGZvciBtZSB0byBlYXQsIGFuZCBJJ2xsIGtlZXAgY29taW5nIGJhY2suIFRoZSBkaW5vIG51Z2dpZXMgYXJlIGEgcGVyc29uYWwgZmF2b3JpdGUhXCI7XG5ZZWxwLmFwcGVuZENoaWxkKHJldmlld0JvZHkpO1xuY29uc3QgcmV2aWV3UXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnJldmlld1F1b3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xucmV2aWV3UXVvdGUudGV4dENvbnRlbnQgKz0gXCIta3Jhbm9yMlwiO1xuWWVscC5hcHBlbmRDaGlsZChyZXZpZXdRdW90ZSk7XG5cbkNvbnRlbnQuYXBwZW5kQ2hpbGQoWWVscCk7XG5cbmNvbnN0IEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuY29uc3QgTW9kZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuTW9kZXMuY2xhc3NMaXN0LmFkZChcIm1vZGVzXCIpO1xuY29uc3QgbW9kZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbm1vZGVzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJIb3Vyc1wiO1xuTW9kZXMuYXBwZW5kQ2hpbGQobW9kZXNUaXRsZSk7XG5jb25zdCBtb2Rlc0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5tb2Rlc0hvdXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG91cnNcIik7XG5tb2Rlc0hvdXJzLnRleHRDb250ZW50ICs9IFwiTW9uZGF5LVN1bmRheTogMTJwbS0xMmFtXCI7XG5Nb2Rlcy5hcHBlbmRDaGlsZChtb2Rlc0hvdXJzKTtcbmNvbnN0IG1vZGVzTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubW9kZXNOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xubW9kZXNOb3RlLnRleHRDb250ZW50ICs9IFwiV2UgYWxzbyBvZmZlciBkcml2ZS10aHJ1LCBjYXJyeS1vdXQsIGFuZCBkZWxpdmVyeSFcIlxuTW9kZXMuYXBwZW5kQ2hpbGQobW9kZXNOb3RlKTtcblxuSW5mby5hcHBlbmRDaGlsZChNb2Rlcyk7XG5cbmNvbnN0IExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbkxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5sb2NhdGlvblRpdGxlLnRleHRDb250ZW50ICs9IFwiTG9jYXRpb25cIjtcbkxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuY29uc3QgQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuQWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbkFkZHJlc3MudGV4dENvbnRlbnQgKz0gXCIxMTA3IE9oV3lybSBEcml2ZVwiO1xuTG9jYXRpb24uYXBwZW5kQ2hpbGQoQWRkcmVzcyk7XG5jb25zdCBDaXR5U3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbkNpdHlTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbkNpdHlTdGF0ZS50ZXh0Q29udGVudCArPSBcIkRpbm9zYXVyLCBDb2xvcmFkb1wiO1xuTG9jYXRpb24uYXBwZW5kQ2hpbGQoQ2l0eVN0YXRlKTtcblxuSW5mby5hcHBlbmRDaGlsZChMb2NhdGlvbik7XG5cbkNvbnRlbnQuYXBwZW5kQ2hpbGQoSW5mbyk7XG5cbmNvbnNvbGUubG9nKFwid2VicGFjayBkaWQgdGhlIHRoaW5nXCIpO1xuXG5jb25zdCBIb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSGVybyk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChZZWxwKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKEluZm8pO1xuXG59KTtcblxuY29uc3QgTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IE1lbnVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIE1lbnVJbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW5zdHJ1Y3Rpb25zXCIpO1xuICAgIGNvbnN0IE1lbnVoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIE1lbnVoZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudWhlYWRcIik7XG4gICAgTWVudWhlYWQudGV4dENvbnRlbnQgKz0gXCJNZW51XCI7XG4gICAgTWVudUluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChNZW51aGVhZCk7XG4gICAgY29uc3QgRGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBEaXJlY3Rpb25zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlyZWN0aW9uc1wiKTtcbiAgICBEaXJlY3Rpb25zLnRleHRDb250ZW50ICs9IFwiUGljayBvbmUgZW50cmVlIGFuZCB0aHJlZSBzaWRlcywgdHdvIGVudHJlZXMgYW5kIHR3byBzaWRlcywgb3IgdGhyZWUgZW50cmVlcyBhbmQgb25lIHNpZGUuXCI7XG4gICAgTWVudUluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChEaXJlY3Rpb25zKTtcblxuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoTWVudUluc3RydWN0aW9ucyk7XG5cbiAgICBjb25zdCBtZW51RW50cmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUVudHJlZXMuY2xhc3NMaXN0LmFkZChcImVudHJlZS1tZW51XCIpO1xuICAgIGNvbnN0IGVudHJlZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZW50cmVlSGVhZC50ZXh0Q29udGVudCArPSBcIkVudHJlZXNcIjtcbiAgICBtZW51RW50cmVlcy5hcHBlbmRDaGlsZChlbnRyZWVIZWFkKTtcbiAgICBjb25zdCBFbnRyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBFbnRyZWVzLmNsYXNzTGlzdC5hZGQoXCJlbnRyZWVzXCIpO1xuXG4gICAgY29uc3QgbnVnZ2llcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbnVnZ2llcy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBudWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG51Z1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIG51Z1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIG51Z1RpdGxlLnRleHRDb250ZW50ICs9IFwiRGlubyBudWdnaWVzXCI7XG4gICAgbnVnZ2llcy5hcHBlbmRDaGlsZChudWdUaXRsZSk7XG4gICAgY29uc3QgbnVnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBudWdJbWcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVcIik7XG4gICAgbnVnSW1nLnNyYyA9IE51Z2dpZXM7XG4gICAgbnVnZ2llcy5hcHBlbmRDaGlsZChudWdJbWcpO1xuICAgIEVudHJlZXMuYXBwZW5kQ2hpbGQobnVnZ2llcyk7XG5cbiAgICBjb25zdCBmaXNoaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaXNoaWVzLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IGZpc2hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpc2hUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBmaXNoVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgZmlzaFRpdGxlLnRleHRDb250ZW50ICs9IFwiRmlzaCBzdGlja3NcIjtcbiAgICBmaXNoaWVzLmFwcGVuZENoaWxkKGZpc2hUaXRsZSk7XG4gICAgY29uc3QgZmlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZmlzaEltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBmaXNoSW1nLnNyYyA9IEZpc2hTdGlja3M7XG4gICAgZmlzaGllcy5hcHBlbmRDaGlsZChmaXNoSW1nKTtcbiAgICBFbnRyZWVzLmFwcGVuZENoaWxkKGZpc2hpZXMpO1xuXG4gICAgY29uc3Qgc2FtbWljaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FtbWljaC5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBzYW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNhbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIHNhbVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIHNhbVRpdGxlLnRleHRDb250ZW50ICs9IFwiQ2hpY2tlbiBvciBGaXNoIHNhbmR3aWNoXCI7XG4gICAgc2FtbWljaC5hcHBlbmRDaGlsZChzYW1UaXRsZSk7XG4gICAgY29uc3Qgc2FtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzYW1JbWcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVcIik7XG4gICAgc2FtSW1nLnNyYyA9IFNhbmR3aWNoO1xuICAgIHNhbW1pY2guYXBwZW5kQ2hpbGQoc2FtSW1nKTtcbiAgICBFbnRyZWVzLmFwcGVuZENoaWxkKHNhbW1pY2gpO1xuXG4gICAgY29uc3QgY2hlZXN5TWFjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVlc3lNYWMuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgY2hlZXN5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjaGVlc3lUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBjaGVlc3lUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBjaGVlc3lUaXRsZS50ZXh0Q29udGVudCArPSBcIk1hYyBhbmQgY2hlZXNlXCI7XG4gICAgY2hlZXN5TWFjLmFwcGVuZENoaWxkKGNoZWVzeVRpdGxlKTtcbiAgICBjb25zdCBjaGVlc3lJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNoZWVzeUltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBjaGVlc3lJbWcuc3JjID0gTWFjQ2hlZXNlO1xuICAgIGNoZWVzeU1hYy5hcHBlbmRDaGlsZChjaGVlc3lJbWcpO1xuICAgIGNvbnN0IGNoZWVzeUFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNoZWVzeUFzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFzdGVyaXNrXCIpO1xuICAgIGNoZWVzeUFzdC50ZXh0Q29udGVudCArPSBcIipPcHRpb25hbCwgd2l0aCBjaGlja2VuXCI7XG4gICAgY2hlZXN5TWFjLmFwcGVuZENoaWxkKGNoZWVzeUFzdCk7XG4gICAgRW50cmVlcy5hcHBlbmRDaGlsZChjaGVlc3lNYWMpO1xuXG4gICAgbWVudUVudHJlZXMuYXBwZW5kQ2hpbGQoRW50cmVlcyk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChtZW51RW50cmVlcyk7XG5cbiAgICBjb25zdCBtZW51U2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVTaWRlcy5jbGFzc0xpc3QuYWRkKFwic2lkZS1tZW51XCIpO1xuICAgIGNvbnN0IHNpZGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHNpZGVIZWFkLnRleHRDb250ZW50ICs9IFwiU2lkZXNcIjtcbiAgICBtZW51U2lkZXMuYXBwZW5kQ2hpbGQoc2lkZUhlYWQpO1xuICAgIGNvbnN0IFNpZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBTaWRlcy5jbGFzc0xpc3QuYWRkKFwic2lkZXNcIik7XG5cbiAgICBjb25zdCBmcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJpZXMuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgZnJpZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZyaWVzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgZnJpZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBmcmllc1RpdGxlLnRleHRDb250ZW50ICs9IFwiRnJpZXNcIjtcbiAgICBmcmllcy5hcHBlbmRDaGlsZChmcmllc1RpdGxlKTtcbiAgICBjb25zdCBmcmllc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZnJpZXNJbWcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVcIik7XG4gICAgZnJpZXNJbWcuc3JjID0gRnJpZXM7XG4gICAgZnJpZXMuYXBwZW5kQ2hpbGQoZnJpZXNJbWcpO1xuICAgIGNvbnN0IGZyaWVzQXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZnJpZXNBc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhc3Rlcmlza1wiKTtcbiAgICBmcmllc0FzdC50ZXh0Q29udGVudCArPSBcIlJlZ3VsYXIgb3Igc3dlZXQgcG90YXRvXCI7XG4gICAgZnJpZXMuYXBwZW5kQ2hpbGQoZnJpZXNBc3QpO1xuICAgIFNpZGVzLmFwcGVuZENoaWxkKGZyaWVzKTtcblxuICAgIGNvbnN0IHBpY2tsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpY2tsZXMuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgY29uc3QgcGlja2xlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGlja2xlc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIHBpY2tsZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIml0ZW0tbmFtZVwiKTtcbiAgICBwaWNrbGVzVGl0bGUudGV4dENvbnRlbnQgKz0gXCJGcmllZCBwaWNrbGVzXCI7XG4gICAgcGlja2xlcy5hcHBlbmRDaGlsZChwaWNrbGVzVGl0bGUpO1xuICAgIGNvbnN0IHBpY2tsZXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBpY2tsZXNJbWcuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVcIik7XG4gICAgcGlja2xlc0ltZy5zcmMgPSBQaWNrbGVzO1xuICAgIHBpY2tsZXMuYXBwZW5kQ2hpbGQocGlja2xlc0ltZyk7XG4gICAgU2lkZXMuYXBwZW5kQ2hpbGQocGlja2xlcyk7XG5cbiAgICBjb25zdCBtb3p6ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3p6LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IG1venpUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1venpUaXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZVwiKTtcbiAgICBtb3p6VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgbW96elRpdGxlLnRleHRDb250ZW50ICs9IFwiTW96emFyZWxsYSBzdGlja3NcIjtcbiAgICBtb3p6LmFwcGVuZENoaWxkKG1venpUaXRsZSk7XG4gICAgY29uc3QgbW96ekltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbW96ekltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBtb3p6SW1nLnNyYyA9IENoZWVzZVN0aWNrcztcbiAgICBtb3p6LmFwcGVuZENoaWxkKG1venpJbWcpO1xuICAgIGNvbnN0IG1venpBc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtb3p6QXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXN0ZXJpc2tcIik7XG4gICAgbW96ekFzdC50ZXh0Q29udGVudCArPSBcIipGcmllZCwgb3Igc3RyaW5nIGNoZWVzZVwiO1xuICAgIG1venouYXBwZW5kQ2hpbGQobW96ekFzdCk7XG4gICAgU2lkZXMuYXBwZW5kQ2hpbGQobW96eik7XG5cbiAgICBjb25zdCBhcHBsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcGxlcy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBhcHBsZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFwcGxlc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIGFwcGxlc1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIGFwcGxlc1RpdGxlLnRleHRDb250ZW50ICs9IFwiQXBwbGUgU2xpY2VzXCI7XG4gICAgYXBwbGVzLmFwcGVuZENoaWxkKGFwcGxlc1RpdGxlKTtcbiAgICBjb25zdCBhcHBsZXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFwcGxlc0ltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBhcHBsZXNJbWcuc3JjID0gQXBwbGVzO1xuICAgIGFwcGxlcy5hcHBlbmRDaGlsZChhcHBsZXNJbWcpO1xuICAgIGNvbnN0IGFwcGxlc0FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFwcGxlc0FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFzdGVyaXNrXCIpO1xuICAgIGFwcGxlc0FzdC50ZXh0Q29udGVudCArPSBcIipPcHRpb25hbCwgd2l0aCBwZWFudXQgYnV0dGVyIG9yIGNhcmFtZWwgc2F1Y2VcIjtcbiAgICBhcHBsZXMuYXBwZW5kQ2hpbGQoYXBwbGVzQXN0KTtcbiAgICBTaWRlcy5hcHBlbmRDaGlsZChhcHBsZXMpO1xuXG4gICAgY29uc3QgY2Fycm90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2Fycm90cy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBjb25zdCBjYXJyb3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXJyb3RzVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGVcIik7XG4gICAgY2Fycm90c1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaXRlbS1uYW1lXCIpO1xuICAgIGNhcnJvdHNUaXRsZS50ZXh0Q29udGVudCArPSBcIkNhcnJvdCBzdGlja3NcIjtcbiAgICBjYXJyb3RzLmFwcGVuZENoaWxkKGNhcnJvdHNUaXRsZSk7XG4gICAgY29uc3QgY2Fycm90c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2Fycm90c0ltZy5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVwiKTtcbiAgICBjYXJyb3RzSW1nLnNyYyA9IENhcnJvdHM7XG4gICAgY2Fycm90cy5hcHBlbmRDaGlsZChjYXJyb3RzSW1nKTtcbiAgICBjb25zdCBjYXJyb3RzQXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2Fycm90c0FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFzdGVyaXNrXCIpO1xuICAgIGNhcnJvdHNBc3QudGV4dENvbnRlbnQgKz0gXCIqT3B0aW9uYWwsIHdpdGggcmFuY2ggZHJlc3NpbmdcIjtcbiAgICBjYXJyb3RzLmFwcGVuZENoaWxkKGNhcnJvdHNBc3QpO1xuICAgIFNpZGVzLmFwcGVuZENoaWxkKGNhcnJvdHMpO1xuXG4gICAgY29uc3QgYmVhbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJlYW5zLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGNvbnN0IGJlYW5zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiZWFuc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuICAgIGJlYW5zVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpdGVtLW5hbWVcIik7XG4gICAgYmVhbnNUaXRsZS50ZXh0Q29udGVudCArPSBcIkdyZWVuIGJlYW5zXCI7XG4gICAgYmVhbnMuYXBwZW5kQ2hpbGQoYmVhbnNUaXRsZSk7XG4gICAgY29uc3QgYmVhbnNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJlYW5zSW1nLmNsYXNzTGlzdC5hZGQoXCJleGFtcGxlXCIpO1xuICAgIGJlYW5zSW1nLnNyYyA9IEdyZWVuQmVhbnM7XG4gICAgYmVhbnMuYXBwZW5kQ2hpbGQoYmVhbnNJbWcpO1xuICAgIFNpZGVzLmFwcGVuZENoaWxkKGJlYW5zKTtcblxuICAgIG1lbnVTaWRlcy5hcHBlbmRDaGlsZChTaWRlcyk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChtZW51U2lkZXMpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=