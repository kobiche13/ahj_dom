(()=>{"use strict";let e,l;!function(){const e=document.createElement("div");e.className="game-field",document.body.prepend(e);const l=document.querySelector(".game-field");for(let e=0;e<16;e+=1){const e=document.createElement("div");e.className="game-field_cell",l.append(e)}}(),setInterval((()=>{const t=document.querySelector(".goblin");null!==t&&t.classList.remove("goblin"),e=Array.from(document.querySelectorAll(".game-field_cell"));const c=Math.floor(Math.random()*e.length);l===c&&e.splice(c,1),e[c].classList.add("goblin"),l=c}),1e3)})();