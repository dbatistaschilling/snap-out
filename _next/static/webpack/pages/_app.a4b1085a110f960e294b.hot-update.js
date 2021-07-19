webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

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
              console.log('OLAAAAAAAAAAAAAA');
              _context.t0 = loader;

              if (!_context.t0) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return setTimeout(changeLoader, 3000);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _initialPathValues.apply(this, arguments);
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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_themes_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menuActive: menuActive,
    loader: loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnRzeCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ1c2VFZmZlY3QiLCJpbml0aWFsUGF0aFZhbHVlcyIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJjaGFuZ2VMb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFDLElBQUQsQ0FGYTtBQUFBLE1BRWxEQyxVQUZrRDtBQUFBLE1BRXRDQyxhQUZzQzs7QUFBQSxtQkFHN0JGLHNEQUFRLENBQUMsSUFBRCxDQUhxQjtBQUFBLE1BR2xERyxNQUhrRDtBQUFBLE1BRzFDQyxTQUgwQzs7QUFLekRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxxQkFBaUI7QUFDbEIsR0FGUSxFQUVOLENBQUNQLE1BQU0sQ0FBQ1EsUUFBUixDQUZNLENBQVQsQ0FMeUQsQ0FRekQ7QUFFQTs7QUFWeUQsV0FZMUNELGlCQVowQztBQUFBO0FBQUE7O0FBQUE7QUFBQSw0VkFZekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRSxxQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFERiw0QkFHRU4sTUFIRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdrQk8sVUFBVSxDQUFDQyxZQUFELEVBQWUsSUFBZixDQUg1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVp5RDtBQUFBO0FBQUE7O0FBa0J6RCxNQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsTUFBTSxDQUFDUSxRQUFuQjs7QUFFQSxRQUFJUixNQUFNLENBQUNRLFFBQVAsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JMLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xFLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUYsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDs7QUFDREUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBVkQsQ0FsQnlELENBOEJ6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQVEsY0FBVSxFQUFFSCxVQUFwQjtBQUFnQyxVQUFNLEVBQUVFLE1BQXhDO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUwsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7O0dBekVRRixLOztLQUFBQSxLO0FBMkVNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE0YjEwODVhMTEwZjk2MGUyOTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RoZW1lcy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcblxyXG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsUGF0aFZhbHVlcygpXHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiBpbml0aWFsUGF0aFZhbHVlcywgW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4gc3RvcmVQYXRoVmFsdWVzLCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxQYXRoVmFsdWVzKCkge1xyXG4gICAgY29uc29sZS5sb2coJ09MQUFBQUFBQUFBQUFBQUEnKTtcclxuXHJcbiAgICBsb2FkZXIgJiYgYXdhaXQgc2V0VGltZW91dChjaGFuZ2VMb2FkZXIsIDMwMDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xyXG5cclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRMb2FkZXIodHJ1ZSlcclxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgIH1cclxuICAgIHNldExvYWRlcihmYWxzZSlcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHN0b3JlUGF0aFZhbHVlcygpIHtcclxuICAvLyAgIGNvbnN0IHN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZTtcclxuICAvLyAgIGlmICghc3RvcmFnZSkgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgcHJldlBhdGggPSBzdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UGF0aFwiKTtcclxuICAvLyAgIGlmICghcHJldlBhdGgpIHtcclxuICAvLyAgICAgc3RvcmFnZS5zZXRJdGVtKFwicHJldlBhdGhcIiwgJ251bGwnKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHN0b3JhZ2Uuc2V0SXRlbShcInByZXZQYXRoXCIsIHByZXZQYXRoKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQYXRoXCIsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICAvLyAgIGNoZWNrTWVudShzdG9yYWdlKVxyXG4gIC8vICAgY2hlY2tSZWxvYWQoc3RvcmFnZSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IGNoZWNrUmVsb2FkID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IHByZXZQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwicHJldlBhdGhcIik7XHJcbiAgLy8gICBjb25zdCBjdXJyZW50UGF0aCA9IHN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQYXRoXCIpO1xyXG5cclxuICAvLyAgIGlmIChcclxuICAvLyAgICAgcHJldlBhdGggPT09ICdudWxsJyB8fFxyXG4gIC8vICAgICAocHJldlBhdGggIT09ICcvJyAmJiBjdXJyZW50UGF0aCA9PT0gJy8nKSB8fFxyXG4gIC8vICAgICBwcmV2UGF0aCA9PT0gY3VycmVudFBhdGggfHxcclxuICAvLyAgICAgKCFwcmV2UGF0aCB8fCAhY3VycmVudFBhdGgpKSB7XHJcbiAgLy8gICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gIC8vICAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgY2hlY2tNZW51ID0gKHN0b3JhZ2U6IFN0b3JhZ2UpID0+IHtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQYXRoID0gc3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFBhdGhcIik7XHJcbiAgLy8gICBpZiAoY3VycmVudFBhdGggPT09ICcvJyl7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IGxvYWRlcj17bG9hZGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==