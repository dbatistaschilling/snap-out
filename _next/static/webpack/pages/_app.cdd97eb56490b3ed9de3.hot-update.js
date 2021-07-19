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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (router.pathname === '/' && !props.reload) {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'RELOAD', 'true', {
        path: '/'
      });
      checkReload();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (router.pathname !== '/') {
      Object(nookies__WEBPACK_IMPORTED_MODULE_5__["setCookie"])(null, 'RELOAD', 'true', {
        path: '/'
      }); // setCookie(null, 'MENU_ACTIVE', 'false', {
      //   path: '/'
      // })

      setMenuActive(false);
    } else {
      setMenuActive(true); // setCookie(null, 'MENU_ACTIVE', 'true', {
      //   path: '/'
      // })

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
    menuActive: menuActive,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }, this);
}

_s(MyApp, "9sznDHeX60dyYkNfUyeC7Gtob7o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJyZWxvYWQiLCJzZXRDb29raWUiLCJwYXRoIiwiY2hlY2tSZWxvYWQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwiYXBwUHJvcHMiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwiY3R4IiwiUkVMT0FEIiwiTUVOVV9BQ1RJVkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLFNBQVNBLEtBQVQsT0FBb0U7QUFBQTs7QUFBQSxNQUFuREMsU0FBbUQsUUFBbkRBLFNBQW1EO0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCOztBQUFBLGtCQUU5QkMsc0RBQVEsQ0FBQyxJQUFELENBRnNCO0FBQUEsTUFFM0RDLFVBRjJEO0FBQUEsTUFFL0NDLGFBRitDOztBQUlsRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsTUFBTSxDQUFDTSxRQUFQLEtBQW9CLEdBQXBCLElBQTJCLENBQUNMLEtBQUssQ0FBQ00sTUFBdEMsRUFBOEM7QUFDNUNDLCtEQUFTLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsTUFBakIsRUFBeUI7QUFDaENDLFlBQUksRUFBRTtBQUQwQixPQUF6QixDQUFUO0FBR0FDLGlCQUFXO0FBQ1o7QUFDRixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0FMLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLE1BQU0sQ0FBQ00sUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkUsK0RBQVMsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixNQUFqQixFQUF5QjtBQUNoQ0MsWUFBSSxFQUFFO0FBRDBCLE9BQXpCLENBQVQsQ0FEMkIsQ0FJM0I7QUFDQTtBQUNBOztBQUNBTCxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBUkQsTUFRTztBQUNMQSxtQkFBYSxDQUFDLElBQUQsQ0FBYixDQURLLENBRUw7QUFDQTtBQUNBOztBQUNBTSxpQkFBVztBQUNaO0FBQ0YsR0FoQlEsRUFnQk4sQ0FBQ1YsTUFBTSxDQUFDTSxRQUFSLENBaEJNLENBQVQ7O0FBa0JBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSVQsS0FBSyxDQUFDTSxNQUFOLEtBQWlCLE1BQXJCLEVBQTZCO0FBQzNCQywrREFBUyxDQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLE9BQWpCLEVBQTBCO0FBQ2pDQyxZQUFJLEVBQUU7QUFEMkIsT0FBMUIsQ0FBVDtBQUdBVCxZQUFNLENBQUNPLE1BQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0Esc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVKLFVBQXBCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBN0NRRixLOztLQUFBQSxLOztBQStDVEEsS0FBSyxDQUFDYyxlQUFOO0FBQUEsaVZBQXdCLGlCQUFPQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUNDLCtDQUFHLENBQUNGLGVBQUosQ0FBb0JDLFVBQXBCLENBRkQ7O0FBQUE7QUFFaEJFLG9CQUZnQjtBQUdoQkMsbUJBSGdCLEdBR05DLDREQUFZLENBQUNKLFVBQVUsQ0FBQ0ssR0FBWixDQUhOO0FBQUEsNkVBTWpCSCxRQU5pQjtBQU9wQmIsbUJBQUssRUFBRTtBQUNMTSxzQkFBTSxFQUFFUSxPQUFPLENBQUNHLE1BRFg7QUFFTGYsMEJBQVUsRUFBRVksT0FBTyxDQUFDSTtBQUZmO0FBUGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2V0QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNkZDk3ZWI1NjQ5MGIzZWQ5ZGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcENvbnRleHQsIEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcywgc2V0Q29va2llIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi90aGVtZXMvTGF5b3V0J1xyXG5cclxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XHJcbiAgcmVsb2FkOiBzdHJpbmdcclxuICBtZW51QWN0aXZlOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBNeUFwcFByb3BzID0gQXBwUHJvcHMgJiB7XHJcbiAgcHJvcHM6IFByb3BzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciwgcHJvcHMgfTogTXlBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmICFwcm9wcy5yZWxvYWQpIHtcclxuICAgICAgc2V0Q29va2llKG51bGwsICdSRUxPQUQnLCAndHJ1ZScsIHtcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSAhPT0gJy8nKSB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ3RydWUnLCB7XHJcbiAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIHNldENvb2tpZShudWxsLCAnTUVOVV9BQ1RJVkUnLCAnZmFsc2UnLCB7XHJcbiAgICAgIC8vICAgcGF0aDogJy8nXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgIC8vIHNldENvb2tpZShudWxsLCAnTUVOVV9BQ1RJVkUnLCAndHJ1ZScsIHtcclxuICAgICAgLy8gICBwYXRoOiAnLydcclxuICAgICAgLy8gfSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKVxyXG5cclxuICBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9wcy5yZWxvYWQgPT09ICd0cnVlJykge1xyXG4gICAgICBzZXRDb29raWUobnVsbCwgJ1JFTE9BRCcsICdmYWxzZScsIHtcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xyXG4gIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcclxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XHJcbiAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhhcHBDb250ZXh0LmN0eClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmFwcFByb3BzLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcmVsb2FkOiBjb29raWVzLlJFTE9BRCxcclxuICAgICAgbWVudUFjdGl2ZTogY29va2llcy5NRU5VX0FDVElWRVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==