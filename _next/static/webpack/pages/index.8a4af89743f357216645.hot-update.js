webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLinks */ "./src/components/SocialLinks.tsx");


var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\components\\Footer.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var Footer = function Footer(_ref) {
  _s();

  var imgUrl = _ref.imgUrl,
      imgPath = _ref.imgPath,
      menuItems = _ref.menuItems,
      copyrightUrl = _ref.copyrightUrl,
      copyrightName = _ref.copyrightName;

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
    id: "footer-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      id: "footer",
      className: "pb-50",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "footer-widget-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "widget widget_text",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "textwidget",
                  children: false ? /*#__PURE__*/undefined : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: imgUrl,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: imgPath,
                      alt: "Musician HTML template for music industry - musicians, bands and music blogs"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 53
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this), menuActive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "footer-widget-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "widget widget_nav_menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "menu",
                  children: menuItems.map(function (_ref2) {
                    var url = _ref2.url,
                        name = _ref2.name;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "menu-item",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: url,
                        children: name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 86
                      }, _this)
                    }, name, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 49
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "copyright-container",
      className: "copyright-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 col-sm-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Designed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: copyrightUrl,
                children: copyrightName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 45
              }, _this), ". All rights reserved."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "footer-widget-container col-md-6 col-sm-6 col-xs-12 copyright-right",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "widget social-links clearfix",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SocialLinks__WEBPACK_IMPORTED_MODULE_3__["SocialLinks"], {
                socials: [// "http://soundcloud.com"
                {
                  url: "#",
                  icon: "fa fa-soundcloud"
                }, // "https://www.facebook.com/pixel.industry.themes/"
                {
                  url: "#",
                  icon: "fa fa-facebook"
                }, // "http://lastfm.com"
                {
                  url: "#",
                  icon: "fa fa-lastfm"
                }, // "http://youtube.com"
                {
                  url: "#",
                  icon: "fa fa-youtube"
                }, // "https://twitter.com/pixel_industry"
                {
                  url: "#",
                  icon: "fa fa-twitter"
                }, // "https://instagram.com"
                {
                  url: "#",
                  icon: "fa fa-instagram"
                }]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      className: "scroll-up",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "fa fa-chevron-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};

_s(Footer, "bdnUMMKV6PtZK4W2761oGDhKhz8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJpbWdVcmwiLCJpbWdQYXRoIiwibWVudUl0ZW1zIiwiY29weXJpZ2h0VXJsIiwiY29weXJpZ2h0TmFtZSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwibWFwIiwidXJsIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFrQk8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FTVDtBQUFBOztBQUFBLE1BUlhDLE1BUVcsUUFSWEEsTUFRVztBQUFBLE1BUFhDLE9BT1csUUFQWEEsT0FPVztBQUFBLE1BTlhDLFNBTVcsUUFOWEEsU0FNVztBQUFBLE1BRlhDLFlBRVcsUUFGWEEsWUFFVztBQUFBLE1BRFhDLGFBQ1csUUFEWEEsYUFDVzs7QUFBQSxrQkFFMkJDLHNEQUFRLEVBRm5DO0FBQUEsTUFFRkMsVUFGRTtBQUFBLE1BRVVDLGFBRlY7O0FBR1QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFBSUwsTUFBTSxDQUFDTSxNQUFQLEtBQWtCRCxPQUF0QjtBQUFBLEtBQXJCLENBQUwsRUFBMEQ7QUFDdEROLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLG1C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V2Q7QUFDQTtBQUFFRixxQkFBRyxFQUFFLEdBQVA7QUFBWUUsc0JBQUksRUFBRTtBQUFsQixpQkFaYztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRUosZUFvR0k7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxXQUF0QjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEdILENBaklNOztHQUFNbkIsTTtVQVlNVSxxRDs7O0tBWk5WLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE0YWY4OTc0M2YzNTcyMTY2NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTb2NpYWxMaW5rcyB9IGZyb20gXCIuL1NvY2lhbExpbmtzXCJcclxuXHJcbnR5cGUgbWVudUl0ZW0gPSB7XHJcbiAgdXJsOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBwcm9wcyA9IHtcclxuICBpbWdVcmw6IHN0cmluZ1xyXG4gIGltZ1BhdGg6IHN0cmluZ1xyXG4gIG1lbnVJdGVtczogbWVudUl0ZW1bXVxyXG4gIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2U/OiBzdHJpbmdcclxuICBuZXdzTGV0dGVyTWVzc2FnZT86IHN0cmluZ1xyXG4gIGVtYWlsUGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nXHJcbiAgY29weXJpZ2h0VXJsOiBzdHJpbmdcclxuICBjb3B5cmlnaHROYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7XHJcbiAgaW1nVXJsLFxyXG4gIGltZ1BhdGgsXHJcbiAgbWVudUl0ZW1zLFxyXG4vLyAgIG5ld3NMZXR0ZXJQb3B1cE1lc3NhZ2UsXHJcbi8vICAgbmV3c0xldHRlck1lc3NhZ2UsXHJcbi8vICAgZW1haWxQbGFjZWhvbGRlclRleHQsXHJcbiAgY29weXJpZ2h0VXJsLFxyXG4gIGNvcHlyaWdodE5hbWVcclxufTogcHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPigpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBbJy8jJywgJy8nLCAnLyNhYm91dFNuYXBPdXQnLCAnLyNtZW1iZXJzJywgJy8jZXZlbnRzJywgJy8jbWVkaWEnLCAnLyNjb250YWN0J11cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWFpblBhZ2Uuc29tZShzZWN0aW9uID0+IHJvdXRlci5hc1BhdGggPT09IHNlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3Rlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJwYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXRfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHR3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0ke2ltZ1VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRofSBhbHQ9XCJNdXNpY2lhbiBIVE1MIHRlbXBsYXRlIGZvciBtdXNpYyBpbmR1c3RyeSAtIG11c2ljaWFucywgYmFuZHMgYW5kIG11c2ljIGJsb2dzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aW1nVXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRofSBhbHQ9XCJNdXNpY2lhbiBIVE1MIHRlbXBsYXRlIGZvciBtdXNpYyBpbmR1c3RyeSAtIG11c2ljaWFucywgYmFuZHMgYW5kIG11c2ljIGJsb2dzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51QWN0aXZlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF9uYXZfbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMubWFwKCh7IHVybCwgbmFtZSB9OiBtZW51SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj48YSBocmVmPXt1cmx9PntuYW1lfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNuZXdzbGV0dGVyLXBvcHVwXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sYXJnZSBidG4tY2VudGVyIG5ld3NsZXR0ZXItcG9wdXAtdHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXdzTGV0dGVyUG9wdXBNZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmV3c2xldHRlci1wb3B1cFwiIGNsYXNzTmFtZT1cIm1mcC1oaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e25ld3NMZXR0ZXJNZXNzYWdlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cInlvdXItZW1haWxcIiBwbGFjZWhvbGRlcj17ZW1haWxQbGFjZWhvbGRlclRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJzY3JpYmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImFjdGlvblwiIHR5cGU9XCJoaWRkZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3B5cmlnaHQtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzaWduZWQgYnkgPGEgaHJlZj17Y29weXJpZ2h0VXJsfT57Y29weXJpZ2h0TmFtZX08L2E+LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0LWNvbnRhaW5lciBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtMTIgY29weXJpZ2h0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2lkZ2V0IHNvY2lhbC1saW5rcyBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbExpbmtzIHNvY2lhbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwOi8vc291bmRjbG91ZC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEtc291bmRjbG91ZFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BpeGVsLmluZHVzdHJ5LnRoZW1lcy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEtZmFjZWJvb2tcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHA6Ly9sYXN0Zm0uY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLWxhc3RmbVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cDovL3lvdXR1YmUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLXlvdXR1YmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHBzOi8vdHdpdHRlci5jb20vcGl4ZWxfaW5kdXN0cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEtdHdpdHRlclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLWluc3RhZ3JhbVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNjcm9sbC11cFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi11cFwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==