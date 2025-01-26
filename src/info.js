import { canvasSize } from "./canvas";


const info = document.getElementById("info");

export function updateInfo() {
    info.textContent = canvasSize.width + "x" + canvasSize.height;
}