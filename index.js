const translations = {
    "en": {
        // Nav
        "nav_about": "About",
    },
    "ru": {
        // Nav
        "nav_about": "Обо мне",
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});