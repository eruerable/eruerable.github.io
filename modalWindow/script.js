'use strict';

// Gets objects from DOM
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Expresses function for opening modal window
const openModal = function() {
		console.log(`Button clicked!`); // DEBUG
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");

	}

// Expresses function for closing modal window
const closeModal = function() {
	console.log("Modal close event detected!"); // DEBUG
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
}

// Adds event listeners to all open buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', openModal);
}

// Implements close on button click
btnCloseModal.addEventListener('click', closeModal);

// Implements close on overlay click
overlay.addEventListener('click', closeModal);

// Implements close on escape, when modal is open
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape' && !modal.classList.contains("hidden")) closeModal();
})
