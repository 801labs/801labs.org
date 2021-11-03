module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+him":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-3-320-9d476f1429f7bc40214a84c70c5da09b.jpg"+" 320w"+","+"/_next/static/images/image-3-640-0b484dc34703afc5e4fd37083ba03004.jpg"+" 640w"+","+"/_next/static/images/image-3-960-765bfca219cae6d14cf781de11dadf68.jpg"+" 960w"+","+"/_next/static/images/image-3-1280-6716aad2088c9550bc4f90e458ab2240.jpg"+" 1280w"+","+"/_next/static/images/image-3-1318-fb05689b8aba36e1566fdd9b8e7345bf.jpg"+" 1318w",
          images:[ {path: "/_next/static/images/image-3-320-9d476f1429f7bc40214a84c70c5da09b.jpg",width: 320,height: 181},{path: "/_next/static/images/image-3-640-0b484dc34703afc5e4fd37083ba03004.jpg",width: 640,height: 363},{path: "/_next/static/images/image-3-960-765bfca219cae6d14cf781de11dadf68.jpg",width: 960,height: 544},{path: "/_next/static/images/image-3-1280-6716aad2088c9550bc4f90e458ab2240.jpg",width: 1280,height: 725},{path: "/_next/static/images/image-3-1318-fb05689b8aba36e1566fdd9b8e7345bf.jpg",width: 1318,height: 747}],
          src: "/_next/static/images/image-3-320-9d476f1429f7bc40214a84c70c5da09b.jpg",
          toString:function(){return "/_next/static/images/image-3-320-9d476f1429f7bc40214a84c70c5da09b.jpg"},
          placeholder: undefined,
          width: 320,
          height: 181
      }

/***/ }),

/***/ "+lMf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Heading.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Heading = (_ref) => {
  let {
    level,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["level", "children"]);

  return Object(external_react_["createElement"])(`h${level}`, props, children);
};

/* harmony default export */ var components_Heading = (Heading);
// CONCATENATED MODULE: ./components/Hero.js
var __jsx = external_react_default.a.createElement;



const Hero = props => __jsx("div", {
  className: "bg-graphite-900 bg-image-grid bg-top text-white"
}, __jsx("div", {
  className: "container-1400 mx-auto px-5 py-20 text-center"
}, __jsx(components_Heading, {
  level: props.hLevel || 1,
  className: "h1 text-shadow-glow"
}, props.title)));

Hero.defaultProps = {
  hLevel: 1
};
/* harmony default export */ var components_Hero = __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/ruP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JwBy");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+lMf");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xY5u");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TDWf");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OoXJ");
/* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("H/gQ");
/* harmony import */ var _lib_blogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("M3MV");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Post = props => {
  var _props$content;

  return __jsx(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: props.title,
    description: props.description,
    image: props.cover
  }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "801 Labs Research Portal",
    hLevel: 2
  }), __jsx("div", {
    className: "container-1400 mx-auto px-5 py-20 md:flex md:space-x-20"
  }, __jsx("aside", {
    className: "hidden md:block md:w-1/4"
  }, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    tags: props.allTags,
    path: "/research-portal/tag"
  })), __jsx("div", {
    className: "md:w-3/4"
  }, __jsx("h1", {
    className: "h2 mb-10"
  }, props.title), props.cover && !((_props$content = props.content) === null || _props$content === void 0 ? void 0 : _props$content.includes(props.cover)) && __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    src: props.cover,
    sizes: "(min-width: 960px) 960px, 100vw",
    alt: props.title,
    className: "mb-8 mx-auto max-h-100"
  }), __jsx("div", {
    className: "space-y-6 markdown",
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  }))));
};

async function getStaticProps({
  params
}) {
  if (!params) return;
  const allTags = _lib_blogs__WEBPACK_IMPORTED_MODULE_7__[/* research */ "b"].getTags();
  const post = _lib_blogs__WEBPACK_IMPORTED_MODULE_7__[/* research */ "b"].getPostBySlug(params.slug);
  const content = await Object(_lib_utilities__WEBPACK_IMPORTED_MODULE_6__[/* markdownToHtml */ "a"])(post.content);
  return {
    props: _objectSpread(_objectSpread({
      allTags
    }, post), {}, {
      content
    })
  };
}
async function getStaticPaths() {
  const {
    posts
  } = _lib_blogs__WEBPACK_IMPORTED_MODULE_7__[/* research */ "b"].getPosts();
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "043j":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img013_small-320-1fd3bc1195ac20b7c2b7e74fbc9a915f.jpg"+" 320w"+","+"/_next/static/images/img013_small-640-e145c3721ba9e6922456c2633a46c8b7.jpg"+" 640w"+","+"/_next/static/images/img013_small-960-150b53e68a21d0a02c18ac1eba7a6efc.jpg"+" 960w"+","+"/_next/static/images/img013_small-1280-f75685f0b0c21a07c5b386ae18b3bac1.jpg"+" 1280w"+","+"/_next/static/images/img013_small-1900-bce95a5adc0922579592ed7e1b370eea.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img013_small-320-1fd3bc1195ac20b7c2b7e74fbc9a915f.jpg",width: 320,height: 185},{path: "/_next/static/images/img013_small-640-e145c3721ba9e6922456c2633a46c8b7.jpg",width: 640,height: 370},{path: "/_next/static/images/img013_small-960-150b53e68a21d0a02c18ac1eba7a6efc.jpg",width: 960,height: 554},{path: "/_next/static/images/img013_small-1280-f75685f0b0c21a07c5b386ae18b3bac1.jpg",width: 1280,height: 739},{path: "/_next/static/images/img013_small-1900-bce95a5adc0922579592ed7e1b370eea.jpg",width: 1900,height: 1097}],
          src: "/_next/static/images/img013_small-320-1fd3bc1195ac20b7c2b7e74fbc9a915f.jpg",
          toString:function(){return "/_next/static/images/img013_small-320-1fd3bc1195ac20b7c2b7e74fbc9a915f.jpg"},
          placeholder: undefined,
          width: 320,
          height: 185
      }

/***/ }),

/***/ "0BoN":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-12-320-fe2e084c33a3684c0c040b8b60bfafc9.jpg"+" 320w"+","+"/_next/static/images/image-12-640-f514ed1741ed1e155e732ea14c7f0d73.jpg"+" 640w"+","+"/_next/static/images/image-12-960-75b7279498602835175664549f7dac11.jpg"+" 960w"+","+"/_next/static/images/image-12-1011-6272c382c12916d9769de8b47d6e1c5e.jpg"+" 1011w",
          images:[ {path: "/_next/static/images/image-12-320-fe2e084c33a3684c0c040b8b60bfafc9.jpg",width: 320,height: 211},{path: "/_next/static/images/image-12-640-f514ed1741ed1e155e732ea14c7f0d73.jpg",width: 640,height: 423},{path: "/_next/static/images/image-12-960-75b7279498602835175664549f7dac11.jpg",width: 960,height: 634},{path: "/_next/static/images/image-12-1011-6272c382c12916d9769de8b47d6e1c5e.jpg",width: 1011,height: 668}],
          src: "/_next/static/images/image-12-320-fe2e084c33a3684c0c040b8b60bfafc9.jpg",
          toString:function(){return "/_next/static/images/image-12-320-fe2e084c33a3684c0c040b8b60bfafc9.jpg"},
          placeholder: undefined,
          width: 320,
          height: 211
      }

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0I3h":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-12-320-15378e1e5368da349664bdc4b6119ee1.jpg"+" 320w"+","+"/_next/static/images/image-12-640-a91c7d2f042f4fa5c9b6f5e8522e38da.jpg"+" 640w"+","+"/_next/static/images/image-12-960-06df901c1baed8d098bedf595f70e1c8.jpg"+" 960w"+","+"/_next/static/images/image-12-1141-3b4f805b4378070f8f9e83f2c1d93ce5.jpg"+" 1141w",
          images:[ {path: "/_next/static/images/image-12-320-15378e1e5368da349664bdc4b6119ee1.jpg",width: 320,height: 132},{path: "/_next/static/images/image-12-640-a91c7d2f042f4fa5c9b6f5e8522e38da.jpg",width: 640,height: 265},{path: "/_next/static/images/image-12-960-06df901c1baed8d098bedf595f70e1c8.jpg",width: 960,height: 397},{path: "/_next/static/images/image-12-1141-3b4f805b4378070f8f9e83f2c1d93ce5.jpg",width: 1141,height: 472}],
          src: "/_next/static/images/image-12-320-15378e1e5368da349664bdc4b6119ee1.jpg",
          toString:function(){return "/_next/static/images/image-12-320-15378e1e5368da349664bdc4b6119ee1.jpg"},
          placeholder: undefined,
          width: 320,
          height: 132
      }

/***/ }),

/***/ "0gQP":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-4-320-48d5a6c07356c547572f47902496502b.jpg"+" 320w"+","+"/_next/static/images/image-4-640-be0ad73bb9e26a87785252db355031bc.jpg"+" 640w"+","+"/_next/static/images/image-4-771-5a6f217d3807d565637e477f8cf8821f.jpg"+" 771w",
          images:[ {path: "/_next/static/images/image-4-320-48d5a6c07356c547572f47902496502b.jpg",width: 320,height: 244},{path: "/_next/static/images/image-4-640-be0ad73bb9e26a87785252db355031bc.jpg",width: 640,height: 489},{path: "/_next/static/images/image-4-771-5a6f217d3807d565637e477f8cf8821f.jpg",width: 771,height: 589}],
          src: "/_next/static/images/image-4-320-48d5a6c07356c547572f47902496502b.jpg",
          toString:function(){return "/_next/static/images/image-4-320-48d5a6c07356c547572f47902496502b.jpg"},
          placeholder: undefined,
          width: 320,
          height: 244
      }

/***/ }),

/***/ "0pcD":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-15-320-b93997edf736e1239e9ba357084f3684.png"+" 320w"+","+"/_next/static/images/image-15-640-45dce8b7db858a5185050816c2a2f77d.png"+" 640w"+","+"/_next/static/images/image-15-960-2259f56e35b26dc36e5eab2b5ec9e518.png"+" 960w"+","+"/_next/static/images/image-15-1280-3c4749facef15bf50f443d334664f553.png"+" 1280w"+","+"/_next/static/images/image-15-1340-95f3d15f2c04727ccf0c65351f348edf.png"+" 1340w",
          images:[ {path: "/_next/static/images/image-15-320-b93997edf736e1239e9ba357084f3684.png",width: 320,height: 210},{path: "/_next/static/images/image-15-640-45dce8b7db858a5185050816c2a2f77d.png",width: 640,height: 419},{path: "/_next/static/images/image-15-960-2259f56e35b26dc36e5eab2b5ec9e518.png",width: 960,height: 629},{path: "/_next/static/images/image-15-1280-3c4749facef15bf50f443d334664f553.png",width: 1280,height: 839},{path: "/_next/static/images/image-15-1340-95f3d15f2c04727ccf0c65351f348edf.png",width: 1340,height: 878}],
          src: "/_next/static/images/image-15-320-b93997edf736e1239e9ba357084f3684.png",
          toString:function(){return "/_next/static/images/image-15-320-b93997edf736e1239e9ba357084f3684.png"},
          placeholder: undefined,
          width: 320,
          height: 210
      }

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/ruP");


/***/ }),

/***/ "1CbY":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/non-profit-organization-for-peer-learning-292-ab061e9d5c5b449a1236f7253afae4aa.jpg"+" 292w",
          images:[ {path: "/_next/static/images/non-profit-organization-for-peer-learning-292-ab061e9d5c5b449a1236f7253afae4aa.jpg",width: 292,height: 562}],
          src: "/_next/static/images/non-profit-organization-for-peer-learning-292-ab061e9d5c5b449a1236f7253afae4aa.jpg",
          toString:function(){return "/_next/static/images/non-profit-organization-for-peer-learning-292-ab061e9d5c5b449a1236f7253afae4aa.jpg"},
          placeholder: undefined,
          width: 292,
          height: 562
      }

/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ "1Vtu":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-13-320-45b38354730f67ed0870acb343deacab.jpg"+" 320w"+","+"/_next/static/images/image-13-640-53da297487c793ecfbbaf5e6ecc6f07f.jpg"+" 640w"+","+"/_next/static/images/image-13-960-98f4679a86e275c52a7dabcfba65fb54.jpg"+" 960w"+","+"/_next/static/images/image-13-1153-bfda6fa08d8971500c554333c0dd91c9.jpg"+" 1153w",
          images:[ {path: "/_next/static/images/image-13-320-45b38354730f67ed0870acb343deacab.jpg",width: 320,height: 122},{path: "/_next/static/images/image-13-640-53da297487c793ecfbbaf5e6ecc6f07f.jpg",width: 640,height: 244},{path: "/_next/static/images/image-13-960-98f4679a86e275c52a7dabcfba65fb54.jpg",width: 960,height: 366},{path: "/_next/static/images/image-13-1153-bfda6fa08d8971500c554333c0dd91c9.jpg",width: 1153,height: 439}],
          src: "/_next/static/images/image-13-320-45b38354730f67ed0870acb343deacab.jpg",
          toString:function(){return "/_next/static/images/image-13-320-45b38354730f67ed0870acb343deacab.jpg"},
          placeholder: undefined,
          width: 320,
          height: 122
      }

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2KEA":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-6-320-f01008e195d2bd8b496407718c88fc4e.jpg"+" 320w"+","+"/_next/static/images/image-6-640-1fc6cd8489b25c104eb4056884ee19aa.jpg"+" 640w"+","+"/_next/static/images/image-6-960-f7be056253269d8e5e9e73cc1468c63d.jpg"+" 960w"+","+"/_next/static/images/image-6-1280-862df5b8f8b85c74ff70492ba0744c07.jpg"+" 1280w"+","+"/_next/static/images/image-6-1442-ceb0beca514bf7968f6484d55cbd9e9c.jpg"+" 1442w",
          images:[ {path: "/_next/static/images/image-6-320-f01008e195d2bd8b496407718c88fc4e.jpg",width: 320,height: 225},{path: "/_next/static/images/image-6-640-1fc6cd8489b25c104eb4056884ee19aa.jpg",width: 640,height: 450},{path: "/_next/static/images/image-6-960-f7be056253269d8e5e9e73cc1468c63d.jpg",width: 960,height: 675},{path: "/_next/static/images/image-6-1280-862df5b8f8b85c74ff70492ba0744c07.jpg",width: 1280,height: 900},{path: "/_next/static/images/image-6-1442-ceb0beca514bf7968f6484d55cbd9e9c.jpg",width: 1442,height: 1014}],
          src: "/_next/static/images/image-6-320-f01008e195d2bd8b496407718c88fc4e.jpg",
          toString:function(){return "/_next/static/images/image-6-320-f01008e195d2bd8b496407718c88fc4e.jpg"},
          placeholder: undefined,
          width: 320,
          height: 225
      }

/***/ }),

/***/ "2yu5":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/process-explorer-test-dll-injection-success-320-4c3ea14f721f498145f270602b4fb293.png"+" 320w"+","+"/_next/static/images/process-explorer-test-dll-injection-success-640-ccf24fee1f07f598aa51e21babc83f48.png"+" 640w"+","+"/_next/static/images/process-explorer-test-dll-injection-success-787-24f050b26483fbdde8070ee31259b7d5.png"+" 787w",
          images:[ {path: "/_next/static/images/process-explorer-test-dll-injection-success-320-4c3ea14f721f498145f270602b4fb293.png",width: 320,height: 238},{path: "/_next/static/images/process-explorer-test-dll-injection-success-640-ccf24fee1f07f598aa51e21babc83f48.png",width: 640,height: 477},{path: "/_next/static/images/process-explorer-test-dll-injection-success-787-24f050b26483fbdde8070ee31259b7d5.png",width: 787,height: 586}],
          src: "/_next/static/images/process-explorer-test-dll-injection-success-320-4c3ea14f721f498145f270602b4fb293.png",
          toString:function(){return "/_next/static/images/process-explorer-test-dll-injection-success-320-4c3ea14f721f498145f270602b4fb293.png"},
          placeholder: undefined,
          width: 320,
          height: 238
      }

/***/ }),

/***/ "3VmC":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/pips-100-116f8f744b447e9b8511b603e12440ee.jpg"+" 100w",
          images:[ {path: "/_next/static/images/pips-100-116f8f744b447e9b8511b603e12440ee.jpg",width: 100,height: 100}],
          src: "/_next/static/images/pips-100-116f8f744b447e9b8511b603e12440ee.jpg",
          toString:function(){return "/_next/static/images/pips-100-116f8f744b447e9b8511b603e12440ee.jpg"},
          placeholder: undefined,
          width: 100,
          height: 100
      }

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Umb":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/4TJDOj5-320-9c5528a142bb3187c2f68f6774d75456.jpg"+" 320w"+","+"/_next/static/images/4TJDOj5-640-dbec3c0b4a32f7f7b6058a999dc8ddf3.jpg"+" 640w"+","+"/_next/static/images/4TJDOj5-960-1d3ece90dd0c24ce89b613a24b5ea172.jpg"+" 960w"+","+"/_next/static/images/4TJDOj5-995-d4c21a5f5c222e23fe59864e2386866d.jpg"+" 995w",
          images:[ {path: "/_next/static/images/4TJDOj5-320-9c5528a142bb3187c2f68f6774d75456.jpg",width: 320,height: 212},{path: "/_next/static/images/4TJDOj5-640-dbec3c0b4a32f7f7b6058a999dc8ddf3.jpg",width: 640,height: 425},{path: "/_next/static/images/4TJDOj5-960-1d3ece90dd0c24ce89b613a24b5ea172.jpg",width: 960,height: 637},{path: "/_next/static/images/4TJDOj5-995-d4c21a5f5c222e23fe59864e2386866d.jpg",width: 995,height: 660}],
          src: "/_next/static/images/4TJDOj5-320-9c5528a142bb3187c2f68f6774d75456.jpg",
          toString:function(){return "/_next/static/images/4TJDOj5-320-9c5528a142bb3187c2f68f6774d75456.jpg"},
          placeholder: undefined,
          width: 320,
          height: 212
      }

