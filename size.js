const size = document.getElementById("size");
let currentSize = size.value;

size.onchange = changeSize;

function changeSize() {
    currentSize = this.value;
}