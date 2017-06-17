/**
 * Created by lzc on 2017/6/17.
 */
setInterval(function () {
    var degreeX = parseInt(Math.random()*90 - 45,10)
    var degreeY = parseInt(Math.random()*90 - 45,10)
    element.style.transform = 'rotateX('+degreeX+'deg) rotateY('+degreeY+'deg)'
},800)
