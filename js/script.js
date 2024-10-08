/** 문장 span으로 하나하나 분열 **/
document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

// ScrollGiveClass 플러그인 호출
var sgc = new ScrollGiveClass("header", {
    baseline: 10,
});

/*풀페이지 만들기*/
// 메인영역 스와이퍼 적용

var header = document.getElementsByTagName("header")[0];
var prevClass = null;
var activeClass = null;

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
    
    // class 만들기
    on:{
        afterInit: function(){
            activeClass = "view" + this.activeIndex;
            header.classList.add(activeClass);
            prevClass = activeClass;
        },
        slideChange:function(){ // slideChangeTransitionEnd:function()
            activeClass = "view" + this.activeIndex;
            header.classList.replace(prevClass, activeClass);
            prevClass = activeClass;
        }
    },
});



// 메인영역2 이미지 스와이퍼 적용
let main_img_swiper = new Swiper("#main_2",{
    wrapperClass: 'change_img',
    slideClass: 'slide_img',

    slidesPerView : 1,

    effect:'fade',
    speed:800,

    autoplay: {
        delay: 2100,
        disableOnInteraction: false,
    },

    observer: true,
    observeParents: true,
});

//var header = document.getElementsByTagName("header");

main_swiper.on('slideChangeTransitionEnd', function () {
    main_img_swiper.slideTo(0);
    //header[0].classList.replace("view"+ this.activeIndex);
});


// 메인영역3 이미지 스와이퍼 적용
let main3_img_swiper = new Swiper("#main_3",{
    wrapperClass: 'change_img',
    slideClass: 'slide_img',

    slidesPerView: 1,
    spaceBetween: 10,

    effect:'fade',
    speed:800,
    fadeEffect: { 
        crossFade: true,
    },
    

    autoplay: {
        delay: 2600,
        disableOnInteraction: false,
    },

    observer: true,
    observeParents: true,
});

main_swiper.on('slideChangeTransitionEnd', function () {
    main3_img_swiper.slideTo(0);
    //header[0].classList.replace("view"+ this.activeIndex);
});


// 메인영역5 이미지 스와이퍼 적용
let main5_img_swiper = new Swiper("#main_5",{
    wrapperClass: 'change_img',
    slideClass: 'slide_img',

    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },

    loop: true,

    // 카드 효과
    effect: "cards",
    grabCursor: true,
    centerdSlides: true,
});

main_swiper.on('slideChangeTransitionEnd', function () {
    main5_img_swiper.slideTo(0);
    //header[0].classList.replace("view"+ this.activeIndex);
});

// 메인영역 이미지 스와이퍼 적용
let main6_img_swiper = new Swiper("#main_6",{
    wrapperClass: 'change_img',
    slideClass: 'slide_img',

    effect:'fade',
    speed:800,

    loop: true,

    autoplay: {
        delay: 2600,
        disableOnInteraction: false,
    },

    observer: true,
    observeParents: true,
});

main_swiper.on('slideChangeTransitionEnd', function () {
    main6_img_swiper.slideTo(0);
});