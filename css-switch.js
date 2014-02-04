(function() {
	var link = $('link');
	$('button').on('click', function(){
		var $this = $(this),
			stylesheet = $this.data('file');
		link.attr('href', stylesheet + '.css');
		
		$this
			.siblings('button')
				.removeAttr('disabled')
				.end()
				.attr('disabled', 'disabled');
	});
})();