let lastX = 0;
let lastY = 0;

export function getLastMousePos() {
    return lastmousePos = {x: lastX, y: lastY};
}

export function setLastMousePos(newX, newY) {
    lastX = newX;
    lastY = newY;
}

export function getMousePos(evt) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (evt.clientX - rect.left) * scaleX;
    const mouseY = (evt.clientY - rect.top) * scaleY;  

    let mousePos = {x: mouseX, y: mouseY};
    return mousePos;
}

export function getMouseDelta(evt) {
    const currentX = evt.clientX;
    const currentY = evt.clientY;

    const deltaX = currentX - lastX;
    const deltaY = currentY - lastY;

    lastX = currentX;
    lastY = currentY;

    let mouseDelta = {x: deltaX, y: deltaY};
    return mouseDelta;
}