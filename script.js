// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('.contact-form');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#2c3e50';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #2c3e50, #3498db)';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);


    console.log('Form submitted:', Object.fromEntries(formData));

   
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.color = '#2ecc71';
    successMessage.style.marginTop = '15px';
    contactForm.appendChild(successMessage);

    
    contactForm.reset();

   
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});


document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');
        
    });
});

document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.classList.toggle('fas');
        this.classList.toggle('far');
        this.style.color = this.classList.contains('fas') ? '#e74c3c' : '#bdc3c7';
    });
});