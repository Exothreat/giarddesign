const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const searchContainer = document.querySelector(".search__container");

search.addEventListener("click", () => {
  searchContainer.classList.add("active");
});

searchClose.addEventListener("click", () => {
  searchContainer.classList.remove("active");
});
