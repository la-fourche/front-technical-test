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
    className: "jsx-655873735" + " " + "ProductPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-655873735" + " " + "BackToHome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Home"), __jsx("div", {
    className: "jsx-655873735" + " " + "ProductContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-655873735" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Real price: ", __jsx("b", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.product.price, "\u20AC"), " - weight:", " ", props.product.weight, __jsx("br", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "SKU: ", __jsx("em", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.product.sku))), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-655873735" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-655873735" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "655873735",
    __self: this
  }, "h1.jsx-655873735{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.BackToHome.jsx-655873735{width:50px;height:25px;line-height:25px;text-align:center;background-color:lightgreen;border-radius:12px;}.ProductContainer.jsx-655873735{width:900px;margin:auto;}.ProductImage.jsx-655873735{margin:auto;display:block;}.AddToBasketButton.jsx-655873735,.NotifyButton.jsx-655873735{width:150px;height:50px;line-height:50px;text-align:center;background-color:lightgreen;border-radius:20px;margin:30px auto;}.ProductPrice.jsx-655873735{width:250px;}.ProductQuantity.jsx-655873735{width:250px;}.ProductDescription.jsx-655873735{width:550px;float:right;padding:0 10px;}.AddToBasketButton.jsx-655873735:hover,.NotifyButton.jsx-655873735:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHeUMsQUFPckIsQUFTQyxBQUtBLEFBTUEsQUFVQSxBQUlBLEFBSUEsQUFPRyxXQTVDSCxDQVNBLEFBS0UsQUFNRixBQVVkLEFBSUEsQUFJYyxHQU9kLFFBNUNtQixDQVNuQixBQVdtQixBQWtCRixFQXhCakIsS0F0QnVCLFFBK0N2QixDQXRDb0IsQ0FvQkEsV0E1QlAsTUFTaUIsQ0FvQkEsSUE1QlYsa0JBQ3BCLEtBUXFCLENBb0JBLGtCQW5CckIsQ0FvQm1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbWVoZGkvVGVjaG5pY2FsVGVzdHMvTGFGb3VyY2hlL2Zyb250LXRlY2huaWNhbC10ZXN0L3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBQcm9kdWN0ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RQYWdlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrVG9Ib21lXCI+SG9tZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdENvbnRhaW5lclwiPlxuICAgICAgPGgxPlxuICAgICAgICB7cHJvcHMucHJvZHVjdC50aXRsZX0sIGJ5IHtwcm9wcy5wcm9kdWN0LnZlbmRvcn1cbiAgICAgIDwvaDE+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIlByb2R1Y3RJbWFnZVwiIHNyYz17cHJvcHMucHJvZHVjdC5wcm9kdWN0X2ltYWdlfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdERlc2NyaXB0aW9uXCI+e3Byb3BzLnByb2R1Y3QuYm9keV9odG1sX3NhZmV9PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFByaWNpbmdcIj5cbiAgICAgICAgUmVhbCBwcmljZTogPGI+e3Byb3BzLnByb2R1Y3QucHJpY2V94oKsPC9iPiAtIHdlaWdodDp7XCIgXCJ9XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0LndlaWdodH1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzdHJpa2U+aW5zdGVhZCBvZiB7cHJvcHMucHJvZHVjdC5jb21wYXJlX2F0X3ByaWNlfeKCrDwvc3RyaWtlPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFF1YW50aXR5XCI+XG4gICAgICAgIFF1aWNrISBUaGVyZSdzIG9ubHkge3Byb3BzLnByb2R1Y3QuaW52ZW50b3J5X3F1YW50aXR5fSBsZWZ0IVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiUHJvZHVjdFNLVVwiPlxuICAgICAgICBTS1U6IDxlbT57cHJvcHMucHJvZHVjdC5za3V9PC9lbT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICB7cHJvcHMucHJvZHVjdC5pbnZlbnRvcnlfcXVhbnRpdHkgPiAwID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBZGRUb0Jhc2tldEJ1dHRvblwiPkFkZCB0byBiYXNrZXQ8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOb3RpZnlCdXR0b25cIj5Ob3RpZnkgbWUhPC9kaXY+XG4gICAgKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLkJhY2tUb0hvbWUge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdENvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdEltYWdlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLkFkZFRvQmFza2V0QnV0dG9uLFxuICAgICAgLk5vdGlmeUJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RQcmljZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RRdWFudGl0eSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3REZXNjcmlwdGlvbiB7XG4gICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5BZGRUb0Jhc2tldEJ1dHRvbjpob3ZlcixcbiAgICAgIC5Ob3RpZnlCdXR0b246aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblByb2R1Y3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oeyBxdWVyeSB9KSB7XG4gIGNvbnNvbGUubG9nKFwicXVlcnlcIiwgcXVlcnkpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzP2lkPSR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdDogZGF0YVswXVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.7ba5fd04a116caa24a3a.hot-update.js.map