const pokemonContainer = document.querySelector("#pokemonContainer");
const pokemonSearch = document.querySelector("#pokemonSearch");
const buttons = document.querySelectorAll(".buttons");
let pokemonCount = document.querySelector("#pokemonCount");
let pokeData = [];
let gen = [];
let type = [];
let url;
let limit;
let offset;

// console.log("pokemonSearch:", pokemonSearch);


pokemonContainer.style.visibility = 'hidden';
pokemonSearch.style.visibility = 'hidden';

const fetchData =  () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`)
    .then((response) => response.json())
    .then((data) => { 
        const fetches = data.results.map((item) => {
            return fetch(item.url).then(res => res.json())
            .then((data) => {
                return {
                id: data.id,
                name: data.name,
                image: data.sprites.other["official-artwork"].front_default,   
                type: data.types.map((type) => type.type.name).join(' ')
              };
            }); 
        });
    Promise.all(fetches).then((res) => { 
    pokeData = res;
    pokeCards();
    console.log("pokedata", pokeData);
    });
    });
};

const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
      type = pokemon.type.split(" ");
      console.log("type:", type);
      if (type.length < 2) {
        return ` <div class="cards">
        <h2>${pokemon.id}. ${pokemon.name}</h2>
        <div class="pokemon">
        <img src=${pokemon.image} alt="${pokemon.name}"/>
        </div>
        <div class="icons" >
        <img  src="icons/${type[0]}.png" />
        </div>
        </div>`;
      } else {
        return ` <div class="cards image">
        <h2>${pokemon.id}. ${pokemon.name}</h2>
        <div class="pokemon">
        <img src=${pokemon.image} alt="${pokemon.name}"/>
        </div>
        <div class="icons" >
          <img  src="icons/${type[0]}.png" />
          <img  src="icons/${type[1]}.png" />
        </div>
        </div>`;

      }}).join('');
pokemonContainer.innerHTML = cards;
};

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    pokemonContainer.style.visibility = 'visible';
    pokemonSearch.style.visibility = 'visible'; 

    gen = this.value;
    console.log("Looking for gen ", gen);

    switch (gen) {
      case "1":
        limit = 151;
        offset = 0;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "2":
        limit = 100;
        offset = 151;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "3":
        limit = 135;
        offset = 251;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "4":
        limit = 107;
        offset = 386;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "5":
        limit = 156;
        offset = 493;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "6":
        limit = 72;
        offset = 649;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "7":
        limit = 88;
        offset = 721;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "8":
        limit = 96;
        offset = 809;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
      case "9":
        limit = 16;
        offset = 905;
        pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`
        break;
    }
    fetchData();
  });
  
}

pokemonSearch.addEventListener('keyup', () => {
  let kind =[];
  let value = pokemonSearch.value.toLowerCase();
  let cards1 = pokeData.map((poke) => {
    kind = poke.type.split(" ");
    console.log("kind:", kind);
    if (kind.length < 2 && poke.name.includes(value)) {
      return ` <div class="cards">
      <h2>${poke.id}. ${poke.name}</h2>
      <div class="pokemon">
      <img src=${poke.image} alt="${poke.name}"/>
      <div/>
      <div class="icons" >
      <img  src="icons/${kind[0]}.png" />
      </div>
      </div>`;
    } else if (kind.length > 1 && poke.name.includes(value)) {
      return ` <div class="cards image">
      <h2>${poke.id}. ${poke.name}</h2>
      <div class="pokemon">
      <img src=${poke.image} alt="${poke.name}"/>
      <div/>
      <div class="icons" >
        <img src="icons/${kind[0]}.png" />
        <img src="icons/${kind[1]}.png" />
      </div>
      </div>`;
        }
  }).join('');
  pokemonContainer.innerHTML = cards1;
});
  

fetchData();

