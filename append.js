(function() {

$('span').each(function(){
		var $this = $(this);
		$('<h1></h1>', {
			class: 'co',
			text: $this.text()
		}).appendTo( $this.closest('p') );
	});
})();