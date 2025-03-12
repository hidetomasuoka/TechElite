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
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    const targetHeading = targetSection.querySelector('h2');
                    
                    // Get header height from CSS variable or use a fallback value
                    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64;
                    
                    if (targetHeading) {
                        // Calculate position above the h2 element, accounting for header height
                        const offset = 20; // Additional offset in pixels
                        const targetPosition = targetHeading.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    } else {
                        // Default behavior if no h2 found, still accounting for header height
                        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
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