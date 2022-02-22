// Hiding and Showing the Navbar Contents
let navButt = $(".navbar-button")[0];
let navContents = $(".navbar-contents");
let displayed = false;

navButt.addEventListener("click", () => {
	if (displayed === false) {
		navContents.css("display", "flex");
		displayed = true;
	} else {
		navContents.css("display", "none");
		displayed = false;
	}
});

// Sliding
let slides = $(".classes-promos-img-slides");
let textSlides = $(".classes-promos-img-text-slides");
let slideSize = 3;
let currIdx = 0;

slides.hide();
textSlides.hide();
slides.eq(currIdx).show();
textSlides.eq(currIdx).show();

$(".classes-promos-img-left-btn").click(function () {
	slides.eq(currIdx).animate({}, 1000, function () {
		slides.eq(currIdx).hide();
		textSlides.eq(currIdx).hide();
	});
	if (currIdx > 0) {
		currIdx--;
	} else {
		currIdx = 2;
	}
	slides.eq(currIdx).animate({}, 1000, function () {
		slides.eq(currIdx).show();
		textSlides.eq(currIdx).show();
	});
});

$(".classes-promos-img-right-btn").click(function () {
	slides.eq(currIdx).animate({}, 1000, function () {
		slides.eq(currIdx).hide();
		textSlides.eq(currIdx).hide();
	});
	if (currIdx < slideSize - 1) {
		currIdx++;
	} else {
		currIdx = 0;
	}
	slides.eq(currIdx).animate({}, 1000, function () {
		slides.eq(currIdx).show();
		textSlides.eq(currIdx).show();
	});
});
