/*// You can add JavaScript functionality here for page transitions.
// For example, to load new content when a link is clicked.

// Example: Load content dynamically
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = link.getAttribute('href');
        loadPage(page);
    });
});

function loadPage(page) {
    // You can use AJAX or fetch to load the content of the page dynamically.
    // Here's a simple example using innerHTML to replace the content.
    const mainContent = document.querySelector('main');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
*/