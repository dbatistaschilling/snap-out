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
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGEsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkID0gYXN5bmMgKHJlbG9hZFBhZ2U6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvYWQnLCAnZmFsc2UnKVxyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RMb2FkKHJlbG9hZFBhZ2UpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IChcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbiB8fFxyXG4gICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke3NlY3Rpb259YCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZWxvYWRQYWdlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgcmVsb2FkUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYClcclxuICAgICAgICApIDogIChcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmctc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgaW1nVXJsPXtcIi9cIn1cclxuICAgICAgICAgICAgICAgIGltZ1BhdGg9e1wiYXNzZXRzL2ltZy9zdmcvbG9nby1zbmFwLW91dC5zdmdcIn1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 62,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VFZmZlY3QiLCJyZWxvYWRQYWdlIiwicHVzaCIsImZpcnN0TG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhbEZpcnNMb2FkIiwic2V0SXRlbSIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwicHJvY2VzcyIsInVybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUNwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLGNBQ0lKLFNBREosR0FHSUEsTUFBTSxDQUFDSyxJQUFQLEtBSEo7QUFLSCxLQU5EOztBQU9BLFFBQU1DLFNBQVM7QUFBQSxxVkFBRyxpQkFBT0YsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNjRyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FEZDs7QUFBQTtBQUNSQyw2QkFEUTs7QUFBQSxvQkFFVEEsYUFGUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdKRixZQUFZLENBQUNHLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsT0FBbEMsQ0FISTs7QUFBQTtBQUlWTiwwQkFBVTs7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBT0FBLGFBQVMsQ0FBQ0YsVUFBRCxDQUFUO0FBQ0gsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQWtCQUQseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDRCxRQUFRLENBQUNTLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFDdEJaLE1BQU0sQ0FBQ2EsTUFBUCxLQUFrQkQsT0FBbEIsSUFDQVosTUFBTSxDQUFDYSxNQUFQLGVBQXFCQyxXQUFyQixTQUErQ0YsT0FBL0MsQ0FGc0I7QUFBQSxLQUFyQixDQUFMLEVBRWdFO0FBQ3hEUixnQkFBVTtBQUNqQjtBQUNKLEdBTlEsRUFNTixDQUFDSixNQUFNLENBQUNhLE1BQVIsQ0FOTSxDQUFUOztBQVFBLE1BQU1ULFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsWUFDSUosU0FESixHQUdJQSxNQUFNLENBQUNLLElBQVAsS0FISjtBQUtILEdBTkQ7O0FBUUEsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUtJO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBLDZCQUNJO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0kscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLEVBV0tOLFFBWEwsZUFhSSxxRUFBQyxrREFBRDtBQUNJLFlBQU0sRUFBRSxHQURaO0FBRUksYUFBTyxFQUFFLGtDQUZiO0FBR0ksZUFBUyxFQUFFLENBQ1A7QUFDSWdCLFdBQUcsRUFBRSxHQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BRE8sRUFLUDtBQUNJRCxXQUFHLEVBQUUsZUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQUxPLEVBU1A7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FUTyxFQWFQO0FBQ0lELFdBQUcsRUFBRSxTQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BYk8sRUFpQlA7QUFDSUQsV0FBRyxFQUFFLFFBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FqQk8sRUFxQlA7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FyQk8sQ0FIZixDQTZCSTtBQUNBO0FBQ0E7QUEvQko7QUFnQ0ksa0JBQVksRUFBRSxHQWhDbEI7QUFpQ0ksbUJBQWEsRUFBRTtBQWpDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbURILENBekZEOztHQUFNbEIsTTtVQUNhRyxxRDs7O0tBRGJILE07QUEyRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGMyYjQ5NTkyM2IxZDM2ZWM1NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCAgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxuICB0aXRsZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1haW5QYWdlID0gWycvIycsICcvJywgJy8jYWJvdXRTbmFwT3V0JywgJy8jbWVtYmVycycsICcvI2V2ZW50cycsICcvI21lZGlhJywgJy8jY29udGFjdCddXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZWxvYWRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ApXHJcbiAgICAgICAgICAgICkgOiAgKFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9hZCA9IGFzeW5jIChyZWxvYWRQYWdlOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRmlyc0xvYWQgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJylcclxuICAgICAgICAgICAgaWYgKCFsb2NhbEZpcnNMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgICAgIHJlbG9hZFBhZ2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0TG9hZChyZWxvYWRQYWdlKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIW1haW5QYWdlLnNvbWUoc2VjdGlvbiA9PiAoXHJcbiAgICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24gfHxcclxuICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9JHtzZWN0aW9ufWApKSkge1xyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IChcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ApXHJcbiAgICAgICAgKSA6ICAoXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAge2AgaHRtbCB7IHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9YH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgIGltZ1VybD17XCIvXCJ9XHJcbiAgICAgICAgICAgICAgICBpbWdQYXRoPXtcImFzc2V0cy9pbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjYWJvdXRTbmFwT3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3VsbGEgQmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVtYmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lbWJyaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjZXZlbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRXZlbnRpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZWRpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNjb250YWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGF0dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlclBvcHVwTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFBsYWNlaG9sZGVyVGV4dD17XCJZb3VyIGVtYWlsIGFkZHJlc3MuLlwifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0VXJsPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodE5hbWU9e1wiV3ltYXplIFNybFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=