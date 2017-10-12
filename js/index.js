



var foot=document.querySelector('.foot');
var navbar=document.querySelector('.navbar');

    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        navbar.style.opacity=.5;
        foot.style.opacity=.5;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        foot.style.opacity=1;
        navbar.style.opacity=1;       
    }, false)