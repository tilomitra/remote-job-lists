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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_feather_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_feather_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_tags__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connections_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__connections_tags__);
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
                    } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'job-tag badge' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { 'data-feather': __WEBPACK_IMPORTED_MODULE_3__connections_tags___default.a[this.props.name].icon }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'job-tag-name' },
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var env = "production";
var config = void 0;
if (env === 'production') {
    config = {
        host: 'http://remote-job-lists.herokuapp.com'
    };
} else [config = {
    host: 'http://localhost:3000'
}];

module.exports = config;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(15);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(6);
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("app-search-input form-control mr-sm-2", { 'form-control-lg': !isSmall }), type: 'search', placeholder: 'Search for a job...', value: this.state.searchTerm, onChange: function onChange(e) {
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("feather-icons");

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(4);

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
var app = __webpack_require__(16);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Tag__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ApplyButton__ = __webpack_require__(13);
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
                                    { className: 'btn job-apply-button', href: this.props.job.link, style: { fontSize: '1rem' } },
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-typing-animation");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(8);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(9);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(10);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(11);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: external "react-paginate"
var external__react_paginate_ = __webpack_require__(25);
var external__react_paginate__default = /*#__PURE__*/__webpack_require__.n(external__react_paginate_);

// EXTERNAL MODULE: external "query-string"
var external__query_string_ = __webpack_require__(26);
var external__query_string__default = /*#__PURE__*/__webpack_require__.n(external__query_string_);

// EXTERNAL MODULE: external "react-typing-animation"
var external__react_typing_animation_ = __webpack_require__(18);
var external__react_typing_animation__default = /*#__PURE__*/__webpack_require__.n(external__react_typing_animation_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(3);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(14);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(4);

// EXTERNAL MODULE: ./components/JobTitle.js
var JobTitle = __webpack_require__(17);

// EXTERNAL MODULE: ./components/SearchBar.js
var SearchBar = __webpack_require__(5);

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
                        'Find your next gig by searching through the largest remote listing database on the internet. ',
                        external__react__default.a.createElement('br', null),
                        ' Updated every hour. All positions are 100% remote.'
                    ),
                    external__react__default.a.createElement('hr', { className: 'my-4' }),
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
var external__react_select_ = __webpack_require__(27);
var external__react_select__default = /*#__PURE__*/__webpack_require__.n(external__react_select_);

// EXTERNAL MODULE: ./connections/tags.js
var connections_tags = __webpack_require__(7);
var tags_default = /*#__PURE__*/__webpack_require__.n(connections_tags);

// EXTERNAL MODULE: external "lodash/forEach"
var forEach_ = __webpack_require__(19);
var forEach__default = /*#__PURE__*/__webpack_require__.n(forEach_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(6);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.css
var react_select = __webpack_require__(28);
var react_select_default = /*#__PURE__*/__webpack_require__.n(react_select);

// CONCATENATED MODULE: ./components/Email.js
var Email__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function Email__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Email__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Email__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var Email_Email = function (_Component) {
    Email__inherits(Email, _Component);

    function Email(props) {
        Email__classCallCheck(this, Email);

        var _this = Email__possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                componentState: 'is-sending'
            });

            var res = fetch(config_default.a.host + '/api/subscribe', {
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

    Email__createClass(Email, [{
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

            var options = [];
            forEach__default()(tags_default.a, function (keywords, tag) {
                options.push({ label: tag, value: tag });
            });

            var header = void 0,
                alertBox = void 0,
                subscribeBtnText = 'Receive Alerts';

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
                    'Get Weekly Job Listings'
                );
            }

            if (componentState === 'sent') {
                alertBox = external__react__default.a.createElement(
                    'div',
                    { className: 'alert alert-success' },
                    'You have successfully enabled daily job listing alerts. \uD83D\uDC4D'
                );
                subscribeBtnText = 'Daily Alerts Enabled';
            } else if (componentState === 'error') {
                alertBox = external__react__default.a.createElement(
                    'div',
                    { className: 'alert alert-danger' },
                    'There was an error when subscribing. Verify that your email address is correct, try again, or ',
                    external__react__default.a.createElement(
                        'a',
                        { href: 'https://twitter.com/tilomitra', target: '_blank' },
                        'contact me'
                    ),
                    '.'
                );
            } else if (componentState === 'is-sending') {
                subscribeBtnText = 'Loading...';
            }

            if (!isValidEmail) {
                alertBox = external__react__default.a.createElement(
                    'div',
                    { className: 'alert alert-warning' },
                    'We noticed a typo in your email address. Make sure you enter a correct email address before subscribing. \uD83D\uDE42'
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
                                external__react__default.a.createElement('input', {
                                    type: 'email',
                                    className: 'form-control',
                                    placeholder: 'Enter your email',
                                    value: this.state.email,
                                    onBlur: this.handleEmailBlur,
                                    onChange: this.handleEmailChange })
                            ),
                            external__react__default.a.createElement(
                                'div',
                                { className: 'col-sm-12 col-md-8 my-1' },
                                external__react__default.a.createElement(
                                    'label',
                                    null,
                                    'with new listings related to'
                                ),
                                external__react__default.a.createElement(external__react_select_["Creatable"], {
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
                                        onClick: this.onSubmit,
                                        disabled: componentState !== 'not-sent' || !isValidEmail
                                    },
                                    subscribeBtnText
                                )
                            )
                        ),
                        external__react__default.a.createElement(
                            'small',
                            { className: 'form-text text-muted' },
                            'If you don\'t enter any tags, we\'ll send you alerts for all job listings daily. The keywords that you specify will be used to customize listings for your email. You can unsubscribe anytime. \uD83E\uDD1D'
                        ),
                        alertBox
                    )
                )
            );
        }
    }]);

    return Email;
}(external__react_["Component"]);

