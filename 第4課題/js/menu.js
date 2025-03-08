$(document).ready(function() {
    // ハンバーガーメニューの処理
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        
        // slideToggle()を使用してアニメーションをスムーズにする
        $('.header_right').slideToggle(300, function() {
            // アニメーション完了後にactiveクラスの付け外しを行う
            $(this).toggleClass('active');
            
            // 表示状態を維持するためにdisplayプロパティを調整
            if ($(this).hasClass('active')) {
                $(this).css('display', 'flex');
            }
        });
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
            $('.header_right').slideUp(300, function() {
                $(this).removeClass('active');
            });
        }
    });
});