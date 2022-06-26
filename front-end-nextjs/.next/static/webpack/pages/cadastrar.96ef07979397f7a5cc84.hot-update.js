self["webpackHotUpdate_N_E"]("pages/cadastrar",{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./pages/cadastrar.js":
/*!****************************!*\
  !*** ./pages/cadastrar.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/head.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! ../components/Menu */ "./components/Menu.js"));

var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _jsxFileName = "C:\\Users\\gabip\\Downloads\\integrar-nextjs-com-back-end\\front-end-nextjs\\pages\\cadastrar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Cadastrar(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0, _react.useState)({
    name: '',
    email: '',
    ponto: '',
    endereco: '',
    imagem: ''
  }),
      dataForm = _useState[0],
      setDataForm = _useState[1];

  var _useState2 = (0, _react.useState)({
    type: '',
    mensagem: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setDataForm(_objectSpread(_objectSpread({}, dataForm), {}, (0, _defineProperty2["default"])({}, e.target.name, e.target.value)));
  };

  var sendContact = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var res, responseEnv;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(dataForm.email);
              _context.prev = 2;
              _context.next = 5;
              return fetch('http://localhost:8080/cadastrar', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.erro) {
                setResponse({
                  type: 'error',
                  mensagem: responseEnv.mensagem
                });
              } else {
                setResponse({
                  type: 'success',
                  mensagem: responseEnv.mensagem
                });
                setDataForm({
                  name: '',
                  email: '',
                  ponto: '',
                  endereco: '',
                  imagem: ''
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendContact(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_head["default"], {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("meta", {
        name: "robots",
        content: "index, follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("meta", {
        name: "description",
        content: "Site sobre ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("meta", {
        name: "author",
        content: "Gabi - Caio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("title", {
        children: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_Menu["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("section", {
      className: "contact",
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h2", {
          className: "title",
          children: "Cadastrar Ponto Tur\xEDstico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: "contact-content",
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "column left",
            children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("h2", {
              children: "Cadastre os lugares que te encantaram!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: "column right",
            children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: "text",
              children: "Cadastrar Ponto Tur\xEDstico"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this), response.type === 'error' ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
              className: "alert-danger",
              children: response.mensagem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 58
            }, this) : "", response.type === 'success' ? /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
              className: "alert-success",
              children: response.mensagem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 60
            }, this) : "", /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("form", {
              onSubmit: sendContact,
              children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "text",
                    name: "name",
                    placeholder: "Digite o nome seu nome completo",
                    onChange: onChangeInput,
                    value: dataForm.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 29
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "email",
                    name: "email",
                    placeholder: "Digite o seu melhor e-mail",
                    onChange: onChangeInput,
                    value: dataForm.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "field ponto",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "text",
                    name: "ponto",
                    placeholder: "Digite o nome do ponto tur\xEDstico visitado",
                    onChange: onChangeInput,
                    value: dataForm.ponto
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "field endereco",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "text",
                    endereco: "endereco",
                    placeholder: "Digite o endere\xE7o do ponto tur\xEDstico",
                    onChange: onChangeInput,
                    value: dataForm.endereco
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                  className: "field imagem",
                  children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "text",
                    imagem: "imagem",
                    placeholder: "Insira uma imagem.",
                    onChange: onChangeInput,
                    value: dataForm.imagem
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("button", {
                  type: "submit",
                  children: "Enviar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("script", {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("script", {
      src: "custom.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

_s(Cadastrar, "o+fZ2EKkKni0xGSP7h2O+Oayghk=");

_c = Cadastrar;
module.exports = {
  getHome: function getHome(connection, callback) {
    var sql = 'SELECT * FROM cadastrars';
    connection.query(sql, callback);
  }
};
var _default = Cadastrar;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Cadastrar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FkYXN0cmFyLjk2ZWYwNzk3OTM5N2Y3YTVjYzg0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ByRTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxTQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUV2QixrQkFBZ0MscUJBQVM7QUFDckNDLElBQUFBLElBQUksRUFBRSxFQUQrQjtBQUVyQ0MsSUFBQUEsS0FBSyxFQUFFLEVBRjhCO0FBR3JDQyxJQUFBQSxLQUFLLEVBQUUsRUFIOEI7QUFJckNDLElBQUFBLFFBQVEsRUFBRSxFQUoyQjtBQUtyQ0MsSUFBQUEsTUFBTSxFQUFDO0FBTDhCLEdBQVQsQ0FBaEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQVFBLG1CQUFnQyxxQkFBUztBQUNyQ0MsSUFBQUEsSUFBSSxFQUFFLEVBRCtCO0FBRXJDQyxJQUFBQSxRQUFRLEVBQUU7QUFGMkIsR0FBVCxDQUFoQztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxDQUFDO0FBQUEsV0FBSU4sV0FBVyxpQ0FBTUQsUUFBTiw0Q0FBaUJPLENBQUMsQ0FBQ0MsTUFBRixDQUFTYixJQUExQixFQUFpQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTFDLEdBQWY7QUFBQSxHQUF2Qjs7QUFFQSxNQUFNQyxXQUFXO0FBQUEsOEZBQUcsaUJBQU1ILENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQSxjQUFBQSxDQUFDLENBQUNJLGNBQUY7QUFDQUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLFFBQVEsQ0FBQ0osS0FBckI7QUFGZ0I7QUFBQTtBQUFBLHFCQUtNa0IsS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQ3ZEQyxnQkFBQUEsTUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLFFBQWYsQ0FGaUQ7QUFHdkRtQixnQkFBQUEsT0FBTyxFQUFFO0FBQUUsa0NBQWdCO0FBQWxCO0FBSDhDLGVBQXBDLENBTFg7O0FBQUE7QUFLTkMsY0FBQUEsR0FMTTtBQUFBO0FBQUEscUJBV2NBLEdBQUcsQ0FBQ0MsSUFBSixFQVhkOztBQUFBO0FBV05DLGNBQUFBLFdBWE07O0FBYVosa0JBQUlBLFdBQVcsQ0FBQ0MsSUFBaEIsRUFBc0I7QUFDbEJsQixnQkFBQUEsV0FBVyxDQUFDO0FBQ1JILGtCQUFBQSxJQUFJLEVBQUUsT0FERTtBQUVSQyxrQkFBQUEsUUFBUSxFQUFFbUIsV0FBVyxDQUFDbkI7QUFGZCxpQkFBRCxDQUFYO0FBSUgsZUFMRCxNQUtPO0FBQ0hFLGdCQUFBQSxXQUFXLENBQUM7QUFDUkgsa0JBQUFBLElBQUksRUFBRSxTQURFO0FBRVJDLGtCQUFBQSxRQUFRLEVBQUVtQixXQUFXLENBQUNuQjtBQUZkLGlCQUFELENBQVg7QUFLQUYsZ0JBQUFBLFdBQVcsQ0FBQztBQUNSTixrQkFBQUEsSUFBSSxFQUFFLEVBREU7QUFFUkMsa0JBQUFBLEtBQUssRUFBRSxFQUZDO0FBR1JDLGtCQUFBQSxLQUFLLEVBQUUsRUFIQztBQUlSQyxrQkFBQUEsUUFBUSxFQUFFLEVBSkY7QUFLUkMsa0JBQUFBLE1BQU0sRUFBQztBQUxDLGlCQUFELENBQVg7QUFPSDs7QUEvQlc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQ1pNLGNBQUFBLFdBQVcsQ0FBQztBQUNSSCxnQkFBQUEsSUFBSSxFQUFFLE9BREU7QUFFUkMsZ0JBQUFBLFFBQVEsRUFBRTtBQUZGLGVBQUQsQ0FBWDs7QUFqQ1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWE8sV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF3Q0Esc0JBQ0k7QUFBQSw0QkFDSSwyQkFBQyxnQkFBRDtBQUFBLDhCQUNJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0k7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJLDJCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQVlJO0FBQVMsZUFBUyxFQUFDLFNBQW5CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBS0k7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUtLTixRQUFRLENBQUNGLElBQVQsS0FBa0IsT0FBbEIsZ0JBQTRCO0FBQUcsdUJBQVMsRUFBQyxjQUFiO0FBQUEsd0JBQTZCRSxRQUFRLENBQUNEO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTVCLEdBQWtGLEVBTHZGLEVBTUtDLFFBQVEsQ0FBQ0YsSUFBVCxLQUFrQixTQUFsQixnQkFBOEI7QUFBRyx1QkFBUyxFQUFDLGVBQWI7QUFBQSx3QkFBOEJFLFFBQVEsQ0FBQ0Q7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBOUIsR0FBcUYsRUFOMUYsZUFRSTtBQUFNLHNCQUFRLEVBQUVPLFdBQWhCO0FBQUEsc0NBRUE7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx1Q0FDUTtBQUFLLDJCQUFTLEVBQUMsWUFBZjtBQUFBLHlDQUNJO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLHdCQUFJLEVBQUMsTUFBeEI7QUFBK0IsK0JBQVcsRUFBQyxpQ0FBM0M7QUFBNkUsNEJBQVEsRUFBRUosYUFBdkY7QUFBc0cseUJBQUssRUFBRU4sUUFBUSxDQUFDTDtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkEsZUFRSTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxZQUFmO0FBQUEseUNBQ0k7QUFBTyx3QkFBSSxFQUFDLE9BQVo7QUFBb0Isd0JBQUksRUFBQyxPQUF6QjtBQUFpQywrQkFBVyxFQUFDLDRCQUE3QztBQUEwRSw0QkFBUSxFQUFFVyxhQUFwRjtBQUFtRyx5QkFBSyxFQUFFTixRQUFRLENBQUNKO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSSixlQWNJO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDSTtBQUFPLHdCQUFJLEVBQUMsTUFBWjtBQUFtQix3QkFBSSxFQUFDLE9BQXhCO0FBQWdDLCtCQUFXLEVBQUMsOENBQTVDO0FBQXdGLDRCQUFRLEVBQUVVLGFBQWxHO0FBQWlILHlCQUFLLEVBQUVOLFFBQVEsQ0FBQ0g7QUFBakk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWRKLGVBb0JJO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQUEseUNBQ0k7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIsNEJBQVEsRUFBQyxVQUE1QjtBQUF1QywrQkFBVyxFQUFDLDRDQUFuRDtBQUEwRiw0QkFBUSxFQUFFUyxhQUFwRztBQUFtSCx5QkFBSyxFQUFFTixRQUFRLENBQUNGO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFwQkosZUEwQkk7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLHlDQUNJO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLDBCQUFNLEVBQUMsUUFBMUI7QUFBbUMsK0JBQVcsRUFBQyxvQkFBL0M7QUFBb0UsNEJBQVEsRUFBRVEsYUFBOUU7QUFBNkYseUJBQUssRUFBRU4sUUFBUSxDQUFDRDtBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBMUJKLGVBZ0NJO0FBQUsseUJBQVMsRUFBQyxhQUFmO0FBQUEsdUNBQ0k7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFzRUk7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEVKLGVBdUVJO0FBQVEsU0FBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJFSDs7R0FwSVFOOztLQUFBQTtBQXNJVCtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxPQUFPLEVBQUcsaUJBQVNDLFVBQVQsRUFBcUJDLFFBQXJCLEVBQThCO0FBQ3BDLFFBQUlDLEdBQUcsR0FBRywwQkFBVjtBQUNBRixJQUFBQSxVQUFVLENBQUNHLEtBQVgsQ0FBaUJELEdBQWpCLEVBQXFCRCxRQUFyQjtBQUNIO0FBSlksQ0FBakI7ZUFPZW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcblxyXG5mdW5jdGlvbiBDYWRhc3RyYXIoe2RhdGF9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGFGb3JtLCBzZXREYXRhRm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBvbnRvOiAnJyxcclxuICAgICAgICBlbmRlcmVjbzogJycsXHJcbiAgICAgICAgaW1hZ2VtOicnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZW5zYWdlbTogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0RGF0YUZvcm0oeyAuLi5kYXRhRm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kQ29udGFjdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRm9ybS5lbWFpbCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvY2FkYXN0cmFyJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhRm9ybSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUVudi5lcnJvKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZW5zYWdlbTogcmVzcG9uc2VFbnYubWVuc2FnZW1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZW5zYWdlbTogcmVzcG9uc2VFbnYubWVuc2FnZW1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldERhdGFGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9udG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZGVyZWNvOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZW06JydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWdlbTogXCJFcnJvOiBUZW50ZSBtYWlzIHRhcmRlIVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2l0ZSBzb2JyZSAuLi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJHYWJpIC0gQ2Fpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjQvY3NzL2FsbC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DYWRhc3RyYXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhZGFzdHJhciBQb250byBUdXLDrXN0aWNvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2FkYXN0cmUgb3MgbHVnYXJlcyBxdWUgdGUgZW5jYW50YXJhbSE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYWRhc3RyYXIgUG9udG8gVHVyw61zdGljb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicgPyA8cCBjbGFzc05hbWU9XCJhbGVydC1kYW5nZXJcIj57cmVzcG9uc2UubWVuc2FnZW19PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPHAgY2xhc3NOYW1lPVwiYWxlcnQtc3VjY2Vzc1wiPntyZXNwb25zZS5tZW5zYWdlbX08L3A+IDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENvbnRhY3R9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgc2V1IG5vbWUgY29tcGxldG9cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gdmFsdWU9e2RhdGFGb3JtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIHNldSBtZWxob3IgZS1tYWlsXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgcG9udG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwb250b1wiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZSBkbyBwb250byB0dXLDrXN0aWNvIHZpc2l0YWRvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5wb250b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgZW5kZXJlY29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGVuZGVyZWNvPVwiZW5kZXJlY29cIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGVuZGVyZcOnbyBkbyBwb250byB0dXLDrXN0aWNvXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5lbmRlcmVjb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpbWFnZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGltYWdlbT1cImltYWdlbVwiIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHVtYSBpbWFnZW0uXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5pbWFnZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy42LjAvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImN1c3RvbS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldEhvbWUgOiBmdW5jdGlvbihjb25uZWN0aW9uLCBjYWxsYmFjayl7XHJcbiAgICAgICAgbGV0IHNxbCA9ICdTRUxFQ1QgKiBGUk9NIGNhZGFzdHJhcnMnXHJcbiAgICAgICAgY29ubmVjdGlvbi5xdWVyeShzcWwsY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FkYXN0cmFyOyJdLCJuYW1lcyI6WyJDYWRhc3RyYXIiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicG9udG8iLCJlbmRlcmVjbyIsImltYWdlbSIsImRhdGFGb3JtIiwic2V0RGF0YUZvcm0iLCJ0eXBlIiwibWVuc2FnZW0iLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRDb250YWN0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEhvbWUiLCJjb25uZWN0aW9uIiwiY2FsbGJhY2siLCJzcWwiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=