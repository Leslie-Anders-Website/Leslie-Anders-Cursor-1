// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    
    // Create mobile menu
    const mobileNavList = document.createElement('ul');
    mobileNavList.className = 'mobile-nav-list';
    
    const navItems = [
        { text: 'Home', href: '#home' },
        { text: 'Case Studies', href: '#case-studies' },
        { text: 'Logos & Wordmarks', href: '#logos' },
        { text: 'Philosophy', href: '#philosophy' },
        { text: 'Contact', href: '#contact' }
    ];
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.className = 'mobile-nav-link';
        a.textContent = item.text;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(item.href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenuOverlay.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        li.appendChild(a);
        mobileNavList.appendChild(li);
    });
    
    // Add LinkedIn link
    const linkedinLi = document.createElement('li');
    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/';
    linkedinLink.target = '_blank';
    linkedinLink.rel = 'noopener noreferrer';
    linkedinLink.className = 'mobile-nav-link linkedin-link';
    linkedinLink.setAttribute('aria-label', 'LinkedIn');
    const linkedinImg = document.createElement('img');
    linkedinImg.src = 'linkedin-icon.png';
    linkedinImg.alt = 'LinkedIn';
    linkedinImg.className = 'linkedin-icon';
    linkedinLink.appendChild(linkedinImg);
    linkedinLi.appendChild(linkedinLink);
    mobileNavList.appendChild(linkedinLi);
    
    mobileMenuOverlay.appendChild(mobileNavList);
    document.body.appendChild(mobileMenuOverlay);

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Smooth scroll for desktop nav links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
