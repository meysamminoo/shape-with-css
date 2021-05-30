// Selectors
const burger = document.querySelector(".burger");
// Add evant listener
burger.addEventListener("click", hambergerMenu);
// Function
function hambergerMenu() {
  if (!burger.classList.contains("open")) {
    burger.classList.add("open");
  } else {
    burger.classList.remove("open");
  }
}
