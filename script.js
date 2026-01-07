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
    linkedinLink.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    `;
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
