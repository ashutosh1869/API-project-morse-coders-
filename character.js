let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list")
const [timestamp, apikey, hashvalue] = [1687383898627,5046,1];

button.addEventListener
(
    "click",
    (getData = async () => {
        if (input.value.trim().length < 1) 
        {
            alert("Please enter a character");
        }
        showContainer.innerHTML = "";
        var url = `https://gateway.marvel.com/v1/public/characters?name=${input.value}&ts=1&apikey=5046b0b09962681107f0fd149bfca3fe&hash=b1f8be131bd5ec04163f4fe78d480c1f`

        const response = await fetch(url);
        const jsonData = await response.json();
        jsonData.data["results"].forEach((element) => {
            showContainer.innerHTML += `<div class="card-container">
            <div class="container-character-image"><img src="${element.thumbnail["path"] + "." 
                + element.thumbnail["extension"]}"/>
            </div>
            <div class="name-description">
            <div class="character-name">${element.name}</div>
            <div class="character-description">${element.description}</div>
            </div>
            </div>`;
        });
    })
);
window.onload = () => {
    getData();
};