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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loader = _useState2[0],
      setLoader = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (router.asPath === '/') {
      setLoader(true);
    }

    !mainPage.some(function (section) {
      return router.asPath === section;
    }) ? setMenuActive(false) : setMenuActive(true);
    setTimeout(cancelLoader, 3000);
  }, [router.asPath]);

  var cancelLoader = function cancelLoader() {
    setLoader(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmEsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT09ICcvJykge1xyXG4gICAgICAgICAgICBzZXRMb2FkZXIodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpID9cclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSkgOiBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dChjYW5jZWxMb2FkZXIsIDMwMDApXHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJpbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlPXttZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), loader && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      menuActive: menuActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(Layout, "yhZQyKQLDR5oIC20ENAL2fKzIEA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwibG9hZGVyIiwic2V0TG9hZGVyIiwidXNlRWZmZWN0IiwiYXNQYXRoIiwic29tZSIsInNlY3Rpb24iLCJzZXRUaW1lb3V0IiwiY2FuY2VsTG9hZGVyIiwidXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUNwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjs7QUFGb0Msa0JBR0FDLHNEQUFRLENBQUMsSUFBRCxDQUhSO0FBQUEsTUFHN0JDLFVBSDZCO0FBQUEsTUFHakJDLGFBSGlCOztBQUFBLG1CQUlSRixzREFBUSxDQUFDLElBQUQsQ0FKQTtBQUFBLE1BSTdCRyxNQUo2QjtBQUFBLE1BSXJCQyxTQUpxQjs7QUFNcENDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlSLE1BQU0sQ0FBQ1MsTUFBUCxLQUFrQixHQUF0QixFQUEyQjtBQUN2QkYsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIOztBQUNBLEtBQUNMLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxhQUFJWCxNQUFNLENBQUNTLE1BQVAsS0FBa0JFLE9BQXRCO0FBQUEsS0FBckIsQ0FBRixHQUNJTixhQUFhLENBQUMsS0FBRCxDQURqQixHQUMyQkEsYUFBYSxDQUFDLElBQUQsQ0FEeEM7QUFFQU8sY0FBVSxDQUFDQyxZQUFELEVBQWUsSUFBZixDQUFWO0FBQ0gsR0FQUSxFQU9OLENBQUNiLE1BQU0sQ0FBQ1MsTUFBUixDQVBNLENBQVQ7O0FBU0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2Qk4sYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQU1RRCxNQUFNLGlCQUNGO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBLDZCQUNJO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBaLGVBYUkscUVBQUMsa0RBQUQ7QUFBUSxnQkFBVSxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkosRUFlS0wsUUFmTCxlQWlCSSxxRUFBQyxrREFBRDtBQUNJLFlBQU0sRUFBRSxHQURaO0FBRUksYUFBTyxFQUFFLDJCQUZiO0FBR0ksZ0JBQVUsRUFBRUssVUFIaEI7QUFJSSxlQUFTLEVBQUUsQ0FDUDtBQUNJVSxXQUFHLEVBQUUsR0FEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQURPLEVBS1A7QUFDSUQsV0FBRyxFQUFFLGVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FMTyxFQVNQO0FBQ0lELFdBQUcsRUFBRSxVQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BVE8sRUFhUDtBQUNJRCxXQUFHLEVBQUUsU0FEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQWJPLEVBaUJQO0FBQ0lELFdBQUcsRUFBRSxRQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BakJPLEVBcUJQO0FBQ0lELFdBQUcsRUFBRSxVQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BckJPLENBSmYsQ0E4Qkk7QUFDQTtBQUNBO0FBaENKO0FBaUNJLGtCQUFZLEVBQUUsR0FqQ2xCO0FBa0NJLG1CQUFhLEVBQUU7QUFsQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3REgsQ0EzRUQ7O0dBQU1qQixNO1VBQ2FHLHFEOzs7S0FEYkgsTTtBQTZFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZGYyNjI5ODBlNzMzMjY4NWEyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT09ICcvJykge1xyXG4gICAgICAgICAgICBzZXRMb2FkZXIodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpID9cclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSkgOiBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dChjYW5jZWxMb2FkZXIsIDMwMDApXHJcbiAgICB9LCBbcm91dGVyLmFzUGF0aF0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLXN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJpbWcvc3ZnL2xvZ28tc25hcC1vdXQuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlPXttZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2Fib3V0U25hcE91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lbWJlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2V2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjY29udGFjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlck1lc3NhZ2U9e1wiU2lnbiB1cCBmb3Igb3VyIG1haWxpbmcgbGlzdFwifVxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxQbGFjZWhvbGRlclRleHQ9e1wiWW91ciBlbWFpbCBhZGRyZXNzLi5cIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodFVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHROYW1lPXtcIld5bWF6ZSBTcmxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9