// Album Carousel
let albums = document.querySelectorAll('.product-carousel .product-carousel-item');
albums.forEach((el) => {
	const minPerSlide = 5;
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
	const minPerSlide = 2;
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

// Modal Video Player

// Replace the 'ytplayer' element with an <iframe> and YouTube player after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'B9wvTuDC-H0', // YT video source
		playerVars: {
			playsinline: 1
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	// event.target.playVideo(); // autostart
}

function onPlayerStateChange(event) {
	// do other custom stuff here by watching the YT.PlayerState
}

function closeModal() {
	myModalEl.style.display = 'none';
	videoId.pause();
}

function loadYouTubeVideo() {
	// 2. This code loads the IFrame Player API code asynchronously.
	let tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let myModalEl = document.getElementById('videoModal');
myModalEl.addEventListener('show.bs.modal', function (event) {
	// dynamically create video when modal is opened
	loadYouTubeVideo();
});
