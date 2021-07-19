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
              if (!(router.pathname === '/' && loader)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return setTimeout(changeLoader, 3000);

            case 3:
              _context.next = 6;
              break;

            case 5:
              if (router.pathname.includes('#')) {
                router.replace('/');
                router.reload();
              } else {
                setMenuActive(false);
              }

            case 6:
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
      lineNumber: 72,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlU3RhdGUiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsImxvYWRlciIsInNldExvYWRlciIsInVzZUVmZmVjdCIsImluaXRpYWxQYXRoVmFsdWVzIiwicGF0aG5hbWUiLCJzZXRUaW1lb3V0IiwiY2hhbmdlTG9hZGVyIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUEyRDtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjs7QUFBQSxrQkFFckJDLHNEQUFRLENBQUMsSUFBRCxDQUZhO0FBQUEsTUFFbERDLFVBRmtEO0FBQUEsTUFFdENDLGFBRnNDOztBQUFBLG1CQUc3QkYsc0RBQVEsQ0FBQyxJQUFELENBSHFCO0FBQUEsTUFHbERHLE1BSGtEO0FBQUEsTUFHMUNDLFNBSDBDOztBQUt6REMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHFCQUFpQjtBQUNsQixHQUZRLEVBRU4sQ0FBQ1AsTUFBTSxDQUFDUSxRQUFSLENBRk0sQ0FBVCxDQUx5RCxDQVF6RDtBQUVBOztBQVZ5RCxXQVkxQ0QsaUJBWjBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRWQVl6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ01QLE1BQU0sQ0FBQ1EsUUFBUCxLQUFvQixHQUFwQixJQUEyQkosTUFEakM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFFVUssVUFBVSxDQUFDQyxZQUFELEVBQWUsSUFBZixDQUZwQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHUyxrQkFBSVYsTUFBTSxDQUFDUSxRQUFQLENBQWdCRyxRQUFoQixDQUF5QixHQUF6QixDQUFKLEVBQW1DO0FBQ3hDWCxzQkFBTSxDQUFDWSxPQUFQLENBQWUsR0FBZjtBQUNBWixzQkFBTSxDQUFDYSxNQUFQO0FBQ0QsZUFITSxNQUdBO0FBQ0xWLDZCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FaeUQ7QUFBQTtBQUFBOztBQXVCekQsTUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkwsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBRkQsQ0F2QnlELENBMkJ6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFSCxVQUFwQjtBQUFnQyxVQUFNLEVBQUVFLE1BQXhDO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUwsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBdEVRRixLOztLQUFBQSxLO0FBd0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJkYWMzOTVkOTIyNWY5YTRmMTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsUGF0aFZhbHVlcygpXHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiBpbml0aWFsUGF0aFZhbHVlcywgW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4gc3RvcmVQYXRoVmFsdWVzLCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxQYXRoVmFsdWVzKCkge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmIGxvYWRlcil7XHJcbiAgICAgIGF3YWl0IHNldFRpbWVvdXQoY2hhbmdlTG9hZGVyLCAzMDAwKVxyXG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJyMnKSkge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZUxvYWRlciA9ICgpID0+IHtcclxuICAgIHNldExvYWRlcihmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHN0b3JlUGF0aFZhbHVlcygpIHtcclxuICAvLyAgIGNvbnN0IHN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZTtcclxuICAvLyAgIGlmICghc3RvcmFnZSkgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAvLyAgIGlmICghcHJldlBhdGgpIHtcclxuICAvLyAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgJ251bGwnKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByZXZQYXRoXCIsIHByZXZQYXRoKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYXRoXCIsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAvLyAgIGNoZWNrTWVudShzdG9yYWdlKVxyXG4gIC8vICAgY2hlY2tSZWxvYWQoc3RvcmFnZSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IGNoZWNrUmVsb2FkID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IHByZXZQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwicHJldlBhdGhcIik7XHJcbiAgLy8gICBjb25zdCBjdXJyZW50UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG5cclxuICAvLyAgIGlmIChcclxuICAvLyAgICAgcHJldlBhdGggPT09ICdudWxsJyB8fFxyXG4gIC8vICAgICAocHJldlBhdGggIT09ICcvJyAmJiBjdXJyZW50UGF0aCA9PT0gJy8nKSB8fFxyXG4gIC8vICAgICBwcmV2UGF0aCA9PT0gY3VycmVudFBhdGggfHxcclxuICAvLyAgICAgKCFwcmV2UGF0aCB8fCAhY3VycmVudFBhdGgpKSB7XHJcbiAgLy8gICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gIC8vICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgY2hlY2tNZW51ID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcbiAgLy8gICBpZiAoY3VycmVudFBhdGggPT09ICcvJyl7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IGxvYWRlcj17bG9hZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==