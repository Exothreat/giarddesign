{
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
}
