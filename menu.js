const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("#menu");
const menuDrop = document.querySelectorAll(".drop");
const containerDrop = document.querySelectorAll(".container-drop");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active-menu");
});

menuDrop.forEach((drop) =>
  drop.addEventListener("click", ({ target }) => {
    console.log(target.parentNode);
    target.parentNode.classList.toggle("active-drop");
  })
);
