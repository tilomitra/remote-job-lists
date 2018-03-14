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
                "Apply"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ApplyButton);

/***/ }),

/***/ "./components/Categories.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections_tags__ = __webpack_require__("./connections/tags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connections_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__connections_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_forEach__ = __webpack_require__("lodash/forEach");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_forEach__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_remove__ = __webpack_require__("lodash/remove");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_remove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_remove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feather_icons__ = __webpack_require__("feather-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feather_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_feather_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Categories.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Categories = function (_Component) {
    _inherits(Categories, _Component);

    function Categories(props) {
        _classCallCheck(this, Categories);

        var _this = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

        _this.toggle = function () {
            _this.setState({ isOpen: !_this.state.isOpen });
        };

        _this.onCategoryClick = function (tag) {
            var selected = _this.state.selected;
            var isSelected = selected.indexOf(tag) > -1 ? true : false;

            if (isSelected) {
                __WEBPACK_IMPORTED_MODULE_3_lodash_remove___default()(selected, function (val) {
                    return val === tag;
                });
            } else {
                selected.push(tag);
            }

            _this.setState({ selected: selected });
            __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
                pathname: '/',
                query: {
                    tags: selected.join(',')
                }
            });
        };

        var selectedCategories = _this.props.selectedCategories;

        _this.state = {
            selected: selectedCategories ? selectedCategories.split(',') : [],
            isOpen: true
        };
        return _this;
    }

    _createClass(Categories, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_6_feather_icons___default.a.replace();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var categories = [];
            var selected = this.state.selected;


            __WEBPACK_IMPORTED_MODULE_2_lodash_forEach___default()(__WEBPACK_IMPORTED_MODULE_1__connections_tags___default.a, function (_ref, tag) {
                var icon = _ref.icon;

                var isSelected = selected.indexOf(tag) > -1 ? true : false;
                categories.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        className: 'col-sm-4 col-md-2',
                        key: 'category-' + tag,
                        onClick: function onClick() {
                            _this2.onCategoryClick(tag);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()("app-category", { selected: isSelected }), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 60
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { 'data-feather': icon, className: 'app-category-icon', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'app-category-tag', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            tag
                        )
                    )
                ));
            }, this);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { className: 'app-categories sticky-top', style: { top: 80 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-sm-8', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h5',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            'Filter Job Listings',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                { className: 'lead', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73
                                    }
                                },
                                'Use the tags below to filter your job search. You can select more than one tag.'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-sm-4 text-right', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { size: 'sm', onClick: this.toggle, style: { marginBottom: '1rem' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 77
                                }
                            },
                            this.state.isOpen ? "Hide" : "Show",
                            ' Filters'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Collapse"],
                    { isOpen: this.state.isOpen, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row no-gutters', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        },
                        categories
                    )
                )
            );
        }
    }]);

    return Categories;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Categories);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__ = __webpack_require__("./node_modules/react-select/dist/react-select.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var Email = function (_Component) {
    _inherits(Email, _Component);

    function Email(props) {
        _classCallCheck(this, Email);

        var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                componentState: 'is-sending'
            });

            var res = fetch(__WEBPACK_IMPORTED_MODULE_5__config___default.a.host + '/api/subscribe', {
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
                if (responseJson.statusCode === 200) {
                    _this.setState({
                        componentState: 'sent'
                    });
                } else {
                    _this.setState({
                        componentState: 'error'
                    });
                }
            }).catch(function (err) {
                console.log(err);
                _this.setState({
                    componentState: 'error'
                });
            });
        };

        _this.handleEmailBlur = function () {
            var email = _this.state.email;
            var isValidEmail = validateEmail(email);
            _this.setState({ isValidEmail: isValidEmail });
        };

        _this.handleEmailChange = function (e) {

            var email = e.currentTarget.value;
            _this.setState({ componentState: 'not-sent', email: email });
        };

        _this.handleSelectChange = function (value) {
            _this.setState({ componentState: 'not-sent', value: value });
        };

        _this.state = {
            email: '',
            removeSelected: true,
            disabled: false,
            stayOpen: false,
            value: _this.props.defaultValue ? [{ label: _this.props.defaultValue, value: _this.props.defaultValue }] : [],
            rtl: false,
            isValidEmail: true,
            componentState: 'not-sent' // can be 'not-sent', 'is-sending', 'sent', 'error', 
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
                rtl = _state.rtl,
                componentState = _state.componentState,
                isValidEmail = _state.isValidEmail;

            var didUserSearch = !!this.props.defaultValue;

            var expanded = this.props.expanded;


            var options = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash_forEach___default()(__WEBPACK_IMPORTED_MODULE_2__connections_tags___default.a, function (keywords, tag) {
                options.push({ label: tag, value: tag });
            });

            var header = void 0,
                alertBox = void 0,
                subscribeBtnText = 'Receive Alerts';

            if (didUserSearch) {
                header = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    { className: 'card-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        }
                    },
                    'Get notified when new ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'term', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
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
                            lineNumber: 104
                        }
                    },
                    'Get Weekly Job Listings'
                );
            }

            if (componentState === 'sent') {
                alertBox = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'alert alert-success', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                        }
                    },
                    'You have successfully enabled daily job listing alerts. \uD83D\uDC4D'
                );
                subscribeBtnText = 'Daily Alerts Enabled';
            } else if (componentState === 'error') {
                alertBox = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'alert alert-danger', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 116
                        }
                    },
                    'There was an error when subscribing. Verify that your email address is correct, try again, or ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { href: 'https://twitter.com/tilomitra', target: '_blank', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 116
                            }
                        },
                        'contact me'
                    ),
                    '.'
                );
            } else if (componentState === 'is-sending') {
                subscribeBtnText = 'Loading...';
            }

            if (!isValidEmail) {
                alertBox = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'alert alert-warning', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 124
                        }
                    },
                    'We noticed a typo in your email address. Make sure you enter a correct email address before subscribing. \uD83D\uDE42'
                );
            }

            if (expanded) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()("card app-email", { 'app-email-bg': !this.props.noBackground }), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 131
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-body', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 132
                            }
                        },
                        this.props.hideTitle ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h5',
                            { className: 'card-title', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 133
                                }
                            },
                            header
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'form',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 134
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'form-row align-items-center', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 135
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-sm-12 col-md-4 my-1', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 136
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        { className: 'mr-sm-2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 137
                                            }
                                        },
                                        'Email me at'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                                        type: 'email',
                                        className: 'form-control',
                                        placeholder: 'Enter your email',
                                        value: this.state.email,
                                        onBlur: this.handleEmailBlur,
                                        onChange: this.handleEmailChange, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 138
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-sm-12 col-md-8 my-1', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 146
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 147
                                            }
                                        },
                                        'with new listings related to'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_select__["Creatable"], {
                                        closeOnSelect: !stayOpen,
                                        disabled: disabled,
                                        multi: true,
                                        onChange: this.handleSelectChange,
                                        options: options,
                                        placeholder: 'Type keywords to only receive alerts for relevant listings.',
                                        removeSelected: removeSelected,
                                        promptTextCreator: function promptTextCreator(label) {
                                            return 'Get notified for jobs with keyword: ' + label;
                                        },
                                        rtl: rtl,
                                        value: value,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 148
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-sm-12 col-md-2 my-1', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 163
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        {
                                            className: 'btn btn-success',
                                            onClick: this.onSubmit,
                                            disabled: componentState !== 'not-sent' || !isValidEmail,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 164
                                            }
                                        },
                                        subscribeBtnText
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'small',
                                { className: 'form-text text-muted', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 173
                                    }
                                },
                                'If you don\'t enter any tags, we\'ll send you alerts for all job listings daily. The keywords that you specify will be used to customize listings for your email. You can unsubscribe anytime. \uD83E\uDD1D'
                            ),
                            alertBox
                        )
                    )
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'form',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 184
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'form-row align-items-center', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-6 my-1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 186
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                                type: 'email',
                                className: 'form-control',
                                placeholder: 'Enter your email',
                                value: this.state.email,
                                onBlur: this.handleEmailBlur,
                                onChange: this.handleEmailChange, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 187
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-4 my-1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 195
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                {
                                    className: 'btn btn-success',
                                    onClick: this.onSubmit,
                                    disabled: componentState !== 'not-sent' || !isValidEmail,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 196
                                    }
                                },
                                subscribeBtnText
                            )
                        )
                    ),
                    alertBox
                );
            }
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
var _jsxFileName = "/Applications/MAMP/code/sandbox/remote-job-lists/components/Footer.js";



