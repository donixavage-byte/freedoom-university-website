const links = document.querySelectorAll('.nav-list a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); 
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    sections.forEach(sec => sec.classList.remove('active'));

    const targetId = link.getAttribute('href').replace('.html', '').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
document.getElementById('applicationForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const course = document.getElementById('course').value.trim();
  const agree = document.getElementById('agree').checked;

  const messageBox = document.getElementById('formMessage');

  if (!name || !email || !course || !agree) {
    messageBox.textContent = "⚠️ Please fill all required fields and agree to the terms.";
    messageBox.style.color = "yellow";
    return;
  }


  messageBox.textContent = `✅ Thank you, ${name}! Your application for the "${course}" program has been successfully received. Our admissions team will contact you at ${email}.`;
  messageBox.style.color = "#00ff88";

  
  this.reset();
});

