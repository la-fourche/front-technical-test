webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/data.js":
/*!********************************!*\
  !*** ./redux/reducers/data.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : JSON.parse(localStorage.getItem('myKey:546726736522537625467'));

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      data = _ref.data;

  switch (type) {
    case 'SET':
      localStorage.setItem('myKey:546726736522537625467', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
      state = data;
      break;

    default:
      return state;
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (dataReducer);

/***/ })

})
//# sourceMappingURL=_app.js.bf877b2de597129a57d9.hot-update.js.map