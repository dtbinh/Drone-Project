(function(){define(["jquery","modules/constants/page_load"],function(e,t){var n=/checked\s*(?:[^=]|=\s*.checked.)/i;return e.fn.domManip=function(r,o,i){var a=function(t){return t.type=(null!==e.find.attr(t,"type"))+"/"+t.type,t},c=function(t,n){var r,o,i=0,a="undefined",l=typeof t.getElementsByTagName!==a?t.getElementsByTagName(n||"*"):typeof t.querySelectorAll!==a?t.querySelectorAll(n||"*"):void 0;if(!l)for(l=[],r=t.childNodes||t;null!=(o=r[i]);i++)!n||e.nodeName(o,n)?l.push(o):e.merge(l,c(o,n));return void 0===n||n&&e.nodeName(t,n)?e.merge([t],l):l},l=function(e){var t=/^true\/(.*)/.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e};r=[].concat.apply([],r);var s,u,d,f,p,h,m=0,g=this.length,y=this,C=g-1,v=r[0],N=e.isFunction(v);if(N||!(1>=g||"string"!=typeof v||e.support.checkClone)&&n.test(v))return this.each(function(e){var t=y.eq(e);N&&(r[0]=v.call(this,e,t.html())),t.domManip(r,o,i)});if(g&&(h=e.buildFragment(r,this[0].ownerDocument,!1,!i&&this),s=h.firstChild,1===h.childNodes.length&&(h=s),s)){for(f=e.map(c(h,"script"),a),d=f.length;g>m;m++)u=h,m!==C&&(u=e.clone(u,!0,!0),d&&e.merge(f,c(u,"script"))),o.call(this[m],u,m);if(d)for(p=f[f.length-1].ownerDocument,e.map(f,l),m=0;d>m;m++)u=f[m],null==t.CSP_SCRIPT_NONCE||t.CSP_SCRIPT_NONCE===u.getAttribute("nonce")?/^$|\/(?:java|ecma)script/i.test(u.type||"")&&!e._data(u,"globalEval")&&e.contains(p,u)&&(u.src?e._evalUrl(u.src):e.globalEval((u.text||u.textContent||u.innerHTML||"").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,""))):console.error("Refused to execute script from node "+u+" because PageLoadConstants.CSP_SCRIPT_NONCE is defined and the nonce doesn't match.");h=s=null}return this},e.ajaxSettings.converters["text script"]=!0,e.noConflict()})}).call(this);
//# sourceMappingURL=jquery-security-patch.min.js-vflFHrkMi.map