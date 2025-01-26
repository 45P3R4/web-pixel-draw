import { canvas, canvasContainer, context } from "./canvas";
import { getMousePos } from "./mouseHandle";
import { brushColor } from "./brushColor";
import { brushSize } from "./brushSize";

let isDrawDown = false;


function startDraw(evt) {
    if (evt.button !== 0) return;
    isDrawDown = true;
    let mousePos = getMousePos(evt);
    
    context.beginPath();
    context.lineTo(
        Math.ceil(mousePos.x) - brushSize/2, 
        Math.ceil(mousePos.y) - brushSize/2);
     context.lineTo(
        Math.ceil(mousePos.x) - brushSize/2, 
        Math.ceil(mousePos.y) - brushSize/2);
    context.stroke();
}

function draw(evt) {
    if (!isDrawDown) return;
    let mousePos = getMousePos(evt);

    context.lineTo(Math.ceil(mousePos.x) - brushSize/2, Math.ceil(mousePos.y) - brushSize/2);
    context.stroke();
}

function stopDraw() {
    isDrawDown = false;
    context.closePath();
}

export function initDraw() {
    context.globalAlpha = 2;
    context.lineCap='square';
    context.lineJoin='bevel'; 
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;

    canvas.addEventListener("mousedown", startDraw);
    canvasContainer.addEventListener("mousemove", draw);
    canvasContainer.addEventListener("mouseup", stopDraw);
    canvasContainer.addEventListener("mouseleave", stopDraw);
}