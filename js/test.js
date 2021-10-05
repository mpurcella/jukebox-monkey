// Adding Items To Cart
let addCartItem = (e) => {
	let itemContainer = e.target.parentElement.parentElement.parentElement.parentElement;
	let itemArtist = itemContainer.querySelector('.product-artist').innerText;
	let itemName = itemContainer.querySelector('.product-name').innerText;
	let itemDescriptionType = itemContainer.querySelector('.product-subname').innerText;
	// let itemDescriptionSize = itemContainer.querySelector('.size-select').value;
	let itemPrice = itemContainer.querySelector('.product-price').innerText;
	let itemQuantity = itemContainer.querySelector('.quantity-select').value;
	let itemImg = itemContainer.querySelector('.featured-img').src;
	let cartItemContainer = document.querySelector('.cart-item-container');

	if (itemDescriptionSize === 'Select a Size') {
		alert('Please Select A Size');
	} else {
		// Creates Cart Item
		let cartItem = document.createElement('div');
		cartItem.classList = 'col-12 cart-item';
		cartItemContainer.appendChild(cartItem);

		// Creates Row In Cart Item
		let cartItemRow = document.createElement('div');
		cartItemRow.classList = 'row';
		cartItem.appendChild(cartItemRow);

		// Creates Image Column In Cart Item Row
		let itemImageCol = document.createElement('div');
		itemImageCol.classList = 'col-4 col-sm-3 col-lg-2 cart-col item-image-col';
		cartItemRow.appendChild(itemImageCol);

		// Creates Image In Item Column
		let cartImg = document.createElement('img');
		cartImg.src = itemImg;
		itemImageCol.appendChild(cartImg);

		// Creates Item Info Column in Cart Item Row
		let itemInfoCol = document.createElement('div');
		itemInfoCol.classList = 'col-8 col-sm-6 col-lg-6 cart-col item-info-col';
		cartItemRow.appendChild(itemInfoCol);

		// Creates Item Info For Info Column --- NEEDS WORK
		let itemInfoArtist = document.createElement('h2');
		let itemInfoName = document.createElement('p');
		let itemInfoDescription = document.createElement('p');
		itemInfoArtist.classList = 'cart-item-artist';
		itemInfoArtist.textContent = itemArtist;
		itemInfoName.classList = 'cart-item-name';
		itemInfoName.textContent = itemName;
		itemInfoDescription.classList = 'cart-item-description';
		itemInfoDescription.textContent = itemDescriptionType;
		// itemInfoDescription.textContent = itemDescriptionSize;
		itemInfoCol.appendChild(itemInfoArtist);
		itemInfoCol.appendChild(itemInfoName);
		itemInfoCol.appendChild(itemInfoDescription);

		// Creates Item Quantity Column
		let itemQuantityCol = document.createElement('div');
		itemQuantityCol.classList = 'col-8 col-sm-3 col-lg-3 cart-col item-quantity-col';
		cartItemRow.appendChild(itemQuantityCol);

		// Creates Quantity Select Container In Item Quantity Column
		let quantitySelectContainer = document.createElement('div');
		quantitySelectContainer.classList = 'quantity-select-container';
		itemQuantityCol.appendChild(quantitySelectContainer);

		// Creates Select in Quantity Select Container --- NEEDS WORK
		let quantitySelect = document.createElement('select');
		quantitySelect.classList = 'form-select quantity-select';
		quantitySelect.value = itemQuantity;
		quantitySelect.ariaLabel = 'Quantity Select';
		quantitySelectContainer.appendChild(quantitySelect);

		// Creates Options/Values in Select
		let option1 = document.createElement('option');
		option1.value = '1';
		option1.textContent = '1';
		let option2 = document.createElement('option');
		option2.value = '2';
		option2.textContent = '2';
		let option3 = document.createElement('option');
		option3.value = '3';
		option3.textContent = '3';
		let option4 = document.createElement('option');
		option4.value = '4';
		option4.textContent = '4';
		let option5 = document.createElement('option');
		option5.value = '5';
		option5.textContent = '5';
		let option6 = document.createElement('option');
		option6.value = '6';
		option6.textContent = '6';
		let option7 = document.createElement('option');
		option7.value = '7';
		option7.textContent = '7';
		let option8 = document.createElement('option');
		option8.value = '8';
		option8.textContent = '8';
		let option9 = document.createElement('option');
		option9.value = '9';
		option9.textContent = '9';
		let option10 = document.createElement('option');
		option10.value = '10';
		option10.textContent = '10';
		let option11 = document.createElement('option');
		option11.value = '11';
		option11.textContent = '11';
		let option12 = document.createElement('option');
		option12.value = '12';
		option12.textContent = '12';
		let option13 = document.createElement('option');
		option13.value = '13';
		option13.textContent = '13';
		let option14 = document.createElement('option');
		option14.value = '14';
		option14.textContent = '14';
		let option15 = document.createElement('option');
		option15.value = '15';
		option15.textContent = '15';
		let option16 = document.createElement('option');
		option16.value = '16';
		option16.textContent = '16';
		let option17 = document.createElement('option');
		option17.value = '17';
		option17.textContent = '17';
		let option18 = document.createElement('option');
		option18.value = '18';
		option18.textContent = '18';
		let option19 = document.createElement('option');
		option19.value = '19';
		option19.textContent = '19';
		let option20 = document.createElement('option');
		option20.value = '20';
		option20.textContent = '20';
		quantitySelect.appendChild(option1);
		quantitySelect.appendChild(option2);
		quantitySelect.appendChild(option3);
		quantitySelect.appendChild(option4);
		quantitySelect.appendChild(option5);
		quantitySelect.appendChild(option6);
		quantitySelect.appendChild(option7);
		quantitySelect.appendChild(option8);
		quantitySelect.appendChild(option9);
		quantitySelect.appendChild(option10);
		quantitySelect.appendChild(option11);
		quantitySelect.appendChild(option12);
		quantitySelect.appendChild(option13);
		quantitySelect.appendChild(option14);
		quantitySelect.appendChild(option15);
		quantitySelect.appendChild(option16);
		quantitySelect.appendChild(option17);
		quantitySelect.appendChild(option18);
		quantitySelect.appendChild(option19);
		quantitySelect.appendChild(option20);

		// Creates Cart Item Price
		let cartItemPrice = document.createElement('p');
		cartItemPrice.classList = 'cart-item-price';
		cartItemPrice.textContent = itemPrice;
		itemQuantityCol.appendChild(cartItemPrice);

		// Creates Remove Btn Container
		let removeBtnContainer = document.createElement('div');
		removeBtnContainer.classList = 'col-4 col-sm-12 col-lg-1 d-flex align-items-center remove-btn-container';
		cartItemRow.appendChild(removeBtnContainer);

		// Creates Remove Btn Icon In Remove Btn Container
		let removeBtnIcon = document.createElement('i');
		removeBtnIcon.classList = 'fas fa-times-circle remove-btn';
		removeBtnContainer.appendChild(removeBtnIcon);

		updateCartIconNumber();
		updateCartTotal();
	}
};

