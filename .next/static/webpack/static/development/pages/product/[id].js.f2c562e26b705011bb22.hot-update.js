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
  }), "instead of ", props.product.compare_at_price, "\u20AC"), __jsx("p", {
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
  }, props.product.sku)), props.product.inventory_quantity > 0 ? __jsx("div", {
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
  }, "h1.jsx-1647028213{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductImage.jsx-1647028213{margin:auto;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHeUMsQUFPcEIsWUFDRSxjQUNoQixLQVJ1QixxQkFDVixXQUNPLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWVoZGkvVGVjaG5pY2FsVGVzdHMvTGFGb3VyY2hlL2Zyb250LXRlY2huaWNhbC10ZXN0L3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBQcm9kdWN0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYWdlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0Q29udGFpbmVyXCI+XG4gICAgICA8aDE+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0LnRpdGxlfSwgYnkge3Byb3BzLnByb2R1Y3QudmVuZG9yfVxuICAgICAgPC9oMT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUHJvZHVjdEltYWdlXCIgc3JjPXtwcm9wcy5wcm9kdWN0LnByb2R1Y3RfaW1hZ2V9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY3JpcHRpb25cIj57cHJvcHMucHJvZHVjdC5ib2R5X2h0bWxfc2FmZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2luZ1wiPlxuICAgICAgICBSZWFsIHByaWNlOiB7cHJvcHMucHJvZHVjdC5wcmljZX3igqwgLSB3ZWlnaHQ6IHtwcm9wcy5wcm9kdWN0LndlaWdodH1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIGluc3RlYWQgb2Yge3Byb3BzLnByb2R1Y3QuY29tcGFyZV9hdF9wcmljZX3igqxcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RRdWFudGl0eVwiPlxuICAgICAgICBRdWljayEgVGhlcmUncyBvbmx5IHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eX0gbGVmdCFcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RTS1VcIj57cHJvcHMucHJvZHVjdC5za3V9PC9wPlxuICAgIDwvZGl2PlxuICAgIHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eSA+IDAgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZFRvQmFza2V0QnV0dG9uXCI+QWRkIHRvIGJhc2tldDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeUJ1dHRvblwiPk5vdGlmeSBtZSE8L2Rpdj5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuUHJvZHVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IHF1ZXJ5IH0pIHtcbiAgY29uc29sZS5sb2coXCJxdWVyeVwiLCBxdWVyeSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/aWQ9JHtxdWVyeS5pZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0OiBkYXRhWzBdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl19 */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.f2c562e26b705011bb22.hot-update.js.map