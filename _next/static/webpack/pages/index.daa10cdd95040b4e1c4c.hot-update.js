webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/Event.tsx":
/*!********************************!*\
  !*** ./src/sections/Event.tsx ***!
  \********************************/
/*! exports provided: EventSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSection", function() { return EventSection; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");


var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\sections\\Event.tsx",
    _this = undefined;



var EventSection = function EventSection() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "events",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["CustomBackground"], {
      img: "bkg-img01"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["PageContent"], {
      pageContentClasses: "custom-background",
      rowClasses: "mb-80" // pageBtn={<PageBtn url={"#"} text={"View all dates"} />}
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
        title: "Le date del Tour Europeo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pi-events events-style-02",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Event"], {
            subtitle: "Giovedì",
            date: "6 agosto",
            locationSubtitle: "Porto Cesareo",
            locationUrl: "#",
            locationText: "Myconos",
            tickets: [{
              name: "Myconos",
              isSoldOut: true,
              ticketUrl: ""
            } // { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
            // { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
            ]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 1
  }, _this);
};
_c = EventSection;

var _c;

$RefreshReg$(_c, "EventSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0V2ZW50LnRzeCJdLCJuYW1lcyI6WyJFdmVudFNlY3Rpb24iLCJuYW1lIiwiaXNTb2xkT3V0IiwidGlja2V0VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsc0JBQzVCO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQSw0QkFDSSxxRUFBQyw0REFBRDtBQUFrQixTQUFHLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsdURBQUQ7QUFDQSx3QkFBa0IsRUFBRSxtQkFEcEI7QUFFQSxnQkFBVSxFQUFFLE9BRlosQ0FHQTtBQUhBO0FBQUEsOEJBS0EscUVBQUMsd0RBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxBLGVBTUE7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNJLG9CQUFRLEVBQUUsU0FEZDtBQUVJLGdCQUFJLEVBQUUsVUFGVjtBQUdJLDRCQUFnQixFQUFFLGVBSHRCO0FBSUksdUJBQVcsRUFBRSxHQUpqQjtBQUtJLHdCQUFZLEVBQUUsU0FMbEI7QUFNSSxtQkFBTyxFQUFFLENBQ0w7QUFBRUMsa0JBQUksRUFBRSxTQUFSO0FBQW1CQyx1QkFBUyxFQUFFLElBQTlCO0FBQW9DQyx1QkFBUyxFQUFFO0FBQS9DLGFBREssQ0FFTDtBQUNBO0FBSEs7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FENEI7QUFBQSxDQUFyQjtLQUFNSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhYTEwY2RkOTUwNDBiNGUxYzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgLy8gUGFnZUJ0bixcclxuICBQYWdlQ29udGVudCxcclxuICBTZWN0aW9uVGl0bGUsXHJcbiAgRXZlbnQsXHJcbiAgQ3VzdG9tQmFja2dyb3VuZFxyXG59IGZyb20gJy4uL2NvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRTZWN0aW9uID0gKCkgPT5cclxuPGRpdiBpZD1cImV2ZW50c1wiPlxyXG4gICAgPEN1c3RvbUJhY2tncm91bmQgaW1nPXtcImJrZy1pbWcwMVwifSAvPlxyXG4gICAgPFBhZ2VDb250ZW50XHJcbiAgICBwYWdlQ29udGVudENsYXNzZXM9e1wiY3VzdG9tLWJhY2tncm91bmRcIn1cclxuICAgIHJvd0NsYXNzZXM9e1wibWItODBcIn1cclxuICAgIC8vIHBhZ2VCdG49ezxQYWdlQnRuIHVybD17XCIjXCJ9IHRleHQ9e1wiVmlldyBhbGwgZGF0ZXNcIn0gLz59XHJcbiAgICA+XHJcbiAgICA8U2VjdGlvblRpdGxlIHRpdGxlPXtcIkxlIGRhdGUgZGVsIFRvdXIgRXVyb3Blb1wifSAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpLWV2ZW50cyBldmVudHMtc3R5bGUtMDJcIj5cclxuICAgICAgICAgICAgPEV2ZW50XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17XCJHaW92ZWTDrFwifVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17XCI2IGFnb3N0b1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25TdWJ0aXRsZT17XCJQb3J0byBDZXNhcmVvXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblRleHQ9e1wiTXljb25vc1wifVxyXG4gICAgICAgICAgICAgICAgdGlja2V0cz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJNeWNvbm9zXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIlwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geyBuYW1lOiBcIlZpcCB0aWNrZXRzXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIlwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geyBuYW1lOiBcIkNvbW1vbiBUaWNrZXRcIiwgaXNTb2xkT3V0OiBmYWxzZSwgdGlja2V0VXJsOiBcIlwiIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPEV2ZW50XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17XCJXZWRuZXNkYXlcIn1cclxuICAgICAgICAgICAgICAgIGRhdGU9e1wiTWF5IDI1XCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblN1YnRpdGxlPXtcIkxvbmRvbi4gVUtcIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uVXJsPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uVGV4dD17XCJUaGUgVW5kZXJ3b3JsZFwifVxyXG4gICAgICAgICAgICAgICAgdGlja2V0cz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJGYW4gY2x1YlwiLCBpc1NvbGRPdXQ6IHRydWUsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiVmlwIHRpY2tldHNcIiwgaXNTb2xkT3V0OiBmYWxzZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJDb21tb25cIiwgaXNTb2xkT3V0OiBmYWxzZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEV2ZW50XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17XCJUaHVyc2RheVwifVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17XCJKdW4gMDJcIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uU3VidGl0bGU9e1wiTG9uZG9uLCBVS1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Vcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25UZXh0PXtcIlRoZSBNYWNiZXRoXCJ9XHJcbiAgICAgICAgICAgICAgICB0aWNrZXRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkZhbiBjbHViXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJWaXAgdGlja2V0c1wiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkNvbW1vblwiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXZlbnRcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtcIkZyaWRheVwifVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17XCJKdW4gMDNcIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uU3VidGl0bGU9e1wiTG9uZG9uLCBVS1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Vcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25UZXh0PXtcIlRoZSBPbGQgQmx1ZSBMYXN0XCJ9XHJcbiAgICAgICAgICAgICAgICB0aWNrZXRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkZhbiBjbHViXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJWaXAgdGlja2V0c1wiLCBpc1NvbGRPdXQ6IHRydWUsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiQ29tbW9uXCIsIGlzU29sZE91dDogZmFsc2UsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFdmVudFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e1wiRnJpZGF5XCJ9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtcIkp1biAwM1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25TdWJ0aXRsZT17XCJCdWRhcGVzdCwgSHVuZ2FyeVwifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Vcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25UZXh0PXtcIkJ1ZGFwZXN0IFBhcmtcIn1cclxuICAgICAgICAgICAgICAgIHRpY2tldHM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiRmFuIGNsdWJcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIlZpcCB0aWNrZXRzXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJDb21tb25cIiwgaXNTb2xkT3V0OiBmYWxzZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUGFnZUNvbnRlbnQ+XHJcbjwvZGl2PiJdLCJzb3VyY2VSb290IjoiIn0=