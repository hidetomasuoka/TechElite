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
<body>
    <main>
        <section class="section">
            <div class="container">
                <h2 class="section-title">お問い合わせ内容確認</h2>
                
                <div class="confirm-content">
                    <div class="confirm-item">
                        <h3>お名前</h3>
                        <p><?php echo htmlspecialchars($_SESSION["form_data"]["name"]); ?></p>
                    </div>
                    
                    <div class="confirm-item">
                        <h3>希望席</h3>
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
                        <button type="button" onclick="location.href='index.php#reservation'" class="back-btn">戻る</button>
                        <form action="thanks.php" method="post" style="margin: 0;">
                            <button type="submit" class="submit-btn">送信</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include 'footer.php'; ?>
</body>