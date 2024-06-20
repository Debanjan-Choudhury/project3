

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const nav = document.querySelector('nav ul');
    const contactForm = document.getElementById('contactForm');
    const messageContainer = document.getElementById('messageContainer');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            displayMessage('All fields are required.', false);
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('Please enter a valid email address.', false);
            return;
        }

        displayMessage('Form submitted successfully!', true);
        contactForm.reset();
    });

    function displayMessage(message, isSuccess) {
        messageContainer.textContent = message;
        messageContainer.style.color = isSuccess ? 'green' : 'red';
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
