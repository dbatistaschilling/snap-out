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
    var reload = localStorage.getItem('RELOAD');

    if ((router.pathname === '/' || router.pathname === "".concat("/snap-out", "/")) && !reload) {
      // setCookie(null, 'RELOAD', 'true')
      localStorage.setItem('RELOAD', 'true');
      checkReload();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(router.pathname);

    if (router.pathname === '/' || router.pathname === "".concat("/snap-out", "/")) {
      setMenuActive(true);
      checkReload();
    } else {
      // setCookie(null, 'RELOAD', 'true')
      localStorage.setItem('RELOAD', 'true');
      setMenuActive(false);
    }
  }, [router.pathname]);

  var checkReload = function checkReload() {
    var reload = localStorage.getItem('RELOAD');

    if (reload === 'true') {
      // setCookie(null, 'RELOAD', 'false')
      localStorage.setItem('RELOAD', 'false');

      if (false) {} else {
        router.replace('/');
      }

      router.reload();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuActive: menuActive,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsInJlbG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXRobmFtZSIsInByb2Nlc3MiLCJzZXRJdGVtIiwiY2hlY2tSZWxvYWQiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBSXpEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFmOztBQUNBLFFBQUksQ0FBQ1AsTUFBTSxDQUFDUSxRQUFQLEtBQW9CLEdBQXBCLElBQTJCUixNQUFNLENBQUNRLFFBQVAsZUFBdUJDLFdBQXZCLE1BQTVCLEtBQWtGLENBQUNKLE1BQXZGLEVBQStGO0FBQzdGO0FBQ0FDLGtCQUFZLENBQUNJLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsTUFBL0I7QUFDQUMsaUJBQVc7QUFDWjtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQVAseURBQVMsQ0FBQyxZQUFNO0FBQ2RRLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFNLENBQUNRLFFBQW5COztBQUNBLFFBQUtSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUFwQixJQUEyQlIsTUFBTSxDQUFDUSxRQUFQLGVBQXVCQyxXQUF2QixNQUFoQyxFQUFvRjtBQUNsRk4sbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQVEsaUJBQVc7QUFDWixLQUhELE1BR087QUFDTDtBQUNBTCxrQkFBWSxDQUFDSSxPQUFiLENBQXFCLFFBQXJCLEVBQStCLE1BQS9CO0FBQ0FQLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVZRLEVBVU4sQ0FBQ0gsTUFBTSxDQUFDUSxRQUFSLENBVk0sQ0FBVDs7QUFZQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1OLE1BQU0sR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWY7O0FBQ0EsUUFBSUYsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckI7QUFDQUMsa0JBQVksQ0FBQ0ksT0FBYixDQUFxQixRQUFyQixFQUErQixPQUEvQjs7QUFDQSxpQkFBMkMsRUFBM0MsTUFFTztBQUNMVixjQUFNLENBQUNjLE9BQVAsQ0FBZSxHQUFmO0FBQ0Q7O0FBQ0RkLFlBQU0sQ0FBQ0ssTUFBUDtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxzQkFDSSxxRUFBQyxzREFBRDtBQUFRLGNBQVUsRUFBRUgsVUFBcEI7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0E1Q1FGLEs7O0tBQUFBLEs7QUE4Q01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTI2NWIxNzkzZDUzMTUwYzY5M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdSRUxPQUQnKVxyXG4gICAgaWYgKChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gKSAmJiAhcmVsb2FkKSB7XHJcbiAgICAgIC8vIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgICBjaGVja1JlbG9hZCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xyXG4gICAgaWYgKChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gKSkge1xyXG4gICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgIGNoZWNrUmVsb2FkKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKVxyXG5cclxuICBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdSRUxPQUQnKVxyXG4gICAgaWYgKHJlbG9hZCA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIC8vIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ2ZhbHNlJylcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICdmYWxzZScpXHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICB9XHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBtZW51QWN0aXZlPXttZW51QWN0aXZlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==