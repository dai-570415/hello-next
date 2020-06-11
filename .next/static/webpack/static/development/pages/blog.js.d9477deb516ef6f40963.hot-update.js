webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n // Blog Sample\n\nvar PostLink = function PostLink(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      content = _ref.content,\n      tag = _ref.tag,\n      image = _ref.image,\n      createdAt = _ref.createdAt;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2179513954\" + \" \" + \"blog\"\n  }, __jsx(\"img\", {\n    src: image,\n    className: \"jsx-2179513954\"\n  }), __jsx(\"div\", {\n    className: \"jsx-2179513954\" + \" \" + \"blog-text\"\n  }, __jsx(\"span\", {\n    className: \"jsx-2179513954\" + \" \" + \"createdAt\"\n  }, createdAt), __jsx(\"span\", {\n    className: \"jsx-2179513954\" + \" \" + \"tag\"\n  }, tag), __jsx(\"p\", {\n    className: \"jsx-2179513954\" + \" \" + \"title\"\n  }, title.substr(0, 20)), __jsx(\"p\", {\n    className: \"jsx-2179513954\" + \" \" + \"content-text\"\n  }, content.substr(0, 40), \".........\"), __jsx(\"li\", {\n    className: \"jsx-2179513954\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    as: \"/b/\".concat(id),\n    href: \"/blog/detail?title=\".concat(title, \"&content=\").concat(content, \"&tag=\").concat(tag, \"&image=\").concat(image, \"&createdAt=\").concat(createdAt)\n  }, __jsx(\"a\", {\n    className: \"jsx-2179513954\" + \" \" + \"next-link\"\n  }, \"\\u7D9A\\u304D\\u306F\\u3053\\u3061\\u3089: \", title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2179513954\"\n  }, \".blog.jsx-2179513954{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 0 50px 0;padding:0 0 50px 0;border-bottom:1px dashed #ccc;}.blog.jsx-2179513954:last-child{margin:0;padding:0;border-bottom:none;}.blog.jsx-2179513954 .createdAt.jsx-2179513954{font-size:14px;color:#696969;margin:0 10px 0 0;}.blog.jsx-2179513954 .tag.jsx-2179513954{font-size:12px;color:#fff;padding:3px 10px 1px;background:#ff69b4;bottom:1px;position:relative;}.blog.jsx-2179513954 img.jsx-2179513954{display:block;width:150px;height:125px;object-fit:cover;margin:0 30px 0 0;background:#eee;}.title.jsx-2179513954{font-size:20px;font-weight:500;margin:10px 0;}.content-text.jsx-2179513954{text-align:justify;font-size:15px;line-height:1.75em;}.next-link.jsx-2179513954{display:block;font-size:13px;margin:10px 0 0 0;}@media screen and (max-width:768px){.blog.jsx-2179513954{display:block;}.blog.jsx-2179513954 img.jsx-2179513954{width:100%;margin:0 0 30px 0;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpZGFpc3VrZS9uZXh0LWFwcC9oZWxsby1uZXh0L3BhZ2VzL2Jsb2cvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J3QixBQUdrQyxBQU1KLEFBS00sQUFLQSxBQVFELEFBUUMsQUFLSSxBQUtMLEFBTUksQUFHSCxTQTVDTCxFQTZDWSxHQTNCVixBQWtCRyxBQU1mLENBckNjLEFBS0gsQUFnQkssSUF6QkcsQUE4QkosT0FwQk0sQUFRUixHQWJLLEFBK0JBLEFBU2xCLEVBbkJjLEdBS0ssSUE5QnZCLENBa0JxQixNQVFyQixFQXJCQSxBQUt1QixBQTBCdkIsTUFMQSxHQVpzQixVQVJQLFFBbkJPLEFBNEJGLEdBUkUsYUFTdEIsRUE1QnVCLEdBb0J2QixnQkFuQmtDLDhCQUNsQyIsImZpbGUiOiIvVXNlcnMvbW9yaWRhaXN1a2UvbmV4dC1hcHAvaGVsbG8tbmV4dC9wYWdlcy9ibG9nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBCbG9nIFNhbXBsZVxuY29uc3QgUG9zdExpbmsgPSAoeyBpZCwgdGl0bGUsIGNvbnRlbnQsIHRhZywgaW1hZ2UsIGNyZWF0ZWRBdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgaW1hZ2UgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNyZWF0ZWRBdFwiPnsgY3JlYXRlZEF0IH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPnsgdGFnIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+eyB0aXRsZS5zdWJzdHIoMCwyMCkgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0XCI+eyBjb250ZW50LnN1YnN0cigwLDQwKSB9Li4uLi4uLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9iLyR7aWR9YH0gaHJlZj17YC9ibG9nL2RldGFpbD90aXRsZT0ke3RpdGxlfSZjb250ZW50PSR7Y29udGVudH0mdGFnPSR7dGFnfSZpbWFnZT0ke2ltYWdlfSZjcmVhdGVkQXQ9JHtjcmVhdGVkQXR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV4dC1saW5rXCI+57aa44GN44Gv44GT44Gh44KJOiB7dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZzpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZyAuY3JlYXRlZEF0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY5Njk2OTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZyAudGFnIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHggMXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2OWI0O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvZyBpbWcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmV4dC1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYmxvZyBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PiBcbiAgICAgICAgICAgIDxoMz5CbG9nIFNhbXBsZTwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Yid44KB44Gm44Gu44CQTmV4dOOAkeOCouODl+ODquOBp+OBmSAzXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZcIlxuICAgICAgICAgICAgICAgICAgICB0YWc9XCLliJ3lv4PogIXlkJHjgZFcIlxuICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi4uLnBhdGguLi5cIlxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9XCIyMC4wNi4xMVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UG9zdExpbmtcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLliJ3jgoHjgabjga7jgJBOZXh044CR44Ki44OX44Oq44Gn44GZIDJcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIplwiXG4gICAgICAgICAgICAgICAgICAgIHRhZz1cIuWIneW/g+iAheWQkeOBkVwiXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPVwiLi4ucGF0aC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD1cIjIwLjA2LjExXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQb3N0TGlua1xuICAgICAgICAgICAgICAgICAgICBpZD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuWIneOCgeOBpuOBruOAkE5leHTjgJHjgqLjg5fjg6rjgafjgZkgMVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimXCJcbiAgICAgICAgICAgICAgICAgICAgdGFnPVwi5Yid5b+D6ICF5ZCR44GRXCJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIuLi5wYXRoLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PVwiMjAuMDYuMTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\\n/*@ sourceURL=/Users/moridaisuke/next-app/hello-next/pages/blog/index.js */\"));\n};\n\n_c = PostLink;\n\nvar Index = function Index() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, __jsx(\"h3\", null, \"Blog Sample\"), __jsx(\"ul\", null, __jsx(PostLink, {\n    id: \"3\",\n    title: \"\\u521D\\u3081\\u3066\\u306E\\u3010Next\\u3011\\u30A2\\u30D7\\u30EA\\u3067\\u3059 3\",\n    content: \"Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226\",\n    tag: \"\\u521D\\u5FC3\\u8005\\u5411\\u3051\",\n    image: \"...path...\",\n    createdAt: \"20.06.11\"\n  }), __jsx(PostLink, {\n    id: \"2\",\n    title: \"\\u521D\\u3081\\u3066\\u306E\\u3010Next\\u3011\\u30A2\\u30D7\\u30EA\\u3067\\u3059 2\",\n    content: \"Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226\",\n    tag: \"\\u521D\\u5FC3\\u8005\\u5411\\u3051\",\n    image: \"...path...\",\n    createdAt: \"20.06.11\"\n  }), __jsx(PostLink, {\n    id: \"1\",\n    title: \"\\u521D\\u3081\\u3066\\u306E\\u3010Next\\u3011\\u30A2\\u30D7\\u30EA\\u3067\\u3059 1\",\n    content: \"Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226Next\\u3067Blog\\u30C1\\u30E5\\u30FC\\u30C8\\u30EA\\u30A2\\u30EB\\u306B\\u6311\\u6226\",\n    tag: \"\\u521D\\u5FC3\\u8005\\u5411\\u3051\",\n    image: \"...path...\",\n    createdAt: \"20.06.11\"\n  })));\n};\n\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PostLink\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LmpzP2ZmMjgiXSwibmFtZXMiOlsiUG9zdExpbmsiLCJpZCIsInRpdGxlIiwiY29udGVudCIsInRhZyIsImltYWdlIiwiY3JlYXRlZEF0Iiwic3Vic3RyIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtRDtBQUFBLE1BQWhEQyxFQUFnRCxRQUFoREEsRUFBZ0Q7QUFBQSxNQUE1Q0MsS0FBNEMsUUFBNUNBLEtBQTRDO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTVCQyxHQUE0QixRQUE1QkEsR0FBNEI7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRSxTQUNJLG1FQUNJO0FBQUEsd0NBQWU7QUFBZixLQUNJO0FBQUssT0FBRyxFQUFHRCxLQUFYO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQSx3Q0FBZTtBQUFmLEtBQ0k7QUFBQSx3Q0FBZ0I7QUFBaEIsS0FBOEJDLFNBQTlCLENBREosRUFFSTtBQUFBLHdDQUFnQjtBQUFoQixLQUF3QkYsR0FBeEIsQ0FGSixFQUdJO0FBQUEsd0NBQWE7QUFBYixLQUF1QkYsS0FBSyxDQUFDSyxNQUFOLENBQWEsQ0FBYixFQUFlLEVBQWYsQ0FBdkIsQ0FISixFQUlJO0FBQUEsd0NBQWE7QUFBYixLQUE4QkosT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixFQUFpQixFQUFqQixDQUE5QixjQUpKLEVBS0k7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLE1BQUUsZUFBUU4sRUFBUixDQUFSO0FBQXNCLFFBQUksK0JBQXdCQyxLQUF4QixzQkFBeUNDLE9BQXpDLGtCQUF3REMsR0FBeEQsb0JBQXFFQyxLQUFyRSx3QkFBd0ZDLFNBQXhGO0FBQTFCLEtBQ0k7QUFBQSx3Q0FBYTtBQUFiLCtDQUFrQ0osS0FBbEMsQ0FESixDQURKLENBTEosQ0FGSixDQURKO0FBQUE7QUFBQSx3MFBBREo7QUE2RUgsQ0E5RUQ7O0tBQU1GLFE7O0FBK0VOLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEIsU0FDSSxNQUFDLDBEQUFELFFBQ0ksZ0NBREosRUFFSSxrQkFDSSxNQUFDLFFBQUQ7QUFDSSxNQUFFLEVBQUMsR0FEUDtBQUVJLFNBQUssRUFBQywwRUFGVjtBQUdJLFdBQU8sRUFBQyxvWEFIWjtBQUlJLE9BQUcsRUFBQyxnQ0FKUjtBQUtJLFNBQUssRUFBQyxZQUxWO0FBTUksYUFBUyxFQUFDO0FBTmQsSUFESixFQVNJLE1BQUMsUUFBRDtBQUNJLE1BQUUsRUFBQyxHQURQO0FBRUksU0FBSyxFQUFDLDBFQUZWO0FBR0ksV0FBTyxFQUFDLG9YQUhaO0FBSUksT0FBRyxFQUFDLGdDQUpSO0FBS0ksU0FBSyxFQUFDLFlBTFY7QUFNSSxhQUFTLEVBQUM7QUFOZCxJQVRKLEVBaUJJLE1BQUMsUUFBRDtBQUNJLE1BQUUsRUFBQyxHQURQO0FBRUksU0FBSyxFQUFDLDBFQUZWO0FBR0ksV0FBTyxFQUFDLG9YQUhaO0FBSUksT0FBRyxFQUFDLGdDQUpSO0FBS0ksU0FBSyxFQUFDLFlBTFY7QUFNSSxhQUFTLEVBQUM7QUFOZCxJQWpCSixDQUZKLENBREo7QUErQkgsQ0FoQ0Q7O01BQU1BLEs7QUFrQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gQmxvZyBTYW1wbGVcbmNvbnN0IFBvc3RMaW5rID0gKHsgaWQsIHRpdGxlLCBjb250ZW50LCB0YWcsIGltYWdlLCBjcmVhdGVkQXQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IGltYWdlIH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVkQXRcIj57IGNyZWF0ZWRBdCB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWdcIj57IHRhZyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnsgdGl0bGUuc3Vic3RyKDAsMjApIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dFwiPnsgY29udGVudC5zdWJzdHIoMCw0MCkgfS4uLi4uLi4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYi8ke2lkfWB9IGhyZWY9e2AvYmxvZy9kZXRhaWw/dGl0bGU9JHt0aXRsZX0mY29udGVudD0ke2NvbnRlbnR9JnRhZz0ke3RhZ30maW1hZ2U9JHtpbWFnZX0mY3JlYXRlZEF0PSR7Y3JlYXRlZEF0fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHQtbGlua1wiPue2muOBjeOBr+OBk+OBoeOCiToge3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA1MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2c6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgLmNyZWF0ZWRBdCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2OTY5Njk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgLnRhZyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNjliNDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJsb2cgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5leHQtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmJsb2cgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD4gXG4gICAgICAgICAgICA8aDM+QmxvZyBTYW1wbGU8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxQb3N0TGlua1xuICAgICAgICAgICAgICAgICAgICBpZD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuWIneOCgeOBpuOBruOAkE5leHTjgJHjgqLjg5fjg6rjgafjgZkgM1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimXCJcbiAgICAgICAgICAgICAgICAgICAgdGFnPVwi5Yid5b+D6ICF5ZCR44GRXCJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIuLi5wYXRoLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PVwiMjAuMDYuMTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Yid44KB44Gm44Gu44CQTmV4dOOAkeOCouODl+ODquOBp+OBmSAyXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZcIlxuICAgICAgICAgICAgICAgICAgICB0YWc9XCLliJ3lv4PogIXlkJHjgZFcIlxuICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi4uLnBhdGguLi5cIlxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9XCIyMC4wNi4xMVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UG9zdExpbmtcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLliJ3jgoHjgabjga7jgJBOZXh044CR44Ki44OX44Oq44Gn44GZIDFcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIpk5leHTjgadCbG9n44OB44Ol44O844OI44Oq44Ki44Or44Gr5oyR5oimTmV4dOOBp0Jsb2fjg4Hjg6Xjg7zjg4jjg6rjgqLjg6vjgavmjJHmiKZOZXh044GnQmxvZ+ODgeODpeODvOODiOODquOCouODq+OBq+aMkeaIplwiXG4gICAgICAgICAgICAgICAgICAgIHRhZz1cIuWIneW/g+iAheWQkeOBkVwiXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPVwiLi4ucGF0aC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD1cIjIwLjA2LjExXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ })

})