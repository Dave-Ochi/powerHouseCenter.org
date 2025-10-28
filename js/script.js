// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Dropdown toggle for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');
        const submenuLinks = content.querySelectorAll('a');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const isVisible = content.style.display === 'block';
                content.style.display = isVisible ? 'none' : 'block';
            }
        });

        // Close dropdown when clicking submenu links
        submenuLinks.forEach(subLink => {
            subLink.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Hero Slider functionality
    class HeroSlider {
        constructor() {
            this.slider = document.querySelector('.slider-container');
            if (!this.slider) return;

            this.slides = document.querySelectorAll('.slide');
            this.indicators = document.querySelectorAll('.indicator');
            this.prevBtn = document.querySelector('.slider-prev');
            this.nextBtn = document.querySelector('.slider-next');

            this.currentSlide = 0;
            this.slideCount = this.slides.length;
            this.autoPlayInterval = null;
            this.autoPlayDelay = 5000; // 5 seconds

            this.init();
        }

        init() {
            this.bindEvents();
            this.startAutoPlay();
        }

        bindEvents() {
            // Navigation buttons
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
            }
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.nextSlide());
            }

            // Indicators
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            });

            // Pause on hover
            this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

            // Touch/swipe support
            this.bindTouchEvents();
        }

        bindTouchEvents() {
            let startX = 0;
            let endX = 0;

            this.slider.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                this.stopAutoPlay();
            });

            this.slider.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                this.handleSwipe(startX, endX);
                this.startAutoPlay();
            });
        }

        handleSwipe(startX, endX) {
            const diff = startX - endX;
            const threshold = 50;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        }

        goToSlide(index) {
            if (index === this.currentSlide) return;

            // Remove active class from current slide and indicator
            this.slides[this.currentSlide].classList.remove('active');
            this.indicators[this.currentSlide].classList.remove('active');

            // Add direction data for animation
            const direction = index > this.currentSlide ? 'right' : 'left';
            this.slides[index].setAttribute('data-direction', direction);

            // Update current slide
            this.currentSlide = index;

            // Add active class to new slide and indicator
            this.slides[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].classList.add('active');

            // Reset autoplay timer
            this.resetAutoPlay();
        }

        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.slideCount;
            this.goToSlide(nextIndex);
        }

        prevSlide() {
            const prevIndex = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
            this.goToSlide(prevIndex);
        }

        startAutoPlay() {
            this.stopAutoPlay(); // Clear any existing interval
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        }

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }

        resetAutoPlay() {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }

    // Initialize slider when DOM is loaded
    const heroSlider = new HeroSlider();
});



// Modal functionality
function openModal() {
    const modal = document.getElementById('learn-more-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10); // Allow display to take effect before adding class
}

function closeModal() {
    const modal = document.getElementById('learn-more-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300); // Wait for transition
}

// Close modal when clicking outside or on close button
window.onclick = function(event) {
    const modal = document.getElementById('learn-more-modal');
    if (event.target === modal) {
        closeModal();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});