var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "footer",
        { className: "pt-4 my-md-5 pt-md-5 border-top", __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "col-12 text-center", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    "Remote Job Lists Copyright \xA9 2018 \u2022 Follow us on Twitter"
                )
            )
        )
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

            var tagList = this.props.job.tags.map(function (t, i) {
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
                                { className: 'col-sm-12 col-md-6', __source: {
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
                                { className: 'col-sm-6 col-md-4', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 37
                                    }
                                },
                                tagList
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-6 col-md-2 job-list-item-apply', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                    { prefetch: true, as: '/job/' + this.props.job.id, href: '/job?id=' + this.props.job.id, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'btn job-apply-button', style: { fontSize: '1rem' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 42
                                            }
                                        },
                                        'Apply'
                                    )
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
                        lineNumber: 52
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Email__ = __webpack_require__("./components/Email.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Jumbotron.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Jumbotron = function (_Component) {
    _inherits(Jumbotron, _Component);

    function Jumbotron(props) {
        _classCallCheck(this, Jumbotron);

        var _this = _possibleConstructorReturn(this, (Jumbotron.__proto__ || Object.getPrototypeOf(Jumbotron)).call(this, props));

        _this.toggle = function () {
            _this.setState({
                isModalOpen: !_this.state.isModalOpen
            });
        };

        _this.state = {
            isModalOpen: false
        };

        return _this;
    }

    _createClass(Jumbotron, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'jumbotron jumbotron-fluid app-jumbotron', style: { marginTop: 60 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: 'display-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        'Work Remotely as',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 30
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    }
                                },
                                'a Software Engineer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 34
                                    }
                                },
                                'an Accountant'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 37
                                    }
                                },
                                'a Graphic Designer'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Backspace, { count: 50, delay: 2000, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 38
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_typing_animation___default.a.Delay, { ms: 500, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
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
                                lineNumber: 43
                            }
                        },
                        'Find your next job by searching through the largest remote listing database on the internet. ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        }),
                        ' Kept up to date every hour.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'my-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'lead', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBar__["a" /* default */], { term: this.props.searchTerm, onSearch: this.props.onSearch, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Button"],
                                { color: 'danger', onClick: this.toggle, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                },
                                'Get Weekly Job Notifications'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Modal"],
                                { isOpen: this.state.isModalOpen, toggle: this.toggle, className: this.props.className, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5_reactstrap__["ModalHeader"],
                                    { toggle: this.toggle, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 54
                                        }
                                    },
                                    'Get Weekly Job Notifications'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5_reactstrap__["ModalBody"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 55
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Email__["a" /* default */], { expanded: true, noBackground: true, hideTitle: true, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 56
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5_reactstrap__["ModalFooter"],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 58
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_5_reactstrap__["Button"],
                                        { color: 'primary', onClick: this.toggle, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 59
                                            }
                                        },
                                        'Close'
                                    )
                                )
                            )
                        )
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

