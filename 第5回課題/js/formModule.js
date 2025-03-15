/**
 * Form Module - Handles all form validation and submission
 */
TechElite.registerModule('form', function() {
    function initForm() {
        const form = document.querySelector('#reservationForm');
        if (!form) return;
        
        // ページ読み込み時にフォームの値を復元する
        window.addEventListener('pageshow', function(event) {
            if (form) {
                if (typeof formData !== 'undefined') {
                    // 戻るボタンからの遷移時は値を復元
                    Object.keys(formData).forEach(key => {
                        const input = form.querySelector(`[name="${key}"]`);
                        if (input && formData[key]) {
                            input.value = formData[key];
                        }
                    });
                } else {
                    // 通常のページロード時はリセット
                    form.reset();
                }
                updateSubmitButton(form);
            }
        });
        
        // エラーメッセージ表示用のコンテナを各フィールドの下に追加
        const fields = form.querySelectorAll('.form-group');
        fields.forEach(field => {
            const input = field.querySelector('input, select');
        
            if (!input) return;
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.id = `${input.id}-error`;
            errorDiv.setAttribute('role', 'alert');
            errorDiv.setAttribute('aria-live', 'polite');
            field.appendChild(errorDiv);
        });
        
        // フォーム送信イベントの処理
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(form)) {
                setTimeout(function() {
                    form.submit();
                }, 10);
            }
        });

        // 入力フィールドの変更を監視
        form.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('input', function() {
                updateSubmitButton(form);
            });
            input.addEventListener('change', function() {
                updateSubmitButton(form);
            });
        });

        // 初期状態でボタンを無効化
        updateSubmitButton(form);
    }
    
    // 必須項目が全て入力されているかチェック
    function checkRequiredFields(form) {
        const requiredFields = form.querySelectorAll('[required]');
        return Array.from(requiredFields).every(field => field.value.trim() !== '');
    }

    // 送信ボタンの状態を更新
    function updateSubmitButton(form) {
        const submitBtn = form.querySelector('.submit-btn');
        if (submitBtn) {
            const isValid = checkRequiredFields(form);
            submitBtn.disabled = !isValid;
            submitBtn.style.opacity = isValid ? '1' : '0.5';
        }
    }
    
    // フォームの送信前バリデーション
    function validateForm(form) {
        let isValid = true;
        form.querySelectorAll('input, select').forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }
    
    function validateField(field) {
        const errorDiv = document.getElementById(`${field.id}-error`);
        let isValid = true;
        let errorMessage = '';
        
        // フィールドの必須チェック
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = '必須項目です';
        }
        
        // メールアドレスの形式チェック
        if (field.type === 'email' && field.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                isValid = false;
                errorMessage = '有効なメールアドレスを入力してください';
            }
        }
        
        // 電話番号の形式チェック（任意項目）
        if (field.id === 'reserve-phone' && field.value) {
            const digitsOnly = field.value.replace(/-/g, '');
            const phonePattern = /^(0\d{1,4}-?\d{1,4}-?\d{4}|0\d{9,10})$/;
            
            if (!phonePattern.test(field.value)) {
                isValid = false;
                errorMessage = '有効な電話番号形式で入力してください（例: 090-1234-5678 または 09012345678）';
            } else if (digitsOnly.length < 10 || digitsOnly.length > 11) {
                isValid = false;
                errorMessage = '電話番号は10桁または11桁で入力してください';
            }
        }
        
        // エラーメッセージの表示制御
        if (errorDiv) {
            errorDiv.textContent = errorMessage;
            errorDiv.style.display = isValid ? 'none' : 'block';
        }
        
        return isValid;
    }
    
    return {
        init: initForm
    };
});
