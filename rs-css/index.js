(()=>{"use strict";var e={54:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(81),a=t.n(l),o=t(645),r=t.n(o)()(a());r.push([e.id,".editor-element {\n    width: 50%;\n    height: 100%;\n}\n\n.editor-title {\n    height: 5%;\n    padding: 9.5px 19px;\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: 2px;\n    color: rgb(200, 200, 200);\n}\n\n.editor-block {\n    height: 91%;\n    display: flex;\n}\n\n.column-numbers {\n    width: 15px;\n    padding: 5px 10px;\n    line-height: 150%;\n    text-align: right;\n    background-color: rgb(200, 200, 200);\n}\n\n.input-wrapper {\n    width: calc(100% - 35px);\n    padding: 5px 10px;\n    line-height: 150%;\n    background-color: #efefef;\n}\n\n.input {\n    width: 100%;\n    background: inherit;\n    border: none;\n    letter-spacing: 2px;\n    outline: none;\n    animation: blink 1s linear infinite;\n}\n\n@keyframes blink {\n    0%, 100% {background-color: #efefef;}\n    50% {background-color: rgb(151, 252, 105);}\n}\n\n.input:focus::-webkit-input-placeholder {\n    text-indent: 700px;\n    transition: text-indent 0.6s ease;\n}\n\n.answer-block {\n    display:flex;\n    justify-content: space-between;\n    letter-spacing: 1px;\n    color: #AAA;\n    margin: 24px 0px;\n}\n\n.answer-button {\n    font-size: 12px;\n    letter-spacing: 2px;\n    color: rgb(75, 75, 75);\n    background-color: rgb(200, 200, 200);\n    border: solid #999;\n    border-width: 1px 1px 5px 1px;\n    cursor: pointer;\n}\n\n.answer-button:active,\n.help-button:active {\n    border-width: 1px 1px 2px 1px;\n    transform: translateY(3px);\n}\n\n.help-button {\n    display: block;\n    width: 50%;\n    font-size: 16px;\n    letter-spacing: 2px;\n    margin: auto;\n    color: rgb(75, 75, 75);\n    background-color: rgb(200, 200, 200);\n    border: solid #999;\n    border-width: 1px 1px 5px 1px;\n    cursor: pointer;\n}\n\n.correct {\n    transform: translateY(-300px);\n    transition: 0.3s;\n}\n\n.shake {\n    animation: shake 0.1s 2;\n}\n\n@keyframes shake {\n    0% {transform:translateX(0px)}\n    20% {transform:translateX(5px)}\n    40% {transform:translateX(0px)}\n    60% {transform:translateX(-5px)}\n    80% {transform:translateX(0px)}\n    100% {transform:translateX(5px)}\n}\n\n.win {\n    color: cyan;\n    font-size: 60px;\n    font-weight: bold;\n    animation: turning 2s linear infinite;\n}\n\n@keyframes turning {\n    0% {transform: rotateX(0deg);}\n    50% {transform: rotateX(180deg);}\n    100% {transform: rotateX(360deg);}\n}",""]);const s=r},561:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(81),a=t.n(l),o=t(645),r=t.n(o)()(a());r.push([e.id,".table {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n    width: 80%;\n    height: 100%;\n    background-color: #dd992d;\n    margin: auto;\n    border: 5px solid rgb(80, 40, 10);\n    border-radius: 10px;\n    transform: rotateX(20deg);\n    box-shadow: 0px 20px 10px rgba(0,0,0,.2);\n}\n\n.html-code {\n    position: absolute;\n    top: -65px;\n    left: 50%;\n    background: white;\n    padding: 6px 10px 8px 10px;\n    z-index: 100;\n    font-size: 18px;\n    color: #666;\n    display: none;\n    transform: rotateX(20deg);\n    white-space: nowrap;\n  }\n\n  .visible {\n    display: block;\n  }",""]);const s=r},222:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(81),a=t.n(l),o=t(645),r=t.n(o)()(a());r.push([e.id,".markup {\n    display: flex;\n    flex-direction: column;\n    width: calc(100% - 35px);\n    padding: 5px 10px;\n    line-height: 150%;\n    background-color: rgb(75, 75, 75);\n    color: rgb(150, 150, 150);\n}\n\n.markup plate,\n.markup bento, \n.markup apple, \n.markup orange, \n.markup pickle {\n    padding-left: 20px;\n    cursor: default;\n}\n\n.markup plate, \n.markup bento {\n    display: flex;\n    flex-direction: column;\n}\n\n.markup apple {\n    color: rgba(255, 80, 80, 0.7);\n}\n\n.markup .apple-hover {\n    color: rgb(255, 80, 80);;\n}\n\n.markup orange {\n    color: rgba(255, 172, 0, 0.7);\n}\n\n.markup .orange-hover {\n    color: rgb(255, 172, 0);\n}\n\n.markup pickle {\n    color: rgba(43, 255, 0, 0.7);\n}\n\n.markup .pickle-hover {\n    color: rgba(43, 255, 0);\n}\n\n.markup bento {\n    color: rgba(255, 150, 120, 0.7);\n}\n\n.markup .bento-hover {\n    color: rgb(255, 150, 120);\n}\n\n.markup plate {\n    color: rgba(250, 250, 250, 0.7);\n}\n\n.markup .plate-hover {\n    color: rgb(250, 250, 250);\n}",""]);const s=r},451:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(81),a=t.n(l),o=t(645),r=t.n(o)()(a());r.push([e.id,"section plate {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    border-radius: 80px;\n    border: 10px solid white;\n    background-color: rgb(240, 240, 240);\n    box-shadow: 0px 10px 5px rgba(0,0,0,.2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\nsection bento {\n    position: relative;\n    width: 90px;\n    height: 90px;\n    background-color: brown;\n    border: 3px solid rgb(78, 20, 20);\n    box-shadow: 0px 10px 5px rgba(0,0,0,.2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection apple {\n    position: relative;\n    width: 52px;\n    height: 48px;\n    border-color: rgb(194, 0, 0, 0.84);\n    border-style: solid;\n    border-width: 2px 4px 10px 4px;\n    border-radius: 60px;\n    background-color: red;\n    box-shadow: 0px 6px 3px rgba(0,0,0,.2);\n}\n\nsection orange {\n    position: relative;\n    width: 52px;\n    height: 48px;\n    border-color: rgba(194, 87, 0, 0.84);\n    border-style: solid;\n    border-width: 2px 4px 10px 4px;\n    border-radius: 60px;\n    background-color: rgb(255, 115, 0);\n    box-shadow: 0px 6px 3px rgba(0,0,0,.2);\n}\n\nsection pickle {\n    position: relative;\n    width: 16px;\n    height: 50px;\n    border-color: rgb(0, 100, 0, 0.84);\n    border-style: solid;\n    border-width: 2px 2px 8px 2px;\n    border-radius: 20px;\n    background-color: green;\n    box-shadow: 0px 6px 3px rgba(0,0,0,.2);\n}\n\n#nice {\n    border: solid 10px rgb(132, 253, 10, 0.8);\n}\n\n.small {\n    width: 26px;\n    height: 24px;\n    border-width: 1px 2px 5px 2px;\n}\n\n.bounce {\n    animation: bouncing 0.4s cubic-bezier(0.1,0.25,0.1,1) infinite alternate;\n}\n\n@keyframes bouncing {\n    0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.8); }\n    100% { bottom: 10px; box-shadow: 0 10px 10px rgba(0,0,0,0.4); }\n}\n\n.hovered {\n    outline: 5px solid rgba(0, 255, 255, 0.6);\n}\n\n@media (max-width: 630px) {\n    section plate {\n        width: 60px;\n        height: 60px;\n    }\n\n    section bento {\n        width: 70px;\n        height: 70px;\n    }\n\n    section apple, \n    section orange {\n        width: 38px;\n        height: 35px;\n    }\n\n    section pickle {\n        width: 14px;\n        height: 40px;\n    }\n}\n",""]);const s=r},767:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(81),a=t.n(l),o=t(645),r=t.n(o)()(a());r.push([e.id,"body {\n    margin: 0;\n    background-color:rgb(100, 100, 100);\n    display: flex;\n}\n\n.gameWrapper {\n    width: 85%;\n    height: 100vh;\n    margin: auto;\n}\n\n.levelsWrapper {\n    width: 15%;\n    height: 100vh;\n    background-color: rgb(50, 50, 50);\n}\n\n.level-title {\n    font-size: 20px;\n    letter-spacing: 2px;\n    padding-left: 10%;\n    margin: 1vh auto;\n    color: rgb(150, 150, 150);\n}\n\n.level {\n    display: flex;\n    justify-content: space-between;\n    font-size: 20px;\n    line-height: 150%;\n    padding: 0 10%;\n    color: rgb(150, 150, 150);\n    cursor: pointer;\n}\n\n.reset-button {\n    display: block;\n    width: 80%;\n    font-size: 14px;\n    padding: 5px 0;\n    margin: 20px auto;\n    color: rgb(75, 75, 75);\n    background-color: rgb(200, 200, 200);\n    cursor: pointer;\n}\n\n.current {\n    background-color:rgb(100, 100, 100);\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n}\n\n.task-name {\n    font-size: 24px;\n    margin: 1vh auto;\n    color: rgb(150, 150, 150);\n}\n\n.game-table {\n    width: 90%;\n    height: 20vh;\n    margin: auto;\n    perspective: 800px;\n    transform-style: flat;\n}\n\n.editor {\n    display: flex;\n    width: 90%;\n    height: 61vh;\n    margin: 3vh auto;\n    border: 5px solid rgb(50, 50, 50);\n    border-radius: 5px;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5%;\n}\n\n.year {\n    font-size: 16px;\n    color: rgb(150, 150, 150);\n}\n\n.github {\n    color: rgb(150, 150, 150);\n    font-weight: 700;\n    text-decoration: none;\n    transition: 0.3s;\n}\n\n.github:hover {\n    color:rgb(200, 200, 200);\n}\n\n.rs-school-img {\n    width: 50px;\n}\n\n@media (max-width: 630px) {\n    .game-table {\n        height: 15vh;\n    }\n}",""]);const s=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",l=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),l&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),l&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,l,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(l)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);l&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},411:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var l=t(379),a=t.n(l),o=t(795),r=t.n(o),s=t(569),i=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),b=t(54),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),a()(b.Z,g);const x=b.Z&&b.Z.locals?b.Z.locals:void 0},849:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var l=t(379),a=t.n(l),o=t(795),r=t.n(o),s=t(569),i=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),b=t(561),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),a()(b.Z,g);const x=b.Z&&b.Z.locals?b.Z.locals:void 0},910:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var l=t(379),a=t.n(l),o=t(795),r=t.n(o),s=t(569),i=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),b=t(222),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),a()(b.Z,g);const x=b.Z&&b.Z.locals?b.Z.locals:void 0},942:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var l=t(379),a=t.n(l),o=t(795),r=t.n(o),s=t(569),i=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),b=t(451),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),a()(b.Z,g);const x=b.Z&&b.Z.locals?b.Z.locals:void 0},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var l=t(379),a=t.n(l),o=t(795),r=t.n(o),s=t(569),i=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),b=t(767),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=m(),a()(b.Z,g);const x=b.Z&&b.Z.locals?b.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,l=0;l<n.length;l++)if(n[l].identifier===e){t=l;break}return t}function l(e,l){for(var o={},r=[],s=0;s<e.length;s++){var i=e[s],c=l.base?i[0]+l.base:i[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var m=t(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=a(u,l);l.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=l(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var s=t(o[r]);n[s].references--}for(var i=l(e,a),c=0;c<o.length;c++){var d=t(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=i}}},569:e=>{var n={};e.exports=function(e,t){var l=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var l="";t.supports&&(l+="@supports (".concat(t.supports,") {")),t.media&&(l+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(l+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),l+=t.css,a&&(l+="}"),t.media&&(l+="}"),t.supports&&(l+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(l,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},623:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.drawCssEditor=n.typeAnswer=n.checkAnswer=void 0,n.checkAnswer=function(e,n,t,l,a,o,r){if(l[a].answer.includes(e.value)){if(document.querySelectorAll(".bounce").forEach((e=>{e.classList.add("correct")})),!t.lastElementChild){const e=document.createElement("span");e.innerHTML="&#10004",e.style.color="rgb(151, 252, 105)",t.appendChild(e),r[a]="done"}setTimeout((()=>{if(a+1<l.length)o(a+1);else{const e=document.querySelector(".table");e.innerHTML="",e.textContent="great job!",e.classList.add("win")}}),600)}else n.classList.add("shake"),setTimeout((()=>{n.classList.remove("shake")}),200)},n.typeAnswer=function(e,n,t,l,a){let o=0;const r=n[t].answer[0],s=e;if(s.focus(),function e(){o<r.length&&(s.value+=r.charAt(o),o+=1,setTimeout(e,100))}(),!l.lastElementChild){const e=document.createElement("span");e.innerHTML="&#10004",e.style.color="rgb(150, 150, 150)",l.appendChild(e),a[t]="done with help"}},n.drawCssEditor=function(e){const n=document.createElement("div");n.classList.add("editor-element"),e.appendChild(n);const t=document.createElement("div");t.classList.add("editor-title"),t.textContent="CSS Editor",n.appendChild(t);const l=document.createElement("div");l.classList.add("editor-block"),n.appendChild(l);const a=document.createElement("div");a.classList.add("column-numbers"),a.textContent="1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17",l.appendChild(a);const o=document.createElement("div");o.classList.add("input-wrapper"),l.appendChild(o);const r=document.createElement("input");r.classList.add("input"),r.type="text",r.placeholder="[Type in a CSS selector]",o.appendChild(r);const s=document.createElement("div");s.classList.add("answer-block"),s.textContent="Press enter to answer or click button on the right",o.appendChild(s);const i=document.createElement("button");i.classList.add("answer-button"),i.textContent="Enter",s.appendChild(i);const c=document.createElement("button");c.classList.add("help-button"),c.textContent="Help",o.appendChild(c)}},431:(e,n)=>{function t(e){const n=Array.from(e),t=[];return n.forEach((e=>{t.push(e),e.children.length>0&&!e.children[0].classList.contains("html-code")&&t.push(e.children[0])})),t}Object.defineProperty(n,"__esModule",{value:!0}),n.drawTable=n.getFlatArray=void 0,n.getFlatArray=t,n.drawTable=function(e,n,l){const a=document.createElement("section");if(a.classList.add("table"),a.innerHTML=n[l].markup,e.appendChild(a),document.querySelector(".markup")){const e=t(document.querySelector(".markup").children),n=t(a.children);n.forEach((e=>{const n=document.createElement("div");n.classList.add("html-code"),n.textContent=`<${e.localName}></${e.localName}>`,e.classList.contains("small")&&(n.textContent=`<${e.localName} class="small"></${e.localName}>`),"nice"===e.id&&(n.textContent=`<${e.localName} id="nice"></${e.localName}>`),e.appendChild(n)})),a.addEventListener("mouseover",(t=>{const l=t.target,a=n.indexOf(l);(l.closest("plate")||l.closest("bento")||l.closest("apple")||l.closest("orange")||l.closest("pickle")||l.closest(".bounce")||l.closest(".small")||l.closest("#nice"))&&(l.classList.add("hovered"),e[a].classList.add(`${e[a].localName}-hover`),l.lastElementChild&&l.lastElementChild.classList.contains("html-code")&&l.lastElementChild.classList.add("visible"))})),a.addEventListener("mouseout",(t=>{const l=t.target,a=n.indexOf(l);(l.closest("plate")||l.closest("bento")||l.closest("apple")||l.closest("orange")||l.closest("pickle")||l.closest(".bounce")||l.closest(".small")||l.closest("#nice"))&&(l.classList.remove("hovered"),e[a].classList.remove(`${e[a].localName}-hover`),l.lastElementChild&&l.lastElementChild.classList.contains("html-code")&&l.lastElementChild.classList.remove("visible"))}))}}},53:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.markupHoverAction=n.drawHtmlViewer=void 0;const l=t(431);n.drawHtmlViewer=function(e,n,t){const l=document.createElement("div");l.classList.add("editor-element"),e.appendChild(l);const a=document.createElement("div");a.classList.add("editor-title"),a.textContent="HTML Viewer",l.appendChild(a);const o=document.createElement("div");o.classList.add("editor-block"),l.appendChild(o);const r=document.createElement("div");r.classList.add("column-numbers"),r.textContent="1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17",o.appendChild(r);const s=document.createElement("div");function i(e,l,a){if("N"===n[t].elements[l-1][0]){s.children[l-a].textContent=`<${n[t].elements[l-1].slice(1)} id="nice">`,s.children[l-a].appendChild(e);const o=document.createElement("span");o.textContent=`</${n[t].elements[l-1].slice(1)}>`,s.children[l-a].appendChild(o)}else{s.children[l-a].textContent=`<${n[t].elements[l-1]}>`,s.children[l-a].appendChild(e);const o=document.createElement("span");o.textContent=`</${n[t].elements[l-1]}>`,s.children[l-a].appendChild(o)}}s.classList.add("markup"),s.textContent='<section class="table">';for(let e=0,l=1;e<n[t].elements.length;e+=1){if(n[t].elements[e]){if(0===e||e%2==0)if("N"===n[t].elements[e][0]){const l=document.createElement(`${n[t].elements[e].slice(1)}`);l.textContent=`<${n[t].elements[e].slice(1)} id="nice"></${n[t].elements[e].slice(1)}>`,s.appendChild(l)}else{const l=document.createElement(`${n[t].elements[e]}`);l.textContent=`<${n[t].elements[e]}></${n[t].elements[e]}>`,s.appendChild(l)}if(1===e||e%2==1)if("S"===n[t].elements[e][0]){const a=document.createElement(`${n[t].elements[e].slice(1)}`);a.textContent=`<${n[t].elements[e].slice(1)} class="small"></${n[t].elements[e].slice(1)}>`,s.children[e-l]?i(a,e,l):s.appendChild(a)}else{const a=document.createElement(`${n[t].elements[e]}`);a.textContent=`<${n[t].elements[e]}></${n[t].elements[e]}>`,s.children[e-l]?i(a,e,l):s.appendChild(a)}}1!==e&&e%2!=1||(l+=1)}s.append("</section>"),o.appendChild(s)},n.markupHoverAction=function(){const e=document.querySelector(".markup"),n=document.querySelector(".table"),t=(0,l.getFlatArray)(n.children),a=(0,l.getFlatArray)(e.children);e.addEventListener("mouseover",(e=>{var n,l;const o=e.target;let r=a.indexOf(o);"SPAN"===o.tagName&&o.parentElement&&(r=a.indexOf(o.parentElement),t[r].classList.add("hovered"),t[r].lastElementChild&&(null===(n=t[r].lastElementChild)||void 0===n||n.classList.add("visible")),o.parentElement.classList.add(`${o.parentElement.localName}-hover`)),(o.closest("plate")||o.closest("bento")||o.closest("apple")||o.closest("orange")||o.closest("pickle")||o.closest(".small")||o.closest("#nice"))&&"SPAN"!==o.tagName&&(o.classList.add(`${o.localName}-hover`),t[r].classList.add("hovered"),t[r].lastElementChild&&(null===(l=t[r].lastElementChild)||void 0===l||l.classList.add("visible")))})),e.addEventListener("mouseout",(e=>{var n,l;const o=e.target;let r=a.indexOf(o);"SPAN"===o.tagName&&o.parentElement&&(r=a.indexOf(o.parentElement),t[r].classList.remove("hovered"),t[r].lastElementChild&&(null===(n=t[r].lastElementChild)||void 0===n||n.classList.remove("visible")),o.parentElement.classList.remove(`${o.parentElement.localName}-hover`)),(o.closest("plate")||o.closest("bento")||o.closest("apple")||o.closest("orange")||o.closest("pickle")||o.closest(".small")||o.closest("#nice"))&&"SPAN"!==o.tagName&&(o.classList.remove(`${o.localName}-hover`),t[r].classList.remove("hovered"),t[r].lastElementChild&&(null===(l=t[r].lastElementChild)||void 0===l||l.classList.remove("visible")))}))}},861:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.drawLevels=n.levels=void 0,n.levels=[{level:1,answer:["plate","*",":nth-child(1), :nth-child(2)"],elements:["plate","","plate",""],markup:'\n        <plate class="bounce"></plate>\n        <plate class="bounce"></plate>'},{level:2,answer:["bento",":nth-child(2)",":nth-child(even)"],elements:["plate","","bento","","plate",""],markup:'\n        <plate></plate>\n        <bento class="bounce"></bento>\n        <plate></plate>'},{level:3,answer:["plate pickle","plate *","plate > pickle",":only-child"],elements:["","pickle","plate","pickle"],markup:'\n        <pickle></pickle>\n        <plate>\n        <pickle class="bounce"></pickle>\n        </plate>'},{level:4,answer:[".small","orange.small"],elements:["","Sorange","bento","","plate","orange"],markup:'\n        <orange class="small bounce"></orange>\n        <bento></bento>\n        <plate>\n        <orange></orange>\n        </plate>'},{level:5,answer:[".small","apple.small"],elements:["plate","apple","","Sapple","","apple","plate","Sapple"],markup:'\n        <plate>\n        <apple></apple>\n        </plate>\n        <apple class="small bounce"></apple>\n        <apple></apple>\n        <plate>\n        <apple class="small bounce"></apple>\n        </plate>'},{level:6,answer:["orange.small","bento orange, plate orange","bento > orange, plate > orange","bento .small, plate .small","bento > .small, plate > .small",":only-child"],elements:["bento","Sorange","","Sapple","plate","Sorange"],markup:'\n        <bento>\n        <orange class="small bounce"></orange>\n        </bento>\n        <apple class="small"></apple>\n        <plate>\n        <orange class="small bounce"></orange>\n        </plate>'},{level:7,answer:["#nice","plate:empty"],elements:["plate","apple","Nplate",""],markup:'\n        <plate>\n        <apple></apple>\n        </plate>\n        <plate class="bounce" id="nice"></plate>'},{level:8,answer:["#nice pickle","#nice > pickle"],elements:["bento","pickle","Nplate","pickle","plate","pickle"],markup:'\n        <bento>\n        <pickle></pickle>\n        </bento>\n        <plate id="nice">\n        <pickle class="bounce"></pickle>\n        </plate>\n        <plate>\n        <pickle></pickle>\n        </plate>'},{level:9,answer:["plate *","plate pickle, plate orange"],elements:["Nplate","pickle","","pickle","bento","orange","plate","orange"],markup:'\n        <plate id="nice">\n        <pickle class="bounce"></pickle>\n        </plate>\n        <pickle></pickle>\n        <bento>\n        <orange></orange>\n        </bento>\n        <plate>\n        <orange class="bounce"></orange>\n        </plate>'},{level:10,answer:["*"],elements:["","Sapple","bento","orange","","pickle","plate","Sorange"],markup:'\n        <apple class="small bounce"></apple>\n        <bento class="bounce">\n        <orange></orange>\n        </bento>\n        <pickle class="bounce"></pickle>\n        <plate class="bounce">\n        <orange class="small"></orange>\n        </plate>'}],n.drawLevels=function(e,n,t,l){for(let l=0;l<n.length;l+=1){const a=document.createElement("div");a.classList.add("level"),a.textContent=`${n[l].level}`,t===l&&a.classList.add("current"),e.appendChild(a)}for(let n=0;n<l.length;n+=1){if("done"===l[n]){const t=document.createElement("span");t.innerHTML="&#10004",t.style.color="rgb(151, 252, 105)",e.children[n].appendChild(t)}if("done with help"===l[n]){const t=document.createElement("span");t.innerHTML="&#10004",t.style.color="rgb(150, 150, 150)",e.children[n].appendChild(t)}}}}},n={};function t(l){var a=n[l];if(void 0!==a)return a.exports;var o=n[l]={id:l,exports:{}};return e[l](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0,(()=>{t(427),t(849),t(411),t(910),t(942);const e=t(431),n=t(623),l=t(53),a=t(861);let o=0,r=["","","","","","","","",""];!function(){const t=document.createElement("div");t.classList.add("gameWrapper"),document.body.appendChild(t);const s=document.createElement("div");s.classList.add("levelsWrapper"),document.body.appendChild(s);const i=document.createElement("h2");i.classList.add("level-title"),i.textContent="Levels",s.appendChild(i);const c=document.createElement("div");c.classList.add("levels-block"),s.appendChild(c);const d=document.createElement("button");d.classList.add("reset-button"),d.textContent="Reset",s.appendChild(d);const p=document.createElement("header");p.classList.add("header"),t.appendChild(p);const m=document.createElement("h1");m.classList.add("task-name"),m.textContent="RS - CSS",p.appendChild(m);const u=document.createElement("div");u.classList.add("game-table"),t.appendChild(u);const h=document.createElement("div");h.classList.add("editor"),t.appendChild(h);const b=document.createElement("footer");b.classList.add("footer"),t.appendChild(b);const g=document.createElement("span");g.classList.add("year"),g.textContent="Created in 2023",b.appendChild(g);const x=document.createElement("a");x.classList.add("github"),x.textContent="GitHub",x.href="https://github.com/Smetan-dot",x.target="_blank",b.appendChild(x);const v=document.createElement("a");v.href="https://rs.school/js/",v.target="_blank",b.appendChild(v);const f=document.createElement("img");f.src="https://rs.school/images/rs_school_js.svg",f.alt="rs_school_js",f.classList.add("rs-school-img"),v.appendChild(f),localStorage.getItem("level")&&(o=Number(localStorage.getItem("level"))),localStorage.getItem("progress")&&(r=JSON.parse(localStorage.getItem("progress")||"{}")),function t(o){u.innerHTML="",h.innerHTML="",c.innerHTML="",(0,n.drawCssEditor)(h),(0,l.drawHtmlViewer)(h,a.levels,o),(0,e.drawTable)(u,a.levels,o),(0,a.drawLevels)(c,a.levels,o,r),function(e,t){const l=document.querySelector(".editor"),o=document.querySelector(".levels-block");for(let n=0;n<o.childNodes.length;n+=1)o.childNodes[n].addEventListener("click",(()=>{e(a.levels[n].level-1)}));const s=document.querySelector(".answer-button"),i=document.querySelector(".input"),c=document.querySelector(".current");s.addEventListener("click",(()=>{(0,n.checkAnswer)(i,l,c,a.levels,t,e,r)})),i.addEventListener("keydown",(o=>{"Enter"===o.code&&(0,n.checkAnswer)(i,l,c,a.levels,t,e,r)})),document.querySelector(".help-button").addEventListener("click",(()=>{(0,n.typeAnswer)(i,a.levels,t,c,r)})),document.querySelector(".reset-button").addEventListener("click",(()=>{r=["","","","","","","","",""],e(t)}))}(t,o),(0,l.markupHoverAction)(),localStorage.setItem("level",`${o}`),localStorage.setItem("progress",JSON.stringify(r))}(o)}()})()})();