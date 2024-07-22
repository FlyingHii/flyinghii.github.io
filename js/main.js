// JavaScript to highlight active link based on the current path
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    function trimTrailingSlash(path) {
        return path.endsWith('/') ? path.slice(0, -1) : path;
    }

    links.forEach((link) => {
        if (trimTrailingSlash(link.getAttribute('href')) === trimTrailingSlash(currentPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
