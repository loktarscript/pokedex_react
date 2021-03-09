
// export const getPokemonByName = (pokeQuery) =>{
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeQuery.toLowerCase()}`)
//                 .then(res => res.json())
//                 .then(response => {
//                     setPokemon({
//                         name: pokeQuery,
//                         species: response.species.name,
//                         img: response.sprites.other.dream_world.front_default,
//                         hp: response.stats[0].base_stat,
//                         atack: response.stats[1].base_stat,
//                         defense: response.stats[2].base_stat,
//                         special_attack: response.stats[3].base_stat,
//                         special_defense: response.stats[4].base_stat,
//                         speed: response.stats[5].base_stat,
//                         type: response.types[0].type.name,
//                     });
//                     console.log(response.stats[0].base_stat)
//                     console.log(`${pokemon.name} AAAAAAAAAA`)
//                     setPokeElegido(true);
//                     setPokeQuery('');
//                 })
//                 .catch(err => {
//                     setPokeElegido(false);
//                     console.log(err);
//                 })
// };

export const getAllPokemons = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1118`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                resolve(data)
            })
            .catch(err => reject(err));
    })
}