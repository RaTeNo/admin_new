$(() => {

	$(".js-total-quest").text(quests.length);

	let current_quest = 1;

	$(".js-quest").text(quests[current_quest-1].quest);

	$(".js-answer").html(quests[current_quest-1].answer);

	if(quests[current_quest-1].image)
	{
		$(".hint_item-images a").attr("href", quests[current_quest-1].image)
		$(".hint_item-images img").attr("src", quests[current_quest-1].image)
	}	

	$(".js-answer span").each(function() {
	    $(this).data("quest", $(this).text()).text(".................................................");
	    //console.log($(this).data("quest"));
	});

	$(".js-show-podskazka").on("click", function(e){
    	e.preventDefault();
    	$(".hint[data-type='podskazka']").fadeIn();
    	$(".card_item").hide();
    });	

	let number_hide = 1;

    $(".js-show-more").on("click", function(e){
    	e.preventDefault();
    	$(".js-answer span.hide"+number_hide).each(function() {
		    $(this).text($(this).data("quest"));	    
		});
		number_hide++;

		if(number_hide==3)
		{
			$(this).hide();
		}
    });	

    $(".js-show-quest").on("click", function(e){
    	e.preventDefault();
    	$(".hint").hide();
    	$(".card_item").fadeIn();
    	$(".js-show-answer").removeClass("complete");
    });	 

    $('body').on('click', '.js-show-answer:not(.complete)', function (e) {   
    	e.preventDefault();     	
    	$(".js-show-more").hide();
    	$(".card_item").hide();
    	$(".hint[data-type='podskazka']").fadeIn();

    	$(".js-answer span").each(function() {
		    $(this).text($(this).data("quest"));	    
		});

		if($(".hint_item-images a").attr("href")!=""){
			$(".hint_item-images").show();
		}

		$(".js-show-answer").addClass("complete");
    });	

    $('body').on('click', '.js-show-answer.complete', function (e) {   
    	e.preventDefault();  

    	if(quests.length!=current_quest)
    	{
    		number_hide = 1;
	    	current_quest++;
	    	
	    	$(".js-current-quest").text(current_quest);

	    	$(".js-show-more").show();
	    	$(".card_item").fadeIn();
	    	$(".hint[data-type='podskazka']").hide();
	    	$(".hint_item-images").hide();
	    	$(".js-show-answer").removeClass("complete");

	    	$(".js-quest").text(quests[current_quest-1].quest);

			$(".js-answer").html(quests[current_quest-1].answer);

			if(quests[current_quest-1].image)
			{
				$(".hint_item-images a").attr("href", quests[current_quest-1].image)
				$(".hint_item-images img").attr("src", quests[current_quest-1].image)
			}	
			else
			{	
				$(".hint_item-images a").attr("href", "")
				$(".hint_item-images img").attr("src", "")
			}

			$(".js-answer span").each(function() {
			    $(this).data("quest", $(this).text()).text(".................................................");		    
			});
    	}
    	else
    	{
    		// передаем какие-то данные
    		alert("закончили рассчет")
    	}

    });	

    /*$(".js-show-podskazka").on("click", function(e){
    	e.preventDefault();
    	$(".hint[data-type='podskazka']").fadeIn();
    	$(".card_item").hide();
    });	

    $(".js-show-answer").on("click", function(e){
    	e.preventDefault();
     	$(".hint").hide();
    	$(".hint[data-type='answer']").fadeIn();
    	$(".card_item").hide();
    });	

    $(".js-show-quest").on("click", function(e){
    	e.preventDefault();
    	$(".hint").hide();
    	$(".card_item").fadeIn();
    });	 

    $(".js-show-more").on("click", function(e){
    	e.preventDefault();
        $(this).hide();
    	$(this).closest(".hint_item").find(".hint_item-text").hide();
    	$(this).closest(".hint_item").find(".hint_item-text-more").fadeIn();
    });	 */  

    

    
})
