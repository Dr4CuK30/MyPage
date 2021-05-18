var options2 = {
    strings: [
        `^500 <span class="Prompt__user">>></span> Web Developer 
         <div><span class="Prompt__user">>></span> Frontend Developer</div>
         <div><span class="Prompt__user">>></span> Backend Developer</div>
         <div><span class="Prompt__user">>></span> Fullstack Developer</div>`,
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
particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles-js config loaded");
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("#navbar-p")
    const ter = document.querySelector(".containerT")
    if (window.scrollY > 670) {
        nav.classList.add("fixed-top")
        ter.classList.add("posscroll")
    } else {
        nav.classList.remove("fixed-top")
        ter.classList.remove("posscroll")
    }
})

navitems = document.getElementsByClassName("nav-link")
console.log(navitems.length)
for(item of navitems){
    item.addEventListener("click", () => {
        document.querySelector("#navbar-toggler").click()
    })
}