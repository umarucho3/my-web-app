document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Salamat sa iyong mensahe! Babalik ako sa iyo soon. 😊');
  this.reset();
});
