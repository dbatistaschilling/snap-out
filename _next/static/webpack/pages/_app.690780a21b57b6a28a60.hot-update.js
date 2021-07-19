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
    }

    console.log(window.history); // const reload = localStorage.getItem('RELOAD')
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
      lineNumber: 51,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsImNvdW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjaGVja1JlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJoaXN0b3J5IiwicGF0aG5hbWUiLCJyZWxvYWQiLCJOdW1iZXIiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFJekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkOztBQUNBLFFBQUksQ0FBQ0YsS0FBTCxFQUFZO0FBQ1ZDLGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDLEdBQXhDO0FBQ0FDLGlCQUFXO0FBQ1o7O0FBRURDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBUGMsQ0FVZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWlCQVQseURBQVMsQ0FBQyxZQUFNO0FBQ2RNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaOztBQUNBLFFBQUlBLE1BQU0sQ0FBQ2MsUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQlgsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQU0saUJBQVc7QUFDWixLQUhELE1BR087QUFDTEgsa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixRQUFyQixFQUErQixNQUEvQjtBQUNBTCxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FUUSxFQVNOLENBQUNILE1BQU0sQ0FBQ2MsUUFBUixDQVRNLENBQVQ7O0FBV0EsTUFBTUwsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFNTSxNQUFNLEdBQUdULFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFmO0FBQ0EsUUFBTUYsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWQ7O0FBRUEsUUFBSVEsTUFBTSxLQUFLLE1BQVgsSUFBcUJDLE1BQU0sQ0FBQ1gsS0FBRCxDQUFOLEtBQWtCLENBQTNDLEVBQThDO0FBQzVDQyxrQkFBWSxDQUFDRSxPQUFiLENBQXFCLFFBQXJCLEVBQStCLE9BQS9CO0FBQ0FGLGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDLEdBQXhDO0FBQ0FSLFlBQU0sQ0FBQ2lCLE9BQVAsQ0FBZSxHQUFmO0FBQ0FqQixZQUFNLENBQUNlLE1BQVA7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUViLFVBQXBCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBakRRRixLOztLQUFBQSxLO0FBbURNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY5MDc4MGEyMWI1N2I2YTI4YTYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnKVxyXG4gICAgaWYgKCFjb3VudCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJywgJzAnKVxyXG4gICAgICBjaGVja1JlbG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cod2luZG93Lmhpc3RvcnkpO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhcmVsb2FkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdPUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBJyk7XHJcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgICAvLyB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICd0cnVlJylcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgY29uc3QgY2hlY2tSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcblxyXG4gICAgaWYgKHJlbG9hZCA9PT0gJ3RydWUnIHx8IE51bWJlcihjb3VudCkgPT09IDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICdmYWxzZScpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMScpXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9