webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/themes/Layout.tsx":
/*!*******************************!*\
  !*** ./src/themes/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\themes\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      reload = _useState2[0],
      setReload = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    refreshPage();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!mainPage.some(function (section) {
      return router.asPath === section || router.asPath === "".concat("/snap-out").concat(section);
    })) {
      setMenuActive(false);
      setReload(true);
    } else {
      setMenuActive(true);
    }
  }, [router.asPath]);

  var refreshPage = /*#__PURE__*/function () {
    var _ref2 = Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var localFirsLoad;
      return F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return localStorage.getItem('firstLoad');

            case 2:
              localFirsLoad = _context.sent;

              if (localFirsLoad) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return localStorage.setItem('firstLoad', 'false');

            case 6:
              router.reload();
              _context.next = 10;
              break;

            case 9:
              if (reload) {
                setReload(false);
                router.reload();
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function refreshPage() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2EsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZWZyZXNoUGFnZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IChcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbiB8fFxyXG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke3NlY3Rpb259YFxyXG4gICAgICAgICkpKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFJlbG9hZCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgcmVmcmVzaFBhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgIGlmICghbG9jYWxGaXJzTG9hZCkge1xyXG4gICAgICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWxvYWQpIHtcclxuICAgICAgICAgICAgc2V0UmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAge2AgaHRtbCB7IHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9YH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX0gLz5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgIGltZ1VybD17XCIvXCJ9XHJcbiAgICAgICAgICAgICAgICBpbWdQYXRoPXtcImFzc2V0cy9pbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlPXttZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      menuActive: menuActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      imgUrl: "/",
      imgPath: "assets/img/svg/logo-snap-out.svg",
      menuActive: menuActive,
      menuItems: [{
        url: "#",
        name: "Home"
      }, {
        url: "#aboutSnapOut",
        name: "Sulla Band"
      }, {
        url: "#members",
        name: "Membri"
      }, {
        url: "#events",
        name: "Eventi"
      }, {
        url: "#media",
        name: "Media"
      }, {
        url: "#contact",
        name: "Contatto"
      }] // newsLetterPopupMessage={"Sign up for our mailing list"}
      // newsLetterMessage={"Sign up for our mailing list"}
      // emailPlaceholderText={"Your email address.."}
      ,
      copyrightUrl: "#",
      copyrightName: "Wymaze Srl"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(Layout, "dbMZMHItwR8/RAzeneGT9qcu1j8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwicmVsb2FkIiwic2V0UmVsb2FkIiwidXNlRWZmZWN0IiwicmVmcmVzaFBhZ2UiLCJzb21lIiwic2VjdGlvbiIsImFzUGF0aCIsInByb2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxGaXJzTG9hZCIsInNldEl0ZW0iLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7O0FBRm9DLGtCQUdBQyxzREFBUSxDQUFDLElBQUQsQ0FIUjtBQUFBLE1BRzdCQyxVQUg2QjtBQUFBLE1BR2pCQyxhQUhpQjs7QUFBQSxtQkFJUkYsc0RBQVEsQ0FBQyxLQUFELENBSkE7QUFBQSxNQUk3QkcsTUFKNkI7QUFBQSxNQUlyQkMsU0FKcUI7O0FBTXBDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZUFBVztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUQseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDTixRQUFRLENBQUNRLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFDdEJYLE1BQU0sQ0FBQ1ksTUFBUCxLQUFrQkQsT0FBbEIsSUFDQVgsTUFBTSxDQUFDWSxNQUFQLGVBQXFCQyxXQUFyQixTQUErQ0YsT0FBL0MsQ0FGc0I7QUFBQSxLQUFyQixDQUFMLEVBR0k7QUFDQU4sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUUsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEtBTkQsTUFNTztBQUNIRixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNIO0FBQ0osR0FWUSxFQVVOLENBQUNMLE1BQU0sQ0FBQ1ksTUFBUixDQVZNLENBQVQ7O0FBWUEsTUFBTUgsV0FBVztBQUFBLG1WQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1lLLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQURaOztBQUFBO0FBQ1ZDLDJCQURVOztBQUFBLGtCQUVYQSxhQUZXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR05GLFlBQVksQ0FBQ0csT0FBYixDQUFxQixXQUFyQixFQUFrQyxPQUFsQyxDQUhNOztBQUFBO0FBSVpqQixvQkFBTSxDQUFDTSxNQUFQO0FBSlk7QUFBQTs7QUFBQTtBQUtULGtCQUFJQSxNQUFKLEVBQVk7QUFDZkMseUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQVAsc0JBQU0sQ0FBQ00sTUFBUDtBQUNIOztBQVJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhHLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBV0Esc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUtJO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBLDZCQUNJO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0kscUVBQUMsa0RBQUQ7QUFBUSxnQkFBVSxFQUFFTDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS0wsUUFYTCxlQWFJLHFFQUFDLGtEQUFEO0FBQ0ksWUFBTSxFQUFFLEdBRFo7QUFFSSxhQUFPLEVBQUUsa0NBRmI7QUFHSSxnQkFBVSxFQUFFSyxVQUhoQjtBQUlJLGVBQVMsRUFBRSxDQUNQO0FBQ0ljLFdBQUcsRUFBRSxHQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BRE8sRUFLUDtBQUNJRCxXQUFHLEVBQUUsZUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQUxPLEVBU1A7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FUTyxFQWFQO0FBQ0lELFdBQUcsRUFBRSxTQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BYk8sRUFpQlA7QUFDSUQsV0FBRyxFQUFFLFFBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FqQk8sRUFxQlA7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FyQk8sQ0FKZixDQThCSTtBQUNBO0FBQ0E7QUFoQ0o7QUFpQ0ksa0JBQVksRUFBRSxHQWpDbEI7QUFrQ0ksbUJBQWEsRUFBRTtBQWxDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0RILENBckZEOztHQUFNckIsTTtVQUNhRyxxRDs7O0tBRGJILE07QUF1RlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzM2NTg1M2Y2Y2NhNDMwYzhhN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCAgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxuICB0aXRsZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1haW5QYWdlID0gWycvIycsICcvJywgJy8jYWJvdXRTbmFwT3V0JywgJy8jbWVtYmVycycsICcvI2V2ZW50cycsICcvI21lZGlhJywgJy8jY29udGFjdCddXHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3JlbG9hZCwgc2V0UmVsb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVmcmVzaFBhZ2UoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIW1haW5QYWdlLnNvbWUoc2VjdGlvbiA9PiAoXHJcbiAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24gfHxcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9JHtzZWN0aW9ufWBcclxuICAgICAgICApKSkge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRSZWxvYWQodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIGNvbnN0IHJlZnJlc2hQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsRmlyc0xvYWQgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJylcclxuICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0TG9hZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVsb2FkKSB7XHJcbiAgICAgICAgICAgIHNldFJlbG9hZChmYWxzZSlcclxuICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJhc3NldHMvaW1nL3N2Zy9sb2dvLXNuYXAtb3V0LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==