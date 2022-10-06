const darkModeElement = document.querySelector(".navbar__darkmodeImg");
const anecdoteTextElement = document.querySelector(".anecdote-content__text");
darkModeElement.style.width = "32px";

darkModeElement.addEventListener("click", () => {
    document.body.classList.toggle("dark-background");
    console.log(anecdoteTextElement);
    anecdoteTextElement.classList.toggle("dark-font");
    console.log(darkModeElement);
    if (darkModeElement.src == "http://127.0.0.1:5500/darkmode.png") {
        console.log(darkModeElement.src);
        darkModeElement.src = "lightmode.png";
        console.log(darkModeElement.src);
    } else {
        darkModeElement.src = "darkmode.png";
    }
});
