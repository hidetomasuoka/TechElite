<?php
session_start();

// セッションデータが存在しない場合はトップページにリダイレクト
if (!isset($_SESSION["form_data"])) {
    header("Location: index.php");
    exit;
}

include 'header.php';
?>

<main style="padding-bottom: 50px;">
    <section class="section">
        <div class="container">
            <h2>お問い合わせありがとうございました</h2>
        </div>
    </section>
</main>

<?php
// セッションデータをクリア
session_destroy();
include 'footer.php';
?>