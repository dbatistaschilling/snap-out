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
          className: "active",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdkxpbmtzLnRzeCJdLCJuYW1lcyI6WyJNYWluTmF2TGlua3MiLCJpdGVtcyIsIm1hcCIsIml0ZW1DbGFzc2VzIiwiaGFzQ2hpbGRyZW4iLCJuYW1lIiwiY2hpbGRyZW4iLCJub0NoaWxkcmVuVXJsIiwidXJsIiwiY2hpbGROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUMxQjtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBQywwQkFBN0I7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBLGdCQUVJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVTtBQUFBLFlBQUdDLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFlBQWdCQyxXQUFoQixTQUFnQkEsV0FBaEI7QUFBQSxZQUE2QkMsSUFBN0IsU0FBNkJBLElBQTdCO0FBQUEsWUFBbUNDLFFBQW5DLFNBQW1DQSxRQUFuQztBQUFBLFlBQTZDQyxhQUE3QyxTQUE2Q0EsYUFBN0M7QUFBQSxlQUNSSCxXQUFXLGdCQUNUO0FBQWUsbUJBQVMsNENBQXFDRCxXQUFyQyxDQUF4QjtBQUFBLGtDQUNFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksMkJBQVksVUFBeEI7QUFBbUMscUJBQVMsRUFBQyxpQkFBN0M7QUFBK0QsZ0JBQUksRUFBQyxRQUFwRTtBQUFBLHNCQUE4RUU7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUkscUJBQVMsRUFBQyxlQUFkO0FBQUEsc0JBRUlDLFFBQVEsQ0FBRUosR0FBVixDQUFjO0FBQUEsa0JBQUdNLEdBQUgsU0FBR0EsR0FBSDtBQUFBLGtCQUFRQyxTQUFSLFNBQVFBLFNBQVI7QUFBQSxrQ0FDWjtBQUFBLHVDQUFvQjtBQUFHLHNCQUFJLEVBQUVELEdBQVQ7QUFBQSw0QkFBZUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCLGlCQUFTQSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFkO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVNKLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUyxnQkFZVDtBQUFlLG1CQUFTLEVBQUMsUUFBekI7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUVFLGFBQVQ7QUFBeUIsZ0JBQUksRUFBQyxRQUE5QjtBQUFBLHNCQUF3Q0Y7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiTTtBQUFBLE9BQVY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUQwQjtBQUFBLENBQXJCO0tBQU1MLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTZiYThlMzUwNTViZDRmYTNhN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgY2hpbGQgPSB7XHJcbiAgdXJsOiBzdHJpbmdcclxuICBjaGlsZE5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIGl0ZW0gPSB7XHJcbiAgaXRlbUNsYXNzZXM6IHN0cmluZyB8IG51bGxcclxuICBoYXNDaGlsZHJlbjogYm9vbGVhblxyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGNoaWxkcmVuOiBjaGlsZFtdIHwgbnVsbFxyXG4gIG5vQ2hpbGRyZW5Vcmw6IHN0cmluZyB8IG51bGxcclxufVxyXG5cclxudHlwZSBwcm9wcyA9IHtcclxuICBpdGVtczogaXRlbVtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTmF2TGlua3MgPSAoeyBpdGVtcyB9OiBwcm9wcykgPT5cclxuICA8ZGl2IGlkPVwibWFpbi1uYXZcIiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgaXRlbXMubWFwKCh7IGl0ZW1DbGFzc2VzLCBoYXNDaGlsZHJlbiwgbmFtZSwgY2hpbGRyZW4sIG5vQ2hpbGRyZW5VcmwgfTogaXRlbSApID0+IChcclxuICAgICAgICAgIGhhc0NoaWxkcmVuID8gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBjbGFzc05hbWU9e2BtZW51LWl0ZW0taGFzLWNoaWxkcmVuIGRyb3Bkb3duICR7aXRlbUNsYXNzZXN9YH0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgcm9sZT1cImJ1dHRvblwiPntuYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbiEubWFwKCh7IHVybCwgY2hpbGROYW1lIH06IGNoaWxkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2hpbGROYW1lfT48YSBocmVmPXt1cmx9PntjaGlsZE5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9IGNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtub0NoaWxkcmVuVXJsIX0gcm9sZT1cImJ1dHRvblwiPntuYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIClcclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PiJdLCJzb3VyY2VSb290IjoiIn0=