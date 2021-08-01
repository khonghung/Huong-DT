// hàm tổng hợp
function runBall() {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawScore() //tính điểm cho game

        drawball()  //vẽ bóng

        bricks()  // vẽ gạch

        balltouchbricks()  //sự kiện bóng chạm gạch

        drawpaddle()   // vẽ ván đỡ bóng

        ballpaddle()    //sự kiện va chạm giữa bóng và ván

        logicpaddle()  // logic va đập của ván

        logicball()    // logic xử lí va đập của bóng

        position()   // vị trí, tọa độ của bóng


        if (ball.y > canvas.height - ball.radius) {
            gameOver = true
        }
        requestAnimationFrame(runBall)
    } else {
        checkWinLose()
    }
}

runBall()
