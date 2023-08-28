// 헤더 색변화 스크립트
$(function(){
  let header = $('header'); 
  let $page1 = $('.page-start1'); 
  let $page2 = $('.page-end1'); 
  let $page3 = $('.page-start2'); 
  let $page4 = $('.page-end2'); 
  let pageOffsetTop1 = $page1.offset().top;
  let pageOffsetTop2 = $page2.offset().top;
  let pageOffsetTop3 = $page3.offset().top;
  let pageOffsetTop4 = $page4.offset().top;
  
  // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
  //   pageOffsetTop1 = $page1.offset().top;
  // });

  $(window).on('scroll', function() { //스크롤시
    if (
      $(window).scrollTop() > pageOffsetTop1 -500 && 
      $(window).scrollTop() < pageOffsetTop2 - 200 || 
      $(window).scrollTop() > pageOffsetTop3 -200 && 
      $(window).scrollTop() < pageOffsetTop4 - 200
      ) {
      header.addClass('on');
    } else  {
      header.removeClass('on');
    };
  });
});


// 레퍼런스 리서칭 slick

$('.autoplay').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  arrows: false,
  variableWidth: true,
  infinite: true,
  adaptiveHeight: true
});



$(function(){
  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.txt-bar',
      start: '30% 50%',
      end : '140% 50%',
      scrub : 1, 
      // markers : true
    }
  })
  .to('body', {backgroundColor: '#141416', color: '#fffffb', ease:'none', duration:5}, 0)

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.ideaSketch',
      start: '0% 50%',
      end : '10% 50%',
      scrub : 1, 
      // markers : true
    }
  })
  .to('body', {backgroundColor: '#fffffb', color: '#141416', ease:'none', duration:5}, 0)
  // .to('body', {filter: "invert(" + 100 + "%)"}, 0)

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.wireFrame',
      start: '10% 50%',
      end : '20% 50%',
      scrub : 1, 
      // markers : true
    }
  })
  .to('body', {backgroundColor: '#141416', color: '#fffffb', ease:'none', duration:5}, 0)

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.outcome',
      start: '0% 50%',
      end : '10% 50%',
      scrub : 1, 
      // markers : true
    }
  })
  .to('body', {backgroundColor: '#fffffb', color: '#141416', ease:'none', duration:5}, 0)

})





// let path = document.querySelector('.middleLine1 #패스_248').getTotalLength();
// console.log(path);
