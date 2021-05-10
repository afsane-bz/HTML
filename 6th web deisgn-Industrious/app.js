const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll("nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classlist.toggle("nav-active");
    //animatelinks
    navlinks.foreach(link, (index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s";
      }
    });
  });
};

navslide();
