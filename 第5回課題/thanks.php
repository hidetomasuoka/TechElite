<?php
// セッション開始
session_start();

// POSTリクエストがない、またはフォームデータが存在しない場合はトップページにリダイレクト
if ($_SERVER["REQUEST_METHOD"] != "POST" || empty($_SESSION["form_data"])) {
    header("Location: index.php");
    exit;
}

// 実際のメール送信ロジックはここに記述（今回は省略）
// mail($_SESSION["form_data"]["email"], "お問い合わせありがとうございます", "メッセージを受け付けました。");

// 送信完了後、セッション内のフォームデータをクリア
$formData = $_SESSION["form_data"];
unset($_SESSION["form_data"]);

// ヘッダーを読み込み
include 'header.php';
?>

<main>
    <section class="section">
        <div class="container">
            <h2>送信完了</h2>
            <div class="thanks-content">
                <p class="thanks-message">お問い合わせいただきありがとうございます。<br>担当者より順次ご連絡いたします。</p>
                <div class="thanks-details">
                    <div class="thanks-item">
                        <h3>お名前</h3>
                        <p><?php echo htmlspecialchars($formData["name"]); ?></p>
                    </div>
                    <div class="thanks-item">
                        <h3>メールアドレス</h3>
                        <p><?php echo htmlspecialchars($formData["email"]); ?></p>
                    </div>
                    <div class="thanks-item">
                        <h3>メッセージ</h3>
                        <p><?php echo nl2br(htmlspecialchars($formData["message"])); ?></p>
                    </div>
                </div>
                <div class="back-home">
                    <a href="index.php" class="home-btn">トップページに戻る</a>
                </div>
            </div>
        </div>
    </section>
</main>

<footer>
    <div class="container">
        <p>&copy; 2023 TechElite All Rights Reserved.</p>
    </div>
</footer>