document.addEventListener('DOMContentLoaded', async function() {
    // Wait for Swiper to be available
    while (typeof Swiper === 'undefined') {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1.2,
        loopedSlides: 3,
        spaceBetween: 10,
        initialSlide: 1,
        speed: 600,
        direction: "horizontal",
        effect: "slide",
        simulateTouch: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
                if (index >= 3) return '';
                return '<span class="' + className + '" style="background: white;"></span>';
            }
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
