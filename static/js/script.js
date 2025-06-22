// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Optional: reveal only once
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

// Typing effect
const typingTarget = document.querySelector('.typing-text');
const typingPhrases = [
    "Hi, I'm Prince Vaishya",
    "Aspiring Data Scientist",
    "Machine Learning Enthusiast",
    "Loves Solving Problems"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentPhrase = typingPhrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);

    typingTarget.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(typeLoop, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 40);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        }
        setTimeout(typeLoop, 1200);
    }
}

window.addEventListener('DOMContentLoaded', typeLoop);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active-link");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active-link");
        }
    });
});

// EmailJS form handler
// emailjs.init("Aj2fH2wIebqXVUY1H"); // Replace with your Public Key

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();
    
//     emailjs.sendForm("service_jdd7y4f", "template_7mhah0r", this)
//         .then(() => {
//             document.getElementById("form-status").textContent = "Message sent successfully!";
//             this.reset();
//         }, (error) => {
//             document.getElementById("form-status").textContent = "Oops! Something went wrong.";
//             console.error(error);
//         });
// });

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.opacity = 1;
    } else {
        backToTopBtn.style.opacity = 0;
        setTimeout(() => {
            if (window.scrollY <= 300) backToTopBtn.style.display = "none";
        }, 300);
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const progressBars = document.querySelectorAll('.progress');

const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const targetWidth = progress.getAttribute('data-progress');
            progress.style.width = targetWidth;
            observer.unobserve(progress);
        }
    });
}, {
    threshold: 0.6
});

progressBars.forEach(bar => progressObserver.observe(bar));


document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.closest('.project-card').querySelector('.project-details');
        const isVisible = details.style.display === 'block';

        // Hide others
        document.querySelectorAll('.project-details').forEach(d => d.style.display = 'none');

        // Toggle current
        details.style.display = isVisible ? 'none' : 'block';
    });
});

const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    hamburger.classList.toggle('active');
});
