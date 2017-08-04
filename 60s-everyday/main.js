$('.container .play').on('click', function(e) {
  let $play = $(e.currentTarget)
  let $line = $play.closest('.container').find('.move-line')
  if ($play.hasClass('active')) {
    $play.removeClass('active')
     $line.removeClass('active')
  } else {
    $play.addClass('active')
     $line.addClass('active')
  }
  let number = 0
  // $('.start-time').text(number)
})