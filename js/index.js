function sliderFeedback() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 3,
        centeredSlidesBounds: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            480: {
                // slidesPerView: 3,
                spaceBetween: 0
            },

        }
    })
}




$(document).ready(function() {
    sliderFeedback()

    $(".header__burger-block").click(function() {
        $(".header__right").toggleClass("header__right--active")
        $(".header__burger").toggleClass("header__burger--active")
    })

    $(".nav__item").click(function() {
        $(".header__right").removeClass("header__right--active")
        $(".header__burger").removeClass("header__burger--active")
    })


})