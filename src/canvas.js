import { updateAttributes } from "./attributes";
import { initColor } from "./brushColor";
import { initSize } from "./brushSize";
import { initDraw } from "./canvasDraw";
import { initPan } from "./canvasPan";
import { initZoom } from "./canvasZoom";
import { updateInfo } from "./info";

export const canvas = document.getElementById("canvas");
export const canvasContainer = document.getElementById("canvas-container");
export const canvasWrapper = document.getElementById("canvas-wrapper");
export const context = canvas.getContext("2d");

export let canvasPosition = {x: 0, y: 0};
export let initBackgroundColor = "#FFFFFF";
// export let initBackgroundColor = "#00000000";

export let canvasSize = {
    width: 64,
    height: 64
};

export function resizeCanvas() {
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    updateAttributes();
    updateInfo();
}

export function initCanvas() {
    resizeCanvas();
    context.fillStyle = initBackgroundColor;
    context.fillRect(0,0, canvasSize.width, canvasSize.height);
    updateAttributes();
    
    initPan();
    initZoom();
    initDraw();
    initSize();
    initColor();
}