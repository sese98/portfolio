//슬라이드
if(window.innerWidth < 1200) {
  new Swiper(".swiper-container",{
      direction: "horizontal",
      slidesPerView: 1,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      paginationClickable: !0,
      spaceBetween: 0,
      autoplay: 1500,
      loop: !0
  })
} else {
  new Swiper(".swiper-container",{
      direction: "horizontal",
      slidesPerView: 1,
      parallax: !0,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      paginationClickable: !0,
      spaceBetween: 0,
      speed: 1500,
      parallax: !0,
      autoplay: 1500,
      loop: !0
  })
}

//on이 붙었을 때 흰색
$(function(){
  let $header = $('header'); 
  let $window = $(window);
  let $page1 = $('.page-start1'); //색상이 변할 부분
  let $page2 = $('.page-start2'); 
  let pageOffsetTop1 = $page1.offset().top;//색상 변할 부분의 top값 구하기
  let pageOffsetTop2 = $page2.offset().top;
  
  // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
  //   pageOffsetTop1 = $page1.offset().top;
  // });

  $window.on('scroll', function(){ //스크롤시
    if (
      $window.scrollTop() > pageOffsetTop1 -300 && 
      $window.scrollTop() < pageOffsetTop2 -300
      ) {
      $header.addClass('on');
    } else if ($window.scrollTop() < pageOffsetTop1) {
      $header.removeClass('on');
    };
  });
});


// clone path 고정
$(function(){
  // let cloneBgFixStart = $('.clone .start');
  // let cloneBgFixEnd = $('.blog.end');
  // console.log(cloneBgFixStart.offset().top)

  $(window).on('scroll', function() { //스크롤시
    if ($(window).scrollTop() > 6515 && $(window).scrollTop() < 8899) {
      $('.clone svg').addClass('on');
    } else {
      $('.clone svg').removeClass('on');
    };
  });
})

// NCS title 고정
$(function(){
  $(window).on('scroll', function() { //스크롤시
    if ($(window).scrollTop() > 5469 && $(window).scrollTop() < 6238) {
      $('.fix').addClass('on');
      $('.fix').removeClass('still');
    } else if ($(window).scrollTop() >= 6238) {
      $('.fix').addClass('still');
    } else {
      $('.fix').removeClass('on');
    };
  });
});



//////////////// GSAP
$(function(){
  gsap.timeline({ //시간순서에 따라 이벤트가 진행될 수 있도록 만들어줌
    scrollTrigger: {
      trigger: '.profile',
      start: '-20% 50%',
      end : '30% 70%',
      scrub : 1,
      // markers : true
    }
  })
    .fromTo('.profile .img1', {x: '-150%'}, {x : '0%',ease:'none', duration:5}, 0)
    .fromTo('.profile .img2', {x: '-70%'}, {x : '0%',ease:'none', duration:5}, 0)
    .fromTo('.profile .img3', {x: '0%'}, {x : '0%',ease:'none', duration:5}, 0)
    .fromTo('.profile .bgStar svg', {opacity: 0}, {opacity: 1, ease:'none', duration:5}, 0)
  
  
  // 배경색
  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.keyword',
      start: '-20% 50%',
      end : '50% 70%',
      scrub : 1, 
      // markers : true //시작위치 끝위치 확인가능한 마커
    }
  })

  .to('body', {backgroundColor: '#fffffb', color: '#000', ease:'none', duration:5}, 0)

})


