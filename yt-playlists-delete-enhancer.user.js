// ==UserScript==
// @name         yt-playlists-delete-enhancer
// @description  Add a button to remove videos watched with more than X percent from watch later playlist.
// @version      1.5.8
// @author       Andrew Valleteau <avallete@student.42.fr>
// @grant        none
// @match        *://youtube.com/*
// @match        *://www.youtube.com/*
// @namespace    greasyfork-namespace-url
// @downloadURL  https://raw.githubusercontent.com/avallete/yt-playlists-delete-enhancer/gh-pages/yt-playlists-delete-enhancer.user.js
// @noframes
// @homepageURL  https://github.com/avallete/yt-playlists-delete-enhancer#readme
// @supportURL   https://github.com/avallete/yt-playlists-delete-enhancer/issues
// @run-at       document-idle
// @license      MIT
// ==/UserScript==
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transformStyleProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCorrectEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCorrectPropertyName; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
let VendorPropertyMapType;

/** @const {Object<string, !VendorPropertyMapType>} */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}




/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(19)["default"];

var assertThisInitialized = __webpack_require__(34);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(36);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 10 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
const MATCH_ALL = "all";
const MATCH_NONE = "not all";
function stylesheet(spec) {
    return spec;
}
function insert(stylesheets) {
    const fragment = document.createDocumentFragment();
    Object.entries(stylesheets).forEach(([_, sheet]) => {
        const style = document.createElement("style");
        if (sheet.id !== undefined)
            style.id = sheet.id;
        style.textContent = sheet.css;
        style.media = sheet.condition(window) ? MATCH_ALL : MATCH_NONE;
        fragment.appendChild(style);
    });
    document.documentElement.appendChild(fragment);
}
const setMediaQuery = (m) => (s) => {
    const element = document.getElementById(s.id);
    if (element !== null) {
        element.setAttribute("media", m);
    }
};
const enable = setMediaQuery(MATCH_ALL);
const disable = setMediaQuery(MATCH_NONE);


/***/ }),
/* 11 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "operation", function() { return /* binding */ operation; });
__webpack_require__.d(__webpack_exports__, "run", function() { return /* binding */ run; });

// CONCATENATED MODULE: ./node_modules/ts-type-guards/dist/is.mjs
const TYPE_GUARDS_PRIMITIVE = [isBoolean, isNumber, isString, isSymbol, isNull, isUndefined];
function isBoolean(x) {
    return typeof x === "boolean";
}
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function isSymbol(x) {
    return typeof x === "symbol";
}
function isNull(x) {
    return x === null;
}
function isUndefined(x) {
    return x === undefined;
}
function isPrimitive(x) {
    return TYPE_GUARDS_PRIMITIVE.some(f => f(x));
}
function isNonPrimitive(x) {
    return !isPrimitive(x);
}
function namedFunction(name, fun) {
    return Object.defineProperty(fun, "name", { value: name, writable: false });
}
function namedTypeGuard(creator, type, typeGuard) {
    return namedFunction(`${creator.name}(${type.name})`, typeGuard);
}
function is(type) {
    if (isPrimitive(type)) {
        return (_) => false;
    }
    return namedTypeGuard(is, type, (x) => x instanceof type);
}
function isLike(reference) {
    for (const f of TYPE_GUARDS_PRIMITIVE) {
        if (f(reference)) {
            return (x) => f(x);
        }
    }
    if (is(Array)(reference)) {
        const referenceAsArray = reference;
        return (x) => is(Array)(x) && (referenceAsArray.length > 0 ? x.every(isLike(referenceAsArray[0])) : true);
    }
    if (reference.constructor === Object) {
        return (x) => (![undefined, null].includes(x)
            &&
                Object.keys(reference).every(k => isLike(reference[k])(x[k])));
    }
    if (reference.constructor instanceof Function) {
        return is(reference.constructor);
    }
    throw new TypeError(isLike.name + ` cannot use this object as reference because it has no constructor: ` + JSON.stringify(reference));
}
//# sourceMappingURL=is.js.map
// CONCATENATED MODULE: ./node_modules/userscripter/lib/operations.mjs

const SUCCESS = undefined;
function operation(spec) {
    return spec;
}
function run(plan) {
    function recurse(operations, failures, triesLeft) {
        const lastTry = isNumber(triesLeft) && triesLeft <= 0;
        const operationsToRunNow = [];
        const remaining = [];
        const readyState = document.readyState;
        for (const o of operations) {
            const shouldRunNow = o.deferUntil === undefined || o.deferUntil(readyState);
            (shouldRunNow ? operationsToRunNow : remaining).push(o);
        }
        for (const o of operationsToRunNow) {
            const result = tryToPerform(o);
            if (result !== SUCCESS) {
                switch (result.reason) {
                    case 0:
                        lastTry ? failures.push({ result, operation: o }) : remaining.push(o);
                        break;
                    case 1:
                        failures.push({ result, operation: o });
                        break;
                }
            }
        }
        if (remaining.length > 0) {
            setTimeout(() => recurse(remaining, failures, (isNumber(triesLeft)
                ? triesLeft - 1
                : plan.tryUntil(readyState) ? plan.extraTries : undefined)), plan.interval);
        }
        else if (failures.length > 0) {
            plan.handleFailures(failures);
        }
    }
    recurse(plan.operations.filter(o => o.condition(window)), []);
}
function tryToPerform(o) {
    const dependencies = o.dependencies === undefined ? {} : o.dependencies;
    const queryResults = Object.entries(dependencies).map(([key, selector]) => ({
        key, selector, element: document.querySelector(selector),
    }));
    const missingDependencies = queryResults.filter(x => isNull(x.element));
    if (missingDependencies.length > 0) {
        return { reason: 0, dependencies: missingDependencies };
    }
    const e = queryResults.reduce((acc, x) => Object.defineProperty(acc, x.key, { value: x.element }), {});
    return fromActionResult(o.action(e));
}
function fromActionResult(r) {
    return isString(r) ? { reason: 1, message: r } : SUCCESS;
}


/***/ }),
/* 12 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS", function() { return ALWAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMCONTENTLOADED", function() { return DOMCONTENTLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
const ALWAYS = () => true;
const NEVER = () => false;
const DOMCONTENTLOADED = (state) => state !== "loading";
const LOAD = (state) => state === "complete";


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is generated from package.json with build-config-from-package-json command
// if you need to add or remove data from it, see package.json script section
// Additional details: https://github.com/avallete/userscripter-boilerplate/issues/30
const metadata_config_json_1 = __importDefault(__webpack_require__(30));
const userscriptMetadata = {
    id: metadata_config_json_1.default.name,
    name: metadata_config_json_1.default.name,
    description: metadata_config_json_1.default.description,
    version: metadata_config_json_1.default.version,
    author: metadata_config_json_1.default.author,
    homepage: metadata_config_json_1.default.homepage,
    support: metadata_config_json_1.default.bugs.url,
    hostname: 'youtube.com',
    sitename: 'youtube',
    repositoryURL: metadata_config_json_1.default.repository.url,
    license: metadata_config_json_1.default.license,
    run_at: 'document-idle',
    // Will be used to generate the downloadURL into metadata.ts
    // Make sure it match the branch where final release are pushed (see .github/workflow/deploy-gh-pages.yml)
    releaseBranch: 'gh-pages',
};
exports.default = userscriptMetadata;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MaterialComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _typeof2 = _interopRequireDefault(__webpack_require__(19));

var _ripple = __webpack_require__(64);

var _bindDecorator = __webpack_require__(23);

var _preact = __webpack_require__(0);

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var doNotRemoveProps = ['disabled'];
/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MaterialComponent, _Component);

  function MaterialComponent() {
    (0, _classCallCheck2.default)(this, MaterialComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaterialComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(MaterialComponent, [{
    key: "render",
    value: function render(props) {
      if (!this.classText) {
        this.classText = this.buildClassName(props);
      } // Fetch a VNode


      var componentProps = props;
      var userDefinedClasses = componentProps.className || componentProps.class || ''; // We delete class props and add them later in the final
      // step so every component does not need to handle user specified classes.

      if (componentProps.class) {
        delete componentProps.class;
      }

      if (componentProps.className) {
        delete componentProps.className;
      }

      var element = this.materialDom(componentProps);
      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      element[propName].className = "".concat(userDefinedClasses, " ").concat(this.getClassName(element)).split(' ').filter(function (value, index, self) {
        return self.indexOf(value) === index && value !== '';
      }) // Unique + exclude empty class names
      .join(' '); // Clean this shit of proxy attributes

      this.mdcProps.forEach(function (prop) {
        // TODO: Fix this better
        if (prop in doNotRemoveProps) {
          return;
        } // @ts-ignore


        delete element[propName][prop];
      });
      return element;
    }
    /** Attach the ripple effect */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ripple && this.control) {
        this.ripple = new _ripple.MDCRipple(this.control);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.mdcNotifyProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;

            if (this.props[prop] !== nextProps[prop]) {
              this.MDComponent[prop] = nextProps[prop];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mdcProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _prop = _step2.value;

          if (this.props[_prop] !== nextProps[_prop]) {
            this.classText = this.buildClassName(nextProps);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ripple) {
        this.ripple.destroy();
      }
    }
  }, {
    key: "afterComponentDidMount",
    value: function afterComponentDidMount() {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mdcNotifyProps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;
            this.MDComponent[prop] = this.props[prop];
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } // Shared setter for the root element ref

  }, {
    key: "setControlRef",
    value: function setControlRef(control) {
      this.control = control;
    }
    /** Build the className based on component names and mdc props */

  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      // Class name based on component name
      var classText = 'mdc-' + this.componentName; // Loop over mdcProps to turn them into classNames

      for (var propKey in props) {
        if (props.hasOwnProperty(propKey)) {
          var prop = props[propKey];

          if (typeof prop === 'boolean' && prop) {
            if (this.mdcProps.indexOf(propKey) !== -1) {
              classText += " mdc-".concat(this.componentName, "--").concat(propKey);
            }
          }
        }
      }

      return classText;
    }
    /** Returns the class name for element */

  }, {
    key: "getClassName",
    value: function getClassName(element) {
      if (!element) {
        return '';
      }

      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      var attrs = element[propName] = element[propName] || {};
      var classText = this.classText;

      if (attrs.class) {
        classText += ' ' + attrs.class;
      }

      if (attrs.className && attrs.className !== attrs.class) {
        classText += ' ' + attrs.className;
      }

      return classText;
    }
  }]);
  return MaterialComponent;
}(_preact.Component);

exports.MaterialComponent = MaterialComponent;

__decorate([_bindDecorator.bind], MaterialComponent.prototype, "setControlRef", null);

