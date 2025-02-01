document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
  const loginToggle = document.getElementById('login-toggle');
  const signupToggle = document.getElementById('signup-toggle');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginToggle && signupToggle) {
      [loginToggle, signupToggle].forEach(btn => {
          btn.addEventListener('click', () => {
              loginForm.classList.toggle('active');
              signupForm.classList.toggle('active');
              loginToggle.classList.toggle('active');
              signupToggle.classList.toggle('active');
          });
      });
  }
  const restrictedLinks = ['flights-link', 'cars-link', 'hotels-link', 'about-link'];
  const modal = document.getElementById('login-modal');
  const closeModal = document.getElementById('close-modal');

  if (modal && closeModal) {
      restrictedLinks.forEach(id => {
          const link = document.getElementById(id);
          if (link) {
              link.addEventListener('click', (e) => {
                  e.preventDefault();
                  modal.style.display = 'flex';
              });
          }
      });
      closeModal.addEventListener('click', () => {
          modal.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.style.display = 'none';
          }
      });
  }
});
function redirect(event) {
  event.preventDefault();
  window.location.href = "index1.html";
}
