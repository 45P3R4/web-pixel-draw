import { updateAttributes } from "./attributes";
import { setLastMousePos } from "./mouseHandle";
import { getMouseDelta } from "./mouseHandle";
import { canvasPosition } from "./canvas";

let isPanning = false;

export function startPan(evt) {
    if (evt.button !== 2) return;
    isPanning = true;
    setLastMousePos(evt.clientX, evt.clientY);
}

export function pan(evt) {
    if (!isPanning) return;
    let mouseDelta = getMouseDelta(evt);
    canvasPosition.x += mouseDelta.x;
    canvasPosition.y += mouseDelta.y;
    updateAttributes();
}

export function stopPan(evt) {
    isPanning = false;
    setLastMousePos(evt.clientX, evt.clientY);
}