/***/ }),

/***/ "4pUj":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-1-320-f234f142013a9722296c59cbf671727c.jpg"+" 320w"+","+"/_next/static/images/image-1-640-edf7a1d168d3369eb9b17d507dd7618a.jpg"+" 640w"+","+"/_next/static/images/image-1-960-f5aa3e0e2575b2f99fea5549465a39cc.jpg"+" 960w"+","+"/_next/static/images/image-1-1280-0abb1d7bc3e1592e8857ca4dde46552c.jpg"+" 1280w"+","+"/_next/static/images/image-1-1900-c8c147e90da19bc9413fa9b607072d45.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/image-1-320-f234f142013a9722296c59cbf671727c.jpg",width: 320,height: 97},{path: "/_next/static/images/image-1-640-edf7a1d168d3369eb9b17d507dd7618a.jpg",width: 640,height: 194},{path: "/_next/static/images/image-1-960-f5aa3e0e2575b2f99fea5549465a39cc.jpg",width: 960,height: 291},{path: "/_next/static/images/image-1-1280-0abb1d7bc3e1592e8857ca4dde46552c.jpg",width: 1280,height: 388},{path: "/_next/static/images/image-1-1900-c8c147e90da19bc9413fa9b607072d45.jpg",width: 1900,height: 576}],
          src: "/_next/static/images/image-1-320-f234f142013a9722296c59cbf671727c.jpg",
          toString:function(){return "/_next/static/images/image-1-320-f234f142013a9722296c59cbf671727c.jpg"},
          placeholder: undefined,
          width: 320,
          height: 97
      }

/***/ }),

/***/ "50Oo":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-320-5541a2e1fe7884f5f7d92caa510963c1.png"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-640-8362e46ace1450ade53b4dcb1b361497.png"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-960-33047f2d1157ca28b4f65962e9f146c4.png"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-1280-6f8ad2bf0f2fd46b5ef9b63d6454dd57.png"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-1688-14a2a9224f3be3f20f2bd8c7509d7367.png"+" 1688w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-320-5541a2e1fe7884f5f7d92caa510963c1.png",width: 320,height: 117},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-640-8362e46ace1450ade53b4dcb1b361497.png",width: 640,height: 234},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-960-33047f2d1157ca28b4f65962e9f146c4.png",width: 960,height: 350},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-1280-6f8ad2bf0f2fd46b5ef9b63d6454dd57.png",width: 1280,height: 467},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-1688-14a2a9224f3be3f20f2bd8c7509d7367.png",width: 1688,height: 616}],
          src: "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-320-5541a2e1fe7884f5f7d92caa510963c1.png",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-26-at-1.46.48-PM-320-5541a2e1fe7884f5f7d92caa510963c1.png"},
          placeholder: undefined,
          width: 320,
          height: 117
      }

/***/ }),

/***/ "5Io3":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/IMG_20180416_194909-320-25f9fe118cc91acf6574a97aa86c9f2a.jpg"+" 320w"+","+"/_next/static/images/IMG_20180416_194909-640-0acacec8517fa328f94ae00b40aa0a06.jpg"+" 640w"+","+"/_next/static/images/IMG_20180416_194909-960-ad2e6f5b043d6449239b5cefd7471da5.jpg"+" 960w"+","+"/_next/static/images/IMG_20180416_194909-1280-cb60a039fbaa27f815eb6068e7f268ae.jpg"+" 1280w"+","+"/_next/static/images/IMG_20180416_194909-1900-145d5bee57038b2468d7ff09f79500d0.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/IMG_20180416_194909-320-25f9fe118cc91acf6574a97aa86c9f2a.jpg",width: 320,height: 240},{path: "/_next/static/images/IMG_20180416_194909-640-0acacec8517fa328f94ae00b40aa0a06.jpg",width: 640,height: 480},{path: "/_next/static/images/IMG_20180416_194909-960-ad2e6f5b043d6449239b5cefd7471da5.jpg",width: 960,height: 720},{path: "/_next/static/images/IMG_20180416_194909-1280-cb60a039fbaa27f815eb6068e7f268ae.jpg",width: 1280,height: 960},{path: "/_next/static/images/IMG_20180416_194909-1900-145d5bee57038b2468d7ff09f79500d0.jpg",width: 1900,height: 1425}],
          src: "/_next/static/images/IMG_20180416_194909-320-25f9fe118cc91acf6574a97aa86c9f2a.jpg",
          toString:function(){return "/_next/static/images/IMG_20180416_194909-320-25f9fe118cc91acf6574a97aa86c9f2a.jpg"},
          placeholder: undefined,
          width: 320,
          height: 240
      }

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7VNH":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-3-320-25e5dc9339b8bf250856c9787baf9896.jpg"+" 320w"+","+"/_next/static/images/image-3-640-dae08558dadc4985179f5a9d1a0f0a15.jpg"+" 640w"+","+"/_next/static/images/image-3-960-37cb085b4174fb74806a34369c17fc33.jpg"+" 960w"+","+"/_next/static/images/image-3-1280-a9473d9c5bd8902a0645fc879ae38ae8.jpg"+" 1280w"+","+"/_next/static/images/image-3-1289-93b613b2d9f204ec69a04a307d237191.jpg"+" 1289w",
          images:[ {path: "/_next/static/images/image-3-320-25e5dc9339b8bf250856c9787baf9896.jpg",width: 320,height: 175},{path: "/_next/static/images/image-3-640-dae08558dadc4985179f5a9d1a0f0a15.jpg",width: 640,height: 351},{path: "/_next/static/images/image-3-960-37cb085b4174fb74806a34369c17fc33.jpg",width: 960,height: 526},{path: "/_next/static/images/image-3-1280-a9473d9c5bd8902a0645fc879ae38ae8.jpg",width: 1280,height: 701},{path: "/_next/static/images/image-3-1289-93b613b2d9f204ec69a04a307d237191.jpg",width: 1289,height: 706}],
          src: "/_next/static/images/image-3-320-25e5dc9339b8bf250856c9787baf9896.jpg",
          toString:function(){return "/_next/static/images/image-3-320-25e5dc9339b8bf250856c9787baf9896.jpg"},
          placeholder: undefined,
          width: 320,
          height: 175
      }

/***/ }),

/***/ "7obp":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img013_composite_small-320-582e42e6e597297b07525e445ef8dbc7.jpg"+" 320w"+","+"/_next/static/images/img013_composite_small-640-0cb9465c047d9bf58d93160e28790f9d.jpg"+" 640w"+","+"/_next/static/images/img013_composite_small-960-07eaaef91cd1493d30c3cebe9abe3dd2.jpg"+" 960w"+","+"/_next/static/images/img013_composite_small-1280-03f9c744ab07dfe5e708dc283a7f4937.jpg"+" 1280w"+","+"/_next/static/images/img013_composite_small-1900-e5a037135403b6a95d7ad0b8c28325b4.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img013_composite_small-320-582e42e6e597297b07525e445ef8dbc7.jpg",width: 320,height: 183},{path: "/_next/static/images/img013_composite_small-640-0cb9465c047d9bf58d93160e28790f9d.jpg",width: 640,height: 365},{path: "/_next/static/images/img013_composite_small-960-07eaaef91cd1493d30c3cebe9abe3dd2.jpg",width: 960,height: 548},{path: "/_next/static/images/img013_composite_small-1280-03f9c744ab07dfe5e708dc283a7f4937.jpg",width: 1280,height: 731},{path: "/_next/static/images/img013_composite_small-1900-e5a037135403b6a95d7ad0b8c28325b4.jpg",width: 1900,height: 1085}],
          src: "/_next/static/images/img013_composite_small-320-582e42e6e597297b07525e445ef8dbc7.jpg",
          toString:function(){return "/_next/static/images/img013_composite_small-320-582e42e6e597297b07525e445ef8dbc7.jpg"},
          placeholder: undefined,
          width: 320,
          height: 183
      }

/***/ }),

/***/ "8Ywd":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-320-69ea13b08b38cbb6ee56e3cd83aa1bac.jpg"+" 320w"+","+"/_next/static/images/image-473-0da8cb714f8e9950e94806e525aa5d20.jpg"+" 473w",
          images:[ {path: "/_next/static/images/image-320-69ea13b08b38cbb6ee56e3cd83aa1bac.jpg",width: 320,height: 293},{path: "/_next/static/images/image-473-0da8cb714f8e9950e94806e525aa5d20.jpg",width: 473,height: 433}],
          src: "/_next/static/images/image-320-69ea13b08b38cbb6ee56e3cd83aa1bac.jpg",
          toString:function(){return "/_next/static/images/image-320-69ea13b08b38cbb6ee56e3cd83aa1bac.jpg"},
          placeholder: undefined,
          width: 320,
          height: 293
      }

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "9WJa":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/gef-320-d2277d9e109013776845c770bb1abfd6.jpg"+" 320w"+","+"/_next/static/images/gef-640-d31b3392c6f005d222b20944be5ffe6e.jpg"+" 640w"+","+"/_next/static/images/gef-960-f7ace55ae4b30dd131e9d735af78c980.jpg"+" 960w"+","+"/_next/static/images/gef-1280-c132bcd7fe22557b565bdfd266b67bee.jpg"+" 1280w"+","+"/_next/static/images/gef-1373-6a5b40dcbe8457a228afc90e9f097c84.jpg"+" 1373w",
          images:[ {path: "/_next/static/images/gef-320-d2277d9e109013776845c770bb1abfd6.jpg",width: 320,height: 263},{path: "/_next/static/images/gef-640-d31b3392c6f005d222b20944be5ffe6e.jpg",width: 640,height: 525},{path: "/_next/static/images/gef-960-f7ace55ae4b30dd131e9d735af78c980.jpg",width: 960,height: 788},{path: "/_next/static/images/gef-1280-c132bcd7fe22557b565bdfd266b67bee.jpg",width: 1280,height: 1051},{path: "/_next/static/images/gef-1373-6a5b40dcbe8457a228afc90e9f097c84.jpg",width: 1373,height: 1127}],
          src: "/_next/static/images/gef-320-d2277d9e109013776845c770bb1abfd6.jpg",
          toString:function(){return "/_next/static/images/gef-320-d2277d9e109013776845c770bb1abfd6.jpg"},
          placeholder: undefined,
          width: 320,
          height: 263
      }

/***/ }),

/***/ "9vbA":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/learn-information-technology-information-security-320-e8d2252ca6efe2c6e31048863c98a640.jpg"+" 320w"+","+"/_next/static/images/learn-information-technology-information-security-640-15b31b14ef7a8eb4bca2872e0bd81e77.jpg"+" 640w"+","+"/_next/static/images/learn-information-technology-information-security-957-c199dc5191605463b663cd1afd5dfd80.jpg"+" 957w",
          images:[ {path: "/_next/static/images/learn-information-technology-information-security-320-e8d2252ca6efe2c6e31048863c98a640.jpg",width: 320,height: 173},{path: "/_next/static/images/learn-information-technology-information-security-640-15b31b14ef7a8eb4bca2872e0bd81e77.jpg",width: 640,height: 346},{path: "/_next/static/images/learn-information-technology-information-security-957-c199dc5191605463b663cd1afd5dfd80.jpg",width: 957,height: 517}],
          src: "/_next/static/images/learn-information-technology-information-security-320-e8d2252ca6efe2c6e31048863c98a640.jpg",
          toString:function(){return "/_next/static/images/learn-information-technology-information-security-320-e8d2252ca6efe2c6e31048863c98a640.jpg"},
          placeholder: undefined,
          width: 320,
          height: 173
      }

/***/ }),

/***/ "AEGd":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/emmc_crystal-320-2f4e8f5d34a3976e0122af1a6ea08944.jpg"+" 320w"+","+"/_next/static/images/emmc_crystal-640-9045253743637c009a652361642f975c.jpg"+" 640w"+","+"/_next/static/images/emmc_crystal-837-8beaf77a9d12a32535cb1ed62b83c621.jpg"+" 837w",
          images:[ {path: "/_next/static/images/emmc_crystal-320-2f4e8f5d34a3976e0122af1a6ea08944.jpg",width: 320,height: 226},{path: "/_next/static/images/emmc_crystal-640-9045253743637c009a652361642f975c.jpg",width: 640,height: 451},{path: "/_next/static/images/emmc_crystal-837-8beaf77a9d12a32535cb1ed62b83c621.jpg",width: 837,height: 590}],
          src: "/_next/static/images/emmc_crystal-320-2f4e8f5d34a3976e0122af1a6ea08944.jpg",
          toString:function(){return "/_next/static/images/emmc_crystal-320-2f4e8f5d34a3976e0122af1a6ea08944.jpg"},
          placeholder: undefined,
          width: 320,
          height: 226
      }

/***/ }),

/***/ "BQLK":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-9-320-462ae4680d76b19097cb2786ce938dac.jpg"+" 320w"+","+"/_next/static/images/image-9-640-84e35d17079a8e6ea2d5aea5d903cf23.jpg"+" 640w"+","+"/_next/static/images/image-9-835-e1536c5810f5a3967c3b20a7ce0f4247.jpg"+" 835w",
          images:[ {path: "/_next/static/images/image-9-320-462ae4680d76b19097cb2786ce938dac.jpg",width: 320,height: 134},{path: "/_next/static/images/image-9-640-84e35d17079a8e6ea2d5aea5d903cf23.jpg",width: 640,height: 268},{path: "/_next/static/images/image-9-835-e1536c5810f5a3967c3b20a7ce0f4247.jpg",width: 835,height: 350}],
          src: "/_next/static/images/image-9-320-462ae4680d76b19097cb2786ce938dac.jpg",
          toString:function(){return "/_next/static/images/image-9-320-462ae4680d76b19097cb2786ce938dac.jpg"},
          placeholder: undefined,
          width: 320,
          height: 134
      }

/***/ }),

/***/ "D2oM":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-4-320-1d19bb437fac6399471fc6ac87d9d6ff.jpg"+" 320w"+","+"/_next/static/images/image-4-588-c6d6fc48f695b6a3c60c38daeb25b31d.jpg"+" 588w",
          images:[ {path: "/_next/static/images/image-4-320-1d19bb437fac6399471fc6ac87d9d6ff.jpg",width: 320,height: 157},{path: "/_next/static/images/image-4-588-c6d6fc48f695b6a3c60c38daeb25b31d.jpg",width: 588,height: 288}],
          src: "/_next/static/images/image-4-320-1d19bb437fac6399471fc6ac87d9d6ff.jpg",
          toString:function(){return "/_next/static/images/image-4-320-1d19bb437fac6399471fc6ac87d9d6ff.jpg"},
          placeholder: undefined,
          width: 320,
          height: 157
      }

/***/ }),

/***/ "EGYW":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img016_small-320-877a0520b3cd8aa5509b9d6f952f4710.jpg"+" 320w"+","+"/_next/static/images/img016_small-640-2a1b4589562ea17d3f865f3a2bf49ce3.jpg"+" 640w"+","+"/_next/static/images/img016_small-960-52378ae98a6c50bedfc53d119be8e0fc.jpg"+" 960w"+","+"/_next/static/images/img016_small-1280-7594812bfcf7acc8e97a349e2a8cf071.jpg"+" 1280w"+","+"/_next/static/images/img016_small-1900-4d632bcaaeff7947f6678a5770d05d73.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img016_small-320-877a0520b3cd8aa5509b9d6f952f4710.jpg",width: 320,height: 187},{path: "/_next/static/images/img016_small-640-2a1b4589562ea17d3f865f3a2bf49ce3.jpg",width: 640,height: 374},{path: "/_next/static/images/img016_small-960-52378ae98a6c50bedfc53d119be8e0fc.jpg",width: 960,height: 562},{path: "/_next/static/images/img016_small-1280-7594812bfcf7acc8e97a349e2a8cf071.jpg",width: 1280,height: 749},{path: "/_next/static/images/img016_small-1900-4d632bcaaeff7947f6678a5770d05d73.jpg",width: 1900,height: 1112}],
          src: "/_next/static/images/img016_small-320-877a0520b3cd8aa5509b9d6f952f4710.jpg",
          toString:function(){return "/_next/static/images/img016_small-320-877a0520b3cd8aa5509b9d6f952f4710.jpg"},
          placeholder: undefined,
          width: 320,
          height: 187
      }

/***/ }),

