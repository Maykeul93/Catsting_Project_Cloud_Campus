let factTextElement = document.querySelector(".anecdote-content__text");
let buttonFactElement = document.querySelector(".anecdote-container__button");
// function getRandomFact() {
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", `https://catfact.ninja/fact`, true);

//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             let randomFact = JSON.parse(xhr.responseText);
//             // sectionImage.style.backgroundImage = 'url(' + url + ')';
//             factTextElement.textContent = randomFact.fact;
//             console.log(randomFact);
//         } else {
//             console.error(xhr.responseText);
//         }
//     };

//     xhr.send();
// }
// getRandomFact();
// buttonFactElement.addEventListener("click", getRandomFact);

function onInit() {
    addFact();
}

onInit();

async function getFact() {
    return new Promise((resolve) => {
        fetch("https://catfact.ninja/fact", {method: "GET"})
            .then((response) => response.json())
            .then((result) => {
                console.log("result", result);
                resolve(result);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

async function addFact() {
    let fact = await getFact();
    console.log("fact", fact);
    factTextElement.textContent = fact.fact;
}

buttonFactElement.addEventListener("click", addFact);
