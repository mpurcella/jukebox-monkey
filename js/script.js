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

/*************** Filter Menu ***************/

// Filter Menu Animation
let filterMenuBtn = document.querySelector('.filter-menu-btn');
let filterMenuCloseBtn = document.querySelector('.filter-menu-close-btn');
let accordionContainer = document.querySelector('.accordion-container');

let openFilterMenu = () => {
	if (filterMenuBtn) {
		filterMenuBtn.addEventListener('click', () => {
			accordionContainer.classList.toggle('active');
			darkBg.classList.toggle('active');
			body.classList.toggle('active');
		});
	}
};

openFilterMenu();

let closeFilterMenu = () => {
	if (filterMenuCloseBtn) {
		filterMenuCloseBtn.addEventListener('click', () => {
			accordionContainer.classList.toggle('active');
			darkBg.classList.toggle('active');
			body.classList.toggle('active');
		});
	}
};

closeFilterMenu();

// Adding Artist Selection
let artistCheckBoxes = document.querySelectorAll('.artist-filter-input');
let artistProductCards = document.querySelectorAll('.store-card');

artistCheckBoxes.forEach((artistBox) => {
	artistBox.addEventListener('click', () => {
		if (artistBox.checked === true) {
			addArtistSelection(artistBox);
		} else if (artistBox.checked === false) {
			document.getElementById(`${artistBox.value.toLowerCase().replace(/ /g, '-')}-selection`).remove();
		}
	});
});

let addArtistSelection = (artistBox) => {
	let artistSelectionContainer = document.querySelector('.artist-selection-container');
	let artistSelection = document.createElement('p');
	artistSelection.classList = 'filter-selection artist-selection';
	artistSelection.id = `${artistBox.value.toLowerCase().replace(/ /g, '-')}-selection`;
	artistSelection.innerHTML = `
					${artistBox.value}
				`;
	artistSelectionContainer.appendChild(artistSelection);
};

// Adding Product Type Selection
let productTypeCheckBoxes = document.querySelectorAll('.product-type-filter-input');

productTypeCheckBoxes.forEach((productTypeBox) => {
	productTypeBox.addEventListener('click', () => {
		if (productTypeBox.checked === true) {
			addProductTypeSelection(productTypeBox);
		} else if (productTypeBox.checked === false) {
			document.getElementById(`${productTypeBox.value}-selection`).remove();
		}
	});
});

let addProductTypeSelection = (productTypeBox) => {
	let productTypeSelectionContainer = document.querySelector('.product-type-selection-container');
	let productTypeSelection = document.createElement('p');
	productTypeSelection.classList = 'filter-selection product-type-selection';
	productTypeSelection.id = `${productTypeBox.value}-selection`;
	productTypeSelection.innerHTML = `
					${productTypeBox.value}
				`;
	productTypeSelectionContainer.appendChild(productTypeSelection);
};

// Adding Color Selection
let colorCheckBoxes = document.querySelectorAll('.color-filter-input');

colorCheckBoxes.forEach((colorBox) => {
	colorBox.addEventListener('click', () => {
		if (colorBox.checked === true) {
			addColorSelection(colorBox);
		} else if (colorBox.checked === false) {
			document.getElementById(`${colorBox.value}-selection`).remove();
		}
	});
});

let addColorSelection = (colorBox) => {
	let colorSelectionContainer = document.querySelector('.color-selection-container');
	let colorSelection = document.createElement('p');
	colorSelection.classList = 'filter-selection color-selection';
	colorSelection.id = `${colorBox.value}-selection`;
	colorSelection.innerHTML = `
					${colorBox.value}
				`;
	colorSelectionContainer.appendChild(colorSelection);
};

// Showing Filter Menu
let showFilterMenu = () => {
	let filterContainer = document.querySelector('.filter-selection-container');
	let filterCheckBoxes = document.querySelectorAll('.filter-input');
	filterCheckBoxes.forEach((checkBox) => {
		checkBox.addEventListener('click', () => {
			if (checkBox.checked === true) {
				filterContainer.classList.add('show');
			} else {
			}
		});
	});
};

// Removing All Filter Selections
let removeSelections = () => {
	let removeFilters = document.querySelector('.filter-clear');
	if (removeFilters) {
		removeFilters.addEventListener('click', () => {
			let filterSelections = document.querySelectorAll('.filter-selection');
			let filterCheckBoxes = document.querySelectorAll('.filter-input');
			let filterContainer = document.querySelector('.filter-selection-container');
			filterSelections.forEach((filter) => {
				filter.remove();
			});
			filterCheckBoxes.forEach((checkBox) => {
				checkBox.checked = false;
			});
			filterContainer.classList.remove('show');
		});
	}
};

