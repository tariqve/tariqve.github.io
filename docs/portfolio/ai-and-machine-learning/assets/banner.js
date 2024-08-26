document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Function to update the slide position
    function updateSlidePosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Next Slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    // Previous Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Set up automatic sliding
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Set up button event listeners
    document.querySelector('.nav-button.left').addEventListener('click', prevSlide);
    document.querySelector('.nav-button.right').addEventListener('click', nextSlide);

    // Open modal on click of "Learn More"
    document.querySelectorAll('.more-info').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const modal = document.getElementById('modal');
            const modalContent = modal.querySelector('.modal-content');
            const title = this.parentElement.querySelector('h2').textContent;
            const description = this.parentElement.querySelector('p').textContent;

            modalContent.querySelector('h2').textContent = title;
            modalContent.querySelector('p').textContent = description;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    document.querySelector('.modal-close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});
