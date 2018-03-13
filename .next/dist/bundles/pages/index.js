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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
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
                { fixed: 'top', color: 'light', light: true, expand: 'md', className: 'justify-content-between' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarBrand"],
                    { href: '/' },
                    'Remote Job Lists'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarToggler"], { onClick: this.toggle }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Collapse"],
                    { isOpen: this.state.isOpen, navbar: true },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"],
                        { className: 'ml-auto', navbar: true },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBar__["a" /* default */], { isSmall: true, term: this.props.searchTerm || '', onSearch: this.props.onSearch })
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
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
                { className: 'form-inline app-search' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-input form-control mr-sm-2", { 'form-control-lg': !isSmall }), type: 'search', placeholder: 'Enter a skill like \'software\' or \'design\'', value: this.state.searchTerm, onChange: function onChange(e) {
                        _this2.setState({ searchTerm: e.currentTarget.value });
                    } }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-btn btn btn-primary my-2 my-sm-0", { 'form-control-lg': !isSmall }), type: 'submit', onClick: this.onSearchClick },
                    isSmall ? 'Search' : 'Search Remote Jobs'
                )
            );
        }
    }]);

    return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);



var Tag = function Tag(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: {
                pathname: '/',
                query: { search: props.name }
            } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'job-tag badge' },
            props.name
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var ApplyButton = function ApplyButton(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "card" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-body" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                { className: "btn btn-primary btn-block job-apply-button", href: props.job.link },
                "Apply to this position"
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ApplyButton);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer.js



var styles = {
    footer: {
        background: 'url(data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Q\u2026kiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat',
        backgroundSize: 'cover',
        height: 500
    }
};

var Footer_Footer = function Footer() {
    return external__react__default.a.createElement(
        'div',
        { style: styles.footer },
        'Footer goes here.'
    );
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./assets/css/app.css
var app = __webpack_require__(13);
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./components/Layout.js






var Layout_Layout = function Layout(props) {
    return external__react__default.a.createElement(
        'div',
        { className: 'app' },
        external__react__default.a.createElement(
            'section',
            null,
            props.children
        ),
        external__react__default.a.createElement(components_Footer, null)
    );
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Tag__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ApplyButton__ = __webpack_require__(9);
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
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Tag__["a" /* default */], { name: t, key: 'tag-' + t + '-' + i });
            });

            //render the expanded view
            if (this.props.expanded) {
                contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        { className: 'job-title job-title-expanded' },
                        this.props.job.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        { className: 'job-title-lead' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'muted' },
                            'at'
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'job-company' },
                            this.props.job.company
                        )
                    )
                );
            }
            // Render the compact view
            else {
                    contents = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'job-list-item' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-6' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                    { prefetch: true, as: '/job/' + this.props.job.id, href: '/job?id=' + this.props.job.id },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: 'job-title job-title-compact' },
                                        this.props.job.title,
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'muted' },
                                            'at'
                                        ),
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'job-company' },
                                            this.props.job.company
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'muted' },
                                    'Published'
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.props.job.publishDate).startOf('day').fromNow()
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-4' },
                                tagList
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-2 text-right job-list-item-apply' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'btn job-apply-button', href: this.props.job.link },
                                    'Apply'
                                )
                            )
                        )
                    );
                }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'article',
                null,
                contents
            );
        }
    }]);

    return JobTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (JobTitle);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-typing-animation");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(10);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(5);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(6);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "react-paginate"
var external__react_paginate_ = __webpack_require__(21);
var external__react_paginate__default = /*#__PURE__*/__webpack_require__.n(external__react_paginate_);

// EXTERNAL MODULE: external "query-string"
var external__query_string_ = __webpack_require__(22);
var external__query_string__default = /*#__PURE__*/__webpack_require__.n(external__query_string_);

