$(document).ready(function() {
    // ハンバーガーメニューの処理
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        
        // 表示前にactiveクラスを適用してサイズを固定
        if (!$('.header_right').hasClass('active')) {
            $('.header_right').addClass('active').css({
                'height': 'auto',
                'opacity': 0,
                'display': 'flex',
                'visibility': 'hidden'
            });
            
            // 実際の高さを取得
            const targetHeight = $('.header_right').outerHeight();
            
            // 一度高さを0にしてから表示
            $('.header_right').css({
                'height': 0,
                'opacity': 0,
                'overflow': 'hidden',
                'visibility': 'visible'
            }).animate({
                'height': targetHeight,
                'opacity': 1
            }, 300, function() {
                // アニメーション完了後、制限を解除
                $(this).css({
                    'height': '',
                    'overflow': '',
                    'opacity': ''
                });
            });
        } else {
            // メニューを閉じる
            const currentHeight = $('.header_right').outerHeight();
            
            $('.header_right').css({
                'height': currentHeight,
                'overflow': 'hidden'
            }).animate({
                'height': 0,
                'opacity': 0
            }, 300, function() {
                $(this).removeClass('active').css({
                    'display': 'none',
                    'height': '',
                    'overflow': '',
                    'opacity': ''
                });
            });
        }
    });

    // header_nav_itemのクリックイベント - アコーディオンメニューの範囲を拡大
    $('.header_nav_item').on('click', function(e) {
        // リンクのデフォルトのクリックイベントを維持するためのチェック
        // リンク自体がクリックされた場合は通常の動作を許可
        if ($(e.target).is('a')) {
            return;
        }
        
        // header_nav_item内のリンクを取得して、そのhref属性を使ってリダイレクト
        const link = $(this).find('a.header_link');
        if (link.length) {
            window.location.href = link.attr('href');
        }
    });

    // ナビゲーションリンクのスムーススクロール
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
        
        // モバイル表示でメニューが開いている場合は閉じる
        if ($('.header_right').hasClass('active')) {
            $('.hamburger').removeClass('active');
            
            // メニューを閉じる
            const currentHeight = $('.header_right').outerHeight();
            
            $('.header_right').css({
                'height': currentHeight,
                'overflow': 'hidden'
            }).animate({
                'height': 0,
                'opacity': 0
            }, 300, function() {
                $(this).removeClass('active').css({
                    'display': 'none',
                    'height': '',
                    'overflow': '',
                    'opacity': ''
                });
            });
        }
    });
});