/** 문장 span으로 하나하나 분열 **/
document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

// ScrollGiveClass 플러그인 호출
var sgc = new ScrollGiveClass("header", {
    baseline: 10,
});

/*풀페이지 만들기*/
// 메인영역 스와이퍼 적용
let main_swiper = new Swiper("#wrap",{
    wrapperClass: 'container',
    slideClass: 'sec',

    direction: 'vertical',

    mousewheel: true, // 마우스휠의 동작으로 화면전환
    speed: 800, // 화면전환시간

    pagination:{
        el: '.pager',
        bulletActiveClass:'active', // 활성화된 요소에 추가되는 클래스
        clickable: true, // 클릭 시 슬라이드 이동
    },
    
    thumbs:{
        slideThumbActiveClass: "active",
    },
});