webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themes_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themes/Layout */ "./src/themes/Layout.tsx");





var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    initialPathValues();
  }, [router.pathname]);

  function initialPathValues() {
    return _initialPathValues.apply(this, arguments);
  }

  function _initialPathValues() {
    _initialPathValues = Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (router.pathname === '/') {
                setMenuActive(true);
              } else {
                setMenuActive(false);
              }

              if (router.asPath.includes('#')) {
                router.replace('/');
                router.reload();
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _initialPathValues.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menuActive: menuActive,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }, this);
}

_s(MyApp, "3yEOg1KHtw7KKl/lT78KUHnAhLQ=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsImluaXRpYWxQYXRoVmFsdWVzIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBSXpEQyx5REFBUyxDQUFDLFlBQU07QUFDZEMscUJBQWlCO0FBQ2xCLEdBRlEsRUFFTixDQUFDTCxNQUFNLENBQUNNLFFBQVIsQ0FGTSxDQUFUOztBQUp5RCxXQVExQ0QsaUJBUjBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRWQVF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Usa0JBQUlMLE1BQU0sQ0FBQ00sUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkgsNkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxlQUZELE1BRU87QUFDTEEsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDs7QUFDRCxrQkFBSUgsTUFBTSxDQUFDTyxNQUFQLENBQWNDLFFBQWQsQ0FBdUIsR0FBdkIsQ0FBSixFQUFpQztBQUMvQlIsc0JBQU0sQ0FBQ1MsT0FBUCxDQUFlLEdBQWY7QUFDQVQsc0JBQU0sQ0FBQ1UsTUFBUDtBQUNEOztBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUnlEO0FBQUE7QUFBQTs7QUFvQnpELHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFUixVQUFwQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtEOztHQXpCUUYsSzs7S0FBQUEsSztBQTJCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMmJiNGVlM2U2ZTQzYjBiOTEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi90aGVtZXMvTGF5b3V0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9OiBBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdGlhbFBhdGhWYWx1ZXMoKVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbFBhdGhWYWx1ZXMoKSB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICAgIGlmIChyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKCcjJykpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX0gPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9