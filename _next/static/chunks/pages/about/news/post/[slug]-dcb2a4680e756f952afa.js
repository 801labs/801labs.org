_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"+lMf":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Ff2n"),l=["level","children"],c=function(t){var e=t.level,n=t.children,a=Object(o.a)(t,l);return Object(r.createElement)("h".concat(e),a,n)},i=a.a.createElement,u=function(t){return i("div",{className:"bg-graphite-900 bg-image-grid bg-top text-white"},i("div",{className:"container-1400 mx-auto px-5 py-20 text-center"},i(c,{level:t.hLevel||1,className:"h1 text-shadow-glow"},t.title)))};u.defaultProps={hLevel:1};e.a=u},Ff2n:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return r}))},OoXJ:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n("q1tI"),l=n.n(o),c=n("YFqc"),i=n.n(c),u=l.a.createElement;e.a=function(t){return u("div",null,u("h3",{className:"fluid-text-lg font-bold bg-black text-white px-5 py-1 mb-3"},"Tags"),u("ul",{className:"px-5 py-1 space-y-2"},Object.entries(t.tags).map((function(e){var n=a(e,2),r=n[0],o=n[1];return u("li",{key:r},u(i.a,{href:"".concat(t.path,"/[tag]/[page]"),as:"".concat(t.path,"/").concat(r,"/1")},u("a",null,o)))}))))}},P2cJ:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("JwBy"),l=n("+lMf"),c=n("xY5u"),i=n("TDWf"),u=n("OoXJ"),s=a.a.createElement,f=!0;e.default=function(t){var e;return s(o.a,null,s(i.a,{title:t.title,description:t.description,image:t.cover}),s(l.a,{title:"801 Labs News",hLevel:2}),s("div",{className:"container-1400 mx-auto px-5 py-20 md:flex md:space-x-20"},s("aside",{className:"hidden md:block md:w-1/4"},s(u.a,{tags:t.allTags,path:"/about/news/tag"})),s("div",{className:"md:w-3/4"},s("h1",{className:"h2 mb-10"},t.title),t.cover&&!(null!==(e=t.content)&&void 0!==e&&e.includes(t.cover))&&s(c.a,{src:t.cover,sizes:"(min-width: 960px) 960px, 100vw",alt:t.title,className:"mb-8 mx-auto max-h-100"}),s("div",{className:"space-y-6 markdown",dangerouslySetInnerHTML:{__html:t.content}}))))}},"lFP+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/news/post/[slug]",function(){return n("P2cJ")}])}},[["lFP+",0,2,5,4,1,3,6]]]);