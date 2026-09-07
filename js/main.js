// Mobile nav toggle
const toggle = document.getElementById('navtoggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Quote form submission (Netlify Forms via AJAX, no page reload)
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(quoteForm);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
      .then(() => {
        quoteForm.reset();
        formStatus.textContent = "Thanks — we've got your request and will be in touch shortly.";
        formStatus.className = 'form-status ok';
        formStatus.style.display = 'block';
      })
      .catch(() => {
        formStatus.textContent = "Something went wrong sending that — please call or email us directly.";
        formStatus.className = 'form-status err';
        formStatus.style.display = 'block';
      });
  });
}
