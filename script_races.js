var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};



function getBreeds() {
    fetch("https://catfact.ninja/breeds", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(JSON.parse(result).data))
    .catch((error) => console.log("error", error));
    

}