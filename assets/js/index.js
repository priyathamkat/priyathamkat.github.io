const emailIcon = document.querySelector('#email-icon');
const myName = document.querySelector('h1');
const email = document.querySelector('#email');

function setEmail(text) {
    email.textContent = text;
}

function showEmail(e) {
    e.preventDefault();
    let id = myName.textContent;
    id = `${id.slice(0, 9)}${id.slice(10, 13)}`;
    id = id.toLowerCase();
    const emailAddress = `${id}@gmail.com`; 
    email.textContent = emailAddress;
    email.removeEventListener('click', showEmail);
}

emailIcon.addEventListener('click', showEmail);