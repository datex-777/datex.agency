// DateX Agency Scripts

// Мобільне меню
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Багатомовність
    // Отримати поточну мову з URL або localStorage
    let currentLang = localStorage.getItem('datex-language') || 'ru';
    
    // Встановити активну мову
    setActiveLanguage(currentLang);
    
    // Додати обробники подій для перемикачів мови
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
            localStorage.setItem('datex-language', lang);
        });
    });
    
    // Плавний скролінг для навігаційних посилань
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закриваємо мобільне меню після кліку
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Обробка форми контактів
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Тут можна додати код для відправки форми через AJAX
            // або інтеграцію з сервісом форм
            
            const successMessage = {
                'en': 'Thank you for your message! We will contact you soon.',
                'ua': 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.',
                'ru': 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
                'es': '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.'
            };
            
            alert(successMessage[currentLang]);
            contactForm.reset();
        });
    }
    
    // Ініціалізація AOS (якщо є)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Створення SVG логотипу як альтернатива, якщо PNG не завантажиться
    createLogoSVG();
});

// Функція для встановлення активної мови
function setActiveLanguage(lang) {
    // Сховати всі мовні блоки
    document.querySelectorAll('[lang]').forEach(elem => {
        elem.style.display = 'none';
    });
    
    // Показати блоки з вибраною мовою
    document.querySelectorAll(`[lang="${lang}"]`).forEach(elem => {
        elem.style.display = '';
    });
    
    // Оновити активний клас для перемикачів мови
    document.querySelectorAll('.lang-switcher').forEach(switcher => {
        if (switcher.getAttribute('data-lang') === lang) {
            switcher.classList.add('active');
        } else {
            switcher.classList.remove('active');
        }
    });
    
    // Оновити HTML атрибут мови
    document.documentElement.setAttribute('lang', lang);
}

// Створення SVG логотипу як альтернатива, якщо PNG не завантажиться
function createLogoSVG() {
    const logoContainers = document.querySelectorAll('.logo');
    
    // Перевіряємо, чи завантажились PNG логотипи
    const logoImgs = document.querySelectorAll('.logo img');
    
    logoImgs.forEach((img, index) => {
        img.onerror = function() {
            // Якщо зображення не завантажилось, створюємо SVG
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "150");
            svg.setAttribute("height", "50");
            svg.setAttribute("viewBox", "0 0 150 50");
            
            // Створюємо текст "Date"
            const dateText = document.createElementNS(svgNS, "text");
            dateText.setAttribute("x", "10");
            dateText.setAttribute("y", "35");
            dateText.setAttribute("font-family", "Arial, sans-serif");
            dateText.setAttribute("font-weight", "bold");
            dateText.setAttribute("font-size", "30");
            dateText.textContent = "Date";
            
            // Створюємо текст "X" червоного кольору
            const xText = document.createElementNS(svgNS, "text");
            xText.setAttribute("x", "80");
            xText.setAttribute("y", "35");
            xText.setAttribute("font-family", "Arial, sans-serif");
            xText.setAttribute("font-weight", "bold");
            xText.setAttribute("font-size", "30");
            xText.setAttribute("fill", "#e63946");
            xText.textContent = "X";
            
            // Додаємо тексти до SVG
            svg.appendChild(dateText);
            svg.appendChild(xText);
            
            // Замінюємо зображення на SVG
            logoContainers[index].innerHTML = '';
            logoContainers[index].appendChild(svg);
        };
    });
}
