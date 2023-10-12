function toggleMenu(element) {
    const nav = document.querySelector('.nav');
    element.classList.toggle('active');
    nav.classList.toggle('active');
}

// Add this to your existing script.js or create a new one
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();

  