showFilterMenu();
removeSelections();
/******************** Cart Functionality ********************/

// Updating Cart Total Price
let updateCartTotal = () => {
	let total = 0;
	let cartTotal = document.querySelector('.cart-total-number');
	let cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach((item) => {
		let cartItemPrice = parseFloat(item.querySelector('.cart-item-price').innerText.replace('$', ''));
		let cartItemQuantity = item.querySelector('.quantity-input').value;
		total += cartItemPrice * cartItemQuantity;
	});
	cartTotal.innerText = '$' + total;
};

/********************/

// Adding Items To Cart
let addToCartClicked = () => {
	let itemArtist = document.querySelector('.product-artist').innerText;
	let itemName = document.querySelector('.product-name').innerText;
	let itemSku = document.querySelector('.product-sku').innerText;
	// let itemDescriptionType = document.querySelector('.product-subname').innerText;
	// let itemDescriptionSize = document.querySelector('.size-select').value;
	let itemDescription;
	let itemPrice = document.querySelector('.product-price').innerHTML;
	let itemQuantity = document.querySelector('.quantity-select').value;
	let itemImg = document.querySelector('.featured-img').src;
	addItemToCart(
		itemArtist,
		itemName,
		itemSku,
		// itemDescriptionType,
		// itemDescriptionSize,
		itemDescription,
		itemPrice,
		itemQuantity,
		itemImg
	);
};

let addItemToCart = (
	itemArtist,
	itemName,
	itemSku,
	// itemDescriptionType,
	// itemDescriptionSize,
	itemDescription,
	itemPrice,
	itemQuantity,
	itemImg
) => {
	let cartForm = document.querySelector('.cart-form');
	let cartItemContainer = document.querySelector('.cart-item-container');
	let cartItemSkus = cartItemContainer.querySelectorAll('.cart-item-sku');
	let cartItem = document.createElement('div');
	cartItem.classList = 'col-12 cart-item';

	for (let i = 0; i < cartItemSkus.length; i++) {
		if (cartItemSkus[i].innerText === itemSku) {
			alert('Item Already Added To Cart');
			return;
		}
	}

	if (cartForm.firstElementChild.classList == 'form-top') {
		itemDescription = document.querySelector('.size-select').value;
	} else {
		itemDescription = document.querySelector('.product-subname').innerText;
	}

	cartItem.innerHTML = `
		<div class="row">
			<div class="col-4 col-sm-3 col-lg-2 cart-col item-image-col">
				<img src="${itemImg}" alt="" />
			</div>
			<div class="col-8 col-sm-6 col-lg-6 cart-col item-info-col">
				<h2 class="cart-item-artist">${itemArtist}</h2>
				<p class="cart-item-name">${itemName}<span class='cart-item-sku'>${itemSku}<span></p>
				<p class="cart-item-description">${itemDescription}</p>
			</div>
			<div class="col-8 col-sm-3 col-lg-3 cart-col item-quantity-col">
				<div class="quantity-input-container">
					<input
					class="form-control quantity-input"
					type="number"
					name="quantity"
					min="1"
					max="20"
					value="${itemQuantity}"
					/>
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
	cartItem.querySelector('.quantity-input').addEventListener('change', cartQuantityChange);
	updateCartTotal();
	updateCartIconNumber();
};

let addToCartBtn = document.querySelector('.cart-btn');
if (addToCartBtn) {
	addToCartBtn.addEventListener('click', addToCartClicked);
}

let cartForm = document.querySelector('.cart-form');
console.log(cartForm);

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
let cartQuantityChange = () => {
	updateCartTotal();
	updateCartIconNumber();
};

// Updating Cart Total after Quantity Change
let quantityInput = document.querySelectorAll('.quantity-input');
quantityInput.forEach((input) => {
	input.addEventListener('change', cartQuantityChange);
});

/********************/

// Updating Cart Icon Number
let updateCartIconNumber = () => {
	let total = 0;
	let cartIconQuantity = document.querySelector('.cart-quantity');
	let cartItems = document.querySelectorAll('.cart-item');
	cartItems.forEach((item) => {
		let cartItemQuantity = parseInt(item.querySelector('.quantity-input').value);
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
