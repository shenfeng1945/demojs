/**
 * Created by lzc on 2017/6/17.
 */
var  eye1 = document.querySelector('.eye1_circle')
var  eye2 = document.querySelector('.eye2_circle')
setInterval(function () {
   var degreeX = parseInt(Math.random()*90-45,10)
   var degreeY = parseInt(Math.random()*90-45,10)
    eye1.style.transform = 'rotateX('+degreeX+'deg) rotateY('+degreeY+'deg)'
    eye2.style.transform = 'rotateX('+degreeX+'deg) rotateY('+degreeY+'deg)'
},800)
