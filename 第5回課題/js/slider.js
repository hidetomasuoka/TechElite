document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 1, 
        spaceBetween: 10, 
        speed: 600, 
        direction: "horizontal", 
        effect: "slide", 
        simulateTouch: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
                return '<span class="' + className + '" style="background: white;"></span>';
            }
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
