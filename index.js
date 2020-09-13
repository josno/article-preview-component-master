const btn = document.querySelector("button");
const path = document.querySelector("path");

var setFlex = () => {
	document.querySelector(".share-details").style.display === "" ||
	document.querySelector(".share-details").style.display === "none"
		? (document.querySelector(".share-details").style.display = "flex")
		: (document.querySelector(".share-details").style.display = "none");
};

var setColor = () => {
	btn.classList.toggle("active-button-color");
	path.classList.toggle("active-fill-color");
};

btn.addEventListener("click", (event) => {
	setFlex();
	setColor();
});
