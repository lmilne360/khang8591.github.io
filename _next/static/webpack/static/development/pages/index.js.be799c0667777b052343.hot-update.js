webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/atoms/skills-card.js":
/*!*****************************************!*\
  !*** ./components/atoms/skills-card.js ***!
  \*****************************************/
/*! exports provided: SkillCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillCard", function() { return SkillCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Khang\\Desktop\\github-site\\githubio-v2\\components\\atoms\\skills-card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function SkillCard(_ref) {
  var icons = _ref.icons,
      title = _ref.title,
      description = _ref.description;
  return __jsx("div", {
    className: "jsx-3082395174" + " " + "skill-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3082395174" + " " + "skill-card__icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, icons.map(function (icon, index) {
    return __jsx("i", {
      key: index.toString(),
      className: "jsx-3082395174" + " " + "fab ".concat(icon, " skill-card__icon"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  })), __jsx("div", {
    className: "jsx-3082395174" + " " + "skill-card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), __jsx("div", {
    className: "jsx-3082395174" + " " + "skill-card__desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3082395174",
    __self: this
  }, ".skill-card.jsx-3082395174{width:100%;font-size:18px;margin-top:32px;}@media only screen and (min-width:461px){div.skill-card.jsx-3082395174{margin-left:20px;margin-right:20px;padding:0 20px;}}@media only screen and (min-width:681px){div.skill-card.jsx-3082395174{width:250px;}}@media only screen and (min-width:769px){div.skill-card.jsx-3082395174{width:350px;}}.skill-card__icon.jsx-3082395174:not(:first-child){margin-left:15px;}.skill-card__icons.jsx-3082395174{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:30px;}.fa-drupal.jsx-3082395174{color:#0077c0;}.fa-react.jsx-3082395174{color:#61dbfb;}.fa-js-square.jsx-3082395174{color:#f0db4f;}.fa-css3-alt.jsx-3082395174{color:#264de4;}.fa-html5.jsx-3082395174{color:#e44d26;}.fa-sass.jsx-3082395174{color:#cd6799;}.fa-php.jsx-3082395174{color:#787cb5;}.fa-yarn.jsx-3082395174{color:#2188b6;}.fa-git-alt.jsx-3082395174{color:#f1502f;}.skill-card__title.jsx-3082395174{font-weight:bold;font-color:#292929;margin-top:10px;font-size:20px;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2hhbmdcXERlc2t0b3BcXGdpdGh1Yi1zaXRlXFxnaXRodWJpby12MlxcY29tcG9uZW50c1xcYXRvbXNcXHNraWxscy1jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUdzQixBQVNRLEFBU0wsQUFPQSxBQUtHLEFBSUosQUFLQyxBQUdBLEFBR0EsQUFJQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRyxXQWpFRixDQWlCZixBQU9BLEVBY0YsQUFHQSxBQUdBLEFBSUEsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEdBdkRzQixBQXFCdEIsQUFxQ3FCLFNBakVILFNBUUMsQ0EwREQsTUFoRWxCLFFBT0UsRUEwRGUsZUFDSSxPQXBDSixZQXFDakIsR0FwQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaGFuZ1xcRGVza3RvcFxcZ2l0aHViLXNpdGVcXGdpdGh1YmlvLXYyXFxjb21wb25lbnRzXFxhdG9tc1xcc2tpbGxzLWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gU2tpbGxDYXJkKHsgaWNvbnMsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWNhcmRfX2ljb25zXCI+XHJcbiAgICAgICAge2ljb25zLm1hcCgoaWNvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFiICR7aWNvbn0gc2tpbGwtY2FyZF9faWNvbmB9XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1jYXJkX190aXRsZVwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1jYXJkX19kZXNjXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNraWxsLWNhcmQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIHtcclxuICAgICAgICAgIGRpdi5za2lsbC1jYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjgxcHgpIHtcclxuICAgICAgICAgIGRpdi5za2lsbC1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgIGRpdi5za2lsbC1jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNraWxsLWNhcmRfX2ljb246bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbGwtY2FyZF9faWNvbnMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYS1kcnVwYWwge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDc3YzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1yZWFjdCB7XHJcbiAgICAgICAgICBjb2xvcjogIzYxZGJmYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWpzLXNxdWFyZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2YwZGI0ZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYS1jc3MzLWFsdCB7XHJcbiAgICAgICAgICBjb2xvcjogIzI2NGRlNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWh0bWw1IHtcclxuICAgICAgICAgIGNvbG9yOiAjZTQ0ZDI2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtc2FzcyB7XHJcbiAgICAgICAgICBjb2xvcjogI2NkNjc5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXBocCB7XHJcbiAgICAgICAgICBjb2xvcjogIzc4N2NiNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXlhcm4ge1xyXG4gICAgICAgICAgY29sb3I6ICMyMTg4YjY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1naXQtYWx0IHtcclxuICAgICAgICAgIGNvbG9yOiAjZjE1MDJmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGwtY2FyZF9fdGl0bGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Khang\\Desktop\\github-site\\githubio-v2\\components\\atoms\\skills-card.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.be799c0667777b052343.hot-update.js.map