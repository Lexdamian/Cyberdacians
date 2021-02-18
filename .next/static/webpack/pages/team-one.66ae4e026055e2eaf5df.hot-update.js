webpackHotUpdate_N_E("pages/team-one",{

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SideDrawer */ "./components/Layouts/SideDrawer.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchForm */ "./components/Layouts/SearchForm.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Navbar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar, _React$Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pathname = this.props.router.pathname;
      var products = this.props.products;
      var layOutCls = '';
      var logo = '/images/StageOneWhite.png';

      if (pathname == '/digital-marketing') {
        layOutCls = 'marketing-navbar';
        logo = '/images/StageOneWhite.png';
      }

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("header", {
        id: "header"
      }, __jsx("div", {
        id: "navbar",
        className: "crake-nav ".concat(layOutCls)
      }, __jsx("div", {
        className: "container"
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: logo,
        alt: "logo"
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, __jsx("span", {
        className: "navbar-toggler-icon"
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, __jsx("ul", {
        className: "navbar-nav nav ms-auto"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/software-landing"
      }, __jsx("a", null, "Home"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/team-one"
      }, __jsx("a", null, "Team"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog-two"
      }, __jsx("a", null, "Blog"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/contact"
      }, __jsx("a", {
        className: "nav-link"
      }, "Contact"))), __jsx("li", {
        className: "nav-item"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, __jsx("a", null, "Schedule Demo"))))), __jsx("div", {
        className: "ms-auto others-option"
      }, __jsx("ul", {
        className: "navbar-nav"
      }, __jsx("li", {
        className: "header-search-box"
      }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/#"
      }, __jsx("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleSearchForm();
        },
        title: "Search"
      }, __jsx("i", {
        className: "icofont-search-2"
      })))), __jsx("li", {
        onClick: this.handleDrawer
      }, __jsx("div", {
        className: "side-menu"
      }, __jsx("span", {
        className: "bar-1"
      }), __jsx("span", {
        className: "bar-2"
      }), __jsx("span", {
        className: "bar-3"
      }))))))))), this.state.drawer ? __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: this.handleDrawer
      }) : '', this.state.searchForm ? __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.handleSearchForm
      }) : '');
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Navbar)));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJkcmF3ZXIiLCJzZWFyY2hGb3JtIiwiY29sbGFwc2VkIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByZXZTdGF0ZSIsIl9pc01vdW50ZWQiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUbyIsInBhdGhuYW1lIiwicHJvcHMiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsImxheU91dENscyIsImxvZ28iLCJjbGFzc09uZSIsImNsYXNzVHdvIiwidG9nZ2xlTmF2YmFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU2VhcmNoRm9ybSIsImhhbmRsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsIndpdGhSb3V0ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7cU5BQ1csSzs7Z05BRUw7QUFDSkMsWUFBTSxFQUFFLEtBREo7QUFFSkMsZ0JBQVUsRUFBRSxLQUZSO0FBR0pDLGVBQVMsRUFBRTtBQUhQLEs7O3VOQU1PLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZELGlCQUFTLEVBQUUsQ0FBQyxNQUFLRSxLQUFMLENBQVdGO0FBRGIsT0FBZDtBQUdILEs7O3VOQUVjLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFlLFVBQUFFLFNBQVMsRUFBSTtBQUN4QixlQUFPO0FBQ0hMLGdCQUFNLEVBQUUsQ0FBQ0ssU0FBUyxDQUFDTDtBQURoQixTQUFQO0FBR0gsT0FK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QVgsR0FBd0IsTUFBQyxvREFBRDtBQUFZLGVBQU8sRUFBRSxLQUFLMkI7QUFBMUIsUUFBeEIsR0FBeUUsRUFyRjlFLENBREo7QUF5Rkg7Ozs7RUF4SmdCRSw0Q0FBSyxDQUFDQyxTOztBQTJKM0IsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDNUIsS0FBRCxFQUFTO0FBQzdCLFNBQU07QUFDRmdCLFlBQVEsRUFBRWhCLEtBQUssQ0FBQzZCO0FBRGQsR0FBTjtBQUdILENBSkQ7O0FBTWVDLDZIQUFVLENBQUNDLDJEQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QmpDLE1BQXpCLENBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS1vbmUuNjZhZTRlMDI2MDU1ZTJlYWY1ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vdXRpbHMvQWN0aXZlTGluayc7XG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9TZWFyY2hGb3JtJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBfaXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZHJhd2VyOiBmYWxzZSxcbiAgICAgICAgc2VhcmNoRm9ybTogZmFsc2UsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRyYXdlcjogIXByZXZTdGF0ZS5kcmF3ZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaEZvcm06ICFwcmV2U3RhdGUuc2VhcmNoRm9ybVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgICAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgbGF5T3V0Q2xzID0gJyc7XG4gICAgICAgIGxldCBsb2dvID0gJy9pbWFnZXMvU3RhZ2VPbmVXaGl0ZS5wbmcnO1xuICAgICAgICBpZiAocGF0aG5hbWUgPT0gJy9kaWdpdGFsLW1hcmtldGluZycpe1xuICAgICAgICAgICAgbGF5T3V0Q2xzID0gJ21hcmtldGluZy1uYXZiYXInO1xuICAgICAgICAgICAgbG9nbyA9ICcvaW1hZ2VzL1N0YWdlT25lV2hpdGUucG5nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBjbGFzc09uZSA9IGNvbGxhcHNlZCA/ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIDogJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93JztcbiAgICAgICAgY29uc3QgY2xhc3NUd28gPSBjb2xsYXBzZWQgPyAnbmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgY29sbGFwc2VkJyA6ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT17YGNyYWtlLW5hdiAke2xheU91dENsc31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU5hdmJhcn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc09uZX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBuYXYgbXMtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiLyNcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+SG9tZTwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIi9zb2Z0d2FyZS1sYW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIi90ZWFtLW9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UZWFtPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiL2Jsb2ctdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJsb2c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TY2hlZHVsZSBEZW1vPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtYXV0byBvdGhlcnMtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiLyNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTt0aGlzLmhhbmRsZVNlYXJjaEZvcm0oKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29mb250LXNlYXJjaC0yXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5oYW5kbGVEcmF3ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLTFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXItMlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci0zXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZHJhd2VyID8gPFNpZGVEcmF3ZXIgb25DbGljaz17dGhpcy5oYW5kbGVEcmF3ZXJ9IC8+IDogJyd9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoRm9ybSA/IDxTZWFyY2hGb3JtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoRm9ybX0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpPT57XG4gICAgcmV0dXJue1xuICAgICAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=