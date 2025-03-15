<?php include 'header.php'; ?>

<body>
    <!-- Swiper JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
 
    <!-- Core Module System -->
    <script src="js/modules.js"></script>
    
    <!-- Individual Modules -->
    <script src="js/formModule.js"></script>
    <script src="js/tabModule.js"></script>
    <script src="js/slider.js"></script>
    
    <!-- Main Application Code -->
    <script src="js/main.js"></script>
    
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
                    <!-- 既存の画像を利用して追加のスライドを作成 -->
                    <div class="swiper-slide"><img src="img/slide_1.jpg" alt="Slide 4"></div>
                    <div class="swiper-slide"><img src="img/slide_2.jpg" alt="Slide 5"></div>
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

        <div class="container">
            <div class="catchcopy">
                <p class="catchcopy-text"><strong>今年も始まる</strong><span class="highlight">夏祭り</span></p>
            </div>
            <section id="schedule" class="section">
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
        </div>
    </section>

    <section id="access" class="section">
        <div class="container">
            <h2>アクセス</h2>
            <div class="access-content">
                <div class="access-info">
                    <p>〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
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
            <div class="simple-form">
                <form action="confirm.php" method="post" id="reservationForm">
                    <div class="form-group">
                        <label for="reserve-name">お名前<span class="required">*必須</span></label>
                        <input type="text" id="reserve-name" name="name" placeholder="例) 田中 太郎" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="seat-type">席の場所<span class="required">*必須</span></label>
                        <select id="seat-type" name="seat-type" required>
                            <option value="">---</option>
                            <option value="SS席">SS席</option>
                            <option value="S席">S席</option>
                            <option value="A席">A席</option>
                            <option value="B席">B席</option>
                            <option value="C席">C席</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="reserve-email">メールアドレス<span class="required">*必須</span></label>
                        <input type="email" id="reserve-email" name="email" placeholder="例) abcd123@example.com" required>
                        <div id="email-error" class="error-message"></div>
                    </div>
                    
                    <div class="form-group">
                        <label for="reserve-phone">電話番号<span class="optional">任意</span></label>
                        <input type="tel" id="reserve-phone" name="phone" placeholder="例) 09012345678">
                        <div id="phone-error" class="error-message"></div>
                    </div>
                    
                    <button type="submit" class="submit-btn" id="reservationSubmitBtn">送信</button>
                </form>
            </div>
        </div>
    </section>

</main>

<?php include 'footer.php'; ?>