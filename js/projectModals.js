$('img[hasModal]').addClass('img-enlargable').click(function() {
	$(".overlay").show();
	var src = $(this).attr('src');
	var modal;

	function removeModal() {
		modal.remove();
		$('body').off('keyup.modal-close');
	}
	modal = $('<div class="modal-animate">').css({
		background: 'url(' + src + ') no-repeat center',
		backgroundSize: 'contain',
		width: '100%',
		height: '60%',
		position: 'fixed',
		zIndex: '10',
		top: '20%',
		left: '0',
		cursor: 'pointer'

	}).click(function() {
		$(".overlay").hide();
		removeModal();
		event.stopPropagation();
	}).appendTo('body');

	$(".overlay").click(function() {
		$(".overlay").hide();
		removeModal();
		event.stopPropagation();
	});

	//handling ESC
	$('body').on('keyup.modal-close', function(e) {
		if (e.key === 'Escape') {
			$(".overlay").hide();
			removeModal();
			event.stopPropagation();
		}
	});
});