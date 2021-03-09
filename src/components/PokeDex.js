import React, { useState } from 'react'
import './pokedex.css';
import BarChart from 'react-bar-chart';

export const PokeDex = () => {
    const [pokeQuery, setPokeQuery] = useState('');
    const [pokeElegido, setPokeElegido] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        atack: "",
        defense: "",
        type: "",
    });
    const busqueda = evt => {
        if (evt.key === "Enter") {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeQuery.toLowerCase()}`)
                .then(res => res.json())
                .then(response => {
                    setPokemon({
                        name: pokeQuery,
                        species: response.species.name,
                        img: response.sprites.other.dream_world.front_default,
                        hp: response.stats[0].base_stat,
                        atack: response.stats[1].base_stat,
                        defense: response.stats[2].base_stat,
                        special_attack: response.stats[3].base_stat,
                        special_defense: response.stats[4].base_stat,
                        speed: response.stats[5].base_stat,
                        type: response.types[0].type.name,
                    });
                    setPokeElegido(true);
                    setPokeQuery('');
                })
                .catch(err => {
                    setPokeElegido(false);
                    console.log(err);
                })
        }
    };
    const data = [
        { text: 'ATK', value: pokemon.atack },
        { text: 'SP ATK', value: pokemon.atack },
        { text: 'DEF', value: pokemon.special_attack },
        { text: 'DEF SP', value: pokemon.special_defense },
        { text: 'SPEED', value: pokemon.speed },
        { text: 'HP', value: pokemon.hp }
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 80 };

    const dateBuilder = (d) => {
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        let dia = dias[d.getDay()];
        let fecha = d.getDate();
        let mes = meses[d.getMonth()];
        let anio = d.getFullYear();
        let hora = d.getHours();
        let obj = { dia, fecha, mes, anio, hora };
        return obj;
    };
    const date = dateBuilder(new Date());

    return (
        <div className={date.hora < 15 ? 'fondo-dia' : 'fondo-tarde'}>
            <div className="container" >
                <div className="Header">
                    <h1>Poke Dex</h1>
                    {!pokeElegido ? (<h3>Por favor elija un Pokémon</h3>) : (<br />)}
                    <input
                        type="text"
                        className="search-bar form-control"
                        placeholder="Búsqueda..."
                        onChange={e => setPokeQuery(e.target.value)}
                        value={pokeQuery}
                        onKeyPress={busqueda}
                    />
                </div>
                <div className={!pokeElegido ? (null) : 'row justify-content-center'}>{!pokeElegido ? (null) : (
                    <div className="DisplaySection">
                        <div class="col-md-12">
                            <div className="dex">
                                <img className="image-container" src={pokemon.img} alt={pokemon.name} />
                                <h1>{pokemon.name}</h1>
                                <h3 className="type-pkmn">{pokemon.type}</h3>
                            </div>
                        </div>
                        <div class="col-md-12">
                        <div className="dex">
                        <h3>Stats</h3>
                        </div>
                            
                            <div className="dex">
                                <table className="tabla_stats">
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <td>{pokemon.hp}</td>
                                        </tr>
                                        <tr>
                                            <td>Ataque</td>
                                            <td>{pokemon.atack}</td>
                                        </tr>
                                        <tr>
                                            <td>Defensa</td>
                                            <td>{pokemon.defense}</td>
                                        </tr>
                                        <tr>
                                            <td>Ataque Especial</td>
                                            <td>{pokemon.special_attack}</td>
                                        </tr>
                                        <tr>
                                            <td>Defensa Especial</td>
                                            <td>{pokemon.special_defense}</td>
                                        </tr>
                                        <tr>
                                            <td>Velocidad</td>
                                            <td>{pokemon.speed}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="dex">

                                <BarChart
                                    width={400}
                                    height={300}
                                    margin={margin}
                                    data={data}
                                    onBarClick={() => console.log('HOLAAAAA')} />
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div> {/* Container */}
        </div >
    )
}
