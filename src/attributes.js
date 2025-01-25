import { canvasPosition } from "./canvas";
import { zoomPercent } from "./canvasZoom";

export function updateAttributes() {
    document.documentElement.setAttribute("style", 
        "--canvasLeft: " + canvasPosition.x + "px; " + 
        "--canvasTop: " + canvasPosition.y + "px; " +
        "--canvasHeight: " + zoomPercent + "%; " + 
        "--canvasWidth: " + zoomPercent + "%; ");
}