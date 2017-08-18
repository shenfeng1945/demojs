let $ol = $('.control')
let $slide = $('.slide')
let viewHeight = $('.page').innerHeight()
let liLength = $('li').length
$ol.on('click', 'li', function () {
    let $li = $(this)
    let index = $li.index()
    $li.addClass('active').siblings('.active').removeClass('active')
    $slide.eq(index).addClass('active').siblings('.active').removeClass('active')
    for (let i = 0; i < index; i++) {
        $slide.eq(i).addClass('up')
    }
    for (let j = index; j < liLength; j++) {
        $slide.eq(j).removeClass('up')
    }
})
$(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
        prev()
    }
    else {
        // scroll down
        next()
    }
})
$(window).on('keydown', function (e) {
    //键盘的‘up’键
    if (e.keyCode === 38) { prev() }
    //键盘的'down'键
    else if (e.keyCode === 40) { next() }

})
function prev() {
    $('li.active').prev('li').length && $('li.active').prev('li').click()
}
function next() {
    $('li.active').next('li').length && $('li.active').next('li').click()
}