/**
 * Created by lzc on 2017/6/25.
 */
$('.slides .panes').on('click','li',function (e) {
    let li = e.currentTarget
    let $li = $(li)
    let index = $li.index()
    go(index)
})
let current = 0
setInterval(function () {
   let nextcurrent = current + 1
    if(nextcurrent === 4){
       nextcurrent = 0
    }
    go(nextcurrent)
    current = nextcurrent
},2000)
function go(index) {
    $('.slides .panes li').eq(index).addClass('active').siblings('.active').removeClass('active')
    let width = $('.slides .window').width()
    $('.slides .window ol').css({
        transform: 'translateX('+(-width*index)+'px)'
    })
}
