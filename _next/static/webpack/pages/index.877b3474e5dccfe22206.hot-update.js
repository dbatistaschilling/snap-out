webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Event.tsx":
/*!**********************************!*\
  !*** ./src/components/Event.tsx ***!
  \**********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "F:\\portfolio-projects\\Ruggero\\schrodingers-cats\\musician-band\\src\\components\\Event.tsx",
    _this = undefined;


var Event = function Event(_ref) {
  var subtitle = _ref.subtitle,
      date = _ref.date,
      locationSubtitle = _ref.locationSubtitle,
      locationUrl = _ref.locationUrl,
      locationText = _ref.locationText,
      tickets = _ref.tickets;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "events-row",
    children: tickets ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-date-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-date",
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-location-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: locationSubtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-location",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: locationUrl,
            children: locationText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 48
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, _this), tickets.map(function (_ref2) {
        var name = _ref2.name,
            isSoldOut = _ref2.isSoldOut,
            ticketUrl = _ref2.ticketUrl;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "events-buttons events-cell",
          children: !isSoldOut ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: ticketUrl,
            className: "btn",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "event-subtitle",
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Get tickets"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "events-sold-out",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "event-subtitle",
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Sold out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, _this)
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, _this);
      })]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-date-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-date",
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-location-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: locationSubtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-location",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: locationUrl,
            children: locationText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 48
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};
_c = Event;

var _c;

$RefreshReg$(_c, "Event");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQudHN4Il0sIm5hbWVzIjpbIkV2ZW50Iiwic3VidGl0bGUiLCJkYXRlIiwibG9jYXRpb25TdWJ0aXRsZSIsImxvY2F0aW9uVXJsIiwibG9jYXRpb25UZXh0IiwidGlja2V0cyIsIm1hcCIsIm5hbWUiLCJpc1NvbGRPdXQiLCJ0aWNrZXRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQ25CQyxRQURtQixRQUNuQkEsUUFEbUI7QUFBQSxNQUVuQkMsSUFGbUIsUUFFbkJBLElBRm1CO0FBQUEsTUFHbkJDLGdCQUhtQixRQUduQkEsZ0JBSG1CO0FBQUEsTUFJbkJDLFdBSm1CLFFBSW5CQSxXQUptQjtBQUFBLE1BS25CQyxZQUxtQixRQUtuQkEsWUFMbUI7QUFBQSxNQU1uQkMsT0FObUIsUUFNbkJBLE9BTm1CO0FBQUEsc0JBUW5CO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxjQUVJQSxPQUFPLGdCQUNMO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLG9CQUFrQ0w7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBQyxZQUFoQjtBQUFBLG9CQUE4QkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUNJO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxvQkFBa0NDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsaUNBQWlDO0FBQUcsZ0JBQUksRUFBRUMsV0FBVDtBQUFBLHNCQUF1QkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLEVBVUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUEsWUFBRUMsSUFBRixTQUFFQSxJQUFGO0FBQUEsWUFBU0MsU0FBVCxTQUFTQSxTQUFUO0FBQUEsWUFBb0JDLFNBQXBCLFNBQW9CQSxTQUFwQjtBQUFBLDRCQUNWO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLG9CQUVJLENBQUNELFNBQUQsZ0JBQ0U7QUFBRyxnQkFBSSxFQUFFQyxTQUFUO0FBQW9CLHFCQUFTLEVBQUMsS0FBOUI7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsZ0JBQWhCO0FBQUEsd0JBQWtDRjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGdCQU1FO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9DQUNJO0FBQU0sdUJBQVMsRUFBQyxnQkFBaEI7QUFBQSx3QkFBa0NBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSTixXQUFpREEsSUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQVosQ0FWSjtBQUFBLG9CQURLLGdCQStCTDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxvQkFBa0NQO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUMsWUFBaEI7QUFBQSxvQkFBOEJDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsb0JBQWtDQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLGlDQUFpQztBQUFHLGdCQUFJLEVBQUVDLFdBQVQ7QUFBQSxzQkFBdUJDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBakNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSbUI7QUFBQSxDQUFkO0tBQU1MLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc3YjM0NzRlNWRjY2ZlMjIyMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgdGlja2V0ID0ge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGlzU29sZE91dDogYm9vbGVhblxyXG4gIHRpY2tldFVybDogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgcHJvcHMgPSB7XHJcbiAgc3VidGl0bGU6IHN0cmluZ1xyXG4gIGRhdGU6IHN0cmluZ1xyXG4gIGxvY2F0aW9uU3VidGl0bGU6IHN0cmluZ1xyXG4gIGxvY2F0aW9uVXJsOiBzdHJpbmdcclxuICBsb2NhdGlvblRleHQ6IHN0cmluZ1xyXG4gIHRpY2tldHM/OiB0aWNrZXRbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnQgPSAoe1xyXG4gIHN1YnRpdGxlLFxyXG4gIGRhdGUsXHJcbiAgbG9jYXRpb25TdWJ0aXRsZSxcclxuICBsb2NhdGlvblVybCxcclxuICBsb2NhdGlvblRleHQsXHJcbiAgdGlja2V0c1xyXG59OiBwcm9wcykgPT5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1yb3dcIj5cclxuICAgIHtcclxuICAgICAgdGlja2V0cyA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZGF0ZS1jb250YWluZXIgZXZlbnRzLWNlbGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtbG9jYXRpb24tY29udGFpbmVyIGV2ZW50cy1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3VidGl0bGVcIj57bG9jYXRpb25TdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtbG9jYXRpb25cIj48YSBocmVmPXtsb2NhdGlvblVybH0+e2xvY2F0aW9uVGV4dH08L2E+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpY2tldHMubWFwKCh7bmFtZSwgIGlzU29sZE91dCwgdGlja2V0VXJsfTogdGlja2V0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtYnV0dG9ucyBldmVudHMtY2VsbFwiIGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICFpc1NvbGRPdXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGlja2V0VXJsfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3VidGl0bGVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdldCB0aWNrZXRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1zb2xkLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29sZCBvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZGF0ZS1jb250YWluZXIgZXZlbnRzLWNlbGxcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3VidGl0bGVcIj57c3VidGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLWxvY2F0aW9uLWNvbnRhaW5lciBldmVudHMtY2VsbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN1YnRpdGxlXCI+e2xvY2F0aW9uU3VidGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWxvY2F0aW9uXCI+PGEgaHJlZj17bG9jYXRpb25Vcmx9Pntsb2NhdGlvblRleHR9PC9hPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==