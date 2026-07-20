document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuOverlay = document.getElementById('menu-overlay');
    const navLinks = document.querySelectorAll('.header__nav-link');

    if (!menuToggle || !mainNav || !menuOverlay) return;

    // Open Mobile Menu
    function openMenu() {
        menuToggle.classList.add('header__toggle--active');
        mainNav.classList.add('header__nav--open');
        menuOverlay.classList.add('header__overlay--visible');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    // Close Mobile Menu
    function closeMenu() {
        menuToggle.classList.remove('header__toggle--active');
        mainNav.classList.remove('header__nav--open');
        menuOverlay.classList.remove('header__overlay--visible');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Toggle Mobile Menu
    function toggleMenu() {
        const isOpen = mainNav.classList.contains('header__nav--open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on ESC key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('header__nav--open')) {
            closeMenu();
            menuToggle.focus();
        }
    });

    // Reset layout on window resize to tablet/desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (mainNav.classList.contains('header__nav--open')) {
                closeMenu();
            }
        }
    });
});
