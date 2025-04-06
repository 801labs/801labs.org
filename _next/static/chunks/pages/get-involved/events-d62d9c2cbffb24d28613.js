_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"+lMf":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("Ff2n"),r=["level","children"],s=function(e){var t=e.level,n=e.children,o=Object(i.a)(e,r);return Object(a.createElement)("h".concat(t),o,n)},l=o.a.createElement,c=function(e){return l("div",{className:"bg-graphite-900 bg-image-grid bg-top text-white"},l("div",{className:"container-1400 mx-auto px-5 py-20 text-center"},l(s,{level:e.hLevel||1,className:"h1 text-shadow-glow"},e.title)))};c.defaultProps={hLevel:1};t.a=c},"1GrK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-involved/events",function(){return n("HB+7")}])},Ff2n:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},"HB+7":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("JwBy"),r=n("PRYp"),s=n("+lMf"),l=n("mfve"),c=n("TDWf"),u=o.a.createElement;t.default=function(){return u(i.a,null,u(c.a,{title:"Events",description:"Get involved and attend our events. Learn more about information technology, ethical hacking, information security and more."}),u(s.a,{title:"Events"}),u("div",{className:"bg-lavender-900 text-white bg-events bg-no-repeat"},u("div",{className:"container mx-auto px-5 pt-20 md:pt-40 pb-20"},u("h2",{className:"h2 text-center mb-12 sr-only"},"Upcoming Events"),u(l.a,{limit:8})),u("div",{className:"container-1200 mx-auto px-5 pt-20 pb-40"},u("h2",{className:"h2 text-center mb-12"},"Event FAQs"),u(r.a,{title:"Are events open to the public?",initialOpen:!0},u("p",null,"Yes! 801 Labs is a community based hackerspace that was setup to provide a place for the community of Salt Lake City to meet about technology and host events. All of our events are open to the public.")),u(r.a,{title:"Do I need to RSVP to attend?"},u("p",null,"Not at all! All 801 Labs events are free and open to the public, unless explicitly stated. You do not need to RSVP to any event if you do not want to. The only exceptions to this rule is if the event requires a headcount (such as paid events with materials). This will be clearly stated in the event's description.")),u(r.a,{title:"Are events free?"},u("p",null,"All of our events are open to the public, most are free, some are paid. We always accept and encourage donations. Some classes may charge a fee to cover material costs, if stated on the event\u2019s meetup page. There will often be an option to attend the class and bring your own materials or just observing the class without building something. Contact the presenter on our Discord Server if you have questions.")),u(r.a,{title:"I can\u2019t make or I missed an event, are they recorded?"},u("p",null,"Yes! Most of our classes are archived on our youtube channel. Upon request a live stream may be possible, contact the presenter on our Discord Server for details.")),u(r.a,{title:"Do I need a membership?"},u("p",null,"No, there is no membership. However we do accept and encourage donations! 801 Labs is a community based hackerspace that was setup to provide a place for the community of Salt Lake City to meet about technology and host events.")),u(r.a,{title:"Do I need to donate or have a membership to participate?"},u("p",null,"No! The space is open to the public and run entirely by volunteers. Our operating costs are covered entirely by voluntary donations and recurring patronage, but no activities or responsibilities at the space are contingent upon receipt of donations. If you\u2019d like to attend events or get involved around the space, you are encouraged to do so.")),u(r.a,{title:"I would like to request a topic be covered in a class, what should I do?"},u("p",null,"If you let us know what you\u2019re looking for, we can ask among the community if there is anyone who would like to teach a class on a specific topic. If there is interest in a topic, we will do our best to find someone qualified to teach about it, but we may not be able to make every request into a class.")))))}},PRYp:function(e,t,n){"use strict";var a=n("1OyB"),o=n("vuIU"),i=n("JX7q"),r=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("rePB"),u=n("q1tI"),p=n.n(u),d=n("IP2g"),h=n("wHSu"),f=p.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(e){Object(r.a)(n,e);var t=m(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(c.a)(Object(i.a)(e),"state",{isOpen:!1}),Object(c.a)(Object(i.a)(e),"detailsElement",Object(u.createRef)()),Object(c.a)(Object(i.a)(e),"toggle",(function(){e.setState({isOpen:e.detailsElement.current.hasAttribute("open")})})),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!!this.props.initialOpen}),this.props.initialOpen&&this.detailsElement.current.setAttribute("open",!0)}},{key:"render",value:function(){return f("details",{ref:this.detailsElement,className:"bg-white text-black mb-8",onToggle:this.toggle},f("summary",null,f("span",{className:"py-5 px-10 fluid-text-lg font-bold flex justify-between items-center"},this.props.title,f(d.a,{className:"ml-5",icon:this.state.isOpen?h.f:h.h}))),f("div",{className:"py-5 px-10 space-y-8"},this.props.children))}}]),n}(u.Component);t.a=v}},[["1GrK",0,2,5,4,1,3,7]]]);