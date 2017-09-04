//自动获取移动端页面的宽和高，并将宽和高设置给canvas。
let { clientWidth, clientHeight } = document.documentElement
let navWidth = document.querySelector('.nav').clientWidth
let canvas = document.getElementById('myCanvas')
//让图片的大小能适应不同像素的移动端
let imgWidth = document.querySelectorAll('img')
draw()
function autoAdaption() {
    myCanvas.width = clientWidth * 0.8213
    myCanvas.height = clientHeight
    //可以把一个字缩小1/10，那么原先有rem单位的数组全部乘以10
    document.write(`<style>html{font-size:${clientWidth}px}</style>`)
}
function draw() {
    autoAdaption()
    let previousPoint
    if (canvas.getContext) {
        let context = canvas.getContext('2d')
        canvas.addEventListener('touchmove', function (e) {
            //touchmove默认在移动端有滚屏现象
            e.preventDefault()
            let { penType, color, line, touch, pageX, pageY } = initialCanvas(e, 'touchmove')
            //铅笔
            //貌似相同name的另一个input被点击时，其value并没有变，但在touch事件(3个)里却可以检测改变的value,这是该代码的核心点
            if (penType === 'pen') {
                if (previousPoint) {
                    penCanvas({ color, line, clientWidth, previousPoint, pageX, pageY, context })
                }
                //记录前一次的touchmove事件的坐标点
                previousPoint = { pageX, pageY }
            } else if (penType === 'eraser') {
                eraserCanvas({ line, clientWidth, pageX, pageY, context })
            }
        })
        canvas.addEventListener('touchend', function (e) {
            previousPoint = null
        })
        let clear = document.querySelector('input.clear')
        clear.addEventListener('click', function () { clearCanvas({ context, myCanvas }) })
        //矩形
        squareness('input.squareness', context)
        //三角形 
        triangle('input.triangle', context)
        //圆
        circle('circle', context)
        //save
        save('save')
    }
    function strokeColor(color) {
        let b
        if (color === 'black') { b = 'black' }
        else if (color === 'red') { b = 'red' }
        else if (color === 'green') { b = 'green' }
        else if (color === 'blue') { b = 'blue' }
        return b
    }
    function lineWidth(line, clientWidth) {
        let a
        if (line === 'thin') { a = 1 * clientWidth / 375 }
        else if (line === 'middle') { a = 3 * clientWidth / 375 }
        else if (line === 'wide') { a = 5 * clientWidth / 375 }
        return a
    }
    function penCanvas(options) {
        let { color, line, clientWidth, previousPoint, pageX, pageY, context } = options
        context.beginPath()
        context.strokeStyle = strokeColor(color)
        context.lineWidth = lineWidth(line, clientWidth)
        context.beginPath()
        context.moveTo(previousPoint.pageX, previousPoint.pageY)
        context.lineTo(pageX, pageY)
        context.stroke()
    }
    function eraserCanvas(options) {
        let { line, clientWidth, pageX, pageY, context } = options
        let lineW = lineWidth(line, clientWidth)
        context.clearRect(pageX - lineW * 3, pageY - lineW * 3, lineW * 6, lineW * 6)
    }
    function clearCanvas(options) {
        let { context, myCanvas } = options
        context.clearRect(0, 0, myCanvas.width, myCanvas.height)
    }
    function squareCanvas(options) {
        let { context, color, line, clientWidth, startSquareness, pageX, pageY } = options
        context.beginPath()
        context.strokeStyle = strokeColor(color)
        context.lineWidth = lineWidth(line, clientWidth)
        context.moveTo(startSquareness.pageX, startSquareness.pageY)
        context.lineTo(pageX, startSquareness.pageY)
        context.lineTo(pageX, pageY)
        context.lineTo(startSquareness.pageX, pageY)
        context.lineTo(startSquareness.pageX, startSquareness.pageY)
        context.stroke()
    }
    function triangleCanvas(options) {
        let { context, color, line, clientWidth, startTriangle, pageX, pageY } = options
        context.beginPath()
        context.strokeStyle = strokeColor(color)
        context.lineWidth = lineWidth(line, clientWidth)
        context.moveTo(startTriangle.pageX, startTriangle.pageY)
        context.lineTo(pageX, startTriangle.pageY)
        context.lineTo(pageX, pageY)
        context.lineTo(startTriangle.pageX, startTriangle.pageY)
        context.stroke()
    }
    function circleCanvas(options) {
        let { context, color, line, clientWidth, startCircle, pageX, pageY } = options
        context.beginPath()
        context.strokeStyle = strokeColor(color)
        context.lineWidth = lineWidth(line, clientWidth)
        context.arc(startCircle.pageX, startCircle.pageY,
            Math.sqrt(Math.pow((startCircle.pageX - pageX), 2) + Math.pow((startCircle.pageY - pageY), 2)),
            0, Math.PI * 2, true)
        context.stroke()
    }
    function initialCanvas(e, eType) {
        let penType = document.querySelector(`input[name="penType"]:checked`).value
        let color = document.querySelector(`input[name="color"]:checked`).value
        //控制宽度
        let line = document.querySelector(`input[name="line"]:checked`).value
        if (eType === 'touchend') {
            let touch = e.changedTouches[0]
            let pageX = touch.pageX
            let pageY = touch.pageY
            return { penType, color, line, pageX, pageY }
        } else if (eType === 'touchmove' || eType === 'touchstart') {
            let touch = e.touches[0]
            let pageX = touch.pageX
            let pageY = touch.pageY
            return { penType, color, line, pageX, pageY }
        }
    }
    function squareness(selector, context) {
        let startSquareness
        let squareness = document.querySelector(selector)
        squareness.addEventListener('click', function () {
            canvas.addEventListener('touchstart', function (e) {
                let { pageX, pageY } = initialCanvas(e, 'touchstart')
                startSquareness = { 'pageX': pageX, 'pageY': pageY }
            })
            canvas.addEventListener('touchend', function (e) {
                let { touch, pageX, pageY, penType, color, line } = initialCanvas(e, 'touchend')
                if (penType === 'squareness') {
                    squareCanvas({ context, color, line, clientWidth, startSquareness, pageX, pageY })
                }
            })
        })
    }
    function triangle(selector, context) {
        let startTriangle
        let triangle = document.querySelector(selector)
        triangle.addEventListener('click', function () {
            canvas.addEventListener('touchstart', function (e) {
                let { pageX, pageY } = initialCanvas(e, 'touchstart')
                startTriangle = { 'pageX': pageX, 'pageY': pageY }
            })
            canvas.addEventListener('touchend', function (e) {
                let { pageX, pageY, color, line, clientWidth, penType } = initialCanvas(e, 'touchend')
                if (penType === 'triangle') {
                    triangleCanvas({ color, line, clientWidth, startTriangle, pageX, pageY, context })
                }
            })
        })
    }
    function circle(selector, context) {
        let startCircle
        let circle = document.getElementsByClassName('circle')[0]
        circle.addEventListener('click', function () {
            canvas.addEventListener('touchstart', function (e) {
                let { pageX, pageY } = initialCanvas(e, 'touchstart')
                startCircle = { 'pageX': pageX, 'pageY': pageY }
            })
            canvas.addEventListener('touchend', function (e) {
                let { pageX, pageY, penType, color, line } = initialCanvas(e, 'touchend')
                if (penType === 'circle') {
                    circleCanvas({ color, line, clientWidth, startCircle, pageX, pageY, context })
                }
            })
        })
    }
    function save(byId) {
        let save = document.getElementById(byId)
        save.onclick = function () {
            var canvas = document.getElementById("myCanvas")
            var Date = canvas.toDataURL("image/png");
            var newWindow = window.open('about:blank', 'image from canvas');
            newWindow.document.write("<img src='" + Date + "' alt='from canvas'/>");
        }
    }

}
