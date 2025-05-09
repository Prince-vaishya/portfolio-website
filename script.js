document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content'); 

    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});
