const color = document.getElementById("color");
let currentColor = color.value;

color.onchange = changeColor;

function changeColor() {
    currentColor = this.value;
}