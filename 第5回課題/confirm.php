<?php
// セッションを開始
session_start();

// フォームデータを取得し、セッションに保存
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_SESSION["form_data"] = [
        "name" => $_POST["name"] ?? "",
        "seat_type" => $_POST["seat-type"] ?? "",
        "email" => $_POST["email"] ?? "",
        "phone" => $_POST["phone"] ?? ""
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
            <h2>予約内容の確認</h2>
            <div class="confirm-content">
                <div class="confirm-item">
                    <h3>お名前</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["name"]); ?></p>
                </div>
                <div class="confirm-item">
                    <h3>席の場所</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["seat_type"]); ?></p>
                </div>
                <div class="confirm-item">
                    <h3>メールアドレス</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["email"]); ?></p>
                </div>
                <div class="confirm-item">
                    <h3>電話番号</h3>
                    <p><?php echo htmlspecialchars($_SESSION["form_data"]["phone"]); ?></p>
                </div>
                
                <div class="button-group">
                    <form action="index.php#reservation" method="get">
                        <button type="submit" class="back-btn">戻る</button>
                    </form>
                    <form action="thanks.php" method="post">
                        <button type="submit" class="submit-btn">予約を確定する</button>
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