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
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
    },
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
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-655873735" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Real price: ", __jsx("b", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.product.price, "\u20AC"), " - weight:", " ", props.product.weight, __jsx("br", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-655873735" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "SKU: ", __jsx("em", {
    className: "jsx-655873735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.product.sku))), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-655873735" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-655873735" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "655873735",
    __self: this
  }, "h1.jsx-655873735{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.BackToHome.jsx-655873735{width:50px;height:25px;line-height:25px;text-align:center;background-color:lightgreen;border-radius:12px;}.ProductContainer.jsx-655873735{width:900px;margin:auto;}.ProductImage.jsx-655873735{margin:auto;display:block;}.AddToBasketButton.jsx-655873735,.NotifyButton.jsx-655873735{width:150px;height:50px;line-height:50px;text-align:center;background-color:lightgreen;border-radius:20px;margin:30px auto;}.ProductPrice.jsx-655873735{width:250px;}.ProductQuantity.jsx-655873735{width:250px;}.ProductDescription.jsx-655873735{width:550px;float:right;padding:0 10px;}.AddToBasketButton.jsx-655873735:hover,.NotifyButton.jsx-655873735:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHeUMsQUFPckIsQUFTQyxBQUtBLEFBTUEsQUFVQSxBQUlBLEFBSUEsQUFPRyxXQTVDSCxDQVNBLEFBS0UsQUFNRixBQVVkLEFBSUEsQUFJYyxHQU9kLFFBNUNtQixDQVNuQixBQVdtQixBQWtCRixFQXhCakIsS0F0QnVCLFFBK0N2QixDQXRDb0IsQ0FvQkEsV0E1QlAsTUFTaUIsQ0FvQkEsSUE1QlYsa0JBQ3BCLEtBUXFCLENBb0JBLGtCQW5CckIsQ0FvQm1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbWVoZGkvVGVjaG5pY2FsVGVzdHMvTGFGb3VyY2hlL2Zyb250LXRlY2huaWNhbC10ZXN0L3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFByb2R1Y3QgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tUb0hvbWVcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfT5cbiAgICAgIEhvbWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RDb250YWluZXJcIj5cbiAgICAgIDxoMT5cbiAgICAgICAge3Byb3BzLnByb2R1Y3QudGl0bGV9LCBieSB7cHJvcHMucHJvZHVjdC52ZW5kb3J9XG4gICAgICA8L2gxPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJQcm9kdWN0SW1hZ2VcIiBzcmM9e3Byb3BzLnByb2R1Y3QucHJvZHVjdF9pbWFnZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3REZXNjcmlwdGlvblwiPntwcm9wcy5wcm9kdWN0LmJvZHlfaHRtbF9zYWZlfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RQcmljaW5nXCI+XG4gICAgICAgIFJlYWwgcHJpY2U6IDxiPntwcm9wcy5wcm9kdWN0LnByaWNlfeKCrDwvYj4gLSB3ZWlnaHQ6e1wiIFwifVxuICAgICAgICB7cHJvcHMucHJvZHVjdC53ZWlnaHR9XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3RyaWtlPmluc3RlYWQgb2Yge3Byb3BzLnByb2R1Y3QuY29tcGFyZV9hdF9wcmljZX3igqw8L3N0cmlrZT5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RRdWFudGl0eVwiPlxuICAgICAgICBRdWljayEgVGhlcmUncyBvbmx5IHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eX0gbGVmdCFcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RTS1VcIj5cbiAgICAgICAgU0tVOiA8ZW0+e3Byb3BzLnByb2R1Y3Quc2t1fTwvZW0+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAge3Byb3BzLnByb2R1Y3QuaW52ZW50b3J5X3F1YW50aXR5ID4gMCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQWRkVG9CYXNrZXRCdXR0b25cIj5BZGQgdG8gYmFza2V0PC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTm90aWZ5QnV0dG9uXCI+Tm90aWZ5IG1lITwvZGl2PlxuICAgICl9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5CYWNrVG9Ib21lIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RDb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgLlByb2R1Y3RJbWFnZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5BZGRUb0Jhc2tldEJ1dHRvbixcbiAgICAgIC5Ob3RpZnlCdXR0b24ge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0UHJpY2Uge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0UXVhbnRpdHkge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0RGVzY3JpcHRpb24ge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuQWRkVG9CYXNrZXRCdXR0b246aG92ZXIsXG4gICAgICAuTm90aWZ5QnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5Qcm9kdWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHsgcXVlcnkgfSkge1xuICBjb25zb2xlLmxvZyhcInF1ZXJ5XCIsIHF1ZXJ5KTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wcm9kdWN0cz9pZD0ke3F1ZXJ5LmlkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb2R1Y3Q6IGRhdGFbMF1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.646554f80e4507e09d9c.hot-update.js.map