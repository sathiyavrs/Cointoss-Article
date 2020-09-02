
const getBiasedCoinTosser = (bias) => () => {
    return Math.random(0, 1) <= bias;
}

const getCanvasContext = () => {
    return document.getElementById('simulator1').getContext('2d');
}

const drawQuadrant = () => {
    ctx = getCanvasContext();

    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.moveTo(0, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);

    ctx.stroke();

    ctx.fillText('HH', 10, 10)
    ctx.fillText('HT', ctx.canvas.width - 20, 10)
    ctx.fillText('TH', 10, ctx.canvas.height - 10)
    ctx.fillText('TT', ctx.canvas.width - 20,  ctx.canvas.height - 10)
}