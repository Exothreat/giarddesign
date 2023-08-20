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

const moreBtn = document.querySelector(".button-gallery");
const gallery = document.querySelector(".grid");
const overlay = document.querySelector(".grid-overlay");

moreBtn.addEventListener("click", () => {
  gallery.style.maxHeight = "none";
  overlay.style.display = "none";
  moreBtn.style.display = "none";
});
