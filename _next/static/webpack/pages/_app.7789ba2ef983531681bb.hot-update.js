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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      reload = _useState2[0],
      setReload = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var localFirsLoad = localStorage.getItem('firstLoad'); // console.log(typeof localFirsLoad);
    // console.log(!!localFirsLoad);

    if (!localFirsLoad || reload) {
      localStorage.setItem('firstLoad', 'false'); // setReload(false)
      // router.push('/')
      // location.reload()

      console.log(localFirsLoad === null || localFirsLoad === void 0 ? void 0 : localFirsLoad.toString);
      console.log(!!localFirsLoad);
    }

    if (!mainPage.some(function (section) {
      return router.asPath === section;
    })) {
      setMenuActive(false);
      setReload(true);
    } else {
      setReload(false);
      setMenuActive(true);
    }
  }, [router.asPath]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3990962830",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3990962830",
      children: "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxwb3J0Zm9saW8tcHJvamVjdHNcXFJ1Z2dlcm9cXHNjaHJvZGluZ2Vycy1jYXRzXFxtdXNpY2lhbi1iYW5kXFxzcmNcXHRoZW1lc1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2EsQUFDK0IsNkdBQUMiLCJmaWxlIjoiRjpcXHBvcnRmb2xpby1wcm9qZWN0c1xcUnVnZ2Vyb1xcc2Nocm9kaW5nZXJzLWNhdHNcXG11c2ljaWFuLWJhbmRcXHNyY1xcdGhlbWVzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcclxuaW1wb3J0ICB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxyXG4gIHRpdGxlPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhbEZpcnNMb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0TG9hZCcpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIGxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCEhbG9jYWxGaXJzTG9hZCk7XHJcbiAgICAgICAgaWYgKCFsb2NhbEZpcnNMb2FkIHx8IHJlbG9hZCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgLy8gc2V0UmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsRmlyc0xvYWQ/LnRvU3RyaW5nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coISFsb2NhbEZpcnNMb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgICAgICAgICAgc2V0UmVsb2FkKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVsb2FkKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlci5hc1BhdGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgIGh0bWwgeyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfWB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1zdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpbWdVcmw9e1wiL1wifVxyXG4gICAgICAgICAgICAgICAgaW1nUGF0aD17XCJhc3NldHMvaW1nL3N2Zy9sb2dvLXNuYXAtb3V0LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgbWVudUFjdGl2ZT17bWVudUFjdGl2ZX1cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNhYm91dFNuYXBPdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNldmVudHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI21lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiI2NvbnRhY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIG5ld3NMZXR0ZXJNZXNzYWdlPXtcIlNpZ24gdXAgZm9yIG91ciBtYWlsaW5nIGxpc3RcIn1cclxuICAgICAgICAgICAgICAgIC8vIGVtYWlsUGxhY2Vob2xkZXJUZXh0PXtcIllvdXIgZW1haWwgYWRkcmVzcy4uXCJ9XHJcbiAgICAgICAgICAgICAgICBjb3B5cmlnaHRVcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0TmFtZT17XCJXeW1hemUgU3JsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=F:\\\\portfolio-projects\\\\Ruggero\\\\schrodingers-cats\\\\musician-band\\\\src\\\\themes\\\\Layout.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loader",
      className: "jsx-3990962830",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "loading-status",
        className: "jsx-3990962830"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      menuActive: menuActive
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      imgUrl: "/",
      imgPath: "assets/img/svg/logo-snap-out.svg",
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
      lineNumber: 51,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, _this);
};

