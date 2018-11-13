(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(290);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(277);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"h1",components:t},"Focus Management"),o.default.createElement(a.MDXTag,{name:"p",components:t},"Page Focus is important part of navigation with keys only. Make sure after a navigation content gets loaded, it gets assigned a ",o.default.createElement(a.MDXTag,{name:"em",components:t,parentName:"p"},"invisible")," focus, so the user can continue the navigation inside the new content."),o.default.createElement(a.MDXTag,{name:"p",components:t},"Read more about the term Page Focus in the ",o.default.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/eufemia/uilib/components/body#info"}},"Body Component"),"."),o.default.createElement(a.MDXTag,{name:"pre",components:t},o.default.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metastring:""}},'<body>\n  <aside>\x3c!-- focusable navigation --\x3e</aside>\n  <main class="dnb-no-focus" tabindex="-1">\n    \x3c!-- more markup with focusable HTMLElements --\x3e\n  </main>\n</body>\n')))};t._frontmatter={header:"Accessibility",title:"Focus",draft:!1}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(334);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(306);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},290:function(e,t,n){var r=n(30),o=n(43);n(335)("keys",function(){return function(e){return o(r(e))}})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var c=u.default.createContext({}),i=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return u.default.createElement(l,null,function(t){return u.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(i,{value:t},n)}},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=(r=u)&&r.__esModule?r:{default:r},i=n(306);var l={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,i=e.components,f=void 0===i?{}:i,s=e.Layout,p=e.layoutProps,d=f[n+"."+t]||f[t]||l[t]||t;return s?c.default.createElement(s,o({components:f},p),c.default.createElement(d,a,u)):c.default.createElement(d,a,u)}}]),t}();t.default=(0,i.withMDXComponents)(f)},335:function(e,t,n){var r=n(7),o=n(21),a=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-developer-accessibility-focus-md-96941fec2dd7872b973e.js.map