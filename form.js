// Ініціалізація EmailJS
(function() {
    // Ваш Public Key з EmailJS
    emailjs.init("wFo46eZbKUEvkFpmP");
})();

// Функція для перевірки валідності email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Функція для показу повідомлень
function showAlert(message, type) {
    // Створюємо елемент для повідомлення
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type}`;
    alertElement.textContent = message;
    
    // Додаємо стилі
    alertElement.style.position = 'fixed';
    alertElement.style.top = '20px';
    alertElement.style.left = '50%';
    alertElement.style.transform = 'translateX(-50%)';
    alertElement.style.padding = '15px 20px';
    alertElement.style.borderRadius = '5px';
    alertElement.style.zIndex = '9999';
    
    if (type === 'success') {
        alertElement.style.backgroundColor = '#4CAF50';
        alertElement.style.color = 'white';
    } else {
        alertElement.style.backgroundColor = '#f44336';
        alertElement.style.color = 'white';
    }
    
    // Додаємо до документу
    document.body.appendChild(alertElement);
    
    // Видаляємо після 3 секунд
    setTimeout(() => {
        alertElement.style.opacity = '0';
        alertElement.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(alertElement);
        }, 500);
    }, 3000);
}

// Обробка форми контактів
document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо форму
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Отримуємо значення полів
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Базова валідація
            if (!name || !email || !message) {
                const currentLang = localStorage.getItem('dateXLang') || 'ru';
                let errorMsg;
                
                if (currentLang === 'ua') {
                    errorMsg = 'Будь ласка, заповніть всі обов\'язкові поля';
                } else if (currentLang === 'en') {
                    errorMsg = 'Please fill in all required fields';
                } else {
                    errorMsg = 'Пожалуйста, заполните все обязательные поля';
                }
                
                showAlert(errorMsg, 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                const currentLang = localStorage.getItem('dateXLang') || 'ru';
                let errorMsg;
                
                if (currentLang === 'ua') {
                    errorMsg = 'Будь ласка, введіть коректний email';
                } else if (currentLang === 'en') {
                    errorMsg = 'Please enter a valid email';
                } else {
                    errorMsg = 'Пожалуйста, введите корректный email';
                }
                
                showAlert(errorMsg, 'error');
                return;
            }
            
            // Показуємо індикатор завантаження
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            const currentLang = localStorage.getItem('dateXLang') || 'ru';
            let loadingText;
            
            if (currentLang === 'ua') {
                loadingText = 'Відправка...';
            } else if (currentLang === 'en') {
                loadingText = 'Sending...';
            } else {
                loadingText = 'Отправка...';
            }
            
            submitBtn.innerHTML = loadingText;
            submitBtn.disabled = true;
            
            // Підготовка параметрів для відправки
            const templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message,
                reply_to: email
            };
            
            // Відправка форми за допомогою EmailJS
            emailjs.send('service_7ci15ed', 'template_rafurg', templateParams)
                .then(function(response) {
                    // Успішна відправка
                    let successMsg;
                    
                    if (currentLang === 'ua') {
                        successMsg = 'Повідомлення успішно відправлено! Ми зв\'яжемося з вами найближчим часом.';
                    } else if (currentLang === 'en') {
                        successMsg = 'Message successfully sent! We will contact you soon.';
                    } else {
                        successMsg = 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.';
                    }
                    
                    showAlert(successMsg, 'success');
                    
                    // Очищаємо форму
                    contactForm.reset();
                    
                    // Відновлюємо кнопку
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }, function(error) {
                    // Помилка відправки
                    console.error('EmailJS error:', error);
                    
                    let errorMsg;
                    
                    if (currentLang === 'ua') {
                        errorMsg = 'Виникла помилка при відправці. Спробуйте знову або зв\'яжіться з нами іншим способом.';
                    } else if (currentLang === 'en') {
                        errorMsg = 'An error occurred during sending. Please try again or contact us by other means.';
                    } else {
                        errorMsg = 'Произошла ошибка при отправке. Попробуйте снова или свяжитесь с нами другим способом.';
                    }
                    
                    showAlert(errorMsg, 'error');
                    
                    // Відновлюємо кнопку
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
