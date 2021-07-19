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
  // const [menuActive, setMenuActive] = useState()
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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

    console.log(props.menuActive);
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
      lineNumber: 58,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJwYXRobmFtZSIsInJlbG9hZCIsInNldENvb2tpZSIsInBhdGgiLCJjaGVja1JlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJtZW51QWN0aXZlIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsIkFwcCIsImFwcFByb3BzIiwiY29va2llcyIsInBhcnNlQ29va2llcyIsImN0eCIsIlJFTE9BRCIsIk1FTlVfQUNUSVZFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFXQSxTQUFTQSxLQUFULE9BQW9FO0FBQUE7O0FBQUEsTUFBbkRDLFNBQW1ELFFBQW5EQSxTQUFtRDtBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUVsRTtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixNQUFNLENBQUNHLFFBQVAsS0FBb0IsR0FBcEIsSUFBMkIsQ0FBQ0YsS0FBSyxDQUFDRyxNQUF0QyxFQUE4QztBQUM1Q0MsK0RBQVMsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixNQUFqQixFQUF5QjtBQUNoQ0MsWUFBSSxFQUFFO0FBRDBCLE9BQXpCLENBQVQ7QUFHQUMsaUJBQVc7QUFDWjtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQUwseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLEdBQXBCLElBQTJCRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsT0FBaEQsRUFBeUQ7QUFDdkRDLCtEQUFTLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsTUFBakIsRUFBeUI7QUFDaENDLFlBQUksRUFBRTtBQUQwQixPQUF6QixDQUFUO0FBR0FELCtEQUFTLENBQUMsSUFBRCxFQUFPLGFBQVAsRUFBc0IsT0FBdEIsRUFBK0I7QUFDdENDLFlBQUksRUFBRTtBQURnQyxPQUEvQixDQUFUO0FBR0QsS0FQRCxNQU9PLElBQUlOLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixHQUFwQixJQUEyQkYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLE1BQWhELEVBQXdEO0FBQzdEQywrREFBUyxDQUFDLElBQUQsRUFBTyxhQUFQLEVBQXNCLE1BQXRCLEVBQThCO0FBQ3JDQyxZQUFJLEVBQUU7QUFEK0IsT0FBOUIsQ0FBVDtBQUdBQyxpQkFBVztBQUNaOztBQUNEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBSyxDQUFDUyxVQUFsQjtBQUVELEdBaEJRLEVBZ0JOLENBQUNWLE1BQU0sQ0FBQ0csUUFBUixDQWhCTSxDQUFUOztBQWtCQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUlOLEtBQUssQ0FBQ0csTUFBTixLQUFpQixNQUFyQixFQUE2QjtBQUMzQkMsK0RBQVMsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixPQUFqQixFQUEwQjtBQUNqQ0MsWUFBSSxFQUFFO0FBRDJCLE9BQTFCLENBQVQ7QUFHQU4sWUFBTSxDQUFDSSxNQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFSCxLQUFLLENBQUNTLFVBQU4sS0FBcUIsTUFBckIsR0FBOEIsSUFBOUIsR0FBcUMsS0FBekQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlWCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0E3Q1FGLEs7O0tBQUFBLEs7O0FBK0NUQSxLQUFLLENBQUNjLGVBQU47QUFBQSxpVkFBd0IsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQ0MsK0NBQUcsQ0FBQ0YsZUFBSixDQUFvQkMsVUFBcEIsQ0FGRDs7QUFBQTtBQUVoQkUsb0JBRmdCO0FBR2hCQyxtQkFIZ0IsR0FHTkMsNERBQVksQ0FBQ0osVUFBVSxDQUFDSyxHQUFaLENBSE47QUFBQSw2RUFNakJILFFBTmlCO0FBT3BCYixtQkFBSyxFQUFFO0FBQ0xHLHNCQUFNLEVBQUVXLE9BQU8sQ0FBQ0csTUFEWDtBQUVMUiwwQkFBVSxFQUFFSyxPQUFPLENBQUNJO0FBRmY7QUFQYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZXRCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWRkODlkNjliMTUzMmQxZGYzY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnXHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcclxuICByZWxvYWQ6IHN0cmluZ1xyXG4gIG1lbnVBY3RpdmU6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIE15QXBwUHJvcHMgPSBBcHBQcm9wcyAmIHtcclxuICBwcm9wczogUHJvcHNcclxufVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyLCBwcm9wcyB9OiBNeUFwcFByb3BzKSB7XHJcblxyXG4gIC8vIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhcHJvcHMucmVsb2FkKSB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnUkVMT0FEJywgJ3RydWUnLCB7XHJcbiAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgIH0pXHJcbiAgICAgIGNoZWNrUmVsb2FkKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgIT09ICcvJyAmJiBwcm9wcy5yZWxvYWQgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICBzZXRDb29raWUobnVsbCwgJ1JFTE9BRCcsICd0cnVlJywge1xyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICB9KVxyXG4gICAgICBzZXRDb29raWUobnVsbCwgJ01FTlVfQUNUSVZFJywgJ2ZhbHNlJywge1xyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiBwcm9wcy5yZWxvYWQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIHNldENvb2tpZShudWxsLCAnTUVOVV9BQ1RJVkUnLCAndHJ1ZScsIHtcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgICAgY2hlY2tSZWxvYWQoKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMubWVudUFjdGl2ZSk7XHJcblxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKVxyXG5cclxuICBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9wcy5yZWxvYWQgPT09ICd0cnVlJykge1xyXG4gICAgICBzZXRDb29raWUobnVsbCwgJ1JFTE9BRCcsICdmYWxzZScsIHtcclxuICAgICAgICBwYXRoOiAnLydcclxuICAgICAgfSlcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e3Byb3BzLm1lbnVBY3RpdmUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XHJcbiAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxyXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKGFwcENvbnRleHQuY3R4KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4uYXBwUHJvcHMsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICByZWxvYWQ6IGNvb2tpZXMuUkVMT0FELFxyXG4gICAgICBtZW51QWN0aXZlOiBjb29raWVzLk1FTlVfQUNUSVZFXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9