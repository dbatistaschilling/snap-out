webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi50c3giXSwibmFtZXMiOlsiTWFpbk5hdiIsImxvZ29VcmwiLCJsb2dvSW1nUGF0aCIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwiaXRlbUNsYXNzZXMiLCJoYXNDaGlsZHJlbiIsIm5hbWUiLCJjaGlsZHJlbiIsIm5vQ2hpbGRyZW5VcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUdWO0FBQUE7O0FBQUEsTUFGWEMsT0FFVyxRQUZYQSxPQUVXO0FBQUEsTUFEWEMsV0FDVyxRQURYQSxXQUNXOztBQUFBLGtCQUUyQkMsc0RBQVEsRUFGbkM7QUFBQSxNQUVGQyxVQUZFO0FBQUEsTUFFVUMsYUFGVjs7QUFHVCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxnQkFBWixFQUE4QixXQUE5QixFQUEyQyxVQUEzQyxFQUF1RCxTQUF2RCxFQUFrRSxXQUFsRSxDQUFqQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxhQUFJTCxNQUFNLENBQUNNLE1BQVAsS0FBa0JELE9BQXRCO0FBQUEsS0FBckIsQ0FBTCxFQUEwRDtBQUN0RE4sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxLQUZELE1BRU87QUFDSEEsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUVJO0FBQUssWUFBRSxFQUFDLE1BQVI7QUFBQSxvQkFFUSxxQkFDSSxTQURKLGdCQUtJO0FBQUcsZ0JBQUksRUFBRUosT0FBVDtBQUFBLG1DQUNJO0FBQUssaUJBQUcsRUFBRUMsV0FBVjtBQUF1QixpQkFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQStCUUUsVUFBVSxpQkFDTixxRUFBQywwREFBRDtBQUFjLGFBQUssRUFBRSxDQUNqQjtBQUNJUyxxQkFBVyxFQUFFLG1CQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxNQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQURpQixFQXlCakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxZQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekJpQixFQXlDakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekNpQixFQXlEakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxRQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUk0sV0FKZDtBQWNJQyx1QkFBYSxFQUFFO0FBZG5CLFNBekRpQixFQXlFakI7QUFDSUoscUJBQVcsRUFBRSxJQURqQjtBQUVJQyxxQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGNBQUksRUFBRSxPQUhWO0FBSUlDLGtCQUFRLEVBQUUsQ0FDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCTSxXQUpkO0FBc0JJQyx1QkFBYSxFQUFFO0FBdEJuQixTQXpFaUIsRUFpR2pCO0FBQ0lKLHFCQUFXLEVBQUUsSUFEakI7QUFFSUMscUJBQVcsRUFBRSxLQUZqQjtBQUdJQyxjQUFJLEVBQUUsVUFIVjtBQUlJQyxrQkFBUSxFQUFFLElBSmQ7QUFLSUMsdUJBQWEsRUFBRTtBQUxuQixTQWpHaUIsQ0F3R2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbklpQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRLSCxDQTdMTTs7R0FBTWpCLE87VUFNTU8scUQ7OztLQU5OUCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmZlNWU1YTgyZThiNjZmYWVmMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1haW5OYXZMaW5rcyB9IGZyb20gXCIuL01haW5OYXZMaW5rc1wiO1xyXG5cclxudHlwZSBwcm9wcyA9IHtcclxuICBsb2dvVXJsOiBzdHJpbmdcclxuICBsb2dvSW1nUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTmF2ID0gKHtcclxuICBsb2dvVXJsLFxyXG4gIGxvZ29JbWdQYXRoXHJcbn06IHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1haW5QYWdlID0gWycvIycsICcvJywgJy8jYWJvdXRTbmFwT3V0JywgJy8jbWVtYmVycycsICcvI2V2ZW50cycsICcvI21lZGlhJywgJy8jY29udGFjdCddXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIW1haW5QYWdlLnNvbWUoc2VjdGlvbiA9PiByb3V0ZXIuYXNQYXRoID09PSBzZWN0aW9uKSkge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXYtbGVmdCBwaS1tZWdhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9JHtsb2dvVXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvSW1nUGF0aH0gYWx0PVwiZ3J1cHBvIHJvY2sgaW5kaWUgaXRhbGlhbm8sIGhhbm5vIHRyYSBpIDE0IGVkIGkgMTggYW5uaSwgc2kgc29ubyBjb25vc2NpdXRpICBhbGxlIGVsZW1lbnRhcmkgZSBkYSBhbGxvcmEgc3VvbmFubyBpbnNpZW1lLiBTdHVkaWFubyBtdXNpY2EgZGEgNyBhbm5pIGUgbm9ub3N0YW50ZSBsYSBsb3JvIGdpb3Zhbmlzc2ltYSBldMOgIHBvc3NlZ2dvbm8gdGVjbmljYSBlIGNvbXBldGVuemUgbXVzaWNhbGkgZGkgdmVyaSBtdXNpY2lzdGkgcHJvZmVzc2lvbmlzdGkuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bG9nb1VybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ29JbWdQYXRofSBhbHQ9XCJncnVwcG8gcm9jayBpbmRpZSBpdGFsaWFubywgaGFubm8gdHJhIGkgMTQgZWQgaSAxOCBhbm5pLCBzaSBzb25vIGNvbm9zY2l1dGkgIGFsbGUgZWxlbWVudGFyaSBlIGRhIGFsbG9yYSBzdW9uYW5vIGluc2llbWUuIFN0dWRpYW5vIG11c2ljYSBkYSA3IGFubmkgZSBub25vc3RhbnRlIGxhIGxvcm8gZ2lvdmFuaXNzaW1hIGV0w6AgcG9zc2VnZ29ubyB0ZWNuaWNhIGUgY29tcGV0ZW56ZSBtdXNpY2FsaSBkaSB2ZXJpIG11c2ljaXN0aSBwcm9mZXNzaW9uaXN0aS5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJoYW1idXJnZXIgbmF2YmFyLXRvZ2dsZSBoYW1idXJnZXItLXNsaWRlci1yXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNtYWluLW5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB7LypcclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJtX3NlYXJjaFwiIG5hbWU9XCJzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYW5kIGhpdCBlbnRlci4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWVudUFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5OYXZMaW5rcyBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogXCJjdXJyZW50LW1lbnUtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGFydGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBiYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIk11c2ljIGJsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiQmFuZCBzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3VsbGEgQmFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJBYm91dCB0aGUgYmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJBYm91dCBhcnRpc3QgYmFuZCBtZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjYWJvdXRTbmFwT3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1lbWJyaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJBYm91dCB0aGUgYmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJBYm91dCBhcnRpc3QgYmFuZCBtZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjbWVtYmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJFdmVudGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTmV3cyBjcmVhdGl2ZSBkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIkV2ZW50IHNpbmdsZSBjcmVhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NoaWxkcmVuVXJsOiBcIiNldmVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWVkaWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgYWxidW0gdmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkTmFtZTogXCJNdXNpYyBncmlkIHZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjaGlsZE5hbWU6IFwiTXVzaWMgYWxidW0gc2luZ2xlIGNyZWF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGROYW1lOiBcIlZpZGVvIGdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjbWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2xhc3NlczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGF0dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DaGlsZHJlblVybDogXCIjY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGl0ZW1DbGFzc2VzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaGFzQ2hpbGRyZW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiBcIlNob3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZE5hbWU6IFwiQmFuZCBzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVybDogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNoaWxkTmFtZTogXCJTaG9wIHByb2R1Y3RzIGZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZE5hbWU6IFwiU2hvcCBwcm9kdWN0cyBzaWRlYmFyIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1cmw6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaGlsZE5hbWU6IFwiU2hvcCBwcm9kdWN0cyBzaWRlYmFyIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXJsOiBcIiNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2hpbGROYW1lOiBcIlNob3AgcHJvZHVjdCBzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9DaGlsZHJlblVybDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19IC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9