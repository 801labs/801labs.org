_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+lMf":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Ff2n"),i=function(t){var e=t.level,n=t.children,o=Object(a.a)(t,["level","children"]);return Object(r.createElement)("h".concat(e),o,n)},c=o.a.createElement,l=function(t){return c("div",{className:"bg-graphite-900 bg-image-grid bg-top text-white"},c("div",{className:"container-1400 mx-auto px-5 py-20 text-center"},c(i,{level:t.hLevel||1,className:"h1 text-shadow-glow"},t.title)))};l.defaultProps={hLevel:1};e.a=l},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},G0BP:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/financial-information",function(){return n("N4Pn")}])},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},N4Pn:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("JwBy"),l=n("+lMf"),u=n("TDWf"),s=n("1OyB"),f=n("vuIU"),p=n("JX7q"),y=n("Ji7U"),d=n("md7G"),h=n("foSv"),m=n("rePB"),b=o.a.createElement;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var g=function(t){Object(y.a)(n,t);var e=v(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),Object(m.a)(Object(p.a)(t),"radius",20),Object(m.a)(Object(p.a)(t),"circumference",2*Math.PI*t.radius),Object(m.a)(Object(p.a)(t),"strokeDashArray",Math.round(1e3*t.circumference)/1e3),t}return Object(f.a)(n,[{key:"normalizeValue",value:function(t){return Math.max(0,Math.min(t,100))}},{key:"render",value:function(){var t=this.normalizeValue(this.props.value),e=this.radius/(1-this.props.width/this.props.size),n="".concat((100-t)/100*this.circumference,"px"),r=this.props.width/this.props.size*e*2;return b("div",{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t,style:{transform:"rotate(".concat(this.props.rotate||0,"deg)")}},b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(e," ").concat(e," ").concat(2*e," ").concat(2*e)},b("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:e,y1:1.5*e,x2:2*e,y2:1.5*e},b("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),b("stop",{offset:"1",stopColor:"#fff",stopOpacity:".2"})),b("circle",{fill:"transparent",cx:2*e,cy:2*e,r:this.radius,stroke:"url(#a)",strokeWidth:r,strokeDasharray:this.strokeDashArray,strokeDashoffset:n})))}}]),n}(r.Component);Object(m.a)(g,"defaultProps",{rotate:0,size:32,value:0,width:4});var w=g,O=o.a.createElement;e.default=function(){return O(c.a,null,O(u.a,{title:"Financial Information",description:"We are a 100% volunteer run organization. Your donations and time help us meet the growing needs of our community."}),O(l.a,{title:"Financial Information"}),O("div",{className:"bg-financial bg-no-repeat"},O("div",{className:"container-1200 mx-auto px-5 py-20 space-y-5"},O("h2",{className:"h2"},"What happens to donations?"),O("p",null,"Because 801labs is a 100% volunteer run organization, there is very little administrative overhead. Not including our projects, current fixed costs and donations are below. Your donations of money and time help us to meet the growing needs of our community."))),O("div",{className:"bg-financial-expenses bg-no-repeat relative"},O("div",{className:"financial-expenses-progress absolute top-0 lg:top-auto lg:bottom-0 px-5"},O(w,{value:90})),O("div",{className:"container-1200 mx-auto px-5 py-20 lg:flex space-y-6 lg:space-y-0 lg:space-x-20 text-white"},O("div",{className:"lg:w-1/3 lg:ml-auto"},O("ul",{className:"lg:text-right space-y-2"},O("li",null,O("strong",null,"Annual fixed expenses total: $28,060")),O("li",null,"$2,050 monthly rent and utilities"),O("li",null,"$230 monthly internet"),O("li",null,"$350 yearly accounting fees"),O("li",null,"$350 yearly insurance"))),O("div",{className:"lg:w-1/2"},O("ul",{className:"space-y-2"},O("li",null,O("strong",null,"(Avg) Annual donation income: $27,400")),O("li",null,"$10,000 yearly DC801 donation"),O("li",null,"$1,450 monthly recurring donations"),O("li",null,"As a [pending] public 501(c)(3) all yearly IRS 990 forms are public record."))))),O("div",{className:"container-1200 mx-auto px-5 py-20 space-y-5"},O("h2",{className:"h2"},"Help us reach our goals!"),O("p",null,"We accept one-time or recurring financial donations, or donations of equipment and/or software. Please contact ",O("a",{href:"mailto:board@801labs.org",target:"_blank",rel:"noopener"},"board@801labs.org")),O("p",null,'Ask your employer if they have or would be interested in "corporate matching gifts". This is a type of philanthropy in which companies financially match donations that their employees make to nonprofit organizations.'),O(i.a,{href:"/donate"},O("a",{className:"button button--navy button--solid"},"Donate\xa0>"))))}},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var o=n("JX7q");function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["G0BP",0,2,4,3,1,5]]]);