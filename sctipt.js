// Smooth scrolling for the "Learn More" button
const learnMoreButton = document.querySelector('.learn-more');

if (learnMoreButton) {
  learnMoreButton.addEventListener('click', function(event) {
    event.preventDefault();
    const benefitsSection = document.querySelector('.benefits');
    benefitsSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Basic image carousel (adjust HTML as needed)
let currentImageIndex = 0;
const images = document.querySelectorAll('.benefit img');
const totalImages = images.length;

function showNextImage() {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  images[currentImageIndex].style.display = 'block';
}

if (images.length > 1) {
  for (let i = 1; i < totalImages; i++) {
    images[i].style.display = 'none';
  }
  setInterval(showNextImage, 3000);
}

// Dynamically update the year in the footer
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.textContent = `© ${currentYear} Healing with Meditation | Privacy Policy | Terms of Use`;

// Simple form validation (for contact.html)
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      alert('Please fill in all required fields.');
      event.preventDefault();
    }
  });
}
