const search = document.querySelector(".search-button");
const searchClose = document.querySelector(".search-close");
const searchContainer = document.querySelector(".search-container");

search.addEventListener("click", () => {
  searchContainer.classList.add("active");
  search.style.display = "none";
});

searchClose.addEventListener("click", () => {
  searchContainer.classList.remove("active");
  search.style.display = "flex";
});
