webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/Layout */ "./src/themes/Layout.tsx");



var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var count = localStorage.getItem('FIRSTLOAD_COUNT');

    if (!count) {
      localStorage.setItem('FIRSTLOAD_COUNT', '0');
      checkReload();
    } // const reload = localStorage.getItem('RELOAD')
    // if (router.pathname === '/' && !reload) {
    //   console.log('OPAAAAAAAAAAAAAAAAAAAAAAA');
    //   localStorage.setItem('RELOAD', 'true')
    // }

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(router);

    if (router.pathname === '/') {
      setMenuActive(true);
      checkReload();
    } else {
      localStorage.setItem('RELOAD', 'true');
      setMenuActive(false);
    }
  }, [router.pathname]);

  var checkReload = function checkReload() {
    var reload = localStorage.getItem('RELOAD');
    var count = localStorage.getItem('FIRSTLOAD_COUNT');

    if (reload === 'true' || Number(count) === 0) {
      localStorage.setItem('RELOAD', 'false');
      localStorage.setItem('FIRSTLOAD_COUNT', '1');
      router.replace('/');
      router.reload();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuActive: menuActive,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }, this);
}

_s(MyApp, "9sznDHeX60dyYkNfUyeC7Gtob7o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsImNvdW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjaGVja1JlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInJlbG9hZCIsIk51bWJlciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUEyRDtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjs7QUFBQSxrQkFFckJDLHNEQUFRLENBQUMsSUFBRCxDQUZhO0FBQUEsTUFFbERDLFVBRmtEO0FBQUEsTUFFdENDLGFBRnNDOztBQUl6REMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWQ7O0FBQ0EsUUFBSSxDQUFDRixLQUFMLEVBQVk7QUFDVkMsa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixpQkFBckIsRUFBd0MsR0FBeEM7QUFDQUMsaUJBQVc7QUFDWixLQUxhLENBT2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBY0FMLHlEQUFTLENBQUMsWUFBTTtBQUNkTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWjs7QUFDQSxRQUFJQSxNQUFNLENBQUNZLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JULG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FNLGlCQUFXO0FBQ1osS0FIRCxNQUdPO0FBQ0xILGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsTUFBL0I7QUFDQUwsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDSCxNQUFNLENBQUNZLFFBQVIsQ0FUTSxDQUFUOztBQVdBLE1BQU1ILFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUksTUFBTSxHQUFHUCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBZjtBQUNBLFFBQU1GLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkOztBQUVBLFFBQUlNLE1BQU0sS0FBSyxNQUFYLElBQXFCQyxNQUFNLENBQUNULEtBQUQsQ0FBTixLQUFrQixDQUEzQyxFQUE4QztBQUM1Q0Msa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixRQUFyQixFQUErQixPQUEvQjtBQUNBRixrQkFBWSxDQUFDRSxPQUFiLENBQXFCLGlCQUFyQixFQUF3QyxHQUF4QztBQUNBUixZQUFNLENBQUNlLE9BQVAsQ0FBZSxHQUFmO0FBQ0FmLFlBQU0sQ0FBQ2EsTUFBUDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxzQkFDSSxxRUFBQyxzREFBRDtBQUFRLGNBQVUsRUFBRVgsVUFBcEI7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0E5Q1FGLEs7O0tBQUFBLEs7QUFnRE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjI3YTRhODFkNWI0MWY1NjE0ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcbiAgICBpZiAoIWNvdW50KSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMCcpXHJcbiAgICAgIGNoZWNrUmVsb2FkKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhcmVsb2FkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdPUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBJyk7XHJcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgICAvLyB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICd0cnVlJylcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgY29uc3QgY2hlY2tSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcblxyXG4gICAgaWYgKHJlbG9hZCA9PT0gJ3RydWUnIHx8IE51bWJlcihjb3VudCkgPT09IDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICdmYWxzZScpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMScpXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9