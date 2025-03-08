$(document).ready(function() {
    // ハンバーガーメニューの処理
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.header_right').toggleClass('active');
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
            $('.header_right').removeClass('active');
        }
    });
});