//sự kiện quả bóng chạm viên gạch
function balltouchbricks()
{
    brickarr.forEach(function (b) {
        if (!b.isBrick) {     //  kiểm tra xem viên gạch vỡ hay chưa
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



//vachạmgiữabóngvàván
function ballpaddle()
{
    if (ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width
        && ball.y + ball.radius >= canvas.height - paddle.height) {
        ball.dy = -ball.dy
    }
}