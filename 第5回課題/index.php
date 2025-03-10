<?php include 'header.php'; ?>

<!-- Swiper JS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<main>
    <section id="top" class="slider-section">
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><img src="img/slide_1.jpg" alt="Slide 1"></div>
                <div class="swiper-slide"><img src="img/slide_2.jpg" alt="Slide 2"></div>
                <div class="swiper-slide"><img src="img/slide_3.jpg" alt="Slide 3"></div>
            </div>
            
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev">
                <img src="img/slide-btn-prev.svg" alt="Previous">
            </div>
            <div class="swiper-button-next">
                <img src="img/slide-btn-next.svg" alt="Next">
            </div>
        </div>
    </section>

    <section id="schedule" class="section">
        <div class="container">
            <div class="catchcopy">
                <p class="catchcopy-text"><strong>今年も始まる</strong><span class="highlight">夏祭り</span></p>
            </div>
            <h2>スケジュール</h2>
            <div class="schedule-container">
                <div class="tab-container">
                    <div class="tab-buttons">
                        <button class="tab-button active" data-tab="tab1">9月1日</button>
                        <button class="tab-button" data-tab="tab2">9月2日</button>
                        <button class="tab-button" data-tab="tab3">9月3日</button>
                    </div>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane active">
                            <h3>9月1日のスケジュール</h3>
                            <ul>
                                <li>10:00 - オープニングセレモニー</li>
                                <li>13:00 - 基調講演</li>
                                <li>15:00 - ワークショップA</li>
                                <li>17:00 - ネットワーキング</li>
                            </ul>
                        </div>
                        <div id="tab2" class="tab-pane">
                            <h3>9月2日のスケジュール</h3>
                            <ul>
                                <li>09:00 - モーニングセッション</li>
                                <li>11:00 - パネルディスカッション</li>
                                <li>14:00 - ワークショップB</li>
                                <li>16:00 - グループワーク</li>
                            </ul>
                        </div>
                        <div id="tab3" class="tab-pane">
                            <h3>9月3日のスケジュール</h3>
                            <ul>
                                <li>10:00 - 特別講演</li>
                                <li>13:00 - プレゼンテーション</li>
                                <li>15:00 - クロージングセッション</li>
                                <li>16:30 - 閉会式</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="access" class="section">
        <div class="container">
            <h2>アクセス</h2>
            <div class="access-content">
                <div class="access-info">
                    <p>〒771-1154<br>徳島県徳島市応神町東貞方南川淵</p>
                </div>
                <div class="access-map">
                    <!-- Google Maps 埋め込み -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6607.067705964217!2d134.5181181727862!3d34.10708024299247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553725a43298fb3%3A0x1bc47188f8f9226a!2z44CSNzcxLTExNTQg5b6z5bO255yM5b6z5bO25biC5b-c56We55S65p2x6LKe5pa55Y2X5bed5re1!5e0!3m2!1sja!2sjp!4v1741610828520!5m2!1sja!2sjp" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <section id="reservation" class="section">
        <div class="container">
            <h2>席予約</h2>
            <form class="reservation-form" action="confirm.php" method="post" id="reservationForm">
                <div class="form-group">
                    <label for="reserve-name">お名前</label>
                    <input type="text" id="reserve-name" name="reserve-name" required>
                </div>
                <div class="form-group">
                    <label for="reserve-email">メールアドレス</label>
                    <input type="email" id="reserve-email" name="reserve-email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
                    <span class="error-message" id="email-error"></span>
                </div>
                <div class="form-group">
                    <label for="reserve-phone">電話番号（任意）</label>
                    <input type="tel" id="reserve-phone" name="reserve-phone" pattern="[0-9]{10,11}">
                    <span class="error-message" id="phone-error">電話番号は10桁または11桁の数字で入力してください</span>
                </div>
                <div class="form-group">
                    <label for="seat-type">席の場所</label>
                    <select id="seat-type" name="seat-type" required>
                        <option value="">席を選択してください</option>
                        <option value="SS席">SS席</option>
                        <option value="S席">S席</option>
                        <option value="A席">A席</option>
                        <option value="B席">B席</option>
                        <option value="C席">C席</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="reserve-date">予約日</label>
                    <input type="date" id="reserve-date" name="reserve-date" required>
                </div>
                <button type="submit" class="submit-btn" id="reservationSubmitBtn" disabled>予約する</button>
            </form>
        </div>
    </section>

</main>

<?php include 'footer.php'; ?>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Swiper
        var swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
            },
            
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

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
    });

    // タブ切り替え用のJavaScript
    document.addEventListener('DOMContentLoaded', function() {
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
</script>