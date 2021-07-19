webpackHotUpdate_N_E("pages/flavia-mazzetti",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJpbWdVcmwiLCJpbWdQYXRoIiwibWVudUl0ZW1zIiwiY29weXJpZ2h0VXJsIiwiY29weXJpZ2h0TmFtZSIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYWluUGFnZSIsInVzZUVmZmVjdCIsInNvbWUiLCJzZWN0aW9uIiwiYXNQYXRoIiwibWFwIiwidXJsIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFrQk8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FTVDtBQUFBOztBQUFBLE1BUlhDLE1BUVcsUUFSWEEsTUFRVztBQUFBLE1BUFhDLE9BT1csUUFQWEEsT0FPVztBQUFBLE1BTlhDLFNBTVcsUUFOWEEsU0FNVztBQUFBLE1BRlhDLFlBRVcsUUFGWEEsWUFFVztBQUFBLE1BRFhDLGFBQ1csUUFEWEEsYUFDVzs7QUFBQSxrQkFFMkJDLHNEQUFRLEVBRm5DO0FBQUEsTUFFRkMsVUFGRTtBQUFBLE1BRVVDLGFBRlY7O0FBR1QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksZ0JBQVosRUFBOEIsV0FBOUIsRUFBMkMsVUFBM0MsRUFBdUQsU0FBdkQsRUFBa0UsV0FBbEUsQ0FBakI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsYUFBSUwsTUFBTSxDQUFDTSxNQUFQLEtBQWtCRCxPQUF0QjtBQUFBLEtBQXJCLENBQUwsRUFBMEQ7QUFDdEROLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLG1C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V2Q7QUFDQTtBQUFFRixxQkFBRyxFQUFFLEdBQVA7QUFBWUUsc0JBQUksRUFBRTtBQUFsQixpQkFaYztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwRUosZUFvR0k7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxXQUF0QjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEdILENBaklNOztHQUFNbkIsTTtVQVlNVSxxRDs7O0tBWk5WLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxhdmlhLW1henpldHRpLjhhNGFmODk3NDNmMzU3MjE2NjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU29jaWFsTGlua3MgfSBmcm9tIFwiLi9Tb2NpYWxMaW5rc1wiXHJcblxyXG50eXBlIG1lbnVJdGVtID0ge1xyXG4gIHVybDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgcHJvcHMgPSB7XHJcbiAgaW1nVXJsOiBzdHJpbmdcclxuICBpbWdQYXRoOiBzdHJpbmdcclxuICBtZW51SXRlbXM6IG1lbnVJdGVtW11cclxuICBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlPzogc3RyaW5nXHJcbiAgbmV3c0xldHRlck1lc3NhZ2U/OiBzdHJpbmdcclxuICBlbWFpbFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZ1xyXG4gIGNvcHlyaWdodFVybDogc3RyaW5nXHJcbiAgY29weXJpZ2h0TmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoe1xyXG4gIGltZ1VybCxcclxuICBpbWdQYXRoLFxyXG4gIG1lbnVJdGVtcyxcclxuLy8gICBuZXdzTGV0dGVyUG9wdXBNZXNzYWdlLFxyXG4vLyAgIG5ld3NMZXR0ZXJNZXNzYWdlLFxyXG4vLyAgIGVtYWlsUGxhY2Vob2xkZXJUZXh0LFxyXG4gIGNvcHlyaWdodFVybCxcclxuICBjb3B5cmlnaHROYW1lXHJcbn06IHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1haW5QYWdlID0gWycvIycsICcvJywgJy8jYWJvdXRTbmFwT3V0JywgJy8jbWVtYmVycycsICcvI2V2ZW50cycsICcvI21lZGlhJywgJy8jY29udGFjdCddXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIW1haW5QYWdlLnNvbWUoc2VjdGlvbiA9PiByb3V0ZXIuYXNQYXRoID09PSBzZWN0aW9uKSkge1xyXG4gICAgICAgICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE1lbnVBY3RpdmUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb290ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCIgY2xhc3NOYW1lPVwicGItNTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aWRnZXQgd2lkZ2V0X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0d2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9JHtpbWdVcmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0gYWx0PVwiTXVzaWNpYW4gSFRNTCB0ZW1wbGF0ZSBmb3IgbXVzaWMgaW5kdXN0cnkgLSBtdXNpY2lhbnMsIGJhbmRzIGFuZCBtdXNpYyBibG9nc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltZ1VybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0gYWx0PVwiTXVzaWNpYW4gSFRNTCB0ZW1wbGF0ZSBmb3IgbXVzaWMgaW5kdXN0cnkgLSBtdXNpY2lhbnMsIGJhbmRzIGFuZCBtdXNpYyBibG9nc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXRfbmF2X21lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLm1hcCgoeyB1cmwsIG5hbWUgfTogbWVudUl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0gY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+PGEgaHJlZj17dXJsfT57bmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpZGdldCB3aWRnZXRfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHR3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c2xldHRlci1wb3B1cFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGFyZ2UgYnRuLWNlbnRlciBuZXdzbGV0dGVyLXBvcHVwLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmV3c0xldHRlclBvcHVwTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5ld3NsZXR0ZXItcG9wdXBcIiBjbGFzc05hbWU9XCJtZnAtaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntuZXdzTGV0dGVyTWVzc2FnZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJ5b3VyLWVtYWlsXCIgcGxhY2Vob2xkZXI9e2VtYWlsUGxhY2Vob2xkZXJUZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJhY3Rpb25cIiB0eXBlPVwiaGlkZGVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29weXJpZ2h0LWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNvcHlyaWdodC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGJ5IDxhIGhyZWY9e2NvcHlyaWdodFVybH0+e2NvcHlyaWdodE5hbWV9PC9hPi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldC1jb250YWluZXIgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTEyIGNvcHlyaWdodC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpZGdldCBzb2NpYWwtbGlua3MgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxMaW5rcyBzb2NpYWxzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiaHR0cDovL3NvdW5kY2xvdWQuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLXNvdW5kY2xvdWRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9waXhlbC5pbmR1c3RyeS50aGVtZXMvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLWZhY2Vib29rXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwOi8vbGFzdGZtLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS1sYXN0Zm1cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHA6Ly95b3V0dWJlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS15b3V0dWJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJodHRwczovL3R3aXR0ZXIuY29tL3BpeGVsX2luZHVzdHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1cmw6IFwiI1wiLCBpY29uOiBcImZhIGZhLXR3aXR0ZXJcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXJsOiBcIiNcIiwgaWNvbjogXCJmYSBmYS1pbnN0YWdyYW1cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzY3JvbGwtdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tdXBcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=