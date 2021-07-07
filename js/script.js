$(document).ready(function () {
	// Album Carousel
	let albums = document.querySelectorAll('.product-carousel .product-carousel-item');
	albums.forEach((el) => {
		let minPerSlide = 5;
		let next = el.nextElementSibling;
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				// wrap carousel by using first child
				next = albums[0];
			}
			let cloneChild = next.cloneNode(true);
			el.appendChild(cloneChild.children[0]);
			next = next.nextElementSibling;
		}
	});

	// Video Carousel
	let videos = document.querySelectorAll('.videos-carousel .videos-carousel-item');
	videos.forEach((el) => {
		let minPerSlide = 2;
		let next = el.nextElementSibling;
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				// wrap carousel by using first child
				next = videos[0];
			}
			let cloneChild = next.cloneNode(true);
			el.appendChild(cloneChild.children[0]);
			next = next.nextElementSibling;
		}
	});

	// Modal Video Player - BMTH

	let $videoSrc;
	$('.video-container').click(function () {
		$videoSrc = $(this).attr('data-tagVideo');
	});
	console.log($videoSrc);

	// when the modal is opened autoplay it
	$('#videoModalBMTH').on('shown.bs.modal', function (e) {
		// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
		$('#video').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
	});

	// stop playing the youtube video when I close the modal
	$('#videoModalBMTH').on('hide.bs.modal', function (e) {
		// a poor man's stop video
		$('#video').attr('src', $videoSrc);
	});
});
