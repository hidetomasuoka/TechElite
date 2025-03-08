$(document).ready(function() {
    // ハンバーガーメニューのトグル
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        
        $('.header_content ul').slideToggle({
            duration: 300,
            easing: 'swing',
            complete: function() {
                $(this).toggleClass('active');
            }
        });
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
                    $('.header_content ul').slideUp({
                        duration: 300,
                        easing: 'swing',
                        complete: function() {
                            $(this).removeClass('active');
                        }
                    });
                }
            }
        }
    });

    // リサイズ時の処理 - ここが改善ポイント
    $(window).resize(function() {
        if ($(window).width() > 550) {
            // PCサイズになった時にメニュー表示を完全にリセット
            $('.header_content ul').css({
                'display': '',
                'height': '',
                'opacity': ''
            }).removeClass('active');
            $('.hamburger').removeClass('active');
        } else {
            // モバイルサイズに戻った時、メニューは閉じた状態にする
            if (!$('.hamburger').hasClass('active')) {
                $('.header_content ul').css('display', 'none').removeClass('active');
            }
        }
    });
    
    // 初期状態のセットアップ - 追加
    function setupInitialMenuState() {
        if ($(window).width() <= 550) {
            $('.header_content ul').css('display', 'none').removeClass('active');
            $('.hamburger').removeClass('active');
        } else {
            $('.header_content ul').css({
                'display': '',
                'height': '',
                'opacity': ''
            }).removeClass('active');
        }
    }
    
    // ページロード時に初期状態をセット
    setupInitialMenuState();
});