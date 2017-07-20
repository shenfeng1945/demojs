/**
 * Created by lzc on 2017/6/25.
 */
// let array = document.querySelectorAll('.slides .panes  li')
// for(let i=0;i<array.length;i++){
//     let index = i
//     array[i].addEventListener('click',function(){
//         go(index)
// }
//  let count = 0
//  var clock = setInterval(function(){
//      count ++
//      if(count === 4){count = 0}
//      go(count)
//  },2000) 


//为了把click事件里的回调函数里的index取出
let array = {}
$('.slides .panes').on('click','li',function (e) {
    let li = e.currentTarget
    let $li = $(li)
    let index = $li.index()
    go(index)
    array = {"index":index}
})
let current = 0
setInterval(function () {
   let nextcurrent = current + 1
    if(nextcurrent === 4){
       nextcurrent = 0
    }
    //如果click事件被触发，那么自动播放下一张图片的位置会被改变
   if(array.index !== undefined){nextcurrent = array.index + 1} 
    go(nextcurrent)
    current = nextcurrent
    //nextcurrent已经被改变了，array.index的值就没有存在意义，同时它还会影响下一次的setInterval,所以让它继续存储下一次被点击的‘li’的index值
    array.index = undefined
},2000)

function go(index) {
    $('.slides .panes li').eq(index).addClass('active').siblings('.active').removeClass('active')
    let width = $('.slides .window').width()
    $('.slides .window ol').css({
        transform: 'translateX('+(-width*index)+'px)'
    })
}
