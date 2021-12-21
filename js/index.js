$(document).ready(function() {
    $(".header__burger-block").click(function() {
        $(".header__right").toggleClass("header__right--active")
        $(".header__burger").toggleClass("header__burger--active")
    })

    $(".nav__item").click(function() {
        $(".header__right").removeClass("header__right--active")
        $(".header__burger").removeClass("header__burger--active")
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            console.log(true)
            $(".header").addClass("header--fixed")
        } else {
            $(".header").removeClass("header--fixed")
        }
    });
})