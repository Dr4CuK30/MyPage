var glideMulti1 = new Glide(".multi1", {
	type: "carousel",
	perView: 3,
}).mount();
window.addEventListener("resize", () => {
	updateGlide();
});
document.addEventListener("scroll", eventscroll);

function updateGlide() {
	var config;
	if (window.innerWidth >= 1920) {
		config = {
			perView: 4,
		};
	} else if (window.innerWidth >= 992) {
		config = {
			perView: 3,
		};
	} else if (window.innerWidth >= 768) {
		config = {
			perView: 2,
		};
	} else {
		config = {
			perView: 1,
		};
	}
	glideMulti1.update(config);
}

function eventscroll() {
	updateGlide();
	document.removeEventListener("scroll", eventscroll, false);
}
