$(document).ready(function() {
    // ハンバーガーメニューのトグル - アニメーションをよりスムーズに
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        
        // アニメーションのスピードと効果を調整
        $('.header_content ul').slideToggle({
            duration: 300,  // 少し長めの時間でよりスムーズな印象に
            easing: 'swing', // デフォルトのイージング関数
            complete: function() {
                // アニメーション完了後にactiveクラスの切り替え
                $(this).toggleClass('active');
            }
        });
    });

    // ナビゲーションリンクのクリック処理
    $('.header_content ul li a').on('click', function(e) {
        const href = $(this).attr('href');
        
        // ハッシュリンクの場合はスムーズスクロール
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = $(href);
            if (targetElement.length) {
                const offset = targetElement.offset().top - $('header').outerHeight();
                
                // スクロールアニメーションもスムーズに
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

    // リサイズ時の処理
    $(window).resize(function() {
        if ($(window).width() > 550) {
            // PCサイズになった時にメニュー表示を元に戻す
            $('.header_content ul').css({
                'display': '',
                'opacity': ''
            });
            $('.hamburger').removeClass('active');
        }
    });
});