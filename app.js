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

// Goto Class
let clsbtn = document.getElementById("classes-btn");

clsbtn.addEventListener("click", () => {
	window.location.href = "classes.html";
});

// goto blog
let blogbtn = document.getElementById("blog-btn");

blogbtn.addEventListener("click", () => {
	window.location.href = "blog.html";
});

// Screensaver
const canvas = document.getElementById("mc");
canvas.width = window.innerWidth - 64;
canvas.height = window.innerHeight - 32;
const ctx = canvas.getContext("2d");
let img = new Image();
img.src = "./Images/ss.png";

let x = 0;
let y = 0;
let x1 = 1;
let y1 = 1;

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, x, y);

	if (x <= 0) {
		x1 = 2;
	} else if (x >= canvas.width - img.width) {
		x1 = -2;
	}

	if (y <= 0) {
		y1 = 2;
	} else if (y >= canvas.height - img.height) {
		y1 = -2;
	}

	x += x1;
	y += y1;

	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

// Check Idle and Show/Hide Screensaver
$("#mc").hide();
var to;
var isOn = false;
var idle = 5000;

$(document).mousemove(function () {
	clearTimeout(to);
	if (isOn) {
		$("#mc").hide();
		isOn = false;
	}
	to = setTimeout(function () {
		$("#mc").show();
		isOn = true;
	}, 3000);
});

window.addEventListener("wheel", function () {
	clearTimeout(to);
	if (isOn) {
		$("#mc").hide();
		isOn = false;
	}
	to = setTimeout(function () {
		$("#mc").show();
		isOn = true;
	}, 3000);
});
