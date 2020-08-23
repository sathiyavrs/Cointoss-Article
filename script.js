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
	canvasEl = document.getElementById('myCanvas');
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

function resizeCanvas() {
	var canvasDimValue = (screen.width * canvasEl.clientWidth) / window.innerWidth;

	if (canvasEl.width != canvasDimValue) {
		canvasEl.width = canvasDimValue;
		canvasEl.height = canvasDimValue;

		calcCanvasGlobals();
	}
}

function initCtx() {
	if (intervalFdOne == 0) {
		canvasCtx.clearRect(0, 0, canvasEl.width, canvasEl.height);
	}

	canvasCtx.lineWidth = 2;
	canvasCtx.strokeStyle = "#ff0000"; // Pure white.
	canvasCtx.fillStyle = "#ff0000";
}

function getBallPos(ballCount) {
	// This uses ballOneCount
	var ballPos = {
		x: 0,
		y: 0
	};

	// four canvasBoxes in each bigcanvasBox
	ballPos.y = parseInt(ballCount / 4);
	ballPos.x = (ballCount % 4) * 2;
	if (ballPos.y % 2 == 1) {
		ballPos.x += 1;
	}

	return ballPos;
}

// TODO: Combine `fillBoxOne` and `fillBoxTwo` functions into one `fillBox` function
function fillBoxOne() {
	var ballSize = canvasBox.width * 0.125; // Try to fill four canvasBoxes in each area.
	var ballPos = getBallPos(ballOneCount);

	if (ballPos.y * ballSize + ballSize >= canvasBox.length) {
		window.clearInterval(intervalFdOne);
		return;
	}

	canvasCtx.fillRect(canvasBox.topLeft + ballPos.x * ballSize, canvasBox.topRight + ballPos.y * ballSize, ballSize, ballSize);
	ballOneCount = ballOneCount + 1;
}

function fillBoxTwo() {
	var ballSize = canvasBox.width * 0.125; // Try to fill four canvasBoxes in each area.
	var ballPos = getBallPos(ballTwoCount);

	if (ballPos.y * ballSize + ballSize >= canvasBox.length) {
		window.clearInterval(intervalFdTwo);
		return;
	}

	canvasCtx.fillRect(canvasBox.topLeft + canvasDim.x * 0.4 + ballPos.x * ballSize, canvasBox.topRight + ballPos.y * ballSize, ballSize, ballSize);
	ballTwoCount = ballTwoCount + 1;
}

function drawOuterBoxes() {
	canvasCtx.strokeRect(canvasBox.topLeft, canvasBox.topRight, canvasBox.width, canvasBox.length);
	canvasCtx.strokeRect(canvasBox.topLeft + canvasDim.x * 0.4, canvasBox.topRight, canvasBox.width, canvasBox.length);

	if (intervalFdOne == 0) {
		intervalFdOne = window.setInterval(fillBoxOne, 500);
		intervalFdTwo = window.setInterval(fillBoxTwo, 250);
	}
}

function canvasMain() {
	initCtx();
	drawOuterBoxes();
}

function setCanvasValues() {
	resizeCanvas();
	canvasMain();
}