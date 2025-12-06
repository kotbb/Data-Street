// Header HTML
const headerHTML = `
<div class="container navbar">
    <a href="index.html" class="logo">
        <img src="../Images/logo.jpg" alt="Data Street Logo">
        <span class="logo-text">Data Street</span>
    </a>
    
    <div class="menu-toggle" onclick="toggleMenu()"><i class="fas fa-bars"></i></div>
    
    <ul class="nav-links">
        <li><a href="index.html" id="nav-home">HOME</a></li>
        <li><a href="teams.html" id="nav-teams">TEAMS</a></li>
        <li><a href="contact.html" id="nav-contact">CONTACT US</a></li>
    </ul>
</div>
`;

// Footer HTML
const footerHTML = `
<div class="container">
    <a href="index.html"><img src="../Images/logo.jpg" alt="Data Street" style="height: 50px; margin: 0 auto;"></a>
    <div class="footer-socials">
        <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
        <a href="https://linkedin.com"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:info@datastreet.com"><i class="fas fa-envelope"></i></a>
    </div>
    <p style="margin-top: 20px; font-size: 12px; color: #838b8e;">&copy; 2025 Data Street. All Rights Reserved.</p>
</div>
`;

document.addEventListener('DOMContentLoaded', function(){
    // Insert Header
    const headerElement = document.querySelector('header');
    if (headerElement) headerElement.innerHTML = headerHTML;

    // Insert Footer
    const footerElement = document.querySelector('footer');
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Get current page
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html" || currentPage === "") {
        document.getElementById("nav-home").classList.add("active");
    } else if (currentPage === "teams.html") {
        document.getElementById("nav-teams").classList.add("active");
    } else if (currentPage === "contact.html") {
        document.getElementById("nav-contact").classList.add("active");
    }
});
// This for mobile Devices to toggle the active
// function toggleMenu() {
//     document.querySelector('.nav-links').classList.toggle('active');
// }