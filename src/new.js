import { context, initBackgroundColor, initCanvas, resizeCanvas, setInitBackgroundColor } from "./canvas";
import { canvasSize } from "./canvas";

const newButton = document.getElementById("new-button");

function newCanvasPopup() {
    const popupBg = document.createElement("div");
    const popup = document.createElement("div");
    const closeButton = document.createElement("button");
    const labelBg = document.createElement("label");
    const colorInput = document.createElement("input");
    const labelWidth = document.createElement("label");
    const widthInput = document.createElement("input");
    const labelHeight = document.createElement("label");
    const heightInput = document.createElement("input");
    const createButton = document.createElement("button");

    popupBg.setAttribute("id", "popup-bg");
    popup.setAttribute("id", "popup");
    closeButton.setAttribute("id", "close-button")

    colorInput.type = "color";
    widthInput.type = "number";
    heightInput.type = "number";

    labelBg.textContent = "Background color";
    labelWidth.textContent = "Width";
    labelHeight.textContent = "Height";
    closeButton.textContent = "X";
    createButton.textContent = "Create";
    widthInput.value = 64;
    heightInput.value = 64;
    colorInput.value = "#FFFFFF";
    
    document.body.appendChild(popupBg);
    popupBg.appendChild(popup);
    popup.appendChild(closeButton);
    popup.appendChild(labelBg);
    popup.appendChild(colorInput);
    popup.appendChild(labelWidth);
    popup.appendChild(widthInput);
    popup.appendChild(labelHeight);
    popup.appendChild(heightInput);
    popup.appendChild(createButton);

    closeButton.addEventListener("mouseup", closePopup);
    createButton.addEventListener("mouseup", () => createNewCanvas( widthInput.value, heightInput.value, colorInput.value));
}

function closePopup() {
    const popupBg = document.getElementById("popup-bg");

    popupBg.remove();
}

function createNewCanvas(width, height, backgroundColor) {
    initCanvas(width, height, backgroundColor);
    closePopup();
}

export function initNew() {
    newButton.addEventListener("mouseup", newCanvasPopup);
}