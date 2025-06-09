document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  const form = document.getElementById('reservaForm');
  form.addEventListener('submit', (e) => {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    if (nombre === '' || email === '') {
      alert('Por favor, completa todos los campos obligatorios.');
      e.preventDefault();
    }
  });

  window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
  });
});
