_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,c=[],l=!1,h=-1;function p(){l&&a&&(l=!1,a.length?c=a.concat(c):h=-1,c.length&&f())}function f(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(a=c,c=[];++h<t;)a&&a[h].run();h=-1,t=c.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||u(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},B5Ud:function(e,t,r){"use strict";var n=r("o0o1"),i=r("lwsE"),o=r("W8MJ"),s=r("7W2i"),u=r("a1gu"),a=r("Nsbk"),c=r("yXPU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}var h=r("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var p=h(r("q1tI")),f=r("g/15");function d(e){return m.apply(this,arguments)}function m(){return(m=c(n.mark((function e(t){var r,i,o;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,i=t.ctx,e.next=3,(0,f.loadGetInitialProps)(r,i);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=f.AppInitialProps,t.NextWebVitalsMetric=f.NextWebVitalsMetric;var v=function(e){s(r,e);var t=l(r);function r(){return i(this,r),t.apply(this,arguments)}return o(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,i=e.__N_SSG,o=e.__N_SSP;return p.default.createElement(r,Object.assign({},n,i||o?{}:{url:y(t)}))}}]),r}(p.default.Component);function y(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",i=r||t;return e.push(n,i)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",i=r||t;return e.replace(n,i)}}}t.default=v,v.origGetInitialProps=d,v.getInitialProps=d},MX0m:function(e,t,r){e.exports=r("3niX")},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.destroyCookie=t.setCookie=t.parseCookies=void 0;var i=r("iVi/"),o=r("U0US"),s=r("YAAg");function u(e,t){var r,n;return(null===(n=null===(r=null===e||void 0===e?void 0:e.req)||void 0===r?void 0:r.headers)||void 0===n?void 0:n.cookie)?i.parse(e.req.headers.cookie,t):s.isBrowser()?i.parse(document.cookie,t):{}}function a(e,t,r,u){var a,c;if(void 0===u&&(u={}),(null===(a=null===e||void 0===e?void 0:e.res)||void 0===a?void 0:a.getHeader)&&e.res.setHeader){if(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.finished)return console.warn('Not setting "'+t+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var l=e.res.getHeader("Set-Cookie")||[];"string"===typeof l&&(l=[l]),"number"===typeof l&&(l=[]);var h=o.parse(l,{decodeValues:!1}),p=s.createCookie(t,r,u),f=[];h.forEach((function(e){if(!s.areCookiesEqual(e,p)){var t=i.serialize(e.name,e.value,n({encode:function(e){return e}},e));f.push(t)}})),f.push(i.serialize(t,r,u)),e.res.setHeader("Set-Cookie",f)}if(s.isBrowser()){if(u&&u.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(t,r,u)}return{}}function c(e,t,r){return a(e,t,"",n(n({},r||{}),{maxAge:-1}))}t.parseCookies=u,t.setCookie=a,t.destroyCookie=c,t.default={set:a,get:u,destroy:c}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function i(e){return"string"===typeof e&&!!e.trim()}function o(e,t){var r=e.split(";").filter(i),o=r.shift().split("="),s=o.shift(),u=o.join("=");t=t?Object.assign({},n,t):n;try{u=t.decodeValues?decodeURIComponent(u):u}catch(c){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+u+"'. Set options.decodeValues to false to disable this feature.",c)}var a={name:s,value:u};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?a.expires=new Date(n):"max-age"===r?a.maxAge=parseInt(n,10):"secure"===r?a.secure=!0:"httponly"===r?a.httpOnly=!0:"samesite"===r?a.sameSite=n:a[r]=n})),a}function s(e,t){if(t=t?Object.assign({},n,t):n,!e)return t.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(i).reduce((function(e,r){var n=o(r,t);return e[n.name]=n,e}),{})}return e.filter(i).map((function(e){return o(e,t)}))}e.exports=s,e.exports.parse=s,e.exports.parseString=o,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,i,o,s=[],u=0;function a(){for(;u<e.length&&/\s/.test(e.charAt(u));)u+=1;return u<e.length}for(;u<e.length;){for(t=u,o=!1;a();)if(","===(r=e.charAt(u))){for(n=u,u+=1,a(),i=u;u<e.length&&"="!==(r=e.charAt(u))&&";"!==r&&","!==r;)u+=1;u<e.length&&"="===e.charAt(u)?(o=!0,u=i,s.push(e.substring(t,n)),t=u):u=n+1}else u+=1;(!o||u>=e.length)&&s.push(e.substring(t,e.length))}return s}},YAAg:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++){var o=r[i];if(e[o]!==t[o])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.areCookiesEqual=t.hasSameProperties=t.createCookie=t.isBrowser=void 0,t.isBrowser=function(){return"undefined"!==typeof window},t.createCookie=function(e,t,r){var i=r.sameSite;!0===i&&(i="strict"),void 0!==i&&!1!==i||(i="lax");var o=n(n({},r),{sameSite:i});return delete o.encode,n({name:e,value:t},o)},t.hasSameProperties=i,t.areCookiesEqual=function(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),i(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}},a1gu:function(e,t,r){var n=r("cDf5"),i=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?i(e):t}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,u=t.optimizeForSpeed,a=void 0===u?n:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(u){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),u&&r(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},hUgY:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),i=r.n(n);function o(e,t,r,n,i,o,s){try{var u=e[o](s),a=u.value}catch(c){return void r(c)}u.done?t(a):Promise.resolve(a).then(n,i)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=r("nKUr"),a=r("8Bbg"),c=r.n(a),l=r("NyWP"),h=r("q1tI"),p=r("MX0m"),f=r.n(p),d=r("Nhdc"),m=function(e){var t=e.children,r=e.menuActive;return Object(u.jsxs)("div",{className:"jsx-3990962830",children:[Object(u.jsx)(f.a,{id:"3990962830",children:["html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}"]}),Object(u.jsx)("div",{id:"loader",className:"jsx-3990962830",children:Object(u.jsx)("div",{id:"loading-status",className:"jsx-3990962830"})}),Object(u.jsx)(d.f,{menuActive:r}),t,Object(u.jsx)(d.e,{imgUrl:"/",imgPath:"assets/img/svg/logo-snap-out.svg",menuActive:r,menuItems:[{url:"#",name:"Home"},{url:"#aboutSnapOut",name:"Sulla Band"},{url:"#members",name:"Membri"},{url:"#events",name:"Eventi"},{url:"#media",name:"Media"},{url:"#contact",name:"Contatto"}],copyrightUrl:"#",copyrightName:"Wymaze Srl"})]})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){var t=e.Component,r=e.pageProps,n=e.router,i=e.props,o=Object(h.useState)(!0),s=o[0],a=o[1];Object(h.useEffect)((function(){"/"!==n.pathname&&n.pathname!=="".concat("/snap-out","/")||i.reload||(Object(l.setCookie)(null,"RELOAD","true",{path:"/"}),c())}),[]),Object(h.useEffect)((function(){"/"===n.pathname||n.pathname==="".concat("/snap-out","/")?(a(!0),c()):(Object(l.setCookie)(null,"RELOAD","true",{path:"/"}),a(!1))}),[n.pathname]);var c=function(){"true"===i.reload&&(Object(l.setCookie)(null,"RELOAD","false",{path:"/"}),n.replace("/"),n.reload())};return Object(u.jsx)(m,{menuActive:s,children:Object(u.jsx)(t,y({},r))})}_.getInitialProps=function(){var e,t=(e=i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getInitialProps(t);case 2:return r=e.sent,n=Object(l.parseCookies)(t.ctx),Object(l.setCookie)(null,"PRODUCTION_TEST","true",{path:"/"}),e.abrupt("return",y(y({},r),{},{props:{reload:n.RELOAD}}));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var s=e.apply(t,r);function u(e){o(s,n,i,u,a,"next",e)}function a(e){o(s,n,i,u,a,"throw",e)}u(void 0)}))});return function(e){return t.apply(this,arguments)}}();t.default=_},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},s=e.split(o),a=i.decode||n,c=0;c<s.length;c++){var l=s[c],h=l.indexOf("=");if(!(h<0)){var p=l.substr(0,h).trim(),f=l.substr(++h,l.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==r[p]&&(r[p]=u(f,a))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var u=o(t);if(u&&!s.test(u))throw new TypeError("argument val is invalid");var a=e+"="+u;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(c)}if(n.domain){if(!s.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(a+="; HttpOnly");n.secure&&(a+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(e,t){try{return t(e)}catch(r){return e}}}},[[0,0,2,1,3]]]);