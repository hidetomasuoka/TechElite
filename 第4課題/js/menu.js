$(document).ready(function() {
    // ハンバーガーメニューのトグル
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.header_content ul').toggleClass('active');
    });

    // ナビゲーションリンクのクリック処理
    $('.header_content ul li a').on('click', function(e) {
        const href = $(this).attr('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = $(href);
            if (targetElement.length) {
                const offset = targetElement.offset().top - $('header').outerHeight();
                
                $('html, body').animate({
                    scrollTop: offset
                }, 600, 'swing');
                
                // モバイル時はメニューを閉じる
                if ($(window).width() <= 550) {
                    $('.hamburger').removeClass('active');
                    $('.header_content ul').removeClass('active');
                }
            }
        }
    });

    // リサイズ時の処理
    $(window).resize(function() {
        if ($(window).width() > 550) {
            // PCサイズになった時にメニュー表示を完全にリセット
            $('.hamburger').removeClass('active');
            $('.header_content ul').removeClass('active');
        }
    });
    
    // 初期状態のセットアップ
    function setupInitialMenuState() {
        if ($(window).width() <= 550) {
            $('.header_content ul').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    }
    
    // ページロード時に初期状態をセット
    setupInitialMenuState();
});