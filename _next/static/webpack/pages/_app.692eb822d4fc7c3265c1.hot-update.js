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
  }, [router.pathname]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsInN0b3JlUGF0aFZhbHVlcyIsInBhdGhuYW1lIiwic3RvcmFnZSIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInByZXZQYXRoIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImNoZWNrTWVudSIsImNoZWNrUmVsb2FkIiwibG9jYWxTdG9yYWdlIiwiY3VycmVudFBhdGgiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBR3pEQyx5REFBUyxDQUFDO0FBQUEsV0FBTUMsZUFBTjtBQUFBLEdBQUQsRUFBd0IsQ0FBQ0wsTUFBTSxDQUFDTSxRQUFSLENBQXhCLENBQVQ7O0FBRUEsV0FBU0QsZUFBVCxHQUEyQjtBQUN6QixRQUFNRSxPQUFPLEdBQUdDLFVBQUgsYUFBR0EsVUFBSCx1QkFBR0EsVUFBVSxDQUFFQyxjQUE1QjtBQUNBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjLE9BRlcsQ0FHekI7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYkgsYUFBTyxDQUFDSyxPQUFSLENBQWdCLFVBQWhCLEVBQTRCLE1BQTVCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGFBQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFoQixFQUE0QkYsUUFBNUI7QUFDRCxLQVR3QixDQVV6Qjs7O0FBQ0FILFdBQU8sQ0FBQ0ssT0FBUixDQUFnQixhQUFoQixFQUErQkosVUFBVSxDQUFDSyxRQUFYLENBQW9CUCxRQUFuRDtBQUVBUSxhQUFTO0FBQ1RDLGVBQVc7QUFDWjs7QUFFRCxNQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQU1MLFFBQVEsR0FBR00sWUFBWSxDQUFDTCxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsUUFBTU0sV0FBVyxHQUFHRCxZQUFZLENBQUNMLE9BQWIsQ0FBcUIsYUFBckIsQ0FBcEI7QUFFQU8sV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlQsUUFBeEI7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsV0FBM0I7O0FBRUEsUUFBSVAsUUFBUSxLQUFLLE1BQWIsSUFBd0JBLFFBQVEsS0FBSyxHQUFiLElBQW9CTyxXQUFXLEtBQUssR0FBaEUsRUFBc0U7QUFDcEVqQixZQUFNLENBQUNvQixPQUFQLENBQWUsR0FBZjtBQUNBcEIsWUFBTSxDQUFDcUIsTUFBUDtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxNQUFNUCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQU1HLFdBQVcsR0FBR0QsWUFBWSxDQUFDTCxPQUFiLENBQXFCLGFBQXJCLENBQXBCOztBQUNBLFFBQUlNLFdBQVcsS0FBSyxHQUFwQixFQUF3QjtBQUN0QmQsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEEsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBUEQsQ0FuQ3lELENBNEN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFRCxVQUFwQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtEOztHQXpGUUYsSzs7S0FBQUEsSztBQTJGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42OTJlYjgyMmQ0ZmM3YzMyNjVjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi90aGVtZXMvTGF5b3V0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9OiBBcHBQcm9wcykge1xyXG5cclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiBzdG9yZVBhdGhWYWx1ZXMsIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RvcmVQYXRoVmFsdWVzKCkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgaWYgKCFzdG9yYWdlKSByZXR1cm47XHJcbiAgICAvLyBTZXQgdGhlIHByZXZpb3VzIHBhdGggYXMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IHBhdGguXHJcbiAgICBjb25zdCBwcmV2UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG4gICAgaWYgKCFwcmV2UGF0aCkge1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcmV2UGF0aFwiLCAnbnVsbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgcHJldlBhdGgpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHRoZSBjdXJyZW50IHBhdGggdmFsdWUgYnkgbG9va2luZyBhdCB0aGUgYnJvd3NlcidzIGxvY2F0aW9uIG9iamVjdC5cclxuICAgIHN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYXRoXCIsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAgIGNoZWNrTWVudSgpXHJcbiAgICBjaGVja1JlbG9hZCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1JlbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByZXZQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZXZQYXRoJylcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQYXRoJylcclxuXHJcbiAgICBjb25zb2xlLmxvZygncHJldlBhdGgnLCBwcmV2UGF0aCk7XHJcbiAgICBjb25zb2xlLmxvZygnY3VycmVudFBhdGgnLCBjdXJyZW50UGF0aCk7XHJcblxyXG4gICAgaWYgKHByZXZQYXRoID09PSAnbnVsbCcgfHwgKHByZXZQYXRoICE9PSAnLycgJiYgY3VycmVudFBhdGggPT09ICcvJykpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQYXRoJylcclxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gJy8nKXtcclxuICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnKVxyXG4gIC8vICAgaWYgKCFjb3VudCkge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJywgJzAnKVxyXG4gIC8vICAgICBjaGVja1JlbG9hZCgpXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2cod2luZG93Lmhpc3RvcnkpO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhcmVsb2FkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdPUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBJyk7XHJcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgICAvLyB9XHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gIC8vICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAvLyAgICAgY2hlY2tSZWxvYWQoKVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICd0cnVlJylcclxuICAvLyAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgLy8gY29uc3QgY2hlY2tSZWxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAvLyAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcblxyXG4gIC8vICAgaWYgKHJlbG9hZCA9PT0gJ3RydWUnIHx8IE51bWJlcihjb3VudCkgPT09IDApIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICdmYWxzZScpXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMScpXHJcbiAgLy8gICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAvLyAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9