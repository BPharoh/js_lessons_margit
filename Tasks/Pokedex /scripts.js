const content = document.querySelector(".container");
const searchPokemonName = document.querySelector("#game-search");
const buttons = document.querySelectorAll(".buttons");
let pokemonCount = document.querySelector("#results");
let pokeData = [];
let gen = [];
let url;
let limit = 1011;
let offset = 0;

const fetchData = async () => {
  url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const fetches = data.results.map((item) => {
        return fetch(item.url)
          .then((res) => res.json())
          .then((data) => {
            return {
              id: data.id,
              name: data.name,
              img: data.sprites.other["official-artwork"].front_default,
              type: data.types.map((type) => type.type.name).join(", "),
            };
          });
      });
      Promise.all(fetches).then((res) => {
        pokeData = res;
        pokeCards();
        if(pokeData != undefined) {
          localStorage.setItem("pokeData", JSON.stringify(data))
          } else {
              pokeData = JSON.parse(localStorage.getItem("pokeData"));
             }
        console.log("pokeData: ", pokeData);
      });
    });
};

//Sort generations

/* Function to take value from button, then switch the value to limit & offset, 
then pass them to function fetchData above */
for (const btn of buttons) {
  btn.addEventListener("click", function () {
    gen = this.value;
    console.log("Looking for gen ", gen);

    switch (gen) {
      case "1":
        limit = 151;
        offset = 0;
        break;
      case "2":
        limit = 100;
        offset = 151;
        break;
      case "3":
        limit = 135;
        offset = 251;
        break;
      case "4":
        limit = 107;
        offset = 386;
        break;
      case "5":
        limit = 156;
        offset = 493;
        break;
      case "6":
        limit = 72;
        offset = 649;
        break;
      case "7":
        limit = 88;
        offset = 721;
        break;
      case "8":
        limit = 96;
        offset = 809;
        break;
      case "9":
        limit = 16;
        offset = 905;
        break;
    }
    fetchData(limit, offset);
  });
}

pokemonCount.innerHTML = `There are ${limit} pokemons in this generation`

// End of attempt to sort generations

const pokeCards = () => {
  //
  const cards = pokeData
    .map((pokemon) => {
      return ` <div class="cards image">
        <h2>${pokemon.id}. ${pokemon.name}</h2>
        <img src=${pokemon.img} alt="${pokemon.name}"/>
        <p> Type: ${pokemon.type}</p>
        </div>`;
    })
    .join("");
  console.log(pokeData);
  content.innerHTML = cards;
};

fetchData(limit, offset);
