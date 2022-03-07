const nm = document.getElementById("name");
const ag = document.getElementById("age");
const ph = document.getElementById("phone");
const email = document.getElementById("email");
const emailrgx = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.(com)$/;
const form = document.getElementById("form");
const errorElement = document.getElementById("errormsg");

form.addEventListener("submit", (e) => {
	let messages = [];
	if (nm.value.length < 3) {
		messages.push("Error : Name is required to be 3 characters or more");
	}

	if (ag.value < 10) {
		messages.push("Error : You must be 10 years or older");
	}

	let ticked = false;
	document.getElementsByName("gender").forEach((radio) => {
		if (radio.checked) {
			ticked = true;
		}
	});

	if (!ticked) {
		messages.push("Error : Select your gender");
	}

	if (ph.value.length != 14) {
		messages.push(
			"Error : Phone Number must be 14 characters long, including the country code"
		);
	}

	if (!ph.value.startsWith("+81")) {
		messages.push("Error : Phone Number must start with +81");
	}

	const newph = ph.value.substring(3);

	if (isNaN(newph)) {
		messages.push("Error : Phone Number must be numeric");
	}

	if (newph.length != 11) {
		messages.push(
			"Error : Phone Number must be 11 characters long, excluding the country code"
		);
	}

	if (!emailrgx.test(email.value)) {
		messages.push("Error : Email must contain @ and .com");
	}

	if (messages.length > 0) {
		e.preventDefault();
		errorElement.innerText = messages.join("\n");
	}
});
