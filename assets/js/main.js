/* Padilhae Advocacia — menu que encolhe ao rolar e formulário que abre o WhatsApp */
(function () {
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var area = f.area.options[f.area.selectedIndex];
    var lines = ['Olá, Dra. Elisabete! Vim pelo site.', 'Nome: ' + f.nome.value.trim(), 'Telefone: ' + f.telefone.value.trim()];
    if (f.area.value) lines.push('Área de interesse: ' + area.text);
    if (f.mensagem.value.trim()) lines.push('Mensagem: ' + f.mensagem.value.trim());
    window.open('https://wa.me/5554991194950?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });
})();
