(()=>{var e={983:()=>{var e=document.querySelector(".header"),t=document.querySelector(".burger"),s=document.querySelector(".header--our"),n=e.querySelectorAll("div"),r=e.querySelector("span"),i=e.querySelector(".nav"),o=i.querySelectorAll(".nav__link"),a=e.querySelector(".burger__logo"),c=document.querySelector(".shadow");function l(){document.body.classList.remove("active"),i.classList.remove("active"),n.forEach((function(e){return e.classList.remove("active")})),r.classList.remove("active"),a.classList.remove("active__logo"),c.classList.remove("active"),o.forEach((function(e){e.querySelector("#text-our")&&(e.querySelector("a").classList.add("link--our"),e.querySelector("a").classList.remove("link"),e.querySelector(".active--color")&&(e.querySelector("a").classList.add("active--link-our"),e.querySelector("a").classList.remove("active--link")))})),s&&(s.classList.remove("active"),a.classList.add("logo--pets"))}t&&(t.onclick=function(){document.body.classList.toggle("active"),i.classList.toggle("active"),n.forEach((function(e){return e.classList.toggle("active")})),r.classList.toggle("active"),a.classList.toggle("active__logo"),c.classList.toggle("active"),s&&s.classList.toggle("active"),a.classList.contains("logo--pets")?a.classList.remove("logo--pets"):s&&a.classList.add("logo--pets"),o.forEach((function(e){e.querySelector("#text-our")&&(e.querySelector("a").classList.toggle("link--our"),e.querySelector("a").classList.toggle("link")),e.querySelector(".active--color")&&(e.querySelector("a").classList.toggle("active--link-our"),e.querySelector("a").classList.toggle("active--link"))}))}),o.forEach((function(e){return e.onclick=function(e){l()}})),window.addEventListener("orientationchange",l),window.addEventListener("resize",(function(e){window.innerWidth>767&&l()})),c.addEventListener("click",l)},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},537:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/credit-card.svg"},285:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-bowls-and-cups.svg"},292:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-collars-leashes.svg"},344:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-email.svg"},997:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-marker.svg"},439:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-medicines.svg"},486:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-pet-food.svg"},359:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-phone.svg"},294:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-shampoos.svg"},473:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-sleeping-area.svg"},225:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-toys.svg"},119:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-transportation.svg"},135:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/icon-vitamins.svg"},12:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/left.svg"},329:(e,t,s)=>{"use strict";e.exports=s.p+"assets/icons/right.svg"},973:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/about-pets.png"},734:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/donation-dog.png"},245:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-charly.png"},107:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-freddie.png"},508:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-jennifer.png"},607:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-katrine.png"},554:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-scarlet.png"},34:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-sophia.png"},228:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-timmy.png"},781:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/pets-woody.png"},956:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/start-screen-puppy.png"}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.m=e,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../../"})(),s.b=document.baseURI||self.location.href,(()=>{"use strict";var e=s(370),t=s.n(e),n=new URL(s(956),s.b),r=new URL(s(973),s.b),i=new URL(s(12),s.b),o=new URL(s(607),s.b),a=new URL(s(508),s.b),c=new URL(s(781),s.b),l=new URL(s(245),s.b),u=new URL(s(107),s.b),d=new URL(s(554),s.b),p=new URL(s(34),s.b),h=new URL(s(228),s.b),m=new URL(s(329),s.b),f=new URL(s(486),s.b),g=new URL(s(119),s.b),v=new URL(s(225),s.b),y=new URL(s(285),s.b),b=new URL(s(294),s.b),L=new URL(s(135),s.b),w=new URL(s(439),s.b),S=new URL(s(292),s.b),_=new URL(s(473),s.b),k=new URL(s(734),s.b),q=new URL(s(537),s.b),E=new URL(s(344),s.b),x=new URL(s(359),s.b),R=new URL(s(997),s.b);t()(n),t()(r),t()(i,{hash:"#left"}),t()(o),t()(a),t()(c),t()(l),t()(u),t()(d),t()(p),t()(h),t()(m,{hash:"#right"}),t()(f,{hash:"#food"}),t()(g,{hash:"#transplont"}),t()(v,{hash:"#toy"}),t()(y,{hash:"#cup"}),t()(b,{hash:"#shampoo"}),t()(L,{hash:"#vit"}),t()(w,{hash:"#med"}),t()(S,{hash:"#colar"}),t()(_,{hash:"#sleep"}),t()(k),t()(q,{hash:"#card"}),t()(E,{hash:"#mail"}),t()(x,{hash:"#phone"}),t()(R,{hash:"#marker"});var U=new URL(s(607),s.b),A=new URL(s(508),s.b),C=new URL(s(781),s.b),T=new URL(s(34),s.b),M=new URL(s(228),s.b),H=new URL(s(245),s.b),j=new URL(s(554),s.b),I=new URL(s(107),s.b),N=new URL(s(344),s.b),O=new URL(s(359),s.b),W=new URL(s(997),s.b);t()(U),t()(A),t()(C),t()(T),t()(M),t()(H),t()(j),t()(I),t()(N,{hash:"#mail"}),t()(O,{hash:"#phone"}),t()(W,{hash:"#marker"});s(983);const D=JSON.parse('[{"name":"Jennifer","img":"./assets/img/pets-jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"./assets/img/pets-sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"./assets/img/pets-woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus"," distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlet","img":"./assets/img/pets-scarlet.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"./assets/img/pets-katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"./assets/img/pets-timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"./assets/img/pets-freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"./assets/img/pets-charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica ","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]');var J=document.querySelector(".pets__slider"),$=document.querySelector(".slide__pagination"),B=document.querySelector(".popup--pets"),F=document.querySelector(".slider__carousel"),z=document.querySelector(".popup"),P=["img","name","type","breed","description","age","inoculations","diseases","parasites"];function K(){J?F.querySelectorAll(".slider__block").forEach((function(e){e.addEventListener("click",(function(t){var s=e.id;z.classList.add("active"),document.body.style.overflow="hidden",G(s)}))})):$&&$.querySelectorAll(".pagination__block").forEach((function(e){e.addEventListener("click",(function(t){var s=e.id;z.classList.add("active"),document.body.style.overflow="hidden",G(s)}))}))}var G=function(e){var t=e.slice(0,1).toUpperCase()+e.slice(1);D.forEach((function(e){t===e.name&&P.forEach((function(t){"img"===t?z.querySelector("#".concat(t)).innerHTML=B?'<img src="../'.concat(e[t],'">'):'<img src="'.concat(e[t],'">'):z.querySelector("#".concat(t)).innerText=e[t]}))}))},Q=function(){z.classList.remove("active"),document.body.style.overflow=""};function V(e,t){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return X(e,t)}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==s.return||s.return()}finally{if(a)throw i}}}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}z.addEventListener("click",(function(e){e.target.classList.forEach((function(e){"popup"===e&&Q()}))})),K(),z.querySelector(".popup__close").addEventListener("click",Q);var Y=document.querySelector(".pets__slider"),Z=document.querySelectorAll(".item"),ee=document.querySelector(".btn__left"),te=document.querySelector(".btn__right"),se=document.querySelector("#slider__carousel"),ne=document.querySelector("#item-left"),re=document.querySelector("#item-right"),ie=["sophia","timmy","scarlet","freddie","charly","woody","jennifer","katrine"],oe=[],ae=[],ce=0,le=0,ue=0,de=function(e){return Z.forEach((function(t){t.querySelectorAll(".slider__block").forEach((function(t,s){s>=e&&t.remove("div")}))}))},pe=function(){var e=window.innerWidth;e>1279&&(ue=3),e<=1279&&e>767&&de(ue=2),e<=767&&de(ue=1)};setInterval(pe,100);var he=function(){le===ue&&(le=0,ae=oe.slice(),oe=[]);for(var e=document.createElement("div");oe.length<ue;)ce=Math.floor(8*Math.random()),ae.includes(ie[ce])||oe.includes(ie[ce])||oe.push(ie[ce]);var t,s=V(D);try{for(s.s();!(t=s.n()).done;){var n=t.value,r=document.createElement("div"),i=document.createElement("img"),o=document.createElement("div"),a=document.createElement("button"),c=document.createElement("h3");if(le<ue&&(e.classList.add("slider__block"),oe[le]===n.name.toLowerCase()))return e.classList.add("slider__block"),a.classList.add("btn","btn__white"),a.innerText="Learn more",o.classList.add("slider__title"),c.classList.add("our__pets--slider"),i.src=n.img,r.classList.add("slider__img"),c.innerText=n.name,o.appendChild(c),r.appendChild(i),e.appendChild(r),e.appendChild(o),e.appendChild(a),e.id="".concat(n.name.toLowerCase()),le++,e}}catch(e){s.e(e)}finally{s.f()}};if(Y){var me=function e(){se.classList.add("transition-left"),te.removeEventListener("click",fe),ee.removeEventListener("click",e)},fe=function e(){se.classList.add("transition-right"),ee.removeEventListener("click",me),te.removeEventListener("click",e)};ee.addEventListener("click",me),te.addEventListener("click",fe),se.addEventListener("animationend",(function(e){var t;"move-left"===e.animationName?(se.classList.remove("transition-left"),t=ne,document.querySelector("#item-active").innerHTML=ne.innerHTML):(se.classList.remove("transition-right"),t=re,document.querySelector("#item-active").innerHTML=re.innerHTML),ee.addEventListener("click",me),te.addEventListener("click",fe),t.innerHTML="",pe();for(var s=0;s<ue;s++){var n=he();t.append(n),K()}}))}function ge(e,t){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return ve(e,t)}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==s.return||s.return()}finally{if(a)throw i}}}}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}document.querySelector(".slide__pagination");var ye=document.querySelector(".btns__slider-pets"),be=document.querySelectorAll(".pagination__block"),Le=ye.querySelectorAll(".btn__our-pets"),we=document.querySelector(".num__page-slider"),Se=ye.querySelector(".pets--right"),_e=ye.querySelector(".pets--all__right"),ke=document.querySelector(".pets--left"),qe=document.querySelector(".pets--left__all"),Ee=[],xe=[];function Re(e){var t=[];be.forEach((function(s,n){var r,i=ge(D);try{for(i.s();!(r=i.n()).done;){var o=r.value;xe[e-1][n]!==o.name||t.includes(xe[e-1][n])||(t.push(xe[e-1][n]),s.querySelector("img").src=".".concat(o.img),s.id=o.name.toLowerCase())}}catch(e){i.e(e)}finally{i.f()}}))}be.forEach((function(e){return Ee.push(e.querySelector(".our__pets--slider").textContent)})),function(){for(var e=0;e<6;e++){for(var t=[];t.length<8;){var s=Math.floor(8*Math.random());t.includes(Ee[s])||t.push(Ee[s])}xe.push(t)}var n;n=xe.length,ye.addEventListener("click",(function(e){if("btn__our-pets pets--right"===e.target.className){var t=+we.textContent+1;we.innerHTML=t,Le.forEach((function(e){return e.classList.remove("inactive")})),Re(t),1!=+we.textContent&&+we.textContent!==n&&(Le.forEach((function(e){return e.classList.remove("inactive")})),Le.forEach((function(e){return e.removeAttribute("disabled")})))}if("btn__our-pets pets--left"===e.target.className){var s=+we.textContent-1;we.innerHTML=s,Le.forEach((function(e){return e.classList.remove("inactive")})),Re(s),1!=+we.textContent&&6!=+we.textContent&&Le.forEach((function(e){return e.classList.remove("inactive")}))}"btn__our-pets pets--all__right"!==e.target.className&&"btn__our-pets pets--left__all"!==e.target.className||(Le.forEach((function(e){return e.classList.remove("inactive")})),we.innerHTML=6,Re(xe.length)),"btn__our-pets pets--left__all"===e.target.className&&(Le.forEach((function(e){return e.classList.remove("inactive")})),we.innerHTML=1,Re(1)),6==+we.textContent&&(Se.classList.add("inactive"),Se.setAttribute("disabled","disabled"),_e.classList.add("inactive"),_e.setAttribute("disabled","disabled"),ke.classList.remove("inactive"),ke.removeAttribute("disabled"),qe.classList.remove("inactive"),qe.removeAttribute("disabled")),1==+we.textContent&&(ke.classList.add("inactive"),ke.setAttribute("disabled","disabled"),qe.classList.add("inactive"),qe.setAttribute("disabled","disabled"),Se.classList.remove("inactive"),Se.removeAttribute("disabled"),_e.classList.remove("inactive"),_e.removeAttribute("disabled"))}))}(),Re(1),console.log("Не успел, ставьте оценку как есть")})()})();