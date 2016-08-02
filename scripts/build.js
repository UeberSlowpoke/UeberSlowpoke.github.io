/*
 RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
*/

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-adownload-setclasses !*/

var requirejs,require,define;!function(ga){function ka(e,t,n,i){return i||""}function K(e){return"[object Function]"===Q.call(e)}function L(e){return"[object Array]"===Q.call(e)}function y(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function X(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));--n);}}function x(e,t){return la.call(e,t)}function e(e,t){return x(e,t)&&e[t]}function D(e,t){for(var n in e)if(x(e,n)&&t(e[n],n))break}function Y(e,t,n,i){return t&&D(t,function(t,r){(n||!x(e,r))&&(!i||"object"!=typeof t||!t||L(t)||K(t)||t instanceof RegExp?e[r]=t:(e[r]||(e[r]={}),Y(e[r],t,n,i)))}),e}function z(e,t){return function(){return t.apply(e,arguments)}}function ha(e){throw e}function ia(e){if(!e)return e;var t=ga;return y(e.split("."),function(e){t=t[e]}),t}function F(e,t,n,i){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=i,n&&(t.originalError=n),t}function ma(t){function n(t,n,i){var r,o,a,s,u,l,c,d;n=n&&n.split("/");var f=T.map,h=f&&f["*"];if(t){for(t=t.split("/"),o=t.length-1,T.nodeIdCompat&&U.test(t[o])&&(t[o]=t[o].replace(U,"")),"."===t[0].charAt(0)&&n&&(o=n.slice(0,n.length-1),t=o.concat(t)),o=t,a=0;a<o.length;a++)s=o[a],"."===s?(o.splice(a,1),--a):".."===s&&0!==a&&(1!==a||".."!==o[2])&&".."!==o[a-1]&&a>0&&(o.splice(a-1,2),a-=2);t=t.join("/")}if(i&&f&&(n||h)){o=t.split("/"),a=o.length;e:for(;a>0;--a){if(u=o.slice(0,a).join("/"),n)for(s=n.length;s>0;--s)if((i=e(f,n.slice(0,s).join("/")))&&(i=e(i,u))){r=i,l=a;break e}!c&&h&&e(h,u)&&(c=e(h,u),d=a)}!r&&c&&(r=c,l=d),r&&(o.splice(0,l,r),t=o.join("/"))}return(r=e(T.pkgs,t))?r:t}function i(e){E&&y(document.getElementsByTagName("script"),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===w.contextName?(t.parentNode.removeChild(t),!0):void 0})}function r(t){var n=e(T.paths,t);return n&&L(n)&&1<n.length?(n.shift(),w.require.undef(t),w.makeRequire(null,{skipMap:!0})([t]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a(t,i,r,a){var s,u,l=null,c=i?i.name:null,d=t,f=!0,h="";return t||(f=!1,t="_@r"+(_+=1)),t=o(t),l=t[0],t=t[1],l&&(l=n(l,c,a),u=e(I,l)),t&&(l?h=u&&u.normalize?u.normalize(t,function(e){return n(e,c,a)}):-1===t.indexOf("!")?n(t,c,a):t:(h=n(t,c,a),t=o(h),l=t[0],h=t[1],r=!0,s=w.nameToUrl(h))),r=!l||u||r?"":"_unnormalized"+(O+=1),{prefix:l,name:h,parentMap:i,unnormalized:!!r,url:s,originalName:d,isDefine:f,id:(l?l+"!"+h:h)+r}}function s(t){var n=t.id,i=e(q,n);return i||(i=q[n]=new w.Module(t)),i}function u(t,n,i){var r=t.id,o=e(q,r);!x(I,r)||o&&!o.defineEmitComplete?(o=s(t),o.error&&"error"===n?i(o.error):o.on(n,i)):"defined"===n&&i(I[r])}function l(t,n){var i=t.requireModules,r=!1;n?n(t):(y(i,function(n){(n=e(q,n))&&(n.error=t,n.events.error&&(r=!0,n.emit("error",t)))}),r||g.onError(t))}function c(){V.length&&(y(V,function(e){var t=e[0];"string"==typeof t&&(w.defQueueMap[t]=!0),j.push(e)}),V=[])}function d(e){delete q[e],delete P[e]}function f(t,n,i){var r=t.map.id;t.error?t.emit("error",t.error):(n[r]=!0,y(t.depMaps,function(r,o){var a=r.id,s=e(q,a);!s||t.depMatched[o]||i[a]||(e(n,a)?(t.defineDep(o,I[a]),t.check()):f(s,n,i))}),i[r]=!0)}function h(){var e,t,n=(e=1e3*T.waitSeconds)&&w.startTime+e<(new Date).getTime(),o=[],a=[],s=!1,u=!0;if(!b){if(b=!0,D(P,function(e){var l=e.map,c=l.id;if(e.enabled&&(l.isDefine||a.push(e),!e.error))if(!e.inited&&n)r(c)?s=t=!0:(o.push(c),i(c));else if(!e.inited&&e.fetched&&l.isDefine&&(s=!0,!l.prefix))return u=!1}),n&&o.length)return e=F("timeout","Load timeout for modules: "+o,null,o),e.contextName=w.contextName,l(e);u&&y(a,function(e){f(e,{},{})}),n&&!t||!s||!E&&!ja||k||(k=setTimeout(function(){k=0,h()},50)),b=!1}}function p(e){x(I,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e){e=e.currentTarget||e.srcElement;var t=w.onScriptLoad;return e.detachEvent&&!ca?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=w.onScriptError,e.detachEvent&&!ca||e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function v(){var e;for(c();j.length;){if(e=j.shift(),null===e[0])return l(F("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));p(e)}w.defQueueMap={}}var b,M,w,C,k,T={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},q={},P={},$={},j=[],I={},B={},A={},_=1,O=1;return C={require:function(e){return e.require?e.require:e.require=w.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?I[e.map.id]=e.exports:e.exports=I[e.map.id]={}:void 0},module:function(t){return t.module?t.module:t.module={id:t.map.id,uri:t.map.url,config:function(){return e(T.config,t.map.id)||{}},exports:t.exports||(t.exports={})}}},M=function(t){this.events=e($,t.id)||{},this.map=t,this.shim=e(T.shim,t.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},M.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=z(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,--this.depCount,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],z(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;B[e]||(B[e]=!0,w.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id;t=this.depExports;var i=this.exports,r=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(K(r)){if(this.events.error&&this.map.isDefine||g.onError!==ha)try{i=w.execCb(n,r,t,i)}catch(o){e=o}else i=w.execCb(n,r,t,i);if(this.map.isDefine&&void 0===i&&((t=this.module)?i=t.exports:this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",l(this.error=e)}else i=r;if(this.exports=i,this.map.isDefine&&!this.ignore&&(I[n]=i,g.onResourceLoad)){var a=[];y(this.depMaps,function(e){a.push(e.normalizedMap||e)}),g.onResourceLoad(w,this.map,a)}d(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else x(w.defQueueMap,n)||this.fetch()}},callPlugin:function(){var t=this.map,i=t.id,r=a(t.prefix);this.depMaps.push(r),u(r,"defined",z(this,function(r){var o,c,f=e(A,this.map.id),h=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,m=w.makeRequire(t.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(r.normalize&&(h=r.normalize(h,function(e){return n(e,p,!0)})||""),c=a(t.prefix+"!"+h,this.map.parentMap),u(c,"defined",z(this,function(e){this.map.normalizedMap=c,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),(r=e(q,c.id))&&(this.depMaps.push(c),this.events.error&&r.on("error",z(this,function(e){this.emit("error",e)})),r.enable())):f?(this.map.url=w.nameToUrl(f),this.load()):(o=z(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),o.error=z(this,function(e){this.inited=!0,this.error=e,e.requireModules=[i],D(q,function(e){0===e.map.id.indexOf(i+"_unnormalized")&&d(e.map.id)}),l(e)}),o.fromText=z(this,function(e,n){var r=t.name,u=a(r),c=S;n&&(e=n),c&&(S=!1),s(u),x(T.config,i)&&(T.config[r]=T.config[i]);try{g.exec(e)}catch(d){return l(F("fromtexteval","fromText eval for "+i+" failed: "+d,d,[i]))}c&&(S=!0),this.depMaps.push(u),w.completeLoad(r),m([r],o)}),r.load(t.name,m,o,T))})),w.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){P[this.map.id]=this,this.enabling=this.enabled=!0,y(this.depMaps,z(this,function(t,n){var i,r;if("string"==typeof t){if(t=a(t,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[n]=t,i=e(C,t.id))return void(this.depExports[n]=i(this));this.depCount+=1,u(t,"defined",z(this,function(e){this.undefed||(this.defineDep(n,e),this.check())})),this.errback?u(t,"error",z(this,this.errback)):this.events.error&&u(t,"error",z(this,function(e){this.emit("error",e)}))}i=t.id,r=q[i],x(C,i)||!r||r.enabled||w.enable(t,this)})),D(this.pluginMaps,z(this,function(t){var n=e(q,t.id);n&&!n.enabled&&w.enable(t,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){y(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},w={config:T,contextName:t,registry:q,defined:I,urlFetched:B,defQueue:j,defQueueMap:{},Module:M,makeModuleMap:a,nextTick:g.nextTick,onError:l,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,n){return(-1===n.indexOf("?")?"?":"&")+t}}var n=T.shim,i={paths:!0,bundles:!0,config:!0,map:!0};D(e,function(e,t){i[t]?(T[t]||(T[t]={}),Y(T[t],e,!0,!0)):T[t]=e}),e.bundles&&D(e.bundles,function(e,t){y(e,function(e){e!==t&&(A[e]=t)})}),e.shim&&(D(e.shim,function(e,t){L(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=w.makeShimExports(e)),n[t]=e}),T.shim=n),e.packages&&y(e.packages,function(e){var t;e="string"==typeof e?{name:e}:e,t=e.name,e.location&&(T.paths[t]=e.location),T.pkgs[t]=e.name+"/"+(e.main||"main").replace(na,"").replace(U,"")}),D(q,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t,null,!0))}),(e.deps||e.callback)&&w.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(ga,arguments)),t||e.exports&&ia(e.exports)}},makeRequire:function(r,o){function u(e,n,i){var c,d;return o.enableBuildCallback&&n&&K(n)&&(n.__requireJsBuild=!0),"string"==typeof e?K(n)?l(F("requireargs","Invalid require call"),i):r&&x(C,e)?C[e](q[r.id]):g.get?g.get(w,e,r,u):(c=a(e,r,!1,!0),c=c.id,x(I,c)?I[c]:l(F("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+t+(r?"":". Use require([])")))):(v(),w.nextTick(function(){v(),d=s(a(null,r)),d.skipMap=o.skipMap,d.init(e,n,i,{enabled:!0}),h()}),u)}return o=o||{},Y(u,{isBrowser:E,toUrl:function(e){var t,i=e.lastIndexOf("."),o=e.split("/")[0];return-1!==i&&("."!==o&&".."!==o||i>1)&&(t=e.substring(i,e.length),e=e.substring(0,i)),w.nameToUrl(n(e,r&&r.id,!0),t,!0)},defined:function(e){return x(I,a(e,r,!1,!0).id)},specified:function(e){return e=a(e,r,!1,!0).id,x(I,e)||x(q,e)}}),r||(u.undef=function(t){c();var n=a(t,r,!0),o=e(q,t);o.undefed=!0,i(t),delete I[t],delete B[n.url],delete $[t],X(j,function(e,n){e[0]===t&&j.splice(n,1)}),delete w.defQueueMap[t],o&&(o.events.defined&&($[t]=o.events),d(t))}),u},enable:function(t){e(q,t.id)&&s(t).enable()},completeLoad:function(t){var n,i,o=e(T.shim,t)||{},a=o.exports;for(c();j.length;){if(i=j.shift(),null===i[0]){if(i[0]=t,n)break;n=!0}else i[0]===t&&(n=!0);p(i)}if(w.defQueueMap={},i=e(q,t),!n&&!x(I,t)&&i&&!i.inited){if(!(!T.enforceDefine||a&&ia(a)))return r(t)?void 0:l(F("nodefine","No define call for "+t,null,[t]));p([t,o.deps||[],o.exportsFn])}h()},nameToUrl:function(t,n,i){var r,o,a,s;if((r=e(T.pkgs,t))&&(t=r),r=e(A,t))return w.nameToUrl(r,n,i);if(g.jsExtRegExp.test(t))r=t+(n||"");else{for(r=T.paths,o=t.split("/"),a=o.length;a>0;--a)if(s=o.slice(0,a).join("/"),s=e(r,s)){L(s)&&(s=s[0]),o.splice(0,a,s);break}r=o.join("/"),r+=n||(/^data\:|^blob\:|\?/.test(r)||i?"":".js"),r=("/"===r.charAt(0)||r.match(/^[\w\+\.\-]+:/)?"":T.baseUrl)+r}return T.urlArgs&&!/^blob\:/.test(r)?r+T.urlArgs(t,r):r},load:function(e,t){g.load(w,e,t)},execCb:function(e,t,n,i){return t.apply(i,n)},onScriptLoad:function(e){("load"===e.type||oa.test((e.currentTarget||e.srcElement).readyState))&&(N=null,e=m(e),w.completeLoad(e.id))},onScriptError:function(e){var t=m(e);if(!r(t.id)){var n=[];return D(q,function(e,i){0!==i.indexOf("_@r")&&y(e.depMaps,function(e){return e.id===t.id?(n.push(i),!0):void 0})}),l(F("scripterror",'Script error for "'+t.id+(n.length?'", needed by: '+n.join(", "):'"'),e,[t.id]))}}},w.require=w.makeRequire(),w}function pa(){return N&&"interactive"===N.readyState?N:(X(document.getElementsByTagName("script"),function(e){return"interactive"===e.readyState?N=e:void 0}),N)}var g,B,C,H,O,I,N,P,u,T,qa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ra=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,U=/\.js$/,na=/^\.\//;B=Object.prototype;var Q=B.toString,la=B.hasOwnProperty,E=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),ja=!E&&"undefined"!=typeof importScripts,oa=E&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,ca="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),J={},w={},V=[],S=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(K(requirejs))return;w=requirejs,requirejs=void 0}"undefined"==typeof require||K(require)||(w=require,require=void 0),g=requirejs=function(t,n,i,r){var o,a="_";return L(t)||"string"==typeof t||(o=t,L(n)?(t=n,n=i,i=r):t=[]),o&&o.context&&(a=o.context),(r=e(J,a))||(r=J[a]=g.s.newContext(a)),o&&r.configure(o),r.require(t,n,i)},g.config=function(e){return g(e)},g.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=g),g.version="2.2.0",g.jsExtRegExp=/^\/|:|\?|\.js$/,g.isBrowser=E,B=g.s={contexts:J,newContext:ma},g({}),y(["toUrl","undef","defined","specified"],function(e){g[e]=function(){var t=J._;return t.require[e].apply(t,arguments)}}),E&&(C=B.head=document.getElementsByTagName("head")[0],H=document.getElementsByTagName("base")[0])&&(C=B.head=H.parentNode),g.onError=ha,g.createNode=function(e,t,n){return t=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),t.type=e.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t},g.load=function(e,t,n){var i,r=e&&e.config||{};if(E)return i=g.createNode(r,t,n),i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&0>i.attachEvent.toString().indexOf("[native code")||ca?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(S=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,r.onNodeCreated&&r.onNodeCreated(i,r,t,n),P=i,H?C.insertBefore(i,H):C.appendChild(i),P=null,i;if(ja)try{setTimeout(function(){},0),importScripts(n),e.completeLoad(t)}catch(o){e.onError(F("importscripts","importScripts failed for "+t+" at "+n,o,[t]))}},E&&!w.skipDataMain&&X(document.getElementsByTagName("script"),function(e){return C||(C=e.parentNode),(O=e.getAttribute("data-main"))?(u=O,w.baseUrl||-1!==u.indexOf("!")||(I=u.split("/"),u=I.pop(),T=I.length?I.join("/")+"/":"./",w.baseUrl=T),u=u.replace(U,""),g.jsExtRegExp.test(u)&&(u=O),w.deps=w.deps?w.deps.concat(u):[u],!0):void 0}),define=function(e,t,n){var i,r;"string"!=typeof e&&(n=t,t=e,e=null),L(t)||(n=t,t=null),!t&&K(n)&&(t=[],n.length&&(n.toString().replace(qa,ka).replace(ra,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),S&&(i=P||pa())&&(e||(e=i.getAttribute("data-requiremodule")),r=J[i.getAttribute("data-requirecontext")]),r?(r.defQueue.push([e,t,n]),r.defQueueMap[e]=!0):V.push([e,t,n])},define.amd={jQuery:!0},g.exec=function(b){return eval(b)},g(w)}}(this),define("requireLib",function(){}),define("common",[],function(){"use strict";Math.rand=function(e,t){return Math.random()*(t-e+1)+e},Math.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}),require.config({baseUrl:"./scripts/modules",paths:{Modernizr:"../vendors/modernizr"},shim:{Modernizr:{exports:"Modernizr"}}}),require(["./common"],function(){require(["./app","./download"],function(e,t){var n=document,i=n.getElementById("pusheen"),r=n.querySelector(".button_generate");i.width=280,i.height=210;var o=e;o.init(i,{cookiePatternPath:"cookie.png"}),o.setup(),o.draw(),r.addEventListener("click",function(){o.clear(),o.setup(),o.draw()}),t(i)})}),define("main",function(){}),define("colorPalettes",[],function(){"use strict";function e(e,t,n){return"hsl("+e+","+t+"%,"+n+"%)"}function t(e,t){return Math.random()<=.1?e:Math.randInt(t[0],t[1])}return{init:function(){return{brown:{strokeColor:e(Math.randInt(28,32),100,20),basicColor:e(Math.randInt(28,32),100,t(100,[30,85])),bellyColor:e(Math.randInt(28,32),100,t(100,[40,80])),cookieColor:"#e09850",chocolateColor:"#3a2008"},grey:{strokeColor:e(0,0,20),basicColor:e(0,0,t(0,[30,100])),bellyColor:e(0,0,t(0,[30,100])),cookieColor:"#e09850",chocolateColor:"#3a2008"}}}}}),define("drawBody",[],function(){"use strict";return function(e){function t(t,n){var i=28,r=25;e.moveTo(t,n),e.bezierCurveTo(t+r/2-2,n-i,t+r/2+2,n-i,t+r,n)}function n(){for(var t=3,n=3,i=215,r=167,o=0;4>o;o++){var a=o%2?60:35;e.lineTo(i,r+t),e.arc(i-n/2,r+t,n/2,0,Math.PI),e.lineTo(i-n,r),3>o&&e.lineTo(i-a,r),i-=a}}e.beginPath(),t(60,50),e.lineTo(105,50),t(105,50),e.bezierCurveTo(160,37,200,37,224.6,66),e.arc(158.4,111,80,-(Math.PI/180*35),Math.PI/180*45),n(),e.bezierCurveTo(50,150,40,110,60,50),e.stroke(),e.fill(),e.closePath()}}),define("drawTail",[],function(){"use strict";return function(e){e.beginPath(),e.moveTo(240.5,105),e.bezierCurveTo(250,107,255,95,253,85),e.arc(261,85,8,Math.PI,2*Math.PI),e.bezierCurveTo(270,103,263,120,240.5,118),e.stroke(),e.closePath(),e.fill()}}),define("drawPattern",[],function(){"use strict";var e,t;return{setParams:function(n,i){e=n,t=i},head:function(t){for(var n=Math.randInt(2,3),i={x:88,y:50},r=18,o=5,a=r/n,s=(a-t)/2,u=0;n>u;u++)e.beginPath(),e.save(),e.translate(i.x+a*u+s,i.y),e.moveTo(0,0),e.lineTo(0,o),e.restore(),e.stroke(),e.closePath()},back:function(){var t=170,n=41,i=30,r=18;e.beginPath(),e.moveTo(t,n),e.bezierCurveTo(t+(r/2-10),n+i,t+(r/2+3),n+i,t+r+2,n+2),e.fill(),t+=1.8*r,n+=7,e.beginPath(),e.moveTo(t,n),e.bezierCurveTo(t+(r/2-12),n+i,t+(r/2+1),n+i,t+r,n+12),e.fill()},tail:function(){var t=14,n=[[244,103],[250,98],[252,85]],i=[[244,105+t],[252+t,98+t-5],[254+t+2,85]];n.forEach(function(t,n){e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(i[n][0],i[n][1]),e.stroke()})},nose:function(){e.beginPath(),e.arc(t.x,t.y+4,12,0,2*Math.PI),e.fill(),e.closePath()},belly:function(){e.beginPath(),e.moveTo(50,127),e.bezierCurveTo(60,127,63,120,68,115),e.bezierCurveTo(84,100,100,100,120,114),e.bezierCurveTo(119,113,126,120,140,127),e.fill(),e.closePath()}}}),define("drawFace",[],function(){"use strict";var e,t,n;return{setParams:function(i,r,o){e=i,t=r,n=o},eyes:function(){var n=Math.rand(3,4.5);e.beginPath(),e.arc(t.x-23,t.y,n,0,2*Math.PI),e.arc(t.x+23,t.y,n,0,2*Math.PI),e.fill(),e.closePath()},whiskers:function(){for(var i=n/Math.rand(1.5,3),r=Math.randInt(2,3),o={x:t.x-n+5,y:t.y},a={x:t.x+n-5,y:t.y},s=4,u=0;r>u;u++){var l=r/2>u?1.8:-1.8;e.beginPath(),e.moveTo(o.x,o.y+s),e.lineTo(o.x-i,o.y+s+l),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(a.x,a.y+s),e.lineTo(a.x+i,a.y+s+l),e.stroke(),e.closePath(),s-=3}},cheeks:function(){e.beginPath(),e.moveTo(t.x,t.y),e.bezierCurveTo(96,77,102,77,103,70),e.moveTo(t.x,t.y),e.moveTo(t.x,t.y),e.bezierCurveTo(94,77,86,77,87,70),e.stroke(),e.closePath()}}}),define("drawCookieHelper",[],function(){"use strict";function e(t,n,i,r){if("function"==typeof Promise&&n){var o=new Promise(function(e,t){var i=new Image;i.onload=function(){e(i)},i.onerror=function(){t()},i.src=n});o.then(function(e){return t.createPattern(e,"repeat")})["catch"](function(){return i}).then(function(n){(e=function(){t.save(),t.fillStyle=n,r(),t.restore()})()})}else(e=function(){t.save(),t.fillStyle=i,r(),t.restore()})()}return e}),define("drawCookie",[],function(){"use strict";return function(e,t){e.beginPath(),e.arc(t.x,t.y+14,12,-(.26*Math.PI),1.26*Math.PI,!1),e.stroke(),e.fill(),e.closePath()}}),define("drawChocolate",[],function(){"use strict";return function(e){for(var t=0;3>t;t++){var n=Math.rand(88,100),i=Math.rand(82,87);e.beginPath(),e.moveTo(n,i),e.lineTo(n+Math.rand(1,2),i+Math.rand(1,2)*(Math.rand()>.5?1:-1)),e.stroke()}}}),define("app",["./colorPalettes","./drawBody","./drawTail","./drawPattern","./drawFace","./drawCookieHelper","./drawCookie","./drawChocolate"],function(e,t,n,i,r,o,a,s){"use strict";return{init:function(e,t){this.canvas=e,this.$=this.canvas.getContext("2d"),this.options=t||{},this.headRadius=46,this.faceCenter={x:95,y:70},this.cookieUrl=this.options.cookiePatternPath},setup:function(){var t=e.init();this.palette=Math.random()<.5?t.grey:t.brown,this.bellyGradient=this.$.createLinearGradient(0,0,0,210),this.bellyGradient.addColorStop(.6,this.palette.basicColor),this.bellyGradient.addColorStop(.6,this.palette.bellyColor),this.bellyGradient.addColorStop(1,this.palette.bellyColor),this.$.lineCap="round",this.$.strokeStyle=this.palette.strokeColor,this.$.fillStyle=this.palette.basicColor,this.$.lineWidth=5},clear:function(){this.$.clearRect(0,0,this.canvas.width,this.canvas.height)},draw:function(){this.$.save(),this.$.fillStyle=this.bellyGradient,t(this.$),this.$.restore(),n(this.$),i.setParams(this.$,this.faceCenter),this.$.save(),this.$.fillStyle=this.palette.bellyColor,i.belly(),this.$.restore(),Math.randInt(0,1)&&(this.$.save(),this.$.lineWidth=Math.rand(2,4),i.head(this.$.lineWidth),this.$.restore()),Math.randInt(0,1)&&(this.$.save(),this.$.fillStyle=this.palette.strokeColor,i.back(),this.$.restore()),Math.randInt(0,1)&&(this.$.save(),this.$.lineCap="butt",this.$.lineWidth=9,i.tail(),this.$.restore()),Math.randInt(0,1)&&(this.$.save(),this.$.fillStyle="#ffffff",i.nose(),this.$.restore()),r.setParams(this.$,this.faceCenter,this.headRadius),this.$.save(),this.$.fillStyle=this.palette.strokeColor,r.eyes(),this.$.restore(),this.$.save(),this.$.lineWidth=Math.rand(1,1.6),r.whiskers(),this.$.restore();var e=this,u=this.$;o(this.$,this.cookieUrl,this.palette.cookieColor,function(){a(u,e.faceCenter),u.save(),u.lineWidth=Math.rand(2.5,3.5),u.strokeStyle=e.palette.chocolateColor,s(u),u.restore(),u.save(),u.lineWidth=3,r.cheeks(),u.restore()})}}}),!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,l;for(var d in u)if(u.hasOwnProperty(d)){if(e=[],t=u[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],l=a.split("."),1===l.length?c[l[0]]=r:(!c[l[0]]||c[l[0]]instanceof Boolean||(c[l[0]]=new Boolean(c[l[0]])),c[l[0]][l[1]]=r),s.push((r?"":"no-")+l.join("-"))}}function o(e){var t=d.className,n=c._config.classPrefix||"";if(f&&(t=t.baseVal),c._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),f?d.className.baseVal=t:d.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):f?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var s=[],u=[],l={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){u.push({name:e,fn:t,options:n})},addAsyncTest:function(e){u.push({name:null,fn:e})}},c=function(){};c.prototype=l,c=new c;var d=t.documentElement,f="svg"===d.nodeName.toLowerCase();c.addTest("adownload",!e.externalHost&&"download"in a("a")),r(),o(s),delete l.addTest,delete l.addAsyncTest;for(var h=0;h<c._q.length;h++)c._q[h]();e.Modernizr=c}(window,document),define("Modernizr",function(e){return function(){var t;return t||e.Modernizr}}(this)),define("download",["Modernizr"],function(e){"use strict";var t=document;if(e.adownload){var n=t.querySelector(".button_download");return function(e){n.addEventListener("click",function(){n.href=e.toDataURL(),n.download="pusheen "+Math.randInt(1,1e4)+".png"})}}var i=t.querySelector(".download-wrapper"),r=t.querySelector(".download-hint");return function(){i.classList.add("download-wrapper_hidden"),r.classList.add("download-hint_active")}});