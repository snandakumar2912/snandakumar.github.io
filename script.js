function showDetails(companyName) {
    alert(`More details about ${companyName}`);
}
  
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;
  
toggleMode.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    const modeLabel = document.querySelector('.mode-label');
    modeLabel.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
  
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleMode.checked = true;
}

document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profile-picture');
    const workEntries = document.querySelectorAll('.work-entry');
    profileImage.addEventListener('click', function () {
              
    alert('I am passionate about coding.\nTECHNICAL SKILLS\nLanguages: C, Java, Python\nWeb Technologies: HTML5, CSS3, JavaScript\nDatabase: MySQL\nFrameworks: JDBC, Hibernate, Springs');
    });

    workEntries.forEach(function (entry) {
        const companyName = entry.querySelector('h3').innerText;
        const position = entry.dataset.position;
        const duration = entry.dataset.duration;
        const description = entry.dataset.description;

        entry.addEventListener('click', function () {
            alert(`Work experience at ${companyName}:\n${position}\n${duration}\n${description}`);
        });
    });
});  
