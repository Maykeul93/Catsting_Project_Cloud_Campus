const countryElement = document.querySelector(".country-filter");
const coatElement = document.querySelector(".pelage-filter");
const breedContainerElement = document.querySelector(".race-left__breeds");
const breedsResultsNumber = document.querySelector(".race-left__results");
const test = document.querySelector(".race-left__breeds");

async function getBreeds() {
    return new Promise((resolve) => {
        fetch("https://catfact.ninja/breeds?limit=100")
            .then((response) => response.json())
            .then((result) => {
                if (countryElement.value === "null") {
                    console.log(result);
                    resolve(result.data);
                } else {
                    let data = result.data.filter(
                        (element) => element.country == countryElement.value
                    );
                    console.log(data);
                    resolve(data);
                }
            })
            .catch((error) => console.log("error", error));
    });
}

console.log(getBreeds());

async function onInit() {
    let breeds = await getBreeds();
    console.log(breeds);
    addBreedToSelect(breeds);
    addCountryToSelect(breeds);
    addCoatToSelect(breeds);
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

function addCoatToSelect(dataCoatElement){
    let coat = [];
    dataCoatElement.forEach((element) => {
        let coatAlreadyInArray = coat.includes(
            element.coat.toString(),
        );
        if (!coatAlreadyInArray) {
            coat.push(element.coat.toString());
            const option = document.createElement("option");
            option.textContent = element.coat.toString();
            option.value = element.coat.toString();
            coatElement.appendChild(option);
        }
    });
}

function myFunction() {
    test.innerHTML = "Hello World";
  }

onInit();
