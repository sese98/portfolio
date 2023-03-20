//1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault(); /* a 클릭할 때 위로 튕기는 이벤트의 속성을 제거하라 */
});

// 2.슬라이드
$(function () {
    $(".archive ul").slick({
        slidesToShow: 4,
        arrows: false, //화살표 사용안함
        dots: false, //닷츠
        autoplay: true, //자동재생
        // fade: true, //페이드인 효과        
        autoplaySpeed: 3000, //재생시간
        pauseOnHover: false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus: false, //포커스시 슬라이드 멈춤 해제
        centerMode: true,
        infinite: true,
        variableWidth: true
    });
});

//상단이동 부드럽게
$(function() {            
    $('.goTop').on('click', function() {
        var top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 400 );  
    });     
});  

// $('.archive ul').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
});



var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixBtnBox();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixBtnBox();
});
//고정헤더 함수
function fixBtnBox() {
    if (scrollTop > 350) {
        $('.resister').addClass('on');
        $('.top').addClass('on');
    } else {
        $('.resister').removeClass('on');
        $('.top').removeClass('on');
    }
}

// function fixBtnBox() {
//     if (scrollTop > 150) {
//         $('.resister').addClass('on');
//         $('.top').addClass('on');
//     } else if (scrollTop = 149) {
//         $('.resister').addClass('fade');
//         $('.top').addClass('fade');
//     } else {
//         $('.resister').removeClass('on');
//         $('.top').removeClass('on');

//         $('.resister').removeClass('fade');
//         $('.top').removeClass('fade');
//     }
// }

// function fixBtnBox() {
//     if (scrollTop = 149) {
//         $('.resister').addClass('fade');
//         $('.top').addClass('fade');
//     } else if (scrollTop > 150) {
//         $('.resister').addClass('on');
//         $('.top').addClass('on');
//     } else {
//         $('.resister').removeClass('on');
//         $('.top').removeClass('on');

//         $('.resister').removeClass('fade');
//         $('.top').removeClass('fade');
//     }
// }