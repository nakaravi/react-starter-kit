(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{364:function(e,t,n){"use strict";var o=n(46),r=n.n(o),i=(n(47),n(362)),a=n.n(i),c=n(443),f=n.n(c),u=n(441),l=n.n(u),s=n(439),p=n.n(s),y=n(67);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return x(g(g(n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?g(e):t}(this,(e=h(t)).call.apply(e,[this].concat(r))))),"handleClick",function(e){n.props.onClick&&n.props.onClick(e),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&function(e){return 0===e.button}(e)&&!0!==e.defaultPrevented&&(e.preventDefault(),y.a.push(n.props.to))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["to","children"]);return r.a.createElement("a",b({href:t},o,{onClick:this.handleClick}),n)}}]),t}();x(w,"defaultProps",{onClick:null});var _,S=w,O=n(437),k=n.n(O),j=n(436),P=n.n(j);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n,o){_||(_="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:_,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T,z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,H(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(t,[{key:"render",value:function(){return C("div",{className:P.a.root,role:"navigation"},void 0,C(S,{className:P.a.link,to:"/about"},void 0,"About"),C(S,{className:P.a.link,to:"/contact"},void 0,"Contact"),C("span",{className:P.a.spacer},void 0," | "),C(S,{className:P.a.link,to:"/login"},void 0,"Log in"),C("span",{className:P.a.spacer},void 0,"or"),C(S,{className:k()(P.a.link,P.a.highlight),to:"/register"},void 0,"Sign up"))}}]),t}(),A=a()(P.a)(z),J=n(434),$=n.n(J),W=n(433),D=n.n(W);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t,n,o){T||(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:T,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F,G=L(A,{}),Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,q(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,r.a.Component),function(e,t,n){t&&Q(e.prototype,t),n&&Q(e,n)}(t,[{key:"render",value:function(){return L("div",{className:p.a.root},void 0,L("div",{className:p.a.container},void 0,G,L(S,{className:p.a.brand,to:"/"},void 0,L("img",{src:$.a,srcSet:"".concat(D.a," 2x"),width:"38",height:"38",alt:"React"}),L("span",{className:p.a.brandTxt},void 0,"Stage")),L("div",{className:p.a.banner},void 0,L("h1",{className:p.a.bannerTitle},void 0,"Stage"),L("p",{className:p.a.bannerDesc},void 0,"Stage made easy"))))}}]),t}(),X=a()(p.a)(Y),B=n(432),M=n.n(B);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t,n,o){F||(F="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:F,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function te(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ne(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie,ae=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ne(this,oe(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,r.a.Component),function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(t,[{key:"render",value:function(){return ee("div",{className:M.a.root},void 0,ee("div",{className:M.a.container},void 0,ee("a",{className:M.a.link,href:"https://gitter.im/kriasoft/react-starter-kit"},void 0,"Ask a question"),ee("span",{className:M.a.spacer},void 0,"|"),ee("a",{className:M.a.link,href:"https://github.com/kriasoft/react-starter-kit/issues/new"},void 0,"Report an issue")))}}]),t}(),ce=a()(M.a)(ae),fe=n(430),ue=n.n(fe);function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t,n,o){ie||(ie="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:ie,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ye(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var me,he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ye(this,de(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(t,r.a.Component),function(e,t,n){t&&pe(e.prototype,t),n&&pe(e,n)}(t,[{key:"render",value:function(){return se("div",{className:ue.a.root},void 0,se("div",{className:ue.a.container},void 0,se("span",{className:ue.a.text},void 0,"© Your Company"),se("span",{className:ue.a.spacer},void 0,"·"),se(S,{className:ue.a.link,to:"/"},void 0,"Home"),se("span",{className:ue.a.spacer},void 0,"·"),se(S,{className:ue.a.link,to:"/admin"},void 0,"Admin"),se("span",{className:ue.a.spacer},void 0,"·"),se(S,{className:ue.a.link,to:"/privacy"},void 0,"Privacy"),se("span",{className:ue.a.spacer},void 0,"·"),se(S,{className:ue.a.link,to:"/not-found"},void 0,"Not Found")))}}]),t}(),ve=a()(ue.a)(he);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xe(e,t,n,o){me||(me="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}return{$$typeof:me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function we(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _e(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ke=xe(X,{}),je=xe(ce,{}),Pe=xe(ve,{}),Ne=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_e(this,Se(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,r.a.Component),function(e,t,n){t&&we(e.prototype,t),n&&we(e,n)}(t,[{key:"render",value:function(){return xe("div",{},void 0,ke,this.props.children,je,Pe)}}]),t}();t.a=a()(f.a,l.a)(Ne)},429:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:100%;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1tZAR{background:#333;color:#fff}.e0IRj{margin:0 auto;padding:20px 15px;max-width:100%;max-width:var(--max-content-width);text-align:center}.tr5-G{color:hsla(0,0%,100%,.5)}._2Di2J{color:hsla(0,0%,100%,.3)}._3Ww1H,.tr5-G{padding:2px 5px;font-size:1em}._3Ww1H,._3Ww1H:active,._3Ww1H:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._3Ww1H:hover{color:#fff}',""]),t.locals={root:"_1tZAR",container:"e0IRj",text:"tr5-G",spacer:"_2Di2J",link:"_3Ww1H"}},430:function(e,t,n){var o=n(429),r=n(360);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},431:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:100%;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._2g7Ns{background:#f5f5f5;color:#333}.PgkWg{margin:0 auto;padding:20px 8px;max-width:100%;max-width:var(--max-content-width);text-align:center;font-size:1.5em}._30xS9,._30xS9:active,._30xS9:hover,._30xS9:visited{color:#333;text-decoration:none}._30xS9:hover{text-decoration:underline}.IQHzD{padding-right:15px;padding-left:15px}',""]),t.locals={root:"_2g7Ns",container:"PgkWg",link:"_30xS9",spacer:"IQHzD"}},432:function(e,t,n){var o=n(431),r=n(360);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},433:function(e,t,n){e.exports=n.p+"8844262b.png"},434:function(e,t,n){e.exports=n.p+"2f751285.png"},435:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,".d0C7s{float:right;margin:6px 0 0}._3unRI{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._3unRI,._3unRI:active,._3unRI:visited{color:hsla(0,0%,100%,.6)}._3unRI:hover,.PPdJ5{color:#fff}.PPdJ5{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.PPdJ5:hover{background:rgba(0,0,0,.3)}.cX3Pd{color:hsla(0,0%,100%,.3)}",""]),t.locals={root:"d0C7s",link:"_3unRI",highlight:"PPdJ5",spacer:"cX3Pd"}},436:function(e,t,n){var o=n(435),r=n(360);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},438:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:100%;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--brand-color:#61dafb}._1vSE5{background:#373277;color:#fff}._1EKFE{margin:0 auto;padding:20px 0;max-width:100%;max-width:var(--max-content-width)}._2ZSht{color:#92e5fc;color:color(var(--brand-color) lightness(10%));text-decoration:none;font-size:1.75em}.dkY7q{margin-left:10px}._1vQSj{text-align:center}.J73k2{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}._1QHrc{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}',""]),t.locals={root:"_1vSE5",container:"_1EKFE",brand:"_2ZSht",brandTxt:"dkY7q",banner:"_1vQSj",bannerTitle:"J73k2",bannerDesc:"_1QHrc"}},439:function(e,t,n){var o=n(438),r=n(360);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}},440:function(e,t,n){(e.exports=n(361)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:100%;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;font-family:var(--font-family-base);line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}',""])},441:function(e,t,n){var o=n(440),r=n(360);"string"==typeof o&&(o=[[e.i,o,""]]),e.exports=o.locals||{},e.exports._getContent=function(){return o},e.exports._getCss=function(){return o.toString()},e.exports._insertCss=function(e){return r(o,e)}}}]);
//# sourceMappingURL=about~admin~assessment~contact~home~login~not-found~privacy~register~stage.ea73d9ce.chunk.js.map