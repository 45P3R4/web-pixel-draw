import { canvasPosition } from "./canvas";
import { canvasSize } from "./canvas";
import { zoom } from "./canvasZoom";

export function updateAttributes() {
    document.documentElement.setAttribute("style", 
        "--canvasLeft: " + canvasPosition.x + "px; " + 
        "--canvasTop: " + canvasPosition.y + "px; " +
        "--canvasHeight: " + canvasSize.height * zoom + "px; " + 
        "--canvasWidth: " + canvasSize.width * zoom  + "px; ");
}