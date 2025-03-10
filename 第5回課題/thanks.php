<?php
session_start();

// セッションデータが存在しない場合はトップページにリダイレクト
if (!isset($_SESSION["form_data"])) {
    header("Location: index.php");
    exit;
}

include 'header.php';
?>

<main>
    <section class="section">
        <div class="container">
            <h2>ご予約ありがとうございます</h2>
            <div class="thanks-content">
                <p>以下の内容で予約を承りました。</p>
                <div class="reservation-details">
                    <div class="detail-item">
                        <h3>お名前</h3>
                        <p><?php echo htmlspecialchars($_SESSION["form_data"]["name"]); ?></p>
                    </div>
                    <div class="detail-item">
                        <h3>席の場所</h3>
                        <p><?php echo htmlspecialchars($_SESSION["form_data"]["seat_type"]); ?></p>
                    </div>
                    <div class="detail-item">
                        <h3>メールアドレス</h3>
                        <p><?php echo htmlspecialchars($_SESSION["form_data"]["email"]); ?></p>
                    </div>
                    <?php if (!empty($_SESSION["form_data"]["phone"])): ?>
                    <div class="detail-item">
                        <h3>電話番号</h3>
                        <p><?php echo htmlspecialchars($_SESSION["form_data"]["phone"]); ?></p>
                    </div>
                    <?php endif; ?>
                </div>
                <p class="contact-info">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
                <div class="button-group">
                    <a href="index.php" class="back-to-home">トップページに戻る</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
// セッションデータをクリア
session_destroy();
include 'footer.php';
?>