$(document).ready(function() {
    setTimeout(() => {
        if($(window).width()>1023)
        {
            const elHeight = $(".data_with_sidebar .data").outerHeight();
            $(".data_with_sidebar .steps").outerHeight(elHeight);


            if($(".data_with_sidebar .steps").length>0)
            {   
                
                    var hash = window.location.hash;
                    var top = $(hash).position().top; // получаем координаты блока
                    $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
               
            }    
        }
    }, 1000)

   
});