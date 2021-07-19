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
    return storePathValues;
  }, [router.asPath]);

  function storePathValues() {
    var storage = globalThis === null || globalThis === void 0 ? void 0 : globalThis.sessionStorage;
    if (!storage) return; // Set the previous path as the value of the current path.

    var prevPath = storage.getItem("currentPath");

    if (!prevPath) {
      storage.setItem("prevPath", 'null');
    } else {
      storage.setItem("prevPath", prevPath);
    } // Set the current path value by looking at the browser's location object.


    storage.setItem("currentPath", globalThis.location.pathname);
    checkMenu();
    checkReload();
  }

  var checkReload = function checkReload() {
    var prevPath = localStorage.getItem('prevPath');
    var currentPath = localStorage.getItem('currentPath');

    if (prevPath === 'null' || prevPath !== '/' && currentPath === '/') {
      router.replace('/');
      router.reload();
    }
  };

  var checkMenu = function checkMenu() {
    var currentPath = localStorage.getItem('currentPath');

    if (currentPath === '/') {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  }; // useEffect(() => {
  //   const count = localStorage.getItem('FIRSTLOAD_COUNT')
  //   if (!count) {
  //     localStorage.setItem('FIRSTLOAD_COUNT', '0')
  //     checkReload()
  //   }
  //   console.log(window.history);
  // const reload = localStorage.getItem('RELOAD')
  // if (router.pathname === '/' && !reload) {
  //   console.log('OPAAAAAAAAAAAAAAAAAAAAAAA');
  //   localStorage.setItem('RELOAD', 'true')
  // }
  // }, [])
  // useEffect(() => {
  //   console.log(router);
  //   if (router.pathname === '/') {
  //     setMenuActive(true)
  //     checkReload()
  //   } else {
  //     localStorage.setItem('RELOAD', 'true')
  //     setMenuActive(false)
  //   }
  // }, [router.pathname])
  // const checkReload = () => {
  //   const reload = localStorage.getItem('RELOAD')
  //   const count = localStorage.getItem('FIRSTLOAD_COUNT')
  //   if (reload === 'true' || Number(count) === 0) {
  //     localStorage.setItem('RELOAD', 'false')
  //     localStorage.setItem('FIRSTLOAD_COUNT', '1')
  //     router.replace('/')
  //     router.reload()
  //   }
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuActive: menuActive,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 7
  }, this);
}

