(function() {
	$('dd').filter(':nth-child(n+4)').addClass('hide');
	$('dl').on('mouseenter', 'dt', function(){

		$(this)
			.next()
				.slideDown()
				.siblings('dd')
					.slideUp(200);
	})
})();