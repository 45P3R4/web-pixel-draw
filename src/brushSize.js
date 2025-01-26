import { context } from "./canvas";

const size = document.getElementById("size");
export let brushSize = size.value;

size.onchange = changeSize;

function changeSize() {
    brushSize = this.value;
    context.lineWidth = brushSize;
}