import { updateAttributes } from "./attributes";

const ZOOM_STEP = 10;
const MIN_ZOOM = 10;
const MAX_ZOOM = 300;

export let zoom = 10;
export let zoomPercent = 100;

export function zoomCanvas(evt) {
    if (evt.deltaY > 0) {
        zoomPercent = Math.max(MIN_ZOOM, zoomPercent - ZOOM_STEP);
    }
    else if (evt.deltaY < 0) {
        zoomPercent = Math.min(MAX_ZOOM, zoomPercent + ZOOM_STEP);
    }
    updateAttributes();
}