/***/ "Ehs6":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/2019-05-02-090559_3440x1440_scrot-320-74045b2d21363f7d7b94d37e5fb53583.png"+" 320w"+","+"/_next/static/images/2019-05-02-090559_3440x1440_scrot-640-df94f6e33fddaea1d71f1c60adbdd6d0.png"+" 640w"+","+"/_next/static/images/2019-05-02-090559_3440x1440_scrot-858-3205627f11b561f2c89b5a4764c65e8d.png"+" 858w",
          images:[ {path: "/_next/static/images/2019-05-02-090559_3440x1440_scrot-320-74045b2d21363f7d7b94d37e5fb53583.png",width: 320,height: 243},{path: "/_next/static/images/2019-05-02-090559_3440x1440_scrot-640-df94f6e33fddaea1d71f1c60adbdd6d0.png",width: 640,height: 486},{path: "/_next/static/images/2019-05-02-090559_3440x1440_scrot-858-3205627f11b561f2c89b5a4764c65e8d.png",width: 858,height: 652}],
          src: "/_next/static/images/2019-05-02-090559_3440x1440_scrot-320-74045b2d21363f7d7b94d37e5fb53583.png",
          toString:function(){return "/_next/static/images/2019-05-02-090559_3440x1440_scrot-320-74045b2d21363f7d7b94d37e5fb53583.png"},
          placeholder: undefined,
          width: 320,
          height: 243
      }

/***/ }),

/***/ "F9mX":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-320-d82b3bfdbca0a6511b25213cc3bd53cd.jpg"+" 320w"+","+"/_next/static/images/image-640-7487e70637b3ea0d499584a65d9719c4.jpg"+" 640w"+","+"/_next/static/images/image-960-a6ad99c7c3b6be5f868c30d172392423.jpg"+" 960w"+","+"/_next/static/images/image-1280-13c3900ff6edc2301606e864e103395a.jpg"+" 1280w"+","+"/_next/static/images/image-1900-e2c6f49d905a5f6a14108619ecd7ecd9.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/image-320-d82b3bfdbca0a6511b25213cc3bd53cd.jpg",width: 320,height: 240},{path: "/_next/static/images/image-640-7487e70637b3ea0d499584a65d9719c4.jpg",width: 640,height: 480},{path: "/_next/static/images/image-960-a6ad99c7c3b6be5f868c30d172392423.jpg",width: 960,height: 720},{path: "/_next/static/images/image-1280-13c3900ff6edc2301606e864e103395a.jpg",width: 1280,height: 960},{path: "/_next/static/images/image-1900-e2c6f49d905a5f6a14108619ecd7ecd9.jpg",width: 1900,height: 1425}],
          src: "/_next/static/images/image-320-d82b3bfdbca0a6511b25213cc3bd53cd.jpg",
          toString:function(){return "/_next/static/images/image-320-d82b3bfdbca0a6511b25213cc3bd53cd.jpg"},
          placeholder: undefined,
          width: 320,
          height: 240
      }

/***/ }),

/***/ "Gfnn":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/091816humanchip_1280x720-320-749191c2a86a29579cf8d5658c3584f3.jpg"+" 320w"+","+"/_next/static/images/091816humanchip_1280x720-640-c3ed4cd888b8e7828be8ba0e15c3cc17.jpg"+" 640w"+","+"/_next/static/images/091816humanchip_1280x720-960-4c25028f52a26d23ada0e551f5909df1.jpg"+" 960w"+","+"/_next/static/images/091816humanchip_1280x720-1280-e107d1a0e6f97a72a6ea78e78d14573e.jpg"+" 1280w",
          images:[ {path: "/_next/static/images/091816humanchip_1280x720-320-749191c2a86a29579cf8d5658c3584f3.jpg",width: 320,height: 180},{path: "/_next/static/images/091816humanchip_1280x720-640-c3ed4cd888b8e7828be8ba0e15c3cc17.jpg",width: 640,height: 360},{path: "/_next/static/images/091816humanchip_1280x720-960-4c25028f52a26d23ada0e551f5909df1.jpg",width: 960,height: 540},{path: "/_next/static/images/091816humanchip_1280x720-1280-e107d1a0e6f97a72a6ea78e78d14573e.jpg",width: 1280,height: 720}],
          src: "/_next/static/images/091816humanchip_1280x720-320-749191c2a86a29579cf8d5658c3584f3.jpg",
          toString:function(){return "/_next/static/images/091816humanchip_1280x720-320-749191c2a86a29579cf8d5658c3584f3.jpg"},
          placeholder: undefined,
          width: 320,
          height: 180
      }

/***/ }),

/***/ "H/gQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ markdownToHtml; });

// EXTERNAL MODULE: external "remark"
var external_remark_ = __webpack_require__("1VTK");
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_);

// CONCATENATED MODULE: ./plugins/remark/images.js
const visit = __webpack_require__("KsgO");

/* harmony default export */ var remark_images = (() => (tree, file) => {
  visit(tree, 'image', (node, index, parent) => {
    const image = __webpack_require__("Woiz")(`./${node.url}`);

    const {
      width,
      height
    } = image.images[image.images.length - 1];
    const img = `<img src="${image.src}" srcset="${image.srcSet}" sizes="(min-width: 960px) 960px, 100vw" width="${width}" height="${height}" alt="${image.alt}" loading="lazy" />`;
    const markup = {
      type: 'html',
      value: node.title ? `<figure>${img}<figcaption>${node.title}</figcaption></figure>` : img
    };
    parent.children.splice(index, 1, markup);
    return [visit.SKIP, index];
  });
});
// EXTERNAL MODULE: external "remark-html"
var external_remark_html_ = __webpack_require__("/Ikq");
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_);

// EXTERNAL MODULE: external "remark-unwrap-images"
var external_remark_unwrap_images_ = __webpack_require__("SOQP");
var external_remark_unwrap_images_default = /*#__PURE__*/__webpack_require__.n(external_remark_unwrap_images_);

// CONCATENATED MODULE: ./lib/utilities.js




async function markdownToHtml(markdown) {
  const result = await external_remark_default()().use(external_remark_unwrap_images_default.a).use(remark_images).use(external_remark_html_default.a).process(markdown);
  return result.toString();
}

/***/ }),

/***/ "Hc26":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/emmc_re-320-7c015d6d480be63c6cf2d8771510b4c1.jpg"+" 320w"+","+"/_next/static/images/emmc_re-640-8437b653f6c7756d5b4240f9e8eab73c.jpg"+" 640w"+","+"/_next/static/images/emmc_re-960-b7a3257618714be7d871a553fb5a4143.jpg"+" 960w"+","+"/_next/static/images/emmc_re-1280-cb4510666a399cfb18fd423780e0ae20.jpg"+" 1280w"+","+"/_next/static/images/emmc_re-1493-80f0ecc3c17b30968c71c687286e29a7.jpg"+" 1493w",
          images:[ {path: "/_next/static/images/emmc_re-320-7c015d6d480be63c6cf2d8771510b4c1.jpg",width: 320,height: 144},{path: "/_next/static/images/emmc_re-640-8437b653f6c7756d5b4240f9e8eab73c.jpg",width: 640,height: 288},{path: "/_next/static/images/emmc_re-960-b7a3257618714be7d871a553fb5a4143.jpg",width: 960,height: 431},{path: "/_next/static/images/emmc_re-1280-cb4510666a399cfb18fd423780e0ae20.jpg",width: 1280,height: 575},{path: "/_next/static/images/emmc_re-1493-80f0ecc3c17b30968c71c687286e29a7.jpg",width: 1493,height: 671}],
          src: "/_next/static/images/emmc_re-320-7c015d6d480be63c6cf2d8771510b4c1.jpg",
          toString:function(){return "/_next/static/images/emmc_re-320-7c015d6d480be63c6cf2d8771510b4c1.jpg"},
          placeholder: undefined,
          width: 320,
          height: 144
      }

/***/ }),

/***/ "InpS":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-320-0e6ecc696602301b0af65d39778848d2.jpg"+" 320w"+","+"/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-450-4ac7fa8008defaab7d5be3523f3d8b80.jpg"+" 450w",
          images:[ {path: "/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-320-0e6ecc696602301b0af65d39778848d2.jpg",width: 320,height: 284},{path: "/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-450-4ac7fa8008defaab7d5be3523f3d8b80.jpg",width: 450,height: 400}],
          src: "/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-320-0e6ecc696602301b0af65d39778848d2.jpg",
          toString:function(){return "/_next/static/images/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration-320-0e6ecc696602301b0af65d39778848d2.jpg"},
          placeholder: undefined,
          width: 320,
          height: 284
      }

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "JwBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/SocialLinks.js
var SocialLinks = __webpack_require__("bIlT");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./lib/menu.js
/* harmony default export */ var menu = ([{
  label: 'About',
  props: {
    href: '/about'
  },
  children: [{
    label: 'Financial Information',
    props: {
      href: '/about/financial-information'
    }
  }, {
    label: 'News',
    props: {
      href: '/about/news/[page]',
      as: '/about/news/1'
    }
  }]
}, {
  label: 'Learn',
  props: {
    href: '/research-portal/[page]',
    as: '/research-portal/1'
  }
}, {
  label: 'Get Involved',
  props: {
    href: '/get-involved'
  },
  children: [{
    label: 'Events',
    props: {
      href: '/get-involved/events'
    }
  }, {
    label: 'Location and Hours',
    props: {
      href: '/get-involved/location-and-hours'
    }
  }]
}, {
  label: 'Contact Us',
  props: {
    href: '/contact'
  }
}, {
  label: 'Donate\u00A0\u003E',
  props: {
    href: '/donate'
  }
}]);
// CONCATENATED MODULE: ./layouts/Layout.js
var __jsx = external_react_default.a.createElement;








const Layout = ({
  children
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  return __jsx("div", {
    className: "bg-white font-sans fluid-text-base"
  }, __jsx("div", {
    className: `fixed inset-0 z-40 bg-graphite-800 ${isOpen ? 'block' : 'hidden'}`,
    onClick: () => setIsOpen(false),
    style: {
      '--bg-opacity': .4
    }
  }), __jsx("div", {
    className: `fixed right-0 top-0 h-screen overflow-y-auto z-50 w-full sm:w-64 font-display bg-graphite-800 text-white ${isOpen ? 'block' : 'hidden'}`
  }, __jsx("div", {
    className: "px-5 pt-5 text-right"
  }, __jsx("button", {
    className: "px-4 py-2",
    title: "Close Menu",
    onClick: () => setIsOpen(false)
  }, __jsx("span", {
    className: "sr-only"
  }, "Close Menu"), __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"],
    size: "lg"
  }))), __jsx("ul", {
    className: "pt-2 pb-5 fluid-text-lg"
  }, menu.map(({
    label,
    props,
    children
  }, i) => {
    var _props$href;

    return __jsx("li", {
      key: `off-canvas-${i}`
    }, __jsx(link_default.a, props, __jsx("a", {
      className: `py-1 px-5 ${((_props$href = props.href) === null || _props$href === void 0 ? void 0 : _props$href.includes('/donate')) ? 'link--tangerine font-bold' : router.pathname === props.href ? 'link--tangerine' : 'link--white'}`
    }, label)), children && __jsx("ul", {
      className: "fluid-text-base"
    }, children.map(({
      label,
      props
    }, j) => __jsx("li", {
      key: `off-canvas-${i}-${j}`
    }, __jsx(link_default.a, props, __jsx("a", {
      className: `py-1 pl-10 pr-5 ${router.pathname === props.href ? 'link--tangerine' : 'link--white'}`
    }, label))))));
  }))), __jsx("div", {
    className: "page"
  }, __jsx("header", {
    className: "page-header font-display bg-graphite-800 text-white"
  }, __jsx("div", {
    className: "container mx-auto px-5 lg:px-10 xl:px-16 py-3 lg:py-5 flex"
  }, __jsx("div", {
    className: "flex-initial"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", {
    className: "text-white"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-current",
    viewBox: "0 0 1566.7 420.9",
    width: "217"
  }, __jsx("title", null, "801 Labs - a Community Hackerspace"), __jsx("path", {
    d: "M131.5 261.8h24.1c1.8 0 3.2 1.5 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2h-24.1c-1.8 0-3.2-1.5-3.2-3.2-.1-1.8 1.4-3.2 3.2-3.2z"
  }), __jsx("path", {
    d: "M194.9 148.8V60.9c13-4.1 21.9-16.1 21.9-29.8 0-17.2-14-31.2-31.2-31.2h-85.3c-13.6.1-25.7 9-29.7 22-5.1 16.4 4.1 33.9 20.5 39v87.8c-7.5 2.9-14.8 6.5-21.7 10.6-67.6 40.6-89.6 128.2-49.1 195.8 12.9 21.3 31 39.1 52.6 51.6 18.4 10.7 29.7 12.9 32.7 13.4 12.1 1.7 22.7-1.3 30.5-8.8 9.3-8.8 14.9-23.7 16.6-44.2.6-8.6.7-17.3.3-25.9 3.6-2.4 6.3-6.1 7.3-10.7l.3-1.2c0-.6.1-1.5.1-2.4h16c6.3 0 11.5-5.1 11.5-11.4v-.9h-.2c.1-.6.2-1.2.2-1.7l.2-34.4c0-1.5-1.2-2.6-2.6-2.6h-1.2c-1.5 0-2.6-1.2-2.6-2.7l.1-39.6c0-1.4-1.2-2.6-2.6-2.6l-71.7-.2c-1.4 0-2.6 1.2-2.6 2.6l-.1 39.6c0 1.4-1.2 2.6-2.6 2.6h-1.2c-1.4 0-2.6 1.2-2.6 2.6l-.1 34.6c0 .6.1 1.3.2 1.9h-.2v.7c0 6.3 5.1 11.5 11.4 11.5h16.3c.1.8.4 1.6.6 2.4 0 0 3.3 8.8 9.1 12.8 1 22.2-.7 46.7-11.5 56.8-4.1 3.9-9.4 5.3-16.5 4.3-.4-.1-9.7-1.5-26.5-11.2-19.1-11-35.1-26.7-46.5-45.6-3.5-5.8-6.5-11.9-9-18.2-25.6-64.5 6-137.5 70.4-163.1 2-.8 11.7-5.7 11.7-11.3V54.2v-.6c0-4.6-3.7-8.2-8.2-8.2-7.8-.1-14-6.6-13.9-14.4.1-7.8 6.6-14 14.4-13.9h85.3c7.8-.1 14.2 6.1 14.4 13.9.1 7.8-6.1 14.2-13.9 14.4h-.6c-4.5.3-7.9 4.3-7.6 8.9v99.5c0 5.9 9.8 10.6 11.7 11.3 47.9 19.1 79.3 65.5 79.3 117 0 57.5-38.5 107.7-93.5 122.1-3.7 1-6.3 4.4-6.3 8.2 0 4.7 3.8 8.5 8.5 8.5.7 0 1.5-.1 2.2-.2 62.5-16.4 106.2-73.4 106.2-138.6-.1-59-36.3-111.9-91.2-133.3zm-62.8 155.4l-1.6 7.7c-.4 1.5-1.7 2.5-3.2 2.5l-13.4-.3c-1.5 0-2.6-1.2-2.6-2.7V291c0-1.4 1.2-2.6 2.6-2.6h1.2c1.4 0 2.6-1.2 2.6-2.6l.1-39.6c0-1.4 1.2-2.6 2.6-2.6h5.4c1.4 0 2.6 1.2 2.6 2.6v7.6c0 1.5 1.2 2.6 2.6 2.6h1.2c1.4 0 2.6-1.2 2.6-2.6v-7.3c0-1.4 1.2-2.6 2.6-2.7l11.9-.1c1.4.1 2.5 1.2 2.5 2.6v7.5c0 1.4 1.2 2.6 2.6 2.6h1.3c1.4 0 2.6-1.2 2.6-2.6v-7.6c0-1.4 1.2-2.6 2.6-2.6h5.3c1.5 0 2.7 1.1 2.7 2.6v.1l-.1 39.6c0 1.5 1.2 2.6 2.6 2.6h1.2c1.5 0 2.6 1.2 2.6 2.6v20.4c0 1.4-1.2 2.6-2.6 2.6h-13.4c-1.5-.1-2.8-1.1-3.1-2.6l-1.6-7.7c-.4-1.5-1.6-2.5-3.1-2.5l-16.4.2c-1.2.2-2.5 1.2-2.9 2.7z"
  }), __jsx("path", {
    d: "M453.1 366.9c-40 0-64.9-24.1-64.9-59.7v-30c-.9-17 8.3-32.9 23.3-40.8-14.1-6.3-23-21.5-23-40.8v-26.9c0-35.6 24.5-59.7 64.5-59.7s64.9 24.1 64.9 59.7v26.9c0 19.3-8.9 34.5-23 40.8 15.2 7.8 24.4 23.7 23.7 40.8v30c.1 35.7-25.1 59.7-65.5 59.7zm23.7-196.5c-.6-13-11.7-23-24.7-22.4-12.1.6-21.8 10.3-22.4 22.4V203c1.1 13 12.5 22.7 25.5 21.6 11.5-1 20.6-10.1 21.6-21.6v-32.6zm.4 100.4c0-11.5-8.2-21.9-24.1-21.9-11.8-1-22.3 7.8-23.3 19.6-.1.8-.1 1.5-.1 2.3v34.5c-.7 12.2 8.7 22.7 20.9 23.3h2.4c12.4.8 23.2-8.6 24.1-21 .1-.8.1-1.5 0-2.3v-34.5zM630.3 366.9c-40 0-65.6-25.9-65.6-64.1V173.7c0-38.6 25.5-64.1 65.6-64.1 40.1 0 66 25.5 66 64.1v129.1c-.1 38.2-25.6 64.1-66 64.1zM654 170.1c0-11.9-8.9-21.5-23.7-21.5-11.8-1-22.3 7.8-23.3 19.6-.1.6-.1 1.3-.1 1.9v135.7c0 11.9 9.6 21.6 21.4 21.6.6 0 1.3 0 1.9-.1 14.8 0 23.7-9.6 23.7-21.5V170.1zM753.7 361.4V134.2c14.1 0 19.3-9.3 19.3-19.6h23.3v246.8h-42.6zM930.6 361.4V114.5h45.9v206.1h69v40.8H930.6zM1174.8 361.4l-8.2-48.4h-43.7l-8.9 48.4h-43l49.6-246.8h51.5l49.5 246.8h-46.8zm-28.9-180.2l-16.7 95.3h31.5l-14.8-95.3zM1335.3 361.4h-77.8V114.5h77.2c33.7 0 54.5 18.2 54.5 52.3v26.9c0 21.1-8.2 37.1-29.3 41.5 22.2 5.9 30.4 21.1 30.4 41.9v32.3c-.2 34.2-21.3 52-55 52zm9.6-191.3c0-11.1-4.8-17.8-16.1-17.8h-24.9v67.8h23c11.9 0 18.2-6.3 18.2-19.3l-.2-30.7zm.7 103.5c0-13-6.3-19.6-18.2-19.6h-23.7v69.9h25.9c11.5 0 16.1-6.3 16.1-17.8l-.1-32.5zM1498.4 366.9c-42.3 0-68.6-25.2-68.6-63.7v-17.1h42.3v14.5c0 18.2 8.5 28.2 25.2 28.2s24.5-9.6 24.5-24.9c0-19.6-12.6-33-37.1-51.2-24.5-18.2-52.6-42.6-52.6-77.1 0-35.6 23-66.3 67.5-66.3 38.9 0 64.9 26.9 64.9 63.4v16.1h-41.9V174c0-15.2-7.8-26.3-23.3-26.3-11.5-.8-21.4 7.8-22.2 19.3-.1 1-.1 1.9 0 2.9 0 20.8 12.2 31.5 39.6 51.5 29.3 21.9 50 44.1 50 77.5-.2 39.5-27.7 68-68.3 68z"
  }))))), __jsx("div", {
    className: "lg:hidden flex-1 text-right"
  }, __jsx("button", {
    className: "px-4 py-2",
    title: "Toggle Menu",
    onClick: () => setIsOpen(true)
  }, __jsx("span", {
    className: "sr-only"
  }, "Toggle Menu"), __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBars"],
    size: "lg"
  }))), __jsx("ul", {
    className: "flex-1 hidden lg:flex justify-end fluid-text-lg"
  }, menu.map(({
    label,
    props,
    children
  }, i) => __jsx("li", {
    className: "group relative",
    key: `header-${i}`
  }, __jsx(link_default.a, props, __jsx("a", {
    className: `p-3 ${props.href.includes('/donate') ? 'link--tangerine font-bold' : router.pathname === props.href ? 'link--tangerine' : 'link--white'}`
  }, label)), children && __jsx("ul", {
    className: "hidden group-focus-within:block group-hover:block py-2 absolute left-0 w-64 bg-graphite-800 fluid-text-base"
  }, children.map(({
    label,
    props
  }, j) => __jsx("li", {
    key: `header-${i}-${j}`
  }, __jsx(link_default.a, props, __jsx("a", {
    className: `block py-1 px-5 ${router.pathname === props.href ? 'link--tangerine' : 'link--white'}`
  }, label)))))))))), __jsx("main", {
    className: "page-content"
  }, children), __jsx("footer", {
    className: "page-footer bg-lime-900 text-white pt-10 pb-16"
  }, __jsx("div", {
    className: "container-1200 mx-auto px-5"
  }, __jsx(SocialLinks["a" /* default */], {
    ulClassNames: "justify-center mb-10",
    liClassNames: "m-3",
    aClassNames: "link--white",
    size: "3x"
  }), __jsx("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
  }, menu.map(({
    label,
    props,
    children
  }, i) => {
    var _props$href2;

    if ((_props$href2 = props.href) === null || _props$href2 === void 0 ? void 0 : _props$href2.includes('/donate')) return null;
    return __jsx("div", {
      key: `footer-${i}`
    }, __jsx("h2", {
      className: "mb-4 fluid-text-lg uppercase"
    }, __jsx(link_default.a, props, __jsx("a", {
      className: "link--white"
    }, label))), children && __jsx("ul", {
      className: "space-y-2"
    }, children.map(({
      label,
      props
    }, j) => __jsx("li", {
      key: `footer-${i}-${j}`
    }, __jsx(link_default.a, props, __jsx("a", {
      className: "link--white"
    }, label))))));
  })), __jsx("div", {
    className: "border-t border-white fluid-text-sm text-center pt-10 space-y-5"
  }, __jsx("p", null, "\xA9 ", new Date().getFullYear(), " 801Labs.com. All rights reserved."), __jsx("p", null, __jsx(link_default.a, {
    href: "/donate"
  }, __jsx("a", {
    className: "link--tangerine uppercase"
  }, "Donate\xA0>"))), __jsx("p", null, "801 Labs hackerspace is a 501(c)(3) that is open to the public!", __jsx("br", null), "353 East 200 South Suite #B, Salt Lake City, UT 84111"), __jsx("p", null, __jsx(link_default.a, {
    href: "/code-of-conduct"
  }, __jsx("a", {
    className: "link--tangerine"
  }, "Code of Conduct")), __jsx("span", {
    className: "mx-3"
  }, "|"), __jsx(link_default.a, {
    href: "/terms"
  }, __jsx("a", {
    className: "link--tangerine"
  }, "Terms"))))))));
};

