// Get all the increment and decrement buttons
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const quantityInputs = document.querySelectorAll('.quantity');
const addToCartButtons = document.querySelectorAll('.cart');
const cartNumber = document.querySelector('.cart-number');

// Initialize the cart count
let cartCount = 0;

// Add click event listeners for "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        cartCount += 1;
        cartNumber.textContent = cartCount;

        // Handle the animation
        button.classList.add('added');

        setTimeout(() => {
            button.classList.remove('added');
        }, 500);

        // Reset the associated quantity input to 1
        quantityInputs[index].value = 1;
    });
});

// Add click event listeners for increment buttons
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityInput = quantityInputs[index];
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 100) { // Limit the maximum quantity
            quantityInput.value = currentValue + 1;
        }
    });
});

// Add click event listeners for decrement buttons
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityInput = quantityInputs[index];
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) { // Limit the minimum quantity
            quantityInput.value = currentValue - 1;
        }
    });
});
