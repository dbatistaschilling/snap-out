webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MainNav.tsx":
/*!************************************!*\
  !*** ./src/components/MainNav.tsx ***!
  \************************************/
/*! exports provided: MainNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNav", function() { return MainNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainNavLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNavLinks */ "./src/components/MainNavLinks.tsx");


var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\components\\MainNav.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var MainNav = function MainNav(_ref) {
  _s();

  var logoUrl = _ref.logoUrl,
      logoImgPath = _ref.logoImgPath;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var mainPage = ['/#', '/', '/#aboutSnapOut', '/#members', '/#events', '/#media', '/#contact'];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!mainPage.some(function (section) {
      return router.asPath === section;
    })) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "main-nav",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navbar navbar-default nav-left pi-mega",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "navbar-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "logo",
          children: false ? /*#__PURE__*/undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: logoUrl,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: logoImgPath,
              alt: "gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima et\xE0 posseggono tecnica e competenze musicali di veri musicisti professionisti."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this), menuActive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainNavLinks__WEBPACK_IMPORTED_MODULE_3__["MainNavLinks"], {
        items: [{
          itemClasses: "current-menu-item",
          hasChildren: false,
          name: "Home",
          children: [// {
            //     url: "#",
            //     childName: "Music artist"
            // },
            // {
            //     url: "#",
            //     childName: "Music band"
            // },
            // {
            //     url: "#",
            //     childName: "Music blog"
            // },
            // {
            //     url: "#",
            //     childName: "Band store"
            // },
          ],
          noChildrenUrl: "#"
        }, {
          itemClasses: null,
          hasChildren: false,
          name: "Sulla Band",
          children: [// {
            //     url: "#",
            //     childName: "About the band"
            // },
            // {
            //     url: "#",
            //     childName: "About artist band member"
            // },
          ],
          noChildrenUrl: "#aboutSnapOut"
        }, {
          itemClasses: null,
          hasChildren: false,
          name: "Membri",
          children: [// {
            //     url: "#",
            //     childName: "About the band"
            // },
            // {
            //     url: "#",
            //     childName: "About artist band member"
            // },
          ],
          noChildrenUrl: "#members"
        }, {
          itemClasses: null,
          hasChildren: false,
          name: "Eventi",
          children: [// {
            //     url: "#",
            //     childName: "News creative dark"
            // },
            // {
            //     url: "#",
            //     childName: "Event single creative"
            // },
          ],
          noChildrenUrl: "#events"
        }, {
          itemClasses: null,
          hasChildren: false,
          name: "Media",
          children: [// {
            //     url: "#",
            //     childName: "Music album view"
            // },
            // {
            //     url: "#",
            //     childName: "Music grid view"
            // },
            // {
            //     url: "#",
            //     childName: "Music album single creative"
            // },
            // {
            //     url: "#",
            //     childName: "Video grid"
            // },
          ],
          noChildrenUrl: "#media"
        }, {
          itemClasses: null,
          hasChildren: false,
          name: "Contatto",
          children: null,
          noChildrenUrl: "#contact"
        } // {
        //     itemClasses: null,
        //     hasChildren: true,
        //     name: "Shop",
        //     children: [
        //         {
        //             url: "#",
        //             childName: "Band store"
        //         },
        //         {
        //             url: "#",
        //             childName: "Shop products full"
        //         },
        //         {
        //             url: "#",
        //             childName: "Shop products sidebar left"
        //         },
        //         {
        //             url: "#",
        //             childName: "Shop products sidebar right"
        //         },
        //         {
        //             url: "#",
        //             childName: "Shop product single"
        //         },
        //     ],
        //     noChildrenUrl: null
        // },
        ]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(MainNav, "bdnUMMKV6PtZK4W2761oGDhKhz8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MainNav;

var _c;

$RefreshReg$(_c, "MainNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi50c3giXSwibmFtZXMiOlsiTWFpbk5hdiIsImxvZ29VcmwiLCJsb2dvSW1nUGF0aCIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwiaXRlbUNsYXNzZXMiLCJoYXNDaGlsZHJlbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm5vQ2hpbGRyZW5VcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUdWO0FBQUE7O0FBQUEsTUFGWEMsT0FFVyxRQUZYQSxPQUVXO0FBQUEsTUFEWEMsV0FDVyxRQURYQSxXQUNXOztBQUFBLGtCQUUyQkMsc0RBQVEsRUFGbkM7QUFBQSxNQUVGQyxVQUZFO0FBQUEsTUFFVUMsYUFGVjs7QUFHVCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxhQUFJTCxNQUFNLENBQUNNLE1BQVAsS0FBa0JELE9BQXRCO0FBQUEsS0FBckIsQ0FBTCxFQUEwRDtBQUN0RE4sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxLQUZELE1BRU87QUFDSEEsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUVJO0FBQUssWUFBRSxFQUFDLE1BQVI7QUFBQSxvQkFFUSxxQkFDSSxTQURKLGdCQUtJO0FBQUcsZ0JBQUksRUFBRUosT0FBVDtBQUFBLG1DQUNJO0FBQUssaUJBQUcsRUFBRUMsV0FBVjtBQUF1QixpQkFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQStCUUUsVUFBVSxpQkFDTixxRUFBQywwREFBRDtBQUFjLGFBQUssRUFBRSxDQUNqQjtBQUNJUyxxQkFBVyxFQUFFLG1CQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxNQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQURpQixFQXlCakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxZQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekJpQixFQXlDakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekNpQixFQXlEakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekRpQixFQXlFakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxPQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQXpFaUIsRUFpR2pCO0FBQ0lKLHFCQUFXLEVBQUUsSUFEakI7QUFFSUMscUJBQVcsRUFBRSxLQUZqQjtBQUdJQyxjQUFJLEVBQUUsVUFIVjtBQUlJQyxrQkFBUSxFQUFFLElBSmQ7QUFLSUMsdUJBQWEsRUFBRTtBQUxuQixTQWpHaUIsQ0F3R2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbklpQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRLSCxDQTdMTTs7R0FBTWpCLE87VUFNTU8scUQ7OztLQU5OUCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmZTVlNWE4MmU4YjY2ZmFlZjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNYWluTmF2TGlua3MgfSBmcm9tIFwiLi9NYWluTmF2TGlua3NcIjtcclxuXHJcbnR5cGUgcHJvcHMgPSB7XHJcbiAgbG9nb1VybDogc3RyaW5nXHJcbiAgbG9nb0ltZ1BhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbk5hdiA9ICh7XHJcbiAgbG9nb1VybCxcclxuICBsb2dvSW1nUGF0aFxyXG59OiBwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2LWxlZnQgcGktbWVnYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfSR7bG9nb1VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb0ltZ1BhdGh9IGFsdD1cImdydXBwbyByb2NrIGluZGllIGl0YWxpYW5vLCBoYW5ubyB0cmEgaSAxNCBlZCBpIDE4IGFubmksIHNpIHNvbm8gY29ub3NjaXV0aSAgYWxsZSBlbGVtZW50YXJpIGUgZGEgYWxsb3JhIHN1b25hbm8gaW5zaWVtZS4gU3R1ZGlhbm8gbXVzaWNhIGRhIDcgYW5uaSBlIG5vbm9zdGFudGUgbGEgbG9ybyBnaW92YW5pc3NpbWEgZXTDoCBwb3NzZWdnb25vIHRlY25pY2EgZSBjb21wZXRlbnplIG11c2ljYWxpIGRpIHZlcmkgbXVzaWNpc3RpIHByb2Zlc3Npb25pc3RpLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xvZ29Vcmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvSW1nUGF0aH0gYWx0PVwiZ3J1cHBvIHJvY2sgaW5kaWUgaXRhbGlhbm8sIGhhbm5vIHRyYSBpIDE0IGVkIGkgMTggYW5uaSwgc2kgc29ubyBjb25vc2NpdXRpICBhbGxlIGVsZW1lbnRhcmkgZSBkYSBhbGxvcmEgc3VvbmFubyBpbnNpZW1lLiBTdHVkaWFubyBtdXNpY2EgZGEgNyBhbm5pIGUgbm9ub3N0YW50ZSBsYSBsb3JvIGdpb3Zhbmlzc2ltYSBldMOgIHBvc3NlZ2dvbm8gdGVjbmljYSBlIGNvbXBldGVuemUgbXVzaWNhbGkgZGkgdmVyaSBtdXNpY2lzdGkgcHJvZmVzc2lvbmlzdGkuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyIG5hdmJhci10b2dnbGUgaGFtYnVyZ2VyLS1zbGlkZXItclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbWFpbi1uYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgey8qXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibV9zZWFyY2hcIiBuYW1lPVwic1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGFuZCBoaXQgZW50ZXIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1lbnVBY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluTmF2TGlua3MgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IFwiY3VycmVudC1tZW51LWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBhcnRpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgYmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBibG9nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkJhbmQgc3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bGxhIEJhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiQWJvdXQgdGhlIGJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiQWJvdXQgYXJ0aXN0IGJhbmQgbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI2Fib3V0U25hcE91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZW1icmlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiQWJvdXQgdGhlIGJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiQWJvdXQgYXJ0aXN0IGJhbmQgbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI21lbWJlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRXZlbnRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk5ld3MgY3JlYXRpdmUgZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJFdmVudCBzaW5nbGUgY3JlYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjZXZlbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lZGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGFsYnVtIHZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgZ3JpZCB2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGFsYnVtIHNpbmdsZSBjcmVhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJWaWRlbyBncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI21lZGlhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRhdHRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhhc0NoaWxkcmVuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogXCJTaG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGROYW1lOiBcIkJhbmQgc3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZE5hbWU6IFwiU2hvcCBwcm9kdWN0cyBmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGROYW1lOiBcIlNob3AgcHJvZHVjdHMgc2lkZWJhciBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGROYW1lOiBcIlNob3AgcHJvZHVjdHMgc2lkZWJhciByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkTmFtZTogXCJTaG9wIHByb2R1Y3Qgc2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vQ2hpbGRyZW5Vcmw6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICBdfSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==