// Select the language dropdown and content elements
const langSelect = document.getElementById('lang');
const titleElement = document.getElementById('title');
const navbarElement = document.getElementById('navbar');
const mainTextElement = document.getElementById('mainText');
const moreHeartsElement = document.querySelector('.srca a');
const sendReviewElement = document.querySelector('.recenzija a');
const viewSourceElement = document.querySelector('.kod a');
const contactTitleElement = document.querySelector('.end h2');
const contactEmailElement = document.querySelector('.end p:first-of-type');
const contactPhoneNumberElement = document.querySelector('.end p:last-of-type');
const footerElement = document.querySelector('.end p');

// Function to load translations
async function loadTranslations(language) {
    const response = await fetch('translations.json');
    const translations = await response.json();
    return translations[language];
}

// Function to update content based on translations
async function updateContent(language) {
    const translations = await loadTranslations(language);
    titleElement.textContent = translations.title;
    navbarElement.children[0].textContent = translations.navbar.home;
    navbarElement.children[1].textContent = translations.navbar.contact;
    navbarElement.children[2].textContent = translations.navbar.forGrandma;
    mainTextElement.textContent = translations.mainText;
    moreHeartsElement.textContent = translations.moreHearts;
    sendReviewElement.textContent = translations.sendReview;
    viewSourceElement.textContent = translations.viewSource;
    contactTitleElement.textContent = translations.contact.title;
    contactEmailElement.textContent = translations.contact.email;
    contactPhoneNumberElement.textContent = translations.contact.phoneNumber;
    footerElement.textContent = translations.footer;
}

// Add event listener to detect changes in language selection
langSelect.addEventListener('change', function() {
    const selectedLang = langSelect.value;
    updateContent(selectedLang);
});

// Initial content update based on default language selected
updateContent(langSelect.value);
