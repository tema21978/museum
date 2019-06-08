window.onload = () => {
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
}