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
    href: "/index?p=[p]",
    as: "/index?p=".concat(props.previousPage),
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
    href: "/index?p=[p]",
    as: "/index?p=".concat(props.nextPage),
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
  }, "h1.jsx-1126389550{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.IndexPage.jsx-1126389550{position:relative;width:100%;height:auto;}.ProductsContainer.jsx-1126389550{width:1200px;height:1300px;margin:auto;}.ProductThumbnail.jsx-1126389550{position:relative;width:200px;height:300px;float:left;overflow:hidden;background-color:rgba(0,0,0,0.5);margin:10px 20px;}.ProductName.jsx-1126389550{font-size:20px;font-family:sans-serif;display:inline-block;width:100%;text-align:center;top:20px;position:relative;background-color:rgba(255,255,255,0.75);}.ProductPrice.jsx-1126389550{position:absolute;display:inline-block;top:255px;width:100%;text-align:center;font-size:25px;right:0px;background-color:rgba(255,255,255,0.75);}.ProductImage.jsx-1126389550{height:100%;position:absolute;top:0px;right:-30px;z-index:-10;}.Pagination.jsx-1126389550{position:relative;width:100%;text-align:center;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUd5QyxBQU9kLEFBTUwsQUFNSyxBQVVILEFBV0csQUFXTixBQVFNLFlBUEEsQ0F0Q0osRUFnQlMsR0F0QlosQUFZQyxBQXFCUyxBQW1CVixTQTdDQyxFQU5BLEFBb0RNLENBeENMLEFBZ0NMLENBcERhLE9BOEJBLEFBdUJULENBdENkLEFBMEJZLEVBaENaLEVBWWEsSUF3Q0ksRUFuQkosQ0FZQyxFQXJERCxFQXFCSyxLQVNMLENBWU8sRUFZcEIsQUFPQSxDQTVEb0IsT0FxQmtCLEFBU2xCLFFBWUgsR0F6Q2pCLE9BOEJXLEtBWUMsSUFYUSxNQVZELEFBc0IwQixZQVhBLEtBVjdDLHVCQXNCQSxZQVhBIiwiZmlsZSI6Ii9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBMSU1JVF9QRVJfUEFHRSA9IDIwO1xubGV0IEFMTF9QUk9EVUNUU19MRU5HVEg7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkluZGV4UGFnZVwiPlxuICAgIDxoMT5Qcm9kdWN0cyBMaXN0PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzQ29udGFpbmVyXCI+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvW2lkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFRodW1ibmFpbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJvZHVjdE5hbWVcIj57cHJvZHVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2VcIj57cHJvZHVjdC5wcmljZX3igqw8L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0X2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2Ake3Byb2R1Y3QudGl0bGV9IGltYWdlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvblwiPlxuICAgICAge3Byb3BzLnByZXZpb3VzUGFnZSAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXg/cD1bcF1cIiBhcz17YC9pbmRleD9wPSR7cHJvcHMucHJldmlvdXNQYWdlfWB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByZXZpb3VzUGFnZVwiPntwcm9wcy5wcmV2aW91c1BhZ2V9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQ3VycmVudFBhZ2VcIj4gLyB7cHJvcHMuY3VycmVudFBhZ2V9IC8gPC9zcGFuPlxuICAgICAge3Byb3BzLm5leHRQYWdlICYmIChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleD9wPVtwXVwiIGFzPXtgL2luZGV4P3A9JHtwcm9wcy5uZXh0UGFnZX1gfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJOZXh0UGFnZVwiPiB7cHJvcHMubmV4dFBhZ2V9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuSW5kZXhQYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdHNDb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFRodW1ibmFpbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3ROYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RQcmljZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0b3A6IDI1NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0SW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgICAgei1pbmRleDogLTEwO1xuICAgICAgfVxuXG4gICAgICAuUGFnaW5hdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IHF1ZXJ5IH0pIHtcbiAgaWYgKCFBTExfUFJPRFVDVFNfTEVOR1RIKSB7XG4gICAgY29uc3QgYWxsUHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0c1wiKTtcbiAgICBjb25zdCBkYXRhQWxsUHJvZHVjdHMgPSBhd2FpdCBhbGxQcm9kdWN0cy5qc29uKCk7XG4gICAgQUxMX1BST0RVQ1RTX0xFTkdUSCA9IGRhdGFBbGxQcm9kdWN0cy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/X3BhZ2U9JHtxdWVyeS5wfSZfbGltaXQ9JHtMSU1JVF9QRVJfUEFHRX1gXG4gICk7XG4gIGNvbnN0IGRhdGFQcm9kdWN0ID0gYXdhaXQgcHJvZHVjdHMuanNvbigpO1xuXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gcXVlcnkucCA/IHBhcnNlSW50KHF1ZXJ5LnApIDogMTtcblxuICBjb25zdCBwcmV2aW91c1BhZ2UgPSBjdXJyZW50UGFnZSAtIDEgPD0gMCA/IDEgOiBjdXJyZW50UGFnZSAtIDE7XG4gIGNvbnN0IG5leHRQYWdlID1cbiAgICAoY3VycmVudFBhZ2UgKyAxKSAqIExJTUlUX1BFUl9QQUdFID49IEFMTF9QUk9EVUNUU19MRU5HVEhcbiAgICAgID8gY3VycmVudFBhZ2VcbiAgICAgIDogY3VycmVudFBhZ2UgKyAxO1xuXG4gIHJldHVybiB7XG4gICAgdG90YWxQcm9kdWN0czogQUxMX1BST0RVQ1RTX0xFTkdUSCxcbiAgICBwcm9kdWN0czogZGF0YVByb2R1Y3QsXG4gICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgIHByZXZpb3VzUGFnZTogY3VycmVudFBhZ2UgPiBwcmV2aW91c1BhZ2UgPyBwcmV2aW91c1BhZ2UgOiBudWxsLFxuICAgIG5leHRQYWdlOiBjdXJyZW50UGFnZSA8IG5leHRQYWdlID8gbmV4dFBhZ2UgOiBudWxsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/index.js */"));
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
//# sourceMappingURL=index.js.4726562445d2c1c2d944.hot-update.js.map