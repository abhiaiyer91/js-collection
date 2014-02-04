(function(){

//enter your identifier class, i picked span with clas co
	var co = $('span.co').each(function(){
		var $this = $(this);
//jquert create HTML class with class co & prepend to closest element, i picked p
		$('<h1></h1>', {
			class: 'co',
			text: $this.text()
		}).prependTo( $this.closest('p'));

	});

})();