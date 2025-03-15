// デバッグ用コンソールログ
console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded in main.js');
    
    // フォームモジュールの初期化
    if (typeof TechElite !== 'undefined' && TechElite.modules.form) {
        TechElite.modules.form.init();
    }
    
    // タブ切り替え
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
