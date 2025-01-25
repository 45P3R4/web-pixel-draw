import { context } from "./canvas";
import { canvasSize } from "./canvas";

export const newButton = document.getElementById("newButton");

export function clearCanvas() {
    context.clearRect(0, 0, canvasSize.width, canvasSize.height);
}