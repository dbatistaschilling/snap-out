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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var reloadPage = function reloadPage() {
      false ? undefined : router.push("/");
    };

    var firstLoad = /*#__PURE__*/function () {
      var _ref2 = Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(reloadPage) {
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
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return localStorage.setItem('firstLoad', 'false');

              case 6:
                reloadPage();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function firstLoad(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    firstLoad(reloadPage);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(router); // if (!mainPage.some(section => (
    //     router.asPath === section ||
    //     router.asPath === `${process.env.BACKEND_URL}${section}`))) {
    //         reloadPage()
    // }
  }, [router.asPath]);

  var reloadPage = function reloadPage() {
    router.reload(); // process.env.NODE_ENV === 'production' ? (
    //     router.push(`${process.env.BACKEND_URL}/`)
    // ) :  (
    //     router.push(`/`)
    // )
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGEsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkID0gYXN5bmMgKHJlbG9hZFBhZ2U6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvYWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RMb2FkKHJlbG9hZFBhZ2UpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICAgICAgLy8gaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gKFxyXG4gICAgICAgIC8vICAgICByb3V0ZXIuYXNQYXRoID09PSBzZWN0aW9uIHx8XHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5hc1BhdGggPT09IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfSR7c2VjdGlvbn1gKSkpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJlbG9hZFBhZ2UoKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgICBjb25zdCByZWxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gKVxyXG4gICAgICAgIC8vICkgOiAgKFxyXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgLy8gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJhc3NldHMvaW1nL3N2Zy9sb2dvLXNuYXAtb3V0LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
      imgUrl: "/",
      imgPath: "assets/img/svg/logo-snap-out.svg",
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
      lineNumber: 64,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, _this);
};

_s(Layout, "TvQOAa6MuxS5wkANqefpxaThEc4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VFZmZlY3QiLCJyZWxvYWRQYWdlIiwicHVzaCIsImZpcnN0TG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhbEZpcnNMb2FkIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJyZWxvYWQiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixjQUNJSixTQURKLEdBR0lBLE1BQU0sQ0FBQ0ssSUFBUCxLQUhKO0FBS0gsS0FORDs7QUFPQSxRQUFNQyxTQUFTO0FBQUEscVZBQUcsaUJBQU9GLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDY0csWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBRGQ7O0FBQUE7QUFDUkMsNkJBRFE7O0FBQUEsb0JBRVRBLGFBRlM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFHSkYsWUFBWSxDQUFDRyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLE9BQWxDLENBSEk7O0FBQUE7QUFJVk4sMEJBQVU7O0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEUsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQU9BQSxhQUFTLENBQUNGLFVBQUQsQ0FBVDtBQUNILEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFrQkFELHlEQUFTLENBQUMsWUFBTTtBQUNaUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVosTUFBWixFQURZLENBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBUFEsRUFPTixDQUFDQSxNQUFNLENBQUNhLE1BQVIsQ0FQTSxDQUFUOztBQVNBLE1BQU1ULFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJKLFVBQU0sQ0FBQ2MsTUFBUCxHQURxQixDQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0FQRDs7QUFTQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBS0k7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUEsNkJBQ0k7QUFBSyxVQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFTSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS2YsUUFYTCxlQWFJLHFFQUFDLGtEQUFEO0FBQ0ksWUFBTSxFQUFFLEdBRFo7QUFFSSxhQUFPLEVBQUUsa0NBRmI7QUFHSSxlQUFTLEVBQUUsQ0FDUDtBQUNJZ0IsV0FBRyxFQUFFLEdBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FETyxFQUtQO0FBQ0lELFdBQUcsRUFBRSxlQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BTE8sRUFTUDtBQUNJRCxXQUFHLEVBQUUsVUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQVRPLEVBYVA7QUFDSUQsV0FBRyxFQUFFLFNBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FiTyxFQWlCUDtBQUNJRCxXQUFHLEVBQUUsUUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQWpCTyxFQXFCUDtBQUNJRCxXQUFHLEVBQUUsVUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQXJCTyxDQUhmLENBNkJJO0FBQ0E7QUFDQTtBQS9CSjtBQWdDSSxrQkFBWSxFQUFFLEdBaENsQjtBQWlDSSxtQkFBYSxFQUFFO0FBakNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0EzRkQ7O0dBQU1sQixNO1VBQ2FHLHFEOzs7S0FEYkgsTTtBQTZGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNWFkZjg4NTk1NTc1MzllZjM1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkID0gYXN5bmMgKHJlbG9hZFBhZ2U6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvYWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RMb2FkKHJlbG9hZFBhZ2UpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICAgICAgLy8gaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gKFxyXG4gICAgICAgIC8vICAgICByb3V0ZXIuYXNQYXRoID09PSBzZWN0aW9uIHx8XHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5hc1BhdGggPT09IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfSR7c2VjdGlvbn1gKSkpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJlbG9hZFBhZ2UoKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgICBjb25zdCByZWxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgICAgIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gKVxyXG4gICAgICAgIC8vICkgOiAgKFxyXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgLy8gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJhc3NldHMvaW1nL3N2Zy9sb2dvLXNuYXAtb3V0LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9