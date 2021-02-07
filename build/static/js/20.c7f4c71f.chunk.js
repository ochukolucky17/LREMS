/*! For license information please see 20.c7f4c71f.chunk.js.LICENSE.txt */
(this.webpackJsonpdeoxa=this.webpackJsonpdeoxa||[]).push([[20],{36:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var d in o)n.call(o,d)&&o[d]&&e.push(d)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},37:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return d})),n.d(t,"isBodyOverflowing",(function(){return u})),n.d(t,"getOriginalBodyPadding",(function(){return c})),n.d(t,"conditionallyUpdateScrollbar",(function(){return s})),n.d(t,"setGlobalCssModule",(function(){return l})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return h})),n.d(t,"pick",(function(){return p})),n.d(t,"warnOnce",(function(){return m})),n.d(t,"deprecated",(function(){return b})),n.d(t,"DOMElement",(function(){return E})),n.d(t,"targetPropType",(function(){return Q})),n.d(t,"tagPropType",(function(){return y})),n.d(t,"TransitionTimeouts",(function(){return v})),n.d(t,"TransitionPropTypeKeys",(function(){return A})),n.d(t,"TransitionStatuses",(function(){return H})),n.d(t,"keyCodes",(function(){return j})),n.d(t,"PopperPlacements",(function(){return x})),n.d(t,"canUseDOM",(function(){return D})),n.d(t,"isReactRefObj",(function(){return C})),n.d(t,"toNumber",(function(){return w})),n.d(t,"isObject",(function(){return R})),n.d(t,"isFunction",(function(){return L})),n.d(t,"findDOMElements",(function(){return S})),n.d(t,"isArrayOrNodeList",(function(){return U})),n.d(t,"getTarget",(function(){return T})),n.d(t,"defaultToggleEvents",(function(){return N})),n.d(t,"addMultipleEventListeners",(function(){return K})),n.d(t,"focusableElements",(function(){return F}));var o,r=n(11),a=n.n(r);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function d(e){document.body.style.paddingRight=e>0?e+"px":null}function u(){return document.body.clientWidth<window.innerWidth}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;u()&&d(n+e)}function l(e){o=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function h(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n}function p(e,t){for(var n,o=Array.isArray(t)?t:[t],r=o.length,a={};r>0;)a[n=o[r-=1]]=e[n];return a}var O={};function m(e){O[e]||("undefined"!==typeof console&&console.error(e),O[e]=!0)}function b(e,t){return function(n,o,r){null!==n[o]&&"undefined"!==typeof n[o]&&m('"'+o+'" property of "'+r+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),d=3;d<a;d++)i[d-3]=arguments[d];return e.apply(void 0,[n,o,r].concat(i))}}var g="object"===typeof window&&window.Element||function(){};function E(e,t,n){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var Q=a.a.oneOfType([a.a.string,a.a.func,E,a.a.shape({current:a.a.any})]),y=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},A=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],H={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},j={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],D=!("undefined"===typeof window||!window.document||!window.document.createElement);function C(e){return!(!e||"object"!==typeof e)&&"current"in e}function I(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===I(e))return NaN;if(R(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=R(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var o=/^0b[01]+$/i.test(e);return o||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),o?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function R(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function L(e){if(!R(e))return!1;var t=I(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function S(e){if(C(e))return e.current;if(L(e))return e();if("string"===typeof e&&D){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function U(e){return null!==e&&(Array.isArray(e)||D&&"number"===typeof e.length)}function T(e,t){var n=S(e);return t?U(n)?n:null===n?[]:[n]:U(n)?n[0]:n}var N=["touchstart","click"];function K(e,t,n,o){var r=e;U(r)||(r=[r]);var a=n;if("string"===typeof a&&(a=a.split(/\s+/)),!U(r)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.addEventListener(e,t,o)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.removeEventListener(e,t,o)}))}))}}var F=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},42:function(e,t,n){"use strict";var o=n(1),r=n(10),a=n(0),i=n.n(a),d=n(11),u=n.n(d),c=n(36),s=n.n(c),l=n(37),f={tag:l.tagPropType,fluid:u.a.oneOfType([u.a.bool,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){var t=e.className,n=e.cssModule,a=e.fluid,d=e.tag,u=Object(r.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===a?c="container-fluid":a&&(c="container-"+a);var f=Object(l.mapToCssModules)(s()(t,c),n);return i.a.createElement(d,Object(o.a)({},u,{className:f}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},43:function(e,t,n){"use strict";var o=n(1),r=n(10),a=n(0),i=n.n(a),d=n(11),u=n.n(d),c=n(36),s=n.n(c),l=n(37),f=u.a.oneOfType([u.a.number,u.a.string]),h={tag:l.tagPropType,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,d=e.tag,u=e.form,c=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];c.forEach((function(t,n){var o=e[t];if(delete f[t],o){var r=!n;h.push(r?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var p=Object(l.mapToCssModules)(s()(t,a?"no-gutters":null,u?"form-row":"row",h),n);return i.a.createElement(d,Object(o.a)({},f,{className:p}))};O.propTypes=h,O.defaultProps=p,t.a=O},44:function(e,t,n){"use strict";var o=n(1),r=n(10),a=n(0),i=n.n(a),d=n(11),u=n.n(d),c=n(36),s=n.n(c),l=n(37),f=u.a.oneOfType([u.a.number,u.a.string]),h=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:f,offset:f})]),p={tag:l.tagPropType,xs:h,sm:h,md:h,lg:h,xl:h,className:u.a.string,cssModule:u.a.object,widths:u.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.widths,d=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),c=[];a.forEach((function(t,o){var r=e[t];if(delete u[t],r||""===r){var a=!o;if(Object(l.isObject)(r)){var i,d=a?"-":"-"+t+"-",f=m(a,t,r.size);c.push(Object(l.mapToCssModules)(s()(((i={})[f]=r.size||""===r.size,i["order"+d+r.order]=r.order||0===r.order,i["offset"+d+r.offset]=r.offset||0===r.offset,i)),n))}else{var h=m(a,t,r);c.push(h)}}})),c.length||c.push("col");var f=Object(l.mapToCssModules)(s()(t,c),n);return i.a.createElement(d,Object(o.a)({},u,{className:f}))};b.propTypes=p,b.defaultProps=O,t.a=b},465:function(e,t,n){e.exports=n.p+"static/media/hero-2-img.2ac4c7c1.png"},466:function(e,t){e.exports="data:image/png;base64,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"},575:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(3),a=n(5),i=n(4),d=n(0),u=n.n(d),c=n(12),s=n(42),l=n(43),f=n(44),h=n(465),p=n.n(h),O=n(466),m=n.n(O),b=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("section",{className:"hero-2-bg position-relative d-flex align-items-center bg-gradient-primary",id:"home"},u.a.createElement("div",{className:"hero-2-bg-overlay"}),u.a.createElement(s.a,null,u.a.createElement("div",{className:"hero-2-content"},u.a.createElement(l.a,{className:"align-items-center"},u.a.createElement(f.a,{lg:6},u.a.createElement("div",{className:"hero-2-title pr-lg-5"},u.a.createElement("h1",{className:"hero-2-title text-white mb-4 font-weight-normal line-height-1_4"},"Make More Money, Delight Your Customers"),u.a.createElement("p",{className:"text-white-70 font-weight-light f-18 line-height-1_6 mb-5 "},"Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam as eaque ipsaquaeab inventore."),u.a.createElement(c.b,{to:"",className:"btn btn-warning mr-lg-2"},u.a.createElement("i",{className:"mdi mdi-link-variant mr-2"})," Request Demo"),u.a.createElement(c.b,{to:"",className:"btn btn-light ml-1"},"Learn More"))),u.a.createElement(f.a,{lg:6},u.a.createElement("div",{className:"mt-5 mt-lg-0"},u.a.createElement("img",{src:p.a,alt:"",className:"img-fluid d-block mx-auto"})))))),u.a.createElement("div",{className:"hero-bottom-img"},u.a.createElement("img",{src:m.a,alt:"",className:"img-fluid d-block w-100 mx-auto"}))))}}]),n}(d.Component);t.default=b}}]);
//# sourceMappingURL=20.c7f4c71f.chunk.js.map