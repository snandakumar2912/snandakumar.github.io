document.addEventListener('DOMContentLoaded', function () {
    // Toggle light/dark mode
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.body;

    toggleModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    // Clickable image on the home page
    const profileImage = document.querySelector('#home img');

    profileImage.addEventListener('click', function () {
        // Add logic to display more specific information about yourself
        // You can show/hide a modal, update content dynamically, etc.
        alert('More information about yourself!');
    });

    // Implement click events for work/volunteer experiences
    const workEntries = document.querySelectorAll('.work-entry');

    workEntries.forEach(function (entry) {
        entry.addEventListener('click', function () {
            // Add logic to display more information about the work experience
            // You can show/hide a modal, update content dynamically, etc.
            alert('More information about the work experience at ' + entry.id);
        });
    });

    // Implement contact form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add logic to handle form submission (send an email, save to a database, etc.)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can log or display the received message in the console
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Display an alert or provide feedback to the user
        alert('Message sent successfully!');
    });
});