let addToCartBtn = document.querySelector('.cart-btn');
if (addToCartBtn) {
	addToCartBtn.addEventListener('click', addCartItem);
}

/****************************FULL JS */

/*************** Carousels ***************/

// Carousel Next/Prev Icon
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
	margin: 6,
	nav: true,
	navSpeed: 550,
	dots: false,
	navText: [previcon, nexticon],
	responsive: {
		0: {
			items: 1,
			stagePadding: 55,
			margin: 8
		},
		501: {
			items: 2,
			stagePadding: 55
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
			stagePadding: 75
		}
	}
});

// Videos Carousel
$('.videos-carousel').owlCarousel({
	loop: true,
	items: 1,
	margin: 6,
	nav: true,
	navSpeed: 550,
	dots: false,
	navText: [previcon, nexticon],
	responsive: {
		0: {
			margin: 0,
			stagePadding: 0
		},
		769: {
			stagePadding: 75
		},
		1101: {
			items: 2,
			stagePadding: 75
		}
	}
});

/*************** Hamburger Icon & Mobile Menu Animation ***************/

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

/*************** Featured/Thumbail Image Click/Change Effect ***************/

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

/*************** Filter Menu Animation ***************/

let filterMenuBtn = document.querySelector('.filter-menu-btn');
let filterMenuCloseBtn = document.querySelector('.filter-menu-close-btn');
let accordionContainer = document.querySelector('.accordion-container');

if (filterMenuBtn) {
	filterMenuBtn.addEventListener('click', () => {
		accordionContainer.classList.toggle('active');
		darkBg.classList.toggle('active');
		body.classList.toggle('active');
	});
}

if (filterMenuCloseBtn) {
	filterMenuCloseBtn.addEventListener('click', () => {
		accordionContainer.classList.remove('active');
		darkBg.classList.remove('active');
		body.classList.remove('active');
	});
}

/******************** Cart Functionality ********************/

// Products
let products = [
	{
		artist: 'Bad Omens',
		name: 'Finding God Before God Finds Me',
		tag: 'fgbgfmcd',
		description: 'CD',
		price: 10,
		inCart: 0
	},
	{
		artist: 'Bad Omens',
		name: 'Waning Crescent Zip',
		tag: 'waningcrescentzip',
		description: 'Zip-Up',
		price: 45,
		inCart: 0
	},
	{
		artist: 'Black Veil Brides',
		name: 'Bundle #1',
		tag: 'bundle1',
		description: 'Bundle',
		price: 100,
		inCart: 0
	},
	{
		artist: 'Miss May I',
		name: 'Gargoyle Long Sleeve',
		tag: 'gargoylelongsleeve',
		description: 'Long Sleeve Tee',
		price: 30,
		inCart: 0
	},
	{
		artist: 'Miss May I',
		name: 'Deathless',
		tag: 'deathlessvinylclear',
		description: 'Vinyl - Clear w/ Black Splatter',
		price: 35,
		inCart: 0
	}
];

