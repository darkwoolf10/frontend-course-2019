// eslint-disable-next-line
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html,body{font-family:'Courier New', Courier, monospace;height:100%;margin:0;padding:0;background-color:#FFE}html .container,body .container{height:100%}html .container #contact-form,body .container #contact-form{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}html .container #contact-form .form-item,html .container #contact-form .form-btn,body .container #contact-form .form-item,body .container #contact-form .form-btn{box-shadow:5px 5px 3px black}html .container #contact-form .form-item,body .container #contact-form .form-item{margin-bottom:20px;font-size:2em;border-radius:5px;padding:5px}html .container #contact-form .form-btn,body .container #contact-form .form-btn{font-size:3em;border-radius:5px;background-color:#EEE;cursor:pointer;width:27rem}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(b(r.parts[i],e))}else{for(var c=[];i<r.parts.length;i++)c.push(b(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,e){var n,r,o;if(e.singleton){var a=h++;n=m||(m=u(e)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=c(t,e);return s(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a],u=o[i.id];u&&(u.refs--,r.push(u))}t&&s(c(t,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(t,e,n){"use strict";n.r(e);n(0);class r{constructor(){if(this._instance)throw new"Instantiation failed: use Singleton.getInstance() instead of new.";this._instance=!0}static getInstance(){return this._instance?this._instance:this._instance=new this}}const o=class extends r{minLength(t,e){return t.length<e}maxLength(t,e){return t.length>e}pattern(t,e){return e.test(t)}email(t){return this.pattern(t,/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)}phone(t){return this.pattern(t,/^[+][3,8]{2}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)}numberRange(t,e,n){return+t>e&&+t<n}}.getInstance(),a=class extends r{constructor(){super(),this.form=document.getElementById("contact-form")}render(t,e){const n=this.form.querySelector(`input[name=${e}]`);!0===t?this.successStatus(n):this.failureStatus(n)}successStatus(t){t.style.border="3px solid green"}failureStatus(t){t.style.border="3px solid red"}}.getInstance(),i=document.getElementById("contact-form");i.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(i),n=Object.fromEntries(e);Object.keys(n).forEach(t=>{let e,r,i=!1;switch(t){case"first_name":case"last_name":e=o.minLength(n[t],2),r=o.maxLength(n[t],20),i=!(!0===e&&!1===r),a.render(i,t);break;case"email":i=o.email(n[t]),a.render(i,t);break;case"phone":i=o.phone(n[t]),a.render(i,t);break;case"age":i=o.numberRange(n[t],18,120),a.render(i,t);break;default:console.log(`For ${t} field not found rules`)}})})}]);
