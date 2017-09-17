//综合资讯
$('.menu-content .tabs-name').on('click','li',function(e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    $li.addClass('active').siblings('.active').removeClass('active')
    $('.tabs-content-wrapper').children().eq(index).addClass('active').siblings('.active').removeClass('active')
})

//slides轮播
//储存mouseenter事件里的index
let array = {}
$('.activity-and-download .slides .controls>ul').on('mouseenter','li',function(e){
   let $li = $(e.currentTarget)
   let index = $li.index()
   go(index)
   array = {"index":index}
})
let  current = 0
setInterval(function(){
    let nextcurrent = current +1
    if(nextcurrent === 5){nextcurrent=0}
    //如果mouseenter被触发，改变下一张图片播放的位置
    if(array.index !== undefined){
        if(array.index === 4){array.index = -1}
        nextcurrent = array.index + 1
    }
    go(nextcurrent)
    current = nextcurrent
    //消除3s后的setInterval影响,同时再次去储存mouseenter里的index值
    array.index = undefined
},3000)
let go = function(index){
  let width = $('.activity-and-download .slides .slides-windows').width()
  $('.activity-and-download .slides .controls>ul').children().eq(index).addClass('active').siblings('.active').removeClass('active')
  $('.activity-and-download .slides .slides-windows>ol').css({
       transform: `translateX(${-index*width}px)`
})
}

//最新资讯tabs
$('.news-hero-nav .news-nav .touch-information>ol').on('mouseenter','li',function(e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    //延时一丢丢
    let timer = setTimeout(function(){
         $li.addClass('active').siblings('.active').removeClass('active')
         $('.news-hero-nav .news-nav').children('.child').eq(index).addClass('active').siblings('.active').removeClass('active')
    },200)
})
//周免英雄皮肤
$('.news-hero-nav .news-hero .touch-hero>ul').on('mouseenter','li',function(e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    let timer = setTimeout(function(){
        $li.addClass('active').siblings('.active').removeClass('active')
        $('.news-hero-nav .news-hero').children('.child').eq(index).addClass('active').siblings('.active').removeClass('active')
    },200)
})
//最新推荐
$('.recommend .touch-recommend>ul').on('mouseenter','li',function(e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    let timer = setTimeout(function(){
        $li.addClass('active').siblings('.active').removeClass('active')
        $('.recommend').children('.child').eq(index).addClass('active').siblings('.active').removeClass('active')
    },200)
})
//定
$(window).on('scroll',function(){
    let topY = $(window).scrollTop()
//    let fixed = document.querySelector('.tabs-name-wrapper')
//    let Y = fixed.getBoundingClientRect().top
   //经侧Y=437.1
    if(topY <= 437.1){
     $('.menu-content .tabs-name-wrapper').removeClass('sticky')
    }else{
     $('.menu-content .tabs-name-wrapper').addClass('sticky')
    }
})
//点击弹视频
$('.banner .video-wrapper').on('click',function(){
    $('.videoWrapper .video-modal').addClass('active')
})
$('.videoWrapper .video-modal .close').on('click',function(){
     $('.videoWrapper .video-modal').removeClass('active')
})


