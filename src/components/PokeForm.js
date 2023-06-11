import React, { useEffect, useState } from 'react';

const PokeForm = (props) => {
    const [pokeData, setPokeData] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    };

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(response => {
                setPokeData(response.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    // map over the pokeData and then display all of the fetched pokemon
    return (
        <>
            <button onClick={handleClick} style={{ marginTop: "100px" }} type="submit">Fetch Pokemon</button>
            {toggle && pokeData.map((pokemon) => (
                <p key={pokemon.name}>{pokemon.name}</p>
            ))}
        </>
    );
};

export default PokeForm;
