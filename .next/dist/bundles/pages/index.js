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

/* unused harmony default export */ var _unused_webpack_default_export = (ApplyButton);

/***/ }),

/***/ "./components/Email.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select__ = __webpack_require__("react-select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connections_tags__ = __webpack_require__("./connections/tags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connections_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__connections_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_forEach__ = __webpack_require__("lodash/forEach");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_forEach__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_select_dist_react_select_css__ = __webpack_require__("./node_modules/react-select/dist/react-select.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_select_dist_react_select_css__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Email = function (_Component) {
    _inherits(Email, _Component);

    function Email(props) {
        _classCallCheck(this, Email);

        var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            var res = fetch('http://localhost:3000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: _this.state.email,
                    tags: _this.state.value
                })
            }).then(function (response) {
                response.json();
            }).then(function (responseJson) {
                console.log(responseJson);
            });
        };

        _this.handleEmailChange = function (e) {
            _this.setState({ email: e.currentTarget.value });
        };

        _this.handleSelectChange = function (value) {
            console.log('You\'ve selected:', value);
            _this.setState({ value: value });
        };

        _this.state = {
            email: '',
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: _this.props.defaultValue ? [{ label: _this.props.defaultValue, value: _this.props.defaultValue }] : [],
            rtl: false
        };

        return _this;
    }

    _createClass(Email, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                disabled = _state.disabled,
                stayOpen = _state.stayOpen,
                value = _state.value,
                removeSelected = _state.removeSelected,
                rtl = _state.rtl;

            var didUserSearch = !!this.props.defaultValue;

            var options = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash_forEach___default()(__WEBPACK_IMPORTED_MODULE_2__connections_tags___default.a, function (keywords, tag) {
                options.push({ label: tag, value: tag });
            });

            var header = void 0;

            if (didUserSearch) {
                header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    { className: 'card-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    'Get notified when new ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'term', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        this.props.defaultValue
                    ),
                    ' positions come out'
                );
            } else {
                header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    { className: 'card-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    'Get Daily Job Listings'
                );
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card app-email', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-body', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'card-title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        header
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'form',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'form-row align-items-center', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 78
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-4 my-1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 79
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    { className: 'mr-sm-2', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 80
                                        }
                                    },
                                    'Email me at'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter your email', value: this.state.email, onChange: this.handleEmailChange, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 81
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-6 my-1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 83
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 84
                                        }
                                    },
                                    'with new listings related to'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_select___default.a, {
                                    closeOnSelect: !stayOpen,
                                    disabled: disabled,
                                    multi: true,
                                    onChange: this.handleSelectChange,
                                    options: options,
                                    placeholder: 'You can type "design", "engineering", or more...',
                                    removeSelected: removeSelected,
                                    rtl: rtl,
                                    simpleValue: true,
                                    value: value,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 85
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-2 my-1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 98
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    {
                                        className: 'btn btn-success',
                                        style: { marginTop: 35 },
                                        onClick: this.onSubmit,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 99
                                        }
                                    },
                                    'Subscribe'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'small',
                            { className: 'form-text text-muted', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 108
                                }
                            },
                            'The tags that you specify will be used to customize listings for your email. You can unsubscribe anytime.'
                        )
                    )
                )
            );
        }
    }]);

    return Email;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.toggle = function () {
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };

        _this.state = {
            isOpen: false
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Navbar"],
                { fixed: 'top', color: 'light', light: true, expand: 'md', className: 'justify-content-between', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarBrand"],
                    { href: '/', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    'Remote Job Lists'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarToggler"], { onClick: this.toggle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Collapse"],
                    { isOpen: this.state.isOpen, navbar: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],
                        { className: 'ml-auto', navbar: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBar__["a" /* default */], { isSmall: true, term: this.props.searchTerm || '', onSearch: this.props.onSearch, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Tag__ = __webpack_require__("./components/Tag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ApplyButton__ = __webpack_require__("./components/ApplyButton.js");
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

            var tagList = this.props.job.tags.split(',').map(function (t, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Tag__["a" /* default */], { name: t, key: 'tag-' + t + '-' + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                });
            });

            //render the expanded view
            if (this.props.expanded) {
                contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        { className: 'job-title job-title-expanded', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        this.props.job.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'job-title-lead', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'muted', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            'at'
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'job-company', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            this.props.job.company
                        )
                    )
                );
            }
            // Render the compact view
            else {
                    contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'job-list-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-6', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                    { prefetch: true, as: '/job/' + this.props.job.id, href: '/job?id=' + this.props.job.id, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 32
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: 'job-title job-title-compact', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 33
                                            }
                                        },
                                        this.props.job.title,
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'muted', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 33
                                                }
                                            },
                                            'at'
                                        ),
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'job-company', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 33
                                                }
                                            },
                                            this.props.job.company
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'muted', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    'Published'
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.props.job.publishDate).startOf('day').fromNow()
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-4', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 37
                                    }
                                },
                                tagList
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-2 text-right job-list-item-apply', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'btn job-apply-button', href: this.props.job.link, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41
                                        }
                                    },
                                    'Apply'
                                )
                            )
                        )
                    );
                }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'article',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
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

