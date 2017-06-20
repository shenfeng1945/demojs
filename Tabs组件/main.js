/**
 * Created by lzc on 2017/6/20.
 */
$('.out .tabs').on('click','.out .tabs li',function (e) {
    let li = e.currentTarget
    let $li = $(li)
    let index = $li.index()
    $li.addClass('active').siblings('.active').removeClass('active')
    $li.parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
})
