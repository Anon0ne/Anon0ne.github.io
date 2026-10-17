const dialog = document.querySelector('#image-dialog');
const image = document.querySelector('#dialog-image');
const caption = document.querySelector('#dialog-caption');
for (const button of document.querySelectorAll('[data-image]')) {
  button.addEventListener('click', () => {
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    caption.textContent = button.dataset.caption;
    dialog.showModal();
    document.body.classList.add('no-dialog-scroll');
  });
}
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('no-dialog-scroll'));
document.querySelector('#year').textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const values = new FormData(contactForm);
  // Keep the subject on one line; all visitor text stays in the email draft.
  const subject = values.get('subject').trim().replace(/[\r\n]/g, ' ');
  const body = `Name: ${values.get('name').trim()}\r\nEmail: ${values.get('email').trim()}\r\n\r\n${values.get('message').trim()}`;
  window.location.href = `mailto:Justin@bizhostnc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#contact-status').textContent = 'Your email app should open with a draft. Review it and press Send. If it does not open, email Justin@bizhostnc.com directly.';
});
