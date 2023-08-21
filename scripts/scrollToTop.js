{
  const scrollBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      scrollBtn.classList.remove("scroll-visible");
    } else {
      scrollBtn.classList.add("scroll-visible");
    }
  });
}
