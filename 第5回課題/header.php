<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechElite</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/navigation.js"></script>
</head>
<body>
    <header>
        <div class="header_content">
            <a href="./index.php"><img src="img/logo.png" alt="TechElite Logo"></a>
            <button class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul>
                <?php 
                $current_page = basename($_SERVER['PHP_SELF']);
                if ($current_page == 'index.php'): ?>
                    <li><a href="#schedule">スケジュール</a></li>
                    <li><a href="#access">アクセス</a></li>
                    <li><a href="#reservation">席予約</a></li>
                <?php else: ?>
                    <li><a href="index.php#schedule">スケジュール</a></li>
                    <li><a href="index.php#access">アクセス</a></li>
                    <li><a href="index.php#reservation">席予約</a></li>
                <?php endif; ?>
            </ul>
        </div>
    </header>