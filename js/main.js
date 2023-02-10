let links = document.querySelectorAll(".menu .menu-filters .links a")
let boxs = document.querySelectorAll(".menu .row .all")


links.forEach((a) => {
  a.addEventListener("click", removeActive);
  a.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  links.forEach((a) => {
    a.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  boxs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