var _default = MaterialComponent;
exports.default = _default;
//# sourceMappingURL=MaterialComponent.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XPATH = void 0;
exports.XPATH = {
    APP_RENDER_ROOT: '//div[@class="thumbnail-and-metadata-wrapper style-scope ytd-playlist-header-renderer"]/*[last()]',
    YT_PLAYLIST_VIDEO_RENDERERS: '//ytd-playlist-video-renderer',
    YT_NUMBER_OF_VIDEOS_IN_PLAYLIST: '//ytd-playlist-byline-renderer//div/yt-formatted-string/span[1]',
    YT_NUMBER_OF_VIDEOS_IN_PLAYLIST_ONE_VIDEO: '//ytd-playlist-byline-renderer/div/yt-formatted-string',
};
exports.default = {
    XPATH: exports.XPATH,
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxs", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxDEV", function() { return o; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

function o(_,o,e,n,t){var f={};for(var l in o)"ref"!=l&&(f[l]=o[l]);var s,u,a={type:_,props:f,key:e,ref:o&&o.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++preact__WEBPACK_IMPORTED_MODULE_0__["options"].__v,__source:n,__self:t};if("function"==typeof _&&(s=_.defaultProps))for(u in s)void 0===f[u]&&(f[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Query DOM Xpath and return an array of Node
// Usage is similar to $x in console
function getElementsByXPath(xpath, parent) {
    const results = [];
    const query = document.evaluate(xpath, parent || document, undefined, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
    const length = query.snapshotLength;
    for (let index = 0; index < length; index += 1) {
        results.push(query.snapshotItem(index));
    }
    // force cast since we keep into snapshotLength limit, no item should be null
    return results;
}
exports.default = getElementsByXPath;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YT_LOCATION_CHANGE_EVENT = exports.APP_ROOT_ID = exports.HOSTNAME = exports.NAME = void 0;
const userscript_1 = __importDefault(__webpack_require__(13));
exports.NAME = userscript_1.default.sitename;
exports.HOSTNAME = userscript_1.default.hostname;
exports.APP_ROOT_ID = userscript_1.default.id;
exports.YT_LOCATION_CHANGE_EVENT = 'yt-navigate-finish';


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinearProgress = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _linearProgress = __webpack_require__(65);

var _preact = __webpack_require__(0);

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__(14));

var LinearProgress =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(LinearProgress, _MaterialComponent);

  function LinearProgress() {
    var _this;

    (0, _classCallCheck2.default)(this, LinearProgress);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LinearProgress).apply(this, arguments));
    _this.componentName = 'linear-progress';
    _this.mdcProps = ['reversed', 'indeterminate'];
    _this.themeProps = ['primary', 'secondary'];
    _this.mdcNotifyProps = ['progress'];
    return _this;
  }

  (0, _createClass2.default)(LinearProgress, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(LinearProgress.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _linearProgress.MDCLinearProgress(this.control);
        this.MDComponent.determinate = !this.props.indeterminate;
        this.MDComponent.reverse = !!this.props.reversed;
      }

      this.afterComponentDidMount();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(LinearProgress.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      if (this.MDComponent) {
        this.MDComponent.determinate = !this.props.indeterminate;
        this.MDComponent.reverse = !!nextProps.reversed;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(LinearProgress.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      // TODO: Fix theme props
      return (0, _preact.h)("div", Object.assign({
        role: "progressbar"
      }, props, {
        ref: this.setControlRef
      }), (0, _preact.h)("div", {
        className: "mdc-linear-progress__buffering-dots"
      }), (0, _preact.h)("div", {
        className: "mdc-linear-progress__buffer"
      }), (0, _preact.h)("div", {
        className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
      }, (0, _preact.h)("span", {
        className: "mdc-linear-progress__bar-inner"
      })), (0, _preact.h)("div", {
        className: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
      }, (0, _preact.h)("span", {
        className: "mdc-linear-progress__bar-inner"
      })));
    }
  }]);
  return LinearProgress;
}(_MaterialComponent2.default);

exports.LinearProgress = LinearProgress;
var _default = LinearProgress;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(35);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = __webpack_require__(67);
const userscripter_1 = __webpack_require__(63);
const CONFIG = __importStar(__webpack_require__(26));
const operations_1 = __importDefault(__webpack_require__(27));
const SITE = __importStar(__webpack_require__(20));
const stylesheets_1 = __importDefault(__webpack_require__(57));
const userscript_1 = __importDefault(__webpack_require__(13));
const describeFailure = userscripter_1.errors.failureDescriber({
    siteName: SITE.NAME,
    extensionName: userscript_1.default.name,
    location: document.location,
});
userscripter_1.userscripter.run({
    id: userscript_1.default.id,
    name: userscript_1.default.name,
    initialAction: () => userscripter_1.log.log(`${userscript_1.default.name} ${userscript_1.default.version}`),
    stylesheets: stylesheets_1.default,
    operationsPlan: {
        operations: operations_1.default,
        interval: CONFIG.OPERATIONS_INTERVAL,
        tryUntil: userscripter_1.environment.DOMCONTENTLOADED,
        extraTries: CONFIG.OPERATIONS_EXTRA_TRIES,
        // eslint-disable-next-line unicorn/no-array-for-each
        handleFailures: (failures) => failures.forEach(compose_1.compose(userscripter_1.log.error, describeFailure)),
    },
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPERATIONS_EXTRA_TRIES = exports.OPERATIONS_INTERVAL = void 0;
exports.OPERATIONS_INTERVAL = 200; // ms
exports.OPERATIONS_EXTRA_TRIES = 3;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operations_1 = __webpack_require__(11);
const environment_1 = __webpack_require__(12);
const js_cookie_1 = __webpack_require__(28);
const add_location_change_event_hook_1 = __importDefault(__webpack_require__(29));
const is_on_playlist_page_1 = __importDefault(__webpack_require__(31));
const selectors_1 = __webpack_require__(16);
const append_app_to_dom_1 = __importDefault(__webpack_require__(32));
function mainWrapper() {
    const url = new URL(window.location.href);
    const playlistName = url.searchParams.get('list');
    /* eslint-disable no-underscore-dangle */
    const config = {
        DEVICE: window.ytcfg.data_.DEVICE,
        DELEGATED_SESSION_ID: window.ytcfg.data_.DELEGATED_SESSION_ID,
        ID_TOKEN: window.ytcfg.data_.ID_TOKEN,
        INNERTUBE_API_KEY: window.ytcfg.data_.INNERTUBE_API_KEY,
        INNERTUBE_CONTEXT_CLIENT_NAME: window.ytcfg.data_.INNERTUBE_CONTEXT_CLIENT_NAME,
        INNERTUBE_CONTEXT_CLIENT_VERSION: window.ytcfg.data_.INNERTUBE_CONTEXT_CLIENT_VERSION,
        PAGE_BUILD_LABEL: window.ytcfg.data_.PAGE_BUILD_LABEL,
        PAGE_CL: window.ytcfg.data_.PAGE_CL,
        VISITOR_DATA: window.ytcfg.data_.VISITOR_DATA,
        SAPISID: js_cookie_1.get('SAPISID'),
        ORIGIN_URL: new URL(document.URL).origin,
    };
    document.addEventListener('yt-action', (event) => {
        if (event.detail.actionName === 'ytd-update-grid-state-action') {
            append_app_to_dom_1.default(config, playlistName, selectors_1.XPATH.APP_RENDER_ROOT);
        }
    });
}
// Called every time app navigation occurs
function protectedMainWrapper() {
    if (is_on_playlist_page_1.default(window)) {
        mainWrapper();
    }
}
const OPERATIONS = [
    operations_1.operation({
        description: 'run main if the script start on playlist page',
        condition: is_on_playlist_page_1.default,
        action: () => {
            mainWrapper();
        },
        deferUntil: environment_1.DOMCONTENTLOADED,
    }),
    operations_1.operation({
        description: 'init yt-navigate-finish hooks to watch in-app navigation',
        condition: environment_1.ALWAYS,
        action: () => {
            add_location_change_event_hook_1.default(protectedMainWrapper);
        },
        deferUntil: environment_1.DOMCONTENTLOADED,
    }),
];
exports.default = OPERATIONS;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const site_1 = __webpack_require__(20);
// Add location change event hooks
function addLocationChangeEventHooks(callback) {
    window.addEventListener(site_1.YT_LOCATION_CHANGE_EVENT, callback);
}
exports.default = addLocationChangeEventHooks;


/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"yt-playlists-delete-enhancer\",\"description\":\"Add a button to remove videos watched with more than X percent from watch later playlist.\",\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:avallete/yt-playlists-delete-enhancer.git\"},\"bugs\":{\"url\":\"https://github.com/avallete/yt-playlists-delete-enhancer/issues\"},\"version\":\"1.5.8\",\"homepage\":\"https://github.com/avallete/yt-playlists-delete-enhancer#readme\",\"license\":\"MIT\",\"author\":\"Andrew Valleteau <avallete@student.42.fr>\"}");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PLAYLIST_URL_PATHNAME = '/playlist';
const isOnPlaylistPage = (window_) => {
    const url = new URL(window_.location.href);
    if (url.pathname === PLAYLIST_URL_PATHNAME) {
        return true;
    }
    return false;
};
exports.default = isOnPlaylistPage;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(17);
const preact_1 = __webpack_require__(0);
const get_elements_by_xpath_1 = __importDefault(__webpack_require__(18));
const remove_video_enhancer_app_1 = __importDefault(__webpack_require__(33));
function appendAppToDom(config, playlistName, xpathRoot) {
    const elementToAppendTo = get_elements_by_xpath_1.default(xpathRoot)[0];
    if (elementToAppendTo) {
        preact_1.render(
        // Use Date.now() to force re-mount component to trigger playlist fetch after yt-navigate-finish events
        // See: #62
        jsx_runtime_1.jsx(remove_video_enhancer_app_1.default, { config: config, playlistName: playlistName }, Date.now()), elementToAppendTo, elementToAppendTo.lastElementChild);
    }
    else {
        throw new Error(`Cannot found ${xpathRoot} in the DOM`);
    }
}
exports.default = appendAppToDom;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = __webpack_require__(17);
const preact_1 = __webpack_require__(0);
const LinearProgress_1 = __importDefault(__webpack_require__(21));
const userscript_1 = __importDefault(__webpack_require__(13));
const remove_video_enhancer_container_1 = __importDefault(__webpack_require__(37));
const yt_api_1 = __webpack_require__(43);
const partition_1 = __importDefault(__webpack_require__(52));
const remove_videos_from_playlist_ui_1 = __importDefault(__webpack_require__(53));
class RemoveVideoEnhancerApp extends preact_1.Component {
    constructor(properties) {
        super(properties);
        this.state = {};
        this.removeVideoHandler = this.removeVideoHandler.bind(this);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playlist = yield yt_api_1.fetchAllPlaylistContent(this.props.config, this.props.playlistName);
                this.setState({ playlist });
            }
            catch (error) {
                this.setState({ errorMessages: [error.message] });
            }
        });
    }
    removeVideoHandler(watchTimeValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const { playlist } = this.state;
            if (playlist && playlist.continuations[0].videos.length > 0) {
                const [toDeleteVideos, toKeepVideos] = partition_1.default(playlist.continuations[0].videos, (v) => v.percentDurationWatched >= watchTimeValue);
                if (toDeleteVideos.length > 0) {
                    try {
                        yield yt_api_1.removeVideosFromPlaylist(this.props.config, playlist === null || playlist === void 0 ? void 0 : playlist.playlistId, toDeleteVideos);
                        playlist.continuations[0].videos = toKeepVideos;
                        remove_videos_from_playlist_ui_1.default(toDeleteVideos);
                        this.setState(Object.assign(Object.assign({}, this.state), { playlist }));
                    }
                    catch (error) {
                        this.setState(Object.assign(Object.assign({}, this.state), { errorMessages: [error.message] }));
                    }
                }
            }
        });
    }
    shouldComponentUpdate(nextProperties) {
        var _a, _b;
        if (nextProperties.playlistName !== ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.playlist) === null || _b === void 0 ? void 0 : _b.playlistId)) {
            return true;
        }
        return false;
    }
    componentDidUpdate(previousProperties) {
        return __awaiter(this, void 0, void 0, function* () {
            if (previousProperties.playlistName !== this.props.playlistName) {
                try {
                    this.setState({ playlist: undefined, errorMessages: undefined });
                    const playlist = yield yt_api_1.fetchAllPlaylistContent(this.props.config, this.props.playlistName);
                    this.setState({ playlist });
                }
                catch (error) {
                    this.setState({ errorMessages: [error.message] });
                }
            }
        });
    }
    render() {
        var _a, _b, _c, _d;
        if ((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.errorMessages) === null || _b === void 0 ? void 0 : _b.length) {
            return jsx_runtime_1.jsx("div", Object.assign({ id: userscript_1.default.id }, { children: (_c = this.state) === null || _c === void 0 ? void 0 : _c.errorMessages.join(' ') }), void 0);
        }
        if ((_d = this.state) === null || _d === void 0 ? void 0 : _d.playlist) {
            if (this.state.playlist.isEditable) {
                return jsx_runtime_1.jsx(remove_video_enhancer_container_1.default, { removeVideoHandler: this.removeVideoHandler }, void 0);
            }
            return jsx_runtime_1.jsx("div", Object.assign({ id: userscript_1.default.id }, { children: "Playlist isn't editable" }), void 0);
        }
        return (jsx_runtime_1.jsx("div", Object.assign({ id: userscript_1.default.id }, { children: jsx_runtime_1.jsx(LinearProgress_1.default, { indeterminate: true }, void 0) }), void 0));
    }
}
exports.default = RemoveVideoEnhancerApp;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(2);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_BUTTON_ALT = exports.INPUT_ALT = void 0;
const jsx_runtime_1 = __webpack_require__(17);
const hooks_1 = __webpack_require__(38);
const Button_1 = __importDefault(__webpack_require__(39));
const Slider_1 = __importDefault(__webpack_require__(42));
const LinearProgress_1 = __importDefault(__webpack_require__(21));
const userscript_1 = __importDefault(__webpack_require__(13));
exports.INPUT_ALT = 'Input number between 0 and 100 to choose under how much percentage of watched time a video should be removed';
exports.REMOVE_BUTTON_ALT = 'Remove button to start removing videos';
function validate(value) {
    const numberValue = Number(value);
    if (Number.isSafeInteger(numberValue) && numberValue >= 0 && numberValue <= 100) {
        return true;
    }
    return false;
}
function RemoveVideoEnhancerContainer({ removeVideoHandler, initialValue = 100 }) {
    const [inputValue, setValue] = hooks_1.useState(initialValue);
    const [isReadyToRemove, setIsReadyToRemove] = hooks_1.useState(true);
    function onChange({ detail }) {
        // eslint-disable-next-line no-underscore-dangle
        const value = detail.foundation_.value_;
        if (validate(value)) {
            setValue(value);
        }
    }
    return (jsx_runtime_1.jsx("div", Object.assign({ id: userscript_1.default.id, className: 'style-scope ytd-playlist-sidebar-renderer' }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: 'style-scope ytd-menu-service-item-renderer', role: 'option', "aria-disabled": 'false' }, { children: [jsx_runtime_1.jsxs("p", { children: ["Remove all videos that have been watched to at least ", inputValue, "%"] }, void 0),
                jsx_runtime_1.jsx(Slider_1.default, { min: 0, max: 100, step: 5, value: inputValue, onChange: onChange, alt: exports.INPUT_ALT, discrete: true }, void 0),
                jsx_runtime_1.jsxs(Button_1.default, Object.assign({ raised: true, ripple: true, secondary: true, alt: exports.REMOVE_BUTTON_ALT, disabled: !isReadyToRemove, onClick: () => __awaiter(this, void 0, void 0, function* () {
                        setIsReadyToRemove(false);
                        yield removeVideoHandler(inputValue);
                        setIsReadyToRemove(true);
                    }) }, { children: [!isReadyToRemove && jsx_runtime_1.jsx(LinearProgress_1.default, { indeterminate: true }, void 0),
                        isReadyToRemove && jsx_runtime_1.jsx("div", { children: "Remove!" }, void 0)] }), void 0)] }), void 0) }), void 0));
}
exports.default = RemoveVideoEnhancerContainer;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = exports.ButtonIcon = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _preact = __webpack_require__(0);

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__(14));

