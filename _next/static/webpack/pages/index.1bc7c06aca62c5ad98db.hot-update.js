webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MainNavLinks.tsx":
/*!*****************************************!*\
  !*** ./src/components/MainNavLinks.tsx ***!
  \*****************************************/
/*! exports provided: MainNavLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavLinks", function() { return MainNavLinks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\components\\MainNavLinks.tsx",
    _this = undefined;


var MainNavLinks = function MainNavLinks(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "main-nav",
    className: "collapse navbar-collapse",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "nav navbar-nav",
      children: items.map(function (_ref2) {
        var itemClasses = _ref2.itemClasses,
            hasChildren = _ref2.hasChildren,
            name = _ref2.name,
            children = _ref2.children,
            noChildrenUrl = _ref2.noChildrenUrl;
        return hasChildren ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "menu-item-has-children dropdown ".concat(itemClasses),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            "data-toggle": "dropdown",
            className: "dropdown-toggle",
            role: "button",
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "dropdown-menu",
            children: children.map(function (_ref3) {
              var url = _ref3.url,
                  childName = _ref3.childName;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: url,
                  children: childName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 41
                }, _this)
              }, childName, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this)]
        }, name, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: noChildrenUrl,
            role: "button",
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this)
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};
_c = MainNavLinks;

var _c;

$RefreshReg$(_c, "MainNavLinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdkxpbmtzLnRzeCJdLCJuYW1lcyI6WyJNYWluTmF2TGlua3MiLCJpdGVtcyIsIm1hcCIsIml0ZW1DbGFzc2VzIiwiaGFzQ2hpbGRyZW4iLCJuYW1lIiwiY2hpbGRyZW4iLCJub0NoaWxkcmVuVXJsIiwidXJsIiwiY2hpbGROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUMxQjtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBQywwQkFBN0I7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBLGdCQUVJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVTtBQUFBLFlBQUdDLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFlBQWdCQyxXQUFoQixTQUFnQkEsV0FBaEI7QUFBQSxZQUE2QkMsSUFBN0IsU0FBNkJBLElBQTdCO0FBQUEsWUFBbUNDLFFBQW5DLFNBQW1DQSxRQUFuQztBQUFBLFlBQTZDQyxhQUE3QyxTQUE2Q0EsYUFBN0M7QUFBQSxlQUNSSCxXQUFXLGdCQUNUO0FBQWUsbUJBQVMsNENBQXFDRCxXQUFyQyxDQUF4QjtBQUFBLGtDQUNFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksMkJBQVksVUFBeEI7QUFBbUMscUJBQVMsRUFBQyxpQkFBN0M7QUFBK0QsZ0JBQUksRUFBQyxRQUFwRTtBQUFBLHNCQUE4RUU7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUkscUJBQVMsRUFBQyxlQUFkO0FBQUEsc0JBRUlDLFFBQVEsQ0FBRUosR0FBVixDQUFjO0FBQUEsa0JBQUdNLEdBQUgsU0FBR0EsR0FBSDtBQUFBLGtCQUFRQyxTQUFSLFNBQVFBLFNBQVI7QUFBQSxrQ0FDWjtBQUFBLHVDQUFvQjtBQUFHLHNCQUFJLEVBQUVELEdBQVQ7QUFBQSw0QkFBZUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCLGlCQUFTQSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFkO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVNKLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxnQkFZVDtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBRUUsYUFBVDtBQUF5QixnQkFBSSxFQUFDLFFBQTlCO0FBQUEsc0JBQXdDRjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJNO0FBQUEsT0FBVjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDBCO0FBQUEsQ0FBckI7S0FBTUwsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmM3YzA2YWNhNjJjNWFkOThkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSBjaGlsZCA9IHtcclxuICB1cmw6IHN0cmluZ1xyXG4gIGNoaWxkTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgaXRlbSA9IHtcclxuICBpdGVtQ2xhc3Nlczogc3RyaW5nIHwgbnVsbFxyXG4gIGhhc0NoaWxkcmVuOiBib29sZWFuXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgY2hpbGRyZW46IGNoaWxkW10gfCBudWxsXHJcbiAgbm9DaGlsZHJlblVybDogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG50eXBlIHByb3BzID0ge1xyXG4gIGl0ZW1zOiBpdGVtW11cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5OYXZMaW5rcyA9ICh7IGl0ZW1zIH06IHByb3BzKSA9PlxyXG4gIDxkaXYgaWQ9XCJtYWluLW5hdlwiIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgIHtcclxuICAgICAgICBpdGVtcy5tYXAoKHsgaXRlbUNsYXNzZXMsIGhhc0NoaWxkcmVuLCBuYW1lLCBjaGlsZHJlbiwgbm9DaGlsZHJlblVybCB9OiBpdGVtICkgPT4gKFxyXG4gICAgICAgICAgaGFzQ2hpbGRyZW4gPyAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9IGNsYXNzTmFtZT17YG1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gZHJvcGRvd24gJHtpdGVtQ2xhc3Nlc31gfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiByb2xlPVwiYnV0dG9uXCI+e25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuIS5tYXAoKHsgdXJsLCBjaGlsZE5hbWUgfTogY2hpbGQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGlsZE5hbWV9PjxhIGhyZWY9e3VybH0+e2NoaWxkTmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGxpIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17bm9DaGlsZHJlblVybCF9IHJvbGU9XCJidXR0b25cIj57bmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC91bD5cclxuICA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9