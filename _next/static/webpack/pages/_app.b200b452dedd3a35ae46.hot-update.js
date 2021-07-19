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
  }, [router.pathname]); // useEffect(() => initialPathValues, []);
  // useEffect(() => storePathValues, [router.pathname]);

  function initialPathValues() {
    return _initialPathValues.apply(this, arguments);
  }

  function _initialPathValues() {
    _initialPathValues = Object(F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return F_portfolio_projects_Ruggero_schrodingers_cats_musician_band_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(router.asPath);

              if (!(router.pathname === '/' && loader)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return setTimeout(changeLoader, 3000);

            case 4:
              _context.next = 7;
              break;

            case 6:
              if (router.asPath.includes('#')) {
                router.replace('/');
                router.reload();
              } else {
                setMenuActive(false);
              }

            case 7:
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
  }; // function storePathValues() {
  //   const storage = globalThis?.sessionStorage;
  //   if (!storage) return;
  //   const prevPath = storage.getItem("currentPath");
  //   if (!prevPath) {
  //     storage.setItem("prevPath", 'null');
  //   } else {
  //     storage.setItem("prevPath", prevPath);
  //   }
  //   storage.setItem("currentPath", globalThis.location.pathname);
  //   checkMenu(storage)
  //   checkReload(storage)
  // }
  // const checkReload = (storage: Storage) => {
  //   const prevPath = storage.getItem("prevPath");
  //   const currentPath = storage.getItem("currentPath");
  //   if (
  //     prevPath === 'null' ||
  //     (prevPath !== '/' && currentPath === '/') ||
  //     prevPath === currentPath ||
  //     (!prevPath || !currentPath)) {
  //       router.replace('/')
  //       router.reload()
  //   }
  // }
  // const checkMenu = (storage: Storage) => {
  //   const currentPath = storage.getItem("currentPath");
  //   if (currentPath === '/'){
  //     setMenuActive(true)
  //   } else {
  //     setMenuActive(false)
  //   }
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menuActive: menuActive,
    loader: loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsImxvYWRlciIsInNldExvYWRlciIsInVzZUVmZmVjdCIsImluaXRpYWxQYXRoVmFsdWVzIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwic2V0VGltZW91dCIsImNoYW5nZUxvYWRlciIsImluY2x1ZGVzIiwicmVwbGFjZSIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFBQSxtQkFHN0JGLHNEQUFRLENBQUMsSUFBRCxDQUhxQjtBQUFBLE1BR2xERyxNQUhrRDtBQUFBLE1BRzFDQyxTQUgwQzs7QUFLekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLENBQUNQLE1BQU0sQ0FBQ1EsUUFBUixDQUZNLENBQVQsQ0FMeUQsQ0FRekQ7QUFFQTs7QUFWeUQsV0FZMUNELGlCQVowQztBQUFBO0FBQUE7O0FBQUE7QUFBQSw0VkFZekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRSxxQkFBTyxDQUFDQyxHQUFSLENBQVlWLE1BQU0sQ0FBQ1csTUFBbkI7O0FBREYsb0JBR01YLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUFwQixJQUEyQkosTUFIakM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJVVEsVUFBVSxDQUFDQyxZQUFELEVBQWUsSUFBZixDQUpwQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFLUyxrQkFBSWIsTUFBTSxDQUFDVyxNQUFQLENBQWNHLFFBQWQsQ0FBdUIsR0FBdkIsQ0FBSixFQUFpQztBQUN0Q2Qsc0JBQU0sQ0FBQ2UsT0FBUCxDQUFlLEdBQWY7QUFDQWYsc0JBQU0sQ0FBQ2dCLE1BQVA7QUFDRCxlQUhNLE1BR0E7QUFDTGIsNkJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDs7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVp5RDtBQUFBO0FBQUE7O0FBeUJ6RCxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCUixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGRCxDQXpCeUQsQ0E2QnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVILFVBQXBCO0FBQWdDLFVBQU0sRUFBRUUsTUFBeEM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0F4RVFGLEs7O0tBQUFBLEs7QUEwRU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjIwMGI0NTJkZWRkM2EzNWFlNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxQYXRoVmFsdWVzKClcclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IGluaXRpYWxQYXRoVmFsdWVzLCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiBzdG9yZVBhdGhWYWx1ZXMsIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbFBhdGhWYWx1ZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoKTtcclxuXHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgbG9hZGVyKXtcclxuICAgICAgYXdhaXQgc2V0VGltZW91dChjaGFuZ2VMb2FkZXIsIDMwMDApXHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5hc1BhdGguaW5jbHVkZXMoJyMnKSkge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZUxvYWRlciA9ICgpID0+IHtcclxuICAgIHNldExvYWRlcihmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHN0b3JlUGF0aFZhbHVlcygpIHtcclxuICAvLyAgIGNvbnN0IHN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZTtcclxuICAvLyAgIGlmICghc3RvcmFnZSkgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAvLyAgIGlmICghcHJldlBhdGgpIHtcclxuICAvLyAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgJ251bGwnKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByZXZQYXRoXCIsIHByZXZQYXRoKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYXRoXCIsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAvLyAgIGNoZWNrTWVudShzdG9yYWdlKVxyXG4gIC8vICAgY2hlY2tSZWxvYWQoc3RvcmFnZSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IGNoZWNrUmVsb2FkID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IHByZXZQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwicHJldlBhdGhcIik7XHJcbiAgLy8gICBjb25zdCBjdXJyZW50UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG5cclxuICAvLyAgIGlmIChcclxuICAvLyAgICAgcHJldlBhdGggPT09ICdudWxsJyB8fFxyXG4gIC8vICAgICAocHJldlBhdGggIT09ICcvJyAmJiBjdXJyZW50UGF0aCA9PT0gJy8nKSB8fFxyXG4gIC8vICAgICBwcmV2UGF0aCA9PT0gY3VycmVudFBhdGggfHxcclxuICAvLyAgICAgKCFwcmV2UGF0aCB8fCAhY3VycmVudFBhdGgpKSB7XHJcbiAgLy8gICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gIC8vICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgY2hlY2tNZW51ID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcbiAgLy8gICBpZiAoY3VycmVudFBhdGggPT09ICcvJyl7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IGxvYWRlcj17bG9hZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==