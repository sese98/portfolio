$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

$(function(){
  $('.visual .slide').slick({
    arrows: false,  //화살표
    dots: true, //인디케이트 해제
    fade: true,//페이드효과
    autoplay:true, //자동재생
    autoplaySpeed: 5000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false   
  });
});

//스크롤애니메이션
$(function() {
  $('.animate').scrolla({
    mobile:true, //모바일버전 시 활성화
    once:false //스크롤 시 딱 한 번만 하고 싶을 땐
  })
})


//헤더 이벤트

var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

 $(window).on('scroll resize', function(){
  scrollValue = $(document).scrollTop();
  fixHeader();  
  });

//고정헤더 함수
function fixHeader(){
    if(scrollValue > 200){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}



$(function() {
  $('header .open').on('click', function(){
    $('body').css({'overflow':'hidden'});
    $('header .bg').css({'display':'block'});
    $('header nav').addClass('on');//선택한 요소에 클래스 속성값을 추가
  });
  $('nav .close, header .bg').on('click', function() { //닫기버튼과 섹션영역 클릭 시 제거
    $('body').css({'overflow':'auto'});
    $('header .bg').css({'display':'none'});
     $('header nav').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
  });
});