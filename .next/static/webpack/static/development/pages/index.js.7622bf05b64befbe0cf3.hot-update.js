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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var LIMIT_PER_PAGE = 20;
var ALL_PRODUCTS_LENGTH;

var Index = function Index(props) {
  return __jsx("div", {
    className: "jsx-2519694897" + " " + "IndexPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2519694897",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Products List"), __jsx("div", {
    className: "jsx-2519694897" + " " + "ProductsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.products.map(function (product) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(product.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2519694897" + " " + "ProductThumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2519694897" + " " + "ProductName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, product.title), __jsx("span", {
      className: "jsx-2519694897" + " " + "ProductPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, product.price, "\u20AC"), __jsx("img", {
      src: product.product_image,
      alt: "".concat(product.title, " image"),
      className: "jsx-2519694897" + " " + "ProductImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-2519694897" + " " + "Pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2519694897" + " " + "PreviousPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.previousPage)), __jsx("span", {
    className: "jsx-2519694897" + " " + "CurrentPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.currentPage), __jsx("span", {
    className: "jsx-2519694897" + " " + "NextPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.nextPage)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2519694897",
    __self: this
  }, "h1.jsx-2519694897{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-2519694897{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-2519694897{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-2519694897{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-2519694897{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-2519694897{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-2519694897{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}ul.jsx-2519694897{padding:0;}li.jsx-2519694897{list-style:none;margin:5px 0;}a.jsx-2519694897{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2519694897:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFGLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFSb0IsQUFzQnBCLENBNURnQixFQWdCUyxDQWtDVixFQXhERixBQVlDLEFBcUJTLFNBMUJULEVBTkEsQUF3RGQsQ0E1Q2UsQUFnQ0wsQ0FwRGEsT0E4QkEsQUF1QlQsQ0F0Q2QsQUEwQlksRUFoQ1osRUFZYSxNQXFCQSxDQVlDLEFBY0QsRUFuRUEsRUFxQkssS0FTTCxDQVlPLENBMEJwQixDQWRBLENBckRvQixPQXFCa0IsQUFTbEIsUUFZSCxHQXpDakIsT0E4QlcsS0FZQyxJQVhRLE1BVkQsQUFzQjBCLFlBWEEsS0FWN0MsdUJBc0JBLFlBWEEiLCJmaWxlIjoiL1VzZXJzL21laGRpL1RlY2huaWNhbFRlc3RzL0xhRm91cmNoZS9mcm9udC10ZWNobmljYWwtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IExJTUlUX1BFUl9QQUdFID0gMjA7XG5sZXQgQUxMX1BST0RVQ1RTX0xFTkdUSDtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiSW5kZXhQYWdlXCI+XG4gICAgPGgxPlByb2R1Y3RzIExpc3Q8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNDb250YWluZXJcIj5cbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0VGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0TmFtZVwiPntwcm9kdWN0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByb2R1Y3RQcmljZVwiPntwcm9kdWN0LnByaWNlfeKCrDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvZHVjdEltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnByb2R1Y3RfaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX0gaW1hZ2VgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQYWdpbmF0aW9uXCI+XG4gICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByZXZpb3VzUGFnZVwiPntwcm9wcy5wcmV2aW91c1BhZ2V9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQ3VycmVudFBhZ2VcIj57cHJvcHMuY3VycmVudFBhZ2V9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTmV4dFBhZ2VcIj57cHJvcHMubmV4dFBhZ2V9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuSW5kZXhQYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdHNDb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFRodW1ibmFpbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3ROYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RQcmljZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0b3A6IDI1NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0SW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgei1pbmRleDogLTEwO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHsgcXVlcnkgfSkge1xuICBpZiAoIUFMTF9QUk9EVUNUU19MRU5HVEgpIHtcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzXCIpO1xuICAgIGNvbnN0IGRhdGFBbGxQcm9kdWN0cyA9IGF3YWl0IGFsbFByb2R1Y3RzLmpzb24oKTtcbiAgICBBTExfUFJPRFVDVFNfTEVOR1RIID0gZGF0YUFsbFByb2R1Y3RzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0cz9fcGFnZT0ke3F1ZXJ5LnB9Jl9saW1pdD0ke0xJTUlUX1BFUl9QQUdFfWBcbiAgKTtcbiAgY29uc3QgZGF0YVByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0cy5qc29uKCk7XG5cbiAgY29uc3QgY3VycmVudFBhZ2UgPSBwYXJzZUludChxdWVyeS5wKTtcblxuICBjb25zdCBwcmV2aW91c1BhZ2UgPSBjdXJyZW50UGFnZSAtIDEgPD0gMCA/IDAgOiBjdXJyZW50UGFnZSAtIDE7XG4gIGNvbnN0IG5leHRQYWdlID1cbiAgICAoY3VycmVudFBhZ2UgKyAxKSAqIExJTUlUX1BFUl9QQUdFID49IEFMTF9QUk9EVUNUU19MRU5HVEhcbiAgICAgID8gY3VycmVudFBhZ2VcbiAgICAgIDogY3VycmVudFBhZ2UgKyAxO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxQcm9kdWN0czogQUxMX1BST0RVQ1RTX0xFTkdUSCxcbiAgICBwcm9kdWN0czogZGF0YVByb2R1Y3QsXG4gICAgY3VycmVudFBhZ2U6IHF1ZXJ5LnAsXG4gICAgcHJldmlvdXNQYWdlOiBwcmV2aW91c1BhZ2UsXG4gICAgbmV4dFBhZ2U6IG5leHRQYWdlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
};

Index.getInitialProps = function _callee(_ref) {
  var query, allProducts, dataAllProducts, products, dataProduct, currentPage, previousPage, nextPage;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query;

          if (ALL_PRODUCTS_LENGTH) {
            _context.next = 9;
            break;
          }

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:8080/products"));

        case 4:
          allProducts = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(allProducts.json());

        case 7:
          dataAllProducts = _context.sent;
          ALL_PRODUCTS_LENGTH = dataAllProducts.length;

        case 9:
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:8080/products?_page=".concat(query.p, "&_limit=").concat(LIMIT_PER_PAGE)));

        case 11:
          products = _context.sent;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(products.json());

        case 14:
          dataProduct = _context.sent;
          currentPage = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(query.p);
          previousPage = currentPage - 1 <= 0 ? 0 : currentPage - 1;
          nextPage = (currentPage + 1) * LIMIT_PER_PAGE >= ALL_PRODUCTS_LENGTH ? currentPage : currentPage + 1;
          return _context.abrupt("return", {
            totalProducts: ALL_PRODUCTS_LENGTH,
            products: dataProduct,
            currentPage: query.p,
            previousPage: previousPage,
            nextPage: nextPage
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7622bf05b64befbe0cf3.hot-update.js.map