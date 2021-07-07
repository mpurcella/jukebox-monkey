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
	$('#playBMTH').click(function () {
		$('#modalVideoBMTH').modal('show');
	});

	$('#modalVideoBMTH').on('hidden.bs.modal', function (e) {
		$('#modalVideoBMTH iframe').attr('src', $('#modalVideoBMTH iframe').attr('src'));
	});
});
