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
    className: "jsx-3837159525" + " " + "ProductPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3837159525" + " " + "ProductContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3837159525",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.product.title, ", by ", props.product.vendor), __jsx("img", {
    src: props.product.product_image,
    className: "jsx-3837159525" + " " + "ProductImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3837159525" + " " + "ProductDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.product.body_html_safe), __jsx("p", {
    className: "jsx-3837159525" + " " + "ProductPricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Real price: ", __jsx("b", {
    className: "jsx-3837159525",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.product.price, "\u20AC"), " - weight:", " ", props.product.weight, __jsx("br", {
    className: "jsx-3837159525",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("strike", {
    className: "jsx-3837159525",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "instead of ", props.product.compare_at_price, "\u20AC")), __jsx("p", {
    className: "jsx-3837159525" + " " + "ProductQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Quick! There's only ", props.product.inventory_quantity, " left!"), __jsx("p", {
    className: "jsx-3837159525" + " " + "ProductSKU",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "SKU: ", __jsx("em", {
    className: "jsx-3837159525",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.product.sku))), props.product.inventory_quantity > 0 ? __jsx("div", {
    className: "jsx-3837159525" + " " + "AddToBasketButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Add to basket") : __jsx("div", {
    className: "jsx-3837159525" + " " + "NotifyButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Notify me!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3837159525",
    __self: this
  }, "h1.jsx-3837159525{font-family:\"Arial\",sans-serif;display:inline-block;width:100%;text-align:center;}.ProductContainer.jsx-3837159525{width:900px;margin:auto;}.ProductImage.jsx-3837159525{margin:auto;display:block;}.AddToBasketButton.jsx-3837159525,.NotifyButton.jsx-3837159525{width:150px;height:50px;line-height:50px;text-align:center;background-color:lightgreen;border-radius:20px;margin:15px auto;}.ProductPrice.jsx-3837159525{width:250px;}.ProductQuantity.jsx-3837159525{width:250px;}.ProductDescription.jsx-3837159525{width:550px;float:right;padding:0 10px;}.AddToBasketButton.jsx-3837159525:hover,.NotifyButton.jsx-3837159525:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFHeUMsQUFPcEIsQUFLQSxBQU1BLEFBVUEsQUFJQSxBQUlBLEFBT0csWUFuQ0gsQUFLRSxBQU1GLEFBVWQsQUFJQSxBQUljLEdBT2QsU0FuQ0EsQUFXbUIsQUFrQkYsRUF4QmpCLEtBYnVCLFFBc0N2QixFQWxCb0IsV0FuQlAsT0FvQmlCLElBbkJWLGtCQUNwQixNQW1CcUIsbUJBQ0YsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9tZWhkaS9UZWNobmljYWxUZXN0cy9MYUZvdXJjaGUvZnJvbnQtdGVjaG5pY2FsLXRlc3QvcGFnZXMvcHJvZHVjdC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFByb2R1Y3QgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdFBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RDb250YWluZXJcIj5cbiAgICAgIDxoMT5cbiAgICAgICAge3Byb3BzLnByb2R1Y3QudGl0bGV9LCBieSB7cHJvcHMucHJvZHVjdC52ZW5kb3J9XG4gICAgICA8L2gxPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJQcm9kdWN0SW1hZ2VcIiBzcmM9e3Byb3BzLnByb2R1Y3QucHJvZHVjdF9pbWFnZX0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3REZXNjcmlwdGlvblwiPntwcm9wcy5wcm9kdWN0LmJvZHlfaHRtbF9zYWZlfTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RQcmljaW5nXCI+XG4gICAgICAgIFJlYWwgcHJpY2U6IDxiPntwcm9wcy5wcm9kdWN0LnByaWNlfeKCrDwvYj4gLSB3ZWlnaHQ6e1wiIFwifVxuICAgICAgICB7cHJvcHMucHJvZHVjdC53ZWlnaHR9XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3RyaWtlPmluc3RlYWQgb2Yge3Byb3BzLnByb2R1Y3QuY29tcGFyZV9hdF9wcmljZX3igqw8L3N0cmlrZT5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RRdWFudGl0eVwiPlxuICAgICAgICBRdWljayEgVGhlcmUncyBvbmx5IHtwcm9wcy5wcm9kdWN0LmludmVudG9yeV9xdWFudGl0eX0gbGVmdCFcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIlByb2R1Y3RTS1VcIj5cbiAgICAgICAgU0tVOiA8ZW0+e3Byb3BzLnByb2R1Y3Quc2t1fTwvZW0+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAge3Byb3BzLnByb2R1Y3QuaW52ZW50b3J5X3F1YW50aXR5ID4gMCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQWRkVG9CYXNrZXRCdXR0b25cIj5BZGQgdG8gYmFza2V0PC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTm90aWZ5QnV0dG9uXCI+Tm90aWZ5IG1lITwvZGl2PlxuICAgICl9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0Q29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5Qcm9kdWN0SW1hZ2Uge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuQWRkVG9CYXNrZXRCdXR0b24sXG4gICAgICAuTm90aWZ5QnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFByaWNlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdFF1YW50aXR5IHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuUHJvZHVjdERlc2NyaXB0aW9uIHtcbiAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIH1cblxuICAgICAgLkFkZFRvQmFza2V0QnV0dG9uOmhvdmVyLFxuICAgICAgLk5vdGlmeUJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuUHJvZHVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IHF1ZXJ5IH0pIHtcbiAgY29uc29sZS5sb2coXCJxdWVyeVwiLCBxdWVyeSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvcHJvZHVjdHM/aWQ9JHtxdWVyeS5pZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0OiBkYXRhWzBdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl19 */\n/*@ sourceURL=/Users/mehdi/TechnicalTests/LaFourche/front-technical-test/pages/product/[id].js */"));
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
//# sourceMappingURL=[id].js.ca9447e2df28bbe26690.hot-update.js.map