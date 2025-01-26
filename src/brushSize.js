import { context } from "./canvas";

const size = document.getElementById("size");
export let brushSize = size.value;

function changeSize() {
    brushSize = size.value;
    context.lineWidth = brushSize;
}

export function initSize() {
    changeSize()
    size.addEventListener("change", changeSize);
}