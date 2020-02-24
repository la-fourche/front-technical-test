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
    className: "jsx-1126389550" + " " + "IndexPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1126389550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Products List"), __jsx("div", {
    className: "jsx-1126389550" + " " + "ProductsContainer",
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
      className: "jsx-1126389550" + " " + "ProductThumbnail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-1126389550" + " " + "ProductName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, product.title), __jsx("span", {
      className: "jsx-1126389550" + " " + "ProductPrice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, product.price, "\u20AC"), __jsx("img", {
      src: product.product_image,
      alt: "".concat(product.title, " image"),
      className: "jsx-1126389550" + " " + "ProductImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })));
  })), __jsx("div", {
    className: "jsx-1126389550" + " " + "Pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/index",
    query: "{p: props.previousPage}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1126389550" + " " + "PreviousPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.previousPage)), __jsx("span", {
    className: "jsx-1126389550" + " " + "CurrentPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, " / ", props.currentPage, " / "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/index",
    query: "{p: props.nextPage}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1126389550" + " " + "NextPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " ", props.nextPage))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1126389550",
    __self: this
  }, "h1.jsx-1126389550{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-1126389550{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-1126389550{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-1126389550{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-1126389550{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-1126389550{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-1126389550{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}.Pagination.jsx-1126389550{position:relative;width:100%;text-align:center;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFNLFlBUEEsQ0F0Q0osRUFnQlMsR0F0QlosQUFZQyxBQXFCUyxBQW1CVixTQTdDQyxFQU5BLEFBb0RNLENBeENMLEFBZ0NMLENBcERhLE9BOEJBLEFBdUJULENBdENkLEFBMEJZLEVBaENaLEVBWWEsSUF3Q0ksRUFuQkosQ0FZQyxFQXJERCxFQXFCSyxLQVNMLENBWU8sRUFZcEIsQUFPQSxDQTVEb0IsT0FxQmtCLEFBU2xCLFFBWUgsR0F6Q2pCLE9BOEJXLEtBWUMsSUFYUSxNQVZELEFBc0IwQixZQVhBLEtBVjdDLHVCQXNCQSxZQVhBIiwiZmlsZSI6Ii9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBMSU1JVF9QRVJfUEFHRSA9IDIwO1xubGV0IEFMTF9QUk9EVUNUU19MRU5HVEg7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkluZGV4UGFnZVwiPlxuICAgIDxoMT5Qcm9kdWN0cyBMaXN0PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzQ29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW2lkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFRodW1ibmFpbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJvZHVjdE5hbWVcIj57cHJvZHVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2VcIj57cHJvZHVjdC5wcmljZX3igqw8L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2Ake3Byb2R1Y3QudGl0bGV9IGltYWdlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiIHF1ZXJ5PVwie3A6IHByb3BzLnByZXZpb3VzUGFnZX1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJldmlvdXNQYWdlXCI+e3Byb3BzLnByZXZpb3VzUGFnZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJDdXJyZW50UGFnZVwiPiAvIHtwcm9wcy5jdXJyZW50UGFnZX0gLyA8L3NwYW4+XG4gICAgICA8TGluayBocmVmPVwiL2luZGV4XCIgcXVlcnk9XCJ7cDogcHJvcHMubmV4dFBhZ2V9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk5leHRQYWdlXCI+IHtwcm9wcy5uZXh0UGFnZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5JbmRleFBhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0c0NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTMwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0VGh1bWJuYWlsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdE5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFByaWNlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRvcDogMjU1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RJbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgICB9XG5cbiAgICAgIC5QYWdpbmF0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHsgcXVlcnkgfSkge1xuICBpZiAoIUFMTF9QUk9EVUNUU19MRU5HVEgpIHtcbiAgICBjb25zdCBhbGxQcm9kdWN0cyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzXCIpO1xuICAgIGNvbnN0IGRhdGFBbGxQcm9kdWN0cyA9IGF3YWl0IGFsbFByb2R1Y3RzLmpzb24oKTtcbiAgICBBTExfUFJPRFVDVFNfTEVOR1RIID0gZGF0YUFsbFByb2R1Y3RzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0cz9fcGFnZT0ke3F1ZXJ5LnB9Jl9saW1pdD0ke0xJTUlUX1BFUl9QQUdFfWBcbiAgKTtcbiAgY29uc3QgZGF0YVByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0cy5qc29uKCk7XG5cbiAgY29uc3QgY3VycmVudFBhZ2UgPSBwYXJzZUludChxdWVyeS5wKTtcblxuICBjb25zdCBwcmV2aW91c1BhZ2UgPSBjdXJyZW50UGFnZSAtIDEgPD0gMCA/IDAgOiBjdXJyZW50UGFnZSAtIDE7XG4gIGNvbnN0IG5leHRQYWdlID1cbiAgICAoY3VycmVudFBhZ2UgKyAxKSAqIExJTUlUX1BFUl9QQUdFID49IEFMTF9QUk9EVUNUU19MRU5HVEhcbiAgICAgID8gY3VycmVudFBhZ2VcbiAgICAgIDogY3VycmVudFBhZ2UgKyAxO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxQcm9kdWN0czogQUxMX1BST0RVQ1RTX0xFTkdUSCxcbiAgICBwcm9kdWN0czogZGF0YVByb2R1Y3QsXG4gICAgY3VycmVudFBhZ2U6IHF1ZXJ5LnAsXG4gICAgcHJldmlvdXNQYWdlOiBwcmV2aW91c1BhZ2UsXG4gICAgbmV4dFBhZ2U6IG5leHRQYWdlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
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
//# sourceMappingURL=index.js.9fc63408e4b05e70ddc6.hot-update.js.map