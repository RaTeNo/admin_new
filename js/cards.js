$(() => {

    $(".js-show-podskazka").on("click", function(e){
    	e.preventDefault();
    	$(".hint[data-type='podskazka']").show();
    	$(".card_item").hide();
    });	

    $(".js-show-answer").on("click", function(e){
    	e.preventDefault();
     	$(".hint").hide();
    	$(".hint[data-type='answer']").show();
    	$(".card_item").hide();
    });	

    $(".js-show-quest").on("click", function(e){
    	e.preventDefault();
    	$(".hint").hide();
    	$(".card_item").show();
    });	 

    $(".js-show-more").on("click", function(e){
    	e.preventDefault();
    	$(this).closest(".hint_item").find(".hint_item-text").hide();
    	$(this).closest(".hint_item").find(".hint_item-text-more").show();
    });	   

    

    
})
