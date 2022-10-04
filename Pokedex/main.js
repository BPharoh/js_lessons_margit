const content = document.querySelector('.container');
let pokeData = [];


const fetchData =  () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0/')
    .then((response) => response.json())
    .then((pokemon) => { 
        const fetches = pokemon.results.map((item) => {
            return fetch(item.url).then(res => res.json());
        });
    Promise.all(fetches).then((res) => { 
    pokeData = res;
    pokeCards(res);
    });
    console.log(pokemon);
});
};


const pokeCards = (pokemon) => {
    console.log(pokemon);
    const cards = pokeData
    .map((pokemon) => {
        return ` <div class="cards image">
        <h2>${pokemon.id}. ${pokemon.name}</h2>
        <img 
        src="${pokemon.img}/>
        <p> Type: ${pokemon.type}</p>
        </div>`;
        })
        .join('');

content.innerHTML = cards;

};

fetchData();

