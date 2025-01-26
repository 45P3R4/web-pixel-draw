import { updateAttributes } from "./attributes";

export const canvas = document.getElementById("canvas");
export const canvasContainer = document.getElementById("canvas-container");
export const canvasWrapper = document.getElementById("canvas-wrapper");
export const context = canvas.getContext("2d");

export let canvasPosition = {x: 0, y: 0};

export let canvasSize = {
    width: 32,
    height: 64
};

export function resizeCanvas() {
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    updateAttributes();
}

export function initCanvas() {
    resizeCanvas();
    context.fillStyle = "#FFFFFF"
    context.fillRect(0,0, canvasSize.width, canvasSize.height);
    updateAttributes();
}