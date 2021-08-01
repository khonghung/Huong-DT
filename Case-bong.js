let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")
let gameOver = false//checkgameoverthìnhưthếnào
let gameWin = false//checkgamewinthìnhưthếnào
let score = 0//đếmđiểm
let ball = {//khaibáobiếnquảbóng
    x: Math.floor(Math.random() * 255),
    y: Math.floor(Math.random() * 255),
    dx: 3,
    dy: 2,
    radius: 10
}

//khaibáobiếncủatấmván
let paddle = {
    width: 80,
    height: 10,
    x: 0,
    y: canvas.height - 10,
    speed: 10,
    isLeft: false,
    isRight: false
}

//khaibáobiếncủaviêngạch
let brick = {
    offsetX: 25,
    offsetY: 25,
    distance: 25,
    width: 70,
    height: 15,
    totalRow: 3,
    totalCol: 6,
}

//khaibáomảngrỗngchứanhiềuviêngạch
let brickarr = []
//thựchiệnvònglặpđểcóthểvẽnhiềuvònglặp
for (let i = 0; i < brick.totalRow; i++) {
    for (let j = 0; j < brick.totalCol; j++) {
        brickarr.push({
            x: brick.offsetX + j * (brick.width + brick.distance),
            y: brick.offsetY + i * (brick.height + brick.distance),
            isBrick: false
        })
    }
}


//hàmrandommàusắc
function getRandomHex()
{
    return Math.floor(Math.random() * 255);
}

function getRandomColor()
{
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}


//sửdụngsựkiệnkeydown
document.addEventListener("keydown", function (event) {
    console.log(event)
    if (event.keyCode === 37) {
        paddle.isLeft = true
    }
    else if(event.keyCode === 39)
    {
        paddle.isRight = true
    }
})
//sửdụngsựkiệnkepup
document.addEventListener("keyup", function (event) {
    console.log(event)
    if (event.keyCode === 37) {
        paddle.isLeft = false
    }
    else if (event.keyCode === 39)
    {
        paddle.isRight = false
    }
})


//hiểnthịchữScoretrongcanvas
function drawScore()
{
    ctx.font = "14pxArial"
    ctx.fillStyle = getRandomColor()
    ctx.fillText("Score:" + score, 8, 20);
}

//vẽquảbóng
function drawball()
{
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    ctx.closePath()
}

//vẽviêngạch
function bricks()
{
    brickarr.forEach(function (b) {
        if (!b.isBrick) {   //kiểmtraxemviêngạchvỡhaychưa
            ctx.beginPath()
            ctx.rect(b.x, b.y, brick.width, brick.height)
            ctx.fillStyle = getRandomColor()
            ctx.fill()
            ctx.closePath()
        }
    })
}

//sựkiệnquảbóngchạmviêngạch
function balltouchbricks()
{
    brickarr.forEach(function (b) {
        if (!b.isBrick) {//kiểmtraxemviêngạchvỡhaychưa
            if (ball.x >= b.x && ball.x <= b.x + brick.width &&
                ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + brick.height
            ) {
                ball.dy = -ball.dy
                b.isBrick = true
                score++
                if (score === brick.totalCol * brick.totalRow) {
                    gameWin = true
                    gameOver = true
                }
            }
        }
    })
}


//vẽvánđỡbóng
function drawpaddle()
{
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    ctx.closePath()
}

//bónglăn
function logicball()
{
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        ball.dx = -ball.dx
    }
    if (ball.y < ball.radius) {
        ball.dy = -ball.dy
    }
}

//tọađộcủabóng
function position()
{
    ball.x += ball.dx
    ball.y += ball.dy
}

//vachạmgiữabóngvàván
function ballpaddle()
{
    if (ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width
        && ball.y + ball.radius >= canvas.height - paddle.height) {
        ball.dy = -ball.dy
    }
}

//logicquảbóng
function logicpaddle()
{
    if (paddle.isLeft) {
        paddle.x -= paddle.speed
    }
    else if(paddle.isRight)
    {
        paddle.x += paddle.speed
    }
    if (paddle.x < 0) {
        paddle.x = 0
    }
    else if(paddle.x > canvas.width - paddle.width)
    {
        paddle.x = canvas.width - paddle.width
    }
}

//checkthắngthuacủauser
function checkWinLose()
{
    if (gameWin) {
        alert("YOUWIN")
    } else {
        alert("YOULOSE")
    }
}

//hàmtổnghợp
function runBall()
{
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawScore()//tínhđiểmchogame

        drawball()//vẽbóng

        bricks()//vẽgạch

        balltouchbricks()//sựkiệnbóngchạmgạch

        drawpaddle()//vẽvánđỡbóng

        ballpaddle()//sựkiệnvachạmgiữabóngvàván

        logicpaddle()//logicvađậpcủaván

        logicball()//logicxửlívađậpcủabóng

        position()//vịtrí,tọađộcủabóng


        if (ball.y > canvas.height - ball.radius) {
            gameOver = true
        }
        requestAnimationFrame(runBall)
    } else {
        checkWinLose()
    }
}

runBall()