/***/ "./components/Leadline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tag__ = __webpack_require__("./components/Tag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons__ = __webpack_require__("feather-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_feather_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Leadline.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Leadline = function (_Component) {
    _inherits(Leadline, _Component);

    function Leadline(props) {
        _classCallCheck(this, Leadline);

        return _possibleConstructorReturn(this, (Leadline.__proto__ || Object.getPrototypeOf(Leadline)).call(this, props));
    }

    _createClass(Leadline, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_2_feather_icons___default.a.replace();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                search = _props.search,
                tags = _props.tags,
                count = _props.count;

            var leadLine = void 0,
                tagjsx = [];

            if (tags) {
                tagjsx = tags.split(',').map(function (t) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tag__["a" /* default */], { name: t, key: t, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    });
                });
            }

            var resetBtn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'reset', onClick: function onClick() {
                        _this2.props.onSearch('');
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { 'data-feather': 'x-circle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                'Reset filters'
            );

            if (!search && !tags) {
                leadLine = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        },
                        'Showing ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Badge"],
                            { color: "primary", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            },
                            count,
                            ' remote jobs'
                        ),
                        ' across all categories and employers'
                    )
                );
            } else if (search && !tags) {
                leadLine = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        },
                        'Showing ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Badge"],
                            { color: "primary", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            count,
                            ' remote jobs'
                        ),
                        ' related to ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'term', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 40
                                }
                            },
                            search
                        )
                    ),
                    resetBtn
                );
            } else if (search && tags) {
                leadLine = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        },
                        'Showing ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Badge"],
                            { color: "primary", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            },
                            count,
                            ' remote jobs'
                        ),
                        ' that match ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'term', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            },
                            search
                        ),
                        ' with tags ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            }
                        }),
                        ' ',
                        tagjsx
                    ),
                    resetBtn
                );
            } else if (!search && tags) {
                leadLine = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h5',
                        { className: 'title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 61
                            }
                        },
                        'Showing ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Badge"],
                            { color: "primary", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            },
                            count,
                            ' remote jobs'
                        ),
                        ' with tags ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        }),
                        '  ',
                        tagjsx
                    ),
                    resetBtn
                );
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'section',
                { className: 'app-leadline', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                },
                leadLine
            );
        }
    }]);

    return Leadline;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Leadline);

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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-input form-control mr-sm-2", { 'form-control-lg': !isSmall }), type: 'search', placeholder: 'Search for a job...', value: this.state.searchTerm, onChange: function onChange(e) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons__ = __webpack_require__("feather-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_feather_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_tags__ = __webpack_require__("./connections/tags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__connections_tags__);
var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/components/Tag.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Tag = function (_Component) {
    _inherits(Tag, _Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));
    }

    _createClass(Tag, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __WEBPACK_IMPORTED_MODULE_2_feather_icons___default.a.replace();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: {
                        pathname: '/',
                        query: { tags: this.props.name }
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'job-tag badge', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { 'data-feather': __WEBPACK_IMPORTED_MODULE_3__connections_tags___default.a[this.props.name].icon, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'job-tag-name', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        this.props.name
                    )
                )
            );
        }
    }]);

    return Tag;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, exports, __webpack_require__) {

var env = "development";
var config = void 0;
if (env === 'production') {
    config = {
        host: 'https://remote-job-lists.herokuapp.com'
    };
} else [config = {
    host: 'http://localhost:3000'
}];

module.exports = config;

/***/ }),