// EXTERNAL MODULE: external "react-typing-animation"
var external__react_typing_animation_ = __webpack_require__(15);
var external__react_typing_animation__default = /*#__PURE__*/__webpack_require__.n(external__react_typing_animation_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(2);

// EXTERNAL MODULE: ./components/JobTitle.js
var JobTitle = __webpack_require__(14);

// EXTERNAL MODULE: ./components/SearchBar.js
var SearchBar = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Jumbotron.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Jumbotron_Jumbotron = function (_Component) {
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
            return external__react__default.a.createElement(
                'div',
                { className: 'jumbotron jumbotron-fluid app-jumbotron', style: { marginTop: 60 } },
                external__react__default.a.createElement(
                    'div',
                    { className: 'container' },
                    external__react__default.a.createElement(
                        'h1',
                        { className: 'display-4' },
                        'Work Remotely as',
                        external__react__default.a.createElement(
                            external__react_typing_animation__default.a,
                            null,
                            external__react__default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing' },
                                'a Software Engineer'
                            ),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Backspace, { count: 50, delay: 2000 }),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Delay, { ms: 500 }),
                            external__react__default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing' },
                                'an Accountant'
                            ),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Backspace, { count: 50, delay: 2000 }),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Delay, { ms: 500 }),
                            external__react__default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing' },
                                'a Graphic Designer'
                            ),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Backspace, { count: 50, delay: 2000 }),
                            external__react__default.a.createElement(external__react_typing_animation__default.a.Delay, { ms: 500 }),
                            external__react__default.a.createElement(
                                'span',
                                { className: 'app-jumbotron-typing' },
                                'an Android Developer'
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        'p',
                        { className: 'lead' },
                        'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                    ),
                    external__react__default.a.createElement('hr', { className: 'my-4' }),
                    external__react__default.a.createElement(
                        'p',
                        null,
                        'It uses utility classes for typography and spacing to space content out within the larger container.'
                    ),
                    external__react__default.a.createElement(
                        'p',
                        { className: 'lead' },
                        external__react__default.a.createElement(SearchBar["a" /* default */], { term: this.props.searchTerm, onSearch: this.props.onSearch })
                    )
                )
            );
        }
    }]);

    return Jumbotron;
}(external__react_["Component"]);

/* harmony default export */ var components_Jumbotron = (Jumbotron_Jumbotron);
// EXTERNAL MODULE: external "react-select"
var external__react_select_ = __webpack_require__(23);
var external__react_select__default = /*#__PURE__*/__webpack_require__.n(external__react_select_);

// EXTERNAL MODULE: ./connections/tags.js
var tags = __webpack_require__(24);
var tags_default = /*#__PURE__*/__webpack_require__.n(tags);

// EXTERNAL MODULE: external "lodash/forEach"
var forEach_ = __webpack_require__(25);
var forEach__default = /*#__PURE__*/__webpack_require__.n(forEach_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(7);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.css
var react_select = __webpack_require__(26);
var react_select_default = /*#__PURE__*/__webpack_require__.n(react_select);

// CONCATENATED MODULE: ./components/Email.js
var Email__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function Email__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Email__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Email__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Email_Email = function (_Component) {
    Email__inherits(Email, _Component);

    function Email(props) {
        Email__classCallCheck(this, Email);

        var _this = Email__possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, props));

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

    Email__createClass(Email, [{
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
            forEach__default()(tags_default.a, function (keywords, tag) {
                options.push({ label: tag, value: tag });
            });

            var header = void 0;

            if (didUserSearch) {
                header = external__react__default.a.createElement(
                    'h5',
                    { className: 'card-title' },
                    'Get notified when new ',
                    external__react__default.a.createElement(
                        'span',
                        { className: 'term' },
                        this.props.defaultValue
                    ),
                    ' positions come out'
                );
            } else {
                header = external__react__default.a.createElement(
                    'h5',
                    { className: 'card-title' },
                    'Get Daily Job Listings'
                );
            }

            return external__react__default.a.createElement(
                'div',
                { className: 'card app-email' },
                external__react__default.a.createElement(
                    'div',
                    { className: 'card-body' },
                    external__react__default.a.createElement(
                        'h5',
                        { className: 'card-title' },
                        header
                    ),
                    external__react__default.a.createElement(
                        'form',
                        null,
                        external__react__default.a.createElement(
                            'div',
                            { className: 'form-row align-items-center' },
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-4 my-1' },
                                external__react__default.a.createElement(
                                    'label',
                                    { className: 'mr-sm-2' },
                                    'Email me at'
                                ),
                                external__react__default.a.createElement('input', { type: 'email', className: 'form-control', placeholder: 'Enter your email', value: this.state.email, onChange: this.handleEmailChange })
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-6 my-1' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    'with new listings related to'
                                ),
                                external__react__default.a.createElement(external__react_select__default.a, {
                                    closeOnSelect: !stayOpen,
                                    disabled: disabled,
                                    multi: true,
                                    onChange: this.handleSelectChange,
                                    options: options,
                                    placeholder: 'You can type "design", "engineering", or more...',
                                    removeSelected: removeSelected,
                                    rtl: rtl,
                                    simpleValue: true,
                                    value: value
                                })
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-2 my-1' },
                                external__react__default.a.createElement(
                                    'button',
                                    {
                                        className: 'btn btn-success',
                                        style: { marginTop: 35 },
                                        onClick: this.onSubmit
                                    },
                                    'Subscribe'
                                )
                            )
                        ),
                        external__react__default.a.createElement(
                            'small',
                            { className: 'form-text text-muted' },
                            'The tags that you specify will be used to customize listings for your email. You can unsubscribe anytime.'
                        )
                    )
                )
            );
        }
    }]);

    return Email;
}(external__react_["Component"]);

