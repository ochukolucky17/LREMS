/*! For license information please see 10.26b7185e.chunk.js.LICENSE.txt */
(this.webpackJsonplrems=this.webpackJsonplrems||[]).push([[10],{124:function(e,t,n){e.exports=n.p+"static/media/logo-dark.5395fdff.png"},36:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},37:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return l})),n.d(t,"isBodyOverflowing",(function(){return c})),n.d(t,"getOriginalBodyPadding",(function(){return s})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return m})),n.d(t,"pick",(function(){return p})),n.d(t,"warnOnce",(function(){return b})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return O})),n.d(t,"TransitionTimeouts",(function(){return N})),n.d(t,"TransitionPropTypeKeys",(function(){return j})),n.d(t,"TransitionStatuses",(function(){return w})),n.d(t,"keyCodes",(function(){return x})),n.d(t,"PopperPlacements",(function(){return T})),n.d(t,"canUseDOM",(function(){return k})),n.d(t,"isReactRefObj",(function(){return A})),n.d(t,"toNumber",(function(){return P})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return S})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return F})),n.d(t,"getTarget",(function(){return I})),n.d(t,"defaultToggleEvents",(function(){return $})),n.d(t,"addMultipleEventListeners",(function(){return G})),n.d(t,"focusableElements",(function(){return W}));var r,a=n(11),o=n.n(a);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function l(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&l(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function m(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function p(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var y={};function b(e){y[e]||("undefined"!==typeof console&&console.error(e),y[e]=!0)}function g(e,t){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&b('"'+r+'" property of "'+a+'" has been deprecated.\n'+t);for(var o=arguments.length,i=new Array(o>3?o-3:0),l=3;l<o;l++)i[l-3]=arguments[l];return e.apply(void 0,[n,r,a].concat(i))}}var h="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=o.a.oneOfType([o.a.string,o.a.func,v,o.a.shape({current:o.a.any})]),O=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),N={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],w={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function A(e){return!(!e||"object"!==typeof e)&&"current"in e}function M(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function P(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===M(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(!C(e))return!1;var t=M(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(A(e))return e.current;if(S(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function F(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function I(e,t){var n=D(e);return t?F(n)?n:null===n?[]:[n]:F(n)?n[0]:n}var $=["touchstart","click"];function G(e,t,n,r){var a=e;F(a)||(a=[a]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!F(a)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.removeEventListener(e,t,r)}))}))}}var W=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},42:function(e,t,n){"use strict";var r=n(1),a=n(10),o=n(0),i=n.n(o),l=n(11),c=n.n(l),s=n(36),u=n.n(s),d=n(37),f={tag:d.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,l=e.tag,c=Object(a.a)(e,["className","cssModule","fluid","tag"]),s="container";!0===o?s="container-fluid":o&&(s="container-"+o);var f=Object(d.mapToCssModules)(u()(t,s),n);return i.a.createElement(l,Object(r.a)({},c,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},43:function(e,t,n){"use strict";var r=n(1),a=n(10),o=n(0),i=n.n(o),l=n(11),c=n.n(l),s=n(36),u=n.n(s),d=n(37),f=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,l=e.tag,c=e.form,s=e.widths,f=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r){var a=!n;m.push(a?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,c?"form-row":"row",m),n);return i.a.createElement(l,Object(r.a)({},f,{className:p}))};y.propTypes=m,y.defaultProps=p,t.a=y},44:function(e,t,n){"use strict";var r=n(1),a=n(10),o=n(0),i=n.n(o),l=n(11),c=n.n(l),s=n(36),u=n.n(s),d=n(37),f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),p={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.widths,l=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),s=[];o.forEach((function(t,r){var a=e[t];if(delete c[t],a||""===a){var o=!r;if(Object(d.isObject)(a)){var i,l=o?"-":"-"+t+"-",f=b(o,t,a.size);s.push(Object(d.mapToCssModules)(u()(((i={})[f]=a.size||""===a.size,i["order"+l+a.order]=a.order||0===a.order,i["offset"+l+a.offset]=a.offset||0===a.offset,i)),n))}else{var m=b(o,t,a);s.push(m)}}})),s.length||s.push("col");var f=Object(d.mapToCssModules)(u()(t,s),n);return i.a.createElement(l,Object(r.a)({},c,{className:f}))};g.propTypes=p,g.defaultProps=y,t.a=g},585:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),o=n(5),i=n(4),l=n(0),c=n.n(l),s=n(42),u=n(43),d=n(44),f=n(12),m=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{className:"mt-5"},c.a.createElement(d.a,{md:12},c.a.createElement("div",{className:"text-center text-muted"},c.a.createElement("p",{className:"mb-0 f-15"},"2020 \xa9 Deoxa. Design by Themesdesign")))))}}]),n}(l.Component),p=n(124),y=n.n(p),b=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={links:[{id:1,title:"Services",child:[{title:"Digital Marketing",link:"/"},{title:"Business Analysis",link:"/"},{title:"How It Work",link:"/"},{title:"Fix & Flip",link:"/"},{title:"Social Activation",link:"/"}]},{id:2,title:"About Us",child:[{title:"Contact Us",link:"/"},{title:"FAQs",link:"/"},{title:"Blog",link:"/"},{title:"Privacy Policy",link:"/"}]}]},e}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"footer"},c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:4},c.a.createElement("div",{className:"mb-4"},c.a.createElement(f.b,{to:"/"},c.a.createElement("img",{src:y.a,alt:"",className:"logo-dark",height:"26"})),c.a.createElement("p",{className:"text-muted mt-4 mb-2"},"Yourcompanyemailid@gmail.com"),c.a.createElement("h6",{className:"text-muted font-weight-normal"},"+00 1234-5678-90"))),c.a.createElement(d.a,{lg:8},c.a.createElement(u.a,null,this.state.links.map((function(e,t){return c.a.createElement(d.a,{key:t,md:4},c.a.createElement("h6",{className:"footer-list-title text-dark mb-3"},e.title),c.a.createElement("ul",{className:"list-unstyled company-sub-menu"},e.child.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(f.b,{to:e.link},e.title))}))))})),c.a.createElement(d.a,{md:4},c.a.createElement("h6",{className:"footer-list-title text-dark mb-3"},"Our Address"),c.a.createElement("p",{className:"text-muted f-14"},"4806 Spring Haven Trail South Orange, NJ 07079"),c.a.createElement("h6",{className:"text-muted pb-2"},"Email: Support@gamil.com"),c.a.createElement("ul",{className:"list-unstyled footer-social-list mt-4"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement(f.b,{to:"#"},c.a.createElement("i",{className:"mdi mdi-facebook"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement(f.b,{to:"#"},c.a.createElement("i",{className:"mdi mdi-instagram"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement(f.b,{to:"#"},c.a.createElement("i",{className:"mdi mdi-linkedin"})))))))),c.a.createElement(m,null))))}}]),n}(l.Component);t.default=b}}]);
//# sourceMappingURL=10.26b7185e.chunk.js.map