webpackJsonp([96952062320306],{41:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o(2),c=n(l),s=o(20),i=n(s),f=o(49),d=(n(f),o(48)),p=n(d),h=function(e){function t(){return r(this,t),a(this,e.call(this))}return u(t,e),t.prototype.render=function(){return c.default.createElement("section",{className:p.default.sectionbackground,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+this.props.background+")"}},c.default.createElement(i.default,null,this.props.children))},t}(l.Component);t.default=h,e.exports=t.default},48:function(e,t){e.exports={sectionbackground:"src-components-sectionbackground----index-module---sectionbackground---_MvGZ"}},450:function(e,t,o){e.exports=o.p+"static/background.b340ad1b.jpg"},205:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=o(2),a=n(r),u=o(41),l=n(u),c=o(20),s=(n(c),o(450)),i=n(s),f=o(300),d=n(f);t.default=function(e){var t=e.data;return console.log(t.markdownRemark.frontmatter.photos),a.default.createElement("div",null,a.default.createElement(l.default,{background:i.default},a.default.createElement("h1",null,"I found in photography a way to stimulate my creativity."),a.default.createElement("h2",null,"You can see more photos ",a.default.createElement("a",{href:"https://unsplash.com/@hocraveiro/likes",target:"_blank"},"here"),".")),a.default.createElement("div",{className:d.default.photolist},t.markdownRemark.frontmatter.photos.map(function(e,t){return a.default.createElement("a",{href:e,target:"_blank"},a.default.createElement("img",{src:e,className:d.default.photo,key:t}))})))};t.query="** extracted graphql fragment **"},300:function(e,t){e.exports={photolist:"src-pages-photograph----index-module---photolist---33FZm",photo:"src-pages-photograph----index-module---photo---2hJWm"}}});
//# sourceMappingURL=component---src-pages-photograph-index-js-6ae009b7a4430e15ee5e.js.map