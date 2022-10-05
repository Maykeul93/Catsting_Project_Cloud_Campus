let factTextElement = document.querySelector(".anecdote-content__text");
let buttonFactElement = document.querySelector(".anecdote-container__button");
function getRandomFact() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `https://catfact.ninja/fact`, true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let randomFact = JSON.parse(xhr.responseText);
            // sectionImage.style.backgroundImage = 'url(' + url + ')';
            factTextElement.textContent = randomFact.fact;
            console.log(randomFact);
        } else {
            console.error(xhr.responseText);
        }
    };

    xhr.send();
}

// let data = [];
// function getFact() {
//     fetch("https://catfact.ninja/fact", {method: "GET"})
//         .then((response) => response.json())
//         .then((result) => {
//             data = result;
//             console.log("data", data);
//             return data;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// let fact = getFact();
// console.log("test", data);

getRandomFact();

buttonFactElement.addEventListener("click", getRandomFact);
