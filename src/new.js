import { context, initCanvas } from "./canvas";
import { canvasSize } from "./canvas";

const newButton = document.getElementById("new-button");

function clearCanvas() {
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
    initCanvas();
}

export function initNew() {
    newButton.addEventListener("mouseup", clearCanvas);
}