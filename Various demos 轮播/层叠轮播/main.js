/**
 * Created by lzc on 2017/7/2.
 */
$('.controls ol').on('click','li',function (e) {
    let $li = $(e.currentTarget)
    let index = $li.index()
    go(index)
})
let current = 0
let setTime = function () {
    let  nextcurrent = current +1
    if(nextcurrent === 4){
        nextcurrent = 0
    }
    go(nextcurrent)
    current = nextcurrent
}

setInterval(setTime,2000)

function go(index) {
    $('.controls ol li').eq(index).addClass('active').siblings('.active').removeClass('active')
    $('.windows ol li').eq(index).addClass('active').siblings('.active').removeClass('active')

}
