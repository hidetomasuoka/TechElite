document.addEventListener('DOMContentLoaded', function() {
    // Store the current page for reference
    const currentPage = window.location.pathname.split('/').pop() || 'index.php';
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const isHashLink = href.startsWith('#');
            const hasHash = href.includes('#');
            
            // Handle hash links differently based on current page
            if (hasHash) {
                const targetPage = href.split('#')[0] || currentPage;
                const hash = '#' + href.split('#')[1];
                
                // If we're already on the target page and it's a hash link
                if ((targetPage === '' || targetPage === currentPage) && document.querySelector(hash)) {
                    e.preventDefault();
                    
                    const targetSection = document.querySelector(hash);
                    if (!targetSection) return;
                    
                    const targetHeading = targetSection.querySelector('h2');
                    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64;
                    
                    // Close mobile menu if open
                    const nav = document.querySelector('header ul');
                    const isMenuOpen = nav.classList.contains('active');
                    const hamburger = document.querySelector('.hamburger');
                    
                    if (isMenuOpen) {
                        nav.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                    
                    let additionalOffset = 20;
                    
                    setTimeout(() => {
                        const targetPosition = (targetHeading || targetSection).getBoundingClientRect().top 
                            + window.pageYOffset 
                            - headerHeight 
                            - additionalOffset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, isMenuOpen ? 300 : 0);
                }
            }
        });
    });
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active'); // ハンバーガーアイコンの状態も切り替え
        });
    }
    
    // メニュー外クリックでメニューを閉じる
    document.addEventListener('click', function(e) {
        if (
            nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !hamburger.contains(e.target)
        ) {
            nav.classList.remove('active');
            hamburger.classList.remove('active'); // ハンバーガーアイコンも元に戻す
        }
    });
});