let button = document.querySelector(".btn");
let sectionImage = document.querySelector(".img-dog");
let select = document.querySelector(".select");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://dog.ceo/api/breed/hound/afghan/images/random", true);

xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText).message);
        sectionImage.style.backgroundImage =
            "url(" + JSON.parse(xhr.responseText).message + ")";
    } else {
        console.error(xhr.responseText);
    }
};
xhr.send();

button.addEventListener("click", getImageDog);

async function getBreeds() {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://dog.ceo/api/breeds/list/all", true);

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText).message);
            } else {
                console.error(xhr.responseText);
            }
        };

        xhr.send();
    });
}

// getBreeds().then((response) => {
//     addBreedToSelect(response);
// })

async function getDatas() {
    let breeds = await getBreeds();
    addBreedsToSelect(breeds);
}

getDatas();

// ------------------------------------------------------ FONCTIONS
function addBreedsToSelect(breedObejct) {
    breeds = [];
    for (let breed in breedObejct) {
        breeds.push(breed);
    }
    breeds.forEach((breed) => {
        let option = document.createElement("option");
        option.textContent = breed;
        option.value = breed;
        select.appendChild(option);
    });
}

function getImageDog() {
    let xhr = new XMLHttpRequest();

    if (select.value === "null") {
        xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    } else {
        xhr.open(
            "GET",
            `https://dog.ceo/api/breed/${select.value}/images/random`,
            true
        );
    }

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let url = JSON.parse(xhr.responseText).message;
            // sectionImage.style.backgroundImage = 'url(' + url + ')';
            sectionImage.style.backgroundImage = `url(${url})`;
        } else {
            console.error(xhr.responseText);
        }
    };

    xhr.send();
}
