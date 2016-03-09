$('.gallery').click(function() {
	$(this).toggle('.photo-gallery');
})

$('.thumbnail').click(function() {
	$(this).toggleClass('full-size');
})

$('.full-size').click(function() {
	$(this).next('.thumbnail');
})

