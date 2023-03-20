$(document).on('click', 'a[href="#"]', function (e) {
  e.preventDefault(); /* a 클릭할 때 위로 튕기는 이벤트의 속성을 제거하라 */
});


$('.topBtn').click(function(){
	$('html, body').animate({scrollTop:0},0);
	return false;
});

//상단이동 부드럽게
$(function() {            
  $('.goTop').on('click', function() {
    let top = $('body').offset().top;
    $('html, body').animate( { scrollTop : (top) }, 400 );  
  });     
});  

//gsap
gsap.registerPlugin(ScrollTrigger)/* 스크롤 틑리거를 원활하게 해줌 */

// splitting
$(function(){Splitting();})

//scrolla
$(function () {
  $('.animate').scrolla({
      mobile: true, //모바일버전시 활성화
      once: false //스크롤시 딱 한번만 하고싶을땐 true
  });
});


//메뉴 토글
$(function() {
  $('header .menuBar').on('click', function(){
    $('header nav').toggleClass('toggle');
  });
});


// svg길이 구하기
// $(function(){
//   $('.venn').find('.arrowAni2').each(function(i, path){
//     var length = path.getTotalLength();
//     alert(length);
//   })
// });

// let path = document.querySelector('.skills .chart61percent path').getTotalLength();
// console.log(path);
