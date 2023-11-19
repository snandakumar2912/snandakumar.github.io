document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleModeButton = document.getElementById('toggle-mode');
    const profileImage = document.querySelector('#home img');
    const workEntries = document.querySelectorAll('.work-entry');

    // Function to set the dark mode state
    function setDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Toggle light/dark mode based on user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);

    // Toggle mode button click event
    toggleModeButton.addEventListener('click', function () {
        const currentMode = body.classList.contains('dark-mode');
        const newMode = !currentMode;

        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    });

    // Clickable image on the home page
    profileImage.addEventListener('click', function () {
        // Add logic to display more specific information about yourself
        // You can show/hide a modal, update content dynamically, etc.
        alert('More information about yourself!');
    });

    // Implement click events for work/volunteer experiences
    workEntries.forEach(function (entry) {
        entry.addEventListener('click', function () {
            // Add logic to display more information about the work experience
            // You can show/hide a modal, update content dynamically, etc.
            alert('More information about the work experience at ' + entry.id);
        });
    });
});
