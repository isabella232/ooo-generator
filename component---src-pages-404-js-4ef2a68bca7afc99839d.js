webpackJsonp([0x9427c64ab85d],{71:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,a,u=n(t),f=1;f<arguments.length;f++){r=Object(arguments[f]);for(var p in r)c.call(r,p)&&(u[p]=r[p]);if(o){a=o(r);for(var s=0;s<a.length;s++)i.call(r,a[s])&&(u[a[s]]=r[a[s]])}}return u}},392:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=n(1),a=function(t){function e(){return r(this,e),o(this,t.apply(this,arguments))}return c(e,t),e.prototype.componentDidMount=function(){window.location.replace("/")},e.prototype.render=function(){return null},e}(i.Component);e.default=a,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-404-js-4ef2a68bca7afc99839d.js.map