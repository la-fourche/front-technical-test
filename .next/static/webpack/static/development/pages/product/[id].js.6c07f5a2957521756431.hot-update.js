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
    className: "jsx-2592778600" + " " + "ProductPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2592778600" + " " + "ProductContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2592778600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-2592778600" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-2592778600" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-2592778600" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Real price: ", __jsx("em", {
    className: "jsx-2592778600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.product.price, "\u20AC"), " - weight:", " ", props.product.weight, __jsx("br", {
    className: "jsx-2592778600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-2592778600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-2592778600" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-2592778600" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "SKU: ", props.product.sku)), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-2592778600" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-2592778600" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2592778600",
    __self: this
  }, "h1.jsx-2592778600{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductImage.jsx-2592778600{margin:auto;display:block;}.AddToBasketButton.jsx-2592778600,.NotifyButton.jsx-2592778600{width:150px;height:50px;line-height:50px;text-align:center;background-color:lightgreen;border-radius:20px;}.ProductPrice.jsx-2592778600{width:250px;}.ProductQuantity.jsx-2592778600{width:250px;}.ProductDescription.jsx-2592778600{width:550px;float:right;padding:0 10px;}.AddToBasketButton.jsx-2592778600:hover,.NotifyButton.jsx-2592778600:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCZ0IsQUFHeUMsQUFPcEIsQUFNQSxBQVNBLEFBSUEsQUFJQSxBQU9HLFlBN0JELEFBTUYsQUFTZCxBQUlBLEFBSWMsR0FPZCxTQXZCbUIsQUFpQkYsRUF2QmpCLEtBUnVCLFFBZ0N2QixFQWpCb0IsV0FkUCxPQWVpQixJQWRWLGtCQUNwQixNQWNxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL21laGRpL1RlY2huaWNhbFRlc3RzL0xhRm91cmNoZS9mcm9udC10ZWNobmljYWwtdGVzdC9wYWdlcy9wcm9kdWN0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgUHJvZHVjdCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0UGFnZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdENvbnRhaW5lclwiPlxuICAgICAgPGgxPlxuICAgICAgICB7cHJvcHMucHJvZHVjdC50aXRsZX0sIGJ5IHtwcm9wcy5wcm9kdWN0LnZlbmRvcn1cbiAgICAgIDwvaDE+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiIHNyYz17cHJvcHMucHJvZHVjdC5wcm9kdWN0X2ltYWdlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdERlc2NyaXB0aW9uXCI+e3Byb3BzLnByb2R1Y3QuYm9keV9odG1sX3NhZmV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFByaWNpbmdcIj5cbiAgICAgICAgUmVhbCBwcmljZTogPGVtPntwcm9wcy5wcm9kdWN0LnByaWNlfeKCrDwvZW0+IC0gd2VpZ2h0OntcIiBcIn1cbiAgICAgICAge3Byb3BzLnByb2R1Y3Qud2VpZ2h0fVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHN0cmlrZT5pbnN0ZWFkIG9mIHtwcm9wcy5wcm9kdWN0LmNvbXBhcmVfYXRfcHJpY2V94oKsPC9zdHJpa2U+XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0UXVhbnRpdHlcIj5cbiAgICAgICAgUXVpY2shIFRoZXJlJ3Mgb25seSB7cHJvcHMucHJvZHVjdC5pbnZlbnRvcnlfcXVhbnRpdHl9IGxlZnQhXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0U0tVXCI+U0tVOiB7cHJvcHMucHJvZHVjdC5za3V9PC9wPlxuICAgIDwvZGl2PlxuICAgIHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eSA+IDAgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZFRvQmFza2V0QnV0dG9uXCI+QWRkIHRvIGJhc2tldDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeUJ1dHRvblwiPk5vdGlmeSBtZSE8L2Rpdj5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLkFkZFRvQmFza2V0QnV0dG9uLFxuICAgICAgLk5vdGlmeUJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFByaWNlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFF1YW50aXR5IHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdERlc2NyaXB0aW9uIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIH1cblxuICAgICAgLkFkZFRvQmFza2V0QnV0dG9uOmhvdmVyLFxuICAgICAgLk5vdGlmeUJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuUHJvZHVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IHF1ZXJ5IH0pIHtcbiAgY29uc29sZS5sb2coXCJxdWVyeVwiLCBxdWVyeSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/aWQ9JHtxdWVyeS5pZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0OiBkYXRhWzBdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl19 */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.6c07f5a2957521756431.hot-update.js.map