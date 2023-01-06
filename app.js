const $container = document.getElementById("container");
const URL_API = "https://rickandmortyapi.com/api/character";
console.log(URL_API);

fetch (URL_API)
.then((response) => response.json())
.then((data) => {
    const characters = data.results;

    for (let character of characters) {
        console.log(character);
        $container.innerHTML += `
        <article class="container_main">
        <img class="container_main_img" src="${character.image}" alt=" Imagen de ${character.name}">
        <p class="container_main_text">${character.name}</p>
        <p class="container_main_text">${character.species}</p>
        <p class="container_main_text">${character.status}</p>
        </article>
        `
    }
})