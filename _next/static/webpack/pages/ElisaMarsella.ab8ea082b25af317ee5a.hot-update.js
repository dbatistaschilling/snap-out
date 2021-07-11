webpackHotUpdate_N_E("pages/ElisaMarsella",{

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
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginLeft: '30%'
      },
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
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQudHN4Il0sIm5hbWVzIjpbIkV2ZW50Iiwic3VidGl0bGUiLCJkYXRlIiwibG9jYXRpb25TdWJ0aXRsZSIsImxvY2F0aW9uVXJsIiwibG9jYXRpb25UZXh0IiwidGlja2V0cyIsIm1hcCIsIm5hbWUiLCJpc1NvbGRPdXQiLCJ0aWNrZXRVcmwiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQk8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUNuQkMsUUFEbUIsUUFDbkJBLFFBRG1CO0FBQUEsTUFFbkJDLElBRm1CLFFBRW5CQSxJQUZtQjtBQUFBLE1BR25CQyxnQkFIbUIsUUFHbkJBLGdCQUhtQjtBQUFBLE1BSW5CQyxXQUptQixRQUluQkEsV0FKbUI7QUFBQSxNQUtuQkMsWUFMbUIsUUFLbkJBLFlBTG1CO0FBQUEsTUFNbkJDLE9BTm1CLFFBTW5CQSxPQU5tQjtBQUFBLHNCQVFuQjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsY0FFSUEsT0FBTyxnQkFDTDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGdDQUNJO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxvQkFBa0NMO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsWUFBaEI7QUFBQSxvQkFBOEJDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsb0JBQWtDQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLGlDQUFpQztBQUFHLGdCQUFJLEVBQUVDLFdBQVQ7QUFBQSxzQkFBdUJDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQVVJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFBLFlBQUVDLElBQUYsU0FBRUEsSUFBRjtBQUFBLFlBQVNDLFNBQVQsU0FBU0EsU0FBVDtBQUFBLFlBQW9CQyxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSw0QkFDVjtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxvQkFFSSxDQUFDRCxTQUFELGdCQUNFO0FBQUcsZ0JBQUksRUFBRUMsU0FBVDtBQUFvQixxQkFBUyxFQUFDLEtBQTlCO0FBQUEsb0NBQ0k7QUFBTSx1QkFBUyxFQUFDLGdCQUFoQjtBQUFBLHdCQUFrQ0Y7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixnQkFNRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsZ0JBQWhCO0FBQUEsd0JBQWtDQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUk4sV0FBaURBLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFaLENBVko7QUFBQSxvQkFESyxnQkErQkw7QUFBSyxXQUFLLEVBQUU7QUFBRUcsa0JBQVUsRUFBRTtBQUFkLE9BQVo7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUMsZ0JBQWhCO0FBQUEsb0JBQWtDVjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLFlBQWhCO0FBQUEsb0JBQThCQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFBLG9CQUFrQ0M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxpQ0FBaUM7QUFBRyxnQkFBSSxFQUFFQyxXQUFUO0FBQUEsc0JBQXVCQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakNOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSbUI7QUFBQSxDQUFkO0tBQU1MLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvRWxpc2FNYXJzZWxsYS5hYjhlYTA4MmIyNWFmMzE3ZWU1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSB0aWNrZXQgPSB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgaXNTb2xkT3V0OiBib29sZWFuXHJcbiAgdGlja2V0VXJsOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBwcm9wcyA9IHtcclxuICBzdWJ0aXRsZTogc3RyaW5nXHJcbiAgZGF0ZTogc3RyaW5nXHJcbiAgbG9jYXRpb25TdWJ0aXRsZTogc3RyaW5nXHJcbiAgbG9jYXRpb25Vcmw6IHN0cmluZ1xyXG4gIGxvY2F0aW9uVGV4dDogc3RyaW5nXHJcbiAgdGlja2V0cz86IHRpY2tldFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudCA9ICh7XHJcbiAgc3VidGl0bGUsXHJcbiAgZGF0ZSxcclxuICBsb2NhdGlvblN1YnRpdGxlLFxyXG4gIGxvY2F0aW9uVXJsLFxyXG4gIGxvY2F0aW9uVGV4dCxcclxuICB0aWNrZXRzXHJcbn06IHByb3BzKSA9PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLXJvd1wiPlxyXG4gICAge1xyXG4gICAgICB0aWNrZXRzID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1kYXRlLWNvbnRhaW5lciBldmVudHMtY2VsbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN1YnRpdGxlXCI+e3N1YnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1sb2NhdGlvbi1jb250YWluZXIgZXZlbnRzLWNlbGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntsb2NhdGlvblN1YnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1sb2NhdGlvblwiPjxhIGhyZWY9e2xvY2F0aW9uVXJsfT57bG9jYXRpb25UZXh0fTwvYT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGlja2V0cy5tYXAoKHtuYW1lLCAgaXNTb2xkT3V0LCB0aWNrZXRVcmx9OiB0aWNrZXQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1idXR0b25zIGV2ZW50cy1jZWxsXCIga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIWlzU29sZE91dCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0aWNrZXRVcmx9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2V0IHRpY2tldHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLXNvbGQtb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN1YnRpdGxlXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Tb2xkIG91dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzMwJScgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1kYXRlLWNvbnRhaW5lciBldmVudHMtY2VsbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtbG9jYXRpb24tY29udGFpbmVyIGV2ZW50cy1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3VidGl0bGVcIj57bG9jYXRpb25TdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtbG9jYXRpb25cIj48YSBocmVmPXtsb2NhdGlvblVybH0+e2xvY2F0aW9uVGV4dH08L2E+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICA8L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9