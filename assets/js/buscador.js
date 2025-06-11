document.getElementById('portfolio-search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('.portfolio-item');

  items.forEach(item => {
    // Cambia '.entry-title' por el selector que contenga el texto a buscar en cada producto
    const titleEl = item.querySelector('.entry-title');
    const title = titleEl ? titleEl.textContent.toLowerCase() : '';

    if (title.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
