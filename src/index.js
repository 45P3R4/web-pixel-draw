import { resizeCanvas } from "./canvas";
import { zoomCanvas } from "./canvasZoom";
import { startPan } from "./canvasPan";
import { pan } from "./canvasPan";
import { stopPan } from "./canvasPan";
import { startDraw } from "./canvasDraw";
import { draw } from "./canvasDraw";
import { stopDraw } from "./canvasDraw";
import { canvas } from "./canvas";
import { canvasContainer } from "./canvas";
import { newButton } from "./new";
import { clearCanvas } from "./new";

resizeCanvas();

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

canvasContainer.addEventListener("wheel", zoomCanvas);

canvasContainer.addEventListener("mousedown", startPan);
canvasContainer.addEventListener("mousemove", pan);
canvasContainer.addEventListener("mouseup", stopPan);
canvasContainer.addEventListener("mouseleave", stopPan);

canvasContainer.addEventListener("resize", resizeCanvas);

newButton.addEventListener("mouseup", clearCanvas);