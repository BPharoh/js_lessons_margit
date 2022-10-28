const content = document.querySelector('.container');
const search = document.querySelector('#game-search');
const generation = document.querySelectorAll('input[name="gen"]')
let pokeData = [];


const fetchData =  () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0/')
    .then((response) => response.json())
    .then((data) => { 
        const fetches = data.results.map((item) => {
            return fetch(item.url).then(res => res.json())
            .then((data) => {
                return {
                id: data.id,
                name: data.name,
                img: data.sprites.other["official-artwork"].front_default,   
                type: data.types.map((type) => type.type.name).join(', '),
              };
            }); 
        });
    Promise.all(fetches).then((res) => { 
    pokeData = res;
    pokeCards();
    console.log(pokeData);
    });
    });
};


const pokeCards = () => {
    // console.log(pokemon);
    const cards = pokeData
    .map((pokemon) => {
        return ` <div class="cards image">
        <h2>${pokemon.id}. ${pokemon.name}</h2>
        <img src=${pokemon.img} alt="${pokemon.name}"/>
        <p> Type: ${pokemon.type}</p>
        </div>`;
        })
        .join('');

content.innerHTML = cards;

};

fetchData();



