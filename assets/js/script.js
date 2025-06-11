window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("subscription-form");

  setTimeout(() => {
    popup.style.display = "flex";
  }, 1000);

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    alert("¡Gracias por suscribirte! Pronto recibirás tu cupón al correo.");
    console.log("Datos:", data); // Puedes guardarlos aquí con PHP o Google Sheets
    popup.style.display = "none";
  });
});
