//gnb

$(function(){
  $('.gnb > li > a').on('mouseenter focus', function(){
    let index = $('.gnb > li > a').index($(this));

    $('.gnb ul.inner').removeClass('on');
    $('.gnb ul.inner:eq('+ index +')').addClass('on');  /* eq : 인덱스 숫자를 가져오는 메서드 */
  })
  $('header').on('mouseleave', function(){ /* 항상 헤더로 줘야 함 */
    $('.gnb ul.inner').removeClass('on')
  })
})



//fixheader
let scrollTop = 0
scrollTop = $(document).scrollTop();
fixHeader();

// 윈도우창조절
$(window).on('scroll resize', function(){
  scrollTop = $(document).scrollTop();
  fixHeader();
})

//고정헤더함수
function fixHeader() {
  if(scrollTop > 150) {
    $('header').addClass('on')
  } else {
    $('header').removeClass('on')
  }
}



// splitting
$(function(){Splitting();})

//slick
$(function(){
  $('.visual .slide').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true
  });
  
  $('.slick-prev').text('PREV');

  $('.slide2').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $('#slick-slide-control10').text('서울 마곡지구 업무용지')
  $('#slick-slide-control11').text('서울 마곡지구 대방디엠시티2차')
  $('#slick-slide-control12').text('화성 동탄 1차 대방디엠시티 더 센텀')
  $('#slick-slide-control13').text('광주 수완 대방노블랜드6차')
})

$(function(){
  $('.animate').scrolla({
    mobile: true,
    once: false
  })
})


