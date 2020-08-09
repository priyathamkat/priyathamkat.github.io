const email = document.querySelector('#email');
const name = document.querySelector('h1');

function setEmail(text) {
    email.querySelector('a').textContent = text;
}

setEmail('Email');

function showEmail(e) {
    e.preventDefault();
    let id = name.textContent;
    id = `${id[0]}${id.slice(10, 17)}`;
    id = id.toLowerCase();
    setEmail(`${id}@umd.edu`);
    email.removeEventListener('click', showEmail);
}

email.addEventListener('click', showEmail);