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
    console.log(router);

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
    if (!mainPage.some(function (section) {
      return router.asPath === section || router.asPath === "".concat("/snap-out").concat(section);
    })) {
      reloadPage();
    }
  }, [router.asPath]);

  var reloadPage = function reloadPage() {
    false ? undefined : router.push("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGEsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkID0gYXN5bmMgKHJlbG9hZFBhZ2U6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvYWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RMb2FkKHJlbG9hZFBhZ2UpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IChcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbiB8fFxyXG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke3NlY3Rpb259YCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZWxvYWRQYWdlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgcmVsb2FkUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICApIDogIChcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmctc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgaW1nVXJsPXtcIi9cIn1cclxuICAgICAgICAgICAgICAgIGltZ1BhdGg9e1wiYXNzZXRzL2ltZy9zdmcvbG9nby1zbmFwLW91dC5zdmdcIn1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVsb2FkUGFnZSIsInB1c2giLCJmaXJzdExvYWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxGaXJzTG9hZCIsInNldEl0ZW0iLCJzb21lIiwic2VjdGlvbiIsImFzUGF0aCIsInByb2Nlc3MiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaOztBQUVBLFFBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsY0FDSU4sU0FESixHQUdJQSxNQUFNLENBQUNPLElBQVAsS0FISjtBQUtILEtBTkQ7O0FBT0EsUUFBTUMsU0FBUztBQUFBLHFWQUFHLGlCQUFPRixVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2NHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQURkOztBQUFBO0FBQ1JDLDZCQURROztBQUFBLG9CQUVUQSxhQUZTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBR0pGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixXQUFyQixFQUFrQyxPQUFsQyxDQUhJOztBQUFBO0FBSVZOLDBCQUFVOztBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRFLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFPQUEsYUFBUyxDQUFDRixVQUFELENBQVQ7QUFDSCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBSCx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNELFFBQVEsQ0FBQ1csSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxhQUN0QmQsTUFBTSxDQUFDZSxNQUFQLEtBQWtCRCxPQUFsQixJQUNBZCxNQUFNLENBQUNlLE1BQVAsZUFBcUJDLFdBQXJCLFNBQStDRixPQUEvQyxDQUZzQjtBQUFBLEtBQXJCLENBQUwsRUFFZ0U7QUFDeERSLGdCQUFVO0FBQ2pCO0FBQ0osR0FOUSxFQU1OLENBQUNOLE1BQU0sQ0FBQ2UsTUFBUixDQU5NLENBQVQ7O0FBUUEsTUFBTVQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixZQUNJTixTQURKLEdBR0lBLE1BQU0sQ0FBQ08sSUFBUCxLQUhKO0FBS0gsR0FORDs7QUFRQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBS0k7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUEsNkJBQ0k7QUFBSyxVQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFTSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS1IsUUFYTCxlQWFJLHFFQUFDLGtEQUFEO0FBQ0ksWUFBTSxFQUFFLEdBRFo7QUFFSSxhQUFPLEVBQUUsa0NBRmI7QUFHSSxlQUFTLEVBQUUsQ0FDUDtBQUNJa0IsV0FBRyxFQUFFLEdBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FETyxFQUtQO0FBQ0lELFdBQUcsRUFBRSxlQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BTE8sRUFTUDtBQUNJRCxXQUFHLEVBQUUsVUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQVRPLEVBYVA7QUFDSUQsV0FBRyxFQUFFLFNBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FiTyxFQWlCUDtBQUNJRCxXQUFHLEVBQUUsUUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQWpCTyxFQXFCUDtBQUNJRCxXQUFHLEVBQUUsVUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQXJCTyxDQUhmLENBNkJJO0FBQ0E7QUFDQTtBQS9CSjtBQWdDSSxrQkFBWSxFQUFFLEdBaENsQjtBQWlDSSxtQkFBYSxFQUFFO0FBakNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0EzRkQ7O0dBQU1wQixNO1VBQ2FHLHFEOzs7S0FEYkgsTTtBQTZGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lODc2YjNmZmE4M2EwMTQ1NzY2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkID0gYXN5bmMgKHJlbG9hZFBhZ2U6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvYWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RMb2FkKHJlbG9hZFBhZ2UpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IChcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbiB8fFxyXG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke3NlY3Rpb259YCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZWxvYWRQYWdlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgcmVsb2FkUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICApIDogIChcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmctc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgaW1nVXJsPXtcIi9cIn1cclxuICAgICAgICAgICAgICAgIGltZ1BhdGg9e1wiYXNzZXRzL2ltZy9zdmcvbG9nby1zbmFwLW91dC5zdmdcIn1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==