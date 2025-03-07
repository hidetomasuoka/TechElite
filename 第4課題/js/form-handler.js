// jQuery版の都道府県・市町村選択機能
$(document).ready(function() {
    // 都道府県と市町村のデータを直接コードに埋め込む
    const regionsData = {
        "北海道": ["札幌市", "函館市", "小樽市", "旭川市", "室蘭市", "釧路市", "帯広市", "北見市", "夕張市", "岩見沢市", "網走市", "留萌市", "苫小牧市", "稚内市", "美唄市", "芦別市", "江別市", "赤平市", "紋別市", "士別市", "名寄市", "三笠市", "根室市", "千歳市", "滝川市", "砂川市", "歌志内市", "深川市", "富良野市", "登別市", "恵庭市", "伊達市", "北広島市", "石狩市", "北斗市"],
        "青森県": ["青森市", "弘前市", "八戸市", "黒石市", "五所川原市", "十和田市", "三沢市", "むつ市", "つがる市", "平川市"],
        "岩手県": ["盛岡市", "宮古市", "大船渡市", "花巻市", "北上市", "久慈市", "遠野市", "一関市", "陸前高田市", "釜石市", "二戸市", "八幡平市", "奥州市", "滝沢市"]
    };

    // HTML要素の参照を取得
    const $prefectureSelect = $('#prefecture');
    const $citySelect = $('#city');
    const $telInput = $('#tel');
    const $form = $('form');

    // 都道府県のセレクトボックスを設定
    if ($prefectureSelect.length > 0) {
        // 選択肢をクリア
        $prefectureSelect.html('<option value="">---</option>');
        
        // 都道府県の選択肢を追加
        $.each(regionsData, function(prefecture, cities) {
            const $option = $('<option>', {
                value: prefecture,
                text: prefecture
            });
            $prefectureSelect.append($option);
        });
    }

    // 都道府県が変更されたときの処理
    function updateCities() {
        // 選択された都道府県を取得
        const selectedPrefecture = $prefectureSelect.val();
        
        // 市町村のセレクトボックスをクリア
        $citySelect.html('<option value="">---</option>');
        
        // 都道府県が選択されている場合のみ、市町村の選択肢を追加
        if (selectedPrefecture && regionsData[selectedPrefecture]) {
            $.each(regionsData[selectedPrefecture], function(index, city) {
                const $option = $('<option>', {
                    value: city,
                    text: city
                });
                $citySelect.append($option);
            });
        }
        
        // 入力フォームのバリデーションを更新
        if ('reportValidity' in $citySelect[0]) {
            $citySelect[0].reportValidity();
        }
    }

    // 都道府県の変更を監視
    if ($prefectureSelect.length > 0 && $citySelect.length > 0) {
        $prefectureSelect.on('change', updateCities);
    }
    
    // 電話番号入力フィールドの親要素にエラーメッセージコンテナを追加
    if ($telInput.length > 0) {
        // もし既存のエラーメッセージコンテナがあれば削除
        $telInput.parent().find('.tel-error-message').remove();
        
        // 電話番号フィールドの後にエラーメッセージコンテナを追加
        $telInput.after('<div class="tel-error-message" style="color: red; font-size: 0.8rem; margin-top: 5px; display: none;"></div>');
        const $errorMessage = $telInput.next('.tel-error-message');
        
        // フォーム送信時の検証
        $form.on('submit', function(e) {
            // 電話番号の値を取得
            const telValue = $telInput.val().trim();
            
            // すべてのエラーメッセージを非表示にしてリセット
            $errorMessage.hide();
            
            // 電話番号が入力されている場合のみバリデーション
            if (telValue !== '') {
                // 数字のみかチェック
                const isNumeric = /^\d+$/.test(telValue);
                if (!isNumeric) {
                    // エラーメッセージを表示
                    $errorMessage.text('電話番号は数字のみ入力してください').show();
                    // 電話番号入力欄にフォーカス
                    $telInput.focus();
                    // 送信を中止
                    e.preventDefault();
                    return false;
                }
                
                // 桁数チェック (9桁以上12桁以下)
                if (telValue.length < 9 || telValue.length > 12) {
                    // エラーメッセージを表示
                    $errorMessage.text('電話番号は9桁以上12桁以下で入力してください').show();
                    // 電話番号入力欄にフォーカス
                    $telInput.focus();
                    // 送信を中止
                    e.preventDefault();
                    return false;
                }
            }
            // 電話番号が空の場合または検証成功の場合は処理を続行
        });
        
        // 入力中にエラーメッセージを非表示
        $telInput.on('input', function() {
            $errorMessage.hide();
        });
    }
});