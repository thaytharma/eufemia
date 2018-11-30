(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(75),n(51),n(299);var r=s(n(0)),a=n(285),i=s(n(899));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components;o(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",components:t},r.default.createElement(i.default,null))};t._frontmatter={header:"UI Library",title:"LineTitle",draft:!1,order:7}},312:function(e,t,n){"use strict";n(73);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},313:function(e,t,n){"use strict";n(73);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(73);var r=n(77);n(76);var a=l(n(0)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(795)),s=l(n(403)),o=n(796),c=l(n(318));function l(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.language,n=e.children,l=e.reactLive,u=e.className;return t||(t=((u||"").split(/-/)||[null,"jsx"])[1]),l&&"jsx"===t?a.default.createElement(o.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(o.LiveEditor,null),a.default.createElement(o.LiveError,null),a.default.createElement(o.LivePreview,null)):a.default.createElement(i.default,p({},i.defaultProps,{code:String(n).trim(),language:t,theme:s.default}),function(e){var t=e.className,n=e.style,i=e.tokens,s=e.getLineProps,o=e.getTokenProps;return a.default.createElement(c.default,{className:(0,r.merge)((0,r.css)(n)+" "+t)},_(i).map(function(e,t){return a.default.createElement("div",s({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",o({token:e,key:t}))}))}))})};t.default=u;var _=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(281),n(282),n(280),n(79);var r=n(297),a=j(n(360)),i=j(n(0)),s=n(362),o=d(n(12)),c=d(n(1)),l=d(n(797)),p=n(283),u=n(15),_=n(359);function d(e){return e&&e.__esModule?e:{default:e}}function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,l.default)().location},b=(0,p.css)(" .fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),v=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=y(t).call(this,e),n=!a||"object"!==f(a)&&"function"!=typeof a?h(r):a,g(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),g(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),g(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,u.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),g(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,u.navigate)([e.pathname,e.hash].join(""))}),n._id="item-wrapper";var i=E();return i&&(n.state.wasFullscreen=/fullscreen/.test(i.search)),n}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.PureComponent),n=t,(c=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id,l=t.tabs,p=t.hideTabs,u=t.ExampleCode,d=t.Description,j=t.Details,f=t.DemoComponent,S=t.CodeComponent,y=t.callback;return i.default.createElement("div",{className:"wrapped-item"},p?i.default.createElement("h4",null,i.default.createElement(o.default,{to:"/uilib/components/".concat(c)},n)):i.default.createElement("h1",null,n),!p&&i.default.createElement(r.Tabs,{id:this._id,do_set_hash:!0,data:l,on_change:this.openTab,render:function(t){var n=t.Wrapper,a=t.TabsList,o=t.Tabs;return i.default.createElement(n,{className:b},i.default.createElement(a,null,i.default.createElement(o,null),e.state.wasFullscreen?i.default.createElement(s.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):i.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:_.fullscreen})))}}),this.isActive("demo")&&i.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"demo"},!p&&i.default.createElement(d,null),i.default.createElement(f,null),y&&y.demo&&i.default.createElement(y.demo,{CodeRenderer:a.CodeRenderer})),this.isActive("info")&&i.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"info"},i.default.createElement(j,null),y&&y.info&&i.default.createElement(y.info,{CodeRenderer:a.CodeRenderer}),u&&i.default.createElement(i.Fragment,null,i.default.createElement("h3",null,"JSX Example"),i.default.createElement(a.CodeRenderer,{language:"jsx"},u))),this.isActive("code")&&i.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"code"},i.default.createElement(a.default,{source:S}),y&&y.code&&i.default.createElement(y.code,{CodeRenderer:a.CodeRenderer})))}}])&&S(n.prototype,c),l&&S(n,l),t}();g(v,"propTypes",{ExampleCode:c.default.string,Description:c.default.func.isRequired,Details:c.default.func.isRequired,DemoComponent:c.default.func.isRequired,CodeComponent:c.default.func.isRequired,callback:c.default.shape({demo:c.default.oneOfType([c.default.func,c.default.node]),info:c.default.oneOfType([c.default.func,c.default.node]),code:c.default.oneOfType([c.default.func,c.default.node])}),hideTabs:c.default.bool,title:c.default.string.isRequired,id:c.default.string.isRequired,tabs:c.default.array}),g(v,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var x=v;t.default=x},318:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(283))&&r.__esModule?r:{default:r}).default)("pre",{target:"ew8f31h0"})("padding:1rem;");t.default=a},359:function(e,t,n){"use strict";n.r(t);var r=n(312);n.d(t,"fullscreen",function(){return r.a});var a=n(313);n.d(t,"hamburger",function(){return a.a})},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(281),n(282),n(36),n(280),n(34),n(798);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(361)),i=l(n(1)),s=l(n(801)),o=l(n(802)),c=l(n(316));function l(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;_(this,t),g(h(h(n=f(this,S(t).call(this,e)))),"state",{codeString:""}),g(h(h(n)),"_isMounted",!1);var a=n.props.source;return n.beautify(r.default.createElement(a,null)),n}var n,i;return y(t,r.PureComponent),j(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=s.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,a.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,o.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),i=function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function s(e){u(i,r,a,s,o,"next",e)}function o(e){u(i,r,a,s,o,"throw",e)}s(void 0)})},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(b,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,g(E,"propTypes",{language:i.default.string,raw:i.default.string,source:i.default.oneOfType([i.default.node,i.default.func]).isRequired}),g(E,"defaultProps",{language:"html",raw:""});var b=function(e){function t(){return _(this,t),f(this,S(t).apply(this,arguments))}return y(t,r.PureComponent),j(t,[{key:"render",value:function(){return r.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=b,g(b,"propTypes",{language:i.default.string,children:i.default.oneOfType([i.default.string,i.default.node,i.default.func]).isRequired}),g(b,"defaultProps",{language:"jsx"})},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(36);var r,a=(r=n(799))&&r.__esModule?r:{default:r};var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":a.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=i},362:function(e,t,n){"use strict";n.r(t);var r=n(287);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},404:function(e,t,n){var r={"./Binary_Property/ASCII.js":405,"./Binary_Property/ASCII_Hex_Digit.js":406,"./Binary_Property/Alphabetic.js":407,"./Binary_Property/Any.js":408,"./Binary_Property/Assigned.js":409,"./Binary_Property/Bidi_Control.js":410,"./Binary_Property/Bidi_Mirrored.js":411,"./Binary_Property/Case_Ignorable.js":412,"./Binary_Property/Cased.js":413,"./Binary_Property/Changes_When_Casefolded.js":414,"./Binary_Property/Changes_When_Casemapped.js":415,"./Binary_Property/Changes_When_Lowercased.js":416,"./Binary_Property/Changes_When_NFKC_Casefolded.js":417,"./Binary_Property/Changes_When_Titlecased.js":418,"./Binary_Property/Changes_When_Uppercased.js":419,"./Binary_Property/Dash.js":420,"./Binary_Property/Default_Ignorable_Code_Point.js":421,"./Binary_Property/Deprecated.js":422,"./Binary_Property/Diacritic.js":423,"./Binary_Property/Emoji.js":424,"./Binary_Property/Emoji_Component.js":425,"./Binary_Property/Emoji_Modifier.js":426,"./Binary_Property/Emoji_Modifier_Base.js":427,"./Binary_Property/Emoji_Presentation.js":428,"./Binary_Property/Extended_Pictographic.js":429,"./Binary_Property/Extender.js":430,"./Binary_Property/Grapheme_Base.js":431,"./Binary_Property/Grapheme_Extend.js":432,"./Binary_Property/Hex_Digit.js":433,"./Binary_Property/IDS_Binary_Operator.js":434,"./Binary_Property/IDS_Trinary_Operator.js":435,"./Binary_Property/ID_Continue.js":436,"./Binary_Property/ID_Start.js":437,"./Binary_Property/Ideographic.js":438,"./Binary_Property/Join_Control.js":439,"./Binary_Property/Logical_Order_Exception.js":440,"./Binary_Property/Lowercase.js":441,"./Binary_Property/Math.js":442,"./Binary_Property/Noncharacter_Code_Point.js":443,"./Binary_Property/Pattern_Syntax.js":444,"./Binary_Property/Pattern_White_Space.js":445,"./Binary_Property/Quotation_Mark.js":446,"./Binary_Property/Radical.js":447,"./Binary_Property/Regional_Indicator.js":448,"./Binary_Property/Sentence_Terminal.js":449,"./Binary_Property/Soft_Dotted.js":450,"./Binary_Property/Terminal_Punctuation.js":451,"./Binary_Property/Unified_Ideograph.js":452,"./Binary_Property/Uppercase.js":453,"./Binary_Property/Variation_Selector.js":454,"./Binary_Property/White_Space.js":455,"./Binary_Property/XID_Continue.js":456,"./Binary_Property/XID_Start.js":457,"./General_Category/Cased_Letter.js":458,"./General_Category/Close_Punctuation.js":459,"./General_Category/Connector_Punctuation.js":460,"./General_Category/Control.js":461,"./General_Category/Currency_Symbol.js":462,"./General_Category/Dash_Punctuation.js":463,"./General_Category/Decimal_Number.js":464,"./General_Category/Enclosing_Mark.js":465,"./General_Category/Final_Punctuation.js":466,"./General_Category/Format.js":467,"./General_Category/Initial_Punctuation.js":468,"./General_Category/Letter.js":469,"./General_Category/Letter_Number.js":470,"./General_Category/Line_Separator.js":471,"./General_Category/Lowercase_Letter.js":472,"./General_Category/Mark.js":473,"./General_Category/Math_Symbol.js":474,"./General_Category/Modifier_Letter.js":475,"./General_Category/Modifier_Symbol.js":476,"./General_Category/Nonspacing_Mark.js":477,"./General_Category/Number.js":478,"./General_Category/Open_Punctuation.js":479,"./General_Category/Other.js":480,"./General_Category/Other_Letter.js":481,"./General_Category/Other_Number.js":482,"./General_Category/Other_Punctuation.js":483,"./General_Category/Other_Symbol.js":484,"./General_Category/Paragraph_Separator.js":485,"./General_Category/Private_Use.js":486,"./General_Category/Punctuation.js":487,"./General_Category/Separator.js":488,"./General_Category/Space_Separator.js":489,"./General_Category/Spacing_Mark.js":490,"./General_Category/Surrogate.js":491,"./General_Category/Symbol.js":492,"./General_Category/Titlecase_Letter.js":493,"./General_Category/Unassigned.js":494,"./General_Category/Uppercase_Letter.js":495,"./Script/Adlam.js":496,"./Script/Ahom.js":497,"./Script/Anatolian_Hieroglyphs.js":498,"./Script/Arabic.js":499,"./Script/Armenian.js":500,"./Script/Avestan.js":501,"./Script/Balinese.js":502,"./Script/Bamum.js":503,"./Script/Bassa_Vah.js":504,"./Script/Batak.js":505,"./Script/Bengali.js":506,"./Script/Bhaiksuki.js":507,"./Script/Bopomofo.js":508,"./Script/Brahmi.js":509,"./Script/Braille.js":510,"./Script/Buginese.js":511,"./Script/Buhid.js":512,"./Script/Canadian_Aboriginal.js":513,"./Script/Carian.js":514,"./Script/Caucasian_Albanian.js":515,"./Script/Chakma.js":516,"./Script/Cham.js":517,"./Script/Cherokee.js":518,"./Script/Common.js":519,"./Script/Coptic.js":520,"./Script/Cuneiform.js":521,"./Script/Cypriot.js":522,"./Script/Cyrillic.js":523,"./Script/Deseret.js":524,"./Script/Devanagari.js":525,"./Script/Dogra.js":526,"./Script/Duployan.js":527,"./Script/Egyptian_Hieroglyphs.js":528,"./Script/Elbasan.js":529,"./Script/Ethiopic.js":530,"./Script/Georgian.js":531,"./Script/Glagolitic.js":532,"./Script/Gothic.js":533,"./Script/Grantha.js":534,"./Script/Greek.js":535,"./Script/Gujarati.js":536,"./Script/Gunjala_Gondi.js":537,"./Script/Gurmukhi.js":538,"./Script/Han.js":539,"./Script/Hangul.js":540,"./Script/Hanifi_Rohingya.js":541,"./Script/Hanunoo.js":542,"./Script/Hatran.js":543,"./Script/Hebrew.js":544,"./Script/Hiragana.js":545,"./Script/Imperial_Aramaic.js":546,"./Script/Inherited.js":547,"./Script/Inscriptional_Pahlavi.js":548,"./Script/Inscriptional_Parthian.js":549,"./Script/Javanese.js":550,"./Script/Kaithi.js":551,"./Script/Kannada.js":552,"./Script/Katakana.js":553,"./Script/Kayah_Li.js":554,"./Script/Kharoshthi.js":555,"./Script/Khmer.js":556,"./Script/Khojki.js":557,"./Script/Khudawadi.js":558,"./Script/Lao.js":559,"./Script/Latin.js":560,"./Script/Lepcha.js":561,"./Script/Limbu.js":562,"./Script/Linear_A.js":563,"./Script/Linear_B.js":564,"./Script/Lisu.js":565,"./Script/Lycian.js":566,"./Script/Lydian.js":567,"./Script/Mahajani.js":568,"./Script/Makasar.js":569,"./Script/Malayalam.js":570,"./Script/Mandaic.js":571,"./Script/Manichaean.js":572,"./Script/Marchen.js":573,"./Script/Masaram_Gondi.js":574,"./Script/Medefaidrin.js":575,"./Script/Meetei_Mayek.js":576,"./Script/Mende_Kikakui.js":577,"./Script/Meroitic_Cursive.js":578,"./Script/Meroitic_Hieroglyphs.js":579,"./Script/Miao.js":580,"./Script/Modi.js":581,"./Script/Mongolian.js":582,"./Script/Mro.js":583,"./Script/Multani.js":584,"./Script/Myanmar.js":585,"./Script/Nabataean.js":586,"./Script/New_Tai_Lue.js":587,"./Script/Newa.js":588,"./Script/Nko.js":589,"./Script/Nushu.js":590,"./Script/Ogham.js":591,"./Script/Ol_Chiki.js":592,"./Script/Old_Hungarian.js":593,"./Script/Old_Italic.js":594,"./Script/Old_North_Arabian.js":595,"./Script/Old_Permic.js":596,"./Script/Old_Persian.js":597,"./Script/Old_Sogdian.js":598,"./Script/Old_South_Arabian.js":599,"./Script/Old_Turkic.js":600,"./Script/Oriya.js":601,"./Script/Osage.js":602,"./Script/Osmanya.js":603,"./Script/Pahawh_Hmong.js":604,"./Script/Palmyrene.js":605,"./Script/Pau_Cin_Hau.js":606,"./Script/Phags_Pa.js":607,"./Script/Phoenician.js":608,"./Script/Psalter_Pahlavi.js":609,"./Script/Rejang.js":610,"./Script/Runic.js":611,"./Script/Samaritan.js":612,"./Script/Saurashtra.js":613,"./Script/Sharada.js":614,"./Script/Shavian.js":615,"./Script/Siddham.js":616,"./Script/SignWriting.js":617,"./Script/Sinhala.js":618,"./Script/Sogdian.js":619,"./Script/Sora_Sompeng.js":620,"./Script/Soyombo.js":621,"./Script/Sundanese.js":622,"./Script/Syloti_Nagri.js":623,"./Script/Syriac.js":624,"./Script/Tagalog.js":625,"./Script/Tagbanwa.js":626,"./Script/Tai_Le.js":627,"./Script/Tai_Tham.js":628,"./Script/Tai_Viet.js":629,"./Script/Takri.js":630,"./Script/Tamil.js":631,"./Script/Tangut.js":632,"./Script/Telugu.js":633,"./Script/Thaana.js":634,"./Script/Thai.js":635,"./Script/Tibetan.js":636,"./Script/Tifinagh.js":637,"./Script/Tirhuta.js":638,"./Script/Ugaritic.js":639,"./Script/Vai.js":640,"./Script/Warang_Citi.js":641,"./Script/Yi.js":642,"./Script/Zanabazar_Square.js":643,"./Script_Extensions/Adlam.js":644,"./Script_Extensions/Ahom.js":645,"./Script_Extensions/Anatolian_Hieroglyphs.js":646,"./Script_Extensions/Arabic.js":647,"./Script_Extensions/Armenian.js":648,"./Script_Extensions/Avestan.js":649,"./Script_Extensions/Balinese.js":650,"./Script_Extensions/Bamum.js":651,"./Script_Extensions/Bassa_Vah.js":652,"./Script_Extensions/Batak.js":653,"./Script_Extensions/Bengali.js":654,"./Script_Extensions/Bhaiksuki.js":655,"./Script_Extensions/Bopomofo.js":656,"./Script_Extensions/Brahmi.js":657,"./Script_Extensions/Braille.js":658,"./Script_Extensions/Buginese.js":659,"./Script_Extensions/Buhid.js":660,"./Script_Extensions/Canadian_Aboriginal.js":661,"./Script_Extensions/Carian.js":662,"./Script_Extensions/Caucasian_Albanian.js":663,"./Script_Extensions/Chakma.js":664,"./Script_Extensions/Cham.js":665,"./Script_Extensions/Cherokee.js":666,"./Script_Extensions/Common.js":667,"./Script_Extensions/Coptic.js":668,"./Script_Extensions/Cuneiform.js":669,"./Script_Extensions/Cypriot.js":670,"./Script_Extensions/Cyrillic.js":671,"./Script_Extensions/Deseret.js":672,"./Script_Extensions/Devanagari.js":673,"./Script_Extensions/Dogra.js":674,"./Script_Extensions/Duployan.js":675,"./Script_Extensions/Egyptian_Hieroglyphs.js":676,"./Script_Extensions/Elbasan.js":677,"./Script_Extensions/Ethiopic.js":678,"./Script_Extensions/Georgian.js":679,"./Script_Extensions/Glagolitic.js":680,"./Script_Extensions/Gothic.js":681,"./Script_Extensions/Grantha.js":682,"./Script_Extensions/Greek.js":683,"./Script_Extensions/Gujarati.js":684,"./Script_Extensions/Gunjala_Gondi.js":685,"./Script_Extensions/Gurmukhi.js":686,"./Script_Extensions/Han.js":687,"./Script_Extensions/Hangul.js":688,"./Script_Extensions/Hanifi_Rohingya.js":689,"./Script_Extensions/Hanunoo.js":690,"./Script_Extensions/Hatran.js":691,"./Script_Extensions/Hebrew.js":692,"./Script_Extensions/Hiragana.js":693,"./Script_Extensions/Imperial_Aramaic.js":694,"./Script_Extensions/Inherited.js":695,"./Script_Extensions/Inscriptional_Pahlavi.js":696,"./Script_Extensions/Inscriptional_Parthian.js":697,"./Script_Extensions/Javanese.js":698,"./Script_Extensions/Kaithi.js":699,"./Script_Extensions/Kannada.js":700,"./Script_Extensions/Katakana.js":701,"./Script_Extensions/Kayah_Li.js":702,"./Script_Extensions/Kharoshthi.js":703,"./Script_Extensions/Khmer.js":704,"./Script_Extensions/Khojki.js":705,"./Script_Extensions/Khudawadi.js":706,"./Script_Extensions/Lao.js":707,"./Script_Extensions/Latin.js":708,"./Script_Extensions/Lepcha.js":709,"./Script_Extensions/Limbu.js":710,"./Script_Extensions/Linear_A.js":711,"./Script_Extensions/Linear_B.js":712,"./Script_Extensions/Lisu.js":713,"./Script_Extensions/Lycian.js":714,"./Script_Extensions/Lydian.js":715,"./Script_Extensions/Mahajani.js":716,"./Script_Extensions/Makasar.js":717,"./Script_Extensions/Malayalam.js":718,"./Script_Extensions/Mandaic.js":719,"./Script_Extensions/Manichaean.js":720,"./Script_Extensions/Marchen.js":721,"./Script_Extensions/Masaram_Gondi.js":722,"./Script_Extensions/Medefaidrin.js":723,"./Script_Extensions/Meetei_Mayek.js":724,"./Script_Extensions/Mende_Kikakui.js":725,"./Script_Extensions/Meroitic_Cursive.js":726,"./Script_Extensions/Meroitic_Hieroglyphs.js":727,"./Script_Extensions/Miao.js":728,"./Script_Extensions/Modi.js":729,"./Script_Extensions/Mongolian.js":730,"./Script_Extensions/Mro.js":731,"./Script_Extensions/Multani.js":732,"./Script_Extensions/Myanmar.js":733,"./Script_Extensions/Nabataean.js":734,"./Script_Extensions/New_Tai_Lue.js":735,"./Script_Extensions/Newa.js":736,"./Script_Extensions/Nko.js":737,"./Script_Extensions/Nushu.js":738,"./Script_Extensions/Ogham.js":739,"./Script_Extensions/Ol_Chiki.js":740,"./Script_Extensions/Old_Hungarian.js":741,"./Script_Extensions/Old_Italic.js":742,"./Script_Extensions/Old_North_Arabian.js":743,"./Script_Extensions/Old_Permic.js":744,"./Script_Extensions/Old_Persian.js":745,"./Script_Extensions/Old_Sogdian.js":746,"./Script_Extensions/Old_South_Arabian.js":747,"./Script_Extensions/Old_Turkic.js":748,"./Script_Extensions/Oriya.js":749,"./Script_Extensions/Osage.js":750,"./Script_Extensions/Osmanya.js":751,"./Script_Extensions/Pahawh_Hmong.js":752,"./Script_Extensions/Palmyrene.js":753,"./Script_Extensions/Pau_Cin_Hau.js":754,"./Script_Extensions/Phags_Pa.js":755,"./Script_Extensions/Phoenician.js":756,"./Script_Extensions/Psalter_Pahlavi.js":757,"./Script_Extensions/Rejang.js":758,"./Script_Extensions/Runic.js":759,"./Script_Extensions/Samaritan.js":760,"./Script_Extensions/Saurashtra.js":761,"./Script_Extensions/Sharada.js":762,"./Script_Extensions/Shavian.js":763,"./Script_Extensions/Siddham.js":764,"./Script_Extensions/SignWriting.js":765,"./Script_Extensions/Sinhala.js":766,"./Script_Extensions/Sogdian.js":767,"./Script_Extensions/Sora_Sompeng.js":768,"./Script_Extensions/Soyombo.js":769,"./Script_Extensions/Sundanese.js":770,"./Script_Extensions/Syloti_Nagri.js":771,"./Script_Extensions/Syriac.js":772,"./Script_Extensions/Tagalog.js":773,"./Script_Extensions/Tagbanwa.js":774,"./Script_Extensions/Tai_Le.js":775,"./Script_Extensions/Tai_Tham.js":776,"./Script_Extensions/Tai_Viet.js":777,"./Script_Extensions/Takri.js":778,"./Script_Extensions/Tamil.js":779,"./Script_Extensions/Tangut.js":780,"./Script_Extensions/Telugu.js":781,"./Script_Extensions/Thaana.js":782,"./Script_Extensions/Thai.js":783,"./Script_Extensions/Tibetan.js":784,"./Script_Extensions/Tifinagh.js":785,"./Script_Extensions/Tirhuta.js":786,"./Script_Extensions/Ugaritic.js":787,"./Script_Extensions/Vai.js":788,"./Script_Extensions/Warang_Citi.js":789,"./Script_Extensions/Yi.js":790,"./Script_Extensions/Zanabazar_Square.js":791,"./index.js":792,"./unicode-version.js":793};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=404},800:function(e,t){},899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(281),n(282),n(73),n(280);var r=u(n(0)),a=p(n(1)),i=p(n(317)),s=u(n(900)),o=p(n(901)),c=p(n(902)),l=p(n(903));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,S(t).apply(this,arguments))}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.PureComponent),n=t,(a=[{key:"render",value:function(){return r.default.createElement(i.default,d({},t.defaultProps,this.props))}}])&&j(n.prototype,a),s&&j(n,s),t}();t.default=h,m(h,"propTypes",{title:a.default.string,id:a.default.string,Description:a.default.func,Details:a.default.func,DemoComponent:a.default.func,CodeComponent:a.default.func,hideTabs:a.default.bool}),m(h,"defaultProps",{title:"LineTitle",id:"line-title",ExampleCode:l.default,Description:o.default,Details:c.default,DemoComponent:s.default,CodeComponent:s.Example,callback:s.Example.AdditionalCallback||null,hideTabs:!1})},900:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return c});var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(302),c=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(o.a,null,"This is the default line title component"),s.a.createElement(o.a,{content:"This is the small version",modifier:"small",tag:"h3"}))},t}(i.PureComponent);t.default=function(){return s.a.createElement(c,null)}},901:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(74),a=n.n(r),i=n(0),s=n.n(i),o=n(285);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"p",components:t},"The line title component is a heading variant with borders on both sides. It is commonly used as a ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"legend")," in form fieldsets."))};var c={}},902:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(74),a=n.n(r),i=n(0),s=n.n(i),o=n(285);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"table",components:t},s.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),s.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"modifier")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," any extra modifying class.")),s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"content")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the content of the title component.")),s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"tag")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the wrapping tag of the component. For semantics and accessibility's sake.")))))};var c={}},903:function(e,t){e.exports='<LineTitle>This is the default line title component</LineTitle>\n<LineTitle\n  content="This is the small version"\n  modifier="small"\n  tag="h3"\n/>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-components-line-title-md-e98ba4e096df5569ca3f.js.map