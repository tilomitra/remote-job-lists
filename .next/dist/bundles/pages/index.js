module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Footer.js';



var styles = {
    footer: {
        background: 'url(data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Q\u2026kiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat',
        backgroundSize: 'cover',
        height: 500
    }
};

var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: styles.footer, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        },
        'Footer goes here.'
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Applications/MAMP/code/sandbox/remote-job-lists/components/Header.js";



var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "nav",
        { className: "navbar navbar-light bg-light", __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "/", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                { className: "navbar-brand", href: "/", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                "Remote Job Lists"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/JobTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/JobTitle.js';




var JobTitle = function JobTitle(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'article',
        { className: 'job-list-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { prefetch: true, as: '/job/' + props.job.id, href: '/job?id=' + props.job.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'job-list-item-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    props.job.title,
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'muted', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        'at'
                    ),
                    ' ',
                    props.job.company
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'muted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'Published'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_2_moment___default()(props.job.publishDate).startOf('day').fromNow(),
                ', ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'muted', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'Referred by'
                ),
                ' ',
                props.job.referrer
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (JobTitle);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_app_css__ = __webpack_require__("./assets/css/app.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_css_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_app_css__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Layout.js';






var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app', __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            props.children
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/SearchBar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SearchBar = function (_Component) {
    _inherits(SearchBar, _Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSearchClick = function (e) {
            e.preventDefault();
            _this.props.onSearch(_this.state.searchTerm);
        };

        _this.state = {
            searchTerm: props.term || ''
        };
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { className: 'form-inline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control form-control-lg mr-sm-2', type: 'search', placeholder: 'Enter a skill like \'software\'...', value: this.state.searchTerm, onChange: function onChange(e) {
                        _this2.setState({ searchTerm: e.currentTarget.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: 'btn btn-lg btn-primary my-2 my-sm-0', type: 'submit', onClick: this.onSearchClick, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    'Find Remote Jobs'
                )
            );
        }
    }]);

    return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_paginate__ = __webpack_require__("react-paginate");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_paginate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_query_string__ = __webpack_require__("query-string");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-paginate":
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map