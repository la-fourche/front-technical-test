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
    className: "jsx-2185782104" + " " + "ProductPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2185782104" + " " + "BackToHome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Home"), __jsx("div", {
    className: "jsx-2185782104" + " " + "ProductContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2185782104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-2185782104" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-2185782104" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-2185782104" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Real price: ", __jsx("b", {
    className: "jsx-2185782104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.product.price, "\u20AC"), " - weight:", " ", props.product.weight, __jsx("br", {
    className: "jsx-2185782104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-2185782104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-2185782104" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-2185782104" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "SKU: ", __jsx("em", {
    className: "jsx-2185782104",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.product.sku))), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-2185782104" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-2185782104" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2185782104",
    __self: this
  }, "h1.jsx-2185782104{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductContainer.jsx-2185782104{width:900px;margin:auto;}.ProductImage.jsx-2185782104{margin:auto;display:block;}.AddToBasketButton.jsx-2185782104,.NotifyButton.jsx-2185782104{width:150px;height:50px;line-height:50px;text-align:center;background-color:lightgreen;border-radius:20px;margin:30px auto;}.ProductPrice.jsx-2185782104{width:250px;}.ProductQuantity.jsx-2185782104{width:250px;}.ProductDescription.jsx-2185782104{width:550px;float:right;padding:0 10px;}.AddToBasketButton.jsx-2185782104:hover,.NotifyButton.jsx-2185782104:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHeUMsQUFPcEIsQUFLQSxBQU1BLEFBVUEsQUFJQSxBQUlBLEFBT0csWUFuQ0gsQUFLRSxBQU1GLEFBVWQsQUFJQSxBQUljLEdBT2QsU0FuQ0EsQUFXbUIsQUFrQkYsRUF4QmpCLEtBYnVCLFFBc0N2QixFQWxCb0IsV0FuQlAsT0FvQmlCLElBbkJWLGtCQUNwQixNQW1CcUIsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFByb2R1Y3QgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tUb0hvbWVcIj5Ib21lPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0Q29udGFpbmVyXCI+XG4gICAgICA8aDE+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0LnRpdGxlfSwgYnkge3Byb3BzLnByb2R1Y3QudmVuZG9yfVxuICAgICAgPC9oMT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiUHJvZHVjdEltYWdlXCIgc3JjPXtwcm9wcy5wcm9kdWN0LnByb2R1Y3RfaW1hZ2V9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY3JpcHRpb25cIj57cHJvcHMucHJvZHVjdC5ib2R5X2h0bWxfc2FmZX08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0UHJpY2luZ1wiPlxuICAgICAgICBSZWFsIHByaWNlOiA8Yj57cHJvcHMucHJvZHVjdC5wcmljZX3igqw8L2I+IC0gd2VpZ2h0OntcIiBcIn1cbiAgICAgICAge3Byb3BzLnByb2R1Y3Qud2VpZ2h0fVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHN0cmlrZT5pbnN0ZWFkIG9mIHtwcm9wcy5wcm9kdWN0LmNvbXBhcmVfYXRfcHJpY2V94oKsPC9zdHJpa2U+XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0UXVhbnRpdHlcIj5cbiAgICAgICAgUXVpY2shIFRoZXJlJ3Mgb25seSB7cHJvcHMucHJvZHVjdC5pbnZlbnRvcnlfcXVhbnRpdHl9IGxlZnQhXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJQcm9kdWN0U0tVXCI+XG4gICAgICAgIFNLVTogPGVtPntwcm9wcy5wcm9kdWN0LnNrdX08L2VtPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eSA+IDAgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZFRvQmFza2V0QnV0dG9uXCI+QWRkIHRvIGJhc2tldDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdGlmeUJ1dHRvblwiPk5vdGlmeSBtZSE8L2Rpdj5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLkFkZFRvQmFza2V0QnV0dG9uLFxuICAgICAgLk5vdGlmeUJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RQcmljZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RRdWFudGl0eSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3REZXNjcmlwdGlvbiB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5BZGRUb0Jhc2tldEJ1dHRvbjpob3ZlcixcbiAgICAgIC5Ob3RpZnlCdXR0b246aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblByb2R1Y3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oeyBxdWVyeSB9KSB7XG4gIGNvbnNvbGUubG9nKFwicXVlcnlcIiwgcXVlcnkpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzP2lkPSR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdDogZGF0YVswXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.4926629e423b24c81949.hot-update.js.map