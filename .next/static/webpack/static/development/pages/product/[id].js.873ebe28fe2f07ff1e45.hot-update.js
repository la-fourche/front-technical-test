webpackHotUpdate("static/development/pages/product/[id].js",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Product = function Product(props) {
  return __jsx("div", {
    className: "jsx-1647028213" + " " + "ProductPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1647028213" + " " + "ProductContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1647028213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-1647028213" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1647028213" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-1647028213" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Real price: ", props.product.price, "\u20AC - weight: ", props.product.weight, __jsx("br", {
    className: "jsx-1647028213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-1647028213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-1647028213" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-1647028213" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "SKU: ", props.product.sku)), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-1647028213" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-1647028213" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1647028213",
    __self: this
  }, "h1.jsx-1647028213{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductImage.jsx-1647028213{margin:auto;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHeUMsQUFPcEIsWUFDRSxjQUNoQixLQVJ1QixxQkFDVixXQUNPLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWVoZGkvVGVjaG5pY2FsVGVzdHMvTGFGb3VyY2hlL2Zyb250LXRlY2huaWNhbC10ZXN0L3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBQcm9kdWN0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYWdlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0Q29udGFpbmVyXCI+XG4gICAgICA8aDE+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0LnRpdGxlfSwgYnkge3Byb3BzLnByb2R1Y3QudmVuZG9yfVxuICAgICAgPC9oMT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUHJvZHVjdEltYWdlXCIgc3JjPXtwcm9wcy5wcm9kdWN0LnByb2R1Y3RfaW1hZ2V9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY3JpcHRpb25cIj57cHJvcHMucHJvZHVjdC5ib2R5X2h0bWxfc2FmZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2luZ1wiPlxuICAgICAgICBSZWFsIHByaWNlOiB7cHJvcHMucHJvZHVjdC5wcmljZX3igqwgLSB3ZWlnaHQ6IHtwcm9wcy5wcm9kdWN0LndlaWdodH1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzdHJpa2U+aW5zdGVhZCBvZiB7cHJvcHMucHJvZHVjdC5jb21wYXJlX2F0X3ByaWNlfeKCrDwvc3RyaWtlPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFF1YW50aXR5XCI+XG4gICAgICAgIFF1aWNrISBUaGVyZSdzIG9ubHkge3Byb3BzLnByb2R1Y3QuaW52ZW50b3J5X3F1YW50aXR5fSBsZWZ0IVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFNLVVwiPlNLVToge3Byb3BzLnByb2R1Y3Quc2t1fTwvcD5cbiAgICA8L2Rpdj5cbiAgICB7cHJvcHMucHJvZHVjdC5pbnZlbnRvcnlfcXVhbnRpdHkgPiAwID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBZGRUb0Jhc2tldEJ1dHRvblwiPkFkZCB0byBiYXNrZXQ8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb3RpZnlCdXR0b25cIj5Ob3RpZnkgbWUhPC9kaXY+XG4gICAgKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RJbWFnZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblByb2R1Y3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oeyBxdWVyeSB9KSB7XG4gIGNvbnNvbGUubG9nKFwicXVlcnlcIiwgcXVlcnkpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzP2lkPSR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdDogZGF0YVswXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
};

Product.getInitialProps = function _callee(_ref) {
  var query, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query;
          console.log("query", query);
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:8080/products?id=".concat(query.id)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            product: data[0]
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=[id].js.873ebe28fe2f07ff1e45.hot-update.js.map