_s(Layout, "M7iUJdkoIKG667VtGv49Uuw1LYQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lcy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFpblBhZ2UiLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwicmVsb2FkIiwic2V0UmVsb2FkIiwidXNlRWZmZWN0IiwibG9jYWxGaXJzTG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwic29tZSIsInNlY3Rpb24iLCJhc1BhdGgiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLGdCQUFaLEVBQThCLFdBQTlCLEVBQTJDLFVBQTNDLEVBQXVELFNBQXZELEVBQWtFLFdBQWxFLENBQWpCOztBQUZvQyxrQkFHQUMsc0RBQVEsQ0FBQyxJQUFELENBSFI7QUFBQSxNQUc3QkMsVUFINkI7QUFBQSxNQUdqQkMsYUFIaUI7O0FBQUEsbUJBSVJGLHNEQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJN0JHLE1BSjZCO0FBQUEsTUFJckJDLFNBSnFCOztBQU1wQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBdEIsQ0FEWSxDQUVaO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDRixhQUFELElBQWtCSCxNQUF0QixFQUE4QjtBQUMxQkksa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixFQUFrQyxPQUFsQyxFQUQwQixDQUUxQjtBQUNBO0FBQ0E7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxhQUFaLGFBQVlBLGFBQVosdUJBQVlBLGFBQWEsQ0FBRU0sUUFBM0I7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVksQ0FBQyxDQUFDTCxhQUFkO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDUCxRQUFRLENBQUNjLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFBSWpCLE1BQU0sQ0FBQ2tCLE1BQVAsS0FBa0JELE9BQXRCO0FBQUEsS0FBckIsQ0FBTCxFQUEwRDtBQUN0RFosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUUsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEtBSEQsTUFHTztBQUNIQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0FGLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0g7QUFDSixHQW5CUSxFQW1CTixDQUFDTCxNQUFNLENBQUNrQixNQUFSLENBbkJNLENBQVQ7QUFxQkEsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUtJO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQTtBQUFBLDZCQUNJO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0kscUVBQUMsa0RBQUQ7QUFBUSxnQkFBVSxFQUFFZDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS0wsUUFYTCxlQWFJLHFFQUFDLGtEQUFEO0FBQ0ksWUFBTSxFQUFFLEdBRFo7QUFFSSxhQUFPLEVBQUUsa0NBRmI7QUFHSSxnQkFBVSxFQUFFSyxVQUhoQjtBQUlJLGVBQVMsRUFBRSxDQUNQO0FBQ0llLFdBQUcsRUFBRSxHQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BRE8sRUFLUDtBQUNJRCxXQUFHLEVBQUUsZUFEVDtBQUVJQyxZQUFJLEVBQUU7QUFGVixPQUxPLEVBU1A7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FUTyxFQWFQO0FBQ0lELFdBQUcsRUFBRSxTQURUO0FBRUlDLFlBQUksRUFBRTtBQUZWLE9BYk8sRUFpQlA7QUFDSUQsV0FBRyxFQUFFLFFBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FqQk8sRUFxQlA7QUFDSUQsV0FBRyxFQUFFLFVBRFQ7QUFFSUMsWUFBSSxFQUFFO0FBRlYsT0FyQk8sQ0FKZixDQThCSTtBQUNBO0FBQ0E7QUFoQ0o7QUFpQ0ksa0JBQVksRUFBRSxHQWpDbEI7QUFrQ0ksbUJBQWEsRUFBRTtBQWxDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0RILENBL0VEOztHQUFNdEIsTTtVQUNhRyxxRDs7O0tBRGJILE07QUFpRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzc4OWJhMmVmOTgzNTMxNjgxYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCAgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxuICB0aXRsZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1haW5QYWdlID0gWycvIycsICcvJywgJy8jYWJvdXRTbmFwT3V0JywgJy8jbWVtYmVycycsICcvI2V2ZW50cycsICcvI21lZGlhJywgJy8jY29udGFjdCddXHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3JlbG9hZCwgc2V0UmVsb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxGaXJzTG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBsb2NhbEZpcnNMb2FkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyghIWxvY2FsRmlyc0xvYWQpO1xyXG4gICAgICAgIGlmICghbG9jYWxGaXJzTG9hZCB8fCByZWxvYWQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0TG9hZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIC8vIHNldFJlbG9hZChmYWxzZSlcclxuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbEZpcnNMb2FkPy50b1N0cmluZyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCEhbG9jYWxGaXJzTG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFJlbG9hZCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFJlbG9hZChmYWxzZSlcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb3V0ZXIuYXNQYXRoXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YCBodG1sIHsgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1gfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmctc3RhdHVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciBtZW51QWN0aXZlPXttZW51QWN0aXZlfSAvPlxyXG5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgaW1nVXJsPXtcIi9cIn1cclxuICAgICAgICAgICAgICAgIGltZ1BhdGg9e1wiYXNzZXRzL2ltZy9zdmcvbG9nby1zbmFwLW91dC5zdmdcIn1cclxuICAgICAgICAgICAgICAgIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjYWJvdXRTbmFwT3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3VsbGEgQmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjbWVtYmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lbWJyaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIjZXZlbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRXZlbnRpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNtZWRpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIiNjb250YWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGF0dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgLy8gbmV3c0xldHRlclBvcHVwTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBuZXdzTGV0dGVyTWVzc2FnZT17XCJTaWduIHVwIGZvciBvdXIgbWFpbGluZyBsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFBsYWNlaG9sZGVyVGV4dD17XCJZb3VyIGVtYWlsIGFkZHJlc3MuLlwifVxyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0VXJsPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodE5hbWU9e1wiV3ltYXplIFNybFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=