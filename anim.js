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
}