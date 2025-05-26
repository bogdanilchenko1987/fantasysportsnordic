document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("cs-form-1388");
  const formContainer = document.getElementById("form-container");
  const successMessage = document.createElement("p");
  successMessage.textContent = "Kiitos! Viestisi on lähetetty onnistuneesti";
  successMessage.style.display = "none";
  successMessage.style.color = "green";
  successMessage.style.textAlign = "center";

  if (formContainer) {
    formContainer.appendChild(successMessage);
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.style.display = "none";
    successMessage.style.display = "block";

    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = "flex";
      successMessage.style.display = "none";
    }, 3000);
  });
});
