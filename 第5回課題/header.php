<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechElite</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap">
    <link rel="stylesheet" href="css/style.css">
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('header ul');
            
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    nav.classList.toggle('active');
                });
            }
        });
    </script>
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
                <li><a href="#schedule">スケジュール</a></li>
                <li><a href="#access">アクセス</a></li>
                <li><a href="#reservation">席予約</a></li>
            </ul>
        </div>
    </header>
</body>
</html>