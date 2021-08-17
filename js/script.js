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

	// Featured/Thumbail Image Hover/Change Effect
	let featuredImg = document.querySelector('.featured-img');
	let thumbnailImgs = document.getElementsByClassName('thumbnail-img');
	let activeImgs = document.getElementsByClassName('active');

	for (let i = 0; i < thumbnailImgs.length; i++) {
		thumbnailImgs[i].addEventListener('click', function () {
			if (activeImgs.length > 0) {
				activeImgs[0].classList.remove('active');
			}
			this.classList.add('active');
			featuredImg.src = this.src;
		});
	}

	// Cart Total Change
	let cartNum = document.querySelectorAll('.cart-number');
	let addToCartBtn = document.querySelectorAll('.cart-btn');
	let quantitySel = document.getElementsByClassName('.form-select');

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
		margin: 15,
		nav: true,
		navSpeed: 550,
		dots: false,
		navText: [previcon, nexticon],
		responsive: {
			0: {
				items: 1,
				stagePadding: 75
			},
			501: {
				items: 2,
				stagePadding: 75
			},
			577: {
				items: 2,
				stagePadding: 75
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

	// TAS
	$('#playTAS').click(function () {
		$('#modalVideoTAS').modal('show');
	});

	$('#modalVideoTAS').on('hidden.bs.modal', function (e) {
		$('#modalVideoTAS iframe').attr('src', $('#modalVideoTAS iframe').attr('src'));
	});

	// BO
	$('#playBO').click(function () {
		$('#modalVideoBO').modal('show');
	});

	$('#modalVideoBO').on('hidden.bs.modal', function (e) {
		$('#modalVideoBO iframe').attr('src', $('#modalVideoBO iframe').attr('src'));
	});

	// BMTH
	$('#playBMTH').click(function () {
		$('#modalVideoBMTH').modal('show');
	});

	$('#modalVideoBMTH').on('hidden.bs.modal', function (e) {
		$('#modalVideoBMTH iframe').attr('src', $('#modalVideoBMTH iframe').attr('src'));
	});

	// DK
	$('#playDK').click(function () {
		$('#modalVideoDK').modal('show');
	});

	$('#modalVideoDK').on('hidden.bs.modal', function (e) {
		$('#modalVideoDK iframe').attr('src', $('#modalVideoDK iframe').attr('src'));
	});

	// TGI
	$('#playTGI').click(function () {
		$('#modalVideoTGI').modal('show');
	});

	$('#modalVideoTGI').on('hidden.bs.modal', function (e) {
		$('#modalVideoTGI iframe').attr('src', $('#modalVideoTGI iframe').attr('src'));
	});

	// S
	$('#playS').click(function () {
		$('#modalVideoS').modal('show');
	});

	$('#modalVideoS').on('hidden.bs.modal', function (e) {
		$('#modalVideoS iframe').attr('src', $('#modalVideoS iframe').attr('src'));
	});

	// SF
	$('#playSF').click(function () {
		$('#modalVideoSF').modal('show');
	});

	$('#modalVideoSF').on('hidden.bs.modal', function (e) {
		$('#modalVideoSF iframe').attr('src', $('#modalVideoSF iframe').attr('src'));
	});

	// T
	$('#playT').click(function () {
		$('#modalVideoT').modal('show');
	});

	$('#modalVideoT').on('hidden.bs.modal', function (e) {
		$('#modalVideoT iframe').attr('src', $('#modalVideoT iframe').attr('src'));
	});

	// UO
	$('#playUO').click(function () {
		$('#modalVideoUO').modal('show');
	});

	$('#modalVideoUO').on('hidden.bs.modal', function (e) {
		$('#modalVideoUO iframe').attr('src', $('#modalVideoUO iframe').attr('src'));
	});
});