/***/ "./connections/tags.js":
/***/ (function(module, exports) {



var tags = {
    'web': {
        icon: 'chrome',
        keywords: ['javascript', 'css', 'html', 'react', 'angular', 'full stack', 'seo']
    },
    'backend': {
        icon: 'server',
        keywords: ['php', 'java', 'c++', 'ruby', 'ror', 'nodejs', 'full stack']
    },
    'mobile': {
        icon: 'smartphone',
        keywords: ['ios', 'android', 'java', 'objective c', 'swift']
    },
    'engineering': {
        icon: 'box',
        keywords: ['engineer', 'developer']
    },
    'networking': {
        icon: 'radio',
        keywords: ['lan', 'wifi', 'tcp', 'devops']
    },
    'management': {
        icon: 'user',
        keywords: ['project manager', 'product manager', 'supervisor', 'growth', 'scrum', 'agile', 'team lead', 'manager']
    },
    'healthcare': {
        icon: 'activity',
        keywords: ['pharmacy', 'health', 'therapist', 'social worker', 'nurse', 'medical', 'care']
    },
    'quality assurance': {
        icon: 'check-circle',
        keywords: ['quality', 'qa']
    },
    'customer service': {
        icon: 'shield',
        keywords: ['customer', 'representative', 'service']
    },
    'media': {
        icon: 'film',
        keywords: ['video', 'audio', 'pr', 'public relations', 'visual', 'news', 'entertainment', 'writer', 'script']
    },
    'finance': {
        icon: 'briefcase',
        keywords: ['cash', 'accounting', 'accountant', 'investment', 'payroll', 'billable', 'analyst', 'underwriter', 'financial', 'finance', 'mortgage', 'loan', 'appraiser']
    },
    'sales': {
        icon: 'dollar-sign',
        keywords: ['sales', 'business', 'advertising', 'ads', 'account executive', 'account']
    },
    'design': {
        icon: 'image',
        keywords: ['design', 'designer', 'graphic', 'graphics', 'graphical', 'animation', 'logo', 'illustrator', 'arts', 'art', 'sculpture', 'creative', 'digital']
    },
    'administrative': {
        icon: 'message-circle',
        keywords: ['administrative', 'assistant']
    },
    'education': {
        icon: 'award',
        keywords: ['learning', 'teacher', 'college', 'trainer', 'professor', 'educational', 'education', 'educator']
    }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_JobTitle__ = __webpack_require__("./components/JobTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Jumbotron__ = __webpack_require__("./components/Jumbotron.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Email__ = __webpack_require__("./components/Email.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Categories__ = __webpack_require__("./components/Categories.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_Tag__ = __webpack_require__("./components/Tag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_Leadline__ = __webpack_require__("./components/Leadline.js");

var _jsxFileName = '/Applications/MAMP/code/sandbox/remote-job-lists/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var LIMIT = 20;

var BASE_URL = __WEBPACK_IMPORTED_MODULE_9__config___default.a.host;

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
                var searchTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.url.query.tags;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
                                    pathname: '/',
                                    query: {
                                        search: searchTerm,
                                        tags: searchTags
                                    }
                                });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x2) {
                return _ref.apply(this, arguments);
            };
        }();

        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var _props$url$query = this.props.url.query,
                search = _props$url$query.search,
                tags = _props$url$query.tags;

            var jobCards = this.props.jobs.map(function (job, i) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_JobTitle__["a" /* default */], { job: job, key: 'job-item-' + i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                });
            });

            var emailJsx = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_Email__["a" /* default */], { expanded: true, defaultValue: this.props.url.query.search || null, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            });

            // insert the email in line 5.

            jobCards.splice(5, 0, emailJsx);

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Header__["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Jumbotron__["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'section',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__components_Leadline__["a" /* default */], { search: search, tags: tags, count: this.props.count, onSearch: this.onSearch, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_Categories__["a" /* default */], { selectedCategories: this.props.url.query.tags, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-12', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'job-list', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 86
                                    }
                                },
                                jobCards
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', { style: { margin: '30px 0' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_paginate___default.a, {
                        pageCount: Math.ceil(this.props.count / 50),
                        marginPagesDisplayed: 2,
                        onPageChange: this.onPageChange,
                        pageRangeDisplayed: 3,
                        containerClassName: "pagination justify-content-center",
                        pageClassName: "page-item",
                        activeClassName: "active",
                        pageLinkClassName: "page-link",
                        previousClassName: "page-link",
                        breakClassName: "page-link disabled",
                        nextClassName: "page-link",

                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98
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
                        return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(BASE_URL + '/api/jobs?' + __WEBPACK_IMPORTED_MODULE_7_query_string___default.a.stringify(query));

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

    return function (_x3) {
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

/***/ "feather-icons":
/***/ (function(module, exports) {

module.exports = require("feather-icons");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/forEach":
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),

/***/ "lodash/remove":
/***/ (function(module, exports) {

module.exports = require("lodash/remove");

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