var _Icon2 = _interopRequireDefault(__webpack_require__(40));

var _generateThemeClass = _interopRequireDefault(__webpack_require__(41));

var ButtonIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(ButtonIcon, _Icon);

  function ButtonIcon() {
    var _this;

    (0, _classCallCheck2.default)(this, ButtonIcon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonIcon).apply(this, arguments));
    _this.componentName = 'button__icon';
    return _this;
  }

  return ButtonIcon;
}(_Icon2.default);

exports.ButtonIcon = ButtonIcon;

var Button =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Button, _MaterialComponent);

  function Button() {
    var _this2;

    (0, _classCallCheck2.default)(this, Button);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
    _this2.componentName = 'button';
    _this2.mdcProps = ['dense', 'raised', 'unelevated', 'outlined'];
    _this2.themeProps = ['primary', 'secondary'];
    return _this2;
  }

  (0, _createClass2.default)(Button, [{
    key: "materialDom",
    value: function materialDom(props) {
      var ButtonElement = props.href ? 'a' : 'button';
      var className = '';
      this.themeProps.forEach(function (themeProp) {
        if (themeProp in props && props[themeProp] !== false) {
          className += (0, _generateThemeClass.default)(themeProp) + ' ';
        }
      });
      return (0, _preact.h)(ButtonElement, Object.assign({
        ref: this.setControlRef
      }, props, {
        className: className
      }), this.props.children);
    }
  }]);
  return Button;
}(_MaterialComponent2.default);

exports.Button = Button;

var default_1 =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(default_1, _Button);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Button);

exports.default = default_1;
default_1.Icon = ButtonIcon;
//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _preact = __webpack_require__(0);

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__(14));

var Icon =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Icon, _MaterialComponent);

  function Icon() {
    var _this;

    (0, _classCallCheck2.default)(this, Icon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    _this.componentName = 'icon';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "materialDom",
    value: function materialDom(props) {
      var classes = ['material-icons']; // CardActionIcon sends className

      if (props.className) {
        classes.push(props.className);
      }

      return (0, _preact.h)("i", Object.assign({}, props, {
        className: classes.join(' ')
      }), props.children);
    }
  }]);
  return Icon;
}(_MaterialComponent2.default);

exports.Icon = Icon;
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(prop) {
  return "mdc-theme--".concat(prop, "-bg");
}
//# sourceMappingURL=generateThemeClass.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slider = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6));

var _createClass2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(2));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _inherits2 = _interopRequireDefault(__webpack_require__(9));

var _typeof2 = _interopRequireDefault(__webpack_require__(19));

var _slider = __webpack_require__(66);

var _bindDecorator = __webpack_require__(23);

var _preact = __webpack_require__(0);

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__(14));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Slider =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Slider, _MaterialComponent);

  function Slider() {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Slider).apply(this, arguments));
    _this.componentName = 'slider';
    _this.mdcProps = ['discrete'];
    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Slider.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _slider.MDCSlider(this.control);
        this.MDComponent.listen('MDCSlider:change', this.onChange);
        this.MDComponent.listen('MDCSlider:input', this.onInput);
      }

      this.setValue(this.props.value); // set initial value programatically because of error if min is greater than initial max
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Slider.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.unlisten('MDCSlider:change', this.onChange);
        this.MDComponent.unlisten('MDCSlider:input', this.onInput);
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.MDComponent) {
        return this.MDComponent.value;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this$props = this.props,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          _this$props$min = _this$props.min,
          min = _this$props$min === void 0 ? 0 : _this$props$min,
          _this$props$max = _this$props.max,
          max = _this$props$max === void 0 ? 100 : _this$props$max,
          step = _this$props.step;

      if (this.MDComponent) {
        if (min > this.MDComponent.max) {
          this.MDComponent.max = max;
          this.MDComponent.min = min;
        } else {
          this.MDComponent.min = min;
          this.MDComponent.max = max;
        }

        if (value) {
          this.MDComponent.value = value;
        }

        this.MDComponent.disabled = disabled;

        if (step) {
          this.MDComponent.step = step;
        }
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      if (this.props.onInput) {
        this.props.onInput(e);
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _allprops$tabindex = allprops.tabindex,
          tabIndex = _allprops$tabindex === void 0 ? 0 : _allprops$tabindex,
          props = __rest(allprops, ["tabindex"]);

      this.setValue(allprops);
      return (0, _preact.h)("div", Object.assign({
        tabIndex: tabIndex,
        role: "slider",
        "aria-label": "Select Value",
        ref: this.setControlRef
      }, props), (0, _preact.h)("div", {
        class: "mdc-slider__track-container"
      }, (0, _preact.h)("div", {
        class: "mdc-slider__track"
      })), (0, _preact.h)("div", {
        class: "mdc-slider__thumb-container"
      }, props.discrete && (0, _preact.h)("div", {
        class: "mdc-slider__pin"
      }, (0, _preact.h)("span", {
        class: "mdc-slider__pin-value-marker"
      })), (0, _preact.h)("svg", {
        class: "mdc-slider__thumb",
        width: "21",
        height: "21"
      }, (0, _preact.h)("circle", {
        cx: "10.5",
        cy: "10.5",
        r: "7.875"
      })), (0, _preact.h)("div", {
        class: "mdc-slider__focus-ring"
      })));
    }
  }]);
  return Slider;
}(_MaterialComponent2.default);

exports.Slider = Slider;

__decorate([_bindDecorator.bind], Slider.prototype, "onChange", null);

__decorate([_bindDecorator.bind], Slider.prototype, "onInput", null);