/* harmony default export */ var layouts_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "KZGB":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-320-9a011c68002e9b31b55731f1ca0f2675.png"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-640-d652a161a871c198e86214bd7d669a9f.png"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-960-b85b08c925c0bbdaf04e609da64ac6fe.png"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-1280-155469dfe31b4cd88234ab7426561446.png"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-1746-be75664bc8c0bc4e8e490174b68e9fe2.png"+" 1746w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-320-9a011c68002e9b31b55731f1ca0f2675.png",width: 320,height: 127},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-640-d652a161a871c198e86214bd7d669a9f.png",width: 640,height: 254},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-960-b85b08c925c0bbdaf04e609da64ac6fe.png",width: 960,height: 382},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-1280-155469dfe31b4cd88234ab7426561446.png",width: 1280,height: 509},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-1746-be75664bc8c0bc4e8e490174b68e9fe2.png",width: 1746,height: 694}],
          src: "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-320-9a011c68002e9b31b55731f1ca0f2675.png",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-25-at-4.36.31-PM-320-9a011c68002e9b31b55731f1ca0f2675.png"},
          placeholder: undefined,
          width: 320,
          height: 127
      }

/***/ }),

/***/ "KqIo":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/801-labs-location-entrance-320-7595faa223404e3a768e9d6284ae6b94.jpg"+" 320w"+","+"/_next/static/images/801-labs-location-entrance-640-eab9d5047fd3cef3f304f7734dcb4014.jpg"+" 640w"+","+"/_next/static/images/801-labs-location-entrance-644-d4c9fe7deb4448bc1f4ad1e68c06d8f5.jpg"+" 644w",
          images:[ {path: "/_next/static/images/801-labs-location-entrance-320-7595faa223404e3a768e9d6284ae6b94.jpg",width: 320,height: 173},{path: "/_next/static/images/801-labs-location-entrance-640-eab9d5047fd3cef3f304f7734dcb4014.jpg",width: 640,height: 346},{path: "/_next/static/images/801-labs-location-entrance-644-d4c9fe7deb4448bc1f4ad1e68c06d8f5.jpg",width: 644,height: 348}],
          src: "/_next/static/images/801-labs-location-entrance-320-7595faa223404e3a768e9d6284ae6b94.jpg",
          toString:function(){return "/_next/static/images/801-labs-location-entrance-320-7595faa223404e3a768e9d6284ae6b94.jpg"},
          placeholder: undefined,
          width: 320,
          height: 173
      }

/***/ }),

/***/ "KsgO":
/***/ (function(module, exports) {

module.exports = require("unist-util-visit");

/***/ }),

/***/ "Lc/p":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/odroid_emmc-1-320-ff9e7c6171ef376f3125a819abe875fd.jpg"+" 320w"+","+"/_next/static/images/odroid_emmc-1-487-50c8899cb722ff17caae6e74b89c7fa9.jpg"+" 487w",
          images:[ {path: "/_next/static/images/odroid_emmc-1-320-ff9e7c6171ef376f3125a819abe875fd.jpg",width: 320,height: 138},{path: "/_next/static/images/odroid_emmc-1-487-50c8899cb722ff17caae6e74b89c7fa9.jpg",width: 487,height: 210}],
          src: "/_next/static/images/odroid_emmc-1-320-ff9e7c6171ef376f3125a819abe875fd.jpg",
          toString:function(){return "/_next/static/images/odroid_emmc-1-320-ff9e7c6171ef376f3125a819abe875fd.jpg"},
          placeholder: undefined,
          width: 320,
          height: 138
      }

/***/ }),

/***/ "M3MV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return research; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return news; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);




class Blog {
  constructor(dir, postsPerPage) {
    this.dir = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(process.cwd(), dir);
    this.postsPerPage = postsPerPage;
  }

