
const canvas = document.querySelector("#draw");

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
ctx.strokeStyle = "#FABADA";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

let background = new Image();
background.src = 'unicorn.jpg';
background.onload = function(){
    ctx.globalAlpha = 0.2;
    ctx.drawImage(background,0,0);
    ctx.globalAlpha = 1;
}


function draw(e) {

    if (!isDrawing) return;
    console.log(e);

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;

    hue += 10;

    if (hue > 360)hue =0;

    

    if (ctx.lineWidth >100 || ctx.lineWidth <=1){
        direction = !direction;
    }

    if (direction)ctx.lineWidth++;
    else ctx.lineWidth--;





}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
