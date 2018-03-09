webpackHotUpdate(5,{

/***/ "./pages/job.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_marked__ = __webpack_require__("./node_modules/marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ApplyButton__ = __webpack_require__("./components/ApplyButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Company__ = __webpack_require__("./components/Company.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Share__ = __webpack_require__("./components/Share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Tag__ = __webpack_require__("./components/Tag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Header__ = __webpack_require__("./components/Header.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/job.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var Job = function (_Component) {
    _inherits(Job, _Component);

    function Job() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Job);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Job.__proto__ || Object.getPrototypeOf(Job)).call.apply(_ref, [this].concat(args))), _this), _this.onSearch = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(searchTerm) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
                                    pathname: '/',
                                    query: {
                                        search: searchTerm
                                    }
                                });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Job, [{
        key: 'render',
        value: function render() {
            var job = this.props.job;

            var htmlDescription = job.description;

            if (job.referrer === 'remoteok') {
                htmlDescription = __WEBPACK_IMPORTED_MODULE_5_marked___default()(job.description);
            }

            var tags = job.tags.split(',');
            var tagsJsx = tags.map(function (t, i) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Tag__["a" /* default */], { name: t, key: 'tag-' + t + '-' + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                });
            });

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Header__["a" /* default */], { onSearch: this.onSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'container', style: { marginTop: 60 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-8', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_JobTitle__["a" /* default */], { job: job, expanded: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'job-description',
                                dangerouslySetInnerHTML: { __html: htmlDescription }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-4 job-sidebar', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ApplyButton__["a" /* default */], { job: job, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Company__["a" /* default */], { companyName: job.company, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'card', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'div',
                                    { className: 'card-body', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 54
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'h5',
                                        { className: 'card-title', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 55
                                            }
                                        },
                                        'Related Jobs'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 56
                                            }
                                        },
                                        'Find more jobs related to:'
                                    ),
                                    tagsJsx,
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 58
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 59
                                            }
                                        },
                                        'Find more jobs at ',
                                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                                            { href: "/?search=" + job.company, className: 'badge', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 59
                                                }
                                            },
                                            job.company
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Share__["a" /* default */], { job: job, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            })
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Job;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Job.getInitialProps = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(_ref3) {
        var query = _ref3.query;
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('http://localhost:3000/api/jobs/' + query.id);

                    case 2:
                        res = _context2.sent;
                        _context2.next = 5;
                        return res.json();

                    case 5:
                        data = _context2.sent;
                        return _context2.abrupt('return', {
                            job: data[0]
                        });

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x2) {
        return _ref4.apply(this, arguments);
    };
}();

var _default = Job;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Job, 'Job', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/job.js');
    reactHotLoader.register(_default, 'default', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/job.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/job")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.c2321e0221dbd70c6db5.hot-update.js.map