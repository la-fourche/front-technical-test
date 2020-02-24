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


var LIMIT_PER_PAGE = 20;
var ALL_PRODUCTS_LENGTH;

var Index = function Index(props) {
  return __jsx("div", {
    "class": "IndexPage",
    className: "jsx-2519694897",
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
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2519694897",
    __self: this
  }, "h1.jsx-2519694897{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-2519694897{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-2519694897{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-2519694897{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-2519694897{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-2519694897{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-2519694897{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}ul.jsx-2519694897{padding:0;}li.jsx-2519694897{list-style:none;margin:5px 0;}a.jsx-2519694897{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2519694897:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFGLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFSb0IsQUFzQnBCLENBNURnQixFQWdCUyxDQWtDVixFQXhERixBQVlDLEFBcUJTLFNBMUJULEVBTkEsQUF3RGQsQ0E1Q2UsQUFnQ0wsQ0FwRGEsT0E4QkEsQUF1QlQsQ0F0Q2QsQUEwQlksRUFoQ1osRUFZYSxNQXFCQSxDQVlDLEFBY0QsRUFuRUEsRUFxQkssS0FTTCxDQVlPLENBMEJwQixDQWRBLENBckRvQixPQXFCa0IsQUFTbEIsUUFZSCxHQXpDakIsT0E4QlcsS0FZQyxJQVhRLE1BVkQsQUFzQjBCLFlBWEEsS0FWN0MsdUJBc0JBLFlBWEEiLCJmaWxlIjoiL1VzZXJzL21laGRpL1RlY2huaWNhbFRlc3RzL0xhRm91cmNoZS9mcm9udC10ZWNobmljYWwtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IExJTUlUX1BFUl9QQUdFID0gMjA7XG5sZXQgQUxMX1BST0RVQ1RTX0xFTkdUSDtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3M9XCJJbmRleFBhZ2VcIj5cbiAgICA8aDE+UHJvZHVjdHMgTGlzdDwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0c0NvbnRhaW5lclwiPlxuICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1tpZF1cIiBhcz17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RUaHVtYm5haWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByb2R1Y3ROYW1lXCI+e3Byb2R1Y3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJvZHVjdFByaWNlXCI+e3Byb2R1Y3QucHJpY2V94oKsPC9zcGFuPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9kdWN0SW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QucHJvZHVjdF9pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtgJHtwcm9kdWN0LnRpdGxlfSBpbWFnZWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlBhZ2luYXRpb25cIj48L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLkluZGV4UGFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RzQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RUaHVtYm5haWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0TmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0UHJpY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdG9wOiAyNTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IHF1ZXJ5IH0pIHtcbiAgaWYgKCFBTExfUFJPRFVDVFNfTEVOR1RIKSB7XG4gICAgY29uc3QgYWxsUHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0c1wiKTtcbiAgICBjb25zdCBkYXRhQWxsUHJvZHVjdHMgPSBhd2FpdCBhbGxQcm9kdWN0cy5qc29uKCk7XG4gICAgQUxMX1BST0RVQ1RTX0xFTkdUSCA9IGRhdGFBbGxQcm9kdWN0cy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/X3BhZ2U9JHtxdWVyeS5wfSZfbGltaXQ9JHtMSU1JVF9QRVJfUEFHRX1gXG4gICk7XG4gIGNvbnN0IGRhdGFQcm9kdWN0ID0gYXdhaXQgcHJvZHVjdHMuanNvbigpO1xuXG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IHF1ZXJ5LnAgLSAxIDw9IDAgPyAwIDogcXVlcnkucCAtIDE7XG4gIGNvbnN0IG5leHRQYWdlID1cbiAgICAocXVlcnkucCArIDEpICogTElNSVRfUEVSX1BBR0UgPj0gQUxMX1BST0RVQ1RTX0xFTkdUSFxuICAgICAgPyBxdWVyeS5wXG4gICAgICA6IHF1ZXJ5LnAgKyAxO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxQcm9kdWN0czogQUxMX1BST0RVQ1RTX0xFTkdUSCxcbiAgICBwcm9kdWN0czogZGF0YVByb2R1Y3QsXG4gICAgY3VycmVudFBhZ2U6IHF1ZXJ5LnAsXG4gICAgcHJldmlvdXNQYWdlOiAwLFxuICAgIG5leHRQYWdlOiAxXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
};

Index.getInitialProps = function _callee(_ref) {
  var query, allProducts, dataAllProducts, products, dataProduct, previousPage, nextPage;
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
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/products"));

        case 4:
          allProducts = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(allProducts.json());

        case 7:
          dataAllProducts = _context.sent;
          ALL_PRODUCTS_LENGTH = dataAllProducts.length;

        case 9:
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/products?_page=".concat(query.p, "&_limit=").concat(LIMIT_PER_PAGE)));

        case 11:
          products = _context.sent;
          _context.next = 14;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(products.json());

        case 14:
          dataProduct = _context.sent;
          previousPage = query.p - 1 <= 0 ? 0 : query.p - 1;
          nextPage = (query.p + 1) * LIMIT_PER_PAGE >= ALL_PRODUCTS_LENGTH ? query.p : query.p + 1;
          return _context.abrupt("return", {
            totalProducts: ALL_PRODUCTS_LENGTH,
            products: dataProduct,
            currentPage: query.p,
            previousPage: 0,
            nextPage: 1
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a8df22a0a827fdd1a352.hot-update.js.map