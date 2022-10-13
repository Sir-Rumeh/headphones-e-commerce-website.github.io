/**
 * CUSTOM CURSOR
 */
// const mouseCursor = document.querySelector(".custom-cursor");
// const links = document.querySelectorAll("a");
// const inputs = document.querySelectorAll("input");

// window.addEventListener("mousemove", cursor);
// window.addEventListener("click", clickAnimate);
// window.addEventListener("mousemove", stopAnimate);

function cursor(e) {
	console.log(e);
	mouseCursor.style.top = e.pageY + "px";
	// mouseCursor.style.left = e.pageX + "px";
}

// expand cursor on click
function clickAnimate() {
	mouseCursor.classList.add("click-animate");
}
// stop mouse cursor anumation on mousemove again
function stopAnimate() {
	mouseCursor.classList.remove("click-animate");
}

// animate links on mousemove
links.forEach((link) => {
	link.addEventListener("mouseover", () => {
		mouseCursor.classList.add("link-grow");
	});
	link.addEventListener("mouseleave", () => {
		mouseCursor.classList.remove("link-grow");
	});
});
// handle input focus
inputs.forEach((input) => {
	input.addEventListener("focus", () => {
		mouseCursor.classList.add("hidden");
	});
	input.addEventListener("focusout", () => {
		mouseCursor.classList.remove("hidden");
	});
});

/**
 * CUSTOM CURSOR END
 */

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
	navbar.classList.toggle("active");
	searchForm.classList.remove("active");
	cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
	navbar.classList.remove("active");
	cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
	cartItem.classList.toggle("active");
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
};

window.onscroll = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	cartItem.classList.remove("active");
};

/**
 * REMOVE CART ITEMS
 */
const removeButton = document.querySelectorAll(".remove");

removeButton.forEach((button) => {
	button.addEventListener("click", removeItem);
});

function removeItem() {
	this.parentElement.style.display = "none";
}
/**
 * REMOVE CART ITEMS END
 */

// console.log("testing");
