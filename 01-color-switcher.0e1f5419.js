const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let o;t.addEventListener("click",(()=>{o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(()=>{clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.0e1f5419.js.map