//khai báo biến của viên gạch
let brick = {
    offsetX: 25,
    offsetY: 25,
    distance: 25,
    width: 70,
    height: 15,
    totalRow: 3,
    totalCol: 6,
}




//vẽ viên gạch
function bricks()
{
    brickarr.forEach(function (b) {
        if (!b.isBrick) {   //kiểm tra xem viên gạch vỡ hay chưa
            ctx.beginPath()
            ctx.rect(b.x, b.y, brick.width, brick.height)
            ctx.fillStyle = getRandomColor()
            ctx.fill()
            ctx.closePath()
        }
    })
}





//khai báo mảng rỗng chứa nhiều viên gạch
let brickarr = []
//thực hiện vòng lặp để có thể vẽ nhiều vòng lặp
for (let i = 0; i < brick.totalRow; i++) {
    for (let j = 0; j < brick.totalCol; j++) {
        brickarr.push({
            x: brick.offsetX + j * (brick.width + brick.distance),
            y: brick.offsetY + i * (brick.height + brick.distance),
            isBrick: false
        })
    }
}