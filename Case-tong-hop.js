//hàm random màu sắc
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


//sử dụng sự kiện keydown
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


//sử dụng sự kiện keyup
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


//hiển thị chữ Score trong canvas
function drawScore()
{
    ctx.font = "14pxArial"
    ctx.fillStyle = getRandomColor()
    ctx.fillText("Score:" + score, 8, 20);
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