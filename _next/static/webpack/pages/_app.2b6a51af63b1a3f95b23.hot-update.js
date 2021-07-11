webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/themes/Layout.tsx":
/*!*******************************!*\
  !*** ./src/themes/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\themes\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!mainPage.some(function (section) {
      return router.asPath === section;
    })) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
      router.push('/');
    }
  }, [router.asPath]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmEsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJpbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlPXttZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      menuActive: menuActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      imgUrl: "/",
      imgPath: "img/svg/logo-snap-out.svg",
      menuActive: menuActive,
      menuItems: [{
        url: "#",
        name: "Home"
      }, {
        url: "#aboutSnapOut",
        name: "Sulla Band"
      }, {
        url: "#members",
        name: "Membri"
      }, {
        url: "#events",
        name: "Eventi"
      }, {
        url: "#media",
        name: "Media"
      }, {
        url: "#contact",
        name: "Contatto"
      }] // newsLetterPopupMessage={"Sign up for our mailing list"}
      // newsLetterMessage={"Sign up for our mailing list"}
      // emailPlaceholderText={"Your email address.."}
      ,
      copyrightUrl: "#",
      copyrightName: "Wymaze Srl"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(Layout, "a2OSPR98LjY9U4qE9cpSqEUufyM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwidXNlRWZmZWN0Iiwic29tZSIsInNlY3Rpb24iLCJhc1BhdGgiLCJwdXNoIiwidXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUNwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjs7QUFGb0Msa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEsTUFHN0JDLFVBSDZCO0FBQUEsTUFHakJDLGFBSGlCOztBQUtwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDSixRQUFRLENBQUNLLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFBSVIsTUFBTSxDQUFDUyxNQUFQLEtBQWtCRCxPQUF0QjtBQUFBLEtBQXJCLENBQUwsRUFBMEQ7QUFDdERILG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FMLFlBQU0sQ0FBQ1UsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLEdBUFEsRUFPTixDQUFDVixNQUFNLENBQUNTLE1BQVIsQ0FQTSxDQUFUO0FBU0Esc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUtJO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBLDZCQUNJO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0kscUVBQUMsa0RBQUQ7QUFBUSxnQkFBVSxFQUFFTDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS0wsUUFYTCxlQWFJLHFFQUFDLGtEQUFEO0FBQ0ksWUFBTSxFQUFFLEdBRFo7QUFFSSxhQUFPLEVBQUUsMkJBRmI7QUFHSSxnQkFBVSxFQUFFSyxVQUhoQjtBQUlJLGVBQVMsRUFBRSxDQUNQO0FBQ0lPLFdBQUcsRUFBRSxHQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BRE8sRUFLUDtBQUNJRCxXQUFHLEVBQUUsZUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQUxPLEVBU1A7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FUTyxFQWFQO0FBQ0lELFdBQUcsRUFBRSxTQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BYk8sRUFpQlA7QUFDSUQsV0FBRyxFQUFFLFFBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FqQk8sRUFxQlA7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FyQk8sQ0FKZixDQThCSTtBQUNBO0FBQ0E7QUFoQ0o7QUFpQ0ksa0JBQVksRUFBRSxHQWpDbEI7QUFrQ0ksbUJBQWEsRUFBRTtBQWxDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0RILENBbEVEOztHQUFNZCxNO1VBQ2FHLHFEOzs7S0FEYkgsTTtBQW9FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYjZhNTFhZjYzYjFhM2Y5NWIyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJpbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlPXttZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9