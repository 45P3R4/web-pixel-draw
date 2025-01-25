import { zoom } from "./canvasZoom";

export const canvas = document.getElementById("canvas");
export const canvasContainer = document.getElementById("canvas-container");
export const canvasWrapper = document.getElementById("canvas-wrapper");
export const context = canvas.getContext("2d");

export let canvasPosition = {x: 0, y: 0};

export let canvasSize = {
    width: window.innerWidth / zoom, 
    height: window.innerHeight / zoom
};

export function resizeCanvas() {
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
}

export function initCanvas() {
    resizeCanvas();
    context.fillStyle = "#FFFFFF"
    context.fillRect(0,0, canvasSize.width, canvasSize.height);
}