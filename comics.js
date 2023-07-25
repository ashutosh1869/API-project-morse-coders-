let input= document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

button.addEventListener(
    "click", 
    (getData = async () => {
        if (input.value.trim().length < 1) {
            alert("Input cannot be blank");
        }
        showContainer.innerHTML = "";
        let url = `https://gateway.marvel.com:443/v1/public/comics?format=comic&ts=1687707530719&apikey=564f30120a3628620c039188d543c91f&hash=968dcaddeb8503ee1db674c917ab968e&titleStartsWith=${input.value}`;

        const response = await fetch(url);
        const jsonData = await response.json();
        jsonData.data["results"].forEach((element) => {
            showContainer.innerHTML += `<div class="card-container"><div class="front-comic-thumbnail"><img src ="${element.thumbnail["path"] +"."+ element.thumbnail["extension"]}"/></div> <div class="back-comic-name">${element.title}</div></div>`;
        });

    })
);
window.onload = () => {
    getData();
};
