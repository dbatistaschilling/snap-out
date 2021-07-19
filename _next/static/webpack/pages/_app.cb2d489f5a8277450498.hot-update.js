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
    checkMenu(storage);
    checkReload(storage);
  }

  var checkReload = function checkReload(storage) {
    var prevPath = storage.getItem("prevPath");
    var currentPath = storage.getItem("currentPath");
    console.log('prevPath', prevPath);
    console.log('currentPath', currentPath);

    if (prevPath === 'null' || prevPath !== '/' && currentPath === '/') {
      router.replace('/');
      router.reload();
    }
  };

  var checkMenu = function checkMenu(storage) {
    var currentPath = storage.getItem("currentPath");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZUVmZmVjdCIsInN0b3JlUGF0aFZhbHVlcyIsInBhdGhuYW1lIiwic3RvcmFnZSIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInByZXZQYXRoIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsImNoZWNrTWVudSIsImNoZWNrUmVsb2FkIiwiY3VycmVudFBhdGgiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBMUNDLFNBQTBDLFFBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9COztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxJQUFELENBRmE7QUFBQSxNQUVsREMsVUFGa0Q7QUFBQSxNQUV0Q0MsYUFGc0M7O0FBR3pEQyx5REFBUyxDQUFDO0FBQUEsV0FBTUMsZUFBTjtBQUFBLEdBQUQsRUFBd0IsQ0FBQ0wsTUFBTSxDQUFDTSxRQUFSLENBQXhCLENBQVQ7O0FBRUEsV0FBU0QsZUFBVCxHQUEyQjtBQUN6QixRQUFNRSxPQUFPLEdBQUdDLFVBQUgsYUFBR0EsVUFBSCx1QkFBR0EsVUFBVSxDQUFFQyxjQUE1QjtBQUNBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjLE9BRlcsQ0FHekI7O0FBQ0EsUUFBTUcsUUFBUSxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYkgsYUFBTyxDQUFDSyxPQUFSLENBQWdCLFVBQWhCLEVBQTRCLE1BQTVCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLGFBQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFoQixFQUE0QkYsUUFBNUI7QUFDRCxLQVR3QixDQVV6Qjs7O0FBQ0FILFdBQU8sQ0FBQ0ssT0FBUixDQUFnQixhQUFoQixFQUErQkosVUFBVSxDQUFDSyxRQUFYLENBQW9CUCxRQUFuRDtBQUVBUSxhQUFTLENBQUNQLE9BQUQsQ0FBVDtBQUNBUSxlQUFXLENBQUNSLE9BQUQsQ0FBWDtBQUNEOztBQUVELE1BQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNSLE9BQUQsRUFBc0I7QUFDeEMsUUFBTUcsUUFBUSxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsVUFBaEIsQ0FBakI7QUFDQSxRQUFNSyxXQUFXLEdBQUdULE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixhQUFoQixDQUFwQjtBQUVBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUixRQUF4QjtBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixXQUEzQjs7QUFFQSxRQUFJTixRQUFRLEtBQUssTUFBYixJQUF3QkEsUUFBUSxLQUFLLEdBQWIsSUFBb0JNLFdBQVcsS0FBSyxHQUFoRSxFQUFzRTtBQUNwRWhCLFlBQU0sQ0FBQ21CLE9BQVAsQ0FBZSxHQUFmO0FBQ0FuQixZQUFNLENBQUNvQixNQUFQO0FBQ0Q7QUFDRixHQVhEOztBQWFBLE1BQU1OLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNQLE9BQUQsRUFBc0I7QUFDdEMsUUFBTVMsV0FBVyxHQUFHVCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FBcEI7O0FBQ0EsUUFBSUssV0FBVyxLQUFLLEdBQXBCLEVBQXdCO0FBQ3RCYixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FQRCxDQW5DeUQsQ0E0Q3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0kscUVBQUMsc0RBQUQ7QUFBUSxjQUFVLEVBQUVELFVBQXBCO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBekZRRixLOztLQUFBQSxLO0FBMkZNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiMmQ0ODlmNWE4Mjc3NDUwNDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHN0b3JlUGF0aFZhbHVlcywgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBmdW5jdGlvbiBzdG9yZVBhdGhWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBzdG9yYWdlID0gZ2xvYmFsVGhpcz8uc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICBpZiAoIXN0b3JhZ2UpIHJldHVybjtcclxuICAgIC8vIFNldCB0aGUgcHJldmlvdXMgcGF0aCBhcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgcGF0aC5cclxuICAgIGNvbnN0IHByZXZQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcbiAgICBpZiAoIXByZXZQYXRoKSB7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByZXZQYXRoXCIsICdudWxsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcmV2UGF0aFwiLCBwcmV2UGF0aCk7XHJcbiAgICB9XHJcbiAgICAvLyBTZXQgdGhlIGN1cnJlbnQgcGF0aCB2YWx1ZSBieSBsb29raW5nIGF0IHRoZSBicm93c2VyJ3MgbG9jYXRpb24gb2JqZWN0LlxyXG4gICAgc3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFBhdGhcIiwgZ2xvYmFsVGhpcy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gICAgY2hlY2tNZW51KHN0b3JhZ2UpXHJcbiAgICBjaGVja1JlbG9hZChzdG9yYWdlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tSZWxvYWQgPSAoc3RvcmFnZTogU3RvcmFnZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJwcmV2UGF0aFwiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3ByZXZQYXRoJywgcHJldlBhdGgpO1xyXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRQYXRoJywgY3VycmVudFBhdGgpO1xyXG5cclxuICAgIGlmIChwcmV2UGF0aCA9PT0gJ251bGwnIHx8IChwcmV2UGF0aCAhPT0gJy8nICYmIGN1cnJlbnRQYXRoID09PSAnLycpKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja01lbnUgPSAoc3RvcmFnZTogU3RvcmFnZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAgIGlmIChjdXJyZW50UGF0aCA9PT0gJy8nKXtcclxuICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnKVxyXG4gIC8vICAgaWYgKCFjb3VudCkge1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRklSU1RMT0FEX0NPVU5UJywgJzAnKVxyXG4gIC8vICAgICBjaGVja1JlbG9hZCgpXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2cod2luZG93Lmhpc3RvcnkpO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhcmVsb2FkKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdPUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBJyk7XHJcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSRUxPQUQnLCAndHJ1ZScpXHJcbiAgICAvLyB9XHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gIC8vICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAvLyAgICAgY2hlY2tSZWxvYWQoKVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICd0cnVlJylcclxuICAvLyAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAvLyAgIH1cclxuICAvLyB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgLy8gY29uc3QgY2hlY2tSZWxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCByZWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUkVMT0FEJylcclxuICAvLyAgIGNvbnN0IGNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0ZJUlNUTE9BRF9DT1VOVCcpXHJcblxyXG4gIC8vICAgaWYgKHJlbG9hZCA9PT0gJ3RydWUnIHx8IE51bWJlcihjb3VudCkgPT09IDApIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1JFTE9BRCcsICdmYWxzZScpXHJcbiAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdGSVJTVExPQURfQ09VTlQnLCAnMScpXHJcbiAgLy8gICAgIHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAvLyAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9