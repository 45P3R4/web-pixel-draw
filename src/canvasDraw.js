import { context } from "./canvas";
import { getMousePos } from "./mouseHandle";
import { brushColor } from "./color";
import { brushSize } from "./size";

let isDrawDown = false;

export function startDraw(evt) {
    if (evt.button !== 0) return;
    isDrawDown = true;
    let mousePos = getMousePos(evt);

    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;

    context.beginPath();
    context.rect(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5, brushSize-0.5, brushSize-0.5);
    context.stroke();
}

export function draw(evt) {
    if (!isDrawDown) return;
    let mousePos = getMousePos(evt);

    context.lineTo(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5);
    context.stroke();
}

export function stopDraw() {
    isDrawDown = false;
    context.closePath();
}