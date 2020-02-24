webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Index = function Index(props) {
  return __jsx("div", {
    className: "jsx-3423004840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3423004840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Products List"), __jsx("div", {
    className: "jsx-3423004840" + " " + "ProductsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.products.map(function (product) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(product.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3423004840" + " " + "ProductThumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3423004840" + " " + "ProductName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, product.title), __jsx("span", {
      className: "jsx-3423004840" + " " + "ProductPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, product.price, "\u20AC"), __jsx("img", {
      src: product.product_image,
      alt: "{product.name} image",
      className: "jsx-3423004840" + " " + "ProductImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3423004840",
    __self: this
  }, "h1.jsx-3423004840{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductThumbnail.jsx-3423004840{position:relative;width:200px;height:300px;float:left;}.ProductName.jsx-3423004840{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;}.ProductPrice.jsx-3423004840{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;}.ProductImage.jsx-3423004840{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}ul.jsx-3423004840{padding:0;}li.jsx-3423004840{list-style:none;margin:5px 0;}a.jsx-3423004840{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3423004840:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQixBQUd5QyxBQU9kLEFBT0gsQUFVRyxBQVVOLEFBUUYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQVJvQixBQXNCcEIsR0ExQ3lCLENBZ0NWLEVBdkNELEFBaUJTLFdBdUJ2QixDQXZDZSxBQTJCTCxDQW5DYSxPQWVBLEFBcUJULENBWEYsSUFoQkMsTUFpQkEsQ0FXQyxBQWNELEVBbERBLEVBU2IsS0FNYSxDQVdPLENBeUJwQixDQWRBLENBcENvQixPQWVBLFFBV0gsR0F6QmpCLE9BZVcsS0FXQyxJQVZRLE1BV3BCLFlBVkEiLCJmaWxlIjoiL1VzZXJzL21laGRpL1RlY2huaWNhbFRlc3RzL0xhRm91cmNoZS9mcm9udC10ZWNobmljYWwtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT5Qcm9kdWN0cyBMaXN0PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzQ29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW2lkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFRodW1ibmFpbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJvZHVjdE5hbWVcIj57cHJvZHVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2VcIj57cHJvZHVjdC5wcmljZX3igqw8L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2B7cHJvZHVjdC5uYW1lfSBpbWFnZWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RUaHVtYm5haWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0TmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0UHJpY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdG9wOiAyNTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/X3BhZ2U9MSZfbGltaXQ9MjBcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGBQcm9kdWN0IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogZGF0YVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
};

Index.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/products?_page=1&_limit=20"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          console.log("Product data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            products: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.38e94633d744afa9380c.hot-update.js.map