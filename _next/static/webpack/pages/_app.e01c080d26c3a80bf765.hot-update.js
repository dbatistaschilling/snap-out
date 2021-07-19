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
    console.log('prevPath', prevPath);
    console.log('currentPath', currentPath);

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
      lineNumber: 91,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsInN0b3JlUGF0aFZhbHVlcyIsImFzUGF0aCIsInN0b3JhZ2UiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJwcmV2UGF0aCIsImdldEl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNoZWNrTWVudSIsImNoZWNrUmVsb2FkIiwibG9jYWxTdG9yYWdlIiwiY3VycmVudFBhdGgiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBR3pEQyx5REFBUyxDQUFDO0FBQUEsV0FBTUMsZUFBTjtBQUFBLEdBQUQsRUFBd0IsQ0FBQ0wsTUFBTSxDQUFDTSxNQUFSLENBQXhCLENBQVQ7O0FBRUEsV0FBU0QsZUFBVCxHQUEyQjtBQUN6QixRQUFNRSxPQUFPLEdBQUdDLFVBQUgsYUFBR0EsVUFBSCx1QkFBR0EsVUFBVSxDQUFFQyxjQUE1QjtBQUNBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjLE9BRlcsQ0FHekI7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYkgsYUFBTyxDQUFDSyxPQUFSLENBQWdCLFVBQWhCLEVBQTRCLE1BQTVCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGFBQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFoQixFQUE0QkYsUUFBNUI7QUFDRCxLQVR3QixDQVV6Qjs7O0FBQ0FILFdBQU8sQ0FBQ0ssT0FBUixDQUFnQixhQUFoQixFQUErQkosVUFBVSxDQUFDSyxRQUFYLENBQW9CQyxRQUFuRDtBQUVBQyxhQUFTO0FBQ1RDLGVBQVc7QUFDWjs7QUFFRCxNQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1OLFFBQVEsR0FBR08sWUFBWSxDQUFDTixPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsUUFBTU8sV0FBVyxHQUFHRCxZQUFZLENBQUNOLE9BQWIsQ0FBcUIsYUFBckIsQ0FBcEI7QUFFQVEsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlYsUUFBeEI7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsV0FBM0I7O0FBRUEsUUFBSVIsUUFBUSxLQUFLLE1BQWIsSUFBd0JBLFFBQVEsS0FBSyxHQUFiLElBQW9CUSxXQUFXLEtBQUssR0FBaEUsRUFBc0U7QUFDcEVsQixZQUFNLENBQUNxQixPQUFQLENBQWUsR0FBZjtBQUNBckIsWUFBTSxDQUFDc0IsTUFBUDtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxNQUFNUCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQU1HLFdBQVcsR0FBR0QsWUFBWSxDQUFDTixPQUFiLENBQXFCLGFBQXJCLENBQXBCOztBQUNBLFFBQUlPLFdBQVcsS0FBSyxHQUFwQixFQUF3QjtBQUN0QmYsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEEsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBUEQsQ0FuQ3lELENBNEN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFRCxVQUFwQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtEOztHQXpGUUYsSzs7S0FBQUEsSztBQTJGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDFjMDgwZDI2YzNhODBiZjc2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi90aGVtZXMvTGF5b3V0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9OiBBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiBzdG9yZVBhdGhWYWx1ZXMsIFtyb3V0ZXIuYXNQYXRoXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0b3JlUGF0aFZhbHVlcygpIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZTtcclxuICAgIGlmICghc3RvcmFnZSkgcmV0dXJuO1xyXG4gICAgLy8gU2V0IHRoZSBwcmV2aW91cyBwYXRoIGFzIHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBwYXRoLlxyXG4gICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAgIGlmICghcHJldlBhdGgpIHtcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgJ251bGwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByZXZQYXRoXCIsIHByZXZQYXRoKTtcclxuICAgIH1cclxuICAgIC8vIFNldCB0aGUgY3VycmVudCBwYXRoIHZhbHVlIGJ5IGxvb2tpbmcgYXQgdGhlIGJyb3dzZXIncyBsb2NhdGlvbiBvYmplY3QuXHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50UGF0aFwiLCBnbG9iYWxUaGlzLmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgICBjaGVja01lbnUoKVxyXG4gICAgY2hlY2tSZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tSZWxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2UGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmV2UGF0aCcpXHJcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UGF0aCcpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3ByZXZQYXRoJywgcHJldlBhdGgpO1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRQYXRoJywgY3VycmVudFBhdGgpO1xyXG5cclxuICAgIGlmIChwcmV2UGF0aCA9PT0gJ251bGwnIHx8IChwcmV2UGF0aCAhPT0gJy8nICYmIGN1cnJlbnRQYXRoID09PSAnLycpKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja01lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UGF0aCcpXHJcbiAgICBpZiAoY3VycmVudFBhdGggPT09ICcvJyl7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgY291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJylcclxuICAvLyAgIGlmICghY291bnQpIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcsICcwJylcclxuICAvLyAgICAgY2hlY2tSZWxvYWQoKVxyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIGNvbnNvbGUubG9nKHdpbmRvdy5oaXN0b3J5KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgcmVsb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JFTE9BRCcpXHJcbiAgICAvLyBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgIXJlbG9hZCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnT1BBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQScpO1xyXG4gICAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUkVMT0FEJywgJ3RydWUnKVxyXG4gICAgLy8gfVxyXG4gIC8vIH0sIFtdKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2cocm91dGVyKTtcclxuICAvLyAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gIC8vICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgLy8gICAgIGNoZWNrUmVsb2FkKClcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3JvdXRlci5wYXRobmFtZV0pXHJcblxyXG4gIC8vIGNvbnN0IGNoZWNrUmVsb2FkID0gKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVsb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JFTE9BRCcpXHJcbiAgLy8gICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnKVxyXG5cclxuICAvLyAgIGlmIChyZWxvYWQgPT09ICd0cnVlJyB8fCBOdW1iZXIoY291bnQpID09PSAwKSB7XHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAnZmFsc2UnKVxyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJywgJzEnKVxyXG4gIC8vICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgLy8gICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBtZW51QWN0aXZlPXttZW51QWN0aXZlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==