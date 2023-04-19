$(document).ready(function() {
    setTimeout(() => {
        if($(window).width()>1023)
        {
            const elHeight = $(".data_with_sidebar .data").outerHeight();
            $(".data_with_sidebar .steps").outerHeight(elHeight);


            if($(".data_with_sidebar .steps").length>0)
            {   
                
                    var hash = window.location.hash+"00";
                    if(hash)
                    {
                        var top = $(hash).position().top; // получаем координаты блока
                        $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                    }
               
            }    
        }
        else
        {

            if($(".data_with_sidebar .steps").length>0)
            {                   
                var hash = window.location.hash+"00";
                if(hash)
                {
                    var left = $(hash).position().left ; // получаем координаты блока
                    $('.inner_steps').animate({scrollLeft: left }, 800); // плавно переходим к блоку
                }
               
            }    
        }
    }, 1000)

   
});

$(window).on('resize', () => {
    if($(window).width()>1023)
    {

        const elHeight = $(".data_with_sidebar .data").outerHeight();
        $(".data_with_sidebar .steps").outerHeight(elHeight);


        if($(".data_with_sidebar .steps").length>0)
        {   
                
                var hash = window.location.hash+"00";
                if(hash)
                {
                    var top = $(hash).position().top; // получаем координаты блока
                    $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                }
           
        }    
    }
    else
    {
        $(".data_with_sidebar .steps").css("height", "auto");
        if($(".data_with_sidebar .steps").length>0)
        {                   
            var hash = window.location.hash+"00";
            if(hash)
            {
                var left = $(hash).position().left ; // получаем координаты блока
                $('.inner_steps').animate({scrollLeft: left }, 800); // плавно переходим к блоку
            }
           
        }    
    }
});