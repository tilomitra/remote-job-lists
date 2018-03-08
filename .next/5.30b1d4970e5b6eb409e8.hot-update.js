webpackHotUpdate(5,{

/***/ "./components/Email.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js";


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();



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

var _default = Email;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Email, "Email", "/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js");
    reactHotLoader.register(_default, "default", "/Applications/MAMP/code/sandbox/remote-job-lists/components/Email.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.30b1d4970e5b6eb409e8.hot-update.js.map