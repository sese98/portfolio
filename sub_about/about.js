


// let path = document.querySelector('.video path').getTotalLength();
// console.log(path);


//on이 붙었을 때 흰색
$(function(){
  let $header = $('header'); 
  let $page1 = $('.page-start1'); //색상이 변할 부분
  let $page2 = $('.page-end1'); 
  let $window = $(window);
  let pageOffsetTop1 = $page1.offset().top;//색상 변할 부분의 top값 구하기
  let pageOffsetTop2 = $page2.offset().top;
  
  // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
  //   pageOffsetTop1 = $page1.offset().top;
  // });

  $window.on('scroll', function(){ //스크롤시
    if ($window.scrollTop() > pageOffsetTop1 && $window.scrollTop() < pageOffsetTop2 -500 ) {
      $header.addClass('on');
    } else {
      $header.removeClass('on');
    };
  });
});



/////////GSAP

// profile image effect
$(function(){
  gsap.timeline({
    scrollTrigger: {
      trigger: '.profile',
      start: '0% 50%',
      end : '50% 70%',
      scrub : 1,
      // markers : true
    }
  })

  .fromTo('.profile .img1',{x: '-150%'},{x : '0%',ease:'none',duration:5},0)
  .fromTo('.profile .img2',{x: '-70%'},{x : '0%',ease:'none',duration:5},0)
  .fromTo('.profile .img3',{x: '0%'},{x : '0%',ease:'none',duration:5},0)
  .fromTo('.profile .bgStar svg', {opacity: 0}, {opacity: 1, ease:'none', duration:5}, 0)
})


// 배경색변화 gsap
$(function(){

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.video',
      start: '10% 50%',
      end : '50% 70%',
      scrub : 1, 
      // markers : true 
    }
  })

  .to('body', {backgroundColor: '#141416', color: '#fffffb', ease:'none', duration:5}, 0)

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.profile',
      start: '10% 100%',
      end : '10% 70%',
      scrub : 1, 
      // markers : true
    }
  })
  .to('body', {backgroundColor: '#fffffb', color: '#141416', ease:'none', duration:2}, 0)


})





