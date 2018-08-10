!function(){"use strict";var t,e=(function(T){!function(t){var u,e=Object.prototype,s=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",a=t.regeneratorRuntime;if(a)T.exports=a;else{(a=t.regeneratorRuntime=T.exports).wrap=g;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",y={},c={};c[o]=function(){return this};var l=Object.getPrototypeOf,v=l&&l(l(P([])));v&&v!==e&&s.call(v,o)&&(c=v);var w=b.prototype=x.prototype=Object.create(c);k.prototype=w.constructor=b,b.constructor=k,b[i]=k.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(w),t},a.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[n]=function(){return this},a.AsyncIterator=E,a.async=function(t,e,r,n){var o=new E(g(t,e,r,n));return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[i]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),y}}}function g(t,e,r,n){var i,a,c,u,o=e&&e.prototype instanceof x?e:x,s=Object.create(o.prototype),l=new O(n||[]);return s._invoke=(i=t,a=r,c=l,u=h,function(t,e){if(u===p)throw new Error("Generator is already running");if(u===d){if("throw"===t)throw e;return N()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=S(r,c);if(n){if(n===y)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=d,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=m(i,a,c);if("normal"===o.type){if(u=c.done?d:f,o.arg===y)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=d,c.method="throw",c.arg=o.arg)}}),s}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function b(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(u){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=m(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):Promise.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function S(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,S(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=m(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,y;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:u,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}(t={exports:{}},t.exports),t.exports),r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),n=r.regeneratorRuntime&&0<=Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),o=n&&r.regeneratorRuntime;r.regeneratorRuntime=void 0;var i=e;if(n)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}var u=i;function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var a=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){s(n,e,r,o,i,"next",t)}function i(t){s(n,e,r,o,i,"throw",t)}o(void 0)})}},l="https://api.like.co/api/users/challenge",h=null,f=null,p=null,c=document.querySelector(".loginBtn"),d=document.querySelector(".changeBtn"),y=document.querySelector("#likecoinId"),v=document.querySelector("#likecoinWallet"),w=document.querySelector("#likecoinPreview"),g=document.querySelector("#updateLikeCoinIdStatus");function m(t){document.querySelector(".likecoin".concat(t)).style.display=""}function x(t){document.querySelector(".likecoin".concat(t)).style.display="none"}function k(t){f=t,document.querySelectorAll(".likecoin.webThreeError").forEach(function(t){t.style.display="none"}),m(t)}function b(){return L.apply(this,arguments)}function L(){return(L=a(u.mark(function t(){var e,r;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(window.web3){t.next=4;break}return k(".needMetaMask"),console.error("no web3"),t.abrupt("return","");case 4:return p=new Web3(window.web3.currentProvider),t.next=7,p.eth.net.getNetworkType();case 7:if("main"===t.sent){t.next=12;break}return k(".needMainNet"),console.error("not mainnet"),t.abrupt("return","");case 12:return t.next=14,p.eth.getAccounts();case 14:if((e=t.sent)&&e[0]){t.next=19;break}return k(".needUnlock"),console.error("not unlocked"),t.abrupt("return","");case 19:return r=e[0],f=null,t.abrupt("return",p.utils.toChecksumAddress(r));case 22:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(t,e){return S.apply(this,arguments)}function S(){return(S=a(u.mark(function t(e,r){var n;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,jQuery.ajax({url:WP_CONFIG.adminAjaxUrl,method:"POST",data:{action:"likecoin_update_id",likecoin_id:e,likecoin_wallet:r,nonce:WP_CONFIG.nonce},xhrFields:{withCredentials:!0}});case 2:n=t.sent,g.textContent=n;case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function _(t){return j.apply(this,arguments)}function j(){return(j=a(u.mark(function t(e){var r,n;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(".loading"),h=e,t.next=5,jQuery.ajax({url:"".concat(l,"?wallet=").concat(e)});case 5:return r=t.sent,n=r.challenge,x(".loading"),k(".needLogin"),t.abrupt("return",n);case 12:throw t.prev=12,t.t0=t.catch(0),x(".loading"),404===(t.t0||{}).status&&k(".needLikeCoinId"),t.t0;case 17:case"end":return t.stop()}},t,this,[[0,12]])}))).apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return(P=a(u.mark(function t(){var e,r,n,o,i,a,c;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}throw new Error("cannot get web3 address");case 2:if(!f||".needLogin"===f){t.next=4;break}throw new Error(f);case 4:return t.next=6,_(h);case 6:return e=t.sent,t.next=9,p.eth.personal.sign(e,h);case 9:if(r=t.sent){t.next=12;break}throw new Error("No signature");case 12:return n=JSON.stringify({challenge:e,signature:r,wallet:h}),t.next=15,fetch(l,{body:n,headers:{"content-type":"application/json"},method:"POST"});case 15:return o=t.sent,t.next=18,o.json();case 18:i=t.sent,a=i.user,c=i.wallet,a?(E(a,c),y.innerHTML=a,v.innerHTML=c,w.src="https://button.like.co/in/embed/".concat(a,"/button"),x(".loginSection"),m(".optionsSection")):(console.error("Error: user is undefined"),console.error(i));case 21:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function N(){return(N=a(u.mark(function t(){return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}))).apply(this,arguments)}function T(){return(T=a(u.mark(function t(){return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(".loginSection"),x(".optionsSection"),t.prev=2,t.next=5,O();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error(t.t0);case 10:case"end":return t.stop()}},t,this,[[2,7]])}))).apply(this,arguments)}function F(){return G.apply(this,arguments)}function G(){return(G=a(u.mark(function t(){var e;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(e=t.sent,h===e||!e){t.next=6;break}return t.next=6,_(e);case 6:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(e){return new Promise(function(t){return setTimeout(t,e)})}c.addEventListener("click",function(){return N.apply(this,arguments)}),d.addEventListener("click",function(){return T.apply(this,arguments)}),a(u.mark(function t(){return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,F();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:return t.next=11,q(3e3);case 11:t.next=0;break;case 13:case"end":return t.stop()}},t,this,[[1,6]])}))()}();
//# sourceMappingURL=likecoin.es5.js.map
