function calcCanvasGlobals() {
	canvasDim = {
		x: canvasEl.width,
		y: canvasEl.height
	};

	canvasBox = {
		topLeft: canvasDim.x * 0.15,
		topRight: canvasDim.y * 0.1,
		width: canvasDim.x * 0.3,
		length: canvasDim.y * 0.8
	}
}

function setCanvasGlobals() {
	canvasEl = document.getElementById('simulator1');
	canvasCtx = canvasEl.getContext('2d');

	calcCanvasGlobals();
}

function initGlobalVars() {
	intervalFdOne = 0;
	intervalFdTwo = 0;
	ballOneCount = 0;
	ballTwoCount = 0;

	setCanvasGlobals();
}

function onLoadCb() {
	initGlobalVars();
	onEventCb();
}

function onEventCb() {
	setCanvasValues();
}

// FIXME: Doesn't work in Firefox, cause screen.width == window.innerWidth in FF.
function resizeCanvas() {
	var canvasDimValue = window.devicePixelRatio * canvasEl.clientWidth;

	if (canvasEl.width != canvasDimValue) {
		canvasEl.width = canvasDimValue;
		canvasEl.height = canvasDimValue / 3;

		calcCanvasGlobals();
	}
}

function initCtx() {
	if (intervalFdOne == 0) {
		canvasCtx.clearRect(0, 0, canvasEl.width, canvasEl.height);
	}

	canvasCtx.lineWidth = 2;
	canvasCtx.strokeStyle = "#ff0000";
	canvasCtx.fillStyle = "#ff0000";
}

function canvasMain() {
	initCtx();
}

function setCanvasValues() {
	resizeCanvas();
	canvasMain();
}