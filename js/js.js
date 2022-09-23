$(function () {

    // 메뉴 버튼

    
    $('.list_box').click(function(){
        $('#myNav').css('width','100%');

    });

    $('.closebtn').click(function(){
        $('#myNav').css('width','0%');
    });
  

    if (window.matchMedia("(max-width: 766px)").matches) { 

            //    슬라이더
    var swiper = new Swiper(".myswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
   
   } else { 
   
            //    슬라이더
    var swiper = new Swiper(".myswiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
   
    }

  
});