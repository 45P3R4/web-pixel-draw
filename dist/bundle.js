(()=>{"use strict";let e=10;function t(){document.documentElement.setAttribute("style","--canvasLeft: "+a.x+"px; --canvasTop: "+a.y+"px; --canvasHeight: "+d.height*e+"px; --canvasWidth: "+d.width*e+"px; ")}const n=document.getElementById("info"),i=document.getElementById("canvas"),c=document.getElementById("canvas-container"),o=(document.getElementById("canvas-wrapper"),i.getContext("2d"));let a={x:0,y:0},d={width:64,height:64};function u(){i.width=d.width,i.height=d.height,t(),n.textContent=d.width+"x"+d.height}function l(){u(),o.fillStyle="#FFFFFF",o.fillRect(0,0,d.width,d.height),t()}let s=0,h=0;function m(e,t){s=e,h=t}function r(e){const t=canvas.getBoundingClientRect(),n=canvas.width/t.width,i=canvas.height/t.height;return{x:(e.clientX-t.left)*n,y:(e.clientY-t.top)*i}}let v=!1;function g(e){v=!1,m(e.clientX,e.clientY)}const f=document.getElementById("new-button");const E=document.getElementById("save-button");const y=document.getElementById("color");let x=y.value;y.onchange=function(){x=this.value};const w=document.getElementById("size");let L=w.value;w.onchange=function(){L=this.value};let p=!1;function B(){p=!1,o.closePath()}E.addEventListener("mouseup",(function(){var e=document.createElement("a");e.download="image.png",e.href=document.getElementById("canvas").toDataURL(),e.click()})),f.addEventListener("mouseup",(function(){o.clearRect(0,0,d.width,d.height),l()})),l(),c.addEventListener("mousedown",(function(e){2===e.button&&(v=!0,m(e.clientX,e.clientY))})),c.addEventListener("mousemove",(function(e){if(!v)return;let n=function(e){const t=e.clientX,n=e.clientY,i=t-s,c=n-h;return s=t,h=n,{x:i,y:c}}(e);a.x+=n.x,a.y+=n.y,t()})),c.addEventListener("mouseup",g),c.addEventListener("mouseleave",g),c.addEventListener("wheel",(function(n){n.deltaY>0?e=Math.max(.1,e-1):n.deltaY<0&&(e=Math.min(500,e+1)),t()})),c.addEventListener("resize",u),i.addEventListener("mousedown",(function(e){if(0!==e.button)return;p=!0;let t=r(e);o.lineWidth=L,o.strokeStyle=x,o.beginPath(),o.rect(Math.ceil(t.x)-.5,Math.ceil(t.y)-.5,L,L),o.stroke()})),c.addEventListener("mousemove",(function(e){if(!p)return;let t=r(e);o.lineTo(Math.ceil(t.x)-.5,Math.ceil(t.y)-.5),o.stroke()})),c.addEventListener("mouseup",B),c.addEventListener("mouseleave",B)})();