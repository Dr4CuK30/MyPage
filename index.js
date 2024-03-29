window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".inv").classList.remove("inv");
    document.querySelector(".cargando").classList.add("inv");
  }, 1500);
});

var options2 = {
  strings: [
    `^500 <span class="Prompt__user">>></span> Backend Developer
         <div><span class="Prompt__user">>></span> Experienced in the industry</div>
         <div><span class="Prompt__user">>></span> Technology enthusiast</div>^700`,
  ],
  loop: true,
  showCursor: false,
  typeSpeed: 25,
};
var options = {
  strings: ["$ Hi, I'm David Saldarriaga."],
  typeSpeed: 40,
  showCursor: false,
  onComplete: (self) => {
    document.querySelector(".line2").classList.remove("line2");
    var typed = new Typed("#typed2", options2);
  },
};
var typed = new Typed("#typed", options);

particlesJS.load("particles-js", "./assets/particles.json");

window.addEventListener("scroll", () => {
  const nav = document.querySelector("#navbar-p");
  const ter = document.querySelector(".containerT");
  if (window.scrollY > 670) {
    nav.classList.add("fixed-top");
    ter.classList.add("posscroll");
  } else {
    nav.classList.remove("fixed-top");
    ter.classList.remove("posscroll");
  }
});

navitems = document.getElementsByClassName("nav-link");
const closenav = () => {
  document.querySelector("#navbar-toggler").click();
};

function setEvents() {
  if (window.innerWidth < 1200) {
    for (item of navitems) {
      item.addEventListener("click", closenav);
    }
  } else {
    for (item of navitems) {
      item.removeEventListener("click", closenav);
    }
  }
}

setEvents();
window.addEventListener("resize", () => {
  setEvents();
});
