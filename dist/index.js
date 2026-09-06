"use strict";var q=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var d=q(function(D,p){
var v=5;function O(i,a,n,f,r,s,M){var u,e,o,t;if(i<=0)return r;if(u=f,e=M,n===1&&s===1){if(o=i%v,o>0)for(t=0;t<o;t++)r[e]=a[u]/r[e],u+=n,e+=s;if(i<v)return r;for(t=o;t<i;t+=v)r[e]=a[u]/r[e],r[e+1]=a[u+1]/r[e+1],r[e+2]=a[u+2]/r[e+2],r[e+3]=a[u+3]/r[e+3],r[e+4]=a[u+4]/r[e+4],u+=v,e+=v;return r}for(t=0;t<i;t++)r[e]=a[u]/r[e],u+=n,e+=s;return r}p.exports=O
});var x=q(function(F,j){
var m=require('@stdlib/strided-base-stride2offset/dist'),b=d();function g(i,a,n,f,r){return b(i,a,n,m(i,n),f,r,m(i,r))}j.exports=g
});var _=q(function(G,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),k=d();h(l,"ndarray",k);R.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),c,E=z(w(__dirname,"./native.js"));A(E)?c=B:c=E;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
