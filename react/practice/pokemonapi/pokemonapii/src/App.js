import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      const data = await response.json();
      const allPokemon = data.results.map(pokemon => pokemon.name);
      setPokemonList(allPokemon);
    } catch (error) {
      console.error("There was an error fetching the Pokémon data!", error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
