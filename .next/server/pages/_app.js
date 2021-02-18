module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoTop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class GoTop extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return __jsx("div", {
      className: "back-to-top show-back-to-top"
    }, is_visible && __jsx("div", {
      className: "top",
      onClick: () => this.scrollToTop()
    }, "TOP"));
  }

}

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Loader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "preloader-area"
    }, __jsx("div", {
      className: "lds-hourglass"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/icofont.min.css */ "./public/css/icofont.min.css");
/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/animate.css */ "./public/css/animate.css");
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-preloading-screen */ "react-preloading-screen");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_14__["initStore"])(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_11___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, "Mojosa - React Next Landing Page Templates"), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), __jsx("meta", {
      name: "description",
      content: "Mojosa - React Next Landing Page Templates"
    }), __jsx("meta", {
      name: "og:title",
      property: "og:title",
      content: "Mojosa - React Next Landing Page Templates"
    }), __jsx("meta", {
      name: "twitter:card",
      content: "Mojosa - React Next Landing Page Templates"
    }), __jsx("link", {
      rel: "canonical",
      href: "https://mojosa-react.envytheme.com/"
    })), __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__["Preloader"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
      store: store
    }, __jsx(Component, pageProps)), __jsx(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__["default"], {
      scrollStepInPx: "50",
      delayInMs: "16.66"
    }), __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__["Placeholder"], null, __jsx(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
  }

}));

/***/ }),

/***/ "./public/css/animate.css":
/*!********************************!*\
  !*** ./public/css/animate.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/icofont.min.css":
/*!************************************!*\
  !*** ./public/css/icofont.min.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initState = {
  products: [{
    id: 1,
    title: "Drop Side Watch",
    price: 350,
    image: "/images/shop-item1.jpg"
  }, {
    id: 2,
    title: "Drop Side Watch",
    price: 120,
    image: "/images/shop-item2.jpg"
  }, {
    id: 3,
    title: "Drop Side Watch",
    price: 160,
    image: "/images/shop-item3.jpg"
  }, {
    id: 4,
    title: "Drop Side Watch",
    price: 130,
    image: "/images/shop-item4.jpg"
  }, {
    id: 5,
    title: "Drop Side Watch",
    price: 90,
    image: "/images/shop-item5.jpg"
  }, {
    id: 6,
    title: "Drop Side Watch",
    price: 180,
    image: "/images/shop-item6.jpg"
  }, {
    id: 7,
    title: "Drop Side Watch",
    price: 330,
    image: "/images/shop-item1.jpg"
  }, {
    id: 8,
    title: "Drop Side Watch",
    price: 140,
    image: "/images/shop-item2.jpg"
  }, {
    id: 9,
    title: "Drop Side Watch",
    price: 430,
    image: "/images/shop-item3.jpg"
  }, {
    id: 10,
    title: "Drop Side Watch",
    price: 650,
    image: "/images/shop-item4.jpg"
  }, {
    id: 11,
    title: "Drop Side Watch",
    price: 230,
    image: "/images/shop-item5.jpg"
  }, {
    id: 12,
    title: "Drop Side Watch",
    price: 670,
    image: "/images/shop-item6.jpg"
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXByZWxvYWRpbmctc2NyZWVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc192aXNpYmxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxDb21wb25lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2V0U3RhdGUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW5kZXIiLCJMb2FkZXIiLCJSZWFjdCIsInBhZ2VQcm9wcyIsImNvbXBvbmVudERpZENhdGNoIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsIk15QXBwIiwic3RvcmUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJpbml0U3RhdGUiLCJwcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwic2hpcHBpbmciLCJjYXJ0UmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJhZGRlZEl0ZW0iLCJmaW5kIiwiaXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwibmV3VG90YWwiLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNv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RyxDQUFDa0MsWUFBWSxHQUFHdEIsU0FBaEIsS0FBOEI7QUFDbkQsU0FBT3VCLHlEQUFXLENBQ2RkLFdBRGMsRUFFZGEsWUFGYyxFQUdkRSxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FITCxDQUFsQjtBQUtILENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TlAsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIHNjcm9sbENvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc2Nyb2xsQ29tcG9uZW50LnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc192aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc192aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcCBzaG93LWJhY2stdG8tdG9wXCI+XG4gICAgICAgICAgICAgICAge2lzX3Zpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2Nyb2xsVG9Ub3AoKX0+VE9QPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRlci1hcmVhXCI+XG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtaG91cmdsYXNzXCI+PC9kaXY+XG5cdFx0ICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2ljb2ZvbnQubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vc2Nzcy9tb2RhbC12aWRlby5zY3NzJztcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcbmltcG9ydCAncmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9yZXNwb25zaXZlLmNzcyc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUHJlbG9hZGVyLCBQbGFjZWhvbGRlciB9IGZyb20gJ3JlYWN0LXByZWxvYWRpbmctc2NyZWVuJztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXInO1xuXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXInOyBcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoXG4gICAgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICAgICAgICByZW5kZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk1vam9zYSAtIFJlYWN0IE5leHQgTGFuZGluZyBQYWdlIFRlbXBsYXRlczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1vam9zYSAtIFJlYWN0IE5leHQgTGFuZGluZyBQYWdlIFRlbXBsYXRlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1vam9zYSAtIFJlYWN0IE5leHQgTGFuZGluZyBQYWdlIFRlbXBsYXRlc1wiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiTW9qb3NhIC0gUmVhY3QgTmV4dCBMYW5kaW5nIFBhZ2UgVGVtcGxhdGVzXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbW9qb3NhLXJlYWN0LmVudnl0aGVtZS5jb20vXCI+PC9saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gXG4gICAgICAgICAgICAgICAgICAgIDxQcmVsb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCI1MFwiIGRlbGF5SW5Ncz1cIjE2LjY2XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJlbG9hZGVyPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuKSIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCB7IFxuICAgIEFERF9UT19DQVJULFxuICAgIFJFTU9WRV9JVEVNLFxuICAgIFNVQl9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFksIFxuICAgIEFERF9TSElQUElORyxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgUkVTRVRfQ0FSVFxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMnXG5cbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDM1MCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDEyMCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMi5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDE2MCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMy5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDEzMCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtNC5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDkwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW01LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXG4gICAgICAgICAgICBwcmljZTogMTgwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW02LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXG4gICAgICAgICAgICBwcmljZTogMzMwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0xLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXG4gICAgICAgICAgICBwcmljZTogMTQwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0yLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXG4gICAgICAgICAgICBwcmljZTogNDMwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0zLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxuICAgICAgICAgICAgcHJpY2U6IDY1MCxcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtNC5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcbiAgICAgICAgICAgIHByaWNlOiAyMzAsXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nob3AtaXRlbTUuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXG4gICAgICAgICAgICBwcmljZTogNjcwLFxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW02LmpwZ1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGFkZGVkSXRlbXM6W10sXG4gICAgdG90YWw6IDAsXG4gICAgc2hpcHBpbmc6IDBcbn1cblxuY29uc3QgY2FydFJlZHVjZXI9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFTU9WRV9JVEVNKXtcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFNVQl9RVUFOVElUWSl7ICBcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSA2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBzaGlwcGluZzogMFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdFN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICBjYXJ0UmVkdWNlcixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICAgIClcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXByZWxvYWRpbmctc2NyZWVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9