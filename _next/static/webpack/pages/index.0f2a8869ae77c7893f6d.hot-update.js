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
            locationText: "Myconos" // tickets={[
            //     { name: "Fan club", isSoldOut: true, ticketUrl: "" },
            //     { name: "Vip tickets", isSoldOut: true, ticketUrl: "" },
            //     { name: "Common Ticket", isSoldOut: false, ticketUrl: "" },
            // ]}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0V2ZW50LnRzeCJdLCJuYW1lcyI6WyJFdmVudFNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDNUI7QUFBSyxNQUFFLEVBQUMsUUFBUjtBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQWtCLFNBQUcsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyx1REFBRDtBQUNBLHdCQUFrQixFQUFFLG1CQURwQjtBQUVBLGdCQUFVLEVBQUUsT0FGWixDQUdBO0FBSEE7QUFBQSw4QkFLQSxxRUFBQyx3REFBRDtBQUFjLGFBQUssRUFBRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEEsZUFNQTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGlDQUNJLHFFQUFDLGlEQUFEO0FBQ0ksb0JBQVEsRUFBRSxTQURkO0FBRUksZ0JBQUksRUFBRSxVQUZWO0FBR0ksNEJBQWdCLEVBQUUsZUFIdEI7QUFJSSx1QkFBVyxFQUFFLEdBSmpCO0FBS0ksd0JBQVksRUFBRSxTQUxsQixDQU1JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDRCO0FBQUEsQ0FBckI7S0FBTUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjJhODg2OWFlNzdjNzg5M2Y2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIC8vIFBhZ2VCdG4sXHJcbiAgUGFnZUNvbnRlbnQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG4gIEV2ZW50LFxyXG4gIEN1c3RvbUJhY2tncm91bmRcclxufSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50U2VjdGlvbiA9ICgpID0+XHJcbjxkaXYgaWQ9XCJldmVudHNcIj5cclxuICAgIDxDdXN0b21CYWNrZ3JvdW5kIGltZz17XCJia2ctaW1nMDFcIn0gLz5cclxuICAgIDxQYWdlQ29udGVudFxyXG4gICAgcGFnZUNvbnRlbnRDbGFzc2VzPXtcImN1c3RvbS1iYWNrZ3JvdW5kXCJ9XHJcbiAgICByb3dDbGFzc2VzPXtcIm1iLTgwXCJ9XHJcbiAgICAvLyBwYWdlQnRuPXs8UGFnZUJ0biB1cmw9e1wiI1wifSB0ZXh0PXtcIlZpZXcgYWxsIGRhdGVzXCJ9IC8+fVxyXG4gICAgPlxyXG4gICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17XCJMZSBkYXRlIGRlbCBUb3VyIEV1cm9wZW9cIn0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaS1ldmVudHMgZXZlbnRzLXN0eWxlLTAyXCI+XHJcbiAgICAgICAgICAgIDxFdmVudFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e1wiR2lvdmVkw6xcIn1cclxuICAgICAgICAgICAgICAgIGRhdGU9e1wiNiBhZ29zdG9cIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uU3VidGl0bGU9e1wiUG9ydG8gQ2VzYXJlb1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Vcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25UZXh0PXtcIk15Y29ub3NcIn1cclxuICAgICAgICAgICAgICAgIC8vIHRpY2tldHM9e1tcclxuICAgICAgICAgICAgICAgIC8vICAgICB7IG5hbWU6IFwiRmFuIGNsdWJcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiXCIgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB7IG5hbWU6IFwiVmlwIHRpY2tldHNcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiXCIgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB7IG5hbWU6IFwiQ29tbW9uIFRpY2tldFwiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiXCIgfSxcclxuICAgICAgICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8RXZlbnRcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtcIldlZG5lc2RheVwifVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17XCJNYXkgMjVcIn1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uU3VidGl0bGU9e1wiTG9uZG9uLiBVS1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25Vcmw9e1wiI1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25UZXh0PXtcIlRoZSBVbmRlcndvcmxkXCJ9XHJcbiAgICAgICAgICAgICAgICB0aWNrZXRzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkZhbiBjbHViXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJWaXAgdGlja2V0c1wiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkNvbW1vblwiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RXZlbnRcclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtcIlRodXJzZGF5XCJ9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtcIkp1biAwMlwifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25TdWJ0aXRsZT17XCJMb25kb24sIFVLXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblRleHQ9e1wiVGhlIE1hY2JldGhcIn1cclxuICAgICAgICAgICAgICAgIHRpY2tldHM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiRmFuIGNsdWJcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIlZpcCB0aWNrZXRzXCIsIGlzU29sZE91dDogZmFsc2UsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiQ29tbW9uXCIsIGlzU29sZE91dDogZmFsc2UsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxFdmVudFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e1wiRnJpZGF5XCJ9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtcIkp1biAwM1wifVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25TdWJ0aXRsZT17XCJMb25kb24sIFVLXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblRleHQ9e1wiVGhlIE9sZCBCbHVlIExhc3RcIn1cclxuICAgICAgICAgICAgICAgIHRpY2tldHM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiRmFuIGNsdWJcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIlZpcCB0aWNrZXRzXCIsIGlzU29sZE91dDogdHJ1ZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJDb21tb25cIiwgaXNTb2xkT3V0OiBmYWxzZSwgdGlja2V0VXJsOiBcIiNcIiB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEV2ZW50XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17XCJGcmlkYXlcIn1cclxuICAgICAgICAgICAgICAgIGRhdGU9e1wiSnVuIDAzXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblN1YnRpdGxlPXtcIkJ1ZGFwZXN0LCBIdW5nYXJ5XCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblVybD17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblRleHQ9e1wiQnVkYXBlc3QgUGFya1wifVxyXG4gICAgICAgICAgICAgICAgdGlja2V0cz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJGYW4gY2x1YlwiLCBpc1NvbGRPdXQ6IHRydWUsIHRpY2tldFVybDogXCIjXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiVmlwIHRpY2tldHNcIiwgaXNTb2xkT3V0OiB0cnVlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkNvbW1vblwiLCBpc1NvbGRPdXQ6IGZhbHNlLCB0aWNrZXRVcmw6IFwiI1wiIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlQ29udGVudD5cclxuPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==