$(document).ready(function() {

    $(".inner_steps .step").click(function (e) {
        e.preventDefault();
        let id = $(this).data("id");
        $(".steps_data_js").fadeOut(200).removeClass("active");
        setTimeout(() => {
            $(".steps_data_js[data-id='"+id+"']").fadeIn(200).addClass("active");
        }, 200);

        $(".comments_data_js").fadeOut(200);
        setTimeout(() => {
            $(".comments_data_js[data-id='"+id+"']").fadeIn(200);
        }, 200);

        setTimeout(() => {    
            if($(window).width()>1023)
            {        
                const elHeight = $(".data_with_sidebar .data.active").outerHeight();
                $(".data_with_sidebar .steps").outerHeight(elHeight);
            }
        }, 500);
    });



    setTimeout(() => {
        if($(window).width()>1023)
        {
            const elHeight = $(".data_with_sidebar .data").outerHeight();
            $(".data_with_sidebar .steps").outerHeight(elHeight);


            /*if($(".data_with_sidebar .steps").length>0)
            {   
                
                    var hash = window.location.hash+"00";
                    if(hash)
                    {
                        var top = $(hash).position().top; // получаем координаты блока
                        $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                    }
               
            }   */ 
        }
        else
        {

            /*if($(".data_with_sidebar .steps").length>0)
            {                   
                var hash = window.location.hash+"00";
                if(hash)
                {
                    var left = $(hash).position().left ; // получаем координаты блока
                    $('.inner_steps').animate({scrollLeft: left }, 800); // плавно переходим к блоку
                }
               
            }  */  
        }
    }, 0)

   
});

$(window).on('resize', () => {
    if($(window).width()>1023)
    {

        const elHeight = $(".data_with_sidebar .data").outerHeight();
        $(".data_with_sidebar .steps").outerHeight(elHeight);


        /*if($(".data_with_sidebar .steps").length>0)
        {   
                
                var hash = window.location.hash+"00";
                if(hash)
                {
                    var top = $(hash).position().top; // получаем координаты блока
                    $('.inner_steps').animate({scrollTop: top}, 800); // плавно переходим к блоку
                }
           
        }   */ 
    }
    else
    {
        $(".data_with_sidebar .steps").css("height", "auto");        
    }
});