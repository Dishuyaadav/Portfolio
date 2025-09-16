// Smooth Scroll Animation for Navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form (dummy)
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  successMsg.textContent = "✅ Message sent successfully!";
  form.reset();
});
