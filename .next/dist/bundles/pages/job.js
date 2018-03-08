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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ApplyButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Applications/MAMP/code/sandbox/remote-job-lists/components/ApplyButton.js";

var ApplyButton = function ApplyButton(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "card", __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 3
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                { className: "btn btn-primary btn-block job-apply-button", href: props.job.link, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 4
                    }
                },
                "Apply to this position"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ApplyButton);

/***/ }),

/***/ "./components/Company.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Company.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Company = function (_Component) {
    _inherits(Company, _Component);

    function Company(props) {
        _classCallCheck(this, Company);

        var _this = _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, props));

        _this.state = {
            name: props.name || null,
            domain: props.domain || null,
            logo: props.logo || null
        };
        return _this;
    }

    _createClass(Company, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://company.clearbit.com/v1/domains/find?name=' + this.props.companyName, {
                headers: {
                    'Authorization': 'Bearer sk_0e43c071064f84259c79d020da6f598c'
                }
            }).then(function (r) {
                return r.json();
            }).then(function (result) {
                _this2.setState({
                    name: result.name,
                    domain: 'http://' + result.domain,
                    logo: result.logo
                });
            }).catch(function (err) {
                console.log(err); // Domain could not be found
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.domain && this.state.name) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'card-body', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.state.logo, className: 'float-left', width: '72', height: 'auto', style: { padding: 10 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'h5',
                            { className: 'card-title', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            },
                            'About ',
                            this.state.name
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'a',
                            { href: this.state.domain, className: 'card-link', rel: '_blank', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            'Visit Website'
                        )
                    )
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'card-body', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            }
                        },
                        'We could not find information about this company.'
                    )
                );
            }
        }
    }]);

    return Company;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Company.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var res, data;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://company.clearbit.com/v1/domains/find?name=' + this.props.companyName, {
                        headers: {
                            'Authorization': 'Bearer sk_0e43c071064f84259c79d020da6f598c'
                        }
                    });

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;
                    return _context.abrupt('return', {
                        name: data.name,
                        domain: 'http://' + data.domain,
                        logo: data.logo
                    });

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["a"] = (Company);

/***/ }),

/***/ "./components/Email.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js";



var Email = function Email(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "card", __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "mailto:?subject=Check out this remote job posting: " + props.job.title + "&body=You may be interested in this job posting. It's titled " + props.job.title + " at " + props.job.company + ": http://localhost:3000/job/" + props.job.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    "Email this position"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "https://www.linkedin.com/shareArticle?mini=true&source=Remote+Job+Lists&title=" + props.job.title + "&url=http://localhost:3000/job/" + props.job.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    "Share on LinkedIn"
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Email);

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
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Header.js';



var Header = function Header() {
    return (
        // <nav className="navbar navbar-light bg-light">
        //     <Link href="/">
        //         <a className="navbar-brand" href="/">Remote Job Lists</a>
        //     </Link>
        // </nav>
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        })
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var JobTitle = function (_Component) {
    _inherits(JobTitle, _Component);

    function JobTitle() {
        _classCallCheck(this, JobTitle);

        return _possibleConstructorReturn(this, (JobTitle.__proto__ || Object.getPrototypeOf(JobTitle)).apply(this, arguments));
    }

    _createClass(JobTitle, [{
        key: 'render',
        value: function render() {
            var contents = void 0;
            //render the expanded view
            if (this.props.expanded) {
                contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        { className: 'job-title job-title-expanded', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        this.props.job.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'lead', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'muted', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            'at'
                        ),
                        ' ',
                        this.props.job.company
                    )
                );
            }
            // Render the compact view
            else {
                    contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                        { prefetch: true, as: '/job/' + this.props.job.id, href: '/job?id=' + this.props.job.id, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'job-list-item', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                { className: 'job-title job-title-compact', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    }
                                },
                                this.props.job.title,
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'muted', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 23
                                        }
                                    },
                                    'at'
                                ),
                                ' ',
                                this.props.job.company
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'muted', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
                                'Published'
                            ),
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.props.job.publishDate).startOf('day').fromNow(),
                            ', ',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'muted', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
                                'Referred by'
                            ),
                            ' ',
                            this.props.job.referrer
                        )
                    );
                }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'article',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                },
                contents
            );
        }
    }]);

    return JobTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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

/***/ "./pages/job.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked__ = __webpack_require__("marked");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ApplyButton__ = __webpack_require__("./components/ApplyButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Company__ = __webpack_require__("./components/Company.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Email__ = __webpack_require__("./components/Email.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/job.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Job = function (_Component) {
    _inherits(Job, _Component);

    function Job() {
        _classCallCheck(this, Job);

        return _possibleConstructorReturn(this, (Job.__proto__ || Object.getPrototypeOf(Job)).apply(this, arguments));
    }

    _createClass(Job, [{
        key: 'render',
        value: function render() {
            var job = this.props.job;

            var htmlDescription = job.description;

            if (job.referrer === 'remoteok') {
                htmlDescription = __WEBPACK_IMPORTED_MODULE_4_marked___default()(job.description);
            }

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-8', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_JobTitle__["a" /* default */], { job: job, expanded: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'job-description',
                                dangerouslySetInnerHTML: { __html: htmlDescription }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-4 job-sidebar', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ApplyButton__["a" /* default */], { job: job, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Company__["a" /* default */], { companyName: job.company, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Email__["a" /* default */], { job: job, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Job;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Job.getInitialProps = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query = _ref.query;
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('http://localhost:3000/api/jobs/' + query.id);

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        data = _context.sent;
                        return _context.abrupt('return', {
                            job: data[0]
                        });

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref2.apply(this, arguments);
    };
}();

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/job.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "marked":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=job.js.map