// Updating Cart Total Price
let updateCartTotal = () => {
	let total = 0;
	let cartTotal = document.querySelector('.cart-total-number');
	let cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach((item) => {
		let cartItemPrice = parseFloat(item.querySelector('.cart-item-price').innerText.replace('$', ''));
		let cartItemQuantity = item.querySelector('.quantity-select').value;
		total += cartItemPrice * cartItemQuantity;
	});
	cartTotal.innerText = '$' + total;
};

/********************/

// Adding Items To Cart
let addCartItem = (e) => {
	let itemContainer = e.target.parentElement.parentElement.parentElement.parentElement;
	let itemArtist = itemContainer.querySelector('.product-artist').innerText;
	let itemName = itemContainer.querySelector('.product-name').innerText;
	let itemDescriptionType = itemContainer.querySelector('.product-subname').innerText;
	// let itemDescriptionSize = itemContainer.querySelector('.size-select').value;
	let itemPrice = itemContainer.querySelector('.product-price').innerHTML;
	let itemQuantity = itemContainer.querySelector('.quantity-select').value;
	let itemImg = itemContainer.querySelector('.featured-img').src;

	addCartItemContent(
		itemArtist,
		itemName,
		itemDescriptionType,
		// itemDescriptionSize,
		itemPrice,
		itemQuantity,
		itemImg
	);
};

let addCartItemContent = (
	itemArtist,
	itemName,
	itemDescriptionType,
	// itemDescriptionSize,
	itemPrice,
	itemQuantity,
	itemImg
) => {
	let cartItemContainer = document.querySelector('.cart-item-container');
	let cartItem = document.createElement('div');
	cartItem.classList = 'col-12 cart-item';
	let cartItemNames = document.querySelectorAll('.cart-item-name');

	cartItemNames.forEach((item) => {
		if (item.innerText === itemName) {
			alert('That Item Is Already In Your Cart');
		}
	});

	// if (itemDescriptionSize === 'Select a Size') {
	// 	alert('Please Select a Size');
	// 	return;
	// }

	cartItem.innerHTML = `
		<div class="row">
			<div class="col-4 col-sm-3 col-lg-2 cart-col item-image-col">
				<img src="../../images/merch/bad-omens/album.jpg" alt="" />
			</div>
			<div class="col-8 col-sm-6 col-lg-6 cart-col item-info-col">
				<h2 class="cart-item-artist">${itemArtist}</h2>
				<p class="cart-item-name">${itemName}</p>
				<p class="cart-item-description">${itemDescriptionType}</p>
			</div>
			<div class="col-8 col-sm-3 col-lg-3 cart-col item-quantity-col">
				<div class="quantity-select-container">
					<select
						class="form-select quantity-select"
						aria-label="Quantity Select"
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
					</select>
				</div>
				<p class="cart-item-price">${itemPrice}</p>
			</div>
			<div
				class="
					col-4 col-sm-12 col-lg-1
					d-flex
					align-items-center
					remove-btn-container
				"
			>
				<i class="fas fa-times-circle remove-btn"></i>
			</div>
		</div>`;
	cartItemContainer.appendChild(cartItem);
	cartItem.querySelector('.remove-btn').addEventListener('click', removeCartItem);
	cartItem.querySelector('.quantity-select').addEventListener('change', quantityChange);
	updateCartTotal();
	updateCartIconNumber();
};

let addToCartBtn = document.querySelector('.cart-btn');
if (addToCartBtn) {
	addToCartBtn.addEventListener('click', addCartItem);
}

/********************/

// Removing Items From Cart (Function)
let removeCartItem = (e) => {
	e.target.parentElement.parentElement.parentElement.remove();
	updateCartTotal();
	updateCartIconNumber();
};

// Removing Items From Cart
let removeBtn = document.querySelectorAll('.remove-btn');
removeBtn.forEach((btn) => {
	btn.addEventListener('click', removeCartItem);
});

/********************/

// Updating Cart Total after Quantity Change (Function)
let quantityChange = () => {
	updateCartTotal();
	updateCartIconNumber();
};

// Updating Cart Total after Quantity Change
let quantityInput = document.querySelectorAll('.quantity-select');
quantityInput.forEach((input) => {
	input.addEventListener('change', quantityChange);
});

/********************/

// Updating Cart Icon Number
let updateCartIconNumber = () => {
	let total = 0;
	let cartIconQuantity = document.querySelector('.cart-quantity');
	let cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach((item) => {
		let cartItemQuantity = parseInt(item.querySelector('.quantity-select').value);
		total += cartItemQuantity;
	});
	cartIconQuantity.textContent = total;
};

updateCartIconNumber();

/******************** Modal Video Players ********************/

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

// MMI
$('#playMMI').click(function () {
	$('#modalVideoMMI').modal('show');
});

$('#modalVideoMMI').on('hidden.bs.modal', function (e) {
	$('#modalVideoMMI iframe').attr('src', $('#modalVideoMMI iframe').attr('src'));
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
