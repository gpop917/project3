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

    // 푸터 메뉴바  

    var n=1;

    $(".footer-menu1").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '300px');
            $('.footer-p-inner1').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner1').css('display','none').css('height','240px');
        }
    
        

    
    });


    $(".footer-menu2").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '400px');
            $('.footer-p-inner2').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner2').css('display','none').css('height','240px');
        }
        
    
    });
 

    $(".footer-menu3").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '220px');
            $('.footer-p-inner3').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner3').css('display','none').css('height','240px');
        }
        
    
    });

    $(".footer-menu4").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '220px');
            $('.footer-p-inner4').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner4').css('display','none').css('height','240px');
        }
        
    
    });

    $(".footer-menu5").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '190px');
            $('.footer-p-inner5').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner5').css('display','none').css('height','240px');
        }
        
    
    });

    $(".footer-menu6").click(function(){

        n++;

        if(n%2 == 0) {
            $(this).css('height', '220px');
            $('.footer-p-inner6').css('display','flex').css('height','240px');

        } else {
            $(this).css('height', '50px');
            $('.footer-p-inner6').css('display','none').css('height','240px');
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