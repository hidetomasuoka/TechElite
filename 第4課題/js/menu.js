// jQueryを使用したアコーディオンメニュー操作スクリプト
$(document).ready(function() {
    const $hamburger = $('.hamburger');
    const $nav = $('.header_right');
    const $body = $('body');
    const $header = $('.header');
    const $headerLeft = $('.header_left');
    const $menuTitle = $('.menu-title');
    const $submenu = $('.submenu');
    const $toggleIcon = $('.toggle-icon');

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
            
            // メニューを閉じるときにサブメニューも全て閉じる
            $submenu.removeClass('open');
            $toggleIcon.removeClass('open');
        }
    });

    // アコーディオンメニューの処理
    $menuTitle.on('click', function(e) {
        e.preventDefault();
        
        // クリックされたメニューのサブメニューとアイコンを取得
        const $clickedSubmenu = $(this).siblings('.submenu');
        const $clickedIcon = $(this).find('.toggle-icon');
        
        // 現在のサブメニューの開閉状態を切り替える
        $clickedSubmenu.toggleClass('open');
        $clickedIcon.toggleClass('open');
    });

    // サブメニュー内のリンククリック時にメニューを閉じる
    $('.submenu .header_link, .header_right .header_link').on('click', function() {
        $hamburger.removeClass('active');
        $nav.removeClass('active');
        $body.css('overflow', '');
        // 通常のz-indexに戻す
        $headerLeft.css('z-index', '');
        
        // すべてのサブメニューを閉じる
        $submenu.removeClass('open');
        $toggleIcon.removeClass('open');
    });
    
    // 画面サイズが変わった時のリセット処理
    $(window).on('resize', function() {
        if ($(window).width() > 560) {
            $hamburger.removeClass('active');
            $nav.removeClass('active');
            $body.css('overflow', '');
            // 通常のz-indexに戻す
            $headerLeft.css('z-index', '');
            
            // サブメニューを閉じる
            $submenu.removeClass('open');
            $toggleIcon.removeClass('open');
        }
        
        // ヘッダーの高さを再計算
        const headerHeight = $header.outerHeight();
        document.documentElement.style.setProperty('--header_height', headerHeight + 'px');
    });
});