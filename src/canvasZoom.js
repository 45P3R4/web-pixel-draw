import { updateAttributes } from "./attributes";
import { canvasContainer, canvasSize, resizeCanvas } from "./canvas";

const ZOOM_STEP = 1;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 500;

export let zoom = 10;

function zoomCanvas(evt) {
    if (evt.deltaY > 0) {
        zoom = Math.max(MIN_ZOOM, zoom - ZOOM_STEP);
    }
    else if (evt.deltaY < 0) {
        zoom = Math.min(MAX_ZOOM, zoom + ZOOM_STEP);
    }
    updateAttributes();
}

export function initZoom() {
    canvasContainer.addEventListener("wheel", zoomCanvas);
    canvasContainer.addEventListener("resize", resizeCanvas, canvasSize.width, canvasSize.height);
}