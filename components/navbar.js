// Navbar component
const navbarHTML = `
  <nav class="navbar">
    <div class="logo">
      <span class="logo-icon">
        <i class="fa-solid fa-bolt-lightning"></i>
      </span>
      <span class="gym-name">FitLife Gym</span>
    </div>
    <ul class="nav-links">
      <li><a href="../pages/home.html">Home</a></li>
      <li><a href="../pages/memberships.html">Memberships</a></li>
      <li><a href="../pages/about.html">About</a></li>
      <li><a href="../pages/contact.html">Contact</a></li>
      <li><a href="../pages/login.html">Login</a></li>
    </ul>
  </nav>
`;
document.getElementById('navbar').innerHTML = navbarHTML;
