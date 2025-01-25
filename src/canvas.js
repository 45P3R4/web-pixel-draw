import { zoom } from "./canvasZoom";

export const canvas = document.getElementById("canvas");
export const canvasContainer = document.getElementById("canvas-container");
export const context = canvas.getContext("2d");

export let canvasPosition = {x: 0, y: 0};

export function resizeCanvas() {
    canvas.width = window.innerWidth / zoom;
    canvas.height = window.innerHeight / zoom;
}