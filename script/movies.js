const input = document.querySelector(".movies-input");


const getMovies = async()=>{
const response = await fetch("https://rapidapi.com/marvelflix616/api/marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=Iron'")
const data = response.json();
console.log(data)
}
