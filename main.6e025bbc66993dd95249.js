(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{G0gG:function(t,n){var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},r=null,a="#ffffff";function c(){var t=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}(0,o.length-1);return e.body.style.backgroundColor=o[t],a=o[t]}e.start.addEventListener("click",(function(){r=setInterval(c,1e3),e.start.disabled=!0})),e.stop.addEventListener("click",(function(){clearInterval(r),e.body.style.backgroundColor=a,e.start.disabled=!1}))},L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO"),o("G0gG")}},[["QfWi",1]]]);
//# sourceMappingURL=main.6e025bbc66993dd95249.js.map