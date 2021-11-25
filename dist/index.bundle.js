(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button/Button.module.css":
/*!*************************************************!*\
  !*** ./src/components/Button/Button.module.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"Button-module--button"});

/***/ }),

/***/ "./src/styled-props/StyledProps.css":
/*!******************************************!*\
  !*** ./src/styled-props/StyledProps.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"border":"StyledProps--border"});

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_props_StyledProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled-props/StyledProps */ "./src/styled-props/StyledProps.ts");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.css */ "./src/components/Button/Button.module.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var Button = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, __assign({}, (0,_styled_props_StyledProps__WEBPACK_IMPORTED_MODULE_2__.omitStyledProps)(props), { className: (0,_styled_props_StyledProps__WEBPACK_IMPORTED_MODULE_2__.styledClasses)(props, _Button_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].button) })));
};


/***/ }),

/***/ "./src/styled-props/StyledProps.ts":
/*!*****************************************!*\
  !*** ./src/styled-props/StyledProps.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styledClasses": () => (/* binding */ styledClasses),
/* harmony export */   "omitStyledProps": () => (/* binding */ omitStyledProps)
/* harmony export */ });
/* harmony import */ var _StyledProps_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyledProps.css */ "./src/styled-props/StyledProps.css");

var PropsList = [
    'width',
    'height',
    'margin',
    'padding',
    'font',
    'inline',
    'color',
    'background',
    'border',
    'flex',
    'style',
    'spacing',
];
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}
var styledClasses = function (props) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    var classNames = new Set(classes);
    classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"].main);
    classNames.add(props.className || '');
    Object.keys(props).forEach(function (name) {
        if (!PropsList.includes(name)) {
            return;
        }
        // Add the main css class of the prop. Ex: props.flex => css.flex
        classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"][name]);
        // Add the actual value class of the props. Ex: props.border="top" => css.['border-top']
        var value = props[name];
        if (Array.isArray(value)) {
            // Prop is passed as array, like `border`. Ex: border={['top', 'bottom']}
            value.forEach(function (val) { return classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"][name + "-" + val]); });
        }
        else if (isObject(value)) {
            // Prop is passed as object, like `flex`
            // flex={{ inline: true, align: 'center-center', distribution: 'space-between' }}
            Object.entries(value).forEach(function (_a) {
                var prop = _a[0], val = _a[1];
                classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"][name + "-" + prop]); // 'flex-align'
                classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"][name + "-" + prop + "-" + val]); // 'flex-align-center-center'
            });
        }
        else {
            classNames.add(_StyledProps_css__WEBPACK_IMPORTED_MODULE_0__["default"][name + "-" + value]);
        }
    });
    return Array.from(classNames)
        .filter(function (e) { return !!e; })
        .join(' ');
};
function assignStyleProp(props, style) {
    var _style = {};
    if (props.width) {
        _style['width'] = props.width;
    }
    if (props.height) {
        _style.height = props.height;
    }
    return _style.width || _style.height ? Object.assign(style || {}, _style) : style;
}
/** Return all props that are not styled props */
function omitStyledProps(props) {
    var ignoredProps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ignoredProps[_i - 1] = arguments[_i];
    }
    return Object.keys(props)
        .filter(function (key) {
        return props[key] !== undefined &&
            !PropsList.includes(key) &&
            !ignoredProps.includes(key);
    })
        .reduce(function (obj, key) {
        obj[key] = props[key];
        return obj;
    }, {
        style: assignStyleProp(props, props.style),
    });
}


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Button/Button */ "./src/components/Button/Button.tsx");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUMzQyxDQUNGO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7QUM5SUQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbW92aWVzVXAvdWljb3JlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AbW92aWVzVXAvdWljb3JlLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzP2ZmZjIiLCJ3ZWJwYWNrOi8vQG1vdmllc1VwL3VpY29yZS8uL3NyYy9zdHlsZWQtcHJvcHMvU3R5bGVkUHJvcHMuY3NzIiwid2VicGFjazovL0Btb3ZpZXNVcC91aWNvcmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vQG1vdmllc1VwL3VpY29yZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL0Btb3ZpZXNVcC91aWNvcmUvLi9zcmMvc3R5bGVkLXByb3BzL1N0eWxlZFByb3BzLnRzIiwid2VicGFjazovL0Btb3ZpZXNVcC91aWNvcmUvZXh0ZXJuYWwgY29tbW9uanMgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vQG1vdmllc1VwL3VpY29yZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQG1vdmllc1VwL3VpY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbW92aWVzVXAvdWljb3JlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0Btb3ZpZXNVcC91aWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Btb3ZpZXNVcC91aWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbW92aWVzVXAvdWljb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQG1vdmllc1VwL3VpY29yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJidXR0b25cIjpcIkJ1dHRvbi1tb2R1bGUtLWJ1dHRvblwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJvcmRlclwiOlwiU3R5bGVkUHJvcHMtLWJvcmRlclwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiBhcyBBQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7XG4gIHN0eWxlZENsYXNzZXMsXG4gIG9taXRTdHlsZWRQcm9wcyxcbiAgU3R5bGVkUHJvcHMsXG59IGZyb20gJy4uLy4uL3N0eWxlZC1wcm9wcy9TdHlsZWRQcm9wcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLmNzcydcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgU3R5bGVkUHJvcHMge1xuICAvKiogY2xhc3NOYW1lIHRvIGJlIGFwcGVuZGVkIHRvIGRlZmF1bHQgY2xhc3NOYW1lICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuXG4gIC8qKiBDYW4gYmUgc2V0IHRvIHByaW1hcnkgZ2hvc3QgZGFzaGVkIGxpbmsgdGV4dCBkZWZhdWx0ICovXG4gIHR5cGU/OiAncHJpbWFyeScgfCAnZ2hvc3QnIHwgJ2Rhc2hlZCcgfCAnbGluaycgfCAndGV4dCcgfCAnZGVmYXVsdCdcbn1cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QUJ1dHRvblxuICAgICAgey4uLm9taXRTdHlsZWRQcm9wcyhwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlZENsYXNzZXMocHJvcHMsIHN0eWxlcy5idXR0b24pfVxuICAgIC8+XG4gIClcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IFNwYWNpbmcgfSBmcm9tICcuLi9jb3JlL1NwYWNpbmcnXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL2NvcmUvQ29sb3InXG5pbXBvcnQgeyBLVk8gfSBmcm9tICcuLi9jb3JlL1R5cGVzJ1xuaW1wb3J0IHsgRmxleFByb3BzIH0gZnJvbSAnLi9mbGV4L0ZsZXhQcm9wcydcbmltcG9ydCB7IEJvcmRlclByb3BzIH0gZnJvbSAnLi9ib3JkZXIvQm9yZGVyUHJvcHMnXG5pbXBvcnQgeyBGb250U2l6ZSwgRm9udFByb3BzIH0gZnJvbSAnLi9mb250L0ZvbnRQcm9wcydcbmltcG9ydCB7IFBhZGRpbmdQcm9wcyB9IGZyb20gJy4vcGFkZGluZy9QYWRkaW5nUHJvcHMnXG5pbXBvcnQgeyBNYXJnaW5Qcm9wcyB9IGZyb20gJy4vbWFyZ2luL01hcmdpblByb3BzJ1xuaW1wb3J0IGNzcyBmcm9tICcuL1N0eWxlZFByb3BzLmNzcydcblxuLyoqXG4gKiBTdHlsZWQgUHJvcHM6IERlZmluZSByZXVzYWJsZSBzdHlsZXMgYWNyb3NzIGNvbXBvbmVudHMgdXNpbmcgcHJvcHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkUHJvcHMge1xuICAvKiogQ29tcG9uZW50IHdpZHRoICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG5cbiAgLyoqIENvbXBvbmVudCBoZWlnaHQqL1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXJcblxuICAvKiogQ29tcG9uZW50IG1hcmdpbi4gVXN1YWxseSB1c2VkIGZvciBjb250YWluZXJzICovXG4gIG1hcmdpbj86IFNwYWNpbmcgfCBNYXJnaW5Qcm9wc1xuXG4gIC8qKiBDb21wb25lbnQgcGFkZGluZy4gVXN1YWxseSB1c2VkIGZvciBjb250YWluZXJzICovXG4gIHBhZGRpbmc/OiBTcGFjaW5nIHwgUGFkZGluZ1Byb3BzXG5cbiAgLyoqIENvbXBvbmVudCBmb250IHNpemUgKi9cbiAgZm9udD86IEZvbnRTaXplIHwgRm9udFByb3BzXG5cbiAgLyoqIFJlbmRlciBjb21wb25lbnQgYXMgaW5saW5lIGJsb2NrICovXG4gIGlubGluZT86IGJvb2xlYW5cblxuICAvKiogVGV4dCBjb2xvciAqL1xuICBjb2xvcj86IENvbG9yXG5cbiAgLyoqIEJhY2tncm91bmQgY29sb3IgKi9cbiAgYmFja2dyb3VuZD86IENvbG9yXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBib3JkZXIuIFN1cHBvcnQgYm9vbGVhbiAoZGVmYXVsdCAxcHggZ3JleSBzb2xpZCkgb3IgQm9yZGVyUHJvcHNcbiAgICogIGJvcmRlcj17dHJ1ZX1cbiAgICogIGJvcmRlcj17eyB0b3A6IHRydWUsIGNvbG9yOiBDb2xvci5HUkVFTl9BQ0hTIH19XG4gICAqL1xuICBib3JkZXI/OiBib29sZWFuIHwgQm9yZGVyUHJvcHNcblxuICAvKiogQ29tcG9uZW50IGZsZXggbGF5b3V0ICovXG4gIGZsZXg/OiBib29sZWFuIHwgRmxleFByb3BzXG5cbiAgLyoqIE9wdGlvbmFsIGNsYXNzIG5hbWUgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb3BzTGlzdCA9IFtcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gICdtYXJnaW4nLFxuICAncGFkZGluZycsXG4gICdmb250JyxcbiAgJ2lubGluZScsXG4gICdjb2xvcicsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JvcmRlcicsXG4gICdmbGV4JyxcbiAgJ3N0eWxlJyxcbiAgJ3NwYWNpbmcnLFxuXVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3Rcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlZENsYXNzZXMgPSAocHJvcHM6IFN0eWxlZFByb3BzLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBuZXcgU2V0KGNsYXNzZXMpXG5cbiAgY2xhc3NOYW1lcy5hZGQoY3NzLm1haW4pXG4gIGNsYXNzTmFtZXMuYWRkKHByb3BzLmNsYXNzTmFtZSB8fCAnJylcblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAoIVByb3BzTGlzdC5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIEFkZCB0aGUgbWFpbiBjc3MgY2xhc3Mgb2YgdGhlIHByb3AuIEV4OiBwcm9wcy5mbGV4ID0+IGNzcy5mbGV4XG4gICAgY2xhc3NOYW1lcy5hZGQoY3NzW25hbWVdKVxuXG4gICAgLy8gQWRkIHRoZSBhY3R1YWwgdmFsdWUgY2xhc3Mgb2YgdGhlIHByb3BzLiBFeDogcHJvcHMuYm9yZGVyPVwidG9wXCIgPT4gY3NzLlsnYm9yZGVyLXRvcCddXG4gICAgY29uc3QgdmFsdWUgPSAocHJvcHMgYXMgS1ZPKVtuYW1lXVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAvLyBQcm9wIGlzIHBhc3NlZCBhcyBhcnJheSwgbGlrZSBgYm9yZGVyYC4gRXg6IGJvcmRlcj17Wyd0b3AnLCAnYm90dG9tJ119XG4gICAgICB2YWx1ZS5mb3JFYWNoKHZhbCA9PiBjbGFzc05hbWVzLmFkZChjc3NbYCR7bmFtZX0tJHt2YWx9YF0pKVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAvLyBQcm9wIGlzIHBhc3NlZCBhcyBvYmplY3QsIGxpa2UgYGZsZXhgXG4gICAgICAvLyBmbGV4PXt7IGlubGluZTogdHJ1ZSwgYWxpZ246ICdjZW50ZXItY2VudGVyJywgZGlzdHJpYnV0aW9uOiAnc3BhY2UtYmV0d2VlbicgfX1cbiAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbcHJvcCwgdmFsXSkgPT4ge1xuICAgICAgICBjbGFzc05hbWVzLmFkZChjc3NbYCR7bmFtZX0tJHtwcm9wfWBdKSAvLyAnZmxleC1hbGlnbidcbiAgICAgICAgY2xhc3NOYW1lcy5hZGQoY3NzW2Ake25hbWV9LSR7cHJvcH0tJHt2YWx9YF0pIC8vICdmbGV4LWFsaWduLWNlbnRlci1jZW50ZXInXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzLmFkZChjc3NbYCR7bmFtZX0tJHt2YWx1ZX1gXSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIEFycmF5LmZyb20oY2xhc3NOYW1lcylcbiAgICAuZmlsdGVyKGUgPT4gISFlKVxuICAgIC5qb2luKCcgJylcbn1cblxuZnVuY3Rpb24gYXNzaWduU3R5bGVQcm9wKFxuICBwcm9wczogS1ZPLFxuICBzdHlsZTogS1ZPIHwgbnVsbCB8IHVuZGVmaW5lZFxuKTogS1ZPIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IF9zdHlsZTogS1ZPID0ge31cblxuICBpZiAocHJvcHMud2lkdGgpIHtcbiAgICBfc3R5bGVbJ3dpZHRoJ10gPSBwcm9wcy53aWR0aFxuICB9XG4gIGlmIChwcm9wcy5oZWlnaHQpIHtcbiAgICBfc3R5bGUuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0XG4gIH1cblxuICByZXR1cm4gX3N0eWxlLndpZHRoIHx8IF9zdHlsZS5oZWlnaHQgPyBPYmplY3QuYXNzaWduKHN0eWxlIHx8IHt9LCBfc3R5bGUpIDogc3R5bGVcbn1cblxuLyoqIFJldHVybiBhbGwgcHJvcHMgdGhhdCBhcmUgbm90IHN0eWxlZCBwcm9wcyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9taXRTdHlsZWRQcm9wcyhwcm9wczogS1ZPLCAuLi5pZ25vcmVkUHJvcHM6IHN0cmluZ1tdKTogS1ZPIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKVxuICAgIC5maWx0ZXIoXG4gICAgICBrZXkgPT5cbiAgICAgICAgcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICFQcm9wc0xpc3QuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICAhaWdub3JlZFByb3BzLmluY2x1ZGVzKGtleSlcbiAgICApXG4gICAgLnJlZHVjZShcbiAgICAgIChvYmo6IEtWTywga2V5KSA9PiB7XG4gICAgICAgIG9ialtrZXldID0gcHJvcHNba2V5XVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdHlsZTogYXNzaWduU3R5bGVQcm9wKHByb3BzLCBwcm9wcy5zdHlsZSksXG4gICAgICB9XG4gICAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJ1xuXG5leHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==