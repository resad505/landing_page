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

/* ==========================================================================
   Checkpoint 4 — Contact Form Client-Side Validation
   ========================================================================== */
(function () {
    'use strict';

    // Email regex (RFC 5322 simplified)
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // --- Helper: set field as invalid ---
    function setInvalid(input, errorEl, message) {
        input.classList.remove('contact__input--valid', 'contact__textarea--valid');
        input.classList.add('contact__input--invalid', 'contact__textarea--invalid');
        input.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
    }

    // --- Helper: set field as valid ---
    function setValid(input, errorEl) {
        input.classList.remove('contact__input--invalid', 'contact__textarea--invalid');
        input.classList.add('contact__input--valid', 'contact__textarea--valid');
        input.setAttribute('aria-invalid', 'false');
        errorEl.textContent = '';
    }

    // --- Helper: clear field state (before first interaction) ---
    function clearState(input, errorEl) {
        input.classList.remove(
            'contact__input--invalid', 'contact__textarea--invalid',
            'contact__input--valid',   'contact__textarea--valid'
        );
        input.removeAttribute('aria-invalid');
        errorEl.textContent = '';
    }

    // --- Validate a single field, return true if valid ---
    function validateField(input, errorEl) {
        const value = input.value.trim();

        // Empty check
        if (value === '') {
            setInvalid(input, errorEl, 'Bu sahə boş buraxıla bilməz.');
            return false;
        }

        // Email-specific check
        if (input.type === 'email' || input.id === 'email') {
            if (!EMAIL_REGEX.test(value)) {
                setInvalid(input, errorEl, 'Düzgün e-mail ünvanı daxil edin (məs: ad@example.com).');
                return false;
            }
        }

        // Name minimum length check
        if (input.id === 'fullname' && value.length < 2) {
            setInvalid(input, errorEl, 'Ad ən azı 2 simvol olmalıdır.');
            return false;
        }

        // Message minimum length check
        if (input.id === 'message' && value.length < 10) {
            setInvalid(input, errorEl, 'Mesaj ən azı 10 simvol olmalıdır.');
            return false;
        }

        setValid(input, errorEl);
        return true;
    }

    // --- DOM elements ---
    const form        = document.querySelector('.contact__form');
    if (!form) return; // Guard: form yoxdursa çıx

    const nameInput   = document.getElementById('fullname');
    const emailInput  = document.getElementById('email');
    const msgInput    = document.getElementById('message');
    const nameError   = document.getElementById('fullname-error');
    const emailError  = document.getElementById('email-error');
    const msgError    = document.getElementById('message-error');
    const successBox  = document.getElementById('form-success');
    const submitBtn   = document.getElementById('submit-btn');

    const fields = [
        { input: nameInput,  error: nameError  },
        { input: emailInput, error: emailError },
        { input: msgInput,   error: msgError   },
    ];

    // --- Real-time validation on blur (focus lost) ---
    fields.forEach(({ input, error }) => {
        // Validate as user leaves the field
        input.addEventListener('blur', () => {
            if (input.value.trim() !== '') {
                validateField(input, error);
            }
        });

        // Clear invalid state while user is typing so they get instant feedback
        input.addEventListener('input', () => {
            if (input.classList.contains('contact__input--invalid') ||
                input.classList.contains('contact__textarea--invalid')) {
                validateField(input, error);
            }
        });
    });

    // --- Form submit handler ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        const results = fields.map(({ input, error }) => validateField(input, error));
        const allValid = results.every(Boolean);

        if (!allValid) {
            // Shake animation feedback
            form.classList.remove('contact__form--shake');
            // Force reflow to restart animation
            void form.offsetWidth;
            form.classList.add('contact__form--shake');
            form.addEventListener('animationend', () => {
                form.classList.remove('contact__form--shake');
            }, { once: true });

            // Focus first invalid field
            const firstInvalidIndex = results.findIndex(r => r === false);
            fields[firstInvalidIndex].input.focus();
            return;
        }

        // --- All valid: simulate successful submission ---
        submitBtn.disabled = true;
        submitBtn.textContent = 'Göndərilir...';

        // Simulate network delay (real project-də fetch/axios istifadə ediləcək)
        setTimeout(() => {
            // Hide form fields, show success
            fields.forEach(({ input, error }) => clearState(input, error));
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Göndər';

            if (successBox) {
                successBox.hidden = false;
                successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Auto-hide success message after 6 seconds
                setTimeout(() => {
                    successBox.hidden = true;
                }, 6000);
            }
        }, 800);
    });
})();