/* harmony default export */ var components_Email = (Email_Email);
// EXTERNAL MODULE: external "lodash/remove"
var remove_ = __webpack_require__(29);
var remove__default = /*#__PURE__*/__webpack_require__.n(remove_);

// EXTERNAL MODULE: external "feather-icons"
var external__feather_icons_ = __webpack_require__(12);
var external__feather_icons__default = /*#__PURE__*/__webpack_require__.n(external__feather_icons_);

// CONCATENATED MODULE: ./components/Categories.js
var Categories__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function Categories__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Categories__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Categories__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Categories_Categories = function (_Component) {
    Categories__inherits(Categories, _Component);

    function Categories(props) {
        Categories__classCallCheck(this, Categories);

        var _this = Categories__possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

        _this.onCategoryClick = function (tag) {
            var selected = _this.state.selected;
            var isSelected = selected.indexOf(tag) > -1 ? true : false;

            if (isSelected) {
                remove__default()(selected, function (val) {
                    return val === tag;
                });
            } else {
                selected.push(tag);
            }

            _this.setState({ selected: selected });
            router__default.a.push({
                pathname: '/',
                query: {
                    tags: selected.join(',')
                }
            });
        };

        var selectedCategories = _this.props.selectedCategories;

        _this.state = {
            selected: selectedCategories ? selectedCategories.split(',') : []
        };
        return _this;
    }

    Categories__createClass(Categories, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            external__feather_icons__default.a.replace();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var categories = [];
            var selected = this.state.selected;


            forEach__default()(tags_default.a, function (_ref, tag) {
                var icon = _ref.icon;

                var isSelected = selected.indexOf(tag) > -1 ? true : false;
                categories.push(external__react__default.a.createElement(
                    'div',
                    {
                        className: 'col-sm-12 col-md-6',
                        key: 'category-' + tag,
                        onClick: function onClick() {
                            _this2.onCategoryClick(tag);
                        } },
                    external__react__default.a.createElement(
                        'section',
                        { className: external__classnames__default()("app-category", { selected: isSelected }) },
                        external__react__default.a.createElement('i', { 'data-feather': icon, className: 'app-category-icon' }),
                        external__react__default.a.createElement(
                            'span',
                            { className: 'app-category-tag' },
                            tag
                        )
                    )
                ));
            }, this);

            return external__react__default.a.createElement(
                'section',
                { className: 'app-categories sticky-top', style: { top: 80 } },
                external__react__default.a.createElement(
                    'h5',
                    null,
                    'Tags',
                    external__react__default.a.createElement(
                        'p',
                        { className: 'lead' },
                        'Use the tags below to filter your search.'
                    )
                ),
                external__react__default.a.createElement(
                    'div',
                    { className: 'row' },
                    categories
                )
            );
        }
    }]);

    return Categories;
}(external__react_["Component"]);