var _default = Slider;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeVideosFromPlaylist = exports.fetchAllPlaylistContent = void 0;
const sha1_1 = __importDefault(__webpack_require__(44));
const errors_1 = __webpack_require__(51);
const API_BASE_URL = new URL('https://www.youtube.com/youtubei/v1');
const API_GET_PLAYLIST_VIDEOS_URL = new URL(`${API_BASE_URL}/browse`);
const API_EDIT_PLAYLIST_VIDEOS_URL = new URL(`${API_GET_PLAYLIST_VIDEOS_URL}/edit_playlist`);
const BASE_REFERER_URL = new URL('https://www.youtube.com/playlist');
const API_V1_REQUIRED_HEADERS = [
    'Content-Type',
    'Authorization',
    'X-Goog-Visitor-Id',
    'X-YouTube-Client-Name',
    'X-YouTube-Client-Version',
    'X-Goog-AuthUser',
    'X-Goog-PageId',
];
const API_REQUIRED_HEADERS = [
    'X-YouTube-Client-Name',
    'X-YouTube-Client-Version',
    'X-YouTube-Device',
    'X-YouTube-Identity-Token',
    'X-YouTube-Page-CL',
    'X-YouTube-Page-Label',
];
function generateSAPISIDHASH(origin, sapisid, date = new Date()) {
    const roundedTimestamp = Math.floor(date.getTime() / 1000);
    // deepcode ignore InsecureHash: we need to replicate youtube webapp behavior
    return `${roundedTimestamp}_${sha1_1.default(`${roundedTimestamp} ${sapisid} ${origin}`)}`;
}
function generateRequestHeaders(config, headerKeys = []) {
    const allHeaders = {
        'Content-Type': 'application/json',
        'X-Goog-Visitor-Id': config.VISITOR_DATA,
        'X-YouTube-Client-Name': config.INNERTUBE_CONTEXT_CLIENT_NAME,
        'X-YouTube-Client-Version': config.INNERTUBE_CONTEXT_CLIENT_VERSION,
        'X-YouTube-Device': config.DEVICE,
        'X-YouTube-Identity-Token': config.ID_TOKEN,
        'X-YouTube-Page-CL': config.PAGE_CL,
        'X-YouTube-Page-Label': config.PAGE_BUILD_LABEL,
        // Those two are mandatory together to successfully perform request
        'X-Goog-AuthUser': '0',
        'X-Goog-PageId': config.DELEGATED_SESSION_ID,
        Authorization: `SAPISIDHASH ${generateSAPISIDHASH(config.ORIGIN_URL, config.SAPISID)}`,
    };
    const result = {};
    // Add each wanted header key to result headers
    for (const headerKey of headerKeys) {
        result[headerKey] = allHeaders[headerKey];
    }
    return result;
}
function extractPlaylistVideoListRendererContents(playlistVideoListContents) {
    return playlistVideoListContents.map((item) => {
        var _a;
        return {
            videoId: item.playlistVideoRenderer.videoId,
            percentDurationWatched: ((_a = item.playlistVideoRenderer.thumbnailOverlays[1].thumbnailOverlayResumePlaybackRenderer) === null || _a === void 0 ? void 0 : _a.percentDurationWatched) || 0,
        };
    });
}
function extractPlaylistContinuation(playlistContents) {
    // ContinuationToken should be in the last item of the playlist contents
    const lastItem = playlistContents[playlistContents.length - 1];
    if (lastItem && lastItem.continuationItemRenderer) {
        // Remove last item from playlist contents since it contain continuationItem
        playlistContents.pop();
        return {
            videos: extractPlaylistVideoListRendererContents(playlistContents),
            continuationToken: lastItem.continuationItemRenderer.continuationEndpoint.continuationCommand.token,
        };
    }
    return {
        videos: extractPlaylistVideoListRendererContents(playlistContents),
    };
}
function fetchPlaylistInitialData(config, playlistName) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`${BASE_REFERER_URL}`);
        const headers = generateRequestHeaders(config, API_REQUIRED_HEADERS);
        url.searchParams.append('list', playlistName);
        // Get the first page data for the playlist
        url.searchParams.append('pbj', '1');
        const response = yield fetch(`${url}`, {
            credentials: 'include',
            headers,
            method: 'GET',
            mode: 'cors',
        });
        const data = (yield response.json())[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content
            .sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer;
        if (!data) {
            throw errors_1.PlaylistEmptyError;
        }
        return {
            playlistId: data.playlistId,
            isEditable: data.isEditable,
            canReorder: data.canReorder,
            continuations: [extractPlaylistContinuation(data.contents)],
        };
    });
}
function fetchPlaylistContinuation(config, continuation) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`${API_GET_PLAYLIST_VIDEOS_URL}`);
        const headers = generateRequestHeaders(config, API_V1_REQUIRED_HEADERS);
        const body = {
            context: {
                client: {
                    clientName: config.INNERTUBE_CONTEXT_CLIENT_NAME,
                    clientVersion: config.INNERTUBE_CONTEXT_CLIENT_VERSION,
                },
            },
            continuation: continuation.continuationToken,
        };
        url.searchParams.append('key', config.INNERTUBE_API_KEY);
        const response = yield fetch(`${url}`, {
            credentials: 'include',
            headers,
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
        });
        const data = (yield response.json()).onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
        return extractPlaylistContinuation(data);
    });
}
function fetchAllPlaylistContent(config, playlistName) {
    return __awaiter(this, void 0, void 0, function* () {
        const playlist = yield fetchPlaylistInitialData(config, playlistName);
        if (playlist.isEditable) {
            // If all data has been retrieved, the last continuation item token will be undefined
            while (playlist.continuations[playlist.continuations.length - 1].continuationToken !== undefined) {
                playlist.continuations.push(
                // We need the next continuationToken to launch the next request
                // eslint-disable-next-line no-await-in-loop
                yield fetchPlaylistContinuation(config, playlist.continuations[playlist.continuations.length - 1]));
            }
            // Merge all the videos into a single PlaylistContinuation
            let videos = [];
            for (const continuation of playlist.continuations) {
                // eslint-disable-next-line unicorn/prefer-spread
                videos = [...videos, ...continuation.videos];
            }
            playlist.continuations = [{ videos }];
            return playlist;
        }
        throw errors_1.PlaylistNotEditableError;
    });
}
exports.fetchAllPlaylistContent = fetchAllPlaylistContent;
function removeVideosFromPlaylist(config, playlistId, videosToRemove) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`${API_EDIT_PLAYLIST_VIDEOS_URL}`);
        const headers = generateRequestHeaders(config, API_V1_REQUIRED_HEADERS);
        const body = {
            actions: videosToRemove.map(({ videoId }) => ({
                removedVideoId: videoId,
                action: 'ACTION_REMOVE_VIDEO_BY_VIDEO_ID',
            })),
            context: {
                client: {
                    clientName: config.INNERTUBE_CONTEXT_CLIENT_NAME,
                    clientVersion: config.INNERTUBE_CONTEXT_CLIENT_VERSION,
                },
            },
            params: 'CAFAAQ%3D%3D',
            playlistId,
        };
        url.searchParams.append('key', config.INNERTUBE_API_KEY);
        const response = yield fetch(`${url}`, {
            credentials: 'include',
            headers,
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
        });
        const data = yield response.json();
        if (data.status !== 'STATUS_SUCCEEDED') {
            return true;
        }
        return false;
    });
}
exports.removeVideosFromPlaylist = removeVideosFromPlaylist;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function() {
  var crypt = __webpack_require__(50),
      utf8 = __webpack_require__(24).utf8,
      bin = __webpack_require__(24).bin,

  // The core
  sha1 = function (message) {
    // Convert to byte array
    if (message.constructor == String)
      message = utf8.stringToBytes(message);
    else if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer == 'function' && Buffer.isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();

    // otherwise assume byte array

    var m  = crypt.bytesToWords(message),
        l  = message.length * 8,
        w  = [],
        H0 =  1732584193,
        H1 = -271733879,
        H2 = -1732584194,
        H3 =  271733878,
        H4 = -1009589776;

    // Padding
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >>> 9) << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {
      var a = H0,
          b = H1,
          c = H2,
          d = H3,
          e = H4;

      for (var j = 0; j < 80; j++) {

        if (j < 16)
          w[j] = m[i + j];
        else {
          var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
          w[j] = (n << 1) | (n >>> 31);
        }

        var t = ((H0 << 5) | (H0 >>> 27)) + H4 + (w[j] >>> 0) + (
                j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 :
                j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 :
                j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 :
                         (H1 ^ H2 ^ H3) - 899497514);

        H4 = H3;
        H3 = H2;
        H2 = (H1 << 30) | (H1 >>> 2);
        H1 = H0;
        H0 = t;
      }

      H0 += a;
      H1 += b;
      H2 += c;
      H3 += d;
      H4 += e;
    }

    return [H0, H1, H2, H3, H4];
  },

  // Public API
  api = function (message, options) {
    var digestbytes = crypt.wordsToBytes(sha1(message));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

  api._blocksize = 16;
  api._digestsize = 20;

  module.exports = api;
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45).Buffer))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(47)
var ieee754 = __webpack_require__(48)
var isArray = __webpack_require__(49)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistEmptyError = exports.PlaylistVideosRemoveError = exports.PlaylistDataFetchError = exports.PlaylistNotEditableError = void 0;
exports.PlaylistNotEditableError = new Error('playlist is not editable');
exports.PlaylistDataFetchError = new Error('cannot fetch some data for the playlist');
exports.PlaylistVideosRemoveError = new Error('cannot remove videos from playlist');
exports.PlaylistEmptyError = new Error('playlist is empty');


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 */
function partition(collection, predicate) {
    const result = [[], []];
    for (const item of collection) {
        result[predicate(item) ? 0 : 1].push(item);
    }
    return result;
}
exports.default = partition;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remove_videos_from_playlist_1 = __importDefault(__webpack_require__(54));
const decrement_number_of_videos_in_playlist_1 = __importDefault(__webpack_require__(56));
function removeVideosFromPlaylistUI(toDeleteVideos) {
    try {
        remove_videos_from_playlist_1.default(toDeleteVideos);
        decrement_number_of_videos_in_playlist_1.default(toDeleteVideos.length);
    }
    catch (_a) {
        // If an error occurs while trying to dynamically update the UI
        // reload the page to update the UI
        window.location.reload();
    }
}
exports.default = removeVideosFromPlaylistUI;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = __webpack_require__(16);
const get_elements_by_xpath_1 = __importDefault(__webpack_require__(18));
const list_map_search_1 = __importDefault(__webpack_require__(55));
function removeVideoWithYtAction(videoId) {
    document.querySelectorAll('ytd-app')[0].dispatchEvent(new CustomEvent('yt-action', {
        detail: {
            actionName: 'yt-playlist-remove-videos-action',
            args: [
                {
                    playlistRemoveVideosAction: {
                        setVideoIds: [videoId],
                    },
                },
            ],
            returnValue: [],
        },
    }));
}
function removeVideosFromPlaylist(videosToDelete) {
    // cast Node as any to access .data property availlable on ytd-playlist-video-renderer elements
    const playlistVideoRendererNodes = get_elements_by_xpath_1.default(selectors_1.XPATH.YT_PLAYLIST_VIDEO_RENDERERS);
    // All videos to remove MAY be present in the UI because if there is more videos to remove
    // than videos found into the UI, some removed videos aren't loaded in the UI
    const uniqueVideosToDelete = [...new Map(videosToDelete.map((item) => [item.videoId, item])).values()];
    if (playlistVideoRendererNodes.length >= videosToDelete.length) {
        const searchMap = list_map_search_1.default(uniqueVideosToDelete, playlistVideoRendererNodes, (video) => video.videoId, (node) => node.data.videoId);
        // if all videos to remove are present in the UI
        if (searchMap) {
            const htmlElements = Object.values(searchMap);
            for (const element of htmlElements) {
                // eslint-disable-next-line no-underscore-dangle
                const videoId = element.__data.data.setVideoId;
                removeVideoWithYtAction(videoId);
            }
            return;
        }
    }
    throw new Error('some videos are missing from the UI, cannot dynamically delete');
}
exports.default = removeVideosFromPlaylist;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Search into two lists of objects needles and haystack using hashmap
 * If all elements from needles has been found into haystack it return the hashmap
 * If some elements are missing into haystack, we return false.
 *
 * The hashmap keys are generated using needleGetter and haystackGetter
 * The needles must not contain duplicates
 *
 * @param needles unique list of element to search
 * @param haystack list of elements to search in
 * @param needleKeyGetter get the value to use as key from needles
 * @param haystackKeyGetter get the value to match with needle key
 */
