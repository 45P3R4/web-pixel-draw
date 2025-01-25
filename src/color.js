const color = document.getElementById("color");
export let brushColor = color.value;

color.onchange = changeColor;

function changeColor() {
    brushColor = this.value;
}