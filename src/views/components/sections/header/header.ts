document.addEventListener(
  "DOMContentLoaded",
  () => {
    const body = document.body;

    const header: HTMLElement = body.querySelector(".header");
    const height = header.offsetHeight;
    const value = height + "px";
    document.documentElement.style.setProperty("--headerHeight", value);
    window.addEventListener("scroll", () => {});
  },
  {
    passive: true,
    once: true,
  }
);
