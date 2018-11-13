(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(290);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(277);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"h1",components:t},"UI guides"),o.default.createElement(a.MDXTag,{name:"p",components:t},"The following is a set of interface design resources to get you up and running with all the basic tools and libraries. The Quickstart files are to ensure that you are using the official and most up-to-date versions more than as a time saving action."),o.default.createElement(a.MDXTag,{name:"h4",components:t},"Figma UI files"),o.default.createElement(a.MDXTag,{name:"p",components:t},"Quickstart file contains:"),o.default.createElement(a.MDXTag,{name:"ol",components:t},o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"A Large, a medium and a small canvas"),o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"8px grid setting"),o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"8px tab (move object) setting"),o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"DNB Colors"),o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"DNB Fonts"),o.default.createElement(a.MDXTag,{name:"li",components:t,parentName:"ol"},"DNB symbol library")),o.default.createElement(a.MDXTag,{name:"p",components:t},"Also make sure you have the correct DNB fonts. You can download them from here:\nDownload the DNB fonts package"))};t._frontmatter={header:"Quickguide Designers - UI Guides",title:"UI Guides",draft:!1}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(334);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(306);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},290:function(e,t,n){var r=n(30),o=n(43);n(335)("keys",function(){return function(e){return o(r(e))}})},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var l=u.default.createContext({}),c=l.Provider,i=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return u.default.createElement(i,null,function(t){return u.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(c,{value:t},n)}},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=(r=u)&&r.__esModule?r:{default:r},c=n(306);var i={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,c=e.components,f=void 0===c?{}:c,s=e.Layout,p=e.layoutProps,m=f[n+"."+t]||f[t]||i[t]||t;return s?l.default.createElement(s,o({components:f},p),l.default.createElement(m,a,u)):l.default.createElement(m,a,u)}}]),t}();t.default=(0,c.withMDXComponents)(f)},335:function(e,t,n){var r=n(7),o=n(21),a=n(19);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-designer-ui-guides-md-fe49889edb0193b36bd7.js.map