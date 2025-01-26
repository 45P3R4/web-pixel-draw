import { context } from "./canvas";

const color = document.getElementById("color");
export let brushColor = color.value;

function changeColor() {
    brushColor = color.value;
    context.strokeStyle = brushColor;
}

export function  initColor() {
    changeColor()
    color.addEventListener("change", changeColor);
}