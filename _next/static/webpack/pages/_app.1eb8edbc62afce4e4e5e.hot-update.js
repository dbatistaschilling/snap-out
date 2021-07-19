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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loader = _useState2[0],
      setLoader = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return initialPathValues;
  }, [router.pathname]); // useEffect(() => initialPathValues, []);
  // useEffect(() => storePathValues, [router.pathname]);

  function initialPathValues() {
    console.log('OLAAAAAAAAAAAAAA');
    loader && setTimeout(changeLoader, 3000);
  }

  var changeLoader = function changeLoader() {
    console.log(router.pathname);

    if (router.pathname === '/') {
      setMenuActive(true);
    } else {
      setLoader(true);
      setMenuActive(false);
    }

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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuActive: menuActive,
    loader: loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsImxvYWRlciIsInNldExvYWRlciIsInVzZUVmZmVjdCIsImluaXRpYWxQYXRoVmFsdWVzIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImNoYW5nZUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBQUEsbUJBRzdCRixzREFBUSxDQUFDLElBQUQsQ0FIcUI7QUFBQSxNQUdsREcsTUFIa0Q7QUFBQSxNQUcxQ0MsU0FIMEM7O0FBS3pEQyx5REFBUyxDQUFDO0FBQUEsV0FBTUMsaUJBQU47QUFBQSxHQUFELEVBQTBCLENBQUNQLE1BQU0sQ0FBQ1EsUUFBUixDQUExQixDQUFULENBTHlELENBTXpEO0FBRUE7O0FBRUEsV0FBU0QsaUJBQVQsR0FBNkI7QUFDM0JFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBRUFOLFVBQU0sSUFBSU8sVUFBVSxDQUFDQyxZQUFELEVBQWUsSUFBZixDQUFwQjtBQUNEOztBQUVELE1BQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFNLENBQUNRLFFBQW5COztBQUVBLFFBQUlSLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkwsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEUsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRixtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUNERSxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FWRCxDQWhCeUQsQ0E0QnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVILFVBQXBCO0FBQWdDLFVBQU0sRUFBRUUsTUFBeEM7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRDs7R0F2RVFGLEs7O0tBQUFBLEs7QUF5RU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWViOGVkYmM2MmFmY2U0ZTRlNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vdGhlbWVzL0xheW91dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfTogQXBwUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IGluaXRpYWxQYXRoVmFsdWVzLCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IGluaXRpYWxQYXRoVmFsdWVzLCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiBzdG9yZVBhdGhWYWx1ZXMsIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbFBhdGhWYWx1ZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnT0xBQUFBQUFBQUFBQUFBQScpO1xyXG5cclxuICAgIGxvYWRlciAmJiBzZXRUaW1lb3V0KGNoYW5nZUxvYWRlciwgMzAwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZUxvYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExvYWRlcih0cnVlKVxyXG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGVyKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gc3RvcmVQYXRoVmFsdWVzKCkge1xyXG4gIC8vICAgY29uc3Qgc3RvcmFnZSA9IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlO1xyXG4gIC8vICAgaWYgKCFzdG9yYWdlKSByZXR1cm47XHJcbiAgLy8gICBjb25zdCBwcmV2UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG4gIC8vICAgaWYgKCFwcmV2UGF0aCkge1xyXG4gIC8vICAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcmV2UGF0aFwiLCAnbnVsbCcpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgcHJldlBhdGgpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFBhdGhcIiwgZ2xvYmFsVGhpcy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gIC8vICAgY2hlY2tNZW51KHN0b3JhZ2UpXHJcbiAgLy8gICBjaGVja1JlbG9hZChzdG9yYWdlKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgY2hlY2tSZWxvYWQgPSAoc3RvcmFnZTogU3RvcmFnZSkgPT4ge1xyXG4gIC8vICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJwcmV2UGF0aFwiKTtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcblxyXG4gIC8vICAgaWYgKFxyXG4gIC8vICAgICBwcmV2UGF0aCA9PT0gJ251bGwnIHx8XHJcbiAgLy8gICAgIChwcmV2UGF0aCAhPT0gJy8nICYmIGN1cnJlbnRQYXRoID09PSAnLycpIHx8XHJcbiAgLy8gICAgIHByZXZQYXRoID09PSBjdXJyZW50UGF0aCB8fFxyXG4gIC8vICAgICAoIXByZXZQYXRoIHx8ICFjdXJyZW50UGF0aCkpIHtcclxuICAvLyAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgLy8gICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBjaGVja01lbnUgPSAoc3RvcmFnZTogU3RvcmFnZSkgPT4ge1xyXG4gIC8vICAgY29uc3QgY3VycmVudFBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAvLyAgIGlmIChjdXJyZW50UGF0aCA9PT0gJy8nKXtcclxuICAvLyAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX0gbG9hZGVyPXtsb2FkZXJ9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9