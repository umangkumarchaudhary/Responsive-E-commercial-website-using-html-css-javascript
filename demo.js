// Get the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.cart');
const cartNumber = document.querySelector('.cart-number');
const quantityInputs = document.querySelectorAll('.quantity');

// Initialize the cart count
let cartCount = 0;

// Add click event listeners for "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        cartCount += 1;
        cartNumber.textContent = cartCount;
        
        // Handle the animation
        // Get the associated quantity input for the clicked button
        const quantityInput = quantityInputs[index];
        
        // Add the "added" class to trigger the animation
        button.classList.add('added');
        
        // After a delay, remove the "added" class to reset the button
        setTimeout(() => {
            button.classList.remove('added');
        }, 500); // Adjust the delay (in milliseconds) as needed to match the animation duration
        
        // Reset the associated quantity input to 1
        quantityInput.value = 1;
    });
});

// Add click event listeners for increment and decrement buttons
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityInput = quantityInputs[index];
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 100) { // Limit the maximum quantity
            quantityInput.value = currentValue + 1;
        }
    });
});

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityInput = quantityInputs[index];
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) { // Limit the minimum quantity
            quantityInput.value = currentValue - 1;
        }
    });
});
