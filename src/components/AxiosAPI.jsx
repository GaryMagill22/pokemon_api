import React, { useState } from 'react';
import axios from 'axios';






// State variables
const AxiosAPI = (props) => {
    const [pokemon, setPokemon] = useState([]);


    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(response => {
            setPokemon(response.data.results)
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }




    return (
        <>
            <button onClick={fetchData} style={{ marginTop: "100px" }} >Fetch Pokemon</button>
            {
                pokemon.map((poke, i) => {
                    return (
                        <div>
                            <p key={i}>{poke.name}pokemon</p>
                            <p></p>
                        </div>
                    )
                })
            }
        </>
    );
}


export default AxiosAPI;
