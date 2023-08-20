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
  gallery.style.maxHeight = "none";
  overlay.style.display = "none";
  moreBtn.style.display = "none";
  lessBtn.style.display = "block";
});

lessBtn.addEventListener("click", () => {
  gallery.style.maxHeight = "1510px";
  overlay.style.display = "block";
  lessBtn.style.display = "none";
  moreBtn.style.display = "block";
});
