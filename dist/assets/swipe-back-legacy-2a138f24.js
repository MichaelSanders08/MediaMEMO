System.register(["./index-legacy-81c63c4d.js","./index3-legacy-d21a0207.js"],(function(t,e){"use strict";var n,r,i;return{setters:[function(t){n=t.J,r=t.K},function(t){i=t.createGesture}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
t("createSwipeBackGesture",(function(t,e,u,a,c){var o=t.ownerDocument.defaultView,s=n(t),f=function(t){return s?-t.deltaX:t.deltaX};return i({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:function(r){return s=n(t),function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(r)&&e()},onStart:u,onMove:function(t){var e=f(t)/o.innerWidth;a(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,i=e/n,u=function(t){return s?-t.velocityX:t.velocityX}(t),a=u>=0&&(u>.2||e>n/2),d=(a?1-i:i)*n,l=0;if(d>5){var v=d/Math.abs(u);l=Math.min(v,540)}c(a,i<=0?.01:r(0,i,.9999),l)}})}))}}}));
