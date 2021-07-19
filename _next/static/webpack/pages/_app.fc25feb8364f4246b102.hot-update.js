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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loader = _useState2[0],
      setLoader = _useState2[1];

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
              console.log('OPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

              if (!(router.asPath === '/')) {
                _context.next = 7;
                break;
              }

              console.log('OPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA22222222');
              _context.next = 5;
              return setTimeout(changeLoader, 4000);

            case 5:
              _context.next = 8;
              break;

            case 7:
              if (router.asPath.includes('#')) {
                router.replace('/');
                router.reload();
              } else {
                setMenuActive(false);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _initialPathValues.apply(this, arguments);
  }

  var changeLoader = function changeLoader() {
    setLoader(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menuActive: menuActive,
    loader: loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }, this);
}

_s(MyApp, "GZv7B7z4hj6l30KiCHuVzC3TtTo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsImxvYWRlciIsInNldExvYWRlciIsInVzZUVmZmVjdCIsImluaXRpYWxQYXRoVmFsdWVzIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwic2V0VGltZW91dCIsImNoYW5nZUxvYWRlciIsImluY2x1ZGVzIiwicmVwbGFjZSIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFBQSxtQkFHN0JGLHNEQUFRLENBQUMsSUFBRCxDQUhxQjtBQUFBLE1BR2xERyxNQUhrRDtBQUFBLE1BRzFDQyxTQUgwQzs7QUFLekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLENBQUNQLE1BQU0sQ0FBQ1EsUUFBUixDQUZNLENBQVQ7O0FBTHlELFdBUzFDRCxpQkFUMEM7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFZBU3pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaOztBQURGLG9CQUdNVixNQUFNLENBQUNXLE1BQVAsS0FBa0IsR0FIeEI7QUFBQTtBQUFBO0FBQUE7O0FBSUVGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWjtBQUpGO0FBQUEscUJBTVVFLFVBQVUsQ0FBQ0MsWUFBRCxFQUFlLElBQWYsQ0FOcEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBT1Msa0JBQUliLE1BQU0sQ0FBQ1csTUFBUCxDQUFjRyxRQUFkLENBQXVCLEdBQXZCLENBQUosRUFBaUM7QUFDdENkLHNCQUFNLENBQUNlLE9BQVAsQ0FBZSxHQUFmO0FBQ0FmLHNCQUFNLENBQUNnQixNQUFQO0FBQ0QsZUFITSxNQUdBO0FBQ0xiLDZCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7O0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUeUQ7QUFBQTtBQUFBOztBQXdCekQsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QlIsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVILFVBQXBCO0FBQWdDLFVBQU0sRUFBRUUsTUFBeEM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0FqQ1FGLEs7O0tBQUFBLEs7QUFtQ01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmMyNWZlYjgzNjRmNDI0NmIxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxQYXRoVmFsdWVzKClcclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxQYXRoVmFsdWVzKCkge1xyXG4gICAgY29uc29sZS5sb2coJ09QQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKTtcclxuXHJcbiAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gJy8nKXtcclxuICAgIGNvbnNvbGUubG9nKCdPUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBMjIyMjIyMjInKTtcclxuXHJcbiAgICAgIGF3YWl0IHNldFRpbWVvdXQoY2hhbmdlTG9hZGVyLCA0MDAwKVxyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKCcjJykpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkZXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IGxvYWRlcj17bG9hZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==