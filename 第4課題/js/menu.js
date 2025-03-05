// jQueryを使用したアコーディオンメニュー操作スクリプト
$(document).ready(function() {
    const $hamburger = $('.hamburger');
    const $nav = $('.header_right');
    const $body = $('body');
    const $header = $('.header');
    const $headerLeft = $('.header_left');
    const $headerNavItems = $('.header_nav_item');

    // ヘッダーの高さを取得してCSSカスタムプロパティに設定
    const headerHeight = $header.outerHeight();
    document.documentElement.style.setProperty('--header_height', headerHeight + 'px');

    // ハンバーガーメニュークリック時の処理
    $hamburger.on('click', function() {
        $(this).toggleClass('active');
        $nav.toggleClass('active');
        
        // ヘッダー左側が常に表示されるようにする
        if ($nav.hasClass('active')) {
            $body.css('overflow', 'hidden');
            // ヘッダー左側を最前面に表示
            $headerLeft.css('z-index', '1002');
        } else {
            $body.css('overflow', '');
            // 通常のz-indexに戻す
            $headerLeft.css('z-index', '');
        }
    });

    // ヘッダーナビゲーションアイテムのクリックイベント（アコーディオン動作）
    $headerNavItems.on('click', function(e) {
        // リンク要素がクリックされた場合はデフォルトの動作を許可
        if ($(e.target).is('a') || $(e.target).parent().is('a')) {
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        // 現在のアイテムを開閉する
        $(this).toggleClass('active');
        
        // モバイルメニューが開いている場合のみアコーディオン動作
        if ($nav.hasClass('active') && $(window).width() <= 560) {
            // 他のナビアイテムを閉じる
            $headerNavItems.not($(this)).removeClass('active');
        }
    });

    // ナビゲーション内のリンククリック時にメニューを閉じる
    $('.header_right .header_link').on('click', function() {
        $hamburger.removeClass('active');
        $nav.removeClass('active');
        $body.css('overflow', '');
        $headerLeft.css('z-index', '');
        $headerNavItems.removeClass('active');
    });
    
    // 画面サイズが変わった時のリセット処理
    $(window).on('resize', function() {
        if ($(window).width() > 560) {
            $hamburger.removeClass('active');
            $nav.removeClass('active');
            $body.css('overflow', '');
            $headerLeft.css('z-index', '');
            $headerNavItems.removeClass('active');
        }
        
        // ヘッダーの高さを再計算
        const headerHeight = $header.outerHeight();
        document.documentElement.style.setProperty('--header_height', headerHeight + 'px');
    });
});