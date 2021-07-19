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
    // console.log(router);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsImNvdW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJjaGVja1JlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJoaXN0b3J5IiwicGF0aG5hbWUiLCJyZWxvYWQiLCJOdW1iZXIiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFJekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkOztBQUNBLFFBQUksQ0FBQ0YsS0FBTCxFQUFZO0FBQ1ZDLGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDLEdBQXhDO0FBQ0FDLGlCQUFXO0FBQ1o7O0FBRURDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBUGMsQ0FVZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWlCQVQseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFJSixNQUFNLENBQUNjLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JYLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FNLGlCQUFXO0FBQ1osS0FIRCxNQUdPO0FBQ0xILGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsTUFBL0I7QUFDQUwsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBVFEsRUFTTixDQUFDSCxNQUFNLENBQUNjLFFBQVIsQ0FUTSxDQUFUOztBQVdBLE1BQU1MLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTU0sTUFBTSxHQUFHVCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBZjtBQUNBLFFBQU1GLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixDQUFkOztBQUVBLFFBQUlRLE1BQU0sS0FBSyxNQUFYLElBQXFCQyxNQUFNLENBQUNYLEtBQUQsQ0FBTixLQUFrQixDQUEzQyxFQUE4QztBQUM1Q0Msa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixRQUFyQixFQUErQixPQUEvQjtBQUNBRixrQkFBWSxDQUFDRSxPQUFiLENBQXFCLGlCQUFyQixFQUF3QyxHQUF4QztBQUNBUixZQUFNLENBQUNpQixPQUFQLENBQWUsR0FBZjtBQUNBakIsWUFBTSxDQUFDZSxNQUFQO0FBQ0Q7QUFDRixHQVZEOztBQVlBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFYixVQUFwQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtEOztHQWpEUUYsSzs7S0FBQUEsSztBQW1ETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NjI2Yjg3YjBmNzJiOTcxNDM5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi90aGVtZXMvTGF5b3V0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9OiBBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJylcclxuICAgIGlmICghY291bnQpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcsICcwJylcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5oaXN0b3J5KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgcmVsb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JFTE9BRCcpXHJcbiAgICAvLyBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgIXJlbG9hZCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnT1BBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQScpO1xyXG4gICAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgLy8gfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocm91dGVyKTtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgIGNoZWNrUmVsb2FkKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pXHJcblxyXG4gIGNvbnN0IGNoZWNrUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVsb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JFTE9BRCcpXHJcbiAgICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnKVxyXG5cclxuICAgIGlmIChyZWxvYWQgPT09ICd0cnVlJyB8fCBOdW1iZXIoY291bnQpID09PSAwKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAnZmFsc2UnKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJywgJzEnKVxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBtZW51QWN0aXZlPXttZW51QWN0aXZlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==