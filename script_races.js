const countryElement = document.querySelector(".country-filter");
const breedContainerElement = document.querySelector(".race-left__breeds");
const breedsResultsNumber = document.querySelector(".race-left__results");

async function getBreeds() {
    return new Promise((resolve) => {
        fetch("https://catfact.ninja/breeds?limit=100")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                resolve(result.data);
            })
            .catch((error) => console.log("error", error));
    });
}

async function onInit() {
    let breeds = await getBreeds();
    console.log(breeds);
    addCountryToSelect(breeds);
    breeds = filterBreedsByCountry(breeds);
    addBreedToSelect(breeds);
}

function addBreedToSelect(breedsElement) {
    breedsResultsNumber.textContent = `${breedsElement.length} résultats`;
    breedContainerElement.innerHTML = "";
    breedsElement.forEach((element) => {
        const breed = document.createElement("li");
        breed.textContent = element.breed;
        breedContainerElement.appendChild(breed);
    });
}

function addCountryToSelect(dataElement) {
    let country = [];
    dataElement.forEach((element) => {
        let countryAlreadyInArray = country.includes(
            element.country.toString()
        );
        if (!countryAlreadyInArray) {
            country.push(element.country.toString());
            const option = document.createElement("option");
            option.textContent = element.country.toString();
            option.value = element.country.toString();
            countryElement.appendChild(option);
        }
    });
}

function filterBreedsByCountry(breeds) {
    if (countryElement.value === "null") {
        return breeds;
    } else {
        let data = breeds.filter(
            (element) => element.country == countryElement.value
        );
        return data;
    }
}
onInit();
