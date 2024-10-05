// Product data (could be dynamically generated from a database)
const products = [
    { name: "Product 1", price: 29.99 },
    { name: "Product 2", price: 49.99 },
    { name: "Product 3", price: 19.99 },
];

let cart = [];

const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout');

// Function to add product to cart
document.querySelectorAll('.add-to-cart').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const product = products[index];
        cart.push(product);
        updateCart();
    });
});

// Function to update cart UI
function updateCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        checkoutBtn.style.display = 'none';
    } else {
        cart.forEach(item => {
            cartItems.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        });
        checkoutBtn.style.display = 'inline-block';
    }
}

// Contact Form Submit Event
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
});
