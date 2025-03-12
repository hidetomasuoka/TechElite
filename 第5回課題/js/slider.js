document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 1.2, //画像を何枚表示するか
        spaceBetween: 5, //何ピクセル画像の間隔をあけるか
        loop: true,
        autoplay: {
            delay: 5000,
        },
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
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