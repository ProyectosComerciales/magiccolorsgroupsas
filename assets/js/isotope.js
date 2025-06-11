 var elem = document.querySelector('.isotope-container');
  var iso = new Isotope(elem, {
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry'
  });

  // Filtros
  var filtersElem = document.querySelector('.portfolio-filters');
  filtersElem.addEventListener('click', function(event) {
    if (!matchesSelector(event.target, 'li')) return;
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });

    // Quitar y agregar clase activa
    filtersElem.querySelectorAll('li').forEach(li => li.classList.remove('filter-active'));
    event.target.classList.add('filter-active');
  });