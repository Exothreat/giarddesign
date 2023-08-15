const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const searchContainer = document.querySelector(".search__container");

search.onclick = function () {
  searchContainer.classList.add("active");
};

searchClose.onclick = function () {
  searchContainer.classList.remove("active");
};
