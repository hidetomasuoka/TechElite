document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 600, // スライドが切り替わるトランジション時間（ミリ秒）
        slidesPerView: 1.2, // 何枚のスライドを表示するか
        spaceBetween: 12, // スライド間の余白サイズ（ピクセル）
        direction: "horizontal", // スライド方向
        effect: "slide", // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー)
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