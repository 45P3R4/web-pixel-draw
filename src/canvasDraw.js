import { canvas, context } from "./canvas";
import { getMousePos } from "./mouseHandle";
import { brushColor } from "./brushColor";
import { brushSize } from "./brushSize";

let isDrawDown = false;

function startDraw(evt) {
    if (evt.button !== 0) return;
    isDrawDown = true;
    let mousePos = getMousePos(evt);

    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;

    context.beginPath();
    context.rect(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5, brushSize, brushSize);
    context.stroke();
}

function draw(evt) {
    if (!isDrawDown) return;
    let mousePos = getMousePos(evt);

    context.lineTo(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5);
    context.stroke();
}

function stopDraw() {
    isDrawDown = false;
    context.closePath();
}

export function initDraw() {
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDraw);
    canvas.addEventListener("mouseleave", stopDraw);
}