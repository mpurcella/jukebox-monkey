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

	// // Replace the 'ytplayer' element with an <iframe> and YouTube player after the API code downloads.
	// let player;
	// function onYouTubeIframeAPIReady() {
	// 	player = new YT.Player('player', {
	// 		videoId: 'B9wvTuDC-H0', // YT video source
	// 		playerVars: {
	// 			playsinline: 1
	// 		},
	// 		events: {
	// 			onReady: onPlayerReady,
	// 			onStateChange: onPlayerStateChange
	// 		}
	// 	});
	// }

	// function onPlayerReady(event) {
	// 	// event.target.playVideo(); // autostart
	// }

	// function onPlayerStateChange(event) {
	// 	// do other custom stuff here by watching the YT.PlayerState
	// }

	// function closeModal() {
	// 	myModalEl.style.display = 'none';
	// 	videoId.pause();
	// }

	// function loadYouTubeVideo() {
	// 	// 2. This code loads the IFrame Player API code asynchronously.
	// 	let tag = document.createElement('script');
	// 	tag.src = 'https://www.youtube.com/iframe_api';
	// 	let firstScriptTag = document.getElementsByTagName('script')[0];
	// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	// }

	// let myModalEl = document.getElementById('videoModalBMTH');
	// myModalEl.addEventListener('show.bs.modal', function (event) {
	// 	// dynamically create video when modal is opened
	// 	loadYouTubeVideo();
	// });

	let $videoSrc;
	$('.video-container').click(function () {
		$videoSrc = $(this).data('src');
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
