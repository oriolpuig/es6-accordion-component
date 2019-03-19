!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t,this._rootClass=this._id,this._rootElement=document.getElementById("root")}var t,n,r;return t=e,(n=[{key:"render",value:function(){this._rootElement.appendChild(this.html())}},{key:"remove",value:function(){var e=document.getElementById(this._id);e.innerHTML="",this._rootElement.appendChild(e)}}])&&o(t.prototype,n),r&&o(t,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._type=t,this._id=n,this._className=o}var t,n,o;return t=e,(n=[{key:"create",value:function(){var e=document.createElement(this._type);return e.id=this._id,e.className=this._className,this._element=e,this._element}}])&&i(t.prototype,n),o&&i(t,o),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"development";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=u(this,f(t).call(this,"Environment")))._env=n,e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r),n=t,(o=[{key:"html",value:function(){var e=new c("div","Environment").create();return e.className="Environment Environment--".concat("production"),e.append(this._env),e}}])&&l(n.prototype,o),i&&l(n,i),t}();function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._isActive=!1,this._title=t,this._content=n}var t,n,o;return t=e,(n=[{key:"expand",value:function(){this._isActive=!0}},{key:"collapse",value:function(){this._isActive=!1}},{key:"isActive",value:function(){return this._isActive}},{key:"renderContent",value:function(e){var t=new c("dd").create();t.className="".concat(e,"-content");var n=new c("p").create();return n.innerHTML=this.content,t.append(n),t}},{key:"renderHeader",value:function(e,t,n){var o=new c("dt").create();return o.className="".concat(e,"-tab").concat(this.isActive()?" is-active":""),o.innerHTML=this.title,o.onclick=function(){n(t)},o}},{key:"title",get:function(){return this._title}},{key:"content",get:function(){return this._content}}])&&b(t.prototype,n),o&&b(t,o),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e,n,o){var r,i,c,a,l,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=!(c=v(t).call(this,e))||"object"!==d(c)&&"function"!=typeof c?m(i):c,a=m(r),u=function(e){e.preventDefault()},(l="onDefaultClickCallback")in a?Object.defineProperty(a,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[l]=u,r._label=n||"button",r._callback=o||onDefaultCallback,r}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r),n=t,(o=[{key:"html",value:function(){var e=new c("input").create();return e.type="button",e.value=this._label,e.className="".concat(this._id,"-button"),e.onclick=this._callback,e}}])&&h(n.prototype,o),i&&h(n,i),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){function t(){var e,n,o,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=j(t).call(this,"MyAccordion"),e=!o||"object"!==w(o)&&"function"!=typeof o?S(n):o,k(S(e),"addTab",function(){e.remove();var t={title:"Section ".concat(e._tabs.length+1),message:"Section ".concat(e._tabs.length+1," Content...")};e._tabs.push(new y(t.title,t.message)),e.render()}),k(S(e),"expand",function(t){e.remove(),e.collapseAll(),e._selectedIndex=t,e.render()}),k(S(e),"collapse",function(t){e.remove(),e.collapseAll(),e._selectedIndex=null,e.render()}),e._tabs=e.mapElementsToTabs(r),e._collection=null,e._selectedIndex=0,e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r),n=t,(o=[{key:"mapElementsToTabs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 0===e.length?e:e.map(function(e){return new y(e.title,e.message)})}},{key:"addElementToCollection",value:function(e){e&&this._collection.append(e)}},{key:"html",value:function(){var e=this;if(this._tabs&&this._tabs.length>0){this._collection=this._collection||new c("dl",this._id,this._id).create();var t=new g(this._id,"Add new item",this.addTab);this.addElementToCollection(t.html()),this._tabs.forEach(function(t,n){t.collapse(),n===e._selectedIndex&&t.expand();var o=t.renderHeader(e._id,n,t.isActive()?e.collapse:e.expand),r=t.renderContent(e._id);e.addElementToCollection(o),e.addElementToCollection(r)})}return this._collection}},{key:"collapseAll",value:function(){this._tabs.forEach(function(e){return e.collapse()})}}])&&O(n.prototype,o),i&&O(n,i),t}();n(0);new p("production").render(),new P([{title:"Section 1",message:"Section 1 Content..."},{title:"Section 2",message:"Section 2 Content..."},{title:"Section 3",message:"Section 3 Content..."}]).render()}]);