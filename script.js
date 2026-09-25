// View My Projects button
const projectButton = document.querySelector("#home button");

projectButton.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});


// Welcome message
console.log("Welcome to Indira's Portfolio!");