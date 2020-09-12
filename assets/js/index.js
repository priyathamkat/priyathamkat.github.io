const emailIcon = document.querySelector('#email-icon');
const name = document.querySelector('h1');
const email = document.querySelector('#email');

function setEmail(text) {
    email.textContent = text;
}

function showEmail(e) {
    e.preventDefault();
    let id = name.textContent;
    id = `${id[0]}${id.slice(10, 17)}`;
    id = id.toLowerCase();
    const emailAddress = `${id}@umd.edu`; 
    email.textContent = emailAddress;
    email.removeEventListener('click', showEmail);
}

emailIcon.addEventListener('click', showEmail);