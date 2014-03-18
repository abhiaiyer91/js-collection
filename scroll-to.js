(function(){

$(".link").click(function(event) {
        event.preventDefault();

        var defaultAnchorOffset = 120;

        var $anchor = $('#' + this.hash.substring(1));

        var anchorOffset = $anchor.attr('data-anchor-offset');
        if (!anchorOffset) // for when anchor does have the offset attribute like Section 4
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $anchor.offset().top - anchorOffset
        }, 900);
    });




})();