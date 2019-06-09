window.onload = () => {
    /*Слайдер*/
    let slides = document.querySelectorAll(".slider-item"), 
        num = 0,
        slideMinus = document.querySelector(".btn-left"),
        slidePlus = document.querySelector(".btn-right"),
        slider_dots = document.querySelectorAll(".slider-dots_item");
    slidePlus.addEventListener("click", () => {
        slides[num].className = 'slider-item';
        slider_dots[num].className = 'slider-dots_item';
        num++; 
        if (num == slides.length) { 
        num = 0; 
        } 
        slides[num].className = 'slider-item showing';
        slider_dots[num].className = 'slider-dots_item active';
    });
    slideMinus.addEventListener("click", () => {
        slides[num].className = 'slider-item';
        slider_dots[num].className = 'slider-dots_item';
        if (num == 0) { 
        num = slides.length; 
        } 
        num--; 
        slides[num].className = 'slider-item showing';
        slider_dots[num].className = 'slider-dots_item active';
    });
    function autoSlide() {
        slides[num].className = 'slider-item';
        slider_dots[num].className = 'slider-dots_item';
        num++; 
        if (num == slides.length) { 
        num = 0; 
        } 
        slides[num].className = 'slider-item showing';
        slider_dots[num].className = 'slider-dots_item active'; 
    }
    setInterval(autoSlide,7000);
    /*Конец кода слайдера*/
    /*Фича - Скролл менюшки
    var scrolled;
    window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled < 600){
        $(".wrap-menu").css("opacity", "1");       
    }
    if(scrolled > 600) {
        $(".wrap-menu").css("opacity","0.7");  
    }
    }*/
    /*Скролл*/
$(document).ready(function(){
    $('.home').click(function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top },500);
        }
                return false;
    });
    $('.museum-menu').click(function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top },500);
        }
                return false;
    });
    $('.gallery-menu').click(function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top },500);
        }
                return false;
    });
    $('.contact-menu').click(function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top },500);
        }
                return false;
    });
    $(".conctacts-info__text p").addClass("ff");
            /*$('a').hover(
            function() {
                $('a').css('color','orange');
            },
            function() {
                $('a').css('color','#fff');
            }
        );*/
    var i = 0;
    $(".form__button").click(function(){
        i++;
        console.log(i);
            $('.conctacts-info__text p').css("color","green");
            $('.conctacts-info__text p').css("font-size","20px");
		if (i == 2) {
		    $(".conctacts-info__text p").css("color","red").css("font-family","Times New Roman").css("font-size","16px");
		}
		if (i == 3) {
			$(".conctacts-info__text p").css("color","blue").css("font-family","Arial");
		}
		if (i == 4) {
			$(".conctacts-info__text p").css("color","#fff").css("font-family","Verdana").css("font-weight","bold").css("border","1px solid yellow");
		} else if (i > 4) {
			$(".conctacts-info__text p").css("color","#fff").css("font-family","Arial").css("font-size","16px").css("font-weight","300").css("border","none");
			i = 0;
        }
    });
});
}