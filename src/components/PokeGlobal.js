import React, { useState, useEffect } from 'react';
import { dateBuilder } from '../hooks/dateBuilder';
import { getAllPokemons } from '../services/connection';

export const PokeGlobal = () => {
    const [counter, setCounter] = useState();
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState({});
    let arr = [];
    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.results)
            arr.push(data.results);
            setPokemon(arr);
        })
        .catch(err => console.log(err));
    }, [])
    
    // data.then(d =>{
    //     console.log(d);
    // })

    const date = dateBuilder(new Date());
    console.log(pokemon);
    return (
        <div className={date.hora < 15 ? 'fondo-dia' : 'fondo-tarde'}>
            <div className="container" >
                <div className="Header">
                    <h1>Poke Dex</h1>
                </div>
                <div className="row dex">

                    <div className="card col-md-3 pokeContainer"></div>

                </div>
            </div>
        </div>
    )
}

