webpackHotUpdate(4,{

/***/ "./pages/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_paginate__ = __webpack_require__("./node_modules/react-paginate/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_paginate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_query_string__ = __webpack_require__("./node_modules/query-string/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var LIMIT = 50;

var FIND_JOBS_URL = 'http://localhost:3000/api/jobs';

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        var _this2 = this;

        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.onPageChange = function (page) {
            var selected = page.selected;

            __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
                pathname: '/',
                query: {
                    limit: LIMIT,
                    offset: selected * LIMIT,
                    search: _this.props.url.query.search
                }
            });
        };

        _this.onSearch = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(searchTerm) {
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
                                // const res = await fetch(FIND_JOBS_URL + `?search=${searchTerm}`);
                                // const data = await res.json();

                                // this.setState({
                                //     jobs: data.rows,
                                //     count: data.count.length
                                // });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {

            var jobCards = this.props.jobs.map(function (job, i) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_JobTitle__["a" /* default */], { job: job, key: 'job-item-' + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                });
            });

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'jumbotron jumbotron-fluid', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h1',
                            { className: 'display-4', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            },
                            'Hello, world!'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'p',
                            { className: 'lead', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 65
                                }
                            },
                            'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', { className: 'my-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'p',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 67
                                }
                            },
                            'It uses utility classes for typography and spacing to space content out within the larger container.'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'p',
                            { className: 'lead', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 68
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_SearchBar__["a" /* default */], { term: this.props.url.query.search, onSearch: this.onSearch, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 69
                                }
                            })
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'section',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'job-list', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        },
                        jobCards
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_paginate___default.a, {
                        pageCount: Math.ceil(this.props.count / 50),
                        marginPagesDisplayed: 2,
                        onPageChange: this.onPageChange,
                        pageRangeDisplayed: 5,
                        containerClassName: "paginate",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Index.getInitialProps = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(_ref2) {
        var query = _ref2.query;
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(FIND_JOBS_URL + '?' + __WEBPACK_IMPORTED_MODULE_7_query_string___default.a.stringify(query));

                    case 2:
                        res = _context2.sent;
                        _context2.next = 5;
                        return res.json();

                    case 5:
                        data = _context2.sent;


                        console.log('Show data fetched. Count: ' + data.rows.length + '/' + data.count.length);

                        return _context2.abrupt('return', {
                            jobs: data.rows,
                            count: data.count.length
                        });

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x2) {
        return _ref3.apply(this, arguments);
    };
}();

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(LIMIT, 'LIMIT', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js');
    reactHotLoader.register(FIND_JOBS_URL, 'FIND_JOBS_URL', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js');
    reactHotLoader.register(Index, 'Index', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.141c3285573b4b2a19b6.hot-update.js.map