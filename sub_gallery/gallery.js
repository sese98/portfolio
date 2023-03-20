$(function(){
  let cloneBgFixStart = $('.clone .start');
  let cloneBgFixEnd = $('.artwork.end');
  console.log(cloneBgFixEnd.offset().top)

  $(window).on('scroll', function() { //스크롤시
    if ($(window).scrollTop() > 1960 && $(window).scrollTop() < 4250) {
      $('.clone svg').addClass('on');
    } else  {
      $('.clone svg').removeClass('on');
    };
  });

})



$(function(){
  let header = $('header'); 
  let $page1 = $('.page-start1'); //색상이 변할 부분
  let $page2 = $('.page-end1'); 
  let pageOffsetTop1 = $page1.offset().top;//색상 변할 부분의 top값 구하기
  let pageOffsetTop2 = $page2.offset().top;
  
  // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
  //   pageOffsetTop1 = $page1.offset().top;
  // });

  $(window).on('scroll', function() { //스크롤시
    if ($(window).scrollTop() > pageOffsetTop1 - 500 && $(window).scrollTop() < pageOffsetTop2 -300) {
      header.addClass('on');
    } else  {
      header.removeClass('on');
    };
  });
});



$(function(){

  
  // $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
  //   pageOffsetTop1 = $page1.offset().top;
  // });
  // console.log($(window).scrollTop())

  $(window).on('scroll', function() { //스크롤시
    if ($(window).scrollTop() > 4845 && $(window).scrollTop() <= 5582) {
      $('.fix').addClass('on');
      $('.fix').removeClass('still');
    } else if ($(window).scrollTop() > 5582) {
      $('.fix').addClass('still');
    } else {
      $('.fix').removeClass('on');
    };
  });
  // alert($(window).scrollTop())
});





/////// gsap
$(function(){
  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.clone',
      start: '0% 100%',
      end : '10% 70%',
      scrub : 1, 
      // markers : true //시작위치 끝위치 확인가능한 마커
    }
  })
  .to('body', {backgroundColor: '#141416', color: '#fffffb', ease:'none', duration:2}, 0)

  gsap.timeline({ 
    scrollTrigger: {
      trigger: '.ncs',
      start: '-20% 50%',
      end : '20% 70%',
      scrub : 1, 
      // markers : true
    }
  })

  .to('body', {backgroundColor: '#fffffb', color: '#000', ease:'none', duration:5}, 0)
})




// clone slide
let list = gsap.utils.toArray('.clone ul li')
let listA = gsap.utils.toArray('.clone ul .a')
let listB = gsap.utils.toArray('.clone ul .b')
let listC = gsap.utils.toArray('.clone ul .c')
let listD = gsap.utils.toArray('.clone ul .d')
let listE = gsap.utils.toArray('.clone ul .e')
let listF = gsap.utils.toArray('.clone ul .f')
let listG = gsap.utils.toArray('.clone ul .g')
let listH = gsap.utils.toArray('.clone ul .h')
let listI = gsap.utils.toArray('.clone ul .i')

let scrollTween = gsap.to(list, {
  xPercent: -100 * (list.length - 1), 
  ease: 'none',
  scrollTrigger: {
    trigger: '.clone ul',
    pin: true,
    scrub: 1,
    end: '200%',
    // markers: true
  }
});

gsap.to(listA, {
  y: 0,
  rotation: 10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '00%',
    // markers: true
  }
})

gsap.to(listB, {
  y: 0,
  rotation: -10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listC, {
  y: 0,
  rotation: 10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listD, {
  y: 0,
  rotation: -10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listE, {
  y: 0,
  rotation: 10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listF, {
  y: 0,
  rotation: -10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listG, {
  y: 0,
  rotation: 10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listH, {
  y: 0,
  rotation: -10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})

gsap.to(listI, {
  y: 0,
  rotation: 10,
  scrollTrigger: {
    trigger: '.clone ul',
    pin: false,
    scrub: 1,
    end: '200%',
  }
})
