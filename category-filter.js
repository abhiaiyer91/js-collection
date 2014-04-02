(function(){

	$('ul#filter a').on('click', function(){

 		$('ul#filter .active').removeClass('active');
 		$(this).parent().addClass('active');	
 		var filterVal = $(this).text().toLowerCase();
 		console.log(filterVal);
 		if(filterVal == 'all-products') {
     		$('div.shoppa div.lola.hidden').fadeIn('slow').removeClass('hidden');
 		}	
 		else {
    		$('div.shoppa div.lola').each(function() {
	         if(!$(this).hasClass(filterVal)) {
            $(this).fadeToggle('slow').addClass('hidden');
        } else {
            $(this).fadeIn('slow');
        }
    });
}
 		return false;
	});

})();