/* harmony default export */ var components_Categories = (Categories_Categories);
// EXTERNAL MODULE: ./components/Tag.js
var Tag = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Leadline.js
var Leadline__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function Leadline__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Leadline__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Leadline__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Leadline_Leadline = function (_Component) {
    Leadline__inherits(Leadline, _Component);

    function Leadline(props) {
        Leadline__classCallCheck(this, Leadline);

        return Leadline__possibleConstructorReturn(this, (Leadline.__proto__ || Object.getPrototypeOf(Leadline)).call(this, props));
    }

    Leadline__createClass(Leadline, [{
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
                    return external__react__default.a.createElement(Tag["a" /* default */], { name: t, key: t });
                });
            }

            if (!search && !tags) {
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
                            count,
                            ' remote jobs'
                        ),
                        ' across all categories and employers'
                    )
                );
            } else if (search && !tags) {
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
                            count,
                            ' jobs'
                        ),
                        ' related to ',
                        external__react__default.a.createElement(
                            'span',
                            { className: 'term' },
                            search
                        )
                    ),
                    external__react__default.a.createElement(
                        'a',
                        { className: 'reset', onClick: function onClick() {
                                _this2.props.onSearch('');
                            } },
                        'Click to reset filters.'
                    )
                );
            } else if (search && tags) {
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
                            count,
                            ' jobs'
                        ),
                        ' that match ',
                        external__react__default.a.createElement(
                            'span',
                            { className: 'term' },
                            search
                        ),
                        ' and have the tags ',
                        tagjsx
                    ),
                    external__react__default.a.createElement(
                        'a',
                        { className: 'reset', onClick: function onClick() {
                                _this2.props.onSearch('');
                            } },
                        'Click to reset filters.'
                    )
                );
            } else if (!search && tags) {
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
                            count,
                            ' jobs'
                        ),
                        ' that have the tags ',
                        tagjsx
                    ),
                    external__react__default.a.createElement(
                        'a',
                        { className: 'reset', onClick: function onClick() {
                                _this2.props.onSearch('');
                            } },
                        'Click to reset filters.'
                    )
                );
            }

            return external__react__default.a.createElement(
                'section',
                { className: 'app-leadline' },
                leadLine
            );
        }
    }]);

    return Leadline;
}(external__react_["Component"]);

/* harmony default export */ var components_Leadline = (Leadline_Leadline);
// CONCATENATED MODULE: ./pages/index.js


var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var LIMIT = 20;

var BASE_URL = config_default.a.host;

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
                var searchTags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.url.query.tags;
                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                router__default.a.push({
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

    pages__createClass(Index, [{
        key: 'render',
        value: function render() {
            var _props$url$query = this.props.url.query,
                search = _props$url$query.search,
                tags = _props$url$query.tags;

            var jobCards = this.props.jobs.map(function (job, i) {
                return external__react__default.a.createElement(JobTitle["a" /* default */], { job: job, key: 'job-item-' + i });
            });

            var emailJsx = external__react__default.a.createElement(components_Email, { defaultValue: this.props.url.query.search || null });

            // insert the email in line 5.

            jobCards.splice(5, 0, emailJsx);

            return external__react__default.a.createElement(
                Layout["a" /* default */],
                null,
                external__react__default.a.createElement(Header["a" /* default */], { searchTerm: this.props.url.query.search, onSearch: this.onSearch }),
                external__react__default.a.createElement(components_Jumbotron, { searchTerm: this.props.url.query.search, onSearch: this.onSearch }),
                external__react__default.a.createElement(
                    'section',
                    { className: 'container' },
                    external__react__default.a.createElement(components_Leadline, { search: search, tags: tags, count: this.props.count, onSearch: this.onSearch }),
                    external__react__default.a.createElement(
                        'div',
                        { className: 'row' },
                        external__react__default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-8 col-lg-9' },
                            external__react__default.a.createElement(
                                'div',
                                { className: 'job-list' },
                                jobCards
                            )
                        ),
                        external__react__default.a.createElement(
                            'div',
                            { className: 'col-sm-12 col-md-4 col-lg-3' },
                            external__react__default.a.createElement(components_Categories, { selectedCategories: this.props.url.query.tags })
                        )
                    ),
                    external__react__default.a.createElement('hr', { style: { margin: '30px 0' } }),
                    external__react__default.a.createElement(external__react_paginate__default.a, {
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
                        return external__isomorphic_unfetch__default()(BASE_URL + '/api/jobs?' + external__query_string__default.a.stringify(query));

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

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/remove");

/***/ })
/******/ ]);