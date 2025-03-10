<?php
// セッションを開始
session_start();

// フォームデータを取得し、セッションに保存
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION["form_data"] = [
        "name" => $_POST["name"] ?? "",
        "email" => $_POST["email"] ?? "",
        "message" => $_POST["message"] ?? ""
    ];
} else {
    // POST以外のアクセスはトップページにリダイレクト
    header("Location: index.php");
    exit;
}

// ヘッダーを読み込み
include 'header.php';
?>

<main>
    <section class="section">
        <div class="container">
            <h2>入力内容の確認</h2>
            <div class="confirm-content">
                <div class="confirm-item">
                    <h3>お名前</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["name"]); ?></p>
                </div>
                <div class="confirm-item">
                    <h3>メールアドレス</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["email"]); ?></p>
                </div>
                <div class="confirm-item">
                    <h3>メッセージ</h3>
                    <p><?php echo nl2br(htmlspecialchars($_SESSION["form_data"]["message"])); ?></p>
                </div>
                
                <div class="button-group">
                    <form action="index.php#contact" method="get">
                        <button type="submit" class="back-btn">戻る</button>
                    </form>
                    <form action="thanks.php" method="post">
                        <button type="submit" class="submit-btn">送信</button>
                    </form>
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