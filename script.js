document.addEventListener("DOMContentLoaded", function() {
    const flags = document.querySelectorAll('.flag');
    
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.id;
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    }
});
