webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJpbWdVcmwiLCJpbWdQYXRoIiwibWVudUl0ZW1zIiwiY29weXJpZ2h0VXJsIiwiY29weXJpZ2h0TmFtZSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwibWFwIiwidXJsIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFrQk8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FTVDtBQUFBOztBQUFBLE1BUlhDLE1BUVcsUUFSWEEsTUFRVztBQUFBLE1BUFhDLE9BT1csUUFQWEEsT0FPVztBQUFBLE1BTlhDLFNBTVcsUUFOWEEsU0FNVztBQUFBLE1BRlhDLFlBRVcsUUFGWEEsWUFFVztBQUFBLE1BRFhDLGFBQ1csUUFEWEEsYUFDVzs7QUFBQSxrQkFFMkJDLHNEQUFRLEVBRm5DO0FBQUEsTUFFRkMsVUFGRTtBQUFBLE1BRVVDLGFBRlY7O0FBR1QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFBSUwsTUFBTSxDQUFDTSxNQUFQLEtBQWtCRCxPQUF0QjtBQUFBLEtBQXJCLENBQUwsRUFBMEQ7QUFDdEROLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLG1C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V2Q7QUFDQTtBQUFFRixxQkFBRyxFQUFFLEdBQVA7QUFBWUUsc0JBQUksRUFBRTtBQUFsQixpQkFaYztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRUosZUFvR0k7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxXQUF0QjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEdILENBaklNOztHQUFNbkIsTTtVQVlNVSxxRDs7O0tBWk5WLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YTRhZjg5NzQzZjM1NzIxNjY0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNvY2lhbExpbmtzIH0gZnJvbSBcIi4vU29jaWFsTGlua3NcIlxyXG5cclxudHlwZSBtZW51SXRlbSA9IHtcclxuICB1cmw6IHN0cmluZ1xyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIHByb3BzID0ge1xyXG4gIGltZ1VybDogc3RyaW5nXHJcbiAgaW1nUGF0aDogc3RyaW5nXHJcbiAgbWVudUl0ZW1zOiBtZW51SXRlbVtdXHJcbiAgbmV3c0xldHRlclBvcHVwTWVzc2FnZT86IHN0cmluZ1xyXG4gIG5ld3NMZXR0ZXJNZXNzYWdlPzogc3RyaW5nXHJcbiAgZW1haWxQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmdcclxuICBjb3B5cmlnaHRVcmw6IHN0cmluZ1xyXG4gIGNvcHlyaWdodE5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHtcclxuICBpbWdVcmwsXHJcbiAgaW1nUGF0aCxcclxuICBtZW51SXRlbXMsXHJcbi8vICAgbmV3c0xldHRlclBvcHVwTWVzc2FnZSxcclxuLy8gICBuZXdzTGV0dGVyTWVzc2FnZSxcclxuLy8gICBlbWFpbFBsYWNlaG9sZGVyVGV4dCxcclxuICBjb3B5cmlnaHRVcmwsXHJcbiAgY29weXJpZ2h0TmFtZVxyXG59OiBwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBtYWluUGFnZSA9IFsnLyMnLCAnLycsICcvI2Fib3V0U25hcE91dCcsICcvI21lbWJlcnMnLCAnLyNldmVudHMnLCAnLyNtZWRpYScsICcvI2NvbnRhY3QnXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtYWluUGFnZS5zb21lKHNlY3Rpb24gPT4gcm91dGVyLmFzUGF0aCA9PT0gc2VjdGlvbikpIHtcclxuICAgICAgICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiIGNsYXNzTmFtZT1cInBiLTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF90ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dHdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfSR7aW1nVXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGFsdD1cIk11c2ljaWFuIEhUTUwgdGVtcGxhdGUgZm9yIG11c2ljIGluZHVzdHJ5IC0gbXVzaWNpYW5zLCBiYW5kcyBhbmQgbXVzaWMgYmxvZ3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWdVcmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGFsdD1cIk11c2ljaWFuIEhUTUwgdGVtcGxhdGUgZm9yIG11c2ljIGluZHVzdHJ5IC0gbXVzaWNpYW5zLCBiYW5kcyBhbmQgbXVzaWMgYmxvZ3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVBY3RpdmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X25hdl9tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcy5tYXAoKHsgdXJsLCBuYW1lIH06IG1lbnVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPjxhIGhyZWY9e3VybH0+e25hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0d2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25ld3NsZXR0ZXItcG9wdXBcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxhcmdlIGJ0bi1jZW50ZXIgbmV3c2xldHRlci1wb3B1cC10cmlnZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25ld3NMZXR0ZXJQb3B1cE1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuZXdzbGV0dGVyLXBvcHVwXCIgY2xhc3NOYW1lPVwibWZwLWhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bmV3c0xldHRlck1lc3NhZ2V9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c2xldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwieW91ci1lbWFpbFwiIHBsYWNlaG9sZGVyPXtlbWFpbFBsYWNlaG9sZGVyVGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWN0aW9uXCIgdHlwZT1cImhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvcHlyaWdodC1jb250YWluZXJcIiBjbGFzc05hbWU9XCJjb3B5cmlnaHQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNpZ25lZCBieSA8YSBocmVmPXtjb3B5cmlnaHRVcmx9Pntjb3B5cmlnaHROYW1lfTwvYT4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQtY29udGFpbmVyIGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBjb3B5cmlnaHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aWRnZXQgc29jaWFsLWxpbmtzIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTGlua3Mgc29jaWFscz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHA6Ly9zb3VuZGNsb3VkLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS1zb3VuZGNsb3VkXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGl4ZWwuaW5kdXN0cnkudGhlbWVzL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS1mYWNlYm9va1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cDovL2xhc3RmbS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEtbGFzdGZtXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwOi8veW91dHViZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEteW91dHViZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9waXhlbF9pbmR1c3RyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS10d2l0dGVyXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwczovL2luc3RhZ3JhbS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHVybDogXCIjXCIsIGljb246IFwiZmEgZmEtaW5zdGFncmFtXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2Nyb2xsLXVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLXVwXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9