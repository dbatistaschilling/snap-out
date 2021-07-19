webpackHotUpdate_N_E("pages/flavia-mazzetti",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi50c3giXSwibmFtZXMiOlsiTWFpbk5hdiIsImxvZ29VcmwiLCJsb2dvSW1nUGF0aCIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwiaXRlbUNsYXNzZXMiLCJoYXNDaGlsZHJlbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm5vQ2hpbGRyZW5VcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUdWO0FBQUE7O0FBQUEsTUFGWEMsT0FFVyxRQUZYQSxPQUVXO0FBQUEsTUFEWEMsV0FDVyxRQURYQSxXQUNXOztBQUFBLGtCQUUyQkMsc0RBQVEsRUFGbkM7QUFBQSxNQUVGQyxVQUZFO0FBQUEsTUFFVUMsYUFGVjs7QUFHVCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxhQUFJTCxNQUFNLENBQUNNLE1BQVAsS0FBa0JELE9BQXRCO0FBQUEsS0FBckIsQ0FBTCxFQUEwRDtBQUN0RE4sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxLQUZELE1BRU87QUFDSEEsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUVJO0FBQUssWUFBRSxFQUFDLE1BQVI7QUFBQSxvQkFFUSxxQkFDSSxTQURKLGdCQUtJO0FBQUcsZ0JBQUksRUFBRUosT0FBVDtBQUFBLG1DQUNJO0FBQUssaUJBQUcsRUFBRUMsV0FBVjtBQUF1QixpQkFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQStCUUUsVUFBVSxpQkFDTixxRUFBQywwREFBRDtBQUFjLGFBQUssRUFBRSxDQUNqQjtBQUNJUyxxQkFBVyxFQUFFLG1CQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxNQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQURpQixFQXlCakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxZQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekJpQixFQXlDakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekNpQixFQXlEakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekRpQixFQXlFakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxPQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQXpFaUIsRUFpR2pCO0FBQ0lKLHFCQUFXLEVBQUUsSUFEakI7QUFFSUMscUJBQVcsRUFBRSxLQUZqQjtBQUdJQyxjQUFJLEVBQUUsVUFIVjtBQUlJQyxrQkFBUSxFQUFFLElBSmQ7QUFLSUMsdUJBQWEsRUFBRTtBQUxuQixTQWpHaUIsQ0F3R2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbklpQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRLSCxDQTdMTTs7R0FBTWpCLE87VUFNTU8scUQ7OztLQU5OUCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZsYXZpYS1tYXp6ZXR0aS42ZmU1ZTVhODJlOGI2NmZhZWYyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFpbk5hdkxpbmtzIH0gZnJvbSBcIi4vTWFpbk5hdkxpbmtzXCI7XHJcblxyXG50eXBlIHByb3BzID0ge1xyXG4gIGxvZ29Vcmw6IHN0cmluZ1xyXG4gIGxvZ29JbWdQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5OYXYgPSAoe1xyXG4gIGxvZ29VcmwsXHJcbiAgbG9nb0ltZ1BhdGhcclxufTogcHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPigpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdi1sZWZ0IHBpLW1lZ2FcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke2xvZ29Vcmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29JbWdQYXRofSBhbHQ9XCJncnVwcG8gcm9jayBpbmRpZSBpdGFsaWFubywgaGFubm8gdHJhIGkgMTQgZWQgaSAxOCBhbm5pLCBzaSBzb25vIGNvbm9zY2l1dGkgIGFsbGUgZWxlbWVudGFyaSBlIGRhIGFsbG9yYSBzdW9uYW5vIGluc2llbWUuIFN0dWRpYW5vIG11c2ljYSBkYSA3IGFubmkgZSBub25vc3RhbnRlIGxhIGxvcm8gZ2lvdmFuaXNzaW1hIGV0w6AgcG9zc2VnZ29ubyB0ZWNuaWNhIGUgY29tcGV0ZW56ZSBtdXNpY2FsaSBkaSB2ZXJpIG11c2ljaXN0aSBwcm9mZXNzaW9uaXN0aS5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsb2dvVXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb0ltZ1BhdGh9IGFsdD1cImdydXBwbyByb2NrIGluZGllIGl0YWxpYW5vLCBoYW5ubyB0cmEgaSAxNCBlZCBpIDE4IGFubmksIHNpIHNvbm8gY29ub3NjaXV0aSAgYWxsZSBlbGVtZW50YXJpIGUgZGEgYWxsb3JhIHN1b25hbm8gaW5zaWVtZS4gU3R1ZGlhbm8gbXVzaWNhIGRhIDcgYW5uaSBlIG5vbm9zdGFudGUgbGEgbG9ybyBnaW92YW5pc3NpbWEgZXTDoCBwb3NzZWdnb25vIHRlY25pY2EgZSBjb21wZXRlbnplIG11c2ljYWxpIGRpIHZlcmkgbXVzaWNpc3RpIHByb2Zlc3Npb25pc3RpLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImhhbWJ1cmdlciBuYXZiYXItdG9nZ2xlIGhhbWJ1cmdlci0tc2xpZGVyLXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI21haW4tbmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIHsvKlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1fc2VhcmNoXCIgbmFtZT1cInNcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhbmQgaGl0IGVudGVyLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZW51QWN0aXZlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TWFpbk5hdkxpbmtzIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBcImN1cnJlbnQtbWVudS1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgYXJ0aXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgYmxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJCYW5kIHN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTdWxsYSBCYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkFib3V0IHRoZSBiYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkFib3V0IGFydGlzdCBiYW5kIG1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNhYm91dFNuYXBPdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVtYnJpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkFib3V0IHRoZSBiYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkFib3V0IGFydGlzdCBiYW5kIG1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNtZW1iZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkV2ZW50aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJOZXdzIGNyZWF0aXZlIGRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiRXZlbnQgc2luZ2xlIGNyZWF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2hpbGRyZW5Vcmw6IFwiI2V2ZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZWRpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBhbGJ1bSB2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGdyaWQgdmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBhbGJ1bSBzaW5nbGUgY3JlYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiVmlkZW8gZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb250YXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNjb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBoYXNDaGlsZHJlbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6IFwiU2hvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkTmFtZTogXCJCYW5kIHN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGROYW1lOiBcIlNob3AgcHJvZHVjdHMgZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkTmFtZTogXCJTaG9wIHByb2R1Y3RzIHNpZGViYXIgbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkTmFtZTogXCJTaG9wIHByb2R1Y3RzIHNpZGViYXIgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZE5hbWU6IFwiU2hvcCBwcm9kdWN0IHNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBub0NoaWxkcmVuVXJsOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=