{
  const scrollBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      scrollBtn.classList.remove("scroll-visible");
      scrollBtn.style.pointerEvents = "none";
    } else {
      scrollBtn.classList.add("scroll-visible");
      scrollBtn.style.pointerEvents = "visible";
    }
  });
}
