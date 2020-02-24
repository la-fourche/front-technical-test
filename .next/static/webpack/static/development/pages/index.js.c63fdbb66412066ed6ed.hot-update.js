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
  }, props.previousPage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/?p=[page]",
    as: "/?p=".concat(props.previousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1126389550" + " " + "PreviousPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.previousPage)), __jsx("span", {
    className: "jsx-1126389550" + " " + "CurrentPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " / ", props.currentPage, " / "), props.nextPage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/?p=[page]",
    as: "/?p=".concat(props.nextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1126389550" + " " + "NextPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " ", props.nextPage))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1126389550",
    __self: this
  }, "h1.jsx-1126389550{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-1126389550{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-1126389550{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-1126389550{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-1126389550{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-1126389550{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-1126389550{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}.Pagination.jsx-1126389550{position:relative;width:100%;text-align:center;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFNLFlBUEEsQ0F0Q0osRUFnQlMsR0F0QlosQUFZQyxBQXFCUyxBQW1CVixTQTdDQyxFQU5BLEFBb0RNLENBeENMLEFBZ0NMLENBcERhLE9BOEJBLEFBdUJULENBdENkLEFBMEJZLEVBaENaLEVBWWEsSUF3Q0ksRUFuQkosQ0FZQyxFQXJERCxFQXFCSyxLQVNMLENBWU8sRUFZcEIsQUFPQSxDQTVEb0IsT0FxQmtCLEFBU2xCLFFBWUgsR0F6Q2pCLE9BOEJXLEtBWUMsSUFYUSxNQVZELEFBc0IwQixZQVhBLEtBVjdDLHVCQXNCQSxZQVhBIiwiZmlsZSI6Ii9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBMSU1JVF9QRVJfUEFHRSA9IDIwO1xubGV0IEFMTF9QUk9EVUNUU19MRU5HVEg7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkluZGV4UGFnZVwiPlxuICAgIDxoMT5Qcm9kdWN0cyBMaXN0PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzQ29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW2lkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFRodW1ibmFpbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJvZHVjdE5hbWVcIj57cHJvZHVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2VcIj57cHJvZHVjdC5wcmljZX3igqw8L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2Ake3Byb2R1Y3QudGl0bGV9IGltYWdlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvblwiPlxuICAgICAge3Byb3BzLnByZXZpb3VzUGFnZSAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvP3A9W3BhZ2VdXCIgYXM9e2AvP3A9JHtwcm9wcy5wcmV2aW91c1BhZ2V9YH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJldmlvdXNQYWdlXCI+e3Byb3BzLnByZXZpb3VzUGFnZX08L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJDdXJyZW50UGFnZVwiPiAvIHtwcm9wcy5jdXJyZW50UGFnZX0gLyA8L3NwYW4+XG4gICAgICB7cHJvcHMubmV4dFBhZ2UgJiYgKFxuICAgICAgICA8TGluayBocmVmPVwiLz9wPVtwYWdlXVwiIGFzPXtgLz9wPSR7cHJvcHMubmV4dFBhZ2V9YH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTmV4dFBhZ2VcIj4ge3Byb3BzLm5leHRQYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLkluZGV4UGFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RzQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RUaHVtYm5haWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0TmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0UHJpY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdG9wOiAyNTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgIHotaW5kZXg6IC0xMDtcbiAgICAgIH1cblxuICAgICAgLlBhZ2luYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oeyBxdWVyeSB9KSB7XG4gIGlmICghQUxMX1BST0RVQ1RTX0xFTkdUSCkge1xuICAgIGNvbnN0IGFsbFByb2R1Y3RzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHNcIik7XG4gICAgY29uc3QgZGF0YUFsbFByb2R1Y3RzID0gYXdhaXQgYWxsUHJvZHVjdHMuanNvbigpO1xuICAgIEFMTF9QUk9EVUNUU19MRU5HVEggPSBkYXRhQWxsUHJvZHVjdHMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzP19wYWdlPSR7cXVlcnkucH0mX2xpbWl0PSR7TElNSVRfUEVSX1BBR0V9YFxuICApO1xuICBjb25zdCBkYXRhUHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RzLmpzb24oKTtcblxuICBjb25zdCBjdXJyZW50UGFnZSA9IHF1ZXJ5LnAgPyBwYXJzZUludChxdWVyeS5wKSA6IDE7XG5cbiAgY29uc3QgcHJldmlvdXNQYWdlID0gY3VycmVudFBhZ2UgLSAxIDw9IDAgPyAxIDogY3VycmVudFBhZ2UgLSAxO1xuICBjb25zdCBuZXh0UGFnZSA9XG4gICAgKGN1cnJlbnRQYWdlICsgMSkgKiBMSU1JVF9QRVJfUEFHRSA+PSBBTExfUFJPRFVDVFNfTEVOR1RIXG4gICAgICA/IGN1cnJlbnRQYWdlXG4gICAgICA6IGN1cnJlbnRQYWdlICsgMTtcblxuICByZXR1cm4ge1xuICAgIHRvdGFsUHJvZHVjdHM6IEFMTF9QUk9EVUNUU19MRU5HVEgsXG4gICAgcHJvZHVjdHM6IGRhdGFQcm9kdWN0LFxuICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICBwcmV2aW91c1BhZ2U6IGN1cnJlbnRQYWdlID4gcHJldmlvdXNQYWdlID8gcHJldmlvdXNQYWdlIDogbnVsbCxcbiAgICBuZXh0UGFnZTogY3VycmVudFBhZ2UgPCBuZXh0UGFnZSA/IG5leHRQYWdlIDogbnVsbFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
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
          currentPage = query.p ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(query.p) : 1;
          previousPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
          nextPage = (currentPage + 1) * LIMIT_PER_PAGE >= ALL_PRODUCTS_LENGTH ? currentPage : currentPage + 1;
          return _context.abrupt("return", {
            totalProducts: ALL_PRODUCTS_LENGTH,
            products: dataProduct,
            currentPage: currentPage,
            previousPage: currentPage > previousPage ? previousPage : null,
            nextPage: currentPage < nextPage ? nextPage : null
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
//# sourceMappingURL=index.js.c63fdbb66412066ed6ed.hot-update.js.map