document.addEventListener("DOMContentLoaded", () => {
    const groups = document.querySelectorAll(".team-group");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let currentIndex = 0;

    function showGroup(index) {
      groups.forEach((group, i) => {
        group.classList.toggle("active", i === index);
      });
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < groups.length - 1) {
        currentIndex++;
        showGroup(currentIndex);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        showGroup(currentIndex);
      }
    });

    showGroup(currentIndex); // Mostrar el primero al cargar
  });