  getSlugs() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(this.dir);
  }

  getPostBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(this.dir, `${realSlug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8');
    const {
      data,
      content
    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const post = Object.assign({}, data, {
      slug: realSlug,
      content
    });
    post.excerpt = 'excerpt' in data && data.excerpt ? data.excerpt : content.replace(/^(.{50}[^\s]*).*/, "$1");
    post.tags = 'tags' in data && data.tags ? data.tags.split(/,\s?/g) : [];
    post.date_published = 'date_published' in data && 'getTime' in data.date_published ? data.date_published.getTime() : data.date_published;
    post.date_updated = 'date_updated' in data && 'getTime' in data.date_updated ? data.date_updated.getTime() : data.date_updated;
    return post;
  }

  getPosts(page = 1, perPage = -1) {
    const slugs = this.getSlugs();
    const posts = slugs.map(slug => this.getPostBySlug(slug)).sort((post1, post2) => post1.date_published > post2.date_published ? -1 : 1);
    return this.paginatePosts(posts, page, perPage);
  }

  getPostsByTag(tag, page = 1, perPage = -1) {
    const {
      posts
    } = this.getPosts();
    const tags = this.getTags();
    const taggedPosts = posts.reduce((acc, post) => {
      if (post.tags.includes(tags[tag])) {
        acc.push(post);
      }

      return acc;
    }, []);
    return this.paginatePosts(taggedPosts, page, perPage);
  }

  getTags() {
    const {
      posts
    } = this.getPosts();
    return Object.fromEntries(posts.reduce((acc, post) => {
      if (!('tags' in post)) return acc;
      post.tags.forEach(tag => {
        if (!acc.includes(tag)) acc.push(tag);
      });
      return acc;
    }, []).sort((tag1, tag2) => {
      const tag1U = tag1.toUpperCase();
      const tag2U = tag2.toUpperCase();
      return tag1U < tag2U ? -1 : tag2U < tag1U ? 1 : 0;
    }).map(tag => {
      const handle = tag.toLowerCase().replace(/\W/ig, '-');
      return [handle, tag];
    }));
  }

  paginatePosts(posts, page, perPage) {
    return {
      posts: perPage < 0 ? posts : posts.slice((page - 1) * perPage, page * perPage),
      pagination: {
        totalPages: Math.ceil(posts.length / perPage),
        totalItems: posts.length,
        currentPage: page
      }
    };
  }

}

const research = new Blog('content/research', 10);
const news = new Blog('content/news', 10);

/***/ }),

/***/ "MaUy":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-19-320-c77f26fc36b7b9460f3b5bd5c6ccbed1.jpg"+" 320w"+","+"/_next/static/images/image-19-640-706ab409c6ad1f56ebd7f96f4b21cdd8.jpg"+" 640w"+","+"/_next/static/images/image-19-960-bb667610ec000e5b8937cbc67596e592.jpg"+" 960w"+","+"/_next/static/images/image-19-1146-c1da6843f4ca674f735d61d4a9616013.jpg"+" 1146w",
          images:[ {path: "/_next/static/images/image-19-320-c77f26fc36b7b9460f3b5bd5c6ccbed1.jpg",width: 320,height: 167},{path: "/_next/static/images/image-19-640-706ab409c6ad1f56ebd7f96f4b21cdd8.jpg",width: 640,height: 334},{path: "/_next/static/images/image-19-960-bb667610ec000e5b8937cbc67596e592.jpg",width: 960,height: 501},{path: "/_next/static/images/image-19-1146-c1da6843f4ca674f735d61d4a9616013.jpg",width: 1146,height: 598}],
          src: "/_next/static/images/image-19-320-c77f26fc36b7b9460f3b5bd5c6ccbed1.jpg",
          toString:function(){return "/_next/static/images/image-19-320-c77f26fc36b7b9460f3b5bd5c6ccbed1.jpg"},
          placeholder: undefined,
          width: 320,
          height: 167
      }

/***/ }),

/***/ "MkML":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-7-320-03bd8dc962e91006a4fe5716b61fb9e2.jpg"+" 320w"+","+"/_next/static/images/image-7-640-1291a00512c02e96a3018f8d2b05a296.jpg"+" 640w"+","+"/_next/static/images/image-7-960-6f52c8396ea7cf709f2df00eb64f982b.jpg"+" 960w"+","+"/_next/static/images/image-7-1280-b2559fe7b56f42ca76b99dd530485bc8.jpg"+" 1280w"+","+"/_next/static/images/image-7-1900-3aa982e0c464818e143437c31e8bdbe2.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/image-7-320-03bd8dc962e91006a4fe5716b61fb9e2.jpg",width: 320,height: 65},{path: "/_next/static/images/image-7-640-1291a00512c02e96a3018f8d2b05a296.jpg",width: 640,height: 131},{path: "/_next/static/images/image-7-960-6f52c8396ea7cf709f2df00eb64f982b.jpg",width: 960,height: 196},{path: "/_next/static/images/image-7-1280-b2559fe7b56f42ca76b99dd530485bc8.jpg",width: 1280,height: 262},{path: "/_next/static/images/image-7-1900-3aa982e0c464818e143437c31e8bdbe2.jpg",width: 1900,height: 389}],
          src: "/_next/static/images/image-7-320-03bd8dc962e91006a4fe5716b61fb9e2.jpg",
          toString:function(){return "/_next/static/images/image-7-320-03bd8dc962e91006a4fe5716b61fb9e2.jpg"},
          placeholder: undefined,
          width: 320,
          height: 65
      }

/***/ }),

/***/ "N90w":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/a-community-hackerspace-location-map-320-e53a7ae17c351e1082c526b18a50f0fe.jpg"+" 320w"+","+"/_next/static/images/a-community-hackerspace-location-map-640-78d12ad336b1531d1b06b845c79f6243.jpg"+" 640w"+","+"/_next/static/images/a-community-hackerspace-location-map-960-2fe1c91e1abec7f98ef423dbc0608934.jpg"+" 960w"+","+"/_next/static/images/a-community-hackerspace-location-map-962-d0b603f267ecc3829d38fe12f4e1528d.jpg"+" 962w",
          images:[ {path: "/_next/static/images/a-community-hackerspace-location-map-320-e53a7ae17c351e1082c526b18a50f0fe.jpg",width: 320,height: 148},{path: "/_next/static/images/a-community-hackerspace-location-map-640-78d12ad336b1531d1b06b845c79f6243.jpg",width: 640,height: 296},{path: "/_next/static/images/a-community-hackerspace-location-map-960-2fe1c91e1abec7f98ef423dbc0608934.jpg",width: 960,height: 444},{path: "/_next/static/images/a-community-hackerspace-location-map-962-d0b603f267ecc3829d38fe12f4e1528d.jpg",width: 962,height: 445}],
          src: "/_next/static/images/a-community-hackerspace-location-map-320-e53a7ae17c351e1082c526b18a50f0fe.jpg",
          toString:function(){return "/_next/static/images/a-community-hackerspace-location-map-320-e53a7ae17c351e1082c526b18a50f0fe.jpg"},
          placeholder: undefined,
          width: 320,
          height: 148
      }

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OP66":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-8-320-9a3fb3a92cc67525d33d96f465f223be.jpg"+" 320w"+","+"/_next/static/images/image-8-640-c7b86178f55648621aa8dd1171e5e6d5.jpg"+" 640w"+","+"/_next/static/images/image-8-960-0a27be8c7a378a56c85f40627dd999b1.jpg"+" 960w"+","+"/_next/static/images/image-8-1280-da2d13272dcd6ffcaa184679c9a3ef9e.jpg"+" 1280w"+","+"/_next/static/images/image-8-1420-9ce6e693cb78123f028bcc7601946d59.jpg"+" 1420w",
          images:[ {path: "/_next/static/images/image-8-320-9a3fb3a92cc67525d33d96f465f223be.jpg",width: 320,height: 64},{path: "/_next/static/images/image-8-640-c7b86178f55648621aa8dd1171e5e6d5.jpg",width: 640,height: 128},{path: "/_next/static/images/image-8-960-0a27be8c7a378a56c85f40627dd999b1.jpg",width: 960,height: 192},{path: "/_next/static/images/image-8-1280-da2d13272dcd6ffcaa184679c9a3ef9e.jpg",width: 1280,height: 256},{path: "/_next/static/images/image-8-1420-9ce6e693cb78123f028bcc7601946d59.jpg",width: 1420,height: 284}],
          src: "/_next/static/images/image-8-320-9a3fb3a92cc67525d33d96f465f223be.jpg",
          toString:function(){return "/_next/static/images/image-8-320-9a3fb3a92cc67525d33d96f465f223be.jpg"},
          placeholder: undefined,
          width: 320,
          height: 64
      }

/***/ }),

/***/ "OSgf":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-6-320-7563c3fc4a4063c927ac5dd062c88e31.jpg"+" 320w"+","+"/_next/static/images/image-6-618-b40e540953b1370ca66e122d28c5e368.jpg"+" 618w",
          images:[ {path: "/_next/static/images/image-6-320-7563c3fc4a4063c927ac5dd062c88e31.jpg",width: 320,height: 264},{path: "/_next/static/images/image-6-618-b40e540953b1370ca66e122d28c5e368.jpg",width: 618,height: 510}],
          src: "/_next/static/images/image-6-320-7563c3fc4a4063c927ac5dd062c88e31.jpg",
          toString:function(){return "/_next/static/images/image-6-320-7563c3fc4a4063c927ac5dd062c88e31.jpg"},
          placeholder: undefined,
          width: 320,
          height: 264
      }

/***/ }),

/***/ "OoXJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tags = props => {
  return __jsx("div", null, __jsx("h3", {
    className: "fluid-text-lg font-bold bg-black text-white px-5 py-1 mb-3"
  }, "Tags"), __jsx("ul", {
    className: "px-5 py-1 space-y-2"
  }, Object.entries(props.tags).map(([handle, tag]) => __jsx("li", {
    key: handle
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `${props.path}/[tag]/[page]`,
    as: `${props.path}/${handle}/1`
  }, __jsx("a", null, tag))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Tags);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');

  if (path) {
    path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

    if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  }

  if (typeof qs === 'string') path += '?' + qs;
  if (typeof hash === 'string') path += '#' + hash;
  return path;
}

/***/ }),

/***/ "PQzP":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-16-320-e22b64d5d1f8e3a848c6a4a78f34a319.png"+" 320w"+","+"/_next/static/images/image-16-640-6e782e11bd5a9316457b09c58fa8986b.png"+" 640w"+","+"/_next/static/images/image-16-884-be119b084a91a329311a072f11631a29.png"+" 884w",
          images:[ {path: "/_next/static/images/image-16-320-e22b64d5d1f8e3a848c6a4a78f34a319.png",width: 320,height: 66},{path: "/_next/static/images/image-16-640-6e782e11bd5a9316457b09c58fa8986b.png",width: 640,height: 132},{path: "/_next/static/images/image-16-884-be119b084a91a329311a072f11631a29.png",width: 884,height: 182}],
          src: "/_next/static/images/image-16-320-e22b64d5d1f8e3a848c6a4a78f34a319.png",
          toString:function(){return "/_next/static/images/image-16-320-e22b64d5d1f8e3a848c6a4a78f34a319.png"},
          placeholder: undefined,
          width: 320,
          height: 66
      }

/***/ }),

/***/ "Po49":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-13-320-ba40c1724d40bb3b9a7627a69ff474ff.jpg"+" 320w"+","+"/_next/static/images/image-13-640-201e1f5a59c86dc94702f1b069e1ccb5.jpg"+" 640w"+","+"/_next/static/images/image-13-710-18be36b3f67324d7bdec0a9432217a49.jpg"+" 710w",
          images:[ {path: "/_next/static/images/image-13-320-ba40c1724d40bb3b9a7627a69ff474ff.jpg",width: 320,height: 141},{path: "/_next/static/images/image-13-640-201e1f5a59c86dc94702f1b069e1ccb5.jpg",width: 640,height: 281},{path: "/_next/static/images/image-13-710-18be36b3f67324d7bdec0a9432217a49.jpg",width: 710,height: 312}],
          src: "/_next/static/images/image-13-320-ba40c1724d40bb3b9a7627a69ff474ff.jpg",
          toString:function(){return "/_next/static/images/image-13-320-ba40c1724d40bb3b9a7627a69ff474ff.jpg"},
          placeholder: undefined,
          width: 320,
          height: 141
      }

/***/ }),

/***/ "PrqZ":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-320-2a2fa883c7b08fbf6091d34ba8476d59.jpg"+" 320w"+","+"/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-640-663f7b63d3dbe24b99d8e86408475e3f.jpg"+" 640w"+","+"/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-960-a16dbe4d118c5f6016ec105a022048d9.jpg"+" 960w"+","+"/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-1148-3d59d515f199537bcc6e2021ff0cd2c0.jpg"+" 1148w",
          images:[ {path: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-320-2a2fa883c7b08fbf6091d34ba8476d59.jpg",width: 320,height: 193},{path: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-640-663f7b63d3dbe24b99d8e86408475e3f.jpg",width: 640,height: 386},{path: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-960-a16dbe4d118c5f6016ec105a022048d9.jpg",width: 960,height: 579},{path: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-1148-3d59d515f199537bcc6e2021ff0cd2c0.jpg",width: 1148,height: 692}],
          src: "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-320-2a2fa883c7b08fbf6091d34ba8476d59.jpg",
          toString:function(){return "/_next/static/images/Screenshot_2018-11-19-18.52.56_wehvoV-320-2a2fa883c7b08fbf6091d34ba8476d59.jpg"},
          placeholder: undefined,
          width: 320,
          height: 193
      }

/***/ }),

/***/ "RLZS":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-10-320-c1b5c848f8cc88ca97b4c292b3f8a87b.jpg"+" 320w"+","+"/_next/static/images/image-10-640-8cfd71a25788ebefb8e80b34f6bd1bd3.jpg"+" 640w"+","+"/_next/static/images/image-10-849-4bcc39be3cf7685fec2f09ce783867c2.jpg"+" 849w",
          images:[ {path: "/_next/static/images/image-10-320-c1b5c848f8cc88ca97b4c292b3f8a87b.jpg",width: 320,height: 104},{path: "/_next/static/images/image-10-640-8cfd71a25788ebefb8e80b34f6bd1bd3.jpg",width: 640,height: 208},{path: "/_next/static/images/image-10-849-4bcc39be3cf7685fec2f09ce783867c2.jpg",width: 849,height: 276}],
          src: "/_next/static/images/image-10-320-c1b5c848f8cc88ca97b4c292b3f8a87b.jpg",
          toString:function(){return "/_next/static/images/image-10-320-c1b5c848f8cc88ca97b4c292b3f8a87b.jpg"},
          placeholder: undefined,
          width: 320,
          height: 104
      }

/***/ }),

/***/ "Rc+2":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/makefile-1-320-6ddfe3638763e3aa7204e27b0ac0e2bc.jpg"+" 320w"+","+"/_next/static/images/makefile-1-640-06d546d401c0c29d9b2b1d5488ca6ef8.jpg"+" 640w"+","+"/_next/static/images/makefile-1-817-833c69f280992f33589744e322ca8323.jpg"+" 817w",
          images:[ {path: "/_next/static/images/makefile-1-320-6ddfe3638763e3aa7204e27b0ac0e2bc.jpg",width: 320,height: 186},{path: "/_next/static/images/makefile-1-640-06d546d401c0c29d9b2b1d5488ca6ef8.jpg",width: 640,height: 373},{path: "/_next/static/images/makefile-1-817-833c69f280992f33589744e322ca8323.jpg",width: 817,height: 476}],
          src: "/_next/static/images/makefile-1-320-6ddfe3638763e3aa7204e27b0ac0e2bc.jpg",
          toString:function(){return "/_next/static/images/makefile-1-320-6ddfe3638763e3aa7204e27b0ac0e2bc.jpg"},
          placeholder: undefined,
          width: 320,
          height: 186
      }

/***/ }),

/***/ "SOQP":
/***/ (function(module, exports) {

module.exports = require("remark-unwrap-images");

/***/ }),

/***/ "T6Zr":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/kimb3r-100-d5c9e68b10f75f874793297f6eb36262.jpg"+" 100w",
          images:[ {path: "/_next/static/images/kimb3r-100-d5c9e68b10f75f874793297f6eb36262.jpg",width: 100,height: 100}],
          src: "/_next/static/images/kimb3r-100-d5c9e68b10f75f874793297f6eb36262.jpg",
          toString:function(){return "/_next/static/images/kimb3r-100-d5c9e68b10f75f874793297f6eb36262.jpg"},
          placeholder: undefined,
          width: 100,
          height: 100
      }

/***/ }),

/***/ "T91B":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-320-fef429f1017e7d58f8f9c86c0457a7ee.jpg"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-640-93c45f62275986e13c16a5de9f64ee38.jpg"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-960-3158d85bf6552310131d9488ea6a2d73.jpg"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-1280-88e13c7f18945e53eaeb2715f852fbb0.jpg"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-1738-e42dc19fe619602296329e81841d0429.jpg"+" 1738w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-320-fef429f1017e7d58f8f9c86c0457a7ee.jpg",width: 320,height: 257},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-640-93c45f62275986e13c16a5de9f64ee38.jpg",width: 640,height: 513},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-960-3158d85bf6552310131d9488ea6a2d73.jpg",width: 960,height: 770},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-1280-88e13c7f18945e53eaeb2715f852fbb0.jpg",width: 1280,height: 1027},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-1738-e42dc19fe619602296329e81841d0429.jpg",width: 1738,height: 1394}],
          src: "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-320-fef429f1017e7d58f8f9c86c0457a7ee.jpg",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-25-at-5.37.14-PM-320-fef429f1017e7d58f8f9c86c0457a7ee.jpg"},
          placeholder: undefined,
          width: 320,
          height: 257
      }

/***/ }),

/***/ "TDWf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Meta = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const path = 'asPath' in router ? router.asPath : router.pathname;
  const domain = 'https://www.801labs.org';
  let {
    title = '801 Labs',
    description = '801 Labs is a Salt Lake City based hackerspace created by local information technology, electronics, and information security enthusiasts.',
    image = '/images/801labs-cover.jpg',
    noindex = false
  } = props;
  if (!title.includes('801 Labs')) title += ' | 801 Labs';
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", {
    key: "title"
  }, title), __jsx("meta", {
    name: "description",
    content: "description",
    key: "description"
  }), __jsx("link", {
    rel: "canonical",
    href: domain + path,
    key: "canonical"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    sizes: "16x16"
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    key: "og:title"
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    key: "og:description"
  }), __jsx("meta", {
    property: "og:image",
    content: domain + image,
    key: "og:image"
  }), __jsx("meta", {
    property: "og:url",
    content: domain + path,
    key: "og:url"
  }), __jsx("meta", {
    property: "og:site_name",
    content: "801 Labs",
    key: "og:site_name"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    key: "twitter:card"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@801Labs",
    key: "twitter:site"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    key: "viewport"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#6bf0c2",
    key: "theme-color"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&family=Tomorrow:wght@400;600;700&display=swap",
    rel: "stylesheet",
    key: "fonts"
  }), noindex && __jsx("meta", {
    name: "robots",
    content: "noindex",
    key: "robots"
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "QnlAT_0caLTAeL1e8V-RlHWBX7xauM_CnxY_5-ltIF4"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "TVIx":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-2-320-83582c7bfeb02b784ded22d6b772e47e.jpg"+" 320w"+","+"/_next/static/images/image-2-590-5cc8ffc33b0e3cb9a185622e61721213.jpg"+" 590w",
          images:[ {path: "/_next/static/images/image-2-320-83582c7bfeb02b784ded22d6b772e47e.jpg",width: 320,height: 117},{path: "/_next/static/images/image-2-590-5cc8ffc33b0e3cb9a185622e61721213.jpg",width: 590,height: 215}],
          src: "/_next/static/images/image-2-320-83582c7bfeb02b784ded22d6b772e47e.jpg",
          toString:function(){return "/_next/static/images/image-2-320-83582c7bfeb02b784ded22d6b772e47e.jpg"},
          placeholder: undefined,
          width: 320,
          height: 117
      }

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U0pd":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-8-320-6e5a6b06640c4d0611fb923ce1c1a502.jpg"+" 320w"+","+"/_next/static/images/image-8-640-369901fa5175b2033ab571ba1d56031c.jpg"+" 640w"+","+"/_next/static/images/image-8-817-342f38694e63d1adcbbabfb2a36e6edd.jpg"+" 817w",
          images:[ {path: "/_next/static/images/image-8-320-6e5a6b06640c4d0611fb923ce1c1a502.jpg",width: 320,height: 147},{path: "/_next/static/images/image-8-640-369901fa5175b2033ab571ba1d56031c.jpg",width: 640,height: 294},{path: "/_next/static/images/image-8-817-342f38694e63d1adcbbabfb2a36e6edd.jpg",width: 817,height: 375}],
          src: "/_next/static/images/image-8-320-6e5a6b06640c4d0611fb923ce1c1a502.jpg",
          toString:function(){return "/_next/static/images/image-8-320-6e5a6b06640c4d0611fb923ce1c1a502.jpg"},
          placeholder: undefined,
          width: 320,
          height: 147
      }

/***/ }),

/***/ "U28J":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/odroid_emmc-320-5187217cd9b977675b824a0a875e1f83.jpg"+" 320w"+","+"/_next/static/images/odroid_emmc-640-d6002e3c60946d31970be2cbe61b66fb.jpg"+" 640w"+","+"/_next/static/images/odroid_emmc-903-64079fe448b40459b07416045c3c3a9c.jpg"+" 903w",
          images:[ {path: "/_next/static/images/odroid_emmc-320-5187217cd9b977675b824a0a875e1f83.jpg",width: 320,height: 107},{path: "/_next/static/images/odroid_emmc-640-d6002e3c60946d31970be2cbe61b66fb.jpg",width: 640,height: 214},{path: "/_next/static/images/odroid_emmc-903-64079fe448b40459b07416045c3c3a9c.jpg",width: 903,height: 302}],
          src: "/_next/static/images/odroid_emmc-320-5187217cd9b977675b824a0a875e1f83.jpg",
          toString:function(){return "/_next/static/images/odroid_emmc-320-5187217cd9b977675b824a0a875e1f83.jpg"},
          placeholder: undefined,
          width: 320,
          height: 107
      }

/***/ }),

/***/ "UlJ9":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-8-320-2cb0f03682e8a04533192417f56964c9.jpg"+" 320w"+","+"/_next/static/images/image-8-640-9e8d06edda0b4b93b43ebabae242bc5c.jpg"+" 640w"+","+"/_next/static/images/image-8-960-950f0fdb2282b01a89d0ec44d3a860fd.jpg"+" 960w"+","+"/_next/static/images/image-8-1280-f0d82849f9abafd8ccbb6eb175b19d8a.jpg"+" 1280w"+","+"/_next/static/images/image-8-1900-1898d1ea6b8a5208f66d01e30c43cfa8.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/image-8-320-2cb0f03682e8a04533192417f56964c9.jpg",width: 320,height: 182},{path: "/_next/static/images/image-8-640-9e8d06edda0b4b93b43ebabae242bc5c.jpg",width: 640,height: 365},{path: "/_next/static/images/image-8-960-950f0fdb2282b01a89d0ec44d3a860fd.jpg",width: 960,height: 547},{path: "/_next/static/images/image-8-1280-f0d82849f9abafd8ccbb6eb175b19d8a.jpg",width: 1280,height: 730},{path: "/_next/static/images/image-8-1900-1898d1ea6b8a5208f66d01e30c43cfa8.jpg",width: 1900,height: 1083}],
          src: "/_next/static/images/image-8-320-2cb0f03682e8a04533192417f56964c9.jpg",
          toString:function(){return "/_next/static/images/image-8-320-2cb0f03682e8a04533192417f56964c9.jpg"},
          placeholder: undefined,
          width: 320,
          height: 182
      }

/***/ }),

/***/ "VO4c":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-5-320-e8d2a7167b2c6c71e4f96990bb560ec9.jpg"+" 320w"+","+"/_next/static/images/image-5-389-02f8bdd7258ec99d0e1d9ef6c1af288f.jpg"+" 389w",
          images:[ {path: "/_next/static/images/image-5-320-e8d2a7167b2c6c71e4f96990bb560ec9.jpg",width: 320,height: 441},{path: "/_next/static/images/image-5-389-02f8bdd7258ec99d0e1d9ef6c1af288f.jpg",width: 389,height: 536}],
          src: "/_next/static/images/image-5-320-e8d2a7167b2c6c71e4f96990bb560ec9.jpg",
          toString:function(){return "/_next/static/images/image-5-320-e8d2a7167b2c6c71e4f96990bb560ec9.jpg"},
          placeholder: undefined,
          width: 320,
          height: 441
      }

/***/ }),

/***/ "W/7X":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-14-320-e2073fb98809ab2edc08dba4cc3cb860.jpg"+" 320w"+","+"/_next/static/images/image-14-640-4766253bbb6ee5998deedc52ade2e981.jpg"+" 640w"+","+"/_next/static/images/image-14-960-5a4ea92b0d857b7f209e6f6a915ec859.jpg"+" 960w"+","+"/_next/static/images/image-14-1175-a5cf40e520f795b9329f34844d66423e.jpg"+" 1175w",
          images:[ {path: "/_next/static/images/image-14-320-e2073fb98809ab2edc08dba4cc3cb860.jpg",width: 320,height: 206},{path: "/_next/static/images/image-14-640-4766253bbb6ee5998deedc52ade2e981.jpg",width: 640,height: 412},{path: "/_next/static/images/image-14-960-5a4ea92b0d857b7f209e6f6a915ec859.jpg",width: 960,height: 618},{path: "/_next/static/images/image-14-1175-a5cf40e520f795b9329f34844d66423e.jpg",width: 1175,height: 756}],
          src: "/_next/static/images/image-14-320-e2073fb98809ab2edc08dba4cc3cb860.jpg",
          toString:function(){return "/_next/static/images/image-14-320-e2073fb98809ab2edc08dba4cc3cb860.jpg"},
          placeholder: undefined,
          width: 320,
          height: 206
      }

/***/ }),

/***/ "Woiz":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2018/10/4TJDOj5.jpg": "4Umb",
	"./2018/10/Untitled-Diagram.png": "aZeb",
	"./2018/10/image-10.jpg": "qUJG",
	"./2018/10/image-11.jpg": "qN1x",
	"./2018/10/image-12.jpg": "0BoN",
	"./2018/10/image-13.jpg": "Po49",
	"./2018/10/image-14.jpg": "W/7X",
	"./2018/10/image-15.png": "0pcD",
	"./2018/10/image-17.png": "jFFz",
	"./2018/10/image-2.jpg": "TVIx",
	"./2018/10/image-3.jpg": "7VNH",
	"./2018/10/image-4.jpg": "0gQP",
	"./2018/10/image-5.jpg": "VO4c",
	"./2018/10/image-6.jpg": "OSgf",
	"./2018/10/image-7.jpg": "cd74",
	"./2018/10/image-8.jpg": "OP66",
	"./2018/10/image-9.jpg": "BQLK",
	"./2018/10/image.jpg": "8Ywd",
	"./2018/10/ugdTOpe.jpg": "yC9s",
	"./2018/11/IMG_20180416_194909.jpg": "5Io3",
	"./2018/11/Screenshot_2018-11-19-18.52.56_wehvoV.jpg": "PrqZ",
	"./2018/11/chrome_2018-11-14_11-31-28.png": "m076",
	"./2018/11/emmc_crystal.jpg": "AEGd",
	"./2018/11/emmc_re.jpg": "Hc26",
	"./2018/11/image-1.jpg": "4pUj",
	"./2018/11/image-10.jpg": "RLZS",
	"./2018/11/image-12.jpg": "0I3h",
	"./2018/11/image-13.jpg": "1Vtu",
	"./2018/11/image-2.png": "gEGG",
	"./2018/11/image-3.jpg": "+him",
	"./2018/11/image-4.jpg": "D2oM",
	"./2018/11/image-5.jpg": "vrlz",
	"./2018/11/image-8.jpg": "U0pd",
	"./2018/11/image.png": "w7NK",
	"./2018/11/img010_small.jpg": "YuJF",
	"./2018/11/img011_small.jpg": "eDMQ",
	"./2018/11/img013_composite_small.jpg": "7obp",
	"./2018/11/img013_small.jpg": "043j",
	"./2018/11/img015_small.jpg": "xA9m",
	"./2018/11/img016_small.jpg": "EGYW",
	"./2018/11/odroid_emmc-1.jpg": "Lc/p",
	"./2018/11/odroid_emmc.jpg": "U28J",
	"./2018/11/take_my_money.png": "b4Qu",
	"./2018/12/091816humanchip_1280x720.jpg": "Gfnn",
	"./2018/12/90735205-laptop-eggplant-emoji-face-avatar-computer-purple-pc-cheerful-vector-illustration.jpg": "InpS",
	"./2018/12/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1.jpg": "uIh4",
	"./2018/12/CredUIHTTPAuth.jpg": "h4Go",
	"./2018/12/IMG_3415.jpg": "fyoj",
	"./2018/12/Screen-Shot-2018-12-25-at-4.13.02-PM.jpg": "pzDs",
	"./2018/12/Screen-Shot-2018-12-25-at-4.26.26-PM.jpg": "nfEi",
	"./2018/12/Screen-Shot-2018-12-25-at-4.36.31-PM.png": "KZGB",
	"./2018/12/Screen-Shot-2018-12-25-at-5.37.14-PM.jpg": "T91B",
	"./2018/12/Screen-Shot-2018-12-26-at-1.46.48-PM.png": "50Oo",
	"./2018/12/Screen-Shot-2018-12-26-at-10.24.57-AM.jpg": "p59j",
	"./2018/12/Screen-Shot-2018-12-26-at-10.29.47-AM.jpg": "aqCm",
	"./2018/12/image-1.jpg": "jHLi",
	"./2018/12/image-12.png": "uk92",
	"./2018/12/image-13.png": "ahWG",
	"./2018/12/image-14.png": "x4PV",
	"./2018/12/image-15.png": "zadq",
	"./2018/12/image-16.png": "PQzP",
	"./2018/12/image-17.png": "X/T9",
	"./2018/12/image-19.jpg": "MaUy",
	"./2018/12/image-3.jpg": "uG2Z",
	"./2018/12/image-5.png": "gyQZ",
	"./2018/12/image-6.jpg": "2KEA",
	"./2018/12/image-7.jpg": "MkML",
	"./2018/12/image-8.jpg": "UlJ9",
	"./2018/12/image.jpg": "F9mX",
	"./2018/12/makefile-1.jpg": "Rc+2",
	"./2019/01/gef.jpg": "9WJa",
	"./2019/07/2019-05-02-090559_3440x1440_scrot.png": "Ehs6",
	"./2019/07/process-explorer-test-dll-injection-success.png": "2yu5",
	"./801-labs-location-entrance.jpg": "KqIo",
	"./a-community-hackerspace-location-map.jpg": "N90w",
	"./avatars/bashNinja.jpeg": "qdL/",
	"./avatars/david-freitag.jpg": "fqIK",
	"./avatars/kimb3r.jpg": "T6Zr",
	"./avatars/pips.jpg": "3VmC",
	"./avatars/th3v0id.jpg": "tUTl",
	"./learn-information-technology-information-security.jpg": "9vbA",
	"./location-salt-lake-city.jpg": "qV22",
	"./non-profit-organization-for-peer-learning.jpg": "1CbY",
	"./parking-birds-eye-view.jpg": "wI+S",
	"./virtual-tour-a-community-hackerspace-utah.jpg": "fRLp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Woiz";

/***/ }),

/***/ "X/T9":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-17-320-f715d3aa78db354e7d601f51b594ac0f.png"+" 320w"+","+"/_next/static/images/image-17-640-b5978689e8d38f8cee073020cf68c070.png"+" 640w"+","+"/_next/static/images/image-17-960-2e51a10c56e4a8e41b312d360bfc3e2a.png"+" 960w"+","+"/_next/static/images/image-17-1280-52505fac2090c0ad52738335a16557c4.png"+" 1280w"+","+"/_next/static/images/image-17-1545-e5c78c02cb477743b6dab2007662ec63.png"+" 1545w",
          images:[ {path: "/_next/static/images/image-17-320-f715d3aa78db354e7d601f51b594ac0f.png",width: 320,height: 171},{path: "/_next/static/images/image-17-640-b5978689e8d38f8cee073020cf68c070.png",width: 640,height: 342},{path: "/_next/static/images/image-17-960-2e51a10c56e4a8e41b312d360bfc3e2a.png",width: 960,height: 513},{path: "/_next/static/images/image-17-1280-52505fac2090c0ad52738335a16557c4.png",width: 1280,height: 683},{path: "/_next/static/images/image-17-1545-e5c78c02cb477743b6dab2007662ec63.png",width: 1545,height: 825}],
          src: "/_next/static/images/image-17-320-f715d3aa78db354e7d601f51b594ac0f.png",
          toString:function(){return "/_next/static/images/image-17-320-f715d3aa78db354e7d601f51b594ac0f.png"},
          placeholder: undefined,
          width: 320,
          height: 171
      }

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YuJF":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img010_small-320-777da0a3c2128a36ba8102e13c6decb5.jpg"+" 320w"+","+"/_next/static/images/img010_small-640-092cf1cd33bc3fcde2d6b8d09dc4428e.jpg"+" 640w"+","+"/_next/static/images/img010_small-960-2ad90f66b0a02cac268236ce99ef802e.jpg"+" 960w"+","+"/_next/static/images/img010_small-1280-dc22b1ff297890ff1392bee5aa6ccd8d.jpg"+" 1280w"+","+"/_next/static/images/img010_small-1900-0ff0d427d1a4b902f7a30c6ab23ef7a2.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img010_small-320-777da0a3c2128a36ba8102e13c6decb5.jpg",width: 320,height: 181},{path: "/_next/static/images/img010_small-640-092cf1cd33bc3fcde2d6b8d09dc4428e.jpg",width: 640,height: 361},{path: "/_next/static/images/img010_small-960-2ad90f66b0a02cac268236ce99ef802e.jpg",width: 960,height: 542},{path: "/_next/static/images/img010_small-1280-dc22b1ff297890ff1392bee5aa6ccd8d.jpg",width: 1280,height: 723},{path: "/_next/static/images/img010_small-1900-0ff0d427d1a4b902f7a30c6ab23ef7a2.jpg",width: 1900,height: 1073}],
          src: "/_next/static/images/img010_small-320-777da0a3c2128a36ba8102e13c6decb5.jpg",
          toString:function(){return "/_next/static/images/img010_small-320-777da0a3c2128a36ba8102e13c6decb5.jpg"},
          placeholder: undefined,
          width: 320,
          height: 181
      }

/***/ }),

/***/ "aZeb":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Untitled-Diagram-320-85cae104007f8badea311b718b173b7a.png"+" 320w"+","+"/_next/static/images/Untitled-Diagram-471-efed0e5f00e710862e5083b3f7199924.png"+" 471w",
          images:[ {path: "/_next/static/images/Untitled-Diagram-320-85cae104007f8badea311b718b173b7a.png",width: 320,height: 168},{path: "/_next/static/images/Untitled-Diagram-471-efed0e5f00e710862e5083b3f7199924.png",width: 471,height: 248}],
          src: "/_next/static/images/Untitled-Diagram-320-85cae104007f8badea311b718b173b7a.png",
          toString:function(){return "/_next/static/images/Untitled-Diagram-320-85cae104007f8badea311b718b173b7a.png"},
          placeholder: undefined,
          width: 320,
          height: 168
      }

/***/ }),

/***/ "ahWG":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-13-320-54f0504ca0849cd4ee85be74e1c7d631.png"+" 320w"+","+"/_next/static/images/image-13-640-e5660420b0608dea12a5142a8c20bb26.png"+" 640w"+","+"/_next/static/images/image-13-960-730594b8fd96f1be454751d627211135.png"+" 960w"+","+"/_next/static/images/image-13-1146-3aa1ed97ec5e60b07dcda2544b41aceb.png"+" 1146w",
          images:[ {path: "/_next/static/images/image-13-320-54f0504ca0849cd4ee85be74e1c7d631.png",width: 320,height: 52},{path: "/_next/static/images/image-13-640-e5660420b0608dea12a5142a8c20bb26.png",width: 640,height: 104},{path: "/_next/static/images/image-13-960-730594b8fd96f1be454751d627211135.png",width: 960,height: 156},{path: "/_next/static/images/image-13-1146-3aa1ed97ec5e60b07dcda2544b41aceb.png",width: 1146,height: 186}],
          src: "/_next/static/images/image-13-320-54f0504ca0849cd4ee85be74e1c7d631.png",
          toString:function(){return "/_next/static/images/image-13-320-54f0504ca0849cd4ee85be74e1c7d631.png"},
          placeholder: undefined,
          width: 320,
          height: 52
      }

/***/ }),

/***/ "aqCm":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-320-f0b45e06a8a2f36e6f6b74e83d2809b1.jpg"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-640-506248add02bfc627fa199f7fcd4f090.jpg"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-960-ba606b67cc9bcc2a65419e80e3c3c999.jpg"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-1280-2d7d273bd25f49b6b1c90003c9482888.jpg"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-1816-457959c4d62e44c996cb33a7367d663f.jpg"+" 1816w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-320-f0b45e06a8a2f36e6f6b74e83d2809b1.jpg",width: 320,height: 169},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-640-506248add02bfc627fa199f7fcd4f090.jpg",width: 640,height: 338},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-960-ba606b67cc9bcc2a65419e80e3c3c999.jpg",width: 960,height: 507},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-1280-2d7d273bd25f49b6b1c90003c9482888.jpg",width: 1280,height: 677},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-1816-457959c4d62e44c996cb33a7367d663f.jpg",width: 1816,height: 960}],
          src: "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-320-f0b45e06a8a2f36e6f6b74e83d2809b1.jpg",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-26-at-10.29.47-AM-320-f0b45e06a8a2f36e6f6b74e83d2809b1.jpg"},
          placeholder: undefined,
          width: 320,
          height: 169
      }

/***/ }),

/***/ "b4Qu":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/take_my_money-320-b2985b777d4113879d8609ec2415da3f.png"+" 320w"+","+"/_next/static/images/take_my_money-640-90aef164928f2bde563aa78e87148181.png"+" 640w"+","+"/_next/static/images/take_my_money-960-351ec75b923b07f826f5e2d185fde3b8.png"+" 960w"+","+"/_next/static/images/take_my_money-1200-d520ab87e012cf63a43d54828c138522.png"+" 1200w",
          images:[ {path: "/_next/static/images/take_my_money-320-b2985b777d4113879d8609ec2415da3f.png",width: 320,height: 213},{path: "/_next/static/images/take_my_money-640-90aef164928f2bde563aa78e87148181.png",width: 640,height: 427},{path: "/_next/static/images/take_my_money-960-351ec75b923b07f826f5e2d185fde3b8.png",width: 960,height: 640},{path: "/_next/static/images/take_my_money-1200-d520ab87e012cf63a43d54828c138522.png",width: 1200,height: 800}],
          src: "/_next/static/images/take_my_money-320-b2985b777d4113879d8609ec2415da3f.png",
          toString:function(){return "/_next/static/images/take_my_money-320-b2985b777d4113879d8609ec2415da3f.png"},
          placeholder: undefined,
          width: 320,
          height: 213
      }

/***/ }),

/***/ "bIlT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SocialLinks = props => {
  return __jsx("ul", {
    className: "flex flex-wrap " + props.ulClassNames
  }, __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://www.meetup.com/801labs/",
    rel: "noopener",
    target: "_blank",
    title: "Meetup"
  }, __jsx("span", {
    className: "sr-only"
  }, "Meetup"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMeetup"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://discord.com/Un3gXVs",
    rel: "noopener",
    target: "_blank",
    title: "Discord"
  }, __jsx("span", {
    className: "sr-only"
  }, "Discord"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDiscord"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://twitter.com/801labs",
    rel: "noopener",
    target: "_blank",
    title: "Twitter"
  }, __jsx("span", {
    className: "sr-only"
  }, "Twitter"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitterSquare"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://www.youtube.com/c/801LabsSaltLakeCity",
    rel: "noopener",
    target: "_blank",
    title: "YouTube"
  }, __jsx("span", {
    className: "sr-only"
  }, "YouTube"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faYoutube"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://slack.801labs.org/",
    rel: "noopener",
    target: "_blank",
    title: "Slack"
  }, __jsx("span", {
    className: "sr-only"
  }, "Slack"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSlack"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://github.com/801labs/",
    rel: "noopener",
    target: "_blank",
    title: "GitHub"
  }, __jsx("span", {
    className: "sr-only"
  }, "GitHub"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
    size: props.size
  }))), __jsx("li", {
    className: props.liClassNames
  }, __jsx("a", {
    className: props.aClassNames,
    href: "https://fb.me/801labs",
    rel: "noopener",
    target: "_blank",
    title: "Facebook"
  }, __jsx("span", {
    className: "sr-only"
  }, "Facebook"), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"],
    size: props.size
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (SocialLinks);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cE6r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("nOHt");

var _router2 = __webpack_require__("elyg");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (true) {
    const rewriteUrlForNextExport = __webpack_require__("ddid").rewriteUrlForNextExport;

    if (childProps.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
      childProps.href = rewriteUrlForNextExport(childProps.href);
    }
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cd74":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-7-320-0f95bfaaa2af90315c4b239001372357.jpg"+" 320w"+","+"/_next/static/images/image-7-640-32c4d76dc392cdc02613511a63e1eacc.jpg"+" 640w"+","+"/_next/static/images/image-7-960-42df4021a05d405535515bce39db5ae7.jpg"+" 960w"+","+"/_next/static/images/image-7-1280-261a803ad2b561422a51c5941eda9c20.jpg"+" 1280w"+","+"/_next/static/images/image-7-1419-ceb5e88bbade733df78f2d0e7873eefd.jpg"+" 1419w",
          images:[ {path: "/_next/static/images/image-7-320-0f95bfaaa2af90315c4b239001372357.jpg",width: 320,height: 82},{path: "/_next/static/images/image-7-640-32c4d76dc392cdc02613511a63e1eacc.jpg",width: 640,height: 165},{path: "/_next/static/images/image-7-960-42df4021a05d405535515bce39db5ae7.jpg",width: 960,height: 247},{path: "/_next/static/images/image-7-1280-261a803ad2b561422a51c5941eda9c20.jpg",width: 1280,height: 329},{path: "/_next/static/images/image-7-1419-ceb5e88bbade733df78f2d0e7873eefd.jpg",width: 1419,height: 365}],
          src: "/_next/static/images/image-7-320-0f95bfaaa2af90315c4b239001372357.jpg",
          toString:function(){return "/_next/static/images/image-7-320-0f95bfaaa2af90315c4b239001372357.jpg"},
          placeholder: undefined,
          width: 320,
          height: 82
      }

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ddid":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/rewrite-url-for-export.js");

/***/ }),

/***/ "eDMQ":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img011_small-320-2a4826c954271b84c097022a5ae25837.jpg"+" 320w"+","+"/_next/static/images/img011_small-640-9333fd219973674f8cbd49a9a0a8a23a.jpg"+" 640w"+","+"/_next/static/images/img011_small-960-0cde73e696fbbbb6e8653d70d74ea06c.jpg"+" 960w"+","+"/_next/static/images/img011_small-1280-4dfe092937d61ac0492ad7907349eaa1.jpg"+" 1280w"+","+"/_next/static/images/img011_small-1900-2e4c8496e3152fa04113a650d4222d35.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img011_small-320-2a4826c954271b84c097022a5ae25837.jpg",width: 320,height: 183},{path: "/_next/static/images/img011_small-640-9333fd219973674f8cbd49a9a0a8a23a.jpg",width: 640,height: 366},{path: "/_next/static/images/img011_small-960-0cde73e696fbbbb6e8653d70d74ea06c.jpg",width: 960,height: 549},{path: "/_next/static/images/img011_small-1280-4dfe092937d61ac0492ad7907349eaa1.jpg",width: 1280,height: 732},{path: "/_next/static/images/img011_small-1900-2e4c8496e3152fa04113a650d4222d35.jpg",width: 1900,height: 1087}],
          src: "/_next/static/images/img011_small-320-2a4826c954271b84c097022a5ae25837.jpg",
          toString:function(){return "/_next/static/images/img011_small-320-2a4826c954271b84c097022a5ae25837.jpg"},
          placeholder: undefined,
          width: 320,
          height: 183
      }

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (false) {}

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (true) {
      const rewriteUrlForNextExport = __webpack_require__("P5f7").rewriteUrlForNextExport;

      return rewriteUrlForNextExport(url);
    } else {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (true) {
      const rewriteUrlForNextExport = __webpack_require__("P5f7").rewriteUrlForNextExport; // @ts-ignore this is temporarily global (attached to window)


      if (__NEXT_DATA__.nextExport) {
        as = rewriteUrlForNextExport(as);
      }
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fRLp":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-320-6608cd24ab1f96cb7c81ec798fc95093.jpg"+" 320w"+","+"/_next/static/images/virtual-tour-a-community-hackerspace-utah-640-eb727eeb827b13addb6207fb21a1be01.jpg"+" 640w"+","+"/_next/static/images/virtual-tour-a-community-hackerspace-utah-960-5041352306988c456d8cc29f69915d59.jpg"+" 960w"+","+"/_next/static/images/virtual-tour-a-community-hackerspace-utah-1180-01f108cd1b734e99ea07d7519041bbc0.jpg"+" 1180w",
          images:[ {path: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-320-6608cd24ab1f96cb7c81ec798fc95093.jpg",width: 320,height: 111},{path: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-640-eb727eeb827b13addb6207fb21a1be01.jpg",width: 640,height: 222},{path: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-960-5041352306988c456d8cc29f69915d59.jpg",width: 960,height: 334},{path: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-1180-01f108cd1b734e99ea07d7519041bbc0.jpg",width: 1180,height: 410}],
          src: "/_next/static/images/virtual-tour-a-community-hackerspace-utah-320-6608cd24ab1f96cb7c81ec798fc95093.jpg",
          toString:function(){return "/_next/static/images/virtual-tour-a-community-hackerspace-utah-320-6608cd24ab1f96cb7c81ec798fc95093.jpg"},
          placeholder: undefined,
          width: 320,
          height: 111
      }

/***/ }),

/***/ "fqIK":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/david-freitag-100-34936e05076611e5c0352049d2085e40.jpg"+" 100w",
          images:[ {path: "/_next/static/images/david-freitag-100-34936e05076611e5c0352049d2085e40.jpg",width: 100,height: 100}],
          src: "/_next/static/images/david-freitag-100-34936e05076611e5c0352049d2085e40.jpg",
          toString:function(){return "/_next/static/images/david-freitag-100-34936e05076611e5c0352049d2085e40.jpg"},
          placeholder: undefined,
          width: 100,
          height: 100
      }

/***/ }),

/***/ "fyoj":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/IMG_3415-320-193041b81c30ed74d7371c7140d75745.jpg"+" 320w"+","+"/_next/static/images/IMG_3415-640-d2c7ac5720a44d012629da650ec0738a.jpg"+" 640w"+","+"/_next/static/images/IMG_3415-960-1b6be528ad65bae5231c3780e7a96a91.jpg"+" 960w"+","+"/_next/static/images/IMG_3415-1280-36e9d0304baeb5853ae285b303a2a8a6.jpg"+" 1280w"+","+"/_next/static/images/IMG_3415-1900-4403650c39df25db835d06710c79f326.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/IMG_3415-320-193041b81c30ed74d7371c7140d75745.jpg",width: 320,height: 427},{path: "/_next/static/images/IMG_3415-640-d2c7ac5720a44d012629da650ec0738a.jpg",width: 640,height: 853},{path: "/_next/static/images/IMG_3415-960-1b6be528ad65bae5231c3780e7a96a91.jpg",width: 960,height: 1280},{path: "/_next/static/images/IMG_3415-1280-36e9d0304baeb5853ae285b303a2a8a6.jpg",width: 1280,height: 1707},{path: "/_next/static/images/IMG_3415-1900-4403650c39df25db835d06710c79f326.jpg",width: 1900,height: 2534}],
          src: "/_next/static/images/IMG_3415-320-193041b81c30ed74d7371c7140d75745.jpg",
          toString:function(){return "/_next/static/images/IMG_3415-320-193041b81c30ed74d7371c7140d75745.jpg"},
          placeholder: undefined,
          width: 320,
          height: 427
      }

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gEGG":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-2-320-9894c70a1ecdc8dced42563c8186b296.png"+" 320w"+","+"/_next/static/images/image-2-640-dec722267fcefb6781fa67cf88ccbf0f.png"+" 640w"+","+"/_next/static/images/image-2-701-754a39908ec0bcde0a03abab45290f1b.png"+" 701w",
          images:[ {path: "/_next/static/images/image-2-320-9894c70a1ecdc8dced42563c8186b296.png",width: 320,height: 112},{path: "/_next/static/images/image-2-640-dec722267fcefb6781fa67cf88ccbf0f.png",width: 640,height: 225},{path: "/_next/static/images/image-2-701-754a39908ec0bcde0a03abab45290f1b.png",width: 701,height: 246}],
          src: "/_next/static/images/image-2-320-9894c70a1ecdc8dced42563c8186b296.png",
          toString:function(){return "/_next/static/images/image-2-320-9894c70a1ecdc8dced42563c8186b296.png"},
          placeholder: undefined,
          width: 320,
          height: 112
      }

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gyQZ":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-5-320-9f71e4132aca9d0f73e383a3a2a21c7c.png"+" 320w"+","+"/_next/static/images/image-5-640-feea227b80a2f9e65a18c0c34d36ba90.png"+" 640w"+","+"/_next/static/images/image-5-960-60f0d3be809f45d2a7b81a086374c196.png"+" 960w"+","+"/_next/static/images/image-5-1280-b2b0cbee65eba34261df150f12bfe937.png"+" 1280w"+","+"/_next/static/images/image-5-1526-ae3bc1a20d14c752dc9dc76f9565e4fb.png"+" 1526w",
          images:[ {path: "/_next/static/images/image-5-320-9f71e4132aca9d0f73e383a3a2a21c7c.png",width: 320,height: 230},{path: "/_next/static/images/image-5-640-feea227b80a2f9e65a18c0c34d36ba90.png",width: 640,height: 460},{path: "/_next/static/images/image-5-960-60f0d3be809f45d2a7b81a086374c196.png",width: 960,height: 691},{path: "/_next/static/images/image-5-1280-b2b0cbee65eba34261df150f12bfe937.png",width: 1280,height: 921},{path: "/_next/static/images/image-5-1526-ae3bc1a20d14c752dc9dc76f9565e4fb.png",width: 1526,height: 1098}],
          src: "/_next/static/images/image-5-320-9f71e4132aca9d0f73e383a3a2a21c7c.png",
          toString:function(){return "/_next/static/images/image-5-320-9f71e4132aca9d0f73e383a3a2a21c7c.png"},
          placeholder: undefined,
          width: 320,
          height: 230
      }

/***/ }),

/***/ "h4Go":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/CredUIHTTPAuth-320-2296bf7d1cc87eefa2c464fecf3a75b5.jpg"+" 320w"+","+"/_next/static/images/CredUIHTTPAuth-459-cb9d9227acd3acafa2595f0f85aa2d3b.jpg"+" 459w",
          images:[ {path: "/_next/static/images/CredUIHTTPAuth-320-2296bf7d1cc87eefa2c464fecf3a75b5.jpg",width: 320,height: 230},{path: "/_next/static/images/CredUIHTTPAuth-459-cb9d9227acd3acafa2595f0f85aa2d3b.jpg",width: 459,height: 330}],
          src: "/_next/static/images/CredUIHTTPAuth-320-2296bf7d1cc87eefa2c464fecf3a75b5.jpg",
          toString:function(){return "/_next/static/images/CredUIHTTPAuth-320-2296bf7d1cc87eefa2c464fecf3a75b5.jpg"},
          placeholder: undefined,
          width: 320,
          height: 230
      }

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jFFz":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-17-320-de28fc030b7cd3eadf77ee9fb9523149.png"+" 320w"+","+"/_next/static/images/image-17-537-10b8b7cb789e98f90871a21d8a636aae.png"+" 537w",
          images:[ {path: "/_next/static/images/image-17-320-de28fc030b7cd3eadf77ee9fb9523149.png",width: 320,height: 452},{path: "/_next/static/images/image-17-537-10b8b7cb789e98f90871a21d8a636aae.png",width: 537,height: 759}],
          src: "/_next/static/images/image-17-320-de28fc030b7cd3eadf77ee9fb9523149.png",
          toString:function(){return "/_next/static/images/image-17-320-de28fc030b7cd3eadf77ee9fb9523149.png"},
          placeholder: undefined,
          width: 320,
          height: 452
      }

/***/ }),

/***/ "jHLi":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-1-320-64ec33fbd9fa9003edcbbd6f0f136fed.jpg"+" 320w"+","+"/_next/static/images/image-1-640-fcd402bb3217fee53df69005a98766dc.jpg"+" 640w"+","+"/_next/static/images/image-1-960-f25f4dad32948300d9c091210f6dbf8e.jpg"+" 960w"+","+"/_next/static/images/image-1-1280-d2fe697c2a01909aa86e3f086167fabe.jpg"+" 1280w"+","+"/_next/static/images/image-1-1282-30b37b4fc30e2043cc7b05243fbe61f6.jpg"+" 1282w",
          images:[ {path: "/_next/static/images/image-1-320-64ec33fbd9fa9003edcbbd6f0f136fed.jpg",width: 320,height: 484},{path: "/_next/static/images/image-1-640-fcd402bb3217fee53df69005a98766dc.jpg",width: 640,height: 969},{path: "/_next/static/images/image-1-960-f25f4dad32948300d9c091210f6dbf8e.jpg",width: 960,height: 1453},{path: "/_next/static/images/image-1-1280-d2fe697c2a01909aa86e3f086167fabe.jpg",width: 1280,height: 1938},{path: "/_next/static/images/image-1-1282-30b37b4fc30e2043cc7b05243fbe61f6.jpg",width: 1282,height: 1941}],
          src: "/_next/static/images/image-1-320-64ec33fbd9fa9003edcbbd6f0f136fed.jpg",
          toString:function(){return "/_next/static/images/image-1-320-64ec33fbd9fa9003edcbbd6f0f136fed.jpg"},
          placeholder: undefined,
          width: 320,
          height: 484
      }

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "m076":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/chrome_2018-11-14_11-31-28-320-efc8d9ece3a0f52fae5b345750f690d3.png"+" 320w"+","+"/_next/static/images/chrome_2018-11-14_11-31-28-640-77b67aad47b27fb0d71b48a75b78c176.png"+" 640w"+","+"/_next/static/images/chrome_2018-11-14_11-31-28-960-d03e337772f6107d9933fa8d4d664f08.png"+" 960w"+","+"/_next/static/images/chrome_2018-11-14_11-31-28-1231-1631992ecef232801c1981b1f88abd4d.png"+" 1231w",
          images:[ {path: "/_next/static/images/chrome_2018-11-14_11-31-28-320-efc8d9ece3a0f52fae5b345750f690d3.png",width: 320,height: 226},{path: "/_next/static/images/chrome_2018-11-14_11-31-28-640-77b67aad47b27fb0d71b48a75b78c176.png",width: 640,height: 452},{path: "/_next/static/images/chrome_2018-11-14_11-31-28-960-d03e337772f6107d9933fa8d4d664f08.png",width: 960,height: 678},{path: "/_next/static/images/chrome_2018-11-14_11-31-28-1231-1631992ecef232801c1981b1f88abd4d.png",width: 1231,height: 869}],
          src: "/_next/static/images/chrome_2018-11-14_11-31-28-320-efc8d9ece3a0f52fae5b345750f690d3.png",
          toString:function(){return "/_next/static/images/chrome_2018-11-14_11-31-28-320-efc8d9ece3a0f52fae5b345750f690d3.png"},
          placeholder: undefined,
          width: 320,
          height: 226
      }

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nfEi":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-320-dc46bd5e769f85dfbfaf658f5dc27543.jpg"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-640-5a452451ec88b92b45edf71f4556b767.jpg"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-960-281512f663ed4a2122275d2036395f9e.jpg"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-1280-b8f17c57c2b18e70d6a3fa3d07594e0d.jpg"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-1742-195b56f2963e4d18b185d61d1cabc660.jpg"+" 1742w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-320-dc46bd5e769f85dfbfaf658f5dc27543.jpg",width: 320,height: 331},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-640-5a452451ec88b92b45edf71f4556b767.jpg",width: 640,height: 663},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-960-281512f663ed4a2122275d2036395f9e.jpg",width: 960,height: 994},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-1280-b8f17c57c2b18e70d6a3fa3d07594e0d.jpg",width: 1280,height: 1326},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-1742-195b56f2963e4d18b185d61d1cabc660.jpg",width: 1742,height: 1804}],
          src: "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-320-dc46bd5e769f85dfbfaf658f5dc27543.jpg",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-25-at-4.26.26-PM-320-dc46bd5e769f85dfbfaf658f5dc27543.jpg"},
          placeholder: undefined,
          width: 320,
          height: 331
      }

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "p59j":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-320-d33826bef02ee6c44917f2cf8436354d.jpg"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-640-43564c6827d0d4bda070234608ee73bd.jpg"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-960-b13dd723c0ad7c30b12412adcf3627fb.jpg"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-1280-28b4b73b5a76f960e5bccd185b7c40e9.jpg"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-1816-1e02ea3dd1bad600bf41607b57cd42cd.jpg"+" 1816w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-320-d33826bef02ee6c44917f2cf8436354d.jpg",width: 320,height: 169},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-640-43564c6827d0d4bda070234608ee73bd.jpg",width: 640,height: 338},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-960-b13dd723c0ad7c30b12412adcf3627fb.jpg",width: 960,height: 507},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-1280-28b4b73b5a76f960e5bccd185b7c40e9.jpg",width: 1280,height: 677},{path: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-1816-1e02ea3dd1bad600bf41607b57cd42cd.jpg",width: 1816,height: 960}],
          src: "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-320-d33826bef02ee6c44917f2cf8436354d.jpg",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-26-at-10.24.57-AM-320-d33826bef02ee6c44917f2cf8436354d.jpg"},
          placeholder: undefined,
          width: 320,
          height: 169
      }

/***/ }),

/***/ "pzDs":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-320-71fb11f16f5a0744f83c6d740370031e.jpg"+" 320w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-640-99a0e2ddbeef57b100f67eb6076bc15b.jpg"+" 640w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-960-172671a4fe77d762ee7b350b2e46c0a1.jpg"+" 960w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-1280-81fae8a5678a5e2194a60adfade220a1.jpg"+" 1280w"+","+"/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-1900-c4395dbbe053ebf3ac0c0e757038c88c.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-320-71fb11f16f5a0744f83c6d740370031e.jpg",width: 320,height: 80},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-640-99a0e2ddbeef57b100f67eb6076bc15b.jpg",width: 640,height: 160},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-960-172671a4fe77d762ee7b350b2e46c0a1.jpg",width: 960,height: 240},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-1280-81fae8a5678a5e2194a60adfade220a1.jpg",width: 1280,height: 319},{path: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-1900-c4395dbbe053ebf3ac0c0e757038c88c.jpg",width: 1900,height: 474}],
          src: "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-320-71fb11f16f5a0744f83c6d740370031e.jpg",
          toString:function(){return "/_next/static/images/Screen-Shot-2018-12-25-at-4.13.02-PM-320-71fb11f16f5a0744f83c6d740370031e.jpg"},
          placeholder: undefined,
          width: 320,
          height: 80
      }

/***/ }),

/***/ "qN1x":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-11-320-b9851445719ff2ab6ce930e2bd7b7e20.jpg"+" 320w"+","+"/_next/static/images/image-11-640-e0b4020a44961c30b01fffca6be2c212.jpg"+" 640w"+","+"/_next/static/images/image-11-960-65c1af578d53d622585df957a7f637f2.jpg"+" 960w"+","+"/_next/static/images/image-11-1280-2c05dc018f3493c6f7e74f330d78b801.jpg"+" 1280w"+","+"/_next/static/images/image-11-1412-e5ba912c4e28d397241535bb3e8dc0a7.jpg"+" 1412w",
          images:[ {path: "/_next/static/images/image-11-320-b9851445719ff2ab6ce930e2bd7b7e20.jpg",width: 320,height: 60},{path: "/_next/static/images/image-11-640-e0b4020a44961c30b01fffca6be2c212.jpg",width: 640,height: 120},{path: "/_next/static/images/image-11-960-65c1af578d53d622585df957a7f637f2.jpg",width: 960,height: 179},{path: "/_next/static/images/image-11-1280-2c05dc018f3493c6f7e74f330d78b801.jpg",width: 1280,height: 239},{path: "/_next/static/images/image-11-1412-e5ba912c4e28d397241535bb3e8dc0a7.jpg",width: 1412,height: 264}],
          src: "/_next/static/images/image-11-320-b9851445719ff2ab6ce930e2bd7b7e20.jpg",
          toString:function(){return "/_next/static/images/image-11-320-b9851445719ff2ab6ce930e2bd7b7e20.jpg"},
          placeholder: undefined,
          width: 320,
          height: 60
      }

/***/ }),

/***/ "qUJG":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-10-320-67d48816ae948e9806abb7caa5f4d5ac.jpg"+" 320w"+","+"/_next/static/images/image-10-640-eda17d4bbd9f36c86fc2da414804c76b.jpg"+" 640w"+","+"/_next/static/images/image-10-960-a01f53c2df53f2f992abafa84a272086.jpg"+" 960w"+","+"/_next/static/images/image-10-1280-1644ec913945a5c4086383db8cfa7d50.jpg"+" 1280w"+","+"/_next/static/images/image-10-1409-a3bd6f854899154c7ef7d1f5a9b0d20a.jpg"+" 1409w",
          images:[ {path: "/_next/static/images/image-10-320-67d48816ae948e9806abb7caa5f4d5ac.jpg",width: 320,height: 141},{path: "/_next/static/images/image-10-640-eda17d4bbd9f36c86fc2da414804c76b.jpg",width: 640,height: 282},{path: "/_next/static/images/image-10-960-a01f53c2df53f2f992abafa84a272086.jpg",width: 960,height: 422},{path: "/_next/static/images/image-10-1280-1644ec913945a5c4086383db8cfa7d50.jpg",width: 1280,height: 563},{path: "/_next/static/images/image-10-1409-a3bd6f854899154c7ef7d1f5a9b0d20a.jpg",width: 1409,height: 620}],
          src: "/_next/static/images/image-10-320-67d48816ae948e9806abb7caa5f4d5ac.jpg",
          toString:function(){return "/_next/static/images/image-10-320-67d48816ae948e9806abb7caa5f4d5ac.jpg"},
          placeholder: undefined,
          width: 320,
          height: 141
      }

/***/ }),

/***/ "qV22":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/location-salt-lake-city-320-1850865a3ebef551c3b9e85b9cbe3356.jpg"+" 320w"+","+"/_next/static/images/location-salt-lake-city-605-39a79f99b84066113f5611ee0192537e.jpg"+" 605w",
          images:[ {path: "/_next/static/images/location-salt-lake-city-320-1850865a3ebef551c3b9e85b9cbe3356.jpg",width: 320,height: 175},{path: "/_next/static/images/location-salt-lake-city-605-39a79f99b84066113f5611ee0192537e.jpg",width: 605,height: 330}],
          src: "/_next/static/images/location-salt-lake-city-320-1850865a3ebef551c3b9e85b9cbe3356.jpg",
          toString:function(){return "/_next/static/images/location-salt-lake-city-320-1850865a3ebef551c3b9e85b9cbe3356.jpg"},
          placeholder: undefined,
          width: 320,
          height: 175
      }

/***/ }),

/***/ "qdL/":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/bashNinja-250-74be03f3010fc2a585b2f530f3012ede.jpeg"+" 250w",
          images:[ {path: "/_next/static/images/bashNinja-250-74be03f3010fc2a585b2f530f3012ede.jpeg",width: 250,height: 250}],
          src: "/_next/static/images/bashNinja-250-74be03f3010fc2a585b2f530f3012ede.jpeg",
          toString:function(){return "/_next/static/images/bashNinja-250-74be03f3010fc2a585b2f530f3012ede.jpeg"},
          placeholder: undefined,
          width: 250,
          height: 250
      }

/***/ }),

/***/ "tUTl":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/th3v0id-100-7e0a4d7158243ebe6a422f42fe9c47b3.jpg"+" 100w",
          images:[ {path: "/_next/static/images/th3v0id-100-7e0a4d7158243ebe6a422f42fe9c47b3.jpg",width: 100,height: 100}],
          src: "/_next/static/images/th3v0id-100-7e0a4d7158243ebe6a422f42fe9c47b3.jpg",
          toString:function(){return "/_next/static/images/th3v0id-100-7e0a4d7158243ebe6a422f42fe9c47b3.jpg"},
          placeholder: undefined,
          width: 100,
          height: 100
      }

/***/ }),

/***/ "uG2Z":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-3-320-83b5f4c59a04cd3bd062e0e02fba8473.jpg"+" 320w"+","+"/_next/static/images/image-3-640-8566a8be16021e04b6108bb827a77485.jpg"+" 640w"+","+"/_next/static/images/image-3-960-b9296320d64fbf99877696282e83875a.jpg"+" 960w"+","+"/_next/static/images/image-3-1280-bd3cdb397e051a3b7c196e0fce19804d.jpg"+" 1280w"+","+"/_next/static/images/image-3-1900-305d98fa95c779b883251cb2ab80e655.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/image-3-320-83b5f4c59a04cd3bd062e0e02fba8473.jpg",width: 320,height: 55},{path: "/_next/static/images/image-3-640-8566a8be16021e04b6108bb827a77485.jpg",width: 640,height: 109},{path: "/_next/static/images/image-3-960-b9296320d64fbf99877696282e83875a.jpg",width: 960,height: 164},{path: "/_next/static/images/image-3-1280-bd3cdb397e051a3b7c196e0fce19804d.jpg",width: 1280,height: 219},{path: "/_next/static/images/image-3-1900-305d98fa95c779b883251cb2ab80e655.jpg",width: 1900,height: 325}],
          src: "/_next/static/images/image-3-320-83b5f4c59a04cd3bd062e0e02fba8473.jpg",
          toString:function(){return "/_next/static/images/image-3-320-83b5f4c59a04cd3bd062e0e02fba8473.jpg"},
          placeholder: undefined,
          width: 320,
          height: 55
      }

/***/ }),

/***/ "uIh4":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-320-a6201439dbd8cb714b289103defd2d5d.jpg"+" 320w"+","+"/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-640-c6fb7bdaa83cc758822e7b2e1e7bef6e.jpg"+" 640w"+","+"/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-960-0be51e90da50645934505dd3871ec35e.jpg"+" 960w"+","+"/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-1280-176d1300383b319952fd7910c452db89.jpg"+" 1280w"+","+"/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-1900-5f7aa7a38c5b0ee02c170ed37fd174df.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-320-a6201439dbd8cb714b289103defd2d5d.jpg",width: 320,height: 427},{path: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-640-c6fb7bdaa83cc758822e7b2e1e7bef6e.jpg",width: 640,height: 853},{path: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-960-0be51e90da50645934505dd3871ec35e.jpg",width: 960,height: 1280},{path: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-1280-176d1300383b319952fd7910c452db89.jpg",width: 1280,height: 1707},{path: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-1900-5f7aa7a38c5b0ee02c170ed37fd174df.jpg",width: 1900,height: 2534}],
          src: "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-320-a6201439dbd8cb714b289103defd2d5d.jpg",
          toString:function(){return "/_next/static/images/A7B65125-AF02-44C0-8FBF-0D2D0236161F-1-320-a6201439dbd8cb714b289103defd2d5d.jpg"},
          placeholder: undefined,
          width: 320,
          height: 427
      }

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "uk92":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-12-320-d1966be191cd8ff97b1de754205a53f6.png"+" 320w"+","+"/_next/static/images/image-12-640-7ac4050f1cabe061e9d92f51ba8183d4.png"+" 640w"+","+"/_next/static/images/image-12-960-76613eb890590382850204172f834a17.png"+" 960w"+","+"/_next/static/images/image-12-1202-2eaa563435bd2988934a22787a3953ed.png"+" 1202w",
          images:[ {path: "/_next/static/images/image-12-320-d1966be191cd8ff97b1de754205a53f6.png",width: 320,height: 100},{path: "/_next/static/images/image-12-640-7ac4050f1cabe061e9d92f51ba8183d4.png",width: 640,height: 199},{path: "/_next/static/images/image-12-960-76613eb890590382850204172f834a17.png",width: 960,height: 299},{path: "/_next/static/images/image-12-1202-2eaa563435bd2988934a22787a3953ed.png",width: 1202,height: 374}],
          src: "/_next/static/images/image-12-320-d1966be191cd8ff97b1de754205a53f6.png",
          toString:function(){return "/_next/static/images/image-12-320-d1966be191cd8ff97b1de754205a53f6.png"},
          placeholder: undefined,
          width: 320,
          height: 100
      }

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vrlz":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-5-320-721deedd516aff7bed9f78aa10798d92.jpg"+" 320w"+","+"/_next/static/images/image-5-640-e123c205fff9296936612e38fd0bc630.jpg"+" 640w"+","+"/_next/static/images/image-5-667-f7da29490a766a0aeede1a1e52d89a57.jpg"+" 667w",
          images:[ {path: "/_next/static/images/image-5-320-721deedd516aff7bed9f78aa10798d92.jpg",width: 320,height: 155},{path: "/_next/static/images/image-5-640-e123c205fff9296936612e38fd0bc630.jpg",width: 640,height: 310},{path: "/_next/static/images/image-5-667-f7da29490a766a0aeede1a1e52d89a57.jpg",width: 667,height: 323}],
          src: "/_next/static/images/image-5-320-721deedd516aff7bed9f78aa10798d92.jpg",
          toString:function(){return "/_next/static/images/image-5-320-721deedd516aff7bed9f78aa10798d92.jpg"},
          placeholder: undefined,
          width: 320,
          height: 155
      }

/***/ }),

/***/ "w7NK":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-279-d85cc456a8181a18a87726eb7bd99467.png"+" 279w",
          images:[ {path: "/_next/static/images/image-279-d85cc456a8181a18a87726eb7bd99467.png",width: 279,height: 361}],
          src: "/_next/static/images/image-279-d85cc456a8181a18a87726eb7bd99467.png",
          toString:function(){return "/_next/static/images/image-279-d85cc456a8181a18a87726eb7bd99467.png"},
          placeholder: undefined,
          width: 279,
          height: 361
      }

/***/ }),

/***/ "wI+S":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/parking-birds-eye-view-320-1b9c79ed6f0b7fc9a69c558100521150.jpg"+" 320w"+","+"/_next/static/images/parking-birds-eye-view-607-ea4dfe473c073250361311272102e88d.jpg"+" 607w",
          images:[ {path: "/_next/static/images/parking-birds-eye-view-320-1b9c79ed6f0b7fc9a69c558100521150.jpg",width: 320,height: 183},{path: "/_next/static/images/parking-birds-eye-view-607-ea4dfe473c073250361311272102e88d.jpg",width: 607,height: 347}],
          src: "/_next/static/images/parking-birds-eye-view-320-1b9c79ed6f0b7fc9a69c558100521150.jpg",
          toString:function(){return "/_next/static/images/parking-birds-eye-view-320-1b9c79ed6f0b7fc9a69c558100521150.jpg"},
          placeholder: undefined,
          width: 320,
          height: 183
      }

/***/ }),

/***/ "x4PV":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-14-320-be74d3808a6b368bf06516718f323e8e.png"+" 320w"+","+"/_next/static/images/image-14-640-5669004b51398bf8e166105261cd4528.png"+" 640w"+","+"/_next/static/images/image-14-896-e7a36449ff8443b92cad955f111e372d.png"+" 896w",
          images:[ {path: "/_next/static/images/image-14-320-be74d3808a6b368bf06516718f323e8e.png",width: 320,height: 127},{path: "/_next/static/images/image-14-640-5669004b51398bf8e166105261cd4528.png",width: 640,height: 254},{path: "/_next/static/images/image-14-896-e7a36449ff8443b92cad955f111e372d.png",width: 896,height: 356}],
          src: "/_next/static/images/image-14-320-be74d3808a6b368bf06516718f323e8e.png",
          toString:function(){return "/_next/static/images/image-14-320-be74d3808a6b368bf06516718f323e8e.png"},
          placeholder: undefined,
          width: 320,
          height: 127
      }

/***/ }),

/***/ "xA9m":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/img015_small-320-c12eba37ed4685f2620b7c65a2556de6.jpg"+" 320w"+","+"/_next/static/images/img015_small-640-c50125c9f5472daf4d1e7a7e1193b4c2.jpg"+" 640w"+","+"/_next/static/images/img015_small-960-7e750a1de63ca29ecda3a364aa677b28.jpg"+" 960w"+","+"/_next/static/images/img015_small-1280-1396a36acfa309234c23640b1c8c86d6.jpg"+" 1280w"+","+"/_next/static/images/img015_small-1900-0ea1236e6dae73129f80d9c914661212.jpg"+" 1900w",
          images:[ {path: "/_next/static/images/img015_small-320-c12eba37ed4685f2620b7c65a2556de6.jpg",width: 320,height: 186},{path: "/_next/static/images/img015_small-640-c50125c9f5472daf4d1e7a7e1193b4c2.jpg",width: 640,height: 373},{path: "/_next/static/images/img015_small-960-7e750a1de63ca29ecda3a364aa677b28.jpg",width: 960,height: 559},{path: "/_next/static/images/img015_small-1280-1396a36acfa309234c23640b1c8c86d6.jpg",width: 1280,height: 746},{path: "/_next/static/images/img015_small-1900-0ea1236e6dae73129f80d9c914661212.jpg",width: 1900,height: 1107}],
          src: "/_next/static/images/img015_small-320-c12eba37ed4685f2620b7c65a2556de6.jpg",
          toString:function(){return "/_next/static/images/img015_small-320-c12eba37ed4685f2620b7c65a2556de6.jpg"},
          placeholder: undefined,
          width: 320,
          height: 186
      }

/***/ }),

/***/ "xY5u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Image = props => {
  const image = __webpack_require__("Woiz")(`./${props.src}`);

  const {
    width,
    height
  } = image.images[image.images.length - 1];
  const imgProps = Object.assign({
    loading: 'lazy'
  }, props, {
    src: image.src,
    srcSet: image.srcSet,
    width,
    height,
    style: {
      maxWidth: `min(100%, ${width}px)`
    }
  });

  if (!('sizes' in imgProps)) {
    imgProps.sizes = '100vw';
  }

  return __jsx("img", imgProps);
};

/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yC9s":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/ugdTOpe-320-7aab7f309157675eaf6e8de8294fb6e9.jpg"+" 320w"+","+"/_next/static/images/ugdTOpe-640-1eb3d51b015d33820c1f92d550709da4.jpg"+" 640w"+","+"/_next/static/images/ugdTOpe-960-b8edd84f594d72ef3543294bb6f03192.jpg"+" 960w"+","+"/_next/static/images/ugdTOpe-1280-cc0b957f3e65895de8467296a004e98f.jpg"+" 1280w"+","+"/_next/static/images/ugdTOpe-1305-929fca021e4271936284a0ad1a2cc3c1.jpg"+" 1305w",
          images:[ {path: "/_next/static/images/ugdTOpe-320-7aab7f309157675eaf6e8de8294fb6e9.jpg",width: 320,height: 316},{path: "/_next/static/images/ugdTOpe-640-1eb3d51b015d33820c1f92d550709da4.jpg",width: 640,height: 633},{path: "/_next/static/images/ugdTOpe-960-b8edd84f594d72ef3543294bb6f03192.jpg",width: 960,height: 949},{path: "/_next/static/images/ugdTOpe-1280-cc0b957f3e65895de8467296a004e98f.jpg",width: 1280,height: 1265},{path: "/_next/static/images/ugdTOpe-1305-929fca021e4271936284a0ad1a2cc3c1.jpg",width: 1305,height: 1290}],
          src: "/_next/static/images/ugdTOpe-320-7aab7f309157675eaf6e8de8294fb6e9.jpg",
          toString:function(){return "/_next/static/images/ugdTOpe-320-7aab7f309157675eaf6e8de8294fb6e9.jpg"},
          placeholder: undefined,
          width: 320,
          height: 316
      }

/***/ }),

/***/ "zadq":
/***/ (function(module, exports) {

module.exports = {
          srcSet: "/_next/static/images/image-15-320-c61aa7b1c55112861393730dba7ee82f.png"+" 320w"+","+"/_next/static/images/image-15-626-ecb852feed81b5efbdbe30abdf1b1a06.png"+" 626w",
          images:[ {path: "/_next/static/images/image-15-320-c61aa7b1c55112861393730dba7ee82f.png",width: 320,height: 353},{path: "/_next/static/images/image-15-626-ecb852feed81b5efbdbe30abdf1b1a06.png",width: 626,height: 690}],
          src: "/_next/static/images/image-15-320-c61aa7b1c55112861393730dba7ee82f.png",
          toString:function(){return "/_next/static/images/image-15-320-c61aa7b1c55112861393730dba7ee82f.png"},
          placeholder: undefined,
          width: 320,
          height: 353
      }

/***/ })

/******/ });