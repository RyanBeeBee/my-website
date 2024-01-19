// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const originalImages = carousel.querySelectorAll('img');
    let totalWidth = 0;

    // Calculate the total width and clone images
    originalImages.forEach(img => {
        totalWidth += img.offsetWidth;
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });

    let scrollAmount = 0;

    // Function to scroll carousel smoothly
    const scrollCarousel = () => {
        if (scrollAmount >= totalWidth) {
            // Reset the scroll position by the width of original images
            carousel.scrollLeft -= totalWidth;
            scrollAmount -= totalWidth;
        }
        carousel.scrollLeft += 1; // Increment scroll position
        scrollAmount += 1;
    };

    // Start the smooth scrolling using setInterval
    setInterval(scrollCarousel, 16); // 60fps animation

    // Mobile Menu Toggle Functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Image Modal Functionality
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    document.querySelectorAll('.carousel img').forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Close Modal Functionality
    var span = document.getElementById("closeModal");
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Contact Box Animation
    const contactLink = document.querySelector('#menu a[href="#contact"]');
    const contactBox = document.getElementById('contactBox');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        const isBoxVisible = contactBox.offsetWidth > 0;
        if (isBoxVisible) {
            contactBox.style.width = '0';
            setTimeout(() => contactBox.style.display = 'none', 266);
        } else {
            contactBox.style.display = 'block';
            setTimeout(() => contactBox.style.width = '20%', 0);
        }
    });

    // Services Dropdown Menu Animation
    const servicesDropdown = document.querySelector('#menu a#servicesDropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    servicesDropdown.onmouseover = () => {
        dropdownContent.style.display = 'block';
    };
    dropdownContent.onmouseleave = () => {
        dropdownContent.style.display = 'none';
    };
});
