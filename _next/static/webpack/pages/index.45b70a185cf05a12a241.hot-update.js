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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: !tickets ? 'centered' : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-date-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-date",
          children: date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "events-location-container events-cell",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-subtitle",
          children: locationSubtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "event-location",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: locationUrl,
            children: locationText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 44
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, _this), tickets && tickets.map(function (_ref2) {
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
            lineNumber: 43,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Get tickets"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "events-sold-out",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "event-subtitle",
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Sold out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, _this)
      }, name, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQudHN4Il0sIm5hbWVzIjpbIkV2ZW50Iiwic3VidGl0bGUiLCJkYXRlIiwibG9jYXRpb25TdWJ0aXRsZSIsImxvY2F0aW9uVXJsIiwibG9jYXRpb25UZXh0IiwidGlja2V0cyIsIm1hcCIsIm5hbWUiLCJpc1NvbGRPdXQiLCJ0aWNrZXRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUJPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFDbkJDLFFBRG1CLFFBQ25CQSxRQURtQjtBQUFBLE1BRW5CQyxJQUZtQixRQUVuQkEsSUFGbUI7QUFBQSxNQUduQkMsZ0JBSG1CLFFBR25CQSxnQkFIbUI7QUFBQSxNQUluQkMsV0FKbUIsUUFJbkJBLFdBSm1CO0FBQUEsTUFLbkJDLFlBTG1CLFFBS25CQSxZQUxtQjtBQUFBLE1BTW5CQyxPQU5tQixRQU1uQkEsT0FObUI7QUFBQSxzQkFRbkI7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFLENBQUNBLE9BQUQsR0FBVyxVQUFYLEdBQXdCLEVBQXhDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLG9CQUFrQ0w7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBQyxZQUFoQjtBQUFBLG9CQUE4QkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUNJO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxvQkFBa0NDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsaUNBQWlDO0FBQUcsZ0JBQUksRUFBRUMsV0FBVDtBQUFBLHNCQUF1QkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBWUlDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQSxVQUFFQyxJQUFGLFNBQUVBLElBQUY7QUFBQSxVQUFTQyxTQUFULFNBQVNBLFNBQVQ7QUFBQSxVQUFvQkMsU0FBcEIsU0FBb0JBLFNBQXBCO0FBQUEsMEJBQ3JCO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtCQUVJLENBQUNELFNBQUQsZ0JBQ0U7QUFBRyxjQUFJLEVBQUVDLFNBQVQ7QUFBb0IsbUJBQVMsRUFBQyxLQUE5QjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxzQkFBa0NGO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZ0JBTUU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFDLGdCQUFoQjtBQUFBLHNCQUFrQ0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJOLFNBQWlEQSxJQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBWixDQVpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVJtQjtBQUFBLENBQWQ7S0FBTVIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NWI3MGExODVjZjA1YTEyYTI0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSB0aWNrZXQgPSB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgaXNTb2xkT3V0OiBib29sZWFuXHJcbiAgdGlja2V0VXJsOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBwcm9wcyA9IHtcclxuICBzdWJ0aXRsZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgbG9jYXRpb25TdWJ0aXRsZTogc3RyaW5nXHJcbiAgbG9jYXRpb25Vcmw6IHN0cmluZ1xyXG4gIGxvY2F0aW9uVGV4dDogc3RyaW5nXHJcbiAgdGlja2V0cz86IHRpY2tldFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudCA9ICh7XHJcbiAgc3VidGl0bGUsXHJcbiAgZGF0ZSxcclxuICBsb2NhdGlvblN1YnRpdGxlLFxyXG4gIGxvY2F0aW9uVXJsLFxyXG4gIGxvY2F0aW9uVGV4dCxcclxuICB0aWNrZXRzXHJcbn06IHByb3BzKSA9PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLXJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyF0aWNrZXRzID8gJ2NlbnRlcmVkJyA6ICcnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZGF0ZS1jb250YWluZXIgZXZlbnRzLWNlbGxcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN1YnRpdGxlXCI+e3N1YnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1sb2NhdGlvbi1jb250YWluZXIgZXZlbnRzLWNlbGxcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN1YnRpdGxlXCI+e2xvY2F0aW9uU3VidGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtbG9jYXRpb25cIj48YSBocmVmPXtsb2NhdGlvblVybH0+e2xvY2F0aW9uVGV4dH08L2E+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAge1xyXG4gICAgICB0aWNrZXRzICYmIHRpY2tldHMubWFwKCh7bmFtZSwgIGlzU29sZE91dCwgdGlja2V0VXJsfTogdGlja2V0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtYnV0dG9ucyBldmVudHMtY2VsbFwiIGtleT17bmFtZX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICFpc1NvbGRPdXQgPyAoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17dGlja2V0VXJsfSBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3VidGl0bGVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdldCB0aWNrZXRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1zb2xkLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+U29sZCBvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSlcclxuICAgIH1cclxuICA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9