_s(MyApp, "3yEOg1KHtw7KKl/lT78KUHnAhLQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsInN0b3JlUGF0aFZhbHVlcyIsImFzUGF0aCIsInN0b3JhZ2UiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJwcmV2UGF0aCIsImdldEl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNoZWNrTWVudSIsImNoZWNrUmVsb2FkIiwibG9jYWxTdG9yYWdlIiwiY3VycmVudFBhdGgiLCJyZXBsYWNlIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFHekRDLHlEQUFTLENBQUM7QUFBQSxXQUFNQyxlQUFOO0FBQUEsR0FBRCxFQUF3QixDQUFDTCxNQUFNLENBQUNNLE1BQVIsQ0FBeEIsQ0FBVDs7QUFFQSxXQUFTRCxlQUFULEdBQTJCO0FBQ3pCLFFBQU1FLE9BQU8sR0FBR0MsVUFBSCxhQUFHQSxVQUFILHVCQUFHQSxVQUFVLENBQUVDLGNBQTVCO0FBQ0EsUUFBSSxDQUFDRixPQUFMLEVBQWMsT0FGVyxDQUd6Qjs7QUFDQSxRQUFNRyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixhQUFoQixDQUFqQjs7QUFDQSxRQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiSCxhQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBNUI7QUFDRCxLQUZELE1BRU87QUFDTEwsYUFBTyxDQUFDSyxPQUFSLENBQWdCLFVBQWhCLEVBQTRCRixRQUE1QjtBQUNELEtBVHdCLENBVXpCOzs7QUFDQUgsV0FBTyxDQUFDSyxPQUFSLENBQWdCLGFBQWhCLEVBQStCSixVQUFVLENBQUNLLFFBQVgsQ0FBb0JDLFFBQW5EO0FBRUFDLGFBQVM7QUFDVEMsZUFBVztBQUNaOztBQUVELE1BQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTU4sUUFBUSxHQUFHTyxZQUFZLENBQUNOLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7QUFDQSxRQUFNTyxXQUFXLEdBQUdELFlBQVksQ0FBQ04sT0FBYixDQUFxQixhQUFyQixDQUFwQjs7QUFFQSxRQUFJRCxRQUFRLEtBQUssTUFBYixJQUF3QkEsUUFBUSxLQUFLLEdBQWIsSUFBb0JRLFdBQVcsS0FBSyxHQUFoRSxFQUFzRTtBQUNwRWxCLFlBQU0sQ0FBQ21CLE9BQVAsQ0FBZSxHQUFmO0FBQ0FuQixZQUFNLENBQUNvQixNQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVVBLE1BQU1MLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBTUcsV0FBVyxHQUFHRCxZQUFZLENBQUNOLE9BQWIsQ0FBcUIsYUFBckIsQ0FBcEI7O0FBQ0EsUUFBSU8sV0FBVyxLQUFLLEdBQXBCLEVBQXdCO0FBQ3RCZixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FQRCxDQWhDeUQsQ0F5Q3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVELFVBQXBCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBdEZRRixLOztLQUFBQSxLO0FBd0ZNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM5N2UwODllZGE4ZmRkMGFmODc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHN0b3JlUGF0aFZhbHVlcywgW3JvdXRlci5hc1BhdGhdKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RvcmVQYXRoVmFsdWVzKCkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgaWYgKCFzdG9yYWdlKSByZXR1cm47XHJcbiAgICAvLyBTZXQgdGhlIHByZXZpb3VzIHBhdGggYXMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IHBhdGguXHJcbiAgICBjb25zdCBwcmV2UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG4gICAgaWYgKCFwcmV2UGF0aCkge1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcmV2UGF0aFwiLCAnbnVsbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgcHJldlBhdGgpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHRoZSBjdXJyZW50IHBhdGggdmFsdWUgYnkgbG9va2luZyBhdCB0aGUgYnJvd3NlcidzIGxvY2F0aW9uIG9iamVjdC5cclxuICAgIHN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYXRoXCIsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGNoZWNrTWVudSgpXHJcbiAgICBjaGVja1JlbG9hZCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByZXZQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZXZQYXRoJylcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQYXRoJylcclxuXHJcbiAgICBpZiAocHJldlBhdGggPT09ICdudWxsJyB8fCAocHJldlBhdGggIT09ICcvJyAmJiBjdXJyZW50UGF0aCA9PT0gJy8nKSkge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFBhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFBhdGgnKVxyXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSAnLycpe1xyXG4gICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcbiAgLy8gICBpZiAoIWNvdW50KSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMCcpXHJcbiAgLy8gICAgIGNoZWNrUmVsb2FkKClcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyh3aW5kb3cuaGlzdG9yeSk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IHJlbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdSRUxPQUQnKVxyXG4gICAgLy8gaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmICFyZWxvYWQpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ09QQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKTtcclxuICAgIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICd0cnVlJylcclxuICAgIC8vIH1cclxuICAvLyB9LCBbXSlcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgLy8gICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcclxuICAvLyAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gIC8vICAgICBjaGVja1JlbG9hZCgpXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ3RydWUnKVxyXG4gIC8vICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtyb3V0ZXIucGF0aG5hbWVdKVxyXG5cclxuICAvLyBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAvLyAgIGNvbnN0IHJlbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdSRUxPQUQnKVxyXG4gIC8vICAgY29uc3QgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJylcclxuXHJcbiAgLy8gICBpZiAocmVsb2FkID09PSAndHJ1ZScgfHwgTnVtYmVyKGNvdW50KSA9PT0gMCkge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ2ZhbHNlJylcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcsICcxJylcclxuICAvLyAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gIC8vICAgICByb3V0ZXIucmVsb2FkKClcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJzb3VyY2VSb290IjoiIn0=