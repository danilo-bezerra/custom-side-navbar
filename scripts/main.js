const btnNavbar = document.querySelector(".btn-navbar");

btnNavbar.addEventListener("click", () => {
  const spanList = document.querySelectorAll("nav span");
  const nav = document.querySelector("nav");
  const btnNavbarIcon = document.querySelector(".btn-navbar ion-icon");

  spanList.forEach((span) => {
    span.classList.toggle("active");
  });
  nav.classList.toggle("active");
  if (btnNavbarIcon.name === "menu-outline") {
    btnNavbarIcon.name = "close-outline";
  }
});