/***/ "./components/Jumbotron.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_typing_animation__ = __webpack_require__("react-typing-animation");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Jumbotron.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Jumbotron = function (_Component) {
    _inherits(Jumbotron, _Component);

    function Jumbotron() {
        _classCallCheck(this, Jumbotron);

        return _possibleConstructorReturn(this, (Jumbotron.__proto__ || Object.getPrototypeOf(Jumbotron)).apply(this, arguments));
    }

    _createClass(Jumbotron, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'jumbotron jumbotron-fluid app-jumbotron', style: { marginTop: 60 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: 'display-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        'Work Remotely as',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 19
                                    }
                                },
                                'a Software Engineer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22
                                    }
                                },
                                'an Accountant'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    }
                                },
                                'a Graphic Designer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 28
                                    }
                                },
                                'an Android Developer'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'lead', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31
                            }
                        },
                        'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'my-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        'It uses utility classes for typography and spacing to space content out within the larger container.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'lead', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBar__["a" /* default */], { term: this.props.searchTerm, onSearch: this.props.onSearch, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Jumbotron;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            props.children
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
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

            var isSmall = this.props.isSmall;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'form',
                { className: 'form-inline app-search', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-input form-control mr-sm-2", { 'form-control-lg': !isSmall }), type: 'search', placeholder: 'Enter a skill like \'software\' or \'design\'', value: this.state.searchTerm, onChange: function onChange(e) {
                        _this2.setState({ searchTerm: e.currentTarget.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-btn btn btn-primary my-2 my-sm-0", { 'form-control-lg': !isSmall }), type: 'submit', onClick: this.onSearchClick, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    isSmall ? 'Search' : 'Search Remote Jobs'
                )
            );
        }
    }]);

    return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./components/Tag.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Tag.js';



var Tag = function Tag(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: {
                pathname: '/',
                query: { search: props.name }
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'job-tag badge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            props.name
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),

/***/ "./connections/tags.js":
/***/ (function(module, exports) {



var tags = {
    'web': ['javascript', 'css', 'html', 'react', 'angular', 'full stack', 'seo'],
    'backend': ['php', 'java', 'c++', 'ruby', 'ror', 'nodejs', 'full stack'],
    'mobile': ['ios', 'android', 'java', 'objective c', 'swift'],
    'engineering': ['engineer', 'developer'],
    'networking': ['lan', 'wifi', 'tcp', 'devops'],
    'management': ['project manager', 'product manager', 'supervisor', 'growth', 'scrum', 'agile', 'team lead', 'manager'],
    'healthcare': ['pharmacy', 'health', 'therapist', 'social worker', 'nurse', 'medical', 'care'],
    'quality assurance': ['quality', 'qa'],
    'customer service': ['customer', 'representative', 'service'],
    'media': ['video', 'audio', 'pr', 'public relations', 'visual', 'news', 'entertainment', 'writer', 'script'],
    'finance': ['cash', 'accounting', 'accountant', 'investment', 'payroll', 'billable', 'analyst', 'underwriter', 'financial', 'finance', 'mortgage', 'loan', 'appraiser'],
    'sales': ['sales', 'business', 'advertising', 'ads', 'account executive', 'account'],
    'design': ['design', 'designer', 'graphic', 'graphics', 'graphical', 'animation', 'logo', 'illustrator', 'arts', 'art', 'sculpture', 'creative', 'digital'],
    'administrative': ['administrative', 'assistant'],
    'education': ['learning', 'teacher', 'college', 'trainer', 'professor', 'educational', 'education', 'educator']
};

module.exports = tags;

/***/ }),

/***/ "./node_modules/react-select/dist/react-select.css":
/***/ (function(module, exports) {



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_typing_animation__ = __webpack_require__("react-typing-animation");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_typing_animation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_typing_animation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Jumbotron__ = __webpack_require__("./components/Jumbotron.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Email__ = __webpack_require__("./components/Email.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var LIMIT = 20;

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
            var _this3 = this;

            var jobCards = this.props.jobs.map(function (job, i) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_JobTitle__["a" /* default */], { job: job, key: 'job-item-' + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                });
            });

            var leadLine = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'section',
                { className: 'text-center job-list-lead', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h5',
                    { className: 'title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    'Showing ',
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        { className: 'count', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        this.props.count,
                        ' jobs'
                    ),
                    ' across all categories'
                )
            );

            if (this.props.url.query.search) {
                leadLine = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h5',
                        { className: 'title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        'Showing ',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'span',
                            { className: 'count', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            this.props.count,
                            ' jobs'
                        ),
                        ' related to ',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'span',
                            { className: 'term', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            this.props.url.query.search
                        ),
                        '.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        { className: 'reset', onClick: function onClick() {
                                _this3.onSearch('');
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        'Click to reset filters.'
                    )
                );
            }

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Header__["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Jumbotron__["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'section',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        }
                    },
                    leadLine,
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Email__["a" /* default */], { defaultValue: this.props.url.query.search || null, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'job-list', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            }
                        },
                        jobCards
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', { style: { margin: '30px 0' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 93
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_paginate___default.a, {
                        pageCount: Math.ceil(this.props.count / 50),
                        marginPagesDisplayed: 2,
                        onPageChange: this.onPageChange,
                        pageRangeDisplayed: 5,
                        containerClassName: "pagination pagination-lg justify-content-center",
                        pageClassName: "page-item",
                        activeClassName: "active",
                        pageLinkClassName: "page-link",
                        previousClassName: "page-link",
                        breakClassName: "page-link disabled",
                        nextClassName: "page-link",

                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
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

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/forEach":
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

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

/***/ }),

/***/ "react-select":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-typing-animation":
/***/ (function(module, exports) {

module.exports = require("react-typing-animation");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map