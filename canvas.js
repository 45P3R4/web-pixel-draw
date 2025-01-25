//CANVAS
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let isDrawDown = false;
let zoom = 10;
let zoomPercent = 100;
let leftPosition = 0;
let topPosition = 0;

context.scale(1, 1); 
context.lineJoin = 'miter';
context.lineCap = 'butt';
context.imageSmoothingEnabled = false; 

canvas.width = window.innerWidth / zoom;
canvas.height = window.innerHeight / zoom;

window.onwheel = zoomCanvas;

window.onresize = function resizeCanvas() {
    canvas.width = window.innerWidth / zoom;
    canvas.height = window.innerHeight / zoom;
}

canvas.onmousedown = function drawDown(event) {
    if (event.button !== 0) return;
    isDrawDown = true;
    let mousePos = getMousePos(event);

    context.lineWidth = currentSize;
    context.strokeStyle = currentColor;

    context.beginPath();
    context.rect(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5, currentSize-0.5, currentSize-0.5);
    context.stroke();
}

canvas.onmousemove = function drawMove(event) {
    if (!isDrawDown) return;
    let mousePos = getMousePos(event);

    context.lineTo(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5);
    context.stroke();
}

canvas.onmouseleave = function drawLeave() {
    isDrawDown = false;
    context.closePath();
}

window.onmouseup = function drawUp() {
    isDrawDown = false;
    context.closePath();
}

function getMousePos(evn) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (evn.clientX - rect.left) * scaleX;
    const mouseY = (evn.clientY - rect.top) * scaleY;  
    return mousePos = {x: mouseX, y: mouseY};
}

function startDraw(evt) {
    if (evt.button !== 0) return;
    isDrawDown = true;
    let mousePos = getMousePos(event);

    context.lineWidth = currentSize;
    context.strokeStyle = currentColor;

    context.beginPath();
    context.rect(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5, currentSize-0.5, currentSize-0.5);
    context.stroke();
}

function draw(evt) {
    if (!isDrawDown) return;
    let mousePos = getMousePos(event);

    context.lineTo(Math.ceil(mousePos.x) -0.5, Math.ceil(mousePos.y) -0.5);
    context.stroke();
}

function zoomCanvas(evt) {
    if (evt.deltaY > 0) {
        zoomPercent > 10 ? zoomPercent -= 10 : zoomPercent;
    }
    else if (evt.deltaY < 0) {
        zoomPercent < 100 ? zoomPercent += 10 : zoomPercent;
    }
    document.documentElement.setAttribute("style", 
        "--canvasHeight: " + zoomPercent + "%;" + 
        "--canvasWidth: " + zoomPercent + "%");
}

function panCanvas(evt) {
    document.documentElement.setAttribute("style", 
        "--canvasLeft: " + leftPosition + "px;" + 
        "--canvasTop: " + topPosition + "px");
}