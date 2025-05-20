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
    about_subtitle: "Більше, ніж агентство. Ми — твій бізнес-партнер",
    about_p1: "DateX — це команда нового покоління у світі дейтингу. Вже понад 3 роки ми співпрацюємо з провідними міжнародними платформами, включаючи Dating.com, Dream Single, PlaceToChat та інші. Ми не просто в індустрії — ми формуємо її стандарти.",
    about_p2: "Для моделей ми надаємо все необхідне для старту та зростання: доступ до топових платформ, перевірені робочі інструменти, системні рішення та сильну команду. Ми навчаємо, налаштовуємо процеси і даємо можливість масштабуватися.",
    about_p3: "Партнерам ми пропонуємо результат, а не обіцянки: постійний потік якісних анкет, висока залученість і прозорість на кожному етапі роботи.",
    about_p4: "Сьогодні DateX активно виходить на європейський ринок і розвиває нові digital-напрямки в ніші дейтингу.",
    about_p5: "Ми будуємо міжнародний бренд з акцентом на ефективність, довіру та довгострокове партнерство. DateX — коли досвід працює на результат.",
    
    // Чому ми
    why_title: "Чому обирають нас",
    why_card1_title: "200+ успішних історій співпраці",
    why_card1_text: "Нам довірилися понад 200 моделей — і кожна з них вийшла на гідний дохід завдяки вибудуваній системі та доступу до кращих платформ.",
    why_card2_title: "Перевірені платформи",
    why_card2_text: "Ми співпрацюємо тільки з надійними і перевіреними дейтинг-платформами світового рівня.",
    why_card3_title: "Підтримка 24/7",
    why_card3_text: "Наша команда доступна цілодобово: від реєстрації до перших виплат.",
    why_card4_title: "Особистий менеджер",
    why_card4_text: "Кожна модель отримує персонального менеджера для максимальної ефективності.",
    why_card5_title: "Допомога з іміджем",
    why_card5_text: "Організовуємо професійні фотосесії, допомагаємо зі створенням іміджу та навчанням.",
    why_card6_title: "Високий трафік",
    why_card6_text: "Забезпечуємо якісний трафік для наших моделей, що підвищує щомісячний дохід.",
    
    // Статистика
    stats_years: "Років досвіду",
    stats_models: "Задоволених моделей",
    stats_partners: "Сайтів-партнерів",
    stats_support: "Підтримка",
    
    // Послуги
    services_title: "Наші послуги для моделей та партнерів",
    service1_title: "Повний супровід та просування для моделей",
    service1_text: "Ми беремо на себе всі етапи: від реєстрації до активної роботи на платформах. Тобі не потрібно вникати в технічні деталі — ми все зробимо за тебе.",
    service2_title: "Допомога з контентом",
    service2_text: "За необхідності ми організовуємо професійну фотосесію, підбираємо образ, допомагаємо з візажистом, стилістом і фотографом. Щоб ти виглядала максимально ефектно.",
    service3_title: "Конфіденційність співпраці",
    service3_text: "Ми за конфіденційність співпраці! Ваша зручність та безпека — наш пріоритет.",
    service4_title: "Прозора співпраця для партнерів",
    service4_text: "Надаємо тільки активних і перевірених моделей, а також весь необхідний контент і матеріали для початку роботи.",
    service5_title: "Гарантія на співпрацю",
    service5_text: "Забезпечуємо надійну і чесну взаємодію. У випадку, якщо співпраця з моделлю припиняється з об'єктивних причин — надаємо заміну або повертаємо оплату.",
    service6_title: "Консультаційна підтримка",
    service6_text: "Консультуємо агентства з усіх питань, пов'язаних з роботою. Допомагаємо у вирішенні завдань і після закінчення гарантійного терміну.",
    
    // Відгуки
    testimonials_title: "Відгуки наших клієнтів",
    testimonial1: "\"З DateX я познайомилася з майбутнім чоловіком всього за 4 місяці. Справжні професіонали!\"",
    testimonial1_author: "— Марина, Київ",
    testimonial2: "\"Я працювала з різними агентствами, але тільки тут відчула справжню турботу та індивідуальний підхід.\"",
    testimonial2_author: "— Анастасія, Львів",
    testimonial3: "\"Рекомендую! Все прозоро, чесно і дуже результативно.\"",
    testimonial3_author: "— Вікторія, Одеса",
    
    // Контакти
    contact_title: "Зв'яжіться з нами",
    contact_name: "Ваше ім'я",
    contact_email: "Email",
    contact_phone: "Телефон",
    contact_message: "Повідомлення",
    contact_send: "Надіслати",
    contact_info: "Контактна інформація",
    contact_address: "Адреса",
    contact_location: "Україна, Київ",
    contact_social: "Ми в соцмережах",
    our_social_media: "Наші соціальні мережі",
    
    // Підвал
    footer_description: "DateX — професійне дейтинг-агентство з бездоганною репутацією, яке допомагає знаходити справжнє кохання.",
    footer_services: "Наші послуги",
    footer_service1: "Реєстрація на сайтах",
    footer_service2: "Створення анкет",
    footer_service3: "Фотосесії",
    footer_service4: "Супровід спілкування",
    footer_service5: "Переклад повідомлень",
    footer_links: "Корисні посилання",
    footer_link_blog: "Блог",
    footer_contacts: "Контакти",
    footer_copyright: "© 2025 DateX Agency. Усі права захищені."
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
    about_subtitle: "Больше, чем агентство. Мы — твой бизнес-партнёр",
    about_p1: "DateX — это команда нового поколения в мире дейтинга. Уже более 3 лет мы сотрудничаем с ведущими международными платформами, включая Dating.com, Dream Single, PlaceToChat и другие. Мы не просто в индустрии — мы формируем её стандарты.",
    about_p2: "Для моделей мы предоставляем всё необходимое для старта и роста: доступ к топовым платформам, проверенные рабочие инструменты, системные решения и сильную команду. Мы обучаем, настраиваем процессы и даём возможность масштабироваться.",
    about_p3: "Партнёрам мы предлагаем результат, а не обещания: постоянный поток качественных анкет, высокая вовлечённость и прозрачность на каждом этапе работы.",
    about_p4: "Сегодня DateX активно выходит на европейский рынок и развивает новые digital-направления в нише дейтинга.",
    about_p5: "Мы строим международный бренд с акцентом на эффективность, доверие и долгосрочное партнёрство. DateX — когда опыт работает на результат.",
    
    // Почему мы
    why_title: "Почему выбирают нас",
    why_card1_title: "200+ успешных историй сотрудничества",
    why_card1_text: "Нам доверились более 200 моделей — и каждая из них вышла на достойный доход благодаря выстроенной системе и доступу к лучшим платформам.",
    why_card2_title: "Проверенные платформы",
    why_card2_text: "Мы сотрудничаем только с надежными и проверенными дейтинг-платформами мирового уровня.",
    why_card3_title: "Поддержка 24/7",
    why_card3_text: "Наша команда доступна круглосуточно: от регистрации до первых выплат.",
    why_card4_title: "Личный менеджер",
    why_card4_text: "Каждая модель получает персонального менеджера для максимальной эффективности.",
    why_card5_title: "Помощь с имиджем",
    why_card5_text: "Организуем профессиональные фотосессии, помогаем с созданием имиджа и обучением.",
    why_card6_title: "Высокий трафик",
    why_card6_text: "Обеспечиваем качественный трафик для наших моделей, что повышает ежемесячный доход.",
    
    // Статистика
    stats_years: "Года опыта",
    stats_models: "Довольных моделей",
    stats_partners: "Сайтов-партнеров",
    stats_support: "Поддержка",
    
    // Услуги
    services_title: "Наши услуги для моделей и партнеров",
    service1_title: "Полное сопровождение и продвижение для моделей",
    service1_text: "Мы берём на себя все этапы: от регистрации до активной работы на платформах. Тебе не нужно вникать в технические детали — мы всё сделаем за тебя.",
    service2_title: "Помощь с контентом",
    service2_text: "При необходимости мы организуем профессиональную фотосессию, подбираем образ, помогаем с визажистом, стилистом и фотографом. Чтобы ты выглядела максимально эффектно.",
    service3_title: "Конфиденциальность сотрудничества",
    service3_text: "Мы за конфиденциальность сотрудничества! Ваше удобство и безопасность — наш приоритет.",
    service4_title: "Прозрачное сотрудничество для партнёров",
    service4_text: "Предоставляем только активных и проверенных моделей, а также весь необходимый контент и материалы для начала работы.",
    service5_title: "Гарантия на сотрудничество",
    service5_text: "Обеспечиваем надёжное и честное взаимодействие. В случае, если сотрудничество с моделью прекращается по объективным причинам — предоставляем замену или возвращаем оплату.",
    service6_title: "Консультационная поддержка",
    service6_text: "Консультируем агентства по всем вопросам, связанным с работой. Помогаем в решении задач и после окончания гарантийного срока.",
    
    // Отзывы
    testimonials_title: "Отзывы наших клиентов",
    testimonial1: "\"С DateX я познакомилась с будущим мужем всего за 4 месяца. Настоящие профессионалы!\"",
    testimonial1_author: "— Марина, Киев",
    testimonial2: "\"Я работала с разными агентствами, но только здесь почувствовала настоящую заботу и индивидуальный подход.\"",
    testimonial2_author: "— Анастасия, Львов",
    testimonial3: "\"Рекомендую! Всё прозрачно, честно и очень результативно.\"",
    testimonial3_author: "— Виктория, Одесса",
    
    // Контакты
    contact_title: "Свяжитесь с нами",
    contact_name: "Ваше имя",
    contact_email: "Email",
    contact_phone: "Телефон",
    contact_message: "Сообщение",
    contact_send: "Отправить",
    contact_info: "Контактная информация",
    contact_address: "Адрес",
    contact_location: "Украина, Киев",
    contact_social: "Мы в соцсетях",
    our_social_media: "Наши социальные сети",
    
    // Подвал
    footer_description: "DateX — профессиональное дейтинг-агентство с безупречной репутацией, которое помогает находить настоящую любовь.",
    footer_services: "Наши услуги",
    footer_service1: "Регистрация на сайтах",
    footer_service2: "Создание анкет",
    footer_service3: "Фотосессии",
    footer_service4: "Сопровождение общения",
    footer_service5: "Перевод сообщений",
    footer_links: "Полезные ссылки",
    footer_link_blog: "Блог",
    footer_contacts: "Контакты",
    footer_copyright: "© 2025 DateX Agency. Все права защищены."
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
    about_subtitle: "More than an agency. We are your business partner",
    about_p1: "DateX is a new generation team in the dating world. For over 3 years, we have been collaborating with leading international platforms, including Dating.com, Dream Single, PlaceToChat, and others. We're not just in the industry — we're shaping its standards.",
    about_p2: "For models, we provide everything necessary for starting and growing: access to top platforms, proven working tools, systemic solutions, and a strong team. We train, set up processes, and give opportunities to scale.",
    about_p3: "For partners, we offer results, not promises: a constant flow of quality profiles, high engagement, and transparency at every stage of work.",
    about_p4: "Today, DateX is actively entering the European market and developing new digital directions in the dating niche.",
    about_p5: "We are building an international brand with a focus on efficiency, trust, and long-term partnership. DateX — when experience works for results.",
    
    // Why Us
    why_title: "Why Choose Us",
    why_card1_title: "200+ Successful Cooperation Stories",
    why_card1_text: "More than 200 models have trusted us — and each of them has achieved a decent income thanks to our established system and access to the best platforms.",
    why_card2_title: "Verified Platforms",
    why_card2_text: "We cooperate only with reliable and verified world-class dating platforms.",
    why_card3_title: "24/7 Support",
    why_card3_text: "Our team is available around the clock: from registration to the first payments.",
    why_card4_title: "Personal Manager",
    why_card4_text: "Each model receives a personal manager for maximum efficiency.",
    why_card5_title: "Image Assistance",
    why_card5_text: "We organize professional photo sessions, help with image creation and training.",
    why_card6_title: "High Traffic",
    why_card6_text: "We provide quality traffic for our models, which increases monthly income.",
    
    // Statistics
    stats_years: "Years of Experience",
    stats_models: "Satisfied Models",
    stats_partners: "Partner Sites",
    stats_support: "Support",
    
    // Services
    services_title: "Our Services for Models and Partners",
    service1_title: "Complete Support and Promotion for Models",
    service1_text: "We take over all stages: from registration to active work on platforms. You don't need to delve into technical details — we'll do everything for you.",
    service2_title: "Content Assistance",
    service2_text: "If necessary, we organize a professional photo session, select the image, help with makeup artists, stylists, and photographers. So that you look as impressive as possible.",
    service3_title: "Confidentiality of Cooperation",
    service3_text: "We stand for confidentiality of cooperation! Your convenience and safety are our priority.",
    service4_title: "Transparent Cooperation for Partners",
    service4_text: "We provide only active and verified models, as well as all necessary content and materials to start working.",
    service5_title: "Cooperation Guarantee",
    service5_text: "We ensure reliable and honest interaction. In case cooperation with a model ceases for objective reasons — we provide a replacement or return the payment.",
    service6_title: "Consultation Support",
    service6_text: "We consult agencies on all issues related to work. We help solve problems even after the warranty period ends.",
    
    // Testimonials
    testimonials_title: "Our Clients' Testimonials",
    testimonial1: "\"With DateX, I met my future husband in just 4 months. True professionals!\"",
    testimonial1_author: "— Marina, Kyiv",
    testimonial2: "\"I've worked with different agencies, but only here did I feel genuine care and an individual approach.\"",
    testimonial2_author: "— Anastasia, Lviv",
    testimonial3: "\"I recommend! Everything is transparent, honest, and very effective.\"",
    testimonial3_author: "— Victoria, Odessa",
    
    // Contact
    contact_title: "Contact Us",
    contact_name: "Your Name",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_message: "Message",
    contact_send: "Send",
    contact_info: "Contact Information",
    contact_address: "Address",
    contact_location: "Ukraine, Kyiv",
    contact_social: "Our Social Media",
    our_social_media: "Our Social Media",
    
    // Footer
    footer_description: "DateX is a professional dating agency with an impeccable reputation that helps find true love.",
    footer_services: "Our Services",
    footer_service1: "Website Registration",
    footer_service2: "Profile Creation",
    footer_service3: "Photo Sessions",
    footer_service4: "Communication Support",
    footer_service5: "Message Translation",
    footer_links: "Useful Links",
    footer_link_blog: "Blog",
    footer_contacts: "Contacts",
    footer_copyright: "© 2025 DateX Agency. All rights reserved."
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
