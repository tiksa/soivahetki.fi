// Aseta nykyinen vuosi footeriin
document.getElementById("current-year").textContent = new Date().getFullYear();

// Yhteydenottolomakkeen käsittely
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Tässä voit lisätä lomakkeen käsittelyn logiikan
    // Esimerkiksi lähettää tiedot sähköpostiin tai tallentaa ne tietokantaan

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Kiitos viestistäsi, ${name}! Otan sinuun yhteyttä pian.`);

    // Tyhjennä lomake
    document.getElementById("contact-form").reset();
  });

// Play-napin toiminnallisuus
document.getElementById("play-button").addEventListener("click", function () {
  // Tässä voit lisätä videon toiston logiikan
  alert("Tähän tulee video pianonsoitostasi!");
});

// Animoi elementit näkyviin, kun ne tulevat näkyviin
document.addEventListener("DOMContentLoaded", function () {
  // Tässä voit lisätä animaatioita, jos haluat
});
