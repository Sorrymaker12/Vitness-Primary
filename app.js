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
