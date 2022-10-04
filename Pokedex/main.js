const content = document.querySelector('.container');
let pokeData = [];

const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then((response) => response.json())
    .then((data) => { 
     pokeData = data.results;
     pokeCards();
});

};

const pokeCards = () => {
    let cards = pokeData.map((pokemon) => {
        return ` <div class="cards image">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="pokemon">
        <h2>${pokemon.name}</h2>
        </div>`;
        })
        .join('');

content.innerHTML = cards;

};

fetchData();