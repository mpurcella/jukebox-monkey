$(document).ready(function () {
	// Hamburger Icon & Mobile Menu Animation
	let hamBtn = document.querySelector('.hamburger-icon');
	let mainNav = document.querySelector('.main-nav');
	let darkBg = document.querySelector('.dark-bg');
	let body = document.body;

	hamBtn.addEventListener('click', () => {
		hamBtn.classList.toggle('active');
		mainNav.classList.toggle('active');
		darkBg.classList.toggle('active');
		body.classList.toggle('active');
	});

	// Carousels

	let previcon = '<i class="fas fa-location-arrow"></i>';
	let nexticon = '<i class="fas fa-location-arrow"></i>';

	// Banner Carousel
	$('.banners-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navSpeed: 650,
		dots: false,
		navText: [previcon, nexticon]
	});

	// Albums Carousel
	$('.albums-carousel').owlCarousel({
		loop: true,
		items: 1,
		margin: 15,
		stagePadding: 50,
		nav: true,
		navSpeed: 550,
		dots: false,
		navText: [previcon, nexticon],
		responsive: {
			501: {
				items: 2,
				stagePadding: 50
			},
			577: {
				items: 2,
				stagePadding: 65
			},
			769: {
				items: 2,
				stagePadding: 75
			},
			1101: {
				items: 4,
				stagePadding: 85
			}
		}
	});

	// Videos Carousel
	$('.videos-carousel').owlCarousel({
		loop: true,
		items: 1,
		margin: 15,
		nav: true,
		navSpeed: 550,
		dots: false,
		navText: [previcon, nexticon],
		responsive: {
			0: {
				items: 1,
				margin: 0,
				stagePadding: 0
			},
			769: {
				items: 1,
				stagePadding: 75
			},
			1101: {
				items: 2,
				stagePadding: 85
			}
		}
	});

	// Modal Video Player
	// BMTH
	$('#playBMTH').click(function () {
		$('#modalVideoBMTH').modal('show');
	});

	$('#modalVideoBMTH').on('hidden.bs.modal', function (e) {
		$('#modalVideoBMTH iframe').attr('src', $('#modalVideoBMTH iframe').attr('src'));
	});

	// BO
	$('#playBO').click(function () {
		$('#modalVideoBO').modal('show');
	});

	$('#modalVideoBO').on('hidden.bs.modal', function (e) {
		$('#modalVideoBO iframe').attr('src', $('#modalVideoBO iframe').attr('src'));
	});

	// TGI
	$('#playTGI').click(function () {
		$('#modalVideoTGI').modal('show');
	});

	$('#modalVideoTGI').on('hidden.bs.modal', function (e) {
		$('#modalVideoTGI iframe').attr('src', $('#modalVideoTGI iframe').attr('src'));
	});

	// TAS
	$('#playTAS').click(function () {
		$('#modalVideoTAS').modal('show');
	});

	$('#modalVideoTAS').on('hidden.bs.modal', function (e) {
		$('#modalVideoTAS iframe').attr('src', $('#modalVideoTAS iframe').attr('src'));
	});
});
