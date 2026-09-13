const beginButton = document.getElementById("beginBtn");

const continueButton = document.getElementById("continueBtn");

const nameInput = document.getElementById("nameInput");

const nameError = document.getElementById("nameError");

const welcomeScreen = document.getElementById("welcomeScreen");

const nameScreen = document.getElementById("nameScreen");


// ==========================================
// BEGIN JOURNEY
// ==========================================

beginButton.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");

    nameScreen.classList.add("active");

    nameInput.focus();

});


// ==========================================
// CONTINUE AFTER NAME
// ==========================================

continueButton.addEventListener("click", function () {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Please enter your name to continue.";

        nameInput.focus();

        return;
    }

    nameError.textContent = "";

    alert("Welcome, " + name + " 🪷");

});


// ==========================================
// ENTER KEY
// ==========================================

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        continueButton.click();

    }

});