/*=========================================
  LOADER
=========================================*/

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        loader.style.visibility = "hidden";
    }, 800);
});

/*=========================================
  MOBILE MENU
=========================================*/

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/*=========================================
  CLOSE MENU
=========================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/*=========================================
  STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.padding = "15px 8%";

        header.style.background = "rgba(15,23,42,.95)";

    } else {

        header.style.padding = "22px 8%";

        header.style.background = "rgba(15,23,42,.65)";
    }

});

/*=========================================
  SCROLL PROGRESS BAR
=========================================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / pageHeight) * 100;

    progress.style.width = percent + "%";

});

/*=========================================
  BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
  DARK / LIGHT THEME
=========================================*/

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            themeToggle.classList.remove("fa-moon");
            themeToggle.classList.add("fa-sun");

        } else {

            themeToggle.classList.remove("fa-sun");
            themeToggle.classList.add("fa-moon");

        }

    });

}

/*=========================================
  SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
    ".section, .project-card, .service-card, .skill, .timeline-item, .certificate-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*=========================================
  ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
  TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Python Full Stack Developer",
        "Django Developer",
        "React Developer",
        "Backend Developer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 90);

    }

    typeEffect();

}

/*=========================================
  CONTACT FORM
=========================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            this.querySelector("input[type='text']").value.trim();

        const email =
            this.querySelector("input[type='email']").value.trim();

        const message =
            this.querySelector("textarea").value.trim();

        if (!name || !email || !message) {

            alert("Please fill all required fields.");

            return;

        }

        alert("Thank you! Your message has been captured.");

        this.reset();

    });

}

/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
  END
=========================================*/

console.log("Portfolio Loaded Successfully 🚀");
