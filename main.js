(()=>{"use strict";var t=[2,3];function e(t){"cell cell-active"==t.target.className?(a+=1,t.target.classList.remove("cell-active"),l.textContent=a):(n-=1,c.textContent=n,0==n&&(alert("Вы проиграли!"),a=0,l.textContent=a,n=5,c.textContent=n))}t.push(Math.floor(16*Math.random()));var c=document.querySelector(".count-attempts"),l=document.querySelector(".count"),a=0,n=5,r=Array.from(document.querySelectorAll(".cell"));setInterval((function(){var e=document.querySelector(".cell-active");e&&e.classList.remove("cell-active");var c=Math.floor(16*Math.random()),l=t[t.length-1];l===c&&0===c?t.push(c+1):l===c&&15===c?t.push(c-1):l===c&&0!=c?t.push(c+1):t.push(c),t.shift(),document.getElementById("".concat(l)).classList.add("cell-active")}),1e3),r.forEach((function(t){return t.addEventListener("click",e)}))})();