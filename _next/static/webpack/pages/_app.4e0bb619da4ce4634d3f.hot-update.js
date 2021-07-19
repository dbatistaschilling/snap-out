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
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _themes_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes/Layout */ "./src/themes/Layout.tsx");





var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router,
      props = _ref.props;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    console.log('test');

    if (router.pathname === '/' && !props.reload) {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'RELOAD', 'true', {
        path: '/'
      });
      checkReload();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (router.pathname !== '/' && props.reload === "false") {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'RELOAD', 'true', {
        path: '/'
      });
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'MENU_ACTIVE', 'false', {
        path: '/'
      });
    } else if (router.pathname === '/' && props.reload === "true") {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'MENU_ACTIVE', 'true', {
        path: '/'
      });
      checkReload();
    }
  }, [router.pathname]);

  var checkReload = function checkReload() {
    if (props.reload === 'true') {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'RELOAD', 'false', {
        path: '/'
      });
      router.reload();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    menuActive: props.menuActive === 'true' ? true : false,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 7
  }, this);
}

_s(MyApp, "3ubReDTFssvu4DHeldAg55cW/CI=");

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var appProps, cookies;
    return F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default.a.getInitialProps(appContext);

          case 2:
            appProps = _context.sent;
            cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(appContext.ctx);
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              props: {
                reload: cookies.RELOAD,
                menuActive: cookies.MENU_ACTIVE
              }
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJyZWxvYWQiLCJzZXRDb29raWUiLCJwYXRoIiwiY2hlY2tSZWxvYWQiLCJtZW51QWN0aXZlIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsIkFwcCIsImFwcFByb3BzIiwiY29va2llcyIsInBhcnNlQ29va2llcyIsImN0eCIsIlJFTE9BRCIsIk1FTlVfQUNUSVZFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFXQSxTQUFTQSxLQUFULE9BQW9FO0FBQUE7O0FBQUEsTUFBbkRDLFNBQW1ELFFBQW5EQSxTQUFtRDtBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUVsRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7O0FBRUEsUUFBSUosTUFBTSxDQUFDSyxRQUFQLEtBQW9CLEdBQXBCLElBQTJCLENBQUNKLEtBQUssQ0FBQ0ssTUFBdEMsRUFBOEM7QUFDNUNDLCtEQUFTLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsTUFBakIsRUFBeUI7QUFDaENDLFlBQUksRUFBRTtBQUQwQixPQUF6QixDQUFUO0FBR0FDLGlCQUFXO0FBQ1o7QUFDRixHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0FQLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLE1BQU0sQ0FBQ0ssUUFBUCxLQUFvQixHQUFwQixJQUEyQkosS0FBSyxDQUFDSyxNQUFOLEtBQWlCLE9BQWhELEVBQXlEO0FBQ3ZEQywrREFBUyxDQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLE1BQWpCLEVBQXlCO0FBQ2hDQyxZQUFJLEVBQUU7QUFEMEIsT0FBekIsQ0FBVDtBQUdBRCwrREFBUyxDQUFDLElBQUQsRUFBTyxhQUFQLEVBQXNCLE9BQXRCLEVBQStCO0FBQ3RDQyxZQUFJLEVBQUU7QUFEZ0MsT0FBL0IsQ0FBVDtBQUdELEtBUEQsTUFPTyxJQUFJUixNQUFNLENBQUNLLFFBQVAsS0FBb0IsR0FBcEIsSUFBMkJKLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixNQUFoRCxFQUF3RDtBQUM3REMsK0RBQVMsQ0FBQyxJQUFELEVBQU8sYUFBUCxFQUFzQixNQUF0QixFQUE4QjtBQUNyQ0MsWUFBSSxFQUFFO0FBRCtCLE9BQTlCLENBQVQ7QUFHQUMsaUJBQVc7QUFDWjtBQUNGLEdBZFEsRUFjTixDQUFDVCxNQUFNLENBQUNLLFFBQVIsQ0FkTSxDQUFUOztBQWdCQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUlSLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixNQUFyQixFQUE2QjtBQUMzQkMsK0RBQVMsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixPQUFqQixFQUEwQjtBQUNqQ0MsWUFBSSxFQUFFO0FBRDJCLE9BQTFCLENBQVQ7QUFHQVIsWUFBTSxDQUFDTSxNQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFTCxLQUFLLENBQUNTLFVBQU4sS0FBcUIsTUFBckIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBekQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlWCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0EzQ1FGLEs7O0tBQUFBLEs7O0FBNkNUQSxLQUFLLENBQUNjLGVBQU47QUFBQSxpVkFBd0IsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQ0MsK0NBQUcsQ0FBQ0YsZUFBSixDQUFvQkMsVUFBcEIsQ0FGRDs7QUFBQTtBQUVoQkUsb0JBRmdCO0FBR2hCQyxtQkFIZ0IsR0FHTkMsNERBQVksQ0FBQ0osVUFBVSxDQUFDSyxHQUFaLENBSE47QUFBQSw2RUFNakJILFFBTmlCO0FBT3BCYixtQkFBSyxFQUFFO0FBQ0xLLHNCQUFNLEVBQUVTLE9BQU8sQ0FBQ0csTUFEWDtBQUVMUiwwQkFBVSxFQUFFSyxPQUFPLENBQUNJO0FBRmY7QUFQYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZXRCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGUwYmI2MTlkYTRjZTQ2MzRkM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCdcclxuXHJcbmV4cG9ydCB0eXBlIFByb3BzID0ge1xyXG4gIHJlbG9hZDogc3RyaW5nXHJcbiAgbWVudUFjdGl2ZTogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgTXlBcHBQcm9wcyA9IEFwcFByb3BzICYge1xyXG4gIHByb3BzOiBQcm9wc1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIsIHByb3BzIH06IE15QXBwUHJvcHMpIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmICFwcm9wcy5yZWxvYWQpIHtcclxuICAgICAgc2V0Q29va2llKG51bGwsICdSRUxPQUQnLCAndHJ1ZScsIHtcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSAhPT0gJy8nICYmIHByb3BzLnJlbG9hZCA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ3RydWUnLCB7XHJcbiAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnTUVOVV9BQ1RJVkUnLCAnZmFsc2UnLCB7XHJcbiAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmIHByb3BzLnJlbG9hZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgc2V0Q29va2llKG51bGwsICdNRU5VX0FDVElWRScsICd0cnVlJywge1xyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICB9KVxyXG4gICAgICBjaGVja1JlbG9hZCgpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pXHJcblxyXG4gIGNvbnN0IGNoZWNrUmVsb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnJlbG9hZCA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ2ZhbHNlJywge1xyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICB9KVxyXG4gICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgbWVudUFjdGl2ZT17cHJvcHMubWVudUFjdGl2ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQ6IEFwcENvbnRleHQpID0+IHtcclxuICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoYXBwQ29udGV4dC5jdHgpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBQcm9wcyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlbG9hZDogY29va2llcy5SRUxPQUQsXHJcbiAgICAgIG1lbnVBY3RpdmU6IGNvb2tpZXMuTUVOVV9BQ1RJVkVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJzb3VyY2VSb290IjoiIn0=