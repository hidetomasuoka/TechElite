// jQuery読み込み後の処理
$(function(){
    // サービス設定を一元管理するオブジェクト
    const serviceConfig = {
        'WEB制作': {
            color: '#b3ffff',
            content: '<p>ご要望に合わせた最適なWeb制作サービスを提供いたします。</p><p>レスポンシブデザイン、WordPress構築、コーポレートサイト制作など幅広く対応いたします。</p>'
        },
        'SEOコンサル': {
            color: '#ffdea0',
            content: '<p>上位表示を実現するためのSEOコンサルティングサービスです。</p><p>キーワード分析から内部施策、外部対策まで総合的にサポートいたします。</p>'
        },
        'スマホアプリ開発': {
            color: '#a7ff99',
            content: '<p>iOS/Androidに対応したモバイルアプリケーション開発を行います。</p><p>企画立案からデザイン、開発、運用まで一貫してサポートいたします。</p>'
        }
    };
    
    // 最後にクリックされたサービス名を保持する変数（デフォルトは最初のサービス）
    let lastClickedService = Object.keys(serviceConfig)[0];
    
    // 1. ヘッダーの「サービス」リンククリック時のスクロール処理
    $('.header_link').on('click', function(e) {
        e.preventDefault();
        
        // クリックされたリンクのhref属性から対象のIDを取得
        const targetId = $(this).attr('href');
        const targetElement = $(targetId);
        
        // 対象の要素が存在する場合のみスクロール
        if (targetElement.length > 0) {
            const targetPosition = targetElement.offset().top;
            
            // スムーズにスクロールする
            $('html, body').animate({
                scrollTop: targetPosition
            }, 800);
        }
    });
    
    // サービスコンテンツエリアの初期化
    if ($('.service_content').length === 0) {
        $('.service_container').after('<div class="service_content"></div>');
        
        // 初期コンテンツを表示（デフォルトサービスのコンテンツ）
        updateServiceContent(lastClickedService);
    }
    
    // 2. サービスリンク設定（初期状態とホバー効果）
    $('.service_box').each(function() {
        const $serviceBox = $(this);
        const serviceName = $serviceBox.text().trim();
        
        // 初期状態でデフォルトのサービスを選択状態にする
        if (serviceName === lastClickedService) {
            selectService($serviceBox, serviceName);
        }
        
        // ホバー時の効果を設定
        $serviceBox.hover(
            function() {
                // クリックされていない場合のみホバー効果を適用
                if (lastClickedService !== serviceName) {
                    $(this).css({
                        'background-color': serviceConfig[serviceName].color,
                        'transition': 'background-color 0.5s ease'
                    });
                }
            },
            function() {
                // クリックされていない場合のみ背景色をクリア
                if (lastClickedService !== serviceName) {
                    $(this).css('background-color', '');
                }
            }
        );
    });
    
    // 3. サービスリンクのクリックイベント
    $(document).on('click', '.service_box', function(e) {
        e.preventDefault();
        
        const serviceName = $(this).text().trim();
        
        // サービスを選択
        selectService($(this), serviceName);
        
        // コンテンツを更新
        updateServiceContent(serviceName);
    });
    
    // サービス選択時の処理
    function selectService($element, serviceName) {
        // 前回選択されたサービスの背景色をクリア
        $('.service_box').css('background-color', '');
        
        // 新しく選択されたサービスの背景色を設定
        $element.css('background-color', serviceConfig[serviceName].color);
        
        // 選択されたサービスを記録
        lastClickedService = serviceName;
    }
    
    // コンテンツ更新処理
    function updateServiceContent(serviceName) {
        $('.service_content').fadeOut(300, function() {
            $(this).html(serviceConfig[serviceName].content).fadeIn(300);
        });
    }
    
    // CSSの追加
    const serviceContentCSS = `
        .service_content {
            max-width: 700px;
            margin: 5px auto;
            padding: 30px;
            border: 1px solid #000;
            border-radius: 0;
            min-height: 200px;
            background-color: #fff;
            transition: all 0.3s ease;
        }
        
        .service_content p {
            margin-bottom: 15px;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        /* レスポンシブ対応 */
        @media screen and (max-width: 1300px) {
            .service_content {
                max-width: 690px;
                padding: 28px;
            }
        }
        
        @media screen and (max-width: 1100px) {
            .service_content {
                max-width: 680px;
                padding: 25px;
            }
        }
        
        @media screen and (max-width: 900px) {
            .service_content {
                max-width: 670px;
                padding: 22px;
            }
        }
        
        @media screen and (max-width: 800px) {
            .service_content {
                max-width: 664px;
                padding: 20px;
            }
        }
        
        @media screen and (max-width: 755px) {
            .service_content {
                max-width: 660px;
                padding: 18px;
            }
        }
        
        /* タブレット対応 (750px以下) */
        @media screen and (max-width: 750px) {
            .service_content {
            max-width: 90%; /* 60pxから変更 */
            margin: 5px auto;
            padding: 18px;
            }
            .service_content p {
                line-height: 1.5;
            }
        }
        
        /* 中間サイズのレスポンシブ対応（750px～650px） */
        @media screen and (max-width: 750px) and (min-width: 551px) {
            .service_content {
                max-width: 90%; 
                padding: 18px;
            }
        }
        
        /* スマホ対応 - 動的な幅設定 */
        @media screen and (max-width: 550px) {
            .service_content {
                max-width: 90%; 
                width: calc(100% - 30px);
                padding: 15px;
                margin: 15px auto;
            }
        }
    `;
    
    // CSSを追加
    $('<style>').text(serviceContentCSS).appendTo('head');
});