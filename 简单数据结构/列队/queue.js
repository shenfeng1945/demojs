/**
 * Created by lzc on 2017/6/7.
 */
/*银行叫号，取号*/
var queue = []
function 取号() {
    var number = Math.round(Math.random()*10000)
    queue.push(number)
    output.textContent = `你的号码是${number},前面还有${queue.length-1}个人`
    return number
}
function 叫号() {
    var thenumber = queue.shift()
    screenDiv.textContent = `请${thenumber}到服务台来`
    return thenumber
}
takeNumber.onclick = function () {
    取号()
}
setInterval(function () {
    叫号()
},3000)