function listMapSearch(needles, haystack, needleKeyGetter, haystackKeyGetter) {
    const searchMap = {};
    // We cannot found all our needles into our haystack
    if (haystack.length < needles.length) {
        return false;
    }
    // Fill our searchMap keys with needles to search
    for (const needle of needles) {
        searchMap[needleKeyGetter(needle)] = undefined;
    }
    // matches elements from needles with haystack
    let found = 0;
    for (const item of haystack) {
        const itemKey = haystackKeyGetter(item);
        // if key exist in the searchMap and value is still undefined
        if (Object.prototype.hasOwnProperty.call(searchMap, itemKey) === true && searchMap[itemKey] === undefined) {
            searchMap[itemKey] = item;
            found += 1;
            // early break if all elements have already been found
            if (found === needles.length) {
                return searchMap;
            }
        }
    }
    return found === needles.length ? searchMap : false;
}
exports.default = listMapSearch;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = __webpack_require__(16);
const get_elements_by_xpath_1 = __importDefault(__webpack_require__(18));
// Decrement the numbers of videos in the playlist in the UI
function decrementNumberOfVideosInPlaylist(value) {
    const spanElement = get_elements_by_xpath_1.default(selectors_1.XPATH.YT_NUMBER_OF_VIDEOS_IN_PLAYLIST)[0];
    if (spanElement) {
        const newValue = Number(spanElement.textContent) - value;
        spanElement.textContent = `${newValue}`;
    }
    else {
        const spanElementOneVideo = get_elements_by_xpath_1.default(selectors_1.XPATH.YT_NUMBER_OF_VIDEOS_IN_PLAYLIST_ONE_VIDEO)[0];
        if (spanElementOneVideo) {
            // A reload is performed to properly restore the state of an empty playlist:
            // - The "There are no videos in this playlist yet" text
            // - The "No videos" text
            // Both strings are not part of the `yt.msgs_` object to use for localization
            window.location.reload();
        }
        else {
            throw new Error('span with the number of videos in playlist not found in DOM');
        }
    }
}
exports.default = decrementNumberOfVideosInPlaylist;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(12);
const stylesheets_1 = __webpack_require__(10);
const preact_material_scss_1 = __importDefault(__webpack_require__(58));
const STYLESHEETS = {
    preactMaterial: stylesheets_1.stylesheet({
        condition: environment_1.ALWAYS,
        css: preact_material_scss_1.default,
    }),
};
// This trick uncovers type errors in STYLESHEETS
// while retaining the static knowledge of its properties
// (so we can still write e.g. STYLESHEETS.foo):
const style = STYLESHEETS;
// eslint-disable-next-line no-void
void style;
exports.default = STYLESHEETS;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(59);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(60);
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(61);
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(62);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
// Module
exports.push([module.i, "#yt-playlists-delete-enhancer{--mdc-theme-primary: #e10000;--mdc-theme-on-primary: #fff;--mdc-theme-accent: #e10000;--mdc-theme-secondary: #e10000;--mdc-theme-on-secondary: #fff;--mdc-theme-background: #fff;--mdc-theme-surface: #fff;--mdc-theme-on-surface: #fff}\n", ""]);
// Exports
exports.locals = {
	"yt-playlists-delete-enhancer": "yt-playlists-delete-enhancer"
};
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2018 Google Inc.\n License: MIT\n*/\n@-webkit-keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@-webkit-keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@-webkit-keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface--test-edge-var-bug {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  .mdc-ripple-surface--test-edge-var-bug::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n.mdc-button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 2.25rem;\n  font-weight: 500;\n  letter-spacing: 0.08929em;\n  text-decoration: none;\n  text-transform: uppercase;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  padding: 0 8px 0 8px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-width: 64px;\n  height: 36px;\n  border: none;\n  outline: none;\n  /* @alternate */\n  line-height: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  vertical-align: middle;\n  border-radius: 2px; }\n  .mdc-button::before, .mdc-button::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button::before {\n    transition: opacity 15ms linear;\n    z-index: 1; }\n  .mdc-button.mdc-ripple-upgraded::before {\n    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));\n            transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button.mdc-ripple-upgraded::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n    -webkit-animation: 225ms :local(mdc-ripple-fg-radius-in) forwards, 75ms :local(mdc-ripple-fg-opacity-in) forwards;\n            animation: 225ms :local(mdc-ripple-fg-radius-in) forwards, 75ms :local(mdc-ripple-fg-opacity-in) forwards; }\n  .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n    -webkit-animation: 150ms :local(mdc-ripple-fg-opacity-out);\n            animation: 150ms :local(mdc-ripple-fg-opacity-out);\n    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  .mdc-button::before, .mdc-button::after {\n    top: calc(50% - 100%);\n    /* @noflip */\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%; }\n  .mdc-button.mdc-ripple-upgraded::after {\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  .mdc-button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-button:active {\n    outline: none; }\n  .mdc-button:hover {\n    cursor: pointer; }\n  .mdc-button:disabled {\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.37);\n    cursor: default;\n    pointer-events: none; }\n  .mdc-button:not(:disabled) {\n    background-color: transparent; }\n  .mdc-button:not(:disabled) {\n    color: #6200ee;\n    /* @alternate */\n    color: var(--mdc-theme-primary, #6200ee); }\n  .mdc-button::before, .mdc-button::after {\n    background-color: #6200ee; }\n    @supports not (-ms-ime-align: auto) {\n      .mdc-button::before, .mdc-button::after {\n        /* @alternate */\n        background-color: var(--mdc-theme-primary, #6200ee); } }\n  .mdc-button:hover::before {\n    opacity: 0.04; }\n  .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  .mdc-button:not(.mdc-ripple-upgraded)::after {\n    transition: opacity 150ms linear; }\n  .mdc-button:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 75ms;\n    opacity: 0.16; }\n  .mdc-button.mdc-ripple-upgraded {\n    --mdc-ripple-fg-opacity: 0.16; }\n  .mdc-button .mdc-button__icon {\n    /* @noflip */\n    margin-left: 0;\n    /* @noflip */\n    margin-right: 8px;\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    font-size: 18px;\n    vertical-align: top; }\n    [dir=\"rtl\"] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=\"rtl\"] {\n      /* @noflip */\n      margin-left: 8px;\n      /* @noflip */\n      margin-right: 0; }\n  .mdc-button svg.mdc-button__icon {\n    fill: currentColor; }\n\n.mdc-button--raised .mdc-button__icon,\n.mdc-button--unelevated .mdc-button__icon,\n.mdc-button--outlined .mdc-button__icon {\n  /* @noflip */\n  margin-left: -4px;\n  /* @noflip */\n  margin-right: 8px; }\n  [dir=\"rtl\"] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--unelevated .mdc-button__icon,\n  .mdc-button--unelevated .mdc-button__icon[dir=\"rtl\"], [dir=\"rtl\"]\n  .mdc-button--outlined .mdc-button__icon,\n  .mdc-button--outlined .mdc-button__icon[dir=\"rtl\"] {\n    /* @noflip */\n    margin-left: 8px;\n    /* @noflip */\n    margin-right: -4px; }\n\n.mdc-button--raised,\n.mdc-button--unelevated {\n  padding: 0 16px 0 16px; }\n  .mdc-button--raised:disabled,\n  .mdc-button--unelevated:disabled {\n    background-color: rgba(0, 0, 0, 0.12);\n    color: rgba(0, 0, 0, 0.37); }\n  .mdc-button--raised:not(:disabled),\n  .mdc-button--unelevated:not(:disabled) {\n    background-color: #6200ee; }\n    @supports not (-ms-ime-align: auto) {\n      .mdc-button--raised:not(:disabled),\n      .mdc-button--unelevated:not(:disabled) {\n        /* @alternate */\n        background-color: var(--mdc-theme-primary, #6200ee); } }\n  .mdc-button--raised:not(:disabled),\n  .mdc-button--unelevated:not(:disabled) {\n    color: #fff;\n    /* @alternate */\n    color: var(--mdc-theme-on-primary, #fff); }\n  .mdc-button--raised::before, .mdc-button--raised::after,\n  .mdc-button--unelevated::before,\n  .mdc-button--unelevated::after {\n    background-color: #fff; }\n    @supports not (-ms-ime-align: auto) {\n      .mdc-button--raised::before, .mdc-button--raised::after,\n      .mdc-button--unelevated::before,\n      .mdc-button--unelevated::after {\n        /* @alternate */\n        background-color: var(--mdc-theme-on-primary, #fff); } }\n  .mdc-button--raised:hover::before,\n  .mdc-button--unelevated:hover::before {\n    opacity: 0.08; }\n  .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,\n  .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n    transition-duration: 75ms;\n    opacity: 0.24; }\n  .mdc-button--raised:not(.mdc-ripple-upgraded)::after,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {\n    transition: opacity 150ms linear; }\n  .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 75ms;\n    opacity: 0.32; }\n  .mdc-button--raised.mdc-ripple-upgraded,\n  .mdc-button--unelevated.mdc-ripple-upgraded {\n    --mdc-ripple-fg-opacity: 0.32; }\n\n.mdc-button--raised {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdc-button--raised:hover, .mdc-button--raised:focus {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:active {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:disabled {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-button--outlined {\n  border-style: solid;\n  padding: 0 14px 0 14px;\n  border-width: 2px; }\n  .mdc-button--outlined:disabled {\n    border-color: rgba(0, 0, 0, 0.37); }\n  .mdc-button--outlined:not(:disabled) {\n    border-color: #6200ee;\n    /* @alternate */\n    border-color: var(--mdc-theme-primary, #6200ee); }\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: .8125rem; }", ""]);
// Exports
exports.locals = {
	"mdc-ripple-surface--test-edge-var-bug": "mdc-ripple-surface--test-edge-var-bug",
	"mdc-button": "mdc-button",
	"mdc-ripple-upgraded": "mdc-ripple-upgraded",
	"mdc-ripple-upgraded--unbounded": "mdc-ripple-upgraded--unbounded",
	"mdc-ripple-upgraded--foreground-activation": "mdc-ripple-upgraded--foreground-activation",
	"mdc-ripple-upgraded--foreground-deactivation": "mdc-ripple-upgraded--foreground-deactivation",
	"mdc-ripple-upgraded--background-focused": "mdc-ripple-upgraded--background-focused",
	"mdc-button__icon": "mdc-button__icon",
	"mdc-button--raised": "mdc-button--raised",
	"mdc-button--unelevated": "mdc-button--unelevated",
	"mdc-button--outlined": "mdc-button--outlined",
	"mdc-button--dense": "mdc-button--dense",
	"mdc-ripple-fg-radius-in": "mdc-ripple-fg-radius-in",
	"mdc-ripple-fg-opacity-in": "mdc-ripple-fg-opacity-in",
	"mdc-ripple-fg-opacity-out": "mdc-ripple-fg-opacity-out"
};
module.exports = exports;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2018 Google Inc.\n License: MIT\n*/\n@-webkit-keyframes mdc-slider-emphasize {\n  0% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  50% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(0.571);\n            transform: scale(0.571); } }\n\n@keyframes mdc-slider-emphasize {\n  0% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  50% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(0.571);\n            transform: scale(0.571); } }\n\n.mdc-slider {\n  position: relative;\n  width: 100%;\n  height: 48px;\n  cursor: pointer;\n  touch-action: pan-x;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track {\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-theme-secondary, #018786); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container {\n    background-color: rgba(1, 135, 134, 0.26); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker::after,\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container::after {\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-theme-secondary, #018786); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb {\n    fill: #018786;\n    /* @alternate */\n    fill: var(--mdc-theme-secondary, #018786);\n    stroke: #018786;\n    /* @alternate */\n    stroke: var(--mdc-theme-secondary, #018786); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring {\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-theme-secondary, #018786); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {\n    background-color: #018786;\n    /* @alternate */\n    background-color: var(--mdc-theme-secondary, #018786); }\n  .mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin {\n    color: white;\n    /* @alternate */\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-slider--disabled {\n    cursor: auto; }\n    .mdc-slider--disabled .mdc-slider__track {\n      background-color: #9a9a9a; }\n    .mdc-slider--disabled .mdc-slider__track-container {\n      background-color: rgba(154, 154, 154, 0.26); }\n    .mdc-slider--disabled .mdc-slider__track-marker::after,\n    .mdc-slider--disabled .mdc-slider__track-marker-container::after {\n      background-color: #9a9a9a; }\n    .mdc-slider--disabled .mdc-slider__thumb {\n      fill: #9a9a9a;\n      stroke: #9a9a9a; }\n    .mdc-slider--disabled .mdc-slider__thumb {\n      /* @alternate */\n      stroke: white;\n      stroke: var(--mdc-slider-bg-color-behind-component, white); }\n  .mdc-slider:focus {\n    outline: none; }\n  .mdc-slider__track-container {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    height: 2px;\n    overflow: hidden; }\n  .mdc-slider__track {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    will-change: transform; }\n    .mdc-slider[dir=\"rtl\"] .mdc-slider__track,\n    [dir=\"rtl\"] .mdc-slider .mdc-slider__track {\n      -webkit-transform-origin: right top;\n              transform-origin: right top; }\n  .mdc-slider__track-marker-container {\n    display: flex;\n    margin-right: 0;\n    margin-left: -1px;\n    visibility: hidden; }\n    .mdc-slider[dir=\"rtl\"] .mdc-slider__track-marker-container,\n    [dir=\"rtl\"] .mdc-slider .mdc-slider__track-marker-container {\n      margin-right: -1px;\n      margin-left: 0; }\n    .mdc-slider__track-marker-container::after {\n      display: block;\n      width: 2px;\n      height: 2px;\n      content: \"\"; }\n  .mdc-slider__track-marker {\n    flex: 1; }\n    .mdc-slider__track-marker::after {\n      display: block;\n      width: 2px;\n      height: 2px;\n      content: \"\"; }\n    .mdc-slider__track-marker:first-child::after {\n      width: 3px; }\n  .mdc-slider__thumb-container {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    width: 21px;\n    height: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    will-change: transform; }\n  .mdc-slider__thumb {\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-transform: scale(0.571);\n            transform: scale(0.571);\n    transition: fill 100ms ease-out, stroke 100ms ease-out, -webkit-transform 100ms ease-out;\n    transition: transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out;\n    transition: transform 100ms ease-out, fill 100ms ease-out, stroke 100ms ease-out, -webkit-transform 100ms ease-out;\n    stroke-width: 3.5; }\n  .mdc-slider__focus-ring {\n    width: 21px;\n    height: 21px;\n    transition: opacity 266.67ms ease-out, background-color 266.67ms ease-out, -webkit-transform 266.67ms ease-out;\n    transition: transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out;\n    transition: transform 266.67ms ease-out, opacity 266.67ms ease-out, background-color 266.67ms ease-out, -webkit-transform 266.67ms ease-out;\n    border-radius: 50%;\n    opacity: 0; }\n  .mdc-slider__pin {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    width: 26px;\n    height: 26px;\n    margin-top: -2px;\n    margin-left: -2px;\n    -webkit-transform: rotate(-45deg) scale(0) translate(0, 0);\n            transform: rotate(-45deg) scale(0) translate(0, 0);\n    transition: -webkit-transform 100ms ease-out;\n    transition: transform 100ms ease-out;\n    transition: transform 100ms ease-out, -webkit-transform 100ms ease-out;\n    border-radius: 50% 50% 50% 0%;\n    z-index: 1; }\n  .mdc-slider__pin-value-marker {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n    letter-spacing: 0.01786em;\n    text-decoration: inherit;\n    text-transform: inherit;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.mdc-slider--active .mdc-slider__thumb {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n\n.mdc-slider--focus .mdc-slider__thumb {\n  -webkit-animation: mdc-slider-emphasize 266.67ms linear;\n          animation: mdc-slider-emphasize 266.67ms linear; }\n\n.mdc-slider--focus .mdc-slider__focus-ring {\n  -webkit-transform: scale3d(1.55, 1.55, 1.55);\n          transform: scale3d(1.55, 1.55, 1.55);\n  opacity: .25; }\n\n.mdc-slider--in-transit .mdc-slider__thumb {\n  transition-delay: 140ms; }\n\n.mdc-slider--in-transit .mdc-slider__thumb-container,\n.mdc-slider--in-transit .mdc-slider__track,\n.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,\n.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track {\n  transition: -webkit-transform 80ms ease;\n  transition: transform 80ms ease;\n  transition: transform 80ms ease, -webkit-transform 80ms ease; }\n\n.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb {\n  -webkit-transform: scale(calc(12 / 21));\n          transform: scale(calc(12 / 21)); }\n\n.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin {\n  -webkit-transform: rotate(-45deg) scale(1) translate(19px, -20px);\n          transform: rotate(-45deg) scale(1) translate(19px, -20px); }\n\n.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb {\n  -webkit-animation: none;\n          animation: none; }\n\n.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container {\n  visibility: visible; }", ""]);
// Exports
exports.locals = {
	"mdc-slider": "mdc-slider",
	"mdc-slider--disabled": "mdc-slider--disabled",
	"mdc-slider__track": "mdc-slider__track",
	"mdc-slider__track-container": "mdc-slider__track-container",
	"mdc-slider__track-marker": "mdc-slider__track-marker",
	"mdc-slider__track-marker-container": "mdc-slider__track-marker-container",
	"mdc-slider__thumb": "mdc-slider__thumb",
	"mdc-slider__focus-ring": "mdc-slider__focus-ring",
	"mdc-slider__pin": "mdc-slider__pin",
	"mdc-slider__thumb-container": "mdc-slider__thumb-container",
	"mdc-slider__pin-value-marker": "mdc-slider__pin-value-marker",
	"mdc-slider--active": "mdc-slider--active",
	"mdc-slider--focus": "mdc-slider--focus",
	"mdc-slider-emphasize": "mdc-slider-emphasize",
	"mdc-slider--in-transit": "mdc-slider--in-transit",
	"mdc-slider--discrete": "mdc-slider--discrete",
	"mdc-slider--display-markers": "mdc-slider--display-markers"
};
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n Material Components for the Web\n Copyright (c) 2018 Google Inc.\n License: MIT\n*/\n@-webkit-keyframes primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    -webkit-transform: translateX(83.67142%);\n            transform: translateX(83.67142%); }\n  100% {\n    -webkit-transform: translateX(200.61106%);\n            transform: translateX(200.61106%); } }\n\n@keyframes primary-indeterminate-translate {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    -webkit-transform: translateX(83.67142%);\n            transform: translateX(83.67142%); }\n  100% {\n    -webkit-transform: translateX(200.61106%);\n            transform: translateX(200.61106%); } }\n\n@-webkit-keyframes primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n            animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.66148);\n            transform: scaleX(0.66148); }\n  100% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); } }\n\n@keyframes primary-indeterminate-scale {\n  0% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  36.65% {\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  69.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n            animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    -webkit-transform: scaleX(0.66148);\n            transform: scaleX(0.66148); }\n  100% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); } }\n\n@-webkit-keyframes secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    -webkit-transform: translateX(37.65191%);\n            transform: translateX(37.65191%); }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    -webkit-transform: translateX(84.38617%);\n            transform: translateX(84.38617%); }\n  100% {\n    -webkit-transform: translateX(160.27778%);\n            transform: translateX(160.27778%); } }\n\n@keyframes secondary-indeterminate-translate {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    -webkit-transform: translateX(37.65191%);\n            transform: translateX(37.65191%); }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    -webkit-transform: translateX(84.38617%);\n            transform: translateX(84.38617%); }\n  100% {\n    -webkit-transform: translateX(160.27778%);\n            transform: translateX(160.27778%); } }\n\n@-webkit-keyframes secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n    -webkit-transform: scaleX(0.4571);\n            transform: scaleX(0.4571); }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n            transform: scaleX(0.72796); }\n  100% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); } }\n\n@keyframes secondary-indeterminate-scale {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); }\n  19.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n    -webkit-transform: scaleX(0.4571);\n            transform: scaleX(0.4571); }\n  44.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n    -webkit-transform: scaleX(0.72796);\n            transform: scaleX(0.72796); }\n  100% {\n    -webkit-transform: scaleX(0.08);\n            transform: scaleX(0.08); } }\n\n@-webkit-keyframes buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); } }\n\n@keyframes buffering {\n  to {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); } }\n\n@-webkit-keyframes primary-indeterminate-translate-reverse {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    -webkit-transform: translateX(-83.67142%);\n            transform: translateX(-83.67142%); }\n  100% {\n    -webkit-transform: translateX(-200.61106%);\n            transform: translateX(-200.61106%); } }\n\n@keyframes primary-indeterminate-translate-reverse {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  59.15% {\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    -webkit-transform: translateX(-83.67142%);\n            transform: translateX(-83.67142%); }\n  100% {\n    -webkit-transform: translateX(-200.61106%);\n            transform: translateX(-200.61106%); } }\n\n@-webkit-keyframes secondary-indeterminate-translate-reverse {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    -webkit-transform: translateX(-37.65191%);\n            transform: translateX(-37.65191%); }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    -webkit-transform: translateX(-84.38617%);\n            transform: translateX(-84.38617%); }\n  100% {\n    -webkit-transform: translateX(-160.27778%);\n            transform: translateX(-160.27778%); } }\n\n@keyframes secondary-indeterminate-translate-reverse {\n  0% {\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40969);\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);\n    -webkit-transform: translateX(-37.65191%);\n            transform: translateX(-37.65191%); }\n  48.35% {\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62704, 0.6, 0.90203);\n    -webkit-transform: translateX(-84.38617%);\n            transform: translateX(-84.38617%); }\n  100% {\n    -webkit-transform: translateX(-160.27778%);\n            transform: translateX(-160.27778%); } }\n\n@-webkit-keyframes buffering-reverse {\n  to {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); } }\n\n@keyframes buffering-reverse {\n  to {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); } }\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  overflow: hidden; }\n  .mdc-linear-progress__bar {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-animation: none;\n            animation: none;\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }\n  .mdc-linear-progress__bar-inner {\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-animation: none;\n            animation: none; }\n  .mdc-linear-progress__buffering-dots {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-animation: buffering 250ms infinite linear;\n            animation: buffering 250ms infinite linear;\n    background-repeat: repeat-x;\n    background-size: 10px 4px; }\n  .mdc-linear-progress__buffer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    transition: -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1); }\n  .mdc-linear-progress__primary-bar {\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0); }\n  .mdc-linear-progress__secondary-bar {\n    visibility: hidden; }\n  .mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n    transition: none; }\n  .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n    left: -145.166611%;\n    -webkit-animation: primary-indeterminate-translate 2s infinite linear;\n            animation: primary-indeterminate-translate 2s infinite linear; }\n    .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n      -webkit-animation: primary-indeterminate-scale 2s infinite linear;\n              animation: primary-indeterminate-scale 2s infinite linear; }\n  .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n    left: -54.888891%;\n    -webkit-animation: secondary-indeterminate-translate 2s infinite linear;\n            animation: secondary-indeterminate-translate 2s infinite linear;\n    visibility: visible; }\n    .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n      -webkit-animation: secondary-indeterminate-scale 2s infinite linear;\n              animation: secondary-indeterminate-scale 2s infinite linear; }\n  .mdc-linear-progress--reversed .mdc-linear-progress__bar,\n  .mdc-linear-progress--reversed .mdc-linear-progress__buffer {\n    right: 0;\n    -webkit-transform-origin: center right;\n            transform-origin: center right; }\n  .mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n    -webkit-animation-name: primary-indeterminate-translate-reverse;\n            animation-name: primary-indeterminate-translate-reverse; }\n  .mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n    -webkit-animation-name: secondary-indeterminate-translate-reverse;\n            animation-name: secondary-indeterminate-translate-reverse; }\n  .mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots {\n    -webkit-animation: buffering-reverse 250ms infinite linear;\n            animation: buffering-reverse 250ms infinite linear; }\n  .mdc-linear-progress--closed {\n    opacity: 0; }\n\n.mdc-linear-progress__bar-inner {\n  background-color: #6200ee;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #6200ee); }\n\n.mdc-linear-progress__buffering-dots {\n  background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\"); }\n\n.mdc-linear-progress__buffer {\n  background-color: #e6e6e6; }\n\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto; }\n\n.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto; }", ""]);
// Exports
exports.locals = {
	"mdc-linear-progress": "mdc-linear-progress",
	"mdc-linear-progress__bar": "mdc-linear-progress__bar",
	"mdc-linear-progress__bar-inner": "mdc-linear-progress__bar-inner",
	"mdc-linear-progress__buffering-dots": "mdc-linear-progress__buffering-dots",
	"buffering": "buffering",
	"mdc-linear-progress__buffer": "mdc-linear-progress__buffer",
	"mdc-linear-progress__primary-bar": "mdc-linear-progress__primary-bar",
	"mdc-linear-progress__secondary-bar": "mdc-linear-progress__secondary-bar",
	"mdc-linear-progress--indeterminate": "mdc-linear-progress--indeterminate",
	"primary-indeterminate-translate": "primary-indeterminate-translate",
	"primary-indeterminate-scale": "primary-indeterminate-scale",
	"secondary-indeterminate-translate": "secondary-indeterminate-translate",
	"secondary-indeterminate-scale": "secondary-indeterminate-scale",
	"mdc-linear-progress--reversed": "mdc-linear-progress--reversed",
	"primary-indeterminate-translate-reverse": "primary-indeterminate-translate-reverse",
	"secondary-indeterminate-translate-reverse": "secondary-indeterminate-translate-reverse",
	"buffering-reverse": "buffering-reverse",
	"mdc-linear-progress--closed": "mdc-linear-progress--closed"
};
module.exports = exports;


/***/ }),
/* 63 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "environment", function() { return /* reexport */ environment; });
__webpack_require__.d(__webpack_exports__, "errors", function() { return /* reexport */ errors_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "log", function() { return /* reexport */ log_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "operations", function() { return /* reexport */ operations; });
__webpack_require__.d(__webpack_exports__, "preferences", function() { return /* reexport */ preferences_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "stylesheets", function() { return /* reexport */ stylesheets; });
__webpack_require__.d(__webpack_exports__, "userscripter", function() { return /* reexport */ userscripter_namespaceObject; });

// NAMESPACE OBJECT: ./node_modules/userscripter/lib/errors.mjs
var errors_namespaceObject = {};
__webpack_require__.r(errors_namespaceObject);
__webpack_require__.d(errors_namespaceObject, "explanation", function() { return explanation; });
__webpack_require__.d(errors_namespaceObject, "failureDescriber", function() { return failureDescriber; });

// NAMESPACE OBJECT: ./node_modules/userscripter/lib/log.mjs
var log_namespaceObject = {};
__webpack_require__.r(log_namespaceObject);
__webpack_require__.d(log_namespaceObject, "setPrefix", function() { return setPrefix; });
__webpack_require__.d(log_namespaceObject, "setLogger", function() { return setLogger; });
__webpack_require__.d(log_namespaceObject, "log", function() { return log; });
__webpack_require__.d(log_namespaceObject, "info", function() { return info; });
__webpack_require__.d(log_namespaceObject, "warning", function() { return warning; });
__webpack_require__.d(log_namespaceObject, "error", function() { return error; });

// NAMESPACE OBJECT: ./node_modules/userscripter/lib/preferences.mjs
var preferences_namespaceObject = {};
__webpack_require__.r(preferences_namespaceObject);
__webpack_require__.d(preferences_namespaceObject, "subscriptable", function() { return subscriptable; });
__webpack_require__.d(preferences_namespaceObject, "loggingResponseHandler", function() { return loggingResponseHandler; });
__webpack_require__.d(preferences_namespaceObject, "noopResponseHandler", function() { return noopResponseHandler; });

// NAMESPACE OBJECT: ./node_modules/userscripter/lib/userscripter.mjs
var userscripter_namespaceObject = {};
__webpack_require__.r(userscripter_namespaceObject);
__webpack_require__.d(userscripter_namespaceObject, "run", function() { return run; });

// EXTERNAL MODULE: ./node_modules/userscripter/lib/environment.mjs
var environment = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/lines-unlines/dist/index.mjs
function lines(s) {
    return s === "" ? [] : s.replace(/\n$/, "").split("\n");
}
function unlines(ls) {
    return ls.map(line => line + "\n").join("");
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/userscripter/lib/errors.mjs

const INDENTATION = "  ";
function formatDependency(d) {
    return INDENTATION + d.key + ": " + d.selector;
}
function explanation(failure) {
    switch (failure.result.reason) {
        case 0:
            return unlines([
                `These dependencies were not found:`,
                ``,
                unlines(failure.result.dependencies.map(formatDependency)),
            ]);
        case 1:
            return unlines([
                `The operation failed with this error:`,
                ``,
                failure.result.message,
            ]);
    }
}
function failureDescriber(context) {
    return failure => unlines([
        `Could not ${failure.operation.description} on this page:`,
        ``,
        INDENTATION + location.href,
        ``,
        explanation(failure).trim(),
        ``,
        `This problem might be caused by ${context.siteName} changing its content/structure, in which case ${context.extensionName} needs to be updated accordingly. Otherwise, it's probably a bug in ${context.extensionName}.`,
        ``,
        `If you file a bug report, please include this message.`,
    ]);
}

// CONCATENATED MODULE: ./node_modules/userscripter/lib/log.mjs
let prefix = "";
let logger = console;
function setPrefix(p) {
    prefix = p;
}
function setLogger(l) {
    logger = l;
}
function log(str) {
    logger.log(prefix, str);
}
function info(str) {
    logger.info(prefix, str);
}
function warning(str) {
    logger.warn(prefix, str);
}
function error(str) {
    logger.error(prefix, str);
}

// EXTERNAL MODULE: ./node_modules/userscripter/lib/operations.mjs + 1 modules
var operations = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/userscripter/lib/preferences.mjs

function subscriptable(handler) {
    const changeListeners = new Set();
    return {
        subscribe: (listener) => { changeListeners.add(listener); },
        unsubscribe: (listener) => { changeListeners.delete(listener); },
        handler: (summary, preferences) => {
            if (summary.action === "set") {
                changeListeners.forEach(f => f(summary.preference));
            }
            return handler(summary, preferences);
        },
    };
}
function loggingResponseHandler(summary, preferences) {
    const response = summary.response;
    switch (response.status) {
        case 0:
            return response;
        case 1:
            if (summary.action === "get") {
                warning(`The saved value for preference '${summary.preference.key}' (${JSON.stringify(response.saved)}) was invalid. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            if (summary.action === "set") {
                warning(`Could not set value ${JSON.stringify(response.value)} for preference '${summary.preference.key}' because it was invalid.`);
            }
            return response;
        case 2:
            if (summary.action === "get") {
                warning(`The saved value for preference '${summary.preference.key}' had the wrong type. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 3:
            if (summary.action === "get") {
                warning(`The saved value for preference '${summary.preference.key}' could not be parsed. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 4:
            switch (summary.action) {
                case "get":
                    error(`Could not read preference '${summary.preference.key}' because localStorage could not be accessed. Using value ${JSON.stringify(summary.preference.default)}.`);
                    break;
                case "set":
                    error(`Could not save value ${JSON.stringify(summary.response.value)} for preference '${summary.preference.key}' because localStorage could not be accessed.`);
                    break;
                default:
                    assertUnreachable(summary.action);
            }
            return response;
        default:
            return assertUnreachable(response.status);
    }
}
function noopResponseHandler(summary, _) {
    return summary.response;
}
function assertUnreachable(x) {
    throw new Error("assertUnreachable: " + x);
}

// EXTERNAL MODULE: ./node_modules/userscripter/lib/stylesheets.mjs
var stylesheets = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/userscripter/lib/userscripter.mjs



function run(userscript) {
    setPrefix(`[${userscript.name}]`);
    const attr = attribute(userscript.id);
    if (document.documentElement.hasAttribute(attr)) {
        warning(`It looks as though ${userscript.name} has already run (because the attribute "${attr}" was found on <head>). Stopping.`);
    }
    else {
        document.documentElement.setAttribute(attr, "");
        userscript.initialAction();
        stylesheets["insert"](userscript.stylesheets);
        operations["run"](userscript.operationsPlan);
    }
}
function attribute(id) {
    return "data-" + id + "-has-run";
}

// CONCATENATED MODULE: ./node_modules/userscripter/lib/index.mjs










/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return /* binding */ ripple_MDCRipple; });
__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return /* reexport */ ripple_foundation; });
__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() { return /* binding */ RippleCapableSurface; });
__webpack_require__.d(__webpack_exports__, "util", function() { return /* reexport */ util_namespaceObject; });

// NAMESPACE OBJECT: ./node_modules/@material/ripple/util.js
var util_namespaceObject = {};
__webpack_require__.r(util_namespaceObject);
__webpack_require__.d(util_namespaceObject, "supportsCssVariables", function() { return supportsCssVariables; });
__webpack_require__.d(util_namespaceObject, "applyPassive", function() { return applyPassive; });
__webpack_require__.d(util_namespaceObject, "getMatchesProperty", function() { return getMatchesProperty; });
__webpack_require__.d(util_namespaceObject, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });

// EXTERNAL MODULE: ./node_modules/@material/base/component.js
var component = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@material/ripple/adapter.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventTarget} target */
  containsEventTarget(target) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}

/* harmony default export */ var adapter = (MDCRippleAdapter);

// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};



// CONCATENATED MODULE: ./node_modules/@material/ripple/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}



// CONCATENATED MODULE: ./node_modules/@material/ripple/foundation.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

// Activation events registered on the root element of each instance for activation
const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
let activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class foundation_MDCRippleFoundation extends foundation["a" /* default */] {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      containsEventTarget: (/* target: !EventTarget */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(foundation_MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    this.activateHandler_ = (e) => this.activate_(e);

    /** @private {function(!Event)} */
    this.deactivateHandler_ = (e) => this.deactivate_(e);

    /** @private {function(?Event=)} */
    this.focusHandler_ = () => this.handleFocus();

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => this.handleBlur();

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    this.previousActivationEvent_ = null;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  supportsPressRipple_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  /** @override */
  init() {
    const supportsPressRipple = this.supportsPressRipple_();

    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      const {ROOT, UNBOUNDED} = foundation_MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.addClass(ROOT);
        if (this.adapter_.isUnbounded()) {
          this.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          this.layoutInternal_();
        }
      });
    }
  }

  /** @override */
  destroy() {
    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(foundation_MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(foundation_MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      const {ROOT, UNBOUNDED} = foundation_MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.removeClass(ROOT);
        this.adapter_.removeClass(UNBOUNDED);
        this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  }

  /**
   * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
   * @private
   */
  registerRootHandlers_(supportsPressRipple) {
    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach((type) => {
        this.adapter_.registerInteractionHandler(type, this.activateHandler_);
      });
      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  }

  /**
   * @param {!Event} e
   * @private
   */
  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }

  /** @private */
  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }

  /** @private */
  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }

  /** @private */
  removeCssVars_() {
    const {strings} = foundation_MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );

    const hasActivatedChild =
      e && activatedTargets.length > 0 && activatedTargets.some((target) => this.adapter_.containsEventTarget(target));
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push(/** @type {!EventTarget} */ (e.target));
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  checkElementMadeActive_(e) {
    return (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = foundation_MDCRippleFoundation.strings;
    const {FG_DEACTIVATION, FG_ACTIVATION} = foundation_MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = foundation_MDCRippleFoundation.numbers;

    this.layoutInternal_();

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationEvent, wasActivatedByPointer} = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const {FG_DEACTIVATION} = foundation_MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {FG_ACTIVATION} = foundation_MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(() => this.previousActivationEvent_ = null, foundation_MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }

  /**
   * @param {?Event} e
   * @private
   */
  deactivate_(e) {
    const activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + foundation_MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * foundation_MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = foundation_MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }

  /** @param {boolean} unbounded */
  setUnbounded(unbounded) {
    const {UNBOUNDED} = foundation_MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }

  handleFocus() {
    requestAnimationFrame(() =>
      this.adapter_.addClass(foundation_MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }

  handleBlur() {
    requestAnimationFrame(() =>
      this.adapter_.removeClass(foundation_MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }
}

/* harmony default export */ var ripple_foundation = (foundation_MDCRippleFoundation);

// CONCATENATED MODULE: ./node_modules/@material/ripple/index.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class ripple_MDCRipple extends component["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new ripple_MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      containsEventTarget: (target) => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, applyPassive()),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(evtType, handler, applyPassive()),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /**
   * @return {!MDCRippleFoundation}
   * @override
   */
  getDefaultFoundation() {
    return new ripple_foundation(ripple_MDCRipple.createAdapter(this));
  }

  /** @override */
  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

/** @protected {!Element} */
RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MDCLinearProgressFoundation", function() { return /* reexport */ foundation_MDCLinearProgressFoundation; });
__webpack_require__.d(__webpack_exports__, "MDCLinearProgress", function() { return /* binding */ linear_progress_MDCLinearProgress; });

// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@material/base/component.js
var component = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@material/base/index.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






// EXTERNAL MODULE: ./node_modules/@material/animation/index.js
var animation = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@material/linear-progress/constants.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const cssClasses = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed',
};

const strings = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
};

// CONCATENATED MODULE: ./node_modules/@material/linear-progress/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






class foundation_MDCLinearProgressFoundation extends foundation["a" /* default */] {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      getPrimaryBar: () => /* el: Element */ {},
      getBuffer: () => /* el: Element */ {},
      hasClass: (/* className: string */) => false,
      removeClass: (/* className: string */) => {},
      setStyle: (/* el: Element, styleProperty: string, value: string */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(foundation_MDCLinearProgressFoundation.defaultAdapter, adapter));
  }

  init() {
    this.determinate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
    this.reverse_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
    this.progress_ = 0;
  }

  setDeterminate(isDeterminate) {
    this.determinate_ = isDeterminate;
    if (this.determinate_) {
      this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
    } else {
      this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  }

  setProgress(value) {
    this.progress_ = value;
    if (this.determinate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  }

  setBuffer(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  }

  setReverse(isReversed) {
    this.reverse_ = isReversed;
    if (this.reverse_) {
      this.adapter_.addClass(cssClasses.REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
    }
  }

  open() {
    this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
  }

  close() {
    this.adapter_.addClass(cssClasses.CLOSED_CLASS);
  }

  setScale_(el, scaleValue) {
    const value = 'scaleX(' + scaleValue + ')';
    animation["c" /* transformStyleProperties */].forEach((transformStyleProperty) => {
      this.adapter_.setStyle(el, transformStyleProperty, value);
    });
  }
}

// CONCATENATED MODULE: ./node_modules/@material/linear-progress/index.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






class linear_progress_MDCLinearProgress extends component["a" /* default */] {
  static attachTo(root) {
    return new linear_progress_MDCLinearProgress(root);
  }

  set determinate(value) {
    this.foundation_.setDeterminate(value);
  }

  set progress(value) {
    this.foundation_.setProgress(value);
  }

  set buffer(value) {
    this.foundation_.setBuffer(value);
  }

  set reverse(value) {
    this.foundation_.setReverse(value);
  }

  open() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new foundation_MDCLinearProgressFoundation({
      addClass: (className) => this.root_.classList.add(className),
      getPrimaryBar: () => this.root_.querySelector(foundation_MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR),
      getBuffer: () => this.root_.querySelector(foundation_MDCLinearProgressFoundation.strings.BUFFER_SELECTOR),
      hasClass: (className) => this.root_.classList.contains(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setStyle: (el, styleProperty, value) => el.style[styleProperty] = value,
    });
  }
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MDCSliderFoundation", function() { return /* reexport */ slider_foundation; });
__webpack_require__.d(__webpack_exports__, "MDCSlider", function() { return /* binding */ slider_MDCSlider; });

// EXTERNAL MODULE: ./node_modules/@material/base/component.js
var component = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@material/slider/constants.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
};

/** @enum {string} */
const strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
};

/** @enum {number} */
const numbers = {
  PAGE_FACTOR: 4,
};



// CONCATENATED MODULE: ./node_modules/@material/slider/adapter.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCSliderAdapter {
  /**
   * Returns true if className exists for the slider Element
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Adds a class to the slider Element
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the slider Element
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns a string if attribute name exists on the slider Element,
   * otherwise returns null
   * @param {string} name
   * @return {?string}
   */
  getAttribute(name) {}

  /**
   * Sets attribute name on slider Element to value
   * @param {string} name
   * @param {string} value
   */
  setAttribute(name, value) {}

  /**
   * Removes attribute name from slider Element
   * @param {string} name
   */
  removeAttribute(name) {}

  /**
   * Returns the bounding client rect for the slider Element
   * @return {?ClientRect}
   */
  computeBoundingRect() {}

  /**
   * Returns the tab index of the slider Element
   * @return {number}
   */
  getTabIndex() {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /**
   * Registers an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerThumbContainerInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the thumb container element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterThumbContainerInteractionHandler(type, handler) {}

  /**
   * Registers an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerBodyInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the body for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterBodyInteractionHandler(type, handler) {}

  /**
   * Registers an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */
  registerResizeHandler(handler) {}

  /**
   * Deregisters an event handler for the window resize event
   * @param {function(!Event): undefined} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * Emits a custom event MDCSlider:input from the root
   */
  notifyInput() {}

  /**
   * Emits a custom event MDCSlider:change from the root
   */
  notifyChange() {}

  /**
   * Sets a style property of the thumb container element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setThumbContainerStyleProperty(propertyName, value) {}

  /**
   * Sets a style property of the track element to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setTrackStyleProperty(propertyName, value) {}

  /**
   * Sets the inner text of the pin marker to the passed value
   * @param {number} value
   */
  setMarkerValue(value) {}

  /**
   * Appends the passed number of track markers to the track mark container element
   * @param {number} numMarkers
   */
  appendTrackMarkers(numMarkers) {}

  /**
   * Removes all track markers fromt he track mark container element
   */
  removeTrackMarkers() {}

  /**
   * Sets a style property of the last track marker to the passed value
   * @param {string} propertyName
   * @param {string} value
   */
  setLastTrackMarkersStyleProperty(propertyName, value) {}

  /**
   * Returns true if the root element is RTL, otherwise false
   * @return {boolean}
   */
  isRTL() {}
}

/* harmony default export */ var adapter = (MDCSliderAdapter);

// EXTERNAL MODULE: ./node_modules/@material/animation/index.js
var animation = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@material/base/foundation.js
var foundation = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@material/slider/foundation.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/** @enum {string} */
const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
};

/** @enum {string} */
const MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove',
};

const DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
const UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];

/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */
class foundation_MDCSliderFoundation extends foundation["a" /* default */] {
  /** @return enum {cssClasses} */
  static get cssClasses() {
    return cssClasses;
  }

  /** @return enum {strings} */
  static get strings() {
    return strings;
  }

  /** @return enum {numbers} */
  static get numbers() {
    return numbers;
  }

  /** @return {!MDCSliderAdapter} */
  static get defaultAdapter() {
    return /** @type {!MDCSliderAdapter} */ ({
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getAttribute: (/* name: string */) => /* string|null */ null,
      setAttribute: (/* name: string, value: string */) => {},
      removeAttribute: (/* name: string */) => {},
      computeBoundingRect: () => /* ClientRect */ ({
        top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0,
      }),
      getTabIndex: () => /* number */ 0,
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      notifyInput: () => {},
      notifyChange: () => {},
      setThumbContainerStyleProperty: (/* propertyName: string, value: string */) => {},
      setTrackStyleProperty: (/* propertyName: string, value: string */) => {},
      setMarkerValue: (/* value: number */) => {},
      appendTrackMarkers: (/* numMarkers: number */) => {},
      removeTrackMarkers: () => {},
      setLastTrackMarkersStyleProperty: (/* propertyName: string, value: string */) => {},
      isRTL: () => /* boolean */ false,
    });
  }

  /**
   * Creates a new instance of MDCSliderFoundation
   * @param {?MDCSliderAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(foundation_MDCSliderFoundation.defaultAdapter, adapter));
    /** @private {?ClientRect} */
    this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    this.savedTabIndex_ = NaN;
    this.active_ = false;
    this.inTransit_ = false;
    this.isDiscrete_ = false;
    this.hasTrackMarker_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;
    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };
    this.interactionStartHandler_ = (evt) => this.handleDown_(evt);
    this.keydownHandler_ = (evt) => this.handleKeydown_(evt);
    this.focusHandler_ = () => this.handleFocus_();
    this.blurHandler_ = () => this.handleBlur_();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.isDiscrete_ = this.adapter_.hasClass(cssClasses.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses.HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach((evtName) => this.adapter_.registerInteractionHandler(evtName, this.interactionStartHandler_));
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach((evtName) => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
    // At last step, provide a reasonable default value to discrete slider
    if (this.isDiscrete_ && this.getStep() == 0) {
      this.step_ = 1;
    }
  }

  destroy() {
    DOWN_EVENTS.forEach((evtName) => {
      this.adapter_.deregisterInteractionHandler(evtName, this.interactionStartHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    DOWN_EVENTS.forEach((evtName) => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  setupTrackMarker() {
    if (this.isDiscrete_ && this.hasTrackMarker_&& this.getStep() != 0) {
      const min = this.getMin();
      const max = this.getMax();
      const step = this.getStep();
      let numMarkers = (max - min) / step;

      // In case distance between max & min is indivisible to step,
      // we place the secondary to last marker proportionally at where thumb
      // could reach and place the last marker at max value
      const indivisible = Math.ceil(numMarkers) !== numMarkers;
      if (indivisible) {
        numMarkers = Math.ceil(numMarkers);
      }

      this.adapter_.removeTrackMarkers();
      this.adapter_.appendTrackMarkers(numMarkers);

      if (indivisible) {
        const lastStepRatio = (max - numMarkers * step) / step + 1;
        const flex = Object(animation["b" /* getCorrectPropertyName */])(window, 'flex');
        this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
      }
    }
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }

  /** @return {number} */
  getValue() {
    return this.value_;
  }

  /** @param {number} value */
  setValue(value) {
    this.setValue_(value, false);
  }

  /** @return {number} */
  getMax() {
    return this.max_;
  }

  /** @param {number} max */
  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  }

  /** @return {number} */
  getMin() {
    return this.min_;
  }

  /** @param {number} min */
  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  }

  /** @return {number} */
  getStep() {
    return this.step_;
  }

  /** @param {number} step */
  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    if (this.isDiscrete_ && (typeof(step) !== 'number' || step < 1)) {
      step = 1;
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  }

  /** @return {boolean} */
  isDisabled() {
    return this.disabled_;
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(cssClasses.DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(strings.ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(strings.ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }

  /**
   * Called when the user starts interacting with the slider
   * @param {!Event} evt
   * @private
   */
  handleDown_(evt) {
    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    const moveHandler = (evt) => {
      this.handleMove_(evt);
    };

    // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)
    const upHandler = () => {
      this.handleUp_();
      this.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach((evtName) => this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler));
    };

    this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
    UP_EVENTS.forEach((evtName) => this.adapter_.registerBodyInteractionHandler(evtName, upHandler));
    this.setValueFromEvt_(evt);
  }

  /**
   * Called when the user moves the slider
   * @param {!Event} evt
   * @private
   */
  handleMove_(evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  }

  /**
   * Called when the user's interaction with the slider ends
   * @private
   */
  handleUp_() {
    this.setActive_(false);
    this.adapter_.notifyChange();
  }

  /**
   * Returns the pageX of the event
   * @param {!Event} evt
   * @return {number}
   * @private
   */
  getPageX_(evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }
    return evt.pageX;
  }

  /**
   * Sets the slider value from an event
   * @param {!Event} evt
   * @private
   */
  setValueFromEvt_(evt) {
    const pageX = this.getPageX_(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }

  /**
   * Computes the new value from the pageX position
   * @param {number} pageX
   * @return {number}
   */
  computeValueFromPageX_(pageX) {
    const {max_: max, min_: min} = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  }

  /**
   * Handles keydown events
   * @param {!Event} evt
   */
  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(cssClasses.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }

  /**
   * Returns the computed name of the event
   * @param {!Event} kbdEvt
   * @return {string}
   */
  getKeyId_(kbdEvt) {
    if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
      return KEY_IDS.ARROW_LEFT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
      return KEY_IDS.ARROW_RIGHT;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
      return KEY_IDS.ARROW_UP;
    }
    if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
      return KEY_IDS.ARROW_DOWN;
    }
    if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
      return KEY_IDS.HOME;
    }
    if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
      return KEY_IDS.END;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
      return KEY_IDS.PAGE_UP;
    }
    if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
      return KEY_IDS.PAGE_DOWN;
    }

    return '';
  }

  /**
   * Computes the value given a keyboard key ID
   * @param {string} keyId
   * @return {number}
   */
  getValueForKeyId_(keyId) {
    const {max_: max, min_: min, step_: step} = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (
      keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT
    );
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
    case KEY_IDS.ARROW_LEFT:
    case KEY_IDS.ARROW_DOWN:
      return this.value_ - delta;
    case KEY_IDS.ARROW_RIGHT:
    case KEY_IDS.ARROW_UP:
      return this.value_ + delta;
    case KEY_IDS.HOME:
      return this.min_;
    case KEY_IDS.END:
      return this.max_;
    case KEY_IDS.PAGE_UP:
      return this.value_ + delta * numbers.PAGE_FACTOR;
    case KEY_IDS.PAGE_DOWN:
      return this.value_ - delta * numbers.PAGE_FACTOR;
    default:
      return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(cssClasses.FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses.FOCUS);
  }

  /**
   * Sets the value of the slider
   * @param {number} value
   * @param {boolean} shouldFireInput
   * @param {boolean=} force
   */
  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const {min_: min, max_: max} = this;
    const valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(strings.ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
      if (this.isDiscrete_) {
        this.adapter_.setMarkerValue(value);
      }
    }
  }

  /**
   * Calculates the quantized value
   * @param {number} value
   * @return {number}
   */
  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const {max_: max, min_: min, value_: value} = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = Object(animation["b" /* getCorrectPropertyName */])(window, 'transform');
    const transitionendEvtName = Object(animation["a" /* getCorrectEventName */])(window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }

  /**
   * Toggles the active state of the slider
   * @param {boolean} active
   */
  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(cssClasses.ACTIVE, this.active_);
  }

  /**
   * Toggles the inTransit state of the slider
   * @param {boolean} inTransit
   */
  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
  }

  /**
   * Conditionally adds or removes a class based on shouldBePresent
   * @param {string} className
   * @param {boolean} shouldBePresent
   */
  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }
}

/* harmony default export */ var slider_foundation = (foundation_MDCSliderFoundation);

// CONCATENATED MODULE: ./node_modules/@material/slider/index.js
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends MDCComponent<!MDCSliderFoundation>
 */
class slider_MDCSlider extends component["a" /* default */] {
  static attachTo(root) {
    return new slider_MDCSlider(root);
  }

  constructor(...args) {
    super(...args);
    /** @type {?Element} */
    this.thumbContainer_;
    /** @type {?Element} */
    this.track_;
    /** @type {?Element} */
    this.pinValueMarker_;
    /** @type {?Element} */
    this.trackMarkerContainer_;
  }

  /** @return {number} */
  get value() {
    return this.foundation_.getValue();
  }

  /** @param {number} value */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /** @return {number} */
  get min() {
    return this.foundation_.getMin();
  }

  /** @param {number} min */
  set min(min) {
    this.foundation_.setMin(min);
  }

  /** @return {number} */
  get max() {
    return this.foundation_.getMax();
  }

  /** @param {number} max */
  set max(max) {
    this.foundation_.setMax(max);
  }

  /** @return {number} */
  get step() {
    return this.foundation_.getStep();
  }

  /** @param {number} step */
  set step(step) {
    this.foundation_.setStep(step);
  }

  /** @return {boolean} */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /** @param {boolean} disabled */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(strings.THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(strings.TRACK_SELECTOR);
    this.pinValueMarker_ = this.root_.querySelector(strings.PIN_VALUE_MARKER_SELECTOR);
    this.trackMarkerContainer_ = this.root_.querySelector(strings.TRACK_MARKER_CONTAINER_SELECTOR);
  }

  /**
   * @return {!MDCSliderFoundation}
   */
  getDefaultFoundation() {
    return new slider_foundation(
      /** @type {!MDCSliderAdapter} */ ({
        hasClass: (className) => this.root_.classList.contains(className),
        addClass: (className) => this.root_.classList.add(className),
        removeClass: (className) => this.root_.classList.remove(className),
        getAttribute: (name) => this.root_.getAttribute(name),
        setAttribute: (name, value) => this.root_.setAttribute(name, value),
        removeAttribute: (name) => this.root_.removeAttribute(name),
        computeBoundingRect: () => this.root_.getBoundingClientRect(),
        getTabIndex: () => this.root_.tabIndex,
        registerInteractionHandler: (type, handler) => {
          this.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: (type, handler) => {
          this.root_.removeEventListener(type, handler);
        },
        registerThumbContainerInteractionHandler: (type, handler) => {
          this.thumbContainer_.addEventListener(type, handler);
        },
        deregisterThumbContainerInteractionHandler: (type, handler) => {
          this.thumbContainer_.removeEventListener(type, handler);
        },
        registerBodyInteractionHandler: (type, handler) => {
          document.body.addEventListener(type, handler);
        },
        deregisterBodyInteractionHandler: (type, handler) => {
          document.body.removeEventListener(type, handler);
        },
        registerResizeHandler: (handler) => {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: (handler) => {
          window.removeEventListener('resize', handler);
        },
        notifyInput: () => {
          this.emit(strings.INPUT_EVENT, this);
        },
        notifyChange: () => {
          this.emit(strings.CHANGE_EVENT, this);
        },
        setThumbContainerStyleProperty: (propertyName, value) => {
          this.thumbContainer_.style.setProperty(propertyName, value);
        },
        setTrackStyleProperty: (propertyName, value) => {
          this.track_.style.setProperty(propertyName, value);
        },
        setMarkerValue: (value) => {
          this.pinValueMarker_.innerText = value;
        },
        appendTrackMarkers: (numMarkers) => {
          const frag = document.createDocumentFragment();
          for (let i = 0; i < numMarkers; i++) {
            const marker = document.createElement('div');
            marker.classList.add('mdc-slider__track-marker');
            frag.appendChild(marker);
          }
          this.trackMarkerContainer_.appendChild(frag);
        },
        removeTrackMarkers: () => {
          while (this.trackMarkerContainer_.firstChild) {
            this.trackMarkerContainer_.removeChild(this.trackMarkerContainer_.firstChild);
          }
        },
        setLastTrackMarkersStyleProperty: (propertyName, value) => {
          // We remove and append new nodes, thus, the last track marker must be dynamically found.
          const lastTrackMarker = this.root_.querySelector(strings.LAST_TRACK_MARKER_SELECTOR);
          lastTrackMarker.style.setProperty(propertyName, value);
        },
        isRTL: () => getComputedStyle(this.root_).direction === 'rtl',
      })
    );
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(strings.ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(strings.ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(strings.ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(strings.STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = (
      this.root_.hasAttribute(strings.ARIA_DISABLED) &&
      this.root_.getAttribute(strings.ARIA_DISABLED) !== 'false'
    );
    this.foundation_.setupTrackMarker();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @param {number=} amount */
  stepUp(amount = (this.step || 1)) {
    this.value += amount;
  }

  /** @param {number=} amount */
  stepDown(amount = (this.step || 1)) {
    this.value -= amount;
  }
}




/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "compose", function() { return /* reexport */ compose; });

// CONCATENATED MODULE: ./node_modules/@typed/compose/lib.es2015/compose.js
function compose() {
    switch (arguments.length) {
        case 1: return _compose1(arguments[0]);
        case 2: return _compose2(arguments[0], arguments[1]);
        case 3: return _compose3(arguments[0], arguments[1], arguments[2]);
        case 4: return _compose4(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5: return _compose5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    ;
}
function _compose1(f) {
    return function compose1Fn(a) {
        return f(a);
    };
}
function _compose2(g, f) {
    return function compose2Fn(a) {
        return g(f(a));
    };
}
function _compose3(h, g, f) {
    return function compose3Fn(a) {
        return h(g(f(a)));
    };
}
function _compose4(i, h, g, f) {
    return function compose3Fn(a) {
        return i(h(g(f(a))));
    };
}
function _compose5(j, i, h, g, f) {
    return function compose5Fn(a) {
        return j(i(h(g(f(a)))));
    };
}
//# sourceMappingURL=compose.js.map
// CONCATENATED MODULE: ./node_modules/@typed/compose/lib.es2015/index.js

//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);