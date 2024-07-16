// home.js

document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.querySelector(".menu-toggle");
	const navbar = document.querySelector(".navbar");

	// Toggle menu on click of menu toggle button
	menuToggle.addEventListener("click", function (event) {
		event.stopPropagation();
		navbar.classList.toggle("open");
	});

	// Close the menu when clicking outside of it
	document.addEventListener("click", function (event) {
		if (
			!navbar.contains(event.target) &&
			!menuToggle.contains(event.target)
		) {
			navbar.classList.remove("open");
		}
	});
});

document.addEventListener("scroll", function () {
	const transformElement = document.querySelector(".hero-content");
	const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	const threshold = window.innerHeight / 4;

	if (scrollPosition > threshold) {
		const offset = (scrollPosition - threshold) * 2;
		transformElement.style.transform = `translate(-50%, calc(-50% - ${offset}px))`;
	} else {
		transformElement.style.transform = "translate(-50%, -50%)";
	}
});

const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
let slideInterval;

// Function to update the carousel position
function updateCarousel() {
	const slideWidth = slides[currentIndex].getBoundingClientRect().width;
	carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Function to go to the next slide
function goToNextSlide() {
	currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	updateCarousel();
}

// Function to go to the previous slide
function goToPrevSlide() {
	currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	updateCarousel();
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
	goToPrevSlide();
	resetSlideInterval();
});

nextButton.addEventListener("click", () => {
	goToNextSlide();
	resetSlideInterval();
});

// Function to start the automatic slide interval
function startSlideInterval() {
	slideInterval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
}

// Function to reset the slide interval when navigation buttons are used
function resetSlideInterval() {
	clearInterval(slideInterval);
	startSlideInterval();
}

// Start the automatic slide interval
startSlideInterval();

const movingImage = document.getElementById("moving-image");

// Function to handle mouse movement
function handleMouseMove(event) {
	const mouseX = event.clientX; // Mouse X position
	const mouseY = event.clientY; // Mouse Y position

	const offsetX = mouseX / window.innerWidth - 0.5; // Normalize X position
	const offsetY = mouseY / window.innerHeight - 0.5; // Normalize Y position

	const maxMove = 50; // Maximum movement in pixels

	// Calculate transform values based on mouse position
	const transformX = offsetX * maxMove;
	const transformY = offsetY * maxMove;

	// Apply transform to the image
	movingImage.style.transform = `translate(${transformX}px, ${transformY}px)`;
}

// Reset image position on mouse leave
function resetImagePosition() {
	movingImage.style.transform = "translate(0)";
}

// Event listeners
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseleave", resetImagePosition);

document.getElementById("wc-button").addEventListener("click", function () {
	document.getElementById("social-icons-modal").style.display = "block";
});

document.getElementById("email-button").addEventListener("click", function () {
	document.getElementById("email-form-modal").style.display = "block";
});

document.querySelectorAll(".close").forEach(function (element) {
	element.addEventListener("click", function () {
		element.parentElement.parentElement.style.display = "none";
	});
});

document
	.getElementById("scroll-top-button")
	.addEventListener("click", function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

document.addEventListener("scroll", function () {
	const transformElements = document.querySelectorAll(".transform");
	const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	const threshold = window.innerHeight / 4;

	transformElements.forEach((transformElement) => {
		if (scrollPosition > threshold) {
			const offset = (scrollPosition - threshold) * 2;
			transformElement.style.transform = `translate(-50%, calc(-50% - ${offset}px))`;
		} else {
			transformElement.style.transform = "translate(-50%, -50%)";
		}
	});
});

document.addEventListener("scroll", function () {
	const elementsToAnimate = document.querySelectorAll(".animate");
	const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	const windowHeight = window.innerHeight;

	elementsToAnimate.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top + scrollPosition;
		if (
			scrollPosition + windowHeight >
			elementTop + element.clientHeight / 4
		) {
			element.classList.add("in-view");
		} else {
			element.classList.remove("in-view");
		}
	});
});
