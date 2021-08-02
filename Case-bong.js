let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let gameOver = false   //check game over thì như thế nào
let gameWin = false    //check game win thì như thế nào
let score = 0   // đếm điểm



let ball = {    // khai báo biến quả bóng
    x: Math.floor(Math.random() * 255),
    y: Math.floor(Math.random() * 255),
    dx: 3,
    dy: 2,
    radius: 10
}




//vẽ quả bóng
function drawball()
{
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    ctx.closePath()
}


// logic di chuyển của quả bóng
function logicball()
{
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx
    }
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy
    }
}

// tọa độ của bóng
function position()
{
    ball.x += ball.dx
    ball.y += ball.dy
}















