// Footer component
const footerHTML = `
  <footer class="footer">
    <div class="footer-links">
      <a href="../pages/home.html">Home</a> |
      
  <a href="../pages/memberships.html">Memberships</a> |
      <a href="../pages/about.html">About</a> |
      <a href="../pages/contact.html">Contact</a> |
      <a href="../pages/login.html">Login</a>
    </div>
    <div class="footer-contact">
      <span><i class="fa-solid fa-phone"></i> +91-9876543210</span> |
      <span><i class="fa-solid fa-envelope"></i> info@fitlifegym.com</span>
    </div>
    <div class="footer-copy">&copy; 2025 FitLife Gym</div>
  </footer>
`;
document.getElementById('footer').innerHTML = footerHTML;
