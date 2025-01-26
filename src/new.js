import { context, initCanvas } from "./canvas";
import { canvasSize } from "./canvas";

export const newButton = document.getElementById("new-button");

export function clearCanvas() {
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
    initCanvas();
}