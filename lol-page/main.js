//综合资讯
$('.menu-content .tabs-name').on('click','li',function(e){
    let $li = $(e.currentTarget)
    let index = $li.index()
    $li.addClass('active').siblings('.active').removeClass('active')
    $('.tabs-content-wrapper').children().eq(index).addClass('active').siblings('.active').removeClass('active')
})

//slides轮播
$('.activity-and-download .slides .controls>ul').on('mouseenter','li',function(e){
   let $li = $(e.currentTarget)
   let index = $li.index()
   go(index)
})
let  current = 0
setInterval(function(){
    let nextcurrent = current +1
    if(nextcurrent === 5){nextcurrent=0}
    go(nextcurrent)
    current = nextcurrent
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
   // let fixed = document.querySelector('.tabs-name-wrapper')
   // let Y = fixed.getBoundingClientRect().top
   //经侧Y=500
    if(topY <= 500){
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


