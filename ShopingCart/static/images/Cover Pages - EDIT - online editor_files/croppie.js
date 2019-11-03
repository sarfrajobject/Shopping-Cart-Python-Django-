!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports=t():e.Croppie=t()}("undefined"!=typeof self?self:this,function(){function n(e,t){return function(){e.apply(t,arguments)}}function e(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,n(i,this),n(o,this))}function r(n){var i=this;return null===this._state?void this._deferreds.push(n):void c(function(){var e=i._state?n.onFulfilled:n.onRejected;if(null!==e){var t;try{t=e(i._value)}catch(e){return void n.reject(e)}n.resolve(t)}else(i._state?n.resolve:n.reject)(i._value)})}function i(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(n(t,e),n(i,this),n(o,this))}this._state=!0,this._value=e,a.call(this)}catch(e){o.call(this,e)}}function o(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;e<t;e++)r.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function l(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(e){if(i)return;i=!0,n(e)}}var t,u,c,h;function p(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof Promise&&(t=this,u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.then=function(n,i){var o=this;return new e(function(e,t){r.call(o,new s(n,i,e,t))})},e.all=function(){var s=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new e(function(i,o){function r(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){r(t,e)},o)}s[t]=e,0==--a&&i(s)}catch(e){o(e)}}if(0===s.length)return i([]);for(var a=s.length,e=0;e<s.length;e++)r(e,s[e])})},e.resolve=function(t){return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},e.reject=function(n){return new e(function(e,t){t(n)})},e.race=function(o){return new e(function(e,t){for(var n=0,i=o.length;n<i;n++)o[n].then(e,t)})},e._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=e:t.Promise||(t.Promise=e)),"function"!=typeof window.CustomEvent&&(p.prototype=window.Event.prototype,window.CustomEvent=p),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var v,g,w,d=["Webkit","Moz","ms"],m=document.createElement("div").style,f=[1,8,3,6],y=[2,7,4,5];function b(e){if(e in m)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=d.length;n--;)if((e=d[n]+t)in m)return e}function x(e,t){for(var n in e=e||{},t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},x(e[n],t[n])):e[n]=t[n];return e}function C(e){return x({},e)}function E(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function L(e,t,n){if("string"==typeof t){var i=t;(t={})[i]=n}for(var o in t)e.style[o]=t[o]}function _(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function R(e,t){for(var n in t)e.setAttribute(n,t[n])}function B(e){return parseInt(e,10)}function Z(e,t){var n=e.naturalWidth,i=e.naturalHeight,o=t||F(e);if(o&&5<=o){var r=n;n=i,i=r}return{width:n,height:i}}g=b("transform"),v=b("transformOrigin"),w=b("userSelect");var z={translate3d:{suffix:", 0px"},translate:{suffix:""}},M=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};M.parse=function(e){return e.style?M.parse(e.style[g]):-1<e.indexOf("matrix")||-1<e.indexOf("none")?M.fromMatrix(e):M.fromString(e)},M.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new M(B(t[4]),B(t[5]),parseFloat(t[0]))},M.fromString=function(e){var t=e.split(") "),n=t[0].substring(ie.globals.translate.length+1).split(","),i=1<t.length?t[1].substring(6):1,o=1<n.length?n[0]:0,r=1<n.length?n[1]:0;return new M(o,r,i)},M.prototype.toString=function(){var e=z[ie.globals.translate].suffix||"";return ie.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var I=function(e){if(!e||!e.style[v])return this.x=0,void(this.y=0);var t=e.style[v].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};function F(e){return e.exifdata&&e.exifdata.Orientation?B(e.exifdata.Orientation):1}function X(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function Y(){var e,t,n,i,o,r,a=this,s=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.enableOrientation||W.call(a),a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=t,_(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),o=a.options.boundary.width,r=a.options.boundary.height,L(e,{width:o+(isNaN(o)?"":"px"),height:r+(isNaN(r)?"":"px")}),_(n,"cr-viewport"),s&&_(n,s),L(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),n.setAttribute("tabindex",0),_(a.elements.preview,"cr-image"),R(a.elements.preview,{alt:"preview","aria-grabbed":"false"}),_(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),_(a.element,"croppie-container"),a.options.customClass&&_(a.element,a.options.customClass),function(){var c,h,p,r,d,m=this,n=!1;function f(e,t){var n=m.elements.preview.getBoundingClientRect(),i=d.y+t,o=d.x+e;m.options.enforceBoundary?(r.top>n.top+t&&r.bottom<n.bottom+t&&(d.y=i),r.left>n.left+e&&r.right<n.right+e&&(d.x=o)):(d.y=i,d.x=o)}function i(e){m.elements.preview.setAttribute("aria-grabbed",e),m.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function e(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!n)){if(n=!0,c=e.pageX,h=e.pageY,e.touches){var t=e.touches[0];c=t.pageX,h=t.pageY}i(n),d=M.parse(m.elements.preview),window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),window.addEventListener("mouseup",a),window.addEventListener("touchend",a),document.body.style[w]="none",r=m.elements.viewport.getBoundingClientRect()}}function o(e){e.preventDefault();var t=e.pageX,n=e.pageY;if(e.touches){var i=e.touches[0];t=i.pageX,n=i.pageY}var o=t-c,r=n-h,a={};if("touchmove"===e.type&&1<e.touches.length){var s=e.touches[0],l=e.touches[1],u=Math.sqrt((s.pageX-l.pageX)*(s.pageX-l.pageX)+(s.pageY-l.pageY)*(s.pageY-l.pageY));return p||(p=u/m._currentZoom),O.call(m,u/p),void E(m.elements.zoomer)}f(o,r),a[g]=d.toString(),L(m.elements.preview,a),A.call(m),h=n,c=t}function a(){i(n=!1),window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",o),window.removeEventListener("mouseup",a),window.removeEventListener("touchend",a),document.body.style[w]="",k.call(m),T.call(m),p=0}m.elements.overlay.addEventListener("mousedown",e),m.elements.viewport.addEventListener("keydown",function(e){var t;if(!e.shiftKey||38!==e.keyCode&&40!==e.keyCode){if(m.options.enableKeyMovement&&37<=e.keyCode&&e.keyCode<=40){e.preventDefault();var n=function(e){switch(e){case 37:return[1,0];case 38:return[0,1];case 39:return[-1,0];case 40:return[0,-1]}}(e.keyCode);d=M.parse(m.elements.preview),document.body.style[w]="none",r=m.elements.viewport.getBoundingClientRect(),function(e){var t=e[0],n=e[1],i={};f(t,n),i[g]=d.toString(),L(m.elements.preview,i),A.call(m),document.body.style[w]="",k.call(m),T.call(m),p=0}(n)}}else t=38===e.keyCode?parseFloat(m.elements.zoomer.value)+parseFloat(m.elements.zoomer.step):parseFloat(m.elements.zoomer.value)-parseFloat(m.elements.zoomer.step),m.setZoom(t)}),m.elements.overlay.addEventListener("touchstart",e)}.call(this),a.options.enableZoom&&function(){var i=this,e=i.elements.zoomerWrap=document.createElement("div"),t=i.elements.zoomer=document.createElement("input");function o(){(function(e){var t=this,n=e?e.transform:M.parse(t.elements.preview),i=e?e.viewportRect:t.elements.viewport.getBoundingClientRect(),o=e?e.origin:new I(t.elements.preview);function r(){var e={};e[g]=n.toString(),e[v]=o.toString(),L(t.elements.preview,e)}if(t._currentZoom=e?e.value:t._currentZoom,n.scale=t._currentZoom,t.elements.zoomer.setAttribute("aria-valuenow",t._currentZoom),r(),t.options.enforceBoundary){var a=function(e){var t=this._currentZoom,n=e.width,i=e.height,o=this.elements.boundary.clientWidth/2,r=this.elements.boundary.clientHeight/2,a=this.elements.preview.getBoundingClientRect(),s=a.width,l=a.height,u=n/2,c=i/2,h=-1*(u/t-o),p=-1*(c/t-r),d=1/t*u,m=1/t*c;return{translate:{maxX:h,minX:h-(s*(1/t)-n*(1/t)),maxY:p,minY:p-(l*(1/t)-i*(1/t))},origin:{maxX:s*(1/t)-d,minX:d,maxY:l*(1/t)-m,minY:m}}}.call(t,i),s=a.translate,l=a.origin;n.x>=s.maxX&&(o.x=l.minX,n.x=s.maxX),n.x<=s.minX&&(o.x=l.maxX,n.x=s.minX),n.y>=s.maxY&&(o.y=l.minY,n.y=s.maxY),n.y<=s.minY&&(o.y=l.maxY,n.y=s.minY)}r(),P.call(t),T.call(t)}).call(i,{value:parseFloat(t.value),origin:new I(i.elements.preview),viewportRect:i.elements.viewport.getBoundingClientRect(),transform:M.parse(i.elements.preview)})}function n(e){var t,n;if("ctrl"===i.options.mouseWheelZoom&&!0!==e.ctrlKey)return 0;t=e.wheelDelta?e.wheelDelta/1200:e.deltaY?e.deltaY/1060:e.detail?e.detail/-60:0,n=i._currentZoom+t*i._currentZoom,e.preventDefault(),O.call(i,n),o.call(i)}_(e,"cr-slider-wrap"),_(t,"cr-slider"),t.type="range",t.step="0.0001",t.value="1",t.style.display=i.options.showZoomer?"":"none",t.setAttribute("aria-label","zoom"),i.element.appendChild(e),e.appendChild(t),i._currentZoom=1,i.elements.zoomer.addEventListener("input",o),i.elements.zoomer.addEventListener("change",o),i.options.mouseWheelZoom&&(i.elements.boundary.addEventListener("mousewheel",n),i.elements.boundary.addEventListener("DOMMouseScroll",n))}.call(a),a.options.enableResize&&function(){var l,u,c,h,p,e,t,d=this,m=document.createElement("div"),i=!1,f=50;_(m,"cr-resizer"),L(m,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(_(e=document.createElement("div"),"cr-resizer-vertical"),m.appendChild(e));this.options.resizeControls.width&&(_(t=document.createElement("div"),"cr-resizer-horisontal"),m.appendChild(t));function n(e){if((void 0===e.button||0===e.button)&&(e.preventDefault(),!i)){var t=d.elements.overlay.getBoundingClientRect();if(i=!0,u=e.pageX,c=e.pageY,l=-1!==e.currentTarget.className.indexOf("vertical")?"v":"h",h=t.width,p=t.height,e.touches){var n=e.touches[0];u=n.pageX,c=n.pageY}window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),window.addEventListener("mouseup",r),window.addEventListener("touchend",r),document.body.style[w]="none"}}function o(e){var t=e.pageX,n=e.pageY;if(e.preventDefault(),e.touches){var i=e.touches[0];t=i.pageX,n=i.pageY}var o=t-u,r=n-c,a=d.options.viewport.height+r,s=d.options.viewport.width+o;"v"===l&&f<=a&&a<=p?(L(m,{height:a+"px"}),d.options.boundary.height+=r,L(d.elements.boundary,{height:d.options.boundary.height+"px"}),d.options.viewport.height+=r,L(d.elements.viewport,{height:d.options.viewport.height+"px"})):"h"===l&&f<=s&&s<=h&&(L(m,{width:s+"px"}),d.options.boundary.width+=o,L(d.elements.boundary,{width:d.options.boundary.width+"px"}),d.options.viewport.width+=o,L(d.elements.viewport,{width:d.options.viewport.width+"px"})),A.call(d),K.call(d),k.call(d),T.call(d),c=n,u=t}function r(){i=!1,window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",o),window.removeEventListener("mouseup",r),window.removeEventListener("touchend",r),document.body.style[w]=""}e&&(e.addEventListener("mousedown",n),e.addEventListener("touchstart",n));t&&(t.addEventListener("mousedown",n),t.addEventListener("touchstart",n));this.elements.boundary.appendChild(m)}.call(a)}function W(){return this.options.enableExif&&window.EXIF}function O(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=Q(e,4);t.value=Math.max(parseFloat(t.min),Math.min(parseFloat(t.max),n)).toString()}}function k(e){var t=this,n=t._currentZoom,i=t.elements.preview.getBoundingClientRect(),o=t.elements.viewport.getBoundingClientRect(),r=M.parse(t.elements.preview.style[g]),a=new I(t.elements.preview),s=o.top-i.top+o.height/2,l=o.left-i.left+o.width/2,u={},c={};if(e){var h=a.x,p=a.y,d=r.x,m=r.y;u.y=h,u.x=p,r.y=d,r.x=m}else u.y=s/n,u.x=l/n,c.y=(u.y-a.y)*(1-n),c.x=(u.x-a.x)*(1-n),r.x-=c.x,r.y-=c.y;var f={};f[v]=u.x+"px "+u.y+"px",f[g]=r.toString(),L(t.elements.preview,f)}function A(){if(this.elements){var e=this.elements.boundary.getBoundingClientRect(),t=this.elements.preview.getBoundingClientRect();L(this.elements.overlay,{width:t.width+"px",height:t.height+"px",top:t.top-e.top+"px",left:t.left-e.left+"px"})}}I.prototype.toString=function(){return this.x+"px "+this.y+"px"};var j,H,N,S,P=(j=A,H=500,function(){var e=this,t=arguments,n=N&&!S;clearTimeout(S),S=setTimeout(function(){S=null,N||j.apply(e,t)},H),n&&j.apply(e,t)});function T(){var e,t=this,n=t.get();D.call(t)&&(t.options.update.call(t,n),t.$&&"undefined"==typeof Prototype?t.$(t.element).trigger("update.croppie",n):(window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,n),t.element.dispatchEvent(e)))}function D(){return 0<this.elements.preview.offsetHeight&&0<this.elements.preview.offsetWidth}function q(){var e,t=this,n={},i=t.elements.preview,o=new M(0,0,1),r=new I;D.call(t)&&!t.data.bound&&(t.data.bound=!0,n[g]=o.toString(),n[v]=r.toString(),n.opacity=1,L(i,n),e=t.elements.preview.getBoundingClientRect(),t._originalImageWidth=e.width,t._originalImageHeight=e.height,t.data.orientation=F(t.elements.img),t.options.enableZoom?K.call(t,!0):t._currentZoom=1,o.scale=t._currentZoom,n[g]=o.toString(),L(i,n),t.data.points.length?function(e){if(4!==e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),o=t.elements.boundary.getBoundingClientRect(),r={left:i.left-o.left,top:i.top-o.top},a=i.width/n,s=e[1],l=e[0],u=-1*e[1]+r.top,c=-1*e[0]+r.left,h={};h[v]=l+"px "+s+"px",h[g]=new M(c,u,a).toString(),L(t.elements.preview,h),O.call(t,a),t._currentZoom=a}.call(t,t.data.points):function(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),o=n.left-i.left,r=n.top-i.top,a=o-(t.width-n.width)/2,s=r-(t.height-n.height)/2,l=new M(a,s,e._currentZoom);L(e.elements.preview,g,l.toString())}.call(t),k.call(t),A.call(t))}function K(e){var t,n,i,o,r=this,a=Math.max(r.options.minZoom,0)||0,s=r.options.maxZoom||1.5,l=r.elements.zoomer,u=parseFloat(l.value),c=r.elements.boundary.getBoundingClientRect(),h=Z(r.elements.img,r.data.orientation),p=r.elements.viewport.getBoundingClientRect();r.options.enforceBoundary&&(i=p.width/h.width,o=p.height/h.height,a=Math.max(i,o)),s<=a&&(s=a+1),l.min=Q(a,4),l.max=Q(s,4),!e&&(u<l.min||u>l.max)?O.call(r,u<l.min?l.min:l.max):e&&(n=Math.max(c.width/h.width,c.height/h.height),t=null!==r.data.boundZoom?r.data.boundZoom:n,O.call(r,t)),E(l)}function U(e){var t=e.points,n=B(t[0]),i=B(t[1]),o=B(t[2])-n,r=B(t[3])-i,a=e.circle,s=document.createElement("canvas"),l=s.getContext("2d"),u=e.outputWidth||o,c=e.outputHeight||r;s.width=u,s.height=c,e.backgroundColor&&(l.fillStyle=e.backgroundColor,l.fillRect(0,0,u,c));var h=n,p=i,d=o,m=r,f=0,v=0,g=u,w=c;return n<0&&(h=0,f=Math.abs(n)/o*u),d+h>this._originalImageWidth&&(g=(d=this._originalImageWidth-h)/o*u),i<0&&(p=0,v=Math.abs(i)/r*c),m+p>this._originalImageHeight&&(w=(m=this._originalImageHeight-p)/r*c),l.drawImage(this.elements.preview,h,p,d,m,f,v,g,w),a&&(l.fillStyle="#fff",l.globalCompositeOperation="destination-in",l.beginPath(),l.arc(s.width/2,s.height/2,s.width/2,0,2*Math.PI,!0),l.closePath(),l.fill()),s}function $(c,h){var e,p=this,d=[],t=null,n=W.call(p);if("string"==typeof c)e=c,c={};else if(Array.isArray(c))d=c.slice();else{if(void 0===c&&p.data.url)return q.call(p),T.call(p),null;e=c.url,d=c.points||[],t=void 0===c.zoom?null:c.zoom}return p.data.bound=!1,p.data.url=e||p.data.url,p.data.boundZoom=t,function(i,o){var r=new Image;return r.style.opacity="0",new Promise(function(e,t){function n(){r.style.opacity="1",setTimeout(function(){e(r)},1)}r.removeAttribute("crossOrigin"),i.match(/^https?:\/\/|^\/\//)&&r.setAttribute("crossOrigin","anonymous"),r.onload=function(){o?EXIF.getData(r,function(){n()}):n()},r.onerror=function(e){r.style.opacity=1,setTimeout(function(){t(e)},1)},r.src=i})}(e,n).then(function(e){if(function(t){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,function(e){t.classList.add(e)}),this.elements.img.parentNode.replaceChild(t,this.elements.img),this.elements.preview=t),this.elements.img=t}.call(p,e),d.length)p.options.relative&&(d=[d[0]*e.naturalWidth/100,d[1]*e.naturalHeight/100,d[2]*e.naturalWidth/100,d[3]*e.naturalHeight/100]);else{var t,n,i=Z(e),o=p.elements.viewport.getBoundingClientRect(),r=o.width/o.height;r<i.width/i.height?t=(n=i.height)*r:(t=i.width,n=i.height/r);var a=(i.width-t)/2,s=(i.height-n)/2,l=a+t,u=s+n;p.data.points=[a,s,l,u]}p.data.points=d.map(function(e){return parseFloat(e)}),p.options.useCanvas&&function(e){var t=this.elements.canvas,n=this.elements.img;t.getContext("2d").clearRect(0,0,t.width,t.height),t.width=n.width,t.height=n.height,X(t,n,this.options.enableOrientation&&e||F(n))}.call(p,c.orientation),q.call(p),T.call(p),h&&h()})}function Q(e,t){return parseFloat(e).toFixed(t||0)}function G(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,s=i+e.elements.viewport.offsetWidth+r,l=o+e.elements.viewport.offsetHeight+a,u=e._currentZoom;u!==1/0&&!isNaN(u)||(u=1);var c=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(c,i/u),o=Math.max(c,o/u),s=Math.max(c,s/u),l=Math.max(c,l/u),{points:[Q(i),Q(o),Q(s),Q(l)],zoom:u,orientation:e.data.orientation}}var V={type:"canvas",format:"png",quality:1},J=["jpeg","webp","png"];function ee(e){var t=this,n=G.call(t),i=x(C(V),C(e)),o="string"==typeof e?e:i.type||"base64",r=i.size||"viewport",a=i.format,s=i.quality,l=i.backgroundColor,u="boolean"==typeof i.circle?i.circle:"circle"===t.options.viewport.type,c=t.elements.viewport.getBoundingClientRect(),h=c.width/c.height;return"viewport"===r?(n.outputWidth=c.width,n.outputHeight=c.height):"object"==typeof r&&(r.width&&r.height?(n.outputWidth=r.width,n.outputHeight=r.height):r.width?(n.outputWidth=r.width,n.outputHeight=r.width/h):r.height&&(n.outputWidth=r.height*h,n.outputHeight=r.height)),-1<J.indexOf(a)&&(n.format="image/"+a,n.quality=s),n.circle=u,n.url=t.data.url,n.backgroundColor=l,new Promise(function(e){switch(o.toLowerCase()){case"rawcanvas":e(U.call(t,n));break;case"canvas":case"base64":e(function(e){return U.call(this,e).toDataURL(e.format,e.quality)}.call(t,n));break;case"blob":(function(e){var n=this;return new Promise(function(t){U.call(n,e).toBlob(function(e){t(e)},e.format,e.quality)})}).call(t,n).then(e);break;default:e(function(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),o=t[2]-t[0],r=t[3]-t[1];return _(n,"croppie-result"),n.appendChild(i),L(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,L(n,{width:o+"px",height:r+"px"}),n}.call(t,n))}})}function te(e){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var t=this,n=t.elements.canvas;t.data.orientation=function(e,t){var n=-1<f.indexOf(e)?f:y,i=n.indexOf(e),o=t/90%n.length;return n[(n.length+i+o%n.length)%n.length]}(t.data.orientation,e),X(n,t.elements.img,t.data.orientation),k.call(t,!0),K.call(t)}if(window.jQuery){var ne=window.jQuery;ne.fn.croppie=function(n){if("string"!=typeof n)return this.each(function(){var e=new ie(this,n);(e.$=ne)(this).data("croppie",e)});var i=Array.prototype.slice.call(arguments,1),e=ne(this).data("croppie");return"get"===n?e.get():"result"===n?e.result.apply(e,i):"bind"===n?e.bind.apply(e,i):this.each(function(){var e=ne(this).data("croppie");if(e){var t=e[n];if(!ne.isFunction(t))throw"Croppie "+n+" method not found";t.apply(e,i),"destroy"===n&&ne(this).removeData("croppie")}})}}function ie(e,t){if(-1<e.className.indexOf("croppie-container"))throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=e,this.options=x(C(ie.defaults),t),"img"===this.element.tagName.toLowerCase()){var n=this.element;_(n,"cr-original-image"),R(n,{"aria-hidden":"true",alt:""});var i=document.createElement("div");this.element.parentNode.appendChild(i),i.appendChild(n),this.element=i,this.options.url=this.options.url||n.src}if(Y.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,$.call(this,o)}}return ie.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},ie.globals={translate:"translate3d"},x(ie.prototype,{bind:function(e,t){return $.call(this,e,t)},get:function(){var e=G.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return ee.call(this,e)},refresh:function(){return function(){q.call(this)}.call(this)},setZoom:function(e){O.call(this,e),E(this.elements.zoomer)},rotate:function(e){te.call(this,e)},destroy:function(){return function(){var e=this;e.element.removeChild(e.elements.boundary),function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}.call(this)}}),ie});