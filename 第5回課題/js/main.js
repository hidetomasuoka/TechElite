document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded in main.js');
    
    // モジュール初期化
    if (typeof TechElite !== 'undefined') {
        // フォームモジュールの初期化
        if (TechElite.modules.form) {
            TechElite.modules.form.init();
        }
        
        // タブモジュールの初期化
        if (TechElite.modules.tabs) {
            TechElite.modules.tabs.init();
        }
    }
});
