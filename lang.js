// Визначення текстів для кожної мови
const translations = {
  ua: {
    // Навігація
    nav_about: "Про нас",
    nav_services: "Послуги",
    nav_why_us: "Чому ми",
    nav_testimonials: "Відгуки",
    nav_contact: "Контакти",
    
    // Герой-секція
    hero_title: "DateX - Міжнародне скаутингове агентство",
    hero_description: "Ми займаємося пошуком та підбором анкет, а також налагодженням співпраці між виконавцями та агентствами по всьому світу. Забезпечуємо стабільний потік кандидатів, прозору комунікацію та індивідуальний підхід під задачі кожного партнера.",
    btn_start: "Почати співпрацю",
    btn_services: "Наші послуги",
    
    // Про нас
    about_title: "Про нас",
    about_subtitle: "Більше, ніж агентство. Ми — твій бізнес-партнер"
  },
  
  ru: {
    // Навигация
    nav_about: "О нас",
    nav_services: "Услуги",
    nav_why_us: "Почему мы",
    nav_testimonials: "Отзывы",
    nav_contact: "Контакты",
    
    // Герой-секция
    hero_title: "DateX - Международное скаутинговое агентство",
    hero_description: "Мы занимаемся поиском и подбором анкет, а также налаживанием сотрудничества между исполнителями и агентствами по всему миру. Обеспечиваем стабильный поток кандидатов, прозрачную коммуникацию и индивидуальный подход под задачи каждого партнёра.",
    btn_start: "Начать сотрудничество",
    btn_services: "Наши услуги",
    
    // О нас
    about_title: "О нас",
    about_subtitle: "Больше, чем агентство. Мы — твой бизнес-партнёр"
  },
  
  en: {
    // Navigation
    nav_about: "About Us",
    nav_services: "Services",
    nav_why_us: "Why Us",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "DateX - International Scouting Agency",
    hero_description: "We are engaged in searching and selecting profiles, as well as establishing cooperation between talent and agencies worldwide. We provide a stable flow of candidates, transparent communication, and an individual approach tailored to each partner's needs.",
    btn_start: "Start Cooperation",
    btn_services: "Our Services",
    
    // About Us
    about_title: "About Us",
    about_subtitle: "More than an agency. We are your business partner"
  }
};

// Функція для встановлення початкової мови
function setInitialLanguage() {
  // Перевіряємо, чи є збережена мова в localStorage
  const savedLang = localStorage.getItem('dateXLang');
  
  // Якщо є збережена мова - використовуємо її, інакше використовуємо російську (як у вашому поточному сайті)
  const currentLang = savedLang || 'ru';
  
  // Зберігаємо поточну мову
  localStorage.setItem('dateXLang', currentLang);
  
  // Оновлюємо кнопку вибраної мови
  updateLanguageButtons(currentLang);
  
  // Застосовуємо переклади
  applyTranslations(currentLang);
}

// Функція для перемикання мови
function switchLanguage(lang) {
  // Зберігаємо вибрану мову
  localStorage.setItem('dateXLang', lang);
  
  // Оновлюємо кнопку вибраної мови
  updateLanguageButtons(lang);
  
  // Застосовуємо переклади
  applyTranslations(lang);
}

// Функція для оновлення вигляду кнопок мови
function updateLanguageButtons(currentLang) {
  // Знаходимо всі кнопки мови
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Видаляємо клас active з усіх кнопок
  langButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Додаємо клас active до поточної мовної кнопки
  const activeButton = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Функція для застосування перекладів на сторінці
function applyTranslations(lang) {
  // Отримуємо переклади для вибраної мови
  const texts = translations[lang];
  
  // Перевіряємо, чи існує такий переклад
  if (!texts) return;
  
  // Застосовуємо переклади до всіх елементів з атрибутом data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    
    // Перевіряємо, чи існує переклад для цього ключа
    if (texts[key]) {
      // Якщо елемент є input або textarea, оновлюємо placeholder або value
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.getAttribute('type') !== 'submit') {
          element.placeholder = texts[key];
        } else {
          element.value = texts[key];
        }
      } 
      // Для всіх інших елементів оновлюємо innerHTML
      else {
        element.innerHTML = texts[key];
      }
    }
  });
}

// Ініціалізація мови при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
  // Встановлюємо початкову мову
  setInitialLanguage();
  
  // Додаємо обробники подій для кнопок перемикання мови
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
});
