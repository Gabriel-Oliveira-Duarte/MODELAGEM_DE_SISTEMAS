/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', () => {

    const navbarShrink = () => {
        const navbar = document.body.querySelector('#mainNav');
        if (!navbar) return;
        navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const switchToLogin = document.getElementById('switchToLogin');
    const switchToRegister = document.getElementById('switchToRegister');
    const loginLink = document.getElementById('loginLink');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const authModalLabel = document.getElementById('authModalLabel');

    const showLogin = () => {
        registerForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
        authModalLabel.textContent = 'Entrar na conta';
    };

    const showRegister = () => {
        loginForm.classList.add('d-none');
        registerForm.classList.remove('d-none');
        authModalLabel.textContent = 'Crie sua conta';
    };

    switchToLogin.addEventListener('click', e => { e.preventDefault(); showLogin(); });
    switchToRegister.addEventListener('click', e => { e.preventDefault(); showRegister(); });
    loginLink.addEventListener('click', e => {
        e.preventDefault();
        new bootstrap.Modal(document.getElementById('authModal')).show();
        showLogin();
    });

    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.replace(/\D/g, '');
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirmPassword').value;

        let valid = true;

        if (name.length < 2 || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)) {
            valid = false; document.getElementById('regName').classList.add('is-invalid');
        } else document.getElementById('regName').classList.remove('is-invalid');

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            valid = false; document.getElementById('regEmail').classList.add('is-invalid');
        } else document.getElementById('regEmail').classList.remove('is-invalid');

        if (phone.length < 10 || phone.length > 11) {
            valid = false; document.getElementById('regPhone').classList.add('is-invalid');
        } else document.getElementById('regPhone').classList.remove('is-invalid');

        if (password.length < 6) {
            valid = false; document.getElementById('regPassword').classList.add('is-invalid');
        } else document.getElementById('regPassword').classList.remove('is-invalid');

        if (password !== confirm) {
            valid = false; document.getElementById('regConfirmPassword').classList.add('is-invalid');
        } else document.getElementById('regConfirmPassword').classList.remove('is-invalid');

        if (!valid) return;
        alert('Registro válido!');
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const identifier = document.getElementById('loginIdentifier').value.trim();
        const password = document.getElementById('loginPassword').value;
        let valid = true;

        if (!/^\S+@\S+\.\S+$/.test(identifier) && !/^\d{10,11}$/.test(identifier.replace(/\D/g, ''))) {
            valid = false; document.getElementById('loginIdentifier').classList.add('is-invalid');
        } else document.getElementById('loginIdentifier').classList.remove('is-invalid');

        if (password.length < 1) {
            valid = false; document.getElementById('loginPassword').classList.add('is-invalid');
        } else document.getElementById('loginPassword').classList.remove('is-invalid');

        if (!valid) return;
        alert('Login válido!');
    });

});

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


