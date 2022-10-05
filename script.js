var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};

fetch("https://catfact.ninja/breeds?limit=1", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
