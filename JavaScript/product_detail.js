// First initialize the cartCount to 0. 
let cartCount = 0;

// Creating a function addCart so that the cartCount gets incremented. 
function addCart() {
    cartCount++;
    updateCartCount();
    cartMessage();
}

//  Thisfunction is responsible for displaying a message to the user when a
// product is added to the cart.
function cartMessage() {
    const cartMessage = document.getElementById('cartMessage');
    cartMessage.style.display = 'block';
    // Anonymous function. 
    setTimeout(() => {
        cartMessage.style.display = 'none';
    }, 2000);
}

// This function is responsible for displaying a message to the user when a product is not available. 
function out_StockMessage() {
    alert('Product is out of stock. Please try again later.');
}

// This function is responsible for changeing the image in the main page. 
function changeMainImage(newImage) {
    document.getElementById('mainImage').src = newImage;
}

// This is for the cart update so that the increament can go. 
function updateCartCount() {
    const cartElement = document.querySelector('.cart');
    // Ternary operator. 
    cartElement.innerText = cartCount > 0 ? ` ${cartCount}` : '';
}

// This code claculate the price of the how much quantity the user want. 
function update(operation) {
    let quantity = document.getElementById('quantity');
    let totalPrice = document.getElementById('price');
    let price = 5500;

    let current = parseInt(quantity.value);

    if (operation === 'increase') {
        quantity.value = current + 1;
    } else if (operation === 'decrease' && current > 1) {
        quantity.value = current - 1;
    }

    let total = price * parseInt(quantity.value);
    totalPrice.textContent = 'RS ' + total;
}
