(()=>{var e={983:()=>{var e=document.querySelector(".header"),s=document.querySelector(".burger"),t=e.querySelectorAll("div"),c=e.querySelector("span"),r=e.querySelector(".nav"),o=r.querySelectorAll(".nav__link"),a=e.querySelector(".burger__logo");s&&(s.onclick=function(){document.body.classList.toggle("active"),r.classList.toggle("active"),t.forEach((function(e){return e.classList.toggle("active")})),c.classList.toggle("active"),a.classList.toggle("active__logo")}),o.forEach((function(e){return e.onclick=function(e){document.body.classList.remove("active"),r.classList.remove("active"),t.forEach((function(e){return e.classList.remove("active")})),c.classList.remove("active"),a.classList.remove("active__logo")}})),window.addEventListener("orientationchange",(function(e){document.body.classList.remove("active"),r.classList.remove("active"),t.forEach((function(e){return e.classList.remove("active")})),c.classList.remove("active"),a.classList.remove("active__logo")})),setInterval((function(){window.innerWidth>767&&(document.body.classList.remove("active"),r.classList.remove("active"),t.forEach((function(e){return e.classList.remove("active")})),c.classList.remove("active"),a.classList.remove("active__logo"),count=0)}),30)},984:()=>{document.querySelector(".pets__slider").querySelectorAll(".slider__blocks").forEach((function(e){e.onclick=function(s){console.log(e.querySelector("h3").textContent)}}))},370:e=>{"use strict";e.exports=function(e,s){return s||(s={}),e?(e=String(e.__esModule?e.default:e),s.hash&&(e+=s.hash),s.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},537:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/credit-card.3a00e4c906c70b12b4d3.svg"},285:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-bowls-and-cups.be0c73eb971faa1be248.svg"},292:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-collars-leashes.8fdb049e096f30638d31.svg"},344:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-email.4d46237b054a388e39c9.svg"},997:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-marker.276d503c3bf7f56bcd20.svg"},439:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-medicines.a89eb6c6792df50e360f.svg"},486:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-pet-food.c2ead2bc6dd2b2c8cc67.svg"},359:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-phone.e3136a46968cf9b3d61f.svg"},294:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-shampoos.6b1eb45641a26588d42b.svg"},473:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-sleeping-area.9a62be1208db061a3d9e.svg"},225:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-toys.6457bea4b0eb51413ca6.svg"},119:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-transportation.17bf80f03f09016604a5.svg"},135:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/icon-vitamins.f2d2eedffe286340283d.svg"},12:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/left.5975cfdefb919a403a6f.svg"},329:(e,s,t)=>{"use strict";e.exports=t.p+"assets/icons/right.83bbc9d04f6a02cdb124.svg"},973:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/about-pets.acc74ab91bf329314c68.png"},734:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/donation-dog.ca2d60f239a57b9ccf28.png"},245:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-charly.d0baf95fb99b7b01714c.png"},508:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-jennifer.6476d4a023b2913db140.png"},860:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-katrine-1.aac41b819ccbc31cfbc0.png"},944:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-katrine-2.18c3fbcefe296880b13c.png"},607:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-katrine.048645c27ff843d1d330.png"},554:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-scarlet.b5f6686e4b72690d4632.png"},228:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-timmy.a189bc0a0238b06d97af.png"},781:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/pets-woody.d2c017895a96d650e55d.png"},956:(e,s,t)=>{"use strict";e.exports=t.p+"assets/img/start-screen-puppy.a375034ade9171fbac66.png"}},s={};function t(c){var r=s[c];if(void 0!==r)return r.exports;var o=s[c]={exports:{}};return e[c](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var c in s)t.o(s,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:s[c]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var s=t.g.document;if(!e&&s&&(s.currentScript&&(e=s.currentScript.src),!e)){var c=s.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../"})(),t.b=document.baseURI||self.location.href,(()=>{"use strict";var e=t(370),s=t.n(e),c=new URL(t(956),t.b),r=new URL(t(973),t.b),o=new URL(t(12),t.b),a=new URL(t(944),t.b),n=new URL(t(508),t.b),i=new URL(t(781),t.b),p=new URL(t(329),t.b),b=new URL(t(486),t.b),u=new URL(t(119),t.b),l=new URL(t(225),t.b),d=new URL(t(285),t.b),g=new URL(t(294),t.b),f=new URL(t(135),t.b),h=new URL(t(439),t.b),v=new URL(t(292),t.b),m=new URL(t(473),t.b),L=new URL(t(734),t.b),w=new URL(t(537),t.b),R=new URL(t(344),t.b),U=new URL(t(359),t.b),x=new URL(t(997),t.b);s()(c),s()(r),s()(o,{hash:"#left"}),s()(a),s()(n),s()(i),s()(p,{hash:"#right"}),s()(b,{hash:"#food"}),s()(u,{hash:"#transplont"}),s()(l,{hash:"#toy"}),s()(d,{hash:"#cup"}),s()(g,{hash:"#shampoo"}),s()(f,{hash:"#vit"}),s()(h,{hash:"#med"}),s()(v,{hash:"#colar"}),s()(m,{hash:"#sleep"}),s()(L),s()(w,{hash:"#card"}),s()(R,{hash:"#mail"}),s()(U,{hash:"#phone"}),s()(x,{hash:"#marker"});var y=new URL(t(944),t.b),_=new URL(t(508),t.b),S=new URL(t(781),t.b),k=new URL(t(860),t.b),q=new URL(t(228),t.b),E=new URL(t(245),t.b),j=new URL(t(554),t.b),A=new URL(t(607),t.b),O=new URL(t(344),t.b),P=new URL(t(359),t.b),T=new URL(t(997),t.b);s()(y),s()(_),s()(S),s()(k),s()(q),s()(E),s()(j),s()(A),s()(O,{hash:"#mail"}),s()(P,{hash:"#phone"}),s()(T,{hash:"#marker"});t(983),t(984)})()})();