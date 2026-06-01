import React, { useState, useEffect } from 'react';
import './card3.css';
import pokewata from '../assets/staryyu.png';
import useFetchpokeapi from '../hooks/userFetchpokeapi';

function App() {
  const {pokemons, loading, error} = useFetchpokeapi("staryu");

  if (loading) return 
    <div 
      className="loader">Carregando Pokédex...
    </div>

  if (error) return 
    <div
      className="error">Ocorreu um erro inesperado
    </div>

return (

  <div className="App2">

    <h1>Poke Card</h1>

    <div className="pokemon-container">

      <div className="pokemon-card2">

        <h3>{pokemons.name}</h3>

        <img
          src={pokewata}
          alt="staryu"
          className="pokemon2"
        />

        <div className="stats">

          <p><strong>HP:</strong> {pokemons.stats[0].base_stat}</p>

          <p><strong>Attack:</strong> {pokemons.stats[1].base_stat}</p>

          <p><strong>Defense:</strong> {pokemons.stats[2].base_stat}</p>

          <p><strong>Speed:</strong> {pokemons.stats[5].base_stat}</p>

        </div>

        <div className="types">

          {pokemons.types.map((type, index) => (

            <span
              key={index}
              className={`type ${type.type.name}`}
            >
              {type.type.name}
            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

);
}

export default App;
