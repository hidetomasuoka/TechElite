document.addEventListener('DOMContentLoaded', function() {
    // 席予約フォームのバリデーション
    const reservationForm = document.getElementById('reservationForm');
    const emailInput = document.getElementById('reserve-email');
    const phoneInput = document.getElementById('reserve-phone');
    const submitButton = document.getElementById('reservationSubmitBtn');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    
    // エラーメッセージを初期状態では非表示に
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    
    // フォームの入力状態をチェックする関数
    function validateForm() {
        let isValid = reservationForm.checkValidity();
        
        // 電話番号の追加バリデーション（入力されている場合のみ）
        if (phoneInput.value !== '' && !phoneInput.validity.valid) {
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }
        
        // メールアドレスの追加バリデーション
        if (emailInput.value !== '' && !emailInput.validity.valid) {
            emailError.textContent = '有効なメールアドレスを入力してください';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // 送信ボタンの活性/非活性を切り替え
        if (isValid) {
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
        } else {
            submitButton.disabled = true;
            submitButton.style.opacity = '0.5';
        }
    }
    
    // 全てのフォーム要素に対してイベントリスナーを設定
    const formInputs = reservationForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('change', validateForm);
    });
    
    // フォーム初期表示時にもバリデーション実行
    validateForm();

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

// シンプルフォームのバリデーション
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    // 必須フィールドの取得
    const requiredFields = form.querySelectorAll('[required]');
    
    // 送信ボタンの初期状態を設定
    submitBtn.style.opacity = '0.5';
    submitBtn.disabled = true;

    // フォームの入力状態をチェックする関数
    function checkFormValidity() {
        let isValid = true;
        
        // 全ての必須フィールドをチェック
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });
        
        // 送信ボタンの状態を更新
        submitBtn.disabled = !isValid;
        submitBtn.style.opacity = isValid ? '1' : '0.5';
    }
    
    // 全ての必須フィールドにイベントリスナーを設定
    requiredFields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
        field.addEventListener('change', checkFormValidity);
    });

    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;
    
    // フォーム送信時の基本的なバリデーション
    reservationForm.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('reserve-name');
        const emailInput = document.getElementById('reserve-email');
        const seatInput = document.getElementById('seat-type');
        
        let isValid = true;
        
        // 必須フィールドのチェック
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            nameInput.style.borderColor = '#ddd';
        }
        
        if (!emailInput.value.trim()) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.borderColor = '#ddd';
        }
        
        if (!seatInput.value) {
            seatInput.style.borderColor = 'red';
            isValid = false;
        } else {
            seatInput.style.borderColor = '#ddd';
        }
        
        // バリデーションエラーがある場合は送信をキャンセル
        if (!isValid) {
            e.preventDefault();
        }
    });
    
    // フィールドのフォーカスが外れたときに個別バリデーション
    const inputs = reservationForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'red';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
});

// タブ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // アクティブなタブボタンのクラスを削除
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // クリックされたボタンにアクティブクラスを追加
            button.classList.add('active');

            // 全てのタブペインを非表示
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // クリックされたボタンに対応するタブペインを表示
            const targetTab = document.getElementById(button.dataset.tab);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
});