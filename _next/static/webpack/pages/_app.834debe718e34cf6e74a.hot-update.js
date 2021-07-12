webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

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
    var firstLoad = /*#__PURE__*/function () {
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

                if (!(!localFirsLoad || reload)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return localStorage.setItem('firstLoad', 'false');

              case 6:
                // setReload(false)
                // router.push('/')
                // location.reload()
                console.log(typeof localFirsLoad);
                console.log(!!localFirsLoad);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function firstLoad() {
        return _ref2.apply(this, arguments);
      };
    }();

    firstLoad(); // console.log(typeof localFirsLoad);
    // console.log(!!localFirsLoad);

    if (!mainPage.some(function (section) {
      return router.asPath === section;
    })) {
      setMenuActive(false);
      setReload(true);
    } else {
      setReload(false);
      setMenuActive(true);
    }
  }, [router.asPath]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2EsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdExvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRmlyc0xvYWQgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJylcclxuICAgICAgICAgICAgaWYgKCFsb2NhbEZpcnNMb2FkIHx8IHJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0TG9hZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgICAgICAvLyBzZXRSZWxvYWQoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coISFsb2NhbEZpcnNMb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdExvYWQoKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBsb2NhbEZpcnNMb2FkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyghIWxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFJlbG9hZCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlbG9hZChmYWxzZSlcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmctc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciBtZW51QWN0aXZlPXttZW51QWN0aXZlfSAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgaW1nVXJsPXtcIi9cIn1cclxuICAgICAgICAgICAgICAgIGltZ1BhdGg9e1wiYXNzZXRzL2ltZy9zdmcvbG9nby1zbmFwLW91dC5zdmdcIn1cclxuICAgICAgICAgICAgICAgIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjYWJvdXRTbmFwT3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3VsbGEgQmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVtYmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lbWJyaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjZXZlbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRXZlbnRpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZWRpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNjb250YWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGF0dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlclBvcHVwTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFBsYWNlaG9sZGVyVGV4dD17XCJZb3VyIGVtYWlsIGFkZHJlc3MuLlwifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0VXJsPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodE5hbWU9e1wiV3ltYXplIFNybFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdfQ== */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      menuActive: menuActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 54,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s(Layout, "M7iUJdkoIKG667VtGv49Uuw1LYQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZXMvTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm1haW5QYWdlIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInJlbG9hZCIsInNldFJlbG9hZCIsInVzZUVmZmVjdCIsImZpcnN0TG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhbEZpcnNMb2FkIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzb21lIiwic2VjdGlvbiIsImFzUGF0aCIsInVybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLGdCQUFaLEVBQThCLFdBQTlCLEVBQTJDLFVBQTNDLEVBQXVELFNBQXZELEVBQWtFLFdBQWxFLENBQWpCOztBQUZvQyxrQkFHQUMsc0RBQVEsQ0FBQyxJQUFELENBSFI7QUFBQSxNQUc3QkMsVUFINkI7QUFBQSxNQUdqQkMsYUFIaUI7O0FBQUEsbUJBSVJGLHNEQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJN0JHLE1BSjZCO0FBQUEsTUFJckJDLFNBSnFCOztBQU1wQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsU0FBUztBQUFBLHFWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2NDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQURkOztBQUFBO0FBQ1JDLDZCQURROztBQUFBLHNCQUVWLENBQUNBLGFBQUQsSUFBa0JOLE1BRlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFHSkksWUFBWSxDQUFDRyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLE9BQWxDLENBSEk7O0FBQUE7QUFJVjtBQUNBO0FBQ0E7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQU9ILGFBQW5CO0FBQ0FFLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDLENBQUNILGFBQWQ7O0FBUlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEgsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVdBQSxhQUFTLEdBWkcsQ0FhWjtBQUNBOztBQUNBLFFBQUksQ0FBQ1AsUUFBUSxDQUFDYyxJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGFBQUlqQixNQUFNLENBQUNrQixNQUFQLEtBQWtCRCxPQUF0QjtBQUFBLEtBQXJCLENBQUwsRUFBMEQ7QUFDdERaLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FFLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxLQUhELE1BR087QUFDSEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNIO0FBQ0osR0F0QlEsRUFzQk4sQ0FBQ0wsTUFBTSxDQUFDa0IsTUFBUixDQXRCTSxDQUFUO0FBd0JBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFLSTtBQUFLLFFBQUUsRUFBQyxRQUFSO0FBQUE7QUFBQSw2QkFDSTtBQUFLLFVBQUUsRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVNJLHFFQUFDLGtEQUFEO0FBQVEsZ0JBQVUsRUFBRWQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLEVBV0tMLFFBWEwsZUFhSSxxRUFBQyxrREFBRDtBQUNJLFlBQU0sRUFBRSxHQURaO0FBRUksYUFBTyxFQUFFLGtDQUZiO0FBR0ksZ0JBQVUsRUFBRUssVUFIaEI7QUFJSSxlQUFTLEVBQUUsQ0FDUDtBQUNJZSxXQUFHLEVBQUUsR0FEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQURPLEVBS1A7QUFDSUQsV0FBRyxFQUFFLGVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FMTyxFQVNQO0FBQ0lELFdBQUcsRUFBRSxVQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BVE8sRUFhUDtBQUNJRCxXQUFHLEVBQUUsU0FEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQWJPLEVBaUJQO0FBQ0lELFdBQUcsRUFBRSxRQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BakJPLEVBcUJQO0FBQ0lELFdBQUcsRUFBRSxVQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BckJPLENBSmYsQ0E4Qkk7QUFDQTtBQUNBO0FBaENKO0FBaUNJLGtCQUFZLEVBQUUsR0FqQ2xCO0FBa0NJLG1CQUFhLEVBQUU7QUFsQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9ESCxDQWxGRDs7R0FBTXRCLE07VUFDYUcscUQ7OztLQURiSCxNO0FBb0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgzNGRlYmU3MThlMzRjZjZlNzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEhlYWRlciwgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsRmlyc0xvYWQgfHwgcmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgICAgIC8vIHNldFJlbG9hZChmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgbG9jYWxGaXJzTG9hZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyghIWxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0TG9hZCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIGxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCEhbG9jYWxGaXJzTG9hZCk7XHJcbiAgICAgICAgaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgc2V0UmVsb2FkKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJhc3NldHMvaW1nL3N2Zy9sb2dvLXNuYXAtb3V0LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==