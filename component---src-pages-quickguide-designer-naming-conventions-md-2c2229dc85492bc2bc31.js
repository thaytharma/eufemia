(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{172:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n._frontmatter=n.default=void 0,t(75),t(51),t(299);var o,r=(o=t(0))&&o.__esModule?o:{default:o},a=t(285);function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components;c(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",components:n},r.default.createElement(a.MDXTag,{name:"h1",components:n},"Naming conventions (Designers)"),r.default.createElement(a.MDXTag,{name:"blockquote",components:n},r.default.createElement(a.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Persist the same component name throughout design, code and conversation"),r.default.createElement(a.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Nathan Curtis")),r.default.createElement(a.MDXTag,{name:"h3",components:n},"Naming space"),r.default.createElement(a.MDXTag,{name:"h3",components:n},"Naming Colors"),r.default.createElement(a.MDXTag,{name:"p",components:n},"Eufemia FTW uses a simple hypenated naming structure - no camelCase. Android and iOS use camelCse, dots and underscores"),r.default.createElement(a.MDXTag,{name:"p",components:n},"Colors have a naming convention across all platforms and formats. Please refer to the table in 'colors' section (link)."),r.default.createElement(a.MDXTag,{name:"h3",components:n},"Naming Design files"),r.default.createElement(a.MDXTag,{name:"p",components:n},"We don't have a naming convention for design files in Figma. However, it is encouraged to name your design file frames and interface designs with clear logical names in english."),r.default.createElement(a.MDXTag,{name:"h4",components:n},"Figma files"),r.default.createElement(a.MDXTag,{name:"h4",components:n},"Figma Symbols"),r.default.createElement(a.MDXTag,{name:"h4",components:n},"Figma frames"))};n._frontmatter={header:"Quickguide Designers - Naming conventions",title:"Naming Conventions",draft:!1}},285:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(366);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=t(314);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},299:function(e,n,t){var o=t(37),r=t(39);t(367)("keys",function(){return function(e){return r(o(e))}})},314:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(0),c=(o=a)&&o.__esModule?o:{default:o};var u=c.default.createContext({}),i=u.Provider,l=u.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(n,["components"]);return c.default.createElement(l,null,function(n){return c.default.createElement(e,r({components:t||n},o))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(i,{value:n},t)}},366:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),c=t(0),u=(o=c)&&o.__esModule?o:{default:o},i=t(314);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,i=e.components,s=void 0===i?{}:i,f=e.Layout,m=e.layoutProps,p=s[t+"."+n]||s[n]||l[n]||n;return f?u.default.createElement(f,r({components:s},m),u.default.createElement(p,a,c)):u.default.createElement(p,a,c)}}]),n}();n.default=(0,i.withMDXComponents)(s)},367:function(e,n,t){var o=t(25),r=t(18),a=t(24);e.exports=function(e,n){var t=(r.Object||{})[e]||Object[e],c={};c[e]=n(t),o(o.S+o.F*a(function(){t(1)}),"Object",c)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-designer-naming-conventions-md-2c2229dc85492bc2bc31.js.map