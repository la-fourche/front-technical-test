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

var Index = function Index(props) {
  return __jsx("div", {
    "class": "IndexPage",
    className: "jsx-2519694897",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2519694897",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Products List"), __jsx("div", {
    className: "jsx-2519694897" + " " + "ProductsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.products.map(function (product) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(product.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2519694897" + " " + "ProductThumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2519694897" + " " + "ProductName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, product.title), __jsx("span", {
      className: "jsx-2519694897" + " " + "ProductPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, product.price, "\u20AC"), __jsx("img", {
      src: product.product_image,
      alt: "".concat(product.title, " image"),
      className: "jsx-2519694897" + " " + "ProductImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-2519694897" + " " + "Pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2519694897",
    __self: this
  }, "h1.jsx-2519694897{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-2519694897{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-2519694897{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-2519694897{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-2519694897{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-2519694897{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-2519694897{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}ul.jsx-2519694897{padding:0;}li.jsx-2519694897{list-style:none;margin:5px 0;}a.jsx-2519694897{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2519694897:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFGLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFSb0IsQUFzQnBCLENBNURnQixFQWdCUyxDQWtDVixFQXhERixBQVlDLEFBcUJTLFNBMUJULEVBTkEsQUF3RGQsQ0E1Q2UsQUFnQ0wsQ0FwRGEsT0E4QkEsQUF1QlQsQ0F0Q2QsQUEwQlksRUFoQ1osRUFZYSxNQXFCQSxDQVlDLEFBY0QsRUFuRUEsRUFxQkssS0FTTCxDQVlPLENBMEJwQixDQWRBLENBckRvQixPQXFCa0IsQUFTbEIsUUFZSCxHQXpDakIsT0E4QlcsS0FZQyxJQVhRLE1BVkQsQUFzQjBCLFlBWEEsS0FWN0MsdUJBc0JBLFlBWEEiLCJmaWxlIjoiL1VzZXJzL21laGRpL1RlY2huaWNhbFRlc3RzL0xhRm91cmNoZS9mcm9udC10ZWNobmljYWwtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNvbnN0IExJTUlUX1BFUl9QQUdFID0gMjA7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzPVwiSW5kZXhQYWdlXCI+XG4gICAgPGgxPlByb2R1Y3RzIExpc3Q8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNDb250YWluZXJcIj5cbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0VGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0TmFtZVwiPntwcm9kdWN0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByb2R1Y3RQcmljZVwiPntwcm9kdWN0LnByaWNlfeKCrDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvZHVjdEltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnByb2R1Y3RfaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX0gaW1hZ2VgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQYWdpbmF0aW9uXCI+PC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5JbmRleFBhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0c0NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTMwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0VGh1bWJuYWlsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdE5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFByaWNlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRvcDogMjU1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RJbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oeyBxdWVyeSB9KSB7XG4gIGNvbnN0IGFsbFByb2R1Y3RzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHNcIik7XG4gIGNvbnN0IGRhdGFBbGxQcm9kdWN0cyA9IGF3YWl0IGFsbFByb2R1Y3RzLmpzb24oKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzP19wYWdlPSR7cXVlcnkucH0mX2xpbWl0PSR7TElNSVRfUEVSX1BBR0V9YFxuICApO1xuICBjb25zdCBkYXRhUHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhgUHJvZHVjdCBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxQcm9kdWN0czogZGF0YUFsbFByb2R1Y3RzLmxlbmd0aCxcbiAgICBwcm9kdWN0czogZGF0YVByb2R1Y3QsXG4gICAgY3VycmVudFBhZ2U6IHF1ZXJ5LnBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
};

Index.getInitialProps = function _callee(_ref) {
  var query, allProducts, dataAllProducts, products, dataProduct;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/products"));

        case 3:
          allProducts = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(allProducts.json());

        case 6:
          dataAllProducts = _context.sent;
          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:8080/products?_page=".concat(query.p, "&_limit=").concat(LIMIT_PER_PAGE)));

        case 9:
          products = _context.sent;
          _context.next = 12;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(products.json());

        case 12:
          dataProduct = _context.sent;
          console.log("Product data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            totalProducts: dataAllProducts.length,
            products: dataProduct,
            currentPage: query.p
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c9facf190149f234a873.hot-update.js.map