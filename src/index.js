import { initCanvas } from "./canvas";
import { initZoom } from "./canvasZoom";
import { initPan } from "./canvasPan";
import { initNew } from "./new";
import { initSave } from "./save";
import { initDraw } from "./canvasDraw";

initSave();
initNew();
initCanvas();
initPan();
initZoom();
initDraw();