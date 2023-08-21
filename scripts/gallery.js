function openGallery(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let photoblock = document.querySelector(".photoView");
  let closeBtn = document.querySelector(".closeBtn");

  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    photoblock.style.display = "none";
  });
}

const moreBtn = document.querySelector(".more-gallery-button");
const gallery = document.querySelector(".grid");
const overlay = document.querySelector(".grid-overlay");
const lessBtn = document.querySelector(".less-gallery-button");

moreBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  moreBtn.classList.add("hidden");
  gallery.classList.add("expand-grid");
  lessBtn.classList.remove("hidden");
});

lessBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  moreBtn.classList.remove("hidden");
  gallery.classList.remove("expand-grid");
  lessBtn.classList.add("hidden");
});
