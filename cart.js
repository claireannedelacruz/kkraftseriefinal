$(document).ready(function() {
	var productItem = [{
			productName: "TWICE Sana - DFESTA Ticket",
			price: "1449.99",
			photo: "product1.jpg"
		},
		{
			productName: "ITZY - NBD Photocard Set",
			price: "1299.99",
			photo: "product2.jpg"
		},
		{
			productName: "IVE Wonyoung - Love Dive",
			price: "999.99",
			photo: "product3.jpg"
		},
		{
			productName: "TWICE Nayeon - Withmuu V1",
			price: "299.99",
			photo: "product4.jpg"
		},
		{
			productName: "TWICE Nayeon - Withmuu V2",
			price: "299.99",
			photo: "product5.jpg"
		},
		{
			productName: "TWICE Nayeon - Withmuu V3",
			price: "299.99",
			photo: "product6.jpg"
		},
		{
			productName: "TWICE Chaeyoung - Photocard",
			price: "99.99",
			photo: "product7.jpg"
		},
		{
			productName: "TWICE - Taste of Love",
			price: "1299.99",
			photo: "product8.jpg"
		}];
	showProductGallery(productItem);
	showCartTable();
});

function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}



function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

function showCartTable() {
	var cartRowHTML = "";
	var itemCount = 0;
	var grandTotal = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;

	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		itemCount = shoppingCart.length;

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>P" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>P" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}

	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("P" + grandTotal.toFixed(2));
}


function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img src="product-images/' + item.photo + '">'+
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">P<span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
}


//navbar

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }


// Slideshow
const slidesContainers = document.querySelectorAll('.slide-container');
const wrapper = document.querySelector('.wrapper');
let panAmount = 5;
function init() {
  slidesContainers.style.width = (100 + slidesContainers.length * panAmount) + "%"; // Set wrapper width based on number of slides + panAmount.
  for (var i = 0; i < slidesContainers.length; i++) {
    slidesContainers.style.width = 100 / slidesContainers.length + "%"; // Fit slides into the wrapper.
  }
}
init();

//   modal

let cartIcon = document.querySelector("#cart-icon");
cartIcon.onclick = () => {
    cart.classList.add("active"); // Mag-open yung cart hirr (add)

};