const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");

toggleButton.addEventListener("click", () => {
  console.log("hola");
  navbarLinks.forEach((links) => {
    links.classList.toggle("active");
  });
});
