
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});


const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');


  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';


  document.querySelectorAll('.social-bar img').forEach(img => {
    const darkSrc = img.getAttribute('data-dark');
    const lightSrc = img.src.replace('-white', '');
    const isDark = document.body.classList.contains('dark-mode');
    if (darkSrc) {
      img.src = isDark ? darkSrc : lightSrc;
    }
  });
});
