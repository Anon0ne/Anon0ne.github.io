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
