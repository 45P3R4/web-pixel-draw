(()=>{"use strict";let e=10;function t(){document.documentElement.setAttribute("style","--canvasLeft: "+a.x+"px; --canvasTop: "+a.y+"px; --canvasHeight: "+d.height*e+"px; --canvasWidth: "+d.width*e+"px; ")}const n=document.getElementById("info"),i=document.getElementById("canvas"),o=document.getElementById("canvas-container"),c=(document.getElementById("canvas-wrapper"),i.getContext("2d"));let a={x:0,y:0},d={width:64,height:64};function l(){i.width=d.width,i.height=d.height,t(),n.textContent=d.width+"x"+d.height}function u(){l(),c.fillStyle="#00000000",c.fillRect(0,0,d.width,d.height),t()}let s=0,h=0;function m(e,t){s=e,h=t}function r(e){const t=canvas.getBoundingClientRect(),n=canvas.width/t.width,i=canvas.height/t.height;return{x:(e.clientX-t.left)*n,y:(e.clientY-t.top)*i}}let v=!1;function g(e){v=!1,m(e.clientX,e.clientY)}const f=document.getElementById("color");let E=f.value;f.onchange=function(){E=this.value};const y=document.getElementById("size");let x=y.value;y.onchange=function(){x=this.value};let w=!1;function L(){w=!1,c.closePath()}const p=document.getElementById("new-button"),B=document.getElementById("save-button");u(),i.addEventListener("mousedown",(function(e){if(0!==e.button)return;w=!0;let t=r(e);c.lineWidth=x,c.strokeStyle=E,c.beginPath(),c.rect(Math.ceil(t.x)-.5,Math.ceil(t.y)-.5,x,x),c.stroke()})),i.addEventListener("mousemove",(function(e){if(!w)return;let t=r(e);c.lineTo(Math.ceil(t.x)-.5,Math.ceil(t.y)-.5),c.stroke()})),i.addEventListener("mouseup",L),i.addEventListener("mouseleave",L),o.addEventListener("wheel",(function(n){n.deltaY>0?e=Math.max(.1,e-1):n.deltaY<0&&(e=Math.min(500,e+1)),console.log(e),t()})),o.addEventListener("mousedown",(function(e){2===e.button&&(v=!0,m(e.clientX,e.clientY))})),o.addEventListener("mousemove",(function(e){if(!v)return;let n=function(e){const t=e.clientX,n=e.clientY,i=t-s,o=n-h;return s=t,h=n,{x:i,y:o}}(e);a.x+=n.x,a.y+=n.y,t()})),o.addEventListener("mouseup",g),o.addEventListener("mouseleave",g),o.addEventListener("resize",l),p.addEventListener("mouseup",(function(){c.clearRect(0,0,d.width,d.height),u()})),B.addEventListener("mouseup",(function(){var e=document.createElement("a");e.download="image.png",e.href=document.getElementById("canvas").toDataURL(),e.click()}))})();