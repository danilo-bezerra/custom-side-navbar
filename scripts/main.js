const btnNavbar = document.querySelector(".btn-navbar");
const navbarLinks = document.querySelectorAll("nav .nav-links a");

btnNavbar.addEventListener("click", () => {
  const spanList = document.querySelectorAll("nav span");
  const nav = document.querySelector("nav");
  spanList.forEach((span) => {
    span.classList.toggle("active");
  });
  nav.classList.toggle("active");
});

navbarLinks.forEach((aTag) => {
  aTag.addEventListener("click", () => {
    const title = document.querySelector("main section h1");

    title.innerHTML = aTag.innerHTML;
  });
});
