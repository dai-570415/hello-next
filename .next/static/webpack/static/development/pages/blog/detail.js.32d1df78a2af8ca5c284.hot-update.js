webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./pages/blog/detail.js":
/*!******************************!*\
  !*** ./pages/blog/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n // Blog Sample\n\nvar Content = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(_c = function _c(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h3\", {\n    className: \"jsx-4169921847\"\n  }, \"My Blog\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/blog\"\n  }, __jsx(\"a\", {\n    className: \"jsx-4169921847\" + \" \" + \"prev-link\"\n  }, \"\\u2190 Back\")), __jsx(\"div\", {\n    className: \"jsx-4169921847\" + \" \" + \"blog\"\n  }, __jsx(\"img\", {\n    src: props.router.query.image,\n    className: \"jsx-4169921847\"\n  }), __jsx(\"div\", {\n    className: \"jsx-4169921847\" + \" \" + \"blog-text\"\n  }, __jsx(\"span\", {\n    className: \"jsx-4169921847\" + \" \" + \"createdAt\"\n  }, props.router.query.createdAt), __jsx(\"span\", {\n    className: \"jsx-4169921847\" + \" \" + \"tag\"\n  }, props.router.query.tag), __jsx(\"p\", {\n    className: \"jsx-4169921847\" + \" \" + \"title\"\n  }, props.router.query.title), __jsx(\"p\", {\n    className: \"jsx-4169921847\" + \" \" + \"content-text\"\n  }, props.router.query.content))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4169921847\"\n  }, \".blog.jsx-4169921847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.blog.jsx-4169921847 .createdAt.jsx-4169921847{font-size:14px;color:#696969;margin:0 10px 0 0;}.blog.jsx-4169921847 .tag.jsx-4169921847{font-size:12px;color:#fff;padding:3px 10px 1px;background:#ff69b4;bottom:1px;position:relative;}.blog.jsx-4169921847 img.jsx-4169921847{display:block;width:250px;height:200px;object-fit:cover;margin:0 0 0 50px;background:#eee;}.title.jsx-4169921847{font-size:20px;font-weight:500;margin:10px 0;}.content-text.jsx-4169921847{text-align:justify;font-size:15px;line-height:1.75em;}.prev-link.jsx-4169921847{display:block;font-size:15px;margin:0 0 30px 0;}@media screen and (max-width:768px){.blog.jsx-4169921847{display:block;}.blog.jsx-4169921847 img.jsx-4169921847{width:100%;height:150px;margin:0 0 30px 0;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpZGFpc3VrZS9uZXh0LWFwcC9oZWxsby1uZXh0L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCd0IsQUFHa0MsQUFJRSxBQUtBLEFBUUQsQUFRQyxBQUtJLEFBS0wsQUFNSSxBQUdILFdBQ0UsR0EzQkwsQUFrQkcsQUFNZixDQXJDYyxBQUtILEFBZ0JLLElBS0QsS0FlTyxFQW5DRCxBQVFSLEdBYkssQUErQkEsRUFWSixHQUtLLEtBWkYsR0EyQmpCLEdBbkJKLEVBckJBLEFBS3VCLEFBMEJ2QixNQUxBLEdBWnNCLFVBUlAsUUFaZ0IsQUFxQlgsR0FSRSxhQVN0QixLQVJBLHdFQWJBIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpZGFpc3VrZS9uZXh0LWFwcC9oZWxsby1uZXh0L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuLy8gQmxvZyBTYW1wbGVcbmNvbnN0IENvbnRlbnQgPSB3aXRoUm91dGVyKChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDM+TXkgQmxvZzwvaDM+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByZXYtbGlua1wiPuKGkCBCYWNrPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb3BzLnJvdXRlci5xdWVyeS5pbWFnZSB9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JlYXRlZEF0XCI+eyBwcm9wcy5yb3V0ZXIucXVlcnkuY3JlYXRlZEF0IH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPnsgcHJvcHMucm91dGVyLnF1ZXJ5LnRhZyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnsgcHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dFwiPnsgcHJvcHMucm91dGVyLnF1ZXJ5LmNvbnRlbnQgfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ibG9nIC5jcmVhdGVkQXQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjk2OTY5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ibG9nIC50YWcge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjY5YjQ7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ibG9nIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50LXRleHQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmV2LWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5ibG9nIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59KTtcbmNvbnN0IEJsb2cgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPENvbnRlbnQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiXX0= */\\n/*@ sourceURL=/Users/moridaisuke/next-app/hello-next/pages/blog/detail.js */\"));\n});\n_c2 = Content;\n\nvar Blog = function Blog(props) {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(Content, null));\n};\n\n_c3 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Content$withRouter\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2RldGFpbC5qcz8xZDRkIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJ3aXRoUm91dGVyIiwicHJvcHMiLCJyb3V0ZXIiLCJxdWVyeSIsImltYWdlIiwiY3JlYXRlZEF0IiwidGFnIiwidGl0bGUiLCJjb250ZW50IiwiQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLE1BQUMsWUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLFNBQ0ksbUVBQ0k7QUFBQTtBQUFBLGVBREosRUFHSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDSTtBQUFBLHdDQUFhO0FBQWIsbUJBREosQ0FISixFQU9JO0FBQUEsd0NBQWU7QUFBZixLQUNJO0FBQUssT0FBRyxFQUFHQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsS0FBOUI7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBLHdDQUFlO0FBQWYsS0FDSTtBQUFBLHdDQUFnQjtBQUFoQixLQUE4QkgsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJFLFNBQWpELENBREosRUFFSTtBQUFBLHdDQUFnQjtBQUFoQixLQUF3QkosS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJHLEdBQTNDLENBRkosRUFHSTtBQUFBLHdDQUFhO0FBQWIsS0FBdUJMLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CSSxLQUExQyxDQUhKLEVBSUk7QUFBQSx3Q0FBYTtBQUFiLEtBQThCTixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkssT0FBakQsQ0FKSixDQUZKLENBUEo7QUFBQTtBQUFBLGl3S0FESjtBQXdFSCxDQXpFeUIsQ0FBMUI7TUFBTVQsTzs7QUEwRU4sSUFBTVUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ1IsS0FBRCxFQUFXO0FBQ3BCLFNBQ0ksTUFBQywwREFBRCxRQUNJLE1BQUMsT0FBRCxPQURKLENBREo7QUFLSCxDQU5EOztNQUFNUSxJO0FBUVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9kZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG4vLyBCbG9nIFNhbXBsZVxuY29uc3QgQ29udGVudCA9IHdpdGhSb3V0ZXIoKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMz5NeSBCbG9nPC9oMz5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJldi1saW5rXCI+4oaQIEJhY2s8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgcHJvcHMucm91dGVyLnF1ZXJ5LmltYWdlIH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVkQXRcIj57IHByb3BzLnJvdXRlci5xdWVyeS5jcmVhdGVkQXQgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCI+eyBwcm9wcy5yb3V0ZXIucXVlcnkudGFnIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+eyBwcm9wcy5yb3V0ZXIucXVlcnkudGl0bGUgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0XCI+eyBwcm9wcy5yb3V0ZXIucXVlcnkuY29udGVudCB9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgLmNyZWF0ZWRBdCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2OTY5Njk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgLnRhZyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNjliNDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByZXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2cgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0pO1xuY29uc3QgQmxvZyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29udGVudCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/detail.js\n");

/***/ })

})