/* harmony default export */ var components_Email = (Email_Email);
// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var LIMIT = 20;

var FIND_JOBS_URL = 'http://localhost:3000/api/jobs';

var pages_Index = function (_Component) {
    pages__inherits(Index, _Component);

    function Index(props) {
        var _this2 = this;

        pages__classCallCheck(this, Index);

        var _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.onPageChange = function (page) {
            var selected = page.selected;

            router__default.a.push({
                pathname: '/',
                query: {
                    limit: LIMIT,
                    offset: selected * LIMIT,
                    search: _this.props.url.query.search
                }
            });
        };

        _this.onSearch = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(searchTerm) {
                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                router__default.a.push({
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

    pages__createClass(Index, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var jobCards = this.props.jobs.map(function (job, i) {
                return external__react__default.a.createElement(JobTitle["a" /* default */], { job: job, key: 'job-item-' + i });
            });

            var leadLine = external__react__default.a.createElement(
                'section',
                { className: 'text-center job-list-lead' },
                external__react__default.a.createElement(
                    'h5',
                    { className: 'title' },
                    'Showing ',
                    external__react__default.a.createElement(
                        'span',
                        { className: 'count' },
                        this.props.count,
                        ' jobs'
                    ),
                    ' across all categories'
                )
            );

            if (this.props.url.query.search) {
                leadLine = external__react__default.a.createElement(
                    'section',
                    { className: 'text-center job-list-lead' },
                    external__react__default.a.createElement(
                        'h5',
                        { className: 'title' },
                        'Showing ',
                        external__react__default.a.createElement(
                            'span',
                            { className: 'count' },
                            this.props.count,
                            ' jobs'
                        ),
                        ' related to ',
                        external__react__default.a.createElement(
                            'span',
                            { className: 'term' },
                            this.props.url.query.search
                        ),
                        '.'
                    ),
                    external__react__default.a.createElement(
                        'a',
                        { className: 'reset', onClick: function onClick() {
                                _this3.onSearch('');
                            } },
                        'Click to reset filters.'
                    )
                );
            }

            return external__react__default.a.createElement(
                Layout["a" /* default */],
                null,
                external__react__default.a.createElement(Header["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch }),
                external__react__default.a.createElement(components_Jumbotron, { searchTerm: this.props.url.query.search, onSearch: this.onSearch }),
                external__react__default.a.createElement(
                    'section',
                    { className: 'container' },
                    leadLine,
                    external__react__default.a.createElement(components_Email, { defaultValue: this.props.url.query.search || null }),
                    external__react__default.a.createElement(
                        'div',
                        { className: 'job-list' },
                        jobCards
                    ),
                    external__react__default.a.createElement('hr', { style: { margin: '30px 0' } }),
                    external__react__default.a.createElement(external__react_paginate__default.a, {
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
                        nextClassName: "page-link"

                    })
                )
            );
        }
    }]);

    return Index;
}(external__react_["Component"]);

pages_Index.getInitialProps = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2(_ref2) {
        var query = _ref2.query;
        var res, data;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return external__isomorphic_unfetch__default()(FIND_JOBS_URL + '?' + external__query_string__default.a.stringify(query));

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

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);